# REPOS_A_ENSAMBLAR — repos públicos de referencia de Lunilla

## Cómo leer este archivo

- **Propósito:** lista maestra única de repos públicos de los que Lunilla puede tomar código, algoritmos o ideas. Cada repo aparece una sola vez.
- **Qué es Lunilla:** registro menstrual local para jóvenes. Es una PWA cifrada con PIN, sin cuenta ni servidor, con licencia MIT. No es un dispositivo médico, no diagnostica y no sirve como anticoncepción (ver `README.md`).
- **Estructura:** Grupo 1 = funciones principales, Grupo 2 = funciones secundarias, Grupo 3 = UI, animación y visualización. Cada función tiene un código (`G1-01`…) y su propia tabla. Al final están las organizaciones sin repo concreto, otras fuentes que no son GitHub y los descartados.
- **Orden:** dentro de cada tabla, de más a menos estrellas.
- **Columnas (iguales en todas las tablas):** `Repo` = owner/nombre canónico según la API de GitHub · `URL` = enlace verificado · `Licencia` = SPDX de la API de GitHub · `⭐` = estrellas según la API · `Qué aporta` = para qué sirve, según la lista que aportó el usuario · `Estado` = ver abajo · `También en` = otras listas de Lunilla donde ya figura.
- **Estados:** `integrado` = ya se usó código o una idea en Lunilla (según `aporte-grok-bot/REUSE.md`) · `candidato` = licencia permisiva, se puede tomar código con atribución · `candidato (revisar licencia)` = licencia no estándar · `solo idea (GPL/AGPL)` = copyleft (GPL, AGPL o LGPL), solo leer ideas y no copiar código en Lunilla (MIT) · `solo idea (sin licencia)` = sin licencia declarada, solo referencia · `descartado` = ya evaluado sin uso o no corresponde.
- **Datos:** licencia, estrellas y existencia verificadas con la API de GitHub el 2026-10-22. No se inventó ningún dato. Fuente de los repos: lista aportada por el usuario el 2026-10-22.
- **Totales:** 183 repos únicos en tablas de funciones, 3 organizaciones o usuarios válidos, 2 fuentes que no son GitHub y 20 descartados. Por estado: candidato 87, candidato (revisar licencia) 18, descartado 1, integrado 4, solo idea (GPL/AGPL) 34, solo idea (sin licencia) 39.
- **Agregados 2026-10-22 (búsqueda del bot de Lunilla):** 82 repos nuevos, buscados función por función para armar la app ensamblando código de otros repos. Están en subtablas `Agregados 2026-10-22` dentro de las secciones que ya existían, y en secciones nuevas (marcadas "nueva 2026-10-22" en el índice) para las funciones que no tenían sección. Cada sección nueva arranca explicando cómo funciona la función por dentro y qué piezas hacen falta. Total del archivo: 265 repos únicos (183 previos + 82 nuevos).
- **Columnas de las subtablas nuevas:** `Link` · `owner/nombre` (nombre canónico devuelto por la API de GitHub) · `MB` (campo `size` de la API, en KB, convertido a MB) · `⭐` · `Lenguaje` · `Licencia` (SPDX de la API; se anota tal cual, sin juicio) · `Último commit` (`pushed_at` de la API, fecha del último push) · `Front/Back` (F = interfaz o UI, B = lógica, datos, integraciones o backend) · `Qué es` · `Pieza concreta que aporta a Lunilla` (dónde, cuándo y cómo se ensambla) · `Otras funciones` (códigos de otras secciones donde también sirve; el repo figura una sola vez) · `Origen`. Los repos sin actividad en 2026 llevan una nota de "Vigencia" que explica por qué se quedan. Las funciones que resuelve mejor un LLM (redactar textos, horóscopos, afirmaciones, chat de preguntas) no tienen repos de texto: solo infraestructura.

## Índice

| Código | Función | Repos |
|---|---|---|
| G1-01 | Apps y trackers de ciclo (referencia completa) | 39 + 15 agregados 2026-10-22 |
| G1-02 | Predicción de ciclo, ventana fértil y librerías de cálculo | 8 + 4 agregados 2026-10-22 |
| G1-03 | Método sintotérmico, BBT y fertility awareness | 15 + 13 agregados 2026-10-22 |
| G1-04 | Modelos ML y series de tiempo para el ciclo | 5 + 3 agregados 2026-10-22 |
| G1-05 | Datasets y análisis estadístico del ciclo | 5 + 1 agregados 2026-10-22 |
| G1-06 | Wearables y datos fisiológicos | 4 + 2 agregados 2026-10-22 |
| G1-07 | Tracking de flujo menstrual (función 3) (nueva 2026-10-22) | 1 |
| G1-08 | Logging de síntomas físicos y emocionales (función 4) (nueva 2026-10-22) | 6 |
| G1-09 | Análisis de patrones y correlaciones síntoma ↔ fase (función 5) (nueva 2026-10-22) | 7 |
| G1-11 | Modo embarazo: semanas, fecha probable de parto, tamaño del bebé, bump tracker, kick counter, contraction timer y nombres (función 9 y extras) (nueva 2026-10-22) | 11 |
| G1-14 | Symptom checker y autoevaluación de patrones PCOS/endometriosis (función 12 y extra) (nueva 2026-10-22) | 2 |
| G1-16 | Predicción de síntomas e intensidad de dolor (función 14 y extras de dolor) (nueva 2026-10-22) | 1 |
| G1-18 | Partner sharing con permiso, E2E (función 20 y extra partner mode / inner circle) (nueva 2026-10-22) | 1 |
| G1-19 | Tests OPK/LH: registro, lector de tiras por foto y curva de LH (función 22 y extras) (nueva 2026-10-22) | 1 |
| G1-20 | Modos por objetivo, personalización y guided journey / checklists (función 23 y extra) (nueva 2026-10-22) | 2 |
| G1-21 | Backup y sync multi-dispositivo E2E, CRDT, local-first (función 24 y extra backup Drive/iCloud) (nueva 2026-10-22) | 2 |
| G1-22 | Almacenamiento on-device y privacy-first, cifrado y modo anónimo (función 25 y extra) (nueva 2026-10-22) | 1 |
| G1-23 | Modo postparto y bebé: sangrado, lactancia, sueño y alimentación (extras) (nueva 2026-10-22) | 1 |
| G1-24 | Care navigator / buscador de clínicas y recursos (extra) (nueva 2026-10-22) | 1 |
| G1-25 | Exportar a CSV/spreadsheet e importar de otras apps (extra) (nueva 2026-10-22) | 2 |
| G1-27 | Registro de condiciones de salud y medicación (extra) (nueva 2026-10-22) | 2 |
| G2-01 | Educación, contenido y CMS | 12 |
| G2-02 | Comunidad, foros y chat | 12 |
| G2-03 | Gamificación | 10 + 1 agregados 2026-10-22 |
| G2-04 | Recordatorios y notificaciones | 17 |
| G2-05 | Ánimo, diario y síntomas emocionales | 9 |
| G2-06 | Datos de salud y FHIR | 7 |
| G2-07 | Backend y bases de datos | 3 |
| G2-10 | Cycle syncing de productividad y rutinas por fase (nueva 2026-10-22) | 1 |
| G3-01 | Componentes UI animados y design systems | 16 |
| G3-02 | Gráficos y visualización de datos | 6 + 1 agregados 2026-10-22 |
| G3-03 | UI mobile (Flutter) | 2 |
| G3-04 | 3D (React Three Fiber) | 2 |
| G3-05 | Listas curadas (awesome) | 3 |
| G3-06 | Animación y scroll (librerías base) | 8 |

# Grupo 1 — Funciones principales del tracker

Lo que hace Lunilla por dentro: registrar, predecir y entender el ciclo.

## G1-01 · Apps y trackers de ciclo (referencia completa) (39)

Apps de tracking menstrual open source: calendario, registro diario, síntomas, fases y modelo de datos.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| EmmaTellblom/Mensinator | https://github.com/EmmaTellblom/Mensinator | MIT | 144 | Android privacy-focused con síntomas customizables y predicciones. | integrado | REPOS-SIMILARES.md, REUSE.md, UPSTREAM.md, repos-candidatos.md |
| ovumcy/ovumcy-web | https://github.com/ovumcy/ovumcy-web | AGPL-3.0 | 126 | Self-hosted con HTMX + Tailwind. UI limpia y privacy-first. | solo idea (GPL/AGPL) | REPOS-SIMILARES.md |
| J-shw/Menstrudel | https://github.com/J-shw/Menstrudel | GPL-3.0 | 113 | Flutter (Android/iOS). Material 3, temas claro/oscuro, tracking de síntomas y flujo. Muy útil para mobile. | solo idea (GPL/AGPL) | REPOS-SIMILARES.md |
| IraSoro/peri | https://github.com/IraSoro/peri | MIT | 108 | Period tracker con Ionic + React. Buena base de calendario, fases del ciclo y UI limpia. | integrado | REPOS-SIMILARES.md, REUSE.md, UPSTREAM.md |
| benny10ben/Periodt | https://github.com/benny10ben/Periodt | GPL-3.0 | 69 | Android privacy-first con pill tracking y outlier filtering. | solo idea (GPL/AGPL) | repos-candidatos.md |
| jfr3000/drip | https://github.com/jfr3000/drip | GPL-3.0 | 44 | Mirror de Drip (React Native). Symptothermal method, muy serio y privacy-first. | solo idea (GPL/AGPL) | REPOS-SIMILARES.md |
| aradar46/Mooneva-Cycle-Private-Period-Tracker | https://github.com/aradar46/Mooneva-Cycle-Private-Period-Tracker | GPL-3.0 | 43 | Offline total, encryption, discrete mode, pill tracking. | solo idea (GPL/AGPL) | REPOS-SIMILARES.md, repos-candidatos.md |
| electricg/period-tracker | https://github.com/electricg/period-tracker | MIT | 36 | Progressive Web App simple y ligera. REUSE.md ronda 4: evaluado sin uso (PWA de 2016 sin nada que Lunilla no tenga). | descartado | REPOS-SIMILARES.md, REUSE.md, UPSTREAM.md |
| raae/pow-app | https://github.com/raae/pow-app | GPL-3.0 | 33 | Gatsby + MaterialUI. Journal menstrual privacy-first. | solo idea (GPL/AGPL) | REPOS-SIMILARES.md |
| XifeiNi/period-tracker | https://github.com/XifeiNi/period-tracker | MIT | 22 | React + Material UI. UI funcional de period tracker. | candidato | REPOS-SIMILARES.md |
| bloodyhealth/drip | https://github.com/bloodyhealth/drip | GPL-3.0 | 21 | Repo original de Drip (GitLab mirror). Symptothermal method completo, muy serio y transparente. | solo idea (GPL/AGPL) | REUSE.md, repos-candidatos.md |
| sandipkalola/menstrual_cycle_widget | https://github.com/sandipkalola/menstrual_cycle_widget | MIT | 17 | Widget Flutter reutilizable. Calendario + gráficos de temperatura, hormonas, sleep, etc. | candidato | REPOS-SIMILARES.md |
| alwin-m/liora | https://github.com/alwin-m/liora | NOASSERTION (no estándar) | 16 | Flutter + Material 3. Cycle tracking + e-commerce wellness. UI premium. | candidato (revisar licencia) | REPOS-SIMILARES.md |
| Sreetama2001/Shewin | https://github.com/Sreetama2001/Shewin | sin licencia | 10 | React + SASS. Menstrual health web app. | solo idea (sin licencia) | REPOS-SIMILARES.md |
| alwin-m/ROS-Cycle-Project | https://github.com/alwin-m/ROS-Cycle-Project | MIT | 9 | Web privacy-first. Fertile windows probabilísticas (gradientes) + Gaussian peaks. Matemática transparente. | integrado | REPOS-SIMILARES.md, REUSE.md, UPSTREAM.md |
| Pogayo/Ledi-mobile | https://github.com/Pogayo/Ledi-mobile | sin licencia | 8 | Flutter period tracker con ML on-device. | solo idea (sin licencia) | REPOS-SIMILARES.md |
| uoftblueprint/the-period-purse-android | https://github.com/uoftblueprint/the-period-purse-android | GPL-3.0 | 8 | Menstruation Nation. Incluye página educativa sobre productos menstruales. | solo idea (GPL/AGPL) | REPOS-SIMILARES.md |
| adulbrich/ephira | https://github.com/adulbrich/ephira | MIT | 7 | React Native / Expo. Privacy-first, calendario visual personalizable, tracking de síntomas y moods. | integrado | REPOS-SIMILARES.md, REUSE.md, UPSTREAM.md |
| VoxDroid/CycleOne | https://github.com/VoxDroid/CycleOne | GPL-3.0 | 5 | SwiftUI (iOS nativo). Diseño sofisticado y privacy-first. | solo idea (GPL/AGPL) | REPOS-SIMILARES.md |
| Jani-shiv/MyCycleCare | https://github.com/Jani-shiv/MyCycleCare | MIT | 3 | React + TypeScript. Mood journal + symptom tracker + AI assistant. | candidato | REPOS-SIMILARES.md |
| jofaval/fusa-period-tracking | https://github.com/jofaval/fusa-period-tracking | MIT | 3 | Vue + Tailwind + Element Plus. Gender-neutral y local-first. | candidato | REPOS-SIMILARES.md |
| lebaaar/period_tracker | https://github.com/lebaaar/period_tracker | GPL-3.0 | 3 | Flutter simple y limpio (hecho para la novia del autor). | solo idea (GPL/AGPL) | — |
| harshit2k4/flowlytics | https://github.com/harshit2k4/flowlytics | AGPL-3.0 | 2 | Flutter + on-device ML. Gráficos de hormonas (estrógeno, progesterona, testosterona) en forma de ondas. Muy minucioso. | solo idea (GPL/AGPL) | REPOS-SIMILARES.md |
| Iankitsinghak/HerFlow | https://github.com/Iankitsinghak/HerFlow | MIT | 2 | Next.js + Tailwind + shadcn/ui. PWA de women’s health con AI companion, diseño suave y empático. | candidato | — |
| AmanCrafts/Menstrual-Health-Tracker | https://github.com/AmanCrafts/Menstrual-Health-Tracker | MIT | 1 | Incluye Education Hub con guías sobre ciclo y PMS (React + Express + MongoDB). | candidato | REPOS-SIMILARES.md |
| enzoberreur/helene-women-health-app | https://github.com/enzoberreur/helene-women-health-app | sin licencia | 1 | React Native / Expo con design system modular (orientado a menopause, pero la estructura de UI es útil). | solo idea (sin licencia) | REPOS-SIMILARES.md |
| Harshal0902/Women-Essential | https://github.com/Harshal0902/Women-Essential | sin licencia | 1 | Women’s health platform (React + Styled Components). | solo idea (sin licencia) | — |
| lauraguerra1/celestial-cycle | https://github.com/lauraguerra1/celestial-cycle | sin licencia | 1 | Astrología + cycle tracking. UI interesante con fases lunares. | solo idea (sin licencia) | REPOS-SIMILARES.md |
| Suryansh1987/period-tracker | https://github.com/Suryansh1987/period-tracker | sin licencia | 1 | Next.js + Tailwind + ShadCN UI. Dashboard moderno, cards, toasts. | solo idea (sin licencia) | — |
| YemsAla/FemHealthTogether | https://github.com/YemsAla/FemHealthTogether | sin licencia | 1 | Proyecto de menopause support con diagramas interactivos y buen enfoque de diseño. | solo idea (sin licencia) | — |
| allisonchuu/Period-Pal | https://github.com/allisonchuu/Period-Pal | sin licencia | 0 | Tamagotchi-style menstrual care app (concepto raro y educativo). | solo idea (sin licencia) | — |
| fullstackcrypto/bloom-cycle-tracker | https://github.com/fullstackcrypto/bloom-cycle-tracker | sin licencia | 0 | React + Tailwind + Framer Motion. Cycle ring visualization, fases del ciclo, animaciones suaves. Muy bonito visualmente. | solo idea (sin licencia) | — |
| gcclinux/lunatrack | https://github.com/gcclinux/lunatrack | sin licencia | 0 | React + Vite + Tailwind. Calendario + stats de ciclo, UI simple y limpia. | solo idea (sin licencia) | — |
| kamilearner/wellness-circle | https://github.com/kamilearner/wellness-circle | sin licencia | 0 | Women’s wellness app con period tracker y community. | solo idea (sin licencia) | — |
| Khusro-S/Kira | https://github.com/Khusro-S/Kira | sin licencia | 0 | Web con calendar + day modal + insights de síntomas. | solo idea (sin licencia) | — |
| pythonime-lab/yourcyclekeeper | https://github.com/pythonime-lab/yourcyclekeeper | NOASSERTION (no estándar) | 0 | PWA privacy-first con encriptación local. | candidato (revisar licencia) | REPOS-SIMILARES.md |
| Shapehaven-Innovations/RhythmX | https://github.com/Shapehaven-Innovations/RhythmX | sin licencia | 0 | iOS Swift. Phase ring + moon phases + cervical mucus charts. | solo idea (sin licencia) | REPOS-SIMILARES.md |
| TheRGuy9201/wellnessher.ai | https://github.com/TheRGuy9201/wellnessher.ai | sin licencia | 0 | React + Vite + Tailwind. Women’s health platform con charts. | solo idea (sin licencia) | — |
| twenty-eight-days/twenty-eight-days | https://github.com/twenty-eight-days/twenty-eight-days | MIT | 0 | Visualizaciones de ciclo con Userbase (privacy). | candidato | — |

