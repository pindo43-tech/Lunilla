# Estructura de bots — vertical Salud femenina y Belleza

```
Host jefe (SaludFemeninaHost) — coordina, decide, reporta a la usuaria
├── W1 Investigador de repos   → repos-candidatos.md, */README.md (tablas de upstream)
├── W2 Ensamblador salud       → menstrual-tracker/app, menopausia/app
├── W3 Ensamblador belleza     → makeup/app, hair-look/app
├── W4 UI / landing / deploy   → index.html (landing) de cada app, DEPLOY.md
└── W5 Tester                  → /tmp/pw/t.mjs, /tmp/pw/t2.mjs, test/*.test.mjs, informe de bugs
```

## Handoffs (por archivos, no por chat)
1. W1 → W2/W3: tabla con licencia y decisión en `repos-candidatos.md` + código en `*/upstream/` (clones `--depth 1`). Nada GPL/AGPL/sin licencia pasa a `app/`.
2. W2/W3 → W4: `app/` funcionando en local + `app/README.md` (cómo correr) + `NOTICE.md` (créditos MIT/Apache).
3. W4 → W5: landing en `app/index.html`, PWA en `app/app/`; nombres de proyecto en `DEPLOY.md`.
4. W5 → W2/W3: lista de fallos reproducibles (paso, esperado, obtenido); se corrige y se re-ejecuta la suite completa.
5. Host: commit local por app tras suite verde; solo reporta avances significativos o bloqueos.

## Justificación
- **Salud y belleza separadas**: stacks distintos (cifrado/predicción vs. visión por computadora MediaPipe) y riesgos distintos (datos sensibles vs. rendimiento de cámara). Paralelizar evita bloqueos cruzados.
- **Investigador aparte**: el filtro de licencias es crítico (muchos trackers son GPL); centralizarlo evita contaminar el código.
- **Tester independiente**: quien ensambla no valida su propio trabajo; Playwright cubre PIN, registro, export/import/borrado JSON y errores de consola.
- **UI/deploy juntos**: la landing y Cloudflare Pages comparten build estático y credenciales (un único punto de bloqueo: tokens).
- Modal (cuenta rivera, L40S) solo para minitests de modelos de pelo, apagando al terminar; hoy no se usa porque todo corre en el navegador.
