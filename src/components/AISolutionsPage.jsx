import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    FaBrain, FaRobot, FaComments, FaEye, FaMagic,
    FaFlask, FaRocket, FaArrowRight, FaCheck
} from 'react-icons/fa'
import { aiData } from '../data/aiData'
import { formatStat, getStat } from '../data/companyData'
import AIArtifact from './AIArtifact'
import './AIDetail.css'
import './AISolutionsPage.css'

const expertiseData = [
    {
        id: 'ml',
        icon: FaBrain,
        title: 'Machine Learning',
        color: '#667eea',
        items: [
            {
                subtitle: 'Predictive Analytics',
                desc: 'Empower your business with the ability to forecast future trends, optimize resource allocation, and make data-driven decisions. Stay ahead with insights that guide strategic planning.'
            },
            {
                subtitle: 'Recommendation Systems',
                desc: 'Enhance user experiences by delivering personalized content, boosting customer satisfaction, and driving higher sales conversions tailored to your audience.'
            },
            {
                subtitle: 'Anomaly Detection',
                desc: 'Safeguard your operations by identifying outliers and anomalies in real-time. Prevent fraud, detect security breaches, and address operational inefficiencies effectively.'
            }
        ]
    },
    {
        id: 'nlp',
        icon: FaComments,
        title: 'Natural Language Processing (NLP)',
        color: '#4facfe',
        items: [
            {
                subtitle: 'Sentiment Analysis',
                desc: 'Empower your business with tools to gauge customer sentiment and feedback. Leverage insights to refine products and services for a customer-first approach.'
            },
            {
                subtitle: 'Text Summarization',
                desc: 'Streamline operations by condensing large volumes of text into concise, actionable summaries, saving time and boosting productivity.'
            },
            {
                subtitle: 'Chatbots and Virtual Assistants',
                desc: 'Enhance customer service with intelligent conversational agents that automate routine tasks, provide 24/7 support, and elevate user engagement.'
            }
        ]
    },
    {
        id: 'cv',
        icon: FaEye,
        title: 'Computer Vision',
        color: '#30cfd0',
        items: [
            {
                subtitle: 'Image and Video Analysis',
                desc: 'Extract valuable insights from visual data with advanced AI-powered tools that identify objects, recognize faces, and track motion for enhanced operational efficiency.'
            },
            {
                subtitle: 'Object Detection and Recognition',
                desc: 'Enable cutting-edge applications such as autonomous vehicles, surveillance, and quality control by accurately detecting and classifying objects in images and videos.'
            },
            {
                subtitle: 'Facial Recognition',
                desc: 'Secure access control, biometric authentication, and personalized experiences to stay ahead in a tech-driven world.'
            }
        ]
    },
    {
        id: 'genai',
        icon: FaMagic,
        title: 'Generative AI',
        color: '#fa709a',
        items: [
            {
                subtitle: 'Transformative Generative AI Solutions',
                desc: 'We specialize in delivering Custom AI Solutions, leveraging the power of Generative AI to automate tasks, generate creative content, and drive business innovation.'
            },
            {
                subtitle: 'Tailored AI Applications for Growth',
                desc: 'From designing AI models for personalization to creating AI-powered content, our experts craft intelligent systems that unlock the full potential of AI for your business.'
            },
            {
                subtitle: 'Partner for a Smarter Future',
                desc: 'Contact us today to explore innovative, AI-driven solutions tailored to your unique needs, empowering your business to achieve efficiency, creativity, and growth.'
            }
        ]
    },
    {
        id: 'models',
        icon: FaFlask,
        title: 'Machine Learning Model Expertise',
        color: '#f7971e',
        items: [
            {
                subtitle: 'Diverse Algorithm Expertise',
                desc: 'Proficient in linear/logistic regression, support vector machines (SVMs), decision trees, random forests, neural networks, and clustering techniques (K-means, DBSCAN).'
            },
            {
                subtitle: 'Specialization in Learning Paradigms',
                desc: 'Expertise in supervised learning (classification, regression), unsupervised learning (clustering, dimensionality reduction), and reinforcement learning.'
            },
            {
                subtitle: 'Model Evaluation and Optimization',
                desc: 'Skilled in rigorous model evaluation techniques like cross-validation and hyperparameter tuning to ensure optimal performance, accuracy, and generalization.'
            }
        ]
    },
    {
        id: 'agents',
        icon: FaRobot,
        title: 'AI-Powered Agents',
        color: '#764ba2',
        items: [
            {
                subtitle: 'Revolutionize Business with AI Agents',
                desc: 'Empower your operations with AI agents that deliver intelligent automation, streamline workflows, and provide actionable insights to drive efficiency and innovation.'
            },
            {
                subtitle: 'Custom AI Agents for Every Industry',
                desc: 'Our AI agents adapt to your business needs, offering capabilities like data analysis, process automation, and predictive decision-making to optimize performance across industries.'
            },
            {
                subtitle: 'Enhance Productivity and Decision-Making',
                desc: 'Our AI agents integrate seamlessly into your systems, ensuring smarter, faster, and more effective solutions to transform your business operations.'
            }
        ]
    }
]

