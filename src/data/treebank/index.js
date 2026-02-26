/**
 * Quranic Arabic Treebank - Main Index
 * Provides lazy loading for surah data and centralized exports
 */

// Re-export shared constants
export {
  POS_TAGS,
  GRAMMAR_ROLES,
  HARAKAT,
  CASES,
  UI_LABELS,
  getLanguageFromTranslation,
  getLabel,
  getFeatureKey,
  parseWordLetters,
  detectHaraka,
  LANGUAGE_NAMES,
} from './shared/constants';

// Cache for loaded surah data
const treebankCache = {};
const ontologyCache = {};

// List of surahs with treebank data available - ALL 114 SURAHS
export const AVAILABLE_SURAHS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
  101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
  111, 112, 113, 114
];

// List of surahs with ontology data available - ALL 114 SURAHS COMPLETE
export const SURAHS_WITH_ONTOLOGY = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
  101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
  111, 112, 113, 114
];

/**
 * Dynamically load treebank data for a surah
 * @param {number} surahId - Surah number (1-114)
 * @returns {Promise<Object|null>} Treebank data or null if not available
 */
export const loadSurahTreebank = async (surahId) => {
  // Return from cache if already loaded
  if (treebankCache[surahId]) {
    return treebankCache[surahId];
  }

  // Check if data is available for this surah
  if (!AVAILABLE_SURAHS.includes(surahId)) {
    return null;
  }

  try {
    // Dynamic import based on surah ID
    const paddedId = String(surahId).padStart(3, '0');
    const module = await import(`./surahs/${paddedId}.js`);
    treebankCache[surahId] = module.default || module.TREEBANK_DATA;
    return treebankCache[surahId];
  } catch (error) {
    console.warn(`Treebank data not found for surah ${surahId}:`, error);
    return null;
  }
};

/**
 * Dynamically load ontology data for a surah
 * @param {number} surahId - Surah number (1-114)
 * @returns {Promise<Object|null>} Ontology data or null if not available
 */
export const loadSurahOntology = async (surahId) => {
  // Return from cache if already loaded
  if (ontologyCache[surahId]) {
    return ontologyCache[surahId];
  }

  // Check if ontology is available for this surah
  if (!SURAHS_WITH_ONTOLOGY.includes(surahId)) {
    return null;
  }

  try {
    // Dynamic import based on surah ID
    const paddedId = String(surahId).padStart(3, '0');
    const module = await import(`./ontology/${paddedId}.js`);
    ontologyCache[surahId] = module.default || module.ONTOLOGY;
    return ontologyCache[surahId];
  } catch (error) {
    console.warn(`Ontology data not found for surah ${surahId}:`, error);
    return null;
  }
};

/**
 * Check if treebank data exists for a surah
 * @param {number} surahId - Surah number
 * @returns {boolean}
 */
export const hasTreebankData = (surahId) => {
  return AVAILABLE_SURAHS.includes(surahId);
};

/**
 * Check if ontology data exists for a surah
 * @param {number} surahId - Surah number
 * @returns {boolean}
 */
export const hasOntologyData = (surahId) => {
  return SURAHS_WITH_ONTOLOGY.includes(surahId);
};

/**
 * Auto-generate dependency diagram connections from word grammar data.
 * Analyzes POS tags and grammar roles to create word-to-word relationships.
 */
const ROLE_LABELS = {
  'verb-subject': 'فعل + فاعل',
  'verb-object': 'فعل + مفعول',
  'mudaf': 'مضاف + مضاف إليه',
  'adjective': 'موصوف + صفت',
  'preposition': 'جار + مجرور',
  'conjunction': 'عطف',
  'negation': 'نفی + فعل',
  'relative': 'موصول + صلة',
  'predicate': 'مبتدأ + خبر',
  'emphasis': 'توکید',
  'hal': 'حال',
  'tamyiz': 'تمییز',
  'badal': 'بدل',
  'atf': 'عطف',
};

