# Repos candidatos — vertical Salud femenina y Belleza
Fecha: 2026-10-14. Regla de licencias: MIT/Apache se pueden reutilizar con aviso; GPL/AGPL y "sin licencia" = solo referencia de ideas (no se copia código).

## 1. Menstrual tracker (Lunilla) — `menstrual-tracker/upstream/`
| Repo | Licencia | Stack | Valor | Decisión |
|---|---|---|---|---|
| getify/youperiod.app | MIT | JS PWA, cifrado local | Patrón de vault cifrado + SW | **Base** (patrón AES-GCM/PBKDF2 reimplementado) |
| adulbrich/ephira | MIT | Expo/RN, SQLite | Modelo de datos flujo/síntomas/ánimo, calendario | **Adaptado** (modelo + UI portados a web) |
| EmmaTellblom/Mensinator | MIT | Kotlin | Predicción por media de ciclos, export/import JSON | **Adaptado** (algoritmo reescrito en `predict.js`) |
| bloodyhealth/drip (GitLab) | GPL-3.0 | RN | Sintotérmica (temperatura, moco) | Solo ideas |
| J-shw/Menstrudel | GPL-3.0 | Flutter | UX | Descartado (GPL) |
| VoxDroid/CycleOne | GPL-3.0 | Swift | UX iOS | Descartado (GPL) |
| Lunabelle | AGPL | Kotlin | — | Descartado (AGPL) |
| **Búsqueda extra (API GitHub, 14-oct)** | | | | |
| ovumcy/ovumcy-web (126★) | AGPL-3.0 | Go self-hosted | Diseño cuidado, self-hosting | Solo ideas (AGPL) |
| HYPERSAHIL/periodtracker | MIT (LICENSE verificado, © 2026 Period Tracker contributors) | React+TS PWA, commit 565b282 | Predicción robusta (mediana ponderada, contracción bayesiana, ventana ±), reglas de seguridad ACOG | **Adaptado en Lunilla** (`predict.js`, aviso >7 d). Ojo: su README dice "nothing leaves the device" pero tiene sync en la nube (D1); NO se tomó esa parte |
| rubinovitz/hereiod | MIT | Swift | local-first iOS | Referencia |
| MHKarami97/period, Samuelsun9904/cycle-journal, dasdachs/juno | Sin licencia | TS/JS PWA | UX | Solo referencia |

## 2. Menopausia (Brisa) — `menopausia/upstream/`
| Repo | Licencia | Valor | Decisión |
|---|---|---|---|
| Abhinashroy/Menopause-Tracker-app | Sin licencia | Catálogo de síntomas | Solo referencia |
| jessamynsmith/eggtimer-server | MIT | Estadística de irregularidad | Ideas para perimenopausia |
| **Extra:** HARMONI-Lab/harmoni-selene | NOASSERTION | Asistente local + RAG | Solo ideas (licencia no clara) |
| **Extra:** Huth-P/vitality-flow-splash | Sin licencia | Landing perimenopausia | Solo referencia |
Conclusión: no hay base open source utilizable → código propio (MRS de Heinemann redactada en español).

## 3. Maquillaje (Glow Try-On) — `makeup/upstream/`
| Repo | Licencia | Valor | Decisión |
|---|---|---|---|
| google-ai-edge/mediapipe (`@mediapipe/tasks-vision`) | Apache-2.0 | Face Landmarker 478 pts | **Dependencia** (no clonado, enorme) |
| jeeliz/jeelizFaceFilter | Apache-2.0 | Face tracking WebGL | Referencia / alternativa ligera |
| srivatsan-ramesh/Virtual-Makeup | MIT | Blending de labial/delineado | **Lógica portada** a canvas |
| otdnnc/virtual-makeup | Sin licencia | UX web makeup + pelo | Solo referencia |
| **Extra:** Jayanths9/Virtual_Makeup (64★) | Sin licencia | Python/OpenCV | Solo referencia |
| **Extra:** KshitijSawant1/NYRA | GPL-3.0 | Asistente makeup | Descartado |

## 4. Look de pelo (Mechas) — `hair-look/upstream/`
| Repo | Licencia | Valor | Decisión |
|---|---|---|---|
| neyric/ai-hairstyle | MIT | Galería + flujo IA, listo para Cloudflare | **UI de galería adaptada**; generación IA a futuro |
| sanviiz/hairstyle-try-on | MIT | Transferencia de peinado (Python) | Candidato minitest Modal L40S (no ejecutado aún) |
| playatanu/hair-color-try-on | Sin licencia | Segmentación + recolor | Solo referencia |
| MediaPipe hair_segmenter | Apache-2.0 | Segmentación de pelo en navegador | **Dependencia** |
| **Extra:** MiguelHigueraDev/coloraizer, lagrandecode/myhair-ai, EmmanuelEzenwere/MagicMirror | Sin licencia | UX recolor | Solo referencia |

