// Exporta los próximos periodos previstos a un archivo .ics (Google Calendar, Apple, Outlook…).
// Generador: nwcell/ics.js (MIT, (c) 2018 Travis Krause), copia vendorizada en ../third_party/ics.js.
import { ics } from '../third_party/ics.js';
import { addDays, upcomingFrom } from './predict.js';
const local = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); }; // fecha local: evita el corrimiento de un día por UTC
export function predictionICS(p, today) {
  if (!p) return null;
  const cal = ics('lunilla.pages.dev', '-//Lunilla//Tracker menstrual//ES');
  (today ? upcomingFrom(p, today) : p.upcoming).forEach((s, k) => cal.addEvent(`Lunilla: periodo previsto${k ? ` (${k + 1})` : ''}`,
    `Predicción orientativa (± ${p.uncertainty} días). No es método anticonceptivo.`, '', local(s), local(addDays(s, p.periodLen))));
  return cal.build();
}
