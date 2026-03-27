export function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, '')
    .replace(/^[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+/g, '')
    .replace(/\s+/g, ' ')
    .replace(/[.,!?;:。，！？；：．]+$/g, '')
    .trim()
    .normalize('NFD')
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .normalize('NFC')
    .trim()
}
