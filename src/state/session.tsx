import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { buildExport, decryptExport, downloadJson } from '../lib/backup.ts'
import { b64ToBytes, bytesToB64 } from '../lib/bytes.ts'
import { CANARY, ITERATIONS } from '../lib/constants.ts'
import { decryptJson, deriveKey, encryptJson, PinError } from '../lib/crypto.ts'
import { database, eraseDatabase } from '../lib/db.ts'
import type { InstallRecord, VaultRecord } from '../lib/db.ts'
import { todayISO } from '../lib/dates.ts'
import { useI18n } from '../lib/i18n.tsx'
import { emptyVault, sanitizeVault } from '../lib/schema.ts'
import type { Vault } from '../types.ts'

export type GateStatus = 'loading' | 'error' | 'setup' | 'locked' | 'ready'

interface SessionApi {
  status: GateStatus
  vault: Vault | null
  saveError: boolean
  setup: (pin: string, initial?: Vault) => Promise<void>
  unlock: (pin: string) => Promise<void>
  lock: () => void
  update: (mutator: (vault: Vault) => Vault) => Promise<void>
  changePin: (currentPin: string, nextPin: string) => Promise<void>
  exportCopy: () => Promise<void>
  importCopy: (text: string, pin: string) => Promise<void>
  erase: () => Promise<void>
  suspendAutoLock: (ms: number) => void
  clearSaveError: () => void
}

const SessionContext = createContext<SessionApi | null>(null)

