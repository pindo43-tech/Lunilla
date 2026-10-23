import { formatISODate } from './dates.ts'
import { isBleed } from './predict.ts'
import type { DayLog, Flow } from '../types.ts'

/**
 * Generador de matriz anual (12 meses) de intensidad de flujo menstrual ("Year in Pixels" / Heatmap).
 * Inspirado en mrzmyr/pixy-mood-tracker-app y wa0x6e/cal-heatmap (MIT License).
 * Construye una tira de los últimos 12 meses hasta el mes actual con la intensidad diaria de sangrado.
 */

export interface StripDay {
  iso: string
  dayOfMonth: number
  flow: Flow | null
}

export interface MonthStrip {
  year: number
  monthIndex: number
  key: string // YYYY-MM
  days: StripDay[]
  bleedCount: number
}

export function daysInMonth(year: number, monthIndex: number): number {
  return new Date(year, monthIndex + 1, 0).getDate()
}

export function buildTwelveMonthStrip(
  days: Record<string, DayLog>,
  today: string,
): MonthStrip[] {
  const parts = today.split('-').map(Number)
  const endYear = parts[0] ?? 2026
  const endMonthIndex = (parts[1] ?? 1) - 1

  const strips: MonthStrip[] = []

  // Desde hace 11 meses hasta el mes actual (total 12 meses en orden cronológico)
  for (let offset = 11; offset >= 0; offset -= 1) {
    const d = new Date(endYear, endMonthIndex - offset, 1)
    const year = d.getFullYear()
    const monthIndex = d.getMonth()
    const key = `${year}-${String(monthIndex + 1).padStart(2, '0')}`
    const totalDays = daysInMonth(year, monthIndex)

    const monthDays: StripDay[] = []
    let bleedCount = 0

    for (let day = 1; day <= totalDays; day += 1) {
      const iso = formatISODate(year, monthIndex, day)
      const log = days[iso]
      const flow = log?.flow ?? null
      if (isBleed(log)) {
        bleedCount += 1
      }
      monthDays.push({
        iso,
        dayOfMonth: day,
        flow,
      })
    }

    strips.push({
      year,
      monthIndex,
      key,
      days: monthDays,
      bleedCount,
    })
  }

  return strips
}
