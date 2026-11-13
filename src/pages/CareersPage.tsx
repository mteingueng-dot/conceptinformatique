import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from '../i18n/router';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, CalendarClock, Rocket, GraduationCap, HeartHandshake, Paperclip, CheckCircle2 } from 'lucide-react';
import SocialShareButtons from '../components/SocialShareButtons';
import { useLanguage } from '../i18n/LanguageContext';
import Photo from '../components/Photo';
import type { PhotoKey } from '../data/photos';
import { useRemoteJobs, formatDeadline, jobsFor } from '../data/remoteJobs';
import { siteJobsFromApp } from '../data/jobs';

// Contenu ajouté : vie d'équipe en images et étapes du recrutement
const careersExtra = {
  fr: {
    lifeTitleLead: 'La vie chez ',
    lifeTitleAccent: 'Concept Informatique',
    lifeText: 'Des projets variés, des technologies récentes et une équipe qui partage ses connaissances.',
    life: [
      { photo: 'equipe-collaboration', title: 'Travail d’équipe', text: 'Des équipes mixtes où chacun apporte son expertise.' },
      { photo: 'expertise-support-ti', title: 'Apprentissage continu', text: 'Des mandats qui font grandir vos compétences.' },
      { photo: 'bureau-lumineux', title: 'Mode hybride', text: 'Selon le mandat : au bureau, chez le client ou à distance.' },
    ] as { photo: PhotoKey; title: string; text: string }[],
    stepsTitleLead: 'Notre processus de ',
    stepsTitleAccent: 'recrutement',
    steps: [
      { title: 'Candidature', text: 'Vous postulez en ligne et recevez aussitôt un courriel de confirmation.' },
      { title: 'Analyse du profil', text: 'Notre équipe de recrutement examine votre candidature avec attention.' },
      { title: 'Entrevue', text: 'Un échange pour parler de votre parcours, de vos objectifs et du mandat.' },
      { title: 'Proposition', text: 'Si votre profil correspond, nous vous présentons une offre et préparons votre arrivée.' },
    ],
  },
  en: {
    lifeTitleLead: 'Life at ',
    lifeTitleAccent: 'Concept Informatique',
    lifeText: 'Varied projects, recent technologies and a team that shares its knowledge.',
    life: [
      { photo: 'equipe-collaboration', title: 'Teamwork', text: 'Mixed teams where everyone brings their expertise.' },
      { photo: 'expertise-support-ti', title: 'Continuous learning', text: 'Engagements that grow your skills.' },
      { photo: 'bureau-lumineux', title: 'Hybrid work', text: 'Depending on the engagement: at the office, on the client’s site or remotely.' },
    ] as { photo: PhotoKey; title: string; text: string }[],
    stepsTitleLead: 'Our recruitment ',
    stepsTitleAccent: 'process',
    steps: [
      { title: 'Application', text: 'You apply online and immediately receive a confirmation email.' },
      { title: 'Profile review', text: 'Our recruitment team carefully reviews your application.' },
      { title: 'Interview', text: 'A conversation about your background, your goals and the engagement.' },
      { title: 'Offer', text: 'If your profile is a match, we present an offer and prepare your arrival.' },
    ],
  },
};

const SPONTANEOUS_ID = 'spontaneous';

const perkIcons = [Rocket, GraduationCap, HeartHandshake];

