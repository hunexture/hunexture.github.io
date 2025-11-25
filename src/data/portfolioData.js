import { FaBrain, FaMobile, FaCloud, FaLaptopCode, FaHome, FaChartLine, FaPython, FaReact, FaAws, FaNodeJs, FaVuejs, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiTensorflow, SiMongodb, SiStripe, SiKubernetes, SiGraphql, SiPostgresql, SiWebrtc, SiMqtt, SiRedis, SiGo, SiFlutter } from 'react-icons/si';

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
    client: 'Fortune 500 Financial Services Company',
    industry: 'Financial Services',

    keyTakeaways: [
      'Implementing efficient data pipelines is crucial for real-time analytics',
      'Model accuracy improves significantly with domain-specific training data',
      'User-friendly dashboards drive higher adoption rates among non-technical users',
      'Cloud infrastructure enables cost-effective scaling'
    ],

    testimonial: {
      quote: 'This platform has transformed how we make data-driven decisions. The predictive insights have helped us identify opportunities we would have otherwise missed.',
      author: 'Chief Data Officer',
      company: 'Client Company'
    },

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
    client: 'Premium Furniture Retailer',
    industry: 'Retail & E-Commerce',

    keyTakeaways: [
      'AR features significantly reduce purchase hesitation and returns',
      'Mobile-first design is essential for modern e-commerce',
      'Simplified checkout flows directly impact conversion rates',
      'Push notifications drive re-engagement when used strategically'
    ],

    testimonial: {
      quote: 'The AR feature has been a game-changer. Our customers love being able to see how furniture looks in their homes before buying.',
      author: 'VP of Digital Commerce',
      company: 'Client Company'
    },

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
    client: 'Global Technology Corporation',
    industry: 'Enterprise Software',

    keyTakeaways: [
      'Multi-cloud strategies require unified management tools',
      'Cost visibility drives significant savings opportunities',
      'Automated alerts prevent costly downtime',
      'Containerization simplifies multi-cloud deployments'
    ],

    testimonial: {
      quote: 'This dashboard has given us complete visibility across our cloud infrastructure. The cost savings alone have paid for the project many times over.',
      author: 'Cloud Infrastructure Director',
      company: 'Client Company'
    },

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
    client: 'Regional Healthcare Network',
    industry: 'Healthcare',

    keyTakeaways: [
      'HIPAA compliance requires careful planning from day one',
      'Telemedicine has become essential for modern healthcare',
      'User experience is critical for healthcare provider adoption',
      'Security and usability must work together, not against each other'
    ],

    testimonial: {
      quote: 'This platform has revolutionized how we deliver care. Our patients love the convenience of telehealth, and our providers appreciate the intuitive interface.',
      author: 'Chief Medical Information Officer',
      company: 'Client Healthcare Network'
    },

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
    client: 'Smart Home Technology Startup',
    industry: 'IoT & Home Automation',

    keyTakeaways: [
      'IoT security must be built-in from the start',
      'Predictive AI creates magical user experiences',
      'Device compatibility is crucial for market adoption',
      'Energy optimization is a key selling point for consumers'
    ],

    testimonial: {
      quote: 'The predictive automation is incredible. The system knows what I need before I do. It\'s like having a smart assistant for my entire home.',
      author: 'Product Manager',
      company: 'Client Company'
    },

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
    client: 'Fintech Trading Platform',
    industry: 'Financial Technology',

    keyTakeaways: [
      'Performance is critical for trading applications',
      'Real-time data streaming requires careful architecture',
      'Mobile-first trading is the future of retail investing',
      'Security and compliance are non-negotiable in fintech'
    ],

    testimonial: {
      quote: 'The app is incredibly fast and reliable. I can execute trades in milliseconds and the charting tools rival desktop platforms.',
      author: 'CEO',
      company: 'Client Fintech Company'
    },

    liveUrl: null,
    githubUrl: null,
    caseStudyUrl: null
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
