// E2E ronda 4 (Luna + Brisa) servido con serve-pages.mjs (aplica _headers/CSP y .assetsignore como Cloudflare Pages).
// Uso: node e2e-ronda4.mjs   (requiere playwright-core y /usr/bin/google-chrome)
import { chromium } from 'playwright-core';
import { spawn } from 'child_process'; import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url';
const D = path.dirname(fileURLToPath(import.meta.url)), B = path.resolve(D, '..'), TMP = fs.mkdtempSync('/tmp/r4-');
const srv = [spawn('node', [D + '/serve-pages.mjs', B + '/menstrual-tracker/app', '8731']), spawn('node', [D + '/serve-pages.mjs', B + '/menopausia/app', '8732'])];
await new Promise(r => setTimeout(r, 800));
const br = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
let fail = 0; const ok = (c, m) => { console.log((c ? '✔ ' : '✘ ') + m); if (!c) fail++; };
async function page() {
  const ctx = await br.newContext({ acceptDownloads: true }), pg = await ctx.newPage(), errs = [];
  await pg.addInitScript(() => { window.__csp = []; document.addEventListener('securitypolicyviolation', e => window.__csp.push(e.violatedDirective + ' ' + e.blockedURI)); });
  pg.on('pageerror', e => errs.push(e.message)); pg.on('console', m => m.type() === 'error' && errs.push(m.text())); pg.on('dialog', d => d.accept());
  return { ctx, pg, errs };
}
const unlock = async (pg, u) => { await pg.goto(u); await pg.fill('#pin', '1234'); await pg.click('#pinForm button'); await pg.waitForSelector('#main:not([hidden])', { timeout: 5000 }); };
const download = async (pg, sel) => { const [d] = await Promise.all([pg.waitForEvent('download'), pg.click(sel)]); return fs.readFileSync(await d.path(), 'utf8'); };
const csp = async (pg, tag) => { for (const u of ['/', '/app/']) { await pg.goto(new URL(u, pg.url()).href); await pg.waitForTimeout(400); const v = await pg.evaluate(() => window.__csp); ok(!v.length, `${tag} ${u}: sin violaciones CSP ${v.length ? JSON.stringify(v) : ''}`); } };

// ---------- LUNA ----------
{ const { ctx, pg, errs } = await page(), U = 'http://localhost:8731/app/';
  await unlock(pg, U); await pg.click('#todayBtn'); await pg.waitForTimeout(300);
  ok(/fase menstrual/i.test(await pg.textContent('#summary .phase summary')) && /Síntomas frecuentes/.test(await pg.textContent('#summary .phase')), 'luna: info de la fase actual (textos de peri)');
  const ics = await download(pg, '#ics');
  ok(/^BEGIN:VCALENDAR\r\n/.test(ics) && (ics.match(/BEGIN:VEVENT/g) || []).length === 3 && /DTSTART;VALUE=DATE:\d{8}\r\n/.test(ics), 'luna: .ics con 3 periodos previstos (ics.js)');
  fs.writeFileSync(TMP + '/l.json', JSON.stringify({ days: { '2026-08-01': { flow: 3 }, '2026-13-01': { flow: 3 }, '2026-02-31': { flow: 2 }, '2026-08-29': { flow: 2 } } }));
  await pg.setInputFiles('#imp', TMP + '/l.json'); await pg.waitForTimeout(500);
  let j = JSON.parse(await download(pg, '#exp')); ok(Object.keys(j.days).sort().join() === '2026-08-01,2026-08-29', 'luna: import descarta fechas imposibles (2026-13-01, 2026-02-31)');
  // Bóveda guardada por una versión anterior con una fecha imposible: antes quedaba "PIN incorrecto" para siempre
  await pg.evaluate(async () => { const { Vault } = await import('/app/store.js'); await Vault.open('1234'); await Vault.save({ days: { '2026-13-01': { flow: 3, sym: [], mood: 0, note: '' }, '2026-08-01': { flow: 3, sym: [], mood: 0, note: '' } } }); });
  await unlock(pg, U).then(() => ok(true, 'luna: bóveda con fecha imposible abre igual (antes: "PIN incorrecto")'), () => ok(false, 'luna: bóveda con fecha imposible abre igual'));
  ok(!(await pg.textContent('#pinErr')), 'luna: sin mensaje de PIN incorrecto');
  await csp(pg, 'luna'); ok(!errs.length, 'luna: sin errores de consola ' + JSON.stringify(errs)); await ctx.close(); }

