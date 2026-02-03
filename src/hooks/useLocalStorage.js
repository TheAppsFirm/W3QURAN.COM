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
      try {
        // Allow value to be a function (like useState)
        const valueToStore = value instanceof Function ? value(storedValue) : value;

        setStoredValue(valueToStore);

        if (isLocalStorageAvailable()) {
          localStorage.setItem(prefixedKey, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${prefixedKey}":`, error);
      }
    },
    [prefixedKey, storedValue]
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
      if (event.newValue !== null) {
        try {
          setStoredValue(JSON.parse(event.newValue));
        } catch {
          setStoredValue(event.newValue);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [prefixedKey]);

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
