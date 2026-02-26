/**
 * MemorizePanel Component
 * Provides memorization (Hifz) mode settings and controls
 *
 * Features:
 * - Progressive word hiding levels (0-4)
 * - Repeat count configuration
 * - Memorization tips
 *
 * Follows Single Responsibility Principle - handles only memorization settings
 */

import { memo, useState, useEffect } from 'react';
import { Icons } from '../../common/Icons';
import { useTranslation } from '../../../contexts/LocaleContext';

// Word visibility levels for progressive memorization
// Labels and descriptions use translation keys resolved at render time
const HIDE_LEVELS = [
  { level: 0, labelKey: 'reader.showAll', descKey: 'reader.allWordsVisible', bars: 5 },
  { level: 1, labelKey: 'reader.hide25', descKey: 'reader.every4thWordHidden', bars: 4 },
  { level: 2, labelKey: 'reader.hide50', descKey: 'reader.every2ndWordHidden', bars: 3 },
  { level: 3, labelKey: 'reader.hide75', descKey: 'reader.mostWordsHidden', bars: 2 },
  { level: 4, labelKey: 'reader.hideAll', descKey: 'reader.allWordsHidden', bars: 1 },
];

// Repeat count options
const REPEAT_OPTIONS = [1, 3, 5, 7, 10];

const MemorizePanel = memo(function MemorizePanel({
  onSettingsChange,
  currentSettings,
  onClose,
}) {
  const { t } = useTranslation();
  const [hideLevel, setHideLevel] = useState(currentSettings?.hideLevel || 0);
  const [repeatCount, setRepeatCount] = useState(currentSettings?.repeatCount || 3);

  // Notify parent of settings changes
  useEffect(() => {
    onSettingsChange({ hideLevel, repeatCount });
  }, [hideLevel, repeatCount, onSettingsChange]);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 flex items-center justify-between pb-3 border-b border-white/20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
            <Icons.Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold">{t('reader.memorize')}</h3>
            <p className="text-white/60 text-xs">{t('reader.hifzMode')}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/10 transition-all"
        >
          <Icons.X className="w-4 h-4 text-white/70" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-3 space-y-4">
        {/* Word Visibility Selector */}
        <div>
          <label className="text-white/80 text-xs font-medium mb-2 block">
            {t('reader.wordVisibility')}
          </label>
          <div className="space-y-2">
            {HIDE_LEVELS.map(({ level, labelKey, descKey, bars }) => (
              <button
                key={level}
                onClick={() => setHideLevel(level)}
                className={`w-full p-3 rounded-xl text-left transition-all ${
                  hideLevel === level
                    ? 'bg-amber-500/30 ring-2 ring-amber-400/50'
                    : 'bg-white/10 hover:bg-white/15'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm font-medium">{t(labelKey)}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-4 rounded ${
                          i < bars ? 'bg-amber-400' : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-white/50 text-xs mt-0.5">{t(descKey)}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Repeat Count Selector */}
        <div>
          <label className="text-white/80 text-xs font-medium mb-2 block">
            {t('reader.repeatEachAyah')}
          </label>
          <div className="flex gap-2">
            {REPEAT_OPTIONS.map((count) => (
              <button
                key={count}
                onClick={() => setRepeatCount(count)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  repeatCount === count
                    ? 'bg-amber-500/50 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {count}x
              </button>
            ))}
          </div>
        </div>

        {/* Memorization Tip */}
        <div className="p-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="text-white font-medium text-sm mb-1">
                {t('reader.memorizationTip')}
              </p>
              <p className="text-white/70 text-xs leading-relaxed">
                {t('reader.memorizationTipText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MemorizePanel;
