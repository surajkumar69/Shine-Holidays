import React from 'react';
import { Check, Info, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export default function Pricing() {
  const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hello SHINE HOLIDAYS, I would like to inquire about pricing and availability for Force Urbania rental at ₹35/KM.')}`;

  return (
    <section id="pricing" className="py-24 bg-[#090A0C] relative border-t border-white/5">
      {/* Background radial accent */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block mb-3">
            Honest & Direct
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Premium Travel. <span className="gold-gradient-text font-serif-luxury italic font-normal">Transparent Pricing.</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light">
            Luxury Urbania AC Coach Rental – Bangalore & Mysore.
          </p>
        </div>

        {/* Pricing Card Showcase */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-b from-[#15161C] to-[#0E0F13] border border-[#D4AF37]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            
            {/* Top Tag */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-8 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                  Standard Fleet Tariff
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                  Force Urbania Luxury AC Coach
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Applicable for both Urbania 12+1 Seater & Urbania 16+1 Seater
                </p>
              </div>

              <div className="px-4 py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
                Bangalore & Mysore Hubs
              </div>
            </div>

            {/* Price Display */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6 mb-8">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-cinzel text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#D4AF37] tracking-tight">
                    ₹35
                  </span>
                  <span className="text-xl sm:text-2xl text-neutral-300 uppercase tracking-widest font-light">
                    / KM
                  </span>
                </div>
                <span className="text-xs text-neutral-400 block mt-2">
                  Starting base distance rate
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>Urbania 12+1 Seater Available</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>Urbania 16+1 Seater Available</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>High-Capacity Chilled AC System</span>
                </div>
              </div>
            </div>

            {/* Important Notice: Final Trip Cost Condition */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-8 flex items-start gap-3.5">
              <Info className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                <strong className="text-white font-medium block mb-0.5">Journey Cost Terms:</strong>
                The final trip cost can depend on applicable journey details (such as total kilometers, route itineraries, toll charges, driver allowance, or interstate permits where applicable). Contact our desk for a personalized quote.
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#DDBE55] to-[#B89628] text-black font-semibold text-sm uppercase tracking-wider shadow-lg shadow-[#D4AF37]/25 hover:brightness-110 transition-all font-medium"
              >
                <MessageSquare className="w-4 h-4 fill-black/20" />
                <span>Get Instant Quote on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 hover:border-[#D4AF37]/50 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold tracking-wider transition-all"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call {BUSINESS_INFO.primaryPhone}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
