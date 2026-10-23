import { addDays, diffDays } from './dates.ts'
import { isBleed, periodStarts, ovulationCycleDay } from './predict.ts'
import type { DayLog, PhaseName } from '../types.ts'

/**
 * Análisis de correlación estadística entre síntomas, estados de ánimo y fases del ciclo.
 * Inspirado en los modelos de correlación de adulbrich/ephira y EmmaTellblom/Mensinator (MIT).
 * Requiere al menos 3 ciclos registrados para ofrecer relevancia estadística orientativa.
 */

export interface TagCount {
  id: string
  count: number
}

export interface PhasePattern {
  phase: PhaseName
  topSymptoms: TagCount[]
  topMoods: TagCount[]
  totalLogs: number
}

export interface PatternAnalysis {
  eligible: boolean
  cyclesCount: number
  patterns: Record<PhaseName, PhasePattern>
}

export function determineDayPhase(
  iso: string,
  periodStart: string,
  cycleLength: number,
  bleedLength: number,
): PhaseName {
  const dayIndex = diffDays(periodStart, iso) + 1

  if (dayIndex <= bleedLength) {
    return 'menstrual'
  }

  const ovulationDay = ovulationCycleDay(cycleLength)
  if (Math.abs(dayIndex - ovulationDay) <= 1) {
    return 'ovulatory'
  }

  if (dayIndex < ovulationDay) {
    return 'follicular'
  }

  return 'luteal'
}

export function analyzePhasePatterns(
  days: Record<string, DayLog>,
  today: string,
): PatternAnalysis {
  const starts = periodStarts(days, today)
  const cyclesCount = starts.length > 0 ? starts.length - 1 : 0
  const eligible = starts.length >= 3

  const emptyPattern = (phase: PhaseName): PhasePattern => ({
    phase,
    topSymptoms: [],
    topMoods: [],
    totalLogs: 0,
  })

  const result: PatternAnalysis = {
    eligible,
    cyclesCount,
    patterns: {
      menstrual: emptyPattern('menstrual'),
      follicular: emptyPattern('follicular'),
      ovulatory: emptyPattern('ovulatory'),
      luteal: emptyPattern('luteal'),
    },
  }

  if (!eligible) return result

  const symptomsByPhase: Record<PhaseName, Map<string, number>> = {
    menstrual: new Map(),
    follicular: new Map(),
    ovulatory: new Map(),
    luteal: new Map(),
  }

  const moodsByPhase: Record<PhaseName, Map<string, number>> = {
    menstrual: new Map(),
    follicular: new Map(),
    ovulatory: new Map(),
    luteal: new Map(),
  }

  // Mapear cada día registrado a su ciclo y fase
  for (let i = 0; i < starts.length; i += 1) {
    const start = starts[i]!
    const nextStart = starts[i + 1] ?? null
    // Estimar duración de sangrado de este período
    let bleedCount = 1
    let cursor = start
    while (isBleed(days[addDays(cursor, 1)])) {
      bleedCount += 1
      cursor = addDays(cursor, 1)
    }

    const cycleLen = nextStart ? diffDays(start, nextStart) : 28
    const cycleEnd = nextStart ? addDays(nextStart, -1) : addDays(start, cycleLen - 1)

    // Recorrer los días de este ciclo
    let currentDay = start
    while (currentDay <= cycleEnd && currentDay <= today) {
      const log = days[currentDay]
      if (log && (log.symptoms.length > 0 || log.moods.length > 0)) {
        const phase = determineDayPhase(currentDay, start, cycleLen, bleedCount)
        result.patterns[phase].totalLogs += 1

        for (const sym of log.symptoms) {
          const map = symptomsByPhase[phase]
          map.set(sym.id, (map.get(sym.id) ?? 0) + 1)
        }

        for (const mood of log.moods) {
          const map = moodsByPhase[phase]
          map.set(mood.id, (map.get(mood.id) ?? 0) + 1)
        }
      }
      currentDay = addDays(currentDay, 1)
    }
  }

  // Extraer top 3 síntomas y estados de ánimo por fase
  const phases: PhaseName[] = ['menstrual', 'follicular', 'ovulatory', 'luteal']
  for (const phase of phases) {
    result.patterns[phase].topSymptoms = [...symptomsByPhase[phase].entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 3)
      .map(([id, count]) => ({ id, count }))

    result.patterns[phase].topMoods = [...moodsByPhase[phase].entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 3)
      .map(([id, count]) => ({ id, count }))
  }

  return result
}
