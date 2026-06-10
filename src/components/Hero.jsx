import React from 'react';
import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative bg-gradient-to-tr from-teal-500 via-cyan-400 to-amber-200 text-white py-24 px-6 text-center shadow-md">
      <div className="max-w-4xl mx-auto space-y-4">
        <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase">
          Your Look • Your Style • Our Passion
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight drop-shadow-sm">
          ADD-A-LOOK
        </h1>
        <p className="text-xl md:text-2xl font-medium opacity-90 max-w-xl mx-auto">
          Premium Hair Installation & Dreadlocks Parlour
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm font-medium">
          <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <MapPin className="w-4 h-4 text-amber-200" /> R476 Dyalvani Street, Site B, Khayelitsha
          </span>
        </div>
      </div>
    </header>
  );
}