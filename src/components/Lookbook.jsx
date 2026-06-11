import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { LOOKBOOK_ITEMS } from '../data/salonData';

export default function Lookbook({ onSelectService }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [imageIndices, setImageIndices] = useState({});

  const handleNextImage = (itemId, maxImages, e) => {
    e.stopPropagation(); 
    setImageIndices(prev => ({
      ...prev,
      [itemId]: ((prev[itemId] || 0) + 1) % maxImages
    }));
  };

  const handlePrevImage = (itemId, maxImages, e) => {
    e.stopPropagation();
    setImageIndices(prev => ({
      ...prev,
      [itemId]: ((prev[itemId] || 0) - 1 + maxImages) % maxImages
    }));
  };

  const filteredCatalog = LOOKBOOK_ITEMS.filter((item) => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="bg-white border border-neutral-100 rounded-2xl p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 uppercase">Style Catalog</h2>
          <p className="text-neutral-400 text-xs tracking-wider uppercase mt-1">Explore real looks and clear session options.</p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search catalog profiles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-neutral-50 border border-neutral-200 focus:border-neutral-900 rounded-xl pl-10 pr-4 py-2.5 text-xs tracking-wide transition-all text-neutral-800 outline-none"
          />
        </div>
      </div>

      {filteredCatalog.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCatalog.map((look) => {
            const currentImgIndex = imageIndices[look.id] || 0;
            const hasMultipleImages = look.images.length > 1;

            return (
              <div 
                key={look.id} 
                className="group bg-neutral-50 rounded-xl overflow-hidden border border-neutral-100 flex flex-col justify-between hover:shadow-sm transition-all"
              >
                <div className="relative aspect-square overflow-hidden bg-neutral-200">
                  <img
                    src={look.images[currentImgIndex]}
                    alt={look.title}
                    className="w-full h-full object-cover object-center transition-all duration-300"
                  />
                  
                  {hasMultipleImages && (
                    <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded flex items-center gap-1">
                      <Layers className="w-3 h-3" /> Browse Lookbook
                    </span>
                  )}

                  <span className="absolute top-3 right-3 bg-neutral-950 text-white font-mono font-bold text-xs px-2.5 py-1 rounded">
                    R{look.price}
                  </span>

                  {hasMultipleImages && (
                    <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => handlePrevImage(look.id, look.images.length, e)}
                        className="p-1.5 rounded-full bg-white/90 text-neutral-900 shadow hover:bg-white transition-all"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => handleNextImage(look.id, look.images.length, e)}
                        className="p-1.5 rounded-full bg-white/90 text-neutral-900 shadow hover:bg-white transition-all"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm tracking-wide uppercase">
                      {look.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5 tracking-wider font-mono">
                      Est. Duration: {look.duration}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectService(look.title)}
                    className="w-full py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-[11px] tracking-widest uppercase rounded transition-all"
                  >
                    Select Style
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 text-neutral-400 text-xs uppercase tracking-widest">
          No services match your search criteria.
        </div>
      )}
    </section>
  );
}