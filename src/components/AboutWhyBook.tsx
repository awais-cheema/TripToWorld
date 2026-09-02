import React from 'react';
import { ArrowRight, CheckCircle2, Compass } from 'lucide-react';

interface AboutWhyBookProps {
  onOpenLearnMore: () => void;
}

export const AboutWhyBook: React.FC<AboutWhyBookProps> = ({ onOpenLearnMore }) => {
  return (
    <section 
      id="about-section"
      className="py-20 md:py-28 bg-[#F3EFEA] text-[#1E293B] relative overflow-hidden"
    >
      {/* Subtle decorative background watermarks */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-slate-300/30 blur-3xl pointer-events-none" />

      <div className="w-full px-[8vw] relative z-10">
        
        {/* Top Grid: Brand Story Editorial & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Brand Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-200/70 text-amber-900 border border-amber-300/60">
              <Compass className="w-3.5 h-3.5 text-amber-800" />
              <span>About Trip to World</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B2B] font-['Playfair_Display',serif] tracking-tight leading-[1.15]">
              We don't just book holidays. We curate unforgettable world stories.
            </h2>

            {/* Brand Story Paragraph */}
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Founded in London by seasoned explorers and travel architects, <strong className="font-semibold text-slate-900">Trip to World</strong> was born from a simple philosophy: true travel should be transformative, seamless, and entirely tailored to how you love to experience the planet.
              </p>
              <p>
                Unlike generic booking platforms that offer rigid packages, we specialize in bespoke multi-centre holidays, private-guided expeditions, and secluded luxury retreats. From private tea ceremonies in Kyoto to secluded sandbanks in the Indian Ocean, our global network of destination specialists crafts every leg of your trip with meticulous passion.
              </p>
            </div>

            {/* Key Value Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/70 px-4 py-3 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Zero Hidden Fees or Surprise Surcharges</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/70 px-4 py-3 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Flexible Low Deposit Schemes</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/70 px-4 py-3 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Hand-Selected Boutique & 5-Star Accommodations</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/70 px-4 py-3 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Direct Personal Travel Designer Allocated</span>
              </div>
            </div>

            {/* Learn More & Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenLearnMore}
                className="px-6 py-3.5 rounded-xl font-bold text-white bg-[#0B1B2B] hover:bg-[#162E4A] transition-all shadow-md hover:shadow-xl flex items-center gap-2 group"
                id="about-learn-more-btn"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </div>

          {/* Right Column: Editorial Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main image card */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/5] relative">
                <img
                  src="https://www.wandernesia.com/wp-content/uploads/2019/05/Bali-Swing-by-@agneswei_wei.jpg"
                  alt="Traveller enjoying the Bali Swing"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
