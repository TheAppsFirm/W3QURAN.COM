/**
 * Quran Life Companion AI
 * An AI-powered spiritual companion providing personalized Quranic guidance
 * based on user's life situations, emotions, and queries.
 */

import { useState, useEffect, useCallback, useRef, memo } from 'react';
import { Icons } from './Icons';
import { SURAHS } from '../../data';
import { LIFE_GUIDANCE, QUICK_SITUATIONS, getGuidance, matchSituation } from '../../data/quranGuidance';

// Storage key
const STORAGE_KEY = 'w3quran_companion_history';

// Get stored history
const getStoredHistory = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Save history
const saveHistory = (history) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 50)));
  } catch {
    console.error('Failed to save companion history');
  }
};

// Verse Card Component
const VerseCard = memo(function VerseCard({ verse, onNavigate }) {
  const surah = SURAHS.find(s => s.id === verse.surah);

  return (
    <button
      onClick={() => onNavigate && onNavigate(verse.surah, verse.ayah)}
      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-left group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p
            className="text-white text-lg leading-relaxed mb-2"
            dir="rtl"
            style={{ fontFamily: "'Scheherazade New', serif" }}
          >
            {verse.preview}
          </p>
          <p className="text-white/70 text-sm">{verse.translation}</p>
        </div>
        <div className="flex-shrink-0 text-right">
          <div className="text-white/50 text-xs">{surah?.name}</div>
          <div className="text-white/30 text-xs">{verse.surah}:{verse.ayah}</div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-3 text-white/40 group-hover:text-white/60 transition-colors">
        <Icons.BookOpen className="w-4 h-4" />
        <span className="text-xs">Open in Reader</span>
        <Icons.ChevronRight className="w-3 h-3 ml-auto" />
      </div>
    </button>
  );
});

// Action Item Component
const ActionItem = memo(function ActionItem({ action, index }) {
  const [done, setDone] = useState(false);

  return (
    <button
      onClick={() => setDone(!done)}
      className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
        done ? 'bg-emerald-500/20 border-emerald-500/30' : 'bg-white/5 border-white/10 hover:bg-white/10'
      } border`}
    >
      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
        done ? 'bg-emerald-500' : 'bg-white/20'
      }`}>
        {done ? (
          <Icons.Check className="w-4 h-4 text-white" />
        ) : (
          <span className="text-white/60 text-xs">{index + 1}</span>
        )}
      </div>
      <p className={`text-sm text-left ${done ? 'text-white/60 line-through' : 'text-white/80'}`}>
        {action}
      </p>
    </button>
  );
});

