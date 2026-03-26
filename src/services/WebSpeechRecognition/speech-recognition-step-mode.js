import SpeakRecognition from './speak-recognition'

let speakRecognizer
let speechRecognizer
let speechRecognizerStarted = false
let onUserSpeech
let onUserSpeak
let waitingForResultTimeout

function isAndroid() {
  return /Android/i.test(navigator.userAgent)
}

const defaultConfig = {
  lang: 'en-US',
  interimResults: true,
  maxAlternatives: 10
}

const defaultState = {
  error: null,
  status: 'stopped',
  transcriptions: [],
  finalTranscriptions: false
}

const notifySpeechRecognizerState = (props = {}) => {
  onUserSpeech({
    ...defaultState,
    ...props
  })
}

function handleOnStart() {
  notifySpeechRecognizerState({
    status: 'recording'
  })
}

function stopSpeakRecognizer() {
  if (!isAndroid()) {
    onUserSpeak(0)
  }
  if (speakRecognizer) {
    speakRecognizer.stop()
  }
}

function startSpeakRecognizer() {
  speakRecognizer = new SpeakRecognition({
    onVolumeChange: (volume) => {
      if (!isAndroid()) {
        onUserSpeak(volume)
      }
    }
  })
  speakRecognizer.start()
  if (!isAndroid()) {
    onUserSpeak(0)
  }
}

function updateHandleResultTimeout(transcriptions, isFinal) {
  clearTimeout(waitingForResultTimeout)
  if (!isFinal) {
    waitingForResultTimeout = setTimeout(() => {
      notifySpeechRecognizerState({
        finalTranscriptions: true,
        transcriptions
      })
    }, 2000)
  }
}

function stopSpeechRecognizer() {
  if (!isAndroid()) {
    if (onUserSpeak) {
      stopSpeakRecognizer()
    }
  }
  speechRecognizerStarted = false
  clearTimeout(waitingForResultTimeout)
  notifySpeechRecognizerState()
}

function handleResult(result) {
  if (!result || !result.results) {
    return
  }

  const recognition = result.results[result.resultIndex]
  const transcriptions = Object.values(recognition).map((text) => ({
    confidence: text.confidence,
    text: text.transcript
  }))
  notifySpeechRecognizerState({
    finalTranscriptions: recognition.isFinal,
    status: 'recording',
    transcriptions
  })
  updateHandleResultTimeout(transcriptions, recognition.isFinal)
}

function handleOnEnd() {
  speechRecognizerStarted = false
  clearTimeout(waitingForResultTimeout)
  if (!isAndroid()) {
    if (onUserSpeak) {
      stopSpeakRecognizer()
    }
  }

  notifySpeechRecognizerState()
}

function handleError(event) {
  notifySpeechRecognizerState({
    error: event.error,
    status: 'error'
  })
  if (!isAndroid()) {
    if (onUserSpeak) {
      stopSpeakRecognizer()
    }
  }
}

function startSpeechRecognizer() {
  if (!speechRecognizerStarted) {
    notifySpeechRecognizerState({
      status: 'starting'
    })
    try {
      speechRecognizer.start()
      speechRecognizerStarted = true
    } catch (err) {
      console.error(err)
    }
  }
}

function initSpeechRecognition({ lang, interimResults, maxAlternatives }) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  speechRecognizer = new SpeechRecognition()
  speechRecognizer.continuous = false
  speechRecognizer.lang = lang
  speechRecognizer.interimResults = interimResults
  speechRecognizer.maxAlternatives = maxAlternatives

  speechRecognizer.onstart = handleOnStart
  speechRecognizer.onresult = handleResult
  speechRecognizer.onerror = handleError
  speechRecognizer.onend = handleOnEnd
}

export function init(config) {
  const updatedConfig = {
    ...defaultConfig,
    ...config
  }
  initSpeechRecognition(updatedConfig)
  onUserSpeech = config.onUserSpeech
  if (!isAndroid()) {
    onUserSpeak = config.onUserSpeak
  }
}

export function start() {
  if (!isAndroid()) {
    if (onUserSpeak) {
      startSpeakRecognizer()
    }
  }

  if (onUserSpeech) {
    startSpeechRecognizer()
  }
}

export function stop() {
  if (!isAndroid()) {
    if (onUserSpeak) {
      stopSpeakRecognizer()
    }
  }

  if (onUserSpeech) {
    stopSpeechRecognizer()
  }
}
