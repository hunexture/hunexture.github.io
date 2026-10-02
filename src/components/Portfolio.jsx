import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { portfolioData } from '../data/portfolioData'
import CoverArt from './CoverArt'
import './Portfolio.css'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'marketing', label: 'Marketing' }
]

const INITIAL_COUNT = 6

const Portfolio = () => {
  const [filter, setFilter] = useState('all')
  const [expanded, setExpanded] = useState(false)

  // Only offer filters that have projects behind them
  const available = categories.filter(c => c.id === 'all' || portfolioData.some(p => p.category === c.id))
  const filtered = filter === 'all' ? portfolioData : portfolioData.filter(p => p.category === filter)
  const shown = expanded ? filtered : filtered.slice(0, INITIAL_COUNT)
  const hidden = filtered.length - shown.length

  const selectFilter = (id) => {
    setFilter(id)
    setExpanded(false)
  }

  return (
    <section id="portfolio" className="bp-section bp-section--sunk" aria-labelledby="portfolio-title">
      <div className="bp-container">
        <div className="bp-head">
          <h2 id="portfolio-title">Sample work</h2>
          <p>
            Concept and sample builds that show how we approach a problem. Metrics on project
            pages are illustrative — published client case studies are coming soon.
          </p>
        </div>

        <div className="pf-filters" role="group" aria-label="Filter projects by type">
          {available.map(c => (
            <button
              key={c.id}
              type="button"
              className={`pf-filter${filter === c.id ? ' is-active' : ''}`}
              aria-pressed={filter === c.id}
              onClick={() => selectFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <ul className="pf-grid">
          {shown.map(project => (
            <li key={project.id}>
              <Link to={`/portfolio/${project.slug}`} className="pf-sheet">
                <span className="pf-image" aria-hidden="true"><CoverArt category={project.category} seed={project.id} /></span>
                <span className="pf-body">
                  <span className="pf-category">{project.categoryLabel}</span>
                  <span className="pf-title">{project.title}</span>
                  <span className="pf-desc">{project.shortDescription}</span>
                  <span className="pf-tags">{project.tags.join(', ')}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {(hidden > 0 || expanded) && (
          <div className="pf-more">
            <button type="button" className="bp-btn bp-btn-ghost" onClick={() => setExpanded(e => !e)}>
              {expanded ? 'Show fewer projects' : `Show ${hidden} more`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio
