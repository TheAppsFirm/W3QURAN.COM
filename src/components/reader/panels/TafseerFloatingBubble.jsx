/**
 * TafseerFloatingBubble Component
 * Displays Quranic commentary (tafseer) in a floating bubble panel
 *
 * Features:
 * - Multiple tafseer sources (per language)
 * - Ayah navigation
 * - Text zoom controls
 * - RTL/LTR support
 *
 * Follows Single Responsibility Principle - handles only tafseer display
 */

import { memo, useState, useEffect, useMemo, useCallback } from 'react';
import { Icons } from '../../common/Icons';
import FloatingFeatureBubble from './FloatingFeatureBubble';
import {
  fetchTafseer,
  getTafseersByLanguage,
  TRANSLATION_TO_TAFSEER_LANG,
  TAFSEER_SOURCES,
} from '../../../data';
import { sanitizeHTML } from '../utils';

// Font size configurations
const FONT_SIZES = {
  0.8: { text: '12px', lineHeight: '1.6' },
  0.9: { text: '13px', lineHeight: '1.7' },
  1: { text: '14px', lineHeight: '1.8' },
  1.1: { text: '15px', lineHeight: '1.9' },
  1.2: { text: '16px', lineHeight: '2' },
  1.3: { text: '18px', lineHeight: '2.1' },
  1.4: { text: '20px', lineHeight: '2.2' },
};

