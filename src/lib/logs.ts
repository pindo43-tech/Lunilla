import { emptyDay } from './schema.ts'
import type { DayLog, Flow, Intensity, Tag, Vault } from '../types.ts'

export function writeDay(vault: Vault, iso: string, recipe: (day: DayLog) => DayLog): Vault {
  const current = vault.days[iso] ?? emptyDay()
  return {
    ...vault,
    days: {
      ...vault.days,
      [iso]: recipe(current),
    },
  }
}

export function setFlow(vault: Vault, iso: string, flow: Flow): Vault {
  return writeDay(vault, iso, (day) => ({ ...day, flow }))
}

export function markStarted(vault: Vault, iso: string): Vault {
  const flow = vault.days[iso]?.flow
  if (flow && flow !== 'none') return vault
  return setFlow(vault, iso, 'medium')
}

export function markEnded(vault: Vault, iso: string): Vault {
  return setFlow(vault, iso, 'none')
}

export function markContinued(vault: Vault, iso: string, yesterday: string): Vault {
  const previous = vault.days[yesterday]?.flow
  const flow: Flow = previous && previous !== 'none' ? previous : 'medium'
  return setFlow(vault, iso, flow)
}

export function toggleTag(list: Tag[], id: string): Tag[] {
  if (list.some((tag) => tag.id === id)) return list.filter((tag) => tag.id !== id)
  return [...list, { id, intensity: 2 }]
}

export function setTagIntensity(list: Tag[], id: string, intensity: Intensity): Tag[] {
  return list.map((tag) => (tag.id === id ? { ...tag, intensity } : tag))
}

export function removeCustomSymptom(vault: Vault, id: string): Vault {
  const days: Record<string, DayLog> = {}
  for (const [iso, day] of Object.entries(vault.days)) {
    days[iso] = { ...day, symptoms: day.symptoms.filter((tag) => tag.id !== id) }
  }
  return {
    ...vault,
    customSymptoms: vault.customSymptoms.filter((item) => item.id !== id),
    days,
  }
}
