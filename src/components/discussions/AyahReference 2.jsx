/**
 * AyahReference — Renders inline ayah reference cards.
 * Shows surah:ayah number with a tappable link.
 */

import React from 'react';
import { Icons } from '../common';

export default function AyahReference({ refs, onOpenAyah }) {
  if (!refs || refs.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {refs.map((ref, i) => (
        <button
          key={i}
          onClick={() => onOpenAyah?.(ref.surah, ref.ayah)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg
            bg-purple-500/15 border border-purple-500/30
            text-purple-300 text-xs font-medium
            hover:bg-purple-500/25 hover:border-purple-400/50 transition-all"
        >
          <Icons.BookOpen className="w-3 h-3" />
          <span>{ref.surah}:{ref.ayah}{ref.ayahEnd ? `-${ref.ayahEnd}` : ''}</span>
        </button>
      ))}
    </div>
  );
}
