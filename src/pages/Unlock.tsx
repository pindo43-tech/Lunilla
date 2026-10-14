import { useState } from 'react'
import { Button, DigitField, LangToggle, MoonMark } from '../components/ui.tsx'
import { PinError } from '../lib/crypto.ts'
import { useDiscreet } from '../lib/discreet.ts'
import { useI18n } from '../lib/i18n.tsx'
import { useBrandTitle } from '../lib/useTitle.ts'
import { useSession } from '../state/session.tsx'

export function UnlockPage() {
  const { t } = useI18n()
  const { unlock } = useSession()
  const discreet = useDiscreet()
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  useBrandTitle()

  return (
    <form
      className="rise flex flex-col gap-6 px-6 py-6"
      onSubmit={(event) => {
        event.preventDefault()
        if (pin.length < 4 || busy) return
        setBusy(true)
        setError('')
        void unlock(pin)
          .catch((caught: unknown) => {
            setError(caught instanceof PinError ? t('unlock.wrong') : t('unlock.damaged'))
            setPin('')
          })
          .finally(() => setBusy(false))
      }}
    >
      <div className="flex items-center justify-between">
        {discreet ? <span aria-hidden="true" /> : <MoonMark />}
        <LangToggle />
      </div>
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{discreet ? t('unlock.titleDiscreet') : t('unlock.title')}</h1>
        <p className="leading-relaxed text-muted">{discreet ? t('unlock.leadDiscreet') : t('unlock.lead')}</p>
      </header>
      <DigitField
        label={t('pin.label')}
        value={pin}
        onChange={(value) => {
          setPin(value)
          setError('')
        }}
        error={error}
        hint={busy ? t('unlock.working') : t('setup.pinHint')}
        pad
        autoFocus
      />
      <Button type="submit" className="w-full" disabled={busy || pin.length < 4}>
        {busy ? t('unlock.working') : t('unlock.submit')}
      </Button>
    </form>
  )
}
