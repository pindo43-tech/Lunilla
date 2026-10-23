import { describe, expect, it } from 'vitest'
import { evaluateBleedSafety } from './safety.ts'

describe('bleed safety checks (ACOG guideline)', () => {
  it('does not trigger when bleeding is short or normal', () => {
    expect(evaluateBleedSafety(null, false).prolongedBleed).toBe(false)
    expect(evaluateBleedSafety(3, true).prolongedBleed).toBe(false)
    expect(evaluateBleedSafety(5, true).prolongedBleed).toBe(false)
    expect(evaluateBleedSafety(7, true).prolongedBleed).toBe(false)
  })

  it('triggers when ongoing bleeding exceeds 7 days', () => {
    const result = evaluateBleedSafety(8, true)
    expect(result.prolongedBleed).toBe(true)
    expect(result.consecutiveDays).toBe(8)
  })

  it('does not trigger if bleed was long but is already finished and not ongoing', () => {
    const result = evaluateBleedSafety(9, false)
    expect(result.prolongedBleed).toBe(false)
  })
})
