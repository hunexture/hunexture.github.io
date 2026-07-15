import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    FaBrain, FaRobot, FaComments, FaEye, FaMagic, FaChartLine,
    FaDatabase, FaCogs, FaFlask, FaRocket, FaArrowRight, FaCheck,
    FaChevronDown, FaChevronUp, FaHospital, FaDollarSign, FaShoppingBag,
    FaIndustry, FaTruck, FaUsers, FaLayerGroup, FaShieldAlt, FaCode, FaGlobe
} from 'react-icons/fa'
import './AISolutionsPage.css'

const aiServices = [
    {
        icon: FaBrain,
        title: 'AI & Machine Learning Overview',
        desc: 'Discover how AI and ML can revolutionize your business operations and fuel growth.',
        color: '#667eea'
    },
    {
        icon: FaCogs,
        title: 'Custom AI Services',
        desc: 'Tailored AI solutions to automate workflows, optimize business strategies, and improve outcomes.',
        color: '#764ba2'
    },
    {
        icon: FaChartLine,
        title: 'Machine Learning Development',
        desc: 'From custom models to predictive analytics, we bring powerful ML solutions to your business.',
        color: '#f093fb'
    },
    {
        icon: FaComments,
        title: 'NLP Solutions',
        desc: 'Enhance communication, automate customer support, and gain insights with advanced NLP.',
        color: '#4facfe'
    },
    {
        icon: FaEye,
        title: 'Computer Vision Services',
        desc: 'Leverage AI for image recognition, video analytics, and facial recognition to drive intelligent automation.',
        color: '#30cfd0'
    },
    {
        icon: FaMagic,
        title: 'Generative AI Solutions',
        desc: 'Create innovative AI-driven content, personalized recommendations, and more with Generative AI.',
        color: '#fa709a'
    },
    {
        icon: FaDatabase,
        title: 'Data Science & Analytics',
        desc: 'Turn your data into actionable insights that drive business decisions.',
        color: '#f7971e'
    },
    {
        icon: FaLayerGroup,
        title: 'AI Tech Stack',
        desc: 'Our tech stack includes industry-leading AI/ML algorithms, deep learning frameworks, and tools.',
        color: '#43e97b'
    },
    {
        icon: FaRobot,
        title: 'AI Agents',
        desc: 'Automate business processes, customer interactions, and decision-making with advanced AI Agents.',
        color: '#667eea'
    },
    {
        icon: FaFlask,
        title: 'AI Operations (AI Ops)',
        desc: 'Optimize IT operations with AI-driven insights, automated workflows, and predictive analytics.',
        color: '#f093fb'
    },
    {
        icon: FaRocket,
        title: 'AI-Driven Business Transformation',
        desc: 'Revolutionize your business model, improve productivity, and unlock new revenue streams with AI.',
        color: '#4facfe'
    },
    {
        icon: FaCode,
        title: 'AI & ML Model Expertise',
        desc: 'Leverage cutting-edge AI and ML models, including supervised, unsupervised learning, and deep learning.',
        color: '#fa709a'
    }
]

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
    {
        icon: FaHospital,
        title: 'Healthcare',
        desc: 'Revolutionize patient care and streamline operations with AI-powered diagnostics, drug discovery, and personalized treatment plans.',
        color: '#30cfd0'
    },
    {
        icon: FaDollarSign,
        title: 'Finance',
        desc: 'Stay ahead with robust fraud detection, advanced risk assessment, and algorithmic trading strategies.',
        color: '#43e97b'
    },
    {
        icon: FaShoppingBag,
        title: 'Retail',
        desc: 'Enhance customer satisfaction through personalized shopping experiences, optimized inventory, and accurate customer behavior prediction.',
        color: '#fa709a'
    },
    {
        icon: FaIndustry,
        title: 'Manufacturing',
        desc: 'Improve quality control, streamline production, and minimize downtime with predictive maintenance.',
        color: '#f7971e'
    },
    {
        icon: FaTruck,
        title: 'Logistics & Supply Chain',
        desc: 'Optimize routes, enhance warehouse operations, and boost efficiency with demand forecasting and resource planning.',
        color: '#667eea'
    }
]

