import { describe, it, expect } from 'vitest'
import { deepMerge } from '../utils/deepMerge'

describe('deepMerge', () => {
  it('merges flat objects', () => {
    const result = deepMerge({ a: 1, b: 2 }, { b: 3, c: 4 })
    expect(result).toEqual({ a: 1, b: 3, c: 4 })
  })

  it('deep merges nested objects', () => {
    const target = { tooltip: { title: 'Hello', text: 'World' } }
    const source = { tooltip: { title: 'Updated' } }
    const result = deepMerge(target, source)
    expect(result.tooltip.title).toBe('Updated')
    expect(result.tooltip.text).toBe('World')
  })

  it('replaces arrays instead of merging them', () => {
    const target = { items: [1, 2, 3] }
    const source = { items: [4, 5] }
    const result = deepMerge(target, source)
    expect(result.items).toEqual([4, 5])
  })

  it('does not mutate the original objects', () => {
    const target = { a: { b: 1 } }
    const source = { a: { c: 2 } }
    const result = deepMerge(target, source)
    expect(result.a).toEqual({ b: 1, c: 2 })
    expect(target.a).toEqual({ b: 1 })
    expect(source.a).toEqual({ c: 2 })
  })

  it('handles empty source', () => {
    const target = { a: 1 }
    const result = deepMerge(target, {})
    expect(result).toEqual({ a: 1 })
  })

  it('handles empty target', () => {
    const source = { a: 1 }
    const result = deepMerge({}, source)
    expect(result).toEqual({ a: 1 })
  })

  it('overwrites primitive with object', () => {
    const target = { a: 'string' }
    const source = { a: { nested: true } }
    const result = deepMerge(target, source)
    expect(result.a).toEqual({ nested: true })
  })

  it('overwrites object with primitive', () => {
    const target = { a: { nested: true } }
    const source = { a: 'string' }
    const result = deepMerge(target, source)
    expect(result.a).toBe('string')
  })
})