## REA / community
Búsqueda de recursos educativos abiertos (REA) adaptables: no se encontraron repos con licencia abierta y contenido en español sobre ciclo/menopausia listos para reutilizar. El contenido educativo de Lunilla/Brisa es redacción propia. Pendiente: evaluar textos CC-BY de organismos públicos de salud.

## Ronda 2 — búsqueda de nicho (API GitHub, 2026-10-14)
Licencias según metadato de GitHub; las usadas se verificaron leyendo el LICENSE.
| Repo | Categoría | Licencia | Decisión |
|---|---|---|---|
| Blueturboguy07/lunara (68★) | tracker ciclo+perimenopausia local-first | AGPL-3.0 | Solo ideas |
| RamamAgarwal/Menopause-Reddit-Analysis | NLP de síntomas (community) | MIT | Posible fuente de vocabulario de síntomas; no usado |
| lasy/FAM-Public-Repo | fertilidad (investigación) | GPL-3.0 | Descartado |
| loricallum/fertility-awareness-app | lista curada FAM | sin licencia | Referencia |
| Moogalcat/PainTracker, aycibatuhan/skincare (MIT) | trackers PWA de síntomas | sin lic. / MIT | Referencia UX |
| dexie/Dexie.js (14.6k★) | BD navegador (IndexedDB) | Apache-2.0 | Candidato si localStorage queda corto (>5 MB); no hace falta hoy |
| fireproof-storage/fireproof, garden-co/jazz, goatplatform/goatdb | BD local-first / sync | Apache-2.0 / MIT / MIT | Descartados por ahora: sync = datos fuera del dispositivo |
| oxalorg/sakura, xz/new.css | CSS classless (UI kit) | MIT | No necesarios: CSS propio <3 KB |
| mojs/mojs, alexfoxy/lax.js, barbajs/barba | animación | MIT | No integrados: las animaciones CSS propias bastan, sin dependencias |
| animate-css/animate.css | animación | Hippocratic-2.1 (GitHub: NOASSERTION) | Descartado (no OSI) |
| greensock/GSAP, Popmotion | animación | licencia propia / sin lic. | Descartados |
| StartBootstrap/startbootstrap-landing-page, uisual/freebies, uideck/play-bootstrap, cssninjaStudio/fresh | plantillas landing | MIT | Referencia para landings de belleza; no integrados |
| REA / educación menstrual (MenstBot, FlowCare…) | REA/community | sin licencia | Nada reutilizable con licencia abierta |
Conclusión: lo único ensamblado en esta ronda es HYPERSAHIL/periodtracker (MIT). Detalle por app en `*/app/REUSE.md`.

