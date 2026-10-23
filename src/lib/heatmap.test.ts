import { describe, expect, it } from 'vitest'
import { buildTwelveMonthStrip, daysInMonth } from './heatmap.ts'
import type { DayLog } from '../types.ts'

function bleed(flow: 'light' | 'medium' | 'heavy'): DayLog {
  return { flow, symptoms: [], moods: [], note: '', basalTemp: null, mucus: null }
}

describe('12-month flow intensity strip (heatmap)', () => {
  it('calculates days in month accurately including leap years', () => {
    expect(daysInMonth(2024, 1)).toBe(29) // Feb 2024 leap year
    expect(daysInMonth(2026, 1)).toBe(28) // Feb 2026
    expect(daysInMonth(2026, 0)).toBe(31) // Jan 2026
    expect(daysInMonth(2026, 3)).toBe(30) // Apr 2026
  })

  it('builds 12 chronological months ending on the current month and counts bleeding days', () => {
    const days: Record<string, DayLog> = {
      '2026-05-01': bleed('light'),
      '2026-05-02': bleed('heavy'),
      '2026-05-03': bleed('medium'),
    }

    const strips = buildTwelveMonthStrip(days, '2026-05-15')
    expect(strips).toHaveLength(12)
    // First month should be June 2025 (2025-06)
    expect(strips[0]?.key).toBe('2025-06')
    // Last month should be May 2026 (2026-05)
    const last = strips[11]!
    expect(last.key).toBe('2026-05')
    expect(last.bleedCount).toBe(3)
    expect(last.days[0]?.flow).toBe('light')
    expect(last.days[1]?.flow).toBe('heavy')
    expect(last.days[2]?.flow).toBe('medium')
    expect(last.days[3]?.flow).toBeNull()
  })
})
