// SHINE HOLIDAYS Official Data & Content Configuration
// Structured following the Happy Luxe Travels design system
// Strictly enforcing authentic business info, ₹35/KM rate, and zero duplicate photos

export const BUSINESS_INFO = {
  name: "SHINE HOLIDAYS",
  shortName: "SH",
  tagline: "365 Days 365 Ways...!",
  phones: [
    { display: "+91 99647 12471", tel: "9964712471" },
    { display: "+91 99645 91813", tel: "9964591813" }
  ],
  primaryPhone: "9964712471",
  secondaryPhone: "9964591813",
  email: "shineholidays77@gmail.com",
  website: "www.shineholidays.in",
  locations: ["Bangalore", "Mysore"],
  serviceLocationsDisplay: "Bangalore & Mysore, Karnataka",
  vehicleCategory: "Force Urbania Luxury Premium AC Coach",
  ratePerKm: "₹35",
  ratePerKmNumber: 35,
  whatsappNumber: "919964712471",
  whatsappBaseUrl: "https://wa.me/919964712471",
  defaultWhatsappMessage: "Hello SHINE HOLIDAYS, I would like to book a luxury Force Urbania coach. Please share availability and details.",
  hours: "Available 24 / 7"
};

// Nav links matching Happy Luxe Travels
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Specialities", href: "#specialities" },
  { label: "Why Us", href: "#why" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" }
];

// Stats Module (Hero section)
export const HERO_STATS = [
  { value: "35", prefix: "₹", suffix: "/KM", label: "Flat Transparent Tariff" },
  { value: "12+1", suffix: " & 16+1", label: "Urbania Seating Options" },
  { value: "100", suffix: "%", label: "Multi-Duct Climate AC" },
  { value: "24", suffix: "/7", label: "Dispatch Desk Support" }
];

// Trust badges
export const TRUST_BADGES = [
  "100% Genuine Force Urbania Fleet",
  "Professional Verified Chauffeurs",
  "Deep Cleaned & Sanitized",
  "Bangalore & Mysore Dedicated Hubs"
];

// Services / Fleet Cards
export const SERVICES_FLEET = [
  {
    id: "urbania-12",
    icon: "BusFront",
    title: "Force Urbania 12+1 Luxury Coach",
    description: "Force Urbania 12+1 AC luxury coach with individual diamond-quilted leather recliners, personal AC vents, ambient starlight lighting, and generous boot space.",
    tags: ["12+1 Seater", "Plush Recliners", "₹35 / KM", "Bangalore & Mysore"],
    rate: "₹35 / KM",
    // Main photo: AI-generated visual matching vehicle color
    coverImage: "/images/fleet/urbania-12/cover-ai-urbania-12.jpg",
    // Additional authentic uploaded photos
    images: [
      "/images/fleet/urbania-12/cover-ai-urbania-12.jpg",
      "/images/fleet/urbania-12/interior-leather-seats.jpg",
      "/images/fleet/urbania-12/exterior-front-view.jpg"
    ],
    features: [
      "12 Passengers + 1 Chauffeur",
      "Diamond Leather Recliners",
      "Multi-Zone Roof AC Ducts",
      "USB Ports at Every Seat"
    ]
  },
  {
    id: "urbania-16",
    icon: "BusFront",
    title: "Force Urbania 16+1 Luxury Coach",
    description: "Spacious 16+1 Force Urbania luxury coach designed for corporate delegations, family vacationers, and group tours with wide central walk-through aisle.",
    tags: ["16+1 Seater", "Executive Aisle", "₹35 / KM", "Bangalore & Mysore"],
    rate: "₹35 / KM",
    // Main photo: AI-generated visual matching vehicle color
    coverImage: "/images/fleet/urbania-16/cover-ai-urbania-16.jpg",
    // Additional authentic uploaded photos
    images: [
      "/images/fleet/urbania-16/cover-ai-urbania-16.jpg",
      "/images/fleet/urbania-16/interior-executive-aisle.jpg",
      "/images/fleet/urbania-16/interior-smart-cockpit.jpg"
    ],
    features: [
      "16 Passengers + 1 Chauffeur",
      "Central Walk-Through Aisle",
      "Smart Entertainment Display",
      "Generous Luggage Capacity"
    ]
  },
  {
    id: "tempo",
    icon: "UsersRound",
    title: "Tempo Traveller",
    description: "Premium luxury Tempo Traveller for comfortable group journeys equipped with plush reclining seats, ambient cabin lighting, high-roof walk-in comfort, and individual AC vents.",
    tags: ["Tempo Traveller", "Plush Group Travel", "₹35 / KM", "Bangalore & Mysore"],
    rate: "₹35 / KM",
    coverImage: "/images/fleet/tempo/cover-ai-tempo.jpg",
    images: [
      "/images/fleet/tempo/cover-ai-tempo.jpg"
    ],
    features: [
      "Plush Reclining Seats",
      "High-Roof Walk-In Comfort",
      "Chilled Dual AC System",
      "Generous Luggage Space"
    ]
  }
];

