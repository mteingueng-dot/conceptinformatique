export interface JobDetail {
  id: string;
  title: string;
  summary: string;
  location: string;
  type: string;
  intro: string;
  responsibilities: string[];
  requirements: string[];
  assets: string[];
  benefits: string[];
  terms?: string[];
  deliverables?: string[];
}

const organicArchitectureMandate: Record<'fr' | 'en', Omit<JobDetail, 'id' | 'title'>> = {
  en: {
    summary:
      'Support product teams with software architecture, shared infrastructure and services, continuous delivery, and complex organic issues.',
    location: 'Quebec City / Hybrid',
    type: '713 person-days · 35 h/week',
    intro:
      'This is a contract, not a call for tenders. Support product teams at the organic architecture level in developing and operating shared infrastructure and services. If this mandate is not a fit, you are welcome to share it with qualified professional contacts.',
    responsibilities: [
      'Support the full development lifecycle in a continuous-delivery context.',
      'Advise on data management, performance, security, services, and on-premises or cloud infrastructure supporting product teams.',
      'Ensure system software architecture meets established standards for development, performance, evolution, security, quality, and compliance.',
      'Occasionally analyze and program complex, organic-level features to better support product teams.',
      'Resolve complex organic issues and coordinate the evolution of the overall organic model.',
    ],
    requirements: [
      'By October 7, 2026, submit a mandate-tailored, signed CV.',
      'Submit both completed grids supplied with the mandate.',
      'Submit copies of diplomas or, where applicable, the MIFI comparative evaluation of studies completed outside Quebec.',
    ],
    assets: [],
    benefits: [],
    terms: [
      'Start date: November 18, 2026.',
      'Schedule: November 18, 2026 to October 4, 2029.',
      'Duration: 713 person-days, at 35 hours per week.',
      'On-site at the client’s Quebec City office three days per week.',
    ],
    deliverables: [
      'Organic architecture documents, impact analyses, and other documents related to the work.',
      'Communicate, explain, and follow up on organic best practices and standards with development teams.',
      'Document relevant information about MAMH systems and development frameworks in the documentation tools available to teams.',
    ],
  },
  fr: {
    summary:
      'Soutenir les équipes produit en architecture logicielle, infrastructures et services communs, déploiement continu et résolution de problèmes organiques complexes.',
    location: 'Québec / Hybride',
    type: '713 j-p · 35 h/semaine',
    intro:
      'Il s’agit d’un contrat et non d’un appel d’offres. Le mandat consiste à soutenir les équipes produit au niveau organique pour le développement et l’exploitation des infrastructures et services communs. Si ce mandat ne correspond pas à votre profil, vous pouvez le partager avec vos contacts professionnels susceptibles d’être intéressés.',
    responsibilities: [
      'Soutenir le cycle de vie complet de développement dans un contexte de déploiement continu.',
      'Conseiller les équipes produit sur la gestion des données, la performance, la sécurité, les services et les infrastructures sur site ou infonuagiques.',
      'Veiller à ce que l’architecture logicielle respecte les normes établies en développement, performance, évolution, sécurité, qualité et conformité.',
      'Analyser et programmer occasionnellement des fonctionnalités complexes à caractère organique pour mieux soutenir les équipes produit.',
      'Résoudre les problématiques organiques complexes et coordonner l’évolution du modèle organique général.',
    ],
    requirements: [
      'Transmettre au plus tard le 7 octobre 2026 un CV adapté au mandat et signé.',
      'Transmettre les deux grilles ci-jointes dûment remplies.',
      'Fournir une copie des diplômes ou, le cas échéant, l’évaluation comparative des études effectuées hors du Québec délivrée par le MIFI.',
    ],
    assets: [],
    benefits: [],
    terms: [
      'Entrée en fonction : 18 novembre 2026.',
      'Échéancier : du 18 novembre 2026 au 4 octobre 2029.',
      'Durée : 713 jours-personnes, à raison de 35 heures par semaine.',
      'Présence au bureau du client à Québec trois jours par semaine.',
    ],
    deliverables: [
      'Produire des documents d’architecture organique, d’analyse d’impact ou tout autre document lié aux tâches.',
      'Diffuser, expliquer et assurer le suivi des meilleures pratiques et règles organiques auprès des équipes de développement.',
      'Documenter les informations pertinentes sur les systèmes et le cadre de développement du MAMH dans les outils mis à la disposition des équipes.',
    ],
  },
};

