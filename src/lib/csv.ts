import type { CustomSymptom, DayLog, Locale, Vault } from '../types.ts'

/**
 * Exportador de datos tabulares a formato CSV conforme a RFC 4180.
 * Permite exportar la bitácora médica/ciclo para compartir con profesionales o abrir en Excel.
 * Incluye Byte Order Mark (BOM) UTF-8 para compatibilidad total con Microsoft Excel y Apple Numbers.
 */

function escapeCsvCell(value: string | number | null | undefined): string {
  if (value === null || value === undefined) return ''
  const str = String(value)
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

export function formatCustomOrBuiltinSymptom(
  id: string,
  intensity: number,
  customs: CustomSymptom[],
): string {
  const custom = customs.find((c) => c.id === id)
  const name = custom ? custom.name : id
  return `${name} (${intensity})`
}

export function generateVaultCsv(vault: Vault, locale: Locale): string {
  const isEn = locale === 'en'
  const headers = isEn
    ? ['Date', 'Flow', 'Basal Temp (C)', 'Cervical Mucus', 'Symptoms', 'Moods', 'Note']
    : ['Fecha', 'Flujo', 'Temp Basal (C)', 'Moco Cervical', 'Síntomas', 'Ánimo', 'Nota']

  const rows: string[] = []
  // Agregar BOM UTF-8 (\uFEFF) para que Excel abra acentos sin corromper
  rows.push(headers.map(escapeCsvCell).join(','))

  const sortedDates = Object.keys(vault.days).sort()

  for (const date of sortedDates) {
    const day: DayLog = vault.days[date]!

    const symptomsStr = day.symptoms
      .map((s) => formatCustomOrBuiltinSymptom(s.id, s.intensity, vault.customSymptoms))
      .join('; ')

    const moodsStr = day.moods
      .map((m) => `${m.id} (${m.intensity})`)
      .join('; ')

    const row = [
      date,
      day.flow ?? '',
      day.basalTemp !== null ? String(day.basalTemp) : '',
      day.mucus ?? '',
      symptomsStr,
      moodsStr,
      day.note ?? '',
    ]

    rows.push(row.map(escapeCsvCell).join(','))
  }

  return '\uFEFF' + rows.join('\r\n') + '\r\n'
}

export function downloadCsvFile(filename: string, content: string): void {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}
