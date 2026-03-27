import { reactive, provide, inject } from 'vue'

const VOICE_STATE_KEY = Symbol('voiceState')

export function createVoiceState() {
  const state = reactive({
    stage: null,
    subState: null,
    isListening: false,
    isPopupOpened: true
  })

  const setStage = (stage, subState = null) => {
    state.stage = stage
    state.subState = subState
  }

  const toggleListening = (value) => {
    state.isListening = value
  }

  const togglePopupState = (value) => {
    state.isPopupOpened = value
  }

  return {
    state,
    setStage,
    toggleListening,
    togglePopupState
  }
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
