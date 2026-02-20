/**
 * useTranslationsAPI Hook
 * Single Responsibility: Handle translation data and configuration
 *
 * @module hooks/useTranslationsAPI
 */

/**
 * Available Translations - Organized by Language
 * Maps translation IDs to their metadata
 */
export const TRANSLATIONS = {
  // === URDU TRANSLATIONS (اردو) ===
  'ur.jalandhry': { name: 'فتح محمد جالندھری', nameEn: 'Fateh Muhammad Jalandhry', language: 'Urdu', languageNative: 'اردو' },
  'ur.maududi': { name: 'ابوالاعلیٰ مودودی', nameEn: 'Abul Ala Maududi', language: 'Urdu', languageNative: 'اردو' },
  'ur.junagarhi': { name: 'محمد جوناگڑھی', nameEn: 'Muhammad Junagarhi', language: 'Urdu', languageNative: 'اردو' },
  'ur.kanzuliman': { name: 'احمد رضا خان', nameEn: 'Ahmed Raza Khan (Kanz ul Iman)', language: 'Urdu', languageNative: 'اردو' },
  'ur.qadri': { name: 'طاہر القادری', nameEn: 'Tahir ul Qadri', language: 'Urdu', languageNative: 'اردو' },
  'ur.jawadi': { name: 'سید زیشان حیدر جوادی', nameEn: 'Syed Zeeshan Haider Jawadi', language: 'Urdu', languageNative: 'اردو' },
  'ur.ahmedali': { name: 'احمد علی', nameEn: 'Ahmed Ali (Urdu)', language: 'Urdu', languageNative: 'اردو' },
  'ur.najafi': { name: 'محمد حسین نجفی', nameEn: 'Muhammad Hussain Najafi', language: 'Urdu', languageNative: 'اردو' },

  // === ENGLISH TRANSLATIONS ===
  'en.sahih': { name: 'Saheeh International', language: 'English' },
  'en.yusufali': { name: 'Abdullah Yusuf Ali', language: 'English' },
  'en.pickthall': { name: 'Muhammad Pickthall', language: 'English' },
  'en.asad': { name: 'Muhammad Asad', language: 'English' },
  'en.itani': { name: 'Clear Quran (Talal Itani)', language: 'English' },
  'en.hilali': { name: 'Hilali & Khan', language: 'English' },
  'en.maududi': { name: 'Abul Ala Maududi', language: 'English' },
  'en.shakir': { name: 'Mohammad Habib Shakir', language: 'English' },
  'en.sarwar': { name: 'Muhammad Sarwar', language: 'English' },
  'en.ahmedali': { name: 'Ahmed Ali', language: 'English' },

  // === BENGALI TRANSLATIONS (বাংলা) ===
  'bn.bengali': { name: 'মুহিউদ্দীন খান', nameEn: 'Muhiuddin Khan', language: 'Bengali', languageNative: 'বাংলা' },
  'bn.hoque': { name: 'জহুরুল হক', nameEn: 'Zohurul Hoque', language: 'Bengali', languageNative: 'বাংলা' },

  // === OTHER LANGUAGES ===
  'fr.hamidullah': { name: 'Muhammad Hamidullah', language: 'French' },
  'de.bubenheim': { name: 'Bubenheim & Elyas', language: 'German' },
  'id.indonesian': { name: 'Indonesian Ministry', language: 'Indonesian' },
  'tr.diyanet': { name: 'Diyanet Isleri', language: 'Turkish' },
  'ru.kuliev': { name: 'Elmir Kuliev', language: 'Russian' },
  'ml.cheriyamundam': { name: 'Cheriyamundam Abdul Hameed', language: 'Malayalam' },
  'ta.tamil': { name: 'Jan Trust Foundation', language: 'Tamil' },
  'hi.hindi': { name: 'Suhel Farooq Khan', language: 'Hindi' },
};

/**
 * Map translation IDs to word translation language codes
 * Used for word-by-word translations
 */
