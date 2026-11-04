import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export default function ContactForm({ selectedVehicle = '' }) {
  const [formData, setFormData] = useState({
    customerName: '',
    mobileNumber: '',
    travelDate: '',
    pickupLocation: '',
    destination: '',
    vehicleSelection: selectedVehicle || 'Urbania 12+1 Seater',
    additionalRequirements: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update vehicle if parent changes it
  React.useEffect(() => {
    if (selectedVehicle) {
      setFormData((prev) => ({ ...prev, vehicleSelection: selectedVehicle }));
    }
  }, [selectedVehicle]);

  const validate = () => {
    const errs = {};
    if (!formData.customerName.trim()) {
      errs.customerName = 'Please enter your name.';
    }
    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = 'Please enter your mobile number.';
    } else if (!/^[0-9]{10}$/.test(formData.mobileNumber.replace(/\D/g, ''))) {
      errs.mobileNumber = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.travelDate) {
      errs.travelDate = 'Please select a travel date.';
    }
    if (!formData.pickupLocation.trim()) {
      errs.pickupLocation = 'Please specify pickup location (Bangalore / Mysore / specific point).';
    }
    if (!formData.destination.trim()) {
      errs.destination = 'Please specify destination.';
    }
    if (!formData.vehicleSelection) {
      errs.vehicleSelection = 'Please select a vehicle configuration.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the WhatsApp formatted message
    const formattedMessage = `*New Booking Enquiry - SHINE HOLIDAYS*
━━━━━━━━━━━━━━━━━━━━
👤 *Customer Name:* ${formData.customerName}
📞 *Mobile Number:* ${formData.mobileNumber}
📅 *Travel Date:* ${formData.travelDate}
📍 *Pickup Location:* ${formData.pickupLocation}
🏁 *Destination:* ${formData.destination}
🚐 *Vehicle Selection:* ${formData.vehicleSelection}
💰 *Tariff Reference:* ₹35/KM
📝 *Additional Requirements:* ${formData.additionalRequirements || 'None specified'}
━━━━━━━━━━━━━━━━━━━━
Please share the booking confirmation & journey estimate.`;

    const waUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(formattedMessage)}`;

    setIsSubmitted(true);
    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#090A0C] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block mb-3">
            Reservations & Inquiries
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Plan Your Next <span className="gold-gradient-text font-serif-luxury italic font-normal">Journey With Us.</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light">
            Fill out the details below to receive an instant trip quote and reservation confirmation via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-[#121316] border border-white/10 shadow-xl space-y-6">
              <h3 className="font-cinzel text-2xl font-bold text-white tracking-wide">
                Direct Contact Information
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                Connect directly with our fleet dispatch desk for immediate Urbania availability, corporate long-term rentals, or customized outstation travel plans.
              </p>

              {/* Phone Contacts */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 block font-medium">Contact Numbers</span>
                  <div className="flex flex-col gap-1 mt-1">
                    <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="font-semibold text-white hover:text-[#D4AF37] transition-colors">
                      +91 {BUSINESS_INFO.phones[0]}
                    </a>
                    <a href={`tel:${BUSINESS_INFO.phones[1]}`} className="font-semibold text-white hover:text-[#D4AF37] transition-colors">
                      +91 {BUSINESS_INFO.phones[1]}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Contact */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 block font-medium">Official Email</span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="font-semibold text-white hover:text-[#D4AF37] transition-colors block mt-1 break-all"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Service Locations */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 block font-medium">Service Hubs</span>
                  <p className="font-semibold text-white mt-1">
                    Bangalore & Mysore
                  </p>
                  <span className="text-xs text-neutral-400 block mt-0.5">
                    Karnataka Outstation & Airport Transfers
                  </span>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <a
                href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-white font-semibold text-sm uppercase tracking-wider transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp Directly</span>
              </a>

            </div>

          </div>

          {/* Right Column: Booking Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#121316] border border-white/10 shadow-2xl relative">
              
              <h3 className="font-cinzel text-2xl font-bold text-white mb-2 tracking-wide">
                Booking Enquiry Form
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-8 font-light">
                All inquiries are processed directly through our reservation desk. Rate starts at ₹35/KM.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-center space-y-4 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                  <h4 className="font-cinzel text-xl font-bold text-white">
                    Enquiry Prepared Successfully!
                  </h4>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Your reservation details have been structured. WhatsApp has opened in a new tab to complete your booking with our desk.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37] hover:underline pt-2"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Customer Name & Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Customer Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-4 py-3.5 rounded-xl bg-black/50 border text-white placeholder-neutral-500 text-sm focus:outline-none transition-all ${
                          errors.customerName ? 'border-red-500 focus:border-red-500' : 'border-white/15 focus:border-[#D4AF37]'
                        }`}
                      />
                      {errors.customerName && (
                        <span className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.customerName}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Mobile Number <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="e.g. 9964712471"
                        maxLength="10"
                        className={`w-full px-4 py-3.5 rounded-xl bg-black/50 border text-white placeholder-neutral-500 text-sm focus:outline-none transition-all ${
                          errors.mobileNumber ? 'border-red-500 focus:border-red-500' : 'border-white/15 focus:border-[#D4AF37]'
                        }`}
                      />
                      {errors.mobileNumber && (
                        <span className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.mobileNumber}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Travel Date & Vehicle Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Travel Date <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl bg-black/50 border text-white text-sm focus:outline-none transition-all ${
                          errors.travelDate ? 'border-red-500 focus:border-red-500' : 'border-white/15 focus:border-[#D4AF37]'
                        }`}
                      />
                      {errors.travelDate && (
                        <span className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.travelDate}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Vehicle Selection <span className="text-[#D4AF37]">*</span>
                      </label>
                      <select
                        name="vehicleSelection"
                        value={formData.vehicleSelection}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                      >
                        <option value="Urbania 12+1 Seater">Urbania 12+1 Seater (₹35/KM)</option>
                        <option value="Urbania 16+1 Seater">Urbania 16+1 Seater (₹35/KM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Pickup Location & Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Pickup Location <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        placeholder="e.g. Bangalore Airport / Indiranagar"
                        className={`w-full px-4 py-3.5 rounded-xl bg-black/50 border text-white placeholder-neutral-500 text-sm focus:outline-none transition-all ${
                          errors.pickupLocation ? 'border-red-500 focus:border-red-500' : 'border-white/15 focus:border-[#D4AF37]'
                        }`}
                      />
                      {errors.pickupLocation && (
                        <span className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.pickupLocation}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Destination <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="e.g. Mysore Palace / Coorg / Ooty"
                        className={`w-full px-4 py-3.5 rounded-xl bg-black/50 border text-white placeholder-neutral-500 text-sm focus:outline-none transition-all ${
                          errors.destination ? 'border-red-500 focus:border-red-500' : 'border-white/15 focus:border-[#D4AF37]'
                        }`}
                      />
                      {errors.destination && (
                        <span className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.destination}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Additional Requirements (Optional)
                    </label>
                    <textarea
                      name="additionalRequirements"
                      rows="3"
                      value={formData.additionalRequirements}
                      onChange={handleChange}
                      placeholder="e.g. Flight arrival details, multi-day itinerary, or corporate billing requirements."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#D4AF37] transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#DFBF4F] to-[#C49E2D] text-black font-semibold text-sm uppercase tracking-wider shadow-xl shadow-[#D4AF37]/20 hover:brightness-110 hover:shadow-[#D4AF37]/35 transition-all flex items-center justify-center gap-2 cursor-pointer font-medium"
                  >
                    <MessageSquare className="w-4 h-4 fill-black/20" />
                    <span>Send Booking Enquiry on WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-neutral-400">
                    By submitting, your details will be transferred securely to SHINE HOLIDAYS WhatsApp desk for immediate rate quotes.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
