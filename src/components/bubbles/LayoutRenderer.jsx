/**
 * LayoutRenderer.jsx
 * Renders the selected bubble layout. This component is lazy-loaded
 * to keep all 14 layout components out of the main bundle.
 */

import React from 'react';
import {
  ClockLayout,
  GridLayout,
  JuzzGroupLayout,
  AlphabetLayout,
  RevelationLayout,
  BookLayout,
  ListLayout,
  CompactLayout,
  HoneycombLayout,
  WaveLayout,
  LengthLayout,
  KidsLayout,
  ArtLayout,
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
  'kids-art': ArtLayout,
};

const LayoutRenderer = ({ layoutId, surahs, onSurahClick, zoom, contentZoom, darkMode }) => {
  // Kids layouts with variants
  if (layoutId === 'kids-rainbow' || layoutId === 'kids-blocks' || layoutId === 'kids-bubbles') {
    return (
      <KidsLayout
        surahs={surahs}
        onSurahClick={onSurahClick}
        zoom={zoom}
        contentZoom={contentZoom}
        darkMode={darkMode}
        variant={layoutId.replace('kids-', '')}
      />
    );
  }

  const LayoutComponent = LAYOUT_MAP[layoutId];
  if (!LayoutComponent) return null;

  return (
    <LayoutComponent
      surahs={surahs}
      onSurahClick={onSurahClick}
      zoom={zoom}
      contentZoom={contentZoom}
      darkMode={darkMode}
    />
  );
};

export default LayoutRenderer;
