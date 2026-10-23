import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { cx } from '../lib/cx.ts'
import { brandName, useDiscreet } from '../lib/discreet.ts'
import { useI18n } from '../lib/i18n.tsx'
import { predict } from '../lib/predict.ts'
import { todayISO } from '../lib/dates.ts'
import { useReminder } from '../lib/useReminder.ts'
import { useSession } from '../state/session.tsx'
import { InstallPrompt } from './InstallPrompt.tsx'
import { MoonMark } from './ui.tsx'

export function Frame() {
  const { vault, lock, saveError } = useSession()
  const { t } = useI18n()
  const { pathname } = useLocation()
  const discreet = useDiscreet()
  const brand = brandName(discreet)
  const today = todayISO()
  const prediction = vault
    ? predict(vault.days, vault.settings.historyLength, today, vault.settings.typicalCycleLength)
    : null
  useReminder(
    vault?.settings.remindersEnabled === true,
    prediction?.nextPeriod ?? null,
    prediction?.daysUntil ?? null,
  )
  if (!vault) return null
  const calendarOn = pathname.startsWith('/app/calendar') || pathname.startsWith('/app/day')
  const tabs = [
    { to: '/app', label: t('tabs.home'), end: true, on: pathname === '/app' },
    { to: '/app/calendar', label: t('tabs.calendar'), end: false, on: calendarOn },
    { to: '/app/summary', label: t('tabs.summary'), end: false, on: pathname.startsWith('/app/summary') },
    { to: '/app/settings', label: t('tabs.settings'), end: false, on: pathname.startsWith('/app/settings') },
  ]
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="flex items-center justify-between px-5 pt-4">
        <div className="flex items-center gap-2">
          {discreet ? null : <MoonMark className="h-9 w-9" />}
          <p className="text-lg font-semibold tracking-tight">{brand}</p>
        </div>
        <button type="button" onClick={lock} className="min-h-11 rounded-full px-3 text-sm font-medium text-rose">
          {t('lock')}
        </button>
      </header>
      {saveError ? (
        <p role="alert" className="mx-5 mt-3 rounded-2xl bg-rose-soft px-3 py-2 text-sm">
          {t('common.saveError')}
        </p>
      ) : null}
      <div className="pt-2">
        <InstallPrompt />
      </div>
      <main id="main" className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
        <Outlet />
      </main>
      <nav aria-label={brand} className="grid grid-cols-4 border-t border-black/10 pb-[env(safe-area-inset-bottom)]">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            aria-current={tab.on ? 'page' : undefined}
            className={cx(
              'flex min-h-14 items-center justify-center px-1 text-center text-[0.8rem] leading-tight',
              tab.on ? 'font-semibold text-rose' : 'text-muted',
            )}
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
