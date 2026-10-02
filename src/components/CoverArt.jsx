import React, { useEffect, useRef, useState } from 'react'
import './CoverArt.css'

/* Cover illustrations for portfolio projects. One scene per category, coloured
   by the category palette, with details varied by a seed so each project looks
   different. Pure SVG: no image files to load or break. */

const PALETTE = {
  ai:        ['#2E1065', '#6D28D9', '#C4B5FD'],
  web:       ['#0B1F3A', '#1D4ED8', '#93C5FD'],
  mobile:    ['#134E4A', '#0F766E', '#5EEAD4'],
  cloud:     ['#0C4A6E', '#0284C7', '#7DD3FC'],
  marketing: ['#7C2D12', '#C2410C', '#FDBA74'],
}

const rand = (seed, i) => {
  const x = Math.sin(seed * 9301 + i * 49297) * 233280
  return x - Math.floor(x)
}

const Ai = ({ seed }) => {
  const layers = [3, 4, 4, 2]
  const xs = [90, 170, 250, 330]
  const ys = (n) => Array.from({ length: n }, (_, i) => 125 + (i - (n - 1) / 2) * 46)
  return (
    <g>
      {layers.slice(0, -1).map((n, l) =>
        ys(n).map((y1, a) => ys(layers[l + 1]).map((y2, b) => (
          <line key={`${l}${a}${b}`} x1={xs[l]} y1={y1} x2={xs[l + 1]} y2={y2}
            className={rand(seed, l * 20 + a * 4 + b) > 0.7 ? 'ca-line ca-line--hot' : 'ca-line'} />
        )))
      )}
      {layers.map((n, l) => ys(n).map((y, i) => (
        <circle key={`n${l}${i}`} cx={xs[l]} cy={y} r={l === 3 ? 10 : 7} className={l === 3 ? 'ca-fill' : 'ca-node'} />
      )))}
      <rect x="40" y="26" width="90" height="8" className="ca-soft" />
      <rect x="40" y="42" width="56" height="6" className="ca-soft" opacity=".5" />
    </g>
  )
}

const Web = ({ seed }) => {
  const bars = Array.from({ length: 8 }, (_, i) => 20 + rand(seed, i) * 70)
  return (
    <g>
      <rect x="40" y="30" width="320" height="190" rx="6" className="ca-panel" />
      <line x1="40" y1="52" x2="360" y2="52" className="ca-line" />
      {[56, 68, 80].map((x) => <circle key={x} cx={x} cy="41" r="3.5" className="ca-fill" />)}
      <rect x="56" y="66" width="86" height="40" className="ca-soft" />
      <rect x="152" y="66" width="86" height="40" className="ca-soft" />
      <rect x="248" y="66" width="96" height="40" className="ca-fill" opacity=".85" />
      {bars.map((h, i) => (
        <rect key={i} x={58 + i * 22} y={200 - h} width="14" height={h} className="ca-bar" style={{ animationDelay: `${i * 0.12}s` }} />
      ))}
      <path d={`M240 190 ${bars.slice(0, 5).map((h, i) => `L${252 + i * 24} ${190 - h * 0.7}`).join(' ')}`} className="ca-trace" />
    </g>
  )
}

const Mobile = ({ seed }) => (
  <g>
    <rect x="140" y="14" width="120" height="224" rx="16" className="ca-panel" />
    <rect x="188" y="22" width="24" height="4" rx="2" className="ca-soft" />
    <rect x="152" y="40" width="96" height="58" rx="6" className="ca-fill" opacity=".9" />
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect x="152" y={110 + i * 30} width="26" height="22" rx="4" className="ca-soft" />
        <rect x="186" y={113 + i * 30} width={40 + rand(seed, i) * 30} height="6" className="ca-soft" />
        <rect x="186" y={124 + i * 30} width="30" height="5" className="ca-soft" opacity=".5" />
      </g>
    ))}
    <circle cx="200" cy="222" r="5" className="ca-ping" />
    <rect x="48" y="70" width="64" height="10" className="ca-soft" opacity=".6" />
    <rect x="48" y="88" width="44" height="8" className="ca-soft" opacity=".4" />
    <rect x="290" y="150" width="64" height="10" className="ca-soft" opacity=".6" />
    <rect x="304" y="168" width="50" height="8" className="ca-soft" opacity=".4" />
  </g>
)

const Cloud = ({ seed }) => (
  <g>
    <path d="M150 88 a22 22 0 0 1 6 -43 a34 34 0 0 1 64 -6 a26 26 0 0 1 12 49 z" className="ca-panel" />
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect x={50 + i * 120} y="160" width="80" height="22" className="ca-panel" />
        <rect x={50 + i * 120} y="188" width="80" height="22" className="ca-panel" />
        <circle cx={60 + i * 120} cy="171" r="3" className="ca-fill" />
        <circle cx={60 + i * 120} cy="199" r="3" className={rand(seed, i) > 0.5 ? 'ca-fill' : 'ca-ping'} />
        <path d={`M${90 + i * 120} 160 V130 H${i === 1 ? 190 : i === 0 ? 170 : 210} V92`} className="ca-line" />
        <path d={`M${90 + i * 120} 160 V130 H${i === 1 ? 190 : i === 0 ? 170 : 210} V92`} className="ca-trace ca-trace--flow" style={{ animationDelay: `${i * 0.8}s` }} />
      </g>
    ))}
  </g>
)

const Marketing = ({ seed }) => (
  <g>
    <path d="M60 40 H220 L180 110 V160 L150 178 V110 Z" className="ca-panel" />
    {[0, 1, 2, 3].map((i) => (
      <circle key={i} cx={96 + i * 28} cy="30" r="4" className="ca-drop" style={{ animationDelay: `${i * 0.5}s` }} />
    ))}
    <line x1="250" y1="200" x2="360" y2="200" className="ca-line" />
    <line x1="250" y1="200" x2="250" y2="60" className="ca-line" />
    <path d={`M250 190 ${Array.from({ length: 5 }, (_, i) => `L${272 + i * 22} ${180 - i * 22 - rand(seed, i) * 14}`).join(' ')}`} className="ca-trace" />
    <circle cx="360" cy="76" r="6" className="ca-fill" />
    <rect x="60" y="205" width="90" height="8" className="ca-soft" />
    <rect x="60" y="221" width="56" height="6" className="ca-soft" opacity=".5" />
  </g>
)

const SCENES = { ai: Ai, web: Web, mobile: Mobile, cloud: Cloud, marketing: Marketing }

const CoverArt = ({ category = 'web', seed = 1, className = '' }) => {
  const [dark, mid, light] = PALETTE[category] || PALETTE.web
  const Scene = SCENES[category] || Web
  const id = `ca-bg-${category}-${seed}`
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  // Only run the looping animations while the cover is on screen; many covers
  // animating at once off-screen is wasted paint work and makes scrolling lag.
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setVisible(true); return undefined }
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '50px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <svg
      ref={ref}
      className={`ca ${visible ? '' : 'ca--idle'} ${className}`}
      viewBox="0 0 400 250"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{ '--ca-light': light, '--ca-mid': mid }}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={dark} />
          <stop offset="1" stopColor={mid} />
        </linearGradient>
        <pattern id={`${id}-g`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#fff" strokeOpacity=".07" />
        </pattern>
      </defs>
      <rect width="400" height="250" fill={`url(#${id})`} />
      <rect width="400" height="250" fill={`url(#${id}-g)`} />
      <Scene seed={seed} />
    </svg>
  )
}

export default CoverArt
