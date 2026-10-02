import React from 'react'
import { builtOnStack } from '../data/companyData'
import HeroLiveDrawing from './HeroLiveDrawing'
import './Hero.css'

// The delivery pipeline drawn as an engineering schematic.
// Stages are a real sequence, so they are numbered.
const stages = [
  { name: 'Discover', note: 'Goals, users, risks and a written scope' },
  { name: 'Design', note: 'UX flows and system architecture' },
  { name: 'Build', note: 'Two-week sprints with a working demo each time', loop: true },
  { name: 'Deliver', note: 'Deploy, monitor, iterate and hand over' }
]

const Hero = () => (
  <section id="hero" className="bp-hero" aria-labelledby="hero-title">
    <div className="bp-hero-inner">
      <div className="bp-hero-top">
        <div className="bp-hero-copy">
          <h1 id="hero-title" className="bp-hero-title">
            AI software, engineered to spec.
          </h1>
          <p className="bp-hero-lede">
            Hunexture designs, builds and runs AI-powered products for startups and growing
            businesses. You get a clear plan, a working demo every two weeks, and code you own.
          </p>
          <div className="bp-hero-actions">
            <a href="#contact" className="bp-btn bp-btn-primary">Book a discovery call</a>
            <a href="#portfolio" className="bp-btn bp-btn-ghost">See our work</a>
          </div>
          <p className="bp-hero-stack">
            Built on {builtOnStack.slice(0, -1).join(', ')} and {builtOnStack[builtOnStack.length - 1]}.
          </p>
        </div>

        <HeroLiveDrawing />
      </div>

      <figure className="bp-drawing" aria-label="How a project moves from discovery to delivery">
        <ol className="bp-stages">
          {stages.map((stage, i) => (
            <li key={stage.name} className="bp-stage" style={{ '--i': i }}>
              <span className="bp-stage-num" aria-hidden="true">{i + 1}</span>
              <span className="bp-stage-name">{stage.name}</span>
              <span className="bp-stage-note">{stage.note}</span>
              {stage.loop && (
                <span className="bp-stage-loop">
                  <svg viewBox="0 0 40 24" aria-hidden="true" focusable="false">
                    <path d="M6 18 A12 10 0 1 1 34 18" fill="none" />
                    <path d="M30 14 L34 18 L37 13" fill="none" />
                  </svg>
                  repeats every 2 weeks
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="bp-dimension" aria-hidden="true">
          <span className="bp-dimension-label">Typical MVP: 6–10 weeks</span>
        </div>
        <p className="visually-hidden">A typical MVP takes 6 to 10 weeks from discovery to delivery.</p>

        <figcaption className="bp-titleblock">
          <span><b>Drawing</b> Delivery pipeline</span>
          <span><b>Contract</b> NDA before discovery</span>
          <span><b>Ownership</b> Code and IP transfer to you</span>
        </figcaption>
      </figure>
    </div>
  </section>
)

export default Hero
