import { FaBrain, FaCode, FaMobile, FaCloud, FaPaintBrush, FaRobot, FaChartLine, FaTools, FaCamera, FaComments, FaShoppingCart, FaBuilding, FaLayerGroup, FaTruck, FaUserFriends, FaHeartbeat, FaBriefcase, FaCloudUploadAlt, FaCubes, FaCodeBranch, FaBolt, FaMagic, FaMobileAlt, FaSearchPlus, FaBullhorn, FaGoogle, FaFacebookF, FaInstagram, FaEnvelope, FaSearch, FaPencilAlt } from 'react-icons/fa';

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
      { name: 'OpenAI', iconUrl: '/images/tech-icons/openai.svg' },
      { name: 'Codex', iconUrl: '/images/tech-icons/codex.svg' },
      { name: 'Vertex AI', iconUrl: '/images/tech-icons/vertexai.svg' },
      { name: 'Cloud Vision', iconUrl: '/images/tech-icons/cloudvision.svg' },
      { name: 'OpenCV', iconUrl: '/images/tech-icons/opencv.svg' },
      { name: 'TensorFlow', iconUrl: '/images/tech-icons/tensorflow.svg' },
      { name: 'IBM Watson', iconUrl: '/images/tech-icons/ibm-watson.svg' },
      { name: 'Cloud Natural Language', iconUrl: '/images/tech-icons/cloud-nlp.svg' },
      { name: 'Cognitive Services', iconUrl: '/images/tech-icons/cognitive-services.svg' },
      { name: 'Bot Framework', iconUrl: '/images/tech-icons/bot-framework.svg' },
      { name: 'Mistral', iconUrl: '/images/tech-icons/mistral.svg' },
      { name: 'Meta Llama', iconUrl: '/images/tech-icons/llama.svg' },
      { name: 'Gemini', iconUrl: '/images/tech-icons/gemini.svg' },
      { name: 'Anthropic', iconUrl: '/images/tech-icons/anthropic.svg' },
      { name: 'N8N', iconUrl: '/images/tech-icons/n8n.svg' }
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
        description: 'Forecast equipment failures before they happen, reducing downtime and costs',
        icon: FaTools
      },
      {
        title: 'Intelligent Automation',
        description: 'Automate repetitive tasks with AI-powered decision making',
        icon: FaRobot
      },
      {
        title: 'Image Recognition',
        description: 'Identify objects, faces, and patterns in images and videos',
        icon: FaCamera
      },
      {
        title: 'Natural Language Processing',
        description: 'Extract insights from text, enable chatbots, and automate document processing',
        icon: FaComments
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
      { name: 'PHP', iconUrl: '/images/tech-icons/php.svg' },
      { name: '.NET', iconUrl: '/images/tech-icons/dotnet.svg' },
      { name: 'Java', iconUrl: '/images/tech-icons/java.svg' },
      { name: 'HTML5', iconUrl: '/images/tech-icons/html5.svg' },
      { name: 'Drupal', iconUrl: '/images/tech-icons/drupal.svg' },
      { name: 'Joomla', iconUrl: '/images/tech-icons/joomla.svg' },
      { name: 'Wordpress', iconUrl: '/images/tech-icons/wordpress.svg' },
      { name: 'Magento', iconUrl: '/images/tech-icons/magento.svg' },
      { name: 'Shopify', iconUrl: '/images/tech-icons/shopify.svg' },
      { name: 'Node .JS', iconUrl: '/images/tech-icons/nodedotjs.svg' },
      { name: 'AngularJS', iconUrl: '/images/tech-icons/angularjs.svg' },
      { name: 'Mongo DB', iconUrl: '/images/tech-icons/mongodb.svg' },
      { name: 'MySQL', iconUrl: '/images/tech-icons/mysql.svg' },
      { name: 'MsSQL', iconUrl: '/images/tech-icons/microsoftsqlserver.svg' }
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
        description: 'Full-featured online stores with payment integration and inventory management',
        icon: FaShoppingCart
      },
      {
        title: 'SaaS Applications',
        description: 'Cloud-based software solutions with subscription management',
        icon: FaCloud
      },
      {
        title: 'Corporate Websites',
        description: 'Professional websites that showcase your brand and drive conversions',
        icon: FaBuilding
      },
      {
        title: 'Web Portals',
        description: 'Custom portals for employees, customers, or partners',
        icon: FaLayerGroup
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
      { name: 'React Native', iconUrl: '/images/tech-icons/reactnative.svg' },
      { name: 'iOS', iconUrl: '/images/tech-icons/ios.svg' },
      { name: 'Android', iconUrl: '/images/tech-icons/android.svg' },
      { name: 'Firebase', iconUrl: '/images/tech-icons/firebase.svg' }
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
        description: 'Apps for food delivery, ride-sharing, and service marketplaces',
        icon: FaTruck
      },
      {
        title: 'Social Networking',
        description: 'Connect users with messaging, feeds, and real-time interactions',
        icon: FaUserFriends
      },
      {
        title: 'Fitness & Health',
        description: 'Track workouts, nutrition, and health metrics',
        icon: FaHeartbeat
      },
      {
        title: 'Enterprise Apps',
        description: 'Internal tools for productivity, communication, and workflow',
        icon: FaBriefcase
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
      { name: 'AWS', iconUrl: '/images/tech-icons/aws.svg' },
      { name: 'Azure', iconUrl: '/images/tech-icons/azure.svg' },
      { name: 'GCP', iconUrl: '/images/tech-icons/gcp.svg' },
      { name: 'Docker', iconUrl: '/images/tech-icons/docker.svg' },
      { name: 'Kubernetes', iconUrl: '/images/tech-icons/kubernetes.svg' },
      { name: 'Terraform', iconUrl: '/images/tech-icons/terraform.svg' },
      { name: 'GitHub Actions', iconUrl: '/images/tech-icons/githubactions.svg' },
      { name: 'Jenkins', iconUrl: '/images/tech-icons/jenkins.svg' },
      { name: 'GitLab', iconUrl: '/images/tech-icons/gitlab.svg' },
      { name: 'Ansible', iconUrl: '/images/tech-icons/ansible.svg' }
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
        description: 'Move legacy applications to cloud infrastructure',
        icon: FaCloudUploadAlt
      },
      {
        title: 'Microservices Architecture',
        description: 'Break monoliths into scalable, independent services',
        icon: FaCubes
      },
      {
        title: 'DevOps Automation',
        description: 'Implement CI/CD pipelines for faster releases',
        icon: FaCodeBranch
      },
      {
        title: 'Serverless Applications',
        description: 'Build event-driven applications without managing servers',
        icon: FaBolt
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
      { name: 'Figma', iconUrl: '/images/tech-icons/figma.svg' },
      { name: 'Adobe XD', iconUrl: '/images/tech-icons/adobexd.svg' },
      { name: 'Sketch', iconUrl: '/images/tech-icons/sketch.svg' },
      { name: 'InVision', iconUrl: '/images/tech-icons/invision.svg' },
      { name: 'Webflow', iconUrl: '/images/tech-icons/webflow.svg' },
      { name: 'Framer', iconUrl: '/images/tech-icons/framer.svg' },
      { name: 'Miro', iconUrl: '/images/tech-icons/miro.svg' },
      { name: 'Zeplin', iconUrl: '/images/tech-icons/zeplin.svg' }
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
        description: 'Modernize outdated websites with fresh, user-friendly designs',
        icon: FaMagic
      },
      {
        title: 'Mobile App Design',
        description: 'Create intuitive mobile experiences that users love',
        icon: FaMobileAlt
      },
      {
        title: 'Design Systems',
        description: 'Build scalable component libraries for consistent UIs',
        icon: FaLayerGroup
      },
      {
        title: 'User Experience Audit',
        description: 'Identify and fix usability issues in existing products',
        icon: FaSearchPlus
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
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    icon: FaBullhorn,
    title: 'Digital Marketing',
    shortDescription: 'Data-driven marketing strategies that deliver results',
    description: 'Grow your online presence and reach your target audience with comprehensive digital marketing strategies. We combine creativity with data analytics to deliver measurable results and maximize your ROI.',
    features: ['SEO & SEM', 'Social Media Marketing', 'Content Marketing', 'Analytics & Reporting'],
    benefits: [
      'Increase brand visibility and awareness',
      'Generate qualified leads and conversions',
      'Build engaged communities around your brand',
      'Track and optimize campaign performance'
    ],
    technologies: [
      { name: 'Google Ads', icon: FaGoogle },
      { name: 'Social Media', icon: FaInstagram },
      { name: 'SEO Tools', icon: FaSearch },
      { name: 'Analytics', icon: FaChartLine }
    ],
    process: [
      {
        step: 1,
        title: 'Strategy Development',
        description: 'Analyze your market, competitors, and audience to create a winning strategy'
      },
      {
        step: 2,
        title: 'Campaign Creation',
        description: 'Develop compelling content and creative assets for your campaigns'
      },
      {
        step: 3,
        title: 'Launch & Optimize',
        description: 'Execute campaigns across channels and continuously optimize performance'
      },
      {
        step: 4,
        title: 'Analytics & Reporting',
        description: 'Track KPIs and provide detailed insights for data-driven decisions'
      }
    ],
    useCases: [
      {
        title: 'Search Engine Marketing',
        description: 'Increase visibility with SEO optimization and paid search campaigns',
        icon: FaGoogle
      },
      {
        title: 'Social Media Campaigns',
        description: 'Engage audiences on Facebook, Instagram, LinkedIn, and Twitter',
        icon: FaFacebookF
      },
      {
        title: 'Content Marketing',
        description: 'Create valuable content that attracts and converts your audience',
        icon: FaPencilAlt
      },
      {
        title: 'Email Marketing',
        description: 'Build relationships and drive conversions with targeted email campaigns',
        icon: FaEnvelope
      }
    ],
    faq: [
      {
        question: 'How long before I see results?',
        answer: 'Paid advertising can show results within days, while SEO typically takes 3-6 months. We provide regular reports to track progress.'
      },
      {
        question: 'What is your pricing model?',
        answer: 'We offer flexible pricing including monthly retainers, project-based fees, and performance-based models depending on your needs.'
      },
      {
        question: 'Do you create content for campaigns?',
        answer: 'Yes, our team creates all types of content including copy, graphics, videos, and blog posts tailored to your brand and audience.'
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
