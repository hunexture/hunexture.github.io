import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { engagementModels } from '../data/companyData'
import './EngagementModels.css'

const EngagementModels = () => (
  <section id="engagement-models" className="engagement-models">
    <div className="em-container">
      <div className="section-header">
        <span className="section-tag">Engagement Models</span>
        <h2 className="section-title">How Pricing Works</h2>
        <div className="title-underline"></div>
        <p className="section-description">
          Three ways to work with us. Not sure which fits? We'll recommend one on the
          free discovery call and send a written proposal within 48 hours.
        </p>
      </div>

      <ul className="em-grid">
        {engagementModels.map((model) => (
          <li key={model.key} className="em-card glass-panel">
            <h3 className="em-name">{model.name}</h3>
            <p className="em-best-for"><strong>Best for:</strong> {model.bestFor}</p>
            <p className="em-how">{model.howItWorks}</p>
            <p className="em-pricing">{model.pricing}</p>
          </li>
        ))}
      </ul>

      <div className="em-cta">
        <a href="#contact" className="btn-primary">
          Get a Proposal
          <FaArrowRight className="btn-icon" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
)

export default EngagementModels
