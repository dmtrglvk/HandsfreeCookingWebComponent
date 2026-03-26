export default function useCommands(model, selectors, voiceState, emitEvent) {
  const commands = {}
  let instructionsElement = null
  let ingredientsElement = null
  let steps = []
  let currentStepIndex = -1
  const offset = window.innerWidth < 768 ? 75 : 60

  const {
    state,
    toggleHelpStage,
    toggleListening,
    togglePopupState,
    updateCurrentStage
  } = voiceState

  const cacheElements = () => {
    if (!instructionsElement && selectors.instructions) {
      instructionsElement = document.querySelector(selectors.instructions)
    }
    if (!ingredientsElement && selectors.ingredients) {
      ingredientsElement = document.querySelector(selectors.ingredients)
    }
    if (selectors.steps) {
      steps = Array.from(document.querySelectorAll(selectors.steps))
    }
  }

  const observer = new MutationObserver(() => {
    cacheElements()
  })

  observer.observe(document.body, { childList: true, subtree: true })

  const scrollToStep = () => {
    if (steps.length > 0 && steps[currentStepIndex]) {
      const stepElement = steps[currentStepIndex]
      const elementPosition = stepElement.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }

    if (steps.length === currentStepIndex + 1) {
      updateCurrentStage('listening almost-done')
      togglePopupState(true)
    } else {
      updateCurrentStage('listening')
      togglePopupState(false)
    }
  }

  const addCommand = (aliases, action) => {
    if (!aliases) return
    aliases.forEach((alias) => {
      commands[alias] = action
    })
  }

  if (!model) {
    return { commands, destroy: () => observer.disconnect() }
  }

  addCommand(model.help, () => {
    updateCurrentStage('listening help')
    toggleHelpStage(true)
    togglePopupState(true)
    emitEvent('handsfree-command', { command: 'help' })
    if (currentStepIndex > 0) {
      currentStepIndex -= 1
    }
  })

  addCommand(model.scrollUp, () => {
    window.scrollBy({ top: -300, behavior: 'smooth' })
    emitEvent('handsfree-command', { command: 'scroll-up' })
  })

  addCommand(model.scrollDown, () => {
    window.scrollBy({ top: 300, behavior: 'smooth' })
    emitEvent('handsfree-command', { command: 'scroll-down' })
  })

  addCommand(model.exit, () => {
    updateCurrentStage('listening')
    toggleHelpStage(false)
    emitEvent('handsfree-command', { command: 'exit' })
  })

  addCommand(model.goToInstructions, () => {
    if (!instructionsElement) {
      cacheElements()
    }
    if (instructionsElement) {
      window.scrollTo({
        top: instructionsElement.offsetTop - offset,
        behavior: 'smooth'
      })
      emitEvent('handsfree-command', { command: 'go-to-instructions' })
    }
    if (currentStepIndex > 0) {
      currentStepIndex -= 1
      updateCurrentStage('listening')
      togglePopupState(false)
    }
  })

  addCommand(model.goToIngredients, () => {
    if (!ingredientsElement) {
      cacheElements()
    }
    if (ingredientsElement) {
      window.scrollTo({
        top: ingredientsElement.offsetTop - offset,
        behavior: 'smooth'
      })
      emitEvent('handsfree-command', { command: 'go-to-ingredients' })
    }
    if (currentStepIndex > 0) {
      currentStepIndex -= 1
      updateCurrentStage('listening')
      togglePopupState(false)
    }
  })

  addCommand(model.nextStep, () => {
    if (steps.length === 0) {
      cacheElements()
    }

    if (currentStepIndex < steps.length - 1) {
      currentStepIndex += 1
      scrollToStep()
      emitEvent('handsfree-command', { command: 'next-step' })
    }
  })

  addCommand(model.previousStep, () => {
    if (steps.length === 0) {
      cacheElements()
    }

    if (currentStepIndex > 0) {
      currentStepIndex -= 1
      scrollToStep()
      emitEvent('handsfree-command', { command: 'previous-step' })
    }
  })

  addCommand(model.letsCook, () => {
    toggleListening(true)
    updateCurrentStage('listening')
    togglePopupState(false)
    emitEvent('handsfree-command', { command: 'lets-cook' })
  })

  addCommand(model.imDone, () => {
    emitEvent('handsfree-command', { command: 'im-done' })
  })

  return { commands, destroy: () => observer.disconnect() }
}
