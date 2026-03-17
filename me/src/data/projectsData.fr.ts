import { Project } from '../types/project';
import TOWImage from '../assets/TOW.png';

export const projectsDataFr: Project[] = [
  {
    id: 1,
    title: 'Écosystème Super API',
    category: 'backend',
    tags: ['FastAPI', 'Python', 'MySQL', 'Redis', 'Docker', 'JWE', 'HERE Maps', 'WebSocket'],
    shortDescription: 'Plateforme de Gestion Logistique & Livraison de Niveau Entreprise',
    icon: '🚚',
    impact: 'Écosystème logistique complet desservant plusieurs unités commerciales',
    detailedDescription: 'Plateforme backend complète desservant tout l\'écosystème logistique PA Super avec architecture bi-base de données, microservices, communication en temps réel et sécurité d\'entreprise.',
    features: [
      'SuperDeliver: Optimisation d\'itinéraires, suivi GPS, confirmation de livraison avec photos/signatures',
      'SuperLocator: Gestion d\'inventaire d\'entrepôt, scan de codes-barres, optimisation des listes de prélèvement',
      'SuperTransfer: Automatisation des transferts inter-magasins avec routage intelligent',
      'SuperStatement: Facturation client automatisée avec intégration Office 365',
      'SuperDispatch: Tableau de bord opérationnel en temps réel avec suivi des chauffeurs',
      'Mises à jour WebSocket en temps réel réduisant la charge serveur de 90%',
      'Gestion du cycle de vie des commandes avec suivi complet',
      'Analytiques de livraison et métriques de performance'
    ],
    technologies: {
      backend: ['Python 3.12', 'FastAPI', 'SQLAlchemy 2.0', 'Async/Await'],
      'base de données': ['MySQL (Double Base)', 'Cache Redis'],
      sécurité: ['Chiffrement JWE', 'Signatures Ed25519', 'AES-GCM', 'Argon2'],
      intégrations: ['API HERE Maps', 'API Microsoft Graph', 'Azure AD', 'Office 365'],
      déploiement: ['Docker', 'Kubernetes', 'Microservices']
    },
    metrics: {
      échelle: '300 000+ lignes de code',
      performance: 'Réduction de 90% des appels API',
      architecture: 'Microservices bi-base de données'
    },
    architecture: 'Microservices avec service de géotraitement dédié et double base de données pour mise à l\'échelle',
    liveUrl: null
  },
  {
    id: 2,
    title: 'Plateforme Mobile SuperApp',
    category: 'mobile',
    tags: ['Flutter', 'Dart', 'HERE Maps', 'WebSocket', 'SQLite', 'Provider'],
    shortDescription: 'Plateforme Mobile Bi-Mode pour Livraison & Opérations d\'Entrepôt',
    icon: '📱',
    impact: 'Application mobile d\'entreprise multiplateforme pour opérations terrain',
    detailedDescription: 'Application Flutter prête pour production servant les chauffeurs-livreurs et travailleurs d\'entrepôt avec architecture bi-mode et intégration matérielle native.',
    features: [
      'Mode Chauffeur: Optimisation d\'itinéraires avec HERE Maps et suivi GPS en temps réel',
      'Preuve de livraison: Capture photo, signatures numériques, scan codes-barres',
      'Mode Entrepôt: Suivi d\'inventaire, gestion listes de prélèvement, traitement retours',
      'Synchronisation temps réel avec systèmes backend',
      'Gestion de commandes avec workflow d\'annulation',
      'Architecture offline-first pour opérations ininterrompues',
      'Retour audio et guidage texte-parole'
    ],
    technologies: {
      mobile: ['Flutter', 'Dart'],
      'gestion d\'état': ['Pattern Provider', 'Pattern BLoC'],
      matériel: ['Caméra', 'GPS', 'Scanner Codes-Barres', 'Audio'],
      'temps réel': ['Socket.IO', 'WebSocket'],
      stockage: ['SQLite', 'Stockage Sécurisé'],
      cartes: ['SDK HERE Maps']
    },
    metrics: {
      version: 'v4.2',
      plateformes: 'iOS, Android, Web, Desktop',
      architecture: 'Bi-mode avec support hors ligne'
    },
    architecture: 'Architecture bi-mode avec authentification basée sur les rôles et conception offline-first',
    liveUrl: null
  },
  {
    id: 3,
    title: 'Plateforme SuperBuyer',
    category: 'fullstack',
    tags: ['NestJS', 'Angular', 'TypeScript', 'MySQL', 'TypeORM', 'JWT', 'AWS S3'],
    shortDescription: 'Plateforme Full-Stack de Gestion Acheteurs & Approvisionnement Produits',
    icon: '🛒',
    impact: 'Opérations d\'achat rationalisées et workflow d\'approvisionnement produits',
    detailedDescription: 'Application TypeScript full-stack pour gestion avancée des acheteurs et approvisionnement produits avec architecture monorepo moderne.',
    features: [
      'Système de gestion des acheteurs pour opérations d\'approvisionnement produits',
      'Base de code unifiée pour backend et frontend',
      'Authentification sécurisée avec stockage de mots de passe chiffrés',
      'Stockage cloud de fichiers avec intégration AWS S3',
      'Import/export de données en masse avec support Excel et CSV',
      'Tâches planifiées automatisées pour traitement en arrière-plan',
      'Configuration de déploiement prête pour production'
    ],
    technologies: {
      backend: ['NestJS 11', 'TypeScript', 'TypeORM'],
      frontend: ['Angular 20', 'TypeScript'],
      'base de données': ['MySQL'],
      sécurité: ['JWT', 'Argon2'],
      cloud: ['AWS S3'],
      déploiement: ['PM2']
    },
    metrics: {
      version: 'v2.0',
      architecture: 'Monorepo',
      pile: 'TypeScript Complet'
    },
    architecture: 'Monorepo avec service adaptatif à l\'environnement pour développement et production fluides',
    liveUrl: null
  },
  {
    id: 4,
    title: 'Services d\'Intégration Epicor',
    category: 'backend',
    tags: ['Java', 'Spring Boot', 'Epicor SDK', 'PEDS API', 'Swagger', 'Docker'],
    shortDescription: 'Hub d\'Intégration ERP d\'Entreprise',
    icon: '🏢',
    impact: 'Intégration transparente avec systèmes Epicor AConneX et PEDS Cloud',
    detailedDescription: 'Application Spring Boot fournissant intégration complète avec SDK Epicor AConneX et API PEDS Cloud pour commandes de pièces, recherches véhicules et gestion inventaire.',
    features: [
      'Requêtes pièces, enquête stock et gestion commandes',
      'Recherches YMME véhicules et décodage VIN',
      'Recherche catalogue pièces et recherche d\'interchange',
      'Disponibilité temps réel aux emplacements partenaires',
      'Documentation API interactive avec Swagger UI',
      'Assistance acheteur pour informations compatibilité véhicule'
    ],
    technologies: {
      langage: ['Java'],
      framework: ['Spring Boot', 'Maven'],
      sécurité: ['Authentification Clé API', 'JWT'],
      intégration: ['SDK Epicor AConneX', 'API PEDS Cloud'],
      documentation: ['Swagger UI', 'OpenAPI 3.0'],
      déploiement: ['Docker']
    },
    metrics: {
      endpoints: '44 endpoints API',
      intégration: 'Double API (AConneX + PEDS)',
      documentation: 'Swagger UI Interactif'
    },
    architecture: 'Microservice Spring Boot avec intégration ERP complète',
    liveUrl: null
  },
  {
    id: 5,
    title: 'SuperVin Scanner',
    category: 'mobile',
    tags: ['Flutter', 'Dart', 'Google ML Kit', 'Barcode', 'OCR', 'BLoC'],
    shortDescription: 'Application d\'Identification Véhicule Alimentée par IA',
    icon: '🚗',
    impact: 'Scan VIN rapide et précis pour identification véhicule',
    detailedDescription: 'Application mobile Flutter pour identification véhicule utilisant apprentissage automatique pour scan codes-barres et reconnaissance texte OCR.',
    features: [
      'Scan code-barres VIN avec apprentissage automatique',
      'Reconnaissance texte OCR pour capture VIN manuelle',
      'Scan caméra temps réel',
      'Option sélection photo manuelle',
      'Stockage sécurisé des identifiants',
      'Support multiplateforme'
    ],
    technologies: {
      mobile: ['Flutter', 'Dart'],
      ia: ['Google ML Kit Barcode', 'Google ML Kit Reconnaissance Texte'],
      'gestion d\'état': ['Flutter BLoC'],
      matériel: ['Caméra', 'Sélecteur Image'],
      sécurité: ['Stockage Sécurisé']
    },
    metrics: {
      fonctionnalités: 'Scan Code-barres + OCR',
      plateformes: 'iOS, Android'
    },
    architecture: 'Pattern BLoC avec intégration Google ML Kit',
    liveUrl: null
  },
  {
    id: 6,
    title: 'PaSUPER IA — Voix & Chat',
    category: 'ai',
    tags: ['LangChain', 'OpenAI GPT-4o', 'FastAPI', 'Twilio', 'SSE Streaming', 'Gladia STT', 'AWS Polly', 'Kubernetes'],
    shortDescription: 'IA Omnicanale en Production — Appels Téléphoniques & Chat en Temps Réel pour un Distributeur de 40K Pièces Auto',
    icon: '🤖',
    impact: 'IA bi-mode gérant 24/7 les appels entrants et le chat web en 3 langues, avec recherche de pièces ERP en temps réel',
    detailedDescription: 'Système IA bi-mode en production propulsant PaSUPER — un distributeur canadien de pièces automobiles. Le même agent LangChain + GPT-4o gère deux canaux : les appels Twilio entrants avec traitement vocal temps réel, et un widget de chat intégré dans la boutique Angular. Les deux canaux partagent les mêmes outils, la même mémoire et les mêmes intégrations ERP.',
    features: [
      "IA Voix : Appels Twilio → filtrage bruit Silero VAD → transcription Gladia STT → agent LangChain → synthèse AWS Polly → diffusion vers l'appelant",
      'IA Chat : Widget Angular → streaming SSE de tokens (<200ms premier token) → agent LangChain partagé → réponse temps réel',
      'Agent LangChain partagé avec recherche de pièces véhicule (YMME) et création de commandes via ERP Epicor',
      "Identification de l'appelant via Strapi CMS — expérience personnalisée par client",
      'Interruption appel temps réel : Silero VAD détecte la parole en cours de réponse et arrête la lecture',
      'Transfert humain avec transcription complète sauvegardée sur S3',
      'Gestion de sessions chat : sessions en mémoire (TTL 1h), mémoire multi-tours, persistance localStorage',
      'Streaming SSE : tokens rendus caractère par caractère avec indicateur de frappe',
      'Sécurité : auth par clé API, limitation de débit par IP (30 msg/min), liste blanche CORS',
      '3 langues : Français, Anglais, Espagnol — menu DTMF sur voix, i18n sur chat',
      'Déployé sur Kubernetes via ArgoCD + Helm sur infrastructure OVH'
    ],
    technologies: {
      ia: ['LangChain 0.3', 'OpenAI GPT-4o-mini', 'Silero VAD 5.1'],
      reconnaissanceVocale: ['API Gladia (principal)', 'SDK Deepgram 3.10 (secours)'],
      synthèseVocale: ['AWS Polly (principal)', 'Azure Cognitive Services (secours)'],
      backend: ['Python 3.11', 'FastAPI 0.115', 'Uvicorn'],
      téléphonie: ['Twilio 9.4', 'Flux Média WebSocket'],
      intégrations: ['Strapi CMS', 'ERP Epicor (proxy Java)', 'AWS S3 / MinIO'],
      déploiement: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD']
    },
    metrics: {
      codebase: '40 fichiers Python, 4 353 lignes de code source',
      premierToken: '<200ms premier token chat via SSE',
      langues: '3 langues : FR / EN / ES',
      disponibilité: '24/7 — sans état, mise à l\'échelle horizontale sur K8s',
      canaux: 'Voix (Twilio) + Chat Web (SSE) sur un seul agent'
    },
    architecture: 'Application FastAPI unique avec deux pipelines (voix + chat) partageant un agent LangChain. Pipeline voix : WebSocket Twilio → Silero VAD → Gladia STT → agent → Polly TTS → Twilio. Pipeline chat : widget Angular → POST /chat/stream → flux SSE de tokens → agent.',
    liveUrl: null,
    featured: true,
    displayOrder: 0,
    problem: "L'entreprise perdait des clients après les heures de bureau — les appels restaient sans réponse, et la boutique web n'avait aucun moyen de répondre aux questions de compatibilité de pièces en temps réel.",
    lesson: "Le streaming SSE pour le chat a réduit la latence perçue de 3 secondes à moins de 200ms — non pas en rendant l'IA plus rapide, mais en changeant le moment où on commence à envoyer des octets."
  },
  {
    id: 7,
    title: 'API SuperParser',
    category: 'backend',
    tags: ['FastAPI', 'Pandas', 'SQLAlchemy', 'HMAC', 'Cryptography'],
    shortDescription: 'Moteur de Traitement de Données Critique',
    icon: '⚙️',
    impact: 'Traitement de données haute fiabilité avec disponibilité 99.9%',
    detailedDescription: 'Moteur de traitement de données intelligent avec algorithmes de correspondance avancés et gestion sécurisée des données pour traitement commandes et transferts.',
    features: [
      'Correspondance intelligente basée UPC pour inventaire',
      'Traitement automatisé de commandes et transferts',
      'Surveillance santé temps réel et alertes',
      'Détection doublons et récupération erreurs',
      'Traitement par lots optimisé mémoire',
      'Transmission de données chiffrée sécurisée'
    ],
    technologies: {
      backend: ['Python', 'FastAPI', 'Pandas'],
      'base de données': ['SQLAlchemy', 'MySQL'],
      sécurité: ['HMAC-SHA256', 'Chiffrement Fernet'],
      automatisation: ['APScheduler', 'Intégration Email']
    },
    metrics: {
      disponibilité: '99.9%',
      traitement: 'Des milliers d\'enregistrements quotidiens'
    },
    architecture: 'Pipeline de traitement asynchrone avec tâches d\'arrière-plan et gestion automatisée erreurs',
    liveUrl: null
  },
  {
    id: 8,
    title: 'Gestion Remorquage APDQ',
    category: 'fullstack',
    tags: ['FastAPI', 'Flutter', 'React', 'TypeScript', 'Firebase', 'MySQL'],
    shortDescription: 'Écosystème Complet de Gestion d\'Entreprise de Remorquage',
    icon: TOWImage,
    impact: 'Digitalisation complète des opérations de remorquage',
    detailedDescription: 'Plateforme full-stack de gestion de remorquage avec app mobile, portail web et API backend pour opérations commerciales complètes.',
    features: [
      'App mobile pour opérations chauffeurs et dispatch',
      'Portail web pour administration et gestion',
      'Suivi GPS temps réel et optimisation itinéraires',
      'Notifications push et alertes',
      'Support multilingue (Français/Anglais)',
      'Gestion documents et facturation'
    ],
    technologies: {
      mobile: ['Flutter', 'Firebase'],
      web: ['React', 'TypeScript', 'Material-UI'],
      backend: ['FastAPI', 'Python', 'Celery', 'Redis'],
      'base de données': ['MySQL', 'Firebase'],
      cloud: ['AWS', 'Azure', 'Google Cloud']
    },
    metrics: {
      plateformes: 'Mobile, Web, API',
      couverture: 'Workflow commercial complet'
    },
    architecture: 'Architecture trois tiers avec synchronisation multi-plateformes',
    liveUrl: null
  },
  {
    id: 9,
    title: 'Infrastructure Kubernetes',
    category: 'devops',
    tags: ['Kubernetes', 'Helm', 'ArgoCD', 'Docker', 'nginx', 'Prometheus'],
    shortDescription: 'Plateforme d\'Orchestration de Conteneurs d\'Entreprise',
    icon: '☸️',
    impact: 'Temps de déploiement réduit de 80% avec automatisation GitOps',
    detailedDescription: 'Infrastructure Kubernetes complète avec déploiement GitOps, gestion SSL automatisée et surveillance complète.',
    features: [
      'Gestion cluster Kubernetes',
      'Génération et gestion de charts Helm',
      'Déploiements GitOps avec ArgoCD',
      'Gestion automatisée de certificats SSL',
      'Surveillance avec Prometheus',
      'Équilibrage de charge avec NGINX Ingress'
    ],
    technologies: {
      orchestration: ['Kubernetes', 'Helm', 'ArgoCD'],
      infrastructure: ['Docker'],
      réseau: ['NGINX Ingress', 'cert-manager'],
      surveillance: ['Prometheus']
    },
    metrics: {
      amélioration: 'Déploiements 80% plus rapides',
      méthodologie: 'Workflow GitOps'
    },
    architecture: 'Infrastructure as Code avec déploiements automatisés et auto-réparation',
    liveUrl: null
  },
  {
    id: 10,
    title: 'Tableau de Bord SuperDispatch',
    category: 'frontend',
    tags: ['React', 'TypeScript', 'Material-UI', 'Socket.IO', 'Redux', 'Recharts'],
    shortDescription: 'Tableau de Bord Opérationnel Temps Réel',
    icon: '🎛️',
    impact: 'Gestion opérations centralisée avec analytiques en direct',
    detailedDescription: 'Tableau de bord React moderne pour opérations logistiques temps réel avec suivi direct, analytiques et outils de gestion.',
    features: [
      'Suivi chauffeurs temps réel avec cartes en direct',
      'Gestion commandes avec suivi annulations',
      'Tableau de bord planification maintenance',
      'Analytiques performance livraison',
      'Interface gestion inventaire',
      'Administration utilisateurs basée sur rôles',
      'Gestion factures et facturation'
    ],
    technologies: {
      frontend: ['React', 'TypeScript', 'Material-UI'],
      'gestion d\'état': ['Redux'],
      'temps réel': ['Socket.IO'],
      visualisation: ['Recharts'],
      http: ['Axios']
    },
    metrics: {
      fonctionnalités: 'Suivi Direct, Analytiques, Gestion'
    },
    architecture: 'Tableau de bord temps réel avec connexions WebSocket et accès basé sur rôles',
    liveUrl: 'https://dispatch.pasuper.xyz'
  },
  {
    id: 11,
    title: 'SuperTelemetry',
    category: 'fullstack',
    tags: ['Node.js', 'Socket.IO', 'Redis', 'AngularJS', 'Leaflet'],
    shortDescription: 'Plateforme de Suivi GPS & Analytiques de Flotte',
    icon: '📡',
    impact: 'Surveillance flotte temps réel et analytiques d\'itinéraires',
    detailedDescription: 'Plateforme de suivi GPS temps réel avec tableau de bord style HUD pour surveillance emplacements chauffeurs et analytiques d\'itinéraires.',
    features: [
      'Streaming GPS temps réel de la flotte',
      'Tableau de bord style HUD avec visualisation en direct',
      'Architecture WebSocket pour mises à jour instantanées',
      'Suivi concurrent haute capacité',
      'Stockage et récupération données d\'itinéraires',
      'Analytiques de performance'
    ],
    technologies: {
      backend: ['Node.js', 'Express.js'],
      'temps réel': ['Socket.IO'],
      cache: ['Redis'],
      frontend: ['AngularJS', 'Cartes Leaflet']
    },
    metrics: {
      capacité: '50+ chauffeurs simultanés'
    },
    architecture: 'Architecture événementielle avec mise en cache Redis et diffusion WebSocket',
    liveUrl: null
  },
  {
    id: 12,
    title: 'Automatisation SuperCron',
    category: 'backend',
    tags: ['Python', 'FastAPI', 'APScheduler', 'Epicor', 'Email'],
    shortDescription: 'Service de Planification de Tâches Automatisées',
    icon: '⏰',
    impact: 'Travail manuel réduit de 70% grâce à l\'automatisation',
    detailedDescription: 'Service de planification automatisée pour mises à jour étiquettes, rapports d\'inventaire et synchronisation ERP.',
    features: [
      'Synchronisation automatisée d\'étiquettes électroniques',
      'Génération rapports inventaire',
      'Synchronisation données ERP Epicor',
      'Détection anomalies et écarts',
      'Rapports email automatisés'
    ],
    technologies: {
      backend: ['Python', 'FastAPI', 'APScheduler'],
      intégration: ['ERP Epicor'],
      notifications: ['Intégration Email'],
      déploiement: ['Docker']
    },
    metrics: {
      impact: 'Réduction 70% tâches manuelles'
    },
    architecture: 'Automatisation basée Cron avec notifications email et intégration ERP',
    liveUrl: null
  },
  {
    id: 13,
    title: 'Pont de Données SuperODBC',
    category: 'backend',
    tags: ['Python', 'ODBC', 'Encryption', 'PM2', 'FastAPI'],
    shortDescription: 'Intégration de Données d\'Entreprise Sécurisée',
    icon: '🔗',
    impact: 'Extraction et traitement de données automatisés et sécurisés',
    detailedDescription: 'Pont de données sécurisé pour extraction et traitement de données depuis sources ODBC avec chiffrement et workflows automatisés.',
    features: [
      'Extraction automatisée de commandes depuis bases de données',
      'Transmission de données chiffrée sécurisée',
      'Détection et prévention de doublons',
      'API REST pour contrôle et surveillance',
      'Traitement continu avec PM2'
    ],
    technologies: {
      backend: ['Python', 'FastAPI', 'pyodbc'],
      sécurité: ['Chiffrement Données', 'Auth HMAC'],
      déploiement: ['PM2']
    },
    metrics: {
      sécurité: 'Chiffrement bout-en-bout'
    },
    architecture: 'Pont de données asynchrone avec chiffrement et prévention doublons',
    liveUrl: null
  },
  {
    id: 14,
    title: 'SuperInventaire',
    category: 'mobile',
    tags: ['Flutter', 'BLoC', 'Barcode', 'HTTP'],
    shortDescription: 'Gestion d\'Inventaire Mobile',
    icon: '📦',
    impact: 'Opérations d\'inventaire d\'entrepôt rationalisées',
    detailedDescription: 'Application mobile Flutter pour gestion d\'inventaire d\'entrepôt avec scan codes-barres.',
    features: [
      'Suivi et comptage d\'inventaire',
      'Scan codes-barres pour produits',
      'Synchronisation temps réel',
      'Authentification utilisateur',
      'Support multilingue'
    ],
    technologies: {
      mobile: ['Flutter', 'Dart'],
      'gestion d\'état': ['Flutter BLoC'],
      matériel: ['Scanner Codes-Barres']
    },
    metrics: {
      version: 'v3.0'
    },
    architecture: 'Architecture BLoC avec intégration codes-barres',
    liveUrl: null
  },
  {
    id: 15,
    title: 'SuperTransfer',
    category: 'mobile',
    tags: ['Flutter', 'BLoC', 'HTTP'],
    shortDescription: 'Gestion de Transferts entre Magasins',
    icon: '🔄',
    impact: 'Opérations de transfert inter-magasins automatisées',
    detailedDescription: 'Application Flutter pour gestion de transferts de produits entre emplacements de magasins.',
    features: [
      'Gestion transferts entre magasins',
      'Synchronisation temps réel',
      'Suivi de version',
      'Tests complets'
    ],
    technologies: {
      mobile: ['Flutter', 'Dart'],
      'gestion d\'état': ['Flutter BLoC']
    },
    metrics: {
      version: 'v3.0'
    },
    architecture: 'Architecture BLoC avec tests complets',
    liveUrl: null
  },
];
