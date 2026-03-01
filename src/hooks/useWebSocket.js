/**
 * useWebSocket.js
 * WebSocket hook with auto-reconnect for chat rooms.
 *
 * Auth flow:
 * 1. Client calls /api/auth/chat-token (same-origin, reads HttpOnly cookie)
 * 2. API validates session, returns the token
 * 3. Client connects to wss://chat.w3quran.com/ws/...?token=TOKEN
 * 4. Chat worker validates token against D1 sessions table
 */

import { useState, useEffect, useCallback, useRef } from 'react';

const CHAT_WS_URL = import.meta.env.VITE_CHAT_WS_URL ||
  (typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'ws://localhost:8787'
    : 'wss://chat.w3quran.com');
const RECONNECT_DELAYS = [1000, 2000, 4000, 8000, 15000];
const MAX_RECONNECT_ATTEMPTS = 10;

/**
 * Fetch chat token from same-origin API.
 * In local dev, reads cookie directly (not HttpOnly in dev mode).
 * In production, hits /api/auth/chat-token which reads the HttpOnly cookie server-side.
 */
async function fetchChatToken() {
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    const m = document.cookie.match(/w3quran_session=([^;]+)/);
    return m ? m[1] : null;
  }
  try {
    const res = await fetch('/api/auth/chat-token', { credentials: 'include' });
    if (!res.ok) return null;
    const data = await res.json();
    return data.token || null;
  } catch {
    return null;
  }
}

export function useWebSocket(roomType, roomId, enabled = true) {
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [onlineCount, setOnlineCount] = useState(0);
  const [typingUsers, setTypingUsers] = useState([]);
  const [error, setError] = useState(null);
  const [requiresPremium, setRequiresPremium] = useState(false);

  const wsRef = useRef(null);
  const reconnectAttempt = useRef(0);
  const reconnectTimer = useRef(null);
  const isUnmounted = useRef(false);
  const enabledRef = useRef(enabled);
  const chatTokenRef = useRef(null);

  // Keep enabledRef in sync so callbacks can check current value
  enabledRef.current = enabled;

  const handleMessage = useCallback((data) => {
    switch (data.type) {
      case 'history':
        setMessages(data.messages || []);
        break;
      case 'message':
        setMessages(prev => [...prev, data.message]);
        break;
      case 'presence':
        setOnlineUsers(data.users || []);
        setOnlineCount(data.count || 0);
        break;
      case 'typing':
        setTypingUsers(prev => {
          if (prev.some(u => u.userId === data.userId)) return prev;
          return [...prev, { userId: data.userId, userName: data.userName }];
        });
        break;
      case 'stop_typing':
        setTypingUsers(prev => prev.filter(u => u.userId !== data.userId));
        break;
      case 'reaction_update':
        setMessages(prev => prev.map(m =>
          m.id === data.messageId ? { ...m, reactions: data.reactions } : m
        ));
        break;
      case 'chat_cleared':
        setMessages([]);
        break;
      case 'error':
        setError(data.message);
        setRequiresPremium(!!data.requiresPremium);
        break;
      default:
        break;
    }
  }, []);

  const scheduleReconnect = useCallback(() => {
    // Don't reconnect if unmounted or disabled (logged out)
    if (isUnmounted.current || !enabledRef.current) return;
    if (reconnectAttempt.current >= MAX_RECONNECT_ATTEMPTS) return;

    const delay = RECONNECT_DELAYS[Math.min(reconnectAttempt.current, RECONNECT_DELAYS.length - 1)];
    reconnectAttempt.current += 1;

    reconnectTimer.current = setTimeout(() => {
      if (!isUnmounted.current && enabledRef.current) {
        connectWs();
      }
    }, delay);
  }, []); // stable — uses refs only

  const connectWs = useCallback(async () => {
    if (!roomType || !roomId || !enabledRef.current || isUnmounted.current) return;

    // Clean up existing connection
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }

    // Fetch token if we don't have one cached
    if (!chatTokenRef.current) {
      chatTokenRef.current = await fetchChatToken();
    }

    // Still no token — user isn't authenticated
    if (!chatTokenRef.current) {
      setError('Not authenticated');
      return; // Don't schedule reconnect — wait for enabled to change
    }

    // Check again after async gap
    if (!enabledRef.current || isUnmounted.current) return;

    const url = `${CHAT_WS_URL}/ws/${roomType}/${roomId}?token=${chatTokenRef.current}`;

    try {
      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.onopen = () => {
        if (isUnmounted.current) return;
        setConnected(true);
        setError(null);
        setRequiresPremium(false);
        reconnectAttempt.current = 0;
      };

      ws.onmessage = (event) => {
        if (isUnmounted.current) return;
        try {
          handleMessage(JSON.parse(event.data));
        } catch { /* ignore parse errors */ }
      };

      ws.onclose = (event) => {
        if (isUnmounted.current) return;
        setConnected(false);
        wsRef.current = null;

        // Auth failure — clear cached token so next connect refetches
        if (event.code === 1008 || event.code === 4401 || event.code === 4001) {
          chatTokenRef.current = null;
        }

        scheduleReconnect();
      };

      ws.onerror = () => {
        if (isUnmounted.current) return;
        setError('Connection failed');
        // onclose fires after onerror — reconnect handled there
      };
    } catch {
      setError('Failed to connect');
      scheduleReconnect();
    }
  }, [roomType, roomId, handleMessage, scheduleReconnect]);

  // Connect when enabled, disconnect + reset when disabled (logout)
  useEffect(() => {
    isUnmounted.current = false;

    if (enabled) {
      connectWs();
    } else {
      // Disabled (logged out) — full cleanup
      if (reconnectTimer.current) {
        clearTimeout(reconnectTimer.current);
        reconnectTimer.current = null;
      }
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
      chatTokenRef.current = null;
      reconnectAttempt.current = 0;
      setConnected(false);
      setError(null);
      setMessages([]);
      setOnlineUsers([]);
      setOnlineCount(0);
      setTypingUsers([]);
      setRequiresPremium(false);
    }

    return () => {
      isUnmounted.current = true;
      if (reconnectTimer.current) {
        clearTimeout(reconnectTimer.current);
        reconnectTimer.current = null;
      }
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [connectWs, enabled]);

  // Send a chat message
  const sendMessage = useCallback((text, replyTo = null) => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return false;
    wsRef.current.send(JSON.stringify({
      type: 'message',
      text,
      replyToId: replyTo?.id || null,
      replyToText: replyTo?.message?.substring(0, 100) || null,
      replyToUser: replyTo?.userName || null,
    }));
    return true;
  }, []);

  const sendTyping = useCallback(() => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
    wsRef.current.send(JSON.stringify({ type: 'typing' }));
  }, []);

  const sendStopTyping = useCallback(() => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
    wsRef.current.send(JSON.stringify({ type: 'stop_typing' }));
  }, []);

  const sendReaction = useCallback((messageId, emoji) => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
    wsRef.current.send(JSON.stringify({ type: 'reaction', messageId, emoji }));
  }, []);

  return {
    messages,
    setMessages,
    connected,
    onlineUsers,
    onlineCount,
    typingUsers,
    error,
    requiresPremium,
    sendMessage,
    sendTyping,
    sendStopTyping,
    sendReaction,
  };
}
