import { describe, expect, it } from 'vitest'
import { buildUpcomingPeriodsIcs, escapeIcsText, generateIcsContent, toIcsDate } from './ics.ts'
import type { Prediction } from '../types.ts'

describe('iCalendar generator (RFC 5545)', () => {
  it('escapes special characters correctly according to RFC 5545', () => {
    expect(escapeIcsText('Hello, world; test\\run\nnewline')).toBe('Hello\\, world\\; test\\\\run\\nnewline')
  })

  it('converts ISO dates to iCalendar compact format', () => {
    expect(toIcsDate('2026-05-18')).toBe('20260518')
  })

  it('generates standard RFC 5545 VCALENDAR structure with CRLF', () => {
    const ics = generateIcsContent([
      {
        uid: 'test-1@lunilla.local',
        title: 'Período estimado',
        description: 'Nota educativa',
        startIso: '2026-06-01',
        endIsoInclusive: '2026-06-05',
      },
    ])

    expect(ics.startsWith('BEGIN:VCALENDAR\r\n')).toBe(true)
    expect(ics.includes('VERSION:2.0\r\n')).toBe(true)
    expect(ics.includes('DTSTART;VALUE=DATE:20260601\r\n')).toBe(true)
    // DTEND must be exclusive (+1 day from inclusive end: 2026-06-05 -> 20260606)
    expect(ics.includes('DTEND;VALUE=DATE:20260606\r\n')).toBe(true)
    expect(ics.includes('SUMMARY:Período estimado\r\n')).toBe(true)
    expect(ics.endsWith('END:VCALENDAR\r\n')).toBe(true)
  })

  it('builds up to 3 upcoming future periods and rolls past predictions', () => {
    const mockPrediction: Prediction = {
      lengths: [28, 28],
      weightedMean: 28,
      mean: 28,
      sd: 0,
      irregular: false,
      confidence: 'high',
      cyclesUsed: 2,
      lengthSource: 'measured',
      predictedLength: 28,
      lastStart: '2026-05-01',
      cycleDay: 10,
      phase: 'follicular',
      nextPeriod: '2026-05-29',
      daysUntil: 19,
      ovulation: '2026-05-15',
      fertileStart: '2026-05-10',
      fertileEnd: '2026-05-16',
      fertileIsNextCycle: false,
      periodOpen: false,
      bleedLength: 5,
      bleedEnd: '2026-05-05',
    }

    const ics = buildUpcomingPeriodsIcs(mockPrediction, '2026-05-10', 'es')
    expect(ics).not.toBeNull()
    if (!ics) return

    expect(ics.includes('DTSTART;VALUE=DATE:20260529')).toBe(true)
    // Next cycle is 2026-05-29 + 28 days = 2026-06-26
    expect(ics.includes('DTSTART;VALUE=DATE:20260626')).toBe(true)
    // Third cycle is 2026-06-26 + 28 days = 2026-07-24
    expect(ics.includes('DTSTART;VALUE=DATE:20260724')).toBe(true)
  })

  it('returns null if there is no next period predicted', () => {
    const mockPrediction: Prediction = {
      lengths: [],
      weightedMean: null,
      mean: null,
      sd: null,
      irregular: false,
      confidence: 'none',
      cyclesUsed: 0,
      lengthSource: 'none',
      predictedLength: null,
      lastStart: null,
      cycleDay: null,
      phase: null,
      nextPeriod: null,
      daysUntil: null,
      ovulation: null,
      fertileStart: null,
      fertileEnd: null,
      fertileIsNextCycle: false,
      periodOpen: false,
      bleedLength: null,
      bleedEnd: null,
    }

    expect(buildUpcomingPeriodsIcs(mockPrediction, '2026-05-10', 'es')).toBeNull()
  })
})