export const WORD_TRANSLATION_LANGUAGES = {
  // Urdu translations (QuranWBW has complete coverage)
  'ur.jalandhry': 'ur',
  'ur.maududi': 'ur',
  'ur.junagarhi': 'ur',
  'ur.kanzuliman': 'ur',
  'ur.qadri': 'ur',
  'ur.jawadi': 'ur',
  'ur.ahmedali': 'ur',
  'ur.najafi': 'ur',
  // English translations
  'en.sahih': 'en',
  'en.yusufali': 'en',
  'en.pickthall': 'en',
  'en.asad': 'en',
  'en.itani': 'en',
  'en.hilali': 'en',
  'en.maududi': 'en',
  'en.shakir': 'en',
  'en.sarwar': 'en',
  'en.ahmedali': 'en',
  // Bengali translations (QuranWBW has complete coverage)
  'bn.bengali': 'bn',
  'bn.hoque': 'bn',
  // Hindi (QuranWBW has complete coverage)
  'hi.hindi': 'hi',
  // Other languages with QuranWBW support
  'fr.hamidullah': 'fr',
  'de.bubenheim': 'de',
  'id.indonesian': 'id',
  'tr.diyanet': 'tr',
  'ta.tamil': 'ta',
  // Fallback to English for unsupported languages
  'ru.kuliev': 'en',
  'ml.cheriyamundam': 'en',
};

/**
 * Get list of available translations as array
 *
 * @returns {Array<Object>} - Array of translation objects with id and metadata
 *
 * @example
 * const translations = getAvailableTranslations();
 * // [{ id: 'en.sahih', name: 'Saheeh International', language: 'English' }, ...]
 */
export function getAvailableTranslations() {
  return Object.entries(TRANSLATIONS).map(([id, info]) => ({
    id,
    ...info,
  }));
}

/**
 * Get translations grouped by language
 *
 * @returns {Object} - Translations grouped by language code
 *
 * @example
 * const grouped = getTranslationsByLanguage();
 * // { Urdu: [...], English: [...], ... }
 */
export function getTranslationsByLanguage() {
  const grouped = {};

  Object.entries(TRANSLATIONS).forEach(([id, info]) => {
    const lang = info.language;
    if (!grouped[lang]) {
      grouped[lang] = [];
    }
    grouped[lang].push({ id, ...info });
  });

  return grouped;
}

/**
 * Get translation info by ID
 *
 * @param {string} translationId - Translation ID
 * @returns {Object|null} - Translation metadata or null if not found
 *
 * @example
 * const info = getTranslationInfo('ur.jalandhry');
 * // { name: 'فتح محمد جالندھری', nameEn: 'Fateh Muhammad Jalandhry', language: 'Urdu', ... }
 */
export function getTranslationInfo(translationId) {
  return TRANSLATIONS[translationId] || null;
}

/**
 * Get the language code for word-by-word translations
 *
 * @param {string} translationId - Translation ID
 * @returns {string} - Language code (defaults to 'en')
 *
 * @example
 * const lang = getWordLanguage('ur.jalandhry'); // 'ur'
 * const lang = getWordLanguage('unknown'); // 'en'
 */
export function getWordLanguage(translationId) {
  return WORD_TRANSLATION_LANGUAGES[translationId] || 'en';
}

/**
 * Check if a translation ID is valid
 *
 * @param {string} translationId - Translation ID to check
 * @returns {boolean} - True if translation exists
 */
export function isValidTranslation(translationId) {
  return translationId in TRANSLATIONS;
}

/**
 * Get all Urdu translations
 *
 * @returns {Array<Object>} - Array of Urdu translation objects
 */
export function getUrduTranslations() {
  return getAvailableTranslations().filter(t => t.language === 'Urdu');
}

/**
 * Get all English translations
 *
 * @returns {Array<Object>} - Array of English translation objects
 */
export function getEnglishTranslations() {
  return getAvailableTranslations().filter(t => t.language === 'English');
}

export default {
  TRANSLATIONS,
  WORD_TRANSLATION_LANGUAGES,
  getAvailableTranslations,
  getTranslationsByLanguage,
  getTranslationInfo,
  getWordLanguage,
  isValidTranslation,
  getUrduTranslations,
  getEnglishTranslations,
};
