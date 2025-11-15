import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaHeart, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa'
import Logo from './Logo'
import './Footer.css'

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()

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
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'AI Solutions', href: 'services/ai-solutions' },
      { name: 'Web Development', href: 'services/web-development' },
      { name: 'Mobile Apps', href: 'services/app-development' },
      { name: 'UI/UX Design', href: 'services/uiux-design'},
      { name: 'Cloud Integration', href: 'services/cloud-integration' }
    ],
    legal: [
      { name: 'Privacy Policy', href: 'privacy-policy' },
      { name: 'Terms of Service', href: 'terms-of-service' },
      { name: 'Cookie Policy', href: 'cookie-policy' },
    ]
  }

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/hunexture-tech-175766391/', name: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/hunexture', name: 'GitHub' },
    { icon: <FaTwitter />, url: 'https://x.com/hunexture', name: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/hunexture', name: 'Instagram' }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <Logo size="large" variant="image" />
            <p className="footer-tagline">Building the Next Human Future</p>
            <p className="footer-description">
              Empowering businesses with cutting-edge AI solutions and innovative technology
              that transforms ideas into intelligent digital experiences.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="footer-social-link"
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
              <h4 className="footer-links-title">Company</h4>
              <ul className="footer-links-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-title">Services</h4>
              <ul className="footer-links-list">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-title">Legal</h4>
              <ul className="footer-links-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Hunexture. All rights reserved. Made with{' '}
            <FaHeart className="heart-icon" /> by the Hunexture Team.
          </p>
        </div>
      </div>

      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </button>
    </footer>
  )
}

export default Footer
