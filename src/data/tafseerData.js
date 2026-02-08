/**
 * Tafseer Data - Multi-language Tafseer Sources
 * Contains tafseer API endpoints and sample content
 */

// Tafseer Sources with Language Support, Icons, and Introductions
export const TAFSEER_SOURCES = {
  // English Tafseers
  'ibn-kathir-en': {
    id: 'ibn-kathir-en',
    name: 'Ibn Kathir',
    language: 'en',
    languageName: 'English',
    apiId: 169,
    description: 'Classical tafseer by Imam Ibn Kathir (d. 774 AH)',
    direction: 'ltr',
    icon: 'BookOpen',
    color: '#8B5CF6',
    intro: 'One of the most authentic and widely used tafseer. Imam Ibn Kathir explains verses using hadith and other Quranic references.',
  },
  'maariful-quran-en': {
    id: 'maariful-quran-en',
    name: 'Maariful Quran',
    language: 'en',
    languageName: 'English',
    apiId: 168,
    description: 'Comprehensive tafseer by Mufti Muhammad Shafi',
    direction: 'ltr',
    icon: 'Scroll',
    color: '#06B6D4',
    intro: 'A comprehensive 8-volume tafseer known for practical guidance and Hanafi fiqh perspective.',
  },
  'saadi-en': {
    id: 'saadi-en',
    name: 'Tafsir As-Saadi',
    language: 'en',
    languageName: 'English',
    apiId: 170,
    description: 'Tafseer by Shaykh Abdur-Rahman As-Saadi',
    direction: 'ltr',
    icon: 'Feather',
    color: '#10B981',
    intro: 'Known for its clarity and simplicity. Excellent for beginners seeking to understand Quran.',
  },

  // Urdu Tafseers
  'ibn-kathir-ur': {
    id: 'ibn-kathir-ur',
    name: 'ابن کثیر',
    language: 'ur',
    languageName: 'اردو',
    apiId: 160,
    description: 'امام ابن کثیر کی معروف تفسیر',
    direction: 'rtl',
    icon: 'BookOpen',
    color: '#8B5CF6',
    intro: 'اسلامی تاریخ کی مشہور ترین تفسیر۔ قرآن و حدیث کی روشنی میں آیات کی تشریح۔',
  },
  'bayan-ul-quran': {
    id: 'bayan-ul-quran',
    name: 'بیان القرآن',
    language: 'ur',
    languageName: 'اردو',
    apiId: 159,
    description: 'مولانا اشرف علی تھانوی کی تفسیر',
    direction: 'rtl',
    icon: 'Star',
    color: '#F59E0B',
    intro: 'حکیم الامت مولانا اشرف علی تھانوی کی مشہور تفسیر۔ تزکیہ نفس اور اصلاحی نقطہ نظر۔',
  },
  'fi-zilal-quran-ur': {
    id: 'fi-zilal-quran-ur',
    name: 'فی ظلال القرآن',
    language: 'ur',
    languageName: 'اردو',
    apiId: 157,
    description: 'سید قطب کی تفسیر',
    direction: 'rtl',
    icon: 'Sun',
    color: '#EC4899',
    intro: 'قرآن کے سائے میں۔ عصری مسائل اور اسلامی تحریک کے نقطہ نظر سے تفسیر۔',
  },
  'tazkir-ul-quran': {
    id: 'tazkir-ul-quran',
    name: 'تذکیر القرآن',
    language: 'ur',
    languageName: 'اردو',
    apiId: 818,
    description: 'مولانا وحید الدین خان کی تفسیر',
    direction: 'rtl',
    icon: 'Heart',
    color: '#EF4444',
    intro: 'جدید اسلوب میں قرآنی تعلیمات کی وضاحت۔ دعوتی نقطہ نظر سے مرتب۔',
  },

  // Arabic Tafseers
  'jalalayn-ar': {
    id: 'jalalayn-ar',
    name: 'تفسير الجلالين',
    language: 'ar',
    languageName: 'العربية',
    apiId: 74,
    description: 'تفسير الإمامين المحليين',
    direction: 'rtl',
    icon: 'Layers',
    color: '#6366F1',
    intro: 'تفسير مختصر وشامل للإمامين جلال الدين المحلي وجلال الدين السيوطي',
  },
  'tabari-ar': {
    id: 'tabari-ar',
    name: 'تفسير الطبري',
    language: 'ar',
    languageName: 'العربية',
    apiId: 91,
    description: 'تفسير الإمام الطبري',
    direction: 'rtl',
    icon: 'Archive',
    color: '#059669',
    intro: 'جامع البيان عن تأويل آي القرآن - من أقدم وأوثق التفاسير',
  },
  'qurtubi-ar': {
    id: 'qurtubi-ar',
    name: 'تفسير القرطبي',
    language: 'ar',
    languageName: 'العربية',
    apiId: 90,
    description: 'الجامع لأحكام القرآن',
    direction: 'rtl',
    icon: 'Scale',
    color: '#7C3AED',
    intro: 'تفسير فقهي شامل يجمع أحكام القرآن الكريم',
  },
  'ibn-kathir-ar': {
    id: 'ibn-kathir-ar',
    name: 'تفسير ابن كثير',
    language: 'ar',
    languageName: 'العربية',
    apiId: 92,
    description: 'تفسير القرآن العظيم',
    direction: 'rtl',
    icon: 'BookOpen',
    color: '#8B5CF6',
    intro: 'من أشهر التفاسير بالمأثور - يفسر القرآن بالقرآن والسنة',
  },
  'muyassar-ar': {
    id: 'muyassar-ar',
    name: 'التفسير الميسر',
    language: 'ar',
    languageName: 'العربية',
    apiId: 16,
    description: 'تفسير سهل ومبسط',
    direction: 'rtl',
    icon: 'Sparkles',
    color: '#0EA5E9',
    intro: 'تفسير ميسر وسهل الفهم لعامة المسلمين',
  },
  'wasit-ar': {
    id: 'wasit-ar',
    name: 'التفسير الوسيط',
    language: 'ar',
    languageName: 'العربية',
    apiId: 93,
    description: 'التفسير الوسيط للطنطاوي',
    direction: 'rtl',
    icon: 'Layers',
    color: '#14B8A6',
    intro: 'تفسير شامل ومعتدل للشيخ محمد سيد طنطاوي',
  },
  'baghawi-ar': {
    id: 'baghawi-ar',
    name: 'تفسير البغوي',
    language: 'ar',
    languageName: 'العربية',
    apiId: 94,
    description: 'معالم التنزيل',
    direction: 'rtl',
    icon: 'Book',
    color: '#F97316',
    intro: 'تفسير الإمام البغوي - معالم التنزيل في تفسير القرآن',
  },

  // Bengali Tafseers
  'fathul-majid-bn': {
    id: 'fathul-majid-bn',
    name: 'তাফসীর ফাতহুল মজীদ',
    language: 'bn',
    languageName: 'বাংলা',
    apiId: 381,
    description: 'ফাতহুল মজীদ তাফসীর',
    direction: 'ltr',
    icon: 'BookOpen',
    color: '#059669',
    intro: 'বাংলা ভাষায় প্রামাণিক তাফসীর',
  },
  'ahsanul-bayan-bn': {
    id: 'ahsanul-bayan-bn',
    name: 'তাফসীর আহসানুল বায়ান',
    language: 'bn',
    languageName: 'বাংলা',
    apiId: 165,
    description: 'আহসানুল বায়ান',
    direction: 'ltr',
    icon: 'Scroll',
    color: '#8B5CF6',
    intro: 'সহজবোধ্য বাংলা তাফসীর',
  },
  'abu-bakr-bn': {
    id: 'abu-bakr-bn',
    name: 'তাফসীর আবু বকর জাকারিয়া',
    language: 'bn',
    languageName: 'বাংলা',
    apiId: 166,
    description: 'ড. আবু বকর জাকারিয়া',
    direction: 'ltr',
    icon: 'Star',
    color: '#EC4899',
    intro: 'বিস্তারিত এবং গবেষণামূলক তাফসীর',
  },
  'ibn-kathir-bn': {
    id: 'ibn-kathir-bn',
    name: 'তাফসীর ইবনে কাসীর',
    language: 'bn',
    languageName: 'বাংলা',
    apiId: 164,
    description: 'ইবনে কাসীর বাংলা',
    direction: 'ltr',
    icon: 'BookOpen',
    color: '#6366F1',
    intro: 'ইমাম ইবনে কাসীরের বিখ্যাত তাফসীরের বাংলা অনুবাদ',
  },

  // Indonesian Tafseers
  'indonesian': {
    id: 'indonesian',
    name: 'Tafsir Indonesia',
    language: 'id',
    languageName: 'Bahasa',
    apiId: 33,
    description: 'Tafsir Kementerian Agama RI',
    direction: 'ltr',
    icon: 'Globe',
    color: '#0EA5E9',
    intro: 'Tafsir resmi dari Kementerian Agama Republik Indonesia untuk pemahaman yang mudah.',
  },

  // Turkish Tafseers
  'turkish': {
    id: 'turkish',
    name: 'Türkçe Tefsir',
    language: 'tr',
    languageName: 'Türkçe',
    apiId: 52,
    description: 'Diyanet İşleri Başkanlığı',
    direction: 'ltr',
    icon: 'Flag',
    color: '#DC2626',
    intro: 'Diyanet İşleri Başkanlığı tarafından hazırlanan resmi tefsir.',
  },
};

