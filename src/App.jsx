import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Login from './pages/Login';
import Register from './pages/Register';
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

function AppContent() {
  const location = useLocation();
    const isSoftwarePage = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/call-management') || location.pathname.startsWith('/appointments') || location.pathname.startsWith('/knowledge') || location.pathname.startsWith('/billing') || location.pathname.startsWith('/integrations') || location.pathname.startsWith('/support-help') || location.pathname.startsWith('/profile');

  return (
    <>
      {!isSoftwarePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
    </>
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
