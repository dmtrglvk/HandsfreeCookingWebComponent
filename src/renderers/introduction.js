import { renderHeadline } from './headline.js'
import { renderIcon } from './icon.js'

export function renderIntroduction({ translations, isLoading, isListening, isPopupOpened, currentStep, isCloseState }) {
  const headlineHtml = renderHeadline(translations.title, isLoading, isCloseState)

  if (!isPopupOpened) {
    return `<div>${headlineHtml}<div class="hf-content-area" style="display:none"></div></div>`
  }

  const stepsContent = translations.steps || []
  const stepHtml = stepsContent[currentStep] || ''

  const introContent = isListening
    ? `<div class="hf-introduction-steps">
  <div class="hf-step">${stepHtml}</div>
  <div class="hf-introduction-buttons">
    <button class="hf-button" aria-label="Previous step" ${currentStep < 1 ? 'disabled' : ''} data-action="prev-step">
      ${renderIcon('chevron--left', 24)}
    </button>
    <button class="hf-button" aria-label="Next step" data-action="next-step">
      ${renderIcon('chevron--right', 24)}
    </button>
  </div>
</div>`
    : `<div class="hf-content">${translations.content || ''}</div>
<button class="hf-button" data-action="begin-listening">${translations.buttonText || ''}</button>`

  return `<div>${headlineHtml}<div class="hf-content-area">${introContent}</div></div>`
}
