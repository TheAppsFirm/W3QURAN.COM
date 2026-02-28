/**
 * Quranic Arabic Treebank Analysis Components
 * Provides word-level morphological analysis and dependency tree visualization
 * Now includes tafseer and translation switching
 *
 * Premium Feature: Free for Surah Al-Fatiha, Premium for others
 * Multi-language support: en, ur, hi, bn, tr, id
 */

import React, { useState, useCallback, useEffect, memo } from 'react';
import { Icons } from './Icons';
// All treebank data now loaded from new modular system
import {
  POS_TAGS,
  GRAMMAR_ROLES,
  CASES,
  UI_LABELS,
  HARAKAT,
  parseWordLetters,
  getAyahTreebank,
  hasTreebankData,
  canAccessTreebank,
  getLanguageFromTranslation,
  getLabel,
  getFeatureKey,
  loadSurahTreebank,
  loadSurahOntology,
  hasOntologyData,
  LANGUAGE_NAMES,
} from '../../data/treebank/index';
import {
  TAFSEER_SOURCES,
  getTafseersByLanguage,
  getDefaultTafseer,
  fetchTafseer,
} from '../../data/tafseerData';
import { TRANSLATIONS } from '../../hooks/useQuranAPI';

/**
 * POS Tag Badge - Shows part of speech with color
 * For non-Latin languages, shows the localized label instead of English abbreviation
 */
const POSBadge = memo(function POSBadge({ pos, size = 'sm', lang = 'en' }) {
  const tag = POS_TAGS[pos];
  if (!tag) return null;

  const sizeClasses = {
    xs: 'text-[10px] px-1 py-0.5',
    sm: 'text-xs px-1.5 py-0.5',
    md: 'text-sm px-2 py-1',
  };

  const label = getLabel(tag, lang);

  // For non-Latin languages (ur, hi, bn, ar), show localized label
  // For Latin languages (en, tr, id), show English abbreviation
  const showLocalizedLabel = ['ur', 'hi', 'bn', 'ar'].includes(lang);
  const displayText = showLocalizedLabel ? label : pos;

  return (
    <span
      className={`inline-flex items-center font-medium rounded ${sizeClasses[size]}`}
      style={{
        color: tag.color,
        backgroundColor: tag.bgColor,
      }}
      title={label}
    >
      {displayText}
    </span>
  );
});

/**
 * Word Card - Inline word display with POS tag
 */
const WordCard = memo(function WordCard({ word, isSelected, onClick, showDetails = true, lang = 'en' }) {
  // Handle both pos array format and posTag string format
  const posArray = Array.isArray(word.pos) ? word.pos : (word.posTag ? [word.posTag] : ['N']);
  const primaryColor = POS_TAGS[posArray[0]]?.color || '#888';

  // For RTL languages (ur, hi, bn, ar), hide Latin transliteration
  // For Latin-based languages (en, tr, id), show transliteration
  const showTransliteration = ['en', 'tr', 'id'].includes(lang);

  return (
    <button
      onClick={() => onClick(word)}
      className={`flex flex-col items-center p-2 rounded-xl transition-all hover:scale-105 ${
        isSelected
          ? 'bg-white/20 ring-2 ring-white/50'
          : 'bg-white/5 hover:bg-white/10'
      }`}
      style={{ minWidth: '80px' }}
    >
      {/* Arabic Word */}
      <span
        className="text-2xl font-arabic mb-1"
        style={{ color: primaryColor }}
      >
        {word.arabic}
      </span>

      {/* POS Tags */}
      <div className="flex gap-0.5 mb-1">
        {posArray.map((p, i) => (
          <POSBadge key={i} pos={p} size="xs" lang={lang} />
        ))}
      </div>

      {showDetails && (
        <>
          {/* Transliteration - only for Latin-based languages */}
          {showTransliteration && (
            <span className="text-xs text-white/60 italic">
              {word.transliteration}
            </span>
          )}

          {/* Translation - larger for non-Latin languages */}
          <span className={`text-white/80 mt-0.5 text-center ${
            showTransliteration ? 'text-xs' : 'text-sm font-medium'
          }`}>
            {word.translation}
          </span>
        </>
      )}
    </button>
  );
});

/**
 * Advanced Word Analysis Component - Deep dive into word details
 * Shows: Root Family, Frequency, I'rab Reason, Balagha, Miracle, Tajweed, Memory, Translations
 */
