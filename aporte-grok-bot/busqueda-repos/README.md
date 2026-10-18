# Búsqueda de repos similares — salud-femenina (Luna, Brisa, Glow, Mechas)

**Fecha:** 18/10/2026, alrededor de las 00:50 (hora de Argentina).
**Autor:** SaludFemeninaHost (Grok Bot). Copia idéntica en los 4 repos: `menstrual-tracker-jovenes`, `menopausia-local-first`, `maquillaje-ar-mvp` y `hair-look-preview`.

## Archivos
- `datos/REPOS-SIMILARES.md`: el informe completo de las 4 apps (2.653 filas). La sección de cada app también está en `../REPOS-SIMILARES.md`.
- `datos/agg.json`: el resultado ya filtrado y sin duplicados, por app.
- `datos/resultados-api-crudos.tar.gz`: las respuestas JSON crudas de la API de búsqueda de GitHub. Son `r000…r063.json` (una por consulta), `x_*.json` (los repos evaluados antes) y `test.json` (la consulta de prueba).
- `datos/queries.txt`: las 64 consultas, con el formato `app|consulta`.
- `datos/extras.txt`: los repos que ya se habían evaluado en rondas anteriores o que salieron en búsquedas web.
- `datos/prev.txt`: los repos citados en los README.md y REUSE.md previos.
- `datos/run.py`, `datos/extras.py` y `datos/agg.py`: los scripts que se usaron. `datos/run.log` es el registro de la ejecución.

## Metodología
1. Se hicieron **64 consultas** a `GET https://api.github.com/search/repositories`, ordenadas por estrellas y con hasta 100 resultados cada una. Fueron 24 para el tracker menstrual, 8 para menopausia, 18 para maquillaje y 14 para pelo, en inglés, español y portugués, combinando palabras clave y topics: `topic:period-tracker`, `topic:menstrual-cycle`, `topic:menopause`, `topic:virtual-makeup`, `topic:hairstyle`, `topic:hair-segmentation` y otros. Una consulta falló por tiempo de espera y se reintentó.
2. **Repos extra:** 107 repos que ya se habían evaluado en rondas anteriores (`repos-candidatos.md` y REUSE.md) o que aparecieron en búsquedas web (listas *awesome* y alternativas a Flo y Clue). Se consultaron con `repo:owner/nombre`. Tres no se encontraron: Huth-P/vitality-flow-splash, KshitijSawant1/NYRA (está como `NYRA---Virtual-AI-Makeup-Assistant`) e innacampo/selene (hoy es HARMONI-Lab/harmoni-selene).
3. **Filtro de relevancia:** cada resultado tiene que coincidir con una expresión regular del tema en su nombre, descripción o topics. Las expresiones están en `agg.py`. Los repos extra entran siempre.
4. **Deduplicación:** se hizo por `owner/repo`, sin distinguir mayúsculas, dentro de cada app. Un mismo repo puede aparecer en dos apps.
5. **Resultado:** 915 repos de tracker menstrual, 383 de menopausia, 684 de maquillaje y 671 de pelo, ordenados por estrellas.
6. **Datos de cada repo:** estrellas, licencia (el `spdx_id` que informa GitHub), lenguaje, último push y descripción, tal como vienen de la API. No se inventó nada.

## Marcas
- **◆**: el repo ya se había evaluado o citado antes, en `repos-candidatos.md`, en un REUSE.md o README.md, o en los repos extra.
- **NOASSERTION**: el repo tiene un archivo de licencia, pero GitHub no lo reconoce como una licencia estándar. Hay que leerlo antes de reutilizar código.
- **Sin licencia**: GitHub no detecta ninguna licencia, así que el código no se puede reutilizar. Solo sirve como referencia.
- La licencia de esta tabla es la que informa GitHub. Solo se verificó leyendo el archivo LICENSE en los repos que se usaron, y eso está anotado en REUSE.md y UPSTREAM.md.
- Entre los repos con pocas estrellas puede quedar algo de ruido.

## Top 5 recomendado por app (licencia permisiva y útil)
**Luna (tracker menstrual):**
1. IraSoro/peri (MIT): predicción, fases y textos en español.
2. getify/youperiod.app (MIT): PWA con cifrado local.
3. adulbrich/ephira (MIT): modelo de datos local-first y cifrado.
4. EmmaTellblom/Mensinator (MIT): predicción con fase lútea.
5. jessamynsmith/eggtimer-server (MIT): estadística de ciclos.

**Brisa (menopausia):**
1. oetiker/PeriMenoBomb (MIT): PWA de síntomas.
2. jessamynsmith/eggtimer-server (MIT).
3. BlondeDevRules/menopause-symptoms-dataset (MIT).
4. ljlang7701-boop/Perimenopause-Tracker (MIT).
5. RamamAgarwal/Menopause-Reddit-Analysis (MIT): vocabulario de síntomas.

mona-hrt/mona y Blueturboguy07/lunara son AGPL, así que sirven solo como ideas.

**Glow (maquillaje):**
1. ehsanwwe/OpenMakeupSDK (MIT): MediaPipe y WebGL.
2. jeeliz/jeelizFaceFilter (Apache-2.0).
3. Sanjana7395/face_makeup_app (MIT).
4. the-pudding/data (MIT): tonos de base.
5. kaylakremer/tensor-shade (MIT): buscador de tono de base.

