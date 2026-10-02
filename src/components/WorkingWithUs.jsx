import React from 'react'
import { FaFileSignature, FaCodeBranch, FaKey, FaCalendarCheck, FaShieldAlt } from 'react-icons/fa'
import { trustPractices, securityStatement } from '../data/companyData'
import './WorkingWithUs.css'

const practiceIcons = {
  nda: FaFileSignature,
  ip: FaCodeBranch,
  access: FaKey,
  cadence: FaCalendarCheck
}

const WorkingWithUs = () => (
  <section id="working-with-us" className="working-with-us">
    <div className="wwu-container">
      <div className="section-header">
        <span className="section-tag">Working With Us</span>
        <h2 className="section-title">Trust Is Built Into the Process</h2>
        <div className="title-underline"></div>
        <p className="section-description">
          What you can expect from day one: confidentiality, ownership, and full visibility into the work.
        </p>
      </div>

      <ul className="wwu-grid">
        {trustPractices.map((practice) => {
          const Icon = practiceIcons[practice.key]
          return (
            <li key={practice.key} className="wwu-card glass-panel">
              <div className="wwu-icon" aria-hidden="true"><Icon /></div>
              <h3 className="wwu-title">{practice.title}</h3>
              <p className="wwu-desc">{practice.description}</p>
            </li>
          )
        })}
      </ul>

      <div className="wwu-security glass-panel">
        <div className="wwu-security-icon" aria-hidden="true"><FaShieldAlt /></div>
        <div>
          <h3 className="wwu-security-title">Security &amp; Compliance</h3>
          <p className="wwu-security-text">{securityStatement}</p>
        </div>
      </div>
    </div>
  </section>
)

export default WorkingWithUs
