import React, { useState } from 'react';
import { Search, Grid, Sparkles, Clock } from 'lucide-react';
import { LOOKBOOK_ITEMS } from '../data/salonData';

export default function Lookbook({ onSelectService }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCatalog = LOOKBOOK_ITEMS.filter((item) => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Style Catalog</h2>
            <p className="text-slate-500 text-sm">Explore real-time looks and pricing options.</p>
          </div>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search hair profiles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 rounded-xl pl-11 pr-4 py-2.5 text-sm transition-all text-slate-800 outline-none"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { id: 'all', label: 'All Catalogue' },
          { id: 'weave', label: 'Hair Installation' },
          { id: 'locs', label: 'Dreadlocks' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-5 py-2 rounded-xl font-medium text-sm transition-all ${
              activeFilter === tab.id
                ? 'bg-teal-500 text-white shadow-md'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {filteredCatalog.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCatalog.map((look) => (
            <div 
              key={look.id} 
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white font-bold text-xs px-2.5 py-1 rounded-lg">
                  R{look.price}
                </span>
              </div>
              
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors text-base">
                    {look.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Est: {look.duration}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(look.title)}
                  className="w-full py-2 bg-white text-slate-700 hover:bg-slate-900 hover:text-white border border-slate-200 font-semibold text-xs rounded-xl transition-all shadow-sm"
                >
                  Select This Style
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <Grid className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          <p className="text-slate-500 font-medium">No styles found matching that search.</p>
        </div>
      )}
    </section>
  );
}