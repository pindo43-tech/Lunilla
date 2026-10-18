/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   Origen: w3c/aria-practices, content/patterns/dialog-modal/examples/js/datepicker-dialog.js
 *   (clase DatePickerDialog: handleDayKeyDown, moveFocusTo*, changeMonth, setFocusDay), commit 0f765e4dc33e966026114ac12a8380db1de3b787.
 *   Aviso completo: third_party/LICENSE-W3C-APG.txt
 *
 *   LUNA: cambios respecto del original
 *   1. Solo la navegación por teclado de la grilla de días (sin diálogo, textbox ni botones de mes/año).
 *   2. Funciones puras sobre Date en vez de métodos de clase (para poder testearlas en Node): `keyTarget(day, key, shift, lastDate)`.
 *   3. Semana de lunes a domingo (el calendario de Luna empieza el lunes): Home/End van a lunes/domingo
 *      (el original usa domingo-sábado con `getDay()`).
 *   4. `rovingFocus(cells, iso)` reemplaza a `setFocusDay` y trabaja con botones `data-d="AAAA-MM-DD"`.
 *   5. Esc/Enter/Espacio/Tab no se interceptan: los días son <button> y Enter/Espacio ya abren el registro del día.
 */

// changeMonth del original: mismo día del mes (lastDate) recortado al último día del mes destino
export function changeMonth(currentDate, numMonths, lastDate) {
  const getDays = (year, month) => new Date(year, month, 0).getDate();
  const isPrev = numMonths < 0;
  const numYears = Math.trunc(Math.abs(numMonths) / 12);
  numMonths = Math.abs(numMonths) % 12;
  const newYear = isPrev ? currentDate.getFullYear() - numYears : currentDate.getFullYear() + numYears;
  const newMonth = isPrev ? currentDate.getMonth() - numMonths : currentDate.getMonth() + numMonths;
  const newDate = new Date(newYear, newMonth, 1);
  const daysInMonth = getDays(newDate.getFullYear(), newDate.getMonth() + 1);
  lastDate = lastDate ? lastDate : currentDate.getDate();
  if (lastDate > daysInMonth) newDate.setDate(daysInMonth);
  else newDate.setDate(lastDate);
  return newDate;
}

/** Día al que se mueve el foco para una tecla, o null si la tecla no es de navegación. */
export function keyTarget(day, key, shift = false, lastDate = null) {
  const d = new Date(day);
  switch (key) {
    case 'Right': case 'ArrowRight': d.setDate(d.getDate() + 1); return d;
    case 'Left': case 'ArrowLeft': d.setDate(d.getDate() - 1); return d;
    case 'Down': case 'ArrowDown': d.setDate(d.getDate() + 7); return d;
    case 'Up': case 'ArrowUp': d.setDate(d.getDate() - 7); return d;
    case 'PageUp': return changeMonth(day, shift ? -12 : -1, lastDate);
    case 'PageDown': return changeMonth(day, shift ? 12 : 1, lastDate);
    case 'Home': d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return d; // LUNA: lunes
    case 'End': d.setDate(d.getDate() + (6 - (d.getDay() + 6) % 7)); return d; // LUNA: domingo
  }
  return null;
}

/** setFocusDay del original: un solo día con tabIndex 0 (roving tabindex); los demás -1. */
export function rovingFocus(cells, iso, flag = true) {
  for (const dayNode of cells) {
    dayNode.tabIndex = -1;
    if (dayNode.dataset.d === iso) {
      dayNode.tabIndex = 0;
      if (flag) dayNode.focus();
    }
  }
}
