/**
 * SettingsView Component
 * Single Responsibility: Manage app settings with localStorage persistence
 */

import { useState } from 'react';
import { Icons } from '../common/Icons';
import { useLocalStorage } from '../../hooks';
import { isSoundEnabled, setSoundEnabled } from '../../utils/soundUtils';
import { useAuth } from '../../contexts/AuthContext';

// Stripe Price IDs - from Cloudflare environment
const STRIPE_PRICES = {
  monthly: 'price_1T12VWCnbCeWpM4XWRkPjxJb',
  yearly: 'price_1T12VxCnbCeWpM4Xg2ttTsm5',
};

function SettingsView({ darkMode, setDarkMode, onNavigate }) {
  const { user, subscription, isPremium } = useAuth();
  const [upgradeLoading, setUpgradeLoading] = useState(null);
  const [upgradeError, setUpgradeError] = useState(null);
  const [syncStatus, setSyncStatus] = useState(null); // 'syncing' | 'success' | 'error'
  const [lastSynced, setLastSynced] = useLocalStorage('last_synced', null);
  // All settings persisted to localStorage
  const [notifications, setNotifications] = useLocalStorage('settings_notifications', true);
  const [autoPlayAudio, setAutoPlayAudio] = useLocalStorage('settings_autoplay', false);
  const [hoverSounds, setHoverSounds] = useLocalStorage('w3quran_sound_enabled', isSoundEnabled());
  const [showTranslation, setShowTranslation] = useLocalStorage('settings_translation', true);
  const [tajweedHighlight, setTajweedHighlight] = useLocalStorage('settings_tajweed', false);
  const [wordByWord, setWordByWord] = useLocalStorage('settings_wordbyword', false);
  const [fontSize, setFontSize] = useLocalStorage('settings_fontsize', 'medium');
  const [reciter, setReciter] = useLocalStorage('settings_reciter', 'ar.alafasy');

  const settingsToggle = [
    { key: 'notify', label: 'Notifications', icon: Icons.Bell, value: notifications, setter: setNotifications, desc: 'Daily verse and prayer reminders' },
    { key: 'auto', label: 'Auto-play Audio', icon: Icons.Volume, value: autoPlayAudio, setter: setAutoPlayAudio, desc: 'Automatically play next ayah' },
    { key: 'trans', label: 'Show Translation', icon: Icons.Globe, value: showTranslation, setter: setShowTranslation, desc: 'Display English translation' },
    { key: 'tajweed', label: 'Tajweed Highlighting', icon: Icons.Sparkles, value: tajweedHighlight, setter: setTajweedHighlight, desc: 'Color-code tajweed rules' },
    { key: 'wordByWord', label: 'Word-by-Word Mode', icon: Icons.Layers, value: wordByWord, setter: setWordByWord, desc: 'Show word meanings on tap' },
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
    <div className={`h-full overflow-auto p-6 ${darkMode ? 'text-white' : ''}`}>
      <div className="max-w-lg mx-auto">
        {/* Back Button */}
        <button
          onClick={() => onNavigate && onNavigate('surahs')}
          className={`flex items-center gap-2 mb-6 px-4 py-2 rounded-xl transition-all ${
            darkMode
              ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          }`}
        >
          <Icons.ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </button>

        <h2 className={`text-3xl font-bold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Settings
        </h2>
        <p className={`text-center mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Customize your experience
        </p>

        {/* Admin Section - Only show for admin users */}
        {user?.isAdmin && (
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
                  <p className="font-bold">Admin Dashboard</p>
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
              Subscription
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
                      {isPremium ? 'Premium Plan' : 'Free Plan'}
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
                      onClick={async () => {
                        setUpgradeLoading('monthly');
                        setUpgradeError(null);
                        try {
                          const res = await fetch('/api/stripe/checkout', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ priceId: STRIPE_PRICES.monthly }),
                          });
                          const data = await res.json();
                          if (data.url) window.location.href = data.url;
                          else setUpgradeError(data.error || 'Failed to start checkout');
                        } catch (e) {
                          setUpgradeError('Network error. Please try again.');
                        }
                        setUpgradeLoading(null);
                      }}
                      disabled={upgradeLoading}
                      className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all disabled:opacity-50"
                    >
                      {upgradeLoading === 'monthly' ? 'Loading...' : '$5/mo'}
                    </button>
                    <button
                      onClick={async () => {
                        setUpgradeLoading('yearly');
                        setUpgradeError(null);
                        try {
                          const res = await fetch('/api/stripe/checkout', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ priceId: STRIPE_PRICES.yearly }),
                          });
                          const data = await res.json();
                          if (data.url) window.location.href = data.url;
                          else setUpgradeError(data.error || 'Failed to start checkout');
                        } catch (e) {
                          setUpgradeError('Network error. Please try again.');
                        }
                        setUpgradeLoading(null);
                      }}
                      disabled={upgradeLoading}
                      className="flex-1 py-2 px-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all disabled:opacity-50"
                    >
                      {upgradeLoading === 'yearly' ? 'Loading...' : '$30/yr'}
                    </button>
                  </div>
                  <p className={`text-xs text-center ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    Yearly saves 50%
                  </p>
                </div>
              )}

              {/* Manage Subscription - Show if premium */}
              {isPremium && (
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={async () => {
                      setUpgradeError(null);
                      try {
                        const res = await fetch('/api/stripe/portal', { method: 'POST' });
                        const data = await res.json();
                        if (data.url) window.location.href = data.url;
                        else setUpgradeError(data.error || 'Failed to open portal');
                      } catch (e) {
                        setUpgradeError('Network error. Please try again.');
                      }
                    }}
                    className={`w-full py-2 px-4 rounded-xl font-medium transition-all ${
                      darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Manage Subscription
                  </button>
                </div>
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
                            body: JSON.stringify({ dataType: 'bookmarks', data: JSON.parse(bookmarks) }),
                          });
                        }

                        // Upload progress
                        if (progress) {
                          await fetch('/api/user/sync', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
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
            Appearance
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
                  <span className={`font-bold block ${darkMode ? 'text-white' : 'text-gray-800'}`}>Dark Mode</span>
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
                <span className={`font-bold block ${darkMode ? 'text-white' : 'text-gray-800'}`}>Arabic Font Size</span>
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
            Audio
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
                    <Icons.FileText className="w-5 h-5 text-emerald-500" />
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

        {/* App Info */}
        <div
          className={`rounded-2xl p-4 shadow-lg border text-center ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
          }`}
        >
          <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>w3Quran</p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Version 1.0.0</p>
          <p className={`text-xs mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Made with ❤️ for the Ummah
          </p>
        </div>
      </div>
    </div>
  );
}

export default SettingsView;
