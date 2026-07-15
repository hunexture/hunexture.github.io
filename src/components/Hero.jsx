import React from 'react'
import { FaRocket, FaBrain, FaCode } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero/tech-background.svg)`
      }}
    >
      <div className="hero-content">
        <div className="hero-badge tech-font">
          <span className="badge-dot"></span>
          AI-Powered Solutions
        </div>

        <h1 className="hero-title">
          Building the Next Human Future
        </h1>

        <p className="hero-description">
          We engineer AI-first solutions that automate intelligently, scale effortlessly,
          and deliver measurable results — from custom ML models to cloud-native platforms,
          built for businesses that refuse to settle.
        </p>

        <div className="hero-cta">
          <a href="#contact" className="btn-primary">
            Get Started
            <FaRocket className="btn-icon" />
          </a>
          <a href="#portfolio" className="btn-secondary">
            View Our Work
          </a>
        </div>

        <div className="hero-clients">
          <p className="hero-clients-label tech-font">Trusted technologies &amp; partnerships</p>
          <div className="hero-clients-list">
            {['AWS Partner', 'Google Cloud', 'React', 'ISO 9001', 'OpenAI'].map((name) => (
              <span key={name} className="hero-client-badge tech-font">{name}</span>
            ))}
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item glass-panel">
            <FaBrain className="stat-icon" />
            <div className="stat-content">
              <h3 className="tech-font">50+</h3>
              <p>AI Projects</p>
            </div>
          </div>
          <div className="stat-item glass-panel">
            <FaCode className="stat-icon" />
            <div className="stat-content">
              <h3 className="tech-font">100+</h3>
              <p>Solutions Delivered</p>
            </div>
          </div>
          <div className="stat-item glass-panel">
            <FaRocket className="stat-icon" />
            <div className="stat-content">
              <h3 className="tech-font">99%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          >
            <source src={`${process.env.PUBLIC_URL}/video/ai-video-v3.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Floating glassmorphic HUD */}
          <div className="hero-hud-panel glass-panel">
            <div className="hud-header">
              <span className="hud-dot"></span>
              <span className="tech-font">ENGINE SYSTEM v2.6</span>
            </div>
            <div className="hud-content">
              <div className="hud-row">
                <span className="hud-label">NEURAL NODE:</span>
                <span className="hud-val tech-font text-gradient">ACTIVE</span>
              </div>
              <div className="hud-row">
                <span className="hud-label">SYS LATENCY:</span>
                <span className="hud-val tech-font">0.02ms</span>
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

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p className="tech-font">Scroll to explore</p>
      </div>
    </section>
  )
}

export default Hero
