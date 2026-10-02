import React from 'react'
import './AIArtifact.css'

/* Hero artifact for the AI detail pages: one animated SVG scene per page.
   Every scene shares the same visual language (ink lines, signal accent) but
   shows a different mechanism. Motion is CSS only and stops for reduced motion. */

const d = (n) => ({ animationDelay: `${n}s` })
const star = (x, y, s) => `M${x} ${y - s} L${x + s * 0.28} ${y - s * 0.28} L${x + s} ${y} L${x + s * 0.28} ${y + s * 0.28} L${x} ${y + s} L${x - s * 0.28} ${y + s * 0.28} L${x - s} ${y} L${x - s * 0.28} ${y - s * 0.28} Z`

/* 1. Custom AI: layered network with a gear turning beside it */
const Custom = () => (
  <>
    {[60, 120, 180, 230].map((y, i) => [90, 150, 210].map((y2, j) => (
      <line key={`a${i}${j}`} className="a-line a-thin" x1="60" y1={y - 10 + i * 0} x2="170" y2={y2 - 30 + j * 8} pathLength="1" />
    )))}
    {[90, 150, 210].map((y, i) => (
      <line key={`b${i}`} className="a-line a-thin" x1="170" y1={y - 30 + i * 8} x2="260" y2="140" pathLength="1" />
    ))}
    <path className="a-flow" d="M60 60 L170 62 L260 140" />
    <path className="a-flow a-flow--2" d="M60 230 L170 98 L260 140" />
    {[60, 120, 180, 230].map((y, i) => <circle key={`i${i}`} className="a-node a-pulse" style={d(i * 0.3)} cx="60" cy={y - 10} r="7" />)}
    {[90, 150, 210].map((y, i) => <circle key={`h${i}`} className="a-node a-pulse" style={d(0.4 + i * 0.3)} cx="170" cy={y - 30 + i * 8} r="8" />)}
    <circle className="a-node a-node--on a-pulse" cx="260" cy="140" r="10" />
    <g className="a-spin" style={{ transformOrigin: '312px 218px', transformBox: 'view-box' }}>
      <circle className="a-fill" cx="312" cy="218" r="16" />
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={i} className="a-sig" x="309" y="196" width="6" height="8" transform={`rotate(${i * 45} 312 218)`} />
      ))}
      <circle className="a-node" cx="312" cy="218" r="5" />
    </g>
    <text className="a-text" x="60" y="262" textAnchor="middle">data</text>
    <text className="a-text" x="170" y="262" textAnchor="middle">model</text>
    <text className="a-text" x="260" y="262" textAnchor="middle">decision</text>
  </>
)

/* 2. NLP: chat with entities picked out of the text */
const Nlp = () => (
  <>
    <rect className="a-line a-fill" x="30" y="30" width="190" height="62" rx="12" pathLength="1" />
    <rect className="a-bar" x="46" y="46" width="130" height="6" />
    <rect className="a-bar a-bar--2" x="46" y="60" width="96" height="6" />
    <rect className="a-bar a-bar--3" x="46" y="74" width="150" height="6" />
    <rect className="a-line" x="140" y="112" width="190" height="56" rx="12" pathLength="1" style={d(0.5)} />
    {[0, 1, 2].map((i) => <circle key={i} className="a-sig a-blink" style={d(i * 0.25)} cx={170 + i * 16} cy="140" r="4.5" />)}
    <text className="a-text" x="230" y="144">writing…</text>
    {['intent', 'entity', 'sentiment'].map((t, i) => (
      <g key={t}>
        <rect className="a-chip" style={{ animationDelay: `${i * 1.1}s` }} x={30 + i * 100} y="196" width="88" height="30" rx="15" />
        <text className="a-text a-text--c" x={74 + i * 100} y="215" textAnchor="middle">{t}</text>
      </g>
    ))}
    <path className="a-line a-thin" d="M80 92 V196 M150 92 V196 M250 92 V196" strokeDasharray="3 4" />
  </>
)

