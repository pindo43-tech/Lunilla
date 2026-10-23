import { useId } from 'react'
import { computeSparkline } from '../lib/sparkline.ts'

export function Sparkline({
  values,
  caption,
  width = 340,
  height = 130,
}: {
  values: number[]
  caption: string
  width?: number
  height?: number
}) {
  const gradientId = useId()
  const result = computeSparkline(values, width, height, 18)

  if (!result) return null

  return (
    <figure className="space-y-2">
      <div className="relative overflow-hidden rounded-2xl bg-paper px-2 py-3 shadow-inner">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8F3D56" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#8F3D56" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Área sombreada bajo la curva */}
          <path d={result.areaPath} fill={`url(#${gradientId})`} />

          {/* Línea horizontal de promedio de referencia */}
          <line
            x1="12"
            y1={result.avgY}
            x2={width - 12}
            y2={result.avgY}
            stroke="#2F6A50"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.6"
          />

          {/* Trazado principal de la curva */}
          <path
            d={result.path}
            fill="none"
            stroke="#8F3D56"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Puntos y etiquetas de valor */}
          {result.points.map((pt, idx) => (
            <g key={idx}>
              <circle
                cx={pt.x}
                cy={pt.y}
                r="4.5"
                fill="#8F3D56"
                stroke="#FBF6F0"
                strokeWidth="2"
              />
              <text
                x={pt.x}
                y={Math.max(12, pt.y - 8)}
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill="#3A2830"
              >
                {pt.value}
              </text>
            </g>
          ))}
        </svg>

        {/* Leyenda sutil debajo del gráfico */}
        <div className="flex items-center justify-between px-2 pt-1 text-xs text-muted">
          <span>Min: {result.min}d</span>
          <span className="font-medium text-sage">Prom: {result.avg}d</span>
          <span>Max: {result.max}d</span>
        </div>
      </div>

      <figcaption className="sr-only">{caption}</figcaption>
      <table className="sr-only">
        <caption>{caption}</caption>
        <tbody>
          {values.map((val, idx) => (
            <tr key={idx}>
              <th scope="row">Ciclo {idx + 1}</th>
              <td>{val} días</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  )
}
