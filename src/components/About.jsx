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
      icon: '💡',
      title: 'Innovation First',
      description: 'We stay 3 steps ahead of the curve — bringing bleeding-edge AI and engineering to every project we touch.'
    },
    {
      icon: '👥',
      title: 'Human-Centered',
      description: 'Technology serves people. We design intelligent systems that amplify human potential, not replace it.'
    },
    {
      icon: '🚀',
      title: 'Rapid Delivery',
      description: 'Agile by default. We ship production-ready solutions fast, with regular demos and zero compromises on quality.'
    },
    {
      icon: '📈',
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
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">About Hunexture</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            At the intersection of human ambition and intelligent technology —
            we build solutions that move businesses forward.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="about-stats scroll-animate" ref={statsRef}>
          {aboutStats.map((stat, index) => (
            <div
              key={index}
              className="about-stat-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="about-stat-value">{counts[index]}{stat.suffix}</h3>
              <p className="about-stat-label">{stat.label}</p>
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
              <div className="vision-item">
                <h4>Our Mission</h4>
                <p>
                  Empower businesses with intelligent technology that drives innovation,
                  efficiency, and compounding growth in an ever-evolving digital landscape.
                </p>
              </div>
              <div className="vision-item">
                <h4>Our Vision</h4>
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
                    <div key={index} className="feature-card carousel-card">
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
                    className="feature-card scroll-animate"
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
