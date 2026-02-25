/**
 * YouTubePanel Component
 * Displays curated YouTube video lectures for a specific surah
 *
 * Features:
 * - Category filtering (Tafseer, Recitation, Lectures)
 * - Scholar verification badges
 * - Embedded video playback via YouTubePlayer
 * - Fallback to YouTube search when no curated videos exist
 *
 * Props:
 * @param {number} surahId - The ID of the current surah
 * @param {string} surahName - The name of the current surah
 * @param {Function} onClose - Callback to close the panel
 *
 * Follows Single Responsibility Principle - handles only video discovery and playback
 */

import { memo, useState, useMemo, useCallback } from 'react';
import { Icons } from '../../common/Icons';
import YouTubePlayer from '../../common/YouTubePlayer';
import { getVideosForSurah, generateSearchQuery, SCHOLARS } from '../../../data';

/**
 * Video category definitions with icons and labels
 * Used for filtering videos by type
 */
const CATEGORIES = [
  { id: 'tafseer', label: 'Tafseer', icon: 'BookOpen' },
  { id: 'recitation', label: 'Recitation', icon: 'Headphones' },
  { id: 'lecture', label: 'Lectures', icon: 'Video' },
];

/**
 * CategoryTabs Component
 * Renders the category filter tabs
 *
 * @param {string} activeCategory - Currently selected category ID
 * @param {Function} onCategoryChange - Callback when category changes
 */
const CategoryTabs = memo(function CategoryTabs({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex-shrink-0 flex gap-1 py-3 border-b border-white/10">
      {CATEGORIES.map((cat) => {
        const Icon = Icons[cat.icon] || Icons.Video;
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`flex-1 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
              isActive
                ? 'bg-red-500/40 text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/15'
            }`}
          >
            <Icon className="w-3.5 h-3.5" /> {cat.label}
          </button>
        );
      })}
    </div>
  );
});

/**
 * EmptyVideos Component
 * Displayed when no curated videos exist for the selected category
 *
 * @param {string} surahName - Name of the surah for search query
 * @param {string} category - Current category for search query
 */
const EmptyVideos = memo(function EmptyVideos({ surahName, category }) {
  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    generateSearchQuery(surahName, category)
  )}`;

  return (
    <div className="text-center py-8">
      <Icons.Video className="w-12 h-12 mx-auto text-white/20 mb-3" />
      <p className="text-white/50 text-sm mb-4">No curated videos yet</p>
      <a
        href={searchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/30 hover:bg-red-500/50 rounded-xl text-white text-sm transition-all"
      >
        <Icons.Search className="w-4 h-4" /> Search YouTube
      </a>
    </div>
  );
});

/**
 * VideoItem Component
 * Individual video card with thumbnail, title, and scholar info
 *
 * @param {Object} video - Video data object
 * @param {Function} onClick - Callback when video is clicked
 */
const VideoItem = memo(function VideoItem({ video, onClick }) {
  const scholar = SCHOLARS[video.scholar];

  const handleClick = useCallback(() => {
    onClick(video);
  }, [video, onClick]);

  return (
    <button
      onClick={handleClick}
      className="w-full p-3 bg-white/10 rounded-xl hover:bg-white/15 transition-all text-left group"
    >
      <div className="flex gap-3">
        {/* Thumbnail placeholder */}
        <div className="w-20 h-12 bg-red-500/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/50 transition-all">
          <Icons.Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </div>

        {/* Video info */}
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-medium line-clamp-2">{video.title}</p>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            {scholar && (
              <>
                <span className="text-white/60 text-xs">{scholar.name}</span>
                {scholar.verified && (
                  <Icons.CheckCircle className="w-3 h-3 text-blue-400" />
                )}
              </>
            )}
            {video.duration && (
              <>
                <span className="text-white/30">|</span>
                <span className="text-white/50 text-xs">{video.duration}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </button>
  );
});

/**
 * VideoList Component
 * Renders the list of videos or empty state
 *
 * @param {Array} videos - Array of video objects
 * @param {string} surahName - Surah name for empty state search
 * @param {string} category - Current category for empty state search
 * @param {Function} onVideoSelect - Callback when a video is selected
 */
const VideoList = memo(function VideoList({ videos, surahName, category, onVideoSelect }) {
  if (!videos || videos.length === 0) {
    return <EmptyVideos surahName={surahName} category={category} />;
  }

  return (
    <>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} onClick={onVideoSelect} />
      ))}
    </>
  );
});

/**
 * PanelHeader Component
 * Header with title and close button
 *
 * @param {string} surahName - Name of the current surah
 * @param {Function} onClose - Callback to close the panel
 */
const PanelHeader = memo(function PanelHeader({ surahName, onClose }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-between pb-3">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
          <Icons.Video className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-bold">Video Lectures</h3>
          <p className="text-white/60 text-xs">{surahName}</p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="p-2 rounded-full hover:bg-white/10 transition-all"
      >
        <Icons.X className="w-4 h-4 text-white/70" />
      </button>
    </div>
  );
});

/**
 * Main YouTubePanel Component
 */
const YouTubePanel = memo(function YouTubePanel({ surahId, surahName, onClose }) {
  const [category, setCategory] = useState('tafseer');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Get videos for current category
  const videos = getVideosForSurah(surahId, category);

  // Collect all videos for related videos in the player
  const allVideos = useMemo(() => {
    const surahVideos = getVideosForSurah(surahId);
    if (!surahVideos) return [];
    return [
      ...(surahVideos.tafseer || []),
      ...(surahVideos.recitation || []),
      ...(surahVideos.lecture || []),
    ];
  }, [surahId]);

  // Handle category change
  const handleCategoryChange = useCallback((newCategory) => {
    setCategory(newCategory);
  }, []);

  // Handle video selection
  const handleVideoSelect = useCallback((video) => {
    setSelectedVideo(video);
  }, []);

  // Handle closing the video player
  const handleClosePlayer = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  return (
    <>
      <div className="h-full flex flex-col">
        <PanelHeader surahName={surahName} onClose={onClose} />

        <CategoryTabs
          activeCategory={category}
          onCategoryChange={handleCategoryChange}
        />

        <div className="flex-1 overflow-y-auto py-3 space-y-2">
          <VideoList
            videos={videos}
            surahName={surahName}
            category={category}
            onVideoSelect={handleVideoSelect}
          />
        </div>
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <YouTubePlayer
          videoId={selectedVideo.id}
          title={selectedVideo.title}
          scholarId={selectedVideo.scholar}
          duration={selectedVideo.duration}
          onClose={handleClosePlayer}
          relatedVideos={allVideos}
          onVideoSelect={handleVideoSelect}
        />
      )}
    </>
  );
});

export default YouTubePanel;
