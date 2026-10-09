import { Lightbulb, Gauge, Zap } from "lucide-react";

export interface Value {
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

export const values: Value[] = [
  {
    slug: "innovation",
    title: {
      fr: "Innovation",
      en: "Innovation",
    },
    description: {
      fr: "Nous repoussons les limites de ce qui est possible. L'innovation est au cœur de nos solutions, nous aidant à créer des technologies de pointe qui transforment les industries.",
      en: "We push the boundaries of what's possible. Innovation is at the heart of our solutions, helping us create cutting-edge technologies that transform industries.",
    },
    tagline: {
      fr: "Créer le futur, aujourd'hui",
      en: "Creating the future, today",
    },
    icon: Lightbulb,
    benefits: [
      "Solutions avant-gardistes et futures-proof",
      "Recherche et développement continus",
      "Adaptation rapide aux tendances du marché",
      "Expérimentation et amélioration continue",
    ],
    examples: [
      "Adoption précoce des nouvelles technologies",
      "Prototypage et innovation agile",
      "Partenariats avec les leaders technologiques",
      "Hackathons et projets exploratoires",
    ],
    features: [
      "R&D interne structuré",
      "Veille technologique permanente",
      "Culture d'expérimentation",
      "Investissement en talents innovants",
    ],
  },
  {
    slug: "rigueur",
    title: {
      fr: "Rigueur",
      en: "Rigor",
    },
    description: {
      fr: "Précision et excellence dans chaque détail. La rigueur guide notre approche méthodique pour garantir que chaque solution répond aux plus hauts standards de qualité.",
      en: "Precision and excellence in every detail. Rigor guides our methodical approach to ensure every solution meets the highest quality standards.",
    },
    tagline: {
      fr: "L'excellence par la précision",
      en: "Excellence through precision",
    },
    icon: Gauge,
    benefits: [
      "Qualité de code exceptionnelle",
      "Processus de validation stricts",
      "Documentation complète et maintenable",
      "Tests exhaustifs et automatisés",
    ],
    examples: [
      "Revues de code systématiques",
      "Certification et conformité audits",
      "Tests de performance et sécurité",
      "Documentation technique et procédures",
    ],
    features: [
      "Méthodologies éprouvées",
      "Gestion de la qualité rigoureuse",
      "Respect des normes et standards",
      "Traçabilité complète des opérations",
    ],
  },
  {
    slug: "expertise",
    title: {
      fr: "Expertise",
      en: "Expertise",
    },
    description: {
      fr: "Connaissance profonde et expérience inégalée. Notre équipe d'experts possède des décennies d'expérience combinée dans les technologies les plus critiques et complexes.",
      en: "Deep knowledge and unmatched experience. Our expert team possesses decades of combined experience in the most critical and complex technologies.",
    },
    tagline: {
      fr: "Savoir-faire qui fait la différence",
      en: "Knowledge that makes the difference",
    },
    icon: Zap,
    benefits: [
      "Conseillers expérimentés et reconnus",
      "Solutions optimisées et éprouvées",
      "Réduction des risques et erreurs",
      "Mentorat et transfert de connaissances",
    ],
    examples: [
      "Architectures résolvant des défis complexes",
      "Optimisations basées sur l'expérience",
      "Formation et transfert technologique",
      "Leadership sur les sujets spécialisés",
    ],
    features: [
      "Certifications et accréditations industry",
      "Partenariats avec les éditeurs majeurs",
      "Publications et thought leadership",
      "Communautés professionnelles actives",
    ],
  },
];
