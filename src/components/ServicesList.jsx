import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { servicesData } from '../data/servicesData'
import './ServicesList.css'

const ServicesList = () => {
  const navigate = useNavigate()
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="sl-container">
      {/* Precision Ambient Network Background */}
      <div className="sl-network-bg" aria-hidden="true">
        <svg className="sl-network-svg" width="100%" height="100%">
          <defs>
            <radialGradient id="network-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--electric-blue)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--electric-blue)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--neon-cyan)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--neon-purple)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Static tech grid lines */}
          <path d="M 0,100 L 2000,100 M 0,300 L 2000,300 M 0,600 L 2000,600 M 0,900 L 2000,900" stroke="var(--glass-border)" strokeWidth="0.5" />
          <path d="M 200,0 L 200,2000 M 600,0 L 600,2000 M 1000,0 L 1000,2000 M 1400,0 L 1400,2000" stroke="var(--glass-border)" strokeWidth="0.5" />

          {/* Dynamic glowing lines that animate based on hovered card */}
          {servicesData.map((service, index) => {
            const isActive = hoveredId === service.id
            const yOffset = 150 + index * 120
            return (
              <g key={`net-${service.id}`} className={`sl-net-group ${isActive ? 'active' : ''}`}>
                <path 
                  d={`M -50,${yOffset} C 400,${yOffset} 600,${yOffset + 50} 800,450 C 1000,450 1200,${yOffset - 50} 1600,${yOffset}`} 
                  fill="none" 
                  stroke="url(#line-grad)" 
                  strokeWidth={isActive ? "2" : "0.5"} 
                  strokeDasharray={isActive ? "8,8" : "none"}
                  className="sl-net-path"
                />
                {isActive && (
                  <circle cx="800" cy="450" r="8" fill="var(--electric-blue)" className="sl-net-pulse" />
                )}
              </g>
            )
          })}
        </svg>
      </div>

      <header className="sl-header">
        <span className="sl-subtitle tech-font">OUR CAPABILITIES</span>
        <h1 className="sl-title">Explore Services</h1>
        <div className="sl-underline"></div>
        <p className="sl-desc">
          High-performance development, custom AI solutions, and intelligent engineering designed to scale your operations.
        </p>
      </header>

      <main className="sl-grid" role="list">
        {servicesData.map((service) => {
          const Icon = service.icon
          const isHovered = hoveredId === service.id
          return (
            <article 
              key={service.id} 
              className={`sl-card ${isHovered ? 'hovered' : ''}`}
              onClick={() => {
                if (service.slug === 'ai-solutions') {
                  navigate('/services/ai-solutions')
                } else {
                  navigate(`/services/${service.slug}`)
                }
              }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              role="listitem"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  if (service.slug === 'ai-solutions') {
                    navigate('/services/ai-solutions')
                  } else {
                    navigate(`/services/${service.slug}`)
                  }
                }
              }}
            >
              <div className="sl-card-glow" />
              <div className="sl-card-content">
                <div className="sl-icon-wrapper">
                  <Icon className="sl-icon" />
                </div>
                <h2 className="sl-card-title">{service.title}</h2>
                <p className="sl-card-desc">{service.shortDescription}</p>
                <ul className="sl-features-list" aria-label={`Key features of ${service.title}`}>
                  {service.features?.slice(0, 3).map((feature, i) => (
                    <li key={i} className="sl-feature-item">
                      <span className="sl-bullet"></span>
                      <span className="sl-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="sl-card-footer">
                  <span className="sl-card-link tech-font">
                    LEARN MORE <span className="sl-arrow">&rarr;</span>
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

export default ServicesList

