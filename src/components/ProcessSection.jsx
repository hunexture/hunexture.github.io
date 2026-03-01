import React, { useEffect, useRef } from 'react'
import { FaBullseye, FaPaintBrush, FaCode, FaRocket } from 'react-icons/fa'
import './ProcessSection.css'

const steps = [
  {
    icon: FaBullseye,
    color: '#3b82f6',
    title: 'Discover',
    description:
      'We deep-dive into your business goals, user needs, and technical landscape to define a clear product vision and roadmap.',
  },
  {
    icon: FaPaintBrush,
    color: '#f97316',
    title: 'Design',
    description:
      'Our designers craft intuitive UI/UX and scalable system architecture — balancing aesthetics with real-world performance.',
  },
  {
    icon: FaCode,
    color: '#10b981',
    title: 'Build',
    description:
      'Using modern AI-first tech stacks and agile sprints, we engineer your product with efficiency, quality, and speed.',
  },
  {
    icon: FaRocket,
    color: '#06b6d4',
    title: 'Deliver',
    description:
      'We deploy, monitor, and iterate continuously — ensuring your product scales reliably and keeps improving over time.',
  },
]

const ProcessSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    const els = sectionRef.current
      ? sectionRef.current.querySelectorAll('.ps-animate')
      : []
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="process-section" ref={sectionRef} style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <div className="process-container" style={{ margin: '0 auto', padding: '0 20px' }}>

        {/* Section header — no entry animation so it never hides itself */}
        <div className="section-header" style={{ marginBottom: '20px' }}>
          <span className="section-tag">How We Work</span>
          <h2 className="section-title" style={{ marginBottom: '10px' }}>We Simplify the AI Development Process</h2>

          <p className="section-description" style={{ marginTop: '5px', marginBottom: '20px' }}>
            From first conversation to live product — a clear, collaborative process
            that keeps you informed and in control at every stage.
          </p>
        </div>

        {/* Steps row */}
        <div className="process-steps">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === steps.length - 1
            return (
              <div
                key={index}
                className="process-step ps-animate"
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div className="process-step-top">
                  <div
                    className="process-icon-box"
                    style={{ color: step.color, borderColor: step.color }}
                  >
                    <span
                      className="process-step-num"
                      style={{ background: step.color }}
                    >
                      {index + 1}
                    </span>
                    <Icon />
                  </div>

                  {!isLast && (
                    <div
                      className="process-connector"
                      style={{ borderColor: step.color }}
                    />
                  )}
                </div>

                {/* ② Title + description stacked below */}
                <h3
                  className="process-step-title"
                  style={{ color: step.color }}
                >
                  {step.title}
                </h3>
                <p className="process-step-desc">{step.description}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ProcessSection
