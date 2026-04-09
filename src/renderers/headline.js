import { renderIcon } from './icon.js'

const SPINNER_SVG = `<span class="hf-spinner">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7" stroke-width="2" />
  </svg>
</span>`

export function renderHeadline(title, isLoading, isCloseState) {
  const icon = isCloseState ? 'close' : 'chevron--down'
  const openerContent = isLoading ? SPINNER_SVG : renderIcon(icon, 24)
  const label = `${title} - ${isCloseState ? 'Close' : 'Toggle'}`

  return `<button class="hf-headline" aria-label="${escHtml(label)}" data-action="toggle-popup">
  ${renderIcon('mic', 24)}
  <span class="hf-headline__title">${escHtml(title)}</span>
  <span class="hf-headline__opener">${openerContent}</span>
</button>`
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
