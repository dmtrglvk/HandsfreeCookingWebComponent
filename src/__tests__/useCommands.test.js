import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref, nextTick } from 'vue'
import useCommands from '../composables/useCommands'
import { createVoiceState } from '../composables/useVoiceState'

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
    const model = ref(createMockModel())
    const selectors = ref({ steps: '.step', ingredients: '#ing', instructions: '#inst' })
    const { commands, destroy } = useCommands(model, selectors, voiceState, emitEvent)

    const keys = Object.keys(commands.value)
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
    const model = ref(null)
    const selectors = ref({ steps: '.step', ingredients: '#ing', instructions: '#inst' })
    const { commands, destroy } = useCommands(model, selectors, voiceState, emitEvent)

    expect(Object.keys(commands.value)).toHaveLength(0)
    destroy()
  })

  it('rebuilds commands when model ref changes', async () => {
    const model = ref(createMockModel())
    const selectors = ref({ steps: '.step', ingredients: '#ing', instructions: '#inst' })
    const { commands, destroy } = useCommands(model, selectors, voiceState, emitEvent)

    expect(Object.keys(commands.value)).toContain('next step')

    model.value = {
      ...createMockModel(),
      nextStep: ['forward', 'onwards']
    }
    await nextTick()

    const keys = Object.keys(commands.value)
    expect(keys).toContain('forward')
    expect(keys).toContain('onwards')
    expect(keys).not.toContain('next step')

    destroy()
  })

  it('help command sets stage to listening/help and opens popup', () => {
    const model = ref(createMockModel())
    const selectors = ref({ steps: '.step', ingredients: '#ing', instructions: '#inst' })
    const { commands, destroy } = useCommands(model, selectors, voiceState, emitEvent)

    commands.value['help']()

    expect(voiceState.state.stage).toBe('listening')
    expect(voiceState.state.subState).toBe('help')
    expect(voiceState.state.isPopupOpened).toBe(true)
    expect(emitEvent).toHaveBeenCalledWith('handsfree-command', { command: 'help' })

    destroy()
  })

  it('exit command resets to listening stage', () => {
    const model = ref(createMockModel())
    const selectors = ref({ steps: '.step', ingredients: '#ing', instructions: '#inst' })
    const { commands, destroy } = useCommands(model, selectors, voiceState, emitEvent)

    voiceState.setStage('listening', 'help')
    commands.value['exit']()

    expect(voiceState.state.stage).toBe('listening')
    expect(voiceState.state.subState).toBe(null)

    destroy()
  })

  it("let's cook command enables listening and sets listening stage", () => {
    const model = ref(createMockModel())
    const selectors = ref({ steps: '.step', ingredients: '#ing', instructions: '#inst' })
    const { commands, destroy } = useCommands(model, selectors, voiceState, emitEvent)

    commands.value["let's cook"]()

    expect(voiceState.state.isListening).toBe(true)
    expect(voiceState.state.stage).toBe('listening')
    expect(voiceState.state.isPopupOpened).toBe(false)

    destroy()
  })

  it('scroll commands call window.scrollBy', () => {
    const model = ref(createMockModel())
    const selectors = ref({ steps: '.step', ingredients: '#ing', instructions: '#inst' })
    const { commands, destroy } = useCommands(model, selectors, voiceState, emitEvent)

    const scrollBySpy = vi.spyOn(window, 'scrollBy').mockImplementation(() => {})

    commands.value['scroll up']()
    expect(scrollBySpy).toHaveBeenCalledWith({ top: -300, behavior: 'smooth' })

    commands.value['scroll down']()
    expect(scrollBySpy).toHaveBeenCalledWith({ top: 300, behavior: 'smooth' })

    scrollBySpy.mockRestore()
    destroy()
  })
})