// Get tafseers by language
export const getTafseersByLanguage = (lang) => {
  return Object.values(TAFSEER_SOURCES).filter(t => t.language === lang);
};

// Get default tafseer for a language
export const getDefaultTafseer = (lang) => {
  const defaults = {
    'en': 'ibn-kathir-en',
    'ur': 'bayan-ul-quran',
    'ar': 'ibn-kathir-ar',
    'bn': 'ibn-kathir-bn',
    'id': 'indonesian',
    'tr': 'turkish',
  };
  return defaults[lang] || 'ibn-kathir-en';
};

// Language mapping from translation IDs
export const TRANSLATION_TO_TAFSEER_LANG = {
  // Urdu translations - all map to Urdu tafseer
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
  // Arabic translations - use Arabic tafseer
  'ar.jalalayn': 'ar',
  // Bengali translations
  'bn.bengali': 'bn',
  'bn.hoque': 'bn',
  // Other languages with fallback
  'fr.hamidullah': 'en',
  'de.bubenheim': 'en',
  'id.indonesian': 'id',
  'tr.diyanet': 'tr',
  'ru.kuliev': 'en',
  'ml.cheriyamundam': 'en',
  'ta.tamil': 'en',
  'hi.hindi': 'en',
};

// Tafseer cache to avoid repeated API calls
const tafseerCache = new Map();

