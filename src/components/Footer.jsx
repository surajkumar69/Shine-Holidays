import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { BUSINESS_INFO, NAV_LINKS, SERVICES_FLEET } from '../data/fleetData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappMessage)}`;

  return (
    <footer className="relative overflow-hidden bg-[#0F172A] text-white/80">
      
      {/* Top Ambient Gold Glow */}
      <span className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      
      {/* Top Gold Rule */}
      <div className="gold-rule h-px w-full opacity-60" />

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Col 1: Brand Logo & About */}
        <div>
          {/* Logo Plaque Badge */}
          <div className="bg-white px-3.5 py-1.5 rounded-xl border border-[#D4AF37]/50 shadow-md inline-flex items-center mb-4">
            <img
              src="/images/logo/logo-horizontal-bold-crisp.png"
              alt="SHINE HOLIDAYS"
              className="h-8 w-auto object-contain"
            />
          </div>

          <p className="mt-2 text-sm leading-relaxed text-white/65 font-light">
            SHINE HOLIDAYS delivers world-class executive transportation and Force Urbania luxury AC coach rentals across Bangalore and Mysore — where every journey begins with comfort.
          </p>

          {/* Social / Contact Icons */}
          <div className="mt-6 flex gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp SHINE HOLIDAYS"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#25D366] text-white"
            >
              <WhatsAppIcon className="h-4 w-4 text-white" />
            </a>

            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              aria-label="Call SHINE HOLIDAYS"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#D4AF37] hover:text-[#0F172A] text-white"
            >
              <Phone className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              aria-label="Email SHINE HOLIDAYS"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 text-white"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Explore Navigation Links */}
        <div>
          <h4 className="font-display text-xl font-semibold text-white">
            Explore
          </h4>
          <ul className="mt-5 space-y-2.5 text-sm text-white/70">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-[#E6C35C]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Popular Services */}
        <div>
          <h4 className="font-display text-xl font-semibold text-white">
            Popular Services
          </h4>
          <ul className="mt-5 space-y-2.5 text-sm text-white/70">
            {SERVICES_FLEET.map((srv) => (
              <li key={srv.id}>
                <a
                  href="#services"
                  className="transition-colors hover:text-[#E6C35C]"
                >
                  {srv.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact & Hubs */}
        <div>
          <h4 className="font-display text-xl font-semibold text-white">
            Contact & Hubs
          </h4>
          
          <div className="mt-5 space-y-3.5 text-sm text-white/75 font-light">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-[#E6C35C] shrink-0 mt-0.5" />
              <span>Bangalore & Mysore Hubs, Karnataka</span>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-[#E6C35C] shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <a href={`tel:${BUSINESS_INFO.phones[0].tel}`} className="hover:text-[#E6C35C] transition-colors">
                  {BUSINESS_INFO.phones[0].display}
                </a>
                <a href={`tel:${BUSINESS_INFO.phones[1].tel}`} className="hover:text-[#E6C35C] transition-colors">
                  {BUSINESS_INFO.phones[1].display}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="h-4 w-4 text-[#E6C35C] shrink-0 mt-0.5" />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#E6C35C] transition-colors">
                {BUSINESS_INFO.email}
              </a>
            </div>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#E6C35C] font-semibold block">
                Standard Tariff
              </span>
              <span className="font-display text-xl font-bold text-white">
                ₹35 per KM Flat
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="border-t border-white/10 py-6">
        <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} <strong className="text-white/80 font-medium">SHINE HOLIDAYS</strong>. All rights reserved. Premium Force Urbania AC Coach Rentals Bangalore & Mysore.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/70 hover:text-[#E6C35C] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

    </footer>
  );
}