/* 3. Computer vision: scan line, detection boxes, corner brackets */
const Vision = () => (
  <>
    <rect className="a-line a-fill" x="36" y="34" width="288" height="188" pathLength="1" />
    <path className="a-line a-thin" d="M36 170 H324 M36 190 H324" />
    <rect className="a-fill2" x="96" y="140" width="84" height="30" rx="6" />
    <circle className="a-fill2" cx="114" cy="172" r="8" />
    <circle className="a-fill2" cx="162" cy="172" r="8" />
    <circle className="a-fill2" cx="250" cy="116" r="12" />
    <rect className="a-fill2" x="238" y="130" width="24" height="46" rx="6" />
    <rect className="a-box a-pulse" x="88" y="126" width="100" height="56" />
    <rect className="a-box a-pulse" style={d(0.7)} x="228" y="98" width="44" height="84" />
    <text className="a-text a-text--c" x="88" y="120">car 0.97</text>
    <text className="a-text a-text--c" x="228" y="92">person 0.92</text>
    <rect className="a-scan" x="36" y="34" width="288" height="3" />
    {[[36, 34, 1, 1], [324, 34, -1, 1], [36, 222, 1, -1], [324, 222, -1, -1]].map(([x, y, sx, sy]) => (
      <path key={`${x}${y}`} className="a-corner" d={`M${x} ${y + sy * 18} V${y} H${x + sx * 18}`} />
    ))}
  </>
)

/* 4. Generative AI: prompt becomes an image, sparkles twinkle */
const Gen = () => (
  <>
    <rect className="a-line a-fill" x="30" y="28" width="300" height="38" rx="19" pathLength="1" />
    <path className="a-sig" d={star(54, 47, 8)} />
    <rect className="a-bar" x="74" y="43" width="150" height="7" />
    <rect className="a-sig a-caret" x="232" y="41" width="3" height="12" />
    <rect className="a-line" x="30" y="84" width="300" height="152" rx="8" pathLength="1" style={d(0.4)} />
    <g className="a-reveal">
      <circle className="a-sig a-float" cx="262" cy="130" r="20" opacity="0.9" />
      <path className="a-fill2" d="M30 236 L110 150 L160 200 L210 160 L330 236 Z" />
      <path className="a-fill3" d="M30 236 L80 190 L130 236 Z" />
    </g>
    {[[300, 100, 9], [60, 112, 6], [196, 108, 7], [150, 168, 5]].map(([x, y, s], i) => (
      <path key={i} className="a-spark" style={d(i * 0.5)} d={star(x, y, s)} />
    ))}
  </>
)

/* 5. Data science: bars rise, trend line draws, KPI badge */
const Data = () => (
  <>
    <path className="a-line" d="M40 40 V228 H330" pathLength="1" />
    {[70, 110, 90, 140, 120, 170].map((h, i) => (
      <rect key={i} className={`a-grow ${i === 5 ? 'a-grow--on' : ''}`} style={d(0.4 + i * 0.18)} x={58 + i * 46} y={228 - h} width="28" height={h} />
    ))}
    <polyline className="a-line a-sigline a-trend" points="72,150 118,112 164,128 210,86 256,100 302,52" pathLength="1" />
    {[[72, 150], [118, 112], [164, 128], [210, 86], [256, 100], [302, 52]].map(([x, y], i) => (
      <circle key={i} className="a-node a-pulse" style={d(i * 0.25)} cx={x} cy={y} r="5" />
    ))}
    <rect className="a-badge" x="246" y="26" width="76" height="26" rx="13" />
    <text className="a-text a-text--w" x="284" y="43" textAnchor="middle">+24% forecast</text>
  </>
)

