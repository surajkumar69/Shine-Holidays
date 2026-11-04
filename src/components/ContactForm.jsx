import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import SectionHeader from './SectionHeader';
import { BUSINESS_INFO, SERVICES_FLEET } from '../data/fleetData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    date: '',
    vehicle: 'Force Urbania 12+1 Luxury Coach',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.pickup.trim()) errs.pickup = 'Pickup location is required';
    if (!formData.destination.trim()) errs.destination = 'Destination is required';
    if (!formData.date) errs.date = 'Select a travel date';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const messageLines = [
      `*New Booking Enquiry — SHINE HOLIDAYS*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone:* ${formData.phone}`,
      `📍 *Pickup:* ${formData.pickup}`,
      `🏁 *Destination:* ${formData.destination}`,
      `📅 *Travel Date:* ${formData.date}`,
      `🚐 *Vehicle Type:* ${formData.vehicle}`,
      `💰 *Tariff Reference:* ${formData.vehicle.toLowerCase().includes('tempo') ? '₹25/KM Rate' : '₹35/KM Flat Rate'}`,
      formData.message ? `📝 *Message:* ${formData.message}` : null,
      `━━━━━━━━━━━━━━━━━━━━`,
      `Please confirm availability and share estimated itinerary quotation.`
    ].filter(Boolean).join('\n');

    const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(messageLines)}`;
    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const contactList = [
    {
      icon: Phone,
      label: "Direct Dispatch Line",
      value: BUSINESS_INFO.phones[0].display,
      href: `tel:${BUSINESS_INFO.phones[0].tel}`
    },
    {
      icon: Phone,
      label: "Alternate Dispatch",
      value: BUSINESS_INFO.phones[1].display,
      href: `tel:${BUSINESS_INFO.phones[1].tel}`
    },
    {
      icon: Mail,
      label: "Official Email",
      value: BUSINESS_INFO.email,
      href: `mailto:${BUSINESS_INFO.email}`
    },
    {
      icon: MapPin,
      label: "Service Locations",
      value: "Bangalore & Mysore Hubs",
      href: null
    },
    {
      icon: Tag,
      label: "Transparent Rate",
      value: "₹35 per KM",
      href: null
    },
    {
      icon: Clock,
      label: "Operating Hours",
      value: BUSINESS_INFO.hours,
      href: null
    }
  ];

  const inputClass = "w-full rounded-2xl bg-[#F0F3F9] px-4 py-3 text-sm text-[#16213E] outline-none transition-all placeholder:text-[#16213E]/40 border border-transparent focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/20";

  return (
    <section id="contact" className="section relative overflow-hidden bg-[#F7F6F2]">
      
      {/* Background Glow */}
      <span className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-[#D4AF37]/8 blur-3xl" />

      <div className="container-x relative">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Get in Touch"
          title="Book Your"
          highlight="Luxury Ride"
          subtitle="Share your trip details and we'll confirm coach availability instantly over WhatsApp."
        />

        {/* 2-Column Contact Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          
          {/* Left Column: Company & Contact Info (2 cols) */}
          <div className="lg:col-span-2">
            <div className="glass-strong flex h-full flex-col justify-between rounded-[2rem] sm:rounded-[2.5rem] p-7 sm:p-8 shadow-glass bg-white/90 border border-white/70">
              
              <div>
                {/* Brand Plaque */}
                <div className="bg-white px-3.5 py-1.5 rounded-xl border border-[#D4AF37]/50 shadow-sm inline-flex items-center mb-4">
                  <img
                    src="/images/logo/logo-horizontal-bold-crisp.png"
                    alt="SHINE HOLIDAYS - 365 Days 365 Ways...!"
                    className="h-8 w-auto object-contain"
                  />
                </div>

                <h3 className="font-display text-2xl font-semibold text-[#16213E]">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="mt-1 text-sm text-[#B5922A] font-semibold uppercase tracking-wider">
                  {BUSINESS_INFO.tagline}
                </p>

                {/* Contact Items List */}
                <ul className="mt-7 space-y-4">
                  {contactList.map((item, idx) => {
                    const IconComp = item.icon;
                    const content = (
                      <span className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-[#E6C35C] shadow-sm">
                          <IconComp className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-xs font-semibold uppercase tracking-wider text-[#16213E]/50">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-sm font-medium text-[#16213E]">
                            {item.value}
                          </span>
                        </span>
                      </span>
                    );

                    return (
                      <li key={idx}>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="block transition-opacity hover:opacity-75"
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Bottom Quick Call & WhatsApp CTAs */}
              <div className="mt-8 flex gap-3">
                <a
                  href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0F172A] py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#16213E]"
                >
                  <Phone className="h-4 w-4 text-[#E6C35C]" />
                  <span>Call Now</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Booking Form (3 cols) */}
          <div className="lg:col-span-3">
            <div className="glass-strong rounded-[2rem] sm:rounded-[2.5rem] p-7 sm:p-9 shadow-glass bg-white/95 border border-white/80">
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-sheen text-[#16213E] shadow-sm">
                    <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl sm:text-3xl font-semibold text-[#16213E]">
                    Opening WhatsApp Enquiry…
                  </h3>
                  <p className="mt-2.5 max-w-sm text-sm text-[#16213E]/70 font-light leading-relaxed">
                    Your trip quotation details have been generated. Click send on WhatsApp and our dispatch desk will confirm your booking right away.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-xs uppercase tracking-wider font-semibold text-[#B5922A] hover:underline"
                  >
                    Submit Another Trip Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#16213E]/60 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className={inputClass}
                    />
                    {errors.name && <span className="text-[11px] text-red-500 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Mobile Phone */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#16213E]/60 mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className={inputClass}
                    />
                    {errors.phone && <span className="text-[11px] text-red-500 mt-1 block">{errors.phone}</span>}
                  </div>

                  {/* Pickup Location */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#16213E]/60 mb-1.5">
                      Pickup Location *
                    </label>
                    <input
                      type="text"
                      name="pickup"
                      value={formData.pickup}
                      onChange={handleChange}
                      placeholder="Pickup address in BLR or MYS"
                      className={inputClass}
                    />
                    {errors.pickup && <span className="text-[11px] text-red-500 mt-1 block">{errors.pickup}</span>}
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#16213E]/60 mb-1.5">
                      Destination / Route *
                    </label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="e.g. Mysore, Coorg, Ooty, City Tour"
                      className={inputClass}
                    />
                    {errors.destination && <span className="text-[11px] text-red-500 mt-1 block">{errors.destination}</span>}
                  </div>

                  {/* Travel Date */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#16213E]/60 mb-1.5">
                      Travel Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    {errors.date && <span className="text-[11px] text-red-500 mt-1 block">{errors.date}</span>}
                  </div>

                  {/* Vehicle Type Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#16213E]/60 mb-1.5">
                      Vehicle Type *
                    </label>
                    <select
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      {SERVICES_FLEET.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message (Optional) */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#16213E]/60 mb-1.5">
                      Trip Details & Special Requirements (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Passenger count, timings, round trip details or special requests"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="btn-shimmer shadow-gold flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-bold text-[#16213E] transition-all hover:shadow-lg cursor-pointer"
                    >
                      <WhatsAppIcon className="h-4 w-4 text-[#16213E]" />
                      <span>Request Instant WhatsApp Quote</span>
                    </button>
                    <p className="mt-2.5 text-center text-[11px] text-[#16213E]/50">
                      Direct distance tariff calculated at transparent ₹35/KM rate with zero hidden vehicle charges.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
