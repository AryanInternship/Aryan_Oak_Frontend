// src/App.js
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import Login from './components/Login';
import Signup from './components/Signup';
import AdminLogin from './components/AdminLogin';
import AdminSignup from './components/AdminSignup';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import ServicePolicy from './components/ServicePolicy';
import PrivacyPolicy from './components/PrivacyPolicy';
import HelpCenter    from './components/HelpCenter';
import FAQs from './components/FAQs';
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <HowItWorks />
              <Footer />
            </>
          }
        />

        {/* User auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin auth */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
+       <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/service-policy"  element={<ServicePolicy />} />
        <Route path="/privacy-policy"  element={<PrivacyPolicy />} />
        <Route path="/help"            element={<HelpCenter />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </>
  );
}

export default App;
