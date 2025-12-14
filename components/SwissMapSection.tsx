import React from 'react';

export const SwissMapSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal order-2 lg:order-1">
             {/* Stylized Swiss Map SVG */}
             <div className="relative w-full aspect-[4/3] group">
                <svg viewBox="0 0 800 500" className="w-full h-full drop-shadow-xl">
                    <defs>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>
                    
                    {/* Simplified Abstract Switzerland Path for Design Purpose */}
                    <path 
                      d="M150,250 Q200,200 250,220 T350,180 T450,150 T550,180 T650,220 T700,280 Q720,350 650,400 T500,420 T350,400 T200,380 T100,320 Z" 
                      className="fill-slate-50 stroke-slate-200 stroke-2"
                    />
                    
                    {/* Active Region: Zurich */}
                    <circle cx="480" cy="180" r="8" className="fill-brand-orange animate-pulse" />
                    <circle cx="480" cy="180" r="25" className="fill-brand-orange/20 animate-ping" />
                    <text x="500" y="185" className="text-xs font-bold fill-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Zürich HQ</text>

                    {/* Active Region: Zug */}
                    <circle cx="460" cy="210" r="6" className="fill-slate-900 transition-all hover:fill-brand-orange cursor-pointer" />
                    
                    {/* Active Region: Bern */}
                    <circle cx="350" cy="250" r="6" className="fill-slate-900 transition-all hover:fill-brand-orange cursor-pointer" />

                    {/* Active Region: Basel */}
                    <circle cx="380" cy="160" r="6" className="fill-slate-900 transition-all hover:fill-brand-orange cursor-pointer" />

                    {/* Active Region: Luzern */}
                    <circle cx="440" cy="240" r="6" className="fill-slate-900 transition-all hover:fill-brand-orange cursor-pointer" />

                    {/* Connecting Lines */}
                    <path d="M480,180 L460,210 L350,250" className="stroke-slate-200 stroke-1 fill-none stroke-dasharray-2" />
                    <path d="M480,180 L380,160" className="stroke-slate-200 stroke-1 fill-none stroke-dasharray-2" />
                    <path d="M480,180 L440,240" className="stroke-slate-200 stroke-1 fill-none stroke-dasharray-2" />
                </svg>
             </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <span className="text-brand-orange font-semibold tracking-wider text-sm uppercase mb-4 block">Präsenz</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">Vor Ort verankert.<br/>Schweizweit tätig.</h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Unser Hauptsitz ist in Zürich, aber unsere CFOs sind dort, wo Sie uns brauchen. Wir betreuen Mandate in der gesamten Deutschschweiz, von Basel bis St. Gallen, von Bern bis Zug.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
               <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-brand-orange/30 transition-colors">
                  <div className="text-3xl font-bold text-slate-900 mb-1">5</div>
                  <div className="text-sm text-slate-500 font-medium">Standorte / Hubs</div>
               </div>
               <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-brand-orange/30 transition-colors">
                  <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
                  <div className="text-sm text-slate-500 font-medium">Swiss Quality</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};