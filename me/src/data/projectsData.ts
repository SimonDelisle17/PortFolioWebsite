import { Project, ProjectCategory } from '../types/project';
import TOWImage from '../assets/TOW.png';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Super API Ecosystem',
    category: 'backend',
    tags: ['FastAPI', 'Python', 'MySQL', 'Redis', 'Docker', 'JWE', 'HERE Maps', 'WebSocket'],
    shortDescription: 'Enterprise-Grade Logistics & Delivery Management Platform with 300,000+ lines of code',
    icon: '🚚',
    impact: 'Complete logistics ecosystem serving multiple business units with 90% API optimization',
    detailedDescription: 'Comprehensive backend platform serving the entire PA Super logistics ecosystem with dual-database architecture, microservices, real-time WebSocket communication, and enterprise security.',
    features: [
      'SuperDeliver: Route optimization, GPS tracking, delivery confirmation with photos/signatures',
      'SuperLocator: Warehouse inventory management, barcode scanning, pick-list optimization',
      'SuperTransfer: Inter-store transfer automation with intelligent routing',
      'SuperStatement: Automated client billing with Office 365 integration',
      'SuperDispatch: Real-time operational dashboard with driver tracking',
      'WebSocket Real-Time Updates: Eliminated 8,640 API calls per user per day (90% reduction)',
      'Order Cancellation System V2: Complete lifecycle management with reason tracking',
      'Delivery Analytics: Average delivery time calculation with caching'
    ],
    technologies: {
      backend: ['Python 3.12', 'FastAPI', 'SQLAlchemy 2.0', 'Async/Await'],
      database: ['MySQL (Primary)', 'MySQL (Telemetry)', 'Redis'],
      security: ['JWE Encryption', 'Ed25519 Signatures', 'AES-GCM', 'Argon2', 'HMAC'],
      integrations: ['HERE Maps API', 'Microsoft Graph API', 'Azure AD', 'Office 365'],
      realtime: ['WebSocket Manager', 'Socket.IO'],
      deployment: ['Docker', 'Kubernetes', 'Microservices']
    },
    metrics: {
      linesOfCode: '300,000+',
      pythonFiles: '21,780+',
      databases: '2 (Primary + Telemetry)',
      microservices: '2 Services',
      apiOptimization: '90% reduction in picker API calls'
    },
    architecture: 'Microservices with dedicated geo-processing service, dual-database for performance scaling, WebSocket for real-time updates',
    liveUrl: null
  },
  {
    id: 2,
    title: 'SuperApp v4.2.0',
    category: 'mobile',
    tags: ['Flutter', 'Dart', 'HERE Maps', 'WebSocket', 'SQLite', 'Provider', 'Socket.IO'],
    shortDescription: 'Dual-Mode Mobile Platform for Delivery & Warehouse Management',
    icon: '📱',
    impact: 'Cross-platform enterprise mobile application with real-time updates',
    detailedDescription: 'Production-ready Flutter application serving both delivery drivers and warehouse workers with dual-mode architecture, native hardware integration, and real-time WebSocket communication.',
    features: [
      'SuperDeliver Mode: Route optimization with HERE Maps, real-time GPS tracking',
      'Delivery proof: Photo capture, digital signatures, barcode scanning',
      'SuperPicker/Locator Mode: Warehouse inventory tracking and management',
      'Real-time WebSocket connection for live reservation updates',
      'Items update instantly when other pickers reserve/unreserve',
      'Order Cancellation Flow: Cancel orders directly from the app with reason tracking',
      'Offline-first architecture with SQLite local storage',
      'Audio feedback system with Text-to-Speech'
    ],
    technologies: {
      mobile: ['Flutter 3.3.1+', 'Dart'],
      stateManagement: ['Provider Pattern', 'BLoC Pattern'],
      hardware: ['Camera', 'GPS (Geolocator)', 'Barcode Scanner', 'Audio (TTS)'],
      realtime: ['Socket.IO Client', 'WebSocket Channel'],
      storage: ['SQLite (sqflite)', 'Flutter Secure Storage'],
      maps: ['HERE Maps SDK']
    },
    metrics: {
      version: '4.2.0+420',
      dartFiles: '250+',
      dependencies: '51',
      platforms: 'iOS, Android, Web, Desktop',
      userExperience: 'Instant updates (vs 10 second polling)'
    },
    architecture: 'Dual-mode architecture with role-based authentication, offline-first design with sync, WebSocket real-time communication',
    liveUrl: null
  },
  {
    id: 3,
    title: 'SuperBuyer v2.0',
    category: 'fullstack',
    tags: ['NestJS', 'Angular 20', 'TypeScript', 'MySQL', 'TypeORM', 'JWT', 'AWS S3'],
    shortDescription: 'Full-Stack Buyer Management & Product Sourcing Platform',
    icon: '🛒',
    impact: 'Modern monorepo architecture for advanced buyer management',
    detailedDescription: 'Full-stack TypeScript application featuring NestJS 11 backend and Angular 20 frontend for advanced buyer management and product sourcing with environment-aware serving capabilities.',
    features: [
      'Buyer Management System for product sourcing operations',
      'Monorepo Architecture - Single codebase for backend and frontend',
      'JWT Authentication with Argon2 password hashing',
      'AWS S3 Integration for file storage and presigned URLs',
      'Excel/CSV Processing for bulk data operations',
      'Scheduled Tasks with node-cron',
      'PM2 Process Management for production deployment',
      'Hot Reload Development with concurrent processes'
    ],
    technologies: {
      backend: ['NestJS 11', 'TypeScript 5.7', 'TypeORM'],
      frontend: ['Angular 20', 'TypeScript'],
      database: ['MySQL', 'TypeORM'],
      security: ['JWT', 'Argon2', 'Cookie Parser'],
      cloud: ['AWS S3', 'S3 Presigner'],
      tools: ['PM2', 'Concurrently', 'SWC', 'ESLint', 'Prettier']
    },
    metrics: {
      version: '2.0.0',
      architecture: 'Monorepo',
      deployment: 'PM2 Production'
    },
    architecture: 'Monorepo with environment-aware serving - Development redirects to Angular dev server, Production serves built files',
    liveUrl: null
  },
  {
    id: 4,
    title: 'Epicor Services',
    category: 'backend',
    tags: ['Java', 'Spring Boot', 'Epicor SDK', 'PEDS API', 'Swagger', 'Docker'],
    shortDescription: 'Enterprise Integration Hub with 44 API Endpoints',
    icon: '🏢',
    impact: 'Complete Epicor AConneX SDK & PEDS Cloud API integration',
    detailedDescription: 'Spring Boot application providing comprehensive integration with Epicor AConneX SDK and PEDS Cloud API for parts ordering, vehicle lookups, and inventory management.',
    features: [
      '14 AConneX Endpoints: Part queries, stock inquiry, orders, returns, partner management',
      '30 PEDS Endpoints: YMME lookups, part catalog, buyer assist, interchange',
      'Interactive Swagger UI documentation',
      'VIN Decoder - Decode any 17-character VIN',
      'Stock Inquiry - Real-time availability at partner locations',
      'Part Interchange - Find equivalent parts across manufacturers',
      'YMME Vehicle Lookup - Year/Make/Model/Engine sequential lookup',
      'Buyer Assist - Vehicle fitment information for parts'
    ],
    technologies: {
      language: ['Java 8'],
      framework: ['Spring Boot', 'Maven'],
      security: ['API Key Authentication', 'JWT'],
      integration: ['Epicor AConneX SDK', 'PEDS Cloud API'],
      documentation: ['Swagger UI', 'OpenAPI 3.0'],
      deployment: ['Docker', 'Docker Compose', 'Make']
    },
    metrics: {
      totalEndpoints: '44 (14 AConneX + 30 PEDS)',
      testCoverage: '35.3% passing',
      documentation: 'Interactive Swagger UI'
    },
    architecture: 'Spring Boot microservice with dual API integration (AConneX + PEDS) and comprehensive Swagger documentation',
    liveUrl: null
  },
  {
    id: 5,
    title: 'Gozer - Password Manager',
    category: 'fullstack',
    tags: ['React', 'Node.js', 'Express', 'SQLite', 'AES-256', '2FA', 'Tailwind'],
    shortDescription: 'Enterprise Password & Access Management System',
    icon: '🔐',
    impact: 'Secure centralized access management with 2FA and audit trails',
    detailedDescription: 'Enterprise-grade password and access management system with multi-role support, end-to-end encryption, 2FA authentication, IP whitelisting, and comprehensive audit logging.',
    features: [
      'Secure Authentication: 2FA with TOTP, IP whitelist, timed sessions',
      'Multi-Role Management: Commis, IT, Developer, Administrator',
      'Website Credentials: Secure storage with AES-256 encryption',
      'IT Infrastructure: PC, TPE, network configuration management',
      'Developer Access: API keys, SSH access, .env file management',
      'Shared Documents: Google Docs/Sheets, PDF document links',
      'Audit Trail: Complete logging of all user actions',
      'Modern Dark UI: Professional interface with Tailwind CSS'
    ],
    technologies: {
      frontend: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite'],
      backend: ['Node.js', 'Express'],
      database: ['SQLite with encryption'],
      security: ['AES-256 Encryption', 'bcryptjs', 'speakeasy (2FA)', 'JWT'],
      features: ['IP Whitelisting', 'Session Management', 'Audit Logging']
    },
    metrics: {
      version: '1.0.0',
      roles: '4 (Commis, IT, Dev, Admin)',
      security: 'End-to-end encryption'
    },
    architecture: 'React SPA with Express API, SQLite database with encryption, role-based access control',
    liveUrl: null
  },
  {
    id: 6,
    title: 'SuperVin - VIN Scanner',
    category: 'mobile',
    tags: ['Flutter', 'Dart', 'Google ML Kit', 'Barcode', 'OCR', 'BLoC'],
    shortDescription: 'AI-Powered VIN Recognition Mobile App',
    icon: '🚗',
    impact: 'Fast and accurate VIN scanning with ML Kit',
    detailedDescription: 'Flutter mobile application for vehicle identification using Google ML Kit for barcode scanning and OCR text recognition to decode VIN numbers.',
    features: [
      'VIN Barcode Scanning using Google ML Kit',
      'VIN OCR Recognition with text recognition',
      'Camera Integration for real-time scanning',
      'Image Picker for manual photo selection',
      'Secure Storage for tokens and credentials',
      'BLoC State Management for clean architecture',
      'Cross-platform support (iOS/Android)'
    ],
    technologies: {
      mobile: ['Flutter', 'Dart'],
      ai: ['Google ML Kit Barcode Scanning', 'Google ML Kit Text Recognition'],
      stateManagement: ['Flutter BLoC 8.1.3', 'Equatable'],
      hardware: ['Camera', 'Image Picker'],
      security: ['Flutter Secure Storage'],
      permissions: ['Permission Handler']
    },
    metrics: {
      version: '1.0.0+1',
      mlFeatures: '2 (Barcode + OCR)',
      platforms: 'iOS, Android'
    },
    architecture: 'BLoC pattern with Google ML Kit integration for real-time VIN recognition',
    liveUrl: null
  },
  {
    id: 7,
    title: 'AI Phone Assistant',
    category: 'ai',
    tags: ['OpenAI', 'Azure', 'Deepgram', 'Twilio', 'FastAPI', 'MinIO'],
    shortDescription: 'Advanced Conversational AI with Multi-Language Support',
    icon: '🤖',
    impact: '24/7 intelligent customer support system',
    detailedDescription: 'Multi-language AI-powered phone assistant using cutting-edge speech recognition and natural language processing for automated customer support.',
    features: [
      'Multi-language phone assistant with real-time translation',
      'Advanced voice recognition using Deepgram and Azure Speech Services',
      'Natural Language Processing with OpenAI GPT integration',
      'Text-to-Speech with AWS Polly for natural responses',
      'Voice Activity Detection using Silero VAD',
      'Dynamic audio processing with FFmpeg'
    ],
    technologies: {
      ai: ['OpenAI GPT', 'Azure Cognitive Services', 'Deepgram SDK', 'AWS Polly'],
      backend: ['Python', 'FastAPI', 'LangChain'],
      telephony: ['Twilio API', 'WebRTC'],
      storage: ['MinIO S3', 'Strapi CMS'],
      infrastructure: ['Docker', 'Ngrok']
    },
    metrics: {
      linesOfCode: '4,049',
      pythonFiles: '33',
      languages: 'Multi-language (FR/EN)',
      availability: '24/7'
    },
    architecture: 'Multi-cloud architecture (AWS, Azure, OpenAI) with async processing pipeline',
    liveUrl: null
  },
  {
    id: 8,
    title: 'SuperParser API',
    category: 'backend',
    tags: ['FastAPI', 'Pandas', 'SQLAlchemy', 'HMAC', 'Cryptography'],
    shortDescription: 'Mission-Critical Data Processing & Integration Engine',
    icon: '⚙️',
    impact: '99.9% uptime processing thousands of records',
    detailedDescription: 'Intelligent data processing engine with advanced UPC matching algorithms and secure data handling for order and transfer processing.',
    features: [
      'Smart UPC-based location matching for inventory',
      'Automated order data processing and database insertion',
      'Transfer order processing and routing',
      'Real-time health monitoring and email alerts',
      'Duplicate detection and error recovery',
      'Memory-optimized processing for large datasets'
    ],
    technologies: {
      backend: ['Python 3.x', 'FastAPI (Async)', 'Pandas'],
      database: ['SQLAlchemy (Async)', 'MySQL'],
      security: ['HMAC-SHA256', 'Fernet Encryption'],
      automation: ['APScheduler', 'Email Integration']
    },
    metrics: {
      linesOfCode: '1,343 (core processor)',
      uptime: '99.9%',
      processing: 'Thousands of records daily'
    },
    architecture: 'Async processing pipeline with background tasks and automated error handling',
    liveUrl: null
  },
  {
    id: 9,
    title: 'APDQ Towing Management',
    category: 'fullstack',
    tags: ['FastAPI', 'Flutter', 'React', 'TypeScript', 'Firebase', 'MySQL'],
    shortDescription: 'Complete Towing Business Management Ecosystem',
    icon: TOWImage,
    impact: 'Multi-platform business management solution',
    detailedDescription: 'Full-stack towing management platform with mobile app, web portal, and backend API supporting complete business digitization.',
    features: [
      'Mobile App (Flutter): "Remorqueur Branche" - Driver operations',
      'Web Portal (React + TypeScript): Administration and management',
      'Backend API (FastAPI): Comprehensive business logic',
      'Firebase integration for push notifications',
      'Multi-language support (French/English)',
      'Real-time GPS tracking and document management'
    ],
    technologies: {
      mobile: ['Flutter 3.4.0+', 'Firebase (Messaging, Analytics, Crashlytics)'],
      web: ['React 18.3.1', 'TypeScript', 'Material-UI 6.4.0', 'Vite'],
      backend: ['FastAPI', 'Python', 'Celery', 'Redis'],
      database: ['MySQL', 'Firebase'],
      cloud: ['AWS', 'Azure', 'Google Cloud']
    },
    metrics: {
      pythonFiles: '3,996+',
      packages: '142 (Python)',
      platforms: '3 (Mobile, Web, API)'
    },
    architecture: 'Three-tier architecture with microservices backend and multi-platform synchronization',
    liveUrl: null
  },
  {
    id: 10,
    title: 'Kubernetes DevOps (gamcar-argo-cd)',
    category: 'devops',
    tags: ['Kubernetes', 'Helm', 'ArgoCD', 'Docker', 'nginx', 'Prometheus'],
    shortDescription: 'Enterprise Container Orchestration Platform',
    icon: '☸️',
    impact: 'Reduced deployment time by 80%',
    detailedDescription: 'Complete Kubernetes infrastructure with GitOps deployment using ArgoCD, automated SSL management, and comprehensive monitoring.',
    features: [
      'Kubernetes cluster setup for Windows/WSL environments',
      'Helm chart generation and management',
      'ArgoCD GitOps deployments',
      'Automated SSL certificate management with cert-manager',
      'Monitoring stack with Prometheus integration',
      'NGINX Ingress load balancing'
    ],
    technologies: {
      orchestration: ['Kubernetes', 'Helm', 'ArgoCD'],
      infrastructure: ['Docker', 'WSL2'],
      networking: ['nginx Ingress Controller', 'cert-manager', 'mkcert'],
      monitoring: ['Prometheus'],
      tools: ['phpMyAdmin', 'Guru-Lite']
    },
    metrics: {
      deploymentSpeed: '80% reduction',
      automation: 'GitOps workflow'
    },
    architecture: 'Infrastructure as Code with automated deployments and self-healing applications',
    liveUrl: null
  },
  {
    id: 11,
    title: 'SuperDispatch Dashboard',
    category: 'frontend',
    tags: ['React', 'TypeScript', 'Material-UI', 'Socket.IO', 'Redux', 'Recharts'],
    shortDescription: 'Real-time Operations Dashboard with Analytics',
    icon: '🎛️',
    impact: 'Real-time driver tracking, analytics, and maintenance management',
    detailedDescription: 'Modern React dashboard for real-time logistics operations management with live tracking, inventory control, business analytics, and maintenance scheduling.',
    features: [
      'Real-time driver route visualization with live maps',
      'Canceled Orders View with pagination and filtering',
      'Maintenance Dashboard with visual status indicators',
      'Delivery Analytics with average time metrics',
      'Inventory management interface',
      'User administration with role-based permissions',
      'Invoice management and billing',
      'CSV Upload section with improved UX',
      'Statistics and performance analytics with Recharts'
    ],
    technologies: {
      frontend: ['React 18.2.0', 'TypeScript', 'Material-UI 6.1.1'],
      stateManagement: ['Redux'],
      realtime: ['Socket.IO Client'],
      visualization: ['Recharts'],
      http: ['Axios'],
      routing: ['React Router DOM 6.26.2'],
      utils: ['date-fns', 'dayjs', 'PapaParse']
    },
    metrics: {
      environments: '3 (Local, Dev, Production)',
      features: 'Canceled Orders, Maintenance Dashboard, Delivery Analytics'
    },
    architecture: 'Real-time dashboard with WebSocket connections, role-based access control, and enhanced analytics',
    liveUrl: 'https://dispatch.pasuper.xyz'
  },
  {
    id: 12,
    title: 'SuperTelemetry',
    category: 'fullstack',
    tags: ['Node.js', 'Socket.IO', 'Redis', 'AngularJS', 'Leaflet'],
    shortDescription: 'GPS Tracking & Analytics Platform',
    icon: '📡',
    impact: 'Real-time fleet monitoring system',
    detailedDescription: 'Real-time GPS tracking platform with HUD-style dashboard for monitoring driver locations and route analytics.',
    features: [
      'Real-time GPS streaming from multiple drivers',
      'HUD-style dashboard with live visualization',
      'WebSocket architecture for instant updates',
      'Driver simulation with stress testing (50+ drivers)',
      'REST API + WebSocket hybrid communication',
      'Route data storage and retrieval'
    ],
    technologies: {
      backend: ['Node.js 18+', 'Express.js'],
      realtime: ['Socket.IO'],
      cache: ['Redis 6+'],
      frontend: ['AngularJS', 'Leaflet Maps'],
      testing: ['Driver Simulator']
    },
    metrics: {
      port: '3000',
      stressTest: '50+ concurrent drivers'
    },
    architecture: 'Event-driven architecture with Redis caching and WebSocket broadcasting',
    liveUrl: null
  },
  {
    id: 13,
    title: 'SuperCron Automation',
    category: 'backend',
    tags: ['Python', 'FastAPI', 'APScheduler', 'Epicor', 'Email'],
    shortDescription: 'Automated Task Scheduling & Integration Service',
    icon: '⏰',
    impact: 'Automated business processes reducing manual work by 70%',
    detailedDescription: 'Automated scheduling service for electronic label updates, inventory reports, and Epicor ERP integration.',
    features: [
      'Automated electronic label synchronization',
      'Inventory report generation',
      'Epicor ERP data synchronization',
      'Unknown parts detection',
      'Inventory discrepancy detection',
      'Automated email reporting'
    ],
    technologies: {
      backend: ['Python', 'FastAPI', 'APScheduler'],
      integration: ['Epicor ERP'],
      notifications: ['Email Integration'],
      deployment: ['Docker (dev & prod)']
    },
    metrics: {
      automation: 'Multiple scheduled tasks'
    },
    architecture: 'Cron-based automation with email notifications and ERP integration',
    liveUrl: null
  },
  {
    id: 14,
    title: 'SuperODBC Data Bridge',
    category: 'backend',
    tags: ['Python', 'ODBC', 'Encryption', 'PM2', 'FastAPI'],
    shortDescription: 'Secure ODBC Data Extraction & Processing',
    icon: '🔗',
    impact: 'Secure enterprise data bridge',
    detailedDescription: 'Secure data bridge for extracting and processing data from ODBC sources with encryption and automated workflows.',
    features: [
      'Automated order extraction from ODBC databases',
      'Transfer data retrieval and processing',
      'Data encryption before transmission',
      'Duplicate detection and prevention',
      'REST API endpoints for control',
      'Continuous data processing with PM2'
    ],
    technologies: {
      backend: ['Python 3.10+', 'FastAPI', 'pyodbc'],
      security: ['Data Encryption', 'HMAC Auth'],
      async: ['Asyncio'],
      deployment: ['PM2 Process Manager']
    },
    metrics: {
      security: 'Encrypted transmission'
    },
    architecture: 'Async data bridge with encryption and duplicate prevention',
    liveUrl: null
  },
  {
    id: 15,
    title: 'PA Super Backend (Strapi)',
    category: 'backend',
    tags: ['Strapi', 'Node.js', 'GraphQL', 'Elasticsearch', 'MySQL'],
    shortDescription: 'Headless CMS & Content Platform',
    icon: '🗄️',
    impact: 'Centralized content management for ecosystem',
    detailedDescription: 'Strapi-based headless CMS providing GraphQL and REST APIs for content management across the PA Super ecosystem.',
    features: [
      'Headless CMS with GraphQL and REST APIs',
      'User authentication and permissions',
      'File upload with AWS S3 integration',
      'Real-time updates via Socket.IO',
      'Advanced search with Elasticsearch',
      'Email functionality with Nodemailer'
    ],
    technologies: {
      cms: ['Strapi 4.25.17'],
      runtime: ['Node.js 18-20'],
      database: ['MySQL 2.18.1'],
      search: ['Elasticsearch 8.17.0'],
      cache: ['Redis 4.6.14'],
      realtime: ['Socket.IO 4.5.0'],
      storage: ['AWS S3']
    },
    metrics: {
      apiTypes: 'GraphQL & REST'
    },
    architecture: 'Headless CMS with plugin architecture and multi-service integration',
    liveUrl: null
  },
  {
    id: 16,
    title: 'SuperInventaire',
    category: 'mobile',
    tags: ['Flutter', 'BLoC', 'Barcode', 'HTTP'],
    shortDescription: 'Mobile Inventory Management App',
    icon: '📦',
    impact: 'Warehouse inventory tracking',
    detailedDescription: 'Flutter mobile application for warehouse inventory management with barcode scanning and real-time synchronization.',
    features: [
      'Inventory tracking and management',
      'Barcode scanning for products',
      'BLoC pattern for state management',
      'Local storage with shared preferences',
      'User authentication',
      'Multi-language support'
    ],
    technologies: {
      mobile: ['Flutter 3.4.0+', 'Dart'],
      stateManagement: ['Flutter BLoC 8.1.3'],
      hardware: ['Barcode Scanner'],
      http: ['HTTP Client'],
      storage: ['Shared Preferences'],
      i18n: ['Intl']
    },
    metrics: {
      version: '3.0.2+302'
    },
    architecture: 'BLoC architecture with barcode integration and local storage',
    liveUrl: null
  },
  {
    id: 17,
    title: 'SuperTransfer',
    category: 'mobile',
    tags: ['Flutter', 'BLoC', 'HTTP', 'Testing'],
    shortDescription: 'Store Transfer Management App',
    icon: '🔄',
    impact: 'Inter-store transfer automation',
    detailedDescription: 'Flutter application for managing product transfers between store locations with comprehensive testing.',
    features: [
      'Transfer management between stores',
      'State management with BLoC pattern',
      'Version tracking and updates',
      'Unit testing with bloc_test',
      'Package information tracking',
      'Real-time synchronization'
    ],
    technologies: {
      mobile: ['Flutter 3.4.0+', 'Dart'],
      stateManagement: ['Flutter BLoC 8.1.3'],
      http: ['HTTP Client'],
      storage: ['Shared Preferences'],
      testing: ['bloc_test'],
      utils: ['Package Info Plus']
    },
    metrics: {
      version: '3.0.0+30'
    },
    architecture: 'BLoC architecture with comprehensive unit testing',
    liveUrl: null
  },
  {
    id: 18,
    title: 'Who Got The Biggest',
    category: 'fullstack',
    tags: ['Angular', 'NestJS', 'Socket.IO', 'MySQL', 'TypeORM'],
    shortDescription: 'Real-time Multiplayer Game',
    icon: '🎮',
    impact: 'Real-time gaming platform',
    detailedDescription: 'Full-stack multiplayer game with Angular frontend and NestJS backend, featuring real-time WebSocket communication and leaderboards.',
    features: [
      'Real-time multiplayer gameplay',
      'User authentication system',
      'Leaderboard with score tracking',
      'WebSocket real-time communication',
      'User profile management',
      'Live score updates'
    ],
    technologies: {
      frontend: ['Angular 18+', 'TypeScript'],
      backend: ['NestJS', 'TypeScript'],
      database: ['MySQL', 'TypeORM'],
      realtime: ['Socket.IO'],
      testing: ['Karma', 'Jasmine', 'Jest']
    },
    metrics: {
      devPorts: 'Frontend: 46576, Backend: 46575'
    },
    architecture: 'Event-driven architecture with WebSocket for real-time game state',
    liveUrl: 'https://jeu.superatelier.ca'
  }
];

// Filter functions
export const filterByCategory = (category: ProjectCategory): Project[] => {
  if (category === 'all') return projectsData;
  return projectsData.filter(project => project.category === category);
};

export const getProjectById = (id: number | string): Project | undefined => {
  return projectsData.find(project => project.id === parseInt(id.toString()));
};
