import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundEffect from './components/BackgroundEffect'
import AnimatedBackground from './components/AnimatedBackground'
import './App.css'

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <BackgroundEffect />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
