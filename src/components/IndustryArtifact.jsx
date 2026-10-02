import React from 'react'
import './AIArtifact.css'

/* Hero artifact for the industry detail pages: one animated SVG scene per sector.
   Shares the AIArtifact visual language (see AIArtifact.css). */

const d = (n) => ({ animationDelay: `${n}s` })
const o = (x, y, extra = {}) => ({ transformOrigin: `${x}px ${y}px`, ...extra })
const Move = ({ path, dur = 5, rotate, begin = 0 }) => (
  <animateMotion className="a-motion" dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} rotate={rotate} />
)
const star = (x, y, s) => `M${x} ${y - s} L${x + s * 0.28} ${y - s * 0.28} L${x + s} ${y} L${x + s * 0.28} ${y + s * 0.28} L${x} ${y + s} L${x - s * 0.28} ${y + s * 0.28} L${x - s} ${y} L${x - s * 0.28} ${y - s * 0.28} Z`

const Healthcare = () => (
  <>
    <rect className="a-line a-fill" x="30" y="30" width="300" height="200" rx="8" pathLength="1" />
    <path className="a-sig" d="M52 52 h10 v-10 h10 v10 h10 v10 h-10 v10 h-10 v-10 h-10 z" />
    <text className="a-text a-text--c" x="96" y="66">Patient 0481</text>
    <polyline className="a-line a-thin" points="40,150 100,150 120,150 130,110 142,190 154,130 164,150 230,150 250,150 262,120 274,170 286,150 320,150" />
    <polyline className="a-ecg" points="40,150 100,150 120,150 130,110 142,190 154,130 164,150 230,150 250,150 262,120 274,170 286,150 320,150" pathLength="1" />
    {[['HR 72', 44], ['SpO2 98%', 130], ['BP 120/80', 232]].map(([t, x], i) => (
      <g key={t}>
        <rect className="a-chip" style={d(i * 1.1)} x={x} y="196" width={i === 0 ? 70 : 88} height="24" rx="12" />
        <text className="a-text a-text--c" x={x + (i === 0 ? 35 : 44)} y="212" textAnchor="middle">{t}</text>
      </g>
    ))}
    <circle className="a-sig a-blink" cx="312" cy="50" r="5" />
  </>
)

const Legal = () => (
  <>
    <line className="a-line" x1="180" y1="50" x2="180" y2="222" />
    <path className="a-line" d="M140 232 H220" />
    <g className="a-sway" style={o(180, 62)}>
      <line className="a-line" x1="80" y1="62" x2="280" y2="62" />
      {[80, 280].map((x) => (
        <g key={x}>
          <path className="a-line a-thin" d={`M${x} 62 L${x - 34} 138 M${x} 62 L${x + 34} 138`} />
          <path className="a-line a-fill" d={`M${x - 40} 138 H${x + 40} A40 24 0 0 1 ${x - 40} 138 Z`} />
        </g>
      ))}
    </g>
    <circle className="a-node a-node--on a-pulse" cx="180" cy="62" r="7" />
    <rect className="a-line a-fill" x="262" y="170" width="68" height="62" pathLength="1" />
    <rect className="a-bar" x="272" y="182" width="48" height="5" />
    <rect className="a-bar a-bar--2" x="272" y="194" width="36" height="5" />
    <rect className="a-bar a-bar--3" x="272" y="206" width="44" height="5" />
    <text className="a-text" x="30" y="250">verdict: reviewed</text>
  </>
)

const Logistics = () => {
  const path = 'M50 200 L150 90 L260 170 L320 60'
  return (
    <>
      <path className="a-line a-thin" d={path} strokeDasharray="5 5" />
      <path className="a-flow" d={path} />
      {[[50, 200, 'Depot'], [150, 90, 'Hub'], [260, 170, 'Cross-dock'], [320, 60, 'Customer']].map(([x, y, t], i) => (
        <g key={t}>
          <circle className={`a-node ${i === 3 ? 'a-node--on' : ''} a-pulse`} style={d(i * 0.3)} cx={x} cy={y} r="9" />
          <text className="a-text" x={x} y={y + 24} textAnchor="middle">{t}</text>
        </g>
      ))}
      <g>
        <rect className="a-sig" x="-12" y="-7" width="24" height="14" rx="3" />
        <circle className="a-node" cx="-6" cy="8" r="3" />
        <circle className="a-node" cx="6" cy="8" r="3" />
        <Move path={path} dur={7} />
      </g>
      <rect className="a-badge" x="30" y="30" width="88" height="24" rx="12" />
      <text className="a-text a-text--w" x="74" y="46" textAnchor="middle">ETA 14:20</text>
    </>
  )
}

