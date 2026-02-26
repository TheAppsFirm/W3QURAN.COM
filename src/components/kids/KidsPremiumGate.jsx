/**
 * KidsPremiumGate.jsx
 * Premium upgrade overlay for Kids Mode - shown when accessing locked features
 * Handles direct Stripe checkout and payment result display
 */

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from '../../contexts/LocaleContext';
import { Icons } from '../common/Icons';

// Premium features list - keys map to premium.* translations
const PREMIUM_FEATURE_KEYS = [
  { emoji: '🌸', key: 'premium.gardenTheme' },
  { emoji: '🐪', key: 'premium.desertCamelCaravan' },
  { emoji: '📖', key: 'premium.allSurahStations' },
  { emoji: '🏍️', key: 'premium.prophetLifeJourney' },
  { emoji: '🕋', key: 'premium.hajjPilgrimage' },
  { emoji: '🎵', key: 'premium.allAudioFeatures' },
  { emoji: '⭐', key: 'premium.adFreeExperience' },
];

// Subscription tiers linking to main app premium
const SUBSCRIPTION_OPTIONS = [
  {
    id: 'premium_monthly',
    nameKey: 'premium.monthly',
    price: '$4.99',
    periodKey: 'premium.perMonth',
    popular: false,
  },
  {
    id: 'premium_yearly',
    nameKey: 'premium.yearly',
    price: '$29.99',
    periodKey: 'premium.perYear',
    popular: true,
    savingsKey: 'premium.save50',
  },
  {
    id: 'lifetime',
    nameKey: 'premium.lifetime',
    price: '$49.99',
    periodKey: 'premium.oneTime',
    popular: false,
  },
];

