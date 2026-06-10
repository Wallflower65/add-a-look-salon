import React from 'react';
import { CheckCircle, Scissors, Clock } from 'lucide-react';

export default function ServiceCard({ category, selectedService, onSelectService }) {
  const isLocs = category.type === 'locs';
  const Icon = isLocs ? Clock : Scissors;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-xl ${isLocs ? 'bg-cyan-50 text-cyan-600' : 'bg-teal-50 text-teal-600'}`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
      </div>

      <ul className="space-y-4">
        {category.items.map((item) => {
          const isCurrentSelection = selectedService === item.name;
          
          return (
            <li 
              key={item.name}
              onClick={() => onSelectService(item.name)}
              className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                isCurrentSelection 
                  ? isLocs
                    ? 'bg-cyan-50 border-cyan-400 text-cyan-900 font-medium ring-2 ring-cyan-400/20'
                    : 'bg-teal-50 border-teal-400 text-teal-900 font-medium ring-2 ring-teal-400/20' 
                  : 'bg-slate-50 border-slate-100 hover:border-slate-300 text-slate-700'
              }`}
            >
              <span className="flex items-center gap-3">
                <CheckCircle className={`w-5 h-5 ${isCurrentSelection ? (isLocs ? 'text-cyan-500' : 'text-teal-500') : 'text-slate-300'}`} />
                <div>
                  <p className="font-medium text-sm md:text-base">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.duration}</p>
                </div>
              </span>
              <span className="font-bold text-teal-600 text-base">
                R{item.price}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}