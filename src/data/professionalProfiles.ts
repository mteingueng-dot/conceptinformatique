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
  examples: string[];
  features: string[];
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
    examples: [
      "Gestion de projets complexes multi-départements",
      "Migration de systèmes en production",
      "Résolution d'incidents critiques",
      "Optimisation d'infrastructures existantes",
    ],
    features: [
      "10+ ans d'expérience moyenne par consultant",
      "Portfolio diversifié de secteurs",
      "Gestion de budgets et ressources",
      "Leadership et gestion d'équipes",
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
    examples: [
      "Analyse d'impact avant les changements",
      "KPIs et dashboards de suivi",
      "A/B testing et expérimentation",
      "Reporting et business intelligence",
    ],
    features: [
      "Expertise en analyse et statistiques",
      "Outils d'analytics avancés",
      "Méthodologie de mesure rigoureuse",
      "Data visualization et insights clairs",
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
    examples: [
      "SLA garantis et respectés",
      "Monitoring 24/7 et alertes",
      "Plan de continuité et disaster recovery",
      "Certifications ISO et compliance",
    ],
    features: [
      "Architecture haute disponibilité",
      "Tests de performance rigoureux",
      "Processus de release sécurisé",
      "Documentation et procédures d'exploitation",
    ],
  },
];
