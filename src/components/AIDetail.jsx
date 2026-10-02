import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { aiData } from '../data/aiData'
import { aiExtra } from '../data/aiExtra'
import { aiGovernance } from '../data/insights'
import AIArtifact from './AIArtifact'
import './AIDetail.css'

const AIDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [openOffer, setOpenOffer] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)

  const ai = aiData.find((a) => a.slug === slug)
  const extra = aiExtra[slug]

  useEffect(() => { window.scrollTo(0, 0); setOpenOffer(0); setOpenFaq(0) }, [slug])

  if (!ai || !extra) {
    return (
      <main className="theme-ai aid aid-missing">
        <h1>AI service not found</h1>
        <p>We could not find that page. Browse all AI solutions instead.</p>
        <Link className="aid-btn aid-btn--solid" to="/ai">All AI solutions</Link>
      </main>
    )
  }

  const Icon = ai.icon
  const related = aiData.filter((a) => a.slug !== slug).slice(0, 4)

  const goContact = () => {
    navigate('/')
    setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 200)
  }

  return (
    <main className="theme-ai aid">
      <header className="aid-hero" aria-labelledby="aid-title">
        <div className="aid-hero-inner">
          <div className="aid-hero-copy">
            <nav className="aid-crumbs" aria-label="Breadcrumb">
              <Link to="/ai">AI</Link><span aria-hidden="true">/</span><span>{ai.name}</span>
            </nav>
            <span className="aid-icon" aria-hidden="true"><Icon /></span>
            <h1 id="aid-title" className="aid-title">{ai.name}</h1>
            <p className="aid-headline">{ai.headline}</p>
            <p className="aid-lede">{ai.description}</p>
            <div className="aid-actions">
              <button type="button" className="aid-btn aid-btn--solid" onClick={goContact}>Plan a pilot</button>
              <a className="aid-btn" href="#offers">See what we offer</a>
            </div>
          </div>

          <AIArtifact slug={slug} Icon={Icon} name={ai.name} />
        </div>
      </header>

      <section className="aid-outcome" aria-label="Outcome">
        <div className="aid-wrap">
          <p><strong>What you get.</strong> {extra.outcome}</p>
        </div>
      </section>

      <section className="aid-section" aria-labelledby="aid-fit">
        <div className="aid-wrap aid-duo">
          <div>
            <h2 id="aid-fit">Where it fits</h2>
            <ul className="aid-fit">
              {extra.bestFor.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          <div>
            <h2>What you receive</h2>
            <ul className="aid-deliver">
              {extra.deliverables.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {ai.whatWeOffer?.length > 0 && (
        <section id="offers" className="aid-section aid-section--sunk" aria-labelledby="aid-offers">
          <div className="aid-wrap">
            <div className="aid-head">
              <h2 id="aid-offers">What we offer</h2>
              <p>Open an offer to see the capabilities and the tools we typically use.</p>
            </div>
            <div className="aid-offers">
              {ai.whatWeOffer.map((o, i) => (
                <div key={o.title} className={`aid-offer${openOffer === i ? ' is-open' : ''}`}>
                  <h3>
                    <button type="button" aria-expanded={openOffer === i} onClick={() => setOpenOffer(openOffer === i ? -1 : i)}>
                      <span className="aid-offer-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                      <span className="aid-offer-t">{o.title}</span>
                      <span className="aid-sign" aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="aid-offer-body">
                    <div>
                      <p>{o.description}</p>
                      {o.features?.length > 0 && (
                        <ul className="aid-feats">
                          {o.features.map((f) => <li key={f.name}><strong>{f.name}</strong> {f.description}</li>)}
                        </ul>
                      )}
                      {o.technologies?.length > 0 && (
                        <ul className="aid-tags" aria-label="Typical tools">
                          {o.technologies.map((t) => <li key={t}>{t}</li>)}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="aid-section" aria-labelledby="aid-risk">
        <div className="aid-wrap">
          <div className="aid-head">
            <h2 id="aid-risk">Risks and how we control them</h2>
            <p>Every AI project carries risk. We list it at the start and build the controls into the work.</p>
          </div>
          <table className="aid-table">
            <thead><tr><th scope="col">Risk</th><th scope="col">Control</th></tr></thead>
            <tbody>
              {extra.risks.map((r) => (
                <tr key={r.risk}><th scope="row">{r.risk}</th><td>{r.control}</td></tr>
              ))}
            </tbody>
          </table>
          <ul className="aid-gov" aria-label="Frameworks we map to">
            {aiGovernance.map((g) => <li key={g.name}><strong>{g.name}</strong><span>{g.note}</span></li>)}
          </ul>
        </div>
      </section>

      {ai.technologiesSummary?.length > 0 && (
        <section className="aid-section aid-section--sunk" aria-labelledby="aid-tech">
          <div className="aid-wrap">
            <div className="aid-head">
              <h2 id="aid-tech">Tools by area</h2>
              <p>We choose by fit and cost. This is the typical toolbox, not a fixed list.</p>
            </div>
            <ul className="aid-tech">
              {ai.technologiesSummary.map((t) => (
                <li key={t.category}><strong>{t.category}</strong><span>{t.tech}</span></li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="aid-section" aria-labelledby="aid-faq">
        <div className="aid-wrap aid-faq-wrap">
          <h2 id="aid-faq">Questions about {ai.name}</h2>
          <div className="aid-faq">
            {extra.faq.map((f, i) => (
              <div key={f.q} className={`aid-faq-item${openFaq === i ? ' is-open' : ''}`}>
                <h3>
                  <button type="button" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    {f.q}<span className="aid-sign" aria-hidden="true" />
                  </button>
                </h3>
                <div className="aid-faq-a"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aid-section aid-section--sunk" aria-labelledby="aid-more">
        <div className="aid-wrap">
          <h2 id="aid-more" className="aid-more-h">More AI solutions</h2>
          <ul className="aid-related">
            {related.map((r) => {
              const RIcon = r.icon
              return (
                <li key={r.slug}>
                  <Link to={`/ai/${r.slug}`}><RIcon aria-hidden="true" /><span>{r.name}</span></Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="aid-cta">
        <div className="aid-wrap aid-cta-inner">
          <div>
            <h2>Start with a two-week pilot</h2>
            <p>Bring one process and some sample data. You leave with a prototype and a clear go or no-go.</p>
          </div>
          <button type="button" className="aid-btn aid-btn--light" onClick={goContact}>Book a discovery call</button>
        </div>
      </section>
    </main>
  )
}

export default AIDetail
