import { describe, expect, it } from 'vitest'
import { addDays, diffDays } from './dates.ts'
import {
  confidenceFor,
  cycleModel,
  isIrregular,
  ovulationCycleDay,
  periodStarts,
  predict,
  sampleSd,
  weightedMean,
} from './predict.ts'
import type { DayLog, Flow } from '../types.ts'

function bleed(flow: Flow = 'medium'): DayLog {
  return { flow, symptoms: [], moods: [], note: '' }
}

describe('weighted cycle math', () => {
  it('weights the newest length the most', () => {
    expect(weightedMean([21, 35])).toBeCloseTo(91 / 3, 8)
    expect(Math.round(weightedMean([21, 35]) ?? 0)).toBe(30)
  })

  it('uses the last N lengths only', () => {
    const days: Record<string, DayLog> = {
      '2025-06-01': bleed(),
      '2025-06-21': bleed(),
      '2025-07-11': bleed(),
      '2025-07-31': bleed(),
      '2025-09-09': bleed(),
    }
    const result = predict(days, 3, '2025-09-09')
    expect(result.lengths).toEqual([20, 20, 40])
    expect(result.predictedLength).toBe(30)
  })

  it('flags wide variation and keeps a date', () => {
    expect(sampleSd([20, 40, 25])).toBeCloseTo(10.408, 2)
    expect(isIrregular([20, 40, 25], sampleSd([20, 40, 25]))).toBe(true)
    expect(confidenceFor(3, sampleSd([20, 40, 25]), true)).toBe('low')
  })
})

describe('predict', () => {
  it('does not invent a date from a single start', () => {
    const result = predict({ '2026-03-02': bleed('heavy') }, 6, '2026-03-02')
    expect(result.confidence).toBe('none')
    expect(result.nextPeriod).toBeNull()
    expect(result.cycleDay).toBe(1)
    expect(result.phase).toBe('menstrual')
    expect(result.lengths).toEqual([])
  })

  it('places ovulation 14 days before the next start', () => {
    const days: Record<string, DayLog> = {
      '2025-12-04': bleed(),
      '2025-12-05': bleed('light'),
      '2026-01-01': bleed(),
      '2026-01-02': bleed(),
      '2026-01-03': bleed(),
      '2026-01-04': bleed('light'),
      '2026-01-05': bleed('heavy'),
    }
    const result = predict(days, 6, '2026-01-10')
    expect(result.lengths).toEqual([28])
    expect(result.predictedLength).toBe(28)
    expect(result.confidence).toBe('low')
    expect(result.nextPeriod).toBe('2026-01-29')
    expect(result.ovulation).toBe('2026-01-15')
    expect(diffDays(result.ovulation ?? '', result.nextPeriod ?? '')).toBe(14)
    expect(result.fertileStart).toBe('2026-01-10')
    expect(result.fertileEnd).toBe('2026-01-16')
    expect(result.fertileIsNextCycle).toBe(false)
    expect(result.cycleDay).toBe(10)
    expect(result.phase).toBe('follicular')
    expect(ovulationCycleDay(28)).toBe(15)
    expect(cycleModel('2026-01-01', 28).ovulationCycleDay).toBe(
      diffDays('2026-01-01', '2026-01-15') + 1,
    )
  })

  it('names phases around the estimated ovulation day', () => {
    const days: Record<string, DayLog> = {
      '2025-12-04': bleed(),
      '2026-01-01': bleed(),
      '2026-01-02': bleed(),
      '2026-01-03': bleed(),
      '2026-01-04': bleed(),
      '2026-01-05': bleed(),
    }
    expect(predict(days, 6, '2026-01-03').phase).toBe('menstrual')
    expect(predict(days, 6, '2026-01-14').phase).toBe('ovulatory')
    expect(predict(days, 6, '2026-01-15').phase).toBe('ovulatory')
    expect(predict(days, 6, '2026-01-16').phase).toBe('ovulatory')
    expect(predict(days, 6, '2026-01-17').phase).toBe('luteal')
  })

  it('treats a blank today after bleeding as an open period', () => {
    const days: Record<string, DayLog> = {
      '2026-04-01': bleed(),
      '2026-04-02': bleed(),
    }
    const open = predict(days, 6, '2026-04-03')
    expect(open.periodOpen).toBe(true)
    expect(open.phase).toBe('menstrual')
    const closed = predict({ ...days, '2026-04-03': bleed('none') }, 6, '2026-04-03')
    expect(closed.periodOpen).toBe(false)
    expect(closed.phase).toBeNull()
  })

  it('ignores future starts and implausible gaps', () => {
    const days: Record<string, DayLog> = {
      '2026-01-01': bleed(),
      '2026-01-02': bleed(),
      '2026-01-10': bleed(),
      '2026-03-01': bleed(),
    }
    expect(periodStarts({ '2026-01-01': bleed(), '2026-01-02': bleed() })).toEqual(['2026-01-01'])
    expect(periodStarts(days, '2026-02-01')).toEqual(['2026-01-01', '2026-01-10'])
    const result = predict(days, 6, '2026-02-01')
    expect(result.lengths).toEqual([])
    expect(result.lastStart).toBe('2026-01-10')
    expect(addDays('2026-01-01', 9)).toBe('2026-01-10')
  })

  it('gives high confidence when several cycles agree', () => {
    const starts = ['2026-01-01', '2026-01-29', '2026-02-26', '2026-03-26', '2026-04-23']
    const days: Record<string, DayLog> = {}
    for (const start of starts) days[start] = bleed()
    const result = predict(days, 6, '2026-04-23')
    expect(result.lengths).toEqual([28, 28, 28, 28])
    expect(result.sd).toBe(0)
    expect(result.irregular).toBe(false)
    expect(result.confidence).toBe('high')
    expect(result.predictedLength).toBe(28)
  })
})
