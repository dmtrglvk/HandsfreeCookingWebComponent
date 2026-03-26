import { defineCustomElement } from 'vue'
import HandsfreeCooking from './HandsfreeCooking.ce.vue'

const HandsfreeCookingElement = defineCustomElement(HandsfreeCooking, {
  shadowRoot: true
})

if (!customElements.get('handsfree-cooking')) {
  customElements.define('handsfree-cooking', HandsfreeCookingElement)
}

export { HandsfreeCookingElement }
