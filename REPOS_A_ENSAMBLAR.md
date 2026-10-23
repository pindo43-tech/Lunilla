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
- **Agregados 2026-10-22 (búsqueda del bot de Lunilla):** 262 repos nuevos, buscados función por función para armar la app ensamblando código de otros repos. Están en subtablas `Agregados 2026-10-22` dentro de las secciones que ya existían, y en secciones nuevas (marcadas "nueva 2026-10-22" en el índice) para las funciones que no tenían sección. Cada sección nueva arranca explicando cómo funciona la función por dentro y qué piezas hacen falta. Total del archivo: 445 repos únicos (183 previos + 262 nuevos).
- **Columnas de las subtablas nuevas:** `Link` · `owner/nombre` (nombre canónico devuelto por la API de GitHub) · `MB` (campo `size` de la API, en KB, convertido a MB) · `⭐` · `Lenguaje` · `Licencia` (SPDX de la API; se anota tal cual, sin juicio) · `Último commit` (`pushed_at` de la API, fecha del último push) · `Front/Back` (F = interfaz o UI, B = lógica, datos, integraciones o backend) · `Qué es` · `Pieza concreta que aporta a Lunilla` (dónde, cuándo y cómo se ensambla) · `Otras funciones` (códigos de otras secciones donde también sirve; el repo figura una sola vez) · `Origen`. Los repos sin actividad en 2026 llevan una nota de "Vigencia" que explica por qué se quedan. Las funciones que resuelve mejor un LLM (redactar textos, horóscopos, afirmaciones, chat de preguntas) no tienen repos de texto: solo infraestructura.

## Índice

| Código | Función | Repos |
|---|---|---|
| G1-01 | Apps y trackers de ciclo (referencia completa) | 39 + 15 agregados 2026-10-22 |
| G1-02 | Predicción de ciclo, ventana fértil y librerías de cálculo | 8 + 6 agregados 2026-10-22 |
| G1-03 | Método sintotérmico, BBT y fertility awareness | 15 + 13 agregados 2026-10-22 |
| G1-04 | Modelos ML y series de tiempo para el ciclo | 5 + 11 agregados 2026-10-22 |
| G1-05 | Datasets y análisis estadístico del ciclo | 5 + 1 agregados 2026-10-22 |
| G1-06 | Wearables y datos fisiológicos | 4 + 21 agregados 2026-10-22 |
| G1-07 | Tracking de flujo menstrual (función 3) (nueva 2026-10-22) | 1 |
| G1-08 | Logging de síntomas físicos y emocionales (función 4) (nueva 2026-10-22) | 7 |
| G1-09 | Análisis de patrones y correlaciones síntoma ↔ fase (función 5) (nueva 2026-10-22) | 10 |
| G1-11 | Modo embarazo: semanas, fecha probable de parto, tamaño del bebé, bump tracker, kick counter, contraction timer y nombres (función 9 y extras) (nueva 2026-10-22) | 11 |
| G1-12 | Perimenopausia y menopausia (función 10) (nueva 2026-10-22) | 7 |
| G1-13 | Health assistant / AI coach: solo infraestructura no-LLM (función 11) (nueva 2026-10-22) | 11 |
| G1-14 | Symptom checker y autoevaluación de patrones PCOS/endometriosis (función 12 y extra) (nueva 2026-10-22) | 7 |
| G1-15 | Reportes PDF para el médico (función 13) (nueva 2026-10-22) | 13 |
| G1-16 | Predicción de síntomas e intensidad de dolor (función 14 y extras de dolor) (nueva 2026-10-22) | 1 |
| G1-17 | Tracking de anticonceptivos y quiz de anticoncepción (función 18 y extra) (nueva 2026-10-22) | 2 |
| G1-18 | Partner sharing con permiso, E2E (función 20 y extra partner mode / inner circle) (nueva 2026-10-22) | 7 |
| G1-19 | Tests OPK/LH: registro, lector de tiras por foto y curva de LH (función 22 y extras) (nueva 2026-10-22) | 1 |
| G1-20 | Modos por objetivo, personalización y guided journey / checklists (función 23 y extra) (nueva 2026-10-22) | 6 |
| G1-21 | Backup y sync multi-dispositivo E2E, CRDT, local-first (función 24 y extra backup Drive/iCloud) (nueva 2026-10-22) | 22 |
| G1-22 | Almacenamiento on-device y privacy-first, cifrado y modo anónimo (función 25 y extra) (nueva 2026-10-22) | 14 |
| G1-23 | Modo postparto y bebé: sangrado, lactancia, sueño y alimentación (extras) (nueva 2026-10-22) | 3 |
| G1-24 | Care navigator / buscador de clínicas y recursos (extra) (nueva 2026-10-22) | 6 |
| G1-25 | Exportar a CSV/spreadsheet e importar de otras apps (extra) (nueva 2026-10-22) | 5 |
| G1-26 | Calendario, vista de ciclo y filtros por síntoma (extra) (nueva 2026-10-22) | 6 |
| G1-27 | Registro de condiciones de salud y medicación (extra) (nueva 2026-10-22) | 4 |
| G2-01 | Educación, contenido y CMS | 12 + 5 agregados 2026-10-22 |
| G2-02 | Comunidad, foros y chat | 12 + 2 agregados 2026-10-22 |
| G2-03 | Gamificación | 10 + 2 agregados 2026-10-22 |
| G2-04 | Recordatorios y notificaciones | 17 + 5 agregados 2026-10-22 |
| G2-05 | Ánimo, diario y síntomas emocionales | 9 + 5 agregados 2026-10-22 |
| G2-06 | Datos de salud y FHIR | 7 |
| G2-07 | Backend y bases de datos | 3 |
| G2-08 | Fases lunares, moon sign, astrología y tarot de ciclo (solo cálculo; el texto lo hace un LLM) (nueva 2026-10-22) | 3 |
| G2-09 | Avatares y personalización de avatar (nueva 2026-10-22) | 2 |
| G2-10 | Cycle syncing de productividad y rutinas por fase (nueva 2026-10-22) | 2 |
| G2-11 | Videos cortos, GIFs, stories y daily decode (nueva 2026-10-22) | 3 |
| G2-12 | Modo padre, parent linking y plan multi-hija (nueva 2026-10-22) | 4 |
| G2-13 | PIN/passcode, decoy screen (pantalla falsa) y auto-borrado programado (nueva 2026-10-22) | 2 |
| G2-14 | Comparación con otras usuarias: estadística agregada con privacidad (nueva 2026-10-22) | 5 |
| G2-15 | Compartir en redes (tarjetas o imágenes) (nueva 2026-10-22) | 2 |
| G2-16 | Perks portal / cupones (nueva 2026-10-22) | 1 |
| G2-17 | Custom tags ilimitados (nueva 2026-10-22) | 1 |
| G3-01 | Componentes UI animados y design systems | 16 |
| G3-02 | Gráficos y visualización de datos | 6 + 5 agregados 2026-10-22 |
| G3-03 | UI mobile (Flutter) | 2 |
| G3-04 | 3D (React Three Fiber) | 2 + 2 agregados 2026-10-22 |
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

### G1-02 · Agregados 2026-10-22 — Predicción de periodo y ciclo · Ovulación y ventana fértil (funciones 1 y 2) (6)

Cómo funciona: se toma el historial de inicios de periodo, se calcula la duración de cada ciclo y se estima el próximo inicio con un modelo que tiene en cuenta la variabilidad propia (media ponderada, mediana robusta, bayesiano o serie de tiempo), no un 28 fijo. La ovulación se ubica restando la fase lútea (unos 12–14 días) al próximo inicio, o con señales (BBT, LH, moco) cuando las hay. La ventana fértil va de unos 5 días antes a 1 después de la ovulación. Piezas: cálculo de duraciones, filtro de outliers, intervalo de confianza, cálculo de fases y ventana.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/date-fns/date-fns | date-fns/date-fns | 25.8 | 36646 | TypeScript | sin licencia | 2026-10-22 | B | Librería moderna de utilidades de fechas en JavaScript. | Aritmética de fechas del ciclo (sumar días, diferencias, inicio de semana según locale) y formateo localizado. | G1-26 | Lunilla bot, 2026-10-22 |
| https://github.com/fullcalendar/temporal-polyfill | fullcalendar/temporal-polyfill | 8.9 | 783 | TypeScript | sin licencia | 2026-10-13 | B | Polyfill liviano de Temporal, el sucesor del objeto Date de JavaScript. | Fechas "PlainDate" sin zona horaria para los días del ciclo: evita errores de "un día corrido" al viajar o con el cambio de horario. | G1-26 | Lunilla bot, 2026-10-22 |
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

### G1-04 · Agregados 2026-10-22 — Modelos ML y series de tiempo para predicción (11)

Cómo funciona: los modelos aprenden de la secuencia de duraciones de ciclo (y opcionalmente de síntomas o datos de wearables) para predecir el próximo ciclo con su incertidumbre. En Lunilla tienen que correr en el dispositivo (JS/WASM/ONNX) o servir como referencia del algoritmo. Piezas: modelo entrenado o algoritmo, features y métrica de error.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/facebook/prophet | facebook/prophet | 67.2 | 20448 | Python | MIT | 2026-10-22 | B | Pronóstico de series de tiempo con estacionalidades múltiples y efectos de feriados (Python/R). | Benchmark offline de predicción de inicio del ciclo con datos agregados (por ejemplo, el dataset de G1-05), para calibrar el algoritmo simple del cliente. | G1-02 | Lunilla bot, 2026-10-22 |
| https://github.com/tensorflow/tfjs | tensorflow/tfjs | 170.2 | 19150 | TypeScript | Apache-2.0 | 2026-06-23 | F | Librería JS acelerada por WebGL para entrenar y correr modelos de ML en el navegador. | Inferencia on-device de un modelo chico de predicción de ciclo y síntomas, sin mandar datos a ningún servidor. | G1-16 | Lunilla bot, 2026-10-22 |
| https://github.com/statsmodels/statsmodels | statsmodels/statsmodels | 65.5 | 11702 | Python | BSD-3-Clause | 2026-10-22 | B | Modelado estadístico y econometría en Python (regresión, series de tiempo, tests). | Tests estadísticos de las correlaciones síntoma–fase antes de mostrarle "insights" a la usuaria. | G1-09 | Lunilla bot, 2026-10-22 |
| https://github.com/sktime/sktime | sktime/sktime | 96.8 | 10073 | Python | BSD-3-Clause | 2026-10-22 | B | Framework unificado de machine learning con series de tiempo (pronóstico, clasificación, detección de anomalías). | Pipeline de evaluación (backtesting) de predicción de ciclo y clasificación de patrones irregulares. | G1-09 | Lunilla bot, 2026-10-22 |
| https://github.com/pymc-devs/pymc | pymc-devs/pymc | 533.1 | 9820 | Python | NOASSERTION (no estándar) | 2026-10-19 | B | Modelado bayesiano y programación probabilística en Python. | Modelo bayesiano jerárquico de duración de ciclo (prior poblacional + datos de la usuaria) que da intervalos de confianza en la predicción; se exportan los parámetros para el cliente. | G1-02, G1-10 | Lunilla bot, 2026-10-22 |
| https://github.com/unit8co/darts | unit8co/darts | 272.9 | 9561 | Python | Apache-2.0 | 2026-10-17 | B | Librería Python de pronóstico y detección de anomalías en series de tiempo. | Detección de anomalías (ciclo atípicamente largo o corto) para avisar "consultá con una médica". | G1-14 | Lunilla bot, 2026-10-22 |
| https://github.com/Nixtla/statsforecast | Nixtla/statsforecast | 263.8 | 4943 | Python | Apache-2.0 | 2026-10-22 | B | Pronóstico rápido con modelos estadísticos (AutoARIMA, ETS, Theta, etc.) en Python. | Comparar modelos estadísticos de duración de ciclo y elegir la heurística más precisa para portarla a TS. | G1-02 | Lunilla bot, 2026-10-22 |
| https://github.com/CamDavidsonPilon/lifelines | CamDavidsonPilon/lifelines | 44.4 | 2618 | Python | MIT | 2026-03-07 | B | Análisis de supervivencia en Python (Kaplan-Meier, Cox, modelos paramétricos). | Modelar "tiempo hasta el próximo periodo" y "tiempo hasta el embarazo" (TTC) como supervivencia, con datos censurados. | G1-10 | Lunilla bot, 2026-10-22 |
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

### G1-06 · Agregados 2026-10-22 — Integración con wearables (función 15 y extras: Oura, HealthKit, Health Connect, Garmin, Fitbit, Whoop, HRV, temperatura de piel) (21)

