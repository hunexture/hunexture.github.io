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

/* ─────────────────────────────────────────────────────────────
   Custom Interactive Visualizers
   ───────────────────────────────────────────────────────────── */

// 1. AI & Machine Learning Visualizer
const AIVisualizer = () => {
  const [accuracy, setAccuracy] = useState(94.2)
  const [loss, setLoss] = useState(0.185)
  const [epoch, setEpoch] = useState(1)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setEpoch(prev => (prev < 100 ? prev + 1 : 1))
      setAccuracy(prev => {
        const next = prev + (Math.random() - 0.3) * 0.15
        return next > 99.9 ? 99.9 : parseFloat(next.toFixed(2))
      })
      setLoss(prev => {
        const next = prev - (Math.random() - 0.3) * 0.015
        return next < 0.005 ? 0.005 : parseFloat(next.toFixed(4))
      })
    }, 1500)
    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <div className="sd-viz-panel ai-viz">
      <div className="sd-viz-header">
        <span className="sd-dot red" />
        <span className="sd-dot yellow" />
        <span className="sd-dot green" />
        <span className="sd-viz-title">NEURAL_NET_TRAINING_SIMULATOR.sh</span>
      </div>
      <div className="sd-viz-body">
        <div className="ai-viz-network">
          <svg width="100%" height="150" className="ai-net-svg">
            <g stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1">
              {/* Connect inputs to hidden */}
              <line x1="20" y1="30" x2="120" y2="20" stroke="var(--sd-color)" strokeOpacity="0.4" />
              <line x1="20" y1="75" x2="120" y2="20" />
              <line x1="20" y1="120" x2="120" y2="20" />
              
              <line x1="20" y1="30" x2="120" y2="75" />
              <line x1="20" y1="75" x2="120" y2="75" stroke="var(--sd-color)" strokeOpacity="0.4" />
              <line x1="20" y1="120" x2="120" y2="75" />

              <line x1="20" y1="30" x2="120" y2="130" />
              <line x1="20" y1="75" x2="120" y2="130" />
              <line x1="20" y1="120" x2="120" y2="130" stroke="var(--sd-color)" strokeOpacity="0.4" />

              {/* Connect hidden to output */}
              <line x1="120" y1="20" x2="240" y2="75" stroke="var(--sd-color)" strokeOpacity="0.5" />
              <line x1="120" y1="75" x2="240" y2="75" />
              <line x1="120" y1="130" x2="240" y2="75" stroke="var(--sd-color)" strokeOpacity="0.3" />
            </g>
            {/* Input layer nodes */}
            <circle cx="20" cy="30" r="6" fill="var(--sd-color)" className="pulse-node" />
            <circle cx="20" cy="75" r="6" fill="var(--sd-color)" />
            <circle cx="20" cy="120" r="6" fill="var(--sd-color)" />

            {/* Hidden layer nodes */}
            <circle cx="120" cy="20" r="7" fill="var(--text-white)" />
            <circle cx="120" cy="75" r="7" fill="var(--sd-color)" className="pulse-node" />
            <circle cx="120" cy="130" r="7" fill="var(--text-white)" />

            {/* Output node */}
            <circle cx="240" cy="75" r="8" fill="var(--sd-color)" className="pulse-node" />
          </svg>
        </div>
        <div className="ai-viz-metrics">
          <div className="ai-metric">
            <span className="ai-metric-label">EPOCH</span>
            <span className="ai-metric-val tech-font">{epoch}</span>
          </div>
          <div className="ai-metric">
            <span className="ai-metric-label">ACCURACY</span>
            <span className="ai-metric-val tech-font text-cyan">{accuracy}%</span>
          </div>
          <div className="ai-metric">
            <span className="ai-metric-label">LOSS</span>
            <span className="ai-metric-val tech-font text-purple">{loss}</span>
          </div>
        </div>
        <div className="ai-controls">
          <button className="ai-ctrl-btn" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? 'PAUSE ENGINE' : 'RESUME ENGINE'}
          </button>
        </div>
      </div>
    </div>
  )
}
// 2. Web Development Visualizer
const codeLines = [
  'import React from "react";',
  'const Button = () => {',
  '  return (',
  '    <button className="btn">',
  '      Render High Performance',
  '    </button>',
  '  );',
  '};',
  'export default Button;'
]

