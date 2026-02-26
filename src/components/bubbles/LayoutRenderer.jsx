/**
 * LayoutRenderer — Lazy-loaded wrapper for all surah layout components.
 * Keeps the 80KB BubbleLayouts out of the initial bundle.
 */
import { memo } from 'react';
import {
  ClockLayout, GridLayout, JuzzGroupLayout, AlphabetLayout,
  RevelationLayout, BookLayout, ListLayout, CompactLayout,
  HoneycombLayout, WaveLayout, LengthLayout, KidsLayout, ArtLayout,
} from './BubbleLayouts';

const LAYOUT_MAP = {
  clock: ClockLayout,
  grid: GridLayout,
  juzz: JuzzGroupLayout,
  alphabet: AlphabetLayout,
  revelation: RevelationLayout,
  book: BookLayout,
  list: ListLayout,
  compact: CompactLayout,
  honeycomb: HoneycombLayout,
  wave: WaveLayout,
  length: LengthLayout,
};

function LayoutRenderer({ layout, surahs, onSurahClick, zoom, contentZoom, darkMode }) {
  // Kids layouts
  if (layout === 'kids-rainbow' || layout === 'kids-blocks' || layout === 'kids-bubbles') {
    return <KidsLayout surahs={surahs} onSurahClick={onSurahClick} zoom={zoom} contentZoom={contentZoom} darkMode={darkMode} variant={layout.replace('kids-', '')} />;
  }
  if (layout === 'kids-art') {
    return <ArtLayout surahs={surahs} onSurahClick={onSurahClick} zoom={zoom} contentZoom={contentZoom} darkMode={darkMode} />;
  }

  const Layout = LAYOUT_MAP[layout];
  if (!Layout) return null;
  return <Layout surahs={surahs} onSurahClick={onSurahClick} zoom={zoom} contentZoom={contentZoom} darkMode={darkMode} />;
}

export default memo(LayoutRenderer);
