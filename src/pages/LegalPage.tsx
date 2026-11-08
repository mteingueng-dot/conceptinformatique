import { Link } from '../i18n/router';
import { useLanguage, type Lang } from '../i18n/LanguageContext';

type LegalType = 'privacy' | 'terms';

interface LegalContent {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}

const content: Record<LegalType, Record<Lang, LegalContent>> = {
  privacy: {
    fr: {
      title: 'Politique de confidentialité',
      updated: 'Dernière mise à jour : novembre 2026',
      intro:
        'Concept Informatique inc s’engage à protéger les renseignements personnels de ses clients et visiteurs. La présente politique explique comment nous recueillons, utilisons et protégeons vos renseignements.',
      sections: [
        {
          heading: 'Renseignements recueillis',
          body: [
            'Nous recueillons les renseignements que vous nous transmettez volontairement, notamment votre nom, votre courriel, votre numéro de téléphone, le nom de votre entreprise ainsi que le message envoyé via le formulaire de contact ou de candidature.',
          ],
        },
        {
          heading: 'Utilisation des renseignements',
          body: [
            'Vos renseignements sont utilisés pour répondre à vos demandes, fournir nos services, traiter les candidatures reçues et améliorer notre site.',
          ],
        },
        {
          heading: 'Partage des renseignements',
          body: [
            'Nous ne vendons aucune donnée personnelle.',
            'Vos renseignements ne sont partagés qu’avec des fournisseurs de services nécessaires à nos activités ou lorsque la loi l’exige.',
          ],
        },
        {
          heading: 'Conservation et sécurité',
          body: [
            'Nous mettons en place des mesures raisonnables pour protéger vos renseignements contre l’accès, l’utilisation ou la divulgation non autorisés.',
            'Nous conservons vos renseignements uniquement le temps nécessaire aux fins pour lesquelles ils ont été recueillis.',
          ],
        },
        {
          heading: 'Vos droits',
          body: [
            'Conformément aux lois applicables au Québec et au Canada, vous pouvez demander l’accès à vos renseignements, leur rectification ou retirer votre consentement en tout temps.',
          ],
        },
        {
          heading: 'Témoins (cookies) et mesure d’audience',
          body: [
            'Le site enregistre dans votre navigateur votre choix concernant les témoins. Ce renseignement technique ne permet pas de vous identifier.',
            'Avec votre consentement seulement, nous utilisons Google Analytics, un service de mesure d’audience de Google LLC, chargé au moyen de Google Tag Manager. Il dépose des témoins (par exemple « _ga ») et recueille des renseignements sur votre navigation : pages consultées, durée de la visite, provenance, type d’appareil et de navigateur, emplacement approximatif. Ces renseignements servent uniquement à produire des statistiques pour comprendre l’utilisation du site et l’améliorer ; ils ne sont pas utilisés à des fins publicitaires. La collecte des données saisies dans les formulaires (courriel, téléphone, nom) par Google est désactivée.',
            'Ces renseignements sont traités par Google sur des serveurs pouvant être situés à l’extérieur du Québec et du Canada, notamment aux États-Unis.',
            'Si vous refusez, aucun service de Google n’est chargé à cette fin. Vous pouvez retirer ou modifier votre consentement à tout moment avec le lien « Gestion des témoins » en bas de chaque page ; les témoins de Google Analytics sont alors effacés.',
          ],
        },
        {
          heading: 'Nous joindre',
          body: [
            'Pour toute question concernant cette politique ou pour exercer vos droits, veuillez utiliser notre page Contact.',
          ],
        },
      ],
    },
    en: {
      title: 'Privacy Policy',
      updated: 'Last updated: November 2026',
      intro:
        'Concept Informatique inc is committed to protecting the personal information of its clients and visitors. This policy explains how we collect, use and protect your information.',
      sections: [
        {
          heading: 'Information we collect',
          body: [
            'We collect the information you voluntarily provide, including your name, email, phone number, company name and the message sent through our contact or application form.',
          ],
        },
        {
          heading: 'How we use information',
          body: [
            'Your information is used to respond to your requests, provide our services, process job applications and improve our website.',
          ],
        },
        {
          heading: 'Sharing of information',
          body: [
            'We do not sell personal data.',
            'Your information is only shared with service providers necessary to our operations or when required by law.',
          ],
        },
        {
          heading: 'Retention and security',
          body: [
            'We take reasonable measures to protect your information against unauthorized access, use or disclosure.',
            'We keep your information only for as long as necessary for the purposes for which it was collected.',
          ],
        },
        {
          heading: 'Your rights',
          body: [
            'In accordance with the laws applicable in Quebec and Canada, you may request access to your information, ask for its correction, or withdraw your consent at any time.',
          ],
        },
        {
          heading: 'Cookies and audience measurement',
          body: [
            'The site stores your cookie choice in your browser. This technical information does not identify you.',
            'Only with your consent, we use Google Analytics, an audience measurement service of Google LLC, loaded through Google Tag Manager. It sets cookies (for example “_ga”) and collects information about your browsing: pages viewed, visit duration, referral source, device and browser type, approximate location. This information is used solely to produce statistics to understand how the site is used and improve it; it is not used for advertising. Google’s collection of data entered in forms (email, phone, name) is disabled.',
            'This information is processed by Google on servers that may be located outside Québec and Canada, including in the United States.',
            'If you decline, no Google service is loaded for this purpose. You can withdraw or change your consent at any time with the “Cookie settings” link at the bottom of every page; Google Analytics cookies are then deleted.',
          ],
        },
        {
          heading: 'Contact us',
          body: [
            'For any question about this policy or to exercise your rights, please use our Contact page.',
          ],
        },
      ],
    },
  },
  terms: {
    fr: {
      title: 'Conditions d’utilisation',
      updated: 'Dernière mise à jour : 2025',
      intro:
        'Les présentes conditions encadrent l’utilisation du site de Concept Informatique inc. En le consultant, vous convenez de les respecter.',
      sections: [
        {
          heading: 'Acceptation des conditions',
          body: [
            'En accédant à ce site ou en l’utilisant, vous acceptez les présentes conditions d’utilisation. Si vous n’êtes pas d’accord, veuillez ne pas utiliser le site.',
          ],
        },
        {
          heading: 'Utilisation du site',
          body: [
            'Vous vous engagez à utiliser le site uniquement à des fins licites.',
            'Il est interdit de nuire au bon fonctionnement du site ou d’en perturber l’accès.',
          ],
        },
        {
          heading: 'Propriété intellectuelle',
          body: [
            'Les contenus, logos et marques présents sur ce site appartiennent à Concept Informatique inc. Toute reproduction ou utilisation sans autorisation écrite est interdite.',
          ],
        },
        {
          heading: 'Services',
          body: [
            'Les descriptions de services présentées sur ce site sont données à titre informatif. Les modalités précises de chaque mandat sont définies dans une entente distincte.',
          ],
        },
        {
          heading: 'Limitation de responsabilité',
          body: [
            'Le site est fourni « tel quel », sans garantie d’aucune sorte. Concept Informatique inc ne peut être tenue responsable des dommages résultant de l’utilisation du site.',
          ],
        },
        {
          heading: 'Liens externes',
          body: [
            'Ce site peut contenir des liens vers des sites tiers. Nous n’exerçons aucun contrôle sur leur contenu et déclinons toute responsabilité à leur égard.',
          ],
        },
        {
          heading: 'Modifications des conditions',
          body: [
            'Nous pouvons modifier ces conditions en tout temps. La version en vigueur est celle publiée sur cette page.',
          ],
        },
        {
          heading: 'Droit applicable',
          body: [
            'Les présentes conditions sont régies par les lois du Québec et du Canada.',
          ],
        },
        {
          heading: 'Nous joindre',
          body: [
            'Pour toute question concernant ces conditions, veuillez utiliser notre page Contact.',
          ],
        },
      ],
    },
    en: {
      title: 'Terms of Use',
      updated: 'Last updated: 2025',
      intro:
        'These terms govern the use of the Concept Informatique inc website. By browsing it, you agree to comply with them.',
      sections: [
        {
          heading: 'Acceptance of terms',
          body: [
            'By accessing or using this website, you accept these terms of use. If you do not agree, please do not use the website.',
          ],
        },
        {
          heading: 'Use of the website',
          body: [
            'You agree to use the website for lawful purposes only.',
            'You may not interfere with the proper operation of the website or disrupt access to it.',
          ],
        },
        {
          heading: 'Intellectual property',
          body: [
            'The content, logos and trademarks on this website belong to Concept Informatique inc. Any reproduction or use without written permission is prohibited.',
          ],
        },
        {
          heading: 'Services',
          body: [
            'Service descriptions on this website are provided for information purposes only. The specific terms of each engagement are set out in a separate agreement.',
          ],
        },
        {
          heading: 'Limitation of liability',
          body: [
            'The website is provided “as is”, without warranty of any kind. Concept Informatique inc cannot be held liable for damages resulting from the use of the website.',
          ],
        },
        {
          heading: 'External links',
          body: [
            'This website may contain links to third-party sites. We have no control over their content and accept no responsibility for them.',
          ],
        },
        {
          heading: 'Changes to the terms',
          body: [
            'We may modify these terms at any time. The version in force is the one published on this page.',
          ],
        },
        {
          heading: 'Governing law',
          body: [
            'These terms are governed by the laws of Quebec and Canada.',
          ],
        },
        {
          heading: 'Contact us',
          body: [
            'For any question about these terms, please use our Contact page.',
          ],
        },
      ],
    },
  },
};

export default function LegalPage({ type }: { type: LegalType }) {
  const { lang } = useLanguage();
  const c = content[type][lang];

  return (
    <div id="legal-page-root-l3g4l1p9" className="bg-transparent text-slate-700 min-h-screen">
      <section className="pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-display font-bold tracking-[-0.03em] text-4xl md:text-5xl text-ci-navy mb-4">{c.title}</h1>
          <p className="text-sm text-ci-navy">{c.updated}</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <p className="text-ci-navy text-lg leading-relaxed mb-3">{c.intro}</p>

        {c.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="text-2xl font-semibold text-ci-navy mt-10 mb-3">{section.heading}</h2>
            {section.body.map((paragraph, i) => (
              <p key={i} className="text-ci-navy leading-relaxed mb-3">
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <div className="mt-12">
          <Link
            to="/contact/"
            className="text-ci-blue-600 underline hover:text-ci-blue-600 transition-colors"
          >
            {lang === 'fr' ? 'Nous joindre' : 'Contact us'}
          </Link>
        </div>
      </div>
    </div>
  );
}
