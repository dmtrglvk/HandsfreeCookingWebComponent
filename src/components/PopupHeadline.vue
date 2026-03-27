<template>
  <button
    class="hf-headline"
    :aria-label="title + ' - ' + (isCloseState ? 'Close' : 'Toggle')"
    @click="togglePopup"
  >
    <HfIcon
      icon="mic"
      :size="24"
    />
    <span class="hf-headline__title">{{ title }}</span>
    <span class="hf-headline__opener">
      <span v-if="isLoading" class="hf-spinner">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="8"
            cy="8"
            r="7"
            stroke-width="2"
          />
        </svg>
      </span>
      <HfIcon
        v-else
        :icon="icon"
        :size="24"
      />
    </span>
  </button>
</template>

<script>
import { computed } from 'vue'
import HfIcon from '@/components/HfIcon.vue'

export default {
  components: {
    HfIcon
  },
  props: {
    title: {
      type: String,
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
  emits: ['togglePopup'],
  setup(props, { emit }) {
    const togglePopup = () => {
      emit('togglePopup')
    }

    const icon = computed(() => (props.isCloseState ? 'close' : 'chevron--down'))

    return {
      togglePopup,
      icon
    }
  }
}
</script>
