import React, { useState } from 'react';
import { 
  X, Clock, MapPin, Tag, Star, ShieldCheck, CheckCircle2, 
  Plane, Sparkles, Phone, Calendar, Users, Send, ChevronRight 
} from 'lucide-react';
import { HolidayPackage, HeroSlide } from '../../types';

interface PackageDetailModalProps {
  packageData: HolidayPackage | HeroSlide | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenContactModal: () => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  packageData,
  isOpen,
  onClose,
  onOpenContactModal
}) => {
  const [travellers, setTravellers] = useState('2');
  const [month, setMonth] = useState('October 2026');
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen || !packageData) return null;

  const isHeroSlide = 'legs' in packageData;

  const title = packageData.title;
  const image = 'bgImage' in packageData ? packageData.bgImage : packageData.image;
  const fromPrice = packageData.fromPrice;
  const duration = packageData.duration;
  const destination = 'destination' in packageData ? packageData.destination : packageData.locationTag;

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      onClose();
    }, 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      id="package-detail-modal-backdrop"
    >
      <div 
        className="bg-[#0B1B2B] text-white border border-slate-700/80 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto"
        onClick={(e) => e.stopPropagation()}
        id="package-detail-modal-container"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
          aria-label="Close package details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Hero Image */}
        <div className="relative aspect-[21/9] sm:aspect-[21/8] overflow-hidden bg-slate-950">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-[#0B1B2B]/40 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-1 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-950">
                  {destination}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white">
                  <Clock className="w-3 h-3 inline mr-1" />
                  {duration}
                </span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-white">
                {title}
              </h2>
            </div>

            <div className="bg-[#07111D]/90 backdrop-blur-md p-3 rounded-xl border border-white/10 text-right">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block">From per person</span>
              <span className="text-2xl font-bold font-['Playfair_Display',serif] text-amber-300">
                £{fromPrice.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Itinerary Details / 2-Stop Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Description / Overview */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-2">
                Journey Overview
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {isHeroSlide ? (packageData as HeroSlide).description : (packageData as HolidayPackage).overview}
              </p>
            </div>

            {/* If Hero Slide: Show 2-Stop Breakdown */}
            {isHeroSlide && (
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <Plane className="w-4 h-4 text-amber-400" />
                  <span>2-Stop Multi-Centre Breakdown</span>
                </h4>

                {(packageData as HeroSlide).legs.map((leg, index) => (
                  <div key={index} className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                        Stop {leg.stopNumber}: {leg.country} ({leg.cityOrRegion})
                      </span>
                      <span className="text-xs font-semibold text-slate-300 bg-slate-800 px-2 py-0.5 rounded">
                        {leg.nights} Nights
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{leg.highlight}</span>
                    </p>
                    {leg.transferType && (
                      <div className="text-[11px] text-slate-400 pt-1 italic">
                        Transfer Arrangement: {leg.transferType}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* If Holiday Package: Show Day-by-Day */}
            {!isHeroSlide && (packageData as HolidayPackage).itinerary && (
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  Sample Daily Itinerary
                </h4>
                <div className="space-y-2.5">
                  {(packageData as HolidayPackage).itinerary.map((day, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-400">{day.day}: {day.title}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{day.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Inclusions & Protections */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-2 text-xs text-amber-200/90">
              <div className="flex items-center gap-1.5 font-bold text-amber-300">
                <ShieldCheck className="w-4 h-4" />
                <span>What's Included in This Package</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                <li className="flex items-center gap-1">✓ Return UK Flights with Checked Baggage</li>
                <li className="flex items-center gap-1">✓ Handpicked Boutique / 5-Star Stays</li>
                <li className="flex items-center gap-1">✓ All Private Airport & Inter-city Transfers</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Tailor-Made Quote Request Form */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="text-lg font-bold font-['Playfair_Display',serif] text-white">
                Request Tailor-Made Quote
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Customize dates, hotel upgrades, or flight classes. Our travel architect will respond in under 2 hours.
              </p>
            </div>

            {isSent ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Quote Request Received!</h4>
                <p className="text-xs text-slate-300">
                  A bespoke quotation for <strong className="text-white">{title}</strong> has been logged. Our UK travel architect will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitQuote} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="e.g. Jonathan Adams"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="jonathan@email.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      placeholder="+44 7..."
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Passengers</label>
                    <select
                      value={travellers}
                      onChange={(e) => setTravellers(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="1">1 Adult (Solo)</option>
                      <option value="2">2 Adults (Couple)</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4+ Adults / Family</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Travel Period</label>
                    <select
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="October 2026">Autumn 2026</option>
                      <option value="Winter 2026/27">Winter 2026/27</option>
                      <option value="Spring 2027">Spring 2027</option>
                      <option value="Summer 2027">Summer 2027</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Free Quotation Request</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
