import React from 'react';
import { MessageSquare, CalendarCheck, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export default function FloatingWhatsApp() {
  const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappMessage)}`;

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
      
      {/* Quick Booking Anchor Pill (Visible on sm+) */}
      <a
        href="#contact"
        className="hidden items-center gap-2 rounded-full bg-[#0F172A] px-5 py-2.5 text-xs font-semibold text-white shadow-lift transition-all hover:shadow-soft sm:flex border border-white/20"
      >
        <CalendarCheck className="h-4 w-4 text-[#E6C35C]" />
        <span>Book Now</span>
      </a>

      {/* Floating Call Action Button */}
      <a
        href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
        aria-label="Call SHINE HOLIDAYS"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#16213E] text-[#E6C35C] shadow-lg hover:scale-105 active:scale-95 transition-all border border-[#D4AF37]/50"
      >
        <Phone className="h-5 w-5" />
      </a>

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with SHINE HOLIDAYS"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 transition-all"
      >
        {/* Soft pulsing halo */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        <MessageSquare className="h-7 w-7 fill-white/20 relative z-10" />
      </a>

    </div>
  );
}