### G1-01 · Agregados 2026-10-22 — Apps completas de ciclo con actividad en 2026 (referencia de funciones enteras) (15)

Cómo se usan: cada app es una implementación completa de varias funciones (registro, predicción, exportación, bloqueo). Sirven para copiar flujos enteros (modelo de datos, pantallas, reglas) y para comparar decisiones. En cada fila se indica qué módulo concreto conviene mirar.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/MBombeck/HealthLog | MBombeck/HealthLog | 92.6 | 193 | TypeScript | NOASSERTION (no estándar) | 2026-10-23 | B | PWA self-hosted de salud (peso, presión, glucosa, sueño, ánimo, medicación, ciclo) con integraciones Withings, WHOOP y Fitbit. | Módulo de ciclo dentro de una PWA de salud general, más sus conectores de wearables: referencia de cómo mezclar ciclo con otras métricas y de cómo hacer OAuth con WHOOP y Fitbit. | G1-06, G1-27 | Lunilla bot, 2026-10-22 |
| https://github.com/treiher/valens | treiher/valens | 9.7 | 12 | Rust | AGPL-3.0 | 2026-10-04 | B | App web self-hosted de entrenamiento y salud que incluye seguimiento del ciclo menstrual junto al entrenamiento. | Cruce de ciclo con entrenamiento y métricas corporales, para G2-10 (cycle syncing). | G2-10 | Lunilla bot, 2026-10-22 |
| https://github.com/lekhanpro/cyclecare | lekhanpro/cyclecare | 6.0 | 10 | Dart | MIT | 2026-10-09 | B | Tracker Flutter offline-first de ciclo, fertilidad y bienestar, sin cuenta; README con sección de arquitectura. | Arquitectura documentada de un tracker offline (capas de datos, predicción y fertilidad): sirve de plano para ordenar los módulos de Lunilla. | G1-02, G1-10 | Lunilla bot, 2026-10-22 |
| https://github.com/grovely-org/grovely-app | grovely-org/grovely-app | 18.8 | 10 | Vue | NOASSERTION (no estándar) | 2026-08-18 | B | Hub doméstico self-hosted para parejas con tracking de periodo, predicción y despensa compartida. | Compartir el ciclo con la pareja dentro de una app de hogar (permisos entre dos usuarios). | G1-18 | Lunilla bot, 2026-10-22 |
| https://github.com/Novawerk/YIMA | Novawerk/YIMA | 44.2 | 5 | Kotlin | MIT | 2026-05-21 | B | Calendario de periodo con Kotlin Multiplatform y Compose: sin red, sin cuenta y sin analítica. | Lógica de ciclo compartida multiplataforma (módulo común KMP): referencia de modelo de datos y predicción para portar a TS. | G1-02 | Lunilla bot, 2026-10-22 |
| https://github.com/ovumcy/ovumcy-app | ovumcy/ovumcy-app | 5.7 | 4 | TypeScript | NOASSERTION (no estándar) | 2026-10-18 | B | Cliente móvil local-first de Ovumcy (iOS y Android): tracking, síntomas, insights, exportación y backup en el dispositivo. | Flujos de exportación y backup local y lógica de insights que comparte con ovumcy-web (ya en G1-01): base para el backup de Lunilla. | G1-21, G1-25 | Lunilla bot, 2026-10-22 |
| https://github.com/Het161/SheCareX | Het161/SheCareX | 1.2 | 4 | TypeScript | MIT | 2026-08-16 | B | Companion de salud femenina que muestra cómo calcula cada número: ciclo, síntomas y screening de riesgo explicado. | Screening de riesgo transparente (muestra el cálculo) para G1-14, y patrón de "no inventar números" en las predicciones. | G1-14, G1-08 | Lunilla bot, 2026-10-22 |
| https://github.com/QuietFlare/Cycluna | QuietFlare/Cycluna | 6.8 | 4 | Kotlin | MIT | 2026-10-16 | B | Tracker de ciclo con fases lunares: clientes nativos iOS y Android con lógica compartida y un Cloudflare Worker público. | Lógica compartida de ciclo + luna y uso de Cloudflare Worker (mismo proveedor que Lunilla). | G2-08 | Lunilla bot, 2026-10-22 |
| https://github.com/csoftware-arigpt/lunabelle | csoftware-arigpt/lunabelle | 0.3 | 2 | Kotlin | AGPL-3.0 | 2026-06-22 | B | Tracker Android offline con base cifrada (Room + SQLCipher), bloqueo con PIN o biometría y export/import JSON. | Patrón de cifrado de base, bloqueo de la app y formato de export/import JSON. | G1-22, G2-13, G1-25 | Lunilla bot, 2026-10-22 |
| https://github.com/pavoras/freeperiod | pavoras/freeperiod | 59.9 | 1 | Kotlin | GPL-3.0 | 2026-10-22 | B | Calendario de periodo y diario Android sin permiso de internet. | Combinación de calendario con diario diario y la decisión de no tener red: referencia de la vista diario + ciclo de Lunilla. | G2-05 | Lunilla bot, 2026-10-22 |
| https://github.com/Dheirav/Luna | Dheirav/Luna | 1.2 | 0 | Kotlin | Apache-2.0 | 2026-10-13 | B | Tracker Android offline que predice una ventana en lugar de una fecha exacta y declara la incertidumbre. | Idea clave para G1-02: mostrar el próximo periodo como ventana con incertidumbre cuando hay pocos datos. | G1-02 | Lunilla bot, 2026-10-22 |
| https://github.com/Rishiidev/Nari | Rishiidev/Nari | 0.4 | 0 | TypeScript | MIT | 2026-06-18 | F | PWA de ciclo local-only que guarda todo en el navegador y funciona offline e instalable. | Misma arquitectura que Lunilla (PWA local, sin servidor): comparar service worker, almacenamiento y pantallas. | G1-22 | Lunilla bot, 2026-10-22 |
| https://github.com/periodly-app/periodly | periodly-app/periodly | 0.3 | 0 | JavaScript | MIT | 2026-09-14 | F | PWA minimalista de periodo con un toque, privada y sin cuenta. | Flujo de registro en un solo toque para la pantalla principal. | G1-07 | Lunilla bot, 2026-10-22 |
| https://github.com/carlodandan/ovulate | carlodandan/ovulate | 2.3 | 0 | JavaScript | MIT | 2026-10-06 | F | Tracker React + Vite + Tailwind offline que calcula ovulación, ventana fértil, periodos activos y fases. | Funciones de cálculo de ovulación y ventana en un stack igual al de Lunilla (Vite). | G1-02 | Lunilla bot, 2026-10-22 |
| https://github.com/ClermontDigital/ClueCycle | ClermontDigital/ClueCycle | 1.4 | 0 | Python | Apache-2.0 | 2026-10-07 | F | Tracker para Home Assistant que imita a Clue: anillo de ciclo y registro diario con las mismas categorías y tags que Clue. | Catálogo de categorías y tags estilo Clue y el componente de anillo de ciclo. | G1-08, G1-26 | Lunilla bot, 2026-10-22 |

## G1-02 · Predicción de ciclo, ventana fértil y librerías de cálculo (8)

Algoritmos y librerías que calculan próximo periodo, ovulación, ventana fértil y confianza.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| sarthology/ovuli | https://github.com/sarthology/ovuli | MIT | 16 | Ovulation calculator + calendar (Expo). | candidato | — |
| NextFutureHub/cyclia | https://github.com/NextFutureHub/cyclia | MIT | 5 | Librería TypeScript para predicción de ovulación, fertile window y análisis de regularidad. | candidato | — |
| hangngdata/menstruation_cycle_length_prediction | https://github.com/hangngdata/menstruation_cycle_length_prediction | MIT | 2 | Modelos de ML (CatBoost, XGBoost, etc.) para predecir longitud de ciclo + SHAP. | candidato | — |
| kyradelray/mcanalysis | https://github.com/kyradelray/mcanalysis | MIT | 2 | Paquete open source (R + Python) para analizar efectos del ciclo menstrual en datos de salud digital (Fourier-basis GAM). | candidato | — |
| nkrider7/vani | https://github.com/nkrider7/vani | sin licencia | 2 | Librería TypeScript (`vani-cycle`) con estrategias de predicción (WMA + Calendar), fertile window y confidence scores. | solo idea (sin licencia) | REPOS-SIMILARES.md |
| danielhuang74/ovulation-prediction | https://github.com/danielhuang74/ovulation-prediction | sin licencia | 1 | Modelos de ML (regresión, random forest) para predecir día de ovulación a partir de BBT. | solo idea (sin licencia) | — |
| fertilai/nc-fet-simulator | https://github.com/fertilai/nc-fet-simulator | sin licencia | 1 | Simulador de predicción de ovulación (relacionado con paper de ML en tiempo real). | solo idea (sin licencia) | — |
| apiverve/menstrualcycle-api | https://github.com/apiverve/menstrualcycle-api | MIT | 0 | API de cálculo de ciclos, fertile window y ovulación. | candidato | — |

