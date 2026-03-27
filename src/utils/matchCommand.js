import { normalizeText } from './normalizeText'

export function findBestMatch(speech, commandAliases) {
  const normalizedSpeech = normalizeText(speech)
  const potentialMatches = []

  for (const alias of commandAliases) {
    const normalizedAlias = normalizeText(alias)

    if (normalizedSpeech === normalizedAlias) {
      potentialMatches.push({ alias, normalizedAlias, score: 3 })
    } else if (normalizedSpeech.startsWith(normalizedAlias)) {
      potentialMatches.push({ alias, normalizedAlias, score: 2 })
    } else if (normalizedSpeech.endsWith(normalizedAlias)) {
      potentialMatches.push({ alias, normalizedAlias, score: 2 })
    } else {
      const escaped = normalizedAlias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const aliasRegex = new RegExp(`(^|\\s)${escaped}(\\s|$)`, 'i')
      if (aliasRegex.test(normalizedSpeech)) {
        potentialMatches.push({ alias, normalizedAlias, score: 1 })
      }
    }
  }

  potentialMatches.sort((a, b) => {
    if (a.score !== b.score) return b.score - a.score
    return b.normalizedAlias.length - a.normalizedAlias.length
  })

  return potentialMatches.length > 0 ? potentialMatches[0].alias : null
}
