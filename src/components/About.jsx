import React, { useState, useEffect, useRef } from 'react'
import './About.css'

const aboutStatsData = [
  { target: 5,  suffix: '+', label: 'Years of Innovation' },
  { target: 20, suffix: '+', label: 'Expert Engineers' },
  { target: 10, suffix: '+', label: 'Industries Served' },
  { target: 30, suffix: '+', label: 'Happy Clients' }
]

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [counts, setCounts] = useState(aboutStatsData.map(() => 0))
  const [counted, setCounted] = useState(false)
  const sectionRef = useRef(null)
  const statsRef = useRef(null)

  const aboutStats = aboutStatsData

  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="about-svg-icon">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      ),
      title: 'Innovation First',
      description: 'We stay 3 steps ahead of the curve — bringing bleeding-edge AI and engineering to every project we touch.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="about-svg-icon">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Human-Centered',
      description: 'Technology serves people. We design intelligent systems that amplify human potential, not replace it.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="about-svg-icon">
          <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h8c0-2.31-1-4.24-2.5-5.5" />
          <path d="M12 2C6 2 2 6 2 12c0 2.5 1 4.5 2.5 6l6-6 7.5-7.5-6-1.5Z" />
        </svg>
      ),
      title: 'Rapid Delivery',
      description: 'Agile by default. We ship production-ready solutions fast, with regular demos and zero compromises on quality.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="about-svg-icon">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
      title: 'Built to Scale',
      description: 'From MVP to enterprise — our architectures grow with your business, engineered for today and tomorrow.'
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Count-up animation when stats enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true)
          aboutStatsData.forEach((stat, i) => {
            const duration = 1500
            const steps = 40
            const stepValue = stat.target / steps
            let current = 0
            const timer = setInterval(() => {
              current += stepValue
              if (current >= stat.target) {
                current = stat.target
                clearInterval(timer)
              }
              setCounts(prev => {
                const next = [...prev]
                next[i] = Math.floor(current)
                return next
              })
            }, duration / steps)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [counted])

  // Scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    const elements = sectionRef.current
      ? sectionRef.current.querySelectorAll('.scroll-animate')
      : []
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [isMobile])

  // Auto-scroll carousel on mobile
  useEffect(() => {
    if (!isMobile) return
    const autoScrollInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(autoScrollInterval)
  }, [isMobile, features.length])

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % features.length)
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + features.length) % features.length)
  const goToSlide = (index) => setCurrentSlide(index)

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX)
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) nextSlide()
    if (touchStart - touchEnd < -75) prevSlide()
  }

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className="section-header scroll-animate">
          <span className="section-tag tech-font">Who We Are</span>
          <h2 className="section-title">About Hunexture</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            At the intersection of human ambition and intelligent technology —
            we build solutions that move businesses forward.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="about-stats scroll-animate glass-panel" ref={statsRef}>
          {aboutStats.map((stat, index) => (
            <div
              key={index}
              className="about-stat-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="about-stat-value tech-font">{counts[index]}{stat.suffix}</h3>
              <p className="about-stat-label tech-font">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="about-content">
          {/* Left: Text */}
          <div className="about-text scroll-animate">
            <p className="about-intro">
              <span className="highlight">Hunexture</span> stands at the intersection of
              <span className="highlight"> human innovation</span> and
              <span className="highlight"> intelligent technology</span>.
            </p>

            <p className="about-description">
              Founded on the belief that technology should amplify human potential, we've built
              a reputation for delivering AI-powered, scalable solutions that create real,
              measurable business value. Our engineers combine deep technical mastery with
              creative problem-solving to tackle the challenges that matter most.
            </p>

            <p className="about-description">
              From machine learning pipelines to cloud-native platforms, we don't just write
              code — we craft intelligent systems that empower organizations to lead in the
              digital age. Every line of code has a purpose. Every solution has a story.
            </p>

            <div className="about-vision">
              <div className="vision-item glass-panel">
                <h4 className="tech-font">Our Mission</h4>
                <p>
                  Empower businesses with intelligent technology that drives innovation,
                  efficiency, and compounding growth in an ever-evolving digital landscape.
                </p>
              </div>
              <div className="vision-item glass-panel">
                <h4 className="tech-font">Our Vision</h4>
                <p>
                  To be the defining force in human-centered AI — shaping a future where
                  intelligent systems seamlessly amplify every dimension of business and life.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="about-features-wrapper">
            {isMobile ? (
              <div className="carousel-container">
                <div
                  className="about-features-carousel"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {features.map((feature, index) => (
                    <div key={index} className="feature-card carousel-card glass-panel">
                      <div className="feature-icon">{feature.icon}</div>
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Previous slide">‹</button>
                <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next slide">›</button>

                <div className="carousel-dots">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${currentSlide === index ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="about-features">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-card scroll-animate glass-panel"
                    style={{ transitionDelay: `${index * 0.12}s` }}
                  >
                    <div className="feature-icon">{feature.icon}</div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
