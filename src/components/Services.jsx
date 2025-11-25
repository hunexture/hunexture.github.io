import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'
import './Services.css'

const Services = () => {
  const services = servicesData.map(service => ({
    ...service,
    icon: <service.icon />
  }))

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.15}s` }}>
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
                <img src="/images/icons/learn-more.svg" alt="Learn More" className="learn-icon" />
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
