# Estado

- 2026-10-23
- En vivo: https://lunilla.pages.dev — HTTP 200 en `/`, `/app` y `/app/summary`, con el HTML de Lunilla.
- Repo: https://github.com/pindo43-tech/Lunilla
- Tests: `npm test` ejecuta 41 pruebas (12 suites) 100% en verde. Build de producción verificado con `npm run build`.

Qué anda:
- Registro menstrual cifrado en el cliente con PIN (PBKDF2-SHA256 100k iteraciones + AES-GCM + Dexie IndexedDB).
- Hoy: día del ciclo, fase actual con tarjeta educativa desplegable (menstrual, folicular, ovulatoria, lútea en ES/EN, adaptado de peri MIT) y aviso orientativo ACOG de sangrado continuo (>7 días).
- Calendario: matriz mensual con días de período, ventana fértil y período estimado coloreados.
- Resumen: métricas de ciclo, gráfico Sparkline SVG de evolución de duraciones (adaptado de fnando/sparkline MIT), tira anual de 12 meses (heatmap de flujo), patrones de síntomas/ánimo por fase ($\ge 3$ ciclos), edición y borrado de períodos.
- Ajustes: idioma (español/inglés), tiempo de auto-bloqueo, modo discreto ("Notas"), cambio de PIN seguro, exportación a iCalendar (.ics para Apple/Google Calendar sin conexión), exportación de bitácora tabular a CSV con UTF-8 BOM, copia de seguridad cifrada en JSON (exportar/importar) y borrado total.
- Calidad y CI: Node fijado en `.node-version` (`22.11.0`), `engines` en `package.json`, workflow automatizado de CI en `.github/workflows/ci.yml`. Residuos obsoletos de scrapers y bundles de git depurados.
