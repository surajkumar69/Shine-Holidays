import React, { useState, useEffect } from 'react';
import { X, Check, Shield, Users, Wind, Tv, ChevronLeft, ChevronRight, MessageSquare, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export default function VehicleModal({ vehicle, onClose, onBookNow }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!vehicle) return null;

  const allImages = (vehicle.images && vehicle.images.length > 0)
    ? vehicle.images.map((imgUrl, i) => {
        const url = typeof imgUrl === 'string' ? imgUrl : imgUrl.url;
        let title = 'Complete Side Profile';
        let caption = 'Original Force Urbania luxury coach side view in metallic dark charcoal finish.';
        if (i === 1) {
          title = 'Plush Diamond Leather Seating';
          caption = 'Handcrafted diamond-quilted leather recliners with Shine Holidays embroidered headrests.';
        } else if (i === 2) {
          title = 'Executive Cabin Ambiance';
          caption = 'Panoramic tinted windows, personal AC vents, and ambient starlight roof.';
        }
        return {
          url,
          alt: `${vehicle.title} photo ${i + 1}`,
          title,
          caption,
          isAi: false
        };
      })
    : [
        {
          url: vehicle.coverImage || '/images/fleet/urbania/main-side-view.jpg',
          alt: vehicle.title,
          title: 'Complete Side Profile',
          caption: 'Original Force Urbania luxury coach.',
          isAi: false
        }
      ];

  const currentImage = allImages[activeImageIndex] || allImages[0];

  const handleWhatsAppBooking = () => {
    const message = `Hello SHINE HOLIDAYS, I would like to reserve the ${vehicle.title} at ${vehicle.rate || '₹35/KM'}. Please share availability and estimate.`;
    window.open(`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#0D0F14] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.95)] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/50">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:inline-flex bg-white px-2.5 py-1 rounded-lg border border-[#D4AF37]/50 shadow-sm">
              <img
                src="/images/logo/logo-horizontal-bold-crisp.png"
                alt="SHINE HOLIDAYS"
                className="h-7 w-auto object-contain"
              />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
              {vehicle.seating} Seater
            </span>
            <h3 className="font-cinzel text-lg sm:text-2xl font-bold text-white">
              {vehicle.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white border border-white/10 transition-all cursor-pointer"
            aria-label="Close vehicle modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-8">
          
          {/* Left Column: Interactive Image Viewer (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Active Photo */}
            <div className="relative h-[280px] sm:h-[380px] rounded-2xl overflow-hidden bg-[#0A0D14] border border-white/10 group flex items-center justify-center">
              {activeImageIndex === 0 && (
                <img
                  src={currentImage.url}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-xl opacity-35 scale-110 pointer-events-none"
                />
              )}
              <img
                src={currentImage.url}
                alt={currentImage.alt}
                className={`relative z-10 w-full h-full ${
                  activeImageIndex === 0 ? 'object-contain p-4' : 'object-cover'
                } transition-transform duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none"></div>

              {/* Prev / Next controls */}
              <button
                onClick={() => setActiveImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 hover:bg-[#D4AF37] hover:text-black text-white border border-white/20 transition-all"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveImageIndex((prev) => (prev + 1) % allImages.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 hover:bg-[#D4AF37] hover:text-black text-white border border-white/20 transition-all"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Tag / Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-black/80 text-[#D4AF37] border border-[#D4AF37]/40 backdrop-blur-md">
                  {activeImageIndex === 0 ? 'Complete Side Profile' : 'Authentic Cabin Photo'}
                </span>
              </div>

              {/* Bottom Caption inside image */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h4 className="font-cinzel text-sm sm:text-base font-bold text-white">
                  {currentImage.title}
                </h4>
                <p className="text-xs text-neutral-300 mt-0.5 line-clamp-2">
                  {currentImage.caption}
                </p>
              </div>
            </div>

            {/* Thumbnail Switcher Bar */}
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative rounded-xl overflow-hidden h-16 w-24 flex-shrink-0 border transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50 scale-105'
                      : 'border-white/15 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                  {img.isAi && (
                    <span className="absolute bottom-0 right-0 text-[8px] bg-black/80 text-[#D4AF37] px-1 font-bold">
                      AI
                    </span>
                  )}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Comprehensive Specifications & Reservation Action (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              
              {/* Tariff Callout */}
              <div className="p-4 rounded-2xl bg-black/50 border border-[#D4AF37]/35 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-medium">Rental Tariff</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-cinzel text-3xl font-extrabold text-[#D4AF37]">{vehicle.rate}</span>
                    <span className="text-xs text-neutral-400">transparent base rate</span>
                  </div>
                </div>
                <span className="text-xs text-[#E5C378] font-semibold uppercase tracking-wider bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                  BLR & MYS
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {vehicle.description}
              </p>

              {/* Specifications Grid */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block">
                  Included Amenities & Highlights:
                </span>
                <div className="space-y-2">
                  {vehicle.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal CTAs */}
            <div className="space-y-2.5 pt-4 border-t border-white/10">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#B89329] text-black font-semibold text-xs uppercase tracking-wider shadow-lg shadow-[#D4AF37]/30 hover:brightness-110 transition-all cursor-pointer font-medium"
              >
                <MessageSquare className="w-4 h-4 fill-black/20" />
                <span>Reserve on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  if (onBookNow) onBookNow(vehicle.title);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/20 hover:border-[#D4AF37]/50 text-neutral-300 hover:text-white text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>Proceed to Booking Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
