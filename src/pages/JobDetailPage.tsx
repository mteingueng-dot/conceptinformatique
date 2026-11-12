import { useParams } from 'react-router-dom';
import { useNavigate, Link } from '../i18n/router';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, CheckCircle2, CalendarClock, Building2 } from 'lucide-react';
import SocialShareButtons from '../components/SocialShareButtons';
import { getJob } from '../data/jobs';
import { useRemoteJobs, formatDeadline } from '../data/remoteJobs';
import { useLanguage } from '../i18n/LanguageContext';

const copy = {
  en: {
    back: 'Back to open positions',
    apply: 'Apply',
    notFound: 'Position not found',
    notFoundText: 'This position is no longer posted or has been filled.',
    loading: 'Loading position…',
    deadline: 'Apply by',
    client: 'Client:',
    responsibilities: 'Responsibilities',
    deliverables: 'Deliverables',
    requirements: 'Requirements',
    assets: 'Nice to have',
    terms: 'Mandate terms',
    benefits: 'What we offer',
    shareGroupLabel: 'Share this position',
    shareOnLinkedIn: 'LinkedIn',
    shareOnWhatsApp: 'WhatsApp',
    shareOnFacebook: 'Facebook',
  },
  fr: {
    back: 'Retour aux postes ouverts',
    apply: 'Postuler',
    notFound: 'Poste introuvable',
    notFoundText: 'Cette offre n’est plus affichée ou a été pourvue.',
    loading: 'Chargement de l’offre…',
    deadline: 'Date limite :',
    client: 'Client :',
    responsibilities: 'Responsabilités',
    deliverables: 'Livrables',
    requirements: 'Exigences',
    assets: 'Atouts',
    terms: 'Modalités du mandat',
    benefits: 'Ce que nous offrons',
    shareGroupLabel: 'Partager ce poste',
    shareOnLinkedIn: 'LinkedIn',
    shareOnWhatsApp: 'WhatsApp',
    shareOnFacebook: 'Facebook',
  },
};

const cardClass = 'bg-white/90 border border-slate-200 rounded-xl p-8';
const pillClass =
  'inline-flex items-center gap-2 text-sm text-ci-navy bg-white border border-slate-200 rounded-full px-3 py-1';
const applyClass =
  'inline-flex items-center justify-center bg-ci-blue-600 text-white rounded-full px-8 py-4 font-medium hover:bg-ci-blue-700 hover:shadow-[0_25px_50px_-25px_rgba(21,89,209,0.45)] transition-all';

export default function JobDetailPage() {
  const { jobId } = useParams<{ jobId: string }>();
  const { lang: currentLang } = useLanguage();
  const lang: 'fr' | 'en' = currentLang === 'fr' ? 'fr' : 'en';
  const t = copy[lang];
  const navigate = useNavigate();
  const remote = useRemoteJobs();
  // L'application RH fait foi dès qu'elle a répondu ; avant (et pendant le pré-rendu) ou en cas d'échec : jobs.ts
  const job = remote.status === 'ready' ? remote.jobs[lang].find((j) => j.id === jobId) : getJob(lang, jobId);

  if (!job && remote.status === 'loading') {
    // Offre publiée par l'application RH mais pas pré-rendue : on attend la réponse de l'API
    return (
      <div id="job-loading-j0b10ad1" className="pt-20 bg-transparent text-slate-700 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center" role="status" aria-live="polite">
          <span aria-hidden="true" className="mx-auto mb-6 block h-10 w-10 animate-spin rounded-full border-4 border-ci-blue-200 border-t-ci-blue-600" />
          <p className="text-lg text-ci-navy font-light">{t.loading}</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div id="job-not-found-j0b4n0t1" className="pt-20 bg-transparent text-slate-700 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="font-display font-bold tracking-[-0.03em] text-4xl md:text-6xl text-ci-navy mb-6">{t.notFound}</h1>
          <p className="text-lg text-slate-600 font-light mb-10">{t.notFoundText}</p>
          <Link
            to="/careers/"
            className="inline-flex items-center gap-2 text-ci-blue-600 hover:text-ci-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </Link>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    navigate('/careers/', { state: { applyTo: job.id } });
  };

  const sections: { key: string; title: string; items: string[] }[] = [
    { key: 'responsibilities', title: t.responsibilities, items: job.responsibilities },
    { key: 'deliverables', title: t.deliverables, items: job.deliverables ?? [] },
    { key: 'requirements', title: t.requirements, items: job.requirements },
    { key: 'terms', title: t.terms, items: job.terms ?? [] },
    { key: 'assets', title: t.assets, items: job.assets },
    { key: 'benefits', title: t.benefits, items: job.benefits },
  ].filter((section) => section.items.length > 0);

  return (
    <div id="job-detail-root-j0b3d7a1" className="pt-20 bg-transparent text-slate-700 min-h-screen">
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/careers/"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-ci-blue-600 transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.back}
            </Link>
            <h1 className="font-display font-bold tracking-[-0.03em] text-4xl md:text-6xl text-ci-navy mb-8">{job.title}</h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className={pillClass}>
                <MapPin className="w-4 h-4 text-ci-blue-600" />
                {job.location}
              </span>
              <span className={pillClass}>
                <Clock className="w-4 h-4 text-ci-blue-600" />
                {job.type}
              </span>
              {job.deadline && (
                <span className={pillClass}>
                  <CalendarClock className="w-4 h-4 text-ci-blue-600" />
                  {t.deadline} {formatDeadline(job.deadline, lang)}
                </span>
              )}
              {job.client && (
                <span className={pillClass}>
                  <Building2 className="w-4 h-4 text-ci-blue-600" />
                  {t.client} {job.client}
                </span>
              )}
            </div>
            <p className="text-ci-navy text-lg font-light leading-relaxed mb-10">{job.intro}</p>
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" onClick={handleApply} className={applyClass}>
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
        </div>
      </section>

      {/* Details */}
      <section className="bg-transparent pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cardClass}
            >
              <h2 className="font-display font-bold tracking-[-0.03em] text-2xl md:text-3xl text-ci-navy mb-6">
                <span className="text-ci-blue-600">{section.title}</span>
              </h2>
              <ul className="space-y-4">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-ci-navy font-light">
                    <CheckCircle2 className="w-5 h-5 text-ci-blue-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <div className="pt-4 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button type="button" onClick={handleApply} className={applyClass}>
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
          </div>
        </div>
      </section>
    </div>
  );
}
