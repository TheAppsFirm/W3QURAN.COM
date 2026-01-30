/**
 * SettingsView Component
 * Single Responsibility: Manage app settings
 */

import { useState } from 'react';
import { Icons } from '../common/Icons';

function SettingsView({ darkMode, setDarkMode }) {
  const [settings, setSettings] = useState({
    notify: true,
    auto: false,
    trans: true,
    tajweed: false,
    wordByWord: false,
  });

  return (
    <div className={`h-full flex flex-col items-center justify-center p-6 ${darkMode ? 'text-white' : ''}`}>
      <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Settings</h2>
      <div className="w-full max-w-md space-y-4">
        {/* Dark Mode Toggle */}
        <div
          className={`rounded-2xl p-5 shadow-lg border flex items-center justify-between ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
          }`}
        >
          <div className="flex items-center gap-3">
            {darkMode ? <Icons.Moon className="w-5 h-5 text-purple-400" /> : <Icons.Sun className="w-5 h-5 text-amber-500" />}
            <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Dark Mode</span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-14 h-8 rounded-full relative transition-all ${
              darkMode ? 'bg-gradient-to-r from-purple-500 to-violet-500 shadow-lg shadow-purple-500/30' : 'bg-gray-200'
            }`}
          >
            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all ${darkMode ? 'left-7' : 'left-1'}`} />
          </button>
        </div>

        {[
          { key: 'notify', label: 'Notifications', icon: Icons.Bell },
          { key: 'auto', label: 'Auto-play Audio', icon: Icons.Volume },
          { key: 'trans', label: 'Show Translation', icon: Icons.Globe },
          { key: 'tajweed', label: 'Tajweed Highlighting', icon: Icons.Sparkles },
          { key: 'wordByWord', label: 'Word-by-Word Mode', icon: Icons.Layers },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.key}
              className={`rounded-2xl p-5 shadow-lg border flex items-center justify-between ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.label}</span>
              </div>
              <button
                onClick={() => setSettings((prev) => ({ ...prev, [item.key]: !prev[item.key] }))}
                className={`w-14 h-8 rounded-full relative transition-all ${
                  settings[item.key]
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30'
                    : darkMode
                      ? 'bg-gray-600'
                      : 'bg-gray-200'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all ${settings[item.key] ? 'left-7' : 'left-1'}`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SettingsView;
