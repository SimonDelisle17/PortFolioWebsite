import { Project, ProjectCategory } from '../types/project';
import TOWImage from '../assets/TOW.png';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Super API Ecosystem',
    category: 'backend',
    tags: ['FastAPI', 'Python', 'MySQL', 'Redis', 'Docker', 'JWE', 'HERE Maps', 'WebSocket'],
    shortDescription: 'Enterprise-Grade Logistics & Delivery Management Platform',
    icon: '🚚',
    impact: 'Complete logistics ecosystem serving multiple business units',
    detailedDescription: 'Comprehensive backend platform serving the entire PA Super logistics ecosystem with dual-database architecture, microservices, real-time communication, and enterprise security.',
    features: [
      'SuperDeliver: Route optimization, GPS tracking, delivery confirmation with photos/signatures',
      'SuperLocator: Warehouse inventory management, barcode scanning, pick-list optimization',
      'SuperTransfer: Inter-store transfer automation with intelligent routing',
      'SuperStatement: Automated client billing with Office 365 integration',
      'SuperDispatch: Real-time operational dashboard with driver tracking',
      'Real-time WebSocket updates reducing server load by 90%',
      'Order lifecycle management with comprehensive tracking',
      'Delivery analytics and performance metrics'
    ],
    technologies: {
      backend: ['Python 3.12', 'FastAPI', 'SQLAlchemy 2.0', 'Async/Await'],
      database: ['MySQL (Dual Database)', 'Redis Cache'],
      security: ['JWE Encryption', 'Ed25519 Signatures', 'AES-GCM', 'Argon2'],
      integrations: ['HERE Maps API', 'Microsoft Graph API', 'Azure AD', 'Office 365'],
      deployment: ['Docker', 'Kubernetes', 'Microservices']
    },
    metrics: {
      scale: '300,000+ lines of code',
      performance: '90% reduction in API calls',
      architecture: 'Dual-database microservices'
    },
    architecture: 'Microservices with dedicated geo-processing service and dual-database for performance scaling',
    liveUrl: null,
    featured: true,
    problem: 'The company was running logistics across multiple stores with spreadsheets and phone calls. Drivers had no route optimization, dispatchers had no visibility, and everything was manual.',
    lesson: 'Building a system this large taught me that architecture decisions made in week one define your life for the next two years. Getting the dual-database split right early saved us from a painful migration later.'
  },
  {
    id: 2,
    title: 'SuperApp Mobile Platform',
    category: 'mobile',
    tags: ['Flutter', 'Dart', 'HERE Maps', 'WebSocket', 'SQLite', 'Provider'],
    shortDescription: 'Dual-Mode Mobile Platform for Delivery & Warehouse Operations',
    icon: '📱',
    impact: 'Cross-platform enterprise mobile application serving field operations',
    detailedDescription: 'Production-ready Flutter application serving both delivery drivers and warehouse workers with dual-mode architecture and native hardware integration.',
    features: [
      'Driver Mode: Route optimization with HERE Maps and real-time GPS tracking',
      'Delivery proof: Photo capture, digital signatures, barcode scanning',
      'Warehouse Mode: Inventory tracking, pick-list management, returns processing',
      'Real-time synchronization with backend systems',
      'Order management with cancellation workflow',
      'Offline-first architecture for uninterrupted operations',
      'Audio feedback and text-to-speech guidance'
    ],
    technologies: {
      mobile: ['Flutter', 'Dart'],
      stateManagement: ['Provider Pattern', 'BLoC Pattern'],
      hardware: ['Camera', 'GPS', 'Barcode Scanner', 'Audio'],
      realtime: ['Socket.IO', 'WebSocket'],
      storage: ['SQLite', 'Secure Storage'],
      maps: ['HERE Maps SDK']
    },
    metrics: {
      version: 'v4.2',
      platforms: 'iOS, Android, Web, Desktop',
      architecture: 'Dual-mode with offline support'
    },
    architecture: 'Dual-mode architecture with role-based authentication and offline-first design',
    liveUrl: null,
    featured: true,
    problem: 'Delivery drivers and warehouse workers needed a single app that worked in the field — with spotty connectivity, barcode scanners, and GPS — without losing data.',
    lesson: 'Offline-first is not an afterthought. I rebuilt the sync layer three times before getting it right. The key was treating the server as the source of truth but letting the app work independently.'
  },
  {
    id: 3,
    title: 'SuperBuyer Platform',
    category: 'fullstack',
    tags: ['NestJS', 'Angular', 'TypeScript', 'MySQL', 'TypeORM', 'JWT', 'AWS S3'],
    shortDescription: 'Full-Stack Buyer Management & Product Sourcing Platform',
    icon: '🛒',
    impact: 'Streamlined buyer operations and product sourcing workflow',
    detailedDescription: 'Full-stack TypeScript application for advanced buyer management and product sourcing with modern monorepo architecture.',
    features: [
      'Buyer management system for product sourcing operations',
      'Unified codebase for backend and frontend',
      'Secure authentication with encrypted password storage',
      'Cloud file storage with AWS S3 integration',
      'Bulk data import/export with Excel and CSV support',
      'Automated scheduled tasks for background processing',
      'Production-ready deployment configuration'
    ],
    technologies: {
      backend: ['NestJS 11', 'TypeScript', 'TypeORM'],
      frontend: ['Angular 20', 'TypeScript'],
      database: ['MySQL'],
      security: ['JWT', 'Argon2'],
      cloud: ['AWS S3'],
      deployment: ['PM2']
    },
    metrics: {
      version: 'v2.0',
      architecture: 'Monorepo',
      stack: 'Full TypeScript'
    },
    architecture: 'Monorepo with environment-aware serving for seamless development and production',
    liveUrl: null
  },
  {
    id: 4,
    title: 'Epicor Integration Services',
    category: 'backend',
    tags: ['Java', 'Spring Boot', 'Epicor SDK', 'PEDS API', 'Swagger', 'Docker'],
    shortDescription: 'Enterprise ERP Integration Hub',
    icon: '🏢',
    impact: 'Seamless integration with Epicor AConneX and PEDS Cloud systems',
    detailedDescription: 'Spring Boot application providing comprehensive integration with Epicor AConneX SDK and PEDS Cloud API for parts ordering, vehicle lookups, and inventory management.',
    features: [
      'Part queries, stock inquiry, and order management',
      'Vehicle YMME lookups and VIN decoding',
      'Part catalog search and interchange lookup',
      'Real-time availability at partner locations',
      'Interactive API documentation with Swagger UI',
      'Buyer assist for vehicle fitment information'
    ],
    technologies: {
      language: ['Java'],
      framework: ['Spring Boot', 'Maven'],
      security: ['API Key Authentication', 'JWT'],
      integration: ['Epicor AConneX SDK', 'PEDS Cloud API'],
      documentation: ['Swagger UI', 'OpenAPI 3.0'],
      deployment: ['Docker']
    },
    metrics: {
      endpoints: '44 API endpoints',
      integration: 'Dual API (AConneX + PEDS)',
      documentation: 'Interactive Swagger UI'
    },
    architecture: 'Spring Boot microservice with comprehensive ERP integration',
    liveUrl: null
  },
  {
    id: 5,
    title: 'SuperVin Scanner',
    category: 'mobile',
    tags: ['Flutter', 'Dart', 'Google ML Kit', 'Barcode', 'OCR', 'BLoC'],
    shortDescription: 'AI-Powered Vehicle Identification App',
    icon: '🚗',
    impact: 'Fast and accurate VIN scanning for vehicle identification',
    detailedDescription: 'Flutter mobile application for vehicle identification using machine learning for barcode scanning and OCR text recognition.',
    features: [
      'VIN barcode scanning with machine learning',
      'OCR text recognition for manual VIN capture',
      'Real-time camera scanning',
      'Manual photo selection option',
      'Secure credential storage',
      'Cross-platform support'
    ],
    technologies: {
      mobile: ['Flutter', 'Dart'],
      ai: ['Google ML Kit Barcode', 'Google ML Kit Text Recognition'],
      stateManagement: ['Flutter BLoC'],
      hardware: ['Camera', 'Image Picker'],
      security: ['Secure Storage']
    },
    metrics: {
      features: 'Barcode + OCR scanning',
      platforms: 'iOS, Android'
    },
    architecture: 'BLoC pattern with Google ML Kit integration',
    liveUrl: null
  },
  {
    id: 6,
    title: 'AI Phone Assistant',
    category: 'ai',
    tags: ['OpenAI', 'Azure', 'Deepgram', 'Twilio', 'FastAPI'],
    shortDescription: 'Multi-Language Conversational AI System',
    icon: '🤖',
    impact: '24/7 intelligent customer support automation',
    detailedDescription: 'AI-powered phone assistant with real-time translation, speech recognition, and natural language processing for automated customer support.',
    features: [
      'Multi-language support with real-time translation',
      'Advanced voice recognition with multiple providers',
      'Natural language understanding with GPT integration',
      'Natural voice synthesis for responses',
      'Intelligent voice activity detection',
      'Dynamic audio processing pipeline'
    ],
    technologies: {
      ai: ['OpenAI GPT', 'Azure Cognitive Services', 'Deepgram', 'AWS Polly'],
      backend: ['Python', 'FastAPI'],
      telephony: ['Twilio API', 'WebRTC'],
      storage: ['MinIO S3'],
      infrastructure: ['Docker']
    },
    metrics: {
      availability: '24/7 operation',
      languages: 'Multi-language (FR/EN)'
    },
    architecture: 'Multi-cloud architecture with async processing pipeline',
    liveUrl: null,
    featured: true,
    problem: 'Customer calls were going unanswered after hours. The company needed 24/7 phone support in both French and English without hiring a night shift.',
    lesson: 'Integrating multiple AI services (speech-to-text, LLM, text-to-speech) into a real-time pipeline taught me how critical latency budgets are. Every 100ms of delay makes the conversation feel unnatural.'
  },
  {
    id: 7,
    title: 'SuperParser API',
    category: 'backend',
    tags: ['FastAPI', 'Pandas', 'SQLAlchemy', 'HMAC', 'Cryptography'],
    shortDescription: 'Mission-Critical Data Processing Engine',
    icon: '⚙️',
    impact: 'High-reliability data processing with 99.9% uptime',
    detailedDescription: 'Intelligent data processing engine with advanced matching algorithms and secure data handling for order and transfer processing.',
    features: [
      'Smart UPC-based location matching for inventory',
      'Automated order and transfer processing',
      'Real-time health monitoring and alerts',
      'Duplicate detection and error recovery',
      'Memory-optimized batch processing',
      'Secure encrypted data transmission'
    ],
    technologies: {
      backend: ['Python', 'FastAPI', 'Pandas'],
      database: ['SQLAlchemy', 'MySQL'],
      security: ['HMAC-SHA256', 'Fernet Encryption'],
      automation: ['APScheduler', 'Email Integration']
    },
    metrics: {
      uptime: '99.9%',
      processing: 'Thousands of records daily'
    },
    architecture: 'Async processing pipeline with background tasks and automated error handling',
    liveUrl: null
  },
  {
    id: 8,
    title: 'APDQ Towing Management',
    category: 'fullstack',
    tags: ['FastAPI', 'Flutter', 'React', 'TypeScript', 'Firebase', 'MySQL'],
    shortDescription: 'Complete Towing Business Management Ecosystem',
    icon: TOWImage,
    impact: 'Full digitization of towing business operations',
    detailedDescription: 'Full-stack towing management platform with mobile app, web portal, and backend API for complete business operations.',
    features: [
      'Mobile app for driver operations and dispatch',
      'Web portal for administration and management',
      'Real-time GPS tracking and route optimization',
      'Push notifications and alerts',
      'Multi-language support (French/English)',
      'Document management and invoicing'
    ],
    technologies: {
      mobile: ['Flutter', 'Firebase'],
      web: ['React', 'TypeScript', 'Material-UI'],
      backend: ['FastAPI', 'Python', 'Celery', 'Redis'],
      database: ['MySQL', 'Firebase'],
      cloud: ['AWS', 'Azure', 'Google Cloud']
    },
    metrics: {
      platforms: 'Mobile, Web, API',
      coverage: 'Complete business workflow'
    },
    architecture: 'Three-tier architecture with multi-platform synchronization',
    liveUrl: null,
    featured: true,
    problem: 'A towing company was managing dispatches via radio and paper forms. They needed a digital system that could track jobs, drivers, and invoices in real-time.',
    lesson: 'This was my first project building an entire ecosystem (mobile + web + API) from scratch. It taught me how to think in systems instead of features.'
  },
  {
    id: 9,
    title: 'Kubernetes Infrastructure',
    category: 'devops',
    tags: ['Kubernetes', 'Helm', 'ArgoCD', 'Docker', 'nginx', 'Prometheus'],
    shortDescription: 'Enterprise Container Orchestration Platform',
    icon: '☸️',
    impact: 'Reduced deployment time by 80% with GitOps automation',
    detailedDescription: 'Complete Kubernetes infrastructure with GitOps deployment, automated SSL management, and comprehensive monitoring.',
    features: [
      'Kubernetes cluster management',
      'Helm chart generation and management',
      'GitOps deployments with ArgoCD',
      'Automated SSL certificate management',
      'Monitoring with Prometheus',
      'Load balancing with NGINX Ingress'
    ],
    technologies: {
      orchestration: ['Kubernetes', 'Helm', 'ArgoCD'],
      infrastructure: ['Docker'],
      networking: ['NGINX Ingress', 'cert-manager'],
      monitoring: ['Prometheus']
    },
    metrics: {
      improvement: '80% faster deployments',
      methodology: 'GitOps workflow'
    },
    architecture: 'Infrastructure as Code with automated deployments and self-healing',
    liveUrl: null
  },
  {
    id: 10,
    title: 'SuperDispatch Dashboard',
    category: 'frontend',
    tags: ['React', 'TypeScript', 'Material-UI', 'Socket.IO', 'Redux', 'Recharts'],
    shortDescription: 'Real-time Operations Dashboard',
    icon: '🎛️',
    impact: 'Centralized operations management with live analytics',
    detailedDescription: 'Modern React dashboard for real-time logistics operations with live tracking, analytics, and management tools.',
    features: [
      'Real-time driver tracking with live maps',
      'Order management with cancellation tracking',
      'Maintenance scheduling dashboard',
      'Delivery performance analytics',
      'Inventory management interface',
      'Role-based user administration',
      'Invoice and billing management'
    ],
    technologies: {
      frontend: ['React', 'TypeScript', 'Material-UI'],
      stateManagement: ['Redux'],
      realtime: ['Socket.IO'],
      visualization: ['Recharts'],
      http: ['Axios']
    },
    metrics: {
      features: 'Live tracking, Analytics, Management'
    },
    architecture: 'Real-time dashboard with WebSocket connections and role-based access',
    liveUrl: 'https://dispatch.pasuper.xyz'
  },
  {
    id: 11,
    title: 'SuperTelemetry',
    category: 'fullstack',
    tags: ['Node.js', 'Socket.IO', 'Redis', 'AngularJS', 'Leaflet'],
    shortDescription: 'GPS Tracking & Fleet Analytics Platform',
    icon: '📡',
    impact: 'Real-time fleet monitoring and route analytics',
    detailedDescription: 'Real-time GPS tracking platform with HUD-style dashboard for monitoring driver locations and route analytics.',
    features: [
      'Real-time GPS streaming from fleet',
      'HUD-style dashboard with live visualization',
      'WebSocket architecture for instant updates',
      'High-capacity concurrent tracking',
      'Route data storage and retrieval',
      'Performance analytics'
    ],
    technologies: {
      backend: ['Node.js', 'Express.js'],
      realtime: ['Socket.IO'],
      cache: ['Redis'],
      frontend: ['AngularJS', 'Leaflet Maps']
    },
    metrics: {
      capacity: '50+ concurrent drivers'
    },
    architecture: 'Event-driven architecture with Redis caching and WebSocket broadcasting',
    liveUrl: null
  },
  {
    id: 12,
    title: 'SuperCron Automation',
    category: 'backend',
    tags: ['Python', 'FastAPI', 'APScheduler', 'Epicor', 'Email'],
    shortDescription: 'Automated Task Scheduling Service',
    icon: '⏰',
    impact: 'Reduced manual work by 70% through automation',
    detailedDescription: 'Automated scheduling service for label updates, inventory reports, and ERP synchronization.',
    features: [
      'Automated electronic label synchronization',
      'Inventory report generation',
      'Epicor ERP data synchronization',
      'Anomaly and discrepancy detection',
      'Automated email reporting'
    ],
    technologies: {
      backend: ['Python', 'FastAPI', 'APScheduler'],
      integration: ['Epicor ERP'],
      notifications: ['Email Integration'],
      deployment: ['Docker']
    },
    metrics: {
      impact: '70% reduction in manual tasks'
    },
    architecture: 'Cron-based automation with email notifications and ERP integration',
    liveUrl: null
  },
  {
    id: 13,
    title: 'SuperODBC Data Bridge',
    category: 'backend',
    tags: ['Python', 'ODBC', 'Encryption', 'PM2', 'FastAPI'],
    shortDescription: 'Secure Enterprise Data Integration',
    icon: '🔗',
    impact: 'Secure automated data extraction and processing',
    detailedDescription: 'Secure data bridge for extracting and processing data from ODBC sources with encryption and automated workflows.',
    features: [
      'Automated order extraction from databases',
      'Secure encrypted data transmission',
      'Duplicate detection and prevention',
      'REST API for control and monitoring',
      'Continuous processing with PM2'
    ],
    technologies: {
      backend: ['Python', 'FastAPI', 'pyodbc'],
      security: ['Data Encryption', 'HMAC Auth'],
      deployment: ['PM2']
    },
    metrics: {
      security: 'End-to-end encryption'
    },
    architecture: 'Async data bridge with encryption and duplicate prevention',
    liveUrl: null
  },
  {
    id: 14,
    title: 'SuperInventaire',
    category: 'mobile',
    tags: ['Flutter', 'BLoC', 'Barcode', 'Zebra DataWedge', 'HTTP'],
    shortDescription: 'Enterprise Mobile Inventory Management',
    icon: '📦',
    impact: 'Streamlined warehouse inventory operations with Zebra device integration',
    detailedDescription: 'Production-ready Flutter application for warehouse inventory management with enterprise barcode scanning, returns processing, and internal request workflows.',
    features: [
      'Real-time inventory tracking and cycle counting',
      'Zebra DataWedge barcode scanner integration with duplicate prevention',
      'Returns processing (Retour) workflow',
      'Internal request (IR) management with location scanning',
      'Completed batches tracking with statistics dashboard',
      'Multi-environment support (dev/prod)',
      'First-time password change enforcement',
      'Cross-platform support (iOS, Android, Web, Desktop)'
    ],
    technologies: {
      mobile: ['Flutter 3.4+', 'Dart'],
      stateManagement: ['Flutter BLoC', 'Equatable'],
      hardware: ['Zebra DataWedge', 'Barcode Scanner'],
      storage: ['Shared Preferences', 'Secure Storage'],
      networking: ['HTTP Client']
    },
    metrics: {
      version: 'v3.0.3',
      screens: '9 screens',
      platforms: 'iOS, Android, Web, Desktop'
    },
    architecture: 'BLoC architecture with repository pattern, Zebra device integration, and multi-environment configuration',
    liveUrl: null
  },
  {
    id: 15,
    title: 'SuperTransfer',
    category: 'mobile',
    tags: ['Flutter', 'BLoC', 'HTTP', 'Logistics'],
    shortDescription: 'Inter-Store Transfer & Logistics Management',
    icon: '🔄',
    impact: 'Automated inter-store transfer operations with full lifecycle tracking',
    detailedDescription: 'Flutter application for managing product transfers between store locations with multi-transfer operations, proxy store management, and transfer run tracking.',
    features: [
      'Transfer creation and lifecycle management between stores',
      'Multi-transfer bulk operations',
      'Proxy store management for intermediate storage',
      'Transfer run tracking with detailed summaries',
      'Incoming and outgoing transfer views',
      'Multi-environment support (dev/prod)',
      'First-time password change enforcement',
      'Comprehensive BLoC testing suite'
    ],
    technologies: {
      mobile: ['Flutter 3.4+', 'Dart'],
      stateManagement: ['Flutter BLoC', 'Equatable'],
      storage: ['Shared Preferences'],
      networking: ['HTTP Client'],
      testing: ['bloc_test', 'flutter_test']
    },
    metrics: {
      version: 'v2.0.3',
      screens: '8 screens',
      platforms: 'iOS, Android, Web, Desktop'
    },
    architecture: 'BLoC architecture with repository pattern, comprehensive testing, and multi-environment configuration',
    liveUrl: null
  },
  {
    id: 16,
    title: 'Close to the Pin',
    category: 'fullstack',
    tags: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'JWT', 'BLoC'],
    shortDescription: 'Golf Competition Mobile App with Backend',
    icon: '⛳',
    impact: 'Digital solution for managing golf closest-to-the-pin competitions',
    detailedDescription: 'Full-stack personal project featuring a Flutter mobile app with Node.js backend for managing golf "closest to the pin" competitions with user authentication and scoring.',
    features: [
      'User registration and secure authentication',
      'Game creation and management',
      'Player scoring and leaderboard tracking',
      'JWT-based session management',
      'Secure password hashing with Argon2',
      'RESTful API with health monitoring',
      'Input validation and error handling'
    ],
    technologies: {
      mobile: ['Flutter 3.4+', 'Dart'],
      stateManagement: ['Flutter BLoC'],
      backend: ['Node.js', 'Express 5'],
      database: ['MongoDB', 'Mongoose'],
      security: ['JWT', 'Argon2', 'CORS'],
      storage: ['Secure Storage', 'Shared Preferences']
    },
    metrics: {
      stack: 'Flutter + Node.js + MongoDB',
      type: 'Personal Project',
      platforms: 'iOS, Android'
    },
    architecture: 'Full-stack with Flutter BLoC frontend and Express RESTful API with MongoDB persistence',
    liveUrl: null
  },
  {
    id: 17,
    title: 'Course Management Platform',
    category: 'fullstack',
    tags: ['Next.js', 'React', 'Strapi', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    shortDescription: 'Modern Full-Stack Learning Management System',
    icon: '🎓',
    impact: 'Complete course management with inventory tracking module',
    detailedDescription: 'Full-stack learning management system built with Next.js 15 and Strapi 5, featuring modern React patterns, server components, and an integrated inventory management module.',
    features: [
      'Course content management with Strapi CMS',
      'Modern UI with shadcn/ui and Radix components',
      'Data tables with TanStack React Table',
      'Analytics dashboard with Recharts visualization',
      'Form handling with React Hook Form and Zod validation',
      'Inventory management module (frontend + backend)',
      'Responsive design with Tailwind CSS 4'
    ],
    technologies: {
      frontend: ['Next.js 15', 'React 19', 'TypeScript'],
      styling: ['Tailwind CSS 4', 'shadcn/ui', 'Radix UI'],
      backend: ['Strapi 5', 'SQLite'],
      tools: ['TanStack React Table', 'Recharts', 'React Hook Form', 'Zod']
    },
    metrics: {
      stack: 'Next.js 15 + Strapi 5',
      type: 'Personal Project',
      architecture: 'App Router with Server Components'
    },
    architecture: 'Next.js App Router with React Server Components and Strapi headless CMS backend',
    liveUrl: null
  },
  {
    id: 18,
    title: 'PaSUPER Frontend',
    category: 'frontend',
    tags: ['Angular', 'TypeScript', 'GraphQL', 'SSR', 'Redis', 'Moneris', 'YMME'],
    shortDescription: 'B2C/B2B Automotive E-Commerce Platform — 5M+ Products',
    icon: '🛍️',
    impact: 'Enterprise e-commerce serving 5M+ automotive parts with 3-layer caching and sub-second page loads',
    detailedDescription: 'Large-scale Angular 13 e-commerce platform powering pasuper.com with 188 components, 55 services, and 614 TypeScript files. Features 3-layer caching (frontend in-memory, Express SSR cache, backend Redis), YMME vehicle fitment with VIN decoding, dual B2B/B2C modes, Moneris & PayPal payments, and Angular Universal SSR for SEO.',
    features: [
      'YMME vehicle fitment (Year/Make/Model/Engine) with VIN decoding and multi-car garage',
      'PEDS qualifying questions for precise part matching across 5M+ products',
      '3-layer caching: frontend in-memory, Express SSR page cache, backend Redis',
      'Dual B2B/B2C mode with enterprise registration, cart export, and privacy toggle',
      '3 payment methods: Moneris hosted tokenization, PayPal, B2B charge-to-account',
      'Real-time delivery tracking via Socket.IO with order status updates',
      'Angular Universal SSR with dynamic meta tags, Open Graph, and sitemap generation',
      'Full i18n (French/English) with ngx-translate across 188 components'
    ],
    technologies: {
      frontend: ['Angular 13', 'TypeScript', 'RxJS', 'NGRX'],
      styling: ['Bootstrap 4.6', 'Angular Material', 'SCSS'],
      api: ['GraphQL', 'Apollo Angular', 'REST'],
      payments: ['Moneris Hosted Tokenization', 'PayPal', 'B2B Charge-to-Account'],
      ssr: ['Angular Universal', 'Express SSR', 'Page Caching'],
      realtime: ['Socket.IO'],
      deployment: ['Docker', 'Kubernetes', 'ArgoCD']
    },
    metrics: {
      scale: '614 TypeScript files, 188 components, 55 services',
      products: '5M+ automotive parts catalog',
      caching: '3-layer cache architecture',
      payments: 'Moneris + PayPal + B2B billing'
    },
    architecture: 'Angular Universal SSR with 3-layer caching, GraphQL + REST APIs, YMME vehicle fitment engine, and dual B2B/B2C mode with Kubernetes deployment via ArgoCD',
    liveUrl: 'https://pasuper.com',
    featured: true,
    problem: 'The company needed a modern e-commerce platform that could handle 5M+ automotive parts, vehicle fitment lookups, and both B2B and B2C customers — with fast page loads despite the massive catalog.',
    lesson: 'Performance at scale is all about caching strategy. The 3-layer cache (frontend, SSR, Redis) was the difference between 5-second and sub-second page loads on a 5M product catalog.'
  },
  {
    id: 19,
    title: 'PaSUPER E-Commerce Backend',
    category: 'backend',
    tags: ['Strapi', 'Node.js', 'Elasticsearch', 'Redis', 'PEDS', 'Moneris', 'MySQL'],
    shortDescription: 'Enterprise Backend Powering 5M+ Automotive Parts',
    icon: '🔧',
    impact: 'High-performance backend serving 5M+ products with 25+ Redis cache patterns and request coalescing',
    detailedDescription: 'Enterprise-grade Strapi 4 headless CMS powering the PaSUPER e-commerce platform with 41 content types, Elasticsearch across 4 indices with full re-index every 21 hours, 25+ Redis cache key patterns (TTLs from 2 min to 7 days), PEDS API integration processing 500 parts per chunk in 4 parallel streams, Moneris payment processing, ShipStation fulfillment, and dual MySQL databases.',
    features: [
      '41 content types modeling the full automotive parts domain',
      'Elasticsearch 8 with 4 indices, search_as_you_type fields, and <50ms typeahead',
      '25+ Redis cache key patterns with TTLs from 2 min to 7 days and request coalescing',
      'PEDS API integration: 3037-line mega-class, chunked requests (500/chunk, 4 parallel)',
      '3-layer vehicle parts cache: per-page, formatted results, raw PEDS data',
      'Background prefetching for PEDS qualifying questions on page load',
      'Moneris payment processing with receipt validation and refund support',
      'ShipStation XML integration for automated order fulfillment and shipping labels',
      'Dual MySQL databases (Strapi DB + superdb for full_orders)',
      'Full Elasticsearch re-index every 21 hours with zero-downtime swap'
    ],
    technologies: {
      backend: ['Strapi 4', 'Node.js 20', 'TypeScript', 'Koa'],
      database: ['MySQL (Dual DB)', 'Elasticsearch 8', 'Redis 7'],
      api: ['GraphQL', 'REST', 'Socket.IO'],
      integrations: ['Epicor ERP', 'PEDS API (Java Proxy)', 'Moneris', 'ShipStation', 'AWS SES'],
      cloud: ['AWS S3', 'Azure Translation'],
      deployment: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD']
    },
    metrics: {
      scale: '5M+ products (Strapi DB + Epicor PEDS)',
      contentTypes: '41 collections',
      caching: '25+ Redis cache patterns, request coalescing',
      search: '4 Elasticsearch indices, <50ms typeahead',
      reindex: 'Full re-index every 21 hours'
    },
    architecture: 'Strapi 4 CMS with Elasticsearch search engine (4 indices), Redis multi-layer caching with request coalescing, PEDS chunked parallel processing, dual MySQL databases, and Kubernetes deployment via ArgoCD',
    liveUrl: null
  },
];

// Filter functions
export const filterByCategory = (category: ProjectCategory): Project[] => {
  if (category === 'all') return projectsData;
  return projectsData.filter(project => project.category === category);
};

export const getProjectById = (id: number | string): Project | undefined => {
  return projectsData.find(project => project.id === parseInt(id.toString()));
};
