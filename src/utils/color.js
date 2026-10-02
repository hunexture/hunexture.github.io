// Colour helpers for the single light (blueprint) theme.
// Per-item accent colours in the data files were picked for dark backgrounds;
// textTone() darkens one toward ink until it meets WCAG AA contrast on paper.

const INK = [11, 31, 58] // --ink #0B1F3A
const DARKEST_PAPER = [233, 239, 247] // --paper-sunk #E9EFF7 (worst case background)

const parseHex = (hex) => {
  if (typeof hex !== 'string' || !hex.startsWith('#')) return null
  let h = hex.slice(1)
  if (h.length === 3) h = h.split('').map(c => c + c).join('')
  if (h.length !== 6) return null
  const n = parseInt(h, 16)
  return Number.isNaN(n) ? null : [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

const luminance = ([r, g, b]) => {
  const f = v => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  }
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
}

const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

const toHex = rgb => '#' + rgb.map(v => Math.round(v).toString(16).padStart(2, '0')).join('')

const cache = new Map()

/** Darken `color` toward ink until it reaches `min` contrast on the darkest paper tone. */
export const textTone = (color, min = 4.5) => {
  const rgb = parseHex(color)
  if (!rgb) return color
  const key = `${color}|${min}`
  if (cache.has(key)) return cache.get(key)
  let result = toHex(INK)
  for (let t = 0; t <= 1.0001; t += 0.05) {
    const mixed = rgb.map((v, i) => v + (INK[i] - v) * t)
    if (contrast(mixed, DARKEST_PAPER) >= min) {
      result = toHex(mixed)
      break
    }
  }
  cache.set(key, result)
  return result
}
