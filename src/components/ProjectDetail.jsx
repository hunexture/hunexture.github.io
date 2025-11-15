import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheck, FaExternalLinkAlt, FaGithub, FaClock, FaUsers, FaIndustry, FaQuoteLeft } from 'react-icons/fa';
import { getProjectBySlug, getRelatedProjects } from '../data/portfolioData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/" className="back-button">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = project.icon;
  const relatedProjects = getRelatedProjects(project.id);

  return (
    <div className="project-detail-container">
      {/* Hero Section */}
      <motion.section
        className="project-hero"
        style={{ background: project.image }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="project-hero-overlay">
          <div className="project-hero-content">
            <button onClick={() => navigate('/#portfolio')} className="back-link">
              <FaArrowLeft /> Back to Portfolio
            </button>

            <motion.div
              className="project-hero-icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <IconComponent />
            </motion.div>

            <motion.span
              className="project-category-badge"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {project.categoryLabel}
            </motion.span>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              className="project-hero-description"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="project-hero-tags"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {project.tags.map((tag, index) => (
                <span key={index} className="hero-tag">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="project-hero-links"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hero-link-btn">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hero-link-btn secondary">
                  <FaGithub /> View Code
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Project Info Bar */}
      <section className="project-info-bar">
        <div className="info-bar-container">
          <div className="info-item">
            <FaClock className="info-icon" />
            <div>
              <span className="info-label">Timeline</span>
              <span className="info-value">{project.timeline}</span>
            </div>
          </div>
          <div className="info-item">
            <FaUsers className="info-icon" />
            <div>
              <span className="info-label">Team Size</span>
              <span className="info-value">{project.teamSize}</span>
            </div>
          </div>
          <div className="info-item">
            <FaIndustry className="info-icon" />
            <div>
              <span className="info-label">Industry</span>
              <span className="info-value">{project.industry}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="project-section challenge-solution-section">
        <div className="section-container">
          <div className="challenge-solution-grid">
            <motion.div
              className="challenge-box"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>The Challenge</h2>
              <p>{project.challenge}</p>
            </motion.div>

            <motion.div
              className="solution-box"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Solution</h2>
              <p>{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="project-section results-section">
        <div className="section-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Results & Impact</h2>
            <div className="results-grid">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  className="result-card"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="result-metric">{result.metric}</div>
                  <div className="result-label">{result.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="project-section features-section">
        <div className="section-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Key Features</h2>
            <div className="features-grid">
              {project.features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="feature-card"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <FeatureIcon className="feature-icon" />
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="project-section tech-section">
        <div className="section-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Technology Stack</h2>
            <div className="tech-grid">
              {project.technologies.map((tech, index) => {
                const TechIcon = tech.icon;
                return (
                  <motion.div
                    key={index}
                    className="tech-card"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <TechIcon className="tech-icon" />
                    <div className="tech-info">
                      <p className="tech-name">{tech.name}</p>
                      <p className="tech-purpose">{tech.purpose}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="project-section takeaways-section">
        <div className="section-container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Key Takeaways</h2>
            <div className="takeaways-list">
              {project.keyTakeaways.map((takeaway, index) => (
                <motion.div
                  key={index}
                  className="takeaway-item"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FaCheck className="takeaway-icon" />
                  <p>{takeaway}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="project-section testimonial-section">
          <div className="section-container">
            <motion.div
              className="testimonial-box"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-quote">{project.testimonial.quote}</p>
              <div className="testimonial-author">
                <p className="author-name">{project.testimonial.author}</p>
                <p className="author-company">{project.testimonial.company}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="project-section related-projects-section">
          <div className="section-container">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Related Projects</h2>
              <div className="related-projects-grid">
                {relatedProjects.map((relatedProject, index) => {
                  const RelatedIcon = relatedProject.icon;
                  return (
                    <motion.div
                      key={relatedProject.id}
                      className="related-project-card"
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => navigate(`/portfolio/${relatedProject.slug}`)}
                      whileHover={{ y: -10 }}
                    >
                      <div
                        className="related-project-image"
                        style={{ background: relatedProject.image }}
                      >
                        <RelatedIcon className="related-project-icon" />
                      </div>
                      <div className="related-project-content">
                        <span className="related-category">{relatedProject.categoryLabel}</span>
                        <h3>{relatedProject.title}</h3>
                        <p>{relatedProject.shortDescription}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="project-section cta-section">
        <div className="section-container">
          <motion.div
            className="cta-content"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Have a Similar Project in Mind?</h2>
            <p>Let's discuss how we can help bring your vision to life.</p>
            <button onClick={() => navigate('/#contact')} className="cta-button primary large">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
