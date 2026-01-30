/**
 * NamesOfAllahView Component
 * Single Responsibility: Display the 99 Names of Allah
 */

import { useState } from 'react';
import { Icons } from '../common/Icons';
import { NAMES_OF_ALLAH, PALETTES } from '../../data';

function NamesOfAllahView({ darkMode }) {
  const [selectedName, setSelectedName] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNames = NAMES_OF_ALLAH.filter(
    (name) =>
      name.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      name.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      name.arabic.includes(searchQuery)
  );

  return (
    <div className={`h-full flex flex-col p-6 overflow-auto ${darkMode ? 'text-white' : ''}`}>
      <div className="text-center mb-6">
        <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>99 Names of Allah</h2>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Asma ul Husna - The Beautiful Names</p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto w-full mb-6">
        <div className={`flex items-center gap-2 px-4 py-3 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <Icons.Search className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            placeholder="Search names..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`flex-1 bg-transparent outline-none ${darkMode ? 'text-white placeholder-gray-500' : 'placeholder-gray-400'}`}
          />
        </div>
      </div>

      {/* Names Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {filteredNames.map((name, i) => {
          const p = PALETTES[i % 10];
          return (
            <div
              key={name.id}
              onClick={() => setSelectedName(name)}
              className={`rounded-2xl p-4 cursor-pointer transition-all hover:scale-105 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-xl'
              } shadow-lg`}
            >
              <div className="text-center">
                <div className="text-3xl mb-2" style={{ fontFamily: "'Scheherazade New', serif", color: p.colors[0] }}>
                  {name.arabic}
                </div>
                <div className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>{name.name}</div>
                <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{name.meaning}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Name Modal */}
      {selectedName && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedName(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className={`relative rounded-3xl max-w-md w-full p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelectedName(null)} className="absolute top-4 right-4">
              <Icons.X className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
            <div className="text-center">
              <div
                className="text-6xl mb-4"
                style={{ fontFamily: "'Scheherazade New', serif", color: PALETTES[selectedName.id % 10].colors[0] }}
              >
                {selectedName.arabic}
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedName.name}</h3>
              <p className="text-lg text-emerald-500 font-medium mb-4">{selectedName.meaning}</p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{selectedName.description}</p>
              <div className="mt-4 flex justify-center gap-3">
                <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl flex items-center gap-2">
                  <Icons.Volume className="w-4 h-4" /> Listen
                </button>
                <button className={`px-4 py-2 rounded-xl flex items-center gap-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <Icons.Share className="w-4 h-4" /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NamesOfAllahView;