const WebVisualizer = () => {
  const [logs, setLogs] = useState(['$ npm run dev', 'Ready in 340ms.', 'Local: http://localhost:3000'])
  const [typedLines, setTypedLines] = useState([])
  const [currentLineIdx, setCurrentLineIdx] = useState(0)

  useEffect(() => {
    if (currentLineIdx < codeLines.length) {
      const timeout = setTimeout(() => {
        setTypedLines(prev => [...prev, codeLines[currentLineIdx]])
        setCurrentLineIdx(prev => prev + 1)
        
        // Push log
        if (currentLineIdx === 2) {
          setLogs(prev => [...prev, 'GET / - 200 OK (45ms)'])
        } else if (currentLineIdx === 6) {
          setLogs(prev => [...prev, 'Compiled client successfully.'])
        }
      }, 700)
      return () => clearTimeout(timeout)
    } else {
      const resetTimeout = setTimeout(() => {
        setTypedLines([])
        setCurrentLineIdx(0)
        setLogs(['$ npm run dev', 'Ready in 340ms.', 'Local: http://localhost:3000'])
      }, 5000)
      return () => clearTimeout(resetTimeout)
    }
  }, [currentLineIdx])

  return (
    <div className="sd-viz-panel web-viz">
      <div className="sd-viz-header">
        <span className="sd-dot red" />
        <span className="sd-dot yellow" />
        <span className="sd-dot green" />
        <span className="sd-viz-title">App.jsx</span>
      </div>
      <div className="web-viz-split">
        <pre className="web-code-editor">
          <code>
            {typedLines.map((line, idx) => (
              <div key={idx} className="code-line">
                <span className="line-num">{idx + 1}</span>
                <span className="line-content">{line}</span>
              </div>
            ))}
            <span className="code-cursor">|</span>
          </code>
        </pre>
        <div className="web-terminal">
          <div className="term-header">Terminal</div>
          <div className="term-body">
            {logs.map((log, i) => (
              <div key={i} className="term-log">{log}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// 3. App Development Visualizer
const AppVisualizer = () => {
  const [activeTab, setActiveTab] = useState('home')
  const [clicks, setClicks] = useState(0)

  return (
    <div className="sd-viz-panel app-viz">
      <div className="phone-container">
        <div className="phone-screen">
          <div className="phone-header">
            <span className="phone-time">9:41</span>
            <div className="phone-camera" />
            <div className="phone-battery" />
          </div>
          <div className="phone-body">
            {activeTab === 'home' && (
              <div className="phone-content home">
                <h3>App Overview</h3>
                <div className="phone-card">
                  <p>Welcome to Hunexture Mobile Client</p>
                  <button className="phone-action-btn" onClick={() => setClicks(c => c + 1)}>
                    TAP BUTTON
                  </button>
                  <div className="phone-clicks-count tech-font">Clicks: {clicks}</div>
                </div>
              </div>
            )}
            {activeTab === 'stats' && (
              <div className="phone-content stats">
                <h3>Performance</h3>
                <div className="phone-chart">
                  <div className="chart-bar" style={{ height: '40%' }} />
                  <div className="chart-bar" style={{ height: '75%' }} />
                  <div className="chart-bar" style={{ height: '90%' }} />
                  <div className="chart-bar" style={{ height: '60%' }} />
                </div>
                <div className="phone-stat-row">
                  <span>CPU Usage</span>
                  <strong>14%</strong>
                </div>
              </div>
            )}
            {activeTab === 'settings' && (
              <div className="phone-content settings">
                <h3>System Config</h3>
                <div className="phone-toggle-row">
                  <span>Push Notifications</span>
                  <div className="phone-toggle active" />
                </div>
                <div className="phone-toggle-row">
                  <span>Haptic Feedback</span>
                  <div className="phone-toggle active" />
                </div>
              </div>
            )}
          </div>
          <div className="phone-navbar">
            <button className={`phone-nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
              Home
            </button>
            <button className={`phone-nav-item ${activeTab === 'stats' ? 'active' : ''}`} onClick={() => setActiveTab('stats')}>
              Metrics
            </button>
            <button className={`phone-nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
              Config
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// 4. Cloud Integration Visualizer
const CloudVisualizer = () => {
  const [traffic, setTraffic] = useState(840)
  const health = 'OPTIMAL'

  useEffect(() => {
    const interval = setInterval(() => {
      setTraffic(prev => Math.floor(prev + (Math.random() - 0.5) * 50))
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="sd-viz-panel cloud-viz">
      <div className="sd-viz-header">
        <span className="sd-dot red" />
        <span className="sd-dot yellow" />
        <span className="sd-dot green" />
        <span className="sd-viz-title">Multi-Cloud Topology</span>
      </div>
      <div className="cloud-viz-grid">
        <div className="cloud-node aws">
          <span className="node-icon">☁</span>
          <span>AWS Cluster</span>
          <span className="node-status active">ACTIVE</span>
        </div>
        <div className="cloud-line-horizontal"><div className="data-packet" /></div>
        <div className="cloud-node db">
          <span className="node-icon">🖳</span>
          <span>Redis Cache</span>
          <span className="node-status active">ACTIVE</span>
        </div>
        <div className="cloud-line-vertical"><div className="data-packet vertical" /></div>
        <div className="cloud-node gateway">
          <span className="node-icon">⚡</span>
          <span>API Gateway</span>
          <span className="node-status active">ACTIVE</span>
        </div>
      </div>
      <div className="cloud-stats-panel">
        <div>Throughput: <strong>{traffic} req/s</strong></div>
        <div>System Health: <strong className="text-cyan">{health}</strong></div>
      </div>
    </div>
  )
}

// 5. UI/UX Design Visualizer
const UIUXVisualizer = () => {
  const [borderRadius, setBorderRadius] = useState(16)
  const [opacity, setOpacity] = useState(0.05)
  const [activeTheme, setActiveTheme] = useState('cyber')

  return (
    <div className="sd-viz-panel uiux-viz">
      <div className="sd-viz-header">
        <span className="sd-dot red" />
        <span className="sd-dot yellow" />
        <span className="sd-dot green" />
        <span className="sd-viz-title">Visual Layout Sandbox</span>
      </div>
      <div className="uiux-viz-container">
        <div 
          className={`uiux-sandbox-card theme-${activeTheme}`}
          style={{ borderRadius: `${borderRadius}px`, backgroundColor: `rgba(255,255,255, ${opacity})` }}
        >
          <div className="card-logo">✦ HUX</div>
          <h4>Interactive Interface Core</h4>
          <p>Experiment with border-radius, background glass opacity, and active theme.</p>
          <div className="card-badge">PREMIUM UI</div>
        </div>
        <div className="uiux-sandbox-controls">
          <div className="control-row">
            <span>Radius: {borderRadius}px</span>
            <input type="range" min="0" max="32" value={borderRadius} onChange={(e) => setBorderRadius(Number(e.target.value))} />
          </div>
          <div className="control-row">
            <span>Glass opacity: {Math.round(opacity * 100)}%</span>
            <input type="range" min="0" max="25" step="1" value={opacity * 100} onChange={(e) => setOpacity(Number(e.target.value) / 100)} />
          </div>
          <div className="theme-toggle-btns">
            <button className={`theme-btn ${activeTheme === 'cyber' ? 'active' : ''}`} onClick={() => setActiveTheme('cyber')}>Cyber</button>
            <button className={`theme-btn ${activeTheme === 'sunset' ? 'active' : ''}`} onClick={() => setActiveTheme('sunset')}>Sunset</button>
            <button className={`theme-btn ${activeTheme === 'monochrome' ? 'active' : ''}`} onClick={() => setActiveTheme('monochrome')}>Mono</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// 6. Digital Marketing Visualizer
const MarketingVisualizer = () => {
  const [ctr, setCtr] = useState(4.25)
  const [conversions, setConversions] = useState(1280)
  const [range, setRange] = useState('30d')

  useEffect(() => {
    if (range === '30d') {
      setCtr(4.25)
      setConversions(1280)
    } else if (range === '90d') {
      setCtr(5.62)
      setConversions(4320)
    } else {
      setCtr(6.89)
      setConversions(18940)
    }
  }, [range])

  return (
    <div className="sd-viz-panel marketing-viz">
      <div className="sd-viz-header">
        <span className="sd-dot red" />
        <span className="sd-dot yellow" />
        <span className="sd-dot green" />
        <span className="sd-viz-title">Campaign performance dashboard</span>
      </div>
      <div className="marketing-dashboard-body">
        <div className="mktg-metrics">
          <div className="mktg-metric">
            <span>CTR RATE</span>
            <strong className="tech-font">{ctr}%</strong>
          </div>
          <div className="mktg-metric">
            <span>CONVERSIONS</span>
            <strong className="tech-font">{conversions}</strong>
          </div>
        </div>
        
        {/* Simplified campaign growth chart using SVG */}
        <div className="mktg-chart">
          <svg viewBox="0 0 300 100" className="mktg-chart-svg">
            <defs>
              <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--sd-color)" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="var(--sd-color)" stopOpacity="0"/>
              </linearGradient>
            </defs>
            {range === '30d' && (
              <>
                <path d="M0,80 Q50,70 100,55 T200,50 T300,30" fill="none" stroke="var(--sd-color)" strokeWidth="3" />
                <path d="M0,80 Q50,70 100,55 T200,50 T300,30 L300,100 L0,100 Z" fill="url(#chart-glow)" />
              </>
            )}
            {range === '90d' && (
              <>
                <path d="M0,85 Q50,80 100,60 T200,35 T300,15" fill="none" stroke="var(--sd-color)" strokeWidth="3" />
                <path d="M0,85 Q50,80 100,60 T200,35 T300,15 L300,100 L0,100 Z" fill="url(#chart-glow)" />
              </>
            )}
            {range === '1y' && (
              <>
                <path d="M0,90 Q50,75 100,50 T200,20 T300,5" fill="none" stroke="var(--sd-color)" strokeWidth="3" />
                <path d="M0,90 Q50,75 100,50 T200,20 T300,5 L300,100 L0,100 Z" fill="url(#chart-glow)" />
              </>
            )}
          </svg>
        </div>

        <div className="marketing-controls">
          <button className={`mktg-btn ${range === '30d' ? 'active' : ''}`} onClick={() => setRange('30d')}>30 Days</button>
          <button className={`mktg-btn ${range === '90d' ? 'active' : ''}`} onClick={() => setRange('90d')}>90 Days</button>
          <button className={`mktg-btn ${range === '1y' ? 'active' : ''}`} onClick={() => setRange('1y')}>1 Year</button>
        </div>
      </div>
    </div>
  )
}

const renderVisualizer = (slug) => {
  switch (slug) {
    case 'ai-solutions':
      return <AIVisualizer />
    case 'web-development':
      return <WebVisualizer />
    case 'app-development':
      return <AppVisualizer />
    case 'cloud-integration':
      return <CloudVisualizer />
    case 'uiux-design':
      return <UIUXVisualizer />
    case 'digital-marketing':
      return <MarketingVisualizer />
    default:
      return <AIVisualizer />
  }
}

/* ─────────────────────────────────────────────────────────────
   Main Service Detail Component
   ───────────────────────────────────────────────────────────── */

const ServiceDetail = ({ serviceSlug }) => {
  const { slug: paramSlug } = useParams()
  const navigate = useNavigate()
  const slug = serviceSlug || paramSlug
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
              {renderVisualizer(slug)}
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
                  <span className="sd-benefit-num tech-font" style={{ color: colors.primary }}>
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

      {/* ─── Process ─────────────────────────────────────────────────── */}
      {service.process?.length > 0 && (
        <section className="sd-section sd-alt-bg sd-reveal">
          <div className="sd-inner">
            <div className="sd-section-header">
              <span className="sd-tag tech-font">How We Work</span>
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
                      className="sd-step-dot tech-font"
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
              <span className="sd-tag tech-font">Applications</span>
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
              <span className="sd-tag tech-font">Got Questions?</span>
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
