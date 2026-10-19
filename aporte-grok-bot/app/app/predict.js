// Predicción de ciclo — reimplementación propia inspirada en Mensinator/ephira (MIT).
export const DAY = 86400000;
export const toDate = s => new Date(s + 'T00:00:00Z');
export const iso = d => d.toISOString().slice(0, 10);
export const addDays = (s, n) => iso(new Date(toDate(s).getTime() + n * DAY));
export const diff = (a, b) => Math.round((toDate(b) - toDate(a)) / DAY);

// Fecha de calendario real 'AAAA-MM-DD' (rechaza 2026-13-01, 2026-02-31…): una fecha imposible hacía lanzar
// RangeError en addDays()/iso() y dejaba la app sin poder abrirse tras importar un backup así.
export const validDate = s => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(toDate(s)) && iso(toDate(s)) === s;

// Agrupa días de sangrado en periodos (huecos de >2 días separan periodos)
export function periods(flowDays) {
  const d = [...new Set(flowDays)].filter(validDate).sort();
  const out = [];
  for (const x of d) {
    const last = out[out.length - 1];
    if (last && diff(last.end, x) <= 2) last.end = x; else out.push({ start: x, end: x });
  }
  return out;
}

// Estadística robusta adaptada de HYPERSAHIL/periodtracker src/lib/cycle.ts (MIT, (c) 2026 Period Tracker contributors,
// commit 565b282): mediana ponderada por recencia (0.75^k), contracción hacia 28.5 d con 3 pseudo-observaciones
// mientras hay <6 ciclos, y ventana de incertidumbre ± basada en MAD/cobertura 80 % de tu propia variación.
const median = v => { if (!v.length) return 0; const s = [...v].sort((a, b) => a - b), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
function weightedMedian(v, w) {
  const pr = v.map((x, i) => [x, w[i]]).sort((a, b) => a[0] - b[0]), tot = pr.reduce((a, [, x]) => a + x, 0);
  let c = 0; for (const [x, k] of pr) { c += k; if (c >= tot / 2) return x; } return pr.at(-1)[0];
}
export function uncertainty(l) {
  if (l.length <= 1) return 7;
  if (l.length === 2) return Math.min(14, Math.max(5, Math.ceil(Math.abs(l[1] - l[0]) / 2) + 3));
  const c = median(l), mad = median(l.map(x => Math.abs(x - c))), r = l.map(x => Math.abs(x - c)).sort((a, b) => a - b);
  return Math.min(14, Math.max(2, Math.ceil(Math.max(mad * 1.4826, r[Math.ceil((r.length - 1) * 0.8)]) + 2)));
}
export function predict(flowDays, { window = 6, luteal = 14, defaultCycle = 28, defaultLen = 5 } = {}) {
  const ps = periods(flowDays);
  if (!ps.length) return null;
  const cycles = [];
  for (let i = 1; i < ps.length; i++) { const c = diff(ps[i - 1].start, ps[i].start); if (c >= 15 && c <= 60) cycles.push(c); } // outliers fuera (Lunilla: 60 d; upstream usa 90 para perimenopausia)
  const recent = cycles.slice(-window), n = recent.length;
  const avg = n ? recent.reduce((a, b) => a + b, 0) / n : defaultCycle;
  const wm = n ? weightedMedian(recent, recent.map((_, i) => 0.75 ** (n - 1 - i))) : defaultCycle;
  const cycle = n ? Math.max(15, Math.min(90, Math.round(n >= 6 ? wm : (wm * n + 28.5 * 3) / (n + 3)))) : defaultCycle;
  const lens = ps.slice(-window).map(p => diff(p.start, p.end) + 1);
  const periodLen = ps.length > 1 || lens[0] > 1 ? Math.round(lens.reduce((a, b) => a + b, 0) / lens.length) : defaultLen;
  const sd = n > 1 ? Math.sqrt(recent.reduce((a, b) => a + (b - avg) ** 2, 0) / n) : null;
  const last = ps[ps.length - 1].start, next = addDays(last, cycle), ovulation = addDays(next, -luteal), unc = n ? uncertainty(recent) : 7;
  return {
    cycle, periodLen, sd, regular: sd === null ? null : sd <= 4, lastStart: last, uncertainty: unc,
    window: { start: addDays(next, -unc), end: addDays(next, unc) },
    next, ovulation, fertileStart: addDays(ovulation, -5), fertileEnd: addDays(ovulation, 1),
    upcoming: [0, 1, 2].map(k => addDays(last, cycle * (k + 1))), cyclesUsed: n,
  };
}

// Ronda 6: próximas fechas "rodadas" hasta hoy. Si la última regla registrada es de hace meses, p.upcoming quedaba
// entero en el pasado (el .ics exportaba 3 eventos viejos y el calendario no marcaba nada a futuro).
// Idea adaptada de FlowerYes/moj src/lib/cycle.ts buildPrediction (MIT © 2026 moj contributors, commit 19c5148):
// `while (nextPeriodStart <= today) nextPeriodStart += cycleLength`. Aquí solo se saltan los periodos previstos que
// ya terminaron por completo (inicio + duración <= hoy), así un atraso de pocos días sigue mostrando la fecha esperada.
export function upcomingFrom(p, today, count = 3) {
  if (!p || !validDate(today)) return p ? p.upcoming : [];
  let s = p.next; const out = [];
  for (let guard = 0; out.length < count && guard < 400; guard++) { if (diff(addDays(s, p.periodLen), today) < 0) out.push(s); s = addDays(s, p.cycle); }
  return out;
}

export function cycleDay(p, today) { return p ? diff(p.lastStart, today) + 1 : null; }
export const lateDays = (p, today) => (p ? Math.max(0, diff(p.next, today)) : 0);
// Historial de ciclos completos (Flo/Clue "Mis ciclos")
export function history(flowDays) {
  const ps = periods(flowDays);
  return ps.map((p, i) => ({ start: p.start, len: diff(p.start, p.end) + 1, cycle: ps[i + 1] ? diff(p.start, ps[i + 1].start) : null })).reverse();
}
export function phase(p, day, bleeding = false) {
  if (!p || !day) return '—';
  if (bleeding) return 'Menstrual'; // si hoy hay sangrado registrado, manda el dato real sobre el promedio
  const ov = p.cycle - 14;
  if (day > p.cycle) return 'Atrasada';
  if (day <= p.periodLen) return 'Menstrual';
  if (day < ov - 1) return 'Folicular';
  if (day <= ov + 1) return 'Ovulatoria';
  return 'Lútea';
}

// Probabilidad relativa de fertilidad (campana gaussiana alrededor de la ovulación) —
// adaptado de alwin-m/ROS-Cycle-Project index.html getDayDetails (MIT © 2025 Alwin Madhu, commit 7722a77).
// Upstream: pov = exp(-(dayInCycle - ovulationCenter)² / (2·(sigma+1.5)²)); umbrales high>0.6 / medium>0.25.
// Aquí sigma se deriva de la incertidumbre de Lunilla (días ±) acotada; dayInCycle es 0-index desde el inicio del ciclo.
export function fertilityPov(dayInCycle, cycleLen, sigma = 2) {
  if (!Number.isFinite(dayInCycle) || !Number.isFinite(cycleLen) || cycleLen < 15) return 0;
  const ovulationCenter = cycleLen - 14;
  const s = Math.max(0.5, Number(sigma) || 2) + 1.5;
  const d = dayInCycle - ovulationCenter;
  return Math.exp(-(d * d) / (2 * s * s));
}
export function fertilityLevel(pov) {
  if (pov > 0.6) return 'alta';
  if (pov > 0.25) return 'media';
  return 'baja';
}
