import { useEffect, useRef, useState } from 'react'
import { Sparkline } from '../components/Sparkline.tsx'
import { YearlyStrip } from '../components/YearlyStrip.tsx'
import type { CycleEditError, LoggedPeriod } from '../lib/cycles.ts'
import { applyPeriod, deletePeriod, listPeriods, summarize } from '../lib/cycles.ts'
import { analyzePhasePatterns } from '../lib/patterns.ts'
import { SYMPTOM_IDS } from '../lib/catalog.ts'
import { formatLong, formatShort, todayISO } from '../lib/dates.ts'
import type { MessageKey } from '../lib/i18n.tsx'
import { useI18n } from '../lib/i18n.tsx'
import { useBrandTitle } from '../lib/useTitle.ts'
import { useSession } from '../state/session.tsx'
import type { CustomSymptom, PhaseName } from '../types.ts'

const PHASE_NAME: Record<PhaseName, MessageKey> = {
  menstrual: 'phase.menstrual',
  follicular: 'phase.follicular',
  ovulatory: 'phase.ovulatory',
  luteal: 'phase.luteal',
}

const SYMPTOM_KEY: Record<(typeof SYMPTOM_IDS)[number], MessageKey> = {
  cramps: 'sym.cramps',
  bloating: 'sym.bloating',
  headache: 'sym.headache',
  acne: 'sym.acne',
  fatigue: 'sym.fatigue',
  cravings: 'sym.cravings',
}

const EDIT_ERROR: Record<CycleEditError, MessageKey> = {
  order: 'sum.err.order',
  span: 'sum.err.span',
  overlap: 'sum.err.overlap',
  future: 'sum.err.future',
  date: 'sum.err.date',
}

const REGULARITY_KEY = {
  unknown: 'sum.regularityUnknown',
  steady: 'sum.regularitySteady',
  variable: 'sum.regularityVariable',
} as const

