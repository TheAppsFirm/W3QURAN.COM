/**
 * AnnouncementBanner Component
 * Displays admin announcements at the top of the main site
 * Includes a notification bell for viewing all announcements
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Icons } from './Icons';

const DISMISSED_KEY = 'w3quran_dismissed_announcements';
// Dismissed announcements stay dismissed permanently (until announcement is deleted by admin)

// Helper to render text with clickable links
const renderMessageWithLinks = (text, isRead) => {
  if (!text) return null;

  // URL regex pattern
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlPattern);

  return parts.map((part, index) => {
    if (urlPattern.test(part)) {
      // Reset regex lastIndex
      urlPattern.lastIndex = 0;
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className={`underline hover:no-underline ${isRead ? 'text-purple-400' : 'text-purple-600 hover:text-purple-800'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

// Notification Bell Component - Shows all announcements in a centered modal
export const NotificationBell = ({ userTier = 'free' }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState({});

  // Load dismissed state
  useEffect(() => {
    try {
      const stored = localStorage.getItem(DISMISSED_KEY);
      if (stored) {
        setDismissed(JSON.parse(stored));
      }
    } catch (e) {
      console.error('[Notifications] Failed to load dismissed state:', e);
    }
  }, []);

  // Fetch announcements
  const fetchAnnouncements = useCallback(async () => {
    try {
      const response = await fetch(`/api/announcements?target=${userTier}`);
      if (response.ok) {
        const data = await response.json();
        setAnnouncements(data.announcements || []);
      }
    } catch (e) {
      console.error('[Notifications] Failed to fetch:', e);
    }
  }, [userTier]);

  useEffect(() => {
    fetchAnnouncements();
    const interval = setInterval(fetchAnnouncements, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchAnnouncements]);

  // Mark as read (dismiss)
  const handleDismiss = (id) => {
    const newDismissed = { ...dismissed, [id]: Date.now() };
    setDismissed(newDismissed);
    localStorage.setItem(DISMISSED_KEY, JSON.stringify(newDismissed));
  };

  const unreadCount = announcements.filter(a => !dismissed[a.id]).length;

  const typeColors = {
    info: 'from-blue-500 to-cyan-500',
    warning: 'from-amber-500 to-orange-500',
    success: 'from-emerald-500 to-teal-500',
    promo: 'from-purple-500 to-pink-500',
  };

  return (
    <>
      {/* Bell Button - Styled like BubbleButton with label */}
      <div className="relative flex flex-col items-center gap-0.5 transition-all duration-300">
        <button
          onClick={() => {
            fetchAnnouncements(); // Fetch fresh data when opening
            setIsOpen(true);
          }}
          className="relative flex items-center justify-center w-10 h-10 sm:w-[54px] sm:h-[54px] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all cursor-pointer overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
            boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4), inset 0 -8px 15px rgba(168, 85, 247, 0.3), inset 0 8px 15px rgba(255,255,255,0.2)',
          }}
          title="Notifications"
        >
          {/* Glass highlight */}
          <div className="absolute pointer-events-none" style={{
            width: '70%', height: '35%', top: '8%', left: '15%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)',
            borderRadius: '50%', transform: 'scaleY(0.5)',
          }} />
          {/* Small bright spot */}
          <div className="absolute pointer-events-none" style={{
            width: '18%', height: '12%', top: '15%', left: '22%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 70%)',
            borderRadius: '50%',
          }} />
          <Icons.Bell className="w-5 h-5 sm:w-7 sm:h-7 text-white drop-shadow-lg relative z-10" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-lg border-2 border-white z-20">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </button>
        <span className="text-[9px] font-semibold text-gray-500 hidden sm:block">Alerts</span>
      </div>

      {/* Centered Modal - Clean & Easy to Read */}
      {isOpen && createPortal(
        <div
          className="fixed inset-0 flex items-center justify-center p-3 sm:p-4"
          style={{ zIndex: 9999999 }}
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop - Solid dark */}
          <div className="absolute inset-0 bg-black/80" />

          {/* Modal - Clean solid white design */}
          <div
            className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'bubblePopIn 0.3s ease-out' }}
          >
            {/* Header - Solid purple */}
            <div className="bg-purple-600 px-5 py-4">
              {/* Close button */}
              <button
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center text-white transition-all"
              >
                <Icons.X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center">
                  <Icons.Bell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Notifications</h2>
                  {unreadCount > 0 ? (
                    <p className="text-purple-100 text-sm">{unreadCount} new update{unreadCount > 1 ? 's' : ''}</p>
                  ) : (
                    <p className="text-purple-200 text-sm">All caught up!</p>
                  )}
                </div>
              </div>
            </div>

            {/* Notifications List - White background */}
            <div className="overflow-y-auto max-h-[60vh] bg-white">
              {announcements.length === 0 ? (
                <div className="p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4">
                    <Icons.Bell className="w-8 h-8 text-purple-300" />
                  </div>
                  <p className="text-gray-800 font-semibold text-lg">No notifications</p>
                  <p className="text-gray-500 text-sm mt-1">You're all caught up!</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {announcements.map((announcement, index) => {
                    const isRead = !!dismissed[announcement.id];
                    const typeConfig = {
                      info: { label: 'Info', bg: 'bg-blue-500', dot: 'bg-blue-500' },
                      warning: { label: 'Important', bg: 'bg-amber-500', dot: 'bg-amber-500' },
                      success: { label: 'Success', bg: 'bg-emerald-500', dot: 'bg-emerald-500' },
                      promo: { label: 'New', bg: 'bg-purple-500', dot: 'bg-purple-500' },
                    };
                    const typeStyle = typeConfig[announcement.type] || typeConfig.info;

                    return (
                      <div
                        key={announcement.id}
                        className={`p-4 transition-all ${isRead ? 'bg-gray-50' : 'bg-white hover:bg-purple-50/30'}`}
                      >
                        {/* Top row: Badge + Time + Mark read */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {!isRead && (
                              <span className={`w-2 h-2 rounded-full ${typeStyle.dot}`} />
                            )}
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold text-white ${typeStyle.bg}`}>
                              {typeStyle.label}
                            </span>
                            <span className="text-gray-400 text-xs">
                              {new Date(announcement.created_at).toLocaleDateString()}
                            </span>
                          </div>
                          {!isRead && (
                            <button
                              onClick={() => handleDismiss(announcement.id)}
                              className="text-gray-400 hover:text-purple-600 p-1 rounded hover:bg-purple-100 transition-colors"
                              title="Mark as read"
                            >
                              <Icons.Check className="w-4 h-4" />
                            </button>
                          )}
                        </div>

                        {/* Title */}
                        <h4 className={`font-bold text-base ${isRead ? 'text-gray-400' : 'text-gray-900'}`}>
                          {announcement.title}
                        </h4>

                        {/* Message - with clickable links */}
                        <p className={`text-sm mt-1 leading-relaxed ${isRead ? 'text-gray-400' : 'text-gray-600'}`}>
                          {renderMessageWithLinks(announcement.message, isRead)}
                        </p>

                        {/* Link button - opens in new tab */}
                        {announcement.link_url && announcement.link_text && (
                          <a
                            href={announcement.link_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 mt-3 px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition-colors"
                          >
                            {announcement.link_text}
                            <Icons.ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-xs">
                w3Quran Notifications
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

// Main Banner Component
const AnnouncementBanner = ({ userTier = 'free' }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [dismissed, setDismissed] = useState({});

  // Load dismissed state from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(DISMISSED_KEY);
      if (stored) {
        setDismissed(JSON.parse(stored));
      }
    } catch (e) {
      console.error('[Announcements] Failed to load dismissed state:', e);
    }
  }, []);

  // Fetch active announcements
  const fetchAnnouncements = useCallback(async () => {
    try {
      const response = await fetch(`/api/announcements?target=${userTier}`);
      if (response.ok) {
        const data = await response.json();
        setAnnouncements(data.announcements || []);
      }
    } catch (e) {
      console.error('[Announcements] Failed to fetch:', e);
    } finally {
      setLoading(false);
    }
  }, [userTier]);

  useEffect(() => {
    fetchAnnouncements();
    const interval = setInterval(fetchAnnouncements, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchAnnouncements]);

  // Dismiss announcement
  const handleDismiss = (id) => {
    const newDismissed = { ...dismissed, [id]: Date.now() };
    setDismissed(newDismissed);
    localStorage.setItem(DISMISSED_KEY, JSON.stringify(newDismissed));
  };

  // Filter out dismissed announcements
  const activeAnnouncements = announcements.filter(a => !dismissed[a.id]);

  // Auto-cycle through announcements
  useEffect(() => {
    if (activeAnnouncements.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex(i => (i + 1) % activeAnnouncements.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeAnnouncements.length]);

  if (loading || activeAnnouncements.length === 0) {
    return null;
  }

  const current = activeAnnouncements[currentIndex] || activeAnnouncements[0];
  if (!current) return null;

  const typeStyles = {
    info: { bg: 'from-blue-600 to-cyan-600', icon: Icons.Bell },
    warning: { bg: 'from-amber-500 to-orange-600', icon: Icons.AlertCircle },
    success: { bg: 'from-emerald-500 to-teal-600', icon: Icons.Check },
    promo: { bg: 'from-purple-600 to-pink-600', icon: Icons.Star },
  };

  const style = typeStyles[current.type] || typeStyles.info;
  const IconComponent = style.icon;

  return (
    <div className={`relative bg-gradient-to-r ${style.bg} text-white overflow-hidden`}>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          animation: 'shimmerWave 3s ease-in-out infinite',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              {current.title && (
                <span className="font-bold text-sm sm:text-base">{current.title}</span>
              )}
              <span className="text-white/90 text-xs sm:text-sm truncate">{current.message}</span>
            </div>
          </div>

          {current.link_url && current.link_text && (
            <a
              href={current.link_url}
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-xs sm:text-sm font-medium transition-colors flex-shrink-0"
            >
              {current.link_text}
              <Icons.ChevronRight className="w-3 h-3" />
            </a>
          )}

          {activeAnnouncements.length > 1 && (
            <div className="hidden sm:flex items-center gap-1 flex-shrink-0">
              {activeAnnouncements.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === currentIndex ? 'bg-white w-3' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}

          {current.dismissible === 1 && (
            <button
              onClick={() => handleDismiss(current.id)}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0"
              title="Dismiss"
            >
              <Icons.X className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          )}
        </div>

        {current.link_url && current.link_text && (
          <a
            href={current.link_url}
            className="sm:hidden mt-2 flex items-center justify-center gap-1 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-xs font-medium transition-colors"
          >
            {current.link_text}
            <Icons.ChevronRight className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};

export default AnnouncementBanner;
