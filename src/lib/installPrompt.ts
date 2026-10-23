/**
 * Utilidades para detección y control del aviso de instalación PWA.
 * Conforme a LATER.md Punto 8 ("Aviso de instalación, se puede cerrar").
 */

const STORAGE_KEY = 'lunilla.installDismissed'

export function isStandalone(): boolean {
  if (typeof window === 'undefined') return false
  const nav = window.navigator as unknown as { standalone?: boolean }
  return (
    window.matchMedia?.('(display-mode: standalone)').matches ||
    nav.standalone === true
  )
}

export function isInstallDismissed(): boolean {
  try {
    if (typeof localStorage === 'undefined') return false
    return localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

export function dismissInstallPrompt(): void {
  try {
    if (typeof localStorage === 'undefined') return
    localStorage.setItem(STORAGE_KEY, '1')
  } catch {
    // localStorage no disponible en contexto restringido
  }
}

export function isIOS(): boolean {
  if (typeof window === 'undefined') return false
  const userAgent = window.navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod/.test(userAgent)
}
