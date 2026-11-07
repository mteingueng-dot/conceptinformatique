/*
 * Point d'entrée du pré-rendu (exécuté par Node au moment du build, pas dans le navigateur).
 * Produit le HTML de chaque page pour que les moteurs de recherche voient le contenu sans JavaScript.
 */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppShell } from './App';

export { getPageMeta, getStructuredData, getAlternates, listRoutes, SITE_URL, NOT_FOUND_PATH } from './seo/meta';
export { langFromPath } from './i18n/paths';

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </StrictMode>,
  );
}
