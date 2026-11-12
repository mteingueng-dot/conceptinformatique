/*
 * Contenu complémentaire des pages de service : cas d'usage typiques et questions fréquentes.
 * Clé = slug du service (src/data/services.ts). Chaque texte existe en français et en anglais.
 */

export type ServiceExtra = {
  useCases: { title: string; text: string }[];
  faq: { q: string; a: string }[];
};

type Lang = 'fr' | 'en';

const extras: Record<string, Record<Lang, ServiceExtra>> = {
  'developpement-logiciel': {
    fr: {
      useCases: [
        { title: 'Remplacer un fichier Excel critique', text: 'Une application web sécurisée, multi-utilisateurs, remplace le classeur partagé qui gérait vos commandes, vos inventaires ou vos inspections.' },
        { title: 'Portail client ou employé', text: 'Un espace en ligne où vos clients suivent leurs dossiers et où vos équipes saisissent l’information une seule fois.' },
        { title: 'Relier vos systèmes', text: 'Des API et des connecteurs qui font circuler les données entre votre ERP, votre CRM, votre comptabilité et vos outils métier.' },
      ],
      faq: [
        { q: 'Faut-il un cahier des charges complet avant de commencer ?', a: 'Non. Nous partons de vos besoins d’affaires, les précisons avec vous lors d’ateliers courts, puis livrons par étapes. Vous voyez une première version fonctionnelle tôt et ajustez en cours de route.' },
        { q: 'Qui est propriétaire du code ?', a: 'Le logiciel conçu pour vous vous appartient. Le code source, la documentation et les accès vous sont remis.' },
        { q: 'Que se passe-t-il après la mise en production ?', a: 'Nous restons disponibles pour la correction et l’évolution de l’application, selon l’entente qui vous convient.' },
      ],
    },
    en: {
      useCases: [
        { title: 'Replace a critical Excel file', text: 'A secure, multi-user web application replaces the shared workbook that ran your orders, inventory or inspections.' },
        { title: 'Customer or employee portal', text: 'An online space where your customers follow their files and your teams enter information only once.' },
        { title: 'Connect your systems', text: 'APIs and connectors that move data between your ERP, CRM, accounting and business tools.' },
      ],
      faq: [
        { q: 'Do we need complete specifications before starting?', a: 'No. We start from your business needs, refine them with you in short workshops, then deliver in stages. You see a first working version early and adjust along the way.' },
        { q: 'Who owns the code?', a: 'The software built for you belongs to you. The source code, documentation and access are handed over to you.' },
        { q: 'What happens after go-live?', a: 'We remain available for fixes and enhancements to the application, under the arrangement that suits you.' },
      ],
    },
  },
  'business-intelligence': {
    fr: {
      useCases: [
        { title: 'Tableau de bord de direction', text: 'Ventes, marges, trésorerie et indicateurs clés réunis dans un seul rapport Power BI, à jour chaque matin.' },
        { title: 'Fin des rapports manuels', text: 'Les rapports mensuels assemblés à la main dans Excel sont produits automatiquement, sans copier-coller.' },
        { title: 'Suivi des opérations', text: 'Production, inventaire, délais de livraison ou appels de service suivis au jour le jour par chaque équipe.' },
      ],
      faq: [
        { q: 'Nos données sont dispersées dans plusieurs systèmes. Est-ce un problème ?', a: 'C’est la situation la plus courante. Nous relions vos sources (ERP, comptabilité, fichiers, bases de données) et construisons un modèle de données unique sur lequel reposent vos rapports.' },
        { q: 'Faut-il des licences Power BI ?', a: 'Oui, selon le nombre de personnes qui consultent les rapports. Nous vous conseillons la formule la plus économique pour votre situation.' },
        { q: 'Nos équipes pourront-elles modifier les rapports ?', a: 'Oui. Nous formons vos utilisateurs et documentons le modèle pour qu’ils puissent créer leurs propres vues en toute autonomie.' },
      ],
    },
    en: {
      useCases: [
        { title: 'Executive dashboard', text: 'Sales, margins, cash flow and key indicators brought together in a single Power BI report, refreshed every morning.' },
        { title: 'No more manual reports', text: 'Monthly reports once assembled by hand in Excel are produced automatically, with no copy-pasting.' },
        { title: 'Operations tracking', text: 'Production, inventory, delivery times or service calls tracked day by day by each team.' },
      ],
      faq: [
        { q: 'Our data is spread across several systems. Is that a problem?', a: 'It is the most common situation. We connect your sources (ERP, accounting, files, databases) and build a single data model that your reports rely on.' },
        { q: 'Do we need Power BI licences?', a: 'Yes, depending on how many people view the reports. We recommend the most cost-effective option for your situation.' },
        { q: 'Will our teams be able to change the reports?', a: 'Yes. We train your users and document the model so they can build their own views independently.' },
      ],
    },
  },
  'data-engineering': {
    fr: {
      useCases: [
        { title: 'Entrepôt de données centralisé', text: 'Toutes vos données d’affaires réunies dans Microsoft Fabric, Azure ou Databricks, propres, historisées et gouvernées.' },
        { title: 'Pipelines automatisés', text: 'Des chargements planifiés et surveillés remplacent les extractions manuelles et les scripts fragiles.' },
        { title: 'Données en temps réel', text: 'Des flux continus pour suivre des capteurs, des transactions ou des événements à la seconde près.' },
      ],
      faq: [
        { q: 'Quelle différence avec l’intelligence d’affaires ?', a: 'L’ingénierie de données construit les fondations : collecte, nettoyage, stockage et qualité des données. L’intelligence d’affaires les met ensuite en valeur dans des rapports et des tableaux de bord.' },
        { q: 'Faut-il migrer toutes nos données d’un coup ?', a: 'Non. Nous commençons par les sources qui ont le plus de valeur et ajoutons les autres par étapes, sans interrompre vos opérations.' },
        { q: 'Comment la qualité des données est-elle assurée ?', a: 'Chaque pipeline comprend des contrôles automatiques (complétude, doublons, cohérence) et des alertes en cas d’anomalie.' },
      ],
    },
    en: {
      useCases: [
        { title: 'Centralized data warehouse', text: 'All your business data brought together in Microsoft Fabric, Azure or Databricks: clean, historized and governed.' },
        { title: 'Automated pipelines', text: 'Scheduled, monitored loads replace manual extractions and fragile scripts.' },
        { title: 'Real-time data', text: 'Continuous streams to track sensors, transactions or events to the second.' },
      ],
      faq: [
        { q: 'How is this different from business intelligence?', a: 'Data engineering builds the foundations: collecting, cleaning, storing and ensuring the quality of data. Business intelligence then turns it into reports and dashboards.' },
        { q: 'Do we need to migrate all our data at once?', a: 'No. We start with the most valuable sources and add the others in stages, without interrupting your operations.' },
        { q: 'How is data quality ensured?', a: 'Every pipeline includes automatic checks (completeness, duplicates, consistency) and alerts when something looks wrong.' },
      ],
    },
  },
  'support-ti-securite': {
    fr: {
      useCases: [
        { title: 'Soutien informatique au quotidien', text: 'Un point de contact unique pour vos postes, vos comptes Microsoft 365, vos imprimantes et votre réseau.' },
        { title: 'Sauvegardes et reprise', text: 'Des copies de sécurité automatiques, testées régulièrement, pour repartir rapidement après une panne ou une attaque.' },
        { title: 'Renforcement de la sécurité', text: 'Authentification multifacteur, mises à jour, protection des postes et sensibilisation des employés à l’hameçonnage.' },
      ],
      faq: [
        { q: 'Intervenez-vous sur place ?', a: 'Oui, à Sherbrooke et en Estrie. La plupart des demandes sont toutefois réglées à distance, ce qui est plus rapide pour vous.' },
        { q: 'Par où commencer en cybersécurité ?', a: 'Par un portrait de votre environnement : comptes, sauvegardes, mises à jour et accès. Nous en tirons une liste de mesures prioritaires, classées selon le risque et le coût.' },
        { q: 'Notre entreprise est petite. Est-ce vraiment nécessaire ?', a: 'Les PME sont des cibles fréquentes, justement parce qu’elles sont moins protégées. Quelques mesures simples réduisent déjà fortement le risque.' },
      ],
    },
    en: {
      useCases: [
        { title: 'Day-to-day IT support', text: 'A single point of contact for your workstations, Microsoft 365 accounts, printers and network.' },
        { title: 'Backups and recovery', text: 'Automatic, regularly tested backups so you can get back on your feet quickly after an outage or an attack.' },
        { title: 'Stronger security', text: 'Multi-factor authentication, updates, endpoint protection and phishing awareness for employees.' },
      ],
      faq: [
        { q: 'Do you work on site?', a: 'Yes, in Sherbrooke and the Eastern Townships. Most requests are, however, resolved remotely, which is faster for you.' },
        { q: 'Where should we start with cybersecurity?', a: 'With a picture of your environment: accounts, backups, updates and access. From it we draw a list of priority measures, ranked by risk and cost.' },
        { q: 'We are a small business. Is this really necessary?', a: 'SMEs are frequent targets precisely because they are less protected. A few simple measures already greatly reduce the risk.' },
      ],
    },
  },
  'automatisation-ia': {
    fr: {
      useCases: [
        { title: 'Traitement automatique de documents', text: 'Factures, bons de commande ou formulaires lus et saisis automatiquement dans vos systèmes.' },
        { title: 'Assistant IA sur vos documents', text: 'Un assistant qui répond aux questions de vos équipes à partir de vos procédures, contrats et guides internes.' },
        { title: 'Flux de travail automatisés', text: 'Approbations, relances et notifications déclenchées automatiquement avec Power Automate ou des agents IA.' },
      ],
      faq: [
        { q: 'Nos données restent-elles confidentielles ?', a: 'Oui. Nous utilisons des services d’IA d’entreprise (comme Azure OpenAI) configurés pour que vos données ne servent pas à entraîner les modèles, et limitons l’accès aux seules personnes autorisées.' },
        { q: 'Comment choisir quoi automatiser en premier ?', a: 'Nous repérons avec vous les tâches répétitives qui prennent le plus de temps ou causent le plus d’erreurs, puis commençons par celle qui offre le meilleur gain rapide.' },
        { q: 'L’IA remplace-t-elle nos employés ?', a: 'Elle les libère des tâches répétitives pour qu’ils se concentrent sur ce qui demande leur jugement. Une personne valide toujours les décisions importantes.' },
      ],
    },
    en: {
      useCases: [
        { title: 'Automatic document processing', text: 'Invoices, purchase orders or forms read and entered automatically into your systems.' },
        { title: 'AI assistant on your documents', text: 'An assistant that answers your teams’ questions from your procedures, contracts and internal guides.' },
        { title: 'Automated workflows', text: 'Approvals, reminders and notifications triggered automatically with Power Automate or AI agents.' },
      ],
      faq: [
        { q: 'Does our data stay confidential?', a: 'Yes. We use enterprise AI services (such as Azure OpenAI) configured so that your data is not used to train the models, and we restrict access to authorized people only.' },
        { q: 'How do we choose what to automate first?', a: 'Together we identify the repetitive tasks that take the most time or cause the most errors, then start with the one that offers the best quick win.' },
        { q: 'Does AI replace our employees?', a: 'It frees them from repetitive tasks so they can focus on work that needs their judgment. A person always validates important decisions.' },
      ],
    },
  },
  'transformation-numerique': {
    fr: {
      useCases: [
        { title: 'Feuille de route numérique', text: 'Un portrait de vos processus et de vos outils, puis un plan d’action priorisé sur 12 à 24 mois.' },
        { title: 'Choix et implantation d’un logiciel', text: 'Accompagnement neutre pour choisir un ERP, un CRM ou une solution métier, puis pour le déployer.' },
        { title: 'Passage au numérique', text: 'Formulaires papier, signatures et classement remplacés par des processus simples dans Microsoft 365.' },
      ],
      faq: [
        { q: 'Par où commence une transformation numérique ?', a: 'Par vos objectifs d’affaires, pas par la technologie. Nous rencontrons les personnes concernées, observons les processus actuels et repérons les irritants qui coûtent le plus.' },
        { q: 'Comment faire adopter les changements par les équipes ?', a: 'En les impliquant tôt, en livrant par petites étapes et en prévoyant de la formation et de l’accompagnement après chaque déploiement.' },
        { q: 'Existe-t-il des subventions pour ce type de projet ?', a: 'Des programmes gouvernementaux soutiennent parfois le virage numérique des PME. Nous pouvons vous aider à préparer le volet technique de votre demande.' },
      ],
    },
    en: {
      useCases: [
        { title: 'Digital roadmap', text: 'A picture of your processes and tools, followed by a prioritized action plan over 12 to 24 months.' },
        { title: 'Selecting and implementing software', text: 'Neutral guidance to choose an ERP, CRM or business solution, then to roll it out.' },
        { title: 'Going paperless', text: 'Paper forms, signatures and filing replaced by simple processes in Microsoft 365.' },
      ],
      faq: [
        { q: 'Where does a digital transformation start?', a: 'With your business goals, not with technology. We meet the people involved, observe current processes and identify the pain points that cost the most.' },
        { q: 'How do we get teams to adopt the changes?', a: 'By involving them early, delivering in small steps and planning training and support after each rollout.' },
        { q: 'Are there grants for this kind of project?', a: 'Government programs sometimes support SMEs’ digital shift. We can help you prepare the technical part of your application.' },
      ],
    },
  },
  'architecture-cloud': {
    fr: {
      useCases: [
        { title: 'Migration vers le nuage', text: 'Vos serveurs et applications déplacés vers Azure ou AWS, par étapes et sans interruption prolongée.' },
        { title: 'Réduction des coûts infonuagiques', text: 'Analyse de votre facture, ajustement des ressources et automatisation pour ne payer que ce que vous utilisez.' },
        { title: 'Infrastructure sécurisée et reproductible', text: 'Réseaux, identités et environnements décrits en code (Terraform, Bicep) pour des déploiements fiables.' },
      ],
      faq: [
        { q: 'Azure ou AWS ?', a: 'Les deux sont solides. Le choix dépend de vos outils actuels (Microsoft 365, par exemple), de vos compétences internes et de vos besoins. Nous vous présentons les options de façon neutre.' },
        { q: 'Nos données peuvent-elles rester au Canada ?', a: 'Oui. Azure et AWS offrent des régions canadiennes, et nous configurons vos services pour que les données y demeurent.' },
        { q: 'Le nuage coûte-t-il plus cher qu’un serveur sur place ?', a: 'Pas nécessairement. Bien dimensionné, il évite l’achat et le remplacement de matériel, et vous ne payez que ce que vous consommez. Nous estimons les coûts avant toute migration.' },
      ],
    },
    en: {
      useCases: [
        { title: 'Cloud migration', text: 'Your servers and applications moved to Azure or AWS, in stages and without prolonged downtime.' },
        { title: 'Lower cloud costs', text: 'Review of your bill, right-sizing of resources and automation so you only pay for what you use.' },
        { title: 'Secure, reproducible infrastructure', text: 'Networks, identities and environments described as code (Terraform, Bicep) for reliable deployments.' },
      ],
      faq: [
        { q: 'Azure or AWS?', a: 'Both are solid. The choice depends on your current tools (Microsoft 365, for example), your in-house skills and your needs. We present the options neutrally.' },
        { q: 'Can our data stay in Canada?', a: 'Yes. Azure and AWS offer Canadian regions, and we configure your services so the data stays there.' },
        { q: 'Is the cloud more expensive than an on-site server?', a: 'Not necessarily. Properly sized, it avoids buying and replacing hardware, and you only pay for what you consume. We estimate costs before any migration.' },
      ],
    },
  },
};

export function getServiceExtra(slug: string | undefined, lang: Lang): ServiceExtra | undefined {
  return slug ? extras[slug]?.[lang] : undefined;
}
