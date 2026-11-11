import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from '../i18n/router';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Rocket, GraduationCap, HeartHandshake, Paperclip, CheckCircle2 } from 'lucide-react';
import SocialShareButtons from '../components/SocialShareButtons';
import { useLanguage } from '../i18n/LanguageContext';

const SPONTANEOUS_ID = 'spontaneous';

const perkIcons = [Rocket, GraduationCap, HeartHandshake];

interface JobText {
  id: string;
  title: string;
  description: string;
  location: string;
  type: string;
}

interface PerkText {
  title: string;
  text: string;
}

interface CareersTranslations {
  heroTitleLead: string;
  heroTitleAccent: string;
  heroSubtitle: string;
  viewPositions: string;
  spontaneousLabel: string;
  whyTitleLead: string;
  whyTitleAccent: string;
  perks: PerkText[];
  openTitleLead: string;
  openTitleAccent: string;
  jobs: JobText[];
  apply: string;
  viewDetails: string;
  applyTitleLead: string;
  applyTitleAccent: string;
  successMessage: string;
  successReturnToJobs: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  positionLabel: string;
  linkedinLabel: string;
  linkedinPlaceholder: string;
  attachmentLabel: string;
  attachmentHelp: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  submitByEmail: string;
  shareGroupLabel: string;
  sharePrefix: string;
  shareOnLinkedIn: string;
  shareOnWhatsApp: string;
  shareOnFacebook: string;
}

