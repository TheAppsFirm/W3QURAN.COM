/**
 * YouTube Player Modal
 * Embedded YouTube player as popup inside the app
 * Features:
 * - Embedded iframe player
 * - Video info display
 * - Scholar information
 * - Related videos
 */

import { useState, useEffect, memo } from 'react';
import { Icons } from './Icons';
import { SCHOLARS, getScholarInfo, getYouTubeEmbedUrl, getYouTubeWatchUrl } from '../../data/youtubeVideos';

const YouTubePlayer = memo(function YouTubePlayer({
  videoId,
  title,
  scholarId,
  duration,
  onClose,
  relatedVideos = [],
  onVideoSelect,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showRelated, setShowRelated] = useState(false);

  const scholar = scholarId ? getScholarInfo(scholarId) : null;
  const embedUrl = getYouTubeEmbedUrl(videoId);
  const watchUrl = getYouTubeWatchUrl(videoId);

  useEffect(() => {
    // Reset loading state when video changes
    setIsLoading(true);
    setError(null);
  }, [videoId]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setError('Failed to load video');
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: 'scaleIn 0.3s ease-out',
          boxShadow: '0 0 60px rgba(139, 92, 246, 0.3), 0 0 100px rgba(0,0,0,0.5)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
              <Icons.Video className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm line-clamp-1">{title}</h3>
              {scholar && (
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-white/60 text-xs">{scholar.name}</span>
                  <span className="text-white/40">|</span>
                  <span className="text-white/50 text-xs">{scholar.channel}</span>
                  {scholar.verified && (
                    <Icons.CheckCircle className="w-3 h-3 text-blue-400" />
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {duration && (
              <span className="px-2 py-1 bg-white/10 rounded-full text-white/60 text-xs">
                {duration}
              </span>
            )}
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white/70 hover:text-white"
              title="Open in YouTube"
            >
              <Icons.ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white/70 hover:text-white"
            >
              <Icons.X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="flex flex-col items-center gap-3">
                <Icons.Loader className="w-10 h-10 animate-spin text-purple-400" />
                <span className="text-white/60 text-sm">Loading video...</span>
              </div>
            </div>
          )}

          {error ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="text-center">
                <Icons.AlertCircle className="w-12 h-12 mx-auto text-red-400 mb-3" />
                <p className="text-white/70">{error}</p>
                <a
                  href={watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-full text-red-400 text-sm transition-all"
                >
                  <Icons.ExternalLink className="w-4 h-4" />
                  Watch on YouTube
                </a>
              </div>
            </div>
          ) : (
            <iframe
              src={embedUrl}
              title={title}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          )}
        </div>

        {/* Scholar Info & Related Videos */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            {/* Scholar Info */}
            {scholar && (
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                  }}
                >
                  {scholar.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{scholar.name}</p>
                  <p className="text-white/50 text-xs">{scholar.specialty}</p>
                </div>
              </div>
            )}

            {/* Related Videos Toggle */}
            {relatedVideos.length > 0 && (
              <button
                onClick={() => setShowRelated(!showRelated)}
                className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white/70 text-xs transition-all"
              >
                <Icons.Video className="w-3 h-3" />
                {showRelated ? 'Hide' : 'More Videos'} ({relatedVideos.length})
                <Icons.ChevronDown
                  className={`w-3 h-3 transition-transform ${showRelated ? 'rotate-180' : ''}`}
                />
              </button>
            )}
          </div>

          {/* Related Videos List */}
          {showRelated && relatedVideos.length > 0 && (
            <div className="mt-4 space-y-2 max-h-48 overflow-y-auto" style={{ animation: 'slideDown 0.2s ease-out' }}>
              {relatedVideos.map((video) => {
                const videoScholar = getScholarInfo(video.scholar);
                return (
                  <button
                    key={video.id}
                    onClick={() => onVideoSelect && onVideoSelect(video)}
                    className={`w-full flex items-center gap-3 p-2 rounded-xl transition-all ${
                      video.id === videoId
                        ? 'bg-purple-500/30 ring-1 ring-purple-400/50'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="w-16 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      {video.id === videoId ? (
                        <Icons.Pause className="w-4 h-4 text-white" />
                      ) : (
                        <Icons.Play className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <p className="text-white text-xs font-medium line-clamp-1">{video.title}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        {videoScholar && (
                          <span className="text-white/50 text-[10px]">{videoScholar.name}</span>
                        )}
                        {video.duration && (
                          <>
                            <span className="text-white/30">|</span>
                            <span className="text-white/40 text-[10px]">{video.duration}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
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
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
});

export default YouTubePlayer;
