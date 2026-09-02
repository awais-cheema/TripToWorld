import React, { useState } from 'react';
import { X, ShieldCheck, CreditCard, Lock, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface PayNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PayNowModal: React.FC<PayNowModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'lookup' | 'payment' | 'success'>('lookup');
  const [bookingRef, setBookingRef] = useState('TW-88421');
  const [leadPassenger, setLeadPassenger] = useState('Sarah Jenkins');
  const [paymentType, setPaymentType] = useState<'deposit' | 'balance' | 'full'>('balance');
  const [amount, setAmount] = useState('1450');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [expiry, setExpiry] = useState('08/28');
  const [cvv, setCvv] = useState('•••');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingRef.trim()) {
      setErrorMsg('Please enter a valid Booking Reference');
      return;
    }
    setErrorMsg('');
    setStep('payment');
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
    }, 1200);
  };

  const resetModal = () => {
    setStep('lookup');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={resetModal}
      id="pay-now-modal-backdrop"
    >
      <div 
        className="bg-[#0B1B2B] text-white border border-slate-700/80 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
        id="pay-now-modal-container"
      >
        {/* Close Button */}
        <button
          onClick={resetModal}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
          aria-label="Close Payment Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-['Playfair_Display',serif] text-white">
              Trip to World Secure Payment Portal
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>256-Bit SSL Encrypted</span>
            </div>
          </div>
        </div>

        {/* Step 1: Lookup Booking Reference */}
        {step === 'lookup' && (
          <form onSubmit={handleLookup} className="space-y-4">
            <p className="text-xs text-slate-300 leading-relaxed">
              Enter your 7-character booking reference provided on your Trip to World itinerary confirmation or quotation document.
            </p>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Booking Reference / Quote ID *
              </label>
              <input
                type="text"
                value={bookingRef}
                onChange={(e) => setBookingRef(e.target.value.toUpperCase())}
                placeholder="e.g. TW-88421"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-base tracking-wider focus:outline-none focus:border-amber-400"
                required
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                Default demo reference pre-filled: <strong>TW-88421</strong>
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Lead Passenger Full Name *
              </label>
              <input
                type="text"
                value={leadPassenger}
                onChange={(e) => setLeadPassenger(e.target.value)}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                required
              />
            </div>

            {errorMsg && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-900/40 border border-red-500/50 text-red-300 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all mt-6"
            >
              <span>Retrieve Booking & Proceed</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </form>
        )}

        {/* Step 2: Payment Details */}
        {step === 'payment' && (
          <form onSubmit={handlePay} className="space-y-4">
            {/* Booking Summary Box */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Booking Reference:</span>
                <span className="text-amber-400 font-mono font-bold">{bookingRef}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Lead Passenger:</span>
                <span className="text-white font-medium">{leadPassenger}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Trip Package:</span>
                <span className="text-white font-medium">Kyoto & Maldives Overwater Sanctuary</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-800 text-sm font-bold text-white">
                <span>Total Package Price:</span>
                <span className="text-amber-300 font-['Playfair_Display',serif]">£2,899.00</span>
              </div>
            </div>

            {/* Payment Type Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Select Payment Option
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => { setPaymentType('deposit'); setAmount('400'); }}
                  className={`py-2 px-3 rounded-lg border text-center transition-all ${
                    paymentType === 'deposit'
                      ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-bold'
                      : 'bg-slate-900 border-slate-700 text-slate-300'
                  }`}
                >
                  Deposit (£400)
                </button>
                <button
                  type="button"
                  onClick={() => { setPaymentType('balance'); setAmount('1450'); }}
                  className={`py-2 px-3 rounded-lg border text-center transition-all ${
                    paymentType === 'balance'
                      ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-bold'
                      : 'bg-slate-900 border-slate-700 text-slate-300'
                  }`}
                >
                  Remaining (£1,450)
                </button>
                <button
                  type="button"
                  onClick={() => { setPaymentType('full'); setAmount('2899'); }}
                  className={`py-2 px-3 rounded-lg border text-center transition-all ${
                    paymentType === 'full'
                      ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-bold'
                      : 'bg-slate-900 border-slate-700 text-slate-300'
                  }`}
                >
                  Full Total (£2,899)
                </button>
              </div>
            </div>

            {/* Card Information */}
            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-sm focus:outline-none focus:border-amber-400 pl-10"
                    required
                  />
                  <CreditCard className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Expiry Date (MM/YY)
                  </label>
                  <input
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-sm focus:outline-none focus:border-amber-400 text-center"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    CVV / Security Code
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={cvv}
                      maxLength={4}
                      onChange={(e) => setCvv(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-sm focus:outline-none focus:border-amber-400 text-center"
                      required
                    />
                    <Lock className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setStep('lookup')}
                className="w-1/3 py-3 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isProcessing}
                className="w-2/3 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                <Lock className="w-4 h-4 text-slate-950" />
                <span>{isProcessing ? 'Authorising...' : `Authorise £${amount}.00`}</span>
              </button>
            </div>

          </form>
        )}

        {/* Step 3: Success Confirmation */}
        {step === 'success' && (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-2xl font-bold font-['Playfair_Display',serif] text-white">
              Payment Successful!
            </h4>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto font-light">
              We have received your payment of <strong className="text-amber-300 font-bold">£{amount}.00</strong> for booking reference <strong className="text-white font-mono">{bookingRef}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs space-y-2 text-slate-300">
              <div className="flex justify-between">
                <span>Transaction Ref:</span>
                <span className="font-mono text-white">TXN-9842104-UK</span>
              </div>
              <div className="flex justify-between">
                <span>Passenger:</span>
                <span className="text-white">{leadPassenger}</span>
              </div>
            </div>

            <button
              onClick={resetModal}
              className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all mt-4"
            >
              Done & Return to Homepage
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
