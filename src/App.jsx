import React, { useState } from 'react';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Lookbook from './components/Lookbook'; // New lookbook import
import BookingPanel from './components/BookingPanel';
import FooterStats from './components/FooterStats';
import { SALON_SERVICES } from './data/salonData';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedStylist, setSelectedStylist] = useState('Siba');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-teal-200">
      <Hero />

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        
        {/* Lookbook Visual Catalog Component */}
        <Lookbook onSelectService={setSelectedService} />
        
        {/* Services Showcase Grid */}
        <section>
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Full Price List</h2>
            <p className="text-slate-500">Or pick directly from our catalog items below.</p>
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

        {/* Core Booking Interactivity */}
        <BookingPanel 
          selectedService={selectedService}
          selectedStylist={selectedStylist}
          onSelectStylist={setSelectedStylist}
        />
        
      </main>

      <FooterStats />
    </div>
  );
}