import { renderHeadline } from './headline.js'
import { renderIcon } from './icon.js'

export function renderFinish({ translations, isPopupOpened, voted, isStacked }) {
  const headlineHtml = renderHeadline(translations.title, false, false)

  if (!isPopupOpened) {
    return `<div>${headlineHtml}<div class="hf-content-area" style="display:none"></div></div>`
  }

  const voteStackClass = isStacked ? ' hf-vote--stack' : ''
  const voteHtml = voted
    ? `<div class="hf-success-message">
  ${renderIcon('checkmark--outline', 16)}
  ${translations.successMessage || ''}
</div>`
    : `<button class="hf-button" data-action="vote-up" data-vote-ref="up">
  ${renderIcon('thumbs-up', 16)}
  <span>${translations.voteUp || ''}</span>
</button>
<button class="hf-button" data-action="vote-down" data-vote-ref="down">
  ${renderIcon('thumbs-down', 16)}
  <span>${translations.voteDown || ''}</span>
</button>`

  return `<div>${headlineHtml}<div class="hf-content-area">
  <div class="hf-content">${translations.content || ''}</div>
  <div class="hf-vote${voteStackClass}" data-votes-container>${voteHtml}</div>
  <button class="hf-button hf-button--solid" data-action="close-flow">${translations.buttonText || ''}</button>
</div></div>`
}
