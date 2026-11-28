import React from 'react'
import { useTheme } from '../context/ThemeContext'
import './Logo.css'

// `surface="dark"` renders the light logo for use on ink-coloured backgrounds
const Logo = ({ size = 'medium', variant = 'image', surface }) => {
  const { theme } = useTheme()

  // If using image variant, render the logo image with theme-aware switching
  if (variant === 'image') {
    // Web-sized copies of logo_for_white_back.png and logo_2.png
    const onLight = surface ? surface === 'light' : theme === 'white'
    const file = onLight ? 'logo-on-light.webp' : 'logo-on-dark.webp'

    return (
      <div className={`hunexture-logo-image ${size}`}>
        <img
          src={`${process.env.PUBLIC_URL}/${file}`}
          width="633"
          height="120"
          loading={onLight ? 'eager' : 'lazy'}
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
