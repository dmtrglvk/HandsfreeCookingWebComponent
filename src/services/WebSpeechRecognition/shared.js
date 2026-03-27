export function isAndroid() {
  return /Android/i.test(navigator.userAgent)
}

export const DEFAULT_CONFIG = {
  lang: 'en-US',
  interimResults: true,
  maxAlternatives: 10
}

export const DEFAULT_STATE = {
  error: null,
  status: 'stopped',
  transcriptions: [],
  finalTranscriptions: false
}
