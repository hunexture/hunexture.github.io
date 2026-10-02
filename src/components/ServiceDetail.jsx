import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaRocket, FaCheck, FaChevronDown } from 'react-icons/fa'
import { getServiceBySlug } from '../data/servicesData'
import { textTone } from '../utils/color'
import { ServiceSchematic } from './ServiceSchematic'
import './ServiceDetail.css'

// One accent for every service, matching the Home page. Per-service rainbow gradients are gone.
const BLUEPRINT_ACCENT = { primary: '#1D4ED8', gradient: '#1D4ED8' }

/* ─────────────────────────────────────────────────────────────
   Main Service Detail Component
   ───────────────────────────────────────────────────────────── */

const ServiceDetail = ({ serviceSlug }) => {
  const { slug: paramSlug } = useParams()
  const navigate = useNavigate()
  const slug = serviceSlug || paramSlug
  const service = getServiceBySlug(slug)
  const [openFaq, setOpenFaq] = useState(null)

  const colors = BLUEPRINT_ACCENT

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sd-visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.sd-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [slug])

  if (!service) {
    return (
      <div className="sd-container">
        <div className="sd-not-found">
          <h1 className="tech-font">Service Not Found</h1>
          <p>The service you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/')} className="sd-btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const IconComponent = service.icon

  const heroStats = [
    { value: `${service.features?.length || 4}+`, label: 'Key Features' },
    { value: `${service.useCases?.length || 4}+`, label: 'Use Cases' },
    { value: `${service.process?.length || 4}`, label: 'Step Process' },
    { value: 'NDA', label: 'Before Discovery' }
  ]

  return (
    <div className="sd-container" style={{ '--sd-color': textTone(colors.primary), '--sd-gradient': colors.gradient }}>

      {/* ─── Hero ────────────────────────────────────────────────────── */}
      <section className="sd-hero">
        <div className="sd-hero-bg" style={{ background: colors.gradient }} />
        <div className="sd-hero-dots" />
        <div className="sd-hero-glow" />

        <div className="sd-hero-inner">
          <div className="sd-hero-grid-split">
            
            {/* Left Side: Content info */}
            <div className="sd-hero-content-block">
              <div className="sd-hero-icon-wrap">
                <div className="sd-hero-icon" style={{ background: colors.gradient }}>
                  <IconComponent />
                </div>
              </div>

              <div className="sd-hero-tag tech-font">{service.shortDescription}</div>
              <h1 className="sd-hero-title">{service.title}</h1>
              <p className="sd-hero-desc">{service.description}</p>

              <div className="sd-feature-badges">
                {service.features?.map((f, i) => (
                  <span key={i} className="sd-badge tech-font">
                    <FaCheck className="sd-badge-icon" /> {f}
                  </span>
                ))}
              </div>

              <div className="sd-hero-cta">
                <button
                  className="sd-btn-primary"
                  onClick={() => {
                    navigate('/')
                    setTimeout(() => {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }, 200)
                  }}
                >
                  Get Started <FaRocket />
                </button>
                <button className="sd-btn-secondary" onClick={() => navigate('/#portfolio')}>
                  View Projects
                </button>
              </div>
            </div>

            {/* Right Side: Interactive Visualizer Widget */}
            <div className="sd-hero-viz-block">
              <div className="sch-panel"><ServiceSchematic slug={slug} /></div>
            </div>

          </div>

          {/* Stats Bar */}
          <div className="sd-hero-stats">
            {heroStats.map((s, i) => (
              <div key={i} className="sd-hero-stat">
                <strong className="tech-font">{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Benefits ────────────────────────────────────────────────── */}
      {service.benefits?.length > 0 && (
        <section className="sd-section sd-alt-bg sd-reveal">
          <div className="sd-inner">
            <div className="sd-section-header">
              <span className="sd-tag tech-font">Why It Matters</span>
              <h2 className="sd-section-title">Key Benefits</h2>
              <div className="sd-underline" />
              <p className="sd-section-desc">
                What {service.title.toLowerCase()} is designed to deliver for your business.
              </p>
            </div>

            <div className="sd-benefits-grid">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="sd-benefit-card" style={{ '--delay': `${i * 0.08}s` }}>
                  <div
                    className="sd-benefit-check"
                    style={{ background: `${colors.primary}20`, border: `1px solid ${colors.primary}50` }}
                  >
                    <FaCheck style={{ color: textTone(colors.primary) }} />
                  </div>
                  <span className="sd-benefit-num tech-font" style={{ color: textTone(colors.primary) }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Technologies ────────────────────────────────────────────── */}
      {service.technologies?.length > 0 && (
        <section className="sd-section sd-reveal">
          <div className="sd-inner">
            <div className="sd-section-header">
              <span className="sd-tag tech-font">Tech Stack</span>
              <h2 className="sd-section-title">Technologies We Use</h2>
              <div className="sd-underline" />
            </div>

            <div className="sd-tech-grid">
              {service.technologies.map((tech, i) => {
                const TechIcon = tech.icon
                return (
                  <div key={i} className="sd-tech-badge" style={{ '--delay': `${i * 0.06}s` }}>
                    {tech.iconUrl ? (
                      <img src={tech.iconUrl} alt={tech.name} className="sd-tech-img-icon" />
                    ) : TechIcon ? (
                      <TechIcon className="sd-tech-icon" />
                    ) : (
                      <div className="sd-tech-placeholder" />
                    )}
                    <span>{tech.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── Process + Use Cases (side by side to keep the page short) ─── */}
      {(service.process?.length > 0 || service.useCases?.length > 0) && (
        <section className="sd-section sd-alt-bg sd-reveal">
          <div className="sd-inner sd-duo">
            {service.process?.length > 0 && (
              <div className="sd-duo-col">
                <span className="sd-tag tech-font">How We Work</span>
                <h2 className="sd-section-title">Our Process</h2>
                <ol className="sd-steps">
                  {service.process.map((step) => (
                    <li key={step.step} className="sd-step-row">
                      <span className="sd-step-num tech-font" aria-hidden="true">{step.step}</span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {service.useCases?.length > 0 && (
              <div className="sd-duo-col">
                <span className="sd-tag tech-font">Applications</span>
                <h2 className="sd-section-title">Use Cases</h2>
                <ul className="sd-uc-list">
                  {service.useCases.map((uc) => {
                    const UCIcon = uc.icon
                    return (
                      <li key={uc.title} className="sd-uc-row">
                        <span className="sd-uc-icon" aria-hidden="true"><UCIcon /></span>
                        <div>
                          <h3>{uc.title}</h3>
                          <p>{uc.description}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─── FAQ ─────────────────────────────────────────────────────── */}
      {service.faq?.length > 0 && (
        <section className="sd-section sd-reveal">
          <div className="sd-inner">
            <div className="sd-section-header">
              <span className="sd-tag tech-font">Got Questions?</span>
              <h2 className="sd-section-title">Frequently Asked Questions</h2>
              <div className="sd-underline" />
            </div>

            <div className="sd-faq-list">
              {service.faq.slice(0, 4).map((item, i) => (
                <div
                  key={i}
                  className={`sd-faq-item${openFaq === i ? ' open' : ''}`}
                  style={{ borderColor: openFaq === i ? `${colors.primary}50` : undefined }}
                >
                  <button
                    className="sd-faq-q"
                    onClick={() => setOpenFaq(prev => prev === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{item.question}</span>
                    <FaChevronDown
                      className="sd-faq-chevron"
                      style={{ color: textTone(colors.primary) }}
                    />
                  </button>
                  <div className="sd-faq-a">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Bottom CTA ──────────────────────────────────────────────── */}
      <section className="sd-cta sd-reveal">
        <div className="sd-cta-glow" style={{ background: colors.gradient }} />
        <div className="sd-cta-inner">
          <span className="sd-tag tech-font">Let's Build Together</span>
          <h2>Ready to Get Started with {service.title}?</h2>
          <p>
            Let's discuss how {service.title.toLowerCase()} can help your business grow.
            Our team responds within 24 hours — no commitment required.
          </p>
          <div className="sd-cta-btns">
            <button
              className="sd-btn-primary"
              onClick={() => {
                navigate('/')
                setTimeout(() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }, 200)
              }}
            >
              Contact Us Today <FaRocket />
            </button>
            <button className="sd-btn-secondary" onClick={() => navigate('/#portfolio')}>
              See Our Work
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ServiceDetail
