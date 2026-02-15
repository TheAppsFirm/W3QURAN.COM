/**
 * Quranic Arabic Treebank Analysis Components
 * Provides word-level morphological analysis and dependency tree visualization
 *
 * Premium Feature: Free for Surah Al-Fatiha, Premium for others
 */

import React, { useState, useCallback, memo } from 'react';
import { Icons } from './Icons';
import {
  POS_TAGS,
  GRAMMAR_ROLES,
  CASES,
  getAyahTreebank,
  hasTreebankData,
  canAccessTreebank
} from '../../data/treebankData';

/**
 * POS Tag Badge - Shows part of speech with color
 */
const POSBadge = memo(function POSBadge({ pos, size = 'sm' }) {
  const tag = POS_TAGS[pos];
  if (!tag) return null;

  const sizeClasses = {
    xs: 'text-[10px] px-1 py-0.5',
    sm: 'text-xs px-1.5 py-0.5',
    md: 'text-sm px-2 py-1',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded ${sizeClasses[size]}`}
      style={{
        color: tag.color,
        backgroundColor: tag.bgColor,
      }}
    >
      {pos}
    </span>
  );
});

/**
 * Word Card - Inline word display with POS tag
 */
const WordCard = memo(function WordCard({ word, isSelected, onClick, showDetails = true }) {
  const posColors = word.pos.map(p => POS_TAGS[p]?.color || '#888').join(', ');
  const primaryColor = POS_TAGS[word.pos[0]]?.color || '#888';

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
        {word.pos.map((p, i) => (
          <POSBadge key={i} pos={p} size="xs" />
        ))}
      </div>

      {showDetails && (
        <>
          {/* Transliteration */}
          <span className="text-xs text-white/60 italic">
            {word.transliteration}
          </span>

          {/* Translation */}
          <span className="text-xs text-white/80 mt-0.5 text-center">
            {word.translation}
          </span>
        </>
      )}
    </button>
  );
});

/**
 * Word Detail Panel - Full morphological analysis
 */
const WordDetailPanel = memo(function WordDetailPanel({ word, onClose }) {
  if (!word) return null;

  const primaryTag = POS_TAGS[word.pos[0]];
  const caseInfo = word.case ? CASES[word.case] : null;
  const roleInfo = word.grammarRole ? GRAMMAR_ROLES[word.grammarRole] : null;

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
        <span className="text-lg text-white/70 italic block">
          {word.transliteration}
        </span>
        <span className="text-white font-medium">
          "{word.translation}"
        </span>
      </div>

      {/* Details Grid */}
      <div className="p-4 space-y-3">
        {/* POS */}
        <div className="flex justify-between items-center py-2 border-b border-white/10">
          <span className="text-white/60 text-sm">Part of Speech</span>
          <div className="flex items-center gap-2">
            <span className="text-white">{primaryTag?.label}</span>
            <span className="text-white/60 font-arabic">({primaryTag?.labelAr})</span>
          </div>
        </div>

        {/* Root */}
        {word.root && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-white/60 text-sm">Root</span>
            <span className="text-white font-arabic text-lg tracking-wider">
              {word.root}
            </span>
          </div>
        )}

        {/* Pattern */}
        {word.pattern && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-white/60 text-sm">Pattern</span>
            <span className="text-white font-arabic text-lg">
              {word.pattern}
            </span>
          </div>
        )}

        {/* Case */}
        {caseInfo && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-white/60 text-sm">Case</span>
            <div className="flex items-center gap-2">
              <span className="text-white">{caseInfo.label}</span>
              <span className="text-white/60 font-arabic">({caseInfo.labelAr})</span>
            </div>
          </div>
        )}

        {/* Grammar Role */}
        {roleInfo && (
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-white/60 text-sm">Grammar Role</span>
            <div className="flex items-center gap-2">
              <span className="text-white">{roleInfo.label}</span>
              <span className="text-white/60 font-arabic">({roleInfo.labelAr})</span>
            </div>
          </div>
        )}

        {/* Features */}
        {word.features && Object.keys(word.features).length > 0 && (
          <div className="py-2 border-b border-white/10">
            <span className="text-white/60 text-sm block mb-2">Features</span>
            <div className="flex flex-wrap gap-2">
              {Object.entries(word.features).map(([key, value]) => (
                <span
                  key={key}
                  className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/80"
                >
                  {key}: {value}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Explanation */}
        {word.grammarExplanation && (
          <div className="py-2">
            <span className="text-white/60 text-sm block mb-2">Explanation</span>
            <p className="text-white/90 text-sm leading-relaxed">
              {word.grammarExplanation}
            </p>
          </div>
        )}

        {/* Dependency */}
        {word.dependencyType && (
          <div className="py-2 bg-white/5 rounded-xl p-3 mt-2">
            <span className="text-white/60 text-xs block mb-1">Relates to</span>
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
 */
const DependencyTree = memo(function DependencyTree({ words, structure }) {
  if (!structure?.diagram || structure.diagram.length === 0) return null;

  // Calculate positions for words (RTL)
  const wordPositions = {};
  const totalWords = words.length;
  const spacing = 100 / (totalWords + 1);

  words.forEach((word, index) => {
    // RTL: reverse the position
    wordPositions[word.id] = {
      x: 100 - (spacing * (index + 1)),
      y: 30,
    };
  });

  return (
    <div className="mt-4 bg-white/5 rounded-xl p-4">
      <h4 className="text-white/60 text-sm mb-3">Dependency Structure</h4>

      <svg
        viewBox="0 0 100 60"
        className="w-full h-32"
        style={{ direction: 'ltr' }}
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
              {/* Label */}
              <text
                x={midX}
                y={fromPos.y + curveHeight / 2 + 5}
                textAnchor="middle"
                className="text-[4px] fill-cyan-400 font-arabic"
              >
                {conn.label}
              </text>
            </g>
          );
        })}

        {/* Word markers */}
        {words.map((word) => {
          const pos = wordPositions[word.id];
          const color = POS_TAGS[word.pos[0]]?.color || '#888';

          return (
            <g key={word.id}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r="2"
                fill={color}
              />
              <text
                x={pos.x}
                y={pos.y - 5}
                textAnchor="middle"
                className="text-[3px] fill-white/80"
                style={{ fontFamily: 'serif' }}
              >
                {word.posLabel}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Structure explanation */}
      {structure.explanation && (
        <p className="text-white/70 text-sm mt-3 leading-relaxed">
          {structure.explanation}
        </p>
      )}
    </div>
  );
});

/**
 * POS Legend - Shows all POS tag colors
 */
const POSLegend = memo(function POSLegend() {
  const commonTags = ['N', 'V', 'ADJ', 'PRON', 'P', 'REL', 'CONJ', 'NEG'];

  return (
    <div className="flex flex-wrap gap-2 p-3 bg-white/5 rounded-xl">
      {commonTags.map(tag => {
        const info = POS_TAGS[tag];
        return (
          <div key={tag} className="flex items-center gap-1">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: info.color }}
            />
            <span className="text-xs text-white/70">{info.label}</span>
          </div>
        );
      })}
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
}) {
  const [selectedWord, setSelectedWord] = useState(null);

  const treebankData = getAyahTreebank(surahId, ayahNum);
  const canAccess = canAccessTreebank(surahId, isPremium);

  const handleWordClick = useCallback((word) => {
    setSelectedWord(prev => prev?.id === word.id ? null : word);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedWord(null);
    onClose();
  }, [onClose]);

  if (!isVisible) return null;

  // Premium gate
  if (!canAccess) {
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        onClick={handleClose}
      >
        <div
          className="bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 max-w-sm text-center"
          onClick={e => e.stopPropagation()}
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
            <Icons.BookOpen className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Grammar Analysis is Premium</h3>
          <p className="text-white/70 text-sm mb-4">
            Get detailed morphological analysis and dependency trees for all 114 surahs.
          </p>
          <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl px-4 py-2 mb-4">
            <p className="text-emerald-400 text-xs">
              Try free on Surah Al-Fatiha!
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={onUpgrade}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold hover:shadow-lg transition-all"
            >
              Upgrade to Premium
            </button>
            <button
              onClick={handleClose}
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    );
  }

  // No data available
  if (!treebankData) {
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
          <h3 className="text-lg font-bold text-white mb-2">Grammar Data Coming Soon</h3>
          <p className="text-white/70 text-sm mb-4">
            Treebank analysis for this ayah is being prepared.
          </p>
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors"
          >
            Close
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
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div>
            <h2 className="text-white font-bold">Grammar Analysis</h2>
            <p className="text-white/60 text-sm">
              Surah {surahId}, Ayah {ayahNum}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Icons.X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {/* Full Arabic Text */}
          <div className="text-center mb-6 p-4 bg-white/5 rounded-2xl">
            <p className="text-2xl font-arabic text-white leading-loose" dir="rtl">
              {treebankData.text}
            </p>
            <p className="text-white/70 text-sm mt-2">
              {treebankData.translation}
            </p>
          </div>

          {/* Words Row - RTL */}
          <div className="flex flex-wrap justify-center gap-2 mb-6" dir="rtl">
            {treebankData.words.map((word) => (
              <WordCard
                key={word.id}
                word={word}
                isSelected={selectedWord?.id === word.id}
                onClick={handleWordClick}
              />
            ))}
          </div>

          {/* Selected Word Detail */}
          {selectedWord && (
            <div className="mb-6">
              <WordDetailPanel
                word={selectedWord}
                onClose={() => setSelectedWord(null)}
              />
            </div>
          )}

          {/* Dependency Tree */}
          <DependencyTree
            words={treebankData.words}
            structure={treebankData.structure}
          />

          {/* Legend */}
          <div className="mt-6">
            <h4 className="text-white/60 text-sm mb-2">POS Tag Legend</h4>
            <POSLegend />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-white/5">
          <p className="text-white/50 text-xs text-center">
            Tap any word for detailed morphological analysis
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
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
