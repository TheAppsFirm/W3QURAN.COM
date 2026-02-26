/**
 * useLocalStorage Hook
 * Single Responsibility: Persist state to localStorage
 *
 * Features:
 * - Type-safe storage
 * - Automatic serialization/deserialization
 * - SSR-safe (checks for window)
 * - Error handling
 */

import { useState, useEffect, useCallback } from 'react';

const STORAGE_PREFIX = 'quran_app_';

/**
 * Check if localStorage is available
 */
const isLocalStorageAvailable = () => {
  try {
    const testKey = '__test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
};

/**
 * Custom hook for localStorage state management
 *
 * @param {string} key - Storage key (will be prefixed with app name)
 * @param {any} initialValue - Initial value if nothing in storage
 * @returns {[any, Function, Function]} - [value, setValue, removeValue]
 *
 * @example
 * const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
 */
export const useLocalStorage = (key, initialValue) => {
  const prefixedKey = `${STORAGE_PREFIX}${key}`;

  // Get initial value from storage or use provided initial value
  const getStoredValue = useCallback(() => {
    if (!isLocalStorageAvailable()) {
      return initialValue;
    }

    try {
      const item = localStorage.getItem(prefixedKey);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${prefixedKey}":`, error);
      return initialValue;
    }
  }, [prefixedKey, initialValue]);

  const [storedValue, setStoredValue] = useState(getStoredValue);

  // Update localStorage when value changes
  const setValue = useCallback(
    (value) => {
      // Use functional update to always get latest prev value (avoids stale closures)
      setStoredValue(prev => {
        const valueToStore = value instanceof Function ? value(prev) : value;
        if (isLocalStorageAvailable()) {
          try {
            localStorage.setItem(prefixedKey, JSON.stringify(valueToStore));
          } catch (error) {
            // QuotaExceededError or other storage errors - still update React state
            console.warn(`Error writing to localStorage key "${prefixedKey}" (QuotaExceeded?):`, error);
          }
        }
        return valueToStore;
      });
    },
    [prefixedKey]
  );

  // Remove from localStorage
  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      if (isLocalStorageAvailable()) {
        localStorage.removeItem(prefixedKey);
      }
    } catch (error) {
      console.warn(`Error removing localStorage key "${prefixedKey}":`, error);
    }
  }, [prefixedKey, initialValue]);

  // Sync with other tabs/windows
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key !== prefixedKey) return;
      if (event.newValue === null) {
        setStoredValue(initialValue);
        return;
      }
      try {
        setStoredValue(JSON.parse(event.newValue));
      } catch {
        // If JSON.parse fails, the value is corrupted or a raw string;
        // fall back to initialValue to avoid setting unexpected types
        console.warn(`Failed to parse storage event for key "${prefixedKey}", using initial value`);
        setStoredValue(initialValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [prefixedKey, initialValue]);

  return [storedValue, setValue, removeValue];
};

/**
 * Hook to clear all app data from localStorage
 * @returns {Function} - Clear function
 */
export const useClearStorage = () => {
  return useCallback(() => {
    if (!isLocalStorageAvailable()) return;

    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(STORAGE_PREFIX)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key));
  }, []);
};

export default useLocalStorage;
