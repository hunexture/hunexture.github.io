import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    FaCode, FaRocket, FaCheck, FaChevronDown, FaServer, FaDatabase,
    FaLaptopCode, FaArrowRight, FaArrowLeft
} from 'react-icons/fa'
import { SiReact, SiNodedotjs, SiPython, SiTypescript, SiPostgresql, SiRedis, SiDocker, SiAmazonwebservices } from 'react-icons/si'
import { getServiceBySlug } from '../data/servicesData'
import { ServiceSchematic } from './ServiceSchematic'
import './WebDevelopmentPage.css'

const WebDevelopmentPage = () => {
    const navigate = useNavigate()
    const service = getServiceBySlug('web-development')
    const [openFaq, setOpenFaq] = useState(null)
    const [activeTechTab, setActiveTechTab] = useState('frontend')

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

                        {/* Right Column: schematic */}
                        <div className="sch-panel"><ServiceSchematic slug={'web-development'} /></div>

                    </div>

                    {/* Stats Summary Bar */}
                    <div className="wd-hero-stats">
                        <div className="wd-hero-stat">
                            <strong className="tech-font text-gradient">CI/CD</strong>
                            <span>Automated, Reviewed Deploys</span>
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

            {/* ─── Process + Case Applications (side by side) ───────────── */}
            {(service.process?.length > 0 || service.useCases?.length > 0) && (
                <section className="wd-section wd-alt-bg wd-reveal">
                    <div className="wd-inner wd-duo">
                        {service.process?.length > 0 && (
                            <div className="wd-duo-col">
                                <span className="wd-tag tech-font">Development Pipeline</span>
                                <h2 className="wd-section-title">Our Working Process</h2>
                                <ol className="wd-steps">
                                    {service.process.map((step) => (
                                        <li key={step.step} className="wd-step-row">
                                            <span className="wd-step-num tech-font" aria-hidden="true">{step.step}</span>
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
                            <div className="wd-duo-col">
                                <span className="wd-tag tech-font">Proven Solutions</span>
                                <h2 className="wd-section-title">Case Applications</h2>
                                <ul className="wd-uc-list">
                                    {service.useCases.map((uc) => {
                                        const UCIcon = uc.icon || FaCode
                                        return (
                                            <li key={uc.title} className="wd-uc-row">
                                                <span className="wd-uc-icon" aria-hidden="true"><UCIcon /></span>
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

            {/* ─── FAQ Section ─────────────────────────────────────────── */}
            {service.faq?.length > 0 && (
                <section className="wd-section wd-reveal">
                    <div className="wd-inner">
                        <div className="wd-section-header">
                            <span className="wd-tag tech-font">FAQ</span>
                            <h2 className="wd-section-title">Frequently Asked Questions</h2>
                            <div className="wd-underline" />
                        </div>

                        <div className="wd-faq-list">
                            {service.faq.slice(0, 4).map((item, i) => (
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
