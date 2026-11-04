import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Fleet from './components/Fleet';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState('Urbania 12+1 Seater');

  const handleSelectVehicleForBooking = (vehicleTitle) => {
    setSelectedVehicle(vehicleTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#E2E8F0] selection:bg-[#D4AF37] selection:text-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Fleet onSelectVehicle={handleSelectVehicleForBooking} />
        <Features />
        <Pricing />
        <Gallery />
        <ContactForm selectedVehicle={selectedVehicle} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
