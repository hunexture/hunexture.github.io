import React, { useState } from 'react'

import { homeFaqs as faqs } from '../data/companyData'
import './FAQ.css'


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
