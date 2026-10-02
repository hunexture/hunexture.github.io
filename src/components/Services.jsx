import React from 'react'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'
import './Services.css'

const Services = () => (
  <section id="services" className="bp-section bp-section--sunk" aria-labelledby="services-title">
    <div className="bp-container">
      <div className="bp-head">
        <h2 id="services-title">What we build</h2>
        <p>
          Six disciplines, one team. Most projects combine two or three — for example an AI
          feature inside a web app running on cloud infrastructure we set up.
        </p>
      </div>

      <ul className="svc-schedule">
        {servicesData.map(service => {
          const Icon = service.icon
          return (
            <li key={service.slug} className="svc-row">
              <Link to={`/services/${service.slug}`} className="svc-link">
                <span className="svc-icon" aria-hidden="true"><Icon /></span>
                <span className="svc-name">{service.title}</span>
                <span className="svc-summary">{service.shortDescription}</span>
                <span className="svc-features">{service.features.join(', ')}</span>
                <span className="svc-more" aria-hidden="true">Details</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  </section>
)

export default Services
