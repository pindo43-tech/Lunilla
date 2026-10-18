// Ronda 8: navegación por teclado del calendario (APG datepicker-dialog.js, W3C) — lógica pura en Node.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { keyTarget, changeMonth, rovingFocus } from '../third_party/apg-calendar-keys.js';
const D = s => new Date(s + 'T12:00:00'), S = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

test('flechas: ±1 día y ±7 días, cruzando meses y años', () => {
  assert.equal(S(keyTarget(D('2026-10-31'), 'ArrowRight')), '2026-11-01');
  assert.equal(S(keyTarget(D('2026-01-01'), 'ArrowLeft')), '2025-12-31');
  assert.equal(S(keyTarget(D('2026-10-28'), 'ArrowDown')), '2026-11-04');
  assert.equal(S(keyTarget(D('2026-03-03'), 'ArrowUp')), '2026-02-24');
});
test('Inicio/Fin: lunes y domingo de la semana (calendario de Luna empieza el lunes)', () => {
  // 2026-10-14 es miércoles
  assert.equal(S(keyTarget(D('2026-10-14'), 'Home')), '2026-10-12');
  assert.equal(S(keyTarget(D('2026-10-14'), 'End')), '2026-10-18');
  // domingo: Home vuelve 6 días (no se queda en el domingo como con getDay() del original)
  assert.equal(S(keyTarget(D('2026-10-18'), 'Home')), '2026-10-12');
  assert.equal(S(keyTarget(D('2026-10-12'), 'End')), '2026-10-18');
});
test('RePág/AvPág: mes anterior/siguiente conservando el día, recortado en meses cortos; Shift = año', () => {
  assert.equal(S(keyTarget(D('2026-01-31'), 'PageDown')), '2026-02-28');
  assert.equal(S(keyTarget(D('2026-02-28'), 'PageDown', false, 31)), '2026-03-31'); // lastDate como en el APG
  assert.equal(S(keyTarget(D('2024-02-29'), 'PageDown', true)), '2025-02-28');
  assert.equal(S(keyTarget(D('2026-03-15'), 'PageUp')), '2026-02-15');
  assert.equal(S(changeMonth(D('2026-12-10'), 1)), '2027-01-10');
});
test('otras teclas no navegan', () => { assert.equal(keyTarget(D('2026-10-14'), 'Enter'), null); assert.equal(keyTarget(D('2026-10-14'), 'a'), null); });
test('rovingFocus: un único día con tabIndex 0', () => {
  const cells = ['2026-10-01', '2026-10-02', '2026-10-03'].map(d => ({ dataset: { d }, tabIndex: 0, focused: false, focus() { this.focused = true; } }));
  rovingFocus(cells, '2026-10-02');
  assert.deepEqual(cells.map(c => c.tabIndex), [-1, 0, -1]); assert.ok(cells[1].focused && !cells[0].focused);
});
test('integración: main.js usa el módulo, SW luna-v6 lo cachea y el aviso W3C está publicado', () => {
  const main = fs.readFileSync(new URL('../app/main.js', import.meta.url), 'utf8'), sw = fs.readFileSync(new URL('../app/sw.js', import.meta.url), 'utf8');
  assert.match(main, /from '\.\.\/third_party\/apg-calendar-keys\.js'/); assert.match(main, /\$\('#cal'\)\.onkeydown/);
  assert.match(sw, /'luna-v6'/); assert.match(sw, /apg-calendar-keys\.js/);
  const lic = fs.readFileSync(new URL('../third_party/LICENSE-W3C-APG.txt', import.meta.url), 'utf8');
  assert.match(lic, /W3C Software and Document License/); assert.match(lic, /datepicker-dialog\.js/);
});
