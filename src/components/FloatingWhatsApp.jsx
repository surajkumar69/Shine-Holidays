import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export default function FloatingWhatsApp() {
  const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappMessage)}`;

  return (
    <>
      {/* Floating WhatsApp Action Pill for Desktop & Tablet */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider shadow-2xl hover:brightness-110 hover:scale-105 transition-all group"
          title="Chat with SHINE HOLIDAYS on WhatsApp"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 fill-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
          </div>
          <span className="font-medium">Book on WhatsApp</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0A0B0E]/95 backdrop-blur-lg border-t border-white/10 px-4 py-2.5 flex items-center gap-3">
        <a
          href={`tel:${BUSINESS_INFO.primaryPhone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white font-medium text-xs tracking-wider border border-white/15 active:scale-98 transition-all"
        >
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          <span>Call Desk</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89628] text-black font-semibold text-xs tracking-wider shadow-lg active:scale-98 transition-all font-medium"
        >
          <MessageSquare className="w-4 h-4 fill-black/20" />
          <span>Book on WhatsApp</span>
        </a>
      </div>
    </>
  );
}
