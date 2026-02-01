/**
 * HTML Sanitization Utilities
 * Prevents XSS attacks while allowing safe highlighting
 */

// Allowed tags for highlighting search results
const ALLOWED_TAGS = ['mark', 'b', 'strong', 'em', 'i', 'span'];

// Regex to match HTML tags
const TAG_REGEX = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/gi;

/**
 * Escape HTML entities to prevent XSS
 * @param {string} text - Raw text to escape
 * @returns {string} - Escaped text safe for display
 */
export const escapeHtml = (text) => {
  if (!text || typeof text !== 'string') return '';

  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;',
  };

  return text.replace(/[&<>"'`=/]/g, (char) => map[char]);
};

/**
 * Sanitize HTML allowing only specific safe tags (for search highlighting)
 * @param {string} html - HTML string to sanitize
 * @returns {string} - Sanitized HTML with only allowed tags
 */
export const sanitizeHighlight = (html) => {
  if (!html || typeof html !== 'string') return '';

  // First, escape everything
  let result = escapeHtml(html);

  // Then, restore only allowed tags
  // Convert escaped allowed opening tags back
  ALLOWED_TAGS.forEach(tag => {
    // Restore opening tags like <mark> or <mark class="...">
    const openTagRegex = new RegExp(`&lt;(${tag})(\\s[^&]*)?&gt;`, 'gi');
    result = result.replace(openTagRegex, (match, tagName, attrs) => {
      // Only allow class attribute for styling
      if (attrs) {
        const classMatch = attrs.match(/class=&quot;([^&]*)&quot;/i);
        if (classMatch) {
          return `<${tagName.toLowerCase()} class="${escapeHtml(classMatch[1])}">`;
        }
      }
      return `<${tagName.toLowerCase()}>`;
    });

    // Restore closing tags like </mark>
    const closeTagRegex = new RegExp(`&lt;\\/${tag}&gt;`, 'gi');
    result = result.replace(closeTagRegex, `</${tag.toLowerCase()}>`);
  });

  return result;
};

/**
 * Create highlighted text from plain text and search query
 * This is safer than using pre-highlighted HTML from external sources
 * @param {string} text - Plain text to highlight
 * @param {string} query - Search query to highlight
 * @returns {string} - Safe HTML with highlights
 */
export const highlightText = (text, query) => {
  if (!text || !query) return escapeHtml(text);

  const escapedText = escapeHtml(text);
  const escapedQuery = escapeHtml(query);

  // Create a case-insensitive regex for the query
  const regex = new RegExp(`(${escapedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');

  return escapedText.replace(regex, '<mark class="bg-amber-400/30 text-amber-200 rounded px-0.5">$1</mark>');
};

/**
 * Strip all HTML tags from text
 * @param {string} html - HTML string
 * @returns {string} - Plain text without tags
 */
export const stripHtml = (html) => {
  if (!html || typeof html !== 'string') return '';
  return html.replace(/<[^>]*>/g, '');
};

export default {
  escapeHtml,
  sanitizeHighlight,
  highlightText,
  stripHtml,
};
