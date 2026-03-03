import React, { useEffect } from 'react'; // Added useEffect here
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import PrivacyPolicy from './components/PrivacyPolicy';
import BiosecurityPolicy from './components/BiosecurityPolicy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();

 useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace('#', '');
    
    // 1. Function to handle the scroll
    const scrollToSection = () => {
      const element = document.getElementById(id);
      if (element) {
        // We use scrollIntoView; your CSS 100px margin will handle the gap!
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // 2. The "Double Check"
    // First attempt: Quick jump
    setTimeout(scrollToSection, 100); 

    // Second attempt: After images/layout settle (Crucial for GBP)
    const timer = setTimeout(scrollToSection, 400); 

    return () => clearTimeout(timer);
  }
}, [location]); // Fires every time the URL changes

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="/politica-de-bioseguridad" element={<BiosecurityPolicy />} />
      </Routes>
    </>
  );
}

export default App;