### G1-02 · Agregados 2026-10-22 — Predicción de periodo y ciclo · Ovulación y ventana fértil (funciones 1 y 2) (4)

Cómo funciona: se toma el historial de inicios de periodo, se calcula la duración de cada ciclo y se estima el próximo inicio con un modelo que tiene en cuenta la variabilidad propia (media ponderada, mediana robusta, bayesiano o serie de tiempo), no un 28 fijo. La ovulación se ubica restando la fase lútea (unos 12–14 días) al próximo inicio, o con señales (BBT, LH, moco) cuando las hay. La ventana fértil va de unos 5 días antes a 1 después de la ovulación. Piezas: cálculo de duraciones, filtro de outliers, intervalo de confianza, cálculo de fases y ventana.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/P-H-V/feve-bayesian-ovulation-prediction | P-H-V/feve-bayesian-ovulation-prediction | 0.0 | 0 | JavaScript | MIT | 2026-10-15 | B | Motor bayesiano autocalibrado de predicción de ovulación (BBT + moco + historial), 100% en el dispositivo, en JavaScript. | Pieza directa para G1-02: reemplaza el promedio fijo por una posterior bayesiana del día de ovulación que se recalibra con cada ciclo. | G1-03, G1-10 | Lunilla bot, 2026-10-22 |
| https://github.com/theanalyticalmum/cycle-phase-engine | theanalyticalmum/cycle-phase-engine | 0.0 | 0 | TypeScript | MIT | 2026-07-03 | B | Utilidad TypeScript sin dependencias que pasa de fecha de inicio a fase del ciclo, anclada en la fase lútea y con casos borde resueltos. | Función `fase(fecha)` lista para usar en la pantalla de hoy y en el calendario. | G1-09, G2-10 | Lunilla bot, 2026-10-22 |
| https://github.com/evelyn9191/period_predictions | evelyn9191/period_predictions | 0.0 | 0 | Python | MIT | 2026-05-29 | B | Script Python que predice ciclos futuros con simulación Monte Carlo y devuelve rangos de probabilidad en vez de fechas fijas. | Algoritmo Monte Carlo para la banda de probabilidad del próximo periodo (portable a TS). | G1-04 | Lunilla bot, 2026-10-22 |
| https://github.com/aarohim24/nfp-prediction | aarohim24/nfp-prediction | 0.3 | 0 | Python | sin licencia | 2026-07-01 | B | Pipeline Python que predice el día pico de ovulación con modelado bayesiano de fase lútea sobre el dataset clínico de Marquette (Fehring 2012). | Modelo bayesiano de fase lútea validado contra datos reales: referencia para calibrar la ventana fértil de Lunilla (se porta la fórmula a TS). | G1-05 datasets, G1-21 moco | Lunilla bot, 2026-10-22 |

## G1-03 · Método sintotérmico, BBT y fertility awareness (15)

Reglas sintotérmicas, temperatura basal (BBT), coverline, moco cervical y charting.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| neizsche/canihavesex.today | https://github.com/neizsche/canihavesex.today | AGPL-3.0 | 21 | Self-hosted period & fertility tracker con reglas sintotérmicas. | solo idea (GPL/AGPL) | REPOS-SIMILARES.md |
| mkudija/Creighton-Model-Chart | https://github.com/mkudija/Creighton-Model-Chart | MIT | 4 | Scripts en Python para charting del Creighton Model (biomarcadores de mucus). | candidato | — |
| lasy/FAM-Public-Repo | https://github.com/lasy/FAM-Public-Repo | GPL-3.0 | 3 | Código y datos del paper sobre assessment de menstrual health con apps de fertility awareness. | solo idea (GPL/AGPL) | REPOS-SIMILARES.md |
| ticklish-bear/ember | https://github.com/ticklish-bear/ember | MIT | 3 | App offline Flutter para método sintotérmico (sin predicciones automáticas). | candidato | REPOS-SIMILARES.md |
| laviniaclare/LadyTemp | https://github.com/laviniaclare/LadyTemp | sin licencia | 2 | Dispositivo + app de BBT automática (referencia de integración). | solo idea (sin licencia) | — |
| Maxren2/ebbwell | https://github.com/Maxren2/ebbwell | AGPL-3.0 | 2 | PWA self-hosted con reglas sintotérmicas y encryption. | solo idea (GPL/AGPL) | REPOS-SIMILARES.md |
| NerdyProjects/ble-thermometer | https://github.com/NerdyProjects/ble-thermometer | sin licencia | 2 | Hardware + software para termómetro BBT BLE (fertility awareness). | solo idea (sin licencia) | — |
| hubnerpatrik/zhinochna-cycle | https://github.com/hubnerpatrik/zhinochna-cycle | sin licencia | 1 | zhinochna-cycle: Tracker sintotérmico manual con chart tradicional de temperatura + mucus + cervix. El adjunto lo nombra hubnerpatrik/cycle-app (redirige). | solo idea (sin licencia) | — |
| loreguerra/bbt-chart | https://github.com/loreguerra/bbt-chart | MIT | 1 | BBT charting con Plotly. | candidato | — |
| dkvasnicka/sympto | https://github.com/dkvasnicka/sympto | AGPL-3.0 | 0 | Web app para método sintotérmico (detección automática de subida de temperatura). | solo idea (GPL/AGPL) | REPOS-SIMILARES.md |
| foreverycast/basal_temperature_method | https://github.com/foreverycast/basal_temperature_method | MIT | 0 | Algoritmo simple del método de temperatura basal. | candidato | — |
| JacobStephens2/chart35-client | https://github.com/JacobStephens2/chart35-client | AGPL-3.0 | 0 | Cliente para charting Creighton Model (privacy-focused). Archivado. | solo idea (GPL/AGPL) | REPOS-SIMILARES.md |
| jfr3000/sympto | https://github.com/jfr3000/sympto | AGPL-3.0 | 0 | Mirror del código de sympto (reglas del método sintotérmico). | solo idea (GPL/AGPL) | — |
| jorgt/tempchart | https://github.com/jorgt/tempchart | sin licencia | 0 | Charting de BBT con SQLite. | solo idea (sin licencia) | — |
| keyneom/easy-bc | https://github.com/keyneom/easy-bc | NOASSERTION (no estándar) | 0 | Planner de riesgo de fertilidad on-device (combinación de métodos). | candidato (revisar licencia) | — |

### G1-03 · Agregados 2026-10-22 — BBT, algoritmo días rojos/verdes y moco cervical (funciones 7, 8 y 21) (13)

Cómo funciona: la BBT se registra cada mañana. Después de la ovulación la progesterona la sube 0,2–0,5 °C, y el algoritmo detecta ese shift con reglas fijas, como la regla 3 sobre 6 con coverline de Sensiplan o la del método sintotérmico. Se cruza con el moco cervical (pico de moco) y la posición cervical. Un algoritmo estilo Natural Cycles suma la estadística del ciclo y la incertidumbre para marcar días rojos (posible fertilidad) y verdes. Piezas: entrada de temperatura con corrección, detector de shift, reglas de moco, combinador sintotérmico y gráfico de temperatura.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/ringleader/cyclist | ringleader/cyclist | 4.8 | 15 | Python | NOASSERTION (no estándar) | 2026-05-01 | B | Componente de Home Assistant que sigue el ciclo con datos de fertility awareness (BBT, moco y LH) según el objetivo (evitar o buscar embarazo). | Reglas de fertility awareness combinando BBT, moco y LH, y cambio de lógica según el objetivo. | G1-10, G1-19, G1-20 | Lunilla bot, 2026-10-22 |
| https://github.com/acidg/rise | acidg/rise | 1.5 | 1 | Dart | GPL-3.0 | 2026-09-12 | B | Tracker sintotérmico privado construido alrededor del termómetro BBT Bluetooth Ovy OT35. | Lectura del termómetro BBT por BLE más el sintotérmico: modelo para importar temperaturas de termómetros. | G1-06 | Lunilla bot, 2026-10-22 |
| https://github.com/Thometoto/cycleseed | Thometoto/cycleseed | 0.1 | 1 | Python | sin licencia | 2026-09-25 | B | Tracker sintotérmico experimental y privacy-first: registra observaciones diarias, entrena un clasificador liviano de ventana fértil y se adapta con cautela a los ciclos completos de la persona. | Combinación reglas fisiológicas + clasificador logístico liviano: se ensambla como capa de "ajuste personal" sobre las reglas fijas de ventana fértil. | G1-04, G1-02 | Lunilla bot, 2026-10-22 |
| https://github.com/izzydoesizzy/lunachart-tracker | izzydoesizzy/lunachart-tracker | 1.1 | 0 | HTML | sin licencia | 2026-07-21 | F | Tracker móvil del método Justisse (sintotérmico secular), con asistente de aprendizaje y gráfico diario de biomarcadores. | Gráfico diario de biomarcadores (BBT, moco, cérvix) y asistente que enseña a registrar. | G1-26 | Lunilla bot, 2026-10-22 |
| https://github.com/phil-melton/SymptoThermalNFP | phil-melton/SymptoThermalNFP | 0.3 | 0 | Python | sin licencia | 2026-08-04 | B | Herramienta local de gráfico de fertilidad para navegador de escritorio con interpretación sintotérmica conservadora, sin app, cuenta, nube ni analítica. | Reglas sintotérmicas conservadoras (cuándo marcar día infértil) para portar al motor de días rojos/verdes de Lunilla, en modo "nunca más optimista que el método". | G1-21 moco, G1-02 | Lunilla bot, 2026-10-22 |
| https://github.com/ussyverse/ovuleraussy | ussyverse/ovuleraussy | 0.0 | 0 | Nim | sin licencia | 2026-05-05 | B | CLI en Nim local-first de "alfabetización del ciclo" sintotérmico: registra temperatura al despertar, descriptores de moco, sangrado, síntomas y factores de confusión, y separa lo observado de la interpretación. | Modelo de "confusores" (fiebre, alcohol, mal sueño) que invalidan una temperatura: se copia como flags en el registro de BBT de Lunilla. | G1-21 moco, G1-08 | Lunilla bot, 2026-10-22 |
| https://github.com/Amuyaw4ai/Selene | Amuyaw4ai/Selene | 0.2 | 0 | JavaScript | sin licencia | 2026-07-21 | B | Motor sintotérmico adaptativo de seguimiento y predicción de ovulación en React + Vite con algoritmos biológicos propios. | Algoritmos de detección del salto térmico en JS dentro del mismo stack (Vite) que Lunilla: candidato directo a módulo de BBT. | G1-02 | Lunilla bot, 2026-10-22 |
| https://github.com/sunbeamstudiosdev/Coverline | sunbeamstudiosdev/Coverline | 0.8 | 0 | TypeScript | GPL-3.0 | 2026-09-16 | F | App de gráfico de fertilidad sintotérmica que registra temperatura al despertar, flujo cervical, tiras de test y periodo; el gráfico nunca sale del teléfono. | Pantalla de gráfico sintotérmico (temperatura + moco + tiras en un mismo chart con coverline) para la vista de fertilidad. | G1-19 LH, G1-21 moco | Lunilla bot, 2026-10-22 |
| https://github.com/zikalify/TemperatureTracker | zikalify/TemperatureTracker | 0.8 | 0 | JavaScript | NOASSERTION (no estándar) | 2026-05-29 | F | App web instalable en Android (PWA) para registrar temperatura basal y estimar la ovulación. | Formulario y gráfico de BBT en una PWA: pieza front simple para la entrada diaria de temperatura. | G1-02 | Lunilla bot, 2026-10-22 |
| https://github.com/JonathanKit/NFP-Tracking | JonathanKit/NFP-Tracking | 0.3 | 0 | Kotlin | GPL-3.0 | 2026-10-10 | B | easyNFP: app Android offline (docs en alemán) que funciona como hoja de ciclo sintotérmica: temperatura, moco y sangrado, con curva y explicación de qué regla se aplica en qué días. | Explicación de "qué regla aplicó y por qué" junto a cada día: patrón de transparencia para los días rojos/verdes de Lunilla. | G1-21 moco | Lunilla bot, 2026-10-22 |
| https://github.com/JacobStephens2/verelle | JacobStephens2/verelle | 20.7 | 0 | TypeScript | MIT | 2026-10-15 | B | Gráfico de fertilidad local-first para parejas que usan el Método Marquette: registra observaciones, arma un gráfico legible para instructoras y calcula la ventana fértil. Archivado en septiembre de 2026 en favor de Marquette NFP Pro. | Cálculo de ventana fértil del Método Marquette (monitor hormonal + reglas) y el formato de gráfico para instructora: módulo "Marquette" de los modos por método. | G1-19 LH, G1-18 pareja | Lunilla bot, 2026-10-22 |
| https://github.com/jadonlippincott/marq-it | jadonlippincott/marq-it | 1.6 | 0 | TypeScript | Apache-2.0 | 2026-06-26 | B | App móvil (iOS + Android) de registro para el Método Marquette donde una pareja comparte una cuenta de hogar y cada cónyuge registra la lectura del día (Low/High/Peak). | Modelo de datos Low/High/Peak del monitor y registro compartido en pareja. | G1-18, G1-19 | Lunilla bot, 2026-10-22 |
| https://github.com/gsuquet/fertility-tracker | gsuquet/fertility-tracker | 0.4 | 0 | TypeScript | MIT | 2026-09-11 | B | Herramienta abierta de gráfico en papel digital para observaciones del Creighton Model (CrMS), con cálculos automáticos. | Codificación de observaciones CrMS (códigos de moco y sangrado) y reglas automáticas: modo Creighton. | G1-21 moco | Lunilla bot, 2026-10-22 |

