/**
 * Reglas de seguridad y autocuidado orientativo.
 * Adaptado de las directrices ACOG implementadas en HYPERSAHIL/periodtracker (MIT License).
 * No constituye diagnóstico ni reemplaza atención profesional.
 */

export interface SafetyCheckResult {
  prolongedBleed: boolean
  consecutiveDays: number
}

export function evaluateBleedSafety(
  bleedLength: number | null,
  isOngoing: boolean,
): SafetyCheckResult {
  if (!isOngoing || bleedLength === null) {
    return { prolongedBleed: false, consecutiveDays: 0 }
  }
  return {
    prolongedBleed: bleedLength > 7,
    consecutiveDays: bleedLength,
  }
}
