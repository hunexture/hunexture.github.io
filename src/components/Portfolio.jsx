import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt, FaGithub, FaChevronDown } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'
import './Portfolio.css'

const Portfolio = () => {
  const [filter, setFilter] = useState('all')
  const [expanded, setExpanded] = useState(false)
  const [initialCount, setInitialCount] = useState(4)

  // Determine initial count based on screen size
  useEffect(() => {
    const updateInitialCount = () => {
      if (window.innerWidth < 768) {
        setInitialCount(3) // Mobile: 3 projects
      } else if (window.innerWidth < 1024) {
        setInitialCount(4) // Tablet: 4 projects
      } else {
        setInitialCount(4) // Desktop: 4 projects
      }
    }

    updateInitialCount()
    window.addEventListener('resize', updateInitialCount)
    return () => window.removeEventListener('resize', updateInitialCount)
  }, [])

  // Reset expanded state when filter changes
  useEffect(() => {
    setExpanded(false)
  }, [filter])

  const projects = portfolioData

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI Solutions' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'cloud', label: 'Cloud Services' },
    { id: 'marketing', label: 'Digital Marketing' }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  const displayedProjects = expanded
    ? filteredProjects
    : filteredProjects.slice(0, initialCount)

  const hasMoreProjects = filteredProjects.length > initialCount

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
          {displayedProjects.map((project, index) => (
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
                  <div className="overlay-text">
                    <img src={`${process.env.PUBLIC_URL}/images/icons/article.svg`} alt="Read More" className="overlay-icon" />
                    View Details
                  </div>
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

        {hasMoreProjects && (
          <div className="load-more-container">
            <button
              className="load-more-btn"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show Less' : `Load More Projects (${filteredProjects.length - initialCount} more)`}
              <FaChevronDown className={`chevron-icon ${expanded ? 'rotated' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio
