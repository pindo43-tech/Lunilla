import type { Locale } from '../types.ts'

export function formatISODate(year: number, monthIndex: number, day: number): string {
  const month = String(monthIndex + 1).padStart(2, '0')
  const date = String(day).padStart(2, '0')
  return `${year}-${month}-${date}`
}

export function todayISO(now = new Date()): string {
  return formatISODate(now.getFullYear(), now.getMonth(), now.getDate())
}

export function isISODate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const [year, month, day] = value.split('-').map(Number)
  if (!year || !month || !day) return false
  const date = new Date(Date.UTC(year, month - 1, day))
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
}

function utcDate(iso: string): Date {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(Date.UTC(year ?? 1970, (month ?? 1) - 1, day ?? 1))
}

function fromUTC(date: Date): string {
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const day = String(date.getUTCDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function addDays(iso: string, days: number): string {
  const date = utcDate(iso)
  date.setUTCDate(date.getUTCDate() + days)
  return fromUTC(date)
}

export function diffDays(from: string, to: string): number {
  const ms = utcDate(to).getTime() - utcDate(from).getTime()
  return Math.round(ms / 86_400_000)
}

export function monthMatrix(year: number, monthIndex: number): Array<string | null> {
  const first = new Date(year, monthIndex, 1)
  const lead = (first.getDay() + 6) % 7
  const count = new Date(year, monthIndex + 1, 0).getDate()
  const cells: Array<string | null> = []
  for (let i = 0; i < lead; i += 1) cells.push(null)
  for (let day = 1; day <= count; day += 1) cells.push(formatISODate(year, monthIndex, day))
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

export function formatLong(iso: string, locale: Locale): string {
  return formatWith(iso, locale, { day: 'numeric', month: 'long', year: 'numeric' })
}

export function formatShort(iso: string, locale: Locale): string {
  return formatWith(iso, locale, { day: 'numeric', month: 'short' })
}

export function formatMonth(year: number, monthIndex: number, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es' : 'en', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(year, monthIndex, 1))
}

function formatWith(iso: string, locale: Locale, options: Intl.DateTimeFormatOptions): string {
  const [year, month, day] = iso.split('-').map(Number)
  const date = new Date(year ?? 1970, (month ?? 1) - 1, day ?? 1)
  return new Intl.DateTimeFormat(locale === 'es' ? 'es' : 'en', options).format(date)
}

export function formatNumber(value: number, locale: Locale, digits = 1): string {
  return value.toLocaleString(locale === 'es' ? 'es' : 'en', {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  })
}