const industries = [
    { slug: 'healthcare', title: 'Healthcare', desc: 'Diagnostics support, triage and record summarisation that keeps clinicians in charge.' },
    { slug: 'finance', title: 'Finance', desc: 'Fraud detection, risk scoring and document review with a clear audit trail.' },
    { slug: 'retail', title: 'Retail', desc: 'Demand forecasting, personalised offers and shelf-level inventory insight.' },
    { slug: 'manufacturing', title: 'Manufacturing', desc: 'Visual quality checks and predictive maintenance on the line.' },
    { slug: 'logistics', title: 'Logistics', desc: 'Route optimisation, ETA prediction and warehouse planning.' }
]

const steps = [
    { name: 'Discover', time: '1 week', text: 'Pick one use case, check data access and agree the pass mark.' },
    { name: 'Prove', time: '2 to 4 weeks', text: 'Build a pilot on your data and measure it against that pass mark.' },
    { name: 'Deploy', time: '6 to 10 weeks', text: 'Integrate with your systems, add monitoring and train your team.' },
    { name: 'Operate', time: 'Ongoing', text: 'Track quality and cost, retrain when the data shifts.' }
]

const whyChooseUs = [
    ['Experienced, mixed team', 'Data scientists, ML engineers, NLP and computer vision specialists working in one team.'],
    ['Current tools, chosen on fit', 'We pick frameworks and models for the problem and the budget, not for fashion.'],
    ['Measured outcomes', 'Every pilot has a pass mark agreed up front, so the result is a clear go or no-go.'],
    ['Close collaboration', 'You see working software every sprint and keep full ownership of code and data.'],
    ['Responsible AI', 'Bias checks, human review and clear limits are built in from the start.'],
    ['Built to scale and supported', 'Monitoring, retraining and support continue after launch.']
]

const outcomes = [
    'Lower cost and faster turnaround on repeat work',
    'New products and services built on your own data',
    'Decisions backed by evidence instead of guesswork',
    'Teams freed from manual, repetitive tasks'
]

const tech = [
    ['OpenAI', 'openai'], ['Codex', 'codex'], ['Vertex AI', 'vertexai'], ['Cloud Vision', 'cloudvision'],
    ['OpenCV', 'opencv'], ['TensorFlow', 'tensorflow'], ['IBM Watson', 'ibm-watson'], ['Cloud NLP', 'cloud-nlp'],
    ['Cognitive Services', 'cognitive-services'], ['Bot Framework', 'bot-framework'], ['Mistral', 'mistral'],
    ['Meta Llama', 'llama'], ['Gemini', 'gemini'], ['Anthropic', 'anthropic'], ['N8N', 'n8n']
]

