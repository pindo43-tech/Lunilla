import { describe, expect, it } from 'vitest'
import { applyPeriod, deletePeriod, listPeriods, seedFirstPeriod, summarize } from './cycles.ts'
import { clearFlow } from './logs.ts'
import { periodStarts, predict } from './predict.ts'
import { emptyVault } from './schema.ts'

describe('cycle history', () => {
  it('rejects an end before the start, a long span, and an overlap', () => {
    const seeded = seedFirstPeriod(emptyVault('es'), '2026-01-01', 4, null, '2026-03-01')
    expect(seeded.ok).toBe(true)
    if (!seeded.ok) return
    const second = applyPeriod(seeded.vault, null, '2026-01-29', '2026-02-02', '2026-03-01')
    expect(second.ok).toBe(true)
    if (!second.ok) return

    const backwards = applyPeriod(second.vault, '2026-01-29', '2026-02-10', '2026-02-01', '2026-03-01')
    expect(backwards).toEqual({ ok: false, error: 'order' })

    const overlap = applyPeriod(second.vault, '2026-01-29', '2026-01-03', '2026-01-06', '2026-03-01')
    expect(overlap).toEqual({ ok: false, error: 'overlap' })

    const adjacent = applyPeriod(second.vault, '2026-01-29', '2026-01-05', '2026-01-08', '2026-03-01')
    expect(adjacent).toEqual({ ok: false, error: 'overlap' })

    const tooLong = applyPeriod(second.vault, '2026-01-29', '2026-02-01', '2026-02-20', '2026-03-01')
    expect(tooLong).toEqual({ ok: false, error: 'span' })
  })

  it('deletes the last cycle and keeps a note on that day', () => {
    const seeded = seedFirstPeriod(emptyVault('es'), '2026-03-01', 3, 28, '2026-03-10')
    expect(seeded.ok).toBe(true)
    if (!seeded.ok) return
    const withNote = {
      ...seeded.vault,
      days: {
        ...seeded.vault.days,
        '2026-03-01': { ...seeded.vault.days['2026-03-01']!, note: 'primer día' },
      },
    }
    expect(listPeriods(withNote.days, '2026-03-10')).toHaveLength(1)
    const cleared = deletePeriod(withNote, '2026-03-01')
    expect(periodStarts(cleared.days, '2026-03-10')).toEqual([])
    expect(cleared.days['2026-03-01']?.note).toBe('primer día')
    expect(cleared.days['2026-03-01']?.flow).toBeNull()
    const result = predict(cleared.days, 6, '2026-03-10', cleared.settings.typicalCycleLength)
    expect(result.lastStart).toBeNull()
    expect(result.confidence).toBe('none')
    expect(result.nextPeriod).toBeNull()
  })

  it('does not pretend one cycle is a summary', () => {
    const seeded = seedFirstPeriod(emptyVault('es'), '2026-01-01', 5, 28, '2026-02-15')
    expect(seeded.ok).toBe(true)
    if (!seeded.ok) return
    const summary = summarize(seeded.vault.days, 6, '2026-02-15')
    expect(summary.weak).toBe(true)
    expect(summary.averageCycle).toBeNull()
    expect(summary.measured).toEqual([])
    expect(summary.regularity).toBe('unknown')
  })

  it('clears a flow mark without shifting the calendar date', () => {
    const seeded = seedFirstPeriod(emptyVault('es'), '2026-05-02', 2, null, '2026-05-04')
    expect(seeded.ok).toBe(true)
    if (!seeded.ok) return
    const cleared = clearFlow(seeded.vault, '2026-05-02')
    expect(cleared.days['2026-05-02']).toBeUndefined()
    expect(Object.keys(cleared.days)).toEqual(['2026-05-03'])
  })
})
