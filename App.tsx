import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features'; 
import { ServicesOverview } from './components/ServicesOverview';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { TeamSection } from './components/TeamSection';
import { Glossary } from './components/Glossary';
import { TargetAudience } from './components/TargetAudience';
import { ProcessSection } from './components/ProcessSection';
import { FAQ } from './components/FAQ';
import { BottomCTA } from './components/BottomCTA';
import { LiveChat } from './components/LiveChat';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { LegalPage } from './components/LegalPage';
import { LanguageProvider } from './contexts/LanguageContext';

export type Page = 'home' | 'services' | 'contact' | 'imprint' | 'privacy';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    try {
      // @ts-ignore
      const Lenis = window.Lenis;
      if (Lenis) {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
          lenis.destroy();
        };
      }
    } catch (e) {
      console.error("Could not initialize Lenis for smooth scrolling.", e);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      case 'imprint':
        return <LegalPage type="imprint" onNavigate={setCurrentPage} />;
      case 'privacy':
        return <LegalPage type="privacy" onNavigate={setCurrentPage} />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <ProblemSolution />
            <Features />
            <ServicesOverview onNavigate={setCurrentPage} />
            <CaseStudies />
            <Testimonials />
            <TeamSection />
            <TargetAudience />
            <ProcessSection onNavigate={setCurrentPage} />
            <Glossary />
            <FAQ />
            <BottomCTA onNavigate={setCurrentPage} />
          </>
        );
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 font-sans">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-0">
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <LiveChat />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;