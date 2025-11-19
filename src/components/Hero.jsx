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
        <div className="hero-badge">
          <span className="badge-dot"></span>
          AI-Powered Solutions
        </div>

        <h1 className="hero-title">
          Building the Next
          <span className="gradient-text"> Human Future</span>
        </h1>

        <p className="hero-description">
          Empowering businesses with cutting-edge AI solutions and innovative technology.
          We transform ideas into intelligent, scalable, and human-centered digital experiences.
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

        <div className="hero-stats">
          <div className="stat-item">
            <FaBrain className="stat-icon" />
            <div className="stat-content">
              <h3>50+</h3>
              <p>AI Projects</p>
            </div>
          </div>
          <div className="stat-item">
            <FaCode className="stat-icon" />
            <div className="stat-content">
              <h3>100+</h3>
              <p>Solutions Delivered</p>
            </div>
          </div>
          <div className="stat-item">
            <FaRocket className="stat-icon" />
            <div className="stat-content">
              <h3>99%</h3>
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
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  )
}

export default Hero
