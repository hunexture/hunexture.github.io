import React from 'react'
import { companyStats, formatStat } from '../data/companyData'
import ArchitectureDrawing from './ArchitectureDrawing'
import './About.css'

const About = () => (
  <section id="about" className="bp-section about" aria-labelledby="about-title">
    <div className="bp-container">
      <div className="bp-head">
        <h2 id="about-title">A senior team that owns the whole build.</h2>
        <p>
          Hunexture is an AI and software engineering company based in Ahmedabad, India.
          The same engineers scope, design, build and support your product, so nothing gets
          lost between hand-offs.
        </p>
      </div>

      <dl className="about-titleblock">
        {companyStats.map(stat => (
          <div key={stat.key} className="about-titleblock-cell">
            <dt>{stat.label}</dt>
            <dd>{formatStat(stat)}</dd>
          </div>
        ))}
      </dl>

      <div className="about-body">
        <div className="about-copy">
          <p>
            We work best with founders and product leads who need a dependable engineering
            partner rather than a vendor: people who want to see progress every two weeks,
            understand the trade-offs, and keep full ownership of what gets built.
          </p>
          <p>
            Our focus is practical AI — machine learning, LLM features, automation and data
            pipelines — built into web, mobile and cloud products that are designed to scale
            from the first pilot users to production.
          </p>
        </div>

        <ArchitectureDrawing />
      </div>
    </div>
  </section>
)

export default About
