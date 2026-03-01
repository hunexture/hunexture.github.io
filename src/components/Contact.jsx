import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'
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

  // WhatsApp number (with country code, no + or spaces)
  const whatsappNumber = '919067262552'

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
      const response = await fetch('https://formsubmit.co/info@hunexture.com', {
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
      setSubmitError('Something went wrong. Please try again or email us directly at info@hunexture.com')
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
      content: 'info@hunexture.com',
      link: 'mailto:info@hunexture.com'
    },
    // {
    //   icon: <FaPhone />,
    //   title: 'Phone',
    //   content: '+91 9067262552',
    //   link: 'tel:+919067262552'
    // },
    // {
    //   icon: <FaMapMarkerAlt />,
    //   title: 'Location',
    //   content: 'Ahmedabad, Gujarat',
    //   link: '#'
    // }
  ]

  const socialLinks = [
    { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/hunexture-tech-175766391/' },
    { icon: <FaTwitter />, name: 'Twitter', url: 'https://x.com/hunexture' },
    { icon: <FaInstagram />, name: 'Instagram', url: 'https://www.instagram.com/hunexture' }
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Ready to build something extraordinary? Tell us about your project
            and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="info-title">Let's Build Something Amazing Together</h3>
            <p className="info-description">
              Whether you have a question about our services, pricing, or anything else,
              our team is ready to answer all your questions.
            </p>

            <div className="info-items">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="info-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-links">
              <h4 className="social-title">Follow Us</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
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
            <div className="form-success">
              <div className="success-check">✓</div>
              <h3 className="success-title">Message Sent!</h3>
              <p className="success-message">
                Thank you for reaching out. Our team will review your message
                and respond within 24 hours.
              </p>
              <button
                className="btn-secondary success-reset-btn"
                onClick={() => setSubmitSuccess(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
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
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="info@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
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
              <p className="form-error">{submitError}</p>
            )}

            <div className="form-buttons">
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <FaEnvelope className="btn-icon" />
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
