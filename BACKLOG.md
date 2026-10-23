# BACKLOG & PROGRESO DE ENSAMBLAJE — Lunilla

## Plan de Ejecución Autónomo
Lunilla es un registro menstrual local-first (PWA) privado para jóvenes, sin cuenta, sin nube ni analíticas.
Este backlog estructura las mejoras y ensamblajes de módulos desde `REPOS_A_ENSAMBLAR.md` y `LATER.md`, ordenadas de menor a mayor complejidad con cero código muerto y tests automatizados.

---

### Tareas en Cola y Progreso

- [x] **Tarea 1: Higiene estructural, estandarización de Node y CI/CD**
  - Origen: Auditoría de arquitectura & `DEPLOY.md`.
  - Acción: Crear `.node-version`, fijar `engines` en `package.json`, workflow `.github/workflows/ci.yml` para GitHub Actions, y purgar residuos obsoletos (`aporte-grok-bot/`).

- [x] **Tarea 2: Información educativa por fase del ciclo (IraSoro/peri MIT)**
  - Origen: `REPOS_A_ENSAMBLAR.md` (G1-02 / `IraSoro/peri`) y `LATER.md` (Punto 4: texto corto de cada fase sin diagnóstico).
  - Acción: Implementar `src/lib/phases.ts` con descripciones de fases hormonales y síntomas comunes (bilingüe `es`/`en`), componente explicativo en `HomePage`, y suite de tests `src/lib/phases.test.ts`.

- [x] **Tarea 3: Regla de seguridad ACOG para sangrado prolongado (HYPERSAHIL/periodtracker MIT)**
  - Origen: `REPOS_A_ENSAMBLAR.md` (G1-01 / `HYPERSAHIL/periodtracker`).
  - Acción: Alerta educativa no alarmista cuando el sangrado actual supere 7 días continuos en `src/lib/safety.ts`, con visualización en `HomePage` y tests en `src/lib/safety.test.ts`.

- [x] **Tarea 4: Exportación offline a iCalendar .ics (nwcell/ics.js MIT)**
  - Origen: `REPOS_A_ENSAMBLAR.md` (G1-26 / `nwcell/ics.js`).
  - Acción: Generador RFC 5545 iCalendar (`src/lib/ics.ts`) para exportar los próximos 3 períodos al calendario nativo de iOS/Android/Mac sin conexión, botón en `SettingsPage`/`SummaryPage`, y tests en `src/lib/ics.test.ts`.

- [x] **Tarea 5: Sparkline SVG de evolución de ciclos (fnando/sparkline MIT)**
  - Origen: `REPOS_A_ENSAMBLAR.md` (G3-03 / `fnando/sparkline`).
  - Acción: Componente gráfico reactivo SVG (`src/components/Sparkline.tsx`) en `SummaryPage` para ver la curva de duración de ciclos con puntos y guía promedio, con tests en `src/lib/sparkline.test.ts`.

- [x] **Tarea 6: Análisis de patrones Síntomas ↔ Fase (adulbrich/ephira & EmmaTellblom/Mensinator MIT)**
  - Origen: `LATER.md` (Punto 5: síntomas por fase con $\ge 3$ ciclos) y `REPOS_A_ENSAMBLAR.md` (G1-09).
  - Acción: Motor estadístico `src/lib/patterns.ts` que calcula la correlación de síntomas y estados de ánimo con cada fase cuando hay al menos 3 ciclos registrados, tarjeta en `SummaryPage`, y tests en `src/lib/patterns.test.ts`.

- [x] **Tarea 7: Exportación tabular a CSV para profesionales de salud**
  - Origen: `REPOS_A_ENSAMBLAR.md` (G1-25).
  - Acción: Función `src/lib/csv.ts` para exportar el historial a CSV compatible con Excel/Numbers, botón en `SettingsPage`, y tests en `src/lib/csv.test.ts`.

- [x] **Tarea 8: Vista anual de 12 meses (Heatmap de ciclos)**
  - Origen: `LATER.md` (Punto 6: tira de 12 meses por intensidad de flujo).
  - Acción: Cuadrícula visual anual en `CalendarPage` o `SummaryPage` con intensidad de sangrado y regularidad visual por mes.

- [x] **Tarea 9: Aviso de instalación PWA descartable**
  - Origen: `LATER.md` (Punto 8: aviso de instalación, se puede cerrar).
  - Acción: Banner `InstallPrompt.tsx` con instrucciones para iOS/Android, descartable una sola vez mediante `localStorage`, no invasivo, con tests en `src/lib/installPrompt.test.ts`.

- [x] **Tarea 10: Configuración flexible de anticipación de aviso de regla**
  - Origen: `LATER.md` (Punto 7: aviso de regla con anticipación configurable de 1 a 3 días).
  - Acción: Guardar `reminderDaysBefore` (1, 2 o 3 días) en `settings`, selector en `SettingsPage`, soporte en `useReminder` y sanitización en `src/lib/schema.ts` con tests.

- [x] **Tarea 11: Resumen médico clínico para consulta (Print / PDF)**
  - Origen: `REPOS_A_ENSAMBLAR.md` (G1-15 / `LATER.md`).
  - Acción: Generador y vista de reporte clínico con formato limpio para imprimir (`window.print()`), con estadísticas de duración, regularidad, síntomas frecuentes y notas de consulta.

- [ ] **Tarea 12: Gráfico de Temperatura Basal (BBT) y Coverline (sunbeamstudiosdev/Coverline MIT)**
  - Origen: `REPOS_A_ENSAMBLAR.md` (G1-03 / `sunbeamstudiosdev/Coverline`).
  - Acción: Detección del salto térmico del ciclo actual y cálculo de la línea de base (coverline) sintotérmica, con gráfico SVG integrado.
