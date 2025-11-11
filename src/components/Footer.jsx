import React from 'react'
import { FaHeart, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'AI Solutions', href: '#services' },
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Cloud Integration', href: '#services' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Sitemap', href: '#' }
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
            <h3 className="footer-logo">HUNEXTURE</h3>
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
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-title">Services</h4>
              <ul className="footer-links-list">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-title">Legal</h4>
              <ul className="footer-links-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
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
