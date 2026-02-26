/**
 * Content Coverage Panel — Full inventory of all app content
 * Client-side only — reads from static data files, no API calls.
 * Shows per-surah coverage grid + global content inventory + audio/translation summary.
 */
import { useState, useMemo } from 'react';
import { SURAHS } from '../../data/surahs';
import { WORD_MEANINGS } from '../../data/wordMeanings';
import { VERSE_SYNCED_VIDEOS } from '../../data/youtubeVideos';
import { AVAILABLE_SURAHS, SURAHS_WITH_ONTOLOGY } from '../../data/treebank/index';
import { RECITERS, TRANSLATION_RECITERS } from '../../hooks/useAudioPlayer';
import { TRANSLATIONS } from '../../hooks/useTranslationsAPI';
import { TAFSEER_SOURCES } from '../../data/tafseerData';
import { QURAN_THEMES, QURAN_STORIES, SAJDAH_AYAT, MUQATTAAT } from '../../data/ayahConnections';
import { NAMES_OF_ALLAH } from '../../data/namesOfAllah';
import { Icons } from '../common/Icons';
import { StatCard } from './shared';

// === Per-Surah Categories (tracked in the 114 grid) ===
const SURAH_CATEGORIES = [
  { key: 'treebank', label: 'Treebank', color: '#10B981', icon: Icons.FileText },
  { key: 'ontology', label: 'Ontology', color: '#8B5CF6', icon: Icons.Layers },
  { key: 'wordMeanings', label: 'Word Meanings (Urdu)', color: '#F59E0B', icon: Icons.Type },
  { key: 'videoSync', label: 'Video Sync', color: '#EF4444', icon: Icons.Video },
  { key: 'tafseer', label: 'Tafseer', color: '#3B82F6', icon: Icons.BookOpen },
];

// === Compute global stats once ===
const reciterCount = Object.keys(RECITERS).length;
const translationAudioCount = Object.keys(TRANSLATION_RECITERS).length;
const translationCount = Object.keys(TRANSLATIONS).length;
const tafseerCount = Object.keys(TAFSEER_SOURCES).length;
const themeCount = Object.keys(QURAN_THEMES).length;
const storyCount = Object.keys(QURAN_STORIES).length;
const namesCount = NAMES_OF_ALLAH?.length || 99;
const sajdahCount = SAJDAH_AYAT?.length || 0;
const muqattaatCount = MUQATTAAT?.length || 0;

// Group translations by language
const translationsByLang = Object.values(TRANSLATIONS).reduce((acc, t) => {
  acc[t.language] = (acc[t.language] || 0) + 1;
  return acc;
}, {});

// Group translation audio by language
const audioByLang = Object.values(TRANSLATION_RECITERS).reduce((acc, r) => {
  acc[r.language] = (acc[r.language] || 0) + 1;
  return acc;
}, {});

// Group tafseers by language
const tafseersByLang = Object.values(TAFSEER_SOURCES).reduce((acc, t) => {
  acc[t.languageName || t.language] = (acc[t.languageName || t.language] || 0) + 1;
  return acc;
}, {});

// Count total theme verses
const totalThemeVerses = Object.values(QURAN_THEMES).reduce((sum, t) => sum + (t.verses?.length || 0), 0);
const totalStoryVerses = Object.values(QURAN_STORIES).reduce((sum, s) => sum + (s.verses?.length || 0), 0);

