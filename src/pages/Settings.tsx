import { useRef, useState } from 'react'
import { Button, DigitField } from '../components/ui.tsx'
import { PinError } from '../lib/crypto.ts'
import { useI18n } from '../lib/i18n.tsx'
import { MAX_CYCLE_DAYS, MIN_CYCLE_DAYS } from '../lib/constants.ts'
import { useBrandTitle } from '../lib/useTitle.ts'
import { useSession } from '../state/session.tsx'
import type { Locale } from '../types.ts'

const MINUTES = [1, 5, 15, 30] as const

export function SettingsPage() {
  const { vault, update, changePin, exportCopy, importCopy, erase, lock, suspendAutoLock } = useSession()
  const { locale, setLocale, t } = useI18n()
  const fileRef = useRef<HTMLInputElement>(null)
  const [currentPin, setCurrentPin] = useState('')
  const [nextPin, setNextPin] = useState('')
  const [repeatPin, setRepeatPin] = useState('')
  const [pinMessage, setPinMessage] = useState('')
  const [pinError, setPinError] = useState('')
  const [pinBusy, setPinBusy] = useState(false)
  const [importText, setImportText] = useState<string | null>(null)
  const [importPin, setImportPin] = useState('')
  const [importMessage, setImportMessage] = useState('')
  const [importError, setImportError] = useState('')
  const [importBusy, setImportBusy] = useState(false)
  const [reminderNote, setReminderNote] = useState('')
  const [eraseText, setEraseText] = useState('')
  const [eraseError, setEraseError] = useState('')
  const [typicalText, setTypicalText] = useState<string | null>(null)
  const [typicalError, setTypicalError] = useState('')
  useBrandTitle(t('tabs.settings'))
  if (!vault) return null

  async function savePin() {
    setPinMessage('')
    setPinError('')
    if (nextPin.length < 4 || nextPin.length > 6) {
      setPinError(t('set.pinShort'))
      return
    }
    if (nextPin !== repeatPin) {
      setPinError(t('set.pinMismatch'))
      return
    }
    setPinBusy(true)
    try {
      await changePin(currentPin, nextPin)
      setCurrentPin('')
      setNextPin('')
      setRepeatPin('')
      setPinMessage(t('set.pinOk'))
    } catch (caught) {
      setPinError(caught instanceof PinError ? t('set.pinBad') : t('common.saveError'))
    } finally {
      setPinBusy(false)
    }
  }

  async function toggleReminders(enabled: boolean) {
    setReminderNote('')
    if (!enabled) {
      await update((current) => ({ ...current, settings: { ...current.settings, remindersEnabled: false } }))
      return
    }
    if (typeof Notification === 'undefined') {
      setReminderNote(t('set.remindersUnsupported'))
      return
    }
    suspendAutoLock(60_000)
    let permission = Notification.permission
    try {
      if (permission !== 'granted') permission = await Notification.requestPermission()
    } finally {
      suspendAutoLock(0)
    }
    if (permission !== 'granted') {
      setReminderNote(t('set.remindersDenied'))
      await update((current) => ({ ...current, settings: { ...current.settings, remindersEnabled: false } }))
      return
    }
    await update((current) => ({ ...current, settings: { ...current.settings, remindersEnabled: true } }))
  }

  return (
    <div className="rise space-y-8 pb-8">
      <h1 className="text-2xl font-semibold tracking-tight">{t('tabs.settings')}</h1>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t('set.language')}</h2>
        <div role="radiogroup" aria-label={t('set.language')} className="grid grid-cols-2 gap-2">
          {(['es', 'en'] as const satisfies readonly Locale[]).map((code) => (
            <button
              key={code}
              type="button"
              role="radio"
              aria-checked={locale === code}
              onClick={() => {
                setLocale(code)
                void update((current) => ({ ...current, settings: { ...current.settings, locale: code } }))
              }}
              className={code === locale ? 'min-h-12 rounded-2xl bg-rose text-white' : 'min-h-12 rounded-2xl bg-white shadow-sm'}
            >
              {t(code === 'es' ? 'lang.es' : 'lang.en')}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t('set.discreet')}</h2>
        <p className="text-sm leading-relaxed text-muted">{t('set.discreetHelp')}</p>
        <Button
          tone={vault.settings.discreet ? 'sage' : 'quiet'}
          className="w-full"
          aria-pressed={vault.settings.discreet}
          onClick={() => void update((current) => ({
            ...current,
            settings: { ...current.settings, discreet: !current.settings.discreet },
          }))}
        >
          {vault.settings.discreet ? t('set.discreetOn') : t('set.discreetOff')}
        </Button>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t('set.typical')}</h2>
        <p id="typical-hint" className="text-sm leading-relaxed text-muted">{t('set.typicalHelp')}</p>
        <label className="sr-only" htmlFor="typical-cycle">{t('set.typical')}</label>
        <input
          id="typical-cycle"
          inputMode="numeric"
          value={typicalText ?? (vault.settings.typicalCycleLength === null ? '' : String(vault.settings.typicalCycleLength))}
          aria-describedby="typical-hint"
          aria-invalid={typicalError ? true : undefined}
          onChange={(event) => {
            setTypicalText(event.target.value)
            setTypicalError('')
          }}
          onBlur={() => {
            if (typicalText === null) return
            const raw = typicalText.trim()
            setTypicalText(null)
            if (!raw) {
              void update((current) => ({
                ...current,
                settings: { ...current.settings, typicalCycleLength: null },
              }))
              return
            }
            const value = Number(raw)
            if (!Number.isInteger(value) || value < MIN_CYCLE_DAYS || value > MAX_CYCLE_DAYS) {
              setTypicalError(t('set.typicalInvalid'))
              return
            }
            void update((current) => ({
              ...current,
              settings: { ...current.settings, typicalCycleLength: value },
            }))
          }}
          className="min-h-12 w-full rounded-2xl border border-black/15 bg-white px-3"
        />
        {typicalError ? <p role="alert" className="text-sm text-rose">{typicalError}</p> : null}
        {vault.settings.typicalCycleLength !== null ? (
          <Button
            tone="quiet"
            className="w-full"
            onClick={() => {
              setTypicalText('')
              setTypicalError('')
              void update((current) => ({
                ...current,
                settings: { ...current.settings, typicalCycleLength: null },
              }))
            }}
          >
            {t('set.typicalClear')}
          </Button>
        ) : null}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t('set.lock')}</h2>
        <p className="text-sm leading-relaxed text-muted">{t('set.lockHelp')}</p>
        <div role="radiogroup" aria-label={t('set.lock')} className="grid grid-cols-4 gap-2">
          {MINUTES.map((minutes) => {
            const selected = vault.settings.autoLockMinutes === minutes
            return (
              <button
                key={minutes}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => void update((current) => ({
                  ...current,
                  settings: { ...current.settings, autoLockMinutes: minutes },
                }))}
                className={selected ? 'min-h-12 rounded-2xl bg-rose text-sm text-white' : 'min-h-12 rounded-2xl bg-white text-sm shadow-sm'}
              >
                {t('set.minutes', { n: minutes })}
              </button>
            )
          })}
        </div>
        <Button tone="quiet" className="w-full" onClick={lock}>{t('set.lockNow')}</Button>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t('set.history')}</h2>
        <p className="text-sm leading-relaxed text-muted">{t('set.historyHelp')}</p>
        <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-2 shadow-sm">
          <button
            type="button"
            aria-label={t('set.less')}
            disabled={vault.settings.historyLength <= 3}
            onClick={() => void update((current) => ({
              ...current,
              settings: { ...current.settings, historyLength: current.settings.historyLength - 1 },
            }))}
            className="min-h-12 min-w-12 rounded-full text-xl disabled:text-muted"
          >
            −
          </button>
          <p className="text-2xl font-semibold">{vault.settings.historyLength}</p>
          <button
            type="button"
            aria-label={t('set.more')}
            disabled={vault.settings.historyLength >= 12}
            onClick={() => void update((current) => ({
              ...current,
              settings: { ...current.settings, historyLength: current.settings.historyLength + 1 },
            }))}
            className="min-h-12 min-w-12 rounded-full text-xl disabled:text-muted"
          >
            +
          </button>
        </div>
      </section>

      <form
        className="space-y-3"
        onSubmit={(event) => {
          event.preventDefault()
          void savePin()
        }}
      >
        <h2 className="text-lg font-semibold">{t('set.pin')}</h2>
        <DigitField label={t('set.pinCurrent')} value={currentPin} onChange={setCurrentPin} />
        <DigitField label={t('set.pinNew')} value={nextPin} onChange={setNextPin} />
        <DigitField label={t('set.pinRepeat')} value={repeatPin} onChange={setRepeatPin} error={pinError} />
        {pinMessage ? <p role="status" className="text-sm text-sage">{pinMessage}</p> : null}
        <Button type="submit" className="w-full" disabled={pinBusy}>{pinBusy ? t('common.working') : t('set.pinSave')}</Button>
      </form>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t('set.reminders')}</h2>
        <p className="text-sm leading-relaxed text-muted">{t('set.remindersHelp')}</p>
        <Button
          tone={vault.settings.remindersEnabled ? 'sage' : 'quiet'}
          className="w-full"
          aria-pressed={vault.settings.remindersEnabled}
          onClick={() => void toggleReminders(!vault.settings.remindersEnabled)}
        >
          {vault.settings.remindersEnabled ? t('set.remindersOn') : t('set.remindersOff')}
        </Button>
        {reminderNote ? <p role="status" className="text-sm leading-relaxed">{reminderNote}</p> : null}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t('set.export')}</h2>
        <p className="text-sm leading-relaxed text-muted">{t('set.exportHelp')}</p>
        <Button className="w-full" onClick={() => void exportCopy()}>{t('set.export')}</Button>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t('set.import')}</h2>
        <p className="text-sm leading-relaxed text-muted">{t('set.importHelp')}</p>
        <Button
          tone="quiet"
          className="w-full"
          onClick={() => {
            suspendAutoLock(120_000)
            fileRef.current?.click()
          }}
        >
          {t('setup.openFile')}
        </Button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          className="sr-only"
          onChange={(event) => {
            const file = event.target.files?.[0]
            event.target.value = ''
            if (!file || file.size > 2_000_000) {
              setImportError(t('set.importBad'))
              return
            }
            void file.text().then((text) => {
              setImportText(text)
              setImportError('')
              setImportMessage('')
            }).catch(() => setImportError(t('set.importBad')))
          }}
        />
        {importText ? (
          <form
            className="space-y-3"
            onSubmit={(event) => {
              event.preventDefault()
              setImportBusy(true)
              setImportError('')
              void importCopy(importText, importPin)
                .then(() => {
                  setImportText(null)
                  setImportPin('')
                  setImportMessage(t('set.importOk'))
                })
                .catch((caught: unknown) => {
                  setImportError(caught instanceof PinError ? t('unlock.wrong') : t('set.importBad'))
                })
                .finally(() => setImportBusy(false))
            }}
          >
            <DigitField label={t('set.importPin')} value={importPin} onChange={setImportPin} error={importError} />
            <Button type="submit" className="w-full" disabled={importBusy || importPin.length < 4}>
              {importBusy ? t('common.working') : t('set.importGo')}
            </Button>
          </form>
        ) : null}
        {importMessage ? <p role="status" className="text-sm text-sage">{importMessage}</p> : null}
        {!importText && importError ? <p role="alert" className="text-sm text-rose">{importError}</p> : null}
      </section>

      <section className="space-y-3 rounded-3xl bg-rose-soft px-4 py-4">
        <h2 className="text-lg font-semibold">{t('set.erase')}</h2>
        <p className="text-sm leading-relaxed">{t('set.eraseHelp')}</p>
        <label className="block">
          <span className="sr-only">{t('set.eraseWord')}</span>
          <input
            value={eraseText}
            onChange={(event) => {
              setEraseText(event.target.value)
              setEraseError('')
            }}
            autoComplete="off"
            className="min-h-12 w-full rounded-2xl border border-black/10 bg-white px-3"
          />
        </label>
        {eraseError ? <p role="alert" className="text-sm text-rose">{eraseError}</p> : null}
        <Button
          className="w-full"
          disabled={eraseText !== t('set.eraseWord')}
          onClick={() => {
            if (eraseText !== t('set.eraseWord')) {
              setEraseError(t('set.eraseHelp'))
              return
            }
            void erase()
          }}
        >
          {t('set.eraseGo')}
        </Button>
      </section>

      <section className="space-y-2 text-sm leading-relaxed text-muted">
        <h2 className="text-lg font-semibold text-ink">{t('set.about')}</h2>
        <p>{t('set.aboutBody')}</p>
        <h2 className="pt-2 text-lg font-semibold text-ink">{t('set.crypto')}</h2>
        <p>{t('set.cryptoBody')}</p>
        <p>{t('land.disclaimer')}</p>
      </section>
    </div>
  )
}
