import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { aiData } from '../data/aiData';
import {
    FaArrowLeft,
    FaCheckCircle,
    FaCode,
    FaBrain,
    FaRocket,
} from 'react-icons/fa';
import './AIDetail.css';

const AIDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const aiCategory = aiData.find((ai) => ai.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!aiCategory) {
        return (
            <div className="ai-detail not-found">
                <div className="container">
                    <h2>AI Category Not Found</h2>
                    <button onClick={() => navigate('/')} className="back-link">
                        <FaArrowLeft /> Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const CategoryIcon = aiCategory.icon || FaBrain;

    return (
        <div className="ai-detail">
            {/* Hero Section */}
            <div
                className="ai-hero"
                style={{ background: aiCategory.image || 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)' }}
            >
                <div className="container">
                    <button onClick={() => navigate('/services')} className="back-link light">
                        <FaArrowLeft /> Back to Services
                    </button>
                    <div className="hero-content">
                        <div className="icon-wrapper">
                            <CategoryIcon />
                        </div>
                        <h1>{aiCategory.name}</h1>
                        <h2 className="hero-headline">{aiCategory.headline}</h2>
                        <p className="subtitle">{aiCategory.description}</p>
                    </div>
                </div>
            </div>

            <div className="container ai-content">
                <div className="content-grid-modern">

                    {/* Main Content Area */}
                    <div className="main-content">

                        {/* What We Offer Section */}
                        {aiCategory.whatWeOffer && aiCategory.whatWeOffer.length > 0 && (
                            <section className="offer-section">
                                <h2 className="section-title">What We Offer</h2>

                                <div className="offer-list">
                                    {aiCategory.whatWeOffer.map((offer, index) => (
                                        <div key={index} className="offer-card">
                                            <h3>{offer.title}</h3>
                                            <p className="offer-description">{offer.description}</p>

                                            <ul className="offer-features">
                                                {offer.features && offer.features.map((feature, fIndex) => (
                                                    <li key={fIndex}>
                                                        <FaCheckCircle className="feature-icon" />
                                                        <div>
                                                            <strong>{feature.name}:</strong> {feature.description}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>

                                            {offer.technologies && offer.technologies.length > 0 && (
                                                <div className="offer-tech-tags">
                                                    {offer.technologies.map((tech, tIndex) => (
                                                        <span key={tIndex} className="tech-tag">{tech}</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                    </div>

                    {/* Sidebar Area */}
                    <div className="sidebar">

                        {/* Why Choose Us Section */}
                        {aiCategory.whyChooseUs && aiCategory.whyChooseUs.length > 0 && (
                            <div className="sidebar-card why-choose-card">
                                <h3>Why Choose {aiCategory.name}?</h3>
                                <ul className="why-choose-list">
                                    {aiCategory.whyChooseUs.map((reason, index) => (
                                        <li key={index}>
                                            <div className="reason-header">
                                                <FaRocket className="reason-icon" />
                                                <h4>{reason.title}</h4>
                                            </div>
                                            <p>{reason.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Technologies We Use Section */}
                        {aiCategory.technologiesSummary && aiCategory.technologiesSummary.length > 0 && (
                            <div className="sidebar-card tech-summary-card">
                                <h3>Technologies We Use</h3>
                                <ul className="tech-summary-list">
                                    {aiCategory.technologiesSummary.map((item, index) => (
                                        <li key={index}>
                                            <FaCode className="tech-icon" />
                                            <div>
                                                <strong>{item.category}:</strong> {item.tech}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="cta-card sidebar-card">
                            <h3>Ready to Transform Your Business?</h3>
                            <p>Discuss your AI requirements with our experts today.</p>
                            <button onClick={() => {
                                navigate('/');
                                setTimeout(() => {
                                    const el = document.querySelector('#contact');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }, 200);
                            }} className="btn-primary">
                                Get a Free Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIDetail;
