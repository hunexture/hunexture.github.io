// Page copy for the individual industry pages. Written to describe what we build and what each
// sector requires. It makes no performance or client claims we cannot back up.
const n = (t, d) => ({ t, d })

export const industryExtra = {
  healthcare: {
    intro: 'Clinics and hospitals want fewer clicks per patient, records that move between systems, and care that continues after the visit. We build the apps and integrations behind that, with privacy rules designed in from the first sprint.',
    needs: [
      n('Records that connect', 'Patient data lives in many systems. Standards such as HL7 FHIR let apps read and write it without custom adapters.'),
      n('Care beyond the clinic', 'Video visits, remote monitoring and reminders need to feel as simple as a messaging app.'),
      n('Less paperwork for clinicians', 'Scheduling, notes and coding eat hours. Automation and AI drafting give that time back.'),
    ],
    compliance: [
      n('HIPAA and DPDP Act', 'Encryption, access control, audit logs and breach procedures for protected health information.'),
      n('HL7 FHIR R4', 'Standard resource models so integrations survive vendor changes.'),
      n('Consent management', 'Patients decide who sees what, and every access is recorded.'),
    ],
    ai: ['Ambient note drafting that a clinician reviews and signs', 'Risk scoring for readmission and no-shows, with explanations', 'Triage chat that routes to a human for anything clinical'],
    kpis: ['No-show rate', 'Minutes of documentation per visit', 'Time to book an appointment'],
    faq: [
      { q: 'Can you build on top of our existing EHR?', a: 'Usually yes. We start by checking which FHIR or HL7 interfaces your EHR exposes, then design the app around those. If an interface is missing, we plan the workaround in discovery.' },
      { q: 'Who is responsible for HIPAA compliance?', a: 'Compliance is shared. We build the safeguards and sign a business associate agreement; your organisation owns policies, training and the overall program.' },
    ],
  },
  legal: {
    intro: 'Law firms and legal teams are drowning in documents and deadlines. We build matter systems and document tools that save review time without putting privileged material at risk.',
    needs: [
      n('Faster document review', 'Contracts and discovery sets are large. Search and extraction cut the first pass from days to hours.'),
      n('Clear matter tracking', 'Deadlines, tasks and billing need one source of truth per matter.'),
      n('Client portals', 'Clients expect secure upload, status and signatures without email chains.'),
    ],
    compliance: [
      n('Privilege and confidentiality', 'Per-matter access, ethical walls and encrypted storage.'),
      n('GDPR and DPDP Act', 'Retention, erasure and cross-border transfer rules for client data.'),
      n('SOC 2 controls', 'Evidence that access, change and incident processes are followed.'),
    ],
    ai: ['Clause extraction and risk flags in contracts', 'Search across matters that respects permissions', 'First-draft summaries a lawyer verifies'],
    kpis: ['Hours per document review', 'Deadlines missed', 'Time to first client response'],
    faq: [
      { q: 'Is it safe to use AI on privileged documents?', a: 'Only with the right setup: a private model endpoint with no training on your data, access limited by matter, and logging. We design for that and document the risk for your ethics counsel.' },
      { q: 'Can you integrate with our practice management software?', a: 'Often through its API or export tools. We confirm the options during discovery before promising a scope.' },
    ],
  },
  logistics: {
    intro: 'Shippers and carriers compete on reliability and cost per delivery. We build the tracking, routing and warehouse software that turns live data into fewer delays.',
    needs: [
      n('Live visibility', 'Customers expect an accurate ETA, not a status from yesterday.'),
      n('Smarter routing', 'Routes need to reflect traffic, delivery windows, vehicle limits and driver hours together.'),
      n('Paperless proof', 'Electronic proof of delivery and e-way bill handling remove disputes and delays.'),
    ],
    compliance: [
      n('E-way bill and customs', 'Document generation and validation for domestic and cross-border moves.'),
      n('Driver hours and safety', 'Records that show compliance with working-time rules.'),
      n('Cold-chain records', 'Temperature logs with alerts for regulated goods.'),
    ],
    ai: ['ETA prediction from historical trips and traffic', 'Demand forecasting for warehouse stock', 'Damage detection from loading photos'],
    kpis: ['On-time delivery rate', 'Cost per delivery', 'Empty miles'],
    faq: [
      { q: 'Can you connect to our existing TMS or WMS?', a: 'Yes in most cases, through APIs, EDI or file exchange. We map the data flows first so the new tools do not duplicate what you already run.' },
      { q: 'What hardware do you support for tracking?', a: 'GPS trackers, OBD-II devices, phone-based driver apps and warehouse scanners. We recommend the lowest-cost option that meets your accuracy needs.' },
    ],
  },
  education: {
    intro: 'Schools, colleges and training providers need learning that works on a phone, reaches every student and shows teachers who needs help. We build the platforms and tools for that.',
    needs: [
      n('Learning on any device', 'Most learners use a phone on a patchy connection. Offline mode and light pages matter.'),
      n('Personal pace', 'Adaptive paths and quick feedback keep both fast and slower learners engaged.'),
      n('Visible progress', 'Teachers and parents want simple dashboards, not spreadsheets.'),
    ],
    compliance: [
      n('Student data privacy', 'FERPA and COPPA principles, plus the DPDP Act for minors.'),
      n('Accessibility', 'WCAG 2.2 AA so every student can use the platform.'),
      n('Content licensing', 'Rights tracking for course material and media.'),
    ],
    ai: ['Tutor chat that answers from the course material', 'Practice questions generated and checked by a teacher', 'Early alerts when a learner falls behind'],
    kpis: ['Course completion rate', 'Weekly active learners', 'Assessment score change'],
    faq: [
      { q: 'Can the platform work with an existing LMS?', a: 'Yes. We build to LTI and common LMS APIs so your tools plug into Moodle, Canvas or similar systems.' },
      { q: 'How do you protect children\'s data?', a: 'We collect the minimum, separate identity from learning data, require parental consent where the law demands it, and set short retention periods.' },
    ],
  },
  'media-ott': {
    intro: 'Streaming audiences expect instant playback on every screen and content that fits their taste. We build the video pipeline, apps and recommendation systems behind that.',
    needs: [
      n('Smooth playback', 'Adaptive bitrate streaming and a CDN keep video running on weak connections.'),
      n('Discovery', 'Good recommendations and search keep viewers watching and subscribed.'),
      n('Flexible monetisation', 'Subscriptions, ads and pay-per-view often live in one product.'),
    ],
    compliance: [
      n('DRM and licensing', 'Widevine, FairPlay and PlayReady for protected content.'),
      n('Content ratings', 'Age gates and parental controls by region.'),
      n('Regional data rules', 'Viewer data stored and processed where the law requires.'),
    ],
    ai: ['Recommendations from viewing behaviour', 'Auto-generated captions and translations', 'Moderation of user-uploaded video'],
    kpis: ['Time to first frame', 'Rebuffering rate', 'Monthly churn'],
    faq: [
      { q: 'Can you build live streaming as well as on-demand?', a: 'Yes. Live needs lower latency and different capacity planning, which we scope separately from on-demand video.' },
      { q: 'Do you build smart TV apps?', a: 'We build for Android TV, Fire TV, Apple TV, Roku and Samsung or LG TVs, usually sharing a core with the mobile apps.' },
    ],
  },
  travel: {
    intro: 'Travellers compare everything and change plans often. We build booking engines and planning tools that stay accurate across suppliers and handle changes gracefully.',
    needs: [
      n('Accurate availability', 'Prices and seats change by the minute across many suppliers.'),
      n('Flexible changes', 'Rebooking, refunds and disruption handling decide customer loyalty.'),
      n('Trip planning help', 'People want itineraries built around their preferences, not endless search.'),
    ],
    compliance: [
      n('PCI DSS', 'Safe handling of card payments.'),
      n('IATA and GDS rules', 'Fare, ticketing and reporting requirements.'),
      n('GDPR and DPDP Act', 'Passport and travel data are personal data.'),
    ],
    ai: ['Itinerary suggestions based on stated preferences', 'Price alerts and best-time-to-book hints', 'Support chat that can rebook within policy'],
    kpis: ['Search-to-book conversion', 'Booking changes handled without an agent', 'Average response time in disruptions'],
    faq: [
      { q: 'Which travel suppliers can you connect?', a: 'Common GDS, hotel, car and activity APIs. Access depends on your supplier agreements, which we help you scope.' },
      { q: 'Can you support multiple currencies and languages?', a: 'Yes, from the start. Pricing, taxes and content are structured so adding a market is configuration, not a rebuild.' },
    ],
  },
  retail: {
    intro: 'Shoppers move between store, app and website, and expect stock and prices to match. We build the systems that make each channel tell the same story.',
    needs: [
      n('One view of stock', 'Selling something that is not on the shelf costs the sale and the customer.'),
      n('Fast checkout', 'Wallets, UPI and one-tap payments reduce abandoned carts.'),
      n('Personal offers', 'Loyalty and purchase history drive relevant, timely offers.'),
    ],
    compliance: [
      n('PCI DSS', 'Card data handling for in-store and online payments.'),
      n('GST and e-invoicing', 'Tax rules built into billing.'),
      n('Consumer protection', 'Clear pricing, returns and data consent.'),
    ],
    ai: ['Demand forecasting for replenishment', 'Visual and natural-language product search', 'Personalised recommendations with clear opt-out'],
    kpis: ['Stock accuracy', 'Checkout completion rate', 'Repeat purchase rate'],
    faq: [
      { q: 'Can you connect our POS and online store?', a: 'Yes. We sync stock, prices and orders so both channels read from one source of truth.' },
      { q: 'Do you build on Shopify or custom?', a: 'Either. Shopify is faster for standard catalogs; custom suits complex pricing, bundles or workflows. We recommend after discovery.' },
    ],
  },
  construction: {
    intro: 'Projects slip when information is late. We build site apps and dashboards that capture progress, safety and cost as the work happens.',
    needs: [
      n('Capture on site', 'Crews need simple apps that work offline and take photos and notes in seconds.'),
      n('Cost and schedule control', 'Variance should show up this week, not at month end.'),
      n('One set of documents', 'Drawings, RFIs and approvals must be current for everyone.'),
    ],
    compliance: [
      n('Site safety records', 'Inspections, incidents and toolbox talks stored and searchable.'),
      n('Contract documentation', 'Approvals and change orders with a clear history.'),
      n('Permits and local rules', 'Tracking expiries and conditions per site.'),
    ],
    ai: ['Progress checks that compare site photos to the plan', 'Safety-gear detection on camera feeds, where the site allows it', 'Schedule risk alerts from past project patterns'],
    kpis: ['RFI turnaround time', 'Cost variance to budget', 'Safety incidents per hours worked'],
    faq: [
      { q: 'Does it work with BIM tools?', a: 'We can link to common BIM exports and viewers. The depth of integration depends on your model standards.' },
      { q: 'Will it work with poor site connectivity?', a: 'Yes. Apps store work locally and sync when a connection returns.' },
    ],
  },
  sports: {
    intro: 'Clubs, leagues and fitness brands compete for attention all season. We build fan, athlete and operations software that keeps people engaged and informed.',
    needs: [
      n('Live engagement', 'Scores, stats and clips need to arrive within seconds.'),
      n('Performance insight', 'Coaches use wearable and video data to plan training and manage load.'),
      n('Ticketing and membership', 'Smooth purchase and entry reduce friction on match day.'),
    ],
    compliance: [
      n('Data licensing', 'Official data feeds come with usage terms.'),
      n('Age and betting rules', 'Age checks and regional restrictions where relevant.'),
      n('Athlete data privacy', 'Health and performance data need consent and access limits.'),
    ],
    ai: ['Auto-generated highlights from match video', 'Injury-risk indicators from training load', 'Personalised fan feeds'],
    kpis: ['App weekly active users', 'Ticket conversion rate', 'Session length on match days'],
    faq: [
      { q: 'Can you handle spikes on match day?', a: 'Yes. We design for peak load with caching, queues and load tests before the season starts.' },
      { q: 'Can you integrate wearable data?', a: 'We connect to common wearable APIs and normalise the data. Each device vendor has its own terms, which we check upfront.' },
    ],
  },
  marketplace: {
    intro: 'A marketplace only works when both sides trust it. We build the matching, payments and trust features that keep buyers and sellers coming back.',
    needs: [
      n('Seller onboarding', 'Verification and catalog tools must be quick for good sellers and strict for bad ones.'),
      n('Safe payments', 'Escrow, split payouts and refunds need clear rules.'),
      n('Quality control', 'Reviews, disputes and moderation protect the brand.'),
    ],
    compliance: [
      n('KYC and AML', 'Identity checks for sellers and payout limits.'),
      n('Payments rules', 'Licensed processors for splitting and holding funds.'),
      n('Platform liability', 'Terms, takedown processes and records.'),
    ],
    ai: ['Duplicate and fraud listing detection', 'Search ranking that balances relevance and supply', 'Dispute summaries for support agents'],
    kpis: ['Liquidity (listings that sell)', 'Seller activation rate', 'Dispute rate'],
    faq: [
      { q: 'How do you solve the chicken-and-egg problem?', a: 'Software cannot do it alone. We help you launch narrow, in one category or city, and build the tools to onboard the scarcer side first.' },
      { q: 'Which payment partners work for split payouts?', a: 'Stripe Connect, Razorpay Route and similar. The right one depends on your countries and model.' },
    ],
  },
  finance: {
    intro: 'Banks, lenders and fintechs must be fast, correct and auditable at once. We build payment, lending and analytics software with controls that satisfy both customers and regulators.',
    needs: [
      n('Real-time money movement', 'UPI, cards and bank transfers need instant, reliable confirmation.'),
      n('Fraud control', 'Scoring must catch bad activity without blocking good customers.'),
      n('Clear audit trail', 'Every balance change must be explainable and reproducible.'),
    ],
    compliance: [
      n('PCI DSS', 'Tokenisation and network segmentation for card data.'),
      n('RBI and local regulation', 'Data localisation, KYC and reporting rules.'),
      n('PSD2 and open banking', 'Consent-based access to account data in supported markets.'),
    ],
    ai: ['Transaction fraud scoring with reason codes', 'Credit risk models with explainability', 'Support assistants for statements and disputes'],
    kpis: ['Payment success rate', 'False-positive fraud rate', 'Time to onboard a customer'],
    faq: [
      { q: 'Do you handle regulatory approvals?', a: 'No. Approvals belong to your institution. We build to the technical requirements and prepare the documentation your compliance team needs.' },
      { q: 'How do you keep the ledger correct?', a: 'Double-entry design, idempotent operations, daily reconciliation and immutable audit logs.' },
    ],
  },
  'social-media': {
    intro: 'Social products live or die by engagement and safety. We build feeds, creator tools and moderation systems that scale without losing control of content.',
    needs: [
      n('Relevant feeds', 'Ranking must balance freshness, interest and variety.'),
      n('Creator tools', 'Fast upload, editing and analytics keep creators posting.'),
      n('Safety at scale', 'Reports, moderation queues and appeals need to be fast and fair.'),
    ],
    compliance: [
      n('Content moderation duties', 'Notice, action and transparency rules in several regions.'),
      n('Child safety', 'Age assurance and protections for minors.'),
      n('GDPR and DPDP Act', 'User consent, export and deletion.'),
    ],
    ai: ['Detection of abusive or illegal content for human review', 'Feed ranking with controls users can adjust', 'Auto captions and translations'],
    kpis: ['Daily active users', 'Time to action a report', 'Creator retention'],
    faq: [
      { q: 'Can AI moderation replace human moderators?', a: 'Not safely. AI sorts and flags at scale; people decide edge cases and handle appeals.' },
      { q: 'How do you handle media storage costs?', a: 'Transcoding profiles, tiered storage and CDN caching keep cost per user predictable.' },
    ],
  },
  insurance: {
    intro: 'Insurers want faster quotes, claims that settle sooner and pricing that reflects real risk. We build the portals, rules engines and document tools to get there.',
    needs: [
      n('Quick quotes', 'Fewer questions and instant pricing win customers.'),
      n('Faster claims', 'Photo and document intake that is checked automatically shortens settlement.'),
      n('Fraud detection', 'Patterns across claims point investigators to the right files.'),
    ],
    compliance: [
      n('IRDAI and local regulation', 'Product, disclosure and grievance rules.'),
      n('Solvency and reporting', 'Accurate data for regulatory returns.'),
      n('Privacy', 'Health and financial data under GDPR or the DPDP Act.'),
    ],
    ai: ['Claim photo assessment with adjuster review', 'Document extraction from forms and bills', 'Risk-based pricing with documented factors'],
    kpis: ['Days to settle a claim', 'Quote-to-bind conversion', 'Fraud caught before payout'],
    faq: [
      { q: 'Can you integrate with our core policy system?', a: 'Typically through APIs or batch interfaces. Core systems vary a lot, so we assess the interface first.' },
      { q: 'Is AI-based pricing allowed?', a: 'It depends on your regulator. We build models whose factors can be explained and audited.' },
    ],
  },
  manufacturing: {
    intro: 'Factories need to know what is happening on the line right now and what will break next. We connect machines, data and people so downtime and waste fall.',
    needs: [
      n('Machine visibility', 'Data from PLCs and sensors must reach a dashboard people trust.'),
      n('Maintenance that predicts', 'Condition data can schedule repairs before a stoppage.'),
      n('Traceability', 'Batches and parts need a record from supplier to shipment.'),
    ],
    compliance: [
      n('ISO 9001 and 27001', 'Quality and information security management.'),
      n('Safety standards', 'Records for audits and incidents.'),
      n('Customer traceability rules', 'Lot tracking for automotive, pharma and food.'),
    ],
    ai: ['Anomaly detection on vibration and temperature', 'Visual defect inspection', 'Production schedule suggestions'],
    kpis: ['Overall equipment effectiveness', 'Unplanned downtime hours', 'First-pass yield'],
    faq: [
      { q: 'Do we need to replace our machines?', a: 'No. Edge gateways read most existing equipment over standard industrial protocols.' },
      { q: 'Where does the data go?', a: 'Wherever you choose: on-premises, your cloud account or a managed environment.' },
    ],
  },
  'it-telecom': {
    intro: 'IT and telecom teams run complex, always-on systems. We build the tooling that reduces incidents, shortens fixes and keeps costs visible.',
    needs: [
      n('Observability', 'Metrics, logs and traces in one place speed up diagnosis.'),
      n('Automation', 'Runbooks and bots handle routine fixes at any hour.'),
      n('Service quality', 'Customers and partners expect measured SLAs.'),
    ],
    compliance: [
      n('SOC 2 and ISO 27001', 'Security controls with evidence.'),
      n('Telecom licensing', 'Network, lawful-intercept and data rules per country.'),
      n('Data protection', 'Subscriber data under local privacy law.'),
    ],
    ai: ['Alert grouping and root-cause hints', 'Capacity forecasting', 'Assistants that draft incident updates'],
    kpis: ['Mean time to resolve', 'Change failure rate', 'Cloud cost per customer'],
    faq: [
      { q: 'Can you work inside our existing toolchain?', a: 'Yes. We build on your monitoring, ticketing and CI tools instead of adding new ones.' },
      { q: 'Do you build customer portals for telecom?', a: 'Yes: self-service, usage, billing and support, connected to your OSS and BSS systems.' },
    ],
  },
  'beauty-lifestyle': {
    intro: 'Salons, spas and wellness brands sell time and trust. We build booking, membership and customer tools that keep calendars full and clients returning.',
    needs: [
      n('Booking without friction', 'Clients book on a phone, pick staff and pay a deposit in under a minute.'),
      n('Fewer no-shows', 'Reminders and deposits protect revenue.'),
      n('Repeat visits', 'Memberships and rewards bring people back.'),
    ],
    compliance: [
      n('Payments', 'Safe handling of deposits and card-on-file.'),
      n('Client records', 'Consent forms and allergy notes handled as sensitive data.'),
      n('Marketing consent', 'Opt-in for messages and offers.'),
    ],
    ai: ['Slot suggestions that fill gaps in the day', 'Personalised rebooking nudges', 'Product recommendations based on service history'],
    kpis: ['No-show rate', 'Rebooking rate', 'Revenue per chair or room'],
    faq: [
      { q: 'Can it handle multiple locations?', a: 'Yes, with shared client profiles and per-location calendars, staff and reporting.' },
      { q: 'Can clients buy products as well?', a: 'Yes. Retail, gift cards and memberships sit in the same checkout.' },
    ],
  },
  'on-demand': {
    intro: 'On-demand services depend on matching supply and demand within minutes. We build the dispatch, tracking and payment systems that make that reliable.',
    needs: [
      n('Quick matching', 'The nearest suitable provider should be offered first, with fair load across providers.'),
      n('Live tracking', 'Customers want to see progress and a believable ETA.'),
      n('Fair pricing and payouts', 'Rules for surge, tips and payouts must be clear to both sides.'),
    ],
    compliance: [
      n('Gig-worker regulation', 'Classification, benefits and records vary by region.'),
      n('Location privacy', 'Track only while a job is active and tell users clearly.'),
      n('Payments compliance', 'Licensed processors and tax handling.'),
    ],
    ai: ['Demand forecasting by area and hour', 'ETA prediction from live conditions', 'Fraud checks on accounts and promotions'],
    kpis: ['Time to match', 'Cancellation rate', 'Provider utilisation'],
    faq: [
      { q: 'Do you build both customer and provider apps?', a: 'Yes, plus the admin console for operations and support.' },
      { q: 'How do you keep maps and costs under control?', a: 'We cache and batch map requests and compare providers on cost before committing.' },
    ],
  },
  ecommerce: {
    intro: 'Online stores win on speed, trust and a checkout that just works. We build storefronts and back-office systems tuned for conversion and for operations that scale.',
    needs: [
      n('Speed', 'Fast pages lift conversion and search ranking.'),
      n('Search that finds things', 'Typo-tolerant, ranked search turns browsers into buyers.'),
      n('Smooth fulfilment', 'Orders, stock, shipping and returns must stay in sync.'),
    ],
    compliance: [
      n('PCI DSS', 'Hosted payment fields keep card data out of your servers.'),
      n('GDPR and DPDP Act', 'Consent for tracking and marketing.'),
      n('Core Web Vitals', 'Performance targets that affect SEO.'),
    ],
    ai: ['Natural-language and image product search', 'Recommendations and bundle suggestions', 'Support assistants that read order status'],
    kpis: ['Conversion rate', 'Cart abandonment', 'Return rate'],
    faq: [
      { q: 'Should we go headless?', a: 'It helps when you need custom experiences or many channels. For a simple catalog, a hosted platform is often faster and cheaper.' },
      { q: 'Can you migrate from our current platform?', a: 'Yes. We plan product, customer and order migration with redirects so search rankings are protected.' },
    ],
  },
}
