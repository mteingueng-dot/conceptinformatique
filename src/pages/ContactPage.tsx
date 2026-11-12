import { useState } from 'react';
import { Mail, Phone, MapPin, Link2 } from 'lucide-react';
import SiteJourneyForm from '../components/SiteJourneyForm';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import Photo from '../components/Photo';

// Contenu ajouté : ce qui se passe après l'envoi du message
const nextSteps = {
  fr: {
    titleBefore: 'Et ensuite, ',
    titleHighlight: 'que se passe-t-il ?',
    intro: 'Pas de longue procédure : voici comment se déroulent les premiers échanges avec notre équipe.',
    steps: [
      { title: 'Nous lisons votre message', text: 'Un membre de l’équipe prend connaissance de votre demande et vous répond rapidement.' },
      { title: 'Un premier échange', text: 'Par téléphone, en visioconférence ou à nos bureaux, pour bien comprendre vos besoins et vos contraintes.' },
      { title: 'Une proposition claire', text: 'Une solution, des étapes et un budget présentés simplement, pour décider en toute confiance.' },
    ],
  },
  en: {
    titleBefore: 'What happens ',
    titleHighlight: 'next?',
    intro: 'No lengthy procedure: here is how the first conversations with our team unfold.',
    steps: [
      { title: 'We read your message', text: 'A team member reviews your request and gets back to you quickly.' },
      { title: 'A first conversation', text: 'By phone, video call or at our offices, to fully understand your needs and constraints.' },
      { title: 'A clear proposal', text: 'A solution, steps and budget presented simply, so you can decide with confidence.' },
    ],
  },
};

const LINKEDIN_URL = 'https://www.linkedin.com/company/concept-informatique-inc';

const SUBJECT_VALUES = [
  'BI / Data Consulting',
  'Software Development',
  'Automation & AI',
  'IT Support / Security',
  'Other',
];

const content = {
  fr: {
    titleBefore: 'Parlons de votre ',
    titleHighlight: 'projet',
    intro: 'Une question, une idée ou un défi technologique? Notre équipe est à votre écoute et vous proposera les meilleures avenues.',
    phoneLabel: 'Téléphone',
    emailLabel: 'Courriel',
    addressLabel: 'Adresse',
    linkedinLabel: 'LinkedIn',
    formTitle: 'Envoyez-nous un message',
    nameLabel: 'Prénom et nom',
    namePlaceholder: 'ex. Jean Tremblay',
    emailFieldLabel: 'Courriel professionnel',
    emailPlaceholder: 'jean@votreentreprise.com',
    subjectLabel: 'Sujet',
    subjectOptions: ['Conseil BI / Données', 'Développement logiciel', 'Automatisation et IA', 'Soutien TI / Sécurité', 'Autre'],
    messageLabel: 'Message',
    messagePlaceholder: 'Décrivez brièvement vos besoins...',
    fileLabel: 'Pièce jointe (facultatif)',
    fileName: 'Aucun fichier sélectionné',
    attachmentNote: 'Formats acceptés : PDF et Word (.pdf, .doc, .docx), 10 Mo au total maximum.',
    browseButton: 'Parcourir',
    submit: 'Envoyer la demande',
    successMessage: 'Votre message a été envoyé avec succès.',
    mapAlt: 'Carte de Sherbrooke, zone desservie par Concept Informatique',
    officeTitle: 'Zone desservie',
    officeArea: 'Sherbrooke, l’Estrie et partout au Québec, sur place ou à distance',
  },
  en: {
    titleBefore: "Let's talk about your ",
    titleHighlight: 'project',
    intro: 'Have a question, an idea or a technology challenge? Our team is ready to listen and to suggest the best paths forward.',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addressLabel: 'Address',
    linkedinLabel: 'LinkedIn',
    formTitle: 'Send us a message',
    nameLabel: 'First & Last Name',
    namePlaceholder: 'e.g. John Smith',
    emailFieldLabel: 'Business Email',
    emailPlaceholder: 'john@yourcompany.com',
    subjectLabel: 'Subject',
    subjectOptions: ['BI / Data Consulting', 'Software Development', 'Automation & AI', 'IT Support / Security', 'Other'],
    messageLabel: 'Message',
    messagePlaceholder: 'Briefly describe your needs...',
    fileLabel: 'Attachment (optional)',
    fileName: 'No file selected',
    attachmentNote: 'Accepted formats: PDF and Word (.pdf, .doc, .docx), 10 MB total maximum.',
    browseButton: 'Browse',
    submit: 'Send request',
    successMessage: 'Your message was sent successfully.',
    mapAlt: 'Map of Sherbrooke, the area served by Concept Informatique',
    officeTitle: 'Service area',
    officeArea: 'Sherbrooke, the Eastern Townships and anywhere in Québec, on site or remotely',
  },
};

