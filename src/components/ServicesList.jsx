import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'
import { ServiceSchematic, StackFigure } from './ServiceSchematic'
import './ServicesList.css'

const ServicesList = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="sl-page">
      <header className="sl-hero" aria-labelledby="sl-title">
        <div className="sl-hero-inner">
          <div className="sl-hero-copy">
            <p className="sl-eyebrow">Services</p>
            <h1 id="sl-title" className="sl-title">What we build</h1>
            <p className="sl-lede">
              Six disciplines, one team. Most projects combine two or three, for example an AI
              feature inside a web app running on cloud infrastructure we set up.
            </p>
          </div>
          <StackFigure />
        </div>
      </header>

      <section className="bp-section bp-section--sunk" aria-label="All services">
        <div className="bp-container">
          <ul className="sl-grid">
            {servicesData.map((service, i) => {
              const Icon = service.icon
              return (
                <li key={service.slug} className="sl-card">
                  <Link
                    to={`/services/${service.slug}`}
                    className="sl-card-link"
                    aria-label={`${service.title}: view details`}
                  >
                    <span className="sl-art"><ServiceSchematic slug={service.slug} /></span>
                    <span className="sl-card-top">
                      <span className="sl-icon" aria-hidden="true"><Icon /></span>
                      <span className="sl-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    </span>
                    <h2 className="sl-card-title">{service.title}</h2>
                    <p className="sl-card-desc">{service.shortDescription}</p>
                    <ul className="sl-features" aria-label={`Key features of ${service.title}`}>
                      {service.features?.slice(0, 3).map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <span className="sl-more" aria-hidden="true">Details &rarr;</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default ServicesList
