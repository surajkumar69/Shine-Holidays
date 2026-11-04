import React, { useState } from 'react';
import { Users, Wind, Check, MessageSquare, ChevronRight, Eye, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES_FLEET as FLEET_VEHICLES, BUSINESS_INFO } from '../data/fleetData';
import VehicleModal from './VehicleModal';

export default function Fleet({ onSelectVehicle }) {
  const [activeImageIndexes, setActiveImageIndexes] = useState({
    'urbania-12-seater': 0,
    'urbania-16-seater': 0,
  });

  const [modalVehicle, setModalVehicle] = useState(null);

  const handleSelectImage = (vehicleId, index) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [vehicleId]: index,
    }));
  };

  const handleBookVehicleWhatsApp = (vehicle) => {
    const msg = `Hello SHINE HOLIDAYS, I am interested in booking the ${vehicle.title} (Rental Rate: ₹35/KM). Please share the booking details.`;
    window.open(`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleQuickReserve = (vehicle) => {
    if (onSelectVehicle) {
      onSelectVehicle(vehicle.title);
    }
  };

  return (
    <section id="fleet" className="py-24 sm:py-28 bg-[#07080A] relative border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header in Reference Style */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12141A] border border-[#D4AF37]/35 text-[#E5C378] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Curated Luxury Coachline</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Discover Our <span className="gold-gradient-text font-serif-luxury italic font-normal">Luxury Fleet.</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Experience first-class group travel with Force Urbania premium AC coaches, specifically tailored for executive delegations and family tours in Bangalore and Mysore.
          </p>
        </div>

        {/* Fleet Grid: Exactly 2 Vehicle Cards with Consistent Dimensions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {FLEET_VEHICLES.map((vehicle) => {
            const currentIndex = activeImageIndexes[vehicle.id] || 0;
            const allImages = [
              {
                url: vehicle.mainImage.url,
                alt: vehicle.mainImage.alt,
                label: 'Showroom Cover',
                isAi: true,
              },
              ...vehicle.additionalImages.map((img) => ({
                url: img.url,
                alt: img.alt,
                label: 'Authentic Photo',
                title: img.title,
                caption: img.caption,
                isAi: false,
              })),
            ];

            const currentActiveImage = allImages[currentIndex];

            return (
              <div
                key={vehicle.id}
                className="rounded-3xl bg-[#0D0F14] border border-white/10 hover:border-[#D4AF37]/45 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-2xl group hover:-translate-y-1 relative"
              >
                {/* Vehicle Card Header & Interactive Image Carousel */}
                <div>
                  <div className="relative h-[300px] sm:h-[350px] overflow-hidden bg-black/80">
                    <img
                      src={currentActiveImage.url}
                      alt={currentActiveImage.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-black/40"></div>

                    {/* Corner Brackets for Luxury Automotive Touch */}
                    <div className="corner-bracket-tl"></div>
                    <div className="corner-bracket-br"></div>

                    {/* Badge: Seating & Status */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/85 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/50 shadow-lg">
                        {vehicle.seating} Seater
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/10 backdrop-blur-md text-neutral-200 border border-white/20">
                        {currentActiveImage.isAi ? 'Automotive Visual' : 'Authentic Cabin Photo'}
                      </span>
                    </div>

                    {/* Price Tag in Card Image */}
                    <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-[#D4AF37]/50 text-right shadow-lg">
                      <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-medium">Rental Tariff</span>
                      <span className="font-cinzel text-base font-bold text-[#D4AF37]">{vehicle.rate}</span>
                    </div>

                    {/* Photo Switcher Thumbnails inside the card */}
                    <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between gap-2 p-1.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15">
                      <div className="flex items-center gap-2 overflow-x-auto py-0.5">
                        {allImages.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSelectImage(vehicle.id, idx)}
                            className={`relative rounded-xl overflow-hidden h-12 w-16 sm:w-20 flex-shrink-0 border transition-all cursor-pointer ${
                              currentIndex === idx
                                ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50 scale-105'
                                : 'border-white/20 opacity-60 hover:opacity-100'
                            }`}
                            aria-label={`View photo ${idx + 1} of ${vehicle.title}`}
                          >
                            <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                            {img.isAi && (
                              <span className="absolute bottom-0 right-0 text-[8px] bg-black/90 text-[#D4AF37] px-1 font-bold">
                                AI
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                      <span className="text-[11px] text-neutral-400 font-medium px-2 whitespace-nowrap hidden sm:inline">
                        {currentIndex + 1} / {allImages.length}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 space-y-5">
                    
                    {/* Title & Description */}
                    <div>
                      <div className="flex items-baseline justify-between mb-1.5">
                        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide">
                          {vehicle.title}
                        </h3>
                        <span className="text-xs uppercase tracking-wider text-[#E5C378] font-semibold bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                          {vehicle.badge}
                        </span>
                      </div>
                      <p className="text-sm font-light text-neutral-300 leading-relaxed">
                        {vehicle.description}
                      </p>
                    </div>

                    {/* Dynamic Image Caption if viewing interior photo */}
                    {!currentActiveImage.isAi && currentActiveImage.title && (
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-[#D4AF37]/30 text-xs">
                        <span className="font-semibold text-[#D4AF37] block mb-0.5">
                          {currentActiveImage.title}
                        </span>
                        <span className="text-neutral-300 leading-relaxed block">
                          {currentActiveImage.caption}
                        </span>
                      </div>
                    )}

                    {/* Specifications Bar */}
                    <div className="grid grid-cols-2 gap-3 py-3.5 border-y border-white/10">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37]">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Seating Capacity</span>
                          <span className="text-xs font-semibold text-white">{vehicle.seating} Seater</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37]">
                          <Wind className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Climate Control</span>
                          <span className="text-xs font-semibold text-white">Multi-Zone AC</span>
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

                {/* Card Footer: Rental Rate & Dual Action Buttons */}
                <div className="p-6 sm:p-8 pt-0 border-t border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-medium">Rental Tariff</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">{vehicle.rate}</span>
                        <span className="text-xs text-neutral-400">transparent rate</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 w-full sm:w-auto">
                      <button
                        onClick={() => setModalVehicle(vehicle)}
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-white/15 hover:border-white/30 text-neutral-300 hover:text-white text-xs uppercase tracking-wider transition-all cursor-pointer"
                        title="View Full Specifications"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Specs</span>
                      </button>

                      <button
                        onClick={() => handleBookVehicleWhatsApp(vehicle)}
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#B89329] text-black font-semibold text-xs uppercase tracking-wider shadow-lg shadow-[#D4AF37]/25 hover:brightness-110 transition-all cursor-pointer font-medium"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-black/20" />
                        <span>Book Vehicle</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Full Vehicle Specification Modal */}
      {modalVehicle && (
        <VehicleModal
          vehicle={modalVehicle}
          onClose={() => setModalVehicle(null)}
          onBookNow={(title) => {
            setModalVehicle(null);
            handleQuickReserve({ title });
          }}
        />
      )}
    </section>
  );
}