// ---------- BRISA ----------
{ const { ctx, pg, errs } = await page(), U = 'http://localhost:8732/app/';
  await unlock(pg, U);
  await pg.focus('#tab-hoy'); await pg.keyboard.press('ArrowRight');
  ok(await pg.getAttribute('#tab-mrs', 'aria-selected') === 'true' && await pg.isVisible('#t-mrs') && await pg.evaluate(() => document.activeElement.id) === 'tab-mrs', 'brisa: flecha derecha cambia de pestaña (APG tabs)');
  await pg.keyboard.press('End'); ok(await pg.isVisible('#t-med') && /días registrados/.test(await pg.textContent('#report')), 'brisa: Fin → Médico y genera informe');
  await pg.keyboard.press('Home'); ok(await pg.isVisible('#t-hoy') && await pg.getAttribute('#tab-graf', 'tabindex') === '-1', 'brisa: Inicio → Hoy, roving tabindex');
  await pg.fill('#hf', '-5'); await pg.fill('#sleep', '40'); await pg.fill('#note', '=HYPERLINK("http://x")'); await pg.click('#saveDay'); await pg.waitForTimeout(300);
  await pg.click('#tab-med'); let j = JSON.parse(await download(pg, '#json')); const d0 = Object.values(j.days)[0];
  ok(d0.hf === 0 && d0.sleep === 16, `brisa: valores acotados al guardar (sofocos ${d0.hf}, sueño ${d0.sleep})`);
  const csv = await download(pg, '#csv'); ok(csv.includes(`"'=HYPERLINK(""http://x"")"`), 'brisa: CSV neutraliza fórmula en notas');
  const days = {}; for (const s of ['2026-03-01', '2026-03-29', '2026-06-10']) for (let i = 0; i < 4; i++) { const t = new Date(s + 'T00:00:00Z'); t.setUTCDate(t.getUTCDate() + i); days[t.toISOString().slice(0, 10)] = { hf: 2, bleed: true }; }
  days['2026-02-30'] = { hf: 9 };
  fs.writeFileSync(TMP + '/b.json', JSON.stringify({ days, mrs: [{ date: '2026-06-01', som: 4, psi: 4, uro: 2, total: 999, severity: 0 }] }));
  await pg.setInputFiles('#imp', TMP + '/b.json'); await pg.waitForTimeout(500);
  const rep = await pg.textContent('#report');
  ok(/12 días registrados/.test(rep), 'brisa: import descarta 2026-02-30'); ok(/10Moderada/.test(rep.replace(/\s/g, '')), 'brisa: MRS importado recalculado (total 10, Moderada; venía 999)');
  ok(/transición menopáusica tardía/.test(rep) && /ciclo medio/.test(rep), 'brisa: estadística de ciclos + STRAW+10 en el informe');
  await pg.click('#tab-graf'); ok(/STRAW\+10/.test(await pg.textContent('#cyc')), 'brisa: sección ciclo en Gráficos');
  await csp(pg, 'brisa'); ok(!errs.length, 'brisa: sin errores de consola ' + JSON.stringify(errs)); await ctx.close(); }

await br.close(); srv.forEach(s => s.kill()); console.log(fail ? `${fail} fallos` : 'TODO OK'); process.exit(fail ? 1 : 0);
