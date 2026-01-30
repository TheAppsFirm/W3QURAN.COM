/**
 * DonateView Component
 * Single Responsibility: Display donation options
 */

import { Icons } from '../common/Icons';
import { PALETTES } from '../../data';

function DonateView() {
  const amounts = [5, 10, 25, 50, 100, 'Custom'];

  return (
    <div className="h-full flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Support the Project</h2>
      <div className="grid grid-cols-3 gap-4 max-w-md">
        {amounts.map((a, i) => {
          const p = PALETTES[(i + 6) % 10];
          return (
            <div
              key={i}
              className="relative rounded-2xl p-6 text-center cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
              style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]}, ${p.colors[2]})` }}
            >
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  background: `
                    radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 50%),
                    radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)
                  `,
                }}
              />
              <div className="relative z-10">
                <Icons.Heart className="w-10 h-10 mx-auto text-white mb-2" />
                <p className="font-bold text-white text-xl">{typeof a === 'number' ? `$${a}` : a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DonateView;
