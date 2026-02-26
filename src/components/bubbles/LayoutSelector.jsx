/**
 * Layout Selector — Extracted to keep BubbleLayouts (80KB) out of initial bundle.
 */
import { memo } from 'react';
import { Icons } from '../common/Icons';

const LayoutSelector = memo(function LayoutSelector({ currentLayout, onLayoutChange, darkMode }) {
  const layouts = [
    { id: 'spiral', name: 'Spiral', icon: 'Sparkles', description: 'Fibonacci spiral' },
    { id: 'clock', name: 'Clock', icon: 'Clock', description: 'Circular arrangement' },
    { id: 'grid', name: 'Grid', icon: 'Grid', description: 'Bubble grid' },
    { id: 'juzz', name: 'Juzz', icon: 'Layers', description: 'By Juzz (1-30)' },
    { id: 'alphabet', name: 'Arabic', icon: 'Type', description: 'Arabic alphabet' },
    { id: 'revelation', name: 'Revelation', icon: 'Clock', description: 'Chronological' },
    { id: 'book', name: 'Book', icon: 'BookOpen', description: 'Classic book style' },
  ];

  return (
    <div className={`flex items-center gap-1 p-1 rounded-2xl ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-xl shadow-lg overflow-x-auto hide-scrollbar`}>
      {layouts.map((layout) => {
        const Icon = Icons[layout.icon] || Icons.Grid;
        const isActive = currentLayout === layout.id;

        return (
          <button
            key={layout.id}
            onClick={() => onLayoutChange(layout.id)}
            className={`group relative p-2.5 rounded-xl transition-all duration-300 ${
              isActive
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg scale-105'
                : darkMode
                ? 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }`}
            title={layout.name}
          >
            <Icon className="w-4 h-4" />

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
              <div className={`px-2 py-1 rounded-lg text-[10px] whitespace-nowrap ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'}`}>
                {layout.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
});

export default LayoutSelector;
