import { describe, expect, it } from 'vitest'
import { generateClinicalReport } from './clinicalReport.ts'
import type { DayLog } from '../types.ts'

function emptyDay(): DayLog {
  return { flow: null, symptoms: [], moods: [], note: '', basalTemp: null, mucus: null }
}

describe('generateClinicalReport', () => {
  it('returns empty report structure when there are no logs', () => {
    const report = generateClinicalReport({}, 6, '2026-05-10')
    expect(report.generatedDate).toBe('2026-05-10')
    expect(report.totalDaysLogged).toBe(0)
    expect(report.totalPeriods).toBe(0)
    expect(report.measuredCyclesCount).toBe(0)
    expect(report.averageCycleLength).toBeNull()
    expect(report.shortestCycle).toBeNull()
    expect(report.longestCycle).toBeNull()
    expect(report.averagePeriodLength).toBeNull()
    expect(report.regularity).toBe('unknown')
    expect(report.cycles).toHaveLength(0)
    expect(report.topSymptoms).toHaveLength(0)
    expect(report.topMoods).toHaveLength(0)
    expect(report.hasPhysiologicalData).toBe(false)
  })

  it('calculates cycle rows, averages, symptoms, and physiological metrics', () => {
    const days: Record<string, DayLog> = {
      // Period 1: Jan 1 to Jan 4 (4 days)
      '2026-01-01': { ...emptyDay(), flow: 'heavy', symptoms: [{ id: 'cramps', intensity: 3 }] },
      '2026-01-02': { ...emptyDay(), flow: 'medium', symptoms: [{ id: 'cramps', intensity: 2 }] },
      '2026-01-03': { ...emptyDay(), flow: 'light', moods: [{ id: 'tired', intensity: 2 }] },
      '2026-01-04': { ...emptyDay(), flow: 'light' },
      // Mid-cycle day with BBT and cervical mucus
      '2026-01-14': { ...emptyDay(), basalTemp: 36.4, mucus: 'eggwhite' },
      '2026-01-15': { ...emptyDay(), basalTemp: 36.8, mucus: 'eggwhite' },
      // Period 2: Jan 29 to Feb 1 (4 days, 28-day cycle)
      '2026-01-29': { ...emptyDay(), flow: 'heavy', symptoms: [{ id: 'headache', intensity: 2 }] },
      '2026-01-30': { ...emptyDay(), flow: 'medium' },
      '2026-01-31': { ...emptyDay(), flow: 'light' },
      '2026-02-01': { ...emptyDay(), flow: 'light' },
      // Period 3: Feb 28 to Mar 3 (30-day cycle)
      '2026-02-28': { ...emptyDay(), flow: 'heavy', symptoms: [{ id: 'cramps', intensity: 1 }] },
      '2026-03-01': { ...emptyDay(), flow: 'medium' },
      '2026-03-02': { ...emptyDay(), flow: 'light' },
      '2026-03-03': { ...emptyDay(), flow: 'light' },
    }

    const report = generateClinicalReport(days, 6, '2026-03-10')
    expect(report.totalDaysLogged).toBe(14)
    expect(report.totalPeriods).toBe(3)
    expect(report.measuredCyclesCount).toBe(2)
    expect(report.cycles).toHaveLength(3)

    // Cycle 1: 2026-01-01 to 2026-01-29 = 28 days
    expect(report.cycles[0]?.cycleLength).toBe(28)
    expect(report.cycles[0]?.periodLength).toBe(4)

    // Cycle 2: 2026-01-29 to 2026-02-28 = 30 days
    expect(report.cycles[1]?.cycleLength).toBe(30)
    expect(report.cycles[1]?.periodLength).toBe(4)

    // Cycle 3: current, cycleLength is null
    expect(report.cycles[2]?.cycleLength).toBeNull()

    expect(report.averageCycleLength).toBe(29)
    expect(report.shortestCycle).toBe(28)
    expect(report.longestCycle).toBe(30)
    expect(report.averagePeriodLength).toBe(4)

    // Symptoms: cramps appeared 3 times, headache 1 time
    expect(report.topSymptoms[0]?.id).toBe('cramps')
    expect(report.topSymptoms[0]?.count).toBe(3)

    // Physiological metrics
    expect(report.hasPhysiologicalData).toBe(true)
    expect(report.bbtCount).toBe(2)
    expect(report.bbtMin).toBe(36.4)
    expect(report.bbtMax).toBe(36.8)
    expect(report.mucusCounts.eggwhite).toBe(2)
    expect(report.mucusCounts.creamy).toBe(0)
  })
})
