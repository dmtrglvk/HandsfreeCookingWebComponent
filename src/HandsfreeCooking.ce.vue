<template>
  <div class="hf-root">
    <div class="hf-trigger">
      <div class="hf-intro-row">
        <span class="hf-intro-label">
          {{ mergedTranslations.intro }}
        </span>
        <span
          ref="tooltip"
          class="hf-tooltip-wrapper"
        >
          <HfIcon
            icon="help"
            :size="16"
            @click="toggleTooltip"
          />
          <transition name="hf-fade">
            <span
              v-if="isTooltipVisible"
              class="hf-tooltip-content"
            >
              <strong class="hf-tooltip-title">
                {{ mergedTranslations.tooltip.title }}
                <span @click="isTooltipVisible = false">
                  <HfIcon
                    icon="close"
                    :size="24"
                  />
                </span>
              </strong>
              <span class="hf-tooltip-text">{{ mergedTranslations.tooltip.text }}</span>
            </span>
          </transition>
        </span>
      </div>
      <button
        v-if="currentStage !== 'listening' && !isListeningStage"
        class="hf-button hf-button--handsfree"
        @click="startHandsFreeFlow"
      >
        <HfIcon
          icon="mic"
          :size="24"
        />
        {{ mergedTranslations.letsCook }}
      </button>
      <button
        v-if="isListeningStage"
        class="hf-button hf-button--handsfree"
        @click="finishHandsFreeFlow"
      >
        <HfIcon
          icon="mic"
          :size="24"
        />
        {{ mergedTranslations.stopCooking }}
      </button>
    </div>

    <div
      class="hf-popup"
      :class="{
        'hf-popup--opened': isPopupOpened,
        'hf-popup--hidden': currentStage === null
      }"
    >
      <template v-if="currentStage && currentStage.includes('introduction')">
        <Introduction
          :translations="mergedTranslations.introduction"
          :is-loading="isLoading"
          :is-close-state="true"
          @toggle-popup="closeHandsFreeFlow"
          @begin-listening="beginListening"
        />
      </template>
      <template v-if="currentStage === 'not-allowed'">
        <Popup
          :translations="mergedTranslations.notAllowed"
          :is-loading="isLoading"
          :is-close-state="true"
          @toggle-popup="closeHandsFreeFlow"
          @button-action="requestMicrophoneAccess"
        />
      </template>
      <template v-if="currentStage === 'listening'">
        <Popup
          :translations="mergedTranslations.listening"
          :is-loading="isLoading"
          @toggle-popup="openHelp"
        />
      </template>
      <template v-if="isHelpStage">
        <Popup
          :translations="mergedTranslations.help"
          :is-loading="isLoading"
          @toggle-popup="continueListening"
          @button-action="finishHandsFreeFlow"
        />
      </template>
      <template v-if="isNotRecognizedStage">
        <Popup
          additional-classname="hf-not-recognized"
          :translations="mergedTranslations.notRecognized"
          :is-loading="isLoading"
          @toggle-popup="openHelp"
        />
      </template>
      <template v-if="isNotRecognizedStageError">
        <Popup
          additional-classname="hf-not-recognized hf-error-state"
          :translations="mergedTranslations.notRecognizedError"
          :is-loading="isLoading"
          @toggle-popup="openHelp"
        />
      </template>
      <template v-if="currentStage === 'not-supported'">
        <Popup
          additional-classname="hf-hide-chevron"
          :translations="mergedTranslations.notSupported"
          :is-loading="isLoading"
          @button-action="closeHandsFreeFlow"
        />
      </template>
      <template v-if="isAlmostDone">
        <Popup
          :translations="mergedTranslations.almostDone"
          :is-loading="isLoading"
          @toggle-popup="togglePopup"
        />
      </template>
      <template v-if="currentStage === 'finish'">
        <Finish
          :translations="mergedTranslations.finish"
          @close-hands-free-flow="closeHandsFreeFlow"
          @toggle-popup="togglePopup"
        />
      </template>
      <button
        ref="fakeButton"
        class="hf-hidden-button"
        @click="runCommand"
      >
        Run Command
      </button>
    </div>
  </div>
</template>

<script>
import {
  ref, watch, onMounted, onUnmounted, computed, provide, getCurrentInstance
} from 'vue'
import { createVoiceState, provideVoiceState } from '@/composables/useVoiceState'
import useCommands from '@/composables/useCommands'
import WebSpeechRecognizer from '@/services/WebSpeechRecognition/index'
import HfIcon from '@/components/HfIcon.vue'
import Popup from '@/components/Popup.vue'
import Introduction from '@/components/Introduction.vue'
import Finish from '@/components/Finish.vue'