/* 6. AI tech stack: four slabs with signal climbing the layers */
const Stack = () => {
  const layers = ['Apps', 'Models', 'Data', 'Cloud']
  return (
    <>
      {layers.map((l, i) => {
        const y = 40 + i * 54
        return (
          <g key={l} className="a-slab" style={d(i * 0.25)}>
            <path className={`a-line ${i === 1 ? 'a-fill' : ''}`} d={`M180 ${y} L310 ${y + 26} L180 ${y + 52} L50 ${y + 26} Z`} pathLength="1" />
            <path className="a-line a-thin" d={`M50 ${y + 26} V${y + 38} L180 ${y + 64} L310 ${y + 38} V${y + 26}`} pathLength="1" />
            <text className="a-text a-text--c" x="180" y={y + 30} textAnchor="middle">{l}</text>
            <circle className="a-sig a-blink" style={d(i * 0.4)} cx={120 + i * 4} cy={y + 30} r="3" />
          </g>
        )
      })}
      <path className="a-flow" d="M180 236 V30" />
      <path className="a-flow a-flow--2" d="M244 214 V50" />
    </>
  )
}

/* 7. Agents: planner in the middle, tools around it */
const Agents = () => {
  const tools = [[70, 56, 'Search'], [290, 56, 'Code'], [70, 224, 'Data'], [290, 224, 'Mail']]
  return (
    <>
      {tools.map(([x, y]) => <path key={`${x}${y}`} className="a-line a-thin" d={`M180 140 L${x} ${y}`} strokeDasharray="4 4" />)}
      {tools.map(([x, y], i) => <path key={`f${i}`} className={`a-flow ${i % 2 ? 'a-flow--2' : ''}`} d={`M180 140 L${x} ${y}`} style={d(i * 0.4)} />)}
      <circle className="a-ring a-spin" cx="180" cy="140" r="52" />
      <circle className="a-line a-fill" cx="180" cy="140" r="38" pathLength="1" />
      <rect className="a-line" x="162" y="126" width="36" height="26" rx="6" pathLength="1" />
      <circle className="a-sig a-blink" cx="172" cy="139" r="3.5" />
      <circle className="a-sig a-blink" style={d(0.3)} cx="188" cy="139" r="3.5" />
      <path className="a-line" d="M180 126 V118" />
      <circle className="a-sig a-pulse" cx="180" cy="115" r="3.5" />
      {tools.map(([x, y, t], i) => (
        <g key={t} className="a-bob" style={d(i * 0.5)}>
          <rect className="a-line a-fill" x={x - 30} y={y - 18} width="60" height="36" rx="8" pathLength="1" />
          <text className="a-text a-text--c" x={x} y={y + 4} textAnchor="middle">{t}</text>
        </g>
      ))}
    </>
  )
}

/* 8. AI operations: a loop that never stops, with a live gauge */
const Ops = () => {
  const stages = [[180, 36, 'monitor'], [304, 140, 'evaluate'], [180, 244, 'release'], [56, 140, 'retrain']]
  return (
    <>
      <circle className="a-line a-thin" cx="180" cy="140" r="104" strokeDasharray="4 5" />
      <g className="a-orbit" style={{ transformOrigin: '180px 140px' }}>
        <circle className="a-sig" cx="180" cy="36" r="6" />
      </g>
      {stages.map(([x, y, t]) => (
        <g key={t}>
          <circle className="a-line a-fill" cx={x} cy={y} r="17" pathLength="1" />
          <text className="a-text a-text--c" x={x} y={y + 3} textAnchor="middle">{t.slice(0, 3)}</text>
          <text className="a-text" x={x} y={y + (y < 100 ? -24 : y > 200 ? 36 : 34)} textAnchor="middle">{t}</text>
        </g>
      ))}
      <path className="a-line" d="M126 170 A56 56 0 0 1 234 170" pathLength="1" />
      <line className="a-needle" x1="180" y1="170" x2="180" y2="124" />
      <circle className="a-node a-node--on" cx="180" cy="170" r="5" />
      <text className="a-text" x="180" y="196" textAnchor="middle">healthy</text>
    </>
  )
}

