import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaLinkedin, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa'
import Logo from './Logo'
import './Footer.css'

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Check initial scroll position
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault()

    if (href.startsWith('#')) {
      // Hash link - navigate to home if not already there
      if (location.pathname !== '/') {
        navigate('/' + href)
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else {
      // Regular route - navigate directly
      navigate('/' + href)
    }
  }

  const footerLinks = {
    company: [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: 'portfolio' },
      { name: 'Industries', href: 'industries' },
      { name: 'AI & Machine Learning', href: 'ai' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'AI Solutions', href: 'services/ai-solutions' },
      { name: 'Web Development', href: 'services/web-development' },
      { name: 'Mobile Apps', href: 'services/app-development' },
      { name: 'UI/UX Design', href: 'services/uiux-design' },
      { name: 'Cloud Integration', href: 'services/cloud-integration' },
      { name: 'Digital Marketing', href: 'services/digital-marketing' }
    ],
    legal: [
      { name: 'Business Profile', href: 'business-profile' },
      { name: 'Privacy Policy', href: 'privacy-policy' },
      { name: 'Terms of Service', href: 'terms-of-service' },
      { name: 'Cookie Policy', href: 'cookie-policy' },
    ]
  }

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/company/hunexture/', name: 'LinkedIn' },
    // { icon: <FaGithub />, url: 'https://github.com/hunexture', name: 'GitHub' },
    { icon: <FaTwitter />, url: 'https://x.com/hunexture', name: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/hunexture', name: 'Instagram' }
  ]

  return (
    <footer className="footer">
      {/* CTA banner — skipped on the home page, where the contact section sits right above */}
      {location.pathname !== '/' && (
        <div className="footer-cta">
          <div className="footer-cta-inner">
            <div className="footer-cta-text">
              <h2 className="footer-cta-title">Have a project in mind?</h2>
              <p className="footer-cta-description">
                Book a free discovery call. We reply within one business day.
              </p>
            </div>
            <a
              href="/#contact"
              className="footer-cta-btn"
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Book a discovery call
            </a>
          </div>
        </div>
      )}

      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <Logo size="large" variant="image" surface="dark" />
            <p className="footer-tagline">Building the Next Human Future</p>
            <p className="footer-description">
              AI and software engineering for startups and growing businesses.
              Based in Ahmedabad, India, working with clients worldwide.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-links-column">
              <h2 className="footer-links-title">Company</h2>
              <ul className="footer-links-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={`/${link.href}`} onClick={(e) => handleLinkClick(e, link.href)}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h2 className="footer-links-title">Services</h2>
              <ul className="footer-links-list">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={`/${link.href}`} onClick={(e) => handleLinkClick(e, link.href)}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h2 className="footer-links-title">Legal</h2>
              <ul className="footer-links-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={`/${link.href}`} onClick={(e) => handleLinkClick(e, link.href)}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Hunexture. All rights reserved.
          </p>
        </div>
      </div>

      {showScrollTop && (
        <button type="button" className="scroll-to-top" onClick={scrollToTop} aria-label="Back to top">
          <FaArrowUp />
        </button>
      )}
    </footer>
  )
}

export default Footer