const agileProjectManagerMandate: Record<'fr' | 'en', Omit<JobDetail, 'id' | 'title'>> = {
  en: {
    summary:
      'Lead agile delivery for a data strategy team, coordinate multidisciplinary stakeholders, and manage scope, schedule, effort, costs, and quality.',
    location: 'Montreal or Quebec City / Hybrid',
    type: '24 months · 35 h/week',
    intro:
      'As a Senior Project Manager with an Agile profile, you will help a data strategy team deliver value continuously using ALEC, based on SAFe. You will facilitate agile practices, coordinate delivery and quality, and maintain transparent engagement with stakeholders.',
    responsibilities: [
      'Establish and facilitate agile events, foster a sustainable agile culture, support continuous value delivery using ALEC (SAFe-based), remove obstacles, and train the team on the organization’s agile tools.',
      'Synthesize project needs to define the overall IT scope; define, plan, and track IT deliverables; estimate and monitor effort and costs for each work package.',
      'Plan and coordinate quality assurance and solution testing; mobilize, coordinate, and follow up with development teams.',
      'Maintain transparent stakeholder communications; identify IT and operational risks and mitigation plans; manage required vendor and contractual relationships; sustain owner engagement.',
    ],
    requirements: [
      'Excellent spoken and written French.',
      'Bachelor’s degree in information technology, business administration, management, or a related field, and Scrum Master certification.',
      'At least 15 years of hands-on project management or coordination experience across business and IT, including 5 years as a Scrum Master in complex environments.',
      'Participation in at least three large-scale projects of approximately 5,000 person-days each.',
      'Demonstrated experience with recognized project management approaches and frameworks, including PMBOK/PMI, Agile, and hybrid methods.',
      'Proven command of Agile and/or hybrid methods; PMP, PSM, SAFe, or equivalent certification.',
      'Results-oriented, with a focus on team performance and strategic alignment.',
      'Strong planning, organization, and prioritization skills; able to manage multiple files in complex environments.',
      'Excellent communication and meeting facilitation skills; able to mobilize multidisciplinary teams and coordinate multiple contributors.',
      'Rigorous tracking of schedules, budgets, and deliverables.',
      'Strong analytical and synthesis skills to support decision-making, and a sound understanding of technology environments.',
      'Leadership, autonomy, and accountability.',
    ],
    assets: [
      'Relevant SAFe certification.',
      'PROSCI change-management certification.',
      'Experience in the public health sector.',
    ],
    benefits: [],
    terms: [
      'Duration: 24 months.',
      'Schedule: 35 hours per week.',
      'On-site one day per week at the client’s office in Montreal or Quebec City.',
    ],
  },
  fr: {
    summary:
      'Accompagner une équipe en stratégie des données en mode agile, coordonner les parties prenantes et suivre la portée, les échéanciers, les coûts et la qualité.',
    location: 'Montréal ou Québec / Hybride',
    type: '24 mois · 35 h/semaine',
    intro:
      'À titre de chargé de projet senior – profil Agile, vous accompagnerez une équipe en stratégie des données dans la livraison continue de valeur selon le mode ALEC basé sur SAFe. Vous animerez les pratiques agiles, coordonnerez la livraison et la qualité et maintiendrez l’engagement des parties prenantes.',
    responsibilities: [
      'Mettre en place et animer les événements agiles, instaurer une culture agile durable, accompagner l’équipe en mode ALEC basé sur SAFe, lever les obstacles et former l’équipe aux outils agiles de l’organisation.',
      'Synthétiser les besoins des projets pour définir la portée globale des travaux TI; définir, planifier et suivre les échéanciers des livrables; estimer et suivre les efforts et les coûts de chaque bloc de travail.',
      'Planifier et coordonner l’assurance qualité et les tests; mobiliser, coordonner et suivre les équipes de développement.',
      'Assurer une communication transparente avec les parties prenantes; anticiper les risques TI et opérationnels et leurs mesures d’atténuation; gérer les ententes contractuelles et fournisseurs requis; maintenir l’engagement des responsables.',
    ],
    requirements: [
      'Excellente maîtrise du français parlé et écrit.',
      'Baccalauréat en technologies de l’information, administration des affaires, gestion ou domaine connexe, et certification Scrum Master.',
      'Au moins 15 ans d’expérience concrète en gestion ou coordination de projets affaires et TI, dont 5 ans comme Scrum Master en environnement complexe.',
      'Participation à au moins trois projets d’envergure d’environ 5 000 jours-personnes chacun.',
      'Expérience démontrée avec des cadres reconnus : PMBOK/PMI, Agile et méthodes hybrides.',
      'Maîtrise avérée des méthodes agiles et/ou hybrides; certification PMP, PSM, SAFe ou équivalente.',
      'Orientation résultats, performance d’équipe et cohérence stratégique.',
      'Excellente planification, organisation et gestion des priorités; capacité à gérer plusieurs dossiers en environnement complexe.',
      'Excellentes habiletés de communication et d’animation; capacité à mobiliser des équipes multidisciplinaires et coordonner plusieurs intervenants.',
      'Rigueur dans le suivi des échéanciers, des budgets et des livrables.',
      'Capacité d’analyse et de synthèse pour soutenir la décision, et bonne compréhension des environnements technologiques.',
      'Leadership, autonomie et sens des responsabilités.',
    ],
    assets: [
      'Certification SAFe pertinente.',
      'Certification PROSCI en gestion du changement.',
      'Expérience dans le secteur de la santé publique.',
    ],
    benefits: [],
    terms: [
      'Durée : 24 mois.',
      'Horaire : 35 heures par semaine.',
      'Présence au bureau du client une journée par semaine, à Montréal ou à Québec.',
    ],
  },
};

