import { Link } from 'react-router-dom'
import { LangToggle, MoonMark, Shell } from '../components/ui.tsx'
import type { MessageKey } from '../lib/i18n.tsx'
import { useI18n } from '../lib/i18n.tsx'
import { useBrandTitle } from '../lib/useTitle.ts'

const PRIVACY: MessageKey[] = ['land.p1', 'land.p2', 'land.p3', 'land.p4', 'land.p5', 'land.p6']
const FEATURES: MessageKey[] = ['land.f1', 'land.f2', 'land.f3', 'land.f4', 'land.f5', 'land.f6', 'land.f7']

export function LandingPage() {
  const { t } = useI18n()
  useBrandTitle()
  return (
    <Shell>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded-full focus:bg-white focus:px-3 focus:py-2">
        {t('skip')}
      </a>
      <main id="main" className="rise flex flex-col gap-8 px-6 py-6">
        <div className="flex items-center justify-between">
          <MoonMark />
          <LangToggle />
        </div>
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-rose">{t('land.kicker')}</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight">{t('land.title')}</h1>
          <p className="text-lg leading-relaxed text-muted">{t('land.lead')}</p>
        </header>
        <Link
          to="/app"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-rose px-4 py-3 text-base font-medium text-white"
        >
          {t('land.open')}
        </Link>
        <section className="space-y-3" aria-labelledby="privacy-title">
          <h2 id="privacy-title" className="text-xl font-semibold">{t('land.privacyTitle')}</h2>
          <ul className="space-y-3">
            {PRIVACY.map((key) => (
              <li key={key} className="rounded-2xl bg-white/80 px-4 py-3 leading-relaxed shadow-sm">
                {t(key)}
              </li>
            ))}
          </ul>
        </section>
        <section className="space-y-3" aria-labelledby="features-title">
          <h2 id="features-title" className="text-xl font-semibold">{t('land.featuresTitle')}</h2>
          <ol className="space-y-3">
            {FEATURES.map((key, index) => (
              <li key={key} className="flex gap-3 leading-relaxed">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lavender-soft text-sm font-semibold text-ink">
                  {index + 1}
                </span>
                <span>{t(key)}</span>
              </li>
            ))}
          </ol>
        </section>
        <section className="space-y-3 rounded-3xl bg-sage-soft px-4 py-4" aria-labelledby="disclaimer-title">
          <h2 id="disclaimer-title" className="text-xl font-semibold">{t('land.disclaimerTitle')}</h2>
          <p className="leading-relaxed">{t('land.disclaimer')}</p>
        </section>
        <p className="leading-relaxed text-muted">{t('land.install')}</p>
        <p className="pb-4 text-sm text-muted">{t('land.footer')}</p>
      </main>
    </Shell>
  )
}
