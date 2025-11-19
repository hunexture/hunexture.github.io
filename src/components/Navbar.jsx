import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { FaSun, FaMoon, FaChevronDown } from 'react-icons/fa'
import Logo from './Logo'
import { industriesData } from '../data/industriesData'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle hash navigation when location changes
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleIndustryClick = (slug) => {
    setMenuOpen(false)
    setIndustriesOpen(false)
    navigate(`/industries/${slug}`)
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)

    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/' + href)
    } else {
      // If we're on the home page, just scroll to the section
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a
          href="/"
          className="logo hunexture-logo-wrapper"
          onClick={(e) => {
            e.preventDefault()
            navigate('/')
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }, 100)
          }}
        >
          <Logo size="medium" variant="image" />
        </a>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {/* About */}
          <a
            href="#about"
            className="nav-link"
            onClick={(e) => handleNavClick(e, '#about')}
          >
            About
          </a>

          {/* Services */}
          <a
            href="#services"
            className="nav-link"
            onClick={(e) => handleNavClick(e, '#services')}
          >
            Services
          </a>

          {/* Industries Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button className="nav-link dropdown-trigger">
              Industries <FaChevronDown className={`dropdown-arrow ${industriesOpen ? 'open' : ''}`} />
            </button>
            <div className={`dropdown-menu industries-dropdown ${industriesOpen ? 'show' : ''}`}>
              <div className="dropdown-grid">
                {industriesData.map((industry, index) => {
                  const IndustryIcon = industry.icon;
                  return (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleIndustryClick(industry.slug)}
                    >
                      <IndustryIcon className="dropdown-icon" />
                      <span>{industry.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <a
            href="#portfolio"
            className="nav-link"
            onClick={(e) => handleNavClick(e, '#portfolio')}
          >
            Portfolio
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="nav-link"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contact
          </a>
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => toggleTheme(theme === 'black' ? 'white' : 'black')}
            aria-label="Toggle theme"
            title={theme === 'black' ? 'Switch to White Theme' : 'Switch to Black Theme'}
          >
            {theme === 'black' ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
