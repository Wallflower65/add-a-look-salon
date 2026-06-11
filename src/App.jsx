import React, { useState } from 'react';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Lookbook from './components/Lookbook'; 
import BookingPanel from './components/BookingPanel';
import FooterStats from './components/FooterStats';
import { SALON_SERVICES } from './data/salonData';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans selection:bg-neutral-900 selection:text-white">
      <Hero />

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        <Lookbook onSelectService={setSelectedService} />
        
        <section>
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 uppercase">Our Loc Menu & Rates</h2>
            <p className="text-neutral-500 text-sm">Select a specialized service option below to initialize booking.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SALON_SERVICES.map((category) => (
              <ServiceCard 
                key={category.id}
                category={category}
                selectedService={selectedService}
                onSelectService={setSelectedService}
              />
            ))}
          </div>
        </section>

        <BookingPanel selectedService={selectedService} />
      </main>

      <FooterStats />
    </div>
  );
}