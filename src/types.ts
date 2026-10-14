export type Locale = 'es' | 'en'

export type Flow = 'none' | 'light' | 'medium' | 'heavy'

export type Mucus = 'dry' | 'sticky' | 'creamy' | 'eggwhite' | 'watery'

export type Intensity = 1 | 2 | 3

export type PhaseName = 'menstrual' | 'follicular' | 'ovulatory' | 'luteal'

export type Confidence = 'none' | 'low' | 'medium' | 'high'

export interface Tag {
  id: string
  intensity: Intensity
}

export interface DayLog {
  /** null means this day has no flow mark. `none` means the person said bleeding stopped. */
  flow: Flow | null
  symptoms: Tag[]
  moods: Tag[]
  note: string
  basalTemp: number | null
  mucus: Mucus | null
}

export interface CustomSymptom {
  id: string
  name: string
}

export interface Settings {
  autoLockMinutes: number
  locale: Locale
  historyLength: number
  remindersEnabled: boolean
  /** Shown as Notas on the tab and the lock screen. Stored locally, never sent. */
  discreet: boolean
  /** Used only when there is no measured cycle yet. */
  typicalCycleLength: number | null
}

export interface Vault {
  schemaVersion: 1
  settings: Settings
  days: Record<string, DayLog>
  customSymptoms: CustomSymptom[]
}

export interface Prediction {
  lengths: number[]
  weightedMean: number | null
  mean: number | null
  sd: number | null
  irregular: boolean
  confidence: Confidence
  /** Measured intervals inside the history window. Not the optional onboarding guess. */
  cyclesUsed: number
  lengthSource: 'none' | 'measured' | 'typical'
  predictedLength: number | null
  lastStart: string | null
  cycleDay: number | null
  phase: PhaseName | null
  nextPeriod: string | null
  daysUntil: number | null
  ovulation: string | null
  fertileStart: string | null
  fertileEnd: string | null
  fertileIsNextCycle: boolean
  periodOpen: boolean
  bleedLength: number | null
  bleedEnd: string | null
}