## G1-04 · Modelos ML y series de tiempo para el ciclo (5)

Modelos entrenados (LSTM, ARIMA, Prophet, boosting) para predecir longitud del ciclo.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| cilab-ufersa/period_cycle_prediction | https://github.com/cilab-ufersa/period_cycle_prediction | MIT | 27 | Time series forecasting (ARIMA y otros) para longitud de ciclo. Paper asociado. | candidato | REPOS-SIMILARES.md |
| lenakmeth/MenstruatioNN | https://github.com/lenakmeth/MenstruatioNN | MIT | 20 | LSTM con Keras para predecir ciclos y longitud de menstruación. | candidato | REPOS-SIMILARES.md |
| sammanamgain/MENSTRUAL-PERIOD-TRACKER | https://github.com/sammanamgain/MENSTRUAL-PERIOD-TRACKER | sin licencia | 1 | Flutter + Flask con modelo ARIMA para predicción. | solo idea (sin licencia) | REPOS-SIMILARES.md |
| 10anshika/RituCare | https://github.com/10anshika/RituCare | sin licencia | 0 | Full-stack con ARIMA, SARIMA, Prophet y ensemble para forecasting de ciclo + predicción de PCOS. | solo idea (sin licencia) | — |
| gurveenkaur6/Menstrual_cycle_prediction_model | https://github.com/gurveenkaur6/Menstrual_cycle_prediction_model | sin licencia | 0 | Red neuronal (TensorFlow/Keras) para predecir longitud de ciclo. | solo idea (sin licencia) | — |

### G1-04 · Agregados 2026-10-22 — Modelos ML y series de tiempo para predicción (3)

Cómo funciona: los modelos aprenden de la secuencia de duraciones de ciclo (y opcionalmente de síntomas o datos de wearables) para predecir el próximo ciclo con su incertidumbre. En Lunilla tienen que correr en el dispositivo (JS/WASM/ONNX) o servir como referencia del algoritmo. Piezas: modelo entrenado o algoritmo, features y métrica de error.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/mhoogen/ML4QS | mhoogen/ML4QS | 223.4 | 137 | Python | sin licencia | 2026-06-17 | B | Código del libro "Machine Learning for the Quantified Self" (Springer 2018) en R y Python. | Recetas de ML para datos de auto-seguimiento (limpieza, features temporales, predicción) aplicables a la predicción de síntomas. | G1-16, G1-09 | Lunilla bot, 2026-10-22 |
| https://github.com/AndyYSWoo/pregnancy-prediction | AndyYSWoo/pregnancy-prediction | 0.1 | 6 | Jupyter Notebook | sin licencia | 2019-02-22 | B | Código del paper "Predicting pregnancy using large-scale data from a women's health tracking mobile application" (datos de app de tracking). Vigencia: último push 2019, se queda porque es el código de un paper con datos reales de una app de ciclo a gran escala. | Features y modelos de predicción de embarazo/fertilidad a partir de registros de app: referencia para el puntaje de fertilidad. | G1-10 fertility score | Lunilla bot, 2026-10-22 |
| https://github.com/YifanWang-China/FemMHC | YifanWang-China/FemMHC | 3.1 | 2 | Python | sin licencia | 2026-08-08 | B | Código de investigación de FemWear, un modelo fundacional para series de wearables aplicado a salud menstrual (especializa el encoder OpenMHC). | Referencia de modelo para tareas menstruales a partir de wearables (fases y anomalías); para evaluar, no para correr en la PWA. | G1-06 | Lunilla bot, 2026-10-22 |

## G1-05 · Datasets y análisis estadístico del ciclo (5)

Datos reales, modelos estadísticos y paquetes de análisis de ciclos auto-registrados.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| iurteaga/menstrual_cycle_analysis | https://github.com/iurteaga/menstrual_cycle_analysis | MIT | 34 | Análisis de datos de ciclo menstrual auto-reportados. | candidato | REPOS-SIMILARES.md |
| chai-toronto/mcphases | https://github.com/chai-toronto/mcphases | sin licencia | 8 | Dataset y scripts de síntomas, hormonas y datos fisiológicos del ciclo (útil para modelar datos). | solo idea (sin licencia) | REPOS-SIMILARES.md |
| epierson9/four-cycles | https://github.com/epierson9/four-cycles | MIT | 5 | Código del paper de ciclos diarios, semanales, estacionales y menstruales en mood y vital signs (datos de Clue). | candidato | — |
| jmjordan/cycles | https://github.com/jmjordan/cycles | sin licencia | 2 | CLI tool con base de datos local de ciclos (SQLite). Buena referencia de modelo de datos. | solo idea (sin licencia) | — |
| MarieGombertLabedens/MenstrualClock | https://github.com/MarieGombertLabedens/MenstrualClock | NOASSERTION (no estándar) | 0 | R package para visualizar fases en reloj. Muy minucioso. | candidato (revisar licencia) | — |

### G1-05 · Agregados 2026-10-22 — Datasets y análisis estadístico (1)

Cómo funciona: se usan datos reales de ciclos para calibrar y validar el modelo de predicción (distribución de duraciones, fase lútea, variabilidad por edad). Piezas: dataset con licencia y notebooks o paquetes de análisis.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/eisenlohrmoullab/menstrualcycleR | eisenlohrmoullab/menstrualcycleR | 5.5 | 6 | R | GPL-3.0 | 2026-10-01 | B | Paquete R que prepara datos longitudinales del ciclo (centrado en menstruación u ovulación, escala de fase) para modelado no lineal. | Método para alinear registros por día de ciclo y por fase (centrado en ovulación): base algorítmica de G1-09. | G1-09 | Lunilla bot, 2026-10-22 |

## G1-06 · Wearables y datos fisiológicos (4)

Temperatura, HR/HRV y unificación de datos de wearables relacionados con fases del ciclo.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| the-momentum/open-wearables | https://github.com/the-momentum/open-wearables | MIT | 2701 | Plataforma self-hosted para unificar datos de wearables (incluye ciclos menstruales). | candidato | — |
| elkimek/get-based | https://github.com/elkimek/get-based | AGPL-3.0 | 148 | Dashboard de biomarcadores + wearables (Oura, etc.) local-first. | solo idea (GPL/AGPL) | — |
| Aminsinichi/wearable-hrv | https://github.com/Aminsinichi/wearable-hrv | MIT | 14 | Paquete Python para validación y análisis de HR y HRV de wearables. | candidato | — |
| zkhechadoorian/menstrual-cycle-tracking | https://github.com/zkhechadoorian/menstrual-cycle-tracking | sin licencia | 0 | Detección de fases (folicular/luteal) a partir de temperatura de wearable usando regla de coverline. | solo idea (sin licencia) | REPOS-SIMILARES.md |

### G1-06 · Agregados 2026-10-22 — Integración con wearables (función 15 y extras: Oura, HealthKit, Health Connect, Garmin, Fitbit, Whoop, HRV, temperatura de piel) (2)

Cómo funciona: una PWA no puede leer HealthKit ni Health Connect directamente. O se usa un wrapper nativo (Capacitor o React Native) que lee el SDK del sistema, o se consume la API web del fabricante con OAuth (Oura, Fitbit, Garmin, Whoop, Withings), o se importa un archivo exportado (export.xml de Apple Health, .fit de Garmin). Después hay que normalizar las series (temperatura de piel nocturna, HRV, FC en reposo) y pasarlas al detector de shift. Piezas: cliente o SDK, parser de exportaciones, normalizador y análisis HRV/temperatura.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/jimmykane/quantified-self | jimmykane/quantified-self | 78.0 | 235 | TypeScript | NOASSERTION (no estándar) | 2026-10-22 | B | Plataforma abierta que importa actividad de Garmin, Suunto, COROS, Wahoo y otros, con dashboards, tendencias de sueño y análisis de entrenamiento. | Importadores de archivos y servicios de wearables deportivos para traer sueño y actividad al cruce con el ciclo. | G2-10 | Lunilla bot, 2026-10-22 |
| https://github.com/home-health-hub/easyathome-bbt-daemon | home-health-hub/easyathome-bbt-daemon | 2.6 | 0 | Python | GPL-3.0 | 2026-08-22 | B | Daemon Linux que lee el termómetro BBT Easy@Home EBT-300 por Bluetooth LE y guarda las lecturas en local. | Protocolo BLE documentado del EBT-300: base para leer el termómetro con Web Bluetooth desde la PWA. | G1-03 | Lunilla bot, 2026-10-22 |

## G1-07 · Tracking de flujo menstrual (función 3) (1)

Cómo funciona: cada día de sangrado guarda una intensidad (manchado, leve, medio, abundante) y opcionalmente el producto usado y su cantidad, o un puntaje PBAC (Pictorial Blood Loss Assessment Chart) para estimar la pérdida. De ahí salen la duración del periodo, los días de manchado y las alertas de sangrado abundante. Piezas: modelo de datos de flujo, escala PBAC y vista de días de sangrado.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/GeiserX/SuperCycleTracker | GeiserX/SuperCycleTracker | 0.5 | 1 | Python | AGPL-3.0 | 2026-10-20 | B | Bot de Telegram para un hogar que pregunta los días probables de período, registra flujo, dolor y síntomas con botones o texto libre, aprende el ciclo de cada persona y guarda todo en un repo git privado; habla español. | Modelo de registro diario de flujo + dolor con entrada rápida por botones y el flujo "preguntar sólo en días probables": se copia al formulario diario de Lunilla (pantalla Hoy) y a la lógica de cuándo mostrar el prompt de registro. | G1-01, G1-17 recordatorios, G1-21 (historial en git) | Lunilla bot, 2026-10-22 |

## G1-08 · Logging de síntomas físicos y emocionales (función 4) (6)

Cómo funciona: un catálogo configurable de categorías (dolor, piel, digestión, ánimo, energía, sueño, libido…; las apps grandes tienen 30–200+) con valores por día (sí/no, escala o etiqueta), guardado como eventos fechados. La UI necesita entrada rápida (chips o iconos), notas y escalas validadas cuando hagan falta (por ejemplo DRSP para SPM/TDPM). Piezas: modelo de eventos, catálogo de síntomas, UI de registro y escalas.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/open-nomie/nomie5 | open-nomie/nomie5 | 10.9 | 559 | Svelte | MIT | 2021-12-02 | F | Life tracker / diario de datos Svelte con trackers configurables (contadores, escalas, notas) y almacenamiento local. Vigencia: último push 2021, se queda porque su modelo de "trackers" configurables es el más completo abierto. | Modelo de trackers configurables (tipo, unidad, escala, emoji) para que la usuaria cree síntomas propios. | G2-17 etiquetas, G1-09 correlaciones | Lunilla bot, 2026-10-22 |
| https://github.com/mrzmyr/pixy-mood-tracker-app | mrzmyr/pixy-mood-tracker-app | 87.8 | 153 | TypeScript | MIT | 2026-10-21 | F | Diario de ánimo minimalista "un píxel por día" (React Native/TS), con desarrollo retomado en 2026 y versiones en las tiendas. | Registro diario de ánimo con etiquetas y vista anual en píxeles: componente de check-in emocional y heatmap anual de Lunilla. | G3-02 tendencias, G2-17 etiquetas | Lunilla bot, 2026-10-22 |
| https://github.com/lcdcode/mood-cairns | lcdcode/mood-cairns | 1.9 | 27 | Kotlin | GPL-3.0 | 2026-10-20 | B | Tracker de ánimo Android totalmente offline con escalas y etiquetas propias, ventanas horarias y notificación que pide el registro; gráficos y backup. | Escalas personalizadas + ventanas horarias de recordatorio para el check-in de síntomas. | G1-17, G2-17 | Lunilla bot, 2026-10-22 |
| https://github.com/sebferrer/life-notes | sebferrer/life-notes | 6.1 | 17 | TypeScript | MIT | 2026-02-26 | B | App móvil para registrar síntomas crónicos y hábitos diarios y ver cómo evolucionan para detectar patrones. | Modelo de síntoma con intensidad por día + hábitos asociados: esquema de datos de síntomas de Lunilla. | G1-09, G3-02 | Lunilla bot, 2026-10-22 |
| https://github.com/rudi-q/pinkrain_health_journal | rudi-q/pinkrain_health_journal | 47.9 | 15 | Dart | AGPL-3.0 | 2026-09-07 | B | Diario de salud Flutter privacy-first: medicación, síntomas, ánimo y funciones de IA experimentales, datos en el dispositivo. | Estructura de diario de síntomas + medicación local-first, como referencia para el registro combinado síntoma/medicamento. | G1-27, G1-22 | Lunilla bot, 2026-10-22 |
| https://github.com/aradar46/Vibecheck-Private-Mood-Tracker | aradar46/Vibecheck-Private-Mood-Tracker | 9.2 | 11 | TypeScript | NOASSERTION (no estándar) | 2026-10-19 | F | Tracker de ánimo y síntomas local-first para Android, sin cuenta ni nube, con quick log, línea de tiempo, insights y calendario. | Pantalla de "quick log" de baja fricción y timeline de síntomas para la pantalla Hoy. | G1-26 calendario, G1-09 | Lunilla bot, 2026-10-22 |

