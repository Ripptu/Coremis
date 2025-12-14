import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Page } from '../App';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Lower threshold for quicker reaction
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-[padding] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isScrolled ? 'pt-3 md:pt-4' : 'pt-0'
        }`}
      >
        <div className={`
          relative flex items-center justify-between
          transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          ${isScrolled 
            ? 'w-[92%] md:w-[85%] max-w-5xl bg-white/90 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] rounded-2xl md:rounded-full px-5 py-3 md:px-6 md:py-3 scale-100' 
            : 'w-full max-w-7xl bg-transparent border-transparent px-6 py-6 md:px-8 md:py-8 scale-[1.01]'
          }
        `}>
          
          {/* Logo & Brand Name */}
          <div className="flex items-center cursor-pointer group space-x-2 md:space-x-3" onClick={() => handleNav('home')}>
            <div className="relative overflow-hidden">
               <img 
                  src="https://i.postimg.cc/64LyFDMF/image.png" 
                  alt="Coremis Logo" 
                  className="h-8 w-auto md:h-10 object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                      e.currentTarget.style.display = 'none';
                  }}
              />
            </div>
            {/* Standard Text - No Liquid Effect */}
            <span 
              className={`text-xl md:text-2xl font-bold tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}
            >
              Coremis
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-50/50 p-1.5 rounded-full border border-slate-200/50">
            {['home', 'services'].map((page) => (
              <button 
                key={page}
                onClick={() => handleNav(page as Page)}
                className={`
                  relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300
                  ${currentPage === page 
                    ? 'text-slate-900 bg-white shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/50'
                  }
                `}
              >
                {page === 'home' ? t('nav.home') : t('nav.services')}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-5">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-400">
               <button 
                onClick={() => setLanguage('DE')} 
                className={`transition-colors duration-200 ${language === 'DE' ? 'text-slate-900' : 'hover:text-slate-600'}`}
               >DE</button>
               <span className="opacity-30">/</span>
               <button 
                onClick={() => setLanguage('FR')} 
                className={`transition-colors duration-200 ${language === 'FR' ? 'text-slate-900' : 'hover:text-slate-600'}`}
               >FR</button>
               <span className="opacity-30">/</span>
               <button 
                onClick={() => setLanguage('EN')} 
                className={`transition-colors duration-200 ${language === 'EN' ? 'text-slate-900' : 'hover:text-slate-600'}`}
               >EN</button>
            </div>

            {/* Desktop CTA */}
            <button 
              onClick={() => handleNav('contact')}
              className={`
                relative overflow-hidden group flex items-center text-sm font-bold px-6 py-3 rounded-full transition-all duration-300
                bg-brand-orange text-white shadow-glow hover:shadow-glow-hover hover:scale-105 hover:-translate-y-0.5
              `}
            >
              <span className="relative z-10 flex items-center">
                 {t('nav.contact')}
                 <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col pt-28 px-6 space-y-8 animate-fade-in-up overflow-y-auto">
           <div className="flex flex-col space-y-4">
              <button onClick={() => handleNav('home')} className="text-4xl font-bold text-slate-900 text-left border-b border-gray-100 pb-4 tracking-tight">{t('nav.home')}</button>
              <button onClick={() => handleNav('services')} className="text-4xl font-bold text-slate-900 text-left border-b border-gray-100 pb-4 tracking-tight">{t('nav.services')}</button>
           </div>
           
           <div className="flex space-x-6 text-xl font-medium text-slate-400">
             <button onClick={() => setLanguage('DE')} className={language === 'DE' ? 'text-brand-orange font-bold' : ''}>DE</button>
             <button onClick={() => setLanguage('FR')} className={language === 'FR' ? 'text-brand-orange font-bold' : ''}>FR</button>
             <button onClick={() => setLanguage('EN')} className={language === 'EN' ? 'text-brand-orange font-bold' : ''}>EN</button>
           </div>

           <div className="pt-4">
            <button 
              onClick={() => handleNav('contact')}
              className="w-full bg-brand-orange text-white text-xl font-bold px-6 py-5 rounded-2xl shadow-glow active:scale-95 transition-transform"
            >
              {t('nav.contact_cta')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};