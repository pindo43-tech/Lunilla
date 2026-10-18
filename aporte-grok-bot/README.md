# Menstrual Tracker (local-first) — Fase 1

## Upstream clonados (`upstream/`)
| Repo | Licencia | Stack | Valor |
|---|---|---|---|
| getify/youperiod.app | MIT | JS vanilla PWA, IndexedDB + cifrado local | **Base principal**: PWA estática, privacidad local-first, service worker. Reutilizable casi directo. |
| adulbrich/ephira | MIT | Expo/React Native, SQLite+Drizzle, Zustand | UI de calendario, modelo de datos (flow, síntomas, ánimo, medicación), lógica de predicción. Portar a web. |
| EmmaTellblom/Mensinator | MIT | Kotlin/Android | Algoritmo de predicción (media de ciclos, ovulación, fase lútea) y export/import JSON. Referencia. |
| gitlab bloodyhealth/drip | GPL-3.0 | React Native | Sintotérmica (temperatura, moco cervical, NFP). **Solo referencia de ideas** (no copiar código para no contaminar con GPL). |

Descartados: J-shw/Menstrudel (GPL-3, Flutter), VoxDroid/CycleOne (GPL-3, Swift), Lunabelle (AGPL, Kotlin).

## Plan de ensamblaje
PWA estática (Vite + TS o vanilla) en `app/`: shell y almacenamiento cifrado de youperiod (MIT) + modelo de datos/UI de ephira (MIT) + predicción estilo Mensinator reimplementada en TS. Sin backend, export/import JSON, deploy en Cloudflare Pages. Mantener avisos de licencia MIT.

## Upstream agregados en ronda 4 (2026-10-14)
| Repo | Licencia (LICENSE real) | Uso |
|---|---|---|
| nwcell/ics.js | MIT | Export .ics de periodos previstos (`app/third_party/ics.js`) |
| IraSoro/peri | MIT (logo aparte, no usado) | Textos de fases/síntomas en español (`app/app/phases.js`) |
| electricg/period-tracker | MIT | Evaluado, no usado |
