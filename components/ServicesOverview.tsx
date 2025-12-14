import React from 'react';
import { ArrowRight, BarChart3, PieChart, TrendingUp, ShieldCheck, Layers, Landmark } from 'lucide-react';
import { Page } from '../App';
import { useLanguage } from '../contexts/LanguageContext';

interface ServicesOverviewProps {
  onNavigate: (page: Page) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  
  const services = [
    { id: '01', title: t('serv.1'), icon: Landmark },
    { id: '02', title: t('serv.2'), icon: TrendingUp },
    { id: '03', title: t('serv.3'), icon: PieChart },
    { id: '04', title: t('serv.4'), icon: Layers },
    { id: '05', title: t('serv.5'), icon: BarChart3 },
    { id: '06', title: t('serv.6'), icon: ShieldCheck }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Gradients & Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-start">
            
            {/* Left Column: Text Content */}
            <div className="lg:sticky lg:top-32 reveal self-start">
                 <div className="inline-flex items-center space-x-3 mb-8">
                    <span className="w-12 h-[2px] bg-brand-orange shadow-[0_0_10px_rgba(255,85,0,0.5)]"></span>
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-[0.2em]">{t('serv.badge')}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
                   {t('serv.title')}
                </h2>
                <p className="text-slate-400 text-lg md:text-xl mb-12 font-light leading-relaxed">
                    {t('serv.subtitle')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-glow hover:shadow-glow-hover hover:-translate-y-1"
                  >
                    {t('serv.btn')} <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
            </div>

            {/* Right Column: Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-5 reveal" style={{transitionDelay: '150ms'}}>
                {services.map((service, index) => (
                    <div 
                      key={index}
                      onClick={() => onNavigate('services')} 
                      className={`
                        group relative p-8 rounded-3xl 
                        bg-white/[0.03] backdrop-blur-md border border-white/10
                        hover:bg-white/[0.08] hover:border-brand-orange/30 hover:shadow-[0_0_30px_rgba(255,85,0,0.1)] hover:-translate-y-2
                        transition-all duration-500 cursor-pointer overflow-hidden
                        ${index === 1 || index === 2 ? 'sm:mt-8' : ''}
                      `}
                    >
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-orange/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:scale-110 group-hover:text-white group-hover:bg-brand-orange transition-all duration-500 shadow-inner">
                               <service.icon size={26} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 pr-4 leading-tight group-hover:text-brand-orange transition-colors duration-300">{service.title}</h3>
                            <div className="w-12 h-[2px] bg-white/10 group-hover:w-full group-hover:bg-brand-orange/50 transition-all duration-700 rounded-full"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};