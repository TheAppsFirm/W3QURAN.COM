/**
 * DMInbox — DM conversations list with pending requests section.
 * Fetches conversations from /api/dm/conversations and displays
 * pending DM requests at the top with Accept/Decline/Block actions.
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Icons } from '../common';
import { useAuth } from '../../contexts/AuthContext';

function timeAgo(dateStr) {
  if (!dateStr) return '';
  const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (seconds < 60) return 'now';
  const m = Math.floor(seconds / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  return `${Math.floor(h / 24)}d`;
}

async function apiFetch(url, options = {}) {
  const res = await fetch(url, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  return res.json();
}

function UserAvatar({ user, size = 'w-10 h-10', textSize = 'text-xs' }) {
  const initial = (user?.name || '?')[0].toUpperCase();
  if (user?.picture) {
    return (
      <img
        src={user.picture}
        alt=""
        className={`${size} rounded-full shrink-0`}
        referrerPolicy="no-referrer"
      />
    );
  }
  return (
    <div className={`${size} rounded-full shrink-0 bg-gradient-to-br from-purple-500 to-cyan-500
      flex items-center justify-center text-white ${textSize} font-bold`}>
      {initial}
    </div>
  );
}

function PendingRequestCard({ request, onRespond }) {
  const [responding, setResponding] = useState(null); // 'accept' | 'reject' | 'block'
  const otherUser = request.otherUser || {};

  const handleRespond = async (action) => {
    setResponding(action);
    try {
      await apiFetch('/api/dm/respond', {
        method: 'POST',
        body: JSON.stringify({
          connectionId: request.connectionId,
          action,
        }),
      });
      onRespond?.(request.connectionId, action);
    } catch (err) {
      console.error('[DMInbox] Respond error:', err);
    } finally {
      setResponding(null);
    }
  };

  return (
    <div className="flex items-center gap-3 px-4 py-3 hover:bg-white/[0.03] transition-colors">
      <UserAvatar user={otherUser} />

      <div className="flex-1 min-w-0">
        <p className="text-sm text-white font-medium truncate">{otherUser.name || 'Unknown'}</p>
        <p className="text-[11px] text-white/30">Wants to message you</p>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        {/* Accept */}
        <button
          onClick={() => handleRespond('accept')}
          disabled={!!responding}
          className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-400 text-xs font-medium
            hover:bg-cyan-500/30 disabled:opacity-40 transition-colors"
        >
          {responding === 'accept' ? (
            <Icons.Loader className="w-3 h-3 animate-spin" />
          ) : (
            'Accept'
          )}
        </button>

        {/* Decline */}
        <button
          onClick={() => handleRespond('reject')}
          disabled={!!responding}
          className="px-2.5 py-1 rounded-lg bg-white/5 text-white/40 text-xs
            hover:bg-white/10 disabled:opacity-40 transition-colors"
        >
          {responding === 'reject' ? (
            <Icons.Loader className="w-3 h-3 animate-spin" />
          ) : (
            'Decline'
          )}
        </button>

        {/* Block */}
        <button
          onClick={() => handleRespond('block')}
          disabled={!!responding}
          className="p-1 rounded-lg text-red-400/50 hover:bg-red-500/10 hover:text-red-400
            disabled:opacity-40 transition-colors"
          title="Block"
        >
          <Icons.Shield className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

