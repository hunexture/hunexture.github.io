import React, { useEffect, useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'
import Carousel from './Carousel'
import './Services.css'

const Services = () => {
  const sectionRef = useRef(null)

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

      <div className="services-carousel-outer">
        <Carousel label="Our services" slideWidth="min(400px, 85%)">
          {servicesData.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={service.slug} className="service-card scroll-animate glass-panel" style={{ transitionDelay: `${index * 0.08}s` }}>
                <div className="service-header">
                  <div className="service-icon"><Icon aria-hidden="true" /></div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaArrowRight className="feature-bullet" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={`/services/${service.slug}`} className="service-cta">
                  <img src={`${process.env.PUBLIC_URL}/images/icons/learn-more.svg`} alt="" className="learn-icon" />
                  Learn more<span className="visually-hidden"> about {service.title}</span>
                  <FaArrowRight className="cta-icon" aria-hidden="true" />
                </Link>
              </div>
            )
          })}
        </Carousel>
      </div>
    </section>
  )
}

export default Services
