/**
 * Scholar Video Sync Component
 * Synced YouTube video playback with verse highlighting
 * Features:
 * - Verse-timestamp synchronization
 * - Mini player mode for reading while watching
 * - Scholar profiles with video recommendations
 * - Jump to verse timestamp
 */

import { useState, useEffect, useRef, useCallback, memo, useMemo } from 'react';
import { Icons } from './Icons';
import { SURAHS } from '../../data';
import {
  SCHOLARS,
  getScholarInfo,
  getVerseSyncedVideos,
  getVerseTimestamp,
  getVerseFromTime,
  formatTime,
  getYouTubeEmbedUrl,
  getYouTubeWatchUrl,
  generateSearchQuery,
} from '../../data/youtubeVideos';

// Mini Player Component
const MiniPlayer = memo(function MiniPlayer({
  videoId,
  title,
  scholar,
  currentVerse,
  onExpand,
  onClose,
  isPlaying,
}) {
  return (
    <div
      className="fixed bottom-20 right-4 z-[90] w-72 bg-black/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      style={{
        animation: 'slideUp 0.3s ease-out',
        boxShadow: '0 0 40px rgba(0,0,0,0.5), 0 0 20px rgba(139, 92, 246, 0.2)',
      }}
    >
      {/* Video Preview */}
      <div className="relative aspect-video bg-gray-900">
        <iframe
          src={`${getYouTubeEmbedUrl(videoId)}&autoplay=1&mute=0`}
          title={title}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* Overlay Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-purple-500/80 rounded-full text-[10px] text-white font-medium">
                Verse {currentVerse}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={onExpand}
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-all"
                title="Expand"
              >
                <Icons.Maximize className="w-3 h-3 text-white" />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-all"
                title="Close"
              >
                <Icons.X className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Bar */}
      <div className="p-2 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center flex-shrink-0">
          <span className="text-xs text-white font-bold">{scholar?.name?.charAt(0)}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-xs font-medium truncate">{title}</p>
          <p className="text-white/50 text-[10px] truncate">{scholar?.name}</p>
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
});

