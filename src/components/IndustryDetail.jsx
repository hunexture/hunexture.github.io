import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getIndustryBySlug, industriesData, getTechIcon } from '../data/industriesData'
import { industryMeta } from '../data/insights'
import { industryExtra } from '../data/industryExtra'
import './IndustryDetail.css'

const IndustryDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(0)

  const industry = getIndustryBySlug(slug)
  const meta = industryMeta[slug]
  const extra = industryExtra[slug]

  useEffect(() => { window.scrollTo(0, 0); setOpenFaq(0) }, [slug])

  if (!industry || !meta || !extra) {
    return (
      <main className="theme-ind idt idt-missing">
        <h1>Industry not found</h1>
        <p>We could not find that sector. Browse all sectors instead.</p>
        <Link className="idt-btn idt-btn--solid" to="/industries">All industries</Link>
      </main>
    )
  }

  const Icon = industry.icon
  const related = industriesData
    .filter((i) => i.slug !== slug && industryMeta[i.slug]?.cluster === meta.cluster)
    .slice(0, 4)

  const goContact = () => {
    navigate('/')
    setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 200)
  }

  return (
    <main className="theme-ind idt">
      <header className="idt-hero" aria-labelledby="idt-title">
        <div className="idt-hero-inner">
          <div className="idt-hero-copy">
            <nav className="idt-crumbs" aria-label="Breadcrumb">
              <Link to="/industries">Industries</Link><span aria-hidden="true">/</span><span>{industry.name}</span>
            </nav>
            <span className="idt-icon" aria-hidden="true"><Icon /></span>
            <h1 id="idt-title" className="idt-title">{industry.name} software built around your requirements</h1>
            <p className="idt-lede">{extra.intro}</p>
            <ul className="idt-regs" aria-label="Standards we design for">
              {meta.regs.map((r) => <li key={r}>{r}</li>)}
            </ul>
            <div className="idt-actions">
              <button type="button" className="idt-btn idt-btn--solid" onClick={goContact}>Talk to us about {industry.name.toLowerCase()}</button>
              <a className="idt-btn" href="#build">See what we build</a>
            </div>
          </div>

          <figure className="idt-arch">
            <figcaption className="idt-arch-title">Reference architecture</figcaption>
            <ol className="idt-arch-flow">
              {meta.pipeline.map(([label, desc], i) => (
                <li key={label} style={{ animationDelay: `${i * 0.15}s` }}>
                  <span className="idt-arch-n" aria-hidden="true">{i + 1}</span>
                  <span><strong>{label}</strong><em>{desc}</em></span>
                </li>
              ))}
            </ol>
            <p className="idt-arch-note">Our starting point, adapted to the systems you already run.</p>
          </figure>
        </div>
        <ul className="idt-stats">
          {industry.stats.map((s) => (
            <li key={s.label}><b>{s.value}</b><span>{s.label}</span></li>
          ))}
        </ul>
      </header>

      <section className="idt-section" aria-labelledby="idt-needs">
        <div className="idt-wrap">
          <div className="idt-head">
            <h2 id="idt-needs">What {industry.name.toLowerCase()} teams need now</h2>
            <p>{meta.demand}</p>
          </div>
          <ul className="idt-needs">
            {extra.needs.map((n) => (
              <li key={n.t}><h3>{n.t}</h3><p>{n.d}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="build" className="idt-section idt-section--sunk" aria-labelledby="idt-build">
        <div className="idt-wrap">
          <div className="idt-head">
            <h2 id="idt-build">What we build</h2>
            <p>{industry.description}</p>
          </div>
          <ul className="idt-services">
            {industry.services.map((s) => {
              const SIcon = s.icon
              return (
                <li key={s.name}>
                  <span className="idt-svc-icon" aria-hidden="true"><SIcon /></span>
                  <span>{s.name}</span>
                </li>
              )
            })}
          </ul>
          <div className="idt-ai">
            <h3>Where AI helps</h3>
            <ul>
              {extra.ai.map((a) => <li key={a}>{a}</li>)}
            </ul>
            <Link to="/ai" className="idt-link">Explore our AI work</Link>
          </div>
        </div>
      </section>

      <section className="idt-section" aria-labelledby="idt-rules">
        <div className="idt-wrap idt-split">
          <div>
            <h2 id="idt-rules">Rules we design for</h2>
            <p className="idt-split-text">
              Compliance is a design input, not a final check. These are the requirements we plan for
              in discovery. Your legal team still decides what applies to you.
            </p>
          </div>
          <dl className="idt-rules">
            {extra.compliance.map((c) => (
              <div key={c.t}><dt>{c.t}</dt><dd>{c.d}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="idt-section idt-section--sunk" aria-labelledby="idt-how">
        <div className="idt-wrap idt-duo">
          <div>
            <h2 id="idt-how">How we work</h2>
            <ol className="idt-steps">
              {industry.process.map((s, i) => (
                <li key={s.title}>
                  <span className="idt-step-n" aria-hidden="true">{i + 1}</span>
                  <div><h3>{s.title}</h3><p>{s.description}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2>What to measure</h2>
            <p className="idt-split-text">We agree these before building, so progress is a number and not an opinion.</p>
            <ul className="idt-kpis">
              {extra.kpis.map((k) => <li key={k}>{k}</li>)}
            </ul>
            <h3 className="idt-sub">Common challenges</h3>
            <ul className="idt-plain">
              {industry.challenges.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {industry.caseStudies?.length > 0 && (
        <section className="idt-section" aria-labelledby="idt-ex">
          <div className="idt-wrap">
            <div className="idt-head">
              <h2 id="idt-ex">Example scenarios</h2>
              <p>Typical builds in this sector. They are examples of scope, not client results.</p>
            </div>
            <ul className="idt-cases">
              {industry.caseStudies.map((c) => (
                <li key={c.title}><h3>{c.title}</h3><p>{c.description}</p></li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="idt-section idt-section--sunk" aria-labelledby="idt-tech">
        <div className="idt-wrap">
          <div className="idt-head">
            <h2 id="idt-tech">Technology</h2>
            <p>Mainstream, well-supported tools that your own team can hire for and maintain.</p>
          </div>
          <ul className="idt-tech">
            {industry.technologies.map((t) => {
              const TIcon = getTechIcon(t)
              return <li key={t}><TIcon aria-hidden="true" />{t}</li>
            })}
          </ul>
        </div>
      </section>

      <section className="idt-section" aria-labelledby="idt-faq">
        <div className="idt-wrap idt-faq-wrap">
          <h2 id="idt-faq">Questions about {industry.name.toLowerCase()} projects</h2>
          <div className="idt-faq">
            {extra.faq.map((f, i) => (
              <div key={f.q} className={`idt-faq-item${openFaq === i ? ' is-open' : ''}`}>
                <h3>
                  <button type="button" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    {f.q}<span className="idt-faq-sign" aria-hidden="true" />
                  </button>
                </h3>
                <div className="idt-faq-a"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="idt-section idt-section--sunk" aria-labelledby="idt-related">
          <div className="idt-wrap">
            <h2 id="idt-related" className="idt-related-h">Related sectors</h2>
            <ul className="idt-related">
              {related.map((r) => {
                const RIcon = r.icon
                return (
                  <li key={r.slug}>
                    <Link to={`/industries/${r.slug}`}><RIcon aria-hidden="true" /><span>{r.name}</span></Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      )}

      <section className="idt-cta">
        <div className="idt-wrap idt-cta-inner">
          <div>
            <h2>Planning a {industry.name.toLowerCase()} product?</h2>
            <p>Tell us the goal and the rules you work under. We reply within one business day.</p>
          </div>
          <button type="button" className="idt-btn idt-btn--light" onClick={goContact}>Book a discovery call</button>
        </div>
      </section>
    </main>
  )
}

export default IndustryDetail