function ConversationItem({ conversation, onClick }) {
  const otherUser = conversation.otherUser || {};
  const lastMsg = conversation.lastMessage;
  const unread = conversation.unreadCount > 0;

  return (
    <button
      onClick={() => onClick(conversation.connectionId, otherUser)}
      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/[0.03]
        transition-colors text-left"
    >
      {/* Avatar with online indicator */}
      <div className="relative shrink-0">
        <UserAvatar user={otherUser} />
        {conversation.isOnline && (
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500
            border-2 border-slate-900" />
        )}
      </div>

      {/* Name + message preview */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className={`text-sm truncate ${unread ? 'text-white font-semibold' : 'text-white/80 font-medium'}`}>
            {otherUser.name || 'Unknown'}
          </span>
          {lastMsg?.createdAt && (
            <span className="text-[10px] text-white/20 shrink-0">{timeAgo(lastMsg.createdAt)}</span>
          )}
        </div>
        {lastMsg?.message && (
          <p className={`text-xs truncate mt-0.5 ${unread ? 'text-white/50' : 'text-white/25'}`}>
            {lastMsg.isOwn ? 'You: ' : ''}{lastMsg.message}
          </p>
        )}
      </div>

      {/* Unread badge */}
      {unread && (
        <span className="w-5 h-5 rounded-full bg-cyan-500 text-white text-[10px] font-bold
          flex items-center justify-center shrink-0">
          {conversation.unreadCount > 9 ? '9+' : conversation.unreadCount}
        </span>
      )}
    </button>
  );
}

export default function DMInbox({ onOpenConversation, onClose }) {
  const { user, isAuthenticated, login } = useAuth();
  const [conversations, setConversations] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchConversations = useCallback(async () => {
    if (!isAuthenticated) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const data = await apiFetch('/api/dm/conversations');
      if (data.error) {
        setError(data.error);
      } else {
        setConversations(data.conversations || []);
        setPendingRequests(data.pendingRequests || []);
      }
    } catch (err) {
      console.error('[DMInbox] Fetch error:', err);
      setError('Failed to load messages');
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  const handleRequestRespond = (connectionId, action) => {
    // Remove from pending list
    setPendingRequests(prev => prev.filter(r => r.connectionId !== connectionId));
    // If accepted, refresh to get it as a conversation
    if (action === 'accept') {
      fetchConversations();
    }
  };

  const handleOpenConversation = (connectionId, otherUser) => {
    onOpenConversation?.(connectionId, otherUser);
  };

  // Not authenticated
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <h3 className="text-sm text-white/70 font-semibold">Messages</h3>
          {onClose && (
            <button onClick={onClose} className="text-white/30 hover:text-white/60 transition-colors">
              <Icons.X className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center py-8 px-4">
            <Icons.MessageCircle className="w-10 h-10 text-white/10 mx-auto mb-3" />
            <p className="text-sm text-white/30 mb-3">Sign in to message others</p>
            <button
              onClick={login}
              className="px-4 py-2 rounded-xl bg-purple-600 text-white text-sm hover:bg-purple-500 transition-colors"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <h3 className="text-sm text-white/70 font-semibold">Messages</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchConversations}
            className="text-white/20 hover:text-white/50 transition-colors"
            title="Refresh"
          >
            <Icons.RefreshCw className="w-3.5 h-3.5" />
          </button>
          {onClose && (
            <button onClick={onClose} className="text-white/30 hover:text-white/60 transition-colors">
              <Icons.X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Icons.Loader className="w-6 h-6 text-white/20 animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-8 px-4">
            <Icons.AlertCircle className="w-8 h-8 text-red-400/30 mx-auto mb-2" />
            <p className="text-sm text-red-400/60">{error}</p>
            <button
              onClick={fetchConversations}
              className="text-xs text-white/30 hover:text-white/50 mt-2 transition-colors"
            >
              Try again
            </button>
          </div>
        ) : (
          <>
            {/* Pending Requests */}
            {pendingRequests.length > 0 && (
              <div>
                <div className="px-4 pt-3 pb-1.5">
                  <p className="text-[11px] text-cyan-400/60 font-semibold uppercase tracking-wider">
                    Requests ({pendingRequests.length})
                  </p>
                </div>
                {pendingRequests.map(req => (
                  <PendingRequestCard
                    key={req.connectionId}
                    request={req}
                    onRespond={handleRequestRespond}
                  />
                ))}
                <div className="border-b border-white/5 mx-4 mt-1" />
              </div>
            )}

            {/* Active Conversations */}
            {conversations.length > 0 ? (
              <div>
                {pendingRequests.length > 0 && (
                  <div className="px-4 pt-3 pb-1.5">
                    <p className="text-[11px] text-white/20 font-semibold uppercase tracking-wider">
                      Conversations
                    </p>
                  </div>
                )}
                {conversations.map(conv => (
                  <ConversationItem
                    key={conv.connectionId}
                    conversation={conv}
                    onClick={handleOpenConversation}
                  />
                ))}
              </div>
            ) : pendingRequests.length === 0 ? (
              /* Empty state */
              <div className="flex items-center justify-center h-full min-h-[200px]">
                <div className="text-center py-8 px-4">
                  <Icons.MessageCircle className="w-10 h-10 text-white/[0.06] mx-auto mb-3" />
                  <p className="text-sm text-white/20">No messages yet</p>
                  <p className="text-xs text-white/10 mt-1">
                    Click on a user's name in discussions to start a conversation
                  </p>
                </div>
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
