import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const CaseStudies: React.FC = () => {
  const { t } = useLanguage();

  const cases = [
    {
      industry: t('case.1.ind'),
      region: "Zürich",
      result: t('case.1.res'),
      desc: t('case.1.desc'),
      logoText: "HIDDEN AG"
    },
    {
      industry: t('case.2.ind'),
      region: "Zug",
      result: t('case.2.res'),
      desc: t('case.2.desc'),
      logoText: "TECH GMBH"
    },
    {
      industry: t('case.3.ind'),
      region: "Bern",
      result: t('case.3.res'),
      desc: t('case.3.desc'),
      logoText: "TRADE SA"
    },
    {
      industry: t('case.4.ind'),
      region: "Luzern",
      result: t('case.4.res'),
      desc: t('case.4.desc'),
      logoText: "SERVICE AG"
    }
  ];

  // Triplicate for smooth marquee
  const marqueeCases = [...cases, ...cases, ...cases];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 reveal">
         <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">{t('case.title')} <span className="text-slate-400">{t('case.title_accent')}</span></h2>
         <p className="text-slate-500 text-lg max-w-2xl">
           {t('case.subtitle')}
         </p>
      </div>

      <div className="relative w-full">
         <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
         <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

         <div className="flex animate-scroll hover:[animation-play-state:paused] w-max gap-6 pl-4">
            {marqueeCases.map((c, i) => (
            <div 
                key={i} 
                className="w-[350px] md:w-[450px] bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-700 ease-out flex flex-col justify-between"
            >
                <div>
                <div className="flex justify-between items-start mb-8">
                    <div className="bg-brand-orange/10 p-2 rounded-lg text-brand-orange">
                    <Quote size={24} />
                    </div>
                    <div className="relative group cursor-help">
                        <div className="h-8 px-4 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-300 select-none blur-[4px] group-hover:blur-[2px] transition-all">
                        {c.logoText}
                        </div>
                        <div className="absolute -top-8 right-0 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {t('case.anon')}
                        </div>
                    </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{c.result}</h3>
                <div className="flex items-center space-x-2 text-sm text-slate-500 mb-6 uppercase tracking-wider font-medium">
                    <span>{c.industry}</span>
                    <span className="w-1 h-1 bg-brand-orange rounded-full"></span>
                    <span>{c.region}</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                    {c.desc}
                </p>
                </div>
            </div>
            ))}
         </div>
      </div>
    </section>
  );
};