/**
 * Search Panel Component - Bubble Style
 * Single Responsibility: Full-text search interface for Quran in bubble modal
 */

import { memo, useState, useCallback, useEffect, useRef } from 'react';
import BubbleOverlay from './BubbleOverlay';
import { Icons } from './Icons';
import {
  searchQuran,
  searchArabic,
  getSearchSuggestions,
  getRecentSearches,
  addRecentSearch,
  clearRecentSearches,
} from '../../data/searchIndex';
import { SURAHS } from '../../data';
import { sanitizeHighlight } from '../../utils/sanitize';

/**
 * Search Result Item
 */
const SearchResultItem = memo(function SearchResultItem({ result, onSelect }) {
  return (
    <button
      onClick={() => onSelect(result)}
      className="w-full text-left p-3 rounded-xl mb-2 transition-all hover:bg-white/10"
      style={{ background: 'rgba(255,255,255,0.05)' }}
    >
      {/* Surah Info */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
          style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
          {result.surahId}
        </div>
        <div className="flex-1">
          <div className="text-xs font-medium">{result.surahName}</div>
          <div className="text-[10px] text-white/50">Ayah {result.ayahNumber}</div>
        </div>
        {result.surahArabic && (
          <div className="text-sm" style={{ fontFamily: "'Scheherazade New', serif", color: 'rgba(255,255,255,0.6)' }}>
            {result.surahArabic}
          </div>
        )}
      </div>

      {/* Text Preview */}
      <div
        className="text-[11px] leading-relaxed text-white/80"
        style={{
          direction: result.isArabic ? 'rtl' : 'ltr',
          fontFamily: result.isArabic ? "'Scheherazade New', serif" : 'inherit',
        }}
        dangerouslySetInnerHTML={{ __html: sanitizeHighlight(result.highlighted || result.text) }}
      />

      <div className="flex justify-end mt-2">
        <span className="text-[10px] text-amber-400">View in Surah</span>
      </div>
    </button>
  );
});

/**
 * Suggestion Chip
 */
const SuggestionChip = memo(function SuggestionChip({ suggestion, onSelect }) {
  return (
    <button
      onClick={() => onSelect(suggestion.query)}
      className="px-3 py-1.5 rounded-full text-[11px] transition-all hover:bg-amber-500/20 hover:text-amber-300"
      style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}
    >
      {suggestion.label}
    </button>
  );
});

/**
 * Recent Search Item
 */
const RecentSearchItem = memo(function RecentSearchItem({ query, onSelect, onRemove }) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg mb-1" style={{ background: 'rgba(255,255,255,0.05)' }}>
      <button onClick={() => onSelect(query)} className="flex-1 text-left flex items-center gap-2 text-white/70 text-xs">
        <Icons.Search className="w-3 h-3" />
        {query}
      </button>
      <button onClick={(e) => { e.stopPropagation(); onRemove(query); }}
        className="p-1 text-white/30 hover:text-white/60">
        <Icons.X className="w-3 h-3" />
      </button>
    </div>
  );
});

/**
 * Main Search Panel Component - Bubble Style
 */
