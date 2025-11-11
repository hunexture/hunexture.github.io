import React from 'react'
import { FaLightbulb, FaUsers, FaRocket, FaChartLine } from 'react-icons/fa'
import './About.css'

const About = () => {
  const features = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends, bringing cutting-edge solutions to every project.'
    },
    {
      icon: <FaUsers />,
      title: 'Human-Centered',
      description: 'Technology serves people. We design experiences that put humans at the center.'
    },
    {
      icon: <FaRocket />,
      title: 'Rapid Delivery',
      description: 'Agile methodologies ensure we deliver quality solutions quickly and efficiently.'
    },
    {
      icon: <FaChartLine />,
      title: 'Scalable Growth',
      description: 'Our solutions grow with your business, built for today and tomorrow.'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">About Hunexture</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              <span className="highlight">Hunexture</span> stands at the intersection of
              <span className="highlight"> human innovation</span> and
              <span className="highlight"> future technology</span>.
            </p>

            <p className="about-description">
              Founded on the belief that technology should enhance human potential, we've built
              a reputation for delivering intelligent, scalable solutions that drive real business value.
              Our team of experts combines deep technical expertise with creative problem-solving to
              tackle the most challenging projects.
            </p>

            <p className="about-description">
              From AI-powered applications to cloud-native architectures, we transform complex
              challenges into elegant solutions. We don't just write code—we craft experiences
              that empower businesses to thrive in the digital age.
            </p>

            <div className="about-vision">
              <div className="vision-item">
                <h4>Our Mission</h4>
                <p>
                  Empower businesses with intelligent technology solutions that drive innovation,
                  efficiency, and growth in an ever-evolving digital landscape.
                </p>
              </div>
              <div className="vision-item">
                <h4>Our Vision</h4>
                <p>
                  To be the leading force in human-centered technology, shaping a future where
                  AI and innovation work seamlessly to enhance every aspect of business and life.
                </p>
              </div>
            </div>
          </div>

          <div className="about-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
