import React from 'react'
import { useTheme } from '../context/ThemeContext'
import './Logo.css'

const Logo = ({ size = 'medium', variant = 'image' }) => {
  const { theme } = useTheme()

  // If using image variant, render the logo image with theme-aware switching
  if (variant === 'image') {
    // Use logo_for_white_back.png for white theme, logo_2.png for dark themes
    const logoSrc = theme === 'white' ? '/logo_for_white_back.png' : '/logo_2.png'

    return (
      <div className={`hunexture-logo-image ${size}`}>
        <img
          src={logoSrc}
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
