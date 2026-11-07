/*
 * Point d'entrée du pré-rendu (exécuté par Node au moment du build, pas dans le navigateur).
 * Produit le HTML de chaque page pour que les moteurs de recherche voient le contenu sans JavaScript.
 */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppShell } from './App';
import { LanguageProvider } from './i18n/LanguageContext';

export { getPageMeta, listRoutes, SITE_URL } from './seo/meta';

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <LanguageProvider>
        <StaticRouter location={url}>
          <AppShell />
        </StaticRouter>
      </LanguageProvider>
    </StrictMode>,
  );
}
