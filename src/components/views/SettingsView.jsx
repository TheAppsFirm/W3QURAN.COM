/**
 * SettingsView Component
 * Single Responsibility: Manage app settings with localStorage persistence
 */

import { useState, useEffect } from 'react';
import { Icons } from '../common/Icons';
import { useLocalStorage } from '../../hooks';
import { isSoundEnabled, setSoundEnabled } from '../../utils/soundUtils';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from '../../contexts/LocaleContext';

// Product types - backend resolves correct price for test/live mode
const PRODUCTS = {
  starter_monthly: 'starter_monthly',
  premium_monthly: 'premium_monthly',
  premium_yearly: 'premium_yearly',
  scholar_monthly: 'scholar_monthly',
  scholar_yearly: 'scholar_yearly',
  lifetime: 'lifetime',
  credits_20: 'credits_20',
  credits_50: 'credits_50',
  credits_100: 'credits_100',
};

// Subscription tier info
const SUBSCRIPTION_TIERS = [
  { id: 'starter', name: 'Starter', credits: 30, price: '$3/mo', product: PRODUCTS.starter_monthly, color: 'from-blue-400 to-blue-500' },
  { id: 'premium', name: 'Premium', credits: 80, price: '$7/mo', product: PRODUCTS.premium_monthly, color: 'from-purple-400 to-purple-500', popular: true },
  { id: 'scholar', name: 'Scholar', credits: 300, price: '$15/mo', product: PRODUCTS.scholar_monthly, color: 'from-amber-400 to-amber-500' },
  { id: 'lifetime', name: 'Lifetime', credits: 100, price: '$99', product: PRODUCTS.lifetime, color: 'from-emerald-400 to-emerald-500', oneTime: true },
];

// Credit packs
const CREDIT_PACKS = [
  { credits: 20, price: '$2', product: PRODUCTS.credits_20 },
  { credits: 50, price: '$4', product: PRODUCTS.credits_50 },
  { credits: 100, price: '$7', product: PRODUCTS.credits_100 },
];

