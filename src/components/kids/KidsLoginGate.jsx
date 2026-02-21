/**
 * KidsLoginGate.jsx
 * Login overlay for Kids Mode - requires sign in to access
 */

import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Icons } from '../common/Icons';

const KidsLoginGate = ({ onClose }) => {
  const { login } = useAuth();

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-gradient-to-br from-purple-900/95 via-indigo-900/95 to-blue-900/95 backdrop-blur-sm">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${10 + Math.random() * 15}px`,
            }}
          >
            *
          </div>
        ))}
      </div>

      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all"
        >
          <Icons.ArrowLeft className="w-5 h-5" />
          <span className="font-medium text-sm">Back</span>
        </button>
      )}

      {/* Login card */}
      <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md mx-4 border border-white/20 shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="text-6xl animate-bounce">🧒</div>
        </div>

        {/* Content */}
        <div className="text-center pt-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Welcome to Quran Kids!
          </h2>
          <p className="text-lg font-arabic text-yellow-300 mb-4">
            مرحباً بك في قرآن للأطفال
          </p>
          <p className="text-white/80 mb-6">
            Sign in to start your magical learning journey with fun train rides,
            garden walks, and desert adventures!
          </p>

          {/* Features preview */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-2xl mb-1">🚂</div>
              <p className="text-white/70 text-xs">Train Journey</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-2xl mb-1">🌸</div>
              <p className="text-white/70 text-xs">Garden Path</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-2xl mb-1">🐪</div>
              <p className="text-white/70 text-xs">Desert Caravan</p>
            </div>
          </div>

          {/* Google Sign In button */}
          <button
            onClick={login}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-2xl shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Sign in with Google</span>
          </button>

          <p className="text-white/50 text-xs mt-4">
            Safe and secure login for parents and kids
          </p>
        </div>

        {/* Decorative sparkles */}
        <div className="absolute -top-2 -right-2 text-2xl animate-pulse">✨</div>
        <div className="absolute -bottom-2 -left-2 text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>⭐</div>
      </div>
    </div>
  );
};

export default KidsLoginGate;
