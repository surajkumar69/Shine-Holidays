import React, { useState } from 'react';
import { BusFront, UsersRound, Car, Route, Plane, ArrowRight, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { SERVICES_FLEET, BUSINESS_INFO } from '../data/fleetData';
import VehicleModal from './VehicleModal';

export default function Services({ onSelectVehicleForBooking }) {
  const [activeImageIndexes, setActiveImageIndexes] = useState({});
  const [selectedModalVehicle, setSelectedModalVehicle] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'BusFront':
        return <BusFront className="h-5 w-5" />;
      case 'UsersRound':
        return <UsersRound className="h-5 w-5" />;
      case 'Car':
        return <Car className="h-5 w-5" />;
      case 'Route':
        return <Route className="h-5 w-5" />;
      case 'Plane':
        return <Plane className="h-5 w-5" />;
      default:
        return <BusFront className="h-5 w-5" />;
    }
  };

  const handlePrevImage = (serviceId, total, e) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({
      ...prev,
      [serviceId]: (prev[serviceId] || 0) === 0 ? total - 1 : (prev[serviceId] || 0) - 1,
    }));
  };

  const handleNextImage = (serviceId, total, e) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({
      ...prev,
      [serviceId]: ((prev[serviceId] || 0) + 1) % total,
    }));
  };

  const handleBookVehicle = (service) => {
    const msg = `Hello SHINE HOLIDAYS, I would like to book the ${service.title} (${service.rate || '₹35/KM'}). Please share availability and details.`;
    window.open(`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="services" className="section relative overflow-hidden bg-[#F7F6F2]">
      
      {/* Background Soft Glow */}
      <span className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#D4AF37]/8 blur-3xl" />
      <span className="pointer-events-none absolute left-0 bottom-1/4 h-80 w-80 rounded-full bg-[#16213E]/5 blur-3xl" />

      <div className="container-x relative">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Our Services"
          title="Luxury Travel,"
          highlight="Every Way"
          subtitle="From Urbania luxury coaches to executive Tempo Travellers and airport transfers — the right vehicle for every journey."
        />

        {/* 6 Vehicle & Service Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_FLEET.map((service) => {
            const currentImgIdx = activeImageIndexes[service.id] || 0;
            const images = service.images || [service.coverImage];
            const hasMultipleImages = images.length > 1;

            return (
              <div
                key={service.id}
                className="group glass relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 shadow-glass hover:shadow-soft bg-white/80 border border-white/60"
              >
                {/* Floating Glow on Card Hover */}
                <span className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#D4AF37]/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Card Top: Image Carousel */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={images[currentImgIdx]}
                    alt={`${service.title} photograph ${currentImgIdx + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Bottom Shading */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Top-Right Category Floating Glass Badge */}
                  <div className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-2xl glass-dark text-[#E6C35C] shadow-lg">
                    {getIcon(service.icon)}
                  </div>

                  {/* Top-Left Rate Badge */}
                  {service.rate && (
                    <div className="absolute left-4 top-4 z-20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#16213E] shadow-sm border border-[#D4AF37]/40">
                      {service.rate}
                    </div>
                  )}

                  {/* Image Carousel Controls if multiple images */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={(e) => handlePrevImage(service.id, images.length, e)}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={(e) => handleNextImage(service.id, images.length, e)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Next photo"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>

                      {/* Pagination Indicator Dots */}
                      <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-1.5 pointer-events-none">
                        {images.map((_, dotIdx) => (
                          <span
                            key={dotIdx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              currentImgIdx === dotIdx ? 'w-5 bg-[#D4AF37]' : 'w-1.5 bg-white/70'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-7 bg-white/50">
                  <h3 className="font-display text-2xl font-semibold text-[#16213E] tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#16213E]/70 font-light">
                    {service.description}
                  </p>

                  {/* Category Tags */}
                  {service.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#F0F3F9] px-3 py-1 text-xs font-semibold text-[#16213E] ring-1 ring-[#D4AF37]/30 shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bottom Action CTAs */}
                  <div className="mt-6 pt-5 border-t border-[#16213E]/10 flex items-center justify-between">
                    <button
                      onClick={() => handleBookVehicle(service)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#16213E] transition-colors hover:text-[#B5922A] cursor-pointer group/btn"
                    >
                      <span>Book Now</span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-sheen text-[#16213E] transition-transform duration-300 group-hover/btn:translate-x-1 shadow-sm">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </button>

                    {/* Quick Specs modal toggle for Urbania */}
                    {(service.id === 'urbania-12' || service.id === 'urbania-16') && (
                      <button
                        onClick={() => setSelectedModalVehicle(service)}
                        className="text-xs font-medium text-[#16213E]/60 hover:text-[#B5922A] transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>View Specs</span>
                      </button>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Vehicle Specification Modal if triggered */}
      {selectedModalVehicle && (
        <VehicleModal
          vehicle={{
            title: selectedModalVehicle.title,
            seating: selectedModalVehicle.tags[0].split(' ')[0],
            mainImage: {
              url: selectedModalVehicle.coverImage,
              alt: selectedModalVehicle.title
            },
            additionalImages: selectedModalVehicle.images.slice(1).map((imgUrl, i) => ({
              url: imgUrl,
              alt: `${selectedModalVehicle.title} view ${i+1}`,
              title: i === 0 ? "Executive Cabin" : "Vehicle Profile",
              caption: "Force Urbania authentic fleet coach with AC climate control and diamond leather seats."
            }))
          }}
          onClose={() => setSelectedModalVehicle(null)}
        />
      )}

    </section>
  );
}
