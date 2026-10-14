import { LUTEAL_DAYS, MAX_CYCLE_DAYS, MIN_CYCLE_DAYS } from './constants.ts'
import { addDays, diffDays } from './dates.ts'
import type { Confidence, DayLog, PhaseName, Prediction } from '../types.ts'

/** Local cycle estimate. Formulas live in docs/prediction-math.md. */

export function isBleed(day: DayLog | undefined): boolean {
  return day?.flow === 'light' || day?.flow === 'medium' || day?.flow === 'heavy'
}

export function hasDay(days: Record<string, DayLog>, iso: string): boolean {
  return Object.prototype.hasOwnProperty.call(days, iso)
}

export function periodStarts(days: Record<string, DayLog>, today?: string): string[] {
  const dates = Object.keys(days)
    .filter((iso) => isBleed(days[iso]) && (today === undefined || iso <= today))
    .sort()
  const starts: string[] = []
  let previous: string | null = null
  for (const iso of dates) {
    if (previous === null || diffDays(previous, iso) > 1) starts.push(iso)
    previous = iso
  }
  return starts
}

export function bleedSpan(start: string, days: Record<string, DayLog>): { end: string; length: number } {
  let end = start
  let length = 1
  let cursor = start
  while (length < 40) {
    const next = addDays(cursor, 1)
    if (!isBleed(days[next])) break
    cursor = next
    end = next
    length += 1
  }
  return { end, length }
}

export function cycleLengths(starts: string[]): number[] {
  const lengths: number[] = []
  for (let index = 0; index < starts.length - 1; index += 1) {
    const from = starts[index]
    const to = starts[index + 1]
    if (!from || !to) continue
    const length = diffDays(from, to)
    if (length >= MIN_CYCLE_DAYS && length <= MAX_CYCLE_DAYS) lengths.push(length)
  }
  return lengths
}

/** Oldest length in the window has weight 1. The newest has weight m. */
export function weightedMean(lengths: number[]): number | null {
  if (lengths.length === 0) return null
  let weight = 0
  let total = 0
  lengths.forEach((length, index) => {
    const w = index + 1
    weight += w
    total += length * w
  })
  return total / weight
}

export function arithmeticMean(lengths: number[]): number | null {
  if (lengths.length === 0) return null
  return lengths.reduce((sum, length) => sum + length, 0) / lengths.length
}

export function sampleSd(lengths: number[]): number | null {
  if (lengths.length < 2) return null
  const mean = arithmeticMean(lengths)
  if (mean === null) return null
  const variance = lengths.reduce((sum, length) => sum + (length - mean) ** 2, 0) / (lengths.length - 1)
  return Math.sqrt(variance)
}

export function isIrregular(lengths: number[], sd: number | null): boolean {
  if (lengths.length < 3 || sd === null) return false
  const range = Math.max(...lengths) - Math.min(...lengths)
  return sd >= 7 || range >= 10
}

export function confidenceFor(count: number, sd: number | null, irregular: boolean): Confidence {
  if (count < 1) return 'none'
  if (count === 1 || irregular || (sd !== null && sd > 6)) return 'low'
  if (count >= 4 && sd !== null && sd <= 4) return 'high'
  return 'medium'
}

/** Cycle day of ovulation when the next start is `length` days after day 1 and the luteal gap is 14 dates. */
export function ovulationCycleDay(length: number): number {
  return length - LUTEAL_DAYS + 1
}

export function cycleModel(periodStart: string, length: number) {
  const nextPeriod = addDays(periodStart, length)
  const ovulation = addDays(nextPeriod, -LUTEAL_DAYS)
  return {
    nextPeriod,
    ovulation,
    ovulationCycleDay: ovulationCycleDay(length),
    fertileStart: addDays(ovulation, -5),
    fertileEnd: addDays(ovulation, 1),
  }
}

