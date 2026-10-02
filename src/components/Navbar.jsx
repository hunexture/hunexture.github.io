import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import Logo from './Logo'
import { industriesData } from '../data/industriesData'
import { aiData } from '../data/aiData'
import { companyStats, formatStat, getStat } from '../data/companyData'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  // Only one dropdown can be open at a time: 'industries' | 'ai' | 'blog' | null.
  // A single value (instead of one flag per menu) stops two mega menus from
  // overlapping while the mouse moves between triggers.
  const [openMenu, setOpenMenu] = useState(null)
  const closeTimer = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  const isDesktop = () => window.innerWidth > 768

  // Desktop hover: open immediately, close after a short grace period so a
  // diagonal mouse path into the panel doesn't flicker it shut.
  const hoverOpen = (name) => {
    if (!isDesktop()) return
    clearTimeout(closeTimer.current)
    setOpenMenu(name)
  }

  const hoverClose = () => {
    if (!isDesktop()) return
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150)
  }

  // Mobile tap toggles the submenu
  const tapToggle = (name) => {
    if (isDesktop()) return
    setOpenMenu((current) => (current === name ? null : name))
  }

  const closeAll = () => {
    clearTimeout(closeTimer.current)
    setMenuOpen(false)
    setOpenMenu(null)
  }

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

  const handleIndustryClick = (slug) => {
    closeAll()
    navigate(`/industries/${slug}`)
  }

  const handleAiClick = (slug) => {
    closeAll()
    navigate(`/ai/${slug}`)
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    closeAll()

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    if (menuOpen) setOpenMenu(null)
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

        <div className={`nav-menu ${menuOpen ? 'active' : ''} ${openMenu ? 'has-open-dropdown' : ''}`}>
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
            className="nav-dropdown ai-nav-dropdown"
            onMouseEnter={() => hoverOpen('industries')}
            onMouseLeave={hoverClose}
          >
            <button
              className="nav-link dropdown-trigger"
              onClick={() => tapToggle('industries')}
              aria-expanded={openMenu === 'industries'}
            >
              Industries <FaChevronDown className={`dropdown-arrow ${openMenu === 'industries' ? 'open' : ''}`} />
            </button>
            <div className={`dropdown-menu ai-mega-dropdown ${openMenu === 'industries' ? 'show' : ''}`}>
              {/* Mobile Submenu Header */}
              <div className="mobile-submenu-header">
                <button className="mobile-submenu-close" onClick={closeAll}>&times;</button>
                <div className="mobile-breadcrumb">
                  <span onClick={(e) => { e.stopPropagation(); setOpenMenu(null); }}>HOME</span> &gt; <strong>INDUSTRIES</strong>
                </div>
              </div>

              <div className="ai-dropdown-container">
                {/* Left Promo Card */}
                <div className="ai-promo-card desktop-only">
                  <dl className="promo-stats-grid">
                    {companyStats.map((stat) => (
                      <div key={stat.key} className="promo-stat">
                        <dt>{stat.label}</dt>
                        <dd className="tech-font">{formatStat(stat)}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="promo-stats-copy">Lessons from building across {formatStat(getStat('industries'))} industries, applied to your product from day one.</p>
                  <button onClick={(e) => handleNavClick(e, '#contact')} className="btn-view-more">Contact Us</button>
                </div>

                {/* Right Grid */}
                <div className="ai-categories-grid">
                  {industriesData.map((industry, index) => {
                    const IndustryIcon = industry.icon;
                    return (
                      <div
                        key={index}
                        className="dropdown-item ai-dropdown-item"
                        onClick={() => handleIndustryClick(industry.slug)}
                      >
                        <div className="dropdown-icon-wrapper">
                          <IndustryIcon className="dropdown-icon" />
                        </div>
                        <div className="dropdown-item-content">
                          <span className="dropdown-item-title">{industry.name}</span>
                          <p className="dropdown-item-desc">{industry.shortDescription}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Submenu Footer */}
              <div className="mobile-submenu-footer">
                <button className="mobile-contact-btn" onClick={(e) => handleNavClick(e, '#contact')}>Contact Us &rarr;</button>
              </div>
            </div>
          </div>

          {/* AI Dropdown */}
          <div
            className="nav-dropdown ai-nav-dropdown"
            onMouseEnter={() => hoverOpen('ai')}
            onMouseLeave={hoverClose}
          >
            <button
              className="nav-link dropdown-trigger"
              onClick={() => tapToggle('ai')}
              aria-expanded={openMenu === 'ai'}
            >
              AI <FaChevronDown className={`dropdown-arrow ${openMenu === 'ai' ? 'open' : ''}`} />
            </button>
            <div className={`dropdown-menu ai-mega-dropdown ${openMenu === 'ai' ? 'show' : ''}`}>
              {/* Mobile Submenu Header */}
              <div className="mobile-submenu-header">
                <button className="mobile-submenu-close" onClick={closeAll}>&times;</button>
                <div className="mobile-breadcrumb">
                  <span onClick={(e) => { e.stopPropagation(); setOpenMenu(null); }}>HOME</span> &gt; <strong>AI</strong>
                </div>
              </div>

              <div className="ai-dropdown-container">
                {/* Left Promo Card */}
                <div className="ai-promo-card desktop-only">
                  <div className="ai-promo-icon-bg">
                    <span>AI</span>
                  </div>
                  <h3>GenAI & AI Agents</h3>
                  <p>Automate and innovate with intelligent AI solutions for modern enterprises.</p>
                  <button onClick={() => handleAiClick('custom-ai-services')} className="btn-view-more">View More</button>
                </div>

                {/* Right Grid */}
                <div className="ai-categories-grid">
                  {aiData.map((ai, index) => {
                    const AiIcon = ai.icon;
                    return (
                      <div
                        key={index}
                        className="dropdown-item ai-dropdown-item"
                        onClick={() => handleAiClick(ai.slug)}
                      >
                        <div className="dropdown-icon-wrapper">
                          <AiIcon className="dropdown-icon" />
                        </div>
                        <div className="dropdown-item-content">
                          <span className="dropdown-item-title">{ai.name}</span>
                          <p className="dropdown-item-desc">{ai.shortDescription}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

         
            </div>
          </div>


          {/* Portfolio */}
          <a
            href="/portfolio"
            className="nav-link"
            onClick={(e) => { e.preventDefault(); navigate('/portfolio') }}
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
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div
            className="mobile-overlay"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar
