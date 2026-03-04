import {
  FaHeartbeat, FaBalanceScale, FaTruck, FaGraduationCap, FaVideo, FaPlane,
  FaShoppingBag, FaHardHat, FaBasketballBall, FaStore, FaCreditCard, FaInstagram,
  FaShieldAlt, FaIndustry, FaWifi, FaSpa, FaStar, FaShoppingCart, FaHospital,
  FaStethoscope, FaUsers, FaChartLine, FaFileAlt, FaCalendarAlt, FaGavel,
  FaSearch, FaComments, FaClock, FaMap, FaWarehouse, FaBoxes, FaRoute,
  FaBook, FaChalkboardTeacher, FaLaptop, FaClipboardCheck, FaMobileAlt,
  FaFilm, FaCloud, FaTv, FaHotel, FaTicketAlt, FaUserTie, FaCashRegister,
  FaBuilding, FaTools, FaFileSignature, FaHardHat as FaHelmet,
  FaTrophy, FaFutbol, FaMedal, FaDatabase, FaHandshake, FaStar as FaRating,
  FaWallet, FaChartPie, FaCheckCircle, FaUserFriends, FaComment,
  FaFileInvoiceDollar, FaCalculator, FaRobot, FaCogs, FaNetworkWired,
  FaSignal, FaHeadset, FaCamera, FaGift, FaMapMarkerAlt,
  FaMoneyBillWave, FaBullhorn, FaAward, FaLock,
  FaBrain, FaRocket, FaHandsHelping, FaCertificate, FaHeadphonesAlt, FaServer,
  FaCode, FaAws, FaMicrosoft as FaAzure,
  FaJava
} from 'react-icons/fa';
import {
  SiMongodb, SiPostgresql, SiRedis, SiElasticsearch, SiGooglemaps, SiStripe,
  SiShopify, SiDjango, SiWebrtc, SiFfmpeg, SiBlockchaindotcom, SiApachekafka,
  SiOracle, SiReact, SiNodedotjs, SiPython, SiJavascript, SiTypescript
} from 'react-icons/si';

// Technology icon mapper
const getTechIcon = (techName) => {
  const iconMap = {
    'React': SiReact,
    'React Native': SiReact,
    'Node.js': SiNodedotjs,
    'Python': SiPython,
    'MongoDB': SiMongodb,
    'PostgreSQL': SiPostgresql,
    'Redis': SiRedis,
    'Elasticsearch': SiElasticsearch,
    'Google Maps': SiGooglemaps,
    'Stripe': SiStripe,
    'Shopify': SiShopify,
    'Django': SiDjango,
    'WebRTC': SiWebrtc,
    'FFmpeg': SiFfmpeg,
    'Blockchain': SiBlockchaindotcom,
    'Kafka': SiApachekafka,
    'Oracle': SiOracle,
    'AWS': FaAws,
    'AWS Media Services': FaAws,
    'Azure': FaAzure,
    'JavaScript': SiJavascript,
    'TypeScript': SiTypescript,
    'FHIR': FaDatabase,
    'GPS API': FaMapMarkerAlt,
    'CDN': FaServer,
    'Payment Gateways': FaCreditCard,
    'Google APIs': FaCode,
    'GPS Tracking': FaMapMarkerAlt,
    'Cloud Storage': FaCloud,
    'Microservices': FaServer,
    'WebSocket': FaNetworkWired,
    'Java': FaJava,
    'IoT Devices': FaRobot,
    'AR/VR': FaCamera,
    'AI/ML': FaBrain
  };
  return iconMap[techName] || FaCode;
};

// Why Choose Us icon mapper
const getWhyChooseUsIcon = (text) => {
  const t = (text || '').toLowerCase();
  if (t.includes('hipaa') || t.includes('complian') || t.includes('security') || t.includes('bank-grade')) return FaLock;
  if (t.includes('experience') || t.includes('expertise') || t.includes('specialist') || t.includes('veteran')) return FaAward;
  if (t.includes('ai') || t.includes('machine learning') || t.includes('intelligent') || t.includes('predictive')) return FaBrain;
  if (t.includes('real-time') || t.includes('fast') || t.includes('rapid') || t.includes('latency') || t.includes('pioneer')) return FaRocket;
  if (t.includes('support') || t.includes('service') || t.includes('success')) return FaHeadphonesAlt;
  if (t.includes('integration') || t.includes('scalable') || t.includes('ecosystem')) return FaCogs;
  if (t.includes('user') || t.includes('customer') || t.includes('focus') || t.includes('creator')) return FaUsers;
  if (t.includes('standard') || t.includes('certified') || t.includes('regulatory')) return FaCertificate;
  if (t.includes('track record') || t.includes('proven') || t.includes('mastery') || t.includes('blueprint')) return FaTrophy;
  if (t.includes('advanced') || t.includes('cutting-edge') || t.includes('5g') || t.includes('omnichannel')) return FaRocket;
  if (t.includes('custom') || t.includes('tailored') || t.includes('personali')) return FaHandsHelping;
  if (t.includes('quality') || t.includes('excellence') || t.includes('revenue')) return FaStar;
  if (t.includes('trust') || t.includes('safety') || t.includes('fraud') || t.includes('background')) return FaShieldAlt;
  if (t.includes('mobile') || t.includes('offline') || t.includes('ar') || t.includes('virtual')) return FaMobileAlt;
  return FaCheckCircle;
};

