import React, { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Portfolio.css'

const Portfolio = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Analytics Platform',
      category: 'ai',
      description: 'Enterprise-level analytics platform with machine learning predictions and real-time insights.',
      tags: ['Python', 'TensorFlow', 'React', 'AWS'],
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'E-Commerce Mobile App',
      category: 'mobile',
      description: 'Cross-platform shopping app with AR product visualization and seamless checkout experience.',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Dashboard',
      category: 'cloud',
      description: 'Comprehensive monitoring and management dashboard for multi-cloud environments.',
      tags: ['Vue.js', 'Docker', 'Kubernetes', 'Azure'],
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'Healthcare Management System',
      category: 'web',
      description: 'HIPAA-compliant patient management platform with telemedicine capabilities.',
      tags: ['React', 'GraphQL', 'PostgreSQL', 'WebRTC'],
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 5,
      title: 'Smart Home IoT Platform',
      category: 'ai',
      description: 'Intelligent home automation system with voice control and predictive learning.',
      tags: ['IoT', 'Python', 'MQTT', 'React'],
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 6,
      title: 'Financial Trading App',
      category: 'mobile',
      description: 'Real-time trading platform with advanced charting and portfolio management.',
      tags: ['Flutter', 'WebSocket', 'Redis', 'Golang'],
      image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI Solutions' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'cloud', label: 'Cloud Services' }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="section-header">
          <span className="section-tag">Our Work</span>
          <h2 className="section-title">Portfolio</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Showcasing our latest projects and innovative solutions
          </p>
        </div>

        <div className="filter-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="project-image"
                style={{ background: project.image }}
              >
                <div className="project-overlay">
                  <button className="project-link">
                    <FaExternalLinkAlt />
                  </button>
                  <button className="project-link">
                    <FaGithub />
                  </button>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
