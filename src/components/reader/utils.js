/**
 * Reader Utilities
 * Helper functions for the Quran reader
 *
 * Extracted from BubbleReaderOverlay for better maintainability
 */

import logger from '../../utils/logger';

/**
 * Check memory pressure for Safari optimization
 * Returns true if memory usage is above 80%
 */
export const checkMemoryPressure = () => {
  if (typeof performance !== 'undefined' && performance.memory) {
    const { usedJSHeapSize, jsHeapSizeLimit } = performance.memory;
    const usagePercent = (usedJSHeapSize / jsHeapSizeLimit) * 100;
    if (usagePercent > 80) {
      logger.memoryWarning('audio prefetch');
      return true;
    }
  }
  return false;
};

/**
 * Simple HTML sanitizer to prevent XSS attacks in tafseer content
 * @param {string} html - Raw HTML string
 * @returns {string} Sanitized HTML string
 */
export const sanitizeHTML = (html) => {
  if (!html || typeof html !== 'string') return '';

  // Create a temporary element to parse HTML
  const temp = document.createElement('div');
  temp.innerHTML = html;

  // Remove script tags and dangerous elements
  const scripts = temp.querySelectorAll(
    'script, style, iframe, object, embed, form'
  );
  scripts.forEach((el) => el.remove());

  // Remove dangerous attributes from all elements
  const allElements = temp.querySelectorAll('*');
  allElements.forEach((el) => {
    // Remove event handlers (onclick, onerror, etc.)
    Array.from(el.attributes).forEach((attr) => {
      if (
        attr.name.startsWith('on') ||
        (attr.name === 'href' && attr.value.startsWith('javascript:'))
      ) {
        el.removeAttribute(attr.name);
      }
    });
  });

  return temp.innerHTML;
};

/**
 * Calculate verse chunk size based on device capabilities
 * @param {boolean} isMobile - Whether device is mobile
 * @param {number} totalVerses - Total verses in surah
 * @returns {number} Optimal chunk size
 */
export const calculateChunkSize = (isMobile, totalVerses) => {
  if (isMobile) {
    return Math.min(15, Math.ceil(totalVerses / 5));
  }
  return Math.min(30, Math.ceil(totalVerses / 3));
};

/**
 * Format verse reference (e.g., "2:255" for Ayatul Kursi)
 * @param {number} surahId - Surah number
 * @param {number} ayahNumber - Ayah number
 * @returns {string} Formatted reference
 */
export const formatVerseRef = (surahId, ayahNumber) => {
  return `${surahId}:${ayahNumber}`;
};

/**
 * Parse verse reference string
 * @param {string} ref - Reference string (e.g., "2:255")
 * @returns {{ surahId: number, ayahNumber: number } | null}
 */
export const parseVerseRef = (ref) => {
  const match = ref.match(/^(\d+):(\d+)$/);
  if (!match) return null;
  return {
    surahId: parseInt(match[1], 10),
    ayahNumber: parseInt(match[2], 10),
  };
};
