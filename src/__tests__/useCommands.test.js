import { describe, it, expect, vi, beforeEach } from 'vitest'
import useCommands from '../composables/useCommands'
import { createVoiceState } from '../state'

function createMockModel() {
  return {
    nextStep: ['next step', 'next'],
    previousStep: ['previous step', 'previous'],
    scrollUp: ['scroll up'],
    scrollDown: ['scroll down'],
    goToIngredients: ['go to ingredients', 'ingredients'],
    goToInstructions: ['go to instructions'],
    help: ['help'],
    letsCook: ["let's cook"],
    imDone: ["i'm done", 'done'],
    exit: ['exit']
  }
}

describe('useCommands', () => {
  let voiceState
  let emitEvent

  beforeEach(() => {
    voiceState = createVoiceState()
    emitEvent = vi.fn()
  })

  it('registers all command aliases from the model', () => {
    let model = createMockModel()
    let selectors = { steps: '.step', ingredients: '#ing', instructions: '#inst' }
    const { getCommands, destroy } = useCommands(() => model, () => selectors, voiceState, emitEvent)

    const keys = Object.keys(getCommands())
    expect(keys).toContain('next step')
    expect(keys).toContain('next')
    expect(keys).toContain('previous step')
    expect(keys).toContain('scroll up')
    expect(keys).toContain('help')
    expect(keys).toContain("let's cook")
    expect(keys).toContain("i'm done")
    expect(keys).toContain('done')
    expect(keys).toContain('exit')

    destroy()
  })

  it('returns empty commands if model is null', () => {
    const { getCommands, destroy } = useCommands(() => null, () => ({}), voiceState, emitEvent)
    expect(Object.keys(getCommands())).toHaveLength(0)
    destroy()
  })

  it('rebuilds commands when model getter returns new value', () => {
    let model = createMockModel()
    let selectors = { steps: '.step', ingredients: '#ing', instructions: '#inst' }
    const { getCommands, destroy } = useCommands(() => model, () => selectors, voiceState, emitEvent)

    expect(Object.keys(getCommands())).toContain('next step')

    model = { ...createMockModel(), nextStep: ['forward', 'onwards'] }

    const keys = Object.keys(getCommands())
    expect(keys).toContain('forward')
    expect(keys).toContain('onwards')
    expect(keys).not.toContain('next step')

    destroy()
  })

  it('help command sets stage to listening/help and opens popup', () => {
    let model = createMockModel()
    let selectors = { steps: '.step', ingredients: '#ing', instructions: '#inst' }
    const { getCommands, destroy } = useCommands(() => model, () => selectors, voiceState, emitEvent)

    getCommands()['help']()

    expect(voiceState.state.stage).toBe('listening')
    expect(voiceState.state.subState).toBe('help')
    expect(voiceState.state.isPopupOpened).toBe(true)
    expect(emitEvent).toHaveBeenCalledWith('handsfree-command', { command: 'help' })

    destroy()
  })

  it('exit command resets to listening stage', () => {
    let model = createMockModel()
    let selectors = { steps: '.step', ingredients: '#ing', instructions: '#inst' }
    const { getCommands, destroy } = useCommands(() => model, () => selectors, voiceState, emitEvent)

    voiceState.setStage('listening', 'help')
    getCommands()['exit']()

    expect(voiceState.state.stage).toBe('listening')
    expect(voiceState.state.subState).toBe(null)

    destroy()
  })

  it("let's cook command enables listening and sets listening stage", () => {
    let model = createMockModel()
    let selectors = { steps: '.step', ingredients: '#ing', instructions: '#inst' }
    const { getCommands, destroy } = useCommands(() => model, () => selectors, voiceState, emitEvent)

    getCommands()["let's cook"]()

    expect(voiceState.state.isListening).toBe(true)
    expect(voiceState.state.stage).toBe('listening')
    expect(voiceState.state.isPopupOpened).toBe(false)

    destroy()
  })

  it('scroll commands call window.scrollBy', () => {
    let model = createMockModel()
    let selectors = { steps: '.step', ingredients: '#ing', instructions: '#inst' }
    const { getCommands, destroy } = useCommands(() => model, () => selectors, voiceState, emitEvent)

    const scrollBySpy = vi.spyOn(window, 'scrollBy').mockImplementation(() => {})

    getCommands()['scroll up']()
    expect(scrollBySpy).toHaveBeenCalledWith({ top: -300, behavior: 'smooth' })

    getCommands()['scroll down']()
    expect(scrollBySpy).toHaveBeenCalledWith({ top: 300, behavior: 'smooth' })

    scrollBySpy.mockRestore()
    destroy()
  })
})
