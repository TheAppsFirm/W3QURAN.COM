/**
 * UserPopover — Floating profile card shown when clicking a user's avatar/name.
 * Provides quick actions: Message, Block, Report.
 */

import React, { useState, useRef, useEffect } from 'react';
import { Icons } from '../common';
import { useAuth } from '../../contexts/AuthContext';

export default function UserPopover({ user, onClose, position, onSendDMRequest, onBlock, onReport, onViewProfile }) {
  const { user: currentUser } = useAuth();
  const isSelf = currentUser?.id && currentUser.id === user?.id;
  const [blockStep, setBlockStep] = useState(0); // 0 = idle, 1 = confirming
  const cardRef = useRef(null);

  // Click-outside to close
  useEffect(() => {
    const handleClick = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        onClose();
      }
    };
    // Delay listener to avoid catching the triggering click
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClick);
    }, 10);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [onClose]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Reset block confirm step after 3s
  useEffect(() => {
    if (blockStep === 1) {
      const timer = setTimeout(() => setBlockStep(0), 3000);
      return () => clearTimeout(timer);
    }
  }, [blockStep]);

  const handleBlock = () => {
    if (blockStep === 0) {
      setBlockStep(1);
    } else {
      onBlock?.(user);
      onClose();
    }
  };

  const handleMessage = () => {
    onSendDMRequest?.(user);
    onClose();
  };

  const handleReport = () => {
    onReport?.(user);
    onClose();
  };

  const initial = (user?.name || '?')[0].toUpperCase();

  return (
    <div className="fixed inset-0 z-[9999]" style={{ pointerEvents: 'auto' }} role="presentation">
      <div
        ref={cardRef}
        role="dialog"
        aria-label={`${user?.name || 'User'} profile card`}
        className="absolute max-w-[240px] w-[240px] rounded-2xl bg-slate-900/95 backdrop-blur-xl
          border border-white/10 shadow-2xl shadow-black/50 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        style={{
          top: position?.top ?? 100,
          left: position?.left ?? 100,
        }}
      >
        {/* User info */}
        <div className="px-4 pt-4 pb-3 text-center">
          {user?.picture ? (
            <img
              src={user.picture}
              alt=""
              className="w-14 h-14 rounded-full mx-auto mb-2 border-2 border-white/10"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-14 h-14 rounded-full mx-auto mb-2 bg-gradient-to-br from-purple-500 to-cyan-500
              flex items-center justify-center text-white text-lg font-bold border-2 border-white/10">
              {initial}
            </div>
          )}
          <h4 className="text-sm font-semibold text-white truncate">{user?.name || 'Unknown'}</h4>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5" />

        {/* Actions */}
        <div className="p-2 space-y-1">
          {/* View Profile */}
          {onViewProfile && (
            <button
              onClick={() => { onViewProfile(user?.id); onClose(); }}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm
                text-purple-400 hover:bg-purple-500/10 transition-colors"
            >
              <Icons.User className="w-4 h-4" />
              <span>View Profile</span>
            </button>
          )}

          {/* Message — hidden for own profile */}
          {!isSelf && (
            <button
              onClick={handleMessage}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm
                text-cyan-400 hover:bg-cyan-500/10 transition-colors"
            >
              <Icons.MessageCircle className="w-4 h-4" />
              <span>Message</span>
            </button>
          )}

          {/* Block — hidden for own profile */}
          {!isSelf && (
            <button
              onClick={handleBlock}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-colors
                ${blockStep === 1
                  ? 'bg-red-500/20 text-red-400'
                  : 'text-red-400/70 hover:bg-red-500/10'
                }`}
            >
              <Icons.Shield className="w-4 h-4" />
              <span>{blockStep === 1 ? 'Confirm Block?' : 'Block'}</span>
            </button>
          )}

          {/* Report — hidden for own profile */}
          {!isSelf && (
            <button
              onClick={handleReport}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm
                text-white/40 hover:bg-white/5 hover:text-white/60 transition-colors"
            >
              <Icons.AlertTriangle className="w-4 h-4" />
              <span>Report</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
