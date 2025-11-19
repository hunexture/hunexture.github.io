import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheck, FaRocket } from 'react-icons/fa';
import { getServiceBySlug } from '../data/servicesData';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="service-detail-container">
        <div className="service-not-found">
          <h1>Service Not Found</h1>
          <p>The service you're looking for doesn't exist.</p>
          <Link to="/" className="back-button">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  // Define color schemes for each service
  const colorSchemes = {
    'ai-solutions': {
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      primary: '#667eea',
      secondary: '#764ba2',
      glow: 'rgba(102, 126, 234, 0.3)'
    },
    'web-development': {
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      primary: '#4facfe',
      secondary: '#00f2fe',
      glow: 'rgba(79, 172, 254, 0.3)'
    },
    'app-development': {
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      primary: '#f093fb',
      secondary: '#f5576c',
      glow: 'rgba(240, 147, 251, 0.3)'
    },
    'cloud-integration': {
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      primary: '#30cfd0',
      secondary: '#330867',
      glow: 'rgba(48, 207, 208, 0.3)'
    },
    'uiux-design': {
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      primary: '#fa709a',
      secondary: '#fee140',
      glow: 'rgba(250, 112, 154, 0.3)'
    }
  };

  const serviceColors = colorSchemes[slug] || colorSchemes['ai-solutions'];

  return (
    <div className="service-detail-container" data-service={slug}>
      {/* Hero Section */}
      <motion.section
        className="service-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="service-hero-content">
          <button onClick={() => navigate('/#services')} className="back-link">
            <FaArrowLeft /> Back to Services
          </button>

          <motion.div
            className="service-hero-icon"
            style={{ background: serviceColors.gradient, boxShadow: `0 10px 40px ${serviceColors.glow}` }}
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
            {service.title}
          </motion.h1>

          <motion.p
            className="service-hero-description"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {service.description}
          </motion.p>

          <motion.div
            className="service-hero-features"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {service.features.map((feature, index) => (
              <span key={index} className="feature-badge" style={{ borderColor: serviceColors.primary, color: serviceColors.primary }}>
                <FaCheck /> {feature}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="service-hero-cta"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button onClick={() => navigate('/#contact')} className="cta-button primary" style={{ background: serviceColors.gradient, boxShadow: `0 10px 30px ${serviceColors.glow}` }}>
              Get Started <FaRocket />
            </button>
            <button onClick={() => navigate('/#portfolio')} className="cta-button secondary">
              View Projects
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="service-section benefits-section">
        <div className="section-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Key Benefits</h2>
            <div className="benefits-grid">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="benefit-card"
                  style={{ borderColor: `${serviceColors.primary}33` }}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FaCheck className="benefit-icon" style={{ color: serviceColors.primary }} />
                  <p>{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="service-section technologies-section">
        <div className="section-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Technologies We Use</h2>
            <div className="technologies-grid">
              {service.technologies.map((tech, index) => {
                const TechIcon = tech.icon;
                return (
                  <motion.div
                    key={index}
                    className="tech-card"
                    style={{ borderColor: `${serviceColors.primary}33` }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <TechIcon className="tech-icon" style={{ color: serviceColors.primary }} />
                    <p>{tech.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-section process-section">
        <div className="section-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Process</h2>
            <div className="process-timeline">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  className="process-step"
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="step-number" style={{ background: serviceColors.gradient, boxShadow: `0 5px 20px ${serviceColors.glow}` }}>{step.step}</div>
                  <div className="step-content" style={{ borderColor: `${serviceColors.primary}33` }}>
                    <h3 style={{ color: serviceColors.primary }}>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="service-section usecases-section">
        <div className="section-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Use Cases</h2>
            <div className="usecases-grid">
              {service.useCases.map((useCase, index) => {
                const UseCaseIcon = useCase.icon;
                return (
                  <motion.div
                    key={index}
                    className="usecase-card"
                    style={{ borderColor: `${serviceColors.primary}33` }}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <UseCaseIcon className="usecase-icon" style={{ color: serviceColors.primary }} />
                    <h3>{useCase.title}</h3>
                    <p>{useCase.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="service-section faq-section">
        <div className="section-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {service.faq.map((item, index) => (
                <motion.div
                  key={index}
                  className="faq-item"
                  style={{ borderColor: `${serviceColors.primary}33` }}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 style={{ color: serviceColors.primary }}>{item.question}</h3>
                  <p>{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-section cta-section">
        <div className="section-container">
          <motion.div
            className="cta-content"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how {service.title.toLowerCase()} can help your business grow.</p>
            <button onClick={() => navigate('/#contact')} className="cta-button primary large" style={{ background: serviceColors.gradient, boxShadow: `0 10px 30px ${serviceColors.glow}` }}>
              Contact Us Today <FaRocket />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
