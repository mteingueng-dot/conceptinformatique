import type { LucideIcon } from 'lucide-react';
import { Code, BarChart3, Database, ShieldCheck, BrainCircuit, Compass, Server } from 'lucide-react';

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  tagline: string;
  intro: string;
  desc: string;
  points: string[];
  benefits: { title: string; text: string }[];
  deliverables: string[];
  technologies: string[];
  process: { title: string; text: string }[];
}

export const services: ServiceDetail[] = [
  {
    slug: 'developpement-logiciel',
    title: 'Développement Logiciel',
    shortTitle: 'Logiciels Sur Mesure',
    icon: Code,
    tagline: 'Des applications sur mesure, conçues pour vos processus métiers.',
    intro:
      "Chaque organisation a ses particularités. Nous concevons des applications web et d'entreprise qui s'adaptent à votre réalité plutôt que l'inverse. Notre approche agile et itérative vous garantit une visibilité constante sur l'avancement du projet. Nous suivons les meilleures pratiques d'architecture et de sécurité pour livrer des solutions robustes et pérennes.",
    desc: "Nous concevons des applications web et d'entreprise sur mesure, alignées sur vos processus métiers. Grâce à des technologies modernes comme React, TypeScript, Node.js et .NET, nous livrons des solutions robustes, performantes et évolutives. Notre expertise couvre l'ensemble du cycle de vie : de la conception architecturale à la mise en production, en passant par le déploiement automatisé et la surveillance continue. Nous garantissons la sécurité, l'optimisation des performances et la maintenabilité à long terme.",
    points: [
      "Applications Web (React / TypeScript)",
      "API & services back-end (Node.js, .NET / C#)",
      "Intégration de systèmes et d'API tierces",
      "Modernisation de code legacy",
      "Performance optimization",
      "Security & compliance",
      "CI/CD deployment"
    ],
    benefits: [
      {
        title: 'Alignement avec vos processus',
        text: "Une solution pensée autour de votre façon de travailler, pour une adoption simple par vos équipes."
      },
      {
        title: 'Robustesse et évolutivité',
        text: "Une architecture propre et des pratiques éprouvées qui permettent à l'application de grandir avec vos besoins."
      },
      {
        title: 'Livraison itérative',
        text: "Des cycles courts et des démonstrations régulières pour valider chaque étape et ajuster rapidement."
      },
      {
        title: 'Operability & monitoring',
        text: "Une application clé en main avec surveillance intégrée, alertes et tableaux de bord pour la production."
      },
      {
        title: 'Time-to-market',
        text: "Un déploiement automatisé et une mise à jour continue qui vous permettent de réagir rapidement aux demandes du marché."
      }
    ],
    deliverables: [
      "Application web ou d'entreprise prête à être déployée",
      "API et services back-end documentés",
      "Intégrations avec vos systèmes existants",
      "Jeux de tests et documentation technique",
      "Transfert de connaissances à vos équipes",
      "User training documentation",
      "CI/CD pipeline setup",
      "Monitoring & alerting configuration"
    ],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      '.NET / C#',
      'Visual Studio',
      'Agile Scrum / Kanban',
      'Jira',
      'Git',
      'Docker',
      'Kubernetes',
      'PostgreSQL',
      'Azure App Service'
    ],
    process: [
      {
        title: 'Cadrage des besoins',
        text: "Ateliers avec vos équipes pour comprendre vos processus, vos contraintes et définir les priorités."
      },
      {
        title: 'Conception',
        text: "Définition de l'architecture, des maquettes et du découpage fonctionnel de la solution."
      },
      {
        title: 'Prototyping & MVP validation',
        text: "Réalisation d'une version minimale pour valider rapidement vos hypothèses et affiner les besoins."
      },
      {
        title: 'Développement itératif',
        text: "Réalisation par incréments en Scrum ou Kanban, avec démonstrations et retours réguliers."
      },
      {
        title: 'Code review & QA',
        text: "Validation rigoureuse du code, tests automatisés et assurance qualité avant livraison."
      },
      {
        title: 'Déploiement et suivi',
        text: "Mise en production, formation et accompagnement pour assurer l'évolution de la solution."
      }
    ]
  },
  {
    slug: 'business-intelligence',
    title: 'Business Intelligence (BI)',
    shortTitle: 'Business Intelligence',
    icon: BarChart3,
    tagline: 'Des tableaux de bord clairs pour décider avec confiance.',
    intro:
      "Vos données contiennent la réponse à vos questions stratégiques. Nous les structurons, les structurons et les présentons dans des tableaux de bord interactifs qui racontent une histoire. La BI ne se limite pas aux chiffres : c'est démocratiser l'accès à l'information pour que chaque décideur, du PDG au responsable de département, puisse agir en toute confiance. Nous transformons vos données brutes en insights actionables, présentés de manière claire et accessible à tous.",
    desc: "Transformez vos données brutes en décisions éclairées et en actions concrètes. Nous bâtissons des modèles de données robustes et des tableaux de bord interactifs, notamment avec Power BI, qui offrent une vision claire et stratégique de votre organisation. Notre approche combine la rigueur technique avec la clarté narrative : chaque visualisation est conçue pour communiquer rapidement l'information essentielle. Nous assurons également une gouvernance des données solide et des validations continues pour garantir que vous pouvez faire confiance à vos rapports.",
    points: [
      "Tableaux de bord Power BI interactifs",
      "Modélisation de données avancée & mesures DAX",
      "KPI & reporting stratégique",
      "Automatisation et actualisation des rapports",
      "Qualité et validation des données",
      "Analyses prédictives et détection de tendances",
      "Rapports mobiles et rapports auto-service"
    ],
    benefits: [
      {
        title: 'Une vision unifiée',
        text: "Une source de vérité commune qui élimine les écarts entre les chiffres de vos différents départements."
      },
      {
        title: 'Décisions plus rapides',
        text: "Des indicateurs à jour et interactifs pour repérer les tendances et réagir sans attendre."
      },
      {
        title: 'Fiabilité vérifiée',
        text: "Des tests unitaires, d'intégration et de régression qui assurent l'exactitude de vos rapports dans le temps."
      },
      {
        title: 'Démocratisation des données',
        text: "Chaque utilisateur accède aux données pertinentes pour son rôle, sans dépendre d'une équipe BI intermédiaire."
      },
      {
        title: 'Vérification continue de la précision',
        text: "Des contrôles automatisés et des validations intégrées qui détectent et signalent immédiatement les anomalies."
      }
    ],
    deliverables: [
      "Tableaux de bord interactifs Power BI",
      "Modèle de données optimisé et mesures DAX avancées",
      "Rapports paginés et rapports récurrents",
      "Jeux de tests de validation des données",
      "Dictionnaires de données et documentation métier",
      "Matériels de formation pour les utilisateurs finaux",
      "Rapports intégrés et API pour les applications"
    ],
    technologies: [
      'Power BI',
      'DAX',
      'SSAS',
      'SSRS',
      'Microsoft Fabric',
      'Azure SQL Database',
      'Python & R',
      'Modèles de données Excel',
      'Tests unitaires',
      "Tests d'intégration",
      'Tests de régression',
      'Cadres de test'
    ],
    process: [
      {
        title: 'Définition des indicateurs',
        text: "Identification des questions d'affaires et des KPI qui comptent réellement pour votre organisation."
      },
      {
        title: 'Atelier de découverte des données',
        text: "Exploration de vos sources, compréhension des volumes, de la qualité et des dépendances entre les données."
      },
      {
        title: 'Modélisation des données',
        text: "Construction d'un modèle de données cohérent, performant et facile à maintenir, adapté à l'analyse."
      },
      {
        title: 'Création des rapports et storytelling',
        text: "Conception de tableaux de bord clairs et interactifs qui communiquent rapidement vos insights, validés avec vos utilisateurs."
      },
      {
        title: 'Gestion du changement et adoption',
        text: "Formation, support des utilisateurs et accompagnement pour assurer une adoption réussie et une utilisation croissante."
      },
      {
        title: 'Validation et évolution continue',
        text: "Tests de qualité, mise en production, actualisation automatisée, surveillance de la performance et ajustements réguliers."
      }
    ]
  },
  {
    slug: 'data-engineering',
    title: 'Data Engineering',
    shortTitle: 'Ingénierie de Données',
    icon: Database,
    tagline: 'Des flux de données fiables, automatisés et sécurisés.',
    intro:
      "Une bonne analyse commence par de bonnes données. Nous concevons les entrepôts et les pipelines qui collectent, transforment et centralisent votre information, en respectant les normes de gouvernance et de conformité. Vous bénéficiez ainsi d'une base solide, auditable et pérenne pour la BI, l'analytique et l'intelligence artificielle.",
    desc: "Nous construisons l'infrastructure de données qui fait circuler votre information de façon fiable, gouvernée et conforme. Nos pipelines ETL automatisés, conçus avec SQL, Python et des outils modernes comme Kafka et Apache Airflow, garantissent l'intégrité, la traçabilité, la qualité continue et la disponibilité de vos données. Nous assurons une gouvernance robuste avec lignes de traçabilité, catalogues de métadonnées, et tableaux de bord de qualité en temps réel pour une vue complète de l'état de votre infrastructure de données.",
    points: [
      "Entrepôts de données (Data Warehouse)",
      "Pipelines ETL automatisés & streaming temps réel (SQL, Python)",
      "Qualité et gouvernance des données",
      "Optimisation de bases de données SQL",
      "Data governance & traçabilité des données",
      "Real-time streaming pipelines",
      "Surveillance continue de la qualité des données"
    ],
    benefits: [
      {
        title: 'Données de qualité certifiée',
        text: "Des contrôles et des règles de validation intégrés pour garantir la cohérence et la traçabilité de l'information."
      },
      {
        title: 'Automatisation complète et fiable',
        text: "Des traitements planifiés et orchestrés qui réduisent les manipulations manuelles et les risques d'erreur."
      },
      {
        title: 'Performance et capacité scalable',
        text: "Des requêtes et des structures optimisées pour traiter de grands volumes de données en temps réel."
      },
      {
        title: 'Infrastructure scalable pour la croissance',
        text: "Une architecture conçue pour évoluer avec vos besoins, sans goulot d'étranglement ni réduction de performance."
      },
      {
        title: 'Conformité réglementaire & audit trails',
        text: "Une gouvernance stricte avec documentation d'audit, traçabilité complète et conformité aux normes réglementaires."
      }
    ],
    deliverables: [
      "Entrepôt de données structuré et optimisé",
      "Pipelines ETL automatisés, planifiés et orchestrés",
      "Pipelines de streaming temps réel (Kafka, Airflow)",
      "Procédures et requêtes SQL optimisées",
      "Règles de qualité et de gouvernance des données",
      "Catalogues de données & gestion des métadonnées",
      "Tableaux de bord de surveillance de la qualité",
      "Documentation des flux, modèles de données et runbooks opérationnels",
      "Audit trails et traces de conformité"
    ],
    technologies: [
      'SSIS',
      'T-SQL',
      'SQL Server',
      'Azure Data Factory',
      'Python',
      'Spark',
      'Kafka',
      'dbt',
      'Great Expectations',
      'Apache Airflow',
      'Databricks',
      'Denodo'
    ],
    process: [
      {
        title: 'Inventaire et évaluation des sources',
        text: "Cartographie complète de vos sources de données, de leur qualité et de leurs contraintes."
      },
      {
        title: 'Profilage & évaluation des données',
        text: "Analyse approfondie des données existantes pour identifier les patterns, anomalies et besoins de nettoyage."
      },
      {
        title: 'Architecture et conception des flux',
        text: "Conception de l'entrepôt, des pipelines ETL et des flux streaming adaptés à vos volumes et à vos besoins de conformité."
      },
      {
        title: 'Développement, tests et validation',
        text: "Mise en place des traitements avec validation de l'intégrité, de la qualité et de la traçabilité des données."
      },
      {
        title: 'Optimisation des performances',
        text: "Tuning des requêtes, optimisation des index et des flux pour garantir une performance constante en production."
      },
      {
        title: 'Exploitation, monitoring et évolution',
        text: "Surveillance continue, alertes de qualité, ajustements de performance et évolution des flux au fil de vos besoins."
      }
    ]
  },
  {
    slug: 'support-ti-securite',
    title: 'Support TI & Sécurité',
    shortTitle: 'Support TI & Sécurité',
    icon: ShieldCheck,
    tagline: 'Une infrastructure stable, protégée et bien entretenue.',
    intro:
      "Réduire les risques, assurer la continuité, respecter les conformités : c'est la mission du support IT moderne. Nous gérons votre infrastructure 24/7, anticipant les menaces et garantissant la disponibilité de vos systèmes. Nos équipes certifiées appliquent les meilleures pratiques de sécurité et de conformité réglementaire, tout en maintenant votre budget IT prévisible et contrôlé.",
    desc: "Nous bâtissons une stratégie de support IT et de sécurité complète, 24/7 : gestion proactive de votre infrastructure, protection contre les cymenaces avancées, conformité réglementaire continue et assistance fiable. Avec une équipe certifiée et des outils modernes (Azure, Intune, Microsoft Defender, SIEM), nous réduisez les risques d'incident, assurez la continuité de votre activité et maintenez la confiance de vos clients et partenaires. Chaque action est documentée pour audit et traçabilité.",
    points: [
      "Maintenance et gestion proactive des parcs TI",
      "Cybersécurité avancée & configuration pare-feu",
      "Sauvegarde & plan de relève et continuité",
      "Assistance aux utilisateurs 24/7",
      "Gestion des correctifs et mises à jour",
      "Conformité réglementaire & audits de sécurité",
      "Surveillance proactive 24/7 et réponse aux incidents"
    ],
    benefits: [
      {
        title: 'Réduction des risques de sécurité',
        text: "Une surveillance 24/7 et des mesures préventives qui détectent et bloquent les menaces avant qu'elles ne causent de dégâts."
      },
      {
        title: 'Assurance de continuité',
        text: "Sauvegardes fiables, plans de relève testés et failover automatique pour garantir l'absence d'interruption."
      },
      {
        title: 'Conformité réglementaire assurée',
        text: "Respect continu des normes (ISO, GDPR, etc.), audits réguliers et documentation complète pour la certification."
      },
      {
        title: 'Conformité réglementaire et audit-ready',
        text: "Traçabilité complète, logs d'audit automatisés et rapports conformité pour passer les inspections sans stress."
      },
      {
        title: 'Budget IT prévisible',
        text: "Un modèle de coûts transparent et stable, sans surprise, pour planifier vos dépenses informatiques."
      }
    ],
    deliverables: [
      "Audit et évaluation des risques de sécurité",
      "Plan de maintenance préventive et calendrier",
      "Configuration de sécurité et pare-feu optimisée",
      "Plan de sauvegarde, relève et continuité",
      "Service d'assistance aux utilisateurs 24/7",
      "Accords de niveau de service (SLA) et plans de réponse aux incidents",
      "Évaluations régulières des risques de sécurité",
      "Validation des sauvegardes & tests de plan de relève"
    ],
    technologies: [
      'Windows Server',
      'Office 365',
      'Exchange',
      'SharePoint',
      'Microsoft Teams',
      'Azure',
      'Microsoft Intune',
      'Microsoft Defender',
      'ForcePoint',
      'SIEM (Security Information & Event Management)',
      'MDR (Managed Detection & Response)',
      'Automated Patch Management'
    ],
    process: [
      {
        title: 'Audit de l\'existant',
        text: "Évaluation approfondie de votre parc, de vos configurations, de vos risques de sécurité et de votre conformité."
      },
      {
        title: 'Évaluation de sécurité et conformité',
        text: "Analyse détaillée des expositions de sécurité et vérification de la conformité aux normes réglementaires applicables."
      },
      {
        title: 'Plan d\'action stratégique',
        text: "Définition des priorités de remise à niveau, de protection, de maintenance et de conformité avec calendrier réaliste."
      },
      {
        title: 'Mise en œuvre et déploiement',
        text: "Application des correctifs, configuration de la sécurité avancée, déploiement des sauvegardes et intégration de monitoring."
      },
      {
        title: 'Surveillance continue et réponse aux incidents',
        text: "Monitoring 24/7 avec alertes automatiques, escalade rapide et réponse d'incident documentée et traçable."
      },
      {
        title: 'Évolution, support continu et audits',
        text: "Assistance aux utilisateurs, révisions régulières, tests de plans de relève et audits de conformité périodiques."
      }
    ]
  },
  {
    slug: 'automatisation-ia',
    title: 'Automatisation & IA',
    shortTitle: 'Automatisation IA',
    icon: BrainCircuit,
    tagline: "L'intelligence artificielle au service de votre efficacité.",
    intro:
      "Les tâches répétitives freinent vos équipes et affectent votre compétitivité. Nous automatisons vos processus critiques et intégrons l'apprentissage automatique pour transformer votre efficacité opérationnelle. Nos solutions offrent un ROI concret : réduction des coûts de gestion, amélioration de la qualité des données et gain de temps pour vos équipes. Avec l'IA et l'automatisation, vous obtenez un avantage compétitif durable.",
    desc: "Transformez votre efficacité opérationnelle grâce à l'intelligence artificielle et à l'automatisation intelligente. Nous concevons des solutions d'automatisation robustes et des modèles d'apprentissage automatique qui s'intègrent parfaitement à votre écosystème métier. De la reconnaissance intelligente de documents aux algorithmes d'optimisation en passant par l'automatisation des flux de travail complexes, nous libérons vos équipes des tâches répétitives et les orientons vers la création de valeur. Notre approche combine rigoureusement la PoC pour valider rapidement le ROI, le monitoring continu pour assurer la performance en production, et l'accompagnement à l'adoption pour un succès durable.",
    points: [
      "Apprentissage automatique et réseaux de neurones avec Python",
      "Automatisation de processus métier et flux de travail RPA",
      "Intelligence documentaire et reconnaissance intelligente",
      "Analyse prédictive et détection d'anomalies",
      "Algorithmes d'optimisation et planification intelligente",
      "Intégration avec vos systèmes métier existants",
      "Chatbots et assistants intelligents conversationnels"
    ],
    benefits: [
      {
        title: 'ROI et gains d\'efficacité mesurables',
        text: "Une réduction directe des coûts opérationnels et du temps de traitement, avec des résultats quantifiés et durables."
      },
      {
        title: 'Automatisation scalable',
        text: "Des solutions conçues pour croître avec votre volume d'activité, sans augmentation proportionnelle des coûts opérationnels."
      },
      {
        title: 'Avantage compétitif',
        text: "Des processus plus rapides et plus précis que vos concurrents, vous permettant de réagir plus vite aux opportunités du marché."
      },
      {
        title: 'Fiabilité et reproductibilité',
        text: "Des processus exécutés de façon constante et fiable, sans les erreurs liées à la manipulation manuelle, avec conformité garantie."
      },
      {
        title: 'Anticipation et intelligence décisionnelle',
        text: "Des modèles prédictifs qui détectent les tendances, identifient les risques et vous aident à décider plus intelligemment."
      }
    ],
    deliverables: [
      "Processus et flux de travail entièrement automatisés",
      "Modèles d'apprentissage automatique entraînés et validés",
      "Agents IA et assistants intelligents en production",
      "Tableaux de bord de performance et métriques d'impact",
      "Runbooks d'automatisation et documentation opérationnelle",
      "Matériels de formation et accompagnement à l'adoption",
      "Intégrations avec vos systèmes existants (ERP, CRM, etc.)"
    ],
    technologies: [
      'Python',
      'TensorFlow & PyTorch',
      'Scikit-learn',
      'Azure Machine Learning',
      'Power Automate',
      'RPA (Robotic Process Automation)',
      'Azure Cognitive Services',
      'MLflow & Model Management',
      'Agents IA',
      'Apprentissage automatique',
      'Analyse prédictive',
      'APIs & intégrations métier'
    ],
    process: [
      {
        title: 'Identification des cas d\'usage et cadrage',
        text: "Repérage des processus et des problèmes où l'automatisation ou l'IA apporte une valeur concrète et mesurable. Évaluation du ROI potentiel."
      },
      {
        title: 'Preuve de concept (PoC)',
        text: "Conception et réalisation rapide d'un prototype pour valider votre hypothèse, démontrer la faisabilité et quantifier le ROI avant engagement complet."
      },
      {
        title: 'Préparation et nettoyage des données',
        text: "Collecte, analyse, nettoyage et structuration des données nécessaires à la solution, avec assurance qualité."
      },
      {
        title: 'Développement, entraînement et validation des modèles',
        text: "Conception de l'automatisation ou du modèle d'IA, entraînement rigoureux, tests de performance et validation sur données réelles."
      },
      {
        title: 'Intégration et déploiement en production',
        text: "Intégration transparente avec vos systèmes existants, mise en production progressive et configuration du monitoring."
      },
      {
        title: 'Monitoring, amélioration continue et support',
        text: "Surveillance constante de la performance, détection des dérives de modèle, réentraînement adaptatif et accompagnement utilisateur long terme."
      }
    ]
  },
  {
    slug: 'transformation-numerique',
    title: 'Transformation numérique',
    shortTitle: 'Transformation numérique',
    icon: Compass,
    tagline: 'Faites évoluer vos processus et vos outils avec une feuille de route claire.',
    intro:
      'Une transformation numérique réussie commence par vos objectifs d’affaires et la réalité de vos équipes. Nous vous aidons à évaluer vos processus et vos systèmes, à prioriser les changements utiles et à planifier une évolution progressive, mesurable et adaptée à votre organisation.',
    desc:
      'Nous accompagnons votre organisation de l’analyse initiale à l’adoption des nouvelles solutions. La démarche peut inclure la cartographie des processus, l’identification des irritants, la priorisation des initiatives, la modernisation des applications et des données, l’automatisation, l’intégration infonuagique et la gestion du changement. Chaque étape s’appuie sur des objectifs concrets, une gouvernance claire et des indicateurs de résultats.',
    points: [
      'Diagnostic de maturité numérique et analyse des besoins',
      'Cartographie et optimisation des processus d’affaires',
      'Feuille de route et priorisation des initiatives',
      'Modernisation et intégration des systèmes',
      'Automatisation des processus et exploitation des données',
      'Sécurité, gouvernance et gestion des risques',
      'Accompagnement des équipes et gestion du changement',
    ],
    benefits: [
      {
        title: 'Une vision claire des priorités',
        text: 'Une feuille de route liée à vos objectifs, à vos contraintes et à la capacité réelle de vos équipes.',
      },
      {
        title: 'Des processus plus efficaces',
        text: 'Des occasions d’amélioration concrètes pour réduire les tâches manuelles et simplifier les opérations.',
      },
      {
        title: 'Une évolution maîtrisée',
        text: 'Des changements progressifs, mesurables et conçus pour s’intégrer à vos systèmes existants.',
      },
      {
        title: 'Une meilleure adoption',
        text: 'Un accompagnement qui aide les équipes à comprendre, adopter et faire évoluer les nouvelles pratiques.',
      },
    ],
    deliverables: [
      'Diagnostic et cartographie des processus et systèmes',
      'Analyse des besoins, des irritants et des possibilités d’amélioration',
      'Feuille de route numérique priorisée',
      'Recommandations d’architecture, d’intégration et de modernisation',
      'Plan de gestion du changement et d’accompagnement',
      'Indicateurs de succès et plan de suivi',
    ],
    technologies: [
      'Microsoft 365',
      'Microsoft Azure',
      'Microsoft Fabric',
      'Power BI',
      'Power Platform',
      'API et intégration de systèmes',
      'Automatisation et IA',
      'Méthodes Agile',
    ],
    process: [
      {
        title: 'Comprendre votre situation',
        text: 'Rencontrer les parties prenantes et évaluer les processus, les outils, les données et les objectifs d’affaires.',
      },
      {
        title: 'Repérer les occasions',
        text: 'Identifier les irritants, les risques et les améliorations possibles, puis évaluer leur valeur et leur faisabilité.',
      },
      {
        title: 'Établir la feuille de route',
        text: 'Définir les priorités, les étapes, les responsabilités et les indicateurs de succès.',
      },
      {
        title: 'Mettre en œuvre progressivement',
        text: 'Réaliser les initiatives par étapes, valider les résultats et intégrer les solutions aux systèmes existants.',
      },
      {
        title: 'Accompagner et améliorer',
        text: 'Soutenir les équipes, mesurer l’adoption et ajuster la démarche selon les résultats observés.',
      },
    ],
  },
  {
    slug: 'architecture-cloud',
    title: 'Architecture Cloud',
    shortTitle: 'Architecture Cloud',
    icon: Server,
    tagline: 'Un cloud performant, sécurisé et maîtrisé.',
    intro:
      "Le cloud offre l'agilité et l'innovation que votre organisation mérite. Nous concevons une architecture cloud qui libère le potentiel de vos applications et de vos données, en les mettant à l'échelle mondiale. Avec une stratégie solide, une sécurité renforcée et une optimisation continue des coûts, vous transformez l'infrastructure en avantage compétitif.",
    desc: "Migrez vers le cloud avec une architecture pensée pour la performance globale, la sécurité et la maîtrise des coûts. Nous définissons votre stratégie cloud, déployons et sécurisons vos applications et vos données sur Azure et AWS, puis optimisons continuellement pour la scalabilité, la résilience et l'efficacité. Notre approche couvre l'évaluation de votre readiness cloud, la conception architecturale résiliente, la migration progressive, et l'optimisation des coûts à long terme.",
    points: [
      "Migration cloud (Azure / AWS)",
      "Déploiement et CI/CD automatisés",
      "Infrastructure as Code & Terraform",
      "Sécurité cloud native",
      "Stratégies d'optimisation des coûts",
      "Récupération d'urgence et haute disponibilité",
      "Architecture multi-région"
    ],
    benefits: [
      {
        title: 'Scalabilité adaptée et globale',
        text: "Des ressources qui s'ajustent à votre activité dans plusieurs régions du monde pour répondre à la croissance et à la demande mondiale."
      },
      {
        title: 'Coûts maîtrisés et optimisés',
        text: "Une architecture pensée pour optimiser l'usage des ressources, identifier les économies et limiter les dépenses inutiles."
      },
      {
        title: 'Déploiements fiables et rapides',
        text: "Des pipelines CI/CD automatisés qui rendent vos mises en production rapides, reproductibles et sans risque."
      },
      {
        title: 'Haute disponibilité et portée mondiale',
        text: "Une architecture résiliente avec failover automatique, redondance multi-région et zéro interruption de service."
      },
      {
        title: 'Cycles d\'innovation plus rapides',
        text: "Une infrastructure cloud-native qui accélère le déploiement de nouvelles fonctionnalités et l'expérimentation agile."
      }
    ],
    deliverables: [
      "Diagrammes d'architecture et documentation technique",
      "Plan et feuille de route de migration",
      "Analyse d'optimisation des coûts",
      "Pipelines CI/CD de déploiement automatisé",
      "Infrastructure décrite sous forme de code (Terraform, ARM Templates)",
      "Configuration de la sécurité, des accès et de la conformité",
      "Plan de récupération d'urgence et haute disponibilité",
      "Documentation d'architecture et runbooks opérationnels"
    ],
    technologies: [
      'Microsoft Azure',
      'AWS',
      'Azure Data Factory',
      'Microsoft Fabric',
      'Databricks',
      'Terraform',
      'ARM Templates',
      'Kubernetes',
      'Storage services',
      'Networking & VPN',
      'Application Insights',
      'CI/CD & DevOps'
    ],
    process: [
      {
        title: 'Évaluation de readiness cloud',
        text: "Analyse complète de vos applications, données, infrastructure existante et compétences pour évaluer votre préparation à la transition cloud."
      },
      {
        title: 'Stratégie et conception architecturale',
        text: "Définition de votre stratégie cloud, conception de l'architecture résiliente et sécurisée selon vos exigences de performance, sécurité et coûts."
      },
      {
        title: 'Migration progressive et déploiement',
        text: "Migration par phases des applications et données, mise en place de pipelines CI/CD et automatisation des déploiements."
      },
      {
        title: 'Optimisation post-migration',
        text: "Tuning des ressources, optimisation des coûts, ajustement de la performance et validation de la résilience en production."
      },
      {
        title: 'Exploitation, monitoring et support',
        text: "Surveillance continue, alertes, gestion des incidents et optimisation permanente de l'architecture cloud."
      },
      {
        title: 'Évolution et transformation continue',
        text: "Accompagnement sur la modernisation des applications, adoption des services cloud avancés et amélioration continue."
      }
    ]
  }
];

