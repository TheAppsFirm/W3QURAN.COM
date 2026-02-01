/**
 * ZoomSlider Component
 * Single Responsibility: Control zoom levels for bubbles and content
 */

import { memo } from 'react';
import { Icons } from '../common/Icons';

/**
 * Single zoom control slider
 */
const ZoomControl = memo(function ZoomControl({
  value,
  onChange,
  label,
  icon: Icon,
  colorFrom,
  colorTo,
  min = 0.5,
  max = 2,
  step = 0.1
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 sm:gap-2">
      <span className="text-[8px] sm:text-[10px] font-semibold text-gray-500 uppercase tracking-wide">{label}</span>
      <button
        onClick={() => onChange(Math.min(max, value + step))}
        className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${colorFrom} ${colorTo} flex items-center justify-center text-white active:scale-95 sm:hover:scale-110 transition-all shadow-md touch-target`}
      >
        <Icons.ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </button>
      <div className="relative h-16 sm:h-24 w-1.5">
        <div className="absolute inset-0 bg-gray-200 rounded-full" />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${colorFrom} ${colorTo} rounded-full transition-all`}
          style={{ height: `${((value - min) / (max - min)) * 100}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ writingMode: 'bt-lr', WebkitAppearance: 'slider-vertical' }}
        />
      </div>
      <button
        onClick={() => onChange(Math.max(min, value - step))}
        className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white active:scale-95 sm:hover:scale-110 transition-all shadow-md touch-target"
      >
        <Icons.ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </button>
      <span className="text-[9px] sm:text-[11px] font-bold text-gray-600">{Math.round(value * 100)}%</span>
    </div>
  );
});

/**
 * Dual zoom slider component
 */
const ZoomSlider = memo(function ZoomSlider({
  zoom,
  setZoom,
  contentZoom,
  setContentZoom
}) {
  return (
    <div className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl border border-gray-200/60">
      <div className="flex gap-3 sm:gap-4">
        {/* Bubble Size Zoom */}
        <ZoomControl
          value={zoom}
          onChange={setZoom}
          label="Bubble"
          icon={Icons.ZoomIn}
          colorFrom="from-emerald-500"
          colorTo="to-teal-500"
          min={0.5}
          max={2}
          step={0.1}
        />

        {/* Divider */}
        <div className="w-px bg-gray-200" />

        {/* Content Size Zoom */}
        <ZoomControl
          value={contentZoom}
          onChange={setContentZoom}
          label="Text"
          icon={Icons.ZoomIn}
          colorFrom="from-purple-500"
          colorTo="to-fuchsia-500"
          min={0.6}
          max={1.5}
          step={0.1}
        />
      </div>
    </div>
  );
});

export default ZoomSlider;
