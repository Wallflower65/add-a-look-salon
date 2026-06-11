import React from 'react';

export default function Hero() {
  return (
    <header className="relative bg-neutral-950 text-white py-24 px-4 overflow-hidden border-b border-neutral-900">
      {/* Subtle background luxury ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Centered Business Badge Overlay */}
        <div className="mx-auto w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 flex items-center justify-center">
          <img 
            src="/logo.jpeg" 
            alt="ADD-A-LOOK Dreadlock Parlour" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white font-sans uppercase">
            ADD-A-LOOK
          </h1>
          <div className="w-12 h-0.5 bg-white mx-auto my-2" />
          <p className="text-sm md:text-base text-neutral-400 max-w-md mx-auto uppercase tracking-widest font-light">
            Dreadlock Parlour
          </p>
        </div>

        <div className="text-xs text-neutral-500 font-mono tracking-widest uppercase pt-4 border-t border-neutral-900 max-w-xs mx-auto">
          R476 Dyalvani Street • Site B • Khayelitsha
        </div>
      </div>
    </header>
  );
}