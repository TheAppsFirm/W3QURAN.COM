/**
 * VerseItem Component
 * Individual verse card with Arabic text, translation, and actions
 *
 * Features:
 * - Arabic text display with tajweed or word-by-word mode
 * - Translation display
 * - Word-by-word meaning popup
 * - Play/share/grammar action buttons
 * - Selection mode for multi-verse sharing
 * - Memorization word hiding
 *
 * Extracted from BubbleReaderOverlay for better maintainability
 */

import { memo, useState, useCallback } from 'react';
import { Icons } from '../../common/Icons';
import WordItem from './WordItem';
import TajweedText from './TajweedText';

/**
 * VerseItem - Renders a single verse with all its features
 *
 * @param {Object} props
 * @param {Object} props.verse - Verse data object
 * @param {number} props.verse.number - Ayah number
 * @param {string} props.verse.arabic - Arabic text
 * @param {string} [props.verse.translation] - Translation text
 * @param {Array} [props.verse.tajweedSegments] - Tajweed segments for color coding
 * @param {number} props.ayahNum - Ayah number (fallback)
 * @param {boolean} props.isCurrentAyah - Whether this is the currently playing ayah
 * @param {boolean} props.isPlaying - Whether audio is playing
 * @param {boolean} props.selectionMode - Whether multi-select mode is active
 * @param {boolean} props.isSelected - Whether this verse is selected
 * @param {boolean} props.wordByWordMode - Whether word-by-word mode is active
 * @param {boolean} props.tajweedMode - Whether tajweed mode is active
 * @param {boolean} props.showTranslation - Whether to show translation
 * @param {number} props.hideLevel - Memorization hide level (0-4)
 * @param {Array} props.wordMeanings - Word meanings data
 * @param {Object} [props.selectedWordData] - Currently selected word data
 * @param {boolean} props.wordAudioPlaying - Whether word audio is playing
 * @param {string} [props.wordAudioError] - Word audio error message
 * @param {Object} props.fontSizeMap - Font size configuration
 * @param {string} props.fontSize - Current font size key
 * @param {Object} props.readerStyleConfig - Reader style configuration
 * @param {number|null} props.speakingAyah - Currently speaking ayah number
 * @param {number|null} props.shareStatus - Share status ayah number
 * @param {boolean} props.audioLoading - Whether audio is loading
 * @param {number} props.surahId - Surah ID
 * @param {boolean} props.isPremium - Whether user has premium
 * @param {boolean} props.hasTreebankData - Whether treebank data exists
 * @param {boolean} props.hasOntologyData - Whether ontology data exists
 * @param {boolean} props.canAccessTreebank - Whether user can access treebank
 * @param {Function} props.onToggleSelection - Callback when verse selection toggled
 * @param {Function} props.onTogglePlayback - Callback when playback toggled
 * @param {Function} props.onSpeakTranslation - Callback to speak translation
 * @param {Function} props.onShare - Callback to share verse
 * @param {Function} props.onOpenTreebank - Callback to open treebank analysis
 * @param {Function} props.onSelectWord - Callback when word is selected
 * @param {Function} props.onClearSelectedWord - Callback to clear selected word
 * @param {Function} props.onPlayWordAudio - Callback to play word audio
 * @param {React.RefObject} props.wordAudioRef - Ref for word audio element
 */
