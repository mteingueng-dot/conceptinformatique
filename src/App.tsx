import { BrowserRouter, Routes, Route, Outlet, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ValuesPage from './pages/ValuesPage';
import ServicesPage from './pages/ServicesPages';
import ServiceDetailPage from './pages/ServicesDetailPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import JobDetailPage from './pages/JobDetailPage';
import ProfessionalProfilePage from './pages/ProfessionalProfilePage';
import ValueDetailPage from './pages/ValueDetailPage';
import ProfileDetailPage from './pages/ProfileDetailPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';
import SeoManager from './seo/SeoManager';
import CookieConsent from './components/CookieConsent';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navigate } from './i18n/router';
import { EXPERTISE_TO_SERVICE } from './seo/meta';

/** Ancienne adresse avec paramètre -> adresse officielle (le serveur fait aussi une redirection 301). */
function RedirectSlug({ to }: { to: (slug: string) => string }) {
  const { slug = '' } = useParams();
  return <Navigate to={to(slug)} replace />;
}

/** Ancienne page « expertise » -> page de service du même sujet. */
const toService = (slug: string) => (EXPERTISE_TO_SERVICE[slug] ? `/services/${EXPERTISE_TO_SERVICE[slug]}/` : '/services/');

/**
 * Pages du site, en chemins relatifs : montées une fois à la racine (français) et une fois sous /en (anglais).
 * Les redirections utilisent le Navigate localisé : elles restent dans la langue de la page.
 */
const pageRoutes = (
  <>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="about/values" element={<ValuesPage />} />
    <Route path="about/values/:slug" element={<ValueDetailPage />} />
    <Route path="about/profil-professionnel" element={<ProfessionalProfilePage />} />
    <Route path="about/profils/:slug" element={<ProfileDetailPage />} />
    <Route path="services" element={<ServicesPage />} />
    <Route path="services/:slug" element={<ServiceDetailPage />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="careers" element={<CareersPage />} />
    <Route path="careers/:jobId" element={<JobDetailPage />} />
    <Route path="privacy" element={<LegalPage type="privacy" />} />
    <Route path="terms" element={<LegalPage type="terms" />} />

    {/* Adresses en double : redirection vers l'adresse officielle */}
    <Route path="home" element={<Navigate to="/" replace />} />
    <Route path="values" element={<Navigate to="/about/values/" replace />} />
    <Route path="values/:slug" element={<RedirectSlug to={(s) => `/about/values/${s}/`} />} />
    <Route path="professional-profile" element={<Navigate to="/about/profil-professionnel/" replace />} />
    <Route path="professional-profiles" element={<Navigate to="/about/profil-professionnel/" replace />} />
    <Route path="professional-profiles/:slug" element={<RedirectSlug to={(s) => `/about/profils/${s}/`} />} />
    <Route path="expertises" element={<Navigate to="/services/" replace />} />
    <Route path="expertises/:slug" element={<RedirectSlug to={toService} />} />
    <Route path="about/expertises/:slug" element={<RedirectSlug to={toService} />} />
    <Route path="*" element={<NotFoundPage />} />
  </>
);

/** Contenu du site, sans routeur : utilisé par le navigateur (BrowserRouter) et par le pré-rendu (StaticRouter). */
export function AppShell() {
  return (
    <LanguageProvider>
      <div id="app-root-k8m2n4p1" className="min-h-screen flex flex-col overflow-x-hidden">
        <SeoManager />
        <ScrollToTop />
        <Navbar />
        <main id="main-content-v7x9l2m4" className="flex-grow">
          <Routes>
            <Route path="/en" element={<Outlet />}>
              {pageRoutes}
            </Route>
            <Route path="/" element={<Outlet />}>
              {pageRoutes}
            </Route>
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </LanguageProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
