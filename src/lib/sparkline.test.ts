import { describe, expect, it } from 'vitest'
import { computeSparkline } from './sparkline.ts'

describe('sparkline SVG coordinate math', () => {
  it('returns null for less than 2 points', () => {
    expect(computeSparkline([])).toBeNull()
    expect(computeSparkline([28])).toBeNull()
  })

  it('computes correct SVG path and points for identical values without division by zero', () => {
    const res = computeSparkline([28, 28, 28])
    expect(res).not.toBeNull()
    if (!res) return
    expect(res.points).toHaveLength(3)
    expect(res.min).toBe(28)
    expect(res.max).toBe(28)
    expect(res.path.startsWith('M')).toBe(true)
    expect(res.areaPath.endsWith('Z')).toBe(true)
  })

  it('computes realistic varying values with bounds and points', () => {
    const res = computeSparkline([26, 28, 32, 29], 300, 100, 10)
    expect(res).not.toBeNull()
    if (!res) return
    expect(res.points).toHaveLength(4)
    expect(res.min).toBe(26)
    expect(res.max).toBe(32)
    expect(res.avg).toBe(28.8)
    expect(res.points[0]?.value).toBe(26)
    expect(res.points[3]?.value).toBe(29)
    // First point x should be padding
    expect(res.points[0]?.x).toBe(10)
    // Last point x should be width - padding
    expect(res.points[3]?.x).toBe(290)
    // Point with max value (32) should have lowest y (closest to top)
    const maxYPoint = res.points[2]
    expect(maxYPoint?.value).toBe(32)
    expect(maxYPoint?.y).toBe(10) // height 100 - padding 10 - 1.0 * usableHeight 80 = 10
  })
})
