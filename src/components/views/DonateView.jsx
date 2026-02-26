/**
 * DonateView Component
 * Single Responsibility: Display donation options with functional handlers
 */

import { useState, useCallback } from 'react';
import { Icons } from '../common/Icons';
import { PALETTES } from '../../data';
import { useTranslation } from '../../contexts/LocaleContext';

function DonateView({ darkMode }) {
  const { t, isRTL } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  // Handle back navigation
  const handleBack = () => {
    window.history.back();
  };

  const amounts = [5, 10, 25, 50, 100, 'Custom'];

  // Handle donation selection
  const handleDonate = useCallback((amount) => {
    if (amount === 'Custom') {
      setSelectedAmount('Custom');
    } else {
      setSelectedAmount(amount);
      // In a real app, this would open a payment gateway
      // For now, show a thank you message
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        setSelectedAmount(null);
      }, 3000);
    }
  }, []);

  // Handle custom amount submission
  const handleCustomSubmit = useCallback(() => {
    const amount = parseFloat(customAmount);
    if (amount > 0) {
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        setSelectedAmount(null);
        setCustomAmount('');
      }, 3000);
    }
  }, [customAmount]);

  return (
    <div className={`h-full flex flex-col overflow-auto ${darkMode ? 'text-white' : ''}`}>
      {/* Header with back button */}
      <div className={`sticky top-0 z-10 backdrop-blur-xl ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3 p-4">
          <button
            onClick={handleBack}
            className={`p-2.5 rounded-full transition-all active:scale-95 ${darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
            title="Go back"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <Icons.ChevronLeft className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-600'}`} />
          </button>
          <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {t('donate.title')}
          </h2>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg mb-4">
            <Icons.Heart className="w-8 h-8 text-white" />
          </div>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {t('donate.subtitle')}
          </p>
        </div>

        {/* Thank You Message */}
        {showThankYou && (
          <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-center shadow-lg animate-pulse">
            <Icons.Check className="w-8 h-8 mx-auto mb-2" />
            <p className="font-bold text-lg">{t('donate.thankYou')}</p>
            <p className="text-sm opacity-90">May Allah reward you abundantly</p>
          </div>
        )}

        {/* Custom Amount Input */}
        {selectedAmount === 'Custom' && !showThankYou && (
          <div className={`mb-6 p-4 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Enter custom amount
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="0"
                  className={`w-full pl-8 pr-4 py-3 rounded-xl border ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-50 border-gray-200 text-gray-800'
                  }`}
                  autoFocus
                />
              </div>
              <button
                onClick={handleCustomSubmit}
                disabled={!customAmount || parseFloat(customAmount) <= 0}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50"
              >
                {t('donate.donateNow')}
              </button>
            </div>
            <button
              onClick={() => setSelectedAmount(null)}
              className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
            >
              {t('common.cancel')}
            </button>
          </div>
        )}

        {/* Amount Grid */}
        <div className="grid grid-cols-3 gap-4">
          {amounts.map((a, i) => {
            const p = PALETTES[(i + 6) % 10];
            const isSelected = selectedAmount === a;
            return (
              <button
                key={i}
                onClick={() => handleDonate(a)}
                disabled={showThankYou}
                className={`relative rounded-2xl p-6 text-center cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all disabled:opacity-50 ${
                  isSelected ? 'ring-4 ring-white ring-offset-2 scale-105' : ''
                }`}
                style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]}, ${p.colors[2]})` }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    background: `
                      radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 50%),
                      radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)
                    `,
                  }}
                />
                <div className="relative z-10">
                  <Icons.Heart className="w-10 h-10 mx-auto text-white mb-2" />
                  <p className="font-bold text-white text-xl">{typeof a === 'number' ? `$${a}` : a}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Info Section */}
        <div className={`mt-8 p-4 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Your support helps us:
          </h3>
          <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <li className="flex items-center gap-2">
              <Icons.Check className="w-4 h-4 text-emerald-500" />
              Keep the app free for everyone
            </li>
            <li className="flex items-center gap-2">
              <Icons.Check className="w-4 h-4 text-emerald-500" />
              Add new features and translations
            </li>
            <li className="flex items-center gap-2">
              <Icons.Check className="w-4 h-4 text-emerald-500" />
              Maintain server costs and audio hosting
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default DonateView;
