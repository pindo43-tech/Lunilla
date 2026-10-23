import { useMemo } from 'react'
import type { TemperatureReading } from '../lib/bbt.ts'
import { analyzeBbt } from '../lib/bbt.ts'
import { formatShort } from '../lib/dates.ts'
import { useI18n } from '../lib/i18n.tsx'

interface Props {
  readings: TemperatureReading[]
  caption?: string
}

export function BbtChart({ readings, caption }: Props) {
  const { locale, t } = useI18n()
  const analysis = useMemo(() => analyzeBbt(readings), [readings])

  if (!analysis.hasData || analysis.readings.length === 0) {
    return (
      <div className="rounded-2xl bg-paper p-4 text-center text-xs text-muted">
        {t('bbt.empty')}
      </div>
    )
  }

  const { readings: data, coverline, shiftIndex, biphasic, minTemp, maxTemp } = analysis

  // SVG coordinate system
  const width = 500
  const height = 200
  const paddingLeft = 45
  const paddingRight = 20
  const paddingTop = 25
  const paddingBottom = 35

  const chartWidth = width - paddingLeft - paddingRight
  const chartHeight = height - paddingTop - paddingBottom

  // Dynamic Y range with padding
  const yMin = Math.floor((minTemp - 0.15) * 10) / 10
  const yMax = Math.ceil((maxTemp + 0.15) * 10) / 10
  const yRange = Math.max(0.4, yMax - yMin)

  function getX(index: number): number {
    if (data.length === 1) return paddingLeft + chartWidth / 2
    return paddingLeft + (index / (data.length - 1)) * chartWidth
  }

  function getY(temp: number): number {
    return paddingTop + chartHeight - ((temp - yMin) / yRange) * chartHeight
  }

  // Generate grid line temperatures
  const gridSteps: number[] = []
  const step = 0.2
  for (let val = yMin; val <= yMax + 0.01; val += step) {
    gridSteps.push(Math.round(val * 10) / 10)
  }

  // Points string for polyline
  const points = data.map((d, i) => `${getX(i)},${getY(d.temp)}`).join(' ')

  const coverlineY = coverline !== null ? getY(coverline) : null

  return (
    <div className="space-y-3">
      <div className="relative rounded-3xl border border-black/10 bg-white p-4 shadow-xs">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full overflow-visible"
          role="img"
          aria-label={caption ?? t('bbt.chartTitle')}
        >
          {/* Horizontal Grid Lines */}
          {gridSteps.map((temp) => {
            const y = getY(temp)
            return (
              <g key={temp} className="text-[10px] text-muted">
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={width - paddingRight}
                  y2={y}
                  stroke="rgba(0,0,0,0.07)"
                  strokeDasharray="2,2"
                />
                <text x={paddingLeft - 6} y={y + 3} textAnchor="end" fill="currentColor">
                  {temp.toFixed(1)}°
                </text>
              </g>
            )
          })}

          {/* Coverline (dashed horizontal line) */}
          {coverlineY !== null && coverline !== null ? (
            <g>
              <line
                x1={paddingLeft}
                y1={coverlineY}
                x2={width - paddingRight}
                y2={coverlineY}
                stroke="#6d5a94"
                strokeWidth={1.5}
                strokeDasharray="4,3"
              />
              <text
                x={width - paddingRight}
                y={coverlineY - 5}
                textAnchor="end"
                className="text-[10px] font-semibold"
                fill="#6d5a94"
              >
                Coverline {coverline.toFixed(2)}°C
              </text>
            </g>
          ) : null}

          {/* Thermal Shift vertical separator */}
          {shiftIndex !== null ? (
            <g>
              <line
                x1={getX(shiftIndex)}
                y1={paddingTop}
                x2={getX(shiftIndex)}
                y2={height - paddingBottom}
                stroke="#2f6a50"
                strokeWidth={1.5}
                strokeDasharray="3,3"
              />
              <text
                x={getX(shiftIndex) + 4}
                y={paddingTop + 10}
                className="text-[9px] font-medium"
                fill="#2f6a50"
              >
                {t('bbt.shift')}
              </text>
            </g>
          ) : null}

          {/* Temperature Polyline */}
          <polyline
            fill="none"
            stroke="#8f3d56"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
          />

          {/* Data Points */}
          {data.map((d, i) => {
            const x = getX(i)
            const y = getY(d.temp)
            const isPostShift = shiftIndex !== null && i >= shiftIndex
            return (
              <g key={d.date}>
                <circle
                  cx={x}
                  cy={y}
                  r={4}
                  fill={isPostShift ? '#2f6a50' : '#8f3d56'}
                  stroke="#ffffff"
                  strokeWidth={1.5}
                />
                {/* Date Label on X axis */}
                <text
                  x={x}
                  y={height - paddingBottom + 16}
                  textAnchor="middle"
                  className="text-[9px]"
                  fill="#5c4e63"
                >
                  {formatShort(d.date, locale).slice(0, 5)}
                </text>
              </g>
            )
          })}
        </svg>

        {/* Legend / Status Badges */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-black/5 pt-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose" />
              <span className="text-muted">{t('bbt.preShift')}</span>
            </span>
            {biphasic ? (
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-sage" />
                <span className="text-muted">{t('bbt.postShift')}</span>
              </span>
            ) : null}
          </div>

          <div className="text-xs font-medium text-ink">
            {biphasic ? (
              <span className="text-sage">{t('bbt.biphasicDetected')}</span>
            ) : (
              <span className="text-muted">{t('bbt.monophasic')}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
