/**
 * NamesOfAllahView Component
 * Single Responsibility: Display the 99 Names of Allah with share/listen functionality
 */

import { useState, useCallback } from 'react';
import { Icons } from '../common/Icons';
import { NAMES_OF_ALLAH, PALETTES } from '../../data';
import { shareName } from '../../utils/shareUtils';
import { useTranslation } from '../../contexts/LocaleContext';

function NamesOfAllahView({ darkMode }) {
  const { t, isRTL } = useTranslation();
  const [selectedName, setSelectedName] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [shareStatus, setShareStatus] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const filteredNames = NAMES_OF_ALLAH.filter(
    (name) =>
      name.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      name.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      name.arabic.includes(searchQuery)
  );

  // Handle share
  const handleShare = useCallback(async () => {
    if (!selectedName) return;

    setShareStatus('sharing');
    const result = await shareName({
      english: selectedName.name,
      arabic: selectedName.arabic,
      meaning: selectedName.meaning,
    });

    if (result.success) {
      setShareStatus(result.method === 'clipboard' ? 'copied' : 'shared');
    } else {
      setShareStatus('error');
    }

    setTimeout(() => setShareStatus(null), 2000);
  }, [selectedName]);

  // Handle listen - use browser's text-to-speech for Arabic
  const handleListen = useCallback(() => {
    if (!selectedName) return;

    // Check if speech synthesis is available
    if ('speechSynthesis' in window) {
      setIsPlaying(true);

      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      // Create utterance for Arabic name
      const utterance = new SpeechSynthesisUtterance(selectedName.arabic);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.8;

      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    } else {
      // Fallback: just show a message
      alert('Audio playback not available in this browser');
    }
  }, [selectedName]);

  // Handle back navigation
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className={`h-full flex flex-col overflow-auto ${darkMode ? 'text-white' : ''}`}>
      {/* Header with back button */}
      <div className={`sticky top-0 z-10 backdrop-blur-xl ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3 p-4">
          <button
            onClick={handleBack}
            className={`p-2.5 rounded-full transition-all active:scale-95 ${darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
            title="Go back"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <Icons.ChevronLeft className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-600'}`} />
          </button>
          <div>
            <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {t('namesOfAllah.title')}
            </h2>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {t('namesOfAllah.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">

      {/* Search */}
      <div className="max-w-md mx-auto w-full mb-6">
        <div
          className={`flex items-center gap-2 px-4 py-3 rounded-2xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}
        >
          <Icons.Search className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            placeholder={t('namesOfAllah.searchNames')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`flex-1 bg-transparent outline-none ${
              darkMode ? 'text-white placeholder-gray-500' : 'placeholder-gray-400'
            }`}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')}>
              <Icons.X className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      {searchQuery && (
        <p className={`text-center text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Found {filteredNames.length} of 99 names
        </p>
      )}

      {/* Names Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto pb-24">
        {filteredNames.map((name, i) => {
          const p = PALETTES[name.id % 10];
          return (
            <div
              key={name.id}
              onClick={() => setSelectedName(name)}
              className={`rounded-2xl p-4 cursor-pointer transition-all hover:scale-105 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-xl'
              } shadow-lg`}
            >
              <div className="text-center">
                <div
                  className="text-3xl mb-2"
                  style={{ fontFamily: "'Scheherazade New', serif", color: p.colors[0] }}
                >
                  {name.arabic}
                </div>
                <div className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {name.name}
                </div>
                <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {name.meaning}
                </div>
                <div
                  className="mt-2 text-xs font-medium px-2 py-0.5 rounded-full inline-block"
                  style={{ backgroundColor: `${p.colors[0]}20`, color: p.colors[0] }}
                >
                  #{name.id}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Name Modal */}
      {selectedName && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4 safe-area-padding"
          style={{
            zIndex: 9999999,
            paddingTop: 'max(1rem, env(safe-area-inset-top, 1rem))',
            paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 1rem))'
          }}
          onClick={() => setSelectedName(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className={`relative rounded-3xl max-w-md w-full p-6 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-2xl transform transition-all`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedName(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Icons.X className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>

            <div className="text-center">
              {/* Number Badge */}
              <div
                className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-4"
                style={{
                  backgroundColor: `${PALETTES[selectedName.id % 10].colors[0]}20`,
                  color: PALETTES[selectedName.id % 10].colors[0],
                }}
              >
                #{selectedName.id} of 99
              </div>

              {/* Arabic Name */}
              <div
                className="text-6xl mb-4"
                style={{
                  fontFamily: "'Scheherazade New', serif",
                  color: PALETTES[selectedName.id % 10].colors[0],
                }}
              >
                {selectedName.arabic}
              </div>

              {/* English Name */}
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {selectedName.name}
              </h3>

              {/* Meaning */}
              <p className="text-lg text-emerald-500 font-medium mb-4">{selectedName.meaning}</p>

              {/* Description */}
              <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {selectedName.description}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-center gap-3">
                <button
                  onClick={handleListen}
                  disabled={isPlaying}
                  className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl flex items-center gap-2 hover:shadow-lg transition-all hover:scale-105 disabled:opacity-50"
                >
                  {isPlaying ? (
                    <Icons.Loader className="w-4 h-4 animate-spin" />
                  ) : (
                    <Icons.Volume className="w-4 h-4" />
                  )}
                  {isPlaying ? 'Playing...' : 'Listen'}
                </button>

                <button
                  onClick={handleShare}
                  disabled={shareStatus === 'sharing'}
                  className={`px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all hover:scale-105 ${
                    darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {shareStatus === 'sharing' ? (
                    <Icons.Loader className="w-4 h-4 animate-spin" />
                  ) : shareStatus === 'copied' || shareStatus === 'shared' ? (
                    <Icons.Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Icons.Share className="w-4 h-4" />
                  )}
                  {shareStatus === 'copied'
                    ? t('common.copied')
                    : shareStatus === 'shared'
                      ? t('common.copied')
                      : t('common.share')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default NamesOfAllahView;
