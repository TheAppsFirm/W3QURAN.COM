/**
 * QuranFAQ Component - Islamic Questions & Answers
 * Displays categorized FAQs with multi-language support
 */

import { useState, useMemo, useCallback, memo } from 'react';
import { Icons } from './Icons';
import { QURAN_FAQS, FAQ_CATEGORIES, searchFAQs, getFAQsByCategory } from '../../data/quranFAQ';

// Language options
const LANGUAGES = [
  { code: 'en', name: 'English', nameNative: 'English' },
  { code: 'ur', name: 'Urdu', nameNative: 'اردو' },
  { code: 'ar', name: 'Arabic', nameNative: 'العربية' },
];

// Single FAQ Card
const FAQCard = memo(function FAQCard({ faq, language, expanded, onToggle, onNavigateToVerse }) {
  const question = faq.question[language] || faq.question.en;
  const answer = faq.answer[language] || faq.answer.en;
  const category = FAQ_CATEGORIES.find(c => c.id === faq.category);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        expanded
          ? 'bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/30'
          : 'bg-white/5 border-white/10 hover:border-white/20'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full p-4 text-left flex items-start gap-3"
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ backgroundColor: `${category?.color}20` }}
        >
          <span className="text-lg font-bold" style={{ color: category?.color }}>
            {faq.id}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <p className={`font-semibold transition-colors ${
            expanded ? 'text-white' : 'text-white/90'
          } ${language === 'ar' || language === 'ur' ? 'text-right font-arabic' : ''}`}>
            {question}
          </p>
          {!expanded && (
            <p className="text-white/50 text-sm mt-1 line-clamp-1">
              {answer.substring(0, 80)}...
            </p>
          )}
        </div>
        <Icons.ChevronDown
          className={`w-5 h-5 text-white/50 flex-shrink-0 transition-transform duration-300 ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-4" style={{ animation: 'fadeIn 0.3s ease-out' }}>
          <div className={`text-white/80 leading-relaxed ${
            language === 'ar' || language === 'ur' ? 'text-right font-arabic' : ''
          }`}>
            {answer}
          </div>

          {/* Related Verses */}
          {faq.verses && faq.verses.length > 0 && (
            <div className="pt-3 border-t border-white/10">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                Related Quranic Verses
              </p>
              <div className="flex flex-wrap gap-2">
                {faq.verses.map((verse, idx) => (
                  <button
                    key={idx}
                    onClick={() => onNavigateToVerse?.(verse.surah, verse.ayah)}
                    className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium hover:bg-emerald-500/30 transition-colors"
                  >
                    {verse.surah}:{verse.ayah}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {faq.tags && faq.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {faq.tags.slice(0, 5).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-full bg-white/5 text-white/40 text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

// Category Button
const CategoryButton = memo(function CategoryButton({ category, selected, onClick, count, language }) {
  const IconComponent = Icons[category.icon] || Icons.HelpCircle;
  const name = language === 'ur' ? category.nameUr : language === 'ar' ? category.nameAr : category.name;

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
        selected
          ? 'bg-gradient-to-r from-purple-500/30 to-cyan-500/30 border border-purple-500/50'
          : 'bg-white/5 border border-white/10 hover:bg-white/10'
      }`}
    >
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${category.color}20` }}
      >
        <IconComponent className="w-3.5 h-3.5" style={{ color: category.color }} />
      </div>
      <span className={`text-sm font-medium ${selected ? 'text-white' : 'text-white/70'}`}>
        {name}
      </span>
      <span className={`text-xs px-1.5 py-0.5 rounded-full ${
        selected ? 'bg-white/20 text-white' : 'bg-white/10 text-white/50'
      }`}>
        {count}
      </span>
    </button>
  );
});

// Main FAQ Component
const QuranFAQ = memo(function QuranFAQ({ isVisible, onClose, onNavigateToVerse }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [language, setLanguage] = useState('en');

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    let results = QURAN_FAQS;

    if (searchQuery.trim()) {
      results = searchFAQs(searchQuery, language);
    } else if (selectedCategory) {
      results = getFAQsByCategory(selectedCategory);
    }

    return results;
  }, [searchQuery, selectedCategory, language]);

  // Get category counts
  const categoryCounts = useMemo(() => {
    const counts = {};
    QURAN_FAQS.forEach(faq => {
      counts[faq.category] = (counts[faq.category] || 0) + 1;
    });
    return counts;
  }, []);

  const handleToggleFAQ = useCallback((id) => {
    setExpandedId(prev => prev === id ? null : id);
  }, []);

  const handleCategoryClick = useCallback((categoryId) => {
    setSelectedCategory(prev => prev === categoryId ? null : categoryId);
    setSearchQuery('');
    setExpandedId(null);
  }, []);

  const handleSearch = useCallback((e) => {
    setSearchQuery(e.target.value);
    setSelectedCategory(null);
    setExpandedId(null);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'bubblePopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {/* Header */}
        <div className="flex-shrink-0 p-4 sm:p-6 border-b border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <Icons.HelpCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Islamic FAQ</h2>
                <p className="text-white/60 text-sm">
                  {QURAN_FAQS.length} Questions & Answers
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-all"
            >
              <Icons.X className="w-6 h-6 text-white/70" />
            </button>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white/50 text-sm">Language:</span>
            <div className="flex gap-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    language === lang.code
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  {lang.nameNative}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search questions..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10"
              >
                <Icons.X className="w-4 h-4 text-white/40" />
              </button>
            )}
          </div>
        </div>

        {/* Categories - Horizontal Scroll */}
        <div className="flex-shrink-0 px-4 sm:px-6 py-3 border-b border-white/10 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSearchQuery('');
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
                !selectedCategory && !searchQuery
                  ? 'bg-gradient-to-r from-purple-500/30 to-cyan-500/30 border border-purple-500/50'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              <Icons.Grid className="w-4 h-4" />
              <span className="text-sm font-medium">All</span>
              <span className="text-xs px-1.5 py-0.5 rounded-full bg-white/10 text-white/50">
                {QURAN_FAQS.length}
              </span>
            </button>
            {FAQ_CATEGORIES.map((category) => (
              <CategoryButton
                key={category.id}
                category={category}
                selected={selectedCategory === category.id}
                onClick={() => handleCategoryClick(category.id)}
                count={categoryCounts[category.id] || 0}
                language={language}
              />
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <Icons.Search className="w-8 h-8 text-white/30" />
              </div>
              <p className="text-white/60">No questions found</p>
              <p className="text-white/40 text-sm mt-1">Try different keywords</p>
            </div>
          ) : (
            filteredFAQs.map((faq) => (
              <FAQCard
                key={faq.id}
                faq={faq}
                language={language}
                expanded={expandedId === faq.id}
                onToggle={() => handleToggleFAQ(faq.id)}
                onNavigateToVerse={onNavigateToVerse}
              />
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 p-4 border-t border-white/10 bg-black/20">
          <p className="text-white/40 text-xs text-center">
            Answers are based on authentic Quranic sources. For complex matters, consult a qualified scholar.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
});

export default QuranFAQ;