Cómo funciona: una PWA no puede leer HealthKit ni Health Connect directamente. O se usa un wrapper nativo (Capacitor o React Native) que lee el SDK del sistema, o se consume la API web del fabricante con OAuth (Oura, Fitbit, Garmin, Whoop, Withings), o se importa un archivo exportado (export.xml de Apple Health, .fit de Garmin). Después hay que normalizar las series (temperatura de piel nocturna, HRV, FC en reposo) y pasarlas al detector de shift. Piezas: cliente o SDK, parser de exportaciones, normalizador y análisis HRV/temperatura.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/tcgoetz/GarminDB | tcgoetz/GarminDB | 6.9 | 3356 | Python | GPL-2.0 | 2026-10-19 | B | Scripts Python que descargan y parsean datos de Garmin (monitoreo diario, FC, sueño, actividades) a SQLite. | Pipeline de importación Garmin → SQLite → export JSON que la PWA importa (temperatura y FC en reposo para el análisis del ciclo). | G1-09 | Lunilla bot, 2026-10-22 |
| https://github.com/cyberjunky/python-garminconnect | cyberjunky/python-garminconnect | 1.4 | 3193 | Python | MIT | 2026-10-16 | B | Wrapper Python de la API de Garmin Connect para obtener estadísticas. | Importar temperatura de la piel, HRV y sueño de Garmin para la correlación con el ciclo. | G1-09 | Lunilla bot, 2026-10-22 |
| https://github.com/kingstinct/react-native-healthkit | kingstinct/react-native-healthkit | 31.4 | 721 | TypeScript | MIT | 2026-10-12 | B | Bindings de HealthKit para React Native con TypeScript completo y promesas. | Si se hace app nativa con RN/Expo: leer y escribir datos de ciclo menstrual, temperatura basal y síntomas en Apple Health. | G1-25 | Lunilla bot, 2026-10-22 |
| https://github.com/Th0rgal/open_oura | Th0rgal/open_oura | 2.3 | 642 | Rust | MIT | 2026-10-07 | B | Ingeniería inversa del protocolo BLE del anillo Oura, con crates Rust y un cliente sin nube que lee los datos directamente del anillo. | Leer la temperatura del anillo sin pasar por la nube de Oura (local-first, coherente con la privacidad de Lunilla); referencia de protocolo para una futura lectura vía Web Bluetooth. | G1-03 | Lunilla bot, 2026-10-22 |
| https://github.com/Aura-healthcare/hrv-analysis | Aura-healthcare/hrv-analysis | 9.8 | 461 | Python | GPL-3.0 | 2026-10-06 | B | Módulo Python de análisis de variabilidad de la frecuencia cardíaca (HRV) a partir de intervalos RR. | Calcular métricas HRV (RMSSD, etc.) de datos de wearables como señal de fase lútea y estrés. | G1-04, G1-16 | Lunilla bot, 2026-10-22 |
| https://github.com/matinzd/react-native-health-connect | matinzd/react-native-health-connect | 5.0 | 421 | Kotlin | MIT | 2026-08-26 | B | Wrapper de Health Connect (Android) para React Native. | Lectura y escritura de registros MenstruationFlow, OvulationTest y BasalBodyTemperature de Health Connect desde una app RN. | G1-19 | Lunilla bot, 2026-10-22 |
| https://github.com/PGomes92/pyhrv | PGomes92/pyhrv | 22.7 | 341 | Python | BSD-3-Clause | 2026-06-17 | B | Toolbox Python que calcula parámetros HRV a partir de ECG, BVP y otras señales. | Alternativa con más parámetros HRV (dominio de tiempo, de frecuencia y no lineales) para los modelos de ciclo. | G1-04 | Lunilla bot, 2026-10-22 |
| https://github.com/jimmykane/quantified-self | jimmykane/quantified-self | 78.0 | 235 | TypeScript | NOASSERTION (no estándar) | 2026-10-22 | B | Plataforma abierta que importa actividad de Garmin, Suunto, COROS, Wahoo y otros, con dashboards, tendencias de sueño y análisis de entrenamiento. | Importadores de archivos y servicios de wearables deportivos para traer sueño y actividad al cruce con el ciclo. | G2-10 | Lunilla bot, 2026-10-22 |
| https://github.com/irvinlim/apple-health-ingester | irvinlim/apple-health-ingester | 0.4 | 115 | Go | MIT | 2026-10-18 | B | Servidor HTTP en Go que recibe datos de la app Health Auto Export y los guarda en backends configurables. | Endpoint para recibir sincronizaciones periódicas desde iOS (vía Health Auto Export) si la usuaria quiere un import automático. | — | Lunilla bot, 2026-10-22 |
| https://github.com/hedgertronic/whoop | hedgertronic/whoop | 0.2 | 102 | Python | MIT | 2026-07-07 | B | Cliente Python de la API v2 de WHOOP con OAuth2 (recuperación, sueño, ciclos fisiológicos). | Importar recuperación, HRV y temperatura de la piel de WHOOP para correlacionarlas con la fase del ciclo. | G1-09 | Lunilla bot, 2026-10-22 |
| https://github.com/alxdrcirilo/apple-health-parser | alxdrcirilo/apple-health-parser | 1.9 | 101 | Python | MIT | 2026-09-23 | B | Paquete Python para parsear, analizar y graficar datos de Apple HealthKit. | Extraer flujo menstrual y temperatura basal del export de Apple Health para migrar el historial. | G1-25 | Lunilla bot, 2026-10-22 |
| https://github.com/sandseb123/Leo-Health-Core | sandseb123/Leo-Health-Core | 0.7 | 94 | Python | MIT | 2026-03-21 | B | Parsea exports de Apple Health y Whoop a una base SQLite local normalizada, sin dependencias ni red. | Normalización de columnas de varias fuentes en un solo esquema: patrón para importar historial de otras apps a Lunilla. | G1-25 | Lunilla bot, 2026-10-22 |
| https://github.com/hedgertronic/oura-ring | hedgertronic/oura-ring | 0.1 | 92 | Python | MIT | 2026-07-07 | B | Cliente Python para la API v2 de Oura con OAuth2 (sueño, SpO2, estrés, temperatura). | Importar la desviación de temperatura del anillo Oura como señal de ovulación (job puntual en un backend opcional). | G1-03 | Lunilla bot, 2026-10-22 |
| https://github.com/garmin/fit-javascript-sdk | garmin/fit-javascript-sdk | 0.7 | 80 | JavaScript | NOASSERTION (no estándar) | 2026-10-06 | B | SDK oficial de Garmin en JavaScript para decodificar y codificar archivos FIT. | Importar en el navegador archivos .fit que la usuaria exporta de su reloj (FC, temperatura y sueño) sin servidor. | G1-25 | Lunilla bot, 2026-10-22 |
| https://github.com/BRO3886/healthsync | BRO3886/healthsync | 0.4 | 74 | Go | MIT | 2026-07-13 | B | Parsea exports de Apple Health a una base SQLite local consultable por SQL, CLI o agentes. | Esquema de referencia para mapear el export.xml de Apple Health (incluye HKCategoryTypeIdentifierMenstrualFlow) a tablas. | G1-25 | Lunilla bot, 2026-10-22 |
| https://github.com/Pinta365/oura_api | Pinta365/oura_api | 0.2 | 41 | TypeScript | MIT | 2026-09-27 | B | Cliente TypeScript (ESM/JSR y npm) de la API v2 de Oura con OAuth2 y sandbox. | Conector Oura en TS que corre en una Cloudflare Worker: OAuth2 y descarga de la desviación de temperatura y el sueño para importarlos a la PWA. | G1-03 | Lunilla bot, 2026-10-22 |
| https://github.com/Cap-go/capacitor-health | Cap-go/capacitor-health | 1.5 | 31 | Kotlin | MPL-2.0 | 2026-10-19 | B | Plugin Capacitor para leer y escribir datos de Apple HealthKit (iOS) y Health Connect (Android) con una sola API. | Si la PWA se empaqueta con Capacitor: una sola API para sincronizar ciclo y temperatura con Health/Health Connect. | G1-21 | Lunilla bot, 2026-10-22 |
| https://github.com/mley/capacitor-health | mley/capacitor-health | 0.3 | 20 | Swift | MIT | 2026-09-23 | B | Plugin Capacitor para leer datos de Apple Health y Google Health Connect. | Si la PWA se empaqueta con Capacitor: importar temperatura, sueño y ciclo de HealthKit / Health Connect. | G1-03 | Lunilla bot, 2026-10-22 |
| https://github.com/soma-intelligence/open-health-sync | soma-intelligence/open-health-sync | 52.7 | 18 | Go | AGPL-3.0 | 2026-10-22 | B | Agregador autoalojado de datos de wearables y salud (Apple Health, Withings, Oura, WHOOP, Fitbit, Health Connect y más) con un modelo unificado vía REST, FHIR R4 y MCP; Go + Postgres. | Backend opcional "una sola API para todos los wearables" en lugar de integrar cada marca; sale en FHIR R4. | G2-06 | Lunilla bot, 2026-10-22 |
| https://github.com/allenporter/python-google-health-api | allenporter/python-google-health-api | 0.5 | 4 | Python | sin licencia | 2026-10-22 | B | Cliente Python asíncrono y tipado para la Google Health API (v4), pensado para migrar desde la API legacy de Fitbit. | Conector Fitbit/Pixel Watch con la nueva API de Google, ya que la API web de Fitbit está siendo reemplazada. | — | Lunilla bot, 2026-10-22 |
| https://github.com/home-health-hub/easyathome-bbt-daemon | home-health-hub/easyathome-bbt-daemon | 2.6 | 0 | Python | GPL-3.0 | 2026-08-22 | B | Daemon Linux que lee el termómetro BBT Easy@Home EBT-300 por Bluetooth LE y guarda las lecturas en local. | Protocolo BLE documentado del EBT-300: base para leer el termómetro con Web Bluetooth desde la PWA. | G1-03 | Lunilla bot, 2026-10-22 |

## G1-07 · Tracking de flujo menstrual (función 3) (1)

Cómo funciona: cada día de sangrado guarda una intensidad (manchado, leve, medio, abundante) y opcionalmente el producto usado y su cantidad, o un puntaje PBAC (Pictorial Blood Loss Assessment Chart) para estimar la pérdida. De ahí salen la duración del periodo, los días de manchado y las alertas de sangrado abundante. Piezas: modelo de datos de flujo, escala PBAC y vista de días de sangrado.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/GeiserX/SuperCycleTracker | GeiserX/SuperCycleTracker | 0.5 | 1 | Python | AGPL-3.0 | 2026-10-20 | B | Bot de Telegram para un hogar que pregunta los días probables de período, registra flujo, dolor y síntomas con botones o texto libre, aprende el ciclo de cada persona y guarda todo en un repo git privado; habla español. | Modelo de registro diario de flujo + dolor con entrada rápida por botones y el flujo "preguntar sólo en días probables": se copia al formulario diario de Lunilla (pantalla Hoy) y a la lógica de cuándo mostrar el prompt de registro. | G1-01, G1-17 recordatorios, G1-21 (historial en git) | Lunilla bot, 2026-10-22 |

## G1-08 · Logging de síntomas físicos y emocionales (función 4) (7)

Cómo funciona: un catálogo configurable de categorías (dolor, piel, digestión, ánimo, energía, sueño, libido…; las apps grandes tienen 30–200+) con valores por día (sí/no, escala o etiqueta), guardado como eventos fechados. La UI necesita entrada rápida (chips o iconos), notas y escalas validadas cuando hagan falta (por ejemplo DRSP para SPM/TDPM). Piezas: modelo de eventos, catálogo de síntomas, UI de registro y escalas.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/krisk/Fuse | krisk/Fuse | 11.1 | 20508 | JavaScript | Apache-2.0 | 2026-08-09 | B | Búsqueda difusa (fuzzy) liviana y sin dependencias en TypeScript, para navegador y servidor. | Buscador tolerante a errores de tipeo en el catálogo de síntomas y etiquetas ("colicos" → "cólicos"). | G2-17 | Lunilla bot, 2026-10-22 |
| https://github.com/open-nomie/nomie5 | open-nomie/nomie5 | 10.9 | 559 | Svelte | MIT | 2021-12-02 | F | Life tracker / diario de datos Svelte con trackers configurables (contadores, escalas, notas) y almacenamiento local. Vigencia: último push 2021, se queda porque su modelo de "trackers" configurables es el más completo abierto. | Modelo de trackers configurables (tipo, unidad, escala, emoji) para que la usuaria cree síntomas propios. | G2-17 etiquetas, G1-09 correlaciones | Lunilla bot, 2026-10-22 |
| https://github.com/mrzmyr/pixy-mood-tracker-app | mrzmyr/pixy-mood-tracker-app | 87.8 | 153 | TypeScript | MIT | 2026-10-21 | F | Diario de ánimo minimalista "un píxel por día" (React Native/TS), con desarrollo retomado en 2026 y versiones en las tiendas. | Registro diario de ánimo con etiquetas y vista anual en píxeles: componente de check-in emocional y heatmap anual de Lunilla. | G3-02 tendencias, G2-17 etiquetas | Lunilla bot, 2026-10-22 |
| https://github.com/lcdcode/mood-cairns | lcdcode/mood-cairns | 1.9 | 27 | Kotlin | GPL-3.0 | 2026-10-20 | B | Tracker de ánimo Android totalmente offline con escalas y etiquetas propias, ventanas horarias y notificación que pide el registro; gráficos y backup. | Escalas personalizadas + ventanas horarias de recordatorio para el check-in de síntomas. | G1-17, G2-17 | Lunilla bot, 2026-10-22 |
| https://github.com/sebferrer/life-notes | sebferrer/life-notes | 6.1 | 17 | TypeScript | MIT | 2026-02-26 | B | App móvil para registrar síntomas crónicos y hábitos diarios y ver cómo evolucionan para detectar patrones. | Modelo de síntoma con intensidad por día + hábitos asociados: esquema de datos de síntomas de Lunilla. | G1-09, G3-02 | Lunilla bot, 2026-10-22 |
| https://github.com/rudi-q/pinkrain_health_journal | rudi-q/pinkrain_health_journal | 47.9 | 15 | Dart | AGPL-3.0 | 2026-09-07 | B | Diario de salud Flutter privacy-first: medicación, síntomas, ánimo y funciones de IA experimentales, datos en el dispositivo. | Estructura de diario de síntomas + medicación local-first, como referencia para el registro combinado síntoma/medicamento. | G1-27, G1-22 | Lunilla bot, 2026-10-22 |
| https://github.com/aradar46/Vibecheck-Private-Mood-Tracker | aradar46/Vibecheck-Private-Mood-Tracker | 9.2 | 11 | TypeScript | NOASSERTION (no estándar) | 2026-10-19 | F | Tracker de ánimo y síntomas local-first para Android, sin cuenta ni nube, con quick log, línea de tiempo, insights y calendario. | Pantalla de "quick log" de baja fricción y timeline de síntomas para la pantalla Hoy. | G1-26 calendario, G1-09 | Lunilla bot, 2026-10-22 |

## G1-09 · Análisis de patrones y correlaciones síntoma ↔ fase (función 5) (10)

Cómo funciona: cada registro se alinea con el día del ciclo (o con la fase: folicular, ovulatoria, lútea, menstrual), se agrega entre ciclos y se buscan asociaciones: frecuencia por fase, correlación con desfase, estadística circular o detección de puntos de cambio. Es estadística determinista que corre en el dispositivo. Piezas: alineación por día de ciclo, librerías estadísticas, estadística circular o cosinor, y visualización.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/simple-statistics/simple-statistics | simple-statistics/simple-statistics | 3.7 | 3526 | JavaScript | ISC | 2026-10-14 | B | Estadística descriptiva, regresión e inferencia en JavaScript sin dependencias, para navegador y Node. | Correlación síntoma↔día del ciclo, medias y desvíos de duración y regresión lineal simple, todo en el dispositivo. | G3-02 | Lunilla bot, 2026-10-22 |
| https://github.com/woop/awesome-quantified-self | woop/awesome-quantified-self | 0.3 | 2797 | — | NOASSERTION (no estándar) | 2026-07-06 | B | Lista curada de sitios, recursos, dispositivos, wearables, apps y plataformas de auto-seguimiento. | Mapa de herramientas y APIs de quantified self para buscar fuentes de datos y conectores. | G1-06 | Lunilla bot, 2026-10-22 |
| https://github.com/duckdb/duckdb-wasm | duckdb/duckdb-wasm | 111.0 | 2146 | TypeScript | MIT | 2026-10-22 | B | DuckDB (OLAP en proceso) compilado a WebAssembly: SQL analítico en el navegador, lee Parquet, CSV y JSON con Arrow. | Análisis pesado local (años de registros, ventanas móviles por fase) con SQL, sin servidor; también sirve para importar CSV de otras apps. | G1-25 | Lunilla bot, 2026-10-22 |
| https://github.com/deepcharles/ruptures | deepcharles/ruptures | 11.2 | 2101 | Python | BSD-2-Clause | 2026-10-06 | B | Librería Python de detección offline de puntos de cambio en señales no estacionarias, con varios algoritmos exactos y aproximados. | Detección de cambios en la duración de los ciclos (por ejemplo inicio de perimenopausia o efecto de un anticonceptivo) para alertas de tendencia. | G3-02 tendencias, G1-12 | Lunilla bot, 2026-10-22 |
| https://github.com/jstat/jstat | jstat/jstat | 5.5 | 1805 | JavaScript | MIT | 2026-02-28 | B | Librería estadística en JavaScript nativo: distribuciones, tests, álgebra matricial. | Tests de significancia (chi², t) para decidir si un patrón síntoma↔fase es real o casualidad antes de mostrarlo. | G1-16 | Lunilla bot, 2026-10-22 |
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

