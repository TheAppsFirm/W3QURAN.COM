/**
 * useTajweed Hook
 * Single Responsibility: Tajweed rules parsing and display
 *
 * @module hooks/useTajweed
 */

/**
 * Tajweed Rules with colors and descriptions
 * Maps rule codes to their display information
 */
export const TAJWEED_RULES = {
  'ham_wasl': { name: 'Hamzat ul Wasl', color: '#AAAAAA', description: 'Wasl' },
  'slnt': { name: 'Silent', color: '#AAAAAA', description: 'Not pronounced' },
  'laam_shamsiyah': { name: 'Laam Shamsiyyah', color: '#AAAAAA', description: 'Assimilated Laam' },
  'madda_normal': { name: 'Normal Prolongation', color: '#537FFF', description: '2 vowels' },
  'madda_permissible': { name: 'Permissible Prolongation', color: '#4050FF', description: '2, 4, 6 vowels' },
  'madda_necessary': { name: 'Necessary Prolongation', color: '#000EBC', description: '6 vowels' },
  'madda_obligatory': { name: 'Obligatory Prolongation', color: '#2144C1', description: '4-5 vowels' },
  'qalqalah': { name: 'Qalqalah', color: '#DD0008', description: 'Echo sound' },
  'ghunnah': { name: 'Ghunnah', color: '#169200', description: '2 vowels nasalization' },
  'ikhafa_shafawi': { name: 'Ikhafa Shafawi', color: '#169200', description: 'Hiding' },
  'ikhafa': { name: 'Ikhafa', color: '#169200', description: 'Hiding' },
  'iqlab': { name: 'Iqlab', color: '#26BFFD', description: 'Conversion' },
  'idgham_shafawi': { name: 'Idgham Shafawi', color: '#A1A1A1', description: 'Merging' },
  'idgham_ghunnah': { name: 'Idgham with Ghunnah', color: '#169200', description: 'Merging with nasalization' },
  'idgham_wo_ghunnah': { name: 'Idgham without Ghunnah', color: '#A1A1A1', description: 'Merging without nasalization' },
  'idgham_mutajanisayn': { name: 'Idgham Mutajanisayn', color: '#A1A1A1', description: 'Merging of similar letters' },
  'idgham_mutaqaribayn': { name: 'Idgham Mutaqaribayn', color: '#A1A1A1', description: 'Merging of close letters' },
};

/**
 * Tajweed rule categories for grouping
 */
export const TAJWEED_CATEGORIES = {
  prolongation: ['madda_normal', 'madda_permissible', 'madda_necessary', 'madda_obligatory'],
  nasalization: ['ghunnah', 'ikhafa_shafawi', 'ikhafa', 'idgham_ghunnah'],
  merging: ['idgham_shafawi', 'idgham_wo_ghunnah', 'idgham_mutajanisayn', 'idgham_mutaqaribayn'],
  special: ['qalqalah', 'iqlab', 'ham_wasl', 'slnt', 'laam_shamsiyah'],
};

/**
 * Parse Tajweed text into segments with rules
 * Format: [rule:id[text] or plain text
 *
 * @param {string} text - Tajweed markup text from API
 * @returns {Array<Object>} - Array of segment objects
 *
 * @example
 * const segments = parseTajweedText('[ghunnah:1[مِنَ]');
 * // [{ type: 'tajweed', rule: 'ghunnah', text: 'مِنَ', color: '#169200', ... }]
 */
export function parseTajweedText(text) {
  if (!text) return [];

  const segments = [];
  let currentIndex = 0;

  // Regex to match tajweed markers: [rule:id[text]
  const regex = /\[([a-z_]+):?\d*\[([^\]]+)\]/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add plain text before this match
    if (match.index > currentIndex) {
      segments.push({
        type: 'plain',
        text: text.slice(currentIndex, match.index),
      });
    }

    // Add tajweed segment
    const rule = match[1];
    const content = match[2];
    segments.push({
      type: 'tajweed',
      rule: rule,
      text: content,
      color: TAJWEED_RULES[rule]?.color || '#000000',
      name: TAJWEED_RULES[rule]?.name || rule,
      description: TAJWEED_RULES[rule]?.description || '',
    });

    currentIndex = match.index + match[0].length;
  }

  // Add remaining plain text
  if (currentIndex < text.length) {
    segments.push({
      type: 'plain',
      text: text.slice(currentIndex),
    });
  }

  return segments;
}

/**
 * Get tajweed rule info by code
 *
 * @param {string} ruleCode - Tajweed rule code
 * @returns {Object|null} - Rule info or null if not found
 */
export function getTajweedRule(ruleCode) {
  return TAJWEED_RULES[ruleCode] || null;
}

/**
 * Get all tajweed rules in a category
 *
 * @param {string} category - Category name (prolongation, nasalization, merging, special)
 * @returns {Array<Object>} - Array of rule objects with code and info
 */
export function getTajweedRulesByCategory(category) {
  const ruleCodes = TAJWEED_CATEGORIES[category] || [];
  return ruleCodes.map(code => ({
    code,
    ...TAJWEED_RULES[code],
  }));
}

/**
 * Get all unique tajweed rules from parsed segments
 *
 * @param {Array<Object>} segments - Parsed tajweed segments
 * @returns {Array<Object>} - Unique rules used in segments
 */
export function getUsedTajweedRules(segments) {
  const usedRules = new Set();

  segments.forEach(segment => {
    if (segment.type === 'tajweed' && segment.rule) {
      usedRules.add(segment.rule);
    }
  });

  return Array.from(usedRules).map(code => ({
    code,
    ...TAJWEED_RULES[code],
  }));
}

/**
 * Count occurrences of each tajweed rule in segments
 *
 * @param {Array<Object>} segments - Parsed tajweed segments
 * @returns {Object} - Map of rule codes to counts
 */
export function countTajweedRules(segments) {
  const counts = {};

  segments.forEach(segment => {
    if (segment.type === 'tajweed' && segment.rule) {
      counts[segment.rule] = (counts[segment.rule] || 0) + 1;
    }
  });

  return counts;
}

export default {
  TAJWEED_RULES,
  TAJWEED_CATEGORIES,
  parseTajweedText,
  getTajweedRule,
  getTajweedRulesByCategory,
  getUsedTajweedRules,
  countTajweedRules,
};
