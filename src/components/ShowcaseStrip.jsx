import React from 'react';
import { Check, MessageSquare, Phone, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { BUSINESS_INFO } from '../data/fleetData';

export default function ShowcaseStrip() {
  const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hello SHINE HOLIDAYS, I would like to book a luxury Force Urbania AC coach for my upcoming journey. Please share booking details.')}`;

  return (
    <section id="coaches" className="section relative overflow-hidden bg-[#0F172A] text-white">
      
      {/* Floating Gold Glow Orbs */}
      <span className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#D4AF37]/12 blur-3xl" />
      <span className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#E6C35C]/10 blur-3xl" />

      <div className="container-x relative">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="We Provide"
          title="Luxury Force Urbania &"
          highlight="Executive Coaches"
          subtitle="Experience the freedom of travel in our premium Force Urbania AC coaches — fully equipped with individual recliners, climate control and USB charging."
          light={true}
        />

        {/* 2-Column Showcase Grid */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 items-center">
          
          {/* Left Column: Unique Original Photograph in Luxury Frame (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-lift group bg-black/60">
              <img
                src="/images/about/about-urbania-villa.jpg"
                alt="Shine Holidays Force Urbania coach luxury exterior"
                className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent pointer-events-none" />

              {/* Floating Glass Identification Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-dark backdrop-blur-md border border-[#E6C35C]/30 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#E6C35C] font-semibold block mb-0.5">
                      Flagship Urbania Coach
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      Metallic Dark Charcoal Grey
                    </h3>
                    <p className="text-xs text-white/70 font-light">
                      Active Service in Bangalore & Mysore Hubs
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#E6C35C] flex-shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Features & Executive Specifications (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4">
              <h3 className="font-display text-3xl font-semibold text-white">
                World-Class Comfort on Every Highway
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/75 font-light">
                SHINE HOLIDAYS provides luxury Force Urbania AC coach rentals crafted for executive delegations, corporate teams, and multi-generational family vacations across Bangalore and Mysore.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid gap-3.5 sm:grid-cols-2 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-sheen text-[#16213E] flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </span>
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Diamond Recliners</h4>
                  <p className="text-[11px] text-white/65 mt-0.5 font-light">Individual armrests and generous legroom</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-sheen text-[#16213E] flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </span>
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Multi-Duct AC</h4>
                  <p className="text-[11px] text-white/65 mt-0.5 font-light">Factory high-capacity roof cooling vents</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-sheen text-[#16213E] flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </span>
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">₹35 / KM Flat Rate</h4>
                  <p className="text-[11px] text-white/65 mt-0.5 font-light">Transparent distance-based tariff</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-sheen text-[#16213E] flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </span>
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">12+1 & 16+1 Layouts</h4>
                  <p className="text-[11px] text-white/65 mt-0.5 font-light">Dual custom configurations available</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer shadow-gold flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-[#16213E] transition-all"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-all"
              >
                <Phone className="h-4 w-4 text-[#E6C35C]" />
                <span>+91 {BUSINESS_INFO.primaryPhone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
