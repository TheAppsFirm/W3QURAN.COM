/**
 * Terms of Service View
 * Simple, standard terms for w3Quran - a free Quran app
 */

import { memo } from 'react';
import { Icons } from '../common/Icons';

const TermsOfServiceView = memo(function TermsOfServiceView({ darkMode, onBack }) {
  return (
    <div className={`h-full overflow-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
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
            Terms of Service
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

          {/* App Info */}
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
            <p className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
              <strong>w3Quran is a free Quran application</strong> provided for educational and religious purposes.
            </p>
          </div>

          <section>
            <h2 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Free to Use
            </h2>
            <p className="text-sm">
              w3Quran is completely free. You can read, listen, and learn from the Quran without any payment or subscription.
            </p>
          </section>

          <section>
            <h2 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              The Quran
            </h2>
            <p className="text-sm">
              The Holy Quran is the word of Allah and belongs to all of humanity. It is not copyrighted and is freely available to everyone.
            </p>
          </section>

          <section>
            <h2 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Acceptable Use
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Use the app for reading and learning the Quran</li>
              <li>Share verses with others</li>
              <li>Use for personal and educational purposes</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Content Sources
            </h2>
            <p className="text-sm mb-2">
              Quran text, translations, and audio are sourced from:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Al Quran Cloud</li>
              <li>Quran.com</li>
              <li>Various Islamic scholars and reciters</li>
            </ul>
          </section>

          <section>
            <h2 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Disclaimer
            </h2>
            <p className="text-sm">
              This app is for reference and learning. For important religious matters, please consult qualified Islamic scholars.
            </p>
          </section>

          <section>
            <h2 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              No Warranty
            </h2>
            <p className="text-sm">
              The app is provided "as is" without warranties. We strive for accuracy but cannot guarantee uninterrupted service.
            </p>
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

export default TermsOfServiceView;