const generateDiagramFromWords = (words, surahId, ayahNum) => {
  const connections = [];
  const getId = (idx) => words[idx]?.id || `${surahId}:${ayahNum}:${words[idx]?.position || idx + 1}`;

  // Extract POS and role for each word
  const wordInfo = words.map((w, i) => {
    const posRaw = w.pos;
    // Get primary POS (first tag from array or compound string)
    const pos = Array.isArray(posRaw) ? posRaw[0] : (typeof posRaw === 'string' ? posRaw.split('+')[0] : 'N');
    // Get full POS string for compound detection (e.g. "CONJ+N", "V+PRON")
    const fullPos = Array.isArray(posRaw) ? posRaw.join('+') : (posRaw || 'N');
    const role = w.grammarRole || w.grammar?.role || '';
    const caseVal = w.grammar?.case || w.features?.case || '';
    return { pos, fullPos, role, caseVal, index: i };
  });

  // Find verb indices and noun/adj indices
  const verbs = wordInfo.filter(w => w.pos === 'V');
  const lastVerb = { index: -1 }; // track last verb for object/subject linking

  for (let i = 0; i < wordInfo.length; i++) {
    const curr = wordInfo[i];
    const prev = i > 0 ? wordInfo[i - 1] : null;
    const next = i < wordInfo.length - 1 ? wordInfo[i + 1] : null;

    // Conjunction links to next word
    if (curr.pos === 'CONJ' && next) {
      // Find previous non-conjunction word to link
      let prevNonConj = i - 1;
      while (prevNonConj >= 0 && wordInfo[prevNonConj].pos === 'CONJ') prevNonConj--;
      if (prevNonConj >= 0) {
        connections.push({ from: getId(prevNonConj), to: getId(i + 1), label: ROLE_LABELS.conjunction });
      }
      continue;
    }

    // Verb → next noun (object)
    if (curr.pos === 'V' && next && (next.pos === 'N' || next.pos === 'NUM' || next.pos === 'PRON')) {
      const label = (next.role === 'subject' || next.role === 'mubtada' || next.caseVal === 'nominative')
        ? ROLE_LABELS['verb-subject']
        : ROLE_LABELS['verb-object'];
      connections.push({ from: getId(i), to: getId(i + 1), label });
      continue;
    }

    // Preposition → next noun
    if ((curr.pos === 'PREP' || curr.pos === 'P') && next) {
      connections.push({ from: getId(i), to: getId(i + 1), label: ROLE_LABELS.preposition });
      continue;
    }

    // Negation → next verb
    if (curr.pos === 'NEG' && next && next.pos === 'V') {
      connections.push({ from: getId(i), to: getId(i + 1), label: ROLE_LABELS.negation });
      continue;
    }

    // Relative pronoun → next word
    if (curr.pos === 'REL' && next) {
      connections.push({ from: getId(i), to: getId(i + 1), label: ROLE_LABELS.relative });
      continue;
    }

    // Noun followed by adjective
    if ((curr.pos === 'N' || curr.pos === 'PRON') && next && next.pos === 'ADJ') {
      connections.push({ from: getId(i), to: getId(i + 1), label: ROLE_LABELS.adjective });
      continue;
    }

    // Mudaf + Mudaf ilayh: noun followed by genitive noun
    if (curr.pos === 'N' && next && next.pos === 'N' && (next.caseVal === 'genitive' || next.role === 'mudaf_ilayh')) {
      connections.push({ from: getId(i), to: getId(i + 1), label: ROLE_LABELS.mudaf });
      continue;
    }

    // Subject + predicate pattern
    if ((curr.role === 'subject' || curr.role === 'mubtada') && next && (next.role === 'predicate' || next.role === 'khabar')) {
      connections.push({ from: getId(i), to: getId(i + 1), label: ROLE_LABELS.predicate });
      continue;
    }

    // Hal / Tamyiz / Badal roles → link to previous word
    if ((curr.role === 'hal' || curr.role === 'tamyiz' || curr.role === 'badal') && prev) {
      const label = ROLE_LABELS[curr.role] || curr.role;
      connections.push({ from: getId(i - 1), to: getId(i), label });
      continue;
    }
  }

  // If no connections found but multiple words, create simple sequential links
  if (connections.length === 0 && words.length >= 2) {
    for (let i = 0; i < words.length - 1; i++) {
      connections.push({
        from: getId(i),
        to: getId(i + 1),
        label: '',
      });
    }
  }

  return connections;
};

/**
 * Get treebank data for a specific ayah (synchronous - requires pre-loading)
 * @param {number} surahId - Surah number
 * @param {number} ayahNum - Ayah number
 * @param {string} lang - Language code
 * @returns {Object|null}
 */
