import React from 'react';
import { ArrowLeft, Check, ChevronRight, BarChart, Layers, Shield, PieChart, Target, Landmark } from 'lucide-react';
import { Page } from '../App';
import { useLanguage } from '../contexts/LanguageContext';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const servicesList = [
    {
      icon: Landmark,
      title: "CFO as a Service",
      desc: "Die externe finanzielle Führung für Ihr Unternehmen. Wir nehmen Einsitz in der Geschäftsleitung, führen Finanzteams und sind strategischer Sparringspartner für CEO und Verwaltungsrat.",
      points: ["Strategische Finanzführung", "Stakeholder Management", "Teamentwicklung"],
      output: "Professionelle Finanzführung ohne Fixkosten."
    },
    {
      icon: Target,
      title: "Finanzplanung & Strategie",
      desc: "Entwicklung integrierter Unternehmensplanungen. Wir verbinden Strategie mit Zahlen und machen Geschäftsmodelle rechenbar. Keine isolierten Excel-Tabellen, sondern verknüpfte Logik.",
      points: ["Business Modeling", "Strategie-Workshops", "Investitionsrechnung"],
      output: "Belastbarer Business Plan & Strategie."
    },
    {
      icon: Layers,
      title: "Budget & Forecast",
      desc: "Operative Jahresplanung und unterjähriges Forecasting. Wir etablieren Prozesse, damit Sie Abweichungen früh erkennen und gegensteuern können, bevor es zu spät ist.",
      points: ["Rolling Forecasts", "Soll-Ist-Vergleiche", "Abweichungsanalysen"],
      output: "Präzise Steuerung des Geschäftsjahres."
    },
    {
      icon: PieChart,
      title: "Cashflow & Liquidität",
      desc: "Das Herzstück für KMU. Wir implementieren direkte und indirekte Liquiditätsplanungen. Sie wissen immer, wie lange der Runway reicht und wann Finanzierungsbedarf besteht.",
      points: ["13-Wochen-Planung", "Working Capital Mgmt", "Bankenreporting"],
      output: "Gesicherte Zahlungsfähigkeit jederzeit."
    },
    {
      icon: BarChart,
      title: "Reporting & MIS",
      desc: "Aufbau von Management Information Systemen (MIS). Wir definieren die richtigen KPIs und visualisieren diese so, dass sie Entscheidungsgrundlage sind, nicht nur Datenwüste.",
      points: ["BI-Dashboards", "KPI-Definition", "Monatsreporting"],
      output: "Klarheit auf Knopfdruck."
    },
    {
      icon: Shield,
      title: "Governance & Risiko",
      desc: "Strukturierung des Internen Kontrollsystems (IKS) und Risikomanagement. Vorbereitung auf Revisionen und Due Diligence Prozesse bei Transaktionen.",
      points: ["IKS Aufbau", "Due Diligence", "Risikomatrix"],
      output: "Sicherheit und Compliance."
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24 font-sans">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
             <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={() => onNavigate('home')}
            className="group flex items-center text-slate-400 hover:text-white mb-8 transition-colors text-sm font-medium tracking-wide uppercase"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Zurück zur Übersicht
          </button>
          
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight">
              Unsere <span className="text-brand-orange">Leistungen.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              Wir bieten keine Standardprodukte, sondern Lösungen für Ihre finanzielle Führung. Modular, transparent und exakt auf Ihre Wachstumsphase angepasst.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((s, i) => (
            <div key={i} className="group bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                <s.icon size={28} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{s.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed flex-grow">{s.desc}</p>
              
              <div className="space-y-3 mb-8">
                 {s.points.map((p, idx) => (
                     <div key={idx} className="flex items-center text-sm text-slate-600">
                         <Check className="w-4 h-4 text-brand-orange mr-2 shrink-0" />
                         {p}
                     </div>
                 ))}
              </div>

              <div className="pt-6 border-t border-gray-100 mt-auto">
                <div className="flex items-start">
                    <div className="w-1 h-full min-h-[24px] bg-brand-orange rounded-full mr-3"></div>
                    <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Ihr Mehrwert</span>
                        <span className="text-sm font-medium text-slate-900">{s.output}</span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Engagement */}
      <div className="max-w-4xl mx-auto mt-24 px-4 text-center">
         <div className="inline-block p-1 rounded-full bg-gray-100 mb-8">
             <div className="bg-white px-6 py-2 rounded-full text-sm font-medium text-slate-600 border border-gray-200 shadow-sm">
                 Individuelle Pakete möglich
             </div>
         </div>
         <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Bereit für den nächsten Schritt?</h2>
         <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
             Lassen Sie uns herausfinden, welches Modul für Ihre aktuelle Situation den größten Hebel hat.
         </p>
         <button 
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center bg-brand-orange text-white text-lg font-bold px-10 py-5 rounded-full hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1"
         >
           Jetzt Erstgespräch vereinbaren <ChevronRight className="ml-2" />
         </button>
      </div>
    </div>
  );
};