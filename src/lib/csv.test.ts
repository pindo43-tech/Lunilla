import { describe, expect, it } from 'vitest'
import { generateVaultCsv } from './csv.ts'
import { emptyVault } from './schema.ts'

describe('CSV export generator (RFC 4180)', () => {
  it('generates a valid CSV with BOM and localized headers in Spanish', () => {
    const vault = emptyVault('es')
    vault.days['2026-04-01'] = {
      flow: 'medium',
      basalTemp: 36.45,
      mucus: 'eggwhite',
      symptoms: [{ id: 'cramps', intensity: 2 }],
      moods: [{ id: 'calm', intensity: 3 }],
      note: 'Día con caminata suave, sin café.',
    }

    const csv = generateVaultCsv(vault, 'es')
    // Must start with UTF-8 BOM
    expect(csv.charCodeAt(0)).toBe(0xfeff)
    expect(csv.includes('Fecha,Flujo,Temp Basal (C)')).toBe(true)
    expect(csv.includes('2026-04-01,medium,36.45,eggwhite')).toBe(true)
    expect(csv.includes('cramps (2)')).toBe(true)
    expect(csv.includes('"Día con caminata suave, sin café."')).toBe(true)
  })

  it('escapes quotes and special characters properly', () => {
    const vault = emptyVault('en')
    vault.days['2026-04-02'] = {
      flow: 'heavy',
      basalTemp: null,
      mucus: null,
      symptoms: [],
      moods: [],
      note: 'Note with "quotes" and, commas\nand newlines',
    }

    const csv = generateVaultCsv(vault, 'en')
    expect(csv.includes('Date,Flow,Basal Temp (C)')).toBe(true)
    expect(csv.includes('"Note with ""quotes"" and, commas\nand newlines"')).toBe(true)
  })
})
