/*
 * Adresses bilingues : le français est à la racine (/services/…), l'anglais sous /en/ (/en/services/…).
 * Mêmes chemins dans les deux langues, seul le préfixe change.
 * Module sans React : utilisé par le navigateur, le pré-rendu et les métadonnées.
 */
export type Lang = 'fr' | 'en';

export const EN_PREFIX = '/en';

/** Langue d'une adresse. */
export function langFromPath(pathname: string): Lang {
  return pathname === EN_PREFIX || pathname.startsWith(EN_PREFIX + '/') ? 'en' : 'fr';
}

/** Retire le préfixe /en : chemin « de base », identique dans les deux langues. */
export function stripLang(pathname: string): string {
  if (langFromPath(pathname) === 'fr') return pathname || '/';
  const rest = pathname.slice(EN_PREFIX.length);
  return rest === '' ? '/' : rest;
}

/** Chemin de base -> chemin dans la langue voulue. Laisse tel quel un chemin déjà en anglais ou externe. */
export function localizePath(path: string, lang: Lang): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  if (lang === 'fr' || langFromPath(path) === 'en') return path;
  return path === '/' ? `${EN_PREFIX}/` : EN_PREFIX + path;
}

/** Même page dans l'autre langue (pour le sélecteur fr / en et les balises hreflang). */
export function switchLangPath(pathname: string, lang: Lang): string {
  return localizePath(stripLang(pathname), lang);
}