const DEFAULT_TRANSLATIONS = {
  intro: 'Handsfree cooking',
  letsCook: "Let's cook",
  stopCooking: 'Stop cooking',
  tooltip: {
    title: 'Handsfree cooking',
    text: 'Handsfree cooking is our voice activated assistant that helps you through steps of the recipe. Simply say e.g. "Go to next step" \u2013 this way you can focus on cooking, not scrolling.'
  },
  introduction: {
    title: 'Introduction',
    content: '<p>In order for this feature to work we need access to your microphone.</p>',
    buttonText: 'Allow microphone access',
    steps: [
      '<p>Navigate between steps using commands such as "Go to next step" or "Go to ingredients".</p><p>We\'d recommend reducing background noise for the best possible experience.</p>',
      '<p>We\'d recommend preparing all your ingredients beforehand.</p><p>Whenever you\'re ready say "Let\'s cook" or simply press the right arrow button below.</p>'
    ]
  },
  notAllowed: {
    title: 'Something went wrong',
    content: '<p>In order to use handsfree cooking, we need access to your microphone.</p>',
    buttonText: 'Click here to allow access'
  },
  listening: {
    title: 'Ready for instructions'
  },
  help: {
    title: 'List of commands',
    content: '<p>Are you stuck? One of these commands might help you move on.</p><span>Commands</span><ul><li>Next step</li><li>Previous step</li><li>Scroll up</li><li>Scroll down</li><li>Go to ingredients</li><li>Go to method</li><li>Help</li></ul>',
    buttonText: 'Stop cooking'
  },
  finish: {
    title: "You\u2019re done!",
    content: '<p>Enjoy your meal!</p><p>How was your experience using handsfree cooking?</p>',
    buttonText: 'Close handsfree cooking',
    voteUp: 'Very helpful',
    voteDown: 'Needs tweaking',
    successMessage: 'Your feedback is appreciated!'
  },
  notSupported: {
    title: 'Browser not supported',
    content: '<span>This feature is unfortunately not supported in Firefox. Use any of the following browsers to get started with handsfree cooking:</span><ul><li>Google Chrome</li><li>Safari</li><li>Microsoft Edge</li></ul>',
    buttonText: 'Close handsfree cooking'
  },
  notRecognized: {
    title: 'Command not recognized'
  },
  notRecognizedError: {
    title: 'Say "Help" to see commands'
  },
  almostDone: {
    title: 'Almost there',
    content: '<p>You\'ve made it to the last bit!</p><p>Continue by saying "I\'m done" so we can make sure to send you off right.</p>'
  }
}

const DEFAULT_COMMANDS = {
  nextStep: ['next step', 'go forward', 'next'],
  previousStep: ['previous step', 'go back', 'previous'],
  scrollUp: ['scroll up'],
  scrollDown: ['scroll down'],
  goToIngredients: ['go to ingredients', 'ingredients'],
  goToInstructions: ['go to instructions', 'go to method', 'instructions'],
  help: ['help', 'commands'],
  letsCook: ["let's cook", 'lets cook', 'start cooking'],
  imDone: ["i'm done", 'im done', 'done', 'finish'],
  exit: ['exit', 'close']
}

function deepMerge(target, source) {
  const result = { ...target }
  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key]) &&
      target[key] &&
      typeof target[key] === 'object' &&
      !Array.isArray(target[key])
    ) {
      result[key] = deepMerge(target[key], source[key])
    } else {
      result[key] = source[key]
    }
  }
  return result
}

