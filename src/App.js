import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundEffect from './components/BackgroundEffect'
import AnimatedBackground from './components/AnimatedBackground'
import ServiceDetail from './components/ServiceDetail'
import ProjectDetail from './components/ProjectDetail'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import CookiePolicy from './components/CookiePolicy'
import './App.css'

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Contact />
  </>
)

// Layout wrapper to conditionally show backgrounds
const Layout = ({ children }) => {
  const location = useLocation()
  const isDetailPage = location.pathname.startsWith('/services/') ||
                       location.pathname.startsWith('/portfolio/') ||
                       location.pathname.startsWith('/privacy-policy') ||
                       location.pathname.startsWith('/terms-of-service') ||
                       location.pathname.startsWith('/cookie-policy')

  return (
    <div className="App">
      {!isDetailPage && <AnimatedBackground />}
      {!isDetailPage && <BackgroundEffect />}
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/portfolio/:slug" element={<ProjectDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
