/**
 * AudioControls Component
 * Audio playback controls for the Quran reader
 *
 * Features:
 * - Audio mode toggle (Arabic, Translation, Combined)
 * - Play/pause button with loading state
 * - Previous/next ayah navigation
 * - Narrator selection for translations
 * - Current ayah/total display
 *
 * Extracted from BubbleReaderOverlay for better maintainability
 */

import { memo, useCallback } from 'react';
import { Icons } from '../../common/Icons';

/**
 * AudioControls - Full audio playback control panel
 *
 * @param {Object} props
 * @param {string} props.audioMode - Current audio mode ('arabic' | 'translation' | 'combined')
 * @param {Function} props.setAudioMode - Callback to change audio mode
 * @param {boolean} props.isPlaying - Whether Arabic audio is playing
 * @param {boolean} props.isPlayingTranslation - Whether translation audio is playing
 * @param {boolean} props.isPlayingCombined - Whether combined mode is playing
 * @param {boolean} props.audioLoading - Whether audio is loading
 * @param {string} [props.audioError] - Current audio error message
 * @param {number} props.currentAyah - Current ayah number (for Arabic mode)
 * @param {number} props.translationAyah - Current ayah number (for translation mode)
 * @param {number} props.totalVerses - Total number of verses
 * @param {string} props.combinedPhase - Current phase of combined playback ('arabic' | 'translation')
 * @param {string} [props.translationAudioSource] - Source of translation audio ('api' | 'tts')
 * @param {Object} [props.translationReciterInfo] - Info about the API audio reciter
 * @param {Object} [props.apiAudioSource] - API audio source configuration
 * @param {string} props.ttsLanguage - Language code for TTS (e.g., 'ur', 'en')
 * @param {string} props.effectiveNarrator - Currently effective narrator ID
 * @param {Array} props.availableNarrators - List of available narrator options
 * @param {boolean} props.hasMatchingAudio - Whether API audio is available
 * @param {Function} props.onNarratorChange - Callback when narrator is changed
 * @param {Function} props.togglePlayPause - Toggle Arabic playback
 * @param {Function} props.toggleTranslationPlayback - Toggle translation playback
 * @param {Function} props.toggleCombinedPlayback - Toggle combined playback
 * @param {Function} props.goToPrevAyah - Navigate to previous ayah
 * @param {Function} props.goToNextAyah - Navigate to next ayah
 * @param {Function} props.setTranslationAyah - Set translation ayah number
 * @param {string} [props.translationLanguageLabel] - Display label for the translation language (native name)
 * @param {Object} props.audioRef - Ref to Arabic audio element
 */
