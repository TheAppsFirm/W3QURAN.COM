/**
 * Donate Modal Component
 * Single Responsibility: Display donation options (PayPal, JazzCash, Botim Pay & RedotPay)
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
    qrImage: '/jazzcash-qr.jpeg',
    appName: 'JazzCash App',
    color: '#ED1C24',
  },
  botim: {
    accountName: 'Zia',
    enabled: true,
    qrImage: '/botim-qr.png',
    appName: 'Botim App',
    color: '#000000',
  },
  redotpay: {
    accountName: 'Zia',
    enabled: true,
    qrImage: '/redotpay-qr.jpg',
    appName: 'RedotPay App',
    color: '#F97316',
  },
};

const DonateModal = memo(function DonateModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [mobilePayTab, setMobilePayTab] = useState('jazzcash');
  const [showEnlargedQR, setShowEnlargedQR] = useState(false);

  if (!isOpen) return null;

  const copyNumber = () => {
    navigator.clipboard.writeText(DONATION_CONFIG.jazzcash.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentConfig = DONATION_CONFIG[mobilePayTab];

  // Full-screen QR Code overlay
  if (showEnlargedQR) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center p-4"
        style={{ zIndex: 99999999 }}
        onClick={() => setShowEnlargedQR(false)}
      >
        {/* Dark backdrop */}
        <div className="absolute inset-0 bg-black/95" />

        {/* QR Content */}
        <div
          className="relative flex flex-col items-center max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={() => setShowEnlargedQR(false)}
            className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all"
          >
            <Icons.X className="w-6 h-6" />
          </button>

          {/* Payment method label */}
          <div
            className="px-4 py-2 rounded-full mb-4 text-white font-bold text-sm"
            style={{ background: currentConfig.color }}
          >
            {mobilePayTab === 'jazzcash' && '🇵🇰 JazzCash'}
            {mobilePayTab === 'botim' && '🇦🇪 Botim Pay'}
            {mobilePayTab === 'redotpay' && '🌐 RedotPay Crypto'}
          </div>

          {/* Account name */}
          <p className="text-white/80 text-lg mb-4">
            {currentConfig.accountName}
          </p>

          {/* Large QR Code */}
          <div className="bg-white p-6 rounded-2xl shadow-2xl">
            <img
              src={currentConfig.qrImage}
              alt={`${mobilePayTab} QR Code`}
              className="w-72 h-72 sm:w-80 sm:h-80 object-contain"
            />
          </div>

          {/* Scan instruction */}
          <p className="text-white/60 text-sm mt-4">
            Scan with {currentConfig.appName}
          </p>

          {/* JazzCash number */}
          {mobilePayTab === 'jazzcash' && (
            <div className="mt-4 flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <span className="text-white font-mono">{DONATION_CONFIG.jazzcash.number}</span>
              <button
                onClick={copyNumber}
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-all"
                title="Copy number"
              >
                {copied ? (
                  <Icons.CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <Icons.Copy className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
          )}

          {/* Tap to close hint */}
          <p className="text-white/40 text-xs mt-6">
            Tap anywhere to close
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-2"
      style={{ zIndex: 9999999 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal - Compact design */}
      <div
        className="relative w-full max-w-xs bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'bubblePopIn 0.3s ease-out' }}
      >
        {/* Glass highlight */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all z-20"
        >
          <Icons.X className="w-4 h-4" />
        </button>

        {/* Compact Header */}
        <div className="text-center mb-3 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-2xl">💝</span>
            <h2 className="text-lg font-bold text-white">Support w3Quran</h2>
          </div>
          <p className="text-white/70 text-xs">Help us maintain and improve this app</p>
        </div>

        {/* Payment Options */}
        <div className="space-y-2 relative z-10">
          {/* PayPal - Compact */}
          {DONATION_CONFIG.paypal.enabled && (
            <a
              href={DONATION_CONFIG.paypal.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#003087] flex items-center justify-center shadow">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.384a.77.77 0 0 1 .757-.645h6.692c2.215 0 3.81.656 4.598 1.894.357.561.542 1.183.594 1.927.026.384.007.807-.059 1.277l-.016.097v.355l.278.158a3.22 3.22 0 0 1 .88.712c.43.51.68 1.16.764 1.927.087.79.011 1.724-.226 2.778-.272 1.21-.716 2.252-1.313 3.09a5.46 5.46 0 0 1-2.116 1.77c-.858.424-1.856.64-2.969.64H11.58a.943.943 0 0 0-.929.795l-.012.077-.353 2.233-.009.054a.943.943 0 0 1-.929.795H7.076z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold text-sm">PayPal</div>
                <div className="text-white/50 text-xs">International</div>
              </div>
              <Icons.ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white/70" />
            </a>
          )}

          {/* QR Payment Section */}
          {(DONATION_CONFIG.jazzcash.enabled || DONATION_CONFIG.botim.enabled || DONATION_CONFIG.redotpay.enabled) && (
            <div className="p-2.5 bg-white/10 rounded-xl">
              {/* Tabs - Compact 3 columns */}
              <div className="grid grid-cols-3 gap-1 mb-2">
                <button
                  onClick={() => setMobilePayTab('jazzcash')}
                  className={`py-1.5 px-1 rounded-lg font-medium text-[10px] transition-all flex flex-col items-center gap-0.5 ${
                    mobilePayTab === 'jazzcash'
                      ? 'bg-[#ED1C24] text-white shadow'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  <span>🇵🇰</span>
                  <span>JazzCash</span>
                </button>
                <button
                  onClick={() => setMobilePayTab('botim')}
                  className={`py-1.5 px-1 rounded-lg font-medium text-[10px] transition-all flex flex-col items-center gap-0.5 ${
                    mobilePayTab === 'botim'
                      ? 'bg-black text-white shadow'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  <span>🇦🇪</span>
                  <span>Botim</span>
                </button>
                <button
                  onClick={() => setMobilePayTab('redotpay')}
                  className={`py-1.5 px-1 rounded-lg font-medium text-[10px] transition-all flex flex-col items-center gap-0.5 ${
                    mobilePayTab === 'redotpay'
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  <span>🌐</span>
                  <span>Crypto</span>
                </button>
              </div>

              {/* QR Code Display - Clickable for enlarge */}
              <div
                className="bg-white rounded-lg p-3 text-center cursor-pointer hover:shadow-lg transition-all group"
                onClick={() => setShowEnlargedQR(true)}
              >
                <p className="text-gray-600 font-medium text-xs mb-2">
                  {currentConfig.accountName}
                </p>

                {/* QR Image with enlarge hint */}
                <div className="relative inline-block">
                  <img
                    src={currentConfig.qrImage}
                    alt={`${mobilePayTab} QR Code`}
                    className="w-36 h-36 mx-auto object-contain rounded group-hover:scale-105 transition-transform"
                  />
                  {/* Enlarge icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all rounded">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 px-2 py-1 rounded-full flex items-center gap-1 text-xs text-gray-700">
                      <Icons.ZoomIn className="w-3 h-3" />
                      <span>Tap to enlarge</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-[10px] mt-2">
                  Scan with {currentConfig.appName}
                </p>

                {/* JazzCash number */}
                {mobilePayTab === 'jazzcash' && (
                  <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-center gap-1.5">
                    <span className="text-gray-500 text-xs font-mono">{DONATION_CONFIG.jazzcash.number}</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); copyNumber(); }}
                      className="p-1 rounded bg-gray-100 hover:bg-gray-200 transition-all"
                      title="Copy number"
                    >
                      {copied ? (
                        <Icons.CheckCircle className="w-3.5 h-3.5 text-green-500" />
                      ) : (
                        <Icons.Copy className="w-3.5 h-3.5 text-gray-400" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-3 text-center relative z-10">
          <p className="text-white/40 text-[10px]">
            JazakAllah Khair for your support! 🤲
          </p>
        </div>
      </div>
    </div>
  );
});

export default DonateModal;
