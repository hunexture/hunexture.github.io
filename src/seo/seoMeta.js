// Single source of truth for per-route SEO metadata.
// Used at runtime (RouteSeo) and at build time (scripts/prerender.js) so the
// static HTML that crawlers fetch matches what the app renders.
import { SITE_URL, homeFaqs } from '../data/companyData'
import { servicesData } from '../data/servicesData'
import { aiData } from '../data/aiData'
import { industriesData } from '../data/industriesData'
import { portfolioData } from '../data/portfolioData'

export const BRAND = 'Hunexture'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

const clip = (text, max = 158) => {
  const t = String(text || '').replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  const cut = t.slice(0, max - 1)
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.-]+$/, '') + '…'
}

const staticPages = {
  '/': {
    title: 'Hunexture | AI-Powered Software, Web & App Development Company',
    description: 'Hunexture is an Ahmedabad-based software company building custom AI & ML solutions, web and mobile apps, and cloud platforms for startups and enterprises worldwide.',
    h1: 'AI-powered software, web and app development',
    faqs: homeFaqs,
  },
  '/services': {
    title: 'Software Development Services | AI, Web, Mobile, Cloud | Hunexture',
    description: 'Explore Hunexture services: AI solutions, web development, mobile app development, cloud integration, UI/UX design and digital marketing.',
    h1: 'What we build',
  },
  '/portfolio': {
    title: 'Portfolio & Case Studies | Hunexture',
    description: 'Selected AI, web, mobile and cloud projects delivered by Hunexture, with the problem, solution, tech stack and results for each.',
    h1: 'Our work',
  },
  '/industries': {
    title: 'Industries We Serve | Healthcare, Finance, Retail & More | Hunexture',
    description: 'Hunexture builds software for healthcare, finance, retail, logistics, education, legal, manufacturing and more. See how we solve industry-specific problems.',
    h1: 'Industries we serve',
  },
  '/ai': {
    title: 'AI & Machine Learning Development Services | Hunexture',
    description: 'Custom AI, machine learning, NLP, computer vision, generative AI and AI agent development. Production-ready AI solutions from Hunexture.',
    h1: 'AI and machine learning',
  },
  '/business-profile': {
    title: 'Business Profile | Hunexture',
    description: 'Company profile of Hunexture: who we are, what we do, how we work and how to contact us in Ahmedabad, Gujarat, India.',
    h1: 'Business profile',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Hunexture',
    description: 'How Hunexture collects, uses and protects your personal information.',
    h1: 'Privacy policy',
  },
  '/terms-of-service': {
    title: 'Terms of Service | Hunexture',
    description: 'The terms that govern use of the Hunexture website and services.',
    h1: 'Terms of service',
  },
  '/cookie-policy': {
    title: 'Cookie Policy | Hunexture',
    description: 'How Hunexture uses cookies and how you can control them.',
    h1: 'Cookie policy',
  },
}

const txt = (x) => (typeof x === 'string' ? x : x ? [x.title || x.name || x.label, x.description].filter(Boolean).join(': ') : '')
const section = (heading, items) => {
  const list = (items || []).map(txt).filter(Boolean)
  return list.length ? { heading, items: list } : null
}
const compact = (arr) => arr.filter(Boolean)

const dynamicPages = () => {
  const pages = {}
  servicesData.forEach((s) => {
    pages[`/services/${s.slug}`] = {
      title: `${s.title}${/(Solutions|Services)$/.test(s.title) ? "" : " Services"} | ${BRAND}`,
      description: clip(s.description),
      h1: s.title,
      body: compact([section('Key features', s.features), section('Benefits', s.benefits), section('How we work', s.process)]),
      parent: { name: 'Services', path: '/services' },
      type: 'Service',
    }
  })
  aiData.forEach((a) => {
    pages[`/ai/${a.slug}`] = {
      title: `${a.name} | AI & ML Development | ${BRAND}`,
      description: clip(a.description || a.shortDescription),
      h1: a.name,
      body: compact([section('What we offer', a.whatWeOffer)]),
      parent: { name: 'AI & ML', path: '/ai' },
      type: 'Service',
    }
  })
  industriesData.forEach((i) => {
    pages[`/industries/${i.slug}`] = {
      title: `${i.name} Software Development | ${BRAND}`,
      description: clip(i.description || i.shortDescription),
      h1: `${i.name} software solutions`,
      body: compact([section('Services', i.services), section('Benefits', i.benefits), section('Common challenges we solve', i.challenges), section('Why choose Hunexture', i.whyChooseUs), section('How we work', i.process)]),
      faqs: i.faq,
      parent: { name: 'Industries', path: '/industries' },
      type: 'Service',
    }
  })
  portfolioData.forEach((p) => {
    pages[`/portfolio/${p.slug}`] = {
      title: `${p.title} | Case Study | ${BRAND}`,
      description: clip(p.shortDescription || p.description),
      h1: p.title,
      body: compact([{ heading: 'Challenge', items: [p.challenge].filter(Boolean) }, { heading: 'Solution', items: [p.solution].filter(Boolean) }, section('Features', p.features), section('Results', (p.results || []).map((r) => `${r.metric} ${r.label}`))]),
      parent: { name: 'Portfolio', path: '/portfolio' },
      type: 'Article',
    }
  })
  return pages
}

let cache
export const getAllSeoPages = () => {
  if (!cache) cache = { ...staticPages, ...dynamicPages() }
  return cache
}

const normalise = (pathname) => {
  const p = (pathname || '/').replace(/\/+$/, '')
  return p === '' ? '/' : p
}

export const getSeoForPath = (pathname) => {
  const path = normalise(pathname)
  const page = getAllSeoPages()[path]
  if (!page) return null
  // GitHub Pages serves each route as <route>/index.html and 301s to the trailing-slash URL,
  // so the trailing-slash form is the canonical one.
  const url = `${SITE_URL}${path === '/' ? '/' : path + '/'}`
  return { ...page, path, url, image: DEFAULT_OG_IMAGE }
}

export const buildJsonLd = (seo) => {
  const graph = []
  if (seo.path === '/') {
    graph.push({
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: BRAND,
    })
  } else {
    const crumbs = [{ name: 'Home', url: `${SITE_URL}/` }]
    if (seo.parent) crumbs.push({ name: seo.parent.name, url: `${SITE_URL}${seo.parent.path}/` })
    crumbs.push({ name: seo.h1, url: seo.url })
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((c, idx) => ({ '@type': 'ListItem', position: idx + 1, name: c.name, item: c.url })),
    })
    if (seo.type === 'Service') {
      graph.push({
        '@type': 'Service',
        name: seo.h1,
        description: seo.description,
        url: seo.url,
        provider: { '@type': 'Organization', name: BRAND, url: SITE_URL },
        areaServed: 'Worldwide',
      })
    } else if (seo.type === 'Article') {
      graph.push({
        '@type': 'Article',
        headline: seo.h1,
        description: seo.description,
        mainEntityOfPage: seo.url,
        image: seo.image,
        author: { '@type': 'Organization', name: BRAND, url: SITE_URL },
        publisher: { '@type': 'Organization', name: BRAND, url: SITE_URL },
      })
    }
  }
  if (seo.faqs && seo.faqs.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: seo.faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}
