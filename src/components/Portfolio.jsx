import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'
import './Portfolio.css'

const Portfolio = () => {
  const [filter, setFilter] = useState('all')

  const projects = portfolioData

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
            <Link
              key={project.id}
              to={`/portfolio/${project.slug}`}
              className="portfolio-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="project-image"
                style={{ background: project.image }}
              >
                <div className="project-overlay">
                  <div className="overlay-text">View Details</div>
                  {project.liveUrl && (
                    <button
                      className="project-link"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.liveUrl, '_blank');
                      }}
                    >
                      <FaExternalLinkAlt />
                    </button>
                  )}
                  {project.githubUrl && (
                    <button
                      className="project-link"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      <FaGithub />
                    </button>
                  )}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
