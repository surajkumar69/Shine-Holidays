// SHINE HOLIDAYS Official Fleet & Content Data
// Strictly adhering to non-duplicate image rules and exact business parameters

export const BUSINESS_INFO = {
  name: "SHINE HOLIDAYS",
  tagline: "Premium Urbania Luxury AC Coach Rentals",
  phones: ["9964712471", "9964591813"],
  primaryPhone: "9964712471",
  email: "shineholidays77@gmail.com",
  locations: ["Bangalore", "Mysore"],
  vehicleCategory: "Force Urbania Luxury Premium AC Coach",
  ratePerKm: "₹35",
  ratePerKmNumber: 35,
  whatsappNumber: "919964712471",
  whatsappBaseUrl: "https://wa.me/919964712471",
  defaultWhatsappMessage: "Hello SHINE HOLIDAYS, I am interested in booking an Urbania luxury coach. Please share the booking details."
};

export const FLEET_VEHICLES = [
  {
    id: "urbania-12-seater",
    title: "Urbania 12+1 Seater",
    category: "Premium Luxury AC Coach",
    seating: "12+1",
    seatingDisplay: "12 Passengers + 1 Chauffeur",
    rate: "₹35/KM",
    rateDetails: "Transparent base rate across Bangalore & Mysore",
    badge: "Executive Class",
    description: "Designed for premium executive delegations, luxury family vacations, and VIP airport transfers. Experience unmatched ride comfort with individual diamond-quilted leather recliners, personal AC vents, and generous luggage capacity.",
    // Main photo: exactly ONE AI-generated photo matching original vehicle colour and body
    mainImage: {
      url: "/images/fleet/urbania-12/cover-ai-urbania-12.jpg",
      alt: "Force Urbania 12+1 Seater Luxury Coach in Metallic Dark Charcoal Grey outside luxury hotel in Bangalore",
      isAi: true
    },
    // Additional photos inside the card: ONLY original uploaded photos
    additionalImages: [
      {
        url: "/images/fleet/urbania-12/interior-leather-seats.jpg",
        title: "White Diamond-Quilted Recliners",
        caption: "Custom embroidered Shine Holidays headrests, warm wood trims, and individual armrest controls.",
        alt: "Shine Holidays Urbania 12+1 interior white diamond-quilted leather seats"
      },
      {
        url: "/images/fleet/urbania-12/exterior-front-view.jpg",
        title: "Bold Urbania Grille & Front Stance",
        caption: "Distinctive chrome grille, high-illumination LED headlights, and Shine Holidays branding.",
        alt: "Force Urbania front exterior view with chrome grille and headlights"
      }
    ],
    features: [
      "12+1 Individual Reclining Captain Seats",
      "Diamond-Quilted White Leatherette Upholstery",
      "High-Performance Climate-Controlled AC",
      "Individual Reading Lights & Charging Ports",
      "Panoramic UV-Cut Tinted Privacy Windows",
      "Spacious Dedicated Luggage Boot"
    ]
  },
  {
    id: "urbania-16-seater",
    title: "Urbania 16+1 Seater",
    category: "Premium Luxury AC Coach",
    seating: "16+1",
    seatingDisplay: "16 Passengers + 1 Chauffeur",
    rate: "₹35/KM",
    rateDetails: "Transparent base rate across Bangalore & Mysore",
    badge: "Chauffeur Executive",
    description: "The ultimate long-wheelbase luxury group transporter. Offering expansive passenger legroom, central ambient illuminated aisle, overhead luggage racks, and smart digital ceiling entertainment for effortless long-distance travel.",
    // Main photo: exactly ONE AI-generated photo matching original vehicle colour and body
    mainImage: {
      url: "/images/fleet/urbania-16/cover-ai-urbania-16.jpg",
      alt: "Force Urbania 16+1 Seater Extended Wheelbase Luxury Coach on scenic highway overlook at sunset",
      isAi: true
    },
    // Additional photos inside the card: ONLY original uploaded photos
    additionalImages: [
      {
        url: "/images/fleet/urbania-16/interior-executive-aisle.jpg",
        title: "Full Executive Cabin Aisle View",
        caption: "16-passenger ergonomic diamond leather recliners with ambient roof lighting and smooth aisle access.",
        alt: "Shine Holidays 16+1 Urbania cabin aisle with luxury seating"
      },
      {
        url: "/images/fleet/urbania-16/interior-smart-cockpit.jpg",
        title: "Cockpit & Smart Ceiling TV System",
        caption: "Ceiling-mounted Smart TV screen, touchscreen GPS console, and woodgrain cockpit dashboard.",
        alt: "Force Urbania cockpit dashboard and ceiling-mounted Smart TV"
      }
    ],
    features: [
      "16+1 Ergonomic Executive Seating Layout",
      "Wide Central Walk-through Aisle",
      "Ceiling-Mounted Smart Entertainment Screen",
      "Dual Air Conditioning System with Roof Ducts",
      "Rich Wooden Floorboards & Accent Lighting",
      "Extensive Extended Wheelbase Luggage Space"
    ]
  }
];

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

export const WHY_CHOOSE_ITEMS = [
  {
    title: "Luxury Premium AC Coaches",
    description: "Every Force Urbania in our fleet features factory-calibrated climate control with multi-zone roof cooling ducts."
  },
  {
    title: "Comfortable Seating",
    description: "Ergonomically engineered diamond-stitched leather recliners with adjustable armrests and ample legroom."
  },
  {
    title: "Two Seating Configurations",
    description: "Choose between our versatile Urbania 12+1 Seater or our extended-wheelbase Urbania 16+1 Seater."
  },
  {
    title: "Bangalore & Mysore Service",
    description: "Operating seamlessly across Karnataka with hubs in Bangalore and Mysore for city tours, outstation trips, and airport transfers."
  },
  {
    title: "Premium Travel Experience",
    description: "From pristine interiors to courteous, experienced chauffeurs, your journey feels like a first-class travel lounge."
  },
  {
    title: "Transparent Starting Rate",
    description: "Clear and straightforward pricing starting from ₹35/KM with zero hidden vehicle charges."
  }
];
