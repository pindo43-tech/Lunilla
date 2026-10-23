import { useEffect } from 'react'
import { todayISO } from './dates.ts'
import { useDiscreet } from './discreet.ts'
import { useI18n } from './i18n.tsx'

export function useReminder(
  enabled: boolean,
  nextPeriod: string | null,
  daysUntil: number | null,
  reminderDaysBefore = 2,
): void {
  const { t } = useI18n()
  const discreet = useDiscreet()
  useEffect(() => {
    if (!enabled || !nextPeriod || daysUntil === null || daysUntil < 0 || daysUntil > reminderDaysBefore) return
    if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return
    const stamp = `lunilla-notice:${todayISO()}:${nextPeriod}`
    if (sessionStorage.getItem(stamp)) return
    const handle = window.setTimeout(() => {
      try {
        new Notification(discreet ? t('notify.titleDiscreet') : t('notify.title'), {
          body: discreet ? t('notify.bodyDiscreet') : t('notify.body'),
          tag: 'lunilla-period',
          icon: '/icons/icon-192.png',
        })
        sessionStorage.setItem(stamp, '1')
      } catch {
        // The browser can refuse even after a granted permission.
      }
    }, 800)
    return () => window.clearTimeout(handle)
  }, [enabled, nextPeriod, daysUntil, reminderDaysBefore, t, discreet])
}