/* 9. Machine learning: classes, a boundary that settles, loss falling */
const Ml = () => {
  const a = [[70, 70], [100, 110], [60, 130], [120, 70], [90, 160], [140, 120], [50, 180]]
  const b = [[230, 80], [270, 120], [300, 70], [250, 160], [290, 180], [220, 200], [320, 130]]
  return (
    <>
      <rect className="a-line a-thin" x="30" y="30" width="300" height="190" pathLength="1" />
      {a.map(([x, y], i) => <circle key={`a${i}`} className="a-node a-pulse" style={d(i * 0.2)} cx={x} cy={y} r="6" />)}
      {b.map(([x, y], i) => <circle key={`b${i}`} className="a-node a-node--on a-pulse" style={d(i * 0.2)} cx={x} cy={y} r="6" />)}
      <line className="a-boundary" x1="180" y1="20" x2="180" y2="236" />
      <g>
        <rect className="a-fill4" x="230" y="170" width="94" height="44" rx="4" />
        <path className="a-line a-sigline a-trend" d="M238 180 C 252 182, 258 204, 270 206 S 300 208, 316 208" pathLength="1" />
        <text className="a-text" x="238" y="226">loss</text>
      </g>
      <text className="a-text a-text--c" x="40" y="46">class A</text>
      <text className="a-text a-text--c" x="290" y="46">class B</text>
    </>
  )
}

/* 10. AI and ML overview: nested fields with signals radiating out */
const Overview = () => (
  <>
    <circle className="a-line a-thin" cx="180" cy="140" r="112" />
    <circle className="a-line" cx="180" cy="140" r="80" />
    <circle className="a-line a-fill" cx="180" cy="140" r="46" />
    <circle className="a-wave" cx="180" cy="140" r="46" />
    <circle className="a-wave" style={d(1.2)} cx="180" cy="140" r="46" />
    <text className="a-text a-text--c" x="180" y="146" textAnchor="middle">Deep learning</text>
    <text className="a-text a-text--c" x="180" y="88" textAnchor="middle">Machine learning</text>
    <text className="a-text a-text--c" x="180" y="40" textAnchor="middle">Artificial intelligence</text>
    <g className="a-orbit" style={{ transformOrigin: '180px 140px', animationDuration: '9s' }}><circle className="a-sig" cx="180" cy="28" r="5" /></g>
    <g className="a-orbit" style={{ transformOrigin: '180px 140px', animationDuration: '6s', animationDirection: 'reverse' }}><circle className="a-node a-node--on" cx="180" cy="60" r="5" /></g>
    <g className="a-orbit" style={{ transformOrigin: '180px 140px', animationDuration: '4s' }}><circle className="a-node" cx="180" cy="94" r="4" /></g>
  </>
)

/* 11. Transform the business: steps rising with a flag at the top */
const Transform = () => (
  <>
    {[48, 90, 132, 176].map((h, i) => (
      <g key={i}>
        <rect className={`a-rise ${i === 3 ? 'a-rise--on' : ''}`} style={d(0.3 + i * 0.3)} x={46 + i * 70} y={232 - h} width="62" height={h} />
        <text className="a-text a-text--c" x={77 + i * 70} y="250" textAnchor="middle">{['Today', 'Pilot', 'Scale', 'Lead'][i]}</text>
      </g>
    ))}
    <path className="a-line a-sigline a-trend" d="M60 150 C 120 140, 150 110, 190 100 S 260 70, 300 40" pathLength="1" />
    <path className="a-arrow" d="M290 34 L304 38 L296 50 Z" />
    <g className="a-wave-flag" style={{ transformOrigin: '288px 56px' }}>
      <line className="a-line" x1="288" y1="56" x2="288" y2="22" />
      <path className="a-sig" d="M288 22 L312 30 L288 38 Z" />
    </g>
    <path className="a-flow" d="M60 150 C 120 140, 150 110, 190 100 S 260 70, 300 40" />
  </>
)

