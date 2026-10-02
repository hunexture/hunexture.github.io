import React, { useEffect, useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { illustrativeOutcomes } from '../data/companyData'
import Carousel from './Carousel'
import './Testimonials.css'

// Framed honestly as example scenarios, not attributed client quotes.
// Swap illustrativeOutcomes for real, permissioned testimonials when available.
const OutcomeCard = ({ item, className = '' }) => (
  <article className={`testimonial-card glass-panel ${className}`.trim()}>
    <span className="outcome-label">Illustrative example</span>
    <h3 className="outcome-scenario">{item.scenario}</h3>
    <dl className="outcome-details">
      <dt>Challenge</dt>
      <dd>{item.challenge}</dd>
      <dt>Approach</dt>
      <dd>{item.approach}</dd>
    </dl>
    <p className="outcome-result">{item.outcome}</p>
  </article>
)

const Testimonials = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="testimonials-container">
        <div className={`section-header${visible ? ' animate-in' : ''}`}>
          <span className="section-tag">Example Engagements</span>
          <h2 className="section-title">Illustrative Outcomes</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Representative scenarios showing how we approach a problem and the outcomes we
            design for. These are examples, not client testimonials — published case studies
            are on the way.
          </p>
        </div>

        {/* Desktop: auto-scrolling strip with pause control (pauses on hover/focus too) */}
        <div className={`testimonials-marquee${paused ? ' is-paused' : ''}`}>
          <div className="testimonials-marquee-outer" role="region" aria-label="Illustrative outcomes">
            <div className="testimonials-marquee-track">
              {illustrativeOutcomes.map((item, i) => (
                <OutcomeCard key={i} item={item} className="testimonial-marquee-card" />
              ))}
              {/* Duplicate set for a seamless loop — hidden from assistive tech */}
              <div className="testimonials-marquee-clone" aria-hidden="true">
                {illustrativeOutcomes.map((item, i) => (
                  <OutcomeCard key={i} item={item} className="testimonial-marquee-card" />
                ))}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="marquee-toggle"
            onClick={() => setPaused(p => !p)}
            aria-pressed={paused}
          >
            {paused ? <FaPlay aria-hidden="true" /> : <FaPause aria-hidden="true" />}
            {paused ? 'Play' : 'Pause'}
          </button>
        </div>

        {/* Mobile: shared accessible carousel */}
        <div className="testimonials-carousel">
          <Carousel label="Illustrative outcomes" slideWidth="85%" gap="16px">
            {illustrativeOutcomes.map((item, i) => (
              <OutcomeCard key={i} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
