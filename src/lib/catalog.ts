export const SYMPTOM_IDS = ['cramps', 'bloating', 'headache', 'acne', 'fatigue', 'cravings'] as const
export const MOOD_IDS = ['calm', 'irritable', 'sad', 'energetic', 'anxious'] as const

export type SymptomId = (typeof SYMPTOM_IDS)[number]
export type MoodId = (typeof MOOD_IDS)[number]

const symptomSet = new Set<string>(SYMPTOM_IDS)
const moodSet = new Set<string>(MOOD_IDS)

export function isBuiltinSymptom(id: string): id is SymptomId {
  return symptomSet.has(id)
}

export function isMood(id: string): id is MoodId {
  return moodSet.has(id)
}
