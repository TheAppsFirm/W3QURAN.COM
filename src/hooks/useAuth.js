/**
 * useAuth Hook
 * Handles user authentication state and admin verification
 */

import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useAuth() {
  const [user, setUser] = useLocalStorage('w3quran_user', null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      if (user?.email) {
        try {
          // Verify admin status from backend
          const response = await fetch('/api/admin/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email })
          });

          if (response.ok) {
            const data = await response.json();
            setIsAdmin(data.isAdmin || false);
          }
        } catch (error) {
          console.error('Auth check failed:', error);
          setIsAdmin(false);
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [user?.email]);

  const login = useCallback((userData) => {
    setUser(userData);
  }, [setUser]);

  const logout = useCallback(() => {
    setUser(null);
    setIsAdmin(false);
  }, [setUser]);

  const updateUser = useCallback((updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  }, [setUser]);

  return {
    user,
    isAuthenticated: !!user,
    isAdmin,
    isLoading,
    login,
    logout,
    updateUser
  };
}

export default useAuth;
