const STORAGE_KEY = 'maia-pataridze-favorites'
const EVENT_NAME = 'maia-favorites-updated'

export function getFavorites(): string[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export function toggleFavorite(id: string): boolean {
  const favs = getFavorites()
  const idx = favs.indexOf(id)
  if (idx > -1) {
    favs.splice(idx, 1)
  } else {
    favs.push(id)
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favs))
  // Notify any listening pages that favorites changed
  window.dispatchEvent(new CustomEvent(EVENT_NAME))
  return idx === -1 // true = added, false = removed
}

export function isFavorite(id: string): boolean {
  return getFavorites().includes(id)
}

export { EVENT_NAME }
