/**
 * Voice-Controlled Quran
 * Hands-free Quran experience using voice commands
 */

import { useState, useEffect, useCallback, memo } from 'react';
import { Icons } from './Icons';
import { useVoiceCommands } from '../../hooks/useVoiceCommands';

// Command examples for help
const COMMAND_EXAMPLES = [
  { category: 'Navigation', commands: [
    { command: 'Go to Surah Al-Baqarah', description: 'Open a surah by name' },
    { command: 'Go to Surah 67', description: 'Open a surah by number' },
    { command: 'Go to verse 255', description: 'Jump to a specific verse' },
    { command: 'Next verse', description: 'Move to next verse' },
    { command: 'Previous verse', description: 'Move to previous verse' },
  ]},
  { category: 'Playback', commands: [
    { command: 'Play', description: 'Start audio playback' },
    { command: 'Pause', description: 'Pause audio' },
    { command: 'Stop', description: 'Stop audio' },
    { command: 'Repeat this verse', description: 'Repeat current verse' },
  ]},
  { category: 'Features', commands: [
    { command: 'Show tafseer', description: 'Open tafseer panel' },
    { command: 'Bookmark this verse', description: 'Bookmark current verse' },
    { command: 'Share this verse', description: 'Share current verse' },
    { command: 'Show translation', description: 'Toggle translation' },
  ]},
  { category: 'Quick Access', commands: [
    { command: 'Ayatul Kursi', description: 'Go to 2:255' },
    { command: 'Surah Fatiha', description: 'Go to Al-Fatiha' },
    { command: 'Surah Yasin', description: 'Go to Ya-Sin' },
    { command: 'Surah Rahman', description: 'Go to Ar-Rahman' },
  ]},
];

