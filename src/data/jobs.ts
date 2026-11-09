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
      'Submit both completed mandate grids (available on request at finances@conceptinformatique.net).',
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
      'Transmettre les deux grilles du mandat dûment remplies (transmises sur demande à finances@conceptinformatique.net).',
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
      'A duly completed Public Curator compliance grid (available on request at finances@conceptinformatique.net).',
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
      'Grille de conformité du Curateur public dûment remplie (transmise sur demande à finances@conceptinformatique.net).',
      'Curriculum vitæ signé et daté.',
      'Références professionnelles.',
    ],
    assets: [],
    benefits: [],
  },
};

const emergingTechAnalystMandate: Record<'fr' | 'en', Omit<JobDetail, 'id' | 'title'>> = {
  en: {
    summary:
      'Translate clinical, organizational and IT needs into requirements, assess AI solutions and design business-oriented semantic models and indicators in healthcare.',
    location: 'Montreal or Quebec City / Hybrid',
    type: '36 months · Full-time',
    intro:
      'As an Emerging Technology Solutions Analyst, you will turn clinical, organizational and IT needs into functional and technical requirements, assess the value and risks of AI solutions, design business-oriented semantic models and indicators, and keep a continuous watch on emerging technologies, particularly in healthcare.',
    responsibilities: [
      'Translate clinical, organizational or IT needs into functional and IT requirements.',
      'Assess the value and risks of AI solutions, classify them and maintain an inventory.',
      'Ensure and maintain process standardization.',
      'Support project sponsors and produce reports.',
      'Propose technological and analytical solutions suited to business needs.',
      'Identify and define relevant indicators based on clients’ business needs.',
      'Design business-oriented semantic models.',
      'Keep a continuous watch on emerging technologies, with dissemination reports.',
      'Contribute to information governance.',
      'Validate the quality and reliability of indicators.',
      'Collaborate on data integration with technical teams.',
      'Maintain a strategic watch on healthcare technologies.',
    ],
    requirements: [
      'Excellent spoken and written French.',
      'Bachelor’s degree in information technology, artificial intelligence, clinical informatics or a university field relevant to the responsibilities and requirements.',
      'Eight (8) years of experience in information technology.',
      'At least five (5) years in technology solutions analysis or business analytics.',
      'Two (2) years of experience in data modeling and advanced analytics.',
      'Experience with emerging technologies (AI, ML, analytics).',
      'Business needs analysis and translation into technical requirements.',
      'Semantic and conceptual data modeling.',
      'Dashboard design and data visualization.',
      'Definition and validation of performance indicators.',
      'Advanced proficiency in Power BI and Tableau.',
      'Advanced SQL and relational databases.',
      'Knowledge of data architectures (data warehouses, data lakes).',
      'Data modeling tools.',
      'Knowledge of cloud technologies (Azure, AWS, GCP).',
      'Understanding of machine learning and AI concepts.',
      'Predictive and descriptive analytics.',
      'Methodical technology watch.',
      'Knowledge of clinical and administrative processes in healthcare.',
      'Understanding of care pathways.',
      'Business process analysis.',
    ],
    assets: [
      'Master’s degree in artificial intelligence, data science, business analytics or a relevant field (major asset).',
      'Experience in the healthcare sector.',
    ],
    benefits: [],
    terms: [
      'Desired start date: November 30, 2026.',
      'Duration: 36 months, full-time.',
      'On site once a week at the Montreal or Quebec City office.',
      'To apply, send no later than November 11, 2026, at 12 p.m.: (1) your tailored CV; (2) the mandate’s evaluation grid, completed (available on request at finances@conceptinformatique.net); (3) a copy of your diploma (and of its equivalency if obtained outside Québec); (4) your city of residence and confirmation that you are available full-time from November 30, 2026.',
    ],
  },
  fr: {
    summary:
      'Traduire les besoins cliniques, organisationnels et TI en exigences, évaluer les solutions d’IA et concevoir des modèles sémantiques et des indicateurs orientés métier en santé.',
    location: 'Montréal ou Québec / Hybride',
    type: '36 mois · Temps plein',
    intro:
      'À titre d’analyste en solutions technologiques émergentes, vous traduirez les besoins cliniques, organisationnels et TI en exigences fonctionnelles et techniques, évaluerez la valeur et les risques des solutions d’IA, concevrez des modèles sémantiques et des indicateurs orientés métier et assurerez une veille continue des technologies émergentes, notamment en santé.',
    responsibilities: [
      'Traduire les besoins cliniques, organisationnels ou TI en exigences fonctionnelles et TI.',
      'Évaluer la valeur et les risques des solutions IA, les classifier et les répertorier.',
      'Assurer et maintenir la standardisation des processus.',
      'Accompagner les promoteurs et produire des rapports.',
      'Proposer des solutions technologiques et analytiques adaptées aux besoins d’affaires.',
      'Identifier et définir les indicateurs pertinents en fonction des besoins d’affaires des clients.',
      'Concevoir des modèles sémantiques orientés métier.',
      'Assurer une veille continue sur les technologies émergentes, avec rapport de diffusion.',
      'Contribuer à la gouvernance informationnelle.',
      'Valider la qualité et la fiabilité des indicateurs.',
      'Collaborer à l’intégration des données avec les équipes techniques.',
      'Assurer une veille stratégique des technologies en santé.',
    ],
    requirements: [
      'Excellente maîtrise de la langue française parlée et écrite.',
      'Diplôme universitaire de premier cycle (baccalauréat) en technologies de l’information, en intelligence artificielle, en informatique clinique ou dans un domaine universitaire pertinent aux responsabilités et exigences demandées.',
      'Huit (8) ans d’expérience en technologies de l’information.',
      'Minimum cinq (5) ans en analyse de solutions technologiques ou en analytique d’affaires.',
      'Deux (2) ans d’expérience en modélisation de données et en analytique avancée.',
      'Expérience avec des technologies émergentes (IA, ML, analytique).',
      'Analyse des besoins d’affaires et traduction en exigences techniques.',
      'Modélisation sémantique et conceptuelle de données.',
      'Conception de tableaux de bord et visualisation de données.',
      'Définition et validation d’indicateurs de performance.',
      'Maîtrise avancée de Power BI et de Tableau.',
      'SQL avancé et bases de données relationnelles.',
      'Connaissance des architectures de données (entrepôts de données, lacs de données).',
      'Outils de modélisation.',
      'Connaissance des technologies infonuagiques (Azure, AWS, GCP).',
      'Compréhension des concepts d’apprentissage automatique (machine learning) et d’IA.',
      'Analyse prédictive et descriptive.',
      'Veille technologique méthodique.',
      'Connaissance des processus cliniques et administratifs en santé.',
      'Compréhension des trajectoires de soins.',
      'Analyse de processus d’affaires.',
    ],
    assets: [
      'Maîtrise en intelligence artificielle, en science des données, en analytique d’affaires ou dans un domaine pertinent (atout majeur).',
      'Expérience dans le secteur de la santé.',
    ],
    benefits: [],
    terms: [
      'Date de début souhaitée : 30 novembre 2026.',
      'Durée : 36 mois, à temps plein.',
      'Présentiel une fois par semaine, au bureau de Montréal ou de Québec.',
      'Pour postuler, faites-nous parvenir au plus tard le 11 novembre 2026 à 12 h : 1) votre CV adapté ; 2) la grille d’évaluation du mandat, complétée (transmise sur demande à finances@conceptinformatique.net) ; 3) une copie de votre diplôme (et de l’équivalence, s’il a été obtenu hors Québec) ; 4) votre ville de résidence et la confirmation de votre disponibilité à temps plein dès le 30 novembre 2026.',
    ],
  },
};

