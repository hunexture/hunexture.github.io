import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    FaCode, FaRocket, FaCheck, FaChevronDown, FaServer, FaDatabase,
    FaGlobe, FaMobileAlt, FaLaptopCode, FaChartLine, FaArrowRight,
    FaBolt, FaLock, FaUsers, FaArrowLeft, FaSitemap
} from 'react-icons/fa'
import { SiReact, SiNodedotjs, SiPython, SiTypescript, SiPostgresql, SiRedis, SiDocker, SiAmazonwebservices } from 'react-icons/si'
import { getServiceBySlug } from '../data/servicesData'
import './WebDevelopmentPage.css'

const WebDevelopmentPage = () => {
    const navigate = useNavigate()
    const service = getServiceBySlug('web-development')
    const [openFaq, setOpenFaq] = useState(null)
    const [activeTechTab, setActiveTechTab] = useState('frontend')

    // Performance Sandbox State
    const [webp, setWebp] = useState(false)
    const [splitting, setSplitting] = useState(false)
    const [brotli, setBrotli] = useState(false)
    const [cdn, setCdn] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('wd-visible')
                    observer.unobserve(entry.target)
                }
            }),
            { threshold: 0.1 }
        )
        document.querySelectorAll('.wd-reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    if (!service) {
        return (
            <div className="wd-container">
                <div className="wd-not-found">
                    <h1 className="tech-font">Service Not Found</h1>
                    <button onClick={() => navigate('/')} className="wd-btn-primary">
                        <FaArrowLeft /> Back to Home
                    </button>
                </div>
            </div>
        )
    }

    // Dynamic metrics based on toggles
    const getMetrics = () => {
        const activeCount = [webp, splitting, brotli, cdn].filter(Boolean).length
        
        let score = 45
        let size = '4.8 MB'
        let speed = '3.4s'
        let speedColor = 'red'
        let scoreColor = 'red'

        if (activeCount === 1) {
            score = 62
            size = '2.3 MB'
            speed = '1.9s'
            speedColor = 'orange'
            scoreColor = 'orange'
        } else if (activeCount === 2) {
            score = 78
            size = '1.1 MB'
            speed = '1.1s'
            speedColor = 'yellow'
            scoreColor = 'yellow'
        } else if (activeCount === 3) {
            score = 92
            size = '480 KB'
            speed = '0.5s'
            speedColor = 'cyan'
            scoreColor = 'cyan'
        } else if (activeCount === 4) {
            score = 100
            size = '180 KB'
            speed = '0.18s'
            speedColor = 'green'
            scoreColor = 'green'
        }

        return { score, size, speed, speedColor, scoreColor }
    }

    const { score, size, speed, speedColor, scoreColor } = getMetrics()

    // Tech Stack Matrix Data
    const techStack = {
        frontend: {
            title: 'Frontend Engineering',
            desc: 'We build responsive, ultra-fast client-side interfaces using state-managed React architectures.',
            items: [
                { name: 'React 19', icon: SiReact, desc: 'Component-driven interactive modular design' },
                { name: 'TypeScript', icon: SiTypescript, desc: 'Type-safe codebase preventing compile-time bugs' },
                { name: 'Next.js', icon: SiReact, desc: 'Server-side rendering (SSR) for absolute SEO dominance' },
                { name: 'Modern CSS Grid', icon: FaCode, desc: 'Clean layout systems without bloated frameworks' }
            ]
        },
        backend: {
            title: 'Backend Systems',
            desc: 'Secure, multi-threaded server architectures built to scale horizontal request traffic.',
            items: [
                { name: 'Node.js', icon: SiNodedotjs, desc: 'Asynchronous event-driven I/O performance' },
                { name: 'Python / Django', icon: SiPython, desc: 'Robust data management and secure integrations' },
                { name: 'Go / APIs', icon: FaCode, desc: 'High concurrency backends with micro-millisecond response times' },
                { name: 'REST / GraphQL', icon: FaServer, desc: 'Optimized network routing for seamless data fetching' }
            ]
        },
        database: {
            title: 'Databases & Caching',
            desc: 'Highly indexed relational databases coupled with in-memory store systems.',
            items: [
                { name: 'PostgreSQL', icon: SiPostgresql, desc: 'Acid-compliant structured relational database' },
                { name: 'Redis Cache', icon: SiRedis, desc: 'Sub-millisecond query responses caching static requests' },
                { name: 'MongoDB', icon: FaDatabase, desc: 'Document store architecture for highly flexible schemas' },
                { name: 'Elasticsearch', icon: FaDatabase, desc: 'Fuzzy-logic enterprise log search indexer' }
            ]
        },
        infrastructure: {
            title: 'DevOps & Infrastructure',
            desc: 'Continuous delivery pipelines delivering secure cloud deployments.',
            items: [
                { name: 'Docker', icon: SiDocker, desc: 'Isolated system environment containerization' },
                { name: 'AWS Cloud', icon: SiAmazonwebservices, desc: 'Dynamic load balancing and auto-scaling' },
                { name: 'Nginx Engine', icon: FaServer, desc: 'Reverse proxy and Brotli compilation routers' },
                { name: 'GitHub Actions', icon: FaRocket, desc: 'Continuous integration and instant deployments' }
            ]
        }
    }

    return (
        <div className="wd-page-wrapper">
            {/* ─── Hero Section ────────────────────────────────────────── */}
            <section className="wd-hero">
                <div className="wd-hero-grid" />
                <div className="wd-hero-blob blob-indigo" />
                <div className="wd-hero-blob blob-cyan" />
                
                <div className="wd-hero-inner">
                    <div className="wd-hero-grid-split">
                        
                        {/* Left Column: Content */}
                        <div className="wd-hero-content">
                            <div className="wd-hero-badge tech-font">
                                <FaLaptopCode /> Enterprise Web Engineering
                            </div>
                            <h1 className="wd-hero-title">
                                Web Applications <br />
                                <span className="text-gradient">Engineered to Scale</span>
                            </h1>
                            <p className="wd-hero-desc">
                                We craft premium, high-performance web applications that load instantly, secure your data, and grow with your traffic. Built on modern React frameworks and microservice architectures.
                            </p>

                            <div className="wd-feature-badges">
                                {service.features?.map((feat, i) => (
                                    <span key={i} className="wd-badge tech-font">
                                        <FaCheck className="wd-badge-check" /> {feat}
                                    </span>
                                ))}
                            </div>

                            <div className="wd-hero-cta">
                                <button 
                                    className="wd-btn-primary"
                                    onClick={() => {
                                        navigate('/')
                                        setTimeout(() => {
                                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                                        }, 200)
                                    }}
                                >
                                    Launch Your Project <FaRocket />
                                </button>
                                <button className="wd-btn-secondary" onClick={() => navigate('/#portfolio')}>
                                    Explore Portfolio
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Signature Interactive Widget */}
                        <div className="wd-hero-visualizer">
                            <div className="wd-viz-container">
                                <div className="wd-viz-header">
                                    <span className="viz-dot red" />
                                    <span className="viz-dot yellow" />
                                    <span className="viz-dot green" />
                                    <span className="viz-header-title">core-perf-optimizer.sh</span>
                                </div>
                                <div className="wd-viz-body">
                                    <div className="wd-viz-stats-grid">
                                        <div className="viz-stat-card">
                                            <span>LIGHTHOUSE SCORE</span>
                                            <strong className={`score-${scoreColor} tech-font`}>{score}</strong>
                                            <div className="score-bar-bg">
                                                <div className={`score-bar fill-${scoreColor}`} style={{ width: `${score}%` }} />
                                            </div>
                                        </div>
                                        <div className="viz-stat-card">
                                            <span>PAGE WEIGHT</span>
                                            <strong className="text-white tech-font">{size}</strong>
                                        </div>
                                        <div className="viz-stat-card">
                                            <span>LCP SPEED</span>
                                            <strong className={`speed-${speedColor} tech-font`}>{speed}</strong>
                                        </div>
                                    </div>

                                    {/* SVG Interactive Pipeline Visualizer */}
                                    <div className="wd-pipeline-box">
                                        <svg viewBox="0 0 400 120" className="wd-pipeline-svg">
                                            {/* Glow Filters */}
                                            <defs>
                                                <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                                </filter>
                                            </defs>

                                            {/* Node Paths */}
                                            <g stroke="#ffffff" strokeOpacity="0.08" strokeWidth="2" fill="none">
                                                <path d="M40,60 L120,60" />
                                                <path d="M120,60 L200,60" />
                                                <path d="M200,60 L280,60" />
                                                <path d="M280,60 L360,60" />
                                            </g>

                                            {/* Dynamic Packet Path (CDN Bypass) */}
                                            {cdn ? (
                                                /* CDN is active: packets short-circuit between Client and Edge CDN node */
                                                <path 
                                                    d="M40,60 Q120,20 200,60 Q120,20 40,60" 
                                                    fill="none" 
                                                    stroke="var(--electric-cyan)" 
                                                    strokeWidth="2.5" 
                                                    strokeDasharray="6 6"
                                                    className="packet-flow-fast"
                                                />
                                            ) : (
                                                /* CDN is inactive: packets travel all the way to DB node */
                                                <path 
                                                    d="M40,60 L360,60 L40,60" 
                                                    fill="none" 
                                                    stroke="var(--electric-indigo)" 
                                                    strokeWidth="2" 
                                                    strokeDasharray="8 8"
                                                    className={brotli ? "packet-flow-fast" : "packet-flow-slow"}
                                                />
                                            )}

                                            {/* Nodes */}
                                            {/* Client Node */}
                                            <g transform="translate(40,60)">
                                                <circle r="18" fill="#0d0e1b" stroke="var(--text-gray)" strokeWidth="1.5" />
                                                <text textAnchor="middle" y="4" fill="var(--text-white)" fontSize="10" className="tech-font">🖥️</text>
                                                <text textAnchor="middle" y="32" fill="var(--text-gray)" fontSize="8">Client</text>
                                            </g>

                                            {/* Network Node (DNS/Bypass) */}
                                            <g transform="translate(120,60)">
                                                <circle r="16" fill="#0d0e1b" stroke={splitting ? "var(--electric-cyan)" : "rgba(255,255,255,0.15)"} strokeWidth="1.5" />
                                                <text textAnchor="middle" y="3" fill="var(--text-white)" fontSize="9" className="tech-font">🕸️</text>
                                                <text textAnchor="middle" y="30" fill="var(--text-gray)" fontSize="8">Router</text>
                                            </g>

                                            {/* CDN Node */}
                                            <g transform="translate(200,60)">
                                                <circle r="18" fill="#0d0e1b" stroke={cdn ? "var(--electric-cyan)" : "rgba(255,255,255,0.15)"} strokeWidth="1.5" style={{ filter: cdn ? 'url(#glow-cyan)' : 'none' }} />
                                                <text textAnchor="middle" y="4" fill="var(--text-white)" fontSize="10">☁️</text>
                                                <text textAnchor="middle" y="32" fill="var(--text-gray)" fontSize="8">Edge CDN</text>
                                            </g>

                                            {/* App Server Node */}
                                            <g transform="translate(280,60)">
                                                <circle r="16" fill="#0d0e1b" stroke={brotli ? "var(--electric-cyan)" : "rgba(255,255,255,0.15)"} strokeWidth="1.5" />
                                                <text textAnchor="middle" y="3" fill="var(--text-white)" fontSize="9">⚙️</text>
                                                <text textAnchor="middle" y="30" fill="var(--text-gray)" fontSize="8">Server</text>
                                            </g>

                                            {/* Database Node */}
                                            <g transform="translate(360,60)">
                                                <circle r="18" fill="#0d0e1b" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                                                <text textAnchor="middle" y="4" fill="var(--text-white)" fontSize="10">🖳</text>
                                                <text textAnchor="middle" y="32" fill="var(--text-gray)" fontSize="8">Database</text>
                                            </g>
                                        </svg>
                                    </div>

                                    {/* Optimization Controls */}
                                    <div className="wd-viz-controls">
                                        <div className="viz-control-row">
                                            <div className="control-label-wrap">
                                                <strong>Optimize Image Delivery</strong>
                                                <span>Convert site media to WebP/AVIF file formats</span>
                                            </div>
                                            <button 
                                                className={`toggle-switch ${webp ? 'active' : ''}`}
                                                onClick={() => setWebp(!webp)}
                                            >
                                                <span className="toggle-thumb" />
                                            </button>
                                        </div>
                                        <div className="viz-control-row">
                                            <div className="control-label-wrap">
                                                <strong>Split Bundle Payloads</strong>
                                                <span>Use dynamic imports and code splitting</span>
                                            </div>
                                            <button 
                                                className={`toggle-switch ${splitting ? 'active' : ''}`}
                                                onClick={() => setSplitting(!splitting)}
                                            >
                                                <span className="toggle-thumb" />
                                            </button>
                                        </div>
                                        <div className="viz-control-row">
                                            <div className="control-label-wrap">
                                                <strong>Brotli Compression</strong>
                                                <span>Compress response headers at server runtime</span>
                                            </div>
                                            <button 
                                                className={`toggle-switch ${brotli ? 'active' : ''}`}
                                                onClick={() => setBrotli(!brotli)}
                                            >
                                                <span className="toggle-thumb" />
                                            </button>
                                        </div>
                                        <div className="viz-control-row">
                                            <div className="control-label-wrap">
                                                <strong>Global CDN Caching</strong>
                                                <span>Short-circuit routes by serving from edge caches</span>
                                            </div>
                                            <button 
                                                className={`toggle-switch ${cdn ? 'active' : ''}`}
                                                onClick={() => setCdn(!cdn)}
                                            >
                                                <span className="toggle-thumb" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Stats Summary Bar */}
                    <div className="wd-hero-stats">
                        <div className="wd-hero-stat">
                            <strong className="tech-font text-gradient">99.9%</strong>
                            <span>Uptime SLA Guaranteed</span>
                        </div>
                        <div className="wd-hero-stat">
                            <strong className="tech-font text-gradient">&lt;200ms</strong>
                            <span>Edge Node TTFB</span>
                        </div>
                        <div className="wd-hero-stat">
                            <strong className="tech-font text-gradient">100%</strong>
                            <span>Responsive & Accessible</span>
                        </div>
                        <div className="wd-hero-stat">
                            <strong className="tech-font text-gradient">GDPR</strong>
                            <span>Compliance Built-in</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Key Benefits Section ─────────────────────────────────── */}
            {service.benefits?.length > 0 && (
                <section className="wd-section wd-alt-bg wd-reveal">
                    <div className="wd-inner">
                        <div className="wd-section-header">
                            <span className="wd-tag tech-font">Metrics That Matter</span>
                            <h2 className="wd-section-title">Key Core Benefits</h2>
                            <div className="wd-underline" />
                            <p className="wd-section-desc">
                                We design and build systems around performance indices that improve conversions and lower bounce rates.
                            </p>
                        </div>

                        <div className="wd-benefits-grid">
                            {service.benefits.map((benefit, i) => (
                                <div key={i} className="wd-benefit-card" style={{ '--delay': `${i * 0.08}s` }}>
                                    <div className="wd-benefit-icon-wrapper">
                                        <FaCheck className="wd-benefit-check" />
                                    </div>
                                    <span className="wd-benefit-num tech-font">0{i + 1}</span>
                                    <p>{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── Interactive Technology Matrix ────────────────────────── */}
            <section className="wd-section wd-reveal">
                <div className="wd-inner">
                    <div className="wd-section-header">
                        <span className="wd-tag tech-font">The Tech Matrix</span>
                        <h2 className="wd-section-title">Modern Web Stack</h2>
                        <div className="wd-underline" />
                        <p className="wd-section-desc">
                            We select highly resilient technology tools that maintain stability, compliance, and long-term modularity.
                        </p>
                    </div>

                    <div className="wd-tech-matrix-container">
                        {/* Tab Headers */}
                        <div className="wd-matrix-tabs">
                            <button 
                                className={`matrix-tab-btn ${activeTechTab === 'frontend' ? 'active' : ''}`}
                                onClick={() => setActiveTechTab('frontend')}
                            >
                                Frontend
                            </button>
                            <button 
                                className={`matrix-tab-btn ${activeTechTab === 'backend' ? 'active' : ''}`}
                                onClick={() => setActiveTechTab('backend')}
                            >
                                Backend
                            </button>
                            <button 
                                className={`matrix-tab-btn ${activeTechTab === 'database' ? 'active' : ''}`}
                                onClick={() => setActiveTechTab('database')}
                            >
                                Data Stores
                            </button>
                            <button 
                                className={`matrix-tab-btn ${activeTechTab === 'infrastructure' ? 'active' : ''}`}
                                onClick={() => setActiveTechTab('infrastructure')}
                            >
                                DevOps
                            </button>
                        </div>

                        {/* Tab Content Panel */}
                        <div className="wd-matrix-content">
                            <div className="matrix-info">
                                <h3>{techStack[activeTechTab].title}</h3>
                                <p>{techStack[activeTechTab].desc}</p>
                            </div>
                            <div className="matrix-grid">
                                {techStack[activeTechTab].items.map((item, idx) => {
                                    const TechIcon = item.icon
                                    return (
                                        <div key={idx} className="matrix-item-card">
                                            <div className="matrix-item-icon">
                                                <TechIcon />
                                            </div>
                                            <div className="matrix-item-text">
                                                <h4>{item.name}</h4>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Structured Development Process ───────────────────────── */}
            {service.process?.length > 0 && (
                <section className="wd-section wd-alt-bg wd-reveal">
                    <div className="wd-inner">
                        <div className="wd-section-header">
                            <span className="wd-tag tech-font">Development Pipeline</span>
                            <h2 className="wd-section-title">Our Working Process</h2>
                            <div className="wd-underline" />
                            <p className="wd-section-desc">
                                We maintain a rigorous, sprint-based approach from initial user wireframing to automated production releases.
                            </p>
                        </div>

                        <div className="wd-timeline">
                            {service.process.map((step, i) => (
                                <div key={i} className="wd-step" style={{ '--delay': `${i * 0.1}s` }}>
                                    <div className="wd-step-tracker">
                                        <div className="wd-step-number tech-font">
                                            {step.step}
                                        </div>
                                        {i < service.process.length - 1 && <div className="wd-step-line" />}
                                    </div>
                                    <div className="wd-step-card">
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── Industry Use Cases ───────────────────────────────────── */}
            {service.useCases?.length > 0 && (
                <section className="wd-section wd-reveal">
                    <div className="wd-inner">
                        <div className="wd-section-header">
                            <span className="wd-tag tech-font">Proven Solutions</span>
                            <h2 className="wd-section-title">Case Applications</h2>
                            <div className="wd-underline" />
                            <p className="wd-section-desc">
                                Explore how custom web platforms solve industry-specific efficiency and integration problems.
                            </p>
                        </div>

                        <div className="wd-usecases-grid">
                            {service.useCases.map((uc, i) => {
                                const UCIcon = uc.icon || FaCode
                                return (
                                    <div key={i} className="wd-usecase-card" style={{ '--delay': `${i * 0.08}s` }}>
                                        <div className="wd-usecase-icon-box">
                                            <UCIcon />
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

            {/* ─── FAQ Section ─────────────────────────────────────────── */}
            {service.faq?.length > 0 && (
                <section className="wd-section wd-alt-bg wd-reveal">
                    <div className="wd-inner">
                        <div className="wd-section-header">
                            <span className="wd-tag tech-font">FAQ</span>
                            <h2 className="wd-section-title">Frequently Asked Questions</h2>
                            <div className="wd-underline" />
                        </div>

                        <div className="wd-faq-list">
                            {service.faq.map((item, i) => (
                                <div 
                                    key={i} 
                                    className={`wd-faq-item ${openFaq === i ? 'open' : ''}`}
                                >
                                    <button 
                                        className="wd-faq-trigger"
                                        onClick={() => setOpenFaq(prev => prev === i ? null : i)}
                                        aria-expanded={openFaq === i}
                                    >
                                        <span>{item.question}</span>
                                        <FaChevronDown className="wd-faq-arrow" />
                                    </button>
                                    <div className="wd-faq-answer">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── Bottom Call To Action ───────────────────────────────── */}
            <section className="wd-cta-section wd-reveal">
                <div className="wd-cta-glow" />
                <div className="wd-cta-inner">
                    <span className="wd-tag tech-font">Let's Build</span>
                    <h2>Ready to Build Your Web Application?</h2>
                    <p>
                        Schedule a technical session with our software architect to plan your stack, architecture model, and release sprints.
                    </p>
                    <div className="wd-cta-buttons">
                        <button 
                            className="wd-btn-primary"
                            onClick={() => {
                                navigate('/')
                                setTimeout(() => {
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                                }, 200)
                            }}
                        >
                            Request Consultation <FaArrowRight />
                        </button>
                        <button className="wd-btn-secondary" onClick={() => navigate('/#portfolio')}>
                            Review Case Studies
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WebDevelopmentPage