## G1-12 · Perimenopausia y menopausia (función 10) (7)

Cómo funciona: se registran la irregularidad de los ciclos (criterios STRAW+10), los síntomas vasomotores (sofocos con hora e intensidad) y escalas validadas como MRS o Greene, más la terapia hormonal si la hay. Piezas: escalas, registro de episodios y detección de cambio de patrón de ciclo.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/Blueturboguy07/lunara | Blueturboguy07/lunara | 0.7 | 68 | TypeScript | AGPL-3.0 | 2026-10-20 | B | Compañera local-first y abierta de ciclo, fertilidad, embarazo y perimenopausia, alternativa a apps comerciales; en desarrollo, se compila desde el repo. | Modo perimenopausia dentro de un tracker de ciclo local-first (transición de "ciclo regular" a "irregular/menopausia" en el mismo modelo de datos). | G1-01, G1-11, G1-20 modos | Lunilla bot, 2026-10-22 |
| https://github.com/HARMONI-Lab/harmoni-selene | HARMONI-Lab/harmoni-selene | 14.8 | 3 | Python | NOASSERTION (no estándar) | 2026-04-28 | B | Prototipo de investigación de HARMONI Lab: asistente de menopausia privacy-first con registro local de síntomas, chat con RAG y resúmenes estilo clínico con MedGemma. | Resumen clínico de síntomas de menopausia generado localmente: patrón para el PDF para la médica. La parte de chat la resuelve un LLM; se toma sólo la estructura del resumen y el registro. | G1-15 PDF, G1-13 | Lunilla bot, 2026-10-22 |
| https://github.com/dongguacute/HRT-Tracker | dongguacute/HRT-Tracker | 1.9 | 2 | TypeScript | MIT | 2026-03-06 | B | Herramienta web privacy-focused (docs en inglés y chino) que simula y registra niveles de estradiol durante la terapia hormonal de reemplazo, con algoritmo farmacocinético documentado. | Modelo farmacocinético de estradiol por vía/dosis para graficar niveles estimados en usuarias con TRH. | G1-27 medicación | Lunilla bot, 2026-10-22 |
| https://github.com/kyl3kan3/menlopass | kyl3kan3/menlopass | 257.8 | 0 | HTML | sin licencia | 2026-09-28 | F | PWA offline + app Expo para perimenopausia en adelante, organizada en un solo flujo: diario de Hoy, puntajes de síntomas focalizados con contexto opcional e historia semanal. | Flujo "Hoy → puntaje de síntomas → historia semanal" para el modo perimenopausia, en PWA como Lunilla. | G1-08 | Lunilla bot, 2026-10-22 |
| https://github.com/christie-lihg/idgaf-tracker | christie-lihg/idgaf-tracker | 0.7 | 0 | JavaScript | MIT | 2026-08-26 | F | Web app privada y offline-first para síntomas de perimenopausia y menopausia, ciclos y "capacidad diaria", que arma un resumen para entregar a la médica. | Métrica de "capacidad diaria" y el resumen imprimible para la consulta. | G1-15 PDF | Lunilla bot, 2026-10-22 |
| https://github.com/jkirouac/perimenopause-diary | jkirouac/perimenopause-diary | 0.8 | 0 | TypeScript | sin licencia | 2026-10-05 | F | App de teléfono para llevar cada noche el Daily Perimenopause Diary de CeMCOR, con grilla mensual y copia imprimible para el equipo de salud. | Implementación del diario validado de CeMCOR (ítems y escala) como cuestionario del modo perimenopausia. | G1-15 PDF, G1-26 calendario | Lunilla bot, 2026-10-22 |
| https://github.com/topness-msft/tempra | topness-msft/tempra | 0.8 | 0 | TypeScript | sin licencia | 2026-08-08 | F | Tracker de sofocos de un solo usuario, mobile-first y offline-first (PWA), pensado para registrar a las 3 de la mañana a oscuras, con export CSV/JSON y atajos de Siri/iOS. | Registro de un toque de un evento (sofoco) con hora y duración, más export CSV/JSON. | G1-25 CSV | Lunilla bot, 2026-10-22 |

## G1-13 · Health assistant / AI coach: solo infraestructura no-LLM (función 11) (11)

Cómo funciona: el texto lo genera un LLM (tarea aparte). Acá van solo las piezas que el LLM no reemplaza: guardrails y filtros de seguridad médica (detectar urgencias y derivar), RAG sobre fuentes médicas propias, ejecución local en el navegador para no sacar datos del dispositivo, y anonimización antes de mandar texto afuera. Piezas: framework de guardrails, motor de inferencia en el navegador, búsqueda vectorial local y detección de PII.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/BerriAI/litellm | BerriAI/litellm | 2549.4 | 61838 | Python | NOASSERTION (no estándar) | 2026-10-23 | B | Gateway de IA open source que llama a más de 100 LLMs en formato OpenAI, con proxy self-hosted. | Alternativa self-hosted al gateway (presupuestos, logs, fallback de modelos) si el coach se sirve desde un backend propio. | — | Lunilla bot, 2026-10-22 |
| https://github.com/mlc-ai/web-llm | mlc-ai/web-llm | 67.7 | 19303 | TypeScript | Apache-2.0 | 2026-10-11 | F | Motor de inferencia de LLM en el navegador de alto rendimiento (WebGPU), compatible con la API de OpenAI. | LLM opcional 100% local para el coach: corre en la PWA con WebGPU, así ningún dato sale del dispositivo. | G1-22 | Lunilla bot, 2026-10-22 |
| https://github.com/huggingface/transformers.js | huggingface/transformers.js | 122.4 | 16366 | JavaScript | Apache-2.0 | 2026-10-22 | F | Transformers de Hugging Face en el navegador, sin servidor. | Modelos chicos on-device (clasificación de texto del diario, embeddings) para personalizar sin backend. | G1-16, G1-08 | Lunilla bot, 2026-10-22 |
| https://github.com/Portkey-AI/gateway | Portkey-AI/gateway | 66.1 | 13254 | TypeScript | MIT | 2026-05-25 | B | Gateway de IA en TypeScript con guardrails integrados que enruta a más de 1.600 LLMs. | Proxy en un Worker de Cloudflare para el coach con IA opcional: rate limit, guardrails de entrada/salida y cambio de proveedor sin tocar la PWA. | — | Lunilla bot, 2026-10-22 |
| https://github.com/guardrails-ai/guardrails | guardrails-ai/guardrails | 44.0 | 7556 | Python | Apache-2.0 | 2026-10-21 | B | Framework Python para agregar validadores (guardrails) a la entrada y salida de LLMs. | Validadores de salida (no diagnosticar, derivar a profesional, sin datos personales) para las respuestas del coach. | — | Lunilla bot, 2026-10-22 |
| https://github.com/NVIDIA-NeMo/Guardrails | NVIDIA-NeMo/Guardrails | 151.0 | 7351 | Python | NOASSERTION (no estándar) | 2026-10-23 | B | Toolkit de NVIDIA para agregar guardrails programables (rails de tema, seguridad y diálogo) a apps conversacionales con LLM. | Rails de tema para que el coach no salga de salud menstrual y derive en casos de riesgo (dolor extremo, autolesión). | — | Lunilla bot, 2026-10-22 |
| https://github.com/cloudflare/agents | cloudflare/agents | 44.6 | 5873 | TypeScript | MIT | 2026-10-22 | B | Cloudflare Agents: entornos con estado y persistentes para cargas de agentes sobre Durable Objects, con estado propio, almacenamiento y tiempo real. | Infraestructura del "coach" opcional en Cloudflare: estado por sesión, llamadas programadas y streaming. El contenido lo resuelve un LLM; esto es sólo la infraestructura. | G2-04 | Lunilla bot, 2026-10-22 |
| https://github.com/gorules/zen | gorules/zen | 15.3 | 2085 | Rust | MIT | 2026-10-21 | B | Business Rules Engine multiplataforma (Rust con bindings Node, Python, etc.) con tablas de decisión legibles. | Coach no-LLM: tablas de decisión fase × síntoma → tip, editables por el equipo médico y ejecutadas en el Worker o en WASM. | G1-14 | Lunilla bot, 2026-10-22 |
| https://github.com/ImprintLab/Medical-Graph-RAG | ImprintLab/Medical-Graph-RAG | 1.5 | 839 | Python | MIT | 2025-10-18 | B | Sistema Graph RAG para recuperación de información médica basada en evidencia (paper ACL 2025). Vigencia: último push 2025-10, se queda por ser la referencia publicada de Graph RAG médico con evidencia. | RAG con citas a fuentes médicas para que el coach responda con referencias del CMS educativo. | G2-01 | Lunilla bot, 2026-10-22 |
| https://github.com/babycommando/entity-db | babycommando/entity-db | 9.4 | 295 | JavaScript | sin licencia | 2025-05-08 | F | EntityDB: base de vectores en el navegador que envuelve IndexedDB y Transformers.js. Vigencia: último push 2025-05, se queda porque es la única base vectorial liviana directamente sobre IndexedDB. | Memoria semántica local sobre IndexedDB (mismo almacenamiento que Lunilla) para buscar en el diario o en el CMS sin servidor. | G2-01 CMS | Lunilla bot, 2026-10-22 |
| https://github.com/LocalMode-AI/LocalMode | LocalMode-AI/LocalMode | 14.1 | 64 | TypeScript | MIT | 2026-10-22 | F | Toolkit de IA local-first para la web: corre modelos de ML enteramente en el navegador, sin servidores ni API keys. | Capa de inferencia on-device (embeddings, clasificación) dentro de la PWA, sin enviar datos de salud fuera del teléfono. | G1-22, G1-16 | Lunilla bot, 2026-10-22 |

## G1-14 · Symptom checker y autoevaluación de patrones PCOS/endometriosis (función 12 y extra) (7)

Cómo funciona: cuestionarios estructurados (criterios de Rotterdam para SOP o escalas de síntomas de endometriosis) con lógica de saltos y un puntaje determinista que no diagnostica: sugiere consultar. Se pueden enriquecer con los datos registrados (irregularidad, dolor). Piezas: motor de formularios o cuestionarios (JSON, FHIR Questionnaire), reglas de puntaje y, como referencia, modelos de investigación.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/CacheControl/json-rules-engine | CacheControl/json-rules-engine | 1.2 | 3146 | JavaScript | ISC | 2026-02-16 | B | Motor de reglas expresadas en JSON, para Node y navegador. | Reglas del symptom checker (por ejemplo "ciclos >35 días + acné + vello → sugerir consulta por SOP") versionadas como JSON y revisables por el equipo médico; sin LLM. | G1-13, G2-04 | Lunilla bot, 2026-10-22 |
| https://github.com/bloo-berries/Endometriosis-Adenomyosis-Resources | bloo-berries/Endometriosis-Adenomyosis-Resources | 10.2 | 19 | Python | CC0-1.0 | 2026-09-03 | B | Fuente de contenido (content/ → dist/) del sitio "1 in 7" de Bloomed Health sobre endometriosis y adenomiosis y sus comorbilidades, licencia CC0. | Contenido CC0 sobre endo/adeno para alimentar las fichas del symptom checker y el CMS educativo (se importa como markdown en build). | G2-01 CMS, G1-24 navegador de cuidados | Lunilla bot, 2026-10-22 |
| https://github.com/imi-ms/MoPat | imi-ms/MoPat | 23.0 | 15 | Java | Apache-2.0 | 2026-10-22 | B | Mobile Patient Survey: plataforma web (Java) para digitalizar cuestionarios clínicos y exportarlos (incluido FHIR). | Referencia de motor de cuestionarios clínicos con puntaje y export, si se agrega un backend para profesionales. | G2-06 | Lunilla bot, 2026-10-22 |
| https://github.com/smsolutionsva-byte/OvaCare | smsolutionsva-byte/OvaCare | 2.0 | 14 | TypeScript | sin licencia | 2026-10-04 | F | App React/Vite para explorar síntomas de SOP, registrar estudios y preparar preguntas para profesionales; el puntaje sale de reglas en src/lib/riskCalculator.ts y aclara que no es diagnóstico. | riskCalculator.ts como referencia de autoevaluación de SOP basada en reglas, con texto de "no es diagnóstico" y salida "preguntas para tu médica". | G1-24, G1-15 PDF | Lunilla bot, 2026-10-22 |
| https://github.com/HealthSamurai/formbox-renderer | HealthSamurai/formbox-renderer | 37.1 | 10 | TypeScript | MIT | 2026-10-09 | F | Renderer React headless de cuestionarios HL7 FHIR R4/R5 con temas intercambiables. | Cuestionarios de autoevaluación estándar (por ejemplo, dolor o calidad de vida) en formato FHIR Questionnaire, exportables como QuestionnaireResponse. | G2-06 FHIR | Lunilla bot, 2026-10-22 |
| https://github.com/TristanLecourtois/endodetect-based-on-symptoms | TristanLecourtois/endodetect-based-on-symptoms | 1.1 | 7 | Python | MIT | 2024-07-02 | B | Modelos ML (regresión logística, árboles, random forest) para autodiagnóstico de endometriosis sólo con síntomas reportados. Vigencia: último push 2024-07; quedó porque casi no hay otros modelos de endometriosis basados en síntomas. | Puntaje de riesgo de endometriosis ("consultá con una médica") a partir de los síntomas ya registrados, con un modelo chico exportable. | G1-27 | Lunilla bot, 2026-10-22 |
| https://github.com/Xcept-Health/MentalChecker | Xcept-Health/MentalChecker | 0.2 | 2 | TypeScript | MIT | 2026-09-11 | F | App web de autoevaluación de salud mental con escalas estandarizadas (PHQ-9, GAD-7) y recursos de orientación; docs en francés. | Flujo de screening PHQ-9/GAD-7 (preguntas, puntaje y derivación) para detectar ánimo bajo asociado al ciclo (TDPM). | G1-24 | Lunilla bot, 2026-10-22 |

## G1-15 · Reportes PDF para el médico (función 13) (13)

