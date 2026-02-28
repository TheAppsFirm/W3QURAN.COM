/**
 * DMConversation — Single DM chat thread using WebSocket.
 * Shows message bubbles with own messages right-aligned,
 * typing indicator, auto-scroll, and a text input.
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Icons } from '../common';
import { useWebSocket } from '../../hooks/useWebSocket';
import { useAuth } from '../../contexts/AuthContext';
import { useIsMobile } from '../../hooks';

function timeFormat(dateStr) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } catch {
    return '';
  }
}

function MessageBubble({ msg, currentUserId, otherUser, isMobile }) {
  const isOwn = msg.userId === currentUserId;

  return (
    <div className={`flex gap-2 px-3 py-1.5 ${isOwn ? 'flex-row-reverse' : ''}`}>
      {/* Avatar for other user */}
      {!isOwn && (
        otherUser?.picture ? (
          <img
            src={otherUser.picture}
            alt=""
            className="w-6 h-6 rounded-full mt-0.5 shrink-0"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500
            flex items-center justify-center text-white text-[9px] font-bold mt-0.5 shrink-0">
            {(otherUser?.name || '?')[0]}
          </div>
        )
      )}

      <div className={`${isMobile ? 'max-w-[85%]' : 'max-w-[75%]'} ${isOwn ? 'text-right' : ''}`}>
        {/* Message bubble */}
        <div
          className={`inline-block px-3 py-1.5 rounded-2xl text-sm leading-relaxed
            ${isOwn
              ? 'bg-purple-600/40 text-white rounded-br-md'
              : 'bg-white/[0.08] text-white/80 rounded-bl-md'
            }`}
        >
          {msg.message}
        </div>

        {/* Timestamp */}
        <div className={`text-[10px] text-white/15 mt-0.5 ${isOwn ? 'text-right' : 'text-left'}`}>
          {timeFormat(msg.createdAt)}
        </div>
      </div>
    </div>
  );
}

function TypingIndicator({ userName }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5">
      <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-2xl bg-white/5 rounded-bl-md">
        <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
      <span className="text-[10px] text-white/20">{userName} is typing</span>
    </div>
  );
}

export default function DMConversation({ connectionId, otherUser, onBack }) {
  const isMobile = useIsMobile();
  const { user } = useAuth();
  const {
    messages, connected, typingUsers, error,
    sendMessage, sendTyping, sendStopTyping,
  } = useWebSocket('dm', connectionId, !!connectionId);

  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const typingTimer = useRef(null);
  const messagesContainerRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typingUsers]);

  // Focus input on mount
  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 100);
    return () => clearTimeout(timer);
  }, []);

  // Cleanup typing timer on unmount
  useEffect(() => {
    return () => {
      if (typingTimer.current) clearTimeout(typingTimer.current);
    };
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    const text = inputText.trim();
    if (!text) return;

    const success = sendMessage(text);
    if (success) {
      setInputText('');
      sendStopTyping();
      if (typingTimer.current) clearTimeout(typingTimer.current);
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);

    // Throttled typing indicator
    if (typingTimer.current) clearTimeout(typingTimer.current);
    sendTyping();
    typingTimer.current = setTimeout(() => sendStopTyping(), 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSend(e);
    }
  };

  const otherUserInitial = (otherUser?.name || '?')[0].toUpperCase();
  const isOtherTyping = typingUsers.some(u => u.userId !== user?.id);

  return (
    <div className={`flex flex-col ${isMobile ? 'h-[100dvh]' : 'h-full'}`}>
      {/* Header */}
      <div className="flex items-center gap-3 px-3 py-2.5 border-b border-white/10">
        <button
          onClick={onBack}
          className="p-1 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/5 transition-colors"
        >
          <Icons.ArrowLeft className="w-4 h-4" />
        </button>

        {/* User avatar */}
        <div className="relative shrink-0">
          {otherUser?.picture ? (
            <img
              src={otherUser.picture}
              alt=""
              className="w-8 h-8 rounded-full"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500
              flex items-center justify-center text-white text-xs font-bold">
              {otherUserInitial}
            </div>
          )}
          {/* Online indicator */}
          {connected && (
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500
              border-2 border-slate-900" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-sm text-white font-medium truncate">{otherUser?.name || 'Unknown'}</h4>
          <span className="text-[10px] text-white/25">
            {connected ? 'Online' : 'Connecting...'}
          </span>
        </div>
      </div>

      {/* Messages area */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto py-2 space-y-0.5 min-h-0"
      >
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center py-8 px-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20
                flex items-center justify-center mx-auto mb-3">
                <Icons.MessageCircle className="w-6 h-6 text-white/15" />
              </div>
              <p className="text-sm text-white/20">No messages yet</p>
              <p className="text-xs text-white/10 mt-1">
                Say hello to {otherUser?.name?.split(' ')[0] || 'them'}!
              </p>
            </div>
          </div>
        ) : (
          messages.map(msg => (
            <MessageBubble
              key={msg.id}
              msg={msg}
              currentUserId={user?.id}
              otherUser={otherUser}
              isMobile={isMobile}
            />
          ))
        )}

        {/* Typing indicator */}
        {isOtherTyping && (
          <TypingIndicator userName={otherUser?.name?.split(' ')[0] || 'User'} />
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Error */}
      {error && (
        <div className="px-4 py-1.5 bg-red-500/10 text-xs text-red-400/70">
          {error}
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSend} className="p-3 border-t border-white/10 flex gap-2" style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
        <input
          ref={inputRef}
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          maxLength={500}
          disabled={!connected}
          className="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10
            text-white text-sm placeholder-white/25
            focus:outline-none focus:border-purple-500/40 transition-colors
            disabled:opacity-30"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || !connected}
          className="w-9 h-9 flex items-center justify-center rounded-xl bg-cyan-600
            hover:bg-cyan-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <Icons.Send className="w-4 h-4 text-white" />
        </button>
      </form>
    </div>
  );
}
