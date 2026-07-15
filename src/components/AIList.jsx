import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { aiData } from '../data/aiData'
import './AIList.css'

const AIList = () => {
  const navigate = useNavigate()
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="al-container">
      {/* Dynamic computational vector grid background */}
      <div className="al-network-bg" aria-hidden="true">
        <svg className="al-network-svg" width="100%" height="100%">
          <defs>
            <linearGradient id="ai-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--light-blue)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--electric-blue)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Cyber matrix grid */}
          <path d="M 0,150 L 2000,150 M 0,450 L 2000,450 M 0,750 L 2000,750" stroke="var(--glass-border)" strokeWidth="0.5" />
          <path d="M 300,0 L 300,2000 M 700,0 L 700,2000 M 1100,0 L 1100,2000" stroke="var(--glass-border)" strokeWidth="0.5" />

          {/* Glowing matrix lines connecting elements */}
          {aiData.map((ai, index) => {
            const isActive = hoveredId === ai.id
            const yPos = 200 + index * 130
            return (
              <g key={`ai-net-${ai.id}`} className={`al-net-group ${isActive ? 'active' : ''}`}>
                <path 
                  d={`M -50,${yPos} Q 500,${yPos - 80} 750,380 T 1600,${yPos}`} 
                  fill="none" 
                  stroke="url(#ai-line-grad)" 
                  strokeWidth={isActive ? "2" : "0.5"} 
                  strokeDasharray={isActive ? "10,5" : "none"}
                  className="al-net-path"
                />
                {isActive && (
                  <circle cx="750" cy="380" r="8" fill="var(--light-blue)" className="al-net-pulse" />
                )}
              </g>
            )
          })}
        </svg>
      </div>

      <header className="al-header">
        <span className="al-subtitle tech-font">ARTIFICIAL INTELLIGENCE</span>
        <h1 className="al-title">GenAI & ML Solutions</h1>
        <div className="al-underline"></div>
        <p className="al-desc">
          Unlock modern operations with our state-of-the-art predictive algorithms, agentic workflows, and customized ML intelligence.
        </p>
      </header>

      <main className="al-grid" role="list">
        {aiData.map((ai) => {
          const Icon = ai.icon
          const isHovered = hoveredId === ai.id
          return (
            <article 
              key={ai.id} 
              className={`al-card ${isHovered ? 'hovered' : ''}`}
              onClick={() => navigate(`/ai/${ai.slug}`)}
              onMouseEnter={() => setHoveredId(ai.id)}
              onMouseLeave={() => setHoveredId(null)}
              role="listitem"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  navigate(`/ai/${ai.slug}`)
                }
              }}
            >
              <div className="al-card-glow" />
              <div className="al-card-inner">
                <div className="al-icon-wrapper">
                  <Icon className="al-icon" />
                </div>
                <h2 className="al-card-title">{ai.name}</h2>
                <div className="al-card-headline">{ai.headline}</div>
                <p className="al-card-desc">{ai.shortDescription}</p>
                
                {ai.whatWeOffer && ai.whatWeOffer.length > 0 && (
                  <div className="al-offers">
                    <span className="al-offers-title">Capabilities Included:</span>
                    <div className="al-offers-tags">
                      {ai.whatWeOffer.slice(0, 3).map((offer, idx) => (
                        <span key={idx} className="al-offer-tag tech-font">{offer.title}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="al-card-footer">
                  <span className="al-card-link tech-font">
                    EXPLORE AI SOLUTION <span className="al-arrow">&rarr;</span>
                  </span>
                </div>
              </div>
            </article>
          )
        })}
      </main>
    </div>
  )
}

export default AIList

