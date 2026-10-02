import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { contactDetails } from '../data/companyData'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const { whatsappNumber } = contactDetails

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using FormSubmit.co - a free form backend service
      const response = await fetch(`https://formsubmit.co/${contactDetails.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Contact Form Submission: ${formData.subject}`,
          _template: 'table',
          _captcha: 'false'
        })
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setSubmitError('')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError(`Something went wrong. Please try again or email us directly at ${contactDetails.email}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsApp = () => {
    const text = `Hi! I'm ${formData.name || 'interested in your services'}.\n\nSubject: ${formData.subject || 'General Inquiry'}\n\nMessage: ${formData.message || 'I would like to know more about your services.'}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: contactDetails.email,
      link: `mailto:${contactDetails.email}`
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: contactDetails.phoneDisplay,
      link: contactDetails.phoneHref
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: contactDetails.location,
      link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.location)}`,
      external: true
    }
  ]

  const socialLinks = [
    { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/company/hunexture/' },
    { icon: <FaTwitter />, name: 'Twitter', url: 'https://x.com/hunexture' },
    { icon: <FaInstagram />, name: 'Instagram', url: 'https://www.instagram.com/hunexture' }
  ]

  return (
    <section id="contact" className="bp-section contact" aria-labelledby="contact-title">
      <div className="bp-container">
        <div className="bp-head">
          <h2 id="contact-title">Start with a discovery call</h2>
          <p>
            Tell us what you're building. We'll reply within one business day, sign an NDA
            if you need one, and send a written proposal within 48 hours of our call.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="info-title">Other ways to reach us</h3>

            <div className="info-items">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="info-item"
                >
                  <div className="info-icon" aria-hidden="true">{item.icon}</div>
                  <div className="info-content">
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-links">
              <h4 className="social-title">Follow us</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {submitSuccess ? (
            <div className="form-success" role="status">
              <div className="success-check">✓</div>
              <h3 className="success-title">Message sent</h3>
              <p className="success-message">
                Thanks for reaching out. We'll reply within one business day.
              </p>
              <button
                className="bp-btn bp-btn-ghost success-reset-btn"
                onClick={() => setSubmitSuccess(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Work email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject <span className="field-optional">(optional)</span></label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help you?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            {submitError && (
              <p className="form-error" role="alert">{submitError}</p>
            )}

            <div className="form-buttons">
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send message'}
              </button>
              <button type="button" className="whatsapp-btn" onClick={handleWhatsApp}>
                <FaWhatsapp className="btn-icon" aria-hidden="true" />
                Chat on WhatsApp
              </button>
            </div>
          </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
