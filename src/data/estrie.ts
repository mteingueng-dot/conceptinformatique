/*
 * Contenu de la page « Services informatiques en Estrie » (/services-informatiques-estrie/).
 * Partagé par la page et par les données structurées (FAQ) de src/seo/meta.ts.
 */

/** MRC et principales villes de l'Estrie (région administrative 05). */
export const ESTRIE_AREAS: { mrc: string; towns: string[] }[] = [
  { mrc: 'Sherbrooke', towns: ['Sherbrooke', 'Lennoxville', 'Fleurimont', 'Rock Forest', 'Brompton'] },
  { mrc: 'Memphrémagog', towns: ['Magog', 'Stanstead', 'North Hatley', 'Ayer’s Cliff'] },
  { mrc: 'Coaticook', towns: ['Coaticook', 'Compton', 'Waterville'] },
  { mrc: 'Le Val-Saint-François', towns: ['Windsor', 'Richmond', 'Valcourt'] },
  { mrc: 'Le Haut-Saint-François', towns: ['East Angus', 'Cookshire-Eaton', 'Weedon'] },
  { mrc: 'Les Sources', towns: ['Val-des-Sources', 'Danville'] },
  { mrc: 'Le Granit', towns: ['Lac-Mégantic', 'Nantes'] },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const ESTRIE_FAQ: { fr: FaqItem[]; en: FaqItem[] } = {
  fr: [
    {
      q: 'Servez-vous les entreprises de l’Estrie situées hors de Sherbrooke?',
      a: 'Oui. Établie à Sherbrooke, Concept Informatique accompagne les entreprises et les organisations de toute l’Estrie, de Magog à Lac-Mégantic et de Coaticook à Windsor, sur place ou à distance, ainsi que partout au Québec.',
    },
    {
      q: 'Quels services informatiques offrez-vous aux entreprises de l’Estrie?',
      a: 'Sept domaines complémentaires : développement logiciel sur mesure, intelligence d’affaires avec Power BI, ingénierie de données, soutien TI et cybersécurité, automatisation et intelligence artificielle, transformation numérique et architecture infonuagique sur Azure et AWS.',
    },
    {
      q: 'Travaillez-vous avec les PME?',
      a: 'Oui. Nous partons de vos besoins d’affaires et livrons par étapes courtes, ce qui convient aussi bien aux PME qu’aux grandes organisations. Une seule équipe s’occupe de votre projet, de l’analyse jusqu’au soutien après la mise en production.',
    },
    {
      q: 'Pouvez-vous moderniser un système ou des rapports existants?',
      a: 'Oui. Nous partons de ce que vous avez déjà (SQL Server, SSIS, rapports existants, fichiers Excel) et migrons par étapes vers des outils modernes comme Microsoft Fabric, Databricks et Power BI, sans interrompre vos opérations.',
    },
    {
      q: 'Offrez-vous un soutien informatique en continu?',
      a: 'Oui. Notre service de soutien TI et de sécurité comprend la surveillance de vos systèmes critiques 24 heures sur 24, 7 jours sur 7, la gestion proactive de votre infrastructure et une assistance fiable à vos utilisateurs.',
    },
    {
      q: 'Comment démarrer un projet avec Concept Informatique?',
      a: 'Écrivez-nous par le formulaire de contact ou appelez-nous au 514 712-0371. Nous prenons d’abord le temps de comprendre votre situation et vos objectifs, puis nous vous proposons une première piste concrète.',
    },
  ],
  en: [
    {
      q: 'Do you serve businesses in the Eastern Townships outside Sherbrooke?',
      a: 'Yes. Based in Sherbrooke, Concept Informatique works with businesses and organizations across the Eastern Townships (Estrie), from Magog to Lac-Mégantic and from Coaticook to Windsor, on site or remotely, as well as anywhere in Québec.',
    },
    {
      q: 'What IT services do you offer businesses in the Eastern Townships?',
      a: 'Seven complementary areas: custom software development, Power BI business intelligence, data engineering, IT support and cybersecurity, automation and artificial intelligence, digital transformation and cloud architecture on Azure and AWS.',
    },
    {
      q: 'Do you work with SMEs?',
      a: 'Yes. We start from your business needs and deliver in short stages, which suits SMEs as well as large organizations. A single team handles your project, from analysis to support after go-live.',
    },
    {
      q: 'Can you modernize an existing system or existing reports?',
      a: 'Yes. We start from what you already have (SQL Server, SSIS, existing reports, Excel files) and migrate in stages to modern tools such as Microsoft Fabric, Databricks and Power BI, without disrupting your operations.',
    },
    {
      q: 'Do you provide ongoing IT support?',
      a: 'Yes. Our IT support and security service includes 24/7 monitoring of your critical systems, proactive management of your infrastructure and reliable assistance for your users.',
    },
    {
      q: 'How do I start a project with Concept Informatique?',
      a: 'Write to us through the contact form or call us at 514-712-0371. We first take the time to understand your situation and goals, then propose a first, concrete direction.',
    },
  ],
};