## G1-09 · Análisis de patrones y correlaciones síntoma ↔ fase (función 5) (7)

Cómo funciona: cada registro se alinea con el día del ciclo (o con la fase: folicular, ovulatoria, lútea, menstrual), se agrega entre ciclos y se buscan asociaciones: frecuencia por fase, correlación con desfase, estadística circular o detección de puntos de cambio. Es estadística determinista que corre en el dispositivo. Piezas: alineación por día de ciclo, librerías estadísticas, estadística circular o cosinor, y visualización.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/woop/awesome-quantified-self | woop/awesome-quantified-self | 0.3 | 2797 | — | NOASSERTION (no estándar) | 2026-07-06 | B | Lista curada de sitios, recursos, dispositivos, wearables, apps y plataformas de auto-seguimiento. | Mapa de herramientas y APIs de quantified self para buscar fuentes de datos y conectores. | G1-06 | Lunilla bot, 2026-10-22 |
| https://github.com/deepcharles/ruptures | deepcharles/ruptures | 11.2 | 2101 | Python | BSD-2-Clause | 2026-10-06 | B | Librería Python de detección offline de puntos de cambio en señales no estacionarias, con varios algoritmos exactos y aproximados. | Detección de cambios en la duración de los ciclos (por ejemplo inicio de perimenopausia o efecto de un anticonceptivo) para alertas de tendencia. | G3-02 tendencias, G1-12 | Lunilla bot, 2026-10-22 |
| https://github.com/zhaokg/Rbeast | zhaokg/Rbeast | 27.8 | 374 | C | sin licencia | 2026-04-30 | B | BEAST: algoritmo bayesiano rápido que descompone series de tiempo en cambios abruptos, tendencia y estacionalidad (R, Python, Matlab). | Separar la estacionalidad del ciclo de la tendencia de largo plazo en síntomas o en temperatura. | G3-02, G1-03 | Lunilla bot, 2026-10-22 |
| https://github.com/ErikBjare/quantifiedme | ErikBjare/quantifiedme | 37.4 | 98 | Python | sin licencia | 2026-10-19 | B | Carga y gráficos de varias fuentes de datos quantified self en notebooks, con datos falsos de ejemplo en CI. | Patrón de unificar fuentes heterogéneas en una tabla diaria antes de correlacionar. | G1-06 | Lunilla bot, 2026-10-22 |
| https://github.com/circstat/pycircstat2 | circstat/pycircstat2 | 41.5 | 23 | Python | MIT | 2026-08-31 | B | Librería Python de estadística circular, reescritura de pycircstat, con una clase Circular que arma el pipeline de análisis. | Tratar el día del ciclo como ángulo (0–360°) para medir en qué fase se concentran los síntomas (media circular, test de Rayleigh): se porta la fórmula a TS. | G1-16 | Lunilla bot, 2026-10-22 |
| https://github.com/GenerateNU/remetra | GenerateNU/remetra | 16.8 | 7 | Python | MIT | 2026-10-22 | B | Plataforma para pacientes autoinmunes que registra síntomas, comidas y actividades y usa análisis de datos/ML para encontrar patrones y prevenir brotes. | Pipeline de correlación síntoma ↔ comida/actividad, para el motor de "patrones" (se porta la lógica al cliente). | G1-08, G1-16 | Lunilla bot, 2026-10-22 |
| https://github.com/rigzoltan83/SymptomTracker | rigzoltan83/SymptomTracker | 0.4 | 0 | Python | GPL-3.0 | 2026-09-04 | B | Web self-hosted para registrar comida, medicación y síntomas y explorar relaciones entre eventos, con herramientas de análisis bilingües. | Análisis de relaciones evento → síntoma con ventana temporal, para correlaciones ciclo/síntoma en Lunilla. | G1-08, G1-27 | Lunilla bot, 2026-10-22 |

## G1-11 · Modo embarazo: semanas, fecha probable de parto, tamaño del bebé, bump tracker, kick counter, contraction timer y nombres (función 9 y extras) (11)

Cómo funciona: la fecha probable de parto sale de la regla de Naegele (FUM + 280 días) o de una ecografía. La edad gestacional se cuenta en semanas y días. El tamaño del bebé se toma de tablas de biometría fetal (INTERGROWTH-21st, Hadlock). El kick counter cuenta movimientos en una ventana de tiempo y el contraction timer mide duración e intervalo (regla 5-1-1). Los nombres salen de datasets públicos. Piezas: calculadora de fechas, tablas de crecimiento, contadores y cronómetros, y dataset de nombres.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/AOSSIE-Org/BabyNest | AOSSIE-Org/BabyNest | 11.7 | 57 | JavaScript | GPL-3.0 | 2026-10-22 | B | App React Native offline y privacy-focused para seguimiento de embarazo, gestión de historia clínica y asistencia con IA, con aviso médico. | Módulo de embarazo offline completo (semanas, citas, registros de salud) como plano del modo embarazo de Lunilla; la parte de IA se reemplaza por textos curados. | G1-27, G1-17 recordatorios | Lunilla bot, 2026-10-22 |
| https://github.com/rmw/pg | rmw/pg | 1.0 | 5 | TypeScript | 0BSD | 2026-03-24 | B | Tracker configurable de semanas de embarazo con cálculo por concepción natural o FIV. | Cálculo de edad gestacional por tipo de concepción (FUM, concepción, transferencia de FIV): función de fechas del modo embarazo. | G1-10 TTC | Lunilla bot, 2026-10-22 |
| https://github.com/highergroundstudio/home-assistant-pregnancy-tracker | highergroundstudio/home-assistant-pregnancy-tracker | 2.0 | 3 | Python | MIT | 2026-09-08 | B | Integración privacy-first de Home Assistant (beta) para seguir el embarazo semana a semana con sensores. | Cálculo de semana/día/trimestre y cuenta regresiva expuesto como "sensores": modelo para los widgets de estado del embarazo. | G2-04 | Lunilla bot, 2026-10-22 |
| https://github.com/franky47/how-far-along | franky47/how-far-along | 0.6 | 2 | TypeScript | MIT | 2023-02-22 | F | Tracker de progreso del embarazo en Next.js + ChakraUI que guarda la fecha probable de parto en el hash de la URL, sin que el servidor la vea. Vigencia: último push 2023, se queda por el truco de privacidad de compartir por hash. | Compartir estado (fecha probable de parto) por el fragmento # de la URL sin servidor: técnica para links de compartir sin backend. | G2-15 compartir | Lunilla bot, 2026-10-22 |
| https://github.com/JKook-Plus/gestational-age-calculator | JKook-Plus/gestational-age-calculator | 1.3 | 2 | JavaScript | GPL-3.0 | 2026-10-22 | B | Sitio que calcula edad gestacional, fecha de parto o una fecha a partir de las otras dos, con parseo de muchos formatos de fecha y atajos. | Resolución bidireccional edad gestacional ↔ fecha de parto ↔ fecha: núcleo de cálculo del modo embarazo. | — | Lunilla bot, 2026-10-22 |
| https://github.com/BulyK47/dadglass | BulyK47/dadglass | 1.8 | 0 | TypeScript | MPL-2.0 | 2026-09-11 | F | Guía semana a semana del embarazo para papás, bilingüe y offline-first: tamaño del bebé como objeto cotidiano, qué siente la pareja, una acción útil y checklists. | Vista de pareja del modo embarazo (qué siente ella esta semana + checklist) para el modo pareja. | G1-18, G1-20 checklists | Lunilla bot, 2026-10-22 |
| https://github.com/fnabir/babyduedate | fnabir/babyduedate | 0.3 | 0 | TypeScript | MIT | 2026-10-13 | F | Calculadora de fecha probable de parto y visualizador de crecimiento fetal en Next.js, React, TS, Redux Toolkit, Tailwind v4 y Framer Motion, accesible. | Visualización del crecimiento fetal por semana y bump tracker animado en React/TS. | G2-11 | Lunilla bot, 2026-10-22 |
| https://github.com/correia95/due-date-calculator | correia95/due-date-calculator | 0.0 | 0 | TypeScript | sin licencia | 2026-09-09 | B | Calculadora de fecha probable de parto en el navegador desde la FUM (regla de Naegele con duración de ciclo ajustable), la concepción o una transferencia de FIV (embrión de día 3/5/6). | Regla de Naegele ajustada a la duración real del ciclo de la usuaria (dato que Lunilla ya tiene). | G1-10 | Lunilla bot, 2026-10-22 |
| https://github.com/babythings/contraction-timer | babythings/contraction-timer | 0.2 | 0 | TypeScript | sin licencia | 2026-08-28 | F | Timer de contracciones privado y offline-first para usar con una mano: un solo control grande, edición de tiempos y descarte de contracciones. | Componente de timer de contracciones de una mano con edición posterior para el modo embarazo. | — | Lunilla bot, 2026-10-22 |
| https://github.com/JovanVeljanoski/bloom-contraction-tracker | JovanVeljanoski/bloom-contraction-tracker | 0.1 | 0 | TypeScript | MIT | 2026-06-27 | F | Timer de contracciones 100% frontend: duración en tiempo real, historial de intervalos, tendencias de progresión y guía de parto en el dispositivo. | Cálculo de intervalos y la regla de "es hora de ir" (tipo 5-1-1) con todo el estado en el navegador. | — | Lunilla bot, 2026-10-22 |
| https://github.com/jayozer/babybeat | jayozer/babybeat | 120.4 | 0 | Swift | sin licencia | 2026-08-01 | F | Littletaps: app SwiftUI para sesiones de movimientos fetales (antes también web con Capacitor). | Flujo de sesión de conteo de patadas (inicio, toque por movimiento, tiempo hasta 10) para el kick counter. | — | Lunilla bot, 2026-10-22 |

## G1-14 · Symptom checker y autoevaluación de patrones PCOS/endometriosis (función 12 y extra) (2)

Cómo funciona: cuestionarios estructurados (criterios de Rotterdam para SOP o escalas de síntomas de endometriosis) con lógica de saltos y un puntaje determinista que no diagnostica: sugiere consultar. Se pueden enriquecer con los datos registrados (irregularidad, dolor). Piezas: motor de formularios o cuestionarios (JSON, FHIR Questionnaire), reglas de puntaje y, como referencia, modelos de investigación.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/bloo-berries/Endometriosis-Adenomyosis-Resources | bloo-berries/Endometriosis-Adenomyosis-Resources | 10.2 | 19 | Python | CC0-1.0 | 2026-09-03 | B | Fuente de contenido (content/ → dist/) del sitio "1 in 7" de Bloomed Health sobre endometriosis y adenomiosis y sus comorbilidades, licencia CC0. | Contenido CC0 sobre endo/adeno para alimentar las fichas del symptom checker y el CMS educativo (se importa como markdown en build). | G2-01 CMS, G1-24 navegador de cuidados | Lunilla bot, 2026-10-22 |
| https://github.com/smsolutionsva-byte/OvaCare | smsolutionsva-byte/OvaCare | 2.0 | 14 | TypeScript | sin licencia | 2026-10-04 | F | App React/Vite para explorar síntomas de SOP, registrar estudios y preparar preguntas para profesionales; el puntaje sale de reglas en src/lib/riskCalculator.ts y aclara que no es diagnóstico. | riskCalculator.ts como referencia de autoevaluación de SOP basada en reglas, con texto de "no es diagnóstico" y salida "preguntas para tu médica". | G1-24, G1-15 PDF | Lunilla bot, 2026-10-22 |

## G1-16 · Predicción de síntomas e intensidad de dolor (función 14 y extras de dolor) (1)

Cómo funciona: con los síntomas alineados por día de ciclo se estima la probabilidad de cada síntoma en los próximos días (frecuencia histórica por día de ciclo, regresión o clasificador liviano). El dolor se registra con escalas estándar (EVA/NRS, mapa corporal) y se predice igual. Piezas: escala de dolor, mapa corporal, modelo de probabilidad por día y alertas.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/GreenNovaEmma/migraine-risk-card | GreenNovaEmma/migraine-risk-card | 0.1 | 90 | JavaScript | MIT | 2026-05-25 | F | Tarjeta de Home Assistant que calcula un puntaje compuesto de riesgo de migraña a partir de 9 factores de clima y calidad del aire. | Patrón de puntaje compuesto de riesgo (factores ponderados → gauge) para el pronóstico de dolor/migraña menstrual, sumando la fase del ciclo como factor. | G1-09 | Lunilla bot, 2026-10-22 |

## G1-18 · Partner sharing con permiso, E2E (función 20 y extra partner mode / inner circle) (1)

Cómo funciona: la usuaria elige qué compartir y el dato sale cifrado de punta a punta: se intercambian claves (QR o enlace), cada envío se cifra con la clave pública o una clave compartida, y el permiso se puede revocar rotando la clave. Piezas: librería de cripto (libsodium, age, MLS), intercambio de claves, transporte (relay o P2P) y permisos.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/848deepak/Soma | 848deepak/Soma | 14.4 | 3 | TypeScript | sin licencia | 2026-04-08 | B | App Expo/React Native + Supabase con sincronización con pareja, registros diarios, sesión anónima y sitio Next.js. | Flujo de vinculación con pareja (invitación, permisos de lectura) como referencia de UX del modo pareja; en Lunilla el transporte se reemplaza por E2E. | G1-22 modo anónimo | Lunilla bot, 2026-10-22 |

