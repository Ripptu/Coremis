import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const TeamSection: React.FC = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: "Dr. Markus V.",
      role: t('team.role.partner'),
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      specialty: "Strategy & M&A"
    },
    {
      name: "Sabrina M.",
      role: t('team.role.senior'),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      specialty: "Controlling & MIS"
    },
    {
      name: "David L.",
      role: t('team.role.partner'),
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      specialty: "Liquidity Management"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
            {t('team.title')}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {team.map((member, idx) => (
            <div key={idx} className="reveal group text-center" style={{transitionDelay: `${idx * 150}ms`}}>
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-brand-orange font-medium text-sm mb-2 uppercase tracking-wide">{member.role}</p>
              <p className="text-slate-400 text-sm">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};