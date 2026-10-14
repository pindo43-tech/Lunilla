import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/ui.tsx'
import { MOOD_IDS, SYMPTOM_IDS } from '../lib/catalog.ts'
import { cx } from '../lib/cx.ts'
import { formatLong, isISODate } from '../lib/dates.ts'
import type { MessageKey } from '../lib/i18n.tsx'
import { useI18n } from '../lib/i18n.tsx'
import { clearFlow, removeCustomSymptom, setBasalTemp, setMucus, setTagIntensity, toggleTag, writeDay } from '../lib/logs.ts'
import { emptyDay } from '../lib/schema.ts'
import { useBrandTitle } from '../lib/useTitle.ts'
import { useSession } from '../state/session.tsx'
import type { Flow, Intensity, Mucus, Tag } from '../types.ts'

const FLOWS: Flow[] = ['none', 'light', 'medium', 'heavy']
const MUCUS: Mucus[] = ['dry', 'sticky', 'creamy', 'eggwhite', 'watery']
const MUCUS_KEY: Record<Mucus, MessageKey> = {
  dry: 'mucus.dry',
  sticky: 'mucus.sticky',
  creamy: 'mucus.creamy',
  eggwhite: 'mucus.eggwhite',
  watery: 'mucus.watery',
}
const FLOW_KEY: Record<Flow, MessageKey> = {
  none: 'flow.none',
  light: 'flow.light',
  medium: 'flow.medium',
  heavy: 'flow.heavy',
}
const INTENSITY_KEY: Record<Intensity, MessageKey> = {
  1: 'int.1',
  2: 'int.2',
  3: 'int.3',
}
const SYMPTOM_KEY: Record<(typeof SYMPTOM_IDS)[number], MessageKey> = {
  cramps: 'sym.cramps',
  bloating: 'sym.bloating',
  headache: 'sym.headache',
  acne: 'sym.acne',
  fatigue: 'sym.fatigue',
  cravings: 'sym.cravings',
}
const MOOD_KEY: Record<(typeof MOOD_IDS)[number], MessageKey> = {
  calm: 'mood.calm',
  irritable: 'mood.irritable',
  sad: 'mood.sad',
  energetic: 'mood.energetic',
  anxious: 'mood.anxious',
}