export type ServiceLang = 'fr' | 'en';

export type ServiceTranslation = Omit<ServiceDetail, 'slug' | 'icon'>;

export const servicesEn: Record<string, ServiceTranslation> = {
  'developpement-logiciel': {
    title: 'Software Development',
    shortTitle: 'Custom Software',
    tagline: 'Custom applications designed around your business processes.',
    intro:
      "Every organization is unique. We design web and enterprise applications that adapt to your reality, not the other way around. Our agile and iterative approach gives you constant visibility into project progress. We follow best practices in architecture and security to deliver robust and long-lasting solutions.",
    desc: "We design custom web and enterprise applications aligned with your business processes. Using modern technologies such as React, TypeScript, Node.js and .NET, we deliver robust, high-performing and scalable solutions. Our expertise spans the entire lifecycle: from architectural design to production, including automated deployment and continuous monitoring. We ensure security, performance optimization and long-term maintainability.",
    points: [
      "Web applications (React / TypeScript)",
      "Back-end APIs & services (Node.js, .NET / C#)",
      "Integration of systems and third-party APIs",
      "Legacy code modernization",
      "Performance optimization",
      "Security & compliance",
      "CI/CD deployment"
    ],
    benefits: [
      {
        title: 'Alignment with your processes',
        text: "A solution built around the way you work, for easy adoption by your teams."
      },
      {
        title: 'Robustness and scalability',
        text: "A clean architecture and proven practices that let the application grow with your needs."
      },
      {
        title: 'Iterative delivery',
        text: "Short cycles and regular demos to validate each step and adjust quickly."
      },
      {
        title: 'Operability & monitoring',
        text: "A turn-key application with built-in monitoring, alerts and production dashboards."
      },
      {
        title: 'Time-to-market',
        text: "Automated deployment and continuous updates that let you respond quickly to market demands."
      }
    ],
    deliverables: [
      "Web or enterprise application ready to deploy",
      "Documented APIs and back-end services",
      "Integrations with your existing systems",
      "Test suites and technical documentation",
      "Knowledge transfer to your teams",
      "User training documentation",
      "CI/CD pipeline setup",
      "Monitoring & alerting configuration"
    ],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      '.NET / C#',
      'Visual Studio',
      'Agile Scrum / Kanban',
      'Jira'
    ],
    process: [
      {
        title: 'Requirements scoping',
        text: "Workshops with your teams to understand your processes and constraints and to set priorities."
      },
      {
        title: 'Design',
        text: "Definition of the architecture, mockups and functional breakdown of the solution."
      },
      {
        title: 'Iterative development',
        text: "Delivery in increments using Scrum or Kanban, with regular demos and feedback."
      },
      {
        title: 'Deployment and follow-up',
        text: "Go-live, training and support to ensure the solution keeps evolving."
      }
    ]
  },
  'business-intelligence': {
    title: 'Business Intelligence (BI)',
    shortTitle: 'Business Intelligence',
    tagline: 'Clear dashboards to make decisions with confidence.',
    intro:
      "Your data holds the answers to your strategic questions. We structure it and present it in interactive dashboards that tell a story. BI is not just about numbers—it's about democratizing access to information so every decision-maker, from the CEO to department heads, can act with confidence. We transform your raw data into actionable insights, presented clearly and accessibly to everyone.",
    desc: "Transform your raw data into enlightened decisions and concrete actions. We build robust data models and interactive dashboards, notably with Power BI, that give you a clear, strategic view of your organization. Our approach combines technical rigor with narrative clarity: every visualization is designed to quickly communicate the essential information. We also ensure solid data governance and continuous validation to guarantee you can trust your reports.",
    points: [
      "Interactive Power BI dashboards",
      "Advanced data modeling & DAX measures",
      "KPIs & strategic reporting",
      "Report automation and refresh",
      "Data quality & validation",
      "Predictive analytics and trend detection",
      "Mobile reports and self-service analytics"
    ],
    benefits: [
      {
        title: 'A unified view',
        text: "A common source of truth that eliminates discrepancies between the numbers of your different departments."
      },
      {
        title: 'Faster decisions',
        text: "Up-to-date, interactive indicators to spot trends and react without delay."
      },
      {
        title: 'Verified reliability',
        text: "Unit, integration and regression tests that ensure your reports stay accurate over time."
      },
      {
        title: 'Data democratization',
        text: "Each user has access to data relevant to their role, without depending on an intermediate BI team."
      },
      {
        title: 'Continuous accuracy verification',
        text: "Automated controls and built-in validations that detect and immediately flag anomalies."
      }
    ],
    deliverables: [
      "Interactive Power BI dashboards",
      "Optimized data model and advanced DAX measures",
      "Paginated and recurring reports",
      "Data validation test suites",
      "Data dictionaries & technical documentation",
      "End-user training materials",
      "Embedded reports for applications"
    ],
    technologies: [
      'Power BI',
      'DAX',
      'SSAS',
      'SSRS',
      'Microsoft Fabric',
      'Azure SQL Database',
      'Python & R',
      'Excel data models',
      'Unit testing',
      'Integration testing',
      'Regression testing',
      'Testing frameworks'
    ],
    process: [
      {
        title: 'Defining indicators',
        text: "Identifying the business questions and KPIs that truly matter to your organization."
      },
      {
        title: 'Data discovery workshop',
        text: "Exploring your sources, understanding volumes, quality and dependencies within your data."
      },
      {
        title: 'Data modeling',
        text: "Building a consistent, high-performing and maintainable data model suited to analysis."
      },
      {
        title: 'Report creation and storytelling',
        text: "Designing clear, interactive dashboards that quickly communicate your insights, validated with your users."
      },
      {
        title: 'Change management & adoption',
        text: "Training, user support and guidance to ensure successful adoption and growing usage over time."
      },
      {
        title: 'Validation and continuous evolution',
        text: "Quality testing, go-live, automated refresh, performance monitoring and regular adjustments."
      }
    ]
  },
  'data-engineering': {
    title: 'Data Engineering',
    shortTitle: 'Data Engineering',
    tagline: 'Reliable, automated and secure data flows.',
    intro:
      "Good analysis starts with good data. We design the warehouses and pipelines that collect, transform and centralize your information while respecting governance and compliance standards. You get a solid, auditable and sustainable foundation for BI, analytics and artificial intelligence.",
    desc: "We build a data infrastructure that moves your information reliably, governed and compliant. Our automated ETL pipelines, designed with SQL, Python and modern tools like Kafka and Apache Airflow, guarantee integrity, traceability, continuous quality and data availability. We ensure robust governance with data lineage, metadata catalogs, and real-time quality dashboards for a complete view of your data infrastructure.",
    points: [
      "Data warehouses",
      "Automated ETL pipelines & real-time streaming (SQL, Python)",
      "Data quality and governance",
      "SQL database optimization",
      "Data governance & lineage",
      "Real-time streaming pipelines",
      "Continuous data quality monitoring"
    ],
    benefits: [
      {
        title: 'Certified data quality',
        text: "Built-in checks and validation rules to guarantee consistency and traceability of your information."
      },
      {
        title: 'Complete and reliable automation',
        text: "Scheduled and orchestrated processes that reduce manual handling and the risk of errors."
      },
      {
        title: 'Scalable performance and capacity',
        text: "Optimized queries and structures to handle large volumes of data in real-time."
      },
      {
        title: 'Scalable infrastructure for growth',
        text: "An architecture designed to evolve with your needs, without bottlenecks or performance degradation."
      },
      {
        title: 'Regulatory compliance & audit trails',
        text: "Strict governance with audit documentation, full traceability and compliance with regulatory standards."
      }
    ],
    deliverables: [
      "Structured and optimized data warehouse",
      "Automated, scheduled and orchestrated ETL pipelines",
      "Real-time streaming pipelines (Kafka, Airflow)",
      "Optimized SQL procedures and queries",
      "Data quality and governance rules",
      "Data catalogs & metadata management",
      "Data quality monitoring dashboards",
      "Documentation of flows, data models and operational runbooks",
      "Audit trails and compliance traces"
    ],
    technologies: [
      'SSIS',
      'T-SQL',
      'SQL Server',
      'Azure Data Factory',
      'Python',
      'Spark',
      'Kafka',
      'dbt',
      'Great Expectations',
      'Apache Airflow',
      'Databricks',
      'Denodo'
    ],
    process: [
      {
        title: 'Source inventory and assessment',
        text: "Complete mapping of your data sources, their quality and constraints."
      },
      {
        title: 'Data profiling & assessment',
        text: "In-depth analysis of existing data to identify patterns, anomalies and cleaning needs."
      },
      {
        title: 'Flow architecture and design',
        text: "Designing the warehouse, ETL pipelines and streaming flows suited to your volumes and compliance needs."
      },
      {
        title: 'Development, testing and validation',
        text: "Implementing the processes with validation of data integrity, quality and traceability."
      },
      {
        title: 'Performance tuning & optimization',
        text: "Tuning queries, optimizing indexes and flows to ensure consistent production performance."
      },
      {
        title: 'Operations, monitoring and evolution',
        text: "Continuous monitoring, quality alerts, performance adjustments and flow evolution as your needs change."
      }
    ]
  },
  'support-ti-securite': {
    title: 'IT Support & Security',
    shortTitle: 'IT Support & Security',
    tagline: 'A stable, protected and well-maintained infrastructure.',
    intro:
      "Reduce risks, ensure continuity, maintain compliance: that's the mission of modern IT support. We manage your infrastructure 24/7, anticipating threats and guaranteeing system availability. Our certified teams apply best practices in security and regulatory compliance, while keeping your IT budget predictable and controlled.",
    desc: "We build a comprehensive IT support and security strategy, 24/7: proactive infrastructure management, protection against advanced cyber threats, continuous regulatory compliance and reliable assistance. With a certified team and modern tools (Azure, Intune, Microsoft Defender, SIEM), we reduce incident risk, ensure business continuity and maintain the trust of your customers and partners. Every action is documented for audit and traceability.",
    points: [
      "Proactive IT fleet management and maintenance",
      "Advanced cybersecurity & firewall configuration",
      "Backup & disaster recovery and continuity planning",
      "24/7 user assistance",
      "Patch management and updates",
      "Regulatory compliance & security audits",
      "24/7 proactive monitoring and incident response"
    ],
    benefits: [
      {
        title: 'Reduced security risk',
        text: "24/7 monitoring and preventive measures that detect and block threats before they cause damage."
      },
      {
        title: 'Assured continuity',
        text: "Reliable backups, tested recovery plans and automatic failover to guarantee no interruption."
      },
      {
        title: 'Regulatory compliance assured',
        text: "Continuous compliance with standards (ISO, GDPR, etc.), regular audits and complete documentation for certification."
      },
      {
        title: 'Regulatory compliance and audit-ready',
        text: "Complete traceability, automated audit logs and compliance reports to pass inspections stress-free."
      },
      {
        title: 'Predictable IT budget',
        text: "A transparent and stable cost model with no surprises, for reliable IT expense planning."
      }
    ],
    deliverables: [
      "Security audit and risk assessment",
      "Preventive maintenance plan and schedule",
      "Optimized security and firewall configuration",
      "Backup, recovery and continuity plan",
      "24/7 user assistance service",
      "SLA agreements & incident response plans",
      "Regular security risk assessments",
      "Backup validation & disaster recovery testing"
    ],
    technologies: [
      'Windows Server',
      'Office 365',
      'Exchange',
      'SharePoint',
      'Microsoft Teams',
      'Azure',
      'Microsoft Intune',
      'Microsoft Defender',
      'ForcePoint',
      'SIEM (Security Information & Event Management)',
      'MDR (Managed Detection & Response)',
      'Automated Patch Management'
    ],
    process: [
      {
        title: 'Audit of the current state',
        text: "In-depth assessment of your fleet, configurations, security risks and regulatory compliance."
      },
      {
        title: 'Security and compliance assessment',
        text: "Detailed analysis of security exposures and verification of compliance with applicable regulatory standards."
      },
      {
        title: 'Strategic action plan',
        text: "Define priorities for upgrades, protection, maintenance and compliance with a realistic timeline."
      },
      {
        title: 'Implementation and deployment',
        text: "Apply fixes, configure advanced security, deploy backups and integrate monitoring."
      },
      {
        title: 'Continuous monitoring and incident response',
        text: "24/7 monitoring with automatic alerts, rapid escalation and documented, traceable incident response."
      },
      {
        title: 'Evolution, ongoing support and audits',
        text: "User assistance, regular reviews, disaster recovery plan testing and periodic compliance audits."
      }
    ]
  },
  'automatisation-ia': {
    title: 'Automation & AI',
    shortTitle: 'AI Automation',
    tagline: 'Artificial intelligence at the service of your efficiency.',
    intro:
      "Repetitive tasks hold back your teams and impact your competitiveness. We automate your critical processes and integrate machine learning to transform your operational efficiency. Our solutions deliver concrete ROI: reduced management costs, improved data quality and reclaimed time for your teams. With AI and automation, you gain a lasting competitive advantage.",
    desc: "Transform your operational efficiency through artificial intelligence and intelligent automation. We design robust automation solutions and machine learning models that integrate seamlessly with your business ecosystem. From intelligent document recognition to optimization algorithms and complex workflow automation, we free your teams from repetitive tasks and guide them toward value creation. Our approach rigorously combines PoC to quickly validate ROI, continuous monitoring to ensure production performance, and adoption support for lasting success.",
    points: [
      "Machine learning and neural networks with Python",
      "Business process automation and RPA workflows",
      "Document intelligence and intelligent recognition",
      "Predictive analytics and anomaly detection",
      "Optimization algorithms and intelligent planning",
      "Integration with your existing business systems",
      "Chatbots and conversational intelligent assistants"
    ],
    benefits: [
      {
        title: 'Measurable ROI and efficiency gains',
        text: "Direct reduction in operating costs and processing time, with quantified and lasting results."
      },
      {
        title: 'Scalable automation',
        text: "Solutions designed to grow with your activity volume, without proportional increases in operating costs."
      },
      {
        title: 'Competitive advantage',
        text: "Faster and more accurate processes than your competitors, letting you react more quickly to market opportunities."
      },
      {
        title: 'Reliability and reproducibility',
        text: "Processes executed consistently and reliably, without manual handling errors, with guaranteed compliance."
      },
      {
        title: 'Anticipation and intelligent decision-making',
        text: "Predictive models that detect trends, identify risks and help you make smarter decisions."
      }
    ],
    deliverables: [
      "Fully automated processes and workflows",
      "Trained and validated machine learning models",
      "AI agents and intelligent assistants in production",
      "Performance dashboards and impact metrics",
      "Automation runbooks and operational documentation",
      "Training materials and adoption support",
      "Integrations with your existing systems (ERP, CRM, etc.)"
    ],
    technologies: [
      'Python',
      'TensorFlow & PyTorch',
      'Scikit-learn',
      'Azure Machine Learning',
      'Power Automate',
      'RPA (Robotic Process Automation)',
      'Azure Cognitive Services',
      'MLflow & Model Management',
      'AI Agents',
      'Machine Learning',
      'Predictive Analytics',
      'APIs & business integrations'
    ],
    process: [
      {
        title: 'Use case identification and scoping',
        text: "Spotting the processes and problems where automation or AI brings concrete and measurable value. Evaluation of potential ROI."
      },
      {
        title: 'Proof of Concept (PoC)',
        text: "Quick design and delivery of a prototype to validate your hypothesis, demonstrate feasibility and quantify ROI before full commitment."
      },
      {
        title: 'Data preparation and cleaning',
        text: "Collecting, analyzing, cleaning and structuring the data needed for the solution, with quality assurance."
      },
      {
        title: 'Model development, training and validation',
        text: "Designing the automation or AI model, rigorous training, performance testing and validation on real-world data."
      },
      {
        title: 'Integration and production deployment',
        text: "Seamless integration with your existing systems, gradual production rollout and monitoring configuration."
      },
      {
        title: 'Monitoring, continuous improvement and support',
        text: "Constant performance monitoring, model drift detection, adaptive retraining and long-term user support."
      }
    ]
  },
  'transformation-numerique': {
    title: 'Digital Transformation',
    shortTitle: 'Digital Transformation',
    tagline: 'Evolve your processes and tools with a clear roadmap.',
    intro:
      'A successful digital transformation starts with your business goals and the reality of your teams. We help you assess processes and systems, prioritize valuable changes and plan a gradual, measurable evolution suited to your organization.',
    desc:
      'We support your organization from initial assessment through adoption of new solutions. The work can include process mapping, identifying friction points, prioritizing initiatives, modernizing applications and data, automation, cloud integration and change management. Each step is grounded in concrete goals, clear governance and outcome measures.',
    points: [
      'Digital maturity assessment and needs analysis',
      'Business process mapping and optimization',
      'Roadmap development and initiative prioritization',
      'System modernization and integration',
      'Process automation and better use of data',
      'Security, governance and risk management',
      'Team enablement and change management',
    ],
    benefits: [
      {
        title: 'Clear priorities',
        text: 'A roadmap aligned with your goals, constraints and your teams’ actual capacity.',
      },
      {
        title: 'More efficient processes',
        text: 'Practical improvement opportunities that reduce manual work and simplify operations.',
      },
      {
        title: 'Controlled evolution',
        text: 'Gradual, measurable changes designed to work with your existing systems.',
      },
      {
        title: 'Stronger adoption',
        text: 'Support that helps teams understand, adopt and evolve new ways of working.',
      },
    ],
    deliverables: [
      'Assessment and mapping of processes and systems',
      'Analysis of needs, friction points and improvement opportunities',
      'Prioritized digital roadmap',
      'Architecture, integration and modernization recommendations',
      'Change-management and enablement plan',
      'Success measures and follow-up plan',
    ],
    technologies: [
      'Microsoft 365',
      'Microsoft Azure',
      'Microsoft Fabric',
      'Power BI',
      'Power Platform',
      'APIs and system integration',
      'Automation and AI',
      'Agile methods',
    ],
    process: [
      {
        title: 'Understand your current state',
        text: 'Meet stakeholders and assess processes, tools, data and business objectives.',
      },
      {
        title: 'Identify opportunities',
        text: 'Find friction points, risks and improvement opportunities, then assess their value and feasibility.',
      },
      {
        title: 'Build the roadmap',
        text: 'Define priorities, milestones, responsibilities and success measures.',
      },
      {
        title: 'Implement progressively',
        text: 'Deliver initiatives in stages, validate outcomes and integrate solutions with existing systems.',
      },
      {
        title: 'Enable and improve',
        text: 'Support teams, measure adoption and refine the approach based on observed results.',
      },
    ],
  },
  'architecture-cloud': {
    title: 'Cloud Architecture',
    shortTitle: 'Cloud Architecture',
    tagline: 'A high-performing, secure and well-managed cloud.',
    intro:
      "The cloud offers the agility and innovation your organization deserves. We design a cloud architecture that unlocks the potential of your applications and data, scaling them globally. With a solid strategy, reinforced security and continuous cost optimization, you transform infrastructure into a competitive advantage.",
    desc: "Migrate to the cloud with an architecture designed for global performance, security and cost control. We define your cloud strategy, deploy and secure your applications and data on Azure and AWS, then continuously optimize for scalability, resilience and efficiency. Our approach covers cloud readiness assessment, resilient architectural design, gradual migration, and long-term cost optimization.",
    points: [
      "Cloud migration (Azure / AWS)",
      "Automated deployment and CI/CD",
      "Infrastructure as Code & Terraform",
      "Cloud-native security",
      "Cost optimization strategies",
      "Disaster recovery and high availability",
      "Multi-region architecture"
    ],
    benefits: [
      {
        title: 'Suitable and global scalability',
        text: "Resources that adjust to your activity across multiple world regions to support growth and global demand."
      },
      {
        title: 'Controlled and optimized costs',
        text: "An architecture designed to optimize resource usage, identify savings and limit unnecessary spending."
      },
      {
        title: 'Reliable and fast deployments',
        text: "Automated CI/CD pipelines that make your releases fast, repeatable and risk-free."
      },
      {
        title: 'High availability and global reach',
        text: "A resilient architecture with automatic failover, multi-region redundancy and zero service interruption."
      },
      {
        title: 'Faster innovation cycles',
        text: "A cloud-native infrastructure that accelerates feature deployment and agile experimentation."
      }
    ],
    deliverables: [
      "Architecture diagrams and technical documentation",
      "Migration plan and roadmap",
      "Cost optimization analysis",
      "Automated deployment CI/CD pipelines",
      "Infrastructure described as code (Terraform, ARM Templates)",
      "Security, access and compliance configuration",
      "Disaster recovery and high availability plan",
      "Architecture documentation and operational runbooks"
    ],
    technologies: [
      'Microsoft Azure',
      'AWS',
      'Azure Data Factory',
      'Microsoft Fabric',
      'Databricks',
      'Terraform',
      'ARM Templates',
      'Kubernetes',
      'Storage services',
      'Networking & VPN',
      'Application Insights',
      'CI/CD & DevOps'
    ],
    process: [
      {
        title: 'Cloud readiness assessment',
        text: "Comprehensive analysis of your applications, data, existing infrastructure and skills to evaluate your cloud transition readiness."
      },
      {
        title: 'Strategy and architectural design',
        text: "Define your cloud strategy, design resilient and secure architecture meeting your performance, security and cost requirements."
      },
      {
        title: 'Gradual migration and deployment',
        text: "Phase-by-phase migration of applications and data, setup of CI/CD pipelines and deployment automation."
      },
      {
        title: 'Post-migration optimization',
        text: "Resource tuning, cost optimization, performance adjustment and resilience validation in production."
      },
      {
        title: 'Operations, monitoring and support',
        text: "Continuous monitoring, alerting, incident management and ongoing cloud architecture optimization."
      },
      {
        title: 'Evolution and continuous transformation',
        text: "Support for application modernization, adoption of advanced cloud services and continuous improvement."
      }
    ]
  }
};

export function localizeService(service: ServiceDetail, lang: ServiceLang = 'fr'): ServiceDetail {
  if (lang === 'fr') return service;
  const translation = servicesEn[service.slug];
  return translation ? { ...service, ...translation } : service;
}

export function getServices(lang: ServiceLang = 'fr'): ServiceDetail[] {
  return services.map((service) => localizeService(service, lang));
}

export function getServiceBySlug(slug?: string, lang: ServiceLang = 'fr'): ServiceDetail | undefined {
  if (!slug) return undefined;
  const service = services.find((s) => s.slug === slug);
  return service ? localizeService(service, lang) : undefined;
}
