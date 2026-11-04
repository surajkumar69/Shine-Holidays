import React from 'react';
import { ArrowDown, MessageSquare, Shield, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export default function Hero() {
  const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappMessage)}`;

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-16 overflow-hidden">
      
      {/* Background Image: Original Uploaded Urbania Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-urbania-resort.jpg"
          alt="SHINE HOLIDAYS Force Urbania Luxury AC Coach parked at resort in Bangalore"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Layered Cinematic Dark Vignettes & Atmospheric Lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080A] via-[#07080A]/85 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/50 to-black/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(212,175,55,0.09),transparent_60%)]"></div>
      </div>

      {/* Atmospheric Soft Golden Auras */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Monogram / Category Pill */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#12141A]/90 border border-[#D4AF37]/40 text-[#E5C378] text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-medium shadow-lg backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse flex-shrink-0"></span>
            <span>Chauffeur-Driven Luxury Mobility • Bangalore & Mysore</span>
          </div>

          {/* Main Heading in Classic Editorial Automotive Style */}
          <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            Experience Luxury. <br />
            <span className="gold-gradient-text font-serif-luxury italic font-normal">on Every Journey.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-light text-neutral-200 tracking-wide mb-4">
            Premium Urbania Luxury AC Coach Rentals in Bangalore & Mysore.
          </p>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8 max-w-2xl">
            Travel comfortably with <strong className="text-white font-medium">SHINE HOLIDAYS</strong>. Experience premium transportation with spacious seating and luxurious AC coaches.
          </p>

          {/* Highlight Badge: ₹35/KM in Classic Framed Module */}
          <div className="inline-flex items-center gap-4 sm:gap-5 p-3.5 sm:p-4 rounded-2xl bg-black/60 border border-[#D4AF37]/40 backdrop-blur-md mb-8 shadow-2xl">
            <div className="px-3.5 py-2 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">Starting Rate</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#D4AF37] tracking-tight">₹35</span>
              <span className="text-xs sm:text-sm uppercase tracking-widest text-neutral-300 font-medium">/ KM</span>
            </div>
            <div className="hidden sm:block h-8 w-[1px] bg-white/15 mx-1"></div>
            <span className="hidden sm:inline text-xs text-neutral-300 max-w-[210px] leading-snug">
              Force Urbania 12+1 & 16+1 Seater Configurations
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href="#fleet"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#B89329] text-black font-semibold text-xs uppercase tracking-[0.16em] shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_28px_rgba(212,175,55,0.5)] hover:brightness-105 active:scale-[0.99] transition-all"
            >
              <span>Explore Our Fleet</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl glass-panel border border-[#D4AF37]/40 text-[#E5C378] hover:text-white hover:bg-white/10 font-semibold text-xs uppercase tracking-[0.14em] transition-all group"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]/20" />
              <span>Book via WhatsApp</span>
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl border border-white/15 hover:border-white/30 text-neutral-300 hover:text-white text-xs uppercase tracking-[0.14em] font-medium transition-all"
            >
              <span>Quick Reserve</span>
            </a>
          </div>

          {/* Micro Pillars Strip with Classic Dividers */}
          <div className="pt-8 mt-10 grid grid-cols-3 gap-3 sm:gap-4 border-t border-white/10 text-left">
            <div>
              <div className="text-[10px] uppercase text-neutral-400 tracking-wider">Fleet Standard</div>
              <div className="font-cinzel text-xs sm:text-sm font-semibold text-white mt-0.5">100% Genuine</div>
              <div className="text-[10px] text-[#D4AF37]">Force Urbania AC</div>
            </div>

            <div className="border-l border-white/10 pl-3 sm:pl-4">
              <div className="text-[10px] uppercase text-neutral-400 tracking-wider">Seating Layouts</div>
              <div className="font-cinzel text-xs sm:text-sm font-semibold text-white mt-0.5">12+1 & 16+1</div>
              <div className="text-[10px] text-[#D4AF37]">Diamond Recliners</div>
            </div>

            <div className="border-l border-white/10 pl-3 sm:pl-4">
              <div className="text-[10px] uppercase text-neutral-400 tracking-wider">Service Hubs</div>
              <div className="font-cinzel text-xs sm:text-sm font-semibold text-white mt-0.5">BLR & MYS</div>
              <div className="text-[10px] text-[#D4AF37]">₹35 / KM Flat Rate</div>
            </div>
          </div>
        </div>

        {/* Inset Vehicle Identification Plaque (Floating on desktop right) */}
        <div className="hidden lg:block absolute bottom-12 right-6 xl:right-10 max-w-sm p-4 sm:p-5 rounded-2xl bg-[#090A0E]/85 backdrop-blur-xl border border-[#D4AF37]/45 shadow-[0_16px_40px_rgba(0,0,0,0.85)]">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block">
                Flagship Vehicle
              </span>
              <div className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide">
                Force Urbania Luxury Coach
              </div>
              <div className="text-[11px] text-neutral-300 font-light mt-0.5">
                Chauffeur Driven • Bangalore & Mysore • ₹35/KM
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
