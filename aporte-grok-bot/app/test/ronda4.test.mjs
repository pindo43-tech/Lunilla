// Ronda 4: fechas imposibles, calendario .ics (nwcell/ics.js) y fases (IraSoro/peri)
import test from 'node:test'; import assert from 'node:assert/strict';
globalThis.navigator ??= { userAgent: 'node' }; // ics.js consulta navigator.userAgent (Node 20 no lo define)
const { predict, periods, validDate, phase } = await import('../app/predict.js');
const { predictionICS } = await import('../app/calendar.js');
const { PHASE_INFO, phaseInfo } = await import('../app/phases.js');
const mk = (starts, len = 5) => starts.flatMap(s => Array.from({ length: len }, (_, i) => { const d = new Date(s + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() + i); return d.toISOString().slice(0, 10); }));

test('validDate rechaza fechas imposibles', () => {
  assert.equal(validDate('2026-02-28'), true); assert.equal(validDate('2024-02-29'), true);
  for (const x of ['2026-13-01', '2026-02-31', '2026-02-29', '2026-00-10', '2026-1-01', 'bad', null, 20260101]) assert.equal(validDate(x), false, String(x));
});
test('BUG: fecha imposible en los datos ya no rompe predict (antes RangeError)', () => {
  assert.doesNotThrow(() => predict(['2026-02-30', '2026-02-31', '2026-13-01']));
  assert.equal(predict(['2026-13-01']), null);
  assert.equal(periods(['2026-01-01', '2026-13-01', '2026-01-02']).length, 1);
});
test('ICS: 3 periodos previstos, día completo, CRLF, fechas sin corrimiento', () => {
  const p = predict(mk(['2026-01-01', '2026-01-29', '2026-02-26', '2026-03-26']));
  const ics = predictionICS(p);
  assert.match(ics, /^BEGIN:VCALENDAR\r\n/); assert.match(ics, /END:VCALENDAR$/);
  assert.equal((ics.match(/BEGIN:VEVENT/g) || []).length, 3);
  assert.match(ics, /DTSTART;VALUE=DATE:20260423\r\nDTEND;VALUE=DATE:20260428/); // next=2026-04-23, periodo 5 d (DTEND exclusivo)
  assert.ok(!/\r?\n(?<!\r\n)/.test(ics.replace(/\r\n/g, '')), 'solo CRLF');
  assert.match(ics, /DESCRIPTION:Predicción orientativa/); assert.equal(predictionICS(null), null);
});
test('ICS escapa comas y punto y coma (RFC 5545)', async () => {
  const { ics } = await import('../third_party/ics.js');
  const c = ics('x', 'y'); c.addEvent('a,b;c', 'línea1\nlínea2', 'l', new Date(2026, 0, 1), new Date(2026, 0, 2));
  assert.match(c.build(), /SUMMARY;LANGUAGE=es:a\\,b\\;c/); assert.match(c.build(), /DESCRIPTION:línea1\\nlínea2/);
});
test('fases: cada fase de Lunilla tiene info de peri', () => {
  const p = predict(mk(['2026-01-01', '2026-01-29']));
  for (const d of [1, 8, 14, 20]) assert.ok(phaseInfo(phase(p, d)), 'día ' + d);
  assert.equal(phaseInfo('Atrasada'), null); assert.equal(Object.keys(PHASE_INFO).length, 4);
});