const governanceAdvisorMandate: Record<'fr' | 'en', Omit<JobDetail, 'id' | 'title'>> = {
  en: {
    summary:
      'Build and lead the AI governance framework, structures and processes in healthcare, and steer the portfolio, partnerships and performance indicators.',
    location: 'Montreal or Quebec City / Hybrid',
    type: '36 months · Full-time',
    intro:
      'As a Governance Advisor, you will develop the strategic AI governance framework, design the governance structures and standard processes for AI projects, advise the teams that build and deploy the tools, and prepare the decision files for Santé Québec’s governance bodies, while measuring the value of AI and monitoring its legal, ethical and regulatory issues.',
    responsibilities: [
      'Develop the strategic AI governance framework by defining its directions and key success factors, consistent with the organization’s strategic objectives.',
      'Advise the internal teams responsible for designing and deploying the tools, ensuring alignment with functional needs and governance requirements.',
      'Lead the portfolio of AI governance technical initiatives.',
      'Design governance structures: implement specific governance frameworks and management foundations to oversee artificial intelligence and innovation projects.',
      'Measure the value of AI: efficiency, turnaround time, errors, budget optimization and quality/service improvement.',
      'Manage strategic partnerships: develop and maintain active collaborations with healthcare institutions, academia and external partners in support of AI products.',
      'Ensure compliance with the internal certification, approval and architecture processes that apply to the tools developed.',
      'Build standard processes for AI project evaluation, performance testing and post-deployment monitoring.',
      'Closely monitor the legal, ethical and regulatory issues related to the use of technology and AI in healthcare.',
      'Coordinate decision-making bodies: prepare the governance committees and the key decision files for Santé Québec’s various bodies.',
      'Ensure alignment between technical teams and other stakeholders (architecture, information security, platforms, business teams) so that the tools integrate with the existing landscape.',
      'Steer strategic performance by helping the organization define the KPIs and dashboards that measure the impact of initiatives and inform budget decisions.',
    ],
    requirements: [
      'Excellent spoken and written French.',
      'Bachelor’s degree in information technology, administration, project management or a university field relevant to the responsibilities and requirements.',
      'At least ten (10) years of experience in IT governance.',
      'Contributed to three (3) mandates in the past five (5) years in organizational or IT governance management.',
      'At least three (3) years in a senior strategic advisor role.',
      'Demonstrated experience in strategic partnership management.',
      'Demonstrated hands-on experience in Agile projects or hybrid approaches.',
      'At least five (5) years of experience as a governance advisor on AI or digital transformation projects, in a context comparable to the VPTI or within an organization of a scale similar to Santé Québec.',
      'Mastery of IT governance frameworks: strategic, tactical and operational.',
      'Understanding of responsible AI principles, the AI solution lifecycle and the issues of traceability, monitoring, drift detection and bias monitoring.',
      'In-depth knowledge of the ethical and regulatory principles and issues of AI in healthcare.',
      'Good technical understanding of cloud platforms (mainly the Microsoft environment: Azure, Microsoft 365, Power Platform), visualization tools (Power BI), databases, APIs, MLOps and DevSecOps practices — without necessarily developing yourself.',
      'Development of strategic frameworks and organizational policies.',
      'Project management methodologies (Agile, Waterfall, hybrid).',
      'Key performance indicators (KPIs) and impact measurement.',
      'Advanced proficiency in Microsoft 365 (Project, Planner, SharePoint, Teams, Excel, PowerPoint) and at least one portfolio tracking tool (Azure DevOps, Jira or equivalent).',
      'Excellent analytical and synthesis skills.',
      'Leadership and the ability to mobilize various stakeholders.',
    ],
    assets: [
      'Master of Business Administration (MBA), project management, IT governance, or ethical AI governance certification (major asset).',
      'Agile certification.',
      'Experience in the healthcare sector.',
    ],
    benefits: [],
    terms: [
      'Desired start date: November 30, 2026.',
      'Duration: 36 months, full-time.',
      'On site once a week at the Montreal or Quebec City office.',
      'To apply, send no later than November 11, 2026, at 12 p.m.: (1) your tailored CV; (2) the mandate’s evaluation grid, completed (available on request at finances@conceptinformatique.net); (3) a copy of your diploma (and of its equivalency if obtained outside Québec); (4) your city of residence and confirmation that you are available full-time from November 30, 2026.',
    ],
  },
  fr: {
    summary:
      'Élaborer et piloter le cadre, les structures et les processus de gouvernance de l’IA en santé, ainsi que le portefeuille, les partenariats et les indicateurs de performance.',
    location: 'Montréal ou Québec / Hybride',
    type: '36 mois · Temps plein',
    intro:
      'À titre de conseiller ou conseillère en gouvernance, vous élaborerez le cadre stratégique de gouvernance en IA, concevrez les structures de gouvernance et les processus standards des projets d’IA, conseillerez les équipes qui conçoivent et déploient les outils et préparerez les dossiers de décision des instances de Santé Québec, tout en mesurant la valeur de l’IA et en surveillant ses enjeux légaux, éthiques et réglementaires.',
    responsibilities: [
      'Élaborer le cadre stratégique de gouvernance en IA en définissant les orientations et les facteurs clés de succès, en cohérence avec les objectifs stratégiques de l’organisation.',
      'Conseiller les équipes internes responsables de la conception et du déploiement des outils, en assurant l’alignement avec les besoins fonctionnels et les exigences de gouvernance.',
      'Piloter le portefeuille des initiatives techniques de gouvernance IA.',
      'Concevoir les structures de gouvernance : mettre en œuvre des cadres de gouvernance spécifiques et des assises de gestion pour encadrer les projets d’intelligence artificielle et d’innovation.',
      'Mesurer la valeur de l’IA : efficacité, délai, erreurs, optimisation budgétaire et amélioration de la qualité et des services.',
      'Gérer les partenariats stratégiques : développer et entretenir des collaborations actives avec les établissements de santé, les milieux universitaires et les partenaires externes en appui aux produits IA.',
      'Veiller au respect des processus internes de certification, d’homologation et d’architecture applicables aux outils développés.',
      'Bâtir des processus standards pour l’évaluation des projets IA, les tests de performance et la surveillance post-déploiement.',
      'Assurer une surveillance rigoureuse des enjeux légaux, éthiques et réglementaires liés à l’usage des technologies et de l’IA dans le domaine de la santé.',
      'Coordonner les instances décisionnelles : préparer les comités de gouvernance et les dossiers de décision essentiels pour les différentes instances de Santé Québec.',
      'Assurer l’arrimage entre les équipes techniques et les autres parties prenantes (architecture, sécurité de l’information, plateformes, équipes métier) pour garantir l’intégration des outils au paysage existant.',
      'Piloter la performance stratégique en accompagnant l’organisation dans la définition des indicateurs de performance (KPI) et des tableaux de bord permettant de mesurer les impacts des initiatives et d’éclairer les décisions budgétaires.',
    ],
    requirements: [
      'Excellente maîtrise de la langue française parlée et écrite.',
      'Diplôme universitaire de premier cycle (baccalauréat) en technologies de l’information, en administration, en gestion de projet ou dans un domaine universitaire pertinent aux responsabilités et exigences demandées.',
      'Minimum de dix (10) ans d’expérience en gouvernance TI.',
      'Avoir contribué à trois (3) mandats au cours des cinq (5) dernières années dans le domaine de la gestion de la gouvernance organisationnelle ou TI.',
      'Minimum de trois (3) ans dans un rôle de conseiller stratégique senior.',
      'Expérience démontrée en gestion de partenariats stratégiques.',
      'Expérience concrète démontrée dans des projets Agile ou dans des approches hybrides.',
      'Minimum de cinq (5) ans d’expérience à titre de conseiller en gouvernance dans des projets utilisant l’IA ou de transformation numérique, dans un contexte comparable à la VPTI ou au sein d’une organisation d’une envergure similaire à Santé Québec.',
      'Maîtrise des cadres de gouvernance TI : stratégique, tactique et opérationnelle.',
      'Compréhension des principes d’IA responsable, du cycle de vie des solutions IA et des enjeux de traçabilité, de monitoring, de détection de dérives et de surveillance des biais.',
      'Connaissance approfondie des principes et des enjeux éthiques et réglementaires de l’IA en santé.',
      'Bonne compréhension technique des plateformes infonuagiques (principalement l’environnement Microsoft : Azure, Microsoft 365, Power Platform), des outils de visualisation (Power BI), des bases de données, des API, du MLOps et des pratiques DevSecOps — sans nécessairement développer soi-même.',
      'Élaboration de cadres stratégiques et de politiques organisationnelles.',
      'Méthodologies de gestion de projets (Agile, Waterfall, hybride).',
      'Indicateurs de performance (KPI) et mesure d’impact.',
      'Maîtrise avancée de la suite Microsoft 365 (Project, Planner, SharePoint, Teams, Excel, PowerPoint) et d’au moins un outil de suivi de portefeuille (Azure DevOps, Jira ou équivalent).',
      'Excellente capacité d’analyse et de synthèse.',
      'Leadership et habileté à mobiliser différents intervenants.',
    ],
    assets: [
      'Maîtrise en administration des affaires (MBA), en gestion de projet ou en gouvernance TI, ou certification en gouvernance éthique de l’IA (atout majeur).',
      'Certification en agilité.',
      'Expérience dans le secteur de la santé.',
    ],
    benefits: [],
    terms: [
      'Date de début souhaitée : 30 novembre 2026.',
      'Durée : 36 mois, à temps plein.',
      'Présentiel une fois par semaine, au bureau de Montréal ou de Québec.',
      'Pour postuler, faites-nous parvenir au plus tard le 11 novembre 2026 à 12 h : 1) votre CV adapté ; 2) la grille d’évaluation du mandat, complétée (transmise sur demande à finances@conceptinformatique.net) ; 3) une copie de votre diplôme (et de l’équivalence, s’il a été obtenu hors Québec) ; 4) votre ville de résidence et la confirmation de votre disponibilité à temps plein dès le 30 novembre 2026.',
    ],
  },
};

