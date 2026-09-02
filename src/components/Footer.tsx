import React from 'react';
import { 
  MapPin, Mail
} from 'lucide-react';
import { COMPANY_CONTACT } from '../data/travelData';

interface FooterProps {
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContactModal
}) => {
  return (
    <footer id="contact-section" className="site-footer bg-[#07111D] text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      
      {/* Top Pre-Footer Call to Action Banner */}
      <div className="w-full px-[8vw] mb-16">
        <div className="bg-gradient-to-r from-[#0B1B2B] via-[#12283E] to-[#0B1B2B] rounded-3xl p-8 md:p-12 border border-slate-700/80 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <h3 className="whitespace-nowrap text-[clamp(0.85rem,2.4vw,1.75rem)] font-bold font-['Manrope',sans-serif] text-white">
              Ready to plan your dream itinerary?
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenContactModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-lg hover:shadow-amber-400/20 text-center"
              id="footer-quote-cta-btn"
            >
              Request Free Bespoke Quote
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="w-full px-[8vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Logo & Brief Description & Socials (5 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Brand Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/assets/Logo.png"
                alt="Trip to World"
                className="h-auto w-48 object-contain sm:w-56"
              />
            </div>

            {/* Brief Description */}
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Trip to World is an independent UK tour operator specializing in handcrafted multi-centre holidays, private cultural expeditions, and luxury island retreats across 6 continents.
            </p>

          </div>

          {/* Column 2: Quick Links list (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white font-['Playfair_Display',serif] tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://travezy.co.uk/index.html" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li>
                <a href="https://travezy.co.uk/destinations.html" className="hover:text-amber-400 transition-colors">Destinations</a>
              </li>
              <li>
                <a href="https://travezy.co.uk/wp/tour" className="hover:text-amber-400 transition-colors">Tour Packages</a>
              </li>
              <li>
                <a href="https://travezy.co.uk/about.html" className="hover:text-amber-400 transition-colors">About</a>
              </li>
              <li>
                <a href="https://travezy.co.uk/wp/terms-and-conditions" className="hover:text-amber-400 transition-colors">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (address, phone, email) (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-base font-bold text-white font-['Playfair_Display',serif] tracking-wide">
              Contact
            </h4>
            
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <span className="text-white font-medium block">Address</span>
                  <span className="text-slate-400 text-xs leading-relaxed">{COMPANY_CONTACT.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <div>
                  <span className="text-white font-medium block">Email</span>
                  <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-slate-300 hover:text-white text-xs">
                    {COMPANY_CONTACT.email}
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Accepted Payment Methods & Bottom Copyright/Legal Line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          
          {/* Payment Method Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <img src="https://travezy.co.uk/Images/Payments.webp" alt="Accepted payment methods" className="h-7 w-auto object-contain" />
          </div>

          {/* Legal / Copyright Line */}
          <div className="text-center md:text-right space-y-1">
            <p>© 2026 Trip to World Ltd. All rights reserved.</p>
          </div>

        </div>

      </div>
    </footer>
  );
};
