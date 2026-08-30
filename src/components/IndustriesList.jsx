import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { industriesData } from '../data/industriesData'
import { 
    FaArrowRight, FaRocket, FaCheckCircle, FaLaptopCode, FaCogs, 
    FaDatabase, FaServer, FaShieldAlt, FaChartLine, FaNetworkWired,
    FaSearch, FaBrain, FaCloud, FaLock, FaMicrochip, FaUsers
} from 'react-icons/fa'
import './IndustriesList.css'

// Custom architecture pipeline for each industry sector in the interactive simulator
const sectorPipelines = {
    healthcare: {
        title: 'HIPAA-Compliant EHR & Telehealth Gateway',
        steps: [
            { label: 'Patient Portal', desc: 'Secure Web & Mobile UI', icon: '🖥️' },
            { label: 'HL7/FHIR Engine', desc: 'Clinical Data Interop', icon: '🕸️' },
            { label: 'HIPAA Shield', desc: 'AES-256 Cloud Encryption', icon: '🔒' },
            { label: 'Clinical DB', desc: 'High-Availability EHR', icon: '🖳' }
        ]
    },
    legal: {
        title: 'Secure Case Management & Document Intelligence',
        steps: [
            { label: 'Firm Portal', desc: 'Client & Attorney Console', icon: '💼' },
            { label: 'AI Document Parser', desc: 'NLP Contract Analysis', icon: '📄' },
            { label: 'Immutable Audit', desc: 'Tamper-Proof Action Logs', icon: '🔒' },
            { label: 'Legal Vault', desc: 'Encrypted Case Archive', icon: '🖳' }
        ]
    },
    fintech: {
        title: 'High-Throughput Ledger & PCI-DSS Payment Gateway',
        steps: [
            { label: 'Consumer App', desc: 'Biometric Banking UI', icon: '📱' },
            { label: 'Payment Gateway', desc: 'Tokenized Card & Bank API', icon: '💳' },
            { label: 'Ledger Engine', desc: 'Double-Entry Audit Router', icon: '⚡' },
            { label: 'ACID Ledger DB', desc: 'Sub-millisecond Settlement', icon: '🖳' }
        ]
    },
    'e-commerce': {
        title: 'Headless Omnichannel Storefront & Inventory Mesh',
        steps: [
            { label: 'Edge Storefront', desc: 'Next.js Dynamic Client', icon: '🛒' },
            { label: 'Order Pipeline', desc: 'Distributed Queue Broker', icon: '📦' },
            { label: 'Payment Gateway', desc: 'Multi-Currency Checkout', icon: '💳' },
            { label: 'Inventory DB', desc: 'Real-Time Global Stock', icon: '🖳' }
        ]
    },
    logistics: {
        title: 'Real-Time Fleet Telemetry & Predictive Routing Engine',
        steps: [
            { label: 'Fleet HUD', desc: 'Dispatcher Control Map', icon: '🖥️' },
            { label: 'Geospatial API', desc: 'AI Route Optimization', icon: '🗺️' },
            { label: 'IoT Coordinator', desc: 'OBD-II & Sensor Mesh', icon: '📡' },
            { label: 'Time-Series DB', desc: 'Continuous Telemetry Logs', icon: '🖳' }
        ]
    },
    education: {
        title: 'Interactive Virtual LMS & Adaptive Learning Core',
        steps: [
            { label: 'LMS Classroom', desc: 'Student & Educator UI', icon: '🎓' },
            { label: 'Media Streamer', desc: 'Ultra-Low Latency WebRTC', icon: '🎥' },
            { label: 'AI Tutor Engine', desc: 'Adaptive Learning Models', icon: '🧠' },
            { label: 'Curriculum DB', desc: 'Interactive Assessment Core', icon: '🖳' }
        ]
    },
    'media-ott': {
        title: 'Ultra-Low Latency Adaptive Bitrate Video CDN Mesh',
        steps: [
            { label: 'Video Player', desc: 'Cross-Device Multi-Screen', icon: '📱' },
            { label: 'Transcoder Node', desc: 'Dynamic HLS / DASH Encoding', icon: '⚙️' },
            { label: 'Global Edge CDN', desc: 'Distributed Cache Network', icon: '☁️' },
            { label: 'Object Store', desc: 'Multi-Region Media Vault', icon: '🖳' }
        ]
    },
    travel: {
        title: 'Global Travel GDS & Dynamic Booking Engine',
        steps: [
            { label: 'Traveler App', desc: 'Multi-Destination Portal', icon: '✈️' },
            { label: 'GDS Aggregator', desc: 'Sabre / Amadeus Live API', icon: '🔄' },
            { label: 'Dynamic Pricing', desc: 'Real-Time Fare Optimizer', icon: '📈' },
            { label: 'Reservation DB', desc: 'Synced Hotel & Flight Core', icon: '🖳' }
        ]
    },
    retail: {
        title: 'POS Cloud Sync & Unified Omnichannel Commerce',
        steps: [
            { label: 'In-Store POS', desc: 'Touchscreen Terminal App', icon: '🏪' },
            { label: 'Sync Broker', desc: 'Offline-First Cloud Sync', icon: '🔄' },
            { label: 'Loyalty Engine', desc: 'Personalized Rewards API', icon: '🎁' },
            { label: 'Enterprise DB', desc: 'Unified Retail Inventory', icon: '🖳' }
        ]
    },
    construction: {
        title: 'BIM 3D Project Coordination & Field Safety HUD',
        steps: [
            { label: 'Field Mobile App', desc: 'Offline Site Inspector UI', icon: '🏗️' },
            { label: 'BIM 3D Renderer', desc: 'Cloud CAD Model Pipeline', icon: '📐' },
            { label: 'Safety Engine', desc: 'Automated Compliance Logs', icon: '🛡️' },
            { label: 'Project Vault', desc: 'Document & Blueprint DB', icon: '🖳' }
        ]
    },
    sports: {
        title: 'Athlete Biometric Analytics & Fan Engagement Mesh',
        steps: [
            { label: 'Fan Arena App', desc: 'Live Augmented Stream UI', icon: '🏟️' },
            { label: 'Wearable Sync', desc: 'Bluetooth / GPS Ingestion', icon: '⌚' },
            { label: 'Performance ML', desc: 'Predictive Fatigue Scoring', icon: '🧠' },
            { label: 'Sports DB', desc: 'Real-Time Match Analytics', icon: '🖳' }
        ]
    },
    manufacturing: {
        title: 'Industry 4.0 Smart Factory & Predictive IoT Mesh',
        steps: [
            { label: 'Plant Console', desc: 'Shop Floor SCADA Interface', icon: '⚙️' },
            { label: 'Modbus / MQTT', desc: 'Industrial Device Gateway', icon: '📡' },
            { label: 'Predictive ML', desc: 'Anomaly & Downtime Alarm', icon: '🧠' },
            { label: 'Historian DB', desc: 'High-Frequency Sensor Logs', icon: '🖳' }
        ]
    },
    insurance: {
        title: 'Automated Claims Processing & Underwriting AI',
        steps: [
            { label: 'Policyholder App', desc: 'FNOL Photo Claim Upload', icon: '📱' },
            { label: 'Computer Vision', desc: 'Damage Assessment Model', icon: '👁️' },
            { label: 'Risk Assessor', desc: 'Actuarial Underwriting ML', icon: '⚖️' },
            { label: 'Claims Ledger', desc: 'Policy & Payout Database', icon: '🖳' }
        ]
    },
    telecom: {
        title: '5G Network Slice Orchestration & OSS/BSS Core',
        steps: [
            { label: 'Self-Care Portal', desc: 'Subscriber Usage Manager', icon: '📶' },
            { label: 'PCRF Gateway', desc: 'Real-Time Policy Control', icon: '⚡' },
            { label: 'BSS/OSS Engine', desc: 'Automated Billing Pipeline', icon: '💳' },
            { label: 'Network DB', desc: 'Distributed CDR Warehouse', icon: '🖳' }
        ]
    },
    wellness: {
        title: 'Connected Health Hub & Personalized Wellness ML',
        steps: [
            { label: 'Member App', desc: 'Holistic Health Tracker', icon: '🧘' },
            { label: 'Sync Aggregator', desc: 'Apple Health & Fitbit API', icon: '🔄' },
            { label: 'Recommendation', desc: 'Personalized Workout ML', icon: '🧠' },
            { label: 'Wellness DB', desc: 'Secure Biometric Vault', icon: '🖳' }
        ]
    },
    hospitality: {
        title: 'Contactless Guest Journey & PMS Cloud Ecosystem',
        steps: [
            { label: 'Mobile Key App', desc: 'Digital Check-in & Keyless', icon: '🏨' },
            { label: 'PMS Interop', desc: 'Opera / Mews Integration', icon: '🔄' },
            { label: 'Guest Concierge', desc: 'AI Room Service & Chat', icon: '🛎️' },
            { label: 'Hospitality DB', desc: 'Unified Folio & Booking Core', icon: '🖳' }
        ]
    },
    'real-estate': {
        title: 'PropTech 3D Virtual Tour & Smart Lease Platform',
        steps: [
            { label: 'Buyer Portal', desc: 'WebGL 3D Walkthrough UI', icon: '🏢' },
            { label: 'MLS Aggregator', desc: 'Live Property Feed Broker', icon: '🔄' },
            { label: 'Smart Escrow', desc: 'Digital Lease Signature', icon: '📝' },
            { label: 'PropTech DB', desc: 'Asset & Tenant Management', icon: '🖳' }
        ]
    },
    social: {
        title: 'High-Concurrency Feed Engine & Moderation AI',
        steps: [
            { label: 'Feed Client', desc: 'Real-Time WebSocket App', icon: '💬' },
            { label: 'Event Router', desc: 'Kafka Message Ingestion', icon: '⚡' },
            { label: 'Safety AI', desc: 'Live Content Moderation', icon: '🛡️' },
            { label: 'Graph DB', desc: 'Distributed Social Graph', icon: '🖳' }
        ]
    }
}