const ContentCoveragePanel = () => {
  const [filter, setFilter] = useState('all');
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [activeSection, setActiveSection] = useState('surah'); // surah | audio | global

  // Per-surah coverage data
  const coverage = useMemo(() => {
    return SURAHS.map(surah => ({
      id: surah.id,
      name: surah.name,
      arabic: surah.arabic,
      ayahs: surah.ayahs,
      type: surah.type,
      treebank: AVAILABLE_SURAHS.includes(surah.id),
      ontology: SURAHS_WITH_ONTOLOGY.includes(surah.id),
      wordMeanings: !!WORD_MEANINGS[surah.id],
      videoSync: !!VERSE_SYNCED_VIDEOS[surah.id],
      tafseer: true, // API-based, all surahs covered
      videoCount: VERSE_SYNCED_VIDEOS[surah.id]?.length || 0,
    }));
  }, []);

  const surahStats = useMemo(() => ({
    treebank: coverage.filter(s => s.treebank).length,
    ontology: coverage.filter(s => s.ontology).length,
    wordMeanings: coverage.filter(s => s.wordMeanings).length,
    videoSync: coverage.filter(s => s.videoSync).length,
    tafseer: 114,
  }), [coverage]);

  const filtered = useMemo(() => {
    if (filter === 'all') return coverage;
    if (filter === 'complete') return coverage.filter(s =>
      SURAH_CATEGORIES.every(cat => s[cat.key])
    );
    if (filter === 'missing') return coverage.filter(s =>
      SURAH_CATEGORIES.some(cat => !s[cat.key])
    );
    return coverage;
  }, [coverage, filter]);

  const pct = (n, total = 114) => `${Math.round((n / total) * 100)}%`;

  // Section tabs
  const sections = [
    { id: 'surah', label: 'Per-Surah', icon: Icons.Grid },
    { id: 'audio', label: 'Audio & Translations', icon: Icons.Headphones },
    { id: 'global', label: 'Global Content', icon: Icons.Globe },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-white text-lg font-bold">Content Coverage</h2>
        <p className="text-white/40 text-sm mt-1">
          Complete inventory of all app content — per-surah data coverage, audio/reciter library, translations, tafseers, and global content like Names of Allah, themes, and more.
        </p>
      </div>

      {/* Section Tabs */}
      <div className="flex gap-1 bg-white/5 rounded-xl p-1 border border-white/10">
        {sections.map(sec => (
          <button
            key={sec.id}
            onClick={() => setActiveSection(sec.id)}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
              activeSection === sec.id
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                : 'text-white/50 hover:text-white/70 hover:bg-white/5 border border-transparent'
            }`}
          >
            <sec.icon className="w-3.5 h-3.5" />
            {sec.label}
          </button>
        ))}
      </div>

      {/* ============ SECTION: Per-Surah Coverage ============ */}
      {activeSection === 'surah' && (
        <div className="space-y-5">
          {/* Summary Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {SURAH_CATEGORIES.map(cat => (
              <StatCard
                key={cat.key}
                title={cat.label}
                value={`${surahStats[cat.key]}/114`}
                subtitle={pct(surahStats[cat.key])}
                icon={cat.icon}
                color={cat.color}
              />
            ))}
          </div>

          {/* Coverage Progress Bars */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h4 className="text-white/60 text-sm font-medium mb-3">Coverage Summary</h4>
            <div className="space-y-2">
              {SURAH_CATEGORIES.map(cat => (
                <div key={cat.key} className="flex items-center gap-3">
                  <span className="text-xs text-white/60 w-32">{cat.label}</span>
                  <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: pct(surahStats[cat.key]),
                        background: `linear-gradient(90deg, ${cat.color}80, ${cat.color})`
                      }}
                    />
                  </div>
                  <span className="text-xs text-white font-medium w-16 text-right">
                    {surahStats[cat.key]}/114
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Legend + Filter */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              {SURAH_CATEGORIES.map(cat => (
                <div key={cat.key} className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="text-xs text-white/60">{cat.label}</span>
                </div>
              ))}
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-white/10 border border-white/20 text-white text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all" className="bg-gray-900">All Surahs ({coverage.length})</option>
              <option value="complete" className="bg-gray-900">Complete Only</option>
              <option value="missing" className="bg-gray-900">Missing Data</option>
            </select>
          </div>

          {/* Surah Grid */}
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
            {filtered.map(surah => {
              const allComplete = SURAH_CATEGORIES.every(cat => surah[cat.key]);
              return (
                <button
                  key={surah.id}
                  onClick={() => setSelectedSurah(selectedSurah?.id === surah.id ? null : surah)}
                  className={`relative p-2 rounded-xl border transition-all text-center ${
                    allComplete
                      ? 'border-green-500/30 bg-green-500/5 hover:bg-green-500/10'
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  } ${selectedSurah?.id === surah.id ? 'ring-2 ring-purple-500' : ''}`}
                >
                  <p className="text-white font-bold text-sm">{surah.id}</p>
                  <p className="text-white/40 text-[8px] truncate">{surah.name}</p>
                  <div className="flex justify-center gap-0.5 mt-1">
                    {SURAH_CATEGORIES.map(cat => (
                      <div
                        key={cat.key}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: surah[cat.key] ? cat.color : '#374151' }}
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Surah Detail */}
          {selectedSurah && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-white font-bold">
                    {selectedSurah.id}. {selectedSurah.name}
                    <span className="text-white/50 font-normal ml-2">{selectedSurah.arabic}</span>
                  </h3>
                  <p className="text-white/40 text-xs">{selectedSurah.ayahs} ayahs &middot; {selectedSurah.type} &middot; {selectedSurah.videoCount} videos</p>
                </div>
                <button onClick={() => setSelectedSurah(null)} className="text-white/40 hover:text-white">
                  <Icons.X className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {SURAH_CATEGORIES.map(cat => (
                  <div key={cat.key} className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                    selectedSurah[cat.key] ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                  }`}>
                    {selectedSurah[cat.key] ? <Icons.Check className="w-4 h-4" /> : <Icons.X className="w-4 h-4" />}
                    <span className="text-xs">{cat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============ SECTION: Audio & Translations ============ */}
      {activeSection === 'audio' && (
        <div className="space-y-5">
          {/* Top Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <StatCard title="Quranic Reciters" value={reciterCount} subtitle="Arabic audio" icon={Icons.Mic} color="#A855F7" />
            <StatCard title="Translation Audio" value={translationAudioCount} subtitle="Narrated translations" icon={Icons.Headphones} color="#3B82F6" />
            <StatCard title="Written Translations" value={translationCount} subtitle="Multiple languages" icon={Icons.Type} color="#10B981" />
            <StatCard title="Tafseer Sources" value={tafseerCount} subtitle="Scholarly commentary" icon={Icons.BookOpen} color="#F59E0B" />
          </div>

          {/* Reciters List */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h4 className="text-white/60 text-sm font-medium mb-3 flex items-center gap-2">
              <Icons.Mic className="w-4 h-4 text-purple-400" />
              Quranic Reciters ({reciterCount})
              <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">All 114 surahs</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {Object.entries(RECITERS).map(([id, r]) => (
                <div key={id} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Icons.Mic className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/80 text-xs font-medium truncate">{r.name}</p>
                    <p className="text-white/40 text-[10px]">{r.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Translation Audio */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h4 className="text-white/60 text-sm font-medium mb-3 flex items-center gap-2">
              <Icons.Headphones className="w-4 h-4 text-blue-400" />
              Translation Audio Narrators ({translationAudioCount})
              <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">All 114 surahs</span>
            </h4>
            <div className="space-y-1">
              {Object.entries(TRANSLATION_RECITERS).map(([id, r]) => (
                <div key={id} className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Icons.Headphones className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white/80 text-xs font-medium truncate">{r.name}</p>
                      <p className="text-white/40 text-[10px]">{r.translation} &middot; {r.style}</p>
                    </div>
                  </div>
                  <span className="text-white/30 text-[10px] flex-shrink-0 ml-2">{r.language}</span>
                </div>
              ))}
            </div>

            {/* Audio by Language Summary */}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-2">
              {Object.entries(audioByLang).map(([lang, count]) => (
                <span key={lang} className="px-2 py-1 rounded-lg bg-blue-500/10 text-blue-300 text-[10px]">
                  {lang}: {count}
                </span>
              ))}
            </div>
          </div>

          {/* Written Translations */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h4 className="text-white/60 text-sm font-medium mb-3 flex items-center gap-2">
              <Icons.Type className="w-4 h-4 text-green-400" />
              Written Translations ({translationCount})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {Object.entries(TRANSLATIONS).map(([id, t]) => (
                <div key={id} className="flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-white/5">
                  <span className="text-white/70 text-xs truncate">{t.nameEn || t.name}</span>
                  <span className="text-white/30 text-[10px] flex-shrink-0 ml-2">{t.language}</span>
                </div>
              ))}
            </div>

            {/* By Language Summary */}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-2">
              {Object.entries(translationsByLang).map(([lang, count]) => (
                <span key={lang} className="px-2 py-1 rounded-lg bg-green-500/10 text-green-300 text-[10px]">
                  {lang}: {count}
                </span>
              ))}
            </div>
          </div>

          {/* Tafseer Sources */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h4 className="text-white/60 text-sm font-medium mb-3 flex items-center gap-2">
              <Icons.BookOpen className="w-4 h-4 text-yellow-400" />
              Tafseer Sources ({tafseerCount})
              <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">API-based</span>
            </h4>
            <div className="space-y-1">
              {Object.entries(TAFSEER_SOURCES).map(([id, t]) => (
                <div key={id} className="flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-white/5">
                  <div className="min-w-0">
                    <span className="text-white/70 text-xs">{t.name}</span>
                    <span className="text-white/30 text-[10px] ml-2">{t.description}</span>
                  </div>
                  <span className="text-white/30 text-[10px] flex-shrink-0 ml-2">{t.languageName}</span>
                </div>
              ))}
            </div>

            {/* By Language Summary */}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-2">
              {Object.entries(tafseersByLang).map(([lang, count]) => (
                <span key={lang} className="px-2 py-1 rounded-lg bg-yellow-500/10 text-yellow-300 text-[10px]">
                  {lang}: {count}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============ SECTION: Global Content ============ */}
      {activeSection === 'global' && (
        <div className="space-y-5">
          {/* Top Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <StatCard title="Names of Allah" value={namesCount} subtitle="Complete" icon={Icons.Star} color="#F59E0B" />
            <StatCard title="Quranic Themes" value={themeCount} subtitle={`${totalThemeVerses} linked verses`} icon={Icons.Network} color="#8B5CF6" />
            <StatCard title="Prophet Stories" value={storyCount} subtitle={`${totalStoryVerses} linked verses`} icon={Icons.Book} color="#3B82F6" />
            <StatCard title="Sajdah Verses" value={sajdahCount} subtitle="Prostration points" icon={Icons.Heart} color="#EC4899" />
          </div>

          {/* Themes */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h4 className="text-white/60 text-sm font-medium mb-3 flex items-center gap-2">
              <Icons.Network className="w-4 h-4 text-purple-400" />
              Quranic Themes ({themeCount})
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {Object.entries(QURAN_THEMES).map(([id, theme]) => (
                <div key={id} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.color }} />
                    <span className="text-white/80 text-xs font-medium">{theme.name}</span>
                  </div>
                  <p className="text-white/30 text-[10px]">{theme.nameAr} &middot; {theme.verses?.length || 0} verses</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prophet Stories */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h4 className="text-white/60 text-sm font-medium mb-3 flex items-center gap-2">
              <Icons.Book className="w-4 h-4 text-blue-400" />
              Prophet Stories ({storyCount})
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.entries(QURAN_STORIES).map(([id, story]) => (
                <div key={id} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: story.color }} />
                    <span className="text-white/80 text-xs font-medium">{story.name}</span>
                  </div>
                  <p className="text-white/30 text-[10px]">{story.nameAr} &middot; {story.verses?.length || 0} verses</p>
                </div>
              ))}
            </div>
          </div>

          {/* Other Content Inventory */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h4 className="text-white/60 text-sm font-medium mb-3">Content Inventory</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white/40 text-xs font-medium py-2 pr-4">Content Type</th>
                    <th className="text-right text-white/40 text-xs font-medium py-2 px-3">Count</th>
                    <th className="text-right text-white/40 text-xs font-medium py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Names of Allah', count: namesCount, status: 'Complete', color: 'green' },
                    { name: 'Quranic Reciters', count: reciterCount, status: 'Complete', color: 'green' },
                    { name: 'Translation Audio', count: translationAudioCount, status: 'Complete', color: 'green' },
                    { name: 'Written Translations', count: translationCount, status: `${Object.keys(translationsByLang).length} languages`, color: 'green' },
                    { name: 'Tafseer Sources', count: tafseerCount, status: `${Object.keys(tafseersByLang).length} languages`, color: 'green' },
                    { name: 'Treebank (Grammar)', count: `${surahStats.treebank}/114`, status: surahStats.treebank === 114 ? 'Complete' : 'Partial', color: surahStats.treebank === 114 ? 'green' : 'yellow' },
                    { name: 'Ontology', count: `${surahStats.ontology}/114`, status: surahStats.ontology === 114 ? 'Complete' : 'Partial', color: surahStats.ontology === 114 ? 'green' : 'yellow' },
                    { name: 'Word Meanings (Urdu)', count: `${surahStats.wordMeanings}/114`, status: 'Critical Gap', color: 'red' },
                    { name: 'Video Timestamps', count: `${surahStats.videoSync}/114`, status: surahStats.videoSync === 114 ? 'Complete' : 'Partial', color: surahStats.videoSync === 114 ? 'green' : 'yellow' },
                    { name: 'Quranic Themes', count: themeCount, status: `${totalThemeVerses} verse links`, color: 'green' },
                    { name: 'Prophet Stories', count: storyCount, status: `${totalStoryVerses} verse links`, color: 'green' },
                    { name: 'Sajdah Verses', count: sajdahCount, status: 'Mapped', color: 'green' },
                    { name: 'Muqattaat Letters', count: muqattaatCount, status: 'Mapped', color: 'green' },
                  ].map((item, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-0">
                      <td className="py-2 pr-4 text-white/70 text-xs">{item.name}</td>
                      <td className="py-2 px-3 text-right text-white font-medium text-xs">{item.count}</td>
                      <td className="py-2 text-right">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                          item.color === 'green' ? 'bg-green-500/20 text-green-400' :
                          item.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Coverage Gaps Alert */}
          {surahStats.wordMeanings < 114 && (
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3">
              <Icons.AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-amber-300 text-sm font-medium">Content Gap: Word Meanings</p>
                <p className="text-amber-300/60 text-xs mt-1">
                  Only {surahStats.wordMeanings} out of 114 surahs have local Urdu word-by-word meanings.
                  The remaining {114 - surahStats.wordMeanings} surahs fall back to English word meanings from Quran.com API.
                  This is the biggest content gap in the app.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentCoveragePanel;
