import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
        id: 'organic-architecture-one',
        title: 'Organic Architecture Advisor (1 resource)',
        description:
          'Support product teams with software architecture, shared infrastructure and services, continuous delivery, and complex organic issues.',
        location: 'Quebec City / Hybrid',
        type: '713 person-days · 35 h/week',
      },
      {
        id: 'organic-architecture-three',
        title: 'Organic Architecture Advisors (3 resources)',
        description:
          'Support product teams with software architecture, shared infrastructure and services, continuous delivery, and complex organic issues.',
        location: 'Quebec City / Hybrid',
        type: '713 person-days · 35 h/week',
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
        id: 'typo3-php-solr',
        title: 'Senior TYPO3/PHP/Solr Developers',
        description:
          'Remote 36-month, on-demand hour bank supporting AWS, TYPO3, PHP and Solr, including delivery improvements, automation and knowledge transfer.',
        location: 'Remote',
        type: '36-month contract',
      },
      {
        id: 'fullstack',
        title: 'Full-Stack Software Developer',
        description:
          'Design and deliver custom web applications, from the interface to the API, in collaboration with our data teams and our clients.',
        location: 'Sherbrooke / Hybrid',
        type: 'Full-time',
      },
      {
        id: 'bi',
        title: 'Business Intelligence Analyst',
        description:
          'Turn our clients’ data into clear dashboards and useful indicators that guide their strategic decisions.',
        location: 'Sherbrooke / Hybrid',
        type: 'Full-time',
      },
      {
        id: 'support',
        title: 'IT Support Technician',
        description:
          'Provide technical support to our clients, resolve incidents, and help keep their environments secure and stable.',
        location: 'Sherbrooke',
        type: 'Full-time',
      },
    ],
    apply: 'Apply',
    viewDetails: 'View details',
    applyTitleLead: 'Submit your ',
    applyTitleAccent: 'application',
    successMessage: 'Your application was submitted successfully.',
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
        id: 'organic-architecture-one',
        title: 'Conseiller en architecture organique – 1 ressource',
        description:
          'Soutenir les équipes produit en architecture logicielle, infrastructures et services communs, déploiement continu et résolution de problèmes organiques complexes.',
        location: 'Québec / Hybride',
        type: '713 j-p · 35 h/semaine',
      },
      {
        id: 'organic-architecture-three',
        title: 'Conseillers en architecture organique – 3 ressources',
        description:
          'Soutenir les équipes produit en architecture logicielle, infrastructures et services communs, déploiement continu et résolution de problèmes organiques complexes.',
        location: 'Québec / Hybride',
        type: '713 j-p · 35 h/semaine',
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
        id: 'typo3-php-solr',
        title: 'Développeurs sénior TYPO3/PHP/Solr',
        description:
          'Mandat à distance de 36 mois sous forme de banque d’heures sur demande, en soutien à AWS, TYPO3, PHP et Solr, avec transfert de connaissances.',
        location: 'Télétravail',
        type: 'Mandat de 36 mois',
      },
      {
        id: 'fullstack',
        title: 'Développeur logiciel full-stack',
        description:
          'Concevez et livrez des applications web sur mesure, de l’interface à l’API, en collaboration avec nos équipes de données et nos clients.',
        location: 'Sherbrooke / Hybride',
        type: 'Temps plein',
      },
      {
        id: 'bi',
        title: 'Analyste en intelligence d’affaires',
        description:
          'Transformez les données de nos clients en tableaux de bord clairs et en indicateurs utiles qui guident leurs décisions stratégiques.',
        location: 'Sherbrooke / Hybride',
        type: 'Temps plein',
      },
      {
        id: 'support',
        title: 'Technicien en soutien informatique',
        description:
          'Offrez du soutien technique à nos clients, résolvez les incidents et contribuez à maintenir leurs environnements sécuritaires et stables.',
        location: 'Sherbrooke',
        type: 'Temps plein',
      },
    ],
    apply: 'Postuler',
    viewDetails: 'Voir les détails',
    applyTitleLead: 'Soumettez votre ',
    applyTitleAccent: 'candidature',
    successMessage: 'Votre candidature a bien été soumise.',
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
  'w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none transition-all';

