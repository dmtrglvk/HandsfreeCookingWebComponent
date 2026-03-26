import hark from 'hark'

class SpeakRecognition {
  constructor(settings) {
    this.settings = {
      onSpeaking: () => {},
      onStopSpeaking: () => {},
      onVolumeChange: () => {},
      ...settings
    }
    this.healthCheckInterval = null
  }

  async start() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      })
      this.audioStream = stream
      this.trackSpeaking(stream)
      this.startHealthCheck()
    } catch (err) {
      console.error(err)
    }
  }

  trackSpeaking(stream) {
    const { settings } = this
    this.audioStreamSpeechEvents = hark(stream, {
      interval: 1000 / 8
    })
    this.audioStreamSpeechEvents.on('speaking', settings.onSpeaking)
    this.audioStreamSpeechEvents.on('stopped_speaking', settings.onStopSpeaking)
  }

  startHealthCheck() {
    if (this.healthCheckInterval) return

    this.healthCheckInterval = setInterval(async () => {
      if (this.audioStream && !this.audioStream.active) {
        console.warn('[HandsfreeCooking] Audio stream inactive — attempting to recover...')
        this.stop()
        await this.start()
      }
    }, 5000)
  }

  stop() {
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval)
      this.healthCheckInterval = null
    }

    if (this.audioStream) {
      this.audioStream.getTracks().forEach((track) => track.stop())
    }

    if (this.audioStreamSpeechEvents) {
      this.audioStreamSpeechEvents.stop()
    }
  }
}

export default SpeakRecognition
