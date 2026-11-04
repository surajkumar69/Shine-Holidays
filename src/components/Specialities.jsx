import React from 'react';
import { UsersRound, Briefcase, Landmark, Map, Heart, Plane } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { SPECIALITIES } from '../data/fleetData';

export default function Specialities() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'UsersRound':
        return <UsersRound className="h-7 w-7" />;
      case 'Briefcase':
        return <Briefcase className="h-7 w-7" />;
      case 'Landmark':
        return <Landmark className="h-7 w-7" />;
      case 'Map':
        return <Map className="h-7 w-7" />;
      case 'Heart':
        return <Heart className="h-7 w-7" />;
      case 'Plane':
        return <Plane className="h-7 w-7" />;
      default:
        return <UsersRound className="h-7 w-7" />;
    }
  };

  return (
    <section id="specialities" className="section bg-[#16213E]/[0.02]">
      <div className="container-x">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Specialised In"
          title="Crafted for"
          highlight="Every Occasion"
          subtitle="Whatever the journey, we tailor a premium experience around it."
        />

        {/* 6 Speciality Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALITIES.map((item, idx) => (
            <div
              key={idx}
              className="glass group relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-glass hover:shadow-soft bg-white/80 border border-white/60"
            >
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F172A] text-[#E6C35C] shadow-soft transition-transform duration-300 group-hover:scale-105">
                  {getIcon(item.icon)}
                </span>

                <h3 className="mt-5 font-display text-2xl font-semibold text-[#16213E] tracking-tight group-hover:text-[#B5922A] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#16213E]/65 font-light">
                  {item.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#16213E]/10 flex items-center justify-between text-xs text-[#16213E]/50 font-medium">
                <span className="uppercase tracking-wider text-[#B5922A] font-semibold">Service Option 0{idx + 1}</span>
                <span>Bangalore & Mysore</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
