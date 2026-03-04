import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaRocket, FaCheck, FaChevronDown } from 'react-icons/fa'
import { getServiceBySlug } from '../data/servicesData'
import './ServiceDetail.css'

const colorSchemes = {
  'ai-solutions': { primary: '#667eea', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  'web-development': { primary: '#4facfe', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
  'app-development': { primary: '#f093fb', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  'cloud-integration': { primary: '#30cfd0', gradient: 'linear-gradient(135deg, #30cfd0 0%, #667eea 100%)' },
  'uiux-design': { primary: '#fa709a', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
  'digital-marketing': { primary: '#f7971e', gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)' }
}

const ServiceDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = getServiceBySlug(slug)
  const [openFaq, setOpenFaq] = useState(null)

  const colors = colorSchemes[slug] || colorSchemes['ai-solutions']

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
          <h1>Service Not Found</h1>
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
    { value: '100%', label: 'Satisfaction' }
  ]

  return (
    <div className="sd-container" style={{ '--sd-color': colors.primary, '--sd-gradient': colors.gradient }}>

      {/* ─── Hero ────────────────────────────────────────────────────── */}
      <section className="sd-hero">
        <div className="sd-hero-bg" style={{ background: colors.gradient }} />
        <div className="sd-hero-dots" />
        <div className="sd-hero-glow" />

        <div className="sd-hero-inner">
          <div className="sd-hero-icon-wrap">
            <div className="sd-hero-icon" style={{ background: colors.gradient }}>
              <IconComponent />
            </div>
          </div>

          <div className="sd-hero-tag">{service.shortDescription}</div>
          <h1 className="sd-hero-title">{service.title}</h1>
          <p className="sd-hero-desc">{service.description}</p>

          <div className="sd-feature-badges">
            {service.features?.map((f, i) => (
              <span key={i} className="sd-badge">
                <FaCheck className="sd-badge-icon" /> {f}
              </span>
            ))}
          </div>

          <div className="sd-hero-stats">
            {heroStats.map((s, i) => (
              <div key={i} className="sd-hero-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
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
      </section>

      {/* ─── Benefits ────────────────────────────────────────────────── */}
      {service.benefits?.length > 0 && (
        <section className="sd-section sd-alt-bg sd-reveal">
          <div className="sd-inner">
            <div className="sd-section-header">
              <span className="sd-tag">Why It Matters</span>
              <h2 className="sd-section-title">Key Benefits</h2>
              <div className="sd-underline" />
              <p className="sd-section-desc">
                Measurable outcomes our clients experience with {service.title.toLowerCase()}.
              </p>
            </div>

            <div className="sd-benefits-grid">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="sd-benefit-card" style={{ '--delay': `${i * 0.08}s` }}>
                  <div
                    className="sd-benefit-check"
                    style={{ background: `${colors.primary}20`, border: `1px solid ${colors.primary}50` }}
                  >
                    <FaCheck style={{ color: colors.primary }} />
                  </div>
                  <span className="sd-benefit-num" style={{ color: colors.primary }}>
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
              <span className="sd-tag">Tech Stack</span>
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
                    ) : (
                      <TechIcon className="sd-tech-icon" />
                    )}
                    <span>{tech.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── Process ─────────────────────────────────────────────────── */}
      {service.process?.length > 0 && (
        <section className="sd-section sd-alt-bg sd-reveal">
          <div className="sd-inner">
            <div className="sd-section-header">
              <span className="sd-tag">How We Work</span>
              <h2 className="sd-section-title">Our Process</h2>
              <div className="sd-underline" />
              <p className="sd-section-desc">
                A proven, structured approach that delivers results on time and on budget.
              </p>
            </div>

            <div className="sd-timeline">
              {service.process.map((step, i) => (
                <div key={i} className="sd-step" style={{ '--delay': `${i * 0.12}s` }}>
                  <div className="sd-step-left">
                    <div
                      className="sd-step-dot"
                      style={{ background: colors.gradient, boxShadow: `0 4px 16px ${colors.primary}50` }}
                    >
                      {step.step}
                    </div>
                    {i < service.process.length - 1 && (
                      <div className="sd-step-line" style={{ background: `${colors.primary}30` }} />
                    )}
                  </div>
                  <div
                    className="sd-step-card"
                    style={{ borderColor: `${colors.primary}25` }}
                  >
                    <h3 style={{ color: colors.primary }}>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Use Cases ───────────────────────────────────────────────── */}
      {service.useCases?.length > 0 && (
        <section className="sd-section sd-reveal">
          <div className="sd-inner">
            <div className="sd-section-header">
              <span className="sd-tag">Applications</span>
              <h2 className="sd-section-title">Use Cases</h2>
              <div className="sd-underline" />
              <p className="sd-section-desc">
                Real-world scenarios where our {service.title.toLowerCase()} delivers transformative results.
              </p>
            </div>

            <div className="sd-usecases-grid">
              {service.useCases.map((uc, i) => {
                const UCIcon = uc.icon
                return (
                  <div key={i} className="sd-usecase-card" style={{ '--delay': `${i * 0.1}s` }}>
                    <div
                      className="sd-usecase-icon"
                      style={{ background: `${colors.primary}18`, border: `1px solid ${colors.primary}40` }}
                    >
                      <UCIcon style={{ color: colors.primary }} />
                    </div>
                    <h3>{uc.title}</h3>
                    <p>{uc.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── FAQ ─────────────────────────────────────────────────────── */}
      {service.faq?.length > 0 && (
        <section className="sd-section sd-alt-bg sd-reveal">
          <div className="sd-inner">
            <div className="sd-section-header">
              <span className="sd-tag">Got Questions?</span>
              <h2 className="sd-section-title">Frequently Asked Questions</h2>
              <div className="sd-underline" />
            </div>

            <div className="sd-faq-list">
              {service.faq.map((item, i) => (
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
                      style={{ color: colors.primary }}
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
          <span className="sd-tag">Let's Build Together</span>
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