// Specialities / Occasions (uk in HLT)
export const SPECIALITIES = [
  {
    icon: "UsersRound",
    title: "Group Travel",
    text: "Effortless transport and spacious reclining comfort for delegations and large groups of any size."
  },
  {
    icon: "Briefcase",
    title: "Corporate Travel",
    text: "Executive-grade reliability, punctual schedules and discreet professionalism for business teams and VIP guests."
  },
  {
    icon: "Landmark",
    title: "Heritage & Pilgrimage",
    text: "Comfortable, serene journeys across Mysore Palace, Chamundi Hills, Srirangapatna and South Indian temples."
  },
  {
    icon: "Map",
    title: "Curated Holiday Circuits",
    text: "Bespoke multi-day itineraries covering Bangalore, Mysore, Coorg, Ooty and Kabini handled end-to-end."
  },
  {
    icon: "Heart",
    title: "Wedding & Family Events",
    text: "Graceful, coordinated guest transportation with spotless interiors and royal welcome standards."
  },
  {
    icon: "Sparkles",
    title: "VIP Executive Transit",
    text: "Punctual arrivals and departures with professional chauffeur service across Bangalore and Mysore."
  }
];

// Why Choose Us / The SHINE HOLIDAYS Promise (ck in HLT)
export const WHY_CHOOSE_ITEMS = [
  {
    icon: "HeartHandshake",
    title: "Customer First Approach",
    text: "Your comfort, safety and travel satisfaction guide every operational decision we make."
  },
  {
    icon: "Crown",
    title: "Premium Force Urbania Fleet",
    text: "A meticulously maintained fleet of authentic Force Urbania AC coaches with diamond recliners."
  },
  {
    icon: "BadgeCheck",
    title: "Professional Chauffeurs",
    text: "Courteous, verified, uniformed chauffeurs well-versed with Bangalore-Mysore highway and local routes."
  },
  {
    icon: "Sparkles",
    title: "Deep Cleaned & Sanitized",
    text: "Every coach undergoes meticulous interior deep-cleaning and AC duct sanitization before every trip."
  },
  {
    icon: "ReceiptText",
    title: "Transparent ₹35/KM Tariff",
    text: "Clear, distance-based billing at ₹35/KM with zero hidden vehicle charges or misleading claims."
  },
  {
    icon: "ShieldCheck",
    title: "Reliable 24/7 Dispatch",
    text: "On-time arrival, every time — 24/7 dedicated telephone and WhatsApp reservation support."
  }
];

