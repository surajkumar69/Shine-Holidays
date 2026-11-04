import React from 'react';
import { ArrowRight, MessageSquare, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export default function Hero() {
  const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappMessage)}`;

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image: Original Uploaded Urbania Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-urbania-resort.jpg"
          alt="SHINE HOLIDAYS Force Urbania Luxury AC Coach parked at resort in Bangalore"
          className="w-full h-full object-cover object-center scale-105 animate-subtleZoom"
        />
        {/* Cinematic Multi-layered Dark Luxury Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090B] via-[#08090B]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/40 to-black/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(212,175,55,0.08),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Badge: Locations & Luxury Class */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/40 backdrop-blur-md mb-6 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">
              Bangalore & Mysore • Premium Urbania Coach Rentals
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Experience Luxury <br />
            <span className="gold-gradient-text font-normal italic font-serif-luxury">on Every Journey.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-light text-neutral-200 tracking-wide mb-4">
            Premium Urbania Luxury AC Coach Rentals in Bangalore & Mysore.
          </p>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-8 max-w-2xl">
            Travel comfortably with <strong className="text-white font-medium">SHINE HOLIDAYS</strong>. Experience premium transportation with spacious seating and luxurious AC coaches.
          </p>

          {/* Highlight Badge: ₹35/KM */}
          <div className="inline-flex items-center gap-4 p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-white/[0.07] to-white/[0.02] border border-[#D4AF37]/30 backdrop-blur-lg mb-8 shadow-2xl">
            <div className="px-3.5 py-1.5 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">Starting Rate</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#D4AF37] tracking-tight">₹35</span>
              <span className="text-sm uppercase tracking-widest text-neutral-300 font-medium">/ KM</span>
            </div>
            <div className="hidden sm:block h-8 w-[1px] bg-white/10 mx-2"></div>
            <span className="hidden sm:inline text-xs text-neutral-400 max-w-[180px]">
              Force Urbania 12+1 & 16+1 Configurations
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#fleet"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#DFBF4F] to-[#C49E2D] text-black font-semibold text-sm uppercase tracking-wider shadow-xl shadow-[#D4AF37]/20 hover:brightness-110 hover:shadow-[#D4AF37]/40 hover:scale-[1.02] active:scale-[0.99] transition-all group"
            >
              <span>Explore Our Fleet</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-[#D4AF37]/60 font-semibold text-sm uppercase tracking-wider backdrop-blur-md transition-all group"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]/20" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Key Value Points */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-10 mt-10 border-t border-white/10">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <span className="text-xs text-neutral-300 tracking-wide">12+1 & 16+1 Seater</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <span className="text-xs text-neutral-300 tracking-wide">Climate Controlled AC</span>
            </div>
            <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <span className="text-xs text-neutral-300 tracking-wide">Bangalore & Mysore Hubs</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
