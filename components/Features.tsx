import React from 'react';
import { Search, Layers, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24 md:flex justify-between items-end reveal">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-slate-900 tracking-tighter max-w-2xl leading-[1.05] md:leading-[0.95]">
              {t('features.title')} <br/><span className="text-slate-400">{t('features.title_accent')}</span>
            </h2>
            <p className="text-slate-500 max-w-md mt-6 md:mt-0 leading-relaxed text-base md:text-lg">
              {t('features.subtitle')}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="reveal group relative p-8 md:p-10 bg-brand-gray rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 border border-transparent hover:border-gray-200">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-500">
                    <Search size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3 md:mb-4 tracking-tight">{t('features.card1.title')}</h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                    {t('features.card1.desc')}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </div>

            {/* Card 2 */}
            <div className="reveal group relative p-8 md:p-10 bg-brand-gray rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 border border-transparent hover:border-gray-200" style={{transitionDelay: '100ms'}}>
                <div className="w-16 h-16 mb-6 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform duration-500">
                     <Layers size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3 md:mb-4 tracking-tight">{t('features.card2.title')}</h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                    {t('features.card2.desc')}
                </p>
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </div>

            {/* Card 3 */}
            <div className="reveal group relative p-8 md:p-10 bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500" style={{transitionDelay: '200ms'}}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange opacity-10 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-500 border border-white/10">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4 tracking-tight">{t('features.card3.title')}</h3>
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                      {t('features.card3.desc')}
                  </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};