const translations: Record<'fr' | 'en', CareersTranslations> = {
  en: {
    heroTitleLead: 'Join ',
    heroTitleAccent: 'our team',
    heroSubtitle:
      'Build data and software solutions that transform organizations, in the heart of Sherbrooke.',
    viewPositions: 'View open positions',
    spontaneousLabel: 'Spontaneous application',
    whyTitleLead: 'Why ',
    whyTitleAccent: 'join us',
    perks: [
      {
        title: 'Stimulating projects',
        text: 'Work with cutting-edge technologies: BI, AI and custom development.',
      },
      {
        title: 'Growth & training',
        text: 'Benefit from a training budget and mentorship to grow at your own pace.',
      },
      {
        title: 'Work-life balance',
        text: 'Enjoy flexible hours and hybrid remote work that fits your reality.',
      },
    ],
    openTitleLead: 'Open ',
    openTitleAccent: 'positions',
    jobs: [
      {
        id: 'oracle-dba-24-7',
        title: "Oracle Database Administrator (DBA)",
        description:
          "Join a 24/7 support team for a Québec public organization: Oracle 19 administration on Red Hat Enterprise Linux 8, monitoring, updates, failover testing and incidents.",
        location: "Remote (Canada)",
        type: "3 years (+ two 1-year options) · 24/7 on-call",
      },
      {
        id: 'senior-it-governance-project-advisor',
        title: "Senior IT Governance and Project Management Advisor",
        description:
          "Support project teams in the project office of a large Québec public organization: compliance with scope, schedule, cost and the IT governance framework.",
        location: "Quebec City / Hybrid (3 days on site)",
        type: "3 years · 35 h/week",
      },
      {
        id: 'emerging-tech-solutions-analyst',
        title: 'Emerging Technology Solutions Analyst',
        description:
          'Translate clinical, organizational and IT needs into requirements, assess AI solutions and design business-oriented semantic models and indicators in healthcare.',
        location: 'Montreal or Quebec City / Hybrid',
        type: '36 months · Full-time',
      },
      {
        id: 'governance-advisor',
        title: 'Governance Advisor',
        description:
          'Build and lead the AI governance framework, structures and processes in healthcare, and steer the portfolio, partnerships and performance indicators.',
        location: 'Montreal or Quebec City / Hybrid',
        type: '36 months · Full-time',
      },
      {
        id: 'business-analyst-management-frameworks',
        title: "Business Analyst – Management Frameworks",
        description:
          "Develop, revise and drive adoption of management frameworks (policies, frameworks, directives, guides, procedures) with stakeholders in healthcare.",
        location: "Montreal or Quebec City / Hybrid",
        type: "36 months · Full-time",
      },
      {
        id: 'it-solutions-analyst-iam-m365',
        title: "IT Solutions Administrative Analyst – IAM / M365",
        description:
          "Support identity and access management (IAM) operations and Santé Québec’s Microsoft 365 environment: tickets, configurations, Entra ID and new processes.",
        location: "Remote (Québec)",
        type: "12 months · Full-time",
      },
      {
        id: 'iam-solutions-analyst',
        title: "IT Solutions Administrative Analyst – IAM",
        description:
          "Support and evolve Santé Québec’s identity and access management (IAM) solutions: tickets, configurations and identity lifecycle automation (SQL, Python).",
        location: "Remote (Québec)",
        type: "12 months · Full-time",
      },
      {
        id: 'senior-it-project-manager-health',
        title: "Senior IT Project Manager",
        description:
          "Manage several Santé Québec digital projects end to end, including DAAMM and IEVD: planning, stakeholders, risks, budget, testing and go-live.",
        location: "Remote (Québec)",
        type: "12 months · 35 h/week",
      },
      {
        id: 'senior-agile-project-manager',
        title: 'Senior Project Manager – Agile Profile',
        description:
          'Lead agile delivery for a data strategy team, coordinate multidisciplinary stakeholders, and manage scope, schedule, effort, costs and quality.',
        location: 'Montreal or Quebec City / Hybrid',
        type: '24 months · 35 h/week',
      },
      {
        id: 'senior-data-engineer',
        title: 'Senior Data Engineer',
        description:
          'Build modern Microsoft Fabric analytics solutions, data pipelines and clinical-system integrations for Quebec’s health network.',
        location: 'Montreal or Quebec City / Hybrid',
        type: '24 months · 35 h/week',
      },
      {
        id: 'intermediate-business-analyst-ai',
        title: 'Intermediate Business Analyst – AI',
        description:
          'Bridge business, clinical and technical teams to identify, assess and deliver responsible AI opportunities in healthcare.',
        location: 'Montreal or Quebec City / Hybrid',
        type: '24 months · 35 h/week',
      },
      {
        id: 'information-security-governance',
        title: 'Information Security Governance and Risk Advisor',
        description:
          'Support the Public Curator’s information-security governance, security-risk management and digital transformation program.',
        location: 'To be confirmed',
        type: 'Governance and risk management',
      },
      {
        id: 'bi',
        title: 'Business Intelligence Analyst',
        description:
          'Turn our clients’ data into clear dashboards and useful indicators that guide their strategic decisions.',
        location: 'Sherbrooke / Hybrid',
        type: 'Full-time',
      },
    ],
    apply: 'Apply',
    viewDetails: 'View details',
    applyTitleLead: 'Submit your ',
    applyTitleAccent: 'application',
    successMessage: 'Thank you! Your application has been received and will be reviewed with the greatest attention. A member of our recruitment team will contact you shortly. A confirmation email has been sent to you.',
    successReturnToJobs: 'Back to available positions',
    nameLabel: 'First & Last Name',
    namePlaceholder: 'e.g. John Smith',
    emailLabel: 'Email',
    emailPlaceholder: 'john@example.com',
    phoneLabel: 'Phone',
    positionLabel: 'Position applied for',
    linkedinLabel: 'LinkedIn profile (optional)',
    linkedinPlaceholder: 'https://www.linkedin.com/in/your-profile',
    attachmentLabel: 'Add attachment',
    attachmentHelp: 'Accepted files: PDF and Word (.pdf, .doc, .docx) - 10 MB total maximum',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your background and what motivates you...',
    submit: 'Submit my application',
    submitByEmail: 'Send my application by email',
    shareGroupLabel: 'Share this position',
    sharePrefix: 'Check out this position:',
    shareOnLinkedIn: 'LinkedIn',
    shareOnWhatsApp: 'WhatsApp',
    shareOnFacebook: 'Facebook',
  },
  fr: {
    heroTitleLead: 'Rejoignez ',
    heroTitleAccent: 'notre équipe',
    heroSubtitle:
      'Créez des solutions de données et de logiciels qui transforment les organisations, au cœur de Sherbrooke.',
    viewPositions: 'Voir les postes ouverts',
    spontaneousLabel: 'Candidature spontanée',
    whyTitleLead: 'Pourquoi ',
    whyTitleAccent: 'nous joindre',
    perks: [
      {
        title: 'Des projets stimulants',
        text: 'Travaillez avec des technologies de pointe : BI, IA et développement sur mesure.',
      },
      {
        title: 'Croissance et formation',
        text: 'Profitez d’un budget de formation et de mentorat pour progresser à votre rythme.',
      },
      {
        title: 'Équilibre travail-vie personnelle',
        text: 'Profitez d’horaires flexibles et du télétravail hybride qui s’adaptent à votre réalité.',
      },
    ],
    openTitleLead: 'Postes ',
    openTitleAccent: 'ouverts',
    jobs: [
      {
        id: 'oracle-dba-24-7',
        title: "Administrateur(trice) de bases de données Oracle (DBA)",
        description:
          "Rejoindre une équipe de soutien 24/7 d’un organisme public québécois : administration d’Oracle 19 sous Red Hat Enterprise Linux 8, surveillance, mises à jour, relève et incidents.",
        location: "Télétravail (Canada)",
        type: "3 ans (+ 2 options d’un an) · Garde 24/7",
      },
      {
        id: 'senior-it-governance-project-advisor',
        title: "Conseiller(ère) sénior en gouvernance et gestion de projets TI",
        description:
          "Accompagner les équipes de projet du bureau de projets d’un grand organisme public québécois : respect de la portée, de l’échéancier, des coûts et du cadre de gouvernance TI.",
        location: "Québec / Hybride (3 jours au bureau)",
        type: "3 ans · 35 h/semaine",
      },
      {
        id: 'emerging-tech-solutions-analyst',
        title: 'Analyste en solutions technologiques émergentes',
        description:
          'Traduire les besoins cliniques, organisationnels et TI en exigences, évaluer les solutions d’IA et concevoir des modèles sémantiques et des indicateurs orientés métier en santé.',
        location: 'Montréal ou Québec / Hybride',
        type: '36 mois · Temps plein',
      },
      {
        id: 'governance-advisor',
        title: 'Conseiller/ère en gouvernance',
        description:
          'Élaborer et piloter le cadre, les structures et les processus de gouvernance de l’IA en santé, ainsi que le portefeuille, les partenariats et les indicateurs de performance.',
        location: 'Montréal ou Québec / Hybride',
        type: '36 mois · Temps plein',
      },
      {
        id: 'business-analyst-management-frameworks',
        title: "Analyste d’affaires – assises de gestion",
        description:
          "Élaborer, réviser et faire adopter les assises de gestion (politiques, cadres, directives, guides, procédures) avec les parties prenantes, en santé.",
        location: "Montréal ou Québec / Hybride",
        type: "36 mois · Temps plein",
      },
      {
        id: 'it-solutions-analyst-iam-m365',
        title: "Analyste en gestion administrative des solutions TI – GIA / M365",
        description:
          "Soutenir les opérations de gestion des identités et des accès (GIA) et l’environnement Microsoft 365 de Santé Québec : requêtes, configurations, Entra ID et nouveaux processus.",
        location: "Télétravail (Québec)",
        type: "12 mois · Temps plein",
      },
      {
        id: 'iam-solutions-analyst',
        title: "Analyste en gestion administrative des solutions TI – GIA",
        description:
          "Soutenir et faire évoluer les solutions de gestion des identités et des accès (GIA) de Santé Québec : requêtes, configurations, automatisations du cycle de vie des identités (SQL, Python).",
        location: "Télétravail (Québec)",
        type: "12 mois · Temps plein",
      },
      {
        id: 'senior-it-project-manager-health',
        title: "Chargé(e) de projet TI senior",
        description:
          "Gérer de bout en bout plusieurs projets numériques de Santé Québec, dont DAAMM et IEVD : planification, parties prenantes, risques, budget, essais et mise en production.",
        location: "Télétravail (Québec)",
        type: "12 mois · 35 h/semaine",
      },
      {
        id: 'senior-agile-project-manager',
        title: 'Chargé de projet senior – Profil Agile',
        description:
          'Accompagner une équipe en stratégie des données en mode agile, coordonner les parties prenantes et suivre la portée, les échéanciers, les coûts et la qualité.',
        location: 'Montréal ou Québec / Hybride',
        type: '24 mois · 35 h/semaine',
      },
      {
        id: 'senior-data-engineer',
        title: 'Ingénieur de données senior',
        description:
          'Concevoir des solutions analytiques modernes avec Microsoft Fabric, des pipelines de données et l’intégration de systèmes cliniques du réseau de la santé du Québec.',
        location: 'Montréal ou Québec / Hybride',
        type: '24 mois · 35 h/semaine',
      },
      {
        id: 'intermediate-business-analyst-ai',
        title: "Analyste d'affaires intermédiaire – IA",
        description:
          'Faire le lien entre les équipes d’affaires, cliniques et techniques pour évaluer et réaliser des possibilités d’IA responsables en santé.',
        location: 'Montréal ou Québec / Hybride',
        type: '24 mois · 35 h/semaine',
      },
      {
        id: 'information-security-governance',
        title: "Conseiller en sécurité de l'information – spécialiste gouvernance et gestion du risque",
        description:
          'Soutenir la gouvernance de la sécurité de l’information, la gestion des risques et le programme de transformation numérique du Curateur public.',
        location: 'Lieu à confirmer',
        type: 'Gouvernance et gestion du risque',
      },
      {
        id: 'bi',
        title: 'Analyste en intelligence d’affaires',
        description:
          'Transformez les données de nos clients en tableaux de bord clairs et en indicateurs utiles qui guident leurs décisions stratégiques.',
        location: 'Sherbrooke / Hybride',
        type: 'Temps plein',
      },
    ],
    apply: 'Postuler',
    viewDetails: 'Voir les détails',
    applyTitleLead: 'Soumettez votre ',
    applyTitleAccent: 'candidature',
    successMessage: 'Merci! Votre candidature a bien été reçue et sera examinée avec la plus grande attention. Un membre de notre équipe de recrutement entrera en contact avec vous sous peu. Un courriel de confirmation vous a été envoyé.',
    successReturnToJobs: 'Retour aux postes disponibles',
    nameLabel: 'Prénom et nom',
    namePlaceholder: 'ex. Jean Tremblay',
    emailLabel: 'Courriel',
    emailPlaceholder: 'jean@exemple.com',
    phoneLabel: 'Téléphone',
    positionLabel: 'Poste visé',
    linkedinLabel: 'Profil LinkedIn (facultatif)',
    linkedinPlaceholder: 'https://www.linkedin.com/in/votre-profil',
    attachmentLabel: 'Ajouter pièce jointe',
    attachmentHelp: 'Fichiers acceptés : PDF et Word (.pdf, .doc, .docx) - 10 Mo au total maximum',
    messageLabel: 'Message',
    messagePlaceholder: 'Parlez-nous de votre parcours et de ce qui vous motive...',
    submit: 'Soumettre ma demande',
    submitByEmail: 'Soumettre ma demande',
    shareGroupLabel: 'Partager ce poste',
    sharePrefix: 'Découvrez ce poste :',
    shareOnLinkedIn: 'LinkedIn',
    shareOnWhatsApp: 'WhatsApp',
    shareOnFacebook: 'Facebook',
  },
};

