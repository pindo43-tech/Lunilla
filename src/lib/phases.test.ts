import { describe, expect, it } from 'vitest'
import { getPhaseInfo } from './phases.ts'
import type { PhaseName } from '../types.ts'

describe('phase educational info', () => {
  const phases: PhaseName[] = ['menstrual', 'follicular', 'ovulatory', 'luteal']

  it('provides complete information in Spanish for all phases', () => {
    for (const phase of phases) {
      const info = getPhaseInfo(phase, 'es')
      expect(info.phase).toBe(phase)
      expect(info.title.length).toBeGreaterThan(5)
      expect(info.description.length).toBeGreaterThan(20)
      expect(info.symptoms.length).toBeGreaterThanOrEqual(3)
    }
  })

  it('provides complete information in English for all phases', () => {
    for (const phase of phases) {
      const info = getPhaseInfo(phase, 'en')
      expect(info.phase).toBe(phase)
      expect(info.title.length).toBeGreaterThan(5)
      expect(info.description.length).toBeGreaterThan(20)
      expect(info.symptoms.length).toBeGreaterThanOrEqual(3)
    }
  })
})
