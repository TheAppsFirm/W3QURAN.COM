/**
 * QuranQuoteBlock — Beautiful inline verse quote block for discussions.
 * Fetches Arabic + translation from Quran.com API and renders
 * a styled card with amber accent.
 */

import React, { useState, useEffect } from 'react';
import { getSurahById } from '../../data';
import { QUOTE_TRANSLATIONS } from './quranQuoteUtils';

// Module-level cache to avoid re-fetching the same ayah+translation
const verseCache = new Map();

function cacheKey(surah, ayah, tid) {
  return `${surah}:${ayah}:${tid}`;
}

export default function QuranQuoteBlock({ surah, ayah, translationId = 234, onOpenAyah }) {
  const [arabic, setArabic] = useState('');
  const [translation, setTranslation] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const surahInfo = getSurahById(surah);
  const surahName = surahInfo ? surahInfo.name : `Surah ${surah}`;
  const surahArabic = surahInfo ? surahInfo.arabic : '';
  const transInfo = QUOTE_TRANSLATIONS.find(t => t.id === translationId);

  useEffect(() => {
    let cancelled = false;

    async function fetchVerse() {
      const key = cacheKey(surah, ayah, translationId);

      if (verseCache.has(key)) {
        const cached = verseCache.get(key);
        setArabic(cached.arabic);
        setTranslation(cached.translation);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(false);

      try {
        const res = await fetch(
          `https://api.quran.com/api/v4/verses/by_key/${surah}:${ayah}?words=false&translations=${translationId}&fields=text_uthmani`
        );
        if (!res.ok) throw new Error('Fetch failed');
        const json = await res.json();

        if (cancelled) return;

        const arabicText = json.verse?.text_uthmani || '';
        const rawTranslation = json.verse?.translations?.[0]?.text || '';
        const cleanTranslation = rawTranslation.replace(/<[^>]+>/g, '');

        verseCache.set(key, { arabic: arabicText, translation: cleanTranslation });

        setArabic(arabicText);
        setTranslation(cleanTranslation);
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchVerse();
    return () => { cancelled = true; };
  }, [surah, ayah, translationId]);

  const handleClick = () => {
    onOpenAyah?.(surah, ayah);
  };

  if (loading) {
    return (
      <div className="rounded-xl bg-amber-500/[0.04] border-l-2 border-amber-500/50 p-4 my-2 flex items-center gap-2">
        <svg className="animate-spin h-4 w-4 text-amber-400/60" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <span className="text-[11px] text-white/30">Loading {surahName} {surah}:{ayah}...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl bg-red-500/[0.04] border-l-2 border-red-500/30 p-3 my-2">
        <span className="text-[11px] text-red-400/60">Could not load {surahName} {surah}:{ayah}</span>
      </div>
    );
  }

  const isRTL = transInfo?.langCode === 'ur' || transInfo?.langCode === 'ar';

  return (
    <div
      className="rounded-xl bg-amber-500/[0.04] border-l-2 border-amber-500/50 p-4 my-2 cursor-pointer hover:bg-amber-500/[0.08] transition-colors"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') handleClick(); }}
    >
      {/* Arabic text */}
      <p
        className="text-right text-lg leading-loose text-white/90"
        style={{ fontFamily: "'Scheherazade New', serif" }}
        dir="rtl"
      >
        {arabic}
      </p>

      {/* Translation */}
      {translation && (
        <p
          className={`text-sm text-white/50 leading-relaxed mt-2 ${isRTL ? 'text-right' : ''}`}
          dir={isRTL ? 'rtl' : 'ltr'}
          style={isRTL ? { fontFamily: "'Noto Nastaliq Urdu', serif", lineHeight: '2' } : {}}
        >
          {translation}
        </p>
      )}

      {/* Footer */}
      <div className="text-[10px] text-amber-400/60 mt-2 flex items-center gap-1.5">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        </svg>
        <span>
          {surahName} {surahArabic ? `(${surahArabic})` : ''} · Ayah {ayah}
        </span>
        {transInfo && (
          <span className="text-white/20">· {transInfo.nameEn}</span>
        )}
        <span className="ml-auto text-amber-400/40 hover:text-amber-400/80 transition-colors">
          Open →
        </span>
      </div>
    </div>
  );
}