Cómo funciona: se toman los datos descifrados en el dispositivo y se arma un PDF en el navegador (sin servidor) con resumen de ciclos, gráficos y tabla de síntomas, que se descarga o se comparte. Piezas: librería PDF client-side, plantillas y render de gráficos a imagen o vector.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/parallax/jsPDF | parallax/jsPDF | 141.0 | 31316 | JavaScript | MIT | 2026-10-21 | F | Generación de PDF en el navegador, del lado del cliente, en JavaScript. | Generar el "informe para la médica" (tabla de ciclos, síntomas y gráfico) dentro de la PWA, sin servidor: los datos descifrados nunca salen del dispositivo. | G1-25 | Lunilla bot, 2026-10-22 |
| https://github.com/diegomura/react-pdf | diegomura/react-pdf | 47.9 | 16837 | TypeScript | MIT | 2026-10-20 | F | Crear archivos PDF con componentes React (layout tipo flexbox), en navegador o Node. | Maquetar el informe PDF con componentes, si la UI de Lunilla usa React; mismo diseño en pantalla y en PDF. | — | Lunilla bot, 2026-10-22 |
| https://github.com/bpampuch/pdfmake | bpampuch/pdfmake | 149.4 | 12352 | JavaScript | NOASSERTION (no estándar) | 2026-10-19 | F | Impresión de PDF en JavaScript puro, cliente o servidor, a partir de una definición declarativa del documento (JSON). | Plantilla declarativa del informe (encabezado, tablas de ciclos, notas) que se arma con los datos locales; buena opción en Vite + TS sin framework. | — | Lunilla bot, 2026-10-22 |
| https://github.com/foliojs/pdfkit | foliojs/pdfkit | 59.1 | 10722 | JavaScript | MIT | 2026-10-22 | F | Librería de generación de PDF para Node y el navegador con API de dibujo de bajo nivel (texto, vectores, imágenes). | Dibujo vectorial de gráficos de ciclo/temperatura directamente en el PDF. | G3-02 | Lunilla bot, 2026-10-22 |
| https://github.com/Hopding/pdf-lib | Hopding/pdf-lib | 132.6 | 8666 | TypeScript | MIT | 2024-07-17 | F | Crear y modificar documentos PDF en cualquier entorno JavaScript (incluye llenar formularios PDF). Vigencia: último push 2024-07, se queda porque es la librería de referencia para editar PDFs existentes y llenar formularios. | Llenar un formulario PDF existente (por ejemplo una planilla de diario de síntomas oficial) con los datos de la usuaria. | G1-12 | Lunilla bot, 2026-10-22 |
| https://github.com/pdfme/pdfme | pdfme/pdfme | 788.9 | 4931 | TypeScript | MIT | 2026-10-22 | F | Generador de PDF en TypeScript con diseñador visual WYSIWYG de plantillas (React). | Diseñar visualmente la plantilla del "informe para la médica" y generarla en el cliente con los datos locales. | — | Lunilla bot, 2026-10-22 |
| https://github.com/simonbengtsson/jsPDF-AutoTable | simonbengtsson/jsPDF-AutoTable | 8.3 | 2544 | TypeScript | MIT | 2026-10-15 | F | Plugin de jsPDF que genera tablas PDF desde tablas HTML o directamente desde datos JS. | Tabla de ciclos del informe médico (fecha de inicio, duración, flujo, síntomas) con paginación y encabezados que se repiten. | G1-25 | Lunilla bot, 2026-10-22 |
| https://github.com/lmn1919/dompdf.js | lmn1919/dompdf.js | 44.0 | 1798 | TypeScript | MIT | 2026-10-12 | F | Motor DOM→PDF puramente frontend (TS + Web Workers + Rust/Wasm) que genera PDFs vectoriales con texto seleccionable. | Exportar la pantalla "Resumen" tal como se ve, a PDF vectorial y buscable, sin servidor. | — | Lunilla bot, 2026-10-22 |
| https://github.com/Myriad-Dreamin/typst.ts | Myriad-Dreamin/typst.ts | 12.7 | 1243 | TypeScript | Apache-2.0 | 2026-10-08 | F | Compila y renderiza documentos Typst en el navegador (Wasm) y los exporta a PDF, SVG o canvas. | Informe médico con calidad tipográfica (plantilla Typst + datos JSON) compilado en el dispositivo. | — | Lunilla bot, 2026-10-22 |
| https://github.com/akii09/pdfx | akii09/pdfx | 10.6 | 1180 | TypeScript | MIT | 2026-09-22 | F | Componentes PDF prearmados para React (estilo shadcn: se copian al proyecto) sobre @react-pdf/renderer. | Tablas, encabezados y bloques de resumen ya diseñados para el informe, si se usa react-pdf. | — | Lunilla bot, 2026-10-22 |
| https://github.com/yWorks/svg2pdf.js | yWorks/svg2pdf.js | 21.7 | 839 | TypeScript | MIT | 2026-10-21 | F | Convierte SVG a PDF en el navegador usando jsPDF, sólo con JavaScript. | Insertar en el PDF los gráficos de ciclo y temperatura (SVG de uPlot/ECharts) como vectores nítidos, no como imágenes borrosas. | G3-02 | Lunilla bot, 2026-10-22 |
| https://github.com/Skyfay/SkySend | Skyfay/SkySend | 8.5 | 440 | TypeScript | AGPL-3.0 | 2026-10-18 | B | Compartición de archivos y notas E2E, autoalojable, con servidor zero-knowledge. | Subir el reporte PDF cifrado y pasarle a la médica un enlace que expira (la clave va en el fragmento #). | G1-18 | Lunilla bot, 2026-10-22 |
| https://github.com/JeelGajera/jspdf-md-renderer | JeelGajera/jspdf-md-renderer | 0.6 | 24 | TypeScript | MIT | 2026-10-22 | F | Renderiza Markdown (títulos, listas, tablas, imágenes) directamente a PDF con jsPDF. | Notas de la usuaria y textos explicativos del informe escritos en Markdown y volcados al PDF. | — | Lunilla bot, 2026-10-22 |

## G1-16 · Predicción de síntomas e intensidad de dolor (función 14 y extras de dolor) (1)

Cómo funciona: con los síntomas alineados por día de ciclo se estima la probabilidad de cada síntoma en los próximos días (frecuencia histórica por día de ciclo, regresión o clasificador liviano). El dolor se registra con escalas estándar (EVA/NRS, mapa corporal) y se predice igual. Piezas: escala de dolor, mapa corporal, modelo de probabilidad por día y alertas.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/GreenNovaEmma/migraine-risk-card | GreenNovaEmma/migraine-risk-card | 0.1 | 90 | JavaScript | MIT | 2026-05-25 | F | Tarjeta de Home Assistant que calcula un puntaje compuesto de riesgo de migraña a partir de 9 factores de clima y calidad del aire. | Patrón de puntaje compuesto de riesgo (factores ponderados → gauge) para el pronóstico de dolor/migraña menstrual, sumando la fase del ciclo como factor. | G1-09 | Lunilla bot, 2026-10-22 |

## G1-17 · Tracking de anticonceptivos y quiz de anticoncepción (función 18 y extra) (2)

Cómo funciona: cada método tiene su propio calendario. La píldora es diaria, con 21+7 o 24+4 y semana de descanso. El parche es semanal, el anillo dura 3+1 semanas, la inyección 1 o 3 meses, y el DIU o el implante duran años con fecha de recambio. A eso se suman recordatorios de toma o recambio y el registro de olvidos. El quiz es un árbol de decisión o puntaje sobre preferencias, con criterios médicos (OMS MEC). Piezas: modelo de esquemas, scheduler y motor de quiz.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/waseefakhtar/dose-android | waseefakhtar/dose-android | 14.8 | 636 | Kotlin | MIT | 2025-12-03 | F | App Android de recordatorio de medicamentos (Jetpack Compose, Material 3, Room). Vigencia: último push 2025-12; se queda como referencia de UX de medicación muy usada. | Flujo de alta de medicación (dosis, horario, duración) y pantalla "tomada / salteada", aplicable a anticonceptivos y analgésicos. | G1-08 | Lunilla bot, 2026-10-22 |
| https://github.com/mariinkys/OpenPillReminder | mariinkys/OpenPillReminder | 4.6 | 11 | Kotlin | GPL-3.0 | 2026-10-11 | F | Tracker open source de pastilla anticonceptiva para Android (blíster con semana de descanso y recordatorio diario). | Modelo del blíster 21/7 o 28 días (posición en la tira, semana de placebo, "¿la tomaste hoy?") y su recordatorio diario. | G2-04 | Lunilla bot, 2026-10-22 |

## G1-18 · Partner sharing con permiso, E2E (función 20 y extra partner mode / inner circle) (7)

Cómo funciona: la usuaria elige qué compartir y el dato sale cifrado de punta a punta: se intercambian claves (QR o enlace), cada envío se cifra con la clave pública o una clave compartida, y el permiso se puede revocar rotando la clave. Piezas: librería de cripto (libsodium, age, MLS), intercambio de claves, transporte (relay o P2P) y permisos.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/openpgpjs/openpgpjs | openpgpjs/openpgpjs | 44.2 | 5976 | JavaScript | LGPL-3.0 | 2026-10-08 | B | Implementación de OpenPGP en JavaScript (claves, cifrado, firmas). | Alternativa estándar para compartir con terceros (por ejemplo una profesional) con claves públicas OpenPGP. | G1-15 | Lunilla bot, 2026-10-22 |
| https://github.com/jedisct1/libsodium.js | jedisct1/libsodium.js | 178.8 | 1161 | HTML | NOASSERTION (no estándar) | 2026-10-22 | B | libsodium compilado a WebAssembly y JS puro, con wrappers. | Primitivas de sobres (crypto_box, sealed boxes) para invitaciones de pareja y padre/madre con intercambio de claves X25519. | G2-12 modo padres | Lunilla bot, 2026-10-22 |
| https://github.com/FiloSottile/typage | FiloSottile/typage | 1.5 | 491 | TypeScript | BSD-3-Clause | 2026-08-28 | B | age-encryption: implementación en TypeScript del formato de cifrado de archivos age, que depende sólo de las librerías noble; soporta passkeys. | Cifrar el "paquete compartido" para la pareja con la clave pública de ella (recipient age), y descifrarlo en su dispositivo: compartir E2E sin servidor que lea los datos. | G1-21 backup cifrado | Lunilla bot, 2026-10-22 |
| https://github.com/osbytes/crypt.fyi | osbytes/crypt.fyi | 3.1 | 144 | TypeScript | Apache-2.0 | 2026-09-02 | B | Plataforma zero-knowledge para compartir secretos con cifrado E2E post-cuántico (ML-KEM) y CSP estricta. | Compartir un resumen puntual (por ejemplo, con una amiga o con la médica) con un enlace efímero cifrado en el cliente. | G1-15 | Lunilla bot, 2026-10-22 |
| https://github.com/stophecom/scrt-link-v2 | stophecom/scrt-link-v2 | 17.0 | 79 | TypeScript | MIT | 2026-10-11 | B | Secretos cifrados en el cliente antes de llegar al servidor y borrados para siempre tras verse o expirar. | Enlace de un solo uso para mandar el PDF o el resumen del ciclo sin que quede guardado en ningún servidor. | G1-15 | Lunilla bot, 2026-10-22 |
| https://github.com/munzzyy/starling | munzzyy/starling | 59.9 | 75 | JavaScript | GPL-3.0 | 2026-10-16 | B | Ubicación compartida privada para amigos y familia: E2E, sin cuentas ni teléfono, y un relay que no puede leer lo que guarda. | Modelo de "inner circle" sin cuentas: invitación por enlace o clave, relay ciego y revocación, aplicado a compartir fase y ánimo con la pareja. | G2-12 | Lunilla bot, 2026-10-22 |
| https://github.com/848deepak/Soma | 848deepak/Soma | 14.4 | 3 | TypeScript | sin licencia | 2026-04-08 | B | App Expo/React Native + Supabase con sincronización con pareja, registros diarios, sesión anónima y sitio Next.js. | Flujo de vinculación con pareja (invitación, permisos de lectura) como referencia de UX del modo pareja; en Lunilla el transporte se reemplaza por E2E. | G1-22 modo anónimo | Lunilla bot, 2026-10-22 |

## G1-19 · Tests OPK/LH: registro, lector de tiras por foto y curva de LH (función 22 y extras) (1)

Cómo funciona: se registra cada test (negativo, positivo o pico). El lector por foto detecta la tira (OpenCV o un modelo de visión), recorta la ventana, mide la intensidad de la línea de test (T) frente a la de control (C) y calcula el ratio T/C. La serie de ratios forma la curva de LH, cuyo pico anticipa la ovulación en 24–36 h. Piezas: captura de cámara, detección de la tira, perfil de intensidad, ratio y gráfico.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/lrq3000/fertility-test-analyzer | lrq3000/fertility-test-analyzer | 5.2 | 5 | Java | Apache-2.0 | 2023-11-18 | B | App Android que interpreta tiras de ovulación y embarazo cuantificando las líneas de la foto. Vigencia: último push 2023, se queda porque es de las pocas implementaciones abiertas de cuantificación de tiras. | Procesamiento de imagen de la tira (líneas T/C) para el lector de LH por foto. | G1-10 | Lunilla bot, 2026-10-22 |

## G1-20 · Modos por objetivo, personalización y guided journey / checklists (función 23 y extra) (6)

