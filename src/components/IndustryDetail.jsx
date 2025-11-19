import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheck, FaRocket, FaLightbulb } from 'react-icons/fa';
import { getIndustryBySlug } from '../data/industriesData';
import './IndustryDetail.css';

const IndustryDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const industry = getIndustryBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!industry) {
    return (
      <div className="industry-detail-container">
        <div className="industry-not-found">
          <h1>Industry Not Found</h1>
          <p>The industry you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/')} className="back-button">
            <FaArrowLeft /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = industry.icon;

  return (
    <div className="industry-detail-container" data-industry={slug}>
      {/* Hero Section */}
      <motion.section
        className="industry-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="industry-hero-content">
          <button onClick={() => navigate('/')} className="back-link">
            <FaArrowLeft /> Back to Home
          </button>

          <motion.div
            className="industry-hero-icon"
            style={{ background: industry.image, boxShadow: `0 10px 40px ${industry.color}40` }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <IconComponent />
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {industry.name}
          </motion.h1>

          <motion.p
            className="industry-hero-description"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {industry.description}
          </motion.p>

          <motion.div
            className="industry-hero-cta"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={() => navigate('/#contact')}
              className="cta-button primary"
              style={{ background: industry.image, boxShadow: `0 10px 30px ${industry.color}40` }}
            >
              Get Started <FaRocket />
            </button>
            <button onClick={() => navigate('/#portfolio')} className="cta-button secondary">
              View Projects
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="industry-section services-section">
        <div className="section-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Services</h2>
            <div className="services-grid">
              {industry.services.map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="service-card"
                    style={{ borderColor: `${industry.color}33` }}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ServiceIcon className="service-icon" style={{ color: industry.color }} />
                    <p>{service.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="industry-section benefits-section">
        <div className="section-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Key Benefits</h2>
            <div className="benefits-grid">
              {industry.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="benefit-card"
                  style={{ borderColor: `${industry.color}33` }}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="benefit-icon-wrapper" style={{ background: `${industry.color}20` }}>
                    <FaCheck style={{ color: industry.color }} />
                  </div>
                  <p>{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="industry-section technologies-section">
        <div className="section-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Technologies We Use</h2>
            <div className="technologies-list">
              {industry.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="tech-badge"
                  style={{
                    borderColor: industry.color,
                    color: industry.color,
                    boxShadow: `0 5px 15px ${industry.color}30`
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      {industry.challenges && industry.challenges.length > 0 && (
        <section className="industry-section challenges-section">
          <div className="section-container">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Industry Challenges We Solve</h2>
              <div className="challenges-grid">
                {industry.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    className="challenge-card"
                    style={{ borderColor: `${industry.color}33` }}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="challenge-icon-wrapper" style={{ background: `${industry.color}20` }}>
                      <FaLightbulb style={{ color: industry.color }} />
                    </div>
                    <p>{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      {industry.whyChooseUs && industry.whyChooseUs.length > 0 && (
        <section className="industry-section why-choose-section">
          <div className="section-container">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Why Choose Us</h2>
              <div className="why-choose-grid">
                {industry.whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={index}
                    className="why-choose-card"
                    style={{ borderColor: `${industry.color}33` }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <FaCheck className="check-icon" style={{ color: industry.color }} />
                    <p>{reason}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {industry.faq && industry.faq.length > 0 && (
        <section className="industry-section faq-section">
          <div className="section-container">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {industry.faq.map((item, index) => (
                  <motion.div
                    key={index}
                    className="faq-item"
                    style={{ borderColor: `${industry.color}33` }}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 style={{ color: industry.color }}>{item.question}</h3>
                    <p>{item.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {industry.caseStudies && industry.caseStudies.length > 0 && (
        <section className="industry-section casestudies-section">
          <div className="section-container">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Success Stories</h2>
              <div className="casestudies-grid">
                {industry.caseStudies.map((caseStudy, index) => (
                  <motion.div
                    key={index}
                    className="casestudy-card"
                    style={{ borderColor: `${industry.color}33` }}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="casestudy-header" style={{ background: industry.image }}>
                      <h3>{caseStudy.title}</h3>
                    </div>
                    <div className="casestudy-content">
                      <p className="casestudy-description">{caseStudy.description}</p>
                      <div className="casestudy-results" style={{ background: `${industry.color}10` }}>
                        <FaRocket style={{ color: industry.color }} />
                        <p>{caseStudy.results}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="industry-section cta-section">
        <div className="section-container">
          <motion.div
            className="cta-content"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Transform Your {industry.name} Business?</h2>
            <p>Let's discuss how our solutions can help you achieve your goals.</p>
            <button
              onClick={() => navigate('/#contact')}
              className="cta-button primary large"
              style={{ background: industry.image, boxShadow: `0 10px 30px ${industry.color}40` }}
            >
              Contact Us Today <FaRocket />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