export default {
  components: {
    Finish,
    Popup,
    Introduction,
    HfIcon
  },
  props: {
    lang: {
      type: String,
      default: ''
    },
    stepsSelector: {
      type: String,
      default: '.recipe-step'
    },
    ingredientsSelector: {
      type: String,
      default: '#ingredients'
    },
    instructionsSelector: {
      type: String,
      default: '#instructions'
    },
    translations: {
      type: String,
      default: ''
    },
    commands: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const voiceState = createVoiceState()
    provideVoiceState(voiceState)

    const {
      state,
      toggleHelpStage,
      toggleListening,
      togglePopupState,
      updateCurrentStage
    } = voiceState

    const instance = getCurrentInstance()

    const emitEvent = (name, detail = {}) => {
      const el = instance?.proxy?.$el?.parentNode?.host || instance?.proxy?.$el
      if (el && el.dispatchEvent) {
        el.dispatchEvent(new CustomEvent(name, {
          detail,
          bubbles: true,
          composed: true
        }))
      }
    }

    provide('emitEvent', emitEvent)

    const mergedTranslations = computed(() => {
      let userTranslations = {}
      if (props.translations) {
        try {
          userTranslations = JSON.parse(props.translations)
        } catch (e) {
          console.warn('[HandsfreeCooking] Invalid translations JSON:', e)
        }
      }
      return deepMerge(DEFAULT_TRANSLATIONS, userTranslations)
    })

    const mergedCommands = computed(() => {
      let userCommands = {}
      if (props.commands) {
        try {
          userCommands = JSON.parse(props.commands)
        } catch (e) {
          console.warn('[HandsfreeCooking] Invalid commands JSON:', e)
        }
      }
      return { ...DEFAULT_COMMANDS, ...userCommands }
    })

    const selectors = computed(() => ({
      steps: props.stepsSelector,
      ingredients: props.ingredientsSelector,
      instructions: props.instructionsSelector
    }))

    const selectedLanguage = ref(
      props.lang || document.documentElement.lang || 'en'
    )

    const { commands: registeredCommands, destroy: destroyCommands } = useCommands(
      mergedCommands.value,
      selectors.value,
      voiceState,
      emitEvent
    )
    const commandsRef = ref(registeredCommands)

    const speechRecognizer = ref(null)
    const isTooltipVisible = ref(false)
    const tooltip = ref(null)
    const fakeButton = ref(null)
    const lastCommand = ref(null)
    const counter = ref(0)
    const isLoading = ref(false)
    const isError = ref(false)
    const isRecognizing = ref(false)
    const webSpeechFeatureStatus = ref(null)

    const isPopupOpened = computed(() => state.isPopupOpened)
    const isHelpStage = computed(() => state.isHelpStage)
    const currentStage = computed(() => state.currentStage)

    const isListeningStage = computed(() => currentStage.value && currentStage.value.includes('listening'))
    const isNotRecognizedStage = computed(() => currentStage.value && currentStage.value.includes('not-recognized'))
    const isNotRecognizedStageError = computed(() => currentStage.value && currentStage.value.includes('recognized-error'))
    const isAlmostDone = computed(() => currentStage.value && currentStage.value.includes('almost-done'))

    let hasTrackedInitialStart = false
    let flowFinished = false
    let restarted = false
    let restartInterval = null

    function restartRecognition() {
      if (!speechRecognizer.value || flowFinished) return

      if (isRecognizing.value) {
        speechRecognizer.value.stop()
      }

      setTimeout(() => {
        if (!isRecognizing.value) {
          try {
            speechRecognizer.value.start()
          } catch (e) {
            setTimeout(() => {
              try {
                if (!isRecognizing.value) {
                  speechRecognizer.value.start()
                }
              } catch (e2) {
                console.error('[HandsfreeCooking] Restart failed:', e2)
              }
            }, 1000)
          }
        }
      }, 500)
    }

    const toggleTooltip = () => {
      isTooltipVisible.value = !isTooltipVisible.value
    }

    let outsideClickRaf = null
    const handleClickOutside = (event) => {
      if (tooltip.value && !event.composedPath().includes(tooltip.value)) {
        isTooltipVisible.value = false
      }
    }

    watch(isTooltipVisible, (visible) => {
      if (outsideClickRaf) {
        cancelAnimationFrame(outsideClickRaf)
        outsideClickRaf = null
      }
      document.removeEventListener('click', handleClickOutside, true)
      if (visible) {
        outsideClickRaf = requestAnimationFrame(() => {
          document.addEventListener('click', handleClickOutside, true)
        })
      }
    })

    const handleCommand = (recognizedSpeech) => {
      let foundCommand = null
      const speech = recognizedSpeech
        .toLowerCase()
        .replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, '')
        .replace(/^[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+/g, '')
        .replace(/\s+/g, ' ')
        .replace(/[.,!?;:。，！？；：．]+$/g, '')
        .trim()
        .normalize('NFD')
        .replace(/[\u064B-\u065F\u0670]/g, '')
        .normalize('NFC')
        .trim()

      const potentialMatches = []

      Object.keys(commandsRef.value).forEach((alias) => {
        const normalizedAlias = alias
          .toLowerCase()
          .replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, '')
          .replace(/^[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+/g, '')
          .replace(/\s+/g, ' ')
          .trim()
          .normalize('NFD')
          .replace(/[\u064B-\u065F\u0670]/g, '')
          .normalize('NFC')
          .trim()

        if (speech === normalizedAlias) {
          potentialMatches.push({ alias, normalizedAlias, score: 3, type: 'exact' })
        } else if (speech.startsWith(normalizedAlias)) {
          potentialMatches.push({ alias, normalizedAlias, score: 2, type: 'starts-with' })
        } else if (speech.endsWith(normalizedAlias)) {
          potentialMatches.push({ alias, normalizedAlias, score: 2, type: 'ends-with' })
        } else {
          const aliasRegex = new RegExp(`(^|\\s)${normalizedAlias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(\\s|$)`, 'i')
          if (aliasRegex.test(speech)) {
            potentialMatches.push({ alias, normalizedAlias, score: 1, type: 'word-boundary' })
          }
        }
      })

      potentialMatches.sort((a, b) => {
        if (a.score !== b.score) return b.score - a.score
        return b.normalizedAlias.length - a.normalizedAlias.length
      })

      if (potentialMatches.length > 0) {
        foundCommand = potentialMatches[0].alias
      }

      if (foundCommand) {
        if (!isAlmostDone.value) {
          toggleHelpStage(false)
          togglePopupState(false)
          updateCurrentStage('listening')
        }
        if (isAlmostDone.value && mergedCommands.value.imDone.includes(foundCommand)) {
          updateCurrentStage('finish')
          finishListening()
          emitEvent('handsfree-finished', { reason: 'completed recipe flow' })
        }
        lastCommand.value = foundCommand
        counter.value = 0

        requestAnimationFrame(() => {
          if (fakeButton.value) {
            fakeButton.value.click()
          } else if (commandsRef.value[foundCommand]) {
            commandsRef.value[foundCommand]()
            lastCommand.value = null
          }
        })
      } else {
        counter.value += 1
        if (!currentStage.value.includes('help')) {
          updateCurrentStage('listening not-recognized')
          toggleHelpStage(false)
          togglePopupState(false)
        }
        if (counter.value > 3) {
          updateCurrentStage('listening recognized-error')
        }
      }
    }

    const handleIntroduction = (command) => {
      if (mergedCommands.value.letsCook.includes(command) && commandsRef.value[command]) {
        lastCommand.value = command
        setTimeout(() => {
          if (fakeButton.value) {
            fakeButton.value.click()
          }
        }, 100)
      }
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    const startHandsFreeFlow = () => {
      flowFinished = false
      updateCurrentStage('introduction')
      emitEvent('handsfree-activated')

      if (!SpeechRecognition) {
        emitEvent('handsfree-error', { error: 'browser-not-supported' })
        updateCurrentStage('not-supported')
      } else {
        let hasStarted = false

        speechRecognizer.value = WebSpeechRecognizer.init({
          lang: selectedLanguage.value,
          continuesRecognition: true,
          onUserSpeech: (rec) => {
            isRecognizing.value = ['starting', 'recording'].includes(rec.status)
            if (['stopped', 'aborted', 'error'].includes(rec.status)) {
              isRecognizing.value = false
            }
            webSpeechFeatureStatus.value = rec.status

            if (!hasStarted && rec.status === 'starting') {
              hasStarted = true
              return
            }

            if (rec.status === 'error' && (rec.error === 'not-allowed' || rec.error === 'service-not-allowed')) {
              isError.value = true
              updateCurrentStage('not-allowed')
              toggleListening(false)
              speechRecognizer.value.stop()
              emitEvent('handsfree-error', { error: 'microphone-not-allowed' })
              return
            }

            if (rec.status === 'recording') {
              toggleListening(true)
              if (!hasTrackedInitialStart) {
                emitEvent('handsfree-state-change', { stage: 'microphone-allowed', isListening: true })
                hasTrackedInitialStart = true
              }

              if (rec.transcriptions.length && !rec.finalTranscriptions) {
                isLoading.value = true
              }

              if (rec.finalTranscriptions) {
                isLoading.value = false
                const speech = rec.transcriptions[0].text.toLowerCase().trim()

                if (currentStage.value.includes('introduction')) {
                  handleIntroduction(speech)
                } else {
                  handleCommand(speech)
                }
              }
            }
          },
          onUserSpeak: () => {}
        })
      }
    }

    const finishListening = () => {
      if (speechRecognizer.value) {
        speechRecognizer.value.stop()
      }
      flowFinished = true
      toggleHelpStage(false)
      toggleListening(false)
      togglePopupState(true)
      isRecognizing.value = false
    }

    const finishHandsFreeFlow = () => {
      updateCurrentStage('finish')
      finishListening()
      emitEvent('handsfree-finished', { reason: 'stop-cooking-button' })
    }

    const openHelp = () => {
      togglePopupState(true)
      toggleHelpStage(true)
      updateCurrentStage('listening help')
    }

    const runCommand = () => {
      if (lastCommand.value && commandsRef.value[lastCommand.value]) {
        commandsRef.value[lastCommand.value]()
        lastCommand.value = null
      }
    }

    const beginListening = () => {
      if (!isError.value) {
        if (!isRecognizing.value) {
          try {
            speechRecognizer.value.start()
          } catch (e) {
            console.warn('[HandsfreeCooking] Cannot start recognizer:', e)
          }
        }
        updateCurrentStage('listening introduction')
        emitEvent('handsfree-state-change', { stage: 'listening', isListening: true })
      } else {
        updateCurrentStage('not-allowed')
      }
    }

    function requestMicrophoneAccess() {
      /* eslint-disable-next-line no-alert */
      alert('Microphone access is blocked. Please enable it in browser settings.')
      emitEvent('handsfree-error', { error: 'microphone-blocked' })
    }

    const togglePopup = () => {
      if (state.isPopupOpened) {
        togglePopupState(false)
      } else {
        togglePopupState(true)
      }
      emitEvent('handsfree-state-change', {
        stage: currentStage.value,
        isListening: state.isListening,
        isPopupOpened: state.isPopupOpened
      })
    }

    const continueListening = () => {
      togglePopupState(false)
      toggleHelpStage(false)
      updateCurrentStage('listening')
    }

    const closeHandsFreeFlow = () => {
      if (!state.isListening && speechRecognizer.value) {
        speechRecognizer.value.stop()
        updateCurrentStage(null)
      } else {
        togglePopup()
      }
    }

    onMounted(() => {
      restartInterval = setInterval(() => {
        if (
          webSpeechFeatureStatus.value === 'stopped' &&
          currentStage.value === 'listening' &&
          !flowFinished &&
          !restarted &&
          !isRecognizing.value
        ) {
          restartRecognition()
          restarted = true
        }

        if (webSpeechFeatureStatus.value === 'listening' && restarted) {
          restarted = false
        }
      }, 1000)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside, true)
      if (outsideClickRaf) cancelAnimationFrame(outsideClickRaf)
      if (restartInterval) {
        clearInterval(restartInterval)
      }
      try {
        if (speechRecognizer.value) {
          speechRecognizer.value.stop()
        }
      } catch (e) {
        console.warn('[HandsfreeCooking] Failed to stop on unmount:', e)
      }
      destroyCommands()
      isRecognizing.value = false
    })

    return {
      isPopupOpened,
      currentStage,
      isListeningStage,
      isHelpStage,
      isNotRecognizedStage,
      isNotRecognizedStageError,
      isAlmostDone,
      isTooltipVisible,
      mergedTranslations,
      mergedCommands,
      tooltip,
      fakeButton,
      isLoading,
      toggleTooltip,
      openHelp,
      startHandsFreeFlow,
      finishHandsFreeFlow,
      togglePopup,
      requestMicrophoneAccess,
      runCommand,
      beginListening,
      continueListening,
      closeHandsFreeFlow
    }
  }
}
</script>

