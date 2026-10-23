import type { Locale, PhaseName } from '../types.ts'

/**
 * Información educativa por fase del ciclo.
 * Adaptado de IraSoro/peri (MIT License, (c) 2025 Irina Sorokina).
 * Contenido puramente educativo y orientativo, no médico ni diagnóstico.
 */

export interface PhaseEducationalInfo {
  phase: PhaseName
  title: string
  description: string
  symptoms: string[]
}

const PHASES_ES: Record<PhaseName, Omit<PhaseEducationalInfo, 'phase'>> = {
  menstrual: {
    title: 'Fase menstrual',
    description: 'El cuerpo desprende el endometrio. Los niveles de estrógeno y progesterona se encuentran en su punto más bajo.',
    symptoms: ['Falta de energía y cansancio', 'Cólicos o molestia pélvica', 'Sensibilidad emocional', 'Cambios en el apetito'],
  },
  follicular: {
    title: 'Fase folicular',
    description: 'Los folículos ováricos maduran y el nivel de estrógeno comienza a elevarse gradualmente, aumentando la energía física.',
    symptoms: ['Mayor vigor y vitalidad', 'Mayor resistencia física', 'Claridad mental y nuevas ideas', 'Sensación de ligereza'],
  },
  ovulatory: {
    title: 'Fase de ovulación',
    description: 'El pico de estrógeno estimula la liberación de la hormona luteinizante (LH), desencadenando la ovulación.',
    symptoms: ['Flujo cervical elástico y transparente', 'Aumento de energía y optimismo', 'Leve molestia en el bajo vientre', 'Sensibilidad mamaria leve'],
  },
  luteal: {
    title: 'Fase lútea',
    description: 'El folículo se convierte en cuerpo lúteo y produce progesterona. Si no hay fecundación, las hormonas disminuyen al final.',
    symptoms: ['Mayor necesidad de descanso', 'Sensibilidad mamaria', 'Hinchazón abdominal', 'Cambios de humor o irritabilidad'],
  },
}

const PHASES_EN: Record<PhaseName, Omit<PhaseEducationalInfo, 'phase'>> = {
  menstrual: {
    title: 'Menstrual phase',
    description: 'The uterine lining sheds. Estrogen and progesterone hormone levels are at their lowest point.',
    symptoms: ['Lower physical energy', 'Pelvic cramps or discomfort', 'Emotional sensitivity', 'Changes in appetite'],
  },
  follicular: {
    title: 'Follicular phase',
    description: 'Ovarian follicles mature as estrogen rises gradually, bringing an increase in physical stamina and motivation.',
    symptoms: ['Increased energy and focus', 'Higher physical endurance', 'Optimistic outlook', 'Sense of lightness'],
  },
  ovulatory: {
    title: 'Ovulation phase',
    description: 'Peak estrogen triggers the luteinizing hormone (LH) surge, releasing an egg from the ovary.',
    symptoms: ['Clear, stretchy cervical mucus', 'Higher sociability and confidence', 'Mild lower abdominal twinge', 'Subtle breast tenderness'],
  },
  luteal: {
    title: 'Luteal phase',
    description: 'The corpus luteum produces progesterone to support the lining, then hormones taper off right before menstruation.',
    symptoms: ['Need for more sleep and rest', 'Breast tenderness', 'Mild bloating or water retention', 'Mood fluctuations or irritability'],
  },
}

export function getPhaseInfo(phase: PhaseName, locale: Locale): PhaseEducationalInfo {
  const dictionary = locale === 'en' ? PHASES_EN : PHASES_ES
  const item = dictionary[phase] ?? PHASES_ES[phase]
  return {
    phase,
    title: item.title,
    description: item.description,
    symptoms: item.symptoms,
  }
}
