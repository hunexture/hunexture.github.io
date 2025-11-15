import React from 'react'
import './Logo.css'

const Logo = ({ size = 'medium', variant = 'image' }) => {
  // If using image variant, render the logo image
  if (variant === 'image') {
    return (
      <div className={`hunexture-logo-image ${size}`}>
        <img
          src="/logo_2.png"
          alt="Hunexture"
          className="logo-img"
        />
      </div>
    )
  }

  // Otherwise render text-based logo
  return (
    <div className={`hunexture-logo ${size} ${variant}`}>
      <span className="logo-text">
        HUNE<span className="logo-x">X</span>TURE
      </span>
    </div>
  )
}

export default Logo
