import { reactive, provide, inject } from 'vue'

const VOICE_STATE_KEY = Symbol('voiceState')

export function createVoiceState() {
  const state = reactive({
    currentStage: null,
    isListening: false,
    isHelpStage: false,
    isPopupOpened: true
  })

  const toggleListening = (value) => {
    state.isListening = value
  }

  const togglePopupState = (value) => {
    state.isPopupOpened = value
  }

  const toggleHelpStage = (value) => {
    state.isHelpStage = value
  }

  const updateCurrentStage = (value) => {
    state.currentStage = value
  }

  const voiceState = {
    state,
    toggleListening,
    togglePopupState,
    toggleHelpStage,
    updateCurrentStage
  }

  return voiceState
}

export function provideVoiceState(voiceState) {
  provide(VOICE_STATE_KEY, voiceState)
}

export function useVoiceState() {
  const voiceState = inject(VOICE_STATE_KEY)
  if (!voiceState) {
    throw new Error('[HandsfreeCooking] useVoiceState() called without a provider. Ensure provideVoiceState() is called in a parent component.')
  }
  return voiceState
}