const TafseerFloatingBubble = memo(function TafseerFloatingBubble({
  isVisible,
  onClose,
  surahId,
  ayahNumber,
  verseArabic,
  translationId,
  totalAyahs = 7,
  onAyahChange,
}) {
  const [tafseer, setTafseer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedTafseer, setSelectedTafseer] = useState(null);
  const [textZoom, setTextZoom] = useState(1);
  const [selectedAyah, setSelectedAyah] = useState(ayahNumber);

  const tafseerLang = TRANSLATION_TO_TAFSEER_LANG[translationId] || 'en';
  const availableTafseers = useMemo(
    () => getTafseersByLanguage(tafseerLang),
    [tafseerLang]
  );

  // Update selected ayah when prop changes
  useEffect(() => {
    setSelectedAyah(ayahNumber);
  }, [ayahNumber]);

  // Auto-select first tafseer source
  useEffect(() => {
    if (availableTafseers.length > 0 && !selectedTafseer) {
      setSelectedTafseer(availableTafseers[0].id);
    }
  }, [tafseerLang, availableTafseers, selectedTafseer]);

  // Load tafseer with race condition protection
  const loadTafseer = useCallback(async () => {
    if (!selectedTafseer || !surahId || !selectedAyah) return;

    setLoading(true);
    try {
      const result = await fetchTafseer(surahId, selectedAyah, selectedTafseer);
      setTafseer(result);
    } catch {
      setTafseer({ text: 'Failed to load tafseer', error: true });
    } finally {
      setLoading(false);
    }
  }, [selectedTafseer, surahId, selectedAyah]);

  useEffect(() => {
    if (!isVisible) return;

    let cancelled = false;

    const load = async () => {
      setLoading(true);
      try {
        const result = await fetchTafseer(surahId, selectedAyah, selectedTafseer);
        if (!cancelled) {
          setTafseer(result);
        }
      } catch {
        if (!cancelled) {
          setTafseer({ text: 'Failed to load tafseer', error: true });
        }
      }
      if (!cancelled) {
        setLoading(false);
      }
    };

    if (selectedTafseer && surahId && selectedAyah) {
      load();
    }

    return () => {
      cancelled = true;
    };
  }, [isVisible, selectedTafseer, surahId, selectedAyah]);

  // Navigation handlers
  const goToPrevAyah = useCallback(() => {
    if (selectedAyah > 1) {
      const newAyah = selectedAyah - 1;
      setSelectedAyah(newAyah);
      onAyahChange?.(newAyah);
    }
  }, [selectedAyah, onAyahChange]);

  const goToNextAyah = useCallback(() => {
    if (selectedAyah < totalAyahs) {
      const newAyah = selectedAyah + 1;
      setSelectedAyah(newAyah);
      onAyahChange?.(newAyah);
    }
  }, [selectedAyah, totalAyahs, onAyahChange]);

  const handleAyahSelect = useCallback(
    (e) => {
      const newAyah = parseInt(e.target.value);
      setSelectedAyah(newAyah);
      onAyahChange?.(newAyah);
    },
    [onAyahChange]
  );

  // Zoom handlers
  const decreaseZoom = useCallback(() => {
    setTextZoom((prev) => Math.round(Math.max(0.8, prev - 0.1) * 10) / 10);
  }, []);

  const increaseZoom = useCallback(() => {
    setTextZoom((prev) => Math.round(Math.min(1.4, prev + 0.1) * 10) / 10);
  }, []);

  const currentFontSize = FONT_SIZES[textZoom] || FONT_SIZES[1];

  return (
    <FloatingFeatureBubble
      isVisible={isVisible}
      onClose={onClose}
      title="Tafseer"
      icon={Icons.BookOpen}
      gradient={['#8B5CF6', '#6366F1', '#4F46E5']}
      position={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }}
      size="xlarge"
    >
      {/* Controls Row - Tafseer Source + Zoom */}
      <div className="mb-3 pb-3 border-b border-white/20">
        {/* Tafseer Source Selector */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {availableTafseers.map((t) => {
            const TafseerIcon = Icons[t.icon] || Icons.BookOpen;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedTafseer(t.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[10px] font-medium transition-all ${
                  selectedTafseer === t.id
                    ? 'text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
                style={{
                  background:
                    selectedTafseer === t.id
                      ? `linear-gradient(135deg, ${t.color || '#8B5CF6'}, ${t.color || '#8B5CF6'}99)`
                      : undefined,
                  boxShadow:
                    selectedTafseer === t.id
                      ? `0 4px 15px ${t.color || '#8B5CF6'}40`
                      : undefined,
                }}
              >
                <TafseerIcon className="w-3 h-3" />
                {t.name}
              </button>
            );
          })}
        </div>

        {/* Selected Tafseer Introduction */}
        {selectedTafseer && TAFSEER_SOURCES[selectedTafseer]?.intro && (
          <div className="px-2 py-1.5 bg-white/5 rounded-lg mb-2">
            <p
              className="text-white/60 text-[10px] leading-relaxed"
              dir={TAFSEER_SOURCES[selectedTafseer]?.direction}
            >
              {TAFSEER_SOURCES[selectedTafseer].intro}
            </p>
          </div>
        )}

        {/* Text Zoom Control */}
        <div className="flex items-center justify-end gap-1">
          <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-1">
            <button
              onClick={decreaseZoom}
              className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all"
              title="Decrease text size"
            >
              <Icons.ZoomOut className="w-3 h-3" />
            </button>
            <span className="text-[10px] text-white/70 w-8 text-center">
              {Math.round(textZoom * 100)}%
            </span>
            <button
              onClick={increaseZoom}
              className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all"
              title="Increase text size"
            >
              <Icons.ZoomIn className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Verse Selector */}
      <div className="flex items-center gap-2 mb-3 p-2 bg-white/10 rounded-xl">
        <button
          onClick={goToPrevAyah}
          disabled={selectedAyah <= 1}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            selectedAyah <= 1
              ? 'bg-white/5 text-white/30 cursor-not-allowed'
              : 'bg-white/20 hover:bg-white/30 text-white'
          }`}
        >
          <Icons.ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex-1 flex items-center justify-center gap-2">
          <span className="text-white/60 text-xs">Ayah</span>
          <select
            value={selectedAyah}
            onChange={handleAyahSelect}
            className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-lg cursor-pointer outline-none"
            style={{ minWidth: '60px' }}
          >
            {Array.from({ length: totalAyahs }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num} className="text-gray-800">
                {num}
              </option>
            ))}
          </select>
          <span className="text-white/40 text-xs">of {totalAyahs}</span>
        </div>

        <button
          onClick={goToNextAyah}
          disabled={selectedAyah >= totalAyahs}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            selectedAyah >= totalAyahs
              ? 'bg-white/5 text-white/30 cursor-not-allowed'
              : 'bg-white/20 hover:bg-white/30 text-white'
          }`}
        >
          <Icons.ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Tafseer Content */}
      <div
        className="flex-1 overflow-y-auto overflow-x-hidden"
        style={{ maxHeight: '380px', minHeight: '200px' }}
      >
        {loading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Icons.Loader className="w-8 h-8 animate-spin text-white/60 mb-2" />
            <p className="text-white/50 text-sm">Loading tafseer...</p>
          </div>
        ) : tafseer?.error ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Icons.AlertCircle className="w-10 h-10 text-white/40 mb-2" />
            <p className="text-white/50 text-sm mb-3">{tafseer.text}</p>
            <button
              onClick={loadTafseer}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white text-xs transition-all"
            >
              Try Again
            </button>
          </div>
        ) : tafseer ? (
          <div
            className={`text-white/90 leading-relaxed ${
              tafseer.direction === 'rtl' ? 'text-right' : ''
            }`}
            dir={tafseer.direction}
            style={{
              fontFamily:
                tafseer.direction === 'rtl'
                  ? "'Noto Nastaliq Urdu', 'Scheherazade New', serif"
                  : 'inherit',
              fontSize: currentFontSize.text,
              lineHeight: currentFontSize.lineHeight,
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '100%',
            }}
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(tafseer.text) }}
          />
        ) : null}
      </div>

      {/* Footer */}
      {tafseer && !tafseer.error && (
        <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between">
          <p className="text-white/40 text-[10px]">Source: {tafseer.source}</p>
          <p className="text-white/30 text-[10px]">
            Surah {surahId}, Ayah {selectedAyah}
          </p>
        </div>
      )}
    </FloatingFeatureBubble>
  );
});

export default TafseerFloatingBubble;
