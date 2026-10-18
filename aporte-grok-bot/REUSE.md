# REUSE — Luna (tracker menstrual)
Licencia de Luna: MIT (`LICENSE`). Verificado 2026-10-14 leyendo el LICENSE real de cada upstream en `../upstream/`.

| Qué se reutilizó | Archivo en Luna | Fuente | Licencia (verificada) | Tipo |
|---|---|---|---|---|
| Mediana ponderada por recencia (0.75^k), contracción hacia 28,5 d (k=3) con <6 ciclos, ventana ± por MAD×1,4826 / cobertura 80 % +2 d (mín 2, máx 14) | `app/predict.js` (`weightedMedian`, `uncertainty`, `predict`) | HYPERSAHIL/periodtracker `src/lib/cycle.ts`, commit 565b282 | MIT, © 2026 Period Tracker contributors → copia en `third_party/LICENSE-HYPERSAHIL-periodtracker.txt` | **Código adaptado** (TS→JS). Cambio: outliers >60 d se descartan (upstream: 90 d) |
| Aviso "sangrado de más de 7 días" (fuente ACOG) | `app/main.js` (`#notice`) | HYPERSAHIL/periodtracker `src/lib/safety.ts` | MIT (mismo aviso) | Regla y umbral adaptados, texto propio en español |
| Bóveda local AES-GCM + PBKDF2 con PIN | `app/store.js` | getify/youperiod.app | MIT, © 2022 Kyle Simpson | Patrón; código escrito de cero |
| Modelo de día (flujo, síntomas, ánimo, nota) | `app/main.js` | adulbrich/ephira | MIT, © 2025-2026 Alex Ulbrich et al. | Idea de modelo; código propio |
| Predicción por media de ciclos + fase lútea 14 d, export/import JSON | `app/predict.js` | EmmaTellblom/Mensinator | MIT, © 2024 Emma Tellblom | Idea; código propio |

## No reutilizado (solo lectura de ideas)
- bloodyhealth/drip — **GPL-3.0** (LICENSE: "GNU GENERAL PUBLIC LICENSE Version 3"). No se copió código.
- Menstrudel, CycleOne (GPL-3.0), Lunabelle, ovumcy-web, Blueturboguy07/lunara (AGPL-3.0), repos sin licencia.

## Verificación de no-copia de GPL
Mensinator es **MIT** (no GPL). drip es GPL-3.0. Chequeo automático: 0 líneas idénticas (normalizadas, >25 caracteres) entre `app/app/*` y `upstream/drip` ni `upstream/Mensinator`; identificadores propios (`fertileStart`, `periodLen`, `lateDays`, PBKDF2…) no aparecen en esos repos. La licencia MIT de Luna no tiene conflicto.

## Ronda 4 (2026-10-14)
Licencias verificadas leyendo el archivo LICENSE real de cada clon en `../upstream/`.

