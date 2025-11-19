import {
  FaHeartbeat, FaBalanceScale, FaTruck, FaGraduationCap, FaVideo, FaPlane,
  FaShoppingBag, FaHardHat, FaBasketballBall, FaStore, FaCreditCard, FaInstagram,
  FaShieldAlt, FaIndustry, FaWifi, FaSpa, FaStar, FaShoppingCart, FaHospital,
  FaStethoscope, FaUsers, FaChartLine, FaFileAlt, FaCalendarAlt, FaGavel,
  FaSearch, FaComments, FaClock, FaMap, FaWarehouse, FaBoxes, FaRoute,
  FaBook, FaChalkboardTeacher, FaLaptop, FaClipboardCheck, FaMobileAlt,
  FaFilm, FaCloud, FaTv, FaHotel, FaTicketAlt, FaUserTie, FaCashRegister,
  FaHeart, FaTag, FaBuilding, FaTools, FaFileSignature, FaHardHat as FaHelmet,
  FaTrophy, FaFutbol, FaMedal, FaDatabase, FaHandshake, FaStar as FaRating,
  FaDollarSign, FaWallet, FaChartPie, FaCheckCircle, FaUserFriends, FaComment,
  FaBell, FaFileInvoiceDollar, FaCalculator, FaRobot, FaCogs, FaNetworkWired,
  FaSignal, FaHeadset, FaCut, FaPalette, FaCamera, FaGift, FaMapMarkerAlt,
  FaMoneyBillWave, FaShoppingBasket, FaBullhorn
} from 'react-icons/fa';