const SearchPanel = memo(function SearchPanel({ onClose, onSelectResult }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchMode, setSearchMode] = useState('english');
  const [recentSearches, setRecentSearches] = useState(() => getRecentSearches());
  const inputRef = useRef(null);

  const suggestions = getSearchSuggestions();

  useEffect(() => {
    if (inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, []);

  const performSearch = useCallback(async (searchQuery) => {
    if (!searchQuery || searchQuery.trim().length < 2) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const searchFn = searchMode === 'arabic' ? searchArabic : searchQuran;
      const response = await searchFn(searchQuery);

      if (response.error) {
        setError(response.error);
        setResults([]);
      } else {
        setResults(response.results);
        addRecentSearch(searchQuery);
        setRecentSearches(getRecentSearches());
      }
    } catch (err) {
      setError('Search failed. Please try again.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [searchMode]);

  const handleSubmit = useCallback((e) => {
    e?.preventDefault();
    performSearch(query);
  }, [query, performSearch]);

  const handleSuggestionClick = useCallback((suggestionQuery) => {
    setQuery(suggestionQuery);
    performSearch(suggestionQuery);
  }, [performSearch]);

  const handleSelectResult = useCallback((result) => {
    const surah = SURAHS.find(s => s.id === result.surahId);
    if (surah && onSelectResult) {
      onSelectResult(surah, result.ayahNumber);
    }
    onClose();
  }, [onSelectResult, onClose]);

  const handleClearRecent = useCallback(() => {
    clearRecentSearches();
    setRecentSearches([]);
  }, []);

  const handleRemoveRecent = useCallback((queryToRemove) => {
    const updated = recentSearches.filter(q => q !== queryToRemove);
    localStorage.setItem('quran_recent_searches', JSON.stringify(updated));
    setRecentSearches(updated);
  }, [recentSearches]);

  return (
    <BubbleOverlay
      onClose={onClose}
      title="Search Quran"
      subtitle={results.length > 0 ? `${results.length} results` : 'Find verses'}
      icon={Icons.Search}
      gradient={['#f59e0b', '#d97706', '#b45309']}
      size="medium"
    >
      {/* Search Input */}
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchMode === 'arabic' ? 'Search in Arabic...' : 'Search in English...'}
              className="w-full py-2.5 px-4 rounded-xl text-sm"
              style={{
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                direction: searchMode === 'arabic' ? 'rtl' : 'ltr',
              }}
            />
          </div>
          <button
            type="submit"
            disabled={loading || query.length < 2}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold transition-all"
            style={{
              background: loading || query.length < 2 ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg, #f59e0b, #d97706)',
              color: loading || query.length < 2 ? 'rgba(255,255,255,0.3)' : '#fff',
            }}
          >
            {loading ? '...' : 'Go'}
          </button>
        </div>
      </form>

      {/* Search Mode Toggle */}
      <div className="flex gap-1 mb-3 p-1 rounded-xl" style={{ background: 'rgba(0,0,0,0.2)' }}>
        <button
          onClick={() => setSearchMode('english')}
          className={`flex-1 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
            searchMode === 'english' ? 'bg-white/20 text-white' : 'text-white/50'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setSearchMode('arabic')}
          className={`flex-1 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
            searchMode === 'arabic' ? 'bg-white/20 text-white' : 'text-white/50'
          }`}
        >
          Arabic
        </button>
      </div>

      {/* Error State */}
      {error && (
        <div className="p-4 rounded-xl mb-3 text-center" style={{ background: 'rgba(239,68,68,0.15)' }}>
          <div className="text-2xl mb-2">⚠️</div>
          <p className="text-sm text-red-300 font-medium mb-1">Search Unavailable</p>
          <p className="text-xs text-red-300/70 mb-3">
            {error.includes('API') || error.includes('failed')
              ? 'Unable to connect to search service. Please check your internet connection.'
              : error}
          </p>
          <button
            onClick={() => performSearch(query)}
            className="px-4 py-2 rounded-lg text-xs font-medium text-white transition-all hover:bg-red-500/30"
            style={{ background: 'rgba(239,68,68,0.3)' }}
          >
            Try Again
          </button>
        </div>
      )}

      {/* Results */}
      {results.length > 0 ? (
        <div className="space-y-2">
          <div className="text-[11px] text-white/50 mb-2">Found {results.length} results for "{query}"</div>
          <div className="max-h-64 overflow-y-auto">
            {results.map((result, index) => (
              <SearchResultItem
                key={`${result.surahId}-${result.ayahNumber}-${index}`}
                result={result}
                onSelect={handleSelectResult}
              />
            ))}
          </div>
        </div>
      ) : !loading && query.length >= 2 ? (
        <div className="text-center py-6">
          <div className="text-3xl mb-2">🔍</div>
          <div className="text-xs text-white/50">No results found</div>
          <div className="text-[10px] text-white/40 mt-1">Try different keywords</div>
        </div>
      ) : (
        <>
          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xs font-medium">Recent</h3>
                <button onClick={handleClearRecent} className="text-[10px] text-white/40 hover:text-white/60">
                  Clear
                </button>
              </div>
              {recentSearches.slice(0, 5).map((recentQuery, index) => (
                <RecentSearchItem
                  key={`${recentQuery}-${index}`}
                  query={recentQuery}
                  onSelect={handleSuggestionClick}
                  onRemove={handleRemoveRecent}
                />
              ))}
            </div>
          )}

          {/* Suggestions */}
          <div>
            <h3 className="text-xs font-medium mb-2">Popular Topics</h3>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <SuggestionChip
                  key={suggestion.query}
                  suggestion={suggestion}
                  onSelect={handleSuggestionClick}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </BubbleOverlay>
  );
});

export default SearchPanel;