export function predict(
  days: Record<string, DayLog>,
  historyLength: number,
  today: string,
  typicalCycleLength?: number | null,
): Prediction {
  const starts = periodStarts(days, today)
  const lastStart = starts.length > 0 ? (starts[starts.length - 1] ?? null) : null
  const windowSize = clamp(historyLength, 3, 12)
  const lengths = cycleLengths(starts).slice(-windowSize)
  const weighted = weightedMean(lengths)
  const mean = arithmeticMean(lengths)
  const sd = sampleSd(lengths)
  const irregular = isIrregular(lengths, sd)
  const typical = typeof typicalCycleLength === 'number'
    && typicalCycleLength >= MIN_CYCLE_DAYS
    && typicalCycleLength <= MAX_CYCLE_DAYS
    ? Math.round(typicalCycleLength)
    : null
  const usingTypical = lastStart !== null && lengths.length === 0 && typical !== null
  const confidence = usingTypical ? 'low' : confidenceFor(lengths.length, sd, irregular)
  const predictedLength = weighted === null ? (usingTypical ? typical : null) : Math.round(weighted)

  const base: Prediction = {
    lengths,
    weightedMean: weighted,
    mean,
    sd,
    irregular,
    confidence,
    cyclesUsed: lengths.length,
    lengthSource: predictedLength === null ? 'none' : usingTypical ? 'typical' : 'measured',
    predictedLength,
    lastStart,
    cycleDay: null,
    phase: null,
    nextPeriod: null,
    daysUntil: null,
    ovulation: null,
    fertileStart: null,
    fertileEnd: null,
    fertileIsNextCycle: false,
    periodOpen: false,
    bleedLength: null,
    bleedEnd: null,
  }

  if (!lastStart) return base

  const span = bleedSpan(lastStart, days)
  const periodOpen = !hasDay(days, today) && span.end === addDays(today, -1)
  const cycleDay = today >= lastStart ? diffDays(lastStart, today) + 1 : null
  base.periodOpen = periodOpen
  base.bleedLength = span.length
  base.bleedEnd = span.end
  base.cycleDay = cycleDay
  base.phase = resolvePhase(today, span.end, periodOpen, cycleDay, predictedLength)

  if (predictedLength === null) return base

  const current = cycleModel(lastStart, predictedLength)
  base.nextPeriod = current.nextPeriod
  base.daysUntil = diffDays(today, current.nextPeriod)
  if (today <= current.fertileEnd) {
    base.ovulation = current.ovulation
    base.fertileStart = current.fertileStart
    base.fertileEnd = current.fertileEnd
  } else {
    const upcoming = cycleModel(current.nextPeriod, predictedLength)
    base.ovulation = upcoming.ovulation
    base.fertileStart = upcoming.fertileStart
    base.fertileEnd = upcoming.fertileEnd
    base.fertileIsNextCycle = true
  }
  return base
}

function resolvePhase(
  today: string,
  bleedEnd: string,
  periodOpen: boolean,
  cycleDay: number | null,
  predictedLength: number | null,
): PhaseName | null {
  if (cycleDay === null) return null
  if (today <= bleedEnd || periodOpen) return 'menstrual'
  if (predictedLength === null) return null
  const ovulationDay = ovulationCycleDay(predictedLength)
  if (Math.abs(cycleDay - ovulationDay) <= 1) return 'ovulatory'
  if (cycleDay < ovulationDay) return 'follicular'
  return 'luteal'
}

export function visualBleedLength(prediction: Prediction): number {
  if (prediction.bleedLength !== null && prediction.bleedLength >= 2) return prediction.bleedLength
  return 5
}

export function isFertileDay(iso: string, prediction: Prediction): boolean {
  if (!prediction.fertileStart || !prediction.fertileEnd) return false
  return iso >= prediction.fertileStart && iso <= prediction.fertileEnd
}

export function isPredictedPeriodDay(iso: string, prediction: Prediction, today: string): boolean {
  if (!prediction.nextPeriod || iso < today) return false
  const end = addDays(prediction.nextPeriod, visualBleedLength(prediction) - 1)
  return iso >= prediction.nextPeriod && iso <= end
}

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min
  return Math.min(max, Math.max(min, Math.round(value)))
}
