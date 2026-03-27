import SpeakRecognition from './speak-recognition'
import { isAndroid, DEFAULT_CONFIG, DEFAULT_STATE } from './shared'

const ACTIVITY_TIMEOUT = 2 * 60 * 1000
const SPEECH_TIMEOUT = 3 * 1000

const MAX_RESTART_RETRIES = 5

export function createContinuesMode() {
  let speakRecognizer
  let speechRecognizer
  let waitingForResultTimeout
  let waitingForActivityTimeout
  let speaking = false
  let stopped = false
  let onUserSpeech
  let onUserSpeak
  let restartRetries = 0

  function notifyState(props = {}) {
    onUserSpeech({ ...DEFAULT_STATE, ...props })
  }

  function clearAllTimeouts() {
    clearTimeout(waitingForResultTimeout)
    clearTimeout(waitingForActivityTimeout)
  }

  function abortSpeechRecognizer() {
    clearAllTimeouts()
    speechRecognizer.abort()
    notifyState()
    onUserSpeak(0)
  }

  function stopSpeechRecognizer() {
    clearAllTimeouts()
    if (speechRecognizer) speechRecognizer.stop()
    notifyState()
    onUserSpeak(0)
  }

  function startSpeechRecognizer() {
    notifyState({ status: 'starting' })
    onUserSpeak(0)
    try {
      speechRecognizer.start()
      restartRetries = 0
    } catch (err) {
      console.error(err)
    }
  }

  function delayedStartSpeechRecognizer() {
    if (restartRetries >= MAX_RESTART_RETRIES) {
      console.warn('[HandsfreeCooking] Max restart retries reached')
      return
    }
    restartRetries += 1
    setTimeout(startSpeechRecognizer, 100)
  }

  function stopSpeakRecognizer() {
    if (speakRecognizer) speakRecognizer.stop()
    onUserSpeak(0)
  }

  function handleOnEnd() {
    clearAllTimeouts()
    notifyState()
    onUserSpeak(0)
    if (!stopped) delayedStartSpeechRecognizer()
  }

  function handleOnStart() {
    notifyState({ status: 'recording' })
    onUserSpeak(0)
  }

  function updateHandleResultTimeout(transcriptions, isFinal) {
    clearTimeout(waitingForResultTimeout)
    if (!isFinal) {
      waitingForResultTimeout = setTimeout(() => {
        notifyState({
          finalTranscriptions: true,
          status: 'recording',
          transcriptions
        })
        abortSpeechRecognizer()
      }, SPEECH_TIMEOUT)
    }
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

  function handleError(event) {
    notifyState({ error: event.error, status: 'error' })
    onUserSpeak(0)
  }

  function handleWaitingForActivityTimeout() {
    if (!speaking) abortSpeechRecognizer()
  }

  function startSpeakRecognizer() {
    speakRecognizer = new SpeakRecognition({
      onSpeaking: () => { speaking = true },
      onStopSpeaking: () => {
        speaking = false
        clearTimeout(waitingForActivityTimeout)
        waitingForActivityTimeout = setTimeout(handleWaitingForActivityTimeout, ACTIVITY_TIMEOUT)
      },
      onVolumeChange: (volume) => {
        onUserSpeak(volume)
      }
    })
    onUserSpeak(0)
    speakRecognizer.start()
  }

  function initSpeechRecognition({ lang, interimResults, maxAlternatives }) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    speechRecognizer = new SpeechRecognition()
    speechRecognizer.continuous = true
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
    onUserSpeech = config.onUserSpeech
    onUserSpeak = config.onUserSpeak || (() => {})
    initSpeechRecognition(updatedConfig)
  }

  function start() {
    stopped = false
    restartRetries = 0
    if (!isAndroid() && onUserSpeak) startSpeakRecognizer()
    if (onUserSpeech) startSpeechRecognizer()
  }

  function stop() {
    stopped = true
    clearAllTimeouts()
    if (!isAndroid() && onUserSpeak) stopSpeakRecognizer()
    if (onUserSpeech) stopSpeechRecognizer()
  }

  return { init, start, stop }
}
