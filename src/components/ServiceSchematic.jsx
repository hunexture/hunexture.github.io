import React, { useEffect, useRef, useState } from 'react'
import './ServiceSchematic.css'

/* Blueprint-style schematics, one per service. Lines draw in once when the
   figure scrolls into view; a few signal-blue "packets" then keep moving to
   show how data flows. All motion is CSS and switches off for reduced motion. */

const Ai = () => (
  <>
    {[30, 60, 90].map((y) => [24, 54, 84].map((y2) => (
      <line key={`a${y}-${y2}`} className="sch-draw sch-thin" x1="40" y1={y} x2="120" y2={y2} pathLength="1" />
    )))}
    {[24, 54, 84].map((y) => (
      <line key={`b${y}`} className="sch-draw sch-thin" x1="120" y1={y} x2="200" y2="57" pathLength="1" />
    ))}
    <path className="sch-flow" d="M40 60 L120 54 L200 57" />
    <path className="sch-flow sch-flow--2" d="M40 30 L120 84 L200 57" />
    {[30, 60, 90].map((y) => <circle key={`i${y}`} className="sch-node" cx="40" cy={y} r="6" />)}
    {[24, 54, 84].map((y) => <circle key={`h${y}`} className="sch-node" cx="120" cy={y} r="6" />)}
    <circle className="sch-node sch-node--on" cx="200" cy="57" r="8" />
    <text className="sch-label" x="40" y="112" textAnchor="middle">input</text>
    <text className="sch-label" x="120" y="112" textAnchor="middle">hidden</text>
    <text className="sch-label" x="200" y="112" textAnchor="middle">output</text>
  </>
)

const Web = () => (
  <>
    <rect className="sch-draw" x="24" y="14" width="192" height="92" pathLength="1" />
    <line className="sch-draw" x1="24" y1="30" x2="216" y2="30" pathLength="1" />
    <circle className="sch-node" cx="35" cy="22" r="2.5" />
    <circle className="sch-node" cx="45" cy="22" r="2.5" />
    <circle className="sch-node" cx="55" cy="22" r="2.5" />
    <rect className="sch-draw" x="36" y="40" width="70" height="8" pathLength="1" />
    <rect className="sch-bar sch-bar--1" x="36" y="56" width="100" height="5" />
    <rect className="sch-bar sch-bar--2" x="36" y="67" width="84" height="5" />
    <rect className="sch-bar sch-bar--3" x="36" y="78" width="92" height="5" />
    <rect className="sch-draw sch-fill" x="150" y="40" width="54" height="52" pathLength="1" />
    <path className="sch-draw" d="M150 92 L170 70 L184 84 L194 74 L204 86" pathLength="1" />
    <rect className="sch-caret" x="138" y="55" width="3" height="7" />
  </>
)

const App = () => (
  <>
    <rect className="sch-draw" x="86" y="8" width="68" height="104" rx="9" pathLength="1" />
    <line className="sch-draw" x1="108" y1="15" x2="132" y2="15" pathLength="1" />
    <rect className="sch-draw sch-fill" x="94" y="26" width="52" height="24" pathLength="1" />
    <rect className="sch-bar sch-bar--1" x="94" y="58" width="36" height="5" />
    <rect className="sch-bar sch-bar--2" x="94" y="68" width="52" height="5" />
    <rect className="sch-draw" x="94" y="82" width="52" height="16" rx="3" pathLength="1" />
    <circle className="sch-ripple" cx="120" cy="90" r="4" />
    <path className="sch-draw sch-thin" d="M52 40 H78 M52 60 H78 M52 80 H78 M162 40 H188 M162 60 H188 M162 80 H188" pathLength="1" />
    <text className="sch-label" x="52" y="34">iOS</text>
    <text className="sch-label" x="162" y="34">Android</text>
  </>
)

const Cloud = () => (
  <>
    <path className="sch-draw" pathLength="1"
      d="M86 62 a14 14 0 0 1 4 -27 a22 22 0 0 1 42 -4 a17 17 0 0 1 8 31 z" transform="translate(30 -14)" />
    <rect className="sch-draw" x="20" y="74" width="44" height="12" pathLength="1" />
    <rect className="sch-draw" x="20" y="90" width="44" height="12" pathLength="1" />
    <rect className="sch-draw" x="176" y="74" width="44" height="12" pathLength="1" />
    <rect className="sch-draw" x="176" y="90" width="44" height="12" pathLength="1" />
    <circle className="sch-node sch-node--on" cx="28" cy="80" r="2" />
    <circle className="sch-node sch-node--on" cx="28" cy="96" r="2" />
    <circle className="sch-node sch-node--on" cx="184" cy="80" r="2" />
    <circle className="sch-node sch-node--on" cx="184" cy="96" r="2" />
    <path className="sch-draw sch-thin" d="M42 74 V56 H98 M198 74 V56 H142" pathLength="1" />
    <path className="sch-flow" d="M42 74 V56 H98" />
    <path className="sch-flow sch-flow--2" d="M198 74 V56 H142" />
    <text className="sch-label" x="120" y="112" textAnchor="middle">your systems</text>
  </>
)

