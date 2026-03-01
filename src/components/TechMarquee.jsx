import React from 'react'
import {
  SiReact, SiNodedotjs, SiPython, SiAmazonwebservices, SiDocker,
  SiMongodb, SiFigma, SiTypescript, SiGooglecloud, SiFlutter,
  SiKubernetes, SiTensorflow, SiNextdotjs, SiFirebase, SiPostgresql
} from 'react-icons/si'
import './TechMarquee.css'

const techItems = [
  { icon: SiReact,        name: 'React',        color: '#61DAFB' },
  { icon: SiNodedotjs,    name: 'Node.js',       color: '#6CC24A' },
  { icon: SiPython,       name: 'Python',        color: '#4B8BBE' },
  { icon: SiAmazonwebservices, name: 'AWS',      color: '#FF9900' },
  { icon: SiDocker,       name: 'Docker',        color: '#2496ED' },
  { icon: SiTensorflow,   name: 'TensorFlow',    color: '#FF8000' },
  { icon: SiMongodb,      name: 'MongoDB',       color: '#4DB33D' },
  { icon: SiFigma,        name: 'Figma',         color: '#F24E1E' },
  { icon: SiKubernetes,   name: 'Kubernetes',    color: '#326CE5' },
  { icon: SiGooglecloud,  name: 'Google Cloud',  color: '#4285F4' },
  { icon: SiFlutter,      name: 'Flutter',       color: '#54C5F8' },
  { icon: SiTypescript,   name: 'TypeScript',    color: '#3178C6' },
  { icon: SiNextdotjs,    name: 'Next.js',       color: '#e2e2e2' },
  { icon: SiFirebase,     name: 'Firebase',      color: '#FFCA28' },
  { icon: SiPostgresql,   name: 'PostgreSQL',    color: '#6E9FCF' },
]

const TechMarquee = () => {
  // Duplicate for seamless infinite loop
  const doubled = [...techItems, ...techItems]

  return (
    <section className="tech-marquee">
      <p className="tech-marquee-label">Technologies We Work With</p>

      <div className="tech-marquee-viewport">
        {/* Left fade mask */}
        <div className="tech-marquee-fade tech-marquee-fade--left" />

        <div className="tech-marquee-track">
          {doubled.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="tech-marquee-item">
                <Icon className="tech-marquee-icon" style={{ color: item.color }} />
                <span className="tech-marquee-name">{item.name}</span>
              </div>
            )
          })}
        </div>

        {/* Right fade mask */}
        <div className="tech-marquee-fade tech-marquee-fade--right" />
      </div>
    </section>
  )
}

export default TechMarquee