export function SessionProvider({ children }: { children: ReactNode }) {
  const { locale, setLocale } = useI18n()
  const [status, setStatus] = useState<GateStatus>('loading')
  const [vault, setVault] = useState<Vault | null>(null)
  const [saveError, setSaveError] = useState(false)
  const keyRef = useRef<CryptoKey | null>(null)
  const vaultRef = useRef<Vault | null>(null)
  const suspendUntil = useRef(0)
  const opLock = useRef(false)
  const localeRef = useRef(locale)
  localeRef.current = locale

  const lock = useCallback(() => {
    if (Date.now() < suspendUntil.current) return
    keyRef.current = null
    vaultRef.current = null
    setVault(null)
    setStatus((current) => (current === 'ready' ? 'locked' : current))
  }, [])

  const suspendAutoLock = useCallback((ms: number) => {
    suspendUntil.current = Date.now() + Math.max(0, ms)
  }, [])

  const clearSaveError = useCallback(() => setSaveError(false), [])

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        if (!globalThis.crypto?.subtle) throw new Error('crypto')
        const install = await database().install.get('install')
        if (cancelled) return
        setStatus(install ? 'locked' : 'setup')
      } catch {
        if (!cancelled) setStatus('error')
      }
    }
    void load()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (status !== 'ready') return
    const minutes = vault?.settings.autoLockMinutes ?? 5
    const ms = minutes * 60_000
    let timer = window.setTimeout(() => lock(), ms)
    const bump = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => lock(), ms)
    }
    const onHide = () => {
      if (document.visibilityState === 'hidden') lock()
    }
    const onPageHide = () => lock()
    window.addEventListener('pointerdown', bump)
    window.addEventListener('keydown', bump)
    document.addEventListener('visibilitychange', onHide)
    window.addEventListener('pagehide', onPageHide)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('pointerdown', bump)
      window.removeEventListener('keydown', bump)
      document.removeEventListener('visibilitychange', onHide)
      window.removeEventListener('pagehide', onPageHide)
    }
  }, [status, vault?.settings.autoLockMinutes, lock])

  const remember = useCallback((key: CryptoKey, next: Vault) => {
    keyRef.current = key
    vaultRef.current = next
    setVault(next)
    setLocale(next.settings.locale)
    setStatus('ready')
    setSaveError(false)
  }, [setLocale])

  const setup = useCallback(async (pin: string, initial?: Vault) => {
    if (opLock.current) return
    opLock.current = true
    try {
      const next = initial ? structuredClone(initial) : emptyVault(localeRef.current)
      next.settings.locale = localeRef.current
      const salt = crypto.getRandomValues(new Uint8Array(16))
      const key = await deriveKey(pin, salt, ITERATIONS)
      const canary = await encryptJson(key, CANARY)
      const sealed = await encryptJson(key, next)
      const now = new Date().toISOString()
      const install: InstallRecord = {
        id: 'install',
        salt: bytesToB64(salt),
        iterations: ITERATIONS,
        canaryIv: canary.iv,
        canaryCt: canary.ciphertext,
        createdAt: now,
      }
      const row: VaultRecord = {
        id: 'vault',
        iv: sealed.iv,
        ciphertext: sealed.ciphertext,
        updatedAt: now,
      }
      const db = database()
      await db.transaction('rw', db.install, db.vault, async () => {
        await db.install.put(install)
        await db.vault.put(row)
      })
      remember(key, next)
    } finally {
      opLock.current = false
    }
  }, [remember])

  const unlock = useCallback(async (pin: string) => {
    if (opLock.current) return
    opLock.current = true
    try {
      const db = database()
      const install = await db.install.get('install')
      if (!install) {
        setStatus('setup')
        return
      }
      const key = await deriveKey(pin, b64ToBytes(install.salt), install.iterations)
      let canary: unknown
      try {
        canary = await decryptJson(key, install.canaryIv, install.canaryCt)
      } catch {
        throw new PinError()
      }
      if (canary !== CANARY) throw new PinError()
      const row = await db.vault.get('vault')
      if (!row) throw new Error('damaged')
      let data: unknown
      try {
        data = await decryptJson(key, row.iv, row.ciphertext)
      } catch {
        throw new Error('damaged')
      }
      const opened = sanitizeVault(data)
      if (!opened) throw new Error('damaged')
      if (opened.settings.locale !== localeRef.current) {
        opened.settings.locale = localeRef.current
        const sealed = await encryptJson(key, opened)
        await db.vault.put({
          id: 'vault',
          iv: sealed.iv,
          ciphertext: sealed.ciphertext,
          updatedAt: new Date().toISOString(),
        })
      }
      remember(key, opened)
    } finally {
      opLock.current = false
    }
  }, [remember])

  const update = useCallback(async (mutator: (current: Vault) => Vault) => {
    const key = keyRef.current
    const current = vaultRef.current
    if (!key || !current) throw new Error('locked')
    const next = sanitizeVault(mutator(structuredClone(current)))
    if (!next) throw new Error('schema')
    try {
      const sealed = await encryptJson(key, next)
      await database().vault.put({
        id: 'vault',
        iv: sealed.iv,
        ciphertext: sealed.ciphertext,
        updatedAt: new Date().toISOString(),
      })
      vaultRef.current = next
      setVault(next)
      setSaveError(false)
      if (next.settings.locale !== localeRef.current) setLocale(next.settings.locale)
    } catch (error) {
      setSaveError(true)
      throw error
    }
  }, [setLocale])

  const changePin = useCallback(async (currentPin: string, nextPin: string) => {
    const db = database()
    const install = await db.install.get('install')
    const current = vaultRef.current
    if (!install || !current) throw new Error('locked')
    const oldKey = await deriveKey(currentPin, b64ToBytes(install.salt), install.iterations)
    let canary: unknown
    try {
      canary = await decryptJson(oldKey, install.canaryIv, install.canaryCt)
    } catch {
      throw new PinError()
    }
    if (canary !== CANARY) throw new PinError()
    const salt = crypto.getRandomValues(new Uint8Array(16))
    const key = await deriveKey(nextPin, salt, ITERATIONS)
    const sealedCanary = await encryptJson(key, CANARY)
    const sealed = await encryptJson(key, current)
    await db.transaction('rw', db.install, db.vault, async () => {
      await db.install.put({
        id: 'install',
        salt: bytesToB64(salt),
        iterations: ITERATIONS,
        canaryIv: sealedCanary.iv,
        canaryCt: sealedCanary.ciphertext,
        createdAt: install.createdAt,
      })
      await db.vault.put({
        id: 'vault',
        iv: sealed.iv,
        ciphertext: sealed.ciphertext,
        updatedAt: new Date().toISOString(),
      })
    })
    keyRef.current = key
  }, [])

  const exportCopy = useCallback(async () => {
    const install = await database().install.get('install')
    const key = keyRef.current
    const current = vaultRef.current
    if (!install || !key || !current) throw new Error('locked')
    const doc = await buildExport(key, b64ToBytes(install.salt), current)
    downloadJson(`marea-cifrada-${todayISO()}.json`, doc)
  }, [])

  const importCopy = useCallback(async (text: string, pin: string) => {
    const key = keyRef.current
    if (!key) throw new Error('locked')
    const imported = await decryptExport(text, pin)
    const sealed = await encryptJson(key, imported)
    await database().vault.put({
      id: 'vault',
      iv: sealed.iv,
      ciphertext: sealed.ciphertext,
      updatedAt: new Date().toISOString(),
    })
    vaultRef.current = imported
    setVault(imported)
    setLocale(imported.settings.locale)
    setSaveError(false)
  }, [setLocale])

  const erase = useCallback(async () => {
    keyRef.current = null
    vaultRef.current = null
    setVault(null)
    await eraseDatabase()
    setStatus('setup')
  }, [])

  const api = useMemo<SessionApi>(() => ({
    status,
    vault,
    saveError,
    setup,
    unlock,
    lock,
    update,
    changePin,
    exportCopy,
    importCopy,
    erase,
    suspendAutoLock,
    clearSaveError,
  }), [
    status,
    vault,
    saveError,
    setup,
    unlock,
    lock,
    update,
    changePin,
    exportCopy,
    importCopy,
    erase,
    suspendAutoLock,
    clearSaveError,
  ])

  return <SessionContext.Provider value={api}>{children}</SessionContext.Provider>
}

export function useSession(): SessionApi {
  const value = useContext(SessionContext)
  if (!value) throw new Error('session')
  return value
}
