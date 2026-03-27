import { describe, it, expect } from 'vitest'
import { normalizeText } from '../utils/normalizeText'

describe('normalizeText', () => {
  it('converts to lowercase', () => {
    expect(normalizeText('HELLO')).toBe('hello')
  })

  it('trims leading and trailing whitespace', () => {
    expect(normalizeText('  hello  ')).toBe('hello')
  })

  it('collapses multiple internal spaces', () => {
    expect(normalizeText('go  to   next')).toBe('go to next')
  })

  it('strips trailing punctuation', () => {
    expect(normalizeText('next step.')).toBe('next step')
    expect(normalizeText('help!')).toBe('help')
    expect(normalizeText('done?')).toBe('done')
  })

  it('strips unicode whitespace characters', () => {
    expect(normalizeText('\u00A0hello\u2000')).toBe('hello')
  })

  it('normalizes unicode diacritics', () => {
    expect(normalizeText('café')).toBe('café')
  })

  it('strips Arabic diacritics', () => {
    const withDiacritics = '\u0641\u064E\u0639\u064E\u0644'
    const result = normalizeText(withDiacritics)
    expect(result).not.toContain('\u064E')
  })

  it('handles empty string', () => {
    expect(normalizeText('')).toBe('')
  })

  it('handles CJK punctuation', () => {
    expect(normalizeText('hello。')).toBe('hello')
    expect(normalizeText('hello，')).toBe('hello')
  })
})
