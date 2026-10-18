// Ronda 6: previsiones "rodadas" hasta hoy (idea de FlowerYes/moj, MIT).
import test from 'node:test'; import assert from 'node:assert/strict';
globalThis.navigator ??= { userAgent: 'node' }; // ics.js consulta navigator.userAgent
import { predict, upcomingFrom, addDays } from '../app/predict.js';
import { predictionICS } from '../app/calendar.js';
const flow = ['2026-01-01', '2026-01-02', '2026-01-03', '2026-01-29', '2026-01-30', '2026-01-31', '2026-02-26', '2026-02-27', '2026-02-28'];

test('bug: con la última regla de hace meses el .ics exportaba fechas pasadas', () => {
  const p = predict(flow), today = '2026-10-14';
  const starts = [...predictionICS(p, today).matchAll(/DTSTART;VALUE=DATE:(\d{8})/g)].map(m => m[1]);
  assert.equal(starts.length, 3);
  for (const s of starts) assert.ok(s >= '20261009', `evento en el pasado: ${s}`);
});
test('upcomingFrom: rueda de a un ciclo y deja 3 fechas futuras', () => {
  const p = predict(flow), u = upcomingFrom(p, '2026-10-14');
  assert.equal(u.length, 3);
  assert.ok(addDays(u[0], p.periodLen) > '2026-10-14');
  assert.equal(addDays(u[0], p.cycle), u[1]);
  assert.ok(addDays(u[0], -p.cycle + p.periodLen) <= '2026-10-14', 'no salta un ciclo de más');
});
test('upcomingFrom: atraso corto conserva la fecha esperada; sin atraso = p.upcoming', () => {
  const p = predict(flow);
  assert.deepEqual(upcomingFrom(p, '2026-03-01'), p.upcoming);
  assert.equal(upcomingFrom(p, addDays(p.next, 2))[0], p.next);
  assert.deepEqual(upcomingFrom(null, '2026-10-14'), []);
});
import { readFileSync, existsSync } from 'node:fs';
test('REA: cita CC BY 4.0 del Ministerio de Salud con atribución y aviso publicado', () => {
  const html = readFileSync(new URL('../app/index.html', import.meta.url), 'utf8');
  assert.match(html, /menstruaciones dolorosas, sangrado menstrual abundante/);
  assert.match(html, /Ministerio de Salud de la Nación/); assert.match(html, /CC BY 4\.0/);
  assert.ok(existsSync(new URL('../third_party/LICENSE-argentina-gob-ar.txt', import.meta.url)));
});
