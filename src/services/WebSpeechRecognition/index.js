import { createContinuesMode } from './speech-recognition-continues-mode'
import { createStepMode } from './speech-recognition-step-mode'

const currentLang = navigator.language || 'en-US'

function createRecognizer({
  continuesRecognition = true,
  lang = currentLang,
  onUserSpeech,
  onUserSpeak
}) {
  const instance = continuesRecognition ? createContinuesMode() : createStepMode()

  instance.init({ lang, onUserSpeech, onUserSpeak })

  return {
    start: instance.start,
    stop: instance.stop
  }
}

export default {
  init: createRecognizer
}
