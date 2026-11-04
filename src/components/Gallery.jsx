import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/fleetData';

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <section id="gallery" className="py-24 sm:py-28 bg-[#07080A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12141A] border border-[#D4AF37]/35 text-[#E5C378] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Visual Fleet Showcase</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Curated <span className="gold-gradient-text font-serif-luxury italic font-normal">Fleet Gallery.</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light">
            Original, authentic photographs capturing our Force Urbania coaches in action across Bangalore and Mysore.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative rounded-3xl overflow-hidden bg-[#0D0F14] border border-white/10 hover:border-[#D4AF37]/50 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Corner brackets */}
              <div className="corner-bracket-tl"></div>
              <div className="corner-bracket-br"></div>

              <div className="h-72 sm:h-80 w-full overflow-hidden bg-black/50">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/75 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                  {item.category}
                </span>
                <h3 className="font-cinzel text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {item.title}
                </h3>
                <span className="text-[10px] text-neutral-400 mt-1 inline-flex items-center gap-1 font-light">
                  Click to expand photograph
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Professional Fullscreen Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white z-50 cursor-pointer transition-all hover:scale-110"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#D4AF37] hover:text-black border border-white/20 text-white z-50 cursor-pointer transition-all"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#D4AF37] hover:text-black border border-white/20 text-white z-50 cursor-pointer transition-all"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-black max-h-[75vh]">
              <img
                src={GALLERY_ITEMS[selectedImageIndex].url}
                alt={GALLERY_ITEMS[selectedImageIndex].alt}
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Lightbox Footer Info */}
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                {GALLERY_ITEMS[selectedImageIndex].category}
              </span>
              <h4 className="font-cinzel text-lg sm:text-xl font-bold text-white mt-0.5">
                {GALLERY_ITEMS[selectedImageIndex].title}
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Authentic Original Photograph • SHINE HOLIDAYS • Image {selectedImageIndex + 1} of {GALLERY_ITEMS.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