<style>
:host {
  --hf-color-bg: #ffffff;
  --hf-color-text: #000000;
  --hf-color-primary: #000000;
  --hf-color-primary-hover: #000000;
  --hf-color-error: #cc0033;
  --hf-color-border: #d9d9d9;
  --hf-spacing-xxs: 4px;
  --hf-spacing-xs: 8px;
  --hf-spacing-s: 16px;
  --hf-spacing-sm: 24px;
  --hf-spacing-m: 32px;
  --hf-font-family: inherit;
  --hf-font-size-base: 16px;
  --hf-font-size-small: 14px;
  --hf-font-size-large: 18px;
  --hf-popup-width: 410px;
  --hf-popup-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.20);
  --hf-z-index: 10000;

  display: block;
  font-family: var(--hf-font-family);
  font-size: var(--hf-font-size-base);
  color: var(--hf-color-text);
  line-height: 1.5;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.hf-root {
  margin-bottom: var(--hf-spacing-m);
}

/* ---- Trigger area ---- */

.hf-intro-row {
  display: flex;
  align-items: center;
  margin-bottom: var(--hf-spacing-s);
}

.hf-intro-label {
  margin-right: var(--hf-spacing-xs);
  font-weight: 600;
  text-transform: uppercase;
  font-size: var(--hf-font-size-base);
}