// Voice Waveform Visualization
const VoiceWaveform = memo(function VoiceWaveform({ isActive }) {
  return (
    <div className="flex items-center justify-center gap-1 h-12">
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className={`w-1 rounded-full transition-all duration-150 ${
            isActive ? 'bg-cyan-400' : 'bg-white/30'
          }`}
          style={{
            height: isActive ? `${20 + Math.random() * 30}px` : '8px',
            animation: isActive ? `voiceBar ${0.3 + Math.random() * 0.3}s ease-in-out infinite alternate` : 'none',
            animationDelay: `${i * 0.05}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes voiceBar {
          from { height: 8px; }
          to { height: 40px; }
        }
      `}</style>
    </div>
  );
});

// Floating Voice Button (for use within reader)
export const FloatingVoiceButton = memo(function FloatingVoiceButton({
  isListening,
  onToggle,
  isSupported,
  transcript,
}) {
  if (!isSupported) return null;

  return (
    <button
      onClick={onToggle}
      className={`fixed bottom-24 right-4 z-[60] w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg ${
        isListening
          ? 'bg-gradient-to-br from-cyan-500 to-purple-500 animate-pulse scale-110'
          : 'bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700'
      }`}
      title={isListening ? 'Stop listening' : 'Start voice control'}
    >
      {isListening ? (
        <Icons.VoiceWave className="w-6 h-6 text-white" />
      ) : (
        <Icons.Mic className="w-6 h-6 text-white/80" />
      )}

      {/* Transcript bubble */}
      {isListening && transcript && (
        <div className="absolute bottom-full right-0 mb-2 p-3 rounded-xl bg-black/90 border border-white/20 max-w-xs">
          <p className="text-white text-sm">{transcript}</p>
        </div>
      )}
    </button>
  );
});

// Main Voice Control Panel
const VoiceControl = memo(function VoiceControl({
  isVisible,
  onClose,
  onNavigateSurah,
  onNavigateVerse,
  onNextVerse,
  onPreviousVerse,
  onPlay,
  onPause,
  onStop,
  onRepeat,
  onShowTafseer,
  onHideTafseer,
  onBookmark,
  onShare,
  onSearch,
  onShowTranslation,
  onHideTranslation,
  onEnableWordByWord,
  onDisableWordByWord,
  onGoBack,
  onGoHome,
}) {
  const [showHelp, setShowHelp] = useState(true);

  const {
    isListening,
    transcript,
    lastCommand,
    error,
    isSupported,
    startListening,
    stopListening,
    toggleListening,
  } = useVoiceCommands({
    onNavigateSurah,
    onNavigateVerse,
    onNextVerse,
    onPreviousVerse,
    onPlay,
    onPause,
    onStop,
    onRepeat,
    onShowTafseer,
    onHideTafseer,
    onBookmark,
    onShare,
    onSearch,
    onShowTranslation,
    onHideTranslation,
    onEnableWordByWord,
    onDisableWordByWord,
    onGoBack,
    onGoHome,
    enabled: isVisible,
  });

  // Clean up when closing (don't auto-start - requires user click for permission)
  useEffect(() => {
    return () => {
      if (isListening) {
        stopListening();
      }
    };
  }, [isListening, stopListening]);

  if (!isVisible) return null;

  if (!isSupported) {
    return (
      <div
        className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
        <div
          className="relative bg-gray-900 rounded-3xl p-8 max-w-md text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <Icons.AlertCircle className="w-16 h-16 text-amber-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Voice Control Not Supported</h2>
          <p className="text-white/60 mb-6">
            Your browser doesn't support voice recognition. Please use Chrome, Edge, or Safari for voice control.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'bubblePopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {/* Header */}
        <div className="flex-shrink-0 p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                isListening
                  ? 'bg-gradient-to-br from-cyan-500 to-purple-500 animate-pulse'
                  : 'bg-white/20'
              }`}>
                <Icons.Mic className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Voice Control</h2>
                <p className={`text-sm ${isListening ? 'text-cyan-400' : 'text-white/60'}`}>
                  {isListening ? 'Listening...' : 'Tap to activate'}
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
        </div>

        {/* Waveform and status */}
        <div className="p-6 border-b border-white/10">
          <VoiceWaveform isActive={isListening} />

          {/* Current transcript */}
          <div className="mt-4 min-h-[60px] p-4 rounded-xl bg-white/5 border border-white/10">
            {transcript ? (
              <p className="text-white text-center">{transcript}</p>
            ) : isListening ? (
              <p className="text-white/40 text-center">Say a command...</p>
            ) : error ? (
              <p className="text-white/40 text-center">Fix the error above, then try again</p>
            ) : (
              <div className="text-center">
                <p className="text-white/60">Click the button below to enable voice control</p>
                <p className="text-white/40 text-xs mt-1">Your browser will ask for microphone permission</p>
              </div>
            )}
          </div>

          {/* Last command result */}
          {lastCommand && (
            <div className={`mt-3 p-3 rounded-xl text-sm ${
              lastCommand.success
                ? 'bg-emerald-500/20 text-emerald-400'
                : 'bg-amber-500/20 text-amber-400'
            }`}>
              {lastCommand.success
                ? `Executed: ${lastCommand.action}`
                : lastCommand.message || 'Command not recognized'
              }
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-3 p-4 rounded-xl bg-red-500/20 border border-red-500/30">
              <div className="flex items-start gap-3">
                <Icons.AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-red-400 text-sm font-medium">Microphone Access Required</p>
                  <p className="text-red-300/70 text-xs mt-1">{error}</p>

                  <div className="mt-3 p-3 rounded-lg bg-white/5 text-white/60 text-xs space-y-2">
                    <p className="font-medium text-white/80">Quick Fix (Browser):</p>
                    <p className="text-cyan-300">1. Click the 🔒 lock icon in your browser's address bar</p>
                    <p className="text-cyan-300">2. Find "Microphone" and set it to "Allow"</p>
                    <p className="text-cyan-300">3. Click the button below to reload</p>

                    <button
                      onClick={() => window.location.reload()}
                      className="mt-2 w-full py-2 rounded-lg bg-cyan-500/30 text-cyan-300 text-xs font-medium hover:bg-cyan-500/40 transition-colors"
                    >
                      🔄 Reload Page After Allowing
                    </button>

                    <div className="mt-2 pt-2 border-t border-white/10 space-y-1">
                      <p className="font-medium text-white/60">System Settings:</p>
                      <p>🍎 Mac: System Settings → Privacy → Microphone</p>
                      <p>🪟 Windows: Settings → Privacy → Microphone</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Toggle button */}
          <button
            onClick={toggleListening}
            className={`w-full mt-4 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-3 ${
              isListening
                ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                : 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 shadow-lg shadow-cyan-500/25'
            }`}
          >
            {isListening ? (
              <>
                <Icons.X className="w-5 h-5" />
                Stop Listening
              </>
            ) : (
              <>
                <Icons.Mic className="w-5 h-5" />
                {error ? 'Try Again' : 'Enable Microphone & Start'}
              </>
            )}
          </button>
        </div>

        {/* Help section */}
        <div className="flex-1 overflow-y-auto p-6">
          <button
            onClick={() => setShowHelp(!showHelp)}
            className="w-full flex items-center justify-between mb-4"
          >
            <span className="text-white font-medium">Voice Commands</span>
            <Icons.ChevronDown className={`w-5 h-5 text-white/60 transition-transform ${showHelp ? 'rotate-180' : ''}`} />
          </button>

          {showHelp && (
            <div className="space-y-4">
              {COMMAND_EXAMPLES.map((category) => (
                <div key={category.category}>
                  <h4 className="text-white/60 text-xs uppercase tracking-wide mb-2">
                    {category.category}
                  </h4>
                  <div className="space-y-2">
                    {category.commands.map((cmd) => (
                      <div
                        key={cmd.command}
                        className="p-3 rounded-xl bg-white/5 border border-white/10"
                      >
                        <p className="text-cyan-400 text-sm font-medium">"{cmd.command}"</p>
                        <p className="text-white/50 text-xs mt-1">{cmd.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tips */}
        <div className="flex-shrink-0 p-4 border-t border-white/10 bg-white/5">
          <div className="flex items-start gap-3">
            <Icons.Info className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
            <p className="text-white/50 text-xs">
              Speak clearly and wait for the waveform to respond. Commands work best in a quiet environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default VoiceControl;
