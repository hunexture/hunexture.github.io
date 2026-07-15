import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  FaRocket, FaCheck, FaChevronDown, FaCode, FaLightbulb,
  FaStar, FaShieldAlt, FaChartBar, FaBolt, FaMousePointer, FaEye, FaTerminal
} from 'react-icons/fa'
import { aiData } from '../data/aiData'
import './AIDetail.css'

// Extract first hex color from gradient string
const extractAccentColor = (gradientStr = '') => {
  const match = gradientStr.match(/#[0-9a-fA-F]{6}/)
  return match ? match[0] : '#00f2fe'
}

const WHY_ICONS = [FaStar, FaShieldAlt, FaChartBar, FaBolt, FaLightbulb, FaCode]

/* ─────────────────────────────────────────────────────────────
   Custom AI Detail Visualizers
   ───────────────────────────────────────────────────────────── */

// 1. Custom AI Services Visualizer: Neural net flow
const CustomAIVisualizer = ({ accentColor }) => {
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => (p + 1) % 4)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="aid-viz-panel custom-ai-viz">
      <div className="aid-viz-header">
        <span className="aid-dot red" />
        <span className="aid-dot yellow" />
        <span className="aid-dot green" />
        <span className="aid-viz-title">custom_model_pipeline.cfg</span>
      </div>
      <div className="aid-viz-body">
        <div className="pipeline-container">
          <div className={`pipeline-step ${pulse === 0 ? 'active' : ''}`}>
            <span className="step-icon">🖳</span>
            <span>Raw Data</span>
          </div>
          <div className="pipeline-arrow">&rarr;</div>
          <div className={`pipeline-step ${pulse === 1 ? 'active' : ''}`}>
            <span className="step-icon">⚙</span>
            <span>Prep Layer</span>
          </div>
          <div className="pipeline-arrow">&rarr;</div>
          <div className={`pipeline-step ${pulse === 2 ? 'active' : ''}`}>
            <span className="step-icon">🧠</span>
            <span>ML Core</span>
          </div>
          <div className="pipeline-arrow">&rarr;</div>
          <div className={`pipeline-step ${pulse === 3 ? 'active' : ''}`}>
            <span className="step-icon">✦</span>
            <span>Output API</span>
          </div>
        </div>
        <div className="pipeline-logs tech-font">
          <div>[STATUS] pipeline check complete</div>
          <div>[SPEED] latency: 12ms</div>
          <div>[THROUGHPUT] 10,000 token/sec</div>
        </div>
      </div>
    </div>
  )
}

// 2. Machine Learning Visualizer: Interactive Scatter Plot with regression
const MLVisualizer = ({ accentColor }) => {
  const [points, setPoints] = useState([
    { x: 40, y: 150 }, { x: 70, y: 130 }, { x: 100, y: 110 },
    { x: 130, y: 90 }, { x: 170, y: 80 }, { x: 220, y: 40 }
  ])

  const handleAddPoint = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.round(e.clientX - rect.left)
    const y = Math.round(e.clientY - rect.top)
    if (points.length < 12) {
      setPoints(prev => [...prev, { x, y }])
    } else {
      setPoints([{ x, y }])
    }
  }

  // Simple linear regression calculation for visualization line (fit endpoints)
  const getRegressionLine = () => {
    if (points.length < 2) return { x1: 0, y1: 100, x2: 300, y2: 100 }
    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0
    const n = points.length
    points.forEach(p => {
      sumX += p.x
      sumY += p.y
      sumXY += p.x * p.y
      sumXX += p.x * p.x
    })
    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX || 1)
    const intercept = (sumY - slope * sumX) / n

    const y1 = slope * 10 + intercept
    const y2 = slope * 280 + intercept
    return { x1: 10, y1, x2: 280, y2 }
  }

  const line = getRegressionLine()

  return (
    <div className="aid-viz-panel ml-viz">
      <div className="aid-viz-header">
        <span className="aid-dot red" />
        <span className="aid-dot yellow" />
        <span className="aid-dot green" />
        <span className="aid-viz-title">regression_modeler.py</span>
      </div>
      <div className="aid-viz-body">
        <div className="ml-plot-area" onClick={handleAddPoint}>
          <svg width="100%" height="180" className="ml-plot-svg">
            {/* Grid lines */}
            <line x1="0" y1="90" x2="300" y2="90" stroke="rgba(255,255,255,0.05)" />
            <line x1="150" y1="0" x2="150" y2="180" stroke="rgba(255,255,255,0.05)" />
            
            {/* Regression line */}
            <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke={accentColor} strokeWidth="2" strokeDasharray="4" />
            
            {/* Scatter points */}
            {points.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="5" fill="#fff" stroke={accentColor} strokeWidth="1.5" />
            ))}
          </svg>
          <div className="plot-tip"><FaMousePointer /> Click to add custom data nodes</div>
        </div>
        <div className="ml-plot-stats">
          <div>Data Points: <strong className="tech-font">{points.length}</strong></div>
          <div>Model Fit R²: <strong className="tech-font text-cyan">{(0.91 + (points.length * 0.007) > 0.99 ? 0.99 : 0.91 + (points.length * 0.007)).toFixed(3)}</strong></div>
        </div>
      </div>
    </div>
  )
}

