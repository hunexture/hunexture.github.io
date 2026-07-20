import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { industriesData } from '../data/industriesData'
import { 
    FaArrowRight, FaRocket, FaCheckCircle, FaLaptopCode, FaCogs, 
    FaDatabase, FaServer, FaShieldAlt, FaChartLine, FaNetworkWired 
} from 'react-icons/fa'
import './IndustriesList.css'

// Custom pipeline structure for each industry sector to render in the interactive simulator
const sectorPipelines = {
    healthcare: {
        title: 'HIPAA-Compliant EHR Integration',
        steps: [
            { label: 'Patient Portal', desc: 'Secure client interface', icon: '🖥️' },
            { label: 'EHR Gateway', desc: 'HL7/FHIR translation', icon: '🕸️' },
            { label: 'HIPAA Shield', desc: 'AES-256 cloud encryption', icon: '🔒' },
            { label: 'Clinical DB', desc: 'Secure medical storage', icon: '🖳' }
        ]
    },
    legal: {
        title: 'Secure Case Management & Document Flow',
        steps: [
            { label: 'Firm Portal', desc: 'Lawyer & client interface', icon: '💼' },
            { label: 'Automation Engine', desc: 'Document assembler', icon: '📄' },
            { label: 'Audit Trail Logs', desc: 'Immutable action histories', icon: '🔒' },
            { label: 'Case Archives', desc: 'Relational legal records', icon: '🖳' }
        ]
    },
    fintech: {
        title: 'High-Throughput Ledger & Gateway API',
        steps: [
            { label: 'Consumer App', desc: 'Biometric transaction UI', icon: '📱' },
            { label: 'Payment Gateway', desc: 'PCI-DSS Stripe/Bank API', icon: '💳' },
            { label: 'Ledger Router', desc: 'Double-entry audit core', icon: '⚡' },
            { label: 'Transactional DB', desc: 'Strict ACID database', icon: '🖳' }
        ]
    },
    'e-commerce': {
        title: 'Headless Storefront & Inventory Engine',
        steps: [
            { label: 'Storefront', desc: 'Edge-rendered client', icon: '🛒' },
            { label: 'Order Pipeline', desc: 'State-management router', icon: '📦' },
            { label: 'Stripe Gateway', desc: 'Secure card processing', icon: '💳' },
            { label: 'Inventory DB', desc: 'Real-time stock ledger', icon: '🖳' }
        ]
    },
    logistics: {
        title: 'Fleet Tracking & Routing Platform',
        steps: [
            { label: 'Dispatch Center', desc: 'Operations dashboard', icon: '🖥️' },
            { label: 'GPS Routing API', desc: 'Geospatial pathfinder', icon: '🗺️' },
            { label: 'Fleet Coordinator', desc: 'Real-time device sync', icon: '📡' },
            { label: 'Tracking DB', desc: 'Time-series spatial records', icon: '🖳' }
        ]
    },
    education: {
        title: 'Interactive Virtual LMS Classroom',
        steps: [
            { label: 'LMS Portal', desc: 'Student classroom UI', icon: '🎓' },
            { label: 'Media Streamer', desc: 'Low-latency WebRTC', icon: '🎥' },
            { label: 'Grading Engine', desc: 'Interactive score tracker', icon: '📊' },
            { label: 'LMS Database', desc: 'Course & user records', icon: '🖳' }
        ]
    },
    media: {
        title: 'Ultra-Low Latency Video Streaming System',
        steps: [
            { label: 'Player Client', desc: 'Cross-browser stream player', icon: '📱' },
            { label: 'Transcoder Node', desc: 'Real-time FFmpeg scale', icon: '⚙️' },
            { label: 'Edge CDN Cache', desc: 'Distributed caching nodes', icon: '☁️' },
            { label: 'Media Storage', desc: 'High-availability object store', icon: '🖳' }
        ]
    },
    manufacturing: {
        title: 'Real-Time Industrial IoT Mesh',
        steps: [
            { label: 'Operations HUD', desc: 'Plant supervisor console', icon: '⚙️' },
            { label: 'IoT Collector', desc: 'Modbus/MQTT device hub', icon: '📡' },
            { label: 'Analytics Pipeline', desc: 'Anomaly detection model', icon: '🧠' },
            { label: 'Historian DB', desc: 'Time-series telemetry logs', icon: '🖳' }
        ]
    }
}