## G1-19 · Tests OPK/LH: registro, lector de tiras por foto y curva de LH (función 22 y extras) (1)

Cómo funciona: se registra cada test (negativo, positivo o pico). El lector por foto detecta la tira (OpenCV o un modelo de visión), recorta la ventana, mide la intensidad de la línea de test (T) frente a la de control (C) y calcula el ratio T/C. La serie de ratios forma la curva de LH, cuyo pico anticipa la ovulación en 24–36 h. Piezas: captura de cámara, detección de la tira, perfil de intensidad, ratio y gráfico.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/lrq3000/fertility-test-analyzer | lrq3000/fertility-test-analyzer | 5.2 | 5 | Java | Apache-2.0 | 2023-11-18 | B | App Android que interpreta tiras de ovulación y embarazo cuantificando las líneas de la foto. Vigencia: último push 2023, se queda porque es de las pocas implementaciones abiertas de cuantificación de tiras. | Procesamiento de imagen de la tira (líneas T/C) para el lector de LH por foto. | G1-10 | Lunilla bot, 2026-10-22 |

## G1-20 · Modos por objetivo, personalización y guided journey / checklists (función 23 y extra) (2)

Cómo funciona: el objetivo (seguir el ciclo, buscar embarazo, evitar embarazo, embarazo, perimenopausia) define qué pantallas, campos y predicciones se muestran. Se resuelve con configuración y feature flags locales más un onboarding. Las checklists semanales son listas de tareas atadas a la semana o fase. Piezas: feature flags offline, onboarding o tours y listas de tareas.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/Twipped/Spiral | Twipped/Spiral | 10.3 | 11 | JavaScript | NOASSERTION (no estándar) | 2022-03-04 | F | App React Native de bio-ciclos "para todos los humanos": registra síntomas físicos y estado mental ligados a hormonas, con lenguaje neutro que evita disparadores de disforia. Vigencia: último push 2022, se queda porque es el único diseño abierto de tracker inclusivo para personas trans/no binarias. | Copy y estructura de pantallas con lenguaje neutro de género: base del modo inclusivo de Lunilla (onboarding y etiquetas sin "mujer"). | G1-08 | Lunilla bot, 2026-10-22 |
| https://github.com/al-mabsut/muslimah | al-mabsut/muslimah | 6.8 | 2 | JavaScript | sin licencia | 2025-12-28 | B | Librería NPM de recursos de jurisprudencia islámica sobre temas de mujeres (masaail de hayd/menstruación), que alimenta myhayd.app. Vigencia: último push 2025-12, se queda porque es la única fuente abierta y auditable de reglas de hayd. | Reglas de hayd como modo religioso opcional (cálculo de días de pureza/menstruación según escuela) dentro del sistema de modos de Lunilla. | G1-01, G2-01 | Lunilla bot, 2026-10-22 |

## G1-21 · Backup y sync multi-dispositivo E2E, CRDT, local-first (función 24 y extra backup Drive/iCloud) (2)

Cómo funciona: los datos viven en el dispositivo. Para sincronizar se cifran antes de salir y se mezclan sin conflictos con CRDT (Yjs, Automerge) o con un log de cambios. El transporte puede ser un servidor de sync, WebRTC P2P o un almacenamiento del usuario (Google Drive appDataFolder, WebDAV, remoteStorage). Piezas: CRDT o motor de sync, cifrado del lado del cliente y adaptador de almacenamiento.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/FriesI23/mhabit | FriesI23/mhabit | 147.6 | 1670 | Dart | Apache-2.0 | 2026-10-22 | B | Habit tracker Flutter con puntuación, gráficos de progreso, almacenamiento local-first y sincronización WebDAV entre dispositivos. | Sincronización WebDAV opcional de un store local-first: referencia del backup/sync autoalojado de Lunilla (subir el blob cifrado a WebDAV). | G2-03 | Lunilla bot, 2026-10-22 |
| https://github.com/SoftwareEngineer-Hadi/CycleTrack | SoftwareEngineer-Hadi/CycleTrack | 40.7 | 0 | Dart | sin licencia | 2026-08-18 | B | Tracker Flutter de periodo y ovulación offline con almacenamiento local cifrado, anónimo por defecto y backup cifrado opcional en la nube vía Supabase con Google sign-in. | Backup cifrado opcional a la nube con login de Google: referencia del flujo "anónimo primero, backup opcional después". | G1-22 | Lunilla bot, 2026-10-22 |

## G1-22 · Almacenamiento on-device y privacy-first, cifrado y modo anónimo (función 25 y extra) (1)

Cómo funciona: los datos se guardan en IndexedDB u OPFS (SQLite WASM) cifrados con AES-GCM y una clave derivada del PIN (PBKDF2 o Argon2). Opcionalmente se desbloquean con passkey (WebAuthn PRF). No hay cuenta y no salen datos (modo anónimo). Piezas: wrapper de IndexedDB, cifrado, KDF y base de datos local.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/vincenzo-afk/Synapse | vincenzo-afk/Synapse | 0.9 | 39 | TypeScript | MIT | 2026-10-18 | F | "Sistema operativo personal" PWA local-first y offline que une hábitos, tareas, finanzas y diario. | Arquitectura PWA instalable y totalmente offline con múltiples módulos sobre almacenamiento local, muy cercana al stack de Lunilla. | G1-21 | Lunilla bot, 2026-10-22 |

## G1-23 · Modo postparto y bebé: sangrado, lactancia, sueño y alimentación (extras) (1)

Cómo funciona: se registran eventos con hora (toma de pecho por lado y duración, biberón con ml, extracción, pañales, sueño), el sangrado postparto (loquios) y check-ins de ánimo (escala EPDS), con resúmenes diarios y semanales. Piezas: modelo de eventos con temporizador, gráficos de patrones y escalas.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/enfold-baby/enfold | enfold-baby/enfold | 21.7 | 2 | Dart | AGPL-3.0 | 2026-10-06 | B | App libre y sin anuncios de cuidado del bebé del embarazo a los primeros años: registra tomas, pañales y sueño en dos toques, comparte con la pareja en tiempo real y tiene textos "¿esto es normal?" revisados por clínicos. | Modelo de registro de alimentación, sueño y pañales en dos toques con sync de pareja: base del módulo posparto/bebé. | G1-18, G2-01 | Lunilla bot, 2026-10-22 |

## G1-24 · Care navigator / buscador de clínicas y recursos (extra) (1)

Cómo funciona: un directorio de servicios (clínicas, telesalud, líneas de ayuda) con coordenadas, mostrado en un mapa y filtrado por tipo y distancia. Puede funcionar offline con datos empaquetados o usando OpenStreetMap (amenity=clinic, healthcare=*). Piezas: dataset o directorio, mapa (Leaflet o MapLibre), geocodificación y filtros.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/monapdx/awesome-reproductive-justice | monapdx/awesome-reproductive-justice | 5.8 | 2 | CSS | NOASSERTION (no estándar) | 2026-07-21 | B | Lista curada de recursos de salud reproductiva y aborto: clínicas, directorios verificados, líneas de ayuda y herramientas. | Directorio de recursos externos para el navegador de cuidados (pantalla "¿A dónde voy?"), como JSON estático por país. | G2-01 | Lunilla bot, 2026-10-22 |

## G1-25 · Exportar a CSV/spreadsheet e importar de otras apps (extra) (2)

Cómo funciona: los registros se serializan a CSV o XLSX en el navegador y se descargan. Para migrar, se parsean las exportaciones de otras apps (Clue, Flo, drip) y se mapean al modelo de Lunilla. Piezas: librería CSV/XLSX, conversores de formatos de otras apps y esquema común.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/isosphere/Clue-Period-Tracker-Backup-Converter | isosphere/Clue-Period-Tracker-Backup-Converter | 0.0 | 25 | Python | sin licencia | 2022-07-17 | B | Script Python que lee el backup .cluedata (JSON) de Clue y lo pasa a Excel. Vigencia: último push 2022, se queda porque es corto y explica la estructura del backup de Clue. | Estructura del JSON de backup de Clue para el importador. | — | Lunilla bot, 2026-10-22 |
| https://github.com/fabfabretti/clue-to-drip | fabfabretti/clue-to-drip | 0.1 | 6 | JavaScript | MIT | 2024-03-04 | F | Página web que convierte la exportación de Clue en un archivo importable en drip (sangrado y la mayoría de los tags). Vigencia: último push 2024, se queda porque documenta el formato de exportación de Clue. | Mapeo de campos de exportación de Clue a un modelo abierto: base del importador "desde Clue" de Lunilla. | G1-08 | Lunilla bot, 2026-10-22 |

## G1-27 · Registro de condiciones de salud y medicación (extra) (2)

Cómo funciona: la usuaria marca sus condiciones (migraña, adenomiosis, vulvodinia…) y su medicación. Codificarlas con terminologías estándar (ICD-10/11, SNOMED CT, RxNorm) permite exportarlas o compartirlas (FHIR). Piezas: catálogo o terminología, buscador de códigos y modelo de datos.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/hiraethclub/FlareEnough | hiraethclub/FlareEnough | 1.3 | 4 | Kotlin | GPL-3.0 | 2026-10-12 | B | App Android libre para enfermedades crónicas: medicación, registro de síntomas y meditación simple, sin anuncios ni suscripciones. | Registro de medicación y brotes para el módulo de condiciones de salud (endo, SOP, migraña). | G1-08 | Lunilla bot, 2026-10-22 |
| https://github.com/sharancreates/selene | sharancreates/selene | 2.9 | 0 | JavaScript | MIT | 2026-10-19 | B | Plataforma privacy-first de salud menstrual y hormonal con arquitectura zero-knowledge y una sección de "clinical intelligence". | Arquitectura zero-knowledge (cifrado cliente) y las reglas clínicas que documenta. | G1-22, G1-14 | Lunilla bot, 2026-10-22 |

# Grupo 2 — Funciones secundarias

Lo que rodea al núcleo: educación, comunidad, gamificación, recordatorios, ánimo, datos de salud y backend.

## G2-01 · Educación, contenido y CMS (12)

Plataformas educativas y CMS para artículos, guías y tips sobre el ciclo.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| strapi/strapi | https://github.com/strapi/strapi | NOASSERTION (no estándar) | 73361 | Headless CMS muy popular (útil para artículos y tips). | candidato (revisar licencia) | — |
| payloadcms/payload | https://github.com/payloadcms/payload | MIT | 45423 | Headless CMS en Node (moderno y potente). | candidato | — |
| directus/directus | https://github.com/directus/directus | NOASSERTION (no estándar) | 38619 | Headless CMS + database (muy flexible). | candidato (revisar licencia) | — |
| django-cms/django-cms | https://github.com/django-cms/django-cms | NOASSERTION (no estándar) | 10676 | CMS enterprise en Django (muy flexible para contenido educativo). | candidato (revisar licencia) | — |
| hunvreus/pagescms | https://github.com/hunvreus/pagescms | MIT | 4121 | CMS simple basado en GitHub (Pages CMS). | candidato | — |
| craftcms/cms | https://github.com/craftcms/cms | NOASSERTION (no estándar) | 3622 | Craft CMS (PHP). Excelente para contenido estructurado. | candidato (revisar licencia) | — |
| PlayEdu/PlayEdu | https://github.com/PlayEdu/PlayEdu | Apache-2.0 | 3309 | Sistema de formación/educación (SpringBoot + MySQL). Sirve para módulos educativos. | candidato | — |
| SunShiFu/health | https://github.com/SunShiFu/health | sin licencia | 92 | Sistema de gestión de salud (SpringBoot + MySQL + React). | solo idea (sin licencia) | — |
| SB2318/UltimateHealth | https://github.com/SB2318/UltimateHealth | MIT | 67 | Plataforma open-source de artículos de salud + podcasts + AI chat. Backend Node.js + MongoDB. | candidato | — |
| eduhub-org/eduhub | https://github.com/eduhub-org/eduhub | AGPL-3.0 | 14 | Plataforma educativa completa (Hasura + PostgreSQL + Keycloak). | solo idea (GPL/AGPL) | — |
| devvspaces/EduHub | https://github.com/devvspaces/EduHub | Apache-2.0 | 8 | Plataforma educativa con cursos, quizzes y discusiones (Node + MongoDB). | candidato | — |
| docxology/course | https://github.com/docxology/course | sin licencia | 0 | Sistema de repositorio curricular (FastAPI + PostgreSQL + MongoDB). Ideal para artículos educativos sobre ciclo, fases, síntomas. | solo idea (sin licencia) | — |

## G2-02 · Comunidad, foros y chat (12)