const AudioControls = memo(function AudioControls({
  audioMode,
  setAudioMode,
  isPlaying,
  isPlayingTranslation,
  isPlayingCombined,
  audioLoading,
  audioError,
  currentAyah,
  translationAyah,
  totalVerses,
  combinedPhase,
  translationAudioSource,
  translationReciterInfo,
  apiAudioSource,
  ttsLanguage,
  translationLanguageLabel,
  effectiveNarrator,
  availableNarrators,
  hasMatchingAudio,
  onNarratorChange,
  ttsLoading,
  togglePlayPause,
  toggleTranslationPlayback,
  toggleCombinedPlayback,
  goToPrevAyah,
  goToNextAyah,
  setTranslationAyah,
  audioRef,
}) {
  // Handle audio mode changes
  const handleArabicMode = useCallback(() => {
    setAudioMode('arabic');
    if (isPlayingTranslation) toggleTranslationPlayback();
    if (isPlayingCombined) toggleCombinedPlayback();
  }, [setAudioMode, isPlayingTranslation, isPlayingCombined, toggleTranslationPlayback, toggleCombinedPlayback]);

  const handleTranslationMode = useCallback(() => {
    setAudioMode('translation');
    // Stop Arabic audio
    if (isPlaying) {
      if (audioRef?.current) audioRef.current.pause();
    }
    if (isPlayingCombined) toggleCombinedPlayback();
  }, [setAudioMode, isPlaying, isPlayingCombined, audioRef, toggleCombinedPlayback]);

  const handleCombinedMode = useCallback(() => {
    setAudioMode('combined');
    if (isPlayingTranslation) toggleTranslationPlayback();
    if (isPlaying && !isPlayingCombined) {
      if (audioRef?.current) audioRef.current.pause();
    }
  }, [setAudioMode, isPlayingTranslation, isPlaying, isPlayingCombined, audioRef, toggleTranslationPlayback]);

  // Handle previous/next navigation
  const handlePrev = useCallback(() => {
    if (audioMode === 'translation') {
      setTranslationAyah((prev) => Math.max(1, prev - 1));
    } else {
      goToPrevAyah();
    }
  }, [audioMode, setTranslationAyah, goToPrevAyah]);

  const handleNext = useCallback(() => {
    if (audioMode === 'translation') {
      setTranslationAyah((prev) => Math.min(totalVerses, prev + 1));
    } else {
      goToNextAyah();
    }
  }, [audioMode, setTranslationAyah, totalVerses, goToNextAyah]);

  // Determine current state for display
  const displayedAyah = audioMode === 'translation' ? translationAyah : currentAyah;
  const isPrevDisabled = displayedAyah <= 1;
  const isNextDisabled = displayedAyah >= totalVerses;

  return (
    <div className="flex-shrink-0 pt-1">
      {/* Audio Error Display */}
      {audioError && (
        <p className="text-center text-red-300 text-[10px] mb-1">{audioError}</p>
      )}

      {/* Audio Mode Toggle */}
      <div className="flex items-center justify-center gap-1.5 mb-2">
        <button
          onClick={handleArabicMode}
          className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
            audioMode === 'arabic' ? 'bg-white/30 text-white' : 'bg-white/10 text-white/60'
          }`}
        >
          Arabic
        </button>
        <button
          onClick={handleTranslationMode}
          className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
            audioMode === 'translation' ? 'bg-cyan-500/50 text-white' : 'bg-white/10 text-white/60'
          }`}
          title={apiAudioSource ? `Audio: ${apiAudioSource.reciter?.name}` : 'TTS Audio (No narrator available)'}
        >
          {translationLanguageLabel || 'Translation'}
          {apiAudioSource ? (
            <span className="ml-1 text-emerald-300">●</span>
          ) : (
            <span className="ml-1 text-amber-300" title="TTS only">○</span>
          )}
        </button>

        {/* Narrator selector */}
        {availableNarrators.length > 0 && (audioMode === 'translation' || audioMode === 'combined') && (
          <select
            value={effectiveNarrator || ''}
            onChange={(e) => onNarratorChange(e.target.value)}
            className="px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border-none outline-none cursor-pointer hover:bg-white/20 transition-all"
            style={{ maxWidth: '120px' }}
          >
            {availableNarrators.map((narrator) => (
              <option key={narrator.id} value={narrator.id} className="bg-gray-800 text-white">
                {narrator.translationShort || narrator.name} ({narrator.styleLabel || (narrator.style === 'word-by-word' ? 'لفظی' : 'جملہ')})
              </option>
            ))}
          </select>
        )}

        {/* TTS indicator */}
        {!hasMatchingAudio && (audioMode === 'translation' || audioMode === 'combined') && (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300">
            TTS
          </span>
        )}

        <button
          onClick={handleCombinedMode}
          className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
            audioMode === 'combined'
              ? 'bg-gradient-to-r from-amber-500/50 to-cyan-500/50 text-white'
              : 'bg-white/10 text-white/60'
          }`}
          title="Play Arabic then Translation for each verse"
        >
          Both
        </button>
      </div>

      {/* Playback Controls */}
      <div className="flex items-center justify-center gap-3">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={isPrevDisabled}
          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all disabled:opacity-30"
        >
          <Icons.SkipBack className="w-4 h-4" />
        </button>

        {/* Play/Pause Button - varies by mode */}
        {audioMode === 'arabic' ? (
          <button
            onClick={togglePlayPause}
            className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/40 transition-all hover:scale-105"
            style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
          >
            {audioLoading ? (
              <Icons.Loader className="w-5 h-5 animate-spin" />
            ) : isPlaying ? (
              <Icons.Pause className="w-5 h-5" />
            ) : (
              <Icons.Play className="w-5 h-5 ml-0.5" />
            )}
          </button>
        ) : audioMode === 'translation' ? (
          <button
            onClick={toggleTranslationPlayback}
            className={`w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-all ${
              isPlayingTranslation ? 'bg-cyan-500/60' : 'bg-white/30 hover:bg-white/40'
            }`}
            style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
          >
            {ttsLoading ? (
              <Icons.Loader className="w-5 h-5 animate-spin" />
            ) : isPlayingTranslation ? (
              <Icons.Pause className="w-5 h-5" />
            ) : (
              <Icons.Play className="w-5 h-5 ml-0.5" />
            )}
          </button>
        ) : (
          <button
            onClick={toggleCombinedPlayback}
            className={`w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-all ${
              isPlayingCombined
                ? 'bg-gradient-to-r from-amber-500/60 to-cyan-500/60'
                : 'bg-white/30 hover:bg-white/40'
            }`}
            style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
          >
            {isPlayingCombined ? (
              <Icons.Pause className="w-5 h-5" />
            ) : (
              <Icons.Play className="w-5 h-5 ml-0.5" />
            )}
          </button>
        )}

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={isNextDisabled}
          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all disabled:opacity-30"
        >
          <Icons.SkipForward className="w-4 h-4" />
        </button>
      </div>

      {/* Status Display */}
      <div className="text-center mt-0.5 text-xs text-white/70">
        {audioMode === 'arabic' ? (
          <span>{currentAyah} / {totalVerses}</span>
        ) : audioMode === 'translation' ? (
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-cyan-300">
              {translationAyah} / {totalVerses} {isPlayingTranslation && '(Playing)'}
            </span>
            {isPlayingTranslation && translationAudioSource && (
              <span className={`text-[10px] ${translationAudioSource === 'api' ? 'text-emerald-300' : 'text-amber-300'}`}>
                {translationAudioSource === 'api' ? (
                  <>🎙 {translationReciterInfo?.name || 'Shamshad Ali Khan'}</>
                ) : (
                  <>🤖 TTS ({ttsLanguage === 'ur' ? 'Urdu' : ttsLanguage.toUpperCase()})</>
                )}
              </span>
            )}
            {!isPlayingTranslation && apiAudioSource && (
              <span className="text-[10px] text-emerald-300/70">
                🎙 {apiAudioSource.reciter?.name || 'Audio Available'}
              </span>
            )}
          </div>
        ) : (
          <span className={isPlayingCombined ? 'text-amber-300' : ''}>
            {currentAyah} / {totalVerses}
            {isPlayingCombined && (
              <span className="ml-1">
                ({combinedPhase === 'arabic' ? '🔊 Arabic' : (
                  translationAudioSource === 'api' ? '🎙 Urdu' : '🤖 TTS'
                )})
              </span>
            )}
          </span>
        )}
      </div>
    </div>
  );
});

export default AudioControls;
