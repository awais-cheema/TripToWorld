import React from 'react';
import { ArrowRight, Plane } from 'lucide-react';
import { FEATURED_DESTINATIONS } from '../data/travelData';
import { DestinationItem } from '../types';

interface FeaturedDestinationsProps {
  onSelectDestination: (destination: DestinationItem) => void;
}

export const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({ onSelectDestination }) => {
  return (
    <section 
      id="destinations-section"
      className="py-20 md:py-28 bg-[#FAF8F5] text-[#1E293B] relative"
    >
      <div className="w-full px-[8vw]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200">
            <Plane className="w-3.5 h-3.5 text-amber-700" />
            <span>Top Destinations</span>
          </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B2B] font-['Playfair_Display',serif] tracking-tight">
              Featured Destinations
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              From sun-drenched Mediterranean cliffs to mystical temple sanctuaries and African plains, explore our highest-rated world regions.
            </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col"
              id={`destination-card-${dest.id}`}
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold drop-shadow-sm">
                    {dest.region}
                  </span>
                  <h3 className="text-2xl font-bold font-['Playfair_Display',serif] text-white group-hover:text-amber-300 transition-colors">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5">
                {/* Card Footer: Arrow Link CTA */}
                <div className="flex items-center justify-between">
                  {/* Arrow CTA Link */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B1B2B] group-hover:text-amber-600 transition-colors">
                    <span>View Destination</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
