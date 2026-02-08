/**
 * Quran Time Capsule
 * Record personal reflections, voice notes, and milestones tied to verses
 * Create future messages to yourself
 */

import { useState, useEffect, useRef, useCallback, memo, useMemo } from 'react';
import { Icons } from './Icons';
import { SURAHS } from '../../data';
import {
  initCapsuleDB,
  createCapsule,
  getAllCapsules,
  getCapsulesByVerse,
  getMedia,
  deleteCapsule,
  getCapsuleStats,
  MILESTONE_TYPES,
} from '../../data/timeCapsuleStorage';

// Capsule type configurations
const CAPSULE_TYPES = {
  text: { label: 'Text Reflection', icon: 'Edit', color: '#3B82F6' },
  voice: { label: 'Voice Note', icon: 'Mic', color: '#EC4899' },
  photo: { label: 'Photo Memory', icon: 'Image', color: '#10B981' },
  milestone: { label: 'Milestone', icon: 'Award', color: '#F59E0B' },
  future_message: { label: 'Future Message', icon: 'Clock', color: '#8B5CF6' },
};

// Voice Recorder Component
const VoiceRecorder = memo(function VoiceRecorder({ onRecordingComplete, maxDuration = 120 }) {
  const [isRecording, setIsRecording] = useState(false);
  const [duration, setDuration] = useState(0);
  const [audioUrl, setAudioUrl] = useState(null);
  const [error, setError] = useState(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);

  const startRecording = useCallback(async () => {
    setError(null);

    try {
      // Check for permission first
      const permissionStatus = await navigator.permissions?.query({ name: 'microphone' }).catch(() => null);

      if (permissionStatus?.state === 'denied') {
        setError('Microphone permission denied. Please click the lock icon in your browser address bar and allow microphone access.');
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        onRecordingComplete && onRecordingComplete(blob, url);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setDuration(0);

      timerRef.current = setInterval(() => {
        setDuration(prev => {
          if (prev >= maxDuration) {
            stopRecording();
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    } catch (err) {
      console.error('Error accessing microphone:', err);
      if (err.name === 'NotAllowedError') {
        setError('Microphone access denied. Please allow microphone access in your browser settings.');
      } else if (err.name === 'NotFoundError') {
        setError('No microphone found. Please connect a microphone and try again.');
      } else {
        setError(`Microphone error: ${err.message || 'Unknown error'}`);
      }
    }
  }, [maxDuration, onRecordingComplete]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  }, [isRecording]);

  const reset = useCallback(() => {
    setAudioUrl(null);
    setDuration(0);
    onRecordingComplete && onRecordingComplete(null, null);
  }, [onRecordingComplete]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {isRecording ? (
            <div className="w-12 h-12 rounded-full bg-red-500 animate-pulse flex items-center justify-center">
              <Icons.Mic className="w-6 h-6 text-white" />
            </div>
          ) : audioUrl ? (
            <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
              <Icons.Check className="w-6 h-6 text-white" />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Icons.Mic className="w-6 h-6 text-white/60" />
            </div>
          )}
          <div>
            <p className="text-white font-medium">
              {isRecording ? 'Recording...' : audioUrl ? 'Recording Complete' : 'Voice Note'}
            </p>
            <p className="text-white/60 text-sm">{formatTime(duration)}</p>
          </div>
        </div>

        {!audioUrl ? (
          <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              isRecording
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-pink-500 hover:bg-pink-600 text-white'
            }`}
          >
            {isRecording ? 'Stop' : 'Record'}
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={reset}
              className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm"
            >
              Re-record
            </button>
          </div>
        )}
      </div>

      {audioUrl && (
        <audio controls className="w-full" src={audioUrl} />
      )}

      {isRecording && (
        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-500 transition-all"
            style={{ width: `${(duration / maxDuration) * 100}%` }}
          />
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="mt-3 p-3 rounded-lg bg-red-500/20 border border-red-500/30">
          <div className="flex items-start gap-2">
            <Icons.AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-red-300 text-xs">{error}</p>
              <div className="mt-2 text-white/50 text-xs space-y-1">
                <p>🔒 Click the lock icon in your browser address bar</p>
                <p>🎤 Set Microphone to "Allow"</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-1 px-3 py-1 rounded bg-red-500/30 text-red-300 text-xs hover:bg-red-500/40"
                >
                  Reload Page
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

// Capsule Entry Form
const CapsuleEntryForm = memo(function CapsuleEntryForm({
  verseRef,
  onSave,
  onClose,
}) {
  const [type, setType] = useState('text');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [milestoneType, setMilestoneType] = useState('first_surah');
  const [unlockDate, setUnlockDate] = useState('');
  const [saving, setSaving] = useState(false);

  const photoInputRef = useRef(null);

  const handlePhotoSelect = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setPhotoPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  }, []);

  const handleSave = useCallback(async () => {
    if (saving) return;
    setSaving(true);

    try {
      let mediaBlob = null;
      let capsuleContent = content;

      if (type === 'voice' && audioBlob) {
        mediaBlob = audioBlob;
        capsuleContent = 'Voice note';
      } else if (type === 'photo' && photoFile) {
        mediaBlob = photoFile;
        capsuleContent = content || 'Photo memory';
      } else if (type === 'milestone') {
        capsuleContent = content || MILESTONE_TYPES[milestoneType]?.label;
      }

      await createCapsule({
        type,
        verseRef,
        content: capsuleContent,
        mediaBlob,
        mood,
        unlockAt: type === 'future_message' && unlockDate ? new Date(unlockDate) : null,
        metadata: type === 'milestone' ? { milestoneType } : {},
      });

      onSave && onSave();
    } catch (error) {
      console.error('Error saving capsule:', error);
    } finally {
      setSaving(false);
    }
  }, [type, content, mood, audioBlob, photoFile, milestoneType, unlockDate, verseRef, saving, onSave]);

  const moods = [
    { id: 'peaceful', icon: 'Cloud', color: '#06B6D4' },
    { id: 'grateful', icon: 'Star', color: '#10B981' },
    { id: 'reflective', icon: 'Eye', color: '#8B5CF6' },
    { id: 'moved', icon: 'Heart', color: '#EC4899' },
  ];

  return (
    <div className="space-y-6">
      {/* Type Selection */}
      <div>
        <label className="text-white/60 text-xs uppercase tracking-wide mb-3 block">
          Type of Entry
        </label>
        <div className="grid grid-cols-5 gap-2">
          {Object.entries(CAPSULE_TYPES).map(([key, config]) => {
            const Icon = Icons[config.icon] || Icons.Edit;
            const isSelected = type === key;
            return (
              <button
                key={key}
                onClick={() => setType(key)}
                className={`p-3 rounded-xl flex flex-col items-center gap-2 transition-all ${
                  isSelected
                    ? 'bg-white/20 ring-2 ring-white/40'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <Icon className="w-5 h-5" style={{ color: config.color }} />
                <span className="text-white/70 text-[10px] text-center">{config.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Type-specific content */}
      {type === 'text' && (
        <div>
          <label className="text-white/60 text-xs uppercase tracking-wide mb-2 block">
            Your Reflection
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your thoughts about this verse..."
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 resize-none"
            rows={4}
          />
        </div>
      )}

      {type === 'voice' && (
        <VoiceRecorder
          onRecordingComplete={(blob) => setAudioBlob(blob)}
        />
      )}

      {type === 'photo' && (
        <div>
          <input
            ref={photoInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoSelect}
            className="hidden"
          />
          {photoPreview ? (
            <div className="relative">
              <img
                src={photoPreview}
                alt="Selected"
                className="w-full h-48 object-cover rounded-xl"
              />
              <button
                onClick={() => {
                  setPhotoFile(null);
                  setPhotoPreview(null);
                }}
                className="absolute top-2 right-2 p-2 rounded-full bg-black/50 hover:bg-black/70"
              >
                <Icons.X className="w-4 h-4 text-white" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => photoInputRef.current?.click()}
              className="w-full p-8 rounded-xl border-2 border-dashed border-white/20 hover:border-white/40 transition-colors flex flex-col items-center gap-3"
            >
              <Icons.Image className="w-8 h-8 text-white/40" />
              <span className="text-white/60 text-sm">Click to select a photo</span>
            </button>
          )}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add a caption..."
            className="w-full mt-4 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-emerald-500/50 resize-none"
            rows={2}
          />
        </div>
      )}

      {type === 'milestone' && (
        <div className="space-y-4">
          <div>
            <label className="text-white/60 text-xs uppercase tracking-wide mb-2 block">
              Milestone Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(MILESTONE_TYPES).map(([key, config]) => {
                const Icon = Icons[config.icon] || Icons.Award;
                const isSelected = milestoneType === key;
                return (
                  <button
                    key={key}
                    onClick={() => setMilestoneType(key)}
                    className={`p-3 rounded-xl flex flex-col items-center gap-2 transition-all ${
                      isSelected
                        ? 'bg-amber-500/30 ring-2 ring-amber-500/50'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-5 h-5" style={{ color: config.color }} />
                    <span className="text-white/70 text-[10px] text-center">{config.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Describe this milestone..."
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-amber-500/50 resize-none"
            rows={3}
          />
        </div>
      )}

      {type === 'future_message' && (
        <div className="space-y-4">
          <div>
            <label className="text-white/60 text-xs uppercase tracking-wide mb-2 block">
              Open This Message On
            </label>
            <input
              type="date"
              value={unlockDate}
              onChange={(e) => setUnlockDate(e.target.value)}
              min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500/50"
            />
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write a message to your future self..."
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 resize-none"
            rows={4}
          />
        </div>
      )}

      {/* Mood (for text, voice, photo) */}
      {['text', 'voice', 'photo'].includes(type) && (
        <div>
          <label className="text-white/60 text-xs uppercase tracking-wide mb-3 block">
            How were you feeling? (Optional)
          </label>
          <div className="flex gap-3">
            {moods.map((m) => {
              const Icon = Icons[m.icon] || Icons.Heart;
              const isSelected = mood === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setMood(isSelected ? null : m.id)}
                  className={`p-3 rounded-full transition-all ${
                    isSelected ? 'ring-2 ring-white/40 scale-110' : 'hover:scale-105'
                  }`}
                  style={{ backgroundColor: `${m.color}${isSelected ? '60' : '30'}` }}
                >
                  <Icon className="w-5 h-5" style={{ color: m.color }} />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Save Button */}
      <button
        onClick={handleSave}
        disabled={saving || (type === 'text' && !content.trim()) || (type === 'voice' && !audioBlob) || (type === 'future_message' && (!content.trim() || !unlockDate))}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:from-cyan-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2"
      >
        {saving ? (
          <Icons.Loader className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <Icons.Capsule className="w-5 h-5" />
            Save to Time Capsule
          </>
        )}
      </button>
    </div>
  );
});

// Capsule Card Component
const CapsuleCard = memo(function CapsuleCard({ capsule, onDelete, onNavigate }) {
  const [expanded, setExpanded] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);

  const config = CAPSULE_TYPES[capsule.type] || CAPSULE_TYPES.text;
  const Icon = Icons[config.icon] || Icons.Edit;

  // Load media on expand
  useEffect(() => {
    if (expanded && capsule.mediaId) {
      getMedia(capsule.mediaId).then((media) => {
        if (media?.blob) {
          const url = URL.createObjectURL(media.blob);
          if (capsule.type === 'voice') {
            setAudioUrl(url);
          } else if (capsule.type === 'photo') {
            setPhotoUrl(url);
          }
        }
      });
    }
  }, [expanded, capsule.mediaId, capsule.type]);

  const date = new Date(capsule.createdAt);
  const [surahId, ayahNum] = capsule.verseRef?.split(':').map(Number) || [];
  const surah = surahId ? SURAHS.find(s => s.id === surahId) : null;

  if (capsule.isLocked) {
    const unlockDate = new Date(capsule.unlockAt);
    return (
      <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-purple-500/30 flex items-center justify-center">
            <Icons.Lock className="w-6 h-6 text-purple-400" />
          </div>
          <div className="flex-1">
            <p className="text-white font-medium">Future Message</p>
            <p className="text-white/60 text-sm">
              Opens on {unlockDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`p-4 rounded-xl bg-white/5 border border-white/10 transition-all ${
        expanded ? 'ring-2 ring-white/20' : 'hover:bg-white/10'
      }`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-start gap-3 text-left"
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${config.color}30` }}
        >
          <Icon className="w-5 h-5" style={{ color: config.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="text-white font-medium">{config.label}</span>
            <span className="text-white/40 text-xs">
              {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
          </div>
          {surah && (
            <p className="text-white/60 text-sm">
              {surah.name} {capsule.verseRef}
            </p>
          )}
          {!expanded && capsule.content && (
            <p className="text-white/50 text-sm truncate mt-1">{capsule.content}</p>
          )}
        </div>
        <Icons.ChevronDown
          className={`w-5 h-5 text-white/40 transition-transform ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      {expanded && (
        <div className="mt-4 space-y-3 pl-13">
          {capsule.type === 'voice' && audioUrl && (
            <audio controls className="w-full" src={audioUrl} />
          )}
          {capsule.type === 'photo' && photoUrl && (
            <img
              src={photoUrl}
              alt="Memory"
              className="w-full h-48 object-cover rounded-lg"
            />
          )}
          {capsule.content && (
            <p className="text-white/80 text-sm leading-relaxed">{capsule.content}</p>
          )}
          {capsule.mood && (
            <div className="flex items-center gap-2">
              <span className="text-white/40 text-xs">Mood:</span>
              <span className="text-white/60 text-sm capitalize">{capsule.mood}</span>
            </div>
          )}
          <div className="flex gap-2 pt-2">
            {surah && (
              <button
                onClick={() => onNavigate && onNavigate(surahId, ayahNum)}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1"
              >
                <Icons.BookOpen className="w-3 h-3" />
                Open Verse
              </button>
            )}
            <button
              onClick={() => onDelete && onDelete(capsule.id)}
              className="px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 text-xs flex items-center gap-1"
            >
              <Icons.X className="w-3 h-3" />
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

// Main Component
const TimeCapsule = memo(function TimeCapsule({
  isVisible,
  onClose,
  currentVerseRef,
  onNavigateToVerse,
}) {
  const [view, setView] = useState('timeline'); // 'timeline' | 'create' | 'verse'
  const [capsules, setCapsules] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load data
  useEffect(() => {
    if (isVisible) {
      setLoading(true);
      initCapsuleDB()
        .then(() => Promise.all([getAllCapsules(), getCapsuleStats()]))
        .then(([capsuleData, statsData]) => {
          setCapsules(capsuleData);
          setStats(statsData);
        })
        .finally(() => setLoading(false));
    }
  }, [isVisible]);

  const handleSave = useCallback(() => {
    setView('timeline');
    getAllCapsules().then(setCapsules);
    getCapsuleStats().then(setStats);
  }, []);

  const handleDelete = useCallback(async (id) => {
    await deleteCapsule(id);
    setCapsules(prev => prev.filter(c => c.id !== id));
    getCapsuleStats().then(setStats);
  }, []);

  const handleNavigate = useCallback((surahId, ayahNum) => {
    onNavigateToVerse && onNavigateToVerse(surahId, ayahNum);
    onClose && onClose();
  }, [onNavigateToVerse, onClose]);

  if (!isVisible) return null;

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
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <Icons.Capsule className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Time Capsule</h2>
                <p className="text-white/60 text-sm">Your spiritual journey</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-all"
            >
              <Icons.X className="w-6 h-6 text-white/70" />
            </button>
          </div>

          {/* View Tabs */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setView('timeline')}
              className={`flex-1 py-2 px-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                view === 'timeline'
                  ? 'bg-white/20 text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icons.Clock className="w-4 h-4" />
              Timeline
            </button>
            <button
              onClick={() => setView('create')}
              className={`flex-1 py-2 px-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                view === 'create'
                  ? 'bg-white/20 text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icons.Plus className="w-4 h-4" />
              New Entry
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Icons.Loader className="w-8 h-8 text-white/40 animate-spin" />
            </div>
          ) : view === 'create' ? (
            <CapsuleEntryForm
              verseRef={currentVerseRef}
              onSave={handleSave}
              onClose={() => setView('timeline')}
            />
          ) : (
            <div className="space-y-6">
              {/* Stats */}
              {stats && stats.total > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white/5 text-center">
                    <p className="text-2xl font-bold text-white">{stats.total}</p>
                    <p className="text-white/40 text-xs">Total Entries</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 text-center">
                    <p className="text-2xl font-bold text-white">{stats.versesWithCapsules}</p>
                    <p className="text-white/40 text-xs">Verses</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 text-center">
                    <p className="text-2xl font-bold text-white">{stats.locked}</p>
                    <p className="text-white/40 text-xs">Locked</p>
                  </div>
                </div>
              )}

              {/* Capsules List */}
              {capsules.length > 0 ? (
                <div className="space-y-3">
                  {capsules.map((capsule) => (
                    <CapsuleCard
                      key={capsule.id}
                      capsule={capsule}
                      onDelete={handleDelete}
                      onNavigate={handleNavigate}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                    <Icons.Capsule className="w-10 h-10 text-white/40" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Start Your Journey</h3>
                  <p className="text-white/60 text-sm max-w-xs mx-auto mb-6">
                    Create your first time capsule to preserve memories and reflections from your Quran reading.
                  </p>
                  <button
                    onClick={() => setView('create')}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium"
                  >
                    Create First Entry
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default TimeCapsule;
