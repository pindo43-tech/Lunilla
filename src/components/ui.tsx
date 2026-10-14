import { useId } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cx } from '../lib/cx.ts'
import { useI18n } from '../lib/i18n.tsx'
import type { Locale } from '../types.ts'

export function Shell({ children, app = false }: { children: ReactNode; app?: boolean }) {
  return (
    <div className="min-h-dvh bg-[radial-gradient(1100px_620px_at_50%_-8%,#f8d5e1,transparent_55%),radial-gradient(820px_520px_at_110%_80%,#e5f2ea,transparent_50%),radial-gradient(720px_480px_at_-10%_90%,#e6ddf6,transparent_46%),#f4e7ea] text-ink">
      <div
        className={cx(
          'mx-auto flex w-full max-w-[440px] flex-col bg-paper sm:border sm:border-white/80 sm:shadow-[0_24px_70px_rgba(90,50,70,0.14)]',
          app
            ? 'h-dvh overflow-hidden sm:my-6 sm:h-[calc(100dvh-3rem)] sm:rounded-[2rem]'
            : 'min-h-dvh sm:my-6 sm:min-h-[calc(100dvh-3rem)] sm:rounded-[2rem]',
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function MoonMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <circle cx="32" cy="32" r="30" fill="#F6D5DE" />
      <path d="M40 14c-2 10 1 22 10 28-8 6-20 5-28-2-9-8-10-22-4-32 6 4 14 4 22 6z" fill="#8F3D56" />
      <circle cx="48" cy="18" r="3" fill="#2F6A50" />
    </svg>
  )
}

export function LangToggle() {
  const { locale, setLocale, t } = useI18n()
  return (
    <div role="group" aria-label={t('lang.switch')} className="inline-flex rounded-full bg-white/80 p-1 text-sm shadow-sm">
      {(['es', 'en'] as const satisfies readonly Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={locale === code}
          onClick={() => setLocale(code)}
          className={cx('min-h-9 rounded-full px-3', locale === code ? 'bg-rose text-white' : 'text-muted')}
        >
          {t(code === 'es' ? 'lang.es' : 'lang.en')}
        </button>
      ))}
    </div>
  )
}

export function Button({
  tone = 'primary',
  className,
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { tone?: 'primary' | 'quiet' | 'sage' }) {
  const tones = {
    primary: 'bg-rose text-white disabled:bg-[#eadfe3] disabled:text-muted',
    quiet: 'border border-black/10 bg-white text-ink disabled:text-muted',
    sage: 'bg-sage text-white disabled:bg-[#eadfe3] disabled:text-muted',
  } as const
  return (
    <button
      type={type}
      className={cx(
        'inline-flex min-h-12 items-center justify-center rounded-2xl px-4 py-3 text-base font-medium transition active:scale-[0.99] disabled:active:scale-100',
        tones[tone],
        className,
      )}
      {...props}
    />
  )
}

export function DigitField({
  label,
  value,
  onChange,
  error,
  hint,
  pad = false,
  autoFocus = false,
}: {
  label: string
  value: string
  onChange: (next: string) => void
  error?: string
  hint?: string
  pad?: boolean
  autoFocus?: boolean
}) {
  const { t } = useI18n()
  const helpId = useId()
  const errorId = useId()
  function apply(next: string) {
    onChange(next.replace(/\D/g, '').slice(0, 6))
  }
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'blank', '0', 'del']
  return (
    <div>
      <label className="block">
        <span className="mb-2 block text-sm text-muted">{label}</span>
        <input
          value={value}
          onChange={(event) => apply(event.target.value)}
          inputMode="numeric"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          maxLength={6}
          autoFocus={autoFocus}
          aria-invalid={error ? true : undefined}
          aria-describedby={`${helpId} ${errorId}`}
          type="password"
          className={cx(
            'w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-center text-2xl tracking-[0.4em] shadow-sm',
            error && 'shake border-rose',
          )}
        />
      </label>
      <p id={helpId} className="mt-2 text-sm leading-relaxed text-muted">{hint}</p>
      <p id={errorId} role="alert" className="mt-1 min-h-6 text-sm text-rose">{error}</p>
      {pad ? (
        <div className="mt-1 grid grid-cols-3 gap-2">
          {keys.map((key) => {
            if (key === 'blank') return <span key="blank" />
            if (key === 'del') {
              return (
                <button
                  key="del"
                  type="button"
                  aria-label={t('pin.delete')}
                  onClick={() => onChange(value.slice(0, -1))}
                  className="min-h-14 rounded-2xl bg-white text-lg shadow-sm"
                >
                  ⌫
                </button>
              )
            }
            return (
              <button
                key={key}
                type="button"
                onClick={() => apply(value + key)}
                className="min-h-14 rounded-2xl bg-white text-xl shadow-sm"
              >
                {key}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
