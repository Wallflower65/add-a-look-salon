import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { STYLISTS } from '../data/salonData';

export default function BookingPanel({ selectedService, selectedStylist, onSelectStylist }) {
  
  const handleBookingSubmit = () => {
    if (!selectedService) return;
    
    const stylistInfo = STYLISTS[selectedStylist];
    const messageText = `Hi ${stylistInfo.name}, I'd like to book an appointment for "${selectedService}" at ADD-A-LOOK Salon. Please let me know your next available slots!`;
    const whatsappUrl = `https://wa.me/${stylistInfo.phone}?text=${encodeURIComponent(messageText)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
        <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
          <Calendar className="w-5 h-5" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Instant Booking Pipeline</h3>
      </div>

      <div className="space-y-8">
        {/* Selection Readout */}
        <div className="p-4 bg-slate-50 rounded-xl flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Selected Service</p>
            <p className="text-lg font-bold text-slate-800">
              {selectedService ? selectedService : "❌ None chosen yet"}
            </p>
          </div>
          {!selectedService && (
            <p className="text-sm text-amber-600 font-medium animate-pulse">Tap a service above to activate booking</p>
          )}
        </div>

        {/* Stylist Toggle Picker */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-600 uppercase tracking-wider">Choose Your Stylist</label>
          <div className="grid grid-cols-2 gap-4">
            {Object.keys(STYLISTS).map((key) => {
              const currentStylist = STYLISTS[key];
              const isSelected = selectedStylist === currentStylist.name;
              
              return (
                <button
                  key={currentStylist.name}
                  type="button"
                  onClick={() => onSelectStylist(currentStylist.name)}
                  className={`p-4 rounded-xl font-bold border transition-all text-center ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {currentStylist.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* WhatsApp Launch Action Button */}
        <button
          onClick={handleBookingSubmit}
          disabled={!selectedService}
          className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
            selectedService 
              ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-200 hover:shadow-xl transform hover:-translate-y-0.5' 
              : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
          }`}
        >
          <Phone className="w-5 h-5 fill-current" />
          Book via WhatsApp with {selectedStylist}
        </button>
      </div>
    </section>
  );
}