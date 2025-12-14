import React from 'react';
import { Page } from '../App';
import { useLanguage } from '../contexts/LanguageContext';

interface CTAProps {
  onNavigate: (page: Page) => void;
}

export const BottomCTA: React.FC<CTAProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          {t('cta.desc')}
        </p>
        <button 
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center justify-center bg-brand-orange text-white px-12 py-5 rounded-full font-bold shadow-glow hover:shadow-glow-hover hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-lg"
        >
          {t('cta.btn')}
        </button>
      </div>
    </section>
  );
};