const businessAnalystFrameworksMandate: Record<'fr' | 'en', Omit<JobDetail, 'id' | 'title'>> = {
  en: {
    summary: "Develop, revise and drive adoption of management frameworks (policies, frameworks, directives, guides, procedures) with stakeholders in healthcare.",
    location: "Montreal or Quebec City / Hybrid",
    type: "36 months · Full-time",
    intro: "As a Business Analyst – Management Frameworks, you will develop and revise management frameworks (policies, frameworks, directives, guides, procedures) with stakeholders: facilitating working sessions, integrating feedback, managing versions and document quality, preparing validation files for decision-making bodies and supporting adoption by teams.",
    responsibilities: [
      "Develop management frameworks in collaboration with stakeholders.",
      "Plan, convene and facilitate working sessions with the stakeholders involved in developing or revising management frameworks (policies, frameworks, directives, guides, procedures).",
      "Keep minutes, record decisions and rigorously follow up on actions between meetings.",
      "Gather, structure and integrate stakeholder feedback into successive document versions, with clear traceability of changes.",
      "Manage versions, document quality control and stylistic consistency across all frameworks produced.",
      "Coordinate periodic review cycles and orchestrate the adjustments required following field feedback.",
      "Prepare validation files and presentations for decision-making bodies.",
      "Maintain a consolidated schedule of deliverables, validation deadlines and publication dates.",
      "Act as the ongoing liaison between internal contributors (business teams, architecture, security, access to information, legal affairs) and external partners (oversight bodies, sector partners).",
      "Support adoption of published frameworks by user teams (communications, information sessions, FAQs).",
    ],
    requirements: [
      "Excellent spoken and written French.",
      "Bachelor’s degree in business administration, business intelligence, project management, information science or a related field.",
      "Eight (8) years of relevant experience coordinating governance projects, managing institutional documentation or facilitating multi-stakeholder collaborative processes.",
      "Three (3) years of experience producing and updating management frameworks (policies, directives, guides) in a complex organizational context, with stakeholder alignment.",
      "Demonstrated experience producing and updating policy documents (policies, directives, guides) in a complex organizational context.",
      "Understanding of responsible AI principles, international standards (ISO/IEC 42001, NIST AI RMF) and personal information protection issues.",
      "Facilitation of working groups, multi-stakeholder project coordination, document management, professional-quality writing and editing, strong organizational skills.",
      "Advanced proficiency in collaboration tools (Microsoft 365, SharePoint, Teams, OneNote), project management tools and document management and versioning tools.",
      "Influential leadership, diplomacy, listening skills, rigour, autonomy, team spirit and the ability to mobilize without direct authority.",
    ],
    assets: [
      "Project management certification (PMP, PRINCE2, Lean Six Sigma).",
      "Experience in the healthcare sector.",
      "Demonstrated knowledge of responsible AI principles.",
    ],
    benefits: [],
    terms: [
      "Desired start date: November 30, 2026.",
      "Duration: 36 months, full-time.",
      "On site once a week at the Montreal or Quebec City office.",
      "To apply, send no later than November 11, 2026, at 12 p.m.: (1) your tailored CV; (2) the mandate’s evaluation grid, completed (available on request at finances@conceptinformatique.net); (3) a copy of your diploma (and of its equivalency if obtained outside Québec); (4) your city of residence and confirmation that you are available full-time from November 30, 2026.",
    ],
  },
  fr: {
    summary: "Élaborer, réviser et faire adopter les assises de gestion (politiques, cadres, directives, guides, procédures) avec les parties prenantes, en santé.",
    location: "Montréal ou Québec / Hybride",
    type: "36 mois · Temps plein",
    intro: "À titre d’analyste d’affaires – assises de gestion, vous élaborerez et réviserez les assises de gestion (politiques, cadres, directives, guides, procédures) avec les parties prenantes : animation des rencontres de travail, intégration des commentaires, gestion des versions et de la qualité documentaire, préparation des dossiers de validation pour les instances décisionnelles et soutien à l’appropriation par les équipes.",
    responsibilities: [
      "Élaborer les assises de gestion en collaboration avec les parties prenantes.",
      "Planifier, convoquer et animer les rencontres de travail avec les parties prenantes impliquées dans l’élaboration ou la révision des assises de gestion (politiques, cadres, directives, guides, procédures).",
      "Tenir les comptes rendus, consigner les décisions et assurer le suivi rigoureux des actions à réaliser entre les rencontres.",
      "Recueillir, structurer et intégrer les commentaires des parties prenantes dans les versions successives des documents, en maintenant une traçabilité claire des modifications.",
      "Assurer la gestion des versions, le contrôle de la qualité documentaire et l’harmonisation stylistique de l’ensemble des assises produites.",
      "Coordonner les cycles de révision périodique des assises et orchestrer les ajustements requis à la suite des retours d’expérience terrain.",
      "Préparer les dossiers de validation et les présentations destinés aux instances décisionnelles.",
      "Maintenir un calendrier consolidé des livrables, des échéances de validation et des dates de publication des assises.",
      "Assurer la liaison continue entre les contributeurs internes (équipes métier, architecture, sécurité, accès à l’information, affaires juridiques) et les partenaires externes (organismes de tutelle, partenaires sectoriels).",
      "Soutenir l’appropriation des assises publiées par les équipes utilisatrices (communications, séances d’information, foire aux questions).",
    ],
    requirements: [
      "Excellente maîtrise de la langue française parlée et écrite.",
      "Diplôme universitaire de premier cycle (baccalauréat) en administration des affaires, en intelligence d’affaires, en gestion de projets, en sciences de l’information ou dans un domaine connexe.",
      "Huit (8) ans d’expérience pertinente en coordination de projets de gouvernance, en gestion documentaire institutionnelle ou en animation de processus collaboratifs multiparties prenantes.",
      "Trois (3) ans d’expérience en production et en mise à jour d’assises de gestion (politiques, directives, guides) dans un contexte organisationnel complexe, avec arrimage des parties prenantes.",
      "Expérience démontrée de production et de mise à jour d’assises documentaires (politiques, directives, guides) dans un contexte organisationnel complexe.",
      "Compréhension des principes d’IA responsable, des cadres normatifs internationaux (ISO/IEC 42001, NIST AI RMF) et des enjeux liés à la protection des renseignements personnels.",
      "Animation de groupes de travail, coordination de projets multiparties prenantes, gestion documentaire, rédaction et révision linguistique de qualité professionnelle, sens de l’organisation.",
      "Maîtrise avancée des outils collaboratifs (Microsoft 365, SharePoint, Teams, OneNote), des outils de gestion de projet et des outils de gestion documentaire et de versionnage.",
      "Leadership d’influence, diplomatie, capacité d’écoute, rigueur, autonomie, esprit d’équipe et capacité à mobiliser sans autorité hiérarchique directe.",
    ],
    assets: [
      "Certification en gestion de projets (PMP, PRINCE2, Lean Six Sigma).",
      "Expérience dans le secteur de la santé.",
      "Connaissance démontrée des principes d’IA responsable.",
    ],
    benefits: [],
    terms: [
      "Date de début souhaitée : 30 novembre 2026.",
      "Durée : 36 mois, à temps plein.",
      "Présentiel une fois par semaine, au bureau de Montréal ou de Québec.",
      "Pour postuler, faites-nous parvenir au plus tard le 11 novembre 2026 à 12 h : 1) votre CV adapté ; 2) la grille d’évaluation du mandat, complétée (transmise sur demande à finances@conceptinformatique.net) ; 3) une copie de votre diplôme (et de l’équivalence, s’il a été obtenu hors Québec) ; 4) votre ville de résidence et la confirmation de votre disponibilité à temps plein dès le 30 novembre 2026.",
    ],
  },
};