const seniorDataEngineerMandate: Record<'fr' | 'en', Omit<JobDetail, 'id' | 'title'>> = {
  en: {
    summary:
      'Build modern Microsoft Fabric analytics solutions, data pipelines and clinical-system integrations for Quebec’s health network.',
    location: 'Montreal or Quebec City / Hybrid',
    type: '24 months · 35 h/week',
    intro:
      'As a Senior Data Engineer, you will design data pipelines and integration accelerators, protect data quality and privacy, and contribute to modern analytics architecture supporting business intelligence and AI in Quebec’s health network.',
    responsibilities: [
      'Design and develop data pipelines and build accelerators for data integration.',
      'Ensure data quality and compliance, and protect data security and confidentiality.',
      'Contribute to modern analytics architectures; build BI and AI tools; optimize queries and data models.',
      'Contribute to tool selection and implementation, user support, continuous improvement and data governance.',
    ],
    requirements: [
      'Advanced spoken and written French.',
      'Bachelor’s degree in information technology, business administration, management or a related field, plus at least three Microsoft Applied Skills assessments directly related to Fabric or the Microsoft Fabric Data Engineer Associate certification (DP-700).',
      'At least 8 years of data-engineering experience.',
      'More than 5 years of business-intelligence experience, including 3 years in data engineering within Quebec’s health network.',
      'Active participation in at least 3 analytics-solution mandates integrating provincial and healthcare-institution clinical information systems, such as Clinibase, SIURGE, Med-urge, BDCU, MED-ECHO, Opera, SIMASS or SILP.',
      'Advanced Microsoft 365 and Microsoft Fabric knowledge: Lakehouse, Data Warehouse, Direct Lake, pipelines and notebooks; hands-on administration of Fabric workspaces and Spark environments; advanced notebook use for ingestion, transformation, exploratory analysis and analytics prototyping.',
      'In-depth Power BI and Power Platform knowledge, including Power Automate, Power Apps and Copilot Studio; advanced T-SQL, M, R, JSON, Python and DAX; practical Docker and Kubernetes container management.',
      'Strong data-modeling and optimization skills for star and snowflake schemas, warehouses and machine-learning models, including Fabric aggregations, partitions and refresh strategies.',
      'Advanced knowledge of clinical and administrative systems in Quebec’s health network is essential.',
      'YAML and configuration files for automated CI/CD deployments; SQL Server, Oracle, DB2, Sybase, Dataverse, NoSQL and Spark; ELT, ETL, APIs and JSON data sources.',
      'Experience with event-driven architectures and real-time data processing; practical knowledge of Microsoft Purview for metadata management.',
      'Knowledge of Microsoft Azure services, Azure Data Lake Storage Gen2, Data Factory and Azure Machine Learning; strong hands-on experience with SSIS, SSAS and SSRS.',
      'Experience integrating HL7/PHIRE data.',
      'Knowledge of ISO 27001, GDPR and SOC 2, as well as cryptography and access-management principles.',
      'Rigour and attention to detail in data quality, performance and security; ability to work collaboratively, coordinate several projects and advise on technical best practices.',
    ],
    assets: [
      'Microsoft Certified Azure Developer Associate certification or equivalent.',
      'Senior-level experience delivering strategic mandates.',
    ],
    benefits: [],
    terms: [
      'Duration: 24 months.',
      'Schedule: 35 hours per week.',
      'On-site one day per week at the client’s office in Montreal or Quebec City.',
    ],
  },
  fr: {
    summary:
      'Concevoir des solutions analytiques modernes avec Microsoft Fabric, des pipelines de données et l’intégration de systèmes cliniques du réseau de la santé du Québec.',
    location: 'Montréal ou Québec / Hybride',
    type: '24 mois · 35 h/semaine',
    intro:
      'À titre d’ingénieur de données senior, vous concevrez des pipelines et des accélérateurs d’intégration, assurerez la qualité et la confidentialité des données et contribuerez à des architectures analytiques modernes soutenant la BI et l’IA dans le réseau de la santé du Québec.',
    responsibilities: [
      'Concevoir et développer des pipelines de données et créer des accélérateurs pour l’intégration de données.',
      'Assurer la qualité et la conformité des données, ainsi que leur sécurité et leur confidentialité.',
      'Participer à la conception d’architectures analytiques modernes, développer des outils pour la BI et l’IA, et optimiser les requêtes et la modélisation.',
      'Participer au choix et à l’implantation des outils, soutenir les utilisateurs et l’amélioration continue, et contribuer à la gouvernance des données.',
    ],
    requirements: [
      'Maîtrise avancée du français parlé et écrit.',
      'Baccalauréat en technologies de l’information, administration des affaires, gestion ou domaine connexe, et réussite d’au moins 3 évaluations Microsoft Applied Skills directement liées à Fabric ou certification Microsoft Fabric Data Engineer Associate (DP-700).',
      'Huit années d’expérience en ingénierie de données.',
      'Plus de 5 années d’expérience en intelligence d’affaires, dont 3 ans en ingénierie de données dans le réseau de la santé du Québec.',
      'Participation active à au moins 3 mandats de développement de solutions analytiques intégrant des systèmes cliniques provinciaux et d’établissements, par exemple Clinibase, SIURGE, Med-urge, BDCU, MED-ECHO, Opera, SIMASS ou SILP.',
      'Connaissance avancée de Microsoft Office 365 et de Fabric : Lakehouse, Data Warehouse, Direct Lake, pipelines et notebooks; expérience pratique en gestion des espaces de travail Fabric et des environnements Spark; utilisation avancée des notebooks pour l’ingestion, la transformation, l’analyse exploratoire et le prototypage analytique.',
      'Connaissance approfondie de Power BI et Power Platform (Power Automate, Power Apps, Copilot Studio); maîtrise de T-SQL, M, R, JSON, Python et DAX; expérience pratique de gestion de conteneurs avec Docker et Kubernetes.',
      'Maîtrise de la modélisation et de l’optimisation des données : schémas en étoile et en flocon, entrepôts, modèles d’apprentissage automatique, agrégations, partitions et stratégies de rafraîchissement dans Fabric.',
      'Connaissances avancées des systèmes cliniques et administratifs du réseau de la santé du Québec (essentiel).',
      'Bonne connaissance de YAML et des fichiers de configuration CI/CD; des bases MS SQL Server, Oracle, DB2, Sybase, Dataverse, NoSQL et Spark; et des flux ELT, ETL, API et JSON.',
      'Expérience avec les architectures orientées événements et le traitement en temps réel; connaissance pratique de Microsoft Purview pour la gestion des métadonnées.',
      'Connaissance des services Microsoft Azure, Azure Data Lake Storage Gen2, Data Factory et Azure Machine Learning; solide expérience de SSIS, SSAS et SSRS.',
      'Expérience en intégration de données HL7/PHIRE.',
      'Connaissance des normes ISO 27001, GDPR et SOC 2, ainsi que des principes de cryptographie et de gestion des accès.',
      'Rigueur et souci du détail pour garantir la qualité, la performance et la sécurité; capacité à travailler en équipe, coordonner plusieurs projets et conseiller sur les meilleures pratiques techniques.',
    ],
    assets: [
      'Certification Microsoft Certified Azure Developer Associate ou équivalent.',
      'Expérience de niveau senior dans la réalisation de mandats stratégiques.',
    ],
    benefits: [],
    terms: [
      'Durée : 24 mois.',
      'Horaire : 35 heures par semaine.',
      'Présence au bureau du client une journée par semaine, à Montréal ou à Québec.',
    ],
  },
};

