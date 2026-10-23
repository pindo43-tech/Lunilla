export interface TemperatureReading {
  date: string
  temp: number
}

export interface BbtAnalysis {
  hasData: boolean
  readings: TemperatureReading[]
  coverline: number | null
  shiftDate: string | null
  shiftIndex: number | null
  biphasic: boolean
  minTemp: number
  maxTemp: number
  averageTemp: number | null
}

/**
 * Analyzes BBT (Basal Body Temperature) readings for a cycle using the
 * standard 3-over-6 rule (Sensiplan/Symptothermal method).
 *
 * A thermal shift is identified when:
 * 1. There are at least 6 consecutive pre-shift temperatures (or 3-6 if cycle start).
 * 2. Followed by 3 consecutive higher temperatures.
 * 3. The 3rd higher temperature is at least 0.2 °C above the highest of the preceding 6 temperatures.
 * 4. The coverline is drawn through the highest of the 6 preceding temperatures.
 */
export function analyzeBbt(readings: TemperatureReading[]): BbtAnalysis {
  if (readings.length === 0) {
    return {
      hasData: false,
      readings: [],
      coverline: null,
      shiftDate: null,
      shiftIndex: null,
      biphasic: false,
      minTemp: 36.0,
      maxTemp: 37.0,
      averageTemp: null,
    }
  }

  // Ensure chronological order
  const sorted = [...readings].sort((a, b) => a.date.localeCompare(b.date))
  const temps = sorted.map((r) => r.temp)
  const minTemp = Math.min(...temps)
  const maxTemp = Math.max(...temps)
  const sum = temps.reduce((acc, val) => acc + val, 0)
  const averageTemp = Math.round((sum / temps.length) * 100) / 100

  // We need at least 4 readings to attempt detecting a shift (e.g. 3 base + 1 high, or 6 + 3)
  if (sorted.length < 4) {
    return {
      hasData: true,
      readings: sorted,
      coverline: null,
      shiftDate: null,
      shiftIndex: null,
      biphasic: false,
      minTemp,
      maxTemp,
      averageTemp,
    }
  }

  // Search for the 3-over-6 thermal shift
  // We look for index i where sorted[i], sorted[i+1], sorted[i+2] are elevated above the preceding 6 readings
  let bestShiftIndex: number | null = null
  let bestCoverline: number | null = null

  // Pre-shift window size: preferably 6, or minimum 3 if early in cycle
  for (let i = 3; i <= sorted.length - 3; i++) {
    const preWindowStart = Math.max(0, i - 6)
    const preTemps = sorted.slice(preWindowStart, i).map((r) => r.temp)
    const highestPreTemp = Math.max(...preTemps)

    const day1 = sorted[i]?.temp ?? 0
    const day2 = sorted[i + 1]?.temp ?? 0
    const day3 = sorted[i + 2]?.temp ?? 0

    // Standard 3-over-6 rule: all 3 days strictly above the coverline
    const allAbove = day1 > highestPreTemp && day2 > highestPreTemp && day3 > highestPreTemp
    // 3rd day at least 0.2 °C above coverline (or 0.1 °C with standard rule exception)
    const thirdDayElevation = day3 >= highestPreTemp + 0.15

    if (allAbove && thirdDayElevation) {
      bestShiftIndex = i
      bestCoverline = Math.round(highestPreTemp * 100) / 100
      break
    }
  }

  return {
    hasData: true,
    readings: sorted,
    coverline: bestCoverline,
    shiftDate: bestShiftIndex !== null ? (sorted[bestShiftIndex]?.date ?? null) : null,
    shiftIndex: bestShiftIndex,
    biphasic: bestShiftIndex !== null,
    minTemp,
    maxTemp,
    averageTemp,
  }
}

/**
 * Extracts BBT readings for the current/most recent cycle or a specific date range from vault.days.
 */
export function extractCycleBbt(
  days: Record<string, { basalTemp: number | null }>,
  startDate: string,
  endDate?: string,
): TemperatureReading[] {
  const readings: TemperatureReading[] = []
  for (const [date, log] of Object.entries(days)) {
    if (log.basalTemp !== null && Number.isFinite(log.basalTemp)) {
      if (date >= startDate && (!endDate || date <= endDate)) {
        readings.push({ date, temp: log.basalTemp })
      }
    }
  }
  return readings.sort((a, b) => a.date.localeCompare(b.date))
}
