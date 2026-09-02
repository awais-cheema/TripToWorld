import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, ArrowRight } from 'lucide-react';
import { HeroSlide } from '../types';
import { HERO_SLIDES } from '../data/travelData';

interface HeroSliderProps {
  onExplorePackage: (slide: HeroSlide) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onExplorePackage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = HERO_SLIDES.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 7000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section 
      id="hero-section"
      className="relative min-h-[100vh] w-full flex items-center bg-[#07111D] overflow-hidden pt-24 pb-16 md:py-24"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides with Crossfade */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1000ms' }}
        >
          <img
            src={slide.bgImage}
            alt={slide.title}
            className="w-full h-full object-cover object-center transform scale-105 animate-[kenburns_25s_infinite_alternate]"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layered cinematic gradient overlays for pristine readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111D] via-[#07111D]/70 to-[#07111D]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111D]/90 via-[#07111D]/60 to-transparent" />
        </div>
      ))}

      {/* Floating slide navigation */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-30 flex -translate-y-1/2 items-center justify-between px-3 sm:px-[2vw]">
        <button
          onClick={handlePrev}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#07111D]/45 text-white shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:border-amber-300 hover:bg-amber-400 hover:text-slate-950 active:scale-95 sm:h-14 sm:w-14"
          aria-label="Previous Trip Slide"
          id="hero-prev-btn"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#07111D]/45 text-white shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:border-amber-300 hover:bg-amber-400 hover:text-slate-950 active:scale-95 sm:h-14 sm:w-14"
          aria-label="Next Trip Slide"
          id="hero-next-btn"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full px-[8vw] mt-4 md:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Content: Main Details */}
          <div className="lg:col-span-7 space-y-5 text-white">
            
            {/* Package Duration */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-white border border-white/20">
                <Clock className="w-3 h-3 text-amber-300" />
                {currentSlide.duration}
              </span>
            </div>

            {/* Main Package Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight font-['Playfair_Display',serif] text-white leading-[1.15] drop-shadow-md">
              {currentSlide.title}
            </h1>

            {/* Price Announcement Line */}
            <div className="flex items-baseline gap-3 py-1">
              <span className="text-sm uppercase tracking-widest text-slate-300 font-medium">
                Starting from
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl md:text-4xl font-extrabold text-amber-400 font-['Playfair_Display',serif]">
                  {currentSlide.currency}{currentSlide.fromPrice.toLocaleString()}
                </span>
                <span className="text-sm text-slate-300 font-semibold">/PP</span>
              </div>
            </div>

            {/* Description Text */}
            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-light line-clamp-3 md:line-clamp-none">
              {currentSlide.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onExplorePackage(currentSlide)}
                className="px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 group"
                id="hero-explore-package-btn"
              >
                <span>Explore this Package</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </div>

          {/* Right Hero Content: Active Package Image */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[10px]">
              <img
                src={currentSlide.sideImage}
                alt={currentSlide.title}
                className="aspect-[4/3] w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
