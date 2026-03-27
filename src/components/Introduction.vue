<template>
  <PopupHeadline
    :title="translations.title"
    :is-loading="isLoading"
    :is-close-state="isClose"
    @toggle-popup="togglePopup"
  />
  <div
    v-show="voiceState.state.isPopupOpened"
    class="hf-content-area"
  >
    <div
      v-if="!voiceState.state.isListening"
      class="hf-content"
      v-html="translations.content"
    />
    <div
      v-if="voiceState.state.isListening"
      class="hf-introduction-steps"
    >
      <div
        class="hf-step"
        v-html="translations.steps[currentStep]"
      />
      <div class="hf-introduction-buttons">
        <button
          class="hf-button"
          aria-label="Previous step"
          :disabled="currentStep < 1"
          @click="goToPrevStep"
        >
          <HfIcon
            icon="chevron--left"
            :size="24"
          />
        </button>
        <button
          class="hf-button"
          aria-label="Next step"
          @click="goToNextStep"
        >
          <HfIcon
            icon="chevron--right"
            :size="24"
          />
        </button>
      </div>
    </div>
    <button
      v-if="!voiceState.state.isListening"
      class="hf-button"
      @click="beginListening"
    >
      {{ translations.buttonText }}
    </button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useVoiceState } from '@/composables/useVoiceState'
import HfIcon from '@/components/HfIcon.vue'
import PopupHeadline from '@/components/PopupHeadline.vue'

export default {
  components: {
    PopupHeadline,
    HfIcon
  },
  props: {
    translations: {
      type: Object,
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isCloseState: {
      type: Boolean,
      default: false
    }
  },
  emits: ['togglePopup', 'beginListening'],
  setup(props, { emit }) {
    const voiceState = useVoiceState()
    const currentStep = ref(0)
    const isClose = computed(() => (props.isCloseState && !voiceState.state.isListening))

    const togglePopup = () => {
      emit('togglePopup')
    }
    const beginListening = () => {
      emit('beginListening')
    }

    const goToPrevStep = () => {
      if (currentStep.value > 0) {
        currentStep.value -= 1
      }
    }

    const goToNextStep = () => {
      if (currentStep.value < props.translations.steps.length - 1) {
        currentStep.value += 1
      } else {
        voiceState.setStage('listening')
        voiceState.togglePopupState(false)
      }
    }

    return {
      togglePopup,
      beginListening,
      goToPrevStep,
      goToNextStep,
      isClose,
      currentStep,
      voiceState
    }
  }
}
</script>