const VerseItem = memo(function VerseItem({
  verse,
  ayahNum,
  isCurrentAyah,
  isPlaying,
  selectionMode,
  isSelected,
  wordByWordMode,
  tajweedMode,
  showTranslation,
  hideLevel,
  wordMeanings,
  selectedWordData,
  wordAudioPlaying,
  wordAudioError,
  fontSizeMap,
  fontSize,
  readerStyleConfig,
  speakingAyah,
  shareStatus,
  audioLoading,
  surahId,
  isPremium,
  hasTreebankData,
  hasOntologyData,
  canAccessTreebank,
  onToggleSelection,
  onTogglePlayback,
  onSpeakTranslation,
  onShare,
  onOpenTreebank,
  onSelectWord,
  onClearSelectedWord,
  onPlayWordAudio,
  wordAudioRef,
}) {
  const verseColors = readerStyleConfig.colors;
  const arabicWords = (verse.arabic || '').split(' ').filter((w) => w.trim());

  // Determine if a word should be hidden based on memorization level
  const shouldHideWord = useCallback(
    (wordIdx) => {
      if (hideLevel === 0) return false;
      if (hideLevel === 4) return true;
      const hideRatio = hideLevel * 0.25;
      return wordIdx % Math.ceil(1 / hideRatio) === 0;
    },
    [hideLevel]
  );

  // Verse container styles
  const verseStyle = {
    background: isSelected
      ? 'rgba(16,185,129,0.2)'
      : isCurrentAyah
      ? verseColors.activeBg
      : verseColors.verseBg,
    borderColor: isCurrentAyah ? verseColors.activeBorder : verseColors.verseBorder,
    borderWidth: '1px',
    borderStyle: 'solid',
    transform: isCurrentAyah ? 'scale(1.01)' : 'scale(1)',
    boxShadow: isCurrentAyah
      ? '0 0 20px rgba(255,255,255,0.15)'
      : isSelected
      ? '0 0 15px rgba(16,185,129,0.3)'
      : 'none',
  };

  // Handle word selection
  const handleWordClick = useCallback(
    (wordData, wordIdx) => {
      if (onSelectWord) {
        onSelectWord({
          key: `${ayahNum}-${wordIdx}`,
          word: wordData.arabic || wordData,
          meaning: wordData.meaning || '',
          transliteration: wordData.transliteration || '',
          audioUrl: wordData.audioUrl || null,
          isLoading: false,
        });
      }
    },
    [ayahNum, onSelectWord]
  );

  // Check if this word's popup is showing
  const isWordPopupShowing = selectedWordData?.key?.startsWith(`${ayahNum}-`);

  return (
    <div
      data-ayah={ayahNum}
      onClick={selectionMode ? () => onToggleSelection(ayahNum) : undefined}
      className={`relative ${readerStyleConfig.verse} ${
        hideLevel > 0 ? 'ring-2 ring-amber-400/30' : ''
      } ${isSelected ? 'ring-2 ring-emerald-400/60' : ''} ${
        selectionMode ? 'cursor-pointer' : ''
      }`}
      style={verseStyle}
    >
      {/* Selection checkbox */}
      {selectionMode && (
        <div className="flex items-center gap-2 mb-2">
          <div
            className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
              isSelected
                ? 'bg-emerald-500'
                : readerStyleConfig.isDark
                ? 'bg-white/20'
                : 'bg-slate-200'
            }`}
          >
            {isSelected && <Icons.Check className="w-3.5 h-3.5 text-white" />}
          </div>
          <span className="text-xs" style={{ color: verseColors.translation }}>
            Verse {ayahNum}
          </span>
        </div>
      )}

      {/* Timeline badge - positioned on timeline line (left side) */}
      {readerStyleConfig.badgePosition === 'timeline' && (
        <span
          className={readerStyleConfig.ayahBadge}
          style={{
            background: verseColors.badgeBg,
            color: verseColors.badgeColor,
            border: `1px solid ${verseColors.activeBorder}`,
          }}
        >
          {ayahNum}
        </span>
      )}

      {/* Arabic Text */}
      <div
        className="leading-[2.2] mb-2"
        style={{
          fontFamily: "'Scheherazade New', serif",
          fontSize: fontSizeMap[fontSize].arabic,
          color: verseColors.text,
          textShadow: readerStyleConfig.isDark ? '0 1px 6px rgba(0,0,0,0.3)' : 'none',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          maxWidth: '100%',
        }}
        dir="rtl"
        lang="ar"
      >
        {wordByWordMode ? (
          wordMeanings.length > 0 ? (
            wordMeanings.map((wordData, wordIdx) => (
              <WordItem
                key={`${ayahNum}-${wordIdx}`}
                word={wordData.arabic}
                isActive={selectedWordData?.key === `${ayahNum}-${wordIdx}`}
                hidden={shouldHideWord(wordIdx)}
                showOnHover={hideLevel > 0 && hideLevel < 4}
                onClick={() => handleWordClick(wordData, wordIdx)}
              />
            ))
          ) : (
            arabicWords.map((word, wordIdx) => (
              <WordItem
                key={`${ayahNum}-${wordIdx}`}
                word={word}
                isActive={selectedWordData?.key === `${ayahNum}-${wordIdx}`}
                hidden={shouldHideWord(wordIdx)}
                showOnHover={hideLevel > 0 && hideLevel < 4}
                onClick={() => handleWordClick(word, wordIdx)}
              />
            ))
          )
        ) : tajweedMode && verse.tajweedSegments ? (
          <TajweedText segments={verse.tajweedSegments} />
        ) : (
          verse.arabic
        )}

        {/* Inline badge - after Arabic text */}
        {readerStyleConfig.badgePosition === 'inline' && (
          <span
            className={readerStyleConfig.ayahBadge}
            style={{
              background: verseColors.badgeBg,
              color: verseColors.badgeColor,
              border: `1px solid ${verseColors.activeBorder}`,
            }}
          >
            {ayahNum}
          </span>
        )}
      </div>

      {/* Absolute positioned badge - top corner or centered */}
      {(readerStyleConfig.badgePosition === 'absolute' ||
        readerStyleConfig.badgePosition === 'absolute-bottom') && (
        <span
          className={readerStyleConfig.ayahBadge}
          style={{
            background: verseColors.badgeBg,
            color: verseColors.badgeColor,
            border: `1px solid ${verseColors.activeBorder}`,
          }}
        >
          {ayahNum}
        </span>
      )}

      {/* Translation */}
      {showTranslation && verse.translation && (
        <p
          className="leading-relaxed mb-2"
          style={{
            fontSize: fontSizeMap[fontSize].translation,
            color: verseColors.translation,
          }}
        >
          {verse.translation}
        </p>
      )}

      {/* Word meaning popup */}
      {isWordPopupShowing && (
        <div
          className="mt-2 p-3 rounded-xl"
          style={{
            animation: 'slideDown 0.2s ease-out',
            background: readerStyleConfig.isDark
              ? 'rgba(0,0,0,0.3)'
              : 'rgba(0,0,0,0.05)',
          }}
        >
          <div className="flex items-start gap-3">
            {/* Play Word Audio Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onPlayWordAudio && selectedWordData?.audioUrl) {
                  onPlayWordAudio(selectedWordData);
                }
              }}
              disabled={!selectedWordData?.audioUrl || wordAudioPlaying}
              className={`p-2 rounded-full transition-all ${
                wordAudioPlaying
                  ? 'bg-emerald-500 animate-pulse cursor-wait'
                  : selectedWordData?.audioUrl
                  ? 'bg-emerald-500/80 hover:bg-emerald-500 hover:scale-110 cursor-pointer'
                  : 'bg-gray-500/30 cursor-not-allowed opacity-50'
              }`}
              aria-label={
                selectedWordData?.audioUrl
                  ? 'Play word audio'
                  : 'Audio not available'
              }
              title={
                selectedWordData?.audioUrl
                  ? 'Play pronunciation'
                  : 'Audio not available for this word'
              }
            >
              {wordAudioPlaying ? (
                <Icons.Loader className="w-4 h-4 text-white animate-spin" />
              ) : selectedWordData?.audioUrl ? (
                <Icons.Play className="w-4 h-4 text-white" />
              ) : (
                <Icons.Volume className="w-4 h-4 text-white/50" />
              )}
            </button>

            <div
              className="text-2xl"
              style={{ fontFamily: "'Scheherazade New', serif" }}
              dir="rtl"
            >
              {selectedWordData?.word}
            </div>

            <div className="flex-1 text-left">
              {selectedWordData?.transliteration && (
                <p className="text-white/60 text-xs italic">
                  {selectedWordData.transliteration}
                </p>
              )}
              <p className="text-white text-sm">
                {selectedWordData?.meaning || 'Loading...'}
              </p>
              {!selectedWordData?.audioUrl && (
                <p className="text-amber-400/60 text-[10px] mt-1">
                  Audio not available
                </p>
              )}
              {wordAudioError && (
                <p className="text-red-400/80 text-[10px] mt-1">
                  {wordAudioError}
                </p>
              )}
            </div>

            <button
              onClick={onClearSelectedWord}
              className="p-1 rounded-full hover:bg-white/20"
            >
              <Icons.X className="w-3 h-3 text-white/50" />
            </button>
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex items-center gap-1.5">
        {/* Play button */}
        <button
          onClick={() => onTogglePlayback(ayahNum)}
          className={`p-1.5 rounded-full transition-all hover:scale-110 ${
            isCurrentAyah && isPlaying ? 'bg-white/40' : 'bg-white/15'
          }`}
          title="Play Arabic recitation"
        >
          {audioLoading && isCurrentAyah ? (
            <Icons.Loader className="w-3 h-3 animate-spin" />
          ) : isCurrentAyah && isPlaying ? (
            <Icons.Pause className="w-3 h-3" />
          ) : (
            <Icons.Play className="w-3 h-3" />
          )}
        </button>

        {/* Speak translation button */}
        {showTranslation && verse.translation && (
          <button
            onClick={() => onSpeakTranslation(ayahNum, verse.translation)}
            className={`p-1.5 rounded-full transition-all hover:scale-110 ${
              speakingAyah === ayahNum
                ? 'bg-cyan-500/80 animate-pulse'
                : 'bg-white/15'
            }`}
            title="Read translation aloud"
          >
            {speakingAyah === ayahNum ? (
              <Icons.Volume className="w-3 h-3" />
            ) : (
              <Icons.Headphones className="w-3 h-3" />
            )}
          </button>
        )}

        {/* Share button */}
        <button
          onClick={() => onShare(verse, ayahNum)}
          className={`p-1.5 rounded-full transition-all hover:scale-110 ${
            shareStatus === ayahNum ? 'bg-emerald-500/80' : 'bg-white/15'
          }`}
          title="Share verse"
        >
          {shareStatus === ayahNum ? (
            <Icons.Check className="w-3 h-3" />
          ) : (
            <Icons.Share className="w-3 h-3" />
          )}
        </button>

        {/* Grammar/Ontology Analysis Button */}
        {(hasTreebankData || hasOntologyData) && (
          <button
            onClick={() => onOpenTreebank(ayahNum)}
            className={`p-1.5 rounded-full transition-all hover:scale-110 relative ${
              canAccessTreebank
                ? 'bg-purple-500/30 hover:bg-purple-500/50'
                : 'bg-white/15'
            }`}
            title={hasTreebankData ? 'Grammar & Concept Analysis' : 'Concept Analysis'}
          >
            <Icons.BookOpen className="w-3 h-3 text-purple-300" />
            {!canAccessTreebank && hasTreebankData && (
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-500 rounded-full flex items-center justify-center">
                <Icons.Lock className="w-1.5 h-1.5 text-white" />
              </span>
            )}
          </button>
        )}
      </div>
    </div>
  );
});

export default VerseItem;
