import { FaBrain, FaCode, FaMobile, FaCloud, FaPaintBrush, FaRobot, FaDatabase, FaChartLine, FaEye, FaReact, FaNodeJs, FaServer, FaAndroid, FaApple, FaCog, FaAws, FaDocker, FaGitAlt, FaFigma, FaPalette, FaUsers } from 'react-icons/fa';

export const servicesData = [
  {
    id: 'ai-solutions',
    slug: 'ai-solutions',
    icon: FaBrain,
    title: 'AI Solutions',
    shortDescription: 'Custom ML models and intelligent automation solutions',
    description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions. We develop custom AI models tailored to your specific needs, from predictive analytics to computer vision applications.',
    features: ['Machine Learning', 'Neural Networks', 'Predictive Analytics', 'Computer Vision'],
    benefits: [
      'Automate complex decision-making processes',
      'Gain insights from vast amounts of data',
      'Improve accuracy and efficiency',
      'Scale intelligent automation across your organization'
    ],
    technologies: [
      { name: 'TensorFlow', icon: FaBrain },
      { name: 'PyTorch', icon: FaRobot },
      { name: 'scikit-learn', icon: FaChartLine },
      { name: 'OpenCV', icon: FaEye }
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Analysis',
        description: 'We analyze your data and business requirements to identify AI opportunities'
      },
      {
        step: 2,
        title: 'Model Development',
        description: 'Our experts build and train custom ML models using state-of-the-art algorithms'
      },
      {
        step: 3,
        title: 'Testing & Validation',
        description: 'Rigorous testing ensures accuracy and reliability before deployment'
      },
      {
        step: 4,
        title: 'Deployment & Monitoring',
        description: 'We deploy your AI solution and continuously monitor performance'
      }
    ],
    useCases: [
      {
        title: 'Predictive Maintenance',
        description: 'Forecast equipment failures before they happen, reducing downtime and costs'
      },
      {
        title: 'Intelligent Automation',
        description: 'Automate repetitive tasks with AI-powered decision making'
      },
      {
        title: 'Image Recognition',
        description: 'Identify objects, faces, and patterns in images and videos'
      },
      {
        title: 'Natural Language Processing',
        description: 'Extract insights from text, enable chatbots, and automate document processing'
      }
    ],
    faq: [
      {
        question: 'How long does it take to develop an AI solution?',
        answer: 'Timeline varies based on complexity, but typical projects range from 2-6 months including data preparation, model development, and deployment.'
      },
      {
        question: 'Do I need a large dataset?',
        answer: 'While more data generally improves accuracy, we can work with various dataset sizes and use techniques like transfer learning and data augmentation.'
      },
      {
        question: 'How do you ensure AI model accuracy?',
        answer: 'We use rigorous testing methodologies, cross-validation, and continuous monitoring to maintain high accuracy levels.'
      }
    ]
  },
  {
    id: 'web-development',
    slug: 'web-development',
    icon: FaCode,
    title: 'Web Development',
    shortDescription: 'High-performance web applications with modern frameworks',
    description: 'Build powerful, scalable web applications that deliver exceptional user experiences. Our expert team uses the latest technologies and best practices to create web solutions that drive business growth.',
    features: ['React/Vue/Angular', 'Full-Stack Development', 'Progressive Web Apps', 'API Integration'],
    benefits: [
      'Fast, responsive web applications',
      'Seamless user experiences across devices',
      'Scalable architecture for growth',
      'SEO-optimized for better visibility'
    ],
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'MongoDB', icon: FaDatabase },
      { name: 'REST APIs', icon: FaServer }
    ],
    process: [
      {
        step: 1,
        title: 'Requirements Gathering',
        description: 'We understand your business goals and define project scope'
      },
      {
        step: 2,
        title: 'Design & Architecture',
        description: 'Create wireframes, design systems, and technical architecture'
      },
      {
        step: 3,
        title: 'Development',
        description: 'Agile development with regular demos and feedback loops'
      },
      {
        step: 4,
        title: 'Testing & Launch',
        description: 'Comprehensive testing followed by deployment and support'
      }
    ],
    useCases: [
      {
        title: 'E-Commerce Platforms',
        description: 'Full-featured online stores with payment integration and inventory management'
      },
      {
        title: 'SaaS Applications',
        description: 'Cloud-based software solutions with subscription management'
      },
      {
        title: 'Corporate Websites',
        description: 'Professional websites that showcase your brand and drive conversions'
      },
      {
        title: 'Web Portals',
        description: 'Custom portals for employees, customers, or partners'
      }
    ],
    faq: [
      {
        question: 'Which technology stack do you recommend?',
        answer: 'We recommend based on your specific needs, but commonly use React/Next.js for frontend and Node.js/Express for backend.'
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer: 'Yes, we offer maintenance packages including updates, security patches, and feature enhancements.'
      },
      {
        question: 'Can you integrate with our existing systems?',
        answer: 'Absolutely! We specialize in API integrations and can connect with most third-party services and legacy systems.'
      }
    ]
  },
  {
    id: 'app-development',
    slug: 'app-development',
    icon: FaMobile,
    title: 'App Development',
    shortDescription: 'Native and cross-platform mobile experiences',
    description: 'Create stunning mobile applications that engage users and drive business results. We develop both native and cross-platform apps that deliver smooth performance and intuitive experiences.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'Native Performance'],
    benefits: [
      'Reach users on their preferred devices',
      'Native-like performance and feel',
      'Reduced development time with cross-platform',
      'App store optimization and publishing support'
    ],
    technologies: [
      { name: 'React Native', icon: FaReact },
      { name: 'iOS', icon: FaApple },
      { name: 'Android', icon: FaAndroid },
      { name: 'Firebase', icon: FaDatabase }
    ],
    process: [
      {
        step: 1,
        title: 'Strategy & Planning',
        description: 'Define app goals, target audience, and core features'
      },
      {
        step: 2,
        title: 'UI/UX Design',
        description: 'Create beautiful, intuitive designs following platform guidelines'
      },
      {
        step: 3,
        title: 'Development & Testing',
        description: 'Build and test on multiple devices for optimal performance'
      },
      {
        step: 4,
        title: 'Launch & Support',
        description: 'App store submission and ongoing maintenance'
      }
    ],
    useCases: [
      {
        title: 'On-Demand Services',
        description: 'Apps for food delivery, ride-sharing, and service marketplaces'
      },
      {
        title: 'Social Networking',
        description: 'Connect users with messaging, feeds, and real-time interactions'
      },
      {
        title: 'Fitness & Health',
        description: 'Track workouts, nutrition, and health metrics'
      },
      {
        title: 'Enterprise Apps',
        description: 'Internal tools for productivity, communication, and workflow'
      }
    ],
    faq: [
      {
        question: 'Native or cross-platform - which is better?',
        answer: 'Cross-platform (React Native/Flutter) is cost-effective for most apps. Native is best for complex, performance-critical applications.'
      },
      {
        question: 'How long does app development take?',
        answer: 'A typical MVP takes 3-4 months. Complex apps with advanced features may take 6-9 months.'
      },
      {
        question: 'Do you handle app store submissions?',
        answer: 'Yes, we manage the entire submission process including app store optimization and approval requirements.'
      }
    ]
  },
  {
    id: 'cloud-integration',
    slug: 'cloud-integration',
    icon: FaCloud,
    title: 'Cloud Integration',
    shortDescription: 'Scalable cloud-native solutions and DevOps',
    description: 'Leverage the power of cloud computing to build scalable, reliable, and cost-effective solutions. We help you migrate to the cloud and build cloud-native applications that grow with your business.',
    features: ['AWS/Azure/GCP', 'Microservices', 'DevOps & CI/CD', 'Serverless Architecture'],
    benefits: [
      'Scale resources on-demand',
      'Reduce infrastructure costs',
      'Improve reliability and uptime',
      'Faster deployment with automation'
    ],
    technologies: [
      { name: 'AWS', icon: FaAws },
      { name: 'Docker', icon: FaDocker },
      { name: 'Kubernetes', icon: FaCog },
      { name: 'CI/CD', icon: FaGitAlt }
    ],
    process: [
      {
        step: 1,
        title: 'Assessment',
        description: 'Evaluate current infrastructure and identify cloud opportunities'
      },
      {
        step: 2,
        title: 'Architecture Design',
        description: 'Design scalable, secure cloud architecture'
      },
      {
        step: 3,
        title: 'Migration & Implementation',
        description: 'Migrate applications and data with minimal downtime'
      },
      {
        step: 4,
        title: 'Optimization',
        description: 'Continuous monitoring and cost optimization'
      }
    ],
    useCases: [
      {
        title: 'Cloud Migration',
        description: 'Move legacy applications to cloud infrastructure'
      },
      {
        title: 'Microservices Architecture',
        description: 'Break monoliths into scalable, independent services'
      },
      {
        title: 'DevOps Automation',
        description: 'Implement CI/CD pipelines for faster releases'
      },
      {
        title: 'Serverless Applications',
        description: 'Build event-driven applications without managing servers'
      }
    ],
    faq: [
      {
        question: 'Which cloud provider should I choose?',
        answer: 'AWS, Azure, and GCP all offer excellent services. We recommend based on your specific needs, existing tools, and cost considerations.'
      },
      {
        question: 'How much can I save with cloud migration?',
        answer: 'Savings vary, but clients typically see 20-40% reduction in infrastructure costs through optimization and pay-as-you-go pricing.'
      },
      {
        question: 'Is cloud migration risky?',
        answer: 'With proper planning and our expertise, risks are minimal. We use phased approaches and extensive testing to ensure smooth migrations.'
      }
    ]
  },
  {
    id: 'uiux-design',
    slug: 'uiux-design',
    icon: FaPaintBrush,
    title: 'UI/UX Design',
    shortDescription: 'Beautiful, intuitive user experiences',
    description: 'Create engaging digital experiences that users love. Our design team combines aesthetics with usability to craft interfaces that are both beautiful and functional.',
    features: ['User Research', 'Prototyping', 'Design Systems', 'Usability Testing'],
    benefits: [
      'Increase user satisfaction and engagement',
      'Reduce development time with clear designs',
      'Improve conversion rates',
      'Build consistent brand experiences'
    ],
    technologies: [
      { name: 'Figma', icon: FaFigma },
      { name: 'Design Systems', icon: FaPalette },
      { name: 'User Testing', icon: FaUsers },
      { name: 'Prototyping', icon: FaCog }
    ],
    process: [
      {
        step: 1,
        title: 'Research',
        description: 'Understand users, competitors, and market landscape'
      },
      {
        step: 2,
        title: 'Wireframing',
        description: 'Create low-fidelity layouts and information architecture'
      },
      {
        step: 3,
        title: 'Visual Design',
        description: 'Develop high-fidelity mockups and interactive prototypes'
      },
      {
        step: 4,
        title: 'Testing & Iteration',
        description: 'Validate designs with users and refine based on feedback'
      }
    ],
    useCases: [
      {
        title: 'Website Redesign',
        description: 'Modernize outdated websites with fresh, user-friendly designs'
      },
      {
        title: 'Mobile App Design',
        description: 'Create intuitive mobile experiences that users love'
      },
      {
        title: 'Design Systems',
        description: 'Build scalable component libraries for consistent UIs'
      },
      {
        title: 'User Experience Audit',
        description: 'Identify and fix usability issues in existing products'
      }
    ],
    faq: [
      {
        question: 'Do you conduct user research?',
        answer: 'Yes, we offer user interviews, surveys, usability testing, and analytics review to inform design decisions.'
      },
      {
        question: 'What deliverables do you provide?',
        answer: 'Wireframes, high-fidelity mockups, interactive prototypes, design systems, and developer handoff documentation.'
      },
      {
        question: 'Can you work with our developers?',
        answer: 'Absolutely! We collaborate closely with development teams to ensure designs are implemented correctly.'
      }
    ]
  }
];

export const getServiceBySlug = (slug) => {
  return servicesData.find(service => service.slug === slug);
};

export const getAllServiceSlugs = () => {
  return servicesData.map(service => service.slug);
};