const Education = () => (
  <>
    <g className="a-float">
      <path className="a-line a-fill" d="M180 34 L262 66 L180 98 L98 66 Z" pathLength="1" />
      <path className="a-line" d="M138 84 V108 Q180 130 222 108 V84" />
      <path className="a-line a-sigline" d="M262 66 V100" />
      <circle className="a-sig" cx="262" cy="104" r="4" />
    </g>
    <path className="a-line a-fill" d="M180 160 Q130 140 60 150 V230 Q130 220 180 240 Z" pathLength="1" />
    <path className="a-line a-fill" d="M180 160 Q230 140 300 150 V230 Q230 220 180 240 Z" pathLength="1" />
    {[0, 1, 2].map((i) => <rect key={i} className="a-bar" style={d(i * 0.4)} x="80" y={170 + i * 16} width={70 - i * 10} height="5" />)}
    {[0, 1, 2].map((i) => <rect key={i} className="a-bar" style={d(0.2 + i * 0.4)} x="212" y={170 + i * 16} width={70 - i * 12} height="5" />)}
    {[[40, 60, 7], [320, 120, 6], [60, 110, 5]].map(([x, y, s], i) => <path key={i} className="a-spark" style={d(i * 0.6)} d={star(x, y, s)} />)}
  </>
)

const Media = () => (
  <>
    <rect className="a-line a-fill" x="36" y="30" width="288" height="162" rx="10" pathLength="1" />
    <circle className="a-wave" cx="180" cy="111" r="30" />
    <circle className="a-sig a-pulse" cx="180" cy="111" r="30" />
    <path d="M171 96 L199 111 L171 126 Z" fill="#fff" />
    <rect className="a-badge" x="48" y="42" width="46" height="20" rx="4" style={{ animation: 'a-blink 1.4s ease-in-out infinite' }} />
    <text className="a-text a-text--w" x="71" y="56" textAnchor="middle">LIVE</text>
    <rect className="a-fill4" x="36" y="206" width="288" height="8" rx="4" />
    <rect className="a-bar a-bar--long" x="36" y="206" width="288" height="8" rx="4" style={{ fill: 'var(--signal)' }} />
    {[0, 1, 2, 3].map((i) => <rect key={i} className="a-line a-fill" x={36 + i * 74} y="228" width="64" height="26" rx="4" style={d(i * 0.2)} />)}
  </>
)

const Travel = () => {
  const arc = 'M80 190 Q180 10 290 120'
  return (
    <>
      <circle className="a-line a-fill" cx="180" cy="140" r="96" pathLength="1" />
      <ellipse className="a-line a-thin" cx="180" cy="140" rx="96" ry="34" />
      <ellipse className="a-line a-thin" cx="180" cy="140" rx="40" ry="96" />
      <path className="a-line a-thin" d="M84 140 H276" />
      <path className="a-line a-sigline" d={arc} strokeDasharray="6 5" />
      <path className="a-sig" d="M-10 0 L10 0 L0 -5 Z M-10 0 L10 0 L0 5 Z M-4 -10 L4 0 L-4 10 Z" fill="var(--signal)" stroke="var(--ink)" strokeWidth="0.8">
        <Move path={arc} dur={5} rotate="auto" />
      </path>
      {[[80, 190, 'DEL'], [290, 120, 'LHR']].map(([x, y, t]) => (
        <g key={t}><circle className="a-node a-node--on a-pulse" cx={x} cy={y} r="7" /><text className="a-text a-text--c" x={x} y={y + 22} textAnchor="middle">{t}</text></g>
      ))}
      <rect className="a-badge" x="232" y="214" width="96" height="26" rx="13" />
      <text className="a-text a-text--w" x="280" y="231" textAnchor="middle">Boarding 18:40</text>
    </>
  )
}

