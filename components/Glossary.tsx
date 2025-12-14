import React from 'react';
import { BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Glossary: React.FC = () => {
  const { t } = useLanguage();

  const terms = [
    { term: t('gloss.ebitda.t'), def: t('gloss.ebitda.d') },
    { term: t('gloss.runway.t'), def: t('gloss.runway.d') },
    { term: t('gloss.burn.t'), def: t('gloss.burn.d') },
    { term: t('gloss.fcf.t'), def: t('gloss.fcf.d') },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 reveal">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-brand-orange border border-white/5">
            <BookOpen size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">{t('gloss.title')}</h2>
          <p className="text-slate-400 text-lg">{t('gloss.subtitle')}</p>
        </div>

        <div className="grid gap-6">
          {terms.map((item, idx) => (
            <div 
              key={idx} 
              className="reveal bg-white/5 border border-white/10 p-6 md:p-8 rounded-xl hover:bg-white/10 transition-colors duration-300"
              style={{transitionDelay: `${idx * 50}ms`}}
            >
              <h3 className="text-xl font-bold text-brand-orange mb-2">{item.term}</h3>
              <p className="text-slate-300 leading-relaxed font-light">{item.def}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};