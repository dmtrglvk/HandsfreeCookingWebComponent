import SpeakRecognition from './speak-recognition'

function isAndroid() {
  return /Android/i.test(navigator.userAgent)
}

const DEFAULT_CONFIG = {
  lang: 'en-US',
  interimResults: true,
  maxAlternatives: 10
}

const DEFAULT_STATE = {
  error: null,
  status: 'stopped',
  transcriptions: [],
  finalTranscriptions: false
}

export function createStepMode() {
  let speakRecognizer
  let speechRecognizer
  let speechRecognizerStarted = false
  let onUserSpeech
  let onUserSpeak
  let waitingForResultTimeout

  function notifyState(props = {}) {
    onUserSpeech({ ...DEFAULT_STATE, ...props })
  }

  function handleOnStart() {
    notifyState({ status: 'recording' })
  }

  function stopSpeakRecognizer() {
    if (!isAndroid()) onUserSpeak(0)
    if (speakRecognizer) speakRecognizer.stop()
  }

  function startSpeakRecognizer() {
    speakRecognizer = new SpeakRecognition({
      onVolumeChange: (volume) => {
        if (!isAndroid()) onUserSpeak(volume)
      }
    })
    speakRecognizer.start()
    if (!isAndroid()) onUserSpeak(0)
  }

  function updateHandleResultTimeout(transcriptions, isFinal) {
    clearTimeout(waitingForResultTimeout)
    if (!isFinal) {
      waitingForResultTimeout = setTimeout(() => {
        notifyState({
          finalTranscriptions: true,
          transcriptions
        })
      }, 2000)
    }
  }

  function stopSpeechRecognizer() {
    if (!isAndroid() && onUserSpeak) stopSpeakRecognizer()
    speechRecognizerStarted = false
    clearTimeout(waitingForResultTimeout)
    notifyState()
  }

  function handleResult(result) {
    if (!result || !result.results) return

    const recognition = result.results[result.resultIndex]
    const transcriptions = Object.values(recognition).map((text) => ({
      confidence: text.confidence,
      text: text.transcript
    }))
    notifyState({
      finalTranscriptions: recognition.isFinal,
      status: 'recording',
      transcriptions
    })
    updateHandleResultTimeout(transcriptions, recognition.isFinal)
  }

  function handleOnEnd() {
    speechRecognizerStarted = false
    clearTimeout(waitingForResultTimeout)
    if (!isAndroid() && onUserSpeak) stopSpeakRecognizer()
    notifyState()
  }

  function handleError(event) {
    notifyState({ error: event.error, status: 'error' })
    if (!isAndroid() && onUserSpeak) stopSpeakRecognizer()
  }

  function startSpeechRecognizer() {
    if (!speechRecognizerStarted) {
      notifyState({ status: 'starting' })
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

  function init(config) {
    const updatedConfig = { ...DEFAULT_CONFIG, ...config }
    initSpeechRecognition(updatedConfig)
    onUserSpeech = config.onUserSpeech
    if (!isAndroid()) onUserSpeak = config.onUserSpeak
  }

  function start() {
    if (!isAndroid() && onUserSpeak) startSpeakRecognizer()
    if (onUserSpeech) startSpeechRecognizer()
  }

  function stop() {
    if (!isAndroid() && onUserSpeak) stopSpeakRecognizer()
    if (onUserSpeech) stopSpeechRecognizer()
  }

  return { init, start, stop }
}