const Retail = () => (
  <>
    {Array.from({ length: 8 }).map((_, i) => (
      <path key={i} className={i % 2 ? 'a-fill' : 'a-sig'} d={`M${40 + i * 35} 34 h35 l-5 34 h-35 z`} opacity={i % 2 ? 1 : 0.9} />
    ))}
    <path className="a-line" d="M40 34 H320 M46 68 H314" />
    {[102, 160].map((y) => <line key={y} className="a-line" x1="52" y1={y + 40} x2="308" y2={y + 40} />)}
    {[0, 1, 2, 3, 4].map((i) => <rect key={`a${i}`} className="a-fill2" x={62 + i * 50} y="116" width="34" height="26" rx="3" />)}
    {[0, 1, 2, 3, 4].map((i) => <rect key={`b${i}`} className={i === 2 ? 'a-sig a-pulse' : 'a-fill3'} x={62 + i * 50} y="174" width="34" height="26" rx="3" style={d(i * 0.2)} />)}
    <g className="a-float"><rect className="a-badge" x="232" y="82" width="62" height="22" rx="11" /><text className="a-text a-text--w" x="263" y="97" textAnchor="middle">-20% today</text></g>
    <rect className="a-scan a-scan--short" x="52" y="108" width="256" height="2" />
    <text className="a-text" x="52" y="238">in stock · scanned live</text>
  </>
)

const Construction = () => (
  <>
    <path className="a-line" d="M20 236 H340" />
    {[0, 1, 2, 3].map((i) => (
      <rect key={i} className={`a-rise ${i === 3 ? 'a-rise--on' : ''}`} style={d(0.3 + i * 0.5)} x="60" y={196 - i * 40} width="110" height="40" />
    ))}
    <line className="a-line" x1="250" y1="236" x2="250" y2="40" />
    <path className="a-line a-thin" d="M236 236 L264 40 M264 236 L236 40" />
    <g className="a-sway" style={o(250, 40, { animationDuration: '6s' })}>
      <line className="a-line" x1="130" y1="40" x2="330" y2="40" />
      <line className="a-line a-thin" x1="150" y1="40" x2="150" y2="110" />
      <rect className="a-sig a-float" x="136" y="110" width="28" height="18" />
    </g>
    <text className="a-text" x="60" y="256">floor 4 of 6</text>
  </>
)

const Sports = () => {
  const path = 'M70 200 Q120 60 180 130 T300 80'
  return (
    <>
      <rect className="a-line a-fill" x="30" y="40" width="300" height="190" pathLength="1" />
      <path className="a-line" d="M180 40 V230" />
      <circle className="a-line" cx="180" cy="135" r="30" />
      <rect className="a-line" x="30" y="95" width="46" height="80" />
      <rect className="a-line" x="284" y="95" width="46" height="80" />
      <path className="a-line a-sigline" d={path} strokeDasharray="4 5" />
      {[[100, 90], [140, 180], [230, 100], [250, 190]].map(([x, y], i) => <circle key={i} className="a-node a-pulse" style={d(i * 0.4)} cx={x} cy={y} r="6" />)}
      {[[120, 120], [210, 160]].map(([x, y], i) => <circle key={i} className="a-node a-node--on a-pulse" style={d(i * 0.4)} cx={x} cy={y} r="6" />)}
      <circle className="a-sig" r="6"><Move path={path} dur={4} /></circle>
      <rect className="a-badge" x="140" y="8" width="80" height="24" rx="12" />
      <text className="a-text a-text--w" x="180" y="24" textAnchor="middle">2 : 1</text>
    </>
  )
}

const Marketplace = () => {
  const L = [[50, 60], [50, 140], [50, 220]]
  const R = [[310, 60], [310, 140], [310, 220]]
  return (
    <>
      {L.map(([x, y], i) => <path key={`l${i}`} className="a-flow" d={`M${x} ${y} L180 140`} style={d(i * 0.5)} />)}
      {R.map(([x, y], i) => <path key={`r${i}`} className="a-flow a-flow--2" d={`M180 140 L${x} ${y}`} style={d(i * 0.5)} />)}
      {[...L, ...R].map(([x, y], i) => <path key={`t${i}`} className="a-line a-thin" d={`M${x} ${y} L180 140`} strokeDasharray="4 4" />)}
      {L.map(([x, y], i) => <circle key={`ln${i}`} className="a-node a-pulse" style={d(i * 0.3)} cx={x} cy={y} r="14" />)}
      {R.map(([x, y], i) => <rect key={`rn${i}`} className="a-line a-fill" x={x - 14} y={y - 14} width="28" height="28" rx="6" pathLength="1" />)}
      <circle className="a-ring a-spin" cx="180" cy="140" r="46" />
      <circle className="a-line a-fill" cx="180" cy="140" r="34" pathLength="1" />
      <text className="a-text a-text--c" x="180" y="144" textAnchor="middle">escrow</text>
      <text className="a-text" x="50" y="26" textAnchor="middle">buyers</text>
      <text className="a-text" x="310" y="26" textAnchor="middle">sellers</text>
    </>
  )
}

