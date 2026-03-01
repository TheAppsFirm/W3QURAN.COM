/**
 * DiscussionBoard — Main container for a single surah's discussions.
 * Shows post list with sorting/filtering, create post button.
 */

import React, { useEffect, useState, useCallback, lazy, Suspense } from 'react';
import { Icons } from '../common';
import { SURAHS } from '../../data';
import { useDiscussionPosts, useVote, useTags } from '../../hooks/useDiscussion';
import { useAuth } from '../../contexts/AuthContext';
import { useIsMobile } from '../../hooks';
import { useTranslation } from '../../contexts/LocaleContext';
import PostCard from './PostCard';
import PostDetail from './PostDetail';
import CreatePostModal from './CreatePostModal';
import ChatWindow from './ChatWindow';

const lazyRetry = (fn) => lazy(() => fn().catch(() => { if (!sessionStorage.getItem('chunk_reload')) { sessionStorage.setItem('chunk_reload', '1'); window.location.reload(); } return fn(); }));
const PremiumGate = lazyRetry(() => import('../kids/KidsPremiumGate'));

const SORT_KEYS = [
  { id: 'hot', key: 'sortHot' },
  { id: 'new', key: 'sortNew' },
  { id: 'top_week', key: 'sortWeek' },
  { id: 'top_month', key: 'sortMonth' },
  { id: 'top_all', key: 'sortAllTime' },
];

const TYPE_KEYS = [
  { id: 'all', key: 'typeAll' },
  { id: 'discussion', key: 'typeDiscussion' },
  { id: 'reflection', key: 'typeReflection' },
  { id: 'tafseer', key: 'typeTafseer' },
  { id: 'question', key: 'typeQuestion' },
];