// Popular Packages (dk in HLT)
export const POPULAR_PACKAGES = [
  {
    icon: "Briefcase",
    title: "Corporate Transit",
    text: "Executive Force Urbania transport for boardroom delegations, summits and site visits."
  },
  {
    icon: "Users",
    title: "Family Vacations",
    text: "Spacious, joyful group journeys to Mysore, Coorg and hills with plush reclining comfort."
  },
  {
    icon: "Landmark",
    title: "Mysore Heritage Tour",
    text: "Full-day royal tour covering Mysore Palace, Chamundi Hills, Brindavan Gardens and Srirangapatna."
  },
  {
    icon: "Heart",
    title: "Wedding Delegations",
    text: "Coordinated luxury coach travel ensuring wedding guests arrive refreshed, relaxed and in style."
  },
  {
    icon: "Sparkles",
    title: "Executive Group Delegations",
    text: "Coordinated Force Urbania transit for business teams, summits and VIP guests."
  },
  {
    icon: "Mountain",
    title: "Coorg & Ooty Escapes",
    text: "Scenic hill station getaways featuring smooth suspension and panoramic tinted windows."
  },
  {
    icon: "Sparkles",
    title: "Custom Travel Plans",
    text: "Tailored multi-day itineraries designed completely around your preferred timings and destinations."
  }
];

// Four Steps Booking Process (fk in HLT)
export const FOUR_STEPS = [
  {
    step: "01",
    icon: "CarFront",
    title: "Choose Vehicle",
    text: "Select the Urbania 12+1, 16+1 or luxury coach that fits your journey."
  },
  {
    step: "02",
    icon: "PhoneCall",
    title: "Contact Us",
    text: "Reach our dispatch desk on Call or WhatsApp for instant confirmation."
  },
  {
    step: "03",
    icon: "CalendarCheck",
    title: "Confirm Booking",
    text: "Lock in your travel date, pickup location and transparent ₹35/KM fare."
  },
  {
    step: "04",
    icon: "PartyPopper",
    title: "Enjoy Your Journey",
    text: "Sit back and experience luxury travel with our courteous professional chauffeur."
  }
];

// Gallery: Exactly 4 unique original uploaded photos
export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    url: "/images/gallery/ambient-night-starlight.jpg",
    title: "Night Starlight Lounge & Ambient LED Lighting",
    category: "Interior Ambiance",
    alt: "Urbania interior with blue ambient LED illumination and star ceiling"
  },
  {
    id: "gal-2",
    url: "/images/gallery/rear-profile-shine-holidays.jpg",
    title: "Official Rear Stance & Luggage Ladder",
    category: "Exterior Profile",
    alt: "Rear view of Shine Holidays Urbania coach with chrome ladder and branding"
  },
  {
    id: "gal-3",
    url: "/images/gallery/exterior-side-profile.jpg",
    title: "Metallic Charcoal Grey Coachline",
    category: "Automotive Stance",
    alt: "Side profile of Force Urbania in metallic dark charcoal grey"
  },
  {
    id: "gal-4",
    url: "/images/gallery/airport-t2-transfer.jpg",
    title: "Bangalore Airport Terminal 2 Transfers",
    category: "Airport Executive",
    alt: "White Urbania coach parked at Kempegowda International Airport Terminal 2"
  }
];

// Guest Testimonials
export const TESTIMONIALS = [
  {
    name: "Dr. Arvind Ramesh",
    role: "Family Vacation, Bangalore to Mysore",
    rating: 5,
    text: "We booked the Urbania 12+1 for our family trip from Bangalore to Mysore. The vehicle was spotlessly clean, the diamond leather seats were amazingly comfortable, and the chauffeur was exceptionally polite. Transparent ₹35/KM billing made it completely stress-free."
  },
  {
    name: "Vikramaditya Rao",
    role: "VP Corporate Relations, Tech Delegation",
    rating: 5,
    text: "Shine Holidays handled our international tech delegation travel with the 16+1 Force Urbania. Punctual airport pickup at Kempegowda T2, superb air conditioning, and seamless luggage space. Truly high-end executive transit."
  },
  {
    name: "Sunita & Rajesh Hegde",
    role: "Wedding Delegation, Palace Grounds",
    rating: 5,
    text: "Coordinating guest transport for our daughter's wedding in Bangalore was effortless thanks to Shine Holidays. The Urbania coach looked regal, comfortable, and every guest praised the smooth ride."
  }
];