const Finance = () => (
  <>
    <path className="a-line" d="M36 40 V228 H330" pathLength="1" />
    {[[60, 150, 80, 'up'], [100, 120, 70, 'dn'], [140, 130, 90, 'up'], [180, 90, 80, 'up'], [220, 110, 70, 'dn'], [260, 70, 80, 'up']].map(([x, y, h, k], i) => (
      <g key={x}>
        <line className="a-line" x1={x + 12} y1={y - 14} x2={x + 12} y2={y + h + 10} />
        <rect className={`a-grow ${k === 'up' ? 'a-grow--on' : ''}`} style={d(0.3 + i * 0.2)} x={x} y={y} width="24" height={h} />
      </g>
    ))}
    <polyline className="a-line a-sigline a-trend" points="72,170 112,150 152,160 192,110 232,130 272,82" pathLength="1" style={{ strokeDasharray: 1 }} />
    <g className="a-float"><circle className="a-sig" cx="316" cy="70" r="16" /><text className="a-text a-text--w" x="316" y="75" textAnchor="middle">$</text></g>
    <rect className="a-badge" x="34" y="26" width="80" height="24" rx="12" />
    <text className="a-text a-text--w" x="74" y="42" textAnchor="middle">+3.2% today</text>
  </>
)

const Social = () => (
  <>
    {[0, 1, 2].map((i) => (
      <g key={i} className="a-slab" style={d(i * 0.4)}>
        <rect className="a-line a-fill" x={44 + i * 14} y={40 + i * 56} width="230" height="48" rx="10" pathLength="1" />
        <circle className="a-sig" cx={70 + i * 14} cy={64 + i * 56} r="11" opacity={0.9 - i * 0.2} />
        <rect className="a-bar" style={d(i * 0.3)} x={92 + i * 14} y={56 + i * 56} width="110" height="6" />
        <rect className="a-bar a-bar--2" x={92 + i * 14} y={70 + i * 56} width="80" height="6" />
      </g>
    ))}
    <g className="a-pulse" style={d(0.2)}><path className="a-sig" d="M312 70 c-10 -12 -30 -2 -20 14 l20 18 l20 -18 c10 -16 -10 -26 -20 -14 z" /></g>
    {[0, 1, 2].map((i) => <circle key={i} className="a-rise-up" style={d(i * 0.9)} cx={300 + (i % 2) * 14} cy="200" r="6" />)}
    <rect className="a-badge" x="262" y="214" width="66" height="22" rx="11" />
    <text className="a-text a-text--w" x="295" y="229" textAnchor="middle">+128 likes</text>
  </>
)

const Insurance = () => (
  <>
    {[80, 140, 200, 260].map((x, i) => <line key={x} className="a-drop" style={d(i * 0.45)} x1={x} y1="20" x2={x - 6} y2="40" />)}
    <path className="a-line a-fill" d="M180 40 L270 70 V140 Q270 210 180 244 Q90 210 90 140 V70 Z" pathLength="1" />
    <path className="a-line a-thin" d="M180 56 L254 80 V140 Q254 196 180 226 Q106 196 106 140 V80 Z" />
    <circle className="a-wave" cx="180" cy="140" r="50" />
    <path className="a-line a-sigline a-trend" d="M144 142 L172 170 L218 112" pathLength="1" style={{ strokeWidth: 8 }} />
    <text className="a-text" x="180" y="262" textAnchor="middle">claim covered</text>
  </>
)

