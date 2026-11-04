import React from 'react';
import { Briefcase, Users, Landmark, Heart, Plane, Mountain, Sparkles, CarFront, PhoneCall, CalendarCheck, PartyPopper } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { POPULAR_PACKAGES, FOUR_STEPS } from '../data/fleetData';

export default function Packages() {
  const getPackageIcon = (iconName) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="h-6 w-6" />;
      case 'Users':
        return <Users className="h-6 w-6" />;
      case 'Landmark':
        return <Landmark className="h-6 w-6" />;
      case 'Heart':
        return <Heart className="h-6 w-6" />;
      case 'Plane':
        return <Plane className="h-6 w-6" />;
      case 'Mountain':
        return <Mountain className="h-6 w-6" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6" />;
      default:
        return <Briefcase className="h-6 w-6" />;
    }
  };

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'CarFront':
        return <CarFront className="h-8 w-8" />;
      case 'PhoneCall':
        return <PhoneCall className="h-8 w-8" />;
      case 'CalendarCheck':
        return <CalendarCheck className="h-8 w-8" />;
      case 'PartyPopper':
        return <PartyPopper className="h-8 w-8" />;
      default:
        return <CarFront className="h-8 w-8" />;
    }
  };

  return (
    <section id="packages" className="section bg-[#16213E]/[0.02]">
      <div className="container-x">
        
        {/* Part 1: Popular Packages */}
        <SectionHeader
          eyebrow="Popular Packages"
          title="Journeys Our Guests"
          highlight="Love Most"
          subtitle="Hand-picked packages for corporate trips, family vacations, heritage tours and airport transit."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POPULAR_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className="glass group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-glass hover:shadow-soft bg-white/80 border border-white/60"
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F172A] text-[#E6C35C] shadow-soft transition-transform duration-300 group-hover:scale-105 mb-5">
                  {getPackageIcon(pkg.icon)}
                </span>

                <h3 className="font-display text-xl font-semibold text-[#16213E] tracking-tight group-hover:text-[#B5922A] transition-colors">
                  {pkg.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#16213E]/65 font-light">
                  {pkg.text}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#16213E]/10 flex items-center justify-between text-xs text-[#B5922A] font-semibold">
                <span>Bangalore & Mysore Hubs</span>
                <span>₹35/KM</span>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: How It Works - Four Steps Sequence */}
        <div className="mt-24 sm:mt-28">
          
          <SectionHeader
            eyebrow="How It Works"
            title="Booking in"
            highlight="Four Steps"
            subtitle="Quick, simple and transparent reservation process via WhatsApp or Call."
          />

          <div className="relative mt-14 grid gap-10 md:grid-cols-4">
            
            {/* Horizontal Connecting Gold Gradient Line (visible on md+) */}
            <span className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-[#D4AF37]/45 to-transparent md:block" />

            {FOUR_STEPS.map((item) => (
              <div key={item.step} className="relative flex flex-col items-center text-center group">
                
                {/* Step Icon Badge */}
                <span className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-[#0F172A] text-[#E6C35C] shadow-soft transition-transform duration-300 group-hover:scale-105">
                  {getStepIcon(item.icon)}
                  
                  {/* Step Number Circle */}
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold-sheen font-display text-xs font-bold text-[#16213E] shadow-sm">
                    {item.step}
                  </span>
                </span>

                <h3 className="mt-5 font-display text-xl font-semibold text-[#16213E] tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-[#16213E]/65 font-light">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