**Mechas (pelo):**
1. Ys-sudo/hair-coloring-app (MIT): color de pelo en tiempo real en JS.
2. neyric/ai-hairstyle (MIT).
3. FusionBrainLab/HairFastGAN (MIT): necesita GPU.
4. Xiaojiu-z/Stable-Hair (Apache-2.0): necesita GPU.
5. YBIGTA/pytorch-hair-segmentation o wonbeomjang/mobile-hair-segmentation-pytorch (MIT).

## Qué se usó de verdad y qué se descartó (según REUSE.md y UPSTREAM.md)
El detalle por archivo y con el commit exacto está en el `REUSE.md` de cada app. Las URL y los commits de cada clon están en `UPSTREAM.md`.

**Luna (menstrual-tracker)**
- **Usados:**
  - HYPERSAHIL/periodtracker (MIT): mediana ponderada, ventana ± y aviso de sangrado de más de 7 días, en `app/predict.js` y `app/main.js`.
  - getify/youperiod.app (MIT): el patrón de bóveda AES-GCM/PBKDF2, con código propio.
  - adulbrich/ephira (MIT): la idea del modelo de día.
  - EmmaTellblom/Mensinator (MIT): la idea de predicción por media y fase lútea.
  - nwcell/ics.js (MIT): vendorizado, para el `.ics`.
  - IraSoro/peri (MIT): fases y textos en español.
  - fnando/sparkline (MIT): el gráfico de ciclos.
  - alwin-m/ROS-Cycle-Project (MIT): la fertilidad gaussiana.
  - FlowerYes/moj (MIT): las previsiones rodadas hasta hoy.
  - Ministerio de Salud de Argentina (CC BY 4.0): la tarjeta sobre endometriosis.
- **Descartados o solo ideas:**
  - bloodyhealth/drip (GPL-3.0).
  - Menstrudel y CycleOne (GPL).
  - Lunabelle, ovumcy-web y Blueturboguy07/lunara (AGPL).
  - electricg/period-tracker (MIT, no aportaba nada nuevo).
  - demiahmed/Cuddles (MIT, se prefirió moj).
  - CampanoMariano/cuidadosfemeninos (MIT, solo tiene README).
  - nurulain0/HerHaven, markdcross/endo-pain-tracker y aria-practices-datepicker: clonados como referencia.
  - Los repos sin licencia.

**Brisa (menopausia)**
- **Usados:**
  - getify/youperiod.app (MIT): el patrón de bóveda.
  - jessamynsmith/eggtimer-server (MIT): la estadística de ciclos, en `app/cycle.js`.
  - w3c/aria-practices (licencia W3C): las pestañas accesibles.
  - christie-lihg/idgaf-tracker (MIT): correlaciones por *lift*.
  - ljlang7701-boop/Perimenopause-Tracker (MIT): la preparación de la consulta.
  - Ministerio de Salud de Argentina (CC BY 4.0): la sección de osteoporosis.
  - Escala MRS (Heinemann) y STRAW+10 (Harlow 2012): criterios publicados, no código.
- **Descartados:**
  - Abhinashroy/Menopause-Tracker-app (sin licencia, solo referencia).
  - BlondeDevRules/menopause-symptoms-dataset (MIT, pero en inglés y con contenido de blog).
  - oetiker/PeriMenoBomb (MIT, interfaz pesada y sin una pieza que se pueda aislar).
  - Tidalflow-Health/lila-perimenopause.
  - topness-msft/tempra (sin licencia).
  - metanav/Hacking_Menopause (Apache-2.0, es hardware).
  - Blueturboguy07/lunara (AGPL).

**Glow (makeup)**
- **Usados:**
  - srivatsan-ramesh/Virtual-Makeup (MIT): mezcla de color en CIELAB.
  - @mediapipe/tasks-vision (Apache-2.0, por CDN): los landmarks de la cara.
  - casiez/OneEuroFilter (BSD-3): estabilización de la cámara.
  - the-pudding/data (MIT): los 625 tonos de base.
  - w3c/aria-practices (licencia W3C): teclado en los grupos de color.
  - Evercoder/d3-color-difference (BSD-3-Clause, commit fc05893): el ΔE CIEDE2000, copiado en `app/lib/third_party/ciede2000.js`. El aviso de licencia está en `app/lib/third_party/LICENSE-d3-color-difference.txt`.
- **Descartados:**
  - otdnnc/virtual-makeup (sin licencia).
  - jeeliz/jeelizFaceFilter (Apache-2.0, se eligió MediaPipe).
  - hriddhidey/visage y Sanjana7395/face_makeup_app (MIT, no aportaban nada nuevo).
  - ehsanwwe/OpenMakeupSDK (MIT, evaluado sin integrar).
  - canvas-confetti, animate.css, barba y lax.js.

**Mechas (hair-look)**
- **Usados:**
  - @mediapipe/tasks-vision con `hair_segmenter` (Apache-2.0, por CDN).
  - srivatsan-ramesh/Virtual-Makeup (MIT): recolor en CIELAB, en `lib/color.js`.
  - w3c/aria-practices (licencia W3C): teclado en la paleta.
  - neyric/ai-hairstyle (MIT): la galería, adaptada según `repos-candidatos.md`. Según REUSE.md, el flujo de IA queda para una fase con servidor.
- **Descartados o pendientes:**
  - sanviiz/hairstyle-try-on (MIT, es Python).
  - playatanu/hair-color-try-on, sabuuuu/Dyecode, Html544/colorful-hair-style-changer y jeanmicheldewez-ux/face-hair-cutout-js (sin licencia).
  - Sphinx-Phoenix/BarberzBuzz (MIT, no tiene motor de recolor).
  - casiez/OneEuroFilter (no hacía falta en Mechas).