// 3. Natural Language Processing Visualizer: Interactive tokenization console
const NLPVisualizer = ({ accentColor }) => {
  const sentences = [
    { text: "AI agents automate core business pipelines.", tokens: ["AI", "agents", "automate", "core", "business", "pipelines", "."] },
    { text: "Custom neural translation services.", tokens: ["Custom", "neural", "translation", "services", "."] }
  ]
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div className="aid-viz-panel nlp-viz">
      <div className="aid-viz-header">
        <span className="aid-dot red" />
        <span className="aid-dot yellow" />
        <span className="aid-dot green" />
        <span className="aid-viz-title">semantic_tokenizer.go</span>
      </div>
      <div className="aid-viz-body">
        <div className="nlp-console">
          <div className="nlp-prompt-selector">
            {sentences.map((s, idx) => (
              <button 
                key={idx} 
                className={`nlp-prompt-btn ${activeIdx === idx ? 'active' : ''}`}
                onClick={() => setActiveIdx(idx)}
                style={{ borderColor: activeIdx === idx ? accentColor : undefined }}
              >
                PROMPT {idx + 1}
              </button>
            ))}
          </div>
          <div className="nlp-text-input">"{sentences[activeIdx].text}"</div>
          <div className="nlp-tokens-container">
            <span className="tokens-label">Parsed Tokens:</span>
            <div className="tokens-grid">
              {sentences[activeIdx].tokens.map((token, i) => (
                <span 
                  key={i} 
                  className="nlp-token-badge"
                  style={{ border: `1px solid ${accentColor}40`, background: `${accentColor}10` }}
                >
                  <span className="token-id tech-font">#{100 + i * 7}</span>
                  <span className="token-text">{token}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 4. Computer Vision Visualizer: Bounding box simulator
const CVVisualizer = ({ accentColor }) => {
  const [scan, setScan] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setScan(s => !s)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="aid-viz-panel cv-viz">
      <div className="aid-viz-header">
        <span className="aid-dot red" />
        <span className="aid-dot yellow" />
        <span className="aid-dot green" />
        <span className="aid-viz-title">object_detector_v8.sh</span>
      </div>
      <div className="aid-viz-body">
        <div className="cv-camera-frame">
          <div className="cv-overlay-grid" />
          {scan && <div className="cv-scanner-line" style={{ background: `linear-gradient(to bottom, transparent, ${accentColor})` }} />}
          
          {/* Simulated detected object frames */}
          <div className="detected-box box-person" style={{ borderColor: accentColor }}>
            <span className="box-label tech-font" style={{ background: accentColor }}>User_Ct: 99%</span>
          </div>
          
          <div className="detected-box box-device" style={{ borderColor: '#30cfd0' }}>
            <span className="box-label tech-font" style={{ background: '#30cfd0' }}>Workstation: 94%</span>
          </div>
        </div>
        <div className="cv-logs tech-font">
          <div>[INFO] Frame processing time: 8.4ms</div>
          <div>[INFO] Active classes found: 2</div>
        </div>
      </div>
    </div>
  )
}

// 5. Generative AI Visualizer: Prompt generation progression
const GenAIVisualizer = ({ accentColor }) => {
  const [percent, setPercent] = useState(100)
  const [prompt, setPrompt] = useState('Intelligent system dashboard mockup')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleTrigger = () => {
    if (isGenerating) return
    setIsGenerating(true)
    setPercent(0)
    
    let current = 0
    const interval = setInterval(() => {
      current += 5
      setPercent(current)
      if (current >= 100) {
        clearInterval(interval)
        setIsGenerating(false)
      }
    }, 150)
  }

  return (
    <div className="aid-viz-panel genai-viz">
      <div className="aid-viz-header">
        <span className="aid-dot red" />
        <span className="aid-dot yellow" />
        <span className="aid-dot green" />
        <span className="aid-viz-title">diffusion_model.rs</span>
      </div>
      <div className="aid-viz-body">
        <div className="genai-controls">
          <input 
            type="text" 
            className="genai-prompt-input" 
            value={prompt} 
            onChange={(e) => setPrompt(e.target.value)} 
            disabled={isGenerating}
          />
          <button 
            className="genai-btn" 
            onClick={handleTrigger}
            style={{ background: accentColor }}
            disabled={isGenerating}
          >
            GENERATE
          </button>
        </div>
        <div className="genai-canvas-area">
          <div className="canvas-preview-box">
            {isGenerating ? (
              <div className="canvas-generating">
                <span className="gen-percent tech-font">{percent}%</span>
                <div className="gen-progress-bar">
                  <div className="gen-progress" style={{ width: `${percent}%`, background: accentColor }} />
                </div>
                <span className="gen-label">Fusing Latent Vectors...</span>
              </div>
            ) : (
              <div className="canvas-complete">
                {/* SVG/CSS Generated Vector design representation */}
                <svg viewBox="0 0 100 100" className="gen-vector-art" width="80" height="80">
                  <rect x="10" y="10" width="80" height="80" rx="10" fill={`${accentColor}15`} stroke={accentColor} strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke={accentColor} strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M 30,30 L 70,70 M 30,70 L 70,30" stroke={accentColor} strokeWidth="1" opacity="0.4" />
                </svg>
                <span className="complete-label">Synthesis Complete</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// 6. Data Science / Analytics Visualizer: Chart model toggle
const DSVisualizer = ({ accentColor }) => {
  const [modelType, setModelType] = useState('linear')

  return (
    <div className="aid-viz-panel ds-viz">
      <div className="aid-viz-header">
        <span className="aid-dot red" />
        <span className="aid-dot yellow" />
        <span className="aid-dot green" />
        <span className="aid-viz-title">trend_forecaster.r</span>
      </div>
      <div className="aid-viz-body">
        <div className="ds-model-selector">
          <button className={`ds-btn ${modelType === 'linear' ? 'active' : ''}`} onClick={() => setModelType('linear')}>Linear</button>
          <button className={`ds-btn ${modelType === 'exponential' ? 'active' : ''}`} onClick={() => setModelType('exponential')}>Exponential</button>
          <button className={`ds-btn ${modelType === 'seasonal' ? 'active' : ''}`} onClick={() => setModelType('seasonal')}>Seasonal</button>
        </div>
        <div className="ds-chart-area">
          <svg viewBox="0 0 300 120" className="ds-chart-svg">
            <line x1="0" y1="110" x2="300" y2="110" stroke="rgba(255,255,255,0.1)" />
            <line x1="10" y1="0" x2="10" y2="120" stroke="rgba(255,255,255,0.1)" />
            
            {/* Draw curve based on modelType */}
            {modelType === 'linear' && (
              <path d="M 10,95 L 290,25" fill="none" stroke={accentColor} strokeWidth="2" />
            )}
            {modelType === 'exponential' && (
              <path d="M 10,105 Q 150,95 290,15" fill="none" stroke={accentColor} strokeWidth="2" />
            )}
            {modelType === 'seasonal' && (
              <path d="M 10,95 Q 50,25 90,95 T 170,95 T 250,95 T 290,35" fill="none" stroke={accentColor} strokeWidth="2" />
            )}
          </svg>
        </div>
        <div className="ds-info tech-font">
          Confidence Limit: <span className="text-cyan">95.4%</span>
        </div>
      </div>
    </div>
  )
}

const renderAIValizer = (slug, color) => {
  switch (slug) {
    case 'custom-ai-services':
      return <CustomAIVisualizer accentColor={color} />
    case 'machine-learning-development':
      return <MLVisualizer accentColor={color} />
    case 'natural-language-processing':
      return <NLPVisualizer accentColor={color} />
    case 'computer-vision-services':
      return <CVVisualizer accentColor={color} />
    case 'generative-ai-solutions':
      return <GenAIVisualizer accentColor={color} />
    case 'data-science-analytics':
      return <DSVisualizer accentColor={color} />
    default:
      return <CustomAIVisualizer accentColor={color} />
  }
}

/* ─────────────────────────────────────────────────────────────
   Main AI Detail Component
   ───────────────────────────────────────────────────────────── */

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
          <h1 className="tech-font">AI Service Not Found</h1>
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
        <div className="aid-hero-glow" />

        <div className="aid-hero-inner">
          <div className="aid-hero-grid-split">
            
            {/* Left side: Information */}
            <div className="aid-hero-content-block">
              <div className="aid-hero-icon-wrap">
                <div className="aid-hero-icon" style={{ background: aiCategory.image }}>
                  <CategoryIcon />
                </div>
              </div>

              <div className="aid-hero-tag tech-font">{aiCategory.shortDescription}</div>
              <h1 className="aid-hero-title">{aiCategory.name}</h1>
              <p className="aid-hero-headline">{aiCategory.headline}</p>
              <p className="aid-hero-desc">{aiCategory.description}</p>

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

            {/* Right side: Interactive Computational Panel */}
            <div className="aid-hero-viz-block">
              {renderAIValizer(slug, accentColor)}
            </div>

          </div>

          {/* Stats Bar */}
          <div className="aid-hero-stats">
            {heroStats.map((s, i) => (
              <div key={i} className="aid-hero-stat">
                <strong className="tech-font">{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── What We Offer ───────────────────────────────────────────── */}
      {aiCategory.whatWeOffer?.length > 0 && (
        <section className="aid-section aid-offers-section aid-reveal">
          <div className="aid-inner">
            <div className="aid-section-header">
              <span className="aid-tag tech-font">What We Build</span>
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
                  <div className="aid-summary-num tech-font" style={{ color: accentColor }}>
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
                      <span className="aid-offer-num tech-font" style={{ color: accentColor }}>
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
                            className="aid-tech-tag tech-font"
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
              <span className="aid-tag tech-font">Our Edge</span>
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
              <span className="aid-tag tech-font">Tech Stack</span>
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
                    <span className="aid-tech-category tech-font" style={{ color: accentColor }}>
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
          <span className="aid-tag tech-font">Let's Build Together</span>
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
