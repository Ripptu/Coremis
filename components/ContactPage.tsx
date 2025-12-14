import React, { useState } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Page } from '../App';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would normally send data to an API
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-4 flex items-center justify-center animate-fade-in-up">
        <div className="bg-white p-12 rounded-3xl shadow-xl max-w-lg text-center border border-gray-100">
           <div className="flex justify-center mb-6 text-green-500">
             <CheckCircle size={64} />
           </div>
           <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Vielen Dank.</h2>
           <p className="text-slate-500 mb-8 leading-relaxed">
             Wir haben Ihre Anfrage erhalten. Unser Senior Partner wird sich innerhalb von 24 Stunden persönlich bei Ihnen melden.
           </p>
           <button 
             onClick={() => onNavigate('home')}
             className="text-brand-orange font-semibold hover:text-orange-700 transition-colors"
           >
             Zurück zur Startseite
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Abstract bg */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-orange/10 to-transparent pointer-events-none"></div>

        <div className="max-w-2xl mx-auto relative z-10">
          <button 
            onClick={() => onNavigate('home')}
            className="group flex items-center text-slate-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Zurück
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Unverbindliches Erstgespräch</h1>
          <p className="text-xl text-slate-300 font-light leading-relaxed">
             Erzählen Sie uns von Ihrer Situation. Wir hören zu, analysieren und geben eine erste Einschätzung – vertraulich und diskret.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-8">
            <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">Name *</label>
                <input required type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder-gray-400" placeholder="Ihr vollständiger Name" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">Unternehmen *</label>
                    <input required type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder-gray-400" placeholder="Firmenname" />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">Rolle *</label>
                    <input required type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder-gray-400" placeholder="z.B. CEO, Inhaber" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">E-Mail *</label>
                    <input required type="email" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder-gray-400" placeholder="name@firma.ch" />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">Telefon</label>
                    <input type="tel" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder-gray-400" placeholder="+41 79 ..." />
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">Nachricht / Situation *</label>
                <textarea required rows={5} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder-gray-400" placeholder="Beschreiben Sie kurz Ihre aktuellen Herausforderungen..."></textarea>
            </div>

            <div className="flex items-start">
                <div className="flex items-center h-5">
                <input required id="privacy" type="checkbox" className="h-5 w-5 text-brand-orange border-gray-300 rounded focus:ring-brand-orange" />
                </div>
                <div className="ml-3 text-sm">
                <label htmlFor="privacy" className="font-medium text-slate-700">Datenschutz akzeptieren</label>
                <p className="text-slate-500 text-xs mt-1">Ich stimme zu, dass meine Angaben zur Kontaktaufnahme gespeichert werden.</p>
                </div>
            </div>

            <button type="submit" className="w-full bg-brand-orange text-white font-bold text-lg py-5 rounded-xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1">
                Anfrage absenden
            </button>
            </form>
        </div>
      </div>
    </div>
  );
};