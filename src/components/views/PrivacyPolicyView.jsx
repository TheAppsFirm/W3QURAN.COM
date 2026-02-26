/**
 * Privacy Policy View
 * Simple, standard privacy policy for w3Quran - a free Quran app
 */

import { memo } from 'react';
import { Icons } from '../common/Icons';

const PrivacyPolicyView = memo(function PrivacyPolicyView({ darkMode, onBack }) {
  return (
    <div className={`h-full overflow-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
      style={{ paddingBottom: 'max(6rem, calc(env(safe-area-inset-bottom, 0px) + 6rem))' }}
    >
      {/* Header */}
      <div
        className="sticky top-0 z-10 backdrop-blur-xl border-b"
        style={{
          background: darkMode ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          borderColor: darkMode ? 'rgba(71, 85, 105, 0.5)' : 'rgba(203, 213, 225, 0.5)',
        }}
      >
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
          {onBack && (
            <button
              onClick={onBack}
              className={`p-2.5 rounded-full transition-colors active:scale-95 ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
              style={{ minWidth: 44, minHeight: 44 }}
            >
              <Icons.ChevronLeft className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
            </button>
          )}
          <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

          {/* App Info */}
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}>
            <p className={`text-sm ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
              <strong>w3Quran is a free Quran application.</strong> We respect your privacy and do not collect personal data.
            </p>
          </div>

          <section>
            <h2 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              What We Don't Collect
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>No personal information</li>
              <li>No email addresses</li>
              <li>No location data</li>
              <li>No usage tracking or analytics</li>
              <li>No cookies for advertising</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Data Stored on Your Device
            </h2>
            <p className="text-sm mb-2">
              The following data is stored locally on your device only:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Reading preferences (font size, theme)</li>
              <li>Bookmarks and reading progress</li>
              <li>Offline downloaded content</li>
            </ul>
            <p className="text-sm mt-2">
              This data never leaves your device and can be cleared anytime by clearing your browser data.
            </p>
          </section>

          <section>
            <h2 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Third-Party Services
            </h2>
            <p className="text-sm mb-2">
              We use the following free APIs to provide Quran content:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Al Quran Cloud API - Quran text and audio</li>
              <li>Quran.com API - Additional translations</li>
              <li>YouTube - Embedded videos (optional)</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Your Rights
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Delete all local data by clearing browser storage</li>
              <li>Use the app without any account or registration</li>
              <li>Access all features for free</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact
            </h2>
            <p className="text-sm">
              Questions? Email us at: <strong>info@w3quran.com</strong>
            </p>
          </section>

          <div className={`text-center text-xs pt-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Last updated: February 2026
          </div>
        </div>
      </div>
    </div>
  );
});

export default PrivacyPolicyView;
