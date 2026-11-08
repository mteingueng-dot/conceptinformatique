# Concept Informatique inc. — site vitrine

Site bilingue (français par défaut / anglais) de Concept Informatique inc. (Sherbrooke), en React 19 + TypeScript + Vite + Tailwind 3. Hébergé sur cPanel (fichiers statiques de `dist/` + scripts PHP dans `public/api/`).

L'utilisateur communique en français : répondre en français.

## Commandes

- `npm run dev` : serveur de développement (port 5173, configuration « dev » dans `.claude/launch.json`)
- `npm run build` : vérification TypeScript (`tsc -b`), build, puis pré-rendu (`scripts/prerender.mjs`) : une page HTML par adresse dans les deux langues, `404.html` et `sitemap.xml`
- `npm run preview` : sert `dist/` (configuration « preview », port 4173) pour tester la version construite
- `npm run lint` : oxlint

Toujours lancer `npm run build` après une modification pour vérifier qu'elle compile.

## Structure

- `src/App.tsx` : routes (`BrowserRouter`, vraies adresses avec « / » final). Les pages sont montées deux fois : à la racine (français) et sous `/en` (anglais). Les anciennes adresses (`/values`, `/expertises/...`, `/#/...`) redirigent vers l'adresse officielle (aussi en 301 dans `public/.htaccess`).
- `src/pages/` : une page par fichier ; les pages de détail lisent un `:slug` ou un `:jobId`.
- `src/components/` : `Navbar`, `Footer`, `SiteJourneyForm` (formulaires), `SocialShareButtons`, `ScrollToTop`.
- `src/data/` : contenu des services, expertises, profils, valeurs et postes.
- `src/i18n/` : la langue vient de l'adresse (`paths.ts` : `/en/...` = anglais) ; `useLanguage()` la donne et `setLang` va à la même page dans l'autre langue. Utiliser `Link`, `Navigate` et `useNavigate` de `src/i18n/router.tsx` (et non de `react-router-dom`) : ils ajoutent `/en` automatiquement.
- `src/seo/meta.ts` : titre, description, canonique, versions fr/en (hreflang) et données structurées de chaque page ; liste des adresses à pré-rendre. `SeoManager.tsx` les applique pendant la navigation.
- `src/entry-server.tsx` + `scripts/prerender.mjs` : pré-rendu au build (le code doit fonctionner sans `window` en dehors des `useEffect`).
- `src/components/CookieConsent.tsx` + `index.html` : bandeau de consentement (Loi 25). Google Tag Manager (GTM-N29MXHX8, qui charge Google Analytics G-85RG4Z4J0N) n'est chargé qu'après « Accepter » ; lien « Gestion des témoins » dans le pied de page. Ne jamais charger de service de suivi avant le consentement.
- `public/api/send-contact.php`, `public/api/send-application.php` : envoi des formulaires côté serveur (PHP sur cPanel).

## Traductions

Chaque texte visible doit exister en français **et** en anglais. Les deux modèles utilisés :
- dans les pages : un objet `dict = { fr: {...}, en: {...} }`, puis `const t = dict[lang]` ;
- dans `src/data/` : contenu français principal + traductions anglaises séparées (ex. `servicesEn` dans `services.ts`, `jobsContent.fr` / `jobsContent.en` dans `jobs.ts`), avec des fonctions comme `getServiceBySlug(slug, lang)`.

Quand on ajoute ou modifie un contenu, mettre à jour les deux langues.

## Déploiement

Mise en ligne automatique : chaque push sur `main` lance `.github/workflows/deploy-cpanel.yml`, qui construit le site et envoie `dist/` en FTPS dans le dossier du site (voir `DEPLOIEMENT.md`). Inutile de committer `dist/` pour publier.

`dist/` et les archives `conceptinformatique-site-cpanel*.zip` sont versionnés (archives = mise en ligne manuelle de secours).