function SettingsView({ darkMode, setDarkMode, onNavigate }) {
  const { t, isRTL } = useTranslation();
  const { user, subscription, isPremium, isAdmin, loading: authLoading, refreshUser } = useAuth();
  const [upgradeLoading, setUpgradeLoading] = useState(null);
  const [upgradeError, setUpgradeError] = useState(null);
  const [syncStatus, setSyncStatus] = useState(null); // 'syncing' | 'success' | 'error'
  const [lastSynced, setLastSynced] = useLocalStorage('last_synced', null);
  const [credits, setCredits] = useState(null);
  const [creditsLoading, setCreditsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // 'success' | 'canceled'
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState('general');
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [feedbackStatus, setFeedbackStatus] = useState(null); // 'sending' | 'sent' | 'error'
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [blockedLoading, setBlockedLoading] = useState(false);
  const [unblockingId, setUnblockingId] = useState(null);

  // Check for payment redirect
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get('payment');
    if (payment === 'success' || payment === 'canceled') {
      setPaymentStatus(payment);
      window.history.replaceState({}, '', '/settings');
      const timer = setTimeout(() => setPaymentStatus(null), 5000);
      if (payment === 'success') {
        fetchCredits();
        refreshUser(); // Refresh auth state so premium status updates immediately
      }
      return () => clearTimeout(timer);
    }
  }, []);

  // Fetch Talk to Quran credits
  useEffect(() => {
    if (user) {
      fetchCredits();
    }
  }, [user]);

  const fetchCredits = async () => {
    setCreditsLoading(true);
    try {
      const res = await fetch('/api/credits', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        setCredits(data.credits);
      }
    } catch (e) {
      console.error('Failed to fetch credits:', e);
    }
    setCreditsLoading(false);
  };

  // Fetch blocked users list
  useEffect(() => {
    if (user) {
      fetchBlockedUsers();
    }
  }, [user]);

  const fetchBlockedUsers = async () => {
    setBlockedLoading(true);
    try {
      const res = await fetch('/api/discussions/block', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        setBlockedUsers(data.blocked || []);
      }
    } catch (e) {
      console.error('Failed to fetch blocked users:', e);
    }
    setBlockedLoading(false);
  };

  const handleUnblock = async (userId) => {
    setUnblockingId(userId);
    try {
      const res = await fetch(`/api/discussions/block/${userId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (res.ok) {
        setBlockedUsers(prev => prev.filter(u => u.userId !== userId));
      }
    } catch (e) {
      console.error('Failed to unblock user:', e);
    }
    setUnblockingId(null);
  };

  const handleCheckout = async (product) => {
    setUpgradeLoading(product);
    setUpgradeError(null);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ product, source: 'general' }),
      });
      if (!res.ok) {
        setUpgradeError('Server error. Please try again.');
        setUpgradeLoading(null);
        return;
      }
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setUpgradeError(data.error || 'Failed to start checkout');
      }
    } catch (e) {
      setUpgradeError('Network error. Please try again.');
    }
    setUpgradeLoading(null);
  };
  // All settings persisted to localStorage - using same keys as reader for sync
  const [notifications, setNotifications] = useLocalStorage('settings_notifications', true);
  const [autoPlayAudio, setAutoPlayAudio] = useLocalStorage('settings_autoplay', false);
  const [hoverSounds, setHoverSounds] = useLocalStorage('w3quran_sound_enabled', isSoundEnabled());
  const [showTranslation, setShowTranslation] = useLocalStorage('reader_show_translation', true);
  const [tajweedHighlight, setTajweedHighlight] = useLocalStorage('reader_tajweed', false);
  const [wordByWord, setWordByWord] = useLocalStorage('reader_wbw', false);
  const [fontSize, setFontSize] = useLocalStorage('reader_fontsize', 'medium');
  const [reciter, setReciter] = useLocalStorage('reader_reciter', 'ar.alafasy');
  const [showEmail, setShowEmail] = useLocalStorage('privacy_show_email', false);
  const [allowDMs, setAllowDMs] = useLocalStorage('privacy_allow_dms', true);
  const [privacySynced, setPrivacySynced] = useState(false);

  // Sync privacy settings to server whenever they change
  useEffect(() => {
    if (!user || !privacySynced) return; // Skip initial render
    fetch('/api/user/preferences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ show_email: showEmail, allow_dms: allowDMs }),
    }).catch(() => {});
  }, [showEmail, allowDMs, user, privacySynced]);

  // Load privacy settings from server on mount
  useEffect(() => {
    if (!user) return;
    fetch('/api/user/preferences', { credentials: 'include' })
      .then(r => r.json())
      .then(data => {
        if (data.show_email !== undefined) setShowEmail(data.show_email);
        if (data.allow_dms !== undefined) setAllowDMs(data.allow_dms);
        // Mark as synced so future changes trigger server updates
        setTimeout(() => setPrivacySynced(true), 100);
      })
      .catch(() => setPrivacySynced(true));
  }, [user]);

  const settingsToggle = [
    { key: 'notify', label: t('settings.notifications'), icon: Icons.Bell, value: notifications, setter: setNotifications, desc: 'Daily verse and prayer reminders' },
    { key: 'auto', label: t('settingsExtended.autoPlayAudio'), icon: Icons.Volume, value: autoPlayAudio, setter: setAutoPlayAudio, desc: 'Automatically play next ayah' },
    { key: 'trans', label: t('settingsExtended.showTranslation'), icon: Icons.Globe, value: showTranslation, setter: setShowTranslation, desc: 'Display English translation' },
    { key: 'tajweed', label: t('settingsExtended.tajweedHighlighting'), icon: Icons.Sparkles, value: tajweedHighlight, setter: setTajweedHighlight, desc: 'Color-code tajweed rules' },
    { key: 'wordByWord', label: t('settingsExtended.wordByWordMode'), icon: Icons.Layers, value: wordByWord, setter: setWordByWord, desc: 'Show word meanings on tap' },
  ];

  const fontSizes = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'xlarge', label: 'Extra Large' },
  ];

  const reciters = [
    { value: 'ar.alafasy', label: 'Mishary Alafasy' },
    { value: 'ar.abdurrahmaansudais', label: 'Abdul Rahman Al-Sudais' },
    { value: 'ar.abdulsamad', label: 'Abdul Samad' },
    { value: 'ar.husary', label: 'Mahmoud Al-Husary' },
    { value: 'ar.minshawi', label: 'Mohamed Al-Minshawi' },
    { value: 'ar.shaatree', label: 'Abu Bakr Al-Shatri' },
  ];

  // Handler for hover sounds toggle - sync with soundUtils
  const handleHoverSoundsToggle = (value) => {
    setHoverSounds(value);
    setSoundEnabled(value);
  };

  return (
    <div className={`h-full overflow-auto p-6 ${darkMode ? 'text-white' : ''}`}
      style={{ paddingTop: 'max(1.5rem, env(safe-area-inset-top))', paddingBottom: 'max(6rem, calc(env(safe-area-inset-bottom, 0px) + 6rem))' }}
    >
      <div className="max-w-lg mx-auto">
        {/* Back Button */}
        <button
          onClick={() => onNavigate && onNavigate('surahs')}
          className={`flex items-center gap-2 mb-6 px-4 py-3 rounded-xl transition-all active:scale-95 ${
            darkMode
              ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          }`}
          style={{ minHeight: 44 }}
        >
          <Icons.ChevronLeft className="w-5 h-5 rtl:rotate-180" />
          <span className="font-medium">Back to Home</span>
        </button>

        <h2 className={`text-3xl font-bold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {t('settings.title')}
        </h2>
        <p className={`text-center mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Customize your experience
        </p>

        {/* Payment Status Banner */}
        {paymentStatus && (
          <div className={`mb-6 p-4 rounded-2xl border transition-all animate-pulse ${
            paymentStatus === 'success'
              ? 'bg-emerald-500/20 border-emerald-500/30'
              : 'bg-amber-500/20 border-amber-500/30'
          }`}>
            <div className="flex items-center justify-center gap-3">
              {paymentStatus === 'success' ? (
                <>
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Icons.Check className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-center">
                    <p className={`font-bold ${darkMode ? 'text-emerald-300' : 'text-emerald-700'}`}>
                      Payment Successful!
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                      Your subscription is now active
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                    <Icons.X className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-center">
                    <p className={`font-bold ${darkMode ? 'text-amber-300' : 'text-amber-700'}`}>
                      Payment Canceled
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                      No charges were made
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Admin Section - Show for admin users */}
        {(isAdmin || user?.email === 'ziadevtmc@gmail.com') && (
          <div className="mb-6">
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Admin
            </h3>
            <button
              onClick={() => onNavigate && onNavigate('admin')}
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3">
                <Icons.Shield className="w-6 h-6" />
                <div className="text-left">
                  <p className="font-bold">{t('settings.adminDashboard')}</p>
                  <p className="text-white/70 text-sm">User management & sales</p>
                </div>
              </div>
              <Icons.ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Subscription Section - Only show when logged in */}
        {user && (
          <div className="mb-6">
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {t('settings.subscription')}
            </h3>

            <div className={`rounded-2xl p-4 shadow-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              {/* Current Plan */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isPremium ? 'bg-gradient-to-r from-amber-400 to-orange-500' : 'bg-gray-500/20'}`}>
                    {isPremium ? (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ) : (
                      <Icons.Users className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    )}
                  </div>
                  <div>
                    <span className={`font-bold block ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {isPremium ? t('settingsExtended.premiumPlan') : t('auth.freePlan')}
                    </span>
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {isPremium ? 'All features unlocked' : 'Basic features'}
                    </span>
                  </div>
                </div>
                {isPremium && (
                  <span className="px-3 py-1 bg-gradient-to-r from-amber-400/20 to-orange-500/20 text-amber-400 text-xs font-medium rounded-full">
                    Active
                  </span>
                )}
              </div>

              {/* Upgrade Options - Show if not premium */}
              {!isPremium && (
                <div className="space-y-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Unlock premium features:
                  </p>
                  <ul className={`text-xs space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <li className="flex items-center gap-2">
                      <Icons.Check className="w-3 h-3 text-emerald-500" /> HD Male Voice TTS
                    </li>
                    <li className="flex items-center gap-2">
                      <Icons.Check className="w-3 h-3 text-emerald-500" /> Cloud Sync Across Devices
                    </li>
                    <li className="flex items-center gap-2">
                      <Icons.Check className="w-3 h-3 text-emerald-500" /> Ad-Free Experience
                    </li>
                  </ul>

                  {/* Error Message */}
                  {upgradeError && (
                    <div className="mb-3 p-3 bg-red-500/20 border border-red-500/30 rounded-xl">
                      <p className="text-red-400 text-sm text-center">{upgradeError}</p>
                    </div>
                  )}

                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => handleCheckout(PRODUCTS.premium_monthly)}
                      disabled={upgradeLoading}
                      className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all disabled:opacity-50"
                    >
                      {upgradeLoading === PRODUCTS.premium_monthly ? 'Loading...' : '$7/mo'}
                    </button>
                    <button
                      onClick={() => handleCheckout(PRODUCTS.premium_yearly)}
                      disabled={upgradeLoading}
                      className="flex-1 py-2 px-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all disabled:opacity-50"
                    >
                      {upgradeLoading === PRODUCTS.premium_yearly ? 'Loading...' : '$49/yr'}
                    </button>
                  </div>
                  <p className={`text-xs text-center ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    Yearly saves 40%
                  </p>
                </div>
              )}

              {/* Manage Subscription - Show if premium but NOT for admin-only access */}
              {isPremium && !isAdmin && (
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  {/* Portal Error Message */}
                  {upgradeError && (
                    <div className="mb-3 p-3 bg-red-500/20 border border-red-500/30 rounded-xl">
                      <p className="text-red-400 text-sm text-center">{upgradeError}</p>
                    </div>
                  )}
                  <button
                    onClick={async () => {
                      setUpgradeError(null);
                      setUpgradeLoading('portal');
                      try {
                        const res = await fetch('/api/stripe/portal', { method: 'POST', credentials: 'include' });
                        const data = await res.json();
                        if (data.url) {
                          window.location.href = data.url;
                        } else if (data.code === 'MODE_MISMATCH') {
                          setUpgradeError('Your subscription was created in test mode and cannot be managed in live mode. Please contact support.');
                        } else {
                          setUpgradeError(data.error || 'Failed to open portal');
                        }
                      } catch (e) {
                        setUpgradeError('Network error. Please try again.');
                      }
                      setUpgradeLoading(null);
                    }}
                    disabled={upgradeLoading === 'portal'}
                    className={`w-full py-2 px-4 rounded-xl font-medium transition-all ${
                      darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } ${upgradeLoading === 'portal' ? 'opacity-50' : ''}`}
                  >
                    {upgradeLoading === 'portal' ? t('common.loading') : t('settings.manageSubscription')}
                  </button>
                </div>
              )}

              {/* Admin Notice */}
              {isAdmin && (
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className={`text-center py-2 px-4 rounded-xl ${
                    darkMode ? 'bg-red-900/20 text-red-400' : 'bg-red-50 text-red-600'
                  }`}>
                    <div className="flex items-center justify-center gap-2">
                      <Icons.Shield className="w-4 h-4" />
                      <span className="text-sm font-medium">Admin Access - Unlimited</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Talk to Quran Credits Section */}
        {user && (
          <div className="mb-6">
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Talk to Quran
            </h3>

            <div className={`rounded-2xl p-4 shadow-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              {creditsLoading ? (
                <div className="flex items-center justify-center py-4">
                  <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <>
                  {/* Credit Balance Display */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isAdmin ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                        credits?.tier === 'free' ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                        'bg-gradient-to-r from-purple-500 to-pink-500'
                      }`}>
                        <Icons.MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            {isAdmin ? '∞' : credits?.balance ?? 0}
                          </span>
                          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {isAdmin ? '' : credits?.tier === 'free' ? 'left today' : 'credits'}
                          </span>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${
                          isAdmin ? 'bg-red-500/20 text-red-400' :
                          credits?.tier === 'free' ? 'bg-gray-500/20 text-gray-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {isAdmin ? 'Admin' : credits?.tier || 'free'}
                        </span>
                      </div>
                    </div>

                    {/* Usage Stats */}
                    {!isAdmin && credits && (
                      <div className={`text-right text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {credits.tier === 'free' ? (
                          <>
                            <p>{credits.dailyUsed || 0} / {credits.dailyLimit || 5} today</p>
                            <p>Resets daily</p>
                          </>
                        ) : (
                          <>
                            <p>{credits.usedThisMonth || 0} used this month</p>
                            <p>Resets: {credits.resetDate ? new Date(credits.resetDate).toLocaleDateString() : 'N/A'}</p>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Admin Message */}
                  {isAdmin && (
                    <div className="p-3 rounded-xl bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 mb-4">
                      <p className={`text-sm text-center ${darkMode ? 'text-red-300' : 'text-red-600'}`}>
                        Unlimited access as Admin
                      </p>
                    </div>
                  )}

                  {/* Free User - Premium Lock */}
                  {!isAdmin && credits?.tier === 'free' && (
                    <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 mb-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        <Icons.Lock className="w-5 h-5 text-amber-500" />
                        <p className={`text-sm ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}>
                          Talk to Quran is a premium feature
                        </p>
                      </div>

                      <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Upgrade to unlock AI-powered Quranic conversations:
                      </p>

                      {/* Subscription Tiers */}
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        {SUBSCRIPTION_TIERS.slice(0, 2).map((tier) => (
                          <button
                            key={tier.id}
                            onClick={() => handleCheckout(tier.product)}
                            disabled={upgradeLoading}
                            className={`relative p-3 rounded-xl text-center transition-all hover:scale-105 ${
                              upgradeLoading === tier.product ? 'opacity-50' : ''
                            } bg-gradient-to-r ${tier.color} text-white`}
                          >
                            {tier.popular && (
                              <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
                                POPULAR
                              </span>
                            )}
                            <p className="font-bold">{tier.name}</p>
                            <p className="text-xs opacity-80">{tier.credits} credits/mo</p>
                            <p className="text-sm font-medium mt-1">{tier.price}</p>
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => handleCheckout(PRODUCTS.lifetime)}
                        disabled={upgradeLoading}
                        className="w-full p-3 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 text-white text-center transition-all hover:scale-105"
                      >
                        <p className="font-bold">Lifetime - $99 one-time</p>
                        <p className="text-xs opacity-80">100 credits/month forever</p>
                      </button>
                    </div>
                  )}

                  {/* Paid User - Buy More Credits */}
                  {!isAdmin && credits?.tier !== 'free' && (
                    <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                      <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Need more credits?
                      </p>
                      <div className="flex gap-2">
                        {CREDIT_PACKS.map((pack) => (
                          <button
                            key={pack.credits}
                            onClick={() => handleCheckout(pack.product)}
                            disabled={upgradeLoading}
                            className={`flex-1 p-2 rounded-xl text-center transition-all hover:scale-105 ${
                              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                            } ${upgradeLoading === pack.product ? 'opacity-50' : ''}`}
                          >
                            <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                              +{pack.credits}
                            </p>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {pack.price}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {upgradeError && (
                    <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded-xl">
                      <p className="text-red-400 text-sm text-center">{upgradeError}</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {/* Cloud Sync Section - Premium Only */}
        {user && (
          <div className="mb-6">
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Cloud Sync
            </h3>

            <div className={`rounded-2xl p-4 shadow-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              {isPremium ? (
                <>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                        <Icons.Cloud className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className={`font-bold block ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                          Sync Your Data
                        </span>
                        <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {lastSynced ? `Last synced: ${new Date(lastSynced).toLocaleString()}` : 'Never synced'}
                        </span>
                      </div>
                    </div>
                    {syncStatus === 'success' && (
                      <span className="text-emerald-400 text-xs">Synced!</span>
                    )}
                  </div>

                  {syncStatus === 'error' && (
                    <div className="mb-3 p-2 bg-red-500/20 border border-red-500/30 rounded-lg">
                      <p className="text-red-400 text-xs text-center">Sync failed. Please try again.</p>
                    </div>
                  )}

                  <button
                    onClick={async () => {
                      setSyncStatus('syncing');
                      try {
                        // Gather local data to sync
                        const bookmarks = localStorage.getItem('bookmarks');
                        const progress = localStorage.getItem('readingProgress');

                        // Upload bookmarks
                        if (bookmarks) {
                          await fetch('/api/user/sync', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            credentials: 'include',
                            body: JSON.stringify({ dataType: 'bookmarks', data: JSON.parse(bookmarks) }),
                          });
                        }

                        // Upload progress
                        if (progress) {
                          await fetch('/api/user/sync', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            credentials: 'include',
                            body: JSON.stringify({ dataType: 'progress', data: JSON.parse(progress) }),
                          });
                        }

                        setLastSynced(Date.now());
                        setSyncStatus('success');
                        setTimeout(() => setSyncStatus(null), 3000);
                      } catch (e) {
                        setSyncStatus('error');
                      }
                    }}
                    disabled={syncStatus === 'syncing'}
                    className={`w-full py-2 px-4 rounded-xl font-medium transition-all ${
                      syncStatus === 'syncing'
                        ? 'bg-gray-500 text-white cursor-wait'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/30'
                    }`}
                  >
                    {syncStatus === 'syncing' ? 'Syncing...' : 'Sync Now'}
                  </button>
                </>
              ) : (
                <div className="text-center py-2">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-500/20 flex items-center justify-center">
                    <Icons.Lock className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className={`font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Cloud Sync is Premium
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Upgrade to sync bookmarks and progress across devices
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Appearance Section */}
        <div className="mb-6">
          <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {t('settings.appearance')}
          </h3>

          {/* Dark Mode Toggle */}
          <div
            className={`rounded-2xl p-4 shadow-lg border mb-3 ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {darkMode ? (
                  <Icons.Moon className="w-5 h-5 text-purple-400" />
                ) : (
                  <Icons.Sun className="w-5 h-5 text-amber-500" />
                )}
                <div>
                  <span className={`font-bold block ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t('settings.darkMode')}</span>
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Easier on the eyes</span>
                </div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-14 h-8 rounded-full relative transition-all ${
                  darkMode
                    ? 'bg-gradient-to-r from-purple-500 to-violet-500 shadow-lg shadow-purple-500/30'
                    : 'bg-gray-200'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all ${
                    darkMode ? 'left-7' : 'left-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Font Size Selection */}
          <div
            className={`rounded-2xl p-4 shadow-lg border ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <Icons.Type className="w-5 h-5 text-blue-500" />
              <div>
                <span className={`font-bold block ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t('settingsExtended.arabicFontSize')}</span>
                <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Adjust reading comfort</span>
              </div>
            </div>
            <div className="flex gap-2">
              {fontSizes.map((size) => (
                <button
                  key={size.value}
                  onClick={() => setFontSize(size.value)}
                  className={`flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                    fontSize === size.value
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                      : darkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Audio Section */}
        <div className="mb-6">
          <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {t('settings.audio')}
          </h3>

          {/* Reciter Selection */}
          <div
            className={`rounded-2xl p-4 shadow-lg border ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <Icons.Mic className="w-5 h-5 text-emerald-500" />
              <div>
                <span className={`font-bold block ${darkMode ? 'text-white' : 'text-gray-800'}`}>Default Reciter</span>
                <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Choose your preferred Qari</span>
              </div>
            </div>
            <select
              value={reciter}
              onChange={(e) => setReciter(e.target.value)}
              className={`w-full p-3 rounded-xl border transition-all ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-gray-50 border-gray-200 text-gray-800'
              }`}
            >
              {reciters.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          {/* Hover Sounds Toggle */}
          <div
            className={`rounded-2xl p-4 shadow-lg border mt-3 ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icons.Volume className={`w-5 h-5 ${hoverSounds ? 'text-cyan-500' : darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <div>
                  <span className={`font-bold block ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Hover Sounds
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Calming sounds on bubble hover
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleHoverSoundsToggle(!hoverSounds)}
                className={`w-14 h-8 rounded-full relative transition-all ${
                  hoverSounds
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30'
                    : darkMode
                      ? 'bg-gray-600'
                      : 'bg-gray-200'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all ${
                    hoverSounds ? 'left-7' : 'left-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Reading Section */}
        <div className="mb-6">
          <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Reading Preferences
          </h3>

          <div className="space-y-3">
            {settingsToggle.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.key}
                  className={`rounded-2xl p-4 shadow-lg border ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <div>
                        <span className={`font-bold block ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                          {item.label}
                        </span>
                        <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {item.desc}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => item.setter(!item.value)}
                      className={`w-14 h-8 rounded-full relative transition-all ${
                        item.value
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30'
                          : darkMode
                            ? 'bg-gray-600'
                            : 'bg-gray-200'
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all ${
                          item.value ? 'left-7' : 'left-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legal Section */}
        <div className="mb-6">
          <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Legal
          </h3>

          <div className="space-y-3">
            {/* Privacy Policy */}
            <button
              onClick={() => onNavigate && onNavigate('privacy')}
              className={`w-full rounded-2xl p-4 shadow-lg border text-left transition-all hover:scale-[1.02] ${
                darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white border-gray-100 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Icons.Shield className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <span className={`font-bold block ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      Privacy Policy
                    </span>
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      How we handle your data
                    </span>
                  </div>
                </div>
                <Icons.ChevronRight className={`w-5 h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              </div>
            </button>

            {/* Terms of Service */}
            <button
              onClick={() => onNavigate && onNavigate('terms')}
              className={`w-full rounded-2xl p-4 shadow-lg border text-left transition-all hover:scale-[1.02] ${
                darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white border-gray-100 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Icons.Book className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <span className={`font-bold block ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      Terms of Service
                    </span>
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Rules for using w3Quran
                    </span>
                  </div>
                </div>
                <Icons.ChevronRight className={`w-5 h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Feedback Section */}
        {user && (
          <div className="mb-6">
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Feedback
            </h3>

            <div className={`rounded-2xl shadow-lg border overflow-hidden ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              {/* Toggle Button */}
              <button
                onClick={() => { setFeedbackOpen(!feedbackOpen); setFeedbackStatus(null); }}
                className={`w-full p-4 text-left transition-all hover:scale-[1.01] ${feedbackOpen ? 'pb-2' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Icons.MessageCircle className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <span className={`font-bold block ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        Send Feedback
                      </span>
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Report bugs, request features, or share your thoughts
                      </span>
                    </div>
                  </div>
                  <Icons.ChevronRight className={`w-5 h-5 transition-transform ${feedbackOpen ? 'rotate-90' : ''} ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                </div>
              </button>

              {/* Feedback Form */}
              {feedbackOpen && (
                <div className="px-4 pb-4 space-y-3">
                  {/* Type Selector */}
                  <div className="flex gap-2">
                    {[
                      { id: 'general', label: 'General', color: 'gray' },
                      { id: 'bug', label: 'Bug Report', color: 'red' },
                      { id: 'feature', label: 'Feature Request', color: 'purple' },
                    ].map(t => (
                      <button
                        key={t.id}
                        onClick={() => setFeedbackType(t.id)}
                        className={`flex-1 py-2 rounded-xl text-xs font-medium transition-all border ${
                          feedbackType === t.id
                            ? t.color === 'red' ? 'bg-red-500/20 border-red-500/40 text-red-400'
                              : t.color === 'purple' ? 'bg-purple-500/20 border-purple-500/40 text-purple-400'
                              : darkMode ? 'bg-blue-500/20 border-blue-500/40 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
                            : darkMode ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-500'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>

                  {/* Message */}
                  <textarea
                    value={feedbackMsg}
                    onChange={(e) => setFeedbackMsg(e.target.value)}
                    placeholder={
                      feedbackType === 'bug' ? 'Describe the bug — what happened and what you expected...'
                        : feedbackType === 'feature' ? 'Describe the feature you would like...'
                        : 'Share your feedback or suggestions...'
                    }
                    rows={4}
                    maxLength={5000}
                    className={`w-full rounded-xl p-3 text-sm border resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400'
                    }`}
                  />

                  {/* Character count */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      {feedbackMsg.length}/5000
                    </span>

                    {/* Status Messages */}
                    {feedbackStatus === 'sent' && (
                      <span className="text-green-500 text-xs font-medium flex items-center gap-1">
                        <Icons.Check className="w-3.5 h-3.5" /> Feedback sent! Thank you.
                      </span>
                    )}
                    {feedbackStatus === 'error' && (
                      <span className="text-red-500 text-xs">Failed to send. Please try again.</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={async () => {
                      if (!feedbackMsg.trim() || feedbackMsg.trim().length < 5) return;
                      setFeedbackStatus('sending');
                      try {
                        const res = await fetch('/api/feedback', {
                          method: 'POST',
                          credentials: 'include',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            type: feedbackType,
                            message: feedbackMsg.trim(),
                            metadata: {
                              url: window.location.href,
                              userAgent: navigator.userAgent,
                              screen: `${window.screen.width}x${window.screen.height}`,
                              viewport: `${window.innerWidth}x${window.innerHeight}`,
                              deviceType: window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop',
                              os: navigator.platform,
                              language: navigator.language,
                              darkMode,
                              translation: localStorage.getItem('reader_translation') || 'ur.jalandhry',
                              online: navigator.onLine,
                              appVersion: '1.0.0',
                              timestamp: new Date().toISOString(),
                            },
                          }),
                        });
                        if (!res.ok) throw new Error('Failed');
                        setFeedbackStatus('sent');
                        setFeedbackMsg('');
                        setTimeout(() => setFeedbackStatus(null), 4000);
                      } catch {
                        setFeedbackStatus('error');
                      }
                    }}
                    disabled={feedbackStatus === 'sending' || feedbackMsg.trim().length < 5}
                    className={`w-full py-3 rounded-xl font-medium text-sm transition-all ${
                      feedbackStatus === 'sending' || feedbackMsg.trim().length < 5
                        ? 'bg-gray-500/30 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600 text-white active:scale-[0.98]'
                    }`}
                  >
                    {feedbackStatus === 'sending' ? 'Sending...' : 'Send Feedback'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Privacy Section */}
        {user && (
          <div className="mb-6">
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Privacy
            </h3>

            <div className="space-y-3">
              {/* Show Email Toggle */}
              <div
                className={`rounded-2xl p-4 shadow-lg border ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icons.Eye className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <div>
                      <span className={`font-bold block ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        Show email to other users
                      </span>
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Display your email on your profile
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowEmail(!showEmail)}
                    className={`w-14 h-8 rounded-full relative transition-all ${
                      showEmail
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30'
                        : darkMode
                          ? 'bg-gray-600'
                          : 'bg-gray-200'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all ${
                        showEmail ? 'left-7' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Allow DMs Toggle */}
              <div
                className={`rounded-2xl p-4 shadow-lg border ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icons.MessageCircle className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <div>
                      <span className={`font-bold block ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        Allow message requests
                      </span>
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Let other users send you direct messages
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setAllowDMs(!allowDMs)}
                    className={`w-14 h-8 rounded-full relative transition-all ${
                      allowDMs
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30'
                        : darkMode
                          ? 'bg-gray-600'
                          : 'bg-gray-200'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all ${
                        allowDMs ? 'left-7' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blocked Users Section */}
        {user && (
          <div className="mb-6">
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Blocked Users
            </h3>

            <div className={`rounded-2xl p-4 shadow-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              {blockedLoading ? (
                <div className="flex items-center justify-center py-4">
                  <div className="w-6 h-6 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : blockedUsers.length === 0 ? (
                <div className="text-center py-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-500/20 flex items-center justify-center">
                    <Icons.Users className={`w-6 h-6 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    No blocked users
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {blockedUsers.map((blocked) => (
                    <div
                      key={blocked.userId}
                      className={`flex items-center justify-between p-3 rounded-xl ${
                        darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {blocked.picture ? (
                          <img
                            src={blocked.picture}
                            alt=""
                            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">
                              {(blocked.name || blocked.email || '?').charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className={`font-medium text-sm truncate ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            {blocked.name || 'Unknown User'}
                          </p>
                          {blocked.email && (
                            <p className={`text-xs truncate ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {blocked.email}
                            </p>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => handleUnblock(blocked.userId)}
                        disabled={unblockingId === blocked.userId}
                        className={`ml-3 px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex-shrink-0 ${
                          unblockingId === blocked.userId
                            ? 'bg-gray-500/30 text-gray-400 cursor-not-allowed'
                            : 'bg-red-500/20 text-red-400 hover:bg-red-500/30 active:scale-95'
                        }`}
                      >
                        {unblockingId === blocked.userId ? 'Unblocking...' : 'Unblock'}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* App Info */}
        <div
          className={`rounded-2xl p-4 shadow-lg border text-center ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
          }`}
        >
          <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>w3Quran</p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t('settings.version')} 1.0.0</p>
          <p className={`text-xs mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Made with ❤️ for the Ummah
          </p>
        </div>
      </div>
    </div>
  );
}

export default SettingsView;
