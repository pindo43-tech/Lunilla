import { predict, cycleDay, phase, iso, addDays, diff, lateDays, history } from './predict.js';
import { Vault } from './store.js';
const $ = s => document.querySelector(s);
const OPTS = {
  flow: ['', 'Manchado', 'Leve', 'Medio', 'Abundante'],
  sym: ['Cólicos', 'Dolor de cabeza', 'Hinchazón', 'Acné', 'Sensibilidad mamaria', 'Cansancio', 'Antojos', 'Náuseas'],
  mood: ['', '😊 Bien', '😐 Normal', '😢 Triste', '😠 Irritable', '😰 Ansiosa'],
};
let data = { days: {} }, view = new Date(), sel = null;
const today = iso(new Date(Date.now() - new Date().getTimezoneOffset() * 60000));
const fmt = s => new Date(s + 'T12:00:00').toLocaleDateString('es', { day: 'numeric', month: 'short' });

$('#lockMsg').textContent = Vault.exists() ? 'Ingresá tu PIN para desbloquear.' : 'Creá un PIN para cifrar tus datos en este dispositivo.';
$('#pinForm').onsubmit = async e => {
  e.preventDefault();
  try { data = await Vault.open($('#pin').value); $('#lock').hidden = true; $('#main').hidden = false; render(); }
  catch { $('#pinErr').textContent = 'PIN incorrecto'; $('#lock').classList.remove('shake'); void $('#lock').offsetWidth; $('#lock').classList.add('shake'); }
};
$('#lockBtn').onclick = () => location.reload();

function render() {
  const flowDays = Object.entries(data.days).filter(([, v]) => v.flow > 0).map(([k]) => k);
  const p = predict(flowDays);
  const cd = cycleDay(p, today);
  const late = lateDays(p, today);
  $('#summary').innerHTML = p ? `
    <div class="ring${late ? ' late' : ''}" style="--pct:${Math.min(100, (cd / p.cycle) * 100)}" role="img" aria-label="Día ${cd} de un ciclo de ${p.cycle}"><b>${cd}</b><span>día</span></div>
    <div><h2>${late ? `Atraso de ${late} día${late > 1 ? 's' : ''}` : `Fase ${phase(p, cd)}`}</h2>
    <p>${late ? `Se esperaba el ${fmt(p.next)}. Los atrasos cortos son comunes; si te preocupa, consultá.` : `Próximo periodo: <b>${fmt(p.next)}</b> (${diff(today, p.next)} días)`}</p>
    <p>Ovulación estimada: <b>${fmt(p.ovulation)}</b></p>
    <p class="small">Ciclo medio ${p.cycle} d · periodo ${p.periodLen} d · ${p.regular === null ? 'registrá más ciclos' : p.regular ? 'regular' : 'irregular'}</p></div>`
    : `<div><h2>¡Bienvenida!</h2><p>Tocá un día del calendario para registrar tu periodo.</p></div>`;
  const pred = new Set(), fert = new Set();
  if (p) for (const s of p.upcoming) for (let i = 0; i < p.periodLen; i++) pred.add(addDays(s, i));
  if (p) for (let d = p.fertileStart; d <= p.fertileEnd; d = addDays(d, 1)) fert.add(d);
  const y = view.getFullYear(), m = view.getMonth();
  $('#month').textContent = view.toLocaleDateString('es', { month: 'long', year: 'numeric' });
  const first = (new Date(y, m, 1).getDay() + 6) % 7, n = new Date(y, m + 1, 0).getDate();
  let h = '<span></span>'.repeat(first);
  for (let d = 1; d <= n; d++) {
    const k = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`, v = data.days[k] || {};
    const c = [v.flow > 0 ? 'p' : pred.has(k) ? 'pp' : '', fert.has(k) ? 'f' : '', p && k === p.ovulation ? 'o' : '', k === today ? 't' : ''].join(' ');
    const lab = [d, v.flow > 0 ? 'periodo' : pred.has(k) ? 'periodo previsto' : '', fert.has(k) ? 'fértil' : '', p && k === p.ovulation ? 'ovulación' : '', k === today ? 'hoy' : ''].filter(Boolean).join(', ');
    h += `<button class="day ${c}" data-d="${k}" aria-label="${lab}" style="animation-delay:${d * 12}ms">${d}${v.sym?.length || v.mood || v.note ? '<i class="dot"></i>' : ''}</button>`;
  }
  $('#cal').innerHTML = h;
  const hs = history(flowDays).slice(0, 6);
  $('#hist').innerHTML = hs.length ? hs.map(x => `<li><span>${fmt(x.start)}</span><span class="bar" style="--w:${Math.min(100, ((x.cycle || cd || 1) / 45) * 100)}%"><i style="--w:${(x.len / (x.cycle || cd || x.len)) * 100}%"></i></span><span>${x.cycle ? x.cycle + ' d' : 'en curso'} · ${x.len} d</span></li>`).join('') : '<li class="small">Todavía no hay ciclos registrados.</li>';
  $('#todayBtn').textContent = data.days[today]?.flow > 0 ? '✓ Periodo registrado hoy' : 'Hoy me vino el periodo';
}
$('#prev').onclick = () => { view = new Date(view.getFullYear(), view.getMonth() - 1, 1); render(); };
$('#next').onclick = () => { view = new Date(view.getFullYear(), view.getMonth() + 1, 1); render(); };
$('#cal').onclick = e => { const b = e.target.closest('.day'); if (b) openDay(b.dataset.d); };

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
};
$('#todayBtn').onclick = async () => {
  if (data.days[today]?.flow > 0) return openDay(today);
  data.days[today] = { ...(data.days[today] || { sym: [], mood: 0, note: '' }), flow: 3 }; await Vault.save(data); render(); toast('Periodo registrado hoy');
};
const toast = t => { const el = $('#toast'); el.textContent = t; el.classList.remove('show'); void el.offsetWidth; el.classList.add('show'); };
const DATE = /^\d{4}-\d{2}-\d{2}$/;
export function sanitize(d) {
  if (!d || typeof d !== 'object' || !d.days || typeof d.days !== 'object' || Array.isArray(d.days)) throw new Error('formato');
  const days = {};
  for (const [k, v] of Object.entries(d.days)) {
    if (!DATE.test(k) || !v || typeof v !== 'object') continue;
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
