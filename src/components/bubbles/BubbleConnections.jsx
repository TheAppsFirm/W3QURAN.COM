/**
 * BubbleConnections Component
 * Simple connections between nearby bubbles (RTL layout)
 */

import { memo, useMemo } from 'react';

const CONNECTION_COLORS = [
  '#667eea', '#f093fb', '#4facfe', '#43e97b', '#fa709a',
  '#a8edea', '#d299c2', '#89f7fe', '#fddb92', '#a1c4fd',
];

const BubbleConnections = memo(function BubbleConnections({ surahs, zoom = 1 }) {
  const size = 95 * zoom;
  const gap = 12 * zoom;
  const cols = 10;

  // Calculate positions
  const positions = useMemo(() => {
    return surahs.map((_, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      const rtlCol = (cols - 1) - col;
      const x = rtlCol * (size + gap) + size / 2;
      const y = row * (size + gap) + size / 2;
      return { x, y, index };
    });
  }, [surahs.length, size, gap]);

  // Calculate connections (horizontal and vertical neighbors)
  const connections = useMemo(() => {
    const result = [];

    positions.forEach((pos, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);

      // Right neighbor (in data order = left visually)
      if (col < cols - 1 && i + 1 < positions.length) {
        const n = positions[i + 1];
        result.push({ x1: pos.x, y1: pos.y, x2: n.x, y2: n.y, id: `${i}-r` });
      }

      // Bottom neighbor
      const bottomIdx = i + cols;
      if (bottomIdx < positions.length) {
        const n = positions[bottomIdx];
        result.push({ x1: pos.x, y1: pos.y, x2: n.x, y2: n.y, id: `${i}-b` });
      }
    });

    return result;
  }, [positions]);

  const rows = Math.ceil(surahs.length / cols);
  const width = cols * (size + gap);
  const height = rows * (size + gap);

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      style={{ width, height, overflow: 'visible' }}
    >
      <defs>
        <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
        </filter>
      </defs>

      <g filter="url(#lineGlow)">
        {connections.map((conn, i) => {
          const color = CONNECTION_COLORS[i % CONNECTION_COLORS.length];
          return (
            <line
              key={conn.id}
              x1={conn.x1}
              y1={conn.y1}
              x2={conn.x2}
              y2={conn.y2}
              stroke={color}
              strokeWidth={1.5 * zoom}
              strokeOpacity={0.15}
              strokeLinecap="round"
            />
          );
        })}
      </g>
    </svg>
  );
});

export default BubbleConnections;
