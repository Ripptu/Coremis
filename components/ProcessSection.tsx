import React from 'react';
import { ArrowRight, MessageSquare, Target, Rocket } from 'lucide-react';
import { Page } from '../App';
import { useLanguage } from '../contexts/LanguageContext';

interface ProcessProps {
  onNavigate: (page: Page) => void;
}

export const ProcessSection: React.FC<ProcessProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 mb-24 reveal">
            <div>
                <span className="text-brand-orange font-semibold tracking-wider text-sm uppercase mb-4 block">{t('process.badge')}</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-6">
                    {t('process.title')}
                </h2>
            </div>
            <div className="flex items-end">
                <p className="text-xl text-slate-500 font-light leading-relaxed">
                   {t('process.subtitle')}
                </p>
            </div>
        </div>

        <div className="relative">
            {/* Animated Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[80px] left-0 w-full h-1 bg-slate-100 rounded-full overflow-hidden">
               <div className="h-full bg-brand-orange w-0 reveal animate-draw-line" style={{transitionDelay: '0.5s'}}></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
                {/* Step 1 */}
                <div className="reveal group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-8 shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-colors duration-500 relative z-10">
                        <MessageSquare size={28} />
                    </div>
                    <div className="absolute top-8 right-8 text-6xl font-bold text-slate-50 opacity-50 group-hover:text-brand-orange/10 transition-colors">01</div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">{t('process.step1.title')}</h3>
                    <p className="text-slate-500 leading-relaxed">
                        {t('process.step1.desc')}
                    </p>
                </div>

                {/* Step 2 */}
                <div className="reveal group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" style={{transitionDelay: '200ms'}}>
                     <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-8 shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-colors duration-500 relative z-10">
                        <Target size={28} />
                    </div>
                    <div className="absolute top-8 right-8 text-6xl font-bold text-slate-50 opacity-50 group-hover:text-brand-orange/10 transition-colors">02</div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">{t('process.step2.title')}</h3>
                    <p className="text-slate-500 leading-relaxed">
                        {t('process.step2.desc')}
                    </p>
                </div>

                {/* Step 3 */}
                <div className="reveal group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" style={{transitionDelay: '400ms'}}>
                     <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-8 shadow-inner group-hover:bg-brand-orange group-hover:text-white transition-colors duration-500 relative z-10">
                        <Rocket size={28} />
                    </div>
                    <div className="absolute top-8 right-8 text-6xl font-bold text-slate-50 opacity-50 group-hover:text-brand-orange/10 transition-colors">03</div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">{t('process.step3.title')}</h3>
                    <p className="text-slate-500 leading-relaxed">
                        {t('process.step3.desc')}
                    </p>
                </div>
            </div>
        </div>

        <div className="mt-24 text-center reveal">
             <button 
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center text-slate-900 font-semibold text-lg border-b-2 border-slate-900 pb-1 hover:text-brand-orange hover:border-brand-orange transition-all hover:pb-2"
             >
                {t('process.cta')} <ArrowRight className="ml-2 w-5 h-5" />
             </button>
        </div>
      </div>
    </section>
  );
};