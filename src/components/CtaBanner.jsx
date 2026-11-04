import React from 'react';
import { MessageSquare, Phone, CalendarCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export default function CtaBanner() {
  const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hello SHINE HOLIDAYS, I would like to book a luxury Force Urbania AC coach. Please share booking details.')}`;

  return (
    <section className="section py-16 sm:py-20">
      <div className="container-x">
        
        <div className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] bg-[#0F172A] px-7 py-14 text-center shadow-lift sm:px-12 sm:py-20 text-white">
          
          {/* Ambient Glowing Orbs */}
          <span className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-[#E6C35C]/15 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            
            {/* Pill */}
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E6C35C]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Your Luxury Journey Awaits</span>
            </span>

            {/* Headline */}
            <h2 className="mt-6 text-balance font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Ready to Travel in{' '}
              <span className="text-gold-gradient italic font-normal">Pure Luxury?</span>
            </h2>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-white/75 font-light">
              Premium Force Urbania AC coaches, professional verified chauffeurs and transparent ₹35/KM pricing. Book in minutes on WhatsApp or give us a call — we're available 24/7 across Bangalore and Mysore.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap justify-center gap-3.5 sm:gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:brightness-105"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp Now</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="btn-shimmer shadow-gold flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-[#16213E] transition-all hover:shadow-lg"
              >
                <Phone className="h-4 w-4" />
                <span>+91 {BUSINESS_INFO.primaryPhone}</span>
              </a>

              <a
                href="#contact"
                className="glass flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/25"
              >
                <CalendarCheck className="h-4 w-4 text-[#E6C35C]" />
                <span>Booking Form</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