const whyChooseUs = [
    {
        icon: FaUsers,
        title: 'Experienced & Diverse Team',
        desc: 'Our team of seasoned AI experts — data scientists, ML engineers, NLP specialists, and computer vision engineers — has a proven track record across various industries.',
        color: '#667eea'
    },
    {
        icon: FaCode,
        title: 'Cutting-Edge Technology',
        desc: 'We stay at the forefront of AI advancements using the latest tools, frameworks, and methodologies to create scalable, high-performing solutions.',
        color: '#4facfe'
    },
    {
        icon: FaChartLine,
        title: 'Data-Driven Approach',
        desc: 'We leverage data-driven insights to design AI solutions that deliver measurable outcomes with precision and effectiveness.',
        color: '#43e97b'
    },
    {
        icon: FaGlobe,
        title: 'Client-Centric Focus',
        desc: 'Your success is our priority. We collaborate closely as a true partner to align our AI solutions perfectly with your vision and deliver tangible value.',
        color: '#fa709a'
    },
    {
        icon: FaShieldAlt,
        title: 'Ethical & Responsible AI',
        desc: 'We uphold the highest standards of ethical responsibility, ensuring our AI solutions are fair, transparent, and free from bias.',
        color: '#f7971e'
    },
    {
        icon: FaCogs,
        title: 'Scalability & Ongoing Support',
        desc: 'We design AI solutions with scalability in mind, and provide comprehensive maintenance and support to keep systems running smoothly.',
        color: '#764ba2'
    }
]

