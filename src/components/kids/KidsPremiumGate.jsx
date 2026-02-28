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

// Subscription tiers — prices must match Stripe live price IDs
const SUBSCRIPTION_OPTIONS = [
  {
    id: 'starter_monthly',
    nameKey: 'premium.starter',
    price: '$3',
    periodKey: 'premium.perMonth',
    credits: 30,
  },
  {
    id: 'premium_monthly',
    nameKey: 'premium.premium',
    price: '$7',
    periodKey: 'premium.perMonth',
    credits: 80,
    popular: true,
  },
  {
    id: 'premium_yearly',
    nameKey: 'premium.premiumYearly',
    price: '$60',
    periodKey: 'premium.perYear',
    credits: 80,
    savingsKey: 'premium.save29',
  },
  {
    id: 'scholar_monthly',
    nameKey: 'premium.scholar',
    price: '$20',
    periodKey: 'premium.perMonth',
    credits: 300,
  },
  {
    id: 'scholar_yearly',
    nameKey: 'premium.scholarYearly',
    price: '$200',
    periodKey: 'premium.perYear',
    credits: 300,
    savingsKey: 'premium.save17',
  },
  {
    id: 'lifetime',
    nameKey: 'premium.lifetime',
    price: '$299',
    periodKey: 'premium.oneTime',
    credits: 100,
    isLifetime: true,
  },
];

