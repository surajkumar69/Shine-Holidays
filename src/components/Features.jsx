import React from 'react';
import { Wind, Armchair, LayoutGrid, MapPin, Star, Tag, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/fleetData';

export default function Features() {
  const icons = [
    <Wind className="w-6 h-6 text-[#D4AF37]" />,
    <Armchair className="w-6 h-6 text-[#D4AF37]" />,
    <LayoutGrid className="w-6 h-6 text-[#D4AF37]" />,
    <MapPin className="w-6 h-6 text-[#D4AF37]" />,
    <Star className="w-6 h-6 text-[#D4AF37]" />,
    <Tag className="w-6 h-6 text-[#D4AF37]" />
  ];

  return (
    <section id="features" className="py-24 sm:py-28 bg-[#07080A] relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12141A] border border-[#D4AF37]/35 text-[#E5C378] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Excellence in Motion</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Why Choose <span className="gold-gradient-text font-serif-luxury italic font-normal">SHINE HOLIDAYS?</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light">
            Dedicated strictly to providing premium Force Urbania luxury coach travel with transparent standards.
          </p>
        </div>

        {/* 6 Luxury Feature Cards - Strictly matching the prompt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-[#0D0F14] border border-white/10 hover:border-[#D4AF37]/45 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle gold corner accent on hover */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#D4AF37]/12 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-all shadow-inner">
                  {icons[index % icons.length]}
                </div>

                <h3 className="font-cinzel text-xl font-bold text-white mb-3 tracking-wide group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="uppercase tracking-widest text-[#D4AF37] font-semibold">Standard 0{index + 1}</span>
                <span className="text-neutral-400 group-hover:text-white transition-colors">SHINE HOLIDAYS</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
