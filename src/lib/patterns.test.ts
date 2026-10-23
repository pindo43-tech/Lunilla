import { describe, expect, it } from 'vitest'
import { analyzePhasePatterns, determineDayPhase } from './patterns.ts'
import type { DayLog } from '../types.ts'

function emptyDay(): DayLog {
  return { flow: null, symptoms: [], moods: [], note: '', basalTemp: null, mucus: null }
}

describe('phase pattern analysis', () => {
  it('correctly determines phases of days within a cycle', () => {
    // Period start Jan 1, cycle 28 days, bleed 5 days
    // Day 1-5: menstrual
    expect(determineDayPhase('2026-01-01', '2026-01-01', 28, 5)).toBe('menstrual')
    expect(determineDayPhase('2026-01-05', '2026-01-01', 28, 5)).toBe('menstrual')
    // Day 6-13: follicular (ovulation is day 28 - 14 + 1 = 15)
    expect(determineDayPhase('2026-01-06', '2026-01-01', 28, 5)).toBe('follicular')
    expect(determineDayPhase('2026-01-13', '2026-01-01', 28, 5)).toBe('follicular')
    // Day 14-16: ovulatory (15 ± 1)
    expect(determineDayPhase('2026-01-14', '2026-01-01', 28, 5)).toBe('ovulatory')
    expect(determineDayPhase('2026-01-15', '2026-01-01', 28, 5)).toBe('ovulatory')
    expect(determineDayPhase('2026-01-16', '2026-01-01', 28, 5)).toBe('ovulatory')
    // Day 17-28: luteal
    expect(determineDayPhase('2026-01-17', '2026-01-01', 28, 5)).toBe('luteal')
    expect(determineDayPhase('2026-01-28', '2026-01-01', 28, 5)).toBe('luteal')
  })

  it('marks as ineligible when there are fewer than 3 periods recorded', () => {
    const days: Record<string, DayLog> = {
      '2026-01-01': { ...emptyDay(), flow: 'medium' },
      '2026-01-29': { ...emptyDay(), flow: 'medium' },
    }
    const analysis = analyzePhasePatterns(days, '2026-02-15')
    expect(analysis.eligible).toBe(false)
  })

  it('identifies top recurring symptoms and moods when >= 3 periods are recorded', () => {
    const days: Record<string, DayLog> = {
      // Cycle 1: starts 2026-01-01
      '2026-01-01': { ...emptyDay(), flow: 'medium', symptoms: [{ id: 'cramps', intensity: 3 }] },
      '2026-01-02': { ...emptyDay(), flow: 'light', moods: [{ id: 'irritable', intensity: 2 }] },
      '2026-01-26': { ...emptyDay(), symptoms: [{ id: 'bloating', intensity: 2 }] }, // Luteal (day 26)

      // Cycle 2: starts 2026-01-29
      '2026-01-29': { ...emptyDay(), flow: 'heavy', symptoms: [{ id: 'cramps', intensity: 2 }] },
      '2026-02-23': { ...emptyDay(), symptoms: [{ id: 'bloating', intensity: 3 }] }, // Luteal (day 26)

      // Cycle 3: starts 2026-02-26
      '2026-02-26': { ...emptyDay(), flow: 'medium', symptoms: [{ id: 'cramps', intensity: 2 }] },
      '2026-03-23': { ...emptyDay(), symptoms: [{ id: 'bloating', intensity: 1 }] }, // Luteal
    }

    const analysis = analyzePhasePatterns(days, '2026-03-25')
    expect(analysis.eligible).toBe(true)

    // Menstrual phase should have 'cramps' as top symptom
    const menstrual = analysis.patterns.menstrual
    expect(menstrual.topSymptoms[0]?.id).toBe('cramps')
    expect(menstrual.topSymptoms[0]?.count).toBe(3)

    // Luteal phase should have 'bloating' as top symptom
    const luteal = analysis.patterns.luteal
    expect(luteal.topSymptoms[0]?.id).toBe('bloating')
    expect(luteal.topSymptoms[0]?.count).toBe(3)
  })
})
