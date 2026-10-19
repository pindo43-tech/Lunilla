import { useEffect, useState } from 'react'

const KEY = 'lunilla.discreet'

export function readDiscreet(): boolean {
  try {
    return localStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
}

export function writeDiscreet(on: boolean): void {
  try {
    localStorage.setItem(KEY, on ? '1' : '0')
  } catch {
    // The toggle still applies for this visit.
  }
  window.dispatchEvent(new Event('lunilla-discreet'))
}

export function useDiscreet(): boolean {
  const [on, setOn] = useState(readDiscreet)
  useEffect(() => {
    const sync = () => setOn(readDiscreet())
    window.addEventListener('lunilla-discreet', sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('lunilla-discreet', sync)
      window.removeEventListener('storage', sync)
    }
  }, [])
  return on
}

export function brandName(discreet: boolean): 'Notas' | 'Lunilla' {
  return discreet ? 'Notas' : 'Lunilla'
}
