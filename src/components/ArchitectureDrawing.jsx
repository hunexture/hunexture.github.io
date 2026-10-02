import React, { useEffect, useRef, useState } from 'react'
import './ArchitectureDrawing.css'

// A typical AI product drawn as a blueprint: who uses it, what runs in the
// client's cloud, and how it is watched. Two layouts share the same parts —
// landscape for wide columns, portrait for phones so labels stay legible.

// Every stroked shape gets pathLength=1 so the draw-in animation can use a
// single dash length regardless of the shape's real size.
const d = (delay) => ({ pathLength: 1, className: 'ad-stroke', style: { '--d': `${delay}s` } })
const t = (delay) => ({ className: 'ad-text', style: { '--d': `${delay}s` } })

const UsersPart = ({ x, y, delay }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect width="120" height="88" {...d(delay)} />
    <rect x="14" y="16" width="58" height="40" {...d(delay + 0.15)} />
    <line x1="14" y1="24" x2="72" y2="24" {...d(delay + 0.2)} />
    <line x1="22" y1="34" x2="56" y2="34" {...d(delay + 0.25)} className="ad-stroke ad-stroke--thin" />
    <line x1="22" y1="42" x2="48" y2="42" {...d(delay + 0.25)} className="ad-stroke ad-stroke--thin" />
    <rect x="82" y="14" width="26" height="46" rx="4" {...d(delay + 0.2)} />
    <line x1="91" y1="54" x2="99" y2="54" {...d(delay + 0.3)} />
    <text x="60" y="78" textAnchor="middle" {...t(delay + 0.3)}>Your users</text>
  </g>
)

const ApiPart = ({ x, y, delay }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect width="130" height="88" className="ad-stroke ad-fill-tint" pathLength="1" style={{ '--d': `${delay}s` }} />
    <text x="65" y="44" textAnchor="middle" className="ad-text ad-text--glyph" style={{ '--d': `${delay + 0.2}s` }}>{'{ }'}</text>
    <text x="65" y="72" textAnchor="middle" {...t(delay + 0.3)}>App and API</text>
  </g>
)

const ModelPart = ({ x, y, delay }) => {
  const layers = [[16, 32, 48], [22, 42], [16, 32, 48]]
  const xs = [36, 68, 100]
  const links = []
  layers.forEach((ys, li) => {
    if (li === layers.length - 1) return
    ys.forEach((y1) => layers[li + 1].forEach((y2) => links.push([xs[li], y1, xs[li + 1], y2])))
  })
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="136" height="80" {...d(delay)} />
      {links.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} {...d(delay + 0.2)} className="ad-stroke ad-stroke--thin" />
      ))}
      {layers.map((ys, li) => ys.map((cy) => (
        <circle key={`${li}-${cy}`} cx={xs[li]} cy={cy} r="4" className="ad-node" style={{ '--d': `${delay + 0.35}s` }} />
      )))}
      <text x="68" y="72" textAnchor="middle" {...t(delay + 0.4)}>AI model</text>
    </g>
  )
}

const DataPart = ({ x, y, delay }) => (
  <g transform={`translate(${x} ${y})`}>
    <ellipse cx="68" cy="12" rx="66" ry="11" {...d(delay)} />
    <path d="M2 12 V74 A66 11 0 0 0 134 74 V12" {...d(delay + 0.1)} />
    <path d="M2 40 A66 11 0 0 0 134 40" {...d(delay + 0.2)} className="ad-stroke ad-stroke--thin" />
    <text x="68" y="70" textAnchor="middle" {...t(delay + 0.35)}>Your data</text>
  </g>
)

const MonitorPart = ({ x, y, delay }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect width="130" height="60" {...d(delay)} />
    <text x="12" y="20" {...t(delay + 0.2)} className="ad-text ad-text--small">Monitoring</text>
    <polyline points="12,48 28,42 44,46 60,34 76,38 92,28 108,32 118,26" {...d(delay + 0.25)} className="ad-stroke ad-stroke--signal" />
  </g>
)