const enterpriseCapabilities = [
    {
        icon: FaShieldAlt,
        title: 'Enterprise Security & Compliance',
        desc: 'HIPAA, SOC 2 Type II, PCI-DSS Level 1, and GDPR compliance embedded into application architecture from day one.'
    },
    {
        icon: FaBrain,
        title: 'Domain-Trained AI & ML Agents',
        desc: 'Custom neural models, predictive diagnostics, algorithmic routing, and fine-tuned LLMs trained on sector-specific workflows.'
    },
    {
        icon: FaCloud,
        title: 'Multi-Cloud High Availability',
        desc: 'Auto-scaling Kubernetes clusters, geo-distributed serverless functions, and sub-10ms edge caching across AWS, GCP, and Azure.'
    },
    {
        icon: FaNetworkWired,
        title: 'Legacy System Interoperability',
        desc: 'Seamless bridging between legacy mainframes, ERPs, EHRs, GDS feeds, and modern REST/GraphQL microservices.'
    }
]

const IndustriesList = () => {
    const navigate = useNavigate()
    const [selectedSlug, setSelectedSlug] = useState('healthcare')
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const activeIndustry = industriesData.find(ind => ind.slug === selectedSlug) || industriesData[0]
    const pipeline = sectorPipelines[selectedSlug] || sectorPipelines.healthcare

    // Filter industries by search query
    const filteredIndustries = industriesData.filter(ind => 
        ind.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

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
                                <span className="il-badge-dot"></span>
                                Vertical Enterprise Blueprints
                            </div>
                            <h1 className="il-hero-title">
                                Industry Solutions <br />
                                <span className="text-gradient">Powering Global Sectors</span>
                            </h1>
                            <p className="il-hero-desc">
                                We engineer high-compliance, scalable software architectures tailored to the rigorous demands of regulated industries. Explore our sector-specific engineering blueprints.
                            </p>

                            <div className="il-hero-stats-row">
                                <div className="il-hero-stat-pill">
                                    <strong className="tech-font">18+</strong>
                                    <span>Industry Verticals</span>
                                </div>
                                <div className="il-hero-stat-pill">
                                    <strong className="tech-font">99.9%</strong>
                                    <span>Compliance Rate</span>
                                </div>
                                <div className="il-hero-stat-pill">
                                    <strong className="tech-font">20+</strong>
                                    <span>Years Engineering</span>
                                </div>
                            </div>

                            <div className="il-hero-cta-group">
                                <a 
                                    href="#matcher" 
                                    className="il-btn-primary"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        document.querySelector('#matcher')?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                >
                                    Architecture Sandbox &darr;
                                </a>
                                <a 
                                    href="#grid" 
                                    className="il-btn-secondary"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        document.querySelector('#grid')?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                >
                                    Browse All 18 Sectors
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Interactive System Frame */}
                        <div className="il-hero-vector-box">
                            <div className="vector-browser-frame">
                                <div className="frame-header">
                                    <span className="frame-dot red" />
                                    <span className="frame-dot yellow" />
                                    <span className="frame-dot green" />
                                    <span className="frame-title">hunexture.com/industry-mesh</span>
                                </div>
                                <div className="frame-body">
                                    <div className="il-hero-mesh-preview">
                                        <div className="mesh-center-node">
                                            <FaBrain className="mesh-ai-icon" />
                                            <span className="tech-font">HUNEXTURE AI</span>
                                        </div>
                                        <div className="mesh-orbit-items">
                                            <div className="orbit-item oi-1"><span>Health EHR</span></div>
                                            <div className="orbit-item oi-2"><span>Fintech Core</span></div>
                                            <div className="orbit-item oi-3"><span>Supply Chain</span></div>
                                            <div className="orbit-item oi-4"><span>Media CDN</span></div>
                                            <div className="orbit-item oi-5"><span>PropTech 3D</span></div>
                                            <div className="orbit-item oi-6"><span>Smart IoT</span></div>
                                        </div>
                                    </div>
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
                        <span className="il-tag tech-font">Architecture Sandbox</span>
                        <h2 className="il-section-title">Interactive System Flow Simulator</h2>
                        <div className="il-underline" />
                        <p className="il-section-desc">
                            Select any vertical sector below to simulate its production cloud topology, encryption boundary, and real-time data orchestration.
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
                                    <h3>{activeIndustry.name} Blueprint</h3>
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
                                    Explore {activeIndustry.name} Solutions <FaArrowRight />
                                </button>
                            </div>

                            <div className="il-display-right">
                                <div className="display-viz-box">
                                    <div className="viz-box-header">
                                        <span className="viz-box-badge tech-font">PRODUCTION PIPELINE</span>
                                        <span className="viz-box-title tech-font">{pipeline.title}</span>
                                    </div>
                                    
                                    <div className="viz-pipeline-visual">
                                        <svg viewBox="0 0 360 110" className="viz-pipeline-svg">
                                            <defs>
                                                <filter id="node-glow" x="-30%" y="-30%" width="160%" height="160%">
                                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                                </filter>
                                            </defs>

                                            {/* Line connections */}
                                            <g stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none">
                                                <path d="M45,55 L135,55" />
                                                <path d="M135,55 L225,55" />
                                                <path d="M225,55 L315,55" />
                                            </g>

                                            {/* Animated Data Packets */}
                                            <path 
                                                d="M45,55 L315,55" 
                                                fill="none" 
                                                stroke={activeIndustry.color} 
                                                strokeWidth="2.5" 
                                                strokeDasharray="6 8"
                                                className="packet-flow-anim"
                                            />

                                            {/* Pipeline Steps Nodes */}
                                            {pipeline.steps.map((step, idx) => (
                                                <g key={idx} transform={`translate(${45 + idx * 90},55)`}>
                                                    <circle r="18" fill="var(--card-bg)" stroke={activeIndustry.color} strokeWidth="2" style={{ filter: 'url(#node-glow)' }} />
                                                    <text textAnchor="middle" y="5" fontSize="12">{step.icon}</text>
                                                    <text textAnchor="middle" y="30" fill="var(--text-white)" fontSize="8.5" fontWeight="700">{step.label}</text>
                                                    <text textAnchor="middle" y="40" fill="var(--text-gray)" fontSize="7">{step.desc}</text>
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

            {/* ─── Enterprise Capabilities Section ──────────────────────── */}
            <section className="il-section">
                <div className="il-inner">
                    <div className="il-section-header">
                        <span className="il-tag tech-font">Enterprise Baseline</span>
                        <h2 className="il-section-title">Built for Mission-Critical Standards</h2>
                        <div className="il-underline" />
                        <p className="il-section-desc">
                            Every industry solution we deliver adheres to enterprise-grade compliance, low-latency microservices, and AI-enabled resilience.
                        </p>
                    </div>

                    <div className="il-capabilities-grid">
                        {enterpriseCapabilities.map((cap, i) => {
                            const CapIcon = cap.icon
                            return (
                                <div key={i} className="il-cap-card glass-panel">
                                    <div className="il-cap-icon-box">
                                        <CapIcon />
                                    </div>
                                    <h3>{cap.title}</h3>
                                    <p>{cap.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ─── Grid Overview Section with Search ─────────────────────── */}
            <section id="grid" className="il-section il-alt-bg">
                <div className="il-inner">
                    <div className="il-section-header">
                        <span className="il-tag tech-font">All Industry Verticals</span>
                        <h2 className="il-section-title">Explore by Sector</h2>
                        <div className="il-underline" />
                        <p className="il-section-desc">
                            Click any industry card below to view deep architecture specs, tech stacks, and case studies.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="il-search-wrapper">
                        <div className="il-search-box">
                            <FaSearch className="il-search-icon" />
                            <input 
                                type="text"
                                placeholder="Search sectors (e.g. Healthcare, Fintech, Logistics, Real Estate)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="il-search-input"
                            />
                            {searchQuery && (
                                <button className="il-search-clear" onClick={() => setSearchQuery('')}>
                                    &times;
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="il-grid">
                        {filteredIndustries.map((industry, index) => {
                            const Icon = industry.icon
                            return (
                                <div 
                                    key={industry.id} 
                                    className="il-card glass-panel" 
                                    style={{ '--accent-color': industry.color, '--delay': `${index * 0.04}s` }}
                                    onClick={() => navigate(`/industries/${industry.slug}`)}
                                >
                                    <div className="il-card-glow" />
                                    <div className="il-card-top">
                                        <div className="il-icon-wrapper" style={{ background: `${industry.color}15`, borderColor: `${industry.color}40` }}>
                                            <Icon className="il-icon" style={{ color: industry.color }} />
                                        </div>
                                        <span className="il-card-badge tech-font" style={{ color: industry.color, borderColor: `${industry.color}30` }}>
                                            {industry.services.length}+ Solutions
                                        </span>
                                    </div>
                                    <h3 className="il-card-title">{industry.name}</h3>
                                    <p className="il-card-desc">{industry.shortDescription}</p>
                                    
                                    <div className="il-card-stats-mini">
                                        {industry.stats?.slice(0, 2).map((st, i) => (
                                            <div key={i} className="mini-stat">
                                                <strong style={{ color: industry.color }}>{st.value}</strong>
                                                <span>{st.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="il-card-footer">
                                        <span className="il-card-link tech-font">
                                            View Blueprint <FaArrowRight className="link-arrow" />
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {filteredIndustries.length === 0 && (
                        <div className="il-no-results">
                            <p>No industry verticals match your search <strong>"{searchQuery}"</strong>.</p>
                            <button className="il-btn-secondary" onClick={() => setSearchQuery('')}>
                                Clear Search
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* ─── Final CTA Banner ─────────────────────────────────────── */}
            <section className="il-cta-section">
                <div className="il-cta-container glass-panel">
                    <div className="il-cta-glow" />
                    <div className="il-cta-content">
                        <span className="il-tag tech-font">Ready to Transform?</span>
                        <h2>Need a Custom Industry Architecture?</h2>
                        <p>Our senior architects will design a bespoke cloud, compliance, and AI blueprint tailored to your enterprise.</p>
                        <button 
                            className="il-btn-primary il-cta-action"
                            onClick={() => {
                                navigate('/')
                                setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 200)
                            }}
                        >
                            Schedule Architecture Consultation <FaRocket />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IndustriesList

