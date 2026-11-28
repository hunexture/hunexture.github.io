// Citable company fact sheet. Everything here is derived from the site's data files
// (companyData, servicesData, aiData, industriesData); nothing is hand-invented.
// Used by FactsPage, by the prerender step (noscript, llms.txt, llms-full.txt) and by the Organization JSON-LD.
import {
  SITE_URL,
  companyStats,
  contactDetails,
  builtOnStack,
  trustPractices,
  securityStatement,
  engagementModels,
  homeFaqs,
} from './companyData'
import { servicesData } from './servicesData'
import { aiData } from './aiData'
import { industriesData } from './industriesData'

export const companySummary =
  'Hunexture is an Ahmedabad-based software company building custom AI & ML solutions, web and mobile apps, and cloud platforms for startups and enterprises worldwide.'

export const socialProfiles = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/hunexture/' },
  { name: 'X (Twitter)', url: 'https://x.com/hunexture' },
  { name: 'Instagram', url: 'https://www.instagram.com/hunexture' },
]

const faqByQuestion = (q) => homeFaqs.find((f) => f.question === q)

export const getFacts = () => ({
  name: 'Hunexture',
  url: SITE_URL,
  summary: companySummary,
  location: contactDetails.location,
  contact: {
    email: contactDetails.email,
    phone: contactDetails.phoneDisplay,
    phoneHref: contactDetails.phoneHref,
    whatsapp: `https://wa.me/${contactDetails.whatsappNumber}`,
  },
  social: socialProfiles,
  stats: companyStats.map((s) => ({ label: s.label, value: `${s.target}${s.suffix}` })),
  services: servicesData.map((s) => ({
    name: s.title,
    url: `${SITE_URL}/services/${s.slug}/`,
    path: `/services/${s.slug}`,
    description: s.shortDescription,
  })),
  ai: aiData.map((a) => ({
    name: a.name,
    url: `${SITE_URL}/ai/${a.slug}/`,
    path: `/ai/${a.slug}`,
    description: a.shortDescription,
  })),
  industries: industriesData.map((i) => ({
    name: i.name,
    url: `${SITE_URL}/industries/${i.slug}/`,
    path: `/industries/${i.slug}`,
    description: i.shortDescription,
  })),
  stack: builtOnStack,
  practices: trustPractices.map((p) => ({ title: p.title, description: p.description })),
  security: securityStatement,
  engagementModels: engagementModels.map((m) => ({ name: m.name, bestFor: m.bestFor, howItWorks: m.howItWorks, pricing: m.pricing })),
  start: [
    faqByQuestion('How do we get started with Hunexture?'),
    faqByQuestion('How long does a typical project take?'),
  ].filter(Boolean),
  faqs: homeFaqs,
})

// Organization JSON-LD built only from data-backed fields.
export const buildOrganizationLd = () => {
  const f = getFacts()
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${SITE_URL}/#organization`,
    name: f.name,
    url: SITE_URL,
    logo: `${SITE_URL}/android-chrome-512x512.png`,
    image: `${SITE_URL}/og-image.png`,
    description: f.summary,
    email: f.contact.email,
    telephone: contactDetails.phoneHref.replace('tel:', ''),
    address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', addressCountry: 'IN' },
    areaServed: 'Worldwide',
    knowsAbout: [...f.services.map((s) => s.name), ...f.ai.map((a) => a.name)],
    makesOffer: [...f.services, ...f.ai].map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, description: s.description, url: s.url },
    })),
    sameAs: f.social.map((s) => s.url),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: f.contact.email,
      telephone: contactDetails.phoneHref.replace('tel:', ''),
    },
  }
}
