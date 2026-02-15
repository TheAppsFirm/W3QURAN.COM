import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

/**
 * PremiumGate - Wrapper for premium features
 *
 * Usage:
 * <PremiumGate feature="hd-tts" fallback={<FreeVersion />}>
 *   <PremiumVersion />
 * </PremiumGate>
 */
export function PremiumGate({
  children,
  fallback = null,
  feature = 'premium',
  showUpgradePrompt = false,
}) {
  const { isPremium, isAuthenticated, login } = useAuth();

  // Premium users get the premium content
  if (isPremium) {
    return <>{children}</>;
  }

  // Show upgrade prompt if requested
  if (showUpgradePrompt) {
    return (
      <div className="relative">
        {/* Blurred preview of premium content */}
        <div className="blur-sm opacity-50 pointer-events-none">
          {children}
        </div>

        {/* Upgrade overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-xl">
          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-1">Premium Feature</h3>
            <p className="text-white/60 text-sm mb-4">
              {getFeatureDescription(feature)}
            </p>
            {isAuthenticated ? (
              <a
                href="/settings"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-medium rounded-full hover:shadow-lg transition-all"
              >
                Upgrade to Premium
              </a>
            ) : (
              <button
                onClick={login}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-800 font-medium rounded-full hover:shadow-lg transition-all"
              >
                Sign in to Unlock
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Return fallback content for free users
  return fallback;
}

function getFeatureDescription(feature) {
  const descriptions = {
    'hd-tts': 'High-quality male voice for translations',
    'cloud-sync': 'Sync your bookmarks and progress across devices',
    'ad-free': 'Enjoy an ad-free reading experience',
    'premium': 'This feature is available for premium members',
  };
  return descriptions[feature] || descriptions.premium;
}

/**
 * Hook to check if a specific feature is available
 */
export function usePremiumFeature(feature) {
  const { isPremium } = useAuth();
  return isPremium;
}

export default PremiumGate;
