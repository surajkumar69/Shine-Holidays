import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090A0C]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand - Official Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="p-1 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#D4AF37]/40 transition-all">
              <img
                src="/images/logo/logo-cropped.png"
                alt="SHINE HOLIDAYS Official Logo"
                className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 filter drop-shadow-[0_2px_10px_rgba(245,130,32,0.25)]"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Bangalore & Mysore Hubs
              </span>
              <span className="text-xs text-neutral-300 font-light tracking-wide -mt-0.5">
                Force Urbania Luxury AC Coaches
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-[#D4AF37] tracking-wider transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="flex items-center gap-2 text-xs font-semibold text-neutral-200 hover:text-[#D4AF37] px-3.5 py-2 rounded-full border border-white/10 hover:border-[#D4AF37]/40 bg-white/5 transition-all"
              title="Call Shine Holidays"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{BUSINESS_INFO.primaryPhone}</span>
            </a>

            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#B89628] text-black px-4.5 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/25 hover:brightness-110 transition-all font-medium"
            >
              <MessageSquare className="w-4 h-4 fill-black/20" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#D4AF37]"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-[#D4AF37] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0C0D10]/98 border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-neutral-200 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs text-neutral-400 px-3">
              <span>Customer Desk:</span>
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
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#B89628] text-black py-3 rounded-lg shadow-lg shadow-[#D4AF37]/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