export const getAyahTreebank = (surahId, ayahNum, lang = 'en') => {
  const surahData = treebankCache[surahId];
  if (!surahData || !surahData[ayahNum]) {
    return null;
  }

  const ayahData = surahData[ayahNum];

  // Helper to extract text from object or return string
  const getText = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj.en || obj.ur || '';
  };

  // Helper to normalize advanced fields (some surahs have strings, some have objects)
  const normalizeAdvancedField = (field, fieldName) => {
    if (!field) return null;
    // If it's a string, convert to object format
    if (typeof field === 'string') {
      if (fieldName === 'rootFamily') {
        // rootFamily as array of strings -> convert to proper format
        return { words: [], meaning: { en: field, ur: field } };
      }
      if (fieldName === 'frequency') {
        return { total: 0, note: { en: field, ur: field } };
      }
      // For balagha, linguisticMiracle, memoryHook
      return { title: { en: '', ur: '' }, explanation: { en: field, ur: field } };
    }
    return field;
  };

  // Build or convert structure.diagram for DependencyTree
  let structure = ayahData.structure;
  if (structure?.relationships && !structure?.diagram) {
    // Old format: convert position-based relationships to word-ID-based diagram
    structure = {
      ...structure,
      diagram: structure.relationships.map(rel => ({
        from: `${surahId}:${ayahNum}:${rel.from}`,
        to: `${surahId}:${ayahNum}:${rel.to}`,
        label: rel.label,
      })),
    };
  } else if (!structure?.diagram || (Array.isArray(structure?.diagram) && typeof structure.diagram[0] === 'string')) {
    // No relationships data or string-only diagram — auto-generate from word grammar
    const words = ayahData.words;
    if (words && words.length > 1) {
      const generated = generateDiagramFromWords(words, surahId, ayahNum);
      if (generated.length > 0) {
        structure = { ...(structure || {}), diagram: generated };
      }
    }
  }

  // Transform words to include language-specific labels and flatten advanced features
  return {
    ...ayahData,
    // Normalized structure with diagram connections
    structure,
    // Normalize text property (some use 'arabic' instead of 'text')
    text: ayahData.text || ayahData.arabic,
    // Also provide translations key for backward compatibility
    translations: ayahData.translation || ayahData.translations,
    words: ayahData.words?.map((word, index) => {
      // Get translation for word (support both 'meaning' and 'translations' keys)
      const wordMeaning = word.meaning || word.translations;
      const translation = typeof wordMeaning === 'object'
        ? (wordMeaning[lang] || wordMeaning.en || wordMeaning.ur || '')
        : (wordMeaning || '');

      // Flatten advanced features to top level (for UI compatibility)
      const advanced = word.advanced || {};

      // Ensure pos is always an array
      const pos = Array.isArray(word.pos) ? word.pos : (word.posTag ? [word.posTag] : ['N']);

      return {
        ...word,
        // Generate id if missing: surahId:ayahNum:wordPosition
        id: word.id || `${surahId}:${ayahNum}:${word.position || index + 1}`,
        // Ensure pos is array format
        pos,
        // posLabel for display
        posLabel: word.posLabel || word.posTag || pos.join('+'),
        // Word translation
        translation,
        // Also keep meaning for backward compatibility
        meaning: translation,
        // Flatten advanced features to top level, normalizing format
        rootFamily: normalizeAdvancedField(word.rootFamily || advanced.rootFamily, 'rootFamily'),
        frequency: normalizeAdvancedField(word.frequency || advanced.frequency, 'frequency'),
        irabReason: word.irabReason || advanced.irabReason,
        balagha: normalizeAdvancedField(word.balagha || advanced.balagha, 'balagha'),
        linguisticMiracle: normalizeAdvancedField(word.linguisticMiracle || advanced.linguisticMiracle, 'linguisticMiracle'),
        tajweedTips: word.tajweedTips || advanced.tajweedTips,
        memoryHook: normalizeAdvancedField(word.memoryHook || advanced.memoryHook, 'memoryHook'),
        verbConjugation: word.verbConjugation || advanced.verbConjugation,
        scholarTranslations: word.scholarTranslations || advanced.scholarTranslations,
        similarPatterns: word.similarPatterns || advanced.similarPatterns,
      };
    }),
  };
};

/**
 * Get ontology data for a surah (synchronous - requires pre-loading)
 * @param {number} surahId - Surah number
 * @returns {Object|null}
 */
export const getSurahOntology = (surahId) => {
  return ontologyCache[surahId] || null;
};

/**
 * Check if user can access treebank (premium gating)
 * @param {number} surahId - Surah number
 * @param {boolean} isPremium - User premium status
 * @returns {boolean}
 */
export const canAccessTreebank = (surahId, isPremium = false) => {
  // Al-Fatiha (1) and 3 Quls (112, 113, 114) are free
  const freeSurahs = [1, 112, 113, 114];
  return freeSurahs.includes(surahId) || isPremium;
};

/**
 * Preload treebank data for multiple surahs
 * @param {number[]} surahIds - Array of surah numbers to preload
 */
export const preloadSurahs = async (surahIds) => {
  await Promise.all(surahIds.map(id => loadSurahTreebank(id)));
};

/**
 * Clear cache (useful for memory management)
 */
export const clearCache = () => {
  Object.keys(treebankCache).forEach(key => delete treebankCache[key]);
  Object.keys(ontologyCache).forEach(key => delete ontologyCache[key]);
};

// For backward compatibility, also export a function to get full treebank data
// This mimics the old TREEBANK_DATA object behavior
export const getTreebankData = () => treebankCache;
export const getOntologyData = () => ontologyCache;