const Manufacturing = () => (
  <>
    <rect className="a-line a-fill" x="20" y="196" width="320" height="22" rx="11" pathLength="1" />
    <line className="a-belt" x1="30" y1="207" x2="330" y2="207" />
    <g className="a-conveyor">
      {[0, 1, 2, 3, 4].map((i) => <rect key={i} className={i === 2 ? 'a-sig' : 'a-fill2'} x={10 + i * 80} y="168" width="40" height="28" rx="3" />)}
    </g>
    <rect className="a-fill4 a-line" x="60" y="150" width="30" height="46" />
    <g className="a-sway" style={o(75, 150, { animationDuration: '3s' })}>
      <line className="a-line" x1="75" y1="150" x2="150" y2="90" />
      <circle className="a-node" cx="75" cy="150" r="7" />
      <g className="a-sway" style={o(150, 90, { animationDuration: '3s', animationDirection: 'reverse' })}>
        <line className="a-line" x1="150" y1="90" x2="170" y2="150" />
        <circle className="a-node a-node--on" cx="150" cy="90" r="6" />
        <path className="a-line a-sigline" d="M160 152 H180" />
      </g>
    </g>
    <g className="a-spin" style={o(290, 90, { transformBox: 'view-box' })}>
      <circle className="a-fill" cx="290" cy="90" r="22" />
      {Array.from({ length: 8 }).map((_, i) => <rect key={i} className="a-sig" x="287" y="62" width="6" height="9" transform={`rotate(${i * 45} 290 90)`} />)}
      <circle className="a-node" cx="290" cy="90" r="7" />
    </g>
    <text className="a-text" x="20" y="240">line 3 · 99.2% good</text>
  </>
)

const Telecom = () => (
  <>
    <path className="a-line" d="M120 236 L150 90 M180 236 L150 90 M128 190 H172 M136 150 H164" />
    <line className="a-line" x1="150" y1="90" x2="150" y2="60" />
    <circle className="a-sig a-pulse" cx="150" cy="56" r="6" />
    {[0, 1, 2].map((i) => <circle key={i} className="a-wave a-wave--big" style={d(i * 0.9)} cx="150" cy="56" r="14" />)}
    <rect className="a-line a-fill" x="236" y="80" width="90" height="150" rx="6" pathLength="1" />
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <rect className="a-line" x="246" y={92 + i * 34} width="70" height="24" rx="3" />
        <circle className="a-sig a-blink" style={d(i * 0.35)} cx="258" cy={104 + i * 34} r="3.5" />
        <rect className="a-fill2" x="270" y={101 + i * 34} width="38" height="5" />
      </g>
    ))}
    <path className="a-line a-thin" d="M180 160 H236" strokeDasharray="4 4" />
    <path className="a-flow" d="M180 160 H236" />
    <text className="a-text" x="40" y="40">5G · 99.99% uptime</text>
  </>
)

const Beauty = () => (
  <>
    <rect className="a-line a-fill" x="40" y="34" width="210" height="194" rx="8" pathLength="1" />
    <rect className="a-sig" x="40" y="34" width="210" height="30" rx="8" />
    <text className="a-text a-text--w" x="145" y="54" textAnchor="middle">Book your visit</text>
    {Array.from({ length: 12 }).map((_, i) => {
      const x = 52 + (i % 3) * 66
      const y = 78 + Math.floor(i / 3) * 36
      return <rect key={i} className="a-chip" style={d((i % 6) * 0.55)} x={x} y={y} width="58" height="28" rx="6" />
    })}
    <g className="a-float"><ellipse className="a-line a-fill" cx="300" cy="120" rx="36" ry="52" pathLength="1" /><ellipse className="a-line a-thin" cx="300" cy="120" rx="28" ry="44" /></g>
    {[[300, 60, 8], [330, 170, 6], [270, 190, 5]].map(([x, y, s], i) => <path key={i} className="a-spark" style={d(i * 0.6)} d={star(x, y, s)} />)}
    <rect className="a-badge" x="262" y="204" width="72" height="24" rx="12" />
    <text className="a-text a-text--w" x="298" y="220" textAnchor="middle">Booked ✓</text>
  </>
)

