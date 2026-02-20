/**
 * VideosFloatingBubble Component
 * Displays Quran-related videos from world-renowned scholars and reciters
 *
 * Features:
 * - Filter by reciters or scholars
 * - Direct YouTube search links
 * - Quick search buttons for recitations and tafseer
 *
 * Follows Single Responsibility Principle - handles only video discovery
 */

import { memo, useState, useMemo, useCallback } from 'react';
import { Icons } from '../../common/Icons';
import FloatingFeatureBubble from './FloatingFeatureBubble';
import {
  YOUTUBE_SCHOLARS,
  filterScholarsByType,
  getScholarSearchUrl,
  getGeneralSearchUrl,
} from '../data/scholars';

const TYPE_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'reciter', label: 'Reciters' },
  { id: 'scholar', label: 'Scholars' },
];

const VideosFloatingBubble = memo(function VideosFloatingBubble({
  isVisible,
  onClose,
  surahId,
  surahName,
}) {
  const [selectedType, setSelectedType] = useState('all');

  const filteredScholars = useMemo(
    () => filterScholarsByType(selectedType),
    [selectedType]
  );

  const openYouTubeSearch = useCallback(
    (scholar) => {
      const url = getScholarSearchUrl(scholar, surahName, selectedType);
      window.open(url, '_blank');
    },
    [surahName, selectedType]
  );

  const openGeneralSearch = useCallback(
    (type) => {
      const url = getGeneralSearchUrl(surahName, type);
      window.open(url, '_blank');
    },
    [surahName]
  );

  const getTypeLabel = () => {
    switch (selectedType) {
      case 'reciter':
        return 'World-Renowned Reciters';
      case 'scholar':
        return 'Islamic Scholars';
      default:
        return 'Scholars & Reciters';
    }
  };

  return (
    <FloatingFeatureBubble
      isVisible={isVisible}
      onClose={onClose}
      title="Quran Videos"
      icon={Icons.Video}
      gradient={['#EF4444', '#DC2626', '#B91C1C']}
      position={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }}
      size="medium"
    >
      {/* Type Filter */}
      <div className="flex gap-1 mb-3 p-1 bg-white/10 rounded-xl">
        {TYPE_FILTERS.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${
              selectedType === type.id
                ? 'bg-white/25 text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Quick Search Buttons */}
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => openGeneralSearch('recitation')}
          className="flex-1 py-2 px-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs text-white font-medium transition-all flex items-center justify-center gap-2"
        >
          <Icons.Headphones className="w-3.5 h-3.5" />
          Recitations
        </button>
        <button
          onClick={() => openGeneralSearch('tafseer explanation')}
          className="flex-1 py-2 px-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs text-white font-medium transition-all flex items-center justify-center gap-2"
        >
          <Icons.BookOpen className="w-3.5 h-3.5" />
          Tafseer
        </button>
      </div>

      {/* Scholar/Reciter List */}
      <div className="space-y-2 max-h-[240px] overflow-y-auto">
        <p className="text-white/50 text-[10px] uppercase tracking-wide mb-2">
          {getTypeLabel()}
        </p>
        {filteredScholars.map((scholar) => (
          <button
            key={scholar.id}
            onClick={() => openYouTubeSearch(scholar)}
            className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all text-left group"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{
                  background:
                    scholar.type === 'reciter'
                      ? 'linear-gradient(135deg, #10B981, #059669)'
                      : 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                }}
              >
                {scholar.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium">{scholar.name}</p>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      scholar.type === 'reciter'
                        ? 'bg-emerald-500/30 text-emerald-300'
                        : 'bg-purple-500/30 text-purple-300'
                    }`}
                  >
                    {scholar.type === 'reciter' ? 'Reciter' : 'Scholar'}
                  </span>
                  <span className="text-white/40 text-[10px]">
                    {scholar.country}
                  </span>
                </div>
              </div>
              <Icons.ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 mt-3 border-t border-white/10">
        <p className="text-white/40 text-[10px] text-center">
          Click on any scholar to search their {surahName} videos on YouTube
        </p>
      </div>
    </FloatingFeatureBubble>
  );
});

export default VideosFloatingBubble;
