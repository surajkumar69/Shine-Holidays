import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Shield, Clock, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Fleet', href: '#fleet' },
    { name: 'Why Us', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      
      {/* Top Micro Announcement Bar (Desktop & Tablet) */}
      <div className="bg-[#050608]/95 border-b border-white/[0.07] text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 hidden md:block text-neutral-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-[#E5C378]">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-medium tracking-wide">Force Urbania Luxury Coach Rentals • Bangalore & Mysore</span>
            </span>
            <span className="flex items-center space-x-1.5 text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Starting Rate: <strong className="text-white font-semibold">₹35 / KM</strong></span>
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <a
              href={`tel:${BUSINESS_INFO.phones[0]}`}
              className="hover:text-[#E5C378] transition-colors flex items-center space-x-1.5 font-medium"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>Direct: +91 {BUSINESS_INFO.phones[0]}</span>
            </a>
            <span className="text-neutral-600">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phones[1]}`}
              className="hover:text-[#E5C378] transition-colors text-neutral-400 hover:text-white"
            >
              Alt: +91 {BUSINESS_INFO.phones[1]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Luxury Header */}
      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07080A]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.85)] py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-black/90 via-black/55 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Brand - Ultra-Clear & Prominent Presentation */}
            <a href="#home" className="flex items-center gap-3 sm:gap-4 group">
              
              {/* Official Logo Badge Container (High-contrast, razor-sharp on all screens) */}
              <div className="bg-white px-2.5 sm:px-3.5 py-1.5 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.65)] border border-[#D4AF37]/50 flex items-center justify-center flex-shrink-0 group-hover:border-[#D4AF37] group-hover:shadow-[0_4px_24px_rgba(212,175,55,0.35)] transition-all">
                <img
                  src="/images/logo/logo-badge-white.png"
                  alt="SHINE HOLIDAYS Official Logo"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Bold, Elegant Typography for Maximum Readability */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1.5">
                  <span className="font-cinzel text-lg sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors leading-none">
                    SHINE <span className="text-[#D4AF37]">HOLIDAYS</span>
                  </span>
                </div>
                <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.22em] text-[#D4AF37] font-semibold mt-1">
                  365 Days 365 Ways...!
                </span>
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-medium hidden lg:block -mt-0.5">
                  Bangalore & Mysore Luxury Urbania
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.16em] font-medium text-neutral-300 hover:text-[#D4AF37] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Contact Action CTAs */}
            <div className="hidden md:flex items-center gap-3.5">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="flex items-center gap-2 text-xs font-semibold text-neutral-200 hover:text-[#D4AF37] px-4 py-2.5 rounded-full border border-white/15 hover:border-[#D4AF37]/50 bg-white/5 hover:bg-white/10 transition-all shadow-sm"
                title="Call Shine Holidays Dispatch"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>+91 {BUSINESS_INFO.primaryPhone}</span>
              </a>

              <a
                href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#B89329] text-black px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/35 hover:brightness-110 transition-all font-medium"
              >
                <MessageSquare className="w-4 h-4 fill-black/20" />
                <span>Book on WhatsApp</span>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center md:hidden gap-2">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="p-2.5 rounded-xl bg-white/5 border border-white/15 text-[#D4AF37] active:scale-95 transition-all"
                aria-label="Call Direct"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white/5 border border-white/15 text-white hover:text-[#D4AF37] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0A0B0E]/98 border-b border-white/10 px-5 pt-5 pb-7 mt-3 space-y-4 backdrop-blur-2xl animate-fadeIn">
            
            {/* Mobile Brand Summary Card */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-lg shadow-sm">
                <img
                  src="/images/logo/logo-badge-white.png"
                  alt="SHINE HOLIDAYS"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-cinzel text-base font-bold text-white block">
                  SHINE <span className="text-[#D4AF37]">HOLIDAYS</span>
                </span>
                <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">
                  Bangalore & Mysore • ₹35/KM
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-1 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium uppercase tracking-wider text-neutral-200 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs text-neutral-400 px-2">
                <span>Customer Help Desk:</span>
                <div className="flex gap-2">
                  <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="text-[#D4AF37] font-semibold">{BUSINESS_INFO.phones[0]}</a>
                  <span>•</span>
                  <a href={`tel:${BUSINESS_INFO.phones[1]}`} className="text-[#D4AF37] font-semibold">{BUSINESS_INFO.phones[1]}</a>
                </div>
              </div>

              <a
                href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#B89329] text-black py-3 rounded-xl shadow-lg shadow-[#D4AF37]/25"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
