// Each deploy replaces the hashed files under /static/, so a tab opened before a
// deploy can ask for a page file that no longer exists. Reloading fetches the new
// version. The timestamp guard stops a reload loop if the network is really down.
const KEY = 'hunexture-reloaded-at'
const MIN_GAP_MS = 30000

export const isChunkError = (error) =>
  !!error &&
  (error.name === 'ChunkLoadError' ||
    error.code === 'CSS_CHUNK_LOAD_FAILED' ||
    /Loading (CSS )?chunk [\w-]+ failed|dynamically imported module/i.test(error.message || ''))

export function reloadOnce() {
  try {
    const last = Number(window.sessionStorage.getItem(KEY)) || 0
    if (Date.now() - last < MIN_GAP_MS) return false
    window.sessionStorage.setItem(KEY, String(Date.now()))
  } catch (e) {
    return false // no storage means no loop guard, so leave it to the button
  }
  window.location.reload()
  return true
}