export const industriesData = [
  // ─── 1. HEALTHCARE ──────────────────────────────────────────────────────────
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare',
    icon: FaHeartbeat,
    shortDescription: 'Digital transformation for modern healthcare',
    description: 'Transform patient care with cutting-edge technology solutions. We help healthcare organizations improve patient outcomes, streamline operations, and ensure compliance with HIPAA and other regulations.',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#667eea',
    stats: [
      { value: '40%', label: 'EHR Efficiency Gain' },
      { value: '99.9%', label: 'Platform Uptime' },
      { value: '60%', label: 'Faster Claims' },
      { value: '50K+', label: 'Patients Served' }
    ],
    services: [
      { name: 'Electronic Health Records (EHR)', icon: FaFileAlt },
      { name: 'Telemedicine Platforms', icon: FaStethoscope },
      { name: 'Patient Portal Development', icon: FaUsers },
      { name: 'Healthcare Analytics', icon: FaChartLine },
      { name: 'Medical Imaging Solutions', icon: FaHospital },
      { name: 'Appointment Scheduling Systems', icon: FaCalendarAlt }
    ],
    benefits: [
      'Improved patient care and outcomes',
      'Enhanced operational efficiency',
      'HIPAA compliance and data security',
      'Better patient engagement',
      'Reduced administrative costs'
    ],
    process: [
      { step: '01', title: 'Discovery & HIPAA Scoping', description: 'We assess your clinical workflows, existing systems, and compliance requirements to define a compliant technology roadmap.' },
      { step: '02', title: 'Architecture & Data Design', description: 'HIPAA-compliant cloud architecture, HL7/FHIR data models, and integration blueprints for your EHR ecosystem.' },
      { step: '03', title: 'Development & Integration', description: 'Agile sprint-based development with continuous integration into EHR systems, medical devices, and third-party data providers.' },
      { step: '04', title: 'Testing, Compliance & Launch', description: 'Rigorous security audits, penetration testing, and HIPAA compliance verification before go-live and ongoing monitoring.' }
    ],
    challenges: [
      'Data security and privacy compliance',
      'Integration with legacy systems',
      'Managing patient data across platforms',
      'Ensuring system uptime and reliability'
    ],
    whyChooseUs: [
      { title: 'HIPAA-First Architecture', description: 'Compliance built into every layer — encryption, audit trails, and role-based access control from day one.' },
      { title: 'Healthcare Expertise', description: 'Deep experience with HL7/FHIR standards, major EHR systems, and complex clinical workflows across hospitals and clinics.' },
      { title: 'AI-Powered Insights', description: 'Machine learning models for diagnostic support, patient risk scoring, readmission prediction, and operational analytics.' },
      { title: 'Patient-Centric Design', description: 'Intuitive interfaces for clinicians and patients that reduce training time, increase adoption, and improve satisfaction scores.' }
    ],
    caseStudies: [
      {
        title: 'Telemedicine Platform',
        description: 'Built a comprehensive telehealth solution serving 50,000+ patients with video consultations, prescriptions, and lab results.',
        results: '10,000+ virtual consultations per month'
      },
      {
        title: 'Hospital EHR Migration',
        description: 'Migrated paper-based records and legacy systems to a modern cloud EHR for a 200-bed multispecialty hospital.',
        results: '70% reduction in administrative overhead'
      },
      {
        title: 'Mental Health App',
        description: 'Developed a teletherapy platform connecting patients with certified therapists, including mood tracking and crisis support.',
        results: '15K+ therapy sessions delivered monthly'
      }
    ],
    faq: [
      {
        question: 'How do you ensure HIPAA compliance?',
        answer: 'We follow strict HIPAA guidelines in all development phases, including AES-256 encryption, role-based access controls, audit logs, BAAs with all vendors, and regular third-party security assessments.'
      },
      {
        question: 'Can you integrate with existing EHR systems?',
        answer: 'Yes, we have extensive experience integrating with Epic, Cerner, Allscripts, and custom EHRs using HL7, FHIR R4, and proprietary APIs.'
      },
      {
        question: 'What is the typical timeline for a healthcare project?',
        answer: 'Timeline varies based on complexity, but most projects range from 3–9 months including planning, development, testing, and deployment.'
      },
      {
        question: 'Do you support mobile health apps and wearables?',
        answer: 'Yes, we build native iOS and Android health apps with integration to wearables, Apple Health, Google Fit, and real-time remote patient monitoring devices.'
      },
      {
        question: 'How do you handle medical data storage and backups?',
        answer: 'All patient data is stored in HIPAA-compliant cloud infrastructure with AES-256 encryption at rest, TLS in transit, geo-redundant backups, and 99.9% uptime SLAs.'
      }
    ],
    technologies: ['React', 'Node.js', 'FHIR', 'WebRTC', 'AWS']
  },

  // ─── 2. LEGAL ───────────────────────────────────────────────────────────────
  {
    id: 'legal',
    slug: 'legal',
    name: 'Legal',
    icon: FaBalanceScale,
    shortDescription: 'Technology solutions for law firms',
    description: 'Empower legal professionals with innovative technology. From case management to document automation, we help law firms work smarter and serve clients better.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: '#4facfe',
    stats: [
      { value: '70%', label: 'Docs Automated' },
      { value: '500+', label: 'Law Firms Served' },
      { value: '80%', label: 'Less Admin Time' },
      { value: '99%', label: 'Uptime SLA' }
    ],
    services: [
      { name: 'Case Management Systems', icon: FaGavel },
      { name: 'Document Automation', icon: FaFileAlt },
      { name: 'Legal Research Tools', icon: FaSearch },
      { name: 'Client Portals', icon: FaUsers },
      { name: 'Billing & Time Tracking', icon: FaClock },
      { name: 'E-Discovery Solutions', icon: FaDatabase }
    ],
    benefits: [
      'Streamlined case management',
      'Improved client communication',
      'Automated document generation',
      'Secure data handling',
      'Better time and billing accuracy'
    ],
    process: [
      { step: '01', title: 'Workflow Analysis & Compliance Review', description: 'We map your legal workflows, identify automation opportunities, and assess jurisdiction-specific compliance requirements.' },
      { step: '02', title: 'System Architecture & Security Design', description: 'Zero-trust security architecture, document storage design, and integration blueprints for court filing and research platforms.' },
      { step: '03', title: 'Development & Platform Integration', description: 'Building case management, billing, and document automation modules with connectors to Westlaw, LexisNexis, and court e-filing systems.' },
      { step: '04', title: 'Training & Phased Deployment', description: 'Staff training, parallel running alongside existing systems, and phased rollout to minimize disruption to active cases.' }
    ],
    challenges: [
      'Managing large volumes of case documents',
      'Ensuring data confidentiality and security',
      'Tracking billable hours accurately',
      'Coordinating across multiple cases and clients'
    ],
    whyChooseUs: [
      { title: 'Legal Tech Specialists', description: 'Purpose-built solutions for law firms with deep understanding of legal workflows, privilege rules, and compliance requirements.' },
      { title: 'Bank-Grade Security', description: 'End-to-end encryption, role-based access, and comprehensive audit trails protecting all privileged client communications.' },
      { title: 'Seamless Integrations', description: 'Pre-built connectors for Westlaw, LexisNexis, PACER, court e-filing systems, and all major accounting platforms.' },
      { title: 'Customizable Workflows', description: 'Flexible templates and automation rules adaptable to any practice area — litigation, corporate, IP, family law, and more.' }
    ],
    caseStudies: [
      {
        title: 'Case Management Platform',
        description: 'Developed comprehensive legal practice management software for a national law firm network across 20 offices.',
        results: '500+ law firms using the platform'
      },
      {
        title: 'Document Automation Platform',
        description: 'Built AI-powered contract drafting and review system reducing manual document preparation for a global law firm.',
        results: '90% reduction in document preparation time'
      },
      {
        title: 'Legal Research AI Tool',
        description: 'Developed NLP-based research assistant for case law analysis, statute lookup, and precedent identification.',
        results: '3x faster case research for attorneys'
      }
    ],
    faq: [
      {
        question: 'Is the system secure for confidential legal documents?',
        answer: 'Yes, we implement bank-level encryption, role-based access control, and audit trails to ensure complete confidentiality and attorney-client privilege protection.'
      },
      {
        question: 'Can it integrate with existing legal research databases?',
        answer: 'Absolutely. We provide integrations with Westlaw, LexisNexis, Bloomberg Law, and PACER for seamless research within your workflow.'
      },
      {
        question: 'How does the billing and time tracking work?',
        answer: 'Our system offers automatic time capture, customizable billing rates by matter and timekeeper, LEDES invoicing, and integration with QuickBooks and Xero.'
      },
      {
        question: 'Can the system migrate data from existing practice management tools?',
        answer: 'Yes, we provide comprehensive data migration from Clio, MyCase, PracticePanther, and custom systems with complete data integrity verification and zero data loss.'
      },
      {
        question: 'Do you offer AI-powered contract analysis?',
        answer: 'Absolutely. Our AI reviews contracts, identifies risks, flags unusual clauses, highlights missing provisions, and compares against your standard templates automatically.'
      }
    ],
    technologies: ['React', 'Python', 'PostgreSQL', 'Elasticsearch', 'Azure']
  },

  // ─── 3. LOGISTICS ───────────────────────────────────────────────────────────
  {
    id: 'logistics',
    slug: 'logistics',
    name: 'Logistics',
    icon: FaTruck,
    shortDescription: 'Smart solutions for supply chain management',
    description: 'Optimize your supply chain with intelligent logistics solutions. Real-time tracking, route optimization, and predictive analytics to keep your business moving.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#f093fb',
    stats: [
      { value: '30%', label: 'Fuel Cost Savings' },
      { value: '99.9%', label: 'Tracking Accuracy' },
      { value: '25%', label: 'Faster Delivery' },
      { value: '1000+', label: 'Vehicles Tracked' }
    ],
    services: [
      { name: 'Fleet Management Systems', icon: FaTruck },
      { name: 'Route Optimization', icon: FaRoute },
      { name: 'Warehouse Management', icon: FaWarehouse },
      { name: 'Real-time Tracking', icon: FaMapMarkerAlt },
      { name: 'Inventory Management', icon: FaBoxes },
      { name: 'Last-Mile Delivery Solutions', icon: FaMap }
    ],
    benefits: [
      'Real-time shipment visibility',
      'Reduced operational costs',
      'Optimized delivery routes',
      'Improved customer satisfaction',
      'Better inventory control'
    ],
    process: [
      { step: '01', title: 'Fleet & Supply Chain Analysis', description: 'Deep dive into your current operations, carrier network, and pain points to identify the highest-impact optimization opportunities.' },
      { step: '02', title: 'Platform Architecture & GPS Setup', description: 'Cloud platform design, GPS/IoT device selection, and integration architecture for your TMS, ERP, and carrier APIs.' },
      { step: '03', title: 'Development & Carrier Integration', description: 'Building fleet management, dispatch, and analytics modules with real-time integrations to 200+ carriers and freight networks.' },
      { step: '04', title: 'Rollout, Training & Optimization', description: 'Phased rollout starting with pilot fleet, driver app onboarding, and continuous route optimization tuning post-launch.' }
    ],
    challenges: [
      'Managing complex supply chain networks',
      'Real-time tracking across multiple locations',
      'Optimizing routes for cost efficiency',
      'Coordinating between warehouses and delivery points'
    ],
    whyChooseUs: [
      { title: 'AI Route Optimization', description: 'Machine learning algorithms cut delivery times by up to 30% while reducing fuel consumption, vehicle wear, and driver fatigue.' },
      { title: 'Real-Time GPS Precision', description: 'Sub-30-second location updates with 99.9% accuracy — complete fleet visibility across any geography, 24/7.' },
      { title: 'Scalable Cloud Platform', description: 'Handles fleets from 10 to 10,000+ vehicles on the same architecture with automatic scaling during peak periods.' },
      { title: 'Carrier Ecosystem', description: 'Pre-built integrations with 200+ carriers, freight brokers, and logistics networks worldwide — no renegotiation needed.' }
    ],
    caseStudies: [
      {
        title: 'Fleet Tracking System',
        description: 'Real-time tracking and dispatch optimization solution for a national FMCG distributor with 1,000+ vehicles.',
        results: '30% reduction in fuel costs'
      },
      {
        title: 'Last-Mile Delivery App',
        description: 'Driver mobile app and dispatch platform for an e-commerce fulfillment company handling hyperlocal deliveries.',
        results: '95% on-time delivery rate achieved'
      },
      {
        title: 'Warehouse Management System',
        description: 'Implemented WMS with barcode/RFID picking for a 3PL provider across 5 distribution centers.',
        results: '40% improvement in order accuracy'
      }
    ],
    faq: [
      {
        question: 'How accurate is the real-time tracking?',
        answer: 'Our GPS-based tracking provides location updates every 30 seconds with 99.9% accuracy, ensuring complete visibility of your fleet in any weather or geography.'
      },
      {
        question: 'Can the system handle international shipments?',
        answer: 'Yes, our platform supports multi-country operations, automated customs documentation, duty calculation, and international carrier integrations.'
      },
      {
        question: 'How does route optimization work?',
        answer: 'We use machine learning algorithms that consider live traffic, weather conditions, delivery windows, vehicle capacity, and driver hours to compute the most efficient routes.'
      },
      {
        question: 'Can you integrate with our ERP system?',
        answer: 'Yes, we provide pre-built integrations with SAP, Oracle, Microsoft Dynamics, and custom ERP systems for seamless order and inventory data synchronization.'
      },
      {
        question: 'How do you handle cross-border shipments?',
        answer: 'Our platform includes automated customs documentation, HS code classification, restricted party screening, and multi-country carrier routing to streamline international logistics.'
      }
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'GPS API', 'Google Maps']
  },

  // ─── 4. EDUCATION ───────────────────────────────────────────────────────────
  {
    id: 'education',
    slug: 'education',
    name: 'Education',
    icon: FaGraduationCap,
    shortDescription: 'EdTech solutions for modern learning',
    description: 'Transform education with innovative learning platforms. From LMS to virtual classrooms, we help educational institutions deliver engaging digital experiences.',
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    color: '#30cfd0',
    stats: [
      { value: '95%', label: 'Satisfaction Rate' },
      { value: '100K+', label: 'Students Served' },
      { value: '40%', label: 'Engagement Increase' },
      { value: '4.8★', label: 'App Store Rating' }
    ],
    services: [
      { name: 'Learning Management Systems', icon: FaBook },
      { name: 'Virtual Classroom Platforms', icon: FaChalkboardTeacher },
      { name: 'Student Information Systems', icon: FaUsers },
      { name: 'E-Learning Content Creation', icon: FaLaptop },
      { name: 'Assessment & Grading Tools', icon: FaClipboardCheck },
      { name: 'Parent-Teacher Communication', icon: FaComments }
    ],
    benefits: [
      'Enhanced learning experiences',
      'Remote learning capabilities',
      'Personalized education paths',
      'Better student engagement',
      'Streamlined administration'
    ],
    process: [
      { step: '01', title: 'Curriculum & LMS Requirements', description: 'We map your curriculum structure, learner personas, and institutional goals to design the ideal platform architecture.' },
      { step: '02', title: 'UX Research & Platform Design', description: 'Learner-centered UX design with accessibility compliance, gamification mechanics, and mobile-first interface prototypes.' },
      { step: '03', title: 'Development & Content Integration', description: 'LMS development with SCORM/xAPI compliance, video streaming, quiz engines, and integrations with your existing tools.' },
      { step: '04', title: 'Pilot Testing & Full Launch', description: 'Pilot cohort with real learners, instructor training, and phased rollout with ongoing performance analytics.' }
    ],
    challenges: [
      'Engaging students in virtual environments',
      'Managing diverse learning styles',
      'Tracking student progress effectively',
      'Ensuring accessibility for all students'
    ],
    whyChooseUs: [
      { title: 'Engaging Learning Design', description: 'Gamification, adaptive learning paths, interactive quizzes, and collaborative tools keep students engaged and motivated.' },
      { title: 'Universal Accessibility', description: 'WCAG 2.1 AA compliance with screen reader support, closed captions, and multi-language capabilities built in from the start.' },
      { title: 'LMS Ecosystem Expert', description: 'Native integrations with Canvas, Blackboard, Moodle, Google Classroom, and all major educational tool providers.' },
      { title: 'Proven EdTech Results', description: '100K+ students across our platforms with measurable improvements in course completion rates and learning outcomes.' }
    ],
    caseStudies: [
      {
        title: 'Online Learning Platform',
        description: 'Built a multi-subject LMS platform serving K-12 and higher education students with live and recorded classes.',
        results: '95% student satisfaction rate'
      },
      {
        title: 'Corporate Training Platform',
        description: 'Built enterprise LMS for a Fortune 500 company with 50,000+ employees across 30 countries.',
        results: 'Course completion rate jumped from 45% to 85%'
      },
      {
        title: 'Adaptive Assessment Tool',
        description: 'Developed adaptive testing platform for a school district using AI to personalize question difficulty per student.',
        results: '28% improvement in standardized test scores'
      }
    ],
    faq: [
      {
        question: 'Does the platform support both live and recorded classes?',
        answer: 'Yes, our platform supports live virtual classrooms with recording capabilities, allowing students to review content at their own pace and catch up on missed sessions.'
      },
      {
        question: 'Can parents track their child\'s progress?',
        answer: 'Absolutely. We provide dedicated parent portals with real-time access to grades, assignments, attendance records, and teacher messages.'
      },
      {
        question: 'Is the system mobile-friendly?',
        answer: 'Yes, our platform is fully responsive and includes dedicated mobile apps for iOS and Android with offline learning support.'
      },
      {
        question: 'Do you support SCORM and xAPI content?',
        answer: 'Yes, our LMS is fully SCORM 1.2, SCORM 2004, and xAPI (Tin Can) compliant, importing and tracking e-learning content from any authoring tool including Articulate and Adobe Captivate.'
      },
      {
        question: 'Can students learn offline?',
        answer: 'Yes, our mobile app supports offline mode, allowing students to download lessons, complete assignments, and take quizzes without an internet connection.'
      }
    ],
    technologies: ['React', 'Django', 'PostgreSQL', 'WebRTC', 'AWS']
  },

  // ─── 5. MEDIA & OTT ─────────────────────────────────────────────────────────
  {
    id: 'media-ott',
    slug: 'media-ott',
    name: 'Media & OTT',
    icon: FaVideo,
    shortDescription: 'Streaming and content delivery platforms',
    description: 'Build the next generation of media and entertainment platforms. From OTT streaming to content management, we create engaging digital experiences.',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    color: '#fa709a',
    stats: [
      { value: '10M+', label: 'Hours Streamed' },
      { value: '4K HDR', label: 'Video Quality' },
      { value: '99%', label: 'CDN Uptime' },
      { value: '1M+', label: 'Subscribers' }
    ],
    services: [
      { name: 'OTT Platform Development', icon: FaTv },
      { name: 'Video Streaming Solutions', icon: FaVideo },
      { name: 'Content Management Systems', icon: FaDatabase },
      { name: 'Live Streaming Applications', icon: FaFilm },
      { name: 'Subscription Management', icon: FaCreditCard },
      { name: 'Analytics & Recommendations', icon: FaChartLine }
    ],
    benefits: [
      'Scalable streaming infrastructure',
      'Multi-device compatibility',
      'AI-powered recommendations',
      'Multiple monetization options',
      'Real-time analytics'
    ],
    process: [
      { step: '01', title: 'Content Strategy & Platform Scoping', description: 'Define your content catalog, monetization model (SVOD/AVOD/TVOD), target devices, and technical streaming requirements.' },
      { step: '02', title: 'Architecture & CDN Design', description: 'Multi-CDN strategy, origin server setup, adaptive bitrate encoding ladder, and DRM architecture for global content delivery.' },
      { step: '03', title: 'Player Development & CMS Build', description: 'Cross-platform video player, CMS with metadata management, recommendation engine, and subscription billing integration.' },
      { step: '04', title: 'Beta Testing & Global Launch', description: 'Load testing at 10x expected peak, A/B testing player UX, CDN performance validation across all target regions.' }
    ],
    challenges: [
      'Delivering high-quality video at scale',
      'Managing content rights and licensing',
      'Providing seamless multi-device experience',
      'Implementing effective content discovery'
    ],
    whyChooseUs: [
      { title: 'Streaming Expertise', description: 'Built OTT platforms handling millions of concurrent viewers with zero buffering using adaptive bitrate streaming and multi-CDN redundancy.' },
      { title: 'Advanced CDN Network', description: 'Multi-CDN strategy with global edge nodes ensures sub-2-second start times and consistent video quality for viewers worldwide.' },
      { title: 'AI Content Discovery', description: 'Personalization engine analyzes viewing patterns to surface the right content at the right time, boosting watch time by up to 45%.' },
      { title: 'Comprehensive DRM', description: 'Widevine, PlayReady, and FairPlay DRM support across all devices with anti-piracy monitoring and watermarking.' }
    ],
    caseStudies: [
      {
        title: 'OTT Streaming Platform',
        description: 'Developed a Netflix-like entertainment platform with original content, live TV, and multi-device apps for a media conglomerate.',
        results: '10M+ hours of content streamed monthly'
      },
      {
        title: 'Live Sports Streaming',
        description: 'Built low-latency live streaming infrastructure for a national sports league with concurrent multi-match viewing.',
        results: '2M concurrent viewers at peak, <4s latency'
      },
      {
        title: 'Podcast & Audio Platform',
        description: 'Developed end-to-end podcast creation, hosting, and distribution platform with creator monetization tools.',
        results: '50K+ creator accounts, 5M monthly listeners'
      }
    ],
    faq: [
      {
        question: 'What video quality and formats do you support?',
        answer: 'We support 4K, HDR10, Dolby Vision, and adaptive bitrate streaming in HLS, DASH, and Smooth Streaming formats across all devices.'
      },
      {
        question: 'How do you handle content protection?',
        answer: 'We implement industry-standard DRM solutions including Widevine, PlayReady, and FairPlay, plus forensic watermarking to protect premium content.'
      },
      {
        question: 'Can the platform handle live events?',
        answer: 'Yes, our platform supports ultra-low latency live streaming with WebRTC and LL-HLS for sports, concerts, and live events with millions of concurrent viewers.'
      },
      {
        question: 'Do you support offline viewing and downloads?',
        answer: 'Yes, we implement secure DRM-protected downloads so subscribers can watch content offline on iOS and Android apps within license expiry windows.'
      },
      {
        question: 'How do you handle content licensing and geo-restrictions?',
        answer: 'Our rights management module automatically enforces geographic restrictions, blackout windows, and license term rules based on viewer IP location in real time.'
      }
    ],
    technologies: ['React', 'Node.js', 'FFmpeg', 'AWS Media Services', 'CDN']
  },

  // ─── 6. TRAVEL ──────────────────────────────────────────────────────────────
  {
    id: 'travel',
    slug: 'travel',
    name: 'Travel',
    icon: FaPlane,
    shortDescription: 'Digital solutions for travel and hospitality',
    description: 'Transform the travel experience with innovative technology. Booking systems, itinerary management, and personalized recommendations.',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#667eea',
    stats: [
      { value: '500K+', label: 'Annual Bookings' },
      { value: '40%', label: 'Less Abandonment' },
      { value: '150+', label: 'API Integrations' },
      { value: '98%', label: 'Uptime SLA' }
    ],
    services: [
      { name: 'Booking Management Systems', icon: FaCalendarAlt },
      { name: 'Travel Itinerary Planners', icon: FaMap },
      { name: 'Hotel Management Software', icon: FaHotel },
      { name: 'Flight Booking Platforms', icon: FaPlane },
      { name: 'Tour & Activity Booking', icon: FaTicketAlt },
      { name: 'Travel CRM Solutions', icon: FaUserTie }
    ],
    benefits: [
      'Seamless booking experience',
      'Real-time availability updates',
      'Personalized recommendations',
      'Multi-currency support',
      'Mobile-first solutions'
    ],
    process: [
      { step: '01', title: 'Travel Business Analysis & GDS Review', description: 'We analyze your booking flows, supplier contracts, and GDS relationships to design the optimal technical architecture.' },
      { step: '02', title: 'Booking Flow Design & API Architecture', description: 'Conversion-optimized booking UI, fare caching strategy, and API connectivity plan for flights, hotels, and activities.' },
      { step: '03', title: 'Development & Payment Integration', description: 'End-to-end booking engine, PCI-compliant payment processing, and integrations with Amadeus, Sabre, or Travelport.' },
      { step: '04', title: 'QA, Performance Testing & Launch', description: 'Fare accuracy testing, load testing for peak seasons, and post-launch analytics dashboards to optimize conversion.' }
    ],
    challenges: [
      'Managing real-time inventory across providers',
      'Handling complex pricing and availability',
      'Integrating multiple booking systems',
      'Providing 24/7 customer support'
    ],
    whyChooseUs: [
      { title: 'GDS Specialist', description: 'Native integrations with Amadeus, Sabre, and Travelport covering flights, hotels, car rentals, and activities globally.' },
      { title: 'AI Personalization', description: 'Recommendation engine analyzes past bookings and preferences to show travelers the most relevant options, boosting conversion by 35%.' },
      { title: 'Global Payment Support', description: '130+ currencies and 50+ payment methods including regional wallets — frictionless checkout for international travelers worldwide.' },
      { title: '24/7 Booking Engine', description: 'Always-on infrastructure with 99.9% SLA designed to handle traffic spikes during holiday and promotional periods seamlessly.' }
    ],
    caseStudies: [
      {
        title: 'Travel Booking Platform',
        description: 'Built a comprehensive multi-supplier booking system for a travel aggregator covering flights, hotels, and packages.',
        results: '500K+ bookings processed annually'
      },
      {
        title: 'Tour Operator Platform',
        description: 'B2C booking platform for an adventure travel operator with 200+ tours, dynamic packaging, and group booking management.',
        results: '60% increase in direct bookings vs. OTA'
      },
      {
        title: 'Corporate Travel Management',
        description: 'Developed TMC platform managing business travel policy compliance, approvals, and expense reporting for enterprise clients.',
        results: '25% reduction in travel spend per trip'
      }
    ],
    faq: [
      {
        question: 'Do you integrate with airline and hotel booking systems?',
        answer: 'Yes, we integrate with major GDS systems like Amadeus, Sabre, and Travelport, plus direct hotel chains, Booking.com, and activity booking APIs like Viator.'
      },
      {
        question: 'How do you handle payment processing?',
        answer: 'We support multiple payment gateways with PCI DSS compliance, supporting credit cards, digital wallets, BNPL, and local payment methods across 100+ countries.'
      },
      {
        question: 'Can travelers modify or cancel bookings?',
        answer: 'Yes, our self-service booking management module handles modifications, cancellations, and automated refund processing based on fare rules and supplier policies.'
      },
      {
        question: 'Do you support package booking (flight + hotel + transfers)?',
        answer: 'Yes, our dynamic packaging engine assembles custom travel packages from live inventory in real time, applying bundle discounts and presenting a single itinerary.'
      },
      {
        question: 'How do you handle multi-city and open-jaw itineraries?',
        answer: 'Our booking engine supports complex multi-city, open-jaw, and round-the-world itineraries with real-time fare combinations across multiple carriers and OTAs.'
      }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Payment Gateways', 'Google APIs']
  },

  // ─── 7. RETAIL ──────────────────────────────────────────────────────────────
  {
    id: 'retail',
    slug: 'retail',
    name: 'Retail',
    icon: FaShoppingBag,
    shortDescription: 'E-commerce and retail technology',
    description: 'Modernize retail operations with digital solutions. From e-commerce platforms to POS systems, we help retailers thrive in the digital age.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: '#4facfe',
    stats: [
      { value: '3x', label: 'Conversion Rate' },
      { value: '45%', label: 'Return Rate Down' },
      { value: '200+', label: 'Stores Served' },
      { value: '$10M+', label: 'Monthly Revenue' }
    ],
    services: [
      { name: 'E-Commerce Platforms', icon: FaShoppingCart },
      { name: 'POS Systems', icon: FaCashRegister },
      { name: 'Inventory Management', icon: FaBoxes },
      { name: 'Customer Loyalty Programs', icon: FaGift },
      { name: 'Omnichannel Solutions', icon: FaMobileAlt },
      { name: 'Retail Analytics', icon: FaChartLine }
    ],
    benefits: [
      'Increased online sales',
      'Better inventory visibility',
      'Enhanced customer experience',
      'Multi-channel integration',
      'Data-driven insights'
    ],
    process: [
      { step: '01', title: 'Retail Audit & Commerce Strategy', description: 'We audit your current channels, customer journey, and technology stack to define a unified commerce strategy.' },
      { step: '02', title: 'UX Design & Platform Selection', description: 'Conversion-optimized storefront design, platform recommendation (custom, Shopify, Magento), and integration planning.' },
      { step: '03', title: 'Development & POS Integration', description: 'Storefront, POS, inventory, and loyalty program development with real-time sync across all retail channels.' },
      { step: '04', title: 'Launch, A/B Testing & Optimization', description: 'Phased launch with A/B testing of key pages, SEO setup, performance monitoring, and ongoing conversion optimization.' }
    ],
    challenges: [
      'Synchronizing inventory across channels',
      'Managing omnichannel customer experience',
      'Handling peak traffic during sales',
      'Integrating online and offline operations'
    ],
    whyChooseUs: [
      { title: 'Omnichannel Mastery', description: 'Seamless experience across web, mobile, in-store, and social commerce with unified inventory and a single customer profile.' },
      { title: 'Conversion Experts', description: 'Data-driven UX, checkout optimization, and A/B testing consistently deliver 2–3x conversion rate improvements for our retail clients.' },
      { title: 'AI Personalization Engine', description: 'Product recommendations, dynamic pricing, and targeted promotions increase average order value by 35% and repeat purchase rates.' },
      { title: 'Peak Traffic Ready', description: 'Auto-scaling cloud infrastructure handles flash sales, Black Friday, and holiday traffic spikes without slowdowns or checkout failures.' }
    ],
    caseStudies: [
      {
        title: 'E-Commerce Platform',
        description: 'Built a modern online store with AR product visualization and AI recommendations for a fashion retailer.',
        results: '3x increase in online conversion rate'
      },
      {
        title: 'Omnichannel Retail Platform',
        description: 'Unified commerce platform for a 50-store fashion retailer, connecting online, in-store, and app channels.',
        results: '45% online revenue growth in 6 months'
      },
      {
        title: 'D2C Brand Launch',
        description: 'End-to-end D2C e-commerce experience for an FMCG brand entering the direct-to-consumer market.',
        results: '100K customers acquired in first 90 days'
      }
    ],
    faq: [
      {
        question: 'Can you integrate with existing POS systems?',
        answer: 'Yes, we provide integrations with major POS systems including Square, Lightspeed, and Shopify POS, plus custom integrations for proprietary retail systems.'
      },
      {
        question: 'How do you handle inventory synchronization?',
        answer: 'Our real-time inventory management system syncs across all channels within seconds, preventing overselling and automatically adjusting product availability.'
      },
      {
        question: 'Do you support multiple payment methods?',
        answer: 'Yes, we integrate with all major payment gateways and support credit cards, digital wallets, BNPL (Klarna, Afterpay), and local payment methods globally.'
      },
      {
        question: 'Do you support headless commerce?',
        answer: 'Yes, we build headless commerce architectures decoupling the frontend from the backend, giving you maximum flexibility for web, mobile, voice, and IoT shopping channels.'
      },
      {
        question: 'Can you integrate with our existing ERP and WMS?',
        answer: 'Absolutely. We provide bi-directional integrations with SAP, Oracle, NetSuite, and major WMS platforms for real-time inventory and order management synchronization.'
      }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Shopify']
  },

  // ─── 8. CONSTRUCTION ────────────────────────────────────────────────────────
  {
    id: 'construction',
    slug: 'construction',
    name: 'Construction',
    icon: FaHardHat,
    shortDescription: 'Construction management solutions',
    description: 'Build better with digital tools. Project management, resource planning, and site tracking solutions for modern construction.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#f093fb',
    stats: [
      { value: '50+', label: 'Projects Managed' },
      { value: '35%', label: 'Delay Reduction' },
      { value: '20%', label: 'Cost Savings' },
      { value: '99%', label: 'Safety Compliance' }
    ],
    services: [
      { name: 'Project Management Software', icon: FaBuilding },
      { name: 'Resource Planning Tools', icon: FaUsers },
      { name: 'Site Tracking & Monitoring', icon: FaMapMarkerAlt },
      { name: 'Document Management', icon: FaFileAlt },
      { name: 'Equipment Tracking', icon: FaTools },
      { name: 'Safety Compliance Tools', icon: FaHelmet }
    ],
    benefits: [
      'Improved project visibility',
      'Better resource utilization',
      'Reduced project delays',
      'Enhanced safety compliance',
      'Real-time progress tracking'
    ],
    process: [
      { step: '01', title: 'Site & Project Analysis', description: 'We assess your project types, stakeholder ecosystem, and existing tools to design a construction tech stack that fits your scale.' },
      { step: '02', title: 'System Architecture & BIM Integration', description: 'Cloud platform design, BIM data model integration, mobile-first field app wireframes, and IoT device connectivity plan.' },
      { step: '03', title: 'Development & Equipment Onboarding', description: 'Project management, document control, RFI, and punch list modules with QR/RFID equipment tracking and safety checklists.' },
      { step: '04', title: 'Field Testing & Full Rollout', description: 'Pilot on one active project with site supervisors, feedback-driven refinements, and company-wide rollout with training.' }
    ],
    challenges: [
      'Coordinating multiple stakeholders',
      'Managing complex project timelines',
      'Tracking equipment and materials',
      'Ensuring safety compliance on site'
    ],
    whyChooseUs: [
      { title: 'Construction-First Platform', description: 'Purpose-built for project managers, site supervisors, and subcontractors — not generic software awkwardly adapted for construction.' },
      { title: 'BIM & CAD Integration', description: 'Native connectors for Revit, AutoCAD, Navisworks, and Procore for seamless design-to-field workflows and clash detection.' },
      { title: 'Offline-First Mobile', description: 'Field apps work fully offline in areas with no connectivity, syncing automatically when back online without data loss.' },
      { title: 'Safety & Compliance Automation', description: 'Automated safety checklists, incident reporting, and real-time compliance dashboards reduce site accidents by up to 40%.' }
    ],
    caseStudies: [
      {
        title: 'Construction Management Platform',
        description: 'Comprehensive project management solution for a construction company managing 50+ active commercial projects simultaneously.',
        results: '50+ construction projects managed simultaneously'
      },
      {
        title: 'Infrastructure Project Tracker',
        description: 'Project management platform for a $500M highway infrastructure project with 200+ subcontractors and daily reporting.',
        results: 'Delivered 3 weeks ahead of schedule, 12% under budget'
      },
      {
        title: 'Safety Compliance System',
        description: 'Real-time safety monitoring and incident reporting system deployed across a construction conglomerate with 30 active sites.',
        results: '65% reduction in site incidents in 18 months'
      }
    ],
    faq: [
      {
        question: 'Does the system work offline on construction sites?',
        answer: 'Yes, our mobile app includes a robust offline mode with automatic sync when connection is restored — field data is never lost even in remote locations.'
      },
      {
        question: 'Can you integrate with BIM software?',
        answer: 'Absolutely. We provide integrations with Revit, AutoCAD, BIM 360, Navisworks, and Trimble for seamless design-to-field data flow.'
      },
      {
        question: 'How do you track equipment and materials?',
        answer: 'We use QR codes, RFID tags, and GPS tracking to monitor equipment location, utilization, and maintenance schedules in real time across all sites.'
      },
      {
        question: 'Does the system handle subcontractor management?',
        answer: 'Yes, subcontractors get their own portal to view assigned tasks, submit progress updates, upload documents, and communicate directly with the main contractor.'
      },
      {
        question: 'How does weather impact tracking work?',
        answer: 'We integrate with weather APIs to automatically log weather delays in project timelines, notify stakeholders, and generate updated completion date forecasts.'
      }
    ],
    technologies: ['React', 'Python', 'PostgreSQL', 'GPS Tracking', 'Cloud Storage']
  },

  // ─── 9. SPORTS ──────────────────────────────────────────────────────────────
  {
    id: 'sports',
    slug: 'sports',
    name: 'Sports',
    icon: FaBasketballBall,
    shortDescription: 'Sports technology and fan engagement',
    description: 'Engage fans and optimize performance with sports technology. From fan apps to performance analytics, we bring innovation to sports.',
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    color: '#30cfd0',
    stats: [
      { value: '1M+', label: 'Active Users' },
      { value: '50ms', label: 'Update Latency' },
      { value: '10+', label: 'Leagues Served' },
      { value: '99.99%', label: 'Event Uptime' }
    ],
    services: [
      { name: 'Fan Engagement Apps', icon: FaMobileAlt },
      { name: 'Sports Analytics Platforms', icon: FaChartLine },
      { name: 'Ticket Booking Systems', icon: FaTicketAlt },
      { name: 'Live Score Applications', icon: FaFutbol },
      { name: 'Fantasy Sports Platforms', icon: FaTrophy },
      { name: 'Athlete Performance Tracking', icon: FaMedal }
    ],
    benefits: [
      'Enhanced fan engagement',
      'Real-time statistics',
      'Better ticket sales',
      'Performance insights',
      'Social media integration'
    ],
    process: [
      { step: '01', title: 'Fan Engagement Strategy & Data Mapping', description: 'Define your fan personas, engagement goals, data sources, and monetization model for the platform.' },
      { step: '02', title: 'Real-Time Architecture Design', description: 'WebSocket data pipeline, CDN strategy, and scalability plan to handle millions of concurrent users during live events.' },
      { step: '03', title: 'App Development & API Integration', description: 'Fan app, admin dashboard, live scoring, fantasy game engine, and integrations with ticketing, broadcast, and stats providers.' },
      { step: '04', title: 'Game-Day Testing & Season Launch', description: 'Load testing at projected peak concurrent users, game-day monitoring playbook, and phased rollout with a pilot league.' }
    ],
    challenges: [
      'Delivering real-time scores and updates',
      'Engaging fans during and after games',
      'Managing high traffic during live events',
      'Providing personalized fan experiences'
    ],
    whyChooseUs: [
      { title: 'Sports Domain Veterans', description: 'Our team includes sports analytics and fan engagement specialists who understand the unique demands of live events and fantasy games.' },
      { title: 'Ultra-Low Latency', description: 'WebSocket-based data delivery with sub-100ms score updates — fans never experience a "spoiler moment" from social media before the app.' },
      { title: 'Game-Day Scalability', description: 'Cloud infrastructure auto-scales to handle 10x normal traffic during major tournaments and championship finals without degradation.' },
      { title: 'Gamification Specialists', description: 'Fantasy sports, prediction contests, leaderboards, and loyalty mechanics that keep fans engaged between live events year-round.' }
    ],
    caseStudies: [
      {
        title: 'Sports Fan App',
        description: 'Fan engagement platform for a major cricket league with live scores, fantasy game, and exclusive content.',
        results: '1M+ active users during cricket season'
      },
      {
        title: 'Daily Fantasy Sports Platform',
        description: 'Built a real-money daily fantasy platform with live scoring, prize pools, and responsible gaming features.',
        results: '5M registered users, 500K daily active players'
      },
      {
        title: 'Stadium Experience App',
        description: 'In-stadium companion app with AR player stats overlay, seat upgrades, food ordering, and instant replay.',
        results: '85% adoption rate among in-stadium attendees'
      }
    ],
    faq: [
      {
        question: 'How fast are live score updates?',
        answer: 'Our platform provides sub-100ms live score updates using WebSocket technology and edge computing for real-time fan engagement with no perceptible delay.'
      },
      {
        question: 'Can the system handle peak traffic during major events?',
        answer: 'Yes, our cloud infrastructure auto-scales dynamically to handle millions of concurrent users during major sporting events with 99.99% uptime SLA.'
      },
      {
        question: 'Do you support fantasy sports features?',
        answer: 'Yes, we build comprehensive fantasy sports platforms with live scoring, team management, trade mechanics, waiver systems, and prize distribution.'
      },
      {
        question: 'Do you integrate with wearable and fitness tracking devices?',
        answer: 'Yes, we connect with Garmin, Polar, Fitbit, Apple Watch, and custom sports wearables for athlete performance tracking and fan fitness challenges.'
      },
      {
        question: 'Can the platform handle multiple sports simultaneously?',
        answer: 'Absolutely. Our platform is sport-agnostic and can handle concurrent live events across football, cricket, basketball, tennis, and any other sport with the same infrastructure.'
      }
    ],
    technologies: ['React Native', 'Node.js', 'Redis', 'WebSocket', 'AWS']
  },

  // ─── 10. MARKETPLACE ────────────────────────────────────────────────────────
  {
    id: 'marketplace',
    slug: 'marketplace',
    name: 'Marketplace',
    icon: FaStore,
    shortDescription: 'Multi-vendor marketplace platforms',
    description: 'Build thriving marketplaces that connect buyers and sellers. Scalable platforms with robust features for multi-vendor success.',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    color: '#fa709a',
    stats: [
      { value: '10K+', label: 'Active Vendors' },
      { value: '$10M+', label: 'Monthly GMV' },
      { value: '4.7★', label: 'Average Rating' },
      { value: '99%', label: 'Payment Success' }
    ],
    services: [
      { name: 'Multi-Vendor Platforms', icon: FaStore },
      { name: 'Vendor Management Systems', icon: FaUserTie },
      { name: 'Payment Gateway Integration', icon: FaCreditCard },
      { name: 'Rating & Review Systems', icon: FaRating },
      { name: 'Order Management', icon: FaBoxes },
      { name: 'Analytics Dashboards', icon: FaChartPie }
    ],
    benefits: [
      'Scalable marketplace infrastructure',
      'Secure payment processing',
      'Vendor onboarding tools',
      'Advanced search & filters',
      'Commission management'
    ],
    process: [
      { step: '01', title: 'Marketplace Model & Monetization Design', description: 'Define your marketplace type (B2B/B2C/C2C), commission structure, trust mechanisms, and supplier acquisition strategy.' },
      { step: '02', title: 'Multi-Party Architecture & Payments', description: 'Scalable platform architecture, payment split design, escrow workflows, and search/discovery infrastructure planning.' },
      { step: '03', title: 'Vendor & Buyer Experience Build', description: 'Vendor dashboard, buyer app, search engine, order management, rating system, and fraud detection module development.' },
      { step: '04', title: 'Supplier Onboarding & Growth Launch', description: 'Seed vendor strategy, onboarding playbook, launch marketing integration, and performance dashboard for GMV tracking.' }
    ],
    challenges: [
      'Managing thousands of vendors and products',
      'Ensuring quality control across vendors',
      'Handling complex payment splits',
      'Providing fair dispute resolution'
    ],
    whyChooseUs: [
      { title: 'Marketplace Blueprint', description: 'Battle-tested architecture patterns from 50+ marketplace builds across B2B, B2C, and C2C models — we know what works at scale.' },
      { title: 'Revenue-First Design', description: 'Commission engines, subscription tiers, listing fees, and performance-based pricing — all configurable without any engineering changes.' },
      { title: 'Trust & Safety Built-In', description: 'AI-powered fraud detection, identity verification, review authenticity scoring, and structured dispute resolution workflows.' },
      { title: 'Vendor Success Tools', description: 'Onboarding wizards, analytics dashboards, inventory management, and promotional tools that help vendors list faster and sell more.' }
    ],
    caseStudies: [
      {
        title: 'Online Marketplace',
        description: 'Built a multi-category marketplace platform connecting 10,000+ vendors with millions of buyers.',
        results: '$10M+ in monthly transactions processed'
      },
      {
        title: 'B2B Industrial Marketplace',
        description: 'Built a procurement marketplace connecting industrial suppliers with manufacturers, with RFQ and bulk ordering.',
        results: '$25M+ in B2B transactions in year 1'
      },
      {
        title: 'Freelance Services Platform',
        description: 'Developed a professional services marketplace with escrow payments, milestone billing, and dispute resolution.',
        results: '80K freelancers onboarded in first 4 months'
      }
    ],
    faq: [
      {
        question: 'How do you handle vendor payments and commissions?',
        answer: 'Our platform automates payment splits, commission calculations, and vendor payouts on configurable schedules with complete transparency and tax reporting.'
      },
      {
        question: 'Can vendors manage their own stores?',
        answer: 'Yes, vendors get dedicated dashboards to manage products, orders, inventory, promotions, and analytics — fully white-labeled to your brand.'
      },
      {
        question: 'How do you prevent fraudulent sellers?',
        answer: 'We implement multi-level identity verification, automated fraud scoring, review authenticity checks, and chargeback protection to maintain marketplace quality.'
      },
      {
        question: 'How do you handle disputes between buyers and sellers?',
        answer: 'Our structured dispute resolution workflow allows evidence submission from both parties, mediator assignment, and automated refund processing based on resolution outcome.'
      },
      {
        question: 'Do you support international marketplace expansion?',
        answer: 'Yes, we handle multi-currency pricing, local payment methods, cross-border tax compliance, logistics integrations, and localized seller dashboards for global markets.'
      }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Elasticsearch']
  },

  // ─── 11. FINANCE ────────────────────────────────────────────────────────────
  {
    id: 'finance',
    slug: 'finance',
    name: 'Finance',
    icon: FaCreditCard,
    shortDescription: 'FinTech and banking solutions',
    description: 'Transform financial services with innovative technology. Secure, compliant, and user-friendly solutions for modern finance.',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#667eea',
    stats: [
      { value: '500K+', label: 'Active Users' },
      { value: '99.9%', label: 'Transaction Success' },
      { value: '$1B+', label: 'Processed Annually' },
      { value: '<0.1%', label: 'Fraud Rate' }
    ],
    services: [
      { name: 'Banking Applications', icon: FaWallet },
      { name: 'Payment Processing', icon: FaMoneyBillWave },
      { name: 'Investment Platforms', icon: FaChartLine },
      { name: 'Loan Management Systems', icon: FaFileInvoiceDollar },
      { name: 'Financial Analytics', icon: FaChartPie },
      { name: 'Compliance & Reporting', icon: FaFileSignature }
    ],
    benefits: [
      'Secure transactions',
      'Regulatory compliance',
      'Real-time analytics',
      'Advanced fraud detection',
      'Higher customer satisfaction'
    ],
    process: [
      { step: '01', title: 'Regulatory & Compliance Analysis', description: 'We map all applicable regulations (PCI DSS, SOC 2, RBI, FCA), KYC/AML requirements, and open banking obligations.' },
      { step: '02', title: 'Security Architecture & Core System Design', description: 'Zero-trust security model, HSM-backed key management, microservices architecture, and payment rail connectivity plan.' },
      { step: '03', title: 'Development & Payment Rail Integration', description: 'Core banking module development with integrations to UPI, IMPS, SWIFT, ACH, SEPA, and card network processors.' },
      { step: '04', title: 'Security Audit & Regulated Launch', description: 'Penetration testing, regulatory sandbox testing, central bank approval coordination, and phased customer onboarding.' }
    ],
    challenges: [
      'Meeting strict regulatory requirements',
      'Ensuring transaction security',
      'Preventing fraud and money laundering',
      'Providing real-time transaction processing'
    ],
    whyChooseUs: [
      { title: 'Regulatory Expertise', description: 'In-depth knowledge of PCI DSS, SOC 2, GDPR, RBI, FCA, and regional banking regulations across 20+ markets worldwide.' },
      { title: 'Bank-Grade Security', description: 'HSM-backed encryption, tokenization, and multi-layered fraud prevention that exceeds central bank and card network security standards.' },
      { title: 'Real-Time Processing', description: 'Sub-200ms transaction processing with instant settlement support for UPI, IMPS, and modern payment networks.' },
      { title: 'Open Banking Ready', description: 'OAuth 2.0-secured Open Banking APIs for account aggregation, payment initiation, and financial data sharing under AA/PSD2 frameworks.' }
    ],
    caseStudies: [
      {
        title: 'Digital Banking Platform',
        description: 'Built a mobile-first neobank app for a regional bank with accounts, cards, payments, and AI-powered financial insights.',
        results: '500K+ active users in 12 months'
      },
      {
        title: 'Investment Platform',
        description: 'Built a robo-advisory and direct stock trading platform for retail investors with SIP automation and goal-based investing.',
        results: '₹500Cr AUM reached in 12 months'
      },
      {
        title: 'Digital Lending App',
        description: 'AI credit scoring and instant loan disbursement platform for an NBFC with bureau integration and e-sign workflows.',
        results: '10,000 loans per month, 30-second approval time'
      }
    ],
    faq: [
      {
        question: 'How do you ensure transaction security?',
        answer: 'We implement end-to-end encryption, multi-factor authentication, tokenization, and real-time ML fraud detection to secure all financial transactions.'
      },
      {
        question: 'Are your solutions compliant with financial regulations?',
        answer: 'Yes, we ensure compliance with PCI DSS, SOC 2, GDPR, RBI guidelines, FCA regulations, and regional banking requirements with regular compliance audits.'
      },
      {
        question: 'Can you integrate with existing banking systems?',
        answer: 'Absolutely. We have deep experience integrating with core banking systems (Finacle, T24, Mambu), payment processors, and financial data aggregators.'
      },
      {
        question: 'Do you support open banking and account aggregation?',
        answer: 'Yes, we build open banking solutions compliant with the RBI Account Aggregator framework, PSD2, and similar regulations for seamless financial data sharing.'
      },
      {
        question: 'Can you integrate with UPI, SWIFT, and ACH payment networks?',
        answer: 'Absolutely. We provide native integrations with UPI, IMPS, SWIFT, ACH, SEPA, and local payment rails across India, US, EU, and Southeast Asia.'
      }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Blockchain', 'AWS']
  },

  // ─── 12. SOCIAL MEDIA ───────────────────────────────────────────────────────
  {
    id: 'social-media',
    slug: 'social-media',
    name: 'Social Media',
    icon: FaInstagram,
    shortDescription: 'Social networking and community platforms',
    description: 'Build engaging social platforms that connect people. From social networks to community forums, we create spaces for meaningful interaction.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: '#4facfe',
    stats: [
      { value: '2M+', label: 'Registered Users' },
      { value: '50M+', label: 'Monthly Posts' },
      { value: '99%', label: 'Platform Uptime' },
      { value: '<3s', label: 'Global Load Time' }
    ],
    services: [
      { name: 'Social Network Development', icon: FaUserFriends },
      { name: 'Community Forums', icon: FaComments },
      { name: 'Real-time Chat Systems', icon: FaComment },
      { name: 'Content Management', icon: FaFileAlt },
      { name: 'User Authentication', icon: FaCheckCircle },
      { name: 'Moderation Tools', icon: FaShieldAlt }
    ],
    benefits: [
      'Real-time interactions',
      'Scalable infrastructure',
      'AI content moderation',
      'User engagement tools',
      'Analytics & insights'
    ],
    process: [
      { step: '01', title: 'Community & Content Strategy', description: 'Define your target community, engagement loops, content policy, moderation philosophy, and growth mechanics.' },
      { step: '02', title: 'Social Graph & Feed Architecture', description: 'Graph database design, feed ranking algorithm, notification system, and real-time messaging infrastructure.' },
      { step: '03', title: 'Full Platform Development', description: 'Web and mobile apps, creator tools, moderation dashboard, analytics suite, and monetization feature development.' },
      { step: '04', title: 'Moderation Setup & Public Launch', description: 'Train moderation AI, onboard seed community, implement community guidelines, and execute growth launch strategy.' }
    ],
    challenges: [
      'Moderating user-generated content',
      'Scaling to millions of users',
      'Preventing spam and abuse',
      'Maintaining user engagement'
    ],
    whyChooseUs: [
      { title: 'Viral Product Design', description: 'Engagement mechanics, notification strategies, and feed algorithms designed to maximize daily active users and time spent on platform.' },
      { title: 'AI Content Moderation', description: 'NLP and computer vision models catch harmful content before it goes live, reducing manual moderation workload by 80%.' },
      { title: 'Real-Time Messaging', description: 'WebSocket and push notification infrastructure delivering instant message delivery to millions of users simultaneously at scale.' },
      { title: 'Creator Economy Tools', description: 'Built-in monetization features including tipping, subscriptions, exclusive content, and brand partnership management dashboards.' }
    ],
    caseStudies: [
      {
        title: 'Niche Social Platform',
        description: 'Developed a professional social network for a specific vertical industry with matching, feeds, and groups.',
        results: '2M+ registered users in first year'
      },
      {
        title: 'Professional Network',
        description: 'LinkedIn-inspired platform for creative professionals with portfolio showcasing and collaboration tools.',
        results: '500K professionals joined in first 6 months'
      },
      {
        title: 'Short-Form Video Platform',
        description: 'Creator platform with AI feed algorithm, real-time comments, live streaming, and creator monetization.',
        results: '2M creators, 100M+ monthly video views'
      }
    ],
    faq: [
      {
        question: 'How do you handle content moderation?',
        answer: 'We implement AI-powered moderation combining NLP and image recognition with human review queues, appeals workflows, and community reporting tools.'
      },
      {
        question: 'Can the platform scale to millions of users?',
        answer: 'Yes, our microservices architecture and auto-scaling cloud infrastructure can support millions of concurrent users across feeds, chat, and live streaming.'
      },
      {
        question: 'Do you support real-time notifications?',
        answer: 'Yes, we implement push notifications, in-app real-time alerts, and email digests with user-configurable frequency and notification type preferences.'
      },
      {
        question: 'How do you ensure GDPR compliance for user data?',
        answer: 'We build with privacy-by-design principles — data minimization, consent management, right-to-erasure workflows, and data portability APIs fully implemented from launch.'
      },
      {
        question: 'Can users monetize their content on the platform?',
        answer: 'Yes, we build creator economy features including subscriptions, content tipping, pay-per-view, brand deal matching, and transparent revenue sharing with payout dashboards.'
      }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'Redis']
  },

  // ─── 13. INSURANCE ──────────────────────────────────────────────────────────
  {
    id: 'insurance',
    slug: 'insurance',
    name: 'Insurance',
    icon: FaShieldAlt,
    shortDescription: 'Insurance technology solutions',
    description: 'Modernize insurance operations with digital solutions. From policy management to claims processing, streamline your insurance business.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#f093fb',
    stats: [
      { value: '100K+', label: 'Policies Managed' },
      { value: '85%', label: 'Faster Claims' },
      { value: '60%', label: 'Fraud Reduction' },
      { value: '4.5★', label: 'Customer NPS' }
    ],
    services: [
      { name: 'Policy Management Systems', icon: FaFileAlt },
      { name: 'Claims Processing Automation', icon: FaClipboardCheck },
      { name: 'Underwriting Platforms', icon: FaCalculator },
      { name: 'Customer Portals', icon: FaUsers },
      { name: 'Risk Assessment Tools', icon: FaChartLine },
      { name: 'Insurance Analytics', icon: FaChartPie }
    ],
    benefits: [
      'Faster claims processing',
      'Automated underwriting',
      'Better risk assessment',
      'Improved customer service',
      'Regulatory compliance'
    ],
    process: [
      { step: '01', title: 'Insurance Workflow & Compliance Mapping', description: 'We map your policy lifecycle, claims process, and compliance requirements across all applicable insurance regulations.' },
      { step: '02', title: 'Core System Architecture & Data Design', description: 'Policy data model, actuarial integration design, claims routing logic, and third-party data source connectivity.' },
      { step: '03', title: 'Development & Data Source Integration', description: 'Policy issuance, underwriting, claims, and customer portal modules with integrations to IIB, MCA, vehicle databases, and hospital networks.' },
      { step: '04', title: 'Regulatory Approval & Phased Launch', description: 'IRDAI/regulatory filing for product approval, sandbox testing, UAT with real policies, and controlled market launch.' }
    ],
    challenges: [
      'Processing claims quickly and accurately',
      'Assessing risk effectively',
      'Managing regulatory compliance',
      'Preventing insurance fraud'
    ],
    whyChooseUs: [
      { title: 'AI Risk Assessment', description: 'Machine learning models analyze 200+ risk signals to automate underwriting decisions and price policies with actuarial accuracy.' },
      { title: 'Automated Claims Engine', description: 'Intelligent claims routing, OCR document extraction, and ML fraud scoring enable straight-through processing for simple claims in minutes.' },
      { title: 'Regulatory Compliance', description: 'Built-in compliance for IRDAI, FCA, NAIC, and state insurance requirements with automated regulatory reporting and product filing support.' },
      { title: 'Third-Party Integrations', description: 'Pre-built connectors to IIB, MCA, vehicle databases, hospital networks, and financial aggregators for real-time risk data.' }
    ],
    caseStudies: [
      {
        title: 'Insurance Management Platform',
        description: 'Built a comprehensive policy and claims management system for a multi-line insurer covering health, motor, and property.',
        results: '100K+ policies managed on the platform'
      },
      {
        title: 'Auto Insurance Telematics App',
        description: 'Usage-based insurance mobile app with telematics scoring, in-app claims reporting, and instant policy issuance.',
        results: '35% lower claims ratio through driver behavior scoring'
      },
      {
        title: 'Digital Life Insurance Portal',
        description: 'End-to-end digital underwriting, e-sign, and policy issuance portal reducing policy turnaround from 7 days to minutes.',
        results: 'Policy issuance in under 20 minutes end-to-end'
      }
    ],
    faq: [
      {
        question: 'How fast can claims be processed?',
        answer: 'Our automated system can process simple claims in minutes, with document OCR, fraud scoring, and pre-populated adjuster notes for complex claims.'
      },
      {
        question: 'Do you support multiple insurance types?',
        answer: 'Yes, our platform supports life, health, motor, property, travel, and commercial insurance with fully configurable workflows per product line.'
      },
      {
        question: 'How do you detect fraudulent claims?',
        answer: 'We use ML models that analyze claim patterns, cross-reference IIB/insurance databases, and flag suspicious claims with a risk score for investigator review.'
      },
      {
        question: 'Do you support telematics and IoT for usage-based insurance?',
        answer: 'Yes, we integrate with OBD devices, smartphone telematics, and IoT sensors to capture driving or asset usage data for UBI and parametric insurance products.'
      },
      {
        question: 'How does your platform handle regulatory filing?',
        answer: 'Our compliance module auto-generates forms, rate filings, and actuarial reports required by insurance regulators, reducing compliance overhead by up to 70%.'
      }
    ],
    technologies: ['React', 'Python', 'PostgreSQL', 'AI/ML', 'AWS']
  },

  // ─── 14. MANUFACTURING ──────────────────────────────────────────────────────
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Manufacturing',
    icon: FaIndustry,
    shortDescription: 'Industry 4.0 and smart manufacturing',
    description: 'Transform manufacturing with Industry 4.0 solutions. IoT, automation, and analytics for smarter production.',
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    color: '#30cfd0',
    stats: [
      { value: '40%', label: 'Productivity Gain' },
      { value: '60%', label: 'Less Downtime' },
      { value: '30%', label: 'Energy Savings' },
      { value: '100+', label: 'Machines Connected' }
    ],
    services: [
      { name: 'Production Planning Systems', icon: FaCogs },
      { name: 'Quality Management', icon: FaClipboardCheck },
      { name: 'IoT & Automation', icon: FaRobot },
      { name: 'Inventory Control', icon: FaBoxes },
      { name: 'Predictive Maintenance', icon: FaTools },
      { name: 'Supply Chain Integration', icon: FaTruck }
    ],
    benefits: [
      'Improved production efficiency',
      'Reduced downtime',
      'Better quality control',
      'Real-time monitoring',
      'Cost optimization'
    ],
    process: [
      { step: '01', title: 'Factory Floor Assessment & OT/IT Analysis', description: 'We assess your equipment, communication protocols, OT infrastructure, and data maturity to build a practical Industry 4.0 roadmap.' },
      { step: '02', title: 'IoT Architecture & Connectivity Design', description: 'Gateway device selection, protocol mapping (OPC-UA, MQTT, Modbus), cloud data pipeline, and digital twin architecture.' },
      { step: '03', title: 'Platform Development & Machine Onboarding', description: 'MES development, predictive maintenance models, quality vision system, and OEE dashboards with phased machine onboarding.' },
      { step: '04', title: 'Go-Live & Continuous Optimization', description: 'Parallel run with existing systems, operator training, anomaly detection tuning, and quarterly model retraining cycles.' }
    ],
    challenges: [
      'Integrating legacy manufacturing equipment',
      'Collecting and analyzing IoT data at scale',
      'Minimizing production downtime',
      'Maintaining product quality consistency'
    ],
    whyChooseUs: [
      { title: 'Industry 4.0 Pioneer', description: 'Delivered 30+ Industry 4.0 transformation projects connecting legacy equipment with modern cloud analytics platforms.' },
      { title: 'Deep IoT Expertise', description: 'Protocol-agnostic gateway solutions supporting OPC-UA, MQTT, Modbus, Profibus, and proprietary machine communication standards.' },
      { title: 'Predictive AI Models', description: 'LSTM-based failure prediction models achieving 92% accuracy, giving maintenance teams 48+ hours of advance warning to prevent failures.' },
      { title: 'Real-Time OEE Monitoring', description: 'Sub-second sensor data processing with customizable OEE dashboards for production managers, quality teams, and plant executives.' }
    ],
    caseStudies: [
      {
        title: 'Smart Factory Solution',
        description: 'IoT-based manufacturing intelligence platform connecting 100+ machines across 3 plants for a precision parts manufacturer.',
        results: '40% increase in overall equipment effectiveness (OEE)'
      },
      {
        title: 'Vision Quality Control System',
        description: 'Computer vision defect detection system deployed on an automotive parts production line with real-time rejection.',
        results: '99.8% defect detection accuracy, 80% less manual inspection'
      },
      {
        title: 'Supply Chain Visibility Platform',
        description: 'End-to-end supply chain tracking from supplier to finished goods for a major electronics manufacturer.',
        results: '50% reduction in excess safety stock inventory'
      }
    ],
    faq: [
      {
        question: 'Can you connect to existing manufacturing equipment?',
        answer: 'Yes, we provide IoT gateways with adapters for OPC-UA, MQTT, Modbus, Profibus, and proprietary protocols to connect legacy equipment to our cloud platform without replacement.'
      },
      {
        question: 'How does predictive maintenance work?',
        answer: 'Our AI analyzes vibration, temperature, and operational sensor data using LSTM models to predict equipment failures 24–72 hours before they occur, enabling planned maintenance.'
      },
      {
        question: 'Is real-time monitoring available?',
        answer: 'Yes, we provide live OEE dashboards showing real-time production metrics, equipment status, quality reject rates, and energy consumption with configurable alerts.'
      },
      {
        question: 'Can you integrate with our existing ERP system (SAP, Oracle)?',
        answer: 'Yes, we have certified integrations with SAP MES, Oracle Manufacturing Cloud, and custom ERP systems for real-time production order and material data exchange.'
      },
      {
        question: 'How do you monitor energy consumption across the factory?',
        answer: 'We integrate with smart meters and SCADA energy management systems to track consumption per machine, line, and shift — enabling targeted 20–30% energy cost reductions.'
      }
    ],
    technologies: ['React', 'Python', 'IoT Devices', 'MongoDB', 'Azure']
  },

  // ─── 15. IT & TELECOM ───────────────────────────────────────────────────────
  {
    id: 'it-telecom',
    slug: 'it-telecom',
    name: 'IT & Telecom',
    icon: FaWifi,
    shortDescription: 'Telecom and IT infrastructure solutions',
    description: 'Build the backbone of digital communication. Network management, service provisioning, and customer management solutions for telecom operators.',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    color: '#fa709a',
    stats: [
      { value: '1M+', label: 'Subscribers Served' },
      { value: '99.99%', label: 'Network Uptime' },
      { value: '50%', label: 'Billing Error Reduction' },
      { value: '24/7', label: 'Support Coverage' }
    ],
    services: [
      { name: 'Network Management Systems', icon: FaNetworkWired },
      { name: 'Service Provisioning', icon: FaCogs },
      { name: 'Billing & Revenue Management', icon: FaFileInvoiceDollar },
      { name: 'Customer Care Platforms', icon: FaHeadset },
      { name: 'Telecom Analytics', icon: FaChartLine },
      { name: 'OSS/BSS Solutions', icon: FaSignal }
    ],
    benefits: [
      'Network optimization',
      'Improved service delivery',
      'Accurate billing',
      'Better customer support',
      'Real-time monitoring'
    ],
    process: [
      { step: '01', title: 'Network Audit & OSS/BSS Assessment', description: 'We assess your current OSS/BSS stack, network topology, billing system, and customer data architecture for gap analysis.' },
      { step: '02', title: 'Architecture Design & Vendor Selection', description: 'ETSI-compliant OSS/BSS architecture, mediation system design, API gateway, and carrier-grade reliability blueprint.' },
      { step: '03', title: 'Platform Development & Network Integration', description: 'Network management, provisioning, mediation, rating, billing, and customer care modules with NMS/EMS integrations.' },
      { step: '04', title: 'Parallel Running & Traffic Cutover', description: 'Parallel billing validation, subscriber migration in waves, fallback procedures, and 24/7 cutover support.' }
    ],
    challenges: [
      'Managing complex network infrastructure',
      'Accurate billing for diverse services',
      'Minimizing network downtime',
      'Providing 24/7 customer support'
    ],
    whyChooseUs: [
      { title: 'Carrier-Grade Reliability', description: 'Five-nines (99.999%) uptime architecture with geographic redundancy, automatic failover, and zero-maintenance deployment capabilities.' },
      { title: 'OSS/BSS Specialists', description: 'Deep expertise in ETSI-compliant OSS/BSS stacks with pre-built adapters for major NMS, EMS, and mediation platform vendors.' },
      { title: '5G-Ready Architecture', description: 'Network management and charging solutions designed for 5G network slicing, edge computing, and massive IoT subscriber management.' },
      { title: 'Revenue Assurance', description: 'Real-time mediation, reconciliation, and usage leakage detection ensuring every byte of usage is accurately rated and billed.' }
    ],
    caseStudies: [
      {
        title: 'Telecom Management Platform',
        description: 'Built a comprehensive network management and BSS solution for a regional mobile operator covering 1M+ subscribers.',
        results: 'Serving 1M+ subscribers with 99.99% uptime'
      },
      {
        title: '5G Network Management Platform',
        description: 'OSS platform for managing 5G network rollout, configuration, and performance monitoring for a tier-1 mobile operator.',
        results: '60% faster provisioning, 3M subscribers migrated'
      },
      {
        title: 'Cloud UCaaS Platform',
        description: 'Cloud-based unified communications platform for enterprise customers with voice, video, messaging, and contact center.',
        results: '10,000 enterprise seats, 99.99% call quality SLA'
      }
    ],
    faq: [
      {
        question: 'Can you integrate with existing telecom infrastructure?',
        answer: 'Yes, we have extensive experience integrating with OSS/BSS systems, NMS/EMS platforms, and legacy mediation systems from Amdocs, Ericsson, Nokia, and custom platforms.'
      },
      {
        question: 'How do you ensure billing accuracy?',
        answer: 'Our mediation system validates every CDR in real time, with reconciliation tools and automated discrepancy detection to ensure revenue assurance across all services.'
      },
      {
        question: 'Do you support prepaid and postpaid models?',
        answer: 'Yes, our convergent charging system supports prepaid (OCS), postpaid (offline charging), and hybrid models with configurable rating and flexible billing cycles.'
      },
      {
        question: 'Do you support number portability and regulatory reporting?',
        answer: 'Yes, we have built-in MNP management, TRAI/FCC regulatory reporting, lawful intercept interfaces, and QoS monitoring compliant with local telecom regulations.'
      },
      {
        question: 'Can your solution handle 5G network slicing?',
        answer: 'Absolutely. Our platform supports dynamic 5G network slice creation, lifecycle management, SLA monitoring, and per-slice billing for enterprise private network deployments.'
      }
    ],
    technologies: ['React', 'Java', 'Oracle', 'Kafka', 'Microservices']
  },

  // ─── 16. BEAUTY & LIFESTYLE ─────────────────────────────────────────────────
  {
    id: 'beauty-lifestyle',
    slug: 'beauty-lifestyle',
    name: 'Beauty & Lifestyle',
    icon: FaSpa,
    shortDescription: 'Beauty and wellness technology',
    description: 'Enhance beauty and wellness businesses with digital solutions. Booking systems, inventory management, and customer engagement tools.',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#667eea',
    stats: [
      { value: '50K+', label: 'Monthly Bookings' },
      { value: '80%', label: 'No-Show Reduction' },
      { value: '35%', label: 'Revenue Growth' },
      { value: '4.8★', label: 'App Store Rating' }
    ],
    services: [
      { name: 'Salon Booking Systems', icon: FaCalendarAlt },
      { name: 'Inventory Management', icon: FaBoxes },
      { name: 'Customer Loyalty Programs', icon: FaGift },
      { name: 'E-Commerce Platforms', icon: FaShoppingCart },
      { name: 'Virtual Try-On Solutions', icon: FaCamera },
      { name: 'CRM Systems', icon: FaUsers }
    ],
    benefits: [
      'Streamlined bookings',
      'Better customer retention',
      'Inventory optimization',
      'Online sales growth',
      'Enhanced customer experience'
    ],
    process: [
      { step: '01', title: 'Business Workflow & Journey Mapping', description: 'We map your client booking flow, staff scheduling, inventory processes, and customer retention pain points.' },
      { step: '02', title: 'Booking System & POS Architecture', description: 'Platform design with real-time slot management, POS integration, loyalty engine, and mobile app wireframes.' },
      { step: '03', title: 'App Development & Loyalty Program Build', description: 'Client-facing booking app, staff app, POS, inventory management, CRM, and AR virtual try-on feature development.' },
      { step: '04', title: 'Staff Training & Location Launch', description: 'Staff onboarding, data migration from existing tools, pilot location launch, and rollout across all outlets.' }
    ],
    challenges: [
      'Managing appointment schedules efficiently',
      'Tracking product inventory accurately',
      'Building long-term customer loyalty',
      'Providing personalized recommendations'
    ],
    whyChooseUs: [
      { title: 'Beauty Industry Specialists', description: 'Platform tailored for salons, spas, wellness clinics, and medi-spas with workflows built around beauty service delivery.' },
      { title: 'AR Virtual Try-On', description: 'Advanced augmented reality for makeup, hair color, and skincare products — increase purchase confidence and reduce product returns.' },
      { title: 'Loyalty & Retention Engine', description: 'Points, rewards, referral programs, and automated re-booking reminders that increase client lifetime value by an average of 3x.' },
      { title: 'All-In-One Platform', description: 'Booking, POS, inventory, staff scheduling, and CRM in one unified system — no more juggling five separate tools.' }
    ],
    caseStudies: [
      {
        title: 'Beauty Booking Platform',
        description: 'Appointment booking and client management platform for a salon chain with 200+ stylists.',
        results: '50K+ appointments booked monthly'
      },
      {
        title: 'Multi-Location Spa Chain',
        description: 'Unified booking and operations platform for a 25-location day spa chain with loyalty and gift card programs.',
        results: '65% online booking rate, $2M additional annual revenue'
      },
      {
        title: 'Beauty Product Marketplace',
        description: 'D2C marketplace for indie beauty brands with AR virtual try-on and subscriptions for replenishment products.',
        results: '40% conversion lift from AR feature, 10K+ products listed'
      }
    ],
    faq: [
      {
        question: 'Does the booking system send reminders?',
        answer: 'Yes, our system sends automated SMS and email reminders at configurable intervals (24h, 2h before) to reduce no-shows and keep clients informed.'
      },
      {
        question: 'Can clients book services online?',
        answer: 'Absolutely. Clients can book appointments 24/7 through your website, mobile app, or social media integrations with real-time stylist and slot availability.'
      },
      {
        question: 'How does the virtual try-on work?',
        answer: 'We use ARKit/ARCore-based face tracking to let customers virtually try makeup shades, hair colors, and accessories using their device camera in real time.'
      },
      {
        question: 'Does the system handle staff scheduling and payroll?',
        answer: 'Yes, our staff management module handles shift scheduling, time tracking, commission calculations per service, and integrates with major payroll systems.'
      },
      {
        question: 'Can clients purchase products through the platform?',
        answer: 'Absolutely. Our e-commerce module lets you sell retail products and gift cards alongside services, with inventory sync between your physical store and online shop.'
      }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AR/VR', 'Stripe']
  },

  // ─── 17. ON DEMAND ──────────────────────────────────────────────────────────
  {
    id: 'on-demand',
    slug: 'on-demand',
    name: 'On Demand',
    icon: FaStar,
    shortDescription: 'On-demand service platforms',
    description: 'Build on-demand platforms that connect service providers with customers. Real-time matching, tracking, and payment solutions.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: '#4facfe',
    stats: [
      { value: '100K+', label: 'Service Providers' },
      { value: '<5min', label: 'Avg Response Time' },
      { value: '4.7★', label: 'Provider Rating' },
      { value: '95%', label: 'Job Completion Rate' }
    ],
    services: [
      { name: 'Service Marketplace Platforms', icon: FaStore },
      { name: 'Real-time Matching Algorithms', icon: FaUsers },
      { name: 'GPS Tracking Systems', icon: FaMapMarkerAlt },
      { name: 'Payment Integration', icon: FaCreditCard },
      { name: 'Rating & Review Systems', icon: FaRating },
      { name: 'Multi-sided Platforms', icon: FaHandshake }
    ],
    benefits: [
      'Real-time service matching',
      'Efficient operations',
      'Scalable platform',
      'Secure payments',
      'Quality assurance'
    ],
    process: [
      { step: '01', title: 'Service Category & Matching Logic Design', description: 'Define service categories, geographic scope, matching criteria, pricing model, and provider onboarding requirements.' },
      { step: '02', title: 'Multi-sided Platform Architecture', description: 'Two-sided marketplace architecture, real-time matching engine, payment split design, and surge pricing logic.' },
      { step: '03', title: 'Provider & Customer App Development', description: 'Consumer app, provider app, dispatcher dashboard, real-time tracking, in-app payments, and rating system development.' },
      { step: '04', title: 'City Launch & Growth Operations', description: 'Seed supply strategy, provider onboarding drive, launch city rollout, and demand-supply balancing operations support.' }
    ],
    challenges: [
      'Matching supply with demand in real-time',
      'Ensuring consistent service quality',
      'Managing peak demand periods',
      'Balancing pricing and provider availability'
    ],
    whyChooseUs: [
      { title: 'Marketplace DNA', description: 'Built 20+ on-demand platforms — we bring proven matching algorithms, surge pricing models, and operations frameworks from day one.' },
      { title: 'Real-Time GPS Precision', description: 'Hyper-accurate provider tracking with ETAs, route visualization, and live status updates that reduce customer anxiety and cancellations.' },
      { title: 'Dynamic Pricing Engine', description: 'Surge pricing, demand-based rate adjustment, and promotional pricing rules — all configurable in real time without code changes.' },
      { title: 'Background Verification', description: 'Integrated KYC, criminal background check APIs, and document verification workflows to onboard trusted providers at scale.' }
    ],
    caseStudies: [
      {
        title: 'On-Demand Home Services Platform',
        description: 'Uber-like platform for home cleaning, plumbing, and electrical services across 5 metro cities.',
        results: '100K+ service providers onboarded'
      },
      {
        title: 'Hyperlocal Food Delivery',
        description: 'Built a hyperlocal food delivery app connecting 500+ restaurants with customers in 5 cities.',
        results: '50K daily orders, <30 min average delivery time'
      },
      {
        title: 'Home Services App',
        description: 'On-demand home maintenance platform with real-time booking, live tracking, and in-app payment escrow.',
        results: '25K jobs completed monthly, 4.8★ average rating'
      }
    ],
    faq: [
      {
        question: 'How does the matching algorithm work?',
        answer: 'Our algorithm considers provider location, availability, skills, ratings, acceptance rate, and customer preferences to match the best provider in real time within seconds.'
      },
      {
        question: 'Can service providers set their own rates?',
        answer: 'Yes, providers can set base rates within platform guidelines, while the system can apply dynamic surge pricing based on demand, time of day, and zone availability.'
      },
      {
        question: 'How do you ensure service quality?',
        answer: 'We implement mandatory rating systems, customer reviews, background checks, automated quality monitoring, and provider deactivation thresholds to maintain high standards.'
      },
      {
        question: 'How does surge pricing work?',
        answer: 'Our dynamic pricing engine automatically increases rates when demand exceeds supply in specific geofenced zones, incentivizing more providers to come online while balancing demand.'
      },
      {
        question: 'Do service providers need insurance?',
        answer: 'We integrate with insurance APIs to offer providers in-app liability coverage options and can build mandatory insurance verification into the onboarding and activation flow.'
      }
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps', 'Stripe']
  },

  // ─── 18. E-COMMERCE ─────────────────────────────────────────────────────────
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    name: 'E-Commerce',
    icon: FaShoppingCart,
    shortDescription: 'Full-stack e-commerce solutions',
    description: 'Build powerful e-commerce platforms that drive sales. From storefronts to payment processing, complete e-commerce solutions.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#f093fb',
    stats: [
      { value: '$50M+', label: 'Revenue Driven' },
      { value: '3x', label: 'Conversion Rate' },
      { value: '45%', label: 'Mobile Sales Share' },
      { value: '99.9%', label: 'Checkout Success' }
    ],
    services: [
      { name: 'E-Commerce Website Development', icon: FaShoppingCart },
      { name: 'Mobile Commerce Apps', icon: FaMobileAlt },
      { name: 'Payment Gateway Integration', icon: FaCreditCard },
      { name: 'Inventory Management', icon: FaBoxes },
      { name: 'Order Fulfillment', icon: FaTruck },
      { name: 'Marketing Automation', icon: FaBullhorn }
    ],
    benefits: [
      'Increased online sales',
      'Better conversion rates',
      'Seamless checkout experience',
      'Multi-channel selling',
      'Actionable customer insights'
    ],
    process: [
      { step: '01', title: 'Commerce Audit & Platform Strategy', description: 'We audit your current commerce setup, target audience, and competition to define the optimal platform and architecture.' },
      { step: '02', title: 'UX Design & Tech Stack Selection', description: 'Conversion-optimized storefront design, platform selection (custom/Shopify/Magento), and integration architecture.' },
      { step: '03', title: 'Development & Marketplace Integration', description: 'Storefront, product catalog, cart, checkout, and marketing automation development with marketplace and ERP integrations.' },
      { step: '04', title: 'Performance Optimization & Launch', description: 'Core Web Vitals optimization, payment gateway testing, SEO setup, analytics, and post-launch conversion rate optimization.' }
    ],
    challenges: [
      'Converting visitors into customers',
      'Managing large product catalogs',
      'Providing fast and secure checkout',
      'Handling returns and refunds efficiently'
    ],
    whyChooseUs: [
      { title: 'Revenue-Driven Architecture', description: 'Every decision — page speed, checkout flow, personalization — is optimized for conversion rate and revenue per visitor.' },
      { title: 'Mobile Commerce First', description: 'Progressive Web Apps, native mobile apps, and AMP pages ensure a best-in-class shopping experience for mobile-first customers.' },
      { title: 'Platform Agnostic', description: 'We build on custom React storefronts, Shopify, Magento, or WooCommerce — whichever fits your business model, budget, and scale.' },
      { title: 'Growth-Focused Integrations', description: 'Pre-built connectors for Google Ads, Meta, Klaviyo, Afterpay, and 50+ marketing tools to drive traffic and maximize retention.' }
    ],
    caseStudies: [
      {
        title: 'Enterprise E-Commerce Platform',
        description: 'Built an enterprise-grade online store with AI recommendations, AR product visualization, and 15 payment methods.',
        results: '$50M+ annual revenue driven through the platform'
      },
      {
        title: 'Subscription Commerce Platform',
        description: 'Subscription box e-commerce platform with personalized curation, recurring billing, and skip/pause controls.',
        results: '60K active subscribers, 85% retention at 12 months'
      },
      {
        title: 'B2B E-Commerce Portal',
        description: 'Wholesale portal with customer-specific pricing, net payment terms, bulk order management, and ERP integration.',
        results: '$20M+ in B2B orders processed in year 1'
      }
    ],
    faq: [
      {
        question: 'Can you integrate with existing inventory systems?',
        answer: 'Yes, we provide seamless bi-directional integrations with ERP systems, dedicated WMS platforms, and fulfillment centers for real-time inventory synchronization.'
      },
      {
        question: 'Do you support international selling?',
        answer: 'Absolutely. Our platform supports multi-currency pricing, multi-language content, international shipping rate calculation, and localized tax compliance.'
      },
      {
        question: 'How do you optimize conversion rates?',
        answer: 'We implement A/B testing on key pages, personalized product recommendations, abandoned cart recovery flows, one-click checkout, and continuous heatmap analysis.'
      },
      {
        question: 'Do you support subscription and recurring billing?',
        answer: 'Yes, we build recurring billing with Stripe, Braintree, or Razorpay supporting weekly, monthly, and annual cycles with automatic retry logic and dunning management.'
      },
      {
        question: 'How do you handle returns and refunds?',
        answer: 'We build configurable returns management workflows, automated refund processing based on return reason, and reverse logistics integration with major carrier partners.'
      }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS']
  }
];

export const getIndustryBySlug = (slug) => {
  return industriesData.find(industry => industry.slug === slug);
};

export const getAllIndustrySlugs = () => {
  return industriesData.map(industry => industry.slug);
};

export { getTechIcon, getWhyChooseUsIcon };