export default function DiscussionBoard({ surahId, surahName, onOpenAyah, onViewProfile, initialPostId }) {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { user, isAuthenticated, isAdmin, login } = useAuth();
  const { posts, loading, error, pagination, sort, fetchPosts, createPost, setPosts } = useDiscussionPosts(surahId);
  const { vote, voting } = useVote();
  const [activeTab, setActiveTab] = useState('discussions');
  const [selectedPostId, setSelectedPostId] = useState(initialPostId || null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [typeFilter, setTypeFilter] = useState('all');
  const [activeTag, setActiveTag] = useState('');
  const [showPremiumGate, setShowPremiumGate] = useState(false);
  const { tags, fetchTags } = useTags();
  const surahData = SURAHS.find(s => s.id === surahId);

  useEffect(() => {
    if (surahId) {
      fetchPosts({ page: 1 });
      fetchTags();
    }
  }, [surahId]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSortChange = (newSort) => {
    fetchPosts({ sort: newSort, page: 1, type: typeFilter, tag: activeTag || undefined });
  };

  const handleTypeFilter = (type) => {
    setTypeFilter(type);
    fetchPosts({ type, page: 1, tag: activeTag || undefined });
  };

  const handleVote = async (postId, voteValue) => {
    if (!isAuthenticated) return login();
    try {
      const result = await vote('post', postId, voteValue);
      setPosts(prev => prev.map(p =>
        p.id === postId ? { ...p, score: result.score, userVote: result.userVote } : p
      ));
    } catch { /* handled */ }
  };

  const handleCreatePost = async (data) => {
    await createPost(data);
    fetchPosts({ page: 1 });
  };

  const handleDeletePost = (postId) => {
    setPosts(prev => prev.filter(p => p.id !== postId));
  };

  const handleTagFilter = (slug) => {
    setActiveTag(slug);
    fetchPosts({ page: 1, tag: slug, type: typeFilter });
  };

  const handleAdminAction = async (action, postId, value) => {
    try {
      const res = await fetch('/api/admin/discussions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ action, postId, pin: action === 'pin_post' ? value : undefined, lock: action === 'lock_post' ? value : undefined }),
      });
      if (res.ok) {
        // Optimistically update local state
        setPosts(prev => prev.map(p => {
          if (p.id !== postId) return p;
          if (action === 'pin_post') return { ...p, isPinned: value };
          if (action === 'lock_post') return { ...p, isLocked: value };
          return p;
        }));
      }
    } catch { /* handled */ }
  };

  const loadMore = () => {
    if (pagination.page < pagination.totalPages) {
      fetchPosts({ page: pagination.page + 1, type: typeFilter, tag: activeTag || undefined });
    }
  };

  // Show post detail view
  if (selectedPostId) {
    return (
      <PostDetail
        postId={selectedPostId}
        onBack={() => { setSelectedPostId(null); fetchPosts({ page: 1, type: typeFilter, tag: activeTag || undefined }); }}
        onOpenAyah={onOpenAyah}
        onViewProfile={onViewProfile}
      />
    );
  }

  return (
    <div className="space-y-4">
      {/* Tab toggle: Discussions / Live Chat */}
      <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10">
        <button
          onClick={() => setActiveTab('discussions')}
          className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
            ${activeTab === 'discussions'
              ? 'bg-purple-600/30 text-purple-300 border border-purple-500/30'
              : 'text-white/40 hover:text-white/60'
            }`}
        >
          <Icons.BookOpen className="w-4 h-4" />
          {t('discussions.discussionsTab', 'Discussions')}
        </button>
        <button
          onClick={() => setActiveTab('chat')}
          className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
            ${activeTab === 'chat'
              ? 'bg-cyan-600/30 text-cyan-300 border border-cyan-500/30'
              : 'text-white/40 hover:text-white/60'
            }`}
        >
          <Icons.MessageCircle className="w-4 h-4" />
          {t('discussions.liveChat', 'Live Chat')}
        </button>
      </div>

      {/* Surah Info Banner */}
      {surahData && (
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-arabic text-white/70">{surahData.arabic}</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-white font-medium">{surahData.name} <span className="text-white/30">&middot; {surahData.meaning}</span></div>
              <div className="flex items-center gap-2 mt-1">
                <span className={`px-1.5 py-0.5 rounded text-[9px] font-medium ${surahData.type === 'Makki' ? 'bg-amber-500/10 text-amber-400/60' : 'bg-emerald-500/10 text-emerald-400/60'}`}>{surahData.type}</span>
                <span className="text-[10px] text-white/25">{surahData.ayahs} ayahs</span>
              </div>
            </div>
          </div>
          {surahData.topics?.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {surahData.topics.map(t => (
                <span key={t} className="px-1.5 py-0.5 rounded text-[9px] text-white/30 bg-white/[0.04] border border-white/[0.06]">{t}</span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Live Chat Tab */}
      {activeTab === 'chat' && (
        <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden" style={{ height: isMobile ? 'calc(100dvh - 200px)' : '500px' }}>
          <ChatWindow surahId={surahId} surahName={surahName} />
        </div>
      )}

      {/* Discussions Tab */}
      {activeTab === 'discussions' && (
        <>
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-white font-semibold text-lg flex items-center gap-2">
              <Icons.MessageCircle className="w-5 h-5 text-purple-400" />
              {t('discussions.discussionsTab', 'Discussions')}
              {pagination.total > 0 && (
                <span className="text-xs text-white/30 font-normal">({pagination.total})</span>
              )}
            </h2>

            <button
              onClick={() => isAuthenticated ? setShowCreateModal(true) : login()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-colors"
            >
              <Icons.Plus className="w-4 h-4" />
              {t('discussions.newPost', 'New Post')}
            </button>
          </div>

          {/* Sort tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1" style={{ WebkitOverflowScrolling: 'touch' }}>
            <span className="text-xs text-white/30 mr-1 shrink-0">{t('discussions.sort', 'Sort')}:</span>
            {SORT_KEYS.map(s => (
              <button
                key={s.id}
                onClick={() => handleSortChange(s.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors
                  ${sort === s.id
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    : 'text-white/40 hover:text-white/60 hover:bg-white/5'
                  }`}
              >
                {t(`discussions.${s.key}`, s.key)}
              </button>
            ))}
          </div>

          {/* Type filters */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1" style={{ WebkitOverflowScrolling: 'touch' }}>
            <span className="text-xs text-white/30 mr-1 shrink-0">{t('discussions.type', 'Type')}:</span>
            {TYPE_KEYS.map(tf => (
              <button
                key={tf.id}
                onClick={() => handleTypeFilter(tf.id)}
                className={`px-2.5 py-1 rounded-lg text-xs whitespace-nowrap transition-colors
                  ${typeFilter === tf.id
                    ? 'bg-white/10 text-white/70'
                    : 'text-white/30 hover:text-white/50'
                  }`}
              >
                {t(`discussions.${tf.key}`, tf.key)}
              </button>
            ))}
          </div>

          {/* Tag filters */}
          {tags.length > 0 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <Icons.Hash className="w-3.5 h-3.5 text-white/20 shrink-0" />
              <button onClick={() => { setActiveTag(''); fetchPosts({ page: 1, type: typeFilter }); }}
                className={`px-2 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-colors shrink-0 ${!activeTag ? 'bg-white/10 text-white/70' : 'text-white/30 hover:text-white/50'}`}>All</button>
              {tags.map(tag => (
                <button key={tag.id} onClick={() => handleTagFilter(tag.slug)}
                  className={`px-2 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-colors shrink-0 ${activeTag === tag.slug ? 'text-white/80' : 'text-white/30 hover:text-white/50'}`}
                  style={activeTag === tag.slug ? { backgroundColor: tag.color + '20', color: tag.color } : {}}>
                  {tag.icon} {tag.name}
                </button>
              ))}
            </div>
          )}

          {/* Post list */}
          {loading && posts.length === 0 ? (
            <div className="flex items-center justify-center py-12">
              <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-sm text-red-400/60">{error}</p>
              <button onClick={() => fetchPosts({ page: 1 })} className="mt-2 text-xs text-purple-400 hover:text-purple-300">
                {t('discussions.tryAgain', 'Try again')}
              </button>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12 rounded-xl border border-white/5 bg-white/[0.02]">
              <Icons.MessageCircle className="w-10 h-10 text-white/10 mx-auto mb-3" />
              <p className="text-sm text-white/30">{t('discussions.noDiscussionsYet', 'No discussions yet')}</p>
              <p className="text-xs text-white/20 mt-1">{t('discussions.beFirstToStart', 'Be the first to start a conversation')}</p>
            </div>
          ) : (
            <div className="space-y-3">
              {posts.map(post => (
                <PostCard
                  key={post.id}
                  post={post}
                  currentUserId={user?.id}
                  onVote={handleVote}
                  onOpenPost={setSelectedPostId}
                  onOpenAyah={onOpenAyah}
                  onDelete={handleDeletePost}
                  voting={voting}
                  isAdmin={isAdmin}
                  onAdminAction={handleAdminAction}
                  onViewProfile={onViewProfile}
                />
              ))}

              {/* Load more */}
              {pagination.page < pagination.totalPages && (
                <button
                  onClick={loadMore}
                  disabled={loading}
                  className="w-full py-3 rounded-xl border border-white/10 text-sm text-white/40
                    hover:bg-white/5 hover:text-white/60 transition-colors disabled:opacity-30"
                >
                  {loading ? t('discussions.loading', 'Loading...') : t('discussions.loadMore', 'Load more')}
                </button>
              )}
            </div>
          )}
        </>
      )}

      {/* Create post modal */}
      {showCreateModal && (
        <CreatePostModal
          surahId={surahId}
          surahName={surahName}
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleCreatePost}
          onShowPremium={() => { setShowCreateModal(false); setShowPremiumGate(true); }}
        />
      )}

      {/* Premium upgrade gate */}
      {showPremiumGate && (
        <Suspense fallback={null}>
          <PremiumGate
            onClose={() => setShowPremiumGate(false)}
            feature="daily_limit"
            source="discussions"
            returnPath={`/discussions/surah/${surahId}`}
          />
        </Suspense>
      )}
    </div>
  );
}
