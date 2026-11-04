import React from 'react';
import { Shield, Sparkles, Wind, Armchair, LayoutGrid, MapPin, Star, Tag } from 'lucide-react';
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
    <section id="features" className="py-24 bg-[#0B0C0F] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block mb-3">
            Excellence in Motion
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Why Choose <span className="gold-gradient-text font-serif-luxury italic font-normal">SHINE HOLIDAYS?</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light">
            Dedicated strictly to providing premium Force Urbania luxury coach travel with transparent standards.
          </p>
        </div>

        {/* 6 Feature Cards - Exactly matching the prompt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-[#121316] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl relative overflow-hidden"
            >
              {/* Subtle gold corner accent on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-all">
                {icons[index % icons.length]}
              </div>

              <h3 className="font-cinzel text-xl font-bold text-white mb-3 tracking-wide group-hover:text-[#D4AF37] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
