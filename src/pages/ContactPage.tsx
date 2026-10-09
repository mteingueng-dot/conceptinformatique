import { useState } from 'react';
import { Mail, Phone, MapPin, Link2 } from 'lucide-react';
import SiteJourneyForm from '../components/SiteJourneyForm';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

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
    mapAlt: 'Emplacement de Concept Informatique',
    officeTitle: 'Notre bureau',
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
    mapAlt: 'Concept Informatique location',
    officeTitle: 'Our Office',
  },
};

export default function ContactPage() {
  const { lang } = useLanguage();
  const c = lang === 'fr' ? content.fr : content.en;
  const [attachment, setAttachment] = useState<File | null>(null);

  return (
    <div id="contact-page-root-j9x2k4m1" className="pt-20">
      <section className="bg-slate-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-sans font-extralight text-5xl md:text-7xl mb-8"
              >
                {c.titleBefore}<span className="font-display italic text-indigo-400">{c.titleHighlight}</span>
              </motion.h1>
              <p className="text-slate-400 text-xl font-light mb-12">
                {c.intro}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center border border-indigo-400/20">
                    <Phone className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-widest mb-1">{c.phoneLabel}</p>
                    <a href="tel:+15147120371" className="text-lg font-light text-white hover:text-indigo-400 transition-colors">(514) 712-0371</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center border border-indigo-400/20">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-widest mb-1">{c.emailLabel}</p>
                    <a href="mailto:finances@conceptinformatique.net" className="text-lg font-light text-white hover:text-indigo-400 transition-colors break-all">finances@conceptinformatique.net</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center border border-indigo-400/20">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-widest mb-1">{c.addressLabel}</p>
                    <p className="text-lg font-light text-white">
                      1590 Rue Kesteman,<br />
                      Sherbrooke, QC, J1R 0Y5
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center border border-indigo-400/20">
                    <Link2 className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-widest mb-1">{c.linkedinLabel}</p>
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-lg font-light text-white hover:text-indigo-400 transition-colors">Concept Informatique inc</a>
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
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all text-slate-900 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all text-slate-900 focus:border-transparent"
                      placeholder={c.emailPlaceholder}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-sm font-medium text-slate-700">{c.subjectLabel}</label>
                  <select 
                    id="contact-subject"
                    name="subject" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all text-slate-900 focus:border-transparent"
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
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all text-slate-900 focus:border-transparent"
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
                      className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-indigo-300 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-700 transition-colors hover:border-indigo-500 hover:bg-indigo-100 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500"
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
                  className="w-full bg-indigo-600 text-white py-4 rounded-xl font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 active:scale-[0.99]"
                >
                  {c.submit}
                </button>
              </SiteJourneyForm>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="h-[500px] w-full">
        {/* Abstract Map Representation */}
        <div className="w-full h-full bg-slate-100 flex items-center justify-center relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1706009731040-7701affadce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxtYXAlMjBvZiUyMHNoZXJicm9va2UlMjBxdWViZWMlMjBhZXJpYWwlMjB2aWV3JTIwaGlnaCUyMHJlc29sdXRpb258ZW58MHwwfHx8MTc5MTM4NDEyMHww&ixlib=rb-4.1.0&q=80&w=1080" alt={c.mapAlt} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
          <div className="absolute inset-0 bg-indigo-900/10"></div>
          <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
            <div className="bg-indigo-600 p-3 rounded-full">
               <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-sans font-medium text-slate-900">{c.officeTitle}</p>
              <p className="text-sm text-slate-500 font-light">1590 Rue Kesteman, Sherbrooke</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
