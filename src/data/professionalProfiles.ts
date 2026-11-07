import { Briefcase, TrendingUp, Shield } from "lucide-react";

export interface ProfessionalProfile {
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
  benefitsEn: string[];
  examples: string[];
  examplesEn: string[];
  features: string[];
  featuresEn: string[];
}

export const professionalProfiles: ProfessionalProfile[] = [
  {
    slug: "experience-concrete",
    title: {
      fr: "Expérience concrète",
      en: "Concrete Experience",
    },
    description: {
      fr: "Nos professionnels apportent une expérience pratique et directe du terrain. Des projets réels aux défis quotidiens, nous avons navigué les complexités et résolu des problèmes authentiques.",
      en: "Our professionals bring practical, hands-on field experience. From real projects to daily challenges, we have navigated complexities and solved authentic problems.",
    },
    tagline: {
      fr: "Du terrain à la solution",
      en: "From field to solution",
    },
    icon: Briefcase,
    benefits: [
      "Solutions basées sur des cas d'usage réels",
      "Compréhension profonde des défis métier",
      "Réduction du temps d'intégration",
      "Anticipation des problèmes courants",
    ],
    benefitsEn: [
      "Solutions based on real use cases",
      "Deep understanding of business challenges",
      "Shorter integration time",
      "Common problems anticipated",
    ],
    examples: [
      "Gestion de projets complexes multi-départements",
      "Migration de systèmes en production",
      "Résolution d'incidents critiques",
      "Optimisation d'infrastructures existantes",
    ],
    examplesEn: [
      "Complex, multi-department project management",
      "Migration of production systems",
      "Critical incident resolution",
      "Optimization of existing infrastructure",
    ],
    features: [
      "10+ ans d'expérience moyenne par consultant",
      "Portfolio diversifié de secteurs",
      "Gestion de budgets et ressources",
      "Leadership et gestion d'équipes",
    ],
    featuresEn: [
      "10+ years of average experience per consultant",
      "Diverse industry portfolio",
      "Budget and resource management",
      "Leadership and team management",
    ],
  },
  {
    slug: "approche-axee-donnees",
    title: {
      fr: "Approche axée sur les données",
      en: "Data-Driven Approach",
    },
    description: {
      fr: "Chaque décision s'appuie sur les données et les faits. Nous mesurons, analysons et optimisons pour transformer vos insights en actions concrètes et mesurables.",
      en: "Every decision is backed by data and facts. We measure, analyze and optimize to transform your insights into concrete and measurable actions.",
    },
    tagline: {
      fr: "Les faits avant les opinions",
      en: "Facts before opinions",
    },
    icon: TrendingUp,
    benefits: [
      "Décisions basées sur des métriques fiables",
      "Optimisation continue et mesurable",
      "ROI transparent et démontrable",
      "Réduction de l'incertitude et des risques",
    ],
    benefitsEn: [
      "Decisions based on reliable metrics",
      "Continuous, measurable optimization",
      "Transparent, demonstrable ROI",
      "Less uncertainty and risk",
    ],
    examples: [
      "Analyse d'impact avant les changements",
      "Indicateurs clés et tableaux de bord de suivi",
      "Tests A/B et expérimentation",
      "Reporting et business intelligence",
    ],
    examplesEn: [
      "Impact analysis before changes",
      "KPIs and tracking dashboards",
      "A/B testing and experimentation",
      "Reporting and business intelligence",
    ],
    features: [
      "Expertise en analyse et statistiques",
      "Outils d'analytics avancés",
      "Méthodologie de mesure rigoureuse",
      "Visualisation des données et constats clairs",
    ],
    featuresEn: [
      "Expertise in analysis and statistics",
      "Advanced analytics tools",
      "Rigorous measurement methodology",
      "Data visualization and clear insights",
    ],
  },
  {
    slug: "qualite-fiabilite",
    title: {
      fr: "Qualité et fiabilité",
      en: "Quality and Reliability",
    },
    description: {
      fr: "La fiabilité est notre signature. Nos solutions sont construites pour durer, performantes sous stress, et maintenues avec le plus haut niveau de support et de garantie.",
      en: "Reliability is our signature. Our solutions are built to last, performant under stress, and maintained with the highest level of support and warranty.",
    },
    tagline: {
      fr: "La stabilité que vous pouvez compter",
      en: "Stability you can count on",
    },
    icon: Shield,
    benefits: [
      "Disponibilité 99.9%+ garantie",
      "Support réactif et proactif",
      "Mises à jour et maintenance planifiées",
      "Sécurité et conformité intégrées",
    ],
    benefitsEn: [
      "Guaranteed 99.9%+ availability",
      "Responsive, proactive support",
      "Planned updates and maintenance",
      "Built-in security and compliance",
    ],
    examples: [
      "SLA garantis et respectés",
      "Monitoring 24/7 et alertes",
      "Plan de continuité et reprise après sinistre",
      "Certifications ISO et conformité",
    ],
    examplesEn: [
      "Guaranteed, honoured SLAs",
      "24/7 monitoring and alerts",
      "Business continuity and disaster recovery plan",
      "ISO certifications and compliance",
    ],
    features: [
      "Architecture haute disponibilité",
      "Tests de performance rigoureux",
      "Processus de mise en production sécurisé",
      "Documentation et procédures d'exploitation",
    ],
    featuresEn: [
      "High-availability architecture",
      "Rigorous performance testing",
      "Secure release process",
      "Operations documentation and procedures",
    ],
  },
];
