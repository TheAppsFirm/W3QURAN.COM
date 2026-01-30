/**
 * Quran API Service - Entry Point
 *
 * Follows Dependency Inversion Principle (DIP):
 * High-level modules depend on abstractions, not concrete implementations.
 *
 * This module automatically selects the appropriate API implementation:
 * - QuranJsApi: When OAuth credentials are available (premium features)
 * - FreeQuranApi: Fallback using Al-Quran Cloud (no auth required)
 */

import { FreeQuranApi } from './FreeQuranApi';
import { createQuranJsApi, hasQuranJsCredentials } from './QuranJsApi';

/**
 * Get the appropriate Quran API implementation
 * @returns {Object} - API implementation
 */
const getQuranApi = () => {
  // Check if QuranJS credentials are available
  if (hasQuranJsCredentials()) {
    try {
      return createQuranJsApi({
        clientId: import.meta.env.VITE_QURAN_CLIENT_ID,
        clientSecret: import.meta.env.VITE_QURAN_CLIENT_SECRET,
      });
    } catch (error) {
      console.warn('Failed to initialize QuranJS API, falling back to free API:', error);
    }
  }

  // Default to free API
  return FreeQuranApi;
};

// Export the selected API implementation
export const QuranApi = getQuranApi();

// Re-export individual implementations for direct use if needed
export { FreeQuranApi } from './FreeQuranApi';
export { createQuranJsApi, hasQuranJsCredentials } from './QuranJsApi';

// Export types/interfaces
export * from './QuranApiInterface';

export default QuranApi;
