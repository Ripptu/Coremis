import React, { useState, useRef, useEffect } from 'react';
import { GripVertical } from 'lucide-react';

export const ComparisonSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const onMouseDown = () => { isDragging.current = true; };
  const onMouseUp = () => { isDragging.current = false; };
  const onMouseMove = (e: React.MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
  
  const onTouchStart = () => { isDragging.current = true; };
  const onTouchEnd = () => { isDragging.current = false; };
  const onTouchMove = (e: React.TouchEvent) => { if (isDragging.current) handleMove(e.touches[0].clientX); };

  // Add global mouse up listener to handle dragging outside component
  useEffect(() => {
    const handleGlobalMouseUp = () => { isDragging.current = false; };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
           <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-4 tracking-tight">Die Coremis Transformation</h2>
           <p className="text-slate-500 text-lg">Ziehen Sie den Regler: Von statischen Tabellen zu dynamischer Steuerung.</p>
        </div>

        <div 
          ref={containerRef}
          className="reveal relative w-full aspect-[16/10] md:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-slate-200 shadow-2xl"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* AFTER Image (Full Width) - Dashboard */}
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center overflow-hidden">
             {/* Abstract Dashboard UI Representation */}
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" alt="Dashboard" className="w-full h-full object-cover opacity-90" />
             <div className="absolute top-8 right-8 bg-brand-orange/90 text-white px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-md">Coremis Dashboard</div>
          </div>

          {/* BEFORE Image (Clipped) - Excel */}
          <div 
            className="absolute inset-0 bg-white overflow-hidden border-r border-white/50"
            style={{ width: `${sliderPosition}%` }}
          >
             <img src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2670&auto=format&fit=crop" alt="Excel Spreadsheet" className="w-full h-full object-cover grayscale opacity-80" />
             <div className="absolute top-8 left-8 bg-slate-200/90 text-slate-800 px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-md">Status Quo (Excel)</div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center text-slate-400 comparison-slider-handle hover:scale-110 transition-transform">
               <GripVertical size={20} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};