const inputClass =
  'w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-ci-navy placeholder:text-ci-navy focus:ring-2 focus:ring-ci-blue-500 focus:border-ci-blue-500 focus:outline-none transition-all';

const techCardClass =
  'bg-white/90 border border-slate-200 rounded-xl backdrop-blur transition-all duration-300 hover:border-ci-blue-500 hover:shadow-[0_25px_50px_-25px_rgba(21,89,209,0.45)]';

export default function CareersPage() {
  const { lang: currentLang } = useLanguage();
  const lang: 'fr' | 'en' = currentLang === 'fr' ? 'fr' : 'en';
  const t = translations[lang];

  const location = useLocation();
  const navigate = useNavigate();

  const [selectedJob, setSelectedJob] = useState<string>(SPONTANEOUS_ID);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');





  const labelFor = (id: string) =>
    id === SPONTANEOUS_ID ? t.spontaneousLabel : t.jobs.find((j) => j.id === id)?.title ?? t.spontaneousLabel;

  const selectedLabel = labelFor(selectedJob);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApply = (id: string) => {
    setSelectedJob(id);
    scrollTo('candidature');
  };

  useEffect(() => {
    const applyTo = (location.state as { applyTo?: string } | null)?.applyTo;
    if (applyTo && t.jobs.some((j) => j.id === applyTo)) {
      setSelectedJob(applyTo);
      setTimeout(() => scrollTo('candidature'), 100);
      navigate(location.pathname, { replace: true, state: null });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    const form = event.currentTarget;

    try {
      setIsSubmitting(true);
      const response = await fetch('/api/send-application.php', {
        method: 'POST',
        body: new FormData(form),
      });
      if (!response.headers.get('content-type')?.includes('application/json')) {
        throw new Error(
          'Le serveur ne traite pas PHP. En local, Vite ne peut pas envoyer le courriel; publiez le dossier dist sur cPanel avec PHP activé.',
        );
      }
      const result = await response.json() as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || 'Le courriel n’a pas pu être envoyé. Veuillez réessayer.');
      }

      form.reset();
      setAttachment(null);
      setEmailSent(true);
      setSelectedJob(SPONTANEOUS_ID);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Le courriel n’a pas pu être envoyé. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {emailSent && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 p-4 backdrop-blur-sm">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-success-title"
            className="w-full max-w-md rounded-2xl border border-ci-green-400/30 bg-white p-8 text-center text-ci-navy shadow-2xl"
          >
            <CheckCircle2 aria-hidden="true" className="mx-auto mb-5 h-12 w-12 text-ci-green-600" />
            <h2 id="application-success-title" className="text-xl font-medium leading-relaxed">
              {t.successMessage}
            </h2>
            <button
              type="button"
              onClick={() => {
                setEmailSent(false);
                requestAnimationFrame(() => scrollTo('postes'));
              }}
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-lg bg-ci-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-ci-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              {t.successReturnToJobs}
            </button>
          </section>
        </div>,
        document.body,
      )}
      <div id="careers-page-root-c4r33rs1" className="pt-20 bg-transparent text-slate-700 min-h-screen">
      {/* Hero */}
      <section className="relative bg-transparent text-ci-navy py-24">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(#1559d1 1px, transparent 1px), linear-gradient(90deg, #1559d1 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold tracking-[-0.03em] text-ci-navy text-5xl md:text-7xl mb-8"
          >
            {t.heroTitleLead}<span className="text-gradient-ci">{t.heroTitleAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ci-navy text-xl font-light max-w-2xl mb-12"
          >
            {t.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              type="button"
              onClick={() => scrollTo('postes')}
              className="inline-flex items-center justify-center gap-2 bg-ci-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-ci-blue-700 hover:shadow-[0_25px_50px_-25px_rgba(21,89,209,0.45)] transition-all"
            >
              <Briefcase className="w-5 h-5" />
              {t.viewPositions}
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedJob(SPONTANEOUS_ID);
                scrollTo('candidature');
              }}
              className="inline-flex items-center justify-center gap-2 border border-ci-blue-200 text-ci-blue-600 px-8 py-4 rounded-full font-medium hover:bg-ci-blue-500/10 hover:border-ci-blue-500 transition-all"
            >
              {t.spontaneousLabel}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why join us */}
      <section className="bg-transparent py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold tracking-[-0.03em] text-ci-navy text-4xl md:text-5xl mb-16"
          >
            {t.whyTitleLead}<span className="text-gradient-ci">{t.whyTitleAccent}</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.perks.map((perk, i) => {
              const Icon = perkIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${techCardClass} p-8`}
                >
                  <div className="w-12 h-12 bg-ci-blue-500/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-ci-blue-600" />
                  </div>
                  <h3 className="text-xl font-sans font-medium text-ci-navy mb-3">{perk.title}</h3>
                  <p className="text-ci-navy font-light">{perk.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="postes" className="bg-white/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold tracking-[-0.03em] text-ci-navy text-4xl md:text-5xl mb-16"
          >
            {t.openTitleLead}<span className="text-gradient-ci">{t.openTitleAccent}</span>
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => navigate(`/careers/${job.id}/`)}
                className={`${techCardClass} p-8 flex flex-col cursor-pointer`}
              >
                <h3 className="text-xl font-sans font-medium text-ci-navy mb-3">
                  <Link
                    to={`/careers/${job.id}/`}
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-ci-blue-600 transition-colors"
                  >
                    {job.title}
                  </Link>
                </h3>
                <p className="text-ci-navy font-light mb-6 flex-1">{job.description}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="inline-flex items-center gap-2 text-sm text-ci-navy bg-white border border-slate-200 rounded-full px-3 py-1">
                    <MapPin className="w-4 h-4 text-ci-blue-600" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-ci-navy bg-white border border-slate-200 rounded-full px-3 py-1">
                    <Clock className="w-4 h-4 text-ci-blue-600" />
                    {job.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/careers/${job.id}/`}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-ci-blue-600 text-white rounded-full px-8 py-3 font-medium hover:bg-ci-blue-700 hover:shadow-[0_25px_50px_-25px_rgba(21,89,209,0.45)] transition-all"
                  >
                    {t.viewDetails}
                  </Link>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleApply(job.id);
                    }}
                    className="border border-ci-blue-200 text-ci-blue-600 rounded-full px-8 py-3 font-medium hover:bg-ci-blue-500/10 transition-all"
                  >
                    {t.apply}
                  </button>
                  <SocialShareButtons
                    jobId={job.id}
                    jobTitle={job.title}
                    labels={{
                      group: t.shareGroupLabel,
                      linkedin: t.shareOnLinkedIn,
                      whatsapp: t.shareOnWhatsApp,
                      facebook: t.shareOnFacebook,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application */}
      <section id="candidature" className="bg-transparent text-ci-navy py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold tracking-[-0.03em] text-ci-navy text-4xl md:text-5xl mb-12"
          >
            {t.applyTitleLead}<span className="text-gradient-ci">{t.applyTitleAccent}</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-2xl text-ci-navy text-left"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <input type="hidden" name="lang" value={lang} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="careers-name" className="text-sm font-medium text-ci-navy">{t.nameLabel}</label>
                  <input
                    id="careers-name"
                    type="text"
                    name="name"
                    required
                    className={inputClass}
                    placeholder={t.namePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="careers-email" className="text-sm font-medium text-ci-navy">{t.emailLabel}</label>
                  <input
                    id="careers-email"
                    type="email"
                    name="email"
                    required
                    className={inputClass}
                    placeholder={t.emailPlaceholder}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="careers-phone" className="text-sm font-medium text-ci-navy">{t.phoneLabel}</label>
                  <input
                    id="careers-phone"
                    type="tel"
                    name="phone"
                    required
                    className={inputClass}
                    placeholder="(819) 555-0123"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="careers-position" className="text-sm font-medium text-ci-navy">{t.positionLabel}</label>
                  <input
                    id="careers-position"
                    type="text"
                    name="position"
                    required
                    value={selectedLabel}
                    readOnly
                    className={`${inputClass} cursor-default`}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="careers-linkedin" className="text-sm font-medium text-ci-navy">{t.linkedinLabel}</label>
                <input
                  id="careers-linkedin"
                  type="url"
                  name="linkedin_url"
                  className={inputClass}
                  placeholder={t.linkedinPlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="careers-attachment" className="text-sm font-medium text-ci-navy">{t.attachmentLabel}</label>
                <p className="text-xs text-ci-navy font-light">{t.attachmentHelp}</p>
                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                  <input
                    id="careers-attachment"
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="hidden"
                    onChange={(event) => setAttachment(event.currentTarget.files?.[0] ?? null)}
                  />
                  <label
                    htmlFor="careers-attachment"
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-ci-blue-200 bg-ci-blue-500/10 px-5 py-3 text-sm font-medium text-ci-blue-600 transition-all hover:border-ci-blue-500 hover:bg-ci-blue-500/20"
                  >
                    <Paperclip className="w-4 h-4" />
                    Parcourir
                  </label>
                  <span className="min-h-[20px] text-sm text-slate-600">
                    {attachment?.name || 'Aucun fichier sélectionné'}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="careers-message" className="text-sm font-medium text-ci-navy">{t.messageLabel}</label>
                <textarea
                  id="careers-message"
                  name="message"
                  rows={5}
                  required
                  className={inputClass}
                  placeholder={t.messagePlaceholder}
                />
              </div>
              <div className="space-y-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 bg-ci-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-ci-blue-700 transition-all w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Paperclip className="w-4 h-4" />
                  {isSubmitting ? 'Envoi en cours...' : t.submitByEmail}
                </button>
                {submitError && (
                  <p className="text-sm text-red-300">{submitError}</p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
