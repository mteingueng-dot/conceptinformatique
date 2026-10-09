import { HashRouter, Routes, Route } from 'react-router-dom';
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
import ExpertiseDetailPage from './pages/ExpertiseDetailPage';
import ValueDetailPage from './pages/ValueDetailPage';
import ProfileDetailPage from './pages/ProfileDetailPage';
import LegalPage from './pages/LegalPage';
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <div id="app-root-k8m2n4p1" className="min-h-screen flex flex-col overflow-x-hidden">
          <ScrollToTop />
          <Navbar />
          <main id="main-content-v7x9l2m4" className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about/values" element={<ValuesPage />} />
              <Route path="/about/profil-professionnel" element={<ProfessionalProfilePage />} />
              <Route path="/about/expertises/:slug" element={<ExpertiseDetailPage />} />
              <Route path="/about/values/:slug" element={<ValueDetailPage />} />
              <Route path="/about/profils/:slug" element={<ProfileDetailPage />} />
              <Route path="/values" element={<ValuesPage />} />
              <Route path="/values/:slug" element={<ValueDetailPage />} />
              <Route path="/professional-profile" element={<ProfessionalProfilePage />} />
              <Route path="/professional-profiles" element={<ProfessionalProfilePage />} />
              <Route path="/professional-profiles/:slug" element={<ProfileDetailPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/expertises" element={<ServicesPage />} />
              <Route path="/expertises/:slug" element={<ExpertiseDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/careers/:jobId" element={<JobDetailPage />} />
              <Route path="/privacy" element={<LegalPage type="privacy" />} />
              <Route path="/terms" element={<LegalPage type="terms" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
}
