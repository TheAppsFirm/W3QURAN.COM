/**
 * Retry Utilities
 * Provides retry logic with exponential backoff for API calls
 */

/**
 * Default retry configuration
 */
const DEFAULT_RETRY_CONFIG = {
  maxRetries: 3,
  initialDelay: 1000,
  maxDelay: 10000,
  backoffFactor: 2,
  retryOnStatusCodes: [408, 429, 500, 502, 503, 504],
};

/**
 * Sleep for specified milliseconds
 */
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Calculate delay with exponential backoff and jitter
 */
const calculateDelay = (attempt, config) => {
  const delay = Math.min(
    config.initialDelay * Math.pow(config.backoffFactor, attempt),
    config.maxDelay
  );
  // Add jitter (±20%) to prevent thundering herd
  const jitter = delay * 0.2 * (Math.random() * 2 - 1);
  return Math.max(0, delay + jitter);
};

/**
 * Check if error is retryable
 */
const isRetryableError = (error, config) => {
  // Network errors
  if (error.name === 'TypeError' && error.message.includes('fetch')) {
    return true;
  }

  // Timeout errors
  if (error.name === 'AbortError') {
    return true;
  }

  // HTTP status codes
  if (error.status && config.retryOnStatusCodes.includes(error.status)) {
    return true;
  }

  return false;
};

/**
 * Fetch with retry and exponential backoff
 * @param {string} url - URL to fetch
 * @param {RequestInit} options - Fetch options
 * @param {object} retryConfig - Retry configuration
 * @returns {Promise<Response>} - Fetch response
 */
export async function fetchWithRetry(url, options = {}, retryConfig = {}) {
  const config = { ...DEFAULT_RETRY_CONFIG, ...retryConfig };
  let lastError;

  for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
    try {
      // Add timeout to fetch
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), options.timeout || 30000);

      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Check if response is ok
      if (!response.ok) {
        const error = new Error(`HTTP ${response.status}: ${response.statusText}`);
        error.status = response.status;
        error.response = response;

        if (isRetryableError(error, config) && attempt < config.maxRetries) {
          const delay = calculateDelay(attempt, config);
          await sleep(delay);
          continue;
        }

        throw error;
      }

      return response;
    } catch (error) {
      lastError = error;

      // Don't retry if max retries reached
      if (attempt >= config.maxRetries) {
        break;
      }

      // Check if error is retryable
      if (!isRetryableError(error, config)) {
        break;
      }

      // Wait before retrying
      const delay = calculateDelay(attempt, config);
      await sleep(delay);
    }
  }

  throw lastError;
}

/**
 * JSON fetch with retry
 * @param {string} url - URL to fetch
 * @param {object} options - Fetch options
 * @param {object} retryConfig - Retry configuration
 * @returns {Promise<any>} - Parsed JSON response
 */
export async function fetchJsonWithRetry(url, options = {}, retryConfig = {}) {
  const response = await fetchWithRetry(url, options, retryConfig);
  return response.json();
}

/**
 * Higher-order function that wraps any async function with retry logic
 * @param {Function} fn - Async function to wrap
 * @param {object} config - Retry configuration
 * @returns {Function} - Wrapped function with retry
 */
export function withRetry(fn, config = {}) {
  const mergedConfig = { ...DEFAULT_RETRY_CONFIG, ...config };

  return async (...args) => {
    let lastError;

    for (let attempt = 0; attempt <= mergedConfig.maxRetries; attempt++) {
      try {
        return await fn(...args);
      } catch (error) {
        lastError = error;

        if (attempt >= mergedConfig.maxRetries) {
          break;
        }

        if (!isRetryableError(error, mergedConfig)) {
          break;
        }

        const delay = calculateDelay(attempt, mergedConfig);
        await sleep(delay);
      }
    }

    throw lastError;
  };
}

/**
 * Circuit breaker state
 */
const circuitBreakers = new Map();

/**
 * Circuit breaker for preventing repeated failures
 * @param {string} key - Unique key for the circuit
 * @param {Function} fn - Async function to execute
 * @param {object} options - Circuit breaker options
 * @returns {Promise<any>} - Function result
 */
export async function withCircuitBreaker(key, fn, options = {}) {
  const {
    failureThreshold = 5,
    resetTimeout = 30000,
  } = options;

  let breaker = circuitBreakers.get(key);

  if (!breaker) {
    breaker = {
      failures: 0,
      lastFailure: 0,
      state: 'closed', // closed, open, half-open
    };
    circuitBreakers.set(key, breaker);
  }

  // Check if circuit is open
  if (breaker.state === 'open') {
    const timeSinceFailure = Date.now() - breaker.lastFailure;

    if (timeSinceFailure >= resetTimeout) {
      // Move to half-open state
      breaker.state = 'half-open';
    } else {
      throw new Error(`Circuit breaker open for ${key}`);
    }
  }

  try {
    const result = await fn();

    // Reset on success
    if (breaker.state === 'half-open') {
      breaker.state = 'closed';
    }
    breaker.failures = 0;

    return result;
  } catch (error) {
    breaker.failures++;
    breaker.lastFailure = Date.now();

    if (breaker.failures >= failureThreshold) {
      breaker.state = 'open';
    }

    throw error;
  }
}

/**
 * Reset circuit breaker for a key
 */
export function resetCircuitBreaker(key) {
  circuitBreakers.delete(key);
}

export default {
  fetchWithRetry,
  fetchJsonWithRetry,
  withRetry,
  withCircuitBreaker,
  resetCircuitBreaker,
};
