# Repos candidatos — vertical Salud femenina y Belleza
Fecha: 2026-10-14. Regla de licencias: MIT/Apache se pueden reutilizar con aviso; GPL/AGPL y "sin licencia" = solo referencia de ideas (no se copia código).

## 1. Menstrual tracker (Luna) — `menstrual-tracker/upstream/`
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
| HYPERSAHIL/periodtracker | MIT | TS PWA local-first | Muy reciente (0★) | Vigilar; revisar en próxima iteración |
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
Búsqueda de recursos educativos abiertos (REA) adaptables: no se encontraron repos con licencia abierta y contenido en español sobre ciclo/menopausia listos para reutilizar. El contenido educativo de Luna/Brisa es redacción propia. Pendiente: evaluar textos CC-BY de organismos públicos de salud.
