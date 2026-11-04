import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Fleet', href: '#fleet' },
    { name: 'Why Choose Us', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Contact & Booking', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050608] border-t border-white/10 text-neutral-400 text-sm relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Col with Official Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-2 rounded-2xl bg-white/[0.03] border border-white/10 inline-block">
              <img
                src="/images/logo/logo-cropped.png"
                alt="SHINE HOLIDAYS Official Logo"
                className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(245,130,32,0.25)]"
              />
            </div>

            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              Specialists in premium Force Urbania luxury AC coach rentals across Bangalore and Mysore. Offering refined executive transit with spacious 12+1 and 16+1 configurations at ₹35/KM.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#D4AF37] font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Luxury Urbania Transport Provider</span>
            </div>
          </div>

          {/* Navigation Links Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-white">
              Contact & Hubs
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Service Locations:</strong>
                  <span>Bangalore & Mysore, Karnataka</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Call Inquiries:</strong>
                  <div className="flex gap-2">
                    <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="hover:text-[#D4AF37] transition-colors">
                      {BUSINESS_INFO.phones[0]}
                    </a>
                    <span>•</span>
                    <a href={`tel:${BUSINESS_INFO.phones[1]}`} className="hover:text-[#D4AF37] transition-colors">
                      {BUSINESS_INFO.phones[1]}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Official Email:</strong>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#D4AF37] transition-colors">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-neutral-400 block">Rental Rate:</span>
              <span className="font-cinzel text-lg font-bold text-[#D4AF37]">₹35 / KM</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {new Date().getFullYear()} <strong className="text-white font-medium">SHINE HOLIDAYS</strong>. All Rights Reserved. Force Urbania Luxury AC Coach Rentals Bangalore & Mysore.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-[#D4AF37] border border-white/10 transition-all cursor-pointer"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
