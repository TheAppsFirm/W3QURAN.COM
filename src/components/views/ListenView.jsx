/**
 * ListenView Component
 * Single Responsibility: Display reciters and translations with audio playback
 */

import { useState, useCallback } from 'react';
import { Icons } from '../common/Icons';
import { PALETTES } from '../../data';
import { useLocalStorage } from '../../hooks';
import { RECITERS as RECITER_DATA, getAudioUrl } from '../../hooks/useAudioPlayer';

// Extended reciters data with styles
const RECITERS = [
  { id: 'ar.alafasy', name: 'Mishary Rashid Alafasy', country: 'Kuwait', style: 'Murattal', popular: true },
  { id: 'ar.abdurrahmaansudais', name: 'Abdul Rahman Al-Sudais', country: 'Saudi Arabia', style: 'Murattal', popular: true },
  { id: 'ar.shaatree', name: 'Abu Bakr Al-Shatri', country: 'Saudi Arabia', style: 'Murattal', popular: true },
  { id: 'ar.abdulsamad', name: 'Abdul Samad', country: 'Egypt', style: 'Mujawwad', popular: false },
  { id: 'ar.husary', name: 'Mahmoud Al-Husary', country: 'Egypt', style: 'Murattal', popular: true },
  { id: 'ar.minshawi', name: 'Mohamed Al-Minshawi', country: 'Egypt', style: 'Mujawwad', popular: false },
];

// Available translations
const TRANSLATIONS = [
  { id: 'sahih', name: 'Sahih International', language: 'English', description: 'Clear and accurate' },
  { id: 'pickthall', name: 'Pickthall', language: 'English', description: 'Traditional translation' },
  { id: 'yusufali', name: 'Yusuf Ali', language: 'English', description: 'With commentary' },
  { id: 'urdu', name: 'Fateh Muhammad Jalandhri', language: 'Urdu', description: 'Popular Urdu translation' },
];