/* ---- Buttons ---- */

.hf-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: var(--hf-spacing-s) var(--hf-spacing-sm);
  border: 1px solid var(--hf-color-primary);
  border-radius: 0;
  background-color: transparent;
  color: var(--hf-color-primary);
  font-family: var(--hf-font-family);
  font-size: var(--hf-font-size-base);
  font-weight: 400;
  line-height: 1;
  vertical-align: middle;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 200ms ease-out, color 200ms ease-out;
}

.hf-button .hf-icon {
  margin-inline-end: var(--hf-spacing-xs);
}

.hf-button:hover {
  background-color: var(--hf-color-primary);
  color: var(--hf-color-bg);
}

.hf-button:hover .hf-icon svg {
  fill: var(--hf-color-bg);
}

.hf-button:disabled {
  opacity: 0.4;
  cursor: default;
}

.hf-button--solid {
  background-color: var(--hf-color-primary);
  color: var(--hf-color-bg);
}

.hf-button--solid:hover {
  background-color: var(--hf-color-bg);
  color: var(--hf-color-primary);
}

.hf-button--handsfree {
  padding: var(--hf-spacing-s) var(--hf-spacing-sm);
}

.hf-button--handsfree .hf-icon {
  margin-inline-end: var(--hf-spacing-xxs);
}

