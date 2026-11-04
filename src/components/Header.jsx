import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Shield, Clock } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../data/fleetData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappMessage)}`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-500 ${
          isScrolled ? 'shadow-glass py-2.5' : 'shadow-soft py-3.5 sm:py-4'
        }`}
      >
        <div className="container-x flex items-center justify-between">
          
          {/* Brand Logo - High Resolution & Premium Visibility */}
          <a
            href="#home"
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
            aria-label="SHINE HOLIDAYS Home"
          >
            <div className="bg-white px-3 py-1.5 rounded-xl border border-[#D4AF37]/50 shadow-sm flex items-center justify-center">
              <img
                src="/images/logo/logo-horizontal-bold-crisp.png"
                alt="SHINE HOLIDAYS - 365 Days 365 Ways...!"
                className="h-8 sm:h-10 md:h-11 w-auto max-w-[190px] sm:max-w-[240px] md:max-w-[270px] object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-xs xl:text-sm font-semibold text-[#16213E]/80 transition-colors hover:text-[#B5922A] hover:bg-[#F0F3F9]/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-xs xl:text-sm font-semibold text-[#16213E] ring-1 ring-[#16213E]/20 transition-all hover:ring-[#D4AF37]/70 hover:bg-[#F0F3F9]/50"
            >
              <Phone className="h-4 w-4 text-[#D4AF37]" />
              <span>Call Us</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer shadow-gold flex items-center gap-2 rounded-full px-5 py-2 text-xs xl:text-sm font-bold text-[#16213E] transition-all hover:shadow-lg"
            >
              <MessageSquare className="h-4 w-4 text-[#16213E]" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Actions: WhatsApp Icon, Call Icon & Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm hover:scale-105 active:scale-95 transition-all"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="h-4 w-4 fill-white/20" />
            </a>

            <a
              href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16213E] text-white shadow-sm hover:scale-105 active:scale-95 transition-all"
              aria-label="Call Dispatch"
            >
              <Phone className="h-4 w-4 text-[#E6C35C]" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-full glass-strong text-[#16213E] shadow-glass"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Slide-Out Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#070D1B]/55 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <aside className="fixed right-0 top-0 z-[70] flex h-full w-[85%] max-w-sm flex-col bg-[#FAF9F5] p-6 shadow-lift transition-transform">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#16213E]/10">
              <div className="bg-white px-3 py-1.5 rounded-xl border border-[#D4AF37]/40 shadow-sm">
                <img
                  src="/images/logo/logo-horizontal-bold-crisp.png"
                  alt="SHINE HOLIDAYS"
                  className="h-8 w-auto object-contain"
                />
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#16213E] shadow-sm border border-[#16213E]/10"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Rate & Location Banner */}
            <div className="my-4 p-3 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-sm flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#B5922A] font-semibold block">
                  Bangalore & Mysore Hubs
                </span>
                <span className="font-semibold text-[#16213E]">Force Urbania Coaches</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#16213E]/60 block font-medium">Flat Rate</span>
                <span className="font-display text-base font-bold text-[#B5922A]">₹35 / KM</span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-1.5 overflow-y-auto py-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-[#16213E] transition-colors hover:bg-white hover:text-[#B5922A] hover:shadow-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="mt-auto pt-6 border-t border-[#16213E]/10 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-shimmer shadow-gold flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold text-[#16213E] w-full"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Book on WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={`tel:${BUSINESS_INFO.phones[0].tel}`}
                  className="flex items-center justify-center gap-1.5 rounded-full bg-white py-2.5 font-semibold text-[#16213E] border border-[#16213E]/15"
                >
                  <Phone className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span>Call 1</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phones[1].tel}`}
                  className="flex items-center justify-center gap-1.5 rounded-full bg-white py-2.5 font-semibold text-[#16213E] border border-[#16213E]/15"
                >
                  <Phone className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span>Call 2</span>
                </a>
              </div>
            </div>

          </aside>
        </div>
      )}
    </>
  );
}