const AdvancedWordAnalysis = memo(function AdvancedWordAnalysis({ word, lang = 'en' }) {
  const labels = UI_LABELS[lang] || UI_LABELS.en;
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(prev => prev === section ? null : section);
  };

  const getText = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj.en || obj.ur || '';
  };

  // Section component for collapsible areas
  const Section = ({ id, icon, title, color, children }) => (
    <div className="border border-white/10 rounded-xl overflow-hidden mb-2">
      <button
        onClick={() => toggleSection(id)}
        className={`w-full flex items-center justify-between p-3 bg-gradient-to-r ${color} hover:brightness-110 transition-all`}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-white font-medium text-sm">{title}</span>
        </div>
        <Icons.ChevronDown className={`w-4 h-4 text-white/70 transition-transform ${expandedSection === id ? 'rotate-180' : ''}`} />
      </button>
      {expandedSection === id && (
        <div className="p-3 bg-black/20" style={{ animation: 'slideDown 0.2s ease-out' }}>
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="mt-4 pt-4 border-t border-white/10">
      <div className="flex items-center gap-2 mb-3">
        <Icons.Sparkles className="w-4 h-4 text-amber-400" />
        <span className="text-amber-300 text-sm font-medium">{labels.deepDive}</span>
      </div>

      {/* Root Word Family */}
      {word.rootFamily && (
        <Section
          id="rootFamily"
          icon={<Icons.Network className="w-4 h-4 text-emerald-400" />}
          title={labels.rootFamily}
          color="from-emerald-500/20 to-emerald-500/5"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2 p-2 bg-emerald-500/10 rounded-lg">
              <span className="text-2xl font-arabic text-emerald-300">{word.rootFamily.root}</span>
              <span className="text-white/60 text-sm">= {getText(word.rootFamily.meaning)}</span>
            </div>
            <p className="text-white/50 text-xs">{labels.rootFamilyHelp}</p>
            <div className="space-y-1">
              {word.rootFamily.words?.map((w, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-arabic text-white">{w.arabic}</span>
                    <span className="text-white/60 text-sm">{getText(w.meaning)}</span>
                  </div>
                  <span className="text-emerald-400 text-xs px-2 py-0.5 bg-emerald-500/20 rounded-full">
                    {w.count}x
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Word Frequency */}
      {word.frequency && (
        <Section
          id="frequency"
          icon={<Icons.BarChart className="w-4 h-4 text-blue-400" />}
          title={labels.wordFrequency}
          color="from-blue-500/20 to-blue-500/5"
        >
          <div className="text-center p-4">
            <span className="text-5xl font-bold text-blue-400">{word.frequency.total}</span>
            <p className="text-white/60 text-sm mt-1">{labels.times}</p>
            {word.frequency.note && (
              <p className="text-blue-300 text-sm mt-3 p-2 bg-blue-500/10 rounded-lg">
                ✨ {getText(word.frequency.note)}
              </p>
            )}
          </div>
        </Section>
      )}

      {/* I'rab Reason */}
      {word.irabReason && (
        <Section
          id="irab"
          icon={<Icons.HelpCircle className="w-4 h-4 text-purple-400" />}
          title={labels.irabReason}
          color="from-purple-500/20 to-purple-500/5"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-purple-500/30 rounded-full text-purple-300 font-arabic">
                {word.irabReason.case}
              </span>
              <span className="text-white/60 text-sm">{labels.whyThisCase}</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              {getText(word.irabReason.reason)}
            </p>
            <div className="p-2 bg-purple-500/10 rounded-lg border-l-2 border-purple-500">
              <span className="text-purple-300 text-xs font-medium">📐 Rule: </span>
              <span className="text-white/70 text-xs">{getText(word.irabReason.rule)}</span>
            </div>
          </div>
        </Section>
      )}

      {/* Balagha - Rhetoric */}
      {word.balagha && (
        <Section
          id="balagha"
          icon={<Icons.Edit className="w-4 h-4 text-pink-400" />}
          title={labels.balagha}
          color="from-pink-500/20 to-pink-500/5"
        >
          <div className="space-y-3">
            <h4 className="text-pink-300 font-medium">{getText(word.balagha.title)}</h4>
            <p className="text-white/80 text-sm leading-relaxed" dir={lang === 'ur' ? 'rtl' : 'ltr'}>
              {getText(word.balagha.explanation)}
            </p>
          </div>
        </Section>
      )}

      {/* Linguistic Miracle */}
      {word.linguisticMiracle && (
        <Section
          id="miracle"
          icon={<Icons.Star className="w-4 h-4 text-amber-400" />}
          title={labels.linguisticMiracle}
          color="from-amber-500/20 to-amber-500/5"
        >
          <div className="space-y-3">
            <h4 className="text-amber-300 font-medium">{getText(word.linguisticMiracle.title)}</h4>
            <div className="space-y-2">
              {word.linguisticMiracle.points?.map((point, i) => (
                <div key={i} className="flex gap-2 p-2 bg-amber-500/10 rounded-lg">
                  <span className="text-amber-400">✦</span>
                  <p className="text-white/80 text-sm leading-relaxed" dir={lang === 'ur' ? 'rtl' : 'ltr'}>
                    {getText(point)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Tajweed Tips */}
      {word.tajweedTips && (
        <Section
          id="tajweed"
          icon={<Icons.Mic className="w-4 h-4 text-cyan-400" />}
          title={labels.tajweedTips}
          color="from-cyan-500/20 to-cyan-500/5"
        >
          <div className="space-y-2">
            {word.tajweedTips.rules?.map((rule, i) => (
              <div key={i} className="p-2 bg-cyan-500/10 rounded-lg">
                <span className="text-cyan-300 text-sm font-medium block">{getText(rule.rule)}</span>
                <p className="text-white/70 text-xs mt-1">{getText(rule.description || rule.explanation)}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Memory Hook */}
      {word.memoryHook && (
        <Section
          id="memory"
          icon={<Icons.Lightbulb className="w-4 h-4 text-yellow-400" />}
          title={labels.memoryHook}
          color="from-yellow-500/20 to-yellow-500/5"
        >
          <div className="space-y-3">
            {word.memoryHook.tips?.map((tip, i) => (
              <div key={i} className="flex gap-2 items-start">
                <span className="text-yellow-400">💡</span>
                <p className="text-white/80 text-sm">{getText(tip)}</p>
              </div>
            ))}
            {word.memoryHook.mnemonic && (
              <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30 text-center">
                <span className="text-yellow-300 text-sm font-medium block mb-1">🧠 Mnemonic:</span>
                <span className="text-white font-medium">{getText(word.memoryHook.mnemonic)}</span>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Scholar Translations */}
      {word.scholarTranslations && word.scholarTranslations.length > 0 && (
        <Section
          id="translations"
          icon={<Icons.Users className="w-4 h-4 text-indigo-400" />}
          title={labels.compareTranslations}
          color="from-indigo-500/20 to-indigo-500/5"
        >
          <div className="space-y-1">
            {word.scholarTranslations.map((t, i) => (
              <div key={i} className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                <span className="text-indigo-300 text-sm">{t.scholar}</span>
                <span className="text-white/70 text-sm">{typeof t.translation === 'object' ? getText(t.translation) : t.translation}</span>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Similar Patterns */}
      {word.similarPatterns && word.similarPatterns.length > 0 && (
        <Section
          id="patterns"
          icon={<Icons.Link className="w-4 h-4 text-teal-400" />}
          title={labels.similarPatterns}
          color="from-teal-500/20 to-teal-500/5"
        >
          <div className="space-y-2">
            {word.similarPatterns.map((p, i) => (
              <div key={i} className="p-2 bg-teal-500/10 rounded-lg">
                <span className="text-teal-300 text-xs">{p.surah}:{p.ayah}</span>
                <p className="text-white font-arabic text-lg mt-1" dir="rtl">{p.text}</p>
                <p className="text-white/60 text-xs mt-1">{getText(p.note)}</p>
              </div>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
});

/**
 * Letter Breakdown Component - Shows letter-by-letter analysis with harakat
 */
const LetterBreakdown = memo(function LetterBreakdown({ arabicWord, lang = 'en' }) {
  const labels = UI_LABELS[lang] || UI_LABELS.en;
  const letters = parseWordLetters(arabicWord);

  if (!letters || letters.length === 0) return null;

  return (
    <div className="py-3 border-b border-white/10">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1 h-4 bg-amber-500 rounded-full" />
        <span className="text-amber-300 text-sm font-medium">{labels.harakat}</span>
      </div>

      {/* Letters Row */}
      <div className="flex flex-wrap justify-center gap-1 mb-4" dir="rtl">
        {letters.map((letter, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-2 bg-white/5 rounded-xl min-w-[50px] hover:bg-white/10 transition-colors group"
          >
            {/* Letter with harakat */}
            <div className="relative">
              <span className="text-2xl font-arabic text-white">{letter.base}</span>
            </div>

            {/* Harakat names */}
            <div className="mt-1 flex flex-col items-center gap-0.5">
              {letter.harakat.length > 0 ? (
                letter.harakat.map((h, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-1.5 py-0.5 rounded"
                    style={{ color: HARAKAT[h]?.color, backgroundColor: `${HARAKAT[h]?.color}20` }}
                  >
                    {HARAKAT[h]?.names?.[lang] || HARAKAT[h]?.names?.en}
                  </span>
                ))
              ) : (
                <span className="text-[10px] text-white/40 px-1.5 py-0.5">
                  {HARAKAT.sukun?.names?.[lang] || 'No vowel'}
                </span>
              )}
            </div>

            {/* Sound on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-1">
              <span className="text-[9px] text-white/50">
                {letter.harakat.map(h => HARAKAT[h]?.sound).filter(Boolean).join('') || '-'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Harakat Help Box */}
      <div className="mb-3 p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
        <div className="flex items-start gap-2">
          <Icons.HelpCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-amber-300 text-xs font-medium">{labels.howToRead}</span>
            <p className="text-white/60 text-xs mt-1 leading-relaxed">{labels.harakatHelp}</p>
          </div>
        </div>
      </div>

      {/* Harakat Legend */}
      <div className="bg-white/5 rounded-xl p-3">
        <div className="flex flex-wrap gap-2 justify-center">
          {['fatha', 'kasra', 'damma', 'sukun', 'shadda'].map(h => (
            <div key={h} className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5">
              <span className="text-lg" style={{ color: HARAKAT[h]?.color }}>{HARAKAT[h]?.symbol}</span>
              <span className="text-[10px] text-white/70">{HARAKAT[h]?.names?.[lang] || HARAKAT[h]?.names?.en}</span>
              <span className="text-[10px] text-white/40">({HARAKAT[h]?.sound})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

/**
 * Word Detail Panel - Full morphological analysis
 */
const WordDetailPanel = memo(function WordDetailPanel({ word, onClose, lang = 'en' }) {
  if (!word) return null;

  // Handle both pos array format and posTag string format
  const posArray = Array.isArray(word.pos) ? word.pos : (word.posTag ? [word.posTag] : ['N']);
  const primaryTag = POS_TAGS[posArray[0]] || { label: posArray[0], color: '#666', bgColor: '#66666620' };
  const caseInfo = word.case ? CASES[word.case] : null;
  const roleInfo = word.grammarRole ? GRAMMAR_ROLES[word.grammarRole] : null;
  const labels = UI_LABELS[lang] || UI_LABELS.en;

  // For RTL languages (ur, hi, bn, ar), hide Latin transliteration
  const showTransliteration = ['en', 'tr', 'id'].includes(lang);

  return (
    <div
      className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
      style={{ animation: 'slideUp 0.2s ease-out' }}
    >
      {/* Header */}
      <div
        className="p-4 text-center"
        style={{ background: `linear-gradient(135deg, ${primaryTag?.color}20, transparent)` }}
      >
        <div className="flex justify-end mb-2">
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Icons.X className="w-4 h-4 text-white/70" />
          </button>
        </div>

        <span
          className="text-4xl font-arabic block mb-2"
          style={{ color: primaryTag?.color }}
        >
          {word.arabic}
        </span>
        {showTransliteration && (
          <span className="text-lg text-white/70 italic block">
            {word.transliteration}
          </span>
        )}
        <span className={`text-white font-medium ${!showTransliteration ? 'text-xl' : ''}`}>
          "{word.translation}"
        </span>
      </div>

      {/* Details Grid */}
      <div className="p-4 space-y-3">
        {/* POS */}
        <div className="flex justify-between items-center py-2 border-b border-white/10">
          <span className="text-white/60 text-sm">{labels.partOfSpeech}</span>
          <div className="flex items-center gap-2">
            <span className="text-white">{getLabel(primaryTag, lang)}</span>
            <span className="text-white/60 font-arabic">({getLabel(primaryTag, 'ar')})</span>
          </div>
        </div>

        {/* Root */}
        {word.root && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-white/60 text-sm">{labels.root}</span>
            <span className="text-white font-arabic text-lg tracking-wider">
              {word.root}
            </span>
          </div>
        )}

        {/* Pattern */}
        {word.pattern && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-white/60 text-sm">{labels.pattern}</span>
            <span className="text-white font-arabic text-lg">
              {word.pattern}
            </span>
          </div>
        )}

        {/* Case */}
        {caseInfo && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-white/60 text-sm">{labels.case}</span>
            <div className="flex items-center gap-2">
              <span className="text-white">{getLabel(caseInfo, lang)}</span>
              <span className="text-white/60 font-arabic">({getLabel(caseInfo, 'ar')})</span>
            </div>
          </div>
        )}

        {/* Grammar Role */}
        {roleInfo && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-white/60 text-sm">{labels.grammarRole}</span>
            <div className="flex items-center gap-2">
              <span className="text-white">{getLabel(roleInfo, lang)}</span>
              <span className="text-white/60 font-arabic">({getLabel(roleInfo, 'ar')})</span>
            </div>
          </div>
        )}

        {/* Features */}
        {word.features && Object.keys(word.features).length > 0 && (
          <div className="py-2 border-b border-white/10">
            <span className="text-white/60 text-sm block mb-2">{labels.features}</span>
            <div className="flex flex-wrap gap-2">
              {Object.entries(word.features).map(([key, value]) => (
                <span
                  key={key}
                  className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/80"
                >
                  {getFeatureKey(key, lang)}: {value}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Explanation */}
        {word.grammarExplanation && (
          <div className="py-2">
            <span className="text-white/60 text-sm block mb-2">{labels.explanation}</span>
            <p className="text-white/90 text-sm leading-relaxed">
              {word.grammarExplanation}
            </p>
          </div>
        )}

        {/* Letter Breakdown with Harakat */}
        <LetterBreakdown arabicWord={word.arabic} lang={lang} />

        {/* Advanced Word Analysis - Deep Dive */}
        <AdvancedWordAnalysis word={word} lang={lang} />

        {/* Dependency */}
        {word.dependencyType && (
          <div className="py-2 bg-white/5 rounded-xl p-3 mt-2">
            <span className="text-white/60 text-xs block mb-1">{labels.relatesTo}</span>
            <span className="text-cyan-400 text-sm">
              {word.dependencyType}
            </span>
          </div>
        )}
      </div>
    </div>
  );
});

/**
 * Dependency Tree SVG - Visual representation of word relationships
 * With zoom controls for better readability
 */
const DependencyTree = memo(function DependencyTree({ words, structure, lang = 'en' }) {
  const [zoom, setZoom] = useState(1.5); // Default 150% for better readability
  const labels = UI_LABELS[lang] || UI_LABELS.en;

  if (!structure?.diagram || structure.diagram.length === 0) return null;
  // Skip if diagram contains only strings (not connection objects)
  if (typeof structure.diagram[0] === 'string') return null;

  // Calculate positions for words (RTL)
  // Dynamic width based on word count - minimum spacing for readability
  const wordPositions = {};
  const totalWords = words.length;
  const minSpacingPerWord = 18; // Minimum spacing per word for clarity
  const viewBoxWidth = Math.max(100, totalWords * minSpacingPerWord + 20); // Wider for more words
  const spacing = viewBoxWidth / (totalWords + 1);

  words.forEach((word, index) => {
    // RTL: reverse the position - handle missing word.id
    const wordId = word.id || `word-${index}`;
    wordPositions[wordId] = {
      x: viewBoxWidth - (spacing * (index + 1)),
      y: 22, // Moved up to give room for Arabic text below
    };
  });

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleReset = () => setZoom(1);

  // Dynamic height based on zoom - taller for more words
  const baseHeight = totalWords > 6 ? 160 : 140;
  const zoomedHeight = baseHeight * zoom;
  const isLongAyah = totalWords > 5; // Show scroll hint for long ayahs

  return (
    <div className="mt-4 bg-white/5 rounded-xl p-4">
      {/* Header with zoom controls */}
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-white/60 text-sm">{labels.dependencyStructure}</h4>

        {/* Zoom Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleZoomOut}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={zoom <= 0.5}
            title="Zoom Out"
          >
            <Icons.Minus className="w-4 h-4 text-white/70" />
          </button>

          <button
            onClick={handleReset}
            className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-xs text-white/70 min-w-[40px]"
            title="Reset Zoom"
          >
            {Math.round(zoom * 100)}%
          </button>

          <button
            onClick={handleZoomIn}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={zoom >= 3}
            title="Zoom In"
          >
            <Icons.Plus className="w-4 h-4 text-white/70" />
          </button>
        </div>
      </div>

      {/* SVG Container with scroll for long ayahs */}
      <div
        className="overflow-x-auto overflow-y-hidden rounded-lg bg-black/20 pb-2"
        style={{ maxHeight: '350px' }}
      >
        <svg
          viewBox={`0 0 ${viewBoxWidth} 55`}
          className="transition-all duration-200"
          style={{
            direction: 'ltr',
            height: `${zoomedHeight}px`,
            minWidth: `${Math.max(100, viewBoxWidth * zoom * 0.8)}%`,
          }}
        >
          {/* Connection lines */}
          {structure.diagram.map((conn, index) => {
            const fromPos = wordPositions[conn.from];
            const toPos = wordPositions[conn.to];
            if (!fromPos || !toPos) return null;

            // Calculate curve control point
            const midX = (fromPos.x + toPos.x) / 2;
            const curveHeight = Math.abs(fromPos.x - toPos.x) * 0.4;

            return (
              <g key={index}>
                {/* Curved line */}
                <path
                  d={`M ${fromPos.x} ${fromPos.y} Q ${midX} ${fromPos.y + curveHeight} ${toPos.x} ${toPos.y}`}
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
                {/* Arrow head */}
                <circle
                  cx={toPos.x}
                  cy={toPos.y}
                  r="1"
                  fill="#06B6D4"
                />
                {/* Label on the curve */}
                <text
                  x={midX}
                  y={fromPos.y + curveHeight / 2 + 6}
                  textAnchor="middle"
                  className="fill-cyan-400 font-arabic"
                  style={{ fontSize: totalWords > 6 ? '3.5px' : '4.5px' }}
                >
                  {conn.label}
                </text>
              </g>
            );
          })}

          {/* Word markers with Arabic text */}
          {words.map((word, wordIndex) => {
            const wordId = word.id || `word-${wordIndex}`;
            const pos = wordPositions[wordId];
            if (!pos) return null;
            const posArray = Array.isArray(word.pos) ? word.pos : (word.posTag ? [word.posTag] : ['N']);
            const color = POS_TAGS[posArray[0]]?.color || '#888';

            // For non-Latin languages, translate POS labels
            const showLocalizedLabel = ['ur', 'hi', 'bn', 'ar'].includes(lang);
            let displayPosLabel = word.posLabel || word.pos?.join?.('+') || word.posTag || '';
            if (showLocalizedLabel && displayPosLabel) {
              // Handle compound labels like "P+N" by translating each part
              displayPosLabel = displayPosLabel.split('+').map(p => {
                const tag = POS_TAGS[p.trim()];
                return tag ? getLabel(tag, lang) : p;
              }).join('+');
            }

            // Dynamic font size based on word count
            const fontSize = totalWords > 6 ? 3.5 : 4;
            const posSize = totalWords > 6 ? 3 : 3.5;
            const transSize = totalWords > 6 ? 2.5 : 3;

            return (
              <g key={wordId}>
                {/* POS Label above */}
                <text
                  x={pos.x}
                  y={pos.y - 10}
                  textAnchor="middle"
                  className="fill-white/70"
                  style={{ fontSize: `${posSize}px`, fontFamily: 'serif' }}
                >
                  {displayPosLabel}
                </text>

                {/* Colored circle marker */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="3"
                  fill={color}
                  stroke={color}
                  strokeWidth="0.8"
                  strokeOpacity="0.4"
                />

                {/* Arabic word below */}
                <text
                  x={pos.x}
                  y={pos.y + 9}
                  textAnchor="middle"
                  className="fill-white font-arabic"
                  style={{ fontSize: `${fontSize + 1}px`, fontFamily: "'Scheherazade New', 'Amiri', serif" }}
                >
                  {word.arabic}
                </text>

                {/* Translation below Arabic */}
                <text
                  x={pos.x}
                  y={pos.y + 16}
                  textAnchor="middle"
                  className="fill-white/60"
                  style={{ fontSize: `${transSize}px` }}
                >
                  {(() => {
                    const t = typeof word.translation === 'object' ? (word.translation[lang] || word.translation.en || '') : (word.translation || '');
                    return t.length > 15 ? t.substring(0, 12) + '...' : t;
                  })()}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Scroll hint for long ayahs */}
      {isLongAyah && (
        <div className="flex items-center justify-center gap-2 mt-2 text-white/40 text-xs">
          <Icons.ChevronLeft className="w-3 h-3" />
          <span>{lang === 'ur' ? 'دائیں بائیں سکرول کریں' : lang === 'hi' ? 'दाएं बाएं स्क्रॉल करें' : 'Scroll left-right to see all words'}</span>
          <Icons.ChevronRight className="w-3 h-3" />
        </div>
      )}

      {/* Structure explanation */}
      {structure.explanation && (
        <p className="text-white/70 text-sm mt-3 leading-relaxed">
          {typeof structure.explanation === 'object' ? (structure.explanation[lang] || structure.explanation.en || structure.explanation.ur || '') : structure.explanation}
        </p>
      )}
    </div>
  );
});

/**
 * POS Legend - Shows all POS tag colors
 */
const POSLegend = memo(function POSLegend({ lang = 'en' }) {
  const commonTags = ['N', 'V', 'ADJ', 'PRON', 'P', 'REL', 'CONJ', 'NEG'];

  return (
    <div className="flex flex-wrap gap-2 p-3 bg-white/5 rounded-xl">
      {commonTags.map(tag => {
        const info = POS_TAGS[tag] || { label: tag, color: '#666', bgColor: '#66666620' };
        return (
          <div key={tag} className="flex items-center gap-1">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: info.color }}
            />
            <span className="text-xs text-white/70">{getLabel(info, lang)}</span>
          </div>
        );
      })}
    </div>
  );
});

/**
 * Ontology Labels for UI
 */
const ONTOLOGY_LABELS = {
  en: {
    title: 'Quranic Concept Map',
    subtitle: 'Understanding the Deep Connections',
    description: 'Structured knowledge map of concepts in this Surah',
    whyImportant: 'Why is this important?',
    whyImportantText: 'The Quran is not just a book of random verses — every word, every concept is interconnected. This Concept Map helps you see how ideas like "guidance", "mercy", and "worship" connect to each other, making your understanding deeper and your reflection more meaningful.',
    howToUse: 'How to use',
    howToUseText: 'Explore the tabs to see: Categories (types of concepts), Relationships (how concepts connect), Flow (the journey of the surah), and References (related verses in other surahs).',
    categories: 'Categories',
    relationships: 'Relationships',
    thematicFlow: 'Flow',
    crossReferences: 'References',
    frequency: 'Appears',
    times: 'times in Quran',
    relatedTo: 'Related to',
    derivedFrom: 'Derived from',
    seeAlso: 'See also',
    ayah: 'Ayah',
    viewInQuran: 'View in Quran',
    correct: 'Correct Path',
    wrong: 'Path to Avoid',
  },
  ur: {
    title: 'قرآنی تصورات کا نقشہ',
    subtitle: 'گہرے روابط کی سمجھ',
    description: 'اس سورۃ کے مفاہیم کا منظم علمی نقشہ',
    whyImportant: 'یہ کیوں اہم ہے؟',
    whyImportantText: 'قرآن محض بے ربط آیات کی کتاب نہیں — ہر لفظ، ہر تصور آپس میں جڑا ہوا ہے۔ یہ تصوراتی نقشہ آپ کو دکھاتا ہے کہ "ہدایت"، "رحمت" اور "عبادت" جیسے تصورات کیسے ایک دوسرے سے جڑے ہیں، جس سے آپ کی سمجھ گہری اور تدبر بامعنی ہو جاتا ہے۔',
    howToUse: 'استعمال کا طریقہ',
    howToUseText: 'ٹیبز دیکھیں: اقسام (تصورات کی قسمیں)، روابط (تصورات کا تعلق)، بہاؤ (سورۃ کا سفر)، حوالے (دیگر سورتوں کی متعلقہ آیات)۔',
    categories: 'اقسام',
    relationships: 'روابط',
    thematicFlow: 'بہاؤ',
    crossReferences: 'حوالے',
    frequency: 'آیا ہے',
    times: 'بار قرآن میں',
    relatedTo: 'متعلقہ',
    derivedFrom: 'ماخوذ از',
    seeAlso: 'یہ بھی دیکھیں',
    ayah: 'آیت',
    viewInQuran: 'قرآن میں دیکھیں',
    correct: 'صحیح راستہ',
    wrong: 'غلط راستہ',
  },
  hi: {
    title: 'क़ुरआनी तसव्वुरात का नक़्शा',
    subtitle: 'गहरे रिश्तों की समझ',
    description: 'इस सूरा के मफ़ाहीम का मुनज़्ज़म इल्मी नक़्शा',
    whyImportant: 'यह क्यों ज़रूरी है?',
    whyImportantText: 'क़ुरआन बस आयतों का संग्रह नहीं — हर शब्द, हर तसव्वुर आपस में जुड़ा है। यह तसव्वुराती नक़्शा आपको दिखाता है कि "हिदायत", "रहमत" और "इबादत" जैसे तसव्वुर कैसे जुड़े हैं, जिससे आपकी समझ गहरी होती है।',
    howToUse: 'इस्तेमाल का तरीक़ा',
    howToUseText: 'टैब देखें: अक़्साम (तसव्वुरात की क़िस्में), रवाबित (तसव्वुरात का तअल्लुक़), बहाव (सूरा का सफ़र), हवाले (दूसरी सूरतों की मुतअल्लिक़ आयात)।',
    categories: 'अक़्साम',
    relationships: 'रवाबित',
    thematicFlow: 'बहाव',
    crossReferences: 'हवाले',
    frequency: 'आया है',
    times: 'बार क़ुरआन में',
    relatedTo: 'मुतअल्लिक़',
    derivedFrom: 'माख़ूज़ अज़',
    seeAlso: 'यह भी देखें',
    ayah: 'आयत',
    viewInQuran: 'क़ुरआन में देखें',
    correct: 'सही रास्ता',
    wrong: 'ग़लत रास्ता',
  },
};

/**
 * Get text helper for ontology multi-language content
 */
const getOntologyText = (obj, lang) => {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] || obj.en || obj.ur || '';
};

/**
 * Concept Card Component - Shows a single concept
 * Updated to handle both old and new ontology data structures
 */
const ConceptCard = memo(function ConceptCard({ concept, categoryColor, lang, labels, onConceptClick }) {
  const [expanded, setExpanded] = useState(false);

  // Handle both old and new structures
  const conceptTerm = concept.term || concept.transliteration || '';
  const conceptMeaning = typeof concept.meaning === 'string'
    ? concept.meaning
    : getOntologyText(concept.meaning, lang);
  // Handle ayahs as array (new) or single ayah (old)
  const ayahDisplay = concept.ayahs
    ? (concept.ayahs.length > 1 ? `${concept.ayahs[0]}-${concept.ayahs[concept.ayahs.length - 1]}` : concept.ayahs[0])
    : concept.ayah;

  return (
    <div
      className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all cursor-pointer border border-white/10"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <p className="text-2xl font-arabic text-white mb-1" dir="rtl">
            {concept.arabic}
          </p>
          {conceptTerm && (
            <p className="text-sm text-white/70">
              {conceptTerm}
            </p>
          )}
          <p className="text-sm mt-1" style={{ color: categoryColor }}>
            {conceptMeaning}
          </p>
        </div>
        {ayahDisplay && (
          <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/60">
            {labels.ayah} {ayahDisplay}
          </span>
        )}
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
          {/* Details */}
          {concept.details && (
            <p className={`text-sm text-white/80 leading-relaxed ${lang === 'ur' || lang === 'ar' ? 'text-right' : ''}`} dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
              {getOntologyText(concept.details, lang)}
            </p>
          )}

          {/* Frequency */}
          {concept.frequency && (
            <p className="text-xs text-white/50">
              📊 {labels.frequency} <span className="text-white/80 font-medium">{concept.frequency}</span> {labels.times}
            </p>
          )}

          {/* Path type indicator */}
          {concept.type === 'correct' && (
            <span className="inline-flex items-center gap-1 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
              ✅ {labels.correct}
            </span>
          )}
          {concept.type === 'wrong' && (
            <span className="inline-flex items-center gap-1 text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">
              ❌ {labels.wrong}
            </span>
          )}

          {/* Who are they (for paths) */}
          {concept.whoAreThey && (
            <div className="mt-2">
              <p className="text-xs text-white/50 mb-1">{labels.seeAlso}:</p>
              <div className="flex flex-wrap gap-1">
                {(concept.whoAreThey[lang] || concept.whoAreThey.en || []).map((item, i) => (
                  <span key={i} className="text-xs bg-white/10 px-2 py-0.5 rounded text-white/70">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Characteristic (for wrong paths) */}
          {concept.characteristic && (
            <p className="text-xs text-red-400/80 italic">
              ⚠️ {getOntologyText(concept.characteristic, lang)}
            </p>
          )}
        </div>
      )}

      {/* Expand indicator */}
      <div className="flex justify-center mt-2">
        <Icons.ChevronDown className={`w-4 h-4 text-white/30 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </div>
    </div>
  );
});

// Default colors for categories (used when new data doesn't have colors)
const CATEGORY_COLORS = [
  '#F59E0B', '#8B5CF6', '#10B981', '#EF4444', '#3B82F6',
  '#EC4899', '#06B6D4', '#14B8A6', '#F97316', '#6366F1'
];

/**
 * Category Section Component
 * Updated to handle both old and new ontology data structures
 */
const CategorySection = memo(function CategorySection({ category, categoryKey, categoryIndex = 0, lang, labels }) {
  const [isOpen, setIsOpen] = useState(true);

  // Handle both old (category.icon) and new (no icon) structures
  const IconComponent = Icons[category.icon] || Icons.Star;
  // Use category color or assign based on index
  const color = category.color || CATEGORY_COLORS[categoryIndex % CATEGORY_COLORS.length];
  // Get category label - handle both old ({label: {en, ur}}) and new ({name, nameAr, nameUr}) structures
  const rawLabel = category.label
    ? getOntologyText(category.label, lang)
    : (lang === 'ur' ? (category.nameUr || category.nameArabic || category.nameAr || getOntologyText(category.name, lang))
      : (lang === 'ar' ? (category.nameArabic || category.nameAr || getOntologyText(category.name, lang))
      : getOntologyText(category.name, lang))) || categoryKey;
  const categoryLabel = typeof rawLabel === 'object' ? getOntologyText(rawLabel, lang) : rawLabel;

  return (
    <div className="mb-4">
      {/* Category Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-white/5"
        style={{ backgroundColor: `${color}15` }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${color}30` }}
        >
          <IconComponent className="w-5 h-5" style={{ color: color }} />
        </div>
        <div className="flex-1 text-left" dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
          <h4 className="text-white font-medium">
            {categoryLabel}
          </h4>
          <p className="text-xs text-white/50">
            {category.concepts?.length || 0} {lang === 'ur' ? 'تصورات' : lang === 'ar' ? 'مفاهيم' : 'concepts'}
          </p>
        </div>
        <Icons.ChevronDown
          className={`w-5 h-5 text-white/50 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Category Concepts */}
      {isOpen && category.concepts && (
        <div className="mt-2 grid gap-2">
          {category.concepts.map((concept, idx) => (
            <ConceptCard
              key={concept.id || concept.term || idx}
              concept={concept}
              categoryColor={color}
              lang={lang}
              labels={labels}
            />
          ))}
        </div>
      )}
    </div>
  );
});

/**
 * Relationship Card Component
 * Updated to handle both old and new ontology data structures
 */
const RelationshipCard = memo(function RelationshipCard({ relationship, lang }) {
  const typeColors = {
    'semantic-pair': '#8B5CF6',
    'sequential': '#10B981',
    'contrast': '#EF4444',
    'implies': '#F59E0B',
    'context': '#3B82F6',
    'complementary': '#8B5CF6',
    'causation': '#10B981',
    'motivation': '#F59E0B',
    'prerequisite': '#3B82F6',
    'consequence': '#06B6D4',
    'definition': '#EC4899',
    'order': '#14B8A6',
    'reward': '#22C55E',
    'proof': '#EAB308',
    'evidence': '#F97316',
  };

  // Handle both old ({from: {en, ar}}) and new ({from: "string"}) structures
  const fromText = typeof relationship.from === 'string'
    ? relationship.from
    : getOntologyText(relationship.from, lang);
  const toText = typeof relationship.to === 'string'
    ? relationship.to
    : getOntologyText(relationship.to, lang);
  const descText = typeof relationship.description === 'string'
    ? relationship.description
    : getOntologyText(relationship.description, lang);
  // Use type as label if no label field (new structure)
  const labelText = relationship.label
    ? getOntologyText(relationship.label, lang)
    : relationship.type;

  const typeColor = typeColors[relationship.type] || '#888';

  return (
    <div className="bg-white/5 rounded-xl p-3 border border-white/10">
      <div className="flex items-center gap-2 mb-2 flex-wrap" dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
        <span className="text-lg font-arabic text-white">{fromText}</span>
        <span
          className="px-2 py-0.5 rounded-full text-xs font-medium"
          style={{ backgroundColor: `${typeColor}30`, color: typeColor }}
        >
          {labelText}
        </span>
        <span className="text-lg font-arabic text-white">{toText}</span>
      </div>
      <p className={`text-sm text-white/70 ${lang === 'ur' || lang === 'ar' ? 'text-right' : ''}`} dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
        {descText}
      </p>
    </div>
  );
});

/**
 * Thematic Flow Component
 * Updated to handle both old and new ontology data structures
 */
const ThematicFlow = memo(function ThematicFlow({ flow, lang }) {
  if (!flow?.stages) return null;
  return (
    <div className="space-y-3">
      {flow.stages.map((stage, index) => {
        // Handle both old ({ayahs: [1,2]}) and new ({ayahs: [1,2,3,4,5,6]}) or old ayah format
        const ayahsArray = stage.ayahs || [];
        const ayahLabel = lang === 'ur' ? 'آیت' : lang === 'ar' ? 'آية' : 'Ayah';
        const ayahDisplay = ayahsArray.length > 1
          ? `${ayahLabel} ${ayahsArray[0]}-${ayahsArray[ayahsArray.length - 1]}`
          : `${ayahLabel} ${ayahsArray[0] || '?'}`;
        // Handle both old ({theme: {en, ur}}) and new ({name: "string"}) structures
        const stageTitle = getOntologyText(stage.theme, lang) || getOntologyText(stage.name, lang);
        const stageDesc = typeof stage.description === 'string'
          ? stage.description
          : getOntologyText(stage.description, lang);

        return (
          <div key={index} className="flex gap-3">
            {/* Stage number */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-300 text-sm font-medium">
                {index + 1}
              </div>
              {index < flow.stages.length - 1 && (
                <div className="w-0.5 flex-1 bg-purple-500/20 my-1" />
              )}
            </div>

            {/* Stage content */}
            <div className="flex-1 pb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">
                  {ayahDisplay}
                </span>
              </div>
              <h5 className="text-white font-medium mb-1">
                {stageTitle}
              </h5>
              <p className={`text-sm text-white/60 ${lang === 'ur' || lang === 'ar' ? 'text-right' : ''}`} dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
                {stageDesc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
});

/**
 * Cross Reference Card
 * Updated to handle both old crossReferences and new connectionToOtherSurahs structures
 */
const CrossReferenceCard = memo(function CrossReferenceCard({ reference, lang, labels }) {
  // Handle new connectionToOtherSurahs structure
  if (reference.surah !== undefined && reference.name) {
    const typeColors = {
      'direct_answer': '#10B981',
      'thematic_expansion': '#8B5CF6',
      'direct_reference': '#F59E0B',
      'historical_connection': '#3B82F6',
      'thematic_parallel': '#06B6D4',
      'complementary': '#EC4899',
      'sequential_relationship': '#14B8A6',
      'thematic_series': '#6366F1',
    };
    const color = typeColors[reference.type] || '#888';

    return (
      <div className="bg-white/5 rounded-xl p-3 border border-white/10">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
            {lang === 'ur' ? 'سورت' : lang === 'ar' ? 'سورة' : 'Surah'} {reference.surah}
          </span>
          <span className="text-sm text-white font-medium">{getOntologyText(reference.name, lang)}</span>
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{ backgroundColor: `${color}30`, color }}
          >
            {reference.type?.replace(/_/g, ' ')}
          </span>
        </div>
        <p className={`text-sm text-white/70 ${lang === 'ur' || lang === 'ar' ? 'text-right' : ''}`} dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
          {getOntologyText(reference.relationship, lang)}
        </p>
      </div>
    );
  }

  // Handle old crossReferences structure
  return (
    <div className="bg-white/5 rounded-xl p-3 border border-white/10">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
          {reference.reference?.surah}:{reference.reference?.ayah}
        </span>
        <span className="text-sm text-white/50">{getOntologyText(reference.concept, lang)}</span>
      </div>
      {reference.text && (
        <p className="text-lg font-arabic text-white/90 mb-2" dir="rtl">
          {getOntologyText(reference.text, lang)}
        </p>
      )}
      <p className={`text-sm text-white/60 ${lang === 'ur' || lang === 'ar' ? 'text-right' : ''}`} dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
        {getOntologyText(reference.explanation, lang)}
      </p>
    </div>
  );
});

/**
 * OntologyView Component - Main Ontology Display
 * Now loads from new treebank/ontology files asynchronously
 */
export const OntologyView = memo(function OntologyView({ surahId, lang = 'en', isVisible, onClose }) {
  const [activeTab, setActiveTab] = useState('categories');
  const [ontology, setOntology] = useState(null);
  const [loading, setLoading] = useState(true);
  const labels = ONTOLOGY_LABELS[lang] || ONTOLOGY_LABELS.en;

  // Load ontology data when surah changes or becomes visible
  useEffect(() => {
    if (isVisible && surahId) {
      setLoading(true);
      loadSurahOntology(surahId)
        .then(data => {
          setOntology(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Failed to load ontology:', err);
          setOntology(null);
          setLoading(false);
        });
    }
  }, [surahId, isVisible]);

  if (!isVisible) return null;

  // Loading state
  if (loading) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <div className="bg-gray-900/95 rounded-2xl p-8 flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-3 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
          <p className="text-white/70">Loading ontology...</p>
        </div>
      </div>
    );
  }

  if (!ontology) return null;

  // Check if new data has insights section
  const hasInsights = ontology.uniqueInsight || ontology.historicalContext || ontology.linguisticFeatures;

  const tabs = [
    { id: 'categories', label: labels.categories, icon: Icons.Grid },
    { id: 'relationships', label: labels.relationships, icon: Icons.Link },
    { id: 'flow', label: labels.thematicFlow, icon: Icons.ChevronRight },
    { id: 'references', label: labels.crossReferences, icon: Icons.BookOpen },
    ...(hasInsights ? [{ id: 'insights', label: lang === 'ur' ? 'بصیرت' : 'Insights', icon: Icons.Lightbulb }] : []),
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-t-3xl sm:rounded-3xl border border-white/10 shadow-2xl w-full sm:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
        style={{ animation: 'slideUp 0.3s ease-out' }}
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10" dir={lang === 'ur' ? 'rtl' : 'ltr'}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-white font-bold text-lg flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Icons.Network className="w-4 h-4 text-white" />
                </div>
                {labels.title}
              </h2>
              <p className="text-purple-300/80 text-sm mt-1">
                {labels.subtitle} • {ontology.surahName || ontology.surahNameArabic}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Icons.X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Why Important - Expandable Info Box */}
          <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
            <div className="flex items-start gap-2">
              <Icons.Lightbulb className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-amber-300 font-medium text-sm mb-1">{labels.whyImportant}</h4>
                <p className={`text-white/70 text-xs leading-relaxed ${lang === 'ur' ? 'text-right' : ''}`}>
                  {labels.whyImportantText}
                </p>
              </div>
            </div>
          </div>

          {/* How to Use - Small Hint */}
          <div className="mb-3 flex items-center gap-2 text-xs text-white/50">
            <Icons.Info className="w-3 h-3" />
            <span>{labels.howToUseText}</span>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 overflow-x-auto pb-1">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-purple-500/30 text-purple-300'
                      : 'bg-white/5 text-white/60 hover:bg-white/10'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className={`flex-1 overflow-y-auto p-4 custom-scrollbar ${lang === 'ur' ? 'font-urdu' : ''}`} dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
          {/* Language fallback notice — show if user's language data is missing */}
          {lang !== 'en' && ontology.categories && (() => {
            const firstCat = Object.values(ontology.categories)[0];
            const firstMeaning = firstCat?.concepts?.[0]?.meaning;
            const hasLangData = firstMeaning && typeof firstMeaning === 'object' && firstMeaning[lang];
            if (!hasLangData) {
              const msg = labels.languageComingSoon?.replace('{lang}', LANGUAGE_NAMES[lang] || lang) || `Content in ${LANGUAGE_NAMES[lang] || lang} coming soon — showing English`;
              return (
                <div className={`mb-3 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300/80 ${lang === 'ur' || lang === 'ar' ? 'text-right' : 'text-left'}`} dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
                  {msg}
                </div>
              );
            }
            return null;
          })()}
          {/* Categories Tab */}
          {activeTab === 'categories' && ontology.categories && (
            <div>
              {Object.entries(ontology.categories).map(([key, category], index) => (
                <CategorySection
                  key={category.id || key}
                  category={category}
                  categoryKey={key}
                  categoryIndex={index}
                  lang={lang}
                  labels={labels}
                />
              ))}
            </div>
          )}

          {/* Relationships Tab */}
          {activeTab === 'relationships' && ontology.relationships && (
            <div className="space-y-3">
              <p className="text-sm text-white/50 mb-4">
                {lang === 'ur' ? 'مفاہیم کے درمیان معنوی روابط' : 'Semantic connections between concepts'}
              </p>
              {ontology.relationships.map((rel, index) => (
                <RelationshipCard key={index} relationship={rel} lang={lang} />
              ))}
            </div>
          )}

          {/* Thematic Flow Tab */}
          {activeTab === 'flow' && ontology.thematicFlow && (
            <div>
              <h4 className="text-white font-medium mb-4">
                {ontology.thematicFlow.title || getOntologyText(ontology.thematicFlow.label, lang)}
              </h4>
              <ThematicFlow flow={ontology.thematicFlow} lang={lang} />
            </div>
          )}

          {/* Cross References Tab - handles both old crossReferences and new connectionToOtherSurahs */}
          {activeTab === 'references' && (ontology.crossReferences || ontology.connectionToOtherSurahs) && (
            <div className="space-y-3">
              <p className="text-sm text-white/50 mb-4">
                {lang === 'ur' ? 'قرآن کی دیگر آیات میں یہ مفاہیم' : 'Connections to other Surahs in the Quran'}
              </p>
              {/* New structure: connectionToOtherSurahs.connections */}
              {ontology.connectionToOtherSurahs?.connections?.map((ref, index) => (
                <CrossReferenceCard key={index} reference={ref} lang={lang} labels={labels} />
              ))}
              {/* Old structure: crossReferences array */}
              {ontology.crossReferences?.map((ref, index) => (
                <CrossReferenceCard key={index} reference={ref} lang={lang} labels={labels} />
              ))}
            </div>
          )}

          {/* Insights Tab - New scholarly content */}
          {activeTab === 'insights' && hasInsights && (
            <div className="space-y-6">
              {/* Unique Insight */}
              {ontology.uniqueInsight && (
                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-4 border border-amber-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Icons.Star className="w-5 h-5 text-amber-400" />
                    <h4 className="text-amber-300 font-medium">{getOntologyText(ontology.uniqueInsight.title, lang)}</h4>
                  </div>
                  {ontology.uniqueInsight.arabicTerm && (
                    <p className="text-xl font-arabic text-white/90 mb-3 text-center p-2 bg-black/20 rounded-lg" dir="rtl">
                      {ontology.uniqueInsight.arabicTerm}
                    </p>
                  )}
                  <p className={`text-white/80 text-sm leading-relaxed ${lang === 'ur' || lang === 'ar' ? 'text-right' : ''}`} dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
                    {getOntologyText(ontology.uniqueInsight.insight, lang)}
                  </p>
                  {ontology.uniqueInsight.rootMeaning && (
                    <div className="mt-3 pt-3 border-t border-amber-500/20">
                      <span className="text-amber-400/70 text-xs">{lang === 'ur' ? 'اصل: ' : 'Root: '}</span>
                      <span className="text-white/70 text-sm">{getOntologyText(ontology.uniqueInsight.rootMeaning, lang)}</span>
                    </div>
                  )}
                  {ontology.uniqueInsight.keyAyah && (
                    <div className="mt-2">
                      <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">
                        {lang === 'ur' ? 'کلیدی آیت: ' : 'Key Ayah: '}{ontology.uniqueInsight.keyAyah}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Historical Context */}
              {ontology.historicalContext && (
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-4 border border-blue-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Icons.Clock className="w-5 h-5 text-blue-400" />
                    <h4 className="text-blue-300 font-medium">
                      {lang === 'ur' ? 'تاریخی پس منظر' : 'Historical Context'}
                    </h4>
                  </div>
                  {ontology.historicalContext.revelationPeriod && (
                    <div className="mb-3 p-2 bg-blue-500/10 rounded-lg">
                      <span className="text-blue-400 text-xs font-medium">
                        {lang === 'ur' ? 'دور نزول: ' : 'Period: '}
                      </span>
                      <span className="text-white/80 text-sm">{getOntologyText(ontology.historicalContext.revelationPeriod, lang)}</span>
                    </div>
                  )}
                  {ontology.historicalContext.occasion && (
                    <div className="mb-3">
                      <span className="text-blue-400 text-xs font-medium block mb-1">
                        {lang === 'ur' ? 'شان نزول:' : 'Occasion of Revelation:'}
                      </span>
                      <p className={`text-white/80 text-sm leading-relaxed ${lang === 'ur' || lang === 'ar' ? 'text-right' : ''}`} dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
                        {getOntologyText(ontology.historicalContext.occasion, lang)}
                      </p>
                    </div>
                  )}
                  {ontology.historicalContext.note && (
                    <p className={`text-white/60 text-xs italic leading-relaxed ${lang === 'ur' || lang === 'ar' ? 'text-right' : ''}`} dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
                      📝 {getOntologyText(ontology.historicalContext.note, lang)}
                    </p>
                  )}
                </div>
              )}

              {/* Linguistic Features */}
              {ontology.linguisticFeatures?.features && (
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-4 border border-purple-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Icons.Edit className="w-5 h-5 text-purple-400" />
                    <h4 className="text-purple-300 font-medium">
                      {lang === 'ur' ? 'لسانی خصوصیات' : 'Linguistic Features'}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {ontology.linguisticFeatures.features.map((feature, idx) => (
                      <div key={idx} className="p-3 bg-white/5 rounded-xl border border-purple-500/10">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className="text-purple-300 font-medium text-sm">{getOntologyText(feature.name, lang)}</span>
                          {feature.ayah && (
                            <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">
                              {lang === 'ur' ? 'آیت' : lang === 'ar' ? 'آية' : 'Ayah'} {feature.ayah}
                            </span>
                          )}
                        </div>
                        {feature.description && (
                          <p className="text-white/60 text-xs font-arabic mb-1" dir="rtl">{getOntologyText(feature.description, lang)}</p>
                        )}
                        {feature.example && (
                          <p className={`text-white/70 text-sm ${lang === 'ur' || lang === 'ar' ? 'text-right' : ''}`} dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>{getOntologyText(feature.example, lang)}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scientific References (if available) */}
              {ontology.scientificReferences?.notes && (
                <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-4 border border-emerald-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Icons.Zap className="w-5 h-5 text-emerald-400" />
                    <h4 className="text-emerald-300 font-medium">
                      {lang === 'ur' ? 'سائنسی حوالے' : 'Scientific References'}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {ontology.scientificReferences.notes.map((note, idx) => (
                      <div key={idx} className="p-3 bg-white/5 rounded-xl">
                        <span className="text-emerald-300 font-medium text-sm block mb-1">{note.topic}</span>
                        <p className="text-white/70 text-sm">{note.observation}</p>
                        {note.ayah && (
                          <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded mt-2 inline-block">
                            {lang === 'ur' ? 'آیت' : lang === 'ar' ? 'آية' : 'Ayah'} {note.ayah}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

/**
 * Main Treebank Overlay Component
 */
export function TreebankOverlay({
  surahId,
  ayahNum,
  isVisible,
  onClose,
  isPremium = false,
  onUpgrade,
  translationId = 'en.sahih',
  verseTranslation = null, // Translation from user's selected source (API)
  onTranslationChange, // Callback when user changes translation in popup
}) {
  const [selectedWord, setSelectedWord] = useState(null);
  const [localTranslationId, setLocalTranslationId] = useState(translationId);
  const [tafseerSourceId, setTafseerSourceId] = useState(null);
  const [tafseerData, setTafseerData] = useState(null);
  const [tafseerLoading, setTafseerLoading] = useState(false);
  const [localVerseTranslation, setLocalVerseTranslation] = useState(verseTranslation);
  const [showOntology, setShowOntology] = useState(false);
  const [treebankLoading, setTreebankLoading] = useState(true);
  const [treebankLoaded, setTreebankLoaded] = useState(false);

  // Get user's language from translation ID
  const lang = getLanguageFromTranslation(localTranslationId);
  const labels = UI_LABELS[lang] || UI_LABELS.en;

  // Load treebank data asynchronously when surah changes or becomes visible
  useEffect(() => {
    if (isVisible && surahId) {
      setTreebankLoading(true);
      loadSurahTreebank(surahId)
        .then(() => {
          setTreebankLoaded(true);
          setTreebankLoading(false);
        })
        .catch(err => {
          console.error('Failed to load treebank data:', err);
          setTreebankLoading(false);
        });
    }
  }, [isVisible, surahId]);

  // Get ALL translations grouped by language for better UX
  const allTranslations = Object.entries(TRANSLATIONS).map(([id, info]) => ({ id, ...info }));

  // Get tafseers for user's language (with English fallback)
  const availableTafseers = getTafseersByLanguage(lang).length > 0
    ? getTafseersByLanguage(lang)
    : getTafseersByLanguage('en');

  // Set default tafseer source on mount
  useEffect(() => {
    if (!tafseerSourceId && availableTafseers.length > 0) {
      const defaultTafseer = getDefaultTafseer(lang);
      setTafseerSourceId(defaultTafseer || availableTafseers[0]?.id);
    }
  }, [lang, availableTafseers, tafseerSourceId]);

  // Fetch tafseer automatically when source changes
  useEffect(() => {
    if (tafseerSourceId && surahId && ayahNum) {
      setTafseerLoading(true);
      fetchTafseer(surahId, ayahNum, tafseerSourceId)
        .then(data => {
          setTafseerData(data);
        })
        .catch(err => {
          console.error('Failed to fetch tafseer:', err);
          setTafseerData({ text: labels.loading });
        })
        .finally(() => {
          setTafseerLoading(false);
        });
    }
  }, [tafseerSourceId, surahId, ayahNum, labels.loading]);

  // Fetch new translation when user changes it
  const handleTranslationChange = useCallback(async (newTranslationId) => {
    setLocalTranslationId(newTranslationId);
    if (onTranslationChange) {
      onTranslationChange(newTranslationId);
    }
    // Fetch new translation from API
    try {
      const response = await fetch(
        `https://api.alquran.cloud/v1/ayah/${surahId}:${ayahNum}/${newTranslationId}`
      );
      if (response.ok) {
        const data = await response.json();
        setLocalVerseTranslation(data.data?.text || verseTranslation);
      }
    } catch (err) {
      console.error('Failed to fetch translation:', err);
    }
  }, [surahId, ayahNum, onTranslationChange, verseTranslation]);

  // Get treebank data after it's loaded (depends on treebankLoaded to refresh when data arrives)
  const treebankData = treebankLoaded ? getAyahTreebank(surahId, ayahNum, lang) : null;
  const canAccess = canAccessTreebank(surahId, isPremium);

  // Use the verse translation from API (user's selected translation) if available
  const displayTranslation = localVerseTranslation || verseTranslation || treebankData?.translation;

  const handleWordClick = useCallback((word) => {
    setSelectedWord(prev => prev?.id === word.id ? null : word);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedWord(null);
    onClose();
  }, [onClose]);

  if (!isVisible) return null;

  // Show loading state while treebank data is being fetched
  if (treebankLoading) {
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        onClick={handleClose}
      >
        <div
          className="bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 max-w-sm text-center"
          onClick={e => e.stopPropagation()}
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center animate-pulse">
            <Icons.BookOpen className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{labels.loading}</h3>
          <p className="text-white/60 text-sm">{labels.grammarAnalysis}</p>
        </div>
      </div>
    );
  }

  // Premium gate — skip to centralized upgrade popup directly
  if (!canAccess) {
    onUpgrade?.();
    return null;
  }

  // No treebank data - show ontology directly if available
  if (!treebankData) {
    // Check if ontology exists - show OntologyView directly
    if (hasOntologyData(surahId)) {
      return (
        <OntologyView
          surahId={surahId}
          lang={lang}
          isVisible={isVisible}
          onClose={handleClose}
        />
      );
    }

    // No treebank AND no ontology - show coming soon
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        onClick={handleClose}
      >
        <div
          className="bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 max-w-sm text-center"
          onClick={e => e.stopPropagation()}
        >
          <Icons.AlertCircle className="w-12 h-12 text-amber-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-2">{labels.comingSoon}</h3>
          <p className="text-white/70 text-sm mb-4">
            {labels.comingSoonDesc}
          </p>
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors"
          >
            {labels.close}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-t-3xl sm:rounded-3xl border border-white/10 shadow-2xl w-full sm:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
        style={{ animation: 'slideUp 0.3s ease-out' }}
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10" dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
          {/* Top row: Title and Close */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-white font-bold">{labels.explore}</h2>
              <p className="text-white/60 text-sm">
                {labels.surah} {surahId}، {labels.ayah} {ayahNum}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {/* Ontology Button */}
              {hasOntologyData(surahId) && (
                <button
                  onClick={() => setShowOntology(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 hover:from-amber-500/30 hover:to-orange-500/30 transition-all"
                  title={labels.viewOntology}
                >
                  <Icons.Network className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-300 text-xs font-medium">{labels.ontology}</span>
                </button>
              )}
              <button
                onClick={handleClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Icons.X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Selectors Row - Translation & Tafseer */}
          <div className="flex gap-2" dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
            {/* Translation Selector */}
            <div className="flex-1">
              <label className={`text-white/50 text-xs mb-1 block ${lang === 'ur' || lang === 'ar' ? 'text-right' : 'text-left'}`}>{labels.translation}</label>
              <select
                value={localTranslationId}
                onChange={(e) => handleTranslationChange(e.target.value)}
                className={`w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 appearance-none cursor-pointer ${lang === 'ur' || lang === 'ar' ? 'text-right pr-3 pl-8' : 'pr-8'}`}
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'white\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: lang === 'ur' || lang === 'ar' ? 'left 8px center' : 'right 8px center', backgroundSize: '16px' }}
              >
                {allTranslations.map(t => (
                  <option key={t.id} value={t.id} className="bg-gray-900">
                    {t.name || t.nameEn} ({t.language || t.languageNative})
                  </option>
                ))}
              </select>
            </div>

            {/* Tafseer Selector */}
            <div className="flex-1">
              <label className={`text-white/50 text-xs mb-1 block ${lang === 'ur' || lang === 'ar' ? 'text-right' : 'text-left'}`}>{labels.tafseer}</label>
              <select
                value={tafseerSourceId || ''}
                onChange={(e) => setTafseerSourceId(e.target.value)}
                className={`w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 appearance-none cursor-pointer ${lang === 'ur' || lang === 'ar' ? 'text-right pr-3 pl-8' : 'pr-8'}`}
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'white\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: lang === 'ur' || lang === 'ar' ? 'left 8px center' : 'right 8px center', backgroundSize: '16px' }}
              >
                {availableTafseers.map(t => (
                  <option key={t.id} value={t.id} className="bg-gray-900">
                    {t.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content - All in one view */}
        <div className={`flex-1 overflow-y-auto p-4 custom-scrollbar ${lang === 'ur' ? 'font-urdu' : ''}`}>
          {/* Language fallback notice for grammar data */}
          {lang !== 'en' && lang !== 'ur' && treebankData?.words && (() => {
            const firstWord = treebankData.words[0];
            const hasLangMeaning = firstWord?.meaning && typeof firstWord.meaning === 'object' && firstWord.meaning[lang];
            if (!hasLangMeaning) {
              const msg = labels.languageComingSoon?.replace('{lang}', LANGUAGE_NAMES[lang] || lang) || `Content in ${LANGUAGE_NAMES[lang] || lang} coming soon — showing English`;
              return (
                <div className={`mb-3 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300/80 ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                  {msg}
                </div>
              );
            }
            return null;
          })()}
          {/* Full Arabic Text */}
          <div className="text-center mb-6 p-4 bg-white/5 rounded-2xl">
            <p className="text-2xl font-arabic text-white leading-loose" dir="rtl">
              {treebankData.text}
            </p>
            <p className={`text-white/70 mt-2 ${lang === 'ur' || lang === 'ar' ? 'text-base font-medium' : 'text-sm'}`} dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
              {displayTranslation}
            </p>
          </div>

          {/* Section: Grammar Analysis */}
          <div className="mb-6" dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-purple-500 rounded-full" />
                <h3 className="text-purple-300 font-medium">{labels.grammarAnalysis}</h3>
              </div>
            </div>

            {/* Why Learn Grammar - Benefit Box */}
            <div className={`mb-4 p-3 rounded-xl border border-purple-500/20 ${lang === 'ur' || lang === 'ar' ? 'bg-gradient-to-l from-purple-500/10 to-transparent' : 'bg-gradient-to-r from-purple-500/10 to-transparent'}`}>
              <div className="flex items-start gap-2">
                <Icons.Lightbulb className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <div className={lang === 'ur' || lang === 'ar' ? 'text-right' : ''}>
                  <span className="text-purple-300 text-xs font-medium">{labels.whyLearn}</span>
                  <p className="text-white/60 text-xs mt-1 leading-relaxed">{labels.grammarBenefit}</p>
                </div>
              </div>
            </div>

            {/* Words Row - RTL */}
            <div className="flex flex-wrap justify-center gap-2 mb-2" dir="rtl">
              {treebankData.words.map((word, idx) => (
                <WordCard
                  key={word.id || `word-${idx}`}
                  word={word}
                  isSelected={selectedWord?.id === word.id}
                  onClick={handleWordClick}
                  lang={lang}
                />
              ))}
            </div>

            {/* Tap hint */}
            {!selectedWord && (
              <p className="text-center text-white/40 text-xs mb-4 flex items-center justify-center gap-1">
                <Icons.Info className="w-3 h-3" />
                {labels.tapWordHelp}
              </p>
            )}

            {/* Selected Word Detail */}
            {selectedWord && (
              <div className="mb-4">
                <WordDetailPanel
                  word={selectedWord}
                  onClose={() => setSelectedWord(null)}
                  lang={lang}
                />
              </div>
            )}

            {/* Dependency Tree */}
            <DependencyTree
              words={treebankData.words}
              structure={treebankData.structure}
              lang={lang}
            />

            {/* Dependency Help */}
            <div className="mt-3 p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
              <div className="flex items-start gap-2">
                <Icons.HelpCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-cyan-300 text-xs font-medium">{labels.howToRead}</span>
                  <p className="text-white/60 text-xs mt-1 leading-relaxed">{labels.dependencyHelp}</p>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-4">
              <h4 className="text-white/60 text-sm mb-2">{labels.posLegend}</h4>
              <POSLegend lang={lang} />
            </div>
          </div>

          {/* Section: Tafseer */}
          <div className="mt-6 pt-6 border-t border-white/10" dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-emerald-500 rounded-full" />
              <h3 className="text-emerald-300 font-medium">{labels.tafseer}</h3>
            </div>

            {tafseerLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
                  <p className="text-white/60 text-sm">{labels.loading}</p>
                </div>
              </div>
            ) : tafseerData?.text ? (
              <div
                className={`bg-gradient-to-b from-white/5 to-white/[0.02] rounded-2xl overflow-hidden ${
                  lang === 'ur' || lang === 'ar' ? 'text-right' : 'text-left'
                }`}
                dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}
              >
                {/* Tafseer Header */}
                <div className="flex items-center gap-2 px-5 py-3 bg-emerald-500/10 border-b border-emerald-500/20">
                  <Icons.BookOpen className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-emerald-300 font-medium">
                    {TAFSEER_SOURCES[tafseerSourceId]?.name || labels.tafseer}
                  </h4>
                </div>

                {/* Tafseer Content - Properly formatted */}
                <div className="p-5">
                  <div
                    className={`tafseer-content text-white/95 ${
                      lang === 'ur' || lang === 'ar'
                        ? 'text-lg leading-[2.2] tracking-wide'
                        : 'text-base leading-[1.9]'
                    }`}
                    style={{
                      fontFamily: lang === 'ur' || lang === 'ar'
                        ? "'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', 'Noto Naskh Arabic', serif"
                        : 'inherit',
                      wordSpacing: lang === 'ur' || lang === 'ar' ? '0.05em' : 'normal',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: tafseerData.text
                        .replace(/\n\n/g, '</p><p class="mt-4">')
                        .replace(/\n/g, '<br/>')
                        .replace(/^/, '<p>')
                        .replace(/$/, '</p>')
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="text-center py-8 bg-white/5 rounded-2xl">
                <Icons.AlertCircle className="w-10 h-10 text-amber-400 mx-auto mb-2" />
                <p className="text-white/60 text-sm">{labels.comingSoonDesc}</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-white/5">
          <p className="text-white/50 text-xs text-center">
            {labels.tapForDetails}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Ontology View Modal */}
      <OntologyView
        surahId={surahId}
        lang={lang}
        isVisible={showOntology}
        onClose={() => setShowOntology(false)}
      />
    </div>
  );
}

/**
 * Grammar Button - Add to verse actions
 */
export function GrammarButton({ surahId, ayahNum, onClick, isPremium }) {
  const hasData = hasTreebankData(surahId);
  const canAccess = canAccessTreebank(surahId, isPremium);

  return (
    <button
      onClick={onClick}
      className={`p-1.5 rounded-full transition-all hover:scale-110 ${
        hasData ? 'bg-purple-500/30 hover:bg-purple-500/50' : 'bg-white/15 opacity-50'
      }`}
      title={hasData ? 'View Grammar Analysis' : 'Grammar data not available'}
      disabled={!hasData}
    >
      <Icons.BookOpen className="w-3 h-3 text-purple-300" />
      {!canAccess && hasData && (
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full flex items-center justify-center">
          <Icons.Lock className="w-2 h-2 text-white" />
        </span>
      )}
    </button>
  );
}

export default TreebankOverlay;