// Guidance Response Component
const GuidanceResponse = memo(function GuidanceResponse({ guidance, onNavigate, onClose }) {
  const [showAllVerses, setShowAllVerses] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyDua = async () => {
    try {
      await navigator.clipboard.writeText(`${guidance.dua}\n\n${guidance.duaTranslation}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy');
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Reflection */}
      <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20">
        <div className="flex items-center gap-2 mb-3">
          <Icons.Heart className="w-5 h-5 text-purple-400" />
          <span className="text-white font-medium">Reflection</span>
        </div>
        <p className="text-white/80 text-sm leading-relaxed">{guidance.reflection}</p>
      </div>

      {/* Primary Verses */}
      <div>
        <h3 className="text-white font-medium mb-3 flex items-center gap-2">
          <Icons.BookOpen className="w-5 h-5 text-cyan-400" />
          Guidance from the Quran
        </h3>
        <div className="space-y-3">
          {guidance.primaryVerses.slice(0, showAllVerses ? undefined : 2).map((verse, idx) => (
            <VerseCard key={idx} verse={verse} onNavigate={onNavigate} />
          ))}
        </div>
        {guidance.primaryVerses.length > 2 && !showAllVerses && (
          <button
            onClick={() => setShowAllVerses(true)}
            className="w-full mt-3 py-2 text-sm text-white/60 hover:text-white/80 transition-colors"
          >
            Show {guidance.primaryVerses.length - 2} more verses
          </button>
        )}
      </div>

      {/* Dua */}
      <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Icons.Star className="w-5 h-5 text-amber-400" />
            <span className="text-white font-medium">Recommended Dua</span>
          </div>
          <button
            onClick={copyDua}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {copied ? (
              <Icons.Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Icons.Copy className="w-4 h-4 text-white/60" />
            )}
          </button>
        </div>
        <p
          className="text-white text-xl text-center mb-2 leading-loose"
          dir="rtl"
          style={{ fontFamily: "'Scheherazade New', serif" }}
        >
          {guidance.dua}
        </p>
        <p className="text-white/70 text-sm text-center italic">{guidance.duaTranslation}</p>
      </div>

      {/* Action Items */}
      <div>
        <h3 className="text-white font-medium mb-3 flex items-center gap-2">
          <Icons.CheckSquare className="w-5 h-5 text-emerald-400" />
          Suggested Actions
        </h3>
        <div className="space-y-2">
          {guidance.actionItems.map((action, idx) => (
            <ActionItem key={idx} action={action} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
});

// Main Component
const QuranCompanionAI = memo(function QuranCompanionAI({
  isVisible,
  onClose,
  onNavigateToVerse,
  currentMood
}) {
  const [inputText, setInputText] = useState('');
  const [selectedSituation, setSelectedSituation] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);

  // Load history on mount
  useEffect(() => {
    if (isVisible) {
      setHistory(getStoredHistory());
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isVisible]);

  // Auto-select based on mood if provided
  useEffect(() => {
    if (currentMood && isVisible) {
      const moodMapping = {
        'peaceful': 'gratitude',
        'motivated': 'strength',
        'reflective': 'confused',
        'moved': 'gratitude',
        'grateful': 'gratitude',
        'hopeful': 'hope',
      };
      const mappedSituation = moodMapping[currentMood];
      if (mappedSituation) {
        handleSituationSelect(mappedSituation);
      }
    }
  }, [currentMood, isVisible]);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('');
        setInputText(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        // Auto-search if we have text
        if (inputText.trim()) {
          handleSearch();
        }
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  const toggleVoice = useCallback(() => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setInputText('');
      recognitionRef.current.start();
      setIsListening(true);
    }
  }, [isListening]);

  const handleSituationSelect = useCallback((situationId) => {
    const guidance = getGuidance(situationId);
    if (guidance) {
      setSelectedSituation(guidance);

      // Save to history
      const newEntry = {
        id: Date.now(),
        situationId,
        situationName: guidance.name,
        timestamp: new Date().toISOString(),
      };
      const newHistory = [newEntry, ...history.filter(h => h.situationId !== situationId)];
      setHistory(newHistory);
      saveHistory(newHistory);
    }
  }, [history]);

  const handleSearch = useCallback(() => {
    if (!inputText.trim()) return;

    const matches = matchSituation(inputText);
    if (matches.length > 0) {
      handleSituationSelect(matches[0].id);
    }
  }, [inputText, handleSituationSelect]);

  const handleNavigate = useCallback((surahId, ayahNum) => {
    if (onNavigateToVerse) {
      onNavigateToVerse(surahId, ayahNum);
      onClose();
    }
  }, [onNavigateToVerse, onClose]);

  const reset = useCallback(() => {
    setSelectedSituation(null);
    setInputText('');
    setShowHistory(false);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'bubblePopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {/* Header */}
        <div className="flex-shrink-0 p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <Icons.HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Quran Companion</h2>
                <p className="text-white/60 text-sm">Your spiritual guide</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {selectedSituation && (
                <button
                  onClick={reset}
                  className="p-2 rounded-full hover:bg-white/10 transition-all"
                  title="New conversation"
                >
                  <Icons.Refresh className="w-5 h-5 text-white/70" />
                </button>
              )}
              <button
                onClick={() => setShowHistory(!showHistory)}
                className={`p-2 rounded-full transition-all ${showHistory ? 'bg-white/20' : 'hover:bg-white/10'}`}
                title="History"
              >
                <Icons.Clock className="w-5 h-5 text-white/70" />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 transition-all"
              >
                <Icons.X className="w-6 h-6 text-white/70" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {showHistory ? (
            /* History View */
            <div className="space-y-3">
              <h3 className="text-white/60 text-sm mb-4">Recent Guidance</h3>
              {history.length > 0 ? (
                history.map((entry) => (
                  <button
                    key={entry.id}
                    onClick={() => {
                      handleSituationSelect(entry.situationId);
                      setShowHistory(false);
                    }}
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">{entry.situationName}</span>
                      <span className="text-white/40 text-xs">
                        {new Date(entry.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                  </button>
                ))
              ) : (
                <div className="text-center py-8 text-white/40">
                  No history yet
                </div>
              )}
            </div>
          ) : selectedSituation ? (
            /* Guidance Response */
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${selectedSituation.color}30` }}
                >
                  {(() => {
                    const Icon = Icons[selectedSituation.icon] || Icons.Heart;
                    return <Icon className="w-5 h-5" style={{ color: selectedSituation.color }} />;
                  })()}
                </div>
                <div>
                  <h3 className="text-white font-medium">{selectedSituation.name}</h3>
                  <p className="text-white/60 text-sm" dir="rtl">{selectedSituation.nameAr}</p>
                </div>
              </div>
              <GuidanceResponse
                guidance={selectedSituation}
                onNavigate={handleNavigate}
                onClose={onClose}
              />
            </div>
          ) : (
            /* Initial State */
            <div className="space-y-6">
              {/* Search Input */}
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="How are you feeling today?"
                  className="w-full p-4 pr-24 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  {recognitionRef.current && (
                    <button
                      onClick={toggleVoice}
                      className={`p-2 rounded-full transition-all ${
                        isListening ? 'bg-red-500 animate-pulse' : 'hover:bg-white/10'
                      }`}
                    >
                      <Icons.Mic className={`w-5 h-5 ${isListening ? 'text-white' : 'text-white/60'}`} />
                    </button>
                  )}
                  <button
                    onClick={handleSearch}
                    disabled={!inputText.trim()}
                    className="p-2 rounded-full hover:bg-white/10 disabled:opacity-40 transition-all"
                  >
                    <Icons.Search className="w-5 h-5 text-white/60" />
                  </button>
                </div>
              </div>

              {/* Quick Situations */}
              <div>
                <h3 className="text-white/60 text-sm mb-4">How can I help you today?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {QUICK_SITUATIONS.map((situation) => {
                    const Icon = Icons[situation.icon] || Icons.Heart;
                    return (
                      <button
                        key={situation.id}
                        onClick={() => handleSituationSelect(situation.id)}
                        className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-3 text-left group"
                      >
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                          style={{ backgroundColor: `${situation.color}30` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: situation.color }} />
                        </div>
                        <span className="text-white text-sm font-medium">{situation.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* All Situations */}
              <div>
                <h3 className="text-white/60 text-sm mb-4">More Life Situations</h3>
                <div className="grid grid-cols-3 gap-2">
                  {Object.values(LIFE_GUIDANCE)
                    .filter(g => !QUICK_SITUATIONS.find(q => q.id === g.id))
                    .map((guidance) => {
                      const Icon = Icons[guidance.icon] || Icons.Heart;
                      return (
                        <button
                          key={guidance.id}
                          onClick={() => handleSituationSelect(guidance.id)}
                          className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col items-center gap-2"
                        >
                          <Icon className="w-5 h-5" style={{ color: guidance.color }} />
                          <span className="text-white/70 text-xs text-center">{guidance.name}</span>
                        </button>
                      );
                    })}
                </div>
              </div>

              {/* Inspirational Message */}
              <div className="text-center py-6 border-t border-white/10">
                <p className="text-white/40 text-sm italic">
                  "And We have certainly made the Quran easy for remembrance" - 54:17
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default QuranCompanionAI;
