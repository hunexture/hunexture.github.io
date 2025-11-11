import React from 'react'
import { FaBrain, FaCode, FaMobile, FaCloud, FaPaintBrush, FaArrowRight } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <FaBrain />,
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence with custom machine learning models, natural language processing, and intelligent automation systems.',
      features: ['Machine Learning', 'Neural Networks', 'Predictive Analytics', 'Computer Vision']
    },
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Build stunning, high-performance web applications with modern frameworks and cutting-edge technologies that scale with your business.',
      features: ['React/Vue/Angular', 'Full-Stack Development', 'Progressive Web Apps', 'API Integration']
    },
    {
      icon: <FaMobile />,
      title: 'App Development',
      description: 'Create powerful mobile experiences with native and cross-platform applications that deliver seamless performance across all devices.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'Native Performance']
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Integration',
      description: 'Transform your infrastructure with cloud-native solutions, ensuring scalability, reliability, and cost-efficiency for your applications.',
      features: ['AWS/Azure/GCP', 'Microservices', 'DevOps & CI/CD', 'Serverless Architecture']
    },
    {
      icon: <FaPaintBrush />,
      title: 'UI/UX Design',
      description: 'Craft beautiful, intuitive user experiences with human-centered design principles that engage users and drive conversions.',
      features: ['User Research', 'Prototyping', 'Design Systems', 'Usability Testing']
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
              </div>

              <p className="service-description">{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaArrowRight className="feature-bullet" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="service-cta">
                Learn More
                <FaArrowRight className="cta-icon" />
              </button>

              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
