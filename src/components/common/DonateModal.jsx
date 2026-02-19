/**
 * Donate Modal Component
 * Single Responsibility: Display donation options (PayPal, JazzCash & Botim Pay)
 */

import { memo, useState } from 'react';
import { Icons } from './Icons';

// Donation configuration
const DONATION_CONFIG = {
  paypal: {
    link: 'https://www.paypal.com/donate/?hosted_button_id=RWZ8HAKRW68RA',
    enabled: true,
  },
  jazzcash: {
    number: '03310000333',
    accountName: 'Muhammad Zia Shahid',
    enabled: true,
  },
  botim: {
    accountName: 'Zia',
    enabled: true,
  },
};

const DonateModal = memo(function DonateModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [mobilePayTab, setMobilePayTab] = useState('jazzcash'); // 'jazzcash' or 'botim'

  if (!isOpen) return null;

  const copyNumber = () => {
    navigator.clipboard.writeText(DONATION_CONFIG.jazzcash.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ zIndex: 9999999 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-sm bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'bubblePopIn 0.3s ease-out' }}
      >
        {/* Glass highlight */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent rounded-t-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all z-20"
        >
          <Icons.X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 relative z-10">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
            <span className="text-3xl">💝</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">Support w3Quran</h2>
          <p className="text-white/80 text-sm">Help us maintain and improve this app</p>
        </div>

        {/* Payment Options */}
        <div className="space-y-3 relative z-10">
          {/* PayPal */}
          {DONATION_CONFIG.paypal.enabled && (
            <a
              href={DONATION_CONFIG.paypal.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#003087] flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.384a.77.77 0 0 1 .757-.645h6.692c2.215 0 3.81.656 4.598 1.894.357.561.542 1.183.594 1.927.026.384.007.807-.059 1.277l-.016.097v.355l.278.158a3.22 3.22 0 0 1 .88.712c.43.51.68 1.16.764 1.927.087.79.011 1.724-.226 2.778-.272 1.21-.716 2.252-1.313 3.09a5.46 5.46 0 0 1-2.116 1.77c-.858.424-1.856.64-2.969.64H11.58a.943.943 0 0 0-.929.795l-.012.077-.353 2.233-.009.054a.943.943 0 0 1-.929.795H7.076z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold">PayPal</div>
                <div className="text-white/60 text-sm">Quick & Secure Payment</div>
              </div>
              <Icons.ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors" />
            </a>
          )}

          {/* Mobile Pay Section with Tabs */}
          {(DONATION_CONFIG.jazzcash.enabled || DONATION_CONFIG.botim.enabled) && (
            <div className="p-4 bg-white/10 rounded-2xl">
              {/* Tabs */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setMobilePayTab('jazzcash')}
                  className={`flex-1 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                    mobilePayTab === 'jazzcash'
                      ? 'bg-[#ED1C24] text-white shadow-lg'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  <span className="text-lg">🇵🇰</span>
                  JazzCash
                </button>
                <button
                  onClick={() => setMobilePayTab('botim')}
                  className={`flex-1 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                    mobilePayTab === 'botim'
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  <span className="text-lg">🇦🇪</span>
                  Botim Pay
                </button>
              </div>

              {/* JazzCash Content */}
              {mobilePayTab === 'jazzcash' && (
                <>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-[#ED1C24] flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">JC</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">JazzCash</div>
                      <div className="text-white/60 text-sm">Pakistan 🇵🇰</div>
                    </div>
                  </div>

                  {/* JazzCash QR Code */}
                  <div className="bg-white rounded-xl p-3 text-center">
                    <p className="text-gray-700 font-medium text-sm mb-2">
                      {DONATION_CONFIG.jazzcash.accountName}
                    </p>
                    <img
                      src="/jazzcash-qr.jpeg"
                      alt="JazzCash QR Code"
                      className="w-40 h-40 mx-auto object-contain rounded-lg"
                    />
                    <p className="text-gray-500 text-xs mt-2">Scan with JazzCash App</p>
                    {/* Number with copy button */}
                    <div className="mt-2 pt-2 border-t border-gray-200 flex items-center justify-center gap-2">
                      <span className="text-gray-600 text-sm font-mono">{DONATION_CONFIG.jazzcash.number}</span>
                      <button
                        onClick={copyNumber}
                        className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all"
                        title="Copy number"
                      >
                        {copied ? (
                          <Icons.CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Icons.Copy className="w-4 h-4 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Botim Pay Content */}
              {mobilePayTab === 'botim' && (
                <>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">botim</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">Botim Pay</div>
                      <div className="text-white/60 text-sm">UAE 🇦🇪</div>
                    </div>
                  </div>

                  {/* Botim QR Code */}
                  <div className="bg-black rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-white font-bold text-lg tracking-wider">botim</span>
                      <span className="bg-white text-black text-xs font-bold px-2 py-0.5 rounded-full">PAY</span>
                    </div>
                    <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-4 rounded-xl inline-block">
                      <div className="bg-white p-3 rounded-lg">
                        <div className="w-40 h-40 flex flex-col items-center justify-center text-center">
                          <span className="text-4xl mb-2">📱</span>
                          <p className="text-gray-700 font-bold text-sm">Search in Botim App:</p>
                          <p className="text-teal-600 font-bold text-lg mt-1">{DONATION_CONFIG.botim.accountName}</p>
                          <p className="text-gray-500 text-xs mt-2">Open Botim → Pay → Search Name</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-3 font-medium">{DONATION_CONFIG.botim.accountName}</p>
                    <p className="text-gray-500 text-xs mt-1">Search the name in Botim Pay</p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-5 text-center relative z-10">
          <p className="text-white/50 text-xs">
            JazakAllah Khair for your support! 🤲
          </p>
        </div>
      </div>
    </div>
  );
});

export default DonateModal;
