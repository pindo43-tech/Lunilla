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

## Índice

| Código | Función | Repos |
|---|---|---|
| G1-01 | Apps y trackers de ciclo (referencia completa) | 39 |
| G1-02 | Predicción de ciclo, ventana fértil y librerías de cálculo | 8 |
| G1-03 | Método sintotérmico, BBT y fertility awareness | 15 |
| G1-04 | Modelos ML y series de tiempo para el ciclo | 5 |
| G1-05 | Datasets y análisis estadístico del ciclo | 5 |
| G1-06 | Wearables y datos fisiológicos | 4 |
| G2-01 | Educación, contenido y CMS | 12 |
| G2-02 | Comunidad, foros y chat | 12 |
| G2-03 | Gamificación | 10 |
| G2-04 | Recordatorios y notificaciones | 17 |
| G2-05 | Ánimo, diario y síntomas emocionales | 9 |
| G2-06 | Datos de salud y FHIR | 7 |
| G2-07 | Backend y bases de datos | 3 |
| G3-01 | Componentes UI animados y design systems | 16 |
| G3-02 | Gráficos y visualización de datos | 6 |
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

## G1-04 · Modelos ML y series de tiempo para el ciclo (5)

Modelos entrenados (LSTM, ARIMA, Prophet, boosting) para predecir longitud del ciclo.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| cilab-ufersa/period_cycle_prediction | https://github.com/cilab-ufersa/period_cycle_prediction | MIT | 27 | Time series forecasting (ARIMA y otros) para longitud de ciclo. Paper asociado. | candidato | REPOS-SIMILARES.md |
| lenakmeth/MenstruatioNN | https://github.com/lenakmeth/MenstruatioNN | MIT | 20 | LSTM con Keras para predecir ciclos y longitud de menstruación. | candidato | REPOS-SIMILARES.md |
| sammanamgain/MENSTRUAL-PERIOD-TRACKER | https://github.com/sammanamgain/MENSTRUAL-PERIOD-TRACKER | sin licencia | 1 | Flutter + Flask con modelo ARIMA para predicción. | solo idea (sin licencia) | REPOS-SIMILARES.md |
| 10anshika/RituCare | https://github.com/10anshika/RituCare | sin licencia | 0 | Full-stack con ARIMA, SARIMA, Prophet y ensemble para forecasting de ciclo + predicción de PCOS. | solo idea (sin licencia) | — |
| gurveenkaur6/Menstrual_cycle_prediction_model | https://github.com/gurveenkaur6/Menstrual_cycle_prediction_model | sin licencia | 0 | Red neuronal (TensorFlow/Keras) para predecir longitud de ciclo. | solo idea (sin licencia) | — |

## G1-05 · Datasets y análisis estadístico del ciclo (5)

Datos reales, modelos estadísticos y paquetes de análisis de ciclos auto-registrados.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| iurteaga/menstrual_cycle_analysis | https://github.com/iurteaga/menstrual_cycle_analysis | MIT | 34 | Análisis de datos de ciclo menstrual auto-reportados. | candidato | REPOS-SIMILARES.md |
| chai-toronto/mcphases | https://github.com/chai-toronto/mcphases | sin licencia | 8 | Dataset y scripts de síntomas, hormonas y datos fisiológicos del ciclo (útil para modelar datos). | solo idea (sin licencia) | REPOS-SIMILARES.md |
| epierson9/four-cycles | https://github.com/epierson9/four-cycles | MIT | 5 | Código del paper de ciclos diarios, semanales, estacionales y menstruales en mood y vital signs (datos de Clue). | candidato | — |
| jmjordan/cycles | https://github.com/jmjordan/cycles | sin licencia | 2 | CLI tool con base de datos local de ciclos (SQLite). Buena referencia de modelo de datos. | solo idea (sin licencia) | — |
| MarieGombertLabedens/MenstrualClock | https://github.com/MarieGombertLabedens/MenstrualClock | NOASSERTION (no estándar) | 0 | R package para visualizar fases en reloj. Muy minucioso. | candidato (revisar licencia) | — |

## G1-06 · Wearables y datos fisiológicos (4)

Temperatura, HR/HRV y unificación de datos de wearables relacionados con fases del ciclo.

| Repo | URL | Licencia | ⭐ | Qué aporta | Estado | También en |
|---|---|---|---|---|---|---|
| the-momentum/open-wearables | https://github.com/the-momentum/open-wearables | MIT | 2701 | Plataforma self-hosted para unificar datos de wearables (incluye ciclos menstruales). | candidato | — |
| elkimek/get-based | https://github.com/elkimek/get-based | AGPL-3.0 | 148 | Dashboard de biomarcadores + wearables (Oura, etc.) local-first. | solo idea (GPL/AGPL) | — |
| Aminsinichi/wearable-hrv | https://github.com/Aminsinichi/wearable-hrv | MIT | 14 | Paquete Python para validación y análisis de HR y HRV de wearables. | candidato | — |
| zkhechadoorian/menstrual-cycle-tracking | https://github.com/zkhechadoorian/menstrual-cycle-tracking | sin licencia | 0 | Detección de fases (folicular/luteal) a partir de temperatura de wearable usando regla de coverline. | solo idea (sin licencia) | REPOS-SIMILARES.md |

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
