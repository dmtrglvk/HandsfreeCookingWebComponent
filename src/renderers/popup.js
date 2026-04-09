import { renderHeadline } from './headline.js'

export function renderPopup({ translations, isLoading, isCloseState, isPopupOpened, additionalClassname = '' }) {
  const headlineHtml = renderHeadline(translations.title, isLoading, isCloseState)

  const hasContent = translations.content && translations.content !== ''
  const contentAreaStyle = (!isPopupOpened || !hasContent) ? 'display:none' : ''
  const buttonHtml = translations.buttonText
    ? `<button class="hf-button" data-action="button-action">${translations.buttonText}</button>`
    : ''

  const contentAreaHtml = `<div class="hf-content-area" style="${contentAreaStyle}">
  <div class="hf-content">${translations.content || ''}</div>
  ${buttonHtml}
</div>`

  return `<div class="${additionalClassname}">${headlineHtml}${contentAreaHtml}</div>`
}