Cómo funciona: el objetivo (seguir el ciclo, buscar embarazo, evitar embarazo, embarazo, perimenopausia) define qué pantallas, campos y predicciones se muestran. Se resuelve con configuración y feature flags locales más un onboarding. Las checklists semanales son listas de tareas atadas a la semana o fase. Piezas: feature flags offline, onboarding o tours y listas de tareas.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/formatjs/formatjs | formatjs/formatjs | 94.7 | 14746 | TypeScript | sin licencia | 2026-10-22 | F | Monorepo de FormatJS (react-intl, intl-messageformat) para mensajes ICU y formateo de fechas y números. | Mensajes ICU con fechas relativas ("tu periodo llega en 3 días") localizados. | — | Lunilla bot, 2026-10-22 |
| https://github.com/i18next/i18next | i18next/i18next | 25.3 | 8647 | JavaScript | MIT | 2026-10-22 | F | Framework de internacionalización JS (plurales, interpolación, carga de idiomas). | Interfaz en es/pt/en con plurales correctos ("1 día" / "3 días") y textos educativos por idioma. | G2-01 | Lunilla bot, 2026-10-22 |
| https://github.com/growthbook/growthbook | growthbook/growthbook | 291.9 | 8526 | TypeScript | NOASSERTION (no estándar) | 2026-10-23 | B | Feature flags, experimentación A/B y analítica de producto open source. | Activar o desactivar modos (TTC, embarazo, perimenopausia) y probar variantes de onboarding sin publicar una versión nueva. Las flags se evalúan en el cliente, sin mandar datos de salud. | — | Lunilla bot, 2026-10-22 |
| https://github.com/Flagsmith/flagsmith | Flagsmith/flagsmith | 372.2 | 6612 | Python | BSD-3-Clause | 2026-10-22 | B | Plataforma open source de feature flags con remote config y segmentación. | Remote config por país e idioma (por ejemplo, recursos de salud locales) evaluada en el cliente. | G1-24 | Lunilla bot, 2026-10-22 |
| https://github.com/Twipped/Spiral | Twipped/Spiral | 10.3 | 11 | JavaScript | NOASSERTION (no estándar) | 2022-03-04 | F | App React Native de bio-ciclos "para todos los humanos": registra síntomas físicos y estado mental ligados a hormonas, con lenguaje neutro que evita disparadores de disforia. Vigencia: último push 2022, se queda porque es el único diseño abierto de tracker inclusivo para personas trans/no binarias. | Copy y estructura de pantallas con lenguaje neutro de género: base del modo inclusivo de Lunilla (onboarding y etiquetas sin "mujer"). | G1-08 | Lunilla bot, 2026-10-22 |
| https://github.com/al-mabsut/muslimah | al-mabsut/muslimah | 6.8 | 2 | JavaScript | sin licencia | 2025-12-28 | B | Librería NPM de recursos de jurisprudencia islámica sobre temas de mujeres (masaail de hayd/menstruación), que alimenta myhayd.app. Vigencia: último push 2025-12, se queda porque es la única fuente abierta y auditable de reglas de hayd. | Reglas de hayd como modo religioso opcional (cálculo de días de pureza/menstruación según escuela) dentro del sistema de modos de Lunilla. | G1-01, G2-01 | Lunilla bot, 2026-10-22 |

## G1-21 · Backup y sync multi-dispositivo E2E, CRDT, local-first (función 24 y extra backup Drive/iCloud) (22)

Cómo funciona: los datos viven en el dispositivo. Para sincronizar se cifran antes de salir y se mezclan sin conflictos con CRDT (Yjs, Automerge) o con un log de cambios. El transporte puede ser un servidor de sync, WebRTC P2P o un almacenamiento del usuario (Google Drive appDataFolder, WebDAV, remoteStorage). Piezas: CRDT o motor de sync, cifrado del lado del cliente y adaptador de almacenamiento.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/pocketbase/pocketbase | pocketbase/pocketbase | 143.5 | 61549 | Go | MIT | 2026-10-22 | B | Backend open source en Go en un solo archivo: SQLite embebido con suscripciones en tiempo real, usuarios, archivos y panel de administración. | Backend opcional autoalojable para guardar los blobs cifrados de backup y sync, con realtime, si no se usa Cloudflare. | — | Lunilla bot, 2026-10-22 |
| https://github.com/honojs/hono | honojs/hono | 9.9 | 32633 | TypeScript | MIT | 2026-10-22 | B | Framework web chico construido sobre Web Standards; corre en Cloudflare Workers, Deno, Bun y Node. | API mínima en Cloudflare Workers para lo que Lunilla necesite de backend: relay de sync cifrado, suscripciones push, invitaciones de pareja. Nunca ve datos en claro. | G2-04, G1-18 | Lunilla bot, 2026-10-22 |
| https://github.com/actualbudget/actual | actualbudget/actual | 644.1 | 29679 | TypeScript | MIT | 2026-10-21 | B | App de finanzas personales local-first con servidor de sincronización y cifrado E2E opcional. | Arquitectura probada en producción: CRDT con timestamps lógicos, servidor de sync liviano y cifrado E2E con contraseña. Se copian el protocolo de sync y la UX de "clave de cifrado". | G1-22 | Lunilla bot, 2026-10-22 |
| https://github.com/pubkey/rxdb | pubkey/rxdb | 644.9 | 23411 | TypeScript | Apache-2.0 | 2026-10-22 | B | Base local-first que corre en cualquier runtime JS y replica con el backend existente, con plugins de cifrado. | Replicación con plugins (CouchDB, HTTP, WebRTC) y almacenamiento cifrado listo, si se quiere un framework completo. | G1-22 | Lunilla bot, 2026-10-22 |
| https://github.com/yjs/yjs | yjs/yjs | 72.1 | 22971 | JavaScript | NOASSERTION (no estándar) | 2026-10-18 | B | Tipos de datos compartidos (CRDT) para software colaborativo, con proveedores de red y persistencia (y-indexeddb). | Sincronización entre dispositivos de la usuaria sin conflictos: el documento CRDT se cifra antes de enviarse a un relay (por ejemplo un Durable Object de Cloudflare). | G1-18 | Lunilla bot, 2026-10-22 |
| https://github.com/apache/pouchdb | apache/pouchdb | 125.3 | 17626 | JavaScript | Apache-2.0 | 2026-10-21 | B | PouchDB: base de datos JavaScript "de bolsillo" que replica con CouchDB. | Replicación probada offline→online con CouchDB autoalojado para el backup opcional. | — | Lunilla bot, 2026-10-22 |
| https://github.com/automerge/automerge | automerge/automerge | 132.3 | 6682 | JavaScript | MIT | 2026-10-22 | B | Estructura de datos JSON tipo CRDT que pueden modificar a la vez varios usuarios y fusionar automáticamente. | Historial del registro como documento Automerge: merge determinista entre teléfono y tablet, y export binario compacto para backup. | — | Lunilla bot, 2026-10-22 |
| https://github.com/loro-dev/loro | loro-dev/loro | 19.4 | 6238 | Rust | MIT | 2026-10-23 | B | CRDT en Rust (con bindings WASM/JS) para que datos JSON sean colaborativos y con control de versiones. | Fusionar sin conflictos los registros diarios editados en dos dispositivos (celular y tablet) antes de cifrar y subir el snapshot. | G1-18 | Lunilla bot, 2026-10-22 |
| https://github.com/tinyplex/tinybase | tinyplex/tinybase | 474.8 | 5197 | TypeScript | MIT | 2026-10-22 | B | Store de datos reactivo en memoria con persistencia y sincronización para apps local-first. | Store reactivo chico con persisters (IndexedDB, archivos, Durable Objects de Cloudflare) y sync por CRDT incluidos. | G1-22 | Lunilla bot, 2026-10-22 |
| https://github.com/cloudflare/workers-sdk | cloudflare/workers-sdk | 164.0 | 4644 | TypeScript | Apache-2.0 | 2026-10-22 | B | Wrangler: CLI y herramientas para desarrollar y desplegar Cloudflare Workers (KV, D1, R2, Durable Objects). | Desplegar los Workers del backend opcional junto al sitio en Cloudflare Pages; entorno local con Miniflare para tests. | G2-04 | Lunilla bot, 2026-10-22 |
| https://github.com/vlcn-io/cr-sqlite | vlcn-io/cr-sqlite | 42.2 | 3808 | Rust | MIT | 2026-08-10 | B | SQLite convergente y replicado: soporte multi-escritor y CRDT para SQLite. | Si se usa SQLite en el cliente (wa-sqlite), las tablas pasan a CRDT y se sincronizan por changesets cifrados. | G1-22 | Lunilla bot, 2026-10-22 |
| https://github.com/livestorejs/livestore | livestorejs/livestore | 94.6 | 3740 | TypeScript | Apache-2.0 | 2026-10-19 | B | Capa de datos client-centric con SQLite reactivo, offline-first, resolución de conflictos y sync con proveedores (incluido Cloudflare). | Alternativa integral a Dexie más sync: event-sourcing local en SQLite y sync vía Cloudflare (ojo: hay que cifrar los eventos antes del sync). | G1-22 | Lunilla bot, 2026-10-22 |
| https://github.com/ueberdosis/hocuspocus | ueberdosis/hocuspocus | 22.7 | 2629 | TypeScript | MIT | 2026-10-15 | B | Backend WebSocket plug & play para Yjs (colaboración en tiempo real sin conflictos), con hooks de auth y persistencia. | Relay de sync para los documentos Yjs (que pueden ir cifrados), si se elige Yjs y un servidor Node en lugar de Workers. | G1-18 | Lunilla bot, 2026-10-22 |
| https://github.com/remotestorage/remotestorage.js | remotestorage/remotestorage.js | 27.1 | 2427 | JavaScript | MIT | 2026-08-12 | B | Librería JS para guardar datos del usuario localmente en el navegador y conectarlos a remoteStorage, Dropbox o Google Drive. | Backup a la nube de la usuaria (Google Drive / Dropbox / remoteStorage) con un solo conector: se sube el blob ya cifrado. | G1-22 | Lunilla bot, 2026-10-22 |
| https://github.com/evoluhq/evolu | evoluhq/evolu | 21.2 | 1909 | TypeScript | MIT | 2026-10-22 | B | Plataforma local-first y librería TypeScript con sync E2E cifrado y mnemónico para restaurar. | El modelo más parecido a Lunilla: datos locales cifrados, sync E2E con relay y restauración con frase mnemónica en lugar de cuenta. | G1-22, G2-13 | Lunilla bot, 2026-10-22 |
| https://github.com/anyproto/any-sync | anyproto/any-sync | 14.6 | 1747 | Go | MIT | 2026-10-20 | B | Protocolo open source (de Anytype) de sync peer-to-peer de espacios cifrados E2E, local-first. | Referencia de arquitectura para sync P2P cifrado con claves por espacio (útil para el espacio compartido con la pareja). | G1-18 | Lunilla bot, 2026-10-22 |
| https://github.com/FriesI23/mhabit | FriesI23/mhabit | 147.6 | 1670 | Dart | Apache-2.0 | 2026-10-22 | B | Habit tracker Flutter con puntuación, gráficos de progreso, almacenamiento local-first y sincronización WebDAV entre dispositivos. | Sincronización WebDAV opcional de un store local-first: referencia del backup/sync autoalojado de Lunilla (subir el blob cifrado a WebDAV). | G2-03 | Lunilla bot, 2026-10-22 |
| https://github.com/cloudflare/partykit | cloudflare/partykit | 5.4 | 1296 | TypeScript | ISC | 2026-08-03 | B | PartyServer: librerías y ejemplos para apps en tiempo real sobre Cloudflare Workers y Durable Objects (inspirado en PartyKit), incluido y-partyserver para Yjs. | Relay de sync en tiempo real: un Durable Object por usuaria que reenvía actualizaciones Yjs ya cifradas entre sus dispositivos o con la pareja. | G1-18 | Lunilla bot, 2026-10-22 |
| https://github.com/kavinsood/yaos | kavinsood/yaos | 16.1 | 1062 | TypeScript | 0BSD | 2026-10-21 | B | Motor de sync en tiempo real para Obsidian sobre una Cloudflare Worker propia, con merge CRDT y sin terminal. | Patrón casi idéntico al de Lunilla: sync CRDT multi-dispositivo con una Worker y Durable Objects en la cuenta de Cloudflare del proyecto. | — | Lunilla bot, 2026-10-22 |
| https://github.com/perry-mitchell/webdav-client | perry-mitchell/webdav-client | 4.3 | 816 | TypeScript | MIT | 2026-09-19 | B | Cliente WebDAV en TypeScript para Node y el navegador. | Backup cifrado opcional a Nextcloud o a cualquier WebDAV propio de la usuaria (sube el blob AES-GCM). | — | Lunilla bot, 2026-10-22 |
| https://github.com/inrupt/solid-client-js | inrupt/solid-client-js | 13.3 | 244 | TypeScript | MIT | 2026-10-22 | B | Librería para leer y escribir datos y gestionar permisos en un Solid Pod. | Backup cifrado en un Pod Solid de la usuaria con permisos granulares para compartir (alternativa descentralizada). | G1-18 | Lunilla bot, 2026-10-22 |
| https://github.com/SoftwareEngineer-Hadi/CycleTrack | SoftwareEngineer-Hadi/CycleTrack | 40.7 | 0 | Dart | sin licencia | 2026-08-18 | B | Tracker Flutter de periodo y ovulación offline con almacenamiento local cifrado, anónimo por defecto y backup cifrado opcional en la nube vía Supabase con Google sign-in. | Backup cifrado opcional a la nube con login de Google: referencia del flujo "anónimo primero, backup opcional después". | G1-22 | Lunilla bot, 2026-10-22 |

## G1-22 · Almacenamiento on-device y privacy-first, cifrado y modo anónimo (función 25 y extra) (14)

