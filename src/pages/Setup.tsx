import { useRef, useState } from 'react'
import { Button, DigitField, LangToggle, MoonMark } from '../components/ui.tsx'
import { decryptExport } from '../lib/backup.ts'
import { seedFirstPeriod } from '../lib/cycles.ts'
import { PinError } from '../lib/crypto.ts'
import { todayISO } from '../lib/dates.ts'
import { useI18n } from '../lib/i18n.tsx'
import { emptyVault } from '../lib/schema.ts'
import { useBrandTitle } from '../lib/useTitle.ts'
import { useSession } from '../state/session.tsx'
import type { Vault } from '../types.ts'

type Step = 'about' | 'create' | 'confirm' | 'file' | 'cycle'

export function SetupPage() {
  const { locale, t } = useI18n()
  const { setup, suspendAutoLock } = useSession()
  const fileRef = useRef<HTMLInputElement>(null)
  const [step, setStep] = useState<Step>('about')
  const [pin, setPin] = useState('')
  const [confirm, setConfirm] = useState('')
  const [filePin, setFilePin] = useState('')
  const [fileText, setFileText] = useState<string | null>(null)
  const [imported, setImported] = useState<Vault | null>(null)
  const [startDate, setStartDate] = useState('')
  const [periodLength, setPeriodLength] = useState('5')
  const [cycleLength, setCycleLength] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  useBrandTitle()

  async function finish(nextPin: string, initial?: Vault) {
    setBusy(true)
    setError('')
    try {
      await setup(nextPin, initial ?? imported ?? undefined)
    } catch {
      setError(t('error.body'))
      setBusy(false)
    }
  }

  async function readCopy() {
    if (!fileText) return
    setBusy(true)
    setError('')
    try {
      const vault = await decryptExport(fileText, filePin)
      setImported(vault)
      setFileText(null)
      setFilePin('')
      setStep('create')
    } catch (caught) {
      setError(caught instanceof PinError ? t('setup.badPin') : t('setup.badFile'))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="rise flex flex-col gap-6 px-6 py-6">
      <div className="flex items-center justify-between">
        <MoonMark />
        <LangToggle />
      </div>
      {step === 'about' ? (
        <section className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">{t('setup.title')}</h1>
          <p className="leading-relaxed text-muted">{t('setup.lead')}</p>
          <ul className="space-y-3">
            {(['land.p1', 'land.p2', 'land.p5', 'land.p6'] as const).map((key) => (
              <li key={key} className="rounded-2xl bg-white px-4 py-3 leading-relaxed shadow-sm">{t(key)}</li>
            ))}
          </ul>
          <p className="leading-relaxed">{t('land.disclaimer')}</p>
          <p className="text-sm leading-relaxed text-muted">{t('setup.more')}</p>
          <Button className="w-full" onClick={() => setStep('create')}>{t('setup.continue')}</Button>
          <Button
            tone="quiet"
            className="w-full"
            onClick={() => {
              suspendAutoLock(120_000)
              fileRef.current?.click()
            }}
          >
            {t('setup.import')}
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            className="sr-only"
            onChange={(event) => {
              const file = event.target.files?.[0]
              event.target.value = ''
              if (!file) return
              if (file.size > 2_000_000) {
                setError(t('setup.badFile'))
                return
              }
              void file.text().then((text) => {
                setFileText(text)
                setError('')
                setStep('file')
              }).catch(() => setError(t('setup.badFile')))
            }}
          />
          {error ? <p role="alert" className="text-sm text-rose">{error}</p> : null}
        </section>
      ) : null}

      {step === 'file' ? (
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault()
            if (filePin.length < 4) {
              setError(t('setup.short'))
              return
            }
            void readCopy()
          }}
        >
          <h1 className="text-3xl font-semibold tracking-tight">{t('setup.filePin')}</h1>
          <DigitField
            label={t('pin.label')}
            value={filePin}
            onChange={(value) => {
              setFilePin(value)
              setError('')
            }}
            error={error}
            hint={busy ? t('setup.working') : t('setup.filePinHint')}
            pad
            autoFocus
          />
          <Button type="submit" className="w-full" disabled={busy || filePin.length < 4}>
            {busy ? t('common.working') : t('setup.create')}
          </Button>
          <Button tone="quiet" className="w-full" onClick={() => setStep('about')}>{t('setup.back')}</Button>
        </form>
      ) : null}

      {step === 'create' ? (
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault()
            if (pin.length < 4) {
              setError(t('setup.short'))
              return
            }
            setStep('confirm')
          }}
        >
          <h1 className="text-3xl font-semibold tracking-tight">{t('setup.pinTitle')}</h1>
          {imported ? <p className="rounded-2xl bg-sage-soft px-4 py-3 leading-relaxed">{t('setup.imported')}</p> : null}
          <DigitField
            label={t('pin.label')}
            value={pin}
            onChange={(value) => {
              setPin(value)
              setError('')
            }}
            error={error}
            hint={t('setup.pinHint')}
            pad
            autoFocus
          />
          <Button type="submit" className="w-full" disabled={pin.length < 4}>{t('setup.create')}</Button>
          <Button tone="quiet" className="w-full" onClick={() => setStep('about')}>{t('setup.back')}</Button>
        </form>
      ) : null}

      {step === 'confirm' ? (
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault()
            if (confirm !== pin) {
              setError(t('setup.mismatch'))
              setConfirm('')
              return
            }
            if (imported) void finish(pin)
            else setStep('cycle')
          }}
        >
          <h1 className="text-3xl font-semibold tracking-tight">{t('setup.confirmTitle')}</h1>
          <DigitField
            label={t('pin.label')}
            value={confirm}
            onChange={(value) => {
              setConfirm(value)
              setError('')
            }}
            error={error}
            hint={busy ? t('setup.working') : t('setup.pinHint')}
            pad
            autoFocus
          />
          <Button type="submit" className="w-full" disabled={busy || confirm.length < 4}>
            {busy ? t('setup.working') : imported ? t('setup.confirmAction') : t('setup.create')}
          </Button>
          <Button tone="quiet" className="w-full" onClick={() => setStep('create')}>{t('setup.back')}</Button>
        </form>
      ) : null}

      {step === 'cycle' ? (
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault()
            const days = Number(periodLength)
            if (!Number.isInteger(days) || days < 1 || days > 14) {
              setError(t('setup.periodInvalid'))
              return
            }
            const typed = cycleLength.trim()
            let typical: number | null = null
            if (typed) {
              typical = Number(typed)
              if (!Number.isInteger(typical) || typical < 15 || typical > 90) {
                setError(t('setup.cycleInvalid'))
                return
              }
            }
            const seeded = seedFirstPeriod(emptyVault(locale), startDate, days, typical, todayISO())
            if (!seeded.ok) {
              const key = seeded.error === 'future'
                ? 'setup.dateFuture'
                : seeded.error === 'span'
                  ? 'setup.periodInvalid'
                  : 'setup.dateRequired'
              setError(t(key))
              return
            }
            void finish(pin, seeded.vault)
          }}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold tracking-tight">{t('setup.cycleTitle')}</h1>
            <LangToggle />
          </div>
          <p className="leading-relaxed text-muted">{t('setup.cycleLead')}</p>
          <label className="block space-y-2" htmlFor="last-start">
            <span className="font-medium">{t('setup.startDate')}</span>
            <input
              id="last-start"
              type="date"
              required
              max={todayISO()}
              value={startDate}
              onChange={(event) => {
                setStartDate(event.target.value)
                setError('')
              }}
              className="min-h-12 w-full rounded-2xl border border-black/15 bg-white px-3"
            />
          </label>
          <label className="block space-y-2" htmlFor="period-length">
            <span className="font-medium">{t('setup.periodLength')}</span>
            <input
              id="period-length"
              inputMode="numeric"
              min={1}
              max={14}
              required
              value={periodLength}
              aria-describedby="period-hint"
              onChange={(event) => {
                setPeriodLength(event.target.value)
                setError('')
              }}
              className="min-h-12 w-full rounded-2xl border border-black/15 bg-white px-3"
            />
            <span id="period-hint" className="block text-sm leading-relaxed text-muted">{t('setup.periodLengthHint')}</span>
          </label>
          <label className="block space-y-2" htmlFor="cycle-length">
            <span className="font-medium">{t('setup.cycleLength')}</span>
            <input
              id="cycle-length"
              inputMode="numeric"
              min={15}
              max={90}
              value={cycleLength}
              aria-describedby="cycle-hint"
              onChange={(event) => {
                setCycleLength(event.target.value)
                setError('')
              }}
              className="min-h-12 w-full rounded-2xl border border-black/15 bg-white px-3"
            />
            <span id="cycle-hint" className="block text-sm leading-relaxed text-muted">{t('setup.cycleLengthHint')}</span>
          </label>
          {error ? <p role="alert" className="text-sm text-rose">{error}</p> : null}
          <Button type="submit" className="w-full" disabled={busy || !startDate}>
            {busy ? t('setup.working') : t('setup.confirmAction')}
          </Button>
          <Button tone="quiet" className="w-full" onClick={() => setStep('confirm')}>{t('setup.back')}</Button>
        </form>
      ) : null}
      <p className="text-sm text-muted">{t('disclaimer.short')}</p>
    </div>
  )
}