Foros, Q&A, chat y redes federadas para una comunidad de usuarias.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| mastodon/mastodon | https://github.com/mastodon/mastodon | AGPL-3.0 | 50430 | Red social federada (útil como referencia de comunidad). | solo idea (GPL/AGPL) | — |
| discourse/discourse | https://github.com/discourse/discourse | GPL-2.0 | 47991 | El foro open-source más serio (Ruby on Rails + PostgreSQL + Redis). Perfecto para comunidad de usuarias. | solo idea (GPL/AGPL) | — |
| RocketChat/Rocket.Chat | https://github.com/RocketChat/Rocket.Chat | NOASSERTION (no estándar) | 46294 | Plataforma de chat open source. El adjunto lo tenía con otro dueño: rocket-chat/rocket.chat (404); se usa el nombre real verificado. | candidato (revisar licencia) | — |
| mattermost/mattermost | https://github.com/mattermost/mattermost | NOASSERTION (no estándar) | 39407 | Slack open source. | candidato (revisar licencia) | — |
| LemmyNet/lemmy | https://github.com/LemmyNet/lemmy | AGPL-3.0 | 14641 | Link aggregator / Reddit-like. El adjunto lo tenía con otro dueño: lemmy-org/lemmy (404); se usa el nombre real verificado. | solo idea (GPL/AGPL) | — |
| matrix-org/synapse | https://github.com/matrix-org/synapse | Apache-2.0 | 12090 | Matrix homeserver (para comunidad/chat). Archivado. | candidato | — |
| misskey-dev/misskey | https://github.com/misskey-dev/misskey | AGPL-3.0 | 11353 | Otra red social federada. | solo idea (GPL/AGPL) | — |
| codedrinker/community | https://github.com/codedrinker/community | MIT | 2772 | Foro/Q&A en Spring Boot + MySQL. | candidato | — |
| debiki/talkyard | https://github.com/debiki/talkyard | AGPL-3.0 | 1812 | Plataforma de discusión (Scala). Combina foro + Q&A + chat. | solo idea (GPL/AGPL) | — |
| satellity/satellity | https://github.com/satellity/satellity | MIT | 626 | Foro moderno en Golang + React + PostgreSQL. | candidato | — |
| leancodebox/GooseForum | https://github.com/leancodebox/GooseForum | MIT | 147 | Foro ligero (Go + Gin + PostgreSQL). | candidato | — |
| code-xon/discuss-lite | https://github.com/code-xon/discuss-lite | MIT | 1 | Foro self-hosted ligero (FastAPI + Next.js + PostgreSQL). | candidato | — |

## G2-03 · Gamificación (10)

Puntos, badges, rachas (streaks), logros y leaderboards.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| dohsimpson/HabitTrove | https://github.com/dohsimpson/HabitTrove | AGPL-3.0 | 692 | Gamified habit tracker con monedas y recompensas. | solo idea (GPL/AGPL) | — |
| ActiDoo/gamification-engine | https://github.com/ActiDoo/gamification-engine | MIT | 476 | Motor de gamificación muy completo (Python). Logros, leaderboards, reglas personalizadas. | candidato | — |
| ngageoint/gamification-server | https://github.com/ngageoint/gamification-server | MIT | 248 | Servidor de badges y puntos (Django). | candidato | — |
| trophyso/ui | https://github.com/trophyso/ui | MIT | 150 | Gamification UI Kit (streaks, badges, leaderboards) sobre shadcn. | candidato | — |
| isuru89/oasis | https://github.com/isuru89/oasis | Apache-2.0 | 79 | Framework de gamificación basado en Redis (points, badges, milestones, leaderboards). | candidato | — |
| bizilabs/streeek | https://github.com/bizilabs/streeek | GPL-3.0 | 58 | Sistema de streaks + leaderboards + achievements (útil como referencia). | solo idea (GPL/AGPL) | — |
| fvergaracl/GAME | https://github.com/fvergaracl/GAME | Apache-2.0 | 9 | Goals And Motivation Engine. Sistema de scoring adaptable. | candidato | — |
| AnmolCanCodes/groundtruth | https://github.com/AnmolCanCodes/groundtruth | NOASSERTION (no estándar) | 1 | Quest platform con XP, streaks y leaderboards. | candidato (revisar licencia) | — |
| franverona/questlog | https://github.com/franverona/questlog | sin licencia | 0 | API de gamificación (Hono + PostgreSQL + Drizzle). Achievements, streaks, leaderboards. Archivado. | solo idea (sin licencia) | — |
| JKoontzDev/LevelUp | https://github.com/JKoontzDev/LevelUp | MIT | 0 | Gamified motivation tracker (RPG style). | candidato | — |

### G2-03 · Agregados 2026-10-22 — Gamificación, quizzes, recompensas, rate my day y daily quiz (1)

Cómo funciona: los eventos de registro suman puntos, rachas y logros con reglas locales. Los quizzes son bancos de preguntas con puntaje. Rate my day es una escala diaria. Las animaciones de premio (confetti) refuerzan el hábito. Piezas: motor de logros o rachas, motor de quiz y efectos visuales.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/iNikAnn/DoHabit | iNikAnn/DoHabit | 48.0 | 63 | TypeScript | AGPL-3.0 | 2026-09-30 | F | Habit tracker web local-first, sin registro ni nube. | Rachas y check diario de hábitos para la gamificación (racha de registro diario). | G1-22 | Lunilla bot, 2026-10-22 |

## G2-04 · Recordatorios y notificaciones (17)

Scheduling, recordatorios recurrentes y notificaciones locales o push.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| expo/expo | https://github.com/expo/expo | MIT | 53004 | Sistema de notificaciones y background tasks de Expo (si usas React Native). | candidato | — |
| binwiederhier/ntfy | https://github.com/binwiederhier/ntfy | Apache-2.0 | 34994 | Push notifications self-hosted simples y potentes. El adjunto lo tenía con otro dueño: ntfy/ntfy (404); se usa el nombre real verificado. | candidato | — |
| caronc/apprise | https://github.com/caronc/apprise | BSD-2-Clause | 17633 | Librería multi-plataforma de notificaciones (muy útil para reminders). El adjunto lo tenía con otro dueño: apprise/apprise (404); se usa el nombre real verificado. | candidato | — |
| gotify/server | https://github.com/gotify/server | NOASSERTION (no estándar) | 16107 | Self-hosted push notification server. | candidato (revisar licencia) | — |
| invertase/react-native-firebase | https://github.com/invertase/react-native-firebase | NOASSERTION (no estándar) | 12321 | Firebase + notificaciones push (muy usado en apps de salud). | candidato (revisar licencia) | — |
| node-cron/node-cron | https://github.com/node-cron/node-cron | ISC | 3284 | Programar recordatorios de período, pastillas, etc (y repos relacionados). | candidato | — |
| target/goalert | https://github.com/target/goalert | Apache-2.0 | 2853 | On-call scheduling + escalaciones + notificaciones (SMS, voz, etc.). Muy robusto. | candidato | — |
| fmeringdal/nettu-scheduler | https://github.com/fmeringdal/nettu-scheduler | MIT | 562 | Self-hosted calendar + scheduler server (Rust + PostgreSQL). | candidato | — |
| Casvt/MIND | https://github.com/Casvt/MIND | GPL-3.0 | 297 | Self-hosted reminders con push a 80+ plataformas (Apprise). | solo idea (GPL/AGPL) | — |
| zrougamed/dynamic-notification-system | https://github.com/zrougamed/dynamic-notification-system | MIT | 107 | Scheduler dinámico multi-canal (Slack, email, SMS, webhook). | candidato | — |
| wkjscn/TaskReminder | https://github.com/wkjscn/TaskReminder | sin licencia | 9 | Sistema de recordatorios con Telegram, email, Feishu, Bark. | solo idea (sin licencia) | — |
| codehearts/remembear | https://github.com/codehearts/remembear | MIT | 3 | Recurring reminders self-hosted. | candidato | — |
| sameersharmadev/chrono | https://github.com/sameersharmadev/chrono | MIT | 3 | Task manager con reminders, streaks y insights. | candidato | — |
| danisztls/reminders | https://github.com/danisztls/reminders | NOASSERTION (no estándar) | 2 | CLI + YAML + desktop notifications. | candidato (revisar licencia) | — |
| gjivaros/reminder-engine | https://github.com/gjivaros/reminder-engine | MIT | 2 | Motor de recordatorios modular en Go (email, SMS, webhooks). | candidato | — |
| notifee/notifee | https://github.com/notifee/notifee | Apache-2.0 | 0 | Sistema de notificaciones locales avanzadas (React Native). Es un fork. | candidato | — |
| sivab193/event-reminder | https://github.com/sivab193/event-reminder | sin licencia | 0 | Multi-channel reminders + calendar sync + timezone. | solo idea (sin licencia) | — |

## G2-05 · Ánimo, diario y síntomas emocionales (9)

Mood trackers y journaling con analytics.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| nkalupahana/baseline | https://github.com/nkalupahana/baseline | AGPL-3.0 | 91 | Journaling + mood tracking (Ionic/Capacitor). | solo idea (GPL/AGPL) | — |
| drpeterrohde/MoodSnap | https://github.com/drpeterrohde/MoodSnap | GPL-3.0 | 62 | Mood diary iOS con analytics (SwiftUI). | solo idea (GPL/AGPL) | — |
| benji6/moodtracker | https://github.com/benji6/moodtracker | NOASSERTION (no estándar) | 56 | Offline-first PWA mood tracker. | candidato (revisar licencia) | — |
| rain0r/stimmungskalender | https://github.com/rain0r/stimmungskalender | AGPL-3.0 | 41 | Mood calendar self-hosted (Django). | solo idea (GPL/AGPL) | — |
| eeue56/gobaith | https://github.com/eeue56/gobaith | AGPL-3.0 | 19 | Mental health tracker for developers. | solo idea (GPL/AGPL) | — |
| KinomotoMio/Moodiary | https://github.com/KinomotoMio/Moodiary | sin licencia | 10 | Mood diary Flutter con AI y privacidad local. | solo idea (sin licencia) | — |
| dnlzrgz/moodmo | https://github.com/dnlzrgz/moodmo | GPL-3.0 | 9 | Self-hosted mood tracking (Django + Docker). | solo idea (GPL/AGPL) | — |
| djaiss/journalOS | https://github.com/djaiss/journalOS | MIT | 7 | Self-hosted journaling modular (sleep, mood, health, etc.). | candidato | — |
| Ashishworks/Horizon | https://github.com/Ashishworks/Horizon | sin licencia | 0 | AI mental health journal con analytics. | solo idea (sin licencia) | — |

## G2-06 · Datos de salud y FHIR (7)

Estándares y servidores de datos clínicos (FHIR, EHR).

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| openemr/openemr | https://github.com/openemr/openemr | GPL-3.0 | 5539 | Open source EHR (muy completo, útil como referencia de datos de salud). | solo idea (GPL/AGPL) | — |
| medplum/medplum | https://github.com/medplum/medplum | Apache-2.0 | 2756 | FHIR-based health data platform. | candidato | — |
| hapifhir/hapi-fhir | https://github.com/hapifhir/hapi-fhir | Apache-2.0 | 2418 | Servidor FHIR en Java. El adjunto lo tenía con otro dueño: hapi-fhir/hapi-fhir (404); se usa el nombre real verificado. | candidato | — |
| microsoft/fhir-server | https://github.com/microsoft/fhir-server | MIT | 1388 | FHIR server de Microsoft. | candidato | — |
| google/fhir | https://github.com/google/fhir | Apache-2.0 | 963 | Protocol buffers y herramientas FHIR de Google. | candidato | — |
| HL7/fhir | https://github.com/HL7/fhir | NOASSERTION (no estándar) | 761 | Especificación oficial FHIR. | candidato (revisar licencia) | — |
| cerner/fhir.cerner.com | https://github.com/cerner/fhir.cerner.com | sin licencia | 147 | Ejemplos FHIR. Archivado. | solo idea (sin licencia) | — |

## G2-07 · Backend y bases de datos (3)

Backend-as-a-service y motores de workflows.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| supabase/supabase | https://github.com/supabase/supabase | Apache-2.0 | 113355 | Backend-as-a-service con Postgres + auth + realtime (muy usado en apps privacy-conscious). | candidato | — |
| appwrite/appwrite | https://github.com/appwrite/appwrite | BSD-3-Clause | 57749 | Backend open source (auth, database, storage) ideal para prototipos locales o self-hosted. | candidato | — |
| argoproj/argo-workflows | https://github.com/argoproj/argo-workflows | Apache-2.0 | 17047 | Workflow engine (útil para pipelines de contenido o notificaciones complejas). | candidato | — |

## G2-10 · Cycle syncing de productividad y rutinas por fase (1)

Cómo funciona: según la fase estimada del ciclo se sugieren rutinas o tareas (más intensidad en la folicular, descanso en la lútea tardía), y el planner o calendario se anota por fase. Piezas: cálculo de fase (G1-02) más integración con planners o calendarios (ICS).

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/MaiaALex/luna-notes | MaiaALex/luna-notes | 0.1 | 0 | JavaScript | MIT | 2026-06-06 | F | Plantilla o plugin de Obsidian para planificar según el ciclo: fases, diario de síntomas y reflexión emocional. | Plantillas de planificación por fase para el modo cycle syncing. | G2-05 | Lunilla bot, 2026-10-22 |

# Grupo 3 — UI, animación y visualización

Componentes y librerías para la interfaz, gráficos y animaciones.

## G3-01 · Componentes UI animados y design systems (16)

