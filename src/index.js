import { HandsfreeCookingElement } from './HandsfreeCooking.js'

if (!customElements.get('handsfree-cooking')) {
  customElements.define('handsfree-cooking', HandsfreeCookingElement)
}

export { HandsfreeCookingElement }