const itSolutionsIamMandate: Record<'fr' | 'en', Omit<JobDetail, 'id' | 'title'>> = {
  en: {
    summary: "Support identity and access management (IAM) operations and Santé Québec’s Microsoft 365 environment: tickets, configurations, Entra ID and new processes.",
    location: "Remote (Québec)",
    type: "12 months · Full-time",
    intro: "Reporting to the head of IAM operations at Santé Québec, you will join the identity and access management (IAM) teams, which manage tens of thousands of identities and support the integration of provincial projects such as the DSN and VIM-VNA, as well as the Microsoft 365 Centre of Excellence (CEM365), which administers the Microsoft 365 environment shared by Santé Québec’s 30 institutions and more than 325,000 users. You will provide operational support for IAM solutions, handle requests received in the ticketing system and administer IAM tools by maintaining their configurations and ensuring they run smoothly.",
    responsibilities: [
      "IAM: take charge of client requests received through tickets and resolve them.",
      "IAM: guide clients through identity and access management processes.",
      "IAM: administer IAM tools, maintaining their configurations and ensuring they run smoothly.",
      "M365: integrate managed applications with Microsoft 365 identity in Entra ID.",
      "M365: set up a review process for applications already registered in Entra ID.",
      "M365: implement new processes (diagrams, documentation), for example for investigations carried out with eDiscovery.",
    ],
    requirements: [
      "Meet the call for tenders (AOP) requirements for the senior IT solutions administrative analyst profile.",
      "Solid SQL experience.",
      "Very good knowledge of Microsoft 365.",
      "Very good knowledge of security and Entra ID.",
    ],
    assets: [
      "Identity and access management (IAM) experience.",
      "Security experience.",
      "Experience with Active Directory and Entra ID.",
    ],
    benefits: [],
    terms: [
      "Desired start date: November 30, 2026.",
      "Duration: 12 months, full-time.",
      "100% remote; travel to Montreal or Quebec City only at the start and end of the mandate to pick up and return equipment.",
      "To apply, send no later than November 10, 2026, at 12 p.m.: (1) your tailored CV; (2) the mandate’s evaluation grid, completed (available on request at finances@conceptinformatique.net); (3) a copy of your diploma (and of its equivalency if obtained outside Québec); (4) your city of residence and confirmation that you are available full-time from November 30, 2026.",
    ],
  },
  fr: {
    summary: "Soutenir les opérations de gestion des identités et des accès (GIA) et l’environnement Microsoft 365 de Santé Québec : requêtes, configurations, Entra ID et nouveaux processus.",
    location: "Télétravail (Québec)",
    type: "12 mois · Temps plein",
    intro: "Sous l’autorité du chef de secteur aux opérations GIA de Santé Québec, vous vous joindrez aux équipes de la gestion des identités et des accès (GIA), qui gère plusieurs dizaines de milliers d’identités et soutient l’intégration de projets provinciaux, dont le DSN et le VIM-VNA, ainsi qu’au Centre d’excellence Microsoft 365 (CEM365), qui administre l’environnement Microsoft 365 commun aux 30 établissements de Santé Québec, soit plus de 325 000 utilisateurs. Vous assurerez le soutien opérationnel des solutions de GIA, traiterez les requêtes reçues dans le système de billetterie et administrerez les outils GIA en maintenant leurs configurations et en veillant à leur bon fonctionnement.",
    responsibilities: [
      "GIA : prendre en charge les requêtes des clients reçues par billets et les traiter.",
      "GIA : accompagner les clients dans les processus de gestion des identités et des accès.",
      "GIA : administrer les outils GIA en maintenant leurs configurations et en veillant à leur bon fonctionnement.",
      "M365 : intégrer les applications gérées à l’identité Microsoft 365 dans Entra ID.",
      "M365 : mettre en place un processus de révision des applications déjà enregistrées dans Entra ID.",
      "M365 : mettre en place de nouveaux processus (schémas, documentation), par exemple pour les enquêtes réalisées avec eDiscovery.",
    ],
    requirements: [
      "Satisfaire aux exigences de l’appel d’offres (AOP) pour le profil d’analyste en gestion administrative des solutions TI senior.",
      "Bonne expérience en SQL.",
      "Très bonne connaissance de Microsoft 365.",
      "Très bonne connaissance de la sécurité et d’Entra ID.",
    ],
    assets: [
      "Expérience en gestion des identités et des accès (GIA).",
      "Expérience en sécurité.",
      "Expérience avec Active Directory et Entra ID.",
    ],
    benefits: [],
    terms: [
      "Date de début souhaitée : 30 novembre 2026.",
      "Durée : 12 mois, à temps plein.",
      "Télétravail à 100 % ; déplacement au début et à la fin du mandat seulement, pour récupérer et rendre l’équipement, à Montréal ou à Québec.",
      "Pour postuler, faites-nous parvenir au plus tard le 10 novembre 2026 à 12 h : 1) votre CV adapté ; 2) la grille d’évaluation du mandat, complétée (transmise sur demande à finances@conceptinformatique.net) ; 3) une copie de votre diplôme (et de l’équivalence, s’il a été obtenu hors Québec) ; 4) votre ville de résidence et la confirmation de votre disponibilité à temps plein dès le 30 novembre 2026.",
    ],
  },
};

