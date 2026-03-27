import { describe, it, expect } from 'vitest'
import { createVoiceState } from '../composables/useVoiceState'

describe('createVoiceState', () => {
  it('returns initial state with all fields null/false/true', () => {
    const { state } = createVoiceState()
    expect(state.stage).toBe(null)
    expect(state.subState).toBe(null)
    expect(state.isListening).toBe(false)
    expect(state.isPopupOpened).toBe(true)
  })

  it('setStage updates stage and subState', () => {
    const { state, setStage } = createVoiceState()
    setStage('listening')
    expect(state.stage).toBe('listening')
    expect(state.subState).toBe(null)

    setStage('listening', 'help')
    expect(state.stage).toBe('listening')
    expect(state.subState).toBe('help')
  })

  it('setStage resets subState when called without second argument', () => {
    const { state, setStage } = createVoiceState()
    setStage('listening', 'not-recognized')
    expect(state.subState).toBe('not-recognized')

    setStage('listening')
    expect(state.subState).toBe(null)
  })

  it('toggleListening sets isListening', () => {
    const { state, toggleListening } = createVoiceState()
    toggleListening(true)
    expect(state.isListening).toBe(true)
    toggleListening(false)
    expect(state.isListening).toBe(false)
  })

  it('togglePopupState sets isPopupOpened', () => {
    const { state, togglePopupState } = createVoiceState()
    togglePopupState(false)
    expect(state.isPopupOpened).toBe(false)
    togglePopupState(true)
    expect(state.isPopupOpened).toBe(true)
  })
})
