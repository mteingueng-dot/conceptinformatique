# Concept Informatique inc. — site vitrine

Site bilingue (français par défaut / anglais) de Concept Informatique inc. (Sherbrooke), en React 19 + TypeScript + Vite + Tailwind 3. Hébergé sur cPanel (fichiers statiques de `dist/` + scripts PHP dans `public/api/`).

L'utilisateur communique en français : répondre en français.

## Commandes

- `npm run dev` : serveur de développement (port 5173, configuration « dev » dans `.claude/launch.json`)
- `npm run build` : vérification TypeScript (`tsc -b`) puis build dans `dist/`
- `npm run lint` : oxlint

Toujours lancer `npm run build` après une modification pour vérifier qu'elle compile.

## Structure

- `src/App.tsx` : routes (`HashRouter`, URL de type `/#/services/...`). Plusieurs alias pointent vers les mêmes pages (ex. `/values` et `/about/values`).
- `src/pages/` : une page par fichier ; les pages de détail lisent un `:slug` ou un `:jobId`.
- `src/components/` : `Navbar`, `Footer`, `SiteJourneyForm` (formulaires), `SocialShareButtons`, `ScrollToTop`.
- `src/data/` : contenu des services, expertises, profils, valeurs et postes.
- `src/i18n/LanguageContext.tsx` : langue courante (`useLanguage()`), stockée dans `localStorage` sous `ci-lang`, et métadonnées (titre, description) par langue.
- `public/api/send-contact.php`, `public/api/send-application.php` : envoi des formulaires côté serveur (PHP sur cPanel).

## Traductions

Chaque texte visible doit exister en français **et** en anglais. Les deux modèles utilisés :
- dans les pages : un objet `dict = { fr: {...}, en: {...} }`, puis `const t = dict[lang]` ;
- dans `src/data/` : contenu français principal + traductions anglaises séparées (ex. `servicesEn` dans `services.ts`, `jobsContent.fr` / `jobsContent.en` dans `jobs.ts`), avec des fonctions comme `getServiceBySlug(slug, lang)`.

Quand on ajoute ou modifie un contenu, mettre à jour les deux langues.

## Déploiement

`dist/` et les archives `conceptinformatique-site-cpanel*.zip` sont versionnés. Après un build, `dist/` change : ne le committer que quand on prépare une mise en ligne.