const itSolutionsIamOnlyMandate: Record<'fr' | 'en', Omit<JobDetail, 'id' | 'title'>> = {
  en: {
    summary: "Support and evolve Santé Québec’s identity and access management (IAM) solutions: tickets, configurations and identity lifecycle automation (SQL, Python).",
    location: "Remote (Québec)",
    type: "12 months · Full-time",
    intro: "Reporting to the head of IAM operations at Santé Québec, you will provide operational support for identity and access management solutions and handle requests received in the ticketing system. You will administer IAM tools, maintain their configurations and ensure they run smoothly, and help teams integrate authentication solutions and set up profiles, roles and access matrices. You will develop and maintain identity lifecycle automation, including access provisioning and deprovisioning, API integrations and orchestration flows.",
    responsibilities: [
      "Provide operational support for identity and access management solutions.",
      "Take charge of client requests received through tickets and resolve them.",
      "Administer IAM tools, maintain their configurations and ensure they run smoothly.",
      "Guide clients and teams through IAM processes, the integration of authentication solutions and the setup of profiles, roles and access matrices.",
      "Develop and maintain identity lifecycle automation: access provisioning and deprovisioning, API integrations and orchestration flows.",
      "Take part in fixes and improvements to the organization’s IAM solutions (SQL, Python).",
      "Produce the technical documentation and procedures required for operational interventions.",
      "Contribute to architecture and security work, and oversee the delivery of changes according to development standards and best practices.",
    ],
    requirements: [
      "Meet the call for tenders (AOP) requirements for the senior IT solutions administrative analyst profile.",
      "Solid SQL experience.",
    ],
    assets: [
      "Experience with Python.",
      "Identity and access management (IAM) experience.",
      "Security experience.",
      "Experience with Active Directory and Entra ID.",
      "Experience with DevOps.",
    ],
    benefits: [],
    terms: [
      "Desired start date: November 30, 2026.",
      "Duration: 12 months, full-time.",
      "100% remote; travel to Montreal or Quebec City only at the start and end of the mandate to pick up and return equipment.",
      "To apply, send no later than November 10, 2026, at 12 p.m.: (1) your tailored CV; (2) the mandate’s evaluation grid, completed (available on request at finances@conceptinformatique.net); (3) a copy of your diploma (and of its equivalency if obtained outside Québec); (4) your city of residence and confirmation that you are available full-time from November 30, 2026.",
    ],
  },
  fr: {
    summary: "Soutenir et faire évoluer les solutions de gestion des identités et des accès (GIA) de Santé Québec : requêtes, configurations, automatisations du cycle de vie des identités (SQL, Python).",
    location: "Télétravail (Québec)",
    type: "12 mois · Temps plein",
    intro: "Sous l’autorité du chef de secteur aux opérations GIA de Santé Québec, vous assurerez le soutien opérationnel des solutions de gestion des identités et des accès et traiterez les requêtes reçues dans le système de billetterie. Vous administrerez les outils GIA, maintiendrez leurs configurations et veillerez à leur bon fonctionnement, et accompagnerez les équipes dans l’intégration des solutions d’authentification et la mise en place des profils, des rôles et des matrices d’accès. Vous développerez et maintiendrez les automatisations du cycle de vie des identités, notamment l’approvisionnement et le retrait des accès, les intégrations API et les flux d’orchestration.",
    responsibilities: [
      "Assurer le soutien opérationnel des solutions de gestion des identités et des accès.",
      "Prendre en charge les requêtes des clients reçues par billets et les traiter.",
      "Administrer les outils GIA, maintenir leurs configurations et veiller à leur bon fonctionnement.",
      "Accompagner les clients et les équipes dans les processus GIA, l’intégration des solutions d’authentification et la mise en place des profils, des rôles et des matrices d’accès.",
      "Développer et maintenir les automatisations du cycle de vie des identités : approvisionnement et retrait des accès, intégrations API et flux d’orchestration.",
      "Participer à la mise en place de correctifs ou d’améliorations sur les solutions de GIA de l’organisation (SQL, Python).",
      "Produire la documentation technique et les procédures nécessaires aux interventions opérationnelles.",
      "Contribuer aux travaux d’architecture et de sécurité, et encadrer la livraison des changements selon les standards de développement et les bonnes pratiques.",
    ],
    requirements: [
      "Satisfaire aux exigences de l’appel d’offres (AOP) pour le profil d’analyste en gestion administrative des solutions TI senior.",
      "Bonne expérience en SQL.",
    ],
    assets: [
      "Expérience avec Python.",
      "Expérience en gestion des identités et des accès (GIA).",
      "Expérience en sécurité.",
      "Expérience avec Active Directory et Entra ID.",
      "Expérience avec DevOps.",
    ],
    benefits: [],
    terms: [
      "Date de début souhaitée : 30 novembre 2026.",
      "Durée : 12 mois, à temps plein.",
      "Télétravail à 100 % ; déplacement au début et à la fin du mandat seulement, pour récupérer et rendre l’équipement, à Montréal ou à Québec.",
      "Pour postuler, faites-nous parvenir au plus tard le 10 novembre 2026 à 12 h : 1) votre CV adapté ; 2) la grille d’évaluation du mandat, complétée (transmise sur demande à finances@conceptinformatique.net) ; 3) une copie de votre diplôme (et de l’équivalence, s’il a été obtenu hors Québec) ; 4) votre ville de résidence et la confirmation de votre disponibilité à temps plein dès le 30 novembre 2026.",
    ],
  },
};