| Qué se reutilizó | Archivo en Luna | Fuente (commit) | Licencia (verificada) | Tipo |
|---|---|---|---|---|
| Generador iCalendar (.ics): "Agregar al calendario" con los 3 próximos periodos previstos | `third_party/ics.js` (vendorizado) + `app/calendar.js` | [nwcell/ics.js](https://github.com/nwcell/ics.js) `ics.js`, commit dfec67f (2018-11-12) | MIT, © 2018 Travis Krause → `third_party/LICENSE-ics.js.txt` | **Código copiado** con 5 cambios marcados `LUNA:` en la cabecera: módulo ES, CRLF siempre (RFC 5545), `VALUE=DATE` en eventos de día completo (upstream ponía `VALUE=DATE-TIME` sin hora, inválido), escape de `\ ; ,` y saltos de línea, `LANGUAGE=es` |
| Información por fase ("¿Qué pasa en la fase…?": descripción hormonal + síntomas frecuentes) | `app/phases.js`, mostrado en `app/main.js` (`phaseBox`) | [IraSoro/peri](https://github.com/IraSoro/peri) `src/state/CalculationLogics.ts` (`getPhase`) + `src/utils/translations/es.ts`, commit 6e2bde5 (2026-01-30) | MIT, © 2025 Irina Sorokina → `third_party/LICENSE-peri.txt` (el **logo** de Peri tiene licencia aparte y NO se usó) | **Contenido copiado literal** (traducción española de peri; un test verifica que cada texto existe en `es.ts`) |

Correcciones propias de esta ronda (sin código de terceros): validación estricta de fechas (`validDate` en `predict.js`; una fecha imposible como `2026-13-01` importada hacía lanzar `RangeError` y la app quedaba mostrando "PIN incorrecto" para siempre), el desbloqueo ya no confunde un error de dibujo con PIN incorrecto, "hoy" se recalcula al volver a la app, y el service worker solo cachea GET del mismo origen con respuesta OK. Tests: `test/ronda4.test.mjs` y `../salud-belleza-docs/e2e-ronda4.mjs`.

Evaluados sin uso: electricg/period-tracker (LICENSE MIT; `package.json` dice ISC; PWA de 2016 sin nada que Luna no tenga ya).

## Ronda 5 (2026-10-14)
Licencias verificadas leyendo el archivo LICENSE real de cada clon en `../upstream/`.

| Qué se reutilizó | Archivo en Luna | Fuente (commit) | Licencia (verificada) | Tipo |
|---|---|---|---|---|
| Sparkline SVG de duración de ciclos (interactivo) | `third_party/sparkline.js` + bloque bajo «Mis ciclos» | [fnando/sparkline](https://github.com/fnando/sparkline) `src/sparkline.js`, commit 3008997 | MIT, © 2018 Nando Vieira → `third_party/LICENSE-sparkline.txt` | **Código copiado** con 1 cambio `LUNA:`: `max = Math.max(1, …)` para no dividir por 0 |
| Fertilidad gaussiana (pov / alta·media·baja) en el calendario | `app/predict.js` (`fertilityPov`, `fertilityLevel`), clases `f-hi`/`f-mid` | [alwin-m/ROS-Cycle-Project](https://github.com/alwin-m/ROS-Cycle-Project) `getDayDetails`, commit 7722a77 | MIT, © 2025 Alwin Madhu → `third_party/LICENSE-ROS-Cycle.txt` | **Algoritmo adaptado**: sigma derivado de `uncertainty` de Luna; umbrales 0,6 / 0,25 iguales al upstream |

Evaluados sin uso: [nurulain0/HerHaven](https://github.com/nurulain0/HerHaven) (MIT, Next.js + backend; sin pieza cliente aislable), electricg/period-tracker (ya ronda 4).

## Ronda 6 (2026-10-14)
| Qué se reutilizó | Archivo en Luna | Fuente (commit) | Licencia (verificada) | Tipo |
|---|---|---|---|---|
| Previsiones «rodadas» hasta hoy: si la última regla registrada es vieja, el calendario y el `.ics` muestran los próximos 3 periodos futuros (antes: 3 fechas en el pasado) | `app/predict.js` (`upcomingFrom`), usado en `app/main.js` (calendario) y `app/calendar.js` (`predictionICS(p, today)`) | [FlowerYes/moj](https://github.com/FlowerYes/moj) `src/lib/cycle.ts` `buildPrediction` (`while (nextPeriodStart <= today) …`), commit 19c5148; clon en `../upstream/moj` | MIT, © 2026 moj contributors (LICENSE leído) | **Algoritmo adaptado**: solo se saltan periodos previstos ya terminados (inicio + duración ≤ hoy), así un atraso corto conserva la fecha esperada y el aviso de atraso sigue igual |
| Tarjeta «¿Dolor menstrual fuerte? No lo normalices» (endometriosis) | `app/index.html` (`#endo`), estilo en `app/style.css` | Ministerio de Salud de la Nación (Argentina), noticia «Salud fortalece el abordaje inicial de la endometriosis en el primer nivel de atención» (13/03/2023), argentina.gob.ar | CC BY 4.0 (pie del sitio: «Los contenidos de Argentina.gob.ar están licenciados bajo Creative Commons Atribución 4.0 Internacional») → `third_party/LICENSE-argentina-gob-ar.txt` | **REA, cita textual** (2 párrafos sin cambios) con atribución visible y enlace a la fuente y a la licencia |

Bug corregido: `test/ronda6.test.mjs` reproduce el caso (reglas ene–feb 2026, hoy 2026-10-14: antes el `.ics` traía 2026-03-26, 2026-04-23, 2026-05-21). SW `luna-v5`.

Evaluados sin uso (LICENSE leído): [demiahmed/Cuddles](https://github.com/demiahmed/Cuddles) (MIT © 2026 Demi Ahmed, commit c40b0a1) — React + Flask self-hosted; la idea de «rodar» la predicción coincide con la de moj (se tomó la de moj por ser una función aislada). [CampanoMariano/cuidadosfemeninos](https://github.com/CampanoMariano/cuidadosfemeninos) (MIT, commit 6d7e69a) — solo README, sin código. [markdcross/endo-pain-tracker](https://github.com/markdcross/endo-pain-tracker) (MIT © 2020 Mark Cross, commit 1e9023c) — MERN con MongoDB; nada aislable para una PWA local. Sin licencia (solo referencia): qmisslin/clair-de-lune, topness-msft/tempra, SecLBL/period-tracker, captainbrosset/period-tracker.

## Ronda 7 (2026-10-14)
Sin piezas nuevas en esta ronda: tests unitarios en verde y build verificado con `serve-pages.mjs` (landing y `/app/` 200, `/test/` 404, CSP aplicada).
