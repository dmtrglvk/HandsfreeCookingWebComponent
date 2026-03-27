import { computed, watch, isRef, toValue } from 'vue'
import { debounce } from '@/utils/debounce'

const SCROLL_AMOUNT = 300

export default function useCommands(modelRef, selectorsRef, voiceState, emitEvent) {
  let instructionsElement = null
  let ingredientsElement = null
  let steps = []
  let currentStepIndex = -1

  const getOffset = () => window.innerWidth < 768 ? 75 : 60

  const { setStage, toggleListening, togglePopupState } = voiceState

  const resolveSelectors = () => toValue(selectorsRef)

  const cacheElements = () => {
    const selectors = resolveSelectors()
    if (selectors.instructions) {
      instructionsElement = document.querySelector(selectors.instructions)
    }
    if (selectors.ingredients) {
      ingredientsElement = document.querySelector(selectors.ingredients)
    }
    if (selectors.steps) {
      steps = Array.from(document.querySelectorAll(selectors.steps))
    }
  }

  const debouncedCacheElements = debounce(cacheElements, 300)

  const observer = new MutationObserver(debouncedCacheElements)

  observer.observe(document.body, { childList: true, subtree: true })

  if (isRef(selectorsRef)) {
    watch(selectorsRef, () => {
      instructionsElement = null
      ingredientsElement = null
      steps = []
      cacheElements()
    })
  }

  const scrollToElement = (element) => {
    const offset = getOffset()
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }

  const scrollToStep = () => {
    if (steps.length > 0 && steps[currentStepIndex]) {
      scrollToElement(steps[currentStepIndex])
    }

    if (steps.length === currentStepIndex + 1) {
      setStage('listening', 'almost-done')
      togglePopupState(true)
    } else {
      setStage('listening')
      togglePopupState(false)
    }
  }

  const commands = computed(() => {
    const model = toValue(modelRef)
    if (!model) return {}

    const cmds = {}
    const addCommand = (aliases, action) => {
      if (!aliases) return
      aliases.forEach((alias) => { cmds[alias] = action })
    }

    addCommand(model.help, () => {
      setStage('listening', 'help')
      togglePopupState(true)
      emitEvent('handsfree-command', { command: 'help' })
    })

    addCommand(model.scrollUp, () => {
      window.scrollBy({ top: -SCROLL_AMOUNT, behavior: 'smooth' })
      emitEvent('handsfree-command', { command: 'scroll up' })
    })

    addCommand(model.scrollDown, () => {
      window.scrollBy({ top: SCROLL_AMOUNT, behavior: 'smooth' })
      emitEvent('handsfree-command', { command: 'scroll down' })
    })

    addCommand(model.exit, () => {
      setStage('listening')
      emitEvent('handsfree-command', { command: 'exit' })
    })

    addCommand(model.goToInstructions, () => {
      if (!instructionsElement) cacheElements()
      if (instructionsElement) {
        scrollToElement(instructionsElement)
        emitEvent('handsfree-command', { command: 'go to instructions' })
      }
      setStage('listening')
      togglePopupState(false)
    })

    addCommand(model.goToIngredients, () => {
      if (!ingredientsElement) cacheElements()
      if (ingredientsElement) {
        scrollToElement(ingredientsElement)
        emitEvent('handsfree-command', { command: 'go to ingredients' })
      }
      setStage('listening')
      togglePopupState(false)
    })

    addCommand(model.nextStep, () => {
      if (steps.length === 0) cacheElements()
      if (currentStepIndex < steps.length - 1) {
        currentStepIndex += 1
        scrollToStep()
        emitEvent('handsfree-command', { command: 'next step' })
      }
    })

    addCommand(model.previousStep, () => {
      if (steps.length === 0) cacheElements()
      if (currentStepIndex > 0) {
        currentStepIndex -= 1
        scrollToStep()
        emitEvent('handsfree-command', { command: 'previous step' })
      }
    })

    addCommand(model.letsCook, () => {
      toggleListening(true)
      setStage('listening')
      togglePopupState(false)
      emitEvent('handsfree-command', { command: "let's cook" })
    })

    addCommand(model.imDone, () => {
      emitEvent('handsfree-command', { command: "i'm done" })
    })

    return cmds
  })

  return { commands, destroy: () => observer.disconnect() }
}
