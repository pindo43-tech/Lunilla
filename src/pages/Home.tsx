import { Link } from 'react-router-dom'
import { Button } from '../components/ui.tsx'
import { addDays, formatNumber, formatShort, todayISO } from '../lib/dates.ts'
import type { MessageKey } from '../lib/i18n.tsx'
import { useI18n } from '../lib/i18n.tsx'
import { markContinued, markEnded, markStarted } from '../lib/logs.ts'
import { getPhaseInfo } from '../lib/phases.ts'
import { hasDay, predict } from '../lib/predict.ts'
import { evaluateBleedSafety } from '../lib/safety.ts'
import { useBrandTitle } from '../lib/useTitle.ts'
import { useSession } from '../state/session.tsx'
import type { Confidence, PhaseName, Prediction } from '../types.ts'

const PHASE_NAME: Record<PhaseName, MessageKey> = {
  menstrual: 'phase.menstrual',
  follicular: 'phase.follicular',
  ovulatory: 'phase.ovulatory',
  luteal: 'phase.luteal',
}

const PHASE_HELP: Record<PhaseName, MessageKey> = {
  menstrual: 'phase.menstrual.help',
  follicular: 'phase.follicular.help',
  ovulatory: 'phase.ovulatory.help',
  luteal: 'phase.luteal.help',
}

const CONF_TAG: Record<Confidence, MessageKey> = {
  none: 'conf.tag.none',
  low: 'conf.tag.low',
  medium: 'conf.tag.medium',
  high: 'conf.tag.high',
}

const CONF_BODY: Record<Confidence, MessageKey> = {
  none: 'conf.none',
  low: 'conf.low',
  medium: 'conf.medium',
  high: 'conf.high',
}

export function HomePage() {
  const { vault, update } = useSession()
  const { locale, t } = useI18n()
  useBrandTitle(t('tabs.home'))
  if (!vault) return null
  const today = todayISO()
  const yesterday = addDays(today, -1)
  const prediction = predict(vault.days, vault.settings.historyLength, today, vault.settings.typicalCycleLength)
  const bleeding = vault.days[today]?.flow && vault.days[today]?.flow !== 'none'
  const todayKnown = hasDay(vault.days, today)
  const isOngoing = bleeding || prediction.periodOpen || (prediction.bleedEnd !== null && today <= prediction.bleedEnd)
  const safety = evaluateBleedSafety(prediction.bleedLength, Boolean(isOngoing))

  return (
    <div className="rise space-y-5 pb-4">
      <p className="text-sm text-muted">{formatShort(today, locale)}</p>
      {safety.prolongedBleed ? (
        <section role="alert" className="space-y-1 rounded-3xl border border-amber-300 bg-amber-50 px-4 py-4 text-ink shadow-sm">
          <p className="font-semibold text-amber-900">{t('safety.prolongedTitle')}</p>
          <p className="text-sm leading-relaxed text-amber-800">{t('safety.prolongedBody', { n: safety.consecutiveDays })}</p>
        </section>
      ) : null}
      {prediction.lastStart ? (
        <CycleCard prediction={prediction} locale={locale} />
      ) : (
        <section className="rounded-3xl bg-rose-soft px-4 py-5">
          <h1 className="text-2xl font-semibold tracking-tight">{t('home.emptyTitle')}</h1>
          <p className="mt-2 leading-relaxed">{t('home.emptyBody')}</p>
        </section>
      )}

      {prediction.periodOpen ? (
        <section className="space-y-3 rounded-3xl bg-white px-4 py-4 shadow-sm" aria-label={t('open.ask')}>
          <p className="leading-relaxed">{t('open.ask')}</p>
          <div className="grid grid-cols-2 gap-2">
            <Button onClick={() => void update((current) => markContinued(current, today, yesterday))}>{t('open.yes')}</Button>
            <Button tone="quiet" onClick={() => void update((current) => markEnded(current, today))}>{t('open.no')}</Button>
          </div>
        </section>
      ) : null}

      {!bleeding && !prediction.periodOpen && !todayKnown ? (
        <Button className="w-full" onClick={() => void update((current) => markStarted(current, today))}>
          {t('home.startToday')}
        </Button>
      ) : null}

      <section className="space-y-2 rounded-3xl bg-white px-4 py-4 shadow-sm">
        <h2 className="text-lg font-semibold">{t('pred.title')}</h2>
        <p className="leading-relaxed">{whenLine(prediction, locale, t)}</p>
        <p className="leading-relaxed">{t('pred.used', { n: prediction.cyclesUsed })}</p>
        <p className="inline-flex rounded-full bg-lavender-soft px-3 py-1 text-sm font-medium text-ink">{t(CONF_TAG[prediction.confidence])}</p>
        {prediction.predictedLength !== null && prediction.cyclesUsed < 2 ? (
          <p className="leading-relaxed">{t('pred.underTwo')}</p>
        ) : (
          <p className="leading-relaxed text-muted">{t(CONF_BODY[prediction.confidence])}</p>
        )}
        {prediction.lengthSource === 'typical' && prediction.predictedLength !== null ? (
          <p className="leading-relaxed text-muted">{t('pred.typical', { n: prediction.predictedLength })}</p>
        ) : null}
        {prediction.irregular ? <p className="leading-relaxed">{t('pred.irregular')}</p> : null}
        {prediction.daysUntil !== null && prediction.daysUntil >= 0 && prediction.daysUntil <= 2 ? (
          <p role="status" className="rounded-2xl bg-rose-soft px-3 py-3 leading-relaxed">{t('home.soon')}</p>
        ) : null}
        {prediction.lengths.length >= 2 && prediction.weightedMean !== null && prediction.mean !== null && prediction.sd !== null ? (
          <details className="text-sm leading-relaxed text-muted">
            <summary className="cursor-pointer font-medium text-ink">{t('pred.how')}</summary>
            <p className="mt-2">
              {t('pred.howBody', {
                count: prediction.lengths.length,
                list: prediction.lengths.join(', '),
                weighted: formatNumber(prediction.weightedMean, locale),
                mean: formatNumber(prediction.mean, locale),
                sd: formatNumber(prediction.sd, locale),
              })}
            </p>
          </details>
        ) : null}
      </section>

      <section className="space-y-2 rounded-3xl bg-sage-soft px-4 py-4">
        <h2 className="text-lg font-semibold">{t('fertile.title')}</h2>
        {prediction.fertileStart && prediction.fertileEnd ? (
          <>
            <p className="leading-relaxed">
              {t('fertile.range', {
                start: formatShort(prediction.fertileStart, locale),
                end: formatShort(prediction.fertileEnd, locale),
              })}
            </p>
            {prediction.fertileIsNextCycle ? <p className="leading-relaxed">{t('fertile.next')}</p> : null}
          </>
        ) : (
          <p className="leading-relaxed">{t('fertile.none')}</p>
        )}
        <p className="text-sm leading-relaxed">{t('fertile.warn')}</p>
      </section>

      <Link to={`/app/day/${today}`} className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-black/10 bg-white font-medium">
        {t('home.logToday')}
      </Link>
      <p className="text-sm leading-relaxed text-muted">{t('disclaimer.short')}</p>
    </div>
  )
}

