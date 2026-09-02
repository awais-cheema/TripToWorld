import React, { useState, useEffect } from 'react';
import { CreditCard, Menu, X, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenPayModal: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenPayModal,
  onNavigateSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', sectionId: 'hero-section' },
    { name: 'Tour Packages', sectionId: 'packages-section' },
    { name: 'Destinations', sectionId: 'destinations-section' },
    { name: 'About', sectionId: 'about-section' },
    { name: 'Contact', sectionId: 'contact-section' },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B1B2B]/95 backdrop-blur-md shadow-xl py-3 border-b border-white/15' 
          : 'bg-gradient-to-b from-[#0B1B2B]/95 via-[#0B1B2B]/70 to-transparent py-4 md:py-5'
      }`}>
        <div className="w-full px-[8vw]">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div 
              onClick={() => handleNavClick('hero-section')}
              className="cursor-pointer flex items-center gap-3 group"
              id="brand-logo"
            >
              <img
                src="/assets/Logo.png"
                alt="Trip to World"
                className="h-auto w-36 object-contain sm:w-44"
              />
            </div>

            {/* Desktop Menu Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.sectionId)}
                  className="px-3.5 py-2 rounded-lg text-sm font-semibold text-white/90 hover:text-white hover:bg-white/15 transition-all"
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Right Action Cluster: Pay Now */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Pay Now CTA */}
              <button
                onClick={onOpenPayModal}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0f8f9d] hover:bg-[#087987] shadow-md shadow-cyan-950/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                id="header-pay-now-button"
              >
                <CreditCard className="w-4 h-4 text-white" />
                <span>Pay Now</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenPayModal}
                className="sm:hidden px-2.5 py-1.5 rounded-md text-xs font-semibold text-slate-950 bg-amber-400 flex items-center gap-1"
                id="mobile-quick-pay-btn"
              >
                <CreditCard className="w-3 h-3" />
                <span>Pay</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle-btn"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden bg-[#0B1B2B] border-b border-white/15 shadow-2xl text-white px-5 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200"
          id="mobile-nav-drawer"
        >
          <div className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.sectionId)}
                className="flex items-center justify-between text-left py-2.5 px-3 rounded-lg text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-all"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/15 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPayModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#f47b53] hover:bg-[#e96a42] text-white font-bold text-sm shadow-md transition-colors"
            >
              <CreditCard className="w-4 h-4" />
              <span>Make a Payment (Pay Now)</span>
            </button>
            
          </div>
        </div>
      )}
    </header>
  );
};
