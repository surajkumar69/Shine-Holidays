import React from 'react';
import { MapPin, Phone, Mail, Shield, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28 bg-[#090A0E] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Monogram / Category Pill */}
        <div className="text-center sm:text-left mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12141A] border border-[#D4AF37]/35 text-[#E5C378] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Executive Identity & Standard</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Information (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Redefining Premium <br />
              <span className="gold-gradient-text font-serif-luxury italic font-normal">Travel Experiences.</span>
            </h2>

            {/* Exact content required by prompt */}
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              SHINE HOLIDAYS offers premium Urbania luxury AC coach rental services across Bangalore and Mysore. With comfortable seating options and a focus on a refined travel experience, we aim to make every journey more comfortable and memorable.
            </p>

            {/* Authentic Luxury Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0D0F14] border border-white/10 hover:border-[#D4AF37]/40 transition-all group">
                <div className="text-[#D4AF37] font-cinzel text-2xl font-bold mb-1">₹35/KM</div>
                <div className="text-sm font-semibold text-white mb-0.5 group-hover:text-[#E5C378] transition-colors">
                  Transparent Tariff
                </div>
                <div className="text-xs text-neutral-400 font-light">
                  Direct distance-based pricing across Bangalore and Mysore
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#0D0F14] border border-white/10 hover:border-[#D4AF37]/40 transition-all group">
                <div className="text-[#D4AF37] font-cinzel text-2xl font-bold mb-1">12+1 & 16+1</div>
                <div className="text-sm font-semibold text-white mb-0.5 group-hover:text-[#E5C378] transition-colors">
                  Dual Configurations
                </div>
                <div className="text-xs text-neutral-400 font-light">
                  Tailored for VIP delegations, family vacations & executive transit
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#0D0F14] border border-white/10 hover:border-[#D4AF37]/40 transition-all group">
                <div className="text-[#D4AF37] font-cinzel text-2xl font-bold mb-1">100% AC</div>
                <div className="text-sm font-semibold text-white mb-0.5 group-hover:text-[#E5C378] transition-colors">
                  Force Urbania Luxury
                </div>
                <div className="text-xs text-neutral-400 font-light">
                  Factory multi-duct climate control with personal air vents
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#0D0F14] border border-white/10 hover:border-[#D4AF37]/40 transition-all group">
                <div className="text-[#D4AF37] font-cinzel text-2xl font-bold mb-1">BLR & MYS</div>
                <div className="text-sm font-semibold text-white mb-0.5 group-hover:text-[#E5C378] transition-colors">
                  Dual Hub Operations
                </div>
                <div className="text-xs text-neutral-400 font-light">
                  Swift dispatch for executive group tours, delegations & city travel
                </div>
              </div>

            </div>

            {/* Direct Information Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-neutral-300 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Bangalore & Mysore Hubs</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="hover:text-[#D4AF37] transition-colors font-medium">
                  +91 {BUSINESS_INFO.phones[0]}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#D4AF37] transition-colors font-medium">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Unique Original Photograph in Automotive Luxury Frame (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)] shine-card group bg-black">
              
              {/* Corner accents */}
              <div className="corner-bracket-tl"></div>
              <div className="corner-bracket-br"></div>

              <img
                src="/images/about/about-urbania-villa.jpg"
                alt="Shine Holidays Force Urbania luxury coach side view"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              {/* Overlay Vehicle Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-black/80 backdrop-blur-xl border border-[#D4AF37]/40 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold block mb-0.5">
                      Authentic Fleet Coach
                    </span>
                    <h3 className="text-white font-cinzel text-lg sm:text-xl font-bold">
                      Force Urbania Luxury Coach
                    </h3>
                    <p className="text-xs text-neutral-300 font-light mt-0.5">
                      Metallic Dark Charcoal Finish • Active in Bangalore & Mysore
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
