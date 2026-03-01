import {
  FaRobot,
  FaCogs,
  FaBrain,
  FaChartLine,
  FaNetworkWired,
  FaDatabase,
  FaLayerGroup,
  FaProjectDiagram,
  FaCodeBranch,
  FaMagic,
  FaEye,
  FaMicrochip
} from 'react-icons/fa';

export const aiData = [
  {
    id: 'custom-ai-services',
    slug: 'custom-ai-services',
    name: 'Custom AI Services',
    icon: FaRobot,
    headline: 'Tailored Solutions for Unique Business Needs',
    shortDescription: 'Tailored AI solutions for your specific business needs.',
    description: 'At Hunexture, we design custom AI solutions that meet the specific challenges of businesses. Our expertise in Artificial Intelligence (AI) and Machine Learning (ML) allows us to deliver solutions that optimize workflows, enhance decision-making, and drive growth.',
    image: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
    whatWeOffer: [
      {
        title: 'Machine Learning Development',
        description: 'Our Machine Learning Development services allow businesses to build custom models that deliver predictive insights and automate key processes.',
        features: [
          { name: 'Predictive Analytics', description: 'Accurately forecast trends and behaviors.' },
          { name: 'Clustering & Classification', description: 'Segment and classify data to uncover actionable insights.' },
          { name: 'Custom ML Models', description: 'Tailored to meet your specific business and industry needs.' }
        ],
        technologies: ['TensorFlow', 'PyTorch', 'XGBoost', 'LightGBM', 'Scikit-learn']
      },
      {
        title: 'Deep Learning Solutions',
        description: 'Our Deep Learning solutions leverage neural networks to tackle complex challenges such as image recognition, video processing, and natural language understanding.',
        features: [
          { name: 'Convolutional Neural Networks (CNNs)', description: 'Specialized in image and video processing.' },
          { name: 'Recurrent Neural Networks (RNNs)', description: 'Best suited for analyzing sequential data, such as time-series and speech.' },
          { name: 'Generative Adversarial Networks (GANs)', description: 'Used for content generation, including images and videos.' }
        ],
        technologies: ['TensorFlow', 'PyTorch', 'Keras']
      },
      {
        title: 'Natural Language Processing (NLP)',
        description: 'Our NLP solutions help businesses automate communication and derive insights from text data.',
        features: [
          { name: 'Chatbots', description: 'Automate customer support with AI-driven bots.' },
          { name: 'Sentiment Analysis', description: 'Analyze customer feedback and social media to understand sentiment and preferences.' },
          { name: 'Language Translation', description: 'Break down language barriers with real-time translations.' }
        ],
        technologies: ['NLTK', 'spaCy', 'Gensim']
      },
      {
        title: 'Computer Vision',
        description: 'Our Computer Vision services allow businesses to analyze and process visual data for real-time decision-making and automation.',
        features: [
          { name: 'Image Recognition & Object Detection', description: 'Automatically identify and classify objects in images.' },
          { name: 'Facial Recognition', description: 'Enhance security through advanced facial detection.' },
          { name: 'Video Analytics', description: 'Analyze video data to monitor operations, detect anomalies, and improve processes.' }
        ],
        technologies: ['OpenCV', 'TensorFlow', 'PyTorch']
      },
      {
        title: 'Data Science & Analytics',
        description: 'Our Data Science & Analytics services provide businesses with actionable insights, empowering better decision-making through data.',
        features: [
          { name: 'Data Preprocessing', description: 'Clean and transform raw data for meaningful analysis.' },
          { name: 'Exploratory Data Analysis (EDA)', description: 'Analyze data sets to summarize their main characteristics.' },
          { name: 'Business Intelligence', description: 'Visualize data for decision-making through dashboards and reports.' }
        ],
        technologies: ['Pandas', 'spaCy', 'NumPy']
      },
      {
        title: 'Reinforcement Learning',
        description: 'Our Reinforcement Learning solutions enable systems to make dynamic decisions based on real-time data.',
        features: [
          { name: 'Sequential Decision Making', description: 'AI learns to make decisions based on previous actions and rewards.' },
          { name: 'Simulation Models', description: 'Create simulated environments to test strategies and refine processes.' }
        ],
        technologies: ['TensorFlow', 'OpenAI Gym', 'PyTorch']
      }
    ],
    whyChooseUs: [
      { title: 'Tailored Solutions', description: 'AI models designed to meet specific business requirements.' },
      { title: 'Scalable Technologies', description: 'Our solutions are built to scale as your business grows.' },
      { title: 'Experienced Team', description: 'Decades of expertise in AI, ML, and data science.' },
      { title: 'End-to-End Support', description: 'From consulting to deployment, we provide support at every stage of the AI journey.' }
    ],
    technologiesSummary: [
      { category: 'Machine Learning', tech: 'TensorFlow, PyTorch, Scikit-learn' },
      { category: 'Deep Learning', tech: 'TensorFlow, Keras, PyTorch' },
      { category: 'NLP', tech: 'NLTK, spaCy, Gensim' },
      { category: 'Computer Vision', tech: 'OpenCV, TensorFlow' },
      { category: 'Data Science', tech: 'Pandas, NumPy, SciPy' },
      { category: 'Reinforcement Learning', tech: 'Gym, TensorFlow' }
    ]
  },
  {
    id: 'nlp-solutions',
    slug: 'nlp-solutions',
    name: 'NLP Solutions',
    icon: FaLayerGroup,
    headline: 'Breaking Language Barriers with Intelligence',
    shortDescription: 'Advanced Natural Language Processing systems.',
    description: 'At Hunexture, we build powerful NLP architectures designed to understand, process, and generate human language at scale. By leveraging advanced transformers, we unlock unstructured data value and supercharge conversational interfaces.',
    image: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    whatWeOffer: [
      {
        title: 'Conversational AI & Chatbots',
        description: 'Deploy context-aware agents capable of human-like interactions across customer facing roles.',
        features: [
          { name: 'Multi-turn Dialog', description: 'Agents that remember context throughout an ongoing conversation.' },
          { name: 'Omnichannel Deployment', description: 'Integration across WhatsApp, Web chat, and Social Media.' },
          { name: 'Intelligent Handoff', description: 'Seamlessly transfers complex queries to human operators when needed.' }
        ],
        technologies: ['Rasa', 'Dialogflow', 'OpenAI API']
      },
      {
        title: 'Text Analytics & Insight Extraction',
        description: 'Mine massive text repositories for key facts, entities, and shifting patterns.',
        features: [
          { name: 'Named Entity Recognition', description: 'Identify people, organizations, locations, and custom entities.' },
          { name: 'Topic Modeling', description: 'Automatically categorize millions of documents into clear topics.' },
          { name: 'Sentiment & Emotion Detection', description: 'Track brand perception across social networks and reviews.' }
        ],
        technologies: ['spaCy', 'BERT', 'Transformers']
      },
      {
        title: 'Document Processing & Intelligence',
        description: 'Convert unstructured files, invoices, and contracts into structured, actionable JSON data.',
        features: [
          { name: 'Auto-categorization', description: 'Route documents to specific departments automatically.' },
          { name: 'Data Extraction', description: 'Pulling specific fields seamlessly from dense legal or financial formats.' },
          { name: 'Summarization', description: 'Condense long-form reports into single-page executive summaries.' }
        ],
        technologies: ['Tesseract', 'LayoutLM', 'Hugging Face']
      }
    ],
    whyChooseUs: [
      { title: 'Pre-trained & Fine-tuned', description: 'We start with state-of-the-art models and fine-tune them on your precise domain language.' },
      { title: 'Multilingual Support', description: 'Systems that natively comprehend and translate dozens of languages.' },
      { title: 'Data Privacy Focus', description: 'On-premise deployment options for highly sensitive text processing.' },
      { title: 'Rapid Prototyping', description: 'Deliver proof-of-concepts in weeks rather than months.' }
    ],
    technologiesSummary: [
      { category: 'Frameworks', tech: 'HuggingFace, spaCy, NLTK, AllenNLP' },
      { category: 'Foundation Models', tech: 'GPT-4, Llama 3, Mistral, BERT' },
      { category: 'Vector Databases', tech: 'Pinecone, Milvus, Qdrant' }
    ]
  },
  {
    id: 'computer-vision-services',
    slug: 'computer-vision-services',
    name: 'Computer Vision Services',
    icon: FaEye,
    headline: 'Empowering Machines to See, Analyze, and Act',
    shortDescription: 'Empowering machines to see and understand visual data.',
    description: 'Our Computer Vision division at Hunexture creates robust AI visual systems replacing tedious human physical inspection. From manufacturing quality control to retail footfall tracking, we build systems that process video feeds in real-time.',
    image: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    whatWeOffer: [
      {
        title: 'Industrial Fault & Defect Detection',
        description: 'Automated assembly line inspections moving at microsecond speeds.',
        features: [
          { name: 'Micro-defect Identification', description: 'Find scratches, dents, and misalignments invisible to the human eye.' },
          { name: 'High-speed Processing', description: 'Inferencing at hundreds of frames per second.' },
          { name: 'Automated Rejection', description: 'Direct integration with robotic arms to sort out defective items.' }
        ],
        technologies: ['YOLOv8', 'OpenCV', 'NVIDIA TensorRT']
      },
      {
        title: 'Facial Recognition & Biometrics',
        description: 'Highly secure, ethically-implemented identity verification systems.',
        features: [
          { name: 'Access Control', description: 'Contactless door entry for corporate and high-security zones.' },
          { name: 'Liveness Detection', description: 'Preventing spoofing via masks, photos, or digital replays.' },
          { name: 'Privacy-first Archiving', description: 'Processing on the edge to avoid storing PII centrally.' }
        ],
        technologies: ['FaceNet', 'Dlib', 'MediaPipe']
      },
      {
        title: 'Retail & Spatial Analytics',
        description: 'Map physical store floors like an ecommerce website.',
        features: [
          { name: 'Heatmapping', description: 'Visualize which aisles get the most foot traffic.' },
          { name: 'Demographic Estimation', description: 'Anonymous age and gender modeling.' },
          { name: 'Queue Management', description: 'Alerting staff when checkout lines exceed operational capacity.' }
        ],
        technologies: ['DeepSORT', 'PyTorch', 'AWS Panorama']
      }
    ],
    whyChooseUs: [
      { title: 'Edge Computing Experts', description: 'Running heavy vision models directly on localized hardware for zero-latency.' },
      { title: 'Lighting & Environment Resilient', description: 'Training networks to perform reliably regardless of glare or shadows.' },
      { title: 'Deep Hardware Integration', description: 'We partner directly with camera hardware manufacturers for optimized ISP pipelines.' },
      { title: 'Custom Dataset Generation', description: 'Using synthetic data to train models even when real-world examples are rare.' }
    ],
    technologiesSummary: [
      { category: 'Core Libraries', tech: 'OpenCV, scikit-image' },
      { category: 'Deep Learning', tech: 'PyTorch Vision, TensorFlow Vision' },
      { category: 'Edge Hardware', tech: 'NVIDIA Jetson, Google Coral, OAK-D' },
      { category: 'Architectures', tech: 'ResNet, MobileNet, YOLO' }
    ]
  },
  {
    id: 'generative-ai-solutions',
    slug: 'generative-ai-solutions',
    name: 'Generative AI Solutions',
    icon: FaMagic,
    headline: 'Creating Infinite Content with Machine Intelligence',
    shortDescription: 'Create new content, designs, and code with AI.',
    description: 'Transform ideation workflows with Generative AI built by Hunexture. By hooking up large language models and diffusion networks to your enterprise data, we drastically accelerate content creation, coding, and multimedia generation.',
    image: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
    whatWeOffer: [
      {
        title: 'Corporate Knowledge Copilots',
        description: 'Intelligent search systems generating grounded answers based purely on your intranet.',
        features: [
          { name: 'Retrieval Augmented Generation (RAG)', description: 'Eliminating hallucinations by strictly sourcing internal docs.' },
          { name: 'Multi-format Understanding', description: 'Reading PDFs, PowerPoints, and Confluence pages.' },
          { name: 'Role-based Access', description: 'Ensuring junior staff cannot use AI to query executive-only files.' }
        ],
        technologies: ['LangChain', 'LlamaIndex', 'OpenAI']
      },
      {
        title: 'Creative Media Generation',
        description: 'Generating bespoke imagery and audio for marketing at absolute scale.',
        features: [
          { name: 'Brand-aligned Image Generation', description: 'Fine-tuning diffusion models on your exact brand guidelines and color palettes.' },
          { name: 'Personalized Ad Copy', description: 'Spawning thousands of A/B testing variations instantly.' },
          { name: 'Synthetic Voiceovers', description: 'Generating lifelike voice narration in 50+ languages.' }
        ],
        technologies: ['Stable Diffusion', 'Midjourney API', 'ElevenLabs']
      },
      {
        title: 'Automated Coding & Data Structuring',
        description: 'Assisting developers and data analysts by writing boilerplate instantly.',
        features: [
          { name: 'SQL Generation', description: 'Translating English questions into complex SQL graph queries.' },
          { name: 'Code Documentation', description: 'Automatically analyzing legacy cobol/java and generating modern docs.' },
          { name: 'Unit Test Generation', description: 'Achieving 100% test coverage autonomously.' }
        ],
        technologies: ['GitHub Copilot integration', 'StarCoder', 'Claude 3.5 Sonnet']
      }
    ],
    whyChooseUs: [
      { title: 'Hallucination Mitigation', description: 'Rigorous architectural safeguards to prevent the model from lying to customers.' },
      { title: 'Prompt Engineering Masters', description: 'Decades of combined experience squeezing optimal outputs from black-box LLMs.' },
      { title: 'Cost Containment', description: 'Intelligent routing that uses smaller, cheaper models for easy tasks and expensive models only when necessary.' },
      { title: 'Vendor Agnostic', description: 'We pivot seamlessly between OpenAI, Anthropic, Google, and Open Source as the landscape shifts.' }
    ],
    technologiesSummary: [
      { category: 'LLMs', tech: 'GPT-4o, Claude 3.5, Gemini Pro, Llama 3' },
      { category: 'Orchestration', tech: 'LangChain, Semantic Kernel, Flowise' },
      { category: 'Image/Audio', tech: 'Stable Diffusion XL, Whisper, Bark' },
      { category: 'Vector DBs', tech: 'Weaviate, Chroma, Pinecone' }
    ]
  },
  {
    id: 'data-science-analytics',
    slug: 'data-science-analytics',
    name: 'Data Science & Analytics',
    icon: FaChartLine,
    headline: 'Unlocking Actionable Value from Raw Data Lakes',
    shortDescription: 'Turn your raw data into actionable business intelligence.',
    description: 'Hunexture’s Data Science & Analytics practice builds robust pipelines that aggregate fragmented data into singular sources of truth. From descriptive dashboards to predictive statistical modeling, we empower leaders with foresight.',
    image: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    whatWeOffer: [
      {
        title: 'Modern Data Warehousing',
        description: 'Centralizing your enterprise data architecture for lightning-fast queries.',
        features: [
          { name: 'ELT/ETL Pipelines', description: 'Reliable scheduled ingests from hundreds of third-party APIs.' },
          { name: 'Data Cleansing', description: 'Automated deduplication and anomaly imputation.' },
          { name: 'Data Governance', description: 'Establishing clear ownership and data dictionary catalogs.' }
        ],
        technologies: ['Snowflake', 'dbt', 'Airflow']
      },
      {
        title: 'Advanced Predictive Modeling',
        description: 'Going beyond historical reports to predict what will happen next.',
        features: [
          { name: 'Demand Forecasting', description: 'Anticipating supply chain constraints months in advance.' },
          { name: 'Customer Lifetime Value Evaluation', description: 'Identifying high-value cohorts before they spend a dime.' },
          { name: 'Dynamic Pricing', description: 'Adjusting markup continuously based on algorithmic demand cues.' }
        ],
        technologies: ['scikit-learn', 'Prophet', 'XGBoost']
      },
      {
        title: 'Interactive Business Intelligence',
        description: 'Real-time visualizations that tell a compelling strategic story.',
        features: [
          { name: 'Executive Dashboards', description: 'High-level KPIs served in an intuitive, beautiful interface.' },
          { name: 'Self-Serve Analytics', description: 'Empowering non-technical staff to slice data freely.' },
          { name: 'Automated Alerting', description: 'Push notifications when critical metrics breach thresholds.' }
        ],
        technologies: ['Tableau', 'Power BI', 'Looker']
      }
    ],
    whyChooseUs: [
      { title: 'Business-First Alignment', description: 'We start with the business question, not the mathematics.' },
      { title: 'Rigorous Data Quality', description: '"Garbage in, Garbage out" avoided through strict validation suites.' },
      { title: 'Interdisciplinary Talent', description: 'Teams comprised of data engineers, statisticians, and UX dashboard designers.' },
      { title: 'High ROI Focus', description: 'Prioritizing analytic projects that demonstrably move revenue or cost metrics.' }
    ],
    technologiesSummary: [
      { category: 'Data Engineering', tech: 'Apache Spark, Kafka, Airflow, dbt' },
      { category: 'Cloud Data Platforms', tech: 'Snowflake, Databricks, BigQuery' },
      { category: 'Analytics Languages', tech: 'Python, R, SQL' },
      { category: 'Visualization', tech: 'Power BI, Tableau, Apache Superset' }
    ]
  },
  {
    id: 'ai-tech-stack',
    slug: 'ai-tech-stack',
    name: 'AI Tech Stack',
    icon: FaCodeBranch,
    headline: 'High-Performance Infrastructure for Intelligent Systems',
    shortDescription: 'Optimized infrastructure for AI workloads.',
    description: 'Deploying AI requires fundamentally different infrastructure than traditional web apps. Hunexture designs GPU-optimized topologies, orchestrates complex microservices, and ensures your AI stack achieves five-nines reliability at minimal cost.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    whatWeOffer: [
      {
        title: 'Distributed Compute Orchestration',
        description: 'Managing vast GPU clusters for training and high-availability inference.',
        features: [
          { name: 'Auto-scaling Clusters', description: 'Spinning up instances only when queue depths rise.' },
          { name: 'Spot Instance Management', description: 'Slashing AWS/GCP bills by tactically utilizing discount compute.' },
          { name: 'Hardware Acceleration', description: 'Utilizing specialized ASICs like TPUs and Inferentia.' }
        ],
        technologies: ['Kubernetes', 'Ray', 'CUDA']
      },
      {
        title: 'MLOps Automation Pipelines',
        description: 'Bridging the gap between Jupyter notebooks and production environments.',
        features: [
          { name: 'Model Registry', description: 'Version controlling binary weights with the same rigor as code.' },
          { name: 'Automated CI/CD', description: 'Pushing tested models to shadow or canary deployments safely.' },
          { name: 'Feature Stores', description: 'Serving real-time features uniformly to training and production.' }
        ],
        technologies: ['MLflow', 'Kubeflow', 'Feast']
      },
      {
        title: 'Vector Native Architecture',
        description: 'Implementing specialized databases required for modern Generative AI ecosystems.',
        features: [
          { name: 'High-speed Similarity Search', description: 'Querying millions of embeddings in milliseconds.' },
          { name: 'Hybrid Search Pipelines', description: 'Combining dense vector search with sparse BM25 keyword matching.' },
          { name: 'Streaming Ingests', description: 'Synchronizing operational databases directly into vector indexes.' }
        ],
        technologies: ['Pinecone', 'Redis', 'Elasticsearch']
      }
    ],
    whyChooseUs: [
      { title: 'Cloud Agnostic', description: 'Avoid vendor lock-in with portable, containerized architectures.' },
      { title: 'FinOps Obsessed', description: 'AI compute is expensive; we architect specifically to minimize idle GPU costs.' },
      { title: 'Security Hardened', description: 'VPC peering and strict RBAC tailored for proprietary datasets.' },
      { title: 'Monitoring & Observability', description: 'Full tracing of every inference request from API gate to GPU.' }
    ],
    technologiesSummary: [
      { category: 'Orchestration', tech: 'Kubernetes, Docker, Helm' },
      { category: 'ML Lifecycle', tech: 'MLflow, Kubeflow, Weights & Biases' },
      { category: 'Cloud Providers', tech: 'AWS SageMaker, GCP Vertex AI, Azure ML' },
      { category: 'Compute Frameworks', tech: 'NVIDIA Triton, ONNX, TensorRT' }
    ]
  },
  {
    id: 'ai-agents',
    slug: 'ai-agents',
    name: 'AI Agents',
    icon: FaCogs,
    headline: 'Autonomous Digital Digital Workers executing multi-step workflows.',
    shortDescription: 'Autonomous agents capable of complex tasks.',
    description: 'Move beyond passive prompts. Hunexture builds AI Agents capable of formulating plans, iterating through obstacles, and utilizing external software tools (like APIs, browsers, and terminals) to accomplish complex objectives without human intervention.',
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    whatWeOffer: [
      {
        title: 'Custom Tool Integration',
        description: 'Wiring agents to interact securely with your existing SaaS and internal systems.',
        features: [
          { name: 'REST/GraphQL API usage', description: 'Agents that can read Swagger files and execute API calls.' },
          { name: 'Browser Manipulation', description: 'Navigating legacy websites to scrape data or submit forms.' },
          { name: 'Database Queries', description: 'Agents granted read-access to internal SQL tables.' }
        ],
        technologies: ['LangChain Tools', 'Playwright', 'OpenAI Functions']
      },
      {
        title: 'Multi-Agent Collaborative Systems',
        description: 'Deploying swarms of specialized agents that talk to each other to solve grand challenges.',
        features: [
          { name: 'Role Delegation', description: 'A "Manager" agent dividing work among "Research" and "Writer" agents.' },
          { name: 'Iterative Peer Review', description: 'Agent A writes code, Agent B reviews it, Agent A corrects it.' },
          { name: 'Shared Memory Layers', description: 'Agents maintaining common context across long-running tasks.' }
        ],
        technologies: ['AutoGen', 'CrewAI', 'LangGraph']
      },
      {
        title: 'Guardrails & Human-in-the-Loop',
        description: 'Ensuring autonomous agents never perform destructive actions without consent.',
        features: [
          { name: 'Execution Pauses', description: 'Halting workflow to wait for a human "Approve" click before API mutations.' },
          { name: 'Semantic Routing', description: 'Blocking agents from discussing or operating outside their defined scope.' },
          { name: 'Comprehensive Auditing', description: 'Logging the exact "thought process" of the agent for compliance.' }
        ],
        technologies: ['NeMo Guardrails', 'LangSmith', 'PromptShield']
      }
    ],
    whyChooseUs: [
      { title: 'Production Reliability', description: 'We transition fragile script-based agents into robust fault-tolerant systems.' },
      { title: 'Advanced State Management', description: 'Engineering long-term episodic memory for agents via advanced vector topologies.' },
      { title: 'Security Forefront', description: 'Limiting agent blast-radius via scoped ephemeral environments.' },
      { title: 'Deterministic Fallbacks', description: 'Combining rigid classical programming with probabilistic LLM reasoning.' }
    ],
    technologiesSummary: [
      { category: 'Agent Frameworks', tech: 'LangGraph, AutoGen, CrewAI, BabyAGI' },
      { category: 'Tooling', tech: 'OpenAI Tool Calling, SERP APIs' },
      { category: 'Memory', tech: 'Zep, Mem0, Redis' },
      { category: 'Evaluation', tech: 'LangSmith, TruLens' }
    ]
  },
  {
    id: 'ai-operations',
    slug: 'ai-operations',
    name: 'AI Operations (AI Ops)',
    icon: FaProjectDiagram,
    headline: 'Continuous Reliability for Machine Learning Systems',
    shortDescription: 'Streamline the lifecycle of your AI models.',
    description: 'Through robust AI Operations (AIOps/MLOps), Hunexture ensures that deployed models never degrade. We implement automated monitoring, continuous retraining loops, and strict governance to treat AI with the operational maturity of enterprise software.',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    whatWeOffer: [
      {
        title: 'Continuous Monitoring & Alerting',
        description: 'Detecting statistical anomalies long before they impact the bottom line.',
        features: [
          { name: 'Data Drift Detection', description: 'Alerting when live input data diverges from training data distributions.' },
          { name: 'Concept Drift Detection', description: 'Alerting when the underlying relationship between inputs and outputs changes.' },
          { name: 'System Telemetry', description: 'Tracking latency, throughput, and GPU utilization continuously.' }
        ],
        technologies: ['Evidently AI', 'Prometheus', 'Grafana']
      },
      {
        title: 'Automated Retraining Pipelines',
        description: 'Self-healing AI systems that refresh their knowledge automatically.',
        features: [
          { name: 'Trigger-based Execution', description: 'Launching training jobs automatically when drift crosses a threshold.' },
          { name: 'Shadow Deployments', description: 'Testing the newly trained model silently on live traffic alongside the old one.' },
          { name: 'A/B Testing routing', description: 'Gradually shifting traffic to new models based on real-time ROI metrics.' }
        ],
        technologies: ['Apache Airflow', 'Seldon Core', 'Kubeflow Pipelines']
      },
      {
        title: 'AI Governance & Compliance',
        description: 'Maintaining clear line-of-sight for regulatory and ethical mandates.',
        features: [
          { name: 'Model Lineage Tracking', description: 'Proving exactly what data a specific model version was trained on.' },
          { name: 'Bias Auditing', description: 'Scanning training records to ensure models don’t exhibit discriminatory attributes.' },
          { name: 'Explainability APIs', description: 'Generating SHAP values to explain black-box decisions to end-users.' }
        ],
        technologies: ['MLflow', 'Alibi Explain', 'AWS SageMaker Model Monitor']
      }
    ],
    whyChooseUs: [
      { title: 'Zero-Downtime Updates', description: 'Hot-swapping model binaries without dropping a single API request.' },
      { title: 'Prevent Degradation', description: 'We stop silent model failure that quietly leaks revenue over time.' },
      { title: 'Unified Dashboards', description: 'One single pane of glass showing both technical latency and business accuracy.' },
      { title: 'Enterprise Readiness', description: 'Adhering to SOC2, GDPR, and emerging AI Act compliance frameworks.' }
    ],
    technologiesSummary: [
      { category: 'Serving', tech: 'Triton, Seldon, BentoML, TorchServe' },
      { category: 'Monitoring', tech: 'Evidently, Grafana, Datadog' },
      { category: 'Orchestration', tech: 'Kubeflow, MLflow, Airflow' },
      { category: 'Explainability', tech: 'SHAP, LIME, Captum' }
    ]
  },
  {
    id: 'machine-learning',
    slug: 'machine-learning',
    name: 'Machine Learning',
    icon: FaBrain,
    headline: 'Core Algorithms Driving Predictive Mathematics',
    shortDescription: 'Core ML model development and deployment.',
    description: 'At the heart of the AI revolution lies foundational Machine Learning. Hunexture excels at classic and modern ML techniques, meticulously engineering features from tabular data to unearth predictive signals that ordinary analysis misses.',
    image: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    whatWeOffer: [
      {
        title: 'Supervised Learning Frameworks',
        description: 'Mapping inputs to known outputs for high-accuracy predictions.',
        features: [
          { name: 'Regression Analysis', description: 'Predicting continuous numerical metrics like price, age, or temperature.' },
          { name: 'Binary Tracking', description: 'Detecting true/false outcomes like spam, fraud, or churn.' },
          { name: 'Multi-class Classification', description: 'Categorizing inputs into complex, mutually exclusive buckets.' }
        ],
        technologies: ['XGBoost', 'LightGBM', 'scikit-learn']
      },
      {
        title: 'Unsupervised Learning',
        description: 'Finding hidden structure entirely within unlabeled datasets.',
        features: [
          { name: 'Customer Segmentation', description: 'Automatically grouping clients based on latent purchasing behavior.' },
          { name: 'Anomaly Detection', description: 'Flagging network intrusions or credit card fraud instantly.' },
          { name: 'Dimensionality Reduction', description: 'Compressing massive datasets to visualize key driver variables.' }
        ],
        technologies: ['DBSCAN', 'K-Means', 'PCA']
      },
      {
        title: 'Feature Engineering Optimization',
        description: 'The art of mathematically transforming data before the algorithm touches it.',
        features: [
          { name: 'Temporal Features', description: 'Extracting seasonality, lag, and rolling window metrics from timestamps.' },
          { name: 'Categorical Encoding', description: 'Translating text categories into dense mathematical vectors.' },
          { name: 'Automated Feature Selection', description: 'Algorithmically dropping useless noise data to increase model speed.' }
        ],
        technologies: ['Featuretools', 'Pandas', 'Optuna']
      }
    ],
    whyChooseUs: [
      { title: 'Hyperparameter Mastery', description: 'Utilizing Bayesian optimization to squeeze every drop of accuracy out of algorithms.' },
      { title: 'White-box preference', description: 'We prefer explainable tree-based models over black boxes when compliance requires it.' },
      { title: 'Iterative Methodology', description: 'Rapidly testing baseline models before committing compute to massive training runs.' },
      { title: 'Scalable By Default', description: 'Code built localized but designed to run distributed on Spark/Dask when data sizes explode.' }
    ],
    technologiesSummary: [
      { category: 'Gradient Boosting', tech: 'XGBoost, LightGBM, CatBoost' },
      { category: 'Classical ML', tech: 'scikit-learn, Statsmodels' },
      { category: 'Distributed ML', tech: 'Spark MLlib, Dask-ML' },
      { category: 'Optimization', tech: 'Optuna, Hyperopt, Ray Tune' }
    ]
  },
  {
    id: 'ai-ml-overview',
    slug: 'ai-ml-overview',
    name: 'AI & ML Overview',
    icon: FaNetworkWired,
    headline: 'Strategic Consulting and Roadmap Development for AI',
    shortDescription: 'Strategic consulting and roadmap development for AI.',
    description: 'Initiating an AI journey requires intense strategic alignment. Hunexture’s advisory services demystify the AI landscape, mapping out high-ROI use cases and ensuring your data estate is primed before engineering commences.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    whatWeOffer: [
      {
        title: 'AI Readiness Assessments',
        description: 'Evaluating your organization’s preparedness for machine learning integration.',
        features: [
          { name: 'Data Maturity Audit', description: 'Analyzing the quality, accessibility, and volume of your historical data.' },
          { name: 'Infrastructure Review', description: 'Assessing your current cloud topology against modern MLOps requirements.' },
          { name: 'Skill Gap Analysis', description: 'Identifying internal training needs for your technical teams.' }
        ],
        technologies: ['Strategic Frameworks', 'Data Quality Matrix', 'Cloud Security Audits']
      },
      {
        title: 'Use-Case Discovery & ROI Calculation',
        description: 'Finding the intersection of technical feasibility and maximum business impact.',
        features: [
          { name: 'Ideation Workshops', description: 'Collaborative sessions with executives to surface operational pain points.' },
          { name: 'Feasibility Scoring', description: 'Ranking ideas based on data availability and algorithmic complexity.' },
          { name: 'Financial Modeling', description: 'Projecting cost savings or revenue generation against implementation expense.' }
        ],
        technologies: ['Design Thinking', 'Financial Forecasting', 'Risk Assessment']
      },
      {
        title: 'Roadmap Drafting & Prototyping',
        description: 'Creating actionable blueprints transitioning from strategy to execution.',
        features: [
          { name: 'Phased Execution Plans', description: 'Breaking multi-year transformations into 6-week deliverable sprints.' },
          { name: 'Technology Selection', description: 'Unbiased recommendations on build vs. buy, cloud providers, and LLM vendors.' },
          { name: 'Rapid Proof-of-Concepts (PoCs)', description: 'Validating the core assumption with a low-fidelity pilot in 14 days.' }
        ],
        technologies: ['Agile Methodology', 'Jira Alignment', 'Figma Wireframing']
      }
    ],
    whyChooseUs: [
      { title: 'Vendor Neutrality', description: 'We don’t sell a platform; we recommend exactly what is best for your architecture.' },
      { title: 'Executive Translation', description: 'Bridging the linguistic gap between C-suite objectives and data science realities.' },
      { title: 'Pragmatic Focus', description: 'We heavily discourage "AI for AI\'s sake", focusing purely on tangible business outcomes.' },
      { title: 'End-to-End Continuity', description: 'Our consultants seamlessly hand-off roadmaps to our world-class engineering teams.' }
    ],
    technologiesSummary: [
      { category: 'Consulting Methodology', tech: 'Agile, Design Thinking, CRISP-DM' },
      { category: 'Analysis Tools', tech: 'Miro, LucidChart, Financial Models' },
      { category: 'Prototyping', tech: 'Streamlit, Gradio, Figma' }
    ]
  },
  {
    id: 'transform-business',
    slug: 'transform-business',
    name: 'Transform Business',
    icon: FaMicrochip,
    headline: 'Enterprise-Wide Digital Evolution Powered by Intelligence',
    shortDescription: 'Enterprise-wide digital transformation with AI.',
    description: 'For organizations seeking total operational overhaul, Hunexture orchestrates massive, multi-departmental AI integration. This holistic approach interlinks disjointed legacy systems, embedding autonomous intelligence at the core of your commercial DNA.',
    image: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
    whatWeOffer: [
      {
        title: 'Holistic Automation Integration',
        description: 'Replacing manual silos with cross-departmental AI routing.',
        features: [
          { name: 'Intelligent Supply Chain', description: 'Linking predictive sales demand directly to procurement logistics.' },
          { name: 'Cognitive HR & Support', description: 'Automating internal requests, onboarding, and technical IT ticketing.' },
          { name: 'Automated Finance', description: 'Deploying agents to reconcile invoices and flag compliance risks dynamically.' }
        ],
        technologies: ['RPA Integration', 'Enterprise APIs', 'Event-driven Architectures']
      },
      {
        title: 'Legacy System Modernization',
        description: 'Untangling decades of technical debt to prepare for an AI-native future.',
        features: [
          { name: 'Monolith to Microservices', description: 'Decoupling heavy architectures to allow modular ML deployments.' },
          { name: 'Data Lake Creation', description: 'Extracting data stranded in legacy ERPs (SAP, Oracle) into modern warehouses.' },
          { name: 'Cloud Migration', description: 'Safely lifting-and-shifting on-prem workloads to AWS, Azure, or GCP.' }
        ],
        technologies: ['Docker/Kubernetes', 'Snowflake', 'AWS/Azure/GCP']
      },
      {
        title: 'Change Management & Upskilling',
        description: 'Ensuring human adoption keeps pace with technological deployment.',
        features: [
          { name: 'Workflow Redesign', description: 'Modifying job descriptions from "Doers" to "AI Managers/Editors".' },
          { name: 'Internal Training Academies', description: 'Custom curriculum teaching your staff prompt engineering and basic Python.' },
          { name: 'Adoption Analytics', description: 'Tracking which departments are resisting new tools and intervening.' }
        ],
        technologies: ['LMS Platforms', 'Change Management Frameworks', 'Telemetry']
      }
    ],
    whyChooseUs: [
      { title: 'Global Scale Execution', description: 'Proven ability to manage rollouts affecting tens of thousands of employees globally.' },
      { title: 'Security Above All', description: 'Ensuring enterprise transformation adheres to strict Infosec and ISO standards.' },
      { title: 'Vast Industry Knowledge', description: 'Deep domain expertise across Healthcare, Finance, Logistics, and Retail.' },
      { title: 'Sponsorship Alignment', description: 'We operate closely with your board and C-suite to secure unwavering mandate.' }
    ],
    technologiesSummary: [
      { category: 'Enterprise Architecture', tech: 'TOGAF Framework, Microservices' },
      { category: 'Integration Engines', tech: 'MuleSoft, Apache Camel, Kafka' },
      { category: 'RPA / Automation', tech: 'UiPath, Automation Anywhere, Zapier' },
      { category: 'Cloud Infrastructure', tech: 'AWS, Microsoft Azure, Google Cloud' }
    ]
  },
  {
    id: 'ai-ml-models',
    slug: 'ai-ml-models',
    name: 'AI & ML Models',
    icon: FaDatabase,
    headline: 'Secure Hosting and Management of Foundation Models',
    shortDescription: 'Pre-trained and custom model hosting.',
    description: 'Proprietary AI and ML models inherently constitute your most valuable intellectual property. Hunexture offers secure, isolated hosting and inferencing environments, shielding your algorithmic advantage while enabling low-latency application access.',
    image: 'linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)',
    whatWeOffer: [
      {
        title: 'Private LLM Deployment',
        description: 'Hosting massive language models entirely within your own Virtual Private Cloud.',
        features: [
          { name: 'Zero-Data Retention', description: 'Guaranteeing your highly-sensitive inputs are never used to train external models.' },
          { name: 'Quantization & Compression', description: 'Shrinking 70B parameter models to fit on cost-effective hardware via vLLM.' },
          { name: 'Custom Fine-Tuning', description: 'Continuously updating the weights using LoRA based on your proprietary documents.' }
        ],
        technologies: ['vLLM', 'HuggingFace TGI', 'Ollama']
      },
      {
        title: 'Model-as-a-Service (MaaS) APIs',
        description: 'Wrapping your data science creations in highly robust, monetizeable API gateways.',
        features: [
          { name: 'High-Throughput Load Balancing', description: 'Distributing thousands of concurrent inference requests via Triton.' },
          { name: 'Authentication & Throttling', description: 'Implementing robust JWT security and rate-limiting for external customers.' },
          { name: 'Streaming Responses', description: 'Deploying WebSocket connections for token-by-token realtime generation.' }
        ],
        technologies: ['FastAPI', 'Kong/Apigee', 'gRPC']
      },
      {
        title: 'Model Optimization & Export',
        description: 'Translating clunky Python models into lightning-fast compiled binaries.',
        features: [
          { name: 'ONNX Compilation', description: 'Converting PyTorch or TensorFlow models to unified universal formats.' },
          { name: 'TensorRT Acceleration', description: 'Merging tensor operations for massive speedups on NVIDIA hardware.' },
          { name: 'Edge Deployment Prep', description: 'Converting models to CoreML or TFLite for deployment directly on iOS/Android devices.' }
        ],
        technologies: ['ONNX Runtime', 'NVIDIA TensorRT', 'TFLite']
      }
    ],
    whyChooseUs: [
      { title: 'Extreme Latency Focus', description: 'We optimize inference from seconds down to milliseconds.' },
      { title: 'Intellectual Property Protection', description: 'Architectures designed specifically to prevent weight extraction attacks.' },
      { title: 'Seamless Scalability', description: 'Clusters that scale automatically from 0 to 100 GPUs based entirely on traffic.' },
      { title: 'Multi-Framework Support', description: 'We host Scikit-learn, PyTorch, TensorFlow, and custom C++ models simultaneously.' }
    ],
    technologiesSummary: [
      { category: 'Accelerated Serving', tech: 'NVIDIA Triton, vLLM, DeepSpeed' },
      { category: 'API Gateways', tech: 'FastAPI, Kong, AWS API Gateway' },
      { category: 'Model Formats', tech: 'ONNX, TensorRT, Safetensors' },
      { category: 'Cloud Infrastructure', tech: 'AWS Inferentia, GCP TPU, Azure GPU' }
    ]
  }
];