export function DayPage() {
  const { iso = '' } = useParams()
  const { vault, update } = useSession()
  const { locale, t } = useI18n()
  const [custom, setCustom] = useState('')
  const [customError, setCustomError] = useState('')
  const [tempText, setTempText] = useState<string | null>(null)
  const [tempError, setTempError] = useState('')
  useBrandTitle(isISODate(iso) ? formatLong(iso, locale) : undefined)
  if (!vault) return null
  if (!isISODate(iso)) {
    return (
      <div className="space-y-4">
        <p>{t('day.invalid')}</p>
        <Link to="/app/calendar" className="font-medium text-rose">{t('day.back')}</Link>
      </div>
    )
  }
  const day = vault.days[iso] ?? emptyDay()

  function addCustom() {
    const name = custom.trim().slice(0, 40)
    if (!name) return
    const exists = vault?.customSymptoms.some((item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase())
    if (exists) {
      setCustomError(t('day.duplicate'))
      return
    }
    const id = `c-${crypto.randomUUID()}`
    void update((current) => ({
      ...current,
      customSymptoms: [...current.customSymptoms, { id, name }],
    }))
    setCustom('')
    setCustomError('')
  }

  return (
    <div className="rise space-y-6 pb-6">
      <div>
        <Link to="/app/calendar" className="text-sm font-medium text-rose">{t('day.back')}</Link>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">{formatLong(iso, locale)}</h1>
      </div>

      <section>
        <h2 className="mb-2 text-lg font-semibold">{t('day.flow')}</h2>
        <div role="radiogroup" aria-label={t('day.flow')} className="grid grid-cols-2 gap-2">
          {FLOWS.map((flow) => {
            const selected = day.flow === flow
            return (
              <button
                key={flow}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => void update((current) => writeDay(current, iso, (item) => ({ ...item, flow })))}
                className={cx(
                  'min-h-12 rounded-2xl px-3 text-sm font-medium',
                  selected ? 'bg-rose text-white' : 'bg-white shadow-sm',
                )}
              >
                {t(FLOW_KEY[flow])}
              </button>
            )
          })}
        </div>
        {day.flow !== null ? (
          <button
            type="button"
            className="mt-2 min-h-11 text-sm font-medium text-rose"
            onClick={() => void update((current) => clearFlow(current, iso))}
          >
            {t('day.clearFlow')}
          </button>
        ) : null}
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">{t('day.temp')}</h2>
        <p id="temp-hint" className="text-sm leading-relaxed text-muted">{t('day.tempHint')}</p>
        <div className="flex gap-2">
          <label className="sr-only" htmlFor="basal-temp">{t('day.temp')}</label>
          <input
            id="basal-temp"
            inputMode="decimal"
            value={tempText ?? (day.basalTemp === null ? '' : String(day.basalTemp))}
            placeholder={t('day.tempPh')}
            aria-describedby="temp-hint"
            aria-invalid={tempError ? true : undefined}
            onChange={(event) => {
              setTempText(event.target.value)
              setTempError('')
            }}
            onBlur={() => {
              if (tempText === null) return
              const raw = tempText.trim().replace(',', '.')
              setTempText(null)
              if (!raw) {
                void update((current) => setBasalTemp(current, iso, null))
                return
              }
              const value = Number(raw)
              if (!Number.isFinite(value) || value < 35 || value > 42) {
                setTempError(t('day.tempInvalid'))
                return
              }
              void update((current) => setBasalTemp(current, iso, Math.round(value * 100) / 100))
            }}
            className="min-h-12 flex-1 rounded-2xl border border-black/15 bg-white px-3"
          />
          <button
            type="button"
            className="min-h-12 rounded-2xl bg-white px-3 text-sm font-medium text-rose shadow-sm"
            onClick={() => {
              setTempText('')
              setTempError('')
              void update((current) => setBasalTemp(current, iso, null))
            }}
          >
            {t('day.tempClear')}
          </button>
        </div>
        {tempError ? <p role="alert" className="text-sm text-rose">{tempError}</p> : null}
      </section>

      <section className="space-y-2">
        <h2 id="mucus-label" className="text-lg font-semibold">{t('day.mucus')}</h2>
        <div role="radiogroup" aria-labelledby="mucus-label" className="grid grid-cols-2 gap-2">
          <button
            type="button"
            role="radio"
            aria-checked={day.mucus === null}
            onClick={() => void update((current) => setMucus(current, iso, null))}
            className={cx(
              'min-h-12 rounded-2xl px-3 text-sm font-medium',
              day.mucus === null ? 'bg-sage text-white' : 'bg-white text-ink shadow-sm',
            )}
          >
            {t('day.mucusClear')}
          </button>
          {MUCUS.map((kind) => {
            const selected = day.mucus === kind
            return (
              <button
                key={kind}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => void update((current) => setMucus(current, iso, kind))}
                className={cx(
                  'min-h-12 rounded-2xl px-3 text-sm font-medium',
                  selected ? 'bg-sage text-white' : 'bg-white text-ink shadow-sm',
                )}
              >
                {t(MUCUS_KEY[kind])}
              </button>
            )
          })}
        </div>
      </section>

      <TagSection
        title={t('day.symptoms')}
        tags={day.symptoms}
        options={[
          ...SYMPTOM_IDS.map((id) => ({ id, label: t(SYMPTOM_KEY[id]) })),
          ...vault.customSymptoms.map((item) => ({ id: item.id, label: item.name })),
        ]}
        onToggle={(id) => void update((current) => writeDay(current, iso, (item) => ({
          ...item,
          symptoms: toggleTag(item.symptoms, id),
        })))}
        onIntensity={(id, intensity) => void update((current) => writeDay(current, iso, (item) => ({
          ...item,
          symptoms: setTagIntensity(item.symptoms, id, intensity),
        })))}
      />

      {vault.customSymptoms.length > 0 ? (
        <ul className="space-y-2">
          {vault.customSymptoms.map((item) => (
            <li key={item.id} className="flex items-center justify-between gap-3 text-sm">
              <span>{item.name}</span>
              <button
                type="button"
                className="min-h-11 rounded-full px-3 text-rose"
                onClick={() => void update((current) => removeCustomSymptom(current, item.id))}
              >
                {t('day.removeCustom', { name: item.name })}
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <form
        className="space-y-2"
        onSubmit={(event) => {
          event.preventDefault()
          addCustom()
        }}
      >
        <h2 className="text-lg font-semibold">{t('day.addSymptom')}</h2>
        <div className="flex gap-2">
          <label className="sr-only" htmlFor="custom-symptom">{t('day.customPh')}</label>
          <input
            id="custom-symptom"
            value={custom}
            maxLength={40}
            placeholder={t('day.customPh')}
            onChange={(event) => {
              setCustom(event.target.value)
              setCustomError('')
            }}
            className="min-h-12 flex-1 rounded-2xl border border-black/10 bg-white px-3"
          />
          <Button type="submit" disabled={!custom.trim()}>{t('day.add')}</Button>
        </div>
        {customError ? <p role="alert" className="text-sm text-rose">{customError}</p> : null}
      </form>

      <TagSection
        title={t('day.moods')}
        tags={day.moods}
        options={MOOD_IDS.map((id) => ({ id, label: t(MOOD_KEY[id]) }))}
        onToggle={(id) => void update((current) => writeDay(current, iso, (item) => ({
          ...item,
          moods: toggleTag(item.moods, id),
        })))}
        onIntensity={(id, intensity) => void update((current) => writeDay(current, iso, (item) => ({
          ...item,
          moods: setTagIntensity(item.moods, id, intensity),
        })))}
      />

      <section className="space-y-2">
        <label htmlFor="day-note" className="block text-lg font-semibold">{t('day.note')}</label>
        <textarea
          id="day-note"
          value={day.note}
          maxLength={500}
          rows={4}
          placeholder={t('day.notePh')}
          onChange={(event) => {
            const note = event.target.value
            void update((current) => writeDay(current, iso, (item) => ({ ...item, note })))
          }}
          className="w-full rounded-2xl border border-black/10 bg-white px-3 py-3 leading-relaxed"
        />
      </section>
      <p className="text-sm text-muted">{t('day.saved')}</p>
    </div>
  )
}

function TagSection({
  title,
  options,
  tags,
  onToggle,
  onIntensity,
}: {
  title: string
  options: Array<{ id: string; label: string }>
  tags: Tag[]
  onToggle: (id: string) => void
  onIntensity: (id: string, intensity: Intensity) => void
}) {
  const { t } = useI18n()
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      <ul className="space-y-2">
        {options.map((option) => {
          const selected = tags.find((tag) => tag.id === option.id)
          return (
            <li key={option.id} className="rounded-2xl bg-white px-3 py-3 shadow-sm">
              <button
                type="button"
                aria-pressed={Boolean(selected)}
                onClick={() => onToggle(option.id)}
                className="flex min-h-11 w-full items-center justify-between text-left font-medium"
              >
                <span>{option.label}</span>
                <span aria-hidden="true" className={cx('h-3 w-3 rounded-full', selected ? 'bg-rose' : 'bg-black/10')} />
              </button>
              {selected ? (
                <div role="radiogroup" aria-label={`${option.label}. ${t('day.intensity')}`} className="mt-2 grid grid-cols-3 gap-2">
                  {([1, 2, 3] as const).map((level) => (
                    <button
                      key={level}
                      type="button"
                      role="radio"
                      aria-checked={selected.intensity === level}
                      onClick={() => onIntensity(option.id, level)}
                      className={cx(
                        'min-h-11 rounded-xl text-sm',
                        selected.intensity === level ? 'bg-lavender text-white' : 'bg-lavender-soft',
                      )}
                    >
                      {t(INTENSITY_KEY[level])}
                    </button>
                  ))}
                </div>
              ) : null}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