const IndustriesList = () => {
    const navigate = useNavigate()
    const [selectedSlug, setSelectedSlug] = useState('healthcare')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const activeIndustry = industriesData.find(ind => ind.slug === selectedSlug) || industriesData[0]
    const pipeline = sectorPipelines[selectedSlug] || sectorPipelines.healthcare

    return (
        <div className="il-page-wrapper">
            {/* ─── Hero Header Section ─────────────────────────────────── */}
            <section className="il-hero">
                <div className="il-hero-grid" />
                <div className="il-hero-blob blob-purple" />
                <div className="il-hero-blob blob-blue" />
                
                <div className="il-hero-inner">
                    <div className="il-hero-grid-split">
                        <div className="il-hero-content">
                            <div className="il-hero-badge tech-font">
                                <FaCogs /> Vertical Architectures
                            </div>
                            <h1 className="il-hero-title">
                                Industry Solutions <br />
                                <span className="text-gradient">Powering Global Sectors</span>
                            </h1>
                            <p className="il-hero-desc">
                                We engineer high-compliance, scalable software blueprints tailored to the complex requirements of regulated industries. Explore our architectural designs.
                            </p>
                            <div className="il-hero-cta-group">
                                <a 
                                    href="#matcher" 
                                    className="il-btn-primary"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        document.querySelector('#matcher')?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                >
                                    Blueprint Sandbox &darr;
                                </a>
                                <a 
                                    href="#grid" 
                                    className="il-btn-secondary"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        document.querySelector('#grid')?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                >
                                    Browse Sectors
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Embedded Graphic Vector */}
                        <div className="il-hero-vector-box">
                            <div className="vector-browser-frame">
                                <div className="frame-header">
                                    <span className="frame-dot red" />
                                    <span className="frame-dot yellow" />
                                    <span className="frame-dot green" />
                                    <span className="frame-title">hunexture.com/industry-blueprint</span>
                                </div>
                                <div className="frame-body">
                                    <img 
                                        src={`${process.env.PUBLIC_URL}/images/infographics/industry-coverage.svg`} 
                                        alt="Industry Coverage Map" 
                                        className="il-hero-svg-asset"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Interactive Blueprint Sandbox ───────────────────────── */}
            <section id="matcher" className="il-section il-alt-bg">
                <div className="il-inner">
                    <div className="il-section-header">
                        <span className="il-tag tech-font">Blueprint Sandbox</span>
                        <h2 className="il-section-title">Interactive Architecture Blueprint</h2>
                        <div className="il-underline" />
                        <p className="il-section-desc">
                            Select a sector tab to inspect its cloud topology pipeline and primary software metrics.
                        </p>
                    </div>

                    <div className="il-sandbox-container">
                        {/* Selector Tabs Grid */}
                        <div className="il-sandbox-tabs">
                            {industriesData.map((ind) => {
                                const IndIcon = ind.icon
                                return (
                                    <button
                                        key={ind.id}
                                        className={`il-sandbox-tab-btn ${selectedSlug === ind.slug ? 'active' : ''}`}
                                        style={{ '--active-border': ind.color }}
                                        onClick={() => setSelectedSlug(ind.slug)}
                                    >
                                        <IndIcon className="tab-icon" style={{ color: selectedSlug === ind.slug ? ind.color : 'inherit' }} />
                                        <span>{ind.name}</span>
                                    </button>
                                )
                            })}
                        </div>

                        {/* Simulator Dashboard Display */}
                        <div className="il-sandbox-display" style={{ '--display-theme': activeIndustry.color }}>
                            <div className="il-display-glow" />
                            <div className="il-display-left">
                                <div className="display-industry-title">
                                    <activeIndustry.icon style={{ color: activeIndustry.color }} />
                                    <h3>{activeIndustry.name} Blueprints</h3>
                                </div>
                                <p className="display-industry-desc">{activeIndustry.description}</p>
                                
                                <div className="display-stats-grid">
                                    {activeIndustry.stats?.slice(0, 3).map((stat, i) => (
                                        <div key={i} className="display-stat-card">
                                            <strong style={{ color: activeIndustry.color }}>{stat.value}</strong>
                                            <span>{stat.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <button 
                                    className="il-btn-primary match-view-btn"
                                    onClick={() => navigate(`/industries/${activeIndustry.slug}`)}
                                >
                                    Explore Solutions <FaArrowRight />
                                </button>
                            </div>

                            <div className="il-display-right">
                                <div className="display-viz-box">
                                    <div className="viz-box-header">
                                        <span className="viz-box-title tech-font">{pipeline.title}</span>
                                    </div>
                                    
                                    <div className="viz-pipeline-visual">
                                        <svg viewBox="0 0 320 100" className="viz-pipeline-svg">
                                            {/* Glow filter */}
                                            <defs>
                                                <filter id="node-glow" x="-20%" y="-20%" width="140%" height="140%">
                                                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                                </filter>
                                            </defs>

                                            {/* Line connections */}
                                            <g stroke="#ffffff" strokeOpacity="0.08" strokeWidth="2" fill="none">
                                                <path d="M40,50 L120,50" />
                                                <path d="M120,50 L200,50" />
                                                <path d="M200,50 L280,50" />
                                            </g>

                                            {/* Animated Data Packets */}
                                            <path 
                                                d="M40,50 L280,50 L40,50" 
                                                fill="none" 
                                                stroke={activeIndustry.color} 
                                                strokeWidth="2" 
                                                strokeDasharray="6 6"
                                                className="packet-flow-anim"
                                            />

                                            {/* Pipeline Steps Nodes */}
                                            {pipeline.steps.map((step, idx) => (
                                                <g key={idx} transform={`translate(${40 + idx * 80},50)`}>
                                                    <circle r="15" fill="#0b0c16" stroke={activeIndustry.color} strokeWidth="1.5" style={{ filter: 'url(#node-glow)' }} />
                                                    <text textAnchor="middle" y="4" fontSize="10">{step.icon}</text>
                                                    <text textAnchor="middle" y="26" fill="var(--text-white)" fontSize="7" fontWeight="600">{step.label}</text>
                                                    <text textAnchor="middle" y="34" fill="var(--text-gray)" fontSize="5.5">{step.desc}</text>
                                                </g>
                                            ))}
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Grid Overview Section ─────────────────────────────────── */}
            <section id="grid" className="il-section">
                <div className="il-inner">
                    <div className="il-section-header">
                        <span className="il-tag tech-font">Direct Sectors</span>
                        <h2 className="il-section-title">All Supported Verticals</h2>
                        <div className="il-underline" />
                    </div>

                    <div className="il-grid">
                        {industriesData.map((industry, index) => {
                            const Icon = industry.icon
                            return (
                                <div 
                                    key={industry.id} 
                                    className="il-card" 
                                    style={{ '--accent-color': industry.color, '--delay': `${index * 0.05}s` }}
                                    onClick={() => navigate(`/industries/${industry.slug}`)}
                                >
                                    <div className="il-card-glow" />
                                    <div className="il-icon-wrapper">
                                        <Icon className="il-icon" />
                                    </div>
                                    <h3 className="il-card-title">{industry.name}</h3>
                                    <p className="il-card-desc">{industry.shortDescription}</p>
                                    <span className="il-card-link tech-font">View Blueprint &rarr;</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IndustriesList
