import { useState } from 'react'
import { generateClinicalReport } from '../lib/clinicalReport.ts'
import { formatShort, todayISO } from '../lib/dates.ts'
import type { MessageKey } from '../lib/i18n.tsx'
import { useI18n } from '../lib/i18n.tsx'
import { Button } from './ui.tsx'
import type { CustomSymptom, DayLog } from '../types.ts'

interface Props {
  days: Record<string, DayLog>
  historyLength: number
  customSymptoms: CustomSymptom[]
  onClose: () => void
}

const REGULARITY_LABEL = {
  unknown: 'sum.regularityUnknown',
  steady: 'sum.regularitySteady',
  variable: 'sum.regularityVariable',
} as const

const MUCUS_LABEL = {
  dry: 'mucus.dry',
  sticky: 'mucus.sticky',
  creamy: 'mucus.creamy',
  eggwhite: 'mucus.eggwhite',
  watery: 'mucus.watery',
} as const

export function ClinicalReportModal({ days, historyLength, customSymptoms, onClose }: Props) {
  const { locale, t } = useI18n()
  const [consultationNotes, setConsultationNotes] = useState('')
  const today = todayISO()
  const report = generateClinicalReport(days, historyLength, today)

  function symptomName(id: string): string {
    const custom = customSymptoms.find((c) => c.id === id)
    if (custom) return custom.name
    const key = `sym.${id}` as MessageKey
    return t(key)
  }

  function moodName(id: string): string {
    const key = `mood.${id}` as MessageKey
    return t(key)
  }

  function handlePrint() {
    window.print()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 p-2 sm:p-6 backdrop-blur-xs">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-xl sm:p-8 print:p-0 print:shadow-none print:max-w-none">
        {/* Top actions (hidden on print) */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-4 no-print">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-ink">{t('report.title')}</h2>
            <p className="text-xs text-muted">{t('report.subtitle')}</p>
          </div>
          <div className="flex gap-2">
            <Button tone="quiet" onClick={onClose}>
              {t('report.close')}
            </Button>
            <Button onClick={handlePrint}>
              {t('report.print')}
            </Button>
          </div>
        </div>

        {/* Printable Report Header */}
        <div className="border-b border-black/20 pb-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-ink">{t('report.title')}</h1>
            <span className="text-xs font-semibold tracking-wider uppercase text-muted">Lunilla PWA</span>
          </div>
          <p className="mt-1 text-xs text-muted">
            {t('report.generated', { date: formatShort(report.generatedDate, locale) })} • {t('report.totalPeriods', { n: report.totalPeriods })} • {t('report.totalDays', { n: report.totalDaysLogged })}
          </p>
        </div>

        {/* Section 1: Summary Stats */}
        <div className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted">{t('report.summarySection')}</h2>
          <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4 print:grid-cols-4">
            <div className="rounded-xl border border-black/10 bg-paper p-3 print:border-black/30">
              <p className="text-xs text-muted">{t('report.avgCycle')}</p>
              <p className="text-lg font-bold text-ink">
                {report.averageCycleLength !== null ? `${report.averageCycleLength} d` : '—'}
              </p>
            </div>
            <div className="rounded-xl border border-black/10 bg-paper p-3 print:border-black/30">
              <p className="text-xs text-muted">{t('report.avgPeriod')}</p>
              <p className="text-lg font-bold text-ink">
                {report.averagePeriodLength !== null ? `${report.averagePeriodLength} d` : '—'}
              </p>
            </div>
            <div className="rounded-xl border border-black/10 bg-paper p-3 print:border-black/30">
              <p className="text-xs text-muted">{t('report.rangeCycle')}</p>
              <p className="text-lg font-bold text-ink">
                {report.shortestCycle !== null && report.longestCycle !== null
                  ? `${report.shortestCycle} – ${report.longestCycle} d`
                  : '—'}
              </p>
            </div>
            <div className="rounded-xl border border-black/10 bg-paper p-3 print:border-black/30">
              <p className="text-xs text-muted">{t('report.regularity')}</p>
              <p className="text-lg font-bold text-ink">
                {t(REGULARITY_LABEL[report.regularity])}
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Cycle History Table */}
        <div className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted">{t('report.cyclesSection')}</h2>
          {report.cycles.length > 0 ? (
            <div className="mt-2 overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-black/20 text-muted">
                    <th className="py-2 pr-3">{t('report.colNum')}</th>
                    <th className="py-2 px-3">{t('report.colDates')}</th>
                    <th className="py-2 px-3">{t('report.colPeriodLen')}</th>
                    <th className="py-2 pl-3">{t('report.colCycleLen')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10">
                  {report.cycles.map((cycle) => (
                    <tr key={cycle.startDate}>
                      <td className="py-2 pr-3 font-medium text-ink">#{cycle.cycleNumber}</td>
                      <td className="py-2 px-3">
                        {formatShort(cycle.startDate, locale)} – {formatShort(cycle.endDate, locale)}
                      </td>
                      <td className="py-2 px-3">{cycle.periodLength} días</td>
                      <td className="py-2 pl-3 font-medium text-ink">
                        {cycle.cycleLength !== null ? `${cycle.cycleLength} días` : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mt-2 text-xs text-muted italic">Sin ciclos suficientes para listar.</p>
          )}
        </div>

        {/* Section 3: Symptoms & Moods */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 print:grid-cols-2">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted">{t('report.symptomsSection')}</h2>
            {report.topSymptoms.length > 0 ? (
              <ul className="mt-2 space-y-1.5 text-xs">
                {report.topSymptoms.map((sym) => (
                  <li key={sym.id} className="flex justify-between border-b border-black/5 pb-1">
                    <span className="font-medium text-ink">{symptomName(sym.id)}</span>
                    <span className="text-muted">{sym.count} veces ({sym.percentage}%)</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-xs text-muted italic">Sin síntomas registrados.</p>
            )}
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted">{t('report.moodsSection')}</h2>
            {report.topMoods.length > 0 ? (
              <ul className="mt-2 space-y-1.5 text-xs">
                {report.topMoods.map((mood) => (
                  <li key={mood.id} className="flex justify-between border-b border-black/5 pb-1">
                    <span className="font-medium text-ink">{moodName(mood.id)}</span>
                    <span className="text-muted">{mood.count} veces ({mood.percentage}%)</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-xs text-muted italic">Sin estados de ánimo registrados.</p>
            )}
          </div>
        </div>

        {/* Section 4: Physiological indicators (if any) */}
        {report.hasPhysiologicalData ? (
          <div className="mt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted">{t('report.physioSection')}</h2>
            <div className="mt-2 space-y-2 text-xs">
              {report.bbtCount > 0 ? (
                <div className="rounded-xl border border-black/10 bg-paper p-3 print:border-black/30">
                  <p className="font-medium text-ink">{t('report.bbt')}</p>
                  <p className="text-muted">
                    {t('report.bbtStats', {
                      count: report.bbtCount,
                      min: report.bbtMin ?? 0,
                      max: report.bbtMax ?? 0,
                    })}
                  </p>
                </div>
              ) : null}
              {Object.entries(report.mucusCounts).some(([, count]) => count > 0) ? (
                <div className="rounded-xl border border-black/10 bg-paper p-3 print:border-black/30">
                  <p className="font-medium text-ink">{t('report.mucus')}</p>
                  <p className="text-muted">
                    {Object.entries(report.mucusCounts)
                      .filter(([, count]) => count > 0)
                      .map(([type, count]) => `${t(MUCUS_LABEL[type as keyof typeof MUCUS_LABEL])}: ${count}`)
                      .join(' • ')}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        {/* Section 5: Consultation Notes */}
        <div className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted">{t('report.doctorNotes')}</h2>
          <div className="mt-2">
            <textarea
              className="w-full rounded-2xl border border-black/15 bg-white p-3 text-xs leading-relaxed print:border-black/30 print:bg-transparent"
              rows={3}
              placeholder={t('report.doctorNotesPlaceholder')}
              value={consultationNotes}
              onChange={(e) => setConsultationNotes(e.target.value)}
            />
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-6 border-t border-black/20 pt-3">
          <p className="text-[10px] leading-relaxed text-muted italic">
            {t('report.disclaimer')}
          </p>
        </div>
      </div>
    </div>
  )
}
