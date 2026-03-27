import { describe, it, expect } from 'vitest'
import { findBestMatch } from '../utils/matchCommand'

describe('findBestMatch', () => {
  const aliases = ['next step', 'next', 'previous step', 'scroll up', 'help']

  it('returns exact match', () => {
    expect(findBestMatch('next step', aliases)).toBe('next step')
  })

  it('is case-insensitive', () => {
    expect(findBestMatch('NEXT STEP', aliases)).toBe('next step')
  })

  it('prefers exact match over partial', () => {
    expect(findBestMatch('next', aliases)).toBe('next')
  })

  it('matches with trailing punctuation', () => {
    expect(findBestMatch('help.', aliases)).toBe('help')
  })

  it('matches when speech starts with alias', () => {
    expect(findBestMatch('next step please', aliases)).toBe('next step')
  })

  it('matches when speech ends with alias', () => {
    expect(findBestMatch('please scroll up', aliases)).toBe('scroll up')
  })

  it('matches at word boundary inside speech', () => {
    expect(findBestMatch('ok help me', aliases)).toBe('help')
  })

  it('returns null when no match found', () => {
    expect(findBestMatch('something random', aliases)).toBe(null)
  })

  it('prefers longer alias when scores are equal', () => {
    expect(findBestMatch('next step please', ['next step', 'next'])).toBe('next step')
  })

  it('handles extra whitespace in speech', () => {
    expect(findBestMatch('  scroll   up  ', aliases)).toBe('scroll up')
  })
})
