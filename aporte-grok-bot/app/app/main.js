import { predict, cycleDay, phase, periods, iso, addDays, diff, lateDays, history, validDate, upcomingFrom, fertilityPov, fertilityLevel } from './predict.js';
import { sparkline } from '../third_party/sparkline.js';
import { phaseInfo } from './phases.js';
import { predictionICS } from './calendar.js';
import { Vault } from './store.js';
import { keyTarget, rovingFocus } from '../third_party/apg-calendar-keys.js';
const $ = s => document.querySelector(s);
const OPTS = {
  flow: ['', 'Manchado', 'Leve', 'Medio', 'Abundante'],
  sym: ['Cólicos', 'Dolor de cabeza', 'Hinchazón', 'Acné', 'Sensibilidad mamaria', 'Cansancio', 'Antojos', 'Náuseas'],
  mood: ['', '😊 Bien', '😐 Normal', '😢 Triste', '😠 Irritable', '😰 Ansiosa'],
};
let data = { days: {} }, view = new Date(), sel = null, focusDay = null, lastDate = null; // focusDay: día con tabindex 0 en el calendario (APG)
const localToday = () => iso(new Date(Date.now() - new Date().getTimezoneOffset() * 60000));
let today = localToday(); // se recalcula al volver a la app: una PWA abierta de un día para otro marcaba "hoy" con la fecha vieja
const fmt = s => new Date(s + 'T12:00:00').toLocaleDateString('es', { day: 'numeric', month: 'short' });

$('#lockMsg').textContent = Vault.exists() ? 'Ingresá tu PIN para desbloquear.' : 'Creá un PIN para cifrar tus datos en este dispositivo.';
$('#pinForm').onsubmit = async e => {
  e.preventDefault();
  let opened;
  try { opened = await Vault.open($('#pin').value); }
  catch { $('#pinErr').textContent = 'PIN incorrecto'; $('#lock').classList.remove('shake'); void $('#lock').offsetWidth; $('#lock').classList.add('shake'); return; }
  // Un error al dibujar ya no se confunde con "PIN incorrecto": se sanea lo descifrado y se muestra igual.
  data = { ...opened, days: Object.fromEntries(Object.entries(opened?.days || {}).filter(([k]) => validDate(k))) };
  $('#lock').hidden = true; $('#main').hidden = false; render();
};
document.addEventListener('visibilitychange', () => { if (!document.hidden && localToday() !== today) { today = localToday(); if (!$('#main').hidden) render(); } });
$('#lockBtn').onclick = () => location.reload();

