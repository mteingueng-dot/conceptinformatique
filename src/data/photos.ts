/*
 * Photos du site (banque Unsplash, licence libre d'usage commercial, sans attribution obligatoire).
 * Chaque photo existe en deux largeurs dans public/photos/ : <nom>-800.webp et <nom>-1600.webp (format 3:2).
 * Le texte alternatif est donné en français et en anglais.
 */

export type PhotoKey =
  | 'service-developpement-logiciel'
  | 'service-business-intelligence'
  | 'service-data-engineering'
  | 'service-support-ti-securite'
  | 'service-automatisation-ia'
  | 'service-transformation-numerique'
  | 'service-architecture-cloud'
  | 'expertise-business-intelligence'
  | 'expertise-ingenierie-de-donnees'
  | 'expertise-developpement-logiciel'
  | 'expertise-support-ti'
  | 'expertise-automatisation-ia'
  | 'expertise-transformation-numerique'
  | 'valeur-innovation'
  | 'valeur-rigueur'
  | 'valeur-expertise'
  | 'profil-experience-concrete'
  | 'profil-approche-axee-donnees'
  | 'profil-qualite-fiabilite'
  | 'equipe-collaboration'
  | 'equipe-atelier'
  | 'bureau-moderne'
  | 'bureau-lumineux'
  | 'reseau-mondial'
  | 'bureau-aire-ouverte'
  | 'espace-de-travail'
  | 'planification-projet'
  | 'sherbrooke-estrie';

export const photoAlt: Record<PhotoKey, { fr: string; en: string }> = {
  'service-developpement-logiciel': { fr: 'Écran d’ordinateur affichant du code source', en: 'Computer screen displaying source code' },
  'service-business-intelligence': { fr: 'Tableau de bord analytique sur un ordinateur portable', en: 'Analytics dashboard on a laptop' },
  'service-data-engineering': { fr: 'Allée d’une salle de serveurs dans un centre de données', en: 'Server room aisle in a data centre' },
  'service-support-ti-securite': { fr: 'Cadenas posé sur un clavier d’ordinateur, symbole de cybersécurité', en: 'Padlock on a computer keyboard, a symbol of cybersecurity' },
  'service-automatisation-ia': { fr: 'Représentation lumineuse d’un réseau neuronal d’intelligence artificielle', en: 'Glowing representation of an artificial intelligence neural network' },
  'service-transformation-numerique': { fr: 'Équipe en atelier de travail devant un tableau blanc', en: 'Team in a workshop in front of a whiteboard' },
  'service-architecture-cloud': { fr: 'Illustration 3D d’une infrastructure infonuagique', en: '3D illustration of a cloud infrastructure' },
  'expertise-business-intelligence': { fr: 'Ordinateur portable affichant des graphiques de performance', en: 'Laptop displaying performance charts' },
  'expertise-ingenierie-de-donnees': { fr: 'Baies de serveurs et câblage réseau', en: 'Server racks and network cabling' },
  'expertise-developpement-logiciel': { fr: 'Poste de développement avec du code à l’écran', en: 'Development workstation with code on screen' },
  'expertise-support-ti': { fr: 'Deux techniciens travaillant sur des ordinateurs', en: 'Two technicians working on computers' },
  'expertise-automatisation-ia': { fr: 'Cerveau stylisé en circuits électroniques', en: 'Stylized brain made of electronic circuits' },
  'expertise-transformation-numerique': { fr: 'Réunion d’équipe autour d’une table avec ordinateurs portables', en: 'Team meeting around a table with laptops' },
  'valeur-innovation': { fr: 'Circuit électronique lumineux en gros plan', en: 'Close-up of a glowing electronic circuit' },
  'valeur-rigueur': { fr: 'Code source affiché sur un écran', en: 'Source code displayed on a screen' },
  'valeur-expertise': { fr: 'Équipe qui collabore dans un bureau moderne', en: 'Team collaborating in a modern office' },
  'profil-experience-concrete': { fr: 'Professionnels qui prennent des notes pendant une réunion', en: 'Professionals taking notes during a meeting' },
  'profil-approche-axee-donnees': { fr: 'Ordinateur portable affichant un tableau de bord de données', en: 'Laptop displaying a data dashboard' },
  'profil-qualite-fiabilite': { fr: 'Gros plan sur du code Python à l’écran', en: 'Close-up of Python code on screen' },
  'equipe-collaboration': { fr: 'Équipe qui travaille ensemble sur des ordinateurs portables', en: 'Team working together on laptops' },
  'equipe-atelier': { fr: 'Équipe en séance de travail autour d’ordinateurs', en: 'Team in a working session around computers' },
  'bureau-moderne': { fr: 'Bureau moderne aux cloisons vitrées', en: 'Modern office with glass partitions' },
  'bureau-lumineux': { fr: 'Espace de travail lumineux et moderne', en: 'Bright, modern workspace' },
  'reseau-mondial': { fr: 'La Terre vue de l’espace la nuit, villes illuminées et connectées', en: 'Earth seen from space at night, with lit and connected cities' },
  'bureau-aire-ouverte': { fr: 'Bureau à aire ouverte avec postes de travail', en: 'Open-plan office with workstations' },
  'espace-de-travail': { fr: 'Grand espace de travail à aire ouverte', en: 'Large open-plan workspace' },
  'planification-projet': { fr: 'Planification d’un projet à côté d’un ordinateur portable', en: 'Planning a project next to a laptop' },
  'sherbrooke-estrie': { fr: 'Paysage de l’Estrie aux couleurs d’automne', en: 'Eastern Townships landscape in autumn colours' },
};