function CycleCard({ prediction, locale }: { prediction: Prediction; locale: 'es' | 'en' }) {
  const { t } = useI18n()
  const length = prediction.predictedLength
  const progress = length && prediction.cycleDay ? Math.min(1, prediction.cycleDay / length) : 0
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const dash = circumference * progress
  const info = prediction.phase ? getPhaseInfo(prediction.phase, locale) : null
  return (
    <section className="space-y-4 rounded-3xl bg-white px-4 py-5 shadow-sm">
      <div className="flex items-center gap-4">
        <svg viewBox="0 0 120 120" className="h-28 w-28 shrink-0" aria-hidden="true">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="#F6D5DE" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#8F3D56"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference - dash}`}
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div>
          <p className="text-sm text-muted">{t('home.dayCaption')}</p>
          <p className="text-5xl font-semibold tracking-tight">{prediction.cycleDay}</p>
          <p className="sr-only">{t('home.cycleDay', { day: prediction.cycleDay ?? 0 })}</p>
          {prediction.phase ? (
            <>
              <p className="mt-2 inline-flex rounded-full bg-rose-soft px-3 py-1 text-sm font-medium">
                <span className="sr-only">{t('home.phaseLabel')}: </span>
                {t(PHASE_NAME[prediction.phase])}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(PHASE_HELP[prediction.phase])}</p>
            </>
          ) : (
            <>
              <p className="mt-2 font-medium">{t('home.noPhase')}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{t('home.noPhaseBody')}</p>
            </>
          )}
        </div>
      </div>
      {info ? (
        <details className="rounded-2xl bg-paper/60 p-3 text-sm text-muted">
          <summary className="cursor-pointer font-medium text-ink select-none">{t('phase.learn')}</summary>
          <div className="mt-2 space-y-2 pt-2 border-t border-black/5 text-ink">
            <p className="leading-relaxed">{info.description}</p>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider">{t('phase.commonSigns')}</p>
            <ul className="list-inside list-disc space-y-1 text-xs text-muted">
              {info.symptoms.map((symptom, idx) => (
                <li key={idx}>{symptom}</li>
              ))}
            </ul>
          </div>
        </details>
      ) : null}
    </section>
  )
}

function whenLine(prediction: Prediction, locale: 'es' | 'en', t: (key: MessageKey, vars?: Record<string, string | number>) => string): string {
  if (!prediction.nextPeriod || prediction.daysUntil === null) return t('pred.none')
  const date = formatShort(prediction.nextPeriod, locale)
  const days = prediction.daysUntil
  if (days === 0) return t('pred.today')
  if (days === 1) return t('pred.tomorrow', { date })
  if (days > 1) return t('pred.inDays', { n: days, date })
  if (days === -1) return t('pred.yesterday')
  return t('pred.ago', { n: Math.abs(days) })
}
