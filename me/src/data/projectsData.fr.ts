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
    liveUrl: null,
    featured: true,
    problem: "L'entreprise gérait sa logistique entre plusieurs magasins avec des feuilles de calcul et des appels téléphoniques. Les chauffeurs n'avaient pas d'optimisation d'itinéraires et les répartiteurs n'avaient aucune visibilité.",
    lesson: "Construire un système de cette taille m'a appris que les décisions d'architecture prises la première semaine définissent votre vie pour les deux prochaines années."
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
    liveUrl: null,
    featured: true,
    problem: "Les chauffeurs et travailleurs d'entrepôt avaient besoin d'une seule app fonctionnant sur le terrain — avec une connectivité intermittente, des scanners de codes-barres et le GPS — sans perdre de données.",
    lesson: "L'offline-first n'est pas une réflexion après coup. J'ai reconstruit la couche de synchronisation trois fois avant de trouver la bonne approche."
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
    title: 'Assistant Téléphonique IA',
    category: 'ai',
    tags: ['OpenAI', 'Azure', 'Deepgram', 'Twilio', 'FastAPI'],
    shortDescription: 'Système IA Conversationnel Multilingue',
    icon: '🤖',
    impact: 'Support client automatisé intelligent 24/7',
    detailedDescription: 'Assistant téléphonique alimenté par IA avec traduction temps réel, reconnaissance vocale et traitement langage naturel pour support client automatisé.',
    features: [
      'Support multilingue avec traduction temps réel',
      'Reconnaissance vocale avancée avec plusieurs fournisseurs',
      'Compréhension langage naturel avec intégration GPT',
      'Synthèse vocale naturelle pour réponses',
      'Détection intelligente d\'activité vocale',
      'Pipeline de traitement audio dynamique'
    ],
    technologies: {
      ia: ['OpenAI GPT', 'Azure Cognitive Services', 'Deepgram', 'AWS Polly'],
      backend: ['Python', 'FastAPI'],
      téléphonie: ['API Twilio', 'WebRTC'],
      stockage: ['MinIO S3'],
      infrastructure: ['Docker']
    },
    metrics: {
      disponibilité: 'Opération 24/7',
      langues: 'Multilingue (FR/EN)'
    },
    architecture: 'Architecture multi-cloud avec pipeline de traitement asynchrone',
    liveUrl: null,
    featured: true,
    problem: "Les appels clients restaient sans réponse après les heures de bureau. L'entreprise avait besoin d'un support téléphonique 24/7 en français et en anglais sans embaucher une équipe de nuit.",
    lesson: "Intégrer plusieurs services IA dans un pipeline en temps réel m'a appris l'importance cruciale des budgets de latence. Chaque 100ms de délai rend la conversation artificielle."
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
    liveUrl: null,
    featured: true,
    problem: "Une entreprise de remorquage gérait ses répartitions par radio et formulaires papier. Ils avaient besoin d'un système numérique pour suivre les travaux, chauffeurs et factures en temps réel.",
    lesson: "C'était mon premier projet construisant un écosystème complet (mobile + web + API) à partir de zéro. Ça m'a appris à penser en systèmes plutôt qu'en fonctionnalités."
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
  {
    id: 16,
    title: 'Close to the Pin',
    category: 'fullstack',
    tags: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'JWT', 'BLoC'],
    shortDescription: 'Application Mobile de Compétition de Golf avec Backend',
    icon: '⛳',
    impact: 'Solution numérique pour gérer les compétitions de golf closest-to-the-pin',
    detailedDescription: 'Projet personnel full-stack avec application mobile Flutter et backend Node.js pour gérer les compétitions de golf "closest to the pin" avec authentification utilisateur et scoring.',
    features: [
      'Inscription et authentification sécurisée des utilisateurs',
      'Création et gestion de parties',
      'Scoring des joueurs et suivi du classement',
      'Gestion de session basée sur JWT',
      'Hachage sécurisé des mots de passe avec Argon2',
      'API RESTful avec surveillance de santé',
      'Validation des entrées et gestion des erreurs'
    ],
    technologies: {
      mobile: ['Flutter 3.4+', 'Dart'],
      'gestion d\'état': ['Flutter BLoC'],
      backend: ['Node.js', 'Express 5'],
      'base de données': ['MongoDB', 'Mongoose'],
      sécurité: ['JWT', 'Argon2', 'CORS'],
      stockage: ['Stockage Sécurisé', 'Préférences Partagées']
    },
    metrics: {
      pile: 'Flutter + Node.js + MongoDB',
      type: 'Projet Personnel',
      plateformes: 'iOS, Android'
    },
    architecture: 'Full-stack avec frontend Flutter BLoC et API RESTful Express avec persistance MongoDB',
    liveUrl: null
  },
  {
    id: 17,
    title: 'Plateforme de Gestion de Cours',
    category: 'fullstack',
    tags: ['Next.js', 'React', 'Strapi', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    shortDescription: 'Système Moderne de Gestion d\'Apprentissage Full-Stack',
    icon: '🎓',
    impact: 'Gestion complète de cours avec module de suivi d\'inventaire',
    detailedDescription: 'Système de gestion d\'apprentissage full-stack construit avec Next.js 15 et Strapi 5, avec patterns React modernes, composants serveur et module intégré de gestion d\'inventaire.',
    features: [
      'Gestion de contenu de cours avec Strapi CMS',
      'Interface moderne avec shadcn/ui et composants Radix',
      'Tableaux de données avec TanStack React Table',
      'Tableau de bord analytique avec visualisation Recharts',
      'Gestion de formulaires avec React Hook Form et validation Zod',
      'Module de gestion d\'inventaire (frontend + backend)',
      'Design responsive avec Tailwind CSS 4'
    ],
    technologies: {
      frontend: ['Next.js 15', 'React 19', 'TypeScript'],
      style: ['Tailwind CSS 4', 'shadcn/ui', 'Radix UI'],
      backend: ['Strapi 5', 'SQLite'],
      outils: ['TanStack React Table', 'Recharts', 'React Hook Form', 'Zod']
    },
    metrics: {
      pile: 'Next.js 15 + Strapi 5',
      type: 'Projet Personnel',
      architecture: 'App Router avec Composants Serveur'
    },
    architecture: 'Next.js App Router avec React Server Components et backend headless CMS Strapi',
    liveUrl: null
  },
  {
    id: 18,
    title: 'PaSUPER Frontend',
    category: 'frontend',
    tags: ['Angular', 'TypeScript', 'GraphQL', 'SSR', 'Redis', 'Moneris', 'YMME'],
    shortDescription: 'Plateforme E-Commerce Automobile B2C/B2B — 5M+ Produits',
    icon: '🛍️',
    impact: 'E-commerce d\'entreprise desservant 5M+ pièces automobiles avec cache 3 couches et chargements en moins d\'une seconde',
    detailedDescription: 'Plateforme e-commerce Angular 13 à grande échelle propulsant pasuper.com avec 188 composants, 55 services et 614 fichiers TypeScript. Cache 3 couches (mémoire frontend, cache Express SSR, Redis backend), compatibilité véhicule YMME avec décodage VIN, modes B2B/B2C doubles, paiements Moneris & PayPal, et Angular Universal SSR pour le SEO.',
    features: [
      'Compatibilité véhicule YMME (Année/Marque/Modèle/Moteur) avec décodage VIN et garage multi-véhicules',
      'Questions de qualification PEDS pour correspondance précise des pièces sur 5M+ produits',
      'Cache 3 couches : mémoire frontend, cache page Express SSR, Redis backend',
      'Mode B2B/B2C double avec inscription entreprise, export panier et bascule confidentialité',
      '3 méthodes de paiement : tokenisation hébergée Moneris, PayPal, facturation B2B',
      'Suivi de livraison en temps réel via Socket.IO avec mises à jour statut commande',
      'Angular Universal SSR avec balises méta dynamiques, Open Graph et génération sitemap',
      'i18n complet (Français/Anglais) avec ngx-translate sur 188 composants'
    ],
    technologies: {
      frontend: ['Angular 13', 'TypeScript', 'RxJS', 'NGRX'],
      style: ['Bootstrap 4.6', 'Angular Material', 'SCSS'],
      api: ['GraphQL', 'Apollo Angular', 'REST'],
      paiements: ['Tokenisation Hébergée Moneris', 'PayPal', 'Facturation B2B'],
      ssr: ['Angular Universal', 'Express SSR', 'Cache Page'],
      'temps réel': ['Socket.IO'],
      déploiement: ['Docker', 'Kubernetes', 'ArgoCD']
    },
    metrics: {
      échelle: '614 fichiers TypeScript, 188 composants, 55 services',
      produits: 'Catalogue 5M+ pièces automobiles',
      cache: 'Architecture cache 3 couches',
      paiements: 'Moneris + PayPal + facturation B2B'
    },
    architecture: 'Angular Universal SSR avec cache 3 couches, APIs GraphQL + REST, moteur de compatibilité véhicule YMME, et mode B2B/B2C double avec déploiement Kubernetes via ArgoCD',
    liveUrl: 'https://pasuper.com',
    featured: true,
    problem: "L'entreprise avait besoin d'une plateforme e-commerce moderne capable de gérer 5M+ de pièces automobiles, des recherches de compatibilité véhicule, et des clients B2B et B2C — avec des chargements rapides malgré le catalogue massif.",
    lesson: "La performance à grande échelle, c'est une question de stratégie de cache. Le cache à 3 couches a fait la différence entre des chargements de 5 secondes et de moins d'une seconde sur un catalogue de 5M de produits."
  },
  {
    id: 19,
    title: 'PaSUPER Backend E-Commerce',
    category: 'backend',
    tags: ['Strapi', 'Node.js', 'Elasticsearch', 'Redis', 'PEDS', 'Moneris', 'MySQL'],
    shortDescription: 'Backend d\'Entreprise Propulsant 5M+ Pièces Automobiles',
    icon: '🔧',
    impact: 'Backend haute performance desservant 5M+ produits avec 25+ patterns de cache Redis et coalescence de requêtes',
    detailedDescription: 'CMS headless Strapi 4 de niveau entreprise propulsant la plateforme e-commerce PaSUPER avec 41 types de contenu, Elasticsearch sur 4 indices avec réindexation complète toutes les 21 heures, 25+ patterns de clés de cache Redis (TTL de 2 min à 7 jours), intégration API PEDS traitant 500 pièces par lot en 4 flux parallèles, traitement des paiements Moneris, fulfillment ShipStation et double base de données MySQL.',
    features: [
      '41 types de contenu modélisant le domaine complet des pièces automobiles',
      'Elasticsearch 8 avec 4 indices, champs search_as_you_type et autocomplétion <50ms',
      '25+ patterns de clés de cache Redis avec TTL de 2 min à 7 jours et coalescence de requêtes',
      'Intégration API PEDS : méga-classe de 3037 lignes, requêtes par lots (500/lot, 4 parallèles)',
      'Cache 3 couches pièces véhicule : par page, résultats formatés, données PEDS brutes',
      'Pré-chargement en arrière-plan des questions de qualification PEDS au chargement de page',
      'Traitement paiements Moneris avec validation de reçus et support remboursement',
      'Intégration XML ShipStation pour fulfillment automatisé et étiquettes d\'expédition',
      'Double base de données MySQL (Strapi DB + superdb pour full_orders)',
      'Réindexation complète Elasticsearch toutes les 21 heures avec swap sans interruption'
    ],
    technologies: {
      backend: ['Strapi 4', 'Node.js 20', 'TypeScript', 'Koa'],
      'base de données': ['MySQL (Double DB)', 'Elasticsearch 8', 'Redis 7'],
      api: ['GraphQL', 'REST', 'Socket.IO'],
      intégrations: ['Epicor ERP', 'API PEDS (Proxy Java)', 'Moneris', 'ShipStation', 'AWS SES'],
      cloud: ['AWS S3', 'Azure Translation'],
      déploiement: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD']
    },
    metrics: {
      échelle: '5M+ produits (Strapi DB + Epicor PEDS)',
      typesContenu: '41 collections',
      cache: '25+ patterns de cache Redis, coalescence de requêtes',
      recherche: '4 indices Elasticsearch, autocomplétion <50ms',
      réindexation: 'Réindexation complète toutes les 21 heures'
    },
    architecture: 'CMS Strapi 4 avec moteur de recherche Elasticsearch (4 indices), cache multi-couches Redis avec coalescence de requêtes, traitement parallèle par lots PEDS, double base de données MySQL et déploiement Kubernetes via ArgoCD',
    liveUrl: null
  },
];
