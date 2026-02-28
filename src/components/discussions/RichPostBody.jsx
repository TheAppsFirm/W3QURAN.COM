/**
 * RichPostBody — Renders post/comment body with inline Quran quote blocks.
 * Parses [quran:S:A] markers and renders them as QuranQuoteBlock components.
 */

import React, { useMemo } from 'react';
import { parseQuranQuotes, stripQuranQuotes } from './quranQuoteUtils';
import QuranQuoteBlock from './QuranQuoteBlock';

export default function RichPostBody({ text, onOpenAyah, truncated }) {
  const segments = useMemo(() => parseQuranQuotes(text), [text]);

  // Truncated mode: show plain text preview with stripped quote markers
  if (truncated) {
    const plain = stripQuranQuotes(text || '');
    const display = plain.length > 300 ? plain.slice(0, 300) + '...' : plain;

    return (
      <p className="text-sm text-white/55 leading-relaxed whitespace-pre-wrap">
        {display}
      </p>
    );
  }

  // Full mode: render text segments and Quran quote blocks
  return (
    <div>
      {segments.map((segment, i) => {
        if (segment.type === 'text') {
          return (
            <p key={i} className="text-sm text-white/55 leading-relaxed whitespace-pre-wrap">
              {segment.content}
            </p>
          );
        }

        if (segment.type === 'quran') {
          return (
            <QuranQuoteBlock
              key={`q-${segment.surah}-${segment.ayah}-${segment.translationId}-${i}`}
              surah={segment.surah}
              ayah={segment.ayah}
              translationId={segment.translationId}
              onOpenAyah={onOpenAyah}
            />
          );
        }

        return null;
      })}
    </div>
  );
}
