import { MAX_CYCLE_DAYS, MAX_PERIOD_DAYS, MIN_CYCLE_DAYS } from './constants.ts'
import { addDays, diffDays, isISODate } from './dates.ts'
import { emptyDay, isEmptyDay } from './schema.ts'
import { arithmeticMean, bleedSpan, isBleed, isIrregular, periodStarts, sampleSd } from './predict.ts'
import type { DayLog, Flow, Vault } from '../types.ts'

export type CycleEditError = 'date' | 'order' | 'span' | 'overlap' | 'future'

export interface LoggedPeriod {
  start: string
  end: string
  periodLength: number
  /** Days from this start to the next logged start. Null while this period is the latest. */
  cycleLength: number | null
  /** The gap is stored, but it is outside 15–90 and stays out of the averages. */
  gapExcluded: boolean
}

export interface CycleSummary {
  /** Plausible intervals inside the same window the prediction uses. */
  measured: number[]
  weak: boolean
  averageCycle: number | null
  shortest: number | null
  longest: number | null
  averagePeriod: number | null
  periodCount: number
  singlePeriodLength: number | null
  regularity: 'unknown' | 'steady' | 'variable'
  topSymptoms: Array<{ id: string; count: number }>
}

export function listPeriods(days: Record<string, DayLog>, today?: string): LoggedPeriod[] {
  const starts = periodStarts(days, today)
  return starts.map((start, index) => {
    const span = bleedSpan(start, days)
    const next = starts[index + 1]
    const cycleLength = next ? diffDays(start, next) : null
    const gapExcluded = cycleLength !== null && (cycleLength < MIN_CYCLE_DAYS || cycleLength > MAX_CYCLE_DAYS)
    return {
      start,
      end: span.end,
      periodLength: span.length,
      cycleLength,
      gapExcluded,
    }
  })
}

export function summarize(days: Record<string, DayLog>, historyLength: number, today: string): CycleSummary {
  const periods = listPeriods(days, today)
  const window = clamp(historyLength, 3, 12)
  const measured = periods
    .map((period) => period.cycleLength)
    .filter((length): length is number => length !== null && length >= MIN_CYCLE_DAYS && length <= MAX_CYCLE_DAYS)
    .slice(-window)
  const periodLengths = periods.map((period) => period.periodLength)
  const weak = measured.length < 2
  const mean = arithmeticMean(measured)
  const sd = sampleSd(measured)
  const range = measured.length === 0 ? 0 : Math.max(...measured) - Math.min(...measured)
  let regularity: CycleSummary['regularity'] = 'unknown'
  if (!weak) {
    const variable = isIrregular(measured, sd) || (measured.length === 2 && range >= 10)
    regularity = variable ? 'variable' : 'steady'
  }
  return {
    measured,
    weak,
    averageCycle: weak || mean === null ? null : Math.round(mean),
    shortest: weak ? null : Math.min(...measured),
    longest: weak ? null : Math.max(...measured),
    averagePeriod: periodLengths.length < 2 ? null : Math.round(arithmeticMean(periodLengths) ?? 0),
    periodCount: periodLengths.length,
    singlePeriodLength: periodLengths.length === 1 ? (periodLengths[0] ?? null) : null,
    regularity,
    topSymptoms: topSymptoms(days),
  }
}

export function seedFirstPeriod(
  vault: Vault,
  start: string,
  periodDays: number,
  typicalCycleLength: number | null,
  today: string,
): { ok: true; vault: Vault } | { ok: false; error: 'date' | 'future' | 'span' } {
  if (!isISODate(start)) return { ok: false, error: 'date' }
  if (start > today) return { ok: false, error: 'future' }
  if (!Number.isInteger(periodDays) || periodDays < 1 || periodDays > MAX_PERIOD_DAYS) {
    return { ok: false, error: 'span' }
  }
  const end = addDays(start, periodDays - 1)
  const cappedEnd = end > today ? today : end
  const applied = applyPeriod(vault, null, start, cappedEnd, today)
  if (!applied.ok) return { ok: false, error: applied.error === 'span' ? 'span' : 'date' }
  const typical = typicalCycleLength !== null
    && Number.isInteger(typicalCycleLength)
    && typicalCycleLength >= MIN_CYCLE_DAYS
    && typicalCycleLength <= MAX_CYCLE_DAYS
    ? typicalCycleLength
    : null
  return {
    ok: true,
    vault: {
      ...applied.vault,
      settings: { ...applied.vault.settings, typicalCycleLength: typical },
    },
  }
}

export function applyPeriod(
  vault: Vault,
  oldStart: string | null,
  start: string,
  end: string,
  today: string,
): { ok: true; vault: Vault } | { ok: false; error: CycleEditError } {
  if (!isISODate(start) || !isISODate(end)) return { ok: false, error: 'date' }
  if (end < start) return { ok: false, error: 'order' }
  const length = diffDays(start, end) + 1
  if (length > MAX_PERIOD_DAYS) return { ok: false, error: 'span' }
  if (start > today || end > today) return { ok: false, error: 'future' }

  const others = listPeriods(vault.days).filter((period) => period.start !== oldStart)
  const range = eachDay(start, end)
  for (const other of others) {
    const otherDays = new Set(eachDay(other.start, other.end))
    const touches = range.some((iso) => otherDays.has(iso))
      || addDays(end, 1) === other.start
      || addDays(other.end, 1) === start
    if (touches) return { ok: false, error: 'overlap' }
  }

  let days = { ...vault.days }
  if (oldStart) {
    const previous = listPeriods(vault.days).find((period) => period.start === oldStart)
    if (previous) {
      for (const iso of eachDay(previous.start, previous.end)) {
        if (!range.includes(iso)) days = clearBleed(days, iso)
      }
    }
  }
  for (const iso of range) {
    const current = days[iso] ?? emptyDay()
    const flow: Flow = current.flow === 'light' || current.flow === 'medium' || current.flow === 'heavy'
      ? current.flow
      : 'medium'
    days = { ...days, [iso]: { ...current, flow } }
  }
  return { ok: true, vault: { ...vault, days } }
}

export function deletePeriod(vault: Vault, start: string): Vault {
  const period = listPeriods(vault.days).find((item) => item.start === start)
  if (!period) return vault
  let days = { ...vault.days }
  for (const iso of eachDay(period.start, period.end)) days = clearBleed(days, iso)
  return { ...vault, days }
}

function clearBleed(days: Record<string, DayLog>, iso: string): Record<string, DayLog> {
  const day = days[iso]
  if (!day || !isBleed(day)) return days
  const next = { ...day, flow: null }
  const copy = { ...days }
  if (isEmptyDay(next)) delete copy[iso]
  else copy[iso] = next
  return copy
}

function eachDay(start: string, end: string): string[] {
  const dates: string[] = []
  let cursor = start
  while (cursor <= end && dates.length < 40) {
    dates.push(cursor)
    cursor = addDays(cursor, 1)
  }
  return dates
}

function topSymptoms(days: Record<string, DayLog>): Array<{ id: string; count: number }> {
  const counts = new Map<string, number>()
  for (const day of Object.values(days)) {
    for (const tag of day.symptoms) counts.set(tag.id, (counts.get(tag.id) ?? 0) + 1)
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 3)
    .map(([id, count]) => ({ id, count }))
}

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min
  return Math.min(max, Math.max(min, Math.round(value)))
}