const OnDemand = () => {
  const route = 'M60 210 L60 150 L170 150 L170 80 L290 80'
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => <line key={`h${i}`} className="a-line a-thin" x1="30" y1={50 + i * 42} x2="330" y2={50 + i * 42} />)}
      {[0, 1, 2, 3, 4, 5].map((i) => <line key={`v${i}`} className="a-line a-thin" x1={50 + i * 56} y1="40" x2={50 + i * 56} y2="224" />)}
      <path className="a-line a-sigline" d={route} />
      <path className="a-flow" d={route} />
      <circle className="a-node a-node--on" r="8"><Move path={route} dur={6} /></circle>
      <g className="a-bob"><path className="a-sig" d="M290 40 a14 14 0 0 1 14 14 c0 12 -14 26 -14 26 s-14 -14 -14 -26 a14 14 0 0 1 14 -14 z" /><circle cx="290" cy="54" r="5" fill="#fff" /></g>
      <circle className="a-node a-pulse" cx="60" cy="210" r="7" />
      <rect className="a-badge" x="30" y="232" width="74" height="24" rx="12" />
      <text className="a-text a-text--w" x="67" y="248" textAnchor="middle">ETA 4 min</text>
    </>
  )
}

const Ecommerce = () => (
  <>
    <rect className="a-line a-fill" x="30" y="30" width="250" height="200" rx="8" pathLength="1" />
    <line className="a-line" x1="30" y1="52" x2="280" y2="52" />
    {[0, 1, 2].map((i) => <circle key={i} className="a-node" cx={44 + i * 12} cy="41" r="3" />)}
    {[0, 1, 2].map((i) => (
      <g key={i} className="a-bob" style={d(i * 0.4)}>
        <rect className="a-line" x={44 + i * 78} y="68" width="68" height="98" rx="6" pathLength="1" />
        <rect className={i === 1 ? 'a-sig' : 'a-fill2'} x={50 + i * 78} y="74" width="56" height="52" rx="4" />
        <rect className="a-bar" style={d(i * 0.3)} x={50 + i * 78} y="136" width="44" height="5" />
        <rect className="a-fill4" x={50 + i * 78} y="148" width="30" height="10" rx="5" />
      </g>
    ))}
    <rect className="a-chip" x="44" y="186" width="224" height="30" rx="15" />
    <text className="a-text a-text--c" x="156" y="205" textAnchor="middle">Checkout</text>
    <path className="a-flow" d="M250 120 H300" />
    <g className="a-pulse" style={d(0.3)}>
      <path className="a-line a-sigline" d="M296 90 h14 l8 44 h42 l8 -34 h-52" />
      <circle className="a-node a-node--on" cx="318" cy="146" r="5" />
      <circle className="a-node a-node--on" cx="346" cy="146" r="5" />
    </g>
    <circle className="a-sig a-pulse" cx="352" cy="84" r="10" />
    <text className="a-text a-text--w" x="352" y="88" textAnchor="middle">3</text>
  </>
)

const SCENES = {
  healthcare: [Healthcare, 'Monitoring vitals in real time'],
  legal: [Legal, 'Weighing matters and documents'],
  logistics: [Logistics, 'Tracking a shipment across hubs'],
  education: [Education, 'Learners progressing through a course'],
  'media-ott': [Media, 'Streaming live to every device'],
  travel: [Travel, 'Routing a flight, booking a seat'],
  retail: [Retail, 'Stock and offers in one view'],
  construction: [Construction, 'Tracking floors as they go up'],
  sports: [Sports, 'Following the play, live'],
  marketplace: [Marketplace, 'Matching buyers with sellers'],
  finance: [Finance, 'Reading the market as it moves'],
  'social-media': [Social, 'A feed that keeps people coming back'],
  insurance: [Insurance, 'Protecting every claim'],
  manufacturing: [Manufacturing, 'Watching the line, every unit'],
  'it-telecom': [Telecom, 'Signal out, servers in sync'],
  'beauty-lifestyle': [Beauty, 'Booking the next appointment'],
  'on-demand': [OnDemand, 'Rider on the way'],
  ecommerce: [Ecommerce, 'From product page to paid'],
}

const IndustryArtifact = ({ slug, Icon, name }) => {
  const [Scene, status] = SCENES[slug] || SCENES.ecommerce
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
      <div className="ax-foot" aria-hidden="true"><span>{name}</span><span>Hunexture</span></div>
    </figure>
  )
}

export default IndustryArtifact
