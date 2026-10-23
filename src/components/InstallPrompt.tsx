import { useState } from 'react'
import { dismissInstallPrompt, isInstallDismissed, isIOS, isStandalone } from '../lib/installPrompt.ts'
import { useI18n } from '../lib/i18n.tsx'

export function InstallPrompt() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(() => !isStandalone() && !isInstallDismissed())

  if (!visible) return null

  function handleDismiss() {
    dismissInstallPrompt()
    setVisible(false)
  }

  const ios = isIOS()

  return (
    <aside
      aria-label={t('install.title')}
      className="mx-5 mb-3 flex items-start justify-between gap-3 rounded-2xl border border-rose-300/60 bg-rose-soft/80 p-3.5 text-ink shadow-sm"
    >
      <div className="space-y-1 text-sm">
        <p className="font-semibold text-rose">{t('install.title')}</p>
        <p className="leading-snug text-muted text-xs">
          {ios ? t('install.ios') : t('install.generic')}
        </p>
      </div>
      <button
        type="button"
        onClick={handleDismiss}
        aria-label={t('install.dismiss')}
        className="shrink-0 rounded-full p-1 text-muted hover:text-ink text-sm font-semibold"
      >
        ✕
      </button>
    </aside>
  )
}
