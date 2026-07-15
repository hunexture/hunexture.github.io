import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { industriesData } from '../data/industriesData'
import './IndustriesList.css'

const IndustriesList = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="il-container">
      <div className="il-header">
        <span className="il-subtitle">OUR SECTORS</span>
        <h1 className="il-title">Industries We Serve</h1>
        <div className="il-underline"></div>
        <p className="il-desc">
          Leveraging decades of technology innovation to deliver immediate impact across diverse sectors.
        </p>
      </div>

      <div className="il-grid">
        {industriesData.map((industry) => {
          const Icon = industry.icon
          return (
            <div 
              key={industry.id} 
              className="il-card" 
              style={{ '--accent-color': industry.color }}
              onClick={() => navigate(`/industries/${industry.slug}`)}
            >
              <div className="il-card-glow"></div>
              <div className="il-icon-wrapper">
                <Icon className="il-icon" />
              </div>
              <h3 className="il-card-title">{industry.name}</h3>
              <p className="il-card-desc">{industry.shortDescription}</p>
              <span className="il-card-link">Explore Solutions &rarr;</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default IndustriesList
