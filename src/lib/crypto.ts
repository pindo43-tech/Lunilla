import { b64ToBytes, bytesToB64, copyBytes } from './bytes.ts'
import { ITERATIONS } from './constants.ts'

export class PinError extends Error {
  constructor() {
    super('pin')
    this.name = 'PinError'
  }
}

export class SchemaError extends Error {
  constructor(message = 'schema') {
    super(message)
    this.name = 'SchemaError'
  }
}

export async function deriveKey(pin: string, salt: Uint8Array, iterations = ITERATIONS): Promise<CryptoKey> {
  const material = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(pin),
    'PBKDF2',
    false,
    ['deriveKey'],
  )
  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: copyBytes(salt),
      iterations,
      hash: 'SHA-256',
    },
    material,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt'],
  )
}

export async function encryptJson(key: CryptoKey, value: unknown): Promise<{ iv: string; ciphertext: string }> {
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const plain = new TextEncoder().encode(JSON.stringify(value))
  const buf = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: copyBytes(iv) }, key, plain)
  return { iv: bytesToB64(iv), ciphertext: bytesToB64(new Uint8Array(buf)) }
}

export async function decryptJson(key: CryptoKey, ivB64: string, ciphertextB64: string): Promise<unknown> {
  const iv = b64ToBytes(ivB64)
  const ciphertext = b64ToBytes(ciphertextB64)
  const buf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext)
  return JSON.parse(new TextDecoder().decode(buf)) as unknown
}
