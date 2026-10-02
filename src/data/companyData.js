// Single source of truth for company-level facts shown across the site.
// Anything shown to buyers as a fact (stats, contact, practices) must come from here
// so numbers never drift between Hero, About, Navbar and detail pages.

export const SITE_URL = 'https://hunexture.com'

// Verified company stats. Do not add a number here unless it is true today.
export const companyStats = [
  { key: 'years',      target: 5,  suffix: '+', label: 'Years of Innovation' },
  { key: 'engineers',  target: 20, suffix: '+', label: 'Expert Engineers' },
  { key: 'industries', target: 10, suffix: '+', label: 'Industries Served' },
  { key: 'clients',    target: 30, suffix: '+', label: 'Happy Clients' }
]

export const formatStat = (stat) => `${stat.target}${stat.suffix}`
export const getStat = (key) => companyStats.find(s => s.key === key)

export const contactDetails = {
  email: 'info@hunexture.com',
  phoneDisplay: '+91 90672 62552',
  phoneHref: 'tel:+919067262552',
  whatsappNumber: '919067262552',
  location: 'Ahmedabad, Gujarat, India'
}

// Technologies we build on. These are tools, NOT certifications or partnerships.
export const builtOnStack = ['AWS', 'Google Cloud', 'React', 'Python', 'OpenAI']

// "Working with us" trust layer. Each item is a practice we commit to in contracts.
// TODO: confirm every item below with the founders before launch — these are promises to buyers.
export const trustPractices = [
  {
    key: 'nda',
    title: 'NDA before discovery',
    description: 'We sign a mutual NDA before any technical discussion. Your idea, data and roadmap stay confidential from the first call.'
  },
  {
    key: 'ip',
    title: 'You own the code',
    description: 'Source code, designs and IP transfer to you as milestones are paid. Work lives in repositories you control, not ours.'
  },
  {
    key: 'access',
    title: 'Least-privilege access',
    description: 'Engineers get only the access a task needs. Credentials live in a secrets manager, never in chat or source code, and are revoked at handover.'
  },
  {
    key: 'cadence',
    title: 'Demo every two weeks',
    description: 'Agile sprints with a working demo every two weeks, a shared board, and a single point of contact who answers within one business day.'
  }
]

export const securityStatement =
  'We follow secure-by-default engineering: encrypted data in transit and at rest, environment separation between development and production, peer-reviewed pull requests, dependency scanning in CI, and documented handover. We do not use client data to train models outside your project. Where your industry requires it (HIPAA, GDPR, PCI DSS), we design to those requirements and work alongside your compliance team — we do not claim certifications we do not hold.'

export const engagementModels = [
  {
    key: 'fixed',
    name: 'Fixed scope',
    bestFor: 'Well-defined MVPs and projects with a clear spec',
    howItWorks: 'We agree scope, timeline and price up front, then deliver in milestones. Changes go through a lightweight change request.',
    pricing: 'Fixed price per milestone'
  },
  {
    key: 'dedicated',
    name: 'Dedicated team',
    bestFor: 'Ongoing product development and evolving roadmaps',
    howItWorks: 'A team of engineers, design and QA works only on your product, embedded in your tools and rituals. Scale up or down monthly.',
    pricing: 'Monthly rate per team member'
  },
  {
    key: 'hourly',
    name: 'Time & materials',
    bestFor: 'Discovery, audits, prototypes and short engagements',
    howItWorks: 'Pay for the hours worked, tracked transparently with weekly reports. Ideal when scope is still being discovered.',
    pricing: 'Hourly rate, billed monthly'
  }
]

// Illustrative outcomes: example scenarios showing the kind of results we design for.
// These are NOT client quotes. Replace with real, permissioned testimonials when available.
// TODO: replace with real testimonials (name, role, company, permission on file).
export const illustrativeOutcomes = [
  {
    scenario: 'FinTech data pipeline',
    challenge: 'Nightly batch jobs took hours and delayed risk reports.',
    approach: 'Streaming ingestion plus an ML anomaly model on managed cloud services.',
    outcome: 'Target: reports available in minutes, not hours.'
  },
  {
    scenario: 'E-commerce product team',
    challenge: 'No in-house AI skills, but a clear need for personalised recommendations.',
    approach: 'A dedicated team embedded in their sprints, shipping a recommendation service behind a feature flag.',
    outcome: 'Target: measurable lift in average order value, validated by A/B test.'
  },
  {
    scenario: 'HealthTech SaaS MVP',
    challenge: 'Needed a compliant MVP in front of pilot clinics quickly.',
    approach: 'Fixed-scope MVP on a HIPAA-ready architecture, delivered in two-week milestones.',
    outcome: 'Target: pilot-ready MVP in 6–10 weeks.'
  },
  {
    scenario: 'Logistics customer portal',
    challenge: 'Customers phoned support to track shipments.',
    approach: 'Self-serve React portal with live tracking and notifications on cloud-native infrastructure.',
    outcome: 'Target: fewer "where is my order" support calls.'
  },
  {
    scenario: 'EdTech learning platform',
    challenge: 'One-size-fits-all content led to drop-off.',
    approach: 'LLM-assisted content personalisation with teacher review in the loop.',
    outcome: 'Target: higher course completion, tracked per cohort.'
  }
]
