// Predicción de ciclo — reimplementación propia inspirada en Mensinator/ephira (MIT).
export const DAY = 86400000;
export const toDate = s => new Date(s + 'T00:00:00Z');
export const iso = d => d.toISOString().slice(0, 10);
export const addDays = (s, n) => iso(new Date(toDate(s).getTime() + n * DAY));
export const diff = (a, b) => Math.round((toDate(b) - toDate(a)) / DAY);

// Agrupa días de sangrado en periodos (huecos de >2 días separan periodos)
export function periods(flowDays) {
  const d = [...new Set(flowDays)].sort();
  const out = [];
  for (const x of d) {
    const last = out[out.length - 1];
    if (last && diff(last.end, x) <= 2) last.end = x; else out.push({ start: x, end: x });
  }
  return out;
}

export function predict(flowDays, { window = 6, luteal = 14, defaultCycle = 28, defaultLen = 5 } = {}) {
  const ps = periods(flowDays);
  if (!ps.length) return null;
  const cycles = [];
  for (let i = 1; i < ps.length; i++) {
    const c = diff(ps[i - 1].start, ps[i].start);
    if (c >= 15 && c <= 60) cycles.push(c); // descarta outliers
  }
  const recent = cycles.slice(-window);
  const avg = recent.length ? recent.reduce((a, b) => a + b, 0) / recent.length : defaultCycle;
  const cycle = Math.round(avg);
  const lens = ps.slice(-window).map(p => diff(p.start, p.end) + 1);
  const periodLen = ps.length > 1 || lens[0] > 1 ? Math.round(lens.reduce((a, b) => a + b, 0) / lens.length) : defaultLen;
  const sd = recent.length > 1 ? Math.sqrt(recent.reduce((a, b) => a + (b - avg) ** 2, 0) / recent.length) : null;
  const last = ps[ps.length - 1].start;
  const next = addDays(last, cycle);
  const ovulation = addDays(next, -luteal);
  return {
    cycle, periodLen, sd, regular: sd === null ? null : sd <= 4, lastStart: last,
    next, ovulation, fertileStart: addDays(ovulation, -5), fertileEnd: addDays(ovulation, 1),
    upcoming: [0, 1, 2].map(k => addDays(last, cycle * (k + 1))), cyclesUsed: recent.length,
  };
}

// Día de ciclo sin envolver: si el periodo se atrasa, sigue contando (día 33 de 28 = atraso de 5)
export function cycleDay(p, today) { return p ? diff(p.lastStart, today) + 1 : null; }
export const lateDays = (p, today) => (p ? Math.max(0, diff(p.next, today)) : 0);
// Historial de ciclos completos (Flo/Clue "Mis ciclos")
export function history(flowDays) {
  const ps = periods(flowDays);
  return ps.map((p, i) => ({ start: p.start, len: diff(p.start, p.end) + 1, cycle: ps[i + 1] ? diff(p.start, ps[i + 1].start) : null })).reverse();
}
export function phase(p, day) {
  if (!p || !day) return '—';
  const ov = p.cycle - 14;
  if (day > p.cycle) return 'Atrasada';
  if (day <= p.periodLen) return 'Menstrual';
  if (day < ov - 1) return 'Folicular';
  if (day <= ov + 1) return 'Ovulatoria';
  return 'Lútea';
}
