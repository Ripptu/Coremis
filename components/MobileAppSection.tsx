import React from 'react';
import { Apple, Smartphone, Bell, Zap, Shield, Layout } from 'lucide-react';

export const MobileAppSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Top border gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-black via-orange-500 to-orange-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <div className="order-2 lg:order-1">
                 <div className="inline-flex items-center space-x-2 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="text-xs font-medium text-gray-500">New — Mobile</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                    Your finance copilot,<br/> now on mobile
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-md">
                    Approvals, insights, and alerts wherever you are. Stay on top of cash, revenue, and spend in real time.
                </p>

                <div className="flex items-center space-x-4 mb-12">
                    <button className="bg-black text-white px-5 py-2.5 rounded-lg flex items-center hover:bg-gray-800 transition-colors">
                        <Apple className="w-6 h-6 mr-2" />
                        <div className="text-left">
                            <div className="text-[10px] leading-none text-gray-300">Download on the</div>
                            <div className="text-sm font-bold leading-none">App Store</div>
                        </div>
                    </button>
                    
                    <button className="text-sm font-medium text-gray-600 flex items-center hover:text-black transition-colors">
                        <Smartphone className="w-5 h-5 mr-2 text-gray-400" />
                        Join Android waitlist
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                    <div className="flex items-start">
                        <Bell className="w-5 h-5 text-gray-400 mt-1 mr-3 shrink-0" />
                        <div>
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">Instant alerts</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Know when invoices are paid or spend spikes.</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <div className="w-5 h-5 text-gray-400 mt-1 mr-3 shrink-0 flex items-center justify-center">
                            <span className="block w-2.5 h-2.5 border-2 border-gray-400 rounded-full"></span>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">One-tap approvals</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Approve expenses and POs securely on the go.</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <Layout className="w-5 h-5 text-gray-400 mt-1 mr-3 shrink-0" />
                        <div>
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">Live KPIs</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Revenue, cash runway, and burn at a glance.</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <Shield className="w-5 h-5 text-gray-400 mt-1 mr-3 shrink-0" />
                        <div>
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">Enterprise-grade security</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Biometric lock and device-level encryption.</p>
                        </div>
                    </div>
                </div>
                
                 {/* Rating Pill */}
                <div className="mt-10 inline-flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-100">
                    <div className="flex -space-x-1 mr-3">
                        <img src="https://picsum.photos/32/32?random=4" className="w-6 h-6 rounded-full border border-white" alt="User" />
                        <img src="https://picsum.photos/32/32?random=5" className="w-6 h-6 rounded-full border border-white" alt="User" />
                        <img src="https://picsum.photos/32/32?random=6" className="w-6 h-6 rounded-full border border-white" alt="User" />
                    </div>
                    <div className="text-xs">
                        <span className="font-bold text-gray-900">4.9 average rating</span>
                        <div className="text-yellow-400 text-[10px]">★★★★★</div>
                    </div>
                </div>
            </div>

            {/* Phone Mockup Side */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                 {/* Floating status */}
                 <div className="absolute top-10 right-10 z-20 bg-white p-2 pr-4 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-3 animate-bounce-slow">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                        <Bell size={14} />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Status</p>
                        <p className="text-xs font-semibold text-gray-900">Live alerts</p>
                    </div>
                  </div>

                <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden ring-1 ring-gray-900/10">
                    {/* Screen Content */}
                    <div className="absolute inset-0 bg-black">
                        {/* Wallpaper Art */}
                        <div className="absolute inset-0 bg-[url('https://picsum.photos/600/1200?grayscale&blur=2')] opacity-50 mix-blend-overlay"></div>
                         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-black"></div>
                         {/* Abstract waves */}
                         <div className="absolute inset-0">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full opacity-60">
                                <path d="M0 50 Q 50 100 100 50 T 200 50" stroke="url(#grad1)" strokeWidth="2" fill="none" />
                                <path d="M0 60 Q 50 110 100 60 T 200 60" stroke="url(#grad2)" strokeWidth="2" fill="none" />
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{stopColor:'rgb(168, 85, 247)', stopOpacity:1}} />
                                        <stop offset="100%" style={{stopColor:'rgb(236, 72, 153)', stopOpacity:1}} />
                                    </linearGradient>
                                     <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{stopColor:'rgb(59, 130, 246)', stopOpacity:1}} />
                                        <stop offset="100%" style={{stopColor:'rgb(147, 51, 234)', stopOpacity:1}} />
                                    </linearGradient>
                                </defs>
                            </svg>
                             <div className="absolute top-1/4 left-0 right-0 h-64 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl rounded-full transform rotate-45"></div>
                         </div>
                    </div>
                </div>
                
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 blur-[60px] -z-10 transform scale-110"></div>
            </div>
        </div>
      </div>
    </section>
  );
};