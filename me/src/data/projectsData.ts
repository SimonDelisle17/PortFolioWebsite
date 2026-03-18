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
    impact: 'Complete logistics backbone — 300K+ lines serving drivers, warehouse workers, dispatchers and managers in real time',
    detailedDescription: 'The central FastAPI 0.110 backend powering every PA Super logistics operation. Dual-database architecture (MySQL for persistence, Redis for cache/real-time state), dedicated geo-processing microservice for HERE Maps route optimization, and a WebSocket layer that cut polling load by 90%. Every other PA Super system talks to this API.',
    features: [
      'SuperDeliver: Route optimization via HERE Maps, live GPS tracking, delivery proof (photo + signature)',
      'SuperLocator: Warehouse inventory management, barcode scanning, pick-list optimization',
      'SuperTransfer: Inter-store transfer automation with intelligent routing and lifecycle tracking',
      'SuperStatement: Automated client billing integrated with Microsoft Graph / Office 365',
      'SuperDispatch: Real-time driver tracking dashboard and operational command center',
      'WebSocket event bus reducing polling API calls by 90% across all clients',
      'Dedicated geo microservice: isolated HERE Maps routing, batch geocoding, ETA calculation',
      'JWE-encrypted tokens + Ed25519 request signatures for inter-service auth'
    ],
    technologies: {
      backend: ['Python 3.12', 'FastAPI 0.110', 'SQLAlchemy 2.0', 'Async/Await', 'Uvicorn'],
      database: ['MySQL (Dual Database)', 'Redis (Cache + Pub/Sub)'],
      security: ['JWE Encryption', 'Ed25519 Signatures', 'AES-GCM', 'Argon2'],
      integrations: ['HERE Maps API', 'Microsoft Graph API', 'Azure AD', 'Office 365'],
      deployment: ['Docker', 'Kubernetes', 'Microservices', 'ArgoCD']
    },
    metrics: {
      codebase: '300,000+ lines across all PA Super services',
      performance: '90% reduction in API polling via WebSocket',
      architecture: 'Dual-database + dedicated geo microservice',
      uptime: '24/7 production — horizontally scaled on K8s'
    },
    architecture: 'FastAPI monolith with dedicated geo-processing sidecar service, dual MySQL+Redis databases, and WebSocket pub/sub layer for real-time fleet state',
    liveUrl: null,
    problem: 'PA Super was running delivery operations on WhatsApp messages and manual Excel sheets. Drivers had no route optimization, dispatchers had no real-time visibility, and billing was done by hand at end of month. Everything needed to be built from zero.',
    lesson: 'Building the geo microservice as a separate process (not just a module) was the right call — HERE Maps SDK has its own memory profile and retry logic that would have polluted the main API process. Isolation made it easier to scale and debug independently. The 90% WebSocket win came from observing that 80% of requests were just "any updates?" polls — replacing those with push events was the highest-leverage change in the codebase.'
  },
  {
    id: 2,
    title: 'SuperApp Mobile Platform',
    category: 'mobile',
    tags: ['Flutter', 'Dart', 'HERE Maps', 'WebSocket', 'SQLite', 'BLoC'],
    shortDescription: 'One Flutter Codebase, Two Modes: SuperDeliver (Driver) + SuperPicker (Warehouse)',
    icon: '📱',
    impact: 'Single Flutter app used daily by delivery drivers and warehouse workers — two completely different UX flows, one shared codebase',
    detailedDescription: 'Production Flutter v4.2 app with two distinct operating modes baked into the same binary. SuperDeliver serves field delivery drivers with route optimization, GPS tracking, and digital proof-of-delivery. SuperPicker serves warehouse workers with inventory management, pick-list scanning, and returns processing. Role-based auth at login determines which mode loads. Offline-first so field workers never get blocked by spotty warehouse WiFi.',
    features: [
      'SuperDeliver mode: HERE Maps route optimization, live GPS tracking, order delivery workflow',
      'Proof of delivery: photo capture, digital signature, barcode confirmation — all offline-capable',
      'SuperPicker mode: inventory cycle counting, pick-list management, returns (Retour) processing',
      'Zebra DataWedge barcode integration for enterprise scanners in warehouse',
      'Offline-first with SQLite queue — syncs to backend when connection restored',
      'Real-time order updates via WebSocket (cancellations, priority changes)',
      'Text-to-speech audio feedback for hands-free warehouse scanning',
      'Multi-environment config (dev/staging/prod) with first-time password enforcement'
    ],
    technologies: {
      mobile: ['Flutter', 'Dart'],
      stateManagement: ['BLoC Pattern', 'Provider Pattern'],
      hardware: ['Camera', 'GPS', 'Barcode Scanner', 'Audio TTS', 'Zebra DataWedge'],
      realtime: ['Socket.IO', 'WebSocket'],
      storage: ['SQLite', 'Secure Storage', 'Shared Preferences'],
      maps: ['HERE Maps SDK']
    },
    metrics: {
      version: 'v4.2',
      platforms: 'iOS, Android, Web, Desktop',
      modes: 'SuperDeliver (driver) + SuperPicker (warehouse)',
      architecture: 'Single codebase, dual-mode with role-based UX'
    },
    architecture: 'Single Flutter binary with role-based mode switching, offline-first SQLite queue, and BLoC state management separating driver/warehouse business logic',
    liveUrl: null,
    problem: 'Two different teams — drivers on the road and workers in the warehouse — needed purpose-built mobile tools. Building two separate apps would have meant maintaining two codebases, doubling release overhead and doubling bugs. The challenge was designing a single app that felt native to each role without either user ever seeing the other\'s screens.',
    lesson: 'The offline-first decision was the right one but harder than expected. Designing the sync queue to handle partial uploads, retry logic, and conflict resolution took more thought than the feature itself. The lesson: decide on your offline strategy on day one, not when drivers start complaining about lost signatures in dead zones.'
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
      architecture: 'Monorepo (NestJS + Angular)',
      stack: 'Full TypeScript — NestJS 11 + Angular 20'
    },
    architecture: 'Monorepo with NestJS 11 backend and Angular 20 frontend, environment-aware serving for seamless dev/prod switching',
    liveUrl: null,
    problem: 'Buyer operations at PA Super were tracked in spreadsheets. Product sourcing requests, supplier contacts, and purchase decisions had no central system. The buyer team needed a purpose-built tool, not a workaround.',
    lesson: 'TypeORM in a monorepo with a shared entity layer is genuinely ergonomic — one change to the Product entity propagates correctly to both the API and the Angular type-safe service layer. The Angular 20 signals-based state management replaced a lot of boilerplate RxJS that made the old code harder to follow.'
  },
  {
    id: 4,
    title: 'Epicor Integration Services',
    category: 'backend',
    tags: ['Java', 'Spring Boot', 'Epicor SDK', 'PEDS API', 'Swagger', 'Docker'],
    shortDescription: 'Enterprise ERP Integration Hub — 44 Endpoints Bridging Epicor AConneX + PEDS Cloud',
    icon: '🏢',
    impact: 'Java proxy service called by every other PA Super system that needs live parts data, pricing, or vehicle fitment',
    detailedDescription: 'Spring Boot proxy service wrapping two completely different Epicor APIs into one clean REST surface. AConneX SDK (14 endpoints): parts ordering, stock inquiry, order management, invoice retrieval. PEDS Cloud API (30 endpoints): vehicle YMME lookups, VIN decoding, part catalog search, interchange lookup, qualifying questions for fitment. Used by the Angular storefront, the AI agent, and the FastAPI backend — all call this Java proxy instead of integrating Epicor SDKs directly.',
    features: [
      'AConneX (14 endpoints): part queries, stock check, order creation, order status, invoice retrieval',
      'PEDS Cloud (30 endpoints): YMME vehicle lookup, VIN decode, catalog search, interchange, fitment questions',
      'Single API key auth layer wrapping both underlying Epicor credential systems',
      'Swagger UI with full OpenAPI 3.0 spec — used by every team integrating with ERP',
      'Request/response logging for ERP audit trail',
      'Docker-deployed, consumed by FastAPI backend, Angular frontend, and AI agent as shared service'
    ],
    technologies: {
      language: ['Java'],
      framework: ['Spring Boot', 'Maven'],
      security: ['API Key Authentication', 'JWT'],
      integration: ['Epicor AConneX SDK (14 endpoints)', 'PEDS Cloud API (30 endpoints)'],
      documentation: ['Swagger UI', 'OpenAPI 3.0'],
      deployment: ['Docker', 'Kubernetes']
    },
    metrics: {
      endpoints: '44 total (14 AConneX + 30 PEDS)',
      integration: 'Dual Epicor API surface unified',
      consumers: 'FastAPI backend + Angular storefront + AI agent',
      documentation: 'Full OpenAPI 3.0 spec'
    },
    architecture: 'Spring Boot proxy unifying Epicor AConneX SDK and PEDS Cloud API behind a single authenticated REST surface, consumed by all other PA Super services',
    liveUrl: null
  },
  {
    id: 5,
    title: 'SuperVin Scanner',
    category: 'mobile',
    tags: ['Flutter', 'Dart', 'Google ML Kit', 'Barcode', 'OCR', 'BLoC', 'OptiCAT', 'Strapi'],
    shortDescription: 'VIN Scanner & Garage Manager — ML Barcode + OCR + OptiCAT Vehicle Lookup',
    icon: '🚗',
    impact: 'Replaces manual VIN entry at the PA Super service desk — scan any barcode or snap a photo, get full vehicle data in seconds',
    detailedDescription: 'Flutter app built for the PA Super service desk that combines Google ML Kit barcode scanning and OCR text recognition to capture VINs, then queries the OptiCAT API for detailed vehicle information. Authenticated users save vehicles to a personal garage for repeat lookups. Brand-matched UI follows the Super identity (blue #003CA6, red #D20F14, HarvestItal + BigNoodleTitling fonts). Multi-environment config covers dev simulators, physical devices, staging, and production without code changes.',
    features: [
      'Google ML Kit barcode scanning: real-time camera-based VIN barcode reading',
      'OCR text recognition: snap a photo of a VIN plate when no barcode is available',
      'Manual VIN entry with validation as a fallback',
      'OptiCAT API integration: full vehicle data lookup by decoded VIN',
      'Garage management: save vehicles to user account for repeat lookups',
      'User authentication via Strapi CMS (login + session management)',
      'Multi-environment config: dev simulator, Android emulator, physical device, staging, production',
      'Brand-compliant UI: Super brand blue/red palette + HarvestItal + BigNoodleTitling fonts'
    ],
    technologies: {
      mobile: ['Flutter', 'Dart'],
      ai: ['Google ML Kit Barcode Scanning', 'Google ML Kit Text Recognition (OCR)'],
      stateManagement: ['Flutter BLoC'],
      backend: ['Strapi CMS (auth + garage API)'],
      integration: ['OptiCAT Vehicle API'],
      hardware: ['Camera', 'Image Picker'],
      security: ['Secure Storage']
    },
    metrics: {
      scanModes: '3 modes: ML barcode, OCR, manual entry',
      environments: '5 environments: dev sim, Android emulator, physical, staging, prod',
      platforms: 'iOS, Android'
    },
    architecture: 'Flutter BLoC app with 3-mode VIN capture (barcode/OCR/manual), OptiCAT API for vehicle data, and Strapi-authenticated garage management',
    liveUrl: null,
    problem: 'Service desk staff were manually typing VINs from plates and paperwork — slow and error-prone for every customer interaction. One misread character means a wrong vehicle lookup and a wasted customer interaction.',
    lesson: 'Google ML Kit barcode and OCR work well in isolation but need careful BLoC sequencing — one event type per capture mode, all funneling into the same VIN lookup action. The multi-environment config pattern (initialize at app start, no code changes per environment) became a reusable template for every subsequent Flutter project.'
  },
  {
    id: 6,
    title: 'PaSUPER AI — Voice & Chat',
    category: 'ai',
    tags: ['LangChain', 'OpenAI GPT-4o', 'FastAPI', 'Twilio', 'SSE Streaming', 'Gladia STT', 'AWS Polly', 'Kubernetes'],
    shortDescription: 'Production Omnichannel AI — Real-Time Phone Calls & Streaming Chat for a 40K-Part Automotive Distributor',
    icon: '🤖',
    impact: 'Dual-mode AI handling 24/7 inbound phone calls and live web chat in 3 languages, with real-time ERP parts lookup and ordering',
    detailedDescription: 'Production-grade dual-mode AI system powering PaSUPER — a Canadian automotive parts distributor. The same LangChain + GPT-4o agent handles two channels: inbound Twilio phone calls with real-time speech processing, and an embeddable chat widget on the Angular storefront. Both channels share the same tools, memory, and ERP integrations — enabling a seamless omnichannel customer experience across phone and web.',
    features: [
      'Voice AI: Twilio inbound calls → Silero VAD noise filtering → Gladia STT transcription → LangChain agent → AWS Polly TTS → streamed back to caller',
      'Chat AI: Embeddable Angular widget → SSE token streaming (<200ms first token) → shared LangChain agent → real-time response',
      'Shared LangChain agent with vehicle parts lookup (YMME) and order creation via Epicor ERP',
      'Caller identification via Strapi CMS lookup — personalized experience per customer',
      'Real-time call interruption: Silero VAD detects user speaking mid-response and stops playback',
      'Human transfer with full transcript saved to S3 on handoff or failure',
      'Chat session management: in-memory sessions (1h TTL), multi-turn memory, localStorage persistence across page refreshes',
      'SSE streaming: tokens rendered character-by-character with typing indicator',
      'Security: API key auth, per-IP rate limiting (30 msg/min), CORS origin whitelist',
      '3 languages: French, English, Spanish — DTMF language menu on voice, i18n on chat',
      'Kubernetes deployed via ArgoCD + Helm on OVH infrastructure'
    ],
    technologies: {
      ai: ['LangChain 0.3', 'OpenAI GPT-4o-mini', 'Silero VAD 5.1'],
      speechRecognition: ['Gladia API (primary)', 'Deepgram SDK 3.10 (fallback)'],
      speechSynthesis: ['AWS Polly (primary)', 'Azure Cognitive Services (fallback)'],
      backend: ['Python 3.11', 'FastAPI 0.115', 'Uvicorn'],
      telephony: ['Twilio 9.4', 'WebSocket Media Streams'],
      integrations: ['Strapi CMS', 'Epicor ERP (Java proxy)', 'AWS S3 / MinIO'],
      deployment: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD']
    },
    metrics: {
      codebase: '40 Python files, 4,353 lines of source code',
      firstToken: '<200ms first chat token via SSE',
      languages: '3 languages: FR / EN / ES',
      availability: '24/7 — stateless, scales horizontally on K8s',
      channels: 'Voice (Twilio) + Web Chat (SSE) on single agent'
    },
    architecture: 'Single FastAPI app with two pipelines (voice + chat) sharing one LangChain agent. Voice pipeline: Twilio WebSocket → Silero VAD → Gladia STT → agent → Polly TTS → Twilio. Chat pipeline: Angular widget → POST /chat/stream → SSE token stream → agent. Both pipelines call the same Epicor ERP tools for live parts data.',
    liveUrl: null,
    featured: true,
    displayOrder: 0,
    problem: 'The company was losing customers after hours — calls went unanswered, and the web store had no way to answer parts compatibility questions in real time. They needed one intelligent system that could handle both a phone call and a chat message, in French or English, and actually look up real parts data — not just give generic answers.',
    lesson: 'Building two real-time AI pipelines that share the same agent taught me how much architecture decisions ripple outward. The SSE streaming approach for chat cut perceived latency from 3 seconds to under 200ms — not by making the AI faster, but by changing when we start sending bytes. On voice, every 100ms of pipeline latency makes the conversation feel robotic. Profiling each step (VAD → STT → LLM → TTS) was the only way to find where time was actually being lost.'
  },
  {
    id: 7,
    title: 'SuperParser API',
    category: 'backend',
    tags: ['FastAPI', 'Pandas', 'SQLAlchemy', 'HMAC', 'Cryptography'],
    shortDescription: 'Mission-Critical Data Processing Engine — 1343-Line Core, Handover-Grade Docs',
    icon: '⚙️',
    impact: 'Parses, validates, and routes thousands of order/transfer records daily with HMAC auth and duplicate detection',
    detailedDescription: 'FastAPI service with a 1343-line core processor (processor.py) that handles UPC-based inventory matching, order parsing, and inter-system data routing. Written with handover-grade documentation — every function has a docstring explaining not just what it does but why the logic is structured that way. Secured with HMAC-SHA256 request signatures so only authorized services can submit data.',
    features: [
      '1343-line processor.py: UPC-to-location matching, order validation, transfer routing logic',
      'HMAC-SHA256 request authentication — all submissions must be signed by authorized services',
      'Fernet symmetric encryption for sensitive payload fields in transit',
      'Duplicate detection with fingerprint hashing — same record submitted twice is silently dropped',
      'Memory-optimized Pandas batch processing for large inventory datasets',
      'APScheduler for automatic retry of failed records with exponential backoff',
      'Email alerts for processing anomalies, discrepancies, and system health',
      'Handover-grade documentation: every function documents intent, edge cases, and failure modes'
    ],
    technologies: {
      backend: ['Python', 'FastAPI', 'Pandas'],
      database: ['SQLAlchemy', 'MySQL'],
      security: ['HMAC-SHA256', 'Fernet Encryption'],
      automation: ['APScheduler', 'Email Alerts']
    },
    metrics: {
      coreFile: '1343-line processor.py',
      uptime: '99.9%',
      processing: 'Thousands of records daily with dedup',
      security: 'HMAC-signed requests only'
    },
    architecture: 'FastAPI async pipeline with signed-request auth, Fernet-encrypted payloads, Pandas batch processing, and APScheduler retry automation',
    liveUrl: null
  },
  {
    id: 8,
    title: 'APDQ Towing Management',
    category: 'fullstack',
    tags: ['FastAPI', 'Flutter', 'React', 'TypeScript', 'Firebase', 'Celery', 'Redis', 'i18n'],
    shortDescription: 'Three-Stack Towing Ecosystem: Flutter Mobile + FastAPI Backend + React Web Portal',
    icon: TOWImage,
    impact: 'Full digitization of a towing company\'s operations — three independent production stacks that communicate in real time',
    detailedDescription: 'Built three completely separate production applications for APDQ towing operations. Stack 1: Flutter mobile app with Firebase real-time DB for driver dispatch and GPS tracking. Stack 2: FastAPI backend with Celery task queue + Redis for async job processing and heavy operations. Stack 3: React + TypeScript web portal with full i18n (French/English) for admin management. All three talk to the same MySQL database but serve completely different users.',
    features: [
      'Flutter mobile: real-time dispatch, GPS tracking, Firebase push notifications, offline support',
      'FastAPI + Celery: async towing job processing, invoice generation, document handling',
      'Redis task broker: job queuing for heavy background operations (PDF gen, email dispatch)',
      'React admin portal: full French/English i18n with react-i18next, role-based access',
      'Dispatch workflow: job creation → driver assignment → GPS tracking → completion → billing',
      'Real-time GPS coordinates via Firebase Realtime Database (sub-second updates)',
      'Document management: tow reports, damage assessments, client invoices',
      'Multi-language support throughout all three stacks (FR/EN)'
    ],
    technologies: {
      mobile: ['Flutter', 'Dart', 'Firebase Realtime DB', 'FCM Push Notifications'],
      backend: ['FastAPI', 'Python', 'Celery', 'Redis'],
      web: ['React', 'TypeScript', 'Material-UI', 'react-i18next'],
      database: ['MySQL', 'Firebase'],
      cloud: ['AWS S3', 'Azure', 'Google Cloud']
    },
    metrics: {
      stacks: '3 independent production applications',
      platforms: 'Mobile (iOS/Android) + Web Portal + REST API',
      realtime: 'Sub-second GPS updates via Firebase',
      i18n: 'Full French/English across all stacks'
    },
    architecture: 'Three independent stacks sharing one MySQL database: Flutter+Firebase for mobile real-time, FastAPI+Celery+Redis for async backend processing, React+TS for web admin',
    liveUrl: null,
    problem: 'The towing company was coordinating everything by phone and paper forms. Dispatchers had no visibility on driver locations, clients had no tracking, and invoicing was done manually days after the tow. Three different user groups (dispatchers, drivers, admins) needed completely different tools.',
    lesson: 'Managing three production stacks simultaneously is a coordination challenge that the code doesn\'t prepare you for. Database schema changes ripple through all three. The real lesson was establishing a strict API contract early so each stack could evolve independently without breaking the others.'
  },
  {
    id: 9,
    title: 'Kubernetes Infrastructure',
    category: 'devops',
    tags: ['Kubernetes', 'Helm', 'ArgoCD', 'Docker', 'nginx', 'Prometheus'],
    shortDescription: 'GitOps Kubernetes Infrastructure — All 19 PA Super Services in Production',
    icon: '☸️',
    impact: 'Every PA Super service runs here — Helm-templated, ArgoCD-synced, self-healing on OVH infrastructure',
    detailedDescription: 'Built and operate the entire PA Super production Kubernetes cluster on OVH. Every service (FastAPI, Node.js, Flutter web, Angular SSR, AI voice/chat) has a Helm chart generated from a shared template system. ArgoCD watches the GitOps repo and auto-deploys on merge to main. Set up entirely from WSL2 on Windows — all tooling (kubectl, helm, argocd CLI) configured in WSL2 with kubeconfig mounted from Windows.',
    features: [
      'Helm chart generation: shared base chart + per-service values.yaml overlay pattern',
      'ArgoCD GitOps: merge to main branch → auto-deploy within 2 minutes, no manual kubectl apply',
      'NGINX Ingress with cert-manager: automated Let\'s Encrypt SSL for all services',
      'Prometheus monitoring: service-level metrics, custom alerts for latency and error rate spikes',
      'WSL2 setup: complete cluster management from Windows via WSL2 + kubectl + Helm toolchain',
      'Namespace isolation: separate namespaces for prod/staging environments',
      'Self-healing: K8s restarts crashed pods automatically; ArgoCD corrects manual drift',
      'Rolling deployments: zero-downtime updates with readiness/liveness probes'
    ],
    technologies: {
      orchestration: ['Kubernetes', 'Helm', 'ArgoCD'],
      infrastructure: ['Docker', 'OVH Cloud'],
      networking: ['NGINX Ingress', 'cert-manager', 'Let\'s Encrypt'],
      monitoring: ['Prometheus', 'Grafana'],
      tooling: ['kubectl', 'WSL2', 'Bash']
    },
    metrics: {
      services: '19 PA Super services deployed',
      deploymentTime: '< 2 min from merge to running pod',
      methodology: 'GitOps — ArgoCD auto-sync on main',
      uptime: 'Self-healing with K8s + ArgoCD drift correction'
    },
    architecture: 'OVH Kubernetes cluster with Helm-templated service definitions, ArgoCD GitOps sync, NGINX+cert-manager ingress, and Prometheus observability — managed entirely from WSL2 on Windows',
    liveUrl: null
  },
  {
    id: 10,
    title: 'SuperDispatch Dashboard',
    category: 'frontend',
    tags: ['React', 'TypeScript', 'Material-UI', 'Socket.IO', 'Redux', 'Recharts'],
    shortDescription: 'Real-time Logistics Operations Dashboard — React 18 + MUI 6',
    icon: '🎛️',
    impact: 'The daily command center for PA Super dispatchers — live driver map, order queue, and operational KPIs in one screen',
    detailedDescription: 'React 18 dashboard built with MUI 6 and Socket.IO for real-time logistics operations. Dispatchers see live driver positions on a Leaflet map, manage order queues, track cancellations, and monitor delivery SLAs. Multi-environment .env config (dev/staging/prod) with per-environment API URLs and feature flags. Redux manages complex cross-component state like the live order queue and filter state.',
    features: [
      'Live driver map: Leaflet with Socket.IO position updates every 5 seconds',
      'Order queue: real-time status updates, priority sorting, cancellation workflow',
      'Delivery performance analytics: on-time rate, average delivery time, cancellation rate',
      'Maintenance scheduling: vehicle service intervals and driver availability calendar',
      'Inventory management interface linked to warehouse operations',
      'Role-based access: dispatcher vs. manager vs. admin views',
      'Multi-environment .env config: dev/staging/prod URLs and feature flags without code changes',
      'Invoice and billing management with export to PDF'
    ],
    technologies: {
      frontend: ['React 18', 'TypeScript', 'MUI 6'],
      stateManagement: ['Redux Toolkit'],
      realtime: ['Socket.IO'],
      visualization: ['Recharts', 'Leaflet Maps'],
      http: ['Axios'],
      config: ['Multi-env .env (dev/staging/prod)']
    },
    metrics: {
      framework: 'React 18 + MUI 6',
      realtime: 'Driver positions updated every 5s via Socket.IO',
      environments: 'dev/staging/prod via .env config',
      access: 'Role-based: dispatcher / manager / admin'
    },
    architecture: 'React 18 SPA with Redux Toolkit state management, Socket.IO real-time layer, Recharts analytics, and multi-environment .env configuration',
    liveUrl: 'https://dispatch.pasuper.xyz'
  },
  {
    id: 11,
    title: 'SuperTelemetry',
    category: 'fullstack',
    tags: ['Node.js', 'Socket.IO', 'Redis', 'AngularJS', 'Leaflet'],
    shortDescription: 'Real-Time Fleet GPS Tracking — Redis Pub/Sub, Prometheus Metrics, Pino Logging',
    icon: '📡',
    impact: 'Live GPS position streaming for 50+ concurrent drivers with sub-second latency and full observability',
    detailedDescription: 'Node.js GPS telemetry platform that receives position data from mobile apps via Socket.IO and broadcasts to dispatcher dashboards in real time. Redis pub/sub allows multiple Node.js instances to share position state without drivers reconnecting. Prometheus metrics endpoint exposes request rates, active connections, and message throughput. Pino structured logging for production-grade observability. Graceful shutdown handles in-flight WebSocket connections without dropping GPS frames.',
    features: [
      'Socket.IO position ingestion from Flutter mobile apps → immediate Redis pub/sub fan-out',
      'Redis pub/sub multi-instance: horizontal scaling without sticky sessions',
      'Prometheus /metrics endpoint: active connections, messages/sec, Redis pub/sub lag',
      'Pino structured JSON logging: every GPS event logged with driver ID, lat/lng, timestamp',
      'Graceful shutdown: drains active WebSocket connections before process exit',
      'HUD-style AngularJS + Leaflet dashboard: animated driver markers, route trails',
      'Route data persistence: positions stored in MySQL for historical analytics',
      '50+ concurrent drivers tested — Redis handles fan-out without bottlenecks'
    ],
    technologies: {
      backend: ['Node.js', 'Express.js', 'Pino Logger'],
      realtime: ['Socket.IO'],
      cache: ['Redis Pub/Sub (multi-instance)'],
      monitoring: ['Prometheus', 'Custom /metrics endpoint'],
      frontend: ['AngularJS', 'Leaflet Maps']
    },
    metrics: {
      capacity: '50+ concurrent drivers',
      latency: 'Sub-second position broadcast via Redis pub/sub',
      observability: 'Prometheus metrics + Pino structured logs',
      reliability: 'Graceful shutdown for zero dropped connections'
    },
    architecture: 'Node.js Socket.IO server with Redis pub/sub for multi-instance fan-out, Prometheus observability, Pino structured logging, and AngularJS+Leaflet HUD frontend',
    liveUrl: null
  },
  {
    id: 12,
    title: 'SuperCron Automation',
    category: 'backend',
    tags: ['Python', 'FastAPI', 'APScheduler', 'Epicor', 'Email'],
    shortDescription: '7 Scheduled Jobs — FTP/SFTP File Handling, ESL Vendor API, Strapi Integration',
    icon: '⏰',
    impact: 'Eliminates 70% of manual daily tasks — label syncs, inventory reports, and ERP data pipelines run automatically',
    detailedDescription: 'FastAPI service with 7 APScheduler cron jobs handling the daily automation workload at PA Super. Jobs range from syncing electronic shelf labels (ESL) to FTP/SFTP file ingestion from vendors to Strapi CMS content updates. Each job has independent scheduling, logging, error recovery, and email alerting on failure.',
    features: [
      '7 APScheduler jobs: ESL sync, FTP/SFTP ingest, inventory reports, ERP sync, Strapi updates, email digests, anomaly scan',
      'ESL (Electronic Shelf Label) vendor API: pushes updated prices/descriptions to shelf displays automatically',
      'FTP/SFTP file handling: pulls vendor inventory files, parses CSV/Excel, routes to MySQL',
      'Strapi CMS integration: updates product content, promotions, and category data on schedule',
      'Epicor ERP sync: pulls order status, invoice data, and inventory levels into local DB',
      'Independent job isolation: one job failing does not block others',
      'Per-job error email with stack trace and last successful run timestamp',
      'Health endpoint showing next scheduled run time for each job'
    ],
    technologies: {
      backend: ['Python', 'FastAPI', 'APScheduler'],
      fileHandling: ['FTP', 'SFTP (paramiko)', 'CSV/Excel parsing'],
      integration: ['Epicor ERP', 'ESL Vendor API', 'Strapi CMS'],
      notifications: ['SMTP Email Alerts'],
      deployment: ['Docker', 'Kubernetes']
    },
    metrics: {
      jobs: '7 independent scheduled jobs',
      automation: '70% reduction in manual daily tasks',
      coverage: 'ESL + FTP/SFTP + ERP + Strapi + inventory reports',
      reliability: 'Per-job failure isolation and email alerting'
    },
    architecture: 'FastAPI service with APScheduler running 7 independent cron jobs — ESL vendor sync, FTP/SFTP file ingestion, ERP data pulls, and Strapi CMS updates with per-job failure isolation',
    liveUrl: null
  },
  {
    id: 13,
    title: 'SuperODBC Data Bridge',
    category: 'backend',
    tags: ['Python', 'ODBC', 'Pandas', 'Parquet', 'PM2', 'FastAPI', 'Epicor'],
    shortDescription: 'ODBC Bridge — Windows Epicor ERP to MySQL via Python, PM2-Managed with Scheduler',
    icon: '🔗',
    impact: 'Pulls live inventory and order data from Epicor ERP (Windows ODBC) into MySQL — feeds the parser, the storefront, and the AI agent',
    detailedDescription: 'Python service bridging a Windows ODBC data source (Epicor ERP / SQL Server) to the MySQL database stack. fetch.py extracts inventory and order data via pyodbc, processes into Parquet for efficient in-memory handling, then writes to MySQL. A separate PM2-managed scheduler.py handles timed fetch cycles. FastAPI provides a control API for on-demand triggers and health checks. Ecosystem.config.js defines dev (port 8011) and prod (port 8010) environments with separate database targets.',
    features: [
      'pyodbc: connects to Epicor ERP via Windows ODBC Driver (SQL Server)',
      'fetch.py + fetchFullInv.py: extracts inventory and order data in configurable chunks',
      'Parquet columnar storage in data/: efficient format for batch processing pipeline',
      'scheduler.py: independent PM2 process running automated timed fetch cycles',
      'FastAPI control API: trigger fetches on demand, health check, and status monitoring',
      'PM2 ecosystem.config.js: dev/prod process management with auto-restart on crash',
      'Batch recovery scripts: quick_restart.bat + emergency_recovery.bat for ops self-service',
      'Dual database target: superdb (prod) / superdb_dev (dev) with environment-aware config'
    ],
    technologies: {
      backend: ['Python', 'FastAPI', 'pyodbc'],
      dataProcessing: ['Pandas', 'Parquet (columnar storage)'],
      processManagement: ['PM2', 'ecosystem.config.js'],
      database: ['MySQL (superdb)', 'ODBC (Epicor / SQL Server)'],
      tooling: ['Windows Batch Scripts', 'Python venv']
    },
    metrics: {
      environments: 'Dev (port 8011) + Prod (port 8010)',
      dataFormat: 'Parquet columnar storage for batch efficiency',
      processManagement: 'PM2 auto-restart + batch recovery scripts',
      integration: 'Epicor ERP via Windows ODBC Driver'
    },
    architecture: 'PM2-managed dual-process Python service: fetch.py main loop + scheduler.py cron process, bridging Windows ODBC (Epicor) to MySQL via Pandas + Parquet, with FastAPI control API',
    liveUrl: null,
    problem: 'Epicor ERP stores live inventory and order data in a Windows SQL Server accessible only via ODBC driver. Every other PA Super service (storefront, parser, AI agent) needed that data in MySQL — there was no bridge, so downstream systems were running on stale data.',
    lesson: 'On Windows, PM2 + Python venv means your recovery story has to be bulletproof — when a PC restarts, nothing comes back automatically unless you\'ve tested the full restart sequence. The batch recovery scripts weren\'t nice-to-haves; ops staff needed to self-heal without dev involvement. Documentation as a deployment artifact.'
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
      frontend: ['Next.js 15.5', 'React 19.1', 'TypeScript'],
      styling: ['Tailwind CSS 4', 'shadcn/ui', 'Radix UI'],
      backend: ['Strapi 5.28', 'SQLite'],
      tools: ['TanStack React Table', 'Recharts', 'React Hook Form', 'Zod']
    },
    metrics: {
      stack: 'Next.js 15.5 + React 19.1 + Strapi 5.28',
      type: 'Personal Project',
      architecture: 'App Router with Server Components + Tailwind 4'
    },
    architecture: 'Next.js 15.5 App Router with React 19.1 Server Components, Strapi 5.28 headless CMS, and Tailwind CSS 4',
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
    problem: 'Angular 13 gets a bad reputation as "outdated" in 2024. This codebase proves otherwise — 188 components, SSR with hydration, 3-layer caching, and a vehicle fitment engine serving 5M+ parts. The challenge wasn\'t the framework version; it was managing that scale without performance regressions and without breaking the SSR/CSR boundary on every release.',
    lesson: 'Angular Universal SSR is unforgiving. Any browser-only API call (localStorage, window, document) in a component will crash the server render silently or throw on hydration. The discipline of writing isomorphic code — always guarding platform-specific calls — became second nature only after debugging a dozen SSR crashes in production. The 3-layer cache wasn\'t clever architecture, it was a survival mechanism: the PEDS API is slow, so we cache everything that doesn\'t need to be real-time.'
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
      'bee-queue job processing for async PDF invoice generation and bulk email dispatch',
      'PDF invoice generation with PDFKit — rendered server-side, stored on AWS S3',
      'CSV parsing for bulk product import: stream-based with error row reporting',
      'Moneris payment processing with receipt validation and refund support',
      'ShipStation XML integration for automated order fulfillment and shipping labels',
      'Dual MySQL databases (Strapi DB + superdb for full_orders)',
      'Full Elasticsearch re-index every 21 hours with zero-downtime alias swap'
    ],
    technologies: {
      backend: ['Strapi 4', 'Node.js 20', 'TypeScript', 'Koa'],
      database: ['MySQL (Dual DB)', 'Elasticsearch 8', 'Redis 7'],
      queue: ['bee-queue', 'Background Job Processing'],
      api: ['GraphQL', 'REST', 'Socket.IO'],
      integrations: ['Epicor ERP', 'PEDS API (Java Proxy)', 'Moneris', 'ShipStation', 'AWS SES'],
      documents: ['PDFKit', 'CSV Stream Parser'],
      cloud: ['AWS S3', 'Azure Translation'],
      deployment: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD']
    },
    metrics: {
      scale: '5M+ products (Strapi DB + Epicor PEDS)',
      contentTypes: '41 collections',
      caching: '25+ Redis cache patterns, request coalescing',
      search: '4 Elasticsearch indices, <50ms typeahead',
      reindex: 'Full re-index every 21 hours (zero-downtime)'
    },
    architecture: 'Strapi 4 CMS with Elasticsearch search engine (4 indices), Redis multi-layer caching, bee-queue async job processing for PDF/email, PEDS chunked parallel processing, dual MySQL databases, and Kubernetes deployment via ArgoCD',
    liveUrl: null,
    problem: 'An automotive distributor with 5M+ SKUs needs search that actually works — not SQL LIKE queries across millions of rows. Beyond search, the platform needed to handle async-heavy workflows (invoice generation, bulk email, PEDS data sync) without blocking the main request path and without choking on CSV imports of 50,000+ product rows.',
    lesson: 'Elasticsearch alias swapping for zero-downtime re-indexing sounds elegant in docs but took two failed attempts in production to get right. The key insight: always write to a new index with a timestamp suffix, verify the doc count matches, then atomically swap the alias. Never re-index in place. For bee-queue: separating job definition from job processing into distinct modules made the codebase much easier to reason about as the number of job types grew.'
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
