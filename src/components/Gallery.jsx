import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import SectionHeader from './SectionHeader';
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

  const colSpans = ["lg:col-span-2", "", "", "lg:col-span-2"];

  return (
    <section id="gallery" className="section relative overflow-hidden bg-[#F7F6F2]">
      
      {/* Background Soft Glow */}
      <span className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#D4AF37]/8 blur-3xl" />

      <div className="container-x relative">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Gallery"
          title="Moments in"
          highlight="Motion"
          subtitle="A glimpse of the authentic journeys, transfers and experiences we craft every day in Bangalore & Mysore."
        />

        {/* Asymmetric Image Grid */}
        <div className="mt-14 grid auto-rows-[16rem] sm:auto-rows-[18rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY_ITEMS.map((item, index) => (
            <figure
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className={`group relative overflow-hidden rounded-3xl shadow-glass cursor-pointer bg-slate-100 ${colSpans[index] || ''}`}
            >
              <img
                src={item.url}
                alt={`${item.title} — SHINE HOLIDAYS`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D1B]/85 via-[#070D1B]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Hover Zoom Icon */}
              <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-2xl glass-dark text-[#E6C35C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <Maximize2 className="h-4 w-4" />
              </div>

              {/* Caption Overlay */}
              <figcaption className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 text-white">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#E6C35C] block mb-1">
                  {item.category}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-semibold leading-snug text-white">
                  {item.title}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#070D1B]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#16213E] text-white transition-all"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#16213E] text-white transition-all"
            aria-label="Next photograph"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Lightbox Image Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden border border-white/20 shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_ITEMS[selectedImageIndex].url}
              alt={GALLERY_ITEMS[selectedImageIndex].title}
              className="w-full h-auto max-h-[75vh] object-contain bg-black"
            />
            <div className="p-5 bg-[#0F172A] border-t border-white/10 text-white flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#E6C35C] font-semibold block">
                  {GALLERY_ITEMS[selectedImageIndex].category}
                </span>
                <h4 className="font-display text-xl font-bold mt-0.5">
                  {GALLERY_ITEMS[selectedImageIndex].title}
                </h4>
              </div>
              <span className="text-xs text-white/60">
                {selectedImageIndex + 1} / {GALLERY_ITEMS.length}
              </span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
