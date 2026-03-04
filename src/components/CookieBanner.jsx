import React, { useEffect, useState } from 'react'
import './CookieBanner.css'

const CONSENT_KEY = 'hunexture-cookie-consent'

const CookieBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      const timer = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-banner-content">
        <div className="cookie-icon">🍪</div>
        <div className="cookie-text">
          <p>
            We use cookies to enhance your experience and analyze site traffic.
            By clicking "Accept All", you consent to our use of cookies.{' '}
            <a href="/cookie-policy" className="cookie-link">Learn more</a>
          </p>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn cookie-decline" onClick={handleDecline}>
            Decline
          </button>
          <button className="cookie-btn cookie-accept" onClick={handleAccept}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
