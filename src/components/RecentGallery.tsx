import React, { useState } from 'react';
import { MapPin, Tag, X, Maximize2, Compass, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/travelData';
import { GalleryItem } from '../types';

export const RecentGallery: React.FC = () => {
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  return (
    <section 
      id="gallery-section"
      className="py-20 md:py-28 bg-[#F3EFEA] text-[#1E293B] relative"
    >
      <div className="w-full px-[8vw]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B2B] font-['Playfair_Display',serif] tracking-tight">
              Recent Travel Gallery
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              Moments from our featured escapes, from island retreats and city adventures to safari landscapes.
            </p>
          </div>

        </div>

        {/* Masonry / Mixed-size Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {GALLERY_ITEMS.map((item, index) => {
            // Mixed span layout for authentic editorial feel
            const isSpanTall = item.aspect === 'tall' && index % 2 === 0;
            const isSpanWide = item.aspect === 'wide' && index % 3 === 0;

            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxItem(item)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200/80 ${
                  isSpanTall ? 'md:row-span-2' : ''
                } ${isSpanWide ? 'lg:col-span-2' : ''}`}
                id={`gallery-item-${item.id}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Top Right Zoom Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Information */}
                <div className="absolute bottom-4 left-4 right-4 text-white transform transition-transform duration-300">
                  <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}, {item.country}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-['Playfair_Display',serif] text-white line-clamp-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-1 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    "{item.caption}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-10 text-center flex items-center justify-center gap-2 text-xs text-slate-600">
          <Tag className="w-4 h-4 text-amber-600" />
          <span>Tag your journey with <strong className="text-slate-900 font-semibold">#TripToWorldTraveler</strong> to be featured on our global gallery</span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveLightboxItem(null)}
          id="gallery-lightbox-modal"
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0B1B2B] border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image */}
            <div className="md:w-3/5 bg-black flex items-center justify-center max-h-[70vh] overflow-hidden">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-contain max-h-[70vh]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Details */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-950 inline-block">
                  {activeLightboxItem.category}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-amber-300">
                  <MapPin className="w-4 h-4" />
                  <span>{activeLightboxItem.location}, {activeLightboxItem.country}</span>
                </div>

                <h3 className="text-2xl font-bold font-['Playfair_Display',serif] text-white">
                  {activeLightboxItem.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  "{activeLightboxItem.caption}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-400">
                <div>
                  <span className="text-slate-500">Shared by:</span>{' '}
                  <span className="text-white font-medium">{activeLightboxItem.photographer}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 font-medium">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Available on Trip to World Custom Routes</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
