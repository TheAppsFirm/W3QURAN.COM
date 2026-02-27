/**
 * Donate Modal — Sadaqah Jariyah Focus
 * Redesigned with Pakistani mindset: Urdu emotional appeal, PKR amounts, trust signals
 * Payment options: PayPal, JazzCash, Botim Pay, RedotPay (all preserved)
 */

import { memo, useState } from 'react';
import { Icons } from './Icons';
import { useTranslation } from '../../contexts/LocaleContext';

// Donation configuration — same as before
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

// Suggested PKR amounts — motivational anchoring only
const PKR_AMOUNTS = [
  { amount: 500, label: 'Rs. 500' },
  { amount: 1000, label: 'Rs. 1,000', recommended: true },
  { amount: 2000, label: 'Rs. 2,000' },
];

const DonateModal = memo(function DonateModal({ isOpen, onClose }) {
  const { t, isRTL } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [mobilePayTab, setMobilePayTab] = useState('jazzcash');
  const [showEnlargedQR, setShowEnlargedQR] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(1000);

  if (!isOpen) return null;

  const copyNumber = () => {
    navigator.clipboard.writeText(DONATION_CONFIG.jazzcash.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentConfig = DONATION_CONFIG[mobilePayTab];

  // ─── Full-screen QR Code overlay (unchanged) ───
  if (showEnlargedQR) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center p-4"
        style={{ zIndex: 99999999 }}
        onClick={() => setShowEnlargedQR(false)}
      >
        <div className="absolute inset-0 bg-black/95" />

        <div
          className="relative flex flex-col items-center max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowEnlargedQR(false)}
            className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all"
          >
            <Icons.X className="w-6 h-6" />
          </button>

          <div
            className="px-4 py-2 rounded-full mb-4 text-white font-bold text-sm"
            style={{ background: currentConfig.color }}
          >
            {mobilePayTab === 'jazzcash' && 'JazzCash'}
            {mobilePayTab === 'botim' && 'Botim Pay'}
            {mobilePayTab === 'redotpay' && 'RedotPay Crypto'}
          </div>

          <p className="text-white/80 text-lg mb-4">
            {currentConfig.accountName}
          </p>

          <div className="bg-white p-6 rounded-2xl shadow-2xl">
            <img
              src={currentConfig.qrImage}
              alt={`${mobilePayTab} QR Code`}
              className="w-72 h-72 sm:w-80 sm:h-80 object-contain"
            />
          </div>

          <p className="text-white/60 text-sm mt-4">
            Scan with {currentConfig.appName}
          </p>

          {mobilePayTab === 'jazzcash' && (
            <div className="mt-4 flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <span className="text-white font-mono">{DONATION_CONFIG.jazzcash.number}</span>
              <button
                onClick={copyNumber}
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-all"
              >
                {copied ? (
                  <Icons.CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <Icons.Copy className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
          )}

          <p className="text-white/40 text-xs mt-6">
            Tap anywhere to close
          </p>
        </div>
      </div>
    );
  }

  // ─── Main Modal ───
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-3"
      style={{ zIndex: 9999999 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal — compact, no scroll on mobile */}
      <div
        className="relative w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(165deg, #064E3B 0%, #065F46 30%, #047857 60%, #059669 100%)',
          animation: 'bubblePopIn 0.3s ease-out',
        }}
      >
        {/* Glass highlight */}
        <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />

        {/* Close button */}
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-all z-20"
        >
          <Icons.X className="w-4 h-4" />
        </button>

        {/* Content — tight spacing, no scroll */}
        <div className="p-3.5 space-y-2.5">

          {/* ── Header: Bismillah + Sadaqah Jariyah ── */}
          <div className="text-center relative z-10">
            <p
              className="text-amber-300/90"
              style={{ fontFamily: "'Scheherazade New', 'Amiri', serif", fontSize: '1.1rem' }}
              dir="rtl"
              lang="ar"
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>

            <h2
              className="text-xl font-bold text-white mt-0.5"
              style={isRTL ? { fontFamily: "'Noto Nastaliq Urdu', serif" } : undefined}
            >
              {t('donate.sadaqahJariyah')}
            </h2>

            <p
              className="text-emerald-100/80 text-xs leading-relaxed mt-1"
              style={isRTL ? { fontFamily: "'Noto Nastaliq Urdu', serif" } : undefined}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {t('donate.impactLine')}
            </p>
          </div>

          {/* ── PKR Amount Chips ── */}
          <div>
            <div className="flex gap-1.5 justify-center">
              {PKR_AMOUNTS.map((item) => (
                <button
                  key={item.amount}
                  onClick={() => setSelectedAmount(item.amount)}
                  className={`relative flex-1 py-2 px-1.5 rounded-xl text-center transition-all ${
                    selectedAmount === item.amount
                      ? 'bg-white/20 border-white/30 scale-[1.03]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                  style={{ border: `1.5px solid ${selectedAmount === item.amount ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.08)'}` }}
                >
                  {item.recommended && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-amber-400 text-[8px] font-bold text-amber-900 rounded-full whitespace-nowrap">
                      {t('donate.recommended')}
                    </span>
                  )}
                  <p className={`font-bold text-sm ${selectedAmount === item.amount ? 'text-white' : 'text-white/70'}`}>
                    {item.label}
                  </p>
                </button>
              ))}
            </div>
            <p className="text-center text-emerald-200/40 text-[10px] mt-1">
              {t('donate.teaComparison')}
            </p>
          </div>

          {/* ── Divider ── */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/35 text-[10px] whitespace-nowrap">
              {t('donate.chooseMethod')}
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* ── Payment Methods ── */}
          <div className="space-y-1.5 relative z-10">

            {/* QR Payment Section — JazzCash / Botim / RedotPay */}
            {(DONATION_CONFIG.jazzcash.enabled || DONATION_CONFIG.botim.enabled || DONATION_CONFIG.redotpay.enabled) && (
              <div className="p-2 bg-white/8 rounded-xl">
                {/* Tabs */}
                <div className="grid grid-cols-3 gap-1 mb-1.5">
                  <button
                    onClick={() => setMobilePayTab('jazzcash')}
                    className={`py-1 px-1 rounded-lg font-medium text-[10px] transition-all flex items-center justify-center gap-1 ${
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
                    className={`py-1 px-1 rounded-lg font-medium text-[10px] transition-all flex items-center justify-center gap-1 ${
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
                    className={`py-1 px-1 rounded-lg font-medium text-[10px] transition-all flex items-center justify-center gap-1 ${
                      mobilePayTab === 'redotpay'
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    <span>🌐</span>
                    <span>Crypto</span>
                  </button>
                </div>

                {/* QR Code Display — compact */}
                <div
                  className="bg-white rounded-lg p-2 text-center cursor-pointer hover:shadow-lg transition-all group"
                  onClick={() => setShowEnlargedQR(true)}
                >
                  <p className="text-gray-600 font-medium text-[11px] mb-1">
                    {currentConfig.accountName}
                  </p>

                  <img
                    src={currentConfig.qrImage}
                    alt={`${mobilePayTab} QR Code`}
                    className="w-28 h-28 mx-auto object-contain rounded"
                  />

                  <p className="text-gray-400 text-[9px] mt-1">
                    Tap to enlarge
                  </p>

                  {/* JazzCash number */}
                  {mobilePayTab === 'jazzcash' && (
                    <div className="mt-1 pt-1 border-t border-gray-100 flex items-center justify-center gap-1.5">
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

            {/* PayPal — International */}
            {DONATION_CONFIG.paypal.enabled && (
              <a
                href={DONATION_CONFIG.paypal.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-2 bg-white/5 hover:bg-white/12 rounded-xl transition-all group ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-7 h-7 rounded-lg bg-[#003087] flex items-center justify-center shadow">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.384a.77.77 0 0 1 .757-.645h6.692c2.215 0 3.81.656 4.598 1.894.357.561.542 1.183.594 1.927.026.384.007.807-.059 1.277l-.016.097v.355l.278.158a3.22 3.22 0 0 1 .88.712c.43.51.68 1.16.764 1.927.087.79.011 1.724-.226 2.778-.272 1.21-.716 2.252-1.313 3.09a5.46 5.46 0 0 1-2.116 1.77c-.858.424-1.856.64-2.969.64H11.58a.943.943 0 0 0-.929.795l-.012.077-.353 2.233-.009.054a.943.943 0 0 1-.929.795H7.076z"/>
                  </svg>
                </div>
                <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                  <div className="text-white/70 font-medium text-xs">PayPal</div>
                  <div className="text-white/30 text-[10px]">International</div>
                </div>
                <Icons.ChevronRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/50" />
              </a>
            )}
          </div>

          {/* ── Footer ── */}
          <p
            className="text-center text-amber-200/50 text-xs"
            style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}
            dir="rtl"
            lang="ar"
          >
            {t('donate.jazakAllah')}
          </p>

        </div>
      </div>
    </div>
  );
});

export default DonateModal;