/* ---- Icons ---- */

.hf-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  line-height: 0;
}

.hf-icon svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}

.hf-icon-16 svg {
  width: 16px;
  height: 16px;
}

.hf-icon-24 svg {
  width: 24px;
  height: 24px;
}

/* ---- Tooltip ---- */

.hf-tooltip-wrapper {
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: baseline;
}

.hf-tooltip-content {
  position: absolute;
  bottom: 30px;
  left: 8px;
  transform: translateX(-50%);
  width: 350px;
  padding: var(--hf-spacing-s);
  background: var(--hf-color-bg);
  box-shadow: var(--hf-popup-shadow);
  cursor: default;
  z-index: calc(var(--hf-z-index) + 1);
}

.hf-tooltip-content::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: var(--hf-color-bg) transparent transparent transparent;
}

.hf-tooltip-title {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: 600;
  font-size: var(--hf-font-size-large);
  margin-bottom: var(--hf-spacing-xs);
}

.hf-tooltip-title span {
  cursor: pointer;
}

.hf-tooltip-text {
  display: block;
  font-size: var(--hf-font-size-small);
  line-height: 1.5;
}

.hf-fade-enter-active,
.hf-fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.hf-fade-enter-from,
.hf-fade-leave-to {
  opacity: 0;
}

/* ---- Popup ---- */

.hf-popup {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: calc(100% - 40px);
  max-width: var(--hf-popup-width);
  background: var(--hf-color-bg);
  z-index: var(--hf-z-index);
  box-shadow: var(--hf-popup-shadow);
  padding: var(--hf-spacing-s);
  transition: bottom 0.3s ease;
}

.hf-popup--hidden {
  bottom: -100px;
  pointer-events: none;
  opacity: 0;
}

.hf-popup--opened {
  bottom: 20px;
}

/* ---- Headline ---- */

.hf-headline {
  position: relative;
  border: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: var(--hf-font-family);
  color: var(--hf-color-text);
  font-size: var(--hf-font-size-base);
}

.hf-headline__title {
  text-transform: uppercase;
  font-weight: 600;
  font-size: var(--hf-font-size-base);
  margin-left: var(--hf-spacing-xxs);
}

