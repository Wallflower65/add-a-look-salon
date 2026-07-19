import React from 'react';
import { ShieldCheck, Award, Sparkles, Code2, ArrowUpRight, MapPin, Clock, Facebook } from 'lucide-react';

export default function FooterStats() {
  const salonLocation = "Add-A-Look Salon, Cape Town, South Africa";
  
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.3914849642597!2d18.6654228!3d-33.9953288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc459e74fb9b6b%3A0x643dc52c93046f8c!2sAdd%20A%20Look%20Dreadlocks1!5e0!3m2!1sen!2sza!4v1718210000000!5m2!1sen!2sza";

  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs py-16 px-4 mt-20 border-t border-neutral-900 font-sans tracking-wide">
      <div className="max-w-5xl mx-auto space-y-12">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left border-b border-neutral-900 pb-12">
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold uppercase tracking-wider text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
              Specialist Styling
            </div>
            <p className="text-neutral-500 font-light">Expert natural dreadlock techniques.</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold uppercase tracking-wider text-[11px]">
              <Award className="w-3.5 h-3.5 text-neutral-400" />
              Premium Care
            </div>
            <p className="text-neutral-500 font-light">Healthy crown cultivation standards.</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold uppercase tracking-wider text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
              Hygienic Studio
            </div>
            <p className="text-neutral-500 font-light">Maintained sterile tool environments.</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold uppercase tracking-wider text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
              Guaranteed Finish
            </div>
            <p className="text-neutral-500 font-light">Precision parting and clean locking.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-neutral-900 pb-12 items-center">

          <div className="space-y-6 text-center md:text-left">
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider text-[13px] mb-2">Visit the Parlour</h3>
              <p className="text-neutral-500 font-light max-w-sm leading-relaxed">
                Ready for a fresh crown transformation? Find our location coordinates on the map or drop by on your scheduled session.
              </p>
            </div>

            <div className="space-y-3 font-light text-neutral-400 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/nJ47RNfB7zzSwcKj8?g_st=awb" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white underline decoration-neutral-800 transition-colors"
                >
                  {salonLocation}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                <span>Mon - Sun: Open Daily (Based on Appointment)</span>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-3">Follow the Journey</h4>
              <div className="flex justify-center md:justify-start gap-3">
                <a 
                  href="https://www.facebook.com/share/1ESHauAA18/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white px-3 py-2 rounded-lg transition-all"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://www.tiktok.com/@addalookdreadlocks1?_r=1&_t=ZS-98AgshZLYmu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white px-3 py-2 rounded-lg transition-all"
                >
                  <span className="font-mono text-[10px] font-bold tracking-tighter">🎵</span>
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-56 rounded-xl overflow-hidden border border-neutral-900 shadow-xl relative bg-neutral-900/40">
            <iframe
              title="Add-A-Look Dreadlock Parlour Pinpoint"
              src={mapEmbedUrl}
              className="absolute top-0 left-0 w-full h-full border-0 grayscale opacity-80 invert contrast-125 transition-all hover:grayscale-0 hover:opacity-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2 text-[11px] uppercase tracking-widest text-neutral-500">
          <div>
            © {new Date().getFullYear()} ADD-A-LOOK DREADLOCK PARLOUR. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center gap-1.5 bg-neutral-900/60 border border-neutral-800/60 px-3 py-1.5 rounded-lg text-neutral-400 hover:text-white transition-colors group">
            <Code2 className="w-3.5 h-3.5" />
            <span>Designed & Built by</span>
            <a 
              href="https://phaphamaniportfolio.netlify.app/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-white border-b border-transparent hover:border-white flex items-center gap-0.5 transition-all"
            >
              Phaphamani
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
