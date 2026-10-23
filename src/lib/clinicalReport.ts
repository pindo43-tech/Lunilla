import { listPeriods, summarize } from './cycles.ts'
import { isEmptyDay } from './schema.ts'
import type { DayLog, Mucus } from '../types.ts'

export interface ClinicalCycleRow {
  cycleNumber: number
  startDate: string
  endDate: string
  periodLength: number
  cycleLength: number | null
}

export interface SymptomFrequency {
  id: string
  count: number
  percentage: number
}

export interface MoodFrequency {
  id: string
  count: number
  percentage: number
}

export interface ClinicalReportData {
  generatedDate: string
  totalDaysLogged: number
  totalPeriods: number
  measuredCyclesCount: number
  averageCycleLength: number | null
  shortestCycle: number | null
  longestCycle: number | null
  averagePeriodLength: number | null
  regularity: 'unknown' | 'steady' | 'variable'
  cycles: ClinicalCycleRow[]
  topSymptoms: SymptomFrequency[]
  topMoods: MoodFrequency[]
  bbtCount: number
  bbtMin: number | null
  bbtMax: number | null
  mucusCounts: Record<Mucus, number>
  hasPhysiologicalData: boolean
}

export function generateClinicalReport(
  days: Record<string, DayLog>,
  historyLength: number,
  today: string,
): ClinicalReportData {
  const periods = listPeriods(days, today)
  const summary = summarize(days, historyLength, today)

  const activeDays = Object.values(days).filter((d) => !isEmptyDay(d))
  const totalDaysLogged = activeDays.length

  const cycles: ClinicalCycleRow[] = periods.map((period, index) => ({
    cycleNumber: index + 1,
    startDate: period.start,
    endDate: period.end,
    periodLength: period.periodLength,
    cycleLength: period.cycleLength,
  }))

  // Symptom counts
  const symCounts = new Map<string, number>()
  for (const day of activeDays) {
    for (const tag of day.symptoms) {
      symCounts.set(tag.id, (symCounts.get(tag.id) ?? 0) + 1)
    }
  }
  const topSymptoms: SymptomFrequency[] = [...symCounts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 8)
    .map(([id, count]) => ({
      id,
      count,
      percentage: totalDaysLogged > 0 ? Math.round((count / totalDaysLogged) * 100) : 0,
    }))

  // Mood counts
  const moodCounts = new Map<string, number>()
  for (const day of activeDays) {
    for (const tag of day.moods) {
      moodCounts.set(tag.id, (moodCounts.get(tag.id) ?? 0) + 1)
    }
  }
  const topMoods: MoodFrequency[] = [...moodCounts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 8)
    .map(([id, count]) => ({
      id,
      count,
      percentage: totalDaysLogged > 0 ? Math.round((count / totalDaysLogged) * 100) : 0,
    }))

  // Physiological BBT & Mucus
  const bbts: number[] = []
  const mucusCounts: Record<Mucus, number> = {
    dry: 0,
    sticky: 0,
    creamy: 0,
    eggwhite: 0,
    watery: 0,
  }

  for (const day of activeDays) {
    if (day.basalTemp !== null && Number.isFinite(day.basalTemp)) {
      bbts.push(day.basalTemp)
    }
    if (day.mucus && day.mucus in mucusCounts) {
      mucusCounts[day.mucus] += 1
    }
  }

  const bbtCount = bbts.length
  const bbtMin = bbtCount > 0 ? Math.round(Math.min(...bbts) * 100) / 100 : null
  const bbtMax = bbtCount > 0 ? Math.round(Math.max(...bbts) * 100) / 100 : null
  const hasMucus = Object.values(mucusCounts).some((count) => count > 0)
  const hasPhysiologicalData = bbtCount > 0 || hasMucus

  return {
    generatedDate: today,
    totalDaysLogged,
    totalPeriods: periods.length,
    measuredCyclesCount: summary.measured.length,
    averageCycleLength: summary.averageCycle,
    shortestCycle: summary.shortest,
    longestCycle: summary.longest,
    averagePeriodLength: summary.averagePeriod ?? summary.singlePeriodLength,
    regularity: summary.regularity,
    cycles,
    topSymptoms,
    topMoods,
    bbtCount,
    bbtMin,
    bbtMax,
    mucusCounts,
    hasPhysiologicalData,
  }
}