Cómo funciona: los datos se guardan en IndexedDB u OPFS (SQLite WASM) cifrados con AES-GCM y una clave derivada del PIN (PBKDF2 o Argon2). Opcionalmente se desbloquean con passkey (WebAuthn PRF). No hay cuenta y no salen datos (modo anónimo). Piezas: wrapper de IndexedDB, cifrado, KDF y base de datos local.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/electric-sql/pglite | electric-sql/pglite | 32.3 | 16180 | TypeScript | Apache-2.0 | 2026-10-21 | B | Postgres embebible en WebAssembly con bindings reactivos en tiempo real, en navegador o Node. | Base relacional completa en el cliente si el modelo crece; persiste en IndexedDB. | G1-21 | Lunilla bot, 2026-10-22 |
| https://github.com/dexie/Dexie.js | dexie/Dexie.js | 73.4 | 14658 | TypeScript | Apache-2.0 | 2026-10-21 | B | Wrapper minimalista de IndexedDB con consultas, índices, versionado de esquema y liveQuery. | Capa de datos sobre IndexedDB con migraciones de esquema; con un hook de cifrado de campos (AES-GCM) antes de escribir. | G1-21 (Dexie Cloud opcional) | Lunilla bot, 2026-10-22 |
| https://github.com/sql-js/sql.js | sql-js/sql.js | 161.9 | 13676 | JavaScript | NOASSERTION (no estándar) | 2026-10-19 | B | SQLite compilado a JavaScript/WASM; base relacional que corre entera en el navegador. | Consultas SQL locales para estadísticas (promedios de ciclo, correlaciones) sobre datos descifrados en memoria. | G1-09 | Lunilla bot, 2026-10-22 |
| https://github.com/GoogleChrome/workbox | GoogleChrome/workbox | 23.8 | 13030 | JavaScript | MIT | 2026-10-20 | F | Librerías JS de Google para service workers en PWAs (precaching, estrategias de caché, background sync). | Estrategias de caché del service worker y background sync para reintentar subidas del backup cifrado cuando vuelve la conexión. | G1-21 | Lunilla bot, 2026-10-22 |
| https://github.com/jakearchibald/idb | jakearchibald/idb | 0.5 | 7429 | TypeScript | ISC | 2026-10-06 | B | IndexedDB con promesas: wrapper mínimo (~1 KB) que respeta la API original. | Alternativa mínima a Dexie para guardar los blobs cifrados (un store por tipo de registro) con transacciones con promesas. | — | Lunilla bot, 2026-10-22 |
| https://github.com/vite-pwa/vite-plugin-pwa | vite-pwa/vite-plugin-pwa | 3.3 | 4301 | TypeScript | MIT | 2026-10-09 | F | Plugin PWA sin configuración para Vite (manifest, service worker y actualizaciones). | Hacer instalable y offline la app Vite+TS de Lunilla: precache del shell y aviso de "nueva versión disponible". | G2-04 | Lunilla bot, 2026-10-22 |
| https://github.com/rhashimoto/wa-sqlite | rhashimoto/wa-sqlite | 24.5 | 1419 | JavaScript | MIT | 2026-10-13 | B | Build WebAssembly de SQLite con sistemas de archivos virtuales escritos en JS (IndexedDB, OPFS). | SQLite en el navegador sobre OPFS/IndexedDB para consultas de tendencias y correlaciones con SQL, en lugar de recorrer todo en JS. | G1-09, G3-02 | Lunilla bot, 2026-10-22 |
| https://github.com/Daninet/hash-wasm | Daninet/hash-wasm | 1.2 | 1163 | TypeScript | NOASSERTION (no estándar) | 2024-11-19 | B | Funciones hash en WebAssembly afinado a mano para navegador y Node, incluido Argon2id. Vigencia: último push 2024-11, se queda porque es el Argon2id más rápido en el navegador. | Argon2id rápido en Wasm para derivar la clave del PIN con parámetros de memoria altos sin trabar la UI. | G2-13 | Lunilla bot, 2026-10-22 |
| https://github.com/sqlite/sqlite-wasm | sqlite/sqlite-wasm | 6.3 | 1069 | JavaScript | sin licencia | 2026-10-20 | B | SQLite oficial compilado a Wasm, empaquetado como módulo ES (con soporte OPFS). | Variante oficial de SQLite para la PWA (persistencia OPFS en worker). | — | Lunilla bot, 2026-10-22 |
| https://github.com/paulmillr/noble-hashes | paulmillr/noble-hashes | 15.7 | 932 | TypeScript | MIT | 2026-09-08 | B | Implementación JS auditada y mínima de funciones hash, MACs y KDFs (SHA-2/3, HKDF, PBKDF2, scrypt, Argon2). | Derivar la clave desde el PIN con Argon2id o scrypt (más resistente a fuerza bruta que PBKDF2), con HKDF para subclaves por uso. | G2-13 PIN | Lunilla bot, 2026-10-22 |
| https://github.com/DallasHoff/sqlocal | DallasHoff/sqlocal | 1.1 | 747 | TypeScript | MIT | 2026-09-12 | B | SQLite3 en el navegador sobre el origin private file system (OPFS), con interfaz simple sobre el build WASM oficial. | Persistencia SQLite en OPFS como alternativa a IndexedDB para el almacén local, guardando columnas ya cifradas. | — | Lunilla bot, 2026-10-22 |
| https://github.com/paulmillr/noble-ciphers | paulmillr/noble-ciphers | 2.5 | 429 | TypeScript | MIT | 2026-09-17 | B | Implementación JS auditada y mínima de Salsa20, ChaCha y AES (incluye AES-GCM y XChaCha20-Poly1305). | Cifrado de los registros si hace falta algo más allá de WebCrypto (por ejemplo XChaCha20-Poly1305 con nonces aleatorios largos) y para tests deterministas. | G1-18, G1-21 | Lunilla bot, 2026-10-22 |
| https://github.com/vincenzo-afk/Synapse | vincenzo-afk/Synapse | 0.9 | 39 | TypeScript | MIT | 2026-10-18 | F | "Sistema operativo personal" PWA local-first y offline que une hábitos, tareas, finanzas y diario. | Arquitectura PWA instalable y totalmente offline con múltiples módulos sobre almacenamiento local, muy cercana al stack de Lunilla. | G1-21 | Lunilla bot, 2026-10-22 |
| https://github.com/dexie/dexie-encrypted | dexie/dexie-encrypted | 0.2 | 29 | JavaScript | MIT | 2026-03-27 | B | Cifrado transparente de una base IndexedDB usando Dexie (tweetnacl por defecto, o el método que uno elija). Los índices no se cifran. | Cifrar automáticamente cada tabla de Dexie con la clave derivada del PIN, sin cifrar a mano cada registro (sin indexar campos sensibles). | G2-13 | Lunilla bot, 2026-10-22 |

## G1-23 · Modo postparto y bebé: sangrado, lactancia, sueño y alimentación (extras) (3)

Cómo funciona: se registran eventos con hora (toma de pecho por lado y duración, biberón con ml, extracción, pañales, sueño), el sangrado postparto (loquios) y check-ins de ánimo (escala EPDS), con resúmenes diarios y semanales. Piezas: modelo de eventos con temporizador, gráficos de patrones y escalas.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/babybuddy/babybuddy | babybuddy/babybuddy | 79.3 | 2932 | Python | BSD-2-Clause | 2026-10-12 | B | Baby Buddy: app web autoalojable (Django) para que cuidadores registren sueño, tomas de alimentación, pañales y tummy time, y anticipen necesidades del bebé. | Modelo de datos y reportes del modo postparto/bebé (tomas, sueño, pañales) con sus gráficos; sirve de referencia para el esquema local cifrado. | G1-11 | Lunilla bot, 2026-10-22 |
| https://github.com/BekahHW/postpartum-wellness-app | BekahHW/postpartum-wellness-app | 77.8 | 44 | TypeScript | MIT | 2025-11-19 | F | App móvil de bienestar mental y físico en el postparto: caja de herramientas (afirmaciones, mindfulness, respiración), seguimiento y recursos. Vigencia: último push 2025-11; es la única referencia postparto de salud mental mantenida que encontré. | Pantallas de check-in emocional postparto y recursos de ayuda dentro del modo postparto. | G1-24 recursos | Lunilla bot, 2026-10-22 |
| https://github.com/enfold-baby/enfold | enfold-baby/enfold | 21.7 | 2 | Dart | AGPL-3.0 | 2026-10-06 | B | App libre y sin anuncios de cuidado del bebé del embarazo a los primeros años: registra tomas, pañales y sueño en dos toques, comparte con la pareja en tiempo real y tiene textos "¿esto es normal?" revisados por clínicos. | Modelo de registro de alimentación, sueño y pañales en dos toques con sync de pareja: base del módulo posparto/bebé. | G1-18, G2-01 | Lunilla bot, 2026-10-22 |

## G1-24 · Care navigator / buscador de clínicas y recursos (extra) (6)

Cómo funciona: un directorio de servicios (clínicas, telesalud, líneas de ayuda) con coordenadas, mostrado en un mapa y filtrado por tipo y distancia. Puede funcionar offline con datos empaquetados o usando OpenStreetMap (amenity=clinic, healthcare=*). Piezas: dataset o directorio, mapa (Leaflet o MapLibre), geocodificación y filtros.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/maplibre/maplibre-gl-js | maplibre/maplibre-gl-js | 1035.9 | 11921 | TypeScript | NOASSERTION (no estándar) | 2026-10-22 | F | Librería open source para mostrar mapas vectoriales en web y webviews con render por GPU. | Visor del mapa de clínicas y recursos (consume el PMTiles) dentro de la PWA. | — | Lunilla bot, 2026-10-22 |
| https://github.com/osm-search/Nominatim | osm-search/Nominatim | 159.4 | 4534 | Python | GPL-3.0 | 2026-10-20 | B | Búsqueda de datos de OpenStreetMap por nombre y dirección (geocoding y geocoding inverso). | Convertir "barrio o ciudad" en coordenadas para buscar clínicas cercanas sin usar la geolocalización exacta del dispositivo. | — | Lunilla bot, 2026-10-22 |
| https://github.com/komoot/photon | komoot/photon | 11.7 | 3135 | Java | Apache-2.0 | 2026-10-19 | B | Geocoder open source para datos de OpenStreetMap basado en OpenSearch, con búsqueda mientras se escribe. | Alternativa con autocompletado de ciudad/barrio para el buscador de recursos. | — | Lunilla bot, 2026-10-22 |
| https://github.com/protomaps/PMTiles | protomaps/PMTiles | 22.4 | 3096 | TypeScript | NOASSERTION (no estándar) | 2026-09-16 | B | Formato de un solo archivo para tiles de mapa, servible desde almacenamiento estático (S3/R2) sin servidor de tiles. | Mapa del care navigator sin servidor de mapas ni terceros que vean la ubicación: un .pmtiles en Cloudflare R2/Pages. | — | Lunilla bot, 2026-10-22 |
| https://github.com/drolbr/Overpass-API | drolbr/Overpass-API | 13.8 | 937 | C++ | AGPL-3.0 | 2026-02-19 | B | Motor de base de datos para consultar datos de OpenStreetMap (README mínimo; documentación en la wiki de OSM). | Extraer de OSM los puntos healthcare=clinic/gynaecology y farmacias por región para armar el directorio estático de recursos. | — | Lunilla bot, 2026-10-22 |
| https://github.com/monapdx/awesome-reproductive-justice | monapdx/awesome-reproductive-justice | 5.8 | 2 | CSS | NOASSERTION (no estándar) | 2026-07-21 | B | Lista curada de recursos de salud reproductiva y aborto: clínicas, directorios verificados, líneas de ayuda y herramientas. | Directorio de recursos externos para el navegador de cuidados (pantalla "¿A dónde voy?"), como JSON estático por país. | G2-01 | Lunilla bot, 2026-10-22 |

## G1-25 · Exportar a CSV/spreadsheet e importar de otras apps (extra) (5)

Cómo funciona: los registros se serializan a CSV o XLSX en el navegador y se descargan. Para migrar, se parsean las exportaciones de otras apps (Clue, Flo, drip) y se mapean al modelo de Lunilla. Piezas: librería CSV/XLSX, conversores de formatos de otras apps y esquema común.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/colinhacks/zod | colinhacks/zod | 26.4 | 44171 | TypeScript | MIT | 2026-10-19 | B | Validación de esquemas TypeScript-first con inferencia de tipos estática. | Validar CSV/JSON importados de otras apps y los backups descifrados antes de escribirlos en IndexedDB. | G1-21 | Lunilla bot, 2026-10-22 |
| https://github.com/mholt/PapaParse | mholt/PapaParse | 14.5 | 13590 | JavaScript | MIT | 2026-10-09 | B | Parser de CSV rápido para el navegador que maneja archivos grandes y malformados, con streaming y workers. | Importar CSV de otras apps (Clue, Flo, drip, planillas) y exportar el historial a CSV desde la PWA. | G1-21 | Lunilla bot, 2026-10-22 |
| https://github.com/open-circle/valibot | open-circle/valibot | 14.9 | 9047 | TypeScript | MIT | 2026-10-17 | B | Librería modular y type-safe de validación de esquemas (muy liviana gracias al tree-shaking). | Alternativa más liviana que zod para validar importaciones y formularios en el bundle de la PWA. | G1-08 | Lunilla bot, 2026-10-22 |
| https://github.com/isosphere/Clue-Period-Tracker-Backup-Converter | isosphere/Clue-Period-Tracker-Backup-Converter | 0.0 | 25 | Python | sin licencia | 2022-07-17 | B | Script Python que lee el backup .cluedata (JSON) de Clue y lo pasa a Excel. Vigencia: último push 2022, se queda porque es corto y explica la estructura del backup de Clue. | Estructura del JSON de backup de Clue para el importador. | — | Lunilla bot, 2026-10-22 |
| https://github.com/fabfabretti/clue-to-drip | fabfabretti/clue-to-drip | 0.1 | 6 | JavaScript | MIT | 2024-03-04 | F | Página web que convierte la exportación de Clue en un archivo importable en drip (sangrado y la mayoría de los tags). Vigencia: último push 2024, se queda porque documenta el formato de exportación de Clue. | Mapeo de campos de exportación de Clue a un modelo abierto: base del importador "desde Clue" de Lunilla. | G1-08 | Lunilla bot, 2026-10-22 |

## G1-26 · Calendario, vista de ciclo y filtros por síntoma (extra) (6)

Cómo funciona: un calendario mensual que pinta cada día según su estado (periodo, predicción, fértil, síntomas) y se filtra para mostrar hasta N síntomas. Necesita aritmética de fechas confiable (zonas horarias, DST) y un componente de calendario liviano. Piezas: componente de calendario, librería de fechas y capa de filtros.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/fullcalendar/fullcalendar | fullcalendar/fullcalendar | 34.8 | 20711 | TypeScript | MIT | 2026-10-16 | F | Calendario de eventos completo en JavaScript con drag & drop y vistas mes, semana y lista. | Vista mensual del ciclo: los días de periodo, fértiles y predichos se pintan como eventos de fondo, y al tocar un día se abre el registro. | G1-11 (semanas de embarazo) | Lunilla bot, 2026-10-22 |
| https://github.com/gpbl/react-day-picker | gpbl/react-day-picker | 123.6 | 6862 | TypeScript | MIT | 2026-10-21 | F | DayPicker: componente React personalizable para elegir fechas y mostrar calendarios, con modificadores por día. | Calendario chico estilo app de ciclo, con modificadores (periodo / fértil / predicho / registrado) y selección de rangos para cargar periodos pasados. | G1-07 | Lunilla bot, 2026-10-22 |
| https://github.com/wojtekmaj/react-calendar | wojtekmaj/react-calendar | 7.1 | 3787 | TypeScript | MIT | 2026-10-21 | F | Componente de calendario para React (mes, año, década, rangos). | Alternativa simple para la vista mes, con tileClassName por fase del ciclo. | — | Lunilla bot, 2026-10-22 |
| https://github.com/schedule-x/schedule-x | schedule-x/schedule-x | 85.1 | 2603 | TypeScript | MIT | 2026-10-22 | F | Calendario de eventos JavaScript moderno, responsive y con i18n, alternativa a fullcalendar. | Calendario con i18n (es/pt), tema oscuro y plugins para mostrar fases y recordatorios. | G2-04 | Lunilla bot, 2026-10-22 |
| https://github.com/vkurko/calendar | vkurko/calendar | 2.2 | 2292 | JavaScript | MIT | 2026-10-21 | F | EventCalendar: calendario de eventos JS liviano (35 KB br), sin dependencias, con vistas de recursos y línea de tiempo. | Calendario sin framework para la PWA Vite+TS: bundle standalone chico y vistas mes/lista. | — | Lunilla bot, 2026-10-22 |
| https://github.com/jens-maus/node-ical | jens-maus/node-ical | 2.9 | 173 | JavaScript | Apache-2.0 | 2026-10-19 | B | Parser iCalendar/ICS (RFC 5545) para Node con expansión de RRULE, zonas horarias y excepciones. | Importar o exportar eventos de calendario (periodo predicho, toma de pastilla) en formato .ics para Google/Apple Calendar. | G2-04 | Lunilla bot, 2026-10-22 |

## G1-27 · Registro de condiciones de salud y medicación (extra) (4)