const intermediateBusinessAnalystAiMandate: Record<'fr' | 'en', Omit<JobDetail, 'id' | 'title'>> = {
  en: {
    summary:
      'Bridge business, clinical and technical teams to identify, assess and deliver responsible AI opportunities in healthcare.',
    location: 'Montreal or Quebec City / Hybrid',
    type: '24 months · 35 h/week',
    intro:
      'As an Intermediate Business Analyst focused on AI, you will document business needs and processes, assess the feasibility and value of AI solutions, and guide their functional design and acceptance with business, clinical and technical stakeholders.',
    responsibilities: [
      'Analyze business needs and prepare opportunity and business cases for AI initiatives.',
      'Document current business processes and identify opportunities for improvement through AI.',
      'Assess the feasibility and added value of proposed AI solutions.',
      'Assess organizational impacts and required changes.',
      'Translate business needs into functional and non-functional requirements.',
      'Contribute to AI-model design and validate alignment with business needs.',
      'Define success criteria and key performance indicators (KPIs).',
      'Liaise between technical, clinical and operational teams.',
      'Participate in sprint planning, reviews and retrospectives; manage expectations and communicate progress to stakeholders.',
      'Support user acceptance testing (UAT) for AI solutions.',
      'Ensure alignment with Santé Québec standards and healthcare regulations; assess AI risks such as bias, ethics and data protection with security and compliance teams.',
    ],
    requirements: [
      'Advanced spoken and written French.',
      'Bachelor’s degree in business administration, business analysis or a related discipline relevant to the role.',
      'At least 7 years of business-analysis experience.',
      'At least 3 years of experience managing Agile/Scrum projects.',
      'Contributed as a business analyst to at least 2 complex technology projects within the past 5 years.',
      'Experience analyzing organizational impacts on business processes, roles and ways of working in an organization comparable in scale to Santé Québec.',
      'Analyze and document needs; model business processes; write use cases and user stories; manage requirements and traceability.',
      'Knowledge of Agile methods (Scrum, Kanban), UML and BPMN process modeling, organizational change management, risk analysis and mitigation.',
      'Advanced knowledge of Microsoft Office 365 and collaboration tools such as Teams and Slack.',
      'Understanding of AI and machine-learning fundamentals and ethical issues including bias, fairness and explainability.',
      'Knowledge of data-protection regulations.',
    ],
    assets: [
      'Master’s degree in business analysis or project management, or an Agile certification such as PMI or Scrum Product Owner; considered a major asset.',
      'Experience in the healthcare sector.',
    ],
    benefits: [],
    terms: [
      'Duration: 24 months.',
      'Schedule: 35 hours per week.',
      'On-site one day per week at the client’s office in Montreal or Quebec City.',
    ],
  },
  fr: {
    summary:
      'Faire le lien entre les équipes d’affaires, cliniques et techniques pour évaluer et réaliser des possibilités d’IA responsables en santé.',
    location: 'Montréal ou Québec / Hybride',
    type: '24 mois · 35 h/semaine',
    intro:
      'À titre d’analyste d’affaires intermédiaire spécialisé en IA, vous documenterez les besoins et processus d’affaires, évaluerez la faisabilité et la valeur des solutions d’IA et accompagnerez leur conception fonctionnelle et leur acceptation avec les parties prenantes d’affaires, cliniques et techniques.',
    responsibilities: [
      'Analyser les besoins d’affaires et préparer des dossiers d’opportunités et d’affaires pour les initiatives en IA.',
      'Documenter les processus métier actuels et repérer les possibilités d’amélioration par l’IA.',
      'Analyser la faisabilité et la valeur ajoutée des solutions d’intelligence artificielle proposées.',
      'Évaluer les impacts organisationnels et les changements requis.',
      'Traduire les besoins métier en exigences fonctionnelles et non fonctionnelles.',
      'Participer à la conception des modèles d’IA et valider leur alignement avec les besoins.',
      'Définir les critères de succès et les indicateurs de performance (KPI).',
      'Assurer la liaison entre les équipes techniques, cliniques et opérationnelles.',
      'Participer aux planifications de sprint, revues et rétrospectives; gérer les attentes et communiquer l’avancement aux parties prenantes.',
      'Soutenir les tests d’acceptation utilisateur (UAT) des solutions d’IA.',
      'Assurer la conformité aux normes de Santé Québec et aux réglementations en santé; évaluer les risques liés à l’IA (biais, éthique, protection des données) avec les équipes de sécurité et conformité.',
    ],
    requirements: [
      'Excellente maîtrise du français parlé et écrit.',
      'Baccalauréat en administration, en analyse d’affaires ou dans une discipline connexe pertinente aux responsabilités du poste.',
      'Au moins 7 ans d’expérience en analyse d’affaires.',
      'Au moins 3 ans d’expérience en gestion de projets Agile/Scrum.',
      'Contribution, à titre d’analyste d’affaires, à au moins 2 projets technologiques complexes au cours des 5 dernières années.',
      'Expérience en analyse d’impact organisationnel sur les processus d’affaires, les rôles et les modes de fonctionnement dans une organisation d’envergure comparable à Santé Québec.',
      'Analyser et documenter les besoins; modéliser les processus d’affaires; rédiger des cas d’utilisation et des user stories; assurer la gestion et la traçabilité des exigences.',
      'Connaissance des méthodes Agile (Scrum, Kanban), de la modélisation UML et BPMN, de la gestion du changement organisationnel et de l’analyse et l’atténuation des risques.',
      'Connaissance avancée de Microsoft Office 365 et des outils de collaboration comme Teams et Slack.',
      'Compréhension des concepts de base de l’IA et du ML, et des enjeux éthiques (biais, équité, explicabilité).',
      'Connaissance de la réglementation en matière de protection des données.',
    ],
    assets: [
      'Maîtrise en analyse d’affaires ou en gestion de projet, ou certification Agile (PMI, Scrum Product Owner); atout majeur.',
      'Expérience dans le secteur de la santé.',
    ],
    benefits: [],
    terms: [
      'Durée : 24 mois.',
      'Horaire : 35 heures par semaine.',
      'Présence au bureau du client une journée par semaine, à Montréal ou à Québec.',
    ],
  },
};

