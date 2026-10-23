import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { dismissInstallPrompt, isInstallDismissed, isStandalone } from './installPrompt.ts'

describe('PWA install prompt utilities', () => {
  const store = new Map<string, string>()

  beforeEach(() => {
    store.clear()
    globalThis.localStorage = {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => {
        store.set(key, value)
      },
      removeItem: (key: string) => {
        store.delete(key)
      },
      clear: () => store.clear(),
      length: store.size,
      key: () => null,
    } as unknown as Storage
  })

  afterEach(() => {
    delete (globalThis as unknown as { localStorage?: unknown }).localStorage
  })

  it('detects dismissed state from localStorage', () => {
    expect(isInstallDismissed()).toBe(false)
    dismissInstallPrompt()
    expect(isInstallDismissed()).toBe(true)
  })

  it('checks standalone mode in standard browser environment', () => {
    expect(isStandalone()).toBe(false)
  })
})