.hf-headline__opener {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.hf-headline__opener svg {
  transition: transform 0.2s;
}

.hf-popup--opened .hf-headline__opener svg {
  transform: rotate(0deg);
}

.hf-popup:not(.hf-popup--opened) .hf-headline__opener svg {
  transform: rotate(180deg);
}

/* ---- Spinner ---- */

.hf-spinner {
  display: inline-block;
  width: 22px;
  height: 22px;
}

.hf-spinner svg {
  width: 100%;
  height: 100%;
  overflow: visible;
  animation: hf-rotation 1455ms infinite linear;
}

.hf-spinner circle {
  stroke: currentColor;
  stroke-dasharray: 44px;
  stroke-dashoffset: 11px;
  transform-origin: center;
  transform: rotateY(180deg) rotate(90deg);
  animation: hf-spinner 3850ms infinite ease;
}

@keyframes hf-spinner {
  0% { stroke-dashoffset: 33px; transform: rotateY(0deg) rotate(0deg); }
  24.9999% { stroke-dashoffset: 11px; transform: rotateY(0deg) rotate(0deg); }
  25% { stroke-dashoffset: 11px; transform: rotateY(180deg) rotate(270deg); }
  49.9999% { stroke-dashoffset: 33px; transform: rotateY(180deg) rotate(270deg); }
  50% { stroke-dashoffset: 33px; transform: rotateY(0deg) rotate(180deg); }
  74.9999% { stroke-dashoffset: 11px; transform: rotateY(0deg) rotate(180deg); }
  75% { stroke-dashoffset: 11px; transform: rotateY(180deg) rotate(90deg); }
  100% { stroke-dashoffset: 33px; transform: rotateY(180deg) rotate(90deg); }
}

@keyframes hf-rotation {
  100% { transform: rotate(360deg); }
}

/* ---- Content areas ---- */

.hf-content-area {
  margin-top: var(--hf-spacing-s);
}

.hf-content p {
  margin: 0 0 var(--hf-spacing-s);
  font-size: var(--hf-font-size-base);
}

.hf-content p:last-of-type {
  margin: 0;
}

.hf-content ul {
  margin: 0;
  padding: var(--hf-spacing-xs) 0 var(--hf-spacing-xs) var(--hf-spacing-s);
  line-height: 1;
}

.hf-content ul li {
  margin: 0 0 var(--hf-spacing-xs);
}

.hf-content a {
  color: var(--hf-color-text);
}

/* ---- Introduction steps ---- */

.hf-introduction-steps .hf-step {
  margin-bottom: var(--hf-spacing-xs);
}

.hf-introduction-steps .hf-step p {
  margin: 0 0 var(--hf-spacing-xs);
}

.hf-introduction-buttons {
  display: flex;
  gap: 0;
}

.hf-introduction-buttons .hf-button {
  padding: var(--hf-spacing-s) calc(var(--hf-spacing-s) - var(--hf-spacing-xxs));
}

.hf-introduction-buttons .hf-button .hf-icon {
  margin-inline-end: 0;
}

.hf-introduction-buttons .hf-button:last-of-type {
  margin-left: -1px;
}

/* ---- Not recognized ---- */

.hf-not-recognized .hf-headline__opener {
  border: 1px solid var(--hf-color-error);
}

.hf-error-state {
  color: var(--hf-color-error);
}

/* ---- Hide chevron ---- */

.hf-hide-chevron .hf-headline__opener {
  pointer-events: none;
}

.hf-hide-chevron .hf-headline__opener .hf-icon {
  display: none;
}

/* ---- Vote / Finish ---- */

.hf-vote {
  display: flex;
  gap: 0;
  margin: var(--hf-spacing-xs) 0;
}

.hf-vote .hf-button {
  white-space: nowrap;
}

.hf-vote .hf-button:last-of-type {
  margin-left: -1px;
}

.hf-vote--stack {
  flex-direction: column;
}

.hf-vote--stack .hf-button {
  justify-content: center;
}

.hf-vote--stack .hf-button:last-of-type {
  margin-left: 0;
  margin-top: -1px;
}

.hf-success-message {
  display: flex;
  align-items: center;
  gap: var(--hf-spacing-xxs);
}

/* ---- Hidden button ---- */

.hf-hidden-button {
  position: absolute;
  left: -9999px;
  opacity: 0;
}

/* ---- Print ---- */

@media print {
  .hf-root,
  .hf-popup {
    display: none;
  }
}

/* ---- Responsive ---- */

@media (max-width: 767px) {
  .hf-tooltip-content {
    left: 30px;
    width: 290px;
  }

  .hf-tooltip-content::after {
    transform: translateX(calc(-50% - 22px));
  }
}
</style>