## Ronda 4 — búsqueda (API GitHub, 2026-10-14) y segunda pasada
Clonados con `git clone --depth 1` (los repos grandes con `--filter=blob:none --sparse` y solo la carpeta usada). Licencia verificada leyendo el LICENSE real.
| Repo | App / categoría | Licencia (LICENSE real) | Decisión |
|---|---|---|---|
| nwcell/ics.js (635★, dfec67f) | Lunilla · export calendario | MIT © 2018 Travis Krause | **Integrado** (`third_party/ics.js`, con 5 correcciones RFC 5545 documentadas) |
| IraSoro/peri (108★, 6e2bde5) | Lunilla · tracker Ionic/React | MIT © 2025 Irina Sorokina (logo con licencia aparte, no usado) | **Integrado**: textos en español de fases/síntomas (`app/phases.js`) |
| electricg/period-tracker (36★, dc59733) | Lunilla · PWA 2016 | MIT (package.json dice ISC) | Evaluado: nada nuevo para Lunilla |
| jessamynsmith/eggtimer-server (ya clonado, e1b1d9d) | Brisa · estadística de ciclos | MIT © 2013 Jessamyn Smith | **Integrado**: port de `Statistics` a `app/cycle.js` |
| w3c/aria-practices (1.3k★, 0f765e4, sparse) | Brisa/Glow/Mechas · accesibilidad | W3C Software and Document License (GitHub: NOASSERTION; LICENSE.md remite a la licencia W3C, permisiva tipo BSD) | **Integrado**: `tabs-automatic.js` (Brisa) y `radio.js` (Glow, Mechas), con aviso completo publicado |
| the-pudding/data (1k★, 7a5f439, sparse `makeup-shades/`) | Glow · datos de tonos de base | MIT © 2019 The Pudding | **Integrado**: 625 tonos reales → buscador de base |
| BlondeDevRules/menopause-symptoms-dataset (7b7cfed) | Brisa · REA/datos de síntomas con DOIs | MIT © 2026 Estrogen Left the Chat | Clonado, **no integrado**: inglés, contenido de blog con afirmaciones fuertes; requiere traducción + revisión profesional |
| Sanjana7395/face_makeup_app (39★) | Glow/Mechas · labial + pelo (Python, face parsing) | MIT (metadato GitHub) | Referencia; backend Python, no aporta al cliente web |
| UBC-MDS-2020-21/foundation-shades-pydash | Glow · dashboard de tonos | MIT (metadato) | Descartado: usa el mismo dataset de The Pudding (se tomó la fuente original) |
| kareem-elkenany/matchmyhue | Glow · equivalencias de tonos | MIT (metadato) | Descartado: repo casi vacío (3 KB) |
| jakearchibald/idb-keyval (3.2k★) | Lunilla/Brisa · IndexedDB | Apache-2.0 (GitHub: NOASSERTION) | No hace falta: la bóveda cifrada ocupa KB en localStorage |
| thevarnacode/skin-tone-colour-palettes | Glow · paletas por tono Monk | NOASSERTION | Descartado (licencia no clara) |
| google-research-datasets/scin | dermatología | NOASSERTION | Descartado (licencia no clara, fuera de alcance) |
| otdnnc/virtual-makeup, jaiashwinisatish/GlowGenius, moonlitecode/Glow-AR-makeup-Try-On, MiguelHigueraDev/coloraizer, playatanu/hair-color-try-on | makeup/pelo web | sin licencia | Solo referencia |
| HARMONI-Lab/harmoni-selene; pinnyp88/menopause-tracker | menopausia | NOASSERTION | Descartados (licencia no clara) |
| claresudbery/MenopauseTracker-javascript, healthjourneyapps/menopause-tracker, Vibsoup/Menopause-Tracker, pinkysworld/MenopauseCompanion | menopausia | sin licencia | Solo referencia |
| Blueturboguy07/lunara | ciclo + perimenopausia | AGPL-3.0 | Descartado (AGPL) |
| nremey/HA-menstrual-gauge-v2, AmanCrafts/Menstrual-Health-Tracker, XifeiNi/period-tracker | trackers | MIT (metadato) | Referencia: Home Assistant / backend, sin piezas útiles para una PWA local |

## Ronda 5 — búsqueda (API GitHub + clones, 2026-10-14 ~05:20 ART)
Clonados con `git clone --depth 1`. Licencia verificada leyendo el LICENSE real.
| Repo | App / categoría | Licencia (LICENSE real) | Decisión |
|---|---|---|---|
| christie-lihg/idgaf-tracker (vanilla JS PWA, 0★, 6b407ed) | Brisa · correlaciones | MIT © 2026 Christie Mumpower | **Integrado**: lift en `corr.js` |
| ljlang7701-boop/Perimenopause-Tracker (HTML, a248e7d) | Brisa · doctor prep | MIT © 2026 ljlang7701-boop | **Integrado**: prep + 8 preguntas en español |
| oetiker/PeriMenoBomb (SvelteKit, 19d2ed8) | Brisa · PWA síntomas | MIT © 2026 Tobias Oetiker | Evaluado; UI monolítica DE, no aislable |
| Tidalflow-Health/lila-perimenopause (21a963c) | Brisa · skill agentes | MIT © 2026 Tidalflow Health | Solo referencia (no es app) |
| fnando/sparkline (547★, 3008997) | Lunilla · sparkline SVG | MIT © 2018 Nando Vieira | **Integrado** (`third_party/sparkline.js`) |
| alwin-m/ROS-Cycle-Project (7722a77) | Lunilla · fertilidad gaussiana | MIT © 2025 Alwin Madhu | **Integrado**: `fertilityPov` / `fertilityLevel` |
| nurulain0/HerHaven (9a56502) | Lunilla · wellness | MIT © 2025 Noor Ul Ain Jellani | Referencia (Next+backend) |
| hriddhidey/visage (ac58ccd) | Glow · makeup Python | MIT © 2017 Hriddhi Dey | Evaluado; sin aporte nuevo vs MediaPipe |
| Sanjana7395/face_makeup_app | Glow/Mechas | MIT | Ya referido ronda 4 |
| Sphinx-Phoenix/BarberzBuzz (342aa57) | Mechas · plantilla | MIT © 2022 Sphinx-Phoenix | Descartado (sin recolor) |
| maa-africa/menopause-seo-dashboard | menopausia SEO | MIT | Fuera de alcance |
| Abhishekjc19/HerWell | plataforma Next | MIT | Backend/Postgres; no PWA local |
| cnrsbtogll/perimenopause-tr | peri TR | MIT (metadato) | No clonado (TypeScript app distinta) |

