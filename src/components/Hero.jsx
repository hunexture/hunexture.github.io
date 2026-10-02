import React, { useEffect, useRef } from 'react'
import { FaRocket, FaUsers, FaHandshake } from 'react-icons/fa'
import { getStat, formatStat, builtOnStack } from '../data/companyData'
import './Hero.css'

const heroStats = [
  { stat: getStat('years'), icon: FaRocket },
  { stat: getStat('engineers'), icon: FaUsers },
  { stat: getStat('clients'), icon: FaHandshake }
]

const Hero = () => {
  const videoRef = useRef(null)

  // Respect prefers-reduced-motion: don't autoplay the background video
  useEffect(() => {
    const video = videoRef.current
    if (!video || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      if (mq.matches) {
        video.pause()
      } else {
        video.play().catch(() => {})
      }
    }
    apply()
    mq.addEventListener?.('change', apply)
    return () => mq.removeEventListener?.('change', apply)
  }, [])

  return (
    <section id="hero" className="hero">
      {/* Rich Tech Background matching hunexture.com */}
      <div className="hero-tech-bg" aria-hidden="true">
        <div
          className="hero-bg-svg-layer"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero/tech-background.svg)` }}
        />
        <div className="hero-orb-magenta" />
        <div className="hero-orb-indigo" />
        <div className="hero-grid-lines" />
      </div>

      <div className="hero-content">
        <div className="hero-badge tech-font">
          <span className="badge-dot"></span>
          AI &amp; Software Engineering Partner
        </div>

        <h1 className="hero-title">
          Building the Next <br />
          <span className="hero-title-highlight">Human Future</span>
        </h1>

        <p className="hero-description">
          We design, build and run AI-powered products for startups and growing businesses —
          from custom ML models to cloud-native platforms. NDA-first, demo every two weeks,
          and you own the code.
        </p>

        <div className="hero-cta">
          <a href="#contact" className="btn-primary">
            Book a Discovery Call
            <FaRocket className="btn-icon" />
          </a>
          <a href="#portfolio" className="btn-secondary">
            View Our Work
          </a>
        </div>

        <div className="hero-clients">
          <p className="hero-clients-label">Built on</p>
          <ul className="hero-clients-list">
            {builtOnStack.map((name) => (
              <li key={name} className="hero-client-badge tech-font">{name}</li>
            ))}
          </ul>
        </div>

        <div className="hero-stats">
          {heroStats.map(({ stat, icon: Icon }) => (
            <div key={stat.key} className="stat-item glass-panel">
              <Icon className="stat-icon" aria-hidden="true" />
              <div className="stat-content">
                <h3 className="tech-font">{formatStat(stat)}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-video-container">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
            tabIndex={-1}
          >
            <source src={`${process.env.PUBLIC_URL}/video/ai-video-v3.mp4`} type="video/mp4" />
          </video>

          {/* Decorative card: summarises our real delivery cadence (not live telemetry) */}
          <div className="hero-hud-panel glass-panel">
            <div className="hud-header">
              <span className="hud-dot"></span>
              <span className="tech-font">DELIVERY CADENCE</span>
            </div>
            <div className="hud-content">
              <div className="hud-row">
                <span className="hud-label">Typical MVP</span>
                <span className="hud-val tech-font text-gradient">6–10 wks</span>
              </div>
              <div className="hud-row">
                <span className="hud-label">Working demo</span>
                <span className="hud-val tech-font">every 2 wks</span>
              </div>
              <div className="hud-chart">
                <div className="hud-bar" style={{ '--height': '35%' }}></div>
                <div className="hud-bar" style={{ '--height': '60%' }}></div>
                <div className="hud-bar" style={{ '--height': '85%' }}></div>
                <div className="hud-bar" style={{ '--height': '45%' }}></div>
                <div className="hud-bar" style={{ '--height': '70%' }}></div>
                <div className="hud-bar" style={{ '--height': '95%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p className="tech-font">Scroll to explore</p>
      </div>
    </section>
  )
}

export default Hero
