# DEPLOY — vertical Salud femenina y Belleza
(Consolidado 2026-10-14: fusiona `~/Desktop/plugin_tienda_nube/salud-belleza-docs/DEPLOY.md`. **Este es el documento vigente.**)

## Estado
⛔ **Pendiente de credenciales**: `GH_TOKEN` (scope `repo`; el conector GitHub devolvió 403 al crear repos y `gh` no tiene sesión) y `CLOUDFLARE_API_TOKEN` (permiso *Cloudflare Pages: Edit*) + `CLOUDFLARE_ACCOUNT_ID` (wrangler sin sesión).
Las 4 apps son estáticas (sin build): se publica la carpeta `app/` de cada una. Cada `app/` ya tiene `_headers` (CSP y seguridad) y `.assetsignore` (excluye `test/`, `node_modules/`, `.git/`, `package*.json`), verificados con un servidor estático que aplica ambos: landing + app cargan sin errores ni bloqueos de CSP.

Carpeta canónica: `~/Desktop/plugin tienda nube/salud-femenina/<app>/app` (tiene espacios: usar comillas). Las copias de `~/Desktop/plugin_tienda_nube/` quedaron de la iteración 1 y no se despliegan.

| App | Carpeta | Repo GitHub | Proyecto Cloudflare Pages | URL esperada |
|---|---|---|---|---|
| Lunilla (tracker) | menstrual-tracker/app | lunilla | lunilla | https://lunilla.pages.dev |
| Brisa (menopausia) | menopausia/app | brisa-menopausia | brisa-menopausia | https://brisa-menopausia.pages.dev |
| Glow Try-On (makeup) | makeup/app | glow-tryon | glow-tryon | https://glow-tryon.pages.dev |
| Mechas (pelo) | hair-look/app | mechas-hair | mechas-hair | https://mechas-hair.pages.dev |

(Si un nombre `*.pages.dev` está tomado, Cloudflare agrega sufijo; anotar la URL real abajo.)

## CSP
- Lunilla/Brisa: todo `'self'` (sin terceros), cámara/micrófono/geolocalización desactivados.
- Glow/Mechas: además `https://cdn.jsdelivr.net` (script/connect: `@mediapipe/tasks-vision@0.10.14` + wasm) y `https://storage.googleapis.com` (connect: modelos `.task`/`.tflite`); `'wasm-unsafe-eval'`; `Permissions-Policy: camera=(self)`.
- `style-src 'unsafe-inline'` se mantiene por atributos `style=` en el HTML. No hay scripts inline (el de las landings de Lunilla/Brisa se movió a `reveal.js`).

### Rechequeo ronda 4 (2026-10-14 ~03:40 hora AR)
Sigue **pendiente de credenciales**: no hay `GH_TOKEN`/`GITHUB_TOKEN` ni `CLOUDFLARE_API_TOKEN` en el entorno, `gh auth status` → "You are not logged into any GitHub hosts", `npx wrangler@3 whoami` → "You are not authenticated". No se hizo push ni deploy. Los cambios quedaron en commits locales de cada `app/` (git).
Nuevos archivos publicados (todos `'self'`, sin orígenes nuevos en la CSP): Lunilla `third_party/ics.js`, `app/phases.js`, `app/calendar.js`; Brisa `third_party/apg-tabs.js`, `app/cycle.js`; Glow `lib/shade.js`, `lib/third_party/{pudding-shades.js,apg-radio.js}`; Mechas `lib/third_party/apg-radio.js`; más los avisos de licencia `*/third_party/LICENSE-*.txt` (deben publicarse: la licencia W3C exige que el aviso sea visible). `_headers` y `.assetsignore` no necesitaron cambios.
Verificación con CSP real: `node e2e-ronda4.mjs` (Lunilla+Brisa vía `serve-pages.mjs`) y `test/e2e.mjs` de Glow/Mechas (ahora aplican el bloque `/*` de `_headers` y fallan ante cualquier `securitypolicyviolation`): 0 violaciones en landing y app de las 4.


### Rechequeo ronda 5 (2026-10-14 ~05:25 hora AR)
Sigue **sin** `GH_TOKEN`/`CLOUDFLARE_API_TOKEN` en el entorno ni sesión `gh`/`wrangler`. Intentado 2026-10-14 ~05:30 ART: MCP `user-GitHub-xai` autenticado como `pindo43-tech` → `create_repository` para lunilla / brisa-menopausia / glow-tryon / mechas-hair devolvió **403 Resource not accessible by integration** (el token del conector no tiene scope `repo` de escritura). Cloudflare Pages: sin `CLOUDFLARE_API_TOKEN`, sin deploy. Ninguna URL `*.pages.dev` verificada.
Nuevos archivos `'self'` (sin orígenes CSP nuevos): Brisa `app/corr.js`, `app/prep.js`, `third_party/LICENSE-{idgaf-tracker,Perimenopause-Tracker}.txt`; Lunilla `third_party/sparkline.js`, `third_party/LICENSE-{sparkline,ROS-Cycle}.txt` (+ `fertilityPov` en `predict.js`). SW: `brisa-v4`, `lunilla-v4`.

### Rechequeo ronda 6 (2026-10-14 ~07:20 hora AR)
Siguen faltando credenciales: sin `GH_TOKEN`/`GITHUB_TOKEN`/`CLOUDFLARE_API_TOKEN` en el entorno, `gh auth status` → no logueado, `npx wrangler@3 whoami` → «You are not authenticated». No se reintentó `create_repository` con el conector (403 en ronda 5). Nuevos/actualizados `'self'` (sin orígenes CSP nuevos; los enlaces a argentina.gob.ar son navegación, no recursos cargados): Lunilla `app/{predict,calendar,main}.js`, `index.html`, `style.css`, `third_party/LICENSE-argentina-gob-ar.txt` (SW `lunilla-v5`); Brisa `index.html`, `style.css`, `third_party/LICENSE-argentina-gob-ar.txt` (SW `brisa-v5`).

## Comandos
Wrangler actual pide Node ≥22 (el box tiene 20.19): usar `npx wrangler@3` o instalar Node 22.
```bash
export GH_TOKEN=...            # repo scope
export CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=...
B="$HOME/Desktop/plugin tienda nube/salud-femenina"
deploy() { # $1 carpeta  $2 nombre
  cd "$B/$1/app"
  gh repo create "$2" --public --source . --remote origin --push
  npx wrangler@3 pages project create "$2" --production-branch main || true
  npx wrangler@3 pages deploy . --project-name "$2" --branch main --commit-dirty=true
}
deploy menstrual-tracker lunilla
deploy menopausia brisa-menopausia
deploy makeup glow-tryon
deploy hair-look mechas-hair
```

## Verificación local
- Servidor que imita Pages (aplica `_headers` y `.assetsignore`): `node serve-pages.mjs "<app>/app" 8080`.
- E2E belleza: `cd <app>/app/test && npm i playwright && node e2e.mjs` (foto real + cámara simulada con la foto vía ffmpeg; aplica `_headers`).
- E2E salud: `node e2e-export-import.mjs` y `node e2e-ronda4.mjs` (este último con CSP real).

## URLs reales
_(completar tras el deploy — ninguna URL verificada todavía: faltan credenciales)_
