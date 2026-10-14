import { describe, expect, it } from 'vitest'
import { addDays, diffDays, todayISO } from './dates.ts'

describe('local calendar dates', () => {
  it('keeps YYYY-MM-DD on the local day instead of a UTC shift', () => {
    expect(todayISO(new Date(2026, 0, 1, 0, 30))).toBe('2026-01-01')
    expect(todayISO(new Date(2026, 5, 15, 23, 30))).toBe('2026-06-15')
    expect(addDays('2026-01-31', 1)).toBe('2026-02-01')
    expect(diffDays('2026-03-08', '2026-03-09')).toBe(1)
    expect(addDays('2026-12-31', 1)).toBe('2027-01-01')
  })
})
