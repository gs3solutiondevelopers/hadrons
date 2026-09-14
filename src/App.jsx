import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LeadershipPage from './pages/LeadershipPage';
import ProductsPage from './pages/ProductsPage';
import WiresCablesPage from './pages/WiresCablesPage';
import EvolutionPage from './pages/EvolutionPage';
import QualityPage from './pages/QualityPage';
import CompliancePage from './pages/CompliancePage';
import OemPage from './pages/OemPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="leadership" element={<LeadershipPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="wires-cables" element={<WiresCablesPage />} />
          <Route path="evolution" element={<EvolutionPage />} />
          <Route path="quality" element={<QualityPage />} />
          <Route path="compliance" element={<CompliancePage />} />
          <Route path="oem" element={<OemPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <FloatingWhatsApp />
    </>
  );
}