## Ronda 6 — búsqueda (API GitHub sin token + clones, 2026-10-14 ~07:15 ART)
Consultas: menstrual cycle MIT, period tracker pwa, symptom tracker, hot flash menopause, basal body temperature, hair recolor/dye/segmentation, lipstick mediapipe, virtual try-on makeup javascript, «salud menstrual», «menopausia», «ciclo menstrual», cycle tracker local-first, local-first database, face filter webar, endometriosis/PCOS tracker. Clonados con `git clone --depth 1`; licencia verificada leyendo el LICENSE real.
| Repo / fuente | App / categoría | Licencia (verificada) | Decisión |
|---|---|---|---|
| FlowerYes/moj (19c5148) | Lunilla · tracker local-first (Vite/Capacitor) | MIT © 2026 moj contributors | **Integrado**: idea de `buildPrediction` (rodar la predicción hasta hoy) → `upcomingFrom` en `predict.js`; corrige `.ics`/calendario con fechas pasadas |
| argentina.gob.ar — Ministerio de Salud, noticia endometriosis (13/03/2023) | Lunilla · REA en español | CC BY 4.0 (pie del sitio) | **Integrado**: 2 párrafos textuales con atribución (`#endo`) |
| argentina.gob.ar — Ministerio de Salud, «Problemas de salud más frecuentes» (Osteoporosis) | Brisa · REA en español | CC BY 4.0 (pie del sitio) | **Integrado**: selección textual con atribución (`#huesos`, pestaña Médico) |
| demiahmed/Cuddles (c40b0a1) | Lunilla · PWA self-hosted React+Flask | MIT © 2026 Demi Ahmed | Evaluado: misma idea de «rodar» predicciones; backend → no se copió código |
| ehsanwwe/OpenMakeupSDK (12c5a80, 17★) | Glow · makeup AR web (three.js + GLSL) | MIT © 2026 Ehsan Moradi | Evaluado, **candidato** si Glow pasa a WebGL (glitter/shimmer); hoy incompatible con el motor canvas 2D |
| markdcross/endo-pain-tracker (1e9023c) | Lunilla · endometriosis | MIT © 2020 Mark Cross | Referencia (MERN + MongoDB) |
| CampanoMariano/cuidadosfemeninos (6d7e69a) | Lunilla · salud femenina ES | MIT | Vacío (solo README) |
| itisar-345/CycleIQ, cyb3rr31a/ovula, lekhanpro/cyclecare, sandipkalola/menstrual_cycle_widget | trackers | MIT (metadato) | No clonados: TS/Dart, sin pieza nueva frente a lo ya integrado |
| iurteaga/menstrual_cycle_analysis, cilab-ufersa/period_cycle_prediction, lenakmeth/MenstruatioNN | predicción (investigación, Python) | MIT (metadato) | Referencia: modelos estadísticos/LSTM, no aptos para cliente sin datos de entrenamiento |
| metanav/Hacking_Menopause | Brisa · sofocos (hardware/ML) | Apache-2.0 (metadato) | Fuera de alcance |
| topness-msft/tempra, qmisslin/clair-de-lune, SecLBL/period-tracker, captainbrosset/period-tracker, sabuuuu/Dyecode, Html544/colorful-hair-style-changer, jeanmicheldewez-ux/face-hair-cutout-js, NeuroPausa-Team/NeuroPausa, drjosemeseguer/entendiendomimenopausia | varios | sin licencia | Solo referencia |
| neizsche/canihavesex.today, Maxren2/ebbwell | trackers PWA | AGPL-3.0 | Descartados |
| fluentmoheshwar/openperiods, 7Linxx/BLOOM | trackers | GPL-3.0 | Descartados |
| grovely-org/grovely-app, ovumcy/ovumcy-app, WebAR-rocks/WebAR.rocks.face | varios | NOASSERTION | Descartados (licencia no clara) |
| Banuba/videocall-web, Banuba/quickstart-web-react | face AR | MIT (muestras) | Descartados: dependen del SDK propietario de Banuba |
| caioricciuti/duck-ui, TimMikeladze/reflectdb | BD local-first | MIT | No hacen falta (bóveda cifrada en localStorage alcanza; sync = datos fuera del dispositivo) |
Conclusión: 1 algoritmo adaptado (moj → Lunilla) + 2 REA CC BY 4.0 en español (Lunilla, Brisa). Glow y Mechas sin integración nueva.