export const photoSrc = (key: PhotoKey, width: 800 | 1600 = 1600) => `/photos/${key}-${width}.webp`;

/** Photo de chaque service (même slug que src/data/services.ts). */
export const servicePhoto: Record<string, PhotoKey> = {
  'developpement-logiciel': 'service-developpement-logiciel',
  'business-intelligence': 'service-business-intelligence',
  'data-engineering': 'service-data-engineering',
  'support-ti-securite': 'service-support-ti-securite',
  'automatisation-ia': 'service-automatisation-ia',
  'transformation-numerique': 'service-transformation-numerique',
  'architecture-cloud': 'service-architecture-cloud',
};

/** Photo de la section « Les avantages » de chaque page de détail (différente de celle de l'en-tête). */
export const benefitPhoto: Record<'service' | 'value' | 'profile', Record<string, PhotoKey>> = {
  service: {
    'developpement-logiciel': 'expertise-developpement-logiciel',
    'business-intelligence': 'expertise-business-intelligence',
    'data-engineering': 'expertise-ingenierie-de-donnees',
    'support-ti-securite': 'expertise-support-ti',
    'automatisation-ia': 'expertise-automatisation-ia',
    'transformation-numerique': 'expertise-transformation-numerique',
    'architecture-cloud': 'reseau-mondial',
  },
  value: {
    innovation: 'reseau-mondial',
    rigueur: 'profil-qualite-fiabilite',
    expertise: 'equipe-collaboration',
  },
  profile: {
    'experience-concrete': 'equipe-atelier',
    'approche-axee-donnees': 'expertise-business-intelligence',
    'qualite-fiabilite': 'service-support-ti-securite',
  },
};

/** Photo de chaque expertise (src/data/expertise.ts). */
export const expertisePhoto: Record<string, PhotoKey> = {
  'business-intelligence': 'expertise-business-intelligence',
  'ingenierie-de-donnees': 'expertise-ingenierie-de-donnees',
  'developpement-logiciel': 'expertise-developpement-logiciel',
  'support-ti': 'expertise-support-ti',
  'automatisation-ia': 'expertise-automatisation-ia',
  'transformation-numerique': 'expertise-transformation-numerique',
};

/** Photo de chaque valeur (src/data/values.ts). */
export const valuePhoto: Record<string, PhotoKey> = {
  innovation: 'valeur-innovation',
  rigueur: 'valeur-rigueur',
  expertise: 'valeur-expertise',
};

/** Photo de chaque profil (src/data/professionalProfiles.ts). */
export const profilePhoto: Record<string, PhotoKey> = {
  'experience-concrete': 'profil-experience-concrete',
  'approche-axee-donnees': 'profil-approche-axee-donnees',
  'qualite-fiabilite': 'profil-qualite-fiabilite',
};