const informationSecurityMandate: Record<'fr' | 'en', Omit<JobDetail, 'id' | 'title'>> = {
  en: {
    summary:
      'Support the Public Curator’s information-security governance, security-risk management and digital transformation program.',
    location: 'To be confirmed',
    type: 'Governance and risk management',
    intro:
      'The Information Security Governance and Security Risk Management Advisor supports the information-security framework, coordinates security-risk analysis activities, and implements and evolves information-security governance principles for the Public Curator’s digital transformation program.',
    responsibilities: [
      'Help develop information-security directions, directives, processes and framework documents.',
      'Contribute to improving the organization’s information-security maturity.',
      'Help update the information-security standards framework.',
      'Take part in planning, organizing, controlling and reporting on information-security activities.',
      'Help implement and operationalize the organization’s information-security risk-management process.',
      'Identify, analyze and assess risks, threats and their consequences, including risk mapping.',
      'Help define and deploy information-security risk-treatment plans.',
      'Contribute to creating and implementing a risk-management framework.',
    ],
    requirements: [
      'At least 10 years of experience in information technology.',
      'At least 6 years as an information-security governance advisor.',
      'At least 4 years of experience in security-risk management.',
      'In-depth knowledge of IT security frameworks and related standards, such as NIST 800-series, ISO 2700x and COBIT.',
      'Very good knowledge of risk-assessment methods such as MEHARI and MITRE.',
      'Knowledge of cloud security environments and IaaS, PaaS and SaaS concepts.',
      'One or more recognized information-security certifications, such as CISSP, CISM, CISA, CRISC or ISO 27001.',
      'A duly completed Public Curator compliance grid.',
      'A signed and dated CV.',
      'Professional references.',
    ],
    assets: [],
    benefits: [],
  },
  fr: {
    summary:
      'Soutenir la gouvernance de la sécurité de l’information, la gestion des risques et le programme de transformation numérique du Curateur public.',
    location: 'Lieu à confirmer',
    type: 'Gouvernance et gestion du risque',
    intro:
      'Le conseiller en gouvernance de la sécurité de l’information et gestion du risque soutient l’encadrement de la sécurité de l’information, coordonne les activités d’analyse des risques et participe à la mise en œuvre et à l’évolution des principes de gouvernance dans le programme de transformation numérique du Curateur public.',
    responsibilities: [
      'Participer à l’élaboration des orientations, directives, processus et documents d’encadrement en sécurité de l’information.',
      'Contribuer à l’amélioration du niveau de maturité de la sécurité de l’information de l’organisation.',
      'Collaborer à la mise à jour du cadre normatif en sécurité.',
      'Participer à la planification, à l’organisation, au contrôle et à la reddition de comptes en sécurité de l’information.',
      'Participer à l’implantation et à l’opérationnalisation du processus de gestion des risques de sécurité de l’information.',
      'Identifier, analyser et évaluer les risques, les menaces et leurs conséquences, notamment par la cartographie des risques.',
      'Participer à la définition et au déploiement des plans de traitement des risques en sécurité de l’information.',
      'Contribuer à la création et à la mise en place d’un cadre de gestion des risques.',
    ],
    requirements: [
      'Minimum de 10 années d’expérience dans le domaine des technologies de l’information.',
      'Minimum de 6 années à titre de conseiller en gouvernance de la sécurité.',
      'Minimum de 4 années d’expérience en gestion du risque de sécurité.',
      'Connaissance approfondie des cadres de sécurité TI et des normes connexes, par exemple NIST 800-xx, ISO 2700x et COBIT.',
      'Très bonnes connaissances des méthodologies d’évaluation des risques, notamment MEHARI et MITRE.',
      'Bonne connaissance de la sécurité des environnements infonuagiques et des concepts IaaS, PaaS et SaaS.',
      'Détenir une ou plusieurs certifications reconnues en sécurité de l’information, telles que CISSP, CISM, CISA, CRISC ou ISO 27001.',
      'Grille de conformité du Curateur public dûment remplie.',
      'Curriculum vitæ signé et daté.',
      'Références professionnelles.',
    ],
    assets: [],
    benefits: [],
  },
};

