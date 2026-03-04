import React, { useEffect, useRef, useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    initials: 'RK',
    name: 'Rahul Kumar',
    designation: 'CTO',
    company: 'FinTech Startup',
    quote: 'Hunexture transformed our data pipeline with a custom ML solution that reduced processing time by 70%. Their team delivered on time, every sprint.',
    rating: 5
  },
  {
    initials: 'PS',
    name: 'Priya Shah',
    designation: 'Product Manager',
    company: 'E-Commerce Platform',
    quote: 'Working with Hunexture felt like having an in-house AI team. They understood our business goals and built exactly what we needed — no over-engineering.',
    rating: 5
  },
  {
    initials: 'AM',
    name: 'Aditya Mehta',
    designation: 'Founder & CEO',
    company: 'HealthTech SaaS',
    quote: "From MVP to production-ready in 8 weeks. Hunexture's cloud-native architecture scaled seamlessly as we grew from 100 to 10,000 users.",
    rating: 5
  }
]

const Stars = ({ count }) => (
  <div className="testimonial-stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
)

const Testimonials = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)

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

  // Auto-carousel on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="testimonials-container">
        <div className={`section-header${visible ? ' animate-in' : ''}`}>
          <span className="section-tag">Client Stories</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Real results from real partnerships — here's how we've helped businesses grow.
          </p>
        </div>

        {/* Desktop: 3-column grid */}
        <div className={`testimonials-grid${visible ? ' animate-in' : ''}`}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <Stars count={t.rating} />
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-info">
                  <strong>{t.name}</strong>
                  <span>{t.designation}, {t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="testimonials-carousel">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card testimonial-slide">
                <Stars count={t.rating} />
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div className="testimonial-info">
                    <strong>{t.name}</strong>
                    <span>{t.designation}, {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot${current === i ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
