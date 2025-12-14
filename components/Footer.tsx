import React from 'react';
import { Page } from '../App';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-darkblue pt-24 pb-12 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
             <div className="flex items-center cursor-pointer group space-x-3 mb-6" onClick={() => onNavigate('home')}>
                <img 
                  src="https://i.postimg.cc/64LyFDMF/image.png" 
                  alt="Coremis Logo" 
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-2xl font-bold tracking-tighter text-white">Coremis</span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed font-light mb-8 max-w-sm">
              {t('footer.slogan')}
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-bold text-white text-sm mb-6 uppercase tracking-wider opacity-60">{t('footer.menu')}</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-brand-orange transition-colors hover:translate-x-1 inline-block duration-300">{t('nav.home')}</button></li>
              <li><button onClick={() => onNavigate('services')} className="text-slate-400 hover:text-brand-orange transition-colors hover:translate-x-1 inline-block duration-300">{t('nav.services')}</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-slate-400 hover:text-brand-orange transition-colors hover:translate-x-1 inline-block duration-300">{t('nav.contact')}</button></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-white text-sm mb-6 uppercase tracking-wider opacity-60">{t('footer.legal')}</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('imprint')} className="text-slate-400 hover:text-brand-orange transition-colors hover:translate-x-1 inline-block duration-300">{t('footer.legal.imprint')}</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="text-slate-400 hover:text-brand-orange transition-colors hover:translate-x-1 inline-block duration-300">{t('footer.legal.privacy')}</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-light">
            <p>© {new Date().getFullYear()} {t('footer.copyright')}</p>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
               <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
               <span>{t('footer.madein')}</span>
            </div>
        </div>
      </div>
    </footer>
  );
};