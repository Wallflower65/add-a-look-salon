import React from 'react';
import { Check } from 'lucide-react';

export default function ServiceCard({ category, selectedService, onSelectService }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm space-y-6">
      <div className="border-b border-neutral-100 pb-4">
        <h3 className="text-lg font-black text-neutral-900 uppercase tracking-wider">{category.title}</h3>
      </div>

      <ul className="space-y-3">
        {category.items.map((item) => {
          const isSelected = selectedService === item.name;
          
          return (
            <li 
              key={item.name}
              onClick={() => onSelectService(item.name)}
              className={`flex flex-col p-4 rounded-xl border cursor-pointer transition-all ${
                isSelected 
                  ? 'bg-neutral-950 border-neutral-950 text-white font-medium shadow-sm' 
                  : 'bg-neutral-50 border-neutral-50 hover:border-neutral-200 text-neutral-800'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    isSelected ? 'border-white bg-white text-neutral-950' : 'border-neutral-300'
                  }`}>
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <p className="font-bold text-xs tracking-wide uppercase md:text-sm">{item.name}</p>
                    <p className="text-[10px] tracking-wider font-mono text-neutral-400">
                      {item.duration}
                    </p>
                  </div>
                </span>
                <span className={`font-mono font-bold text-sm ${isSelected ? 'text-white' : 'text-neutral-900'}`}>
                  R{item.price}
                </span>
              </div>

              {/* Seamless descriptive text layout block */}
              {item.description && (
                <div className={`mt-3 pt-3 border-t text-xs leading-relaxed transition-all ${
                  isSelected ? 'border-neutral-800 text-neutral-300' : 'border-neutral-200/60 text-neutral-500'
                }`}>
                  {item.description}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}