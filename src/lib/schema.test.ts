import { describe, expect, it } from 'vitest'
import { emptyVault, isExportDocument, sanitizeVault } from './schema.ts'

describe('schema', () => {
  it('rejects an export with the wrong kind', () => {
    expect(isExportDocument({ schemaVersion: 1, kind: 'other' })).toBe(false)
    expect(isExportDocument(null)).toBe(false)
  })

  it('drops unknown symptoms and keeps a valid day', () => {
    const vault = sanitizeVault({
      schemaVersion: 1,
      settings: { autoLockMinutes: 5, locale: 'es', historyLength: 6, remindersEnabled: false },
      customSymptoms: [{ id: 'c-calor', name: '  Calor en la cara  ' }],
      days: {
        '2026-05-01': {
          flow: 'light',
          symptoms: [
            { id: 'cramps', intensity: 3 },
            { id: 'c-calor', intensity: 1 },
            { id: 'not-real', intensity: 2 },
          ],
          moods: [{ id: 'calm', intensity: 2 }],
          note: 'x'.repeat(800),
        },
        'not-a-date': { flow: 'heavy', symptoms: [], moods: [], note: '' },
      },
    })
    expect(vault?.days['2026-05-01']?.symptoms.map((tag) => tag.id)).toEqual(['cramps', 'c-calor'])
    expect(vault?.days['2026-05-01']?.note).toHaveLength(500)
    expect(vault?.days['not-a-date']).toBeUndefined()
    expect(vault?.customSymptoms[0]?.name).toBe('Calor en la cara')
    expect(vault?.settings.reminderDaysBefore).toBe(2)
  })

  it('sanitizes reminderDaysBefore to 1, 2, or 3', () => {
    const base = emptyVault('es')
    expect(base.settings.reminderDaysBefore).toBe(2)

    const v1 = sanitizeVault({ ...base, settings: { ...base.settings, reminderDaysBefore: 1 } })
    expect(v1?.settings.reminderDaysBefore).toBe(1)

    const v3 = sanitizeVault({ ...base, settings: { ...base.settings, reminderDaysBefore: 3 } })
    expect(v3?.settings.reminderDaysBefore).toBe(3)

    const vInvalid = sanitizeVault({ ...base, settings: { ...base.settings, reminderDaysBefore: 10 } })
    expect(vInvalid?.settings.reminderDaysBefore).toBe(2)
  })

  it('rejects a future schema', () => {
    expect(sanitizeVault({ ...emptyVault('en'), schemaVersion: 2 })).toBeNull()
  })
})