function ListenView({ level, darkMode }) {
  const [activeTab, setActiveTab] = useState('reciters');
  const [selectedReciter, setSelectedReciter] = useLocalStorage('reader_reciter', 'ar.alafasy');
  const [selectedTranslation, setSelectedTranslation] = useLocalStorage('settings_translation', 'sahih');
  const [reciterFilter, setReciterFilter] = useState('all');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingReciter, setPlayingReciter] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);

  // Handle back navigation
  const handleBack = () => {
    window.history.back();
  };

  const filteredReciters = RECITERS.filter((r) => {
    if (reciterFilter === 'popular') return r.popular;
    if (reciterFilter === 'murattal') return r.style === 'Murattal';
    if (reciterFilter === 'mujawwad') return r.style === 'Mujawwad';
    return true;
  });

  // Play a sample verse from selected reciter
  const handlePlaySample = useCallback((reciterId) => {
    // Stop current audio if playing
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.src = '';
    }

    if (playingReciter === reciterId && isPlaying) {
      setIsPlaying(false);
      setPlayingReciter(null);
      return;
    }

    // Play first verse of Al-Fatiha as sample
    const url = getAudioUrl(1, 1, reciterId);
    const audio = new Audio(url);

    audio.onended = () => {
      setIsPlaying(false);
      setPlayingReciter(null);
    };

    audio.onerror = () => {
      setIsPlaying(false);
      setPlayingReciter(null);
    };

    audio.play().catch((err) => {
      console.error('Play failed:', err);
      setIsPlaying(false);
      setPlayingReciter(null);
    });

    setCurrentAudio(audio);
    setIsPlaying(true);
    setPlayingReciter(reciterId);
  }, [currentAudio, isPlaying, playingReciter]);

  // Select reciter
  const handleSelectReciter = useCallback((reciterId) => {
    setSelectedReciter(reciterId);
  }, [setSelectedReciter]);

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
          <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Listen to Quran
          </h2>
        </div>
      </div>

      <div className="p-6">

      {/* Tab Switcher */}
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setActiveTab('reciters')}
          className={`px-6 py-3 rounded-full font-semibold transition-all ${
            activeTab === 'reciters'
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
              : darkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Icons.Mic className="w-4 h-4 inline mr-2" />
          Reciters
        </button>
        <button
          onClick={() => setActiveTab('translations')}
          className={`px-6 py-3 rounded-full font-semibold transition-all ${
            activeTab === 'translations'
              ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg'
              : darkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Icons.Globe className="w-4 h-4 inline mr-2" />
          Translations
        </button>
      </div>

      {activeTab === 'reciters' && (
        <>
          {/* Reciter Filters */}
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {[
              { id: 'all', label: 'All' },
              { id: 'popular', label: 'Popular' },
              { id: 'murattal', label: 'Murattal' },
              { id: 'mujawwad', label: 'Mujawwad' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setReciterFilter(f.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  reciterFilter === f.id
                    ? 'bg-emerald-500 text-white'
                    : darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Selected Reciter Indicator */}
          {selectedReciter && (
            <div className={`text-center mb-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Current reciter: <span className="font-semibold text-emerald-500">
                {RECITERS.find(r => r.id === selectedReciter)?.name || 'Mishary Alafasy'}
              </span>
            </div>
          )}

          {/* Reciters Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto pb-24">
            {filteredReciters.map((reciter, i) => {
              const p = PALETTES[(i + 4) % 10];
              const isSelected = selectedReciter === reciter.id;
              const isCurrentlyPlaying = playingReciter === reciter.id && isPlaying;
              return (
                <div
                  key={reciter.id}
                  className={`relative rounded-2xl p-4 text-center overflow-hidden shadow-lg transition-all ${
                    isSelected ? 'ring-4 ring-white ring-offset-2 scale-105' : 'hover:scale-105 hover:shadow-xl'
                  }`}
                  style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]}, ${p.colors[2]})` }}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0%, transparent 40%)`,
                    }}
                  />
                  <div className="relative z-10">
                    {/* Avatar/Icon */}
                    <div
                      className="w-16 h-16 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 border border-white/30 cursor-pointer hover:bg-white/30 transition-all"
                      onClick={() => handlePlaySample(reciter.id)}
                    >
                      {isCurrentlyPlaying ? (
                        <Icons.Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Icons.Play className="w-8 h-8 text-white" />
                      )}
                    </div>

                    <h3 className="font-bold text-white text-sm">{reciter.name}</h3>
                    <p className="text-white/70 text-xs">{reciter.country}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 bg-white/20 rounded-full text-white text-xs">
                      {reciter.style}
                    </span>

                    {/* Select Button */}
                    <button
                      onClick={() => handleSelectReciter(reciter.id)}
                      className={`mt-3 w-full py-2 rounded-xl text-sm font-semibold transition-all ${
                        isSelected
                          ? 'bg-white text-gray-800'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Icons.Check className="w-4 h-4 inline mr-1" />
                          Selected
                        </>
                      ) : (
                        'Select'
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {activeTab === 'translations' && (
        <div className="max-w-2xl mx-auto w-full pb-24">
          <p className={`text-center mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Select your preferred translation
          </p>
          <div className="space-y-3">
            {TRANSLATIONS.map((trans, i) => {
              const isSelected = selectedTranslation === trans.id;
              const p = PALETTES[(i + 2) % 10];
              return (
                <div
                  key={trans.id}
                  onClick={() => setSelectedTranslation(trans.id)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all ${
                    isSelected
                      ? 'shadow-lg'
                      : darkMode
                        ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700'
                        : 'bg-white hover:bg-gray-50 border border-gray-100'
                  }`}
                  style={isSelected ? { background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]})` } : {}}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`font-bold ${isSelected ? 'text-white' : darkMode ? 'text-white' : 'text-gray-800'}`}>
                        {trans.name}
                      </h3>
                      <p className={`text-sm ${isSelected ? 'text-white/80' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {trans.language} - {trans.description}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Icons.Check className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default ListenView;
