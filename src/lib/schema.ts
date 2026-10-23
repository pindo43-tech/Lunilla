import { isBuiltinSymptom, isMood } from './catalog.ts'
import { isB64, b64ToBytes } from './bytes.ts'
import { EXPORT_KIND } from './constants.ts'
import { isISODate } from './dates.ts'
import { MAX_CYCLE_DAYS, MIN_CYCLE_DAYS } from './constants.ts'
import type { CustomSymptom, DayLog, Flow, Intensity, Locale, Mucus, Settings, Tag, Vault } from '../types.ts'

const FLOWS = new Set<Flow>(['none', 'light', 'medium', 'heavy'])
const MUCUS = new Set<Mucus>(['dry', 'sticky', 'creamy', 'eggwhite', 'watery'])
const LOCK_MINUTES = new Set([1, 5, 15, 30])

export interface ExportDocument {
  schemaVersion: 1
  kind: typeof EXPORT_KIND
  exportedAt: string
  kdf: {
    name: 'PBKDF2'
    hash: 'SHA-256'
    iterations: number
    salt: string
  }
  cipher: {
    name: 'AES-GCM'
    iv: string
    ciphertext: string
  }
}

export function emptyDay(): DayLog {
  return { flow: null, symptoms: [], moods: [], note: '', basalTemp: null, mucus: null }
}

export function isEmptyDay(day: DayLog): boolean {
  return (
    day.flow === null
    && day.symptoms.length === 0
    && day.moods.length === 0
    && day.note.trim() === ''
    && day.basalTemp === null
    && day.mucus === null
  )
}

export function emptyVault(locale: Locale): Vault {
  return {
    schemaVersion: 1,
    settings: {
      autoLockMinutes: 5,
      locale,
      historyLength: 6,
      remindersEnabled: false,
      reminderDaysBefore: 2,
      discreet: false,
      typicalCycleLength: null,
    },
    days: {},
    customSymptoms: [],
  }
}

export function isExportDocument(value: unknown): value is ExportDocument {
  if (!value || typeof value !== 'object') return false
  const doc = value as Record<string, unknown>
  if (doc.schemaVersion !== 1 || doc.kind !== EXPORT_KIND) return false
  if (typeof doc.exportedAt !== 'string' || doc.exportedAt.length > 40) return false
  if (!doc.kdf || typeof doc.kdf !== 'object' || !doc.cipher || typeof doc.cipher !== 'object') return false
  const kdf = doc.kdf as Record<string, unknown>
  const cipher = doc.cipher as Record<string, unknown>
  if (kdf.name !== 'PBKDF2' || kdf.hash !== 'SHA-256') return false
  if (typeof kdf.iterations !== 'number' || !Number.isInteger(kdf.iterations)) return false
  if (kdf.iterations < 100_000 || kdf.iterations > 500_000) return false
  if (typeof kdf.salt !== 'string' || !isB64(kdf.salt) || b64ToBytes(kdf.salt).length !== 16) return false
  if (cipher.name !== 'AES-GCM') return false
  if (typeof cipher.iv !== 'string' || !isB64(cipher.iv) || b64ToBytes(cipher.iv).length !== 12) return false
  if (typeof cipher.ciphertext !== 'string' || !isB64(cipher.ciphertext) || cipher.ciphertext.length < 16) return false
  return true
}

export function sanitizeVault(value: unknown): Vault | null {
  if (!value || typeof value !== 'object') return null
  const raw = value as Record<string, unknown>
  if (raw.schemaVersion !== 1) return null
  const settings = sanitizeSettings(raw.settings)
  const customSymptoms = sanitizeCustoms(raw.customSymptoms)
  if (!settings || !customSymptoms) return null
  const days = sanitizeDays(raw.days, customSymptoms)
  if (!days) return null
  return { schemaVersion: 1, settings, days, customSymptoms }
}

