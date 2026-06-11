import React from 'react';
import { ShieldCheck, Award, Sparkles, Code2, ArrowUpRight } from 'lucide-react';

export default function FooterStats() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs py-16 px-4 mt-20 border-t border-neutral-900 font-sans tracking-wide">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Sleek Minimalist Core Pillars */}
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

        {/* Studio Info & Developer Advertising Area */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2 text-[11px] uppercase tracking-widest text-neutral-500">
          <div>
            © {new Date().getFullYear()} ADD-A-LOOK DREADLOCK PARLOUR. ALL RIGHTS RESERVED.
          </div>
          
          {/* Professional Developer Self-Promotion Link */}
          <div className="flex items-center gap-1.5 bg-neutral-900/60 border border-neutral-800/60 px-3 py-1.5 rounded-lg text-neutral-400 hover:text-white transition-colors group">
            <Code2 className="w-3.5 h-3.5" />
            <span>Designed & Built by</span>
            <a 
              href="https://phaphamaniportfolio.netlify.app/" // Links to your live tech profile
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