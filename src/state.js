export function createVoiceState(onChange) {
  const state = {
    stage: null,
    subState: null,
    isListening: false,
    isPopupOpened: true
  }

  const notify = () => onChange?.()

  return {
    state,
    setStage(stage, subState = null) {
      if (state.stage === stage && state.subState === subState) return
      state.stage = stage
      state.subState = subState
      notify()
    },
    toggleListening(value) {
      if (state.isListening === value) return
      state.isListening = value
      notify()
    },
    togglePopupState(value) {
      if (state.isPopupOpened === value) return
      state.isPopupOpened = value
      notify()
    }
  }
}
