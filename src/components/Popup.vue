<template>
  <PopupHeadline
    :class="additionalClassname"
    :title="translations.title"
    :is-loading="isLoading"
    :is-close-state="isCloseState"
    @toggle-popup="togglePopup"
  />
  <div
    v-show="translations.content && translations.content !== '' && voiceState.state.isPopupOpened"
    class="hf-content-area"
  >
    <div
      class="hf-content"
      v-html="translations.content"
    />
    <button
      v-if="translations.buttonText"
      class="hf-button"
      @click="buttonAction"
    >
      {{ translations.buttonText }}
    </button>
  </div>
</template>

<script>
import { useVoiceState } from '@/composables/useVoiceState'
import PopupHeadline from '@/components/PopupHeadline.vue'

export default {
  components: {
    PopupHeadline
  },
  props: {
    translations: {
      type: Object,
      required: true
    },
    additionalClassname: {
      type: String,
      default: ''
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
  emits: ['togglePopup', 'buttonAction'],
  setup(_, { emit }) {
    const voiceState = useVoiceState()

    const togglePopup = () => {
      emit('togglePopup')
    }
    const buttonAction = () => {
      emit('buttonAction')
    }

    return {
      togglePopup,
      buttonAction,
      voiceState
    }
  }
}
</script>