export const jobsContent: Record<'fr' | 'en', JobDetail[]> = {
  en: [
    {
      id: 'organic-architecture-one',
      title: 'Organic Architecture Advisor (1 resource)',
      ...organicArchitectureMandate.en,
    },
    {
      id: 'organic-architecture-three',
      title: 'Organic Architecture Advisors (3 resources)',
      ...organicArchitectureMandate.en,
    },
    {
      id: 'senior-agile-project-manager',
      title: 'Senior Project Manager – Agile Profile',
      ...agileProjectManagerMandate.en,
    },
    {
      id: 'senior-data-engineer',
      title: 'Senior Data Engineer',
      ...seniorDataEngineerMandate.en,
    },
    {
      id: 'intermediate-business-analyst-ai',
      title: 'Intermediate Business Analyst – AI',
      ...intermediateBusinessAnalystAiMandate.en,
    },
    {
      id: 'information-security-governance',
      title: 'Information Security Governance and Risk Advisor',
      ...informationSecurityMandate.en,
    },
    {
      id: 'typo3-php-solr',
      title: 'Senior TYPO3/PHP/Solr Developers',
      summary:
        'A 36-month, on-demand hour bank for AWS, TYPO3, PHP and Solr work, with an emphasis on advanced technical support and knowledge transfer.',
      location: 'Remote',
      type: '36-month contract',
      intro:
        'This mandate provides a bank of 1,800 hours over 36 months. The client estimates an average of approximately 25 to 50 hours per month for planning purposes only; hours are not guaranteed and there is no firm consumption commitment. Each request is written by the client or, if proposed by ISGA, approved in advance by the client. Hours are not divided by technical category; the client estimates that advanced TYPO3/PHP/Solr support will account for at most approximately 20%.',
      responsibilities: [
        'Deliver additional AWS work outside routine operational maintenance.',
        'Add or adjust AWS components such as DNS, S3, CloudFront and Lambda for occasional requests or improvements.',
        'Review and improve release and production deployment processes.',
        'Design and implement load-testing solutions in acceptance environments.',
        'Replace local developer tools, including Docker ecosystem and environment emulation solutions.',
        'Document completed work.',
        'Add or manage peripheral components, such as a mail server for a support centre.',
        'Provide training, knowledge transfer and guidance to the technology team.',
        'Recommend or implement security, availability, integrity and good-practice configurations across AWS, Docker, TYPO3 Cloud, Solr, GitLab Pipelines, Cognito, disaster-recovery sites, CloudWatch and update automation.',
        'Provide consulting and advanced support to the client’s developer team for TYPO3, PHP and Solr.',
        'Review code produced by the client’s team.',
        'Recommend approaches, fixes or extensions for new needs.',
      ],
      requirements: [
        'At least 5 years of experience in technology.',
        'Three relevant mandates of at least 100 person-days each involving AWS, TYPO3, PHP and Apache Solr.',
        'Concrete examples of deployed automation projects using CI/CD pipelines and AWS CDK for programmable infrastructure.',
        'Excellent command of French.',
        'A CV signed by each proposed resource.',
        'At least two mandates demonstrating knowledge transfer to the client’s resources; the methodology must be described.',
        'A recent list of similar projects of comparable scope.',
        'A succession plan in case the primary resource leaves during the mandate.',
      ],
      assets: [],
      benefits: [
        '36-month mandate, performed remotely.',
        'Work is requested as needed from a 1,800-hour bank; the estimated monthly volume is indicative and not guaranteed.',
      ],
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Software Developer',
      summary:
        'Design and deliver custom web applications, from the interface to the API, in collaboration with our data teams and our clients.',
      location: 'Sherbrooke / Hybrid / telework',
      type: 'Full-time',
      intro:
        'As a Full-Stack Software Developer, you will build custom web applications that help our clients simplify their operations and make better use of their data. You will work alongside our BI and data engineering teams, from the first workshop to production. This is a hands-on role where your technical judgment and your sense of quality really matter.',
      responsibilities: [
        'Design and develop responsive user interfaces with React and TypeScript.',
        'Build and maintain secure, well-documented REST APIs.',
        'Model, query and optimize SQL databases to support application needs.',
        'Take part in code reviews, testing and continuous improvement of our practices using Git.',
        'Meet with clients to understand their needs and turn them into clear technical solutions.',
      ],
      requirements: [
        'Degree in software engineering, computer science or equivalent experience.',
        'Solid experience with React and TypeScript.',
        'Good knowledge of API design and integration (REST, authentication, error handling).',
        'Proficiency in SQL and relational database concepts.',
        'Comfortable with Git workflows and collaborative development.',
      ],
      assets: [
        'Experience with cloud platforms and deployment pipelines.',
        'Interest in data visualization, BI or AI-driven automation.',
        'Ability to communicate in both French and English.',
      ],
      benefits: [
        'Training budget and mentorship to support your growth.',
        'Flexible hours and hybrid remote work.',
        'Stimulating projects with modern technologies.',
        'A collaborative, human-sized team in the heart of Sherbrooke.',
      ],
    },
    {
      id: 'bi',
      title: 'Business Intelligence Analyst',
      summary:
        'Turn our clients’ data into clear dashboards and useful indicators that guide their strategic decisions.',
      location: 'Sherbrooke / Hybrid',
      type: 'Full-time',
      intro:
        'As a Business Intelligence Analyst, you will help organizations understand their performance by turning scattered data into reliable, actionable insights. You will design dashboards, model data and build the pipelines that feed them. Your work will directly support our clients’ strategic decisions.',
      responsibilities: [
        'Design and publish interactive dashboards and reports with Power BI.',
        'Write and optimize SQL queries to extract and prepare data.',
        'Build data models (star schemas, measures, relationships) that are reliable and easy to maintain.',
        'Develop and monitor ETL processes to integrate data from multiple sources.',
        'Work with clients to define key indicators and present findings clearly.',
      ],
      requirements: [
        'Degree in information systems, statistics, computer science or a related field.',
        'Practical experience with Power BI, including DAX and Power Query.',
        'Strong command of SQL.',
        'Good understanding of data modeling and data warehousing principles.',
        'Analytical mindset and ability to explain complex results simply.',
      ],
      assets: [
        'Experience with ETL tools or orchestration (e.g. Azure Data Factory, SSIS).',
        'Knowledge of Python for data preparation.',
        'Previous experience in a consulting environment.',
      ],
      benefits: [
        'Training budget and certification support.',
        'Flexible hours and hybrid remote work.',
        'Varied projects across several industries.',
        'Mentorship from experienced data professionals.',
      ],
    },
    {
      id: 'support',
      title: 'IT Support Technician',
      summary:
        'Provide technical support to our clients, resolve incidents, and help keep their environments secure and stable.',
      location: 'Sherbrooke',
      type: 'Full-time',
      intro:
        'As an IT Support Technician, you are the first point of contact for our clients when something needs attention. You will resolve incidents quickly, maintain their workstations and networks, and help keep their environments secure. Your attitude and service sense make all the difference.',
      responsibilities: [
        'Respond to support requests and resolve incidents by phone, remotely and on site.',
        'Administer Microsoft 365 accounts and support Windows workstations.',
        'Install, configure and troubleshoot networks, printers and peripherals.',
        'Apply security best practices: updates, backups, access management and user awareness.',
        'Document interventions and keep the ticketing system up to date.',
      ],
      requirements: [
        'Diploma in computer support, network administration or equivalent experience.',
        'Good knowledge of Windows and Microsoft 365 administration.',
        'Solid understanding of networking fundamentals (TCP/IP, DNS, DHCP, Wi-Fi).',
        'Ability to prioritize and manage multiple incidents at once.',
        'Excellent customer service and communication skills in French; English is an asset.',
      ],
      assets: [
        'Microsoft or CompTIA certifications (e.g. MS-102, A+, Network+).',
        'Experience with remote support and monitoring tools.',
        'Knowledge of cybersecurity fundamentals.',
      ],
      benefits: [
        'Training and certification opportunities.',
        'Clear path to more specialized technical roles.',
        'Supportive, team-oriented work environment.',
        'Varied days with different clients and challenges.',
      ],
    },
  ],
  fr: [
    {
      id: 'organic-architecture-one',
      title: 'Conseiller en architecture organique – 1 ressource',
      ...organicArchitectureMandate.fr,
    },
    {
      id: 'organic-architecture-three',
      title: 'Conseillers en architecture organique – 3 ressources',
      ...organicArchitectureMandate.fr,
    },
    {
      id: 'senior-agile-project-manager',
      title: 'Chargé de projet senior – Profil Agile',
      ...agileProjectManagerMandate.fr,
    },
    {
      id: 'senior-data-engineer',
      title: 'Ingénieur de données senior',
      ...seniorDataEngineerMandate.fr,
    },
    {
      id: 'intermediate-business-analyst-ai',
      title: "Analyste d'affaires intermédiaire – IA",
      ...intermediateBusinessAnalystAiMandate.fr,
    },
    {
      id: 'information-security-governance',
      title: "Conseiller en sécurité de l'information – spécialiste gouvernance et gestion du risque",
      ...informationSecurityMandate.fr,
    },
    {
      id: 'typo3-php-solr',
      title: 'Développeurs sénior TYPO3/PHP/Solr',
      summary:
        'Banque de 1 800 heures sur 36 mois pour des travaux AWS, TYPO3, PHP et Solr, avec soutien technique avancé et transfert de connaissances.',
      location: 'Télétravail',
      type: 'Mandat de 36 mois',
      intro:
        'Le mandat prévoit une banque de 1 800 heures sur 36 mois. À titre indicatif seulement, le client estime une moyenne d’environ 25 à 50 heures par mois. Ces heures ne sont pas garanties et aucun engagement ferme de consommation n’est prévu. Chaque demande est rédigée par le client ou, si elle est suggérée par ISGA, approuvée au préalable par le client. Les heures ne sont pas réparties par catégorie technique; le client estime que le soutien avancé TYPO3/PHP/Solr représentera au maximum environ 20 % des heures.',
      responsibilities: [
        'Réaliser des travaux AWS complémentaires hors du maintien opérationnel courant.',
        'Ajouter ou ajuster des composantes AWS (DNS, S3, CloudFront, Lambda, etc.) pour des demandes ponctuelles ou des évolutions.',
        'Réviser et améliorer les processus de mise en production.',
        'Élaborer et mettre en place des solutions de tests de charge en environnement d’acceptation.',
        'Remplacer des outils locaux de développement, notamment l’écosystème Docker et l’émulation d’environnements.',
        'Documenter les travaux réalisés.',
        'Ajouter ou gérer des composantes périphériques, par exemple un serveur de courriel pour un centre d’assistance.',
        'Former l’équipe technologique, transférer les connaissances et l’accompagner.',
        'Recommander ou mettre en place des configurations de sécurité, disponibilité, intégrité et bonnes pratiques pour AWS, Docker, TYPO3 infonuagique, Solr, GitLab Pipelines, Cognito, le site de relève, CloudWatch et l’automatisation des mises à jour.',
        'Fournir des services-conseils et du soutien avancé aux développeurs de la DCN en TYPO3, PHP et Solr.',
        'Réviser le code produit par l’équipe du client.',
        'Proposer des approches, correctifs ou extensions pour répondre à de nouveaux besoins.',
      ],
      requirements: [
        'Au moins 5 années d’expérience en technologies.',
        'Trois mandats pertinents d’au moins 100 jours-personnes chacun en lien avec AWS, TYPO3, PHP et Apache Solr.',
        'Exemples concrets de projets d’automatisation déployée avec des pipelines CI/CD et d’utilisation d’AWS CDK pour gérer des infrastructures programmables.',
        'Maîtrise du français.',
        'CV signé par la ressource proposée.',
        'Démonstration d’au moins 2 mandats avec transfert de connaissances aux ressources du donneur d’ouvrage; la méthodologie doit être décrite.',
        'Liste récente de projets similaires de même envergure.',
        'Mécanismes de relève prévus en cas de départ de la ressource principale pendant le mandat.',
      ],
      assets: [],
      benefits: [
        'Mandat de 36 mois en télétravail.',
        'Travaux réalisés sur demande à partir d’une banque de 1 800 heures; le volume mensuel estimé est indicatif et non garanti.',
      ],
    },
    {
      id: 'fullstack',
      title: 'Développeur logiciel full-stack',
      summary:
        'Concevez et livrez des applications web sur mesure, de l’interface à l’API, en collaboration avec nos équipes de données et nos clients.',
      location: 'Sherbrooke / Hybride / télétravail',
      type: 'Temps plein',
      intro:
        'À titre de développeur logiciel full-stack, vous concevrez des applications web sur mesure qui aident nos clients à simplifier leurs opérations et à mieux exploiter leurs données. Vous travaillerez avec nos équipes de BI et d’ingénierie de données, du premier atelier jusqu’à la mise en production. Un rôle concret où votre jugement technique et votre souci de la qualité font la différence.',
      responsibilities: [
        'Concevoir et développer des interfaces web adaptatives avec React et TypeScript.',
        'Bâtir et maintenir des API REST sécurisées et bien documentées.',
        'Modéliser, interroger et optimiser des bases de données SQL pour répondre aux besoins applicatifs.',
        'Participer aux revues de code, aux tests et à l’amélioration continue de nos pratiques avec Git.',
        'Rencontrer les clients pour comprendre leurs besoins et les traduire en solutions techniques claires.',
      ],
      requirements: [
        'Diplôme en génie logiciel, en informatique ou expérience équivalente.',
        'Solide expérience avec React et TypeScript.',
        'Bonne connaissance de la conception et de l’intégration d’API (REST, authentification, gestion des erreurs).',
        'Maîtrise du SQL et des concepts de bases de données relationnelles.',
        'À l’aise avec les flux de travail Git et le développement collaboratif.',
      ],
      assets: [
        'Expérience avec les plateformes infonuagiques et les pipelines de déploiement.',
        'Intérêt pour la visualisation de données, la BI ou l’automatisation par IA.',
        'Capacité à communiquer en français et en anglais.',
      ],
      benefits: [
        'Budget de formation et mentorat pour soutenir votre croissance.',
        'Horaires flexibles et télétravail hybride.',
        'Projets stimulants avec des technologies modernes.',
        'Une équipe collaborative à échelle humaine au cœur de Sherbrooke.',
      ],
    },
    {
      id: 'bi',
      title: 'Analyste en intelligence d’affaires',
      summary:
        'Transformez les données de nos clients en tableaux de bord clairs et en indicateurs utiles qui guident leurs décisions stratégiques.',
      location: 'Sherbrooke / Hybride',
      type: 'Temps plein',
      intro:
        'À titre d’analyste en intelligence d’affaires, vous aiderez les organisations à comprendre leur performance en transformant des données dispersées en informations fiables et exploitables. Vous concevrez des tableaux de bord, modéliserez les données et bâtirez les pipelines qui les alimentent. Votre travail soutiendra directement les décisions stratégiques de nos clients.',
      responsibilities: [
        'Concevoir et publier des tableaux de bord et rapports interactifs avec Power BI.',
        'Écrire et optimiser des requêtes SQL pour extraire et préparer les données.',
        'Bâtir des modèles de données (schémas en étoile, mesures, relations) fiables et faciles à maintenir.',
        'Développer et surveiller des processus ETL pour intégrer des données provenant de sources multiples.',
        'Collaborer avec les clients pour définir les indicateurs clés et présenter les résultats clairement.',
      ],
      requirements: [
        'Diplôme en systèmes d’information, en statistiques, en informatique ou dans un domaine connexe.',
        'Expérience pratique de Power BI, incluant DAX et Power Query.',
        'Excellente maîtrise du SQL.',
        'Bonne compréhension de la modélisation de données et des principes d’entrepôt de données.',
        'Esprit analytique et capacité à expliquer simplement des résultats complexes.',
      ],
      assets: [
        'Expérience avec des outils ETL ou d’orchestration (p. ex. Azure Data Factory, SSIS).',
        'Connaissance de Python pour la préparation des données.',
        'Expérience antérieure en contexte de services-conseils.',
      ],
      benefits: [
        'Budget de formation et soutien à la certification.',
        'Horaires flexibles et télétravail hybride.',
        'Projets variés dans plusieurs secteurs d’activité.',
        'Mentorat par des professionnels de la donnée expérimentés.',
      ],
    },
    {
      id: 'support',
      title: 'Technicien en soutien informatique',
      summary:
        'Offrez du soutien technique à nos clients, résolvez les incidents et contribuez à maintenir leurs environnements sécuritaires et stables.',
      location: 'Sherbrooke',
      type: 'Temps plein',
      intro:
        'À titre de technicien en soutien informatique, vous êtes le premier point de contact de nos clients lorsqu’un besoin survient. Vous résoudrez rapidement les incidents, entretiendrez leurs postes de travail et leurs réseaux, et contribuerez à la sécurité de leurs environnements. Votre attitude et votre sens du service font toute la différence.',
      responsibilities: [
        'Répondre aux demandes de soutien et résoudre les incidents par téléphone, à distance et sur place.',
        'Administrer les comptes Microsoft 365 et soutenir les postes de travail Windows.',
        'Installer, configurer et dépanner les réseaux, imprimantes et périphériques.',
        'Appliquer les bonnes pratiques de sécurité : mises à jour, sauvegardes, gestion des accès et sensibilisation des utilisateurs.',
        'Documenter les interventions et tenir à jour le système de billetterie.',
      ],
      requirements: [
        'Diplôme en soutien informatique, en administration de réseaux ou expérience équivalente.',
        'Bonne connaissance de Windows et de l’administration Microsoft 365.',
        'Compréhension solide des notions de réseautique (TCP/IP, DNS, DHCP, Wi-Fi).',
        'Capacité à prioriser et à gérer plusieurs incidents simultanément.',
        'Excellent service à la clientèle et aisance en communication en français; l’anglais est un atout.',
      ],
      assets: [
        'Certifications Microsoft ou CompTIA (p. ex. MS-102, A+, Network+).',
        'Expérience avec des outils de soutien à distance et de surveillance.',
        'Connaissances de base en cybersécurité.',
      ],
      benefits: [
        'Possibilités de formation et de certification.',
        'Cheminement clair vers des rôles techniques plus spécialisés.',
        'Environnement de travail solidaire et axé sur l’équipe.',
        'Des journées variées avec différents clients et défis.',
      ],
    },
  ],
};

export function getJob(lang: 'fr' | 'en', id: string | undefined): JobDetail | undefined {
  if (!id) return undefined;
  return jobsContent[lang].find((job) => job.id === id);
}
