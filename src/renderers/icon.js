import { icons } from '@/icons/index.js'

export function renderIcon(icon, size = null) {
  const svgContent = icons[icon] || ''
  const sizeClass = size ? ` hf-icon-${size}` : ''
  return `<span class="hf-icon${sizeClass}">${svgContent}</span>`
}