Librerías de componentes (shadcn, Radix, Magic UI y similares) con animación.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| shadcn-ui/ui | https://github.com/shadcn-ui/ui | MIT | 126209 | Base de casi todo lo premium actual. | candidato | — |
| DavidHDev/react-bits | https://github.com/DavidHDev/react-bits | NOASSERTION (no estándar) | 49965 | La librería más grande de componentes animados de React (200+). Text effects, backgrounds, micro-interactions. Ideal para “legendario”. | candidato (revisar licencia) | — |
| magicuidesign/magicui | https://github.com/magicuidesign/magicui | MIT | 22796 | UI Library for Design Engineers. Componentes animados con Framer Motion + Tailwind. Excelente para look premium. | candidato | — |
| radix-ui/primitives | https://github.com/radix-ui/primitives | MIT | 19416 | Accesibilidad de nivel profesional. | candidato | — |
| nolly-studio/cult-ui | https://github.com/nolly-studio/cult-ui | MIT | 6668 | 150+ componentes animados shadcn-style (Motion + Tailwind). | candidato | — |
| imskyleen/animate-ui | https://github.com/imskyleen/animate-ui | NOASSERTION (no estándar) | 4577 | Componentes totalmente animados (React + Tailwind + Motion). Compatible con shadcn. | candidato (revisar licencia) | — |
| danielpetho/fancy | https://github.com/danielpetho/fancy | MIT | 3261 | Fancy Components: Microinteractions y componentes muy cuidados. | candidato | — |
| itshover/itshover | https://github.com/itshover/itshover | Apache-2.0 | 2699 | Iconos animados con intención (Motion). 180+. | candidato | — |
| kokonut-labs/kokonutui | https://github.com/kokonut-labs/kokonutui | MIT | 2192 | Componentes premium con Motion. Muy pulidos. | candidato | — |
| karthikmudunuri/eldoraui | https://github.com/karthikmudunuri/eldoraui | MIT | 1973 | 150+ animated components + blocks (design engineers). | candidato | — |
| SikandarJODD/svelte-animations | https://github.com/SikandarJODD/svelte-animations | MIT | 1235 | Versiones Svelte de Magic UI / Aceternity. | candidato | — |
| nikhils4/ui-beats | https://github.com/nikhils4/ui-beats | MIT | 234 | Componentes animados que “posees” (shadcn CLI). | candidato | — |
| itsjwill/motion-primitives-website | https://github.com/itsjwill/motion-primitives-website | sin licencia | 39 | Motion Primitives: 150+ componentes (GSAP, Three.js, Framer, etc.). El adjunto lo nombra itsjwill/nextjs-animated-components (redirige). | solo idea (sin licencia) | — |
| Garvit1000/AnimBits | https://github.com/Garvit1000/AnimBits | MIT | 36 | 50+ animaciones production-ready con Framer Motion (instalar vía shadcn CLI). | candidato | — |
| sopo/shadcn-animated | https://github.com/sopo/shadcn-animated | MIT | 28 | shadcn pero animado. | candidato | — |
| bikash1376/better-components | https://github.com/bikash1376/better-components | MIT | 1 | Animated components + motion design editor en el browser. | candidato | — |

## G3-02 · Gráficos y visualización de datos (6)

Charts y visualización para estadísticas del ciclo.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| d3/d3 | https://github.com/d3/d3 | ISC | 113794 | La base de casi toda visualización seria. | candidato | — |
| recharts/recharts | https://github.com/recharts/recharts | MIT | 27650 | Gráficos limpios y customizables. | candidato | — |
| airbnb/visx | https://github.com/airbnb/visx | MIT | 21084 | Visualizaciones de bajo nivel (muy minucioso). | candidato | — |
| plouc/nivo | https://github.com/plouc/nivo | MIT | 14120 | Charts React hermosos y consistentes. El adjunto lo tenía con otro dueño: nivo/nivo (404); se usa el nombre real verificado. | candidato | — |
| observablehq/plot | https://github.com/observablehq/plot | ISC | 5410 | Visualizaciones de datos muy precisas. | candidato | — |
| tremorlabs/tremor | https://github.com/tremorlabs/tremor | Apache-2.0 | 3676 | Charts y dashboards elegantes. | candidato | — |

### G3-02 · Agregados 2026-10-22 — Tendencias de ciclo a largo plazo y gráficos (función 19) (1)

Cómo funciona: las series (duración de ciclo, duración de periodo, BBT, LH, síntomas por fase) se grafican con librerías livianas en el cliente: líneas con bandas de variabilidad, heatmaps tipo calendario y gráficos radiales del ciclo. Piezas: librería de gráficos o heatmap y componentes radiales.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/kinduff/year-in-pixels | kinduff/year-in-pixels | 0.1 | 32 | CSS | MIT | 2026-01-04 | F | Herramienta web "year in pixels" que guarda el ánimo diario y lo visualiza como cuadrícula anual. | Cuadrícula anual de 365 celdas reutilizable para la vista de tendencias a largo plazo (color por fase o por síntoma). | G1-08 | Lunilla bot, 2026-10-22 |

## G3-03 · UI mobile (Flutter) (2)

Widgets y componentes para Flutter.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| flutterfx/flutterfx_widgets | https://github.com/flutterfx/flutterfx_widgets | sin licencia | 715 | Widgets animados para Flutter. Perfecto si vas a mobile con Flutter. | solo idea (sin licencia) | — |
| shoh-dev/fcnui | https://github.com/shoh-dev/fcnui | MIT | 44 | shadcn/ui para Flutter. Componentes elegantes y accesibles. | candidato | — |

## G3-04 · 3D (React Three Fiber) (2)

3D para UI web.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| pmndrs/react-three-fiber | https://github.com/pmndrs/react-three-fiber | MIT | 33164 | + drei — 3D para UIs premium. | candidato | — |
| pmndrs/drei | https://github.com/pmndrs/drei | MIT | 10042 | + react-three-fiber — 3D para UIs premium. | candidato | — |

## G3-05 · Listas curadas (awesome) (3)

Listas de referencia para buscar más librerías.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| postlight/awesome-cms | https://github.com/postlight/awesome-cms | CC0-1.0 | 3133 | Lista curada de CMS open source (referencia útil). | candidato | — |
| noobnooc/awesome-design-dev | https://github.com/noobnooc/awesome-design-dev | sin licencia | 93 | Curated list de las mejores librerías de UI, animaciones y design systems. | solo idea (sin licencia) | — |
| osmanyz/ui-kits-collection | https://github.com/osmanyz/ui-kits-collection | GPL-3.0 | 30 | Colección de UI kits de React, React Native, Vue y Flutter. | solo idea (GPL/AGPL) | — |

## G3-06 · Animación y scroll (librerías base) (8)

Motores de animación, smooth scroll y animate-on-scroll.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| juliangarnier/anime | https://github.com/juliangarnier/anime | MIT | 73763 | Animaciones ligeras y potentes. | candidato | — |
| motiondivision/motion | https://github.com/motiondivision/motion | MIT | 34441 | La librería de animaciones más usada. El adjunto lo nombra framer/motion (redirige). | candidato | — |
| greensock/GSAP | https://github.com/greensock/GSAP | sin licencia | 29613 | Animaciones de nivel “legendario”. El adjunto lo tenía con otro dueño: gsap/gsap (404); se usa el nombre real verificado. | solo idea (sin licencia) | — |
| pmndrs/react-spring | https://github.com/pmndrs/react-spring | MIT | 29177 | Animaciones físicas muy naturales. | candidato | — |
| michalsnik/aos | https://github.com/michalsnik/aos | MIT | 28052 | Animate on scroll (clásico pero efectivo). | candidato | — |
| darkroomengineering/lenis | https://github.com/darkroomengineering/lenis | MIT | 16796 | Smooth scroll moderno y ligero. | candidato | — |
| formkit/auto-animate | https://github.com/formkit/auto-animate | MIT | 13937 | Animaciones automáticas de listas y forms. | candidato | — |
| locomotivemtl/locomotive-scroll | https://github.com/locomotivemtl/locomotive-scroll | MIT | 8883 | Smooth scroll premium. | candidato | — |

# Organizaciones y usuarios de GitHub sin repo concreto (3)

El adjunto los citó como cuenta, no como repo. Existen; hay que elegir un repo dentro antes de usar código.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| aceternity | https://github.com/aceternity | — | — | varios repos de componentes: Heroes, 3D cards, beams, spotlights. Cuenta de tipo Organization con 2 repos públicos. | candidato | — |
| NaturalCycles | https://github.com/NaturalCycles | — | — | Algunos componentes o papers open source de predicción de ciclo. Cuenta de tipo Organization con 35 repos públicos. | candidato | — |
| smart-on-fhir | https://github.com/smart-on-fhir | — | — | SMART on FHIR (integración de apps de salud). Cuenta de tipo Organization con 140 repos públicos. | candidato | — |

# Otras fuentes (no GitHub) (2)

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| Aceternity UI | https://ui.aceternity.com | — | — | Componentes copiables: hero sections, cards, backgrounds y text effects de nivel muy alto, muy usados en landings premium. La cuenta de GitHub `aceternity` está en la sección anterior. | candidato | — |
| WAVES (Zenodo 17822639) | https://zenodo.org/records/17822639 | CC-BY-4.0 (Zenodo) | — | WAVES: algoritmo de extracción de features de señales BBT a través de ciclos (notebooks computacionales). | candidato | — |

# Descartados: existen pero no corresponden (3)

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| Period-Tracker | https://github.com/Period-Tracker | — | — | El adjunto decía: Varios repos con ese nombre que tienen calendarios y charts. Existe, pero la organización no tiene repos públicos. | descartado | — |
| ovulation-calculator | https://github.com/ovulation-calculator | — | — | El adjunto decía: Calculadoras de ovulación con UI de calendario avanzado. Existe, pero es un usuario con 1 repo vacío, sin descripción ni estrellas. | descartado | — |
| whoop | https://github.com/whoop | — | — | El adjunto decía: Algunos proyectos open de análisis de datos de recovery/HRV. Existe, pero es un usuario personal sin relación con WHOOP (10 repos ajenos al tema). | descartado | — |

# Descartados: no existen (17)

La API de GitHub devolvió 404 el 2026-10-22. La URL va sin enlace para no dejar links rotos.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| bbt-tracker | `github.com/bbt-tracker` (404) | — | — | El adjunto decía: Repos de basal body temperature charting con gráficos detallados. | descartado (no existe) | — |
| clue-app | `github.com/clue-app` (404) | — | — | El adjunto decía: si existe mirror público: Código relacionado con visualizaciones de Clue (busca “clue period tracker github”). | descartado (no existe) | — |
| cycle-phase-ring | `github.com/cycle-phase-ring` (404) | — | — | El adjunto decía: Componentes de anillo de fases del ciclo. | descartado (no existe) | — |
| fertility-awareness | `github.com/fertility-awareness` (404) | — | — | El adjunto decía: Apps y herramientas de método sintotérmico. | descartado (no existe) | — |
| fitbit | `github.com/fitbit` (404) | — | — | El adjunto decía: Repos de comunidad que procesan datos de temperatura y sueño. | descartado (no existe) | — |
| flohealth | `github.com/flohealth` (404) | — | — | El adjunto decía: Componentes o estudios de UI de Flo (busca repos relacionados). | descartado (no existe) | — |
| hormone-graph | `github.com/hormone-graph` (404) | — | — | El adjunto decía: Visualizaciones de estrógeno/progesterona a lo largo del ciclo. | descartado (no existe) | — |
| linuxfoundation/cde-fhir | `github.com/linuxfoundation/cde-fhir` (404) | — | — | El adjunto decía: Herramientas FHIR. | descartado (no existe) | — |
| machikoyasuda/awesome-fam | `github.com/machikoyasuda/awesome-fam` (404) | — | — | El adjunto decía: Lista curada de herramientas, apps y recursos de Fertility Awareness Method. | descartado (no existe) | — |
| menstrual-cycle-visualizer | `github.com/menstrual-cycle-visualizer` (404) | — | — | El adjunto decía: Proyectos de visualización de fases y hormonas. | descartado (no existe) | — |
| open-source-health | `github.com/open-source-health` (404) | — | — | El adjunto decía: (busca repos de integración con wearables de temperatura/HRV). | descartado (no existe) | — |
| open-source-period-tracker | `github.com/open-source-period-tracker` (404) | — | — | El adjunto decía: Varios forks y discusiones de period trackers privacy-first. | descartado (no existe) | — |
| oura-community | `github.com/oura-community` (404) | — | — | El adjunto decía: Algunos scripts y repos de comunidad para datos de Oura (temperatura, HRV). | descartado (no existe) | — |
| period-calendar-widget | `github.com/period-calendar-widget` (404) | — | — | El adjunto decía: Widgets de calendario menstrual reutilizables. | descartado (no existe) | — |
| privacy-period-tracker | `github.com/privacy-period-tracker` (404) | — | — | El adjunto decía: Varios privacy-first con UI limpia. | descartado (no existe) | — |
| studio-freight/lenis | `github.com/studio-freight/lenis` (404) | — | — | El adjunto decía: (mismo). Existe con otro nombre (verificado): darkroomengineering/lenis (ya en esta lista); no se agregó. | descartado (no existe) | — |
| symptom-correlation | `github.com/symptom-correlation` (404) | — | — | El adjunto decía: Apps que correlacionan síntomas con fases. | descartado (no existe) | — |
