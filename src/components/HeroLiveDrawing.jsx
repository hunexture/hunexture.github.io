import React, { useEffect, useRef, useState } from 'react'
import './HeroLiveDrawing.css'

// One AI request, drawn as a live blueprint and looped:
// a user asks inside the app, the request travels to the model, the network
// runs layer by layer, the answer streams back, and the checks we ship with
// every AI feature tick in. A playhead tracks the four phases underneath.
// Every animation shares one cycle length, so they stay in sync; the base
// (non-animated) styles are the finished state, used for reduced motion.

const L1 = [80, 110, 140, 170]
const L2 = [95, 125, 155]
const L3 = [110, 140]
const LX = [318, 352, 386]

const edges = (from, to, x1, x2) =>
  from.flatMap((y1) => to.map((y2) => ({ x1, y1, x2, y2, key: `${x1}-${y1}-${y2}` })))

const E1 = edges(L1, L2, LX[0], LX[1])
const E2 = edges(L2, L3, LX[1], LX[2])

const ZONES = ['A', 'B', 'C', 'D']
const ROWS = ['1', '2', '3']
const PHASES = ['Ask', 'Think', 'Answer', 'Check']

const TRACE_OUT = 'M252 99 H280 V84 H296'
const TRACE_BACK = 'M296 180 H280 V198 H240'

