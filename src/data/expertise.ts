import {
  BarChart3,
  Zap,
  Code2,
  HeadsetIcon,
  Brain,
  RefreshCw,
} from "lucide-react";

export interface Expertise {
  slug: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  tagline: {
    fr: string;
    en: string;
  };
  icon: React.ComponentType<{ className?: string }>;
  benefits: string[];
  examples: string[];
  technologies: string[];
}

export const expertises: Expertise[] = [
  {
    slug: "business-intelligence",
    title: {
      fr: "Business Intelligence",
      en: "Business Intelligence",
    },
    description: {
      fr: "Transformation de vos données en insights stratégiques. Nous analysons vos informations complexes pour révéler des opportunités de croissance et optimiser vos décisions métier.",
      en: "Transform your data into strategic insights. We analyze your complex information to reveal growth opportunities and optimize your business decisions.",
    },
    tagline: {
      fr: "Vos données, votre avantage compétitif",
      en: "Your data, your competitive advantage",
    },
    icon: BarChart3,
    benefits: [
      "Tableaux de bord interactifs et temps réel",
      "Rapports stratégiques personnalisés",
      "Analyse prédictive et forecasting",
      "Optimisation des performances métier",
    ],
    examples: [
      "Dashboards de ventes et KPIs",
      "Analyse de la rentabilité client",
      "Segmentation de marché",
      "Prévisions de demande",
    ],
    technologies: [
      "Power BI",
      "Tableau",
      "Looker",
      "SQL",
      "Python",
      "Apache Spark",
    ],
  },
  {
    slug: "ingenierie-de-donnees",
    title: {
      fr: "Data Engineering",
      en: "Data Engineering",
    },
    description: {
      fr: "Architecture et optimisation des pipelines de données. Nous construisons des infrastructures robustes et scalables pour gérer vos données à grande échelle.",
      en: "Architecture and optimization of data pipelines. We build robust and scalable infrastructures to manage your data at scale.",
    },
    tagline: {
      fr: "Fondations solides pour vos données massives",
      en: "Strong foundations for your big data",
    },
    icon: Zap,
    benefits: [
      "ETL et pipelines automatisés",
      "Stockage optimisé et performant",
      "Scalabilité et haute disponibilité",
      "Qualité et intégrité des données",
    ],
    examples: [
      "Pipelines ETL end-to-end",
      "Data lakes et warehouses",
      "Streaming et données en temps réel",
      "Migration et consolidation de données",
    ],
    technologies: [
      "Apache Airflow",
      "Kafka",
      "Spark",
      "Snowflake",
      "BigQuery",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    slug: "developpement-logiciel",
    title: {
      fr: "Développement logiciel",
      en: "Software Development",
    },
    description: {
      fr: "Solutions logicielles sur mesure pour vos besoins spécifiques. Du concept à la production, nous créons des applications fiables, performantes et évolutives.",
      en: "Custom software solutions for your specific needs. From concept to production, we create reliable, performant and scalable applications.",
    },
    tagline: {
      fr: "De vos idées au code production",
      en: "From your ideas to production code",
    },
    icon: Code2,
    benefits: [
      "Applications web et mobile modernes",
      "Architecture scalable et maintenable",
      "Performance et sécurité optimisées",
      "Support et maintenance long terme",
    ],
    examples: [
      "Portails et applications web",
      "APIs RESTful et GraphQL",
      "Applications mobiles iOS/Android",
      "Systèmes legacy et migrations",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "Java",
      "Next.js",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    slug: "support-ti",
    title: {
      fr: "Support TI",
      en: "IT Support",
    },
    description: {
      fr: "Support technique 24/7 et gestion proactive de votre infrastructure IT. Nous assurons la continuité de vos opérations avec des services de support réactifs et fiables.",
      en: "24/7 technical support and proactive IT infrastructure management. We ensure business continuity with responsive and reliable support services.",
    },
    tagline: {
      fr: "Votre tranquillité d'esprit technologique",
      en: "Your IT peace of mind",
    },
    icon: HeadsetIcon,
    benefits: [
      "Support technique réactif et efficace",
      "Monitoring et gestion proactive",
      "Gestion des incidents et problèmes",
      "Optimisation des coûts IT",
    ],
    examples: [
      "Help desk et ticketing",
      "Monitoring système et réseau",
      "Gestion des serveurs",
      "Sécurité IT et mises à jour",
    ],
    technologies: [
      "Windows Server",
      "Linux",
      "Active Directory",
      "Nagios",
      "Zabbix",
      "ServiceNow",
    ],
  },
  {
    slug: "automatisation-ia",
    title: {
      fr: "Automatisation IA",
      en: "AI Automation",
    },
    description: {
      fr: "Intégration intelligente de l'IA pour automatiser vos processus. Nous déployons des solutions basées sur le machine learning pour améliorer l'efficacité et réduire les coûts opérationnels.",
      en: "Intelligent AI integration to automate your processes. We deploy machine learning solutions to improve efficiency and reduce operational costs.",
    },
    tagline: {
      fr: "L'intelligence au service de vos opérations",
      en: "Intelligence powering your operations",
    },
    icon: Brain,
    benefits: [
      "Automatisation intelligente de processus",
      "Machine learning personnalisé",
      "Réduction des tâches manuelles",
      "Amélioration continue par IA",
    ],
    examples: [
      "RPA et automatisation de workflows",
      "Classification et NLP",
      "Prévisions et recommandations",
      "Chatbots et assistants virtuels",
    ],
    technologies: [
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "Hugging Face",
      "Python",
      "UiPath",
      "Blue Prism",
    ],
  },
  {
    slug: "transformation-numerique",
    title: {
      fr: "Transformation numérique",
      en: "Digital Transformation",
    },
    description: {
      fr: "Accompagnement complet de votre transformation digitale. Nous vous guidons à travers chaque étape pour moderniser vos processus, cultures et technologies.",
      en: "Complete support for your digital transformation. We guide you through every step to modernize your processes, culture and technologies.",
    },
    tagline: {
      fr: "Votre partenaire du changement digital",
      en: "Your digital change partner",
    },
    icon: RefreshCw,
    benefits: [
      "Stratégie digitale alignée avec vos objectifs",
      "Modernisation progressive des systèmes",
      "Adoption et change management",
      "ROI mesurable et transparent",
    ],
    examples: [
      "Audit et stratégie digitale",
      "Migration vers le cloud",
      "Réingénierie des processus",
      "Culture et formation digitale",
    ],
    technologies: [
      "Cloud (AWS, Azure, GCP)",
      "DevOps et CI/CD",
      "Microservices",
      "APIs modernes",
      "Agile",
      "Low-code platforms",
    ],
  },
];
