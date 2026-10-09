import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import SocialShareButtons from '../components/SocialShareButtons';
import { getJob } from '../data/jobs';
import { useLanguage } from '../i18n/LanguageContext';

const copy = {
  en: {
    back: 'Back to open positions',
    apply: 'Apply',
    notFound: 'Position not found',
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

const cardClass = 'bg-slate-900/70 border border-slate-700 rounded-xl p-8';
const pillClass =
  'inline-flex items-center gap-2 text-sm text-white/70 bg-slate-950 border border-slate-700 rounded-full px-3 py-1';
const applyClass =
  'inline-flex items-center justify-center bg-cyan-400 text-slate-950 rounded-full px-8 py-4 font-medium hover:bg-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] transition-all';

export default function JobDetailPage() {
  const { jobId } = useParams<{ jobId: string }>();
  const { lang: currentLang } = useLanguage();
  const lang: 'fr' | 'en' = currentLang === 'fr' ? 'fr' : 'en';
  const t = copy[lang];
  const navigate = useNavigate();
  const job = getJob(lang, jobId);

  if (!job) {
    return (
      <div id="job-not-found-j0b4n0t1" className="pt-20 bg-slate-950 text-slate-200 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="font-sans font-extralight text-4xl md:text-6xl text-white mb-10">{t.notFound}</h1>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </Link>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    navigate('/careers', { state: { applyTo: job.id } });
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
    <div id="job-detail-root-j0b3d7a1" className="pt-20 bg-slate-950 text-slate-200 min-h-screen">
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.back}
            </Link>
            <h1 className="font-sans font-extralight text-4xl md:text-6xl text-white mb-8">{job.title}</h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className={pillClass}>
                <MapPin className="w-4 h-4 text-cyan-400" />
                {job.location}
              </span>
              <span className={pillClass}>
                <Clock className="w-4 h-4 text-cyan-400" />
                {job.type}
              </span>
            </div>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-10">{job.intro}</p>
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
      <section className="bg-slate-950 pb-24">
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
              <h2 className="font-sans font-light text-2xl md:text-3xl text-white mb-6">
                <span className="text-cyan-400">{section.title}</span>
              </h2>
              <ul className="space-y-4">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/70 font-light">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
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
