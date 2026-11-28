import React from 'react'
import './TechMarquee.css'

// Technologies listed on the service and AI pages, as an endless strip.
const tools = [
  ['OpenAI', 'openai'], ['Anthropic', 'anthropic'], ['Gemini', 'gemini'], ['Llama', 'llama'],
  ['Mistral', 'mistral'], ['TensorFlow', 'tensorflow'], ['OpenCV', 'opencv'], ['AWS', 'aws'],
  ['Google Cloud', 'gcp'], ['Azure', 'azure'], ['Docker', 'docker'], ['Kubernetes', 'kubernetes'],
  ['Terraform', 'terraform'], ['Node.js', 'nodedotjs'], ['React Native', 'reactnative'],
  ['MongoDB', 'mongodb'], ['Firebase', 'firebase'], ['Figma', 'figma'], ['n8n', 'n8n']
]

const Row = ({ copy }) => (
  <ul className="tm-row" aria-hidden={copy || undefined}>
    {tools.map(([name, icon]) => (
      <li key={name} className="tm-item">
        <img src={`${process.env.PUBLIC_URL}/images/tech-icons/${icon}.svg`} alt="" width="24" height="24" loading="lazy" />
        {name}
      </li>
    ))}
  </ul>
)

const TechMarquee = () => (
  <section className="tm" aria-label="Technologies we work with">
    <div className="tm-track">
      <Row />
      {/* second copy makes the loop seamless */}
      <Row copy />
    </div>
  </section>
)

export default TechMarquee
