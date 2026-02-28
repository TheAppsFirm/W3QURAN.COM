/**
 * useWebSocket.js
 * WebSocket hook with auto-reconnect for chat rooms.
 */

import { useState, useEffect, useCallback, useRef } from 'react';

const CHAT_WS_URL = import.meta.env.VITE_CHAT_WS_URL ||
  (typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? `ws://localhost:8787`
    : 'wss://chat.w3quran.com');
const RECONNECT_DELAYS = [1000, 2000, 4000, 8000, 15000]; // exponential backoff
const MAX_RECONNECT_ATTEMPTS = 10;

export function useWebSocket(roomType, roomId, enabled = true) {
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [onlineCount, setOnlineCount] = useState(0);
  const [typingUsers, setTypingUsers] = useState([]);
  const [error, setError] = useState(null);

  const wsRef = useRef(null);
  const reconnectAttempt = useRef(0);
  const reconnectTimer = useRef(null);
  const isUnmounted = useRef(false);

  const connect = useCallback(() => {
    if (!roomType || !roomId || !enabled || isUnmounted.current) return;

    // Clean up existing connection
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }

    let url = `${CHAT_WS_URL}/ws/${roomType}/${roomId}`;
    // For local dev: pass session token as query param since cross-port cookies don't work
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost' && CHAT_WS_URL.includes('localhost')) {
      const sessionMatch = document.cookie.match(/w3quran_session=([^;]+)/);
      if (sessionMatch) url += `?token=${sessionMatch[1]}`;
    }

    try {
      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.onopen = () => {
        if (isUnmounted.current) return;
        setConnected(true);
        setError(null);
        reconnectAttempt.current = 0;
      };

      ws.onmessage = (event) => {
        if (isUnmounted.current) return;
        try {
          const data = JSON.parse(event.data);
          handleMessage(data);
        } catch { /* ignore parse errors */ }
      };

      ws.onclose = () => {
        if (isUnmounted.current) return;
        setConnected(false);
        wsRef.current = null;
        scheduleReconnect();
      };

      ws.onerror = () => {
        if (isUnmounted.current) return;
        setError('Connection failed');
        // onclose will fire after onerror
      };
    } catch (e) {
      setError('Failed to connect');
      scheduleReconnect();
    }
  }, [roomType, roomId, enabled]);

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
        break;

      default:
        break;
    }
  }, []);

  const scheduleReconnect = useCallback(() => {
    if (isUnmounted.current || reconnectAttempt.current >= MAX_RECONNECT_ATTEMPTS) return;

    const delay = RECONNECT_DELAYS[Math.min(reconnectAttempt.current, RECONNECT_DELAYS.length - 1)];
    reconnectAttempt.current += 1;

    reconnectTimer.current = setTimeout(() => {
      if (!isUnmounted.current) connect();
    }, delay);
  }, [connect]);

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

  // Send typing indicator
  const sendTyping = useCallback(() => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
    wsRef.current.send(JSON.stringify({ type: 'typing' }));
  }, []);

  // Send stop typing
  const sendStopTyping = useCallback(() => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
    wsRef.current.send(JSON.stringify({ type: 'stop_typing' }));
  }, []);

  // Send reaction
  const sendReaction = useCallback((messageId, emoji) => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
    wsRef.current.send(JSON.stringify({ type: 'reaction', messageId, emoji }));
  }, []);

  // Connect/disconnect on mount/unmount
  useEffect(() => {
    isUnmounted.current = false;
    if (enabled) connect();

    return () => {
      isUnmounted.current = true;
      if (reconnectTimer.current) clearTimeout(reconnectTimer.current);
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [connect, enabled]);

  return {
    messages,
    setMessages,
    connected,
    onlineUsers,
    onlineCount,
    typingUsers,
    error,
    sendMessage,
    sendTyping,
    sendStopTyping,
    sendReaction,
  };
}
