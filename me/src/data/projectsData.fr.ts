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
    impact: 'Épine dorsale logistique complète — 300 000+ lignes servant chauffeurs, magasiniers, répartiteurs et gestionnaires en temps réel',
    detailedDescription: 'Backend central FastAPI 0.110 alimentant toutes les opérations logistiques PA Super. Architecture bi-base de données (MySQL pour la persistance, Redis pour le cache et l\'état temps réel), microservice de géotraitement dédié pour l\'optimisation d\'itinéraires HERE Maps, et couche WebSocket qui a réduit la charge de polling de 90%. Chaque autre système PA Super communique avec cette API.',
    features: [
      'SuperDeliver : Optimisation d\'itinéraires via HERE Maps, suivi GPS live, preuve de livraison (photo + signature)',
      'SuperLocator : Gestion inventaire entrepôt, scan codes-barres, optimisation listes de prélèvement',
      'SuperTransfer : Automatisation transferts inter-magasins avec routage intelligent et suivi cycle de vie',
      'SuperStatement : Facturation client automatisée intégrée Microsoft Graph / Office 365',
      'SuperDispatch : Tableau de bord de suivi chauffeurs en temps réel et centre de commande opérationnel',
      'Bus d\'événements WebSocket réduisant les appels API polling de 90% sur tous les clients',
      'Microservice géo dédié : routage HERE Maps isolé, géocodage en lot, calcul ETA',
      'Tokens chiffrés JWE + signatures Ed25519 pour l\'auth inter-services'
    ],
    technologies: {
      backend: ['Python 3.12', 'FastAPI 0.110', 'SQLAlchemy 2.0', 'Async/Await', 'Uvicorn'],
      database: ['MySQL (Double Base)', 'Redis (Cache + Pub/Sub)'],
      sécurité: ['Chiffrement JWE', 'Signatures Ed25519', 'AES-GCM', 'Argon2'],
      intégrations: ['API HERE Maps', 'API Microsoft Graph', 'Azure AD', 'Office 365'],
      déploiement: ['Docker', 'Kubernetes', 'Microservices', 'ArgoCD']
    },
    metrics: {
      codebase: '300 000+ lignes sur tous les services PA Super',
      performance: 'Réduction de 90% du polling API via WebSocket',
      architecture: 'Double base de données + microservice géo dédié',
      disponibilité: '24/7 production — mis à l\'échelle horizontalement sur K8s'
    },
    architecture: 'Monolithe FastAPI avec service sidecar géo dédié, double base de données MySQL+Redis, et couche pub/sub WebSocket pour l\'état temps réel de la flotte',
    liveUrl: null,
    problem: 'PA Super gérait ses opérations de livraison avec des messages WhatsApp et des tableaux Excel manuels. Les chauffeurs n\'avaient pas d\'optimisation d\'itinéraires, les répartiteurs n\'avaient aucune visibilité en temps réel, et la facturation se faisait à la main en fin de mois. Tout devait être construit de zéro.',
    lesson: 'Construire le microservice géo comme un processus séparé (pas juste un module) était le bon choix — le SDK HERE Maps a son propre profil mémoire et sa logique de retry qui auraient pollué le processus API principal. L\'isolation a facilité la mise à l\'échelle et le débogage indépendants. Le gain WebSocket de 90% est venu de l\'observation que 80% des requêtes étaient des polls "y a-t-il des mises à jour?" — les remplacer par des push events était le changement le plus efficace de la base de code.'
  },
  {
    id: 2,
    title: 'Plateforme Mobile SuperApp',
    category: 'mobile',
    tags: ['Flutter', 'Dart', 'HERE Maps', 'WebSocket', 'SQLite', 'BLoC'],
    shortDescription: 'Un Seul Code Flutter, Deux Modes : SuperDeliver (Chauffeur) + SuperPicker (Entrepôt)',
    icon: '📱',
    impact: 'Application Flutter unique utilisée quotidiennement par les chauffeurs et les magasiniers — deux flux UX complètement différents, une seule base de code',
    detailedDescription: 'Application Flutter v4.2 en production avec deux modes de fonctionnement distincts dans le même binaire. SuperDeliver sert les chauffeurs-livreurs avec optimisation d\'itinéraires, suivi GPS et preuve de livraison numérique. SuperPicker sert les magasiniers avec gestion d\'inventaire, scan de listes de prélèvement et traitement des retours. L\'auth basée sur les rôles détermine quel mode se charge à la connexion. Mode offline-first pour que les travailleurs terrain ne soient jamais bloqués par une connexion WiFi instable.',
    features: [
      'Mode SuperDeliver : optimisation d\'itinéraires HERE Maps, suivi GPS live, workflow livraison commandes',
      'Preuve de livraison : capture photo, signature numérique, confirmation codes-barres — tout en mode offline',
      'Mode SuperPicker : comptage inventaire cyclique, gestion listes de prélèvement, traitement retours',
      'Intégration Zebra DataWedge pour scanners entreprise en entrepôt',
      'Mode offline-first avec queue SQLite — synchronisation backend quand la connexion revient',
      'Mises à jour commandes temps réel via WebSocket (annulations, changements priorité)',
      'Retour audio texte-parole pour scan mains libres en entrepôt',
      'Config multi-environnements (dev/staging/prod) avec obligation de changer le mot de passe à la première connexion'
    ],
    technologies: {
      mobile: ['Flutter', 'Dart'],
      stateManagement: ['Pattern BLoC', 'Pattern Provider'],
      hardware: ['Caméra', 'GPS', 'Scanner Codes-Barres', 'Audio TTS', 'Zebra DataWedge'],
      realtime: ['Socket.IO', 'WebSocket'],
      storage: ['SQLite', 'Stockage Sécurisé', 'Shared Preferences'],
      cartes: ['SDK HERE Maps']
    },
    metrics: {
      version: 'v4.2',
      plateformes: 'iOS, Android, Web, Desktop',
      modes: 'SuperDeliver (chauffeur) + SuperPicker (entrepôt)',
      architecture: 'Base de code unique, bi-mode avec UX basée sur les rôles'
    },
    architecture: 'Binaire Flutter unique avec basculement de mode basé sur les rôles, queue SQLite offline-first, et gestion d\'état BLoC séparant la logique métier chauffeur/entrepôt',
    liveUrl: null,
    problem: 'Deux équipes différentes — les chauffeurs sur la route et les travailleurs en entrepôt — avaient besoin d\'outils mobiles sur mesure. Construire deux applications séparées aurait signifié maintenir deux bases de code, doublant la charge de publication et les bugs. Le défi était de concevoir une application unique qui se sente native à chaque rôle sans qu\'un utilisateur ne voie jamais les écrans de l\'autre.',
    lesson: 'La décision offline-first était la bonne, mais plus difficile que prévu. Concevoir la queue de synchronisation pour gérer les uploads partiels, la logique de retry et la résolution de conflits a demandé plus de réflexion que la fonctionnalité elle-même. La leçon : décider de ta stratégie offline dès le premier jour, pas quand les chauffeurs commencent à se plaindre de signatures perdues dans des zones sans signal.'
  },
  {
    id: 3,
    title: 'Plateforme SuperBuyer',
    category: 'fullstack',
    tags: ['NestJS', 'Angular', 'TypeScript', 'MySQL', 'TypeORM', 'JWT', 'AWS S3'],
    shortDescription: 'Plateforme Full-Stack de Gestion Acheteurs & Approvisionnement Produits',
    icon: '🛒',
    impact: 'Opérations d\'achat rationalisées et workflow d\'approvisionnement produits centralisé',
    detailedDescription: 'Application TypeScript full-stack pour gestion avancée des acheteurs et approvisionnement produits avec architecture monorepo moderne. NestJS 11 au backend, Angular 20 au frontend — même langage, entités partagées, zéro friction de type entre les couches.',
    features: [
      'Système de gestion des acheteurs pour opérations d\'approvisionnement produits',
      'Base de code unifiée pour backend et frontend dans un monorepo',
      'Authentification sécurisée avec stockage de mots de passe chiffrés Argon2',
      'Stockage fichiers cloud avec intégration AWS S3',
      'Import/export de données en masse avec support Excel et CSV',
      'Tâches planifiées automatisées pour traitement en arrière-plan',
      'Configuration de déploiement prête pour production avec PM2'
    ],
    technologies: {
      backend: ['NestJS 11', 'TypeScript', 'TypeORM'],
      frontend: ['Angular 20', 'TypeScript'],
      database: ['MySQL'],
      sécurité: ['JWT', 'Argon2'],
      cloud: ['AWS S3'],
      déploiement: ['PM2']
    },
    metrics: {
      version: 'v2.0',
      architecture: 'Monorepo (NestJS + Angular)',
      stack: 'Full TypeScript — NestJS 11 + Angular 20'
    },
    architecture: 'Monorepo avec backend NestJS 11 et frontend Angular 20, service adaptatif à l\'environnement pour basculement dev/prod fluide',
    liveUrl: null,
    problem: 'Les opérations d\'achat chez PA Super étaient suivies dans des tableurs. Les demandes d\'approvisionnement, les contacts fournisseurs et les décisions d\'achat n\'avaient pas de système centralisé. L\'équipe acheteurs avait besoin d\'un outil sur mesure, pas d\'un bricolage.',
    lesson: 'TypeORM dans un monorepo avec une couche d\'entités partagées est vraiment ergonomique — un changement à l\'entité Produit se propage correctement à la fois à l\'API et à la couche de service Angular type-safe. La gestion d\'état basée sur les signaux Angular 20 a remplacé beaucoup de boilerplate RxJS qui rendait l\'ancien code plus difficile à suivre.'
  },
  {
    id: 4,
    title: 'Services d\'Intégration Epicor',
    category: 'backend',
    tags: ['Java', 'Spring Boot', 'Epicor SDK', 'PEDS API', 'Swagger', 'Docker'],
    shortDescription: 'Hub d\'Intégration ERP Entreprise — 44 Endpoints Bridgeant Epicor AConneX + PEDS Cloud',
    icon: '🏢',
    impact: 'Service proxy Java appelé par chaque système PA Super qui a besoin de données pièces live, de prix ou de compatibilité véhicule',
    detailedDescription: 'Service proxy Spring Boot enveloppant deux API Epicor complètement différentes en une seule surface REST propre. SDK AConneX (14 endpoints) : commande pièces, enquête stock, gestion commandes, récupération factures. API PEDS Cloud (30 endpoints) : lookups YMME véhicule, décodage VIN, recherche catalogue pièces, interchange, questions de compatibilité. Utilisé par la boutique Angular, l\'agent IA et le backend FastAPI — tous appellent ce proxy Java plutôt que d\'intégrer directement les SDK Epicor.',
    features: [
      'AConneX (14 endpoints) : requêtes pièces, vérif stock, création commande, statut commande, récupération facture',
      'PEDS Cloud (30 endpoints) : lookup YMME véhicule, décodage VIN, recherche catalogue, interchange, questions compatibilité',
      'Couche d\'auth à clé API unique enveloppant les deux systèmes de credentials Epicor',
      'Swagger UI avec spec OpenAPI 3.0 complète — utilisée par chaque équipe intégrant l\'ERP',
      'Logging requêtes/réponses pour piste d\'audit ERP',
      'Déployé Docker, consommé par backend FastAPI, frontend Angular et agent IA comme service partagé'
    ],
    technologies: {
      langage: ['Java'],
      framework: ['Spring Boot', 'Maven'],
      sécurité: ['Authentification Clé API', 'JWT'],
      intégration: ['SDK Epicor AConneX (14 endpoints)', 'API PEDS Cloud (30 endpoints)'],
      documentation: ['Swagger UI', 'OpenAPI 3.0'],
      déploiement: ['Docker', 'Kubernetes']
    },
    metrics: {
      endpoints: '44 total (14 AConneX + 30 PEDS)',
      intégration: 'Double surface API Epicor unifiée',
      consommateurs: 'Backend FastAPI + boutique Angular + agent IA',
      documentation: 'Spec OpenAPI 3.0 complète'
    },
    architecture: 'Proxy Spring Boot unifiant le SDK AConneX Epicor et l\'API PEDS Cloud derrière une seule surface REST authentifiée, consommée par tous les autres services PA Super',
    liveUrl: null
  },
  {
    id: 5,
    title: 'SuperVin Scanner',
    category: 'mobile',
    tags: ['Flutter', 'Dart', 'Google ML Kit', 'Barcode', 'OCR', 'BLoC', 'OptiCAT', 'Strapi'],
    shortDescription: 'Scanner VIN & Gestionnaire Garage — ML Barcode + OCR + Lookup OptiCAT',
    icon: '🚗',
    impact: 'Remplace la saisie manuelle de VIN au comptoir PA Super — scanne n\'importe quel code-barres ou prend une photo, obtient les données véhicule complètes en secondes',
    detailedDescription: 'Application Flutter construite pour le comptoir de service PA Super qui combine le scan de codes-barres Google ML Kit et la reconnaissance OCR pour capturer les VIN, puis interroge l\'API OptiCAT pour les informations véhicule détaillées. Les utilisateurs authentifiés sauvegardent les véhicules dans un garage personnel pour les lookups répétés. Interface aux couleurs Super (bleu #003CA6, rouge #D20F14, polices HarvestItal + BigNoodleTitling). Config multi-environnements pour simulateurs, appareils physiques, staging et production.',
    features: [
      'Scan codes-barres Google ML Kit : lecture de codes-barres VIN par caméra en temps réel',
      'Reconnaissance OCR : photo d\'une plaque VIN quand aucun code-barres n\'est disponible',
      'Saisie VIN manuelle avec validation comme secours',
      'Intégration API OptiCAT : lookup complet des données véhicule par VIN décodé',
      'Gestion garage : sauvegarder les véhicules sur le compte pour les lookups répétés',
      'Authentification utilisateur via Strapi CMS (login + gestion de session)',
      'Config multi-environnements : simulateur dev, émulateur Android, appareil physique, staging, production',
      'Interface aux couleurs Super : palette bleu/rouge + polices HarvestItal + BigNoodleTitling'
    ],
    technologies: {
      mobile: ['Flutter', 'Dart'],
      ia: ['Google ML Kit Barcode Scanning', 'Google ML Kit Reconnaissance Texte (OCR)'],
      stateManagement: ['Flutter BLoC'],
      backend: ['Strapi CMS (auth + API garage)'],
      intégration: ['API OptiCAT Véhicule'],
      hardware: ['Caméra', 'Sélecteur Image'],
      sécurité: ['Stockage Sécurisé']
    },
    metrics: {
      modesScan: '3 modes : barcode ML, OCR, saisie manuelle',
      environnements: '5 environnements : sim dev, émulateur Android, physique, staging, prod',
      plateformes: 'iOS, Android'
    },
    architecture: 'App Flutter BLoC avec capture VIN tri-mode (barcode/OCR/manuel), API OptiCAT pour données véhicule, et gestion garage authentifiée Strapi',
    liveUrl: null,
    problem: 'Le personnel du comptoir saisissait manuellement les VIN depuis les plaques et les documents — lent et source d\'erreurs pour chaque interaction client. Un seul caractère mal lu signifie un mauvais lookup véhicule et une interaction gâchée.',
    lesson: 'Le scan barcode et l\'OCR Google ML Kit fonctionnent bien séparément mais nécessitent un séquençage BLoC soigné — un type d\'événement par mode de capture, tous convergeant vers la même action de lookup VIN. Le pattern de config multi-environnements (initialisation au démarrage de l\'app, aucun changement de code par environnement) est devenu un template réutilisé dans tous les projets Flutter suivants.'
  },
  {
    id: 6,
    title: 'PaSUPER IA — Voix & Chat',
    category: 'ai',
    tags: ['LangChain', 'OpenAI GPT-4o', 'FastAPI', 'Twilio', 'SSE Streaming', 'Gladia STT', 'AWS Polly', 'Kubernetes'],
    shortDescription: 'IA Omnicanale en Production — Appels Téléphoniques & Chat Temps Réel pour un Distributeur Auto de 40K Pièces',
    icon: '🤖',
    impact: 'IA bi-mode gérant les appels entrants 24/7 et le chat web en 3 langues, avec recherche de pièces ERP en temps réel',
    detailedDescription: 'Système IA bi-mode en production propulsant PaSUPER — un distributeur canadien de pièces automobiles. Le même agent LangChain + GPT-4o gère deux canaux : les appels Twilio entrants avec traitement vocal temps réel, et un widget de chat intégrable dans la boutique Angular. Les deux canaux partagent les mêmes outils, la même mémoire et les mêmes intégrations ERP — offrant une expérience omnicanale fluide entre téléphone et web.',
    features: [
      'IA Voix : Appels Twilio → filtrage bruit Silero VAD → transcription Gladia STT → agent LangChain → synthèse AWS Polly → diffusion vers l\'appelant',
      'IA Chat : Widget Angular → streaming SSE tokens (<200ms premier token) → agent LangChain partagé → réponse temps réel',
      'Agent LangChain partagé avec lookup pièces véhicule (YMME) et création commandes via ERP Epicor',
      'Identification de l\'appelant via Strapi CMS — expérience personnalisée par client',
      'Interruption appel temps réel : Silero VAD détecte l\'utilisateur qui parle en cours de réponse',
      'Transfert humain avec transcription complète sauvegardée sur S3',
      'Gestion sessions chat : sessions en mémoire (TTL 1h), mémoire multi-tours, persistance localStorage',
      'Streaming SSE : tokens rendus caractère par caractère avec indicateur de frappe',
      'Sécurité : auth par clé API, limitation débit par IP (30 msg/min), liste blanche CORS',
      '3 langues : Français, Anglais, Espagnol — menu DTMF sur voix, i18n sur chat',
      'Déployé Kubernetes via ArgoCD + Helm sur infrastructure OVH'
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
    architecture: 'Application FastAPI unique avec deux pipelines (voix + chat) partageant un agent LangChain. Pipeline voix : WebSocket Twilio → Silero VAD → Gladia STT → agent → Polly TTS → Twilio. Pipeline chat : widget Angular → POST /chat/stream → flux SSE tokens → agent. Les deux pipelines appellent les mêmes outils ERP Epicor pour les données pièces live.',
    liveUrl: null,
    featured: true,
    displayOrder: 0,
    problem: 'L\'entreprise perdait des clients après les heures de bureau — les appels restaient sans réponse, et la boutique web n\'avait aucun moyen de répondre aux questions de compatibilité de pièces en temps réel. Il fallait un seul système intelligent capable de gérer un appel téléphonique et un message de chat, en français ou anglais, et de réellement rechercher des données pièces réelles — pas juste donner des réponses génériques.',
    lesson: 'Construire deux pipelines IA temps réel partageant le même agent m\'a appris à quel point les décisions d\'architecture se propagent. Le streaming SSE pour le chat a réduit la latence perçue de 3 secondes à moins de 200ms — non pas en rendant l\'IA plus rapide, mais en changeant le moment où on commence à envoyer des octets. Sur voix, chaque 100ms de latence de pipeline rend la conversation robotique. Profiler chaque étape (VAD → STT → LLM → TTS) était la seule façon de trouver où le temps se perdait vraiment.'
  },
  {
    id: 7,
    title: 'API SuperParser',
    category: 'backend',
    tags: ['FastAPI', 'Pandas', 'SQLAlchemy', 'HMAC', 'Cryptography'],
    shortDescription: 'Moteur de Traitement de Données Critique — Core de 1343 Lignes, Docs Niveau Passation',
    icon: '⚙️',
    impact: 'Parse, valide et route des milliers d\'enregistrements de commandes/transferts quotidiennement avec auth HMAC et détection de doublons',
    detailedDescription: 'Service FastAPI avec un processeur central de 1343 lignes (processor.py) qui gère la correspondance d\'inventaire basée UPC, le parsing de commandes et le routage de données inter-systèmes. Écrit avec une documentation niveau passation — chaque fonction a une docstring expliquant non seulement ce qu\'elle fait mais pourquoi la logique est structurée ainsi. Sécurisé avec des signatures de requête HMAC-SHA256 pour que seuls les services autorisés puissent soumettre des données.',
    features: [
      'processor.py de 1343 lignes : correspondance UPC-vers-emplacement, validation commandes, logique de routage transferts',
      'Auth HMAC-SHA256 — toutes les soumissions doivent être signées par des services autorisés',
      'Chiffrement symétrique Fernet pour les champs payload sensibles en transit',
      'Détection de doublons par hachage d\'empreinte — même enregistrement soumis deux fois est silencieusement ignoré',
      'Traitement en lots Pandas optimisé mémoire pour grands datasets d\'inventaire',
      'APScheduler pour retry automatique des enregistrements échoués avec backoff exponentiel',
      'Alertes email pour anomalies de traitement, écarts et santé système',
      'Documentation niveau passation : chaque fonction documente intention, cas limites et modes de défaillance'
    ],
    technologies: {
      backend: ['Python', 'FastAPI', 'Pandas'],
      database: ['SQLAlchemy', 'MySQL'],
      sécurité: ['HMAC-SHA256', 'Chiffrement Fernet'],
      automatisation: ['APScheduler', 'Alertes Email']
    },
    metrics: {
      fichierCore: 'processor.py de 1343 lignes',
      disponibilité: '99.9%',
      traitement: 'Des milliers d\'enregistrements quotidiens avec dédup',
      sécurité: 'Requêtes signées HMAC uniquement'
    },
    architecture: 'Pipeline async FastAPI avec auth par requête signée, payloads Fernet chiffrés, traitement en lots Pandas, et automatisation retry APScheduler',
    liveUrl: null
  },
  {
    id: 8,
    title: 'Gestion Remorquage APDQ',
    category: 'fullstack',
    tags: ['FastAPI', 'Flutter', 'React', 'TypeScript', 'Firebase', 'Celery', 'Redis', 'i18n'],
    shortDescription: 'Écosystème Remorquage Trois Stacks : Flutter Mobile + Backend FastAPI + Portail React',
    icon: TOWImage,
    impact: 'Digitalisation complète des opérations d\'une entreprise de remorquage — trois stacks de production indépendants qui communiquent en temps réel',
    detailedDescription: 'Trois applications de production complètement séparées construites pour les opérations APDQ. Stack 1 : app mobile Flutter avec Firebase Realtime DB pour dispatch chauffeur et suivi GPS. Stack 2 : backend FastAPI avec queue de tâches Celery + Redis pour traitement asynchrone. Stack 3 : portail web React + TypeScript avec i18n complet (français/anglais) pour gestion admin. Les trois parlent à la même base MySQL mais servent des utilisateurs complètement différents.',
    features: [
      'Flutter mobile : dispatch temps réel, suivi GPS, notifications push Firebase, support hors ligne',
      'FastAPI + Celery : traitement asynchrone des missions de remorquage, génération factures, gestion documents',
      'Broker de tâches Redis : file d\'attente pour opérations lourdes (génération PDF, envoi email)',
      'Portail admin React : i18n français/anglais complet avec react-i18next, accès basé sur les rôles',
      'Workflow dispatch : création mission → affectation chauffeur → suivi GPS → complétion → facturation',
      'Coordonnées GPS temps réel via Firebase Realtime Database (mises à jour sub-seconde)',
      'Gestion documents : rapports de remorquage, évaluations dommages, factures clients',
      'Support multilingue sur les trois stacks (FR/EN)'
    ],
    technologies: {
      mobile: ['Flutter', 'Dart', 'Firebase Realtime DB', 'FCM Notifications Push'],
      backend: ['FastAPI', 'Python', 'Celery', 'Redis'],
      web: ['React', 'TypeScript', 'Material-UI', 'react-i18next'],
      database: ['MySQL', 'Firebase'],
      cloud: ['AWS S3', 'Azure', 'Google Cloud']
    },
    metrics: {
      stacks: '3 applications de production indépendantes',
      plateformes: 'Mobile (iOS/Android) + Portail Web + API REST',
      realtime: 'Mises à jour GPS sub-secondes via Firebase',
      i18n: 'Français/Anglais complet sur tous les stacks'
    },
    architecture: 'Trois stacks indépendants partageant une base MySQL : Flutter+Firebase pour le mobile temps réel, FastAPI+Celery+Redis pour le backend async, React+TS pour l\'admin web',
    liveUrl: null,
    problem: 'L\'entreprise de remorquage coordonnait tout par téléphone et formulaires papier. Les répartiteurs n\'avaient aucune visibilité sur les positions des chauffeurs, les clients n\'avaient pas de suivi, et la facturation était faite manuellement des jours après le remorquage.',
    lesson: 'Gérer trois stacks de production simultanément est un défi de coordination que le code ne prépare pas. Les changements de schéma de base de données se propagent dans les trois. La vraie leçon était d\'établir un contrat API strict tôt pour que chaque stack puisse évoluer indépendamment sans casser les autres.'
  },
  {
    id: 9,
    title: 'Infrastructure Kubernetes',
    category: 'devops',
    tags: ['Kubernetes', 'Helm', 'ArgoCD', 'Docker', 'nginx', 'Prometheus'],
    shortDescription: 'Infrastructure Kubernetes GitOps — 19 Services PA Super en Production',
    icon: '☸️',
    impact: 'Chaque service PA Super tourne ici — templaté Helm, synchronisé ArgoCD, auto-réparant sur infrastructure OVH',
    detailedDescription: 'Construction et opération du cluster Kubernetes de production PA Super sur OVH. Chaque service (FastAPI, Node.js, Flutter web, Angular SSR, IA voix/chat) a un chart Helm généré depuis un système de templates partagé. ArgoCD surveille le dépôt GitOps et déploie automatiquement à chaque merge sur main. Configuré entièrement depuis WSL2 sur Windows — tous les outils (kubectl, helm, argocd CLI) configurés dans WSL2 avec kubeconfig monté depuis Windows.',
    features: [
      'Génération de charts Helm : base partagée + pattern overlay values.yaml par service',
      'GitOps ArgoCD : merge sur main → déploiement auto en 2 minutes, sans kubectl apply manuel',
      'NGINX Ingress avec cert-manager : SSL Let\'s Encrypt automatisé pour tous les services',
      'Monitoring Prometheus : métriques niveau service, alertes personnalisées pour pics latence/erreur',
      'Setup WSL2 : gestion cluster complète depuis Windows via WSL2 + kubectl + toolchain Helm',
      'Isolation namespace : namespaces séparés pour environnements prod/staging',
      'Auto-réparation : K8s redémarre les pods crashés automatiquement ; ArgoCD corrige la dérive manuelle',
      'Déploiements rolling : mises à jour zero-downtime avec sondes readiness/liveness'
    ],
    technologies: {
      orchestration: ['Kubernetes', 'Helm', 'ArgoCD'],
      infrastructure: ['Docker', 'OVH Cloud'],
      réseau: ['NGINX Ingress', 'cert-manager', 'Let\'s Encrypt'],
      monitoring: ['Prometheus', 'Grafana'],
      tooling: ['kubectl', 'WSL2', 'Bash']
    },
    metrics: {
      services: '19 services PA Super déployés',
      tempsDeploiement: '< 2 min du merge au pod en cours',
      méthodologie: 'GitOps — auto-sync ArgoCD sur main',
      disponibilité: 'Auto-réparant avec correction dérive K8s + ArgoCD'
    },
    architecture: 'Cluster Kubernetes OVH avec définitions de services templatées Helm, sync GitOps ArgoCD, ingress NGINX+cert-manager, et observabilité Prometheus — géré entièrement depuis WSL2 sur Windows',
    liveUrl: null
  },
  {
    id: 10,
    title: 'Tableau de Bord SuperDispatch',
    category: 'frontend',
    tags: ['React', 'TypeScript', 'Material-UI', 'Socket.IO', 'Redux', 'Recharts'],
    shortDescription: 'Tableau de Bord Opérations Logistiques Temps Réel — React 18 + MUI 6',
    icon: '🎛️',
    impact: 'Le centre de commande quotidien des répartiteurs PA Super — carte chauffeurs live, file de commandes et KPIs opérationnels sur un seul écran',
    detailedDescription: 'Tableau de bord React 18 construit avec MUI 6 et Socket.IO pour les opérations logistiques temps réel. Les répartiteurs voient les positions live des chauffeurs sur une carte Leaflet, gèrent les files de commandes, suivent les annulations et surveillent les SLAs de livraison. Config .env multi-environnements (dev/staging/prod) avec URLs API et feature flags par environnement. Redux gère l\'état complexe entre composants comme la file de commandes live et l\'état des filtres.',
    features: [
      'Carte chauffeurs live : Leaflet avec mises à jour de position Socket.IO toutes les 5 secondes',
      'File de commandes : mises à jour statut temps réel, tri par priorité, workflow d\'annulation',
      'Analytiques performance livraison : taux dans les délais, temps livraison moyen, taux d\'annulation',
      'Planification maintenance : intervalles service véhicules et calendrier disponibilité chauffeurs',
      'Interface gestion inventaire liée aux opérations entrepôt',
      'Accès basé sur les rôles : vues répartiteur vs. gestionnaire vs. admin',
      'Config .env multi-environnements : URLs dev/staging/prod et feature flags sans changement de code',
      'Gestion factures et facturation avec export PDF'
    ],
    technologies: {
      frontend: ['React 18', 'TypeScript', 'MUI 6'],
      stateManagement: ['Redux Toolkit'],
      realtime: ['Socket.IO'],
      visualisation: ['Recharts', 'Cartes Leaflet'],
      http: ['Axios'],
      config: ['.env multi-env (dev/staging/prod)']
    },
    metrics: {
      framework: 'React 18 + MUI 6',
      realtime: 'Positions chauffeurs mises à jour toutes les 5s via Socket.IO',
      environnements: 'dev/staging/prod via config .env',
      accès: 'Basé sur les rôles : répartiteur / gestionnaire / admin'
    },
    architecture: 'SPA React 18 avec gestion d\'état Redux Toolkit, couche temps réel Socket.IO, analytiques Recharts, et configuration .env multi-environnements',
    liveUrl: 'https://dispatch.pasuper.xyz'
  },
  {
    id: 11,
    title: 'SuperTelemetry',
    category: 'fullstack',
    tags: ['Node.js', 'Socket.IO', 'Redis', 'AngularJS', 'Leaflet'],
    shortDescription: 'Suivi GPS Flotte Temps Réel — Redis Pub/Sub, Métriques Prometheus, Logs Pino',
    icon: '📡',
    impact: 'Streaming de position GPS live pour 50+ chauffeurs simultanés avec latence sub-seconde et observabilité complète',
    detailedDescription: 'Plateforme de télémétrie GPS Node.js qui reçoit les données de position des apps mobiles via Socket.IO et les diffuse aux tableaux de bord des répartiteurs en temps réel. Le pub/sub Redis permet à plusieurs instances Node.js de partager l\'état de position sans reconnexion des chauffeurs. Endpoint métriques Prometheus exposant les taux de requêtes, connexions actives et débit de messages. Logs structurés Pino pour observabilité production. Shutdown gracieux gère les connexions WebSocket en vol sans perte de trames GPS.',
    features: [
      'Ingestion de position Socket.IO depuis apps Flutter → fan-out immédiat Redis pub/sub',
      'Redis pub/sub multi-instance : mise à l\'échelle horizontale sans sessions sticky',
      'Endpoint Prometheus /metrics : connexions actives, messages/sec, lag pub/sub Redis',
      'Logs JSON structurés Pino : chaque événement GPS loggé avec ID chauffeur, lat/lng, timestamp',
      'Shutdown gracieux : vide les connexions WebSocket actives avant exit du processus',
      'Tableau de bord style HUD AngularJS + Leaflet : marqueurs chauffeurs animés, traces d\'itinéraires',
      'Persistance données de route : positions stockées en MySQL pour analytiques historiques',
      '50+ chauffeurs simultanés testés — Redis gère le fan-out sans goulots d\'étranglement'
    ],
    technologies: {
      backend: ['Node.js', 'Express.js', 'Pino Logger'],
      realtime: ['Socket.IO'],
      cache: ['Redis Pub/Sub (multi-instance)'],
      monitoring: ['Prometheus', 'Endpoint /metrics personnalisé'],
      frontend: ['AngularJS', 'Cartes Leaflet']
    },
    metrics: {
      capacité: '50+ chauffeurs simultanés',
      latence: 'Diffusion position sub-seconde via Redis pub/sub',
      observabilité: 'Métriques Prometheus + logs structurés Pino',
      fiabilité: 'Shutdown gracieux pour zéro connexion perdue'
    },
    architecture: 'Serveur Socket.IO Node.js avec Redis pub/sub pour fan-out multi-instance, observabilité Prometheus, logs structurés Pino, et frontend HUD AngularJS+Leaflet',
    liveUrl: null
  },
  {
    id: 12,
    title: 'Automatisation SuperCron',
    category: 'backend',
    tags: ['Python', 'FastAPI', 'APScheduler', 'Epicor', 'Email'],
    shortDescription: '7 Jobs Planifiés — FTP/SFTP, API Fournisseur ESL, Intégration Strapi',
    icon: '⏰',
    impact: 'Élimine 70% des tâches manuelles quotidiennes — syncs étiquettes, rapports inventaire et pipelines données ERP tournent automatiquement',
    detailedDescription: 'Service FastAPI avec 7 jobs APScheduler gérant la charge d\'automatisation quotidienne chez PA Super. Les jobs vont de la synchronisation d\'étiquettes électroniques (ESL) à l\'ingestion de fichiers FTP/SFTP depuis les fournisseurs aux mises à jour de contenu Strapi CMS. Chaque job a sa propre planification, son logging, sa récupération d\'erreur et ses alertes email en cas d\'échec.',
    features: [
      '7 jobs APScheduler : sync ESL, ingestion FTP/SFTP, rapports inventaire, sync ERP, mises à jour Strapi, digests email, scan anomalies',
      'API fournisseur ESL (Étiquettes Électroniques) : pousse les prix/descriptions mis à jour vers les afficheurs rayon automatiquement',
      'Gestion fichiers FTP/SFTP : télécharge fichiers inventaire fournisseur, parse CSV/Excel, route vers MySQL',
      'Intégration Strapi CMS : met à jour contenu produits, promotions et données catégories sur planning',
      'Sync ERP Epicor : tire statut commandes, données factures et niveaux inventaire vers DB locale',
      'Isolation jobs indépendants : l\'échec d\'un job ne bloque pas les autres',
      'Email erreur par job avec stack trace et timestamp du dernier succès',
      'Endpoint santé montrant la prochaine heure planifiée pour chaque job'
    ],
    technologies: {
      backend: ['Python', 'FastAPI', 'APScheduler'],
      fichiers: ['FTP', 'SFTP (paramiko)', 'Parsing CSV/Excel'],
      intégration: ['ERP Epicor', 'API Fournisseur ESL', 'Strapi CMS'],
      notifications: ['Alertes Email SMTP'],
      déploiement: ['Docker', 'Kubernetes']
    },
    metrics: {
      jobs: '7 jobs planifiés indépendants',
      automatisation: 'Réduction de 70% des tâches manuelles quotidiennes',
      couverture: 'ESL + FTP/SFTP + ERP + Strapi + rapports inventaire',
      fiabilité: 'Isolation des défaillances par job et alertes email'
    },
    architecture: 'Service FastAPI avec APScheduler faisant tourner 7 jobs cron indépendants — sync fournisseur ESL, ingestion fichiers FTP/SFTP, tirages données ERP, et mises à jour Strapi CMS avec isolation des défaillances par job',
    liveUrl: null
  },
  {
    id: 13,
    title: 'Pont de Données SuperODBC',
    category: 'backend',
    tags: ['Python', 'ODBC', 'Pandas', 'Parquet', 'PM2', 'FastAPI', 'Epicor'],
    shortDescription: 'Bridge ODBC — ERP Epicor Windows vers MySQL via Python, Géré PM2 avec Scheduler',
    icon: '🔗',
    impact: 'Tire les données d\'inventaire et de commandes live depuis l\'ERP Epicor (ODBC Windows) vers MySQL — alimente le parser, la boutique et l\'agent IA',
    detailedDescription: 'Service Python faisant le pont entre une source de données ODBC Windows (ERP Epicor / SQL Server) et la stack MySQL. fetch.py extrait les données d\'inventaire et de commandes via pyodbc, les traite en Parquet pour une gestion efficace en mémoire, puis écrit en MySQL. Un scheduler.py géré par PM2 de façon indépendante gère les cycles de récupération planifiés. FastAPI fournit une API de contrôle pour les déclenchements à la demande et les vérifications de santé. Ecosystem.config.js définit les environnements dev (port 8011) et prod (port 8010).',
    features: [
      'pyodbc : connexion à l\'ERP Epicor via Windows ODBC Driver (SQL Server)',
      'fetch.py + fetchFullInv.py : extraction données inventaire et commandes en chunks configurables',
      'Stockage Parquet en colonnes dans data/ : format efficace pour le pipeline de traitement en lots',
      'scheduler.py : processus PM2 indépendant faisant tourner les cycles de récupération planifiés',
      'API de contrôle FastAPI : déclencher des récupérations à la demande, healthcheck, endpoint statut',
      'PM2 ecosystem.config.js : gestion processus dev/prod avec redémarrage auto en cas de crash',
      'Scripts de récupération batch : quick_restart.bat + emergency_recovery.bat pour auto-service ops',
      'Double cible DB : superdb (prod) / superdb_dev (dev) avec config adaptée à l\'environnement'
    ],
    technologies: {
      backend: ['Python', 'FastAPI', 'pyodbc'],
      traitement: ['Pandas', 'Parquet (stockage en colonnes)'],
      processManagement: ['PM2', 'ecosystem.config.js'],
      database: ['MySQL (superdb)', 'ODBC (Epicor / SQL Server)'],
      outillage: ['Scripts Batch Windows', 'Python venv']
    },
    metrics: {
      environnements: 'Dev (port 8011) + Prod (port 8010)',
      formatDonnées: 'Stockage Parquet en colonnes pour efficacité batch',
      processManagement: 'Auto-restart PM2 + scripts de récupération batch',
      intégration: 'ERP Epicor via Windows ODBC Driver'
    },
    architecture: 'Service Python double-processus géré PM2 : boucle principale fetch.py + processus cron scheduler.py, bridgeant ODBC Windows (Epicor) vers MySQL via Pandas + Parquet, avec API de contrôle FastAPI',
    liveUrl: null,
    problem: 'L\'ERP Epicor stocke les données d\'inventaire et de commandes live dans un SQL Server Windows accessible uniquement via driver ODBC. Chaque autre service PA Super (boutique, parser, agent IA) avait besoin de ces données dans MySQL — il n\'y avait pas de pont, les systèmes en aval tournaient sur des données obsolètes.',
    lesson: 'Sur Windows, PM2 + Python venv signifie que ton plan de récupération doit être à toute épreuve — quand un PC redémarre, rien ne revient automatiquement sans avoir testé la séquence de redémarrage complète. Les scripts de récupération batch n\'étaient pas optionnels ; l\'équipe ops devait s\'auto-réparer sans intervention dev. La documentation comme artefact de déploiement.'
  },
  {
    id: 14,
    title: 'SuperInventaire',
    category: 'mobile',
    tags: ['Flutter', 'BLoC', 'Barcode', 'Zebra DataWedge', 'HTTP'],
    shortDescription: 'Gestion d\'Inventaire Mobile Entreprise avec Scanner Zebra',
    icon: '📦',
    impact: 'Opérations d\'inventaire entrepôt rationalisées avec intégration scanner entreprise Zebra',
    detailedDescription: 'Application Flutter v3.0.3 prête pour production pour la gestion d\'inventaire entrepôt avec scan codes-barres entreprise, traitement retours et workflows de demandes internes. Intègre Zebra DataWedge pour les scanners industriels, avec prévention des doublons (fenêtre 500ms) et support multiplateforme.',
    features: [
      'Suivi inventaire temps réel et comptage cyclique',
      'Intégration scanner Zebra DataWedge avec prévention doublons (500ms)',
      'Workflow traitement retours (Retour)',
      'Gestion demandes internes (IR) avec scan emplacement',
      'Suivi lots complétés avec tableau de bord statistiques',
      'Support multi-environnements (dev/prod)',
      'Obligation de changer le mot de passe à la première connexion',
      'Support multiplateforme (iOS, Android, Web, Desktop)'
    ],
    technologies: {
      mobile: ['Flutter 3.4+', 'Dart'],
      stateManagement: ['Flutter BLoC', 'Equatable'],
      hardware: ['Zebra DataWedge', 'Scanner Codes-Barres'],
      storage: ['Shared Preferences', 'Stockage Sécurisé'],
      réseau: ['Client HTTP']
    },
    metrics: {
      version: 'v3.0.3',
      écrans: '9 écrans',
      plateformes: 'iOS, Android, Web, Desktop'
    },
    architecture: 'Architecture BLoC avec pattern repository, intégration appareils Zebra, et configuration multi-environnements',
    liveUrl: null
  },
  {
    id: 15,
    title: 'SuperTransfer',
    category: 'mobile',
    tags: ['Flutter', 'BLoC', 'HTTP', 'Logistique'],
    shortDescription: 'Gestion Transferts Inter-Magasins & Logistique',
    icon: '🔄',
    impact: 'Opérations de transfert inter-magasins automatisées avec suivi cycle de vie complet',
    detailedDescription: 'Application Flutter v2.0.3 pour gérer les transferts de produits entre emplacements de magasins avec opérations multi-transferts, gestion de magasins proxy et suivi des tournées de transfert.',
    features: [
      'Création et gestion cycle de vie transferts entre magasins',
      'Opérations en lot multi-transferts',
      'Gestion magasins proxy pour stockage intermédiaire',
      'Suivi tournées de transfert avec résumés détaillés',
      'Vues transferts entrants et sortants',
      'Support multi-environnements (dev/prod)',
      'Obligation de changer le mot de passe à la première connexion',
      'Suite de tests BLoC complète'
    ],
    technologies: {
      mobile: ['Flutter 3.4+', 'Dart'],
      stateManagement: ['Flutter BLoC', 'Equatable'],
      storage: ['Shared Preferences'],
      réseau: ['Client HTTP'],
      tests: ['bloc_test', 'flutter_test']
    },
    metrics: {
      version: 'v2.0.3',
      écrans: '8 écrans',
      plateformes: 'iOS, Android, Web, Desktop'
    },
    architecture: 'Architecture BLoC avec pattern repository, tests complets, et configuration multi-environnements',
    liveUrl: null
  },
  {
    id: 16,
    title: 'Close to the Pin',
    category: 'fullstack',
    tags: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'JWT', 'BLoC'],
    shortDescription: 'App Mobile Golf avec Backend — Compétitions Closest-to-the-Pin',
    icon: '⛳',
    impact: 'Solution numérique pour gérer les compétitions golf "closest to the pin" avec classements et scoring',
    detailedDescription: 'Projet personnel full-stack avec app mobile Flutter et backend Node.js pour gérer les compétitions golf "closest to the pin" avec authentification utilisateur et scoring.',
    features: [
      'Inscription utilisateur et authentification sécurisée',
      'Création et gestion de parties',
      'Scoring joueurs et suivi classement',
      'Gestion de session basée JWT',
      'Hachage de mots de passe sécurisé avec Argon2',
      'API RESTful avec surveillance santé',
      'Validation des entrées et gestion d\'erreurs'
    ],
    technologies: {
      mobile: ['Flutter 3.4+', 'Dart'],
      stateManagement: ['Flutter BLoC'],
      backend: ['Node.js', 'Express 5'],
      database: ['MongoDB', 'Mongoose'],
      sécurité: ['JWT', 'Argon2', 'CORS'],
      storage: ['Stockage Sécurisé', 'Shared Preferences']
    },
    metrics: {
      stack: 'Flutter + Node.js + MongoDB',
      type: 'Projet Personnel',
      plateformes: 'iOS, Android'
    },
    architecture: 'Full-stack avec frontend Flutter BLoC et API Express RESTful avec persistance MongoDB',
    liveUrl: null
  },
  {
    id: 17,
    title: 'Plateforme de Gestion de Cours',
    category: 'fullstack',
    tags: ['Next.js', 'React', 'Strapi', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    shortDescription: 'Système de Gestion d\'Apprentissage Full-Stack Moderne',
    icon: '🎓',
    impact: 'Gestion de cours complète avec module de suivi d\'inventaire intégré',
    detailedDescription: 'Système de gestion d\'apprentissage full-stack construit avec Next.js 15 et Strapi 5, avec des patterns React modernes, des Server Components et un module de gestion d\'inventaire intégré.',
    features: [
      'Gestion contenu de cours avec Strapi CMS',
      'Interface moderne avec shadcn/ui et composants Radix',
      'Tables de données avec TanStack React Table',
      'Tableau de bord analytiques avec visualisation Recharts',
      'Gestion formulaires avec React Hook Form et validation Zod',
      'Module gestion inventaire (frontend + backend)',
      'Design responsive avec Tailwind CSS 4'
    ],
    technologies: {
      frontend: ['Next.js 15.5', 'React 19.1', 'TypeScript'],
      styling: ['Tailwind CSS 4', 'shadcn/ui', 'Radix UI'],
      backend: ['Strapi 5.28', 'SQLite'],
      outils: ['TanStack React Table', 'Recharts', 'React Hook Form', 'Zod']
    },
    metrics: {
      stack: 'Next.js 15.5 + React 19.1 + Strapi 5.28',
      type: 'Projet Personnel',
      architecture: 'App Router avec Server Components + Tailwind 4'
    },
    architecture: 'App Router Next.js 15.5 avec React 19.1 Server Components, Strapi 5.28 CMS headless, et Tailwind CSS 4',
    liveUrl: null
  },
  {
    id: 18,
    title: 'PaSUPER Frontend',
    category: 'frontend',
    tags: ['Angular', 'TypeScript', 'GraphQL', 'SSR', 'Redis', 'Moneris', 'YMME'],
    shortDescription: 'Plateforme E-Commerce Automobile B2C/B2B — 5M+ Produits',
    icon: '🛍️',
    impact: 'E-commerce entreprise servant 5M+ pièces automobiles avec cache 3 couches et chargements de pages sub-seconde',
    detailedDescription: 'Plateforme e-commerce Angular 13 à grande échelle propulsant pasuper.com avec 188 composants, 55 services et 614 fichiers TypeScript. Cache 3 couches (mémoire frontend, cache page Express SSR, Redis backend), compatibilité véhicule YMME avec décodage VIN, modes dual B2B/B2C, paiements Moneris & PayPal, et Angular Universal SSR pour le SEO.',
    features: [
      'Compatibilité véhicule YMME (Année/Marque/Modèle/Moteur) avec décodage VIN et garage multi-véhicules',
      'Questions qualifiantes PEDS pour correspondance précise de pièces sur 5M+ produits',
      'Cache 3 couches : mémoire frontend, cache page Express SSR, Redis backend',
      'Mode dual B2B/B2C avec inscription entreprise, export panier et bascule confidentialité',
      '3 méthodes de paiement : tokenisation hébergée Moneris, PayPal, facturation B2B',
      'Suivi livraison temps réel via Socket.IO avec mises à jour statut commandes',
      'Angular Universal SSR avec balises méta dynamiques, Open Graph et génération sitemap',
      'i18n complet (Français/Anglais) avec ngx-translate sur 188 composants'
    ],
    technologies: {
      frontend: ['Angular 13', 'TypeScript', 'RxJS', 'NGRX'],
      styling: ['Bootstrap 4.6', 'Angular Material', 'SCSS'],
      api: ['GraphQL', 'Apollo Angular', 'REST'],
      paiements: ['Tokenisation Hébergée Moneris', 'PayPal', 'Facturation B2B'],
      ssr: ['Angular Universal', 'Express SSR', 'Cache Pages'],
      realtime: ['Socket.IO'],
      déploiement: ['Docker', 'Kubernetes', 'ArgoCD']
    },
    metrics: {
      échelle: '614 fichiers TypeScript, 188 composants, 55 services',
      produits: 'Catalogue 5M+ pièces automobiles',
      cache: 'Architecture cache 3 couches',
      paiements: 'Moneris + PayPal + facturation B2B'
    },
    architecture: 'Angular Universal SSR avec cache 3 couches, APIs GraphQL + REST, moteur compatibilité véhicule YMME, et mode dual B2B/B2C avec déploiement Kubernetes via ArgoCD',
    liveUrl: 'https://pasuper.com',
    problem: 'Angular 13 a la réputation d\'être "dépassé" en 2024. Cette base de code prouve le contraire — 188 composants, SSR avec hydratation, cache 3 couches, et un moteur de compatibilité véhicule servant 5M+ pièces. Le défi n\'était pas la version du framework ; c\'était gérer cette échelle sans régressions de performance et sans casser la frontière SSR/CSR à chaque release.',
    lesson: 'Angular Universal SSR est impitoyable. Tout appel API navigateur uniquement (localStorage, window, document) dans un composant crashe le rendu serveur silencieusement ou lance une erreur à l\'hydratation. La discipline d\'écrire du code isomorphe — toujours protéger les appels spécifiques à la plateforme — est devenue naturelle seulement après avoir débogué une douzaine de crashes SSR en production. Le cache 3 couches n\'était pas une architecture élégante, c\'était un mécanisme de survie : l\'API PEDS est lente, donc on met en cache tout ce qui n\'a pas besoin d\'être temps réel.'
  },
  {
    id: 19,
    title: 'Backend E-Commerce PaSUPER',
    category: 'backend',
    tags: ['Strapi', 'Node.js', 'Elasticsearch', 'Redis', 'PEDS', 'Moneris', 'MySQL'],
    shortDescription: 'Backend Entreprise Propulsant 5M+ Pièces Automobiles',
    icon: '🔧',
    impact: 'Backend haute performance servant 5M+ produits avec 25+ patterns cache Redis et coalescence de requêtes',
    detailedDescription: 'CMS headless Strapi 4 de niveau entreprise propulsant la plateforme e-commerce PaSUPER avec 41 types de contenu, Elasticsearch sur 4 indices avec ré-indexation complète toutes les 21h, 25+ patterns de clés cache Redis (TTLs de 2 min à 7 jours), intégration API PEDS traitant 500 pièces par chunk en 4 flux parallèles, traitement paiements Moneris, expédition ShipStation, et double base MySQL.',
    features: [
      '41 types de contenu modélisant le domaine complet des pièces automobiles',
      'Elasticsearch 8 avec 4 indices, champs search_as_you_type, et typeahead <50ms',
      '25+ patterns clés cache Redis avec TTLs de 2 min à 7 jours et coalescence de requêtes',
      'Intégration API PEDS : méga-classe de 3037 lignes, requêtes chunked (500/chunk, 4 parallèles)',
      'Cache pièces véhicule 3 couches : par page, résultats formatés, données PEDS brutes',
      'Préchargement en arrière-plan des questions qualifiantes PEDS au chargement de page',
      'Traitement de jobs bee-queue pour génération PDF factures async et envoi email en masse',
      'Génération PDF factures avec PDFKit — rendu côté serveur, stocké sur AWS S3',
      'Parsing CSV pour import produits en masse : basé stream avec rapport des lignes en erreur',
      'Traitement paiements Moneris avec validation reçu et support remboursement',
      'Intégration XML ShipStation pour expédition automatisée et étiquettes de livraison',
      'Double base MySQL (DB Strapi + superdb pour full_orders)',
      'Ré-indexation Elasticsearch complète toutes les 21h avec swap alias zero-downtime'
    ],
    technologies: {
      backend: ['Strapi 4', 'Node.js 20', 'TypeScript', 'Koa'],
      database: ['MySQL (Double DB)', 'Elasticsearch 8', 'Redis 7'],
      queue: ['bee-queue', 'Traitement Jobs Arrière-Plan'],
      api: ['GraphQL', 'REST', 'Socket.IO'],
      intégrations: ['ERP Epicor', 'API PEDS (Proxy Java)', 'Moneris', 'ShipStation', 'AWS SES'],
      documents: ['PDFKit', 'Parseur CSV Stream'],
      cloud: ['AWS S3', 'Azure Translation'],
      déploiement: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD']
    },
    metrics: {
      échelle: '5M+ produits (DB Strapi + Epicor PEDS)',
      typesContenu: '41 collections',
      cache: '25+ patterns cache Redis, coalescence requêtes',
      recherche: '4 indices Elasticsearch, typeahead <50ms',
      réindexation: 'Ré-indexation complète toutes les 21h (zero-downtime)'
    },
    architecture: 'CMS Strapi 4 avec moteur de recherche Elasticsearch (4 indices), cache multi-couche Redis, traitement jobs async bee-queue pour PDF/email, traitement parallèle chunked PEDS, double base MySQL, et déploiement Kubernetes via ArgoCD',
    liveUrl: null,
    problem: 'Un distributeur automobile avec 5M+ SKUs a besoin d\'une recherche qui fonctionne vraiment — pas des requêtes SQL LIKE sur des millions de lignes. Au-delà de la recherche, la plateforme devait gérer des workflows lourds en async (génération factures, email en masse, sync données PEDS) sans bloquer le chemin principal de requêtes et sans suffoquer sur des imports CSV de 50 000+ lignes produits.',
    lesson: 'Le swap d\'alias Elasticsearch pour la ré-indexation zero-downtime semble élégant dans la doc mais a nécessité deux tentatives ratées en production pour s\'en sortir. L\'insight clé : toujours écrire dans un nouvel index avec suffixe timestamp, vérifier que le nombre de docs correspond, puis swapper l\'alias atomiquement. Ne jamais ré-indexer en place. Pour bee-queue : séparer la définition des jobs de leur traitement dans des modules distincts a rendu la base de code beaucoup plus facile à raisonner au fur et à mesure que le nombre de types de jobs grandissait.'
  },
];
