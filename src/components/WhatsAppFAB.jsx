import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppFAB.css'

const WhatsAppFAB = () => {
  const handleClick = () => {
    window.open('https://wa.me/919067262552', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="whatsapp-fab-wrapper">
      <button
        className="whatsapp-fab"
        onClick={handleClick}
        aria-label="Chat with us on WhatsApp"
      >
        <span className="whatsapp-pulse"></span>
        <FaWhatsapp className="whatsapp-icon" />
      </button>
      <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
    </div>
  )
}

export default WhatsAppFAB
