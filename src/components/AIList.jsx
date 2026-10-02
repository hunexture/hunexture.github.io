import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { aiData } from '../data/aiData'
import { aiTrends, aiStackLayers, aiProcess, aiGovernance, aiFaq } from '../data/insights'
import './AIList.css'

/* Hero artifact: how a question travels through a retrieval-based assistant. */
const PipelineFigure = () => (
  <figure className="al-fig">
    <svg viewBox="0 0 460 330" role="img" aria-label="Diagram: documents are indexed, a question retrieves passages, a model writes an answer with citations.">
      <g className="al-fig-docs">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${18 + i * 8} ${28 + i * 8})`}>
            <rect width="60" height="76" className="al-fig-box" />
            <line x1="10" y1="18" x2="48" y2="18" className="al-fig-rule" />
            <line x1="10" y1="30" x2="40" y2="30" className="al-fig-rule" />
            <line x1="10" y1="42" x2="46" y2="42" className="al-fig-rule" />
          </g>
        ))}
        <text x="18" y="140" className="al-fig-label">Your documents</text>
      </g>
      <path d="M100 82 H170" className="al-fig-link" />
      <path d="M100 82 H170" className="al-fig-packet" />

      <g transform="translate(170 40)">
        <ellipse cx="46" cy="14" rx="40" ry="12" className="al-fig-box" />
        <path d="M6 14 V70 a40 12 0 0 0 80 0 V14" className="al-fig-box al-fig-open" />
        <path d="M6 42 a40 12 0 0 0 80 0" className="al-fig-rule" />
        {[26, 46, 66].map((x, i) => <circle key={x} cx={x} cy={30 + (i % 2) * 22} r="3.5" className="al-fig-dot" style={{ animationDelay: `${i * 0.4}s` }} />)}
        <text x="0" y="100" className="al-fig-label">Search index</text>
      </g>

      <path d="M262 82 H318" className="al-fig-link" />
      <path d="M262 82 H318" className="al-fig-packet al-fig-packet--b" />

      <g transform="translate(318 34)">
        <rect width="124" height="96" className="al-fig-hot" />
        <circle cx="62" cy="38" r="16" className="al-fig-ring" />
        <circle cx="62" cy="38" r="5" className="al-fig-core" />
        <text x="0" y="116" className="al-fig-label">Language model</text>
      </g>

      <g transform="translate(18 206)">
        <rect width="424" height="96" className="al-fig-box" />
        <text x="16" y="26" className="al-fig-q">How many leave days carry over?</text>
        <line x1="16" y1="38" x2="408" y2="38" className="al-fig-rule" />
        <text x="16" y="62" className="al-fig-a">Up to 10 days carry into the next year.</text>
        <g transform="translate(16 72)">
          <rect width="96" height="16" className="al-fig-cite" />
          <text x="8" y="12" className="al-fig-cite-t">HR policy · p.12</text>
        </g>
      </g>
      <path d="M380 152 V206" className="al-fig-link" />
      <path d="M380 152 V206" className="al-fig-packet al-fig-packet--c" />
    </svg>
    <figcaption>One question, grounded answer, visible source.</figcaption>
  </figure>
)

const AIList = () => {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(null)
  const [activeLayer, setActiveLayer] = useState(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const goContact = () => {
    navigate('/')
    setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 200)
  }

  return (
    <main className="theme-ai al-page">
      <header className="al-hero" aria-labelledby="al-title">
        <div className="al-hero-inner">
          <div className="al-hero-copy">
            <p className="al-kicker">AI engineering</p>
            <h1 id="al-title" className="al-title">AI that works on your data and stays under your control</h1>
            <p className="al-lede">
              Agents, retrieval, vision and forecasting, built with test sets, access control and cost limits from
              the first week. We pick the smallest model that meets your quality bar.
            </p>
            <div className="al-actions">
              <button type="button" className="al-btn al-btn--solid" onClick={goContact}>Plan an AI pilot</button>
              <a href="#solutions" className="al-btn">See what we build</a>
            </div>
          </div>
          <PipelineFigure />
        </div>
      </header>

      <section className="al-section al-section--sunk" aria-labelledby="al-demand">
        <div className="al-wrap">
          <div className="al-head">
            <h2 id="al-demand">What companies are asking for in 2026</h2>
            <p>These six topics come up in almost every conversation. Each has a pattern we have already proven.</p>
          </div>
          <ul className="al-trends">
            {aiTrends.map((t) => (
              <li key={t.title} className="al-trend">
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="solutions" className="al-section" aria-labelledby="al-solutions">
        <div className="al-wrap">
          <div className="al-head">
            <h2 id="al-solutions">Solutions</h2>
            <p>Pick a starting point. Each page lists the offers, the stack and what a first release looks like.</p>
          </div>
          <ul className="al-grid">
            {aiData.map((ai) => {
              const Icon = ai.icon
              return (
                <li key={ai.id}>
                  <Link to={`/ai/${ai.slug}`} className="al-card">
                    <span className="al-card-top">
                      <span className="al-icon" aria-hidden="true"><Icon /></span>
                      <span className="al-card-count">{ai.whatWeOffer?.length || 0} offers</span>
                    </span>
                    <h3 className="al-card-title">{ai.name}</h3>
                    <p className="al-card-desc">{ai.shortDescription}</p>
                    <ul className="al-card-list">
                      {ai.whatWeOffer?.slice(0, 3).map((o) => <li key={o.title}>{o.title}</li>)}
                    </ul>
                    <span className="al-card-more">View solution</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="al-section al-section--ink" aria-labelledby="al-stack">
        <div className="al-wrap al-split">
          <div>
            <h2 id="al-stack">The production stack behind every build</h2>
            <p className="al-split-text">
              A demo needs a model. A product needs the layers around it. Select a layer to see what we put there.
            </p>
          </div>
          <ol className="al-layers">
            {aiStackLayers.map((l, i) => (
              <li key={l.name}>
                <button
                  type="button"
                  className={`al-layer${activeLayer === i ? ' is-active' : ''}`}
                  aria-expanded={activeLayer === i}
                  onClick={() => setActiveLayer(activeLayer === i ? null : i)}
                >
                  <span className="al-layer-name">{l.name}</span>
                  <span className="al-layer-items">{l.items}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="al-section" aria-labelledby="al-process">
        <div className="al-wrap">
          <div className="al-head">
            <h2 id="al-process">From idea to production in five steps</h2>
            <p>A written pass mark before any build, so everyone agrees what success looks like.</p>
          </div>
          <ol className="al-steps">
            {aiProcess.map((s, i) => (
              <li key={s.title} className="al-step">
                <span className="al-step-n" aria-hidden="true">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="al-section al-section--sunk" aria-labelledby="al-gov">
        <div className="al-wrap al-split">
          <div>
            <h2 id="al-gov">Responsible by design</h2>
            <p className="al-split-text">
              Risk review, logging and human handoff are part of the build. We map each project to the
              frameworks your auditors will ask about.
            </p>
          </div>
          <ul className="al-gov">
            {aiGovernance.map((g) => (
              <li key={g.name}><strong>{g.name}</strong><span>{g.note}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="al-section" aria-labelledby="al-faq">
        <div className="al-wrap al-faq-wrap">
          <h2 id="al-faq">Common questions</h2>
          <div className="al-faq">
            {aiFaq.map((f, i) => (
              <div key={f.q} className={`al-faq-item${openFaq === i ? ' is-open' : ''}`}>
                <h3>
                  <button type="button" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {f.q}<span className="al-faq-sign" aria-hidden="true" />
                  </button>
                </h3>
                <div className="al-faq-a"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="al-cta">
        <div className="al-wrap al-cta-inner">
          <div>
            <h2>Start with a two-week pilot</h2>
            <p>Bring one process and some sample data. You leave with a working prototype and a clear go or no-go.</p>
          </div>
          <button type="button" className="al-btn al-btn--light" onClick={goContact}>Book a discovery call</button>
        </div>
      </section>
    </main>
  )
}

export default AIList
