import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Page } from '../App';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const AnimatedNumber: React.FC<{ end: number; suffix?: string; duration?: number }> = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const ease = (x: number): number => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      setCount(Math.floor(ease(percentage) * end));
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 md:pt-20 pb-12">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-brand-orange/5 to-transparent rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tl from-slate-200/40 to-transparent rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge Removed per user request */}
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 mt-12">
            <span className="block reveal">{t('hero.title.1')}</span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900 animate-gradient-x pb-4 reveal" style={{transitionDelay: '100ms'}}>
              {t('hero.title.2')}
            </span>
          </h1>
          
          <p className="reveal text-base sm:text-lg md:text-2xl text-slate-500 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto font-normal px-4 md:px-0" style={{transitionDelay: '200ms'}}>
            {t('hero.subtitle')}
          </p>
          
          <div className="reveal flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-12 md:mb-16 w-full px-4 md:px-0" style={{transitionDelay: '300ms'}}>
            <button 
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-orange text-white px-8 py-4 md:px-12 md:py-5 rounded-full font-bold text-base md:text-lg shadow-glow hover:shadow-glow-hover hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
            >
              {t('hero.btn.contact')}
            </button>
            
            <button 
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center text-slate-900 font-medium text-base md:text-lg hover:text-brand-orange transition-colors group py-3"
            >
              {t('hero.btn.services')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-slate-100 max-w-2xl mx-auto px-4 md:px-0" style={{transitionDelay: '400ms'}}>
             <div className="text-center">
               <div className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight mb-1">
                 CHF <AnimatedNumber end={150} />M+
               </div>
               <div className="text-[10px] md:text-sm text-slate-500 uppercase tracking-wider font-medium">{t('hero.kpi.volume')}</div>
             </div>
             <div className="text-center">
               <div className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight mb-1">
                 <AnimatedNumber end={45} />+
               </div>
               <div className="text-[10px] md:text-sm text-slate-500 uppercase tracking-wider font-medium">{t('hero.kpi.mandates')}</div>
             </div>
             <div className="text-center col-span-2 md:col-span-1">
               <div className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight mb-1">
                 <AnimatedNumber end={24} />h
               </div>
               <div className="text-[10px] md:text-sm text-slate-500 uppercase tracking-wider font-medium">{t('hero.kpi.time')}</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};