const seniorItProjectManagerMandate: Record<'fr' | 'en', Omit<JobDetail, 'id' | 'title'>> = {
  en: {
    summary: "Manage several Santé Québec digital projects end to end, including DAAMM and IEVD: planning, stakeholders, risks, budget, testing and go-live.",
    location: "Remote (Québec)",
    type: "12 months · 35 h/week",
    intro: "As part of Santé Québec’s digital initiatives, the senior IT project manager will be responsible for managing IT projects. You will work on several files at once, starting with the DAAMM (advance request for medical assistance in dying) and IEVD (data interoperability, exchange and valorization) projects. You will handle competing priorities, tight deadlines and urgent files, and keep work moving forward in a demanding environment that requires a high degree of responsiveness.",
    responsibilities: [
      "Manage projects end to end through to landing: planning, execution, monitoring, control and delivery.",
      "Coordinate internal and external stakeholders and suppliers.",
      "Manage competing priorities, tight deadlines and urgent files.",
      "Track the main project management deliverables: schedule, risks and mitigation measures, open issues, weekly status, budget, financial activities, testing and go-live plan.",
      "Facilitate the various project meetings.",
      "Produce minutes and presentations for governance committees.",
      "Keep the project schedule up to date and follow up on actions.",
      "Work with suppliers and the other departments involved in delivering the projects.",
    ],
    requirements: [
      "Excellent communication skills in French, spoken and written.",
      "Experience on projects in hospital settings and in the healthcare network.",
      "Hands-on experience with PMI/PMBOK methodologies.",
    ],
    assets: [
      "PMP and/or PMI-ACP certification.",
    ],
    benefits: [],
    terms: [
      "Start: December 7, 2026.",
      "Duration: 12 months, full-time (35 h/week, 8:30 a.m. to 4:30 p.m.).",
      "100% remote; travel to Montreal or Quebec City only at the start and end of the mandate to pick up and return equipment.",
      "To apply, send no later than November 10, 2026, at 12 p.m.: (1) your up-to-date CV in Word format, clearly stating for each mandate the client, dates, your role, the scope (person-days or budget) and, where applicable, the link with the healthcare network; (2) the mandate’s evaluation grid, completed (available on request at finances@conceptinformatique.net); (3) a copy of your diploma (and of its equivalency if obtained outside Québec); (4) a copy of your PMP or PMI-ACP certification, if applicable; (5) your city of residence and confirmation that you are available full-time from December 7, 2026.",
    ],
  },
  fr: {
    summary: "Gérer de bout en bout plusieurs projets numériques de Santé Québec, dont DAAMM et IEVD : planification, parties prenantes, risques, budget, essais et mise en production.",
    location: "Télétravail (Québec)",
    type: "12 mois · 35 h/semaine",
    intro: "Dans le cadre des initiatives numériques de Santé Québec, le ou la chargé(e) de projet TI senior sera responsable de la gestion de projets TI. La ressource interviendra sur plusieurs dossiers simultanément et contribuera en premier lieu aux projets DAAMM (demande anticipée d’aide médicale à mourir) et IEVD (interopérabilité, échange et valorisation des données). Elle devra gérer des priorités concurrentes, des échéanciers serrés et des dossiers urgents, et assurer la progression des travaux dans un environnement exigeant qui demande une grande réactivité.",
    responsibilities: [
      "Assurer la gestion complète et l’atterrissage des projets : planification, exécution, suivi, contrôle et livraison.",
      "Coordonner les parties prenantes internes et externes ainsi que les fournisseurs.",
      "Gérer des priorités concurrentes, des échéanciers serrés et des dossiers urgents.",
      "Assurer le suivi des principaux livrables de gestion de projet : échéancier, risques et mesures d’atténuation, points en suspens, statut hebdomadaire, budget, activités financières, essais et plan de mise en production.",
      "Animer les diverses rencontres de projet.",
      "Produire les comptes rendus et les présentations destinées aux comités de gouvernance.",
      "Maintenir l’échéancier de projet à jour et assurer le suivi des actions.",
      "Collaborer avec les fournisseurs et les autres directions impliquées dans la réalisation des projets.",
    ],
    requirements: [
      "Excellentes aptitudes de communication en français, à l’oral et à l’écrit.",
      "Expérience sur des projets en milieu hospitalier et dans le réseau de la santé.",
      "Expérience pratique des méthodologies PMI/PMBOK.",
    ],
    assets: [
      "Certification PMP et/ou PMI-ACP.",
    ],
    benefits: [],
    terms: [
      "Début : 7 décembre 2026.",
      "Durée : 12 mois, à temps plein (35 h/semaine, de 8 h 30 à 16 h 30).",
      "Télétravail à 100 % ; déplacement au début et à la fin du mandat seulement, pour récupérer et rendre l’équipement, à Montréal ou à Québec.",
      "Pour postuler, faites-nous parvenir au plus tard le 10 novembre 2026 à 12 h : 1) votre CV à jour en format Word, en indiquant clairement pour chaque mandat le client, les dates, votre rôle, l’envergure (jours-personnes ou budget) et, s’il y a lieu, le lien avec le réseau de la santé ; 2) la grille d’évaluation du mandat, complétée (transmise sur demande à finances@conceptinformatique.net) ; 3) une copie de votre diplôme (et de l’équivalence, s’il a été obtenu hors Québec) ; 4) une copie de votre certification PMP ou PMI-ACP, s’il y a lieu ; 5) votre ville de résidence et la confirmation de votre disponibilité à temps plein dès le 7 décembre 2026.",
    ],
  },
};

