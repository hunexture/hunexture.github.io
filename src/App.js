import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import WorkingWithUs from './components/WorkingWithUs'
import EngagementModels from './components/EngagementModels'
import CookieBanner from './components/CookieBanner'
import WhatsAppFAB from './components/WhatsAppFAB'
import RouteSeo from './components/RouteSeo'
import RouteEffects from './components/RouteEffects'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import ErrorBoundary from './components/ErrorBoundary'
import TechMarquee from './components/TechMarquee'
import NotFound from './components/NotFound'
import lazy from './utils/lazyWithRetry'
import './components/brand.css'
import './App.css'
import './components/HomeMotion.css'

// Route-level code splitting (home, navbar, footer stay eager)
const ServiceDetail = lazy(() => import('./components/ServiceDetail'))
const ProjectDetail = lazy(() => import('./components/ProjectDetail'))
const IndustryDetail = lazy(() => import('./components/IndustryDetail'))
const AIDetail = lazy(() => import('./components/AIDetail'))
const AISolutionsPage = lazy(() => import('./components/AISolutionsPage'))
const WebDevelopmentPage = lazy(() => import('./components/WebDevelopmentPage'))
const ServicesList = lazy(() => import('./components/ServicesList'))
const IndustriesList = lazy(() => import('./components/IndustriesList'))
const AIList = lazy(() => import('./components/AIList'))
const InsightsList = lazy(() => import('./components/InsightsList'))
const InsightPost = lazy(() => import('./components/InsightPost'))
const FactsPage = lazy(() => import('./components/FactsPage'))
const BusinessProfile = lazy(() => import('./components/BusinessProfile'))
const PortfolioPage = lazy(() => import('./components/PortfolioPage'))
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./components/TermsOfService'))
const CookiePolicy = lazy(() => import('./components/CookiePolicy'))

const RouteFallback = () => <div className="route-loading" aria-busy="true" aria-label="Loading page" />

// Home page component
const HomePage = () => (
  <main id="main" className="home">
    <Hero />
    <TechMarquee />
    <About />
    <Services />
    <WorkingWithUs />
    <Portfolio />
    <Testimonials />
    <EngagementModels />
    <FAQ />
    <Contact />
  </main>
)

// Layout wrapper: shared chrome for every route
const Layout = ({ children }) => {
  const location = useLocation()


  return (
    <div className="App">
      <RouteSeo />
      <RouteEffects />
      <ScrollProgress />
      <Navbar />
      <div key={location.pathname} className="page-enter">
        <ErrorBoundary>{children}</ErrorBoundary>
      </div>
      <Footer />
      <CookieBanner />
      <BackToTop />
      <WhatsAppFAB />
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <Layout>
            <Suspense fallback={<RouteFallback />}>
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
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/:slug" element={<ProjectDetail />} />
              <Route path="/industries" element={<IndustriesList />} />
              <Route path="/industries/:slug" element={<IndustryDetail />} />
              <Route path="/ai" element={<AIList />} />
              <Route path="/ai/:slug" element={<AIDetail />} />
              <Route path="/about/facts" element={<FactsPage />} />
              <Route path="/business-profile" element={<BusinessProfile />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/insights" element={<InsightsList />} />
              <Route path="/insights/:slug" element={<InsightPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </Layout>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
