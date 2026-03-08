import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'
import './Services.css'

const Services = () => {
  const sectionRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  const services = servicesData.map(service => ({
    ...service,
    icon: <service.icon />
  }))

  // Duplicate cards for seamless infinite loop
  const doubled = [...services, ...services]

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

    const elements = sectionRef.current
      ? sectionRef.current.querySelectorAll('.scroll-animate')
      : []
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const renderCard = (service, index) => (
    <div key={index} className="service-card">
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
  )

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

      {/* Full-width marquee — hover to scroll */}
      <div
        className={`services-marquee-outer${hovered ? ' is-hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="services-marquee-track">
          {doubled.map((service, index) => renderCard(service, index))}
        </div>
      </div>
    </section>
  )
}

export default Services