export function SummaryPage() {
  const { vault, update } = useSession()
  const { locale, t } = useI18n()
  const [editing, setEditing] = useState<string | null>(null)
  const [draftStart, setDraftStart] = useState('')
  const [draftEnd, setDraftEnd] = useState('')
  const [editError, setEditError] = useState('')
  const [removing, setRemoving] = useState<string | null>(null)
  const deleteRef = useRef<HTMLButtonElement>(null)
  useBrandTitle(t('tabs.summary'))

  useEffect(() => {
    if (removing) deleteRef.current?.focus()
  }, [removing])

  if (!vault) return null
  const today = todayISO()
  const periods = listPeriods(vault.days, today)
  const summary = summarize(vault.days, vault.settings.historyLength, today)
  const phasePatterns = analyzePhasePatterns(vault.days, today)
  const removingPeriod = periods.find((period) => period.start === removing) ?? null

  function moodName(id: string): string {
    const key = `mood.${id}` as MessageKey
    return t(key)
  }

  function openEdit(period: LoggedPeriod) {
    setRemoving(null)
    setEditing(period.start)
    setDraftStart(period.start)
    setDraftEnd(period.end)
    setEditError('')
  }

  function saveEdit(oldStart: string) {
    const result = applyPeriod(vault!, oldStart, draftStart, draftEnd, todayISO())
    if (!result.ok) {
      setEditError(t(EDIT_ERROR[result.error]))
      return
    }
    setEditing(null)
    setEditError('')
    void update(() => result.vault)
  }

  function days(count: number): string {
    return count === 1 ? t('sum.dayOne') : t('sum.days', { n: count })
  }

  function symptomName(id: string, customs: CustomSymptom[]): string {
    if (id in SYMPTOM_KEY) return t(SYMPTOM_KEY[id as (typeof SYMPTOM_IDS)[number]])
    return customs.find((item) => item.id === id)?.name ?? id
  }

  return (
    <div className="rise space-y-5 pb-6">
      <h1 className="text-2xl font-semibold tracking-tight">{t('tabs.summary')}</h1>

      {summary.weak ? (
        <section className="space-y-2 rounded-3xl bg-lavender-soft px-4 py-4" aria-label={t('sum.weakTitle')}>
          <h2 className="text-lg font-semibold">{t('sum.weakTitle')}</h2>
          <p className="leading-relaxed">
            {summary.measured.length === 1
              ? t('sum.weakOne', { length: days(summary.measured[0] ?? 0) })
              : t('sum.weakNone')}
          </p>
        </section>
      ) : (
        <section aria-label={t('sum.avg')} className="grid grid-cols-2 gap-2">
            <Stat label={t('sum.avg')} value={days(summary.averageCycle ?? 0)} />
            <Stat label={t('sum.short')} value={days(summary.shortest ?? 0)} />
            <Stat label={t('sum.long')} value={days(summary.longest ?? 0)} />
            {summary.averagePeriod !== null ? (
              <Stat label={t('sum.period')} value={days(summary.averagePeriod)} />
            ) : null}
        </section>
      )}

      {summary.averagePeriod === null && summary.singlePeriodLength !== null ? (
        <p className="leading-relaxed text-muted">{t('sum.onePeriod', { length: days(summary.singlePeriodLength) })}</p>
      ) : null}
      {summary.weak && summary.averagePeriod !== null ? (
        <p className="leading-relaxed">{t('sum.period')}: {days(summary.averagePeriod)}</p>
      ) : null}

      <section className="space-y-2 rounded-3xl bg-white px-4 py-4 shadow-sm">
        <h2 className="text-lg font-semibold">{t('sum.regularity')}</h2>
        <p className="leading-relaxed">{t(REGULARITY_KEY[summary.regularity])}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t('sum.chart')}</h2>
        {summary.measured.length === 0 ? (
          <p className="leading-relaxed text-muted">{t('sum.chartEmpty')}</p>
        ) : summary.measured.length >= 2 ? (
          <Sparkline
            values={summary.measured}
            caption={t('sum.chartAvg', { length: days(summary.averageCycle ?? 0) })}
          />
        ) : (
          <LengthChart
            lengths={summary.measured}
            caption={t('sum.chartOne')}
          />
        )}
        {summary.measured.length === 1 ? <p className="text-sm leading-relaxed text-muted">{t('sum.chartOne')}</p> : null}
        {summary.measured.length >= 2 && summary.averageCycle !== null ? (
          <p className="text-sm leading-relaxed text-muted">{t('sum.chartAvg', { length: days(summary.averageCycle) })}</p>
        ) : null}
      </section>

      <YearlyStrip days={vault.days} today={today} />

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">{t('sum.symptoms')}</h2>
        {summary.topSymptoms.length === 0 ? (
          <p className="leading-relaxed text-muted">{t('sum.noSymptoms')}</p>
        ) : (
          <ol className="space-y-2">
            {summary.topSymptoms.map((item) => (
              <li key={item.id} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
                <span className="font-medium">{symptomName(item.id, vault.customSymptoms)}</span>
                <span className="text-sm text-muted">{t('sum.symCount', { length: days(item.count) })}</span>
              </li>
            ))}
          </ol>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t('sum.patternsTitle')}</h2>
        {!phasePatterns.eligible ? (
          <p className="rounded-2xl bg-paper/60 p-4 text-sm leading-relaxed text-muted">
            {t('sum.patternsFew')}
          </p>
        ) : (
          <div className="space-y-2">
            {(['menstrual', 'follicular', 'ovulatory', 'luteal'] as const).map((phase) => {
              const p = phasePatterns.patterns[phase]
              return (
                <div key={phase} className="rounded-2xl bg-white p-3.5 shadow-sm space-y-1">
                  <p className="text-sm font-semibold text-rose">{t(PHASE_NAME[phase])}</p>
                  {p.topSymptoms.length === 0 && p.topMoods.length === 0 ? (
                    <p className="text-xs text-muted">{t('sum.patternsNoLogs')}</p>
                  ) : (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.topSymptoms.map((sym) => (
                        <span key={sym.id} className="inline-flex items-center rounded-full bg-rose-soft px-2.5 py-0.5 text-xs text-ink font-medium">
                          {symptomName(sym.id, vault.customSymptoms)} ({sym.count})
                        </span>
                      ))}
                      {p.topMoods.map((mood) => (
                        <span key={mood.id} className="inline-flex items-center rounded-full bg-lavender-soft px-2.5 py-0.5 text-xs text-ink font-medium">
                          {moodName(mood.id)} ({mood.count})
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t('sum.history')}</h2>
        {periods.length === 0 ? <p className="leading-relaxed text-muted">{t('sum.historyEmpty')}</p> : null}
        <ul className="space-y-3">
          {periods.map((period) => {
            const open = editing === period.start
            return (
              <li key={period.start} className="space-y-3 rounded-3xl bg-white px-4 py-4 shadow-sm">
                <div>
                  <p className="font-medium">
                    {formatShort(period.start, locale)} – {formatShort(period.end, locale)}
                  </p>
                  <p className="text-sm leading-relaxed text-muted">{t('sum.periodLen', { length: days(period.periodLength) })}</p>
                  <p className="text-sm leading-relaxed text-muted">
                    {period.cycleLength === null
                      ? t('sum.ongoing')
                      : t('sum.cycleLen', { length: days(period.cycleLength) })}
                  </p>
                  {period.gapExcluded ? <p className="text-sm leading-relaxed">{t('sum.gap')}</p> : null}
                </div>
                {open ? (
                  <form
                    className="space-y-3"
                    onSubmit={(event) => {
                      event.preventDefault()
                      saveEdit(period.start)
                    }}
                  >
                    <label className="block space-y-1" htmlFor={`start-${period.start}`}>
                      <span className="text-sm font-medium">{t('sum.start')}</span>
                      <input
                        id={`start-${period.start}`}
                        type="date"
                        required
                        max={today}
                        autoFocus
                        value={draftStart}
                        onChange={(event) => {
                          setDraftStart(event.target.value)
                          setEditError('')
                        }}
                        className="min-h-12 w-full rounded-2xl border border-black/15 bg-paper px-3"
                      />
                    </label>
                    <label className="block space-y-1" htmlFor={`end-${period.start}`}>
                      <span className="text-sm font-medium">{t('sum.end')}</span>
                      <input
                        id={`end-${period.start}`}
                        type="date"
                        required
                        max={today}
                        value={draftEnd}
                        onChange={(event) => {
                          setDraftEnd(event.target.value)
                          setEditError('')
                        }}
                        className="min-h-12 w-full rounded-2xl border border-black/15 bg-paper px-3"
                      />
                    </label>
                    {editError ? <p role="alert" className="text-sm text-rose">{editError}</p> : null}
                    <div className="grid grid-cols-2 gap-2">
                      <button type="submit" className="min-h-12 rounded-2xl bg-rose px-3 font-medium text-white">
                        {t('sum.save')}
                      </button>
                      <button
                        type="button"
                        className="min-h-12 rounded-2xl bg-paper px-3 font-medium"
                        onClick={() => {
                          setEditing(null)
                          setEditError('')
                        }}
                      >
                        {t('sum.cancel')}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <button type="button" className="min-h-12 rounded-2xl bg-paper px-3 font-medium" onClick={() => openEdit(period)}>
                      {t('sum.edit')}
                    </button>
                    <button
                      type="button"
                      className="min-h-12 rounded-2xl bg-rose-soft px-3 font-medium text-ink"
                      onClick={() => {
                        setEditing(null)
                        setRemoving(period.start)
                      }}
                    >
                      {t('sum.delete')}
                    </button>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </section>

      {removingPeriod ? (
        <div
          role="alertdialog"
          aria-labelledby="delete-title"
          aria-describedby="delete-body"
          className="space-y-3 rounded-3xl bg-rose-soft px-4 py-4"
        >
          <h2 id="delete-title" className="text-lg font-semibold">{t('sum.delete')}</h2>
          <p id="delete-body" className="leading-relaxed">
            {t('sum.deleteAsk', {
              start: formatLong(removingPeriod.start, locale),
              end: formatLong(removingPeriod.end, locale),
            })}
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className="min-h-12 rounded-2xl bg-white px-3 font-medium text-ink"
              onClick={() => setRemoving(null)}
            >
              {t('sum.cancel')}
            </button>
            <button
              ref={deleteRef}
              type="button"
              className="min-h-12 rounded-2xl bg-rose px-3 font-medium text-white"
              onClick={() => {
                const start = removingPeriod.start
                setRemoving(null)
                void update((current) => deletePeriod(current, start))
              }}
            >
              {t('sum.deleteGo')}
            </button>
          </div>
        </div>
      ) : null}

      <p className="text-sm leading-relaxed text-muted">{t('disclaimer.short')}</p>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-white px-4 py-4 shadow-sm">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
    </div>
  )
}

function LengthChart({ lengths, caption }: { lengths: number[]; caption: string }) {
  const max = Math.max(...lengths, 1)
  const mean = lengths.reduce((sum, length) => sum + length, 0) / lengths.length
  const showLine = lengths.length >= 2
  return (
    <figure>
      <div className="relative h-40 rounded-2xl bg-paper px-2" role="img" aria-label={caption}>
        <div className="flex h-full items-end gap-2">
          {lengths.map((length, index) => (
            <div key={`${index}-${length}`} className="flex h-full min-w-0 flex-1 items-end">
              <div
                className="w-full rounded-t-lg bg-rose"
                style={{ height: `${Math.max(8, (length / max) * 100)}%` }}
              />
            </div>
          ))}
        </div>
        {showLine ? (
          <div
            className="pointer-events-none absolute inset-x-2 z-10 border-t-2 border-sage"
            style={{ bottom: `${(mean / max) * 100}%` }}
          />
        ) : null}
      </div>
      <div className="mt-2 flex gap-2 px-2" aria-hidden="true">
        {lengths.map((length, index) => (
          <p key={`label-${index}`} className="flex-1 text-center text-xs font-medium text-ink">{length}</p>
        ))}
      </div>
      <figcaption className="sr-only">{caption}</figcaption>
      <table className="sr-only">
        <caption>{caption}</caption>
        <tbody>
          {lengths.map((length, index) => (
            <tr key={`row-${index}`}>
              <th scope="row">{index + 1}</th>
              <td>{length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  )
}
