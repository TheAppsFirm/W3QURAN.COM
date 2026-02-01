/**
 * SettingsView Component
 * Single Responsibility: Manage app settings with localStorage persistence
 */

import { Icons } from '../common/Icons';
import { useLocalStorage } from '../../hooks';

function SettingsView({ darkMode, setDarkMode }) {
  // All settings persisted to localStorage
  const [notifications, setNotifications] = useLocalStorage('settings_notifications', true);
  const [autoPlayAudio, setAutoPlayAudio] = useLocalStorage('settings_autoplay', false);
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

  return (
    <div className={`h-full overflow-auto p-6 ${darkMode ? 'text-white' : ''}`}>
      <div className="max-w-lg mx-auto">
        <h2 className={`text-3xl font-bold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Settings
        </h2>
        <p className={`text-center mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Customize your experience
        </p>

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
