import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import Dashboard from './components/dashboard';
import Callmanage from './pages/Callmanage';
import Appointment from './pages/Appointment';
import Homepage from './pages/Homepage';
import Knowledge from './pages/Knowledge';
import Billing from './pages/Billing';
import Integration from './pages/Integration';
import SupportHelpPage from './pages/SupportHelpPage';
import Profile from './pages/Profile';
import SoftwareLayout from './components/SoftwareLayout';
import Contact from './components/Contact';
import UpdatesPage from './pages/Updates';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import RequestDemo from './pages/RequestDemo';
import ApiDocs from './pages/ApiDocs';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Team from './components/Team';

import { useLenis } from './hooks/useLenis';

function AppContent() {
  useLenis();
  const location = useLocation();
    const isSoftwarePage = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/call-management') || location.pathname.startsWith('/appointments') || location.pathname.startsWith('/knowledge') || location.pathname.startsWith('/billing') || location.pathname.startsWith('/integrations') || location.pathname.startsWith('/support-help') || location.pathname.startsWith('/profile');

  return (
    <div className="app-content">
      {!isSoftwarePage && <Navbar />}
      <main className="main-content">
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/updates" element={<UpdatesPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/api-docs" element={<ApiDocs />} />
        <Route path="/help-center" element={<SupportHelpPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route
          path="/dashboard/*"
          element={
            <SoftwareLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </SoftwareLayout>
          }
        />
        <Route
          path="/call-management"
          element={
            <SoftwareLayout>
              <Callmanage />
            </SoftwareLayout>
          }
        />
        <Route
          path="/appointments"
          element={
            <SoftwareLayout>
              <Appointment />
            </SoftwareLayout>
          }
        />
        <Route
          path="/knowledge"
          element={
            <SoftwareLayout>
              <Knowledge />
            </SoftwareLayout>
          }
        />
        <Route
          path="/billing"
          element={
            <SoftwareLayout>
              <Billing />
            </SoftwareLayout>
          }
        />
        <Route
          path="/integrations"
          element={
            <SoftwareLayout>
              <Integration />
            </SoftwareLayout>
          }
        />
        <Route
          path="/support-help"
          element={
            <SoftwareLayout>
              <SupportHelpPage />
            </SoftwareLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <SoftwareLayout>
              <Profile />
            </SoftwareLayout>
          }
        />
        </Routes>
      </main>
      {!isSoftwarePage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
