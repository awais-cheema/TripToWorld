import React, { useState } from 'react';
import { ArrowRight, Clock, MapPin, Plane } from 'lucide-react';
import { HOLIDAY_PACKAGES } from '../data/travelData';
import { HolidayPackage } from '../types';

interface HolidayPackagesProps {
  onSelectPackage: (pkg: HolidayPackage) => void;
}

export const HolidayPackages: React.FC<HolidayPackagesProps> = ({ onSelectPackage }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedPackages = showAll ? HOLIDAY_PACKAGES : HOLIDAY_PACKAGES.slice(0, 6);

  return (
    <section 
      id="packages-section"
      className="py-20 md:py-28 bg-[#FAF8F5] text-[#1E293B] relative"
    >
      <div className="w-full px-[8vw]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200">
            <Plane className="w-3.5 h-3.5 text-amber-700" />
            <span>Curated Itineraries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B2B] font-['Playfair_Display',serif] tracking-tight">
            Popular Holiday Packages
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            Every itinerary is 100% customisable. Choose from hand-crafted multi-centre itineraries, secluded beach retreats, and cultural grand tours.
          </p>
        </div>

        {/* Holiday Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPackages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => onSelectPackage(pkg)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              id={`holiday-package-${pkg.id}`}
            >
              {/* Package Top Image & Badges */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Duration Badge on Top Right */}
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 text-slate-900 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{pkg.duration}</span>
                  </div>

                </div>

                {/* Package Card Details */}
                <div className="p-6 space-y-3">
                  
                  {/* Location Tag */}
                  <div className="flex items-center gap-1 text-xs font-semibold text-amber-700 uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{pkg.locationTag}</span>
                  </div>

                  {/* Package Title */}
                  <h3 className="text-xl font-bold font-['Playfair_Display',serif] text-[#0B1B2B] group-hover:text-amber-700 transition-colors leading-snug line-clamp-2">
                    {pkg.title}
                  </h3>

                  {/* Short Overview */}
                  <p className="text-xs sm:text-sm text-slate-600 font-light line-clamp-2 leading-relaxed">
                    {pkg.overview}
                  </p>

                </div>
              </div>

              {/* Package Card Bottom: Price & Arrow CTA */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-end justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-medium block">
                      Starting price
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-bold font-['Playfair_Display',serif] text-[#0B1B2B]">
                        from £{pkg.fromPrice.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/PP</span>
                      {pkg.oldPrice && (
                        <span className="text-xs text-slate-400 line-through ml-1">
                          £{pkg.oldPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Arrow CTA Button */}
                  <div className="w-10 h-10 rounded-xl bg-amber-100/80 group-hover:bg-amber-400 text-amber-900 group-hover:text-slate-950 flex items-center justify-center transition-all duration-300 shadow-sm">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Packages Button Section */}
        <div className="mt-14 text-center space-y-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 rounded-xl font-bold text-slate-900 bg-white hover:bg-slate-50 border-2 border-[#0B1B2B] shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-3 text-base"
            id="view-all-packages-button"
          >
            <span>{showAll ? 'Show Fewer Packages' : 'View All Holiday Packages'}</span>
            <ArrowRight className="w-4 h-4 text-amber-600" />
          </button>

        </div>

      </div>
    </section>
  );
};
