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
  <section id="working-with-us" className="bp-section" aria-labelledby="wwu-title">
    <div className="bp-container">
      <div className="bp-head">
        <h2 id="wwu-title">How we work with you</h2>
        <p>
          The terms we put in writing before any code is written: confidentiality,
          ownership, access and how you'll see progress.
        </p>
      </div>

      <ul className="wwu-grid">
        {trustPractices.map((practice) => {
          const Icon = practiceIcons[practice.key]
          return (
            <li key={practice.key} className="wwu-card">
              <div className="wwu-icon" aria-hidden="true"><Icon /></div>
              <h3 className="wwu-title">{practice.title}</h3>
              <p className="wwu-desc">{practice.description}</p>
            </li>
          )
        })}
      </ul>

      <div className="wwu-security">
        <div className="wwu-security-icon" aria-hidden="true"><FaShieldAlt /></div>
        <div>
          <h3 className="wwu-security-title">Security and compliance</h3>
          <p className="wwu-security-text">{securityStatement}</p>
        </div>
      </div>
    </div>
  </section>
)

export default WorkingWithUs