const HeroLiveDrawing = () => {
  const ref = useRef(null)
  const [paused, setPaused] = useState(false)

  // Pause the loop while the drawing is off screen
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return undefined
    const io = new IntersectionObserver(([entry]) => setPaused(!entry.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <figure ref={ref} className={`hl-figure ${paused ? 'is-paused' : ''}`}>
      <svg className="hl-svg" viewBox="0 0 440 400" aria-hidden="true" focusable="false">
        {/* Sheet, inner frame and drawing-zone references */}
        <rect x="1" y="1" width="438" height="398" className="hl-sheet" />
        <rect x="16" y="16" width="408" height="368" className="hl-frame" />
        {ZONES.map((z, i) => (
          <text key={z} x={67 + i * 102} y="12" textAnchor="middle" className="hl-zone">{z}</text>
        ))}
        {[118, 220, 322].map((x) => (
          <React.Fragment key={x}>
            <line x1={x} y1="1" x2={x} y2="16" className="hl-frame" />
            <line x1={x} y1="384" x2={x} y2="399" className="hl-frame" />
          </React.Fragment>
        ))}
        {ROWS.map((r, i) => (
          <text key={r} x="8.5" y={82 + i * 122} textAnchor="middle" className="hl-zone">{r}</text>
        ))}
        {[138, 261].map((y) => (
          <React.Fragment key={y}>
            <line x1="1" y1={y} x2="16" y2={y} className="hl-frame" />
            <line x1="424" y1={y} x2="439" y2={y} className="hl-frame" />
          </React.Fragment>
        ))}

        {/* ── App window ── */}
        <rect x="32" y="36" width="236" height="262" className="hl-ink" />
        <line x1="32" y1="60" x2="268" y2="60" className="hl-ink" />
        <text x="44" y="52" className="hl-mono">yourproduct.app</text>

        <rect x="100" y="76" width="152" height="46" className="hl-bubble-user" />
        <rect x="44" y="136" width="196" height="124" className="hl-bubble-reply hl-a-replybox" />

        <rect x="44" y="270" width="212" height="20" className="hl-thin" />
        <line x1="54" y1="275" x2="54" y2="285" className="hl-caret" />
        <text x="62" y="284" className="hl-mono hl-mono--muted">Ask anything</text>

        <g className="hl-a-content">
          {/* user question, typed */}
          <text x="112" y="95" className="hl-text">Summarise this week's</text>
          <text x="112" y="112" className="hl-text">support tickets</text>
          <rect x="108" y="83" width="140" height="16" className="hl-cover hl-cover--tint hl-a-type1" />
          <rect x="108" y="100" width="140" height="16" className="hl-cover hl-cover--tint hl-a-type2" />

          {/* answer, streamed */}
          <text x="56" y="157" className="hl-text">214 tickets, 3 themes</text>
          <rect x="54" y="144" width="182" height="17" className="hl-cover hl-cover--paper hl-a-type3" />

          <rect x="56" y="170" width="104" height="12" className="hl-bar hl-a-bar1" />
          <text x="168" y="180" className="hl-mono hl-a-lab1">Billing</text>
          <rect x="56" y="192" width="70" height="12" className="hl-bar hl-bar--mid hl-a-bar2" />
          <text x="134" y="202" className="hl-mono hl-a-lab2">Login</text>
          <rect x="56" y="214" width="40" height="12" className="hl-bar hl-bar--low hl-a-bar3" />
          <text x="104" y="224" className="hl-mono hl-a-lab3">Export</text>
          <text x="56" y="248" className="hl-mono hl-mono--muted hl-a-sources">Linked to source tickets</text>

          {/* checks shipped with the feature */}
          <g className="hl-a-check1">
            <rect x="296" y="229" width="12" height="12" className="hl-checkbox" />
            <path d="M298.5 235 l2.5 2.5 l4.5 -5" className="hl-checkmark" />
            <text x="316" y="239" className="hl-text">Eval passed</text>
          </g>
          <g className="hl-a-check2">
            <line x1="296" y1="250" x2="408" y2="250" className="hl-thin" />
            <text x="296" y="266" className="hl-mono hl-mono--muted">Latency</text>
            <text x="408" y="266" textAnchor="end" className="hl-mono">412 ms</text>
          </g>
          <g className="hl-a-check3">
            <line x1="296" y1="274" x2="408" y2="274" className="hl-thin" />
            <text x="296" y="290" className="hl-mono hl-mono--muted">Cost</text>
            <text x="408" y="290" textAnchor="end" className="hl-mono">$0.002</text>
          </g>
        </g>

        {/* ── Model ── */}
        <rect x="296" y="36" width="112" height="178" className="hl-dashed" />
        <text x="306" y="52" className="hl-mono hl-mono--muted">Model</text>

        <g className="hl-edges">
          {[...E1, ...E2].map(({ key, ...p }) => <line key={key} {...p} />)}
        </g>
        <g className="hl-edges-lit hl-a-e1">
          {E1.map(({ key, ...p }) => <line key={key} {...p} />)}
        </g>
        <g className="hl-edges-lit hl-a-e2">
          {E2.map(({ key, ...p }) => <line key={key} {...p} />)}
        </g>
        {[L1, L2, L3].map((ys, li) => ys.map((cy) => (
          <circle key={`${li}-${cy}`} cx={LX[li]} cy={cy} r="5" className={`hl-node hl-a-n${li + 1}`} />
        )))}

        {/* ── Traces with travelling packets ── */}
        <path d={TRACE_OUT} className="hl-trace" />
        <path d={TRACE_BACK} className="hl-trace" />
        {[[280, 99], [280, 84], [280, 180], [280, 198]].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" className="hl-via" />
        ))}
        <path d={TRACE_OUT} pathLength="1" className="hl-packet hl-a-out" />
        <path d={TRACE_BACK} pathLength="1" className="hl-packet hl-a-back" />

        {/* ── Phase timeline ── */}
        <line x1="32" y1="330" x2="408" y2="330" className="hl-thin" />
        <rect x="32" y="328" width="376" height="4" className="hl-progress hl-a-progress" />
        {[32, 126, 220, 314, 408].map((x) => (
          <line key={x} x1={x} y1="324" x2={x} y2="336" className="hl-ink" />
        ))}
        {PHASES.map((p, i) => (
          <text key={p} x={79 + i * 94} y="356" textAnchor="middle" className={`hl-phase hl-a-ph${i + 1}`}>{p}</text>
        ))}
        <g className="hl-a-playhead">
          <path d="M27 316 h10 l-5 7 z" className="hl-playhead" />
          <line x1="32" y1="322" x2="32" y2="338" className="hl-playhead-line" />
        </g>
      </svg>
      <figcaption className="hl-caption">
        Illustration: one request through an AI feature, with the checks we ship alongside it.
      </figcaption>
    </figure>
  )
}

export default HeroLiveDrawing
