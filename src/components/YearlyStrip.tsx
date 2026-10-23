import { cx } from '../lib/cx.ts'
import { buildTwelveMonthStrip } from '../lib/heatmap.ts'
import { useI18n } from '../lib/i18n.tsx'
import type { DayLog, Flow, Locale } from '../types.ts'

const MONTH_SHORT: Record<Locale, string[]> = {
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

function flowTone(flow: Flow | null): string {
  if (flow === 'heavy') return 'bg-[#8F3D56]'
  if (flow === 'medium') return 'bg-[#BA637D]'
  if (flow === 'light') return 'bg-[#E3A6B8]'
  return 'bg-black/[0.06]'
}

export function YearlyStrip({
  days,
  today,
}: {
  days: Record<string, DayLog>
  today: string
}) {
  const { locale, t } = useI18n()
  const strips = buildTwelveMonthStrip(days, today)
  const months = MONTH_SHORT[locale]

  return (
    <div className="space-y-3 rounded-3xl bg-white px-4 py-4 shadow-sm">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold">{t('sum.yearlyTitle')}</h2>
        <p className="text-xs leading-relaxed text-muted">{t('sum.yearlyHelp')}</p>
      </div>

      <div className="space-y-1.5 pt-1" role="region" aria-label={t('sum.yearlyTitle')}>
        {strips.map((strip) => (
          <div key={strip.key} className="flex items-center gap-2">
            <span className="w-8 shrink-0 text-[11px] font-medium text-muted">
              {months[strip.monthIndex]}
            </span>
            <div className="grid flex-1 grid-cols-[repeat(31,minmax(0,1fr))] gap-[2px]">
              {strip.days.map((day) => (
                <span
                  key={day.iso}
                  title={`${day.iso}${day.flow ? ` (${day.flow})` : ''}`}
                  className={cx(
                    'h-2.5 w-full rounded-[2px]',
                    flowTone(day.flow),
                  )}
                />
              ))}
            </div>
            <span className="w-6 shrink-0 text-right text-[11px] font-medium text-muted">
              {strip.bleedCount > 0 ? `${strip.bleedCount}d` : '·'}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end gap-3 pt-1 text-[11px] text-muted">
        <span className="inline-flex items-center gap-1">
          <span className="inline-block h-2.5 w-2.5 rounded-[2px] bg-[#E3A6B8]" />
          {t('flow.light')}
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="inline-block h-2.5 w-2.5 rounded-[2px] bg-[#BA637D]" />
          {t('flow.medium')}
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="inline-block h-2.5 w-2.5 rounded-[2px] bg-[#8F3D56]" />
          {t('flow.heavy')}
        </span>
      </div>
    </div>
  )
}
