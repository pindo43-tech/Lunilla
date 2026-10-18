import test from 'node:test'; import assert from 'node:assert/strict';
import { predict, periods, cycleDay, phase, addDays } from '../app/predict.js';
const mk = (starts, len = 5) => starts.flatMap(s => Array.from({ length: len }, (_, i) => addDays(s, i)));
test('agrupa periodos', () => assert.equal(periods(mk(['2026-01-01', '2026-01-29'])).length, 2));
test('ciclo regular 28', () => {
  const p = predict(mk(['2026-01-01', '2026-01-29', '2026-02-26', '2026-03-26']));
  assert.equal(p.cycle, 28); assert.equal(p.periodLen, 5); assert.equal(p.next, '2026-04-23');
  assert.equal(p.ovulation, '2026-04-09'); assert.equal(p.fertileStart, '2026-04-04'); assert.equal(p.regular, true);
});
test('ciclo 32 + outlier descartado', () => {
  const p = predict(mk(['2026-01-01', '2026-02-02', '2026-03-06', '2026-06-01']));
  assert.equal(p.cycle, 32); assert.equal(p.next, '2026-07-03');
});
test('irregular', () => assert.equal(predict(mk(['2026-01-01', '2026-01-23', '2026-02-27', '2026-03-21'])).regular, false));
test('un solo periodo usa default 28', () => assert.equal(predict(['2026-05-01']).next, '2026-05-29'));
test('vacío', () => assert.equal(predict([]), null));
test('día de ciclo y fase', () => {
  const p = predict(mk(['2026-01-01', '2026-01-29']));
  assert.equal(cycleDay(p, '2026-01-29'), 1); assert.equal(phase(p, 1), 'Menstrual');
  assert.equal(phase(p, 14), 'Ovulatoria'); assert.equal(phase(p, 20), 'Lútea'); assert.equal(phase(p, 8), 'Folicular');
});

import { lateDays, history } from '../app/predict.js';
test('atraso no reinicia el día de ciclo', () => {
  const p = predict(mk(['2026-01-01', '2026-01-29']));
  assert.equal(cycleDay(p, '2026-03-01'), 32); assert.equal(lateDays(p, '2026-03-01'), 3); assert.equal(phase(p, 32), 'Atrasada');
});
test('historial', () => { const h = history(mk(['2026-01-01', '2026-01-29'])); assert.equal(h.length, 2); assert.equal(h[1].cycle, 28); assert.equal(h[0].cycle, null); });
