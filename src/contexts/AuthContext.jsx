import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blocked, setBlocked] = useState(false);
  const [blockedReason, setBlockedReason] = useState(null);

  // Check session on mount
  const checkAuth = useCallback(async () => {
    try {
      const response = await fetch('/api/auth/me', { credentials: 'include' });
      const data = await response.json();

      if (response.status === 403 && data.blocked) {
        // User is blocked
        setUser(null);
        setBlocked(true);
        setBlockedReason(data.blockedReason || 'Your account has been suspended.');
      } else if (response.ok && data.user) {
        setUser(data.user);
        setBlocked(false);
        setBlockedReason(null);
      } else {
        setUser(null);
        setBlocked(false);
        setBlockedReason(null);
      }
    } catch (err) {
      console.error('[Auth] Check auth error:', err);
      setUser(null);
      setBlocked(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();

    // Check for auth success/error in URL
    const params = new URLSearchParams(window.location.search);
    if (params.get('auth_success')) {
      // Remove query param and refresh auth
      window.history.replaceState({}, '', window.location.pathname);
      checkAuth();
    }
    if (params.get('auth_error')) {
      setError(params.get('auth_error'));
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [checkAuth]);

  const login = useCallback(() => {
    window.location.href = '/api/auth/google';
  }, []);

  const logout = useCallback(async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
      setUser(null);
    } catch (err) {
      console.error('[Auth] Logout error:', err);
    }
  }, []);

  const refreshUser = useCallback(async () => {
    setLoading(true);
    await checkAuth();
  }, [checkAuth]);

  // Clear blocked state (to allow user to dismiss the screen)
  const clearBlocked = useCallback(() => {
    setBlocked(false);
    setBlockedReason(null);
  }, []);

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    refreshUser,
    isAuthenticated: !!user,
    isPremium: user?.subscription?.isPremium || false,
    isAdmin: user?.isAdmin || false,
    blocked,
    blockedReason,
    clearBlocked,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
