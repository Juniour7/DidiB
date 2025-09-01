import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import EmailPopup from './components/EmailPopup';
import HomePage from './pages/HomePage';
import ProjetsPage from './pages/ProjetsPage';
import ToursPage from './pages/ToursPage';
import MerchPage from './pages/MerchPage';
import BookingsPage from './pages/BookingsPage';

function AppContent() {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('didi-b-visited');
    if (!hasVisited) {
      setTimeout(() => setShowPopup(true), 2000);
      localStorage.setItem('didi-b-visited', 'true');
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projets" element={<ProjetsPage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/merch" element={<MerchPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
      <EmailPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
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