// Fetch tafseer from API with retry mechanism
export const fetchTafseer = async (surahId, ayahNumber, tafseerSource, retryCount = 2) => {
  const source = TAFSEER_SOURCES[tafseerSource];
  if (!source) {
    throw new Error('Invalid tafseer source');
  }

  const cacheKey = `${tafseerSource}-${surahId}-${ayahNumber}`;

  // Check cache first
  if (tafseerCache.has(cacheKey)) {
    return tafseerCache.get(cacheKey);
  }

  // Helper function to attempt fetch with retry
  const attemptFetch = async (attempt = 0) => {
    try {
      // Using quran.com API for tafseer
      const response = await fetch(
        `https://api.quran.com/api/v4/tafsirs/${source.apiId}/by_ayah/${surahId}:${ayahNumber}`,
        {
          headers: { 'Accept': 'application/json' },
          signal: AbortSignal.timeout(10000) // 10 second timeout
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      const result = {
        text: data.tafsir?.text || 'Tafseer not available for this verse.',
        source: source.name,
        language: source.language,
        direction: source.direction,
        resourceName: data.tafsir?.resource_name || source.name,
      };

      // Cache successful result
      tafseerCache.set(cacheKey, result);
      return result;

    } catch (error) {
      console.error(`Tafseer fetch attempt ${attempt + 1} failed:`, error.message);

      // Retry if attempts remaining
      if (attempt < retryCount) {
        await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1))); // Exponential backoff
        return attemptFetch(attempt + 1);
      }

      throw error;
    }
  };

  try {
    return await attemptFetch();
  } catch (error) {
    console.error('All tafseer fetch attempts failed:', error);

    // Try alternative API as fallback
    const alternativeResult = await fetchTafseerAlternative(surahId, ayahNumber, source.language);
    if (alternativeResult && alternativeResult.text) {
      return alternativeResult;
    }

    // Return fallback content
    return {
      text: source.language === 'ur'
        ? 'اس آیت کی تفسیر لوڈ کرنے میں خرابی ہوئی۔ براہ کرم دوبارہ کوشش کریں۔'
        : source.language === 'ar'
        ? 'حدث خطأ في تحميل التفسير. يرجى المحاولة مرة أخرى.'
        : 'Failed to load tafseer. Please try again.',
      source: source.name,
      language: source.language,
      direction: source.direction,
      error: true,
    };
  }
};

// Alternative tafseer API (alquran.cloud)
export const fetchTafseerAlternative = async (surahId, ayahNumber, language = 'en') => {
  const editions = {
    'en': 'en.maududi',
    'ur': 'ur.maududi',
  };

  const edition = editions[language] || 'en.maududi';

  try {
    const response = await fetch(
      `https://api.alquran.cloud/v1/ayah/${surahId}:${ayahNumber}/${edition}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch');
    }

    const data = await response.json();
    return {
      text: data.data?.text || 'Not available',
      source: 'Tafheem ul Quran',
      language,
      direction: language === 'ur' || language === 'ar' ? 'rtl' : 'ltr',
    };
  } catch (error) {
    return null;
  }
};

export default TAFSEER_SOURCES;
