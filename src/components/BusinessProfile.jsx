import React, { useEffect } from 'react'
import { FaEnvelope, FaGlobe, FaPhone, FaLinkedin } from 'react-icons/fa'
import './LegalPages.css'

const BusinessProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const identity = [
    { label: 'Business Name', value: 'Hunexture' },
    { label: 'Owner', value: 'Uttam Pipaliya' },
    { label: 'Business Type', value: 'Sole Trader (Unregistered)' },
    { label: 'Location', value: 'Ahmedabad, Gujarat, India' }
  ]

  const services = [
    'Software development',
    'Website development',
    'Web app development',
    'Mobile app development',
    'Desktop app development',
    'AI/ML model development',
    'Cloud-native platform engineering'
  ]

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">Business Profile</h1>
        <p className="legal-updated">
          A verifiable record of Hunexture's identity, ownership, and contact details.
        </p>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Business Identity</h2>
            <ul className="contact-info">
              {identity.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. About &amp; Services</h2>
            <p>
              Hunexture is an AI-powered software, web, and app development company.
              We build custom ML models, cloud-native platforms, and intelligent systems
              that automate operations and drive measurable business growth.
            </p>
            <p>Core services:</p>
            <ul>
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Contact</h2>
            <ul className="contact-info">
              <li>
                <FaEnvelope style={{ marginRight: '8px', color: 'var(--electric-blue)' }} />
                <strong>Email:</strong>{' '}
                <a href="mailto:info@hunexture.com">info@hunexture.com</a>
              </li>
              <li>
                <FaGlobe style={{ marginRight: '8px', color: 'var(--electric-blue)' }} />
                <strong>Website:</strong>{' '}
                <a href="https://hunexture.com">https://hunexture.com</a>
              </li>
              <li>
                <FaPhone style={{ marginRight: '8px', color: 'var(--electric-blue)' }} />
                <strong>Phone:</strong>{' '}
                <a href="tel:+919067262552">+91 90672 62552</a>
              </li>
              <li>
                <FaLinkedin style={{ marginRight: '8px', color: 'var(--electric-blue)' }} />
                <strong>LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/company/hunexture/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/company/hunexture
                </a>
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Trust Signals</h2>
            <p>
              Hunexture is built and operated by Uttam Pipaliya, an ML engineer working
              hands-on across custom machine learning models, cloud-native platforms, and
              production AI systems.
            </p>
            <p>
              A record of completed work is available on the{' '}
              <a href="/#portfolio">Portfolio</a> section of this site.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default BusinessProfile
