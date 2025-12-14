import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      q: t('faq.q1'),
      a: t('faq.a1')
    },
    {
      q: t('faq.q2'),
      a: t('faq.a2')
    },
    {
      q: t('faq.q3'),
      a: t('faq.a3')
    },
    {
      q: t('faq.q4'),
      a: t('faq.a4')
    },
    {
      q: t('faq.q5'),
      a: t('faq.a5')
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 right-[-100px] w-[300px] h-[300px] bg-brand-orange/5 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-20 left-[-100px] w-[300px] h-[300px] bg-slate-200/40 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
           <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 text-brand-orange mb-6 shadow-sm ring-1 ring-slate-100">
             <HelpCircle size={24} />
           </div>
           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">{t('faq.title')}</h2>
           <p className="text-slate-500 text-lg">Alles, was Sie wissen müssen, um zu starten.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div 
              key={idx} 
              className={`
                reveal rounded-3xl transition-all duration-500 border overflow-hidden cursor-pointer
                ${openIndex === idx 
                    ? 'bg-white border-brand-orange/20 shadow-[0_20px_40px_-10px_rgba(255,85,0,0.08)]' 
                    : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-200 hover:shadow-lg'
                }
              `}
              style={{transitionDelay: `${idx * 50}ms`}}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="w-full flex justify-between items-center p-6 md:p-8">
                <span className={`text-lg md:text-xl font-bold transition-colors duration-300 pr-8 leading-snug ${openIndex === idx ? 'text-brand-orange' : 'text-slate-800'}`}>
                  {item.q}
                </span>
                <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border ${openIndex === idx ? 'bg-brand-orange border-brand-orange text-white rotate-180 shadow-md' : 'bg-white border-slate-200 text-slate-400 group-hover:border-brand-orange group-hover:text-brand-orange'}`}>
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </div>
              
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'}`}>
                <div className="px-6 md:px-8 text-slate-500 leading-relaxed text-base md:text-lg font-light border-t border-dashed border-slate-100 pt-6">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};