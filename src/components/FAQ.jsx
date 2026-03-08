import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './FAQ.css'

const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer: 'We work with startups, SMEs, and enterprises across industries including FinTech, HealthTech, E-Commerce, EdTech, and Logistics. If you have a problem that technology can solve, we can help.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. An MVP typically takes 6–10 weeks. Full-scale enterprise platforms range from 3–6 months. We follow agile sprints with regular demos so you see progress every 2 weeks.'
  },
  {
    question: 'Do you provide post-launch support and maintenance?',
    answer: 'Yes. We offer flexible support packages including bug fixes, performance monitoring, feature updates, and 24/7 uptime monitoring. We treat every project as a long-term partnership.'
  },
  {
    question: 'What AI and ML technologies do you specialize in?',
    answer: 'We specialize in LLMs (GPT, Gemini, Claude), computer vision, NLP, recommendation engines, predictive analytics, and custom ML pipelines. We build on PyTorch, TensorFlow, and cloud AI services from AWS, GCP, and Azure.'
  },
  {
    question: 'How do we get started with Hunexture?',
    answer: 'Simply reach out via our contact form or WhatsApp. We start with a free 30-minute discovery call to understand your goals, followed by a detailed proposal within 48 hours. No commitment required.'
  },
  {
    question: 'Do you sign NDAs before project discussions?',
    answer: 'Absolutely. We sign NDAs before any technical discussions. Your business ideas, data, and processes are treated with strict confidentiality throughout our engagement.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const toggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="faq" ref={sectionRef}>
      <div className="faq-container">
        <div className={`faq-left ${visible ? 'animate-in' : ''}`}>
          <div className="section-header">
            <span className="section-tag">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="title-underline"></div>
            <p className="section-description">
              Everything you need to know about working with us. Can't find the answer you're looking for?
            </p>
          </div>
        </div>

        <div className={`faq-right ${visible ? 'animate-in' : ''}`}>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item${openIndex === i ? ' open' : ''}`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openIndex === i ? '-' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
