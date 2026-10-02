import React, { useState } from 'react'

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
    answer: 'Yes. We offer flexible support packages including bug fixes, performance monitoring, feature updates, and uptime monitoring with automated alerting. We treat every project as a long-term partnership.'
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
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="bp-section" aria-labelledby="faq-title">
      <div className="bp-container faq-layout">
        <div className="faq-intro">
          <h2 id="faq-title">Questions buyers ask us</h2>
          <p>
            Can't find your answer? <a href="#contact">Send us a message</a> and we'll reply
            within one business day.
          </p>
        </div>

        <ul className="faq-list">
          {faqs.map((faq, i) => {
            const open = openIndex === i
            return (
              <li key={i} className={`faq-item${open ? ' open' : ''}`}>
                <h3 className="faq-q">
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggle(i)}
                    aria-expanded={open}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  hidden={!open}
                >
                  <p>{faq.answer}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default FAQ
