// Ronda 5: fertilidad gaussiana (ROS-Cycle) + sparkline vendorizado
import test from 'node:test'; import assert from 'node:assert/strict';
import { fertilityPov, fertilityLevel, predict } from '../app/predict.js';
import { sparkline } from '../third_party/sparkline.js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

test('fertilityPov: pico cerca de ovulación (ciclo 28 → día 14)', () => {
  const peak = fertilityPov(14, 28, 2);
  const low = fertilityPov(2, 28, 2);
  assert.ok(peak > 0.9, `peak=${peak}`);
  assert.ok(low < 0.2, `low=${low}`);
  assert.equal(fertilityLevel(peak), 'alta');
  assert.equal(fertilityLevel(0.4), 'media');
  assert.equal(fertilityLevel(0.1), 'baja');
  assert.equal(fertilityPov(NaN, 28), 0);
});

test('predict sigue exponiendo fertileStart/End; uncertainty alimenta sigma', () => {
  const starts = ['2026-01-01', '2026-01-29', '2026-02-26', '2026-03-26'];
  const p = predict(starts);
  assert.ok(p);
  assert.ok(p.fertileStart < p.ovulation && p.ovulation <= p.fertileEnd);
  assert.ok(p.uncertainty >= 2);
});

test('sparkline: dibuja path con ≥2 puntos y no revienta con ceros', () => {
  // DOM mínimo
  const kids = [];
  const svg = {
    attributes: { width: { value: '280' }, height: { value: '40' }, 'stroke-width': { value: '2' } },
    querySelectorAll: () => kids.slice(),
    removeChild: el => { const i = kids.indexOf(el); if (i >= 0) kids.splice(i, 1); },
    appendChild: el => { kids.push(el); return el; },
  };
  globalThis.document = {
    createElementNS: (_ns, tag) => {
      const attrs = {};
      const el = {
        tagName: tag, attrs, children: [],
        setAttribute(n, v) { attrs[n] = String(v); },
        getAttribute(n) { return attrs[n]; },
        appendChild(c) { this.children.push(c); },
        addEventListener() {},
      };
      return el;
    },
  };
  sparkline(svg, [28, 30, 27, 29]);
  const path = kids.find(e => e.tagName === 'path' && e.attrs.class === 'sparkline--line');
  assert.ok(path, 'path de línea');
  assert.match(path.attrs.d, /^M/);
  // no divide por 0
  sparkline(svg, [0, 0, 0]);
  assert.ok(kids.some(e => e.tagName === 'path'));
});

test('sparkline vendorizado incluye aviso LUNILLA y licencia MIT en cabecera/archivo', () => {
  const dir = dirname(fileURLToPath(import.meta.url));
  const src = readFileSync(join(dir, '../third_party/sparkline.js'), 'utf8');
  assert.match(src, /@fnando\/sparkline/);
  assert.match(src, /LUNILLA/);
  const lic = readFileSync(join(dir, '../third_party/LICENSE-sparkline.txt'), 'utf8');
  assert.match(lic, /MIT License/);
  assert.match(lic, /Nando Vieira/);
});