/* 12. AI/ML models: a shortlist where the best fit gets picked */
const Models = () => {
  const cards = [[30, 36], [130, 36], [230, 36], [30, 140], [130, 140], [230, 140]]
  const names = ['LLM', 'Vision', 'Speech', 'Forecast', 'Rank', 'Embed']
  return (
    <>
      {cards.map(([x, y], i) => (
        <g key={i}>
          <rect className="a-line a-fill" x={x} y={y} width="90" height="84" rx="8" pathLength="1" style={d(i * 0.12)} />
          <text className="a-text a-text--c" x={x + 10} y={y + 20}>{names[i]}</text>
          {[0, 1, 2].map((r) => <rect key={r} className="a-bar" style={d(0.5 + i * 0.2 + r * 0.15)} x={x + 10} y={y + 34 + r * 14} width={30 + ((i * 17 + r * 23) % 44)} height="6" />)}
        </g>
      ))}
      <rect className="a-pick" x="26" y="32" width="98" height="92" rx="10" />
      <text className="a-text" x="180" y="262" textAnchor="middle">best fit selected</text>
    </>
  )
}

/* 13. AI solutions hub: the core with every service around it */
const Hub = () => {
  const names = ['ML', 'NLP', 'Vision', 'GenAI', 'Data', 'Agents']
  const pts = names.map((_, i) => {
    const a = (Math.PI * 2 * i) / names.length - Math.PI / 2
    return [180 + Math.cos(a) * 100, 138 + Math.sin(a) * 96]
  })
  return (
    <>
      {pts.map(([x, y], i) => <line key={`l${i}`} className="a-line a-thin" x1="180" y1="138" x2={x} y2={y} />)}
      {pts.map(([x, y], i) => <path key={`f${i}`} className={`a-flow ${i % 2 ? 'a-flow--2' : ''}`} d={`M180 138 L${x} ${y}`} style={d(i * 0.35)} />)}
      <circle className="a-ring a-spin" cx="180" cy="138" r="52" />
      <circle className="a-line a-fill" cx="180" cy="138" r="38" pathLength="1" />
      <circle className="a-wave" cx="180" cy="138" r="38" />
      <text className="a-text a-text--c" x="180" y="144" textAnchor="middle" style={{ fontSize: 18 }}>AI</text>
      {pts.map(([x, y], i) => (
        <g key={names[i]} className="a-bob" style={d(i * 0.4)}>
          <rect className="a-line a-fill" x={x - 28} y={y - 14} width="56" height="28" rx="14" pathLength="1" />
          <text className="a-text a-text--c" x={x} y={y + 4} textAnchor="middle">{names[i]}</text>
        </g>
      ))}
    </>
  )
}

const SCENES = {
  'custom-ai-services': [Custom, 'Training a model on your data'],
  'nlp-solutions': [Nlp, 'Reading intent, entities and tone'],
  'computer-vision-services': [Vision, 'Detecting objects in a live frame'],
  'generative-ai-solutions': [Gen, 'Turning a prompt into content'],
  'data-science-analytics': [Data, 'Forecasting from your own data'],
  'ai-tech-stack': [Stack, 'Four layers, one working stack'],
  'ai-agents': [Agents, 'An agent planning with its tools'],
  'ai-operations': [Ops, 'Monitor, evaluate, release, retrain'],
  'machine-learning': [Ml, 'Learning a boundary from examples'],
  'ai-ml-overview': [Overview, 'AI, ML and deep learning'],
  'transform-business': [Transform, 'From first pilot to leading'],
  'ai-ml-models': [Models, 'Comparing models, picking the fit'],
  'ai-solutions': [Hub, 'One core, every AI service around it'],
}

const AIArtifact = ({ slug, Icon, name }) => {
  const [Scene, status] = SCENES[slug] || SCENES['ai-ml-overview']
  return (
    <figure className="ax">
      <figcaption className="ax-head">
        <span className="ax-ico" aria-hidden="true">{Icon && <Icon />}</span>
        <span className="ax-status">{status}</span>
        <span className="ax-live" aria-hidden="true" />
      </figcaption>
      <svg className="ax-svg" viewBox="0 0 360 270" role="img" aria-label={`Animated diagram: ${status}.`}>
        <Scene />
      </svg>
      <div className="ax-foot" aria-hidden="true"><span>{name}</span><span>Hunexture AI</span></div>
    </figure>
  )
}

export default AIArtifact
