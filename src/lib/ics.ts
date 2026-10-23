import { addDays } from './dates.ts'
import { visualBleedLength } from './predict.ts'
import type { Locale, Prediction } from '../types.ts'

/**
 * Generador de archivos iCalendar (.ics) conforme a RFC 5545.
 * Adaptado de nwcell/ics.js (MIT License, (c) 2018 Travis Krause).
 * Permite exportar los períodos estimados a la app de calendario nativa sin conexión.
 */

export interface CalendarEvent {
  uid: string
  title: string
  description: string
  startIso: string // YYYY-MM-DD
  endIsoInclusive: string // YYYY-MM-DD
}

const CRLF = '\r\n'

export function escapeIcsText(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n')
}

export function toIcsDate(iso: string): string {
  return iso.replace(/-/g, '')
}

export function generateIcsContent(events: CalendarEvent[], prodId = '-//Lunilla//Period Tracker//ES'): string {
  const now = new Date()
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}/, '')

  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:${prodId}`,
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
  ]

  for (const event of events) {
    // RFC 5545 §3.6.1: En eventos de día completo (VALUE=DATE), DTEND es exclusivo (+1 día del fin)
    const dtstart = toIcsDate(event.startIso)
    const dtend = toIcsDate(addDays(event.endIsoInclusive, 1))

    lines.push('BEGIN:VEVENT')
    lines.push(`UID:${event.uid}`)
    lines.push(`DTSTAMP:${now}`)
    lines.push(`DTSTART;VALUE=DATE:${dtstart}`)
    lines.push(`DTEND;VALUE=DATE:${dtend}`)
    lines.push(`SUMMARY:${escapeIcsText(event.title)}`)
    if (event.description) {
      lines.push(`DESCRIPTION:${escapeIcsText(event.description)}`)
    }
    lines.push('TRANSP:TRANSPARENT') // No bloquea horario ocupado
    lines.push('END:VEVENT')
  }

  lines.push('END:VCALENDAR')
  return lines.join(CRLF) + CRLF
}

export function buildUpcomingPeriodsIcs(
  prediction: Prediction,
  today: string,
  locale: Locale,
): string | null {
  if (!prediction.nextPeriod || !prediction.predictedLength) {
    return null
  }

  const bleedLen = visualBleedLength(prediction)
  const events: CalendarEvent[] = []
  let cursor = prediction.nextPeriod
  const title = locale === 'en' ? 'Period (estimated)' : 'Período (estimado)'
  const desc = locale === 'en'
    ? 'Educational cycle prediction by Lunilla. Not a medical device.'
    : 'Predicción educativa del ciclo por Lunilla. No es un dispositivo médico.'

  for (let i = 0; i < 3; i += 1) {
    // Si la fecha ya quedó en el pasado respecto a hoy, avanzar un ciclo
    while (cursor < today) {
      cursor = addDays(cursor, prediction.predictedLength)
    }
    const end = addDays(cursor, Math.max(1, bleedLen - 1))
    events.push({
      uid: `lunilla-pred-${cursor}@lunilla.local`,
      title,
      description: desc,
      startIso: cursor,
      endIsoInclusive: end,
    })
    cursor = addDays(cursor, prediction.predictedLength)
  }

  return generateIcsContent(events)
}

export function downloadIcsFile(filename: string, content: string): void {
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}
