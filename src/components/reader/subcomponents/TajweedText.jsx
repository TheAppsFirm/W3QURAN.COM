/**
 * TajweedText Component
 * Renders Arabic text with tajweed color coding
 *
 * Extracted from BubbleReaderOverlay for better maintainability
 */

import { memo } from 'react';

const TajweedText = memo(function TajweedText({ segments }) {
  if (!segments || segments.length === 0) return null;

  return (
    <span>
      {segments.map((segment, index) => {
        if (segment.type === 'plain') {
          return <span key={index}>{segment.text}</span>;
        }
        return (
          <span
            key={index}
            style={{ color: segment.color }}
            title={`${segment.name}: ${segment.description}`}
            className="cursor-help"
          >
            {segment.text}
          </span>
        );
      })}
    </span>
  );
});

export default TajweedText;
