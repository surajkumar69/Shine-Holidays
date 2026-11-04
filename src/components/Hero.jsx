import React from 'react';
import { ArrowRight, MessageSquare, Check, Sparkles, Shield, Compass } from 'lucide-react';
import { BUSINESS_INFO, HERO_STATS, TRUST_BADGES } from '../data/fleetData';

export default function Hero() {
  const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappMessage)}`;

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      
      {/* Background Image: Original Uploaded Urbania Photograph with Smooth Scale */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-urbania-resort.jpg"
          alt="SHINE HOLIDAYS Luxury Force Urbania Coach parked at Bangalore Resort"
          className="h-full w-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered Luxury Automotive Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#070D1B]/92 via-[#0B1326]/75 to-[#16213E]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F6F2] via-transparent to-transparent" />
      </div>

      {/* Floating Ambient Gold Atmosphere Orbs */}
      <span className="pointer-events-none absolute left-[8%] top-[20%] h-44 w-44 rounded-full bg-[#D4AF37]/20 blur-3xl animate-gold-drift" />
      <span className="pointer-events-none absolute right-[12%] top-[30%] h-56 w-56 rounded-full bg-[#E6C35C]/15 blur-3xl animate-float-slow" />

      {/* Main Hero Container */}
      <div className="container-x relative z-10 pt-32 sm:pt-36 pb-20">
        <div className="max-w-3xl">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E6C35C] shadow-lg mb-6">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span>Force Urbania AC Coaches • Bangalore & Mysore</span>
          </div>

          {/* Main Headline in Happy Luxe Travels Display Font */}
          <h1 className="text-balance font-display text-5xl font-semibold leading-[1.02] text-white sm:text-7xl lg:text-[5.5rem]">
            SHINE <span className="text-gold-gradient italic font-normal">HOLIDAYS</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 font-display text-xl sm:text-2xl lg:text-3xl italic tracking-wide text-[#E6C35C]">
            Premium Urbania Luxury AC Coach Rentals in Bangalore & Mysore.
          </p>

          {/* Description */}
          <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-white/85 font-light">
            Travel comfortably with <strong className="text-white font-semibold">SHINE HOLIDAYS</strong>. Experience premium transportation with spacious seating and luxurious AC coaches at <strong className="text-[#E6C35C] font-semibold">₹35 per KM</strong>.
          </p>

          {/* Three Classic Action Buttons */}
          <div className="mt-9 flex flex-wrap gap-3.5 sm:gap-4">
            <a
              href="#contact"
              className="btn-shimmer shadow-gold flex items-center justify-center gap-2 rounded-full px-6 sm:px-7 py-3.5 text-sm font-bold text-[#16213E] transition-all hover:shadow-lg group"
            >
              <span>Book Your Ride</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#services"
              className="glass flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/30"
            >
              <Compass className="h-4 w-4 text-[#E6C35C]" />
              <span>Explore Fleet</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:brightness-105"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Now</span>
            </a>
          </div>

          {/* Trust Badges Strip with Golden Checkmarks */}
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {TRUST_BADGES.map((badge, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white/90">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-sheen text-[#16213E] flex-shrink-0">
                  <Check className="h-3 w-3 stroke-[3]" />
                </span>
                <span>{badge}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* 4-Column Metric Stats Grid (Happy Luxe Travels Style) */}
        <div className="mt-14 grid max-w-3xl grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-3xl bg-white/20 p-px shadow-soft backdrop-blur-md">
          {HERO_STATS.map((stat, idx) => (
            <div key={idx} className="bg-[#16213E]/85 p-5 sm:p-6 text-center backdrop-blur-md">
              <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {stat.prefix && <span className="text-[#E6C35C]">{stat.prefix}</span>}
                {stat.value}
                {stat.suffix && <span className="text-[#E6C35C] text-lg sm:text-xl font-normal">{stat.suffix}</span>}
              </div>
              <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-white/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