const Design = () => (
  <>
    <rect className="sch-draw" x="24" y="14" width="80" height="92" pathLength="1" />
    <rect className="sch-draw sch-thin" x="32" y="22" width="64" height="26" pathLength="1" />
    <rect className="sch-draw sch-thin" x="32" y="56" width="30" height="40" pathLength="1" />
    <rect className="sch-draw sch-thin" x="66" y="56" width="30" height="40" pathLength="1" />
    <path className="sch-draw" pathLength="1" d="M132 92 C 140 30, 180 30, 212 80" />
    <path className="sch-handle" d="M132 92 L148 54 M212 80 L196 52" />
    <rect className="sch-node sch-node--on" x="128" y="88" width="8" height="8" />
    <rect className="sch-node sch-node--on" x="208" y="76" width="8" height="8" />
    <circle className="sch-node" cx="148" cy="54" r="3.5" />
    <circle className="sch-node" cx="196" cy="52" r="3.5" />
    <path className="sch-cursor" d="M0 0 L0 13 L4 10 L7 16 L10 15 L7 9 L12 9 Z" />
  </>
)

const Marketing = () => (
  <>
    <path className="sch-draw" pathLength="1" d="M24 14 H128 L106 50 V76 L88 88 V50 Z" transform="translate(-4 4)" />
    <circle className="sch-drop sch-drop--1" cx="68" cy="14" r="3" />
    <circle className="sch-drop sch-drop--2" cx="84" cy="14" r="3" />
    <circle className="sch-drop sch-drop--3" cx="100" cy="14" r="3" />
    <line className="sch-draw sch-thin" x1="150" y1="100" x2="220" y2="100" pathLength="1" />
    <line className="sch-draw sch-thin" x1="150" y1="100" x2="150" y2="20" pathLength="1" />
    <path className="sch-draw" pathLength="1" d="M150 92 L170 78 L186 82 L204 48 L220 30" />
    <path className="sch-flow" d="M150 92 L170 78 L186 82 L204 48 L220 30" />
    <circle className="sch-node sch-node--on" cx="220" cy="30" r="5" />
    <text className="sch-label" x="62" y="112" textAnchor="middle">visitors</text>
    <text className="sch-label" x="185" y="112" textAnchor="middle">leads</text>
  </>
)

const SHAPES = {
  'ai-solutions': Ai,
  'web-development': Web,
  'app-development': App,
  'cloud-integration': Cloud,
  'uiux-design': Design,
  'digital-marketing': Marketing,
}

export const ServiceSchematic = ({ slug, className = '' }) => {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  const Shape = SHAPES[slug]

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') { setSeen(true); return undefined }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setSeen(true); io.disconnect() }
    }, { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  if (!Shape) return null
  return (
    <svg
      ref={ref}
      className={`sch sch--${slug} ${seen ? 'is-seen' : ''} ${className}`}
      viewBox="0 0 240 120"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <Shape />
    </svg>
  )
}

/* Hero figure: shows the sentence in the page lede. A web app calls an AI
   feature, and both run on cloud infrastructure. */
export const StackFigure = () => {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setSeen(true), 150)
    return () => clearTimeout(t)
  }, [])
  return (
    <figure className="stackfig">
      <svg ref={ref} className={`sch stackfig-svg ${seen ? 'is-seen' : ''}`} viewBox="0 0 420 340" role="img"
        aria-label="Diagram: a web app calls an AI feature, and both run on cloud infrastructure.">
        <g transform="translate(0 0)">
          <rect className="sch-draw sch-fill" x="40" y="20" width="200" height="104" pathLength="1" />
          <line className="sch-draw" x1="40" y1="42" x2="240" y2="42" pathLength="1" />
          <circle className="sch-node" cx="53" cy="31" r="3" />
          <circle className="sch-node" cx="64" cy="31" r="3" />
          <rect className="sch-bar sch-bar--1" x="56" y="58" width="110" height="6" />
          <rect className="sch-bar sch-bar--2" x="56" y="72" width="140" height="6" />
          <rect className="sch-draw" x="56" y="90" width="64" height="20" pathLength="1" />
          <text className="sch-label" x="258" y="36">Web app</text>
        </g>
        <g>
          <circle className="sch-draw sch-fill" cx="320" cy="160" r="46" pathLength="1" />
          {[[300, 142], [300, 178], [340, 150], [340, 172]].map(([x, y]) => (
            <circle key={`${x}${y}`} className="sch-node" cx={x} cy={y} r="4.5" />
          ))}
          <path className="sch-draw sch-thin" d="M300 142 L340 150 M300 142 L340 172 M300 178 L340 150 M300 178 L340 172" pathLength="1" />
          <text className="sch-label" x="320" y="226" textAnchor="middle">AI feature</text>
        </g>
        <path className="sch-draw sch-thin" d="M240 90 H274 V160" pathLength="1" />
        <path className="sch-flow" d="M240 90 H274 V160" />
        <g>
          <rect className="sch-draw" x="40" y="258" width="340" height="56" pathLength="1" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} className="sch-draw sch-thin" x={54 + i * 82} y="270" width="66" height="32" pathLength="1" />
          ))}
          <circle className="sch-node sch-node--on" cx="62" cy="278" r="2.5" />
          <circle className="sch-node sch-node--on" cx="144" cy="278" r="2.5" />
          <circle className="sch-node sch-node--on" cx="226" cy="278" r="2.5" />
          <circle className="sch-node sch-node--on" cx="308" cy="278" r="2.5" />
          <text className="sch-label" x="40" y="250">Cloud infrastructure</text>
        </g>
        <path className="sch-draw sch-thin" d="M140 124 V258 M320 206 V258" pathLength="1" />
        <path className="sch-flow sch-flow--2" d="M140 124 V258" />
        <path className="sch-flow" d="M320 206 V258" />
      </svg>
    </figure>
  )
}
