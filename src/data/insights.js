// Market-facing content for the AI, Industries and Portfolio index pages.
// Kept separate from the per-page data so copy can be updated without touching components.

export const industryClusters = [
  { id: 'all', label: 'All sectors' },
  { id: 'regulated', label: 'Regulated' },
  { id: 'commerce', label: 'Commerce' },
  { id: 'media', label: 'Media and community' },
  { id: 'operations', label: 'Operations' },
]

// What buyers in each sector are asking for now, what rules apply, and the reference architecture we start from.
export const industryMeta = {
  healthcare: {
    cluster: 'regulated',
    regs: ['HIPAA', 'HL7 FHIR R4', 'DPDP Act'],
    demand: 'Remote care, FHIR-based data exchange and AI note-taking for clinicians.',
    pipeline: [
      ['Patient app', 'Booking, video visits, records'],
      ['FHIR gateway', 'Reads and writes EHR data'],
      ['Consent and audit', 'Who saw what, and why'],
      ['Clinical store', 'Encrypted, geo-redundant'],
    ],
  },
  legal: {
    cluster: 'regulated',
    regs: ['Attorney-client privilege', 'GDPR', 'SOC 2'],
    demand: 'Contract review with AI, matter management and e-discovery search.',
    pipeline: [
      ['Matter portal', 'Clients and attorneys'],
      ['Document AI', 'Clause and risk extraction'],
      ['Audit trail', 'Tamper-evident logs'],
      ['Secure vault', 'Per-matter encryption'],
    ],
  },
  finance: {
    cluster: 'regulated',
    regs: ['PCI DSS', 'RBI guidelines', 'PSD2 / Open Banking'],
    demand: 'Real-time payments, fraud scoring and embedded finance APIs.',
    pipeline: [
      ['Customer app', 'Biometric sign-in'],
      ['Payments API', 'Tokenised cards and UPI'],
      ['Risk engine', 'Fraud scoring in milliseconds'],
      ['Ledger', 'Double-entry, auditable'],
    ],
  },
  insurance: {
    cluster: 'regulated',
    regs: ['IRDAI', 'Solvency reporting', 'GDPR'],
    demand: 'Straight-through claims, usage-based pricing and document intake with AI.',
    pipeline: [
      ['Policy portal', 'Quote, buy, claim'],
      ['Claims intake AI', 'Reads forms and photos'],
      ['Rules and pricing', 'Underwriting decisions'],
      ['Policy core', 'Records and payouts'],
    ],
  },
  retail: {
    cluster: 'commerce',
    regs: ['PCI DSS', 'Consumer protection', 'GST e-invoicing'],
    demand: 'Unified stores and online inventory, personalisation and quick commerce.',
    pipeline: [
      ['Storefront', 'Web, app, in-store'],
      ['Order service', 'One order across channels'],
      ['Inventory sync', 'Stock by location'],
      ['Customer data', 'Preferences and history'],
    ],
  },
  ecommerce: {
    cluster: 'commerce',
    regs: ['PCI DSS', 'GDPR / DPDP', 'Core Web Vitals'],
    demand: 'Headless storefronts, AI search and one-tap checkout.',
    pipeline: [
      ['Edge storefront', 'Server-rendered, fast'],
      ['Catalog and search', 'Typo-tolerant, ranked'],
      ['Checkout', 'Wallets and local methods'],
      ['Order pipeline', 'Queues and fulfilment'],
    ],
  },
  marketplace: {
    cluster: 'commerce',
    regs: ['KYC for sellers', 'Payment splitting rules', 'Trust and safety'],
    demand: 'Seller onboarding, split payouts and AI-assisted fraud and moderation.',
    pipeline: [
      ['Buyer and seller apps', 'Two sides, one system'],
      ['Matching and search', 'Relevance by supply'],
      ['Escrow payments', 'Hold, split, pay out'],
      ['Trust layer', 'Reviews and moderation'],
    ],
  },
  'on-demand': {
    cluster: 'commerce',
    regs: ['Gig-worker rules', 'Location privacy', 'Payments compliance'],
    demand: 'Live tracking, dynamic dispatch and surge pricing that users accept.',
    pipeline: [
      ['Customer app', 'Request and track'],
      ['Dispatch engine', 'Match by distance and load'],
      ['Live location', 'Updates every few seconds'],
      ['Pricing and payouts', 'Rules and settlement'],
    ],
  },
  'beauty-lifestyle': {
    cluster: 'commerce',
    regs: ['Payments compliance', 'Health data privacy', 'Consumer protection'],
    demand: 'Booking with deposits, memberships and personalised recommendations.',
    pipeline: [
      ['Booking app', 'Services and staff'],
      ['Calendar engine', 'No double booking'],
      ['Memberships', 'Plans and loyalty'],
      ['Customer profile', 'History and preferences'],
    ],
  },
  travel: {
    cluster: 'commerce',
    regs: ['PCI DSS', 'IATA / GDS rules', 'GDPR'],
    demand: 'Dynamic packaging, AI trip planning and flexible rebooking.',
    pipeline: [
      ['Trip planner', 'Search and compare'],
      ['Supplier APIs', 'GDS, hotels, activities'],
      ['Booking engine', 'Hold and confirm'],
      ['Itinerary store', 'Changes and alerts'],
    ],
  },
  'media-ott': {
    cluster: 'media',
    regs: ['DRM and licensing', 'Content ratings', 'Regional data rules'],
    demand: 'Low-latency live streams, personalised feeds and ad-supported tiers.',
    pipeline: [
      ['Player apps', 'TV, mobile, web'],
      ['Transcoding', 'Adaptive bitrate HLS and DASH'],
      ['Edge CDN', 'Cached near viewers'],
      ['Media store', 'Multi-region vault'],
    ],
  },
  'social-media': {
    cluster: 'media',
    regs: ['Content moderation duties', 'Child safety', 'GDPR / DPDP'],
    demand: 'Creator tools, AI moderation and feeds that explain why you see a post.',
    pipeline: [
      ['Client apps', 'Posting and feeds'],
      ['Feed ranking', 'Signals and freshness'],
      ['Moderation', 'AI plus human review'],
      ['Graph and media', 'Follows, uploads, storage'],
    ],
  },
  sports: {
    cluster: 'media',
    regs: ['Betting and data licensing', 'Age checks', 'Broadcast rights'],
    demand: 'Live stats, fan engagement and wearable-driven training insight.',
    pipeline: [
      ['Fan and athlete apps', 'Scores and plans'],
      ['Live data feed', 'Events in real time'],
      ['Analytics', 'Performance models'],
      ['Content hub', 'Clips and stories'],
    ],
  },
  education: {
    cluster: 'media',
    regs: ['FERPA / COPPA', 'Accessibility (WCAG 2.2)', 'DPDP Act'],
    demand: 'AI tutors, adaptive paths and accessible, mobile-first learning.',
    pipeline: [
      ['Learner app', 'Courses and live classes'],
      ['Live video', 'Low-latency WebRTC'],
      ['Adaptive engine', 'Next best lesson'],
      ['Progress store', 'Assessments and records'],
    ],
  },
  logistics: {
    cluster: 'operations',
    regs: ['E-way bill / customs', 'Driver hours', 'Cold-chain rules'],
    demand: 'Live tracking, route optimisation and predictive ETAs.',
    pipeline: [
      ['Dispatch console', 'Fleet on one map'],
      ['Route engine', 'Optimised by constraint'],
      ['Telematics', 'Sensor and GPS feeds'],
      ['Time-series store', 'Trips and events'],
    ],
  },
  manufacturing: {
    cluster: 'operations',
    regs: ['ISO 9001 / 27001', 'Safety standards', 'Traceability'],
    demand: 'Predictive maintenance, digital twins and shop-floor visibility.',
    pipeline: [
      ['Plant dashboard', 'OEE and alerts'],
      ['Edge gateway', 'Machines to cloud'],
      ['Condition models', 'Failure prediction'],
      ['Historian', 'Sensor history'],
    ],
  },
  construction: {
    cluster: 'operations',
    regs: ['Site safety records', 'Contract compliance', 'Local permits'],
    demand: 'Progress tracking from site photos, BIM links and cost control.',
    pipeline: [
      ['Site app', 'Photos, checklists, offline'],
      ['Progress AI', 'Compares to plan'],
      ['Cost and schedule', 'Variance alerts'],
      ['Document hub', 'Drawings and approvals'],
    ],
  },
  'it-telecom': {
    cluster: 'operations',
    regs: ['SOC 2', 'ISO 27001', 'Telecom licensing'],
    demand: 'Platform engineering, observability and AI-assisted operations.',
    pipeline: [
      ['Ops console', 'Incidents and changes'],
      ['Telemetry', 'Metrics, logs, traces'],
      ['Automation', 'Runbooks and agents'],
      ['Inventory', 'Assets and dependencies'],
    ],
  },
}