const AISolutionsPage = () => {
    const navigate = useNavigate()
    const [openExp, setOpenExp] = useState(0)

    useEffect(() => { window.scrollTo(0, 0) }, [])

    const goContact = () => {
        navigate('/')
        setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 200)
    }

    const stats = [
        [formatStat(getStat('years')), 'Years of innovation'],
        [formatStat(getStat('engineers')), 'Expert engineers'],
        [formatStat(getStat('industries')), 'Industries served'],
        [formatStat(getStat('clients')), 'Happy clients']
    ]

    return (
        <main className="theme-ai aid aisp">
            <header className="aid-hero" aria-labelledby="aisp-title">
                <div className="aid-hero-inner">
                    <div className="aid-hero-copy">
                        <nav className="aid-crumbs" aria-label="Breadcrumb">
                            <Link to="/">Home</Link><span aria-hidden="true">/</span><span>AI solutions</span>
                        </nav>
                        <span className="aid-icon" aria-hidden="true"><FaBrain /></span>
                        <h1 id="aisp-title" className="aid-title">AI solutions that go to production</h1>
                        <p className="aid-headline">Artificial intelligence company in India and the USA</p>
                        <p className="aid-lede">
                            We help you apply AI where it pays back: automating routine work, reading documents and images,
                            forecasting demand and supporting decisions. Start with a small pilot, keep what works.
                        </p>
                        <div className="aid-actions">
                            <button type="button" className="aid-btn aid-btn--solid" onClick={goContact}>Schedule a consultation <FaArrowRight style={{ marginLeft: 10 }} /></button>
                            <a className="aid-btn" href="#services">Browse AI services</a>
                        </div>
                    </div>
                    <AIArtifact slug="ai-solutions" Icon={FaBrain} name="AI solutions" />
                </div>
                <ul className="aisp-stats">
                    {stats.map(([v, l]) => <li key={l}><b>{v}</b><span>{l}</span></li>)}
                </ul>
            </header>

            <section id="services" className="aid-section" aria-labelledby="aisp-services">
                <div className="aid-wrap">
                    <div className="aid-head">
                        <h2 id="aisp-services">Our AI services</h2>
                        <p>Pick the area you need. Each page covers what we build, the tools we use and the risks we control.</p>
                    </div>
                    <ul className="aisp-cards">
                        {aiData.map((ai, i) => {
                            const Icon = ai.icon
                            return (
                                <li key={ai.slug}>
                                    <Link to={`/ai/${ai.slug}`} className="aisp-card">
                                        <span className="aisp-card-top">
                                            <span className="aisp-card-ico" aria-hidden="true"><Icon /></span>
                                            <span className="aisp-card-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                        </span>
                                        <h3>{ai.name}</h3>
                                        <p>{ai.shortDescription}</p>
                                        <span className="aisp-card-go">Explore <FaArrowRight aria-hidden="true" /></span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>

            <section className="aid-outcome" aria-label="Outcome">
                <div className="aid-wrap"><p><strong>What you get.</strong> A working pilot on your data, a clear go or no-go, and a plan to scale it if it passes.</p></div>
            </section>

            <section className="aid-section aid-section--sunk" aria-labelledby="aisp-how">
                <div className="aid-wrap">
                    <div className="aid-head">
                        <h2 id="aisp-how">How a project runs</h2>
                        <p>Four stages, each with a decision point so you never commit more than you have seen working.</p>
                    </div>
                    <ol className="aisp-steps">
                        {steps.map((s, i) => (
                            <li key={s.name}>
                                <span className="aisp-step-n" aria-hidden="true">{i + 1}</span>
                                <h3>{s.name}</h3>
                                <em>{s.time}</em>
                                <p>{s.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="aid-section" aria-labelledby="aisp-exp">
                <div className="aid-wrap">
                    <div className="aid-head">
                        <h2 id="aisp-exp">Where our expertise sits</h2>
                        <p>Open an area to see the use cases we deliver most often.</p>
                    </div>
                    <div className="aid-offers">
                        {expertiseData.map((exp, i) => (
                            <div key={exp.id} className={`aid-offer${openExp === i ? ' is-open' : ''}`}>
                                <h3>
                                    <button type="button" aria-expanded={openExp === i} onClick={() => setOpenExp(openExp === i ? -1 : i)}>
                                        <span className="aid-offer-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                        <span className="aid-offer-t">{exp.title}</span>
                                        <span className="aid-sign" aria-hidden="true" />
                                    </button>
                                </h3>
                                <div className="aid-offer-body">
                                    <div>
                                        <ul className="aid-feats">
                                            {exp.items.map((item) => <li key={item.subtitle}><strong>{item.subtitle}.</strong> {item.desc}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="aid-section aid-section--sunk" aria-labelledby="aisp-ind">
                <div className="aid-wrap">
                    <div className="aid-head">
                        <h2 id="aisp-ind">Industries we apply AI in</h2>
                        <p>Examples from sectors where we deliver most often. Each links to the full industry page.</p>
                    </div>
                    <ul className="aisp-ind">
                        {industries.map((ind) => (
                            <li key={ind.slug}>
                                <Link to={`/industries/${ind.slug}`}>
                                    <h3>{ind.title}</h3>
                                    <p>{ind.desc}</p>
                                    <span aria-hidden="true"><FaArrowRight /></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="aid-section" aria-labelledby="aisp-why">
                <div className="aid-wrap">
                    <div className="aid-head">
                        <h2 id="aisp-why">Why teams choose Hunexture</h2>
                        <p>Practical engineering, honest scoping and support that continues after launch.</p>
                    </div>
                    <ul className="aisp-why">
                        {whyChooseUs.map(([t, d], i) => (
                            <li key={t}>
                                <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                <h3>{t}</h3>
                                <p>{d}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="aid-section aid-section--sunk" aria-labelledby="aisp-future">
                <div className="aid-wrap aid-duo">
                    <div>
                        <h2 id="aisp-future">Intelligent automation, in practice</h2>
                        <p className="aisp-p">
                            AI is changing how companies run. We combine machine learning, deep learning, NLP and computer vision
                            to deliver results you can measure, for clients in India and the USA.
                        </p>
                    </div>
                    <ul className="aisp-checks">
                        {outcomes.map((o) => <li key={o}><FaCheck aria-hidden="true" />{o}</li>)}
                    </ul>
                </div>
            </section>

            <section className="aid-section" aria-labelledby="aisp-tech">
                <div className="aid-wrap">
                    <div className="aid-head">
                        <h2 id="aisp-tech">Technologies we use</h2>
                        <p>We choose by fit and cost. This is the typical toolbox, not a fixed list.</p>
                    </div>
                    <ul className="aisp-tech">
                        {tech.map(([name, file]) => (
                            <li key={name}><img src={`/images/tech-icons/${file}.svg`} alt="" loading="lazy" /><span>{name}</span></li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="aid-cta">
                <div className="aid-wrap aid-cta-inner">
                    <div>
                        <h2>Start with a two-week pilot</h2>
                        <p>Bring one process and some sample data. You leave with a prototype and a clear go or no-go.</p>
                    </div>
                    <button type="button" className="aid-btn aid-btn--light" onClick={goContact}>Book a discovery call <FaRocket style={{ marginLeft: 10 }} /></button>
                </div>
            </section>
        </main>
    )
}

export default AISolutionsPage
