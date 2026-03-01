/**
 * ChatWindow — Real-time live chat for surah rooms.
 */

import React, { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import { Icons } from '../common';
import { SURAHS } from '../../data';
import { useWebSocket } from '../../hooks/useWebSocket';
import { useAuth } from '../../contexts/AuthContext';
import { useIsMobile } from '../../hooks';
import { QUOTE_TRANSLATIONS, fetchVerseForQuote } from './quranQuoteUtils';
import RichPostBody from './RichPostBody';
import { useTranslation } from '../../contexts/LocaleContext';

const lazyRetry = (fn) => lazy(() => fn().catch(() => { if (!sessionStorage.getItem('chunk_reload')) { sessionStorage.setItem('chunk_reload', '1'); window.location.reload(); } return fn(); }));
const PremiumGate = lazyRetry(() => import('../kids/KidsPremiumGate'));

const REACTIONS = ['❤️', '👍', '📖', '🤲', 'ماشاءالله'];

function timeFormat(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } catch {
    return '';
  }
}

function ChatMessage({ msg, currentUserId, onReply, onReact, showReactions, isMobile }) {
  const { t } = useTranslation();
  const [showReactPicker, setShowReactPicker] = useState(false);
  const isOwn = msg.userId === currentUserId;

  return (
    <div className={`group flex gap-2 px-3 py-1.5 hover:bg-white/[0.03] transition-colors ${isOwn ? 'flex-row-reverse' : ''}`}>
      {/* Avatar */}
      {!isOwn && (
        msg.userPicture ? (
          <img src={msg.userPicture} alt="" className="w-6 h-6 rounded-full mt-0.5 shrink-0" referrerPolicy="no-referrer" />
        ) : (
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[9px] font-bold mt-0.5 shrink-0">
            {(msg.userName || '?')[0]}
          </div>
        )
      )}

      <div className={`${isMobile ? 'max-w-[85%]' : 'max-w-[75%]'} ${isOwn ? 'text-right' : ''}`}>
        {/* Name + time */}
        {!isOwn && (
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-xs text-white/50 font-medium">{msg.userName}</span>
            <span className="text-[10px] text-white/20">{timeFormat(msg.createdAt)}</span>
          </div>
        )}

        {/* Reply indicator */}
        {msg.replyToUser && (
          <div className="text-[10px] text-purple-400/50 mb-0.5 flex items-center gap-1">
            <span className="rotate-180">↩</span> {msg.replyToUser}: {msg.replyToText?.substring(0, 40)}...
          </div>
        )}

        {/* Message bubble */}
        <div className={`inline-block px-3 py-1.5 rounded-2xl text-sm leading-relaxed break-words
          ${isOwn
            ? 'bg-purple-600/40 text-white rounded-br-md'
            : 'bg-white/[0.08] text-white/80 rounded-bl-md'
          }`}
        >
          <RichPostBody text={msg.message} />
        </div>

        {isOwn && (
          <div className="text-[10px] text-white/15 mt-0.5">{timeFormat(msg.createdAt)}</div>
        )}

        {/* Reactions display */}
        {msg.reactions && Object.keys(msg.reactions).length > 0 && (
          <div className="flex gap-1 mt-0.5 flex-wrap">
            {Object.entries(msg.reactions).map(([emoji, users]) => (
              <button
                key={emoji}
                onClick={() => onReact(msg.id, emoji)}
                className={`text-xs px-1.5 py-0.5 rounded-full border transition-colors
                  ${users.includes(currentUserId)
                    ? 'bg-purple-500/20 border-purple-500/40'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
              >
                {emoji} {users.length}
              </button>
            ))}
          </div>
        )}

        {/* Actions — always visible on mobile, hover on desktop */}
        <div className={`${isMobile ? 'flex' : 'hidden group-hover:flex'} items-center gap-1 mt-0.5`}>
          <button
            onClick={() => onReply(msg)}
            className="text-[10px] text-white/20 hover:text-purple-400 active:text-purple-400 transition-colors p-1"
          >
            {t('discussions.reply', 'Reply')}
          </button>
          <button
            onClick={() => setShowReactPicker(!showReactPicker)}
            className="text-[10px] text-white/20 hover:text-yellow-400 active:text-yellow-400 transition-colors p-1"
          >
            {t('discussions.react', 'React')}
          </button>
        </div>

        {/* Reaction picker */}
        {showReactPicker && (
          <div className="flex gap-1 mt-1 p-1 rounded-lg bg-slate-800 border border-white/10">
            {REACTIONS.map(emoji => (
              <button
                key={emoji}
                onClick={() => { onReact(msg.id, emoji); setShowReactPicker(false); }}
                className="w-7 h-7 flex items-center justify-center rounded hover:bg-white/10 text-sm transition-colors"
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ChatWindow({ surahId, surahName }) {
  const isMobile = useIsMobile();
  const { user, isAuthenticated, isAdmin, login } = useAuth();
  const { t } = useTranslation();
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [clearing, setClearing] = useState(false);
  const {
    messages, setMessages, connected, onlineUsers, onlineCount, typingUsers, error, requiresPremium,
    sendMessage, sendTyping, sendStopTyping, sendReaction,
  } = useWebSocket('surah', String(surahId), isAuthenticated);

  const [inputText, setInputText] = useState('');
  const [showPremiumGate, setShowPremiumGate] = useState(false);
  const lastSentText = useRef(null);
  const [replyTo, setReplyTo] = useState(null);
  const [showQuote, setShowQuote] = useState(false);
  const [quoteSurah, setQuoteSurah] = useState(1);
  const [quoteAyah, setQuoteAyah] = useState(1);
  const [quoteTranslation, setQuoteTranslation] = useState(234);
  const [quoteComment, setQuoteComment] = useState('');
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [quotePreview, setQuotePreview] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const typingTimer = useRef(null);
  // Ref to avoid stale closure in insert handler
  const quoteRef = useRef({ surah: 1, ayah: 1, translation: 234, comment: '' });
  quoteRef.current = { surah: quoteSurah, ayah: quoteAyah, translation: quoteTranslation, comment: quoteComment };

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Restore input text if rate-limited
  useEffect(() => {
    if (requiresPremium && lastSentText.current) {
      setInputText(lastSentText.current);
      lastSentText.current = null;
    }
  }, [requiresPremium]);

  const handleSend = (e) => {
    e.preventDefault();
    const text = inputText.trim();
    if (!text) return;

    if (!isAuthenticated) { login(); return; }

    lastSentText.current = text;
    const success = sendMessage(text, replyTo);
    if (success) {
      setInputText('');
      setReplyTo(null);
      sendStopTyping();
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);

    // Throttled typing indicator
    if (typingTimer.current) clearTimeout(typingTimer.current);
    sendTyping();
    typingTimer.current = setTimeout(() => sendStopTyping(), 2000);
  };

  const handleReply = (msg) => {
    setReplyTo(msg);
    inputRef.current?.focus();
  };

  const handleClearChat = async () => {
    setClearing(true);
    try {
      const res = await fetch('/api/admin/discussions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ action: 'clear_chat', roomType: 'surah', roomId: String(surahId) }),
      });
      if (res.ok) {
        setMessages([]);
      }
    } catch { /* handled */ }
    setClearing(false);
    setShowClearConfirm(false);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <h3 className="text-sm text-white/70 font-medium">{t('discussions.liveChat', 'Live Chat')}</h3>
          {connected ? (
            <span className="flex items-center gap-1 text-[10px] text-green-400/70">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {onlineCount} {t('discussions.online', 'online')}
            </span>
          ) : (
            <span className="text-[10px] text-yellow-500/60">{t('discussions.connecting', 'Connecting...')}</span>
          )}
        </div>

        {/* Admin: Clear Chat */}
        {isAdmin && (
          <button
            onClick={() => setShowClearConfirm(true)}
            className="flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] text-red-400/50
              hover:text-red-300 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all"
            title="Clear all messages"
          >
            <Icons.Trash className="w-3 h-3" />
            {t('discussions.clearChat', 'Clear')}
          </button>
        )}
      </div>

      {/* Clear Chat Confirmation */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowClearConfirm(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl p-6" onClick={e => e.stopPropagation()}>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center mb-4">
                <Icons.Trash className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">{t('discussions.clearChatQuestion', 'Clear Chat?')}</h3>
              <p className="text-sm text-white/40 mb-6">
                {t('discussions.clearChatMessage', 'This will delete all messages in this chat room. This action cannot be undone.')}
              </p>
              <div className="flex gap-3 w-full">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-white/60
                    bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  {t('common.cancel', 'Cancel')}
                </button>
                <button
                  onClick={handleClearChat}
                  disabled={clearing}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-white
                    bg-red-600 hover:bg-red-500 border border-red-500/50 shadow-lg shadow-red-500/20
                    transition-all disabled:opacity-50"
                >
                  {clearing ? t('discussions.clearing', 'Clearing...') : t('discussions.clearAll', 'Clear All')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto py-2 space-y-0.5 min-h-0" style={isMobile ? {} : { maxHeight: '400px' }}>
        {!isAuthenticated ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center py-8">
              <Icons.MessageCircle className="w-10 h-10 text-white/10 mx-auto mb-3" />
              <p className="text-sm text-white/30 mb-3">{t('discussions.signInToChat', 'Sign in to join the chat')}</p>
              <button
                onClick={login}
                className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm hover:bg-purple-500 transition-colors"
              >
                {t('discussions.signInWithGoogle', 'Sign in with Google')}
              </button>
            </div>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center py-8">
              <p className="text-sm text-white/20">{t('discussions.noMessagesYet', 'No messages yet')}</p>
              <p className="text-xs text-white/10 mt-1">{t('discussions.startConversation', 'Start the conversation!')}</p>
            </div>
          </div>
        ) : (
          messages.map(msg => (
            <ChatMessage
              key={msg.id}
              msg={msg}
              currentUserId={user?.id}
              onReply={handleReply}
              onReact={sendReaction}
              isMobile={isMobile}
            />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Typing indicator */}
      {typingUsers.length > 0 && (
        <div className="px-4 py-1 text-xs text-white/30">
          {typingUsers.length === 1
            ? `${typingUsers[0].userName} ${t('discussions.isTyping', 'is typing...')}`
            : `${typingUsers.length} ${t('discussions.peopleTyping', 'people are typing...')}`
          }
        </div>
      )}

      {/* Error / Connection status */}
      {error && !connected && (
        <div className="px-4 py-2.5 bg-yellow-500/5 border-t border-yellow-500/10 text-center">
          <p className="text-xs text-yellow-400/60">
            {!isAuthenticated ? t('discussions.pleaseLogIn', 'Please log in to use chat') : t('discussions.chatUnavailable', 'Chat server unavailable')}
          </p>
          <p className="text-[10px] text-white/20 mt-0.5">
            {!isAuthenticated ? t('discussions.signInToStart', 'Sign in with Google to start chatting') : t('discussions.chatRequiresConnection', 'Live chat requires an active connection')}
          </p>
          {!isAuthenticated && (
            <button onClick={login} className="mt-2 px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs hover:bg-purple-500 transition-colors">
              {t('discussions.signIn', 'Sign in')}
            </button>
          )}
        </div>
      )}
      {error && connected && (
        <div className={`px-4 py-2 ${requiresPremium ? 'bg-amber-500/10' : 'bg-red-500/10'} text-xs flex items-center justify-between gap-2`}>
          <span className={requiresPremium ? 'text-amber-400/80' : 'text-red-400/70'}>{error}</span>
          {requiresPremium && (
            <button
              onClick={() => setShowPremiumGate(true)}
              className="shrink-0 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600
                text-white text-xs font-medium hover:from-amber-500 hover:to-orange-500
                shadow-lg shadow-amber-500/20 transition-all"
            >
              {t('premium.upgrade', 'Upgrade')}
            </button>
          )}
        </div>
      )}

      {/* Reply preview */}
      {replyTo && (
        <div className="px-4 py-1.5 bg-purple-500/5 border-t border-purple-500/20 flex items-center justify-between">
          <div className="text-xs text-purple-400/60 truncate">
            {t('discussions.replyingTo', 'Replying to')} <span className="font-medium">{replyTo.userName}</span>: {replyTo.message?.substring(0, 50)}
          </div>
          <button onClick={() => setReplyTo(null)} className="text-white/30 hover:text-white/50 ml-2">
            <Icons.X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Quran Quote Picker for Chat */}
      {showQuote && isAuthenticated && (
        <div className="px-3 py-2 border-t border-amber-500/15 bg-amber-500/[0.03] space-y-2">
          <div className="flex gap-2">
            <select
              value={quoteSurah}
              onChange={e => { setQuoteSurah(Number(e.target.value)); setQuotePreview(null); }}
              className="flex-1 px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none appearance-none"
            >
              {SURAHS.map(s => (
                <option key={s.id} value={s.id} className="bg-slate-800">{s.id}. {s.name}</option>
              ))}
            </select>
            <input
              type="number"
              min={1}
              max={286}
              value={quoteAyah}
              onChange={e => { setQuoteAyah(Number(e.target.value)); setQuotePreview(null); }}
              placeholder="Ayah"
              className="w-16 px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none"
            />
          </div>
          <select
            value={quoteTranslation}
            onChange={e => { setQuoteTranslation(Number(e.target.value)); setQuotePreview(null); }}
            className="w-full px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none appearance-none"
          >
            {[...new Set(QUOTE_TRANSLATIONS.map(tr => tr.lang))].map(lang => {
              const items = QUOTE_TRANSLATIONS.filter(tr => tr.lang === lang);
              const label = items[0]?.langNative ? `${items[0].langNative} — ${lang}` : lang;
              return (
                <optgroup key={lang} label={label} className="bg-slate-800">
                  {items.map(tr => (
                    <option key={tr.id} value={tr.id} className="bg-slate-800">
                      {tr.langNative ? `${tr.name} (${tr.nameEn})` : tr.nameEn}
                    </option>
                  ))}
                </optgroup>
              );
            })}
          </select>
          {/* Preview button */}
          <button
            type="button"
            onClick={async () => {
              setQuoteLoading(true);
              setQuotePreview(null);
              try {
                const result = await fetchVerseForQuote(quoteSurah, quoteAyah, quoteTranslation);
                setQuotePreview({ arabic: result.arabic, translation: result.translation });
              } catch { setQuotePreview({ arabic: '', translation: 'Failed to load' }); }
              setQuoteLoading(false);
            }}
            disabled={quoteLoading}
            className="w-full py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/50
              hover:bg-white/10 hover:text-white/70 transition-colors disabled:opacity-30"
          >
            {quoteLoading ? t('discussions.loading', 'Loading...') : t('discussions.previewVerse', 'Preview Verse')}
          </button>

          {/* Preview display */}
          {quotePreview && (
            <div className="rounded-lg bg-amber-500/[0.06] border-l-2 border-amber-500/40 p-2.5 space-y-1.5">
              <p className="text-right text-sm leading-loose text-white/85" dir="rtl"
                style={{ fontFamily: "'Scheherazade New', serif" }}>
                {quotePreview.arabic}
              </p>
              {quotePreview.translation && (
                <p className={`text-[11px] leading-relaxed text-white/45 ${
                  QUOTE_TRANSLATIONS.find(tr => tr.id === quoteTranslation)?.langCode === 'ur' ? 'text-right' : ''
                }`}
                  dir={QUOTE_TRANSLATIONS.find(tr => tr.id === quoteTranslation)?.langCode === 'ur' ? 'rtl' : 'ltr'}
                  style={QUOTE_TRANSLATIONS.find(tr => tr.id === quoteTranslation)?.langCode === 'ur' ? { fontFamily: "'Noto Nastaliq Urdu', serif" } : {}}
                >
                  {quotePreview.translation}
                </p>
              )}
            </div>
          )}

          <input
            type="text"
            value={quoteComment}
            onChange={e => setQuoteComment(e.target.value)}
            placeholder={t('discussions.yourComment', 'Your question or comment (optional)')}
            className="w-full px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs
              placeholder-white/20 focus:outline-none"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => { setShowQuote(false); setQuotePreview(null); }}
              className="flex-1 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/40
                hover:bg-white/10 transition-colors"
            >
              {t('common.cancel', 'Cancel')}
            </button>
            <button
              type="button"
              onClick={() => {
                const q = quoteRef.current;
                const tag = `[quran:${q.surah}:${q.ayah}:${q.translation}]`;
                const trimCmt = (q.comment || '').trim();
                const insert = trimCmt ? `${trimCmt} ${tag}` : tag;
                setInputText(prev => prev + (prev ? ' ' : '') + insert);
                setShowQuote(false);
                setQuoteComment('');
                inputRef.current?.focus();
              }}
              className="flex-1 py-1.5 rounded-lg bg-amber-600/30 text-amber-300 text-xs font-medium
                hover:bg-amber-600/50 transition-colors border border-amber-500/20"
            >
              {t('discussions.insertQuote', 'Insert Quote')}
            </button>
          </div>
        </div>
      )}

      {/* Input */}
      {isAuthenticated && (
        <form onSubmit={handleSend} className="p-3 border-t border-white/10 flex gap-2" style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder={t('discussions.typeMessage', 'Type a message...')}
            maxLength={500}
            disabled={!connected}
            className="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10
              text-white text-base sm:text-sm placeholder-white/25
              focus:outline-none focus:border-purple-500/40 transition-colors
              disabled:opacity-30"
          />
          <button
            type="button"
            onClick={() => setShowQuote(!showQuote)}
            disabled={!connected}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-amber-500/20
              text-amber-400/50 hover:text-amber-300 hover:bg-amber-500/10 transition-all
              disabled:opacity-30"
            title={t('discussions.quoteQuranShort', 'Quote Quran')}
          >
            <Icons.Quote className="w-4 h-4" />
          </button>
          <button
            type="submit"
            disabled={!inputText.trim() || !connected}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-purple-600
              hover:bg-purple-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <Icons.Send className="w-4 h-4 text-white" />
          </button>
        </form>
      )}

      {/* Premium upgrade popup */}
      {showPremiumGate && (
        <Suspense fallback={null}>
          <PremiumGate
            feature="daily_limit"
            onClose={() => setShowPremiumGate(false)}
            source="surah_chat"
            returnPath={`/discussions/surah/${surahId}`}
          />
        </Suspense>
      )}
    </div>
  );
}