const oracleDbaMandate: Record<'fr' | 'en', Omit<JobDetail, 'id' | 'title'>> = {
  en: {
    summary: "Join a 24/7 support team for a Québec public organization: Oracle 19 administration on Red Hat Enterprise Linux 8, monitoring, updates, failover testing and incidents.",
    location: "Remote (Canada)",
    type: "3 years (+ two 1-year options) · 24/7 on-call",
    intro: "We are looking for Oracle database administrators (DBAs), including at least one senior, to form a 24/7 support team for a Québec public organization. The environment includes five Oracle 19.31 servers on Red Hat Enterprise Linux 8, one of which is a production server running 24 hours a day, 7 days a week, 365 days a year. The team handles monitoring, updates, failover testing, incident management and on-demand technical support.",
    responsibilities: [
      "Monitor the Oracle databases and servers in the environment (5 servers, including 1 in 24/7/365 production).",
      "Plan and apply Oracle 19.31 updates on Red Hat Enterprise Linux 8.",
      "Run failover tests and ensure database availability.",
      "Handle and resolve incidents, including outside regular hours.",
      "Provide on-demand technical support to the organization’s teams.",
      "Take part in the on-call rotation (evenings, nights and weekends).",
    ],
    requirements: [
      "Excellent command of French, spoken and written.",
      "Experience as an Oracle database administrator (the team must show at least 5 years of Oracle DBA experience).",
      "Experience in a critical 24/7 environment.",
      "Experience with Oracle 19.31 or a later version.",
      "Availability for an evening, night and weekend on-call rotation.",
      "Residence in Canada (remote work from Canada only).",
    ],
    assets: [
      "Senior-level Oracle DBA experience (at least one team member must be senior).",
      "Administration experience on Red Hat Enterprise Linux 8.",
      "Experience with Québec public organizations.",
    ],
    benefits: [],
    terms: [
      "Duration: 3 years, with two 1-year extension options.",
      "100% remote, from Canada only.",
      "Evening, night and weekend on-call rotation required.",
      "To apply, send no later than November 16, 2026, at 12 p.m.: (1) your CV in Word format; (2) the requirement sheet’s forms, completed (sheet available on request at finances@conceptinformatique.net); (3) your status (employee, self-employed or incorporated).",
    ],
  },
  fr: {
    summary: "Rejoindre une équipe de soutien 24/7 d’un organisme public québécois : administration d’Oracle 19 sous Red Hat Enterprise Linux 8, surveillance, mises à jour, relève et incidents.",
    location: "Télétravail (Canada)",
    type: "3 ans (+ 2 options d’un an) · Garde 24/7",
    intro: "Nous recherchons des administrateurs et administratrices de bases de données (DBA) Oracle, dont au moins une personne de niveau sénior, pour former une équipe de soutien 24/7 auprès d’un organisme public québécois. L’environnement compte cinq serveurs Oracle 19.31 sous Red Hat Enterprise Linux 8, dont un serveur de production en service 24 heures sur 24, 7 jours sur 7, 365 jours par année. L’équipe assure la surveillance, les mises à jour, les tests de relève, la gestion des incidents et le soutien technique sur demande.",
    responsibilities: [
      "Surveiller les bases de données Oracle et les serveurs de l’environnement (5 serveurs, dont 1 en production 24/7/365).",
      "Planifier et appliquer les mises à jour d’Oracle 19.31 sous Red Hat Enterprise Linux 8.",
      "Réaliser les tests de relève et veiller à la disponibilité des bases de données.",
      "Prendre en charge et résoudre les incidents, y compris en dehors des heures normales.",
      "Offrir un soutien technique sur demande aux équipes de l’organisme.",
      "Participer à la rotation de garde (soir, nuit et fin de semaine).",
    ],
    requirements: [
      "Excellente maîtrise du français, à l’oral et à l’écrit.",
      "Expérience comme administrateur ou administratrice de bases de données Oracle (l’équipe doit cumuler au moins 5 ans d’expérience comme DBA Oracle).",
      "Expérience en environnement critique 24/7.",
      "Expérience sur Oracle 19.31 ou une version supérieure.",
      "Disponibilité pour une rotation de garde soir, nuit et fin de semaine.",
      "Résidence au Canada (travail à distance depuis le Canada uniquement).",
    ],
    assets: [
      "Expérience de niveau sénior comme DBA Oracle (au moins un membre de l’équipe doit être sénior).",
      "Expérience d’administration sous Red Hat Enterprise Linux 8.",
      "Expérience auprès d’organismes publics québécois.",
    ],
    benefits: [],
    terms: [
      "Durée : 3 ans, avec 2 options de prolongation d’un an chacune.",
      "Télétravail à 100 %, depuis le Canada uniquement.",
      "Rotation de garde soir, nuit et fin de semaine requise.",
      "Pour postuler, faites-nous parvenir au plus tard le 16 novembre 2026 à 12 h : 1) votre CV en format Word ; 2) les formulaires de la fiche de besoin, remplis (fiche transmise sur demande à finances@conceptinformatique.net) ; 3) votre statut (salarié, travailleur autonome ou société incorporée).",
    ],
  },
};