export const industryDemand = [
  { title: 'AI inside the workflow', text: 'Buyers now expect assistants, search and automation built into the product, not a chatbot on the side.' },
  { title: 'Data rules by region', text: 'DPDP, GDPR and sector rules decide where data lives. We design for residency and consent from the first sprint.' },
  { title: 'Interoperability', text: 'FHIR, open banking, GDS and ERP integrations are table stakes. We build against standards, not one-off connectors.' },
  { title: 'Accessible by default', text: 'WCAG 2.2 AA is a procurement requirement in education, public sector and finance. We test it, not just claim it.' },
]

export const aiTrends = [
  { title: 'AI agents', text: 'Software that plans and takes steps through your tools, inside limits you set.' },
  { title: 'RAG on your data', text: 'Answers grounded in your documents, with sources and permission checks.' },
  { title: 'Evals and observability', text: 'Test sets, tracing and cost tracking so quality is measured, not guessed.' },
  { title: 'Multimodal AI', text: 'Models that read documents, images, audio and video in one flow.' },
  { title: 'Small and private models', text: 'Fine-tuned or on-device models when data cannot leave your network.' },
  { title: 'Guardrails and governance', text: 'Policies, red-teaming and audit logs for the EU AI Act and ISO 42001.' },
]

export const aiStackLayers = [
  { name: 'Experience', items: 'Web app, mobile, chat, voice, API' },
  { name: 'Orchestration', items: 'Agents, workflows, tool calling, guardrails' },
  { name: 'Knowledge', items: 'Retrieval, vector and keyword search, permissions' },
  { name: 'Models', items: 'Hosted LLMs, open-weight models, fine-tunes' },
  { name: 'Platform', items: 'Evals, tracing, cost controls, CI/CD, cloud' },
]

