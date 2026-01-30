/**
 * ZoomSlider Component
 * Single Responsibility: Control zoom level
 */

import { memo } from 'react';
import { Icons } from '../common/Icons';

const ZoomSlider = memo(function ZoomSlider({ zoom, setZoom }) {
  return (
    <div className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl border border-gray-200/60">
      <div className="flex flex-col items-center gap-2 sm:gap-3">
        <button
          onClick={() => setZoom(Math.min(2, zoom + 0.1))}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white active:scale-95 sm:hover:scale-110 transition-all shadow-lg touch-target"
        >
          <Icons.ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <div className="relative h-20 sm:h-32 w-2">
          <div className="absolute inset-0 bg-gray-200 rounded-full" />
          <div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-500 to-teal-500 rounded-full transition-all"
            style={{ height: `${((zoom - 0.5) / 1.5) * 100}%` }}
          />
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            style={{ writingMode: 'bt-lr', WebkitAppearance: 'slider-vertical' }}
          />
        </div>
        <button
          onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white active:scale-95 sm:hover:scale-110 transition-all shadow-lg touch-target"
        >
          <Icons.ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <span className="text-[10px] sm:text-xs font-bold text-gray-600">{Math.round(zoom * 100)}%</span>
      </div>
    </div>
  );
});

export default ZoomSlider;
