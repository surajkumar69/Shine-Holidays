import React from 'react';
import { HeartHandshake, Crown, BadgeCheck, Sparkles, ReceiptText, ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { WHY_CHOOSE_ITEMS } from '../data/fleetData';

export default function WhyUs() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="h-6 w-6" />;
      case 'Crown':
        return <Crown className="h-6 w-6" />;
      case 'BadgeCheck':
        return <BadgeCheck className="h-6 w-6" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6" />;
      case 'ReceiptText':
        return <ReceiptText className="h-6 w-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-6 w-6" />;
      default:
        return <ShieldCheck className="h-6 w-6" />;
    }
  };

  return (
    <section id="why" className="section relative overflow-hidden bg-[#F7F6F2]">
      
      {/* Background Soft Glow Orbs */}
      <span className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <span className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-[#16213E]/5 blur-3xl" />

      <div className="container-x relative">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Why SHINE HOLIDAYS"
          title="The SHINE HOLIDAYS"
          highlight="Promise"
          subtitle="A premium travel partner you can trust — for every ride, every time."
        />

        {/* 6 Feature Promise Cards Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="glass group relative flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-glass hover:shadow-soft bg-white/80 border border-white/60"
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F172A] text-[#E6C35C] shadow-soft transition-transform duration-300 group-hover:scale-105 mb-5">
                  {getIcon(item.icon)}
                </span>

                <h3 className="font-display text-xl font-semibold text-[#16213E] tracking-tight group-hover:text-[#B5922A] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#16213E]/65 font-light">
                  {item.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#16213E]/10 flex items-center justify-between text-xs text-[#16213E]/45">
                <span className="uppercase tracking-widest text-[#B5922A] font-semibold">Standard 0{idx + 1}</span>
                <span className="font-medium text-[#16213E]/70">SHINE HOLIDAYS</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
