import React, { useEffect, useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'
import './Services.css'

const Services = () => {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const hoveredRef = useRef(false)
  const offsetRef = useRef(0)
  const velocityRef = useRef(0)
  const rafRef = useRef(null)

  const services = servicesData.map(service => ({
    ...service,
    icon: <service.icon />
  }))

  // scroll-in animation observer
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
      { threshold: 0.1 }
    )
    const els = sectionRef.current
      ? sectionRef.current.querySelectorAll('.scroll-animate')
      : []
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // wheel → horizontal scroll
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const getMaxOffset = () => {
      // max we can slide left = total card row width minus visible container width
      return -(track.scrollWidth - track.parentElement.clientWidth)
    }

    const tick = () => {
      if (Math.abs(velocityRef.current) < 0.3) {
        velocityRef.current = 0
        rafRef.current = null
        return
      }

      velocityRef.current *= 0.94              // smooth deceleration
      offsetRef.current += velocityRef.current

      // Hard clamp — stop at first card (0) or last card (maxOffset)
      const max = getMaxOffset()
      if (offsetRef.current > 0) {
        offsetRef.current = 0
        velocityRef.current = 0
      }
      if (offsetRef.current < max) {
        offsetRef.current = max
        velocityRef.current = 0
      }

      track.style.transform = `translateX(${offsetRef.current}px)`
      rafRef.current = requestAnimationFrame(tick)
    }

    const onWheel = (e) => {
      if (!hoveredRef.current) return
      e.preventDefault()

      const delta = e.deltaY * 0.35           // scroll sensitivity
      velocityRef.current -= delta
      // cap max speed
      velocityRef.current = Math.max(-12, Math.min(12, velocityRef.current))

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', onWheel)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="services-container">
        <div className="section-header scroll-animate">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            From AI automation to cloud infrastructure — every service is engineered
            to accelerate your growth and sharpen your competitive edge.
          </p>
        </div>
      </div>

      {/* Hover-scroll carousel */}
      <div
        className="services-carousel-outer"
        onMouseEnter={() => { hoveredRef.current = true }}
        onMouseLeave={() => { hoveredRef.current = false }}
      >
        <div className="services-carousel-track" ref={trackRef}>
          {services.map((service, index) => (
            <div key={index} className="service-card scroll-animate" style={{ transitionDelay: `${index * 0.08}s` }}>
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaArrowRight className="feature-bullet" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={`/services/${service.slug}`} className="service-cta">
                <img src={`${process.env.PUBLIC_URL}/images/icons/learn-more.svg`} alt="Learn More" className="learn-icon" />
                Learn More
                <FaArrowRight className="cta-icon" />
              </Link>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
