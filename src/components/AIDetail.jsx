import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  FaRocket, FaCheck, FaChevronDown, FaCode, FaLightbulb,
  FaStar, FaShieldAlt, FaChartBar, FaBolt
} from 'react-icons/fa'
import { aiData } from '../data/aiData'
import './AIDetail.css'

// Extract first hex color from gradient string
const extractAccentColor = (gradientStr = '') => {
  const match = gradientStr.match(/#[0-9a-fA-F]{6}/)
  return match ? match[0] : '#00f2fe'
}

const WHY_ICONS = [FaStar, FaShieldAlt, FaChartBar, FaBolt, FaLightbulb, FaCode]

const AIDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const aiCategory = aiData.find(a => a.slug === slug)
  const [openOffer, setOpenOffer] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aid-visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.aid-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [slug])

  if (!aiCategory) {
    return (
      <div className="aid-container">
        <div className="aid-not-found">
          <h1>AI Service Not Found</h1>
          <p>The service you are looking for does not exist.</p>
          <button onClick={() => navigate('/')} className="aid-back-btn">
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const CategoryIcon = aiCategory.icon
  const accentColor = extractAccentColor(aiCategory.image)

  const heroStats = [
    { value: `${aiCategory.whatWeOffer?.length || 3}+`, label: 'Solutions' },
    { value: '5+', label: 'Years Exp.' },
    { value: '20+', label: 'Projects' },
    { value: '100%', label: 'Success Rate' }
  ]

  const toggleOffer = i => setOpenOffer(prev => prev === i ? null : i)

  return (
    <div className="aid-container" style={{ '--aid-color': accentColor }}>

      {/* ─── Hero ────────────────────────────────────────────────────── */}
      <section className="aid-hero">
        <div className="aid-hero-bg" style={{ background: aiCategory.image }} />
        <div className="aid-hero-dots" />

        <div className="aid-hero-inner">
          <div className="aid-hero-icon-wrap">
            <div className="aid-hero-icon" style={{ background: aiCategory.image }}>
              <CategoryIcon />
            </div>
          </div>

          <div className="aid-hero-tag">{aiCategory.shortDescription}</div>
          <h1 className="aid-hero-title">{aiCategory.name}</h1>
          <p className="aid-hero-headline">{aiCategory.headline}</p>
          <p className="aid-hero-desc">{aiCategory.description}</p>

          <div className="aid-hero-stats">
            {heroStats.map((s, i) => (
              <div key={i} className="aid-hero-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="aid-hero-cta">
            <button
              className="aid-btn-primary"
              onClick={() => {
                navigate('/')
                setTimeout(() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }, 200)
              }}
            >
              Get a Free Consultation <FaRocket />
            </button>
            <button className="aid-btn-secondary" onClick={() => navigate('/#portfolio')}>
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* ─── What We Offer ───────────────────────────────────────────── */}
      {aiCategory.whatWeOffer?.length > 0 && (
        <section className="aid-section aid-offers aid-reveal">
          <div className="aid-inner">
            <div className="aid-section-header">
              <span className="aid-tag">What We Build</span>
              <h2 className="aid-section-title">Our {aiCategory.name} Solutions</h2>
              <div className="aid-underline" />
              <p className="aid-section-desc">
                End-to-end {aiCategory.name.toLowerCase()} solutions crafted to deliver measurable business impact.
              </p>
            </div>

            {/* Summary cards (top 3 as quick overview) */}
            <div className="aid-summary-grid">
              {aiCategory.whatWeOffer.slice(0, 3).map((offer, i) => (
                <div
                  key={i}
                  className="aid-summary-card"
                  style={{ '--delay': `${i * 0.1}s`, '--card-bg': `${accentColor}10`, '--card-border': `${accentColor}30` }}
                >
                  <div className="aid-summary-num" style={{ color: accentColor }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                </div>
              ))}
            </div>

            {/* Detailed accordion cards */}
            <div className="aid-offers-list">
              {aiCategory.whatWeOffer.map((offer, i) => (
                <div
                  key={i}
                  className={`aid-offer-item${openOffer === i ? ' open' : ''}`}
                  style={{ borderLeftColor: openOffer === i ? accentColor : 'transparent' }}
                >
                  <button
                    className="aid-offer-header"
                    onClick={() => toggleOffer(i)}
                    aria-expanded={openOffer === i}
                  >
                    <div className="aid-offer-title-row">
                      <span className="aid-offer-num" style={{ color: accentColor }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="aid-offer-title">{offer.title}</span>
                    </div>
                    <FaChevronDown className="aid-offer-chevron" style={{ color: accentColor }} />
                  </button>

                  <div className="aid-offer-body">
                    <p className="aid-offer-desc">{offer.description}</p>

                    {offer.features?.length > 0 && (
                      <ul className="aid-feature-list">
                        {offer.features.map((f, j) => (
                          <li key={j}>
                            <div
                              className="aid-feature-check"
                              style={{ background: `${accentColor}20`, border: `1px solid ${accentColor}40` }}
                            >
                              <FaCheck style={{ color: accentColor }} />
                            </div>
                            <div>
                              <strong>{f.name}:</strong> {f.description}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}

                    {offer.technologies?.length > 0 && (
                      <div className="aid-tech-tags">
                        {offer.technologies.map((t, k) => (
                          <span
                            key={k}
                            className="aid-tech-tag"
                            style={{ borderColor: `${accentColor}40`, color: accentColor }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Why Choose Hunexture ────────────────────────────────────── */}
      {aiCategory.whyChooseUs?.length > 0 && (
        <section className="aid-section aid-alt-bg aid-reveal">
          <div className="aid-inner">
            <div className="aid-section-header">
              <span className="aid-tag">Our Edge</span>
              <h2 className="aid-section-title">Why Choose Hunexture</h2>
              <div className="aid-underline" />
            </div>

            <div className="aid-why-grid">
              {aiCategory.whyChooseUs.map((reason, i) => {
                const WIcon = WHY_ICONS[i % WHY_ICONS.length]
                return (
                  <div
                    key={i}
                    className="aid-why-card"
                    style={{ '--delay': `${i * 0.1}s` }}
                  >
                    <div
                      className="aid-why-icon"
                      style={{
                        background: `${accentColor}20`,
                        border: `1px solid ${accentColor}50`
                      }}
                    >
                      <WIcon style={{ color: accentColor }} />
                    </div>
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── Technologies Summary ────────────────────────────────────── */}
      {aiCategory.technologiesSummary?.length > 0 && (
        <section className="aid-section aid-reveal">
          <div className="aid-inner">
            <div className="aid-section-header">
              <span className="aid-tag">Tech Stack</span>
              <h2 className="aid-section-title">Technologies We Use</h2>
              <div className="aid-underline" />
              <p className="aid-section-desc">
                Industry-leading tools and frameworks powering our {aiCategory.name.toLowerCase()} implementations.
              </p>
            </div>

            <div className="aid-tech-grid">
              {aiCategory.technologiesSummary.map((item, i) => (
                <div key={i} className="aid-tech-card" style={{ '--delay': `${i * 0.08}s` }}>
                  <div
                    className="aid-tech-cat-icon"
                    style={{ background: `${accentColor}20`, border: `1px solid ${accentColor}40` }}
                  >
                    <FaCode style={{ color: accentColor }} />
                  </div>
                  <div className="aid-tech-info">
                    <span className="aid-tech-category" style={{ color: accentColor }}>
                      {item.category}
                    </span>
                    <span className="aid-tech-list">{item.tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Bottom CTA ──────────────────────────────────────────────── */}
      <section className="aid-cta aid-reveal">
        <div className="aid-cta-glow" style={{ background: aiCategory.image }} />
        <div className="aid-cta-inner">
          <span className="aid-tag">Let's Build Together</span>
          <h2>Ready to Transform Your Business with {aiCategory.name}?</h2>
          <p>
            Let's discuss your AI project. Our team responds within 24 hours
            with a tailored proposal — no commitment required.
          </p>
          <div className="aid-cta-btns">
            <button
              className="aid-btn-primary"
              onClick={() => {
                navigate('/')
                setTimeout(() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }, 200)
              }}
            >
              Contact Us Today <FaRocket />
            </button>
            <button className="aid-btn-secondary" onClick={() => navigate('/#portfolio')}>
              See Our Work
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AIDetail
