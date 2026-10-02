import React from 'react'
import { engagementModels } from '../data/companyData'
import './EngagementModels.css'

// Small schematic per model, drawn so the shape of each model reads at a glance:
// a fixed box with both dimensions locked, a repeating monthly cycle, and a
// meter of hours that varies week to week.
const ModelDiagram = ({ kind }) => {
  if (kind === 'fixed') {
    return (
      <svg className="em-diagram" viewBox="0 0 160 64" aria-hidden="true" focusable="false">
        <rect x="24" y="18" width="112" height="34" className="em-d-fill" />
        <line x1="24" y1="8" x2="136" y2="8" className="em-d-dim" />
        <line x1="24" y1="4" x2="24" y2="12" className="em-d-dim" />
        <line x1="136" y1="4" x2="136" y2="12" className="em-d-dim" />
        <line x1="12" y1="18" x2="12" y2="52" className="em-d-dim" />
        <line x1="8" y1="18" x2="16" y2="18" className="em-d-dim" />
        <line x1="8" y1="52" x2="16" y2="52" className="em-d-dim" />
        <path d="M70 30 h20 v14 h-20 z M74 30 v-4 a6 6 0 0 1 12 0 v4" className="em-d-line" />
      </svg>
    )
  }
  if (kind === 'dedicated') {
    return (
      <svg className="em-diagram" viewBox="0 0 160 64" aria-hidden="true" focusable="false">
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(${8 + i * 38} 14)`}>
            <path d="M4 28 A14 14 0 1 1 30 28" className="em-d-line" />
            <path d="M25 24 L30 28 L34 22" className="em-d-line" />
          </g>
        ))}
        <line x1="8" y1="54" x2="152" y2="54" className="em-d-dim" />
      </svg>
    )
  }
  const hours = [22, 30, 14, 36, 26, 18, 32]
  return (
    <svg className="em-diagram" viewBox="0 0 160 64" aria-hidden="true" focusable="false">
      {hours.map((h, i) => (
        <rect key={i} x={10 + i * 21} y={54 - h} width="13" height={h} className="em-d-fill" />
      ))}
      <line x1="4" y1="54" x2="156" y2="54" className="em-d-line" />
    </svg>
  )
}

const EngagementModels = () => (
  <section id="engagement-models" className="bp-section bp-section--sunk" aria-labelledby="em-title">
    <div className="bp-container">
      <div className="bp-head">
        <h2 id="em-title">How pricing works</h2>
        <p>
          Three ways to engage. Not sure which fits? We'll recommend one on the free
          discovery call and send a written proposal within 48 hours.
        </p>
      </div>

      <ul className="em-grid">
        {engagementModels.map((model) => (
          <li key={model.key} className="em-card">
            <ModelDiagram kind={model.key} />
            <h3 className="em-name">{model.name}</h3>
            <p className="em-best-for">Best for {model.bestFor.charAt(0).toLowerCase() + model.bestFor.slice(1)}</p>
            <p className="em-how">{model.howItWorks}</p>
            <p className="em-pricing">{model.pricing}</p>
          </li>
        ))}
      </ul>

      <div className="em-cta">
        <a href="#contact" className="bp-btn bp-btn-primary">Get a proposal</a>
      </div>
    </div>
  </section>
)

export default EngagementModels
