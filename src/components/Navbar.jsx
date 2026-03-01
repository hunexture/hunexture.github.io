import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { FaSun, FaMoon, FaChevronDown } from 'react-icons/fa'
import Logo from './Logo'
import { industriesData } from '../data/industriesData'
import { blogData } from '../data/blogData'
import { aiData } from '../data/aiData'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [aiOpen, setAiOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
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

  const handleIndustryClick = (slug) => {
    setMenuOpen(false)
    setIndustriesOpen(false)
    setAiOpen(false)
    navigate(`/industries/${slug}`)
  }

  const handleAiClick = (slug) => {
    setMenuOpen(false)
    setIndustriesOpen(false)
    setAiOpen(false)
    navigate(`/ai/${slug}`)
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    setIndustriesOpen(false)
    setAiOpen(false)

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
    if (menuOpen) {
      setIndustriesOpen(false)
      setAiOpen(false)
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
            className="nav-dropdown ai-nav-dropdown"
            onMouseEnter={() => window.innerWidth > 768 && setIndustriesOpen(true)}
            onMouseLeave={() => window.innerWidth > 768 && setIndustriesOpen(false)}
          >
            <button
              className="nav-link dropdown-trigger"
              onClick={() => window.innerWidth <= 768 && setIndustriesOpen(!industriesOpen)}
            >
              Industries <FaChevronDown className={`dropdown-arrow ${industriesOpen ? 'open' : ''}`} />
            </button>
            <div className={`dropdown-menu ai-mega-dropdown ${industriesOpen ? 'show' : ''}`}>
              {/* Mobile Submenu Header */}
              <div className="mobile-submenu-header">
                <button className="mobile-submenu-close" onClick={() => { setIndustriesOpen(false); setMenuOpen(false); }}>&times;</button>
                <div className="mobile-breadcrumb">
                  <span onClick={(e) => { e.stopPropagation(); setIndustriesOpen(false); }}>HOME</span> &gt; <strong>INDUSTRIES</strong>
                </div>
              </div>

              <div className="ai-dropdown-container">
                {/* Left Promo Card */}
                <div className="ai-promo-card desktop-only">
                  <div className="stats-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '15px',
                    marginBottom: '20px',
                    color: 'white'
                  }}>
                    <div>
                      <div style={{ fontSize: '12px', opacity: 0.8 }}>Countries</div>
                      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>90+</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', opacity: 0.8 }}>Since</div>
                      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>1998</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', opacity: 0.8 }}>Projects</div>
                      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>7000+</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', opacity: 0.8 }}>Clients</div>
                      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>3000+</div>
                    </div>
                  </div>
                  <p style={{ marginTop: 'auto', marginBottom: '20px' }}>Our learning from variety of industries over more than two decades have helped us bring immediate impact.</p>
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
            onMouseEnter={() => window.innerWidth > 768 && setAiOpen(true)}
            onMouseLeave={() => window.innerWidth > 768 && setAiOpen(false)}
          >
            <button
              className="nav-link dropdown-trigger"
              onClick={() => window.innerWidth <= 768 && setAiOpen(!aiOpen)}
            >
              AI <FaChevronDown className={`dropdown-arrow ${aiOpen ? 'open' : ''}`} />
            </button>
            <div className={`dropdown-menu ai-mega-dropdown ${aiOpen ? 'show' : ''}`}>
              {/* Mobile Submenu Header */}
              <div className="mobile-submenu-header">
                <button className="mobile-submenu-close" onClick={() => { setAiOpen(false); setMenuOpen(false); }}>&times;</button>
                <div className="mobile-breadcrumb">
                  <span onClick={(e) => { e.stopPropagation(); setAiOpen(false); }}>HOME</span> &gt; <strong>AI</strong>
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


          {/* Blog Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => window.innerWidth > 768 && setBlogOpen(true)}
            onMouseLeave={() => window.innerWidth > 768 && setBlogOpen(false)}
          >
            <button
              className="nav-link dropdown-trigger"
              onClick={() => window.innerWidth <= 768 && setBlogOpen(!blogOpen)}
            >
              Blog <FaChevronDown className={`dropdown-arrow ${blogOpen ? 'open' : ''}`} />
            </button>
            <div className={`dropdown-menu ${blogOpen ? 'show' : ''}`}>
              {Object.keys(blogData).map((categorySlug) => (
                <div
                  key={categorySlug}
                  className="dropdown-item"
                  onClick={() => {
                    setMenuOpen(false);
                    setBlogOpen(false);
                    setAiOpen(false);
                    navigate(`/blog/${categorySlug}`);
                  }}
                >
                  <span>{blogData[categorySlug].title}</span>
                </div>
              ))}
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