function render() {
  const flowDays = Object.entries(data.days).filter(([, v]) => v.flow > 0).map(([k]) => k);
  const p = predict(flowDays);
  const cd = cycleDay(p, today);
  const late = lateDays(p, today);
  $('#summary').innerHTML = p ? `
    <div class="ring${late ? ' late' : ''}" style="--pct:${Math.min(100, (cd / p.cycle) * 100)}" role="img" aria-label="Día ${cd} de un ciclo de ${p.cycle}"><b>${cd}</b><span>día</span></div>
    <div><h2>${late ? `Atraso de ${late} día${late > 1 ? 's' : ''}` : `Fase ${phase(p, cd, data.days[today]?.flow > 0)}`}</h2>
    <p>${late ? `Se esperaba el ${fmt(p.next)}. Los atrasos cortos son comunes; si te preocupa, consultá.` : `Próximo periodo: <b>${fmt(p.next)}</b> (${diff(today, p.next)} días) <span class="small">± ${p.uncertainty} d · entre ${fmt(p.window.start)} y ${fmt(p.window.end)}</span>`}</p>
    <p>Ovulación estimada: <b>${fmt(p.ovulation)}</b></p>
    <p class="small">Ciclo medio ${p.cycle} d · periodo ${p.periodLen} d · ${p.regular === null ? 'registrá más ciclos' : p.regular ? 'regular' : 'irregular'}</p>${phaseBox(late ? null : phase(p, cd, data.days[today]?.flow > 0))}</div>`
    : `<div><h2>¡Bienvenida!</h2><p>Tocá un día del calendario para registrar tu periodo.</p></div>`;
  const pred = new Set(), fert = new Set();
  if (p) for (const s of upcomingFrom(p, today)) for (let i = 0; i < p.periodLen; i++) pred.add(addDays(s, i));
  if (p) for (let d = p.fertileStart; d <= p.fertileEnd; d = addDays(d, 1)) fert.add(d);
  const y = view.getFullYear(), m = view.getMonth();
  $('#month').textContent = view.toLocaleDateString('es', { month: 'long', year: 'numeric' });
  const first = (new Date(y, m, 1).getDay() + 6) % 7, n = new Date(y, m + 1, 0).getDate();
  let h = '<span></span>'.repeat(first);
  for (let d = 1; d <= n; d++) {
    const k = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`, v = data.days[k] || {};
    const dayN = p ? diff(p.lastStart, k) : null; // 0 = día del inicio
    const sigma = p ? Math.max(1, Math.min(6, (p.uncertainty || 7) / 3)) : 2;
    const pov = (p && dayN != null && dayN >= 0 && dayN < p.cycle * 2) ? fertilityPov(dayN % p.cycle, p.cycle, sigma) : 0;
    const fl = fertilityLevel(pov);
    const c = [v.flow > 0 ? 'p' : pred.has(k) ? 'pp' : '', fert.has(k) || fl !== 'baja' ? 'f' : '', fl === 'alta' ? 'f-hi' : fl === 'media' ? 'f-mid' : '', p && k === p.ovulation ? 'o' : '', k === today ? 't' : ''].filter(Boolean).join(' ');
    const lab = [d, v.flow > 0 ? 'periodo' : pred.has(k) ? 'periodo previsto' : '', fl !== 'baja' ? `fértil (${fl})` : '', p && k === p.ovulation ? 'ovulación' : '', k === today ? 'hoy' : ''].filter(Boolean).join(', ');
    h += `<button class="day ${c}" data-d="${k}" aria-label="${lab}" style="animation-delay:${d * 12}ms${fl !== 'baja' && !(v.flow > 0) ? `;--fert:${pov.toFixed(2)}` : ''}">${d}${v.sym?.length || v.mood || v.note ? '<i class="dot"></i>' : ''}</button>`;
  }
  $('#cal').innerHTML = h;
  // Roving tabindex (APG datepicker): un solo día en el orden de Tab (el enfocado, hoy o el 1.º del mes); flechas para moverse
  const cells = $('#cal').querySelectorAll('.day'), inView = k => k && k.slice(0, 7) === `${y}-${String(m + 1).padStart(2, '0')}`;
  rovingFocus(cells, inView(focusDay) ? focusDay : inView(today) ? today : cells[0].dataset.d, false);
  const cur = periods(flowDays).at(-1), curLen = cur && diff(cur.end, today) <= 2 ? diff(cur.start, cur.end) + 1 : 0;
  $('#notice').hidden = curLen <= 7; $('#notice').innerHTML = curLen > 7 ? `<b>Sangrado de ${curLen} días.</b> Los periodos de más de una semana son un motivo habitual para consultar con tu médica/o. <span class="small">Fuente: ACOG, sangrado uterino anormal. No es un diagnóstico.</span>` : '';
  const hs = history(flowDays).slice(0, 6);
  $('#hist').innerHTML = hs.length ? hs.map(x => `<li><span>${fmt(x.start)}</span><span class="bar" style="--w:${Math.min(100, ((x.cycle || cd || 1) / 45) * 100)}%"><i style="--w:${(x.len / (x.cycle || cd || x.len)) * 100}%"></i></span><span>${x.cycle ? x.cycle + ' d' : 'en curso'} · ${x.len} d</span></li>`).join('') : '<li class="small">Todavía no hay ciclos registrados.</li>';
  // Sparkline de longitudes de ciclo (fnando/sparkline MIT) — solo ciclos cerrados, más antiguo → más reciente
  const lens = history(flowDays).filter(x => x.cycle).map(x => x.cycle).reverse().slice(-12);
  let sparkWrap = document.getElementById('cycleSpark');
  if (!sparkWrap) {
    sparkWrap = document.createElement('div'); sparkWrap.id = 'cycleSpark'; sparkWrap.className = 'spark-wrap';
    sparkWrap.innerHTML = '<p class="small">Tendencia de duración del ciclo</p><svg class="sparkline" id="sparkSvg" width="280" height="40" stroke-width="2" stroke="#e2557b" fill="rgba(226,85,123,.15)"></svg><p class="small" id="sparkTip" aria-live="polite"></p>';
    $('#hist').parentElement.appendChild(sparkWrap);
  }
  const svg = document.getElementById('sparkSvg'), tip = document.getElementById('sparkTip');
  if (lens.length >= 2) {
    sparkWrap.hidden = false;
    sparkline(svg, lens, {
      interactive: true,
      onmousemove: (_e, dp) => { tip.textContent = `Ciclo ${dp.index + 1}: ${dp.value} días`; },
      onmouseout: () => { tip.textContent = lens.length ? `${lens.length} ciclos · último ${lens.at(-1)} d` : ''; },
    });
    tip.textContent = `${lens.length} ciclos · último ${lens.at(-1)} d`;
  } else { sparkWrap.hidden = true; tip.textContent = ''; }
  $('#todayBtn').textContent = data.days[today]?.flow > 0 ? '✓ Periodo registrado hoy' : 'Hoy me vino el periodo';
}
// "¿Qué pasa en esta fase?" — textos de IraSoro/peri (MIT), ver phases.js
function phaseBox(name) {
  const i = phaseInfo(name); if (!i) return '';
  return `<details class="phase"><summary>¿Qué pasa en la ${i.title.toLowerCase()}?</summary><p>${i.description}</p><p class="small"><b>Síntomas frecuentes:</b></p><ul>${i.symptoms.map(x => `<li>${x}</li>`).join('')}</ul><p class="small">Fuente: app Peri (MIT). Cada cuerpo es distinto.</p></details>`;
}
$('#prev').onclick = () => { view = new Date(view.getFullYear(), view.getMonth() - 1, 1); render(); };
$('#next').onclick = () => { view = new Date(view.getFullYear(), view.getMonth() + 1, 1); render(); };
$('#cal').onclick = e => { const b = e.target.closest('.day'); if (b) openDay(b.dataset.d); };
$('#cal').onkeydown = e => {
  const b = e.target.closest('.day'); if (!b) return;
  if (!/^(Arrow|Page|Home|End)/.test(e.key)) return lastDate = null;
  const cur = new Date(b.dataset.d + 'T12:00:00'), t = keyTarget(cur, e.key, e.shiftKey, lastDate); if (!t) return;
  e.preventDefault(); e.stopPropagation();
  lastDate = /^Page/.test(e.key) ? (lastDate || cur.getDate()) : null; // como changeMonth del APG: conserva el día del mes al pasar por meses cortos
  focusDay = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`; // fecha local (sin pasar por UTC)
  if (t.getMonth() !== view.getMonth() || t.getFullYear() !== view.getFullYear()) { view = new Date(t.getFullYear(), t.getMonth(), 1); render(); }
  rovingFocus($('#cal').querySelectorAll('.day'), focusDay);
};

function openDay(k) {
  sel = k; const v = data.days[k] || {};
  $('#dlgTitle').textContent = new Date(k + 'T12:00:00').toLocaleDateString('es', { weekday: 'long', day: 'numeric', month: 'long' });
  document.querySelectorAll('.chips').forEach(c => {
    const key = c.dataset.k;
    c.innerHTML = OPTS[key].map((o, i) => {
      const on = key === 'sym' ? (v.sym || []).includes(o) : (v[key] || 0) === i;
      return `<button type="button" class="chip ${on ? 'on' : ''}" aria-pressed="${on}" data-i="${i}">${o || 'Nada'}</button>`;
    }).join('');
  });
  $('#note').value = v.note || ''; $('#dlg').returnValue = ''; $('#dlg').showModal(); // reset: Esc no debe guardar con el returnValue anterior
}
document.querySelectorAll('.chips').forEach(c => c.onclick = e => {
  const b = e.target.closest('.chip'); if (!b) return;
  if (!c.classList.contains('multi')) c.querySelectorAll('.chip').forEach(x => x !== b && x.classList.remove('on'));
  b.classList.toggle('on'); c.querySelectorAll('.chip').forEach(x => x.setAttribute('aria-pressed', x.classList.contains('on')));
});
$('#dlg').onclose = async () => {
  if ($('#dlg').returnValue !== 'ok') return;
  const get = k => [...document.querySelectorAll(`[data-k=${k}] .on`)].map(b => +b.dataset.i);
  const v = { flow: get('flow')[0] || 0, sym: get('sym').map(i => OPTS.sym[i]), mood: get('mood')[0] || 0, note: $('#note').value.trim() };
  if (!v.flow && !v.sym.length && !v.mood && !v.note) delete data.days[sel]; else data.days[sel] = v;
  await Vault.save(data); render();
  // Al guardar, render() reemplaza los botones y el foco quedaba en <body> (el <dialog> no tenía a dónde devolverlo): vuelve al día editado
  focusDay = sel; rovingFocus($('#cal').querySelectorAll('.day'), sel);
};
$('#todayBtn').onclick = async () => {
  if (data.days[today]?.flow > 0) return openDay(today);
  data.days[today] = { ...(data.days[today] || { sym: [], mood: 0, note: '' }), flow: 3 }; await Vault.save(data); render(); toast('Periodo registrado hoy');
};
const toast = t => { const el = $('#toast'); el.textContent = t; el.classList.remove('show'); void el.offsetWidth; el.classList.add('show'); };
export function sanitize(d) {
  if (!d || typeof d !== 'object' || !d.days || typeof d.days !== 'object' || Array.isArray(d.days)) throw new Error('formato');
  const days = {};
  for (const [k, v] of Object.entries(d.days)) {
    if (!validDate(k) || !v || typeof v !== 'object') continue;
    const flow = Math.max(0, Math.min(4, Math.trunc(+v.flow) || 0)), mood = Math.max(0, Math.min(5, Math.trunc(+v.mood) || 0));
    const sym = Array.isArray(v.sym) ? v.sym.filter(x => OPTS.sym.includes(x)) : [];
    const note = typeof v.note === 'string' ? v.note.slice(0, 2000) : '';
    if (flow || sym.length || mood || note) days[k] = { flow, sym, mood, note };
  }
  return { days };
}
$('#exp').onclick = () => {
  const url = URL.createObjectURL(new Blob([JSON.stringify({ app: 'lunilla', version: 1, exported: new Date().toISOString(), ...data }, null, 1)], { type: 'application/json' }));
  const a = Object.assign(document.createElement('a'), { href: url, download: `lunilla-${today}.json` }); document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast('Backup descargado (sin cifrar: guardalo en un lugar seguro)');
};
$('#ics').onclick = () => {
  const p = predict(Object.entries(data.days).filter(([, v]) => v.flow > 0).map(([k]) => k)), txt = predictionICS(p, today);
  if (!txt) return toast('Registrá al menos un periodo para exportar previsiones');
  const url = URL.createObjectURL(new Blob([txt], { type: 'text/calendar' }));
  const a = Object.assign(document.createElement('a'), { href: url, download: `lunilla-previsiones-${today}.ics` }); document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast('Calendario descargado: al importarlo, tu app de calendario verá estas fechas');
};
$('#imp').onchange = async e => {
  const f = e.target.files[0]; e.target.value = ''; if (!f) return;
  try {
    const d = sanitize(JSON.parse(await f.text())), n = Object.keys(d.days).length;
    if (!confirm(`Importar ${n} día(s)? Reemplaza los datos actuales.`)) return;
    data = d; await Vault.save(data); render(); toast(`Importados ${n} días`);
  } catch { alert('Archivo inválido: no es un backup de Lunilla.'); }
};
$('#wipe').onclick = async () => {
  if (!confirm('¿Borrar todos tus datos? No se puede deshacer.')) return;
  Vault.wipe(); if ('caches' in window) for (const k of await caches.keys()) await caches.delete(k); location.reload();
};
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
