import React from 'react'
import { illustrativeOutcomes } from '../data/companyData'
import './Testimonials.css'

// Example scenarios, clearly labelled — not attributed client quotes.
// Replace illustrativeOutcomes with real, permissioned case studies when available.
const Testimonials = () => (
  <section id="testimonials" className="bp-section" aria-labelledby="outcomes-title">
    <div className="bp-container">
      <div className="bp-head">
        <h2 id="outcomes-title">Example engagements</h2>
        <p>
          How we approach typical problems, and the outcome each project is designed for.
          These are illustrative scenarios, not client testimonials — published case studies
          are on the way.
        </p>
      </div>

      <table className="outcomes-table">
        <caption className="visually-hidden">Illustrative example engagements</caption>
        <thead>
          <tr>
            <th scope="col">Scenario</th>
            <th scope="col">Challenge</th>
            <th scope="col">Approach</th>
            <th scope="col">Designed for</th>
          </tr>
        </thead>
        <tbody>
          {illustrativeOutcomes.map(item => (
            <tr key={item.scenario}>
              <th scope="row">{item.scenario}</th>
              <td data-label="Challenge">{item.challenge}</td>
              <td data-label="Approach">{item.approach}</td>
              <td data-label="Designed for" className="outcomes-target">
                {item.outcome.replace(/^Target:\s*/, '')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
)

export default Testimonials
