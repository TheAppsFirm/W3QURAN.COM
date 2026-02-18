/**
 * useMediaQuery - Reactive media query hooks for responsive design
 *
 * Provides hooks that respond to window resize and orientation changes
 * using the matchMedia API for optimal performance.
 */

import { useState, useEffect, useCallback } from 'react';

// Centralized breakpoint constants (matches Tailwind)
export const BREAKPOINTS = {
  mobile: 640,   // sm breakpoint
  tablet: 1024,  // lg breakpoint
};

/**
 * Core hook that listens to a media query and returns whether it matches
 * @param {string} query - Media query string (e.g., '(max-width: 640px)')
 * @returns {boolean} - Whether the query matches
 */
export function useMediaQuery(query) {
  // SSR safety - default to false on server
  const getMatches = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  }, [query]);

  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);

    // Set initial value
    setMatches(mediaQuery.matches);

    // Handler for media query changes
    const handler = (event) => {
      setMatches(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } else {
      // Legacy browsers (Safari < 14)
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }
  }, [query]);

  return matches;
}

/**
 * Hook to detect mobile devices (< 640px)
 * @returns {boolean} - true if viewport width < 640px
 */
export function useIsMobile() {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.mobile - 1}px)`);
}

/**
 * Hook to detect tablet devices (640px - 1023px)
 * @returns {boolean} - true if viewport width is between 640px and 1023px
 */
export function useIsTablet() {
  const isNotMobile = useMediaQuery(`(min-width: ${BREAKPOINTS.mobile}px)`);
  const isNotDesktop = useMediaQuery(`(max-width: ${BREAKPOINTS.tablet - 1}px)`);
  return isNotMobile && isNotDesktop;
}

/**
 * Hook to detect desktop devices (>= 1024px)
 * @returns {boolean} - true if viewport width >= 1024px
 */
export function useIsDesktop() {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.tablet}px)`);
}

/**
 * Hook that returns the current breakpoint name
 * @returns {'mobile' | 'tablet' | 'desktop'} - Current breakpoint
 */
export function useBreakpoint() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  if (isMobile) return 'mobile';
  if (isTablet) return 'tablet';
  return 'desktop';
}

/**
 * Hook to detect landscape orientation
 * @returns {boolean} - true if device is in landscape orientation
 */
export function useIsLandscape() {
  return useMediaQuery('(orientation: landscape)');
}

/**
 * Hook to detect portrait orientation
 * @returns {boolean} - true if device is in portrait orientation
 */
export function useIsPortrait() {
  return useMediaQuery('(orientation: portrait)');
}

/**
 * Hook to detect if user prefers reduced motion
 * @returns {boolean} - true if user prefers reduced motion
 */
export function usePrefersReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}

/**
 * Non-hook function to check if currently mobile (for initial state)
 * Use this for getting initial values outside of React lifecycle
 * @returns {boolean}
 */
export function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < BREAKPOINTS.mobile;
}

/**
 * Non-hook function to check if currently tablet
 * @returns {boolean}
 */
export function isTabletDevice() {
  if (typeof window === 'undefined') return false;
  const width = window.innerWidth;
  return width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet;
}

/**
 * Non-hook function to check if currently desktop
 * @returns {boolean}
 */
export function isDesktopDevice() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= BREAKPOINTS.tablet;
}