const AISolutionsPage = () => {
    const navigate = useNavigate()
    const [openExpertise, setOpenExpertise] = useState(null)


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aip-visible')
                    observer.unobserve(entry.target)
                }
            }),
            { threshold: 0.1 }
        )
        document.querySelectorAll('.aip-reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const handleContact = () => {
        navigate('/')
        setTimeout(() => {
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
        }, 200)
    }

    const toggleExpertise = (id) => {
        setOpenExpertise(prev => prev === id ? null : id)
    }

    return (
        <div className="aip-page">

            {/* ── Hero ────────────────────────── */}
            <section className="aip-hero">
                <div className="aip-hero-bg" />
                <div className="aip-hero-grid" />
                <div className="aip-hero-blob blob1" />
                <div className="aip-hero-blob blob2" />

                <div className="aip-hero-inner">
                    <div className="aip-hero-badge">
                        <FaBrain /> AI Solutions Company
                    </div>
                    <h1 className="aip-hero-title">
                        Artificial Intelligence
                        <span className="aip-hero-gradient"> Companies in India</span>
                    </h1>
                    <p className="aip-hero-subtitle">
                        Unlock the full potential of Artificial Intelligence to drive innovation, optimize processes, and accelerate growth.
                        Transform Your Business with Cutting-Edge AI Solutions.
                    </p>
                    <div className="aip-hero-cta">
                        <button className="aip-btn-primary" onClick={handleContact}>
                            Schedule a Consultation <FaArrowRight />
                        </button>
                        <button className="aip-btn-secondary" onClick={() => navigate('/#portfolio')}>
                            View Our Work
                        </button>
                    </div>

                    <div className="aip-hero-stats">
                        {[
                            { value: '200+', label: 'AI Projects Delivered' },
                            { value: '50+', label: 'ML Models Deployed' },
                            { value: '98%', label: 'Client Satisfaction' },
                            { value: '10+', label: 'Years of Expertise' }
                        ].map((s, i) => (
                            <div key={i} className="aip-hero-stat">
                                <strong>{s.value}</strong>
                                <span>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── AI Services Grid ─────────────── */}
            <section className="aip-section aip-reveal">
                <div className="aip-inner">
                    <div className="aip-section-header">
                        <span className="aip-tag">What We Offer</span>
                        <h2>Unlock the Power of Artificial Intelligence<br />for Your Business</h2>
                        <div className="aip-underline" />
                        <p className="aip-section-desc">
                            AI Services to Drive Innovation and Efficiency
                        </p>
                    </div>

                    <div className="aip-services-grid">
                        {aiServices.map((svc, i) => {
                            const Icon = svc.icon
                            return (
                                <div
                                    key={i}
                                    className="aip-service-card"
                                    style={{ '--delay': `${i * 0.06}s`, '--card-color': svc.color }}
                                >
                                    <div className="aip-service-icon" style={{ background: `${svc.color}20`, borderColor: `${svc.color}40` }}>
                                        <Icon style={{ color: svc.color }} />
                                    </div>
                                    <h3>{svc.title}</h3>
                                    <p>{svc.desc}</p>
                                    <button className="aip-read-more" style={{ color: svc.color }} onClick={handleContact}>
                                        Read More <FaArrowRight />
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── Expertise Deep-Dive ──────────── */}
            <section className="aip-section aip-alt-bg aip-reveal">
                <div className="aip-inner">
                    <div className="aip-section-header">
                        <span className="aip-tag">Our AI Expertise</span>
                        <h2>Our AI Expertise in India and USA</h2>
                        <div className="aip-underline" />
                        <p className="aip-section-desc">
                            At Hunexture, we specialize in delivering cutting-edge custom AI solutions designed to meet the unique needs of businesses across industries.
                        </p>
                    </div>

                    <div className="aip-expertise-list">
                        {expertiseData.map((exp) => {
                            const Icon = exp.icon
                            const isOpen = openExpertise === exp.id
                            return (
                                <div
                                    key={exp.id}
                                    className={`aip-expertise-card ${isOpen ? 'open' : ''}`}
                                    style={{ borderColor: isOpen ? `${exp.color}50` : 'rgba(255,255,255,0.08)' }}
                                >
                                    <button
                                        className="aip-expertise-header"
                                        onClick={() => toggleExpertise(exp.id)}
                                    >
                                        <div className="aip-expertise-title">
                                            <div className="aip-expertise-icon" style={{ background: `${exp.color}20`, borderColor: `${exp.color}40` }}>
                                                <Icon style={{ color: exp.color }} />
                                            </div>
                                            <h3 style={{ color: isOpen ? exp.color : undefined }}>{exp.title}</h3>
                                        </div>
                                        {isOpen ? <FaChevronUp style={{ color: exp.color }} /> : <FaChevronDown />}
                                    </button>

                                    {isOpen && (
                                        <div className="aip-expertise-body">
                                            {exp.items.map((item, j) => (
                                                <div key={j} className="aip-expertise-item">
                                                    <div className="aip-expertise-bullet" style={{ background: exp.color }} />
                                                    <div>
                                                        <strong style={{ color: exp.color }}>{item.subtitle}</strong>
                                                        <p>{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA Band ─────────────────────── */}
            <section className="aip-cta-band aip-reveal">
                <div className="aip-cta-band-inner">
                    <h2>Schedule a meeting with an AI expert in India and USA</h2>
                    <p>Ready to explore how AI can transform your business? Our experts are just one click away.</p>
                    <button className="aip-btn-primary" onClick={handleContact}>
                        Contact Us <FaArrowRight />
                    </button>
                </div>
            </section>

            {/* ── Industries ───────────────────── */}
            <section className="aip-section aip-reveal">
                <div className="aip-inner">
                    <div className="aip-section-header">
                        <span className="aip-tag">Industries</span>
                        <h2>Tailored AI Solutions for Your Business<br />in India and the USA</h2>
                        <div className="aip-underline" />
                        <p className="aip-section-desc">
                            Transforming Businesses Across Industries in India and the USA
                        </p>
                    </div>

                    <div className="aip-industry-grid">
                        {industries.map((ind, i) => {
                            const Icon = ind.icon
                            return (
                                <div key={i} className="aip-industry-card" style={{ '--delay': `${i * 0.1}s`, '--ind-color': ind.color }}>
                                    <div className="aip-industry-icon" style={{ background: `${ind.color}18`, borderColor: `${ind.color}40` }}>
                                        <Icon style={{ color: ind.color }} />
                                    </div>
                                    <h3>{ind.title}</h3>
                                    <p>{ind.desc}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="aip-industry-cta">
                        <p>Partner with Hunexture to unlock new opportunities and redefine success in your industry.</p>
                        <button className="aip-btn-outline" onClick={handleContact}>
                            Contact Us for a Free Consultation <FaArrowRight />
                        </button>
                    </div>
                </div>
            </section>

            {/* ── Why Choose Us ─────────────────── */}
            <section className="aip-section aip-alt-bg aip-reveal">
                <div className="aip-inner">
                    <div className="aip-section-header">
                        <span className="aip-tag">Why Us</span>
                        <h2>Why Choose Hunexture for Custom AI Solutions<br />in India and the USA?</h2>
                        <div className="aip-underline" />
                        <p className="aip-section-desc">
                            As a leading AI solutions company, Hunexture stands out for its deep expertise, commitment to innovation, and dedication to delivering exceptional results.
                        </p>
                    </div>

                    <div className="aip-why-grid">
                        {whyChooseUs.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <div key={i} className="aip-why-card" style={{ '--delay': `${i * 0.08}s`, '--why-color': item.color }}>
                                    <div className="aip-why-icon" style={{ background: `${item.color}18`, borderColor: `${item.color}40` }}>
                                        <Icon style={{ color: item.color }} />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── The Future of AI ──────────────── */}
            <section className="aip-section aip-reveal">
                <div className="aip-inner">
                    <div className="aip-future-block">
                        <div className="aip-future-content">
                            <span className="aip-tag">The Future</span>
                            <h2>The Future of Business is<br /><span className="aip-hero-gradient">Intelligent Automation with AI</span></h2>
                            <p>
                                AI is reshaping industries and revolutionizing business operations worldwide. As a leading AI solutions company serving clients in India and the USA, Hunexture empowers businesses to leverage advanced AI technologies — including machine learning, deep learning, NLP, and computer vision — to achieve measurable results.
                            </p>
                            <ul className="aip-future-list">
                                {[
                                    'Improving operational efficiency and reducing costs',
                                    'Developing groundbreaking new products and services',
                                    'Delivering AI-powered competitive advantage',
                                    'Building smarter, data-driven organizations'
                                ].map((item, i) => (
                                    <li key={i}>
                                        <FaCheck className="aip-check-icon" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="aip-future-visual">
                            <div className="aip-orb orb1" />
                            <div className="aip-orb orb2" />
                            <div className="aip-orb orb3" />
                            <div className="aip-future-card">
                                <FaBrain className="aip-future-icon" />
                                <p>AI-driven growth</p>
                                <strong>+340%</strong>
                                <span>Average ROI from AI integration</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Tech Stack ────────────────────── */}
            <section className="aip-section aip-alt-bg aip-reveal">
                <div className="aip-inner">
                    <div className="aip-section-header">
                        <span className="aip-tag">Tech Stack</span>
                        <h2>Technologies We Use</h2>
                        <div className="aip-underline" />
                    </div>
                    <div className="aip-tech-grid">
                        {[
                            { name: 'OpenAI', iconUrl: '/images/tech-icons/openai.svg' },
                            { name: 'Codex', iconUrl: '/images/tech-icons/codex.svg' },
                            { name: 'Vertex AI', iconUrl: '/images/tech-icons/vertexai.svg' },
                            { name: 'Cloud Vision', iconUrl: '/images/tech-icons/cloudvision.svg' },
                            { name: 'OpenCV', iconUrl: '/images/tech-icons/opencv.svg' },
                            { name: 'TensorFlow', iconUrl: '/images/tech-icons/tensorflow.svg' },
                            { name: 'IBM Watson', iconUrl: '/images/tech-icons/ibm-watson.svg' },
                            { name: 'Cloud NLP', iconUrl: '/images/tech-icons/cloud-nlp.svg' },
                            { name: 'Cognitive Services', iconUrl: '/images/tech-icons/cognitive-services.svg' },
                            { name: 'Bot Framework', iconUrl: '/images/tech-icons/bot-framework.svg' },
                            { name: 'Mistral', iconUrl: '/images/tech-icons/mistral.svg' },
                            { name: 'Meta Llama', iconUrl: '/images/tech-icons/llama.svg' },
                            { name: 'Gemini', iconUrl: '/images/tech-icons/gemini.svg' },
                            { name: 'Anthropic', iconUrl: '/images/tech-icons/anthropic.svg' },
                            { name: 'N8N', iconUrl: '/images/tech-icons/n8n.svg' }
                        ].map((tech, i) => (
                            <div key={i} className="aip-tech-badge" style={{ '--delay': `${i * 0.06}s` }}>
                                <img
                                    src={tech.iconUrl}
                                    alt={tech.name}
                                    className="aip-tech-img"
                                />
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA ────────────────────── */}
            <section className="aip-bottom-cta aip-reveal">
                <div className="aip-bottom-cta-glow" />
                <div className="aip-bottom-cta-inner">
                    <span className="aip-tag">Let's Build Together</span>
                    <h2>Elevate Your Business with AI:<br />Custom Solutions for India and the USA</h2>
                    <p>
                        Ready to harness the transformative power of AI? Our team of expert AI consultants and developers is here to guide you every step of the way.
                    </p>
                    <div className="aip-bottom-cta-btns">
                        <button className="aip-btn-primary" onClick={handleContact}>
                            Contact Us Today <FaRocket />
                        </button>
                        <button className="aip-btn-secondary" onClick={() => navigate('/#portfolio')}>
                            See Our Work
                        </button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AISolutionsPage
