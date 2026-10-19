import { describe, expect, it } from 'vitest'
import { buildExport, decryptExport } from './backup.ts'
import { decryptJson, deriveKey, encryptJson, PinError } from './crypto.ts'
import { ITERATIONS } from './constants.ts'
import { emptyVault } from './schema.ts'

describe('encryption', () => {
  it('roundtrips a vault and hides the note in the file', async () => {
    const salt = crypto.getRandomValues(new Uint8Array(16))
    const key = await deriveKey('123456', salt, ITERATIONS)
    const vault = emptyVault('es')
    vault.days['2026-06-01'] = {
      flow: 'medium',
      symptoms: [{ id: 'cramps', intensity: 2 }],
      moods: [],
      note: 'Cólicos de la mañana',
      basalTemp: 36.42,
      mucus: 'eggwhite',
    }
    const doc = await buildExport(key, salt, vault)
    const json = JSON.stringify(doc)
    expect(json.includes('Cólicos')).toBe(false)
    expect(json.includes('cramps')).toBe(false)
    const opened = await decryptExport(json, '123456')
    expect(opened.days['2026-06-01']?.note).toBe('Cólicos de la mañana')
    expect(opened.days['2026-06-01']?.basalTemp).toBe(36.42)
    expect(opened.days['2026-06-01']?.mucus).toBe('eggwhite')
    expect(json.includes('36.42')).toBe(false)
    expect(json.includes('eggwhite')).toBe(false)
    await expect(decryptExport(json, '0000')).rejects.toBeInstanceOf(PinError)
  })

  it('rejects a flipped ciphertext', async () => {
    const salt = crypto.getRandomValues(new Uint8Array(16))
    const key = await deriveKey('987654', salt)
    const sealed = await encryptJson(key, { schemaVersion: 1, hello: 'lunilla' })
    const flipped = sealed.ciphertext.slice(0, -2) + (sealed.ciphertext.endsWith('A') ? 'B' : 'A')
    await expect(decryptJson(key, sealed.iv, flipped)).rejects.toThrow()
  })
})
