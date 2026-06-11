import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function BookingPanel({ selectedService }) {
  const businessPhone = '27810966434'; 
  const whatsappBaseUrl = `https://wa.me/${businessPhone}`;
  
  const textMessage = encodeURIComponent(
    `Hello ADD-A-LOOK, I would love to book an appointment for "${selectedService || 'a loc session'}"! Could you please let me know your next available opening?`
  );
  const checkoutUrl = `${whatsappBaseUrl}?text=${textMessage}`;

  return (
    <section className="bg-neutral-950 text-white rounded-2xl p-8 md:p-12 border border-neutral-900 relative overflow-hidden text-center max-w-xl mx-auto shadow-2xl">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-black uppercase tracking-wider">Secure Appointment</h2>
          <p className="text-neutral-500 text-xs tracking-wide uppercase">Your selection will open instantly inside our business messaging terminal.</p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-2">
          <h4 className="text-neutral-500 text-[10px] font-bold tracking-widest uppercase">Selected Menu Item</h4>
          <p className="text-base font-bold tracking-wide uppercase text-white">
            {selectedService ? selectedService : 'No style chosen yet'}
          </p>
        </div>

        <div>
          <a
            href={selectedService ? checkoutUrl : '#'}
            target={selectedService ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`w-full flex items-center justify-center gap-3 py-3.5 font-bold text-xs tracking-widest uppercase rounded transition-all transform active:scale-[0.99] ${
              selectedService 
                ? 'bg-white hover:bg-neutral-200 text-neutral-950 shadow-lg' 
                : 'bg-neutral-900 text-neutral-600 cursor-not-allowed border border-neutral-800'
            }`}
          >
            <MessageCircle className="w-4 h-4" />
            {selectedService ? 'Confirm via WhatsApp' : 'Select a Style to Unlock'}
          </a>
        </div>
      </div>
    </section>
  );
}