const techCardClass =
  'bg-slate-900/70 border border-slate-700 rounded-xl backdrop-blur transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]';

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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-success-title"
            className="w-full max-w-md rounded-2xl border border-emerald-400/30 bg-slate-900 p-8 text-center text-white shadow-2xl"
          >
            <CheckCircle2 aria-hidden="true" className="mx-auto mb-5 h-12 w-12 text-emerald-400" />
            <h2 id="application-success-title" className="text-xl font-medium leading-relaxed">
              {t.successMessage}
            </h2>
            <button
              type="button"
              onClick={() => {
                setEmailSent(false);
                requestAnimationFrame(() => scrollTo('postes'));
              }}
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-lg bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              {t.successReturnToJobs}
            </button>
          </section>
        </div>,
        document.body,
      )}
      <div id="careers-page-root-c4r33rs1" className="pt-20 bg-slate-950 text-slate-200 min-h-screen">
      {/* Hero */}
      <section className="relative bg-slate-950 text-white py-24">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans font-extralight text-5xl md:text-7xl mb-8"
          >
            {t.heroTitleLead}<span className="font-display italic text-cyan-400">{t.heroTitleAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-xl font-light max-w-2xl mb-12"
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
              className="inline-flex items-center justify-center gap-2 bg-cyan-400 text-slate-950 px-8 py-4 rounded-full font-medium hover:bg-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] transition-all"
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
              className="inline-flex items-center justify-center gap-2 border border-cyan-400/40 text-cyan-300 px-8 py-4 rounded-full font-medium hover:bg-cyan-400/10 hover:border-cyan-400 transition-all"
            >
              {t.spontaneousLabel}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why join us */}
      <section className="bg-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-extralight text-4xl md:text-5xl text-white mb-16"
          >
            {t.whyTitleLead}<span className="font-display italic text-violet-400">{t.whyTitleAccent}</span>
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
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-sans font-medium text-white mb-3">{perk.title}</h3>
                  <p className="text-white/60 font-light">{perk.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="postes" className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-extralight text-4xl md:text-5xl text-white mb-16"
          >
            {t.openTitleLead}<span className="font-display italic text-violet-400">{t.openTitleAccent}</span>
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => navigate(`/careers/${job.id}`)}
                className={`${techCardClass} p-8 flex flex-col cursor-pointer`}
              >
                <h3 className="text-xl font-sans font-medium text-white mb-3">
                  <Link
                    to={`/careers/${job.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {job.title}
                  </Link>
                </h3>
                <p className="text-white/60 font-light mb-6 flex-1">{job.description}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="inline-flex items-center gap-2 text-sm text-white/70 bg-slate-950 border border-slate-700 rounded-full px-3 py-1">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-white/70 bg-slate-950 border border-slate-700 rounded-full px-3 py-1">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    {job.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/careers/${job.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-cyan-400 text-slate-950 rounded-full px-8 py-3 font-medium hover:bg-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] transition-all"
                  >
                    {t.viewDetails}
                  </Link>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleApply(job.id);
                    }}
                    className="border border-cyan-400/40 text-cyan-300 rounded-full px-8 py-3 font-medium hover:bg-cyan-400/10 transition-all"
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
      <section id="candidature" className="bg-slate-950 text-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-extralight text-4xl md:text-5xl mb-12"
          >
            {t.applyTitleLead}<span className="font-display italic text-cyan-400">{t.applyTitleAccent}</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-700 rounded-3xl p-8 lg:p-12 shadow-2xl text-white text-left"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="careers-name" className="text-sm font-medium text-white/80">{t.nameLabel}</label>
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
                  <label htmlFor="careers-email" className="text-sm font-medium text-white/80">{t.emailLabel}</label>
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
                  <label htmlFor="careers-phone" className="text-sm font-medium text-white/80">{t.phoneLabel}</label>
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
                  <label htmlFor="careers-position" className="text-sm font-medium text-white/80">{t.positionLabel}</label>
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
                <label htmlFor="careers-linkedin" className="text-sm font-medium text-white/80">{t.linkedinLabel}</label>
                <input
                  id="careers-linkedin"
                  type="url"
                  name="linkedin_url"
                  className={inputClass}
                  placeholder={t.linkedinPlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="careers-attachment" className="text-sm font-medium text-white/80">{t.attachmentLabel}</label>
                <p className="text-xs text-white/50 font-light">{t.attachmentHelp}</p>
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
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition-all hover:border-cyan-300 hover:bg-cyan-400/20"
                  >
                    <Paperclip className="w-4 h-4" />
                    Parcourir
                  </label>
                  <span className="min-h-[20px] text-sm text-slate-300">
                    {attachment?.name || 'Aucun fichier sélectionné'}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="careers-message" className="text-sm font-medium text-white/80">{t.messageLabel}</label>
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
                  className="inline-flex items-center justify-center gap-2 bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-medium hover:bg-cyan-300 transition-all w-full disabled:cursor-not-allowed disabled:opacity-70"
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
