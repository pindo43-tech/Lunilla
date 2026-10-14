import { b64ToBytes, bytesToB64 } from './bytes.ts'
import { EXPORT_KIND, ITERATIONS } from './constants.ts'
import { decryptJson, deriveKey, encryptJson, PinError, SchemaError } from './crypto.ts'
import { isExportDocument, sanitizeVault, type ExportDocument } from './schema.ts'
import type { Vault } from '../types.ts'

export async function buildExport(key: CryptoKey, salt: Uint8Array, vault: Vault): Promise<ExportDocument> {
  const sealed = await encryptJson(key, vault)
  return {
    schemaVersion: 1,
    kind: EXPORT_KIND,
    exportedAt: new Date().toISOString(),
    kdf: {
      name: 'PBKDF2',
      hash: 'SHA-256',
      iterations: ITERATIONS,
      salt: bytesToB64(salt),
    },
    cipher: {
      name: 'AES-GCM',
      iv: sealed.iv,
      ciphertext: sealed.ciphertext,
    },
  }
}

export async function decryptExport(text: string, pin: string): Promise<Vault> {
  let parsed: unknown
  try {
    parsed = JSON.parse(text) as unknown
  } catch {
    throw new SchemaError('json')
  }
  if (!isExportDocument(parsed)) throw new SchemaError('shape')
  const key = await deriveKey(pin, b64ToBytes(parsed.kdf.salt), parsed.kdf.iterations)
  let data: unknown
  try {
    data = await decryptJson(key, parsed.cipher.iv, parsed.cipher.ciphertext)
  } catch {
    throw new PinError()
  }
  const vault = sanitizeVault(data)
  if (!vault) throw new SchemaError('vault')
  return vault
}

export function downloadJson(filename: string, data: unknown): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}
