/*
 * Explication courte de chaque avantage des pages de valeurs et de profils.
 * Même ordre que les tableaux `benefits` / `benefitsEn` de values.ts et professionalProfiles.ts.
 */

type Lang = 'fr' | 'en';

const details: Record<string, Record<Lang, string[]>> = {
  // Valeurs
  innovation: {
    fr: [
      'Des architectures pensées pour durer et évoluer avec vos besoins, plutôt que des solutions à refaire dans deux ans.',
      'Notre équipe teste en continu les nouvelles technologies pour vous recommander seulement celles qui ont fait leurs preuves.',
      'Quand votre marché change, vos outils suivent : nous ajustons vos solutions rapidement, par petites étapes.',
      'Des prototypes rapides pour valider une idée avant d’investir, puis des améliorations mesurées après chaque livraison.',
    ],
    en: [
      'Architectures designed to last and evolve with your needs, rather than solutions to rebuild in two years.',
      'Our team continuously tests new technologies so we only recommend those that have proven themselves.',
      'When your market changes, your tools follow: we adjust your solutions quickly, in small steps.',
      'Fast prototypes to validate an idea before investing, then measured improvements after each delivery.',
    ],
  },
  rigueur: {
    fr: [
      'Un code lisible, revu par un pair et conforme aux bonnes pratiques, plus simple et moins coûteux à faire évoluer.',
      'Chaque livraison passe par des étapes de vérification et de validation avec vous avant la mise en production.',
      'Une documentation à jour, remise à vos équipes, pour ne jamais dépendre d’une seule personne.',
      'Des tests automatisés qui détectent les erreurs avant vos utilisateurs et sécurisent chaque mise à jour.',
    ],
    en: [
      'Readable, peer-reviewed code that follows best practices, simpler and less costly to evolve.',
      'Every delivery goes through verification and validation steps with you before going into production.',
      'Up-to-date documentation handed over to your teams, so you never depend on a single person.',
      'Automated tests that catch errors before your users do and secure every update.',
    ],
  },
  expertise: {
    fr: [
      'Des conseillers qui comptent de nombreuses années de projets concrets dans leur domaine.',
      'Des approches déjà éprouvées sur d’autres mandats, adaptées à votre contexte.',
      'L’expérience permet de repérer tôt les pièges courants et d’éviter des erreurs coûteuses.',
      'Nous transmettons nos connaissances à vos équipes pour qu’elles gagnent en autonomie.',
    ],
    en: [
      'Advisors with many years of hands-on projects in their field.',
      'Approaches already proven on other engagements, adapted to your context.',
      'Experience makes it possible to spot common pitfalls early and avoid costly mistakes.',
      'We pass our knowledge on to your teams so they become more self-sufficient.',
    ],
  },
  // Profils
  'experience-concrete': {
    fr: [
      'Nos recommandations s’appuient sur des situations vécues dans des projets réels, pas seulement sur la théorie.',
      'Nous parlons le langage de vos opérations et comprenons rapidement vos enjeux d’affaires.',
      'Moins de temps d’apprentissage au démarrage : l’équipe est productive dès les premières semaines.',
      'Les problèmes fréquents sont prévus dès la conception, avant qu’ils ne ralentissent le projet.',
    ],
    en: [
      'Our recommendations are based on situations experienced in real projects, not just theory.',
      'We speak the language of your operations and quickly understand your business challenges.',
      'Less ramp-up time at the start: the team is productive from the first weeks.',
      'Frequent problems are anticipated at the design stage, before they slow the project down.',
    ],
  },
  'approche-axee-donnees': {
    fr: [
      'Des indicateurs fiables et partagés remplacent les impressions et les fichiers contradictoires.',
      'Chaque amélioration est mesurée, pour savoir ce qui fonctionne et où investir ensuite.',
      'Les gains obtenus sont suivis et présentés clairement, pour justifier chaque décision.',
      'Des données à jour réduisent les zones grises et aident à anticiper plutôt qu’à réagir.',
    ],
    en: [
      'Reliable, shared indicators replace impressions and conflicting spreadsheets.',
      'Every improvement is measured, so you know what works and where to invest next.',
      'The gains achieved are tracked and presented clearly to support each decision.',
      'Up-to-date data reduces grey areas and helps you anticipate rather than react.',
    ],
  },
  'qualite-fiabilite': {
    fr: [
      'Des systèmes surveillés et conçus pour rester disponibles quand vos équipes en ont besoin.',
      'Les incidents sont pris en charge rapidement, et la surveillance permet souvent de les éviter.',
      'Les mises à jour sont planifiées et communiquées à l’avance, pour ne pas perturber vos opérations.',
      'La sécurité et les exigences de conformité sont prises en compte dès la conception.',
    ],
    en: [
      'Monitored systems designed to remain available when your teams need them.',
      'Incidents are handled quickly, and monitoring often prevents them altogether.',
      'Updates are planned and announced in advance so they do not disrupt your operations.',
      'Security and compliance requirements are built in from the design stage.',
    ],
  },
};

export function getBenefitDetails(slug: string, lang: Lang): string[] {
  return details[slug]?.[lang] ?? [];
}
