/**
 * WordItem Component
 * Renders a single word in word-by-word mode with
 * memorization hiding and hover reveal functionality
 *
 * Extracted from BubbleReaderOverlay for better maintainability
 */

import { memo, useState } from 'react';

const WordItem = memo(function WordItem({
  word,
  isActive,
  onClick,
  hidden = false,
  showOnHover = false
}) {
  const [revealed, setRevealed] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (hidden) {
      setRevealed(!revealed);
    } else if (onClick) {
      onClick();
    }
  };

  const isHidden = hidden && !revealed;

  return (
    <span
      onClick={handleClick}
      onMouseEnter={() => showOnHover && setRevealed(true)}
      onMouseLeave={() => showOnHover && setRevealed(false)}
      role="button"
      tabIndex={0}
      className={`inline-block mx-0.5 cursor-pointer transition-all duration-200 rounded px-1.5 py-1 relative ${
        isActive
          ? 'bg-yellow-400/60 scale-110 shadow-lg ring-2 ring-yellow-300/50'
          : isHidden
            ? 'bg-amber-500/40 hover:bg-amber-500/60'
            : 'hover:bg-white/30 hover:scale-105'
      }`}
      style={{ userSelect: 'none' }}
    >
      {isHidden ? (
        <>
          <span className="opacity-0 select-none" aria-hidden="true">
            {word}
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-white/50 text-xs">
            ?
          </span>
        </>
      ) : (
        word
      )}
    </span>
  );
});

export default WordItem;