interface JobText {
  id: string;
  title: string;
  description: string;
  location: string;
  type: string;
  /** Date limite (AAAA-MM-JJ), donnée par l'application RH */
  deadline?: string;
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
  deadline: string;
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
        id: 'it-project-manager-dotnet-systems',
        title: "Project Manager – .NET Information Systems",
        description:
          "Lead a 3-year engagement to maintain, evolve and develop .NET systems for a large public organization: planning, resources, deliveries and accountability reporting.",
        location: "Quebec City or Montreal / Hybrid (3 days on site)",
        type: "3-year engagement",
      },
      {
        id: 'functional-analyst-dotnet',
        title: "Functional Analyst – .NET Ecosystem (2 positions)",
        description:
          "Analyze, test and evolve a large public organization’s .NET systems for 3 years. Two positions: one on the strategic team, one on the back-up team.",
        location: "Quebec City or Montreal / Hybrid (3 days on site)",
        type: "3-year engagement",
      },
      {
        id: 'dotnet-programmer',
        title: ".NET Programmer",
        description:
          "Program, test and fix a large public organization’s .NET systems for 3 years, as part of a back-up team mobilized as projects require.",
        location: "Quebec City or Montreal / Hybrid (3 days on site)",
        type: "3-year engagement",
      },
      {
        id: 'functional-architecture-advisor',
        title: "Functional Architecture Advisor",
        description:
          "Provide functional architecture advice (data and processing) to a large public organization’s .NET projects for 3 years.",
        location: "Quebec City or Montreal / Hybrid (3 days on site)",
        type: "3-year engagement",
      },
      {
        id: 'dotnet-technical-architecture-advisor',
        title: ".NET Technical (Organic) Architecture Advisor",
        description:
          "Guide a large public organization’s .NET programmers for 3 years: technical architecture, code quality, performance and reusable components.",
        location: "Quebec City or Montreal / Hybrid (3 days on site)",
        type: "3-year engagement",
      },
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
    deadline: 'Apply by',
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
        id: 'it-project-manager-dotnet-systems',
        title: "Chargé(e) de projet – systèmes d’information .NET",
        description:
          "Diriger un mandat de 3 ans d’entretien, d’évolution et de développement de systèmes .NET pour un grand organisme public : planification, ressources, livraisons et reddition de comptes.",
        location: "Québec ou Montréal / Hybride (3 jours au bureau)",
        type: "Mandat de 3 ans",
      },
      {
        id: 'functional-analyst-dotnet',
        title: "Analyste fonctionnel(le) – écosystème .NET (2 postes)",
        description:
          "Analyser, tester et faire évoluer les systèmes .NET d’un grand organisme public pendant 3 ans. Deux postes : un dans l’équipe stratégique, un dans l’équipe d’appoint.",
        location: "Québec ou Montréal / Hybride (3 jours au bureau)",
        type: "Mandat de 3 ans",
      },
      {
        id: 'dotnet-programmer',
        title: "Programmeur(euse) .NET",
        description:
          "Programmer, tester et corriger les systèmes .NET d’un grand organisme public pendant 3 ans, au sein d’une équipe d’appoint mobilisée selon les projets.",
        location: "Québec ou Montréal / Hybride (3 jours au bureau)",
        type: "Mandat de 3 ans",
      },
      {
        id: 'functional-architecture-advisor',
        title: "Conseiller(ère) en architecture fonctionnelle",
        description:
          "Apporter l’expertise-conseil en architecture fonctionnelle (données et traitements) aux projets .NET d’un grand organisme public pendant 3 ans.",
        location: "Québec ou Montréal / Hybride (3 jours au bureau)",
        type: "Mandat de 3 ans",
      },
      {
        id: 'dotnet-technical-architecture-advisor',
        title: "Conseiller(ère) en architecture organique .NET",
        description:
          "Guider les programmeurs .NET d’un grand organisme public pendant 3 ans : architecture organique, qualité du code, performance et composants réutilisables.",
        location: "Québec ou Montréal / Hybride (3 jours au bureau)",
        type: "Mandat de 3 ans",
      },
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
    deadline: 'Date limite :',
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
  const x = careersExtra[lang];

  const location = useLocation();
  const navigate = useNavigate();

  const [selectedJob, setSelectedJob] = useState<string>(SPONTANEOUS_ID);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Offres publiées par l'application RH ; tant qu'elle n'a pas répondu (ou si elle échoue) : celles de cette page
  const remote = useRemoteJobs();
  // (les cartes écrites ci-dessus ne servent que si le build n'a capturé aucune offre de l'application RH)
  const jobs: JobText[] =
    remote.status === 'ready' || siteJobsFromApp
      ? jobsFor(remote, lang).map((j) => ({ id: j.id, title: j.title, description: j.summary, location: j.location, type: j.type, deadline: j.deadline }))
      : t.jobs;

  const labelFor = (id: string) =>
    id === SPONTANEOUS_ID ? t.spontaneousLabel : jobs.find((j) => j.id === id)?.title ?? t.spontaneousLabel;

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
    if (remote.status === 'loading') return; // on attend la liste à jour avant de choisir le poste
    if (applyTo && jobs.some((j) => j.id === applyTo)) {
      setSelectedJob(applyTo);
      setTimeout(() => scrollTo('candidature'), 100);
      navigate(location.pathname, { replace: true, state: null });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state, remote.status]);

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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold tracking-[-0.03em] text-ci-navy text-5xl md:text-6xl mb-8"
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
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-ci-blue-200/60 to-ci-green-100/60 blur-2xl" />
            <Photo name="espace-de-travail" priority sizes="(min-width: 1024px) 45vw, 100vw" className="relative aspect-[3/2] w-full rounded-3xl border border-white shadow-[0_30px_60px_-30px_rgba(11,31,58,0.5)]" />
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

      {/* Vie d'équipe en images */}
      <section className="bg-white/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold tracking-[-0.03em] text-ci-navy text-4xl md:text-5xl mb-4"
          >
            {x.lifeTitleLead}<span className="text-gradient-ci">{x.lifeTitleAccent}</span>
          </motion.h2>
          <p className="text-slate-600 text-lg font-light mb-12 max-w-2xl">{x.lifeText}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {x.life.map((item, i) => (
              <motion.figure
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-ci-navy shadow-[0_25px_50px_-30px_rgba(11,31,58,0.6)]"
              >
                <Photo name={item.photo} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[4/5] w-full transition-transform duration-700 group-hover:scale-105" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/90 via-[#0b1f3a]/20 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-xl font-bold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-white/80">{item.text}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de recrutement */}
      <section className="bg-transparent py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold tracking-[-0.03em] text-ci-navy text-4xl md:text-5xl mb-16"
          >
            {x.stepsTitleLead}<span className="text-gradient-ci">{x.stepsTitleAccent}</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {x.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="text-6xl font-sans font-bold text-slate-200 absolute -top-10 -left-4 z-0 group-hover:text-ci-green-600 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="text-xl font-sans font-medium mb-3 text-ci-green-600">{step.title}</h3>
                  <p className="text-slate-600 font-light text-sm leading-relaxed">{step.text}</p>
                </div>
              </motion.div>
            ))}
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
            {jobs.map((job, i) => (
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
                  {job.deadline && (
                    <span className="inline-flex items-center gap-2 text-sm text-ci-navy bg-white border border-slate-200 rounded-full px-3 py-1">
                      <CalendarClock className="w-4 h-4 text-ci-blue-600" />
                      {t.deadline} {formatDeadline(job.deadline, lang)}
                    </span>
                  )}
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
