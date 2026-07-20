import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  FaArrowLeft, FaRocket, FaCheck, FaLightbulb, FaChevronDown, 
  FaArrowRight, FaHome, FaChevronRight
} from 'react-icons/fa'
import { getIndustryBySlug, industriesData, getTechIcon, getWhyChooseUsIcon } from '../data/industriesData'
import './IndustryDetail.css'

const IndustryDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const industry = getIndustryBySlug(slug)
  const [openFaq, setOpenFaq] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // Scroll detection for sticky nav
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ind-visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.08 }
    )
    const timer = setTimeout(() => {
      document.querySelectorAll('.ind-reveal').forEach(el => observer.observe(el))
    }, 100)
    return () => { clearTimeout(timer); observer.disconnect() }
  }, [slug])

  if (!industry) {
    return (
      <div className="ind-container">
        <div className="ind-not-found">
          <h1>Industry Not Found</h1>
          <p>The industry you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/industries')} className="ind-back-btn">
            <FaArrowLeft /> Back to Industries
          </button>
        </div>
      </div>
    )
  }

  const IconComponent = industry.icon

  const heroStats = [
    { value: `${industry.services.length}+`, label: 'Solutions' },
    { value: '5+',   label: 'Years Exp.' },
    { value: '20+',  label: 'Projects' },
    { value: '100%', label: 'Satisfaction' }
  ]

  const toggleFaq = i => setOpenFaq(prev => prev === i ? null : i)

  // Related industries (exclude current)
  const relatedIndustries = industriesData
    .filter(ind => ind.slug !== slug)
    .slice(0, 4)

  return (
    <div className="ind-container" style={{ '--ind-color': industry.color }}>

      {/* ─── Sticky Breadcrumb Bar ──────────────────────────────── */}
      <div className={`ind-breadcrumb-bar${scrolled ? ' ind-breadcrumb-visible' : ''}`}>
        <div className="ind-breadcrumb-inner">
          <div className="ind-breadcrumb-path">
            <button className="ind-breadcrumb-link" onClick={() => navigate('/')}>
              <FaHome /> Home
            </button>
            <FaChevronRight className="ind-breadcrumb-sep" />
            <button className="ind-breadcrumb-link" onClick={() => navigate('/industries')}>
              Industries
            </button>
            <FaChevronRight className="ind-breadcrumb-sep" />
            <span className="ind-breadcrumb-current" style={{ color: industry.color }}>
              {industry.name}
            </span>
          </div>
          <button 
            className="ind-btn-primary ind-breadcrumb-cta"
            onClick={() => {
              navigate('/')
              setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 200)
            }}
          >
            Start a Project <FaRocket />
          </button>
        </div>
      </div>

      {/* ─── Hero ──────────────────────────────────────────────────── */}
      <section className="ind-hero">
        <div className="ind-hero-bg" style={{ background: industry.image }} />
        <div className="ind-hero-dots" />

        <div className="ind-hero-inner">
          <div className="ind-hero-icon-wrap">
            <div className="ind-hero-icon" style={{ background: industry.image }}>
              <IconComponent />
            </div>
          </div>

          <div className="ind-hero-tag tech-font">{industry.shortDescription}</div>
          <h1 className="ind-hero-title">{industry.name}</h1>
          <p className="ind-hero-desc">{industry.description}</p>

          <div className="ind-hero-stats">
            {heroStats.map((s, i) => (
              <div key={i} className="ind-hero-stat">
                <strong className="tech-font">{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="ind-hero-cta">
            <button className="ind-btn-primary" onClick={() => {
              navigate('/')
              setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 200)
            }}>
              Start a Project <FaRocket />
            </button>
            <button className="ind-btn-secondary" onClick={() => navigate('/industries')}>
              <FaArrowLeft /> All Industries
            </button>
          </div>
        </div>
      </section>

      {/* ─── Impact Stats ──────────────────────────────────────────── */}
      {industry.stats?.length > 0 && (
        <section className="ind-section ind-alt-bg ind-reveal">
          <div className="ind-inner">
            <div className="ind-section-header">
              <span className="ind-tag tech-font">By The Numbers</span>
              <h2 className="ind-section-title">Impact We Deliver</h2>
              <div className="ind-underline" />
              <p className="ind-section-desc">
                Real, measurable results our clients achieve with our {industry.name.toLowerCase()} solutions.
              </p>
            </div>

            <div className="ind-stats-grid">
              {industry.stats.map((stat, i) => (
                <div key={i} className="ind-stat-card" style={{ '--delay': `${i * 0.1}s` }}>
                  <strong className="tech-font" style={{ color: industry.color }}>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Solutions / Services ──────────────────────────────────── */}
      <section className="ind-section ind-services ind-reveal">
        <div className="ind-inner">
          <div className="ind-section-header">
            <span className="ind-tag tech-font">What We Build</span>
            <h2 className="ind-section-title">Our {industry.name} Solutions</h2>
            <div className="ind-underline" />
            <p className="ind-section-desc">
              End-to-end technology solutions crafted specifically for {industry.name.toLowerCase()} businesses.
            </p>
          </div>

          <div className="ind-services-grid">
            {industry.services.map((svc, i) => {
              const SIcon = svc.icon
              return (
                <div
                  key={i}
                  className="ind-service-card"
                  style={{ '--delay': `${i * 0.08}s` }}
                >
                  <div
                    className="ind-service-icon"
                    style={{
                      background: `${industry.color}20`,
                      border: `1px solid ${industry.color}50`
                    }}
                  >
                    <SIcon style={{ color: industry.color }} />
                  </div>
                  <div className="ind-service-text">
                    <h3>{svc.name}</h3>
                    {svc.description && <p>{svc.description}</p>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Technologies ──────────────────────────────────────────── */}
      <section className="ind-section ind-alt-bg ind-reveal">
        <div className="ind-inner">
          <div className="ind-section-header">
            <span className="ind-tag tech-font">Tech Stack</span>
            <h2 className="ind-section-title">Technologies We Use</h2>
            <div className="ind-underline" />
            <p className="ind-section-desc">
              Modern, battle-tested technologies chosen for performance, scalability, and longevity.
            </p>
          </div>

          <div className="ind-tech-grid">
            {industry.technologies.map((tech, i) => {
              const TIcon = getTechIcon(tech)
              return (
                <div key={i} className="ind-tech-badge">
                  <TIcon />
                  <span>{tech}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Benefits ──────────────────────────────────────────────── */}
      <section className="ind-section ind-reveal">
        <div className="ind-inner">
          <div className="ind-section-header">
            <span className="ind-tag tech-font">Key Benefits</span>
            <h2 className="ind-section-title">What You Gain</h2>
            <div className="ind-underline" />
            <p className="ind-section-desc">
              Tangible business advantages delivered through our purpose-built {industry.name.toLowerCase()} solutions.
            </p>
          </div>

          <div className="ind-benefits-grid">
            {industry.benefits.map((benefit, i) => (
              <div
                key={i}
                className="ind-benefit-card"
                style={{ '--delay': `${i * 0.1}s` }}
              >
                <div
                  className="ind-benefit-check"
                  style={{ background: `${industry.color}20`, border: `1px solid ${industry.color}50` }}
                >
                  <FaCheck style={{ color: industry.color }} />
                </div>
                <span className="ind-benefit-num tech-font" style={{ color: industry.color }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Our Process ───────────────────────────────────────────── */}
      {industry.process?.length > 0 && (
        <section className="ind-section ind-alt-bg ind-reveal">
          <div className="ind-inner">
            <div className="ind-section-header">
              <span className="ind-tag tech-font">How We Work</span>
              <h2 className="ind-section-title">Our Process</h2>
              <div className="ind-underline" />
              <p className="ind-section-desc">
                A proven, structured approach that delivers results on time and on budget.
              </p>
            </div>

            <div className="ind-timeline">
              {industry.process.map((step, i) => (
                <div key={i} className="ind-step" style={{ '--delay': `${i * 0.12}s` }}>
                  <div className="ind-step-left">
                    <div
                      className="ind-step-dot tech-font"
                      style={{ background: industry.image, boxShadow: `0 4px 16px ${industry.color}50` }}
                    >
                      {step.step}
                    </div>
                    {i < industry.process.length - 1 && (
                      <div className="ind-step-line" style={{ background: `${industry.color}30` }} />
                    )}
                  </div>
                  <div className="ind-step-card" style={{ borderColor: `${industry.color}25` }}>
                    <h3 style={{ color: industry.color }}>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Challenges ────────────────────────────────────────────── */}
      {industry.challenges?.length > 0 && (
        <section className="ind-section ind-reveal">
          <div className="ind-inner">
            <div className="ind-section-header">
              <span className="ind-tag tech-font">Problems We Solve</span>
              <h2 className="ind-section-title">Industry Challenges</h2>
              <div className="ind-underline" />
              <p className="ind-section-desc">
                We understand the real pain points facing {industry.name.toLowerCase()} organizations today.
              </p>
            </div>

            <div className="ind-challenges-grid">
              {industry.challenges.map((ch, i) => (
                <div key={i} className="ind-challenge-card">
                  <div
                    className="ind-challenge-icon"
                    style={{ background: `${industry.color}20`, border: `1px solid ${industry.color}50` }}
                  >
                    <FaLightbulb style={{ color: industry.color }} />
                  </div>
                  <p>{ch}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Why Choose Us ─────────────────────────────────────────── */}
      {industry.whyChooseUs?.length > 0 && (
        <section className="ind-section ind-alt-bg ind-reveal">
          <div className="ind-inner">
            <div className="ind-section-header">
              <span className="ind-tag tech-font">Our Edge</span>
              <h2 className="ind-section-title">Why Choose Hunexture</h2>
              <div className="ind-underline" />
              <p className="ind-section-desc">
                What sets us apart when building {industry.name.toLowerCase()} solutions.
              </p>
            </div>

            <div className="ind-why-grid">
              {industry.whyChooseUs.map((reason, i) => {
                const isObj = typeof reason === 'object'
                const WIcon = getWhyChooseUsIcon(isObj ? reason.title : reason)
                return (
                  <div
                    key={i}
                    className="ind-why-card"
                    style={{ '--delay': `${i * 0.1}s` }}
                  >
                    <div
                      className="ind-why-icon"
                      style={{
                        background: `${industry.color}20`,
                        border: `1px solid ${industry.color}50`
                      }}
                    >
                      <WIcon style={{ color: industry.color }} />
                    </div>
                    <div className="ind-why-text">
                      {isObj ? (
                        <>
                          <h3>{reason.title}</h3>
                          <p>{reason.description}</p>
                        </>
                      ) : (
                        <p>{reason}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── Case Studies ──────────────────────────────────────────── */}
      {industry.caseStudies?.length > 0 && (
        <section className="ind-section ind-reveal">
          <div className="ind-inner">
            <div className="ind-section-header">
              <span className="ind-tag tech-font">Success Stories</span>
              <h2 className="ind-section-title">Real Results</h2>
              <div className="ind-underline" />
              <p className="ind-section-desc">
                Projects we've delivered that made a measurable difference.
              </p>
            </div>

            <div className="ind-case-grid">
              {industry.caseStudies.map((cs, i) => (
                <div key={i} className="ind-case-card">
                  <div className="ind-case-header" style={{ background: industry.image }}>
                    <h3>{cs.title}</h3>
                  </div>
                  <div className="ind-case-body">
                    <p className="ind-case-desc">{cs.description}</p>
                    <div
                      className="ind-case-result"
                      style={{
                        background: `${industry.color}12`,
                        borderColor: `${industry.color}40`
                      }}
                    >
                      <FaRocket style={{ color: industry.color }} />
                      <span className="tech-font">{cs.results}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── FAQ ───────────────────────────────────────────────────── */}
      {industry.faq?.length > 0 && (
        <section className="ind-section ind-alt-bg ind-reveal">
          <div className="ind-inner">
            <div className="ind-section-header">
              <span className="ind-tag tech-font">Got Questions?</span>
              <h2 className="ind-section-title">Frequently Asked Questions</h2>
              <div className="ind-underline" />
              <p className="ind-section-desc">
                Answers to common questions about our {industry.name.toLowerCase()} solutions.
              </p>
            </div>

            <div className="ind-faq-list">
              {industry.faq.map((item, i) => (
                <div
                  key={i}
                  className={`ind-faq-item${openFaq === i ? ' open' : ''}`}
                  style={{ borderColor: openFaq === i ? `${industry.color}50` : undefined }}
                >
                  <button
                    className="ind-faq-q"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{item.question}</span>
                    <FaChevronDown
                      className="ind-faq-chevron"
                      style={{ color: industry.color }}
                    />
                  </button>
                  <div className="ind-faq-a">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Related Industries ────────────────────────────────────── */}
      <section className="ind-section ind-reveal">
        <div className="ind-inner">
          <div className="ind-section-header">
            <span className="ind-tag tech-font">Explore More</span>
            <h2 className="ind-section-title">Other Industry Solutions</h2>
            <div className="ind-underline" />
          </div>
          <div className="ind-related-grid">
            {relatedIndustries.map((rel) => {
              const RelIcon = rel.icon
              return (
                <div
                  key={rel.id}
                  className="ind-related-card"
                  style={{ '--rel-color': rel.color }}
                  onClick={() => navigate(`/industries/${rel.slug}`)}
                >
                  <div className="ind-related-icon-wrap">
                    <div className="ind-related-icon" style={{ background: rel.image }}>
                      <RelIcon />
                    </div>
                  </div>
                  <span className="ind-related-name">{rel.name}</span>
                  <FaArrowRight className="ind-related-arrow" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ────────────────────────────────────────────── */}
      <section className="ind-cta ind-reveal">
        <div className="ind-cta-glow" style={{ background: industry.image }} />
        <div className="ind-cta-inner">
          <span className="ind-tag tech-font">Let's Build Together</span>
          <h2>Ready to Transform Your {industry.name} Business?</h2>
          <p>
            Let's discuss your project. Our team responds within 24 hours
            with a tailored proposal — no commitment required.
          </p>
          <div className="ind-cta-btns">
            <button className="ind-btn-primary" onClick={() => {
              navigate('/')
              setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 200)
            }}>
              Contact Us Today <FaRocket />
            </button>
            <button className="ind-btn-secondary" onClick={() => navigate('/industries')}>
              <FaArrowLeft /> All Industries
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default IndustryDetail