const Landscape = () => (
  <svg className="ad-svg ad-svg--landscape" viewBox="0 0 600 380" aria-hidden="true" focusable="false">
    <rect x="200" y="36" width="384" height="296" className="ad-boundary" />
    <text x="214" y="58" className="ad-text ad-text--note" style={{ '--d': '0.2s' }}>Your cloud account</text>

    <UsersPart x={24} y={130} delay={0} />
    <line x1="144" y1="174" x2="220" y2="174" markerEnd="url(#ad-arrow)" {...d(0.5)} className="ad-stroke ad-stroke--signal" />

    <ApiPart x={224} y={130} delay={0.6} />

    <path d="M354 160 H388 V118 H416" markerEnd="url(#ad-arrow)" {...d(1)} className="ad-stroke ad-stroke--signal" />
    <path d="M354 190 H388 V244 H416" markerEnd="url(#ad-arrow)" {...d(1.05)} className="ad-stroke ad-stroke--signal" />

    {/* guardrail gate on the model call, with a leader to its note */}
    <line x1="381" y1="110" x2="395" y2="110" {...d(1.3)} />
    <line x1="381" y1="126" x2="395" y2="126" {...d(1.3)} />
    <line x1="381" y1="110" x2="362" y2="96" {...d(1.4)} className="ad-stroke ad-stroke--thin" />
    <text x="214" y="94" className="ad-text ad-text--note" style={{ '--d': '1.5s' }}>Guardrails and evals</text>

    <ModelPart x={420} y={78} delay={1.2} />
    <DataPart x={420} y={200} delay={1.3} />

    <line x1="289" y1="218" x2="289" y2="248" {...d(1.5)} className="ad-stroke ad-stroke--dashed" />
    <MonitorPart x={224} y={250} delay={1.6} />

    {/* dimension line */}
    <line x1="24" y1="356" x2="584" y2="356" {...d(1.9)} className="ad-stroke ad-stroke--thin" />
    <line x1="24" y1="348" x2="24" y2="364" {...d(1.9)} className="ad-stroke ad-stroke--thin" />
    <line x1="584" y1="348" x2="584" y2="364" {...d(1.9)} className="ad-stroke ad-stroke--thin" />
    <rect x="166" y="346" width="268" height="20" className="ad-gap" />
    <text x="300" y="361" textAnchor="middle" className="ad-text ad-text--note" style={{ '--d': '2.1s' }}>Same architecture from pilot to production</text>

    <defs>
      <marker id="ad-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M1 1 L9 5 L1 9" className="ad-arrowhead" />
      </marker>
    </defs>
  </svg>
)

const Portrait = () => (
  <svg className="ad-svg ad-svg--portrait" viewBox="0 0 340 560" aria-hidden="true" focusable="false">
    <UsersPart x={110} y={16} delay={0} />
    <line x1="170" y1="104" x2="170" y2="168" markerEnd="url(#ad-arrow-p)" {...d(0.5)} className="ad-stroke ad-stroke--signal" />

    <rect x="12" y="132" width="316" height="372" className="ad-boundary" />
    <text x="24" y="152" className="ad-text ad-text--note" style={{ '--d': '0.2s' }}>Your cloud account</text>

    <ApiPart x={105} y={172} delay={0.6} />

    <path d="M170 260 V280 H88 V296" markerEnd="url(#ad-arrow-p)" {...d(1)} className="ad-stroke ad-stroke--signal" />
    <path d="M170 280 H252 V296" markerEnd="url(#ad-arrow-p)" {...d(1.05)} className="ad-stroke ad-stroke--signal" />

    <line x1="242" y1="200" x2="296" y2="190" {...d(1.3)} className="ad-stroke ad-stroke--thin" />
    <text x="316" y="184" textAnchor="end" className="ad-text ad-text--note" style={{ '--d': '1.4s' }}>Guardrails</text>

    <ModelPart x={20} y={300} delay={1.2} />
    <DataPart x={184} y={300} delay={1.3} />

    <line x1="170" y1="280" x2="170" y2="414" {...d(1.5)} className="ad-stroke ad-stroke--dashed" />
    <MonitorPart x={105} y={416} delay={1.6} />

    <line x1="12" y1="536" x2="328" y2="536" {...d(1.9)} className="ad-stroke ad-stroke--thin" />
    <line x1="12" y1="528" x2="12" y2="544" {...d(1.9)} className="ad-stroke ad-stroke--thin" />
    <line x1="328" y1="528" x2="328" y2="544" {...d(1.9)} className="ad-stroke ad-stroke--thin" />
    <rect x="48" y="526" width="244" height="20" className="ad-gap" />
    <text x="170" y="541" textAnchor="middle" className="ad-text ad-text--note" style={{ '--d': '2.1s' }}>Pilot to production, same build</text>

    <defs>
      <marker id="ad-arrow-p" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M1 1 L9 5 L1 9" className="ad-arrowhead" />
      </marker>
    </defs>
  </svg>
)

const ArchitectureDrawing = () => {
  const ref = useRef(null)
  // 'static' = render fully drawn (no JS observer, reduced motion, or already seen)
  const [state, setState] = useState('static')

  useEffect(() => {
    const el = ref.current
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || reduce || !('IntersectionObserver' in window)) return undefined

    setState('waiting')
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        setState('drawn')
        io.disconnect()
      }
    }, { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <figure ref={ref} className={`ad-figure ad-figure--${state}`}>
      <Landscape />
      <Portrait />
      <p className="visually-hidden">
        Diagram: your users reach an app and API layer running in your own cloud account.
        The API calls an AI model through guardrails and evaluations, reads and writes your
        data, and is watched by monitoring. The same architecture runs from pilot to production.
      </p>
      <figcaption className="bp-titleblock ad-titleblock">
        <span><b>Drawing</b> A typical AI product</span>
        <span><b>Hosting</b> Your cloud account</span>
        <span><b>Ownership</b> Code and IP are yours</span>
      </figcaption>
    </figure>
  )
}

export default ArchitectureDrawing