// Payment Result Popup Component
const PaymentResultPopup = ({ success, canceled, onClose, onRetry, t }) => {
  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-3xl p-8 max-w-sm mx-4 text-center shadow-2xl">
        {success ? (
          <>
            <div className="text-7xl mb-4 animate-bounce">🎉</div>
            <h2 className="text-2xl font-bold text-green-400 mb-2">{t('premium.paymentSuccessful')}</h2>
            <p className="text-white/70 mb-6">
              {t('premium.welcomePremium')}
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all"
            >
              {t('premium.startLearning')} 🚀
            </button>
          </>
        ) : canceled ? (
          <>
            <div className="text-7xl mb-4">🤔</div>
            <h2 className="text-2xl font-bold text-amber-400 mb-2">{t('premium.paymentCanceled')}</h2>
            <p className="text-white/70 mb-6">
              {t('premium.cancelMessage')}
            </p>
            <div className="space-y-2">
              <button
                onClick={onRetry}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all"
              >
                {t('premium.tryAgain')}
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 text-white/50 hover:text-white/80 transition-colors"
              >
                {t('premium.continueFreeFeatures')}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-7xl mb-4">😔</div>
            <h2 className="text-2xl font-bold text-red-400 mb-2">{t('premium.paymentFailed')}</h2>
            <p className="text-white/70 mb-6">
              {t('premium.failedMessage')}
            </p>
            <div className="space-y-2">
              <button
                onClick={onRetry}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all"
              >
                {t('premium.tryAgain')}
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 text-white/50 hover:text-white/80 transition-colors"
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
        // Store payment context so App.jsx can route back correctly
        localStorage.setItem('kids_payment_pending', 'true');
        localStorage.setItem('payment_source', source);
        localStorage.setItem('payment_feature', feature);
        localStorage.setItem('payment_return_path', returnPath);
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
    if (feature === 'daily_limit') {
      return {
        title: t('premium.dailyLimitReached', 'Daily Limit Reached'),
        emoji: '📝',
        description: t('premium.dailyLimitDesc', 'You\'ve used all your free daily posts and comments. Upgrade to Premium for unlimited discussions!'),
      };
    }
    if (feature === 'talk_to_quran') {
      return {
        title: t('premium.talkToQuranPremium', 'Talk to Quran — Premium'),
        emoji: '🤖',
        description: t('premium.talkToQuranDesc', 'Unlock unlimited AI-powered conversations with the Quran. Ask questions, explore meanings, and deepen your understanding.'),
      };
    }
    if (feature === 'hd-tts') {
      return {
        title: t('premium.hdVoicePremium', 'HD Voice is Premium'),
        emoji: '🎧',
        description: t('premium.hdVoiceDesc', 'Get crystal-clear HD text-to-speech with natural voices in Urdu, Arabic, and more.'),
      };
    }
    if (feature === 'treebank') {
      return {
        title: t('premium.treebankPremium', 'Grammar Analysis is Premium'),
        emoji: '📖',
        description: t('premium.treebankDesc', 'Get detailed morphological analysis and dependency trees for all 114 surahs.'),
      };
    }
    if (feature === 'premium') {
      return {
        title: t('premium.upgradeToPremium', 'Upgrade to Premium'),
        emoji: '⭐',
        description: t('premium.upgradeDesc', 'Unlock all premium features including cloud sync, Talk to Quran, HD audio, and more.'),
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
      {/* Premium card */}
      <div
        className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-4 max-w-md mx-4 border border-white/20 shadow-2xl"
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        {/* Header row: emoji + title + badge */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center shrink-0">
            <span className="text-lg">{featureInfo.emoji}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h2
              className="text-lg font-bold text-white leading-tight"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', 'Scheherazade New', serif" : 'inherit' }}
            >
              {featureInfo.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="p-1.5 rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all shrink-0"
          >
            <Icons.X className="w-4 h-4" />
          </button>
        </div>

        <p
          className="text-white/70 text-sm mb-3"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {featureInfo.description}
        </p>

        {/* Compact features list */}
        <div className="bg-white/10 rounded-xl p-3 mb-3">
          <div className="grid grid-cols-2 gap-1.5">
            {PREMIUM_FEATURE_KEYS.map((feat, i) => (
              <div key={i} className="flex items-center gap-1.5 text-white/70 text-xs">
                <span className="text-xs">{feat.emoji}</span>
                <span>{t(feat.key)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription options */}
        {isAuthenticated ? (
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            {SUBSCRIPTION_OPTIONS.map((option) => (
              <button
                key={option.id}
                onClick={() => handleUpgrade(option.id)}
                disabled={isLoading}
                className={`
                  p-2 rounded-lg border transition-all relative text-center
                  ${option.popular
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 border-transparent text-white'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                  }
                  ${option.isLifetime ? 'col-span-2' : ''}
                  ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
                `}
              >
                {option.popular && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-px bg-yellow-400 text-yellow-900 rounded-full text-[9px] font-bold">
                    {t('premium.mostPopular')}
                  </span>
                )}
                {option.savingsKey && (
                  <span className={`absolute -top-2 ${isRTL ? 'left-1' : 'right-1'} px-1.5 py-px bg-green-400 text-green-900 rounded-full text-[9px] font-bold`}>
                    {t(option.savingsKey)}
                  </span>
                )}
                {loadingPlan === option.id ? (
                  <div className="flex items-center justify-center gap-1.5">
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs">{t('premium.processing')}</span>
                  </div>
                ) : (
                  <>
                    <p className="font-bold text-xs">{t(option.nameKey)}</p>
                    <p className="text-[10px] opacity-70">{option.credits} {t('premium.creditsPerMo', 'credits/mo')}</p>
                    <p className="font-bold text-base leading-tight">
                      {option.price}<span className="text-xs font-normal opacity-80">{t(option.periodKey)}</span>
                    </p>
                  </>
                )}
              </button>
            ))}
          </div>
        ) : (
          <div className="mb-3">
            <p
              className="text-white/70 text-center text-xs mb-2"
              style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
            >
              {t('premium.signInToUpgrade')}
            </p>
            <button
              onClick={login}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl shadow-lg transition-all text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>{t('premium.signInWithGoogle')}</span>
            </button>
          </div>
        )}

        {/* Free tier reminder */}
        <button
          onClick={onClose}
          disabled={isLoading}
          className="w-full text-white/50 text-xs hover:text-white/70 transition-colors disabled:opacity-50 py-1"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {t('premium.continueFree')}
        </button>
      </div>
    </div>
  );
};

export default KidsPremiumGate;
