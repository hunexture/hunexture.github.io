import { FaBrain, FaMobile, FaCloud, FaLaptopCode, FaHome, FaChartLine, FaPython, FaReact, FaAws, FaNodeJs, FaVuejs, FaDocker, FaDatabase, FaBullhorn, FaGoogle, FaInstagram, FaUsers } from 'react-icons/fa';
import { SiTensorflow, SiMongodb, SiStripe, SiKubernetes, SiGraphql, SiPostgresql, SiWebrtc, SiMqtt, SiRedis, SiGo, SiFlutter, SiGoogleads, SiFacebook, SiGoogleanalytics } from 'react-icons/si';

// Portfolio entries are sample/concept builds. `results` are illustrative example metrics,
// rendered under an "Illustrative Results" label — replace with real before/after numbers
// from client engagements as case studies are approved.
export const portfolioData = [
  {
    id: 1,
    slug: 'ai-powered-analytics-platform',
    title: 'AI-Powered Analytics Platform',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    shortDescription: 'Enterprise-level analytics platform with machine learning predictions and real-time insights.',
    description: 'A comprehensive enterprise analytics platform that leverages machine learning to provide predictive insights and real-time data visualization. Built to handle millions of data points with advanced algorithms for pattern recognition and anomaly detection.',
    image: `url(${process.env.PUBLIC_URL}/images/portfolio/ai-analytics.svg)`,
    tags: ['Python', 'TensorFlow', 'React', 'AWS'],
    icon: FaBrain,

    challenge: 'Our client needed a scalable analytics solution that could process vast amounts of data in real-time while providing accurate predictive insights to drive business decisions. Their existing system was slow, lacked predictive capabilities, and couldn\'t handle growing data volumes.',

    solution: 'We developed an AI-powered analytics platform using TensorFlow for machine learning models, React for the frontend, and AWS infrastructure for scalability. The platform features automated data processing pipelines, custom ML models for predictive analytics, and an intuitive dashboard for data visualization.',

    results: [
      { metric: '10x', label: 'Faster Data Processing' },
      { metric: '94%', label: 'Prediction Accuracy' },
      { metric: '50M+', label: 'Data Points Analyzed Daily' },
      { metric: '60%', label: 'Cost Reduction' }
    ],

    features: [
      {
        title: 'Real-Time Analytics',
        description: 'Process and visualize data streams in real-time with sub-second latency',
        icon: FaChartLine
      },
      {
        title: 'Predictive Models',
        description: 'Custom ML models trained on historical data to forecast trends and patterns',
        icon: FaBrain
      },
      {
        title: 'Auto-Scaling Infrastructure',
        description: 'Cloud-native architecture that scales automatically based on demand',
        icon: FaCloud
      },
      {
        title: 'Interactive Dashboards',
        description: 'Customizable, intuitive dashboards with drag-and-drop widgets',
        icon: FaLaptopCode
      }
    ],

    technologies: [
      { name: 'Python', icon: FaPython, purpose: 'Backend & ML' },
      { name: 'TensorFlow', icon: SiTensorflow, purpose: 'Machine Learning' },
      { name: 'React', icon: FaReact, purpose: 'Frontend' },
      { name: 'AWS', icon: FaAws, purpose: 'Cloud Infrastructure' },
      { name: 'PostgreSQL', icon: SiPostgresql, purpose: 'Database' },
      { name: 'Redis', icon: SiRedis, purpose: 'Caching' }
    ],

    timeline: '6 months',
    teamSize: '8 members',
    client: null, // TODO: real client name (with written permission) once available
    industry: 'Financial Services',

    keyTakeaways: [
      'Implementing efficient data pipelines is crucial for real-time analytics',
      'Model accuracy improves significantly with domain-specific training data',
      'User-friendly dashboards drive higher adoption rates among non-technical users',
      'Cloud infrastructure enables cost-effective scaling'
    ],

    testimonial: null, // TODO: add a real, permissioned client quote

    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null
  },

  {
    id: 2,
    slug: 'ecommerce-mobile-app',
    title: 'E-Commerce Mobile App',
    category: 'mobile',
    categoryLabel: 'Mobile Apps',
    shortDescription: 'Cross-platform shopping app with AR product visualization and seamless checkout experience.',
    description: 'An innovative mobile shopping experience featuring augmented reality product previews, personalized recommendations, and a frictionless checkout process. Built with React Native for both iOS and Android platforms.',
    image: `url(${process.env.PUBLIC_URL}/images/portfolio/ecommerce-app.svg)`,
    tags: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
    icon: FaMobile,

    challenge: 'The retail client wanted to create an immersive mobile shopping experience that would reduce return rates and increase customer engagement. Traditional product images weren\'t providing enough information for confident purchase decisions.',

    solution: 'We built a cross-platform mobile app with AR capabilities that allow customers to visualize products in their space before purchasing. The app includes AI-powered recommendations, one-tap checkout with Stripe, and real-time inventory sync.',

    results: [
      { metric: '45%', label: 'Reduction in Returns' },
      { metric: '3.2x', label: 'Higher Conversion Rate' },
      { metric: '200K+', label: 'Active Users' },
      { metric: '4.8/5', label: 'App Store Rating' }
    ],

    features: [
      {
        title: 'AR Product Preview',
        description: 'Visualize products in your space using augmented reality technology',
        icon: FaMobile
      },
      {
        title: 'Smart Recommendations',
        description: 'AI-powered personalized product suggestions based on browsing history',
        icon: FaBrain
      },
      {
        title: 'One-Tap Checkout',
        description: 'Seamless payment experience with saved payment methods and addresses',
        icon: FaChartLine
      },
      {
        title: 'Real-Time Sync',
        description: 'Instant inventory updates and order tracking',
        icon: FaCloud
      }
    ],

    technologies: [
      { name: 'React Native', icon: FaReact, purpose: 'Mobile Framework' },
      { name: 'Node.js', icon: FaNodeJs, purpose: 'Backend API' },
      { name: 'MongoDB', icon: SiMongodb, purpose: 'Database' },
      { name: 'Stripe', icon: SiStripe, purpose: 'Payments' },
      { name: 'AWS', icon: FaAws, purpose: 'Hosting' },
      { name: 'Redis', icon: SiRedis, purpose: 'Session Store' }
    ],

    timeline: '4 months',
    teamSize: '6 members',
    client: null, // TODO: real client name (with written permission) once available
    industry: 'Retail & E-Commerce',

    keyTakeaways: [
      'AR features significantly reduce purchase hesitation and returns',
      'Mobile-first design is essential for modern e-commerce',
      'Simplified checkout flows directly impact conversion rates',
      'Push notifications drive re-engagement when used strategically'
    ],

    testimonial: null, // TODO: add a real, permissioned client quote

    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null
  },

  {
    id: 3,
    slug: 'cloud-infrastructure-dashboard',
    title: 'Cloud Infrastructure Dashboard',
    category: 'cloud',
    categoryLabel: 'Cloud Services',
    shortDescription: 'Comprehensive monitoring and management dashboard for multi-cloud environments.',
    description: 'A unified dashboard for managing and monitoring infrastructure across AWS, Azure, and Google Cloud Platform. Features real-time metrics, cost optimization recommendations, and automated scaling controls.',
    image: `url(${process.env.PUBLIC_URL}/images/portfolio/cloud-dashboard.svg)`,
    tags: ['Vue.js', 'Docker', 'Kubernetes', 'Azure'],
    icon: FaCloud,

    challenge: 'An enterprise client was managing infrastructure across multiple cloud providers with separate dashboards, leading to inefficiencies, higher costs, and difficulty maintaining oversight. They needed a unified solution for multi-cloud management.',

    solution: 'We developed a comprehensive cloud management dashboard that aggregates data from multiple cloud providers into a single interface. The platform includes real-time monitoring, cost analytics, automated alerts, and one-click deployment capabilities.',

    results: [
      { metric: '40%', label: 'Cloud Cost Savings' },
      { metric: '99.99%', label: 'Uptime Achieved' },
      { metric: '75%', label: 'Faster Deployments' },
      { metric: '3', label: 'Cloud Providers Unified' }
    ],

    features: [
      {
        title: 'Multi-Cloud Monitoring',
        description: 'Monitor AWS, Azure, and GCP resources from a single dashboard',
        icon: FaCloud
      },
      {
        title: 'Cost Optimization',
        description: 'AI-powered recommendations to reduce cloud spending',
        icon: FaChartLine
      },
      {
        title: 'Auto-Scaling',
        description: 'Intelligent resource scaling based on usage patterns',
        icon: FaBrain
      },
      {
        title: 'Security Monitoring',
        description: 'Real-time security alerts and compliance tracking',
        icon: FaLaptopCode
      }
    ],

    technologies: [
      { name: 'Vue.js', icon: FaVuejs, purpose: 'Frontend Framework' },
      { name: 'Docker', icon: FaDocker, purpose: 'Containerization' },
      { name: 'Kubernetes', icon: SiKubernetes, purpose: 'Orchestration' },
      { name: 'Node.js', icon: FaNodeJs, purpose: 'Backend' },
      { name: 'PostgreSQL', icon: SiPostgresql, purpose: 'Database' },
      { name: 'AWS/Azure/GCP', icon: FaAws, purpose: 'Cloud Providers' }
    ],

    timeline: '8 months',
    teamSize: '10 members',
    client: null, // TODO: real client name (with written permission) once available
    industry: 'Enterprise Software',

    keyTakeaways: [
      'Multi-cloud strategies require unified management tools',
      'Cost visibility drives significant savings opportunities',
      'Automated alerts prevent costly downtime',
      'Containerization simplifies multi-cloud deployments'
    ],

    testimonial: null, // TODO: add a real, permissioned client quote

    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null
  },

  {
    id: 4,
    slug: 'healthcare-management-system',
    title: 'Healthcare Management System',
    category: 'web',
    categoryLabel: 'Web Apps',
    shortDescription: 'HIPAA-compliant patient management platform with telemedicine capabilities.',
    description: 'A comprehensive healthcare management system that enables healthcare providers to manage patient records, schedule appointments, and conduct virtual consultations. Built with strict HIPAA compliance and end-to-end encryption.',
    image: `url(${process.env.PUBLIC_URL}/images/portfolio/healthcare-system.svg)`,
    tags: ['React', 'GraphQL', 'PostgreSQL', 'WebRTC'],
    icon: FaLaptopCode,

    challenge: 'A healthcare network needed a secure, compliant platform to manage patient information and enable telemedicine during the pandemic. Their legacy system was outdated, insecure, and couldn\'t support video consultations.',

    solution: 'We built a modern, HIPAA-compliant web platform with patient management, electronic health records, appointment scheduling, and integrated telemedicine using WebRTC. The system features role-based access control, audit logging, and end-to-end encryption.',

    results: [
      { metric: '50K+', label: 'Patients Managed' },
      { metric: '10K+', label: 'Telehealth Visits/Month' },
      { metric: '100%', label: 'HIPAA Compliant' },
      { metric: '85%', label: 'Patient Satisfaction' }
    ],

    features: [
      {
        title: 'Telemedicine',
        description: 'HD video consultations with screen sharing and recording capabilities',
        icon: FaMobile
      },
      {
        title: 'EHR Integration',
        description: 'Complete electronic health records with real-time updates',
        icon: FaDatabase
      },
      {
        title: 'Appointment Scheduling',
        description: 'Smart scheduling with automated reminders and calendar sync',
        icon: FaChartLine
      },
      {
        title: 'Prescription Management',
        description: 'E-prescribing with pharmacy integration and medication tracking',
        icon: FaLaptopCode
      }
    ],

    technologies: [
      { name: 'React', icon: FaReact, purpose: 'Frontend' },
      { name: 'GraphQL', icon: SiGraphql, purpose: 'API Layer' },
      { name: 'PostgreSQL', icon: SiPostgresql, purpose: 'Database' },
      { name: 'WebRTC', icon: SiWebrtc, purpose: 'Video Calls' },
      { name: 'Node.js', icon: FaNodeJs, purpose: 'Backend' },
      { name: 'AWS', icon: FaAws, purpose: 'HIPAA-Compliant Hosting' }
    ],

    timeline: '10 months',
    teamSize: '12 members',
    client: null, // TODO: real client name (with written permission) once available
    industry: 'Healthcare',

    keyTakeaways: [
      'HIPAA compliance requires careful planning from day one',
      'Telemedicine has become essential for modern healthcare',
      'User experience is critical for healthcare provider adoption',
      'Security and usability must work together, not against each other'
    ],

    testimonial: null, // TODO: add a real, permissioned client quote

    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null
  },

  {
    id: 5,
    slug: 'smart-home-iot-platform',
    title: 'Smart Home IoT Platform',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    shortDescription: 'Intelligent home automation system with voice control and predictive learning.',
    description: 'An advanced IoT platform that connects and controls smart home devices with AI-powered automation. Features voice control, predictive behavior learning, and energy optimization to create a truly intelligent home environment.',
    image: `url(${process.env.PUBLIC_URL}/images/portfolio/smart-home.svg)`,
    tags: ['IoT', 'Python', 'MQTT', 'React'],
    icon: FaHome,

    challenge: 'The client wanted to create a smart home platform that would go beyond simple automation to actually learn user preferences and optimize home environment and energy usage automatically.',

    solution: 'We developed an IoT platform using MQTT for device communication, machine learning for behavior prediction, and voice AI for natural language control. The system learns from user patterns to automate routines and optimize energy consumption.',

    results: [
      { metric: '35%', label: 'Energy Savings' },
      { metric: '1000+', label: 'Compatible Devices' },
      { metric: '50K+', label: 'Active Installations' },
      { metric: '92%', label: 'User Satisfaction' }
    ],

    features: [
      {
        title: 'Voice Control',
        description: 'Natural language processing for hands-free device control',
        icon: FaMobile
      },
      {
        title: 'Predictive Automation',
        description: 'ML algorithms that learn and predict user preferences',
        icon: FaBrain
      },
      {
        title: 'Energy Optimization',
        description: 'Smart scheduling to minimize energy consumption',
        icon: FaChartLine
      },
      {
        title: 'Multi-Device Hub',
        description: 'Unified control for devices from different manufacturers',
        icon: FaHome
      }
    ],

    technologies: [
      { name: 'Python', icon: FaPython, purpose: 'Backend & AI' },
      { name: 'MQTT', icon: SiMqtt, purpose: 'IoT Protocol' },
      { name: 'React', icon: FaReact, purpose: 'Web Dashboard' },
      { name: 'TensorFlow', icon: SiTensorflow, purpose: 'Machine Learning' },
      { name: 'MongoDB', icon: SiMongodb, purpose: 'Database' },
      { name: 'AWS IoT', icon: FaAws, purpose: 'Cloud IoT' }
    ],

    timeline: '7 months',
    teamSize: '9 members',
    client: null, // TODO: real client name (with written permission) once available
    industry: 'IoT & Home Automation',

    keyTakeaways: [
      'IoT security must be built-in from the start',
      'Predictive AI creates magical user experiences',
      'Device compatibility is crucial for market adoption',
      'Energy optimization is a key selling point for consumers'
    ],

    testimonial: null, // TODO: add a real, permissioned client quote

    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null
  },

  {
    id: 6,
    slug: 'financial-trading-app',
    title: 'Financial Trading App',
    category: 'mobile',
    categoryLabel: 'Mobile Apps',
    shortDescription: 'Real-time trading platform with advanced charting and portfolio management.',
    description: 'A high-performance mobile trading application with real-time market data, advanced charting tools, and comprehensive portfolio management. Built for speed and reliability with Flutter for cross-platform deployment.',
    image: `url(${process.env.PUBLIC_URL}/images/portfolio/trading-app.svg)`,
    tags: ['Flutter', 'WebSocket', 'Redis', 'Golang'],
    icon: FaChartLine,

    challenge: 'A fintech startup needed a mobile trading platform that could handle real-time market data for thousands of users while providing sub-second trade execution and advanced analysis tools typically found only in desktop applications.',

    solution: 'We built a high-performance trading app using Flutter for native performance on both iOS and Android, WebSocket for real-time data streaming, and Golang for ultra-fast backend processing. The app features advanced charting, real-time alerts, and one-tap trading.',

    results: [
      { metric: '<100ms', label: 'Trade Execution Time' },
      { metric: '100K+', label: 'Daily Active Traders' },
      { metric: '$50M+', label: 'Daily Trading Volume' },
      { metric: '4.7/5', label: 'App Store Rating' }
    ],

    features: [
      {
        title: 'Real-Time Charts',
        description: 'Advanced charting with 50+ technical indicators and drawing tools',
        icon: FaChartLine
      },
      {
        title: 'Instant Execution',
        description: 'Sub-100ms trade execution with real-time order book',
        icon: FaMobile
      },
      {
        title: 'Portfolio Analytics',
        description: 'Comprehensive portfolio tracking with performance metrics',
        icon: FaBrain
      },
      {
        title: 'Price Alerts',
        description: 'Customizable alerts for price movements and market events',
        icon: FaLaptopCode
      }
    ],

    technologies: [
      { name: 'Flutter', icon: SiFlutter, purpose: 'Mobile Framework' },
      { name: 'Golang', icon: SiGo, purpose: 'High-Performance Backend' },
      { name: 'WebSocket', icon: FaNodeJs, purpose: 'Real-Time Data' },
      { name: 'Redis', icon: SiRedis, purpose: 'Caching & Pub/Sub' },
      { name: 'PostgreSQL', icon: SiPostgresql, purpose: 'Database' },
      { name: 'AWS', icon: FaAws, purpose: 'Cloud Infrastructure' }
    ],

    timeline: '5 months',
    teamSize: '7 members',
    client: null, // TODO: real client name (with written permission) once available
    industry: 'Financial Technology',

    keyTakeaways: [
      'Performance is critical for trading applications',
      'Real-time data streaming requires careful architecture',
      'Mobile-first trading is the future of retail investing',
      'Security and compliance are non-negotiable in fintech'
    ],

    testimonial: null, // TODO: add a real, permissioned client quote

    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null
  },

  {
    id: 7,
    slug: 'ecommerce-digital-marketing-campaign',
    title: 'E-Commerce Digital Marketing Campaign',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    shortDescription: 'Multi-channel marketing campaign that drove 300% revenue growth for online retailer.',
    description: 'A comprehensive digital marketing strategy combining SEO, paid advertising, social media, and content marketing to dramatically increase online sales and brand awareness for a growing e-commerce business.',
    image: `url(${process.env.PUBLIC_URL}/images/portfolio/digital-marketing.svg)`,
    tags: ['SEO', 'Google Ads', 'Social Media', 'Content Marketing'],
    icon: FaBullhorn,

    challenge: 'An e-commerce retailer was struggling with low online visibility, high customer acquisition costs, and minimal social media engagement. Their marketing efforts were fragmented across channels with no unified strategy, resulting in poor ROI.',

    solution: 'We developed and executed an integrated digital marketing strategy that included SEO optimization, targeted Google Ads campaigns, influencer partnerships on Instagram and TikTok, email marketing automation, and a content marketing program. All campaigns were tracked with advanced analytics to optimize performance continuously.',

    results: [
      { metric: '300%', label: 'Revenue Growth' },
      { metric: '450%', label: 'Organic Traffic Increase' },
      { metric: '65%', label: 'Lower CAC' },
      { metric: '8.5x', label: 'ROAS on Paid Ads' }
    ],

    features: [
      {
        title: 'SEO Optimization',
        description: 'Comprehensive on-page and off-page SEO to dominate search rankings',
        icon: FaGoogle
      },
      {
        title: 'Paid Advertising',
        description: 'Data-driven Google Ads and social media campaigns with continuous optimization',
        icon: FaBullhorn
      },
      {
        title: 'Social Media Growth',
        description: 'Organic and paid social strategies across Instagram, Facebook, and TikTok',
        icon: FaInstagram
      },
      {
        title: 'Influencer Marketing',
        description: 'Strategic partnerships with micro and macro influencers',
        icon: FaUsers
      }
    ],

    technologies: [
      { name: 'Google Ads', icon: SiGoogleads, purpose: 'Paid Search & Display' },
      { name: 'Facebook Ads', icon: SiFacebook, purpose: 'Social Advertising' },
      { name: 'Google Analytics', icon: SiGoogleanalytics, purpose: 'Analytics & Tracking' },
      { name: 'SEO Tools', icon: FaGoogle, purpose: 'SEO Optimization' },
      { name: 'Instagram', icon: FaInstagram, purpose: 'Social Media Marketing' },
      { name: 'Email Marketing', icon: FaDatabase, purpose: 'Marketing Automation' }
    ],

    timeline: '6 months',
    teamSize: '5 members',
    client: null, // TODO: real client name (with written permission) once available
    industry: 'Retail & E-Commerce',

    keyTakeaways: [
      'Integrated multi-channel strategies outperform single-channel approaches',
      'Continuous A/B testing and optimization are essential for maximizing ROI',
      'Influencer marketing drives authentic engagement and conversions',
      'Data-driven decision making leads to sustainable growth'
    ],

    testimonial: null, // TODO: add a real, permissioned client quote

    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null
  },
  {
    id: 8,
    slug: 'fintech-trading-dashboard',
    title: 'FinTech Alpha Dashboard',
    category: 'web',
    categoryLabel: 'Web Apps',
    shortDescription: 'Real-time cryptocurrency and options trading dashboard with dark-mode optimized charts.',
    description: 'A high-performance trading interface built for proprietary traders. Features under 10ms websocket latency, customizable drag-and-drop widget layouts, and deep integration with multiple exchange APIs for unified portfolio management.',
    image: 'linear-gradient(135deg, #111827 0%, #312e81 100%)',
    tags: ['React', 'TypeScript', 'WebSockets', 'Tailwind'],
    icon: FaChartLine,
    challenge: 'Traders needed a single pane of glass to manage highly volatile assets across multiple exchanges, demanding near-zero latency data streams and a customizable UI that wouldn\'t cause eye fatigue during 12-hour sessions.',
    solution: 'Engineered a React SPA with a highly optimized custom state management solution to handle thousands of ticking prices per second. Implemented a deep dark-mode UI with WebGL-accelerated charting for buttery smooth rendering.',
    results: [
      { metric: '<10ms', label: 'Data Latency' },
      { metric: '60fps', label: 'Chart Rendering' },
      { metric: '100+', label: 'Active Widgets' },
      { metric: '4.9/5', label: 'User Rating' }
    ],
    features: [
      { title: 'Live Orderbook', description: 'Depth-of-market visualization updating in real-time', icon: FaChartLine },
      { title: 'Portfolio Heatmaps', description: 'Visual breakdown of asset allocation and daily performance', icon: FaDatabase },
      { title: 'Custom Alerts', description: 'Push notifications for price actions and technical indicators', icon: FaMobile }
    ],
    technologies: [
      { name: 'React', icon: FaReact, purpose: 'Frontend' },
      { name: 'Node.js', icon: FaNodeJs, purpose: 'WS Server' },
      { name: 'Redis', icon: SiRedis, purpose: 'Tick Cache' }
    ],
    timeline: '3 months',
    teamSize: '5 Engineers',
    industry: 'Financial Technology',
    client: null, // TODO: real client name (with written permission) once available
    keyTakeaways: [
      'Engineered a custom React state manager to handle 5000+ ticks/second without dropping frames',
      'Implemented WebGL-accelerated canvas components for deep market history charting',
      'Maintained total frontend latency under 15ms across high-volatility events',
      'Designed an extensible drag-and-drop workspace architecture using React DnD'
    ],
    testimonial: null, // TODO: add a real, permissioned client quote
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 9,
    slug: 'ai-supply-chain',
    title: 'Smart Supply Chain Optimizer',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    shortDescription: 'Computer vision and predictive modeling system for automated warehouse logistics.',
    description: 'An end-to-end logistics platform that uses edge AI cameras to track inventory in real-time and predictive models to prevent stockouts and optimize delivery routing.',
    image: 'linear-gradient(135deg, #047857 0%, #064e3b 100%)',
    tags: ['Python', 'Docker', 'OpenCV', 'GCP'],
    icon: FaBrain,
    challenge: 'A massive logistics provider was losing 4% of revenue to inventory shrinkage and inefficient routing caused by legacy manual barcode scanning.',
    solution: 'Deployed an edge-computing vision system that scans pallets instantly as forklifts move them. Fed this data into a cloud AI engine that predicts inventory needs up to 3 weeks in advance.',
    results: [
      { metric: '-98%', label: 'Scanning Time' },
      { metric: '+22%', label: 'Route Efficiency' },
      { metric: '0.1%', label: 'Shrinkage Rate' },
      { metric: '$2M', label: 'Annual Savings' }
    ],
    features: [
      { title: 'Edge Computer Vision', description: 'Instant multi-barcode and volumetric scanning', icon: FaLaptopCode },
      { title: 'Demand Forecasting', description: 'ML models to predict seasonal inventory needs', icon: FaBrain },
      { title: 'Route Optimization', description: 'Dynamic delivery routing avoiding traffic and delays', icon: FaCloud }
    ],
    technologies: [
      { name: 'Python', icon: FaPython, purpose: 'Vision & ML' },
      { name: 'TensorFlow', icon: SiTensorflow, purpose: 'Model Training' },
      { name: 'Docker', icon: FaDocker, purpose: 'Edge Deployment' }
    ],
    timeline: '8 months',
    teamSize: '9 Engineers',
    industry: 'Supply Chain & Logistics',
    client: null, // TODO: real client name (with written permission) once available
    keyTakeaways: [
      'Built a hybrid edge-to-cloud architecture allowing real-time camera inference during internet outages',
      'Trained an object detection model with 99.9% accuracy on over 400 distinct pallet types',
      'Integrated seamlessly with the client\'s legacy 90s-era ERP system via custom middleware',
      'Saved $2M annually in lost goods and inefficient routing'
    ],
    testimonial: null, // TODO: add a real, permissioned client quote
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 10,
    slug: 'rag-knowledge-assistant',
    title: 'Enterprise Knowledge Assistant (RAG)',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    shortDescription: 'Chat assistant that answers from company documents with cited sources and role-based access.',
    description: 'A retrieval-augmented generation assistant that lets staff ask questions in plain language and get answers grounded in internal policies, tickets and wikis, each with a link to the source passage.',
    tags: ['Python', 'LangChain', 'pgvector', 'OpenAI'],
    icon: FaBrain,
    challenge: 'Employees lost hours searching scattered wikis and PDFs, and an earlier chatbot invented answers that nobody could verify.',
    solution: 'We built a retrieval pipeline with hybrid search, re-ranking and per-user permission filters. Every answer cites its sources, and an evaluation suite runs on each release to catch regressions before they ship.',
    results: [
      { metric: '<2s', label: 'Answer Latency' },
      { metric: '92%', label: 'Grounded Answers (eval set)' },
      { metric: '-70%', label: 'Search Time' },
      { metric: '0', label: 'Cross-team Data Leaks' }
    ],
    features: [
      { title: 'Cited Answers', description: 'Each reply links to the exact passage it used', icon: FaDatabase },
      { title: 'Permission-aware Search', description: 'Results respect the asking user\'s access rights', icon: FaBrain },
      { title: 'Evaluation Harness', description: 'Automated test questions score every release', icon: FaChartLine }
    ],
    technologies: [
      { name: 'Python', icon: FaPython, purpose: 'Pipelines' },
      { name: 'PostgreSQL', icon: SiPostgresql, purpose: 'pgvector store' },
      { name: 'React', icon: FaReact, purpose: 'Chat UI' },
      { name: 'AWS', icon: FaAws, purpose: 'Hosting' }
    ],
    timeline: '4 months',
    teamSize: '5 Engineers',
    industry: 'Enterprise Software',
    client: null,
    keyTakeaways: [
      'Hybrid keyword and vector search beat vector-only retrieval on internal jargon',
      'Citations build trust faster than higher benchmark scores',
      'An evaluation set is the only safe way to change prompts or models',
      'Permission filters must run at retrieval time, not after generation'
    ],
    testimonial: null,
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 11,
    slug: 'ai-agent-support-copilot',
    title: 'Support Copilot with AI Agents',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    shortDescription: 'Agents that triage tickets, draft replies and take approved actions in the help desk.',
    description: 'A tool-using agent layer that reads incoming tickets, pulls account context, drafts a reply and, for low-risk requests, performs the action itself under approval rules set by the team.',
    tags: ['Python', 'Agents', 'Guardrails', 'AWS'],
    icon: FaBrain,
    challenge: 'The support team answered the same ten kinds of request all day, while complex cases waited in the same queue.',
    solution: 'We built agents with narrow tools (look up an order, issue a refund up to a limit, reset access), a policy layer that blocks anything outside those limits, and full logging of every step for review.',
    results: [
      { metric: '58%', label: 'Tickets Auto-resolved' },
      { metric: '-45%', label: 'First Reply Time' },
      { metric: '100%', label: 'Actions Logged' },
      { metric: '4.6/5', label: 'Agent-assist Rating' }
    ],
    features: [
      { title: 'Tool Calling', description: 'Agents act only through audited, scoped tools', icon: FaCloud },
      { title: 'Approval Rules', description: 'Spend and risk limits decide what needs a human', icon: FaBrain },
      { title: 'Run Replay', description: 'Every agent run can be replayed step by step', icon: FaDatabase }
    ],
    technologies: [
      { name: 'Python', icon: FaPython, purpose: 'Agent runtime' },
      { name: 'Node.js', icon: FaNodeJs, purpose: 'Integrations' },
      { name: 'Redis', icon: SiRedis, purpose: 'Queues' },
      { name: 'Docker', icon: FaDocker, purpose: 'Deploy' }
    ],
    timeline: '5 months',
    teamSize: '6 Engineers',
    industry: 'Customer Support',
    client: null,
    keyTakeaways: [
      'Narrow tools with hard limits are safer than a general-purpose agent',
      'Logging every step makes audits and debugging possible',
      'Start with drafts, then widen autonomy as measured accuracy allows',
      'Human handoff must be one click, not a rebuild of the ticket'
    ],
    testimonial: null,
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 12,
    slug: 'telehealth-fhir-app',
    title: 'Telehealth App with FHIR Records',
    category: 'mobile',
    categoryLabel: 'Mobile Apps',
    shortDescription: 'Patient app for video visits, prescriptions and records, built on HL7 FHIR.',
    description: 'A cross-platform patient app with secure video consultations, appointment booking and a unified health record that reads and writes FHIR resources from hospital systems.',
    tags: ['React Native', 'FHIR', 'WebRTC', 'AWS'],
    icon: FaMobile,
    challenge: 'Patients had to use separate portals for appointments, results and video calls, and clinicians could not see device data in the chart.',
    solution: 'We built one mobile app over a FHIR gateway, with end-to-end encrypted video, consent-based sharing and wearable data mapped into standard observations.',
    results: [
      { metric: '-35%', label: 'Missed Appointments' },
      { metric: '<3 taps', label: 'To Join a Visit' },
      { metric: 'FHIR R4', label: 'Records Standard' },
      { metric: '99.9%', label: 'Uptime Target' }
    ],
    features: [
      { title: 'Secure Video Visits', description: 'Encrypted WebRTC calls with a waiting room', icon: FaMobile },
      { title: 'Unified Record', description: 'Results, medications and notes in one timeline', icon: FaDatabase },
      { title: 'Wearable Sync', description: 'Heart rate and activity mapped to FHIR', icon: FaCloud }
    ],
    technologies: [
      { name: 'React Native', icon: FaReact, purpose: 'Mobile app' },
      { name: 'Node.js', icon: FaNodeJs, purpose: 'FHIR gateway' },
      { name: 'PostgreSQL', icon: SiPostgresql, purpose: 'Consent store' },
      { name: 'AWS', icon: FaAws, purpose: 'HIPAA-eligible hosting' }
    ],
    timeline: '6 months',
    teamSize: '7 members',
    industry: 'Healthcare',
    client: null,
    keyTakeaways: [
      'Standards-based data keeps hospital integrations from becoming one-offs',
      'Consent has to be a first-class data model, not a checkbox',
      'Simple joining flows cut no-shows more than reminders did',
      'Audit logging is part of the product, not an add-on'
    ],
    testimonial: null,
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 13,
    slug: 'saas-billing-platform',
    title: 'Multi-tenant SaaS Billing Platform',
    category: 'web',
    categoryLabel: 'Web Apps',
    shortDescription: 'Usage-based billing, invoicing and a customer portal for a B2B software product.',
    description: 'A billing layer that meters product usage, applies plans and discounts, issues invoices in several currencies and gives customers a self-service portal.',
    tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    icon: FaLaptopCode,
    challenge: 'Finance rebuilt invoices by hand each month because the product sold seat plans, usage tiers and custom contracts that the old system could not express.',
    solution: 'We designed an event-sourced metering service and a rules engine for plans, with Stripe handling payments and a reconciliation job that flags any mismatch before invoices go out.',
    results: [
      { metric: '-80%', label: 'Manual Invoice Work' },
      { metric: '3', label: 'Currencies Supported' },
      { metric: '99.99%', label: 'Metering Accuracy' },
      { metric: '2 days', label: 'Month-end Close' }
    ],
    features: [
      { title: 'Usage Metering', description: 'Idempotent events counted per tenant', icon: FaDatabase },
      { title: 'Plan Rules Engine', description: 'Seats, tiers and custom contracts in config', icon: FaLaptopCode },
      { title: 'Customer Portal', description: 'Invoices, usage and payment methods', icon: FaChartLine }
    ],
    technologies: [
      { name: 'React', icon: FaReact, purpose: 'Portal' },
      { name: 'Node.js', icon: FaNodeJs, purpose: 'API' },
      { name: 'PostgreSQL', icon: SiPostgresql, purpose: 'Ledger' },
      { name: 'Docker', icon: FaDocker, purpose: 'Deploy' }
    ],
    timeline: '4 months',
    teamSize: '5 Engineers',
    industry: 'B2B Software',
    client: null,
    keyTakeaways: [
      'Make every usage event idempotent before anything else',
      'Keep a ledger that can always be replayed to explain a total',
      'Reconcile against the payment provider daily, not monthly',
      'Contract exceptions belong in data, not in code branches'
    ],
    testimonial: null,
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 14,
    slug: 'platform-engineering-finops',
    title: 'Kubernetes Platform and FinOps Dashboard',
    category: 'cloud',
    categoryLabel: 'Cloud Solutions',
    shortDescription: 'Internal platform with self-service environments and cloud cost visibility per team.',
    description: 'A platform engineering setup on Kubernetes with GitOps deployments, standard service templates and a cost dashboard that shows spend by team and service.',
    tags: ['Kubernetes', 'Terraform', 'GitOps', 'AWS'],
    icon: FaCloud,
    challenge: 'Each team deployed differently, environments took days to request, and nobody could say which services drove the cloud bill.',
    solution: 'We shipped a golden-path template, Terraform modules, Argo CD for GitOps and tagging rules feeding a cost dashboard with budgets and alerts.',
    results: [
      { metric: '15 min', label: 'New Environment (was days)' },
      { metric: '-28%', label: 'Cloud Spend' },
      { metric: '95%', label: 'Services on Template' },
      { metric: '4x', label: 'Deploys per Week' }
    ],
    features: [
      { title: 'Golden Path', description: 'One template for build, deploy and monitor', icon: FaCloud },
      { title: 'GitOps Deploys', description: 'Every change reviewed and reversible', icon: FaDatabase },
      { title: 'Cost per Team', description: 'Spend by service with budget alerts', icon: FaChartLine }
    ],
    technologies: [
      { name: 'Kubernetes', icon: SiKubernetes, purpose: 'Orchestration' },
      { name: 'AWS', icon: FaAws, purpose: 'Cloud' },
      { name: 'Docker', icon: FaDocker, purpose: 'Images' },
      { name: 'GraphQL', icon: SiGraphql, purpose: 'Cost API' }
    ],
    timeline: '5 months',
    teamSize: '6 members',
    industry: 'Technology',
    client: null,
    keyTakeaways: [
      'A paved road gets adopted; a mandate does not',
      'Tag hygiene decides whether cost reports can be trusted',
      'Budgets with alerts change behavior faster than monthly reports',
      'Treat the platform as a product with its own users and roadmap'
    ],
    testimonial: null,
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 15,
    slug: 'ai-seo-content-engine',
    title: 'AI-assisted SEO and Content Engine',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    shortDescription: 'Topic research, briefs and a publishing workflow that keeps human editors in charge.',
    description: 'A content system that clusters search demand, drafts structured briefs, helps writers produce first drafts and tracks which pages earn rankings and leads.',
    tags: ['SEO', 'Analytics', 'Python', 'GA4'],
    icon: FaBullhorn,
    challenge: 'Publishing was slow and inconsistent, and the team could not tell which articles actually produced leads.',
    solution: 'We built keyword clustering, brief templates and an editorial workflow with fact-check steps, plus a dashboard joining search data to form fills.',
    results: [
      { metric: '3x', label: 'Publishing Speed' },
      { metric: '+64%', label: 'Organic Visits' },
      { metric: '2.1x', label: 'Leads from Content' },
      { metric: '100%', label: 'Human-reviewed' }
    ],
    features: [
      { title: 'Topic Clusters', description: 'Search demand grouped into pillar and support pages', icon: FaChartLine },
      { title: 'Brief Generator', description: 'Structured outlines with sources to cite', icon: FaBullhorn },
      { title: 'Lead Attribution', description: 'Pages tied to form fills in GA4', icon: FaDatabase }
    ],
    technologies: [
      { name: 'Python', icon: FaPython, purpose: 'Clustering' },
      { name: 'Google Analytics', icon: SiGoogleanalytics, purpose: 'Attribution' },
      { name: 'React', icon: FaReact, purpose: 'Dashboard' },
      { name: 'PostgreSQL', icon: SiPostgresql, purpose: 'Data' }
    ],
    timeline: '3 months',
    teamSize: '4 members',
    industry: 'Marketing',
    client: null,
    keyTakeaways: [
      'AI speeds the draft, but fact-checking and voice stay with editors',
      'Cluster pages by intent before writing a single article',
      'Measure leads per page, not only traffic',
      'Refreshing old winners often beats publishing new posts'
    ],
    testimonial: null,
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 16,
    slug: 'visual-quality-inspection',
    title: 'Visual Quality Inspection on the Line',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    shortDescription: 'Camera-based defect detection for a packaging line, running on edge devices.',
    description: 'A computer vision system that inspects each item as it passes the camera, flags defects, and shows operators the exact spot so they can decide in seconds.',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'Edge'],
    icon: FaBrain,
    challenge: 'Manual inspection caught different defects on different shifts, and customer returns were the first sign that something had gone wrong.',
    solution: 'We captured labelled images under real line lighting, trained a detector for the common defect classes, and ran it on edge devices beside the line. A review screen lets operators confirm or correct each flag, and those corrections feed the next training round.',
    results: [
      { metric: '<100 ms', label: 'Per-item Decision' },
      { metric: 'Per class', label: 'Accuracy Reported' },
      { metric: '100%', label: 'Rejects Logged with Image' },
      { metric: 'Weekly', label: 'Model Retraining' }
    ],
    features: [
      { title: 'Edge Inference', description: 'Runs beside the line, no cloud round trip', icon: FaBrain },
      { title: 'Operator Review', description: 'One tap to confirm or correct a flag', icon: FaLaptopCode },
      { title: 'Defect Analytics', description: 'Trends by shift, line and supplier batch', icon: FaChartLine }
    ],
    technologies: [
      { name: 'Python', icon: FaPython, purpose: 'Pipelines' },
      { name: 'TensorFlow', icon: SiTensorflow, purpose: 'Detection model' },
      { name: 'Docker', icon: FaDocker, purpose: 'Edge deploy' },
      { name: 'PostgreSQL', icon: SiPostgresql, purpose: 'Results store' }
    ],
    timeline: '4 months',
    teamSize: '5 Engineers',
    industry: 'Manufacturing',
    client: null,
    keyTakeaways: [
      'Lighting control mattered more than model choice',
      'Operator corrections are the cheapest source of new training data',
      'Report accuracy per defect class, not one overall number',
      'Keep an image for every rejection so disputes can be settled'
    ],
    testimonial: null,
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 17,
    slug: 'voice-agent-appointments',
    title: 'Voice Agent for Appointment Booking',
    category: 'ai',
    categoryLabel: 'AI Solutions',
    shortDescription: 'Phone assistant that books, moves and cancels appointments in English and Hindi.',
    description: 'A speech-to-speech assistant that answers clinic and service-centre calls, checks the calendar, books or reschedules, and hands over to staff when the caller asks or the system is unsure.',
    tags: ['Python', 'Speech AI', 'WebRTC', 'Redis'],
    icon: FaBrain,
    challenge: 'Reception staff spent most of the day on routine booking calls while urgent callers waited on hold.',
    solution: 'We built a voice pipeline with low-latency speech recognition, a booking agent limited to calendar tools, and a clear handover to a person. Every call is transcribed, scored and available for review.',
    results: [
      { metric: '<1.2 s', label: 'Response Delay' },
      { metric: 'EN + HI', label: 'Languages' },
      { metric: '1 tap', label: 'Handover to Staff' },
      { metric: '100%', label: 'Calls Transcribed' }
    ],
    features: [
      { title: 'Calendar Tools', description: 'Agent can only book, move or cancel', icon: FaCloud },
      { title: 'Bilingual Calls', description: 'English, Hindi and mixed speech', icon: FaUsers },
      { title: 'Call Review', description: 'Transcripts and scores for every call', icon: FaDatabase }
    ],
    technologies: [
      { name: 'Python', icon: FaPython, purpose: 'Agent' },
      { name: 'WebRTC', icon: SiWebrtc, purpose: 'Audio transport' },
      { name: 'Redis', icon: SiRedis, purpose: 'Session state' },
      { name: 'AWS', icon: FaAws, purpose: 'Hosting' }
    ],
    timeline: '3 months',
    teamSize: '4 Engineers',
    industry: 'Healthcare and Services',
    client: null,
    keyTakeaways: [
      'Response delay under about a second decides whether callers trust it',
      'Limit the agent to a few tools and test each path',
      'Always offer a human; never trap the caller',
      'Review transcripts weekly to find the next fix'
    ],
    testimonial: null,
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 18,
    slug: 'b2b-wholesale-marketplace',
    title: 'B2B Wholesale Marketplace',
    category: 'web',
    categoryLabel: 'Web Apps',
    shortDescription: 'Ordering portal with tiered pricing, credit terms and reorder in one click.',
    description: 'A web marketplace where retailers browse a distributor catalog, see their own negotiated prices and credit limits, and reorder previous baskets.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    icon: FaLaptopCode,
    challenge: 'Orders arrived by phone and spreadsheet, prices varied by customer, and the sales team spent evenings keying orders into the ERP.',
    solution: 'We built a catalog with customer-specific pricing rules, credit checks at checkout, and an ERP sync that creates orders without re-keying. Reorder from history takes two clicks.',
    results: [
      { metric: '-75%', label: 'Order Entry Time' },
      { metric: '2 clicks', label: 'To Reorder' },
      { metric: 'Real-time', label: 'Credit Check' },
      { metric: '1', label: 'Source of Pricing' }
    ],
    features: [
      { title: 'Customer Pricing', description: 'Tiers and contracts applied automatically', icon: FaDatabase },
      { title: 'Credit Terms', description: 'Limits checked before an order is placed', icon: FaChartLine },
      { title: 'ERP Sync', description: 'Orders and stock flow both ways', icon: FaCloud }
    ],
    technologies: [
      { name: 'React', icon: FaReact, purpose: 'Storefront' },
      { name: 'Node.js', icon: FaNodeJs, purpose: 'API' },
      { name: 'PostgreSQL', icon: SiPostgresql, purpose: 'Pricing rules' },
      { name: 'Stripe', icon: SiStripe, purpose: 'Payments' }
    ],
    timeline: '5 months',
    teamSize: '6 members',
    industry: 'Distribution',
    client: null,
    keyTakeaways: [
      'Pricing rules need tests as strict as financial code',
      'Show each customer only what they can order',
      'Sync with the ERP through a queue so outages do not lose orders',
      'Reorder is the feature that wholesale buyers use most'
    ],
    testimonial: null,
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 19,
    slug: 'contract-lifecycle-portal',
    title: 'Contract Lifecycle Portal',
    category: 'web',
    categoryLabel: 'Web Apps',
    shortDescription: 'Request, review, sign and track contracts with clause search and renewal alerts.',
    description: 'A portal where business teams request contracts from templates, legal reviews them with clause comparison, and everyone can find signed agreements and upcoming renewals.',
    tags: ['React', 'Node.js', 'Search', 'e-Sign'],
    icon: FaLaptopCode,
    challenge: 'Contracts lived in email threads and shared drives; renewals were noticed after the notice window had passed.',
    solution: 'We built template-driven requests, a review workflow with redline comparison, e-signature integration and a searchable repository with renewal reminders and role-based access.',
    results: [
      { metric: '-40%', label: 'Time to Signature' },
      { metric: '90 days', label: 'Renewal Warning' },
      { metric: '1', label: 'Searchable Repository' },
      { metric: 'Full', label: 'Audit Trail' }
    ],
    features: [
      { title: 'Template Requests', description: 'Approved clauses and guided questions', icon: FaLaptopCode },
      { title: 'Clause Search', description: 'Find any term across every agreement', icon: FaDatabase },
      { title: 'Renewal Alerts', description: 'Owners warned before notice dates', icon: FaChartLine }
    ],
    technologies: [
      { name: 'React', icon: FaReact, purpose: 'Portal' },
      { name: 'Node.js', icon: FaNodeJs, purpose: 'Workflow' },
      { name: 'PostgreSQL', icon: SiPostgresql, purpose: 'Repository' },
      { name: 'AWS', icon: FaAws, purpose: 'Storage and search' }
    ],
    timeline: '4 months',
    teamSize: '5 members',
    industry: 'Legal and Operations',
    client: null,
    keyTakeaways: [
      'A guided request form removes most back-and-forth',
      'Renewal dates are the quickest win to prove value',
      'Permissions must follow the contract, not the folder',
      'Keep the signed PDF and its metadata together'
    ],
    testimonial: null,
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 20,
    slug: 'driver-app-proof-of-delivery',
    title: 'Driver App with Proof of Delivery',
    category: 'mobile',
    categoryLabel: 'Mobile Apps',
    shortDescription: 'Offline-first app for routes, scanning, photos and signatures.',
    description: 'A mobile app for delivery drivers that loads the day\'s route, works without signal, captures scans, photos and signatures, and syncs when connected.',
    tags: ['Flutter', 'Offline', 'Maps', 'Node.js'],
    icon: FaMobile,
    challenge: 'Paper delivery slips were lost or disputed, and drivers lost time to calls asking where they were.',
    solution: 'We built an offline-first Flutter app with route optimisation from the dispatch system, barcode scanning, photo and signature capture, and live location shared only during active jobs.',
    results: [
      { metric: '0', label: 'Paper Slips' },
      { metric: 'Offline', label: 'Full-day Operation' },
      { metric: '<5 min', label: 'Dispute Lookup' },
      { metric: 'Active jobs only', label: 'Location Sharing' }
    ],
    features: [
      { title: 'Offline-first', description: 'Everything works without signal and syncs later', icon: FaMobile },
      { title: 'Proof of Delivery', description: 'Scan, photo and signature on one screen', icon: FaDatabase },
      { title: 'Dispatch Link', description: 'Route changes pushed to the driver', icon: FaCloud }
    ],
    technologies: [
      { name: 'Flutter', icon: SiFlutter, purpose: 'Mobile app' },
      { name: 'Node.js', icon: FaNodeJs, purpose: 'Sync API' },
      { name: 'PostgreSQL', icon: SiPostgresql, purpose: 'Jobs store' },
      { name: 'Docker', icon: FaDocker, purpose: 'Deploy' }
    ],
    timeline: '4 months',
    teamSize: '5 members',
    industry: 'Logistics',
    client: null,
    keyTakeaways: [
      'Design sync conflicts first; offline is mostly a data problem',
      'Large tap targets and few screens suit drivers in a hurry',
      'Share location only while a job is active',
      'Store photos compressed locally and upload on Wi-Fi if needed'
    ],
    testimonial: null,
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 21,
    slug: 'fitness-habit-app',
    title: 'Fitness and Habit Coaching App',
    category: 'mobile',
    categoryLabel: 'Mobile Apps',
    shortDescription: 'Training plans, wearable sync and coach chat in one subscription app.',
    description: 'A subscription app that builds weekly plans, syncs with wearables, and lets members message a coach, with reminders tuned to when each person actually trains.',
    tags: ['React Native', 'HealthKit', 'Stripe', 'Firebase'],
    icon: FaMobile,
    challenge: 'Members dropped off after the first month because plans were generic and coaches had no view of what members actually did.',
    solution: 'We combined wearable data with simple plan adjustments, a coach dashboard showing adherence, and reminders scheduled around each member\'s real routine.',
    results: [
      { metric: '+30%', label: 'Day-30 Retention (target)' },
      { metric: '2', label: 'Wearable Platforms' },
      { metric: '1 view', label: 'Coach Dashboard' },
      { metric: 'In-app', label: 'Subscriptions' }
    ],
    features: [
      { title: 'Adaptive Plans', description: 'Weekly plan changes with adherence', icon: FaChartLine },
      { title: 'Wearable Sync', description: 'Apple Health and Google Health Connect', icon: FaMobile },
      { title: 'Coach Dashboard', description: 'Who needs a nudge today', icon: FaUsers }
    ],
    technologies: [
      { name: 'React Native', icon: FaReact, purpose: 'App' },
      { name: 'Node.js', icon: FaNodeJs, purpose: 'API' },
      { name: 'MongoDB', icon: SiMongodb, purpose: 'Activity data' },
      { name: 'Stripe', icon: SiStripe, purpose: 'Subscriptions' }
    ],
    timeline: '4 months',
    teamSize: '5 members',
    industry: 'Health and Fitness',
    client: null,
    keyTakeaways: [
      'Reminders at the right time beat more reminders',
      'Show coaches adherence, not just activity totals',
      'Ask for health permissions only when the feature needs them',
      'Treat subscription edge cases as core features'
    ],
    testimonial: null,
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 22,
    slug: 'data-lakehouse-analytics',
    title: 'Cloud Data Lakehouse and BI',
    category: 'cloud',
    categoryLabel: 'Cloud Solutions',
    shortDescription: 'One governed data platform feeding dashboards, forecasts and AI features.',
    description: 'A cloud lakehouse that ingests data from operational systems, applies quality checks and access rules, and serves analysts, dashboards and machine-learning jobs from the same source.',
    tags: ['AWS', 'Spark', 'dbt', 'Terraform'],
    icon: FaCloud,
    challenge: 'Every team kept its own extracts, so reports disagreed and nobody knew which number was right.',
    solution: 'We built ingestion pipelines, a modelled layer with tested definitions, column-level access control and a semantic layer so every dashboard reads the same metrics.',
    results: [
      { metric: '1', label: 'Definition per Metric' },
      { metric: 'Daily', label: 'Automated Quality Tests' },
      { metric: 'Hours to minutes', label: 'Report Refresh' },
      { metric: 'Row-level', label: 'Access Control' }
    ],
    features: [
      { title: 'Tested Models', description: 'Every metric has checks that alert on failure', icon: FaDatabase },
      { title: 'Governed Access', description: 'Who can see which columns and rows', icon: FaCloud },
      { title: 'Shared Metrics', description: 'One definition used by every dashboard', icon: FaChartLine }
    ],
    technologies: [
      { name: 'AWS', icon: FaAws, purpose: 'Storage and compute' },
      { name: 'Python', icon: FaPython, purpose: 'Pipelines' },
      { name: 'PostgreSQL', icon: SiPostgresql, purpose: 'Metadata' },
      { name: 'Docker', icon: FaDocker, purpose: 'Jobs' }
    ],
    timeline: '6 months',
    teamSize: '6 members',
    industry: 'Retail and Consumer',
    client: null,
    keyTakeaways: [
      'Agree metric definitions before building pipelines',
      'Test data like code and alert on failures',
      'Access rules are easier to add at the start than later',
      'Start with two or three high-value sources, not all of them'
    ],
    testimonial: null,
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 23,
    slug: 'conversion-rate-optimisation',
    title: 'Conversion Rate Optimisation Program',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    shortDescription: 'Research-led testing program for a lead-generation website.',
    description: 'A structured program of research, hypotheses and A/B tests on landing pages and forms, with tracking set up so results can be trusted and repeated.',
    tags: ['GA4', 'A/B Testing', 'Analytics', 'UX Research'],
    icon: FaBullhorn,
    challenge: 'Traffic was growing but the enquiry rate was flat, and past changes had been made on opinion without measurement.',
    solution: 'We audited tracking, ran session and user research to find friction, prioritised hypotheses by impact and effort, and ran tests with clear stopping rules.',
    results: [
      { metric: '12', label: 'Tests Run (target per quarter)' },
      { metric: '95%', label: 'Confidence Threshold' },
      { metric: 'Fixed', label: 'Tracking Gaps' },
      { metric: 'Shared', label: 'Test Backlog' }
    ],
    features: [
      { title: 'Tracking Audit', description: 'Events and goals verified end to end', icon: FaDatabase },
      { title: 'Hypothesis Backlog', description: 'Ideas scored by impact and effort', icon: FaChartLine },
      { title: 'Test Playbook', description: 'Sample size and stopping rules agreed upfront', icon: FaBullhorn }
    ],
    technologies: [
      { name: 'Google Analytics', icon: SiGoogleanalytics, purpose: 'Measurement' },
      { name: 'React', icon: FaReact, purpose: 'Variants' },
      { name: 'Python', icon: FaPython, purpose: 'Analysis' },
      { name: 'PostgreSQL', icon: SiPostgresql, purpose: 'Results' }
    ],
    timeline: '3 months',
    teamSize: '3 members',
    industry: 'Lead Generation',
    client: null,
    keyTakeaways: [
      'Fix measurement first; bad tracking ruins every test',
      'Fewer, larger changes beat many tiny ones on low traffic',
      'Decide sample size before starting a test',
      'Record failed tests too; they stop repeat mistakes'
    ],
    testimonial: null,
    liveUrl: null,
    githubUrl: null
  }
];

export const getProjectBySlug = (slug) => {
  return portfolioData.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category) => {
  if (category === 'all') return portfolioData;
  return portfolioData.filter(project => project.category === category);
};

export const getAllProjectSlugs = () => {
  return portfolioData.map(project => project.slug);
};

export const getRelatedProjects = (currentProjectId, limit = 3) => {
  const currentProject = portfolioData.find(p => p.id === currentProjectId);
  if (!currentProject) return [];

  // Get projects from the same category, excluding the current project
  const related = portfolioData.filter(
    p => p.category === currentProject.category && p.id !== currentProjectId
  );

  // If not enough from same category, add projects from other categories
  if (related.length < limit) {
    const others = portfolioData.filter(
      p => p.category !== currentProject.category && p.id !== currentProjectId
    );
    related.push(...others.slice(0, limit - related.length));
  }

  return related.slice(0, limit);
};
