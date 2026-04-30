import { Project } from '../types/project';
import apdqLogo from '../assets/apdq.png';

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
    problem: 'L\'API d\'optimisation d\'itinéraires HERE Maps a une limite de 20 waypoints par requête, mais les chauffeurs ont souvent 30+ arrêts. Les appels séquentiels naïfs doublaient le temps de réponse à 8 secondes. En parallèle, la couche WebSocket était en compétition avec 6 types de clients différents (Flutter, React, Angular, agent IA) pour les mêmes canaux Redis pub/sub, causant des problèmes d\'ordonnancement des messages sous charge.',
    lesson: 'Découper les appels HERE Maps en chunks parallèles de 15 waypoints et fusionner les segments optimisés a réduit le calcul d\'itinéraire de 8s à 1,2s. Pour WebSocket, le partitionnement des canaux Redis par type de client (driver:*, dispatch:*, warehouse:*) a éliminé les interférences et permis d\'ajuster les TTL par canal. La réduction de 90% du polling vient du remplacement des boucles HTTP GET /status par des événements push — le refactoring le plus rentable dans 300K lignes de code.'
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
    problem: 'La file SQLite offline fonctionnait bien pour les écritures simples, mais les chauffeurs soumettant des preuves de livraison (photo + signature + GPS + timestamp) dans des zones avec 3G instable créaient des uploads partiels — la photo réussissait mais le POST de signature échouait, laissant le backend avec un enregistrement de livraison incomplet sans moyen de relancer uniquement la pièce manquante.',
    lesson: 'Migration vers une file de sync transactionnelle : tous les champs de preuve de livraison sont groupés en un seul payload atomique avec une empreinte SHA-256. Si une partie échoue, tout le bundle est relancé. La résolution de conflits utilise server-timestamp-wins pour les données GPS mais client-timestamp-wins pour les signatures (les chauffeurs signent une fois, le serveur ne devrait jamais écraser). Ce pattern est devenu le modèle pour chaque fonctionnalité offline depuis.'
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
    problem: 'L\'équipe d\'achat gérait 400+ relations fournisseurs à travers des fils d\'emails et fichiers Excel. Quand un fournisseur changeait ses prix ou arrêtait une pièce, l\'information restait dans la boîte mail d\'une seule personne. Le frontend Angular devait gérer des workflows d\'approvisionnement complexes multi-étapes avec des comparaisons de prix en temps réel entre fournisseurs — pas une simple app CRUD.',
    lesson: 'La couche d\'entités TypeORM partagée dans un monorepo NestJS/Angular était le bon choix — modifier une colonne de l\'entité Product propage les types TypeScript à la fois à la couche de validation API et aux form builders Angular. La réactivité signal-based d\'Angular 20 a remplacé 14 BehaviorSubjects RxJS par des signaux computed, réduisant le code de gestion d\'état de 40% et éliminant trois classes de bugs de fuite d\'abonnement.'
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
    liveUrl: null,
    problem: 'Deux APIs Epicor complètement différentes (SDK AConneX pour commandes/facturation et PEDS Cloud pour compatibilité véhicule/décodage VIN) chacune avec son propre schéma d\'auth, limites de débit, formats d\'erreur et comportements de timeout. Chaque service PA Super qui avait besoin de données ERP implémentait sa propre intégration Epicor — dupliquant la gestion des credentials, la logique de retry et la gestion d\'erreurs à travers 4 codebases.',
    lesson: 'Encapsuler les deux APIs derrière un seul proxy Spring Boot avec des codes d\'erreur unifiés signifie que les services en aval ne touchent jamais Epicor directement. L\'insight clé : le SDK AConneX lance des exceptions Java sur timeout tandis que PEDS retourne des HTTP 504 — normaliser les deux en une réponse JSON consistante {error, code, retryable} a épargné à chaque consommateur d\'implémenter deux chemins de gestion d\'erreurs différents. La spec OpenAPI 3.0 est devenue la source de vérité unique pour 3 équipes différentes.'
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
    problem: 'Le scanner de codes-barres et le moteur OCR de Google ML Kit veulent tous deux un accès caméra exclusif — les exécuter simultanément crash sur les anciens appareils Android. Les plaques VIN arrivent dans des formats très inconsistants : métal gravé, étiquettes autocollantes, manuscrit sur des formulaires. Le score de confiance OCR pour un VIN comme "0O1Il" (zéro-oh-un-i-elle) tombe sous 60%, rendant la capture automatisée peu fiable sans post-traitement.',
    lesson: 'Construction d\'une machine à états BLoC avec trois modes de capture (code-barres → OCR → manuel) qui libère la caméra entre les changements de mode. Ajout d\'un validateur de checksum VIN (ISO 3779) comme filtre post-OCR : si la chaîne scannée échoue le chiffre de contrôle, elle relance automatiquement avec un prétraitement à contraste amélioré avant de basculer en mode manuel. Le pattern de config multi-environnement (fichiers flavor chargés à l\'init de l\'app) est devenu le standard pour les 6 apps Flutter.'
  },
  {
    id: 6,
    title: 'PaSUPER IA — Voix & Chat',
    category: 'ai',
    tags: ['LangChain', 'OpenAI GPT-4o', 'FastAPI', 'Twilio', 'SSE Streaming', 'Gladia STT', 'AWS Polly', 'Kubernetes'],
    shortDescription: 'IA Omnicanale en Production — Appels Téléphoniques & Chat Temps Réel pour un Distributeur Auto de 5M Pièces',
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
    problem: 'Twilio WebSocket diffuse l\'audio brut à 8kHz μ-law — Gladia STT attend du PCM 16kHz. Le pipeline de rééchantillonnage ajoutait 400ms de latence, rendant les conversations saccadées. Côté chat, le client SSE Angular coupait silencieusement les connexions après 60 secondes d\'inactivité (défaut navigateur), perdant le contexte de conversation en pleine réponse.',
    lesson: 'Déplacement du rééchantillonnage audio de Python (audioop) vers une extension C native via cffi — la latence est passée de 400ms à 45ms. Pour SSE, implémentation d\'un heartbeat toutes les 15 secondes avec un handler de reconnexion côté client qui rejoue le dernier message ID. L\'insight majeur : le profiling du pipeline vocal (VAD → STT → LLM → TTS) a révélé que 60% de la latence perçue était dans le buffering TTS, pas l\'inférence LLM. Streamer le premier chunk TTS pendant la génération du reste a réduit le temps de réponse de 3,2s à 1,1s.'
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
    liveUrl: null,
    problem: 'Les fichiers d\'inventaire fournisseurs arrivent via FTP dans 6 formats CSV différents sans documentation de schéma. Les codes UPC ont des zéros en tête qu\'Excel supprime, les codes de localisation utilisent une casse inconsistante, et le même produit peut apparaître dans plusieurs fichiers avec des quantités contradictoires. Une seule ligne malformée crashait tout l\'import batch, bloquant tous les enregistrements suivants.',
    lesson: 'L\'application de dtype Pandas à la lecture (forcer UPC en string, pas int) a résolu le problème des zéros en tête. Construction d\'un hash d\'empreinte (SHA-256 de UPC+localisation+timestamp) pour la dédup — le même enregistrement soumis deux fois est silencieusement ignoré au lieu de créer des doublons. La décision de design critique : traiter chaque ligne indépendamment avec capture d\'erreur par ligne au lieu de faire échouer tout le batch. Une mauvaise ligne déclenche maintenant un email d\'alerte avec le numéro de ligne exact et le champ qui a échoué la validation, pendant que les 10 000 autres lignes se traitent normalement.'
  },
  {
    id: 8,
    title: 'APDQ — Plateforme Sécurité VÉ',
    category: 'fullstack',
    tags: ['FastAPI', 'Flutter', 'React', 'TypeScript', 'Firebase', 'Stripe', 'AWS S3', 'i18n'],
    shortDescription: 'Procédures de Sécurité Véhicules Électriques pour Professionnels du Remorquage — Plateforme Trois Stacks',
    icon: apdqLogo,
    impact: 'Donne à chaque professionnel du remorquage au Québec un accès instantané aux procédures de désactivation et de mise au neutre pour chaque modèle de véhicule électrique sur la route',
    detailedDescription: 'Construit pour l\'Association des Professionnels du Dépannage du Québec (APDQ). Une plateforme trois stacks qui met les données critiques de sécurité des véhicules électriques dans les mains des remorqueurs. L\'app Flutter ("Remorqueur Branché") permet aux travailleurs terrain de chercher n\'importe quel VÉ par année/marque/modèle et de consulter instantanément les procédures de désactivation, les étapes de mise au neutre et les données de chronométrage — le tout appuyé par de la documentation PDF. Le backend FastAPI sert les données véhicules depuis MySQL via SQLAlchemy async, stocke les PDFs de procédures et images véhicules sur S3, gère les abonnements Stripe pour les garages et pousse des notifications via Firebase. Le portail admin React permet au personnel APDQ de gérer toute la base de données VÉ : téléverser des PDFs de procédures, ajouter de nouveaux modèles à leur sortie, gérer les abonnements garages et diffuser des alertes de sécurité à tous les remorqueurs.',
    features: [
      'App Flutter ("Remorqueur Branché") : recherche VÉ par année/marque/modèle, affichage PDFs désactivation + neutre, classement véhicules populaires, notifications push Firebase',
      'Base de données sécurité VÉ : chaque modèle de véhicule électrique avec procédures de désactivation, étapes de mise au neutre, chronométrages (secondes), et images d\'identification du véhicule',
      'Visionneuse PDF : consultation in-app des documents de procédure neutre et désactivation — critique pour la sécurité terrain',
      'Backend FastAPI : SQLAlchemy 2.0 async + aiomysql, stockage fichiers S3 pour PDFs/images, gestion abonnements Stripe, Firebase FCM',
      'Portail admin React (MUI 6) : CRUD véhicules complet, upload/mise à jour/suppression PDFs, gestion garages, système de messagerie, tableau de bord abonnements',
      'Intégration Stripe : abonnements garages avec sessions de paiement, gestion webhooks, portail facturation, vérification statut abonnement',
      'Multi-tenant : hiérarchie Organisations → Garages → Remorqueurs avec accès basé sur les rôles (superadmin, admin, garage_admin, remorqueur)',
      'Système de messagerie : diffusions admin-vers-garage et garage-vers-remorqueur avec suivi de lecture et livraison push Firebase',
      'i18n complet (FR/EN) sur les trois stacks — routage URL par langue sur le portail, bascule in-app sur mobile',
      'Hachage Argon2 avec pepper + auth JWT (expiration 24h) sur tous les clients'
    ],
    technologies: {
      mobile: ['Flutter 3.4+', 'Dart', 'BLoC', 'Firebase (Analytics, Crashlytics, FCM)', 'flutter_pdfview'],
      backend: ['FastAPI 0.110', 'Python', 'SQLAlchemy 2.0 (async)', 'aiomysql', 'Celery', 'Redis'],
      web: ['React 18', 'TypeScript 5.6', 'MUI 6', 'Vite 6', 'i18next', 'react-router-dom 7'],
      database: ['MySQL (async)', 'Redis'],
      cloud: ['AWS S3 (PDFs + images)', 'Firebase Cloud Messaging'],
      paiements: ['Stripe (abonnements, webhooks, portail facturation)'],
      sécurité: ['Argon2 + pepper', 'JWT (HS256)', 'RBAC (4 rôles)']
    },
    metrics: {
      stacks: '3 stacks production : Flutter mobile + API FastAPI + portail React',
      couverture: 'Chaque modèle de véhicule électrique sur la route avec procédures de sécurité',
      paiements: 'Gestion abonnements Stripe pour accès garages',
      i18n: 'Français/Anglais complet sur les trois stacks'
    },
    architecture: 'Plateforme trois stacks partageant une base MySQL async : app mobile Flutter BLoC pour remorqueurs terrain, backend FastAPI avec stockage fichiers S3 et facturation Stripe, portail admin React+MUI pour gestion données VÉ — le tout sécurisé avec auth Argon2+JWT',
    liveUrl: null,
    problem: 'Les véhicules électriques sont fondamentalement dangereux pour les remorqueurs qui ne connaissent pas la séquence exacte d\'arrêt. Chaque marque de VÉ a des étapes de désactivation différentes, des procédures de mise au neutre différentes et des chronométrages différents — une mauvaise manipulation sur une Tesla vs. une BMW i4 peut signifier un incident de sécurité haute tension. L\'APDQ avait besoin d\'un moyen de rendre ces données critiques accessibles à chaque remorqueur au Québec, cherchables sur le terrain, avec des PDFs de procédures consultables hors ligne.',
    lesson: 'Le modèle utilisateur polymorphique (User → Garage | Remorqueur) avec héritage SQLAlchemy a simplifié significativement l\'auth multi-tenant — un seul token JWT, un seul middleware auth, rôle déterminé par le discriminateur user_type. La gestion de fichiers S3 pour les PDFs a nécessité une logique de suppression en cascade : supprimer un véhicule doit aussi supprimer tous les PDFs neutre, PDFs désactivation et images associés de S3 dans une seule transaction. La gestion des webhooks Stripe m\'a appris à toujours vérifier les signatures webhook et rendre les handlers idempotents — les livraisons webhook en double créaient des enregistrements d\'abonnement en double jusqu\'à l\'ajout de la dédup par session_id.'
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
    liveUrl: null,
    problem: 'Déployer 19 services manuellement avec kubectl apply était sujet aux erreurs et prenait 45 minutes. Une faute de frappe dans un ConfigMap a crashé le service vocal IA en production pendant 20 minutes avant que quelqu\'un ne le remarque. Aucun mécanisme de rollback n\'existait — "rollback" signifiait SSH dans le cluster et reverser manuellement les fichiers YAML.',
    lesson: 'Le templating Helm avec un chart de base partagé + overlay values.yaml par service a éliminé 80% de la duplication YAML. L\'auto-sync ArgoCD sur merge vers main signifie des déploiements en moins de 2 minutes avec correction automatique de dérive. L\'apprentissage clé : cert-manager avec l\'issuer staging Let\'s Encrypt d\'abord — on a épuisé la limite de production (50 certs/semaine) le premier jour en mal configurant le ClusterIssuer. Toujours tester avec staging.'
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
    liveUrl: 'https://dispatch.pasuper.xyz',
    problem: 'Les mises à jour de position Socket.IO à intervalles de 5 secondes sur 50+ chauffeurs généraient 600 événements/minute. Les mises à jour d\'état Redux déclenchaient des re-rendus complets de la carte Leaflet, causant des saccades sous 15fps sur les PCs bas de gamme des répartiteurs. L\'état des filtres (route, statut, plage horaire) était couplé au composant carte, donc changer un filtre remontait chaque marqueur.',
    lesson: 'Mémoïsation de la couche de marqueurs Leaflet avec useMemo indexé sur un hash de position — seuls les chauffeurs dont les coordonnées ont réellement changé déclenchent un re-rendu. Déplacement de l\'état des filtres dans un slice Redux séparé du slice positions pour que les changements de filtres ne touchent pas le chemin de rendu de la carte. FPS passé de 15 à 60 stable. Le pattern multi-environnement .env (VITE_API_URL par environnement) a éliminé entièrement la classe de bugs "fonctionne en staging, cassé en prod".'
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
    liveUrl: null,
    problem: 'Une seule instance Node.js plafonnait à 35 connexions WebSocket concurrentes — le CPU montait à 95% parce que chaque trame GPS entrante était diffusée à chaque dashboard répartiteur connecté, y compris les dashboards qui ne visualisaient même pas la région de ce chauffeur. Scaler vers une deuxième instance cassait les rooms Socket.IO parce que l\'état de session était en mémoire.',
    lesson: 'Redis pub/sub comme couche de fan-out WebSocket a résolu le scaling horizontal — l\'adaptateur Redis de Socket.IO partage l\'état des rooms entre instances sans sessions sticky. Le vrai gain de performance était le partitionnement des canaux : les répartiteurs s\'abonnent uniquement aux chauffeurs de leur région assignée, réduisant le volume de diffusion de 70%. L\'endpoint Prometheus /metrics a exposé que 30% des trames GPS étaient des doublons (retries mobile) — ajouter un SET Redis avec TTL de 5 secondes pour la dédup a fait passer le CPU de 95% à 40% sur le même hardware.'
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
    liveUrl: null,
    problem: 'Sept jobs cron partageant une seule instance APScheduler signifiait qu\'une longue sync ESL (45 minutes pour 12 000 étiquettes de rayon) bloquait le job d\'ingestion FTP de démarrer à l\'heure. Quand l\'API du vendeur ESL retournait 429 (rate limit), le job crashait et emportait tous les autres jobs avec lui, y compris la sync d\'inventaire Epicor critique en temps.',
    lesson: 'Isolation des jobs via le ThreadPoolExecutor d\'APScheduler (max_workers=7) — chaque job tourne dans son propre thread, donc une sync ESL bloquée n\'affame pas le job FTP. Ajout de circuit breakers par job : après 3 échecs consécutifs, un job se désactive et envoie un email d\'alerte avec la stack trace et le dernier timestamp de succès. L\'endpoint de santé (/health) retourne le next_run_time et last_status de chaque job — le personnel d\'exploitation peut diagnostiquer les problèmes sans accès SSH.'
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
    problem: 'Le SQL Server d\'Epicor n\'est accessible que via le driver ODBC Windows — pas de REST API, pas de réplication, pas de change-data-capture. La connexion pyodbc tombe silencieusement après 30 minutes d\'inactivité, et la reconnexion sous gestion de processus PM2 sur Windows crée des handles de base de données orphelins qui verrouillent les tables. Les services en aval (vitrine, agent IA, parser) ont besoin de données d\'inventaire fraîches sous 5 minutes, mais un scan complet de 5M+ SKUs prend 12 minutes.',
    lesson: 'La sync incrémentale via une colonne modified_date a réduit le scan complet de 12 minutes à des fetches delta de 45 secondes. Parquet comme format intermédiaire (pas CSV) préserve les types de colonnes et gère les valeurs NULL sans l\'ambiguïté du parsing. Les scripts de récupération PM2 n\'étaient pas optionnels — sur Windows, PM2 ne redémarre pas automatiquement après reboot à moins d\'exécuter pm2 save + pm2-startup manuellement. Écriture de scripts batch que le personnel d\'exploitation peut double-cliquer pour restaurer le pipeline complet sans intervention dev.'
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
    liveUrl: null,
    problem: 'Les scanners Zebra TC21 émettent des intents DataWedge à intervalles de 200ms pendant un scan rapide — le gestionnaire d\'événements BLoC traitait chaque scan de manière synchrone, causant un gel de l\'UI de 3 secondes quand un magasinier scannait 10 articles rapidement. Les scans en double du même code-barres dans un comptage de cycle créaient des chiffres d\'inventaire gonflés qui se propageaient à l\'ERP.',
    lesson: 'Debounce du listener d\'intent DataWedge à 300ms et ajout d\'un buffer de scan avec dédup de code-barres (même code-barres dans les 5 secondes = ignoré). Le BLoC traite les événements de scan de manière asynchrone via une file d\'événements, donc l\'UI reste à 60fps même pendant un scan rapide. La logique de prévention des doublons (Set<String> des codes-barres scannés par session) a capturé en moyenne 12% de scans en double par quart de travail qui gonflaient précédemment les comptages.'
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
    liveUrl: null,
    problem: 'Les transferts inter-magasins impliquent 3 transitions d\'état (créé → en-transit → reçu) à travers 2 emplacements physiques. Si le magasin expéditeur marque un transfert comme envoyé mais que l\'app du magasin destinataire est hors ligne, le transfert reste coincé dans les limbes "en-transit" sans timeout ni escalade. Les transferts en lot de 50+ articles expiraient sur le HTTP POST parce que le backend validait chaque article séquentiellement.',
    lesson: 'Ajout d\'un TTL de 48 heures sur le statut en-transit avec alertes d\'escalade automatiques aux deux magasins. Pour les transferts en lot, déplacement de la validation des articles vers un job en arrière-plan — le POST retourne immédiatement avec un ID de transfert, et l\'app poll les résultats de validation. La suite de tests BLoC (85% de couverture) a capturé un cas limite critique : les transferts via magasin proxy (A→B→C) comptabilisaient en double l\'inventaire au lieu intermédiaire.'
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
    liveUrl: null,
    problem: 'Le schéma flexible de MongoDB était initialement pratique mais a mené à des documents de score inconsistants — certains avaient "distance" en string ("4.5m"), d\'autres en float (4.5), et un cas limite le stockait en tableau. Le hachage de mot de passe Argon2 ajoutait 800ms à l\'endpoint de login, rendant l\'app lente à la première authentification.',
    lesson: 'Ajout de la validation de schéma Mongoose avec strict: true pour appliquer les types au niveau ODM — les documents invalides sont rejetés avant d\'atteindre la base de données. Pour Argon2, ajustement du coût mémoire de 64MB à 16MB (sécurité toujours équivalente à bcrypt) et déplacement du hachage vers un worker thread — le login est passé de 800ms à 200ms. Premier projet personnel où j\'ai implémenté la rotation de refresh token JWT, que j\'ai ensuite réutilisée dans 3 projets de production.'
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
    liveUrl: null,
    problem: 'Next.js 15 App Router avec Server Components signifie qu\'on ne peut pas utiliser useState ou useEffect dans les pages rendues côté serveur — mais les composants TanStack React Table et Recharts nécessitent de l\'état côté client. La frontière entre composants serveur et client causait des mismatches d\'hydratation quand Strapi retournait des dates en UTC mais le client les rendait en fuseau horaire local.',
    lesson: 'Établissement d\'un pattern clair : les composants serveur fetchent depuis Strapi et passent des données sérialisées en props à des wrappers de composants client qui gèrent l\'interactivité. Pour les dates, normaliser en chaînes ISO 8601 à la couche de réponse Strapi (pas dans React) a éliminé les mismatches d\'hydratation. La validation Zod sur les soumissions de formulaire a capturé 3 cas limites que la validation intégrée de React Hook Form avait manqués, particulièrement autour des objets imbriqués optionnels.'
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
    problem: 'Le moteur de compatibilité YMME (Année/Marque/Modèle/Moteur) sert 5M+ pièces mais les requêtes de dropdowns en cascade faisaient 4 appels API séquentiels — chacun attendant la résolution du précédent. Le chargement de page avec SSR atteignait 6 secondes parce qu\'Angular Universal rendait côté serveur des composants qui appelaient localStorage (qui n\'existe pas sur le serveur), causant des échecs SSR silencieux qui tombaient en rendu côté client.',
    lesson: 'Implémentation d\'un cache 3 couches (Redis → LRU en mémoire → HTTP ETag) qui a réduit le temps de lookup YMME de 4 appels séquentiels (2,4s) à un seul cache hit (80ms) pour 92% des requêtes. Pour le SSR, création d\'un PlatformService qui encapsule chaque API navigateur derrière un guard isPlatformBrowser — plus de crashs SSR silencieux. Le pattern GraphQL DataLoader pour le batching des appels API PEDS a réduit les requêtes externes de 60% pendant le pré-rendu SSR.'
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
    problem: 'Les requêtes SQL LIKE sur 5M+ SKUs prenaient 12 secondes par recherche. Les imports CSV de 50 000+ lignes de produits PEDS faisaient timeout sur la requête HTTP à 30 secondes, et les imports échoués laissaient la base de données dans un état partiel avec des enregistrements orphelins. La ré-indexation Elasticsearch verrouillait l\'alias de recherche pendant 8 minutes, signifiant que la vitrine affichait "aucun résultat" pendant chaque rafraîchissement de données produit.',
    lesson: 'L\'alias swapping Elasticsearch a résolu la ré-indexation sans downtime : écrire vers un nouvel index avec un suffixe timestamp, vérifier que le nombre de documents correspond à la source, puis swapper l\'alias atomiquement — la vitrine ne voit jamais de trou. Pour les imports CSV, bee-queue traite les lignes en chunks de 500 dans une transaction database — si le chunk 47 échoue, les chunks 1-46 sont déjà committés et le chunk 47 retry indépendamment. Ce pattern gère des imports de 50K lignes en 90 secondes avec zéro enregistrement orphelin.'
  },
];