function sanitizeSettings(value: unknown): Settings | null {
  if (!value || typeof value !== 'object') return null
  const raw = value as Record<string, unknown>
  const autoLockMinutes = LOCK_MINUTES.has(raw.autoLockMinutes as number) ? (raw.autoLockMinutes as number) : 5
  const locale: Locale = raw.locale === 'en' ? 'en' : 'es'
  const history = typeof raw.historyLength === 'number' ? Math.round(raw.historyLength) : 6
  const historyLength = history >= 3 && history <= 12 ? history : 6
  const reminderDaysRaw = raw.reminderDaysBefore
  const reminderDaysBefore = reminderDaysRaw === 1 || reminderDaysRaw === 3 ? reminderDaysRaw : 2
  const typicalRaw = raw.typicalCycleLength
  const typicalCycleLength = typeof typicalRaw === 'number'
    && Number.isInteger(typicalRaw)
    && typicalRaw >= MIN_CYCLE_DAYS
    && typicalRaw <= MAX_CYCLE_DAYS
    ? typicalRaw
    : null
  return {
    autoLockMinutes,
    locale,
    historyLength,
    remindersEnabled: raw.remindersEnabled === true,
    reminderDaysBefore,
    discreet: raw.discreet === true,
    typicalCycleLength,
  }
}

function sanitizeCustoms(value: unknown): CustomSymptom[] | null {
  if (!Array.isArray(value)) return null
  if (value.length > 50) return null
  const seen = new Set<string>()
  const customs: CustomSymptom[] = []
  for (const item of value) {
    if (!item || typeof item !== 'object') continue
    const raw = item as Record<string, unknown>
    if (typeof raw.id !== 'string' || typeof raw.name !== 'string') continue
    if (!/^[a-zA-Z0-9_-]{1,80}$/.test(raw.id)) continue
    const name = raw.name.trim().slice(0, 40)
    if (!name || seen.has(raw.id) || isBuiltinSymptom(raw.id)) continue
    seen.add(raw.id)
    customs.push({ id: raw.id, name })
  }
  return customs
}

function sanitizeDays(value: unknown, customs: CustomSymptom[]): Record<string, DayLog> | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null
  const allowed = new Set<string>([...customs.map((item) => item.id)])
  const entries = Object.entries(value as Record<string, unknown>)
  if (entries.length > 8000) return null
  const days: Record<string, DayLog> = {}
  for (const [iso, raw] of entries) {
    if (!isISODate(iso) || !raw || typeof raw !== 'object') continue
    const day = sanitizeDay(raw as Record<string, unknown>, allowed)
    if (day) days[iso] = day
  }
  return days
}

function sanitizeDay(raw: Record<string, unknown>, customIds: Set<string>): DayLog | null {
  const flow = raw.flow === null || raw.flow === undefined
    ? null
    : FLOWS.has(raw.flow as Flow) ? (raw.flow as Flow) : null
  const note = typeof raw.note === 'string' ? raw.note.slice(0, 500) : ''
  const mucus = MUCUS.has(raw.mucus as Mucus) ? (raw.mucus as Mucus) : null
  return {
    flow,
    symptoms: sanitizeTags(raw.symptoms, (id) => isBuiltinSymptom(id) || customIds.has(id)),
    moods: sanitizeTags(raw.moods, isMood),
    note,
    basalTemp: sanitizeTemp(raw.basalTemp),
    mucus,
  }
}

function sanitizeTemp(value: unknown): number | null {
  if (typeof value !== 'number' || !Number.isFinite(value)) return null
  const rounded = Math.round(value * 100) / 100
  if (rounded < 35 || rounded > 42) return null
  return rounded
}

function sanitizeTags(value: unknown, allow: (id: string) => boolean): Tag[] {
  if (!Array.isArray(value)) return []
  const tags: Tag[] = []
  const seen = new Set<string>()
  for (const item of value) {
    if (!item || typeof item !== 'object') continue
    const raw = item as Record<string, unknown>
    if (typeof raw.id !== 'string' || !allow(raw.id) || seen.has(raw.id)) continue
    const intensity = raw.intensity === 1 || raw.intensity === 2 || raw.intensity === 3 ? raw.intensity : null
    if (!intensity) continue
    seen.add(raw.id)
    tags.push({ id: raw.id, intensity: intensity as Intensity })
  }
  return tags
}
