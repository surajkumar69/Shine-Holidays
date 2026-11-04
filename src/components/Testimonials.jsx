import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { TESTIMONIALS } from '../data/fleetData';

export default function Testimonials() {
  return (
    <section id="reviews" className="section bg-[#16213E]/[0.02] relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <span className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-[#D4AF37]/5 blur-3xl" />

      <div className="container-x relative">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Guest Stories"
          title="Loved by"
          highlight="Discerning Travellers"
          subtitle="Real experiences from families, corporate executives and event planners who travel with SHINE HOLIDAYS."
        />

        {/* Testimonials Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="glass relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 shadow-glass hover:shadow-soft bg-white/80 border border-white/60"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-[#D4AF37] mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#D4AF37]" />
                  ))}
                </div>

                {/* Feedback Quote */}
                <p className="text-sm sm:text-base leading-relaxed text-[#16213E]/75 italic font-light">
                  "{item.text}"
                </p>
              </div>

              {/* Author & Verified Tag */}
              <div className="mt-7 pt-5 border-t border-[#16213E]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-lg font-bold text-[#16213E]">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#16213E]/60 block mt-0.5">
                    {item.role}
                  </span>
                </div>

                <span className="flex items-center gap-1 text-[11px] font-semibold text-[#B5922A] bg-[#F0F3F9] px-2.5 py-1 rounded-full ring-1 ring-[#D4AF37]/30">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Verified Trip</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
