<template>
  <PopupHeadline
    :title="translations.title"
    @toggle-popup="togglePopup"
  />
  <div
    v-show="voiceState.state.isPopupOpened"
    class="hf-content-area"
  >
    <div
      class="hf-content"
      v-html="translations.content"
    />
    <div
      ref="handsFreeVotes"
      class="hf-vote"
    >
      <button
        v-if="!voted"
        ref="voteUp"
        class="hf-button"
        @click="votedUp"
      >
        <HfIcon
          icon="thumbs-up"
          :size="16"
        />
        <span>{{ translations.voteUp }}</span>
      </button>
      <button
        v-if="!voted"
        ref="voteDown"
        class="hf-button"
        @click="votedDown"
      >
        <HfIcon
          icon="thumbs-down"
          :size="16"
        />
        <span>{{ translations.voteDown }}</span>
      </button>
      <div
        v-show="voted"
        class="hf-success-message"
      >
        <HfIcon
          icon="checkmark--outline"
          :size="16"
        />
        {{ translations.successMessage }}
      </div>
    </div>
    <button
      class="hf-button hf-button--solid"
      @click="closeHandsFreeFlow"
    >
      {{ translations.buttonText }}
    </button>
  </div>
</template>

<script>
import {
  ref, onMounted, onBeforeUnmount, nextTick, inject
} from 'vue'
import { useVoiceState } from '@/composables/useVoiceState'
import PopupHeadline from '@/components/PopupHeadline.vue'
import HfIcon from '@/components/HfIcon.vue'

export default {
  components: {
    HfIcon,
    PopupHeadline
  },
  props: {
    translations: {
      type: Object,
      required: true
    }
  },
  emits: ['closeHandsFreeFlow', 'togglePopup'],
  setup(_, { emit }) {
    const voiceState = useVoiceState()
    const emitEvent = inject('emitEvent')

    const handsFreeVotes = ref(null)
    const voteUp = ref(null)
    const voteDown = ref(null)

    const closeHandsFreeFlow = () => {
      emit('closeHandsFreeFlow')
      emitEvent('handsfree-feedback', { vote: 'close' })
    }

    const togglePopup = () => {
      emit('togglePopup')
    }

    const voted = ref(false)

    const votedUp = () => {
      voted.value = true
      emitEvent('handsfree-feedback', { vote: 'up' })
    }

    const votedDown = () => {
      voted.value = true
      emitEvent('handsfree-feedback', { vote: 'down' })
    }

    const checkVoteLayout = () => {
      nextTick(() => {
        const container = handsFreeVotes.value
        const up = voteUp.value
        const down = voteDown.value

        if (!container || !up || !down) {
          return
        }

        const totalWidth = up.offsetWidth + down.offsetWidth
        const containerWidth = container.offsetWidth

        if (totalWidth > containerWidth) {
          container.classList.add('hf-vote--stack')
        } else {
          container.classList.remove('hf-vote--stack')
        }
      })
    }

    onMounted(() => {
      checkVoteLayout()
      window.addEventListener('resize', checkVoteLayout)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkVoteLayout)
    })

    return {
      closeHandsFreeFlow,
      votedUp,
      votedDown,
      togglePopup,
      voted,
      voiceState,
      handsFreeVotes,
      voteUp,
      voteDown
    }
  }
}
</script>
