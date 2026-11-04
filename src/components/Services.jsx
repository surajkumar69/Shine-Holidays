import React, { useState } from 'react';
import { BusFront, UsersRound, ArrowRight, ChevronLeft, ChevronRight, Eye, Phone, MessageSquare } from 'lucide-react';
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
          eyebrow="Our Fleet & Services"
          title="Luxury Coaches &"
          highlight="Travellers"
          subtitle="Premium Force Urbania luxury coaches and Tempo Travellers — tailored for executive delegations and family journeys in Bangalore & Mysore."
        />

        {/* 6 Vehicle & Service Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_FLEET.map((service) => {
            const currentImgIdx = activeImageIndexes[service.id] || 0;
            const images = service.images || [service.coverImage];
            const hasMultipleImages = images.length > 1;
            const isSideView = currentImgIdx === 0 && (service.id === 'urbania-12' || service.id === 'urbania-16');

            return (
              <div
                key={service.id}
                className="group glass relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 shadow-glass hover:shadow-soft bg-white/80 border border-white/60"
              >
                {/* Floating Glow on Card Hover */}
                <span className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#D4AF37]/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Card Top: Image Carousel with Responsive contain/cover fitting */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0A0D15] flex items-center justify-center">
                  {/* Ambient backdrop for complete side-view containment */}
                  {isSideView && (
                    <img
                      src={images[currentImgIdx]}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-cover blur-xl opacity-35 scale-110 pointer-events-none"
                    />
                  )}

                  <img
                    src={images[currentImgIdx]}
                    alt={`${service.title} photograph ${currentImgIdx + 1}`}
                    className={`relative z-10 h-full w-full ${
                      isSideView ? 'object-contain p-2 sm:p-3' : 'object-cover'
                    } transition-transform duration-700 group-hover:scale-105`}
                  />

                  {/* Gradient Bottom Shading */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

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

                  {/* View Type Badge (Full Side View vs Luxury Interior) */}
                  {hasMultipleImages && (
                    <div className="absolute bottom-3 left-4 z-20 pointer-events-none">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold tracking-wide uppercase bg-black/65 text-[#E6C35C] border border-[#D4AF37]/35 backdrop-blur-md shadow-xs">
                        {currentImgIdx === 0 ? 'Full Side View' : 'Luxury Interior'}
                      </span>
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
                      <div className="absolute bottom-3 right-4 z-20 flex justify-end gap-1.5 pointer-events-none">
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

                  {/* Bottom Action CTAs - WhatsApp & Call Integration */}
                  <div className="mt-6 pt-5 border-t border-[#16213E]/10 flex flex-wrap items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2">
                      <a
                        href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                          `Hello SHINE HOLIDAYS, I would like to book the ${service.title} (${service.rate || '₹35/KM'}). Please share availability and details.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-sm active:scale-95 cursor-pointer"
                        aria-label={`Book ${service.title} on WhatsApp`}
                      >
                        <MessageSquare className="h-3.5 w-3.5 fill-white/20" />
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href={`tel:+91${BUSINESS_INFO.primaryPhone}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-[#16213E] text-white hover:bg-[#1f2d52] transition-all shadow-sm active:scale-95 cursor-pointer"
                        aria-label={`Call SHINE HOLIDAYS for ${service.title}`}
                      >
                        <Phone className="h-3.5 w-3.5 text-[#E6C35C]" />
                        <span>Call</span>
                      </a>
                    </div>

                    {/* Quick Specs modal toggle for Urbania */}
                    {(service.id === 'urbania-12' || service.id === 'urbania-16') ? (
                      <button
                        onClick={() => setSelectedModalVehicle(service)}
                        className="text-xs font-medium text-[#16213E]/60 hover:text-[#B5922A] transition-colors flex items-center gap-1 cursor-pointer ml-auto"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>View Specs</span>
                      </button>
                    ) : (
                      <span className="text-xs font-medium text-[#B5922A] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/30 ml-auto">
                        Special Rate
                      </span>
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
