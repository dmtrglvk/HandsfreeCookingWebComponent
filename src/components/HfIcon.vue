<template>
  <span
    class="hf-icon"
    :class="cssClass"
    v-html="svgContent"
  />
</template>

<script>
import { computed } from 'vue'
import { icons } from '@/icons/index.js'

export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: null
    }
  },
  setup(props) {
    const svgContent = computed(() => icons[props.icon] || '')
    const cssClass = computed(() => props.size ? `hf-icon-${props.size}` : '')

    return {
      svgContent,
      cssClass
    }
  }
}
</script>
