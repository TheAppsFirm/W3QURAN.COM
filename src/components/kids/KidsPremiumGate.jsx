/**
 * KidsPremiumGate.jsx
 * Premium upgrade overlay for Kids Mode - shown when accessing locked features
 */

import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Icons } from '../common/Icons';

// Premium features list
const PREMIUM_FEATURES = [
  { emoji: '🌸', text: 'Garden Theme Journey' },
  { emoji: '🐪', text: 'Desert Camel Caravan' },
  { emoji: '📖', text: 'All Surah Stations (6+)' },
  { emoji: '🏍️', text: "Prophet's Life Journey" },
  { emoji: '🎵', text: 'All Audio Features' },
  { emoji: '⭐', text: 'Ad-free Experience' },
];

// Subscription tiers linking to main app premium
const SUBSCRIPTION_OPTIONS = [
  {
    id: 'premium_monthly',
    name: 'Monthly',
    price: '$4.99',
    period: '/month',
    popular: false,
  },
  {
    id: 'premium_yearly',
    name: 'Yearly',
    price: '$29.99',
    period: '/year',
    popular: true,
    savings: 'Save 50%',
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    price: '$49.99',
    period: 'one-time',
    popular: false,
  },
];

const KidsPremiumGate = ({ onClose, feature = 'premium', lockedTheme = null }) => {
  const { isAuthenticated, login } = useAuth();

  // Handle upgrade click - redirect to settings/upgrade page
  const handleUpgrade = (planId) => {
    // Navigate to settings page with plan pre-selected
    window.location.href = `/settings?upgrade=${planId}`;
  };

  // Get feature-specific message
  const getFeatureMessage = () => {
    if (lockedTheme === 'garden') {
      return {
        title: 'Garden Journey is Premium',
        emoji: '🌸',
        description: 'Unlock the beautiful flower garden adventure!',
      };
    }
    if (lockedTheme === 'seert' || lockedTheme === 'desert') {
      return {
        title: 'Desert Caravan is Premium',
        emoji: '🐪',
        description: 'Unlock the peaceful camel desert journey!',
      };
    }
    if (feature === 'station_limit') {
      return {
        title: 'More Stations Available!',
        emoji: '🚉',
        description: 'Upgrade to explore all surah stations beyond station 5!',
      };
    }
    return {
      title: 'Premium Feature',
      emoji: '⭐',
      description: 'Unlock all Quran Kids features!',
    };
  };

  const featureInfo = getFeatureMessage();

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 backdrop-blur-sm overflow-y-auto py-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all"
      >
        <Icons.X className="w-6 h-6" />
      </button>

      {/* Premium card */}
      <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-3xl p-6 max-w-lg mx-4 border border-white/20 shadow-2xl">
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
            <span className="text-white font-bold text-sm">PREMIUM</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white text-center mb-2">
          {featureInfo.title}
        </h2>
        <p className="text-white/80 text-center mb-4">
          {featureInfo.description}
        </p>

        {/* Features list */}
        <div className="bg-white/10 rounded-2xl p-4 mb-4">
          <h3 className="text-white/90 font-semibold mb-3 text-sm">What you get with Premium:</h3>
          <div className="grid grid-cols-2 gap-2">
            {PREMIUM_FEATURES.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 text-sm">
                <span>{feature.emoji}</span>
                <span>{feature.text}</span>
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
                className={`
                  w-full p-3 rounded-xl border-2 transition-all
                  ${option.popular
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 border-transparent text-white'
                    : 'bg-white/10 border-white/30 text-white hover:bg-white/20'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{option.name}</span>
                    {option.popular && (
                      <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-lg">{option.price}</span>
                    <span className="text-sm opacity-80">{option.period}</span>
                    {option.savings && (
                      <div className="text-xs text-yellow-300">{option.savings}</div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="mb-4">
            <p className="text-white/70 text-center text-sm mb-3">
              Sign in to upgrade to Premium
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
              <span>Sign in with Google</span>
            </button>
          </div>
        )}

        {/* Free tier reminder */}
        <div className="text-center">
          <button
            onClick={onClose}
            className="text-white/60 text-sm hover:text-white/80 transition-colors"
          >
            Continue with free features
          </button>
          <p className="text-white/40 text-xs mt-1">
            Train & Bike themes + first 5 stations free
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
