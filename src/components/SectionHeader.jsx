import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  light = false
}) {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] ${
            light ? 'text-[#E6C35C]' : 'text-[#B5922A]'
          }`}
        >
          <span className="h-px w-7 bg-[#D4AF37]/60" />
          {eyebrow}
          <span className="h-px w-7 bg-[#D4AF37]/60" />
        </span>
      )}

      <h2
        className={`mt-4 text-balance font-display text-3xl font-semibold leading-[1.08] sm:text-4xl lg:text-[3.2rem] ${
          light ? 'text-white' : 'text-[#16213E]'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className="text-gold-gradient italic font-normal">{highlight}</span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/70' : 'text-[#16213E]/65'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
