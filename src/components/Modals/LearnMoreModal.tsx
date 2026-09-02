import React from 'react';
import { X, Headphones, CheckCircle2, HeartHandshake, Compass, Globe2 } from 'lucide-react';
import { COMPANY_CONTACT } from '../../data/travelData';

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContactModal: () => void;
}

export const LearnMoreModal: React.FC<LearnMoreModalProps> = ({
  isOpen,
  onClose,
  onOpenContactModal
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      id="learn-more-modal-backdrop"
    >
      <div 
        className="bg-[#0B1B2B] text-white border border-slate-700/80 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative my-auto"
        onClick={(e) => e.stopPropagation()}
        id="learn-more-modal-container"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
          aria-label="Close Learn More Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              The Trip to World Standard
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] text-white">
              Why Book With Trip to World
            </h3>
          </div>
        </div>

        {/* Story & Values Content */}
        <div className="space-y-6 text-sm text-slate-300 leading-relaxed font-light">
          
          <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-700/80 space-y-3">
            <h4 className="text-base font-bold text-white font-['Playfair_Display',serif] flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-amber-400" />
              <span>Independent UK Craftsmanship</span>
            </h4>
            <p>
              Trip to World was founded by UK travel veterans who believed travel booking had lost its human soul. We do not rely on robotic algorithms or cookie-cutter resort deals. Every hotel, private driver, and local guide is vetted personally by our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <Headphones className="w-4 h-4" />
                <span>24/7 UK & Local Support</span>
              </div>
              <p className="text-xs text-slate-400">
                You will have a direct contact number for your allocated travel architect as well as our 24-hour emergency response team while you are abroad.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                <span>Low Deposit & Price Promise</span>
              </div>
              <p className="text-xs text-slate-400">
                Secure your tailor-made journey from just £150 per person deposit with flexible balance payment dates up to 10 weeks before departure.
              </p>
            </div>

          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 text-xs text-amber-200 space-y-1">
            <strong className="text-white block font-medium">Visiting Our Mayfair Lounge:</strong>
            <p>
              We welcome clients to our Luton consultation office at 𝟏𝟐 𝐇𝐮𝐦𝐛𝐞𝐫𝐬𝐭𝐨𝐧𝐞 𝐂𝐥𝐨𝐬𝐞, 𝐋𝐮𝐭𝐨𝐧, 𝐋𝐔𝟒 𝟗𝐒𝐓 by appointment.
            </p>
          </div>

        </div>

        {/* Modal Bottom CTAs */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenContactModal();
            }}
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all"
          >
            Schedule Consultation With Specialist
          </button>
        </div>

      </div>
    </div>
  );
};