export const aiProcess = [
  { title: 'Find the use case', text: 'We score ideas by value, data readiness and risk, and pick one worth proving.' },
  { title: 'Prove it on your data', text: 'A two to four week pilot with a written pass mark agreed in advance.' },
  { title: 'Build with evals', text: 'Test sets run on every change so quality can only go up.' },
  { title: 'Ship with guardrails', text: 'Access control, logging and human handoff before launch.' },
  { title: 'Operate and improve', text: 'Monitoring for drift, cost and failures, with monthly reviews.' },
]

export const aiGovernance = [
  { name: 'EU AI Act', note: 'Risk classification and documentation' },
  { name: 'ISO/IEC 42001', note: 'AI management system' },
  { name: 'SOC 2 and ISO 27001', note: 'Security controls' },
  { name: 'DPDP Act and GDPR', note: 'Personal data handling' },
]

export const aiFaq = [
  { q: 'How do you stop the model from making things up?', a: 'We ground answers in your documents, show the sources, and measure accuracy on a test set before launch. Where the answer is not in the data, the assistant says so.' },
  { q: 'Will our data be used to train public models?', a: 'No. We use enterprise endpoints or models hosted in your environment, with contracts that exclude training on your data.' },
  { q: 'How long does a first AI project take?', a: 'A pilot usually takes two to four weeks and a first production release eight to sixteen, depending on integrations and data quality.' },
  { q: 'Can AI run on our own servers?', a: 'Yes. Open-weight and fine-tuned models can run in your cloud account or on-premises when data cannot leave your network.' },
]

export const portfolioProcess = [
  { title: 'Brief and constraints', text: 'Goal, users, budget, deadlines and what cannot change.' },
  { title: 'Design and prototype', text: 'Clickable prototype tested with real users before engineering starts.' },
  { title: 'Build in two-week sprints', text: 'Working software every sprint, with demos and a visible backlog.' },
  { title: 'Launch and measure', text: 'Monitoring, analytics and a plan for the first 90 days.' },
]

export const portfolioTech = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'React Native', 'PostgreSQL', 'pgvector', 'Kubernetes', 'Terraform', 'AWS', 'GCP', 'OpenAI', 'Claude', 'LangChain', 'Stripe']