Cómo funciona: la usuaria marca sus condiciones (migraña, adenomiosis, vulvodinia…) y su medicación. Codificarlas con terminologías estándar (ICD-10/11, SNOMED CT, RxNorm) permite exportarlas o compartirlas (FHIR). Piezas: catálogo o terminología, buscador de códigos y modelo de datos.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/hiraethclub/FlareEnough | hiraethclub/FlareEnough | 1.3 | 4 | Kotlin | GPL-3.0 | 2026-10-12 | B | App Android libre para enfermedades crónicas: medicación, registro de síntomas y meditación simple, sin anuncios ni suscripciones. | Registro de medicación y brotes para el módulo de condiciones de salud (endo, SOP, migraña). | G1-08 | Lunilla bot, 2026-10-22 |
| https://github.com/sharancreates/selene | sharancreates/selene | 2.9 | 0 | JavaScript | MIT | 2026-10-19 | B | Plataforma privacy-first de salud menstrual y hormonal con arquitectura zero-knowledge y una sección de "clinical intelligence". | Arquitectura zero-knowledge (cifrado cliente) y las reglas clínicas que documenta. | G1-22, G1-14 | Lunilla bot, 2026-10-22 |
| https://github.com/drewge23/endo-journal | drewge23/endo-journal | 0.2 | 0 | TypeScript | sin licencia | 2026-10-21 | F | Diario de endometriosis: registro de síntomas por día del ciclo, medicación y hábitos, para ver qué ayuda; informe imprimible para el médico; datos en localStorage. | Modelo "probar intervención y ver si ayuda" (antes/después por día de ciclo) más informe imprimible, para el modo endometriosis. | G1-15, G1-09 | Lunilla bot, 2026-10-22 |
| https://github.com/alizuccato/EndoBuddy | alizuccato/EndoBuddy | 82.2 | 0 | JavaScript | sin licencia | 2026-09-02 | F | Tracker de ciclo y síntomas para la comunidad con endometriosis (React + Vite, API Node, Turso/SQLite). | Catálogo de síntomas y pantallas específicas de endometriosis para reutilizar en Lunilla. | G1-08 | Lunilla bot, 2026-10-22 |

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

### G2-01 · Agregados 2026-10-22 — Contenido educativo médico: CMS, infotexts y cyclepedia (función 16 y extras) (5)

Cómo funciona: los textos los redacta un LLM o una persona experta. Acá va la infraestructura: dónde se guardan y versionan los artículos (CMS headless o Markdown en Git), cómo se empaquetan offline en la PWA y cómo se buscan (índice de texto completo en el cliente para la cyclepedia de síntomas). Piezas: CMS, pipeline de contenido y búsqueda local.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/decaporg/decap-cms | decaporg/decap-cms | 107.9 | 19442 | JavaScript | MIT | 2026-10-21 | B | CMS basado en Git para generadores de sitios estáticos. | Que el equipo médico edite el contenido educativo (Markdown en el repo) desde una UI y que se publique con el build estático en Cloudflare Pages. | — | Lunilla bot, 2026-10-22 |
| https://github.com/tinacms/tinacms | tinacms/tinacms | 923.0 | 13842 | TypeScript | Apache-2.0 | 2026-10-23 | B | CMS headless con edición visual que soporta Markdown, MDX, JSON y YAML guardados en Git, con API GraphQL. | Editar visualmente los artículos educativos (MDX) que se compilan dentro de la PWA estática. | — | Lunilla bot, 2026-10-22 |
| https://github.com/nextapps-de/flexsearch | nextapps-de/flexsearch | 7.4 | 13808 | JavaScript | Apache-2.0 | 2026-06-28 | B | Librería de búsqueda full-text de última generación para navegador y Node. | Alternativa muy liviana para el índice de búsqueda local de artículos y notas del diario (puede indexar las notas descifradas sólo en memoria). | G2-05 | Lunilla bot, 2026-10-22 |
| https://github.com/oramasearch/orama | oramasearch/orama | 131.9 | 10583 | TypeScript | NOASSERTION (no estándar) | 2026-10-18 | B | Motor de búsqueda full-text, vectorial e híbrido que corre en el navegador, en el servidor o en el edge. | Buscador offline del contenido educativo y de los síntomas en el dispositivo, sin enviar las consultas a ningún servidor. | G1-08 | Lunilla bot, 2026-10-22 |
| https://github.com/Thinkmill/keystatic | Thinkmill/keystatic | 23.3 | 2473 | TypeScript | MIT | 2026-10-01 | B | CMS con API TypeScript basado en Markdown y YAML/JSON, sin base de datos, que se conecta directamente a GitHub. | Contenido educativo tipado (artículos por fase, glosario) guardado como archivos en el repo e incluido en el bundle offline de la PWA. | G2-03 quizzes | Lunilla bot, 2026-10-22 |

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

### G2-02 · Agregados 2026-10-22 — Comunidad, foros anónimos, chat entre usuarias, polls y Q&A (2)

Cómo funciona: esto necesita servidor (rompe el modelo sin servidor de Lunilla, así que sería un módulo aparte y opcional). Hay que resolver identidad anónima o seudónima, moderación (clasificadores de toxicidad y reportes), encuestas y mensajería. Piezas: motor de foro o chat, sistema de polls y moderación.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/element-hq/synapse | element-hq/synapse | 632.6 | 4725 | Python | AGPL-3.0 | 2026-10-22 | B | Synapse: homeserver de Matrix (Python/Twisted + Rust), chat federado con cifrado E2E. | Salas de comunidad o grupos de apoyo con cifrado E2E y cuentas anónimas, autoalojado. También sirve como canal cifrado pareja↔usuaria. | G1-18 | Lunilla bot, 2026-10-22 |
| https://github.com/unitaryai/detoxify | unitaryai/detoxify | 52.1 | 1311 | Python | Apache-2.0 | 2026-10-20 | B | Modelos entrenados (PyTorch Lightning + Transformers) para clasificar comentarios tóxicos, incluida una variante multilingüe. | Moderación automática de los foros anónimos (insultos, acoso) antes de publicar; el modelo multilingüe cubre español y portugués. | — | Lunilla bot, 2026-10-22 |

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

### G2-03 · Agregados 2026-10-22 — Gamificación, quizzes, recompensas, rate my day y daily quiz (2)

Cómo funciona: los eventos de registro suman puntos, rachas y logros con reglas locales. Los quizzes son bancos de preguntas con puntaje. Rate my day es una escala diaria. Las animaciones de premio (confetti) refuerzan el hábito. Piezas: motor de logros o rachas, motor de quiz y efectos visuales.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/surveyjs/survey-library | surveyjs/survey-library | 332.2 | 4912 | TypeScript | MIT | 2026-10-22 | F | Librería JS open source de formularios y encuestas (React, Angular, Vue o JS plano) definidos en JSON. | Quizzes educativos y cuestionarios de autoevaluación (por ejemplo dolor o ánimo) definidos en JSON, con lógica condicional y puntaje. | G1-14 | Lunilla bot, 2026-10-22 |
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

### G2-04 · Agregados 2026-10-22 — Recordatorios inteligentes y notificaciones de prep day (función 17 y extra) (5)

Cómo funciona: una PWA puede mostrar notificaciones locales cuando está abierta o en segundo plano limitado. Para avisos confiables con la app cerrada hace falta Web Push (servidor VAPID que dispara) o un wrapper nativo con notificaciones locales programadas. La agenda sale de la predicción (prep day 1–3 días antes, toma de píldora, BBT de la mañana). Piezas: service worker, Web Push, scheduler o recurrencias y notificaciones nativas.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/novuhq/novu | novuhq/novu | 500.7 | 40188 | TypeScript | NOASSERTION (no estándar) | 2026-10-22 | B | Infraestructura open source de notificaciones con una API unificada para inbox, email, SMS, push y chat. | Orquestar recordatorios multicanal (push, email) con preferencias por usuaria y plantillas, si se agregan cuentas. | G2-12 | Lunilla bot, 2026-10-22 |
| https://github.com/jkbrzt/rrule | jkbrzt/rrule | 4.5 | 3746 | TypeScript | NOASSERTION (no estándar) | 2024-06-27 | B | Librería JS de reglas de recurrencia de calendario (RFC 5545, RRULE). Vigencia: último push 2024-06; la sigue usando todo el ecosistema JS para recurrencias. | Recordatorios recurrentes de anticonceptivos (diario, 21/7, parche semanal, anillo mensual) y export a calendario iCal. | G1-17 | Lunilla bot, 2026-10-22 |
| https://github.com/web-push-libs/web-push | web-push-libs/web-push | 1.9 | 3565 | JavaScript | NOASSERTION (no estándar) | 2026-10-19 | B | Librería Node para enviar Web Push con el protocolo y el cifrado de mensajes estándar. | Recordatorios push de la PWA (periodo próximo, pastilla) desde un cron de Cloudflare Worker, con payload cifrado y sin datos de salud en el servidor. | G1-17 | Lunilla bot, 2026-10-22 |
| https://github.com/Hexagon/croner | Hexagon/croner | 3.4 | 2611 | TypeScript | MIT | 2026-10-22 | B | Cron para JavaScript/TypeScript sin dependencias: dispara funciones o evalúa expresiones cron en Node, Deno, Bun y el navegador. | Calcular el próximo disparo de los recordatorios ("todos los días 21:00", "3 días antes del periodo") en el cliente y en el Worker. | G1-17 | Lunilla bot, 2026-10-22 |
| https://github.com/saiday/kukuroo | saiday/kukuroo | 0.6 | 131 | JavaScript | MIT | 2026-10-09 | B | Servicio propio de Web Push sobre una Cloudflare Worker (Declarative Web Push): sin servidor que mantener ni proveedor intermedio; relaya texto cifrado que no puede leer. | Recordatorios push de Lunilla desde Cloudflare sin un tercero que vea el contenido: encaja con el deploy en Cloudflare y con la privacidad. | G1-17 | Lunilla bot, 2026-10-22 |

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

### G2-05 · Agregados 2026-10-22 — Stickers, emojis y diario visual (5)

Cómo funciona: el diario guarda por día notas, stickers o emojis y fotos (cifradas). Hace falta un selector de emoji o stickers con assets con licencia y un editor liviano. Piezas: emoji picker, sets de stickers o íconos y editor de notas.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/microsoft/fluentui-emoji | microsoft/fluentui-emoji | 132.6 | 10175 | Python | MIT | 2026-08-24 | F | Colección de emojis de Microsoft (3D, color, plano, alto contraste). | Stickers 3D de alta calidad para el diario y los logros. | G3-01 | Lunilla bot, 2026-10-22 |
| https://github.com/hfg-gmuend/openmoji | hfg-gmuend/openmoji | 1608.7 | 4570 | HTML | CC-BY-SA-4.0 | 2026-08-12 | F | OpenMoji: emojis open source (SVG/PNG), incluidos emojis extra no estándar. | Set de stickers y emojis extra (salud, cuerpo) para el diario visual; licencia CC BY-SA, se acredita. | — | Lunilla bot, 2026-10-22 |
| https://github.com/jdecked/twemoji | jdecked/twemoji | 821.7 | 1889 | HTML | MIT | 2026-06-01 | F | Twemoji: set de emojis (fork comunitario mantenido de Twitter). | Emojis consistentes entre plataformas para el registro rápido de ánimo y síntomas. | G1-08 | Lunilla bot, 2026-10-22 |
| https://github.com/rive-app/rive-wasm | rive-app/rive-wasm | 28.0 | 1011 | TypeScript | MIT | 2026-10-22 | F | Runtime Wasm/JS para animaciones Rive (máquinas de estado interactivas). | Mascota o personaje animado que reacciona a la fase del ciclo o al ánimo, con estados interactivos. | G2-09 | Lunilla bot, 2026-10-22 |
| https://github.com/LottieFiles/dotlottie-web | LottieFiles/dotlottie-web | 133.2 | 924 | TypeScript | MIT | 2026-10-22 | F | Reproductor Lottie/dotLottie de alto rendimiento para la web (Rust + WASM), con wrappers para React, Vue y Svelte. | Stickers animados y celebraciones (racha, periodo registrado) en formato .lottie liviano. | G2-03 | Lunilla bot, 2026-10-22 |

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

## G2-08 · Fases lunares, moon sign, astrología y tarot de ciclo (solo cálculo; el texto lo hace un LLM) (3)

Cómo funciona: la fase lunar y la posición de los astros para una fecha salen de algoritmos astronómicos (Meeus, VSOP87, efemérides suizas). El 'signo' y el arquetipo se asignan con reglas sobre esas posiciones y el día del ciclo. El texto lo genera un LLM. Piezas: librería de efemérides o fases lunares y datos de cartas de tarot (como dataset, no texto generado).

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/mourner/suncalc | mourner/suncalc | 0.3 | 3503 | JavaScript | BSD-2-Clause | 2026-10-05 | B | Librería JS chica para calcular posiciones y fases del sol y la luna. | Fase e iluminación lunar por fecha, offline, para el overlay lunar en el calendario y el "ciclo vs luna". | G1-26 | Lunilla bot, 2026-10-22 |
| https://github.com/cosinekitty/astronomy | cosinekitty/astronomy | 52.3 | 1063 | C | MIT | 2025-01-27 | B | Astronomy Engine: cálculo en varios lenguajes (incluido JS) de posiciones de Sol, Luna y planetas, fases lunares y eclipses. Vigencia: último push 2025-01; es una librería de cálculo estable y sin dependencias. | Fases lunares exactas, búsqueda de la próxima luna llena/nueva y longitud eclíptica de la Luna para calcular el "moon sign" (signo zodiacal en que está la Luna). | G2-04 | Lunilla bot, 2026-10-22 |
| https://github.com/0xStarcat/CircularNatalHoroscopeJS | 0xStarcat/CircularNatalHoroscopeJS | 2.6 | 377 | JavaScript | Unlicense | 2021-07-18 | B | Librería ES6 para cálculos de carta natal astrológica (signos, casas, aspectos); no hace interpretaciones. Vigencia: último push 2021-07; se queda porque es la única librería JS completa de carta natal y no depende de ningún servicio. | Calcular el signo solar y lunar de la usuaria y el "moon sign" del día, offline; los textos los escribe el equipo o lo resuelve un LLM. | — | Lunilla bot, 2026-10-22 |

## G2-09 · Avatares y personalización de avatar (2)

