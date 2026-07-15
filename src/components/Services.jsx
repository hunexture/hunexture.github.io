import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'
import './Services.css'

const Services = () => {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const startOffsetRef = useRef(0)
  const offsetRef = useRef(0)

  const services = servicesData.map(service => ({
    ...service,
    icon: <service.icon />
  }))

  const isMovedRef = useRef(false)

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

  // Recalculate track constraints on resize
  useEffect(() => {
    const handleResize = () => {
      const track = trackRef.current
      if (!track) return
      const maxOffset = -(track.scrollWidth - track.parentElement.clientWidth)
      if (offsetRef.current < maxOffset) {
        offsetRef.current = maxOffset
        track.style.transform = `translateX(${maxOffset}px)`
      }
      if (offsetRef.current > 0) {
        offsetRef.current = 0
        track.style.transform = `translateX(0px)`
      }
      updateProgress()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Manage drag pointer move and up events on window to handle pointer leaving the element
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDraggingRef.current) return
      const track = trackRef.current
      if (!track) return

      const dx = e.clientX - startXRef.current
      if (Math.abs(dx) > 5) {
        isMovedRef.current = true
      }

      let newOffset = startOffsetRef.current + dx
      const maxOffset = -(track.scrollWidth - track.parentElement.clientWidth)
      if (newOffset > 0) newOffset = 0
      if (newOffset < maxOffset) newOffset = maxOffset

      offsetRef.current = newOffset
      track.style.transform = `translateX(${newOffset}px)`
      updateProgress()
    }

    const handlePointerUp = () => {
      if (!isDraggingRef.current) return
      isDraggingRef.current = false
      const track = trackRef.current
      if (track) {
        track.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
      }
      // Reset isMoved after a tiny delay so the click event interceptor has time to read it
      setTimeout(() => {
        isMovedRef.current = false
      }, 50)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [])

  const updateProgress = () => {
    const track = trackRef.current
    if (!track) return
    const maxOffset = -(track.scrollWidth - track.parentElement.clientWidth)
    if (maxOffset === 0) {
      setScrollProgress(0)
      return
    }
    const progress = (offsetRef.current / maxOffset) * 100
    setScrollProgress(Math.min(100, Math.max(0, progress)))
  }

  const handlePointerDown = (e) => {
    // Only drag with primary mouse button or touch
    if (e.button !== 0 && e.pointerType === 'mouse') return

    isDraggingRef.current = true
    isMovedRef.current = false
    startXRef.current = e.clientX
    startOffsetRef.current = offsetRef.current
    
    const track = trackRef.current
    if (track) {
      track.style.transition = 'none'
    }
  }

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="services-container">
        <div className="section-header scroll-animate">
          <span className="section-tag tech-font">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            From AI automation to cloud infrastructure — every service is engineered
            to accelerate your growth and sharpen your competitive edge.
          </p>
        </div>
      </div>

      {/* Hover-drag carousel */}
      <div className="services-carousel-outer">
        <div
          className="services-carousel-track"
          ref={trackRef}
          onPointerDown={handlePointerDown}
          style={{ cursor: 'grab' }}
        >
          {services.map((service, index) => (
            <div key={index} className="service-card scroll-animate glass-panel" style={{ transitionDelay: `${index * 0.08}s` }}>
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
              <Link 
                to={`/services/${service.slug}`} 
                className="service-cta"
                onClick={(e) => {
                  if (isMovedRef.current) {
                    e.preventDefault()
                  }
                }}
              >
                <img src={`${process.env.PUBLIC_URL}/images/icons/learn-more.svg`} alt="Learn More" className="learn-icon" />
                Learn More
                <FaArrowRight className="cta-icon" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Scroll Progress Bar */}
      <div className="services-scroll-indicator scroll-animate">
        <div className="services-progress-track">
          <div
            className="services-progress-bar"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
        <span className="services-scroll-hint tech-font">DRAG TO EXPLORE</span>
      </div>
    </section>
  )
}

export default Services
