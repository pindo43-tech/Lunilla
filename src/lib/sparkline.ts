/**
 * Cálculo matemático de Sparkline SVG vectorial para series temporales.
 * Adaptado de fnando/sparkline (MIT License, (c) 2018 Nando Vieira).
 * Genera coordenadas de trazado SVG (path, área, puntos y línea promedio).
 */

export interface SparklinePoint {
  x: number
  y: number
  value: number
}

export interface SparklineResult {
  path: string
  areaPath: string
  avgY: number
  points: SparklinePoint[]
  min: number
  max: number
  avg: number
}

export function computeSparkline(
  values: number[],
  width = 320,
  height = 100,
  padding = 12,
): SparklineResult | null {
  if (values.length < 2) return null

  const min = Math.min(...values)
  const max = Math.max(...values)
  const avg = values.reduce((acc, v) => acc + v, 0) / values.length

  const range = max - min === 0 ? 1 : max - min
  const usableWidth = Math.max(10, width - padding * 2)
  const usableHeight = Math.max(10, height - padding * 2)
  const step = usableWidth / (values.length - 1)

  const points: SparklinePoint[] = values.map((val, idx) => {
    const x = Math.round((padding + idx * step) * 100) / 100
    // Invertir Y porque en SVG 0 es arriba
    const norm = (val - min) / range
    const y = Math.round((height - padding - norm * usableHeight) * 100) / 100
    return { x, y, value: val }
  })

  // Generar path de línea
  const lineParts = points.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
  const path = lineParts.join(' ')

  // Generar path de área cerrada hacia el fondo
  const bottomY = height - padding
  const firstPoint = points[0]!
  const lastPoint = points[points.length - 1]!
  const areaPath = `${path} L ${lastPoint.x} ${bottomY} L ${firstPoint.x} ${bottomY} Z`

  // Coordenada Y del promedio
  const avgNorm = (avg - min) / range
  const avgY = Math.round((height - padding - avgNorm * usableHeight) * 100) / 100

  return {
    path,
    areaPath,
    avgY,
    points,
    min,
    max,
    avg: Math.round(avg * 10) / 10,
  }
}
