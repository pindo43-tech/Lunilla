import { describe, expect, it } from 'vitest'
import { analyzeBbt, extractCycleBbt } from './bbt.ts'

describe('bbt analysis', () => {
  it('handles empty readings safely', () => {
    const analysis = analyzeBbt([])
    expect(analysis.hasData).toBe(false)
    expect(analysis.biphasic).toBe(false)
    expect(analysis.coverline).toBeNull()
    expect(analysis.shiftDate).toBeNull()
  })

  it('handles fewer than 4 readings without detecting a premature shift', () => {
    const readings = [
      { date: '2026-05-01', temp: 36.3 },
      { date: '2026-05-02', temp: 36.4 },
      { date: '2026-05-03', temp: 36.7 },
    ]
    const analysis = analyzeBbt(readings)
    expect(analysis.hasData).toBe(true)
    expect(analysis.biphasic).toBe(false)
    expect(analysis.coverline).toBeNull()
    expect(analysis.minTemp).toBe(36.3)
    expect(analysis.maxTemp).toBe(36.7)
    expect(analysis.averageTemp).toBe(36.47)
  })

  it('detects a clear biphasic thermal shift and sets the correct coverline', () => {
    // 6 follicular readings followed by 3 elevated luteal readings
    const readings = [
      { date: '2026-05-06', temp: 36.35 },
      { date: '2026-05-07', temp: 36.30 },
      { date: '2026-05-08', temp: 36.40 }, // Highest pre-shift: 36.40
      { date: '2026-05-09', temp: 36.32 },
      { date: '2026-05-10', temp: 36.38 },
      { date: '2026-05-11', temp: 36.35 },
      // Shift starts on May 12:
      { date: '2026-05-12', temp: 36.55 }, // > 36.40
      { date: '2026-05-13', temp: 36.62 }, // > 36.40
      { date: '2026-05-14', temp: 36.68 }, // > 36.40 + 0.2
    ]

    const analysis = analyzeBbt(readings)
    expect(analysis.hasData).toBe(true)
    expect(analysis.biphasic).toBe(true)
    expect(analysis.coverline).toBe(36.40)
    expect(analysis.shiftDate).toBe('2026-05-12')
    expect(analysis.shiftIndex).toBe(6)
  })

  it('extracts readings for a date range correctly', () => {
    const days = {
      '2026-05-01': { basalTemp: 36.4 },
      '2026-05-02': { basalTemp: null },
      '2026-05-03': { basalTemp: 36.5 },
      '2026-05-10': { basalTemp: 36.8 },
      '2026-05-15': { basalTemp: 36.9 },
    }
    const extracted = extractCycleBbt(days, '2026-05-02', '2026-05-12')
    expect(extracted).toEqual([
      { date: '2026-05-03', temp: 36.5 },
      { date: '2026-05-10', temp: 36.8 },
    ])
  })
})
