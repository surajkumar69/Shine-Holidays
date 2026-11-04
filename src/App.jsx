import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Specialities from './components/Specialities';
import ShowcaseStrip from './components/ShowcaseStrip';
import WhyUs from './components/WhyUs';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState('Force Urbania 12+1 Luxury Coach');

  const handleSelectVehicleForBooking = (vehicleTitle) => {
    setSelectedVehicle(vehicleTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#16213E] selection:bg-[#D4AF37] selection:text-[#16213E]">
      <Header />
      <main>
        <Hero />
        <Services onSelectVehicleForBooking={handleSelectVehicleForBooking} />
        <Specialities />
        <ShowcaseStrip />
        <WhyUs />
        <Packages />
        <Gallery />
        <Testimonials />
        <CtaBanner />
        <ContactForm initialVehicle={selectedVehicle} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