const seniorItGovernanceAdvisorMandate: Record<'fr' | 'en', Omit<JobDetail, 'id' | 'title'>> = {
  en: {
    summary: "Support project teams in the project office of a large Québec public organization: compliance with scope, schedule, cost and the IT governance framework.",
    location: "Quebec City / Hybrid (3 days on site)",
    type: "3 years · 35 h/week",
    intro: "The project office of a large Québec public organization (multiplatform environment: mainframe, client-server and web) is looking for senior advisors in IT governance and project management. You will support project teams to ensure compliance with project authorization parameters (scope, schedule, cost) and the governance framework, within mixed teams of internal and external resources.",
    responsibilities: [
      "Support and advise project teams at every stage of the life cycle (pre-project, planning, execution, closing).",
      "Support the monitoring of project performance and parameters: scope, schedule, budget, milestones, deliveries, benefits and variances.",
      "Help teams identify, analyze and track risks, issues, mitigation measures and corrective actions.",
      "Review the quality, completeness, consistency and compliance of documents and deliverables (accountability reporting, phase gates, change requests).",
      "Produce the project office’s opinions for phase-gate approvals before governance committees.",
      "Advise teams on applying and evolving the IT governance and project management framework (directives, processes, practices, templates, tools).",
      "Contribute to accountability reporting, recommendations to governance bodies and knowledge transfer to internal resources.",
    ],
    deliverables: [
      "Dashboards and progress reports.",
      "Variance analyses and risk registers.",
      "Phase-gate opinions (opportunity case, business case, execution authorization).",
      "Change impact analyses and decision-support notes.",
      "Governance assessments, guides and templates.",
      "Training material.",
    ],
    requirements: [
      "Excellent command of French, spoken and written, with the ability to write very high-quality documents.",
      "Senior-level experience in IT governance and project management.",
      "Proficiency with MS Project, Azure DevOps and the Microsoft 365 suite (including Power BI).",
      "Knowledge of agile approaches.",
      "Ability to work on site in Quebec City at least 3 days a week.",
    ],
    assets: [
      "Residence in the Quebec City region (strongly preferred).",
      "Experience in a public organization’s project office.",
      "Experience in a multiplatform environment (mainframe, client-server and web).",
    ],
    benefits: [],
    terms: [
      "Duration: 3 years, starting early 2027 (no later than 15 business days after the contract is signed).",
      "Volume: about 1,800 person-days in total for the team (7-hour days).",
      "Hybrid: on site in Quebec City at least 3 days a week; remote work from Québec only.",
      "Schedule: 7 hours a day, Monday to Friday, between 7 a.m. and 6:30 p.m.; mandatory presence from 10 to 11:30 a.m. and from 1:30 to 3 p.m.",
      "No travel, parking or accommodation expenses are reimbursed.",
      "Background check before starting.",
      "To apply, send your up-to-date CV in Word format to finances@conceptinformatique.net, stating for each mandate the client, dates, your role and the project’s scope, along with your city of residence and availability.",
    ],
  },
  fr: {
    summary: "Accompagner les équipes de projet du bureau de projets d’un grand organisme public québécois : respect de la portée, de l’échéancier, des coûts et du cadre de gouvernance TI.",
    location: "Québec / Hybride (3 jours au bureau)",
    type: "3 ans · 35 h/semaine",
    intro: "Le bureau de projets d’un grand organisme public québécois (environnement multiplateforme : central, client-serveur et Web) souhaite s’adjoindre des conseillers et conseillères séniors en gouvernance et en gestion de projets en technologies de l’information. Vous accompagnerez les équipes de projet afin d’assurer le respect des paramètres d’autorisation des projets (portée, échéancier, coût) et du cadre de gouvernance, au sein d’équipes mixtes composées de ressources internes et externes.",
    responsibilities: [
      "Accompagner et conseiller les équipes de projet à toutes les étapes du cycle de vie (avant-projet, planification, réalisation, fermeture).",
      "Soutenir le suivi de la performance et des paramètres des projets : portée, échéancier, budget, jalons, livraisons, bénéfices et écarts.",
      "Accompagner les équipes dans l’identification, l’analyse et le suivi des risques, des enjeux, des mesures de mitigation et des actions correctives.",
      "Analyser la qualité, la complétude, la cohérence et la conformité des documents et livrables (reddition de comptes, passages de phase, demandes de changement).",
      "Produire les avis du bureau de projets pour les autorisations de passage de phase auprès des comités de gouvernance.",
      "Conseiller les équipes dans l’application et l’évolution du cadre de gouvernance et de gestion des projets TI (directives, processus, pratiques, gabarits, outils).",
      "Contribuer à la reddition de comptes, aux recommandations destinées aux instances de gouvernance et au transfert de connaissances vers les ressources internes.",
    ],
    deliverables: [
      "Tableaux de bord et rapports d’avancement.",
      "Analyses d’écarts et registres de risques.",
      "Avis de passage de phase (dossier d’opportunité, dossier d’affaires, autorisation d’exécution).",
      "Analyses d’impact de changements et notes d’aide à la décision.",
      "Diagnostics de gouvernance, guides et gabarits.",
      "Matériel de formation.",
    ],
    requirements: [
      "Excellente maîtrise du français, à l’oral et à l’écrit, avec une capacité à rédiger des documents de très bonne qualité.",
      "Expérience de niveau sénior en gouvernance et en gestion de projets en technologies de l’information.",
      "Maîtrise de MS Project, d’Azure DevOps et de la suite Microsoft 365 (dont Power BI).",
      "Connaissance de l’approche agile.",
      "Capacité à travailler au bureau à Québec au moins 3 jours par semaine.",
    ],
    assets: [
      "Résidence dans la région de Québec (fortement privilégiée).",
      "Expérience au sein d’un bureau de projets d’un organisme public.",
      "Expérience en environnement multiplateforme (central, client-serveur et Web).",
    ],
    benefits: [],
    terms: [
      "Durée : 3 ans, démarrage au début de 2027 (au plus tard 15 jours ouvrables après la signature du contrat).",
      "Volume : environ 1 800 jours-personnes au total pour l’équipe (journées de 7 h).",
      "Mode hybride : présence au bureau à Québec (ville de Québec) au moins 3 jours par semaine ; télétravail au Québec seulement.",
      "Horaire : 7 h par jour, du lundi au vendredi, entre 7 h et 18 h 30 ; présence obligatoire de 10 h à 11 h 30 et de 13 h 30 à 15 h.",
      "Aucuns frais de déplacement, de stationnement ou d’hébergement ne sont remboursés.",
      "Vérification des antécédents avant l’entrée en fonction.",
      "Pour postuler, faites-nous parvenir votre CV à jour en format Word à finances@conceptinformatique.net, en indiquant pour chaque mandat le client, les dates, votre rôle et l’envergure du projet, ainsi que votre ville de résidence et votre disponibilité.",
    ],
  },
};

export const jobsContent: Record<'fr' | 'en', JobDetail[]> = {
  en: [
    {
      id: 'emerging-tech-solutions-analyst',
      title: 'Emerging Technology Solutions Analyst',
      ...emergingTechAnalystMandate.en,
    },
    {
      id: 'governance-advisor',
      title: 'Governance Advisor',
      ...governanceAdvisorMandate.en,
    },
    {
      id: 'business-analyst-management-frameworks',
      title: "Business Analyst – Management Frameworks",
      ...businessAnalystFrameworksMandate.en,
    },
    {
      id: 'it-solutions-analyst-iam-m365',
      title: "IT Solutions Administrative Analyst – IAM / M365",
      ...itSolutionsIamMandate.en,
    },
    {
      id: 'iam-solutions-analyst',
      title: "IT Solutions Administrative Analyst – IAM",
      ...itSolutionsIamOnlyMandate.en,
    },
    {
      id: 'senior-it-project-manager-health',
      title: "Senior IT Project Manager",
      ...seniorItProjectManagerMandate.en,
    },
    {
      id: 'oracle-dba-24-7',
      title: "Oracle Database Administrator (DBA)",
      ...oracleDbaMandate.en,
    },
    {
      id: 'senior-it-governance-project-advisor',
      title: "Senior IT Governance and Project Management Advisor",
      ...seniorItGovernanceAdvisorMandate.en,
    },
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
  ],
  fr: [
    {
      id: 'emerging-tech-solutions-analyst',
      title: 'Analyste en solutions technologiques émergentes',
      ...emergingTechAnalystMandate.fr,
    },
    {
      id: 'governance-advisor',
      title: 'Conseiller/ère en gouvernance',
      ...governanceAdvisorMandate.fr,
    },
    {
      id: 'business-analyst-management-frameworks',
      title: "Analyste d’affaires – assises de gestion",
      ...businessAnalystFrameworksMandate.fr,
    },
    {
      id: 'it-solutions-analyst-iam-m365',
      title: "Analyste en gestion administrative des solutions TI – GIA / M365",
      ...itSolutionsIamMandate.fr,
    },
    {
      id: 'iam-solutions-analyst',
      title: "Analyste en gestion administrative des solutions TI – GIA",
      ...itSolutionsIamOnlyMandate.fr,
    },
    {
      id: 'senior-it-project-manager-health',
      title: "Chargé(e) de projet TI senior",
      ...seniorItProjectManagerMandate.fr,
    },
    {
      id: 'oracle-dba-24-7',
      title: "Administrateur(trice) de bases de données Oracle (DBA)",
      ...oracleDbaMandate.fr,
    },
    {
      id: 'senior-it-governance-project-advisor',
      title: "Conseiller(ère) sénior en gouvernance et gestion de projets TI",
      ...seniorItGovernanceAdvisorMandate.fr,
    },
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
  ],
};

export function getJob(lang: 'fr' | 'en', id: string | undefined): JobDetail | undefined {
  if (!id) return undefined;
  return jobsContent[lang].find((job) => job.id === id);
}
