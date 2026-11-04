import React, { useState } from 'react';
import { Users, Wind, ShieldCheck, ArrowRight, MessageSquare, Sparkles, Check, ChevronRight } from 'lucide-react';
import { FLEET_VEHICLES, BUSINESS_INFO } from '../data/fleetData';

export default function Fleet({ onSelectVehicle }) {
  // Track active photo index for each vehicle card (0 = main AI photo, 1..n = original uploaded photos)
  const [activeImageIndexes, setActiveImageIndexes] = useState({
    'urbania-12-seater': 0,
    'urbania-16-seater': 0,
  });

  const handleSelectImage = (vehicleId, index) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [vehicleId]: index,
    }));
  };

  const handleBookVehicle = (vehicle) => {
    if (onSelectVehicle) {
      onSelectVehicle(vehicle.title);
    } else {
      const msg = `Hello SHINE HOLIDAYS, I am interested in booking the ${vehicle.title} (Rental Rate: ₹35/KM). Please share the booking details.`;
      window.open(`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  return (
    <section id="fleet" className="py-24 bg-[#090A0C] relative border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Coach Fleet</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Discover Our <span className="gold-gradient-text font-serif-luxury italic font-normal">Luxury Fleet.</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light">
            Engineered for high-end corporate transfers, family leisure trips, and VIP transit in Bangalore and Mysore.
          </p>
        </div>

        {/* Fleet Grid: Exactly 2 Vehicle Cards with Consistent Dimensions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {FLEET_VEHICLES.map((vehicle) => {
            const currentIndex = activeImageIndexes[vehicle.id] || 0;
            // Compile image list: [main AI image, ...additional original images]
            const allImages = [
              {
                url: vehicle.mainImage.url,
                alt: vehicle.mainImage.alt,
                label: 'Commercial Visual',
                isAi: true,
              },
              ...vehicle.additionalImages.map((img) => ({
                url: img.url,
                alt: img.alt,
                label: 'Original Cabin Photo',
                title: img.title,
                caption: img.caption,
                isAi: false,
              })),
            ];

            const currentActiveImage = allImages[currentIndex];

            return (
              <div
                key={vehicle.id}
                className="rounded-2xl bg-[#121317] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-2xl group hover:-translate-y-1"
              >
                {/* Vehicle Card Header & Interactive Image Carousel */}
                <div>
                  <div className="relative h-[290px] sm:h-[340px] overflow-hidden bg-black/60">
                    <img
                      src={currentActiveImage.url}
                      alt={currentActiveImage.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121317] via-transparent to-black/40"></div>

                    {/* Badge: Seating & Status */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40">
                        {vehicle.seating} Seater
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/10 backdrop-blur-md text-white border border-white/15">
                        {currentActiveImage.isAi ? 'Automotive Visual' : 'Authentic Cabin Photo'}
                      </span>
                    </div>

                    {/* Price Tag in Card Image */}
                    <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-[#D4AF37]/50 text-right">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-medium">Rental Rate</span>
                      <span className="font-cinzel text-base font-bold text-[#D4AF37]">{vehicle.rate}</span>
                    </div>

                    {/* Photo Switcher Thumbnails inside the card */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2 p-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                      <div className="flex items-center gap-2 overflow-x-auto py-0.5">
                        {allImages.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSelectImage(vehicle.id, idx)}
                            className={`relative rounded-lg overflow-hidden h-11 w-14 sm:w-16 flex-shrink-0 border transition-all ${
                              currentIndex === idx
                                ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40 scale-105'
                                : 'border-white/20 opacity-60 hover:opacity-100'
                            }`}
                            aria-label={`View photo ${idx + 1} of ${vehicle.title}`}
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
                      <span className="text-[11px] text-neutral-400 font-medium px-2 whitespace-nowrap">
                        {currentIndex + 1} / {allImages.length}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-5">
                    
                    {/* Title & Description */}
                    <div>
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide">
                          {vehicle.title}
                        </h3>
                        <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                          Bangalore & Mysore
                        </span>
                      </div>
                      <p className="text-sm font-medium text-neutral-300">
                        {vehicle.description}
                      </p>
                    </div>

                    {/* Image Caption if viewing interior original photo */}
                    {!currentActiveImage.isAi && currentActiveImage.title && (
                      <div className="p-3 rounded-lg bg-[#D4AF37]/5 border border-[#D4AF37]/20 text-xs">
                        <span className="font-semibold text-[#D4AF37] block mb-0.5">
                          {currentActiveImage.title}
                        </span>
                        <span className="text-neutral-300 leading-relaxed block">
                          {currentActiveImage.caption}
                        </span>
                      </div>
                    )}

                    {/* Specifications Bar */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/10">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37]">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Seating Capacity</span>
                          <span className="text-xs font-semibold text-white">{vehicle.seating} Seater</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37]">
                          <Wind className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Climate Control</span>
                          <span className="text-xs font-semibold text-white">Multi-Duct AC</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Features Bullet List */}
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block">
                        Included Highlights:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {vehicle.features.map((feat, fidx) => (
                          <div key={fidx} className="flex items-center gap-2 text-xs text-neutral-300">
                            <Check className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Footer: Rental Rate & CTA Button */}
                <div className="p-6 sm:p-7 pt-0 border-t border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-medium">Rental Tariff</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">{vehicle.rate}</span>
                        <span className="text-xs text-neutral-400">transparent rate</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookVehicle(vehicle)}
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#DDBE55] to-[#B89628] text-black font-semibold text-xs uppercase tracking-wider shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 hover:shadow-[#D4AF37]/40 transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-black/20" />
                      <span>Book This Vehicle</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