export const industriesData = [
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare',
    icon: FaHeartbeat,
    shortDescription: 'Digital transformation for modern healthcare',
    description: 'Transform patient care with cutting-edge technology solutions. We help healthcare organizations improve patient outcomes, streamline operations, and ensure compliance with HIPAA and other regulations.',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    challenges: [
      'Data security and privacy compliance',
      'Integration with legacy systems',
      'Managing patient data across platforms',
      'Ensuring system uptime and reliability'
    ],
    whyChooseUs: [
      'HIPAA-compliant solutions built from the ground up',
      'Experience with major healthcare providers',
      'Expertise in HL7 and FHIR standards',
      'Focus on user-friendly patient experiences'
    ],
    faq: [
      {
        question: 'How do you ensure HIPAA compliance?',
        answer: 'We follow strict HIPAA guidelines in all development phases, including encryption, access controls, audit logs, and regular security assessments.'
      },
      {
        question: 'Can you integrate with existing EHR systems?',
        answer: 'Yes, we have extensive experience integrating with major EHR systems using HL7, FHIR, and custom APIs.'
      },
      {
        question: 'What is the typical timeline for a healthcare project?',
        answer: 'Timeline varies based on complexity, but most projects range from 3-9 months including planning, development, testing, and deployment.'
      }
    ],
    caseStudies: [
      {
        title: 'Telemedicine Platform',
        description: 'Built a comprehensive telehealth solution serving 50,000+ patients',
        results: '10,000+ virtual consultations per month'
      }
    ],
    technologies: ['React', 'Node.js', 'FHIR', 'WebRTC', 'AWS'],
    color: '#667eea'
  },
  {
    id: 'legal',
    slug: 'legal',
    name: 'Legal',
    icon: FaBalanceScale,
    shortDescription: 'Technology solutions for law firms',
    description: 'Empower legal professionals with innovative technology. From case management to document automation, we help law firms work smarter and serve clients better.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
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
    challenges: [
      'Managing large volumes of case documents',
      'Ensuring data confidentiality and security',
      'Tracking billable hours accurately',
      'Coordinating across multiple cases and clients'
    ],
    whyChooseUs: [
      'Built-in security and confidentiality features',
      'Experience with legal workflow automation',
      'Integration with court filing systems',
      'Customizable to different practice areas'
    ],
    faq: [
      {
        question: 'Is the system secure for confidential legal documents?',
        answer: 'Yes, we implement bank-level encryption, role-based access control, and audit trails to ensure complete confidentiality and security.'
      },
      {
        question: 'Can it integrate with existing legal research databases?',
        answer: 'Absolutely. We provide integrations with major legal research platforms like Westlaw, LexisNexis, and others.'
      },
      {
        question: 'How does the billing and time tracking work?',
        answer: 'Our system offers automatic time tracking, customizable billing rates, and integration with accounting software for seamless invoicing.'
      }
    ],
    caseStudies: [
      {
        title: 'Case Management Platform',
        description: 'Developed comprehensive legal practice management software',
        results: '500+ law firms using the platform'
      }
    ],
    technologies: ['React', 'Python', 'PostgreSQL', 'Elasticsearch', 'Azure'],
    color: '#4facfe'
  },
  {
    id: 'logistics',
    slug: 'logistics',
    name: 'Logistics',
    icon: FaTruck,
    shortDescription: 'Smart solutions for supply chain management',
    description: 'Optimize your supply chain with intelligent logistics solutions. Real-time tracking, route optimization, and predictive analytics to keep your business moving.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
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
    challenges: [
      'Managing complex supply chain networks',
      'Real-time tracking across multiple locations',
      'Optimizing routes for cost efficiency',
      'Coordinating between warehouses and delivery points'
    ],
    whyChooseUs: [
      'Advanced AI-powered route optimization',
      'Real-time GPS tracking integration',
      'Scalable cloud-based solutions',
      'Experience with major logistics providers'
    ],
    faq: [
      {
        question: 'How accurate is the real-time tracking?',
        answer: 'Our GPS-based tracking provides location updates every 30 seconds with 99.9% accuracy, ensuring complete visibility of your fleet.'
      },
      {
        question: 'Can the system handle international shipments?',
        answer: 'Yes, our platform supports multi-country operations, customs documentation, and international carrier integrations.'
      },
      {
        question: 'How does route optimization work?',
        answer: 'We use machine learning algorithms that consider traffic, weather, delivery windows, and vehicle capacity to create the most efficient routes.'
      }
    ],
    caseStudies: [
      {
        title: 'Fleet Tracking System',
        description: 'Real-time tracking solution for 1,000+ vehicles',
        results: '30% reduction in fuel costs'
      }
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'GPS API', 'Google Maps'],
    color: '#f093fb'
  },
  {
    id: 'education',
    slug: 'education',
    name: 'Education',
    icon: FaGraduationCap,
    shortDescription: 'EdTech solutions for modern learning',
    description: 'Transform education with innovative learning platforms. From LMS to virtual classrooms, we help educational institutions deliver engaging digital experiences.',
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
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
    challenges: [
      'Engaging students in virtual environments',
      'Managing diverse learning styles',
      'Tracking student progress effectively',
      'Ensuring accessibility for all students'
    ],
    whyChooseUs: [
      'Interactive and engaging learning interfaces',
      'Built-in accessibility features',
      'Integration with popular educational tools',
      'Proven track record with educational institutions'
    ],
    faq: [
      {
        question: 'Does the platform support both live and recorded classes?',
        answer: 'Yes, our platform supports live virtual classrooms with recording capabilities, allowing students to review content at their own pace.'
      },
      {
        question: 'Can parents track their child\'s progress?',
        answer: 'Absolutely. We provide dedicated parent portals with real-time access to grades, assignments, and attendance records.'
      },
      {
        question: 'Is the system mobile-friendly?',
        answer: 'Yes, our platform is fully responsive and includes dedicated mobile apps for iOS and Android devices.'
      }
    ],
    caseStudies: [
      {
        title: 'Online Learning Platform',
        description: 'Built LMS platform serving 100,000+ students',
        results: '95% student satisfaction rate'
      }
    ],
    technologies: ['React', 'Django', 'PostgreSQL', 'WebRTC', 'AWS'],
    color: '#30cfd0'
  },
  {
    id: 'media-ott',
    slug: 'media-ott',
    name: 'Media & OTT',
    icon: FaVideo,
    shortDescription: 'Streaming and content delivery platforms',
    description: 'Build the next generation of media and entertainment platforms. From OTT streaming to content management, we create engaging digital experiences.',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
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
      'Monetization options',
      'Real-time analytics'
    ],
    challenges: [
      'Delivering high-quality video at scale',
      'Managing content rights and licensing',
      'Providing seamless multi-device experience',
      'Implementing effective content discovery'
    ],
    whyChooseUs: [
      'Experience with major streaming platforms',
      'Advanced CDN and adaptive streaming',
      'AI-powered content recommendations',
      'Comprehensive DRM and security'
    ],
    faq: [
      {
        question: 'What video quality and formats do you support?',
        answer: 'We support 4K, HDR, and adaptive bitrate streaming in all major formats including HLS, DASH, and Smooth Streaming.'
      },
      {
        question: 'How do you handle content protection?',
        answer: 'We implement industry-standard DRM solutions including Widevine, PlayReady, and FairPlay to protect your premium content.'
      },
      {
        question: 'Can the platform handle live events?',
        answer: 'Yes, our platform supports ultra-low latency live streaming for sports, concerts, and other live events with millions of concurrent viewers.'
      }
    ],
    caseStudies: [
      {
        title: 'OTT Streaming Platform',
        description: 'Developed Netflix-like platform with 1M+ subscribers',
        results: '10M+ hours of content streamed monthly'
      }
    ],
    technologies: ['React', 'Node.js', 'FFmpeg', 'AWS Media Services', 'CDN'],
    color: '#fa709a'
  },
  {
    id: 'travel',
    slug: 'travel',
    name: 'Travel',
    icon: FaPlane,
    shortDescription: 'Digital solutions for travel and hospitality',
    description: 'Transform the travel experience with innovative technology. Booking systems, itinerary management, and personalized recommendations.',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    challenges: [
      'Managing real-time inventory across providers',
      'Handling complex pricing and availability',
      'Integrating multiple booking systems',
      'Providing 24/7 customer support'
    ],
    whyChooseUs: [
      'Integration with major GDS systems',
      'AI-powered travel recommendations',
      'Multi-currency and multi-language support',
      'Experience with leading travel brands'
    ],
    faq: [
      {
        question: 'Do you integrate with airline and hotel booking systems?',
        answer: 'Yes, we integrate with major GDS systems like Amadeus, Sabre, and Travelport, plus direct hotel and activity booking APIs.'
      },
      {
        question: 'How do you handle payment processing?',
        answer: 'We support multiple payment gateways with PCI DSS compliance, supporting credit cards, digital wallets, and local payment methods.'
      },
      {
        question: 'Can travelers modify or cancel bookings?',
        answer: 'Yes, our platform includes self-service booking management with automated refund processing based on provider policies.'
      }
    ],
    caseStudies: [
      {
        title: 'Travel Booking Platform',
        description: 'Built comprehensive travel booking system',
        results: '500K+ bookings processed annually'
      }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Payment Gateways', 'Google APIs'],
    color: '#667eea'
  },
  {
    id: 'retail',
    slug: 'retail',
    name: 'Retail',
    icon: FaShoppingBag,
    shortDescription: 'E-commerce and retail technology',
    description: 'Modernize retail operations with digital solutions. From e-commerce platforms to POS systems, we help retailers thrive in the digital age.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
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
    challenges: [
      'Synchronizing inventory across channels',
      'Managing omnichannel customer experience',
      'Handling peak traffic during sales',
      'Integrating online and offline operations'
    ],
    whyChooseUs: [
      'Proven e-commerce platform expertise',
      'Seamless omnichannel integration',
      'Advanced personalization engines',
      'Scalable infrastructure for peak loads'
    ],
    faq: [
      {
        question: 'Can you integrate with existing POS systems?',
        answer: 'Yes, we provide integrations with major POS systems and can develop custom integrations for proprietary systems.'
      },
      {
        question: 'How do you handle inventory synchronization?',
        answer: 'Our real-time inventory management system syncs across all channels, preventing overselling and optimizing stock levels.'
      },
      {
        question: 'Do you support multiple payment methods?',
        answer: 'Yes, we integrate with all major payment gateways and support credit cards, digital wallets, BNPL, and local payment methods.'
      }
    ],
    caseStudies: [
      {
        title: 'E-Commerce Platform',
        description: 'Built modern online store with AR features',
        results: '3x increase in online conversion rate'
      }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Shopify'],
    color: '#4facfe'
  },
  {
    id: 'construction',
    slug: 'construction',
    name: 'Construction',
    icon: FaHardHat,
    shortDescription: 'Construction management solutions',
    description: 'Build better with digital tools. Project management, resource planning, and site tracking solutions for modern construction.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
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
    challenges: [
      'Coordinating multiple stakeholders',
      'Managing complex project timelines',
      'Tracking equipment and materials',
      'Ensuring safety compliance on site'
    ],
    whyChooseUs: [
      'Purpose-built for construction industry',
      'Integration with CAD and BIM systems',
      'Mobile-first for on-site access',
      'Compliance with safety regulations'
    ],
    faq: [
      {
        question: 'Does the system work offline on construction sites?',
        answer: 'Yes, our mobile app includes offline mode with automatic sync when connection is restored.'
      },
      {
        question: 'Can you integrate with BIM software?',
        answer: 'Absolutely. We provide integrations with major BIM platforms like Revit, AutoCAD, and Navisworks.'
      },
      {
        question: 'How do you track equipment and materials?',
        answer: 'We use QR codes, RFID, and GPS tracking to monitor equipment location, usage, and maintenance schedules in real-time.'
      }
    ],
    caseStudies: [
      {
        title: 'Construction Management Platform',
        description: 'Developed comprehensive project management solution',
        results: '50+ construction projects managed'
      }
    ],
    technologies: ['React', 'Python', 'PostgreSQL', 'GPS Tracking', 'Cloud Storage'],
    color: '#f093fb'
  },
  {
    id: 'sports',
    slug: 'sports',
    name: 'Sports',
    icon: FaBasketballBall,
    shortDescription: 'Sports technology and fan engagement',
    description: 'Engage fans and optimize performance with sports technology. From fan apps to performance analytics, we bring innovation to sports.',
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
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
    challenges: [
      'Delivering real-time scores and updates',
      'Engaging fans during and after games',
      'Managing high traffic during live events',
      'Providing personalized fan experiences'
    ],
    whyChooseUs: [
      'Experience with major sports leagues',
      'Real-time data processing capabilities',
      'Engaging gamification features',
      'Integration with wearables and sensors'
    ],
    faq: [
      {
        question: 'How fast are live score updates?',
        answer: 'Our platform provides sub-second live score updates using WebSocket technology for real-time fan engagement.'
      },
      {
        question: 'Can the system handle peak traffic during major events?',
        answer: 'Yes, our cloud infrastructure auto-scales to handle millions of concurrent users during major sporting events.'
      },
      {
        question: 'Do you support fantasy sports features?',
        answer: 'Yes, we can build comprehensive fantasy sports platforms with live scoring, team management, and prize distribution.'
      }
    ],
    caseStudies: [
      {
        title: 'Sports Fan App',
        description: 'Built fan engagement platform for major league',
        results: '1M+ active users'
      }
    ],
    technologies: ['React Native', 'Node.js', 'Redis', 'WebSocket', 'AWS'],
    color: '#30cfd0'
  },
  {
    id: 'marketplace',
    slug: 'marketplace',
    name: 'Marketplace',
    icon: FaStore,
    shortDescription: 'Multi-vendor marketplace platforms',
    description: 'Build thriving marketplaces that connect buyers and sellers. Scalable platforms with robust features for multi-vendor success.',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
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
    challenges: [
      'Managing thousands of vendors and products',
      'Ensuring quality control across vendors',
      'Handling complex payment splits',
      'Providing fair dispute resolution'
    ],
    whyChooseUs: [
      'Experience building successful marketplaces',
      'Advanced vendor analytics and reporting',
      'Automated commission calculations',
      'Built-in fraud detection'
    ],
    faq: [
      {
        question: 'How do you handle vendor payments and commissions?',
        answer: 'Our platform automates payment splits, commission calculations, and vendor payouts with complete transparency and reporting.'
      },
      {
        question: 'Can vendors manage their own stores?',
        answer: 'Yes, vendors get dedicated dashboards to manage products, orders, inventory, and view analytics.'
      },
      {
        question: 'How do you prevent fraudulent sellers?',
        answer: 'We implement multi-level verification, automated fraud detection, and rating systems to maintain marketplace quality.'
      }
    ],
    caseStudies: [
      {
        title: 'Online Marketplace',
        description: 'Built marketplace platform with 10,000+ vendors',
        results: '$10M+ in monthly transactions'
      }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Elasticsearch'],
    color: '#fa709a'
  },
  {
    id: 'finance',
    slug: 'finance',
    name: 'Finance',
    icon: FaCreditCard,
    shortDescription: 'FinTech and banking solutions',
    description: 'Transform financial services with innovative technology. Secure, compliant, and user-friendly solutions for modern finance.',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
      'Fraud detection',
      'Customer satisfaction'
    ],
    challenges: [
      'Meeting strict regulatory requirements',
      'Ensuring transaction security',
      'Preventing fraud and money laundering',
      'Providing real-time transaction processing'
    ],
    whyChooseUs: [
      'Experience with financial regulations',
      'Bank-grade security infrastructure',
      'Real-time fraud detection',
      'PCI DSS and SOC 2 compliance'
    ],
    faq: [
      {
        question: 'How do you ensure transaction security?',
        answer: 'We implement end-to-end encryption, multi-factor authentication, and real-time fraud detection to secure all transactions.'
      },
      {
        question: 'Are your solutions compliant with financial regulations?',
        answer: 'Yes, we ensure compliance with regulations including PCI DSS, SOC 2, GDPR, and regional banking requirements.'
      },
      {
        question: 'Can you integrate with existing banking systems?',
        answer: 'Absolutely. We have experience integrating with core banking systems, payment processors, and financial data providers.'
      }
    ],
    caseStudies: [
      {
        title: 'Digital Banking Platform',
        description: 'Built mobile banking app for regional bank',
        results: '500K+ active users'
      }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Blockchain', 'AWS'],
    color: '#667eea'
  },
  {
    id: 'social-media',
    slug: 'social-media',
    name: 'Social Media',
    icon: FaInstagram,
    shortDescription: 'Social networking and community platforms',
    description: 'Build engaging social platforms that connect people. From social networks to community forums, we create spaces for interaction.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
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
      'Content moderation',
      'User engagement tools',
      'Analytics & insights'
    ],
    challenges: [
      'Moderating user-generated content',
      'Scaling to millions of users',
      'Preventing spam and abuse',
      'Maintaining user engagement'
    ],
    whyChooseUs: [
      'Experience with viral social platforms',
      'AI-powered content moderation',
      'Real-time messaging infrastructure',
      'Advanced recommendation algorithms'
    ],
    faq: [
      {
        question: 'How do you handle content moderation?',
        answer: 'We implement AI-powered moderation tools combined with human review workflows to maintain community standards.'
      },
      {
        question: 'Can the platform scale to millions of users?',
        answer: 'Yes, our microservices architecture and cloud infrastructure can scale horizontally to support millions of concurrent users.'
      },
      {
        question: 'Do you support real-time notifications?',
        answer: 'Yes, we implement push notifications, in-app notifications, and email alerts for real-time user engagement.'
      }
    ],
    caseStudies: [
      {
        title: 'Social Platform',
        description: 'Developed niche social network',
        results: '2M+ registered users'
      }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'Redis'],
    color: '#4facfe'
  },
  {
    id: 'insurance',
    slug: 'insurance',
    name: 'Insurance',
    icon: FaShieldAlt,
    shortDescription: 'Insurance technology solutions',
    description: 'Modernize insurance operations with digital solutions. From policy management to claims processing, streamline your insurance business.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
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
    challenges: [
      'Processing claims quickly and accurately',
      'Assessing risk effectively',
      'Managing regulatory compliance',
      'Preventing insurance fraud'
    ],
    whyChooseUs: [
      'AI-powered risk assessment',
      'Automated claims processing',
      'Integration with third-party data sources',
      'Compliance with insurance regulations'
    ],
    faq: [
      {
        question: 'How fast can claims be processed?',
        answer: 'Our automated system can process simple claims in minutes, with complex claims routed to adjusters with all necessary data pre-populated.'
      },
      {
        question: 'Do you support multiple insurance types?',
        answer: 'Yes, our platform supports life, health, auto, property, and commercial insurance with customizable workflows.'
      },
      {
        question: 'How do you detect fraudulent claims?',
        answer: 'We use machine learning models that analyze patterns, cross-reference databases, and flag suspicious claims for investigation.'
      }
    ],
    caseStudies: [
      {
        title: 'Insurance Management Platform',
        description: 'Built comprehensive insurance management system',
        results: '100K+ policies managed'
      }
    ],
    technologies: ['React', 'Python', 'PostgreSQL', 'AI/ML', 'AWS'],
    color: '#f093fb'
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Manufacturing',
    icon: FaIndustry,
    shortDescription: 'Industry 4.0 and smart manufacturing',
    description: 'Transform manufacturing with Industry 4.0 solutions. IoT, automation, and analytics for smarter production.',
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
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
    challenges: [
      'Integrating legacy manufacturing equipment',
      'Collecting and analyzing IoT data',
      'Minimizing production downtime',
      'Maintaining product quality consistency'
    ],
    whyChooseUs: [
      'Experience with Industry 4.0 implementations',
      'IoT sensor integration expertise',
      'Predictive maintenance algorithms',
      'Real-time production monitoring'
    ],
    faq: [
      {
        question: 'Can you connect to existing manufacturing equipment?',
        answer: 'Yes, we provide IoT gateways and adapters to connect legacy equipment to our cloud platform.'
      },
      {
        question: 'How does predictive maintenance work?',
        answer: 'Our AI analyzes sensor data to predict equipment failures before they occur, scheduling maintenance during planned downtime.'
      },
      {
        question: 'Is real-time monitoring available?',
        answer: 'Yes, we provide dashboards showing live production metrics, equipment status, and quality indicators.'
      }
    ],
    caseStudies: [
      {
        title: 'Smart Factory Solution',
        description: 'Implemented IoT-based manufacturing solution',
        results: '40% increase in productivity'
      }
    ],
    technologies: ['React', 'Python', 'IoT Devices', 'MongoDB', 'Azure'],
    color: '#30cfd0'
  },
  {
    id: 'it-telecom',
    slug: 'it-telecom',
    name: 'IT & Telecom',
    icon: FaWifi,
    shortDescription: 'Telecom and IT infrastructure solutions',
    description: 'Build the backbone of digital communication. Network management, service provisioning, and customer management solutions.',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
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
    challenges: [
      'Managing complex network infrastructure',
      'Accurate billing for diverse services',
      'Minimizing network downtime',
      'Providing 24/7 customer support'
    ],
    whyChooseUs: [
      'Deep telecom industry expertise',
      'Carrier-grade reliability',
      'Real-time network monitoring',
      'Integration with existing OSS/BSS systems'
    ],
    faq: [
      {
        question: 'Can you integrate with existing telecom infrastructure?',
        answer: 'Yes, we have extensive experience integrating with OSS/BSS systems, network equipment, and legacy platforms.'
      },
      {
        question: 'How do you ensure billing accuracy?',
        answer: 'Our system validates charges in real-time, provides detailed usage tracking, and includes reconciliation tools to ensure accuracy.'
      },
      {
        question: 'Do you support prepaid and postpaid models?',
        answer: 'Yes, our platform supports both prepaid and postpaid billing with flexible rating and charging capabilities.'
      }
    ],
    caseStudies: [
      {
        title: 'Telecom Management Platform',
        description: 'Built network management solution',
        results: 'Serving 1M+ subscribers'
      }
    ],
    technologies: ['React', 'Java', 'Oracle', 'Kafka', 'Microservices'],
    color: '#fa709a'
  },
  {
    id: 'beauty-lifestyle',
    slug: 'beauty-lifestyle',
    name: 'Beauty & Lifestyle',
    icon: FaSpa,
    shortDescription: 'Beauty and wellness technology',
    description: 'Enhance beauty and wellness businesses with digital solutions. Booking systems, inventory management, and customer engagement tools.',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    challenges: [
      'Managing appointment schedules efficiently',
      'Tracking product inventory',
      'Building customer loyalty',
      'Providing personalized recommendations'
    ],
    whyChooseUs: [
      'Experience with beauty and wellness brands',
      'AR-powered virtual try-on features',
      'Integrated POS and booking systems',
      'Customer loyalty and retention tools'
    ],
    faq: [
      {
        question: 'Does the booking system send reminders?',
        answer: 'Yes, our system sends automated SMS and email reminders to reduce no-shows and keep clients informed.'
      },
      {
        question: 'Can clients book services online?',
        answer: 'Absolutely. Clients can book appointments 24/7 through your website or mobile app with real-time availability.'
      },
      {
        question: 'How does the virtual try-on work?',
        answer: 'We use AR technology to let customers virtually try makeup, hair colors, and accessories using their device camera.'
      }
    ],
    caseStudies: [
      {
        title: 'Beauty Booking Platform',
        description: 'Built appointment booking platform for salons',
        results: '50K+ appointments booked monthly'
      }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AR/VR', 'Stripe'],
    color: '#667eea'
  },
  {
    id: 'on-demand',
    slug: 'on-demand',
    name: 'On Demand',
    icon: FaStar,
    shortDescription: 'On-demand service platforms',
    description: 'Build on-demand platforms that connect service providers with customers. Real-time matching, tracking, and payment solutions.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
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
    challenges: [
      'Matching supply with demand in real-time',
      'Ensuring service quality',
      'Managing peak demand periods',
      'Balancing pricing and availability'
    ],
    whyChooseUs: [
      'Experience building Uber-like platforms',
      'Advanced matching algorithms',
      'Real-time GPS tracking',
      'Surge pricing capabilities'
    ],
    faq: [
      {
        question: 'How does the matching algorithm work?',
        answer: 'Our algorithm considers location, availability, ratings, pricing, and customer preferences to match the best service provider in real-time.'
      },
      {
        question: 'Can service providers set their own rates?',
        answer: 'Yes, providers can set base rates while the platform can implement dynamic pricing based on demand and other factors.'
      },
      {
        question: 'How do you ensure service quality?',
        answer: 'We implement rating systems, customer reviews, background checks, and automated quality monitoring to maintain high standards.'
      }
    ],
    caseStudies: [
      {
        title: 'On-Demand Service Platform',
        description: 'Built Uber-like platform for home services',
        results: '100K+ service providers onboarded'
      }
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps', 'Stripe'],
    color: '#4facfe'
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    name: 'E-Commerce',
    icon: FaShoppingCart,
    shortDescription: 'Full-stack e-commerce solutions',
    description: 'Build powerful e-commerce platforms that drive sales. From storefronts to payment processing, complete e-commerce solutions.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
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
      'Seamless checkout',
      'Multi-channel selling',
      'Customer insights'
    ],
    challenges: [
      'Converting visitors into customers',
      'Managing large product catalogs',
      'Providing fast and secure checkout',
      'Handling returns and refunds'
    ],
    whyChooseUs: [
      'Proven track record with e-commerce success',
      'Conversion optimization expertise',
      'Integration with major platforms',
      'Advanced personalization engines'
    ],
    faq: [
      {
        question: 'Can you integrate with existing inventory systems?',
        answer: 'Yes, we provide seamless integration with ERP systems, inventory management tools, and fulfillment centers.'
      },
      {
        question: 'Do you support international selling?',
        answer: 'Absolutely. Our platform supports multi-currency, multi-language, international shipping, and tax calculation.'
      },
      {
        question: 'How do you optimize conversion rates?',
        answer: 'We implement A/B testing, personalization, abandoned cart recovery, and checkout optimization to maximize conversions.'
      }
    ],
    caseStudies: [
      {
        title: 'E-Commerce Platform',
        description: 'Built enterprise e-commerce solution',
        results: '$50M+ annual revenue'
      }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    color: '#f093fb'
  }
];

export const getIndustryBySlug = (slug) => {
  return industriesData.find(industry => industry.slug === slug);
};

export const getAllIndustrySlugs = () => {
  return industriesData.map(industry => industry.slug);
};
