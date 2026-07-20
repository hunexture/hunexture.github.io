import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechMarquee from './components/TechMarquee'
import ProcessSection from './components/ProcessSection'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundEffect from './components/BackgroundEffect'
import AnimatedBackground from './components/AnimatedBackground'
import ServiceDetail from './components/ServiceDetail'
import ProjectDetail from './components/ProjectDetail'
import IndustryDetail from './components/IndustryDetail'
import AIDetail from './components/AIDetail'
import AISolutionsPage from './components/AISolutionsPage'
import WebDevelopmentPage from './components/WebDevelopmentPage'
import ServicesList from './components/ServicesList'
import IndustriesList from './components/IndustriesList'
import AIList from './components/AIList'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import CookiePolicy from './components/CookiePolicy'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CookieBanner from './components/CookieBanner'
import WhatsAppFAB from './components/WhatsAppFAB'
import './App.css'

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <TechMarquee />
    <About />
    <ProcessSection />
    <Testimonials />
    <Services />
    <Portfolio />
    <FAQ />
    <Contact />
  </>
)

// Layout wrapper to conditionally show backgrounds
const Layout = ({ children }) => {
  const location = useLocation()
  const isDetailPage = location.pathname.startsWith('/services') ||
    location.pathname.startsWith('/portfolio') ||
    location.pathname.startsWith('/industries') ||
    location.pathname.startsWith('/ai') ||
    location.pathname.startsWith('/privacy-policy') ||
    location.pathname.startsWith('/terms-of-service') ||
    location.pathname.startsWith('/cookie-policy') ||
    location.pathname.startsWith('/blog')

  // Check if it's a blog post page (has slug) vs blog list page
  const pathParts = location.pathname.split('/').filter(Boolean)
  const isBlogPostPage = pathParts[0] === 'blog' && pathParts.length === 3 // /blog/category/slug

  const showNavbar = !isBlogPostPage
  const showFooter = !isBlogPostPage

  return (
    <div className="App">
      {!isDetailPage && <AnimatedBackground />}
      {!isDetailPage && <BackgroundEffect />}
      {showNavbar && <Navbar />}
      {children}
      {showFooter && <Footer />}
      <CookieBanner />
      {!isBlogPostPage && <WhatsAppFAB />}
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
            <Route path="/services" element={<ServicesList />} />
            <Route path="/services/ai-solutions" element={<AISolutionsPage />} />
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/app-development" element={<ServiceDetail serviceSlug="app-development" />} />
            <Route path="/services/cloud-integration" element={<ServiceDetail serviceSlug="cloud-integration" />} />
            <Route path="/services/uiux-design" element={<ServiceDetail serviceSlug="uiux-design" />} />
            <Route path="/services/digital-marketing" element={<ServiceDetail serviceSlug="digital-marketing" />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/portfolio/:slug" element={<ProjectDetail />} />
            <Route path="/industries" element={<IndustriesList />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/ai" element={<AIList />} />
            <Route path="/ai/:slug" element={<AIDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:category" element={<BlogList />} />
            <Route path="/blog/:category/:slug" element={<BlogPost />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
