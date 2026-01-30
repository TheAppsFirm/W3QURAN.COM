/**
 * ListenView Component
 * Single Responsibility: Display reciters and translations
 */

import { useState } from 'react';
import { Icons } from '../common/Icons';
import { PALETTES } from '../../data';

// Sample reciters data
const RECITERS = [
  { id: 1, name: 'Mishary Rashid', country: 'Kuwait', style: 'Murattal', popular: true },
  { id: 2, name: 'Abdul Rahman Al-Sudais', country: 'Saudi Arabia', style: 'Murattal', popular: true },
  { id: 3, name: 'Saud Al-Shuraim', country: 'Saudi Arabia', style: 'Murattal', popular: true },
  { id: 4, name: 'Maher Al-Muaiqly', country: 'Saudi Arabia', style: 'Murattal', popular: true },
  { id: 5, name: 'Ahmad Al-Ajmi', country: 'Kuwait', style: 'Murattal' },
  { id: 6, name: 'Abdul Basit', country: 'Egypt', style: 'Mujawwad', pro: true },
];

// Sample translations
const TRANSLATIONS = [
  { id: 'sahih', name: 'Sahih International', language: 'English', description: 'Clear and accurate' },
  { id: 'pickthall', name: 'Pickthall', language: 'English', description: 'Traditional translation' },
  { id: 'yusufali', name: 'Yusuf Ali', language: 'English', description: 'With commentary' },
  { id: 'urdu', name: 'Fateh Muhammad Jalandhri', language: 'Urdu', description: 'Popular Urdu translation' },
];

function ListenView({ level }) {
  const [activeTab, setActiveTab] = useState('reciters');
  const [selectedReciter, setSelectedReciter] = useState(null);
  const [selectedTranslation, setSelectedTranslation] = useState('sahih');
  const [reciterFilter, setReciterFilter] = useState('all');

  const filteredReciters = RECITERS.filter((r) => {
    if (reciterFilter === 'popular') return r.popular;
    if (reciterFilter === 'murattal') return r.style === 'Murattal';
    if (reciterFilter === 'mujawwad') return r.style === 'Mujawwad';
    return true;
  });

  return (
    <div className="h-full flex flex-col p-6 overflow-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Listen to Quran</h2>

      {/* Tab Switcher */}
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setActiveTab('reciters')}
          className={`px-6 py-3 rounded-full font-semibold transition-all ${
            activeTab === 'reciters'
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Icons.Mic className="w-4 h-4 inline mr-2" />
          Reciters
        </button>
        <button
          onClick={() => setActiveTab('translations')}
          className={`px-6 py-3 rounded-full font-semibold transition-all ${
            activeTab === 'translations'
              ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Icons.Globe className="w-4 h-4 inline mr-2" />
          Translations
        </button>
      </div>

      {activeTab === 'reciters' && (
        <>
          {/* Reciter Filters */}
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {[
              { id: 'all', label: 'All' },
              { id: 'popular', label: 'Popular' },
              { id: 'murattal', label: 'Murattal' },
              { id: 'mujawwad', label: 'Mujawwad' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setReciterFilter(f.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  reciterFilter === f.id ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Reciters Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {filteredReciters.map((reciter, i) => {
              const p = PALETTES[(i + 4) % 10];
              const locked = reciter.pro && level === 'starter';
              const isSelected = selectedReciter === reciter.id;
              return (
                <div
                  key={reciter.id}
                  onClick={() => !locked && setSelectedReciter(reciter.id)}
                  className={`relative rounded-2xl p-4 text-center cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                    locked ? 'opacity-60' : 'hover:scale-105'
                  } ${isSelected ? 'ring-4 ring-white ring-offset-2' : ''}`}
                  style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]}, ${p.colors[2]})` }}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0%, transparent 40%)`,
                    }}
                  />
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 border border-white/30">
                      {isSelected ? <Icons.Check className="w-8 h-8 text-white" /> : <Icons.Volume className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="font-bold text-white text-sm">{reciter.name}</h3>
                    <p className="text-white/70 text-xs">{reciter.country}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 bg-white/20 rounded-full text-white text-xs">{reciter.style}</span>
                    {locked && (
                      <div className="flex items-center justify-center gap-1 text-yellow-200 mt-2 text-xs font-semibold">
                        <Icons.Lock className="w-3 h-3" /> PRO
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {activeTab === 'translations' && (
        <div className="max-w-2xl mx-auto w-full">
          <p className="text-center text-gray-500 mb-6">Select your preferred translation</p>
          <div className="space-y-3">
            {TRANSLATIONS.map((trans, i) => {
              const isSelected = selectedTranslation === trans.id;
              const p = PALETTES[(i + 2) % 10];
              return (
                <div
                  key={trans.id}
                  onClick={() => setSelectedTranslation(trans.id)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all ${
                    isSelected ? 'bg-gradient-to-r shadow-lg' : 'bg-white hover:bg-gray-50 border border-gray-100'
                  }`}
                  style={isSelected ? { background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]})` } : {}}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`font-bold ${isSelected ? 'text-white' : 'text-gray-800'}`}>{trans.name}</h3>
                      <p className={`text-sm ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                        {trans.language} • {trans.description}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Icons.Check className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListenView;
