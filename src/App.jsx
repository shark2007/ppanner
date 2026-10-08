import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import SplashScreen from './components/common/SplashScreen';
import RouteLoader from './components/common/RouteLoader';

import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ProductDetailPage from './pages/ProductDetailPage';
import StoryPage from './pages/StoryPage';
import WhyPurelyPage from './pages/WhyPurelyPage';
import ContactPage from './pages/ContactPage';
import RecipesPage from './pages/RecipesPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [splashFinished, setSplashFinished] = useState(false);

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      {/* First-visit Brand Splash Screen */}
      <SplashScreen onComplete={() => setSplashFinished(true)} />

      {/* Global Route Transition Indicator */}
      <RouteLoader />

      {/* Main App Layout */}
      <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#121A15]">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/product/:slug" element={<ProductDetailPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/why-purely" element={<WhyPurelyPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        <Footer />

        {/* Global Floating WhatsApp Direct Action */}
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
