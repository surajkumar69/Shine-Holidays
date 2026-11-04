import React from 'react';
import { MapPin, Phone, Mail, Award, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0B0C0F] relative overflow-hidden border-t border-white/5">
      {/* Subtle decorative glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="text-center sm:text-left mb-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            About SHINE HOLIDAYS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Information */}
          <div className="lg:col-span-6 space-y-6">
            
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Redefining Premium <br />
              <span className="gold-gradient-text font-serif-luxury italic font-normal">Travel Experiences.</span>
            </h2>

            {/* Exactly the requested content */}
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              SHINE HOLIDAYS offers premium Urbania luxury AC coach rental services across Bangalore and Mysore. With comfortable seating options and a focus on a refined travel experience, we aim to make every journey more comfortable and memorable.
            </p>

            {/* Authentic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/30 transition-all">
                <div className="text-[#D4AF37] font-cinzel text-2xl font-bold mb-1">₹35/KM</div>
                <div className="text-sm font-semibold text-white mb-0.5">Transparent Rental Rate</div>
                <div className="text-xs text-neutral-400">Clear distance-based pricing across Karnataka</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/30 transition-all">
                <div className="text-[#D4AF37] font-cinzel text-2xl font-bold mb-1">12+1 & 16+1</div>
                <div className="text-sm font-semibold text-white mb-0.5">Dual Seating Layouts</div>
                <div className="text-xs text-neutral-400">Tailored for executive delegations & group travel</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/30 transition-all">
                <div className="text-[#D4AF37] font-cinzel text-2xl font-bold mb-1">100% AC</div>
                <div className="text-sm font-semibold text-white mb-0.5">Force Urbania Luxury</div>
                <div className="text-xs text-neutral-400">Climate-controlled comfort with individual ducts</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/30 transition-all">
                <div className="text-[#D4AF37] font-cinzel text-2xl font-bold mb-1">BLR & MYS</div>
                <div className="text-sm font-semibold text-white mb-0.5">Dual Service Hubs</div>
                <div className="text-xs text-neutral-400">Prompt dispatches in Bangalore and Mysore</div>
              </div>
            </div>

            {/* Contact Direct Line */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Bangalore & Mysore</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="hover:text-[#D4AF37] transition-colors">{BUSINESS_INFO.phones[0]}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#D4AF37] transition-colors">{BUSINESS_INFO.email}</a>
              </div>
            </div>

          </div>

          {/* Right Column: Unique Original Photograph */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl shine-card group">
              <img
                src="/images/about/about-urbania-villa.jpg"
                alt="Shine Holidays Force Urbania luxury coach side view"
                className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-[#D4AF37]/30">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">Authentic Vehicle Fleet</span>
                    <h3 className="text-white font-cinzel text-lg font-bold">Force Urbania Luxury Coach</h3>
                    <p className="text-xs text-neutral-300">Metallic Charcoal Finish • Bangalore & Mysore Fleet</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                    <CheckCircle className="w-5 h-5" />
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