Cómo funciona: los avatares se generan como SVG combinando partes (pelo, cara, ropa) con una semilla o elecciones de la usuaria y se guardan como parámetros. Piezas: generador o editor de avatares SVG y colecciones de assets.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/dicebear/dicebear | dicebear/dicebear | 32.4 | 9918 | Vue | MIT | 2026-10-21 | F | DiceBear: librería de avatares con muchos estilos y opciones, que genera SVG de forma determinista desde una semilla. | Avatar de la usuaria sin foto (privacidad): elige estilo, pelo y colores y se guarda sólo la configuración. | G2-02 comunidad anónima | Lunilla bot, 2026-10-22 |
| https://github.com/boringdesigners/boring-avatars | boringdesigners/boring-avatars | 3.0 | 6467 | TypeScript | MIT | 2026-06-19 | F | Librería React que genera avatares SVG a partir de un nombre y una paleta. | Avatares abstractos para perfiles anónimos y para el "perfil de pareja" compartido. | — | Lunilla bot, 2026-10-22 |

## G2-10 · Cycle syncing de productividad y rutinas por fase (2)

Cómo funciona: según la fase estimada del ciclo se sugieren rutinas o tareas (más intensidad en la folicular, descanso en la lútea tardía), y el planner o calendario se anota por fase. Piezas: cálculo de fase (G1-02) más integración con planners o calendarios (ICS).

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/super-productivity/super-productivity | super-productivity/super-productivity | 178.4 | 23068 | TypeScript | MIT | 2026-10-22 | F | App de tareas avanzada con timeboxing, seguimiento de tiempo e importación desde calendario, Jira y GitHub. | Referencia de rutinas y tareas recurrentes y de planificación diaria para el cycle syncing (tareas sugeridas según la fase). | G2-04 | Lunilla bot, 2026-10-22 |
| https://github.com/MaiaALex/luna-notes | MaiaALex/luna-notes | 0.1 | 0 | JavaScript | MIT | 2026-06-06 | F | Plantilla o plugin de Obsidian para planificar según el ciclo: fases, diario de síntomas y reflexión emocional. | Plantillas de planificación por fase para el modo cycle syncing. | G2-05 | Lunilla bot, 2026-10-22 |

## G2-11 · Videos cortos, GIFs, stories y daily decode (3)

Cómo funciona: los formatos tipo stories reproducen tarjetas o videos cortos en secuencia con progreso. Los GIFs salen de APIs de terceros (con privacidad acotada) o de animaciones locales (Lottie). Piezas: componente de stories, reproductor de video y animaciones vectoriales.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/remotion-dev/remotion | remotion-dev/remotion | 4335.4 | 66376 | TypeScript | NOASSERTION (no estándar) | 2026-10-22 | B | Hacer videos de forma programática con React. | Plantillas de videos educativos o resúmenes ("Wrapped" anual) renderizados con React, server-side o en el cliente; revisar la licencia (NOASSERTION, licencia propia de la empresa). | G2-01 | Lunilla bot, 2026-10-22 |
| https://github.com/ffmpegwasm/ffmpeg.wasm | ffmpegwasm/ffmpeg.wasm | 17.5 | 17898 | C | MIT | 2026-09-29 | F | FFmpeg en el navegador vía WebAssembly. | Armar en el dispositivo videos o stories cortos (MP4) a partir de las tarjetas del resumen, sin subir nada. | — | Lunilla bot, 2026-10-22 |
| https://github.com/mattdesl/gifenc | mattdesl/gifenc | 1.9 | 342 | JavaScript | MIT | 2024-09-19 | F | Codificador GIF rápido y liviano en JS puro, para navegador y Node. Vigencia: último push 2024-09; es una librería pequeña y estable. | Generar GIFs cortos (por ejemplo, la animación "tu ciclo del mes") en el cliente para compartir. | G2-15 | Lunilla bot, 2026-10-22 |

## G2-12 · Modo padre, parent linking y plan multi-hija (4)

Cómo funciona: varios perfiles locales en el mismo dispositivo, o un vínculo padre–hija con permisos limitados (solo algunos datos y con consentimiento de la adolescente), con cifrado por perfil. Piezas: multi-perfil, permisos y control parental.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/better-auth/better-auth | better-auth/better-auth | 163.3 | 30426 | TypeScript | MIT | 2026-10-22 | B | Framework de autenticación y autorización para TypeScript, agnóstico de framework, con plugins (organizaciones, passkeys, 2FA). | Cuentas opcionales para vincular padre/madre e hija, o pareja, con invitaciones y roles, sólo si se quiere sync o sharing (la app sigue funcionando sin cuenta). | G2-13 passkeys | Lunilla bot, 2026-10-22 |
| https://github.com/apache/casbin | apache/casbin | 6.7 | 20463 | Go | Apache-2.0 | 2026-10-21 | B | Apache Casbin: librería de control de acceso (ACL, RBAC, ABAC) para muchos lenguajes. | Alternativa embebida y liviana (también en JS) para las reglas de permisos del modo padres y de la pareja en el Worker. | G1-18 | Lunilla bot, 2026-10-22 |
| https://github.com/openfga/openfga | openfga/openfga | 59.7 | 6024 | Go | Apache-2.0 | 2026-10-22 | B | Motor de autorización y permisos de alto rendimiento inspirado en Google Zanzibar (relaciones). | Modelar "quién ve qué": la pareja ve fase y ánimo pero no las notas; madre/padre ve sólo recordatorios. Permisos revocables por relación. | G1-18 | Lunilla bot, 2026-10-22 |
| https://github.com/Permify/permify | Permify/permify | 399.5 | 5967 | Go | AGPL-3.0 | 2026-10-22 | B | Autorización fine-grained open source inspirada en Google Zanzibar (adquirida por FusionAuth). | Alternativa a OpenFGA para las relaciones padre↔hija y pareja con permisos por tipo de dato. | G1-18 | Lunilla bot, 2026-10-22 |

## G2-13 · PIN/passcode, decoy screen (pantalla falsa) y auto-borrado programado (2)

Cómo funciona: el PIN deriva la clave (ver G1-22). Un PIN de pánico (duress) muestra datos falsos o borra. La decoy screen disfraza la app (calculadora o similar). El auto-borrado elimina registros con más de N días con una tarea programada al abrir la app. Piezas: pantalla de PIN, WebAuthn, lógica de duress y decoy, y borrado seguro.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/MasterKale/SimpleWebAuthn | MasterKale/SimpleWebAuthn | 5.2 | 2373 | TypeScript | MIT | 2026-10-11 | B | Librerías TypeScript para integrar WebAuthn (passkeys) del lado del navegador y del servidor. | Desbloqueo con biometría/passkey además del PIN; con la extensión PRF se puede derivar la clave de cifrado de la passkey. | G1-22 | Lunilla bot, 2026-10-22 |
| https://github.com/passwordless-id/webauthn | passwordless-id/webauthn | 2.6 | 615 | TypeScript | MIT | 2026-10-21 | B | Helper de WebAuthn/passkeys del lado cliente y servidor. | Alternativa más simple para el desbloqueo biométrico local de la PWA. | — | Lunilla bot, 2026-10-22 |

## G2-14 · Comparación con otras usuarias: estadística agregada con privacidad (5)

Cómo funciona: para comparar 'qué tan común es tu síntoma' sin centralizar datos crudos se usa privacidad diferencial local (cada dispositivo agrega ruido antes de enviar) o agregación segura, y el servidor solo ve totales. También vale usar estadísticas publicadas (datasets) sin enviar nada. Piezas: librerías de DP o agregación segura y analítica privada.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/google/differential-privacy | google/differential-privacy | 10.3 | 3368 | Go | Apache-2.0 | 2026-10-21 | B | Librerías de privacidad diferencial de Google (C++, Go, Java), con agregaciones con ruido y herramientas para pipelines. | Estadísticas agregadas ("usuarias de tu edad tienen ciclos de X días") calculadas con ruido DP sobre datos donados de forma opcional. | G1-05 | Lunilla bot, 2026-10-22 |
| https://github.com/opendp/opendp | opendp/opendp | 261.8 | 445 | Rust | MIT | 2026-10-22 | B | Biblioteca núcleo de algoritmos de privacidad diferencial del proyecto OpenDP (Rust, con bindings para Python y R). | Alternativa con presupuesto de privacidad explícito para publicar comparativas anónimas. | — | Lunilla bot, 2026-10-22 |
| https://github.com/divviup/libprio-rs | divviup/libprio-rs | 3.8 | 122 | Rust | MPL-2.0 | 2026-10-22 | B | Implementación en Rust de Prio/VDAF para agregación privada de mediciones entre dos servidores. | El cliente divide su medición (por ejemplo, duración del ciclo) en partes secretas; ningún servidor solo ve el dato individual. Es la base para comparativas sin exponer a nadie. | G1-22 | Lunilla bot, 2026-10-22 |
| https://github.com/divviup/janus | divviup/janus | 18.0 | 70 | Rust | MPL-2.0 | 2026-10-23 | B | Implementación experimental del protocolo DAP (Distributed Aggregation Protocol) para mediciones privadas. | Servidor agregador DAP que completa libprio para el modo "comparar con otras" con agregación distribuida. | — | Lunilla bot, 2026-10-22 |
| https://github.com/brave/sta-rs | brave/sta-rs | 0.9 | 62 | Rust | MPL-2.0 | 2026-10-22 | B | Workspace Rust de STAR: agregación por umbral con secret-sharing distribuido (sin auditar). | Reporte de datos categóricos (por ejemplo, síntoma más común) que sólo se revela cuando lo reportan al menos k usuarias. | — | Lunilla bot, 2026-10-22 |

## G2-15 · Compartir en redes (tarjetas o imágenes) (2)

Cómo funciona: se renderiza una tarjeta (HTML o SVG) a imagen en el cliente y se comparte con la Web Share API, sin subir datos. Piezas: HTML→imagen y share sheet.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/vercel/satori | vercel/satori | 21.5 | 14123 | TypeScript | MPL-2.0 | 2026-10-22 | B | Convierte HTML y CSS (JSX) a SVG. | Generar la tarjeta para compartir ("mi ciclo en números", logros) como SVG/PNG desde una plantilla, en el cliente o en una Cloudflare Worker, sin datos sensibles. | G2-11 | Lunilla bot, 2026-10-22 |
| https://github.com/bubkoo/html-to-image | bubkoo/html-to-image | 109.0 | 7257 | TypeScript | MIT | 2026-05-28 | F | Genera una imagen a partir de un nodo DOM con canvas y SVG. | Capturar la tarjeta ya renderizada en la UI para exportarla a PNG y compartirla con la Web Share API. | — | Lunilla bot, 2026-10-22 |

## G2-16 · Perks portal / cupones (1)

Cómo funciona: un catálogo de ofertas con códigos y vencimiento, servido desde un backend o CMS. Piezas: motor de cupones o promociones.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/medusajs/medusa | medusajs/medusa | 871.3 | 36861 | TypeScript | NOASSERTION (no estándar) | 2026-10-22 | B | Plataforma de comercio open source con framework de personalización y módulo de promociones y cupones. | Portal de beneficios y cupones (productos de gestión menstrual) con el módulo Promotion, separado de los datos de salud. | — | Lunilla bot, 2026-10-22 |

## G2-17 · Custom tags ilimitados (1)

Cómo funciona: la usuaria crea etiquetas propias que se guardan como entidades con color o ícono y se asignan a días. Piezas: input de tags y modelo de etiquetas.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/yairEO/tagify | yairEO/tagify | 18.8 | 3895 | HTML | NOASSERTION (no estándar) | 2026-10-19 | F | Componente de input de tags (Vanilla, React, Vue) liviano, con autocompletado, edición y arrastre. | Crear y elegir etiquetas propias ilimitadas en el registro diario, con sugerencias de las ya usadas. | G1-08 | Lunilla bot, 2026-10-22 |

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

### G3-02 · Agregados 2026-10-22 — Tendencias de ciclo a largo plazo y gráficos (función 19) (5)

Cómo funciona: las series (duración de ciclo, duración de periodo, BBT, LH, síntomas por fase) se grafican con librerías livianas en el cliente: líneas con bandas de variabilidad, heatmaps tipo calendario y gráficos radiales del ciclo. Piezas: librería de gráficos o heatmap y componentes radiales.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/chartjs/Chart.js | chartjs/Chart.js | 43.2 | 67753 | JavaScript | MIT | 2026-10-22 | F | Gráficos HTML5 simples sobre canvas. | Gráficos estándar (barras de duración de ciclo, líneas de ánimo) con plugins de anotación para marcar ovulación. | G1-15 (render a imagen para el PDF) | Lunilla bot, 2026-10-22 |
| https://github.com/apache/echarts | apache/echarts | 264.9 | 67572 | TypeScript | Apache-2.0 | 2026-10-13 | F | Librería de visualización interactiva con muchos tipos de gráfico (incluidos polar, heatmap y calendario). | Heatmap tipo calendario de síntomas y gráfico polar del ciclo ("rueda" de fases) en una sola librería. | G1-09, G1-26 | Lunilla bot, 2026-10-22 |
| https://github.com/leeoniya/uPlot | leeoniya/uPlot | 12.3 | 10575 | JavaScript | MIT | 2026-10-22 | F | Gráfico chico y rápido para series de tiempo (líneas, áreas, barras). | Gráfico de temperatura basal y de duración de ciclos de varios años, muy liviano (~50 KB) para la PWA. | G1-03 | Lunilla bot, 2026-10-22 |
| https://github.com/wa0x6e/cal-heatmap | wa0x6e/cal-heatmap | 6.3 | 3127 | TypeScript | MIT | 2026-10-22 | F | Librería JavaScript para heatmaps de calendario de series temporales (estilo contribuciones de GitHub). | Vista anual de días de sangrado, dolor o ánimo como heatmap para ver tendencias largas de un vistazo. | G1-26 | Lunilla bot, 2026-10-22 |
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

### G3-04 · Agregados 2026-10-22 — AR/3D del bebé y modelos 3D (2)

Cómo funciona: un modelo 3D (glTF) por semana de gestación se muestra con WebGL o model-viewer (que incluye AR en el móvil). Piezas: visor 3D o AR y modelos con licencia.

| Link | owner/nombre | MB | ⭐ | Lenguaje | Licencia | Último commit | Front/Back | Qué es | Pieza concreta que aporta a Lunilla (dónde/cuándo/cómo se ensambla) | Otras funciones | Origen |
|---|---|---|---|---|---|---|---|---|---|---|---|
| https://github.com/mrdoob/three.js | mrdoob/three.js | 1656.9 | 116791 | JavaScript | MIT | 2026-10-22 | F | Librería 3D para JavaScript (WebGL/WebGPU). | Base para escenas 3D personalizadas (útero o bebé interactivo) si model-viewer no alcanza. | — | Lunilla bot, 2026-10-22 |
| https://github.com/google/model-viewer | google/model-viewer | 4373.9 | 8289 | TypeScript | Apache-2.0 | 2026-10-09 | F | Web component <model-viewer> para mostrar modelos 3D (glTF) interactivos en la web y en AR. | Mostrar el modelo 3D del bebé por semana (glTF) con AR en móvil, sin código 3D propio. | G1-11 | Lunilla bot, 2026-10-22 |

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