// Verse Timeline Component
const VerseTimeline = memo(function VerseTimeline({
  timestamps,
  currentVerse,
  totalVerses,
  onVerseClick,
}) {
  if (!timestamps) return null;

  return (
    <div className="space-y-1 max-h-48 overflow-y-auto">
      <p className="text-white/50 text-[10px] uppercase tracking-wide mb-2">
        Jump to Verse
      </p>
      <div className="grid grid-cols-4 gap-1">
        {Object.entries(timestamps).map(([verse, time]) => (
          <button
            key={verse}
            onClick={() => onVerseClick(parseInt(verse), time)}
            className={`p-2 rounded-lg text-xs font-medium transition-all ${
              parseInt(verse) === currentVerse
                ? 'bg-purple-500/60 text-white ring-1 ring-purple-400'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
          >
            <div className="font-bold">{verse}</div>
            <div className="text-[9px] opacity-70">{formatTime(time)}</div>
          </button>
        ))}
      </div>
    </div>
  );
});

// Scholar Card Component
const ScholarCard = memo(function ScholarCard({ scholar, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 p-3 rounded-xl transition-all w-full text-left ${
        isSelected
          ? 'bg-purple-500/30 ring-1 ring-purple-400/50'
          : 'bg-white/10 hover:bg-white/20'
      }`}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
        style={{
          background: isSelected
            ? 'linear-gradient(135deg, #8B5CF6, #6366F1)'
            : 'linear-gradient(135deg, #4B5563, #374151)',
        }}
      >
        {scholar.name.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-medium truncate">{scholar.name}</p>
        <p className="text-white/50 text-xs truncate">{scholar.specialty}</p>
      </div>
      {scholar.verified && (
        <Icons.CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
      )}
    </button>
  );
});

// Main Scholar Video Sync Component
const ScholarVideoSync = memo(function ScholarVideoSync({
  isVisible,
  onClose,
  surahId = null,
  surahName = null,
  currentAyah = 1,
  onAyahChange,
  onNavigateToSurah,
}) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [miniPlayerMode, setMiniPlayerMode] = useState(false);
  const [selectedScholar, setSelectedScholar] = useState(null);
  const [forceShowFull, setForceShowFull] = useState(false); // Force show full modal when expanding from mini
  const [selectedSurahId, setSelectedSurahId] = useState(surahId);
  const [browseMode, setBrowseMode] = useState(!surahId); // Start in browse mode if no surah
  const playerRef = useRef(null);

  // Get synced videos for selected surah
  const syncedVideos = selectedSurahId ? getVerseSyncedVideos(selectedSurahId) : [];
  const hasVideos = syncedVideos.length > 0;

  // Get all available surahs with synced videos
  const availableSurahs = useMemo(() => {
    const surahs = [];
    // Check surahs 1-114 for videos
    for (let i = 1; i <= 114; i++) {
      const videos = getVerseSyncedVideos(i);
      if (videos.length > 0) {
        const surah = SURAHS.find(s => s.id === i);
        if (surah) {
          surahs.push({ ...surah, videoCount: videos.length });
        }
      }
    }
    return surahs;
  }, []);

  // Get surah name for display
  const displaySurahName = surahName || (selectedSurahId ? SURAHS.find(s => s.id === selectedSurahId)?.name : null);

  // Handle surah selection in browse mode
  const handleSurahSelect = useCallback((surah) => {
    setSelectedSurahId(surah.id);
    setBrowseMode(false);
    setSelectedVideo(null);
  }, []);

  // Auto-select first video if available
  useEffect(() => {
    if (hasVideos && !selectedVideo) {
      setSelectedVideo(syncedVideos[0]);
      const scholar = getScholarInfo(syncedVideos[0].scholar);
      setSelectedScholar(scholar);
    }
  }, [hasVideos, selectedVideo, syncedVideos]);

  // Handle visibility changes - expand from mini player when parent re-opens modal
  const prevVisibleRef = useRef(isVisible);
  useEffect(() => {
    // Only act when isVisible transitions from false → true (parent re-opens)
    if (isVisible && !prevVisibleRef.current) {
      setMiniPlayerMode(false);
      setForceShowFull(false);
    }
    prevVisibleRef.current = isVisible;
  }, [isVisible]);

  // Handle verse click from timeline — seek within the embedded player
  const handleVerseClick = useCallback((verse, timestamp) => {
    if (onAyahChange) {
      onAyahChange(verse);
    }
    // Seek within the embedded YouTube iframe using postMessage API
    if (playerRef.current?.contentWindow) {
      playerRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'seekTo', args: [timestamp, true] }),
        '*'
      );
      // Also ensure the video is playing after seek
      playerRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
        '*'
      );
    }
  }, [onAyahChange]);

  // Handle video selection
  const handleVideoSelect = useCallback((video) => {
    setSelectedVideo(video);
    const scholar = getScholarInfo(video.scholar);
    setSelectedScholar(scholar);
  }, []);

  // Toggle mini player - close the full modal but keep component alive as mini player
  const toggleMiniPlayer = useCallback(() => {
    setMiniPlayerMode(true);
    onClose?.(); // Tell parent to set isVisible=false so re-open works cleanly
  }, [onClose]);

  // Toggle fullscreen on the video iframe
  const toggleFullscreen = useCallback(() => {
    const iframe = playerRef.current;
    if (!iframe) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      (iframe.requestFullscreen || iframe.webkitRequestFullscreen || iframe.msRequestFullscreen)?.call(iframe);
    }
  }, []);

  // Open YouTube search for surahs without synced videos
  const openYouTubeSearch = useCallback(() => {
    const searchName = displaySurahName || 'Quran';
    const query = generateSearchQuery(searchName, 'tafseer');
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  }, [displaySurahName]);

  // Handle closing the full modal
  const handleClose = useCallback(() => {
    setForceShowFull(false);
    onClose?.();
  }, [onClose]);

  if (!isVisible && !miniPlayerMode && !forceShowFull) return null;

  // Show mini player when minimized
  if (miniPlayerMode && selectedVideo) {
    return (
      <MiniPlayer
        videoId={selectedVideo.id}
        title={selectedVideo.title}
        scholar={selectedScholar}
        currentVerse={currentAyah}
        onExpand={() => {
          setMiniPlayerMode(false);
          setForceShowFull(true); // Force show full modal even if isVisible is false
        }}
        onClose={() => {
          setMiniPlayerMode(false);
          setSelectedVideo(null);
          setForceShowFull(false);
          onClose?.(); // Also close the main modal
        }}
        isPlaying={true}
      />
    );
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible || forceShowFull ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: 'scaleIn 0.3s ease-out',
          boxShadow: '0 0 60px rgba(139, 92, 246, 0.3), 0 0 100px rgba(0,0,0,0.5)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            {!browseMode && (
              <button
                onClick={() => {
                  setBrowseMode(true);
                  setSelectedVideo(null);
                }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white/70 hover:text-white"
                title="Back to Browse"
              >
                <Icons.ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center relative overflow-hidden">
              <Icons.Video className="w-5 h-5 text-white relative z-10" />
              <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-b from-white/40 to-transparent rounded-full transform scale-x-150" />
            </div>
            <div>
              <h3 className="text-white font-semibold">
                {browseMode ? 'Scholar Video Sync' : displaySurahName || 'Scholar Videos'}
              </h3>
              <p className="text-white/50 text-xs">
                {browseMode ? 'Browse synced explanations' : 'Watch explanations synced with verses'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {selectedVideo && (
              <>
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white/70 hover:text-white"
                  title="Fullscreen"
                >
                  <Icons.Maximize className="w-4 h-4" />
                </button>
                <button
                  onClick={toggleMiniPlayer}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white/70 hover:text-white"
                  title="Mini Player"
                >
                  <Icons.Minimize className="w-4 h-4" />
                </button>
              </>
            )}
            <button
              onClick={handleClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white/70 hover:text-white"
            >
              <Icons.X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          {/* Browse Mode - Show available surahs */}
          {browseMode ? (
            <div className="flex-1 overflow-y-auto p-6">
              <div className="mb-6">
                <h4 className="text-white font-medium mb-2">Available Video Synced Surahs</h4>
                <p className="text-white/50 text-sm">Select a surah to watch scholar explanations synced with verses</p>
              </div>

              {availableSurahs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {availableSurahs.map((surah) => (
                    <button
                      key={surah.id}
                      onClick={() => handleSurahSelect(surah)}
                      className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-[1.02] text-left group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                          <span className="text-white font-bold text-lg">{surah.id}</span>
                          {/* Glass effect */}
                          <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-b from-white/40 to-transparent rounded-full transform scale-x-150" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-medium">{surah.name}</p>
                          <p className="text-white/60 text-sm" dir="rtl" style={{ fontFamily: "'Scheherazade New', serif" }}>{surah.arabic}</p>
                          <p className="text-purple-400 text-xs mt-1">{surah.videoCount} video{surah.videoCount > 1 ? 's' : ''} available</p>
                        </div>
                        <Icons.ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Icons.Video className="w-10 h-10 text-purple-400" />
                  </div>
                  <p className="text-white font-medium mb-2">No Synced Videos Yet</p>
                  <p className="text-white/50 text-sm">Check back later for more content</p>
                </div>
              )}

              {/* Search on YouTube */}
              <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10">
                <h5 className="text-white font-medium mb-2">Can't find what you're looking for?</h5>
                <p className="text-white/50 text-sm mb-4">Search YouTube for tafseer videos from popular scholars</p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.values(SCHOLARS).slice(0, 4).map((scholar) => (
                    <button
                      key={scholar.id}
                      onClick={() => {
                        const query = `${scholar.name} Quran tafseer`;
                        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
                      }}
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all text-left"
                    >
                      <p className="text-white text-sm font-medium">{scholar.name}</p>
                      <p className="text-white/40 text-[10px]">{scholar.language === 'ur' ? 'Urdu' : 'English'}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : hasVideos ? (
            <>
              {/* Video Player Section */}
              <div className="flex-1 flex flex-col">
                {selectedVideo ? (
                  <>
                    {/* Video */}
                    <div className="relative aspect-video bg-black">
                      <iframe
                        ref={playerRef}
                        src={getYouTubeEmbedUrl(selectedVideo.id)}
                        title={selectedVideo.title}
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>

                    {/* Video Info */}
                    <div className="p-4 border-t border-white/10">
                      <h4 className="text-white font-medium text-sm mb-1">{selectedVideo.title}</h4>
                      <div className="flex items-center gap-3">
                        {selectedScholar && (
                          <div className="flex items-center gap-2">
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                              style={{ background: 'linear-gradient(135deg, #8B5CF6, #6366F1)' }}
                            >
                              {selectedScholar.name.charAt(0)}
                            </div>
                            <span className="text-white/70 text-xs">{selectedScholar.name}</span>
                            {selectedScholar.verified && (
                              <Icons.CheckCircle className="w-3 h-3 text-blue-400" />
                            )}
                          </div>
                        )}
                        <span className="text-white/40 text-xs">{selectedVideo.duration}</span>
                      </div>

                      {/* Sync Status */}
                      <div className="mt-3 p-2 bg-purple-500/20 rounded-lg flex items-center gap-2">
                        <Icons.Link className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 text-xs">
                          Synced with verse {currentAyah} - Click timeline to jump
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <Icons.Video className="w-16 h-16 mx-auto text-white/30 mb-4" />
                      <p className="text-white/50 text-sm">Select a video to start</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar - Video List & Timeline */}
              <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-white/10 p-4 overflow-y-auto">
                {/* Verse Timeline */}
                {selectedVideo?.timestamps && (
                  <div className="mb-4">
                    <VerseTimeline
                      timestamps={selectedVideo.timestamps}
                      currentVerse={currentAyah}
                      totalVerses={Object.keys(selectedVideo.timestamps).length}
                      onVerseClick={handleVerseClick}
                    />
                  </div>
                )}

                {/* Available Videos */}
                <div className="mt-4">
                  <p className="text-white/50 text-[10px] uppercase tracking-wide mb-2">
                    Available Videos
                  </p>
                  <div className="space-y-2">
                    {syncedVideos.map((video) => {
                      const scholar = getScholarInfo(video.scholar);
                      return (
                        <button
                          key={video.id}
                          onClick={() => handleVideoSelect(video)}
                          className={`w-full p-3 rounded-xl transition-all text-left ${
                            selectedVideo?.id === video.id
                              ? 'bg-purple-500/30 ring-1 ring-purple-400/50'
                              : 'bg-white/10 hover:bg-white/20'
                          }`}
                        >
                          <p className="text-white text-xs font-medium line-clamp-2">{video.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-white/50 text-[10px]">{scholar?.name}</span>
                            <span className="text-white/30">|</span>
                            <span className="text-white/40 text-[10px]">{video.duration}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            </>
          ) : (
            /* No Synced Videos - Show Search */
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Icons.Video className="w-10 h-10 text-purple-400" />
              </div>
              <h4 className="text-white font-medium text-lg mb-2">No Synced Videos Yet</h4>
              <p className="text-white/50 text-sm text-center mb-6 max-w-sm">
                We don't have verse-synced videos for {surahName} yet.
                Search YouTube for tafseer and lectures.
              </p>

              {/* Quick Search Buttons */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => {
                    const query = `Surah ${surahName} recitation`;
                    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
                  }}
                  className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full text-white font-medium transition-all flex items-center gap-2"
                >
                  <Icons.Headphones className="w-5 h-5" />
                  Recitations
                </button>
                <button
                  onClick={() => {
                    const query = `Surah ${surahName} tafseer explanation`;
                    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
                  }}
                  className="px-5 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 rounded-full text-white font-medium transition-all flex items-center gap-2"
                >
                  <Icons.BookOpen className="w-5 h-5" />
                  Tafseer
                </button>
              </div>

              {/* Popular Scholars */}
              <div className="mt-8 w-full max-w-md">
                <p className="text-white/50 text-xs uppercase tracking-wide mb-3 text-center">
                  Popular Scholars
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.values(SCHOLARS).slice(0, 4).map((scholar) => (
                    <button
                      key={scholar.id}
                      onClick={() => {
                        const query = `${scholar.name} ${surahName} tafseer`;
                        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
                      }}
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all text-left"
                    >
                      <p className="text-white text-xs font-medium">{scholar.name}</p>
                      <p className="text-white/40 text-[10px]">{scholar.language === 'ur' ? 'Urdu' : 'English'}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
});

export default ScholarVideoSync;
