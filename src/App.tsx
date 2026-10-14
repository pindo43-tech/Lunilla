import { Component } from 'react'
import type { ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Frame } from './components/Frame.tsx'
import { Shell } from './components/ui.tsx'
import { useI18n, I18nProvider } from './lib/i18n.tsx'
import { useBrandTitle } from './lib/useTitle.ts'
import { CalendarPage } from './pages/Calendar.tsx'
import { DayPage } from './pages/Day.tsx'
import { HomePage } from './pages/Home.tsx'
import { LandingPage } from './pages/Landing.tsx'
import { SettingsPage } from './pages/Settings.tsx'
import { SummaryPage } from './pages/Summary.tsx'
import { SetupPage } from './pages/Setup.tsx'
import { UnlockPage } from './pages/Unlock.tsx'
import { SessionProvider, useSession } from './state/session.tsx'

class Boundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true }
  }

  render() {
    if (!this.state.failed) return this.props.children
    return (
      <div className="mx-auto flex min-h-dvh max-w-[440px] flex-col justify-center gap-3 bg-paper px-6 text-ink">
        <h1 className="text-2xl font-semibold">Algo se rompió en la pantalla.</h1>
        <p className="leading-relaxed text-muted">Recargá la página. El registro cifrado sigue en este navegador.</p>
        <h2 className="pt-2 text-2xl font-semibold">The screen hit an error.</h2>
        <p className="leading-relaxed text-muted">Reload the page. The encrypted log stays in this browser.</p>
        <button type="button" className="mt-4 min-h-12 rounded-2xl bg-rose px-4 text-white" onClick={() => window.location.reload()}>
          Recargar / Reload
        </button>
      </div>
    )
  }
}

function Gate() {
  const { status } = useSession()
  const { t } = useI18n()
  useBrandTitle()
  if (status === 'loading') {
    return (
      <Shell>
        <p role="status" className="px-6 py-24 text-center text-muted">{t('loading')}</p>
      </Shell>
    )
  }
  if (status === 'error') {
    return (
      <Shell>
        <div className="space-y-3 px-6 py-16">
          <h1 className="text-3xl font-semibold tracking-tight">{t('error.title')}</h1>
          <p className="leading-relaxed text-muted">{t('error.body')}</p>
        </div>
      </Shell>
    )
  }
  if (status === 'setup') {
    return (
      <Shell>
        <SetupPage />
      </Shell>
    )
  }
  if (status === 'locked') {
    return (
      <Shell>
        <UnlockPage />
      </Shell>
    )
  }
  return (
    <Shell app>
      <Frame />
    </Shell>
  )
}

export default function App() {
  return (
    <Boundary>
      <I18nProvider>
        <SessionProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/app" element={<Gate />}>
                <Route index element={<HomePage />} />
                <Route path="calendar" element={<CalendarPage />} />
                <Route path="day/:iso" element={<DayPage />} />
                <Route path="summary" element={<SummaryPage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </SessionProvider>
      </I18nProvider>
    </Boundary>
  )
}