export default function ContactPage() {
  const { lang } = useLanguage();
  const c = lang === 'fr' ? content.fr : content.en;
  const n = lang === 'fr' ? nextSteps.fr : nextSteps.en;
  const [attachment, setAttachment] = useState<File | null>(null);

  return (
    <div id="contact-page-root-j9x2k4m1" className="pt-20">
      <section className="bg-transparent py-24 text-ci-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-display font-bold tracking-[-0.03em] text-ci-navy text-5xl md:text-7xl mb-8"
              >
                {c.titleBefore}<span className="text-gradient-ci">{c.titleHighlight}</span>
              </motion.h1>
              <p className="text-slate-600 text-xl font-light mb-12">
                {c.intro}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ci-blue-500/10 rounded-full flex items-center justify-center border border-ci-blue-200">
                    <Phone className="w-5 h-5 text-ci-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 uppercase tracking-widest mb-1">{c.phoneLabel}</p>
                    <a href="tel:+15147120371" className="text-lg font-light text-ci-navy hover:text-ci-blue-600 transition-colors">(514) 712-0371</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ci-blue-500/10 rounded-full flex items-center justify-center border border-ci-blue-200">
                    <Mail className="w-5 h-5 text-ci-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 uppercase tracking-widest mb-1">{c.emailLabel}</p>
                    <a href="mailto:finances@conceptinformatique.net" className="text-lg font-light text-ci-navy hover:text-ci-blue-600 transition-colors break-all">finances@conceptinformatique.net</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ci-blue-500/10 rounded-full flex items-center justify-center border border-ci-blue-200">
                    <MapPin className="w-5 h-5 text-ci-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 uppercase tracking-widest mb-1">{c.addressLabel}</p>
                    <p className="text-lg font-light text-ci-navy">
                      Sherbrooke, QC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ci-blue-500/10 rounded-full flex items-center justify-center border border-ci-blue-200">
                    <Link2 className="w-5 h-5 text-ci-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 uppercase tracking-widest mb-1">{c.linkedinLabel}</p>
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-lg font-light text-ci-navy hover:text-ci-blue-600 transition-colors">Concept Informatique inc</a>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl text-slate-900"
            >
              <h2 className="text-2xl font-sans font-medium mb-8 text-slate-900">{c.formTitle}</h2>
              <SiteJourneyForm
                formType="contact"
                endpoint="/api/send-contact.php"
                successMessage={c.successMessage}
                onSuccess={() => setAttachment(null)}
                className="space-y-6"
              >
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
                    <label htmlFor="contact-name" className="text-sm font-medium text-slate-700">{c.nameLabel}</label>
                    <input 
                      id="contact-name"
                      type="text" 
                      name="name" 
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ci-blue-500 focus:outline-none transition-all text-slate-900 focus:border-transparent"
                      placeholder={c.namePlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-medium text-slate-700">{c.emailFieldLabel}</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      name="email" 
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ci-blue-500 focus:outline-none transition-all text-slate-900 focus:border-transparent"
                      placeholder={c.emailPlaceholder}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-sm font-medium text-slate-700">{c.subjectLabel}</label>
                  <select 
                    id="contact-subject"
                    name="subject" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ci-blue-500 focus:outline-none transition-all text-slate-900 focus:border-transparent"
                  >
                    {SUBJECT_VALUES.map((value, i) => (
                      <option key={value} value={value}>{c.subjectOptions[i]}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-medium text-slate-700">{c.messageLabel}</label>
                  <textarea 
                    id="contact-message"
                    name="message" 
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ci-blue-500 focus:outline-none transition-all text-slate-900 focus:border-transparent"
                    placeholder={c.messagePlaceholder}
                  ></textarea>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-attachment" className="text-sm font-medium text-slate-700">{c.fileLabel}</label>
                  <p className="text-sm text-slate-500">{c.attachmentNote}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <input
                      id="contact-attachment"
                      type="file"
                      name="attachment"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="sr-only"
                      onChange={(event) => setAttachment(event.currentTarget.files?.[0] ?? null)}
                    />
                    <label
                      htmlFor="contact-attachment"
                      className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-ci-blue-200 bg-indigo-50 px-4 py-3 text-sm font-medium text-ci-blue-700 transition-colors hover:border-ci-blue-500 hover:bg-indigo-100 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500"
                    >
                      {c.browseButton}
                    </label>
                    <span className="text-sm text-slate-600" aria-live="polite">
                      {attachment?.name || c.fileName}
                    </span>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-ci-blue-600 text-white py-4 rounded-xl font-medium hover:bg-ci-navy transition-all shadow-lg shadow-ci-blue-600/20 hover:shadow-ci-blue-600/30 active:scale-[0.99]"
                >
                  {c.submit}
                </button>
              </SiteJourneyForm>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Après l'envoi du message */}
      <section className="bg-white/50 border-t border-slate-200 py-24 text-ci-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Photo name="planification-projet" sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[3/2] w-full rounded-3xl shadow-[0_30px_60px_-30px_rgba(11,31,58,0.5)]" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h2 className="font-display font-bold tracking-[-0.03em] text-4xl md:text-5xl mb-4">
              {n.titleBefore}<span className="text-gradient-ci">{n.titleHighlight}</span>
            </h2>
            <p className="text-slate-600 text-lg font-light mb-10">{n.intro}</p>
            <ol className="space-y-6">
              {n.steps.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ci-blue-600 to-ci-green-500 font-mono text-sm font-bold text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg text-ci-navy">{step.title}</h3>
                    <p className="mt-1 text-slate-600 font-light">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Bandeau photo de l'Estrie */}
      <section className="relative h-64 md:h-80 w-full overflow-hidden">
        <Photo name="sherbrooke-estrie" sizes="100vw" className="absolute inset-0 h-full w-full" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/70 to-transparent" />
        <p className="absolute bottom-6 left-0 right-0 mx-auto max-w-7xl px-4 sm:px-8 font-display text-2xl md:text-3xl font-bold text-white">{c.officeArea}</p>
      </section>

      <section className="relative h-[460px] w-full bg-slate-100">
        {/* Carte Google de Sherbrooke (ville seulement, sans adresse), chargée à la demande */}
        <iframe
          title={c.mapAlt}
          src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sSherbrooke,+QC!6i11"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center px-4 sm:justify-start sm:px-8">
          <div className="pointer-events-auto flex max-w-md items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl">
            <div className="shrink-0 rounded-full bg-ci-blue-600 p-3">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-sans font-semibold text-ci-navy">{c.officeTitle}</p>
              <p className="text-sm text-slate-600">{c.officeArea}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
