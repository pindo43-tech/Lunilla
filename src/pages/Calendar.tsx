import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cx } from '../lib/cx.ts'
import { formatLong, formatMonth, monthMatrix, todayISO } from '../lib/dates.ts'
import type { MessageKey } from '../lib/i18n.tsx'
import { useI18n } from '../lib/i18n.tsx'
import { isBleed, isFertileDay, isPredictedPeriodDay, predict } from '../lib/predict.ts'
import { useBrandTitle } from '../lib/useTitle.ts'
import { useSession } from '../state/session.tsx'
import type { Flow } from '../types.ts'

const WEEKDAYS: Record<'es' | 'en', string[]> = {
  es: ['lu', 'ma', 'mi', 'ju', 'vi', 'sá', 'do'],
  en: ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'],
}

const FLOW_KEY: Record<Flow, MessageKey> = {
  none: 'flow.none',
  light: 'flow.light',
  medium: 'flow.medium',
  heavy: 'flow.heavy',
}

export function CalendarPage() {
  const { vault } = useSession()
  const { locale, t } = useI18n()
  useBrandTitle(t('tabs.calendar'))
  const today = todayISO()
  const [cursor, setCursor] = useState(() => {
    const [year, month] = today.split('-').map(Number)
    return { year: year ?? 2026, monthIndex: (month ?? 1) - 1 }
  })
  if (!vault) return null
  const prediction = predict(vault.days, vault.settings.historyLength, today, vault.settings.typicalCycleLength)
  const onThisMonth = `${cursor.year}-${String(cursor.monthIndex + 1).padStart(2, '0')}` === today.slice(0, 7)
  const cells = monthMatrix(cursor.year, cursor.monthIndex)
  const label = capitalize(formatMonth(cursor.year, cursor.monthIndex, locale))

  function shift(delta: number) {
    setCursor((current) => {
      const date = new Date(current.year, current.monthIndex + delta, 1)
      return { year: date.getFullYear(), monthIndex: date.getMonth() }
    })
  }

  return (
    <div className="rise space-y-4 pb-4">
      <div className="flex items-center justify-between gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-ink">{label}</h1>
        <div className="flex gap-2">
          <button type="button" aria-label={t('cal.prev')} onClick={() => shift(-1)} className="min-h-11 min-w-11 rounded-full bg-white text-lg text-ink shadow-sm">
            ‹
          </button>
          <button type="button" aria-label={t('cal.next')} onClick={() => shift(1)} className="min-h-11 min-w-11 rounded-full bg-white text-lg text-ink shadow-sm">
            ›
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          const [year, month] = today.split('-').map(Number)
          setCursor({ year: year ?? cursor.year, monthIndex: (month ?? 1) - 1 })
        }}
        aria-pressed={onThisMonth}
        className="min-h-11 rounded-full bg-white px-4 text-sm font-medium text-ink shadow-sm"
      >
        {t('cal.jumpToday')}
      </button>
      <div role="grid" aria-label={label} className="grid grid-cols-7 justify-items-center gap-y-1">
        {WEEKDAYS[locale].map((day) => (
          <div key={day} role="columnheader" className="pb-1 text-xs uppercase tracking-wide text-muted">
            {day}
          </div>
        ))}
        {cells.map((iso, index) => {
          if (!iso) return <span key={`empty-${index}`} role="gridcell" className="h-11 w-11" />
          const day = vault.days[iso]
          const flow = day?.flow
          const bleed = isBleed(day)
          const fertile = isFertileDay(iso, prediction)
          const predicted = !bleed && isPredictedPeriodDay(iso, prediction, today)
          const parts = [formatLong(iso, locale)]
          if (iso === today) parts.push(t('cal.today'))
          if (flow && flow !== 'none') parts.push(t(FLOW_KEY[flow]))
          if (predicted) parts.push(t('cal.legendPred'))
          if (fertile) parts.push(t('cal.legendFertile'))
          return (
            <Link
              key={iso}
              to={`/app/day/${iso}`}
              role="gridcell"
              aria-label={parts.join(', ')}
              aria-current={iso === today ? 'date' : undefined}
              className={cx(
                'flex h-11 w-11 items-center justify-center rounded-full text-sm font-medium text-ink',
                bleed && 'mark-logged font-semibold',
                predicted && 'mark-predicted',
                fertile && 'mark-fertile',
                iso === today && 'outline outline-2 outline-offset-2 outline-ink',
              )}
            >
              {Number(iso.slice(-2))}
            </Link>
          )
        })}
      </div>
      <ul className="space-y-2 text-sm text-muted">
        <li className="flex items-center gap-2"><span className="mark-logged h-3 w-3 rounded-full" />{t('cal.legendFlow')}</li>
        <li className="flex items-center gap-2"><span className="mark-fertile h-3 w-3 rounded-full bg-white" />{t('cal.legendFertile')}</li>
        <li className="flex items-center gap-2"><span className="mark-predicted h-3 w-3 rounded-full" />{t('cal.legendPred')}</li>
      </ul>
      <p className="leading-relaxed text-muted">{t('cal.hint')}</p>
    </div>
  )
}

function capitalize(value: string): string {
  return value.charAt(0).toLocaleUpperCase() + value.slice(1)
}
