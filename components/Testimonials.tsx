import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t('testi.1.quote'),
      author: t('testi.1.author'),
      role: t('testi.1.role'),
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: t('testi.2.quote'),
      author: t('testi.2.author'),
      role: t('testi.2.role'),
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: t('testi.3.quote'),
      author: t('testi.3.author'),
      role: t('testi.3.role'),
      image: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        quote: "Die Analysen von Coremis haben uns die Augen geöffnet. Endlich verstehen wir unsere Margenstruktur im Detail.",
        author: "Stefan M.",
        role: "CEO, Logistik AG",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
     {
        quote: "Extrem professionell und effizient. Wir konnten unser Reporting innerhalb von 3 Wochen komplett digitalisieren.",
        author: "Julia B.",
        role: "CFO, Media Group",
        image: "https://randomuser.me/api/portraits/women/28.jpg"
    }
  ];

  // Triplicate the list to ensure smooth seamless scrolling on wide screens
  const marqueeList = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center reveal">
        <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-4 tracking-tight">
          {t('testi.title')}
        </h2>
        <div className="flex items-center justify-center gap-1 text-brand-orange mb-2">
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
        </div>
        <p className="text-slate-500">Vertrauen von über 50 Schweizer Unternehmen.</p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full">
         {/* Fade Gradients */}
         <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
         <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

         <div className="flex animate-scroll hover:[animation-play-state:paused] w-max">
            {marqueeList.map((item, idx) => (
                <div 
                    key={idx} 
                    className="w-[350px] md:w-[450px] mx-4 md:mx-6 p-8 bg-white rounded-3xl border border-gray-100/80 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-700 ease-out transform perspective-1000"
                >
                    <div className="mb-6 text-brand-orange/20">
                        <Quote size={42} />
                    </div>
                    <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8 font-medium">
                        "{item.quote}"
                    </p>
                    <div className="flex items-center space-x-4 border-t border-gray-50 pt-6 mt-auto">
                        <div className="relative">
                            <img 
                            src={item.image} 
                            alt={item.author} 
                            className="w-14 h-14 rounded-full object-cover ring-4 ring-gray-50 grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute -bottom-1 -right-1 bg-brand-orange text-white text-[10px] p-1 rounded-full border-2 border-white">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                        </div>
                        <div>
                        <div className="font-bold text-slate-900 text-base">{item.author}</div>
                        <div className="text-sm text-slate-400 font-medium tracking-wide">{item.role}</div>
                        </div>
                    </div>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};