import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { FeaturedDestinations } from './components/FeaturedDestinations';
import { AboutWhyBook } from './components/AboutWhyBook';
import { HolidayPackages } from './components/HolidayPackages';
import { RecentGallery } from './components/RecentGallery';
import { Footer } from './components/Footer';

import { PayNowModal } from './components/Modals/PayNowModal';
import { PackageDetailModal } from './components/Modals/PackageDetailModal';
import { ContactModal } from './components/Modals/ContactModal';
import { LearnMoreModal } from './components/Modals/LearnMoreModal';

import { HeroSlide, DestinationItem, HolidayPackage } from './types';

export default function App() {
  // Modal states
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<HolidayPackage | HeroSlide | null>(null);
  const [isPackageDetailOpen, setIsPackageDetailOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
    });
    lenisRef.current = lenis;

    let animationFrameId = 0;
    const animate = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Handlers
  const handleExploreHeroSlide = (_slide: HeroSlide) => undefined;

  const handleSelectPackage = (_pkg: HolidayPackage) => undefined;

  const handleSelectDestination = (_dest: DestinationItem) => undefined;

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -88 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E293B] font-['Lato',sans-serif] selection:bg-amber-400 selection:text-slate-950">
      
      {/* 1. Header/Navigation */}
      <Header
        onOpenPayModal={() => undefined}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Page Sections */}
      <main className="flex-1 w-full overflow-hidden">
        
        {/* 2. Hero Slider with 2-Stop Breakdown */}
        <HeroSlider
          onExplorePackage={handleExploreHeroSlide}
        />

        {/* 3. Popular Holiday Packages */}
        <HolidayPackages
          onSelectPackage={handleSelectPackage}
        />

        {/* 4. About / Why Book With Us */}
        <AboutWhyBook
          onOpenLearnMore={() => undefined}
        />

        {/* 5. Featured Destinations */}
        <FeaturedDestinations
          onSelectDestination={handleSelectDestination}
        />

        {/* 6. Recent Gallery */}
        <RecentGallery />

      </main>

      {/* 7. Footer */}
      <Footer
        onOpenContactModal={() => undefined}
      />

      {/* Interactive Modals */}
      <PayNowModal
        isOpen={isPayModalOpen}
        onClose={() => setIsPayModalOpen(false)}
      />

      <PackageDetailModal
        isOpen={isPackageDetailOpen}
        packageData={selectedPackage}
        onClose={() => setIsPackageDetailOpen(false)}
        onOpenContactModal={() => undefined}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <LearnMoreModal
        isOpen={isLearnMoreOpen}
        onClose={() => setIsLearnMoreOpen(false)}
        onOpenContactModal={() => undefined}
      />

    </div>
  );
}