// Payment Result Popup Component
const PaymentResultPopup = ({ success, canceled, onClose, onRetry, t }) => {
  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-sm mx-4 text-center shadow-2xl">
        {success ? (
          <>
            <div className="text-7xl mb-4 animate-bounce">🎉</div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">{t('premium.paymentSuccessful')}</h2>
            <p className="text-gray-600 mb-6">
              {t('premium.welcomePremium')}
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
            >
              {t('premium.startLearning')} 🚀
            </button>
          </>
        ) : canceled ? (
          <>
            <div className="text-7xl mb-4">🤔</div>
            <h2 className="text-2xl font-bold text-amber-600 mb-2">{t('premium.paymentCanceled')}</h2>
            <p className="text-gray-600 mb-6">
              {t('premium.cancelMessage')}
            </p>
            <div className="space-y-2">
              <button
                onClick={onRetry}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                {t('premium.tryAgain')}
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                {t('premium.continueFreeFeatures')}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-7xl mb-4">😔</div>
            <h2 className="text-2xl font-bold text-red-600 mb-2">{t('premium.paymentFailed')}</h2>
            <p className="text-gray-600 mb-6">
              {t('premium.failedMessage')}
            </p>
            <div className="space-y-2">
              <button
                onClick={onRetry}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                {t('premium.tryAgain')}
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                {t('premium.cancel')}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const KidsPremiumGate = ({ onClose, feature = 'premium', lockedTheme = null, returnPath = '/', source = 'kids', language: languageProp = 'en' }) => {
  const { isAuthenticated, login, refreshUser } = useAuth();
  const { t, isRTL: globalIsRTL, language: globalLanguage } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState(null);
  const [paymentResult, setPaymentResult] = useState(null); // 'success' | 'failed' | null

  // Payment result detection is handled by KidsMode.jsx at a higher level.
  // KidsPremiumGate only handles the checkout flow initiation.

  // Handle upgrade click - create Stripe checkout session
  const handleUpgrade = async (planId) => {
    setIsLoading(true);
    setLoadingPlan(planId);

    try {
      // Call checkout API to create Stripe session
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          productType: planId,
          source,
          successUrl: `${window.location.origin}${returnPath}${returnPath.includes('?') ? '&' : '?'}payment_success=1`,
          cancelUrl: `${window.location.origin}${returnPath}${returnPath.includes('?') ? '&' : '?'}payment_canceled=1`,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Checkout error:', error);
        setPaymentResult('failed');
        setIsLoading(false);
        setLoadingPlan(null);
        return;
      }

      const data = await response.json();

      // Redirect to Stripe checkout
      if (data.url) {
        // Mark that we're going to Stripe for payment (so we can detect if user returns without completing)
        localStorage.setItem('kids_payment_pending', 'true');
        window.location.href = data.url;
      } else {
        console.error('No checkout URL returned');
        setPaymentResult('failed');
        setIsLoading(false);
        setLoadingPlan(null);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setPaymentResult('failed');
      setIsLoading(false);
      setLoadingPlan(null);
    }
  };

  // Handle payment result popup close
  const handleResultClose = () => {
    setPaymentResult(null);
    if (paymentResult === 'success') {
      onClose(); // Close the premium gate on success
    }
  };

  // Get feature-specific message
  const getFeatureMessage = () => {
    if (lockedTheme === 'garden') {
      return {
        title: t('premium.gardenJourneyPremium'),
        emoji: '🌸',
        description: t('premium.unlockGardenDesc'),
      };
    }
    if (lockedTheme === 'seert' || lockedTheme === 'desert') {
      return {
        title: t('premium.desertCaravanPremium'),
        emoji: '🐪',
        description: t('premium.unlockDesertDesc'),
      };
    }
    if (lockedTheme === 'hajj-umrah') {
      return {
        title: t('premium.hajjJourneyPremium'),
        emoji: '🕋',
        description: t('premium.unlockHajjDesc'),
      };
    }
    if (feature === 'station_limit') {
      return {
        title: t('kids.moreStationsAvailable'),
        emoji: '🚉',
        description: t('kids.moreStationsDesc'),
      };
    }
    return {
      title: t('kids.premiumFeature'),
      emoji: '⭐',
      description: t('kids.premiumFeatureDesc'),
    };
  };

  const featureInfo = getFeatureMessage();

  const isRTL = globalIsRTL;

  // Show payment result popup if needed
  if (paymentResult) {
    return (
      <PaymentResultPopup
        success={paymentResult === 'success'}
        canceled={paymentResult === 'canceled'}
        onClose={handleResultClose}
        onRetry={() => setPaymentResult(null)}
        t={t}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 backdrop-blur-sm overflow-y-auto py-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all"
        disabled={isLoading}
      >
        <Icons.X className="w-6 h-6" />
      </button>

      {/* Premium card */}
      <div
        className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-3xl p-6 max-w-lg mx-4 border border-white/20 shadow-2xl"
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        {/* Top decoration */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="text-6xl">{featureInfo.emoji}</div>
            <div className="absolute -top-1 -right-1 text-xl animate-pulse">✨</div>
          </div>
        </div>

        {/* Premium badge */}
        <div className="flex justify-center mb-2 pt-6">
          <div className="px-4 py-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full">
            <span className="text-white font-bold text-sm">{t('premium.title')}</span>
          </div>
        </div>

        {/* Title */}
        <h2
          className="text-2xl font-bold text-white text-center mb-2"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', 'Scheherazade New', serif" : 'inherit' }}
        >
          {featureInfo.title}
        </h2>
        <p
          className="text-white/80 text-center mb-4"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {featureInfo.description}
        </p>

        {/* Features list */}
        <div className="bg-white/10 rounded-2xl p-4 mb-4">
          <h3
            className="text-white/90 font-semibold mb-3 text-sm"
            style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
          >{t('premium.whatYouGet')}</h3>
          <div className="grid grid-cols-2 gap-2">
            {PREMIUM_FEATURE_KEYS.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 text-sm">
                <span>{feat.emoji}</span>
                <span>{t(feat.key)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription options */}
        {isAuthenticated ? (
          <div className="space-y-2 mb-4">
            {SUBSCRIPTION_OPTIONS.map((option) => (
              <button
                key={option.id}
                onClick={() => handleUpgrade(option.id)}
                disabled={isLoading}
                className={`
                  w-full p-3 rounded-xl border-2 transition-all relative
                  ${option.popular
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 border-transparent text-white'
                    : 'bg-white/10 border-white/30 text-white hover:bg-white/20'
                  }
                  ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
                `}
              >
                {loadingPlan === option.id ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{t('premium.processing')}</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{t(option.nameKey)}</span>
                      {option.popular && (
                        <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">
                          {t('premium.mostPopular')}
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-lg">{option.price}</span>
                      <span className="text-sm opacity-80">{t(option.periodKey)}</span>
                      {option.savingsKey && (
                        <div className="text-xs text-yellow-300">{t(option.savingsKey)}</div>
                      )}
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        ) : (
          <div className="mb-4">
            <p
              className="text-white/70 text-center text-sm mb-3"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {t('premium.signInToUpgrade')}
            </p>
            <button
              onClick={login}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl shadow-lg transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>{t('premium.signInWithGoogle')}</span>
            </button>
          </div>
        )}

        {/* Free tier reminder */}
        <div className="text-center">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="text-white/60 text-sm hover:text-white/80 transition-colors disabled:opacity-50"
            style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
          >
            {t('premium.continueFree')}
          </button>
          <p
            className="text-white/40 text-xs mt-1"
            style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
          >
            {lockedTheme === 'hajj-umrah' ? t('premium.umrahFreeReminder') : t('premium.trainFreeReminder')}
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 left-4 text-xl animate-pulse">⭐</div>
        <div className="absolute bottom-4 right-4 text-xl animate-pulse" style={{ animationDelay: '0.3s' }}>✨</div>
      </div>
    </div>
  );
};

export default KidsPremiumGate;
