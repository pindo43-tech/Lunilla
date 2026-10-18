// Información por fase del ciclo — textos tomados de IraSoro/peri (MIT, (c) 2025 Irina Sorokina, commit 6e2bde5):
// src/state/CalculationLogics.ts (getPhase: qué síntomas van en cada fase) + src/utils/translations/es.ts (traducción
// al español, copiada literal). Licencia en ../third_party/LICENSE-peri.txt. Contenido orientativo, no diagnóstico.
export const PHASE_INFO = {
  Menstrual: {
    title: 'Fase menstrual',
    description: 'Este ciclo se acompaña de niveles bajos de hormonas.',
    symptoms: ['Falta de energía y fuerza', 'Dolor', 'Debilidad e irritabilidad', 'Aumento del apetito'],
  },
  Folicular: {
    title: 'Fase folicular',
    description: 'El nivel de estrógeno en esta fase aumenta y alcanza un nivel máximo.',
    symptoms: ['Aparecen la fuerza y el vigor', 'Aumenta la resistencia', 'Aparecen nuevas ideas y planes', 'Aumenta la libido'],
  },
  Ovulatoria: {
    title: 'Fase de ovulación',
    description: 'Una vez que los niveles de estrógeno alcanzan su punto máximo, desencadenan la liberación de dos importantes hormonas de la ovulación: la hormona folículo-estimulante y la hormona luteinizante.',
    symptoms: ['Aumento del deseo sexual', 'Estado de ánimo optimista', 'Fiebre leve', 'Dolor abdominal bajo', 'Molestias en el pecho e hinchazón', 'Secreciones características'],
  },
  Lútea: {
    title: 'Fase lútea',
    description: 'Los niveles de las hormonas estrógeno y progesterona primero aumentan y luego caen bruscamente justo antes de la menstruación. La progesterona alcanza su punto máximo en la fase lútea.',
    symptoms: ['Sensibilidad en los senos', 'Hinchazón', 'Acné y erupciones cutáneas', 'Aumento del apetito', 'Diarrea o estreñimiento', 'Irritabilidad y estado de ánimo deprimido'],
  },
};
export const phaseInfo = name => PHASE_INFO[name] || null;
