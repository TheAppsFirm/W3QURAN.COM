/**
 * Quranic Arabic Dependency Treebank Data
 * Based on corpus.quran.com linguistic analysis
 *
 * Premium Feature: Free for Surah Al-Fatiha, Premium for others
 * Multi-language Support: en, ur, hi, bn, tr, id
 */

// Part of Speech Tags with colors and multi-language labels
export const POS_TAGS = {
  N: {
    color: '#22C55E', bgColor: '#22C55E20',
    labels: { en: 'Noun', ar: 'اسم', ur: 'اسم', hi: 'संज्ञा', bn: 'বিশেষ্য', tr: 'İsim', id: 'Kata Benda' }
  },
  PN: {
    color: '#10B981', bgColor: '#10B98120',
    labels: { en: 'Proper Noun', ar: 'اسم علم', ur: 'اسم خاص', hi: 'व्यक्तिवाचक संज्ञा', bn: 'নামবাচক বিশেষ্য', tr: 'Özel İsim', id: 'Kata Benda Khusus' }
  },
  V: {
    color: '#EF4444', bgColor: '#EF444420',
    labels: { en: 'Verb', ar: 'فعل', ur: 'فعل', hi: 'क्रिया', bn: 'ক্রিয়া', tr: 'Fiil', id: 'Kata Kerja' }
  },
  PRON: {
    color: '#A855F7', bgColor: '#A855F720',
    labels: { en: 'Pronoun', ar: 'ضمير', ur: 'ضمیر', hi: 'सर्वनाम', bn: 'সর্বনাম', tr: 'Zamir', id: 'Kata Ganti' }
  },
  P: {
    color: '#F59E0B', bgColor: '#F59E0B20',
    labels: { en: 'Preposition', ar: 'حرف جر', ur: 'حرف جار', hi: 'संबंधसूचक', bn: 'অব্যয়', tr: 'Edat', id: 'Kata Depan' }
  },
  REL: {
    color: '#3B82F6', bgColor: '#3B82F620',
    labels: { en: 'Relative', ar: 'اسم موصول', ur: 'اسم موصول', hi: 'संबंधवाचक', bn: 'সম্বন্ধবাচক', tr: 'İlgi Zamiri', id: 'Kata Penghubung' }
  },
  DEM: {
    color: '#6366F1', bgColor: '#6366F120',
    labels: { en: 'Demonstrative', ar: 'اسم إشارة', ur: 'اسم اشارہ', hi: 'निश्चयवाचक', bn: 'নির্দেশক', tr: 'İşaret Sıfatı', id: 'Kata Tunjuk' }
  },
  CONJ: {
    color: '#F97316', bgColor: '#F9731620',
    labels: { en: 'Conjunction', ar: 'حرف عطف', ur: 'حرف عطف', hi: 'समुच्चयबोधक', bn: 'সংযোজক', tr: 'Bağlaç', id: 'Kata Sambung' }
  },
  ADJ: {
    color: '#06B6D4', bgColor: '#06B6D420',
    labels: { en: 'Adjective', ar: 'صفة', ur: 'صفت', hi: 'विशेषण', bn: 'বিশেষণ', tr: 'Sıfat', id: 'Kata Sifat' }
  },
  DET: {
    color: '#64748B', bgColor: '#64748B20',
    labels: { en: 'Determiner', ar: 'أداة تعريف', ur: 'حرف تعریف', hi: 'निर्धारक', bn: 'নির্ধারক', tr: 'Belirteç', id: 'Penentu' }
  },
  NEG: {
    color: '#DC2626', bgColor: '#DC262620',
    labels: { en: 'Negative', ar: 'أداة نفي', ur: 'حرف نفی', hi: 'नकारात्मक', bn: 'নেতিবাচক', tr: 'Olumsuzluk', id: 'Kata Negatif' }
  },
  INTG: {
    color: '#7C3AED', bgColor: '#7C3AED20',
    labels: { en: 'Interrogative', ar: 'أداة استفهام', ur: 'حرف استفہام', hi: 'प्रश्नवाचक', bn: 'প্রশ্নবোধক', tr: 'Soru', id: 'Kata Tanya' }
  },
  VOC: {
    color: '#EC4899', bgColor: '#EC489920',
    labels: { en: 'Vocative', ar: 'أداة نداء', ur: 'حرف ندا', hi: 'संबोधन', bn: 'সম্বোধন', tr: 'Ünlem', id: 'Kata Seru' }
  },
  EMPH: {
    color: '#14B8A6', bgColor: '#14B8A620',
    labels: { en: 'Emphatic', ar: 'أداة توكيد', ur: 'حرف تاکید', hi: 'बलाघात', bn: 'জোরদার', tr: 'Vurgulayıcı', id: 'Penegas' }
  },
  PART: {
    color: '#78716C', bgColor: '#78716C20',
    labels: { en: 'Particle', ar: 'حرف', ur: 'حرف', hi: 'अव्यय', bn: 'অব্যয়', tr: 'Edat', id: 'Partikel' }
  },
  ACC: {
    color: '#84CC16', bgColor: '#84CC1620',
    labels: { en: 'Accusative', ar: 'أداة نصب', ur: 'حرف نصب', hi: 'कर्म कारक', bn: 'কর্ম কারক', tr: 'Belirtme', id: 'Akusatif' }
  },
};

// Grammar Roles with multi-language support
export const GRAMMAR_ROLES = {
  subj: { labels: { en: 'Subject', ar: 'فاعل', ur: 'فاعل', hi: 'कर्ता', bn: 'কর্তা', tr: 'Özne', id: 'Subjek' } },
  obj: { labels: { en: 'Object', ar: 'مفعول به', ur: 'مفعول', hi: 'कर्म', bn: 'কর্ম', tr: 'Nesne', id: 'Objek' } },
  pred: { labels: { en: 'Predicate', ar: 'خبر', ur: 'خبر', hi: 'विधेय', bn: 'বিধেয়', tr: 'Yüklem', id: 'Predikat' } },
  mudhaf: { labels: { en: 'Possessed', ar: 'مضاف', ur: 'مضاف', hi: 'संबंधित', bn: 'সম্বন্ধিত', tr: 'Tamlanan', id: 'Yang Dimiliki' } },
  mudhafIlayh: { labels: { en: 'Possessor', ar: 'مضاف إليه', ur: 'مضاف الیہ', hi: 'स्वामी', bn: 'মালিক', tr: 'Tamlayan', id: 'Pemilik' } },
  sifah: { labels: { en: 'Adjective', ar: 'صفة', ur: 'صفت', hi: 'विशेषण', bn: 'বিশেষণ', tr: 'Sıfat', id: 'Kata Sifat' } },
  mawsuf: { labels: { en: 'Described', ar: 'موصوف', ur: 'موصوف', hi: 'वर्णित', bn: 'বর্ণিত', tr: 'Nitelenen', id: 'Yang Dijelaskan' } },
  jarr: { labels: { en: 'Genitive', ar: 'مجرور', ur: 'مجرور', hi: 'संबंध कारक', bn: 'সম্বন্ধ', tr: 'Tamlayan', id: 'Genitif' } },
  majrur: { labels: { en: 'Object of Prep', ar: 'اسم مجرور', ur: 'اسم مجرور', hi: 'संबंधसूचक का कर्म', bn: 'অব্যয়ের কর্ম', tr: 'Edat Nesnesi', id: 'Objek Preposisi' } },
  hal: { labels: { en: 'State', ar: 'حال', ur: 'حال', hi: 'अवस्था', bn: 'অবস্থা', tr: 'Hal', id: 'Keadaan' } },
  tamyiz: { labels: { en: 'Specification', ar: 'تمييز', ur: 'تمیز', hi: 'विशेषता', bn: 'বিশেষতা', tr: 'Belirtme', id: 'Spesifikasi' } },
  badal: { labels: { en: 'Substitute', ar: 'بدل', ur: 'بدل', hi: 'प्रतिस्थापन', bn: 'বদল', tr: 'Bedel', id: 'Pengganti' } },
  atf: { labels: { en: 'Conjunction', ar: 'معطوف', ur: 'معطوف', hi: 'समुच्चय', bn: 'সংযোজক', tr: 'Bağlaç', id: 'Konjungsi' } },
  silah: { labels: { en: 'Relative Clause', ar: 'صلة الموصول', ur: 'صلہ موصول', hi: 'संबंध उपवाक्य', bn: 'সম্বন্ধসূচক বাক্যাংশ', tr: 'İlgi Cümlesi', id: 'Klausa Relatif' } },
  verb: { labels: { en: 'Verb', ar: 'فعل', ur: 'فعل', hi: 'क्रिया', bn: 'ক্রিয়া', tr: 'Fiil', id: 'Kata Kerja' } },
};

// Harakat (Diacritical Marks) with multi-language explanations
export const HARAKAT = {
  fatha: {
    symbol: 'ـَ',
    unicode: '\u064E',
    names: { en: 'Fatha', ar: 'فَتْحَة', ur: 'زَبَر', hi: 'फ़तहा', bn: 'ফাতহা', tr: 'Fetha', id: 'Fathah' },
    sound: 'a',
    descriptions: {
      en: 'Short "a" sound, like "a" in "cat"',
      ur: 'چھوٹی "ا" کی آواز، جیسے "اَب" میں',
      hi: 'छोटी "अ" की आवाज़',
      bn: 'সংক্ষিপ্ত "আ" ধ্বনি',
    },
    color: '#EF4444',
  },
  kasra: {
    symbol: 'ـِ',
    unicode: '\u0650',
    names: { en: 'Kasra', ar: 'كَسْرَة', ur: 'زیر', hi: 'कसरा', bn: 'কাসরা', tr: 'Kesre', id: 'Kasrah' },
    sound: 'i',
    descriptions: {
      en: 'Short "i" sound, like "i" in "sit"',
      ur: 'چھوٹی "ای" کی آواز، جیسے "اِس" میں',
      hi: 'छोटी "इ" की आवाज़',
      bn: 'সংক্ষিপ্ত "ই" ধ্বনি',
    },
    color: '#22C55E',
  },
  damma: {
    symbol: 'ـُ',
    unicode: '\u064F',
    names: { en: 'Damma', ar: 'ضَمَّة', ur: 'پیش', hi: 'ज़म्मा', bn: 'দাম্মা', tr: 'Ötre', id: 'Dhammah' },
    sound: 'u',
    descriptions: {
      en: 'Short "u" sound, like "u" in "put"',
      ur: 'چھوٹی "او" کی آواز، جیسے "اُس" میں',
      hi: 'छोटी "उ" की आवाज़',
      bn: 'সংক্ষিপ্ত "উ" ধ্বনি',
    },
    color: '#3B82F6',
  },
  sukun: {
    symbol: 'ـْ',
    unicode: '\u0652',
    names: { en: 'Sukun', ar: 'سُكُون', ur: 'جزم/سکون', hi: 'सुकून', bn: 'সুকুন', tr: 'Cezm', id: 'Sukun' },
    sound: '(none)',
    descriptions: {
      en: 'No vowel - consonant only, letter is "silent"',
      ur: 'کوئی حرکت نہیں - صرف حرف، ساکن',
      hi: 'कोई स्वर नहीं - केवल व्यंजन',
      bn: 'কোন স্বর নেই - শুধু ব্যঞ্জন',
    },
    color: '#64748B',
  },
  shadda: {
    symbol: 'ـّ',
    unicode: '\u0651',
    names: { en: 'Shadda', ar: 'شَدَّة', ur: 'تشدید', hi: 'शद्दा', bn: 'শাদ্দা', tr: 'Şedde', id: 'Tasydid' },
    sound: '(double)',
    descriptions: {
      en: 'Doubles the letter - pronounced twice with emphasis',
      ur: 'حرف کو دوگنا کرتا ہے - زور سے دو بار پڑھا جاتا ہے',
      hi: 'अक्षर को दोगुना करता है',
      bn: 'অক্ষর দ্বিগুণ করে',
    },
    color: '#A855F7',
  },
  fathatan: {
    symbol: 'ـً',
    unicode: '\u064B',
    names: { en: 'Fathatan', ar: 'فَتْحَتَيْن', ur: 'دو زبر', hi: 'फ़तहतैन', bn: 'ফাতহাতাইন', tr: 'Tenvin Fetha', id: 'Fathatain' },
    sound: 'an',
    descriptions: {
      en: 'Double fatha - "an" sound (nunation)',
      ur: 'دوہری فتحہ - "اَن" کی آواز (تنوین)',
      hi: 'दोहरा फ़तहा - "अन" की आवाज़',
      bn: 'দ্বিগুণ ফাতহা - "আন" ধ্বনি',
    },
    color: '#EF4444',
  },
  kasratan: {
    symbol: 'ـٍ',
    unicode: '\u064D',
    names: { en: 'Kasratan', ar: 'كَسْرَتَيْن', ur: 'دو زیر', hi: 'कसरतैन', bn: 'কাসরাতাইন', tr: 'Tenvin Kesre', id: 'Kasratain' },
    sound: 'in',
    descriptions: {
      en: 'Double kasra - "in" sound (nunation)',
      ur: 'دوہری کسرہ - "اِن" کی آواز (تنوین)',
      hi: 'दोहरा कसरा - "इन" की आवाज़',
      bn: 'দ্বিগুণ কাসরা - "ইন" ধ্বনি',
    },
    color: '#22C55E',
  },
  dammatan: {
    symbol: 'ـٌ',
    unicode: '\u064C',
    names: { en: 'Dammatan', ar: 'ضَمَّتَيْن', ur: 'دو پیش', hi: 'ज़म्मतैन', bn: 'দাম্মাতাইন', tr: 'Tenvin Ötre', id: 'Dhammatain' },
    sound: 'un',
    descriptions: {
      en: 'Double damma - "un" sound (nunation)',
      ur: 'دوہری ضمہ - "اُن" کی آواز (تنوین)',
      hi: 'दोहरा ज़म्मा - "उन" की आवाज़',
      bn: 'দ্বিগুণ দাম্মা - "উন" ধ্বনি',
    },
    color: '#3B82F6',
  },
  maddah: {
    symbol: 'ـٓ',
    unicode: '\u0653',
    names: { en: 'Maddah', ar: 'مَدَّة', ur: 'مدّہ', hi: 'मद्दा', bn: 'মাদ্দা', tr: 'Medde', id: 'Maddah' },
    sound: 'aa',
    descriptions: {
      en: 'Prolongation mark - extend the vowel',
      ur: 'کھینچنے کی علامت - آواز کو لمبا کریں',
      hi: 'दीर्घ स्वर चिह्न',
      bn: 'দীর্ঘায়ন চিহ্ন',
    },
    color: '#F59E0B',
  },
  alif_khanjariya: {
    symbol: 'ـٰ',
    unicode: '\u0670',
    names: { en: 'Alif Khanjariya', ar: 'ألف خنجرية', ur: 'کھڑی زبر', hi: 'अलिफ़ खंजरिया', bn: 'আলিফ খাঞ্জারিয়া', tr: 'Elif-i Maksure', id: 'Alif Khanjariyah' },
    sound: 'aa',
    descriptions: {
      en: 'Superscript alif - represents long "aa" sound',
      ur: 'اوپر والا الف - لمبی "آ" کی آواز',
      hi: 'ऊपरी अलिफ़ - लंबी "आ" की आवाज़',
      bn: 'সুপারস্ক্রিপ্ট আলিফ - দীর্ঘ "আ" ধ্বনি',
    },
    color: '#F59E0B',
  },
};

// Helper to detect haraka in a character
export const detectHaraka = (char) => {
  const harakaMap = {
    '\u064E': 'fatha',
    '\u0650': 'kasra',
    '\u064F': 'damma',
    '\u0652': 'sukun',
    '\u0651': 'shadda',
    '\u064B': 'fathatan',
    '\u064D': 'kasratan',
    '\u064C': 'dammatan',
    '\u0653': 'maddah',
    '\u0670': 'alif_khanjariya',
  };
  return harakaMap[char] || null;
};

// Parse Arabic word into letters with their harakat
export const parseWordLetters = (arabicWord) => {
  const letters = [];
  let i = 0;

  while (i < arabicWord.length) {
    const char = arabicWord[i];
    const charCode = char.charCodeAt(0);

    // Check if it's an Arabic letter (not a diacritic)
    if (charCode >= 0x0621 && charCode <= 0x064A) {
      const letter = { base: char, harakat: [] };

      // Collect following diacritics
      i++;
      while (i < arabicWord.length) {
        const nextChar = arabicWord[i];
        const haraka = detectHaraka(nextChar);
        if (haraka) {
          letter.harakat.push(haraka);
          i++;
        } else {
          break;
        }
      }

      letters.push(letter);
    } else {
      i++;
    }
  }

  return letters;
};

// Case endings with multi-language support
export const CASES = {
  nom: { marker: 'ُ', labels: { en: 'Nominative', ar: 'مرفوع', ur: 'مرفوع', hi: 'कर्ता कारक', bn: 'কর্তৃকারক', tr: 'Yalın', id: 'Nominatif' } },
  acc: { marker: 'َ', labels: { en: 'Accusative', ar: 'منصوب', ur: 'منصوب', hi: 'कर्म कारक', bn: 'কর্মকারক', tr: 'Belirtme', id: 'Akusatif' } },
  gen: { marker: 'ِ', labels: { en: 'Genitive', ar: 'مجرور', ur: 'مجرور', hi: 'संबंध कारक', bn: 'সম্বন্ধ কারক', tr: 'Tamlayan', id: 'Genitif' } },
  jzm: { marker: 'ْ', labels: { en: 'Jussive', ar: 'مجزوم', ur: 'مجزوم', hi: 'विधिलिंग', bn: 'অনুজ্ঞা', tr: 'Emir Kipi', id: 'Jusif' } },
};

// Feature key translations
export const FEATURE_KEYS = {
  type: { en: 'type', ur: 'قسم', hi: 'प्रकार', bn: 'প্রকার', tr: 'tür', id: 'jenis', ar: 'نوع' },
  definiteness: { en: 'definiteness', ur: 'تعریف', hi: 'निश्चितता', bn: 'নির্দিষ্টতা', tr: 'belirlilik', id: 'kepastian', ar: 'تعريف' },
  form: { en: 'form', ur: 'صیغہ', hi: 'रूप', bn: 'রূপ', tr: 'biçim', id: 'bentuk', ar: 'صيغة' },
  number: { en: 'number', ur: 'عدد', hi: 'वचन', bn: 'বচন', tr: 'sayı', id: 'jumlah', ar: 'عدد' },
  gender: { en: 'gender', ur: 'جنس', hi: 'लिंग', bn: 'লিঙ্গ', tr: 'cinsiyet', id: 'jenis kelamin', ar: 'جنس' },
  person: { en: 'person', ur: 'شخص', hi: 'पुरुष', bn: 'পুরুষ', tr: 'kişi', id: 'orang', ar: 'شخص' },
  tense: { en: 'tense', ur: 'زمانہ', hi: 'काल', bn: 'কাল', tr: 'zaman', id: 'waktu', ar: 'زمن' },
  mood: { en: 'mood', ur: 'صیغہ', hi: 'भाव', bn: 'ভাব', tr: 'kip', id: 'modus', ar: 'صيغة' },
  voice: { en: 'voice', ur: 'آواز', hi: 'वाच्य', bn: 'বাচ্য', tr: 'çatı', id: 'diatesis', ar: 'صوت' },
};

// Helper to get translated feature key
export const getFeatureKey = (key, lang = 'en') => {
  return FEATURE_KEYS[key]?.[lang] || FEATURE_KEYS[key]?.en || key;
};

// UI Labels for different languages
export const UI_LABELS = {
  en: {
    grammarAnalysis: 'Grammar Analysis',
    partOfSpeech: 'Part of Speech',
    root: 'Root',
    pattern: 'Pattern',
    case: 'Case',
    grammarRole: 'Grammar Role',
    features: 'Features',
    explanation: 'Explanation',
    relatesTo: 'Relates to',
    dependencyStructure: 'Dependency Structure',
    tapForDetails: 'Tap any word for detailed morphological analysis',
    posLegend: 'POS Tag Legend',
    premium: 'Grammar Analysis is Premium',
    premiumDesc: 'Get detailed morphological analysis and dependency trees for all 114 surahs.',
    tryFree: 'Try free on Surah Al-Fatiha!',
    upgrade: 'Upgrade to Premium',
    maybeLater: 'Maybe Later',
    comingSoon: 'Grammar Data Coming Soon',
    comingSoonDesc: 'Treebank analysis for this ayah is being prepared.',
    close: 'Close',
    // New labels for tafseer and selectors
    tafseer: 'Tafseer',
    translation: 'Translation',
    selectTranslation: 'Select Translation',
    selectTafseer: 'Select Tafseer',
    grammarTab: 'Grammar',
    tafseerTab: 'Tafseer',
    loading: 'Loading...',
    explore: 'Explore Ayah',
    // Harakat labels
    harakat: 'Diacritical Marks (Harakat)',
    letterBreakdown: 'Letter-by-Letter Analysis',
    letter: 'Letter',
    pronunciation: 'Pronunciation',
    morphology: 'Morphology',
    prefix: 'Prefix',
    rootLetters: 'Root Letters',
    suffix: 'Suffix',
    verbForm: 'Verb Form',
    pronounAttached: 'Attached Pronoun',
    irabReason: 'Grammatical Reason',
    // Help/Guide text
    harakatHelp: 'Harakat are vowel marks that show how to pronounce each letter. Fatha (a), Kasra (i), Damma (u) are short vowels. Shadda doubles a letter.',
    dependencyHelp: 'This diagram shows how words relate to each other. Lines connect related words, and labels show the relationship type (e.g., صفة means adjective describing a noun).',
    grammarBenefit: 'Understanding grammar helps you comprehend the deeper meaning of Quranic verses and improves your Arabic reading.',
    tapWordHelp: 'Tap any word above to see its detailed breakdown',
    howToRead: 'How to Read',
    whyLearn: 'Why Learn This?',
    // Advanced features labels
    rootFamily: 'Root Word Family',
    rootFamilyHelp: 'All words in Quran derived from this root. Learn one root, understand many words!',
    wordFrequency: 'Word in Quran',
    appearsIn: 'Appears in',
    times: 'times',
    surahs: 'surahs',
    irabReason: 'Grammar Reason (I\'rab)',
    whyThisCase: 'Why this case ending?',
    balagha: 'Rhetoric & Eloquence',
    balaghaHelp: 'The miraculous choice of words in Quran',
    whyThisWord: 'Why this specific word?',
    linguisticMiracle: 'Linguistic Miracle',
    miracleHelp: 'Why no other word could replace this',
    tajweedTips: 'Tajweed Rules',
    recitationHelp: 'How to recite this word correctly',
    memoryHook: 'Memory Hook',
    memoryHelp: 'Tips to memorize this word',
    verbConjugation: 'Verb Conjugation',
    compareTranslations: 'Scholar Translations',
    differentViews: 'How different scholars translated this',
    similarPatterns: 'Similar Patterns',
    otherExamples: 'Other verses with same structure',
    deepDive: 'Deep Dive Analysis',
    clickToExplore: 'Click to explore',
    surah: 'Surah',
    ayah: 'Ayah',
    ontology: 'Concept Map',
    viewOntology: 'View Quranic Concepts',
  },
  ur: {
    grammarAnalysis: 'قواعد کا تجزیہ',
    partOfSpeech: 'قسم کلام',
    root: 'مادہ',
    pattern: 'وزن',
    case: 'اعراب',
    grammarRole: 'گرامر کا کردار',
    features: 'خصوصیات',
    explanation: 'وضاحت',
    relatesTo: 'تعلق',
    dependencyStructure: 'ترکیبی ڈھانچہ',
    tapForDetails: 'تفصیلی صرفی تجزیے کے لیے کسی بھی لفظ پر ٹیپ کریں',
    posLegend: 'اقسام کلام',
    premium: 'قواعد کا تجزیہ پریمیم ہے',
    premiumDesc: 'تمام 114 سورتوں کے لیے تفصیلی صرفی تجزیہ اور انحصاری درخت حاصل کریں۔',
    tryFree: 'سورۃ الفاتحہ پر مفت آزمائیں!',
    upgrade: 'پریمیم میں اپ گریڈ کریں',
    maybeLater: 'بعد میں',
    comingSoon: 'قواعد کا ڈیٹا جلد آ رہا ہے',
    comingSoonDesc: 'اس آیت کا تجزیہ تیار کیا جا رہا ہے۔',
    close: 'بند کریں',
    // New labels for tafseer and selectors
    tafseer: 'تفسیر',
    translation: 'ترجمہ',
    selectTranslation: 'ترجمہ منتخب کریں',
    selectTafseer: 'تفسیر منتخب کریں',
    grammarTab: 'قواعد',
    tafseerTab: 'تفسیر',
    loading: 'لوڈ ہو رہا ہے...',
    explore: 'آیت دریافت کریں',
    // Harakat labels
    harakat: 'حرکات (زبر، زیر، پیش)',
    letterBreakdown: 'حرف بہ حرف تجزیہ',
    letter: 'حرف',
    pronunciation: 'تلفظ',
    morphology: 'صرف',
    prefix: 'سابقہ',
    rootLetters: 'حروف اصلی',
    suffix: 'لاحقہ',
    verbForm: 'باب',
    pronounAttached: 'ضمیر متصل',
    irabReason: 'وجہ اعراب',
    // Help/Guide text
    harakatHelp: 'حرکات وہ علامات ہیں جو ہر حرف کا تلفظ بتاتی ہیں۔ زَبَر (اَ)، زیر (اِ)، پیش (اُ) چھوٹی آوازیں ہیں۔ تشدید حرف کو دوگنا کرتی ہے۔',
    dependencyHelp: 'یہ تصویر دکھاتی ہے کہ الفاظ آپس میں کیسے جڑے ہیں۔ لکیریں متعلقہ الفاظ کو جوڑتی ہیں، اور لیبل رشتے کی قسم دکھاتے ہیں (مثلاً صفت کا مطلب ہے اسم کی صفت)۔',
    grammarBenefit: 'قواعد سمجھنے سے قرآنی آیات کا گہرا مفہوم سمجھنے میں مدد ملتی ہے اور عربی پڑھنے میں بہتری آتی ہے۔',
    tapWordHelp: 'تفصیلی تجزیے کے لیے اوپر کسی بھی لفظ پر ٹیپ کریں',
    howToRead: 'کیسے پڑھیں',
    whyLearn: 'کیوں سیکھیں؟',
    // Advanced features labels
    rootFamily: 'مادے کا خاندان',
    rootFamilyHelp: 'قرآن میں اس مادے سے بنے تمام الفاظ۔ ایک مادہ سیکھیں، بہت سے الفاظ سمجھیں!',
    wordFrequency: 'قرآن میں لفظ',
    appearsIn: 'آیا ہے',
    times: 'بار',
    surahs: 'سورتوں میں',
    irabReason: 'وجہ اعراب',
    whyThisCase: 'یہ اعراب کیوں؟',
    balagha: 'بلاغت و فصاحت',
    balaghaHelp: 'قرآن میں الفاظ کا معجزانہ انتخاب',
    whyThisWord: 'یہی لفظ کیوں؟',
    linguisticMiracle: 'لسانی اعجاز',
    miracleHelp: 'اس لفظ کی جگہ کوئی اور لفظ کیوں نہیں آ سکتا',
    tajweedTips: 'تجوید کے قواعد',
    recitationHelp: 'اس لفظ کو صحیح طریقے سے کیسے پڑھیں',
    memoryHook: 'یاد رکھنے کا طریقہ',
    memoryHelp: 'اس لفظ کو یاد کرنے کے لیے مددگار نکات',
    verbConjugation: 'فعل کی گردان',
    compareTranslations: 'علماء کے تراجم',
    differentViews: 'مختلف علماء نے کیسے ترجمہ کیا',
    similarPatterns: 'ملتے جلتے نمونے',
    otherExamples: 'اسی ڈھانچے والی دیگر آیات',
    deepDive: 'گہرا تجزیہ',
    clickToExplore: 'دریافت کرنے کے لیے کلک کریں',
    surah: 'سورۃ',
    ayah: 'آیت',
    ontology: 'قرآنی تصورات',
    viewOntology: 'قرآنی تصورات دیکھیں',
  },
  hi: {
    grammarAnalysis: 'व्याकरण विश्लेषण',
    partOfSpeech: 'शब्द भेद',
    root: 'मूल',
    pattern: 'प्रतिमान',
    case: 'कारक',
    grammarRole: 'व्याकरणिक भूमिका',
    features: 'विशेषताएं',
    explanation: 'व्याख्या',
    relatesTo: 'संबंधित',
    dependencyStructure: 'निर्भरता संरचना',
    tapForDetails: 'विस्तृत विश्लेषण के लिए किसी भी शब्द पर टैप करें',
    posLegend: 'शब्द भेद सूची',
    premium: 'व्याकरण विश्लेषण प्रीमियम है',
    premiumDesc: 'सभी 114 सूरतों के लिए विस्तृत रूपात्मक विश्लेषण प्राप्त करें।',
    tryFree: 'सूरह अल-फातिहा पर मुफ्त आज़माएं!',
    upgrade: 'प्रीमियम में अपग्रेड करें',
    maybeLater: 'बाद में',
    comingSoon: 'व्याकरण डेटा जल्द आ रहा है',
    comingSoonDesc: 'इस आयत का विश्लेषण तैयार किया जा रहा है।',
    close: 'बंद करें',
    tafseer: 'तफ़सीर',
    translation: 'अनुवाद',
    selectTranslation: 'अनुवाद चुनें',
    selectTafseer: 'तफ़सीर चुनें',
    grammarTab: 'व्याकरण',
    tafseerTab: 'तफ़सीर',
    loading: 'लोड हो रहा है...',
    explore: 'आयत खोजें',
    harakat: 'स्वर चिह्न (हरकात)',
    letterBreakdown: 'अक्षर-दर-अक्षर विश्लेषण',
    letter: 'अक्षर',
    pronunciation: 'उच्चारण',
    morphology: 'रूपविज्ञान',
    prefix: 'उपसर्ग',
    rootLetters: 'मूल अक्षर',
    suffix: 'प्रत्यय',
    verbForm: 'क्रिया रूप',
    pronounAttached: 'संलग्न सर्वनाम',
    irabReason: 'व्याकरणिक कारण',
    harakatHelp: 'हरकात वो चिह्न हैं जो बताते हैं कि हर अक्षर कैसे बोला जाए। फ़तहा (अ), कसरा (इ), ज़म्मा (उ) छोटी स्वर हैं।',
    dependencyHelp: 'यह चित्र दिखाता है कि शब्द आपस में कैसे जुड़े हैं। रेखाएं संबंधित शब्दों को जोड़ती हैं।',
    grammarBenefit: 'व्याकरण समझने से क़ुरआनी आयतों का गहरा अर्थ समझने में मदद मिलती है।',
    tapWordHelp: 'विस्तृत विश्लेषण के लिए किसी भी शब्द पर टैप करें',
    howToRead: 'कैसे पढ़ें',
    whyLearn: 'क्यों सीखें?',
    surah: 'सूरह',
    ayah: 'आयत',
    ontology: 'क़ुरआनी अवधारणाएं',
    viewOntology: 'क़ुरआनी अवधारणाएं देखें',
  },
  bn: {
    grammarAnalysis: 'ব্যাকরণ বিশ্লেষণ',
    partOfSpeech: 'পদ প্রকার',
    root: 'মূল',
    pattern: 'বিন্যাস',
    case: 'কারক',
    grammarRole: 'ব্যাকরণিক ভূমিকা',
    features: 'বৈশিষ্ট্য',
    explanation: 'ব্যাখ্যা',
    relatesTo: 'সম্পর্কিত',
    dependencyStructure: 'নির্ভরতা কাঠামো',
    tapForDetails: 'বিস্তারিত বিশ্লেষণের জন্য যেকোনো শব্দে ট্যাপ করুন',
    posLegend: 'পদ প্রকার তালিকা',
    premium: 'ব্যাকরণ বিশ্লেষণ প্রিমিয়াম',
    premiumDesc: 'সমস্ত ১১৪ সূরার জন্য বিস্তারিত রূপতাত্ত্বিক বিশ্লেষণ পান।',
    tryFree: 'সূরা আল-ফাতিহায় বিনামূল্যে চেষ্টা করুন!',
    upgrade: 'প্রিমিয়ামে আপগ্রেড করুন',
    maybeLater: 'পরে',
    comingSoon: 'ব্যাকরণ ডেটা শীঘ্রই আসছে',
    comingSoonDesc: 'এই আয়াতের বিশ্লেষণ প্রস্তুত করা হচ্ছে।',
    close: 'বন্ধ করুন',
    tafseer: 'তাফসীর',
    translation: 'অনুবাদ',
    selectTranslation: 'অনুবাদ নির্বাচন করুন',
    selectTafseer: 'তাফসীর নির্বাচন করুন',
    grammarTab: 'ব্যাকরণ',
    tafseerTab: 'তাফসীর',
    loading: 'লোড হচ্ছে...',
    explore: 'আয়াত অন্বেষণ করুন',
    harakat: 'স্বরচিহ্ন (হারাকাত)',
    letterBreakdown: 'অক্ষর-দ্বারা-অক্ষর বিশ্লেষণ',
    letter: 'অক্ষর',
    pronunciation: 'উচ্চারণ',
    morphology: 'রূপতত্ত্ব',
    prefix: 'উপসর্গ',
    rootLetters: 'মূল অক্ষর',
    suffix: 'প্রত্যয়',
    verbForm: 'ক্রিয়া রূপ',
    pronounAttached: 'সংযুক্ত সর্বনাম',
    irabReason: 'ব্যাকরণগত কারণ',
    harakatHelp: 'হারাকাত হলো সেই চিহ্ন যা প্রতিটি অক্ষর কীভাবে উচ্চারণ করতে হয় তা দেখায়।',
    dependencyHelp: 'এই চিত্র দেখায় শব্দগুলো পরস্পর কীভাবে সম্পর্কিত।',
    grammarBenefit: 'ব্যাকরণ বোঝা কুরআনের আয়াতের গভীর অর্থ বুঝতে সাহায্য করে।',
    tapWordHelp: 'বিস্তারিত বিশ্লেষণের জন্য যেকোনো শব্দে ট্যাপ করুন',
    howToRead: 'কীভাবে পড়বেন',
    whyLearn: 'কেন শিখবেন?',
    surah: 'সূরা',
    ayah: 'আয়াত',
    ontology: 'কুরআনিক ধারণা',
    viewOntology: 'কুরআনিক ধারণা দেখুন',
  },
  tr: {
    grammarAnalysis: 'Dilbilgisi Analizi',
    partOfSpeech: 'Sözcük Türü',
    root: 'Kök',
    pattern: 'Kalıp',
    case: 'Durum',
    grammarRole: 'Dilbilgisi Rolü',
    features: 'Özellikler',
    explanation: 'Açıklama',
    relatesTo: 'İlişkili',
    dependencyStructure: 'Bağımlılık Yapısı',
    tapForDetails: 'Detaylı analiz için herhangi bir kelimeye dokunun',
    posLegend: 'Sözcük Türü Açıklaması',
    premium: 'Dilbilgisi Analizi Premium',
    premiumDesc: 'Tüm 114 sure için detaylı morfolojik analiz alın.',
    tryFree: 'Fatiha Suresinde ücretsiz deneyin!',
    upgrade: 'Premium\'a Yükselt',
    maybeLater: 'Daha Sonra',
    comingSoon: 'Dilbilgisi Verisi Yakında',
    comingSoonDesc: 'Bu ayet için analiz hazırlanıyor.',
    close: 'Kapat',
    tafseer: 'Tefsir',
    translation: 'Çeviri',
    selectTranslation: 'Çeviri Seçin',
    selectTafseer: 'Tefsir Seçin',
    grammarTab: 'Dilbilgisi',
    tafseerTab: 'Tefsir',
    loading: 'Yükleniyor...',
    explore: 'Ayeti Keşfet',
    harakat: 'Hareke İşaretleri',
    letterBreakdown: 'Harf-Harf Analiz',
    letter: 'Harf',
    pronunciation: 'Telaffuz',
    morphology: 'Morfoloji',
    prefix: 'Ön Ek',
    rootLetters: 'Kök Harfler',
    suffix: 'Son Ek',
    verbForm: 'Fiil Kalıbı',
    pronounAttached: 'Ekli Zamir',
    irabReason: 'Dilbilgisi Sebebi',
    harakatHelp: 'Harekeler, her harfin nasıl okunacağını gösteren işaretlerdir. Fetha (a), Kesre (i), Ötre (u) kısa seslerdir.',
    dependencyHelp: 'Bu diyagram kelimelerin birbirleriyle nasıl ilişkili olduğunu gösterir.',
    grammarBenefit: 'Dilbilgisini anlamak, Kuran ayetlerinin derin anlamını kavramanıza yardımcı olur.',
    tapWordHelp: 'Detaylı analiz için herhangi bir kelimeye dokunun',
    howToRead: 'Nasıl Okunur',
    whyLearn: 'Neden Öğrenelim?',
    surah: 'Sure',
    ayah: 'Ayet',
    ontology: 'Kuran Kavramları',
    viewOntology: 'Kuran Kavramlarını Gör',
  },
  id: {
    grammarAnalysis: 'Analisis Tata Bahasa',
    partOfSpeech: 'Jenis Kata',
    root: 'Akar',
    pattern: 'Pola',
    case: 'Kasus',
    grammarRole: 'Peran Tata Bahasa',
    features: 'Fitur',
    explanation: 'Penjelasan',
    relatesTo: 'Terkait dengan',
    dependencyStructure: 'Struktur Ketergantungan',
    tapForDetails: 'Ketuk kata apa pun untuk analisis detail',
    posLegend: 'Legenda Jenis Kata',
    premium: 'Analisis Tata Bahasa Premium',
    premiumDesc: 'Dapatkan analisis morfologi detail untuk semua 114 surah.',
    tryFree: 'Coba gratis di Surah Al-Fatihah!',
    upgrade: 'Upgrade ke Premium',
    maybeLater: 'Nanti Saja',
    comingSoon: 'Data Tata Bahasa Segera Hadir',
    comingSoonDesc: 'Analisis untuk ayat ini sedang disiapkan.',
    close: 'Tutup',
    tafseer: 'Tafsir',
    translation: 'Terjemahan',
    selectTranslation: 'Pilih Terjemahan',
    selectTafseer: 'Pilih Tafsir',
    grammarTab: 'Tata Bahasa',
    tafseerTab: 'Tafsir',
    loading: 'Memuat...',
    explore: 'Jelajahi Ayat',
    harakat: 'Tanda Baca (Harakat)',
    letterBreakdown: 'Analisis Huruf-per-Huruf',
    letter: 'Huruf',
    pronunciation: 'Pengucapan',
    morphology: 'Morfologi',
    prefix: 'Awalan',
    rootLetters: 'Huruf Akar',
    suffix: 'Akhiran',
    verbForm: 'Bentuk Kata Kerja',
    pronounAttached: 'Kata Ganti Terlampir',
    irabReason: 'Alasan Tata Bahasa',
    harakatHelp: 'Harakat adalah tanda yang menunjukkan cara mengucapkan setiap huruf. Fathah (a), Kasrah (i), Dhammah (u) adalah vokal pendek.',
    dependencyHelp: 'Diagram ini menunjukkan bagaimana kata-kata saling berhubungan satu sama lain.',
    grammarBenefit: 'Memahami tata bahasa membantu Anda memahami makna lebih dalam dari ayat-ayat Al-Quran.',
    tapWordHelp: 'Ketuk kata apa pun untuk analisis detail',
    howToRead: 'Cara Membaca',
    whyLearn: 'Mengapa Belajar?',
    surah: 'Surah',
    ayah: 'Ayat',
    ontology: 'Konsep Quran',
    viewOntology: 'Lihat Konsep Quran',
  },
};

// Helper to get language code from translation ID
export const getLanguageFromTranslation = (translationId) => {
  if (!translationId) return 'en';
  const langCode = translationId.split('.')[0];
  const langMap = {
    ur: 'ur', en: 'en', hi: 'hi', bn: 'bn', tr: 'tr', id: 'id',
    fa: 'ur', // Persian uses Urdu as fallback
    ar: 'ar',
  };
  return langMap[langCode] || 'en';
};

// Helper to get label in user's language
export const getLabel = (item, lang = 'en') => {
  if (!item) return '';
  if (item.labels) {
    return item.labels[lang] || item.labels.en || '';
  }
  // Backward compatibility
  return item.label || '';
};

// Helper to get text in user's language from translations object
export const getText = (translations, lang = 'en') => {
  if (!translations) return '';
  if (typeof translations === 'string') return translations;
  return translations[lang] || translations.en || '';
};

/**
 * Surah Al-Fatiha (1) - Complete Treebank Data
 * 7 Ayahs, ~29 words
 * Full multi-language support
 */
export const TREEBANK_DATA = {
  1: { // Surah Al-Fatiha
    name: 'Al-Fatiha',
    nameAr: 'الفاتحة',
    ayahs: {
      // Ayah 1: بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      1: {
        text: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        translations: {
          en: 'In the name of Allah, the Most Gracious, the Most Merciful',
          ur: 'اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے',
          hi: 'अल्लाह के नाम से जो बड़ा मेहरबान निहायत रहम वाला है',
          bn: 'পরম করুণাময় অতি দয়ালু আল্লাহর নামে',
          tr: 'Rahman ve Rahim olan Allah\'ın adıyla',
          id: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang',
        },
        words: [
          {
            id: 1,
            arabic: 'بِسْمِ',
            transliteration: 'bismi',
            translations: {
              en: 'In the name',
              ur: 'نام سے',
              hi: 'नाम से',
              bn: 'নামে',
              tr: 'Adıyla',
              id: 'Dengan nama',
            },
            pos: ['P', 'N'],
            posLabel: 'P+N',
            root: 'س م و',
            lemma: 'اِسْم',
            pattern: 'اِفْع',
            case: 'gen',
            features: {
              en: { type: 'Prepositional phrase', state: 'Construct (مضاف)' },
              ur: { type: 'حرف جار + اسم', state: 'مضاف' },
              hi: { type: 'संबंधसूचक वाक्यांश', state: 'मुज़ाफ़' },
            },
            grammarRole: 'jarr',
            grammarExplanations: {
              en: 'Preposition "بِ" (in/with) + noun "اسم" (name) in genitive case. This is the beginning phrase used to invoke Allah\'s blessings.',
              ur: 'حرف جار "بِ" (سے) + اسم "اسم" (نام) مجرور۔ یہ ابتدائی جملہ ہے جو اللہ کی برکت حاصل کرنے کے لیے استعمال ہوتا ہے۔',
              hi: 'संबंधसूचक "بِ" (से) + संज्ञा "اسم" (नाम)। यह अल्लाह की बरकत के लिए शुरुआती वाक्य है।',
            },
            dependsOn: null,
            dependencyType: null,
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'س م و',
              meaning: { en: 'To be high, elevated, name', ur: 'بلند ہونا، نام', hi: 'ऊंचा होना, नाम' },
              words: [
                { arabic: 'اِسْم', meaning: { en: 'Name', ur: 'نام', hi: 'नाम' }, count: 19 },
                { arabic: 'سَمَاء', meaning: { en: 'Sky/Heaven', ur: 'آسمان', hi: 'आसमान' }, count: 120 },
                { arabic: 'سَمَاوَات', meaning: { en: 'Heavens', ur: 'آسمان (جمع)', hi: 'आसमान (बहुवचन)' }, count: 190 },
                { arabic: 'يُسَمَّى', meaning: { en: 'To be named', ur: 'نام رکھا جائے', hi: 'नाम रखा जाए' }, count: 12 },
                { arabic: 'الْأَسْمَاء', meaning: { en: 'The names', ur: 'نام (جمع)', hi: 'नाम (बहुवचन)' }, count: 9 },
              ],
            },
            frequency: {
              word: 'بِسْمِ',
              total: 22,
              spikedSurahs: ['الفاتحہ', 'النمل', 'ہود'],
              note: { en: 'Appears at start of 113 surahs as Bismillah', ur: '113 سورتوں کی شروعات بسم اللہ سے ہوتی ہے', hi: '113 सूरतों की शुरुआत बिस्मिल्लाह से होती है' },
            },
            irabReason: {
              case: 'مجرور',
              reason: {
                en: 'The word "اسم" is in genitive case (مجرور) because it follows the preposition "بِ". In Arabic, prepositions always put the following noun in genitive case. The kasra (ِ) under the letter م shows this.',
                ur: 'لفظ "اسم" مجرور ہے کیونکہ یہ حرف جار "بِ" کے بعد آیا ہے۔ عربی میں حرف جار کے بعد آنے والا اسم ہمیشہ مجرور ہوتا ہے۔ میم کے نیچے زیر (ِ) اس کی علامت ہے۔',
                hi: 'शब्द "اسم" मजरूर है क्योंकि यह हर्फ-ए-जर "بِ" के बाद आया है। अरबी में हर्फ-ए-जर के बाद आने वाला इस्म हमेशा मजरूर होता है।',
              },
              rule: { en: 'Preposition + Noun = Genitive', ur: 'حرف جار + اسم = مجرور', hi: 'हर्फ-ए-जर + इस्म = मजरूर' },
            },
            balagha: {
              title: { en: 'The Eloquent Beginning', ur: 'بلیغ آغاز', hi: 'वाक्पटु शुरुआत' },
              explanation: {
                en: 'Starting with "In the name of Allah" establishes: 1) Seeking blessing before any act, 2) Acknowledging that all good comes from Allah, 3) A reminder that we do everything for Allah\'s sake. The word "اسم" (name) was chosen over "ذات" (essence) because we cannot comprehend Allah\'s essence, only His names and attributes.',
                ur: '"اللہ کے نام سے" سے شروع کرنا تین باتیں ثابت کرتا ہے: ۱) ہر کام سے پہلے برکت مانگنا، ۲) یہ اقرار کہ ہر بھلائی اللہ سے ہے، ۳) یاد دہانی کہ ہم سب کچھ اللہ کے لیے کرتے ہیں۔ "اسم" (نام) کا لفظ "ذات" کی جگہ اس لیے چُنا گیا کیونکہ ہم اللہ کی ذات کو نہیں سمجھ سکتے، صرف اس کے نام اور صفات کو۔',
                hi: '"अल्लाह के नाम से" शुरू करना तीन बातें साबित करता है: 1) हर काम से पहले बरकत मांगना, 2) यह इक़रार कि हर भलाई अल्लाह से है, 3) याद दिलाना कि हम सब कुछ अल्लाह के लिए करते हैं।',
              },
            },
            linguisticMiracle: {
              title: { en: 'Why specifically "اسم"?', ur: '"اسم" ہی کیوں؟', hi: '"इस्म" ही क्यों?' },
              points: [
                {
                  en: 'The letter "ا" (alif) is dropped from "اسم" making it "بسم" - this shows the frequency of its use in daily speech, as commonly used words get shortened.',
                  ur: '"اسم" سے "ا" (الف) گر گیا اور "بسم" بنا - یہ روزمرہ استعمال کی کثرت ظاہر کرتا ہے، جیسے عام الفاظ مختصر ہو جاتے ہیں۔',
                  hi: '"इस्म" से "ا" (अलिफ़) गिर गया और "बिस्म" बना - यह रोज़मर्रा के इस्तेमाल की कसरत दिखाता है।',
                },
                {
                  en: 'Using "name" implies all of Allah\'s beautiful names (الأسماء الحسنى), not just one attribute.',
                  ur: '"نام" استعمال کرنا اللہ کے تمام خوبصورت ناموں (الأسماء الحسنی) کی طرف اشارہ ہے، صرف ایک صفت نہیں۔',
                  hi: '"नाम" इस्तेमाल करना अल्लाह के सभी खूबसूरत नामों (अल-अस्माउल हुस्ना) की तरफ़ इशारा है।',
                },
              ],
            },
            tajweedTips: {
              rules: [
                {
                  rule: { en: 'Kasra under ب', ur: 'ب کے نیچے زیر', hi: 'ब के नीचे ज़ेर' },
                  explanation: { en: 'Pronounce with short "i" sound', ur: 'چھوٹی "اِ" کی آواز سے پڑھیں', hi: 'छोटी "इ" की आवाज़ से पढ़ें' },
                },
                {
                  rule: { en: 'Silent connection', ur: 'سکتہ', hi: 'सक्ता' },
                  explanation: { en: 'Connect smoothly to next word "الله" without pause', ur: 'اگلے لفظ "اللہ" سے بغیر رکے ملائیں', hi: 'अगले शब्द "अल्लाह" से बिना रुके मिलाएं' },
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: '"بِ" = "By/With" - think of it as seeking help', ur: '"بِ" = "سے" - مدد مانگنے کا تصور کریں', hi: '"बि" = "से" - मदद माँगने का तसव्वुर करें' },
                { en: '"اسم" sounds like "awesome name" - Allah\'s name IS awesome!', ur: '"اسم" = نام - اللہ کا نام سب سے عظیم ہے!', hi: '"इस्म" = नाम - अल्लाह का नाम सबसे महान है!' },
              ],
              mnemonic: { en: 'B-ISM = Begin In Supreme Master\'s name', ur: 'ب س م = برکت سب میں', hi: 'ब स म = बरकत सब में' },
            },
            scholarTranslations: [
              { scholar: 'Pickthall', translation: 'In the name' },
              { scholar: 'Yusuf Ali', translation: 'In the name' },
              { scholar: 'Shakir', translation: 'In the name' },
              { scholar: 'جالندھری', translation: 'شروع اللہ کے نام سے' },
              { scholar: 'مودودی', translation: 'اللہ کے نام سے' },
              { scholar: 'احمد رضا خان', translation: 'اللہ کے نام سے' },
            ],
            similarPatterns: [
              { surah: 11, ayah: 41, text: 'بِسْمِ اللَّهِ مَجْرَاهَا', note: { en: 'Same pattern in Noah\'s story', ur: 'نوح علیہ السلام کی کشتی', hi: 'नूह की कश्ती' } },
              { surah: 27, ayah: 30, text: 'إِنَّهُ مِن سُلَيْمَانَ وَإِنَّهُ بِسْمِ اللَّهِ', note: { en: 'Solomon\'s letter', ur: 'سلیمان علیہ السلام کا خط', hi: 'सुलैमान का खत' } },
            ],
          },
          {
            id: 2,
            arabic: 'اللَّهِ',
            transliteration: 'Allāhi',
            translations: {
              en: 'of Allah',
              ur: 'اللہ کے',
              hi: 'अल्लाह के',
              bn: 'আল্লাহর',
              tr: 'Allah\'ın',
              id: 'Allah',
            },
            pos: ['PN'],
            posLabel: 'PN',
            root: 'أ ل ه',
            lemma: 'الله',
            pattern: null,
            case: 'gen',
            features: {
              en: { type: 'Proper noun', definiteness: 'Definite' },
              ur: { type: 'اسم خاص', definiteness: 'معرفہ' },
              hi: { type: 'व्यक्तिवाचक संज्ञा', definiteness: 'परिभाषित' },
            },
            grammarRole: 'mudhafIlayh',
            grammarExplanations: {
              en: 'Genitive noun - the possessor in the construct phrase "name of Allah". Allah is the proper name of God in Arabic.',
              ur: 'مضاف الیہ - "اللہ کے نام" کی ترکیب میں مالک۔ اللہ عربی میں خدا کا خاص نام ہے۔',
              hi: 'मुज़ाफ़ इलैह - "अल्लाह के नाम" में स्वामी। अल्लाह अरबी में ईश्वर का विशेष नाम है।',
            },
            dependsOn: 1,
            dependencyTypes: {
              en: 'Genitive construction (إضافة)',
              ur: 'ترکیب اضافی (إضافة)',
              hi: 'इज़ाफ़त रचना (إضافة)',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'أ ل ه',
              meaning: { en: 'To worship, deity, god', ur: 'عبادت کرنا، معبود', hi: 'इबादत करना, माबूद' },
              words: [
                { arabic: 'الله', meaning: { en: 'Allah (The God)', ur: 'اللہ', hi: 'अल्लाह' }, count: 2699 },
                { arabic: 'إِلَٰه', meaning: { en: 'A god/deity', ur: 'معبود', hi: 'माबूद' }, count: 147 },
                { arabic: 'آلِهَة', meaning: { en: 'Gods (plural)', ur: 'معبود (جمع)', hi: 'माबूद (बहुवचन)' }, count: 28 },
                { arabic: 'اللَّهُمَّ', meaning: { en: 'O Allah!', ur: 'اے اللہ!', hi: 'ऐ अल्लाह!' }, count: 5 },
              ],
            },
            frequency: {
              word: 'الله',
              total: 2699,
              note: { en: 'Most frequently mentioned word in Quran!', ur: 'قرآن میں سب سے زیادہ آنے والا لفظ!', hi: 'क़ुरआन में सबसे ज़्यादा आने वाला शब्द!' },
            },
            irabReason: {
              case: 'مجرور',
              reason: {
                en: '"الله" is in genitive case because it is مضاف إليه (possessor) in the phrase "اسم الله" (name of Allah). When one noun possesses another in Arabic, the possessor takes genitive case.',
                ur: '"اللہ" مجرور ہے کیونکہ یہ "اسم اللہ" میں مضاف الیہ ہے۔ عربی میں جب ایک اسم دوسرے کا مالک ہو تو مالک مجرور ہوتا ہے۔',
                hi: '"अल्लाह" मजरूर है क्योंकि यह "इस्म अल्लाह" में मुज़ाफ़ इलैह है।',
              },
              rule: { en: 'Possessor (مضاف إليه) = Always Genitive', ur: 'مضاف الیہ = ہمیشہ مجرور', hi: 'मुज़ाफ़ इलैह = हमेशा मजरूर' },
            },
            balagha: {
              title: { en: 'The Supreme Name', ur: 'اسم اعظم', hi: 'इस्म-ए-आज़म' },
              explanation: {
                en: '"الله" is the comprehensive name that encompasses ALL of Allah\'s attributes. It is not derived from any root according to some scholars - it is uniquely His. The "ال" (the) is inseparable, showing there is only ONE true God. It commands absolute reverence and cannot be used for anyone else.',
                ur: '"اللہ" جامع نام ہے جو تمام صفات کو سموئے ہوئے ہے۔ بعض علماء کے نزدیک یہ کسی مادے سے نہیں بنا - یہ خاص اس کا ہے۔ "ال" لازمی ہے، جو ظاہر کرتا ہے کہ سچا معبود صرف ایک ہے۔',
                hi: '"अल्लाह" जामे नाम है जो सभी सिफ़ात को समेटे हुए है।',
              },
            },
            linguisticMiracle: {
              title: { en: 'The Unique Name', ur: 'بے مثال نام', hi: 'बेमिसाल नाम' },
              points: [
                {
                  en: 'The word "Allah" has no plural form - emphasizing His absolute oneness (تَوْحِيد).',
                  ur: 'لفظ "اللہ" کی کوئی جمع نہیں - یہ اس کی مطلق وحدانیت (توحید) کو ظاہر کرتا ہے۔',
                  hi: 'शब्द "अल्लाह" का कोई बहुवचन नहीं - यह उसकी मुतलक़ वहदानियत (तौहीद) को ज़ाहिर करता है।',
                },
                {
                  en: 'When you remove letters from "الله", you still get words meaning God: "لله" (for Allah), "له" (to Him), "ه" (He).',
                  ur: 'جب "اللہ" سے حروف نکالیں، پھر بھی خدا کے معنی ملتے ہیں: "للہ" (اللہ کے لیے)، "لہ" (اس کے لیے)، "ہ" (وہ)۔',
                  hi: 'जब "अल्लाह" से हर्फ़ निकालें, फिर भी खुदा के मायने मिलते हैं।',
                },
              ],
            },
            tajweedTips: {
              rules: [
                {
                  rule: { en: 'Tafkheem of Lam', ur: 'لام کی تفخیم', hi: 'लाम की तफ़ख़ीम' },
                  explanation: { en: 'The "ل" in الله is thick (tafkheem) when preceded by fatha or damma, thin (tarqeeq) after kasra', ur: 'الله میں "ل" موٹی ہے جب پہلے زبر یا پیش ہو، پتلی ہے کسرہ کے بعد', hi: 'अल्लाह में "ल" मोटी है जब पहले ज़बर या पेश हो' },
                },
                {
                  rule: { en: 'Shaddah on Lam', ur: 'لام پر شدّہ', hi: 'लाम पर शद्दा' },
                  explanation: { en: 'Double emphasis on the لل - hold slightly longer', ur: 'لل پر دوہرا زور - تھوڑا لمبا رکھیں', hi: 'लल पर दोहरा ज़ोर - थोड़ा लंबा रखें' },
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'الله = "The God" (with capital T and G) - THE one and only', ur: 'اللہ = واحد معبود - ایک اور صرف ایک', hi: 'अल्लाह = वाहिद माबूद - एक और सिर्फ़ एक' },
                { en: '2699 times in Quran - most frequent word!', ur: 'قرآن میں 2699 بار - سب سے زیادہ!', hi: 'क़ुरआन में 2699 बार - सबसे ज़्यादा!' },
              ],
              mnemonic: { en: 'A-L-L-A-H = Always Love, Listen And Honor', ur: 'اللہ = انتہائی لامحدود لازوال احد ہستی', hi: 'अल्लाह = अनंत लामहदूद लाज़वाल अहद हस्ती' },
            },
            scholarTranslations: [
              { scholar: 'Universal', translation: 'Allah (not translated - proper name)' },
              { scholar: 'Note', translation: { en: 'Most scholars keep "Allah" as-is because it\'s a proper name', ur: 'اکثر علماء "اللہ" کو ویسے ہی رکھتے ہیں کیونکہ یہ اسم خاص ہے', hi: 'अक्सर उलमा "अल्लाह" को वैसे ही रखते हैं' } },
            ],
          },
          {
            id: 3,
            arabic: 'الرَّحْمَٰنِ',
            transliteration: 'ar-Raḥmāni',
            translations: {
              en: 'the Most Gracious',
              ur: 'بڑا مہربان',
              hi: 'बड़ा मेहरबान',
              bn: 'পরম করুণাময়',
              tr: 'Rahman',
              id: 'Yang Maha Pengasih',
            },
            pos: ['ADJ'],
            posLabel: 'ADJ',
            root: 'ر ح م',
            lemma: 'رَحْمَٰن',
            pattern: 'فَعْلَان',
            case: 'gen',
            features: {
              en: { type: 'Adjective (intensive form)', definiteness: 'Definite', form: 'فَعْلَان - indicates intensity/abundance' },
              ur: { type: 'صفت (مبالغہ)', definiteness: 'معرفہ', form: 'فَعْلَان - کثرت و شدت' },
              hi: { type: 'विशेषण (अतिशय)', definiteness: 'परिभाषित', form: 'फ़अलान - तीव्रता' },
            },
            grammarRole: 'sifah',
            grammarExplanations: {
              en: 'Adjective describing Allah - indicates abundant, all-encompassing mercy that extends to all creation. The pattern فَعْلَان shows extreme intensity.',
              ur: 'اللہ کی صفت - وہ رحمت جو تمام مخلوقات پر محیط ہے۔ وزن فَعْلَان شدت کو ظاہر کرتا ہے۔',
              hi: 'अल्लाह का विशेषण - वह दया जो सभी सृष्टि पर व्यापक है। फ़अलान पैटर्न अत्यधिकता दर्शाता है।',
            },
            dependsOn: 2,
            dependencyTypes: {
              en: 'Adjective (صفة)',
              ur: 'صفت',
              hi: 'विशेषण (सिफ़त)',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'ر ح م',
              meaning: { en: 'Mercy, womb, compassion', ur: 'رحمت، رحم، شفقت', hi: 'दया, रहम, करुणा' },
              words: [
                { arabic: 'رَحْمَة', meaning: { en: 'Mercy', ur: 'رحمت', hi: 'दया' }, count: 79 },
                { arabic: 'رَحْمَٰن', meaning: { en: 'Most Gracious', ur: 'بڑا مہربان', hi: 'बड़ा मेहरबान' }, count: 57 },
                { arabic: 'رَحِيم', meaning: { en: 'Most Merciful', ur: 'نہایت رحم والا', hi: 'निहायत रहम वाला' }, count: 114 },
                { arabic: 'رَحِم', meaning: { en: 'Womb/Relations', ur: 'رحم/رشتے', hi: 'गर्भ/रिश्ते' }, count: 10 },
                { arabic: 'أَرْحَم', meaning: { en: 'Most merciful of', ur: 'سب سے زیادہ رحم والا', hi: 'सबसे ज़्यादा रहम वाला' }, count: 4 },
                { arabic: 'مَرْحَمَة', meaning: { en: 'Mutual mercy', ur: 'باہمی رحمت', hi: 'परस्पर दया' }, count: 1 },
              ],
            },
            frequency: {
              word: 'الرَّحْمَٰن',
              total: 57,
              spikedSurahs: ['الفاتحہ', 'مریم', 'طہ', 'الرحمٰن', 'الملک'],
              note: {
                en: 'الرَّحْمَٰن is mentioned 57 times. Surah 55 is named after this attribute! Used exclusively for Allah.',
                ur: 'الرَّحْمَٰن 57 بار آیا ہے۔ سورہ 55 اسی صفت کے نام سے ہے! صرف اللہ کے لیے استعمال ہوتا ہے۔',
                hi: 'अर्रहमान 57 बार आया है। सूरह 55 इसी सिफ़त के नाम से है! सिर्फ़ अल्लाह के लिए इस्तेमाल होता है।'
              },
            },
            irabReason: {
              case: 'مجرور',
              reason: {
                en: 'الرَّحْمَٰنِ is in genitive case because it is an adjective (صفة) of اللَّهِ which is also genitive. In Arabic, adjectives must agree with the noun they describe in case, gender, number, and definiteness.',
                ur: 'الرَّحْمَٰنِ مجرور ہے کیونکہ یہ اللَّهِ کی صفت ہے جو خود مجرور ہے۔ عربی میں صفت کو موصوف کے اعراب، جنس، عدد اور تعریف میں مطابقت رکھنی چاہیے۔',
                hi: 'अर्रहमान मजरूर है क्योंकि यह अल्लाह की सिफ़त है जो खुद मजरूर है। अरबी में सिफ़त को मौसूफ़ के एराब, जिंस, अदद और तारीफ़ में मुताबिक़त रखनी चाहिए।',
              },
              rule: { en: 'Adjective agrees with noun in case', ur: 'صفت موصوف کے اعراب میں موافق', hi: 'सिफ़त मौसूफ़ के एराब में मुवाफ़िक़' },
            },
            balagha: {
              title: { en: 'The All-Encompassing Mercy', ur: 'ہمہ گیر رحمت', hi: 'हमागीर रहमत' },
              explanation: {
                en: 'الرَّحْمَٰن is on the pattern فَعْلَان which indicates fullness and overflow. It\'s like saying someone is so full of mercy that it overflows to everything. This mercy extends to ALL creation - believers and disbelievers, humans, animals, plants, even atoms. The rain, air, food - all from this رحمت. This name is EXCLUSIVE to Allah - no one else can be called الرَّحْمَٰن.',
                ur: 'الرَّحْمَٰن وزن فَعْلَان پر ہے جو بھرپوری اور فراوانی ظاہر کرتا ہے۔ گویا کوئی اتنا رحمت سے بھرا ہے کہ سب پر بہہ رہی ہے۔ یہ رحمت تمام مخلوقات پر ہے - مومن و کافر، انسان، جانور، پودے، حتیٰ کہ ذرات۔ بارش، ہوا، کھانا - سب اسی رحمت سے۔ یہ نام صرف اللہ کا ہے - کسی اور کو الرَّحْمَٰن نہیں کہہ سکتے۔',
                hi: 'अर्रहमान वज़न فَعْلَان पर है जो भरपूरी और फ़रावानी ज़ाहिर करता है। गोया कोई इतना रहमत से भरा है कि सब पर बह रही है। यह रहमत सभी मख्लूक़ात पर है - मोमिन व काफ़िर, इंसान, जानवर, पौधे, यहाँ तक कि ज़र्रात। बारिश, हवा, खाना - सब इसी रहमत से। यह नाम सिर्फ़ अल्लाह का है।',
              },
            },
            linguisticMiracle: {
              title: { en: 'Why الرَّحْمَٰن before الرَّحِيم?', ur: 'الرَّحْمَٰن پہلے کیوں؟', hi: 'अर्रहमान पहले क्यों?' },
              points: [
                {
                  en: 'الرَّحْمَٰن (pattern فَعْلَان) indicates TEMPORARY but INTENSE quality - like غَضْبَان (angry NOW). This mercy is for THIS world - given to ALL creatures now.',
                  ur: 'الرَّحْمَٰن (وزن فَعْلَان) عارضی مگر شدید صفت ظاہر کرتا ہے - جیسے غَضْبَان (ابھی غصے میں)۔ یہ رحمت دنیا کے لیے ہے - ابھی تمام مخلوقات کو۔',
                  hi: 'अर्रहमान (वज़न فَعْلَان) आरज़ी मगर शदीद सिफ़त ज़ाहिर करता है - जैसे غَضْبَان (अभी ग़ुस्से में)। यह रहमत दुनिया के लिए है - अभी सभी मख्लूक़ात को।',
                },
                {
                  en: 'الرَّحِيم (pattern فَعِيل) indicates PERMANENT quality - this mercy is forever, specifically for believers in the Hereafter.',
                  ur: 'الرَّحِيم (وزن فَعِيل) دائمی صفت ظاہر کرتا ہے - یہ رحمت ہمیشہ کے لیے ہے، خاص طور پر آخرت میں مومنین کے لیے۔',
                  hi: 'अर्रहीम (वज़न فَعِيل) दाइमी सिफ़त ज़ाहिर करता है - यह रहमत हमेशा के लिए है, ख़ास तौर पर आख़िरत में मोमिनीन के लिए।',
                },
                {
                  en: 'Order: First worldly (الرَّحْمَٰن), then hereafter (الرَّحِيم) - matching the sequence of existence!',
                  ur: 'ترتیب: پہلے دنیاوی (الرَّحْمَٰن)، پھر اخروی (الرَّحِيم) - وجود کی ترتیب کے مطابق!',
                  hi: 'तरतीब: पहले दुनयावी (अर्रहमान), फिर उख़रवी (अर्रहीम) - वुजूद की तरतीब के मुताबिक़!',
                },
              ],
            },
            tajweedTips: {
              rules: [
                {
                  rule: { en: 'Ghunnah in ن', ur: 'ن میں غنہ', hi: 'ن में ग़ुन्नाह' },
                  explanation: { en: 'The "ن" has a nasal sound (ghunnah) held for 2 counts', ur: '"ن" میں غنہ ہے جو دو حرکات تک کھینچا جائے', hi: '"ن" में ग़ुन्नाह है जो दो हरकात तक खींचा जाए' },
                },
                {
                  rule: { en: 'Madd (prolongation)', ur: 'مد', hi: 'मद्द' },
                  explanation: { en: 'The "ا" after ح is a natural madd (2 counts)', ur: 'ح کے بعد "ا" طبیعی مد ہے (دو حرکات)', hi: 'ح के बाद "ا" तबई मद्द है (दो हरकात)' },
                },
                {
                  rule: { en: 'Shaddah on ر', ur: 'ر پر شدّہ', hi: 'ر पर शद्दा' },
                  explanation: { en: 'Double the ر with emphasis, held slightly longer', ur: '"ر" کو دوگنا زور سے پڑھیں، تھوڑا لمبا', hi: '"ر" को दोगुना ज़ोर से पढ़ें, थोड़ा लंबा' },
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'الرَّحْمَٰن = RAHMAN = Rain on All Men And Nature (mercy for ALL)', ur: 'الرَّحْمَٰن = رحمت عام = سب کے لیے بارش', hi: 'अर्रहमान = रहमत आम = सब के लिए बारिश' },
                { en: 'فَعْلَان pattern = FULL (like جَوْعَان very hungry, غَضْبَان very angry)', ur: 'وزن فَعْلَان = بھرپور (جیسے جَوْعَان بہت بھوکا)', hi: 'वज़न फ़अलान = भरपूर (जैसे جَوْعَان बहुत भूखा)' },
              ],
              mnemonic: { en: 'R-A-H-M-A-N = Reaching All Humans, Mercy Across Nature', ur: 'ر ح م ن = رحمت حاصل ہے مخلوق نمونوں کو', hi: 'र ह म न = रहमत हासिल है मख्लूक़ नमूनों को' },
            },
            scholarTranslations: [
              { scholar: 'Pickthall', translation: 'the Beneficent' },
              { scholar: 'Yusuf Ali', translation: 'Most Gracious' },
              { scholar: 'Sahih Intl', translation: 'the Entirely Merciful' },
              { scholar: 'جالندھری', translation: 'بڑا مہربان' },
              { scholar: 'مودودی', translation: 'رحمان' },
              { scholar: 'احمد رضا خان', translation: 'سب سے زیادہ مہربان' },
            ],
            similarPatterns: [
              { surah: 55, ayah: 1, text: 'الرَّحْمَٰنُ', note: { en: 'Surah named after this attribute', ur: 'سورہ کا نام اسی صفت سے', hi: 'सूरह का नाम इसी सिफ़त से' } },
              { surah: 19, ayah: 45, text: 'عَذَابٌ مِّنَ الرَّحْمَٰنِ', note: { en: 'Even punishment is from الرَّحْمَٰن', ur: 'عذاب بھی الرَّحْمَٰن کی طرف سے', hi: 'अज़ाब भी अर्रहमान की तरफ़ से' } },
              { surah: 25, ayah: 60, text: 'اسْجُدُوا لِلرَّحْمَٰنِ', note: { en: 'Prostrate to الرَّحْمَٰن', ur: 'الرَّحْمَٰن کو سجدہ کرو', hi: 'अर्रहमान को सजदा करो' } },
            ],
          },
          {
            id: 4,
            arabic: 'الرَّحِيمِ',
            transliteration: 'ar-Raḥīmi',
            translations: {
              en: 'the Most Merciful',
              ur: 'نہایت رحم والا',
              hi: 'निहायत रहम वाला',
              bn: 'অতি দয়ালু',
              tr: 'Rahim',
              id: 'Maha Penyayang',
            },
            pos: ['ADJ'],
            posLabel: 'ADJ',
            root: 'ر ح م',
            lemma: 'رَحِيم',
            pattern: 'فَعِيل',
            case: 'gen',
            features: {
              en: { type: 'Adjective (intensive form)', definiteness: 'Definite', form: 'فَعِيل - indicates permanence/consistency' },
              ur: { type: 'صفت (مبالغہ)', definiteness: 'معرفہ', form: 'فَعِيل - دوام و استمرار' },
              hi: { type: 'विशेषण (अतिशय)', definiteness: 'परिभाषित', form: 'फ़ईल - स्थायित्व' },
            },
            grammarRole: 'sifah',
            grammarExplanations: {
              en: 'Second adjective describing Allah - indicates constant, personal mercy specifically for believers. The pattern فَعِيل shows permanence.',
              ur: 'اللہ کی دوسری صفت - خاص طور پر مومنین کے لیے مستقل رحمت۔ وزن فَعِيل دوام کو ظاہر کرتا ہے۔',
              hi: 'अल्लाह का दूसरा विशेषण - विशेष रूप से ईमान वालों के लिए स्थायी दया। फ़ईल पैटर्न स्थायित्व दर्शाता है।',
            },
            dependsOn: 2,
            dependencyTypes: {
              en: 'Adjective (صفة)',
              ur: 'صفت',
              hi: 'विशेषण (सिफ़त)',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'ر ح م',
              meaning: { en: 'Mercy, womb, compassion', ur: 'رحمت، رحم، شفقت', hi: 'दया, रहम, करुणा' },
              words: [
                { arabic: 'رَحْمَة', meaning: { en: 'Mercy', ur: 'رحمت', hi: 'दया' }, count: 79 },
                { arabic: 'رَحْمَٰن', meaning: { en: 'Most Gracious', ur: 'بڑا مہربان', hi: 'बड़ा मेहरबान' }, count: 57 },
                { arabic: 'رَحِيم', meaning: { en: 'Most Merciful', ur: 'نہایت رحم والا', hi: 'निहायत रहम वाला' }, count: 114 },
                { arabic: 'أَرْحَامَ', meaning: { en: 'Wombs/Relations', ur: 'ارحام/رشتے', hi: 'रहम/रिश्ते' }, count: 10 },
                { arabic: 'تَرْحَمُ', meaning: { en: 'You show mercy', ur: 'تو رحم کرے', hi: 'तू रहम करे' }, count: 8 },
              ],
            },
            frequency: {
              word: 'الرَّحِيم',
              total: 114,
              spikedSurahs: ['البقرة', 'التوبة', 'النور', 'الشعراء'],
              note: {
                en: 'الرَّحِيم appears 114 times - exactly the number of surahs! 6 of these are with الرَّحْمَٰن, 107 times at end of verses as closure.',
                ur: 'الرَّحِيم 114 بار آیا ہے - بالکل سورتوں کی تعداد! 6 بار الرَّحْمَٰن کے ساتھ، 107 بار آیات کے آخر میں۔',
                hi: 'अर्रहीम 114 बार आया है - बिल्कुल सूरतों की तादाद! 6 बार अर्रहमान के साथ, 107 बार आयात के आख़िर में।'
              },
            },
            irabReason: {
              case: 'مجرور',
              reason: {
                en: 'الرَّحِيمِ is genitive because it\'s an adjective of اللَّهِ (also genitive). It follows the rule that صفة (adjective) must match its موصوف (described noun) in case.',
                ur: 'الرَّحِيمِ مجرور ہے کیونکہ یہ اللَّهِ کی صفت ہے (جو بھی مجرور ہے)۔ قاعدہ ہے کہ صفت کو موصوف کے اعراب میں مطابقت رکھنی چاہیے۔',
                hi: 'अर्रहीम मजरूर है क्योंकि यह अल्लाह की सिफ़त है (जो भी मजरूर है)। क़ायदा है कि सिफ़त को मौसूफ़ के एराब में मुताबिक़त रखनी चाहिए।',
              },
              rule: { en: 'صفة follows موصوف in case', ur: 'صفت موصوف کے تابع', hi: 'सिफ़त मौसूफ़ के ताबे' },
            },
            balagha: {
              title: { en: 'The Specific, Eternal Mercy', ur: 'خاص اور ابدی رحمت', hi: 'ख़ास और अबदी रहमत' },
              explanation: {
                en: 'الرَّحِيم is on pattern فَعِيل which indicates a PERMANENT, inherent quality - like كَرِيم (generous by nature). This mercy is specifically for believers and continues into the Hereafter. While الرَّحْمَٰن gives to all in this world, الرَّحِيم is the special mercy reserved for those who believe - Paradise, forgiveness, eternal peace.',
                ur: 'الرَّحِيم وزن فَعِيل پر ہے جو دائمی، ذاتی صفت ظاہر کرتا ہے - جیسے كَرِيم (فطرتاً سخی)۔ یہ رحمت خاص طور پر مومنین کے لیے ہے اور آخرت تک جاری۔ الرَّحْمَٰن دنیا میں سب کو دیتا ہے، الرَّحِيم وہ خاص رحمت ہے جو ایمان والوں کے لیے محفوظ ہے - جنت، مغفرت، ابدی سکون۔',
                hi: 'अर्रहीम वज़न فَعِيل पर है जो दाइमी, ज़ाती सिफ़त ज़ाहिर करता है - जैसे كَرِيم (फ़ितरतन सख़ी)। यह रहमत ख़ास तौर पर मोमिनीन के लिए है और आख़िरत तक जारी। अर्रहमान दुनिया में सब को देता है, अर्रहीम वह ख़ास रहमत है जो ईमान वालों के लिए महफ़ूज़ है - जन्नत, मग़फ़िरत, अबदी सुकून।',
              },
            },
            linguisticMiracle: {
              title: { en: 'Perfect Pairing', ur: 'کامل جوڑی', hi: 'कामिल जोड़ी' },
              points: [
                {
                  en: 'الرَّحِيم appears 114 times = exactly the number of surahs in Quran. Divine precision!',
                  ur: 'الرَّحِيم 114 بار = قرآن میں سورتوں کی تعداد۔ الہٰی درستگی!',
                  hi: 'अर्रहीम 114 बार = क़ुरआन में सूरतों की तादाद। इलाही दुरुस्तगी!',
                },
                {
                  en: 'فَعِيل pattern can be used for others (كَرِيم generous person), but الرَّحْمَٰن CANNOT - showing الرَّحْمَٰن is uniquely Allah\'s.',
                  ur: 'وزن فَعِيل دوسروں کے لیے استعمال ہو سکتا ہے (كَرِيم سخی شخص)، مگر الرَّحْمَٰن نہیں - یہ صرف اللہ کا ہے۔',
                  hi: 'वज़न فَعِيل दूसरों के लिए इस्तेमाल हो सकता है (كَرِيم सख़ी शख़्स), मगर अर्रहमान नहीं - यह सिर्फ़ अल्लाह का है।',
                },
                {
                  en: 'Both names from same root ر ح م, showing mercy is THE defining attribute of Allah.',
                  ur: 'دونوں نام ایک ہی مادے ر ح م سے ہیں، ظاہر کرتے ہیں کہ رحمت اللہ کی بنیادی صفت ہے۔',
                  hi: 'दोनों नाम एक ही मादे ر ح م से हैं, ज़ाहिर करते हैं कि रहमत अल्लाह की बुनियादी सिफ़त है।',
                },
              ],
            },
            tajweedTips: {
              rules: [
                {
                  rule: { en: 'Shaddah on ر', ur: 'ر پر شدّہ', hi: 'ر पर शद्दा' },
                  explanation: { en: 'The ر is doubled - pronounce it with emphasis twice', ur: '"ر" کو دوگنا زور سے پڑھیں', hi: '"ر" को दोगुना ज़ोर से पढ़ें' },
                },
                {
                  rule: { en: 'Madd Asli', ur: 'مد اصلی', hi: 'मद्द असली' },
                  explanation: { en: 'The "ي" is a natural madd letter - stretch for 2 counts', ur: '"ی" مد کا حرف ہے - دو حرکات تک کھینچیں', hi: '"ی" मद्द का हर्फ़ है - दो हरकात तक खींचें' },
                },
                {
                  rule: { en: 'Kasra at end', ur: 'آخر میں زیر', hi: 'आख़िर में ज़ेर' },
                  explanation: { en: 'End with clear kasra sound (i), not swallowed', ur: 'واضح زیر (اِ) کے ساتھ ختم کریں', hi: 'वाज़ेह ज़ेर (इ) के साथ ख़त्म करें' },
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'الرَّحِيم = RAHIM = Reserved And Held In store for the Meek (believers)', ur: 'الرَّحِيم = رحیم = رحمت حاصل ایمانداروں میں', hi: 'अर्रहीम = रहीम = रहमत हासिल ईमानदारों में' },
                { en: 'Pattern فَعِيل = permanent (كَبِير always big, صَغِير always small)', ur: 'وزن فَعِيل = دائمی (كَبِير ہمیشہ بڑا)', hi: 'वज़न फ़ईल = दाइमी (كَبِير हमेशा बड़ा)' },
                { en: '114 times = 114 surahs! Easy to remember!', ur: '114 بار = 114 سورتیں! یاد رکھنا آسان!', hi: '114 बार = 114 सूरतें! याद रखना आसान!' },
              ],
              mnemonic: { en: 'R-A-H-I-M = Reserved Always for Humble In-faith Muslims', ur: 'ر ح ی م = رحمت حاصل یقیناً مومنین', hi: 'र ह ी म = रहमत हासिल यक़ीनन मोमिनीन' },
            },
            scholarTranslations: [
              { scholar: 'Pickthall', translation: 'the Merciful' },
              { scholar: 'Yusuf Ali', translation: 'Most Merciful' },
              { scholar: 'Sahih Intl', translation: 'the Especially Merciful' },
              { scholar: 'جالندھری', translation: 'نہایت رحم والا' },
              { scholar: 'مودودی', translation: 'رحیم' },
              { scholar: 'احمد رضا خان', translation: 'نہایت مہربان' },
            ],
            similarPatterns: [
              { surah: 2, ayah: 37, text: 'إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ', note: { en: 'Often paired with التَّوَّاب', ur: 'اکثر التَّوَّاب کے ساتھ', hi: 'अक्सर अत्तव्वाब के साथ' } },
              { surah: 9, ayah: 104, text: 'أَنَّ اللَّهَ هُوَ التَّوَّابُ الرَّحِيمُ', note: { en: 'Allah accepts repentance', ur: 'اللہ توبہ قبول کرتا ہے', hi: 'अल्लाह तौबा क़बूल करता है' } },
              { surah: 59, ayah: 22, text: 'الرَّحْمَٰنُ الرَّحِيمُ', note: { en: 'Both names together', ur: 'دونوں نام ساتھ', hi: 'दोनों नाम साथ' } },
            ],
          },
        ],
        structure: {
          type: {
            en: 'Prepositional phrase with adjectives',
            ur: 'جار ومجرور مع صفات',
            hi: 'संबंधसूचक वाक्यांश विशेषणों के साथ',
          },
          explanations: {
            en: 'A nominal sentence beginning with a prepositional phrase. The implied verb is "أبدأ" (I begin). The two adjectives الرَّحْمَٰنِ and الرَّحِيمِ both describe Allah, showing two aspects of His mercy.',
            ur: 'ایک اسمیہ جملہ جو جار ومجرور سے شروع ہوتا ہے۔ فعل محذوف "أبدأ" (میں شروع کرتا ہوں) ہے۔ دونوں صفات الرَّحْمَٰنِ اور الرَّحِيمِ اللہ کی رحمت کے دو پہلو بیان کرتی ہیں۔',
            hi: 'एक संज्ञात्मक वाक्य जो संबंधसूचक वाक्यांश से शुरू होता है। निहित क्रिया "أبدأ" (मैं शुरू करता हूं) है। दोनों विशेषण अल्लाह की दया के दो पहलू दर्शाते हैं।',
          },
          diagram: [
            { from: 2, to: 1, label: 'مضاف إليه' },
            { from: 3, to: 2, label: 'صفة' },
            { from: 4, to: 2, label: 'صفة' },
          ],
        },
      },

      // Ayah 2: الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
      2: {
        text: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        translations: {
          en: 'All praise is due to Allah, Lord of the worlds',
          ur: 'سب تعریف اللہ کے لیے ہے جو تمام جہانوں کا پروردگار ہے',
          hi: 'सब तारीफ़ अल्लाह के लिए है जो तमाम जहानों का पालनहार है',
          bn: 'সমস্ত প্রশংসা আল্লাহর জন্য যিনি সৃষ্টিকুলের প্রতিপালক',
          tr: 'Hamd, âlemlerin Rabbi Allah\'a mahsustur',
          id: 'Segala puji bagi Allah, Tuhan seluruh alam',
        },
        words: [
          {
            id: 1,
            arabic: 'الْحَمْدُ',
            transliteration: 'al-ḥamdu',
            translations: {
              en: 'All praise',
              ur: 'سب تعریف',
              hi: 'सब तारीफ़',
              bn: 'সমস্ت প্রশংসা',
              tr: 'Hamd',
              id: 'Segala puji',
            },
            pos: ['N'],
            posLabel: 'N',
            root: 'ح م د',
            lemma: 'حَمْد',
            pattern: 'فَعْل',
            case: 'nom',
            features: {
              en: { type: 'Verbal noun (مصدر)', definiteness: 'Definite (with ال)', number: 'Singular' },
              ur: { type: 'مصدر', definiteness: 'معرفہ (بال)', number: 'واحد' },
              hi: { type: 'क्रियावाचक संज्ञा (मस्दर)', definiteness: 'परिभाषित (अल से)', number: 'एकवचन' },
            },
            grammarRole: 'subj',
            grammarExplanations: {
              en: 'Subject of the nominal sentence - "The praise" is definite with ال, indicating ALL praise without exception belongs to Allah.',
              ur: 'جملہ اسمیہ کا مبتدأ - "الحمد" معرفہ ہے جو ظاہر کرتا ہے کہ ہر قسم کی حمد اللہ کے لیے ہے۔',
              hi: 'संज्ञात्मक वाक्य का कर्ता - "अल्हम्द" परिभाषित है जो दर्शाता है कि हर प्रकार की प्रशंसा अल्लाह के लिए है।',
            },
            dependsOn: null,
            dependencyType: null,
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'ح م د',
              meaning: { en: 'To praise, thank, commend', ur: 'تعریف کرنا، شکر کرنا', hi: 'तारीफ़ करना, शुक्र करना' },
              words: [
                { arabic: 'حَمْد', meaning: { en: 'Praise', ur: 'حمد/تعریف', hi: 'हम्द/तारीफ़' }, count: 43 },
                { arabic: 'مُحَمَّد', meaning: { en: 'Muhammad ﷺ', ur: 'محمد ﷺ', hi: 'मुहम्मद ﷺ' }, count: 4 },
                { arabic: 'أَحْمَد', meaning: { en: 'Ahmad (name of Prophet)', ur: 'احمد (نبی کا نام)', hi: 'अहमद (नबी का नाम)' }, count: 1 },
                { arabic: 'حَامِدِين', meaning: { en: 'Those who praise', ur: 'حمد کرنے والے', hi: 'हम्द करने वाले' }, count: 3 },
                { arabic: 'مَحْمُود', meaning: { en: 'Praiseworthy', ur: 'قابل تعریف', hi: 'क़ाबिल-ए-तारीफ़' }, count: 1 },
                { arabic: 'حَمِيد', meaning: { en: 'The Praised One', ur: 'لائق حمد', hi: 'लाइक़-ए-हम्द' }, count: 17 },
              ],
            },
            frequency: {
              word: 'الْحَمْدُ',
              total: 23,
              spikedSurahs: ['الفاتحہ', 'الأنعام', 'الکہف', 'سبأ', 'فاطر'],
              note: {
                en: 'الْحَمْدُ لِلَّهِ appears 5 times at start of surahs (1, 6, 18, 34, 35). Prophet Muhammad ﷺ\'s name comes from this root!',
                ur: 'الْحَمْدُ لِلَّهِ 5 سورتوں کی ابتدا میں ہے (1، 6، 18، 34، 35)۔ نبی ﷺ کا نام محمد اسی مادے سے ہے!',
                hi: 'अल्हम्दुलिल्लाह 5 सूरतों की शुरुआत में है (1, 6, 18, 34, 35)। नबी ﷺ का नाम मुहम्मद इसी मादे से है!'
              },
            },
            irabReason: {
              case: 'مرفوع',
              reason: {
                en: 'الْحَمْدُ is nominative (مرفوع) because it is the مبتدأ (subject) of a nominal sentence. The damma (ُ) on the last letter shows nominative case. In جملہ اسمیہ, the مبتدأ is always مرفوع.',
                ur: 'الْحَمْدُ مرفوع ہے کیونکہ یہ جملہ اسمیہ کا مبتدأ ہے۔ آخری حرف پر پیش (ُ) رفع کی علامت ہے۔ جملہ اسمیہ میں مبتدأ ہمیشہ مرفوع ہوتا ہے۔',
                hi: 'अल्हम्द मर्फ़ू है क्योंकि यह जुम्ला इस्मिया का मुब्तदा है। आख़िरी हर्फ़ पर पेश (ُ) रफ़अ की अलामत है। जुम्ला इस्मिया में मुब्तदा हमेशा मर्फ़ू होता है।',
              },
              rule: { en: 'Subject (مبتدأ) = Always Nominative', ur: 'مبتدأ = ہمیشہ مرفوع', hi: 'मुब्तदा = हमेशा मर्फ़ू' },
            },
            balagha: {
              title: { en: 'The Definite Article Mystery', ur: '"ال" کا راز', hi: '"अल" का राज़' },
              explanation: {
                en: 'Why الْحَمْدُ with "ال" instead of just حَمْدٌ? The definite article "ال" here is called "ال الاستغراق" (ال of comprehensiveness). It means ALL praise - past, present, future - EVERY type of praise belongs to Allah. Not "some praise" but "THE praise" - totality of all praise ever!',
                ur: 'صرف حَمْدٌ کی بجائے الْحَمْدُ کیوں؟ یہاں "ال" کو "ال الاستغراق" کہتے ہیں۔ اس کا مطلب ہے تمام حمد - ماضی، حال، مستقبل - ہر قسم کی حمد اللہ کے لیے ہے۔ "کچھ حمد" نہیں بلکہ "ساری حمد"!',
                hi: 'सिर्फ़ حَمْدٌ की बजाय الْحَمْدُ क्यों? यहाँ "ال" को "अल अल-इस्तिग़राक़" कहते हैं। इसका मतलब है तमाम हम्द - माज़ी, हाल, मुस्तक़बिल - हर क़िस्म की हम्द अल्लाह के लिए है!',
              },
            },
            linguisticMiracle: {
              title: { en: 'Praise vs Thanks', ur: 'حمد بمقابلہ شکر', hi: 'हम्द बमुक़ाबिला शुक्र' },
              points: [
                {
                  en: 'حَمْد is more comprehensive than شُكْر (thanks). شُكْر is only for favors received, but حَمْد is praising Allah\'s attributes whether you received anything or not.',
                  ur: 'حَمْد شُكْر سے زیادہ جامع ہے۔ شُكْر صرف ملی ہوئی نعمتوں پر ہے، لیکن حَمْد اللہ کی صفات کی تعریف ہے چاہے آپ کو کچھ ملے یا نہ ملے۔',
                  hi: 'हम्द शुक्र से ज़्यादा जामे है। शुक्र सिर्फ़ मिली हुई नेअमतों पर है, लेकिन हम्द अल्लाह की सिफ़ात की तारीफ़ है चाहे आपको कुछ मिले या न मिले।',
                },
                {
                  en: 'حَمْد includes both gratitude AND praise for inherent qualities. Allah deserves حَمْد even before creating anything!',
                  ur: 'حَمْد میں شکرانہ بھی ہے اور ذاتی صفات کی تعریف بھی۔ اللہ کچھ پیدا کرنے سے پہلے بھی حَمْد کا مستحق ہے!',
                  hi: 'हम्द में शुक्राना भी है और ज़ाती सिफ़ात की तारीफ़ भी। अल्लाह कुछ पैदा करने से पहले भी हम्द का मुस्तहिक़ है!',
                },
              ],
            },
            tajweedTips: {
              rules: [
                {
                  rule: { en: 'Lam Qamariyyah', ur: 'لام قمری', hi: 'लाम क़मरिया' },
                  explanation: { en: 'The ل in ال is pronounced clearly before ح (a moon letter)', ur: '"ال" کا ل واضح طور پر پڑھا جائے کیونکہ ح قمری حرف ہے', hi: '"अल" का ल साफ़ पढ़ा जाए क्योंकि ح क़मरी हर्फ़ है' },
                },
                {
                  rule: { en: 'Sukun on م', ur: 'م پر سکون', hi: 'म पर सुकून' },
                  explanation: { en: 'The م has sukun - stop briefly with no vowel', ur: 'م پر سکون ہے - مختصر توقف بغیر حرکت', hi: 'म पर सुकून है - मुख़्तसर तवक़्क़ुफ़ बग़ैर हरकत' },
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'حَمْد root gives us مُحَمَّد (praised one) - the Prophet\'s name!', ur: 'حَمْد سے محمد (قابل تعریف) - نبی ﷺ کا نام!', hi: 'हम्द से मुहम्मद (क़ाबिल-ए-तारीफ़) - नबी ﷺ का नाम!' },
                { en: 'ال + حمد = ALL + PRAISE = absolutely everything!', ur: 'ال + حمد = ساری + تعریف = بالکل سب کچھ!', hi: 'अल + हम्द = सारी + तारीफ़ = बिल्कुल सब कुछ!' },
              ],
              mnemonic: { en: 'H-A-M-D = Highest Admiration from Mankind Daily', ur: 'ح م د = حاصل معبود داتا', hi: 'ह म द = हासिल माबूद दाता' },
            },
            scholarTranslations: [
              { scholar: 'Pickthall', translation: 'Praise' },
              { scholar: 'Yusuf Ali', translation: 'Praise' },
              { scholar: 'Sahih Intl', translation: 'All praise' },
              { scholar: 'جالندھری', translation: 'سب تعریف' },
              { scholar: 'مودودی', translation: 'تعریف' },
              { scholar: 'احمد رضا خان', translation: 'سب خوبیاں' },
            ],
            similarPatterns: [
              { surah: 6, ayah: 1, text: 'الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ', note: { en: 'Praise for creation', ur: 'تخلیق پر حمد', hi: 'तख़लीक़ पर हम्द' } },
              { surah: 18, ayah: 1, text: 'الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ', note: { en: 'Praise for Quran', ur: 'قرآن پر حمد', hi: 'क़ुरआन पर हम्द' } },
            ],
          },
          {
            id: 2,
            arabic: 'لِلَّهِ',
            transliteration: 'lillāhi',
            translations: {
              en: 'is due to Allah',
              ur: 'اللہ کے لیے ہے',
              hi: 'अल्लाह के लिए है',
              bn: 'আল্লাহর জন্য',
              tr: 'Allah\'a mahsustur',
              id: 'bagi Allah',
            },
            pos: ['P', 'PN'],
            posLabel: 'P+PN',
            root: 'أ ل ه',
            lemma: 'الله',
            pattern: null,
            case: 'gen',
            features: {
              en: { type: 'Preposition + Proper noun', definiteness: 'Definite' },
              ur: { type: 'حرف جار + اسم خاص', definiteness: 'معرفہ' },
              hi: { type: 'संबंधसूचक + व्यक्तिवाचक संज्ञा', definiteness: 'परिभाषित' },
            },
            grammarRole: 'pred',
            grammarExplanations: {
              en: 'Predicate of the sentence - prepositional phrase "for Allah" indicates to whom all praise exclusively belongs.',
              ur: 'جملے کی خبر - جار ومجرور "للہ" ظاہر کرتا ہے کہ حمد صرف اللہ کے لیے ہے۔',
              hi: 'वाक्य का विधेय - "लिल्लाह" दर्शाता है कि प्रशंसा केवल अल्लाह के लिए है।',
            },
            dependsOn: 1,
            dependencyTypes: {
              en: 'Predicate (خبر)',
              ur: 'خبر',
              hi: 'विधेय (खबर)',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'أ ل ه',
              meaning: { en: 'To worship, deity, god', ur: 'عبادت کرنا، معبود', hi: 'इबादत करना, माबूद' },
              words: [
                { arabic: 'الله', meaning: { en: 'Allah (The God)', ur: 'اللہ', hi: 'अल्लाह' }, count: 2699 },
                { arabic: 'لِلَّهِ', meaning: { en: 'For Allah / To Allah', ur: 'اللہ کے لیے', hi: 'अल्लाह के लिए' }, count: 143 },
                { arabic: 'بِاللَّهِ', meaning: { en: 'By Allah / In Allah', ur: 'اللہ کی قسم / اللہ پر', hi: 'अल्लाह की क़सम / अल्लाह पर' }, count: 52 },
                { arabic: 'إِلَٰه', meaning: { en: 'A god/deity', ur: 'معبود', hi: 'माबूद' }, count: 147 },
              ],
            },
            frequency: {
              word: 'لِلَّهِ',
              total: 143,
              spikedSurahs: ['البقرة', 'آل عمران', 'المائدة', 'الحج'],
              note: {
                en: '"لِلَّهِ" (for/to Allah) appears 143 times, showing everything ultimately belongs to Allah. لِلَّهِ مَا فِي السَّمَاوَاتِ (To Allah belongs what is in the heavens).',
                ur: '"لِلَّهِ" 143 بار آیا ہے، ظاہر کرتا ہے کہ سب کچھ اللہ کا ہے۔ لِلَّهِ مَا فِي السَّمَاوَاتِ (آسمانوں میں جو کچھ ہے اللہ کا ہے)۔',
                hi: '"लिल्लाह" 143 बार आया है, ज़ाहिर करता है कि सब कुछ अल्लाह का है। لِلَّهِ مَا فِي السَّمَاوَاتِ (आसमानों में जो कुछ है अल्लाह का है)।'
              },
            },
            irabReason: {
              case: 'مجرور',
              reason: {
                en: '"الله" is genitive (مجرور) because it follows the preposition "لِ" (for/to). The preposition لِ always puts the following noun in genitive case. The kasra under the ه shows this genitive case.',
                ur: '"اللہ" مجرور ہے کیونکہ حرف جار "لِ" (کے لیے) کے بعد ہے۔ حرف جار لِ کے بعد آنے والا اسم ہمیشہ مجرور ہوتا ہے۔ ہ کے نیچے زیر مجرور ہونے کی علامت ہے۔',
                hi: '"अल्लाह" मजरूर है क्योंकि हर्फ़-ए-जर "لِ" (के लिए) के बाद है। हर्फ़-ए-जर लِ के बाद आने वाला इस्म हमेशा मजरूर होता है।',
              },
              rule: { en: 'لِ (preposition) + Noun = Genitive', ur: 'لِ (حرف جار) + اسم = مجرور', hi: 'لِ (हर्फ़-ए-जर) + इस्म = मजरूर' },
            },
            balagha: {
              title: { en: 'Exclusivity of Praise', ur: 'حمد کی انفرادیت', hi: 'हम्द की इन्फ़िरादियत' },
              explanation: {
                en: 'Why not say "نَحْمَدُ اللهَ" (We praise Allah)? By saying "الْحَمْدُ لِلَّهِ", it becomes a statement of FACT, not just an action. It\'s declaring that praise inherently and eternally belongs to Allah - whether anyone praises or not! This is more powerful than saying "we praise".',
                ur: '"نَحْمَدُ اللهَ" (ہم اللہ کی حمد کرتے ہیں) کیوں نہیں کہا؟ "الْحَمْدُ لِلَّهِ" کہنے سے یہ ایک حقیقت بن جاتی ہے، صرف فعل نہیں۔ یہ اعلان ہے کہ حمد فطری اور ابدی طور پر اللہ کی ہے - چاہے کوئی حمد کرے یا نہ کرے!',
                hi: '"نَحْمَدُ اللهَ" (हम अल्लाह की हम्द करते हैं) क्यों नहीं कहा? "الْحَمْدُ لِلَّهِ" कहने से यह एक हक़ीक़त बन जाती है, सिर्फ़ फ़ेल नहीं। यह एलान है कि हम्द फ़ितरी और अबदी तौर पर अल्लाह की है!',
              },
            },
            linguisticMiracle: {
              title: { en: 'The Lam of Ownership', ur: 'لام ملکیت', hi: 'लाम मिल्कियत' },
              points: [
                {
                  en: 'The "لِ" here indicates OWNERSHIP (لام الاستحقاق). Praise doesn\'t just go TO Allah, it BELONGS to Him as His right.',
                  ur: 'یہاں "لِ" ملکیت (لام الاستحقاق) ظاہر کرتا ہے۔ حمد صرف اللہ تک نہیں جاتی، یہ اس کا حق ہے۔',
                  hi: 'यहाँ "لِ" मिल्कियत (लाम अल-इस्तिहक़ाक़) ज़ाहिर करता है। हम्द सिर्फ़ अल्लाह तक नहीं जाती, यह उसका हक़ है।',
                },
                {
                  en: 'The shaddah on "ل" of لِلَّهِ comes from combining لِ + الله → لِلَّهِ (the alif of الله drops).',
                  ur: 'لِلَّهِ میں "ل" کی شدہ لِ + الله = لِلَّهِ سے آئی (الله کا الف گر گیا)۔',
                  hi: 'लिल्लाह में "ل" की शद्दा لِ + الله = لِلَّهِ से आई (अल्लाह का अलिफ़ गिर गया)।',
                },
              ],
            },
            tajweedTips: {
              rules: [
                {
                  rule: { en: 'Tarqeeq of Lam', ur: 'لام کی ترقیق', hi: 'लाम की तरक़ीक़' },
                  explanation: { en: 'The لام in لِلَّهِ is thin (tarqeeq) because the letter before it has kasra', ur: 'لِلَّهِ میں لام پتلی ہے کیونکہ اس سے پہلے زیر ہے', hi: 'लिल्लाह में लाम पतली है क्योंकि इससे पहले ज़ेर है' },
                },
                {
                  rule: { en: 'Shaddah emphasis', ur: 'شدہ پر زور', hi: 'शद्दा पर ज़ोर' },
                  explanation: { en: 'Hold the لّ slightly longer (double letter)', ur: 'لّ کو تھوڑا لمبا رکھیں (دوگنا حرف)', hi: 'لّ को थोड़ा लंबा रखें (दोगुना हर्फ़)' },
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'لِ = "Li" = "Belonging" → Praise BELONGS to Allah', ur: 'لِ = "لی" = "کا" → حمد اللہ کی ہے', hi: 'لِ = "ली" = "का" → हम्द अल्लाह की है' },
                { en: 'لِلَّهِ = For-Allah, everything returns to Him', ur: 'لِلَّهِ = اللہ کے لیے، سب کچھ اسی کی طرف لوٹتا ہے', hi: 'लिल्लाह = अल्लाह के लिए, सब कुछ उसी की तरफ़ लौटता है' },
              ],
              mnemonic: { en: 'L-I-L-L-A-H = Literally Is Lord, Love And Honor Him', ur: 'ل ل ہ = لازمی لائق حمد ہستی', hi: 'ल ल ह = लाज़मी लाइक़ हम्द हस्ती' },
            },
            scholarTranslations: [
              { scholar: 'Pickthall', translation: 'be to Allah' },
              { scholar: 'Yusuf Ali', translation: 'be to Allah' },
              { scholar: 'Sahih Intl', translation: 'is due to Allah' },
              { scholar: 'جالندھری', translation: 'اللہ کے لیے ہے' },
              { scholar: 'مودودی', translation: 'اللہ ہی کے لیے' },
            ],
            similarPatterns: [
              { surah: 2, ayah: 284, text: 'لِلَّهِ مَا فِي السَّمَاوَاتِ', note: { en: 'Everything in heavens belongs to Allah', ur: 'آسمانوں میں سب کچھ اللہ کا', hi: 'आसमानों में सब कुछ अल्लाह का' } },
              { surah: 3, ayah: 109, text: 'وَلِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ', note: { en: 'Heaven and earth belong to Allah', ur: 'آسمان و زمین اللہ کے ہیں', hi: 'आसमान व ज़मीन अल्लाह के हैं' } },
            ],
          },
          {
            id: 3,
            arabic: 'رَبِّ',
            transliteration: 'Rabbi',
            translations: {
              en: 'Lord',
              ur: 'پروردگار',
              hi: 'पालनहार',
              bn: 'প্রতিপালক',
              tr: 'Rabbi',
              id: 'Tuhan',
            },
            pos: ['N'],
            posLabel: 'N',
            root: 'ر ب ب',
            lemma: 'رَبّ',
            pattern: 'فَعْل',
            case: 'gen',
            features: {
              en: { type: 'Noun', state: 'Construct (مضاف)' },
              ur: { type: 'اسم', state: 'مضاف' },
              hi: { type: 'संज्ञा', state: 'मुज़ाफ़' },
            },
            grammarRole: 'badal',
            grammarExplanations: {
              en: 'Substitute/apposition for Allah - further describes who Allah is: the Lord and Master who nurtures and sustains.',
              ur: 'اللہ کا بدل - اللہ کی مزید وضاحت: وہ جو پالنے والا اور سنبھالنے والا ہے۔',
              hi: 'अल्लाह का बदल - अल्लाह की और व्याख्या: जो पालनहार और संभालने वाला है।',
            },
            dependsOn: 2,
            dependencyTypes: {
              en: 'Apposition (بدل)',
              ur: 'بدل',
              hi: 'बदल',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'ر ب ب',
              meaning: { en: 'To nurture, sustain, lord over', ur: 'پالنا، پرورش کرنا، رب ہونا', hi: 'पालना, परवरिश करना, रब होना' },
              words: [
                { arabic: 'رَبّ', meaning: { en: 'Lord', ur: 'رب/پروردگار', hi: 'रब/परवरदिगार' }, count: 975 },
                { arabic: 'رَبَّنَا', meaning: { en: 'Our Lord', ur: 'ہمارے رب', hi: 'हमारे रब' }, count: 78 },
                { arabic: 'رَبِّي', meaning: { en: 'My Lord', ur: 'میرا رب', hi: 'मेरा रब' }, count: 95 },
                { arabic: 'رَبُّكَ', meaning: { en: 'Your Lord', ur: 'تیرا رب', hi: 'तेरा रब' }, count: 175 },
                { arabic: 'رَبَّانِيِّينَ', meaning: { en: 'Divine scholars', ur: 'ربانی علماء', hi: 'रब्बानी उलमा' }, count: 2 },
                { arabic: 'رِبَّا', meaning: { en: 'Usury/Interest', ur: 'سود', hi: 'सूद' }, count: 8 },
              ],
            },
            frequency: {
              word: 'رَبّ',
              total: 975,
              spikedSurahs: ['البقرة', 'آل عمران', 'الأعراف', 'الشعراء', 'الکہف'],
              note: {
                en: 'رَبّ appears 975 times - one of the most frequent words! It\'s the most intimate way to call Allah, used in all prophetic prayers.',
                ur: 'رَبّ 975 بار آیا - سب سے زیادہ آنے والے الفاظ میں سے! اللہ کو پکارنے کا سب سے قریبی طریقہ، تمام انبیاء کی دعاؤں میں استعمال ہوا۔',
                hi: 'रब 975 बार आया - सबसे ज़्यादा आने वाले अल्फ़ाज़ में से! अल्लाह को पुकारने का सबसे क़रीबी तरीक़ा, तमाम अंबिया की दुआओं में इस्तेमाल हुआ।'
              },
            },
            irabReason: {
              case: 'مجرور',
              reason: {
                en: 'رَبِّ is genitive because it is a بدل (substitute/apposition) of لِلَّهِ which is also genitive. A بدل always takes the same case as the word it explains.',
                ur: 'رَبِّ مجرور ہے کیونکہ یہ لِلَّهِ کا بدل ہے جو خود مجرور ہے۔ بدل ہمیشہ اس لفظ کا اعراب لیتا ہے جس کی وضاحت کرتا ہے۔',
                hi: 'रब्बि मजरूर है क्योंकि यह लिल्लाह का बदल है जो ख़ुद मजरूर है। बदल हमेशा उस लफ़्ज़ का एराब लेता है जिसकी वज़ाहत करता है।',
              },
              rule: { en: 'Apposition (بدل) = Same case as original', ur: 'بدل = مبدل منہ کے اعراب کے تابع', hi: 'बदल = मुब्दल मिन्हु के एराब के ताबे' },
            },
            balagha: {
              title: { en: 'Why رَبّ and not خَالِق?', ur: 'رَبّ کیوں نہ کہ خَالِق؟', hi: 'रब क्यों न कि ख़ालिक़?' },
              explanation: {
                en: 'خَالِق (Creator) only implies creating once. But رَبّ means the one who continuously nurtures, sustains, develops, and guides from beginning to completion. A mother doesn\'t just give birth - she raises the child. Similarly, Allah didn\'t just create - He is constantly nurturing everything. رَبّ encompasses creation, ownership, care, development, and guidance all in one!',
                ur: 'خَالِق (پیدا کرنے والا) صرف ایک بار پیدا کرنے کا مطلب دیتا ہے۔ لیکن رَبّ کا مطلب ہے جو مسلسل پالتا، پروان چڑھاتا، اور رہنمائی کرتا ہے۔ ماں صرف جنم نہیں دیتی - بچے کو پالتی ہے۔ اسی طرح اللہ نے صرف پیدا نہیں کیا - وہ مسلسل سب کی پرورش کر رہا ہے۔ رَبّ میں تخلیق، ملکیت، نگہداشت، ترقی اور رہنمائی سب شامل ہے!',
                hi: 'ख़ालिक़ (पैदा करने वाला) सिर्फ़ एक बार पैदा करने का मतलब देता है। लेकिन रब का मतलब है जो मुसलसल पालता, परवान चढ़ाता, और रहनुमाई करता है। माँ सिर्फ़ जन्म नहीं देती - बच्चे को पालती है। इसी तरह अल्लाह ने सिर्फ़ पैदा नहीं किया - वो मुसलसल सब की परवरिश कर रहा है!',
              },
            },
            linguisticMiracle: {
              title: { en: 'رَبّ - The Complete Care', ur: 'رَبّ - مکمل نگہداشت', hi: 'रब - मुकम्मल निगहदाश्त' },
              points: [
                {
                  en: 'رَبّ comes from تَرْبِيَة (nurturing). Every stage of development from conception to completion is under رَبّ.',
                  ur: 'رَبّ تَرْبِيَة (پرورش) سے ہے۔ شروع سے انتہا تک ہر مرحلے کی نگہداشت رَبّ کے تحت ہے۔',
                  hi: 'रब तर्बियत (परवरिश) से है। शुरू से इंतिहा तक हर मरहले की निगहदाश्त रब के तहत है।',
                },
                {
                  en: 'The shaddah (ّ) on ب shows intensity - Allah is not just any lord, but THE ultimate Lord.',
                  ur: 'ب پر شدہ (ّ) شدت ظاہر کرتی ہے - اللہ کوئی معمولی رب نہیں، بلکہ مطلق رب ہے۔',
                  hi: 'ب पर शद्दा (ّ) शिद्दत ज़ाहिर करती है - अल्लाह कोई मामूली रब नहीं, बल्कि मुतलक़ रब है।',
                },
                {
                  en: 'In construct state (مضاف), رَبّ loses its ending ُ, showing complete submission of creation to the Creator.',
                  ur: 'مضاف ہونے سے رَبّ کی پیش گر گئی، جو مخلوق کی خالق کے سامنے مکمل تسلیم ظاہر کرتی ہے۔',
                  hi: 'मुज़ाफ़ होने से रब की पेश गिर गई, जो मख्लूक़ की ख़ालिक़ के सामने मुकम्मल तस्लीम ज़ाहिर करती है।',
                },
              ],
            },
            tajweedTips: {
              rules: [
                {
                  rule: { en: 'Shaddah on ب', ur: 'ب پر شدّہ', hi: 'ب पर शद्दा' },
                  explanation: { en: 'Double the ب sound with emphasis - pronounce as "Rab-bi"', ur: '"ب" کو دوگنا کریں - "رب-بِ" پڑھیں', hi: '"ب" को दोगुना करें - "रब्बि" पढ़ें' },
                },
                {
                  rule: { en: 'Kasra at end', ur: 'آخر میں زیر', hi: 'आख़िर में ज़ेर' },
                  explanation: { en: 'Clear kasra (i) sound, not swallowed', ur: 'واضح زیر (اِ) کی آواز', hi: 'वाज़ेह ज़ेर (इ) की आवाज़' },
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'رَبّ = Raiser + Boss + Benefactor - all in one!', ur: 'رَبّ = پالنے والا + مالک + نعمت دینے والا - سب ایک میں!', hi: 'रब = पालने वाला + मालिक + नेमत देने वाला - सब एक में!' },
                { en: 'Every dua of prophets starts with رَبّ or رَبَّنَا', ur: 'ہر نبی کی دعا رَبّ یا رَبَّنَا سے شروع ہوتی ہے', hi: 'हर नबी की दुआ रब या रब्बना से शुरू होती है' },
              ],
              mnemonic: { en: 'R-A-B-B = Raising And Blessing Being', ur: 'ر ب ب = رحیم بخشنے والی بے مثال ہستی', hi: 'र ब ब = रहीम बख़्शने वाली बेमिसाल हस्ती' },
            },
            scholarTranslations: [
              { scholar: 'Pickthall', translation: 'Lord' },
              { scholar: 'Yusuf Ali', translation: 'Lord and Cherisher' },
              { scholar: 'Sahih Intl', translation: 'Lord' },
              { scholar: 'جالندھری', translation: 'پروردگار' },
              { scholar: 'مودودی', translation: 'رب' },
              { scholar: 'احمد رضا خان', translation: 'پالنے والا' },
            ],
            similarPatterns: [
              { surah: 2, ayah: 131, text: 'أَسْلَمْتُ لِرَبِّ الْعَالَمِينَ', note: { en: 'Ibrahim\'s submission', ur: 'ابراہیم کی اطاعت', hi: 'इब्राहीम की इताअत' } },
              { surah: 26, ayah: 16, text: 'رَسُولُ رَبِّ الْعَالَمِينَ', note: { en: 'Messenger of Lord of worlds', ur: 'رب العالمین کا رسول', hi: 'रब्बुल आलमीन का रसूल' } },
            ],
          },
          {
            id: 4,
            arabic: 'الْعَالَمِينَ',
            transliteration: 'al-ʿālamīna',
            translations: {
              en: 'of the worlds',
              ur: 'تمام جہانوں کا',
              hi: 'तमाम जहानों का',
              bn: 'সৃষ্টিকুলের',
              tr: 'âlemlerin',
              id: 'seluruh alam',
            },
            pos: ['N'],
            posLabel: 'N',
            root: 'ع ل م',
            lemma: 'عَالَم',
            pattern: 'فَاعَل',
            case: 'gen',
            features: {
              en: { type: 'Noun (plural)', definiteness: 'Definite', number: 'Plural (masculine sound)' },
              ur: { type: 'اسم (جمع)', definiteness: 'معرفہ', number: 'جمع مذکر سالم' },
              hi: { type: 'संज्ञा (बहुवचन)', definiteness: 'परिभाषित', number: 'पुल्लिंग बहुवचन' },
            },
            grammarRole: 'mudhafIlayh',
            grammarExplanations: {
              en: 'Possessor in construct - "of the worlds" includes all realms: humans, jinn, angels, animals, and all creation.',
              ur: 'مضاف الیہ - "العالمین" میں تمام مخلوقات شامل ہیں: انسان، جن، فرشتے، جانور اور ساری کائنات۔',
              hi: 'मुज़ाफ़ इलैह - "आलमीन" में सभी सृष्टि शामिल है: इंसान, जिन्न, फ़रिश्ते, जानवर और पूरी कायनात।',
            },
            dependsOn: 3,
            dependencyTypes: {
              en: 'Genitive construction (إضافة)',
              ur: 'ترکیب اضافی',
              hi: 'इज़ाफ़त रचना',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'ع ل م',
              meaning: { en: 'To know, world, sign, flag', ur: 'جاننا، جہان، علامت، جھنڈا', hi: 'जानना, जहान, अलामत, झंडा' },
              words: [
                { arabic: 'عَالَمِين', meaning: { en: 'Worlds/Creation', ur: 'جہان/مخلوقات', hi: 'जहान/मख़्लूक़ात' }, count: 73 },
                { arabic: 'عِلْم', meaning: { en: 'Knowledge', ur: 'علم', hi: 'इल्म' }, count: 105 },
                { arabic: 'عَلِيم', meaning: { en: 'All-Knowing', ur: 'علیم/جاننے والا', hi: 'अलीम/जानने वाला' }, count: 157 },
                { arabic: 'يَعْلَمُ', meaning: { en: 'He knows', ur: 'وہ جانتا ہے', hi: 'वो जानता है' }, count: 212 },
                { arabic: 'عُلَمَاء', meaning: { en: 'Scholars', ur: 'علماء', hi: 'उलमा' }, count: 2 },
                { arabic: 'عَلَّمَ', meaning: { en: 'He taught', ur: 'سکھایا', hi: 'सिखाया' }, count: 31 },
              ],
            },
            frequency: {
              word: 'الْعَالَمِينَ',
              total: 73,
              spikedSurahs: ['الفاتحہ', 'البقرة', 'الشعراء', 'الصافات'],
              note: {
                en: 'الْعَالَمِينَ appears 73 times. Same root as عِلْم (knowledge) - the worlds are signs (عَلَامَات) pointing to Allah!',
                ur: 'الْعَالَمِينَ 73 بار آیا ہے۔ عِلْم (علم) سے ایک ہی مادہ - جہان اللہ کی طرف اشارہ کرنے والی نشانیاں (عَلَامَات) ہیں!',
                hi: 'आलमीन 73 बार आया है। इल्म (ज्ञान) से एक ही मादा - जहान अल्लाह की तरफ़ इशारा करने वाली निशानियाँ (अलामात) हैं!'
              },
            },
            irabReason: {
              case: 'مجرور',
              reason: {
                en: 'الْعَالَمِينَ is genitive because it is مضاف إليه (possessor) in the phrase "رَبِّ الْعَالَمِينَ" (Lord OF the worlds). The ـينَ ending is the sign of genitive plural for جمع مذکر سالم.',
                ur: 'الْعَالَمِينَ مجرور ہے کیونکہ "رَبِّ الْعَالَمِينَ" میں مضاف الیہ ہے۔ "ـينَ" کا آخری حصہ جمع مذکر سالم کی مجرور کی علامت ہے۔',
                hi: 'आलमीन मजरूर है क्योंकि "रब्बिल आलमीन" में मुज़ाफ़ इलैह है। "ـينَ" का आख़िरी हिस्सा जम्अ मुज़क्कर सालिम की मजरूर की अलामत है।',
              },
              rule: { en: 'Sound masculine plural: ـونَ (nom) → ـينَ (gen/acc)', ur: 'جمع مذکر سالم: ـونَ (مرفوع) → ـينَ (مجرور/منصوب)', hi: 'जम्अ मुज़क्कर सालिम: ـونَ (मर्फ़ू) → ـينَ (मजरूर/मन्सूब)' },
            },
            balagha: {
              title: { en: 'Why Plural "Worlds"?', ur: 'جہان جمع کیوں؟', hi: 'जहान जम्अ क्यों?' },
              explanation: {
                en: 'Why الْعَالَمِينَ (worlds - plural) and not الْعَالَم (world - singular)? Because Allah is Lord of ALL worlds - the world of humans, jinn, angels, animals, plants, microscopic organisms, distant galaxies, parallel dimensions, this world, the Hereafter, and worlds we cannot even conceive! Each species, each dimension, each realm is a separate "عَالَم".',
                ur: 'الْعَالَمِينَ (جہان - جمع) کیوں نہ کہ الْعَالَم (جہان - واحد)؟ کیونکہ اللہ تمام جہانوں کا رب ہے - انسانوں، جنوں، فرشتوں، جانوروں، پودوں، خرد بینی جانداروں، دور دراز کہکشاؤں، متوازی جہتوں، اس دنیا، آخرت، اور ان جہانوں کا جن کا ہم تصور بھی نہیں کر سکتے! ہر نوع، ہر جہت، ہر عالم الگ "عَالَم" ہے۔',
                hi: 'आलमीन (जहान - जम्अ) क्यों न कि आलम (जहान - वाहिद)? क्योंकि अल्लाह तमाम जहानों का रब है - इंसानों, जिन्नों, फ़रिश्तों, जानवरों, पौधों, सूक्ष्म जीवों, दूर कहकशाओं, समानांतर आयामों, इस दुनिया, आख़िरत, और उन जहानों का जिनकी हम कल्पना भी नहीं कर सकते!',
              },
            },
            linguisticMiracle: {
              title: { en: 'Connected to Knowledge', ur: 'علم سے تعلق', hi: 'इल्म से ताल्लुक़' },
              points: [
                {
                  en: 'عَالَم (world) and عِلْم (knowledge) share the same root! The world is a sign (عَلَامَة) pointing to Allah. Every creation teaches us about the Creator.',
                  ur: 'عَالَم (جہان) اور عِلْم (علم) ایک ہی مادے سے ہیں! جہان اللہ کی طرف اشارہ کرنے والی نشانی (عَلَامَة) ہے۔ ہر مخلوق ہمیں خالق کے بارے میں سکھاتی ہے۔',
                  hi: 'आलम (जहान) और इल्म (ज्ञान) एक ही मादे से हैं! जहान अल्लाह की तरफ़ इशारा करने वाली निशानी (अलामा) है। हर मख़्लूक़ हमें ख़ालिक़ के बारे में सिखाती है।',
                },
                {
                  en: 'The plural form العَالَمِينَ is جمع مذکر سالم (sound masculine plural) - treating "worlds" as rational beings because they all worship Allah in their own way.',
                  ur: 'العَالَمِينَ کی شکل جمع مذکر سالم ہے - جہانوں کو عاقل مانا گیا کیونکہ سب اپنے طریقے سے اللہ کی عبادت کرتے ہیں۔',
                  hi: 'आलमीन की शक्ल जम्अ मुज़क्कर सालिम है - जहानों को आक़िल माना गया क्योंकि सब अपने तरीक़े से अल्लाह की इबादत करते हैं।',
                },
              ],
            },
            tajweedTips: {
              rules: [
                {
                  rule: { en: 'Madd on ا', ur: 'ا پر مد', hi: 'ا पर मद्द' },
                  explanation: { en: 'The alif after ع is a natural madd (2 counts)', ur: 'ع کے بعد الف طبیعی مد ہے (دو حرکات)', hi: 'ع के बाद अलिफ़ तबई मद्द है (दो हरकात)' },
                },
                {
                  rule: { en: 'Shaddah on ل', ur: 'ل پر شدّہ', hi: 'ل पर शद्दा' },
                  explanation: { en: 'Lam of ال merges with ع (Lam Shamsiyyah)', ur: 'ال کا ل ع میں ضم ہو جاتا ہے (لام شمسی)', hi: 'अल का ल ع में ज़म हो जाता है (लाम शम्सिया)' },
                },
                {
                  rule: { en: 'Madd on ي', ur: 'ی پر مد', hi: 'ی पर मद्द' },
                  explanation: { en: 'The ي before ن is a natural madd letter', ur: 'ن سے پہلے ی مد کا حرف ہے', hi: 'ن से पहले ی मद्द का हर्फ़ है' },
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'عَالَم (world) = عِلْم (knowledge) - same root! World teaches knowledge of Allah', ur: 'عَالَم (جہان) = عِلْم (علم) - ایک مادہ! جہان اللہ کا علم سکھاتا ہے', hi: 'आलम (जहान) = इल्म (इल्म) - एक मादा! जहान अल्लाह का इल्म सिखाता है' },
                { en: 'العَالَمِينَ = ALL-A-MEAN (all worlds, even the meanest creature)', ur: 'العَالَمِينَ = تمام جہان، چھوٹی سے چھوٹی مخلوق بھی', hi: 'आलमीन = तमाम जहान, छोटी से छोटी मख़्लूक़ भी' },
              ],
              mnemonic: { en: 'A-L-A-M-I-N = All Levels And Multitudes In Nature', ur: 'ع ل م ی ن = عظیم لامحدود مخلوقات یکجا نظام', hi: 'अ ल म ी न = अज़ीम लामहदूद मख़्लूक़ात यकजा निज़ाम' },
            },
            scholarTranslations: [
              { scholar: 'Pickthall', translation: 'the Worlds' },
              { scholar: 'Yusuf Ali', translation: 'the Worlds' },
              { scholar: 'Sahih Intl', translation: 'all the worlds' },
              { scholar: 'جالندھری', translation: 'تمام جہانوں کا' },
              { scholar: 'مودودی', translation: 'سارے جہانوں کا' },
              { scholar: 'احمد رضا خان', translation: 'سارے جہان والوں کا' },
            ],
            similarPatterns: [
              { surah: 2, ayah: 47, text: 'فَضَّلْتُكُمْ عَلَى الْعَالَمِينَ', note: { en: 'Favored over the worlds', ur: 'جہان والوں پر فضیلت', hi: 'जहान वालों पर फ़ज़ीलत' } },
              { surah: 3, ayah: 97, text: 'وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ', note: { en: 'Allah\'s claim over mankind', ur: 'اللہ کا لوگوں پر حق', hi: 'अल्लाह का लोगों पर हक़' } },
              { surah: 21, ayah: 107, text: 'رَحْمَةً لِّلْعَالَمِينَ', note: { en: 'Prophet as mercy for worlds', ur: 'نبی ﷺ جہانوں کے لیے رحمت', hi: 'नबी ﷺ जहानों के लिए रहमत' } },
            ],
          },
        ],
        structure: {
          type: {
            en: 'Nominal sentence',
            ur: 'جملہ اسمیہ',
            hi: 'संज्ञात्मक वाक्य',
          },
          explanations: {
            en: 'A nominal sentence with الحمد as subject and لله as predicate. رب العالمين is an apposition (بدل) describing Allah as the Lord of all worlds and creations.',
            ur: 'ایک جملہ اسمیہ جس میں "الحمد" مبتدأ اور "للہ" خبر ہے۔ "رب العالمین" بدل ہے جو اللہ کو تمام جہانوں کا رب بتاتا ہے۔',
            hi: 'एक संज्ञात्मक वाक्य जहाँ "अल्हम्द" कर्ता और "लिल्लाह" विधेय है। "रब्बुल आलमीन" बदल है जो अल्लाह को सब जहानों का रब बताता है।',
          },
          diagram: [
            { from: 2, to: 1, label: 'خبر' },
            { from: 3, to: 2, label: 'بدل' },
            { from: 4, to: 3, label: 'مضاف إليه' },
          ],
        },
      },

      // Ayah 3: الرَّحْمَٰنِ الرَّحِيمِ
      3: {
        text: 'الرَّحْمَٰنِ الرَّحِيمِ',
        translations: {
          en: 'The Most Gracious, the Most Merciful',
          ur: 'بڑا مہربان نہایت رحم والا',
          hi: 'बड़ा मेहरबान निहायत रहम वाला',
          bn: 'পরম করুণাময় অতি দয়ালু',
          tr: 'Rahman, Rahim',
          id: 'Yang Maha Pengasih, Maha Penyayang',
        },
        words: [
          {
            id: 1,
            arabic: 'الرَّحْمَٰنِ',
            transliteration: 'ar-Raḥmāni',
            translations: {
              en: 'The Most Gracious',
              ur: 'بڑا مہربان',
              hi: 'बड़ा मेहरबान',
              bn: 'পরম করুণাময়',
              tr: 'Rahman',
              id: 'Yang Maha Pengasih',
            },
            pos: ['ADJ'],
            posLabel: 'ADJ',
            root: 'ر ح م',
            lemma: 'رَحْمَٰن',
            pattern: 'فَعْلَان',
            case: 'gen',
            features: {
              en: { type: 'Adjective (intensive)', definiteness: 'Definite', form: 'فَعْلَان - extreme/abundant quality' },
              ur: { type: 'صفت مبالغہ', definiteness: 'معرفہ', form: 'فَعْلَان - انتہائی کثرت' },
              hi: { type: 'अतिशय विशेषण', definiteness: 'परिभाषित', form: 'फ़अलान - अत्यधिक' },
            },
            grammarRole: 'sifah',
            grammarExplanations: {
              en: 'Adjective continuing to describe Allah from previous ayah. الرَّحْمَٰن is an exclusive name for Allah indicating vast mercy for all creation.',
              ur: 'پچھلی آیت سے اللہ کی صفت جاری۔ الرَّحْمَٰن صرف اللہ کا نام ہے جو تمام مخلوقات پر وسیع رحمت ظاہر کرتا ہے۔',
              hi: 'पिछली आयत से अल्लाह का विशेषण जारी। अर्रहमान केवल अल्लाह का नाम है जो सभी सृष्टि पर व्यापक दया दर्शाता है।',
            },
            dependsOn: null,
            dependencyTypes: {
              en: 'Continues from 1:2',
              ur: 'آیت ۲ سے جاری',
              hi: 'आयत 2 से जारी',
            },
          },
          {
            id: 2,
            arabic: 'الرَّحِيمِ',
            transliteration: 'ar-Raḥīmi',
            translations: {
              en: 'the Most Merciful',
              ur: 'نہایت رحم والا',
              hi: 'निहायत रहम वाला',
              bn: 'অতি দয়ালু',
              tr: 'Rahim',
              id: 'Maha Penyayang',
            },
            pos: ['ADJ'],
            posLabel: 'ADJ',
            root: 'ر ح م',
            lemma: 'رَحِيم',
            pattern: 'فَعِيل',
            case: 'gen',
            features: {
              en: { type: 'Adjective (intensive)', definiteness: 'Definite', form: 'فَعِيل - permanent quality' },
              ur: { type: 'صفت مبالغہ', definiteness: 'معرفہ', form: 'فَعِيل - دائمی صفت' },
              hi: { type: 'अतिशय विशेषण', definiteness: 'परिभाषित', form: 'फ़ईल - स्थायी गुण' },
            },
            grammarRole: 'sifah',
            grammarExplanations: {
              en: 'Second adjective - both الرَّحْمَٰنِ and الرَّحِيمِ come from same root ر ح م (mercy) but convey different aspects. الرَّحِيمِ indicates mercy specifically for believers.',
              ur: 'دوسری صفت - دونوں الرَّحْمَٰنِ اور الرَّحِيمِ ایک ہی مادہ ر ح م سے ہیں۔ الرَّحِيمِ خاص طور پر مومنین کی رحمت ہے۔',
              hi: 'दूसरा विशेषण - दोनों अर्रहमान और अर्रहीम एक ही मूल ر ح م से हैं। अर्रहीम विशेष रूप से ईमान वालों की दया है।',
            },
            dependsOn: 1,
            dependencyTypes: {
              en: 'Adjective (صفة)',
              ur: 'صفت',
              hi: 'विशेषण (सिफ़त)',
            },
          },
        ],
        structure: {
          type: {
            en: 'Continuation of description',
            ur: 'صفات کا سلسلہ',
            hi: 'विशेषणों का क्रम',
          },
          explanations: {
            en: 'These two adjectives continue describing Allah from the previous ayah. الرَّحْمَٰنِ indicates vast, all-encompassing mercy for all creation, while الرَّحِيمِ indicates personal, continuous mercy specifically for believers.',
            ur: 'یہ دونوں صفات پچھلی آیت سے اللہ کی توصیف جاری رکھتی ہیں۔ الرَّحْمَٰنِ تمام مخلوقات کے لیے وسیع رحمت اور الرَّحِيمِ خاص طور پر مومنین کے لیے دائمی رحمت ہے۔',
            hi: 'ये दोनों विशेषण पिछली आयत से अल्लाह की तारीफ जारी रखते हैं। अर्रहमान सभी सृष्टि के लिए व्यापक दया और अर्रहीम विशेष रूप से ईमान वालों के लिए स्थायी दया है।',
          },
          diagram: [
            { from: 2, to: 1, label: 'صفة' },
          ],
        },
      },

      // Ayah 4: مَالِكِ يَوْمِ الدِّينِ
      4: {
        text: 'مَالِكِ يَوْمِ الدِّينِ',
        translations: {
          en: 'Master of the Day of Judgment',
          ur: 'روز جزا کا مالک',
          hi: 'रोज़-ए-जज़ा का मालिक',
          bn: 'বিচার দিনের মালিক',
          tr: 'Din gününün sahibi',
          id: 'Pemilik hari pembalasan',
        },
        words: [
          {
            id: 1,
            arabic: 'مَالِكِ',
            transliteration: 'Māliki',
            translations: {
              en: 'Master/Owner',
              ur: 'مالک',
              hi: 'मालिक',
              bn: 'মালিক',
              tr: 'Sahibi',
              id: 'Pemilik',
            },
            pos: ['N'],
            posLabel: 'N',
            root: 'م ل ك',
            lemma: 'مَالِك',
            pattern: 'فَاعِل',
            case: 'gen',
            features: {
              en: { type: 'Active participle', state: 'Construct (مضاف)', form: 'فَاعِل - doer of action' },
              ur: { type: 'اسم فاعل', state: 'مضاف', form: 'فَاعِل - کرنے والا' },
              hi: { type: 'कर्तृवाचक', state: 'मुज़ाफ़', form: 'फ़ाइल - करने वाला' },
            },
            grammarRole: 'sifah',
            grammarExplanations: {
              en: 'Another attribute of Allah - continues the description from previous ayahs. مَالِكِ means the one who owns and has complete authority.',
              ur: 'اللہ کی ایک اور صفت - پچھلی آیات سے جاری۔ مَالِكِ یعنی جو مکمل اختیار اور ملکیت رکھتا ہے۔',
              hi: 'अल्लाह का एक और विशेषण - पिछली आयतों से जारी। मालिक यानी जो पूर्ण अधिकार और स्वामित्व रखता है।',
            },
            dependsOn: null,
            dependencyTypes: {
              en: 'Continues description of Allah',
              ur: 'اللہ کی صفات جاری',
              hi: 'अल्लाह के विशेषण जारी',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'م ل ك',
              meaning: { en: 'To own, possess, reign', ur: 'مالک ہونا، ملکیت، بادشاہت', hi: 'मालिक होना, मिल्कियत, बादशाहत' },
              words: [
                { arabic: 'مَالِك', meaning: { en: 'Owner/Master', ur: 'مالک', hi: 'मालिक' }, count: 2 },
                { arabic: 'مَلِك', meaning: { en: 'King', ur: 'بادشاہ', hi: 'बादशाह' }, count: 5 },
                { arabic: 'مُلْك', meaning: { en: 'Kingdom', ur: 'بادشاہت', hi: 'बादशाहत' }, count: 48 },
                { arabic: 'مَلَكُوت', meaning: { en: 'Dominion', ur: 'قدرت کا نظام', hi: 'क़ुदरत का निज़ाम' }, count: 4 },
                { arabic: 'مَلَائِكَة', meaning: { en: 'Angels', ur: 'فرشتے', hi: 'फ़रिश्ते' }, count: 68 },
                { arabic: 'مَلَك', meaning: { en: 'Angel', ur: 'فرشتہ', hi: 'फ़रिश्ता' }, count: 21 },
                { arabic: 'مَمْلُوك', meaning: { en: 'Owned/Slave', ur: 'غلام', hi: 'ग़ुलाम' }, count: 1 },
              ],
            },
            frequency: {
              word: 'مَالِك',
              total: 2,
              note: {
                en: 'مَالِك appears only 2 times in Quran, both in Fatiha context! Some reciters read "مَلِك" (King) instead. Both are valid Qira\'at.',
                ur: 'مَالِك صرف 2 بار قرآن میں ہے، دونوں فاتحہ میں! بعض قراءات میں "مَلِك" (بادشاہ) پڑھا جاتا ہے۔ دونوں صحیح ہیں۔',
                hi: 'मालिक सिर्फ़ 2 बार क़ुरआन में है, दोनों फ़ातिहा में! बाज़ क़िरा\'अत में "मलिक" (बादशाह) पढ़ा जाता है। दोनों सही हैं।'
              },
            },
            irabReason: {
              case: 'مجرور',
              reason: {
                en: 'مَالِكِ is genitive because it continues the description (صفت) of الله from the previous ayahs. Since الله was genitive, all its describing attributes must also be genitive.',
                ur: 'مَالِكِ مجرور ہے کیونکہ یہ پچھلی آیات سے اللہ کی صفت جاری رکھتا ہے۔ چونکہ اللہ مجرور تھا، اس کی تمام صفات بھی مجرور ہوں گی۔',
                hi: 'मालिकि मजरूर है क्योंकि यह पिछली आयतों से अल्लाह की सिफ़त जारी रखता है। चूँकि अल्लाह मजरूर था, उसकी तमाम सिफ़ात भी मजरूर होंगी।',
              },
              rule: { en: 'Attribute (صفة) follows in case', ur: 'صفت موصوف کے اعراب میں', hi: 'सिफ़त मौसूफ़ के एराब में' },
            },
            balagha: {
              title: { en: 'مَالِك vs مَلِك', ur: 'مَالِك بمقابلہ مَلِك', hi: 'मालिक बमुक़ाबिला मलिक' },
              explanation: {
                en: 'Some read "مَلِك" (King) and others "مَالِك" (Owner). Both are valid Qira\'at! مَلِك (King) emphasizes authority and command. مَالِك (Owner) emphasizes possession - He OWNS that Day, everything on it is His property. A king may not own everything, but an owner possesses all. On Judgment Day, Allah owns everything and everyone completely!',
                ur: 'کچھ "مَلِك" (بادشاہ) پڑھتے ہیں اور کچھ "مَالِك" (مالک)۔ دونوں صحیح قراءات ہیں! مَلِك اختیار اور حکم پر زور دیتا ہے۔ مَالِك ملکیت پر زور دیتا ہے - وہ اس دن کا مالک ہے، سب کچھ اس کی ملکیت ہے۔ بادشاہ شاید سب کا مالک نہ ہو، لیکن مالک سب کا مالک ہے!',
                hi: 'कुछ "मलिक" (बादशाह) पढ़ते हैं और कुछ "मालिक" (मालिक)। दोनों सही क़िरा\'अत हैं! मलिक इख़्तियार और हुक्म पर ज़ोर देता है। मालिक मिल्कियत पर ज़ोर देता है - वो उस दिन का मालिक है, सब कुछ उसकी मिल्कियत है!',
              },
            },
            linguisticMiracle: {
              title: { en: 'Active Participle Pattern', ur: 'اسم فاعل کا وزن', hi: 'इस्म फ़ाइल का वज़न' },
              points: [
                {
                  en: 'مَالِك is اسم فاعل (active participle) on pattern فَاعِل - one who is actively owning/possessing. Not past ownership, but CURRENT and CONTINUOUS.',
                  ur: 'مَالِك اسم فاعل ہے وزن فَاعِل پر - جو فعال طور پر مالک ہے۔ ماضی کی ملکیت نہیں، بلکہ موجودہ اور مسلسل۔',
                  hi: 'मालिक इस्म फ़ाइल है वज़न ف़ाइल पर - जो फ़ाइल तौर पर मालिक है। माज़ी की मिल्कियत नहीं, बल्कि मौजूदा और मुसलसल।',
                },
                {
                  en: 'In مُضَاف state (مَالِكِ يَوْمِ), shows intimate connection between Allah and the Day - He doesn\'t just rule it, He owns it.',
                  ur: 'مُضَاف حالت میں (مَالِكِ يَوْمِ)، اللہ اور اس دن کا گہرا تعلق ظاہر ہوتا ہے - وہ صرف حکم نہیں چلاتا، وہ اس کا مالک ہے۔',
                  hi: 'मुज़ाफ़ हालत में (मालिकि यौमि), अल्लाह और उस दिन का गहरा ताल्लुक़ ज़ाहिर होता है - वो सिर्फ़ हुक्म नहीं चलाता, वो उसका मालिक है।',
                },
              ],
            },
            tajweedTips: {
              rules: [
                {
                  rule: { en: 'Madd on ا', ur: 'ا پر مد', hi: 'ا پر मद्द' },
                  explanation: { en: 'The alif after م is a natural madd (2 counts)', ur: 'م کے بعد الف طبیعی مد ہے', hi: 'म के बाद अलिफ़ तबई मद्द है' },
                },
                {
                  rule: { en: 'Kasra at end', ur: 'آخر میں زیر', hi: 'आख़िर में ज़ेर' },
                  explanation: { en: 'Clear kasra sound connecting to next word', ur: 'واضح زیر اگلے لفظ سے ملتی ہوئی', hi: 'वाज़ेह ज़ेर अगले लफ़्ज़ से मिलती हुई' },
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'مَالِك = OWNER (like owning a house), not just KING (ruling over)', ur: 'مَالِك = مالک (جیسے گھر کا مالک)، صرف بادشاہ نہیں', hi: 'मालिक = मालिक (जैसे घर का मालिक), सिर्फ़ बादशाह नहीं' },
                { en: 'Same root as مَلَائِكَة (angels) - angels are Allah\'s servants whom He owns', ur: 'مَلَائِكَة (فرشتے) سے ایک مادہ - فرشتے اللہ کے خادم ہیں جن کا وہ مالک ہے', hi: 'मलाइका (फ़रिश्ते) से एक मादा - फ़रिश्ते अल्लाह के ख़ादिम हैं जिनका वो मालिक है' },
              ],
              mnemonic: { en: 'M-A-L-I-K = Master And Lord In Kompleteness', ur: 'م ل ک = مکمل لامحدود کنٹرول', hi: 'म ल क = मुकम्मल लामहदूद कंट्रोल' },
            },
            scholarTranslations: [
              { scholar: 'Pickthall', translation: 'Owner' },
              { scholar: 'Yusuf Ali', translation: 'Master' },
              { scholar: 'Sahih Intl', translation: 'Sovereign' },
              { scholar: 'Hafs', translation: 'مَالِك (Owner)' },
              { scholar: 'Warsh', translation: 'مَلِك (King)' },
              { scholar: 'جالندھری', translation: 'مالک' },
            ],
            similarPatterns: [
              { surah: 3, ayah: 26, text: 'مَالِكَ الْمُلْكِ', note: { en: 'Owner of all sovereignty', ur: 'ساری بادشاہی کا مالک', hi: 'सारी बादशाहत का मालिक' } },
              { surah: 114, ayah: 2, text: 'مَلِكِ النَّاسِ', note: { en: 'King of mankind', ur: 'لوگوں کا بادشاہ', hi: 'लोगों का बादशाह' } },
            ],
          },
          {
            id: 2,
            arabic: 'يَوْمِ',
            transliteration: 'yawmi',
            translations: {
              en: 'of the Day',
              ur: 'دن کا',
              hi: 'दिन का',
              bn: 'দিনের',
              tr: 'günün',
              id: 'hari',
            },
            pos: ['N'],
            posLabel: 'N',
            root: 'ي و م',
            lemma: 'يَوْم',
            pattern: 'فَعْل',
            case: 'gen',
            features: {
              en: { type: 'Noun', state: 'Construct (مضاف)' },
              ur: { type: 'اسم', state: 'مضاف' },
              hi: { type: 'संज्ञा', state: 'मुज़ाफ़' },
            },
            grammarRole: 'mudhafIlayh',
            grammarExplanations: {
              en: 'First part of compound genitive - "Day" is what مَالِكِ (Master) owns. This refers to the Day of Judgment.',
              ur: 'مرکب اضافی کا پہلا حصہ - "یوم" وہ ہے جس کا مَالِكِ مالک ہے۔ یہ قیامت کا دن ہے۔',
              hi: 'मिश्रित इज़ाफ़त का पहला हिस्सा - "यौम" वह है जिसका मालिक स्वामी है। यह क़यामत का दिन है।',
            },
            dependsOn: 1,
            dependencyTypes: {
              en: 'Genitive construction (إضافة)',
              ur: 'ترکیب اضافی',
              hi: 'इज़ाफ़त रचना',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'ي و م',
              meaning: { en: 'Day, time period', ur: 'دن، وقت', hi: 'दिन, वक़्त' },
              words: [
                { arabic: 'يَوْم', meaning: { en: 'Day', ur: 'دن', hi: 'दिन' }, count: 365 },
                { arabic: 'يَوْمَئِذٍ', meaning: { en: 'That day', ur: 'اس دن', hi: 'उस दिन' }, count: 70 },
                { arabic: 'الْيَوْمَ', meaning: { en: 'Today', ur: 'آج', hi: 'आज' }, count: 64 },
                { arabic: 'أَيَّام', meaning: { en: 'Days (plural)', ur: 'دن (جمع)', hi: 'दिन (बहुवचन)' }, count: 57 },
              ],
            },
            frequency: {
              word: 'يَوْم',
              total: 365,
              note: {
                en: 'يَوْم appears exactly 365 times in Quran - the number of days in a year! Divine precision!',
                ur: 'يَوْم قرآن میں ٹھیک 365 بار آیا ہے - سال میں دنوں کی تعداد! الہٰی درستگی!',
                hi: 'यौम क़ुरआन में ठीक 365 बार आया है - साल में दिनों की तादाद! इलाही दुरुस्तगी!'
              },
            },
            irabReason: {
              case: 'مجرور',
              reason: {
                en: 'يَوْمِ is genitive because it is مضاف إليه to مَالِكِ. In the construct "مَالِكِ يَوْمِ" (Owner OF Day), the possessed noun takes genitive case.',
                ur: 'يَوْمِ مجرور ہے کیونکہ یہ مَالِكِ کا مضاف الیہ ہے۔ "مَالِكِ يَوْمِ" (دن کا مالک) میں مضاف الیہ مجرور ہوتا ہے۔',
                hi: 'यौमि मजरूर है क्योंकि यह मालिकि का मुज़ाफ़ इलैह है। "मालिकि यौमि" (दिन का मालिक) में मुज़ाफ़ इलैह मजरूर होता है।',
              },
              rule: { en: 'مضاف إليه = Always Genitive', ur: 'مضاف الیہ = ہمیشہ مجرور', hi: 'मुज़ाफ़ इलैह = हमेशा मजरूर' },
            },
            balagha: {
              title: { en: 'Why يَوْم (Day) and not وَقْت (Time)?', ur: 'يَوْم کیوں نہ وَقْت؟', hi: 'यौम क्यों न वक़्त?' },
              explanation: {
                en: 'يَوْم is more specific and intense than وَقْت. A "day" has a beginning, events, and an end. It emphasizes that Judgment Day is a real, definite event with specific stages - gathering, reckoning, weighing of deeds, crossing the bridge. It\'s not vague "sometime" but a structured "DAY".',
                ur: 'يَوْم وَقْت سے زیادہ مخصوص اور شدید ہے۔ "دن" کی ابتدا، واقعات اور انتہا ہوتی ہے۔ یہ ظاہر کرتا ہے کہ قیامت ایک حقیقی، یقینی واقعہ ہے جس کے مخصوص مراحل ہیں - حشر، حساب، اعمال کا وزن، پل صراط۔',
                hi: 'यौम वक़्त से ज़्यादा मख़्सूस और शदीद है। "दिन" की इब्तिदा, वाक़ियात और इंतिहा होती है। यह ज़ाहिर करता है कि क़यामत एक हक़ीक़ी, यक़ीनी वाक़िया है जिसके मख़्सूस मराहिल हैं।',
              },
            },
            linguisticMiracle: {
              title: { en: '365 Times!', ur: '365 بار!', hi: '365 बार!' },
              points: [
                {
                  en: 'يَوْم appears exactly 365 times in Quran - matching days in a solar year! Not 364, not 366, but exactly 365.',
                  ur: 'يَوْم قرآن میں ٹھیک 365 بار آیا - شمسی سال میں دنوں کی تعداد! نہ 364، نہ 366، بالکل 365!',
                  hi: 'यौम क़ुरआन में ठीक 365 बार आया - शम्सी साल में दिनों की तादाद! न 364, न 366, बिल्कुल 365!',
                },
                {
                  en: 'This is in the singular form. When you add plurals and derivatives, the count tells another story of divine arrangement.',
                  ur: 'یہ واحد کی شکل میں ہے۔ جب جمع اور مشتقات شامل کریں تو الہٰی ترتیب کی اور کہانی سامنے آتی ہے۔',
                  hi: 'यह वाहिद की शक्ल में है। जब जम्अ और मुश्तक़्क़ात शामिल करें तो इलाही तरतीब की और कहानी सामने आती है।',
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'يَوْم = Y-O-M = Year Of Measurement (365 times for 365 days!)', ur: 'يَوْم = 365 بار = 365 دن!', hi: 'यौम = 365 बार = 365 दिन!' },
              ],
              mnemonic: { en: 'Y-A-W-M = Year\'s Actual Written Measure', ur: 'ی و م = یہ واقعی مقدار', hi: 'य व म = यह वाक़ई मिक़दार' },
            },
          },
          {
            id: 3,
            arabic: 'الدِّينِ',
            transliteration: 'ad-Dīni',
            translations: {
              en: 'of Judgment',
              ur: 'جزا کا',
              hi: 'जज़ा का',
              bn: 'বিচারের',
              tr: 'din',
              id: 'pembalasan',
            },
            pos: ['N'],
            posLabel: 'N',
            root: 'د ي ن',
            lemma: 'دِين',
            pattern: 'فِعْل',
            case: 'gen',
            features: {
              en: { type: 'Noun', definiteness: 'Definite', meaning: 'Recompense/Judgment' },
              ur: { type: 'اسم', definiteness: 'معرفہ', meaning: 'جزا/بدلہ' },
              hi: { type: 'संज्ञा', definiteness: 'परिभाषित', meaning: 'प्रतिफल/निर्णय' },
            },
            grammarRole: 'mudhafIlayh',
            grammarExplanations: {
              en: 'Second genitive - الدِّينِ here means recompense/judgment. "Day of الدِّين" is when all deeds are judged and rewarded/punished.',
              ur: 'دوسرا مضاف الیہ - الدِّينِ یہاں جزا/بدلہ کے معنی میں ہے۔ "یوم الدین" جب تمام اعمال کا حساب ہوگا۔',
              hi: 'दूसरा मुज़ाफ़ इलैह - अद्दीन यहाँ प्रतिफल के अर्थ में है। "यौमुद्दीन" जब सभी कर्मों का हिसाब होगा।',
            },
            dependsOn: 2,
            dependencyTypes: {
              en: 'Genitive construction (إضافة)',
              ur: 'ترکیب اضافی',
              hi: 'इज़ाफ़त रचना',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'د ي ن',
              meaning: { en: 'Religion, recompense, judgment, debt', ur: 'دین، جزا، قرض', hi: 'दीन, जज़ा, क़र्ज़' },
              words: [
                { arabic: 'دِين', meaning: { en: 'Religion / Recompense', ur: 'دین / جزا', hi: 'दीन / जज़ा' }, count: 92 },
                { arabic: 'دَيْن', meaning: { en: 'Debt', ur: 'قرض', hi: 'क़र्ज़' }, count: 6 },
                { arabic: 'دَانَ', meaning: { en: 'To judge / owe', ur: 'فیصلہ کرنا / مقروض ہونا', hi: 'फ़ैसला करना / मक़रूज़ होना' }, count: 3 },
                { arabic: 'مَدِينِين', meaning: { en: 'Those judged', ur: 'جن کا حساب ہو', hi: 'जिनका हिसाब हो' }, count: 2 },
              ],
            },
            frequency: {
              word: 'الدِّين',
              total: 92,
              note: {
                en: 'دِين has TWO main meanings: (1) Religion/way of life (2) Recompense/Judgment. Here it means RECOMPENSE - the Day when everyone gets what they deserve!',
                ur: 'دِين کے دو اہم معنی ہیں: (1) مذہب/طریقہ زندگی (2) جزا/بدلہ۔ یہاں جزا مراد ہے - وہ دن جب ہر ایک کو اس کے اعمال کا بدلہ ملے گا!',
                hi: 'दीन के दो अहम मायने हैं: (1) मज़हब/तरीक़ा-ए-ज़िंदगी (2) जज़ा/बदला। यहाँ जज़ा मुराद है - वो दिन जब हर एक को उसके आमाल का बदला मिलेगा!'
              },
            },
            irabReason: {
              case: 'مجرور',
              reason: {
                en: 'الدِّينِ is genitive as مضاف إليه of يَوْمِ. This creates a chain: مَالِكِ يَوْمِ الدِّينِ (Owner of Day of Judgment). Each linked noun is genitive.',
                ur: 'الدِّينِ مجرور ہے کیونکہ يَوْمِ کا مضاف الیہ ہے۔ یہ ایک سلسلہ بناتا ہے: مَالِكِ يَوْمِ الدِّينِ۔ ہر جڑا ہوا اسم مجرور ہے۔',
                hi: 'अद्दीनि मजरूर है क्योंकि यौमि का मुज़ाफ़ इलैह है। यह एक सिलसिला बनाता है: मालिकि यौमिद्दीन। हर जुड़ा हुआ इस्म मजरूर है।',
              },
              rule: { en: 'Chain of إضافة = All genitive', ur: 'اضافت کا سلسلہ = سب مجرور', hi: 'इज़ाफ़त का सिलसिला = सब मजरूर' },
            },
            balagha: {
              title: { en: 'The Day of Payback', ur: 'بدلے کا دن', hi: 'बदले का दिन' },
              explanation: {
                en: 'Why الدِّين (recompense) and not الْحِسَاب (reckoning) or الْقِيَامَة (resurrection)? الدِّين emphasizes JUSTICE - you get exactly what you deserve, no more, no less. Like a debt that must be paid. Every deed is a "loan" that will be repaid on that Day. Good for good, evil for evil. Perfect divine accounting!',
                ur: 'الدِّين (جزا) کیوں نہ الْحِسَاب (حساب) یا الْقِيَامَة (قیامت)؟ الدِّين انصاف پر زور دیتا ہے - آپ کو بالکل وہی ملے گا جس کے مستحق ہو، نہ زیادہ نہ کم۔ جیسے قرض جو ادا کرنا ہو۔ ہر عمل ایک "قرض" ہے جو اس دن واپس ملے گا۔ نیکی کا نیکی، برائی کا برائی!',
                hi: 'अद्दीन (जज़ा) क्यों न अल्हिसाब (हिसाब) या अल्क़ियामा (क़यामत)? अद्दीन इंसाफ़ पर ज़ोर देता है - आपको बिल्कुल वही मिलेगा जिसके मुस्तहिक़ हो, न ज़्यादा न कम। जैसे क़र्ज़ जो अदा करना हो।',
              },
            },
            linguisticMiracle: {
              title: { en: 'Double Meaning of دِين', ur: 'دِين کے دو معنی', hi: 'दीन के दो मायने' },
              points: [
                {
                  en: 'دِين means both "religion" AND "recompense". What a connection! Your religion (دِين) determines your recompense (دِين)!',
                  ur: 'دِين کا مطلب "مذہب" بھی ہے اور "جزا" بھی۔ کیا تعلق! آپ کا دین آپ کی جزا طے کرتا ہے!',
                  hi: 'दीन का मतलब "मज़हब" भी है और "जज़ा" भी। क्या ताल्लुक़! आपका दीन आपकी जज़ा तय करता है!',
                },
                {
                  en: 'Also related to دَيْن (debt). On Judgment Day, all debts are settled - to Allah and to people.',
                  ur: 'دَيْن (قرض) سے بھی تعلق۔ قیامت کے دن تمام قرضے چکائے جائیں گے - اللہ کے اور لوگوں کے۔',
                  hi: 'दैन (क़र्ज़) से भी ताल्लुक़। क़यामत के दिन तमाम क़र्ज़े चुकाए जाएंगे - अल्लाह के और लोगों के।',
                },
              ],
            },
            tajweedTips: {
              rules: [
                {
                  rule: { en: 'Shaddah on د', ur: 'د پر شدّہ', hi: 'द पर शद्दा' },
                  explanation: { en: 'The د is doubled due to Lam Shamsiyyah merging', ur: 'لام شمسی کی وجہ سے د دوگنا', hi: 'लाम शम्सिया की वजह से द दोगुना' },
                },
                {
                  rule: { en: 'Madd on ي', ur: 'ی پر مد', hi: 'ی पर मद्द' },
                  explanation: { en: 'The ي is a natural madd letter (2 counts)', ur: 'ی مد کا حرف ہے (دو حرکات)', hi: 'ی मद्द का हर्फ़ है (दो हरकात)' },
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'الدِّين = The DEBT that will be paid = The Day of PAYBACK!', ur: 'الدِّين = قرض جو ادا ہوگا = بدلے کا دن!', hi: 'अद्दीन = क़र्ज़ जो अदा होगा = बदले का दिन!' },
                { en: 'Your دِين (religion) decides your دِين (judgment)', ur: 'آپ کا دِین آپ کی جزا طے کرے گا', hi: 'आपका दीन आपकी जज़ा तय करेगा' },
              ],
              mnemonic: { en: 'D-I-N = Deeds In Need of recompense', ur: 'د ی ن = دی ہوئی نیکیوں کا بدلہ', hi: 'द ी न = दी हुई नेकियों का बदला' },
            },
            scholarTranslations: [
              { scholar: 'Pickthall', translation: 'of Judgment' },
              { scholar: 'Yusuf Ali', translation: 'of Judgment' },
              { scholar: 'Sahih Intl', translation: 'of Recompense' },
              { scholar: 'جالندھری', translation: 'جزا کا' },
              { scholar: 'مودودی', translation: 'جزا کا' },
              { scholar: 'Note', translation: { en: 'NOT religion here, but judgment/recompense', ur: 'یہاں مذہب نہیں، جزا/بدلہ مراد ہے', hi: 'यहाँ मज़हब नहीं, जज़ा/बदला मुराद है' } },
            ],
            similarPatterns: [
              { surah: 82, ayah: 17, text: 'وَمَا أَدْرَاكَ مَا يَوْمُ الدِّينِ', note: { en: 'What will make you know what is the Day of Recompense?', ur: 'تجھے کیا معلوم یوم الدین کیا ہے؟', hi: 'तुझे क्या मालूम यौमुद्दीन क्या है?' } },
              { surah: 51, ayah: 6, text: 'وَإِنَّ الدِّينَ لَوَاقِعٌ', note: { en: 'And indeed, the recompense is to occur', ur: 'بے شک جزا ہو کر رہے گی', hi: 'बेशक जज़ा हो कर रहेगी' } },
            ],
          },
        ],
        structure: {
          type: {
            en: 'Construct chain (إضافة)',
            ur: 'سلسلہ اضافت',
            hi: 'इज़ाफ़त श्रृंखला',
          },
          explanations: {
            en: 'A three-word construct chain: Master + of Day + of Judgment. Each word is in genitive case due to the إضافة construction. This emphasizes Allah\'s absolute sovereignty on the Day when all creation will be judged.',
            ur: 'تین لفظوں کی ترکیب اضافی: مالک + دن کا + جزا کا۔ ہر لفظ اضافت کی وجہ سے مجرور ہے۔ یہ اس دن اللہ کی مکمل حاکمیت پر زور دیتا ہے جب تمام مخلوقات کا حساب ہوگا۔',
            hi: 'तीन शब्दों की इज़ाफ़त श्रृंखला: मालिक + दिन का + जज़ा का। हर शब्द इज़ाफ़त के कारण मजरूर है। यह उस दिन अल्लाह की पूर्ण हाकिमियत पर ज़ोर देता है जब सभी का हिसाब होगा।',
          },
          diagram: [
            { from: 2, to: 1, label: 'مضاف إليه' },
            { from: 3, to: 2, label: 'مضاف إليه' },
          ],
        },
      },

      // Ayah 5: إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
      5: {
        text: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        translations: {
          en: 'You alone we worship, and You alone we ask for help',
          ur: 'تیری ہی ہم عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں',
          hi: 'तेरी ही हम इबादत करते हैं और तुझी से मदद माँगते हैं',
          bn: 'আমরা শুধুমাত্র তোমারই ইবাদত করি এবং শুধুমাত্র তোমারই কাছে সাহায্য চাই',
          tr: 'Ancak sana kulluk eder ve ancak senden yardım dileriz',
          id: 'Hanya kepada-Mu kami menyembah dan hanya kepada-Mu kami memohon pertolongan',
        },
        words: [
          {
            id: 1,
            arabic: 'إِيَّاكَ',
            transliteration: 'iyyāka',
            translations: {
              en: 'You alone',
              ur: 'صرف تجھے',
              hi: 'केवल तुझे',
              bn: 'শুধুমাত্র তোমাকে',
              tr: 'Ancak sana',
              id: 'Hanya kepada-Mu',
            },
            pos: ['PRON'],
            posLabel: 'PRON',
            root: null,
            lemma: 'إِيَّا',
            pattern: null,
            case: 'acc',
            features: {
              en: { type: 'Separate pronoun (accusative)', person: '2nd person singular', emphasis: 'Fronted for emphasis (تقديم)' },
              ur: { type: 'ضمیر منفصل منصوب', person: 'واحد حاضر', emphasis: 'تقدیم برائے تاکید' },
              hi: { type: 'पृथक सर्वनाम (कर्म)', person: 'एकवचन संबोधित', emphasis: 'ज़ोर के लिए आगे' },
            },
            grammarRole: 'obj',
            grammarExplanations: {
              en: 'Object placed BEFORE the verb for emphasis - "YOU (specifically/exclusively) we worship". This fronting (تقديم) creates restriction meaning ONLY You.',
              ur: 'مفعول فعل سے پہلے تاکید کے لیے - "صرف تیری عبادت کرتے ہیں"۔ یہ تقدیم حصر پیدا کرتی ہے یعنی صرف تو۔',
              hi: 'ज़ोर के लिए क्रिया से पहले कर्म - "केवल तेरी इबादत करते हैं"। यह तक़दीम हस्र पैदा करता है यानी सिर्फ़ तू।',
            },
            dependsOn: 2,
            dependencyTypes: {
              en: 'Fronted object (مفعول به مقدم)',
              ur: 'مفعول بہ مقدم',
              hi: 'आगे रखा कर्म',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: null,
              meaning: { en: 'Special pronoun - no root', ur: 'خاص ضمیر - کوئی مادہ نہیں', hi: 'ख़ास ज़मीर - कोई मादा नहीं' },
              words: [
                { arabic: 'إِيَّاكَ', meaning: { en: 'You (obj., emphatic)', ur: 'صرف تجھے', hi: 'सिर्फ़ तुझे' }, count: 5 },
                { arabic: 'إِيَّايَ', meaning: { en: 'Me (obj., emphatic)', ur: 'صرف مجھے', hi: 'सिर्फ़ मुझे' }, count: 4 },
                { arabic: 'إِيَّاهُ', meaning: { en: 'Him (obj., emphatic)', ur: 'صرف اسے', hi: 'सिर्फ़ उसे' }, count: 2 },
                { arabic: 'إِيَّانَا', meaning: { en: 'Us (obj., emphatic)', ur: 'صرف ہمیں', hi: 'सिर्फ़ हमें' }, count: 1 },
              ],
            },
            frequency: {
              word: 'إِيَّاكَ',
              total: 5,
              note: {
                en: 'إِيَّاكَ appears only 5 times in Quran, 2 of them right here in Al-Fatiha! It\'s the essence of Tawheed - directing everything to Allah ALONE.',
                ur: 'إِيَّاكَ صرف 5 بار قرآن میں ہے، 2 بار یہیں الفاتحہ میں! یہ توحید کا جوہر ہے - سب کچھ صرف اللہ کی طرف۔',
                hi: 'इय्याका सिर्फ़ 5 बार क़ुरआन में है, 2 बार यहीं अल्फ़ातिहा में! यह तौहीद का जौहर है - सब कुछ सिर्फ़ अल्लाह की तरफ़।'
              },
            },
            irabReason: {
              case: 'منصوب',
              reason: {
                en: 'إِيَّاكَ is accusative (منصوب) because it\'s the OBJECT (مفعول به) of the verb نَعْبُدُ. But it\'s placed BEFORE the verb (تقديم المفعول) for emphasis - creating restriction/exclusivity (حصر).',
                ur: 'إِيَّاكَ منصوب ہے کیونکہ یہ فعل نَعْبُدُ کا مفعول بہ ہے۔ لیکن یہ فعل سے پہلے رکھا گیا (تقديم المفعول) تاکید کے لیے - جو حصر پیدا کرتا ہے۔',
                hi: 'इय्याका मन्सूब है क्योंकि यह फ़ेल नअबुदु का मफ़ऊल बिही है। लेकिन यह फ़ेल से पहले रखा गया (तक़दीम अल-मफ़ऊल) ताकीद के लिए - जो हस्र पैदा करता है।',
              },
              rule: { en: 'Fronted object + verb = Restriction (حصر)', ur: 'تقديم مفعول + فعل = حصر', hi: 'तक़दीम मफ़ऊल + फ़ेल = हस्र' },
            },
            balagha: {
              title: { en: 'The Power of Word Order', ur: 'ترتیب الفاظ کی طاقت', hi: 'तरतीब अल्फ़ाज़ की ताक़त' },
              explanation: {
                en: 'Normal Arabic: "نَعْبُدُكَ" (we worship You). But here: "إِيَّاكَ نَعْبُدُ" (YOU we worship). Moving the object before the verb creates حصر (restriction/exclusivity). It\'s like saying "YOU and ONLY YOU we worship - no one else, nothing else, ever!" This is the foundation of Tawheed in one sentence.',
                ur: 'عام عربی: "نَعْبُدُكَ" (ہم تیری عبادت کرتے ہیں)۔ لیکن یہاں: "إِيَّاكَ نَعْبُدُ" (صرف تیری عبادت)۔ مفعول کو فعل سے پہلے رکھنا حصر پیدا کرتا ہے۔ گویا کہہ رہے ہیں "صرف تو اور صرف تو - کوئی اور نہیں، کبھی نہیں!" ایک جملے میں توحید کی بنیاد۔',
                hi: 'आम अरबी: "نَعْبُدُكَ" (हम तेरी इबादत करते हैं)। लेकिन यहाँ: "إِيَّاكَ نَعْبُدُ" (सिर्फ़ तेरी इबादत)। मफ़ऊल को फ़ेल से पहले रखना हस्र पैदा करता है। गोया कह रहे हैं "सिर्फ़ तू और सिर्फ़ तू!" एक जुमले में तौहीद की बुनियाद।',
              },
            },
            linguisticMiracle: {
              title: { en: 'إِيَّا - The Unique Pronoun', ur: 'إِيَّا - منفرد ضمیر', hi: 'इय्या - मुन्फ़रिद ज़मीर' },
              points: [
                {
                  en: 'إِيَّا is a SEPARATE accusative pronoun. Unlike attached pronouns (ـكَ, ـهُ), it can be moved around for emphasis. This flexibility allows the powerful word order here.',
                  ur: 'إِيَّا منفصل منصوب ضمیر ہے۔ متصل ضمیروں (ـكَ, ـهُ) کے برعکس، اسے تاکید کے لیے ادھر ادھر رکھا جا سکتا ہے۔ یہ لچک یہاں طاقتور ترتیب بناتی ہے۔',
                  hi: 'इय्या मुन्फ़सिल मन्सूब ज़मीर है। मुत्तसिल ज़मीरों (ـكَ, ـهُ) के बरअक्स, इसे ताकीद के लिए इधर उधर रखा जा सकता है।',
                },
                {
                  en: 'The ـكَ (ka) suffix shows 2nd person singular masculine - directly addressing Allah. Intimate, personal connection!',
                  ur: 'ـكَ کا لاحقہ واحد مذکر حاضر ظاہر کرتا ہے - براہ راست اللہ سے مخاطب۔ قریبی، ذاتی تعلق!',
                  hi: 'ـكَ का लाहिक़ा वाहिद मुज़क्कर हाज़िर ज़ाहिर करता है - बराह-ए-रास्त अल्लाह से मुख़ातिब। क़रीबी, ज़ाती ताल्लुक़!',
                },
              ],
            },
            tajweedTips: {
              rules: [
                {
                  rule: { en: 'Shaddah on ي', ur: 'ی پر شدّہ', hi: 'ی पर शद्दा' },
                  explanation: { en: 'The ي is doubled - pronounce "iyy" clearly', ur: '"ی" کو دوگنا پڑھیں - "ایّ" واضح طور پر', hi: '"ی" को दोगुना पढ़ें - "इय्य" साफ़ तौर पर' },
                },
                {
                  rule: { en: 'Fatha on ك', ur: 'ک پر زبر', hi: 'ک पर ज़बर' },
                  explanation: { en: 'End with open "ka" sound', ur: 'کھلی "کَ" کی آواز سے ختم کریں', hi: 'खुली "क" की आवाज़ से ख़त्म करें' },
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'إِيَّاكَ = "EE-YA-KA" = Only HE + YOU = Exclusive worship!', ur: 'إِيَّاكَ = "ای-یَ-کَ" = صرف وہ + تو = خاص عبادت!', hi: 'इय्याका = "ई-य-क" = सिर्फ़ वो + तू = ख़ास इबादत!' },
                { en: 'Repeated twice in this ayah - double emphasis on exclusivity!', ur: 'اس آیت میں دو بار دہرایا - دوگنی تاکید!', hi: 'इस आयत में दो बार दोहराया - दोगुनी ताकीद!' },
              ],
              mnemonic: { en: 'I-Y-Y-A-K = I Yield Yearning And Kneeling (to You alone)', ur: 'إ ی ی ا ک = انتہائی یقینی یکتا اللہ کے', hi: 'इ य् य ा क = इंतिहाई यक़ीनी यकता अल्लाह के' },
            },
            scholarTranslations: [
              { scholar: 'Pickthall', translation: 'Thee alone' },
              { scholar: 'Yusuf Ali', translation: 'Thee do we' },
              { scholar: 'Sahih Intl', translation: 'It is You we' },
              { scholar: 'جالندھری', translation: 'تیری ہی' },
              { scholar: 'مودودی', translation: 'تیری ہی' },
              { scholar: 'Note', translation: { en: 'Object before verb = ONLY You', ur: 'مفعول فعل سے پہلے = صرف تو', hi: 'मफ़ऊल फ़ेल से पहले = सिर्फ़ तू' } },
            ],
            similarPatterns: [
              { surah: 51, ayah: 56, text: 'إِلَّا لِيَعْبُدُونِ', note: { en: 'Purpose of creation is worship', ur: 'تخلیق کا مقصد عبادت ہے', hi: 'तख़लीक़ का मक़सद इबादत है' } },
              { surah: 98, ayah: 5, text: 'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ', note: { en: 'Commanded only to worship Allah', ur: 'حکم صرف اللہ کی عبادت', hi: 'हुक्म सिर्फ़ अल्लाह की इबादत' } },
            ],
          },
          {
            id: 2,
            arabic: 'نَعْبُدُ',
            transliteration: 'naʿbudu',
            translations: {
              en: 'we worship',
              ur: 'ہم عبادت کرتے ہیں',
              hi: 'हम इबादत करते हैं',
              bn: 'আমরা ইবাদত করি',
              tr: 'kulluk ederiz',
              id: 'kami menyembah',
            },
            pos: ['V'],
            posLabel: 'V',
            root: 'ع ب د',
            lemma: 'عَبَدَ',
            pattern: 'فَعَلَ',
            case: null,
            features: {
              en: { type: 'Imperfect verb', person: '1st person plural', tense: 'Present/habitual', mood: 'Indicative (مرفوع)' },
              ur: { type: 'فعل مضارع', person: 'جمع متکلم', tense: 'حال/عادت', mood: 'مرفوع' },
              hi: { type: 'वर्तमान क्रिया', person: 'बहुवचन प्रथम', tense: 'वर्तमान/आदत', mood: 'मर्फ़ू' },
            },
            grammarRole: 'verb',
            grammarExplanations: {
              en: 'Present tense verb - "we worship" indicates continuous/habitual action. The "نَـ" prefix shows first person plural ("we").',
              ur: 'فعل مضارع - "ہم عبادت کرتے ہیں" مستقل/عادتاً عمل ظاہر کرتا ہے۔ "نَـ" جمع متکلم کی علامت ہے۔',
              hi: 'वर्तमान क्रिया - "हम इबादत करते हैं" निरंतर/आदतन क्रिया दर्शाता है। "نَـ" बहुवचन प्रथम की निशानी है।',
            },
            dependsOn: null,
            dependencyType: null,
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'ع ب د',
              meaning: { en: 'To worship, serve, slave', ur: 'عبادت کرنا، خدمت کرنا، غلام', hi: 'इबादत करना, ख़िदमत करना, ग़ुलाम' },
              words: [
                { arabic: 'عَبَدَ', meaning: { en: 'He worshipped', ur: 'اس نے عبادت کی', hi: 'उसने इबादत की' }, count: 143 },
                { arabic: 'عَبْد', meaning: { en: 'Slave/Servant', ur: 'بندہ/غلام', hi: 'बंदा/ग़ुलाम' }, count: 95 },
                { arabic: 'عِبَادَة', meaning: { en: 'Worship', ur: 'عبادت', hi: 'इबादत' }, count: 14 },
                { arabic: 'عِبَاد', meaning: { en: 'Servants (of Allah)', ur: 'بندے', hi: 'बंदे' }, count: 96 },
                { arabic: 'مَعْبُود', meaning: { en: 'That which is worshipped', ur: 'معبود', hi: 'माबूद' }, count: 1 },
                { arabic: 'عَابِدِين', meaning: { en: 'Worshippers', ur: 'عبادت کرنے والے', hi: 'इबादत करने वाले' }, count: 7 },
              ],
            },
            frequency: {
              word: 'نَعْبُدُ',
              total: 6,
              note: {
                en: 'The root ع ب د appears over 250 times in Quran! Allah\'s title for the Prophet ﷺ was عَبْدُهُ (His slave) - the highest honor!',
                ur: 'مادہ ع ب د قرآن میں 250 سے زیادہ بار آیا! نبی ﷺ کا لقب عَبْدُهُ (اس کا بندہ) تھا - سب سے بڑا اعزاز!',
                hi: 'मादा ع ب د क़ुरआन में 250 से ज़्यादा बार आया! नबी ﷺ का लक़ब अब्दुहू (उसका बंदा) था - सबसे बड़ा एज़ाज़!'
              },
            },
            irabReason: {
              case: 'مرفوع',
              reason: {
                en: 'نَعْبُدُ is nominative (مرفوع) because it\'s a فعل مضارع مرفوع (indicative imperfect verb). The damma (ُ) on the last letter shows it\'s in the standard indicative mood, not jussive or subjunctive.',
                ur: 'نَعْبُدُ مرفوع ہے کیونکہ یہ فعل مضارع مرفوع ہے۔ آخری حرف پر پیش (ُ) ظاہر کرتی ہے کہ یہ معیاری اخباری صیغے میں ہے۔',
                hi: 'नअबुदु मर्फ़ू है क्योंकि यह फ़ेल मुज़ारे मर्फ़ू है। आख़िरी हर्फ़ पर पेश (ُ) ज़ाहिर करती है कि यह मेयारी इख़्बारी सीग़े में है।',
              },
              rule: { en: 'Imperfect verb = مرفوع unless preceded by جازم or ناصب', ur: 'فعل مضارع = مرفوع جب تک جازم یا ناصب نہ آئے', hi: 'फ़ेल मुज़ारे = मर्फ़ू जब तक जाज़िम या नासिब न आए' },
            },
            balagha: {
              title: { en: 'Present Tense = Continuous', ur: 'مضارع = مسلسل', hi: 'मुज़ारे = मुसलसल' },
              explanation: {
                en: 'Why نَعْبُدُ (we worship - present) and not عَبَدْنَا (we worshipped - past)? The present tense indicates CONTINUOUS, habitual action. We don\'t worship once and stop - we worship continuously, always, forever. Every moment is worship. Past tense would suggest "we worshipped once" - that\'s not the commitment!',
                ur: 'نَعْبُدُ (ہم عبادت کرتے ہیں - حال) کیوں نہ کہ عَبَدْنَا (ہم نے عبادت کی - ماضی)؟ حال مسلسل، عادتاً عمل ظاہر کرتا ہے۔ ہم ایک بار عبادت کرکے نہیں رکتے - ہم مسلسل، ہمیشہ، ابد تک عبادت کرتے ہیں۔ ہر لمحہ عبادت ہے۔ ماضی کہتا "ہم نے ایک بار عبادت کی" - وہ عہد نہیں!',
                hi: 'नअबुदु (हम इबादत करते हैं - हाल) क्यों न कि अबदना (हमने इबादत की - माज़ी)? हाल मुसलसल, आदतन अमल ज़ाहिर करता है। हम एक बार इबादत करके नहीं रुकते - हम मुसलसल, हमेशा, अबद तक इबादत करते हैं।',
              },
            },
            linguisticMiracle: {
              title: { en: 'عِبَادَة - More Than Worship', ur: 'عِبَادَة - عبادت سے بڑھ کر', hi: 'इबादत - इबादत से बढ़कर' },
              points: [
                {
                  en: 'عِبَادَة in Arabic encompasses ALL acts of obedience done with love and humility - not just prayer! Eating halal, being kind, working honestly - all عِبَادَة.',
                  ur: 'عِبَادَة عربی میں محبت اور عاجزی سے کی گئی تمام اطاعت شامل ہے - صرف نماز نہیں! حلال کھانا، مہربانی، ایمانداری سے کام - سب عِبَادَة ہے۔',
                  hi: 'इबादत अरबी में मुहब्बत और आजिज़ी से की गई तमाम इताअत शामिल है - सिर्फ़ नमाज़ नहीं! हलाल खाना, मेहरबानी, ईमानदारी से काम - सब इबादत है।',
                },
                {
                  en: 'نَـ prefix = "we" (first person plural). Speaking for all believers, all humans who submit to Allah.',
                  ur: 'نَـ کا سابقہ = "ہم" (جمع متکلم)۔ تمام مومنین، تمام انسانوں کی طرف سے بول رہے ہیں جو اللہ کے سامنے جھکتے ہیں۔',
                  hi: 'نَـ का साबिक़ा = "हम" (जम्अ मुतकल्लिम)। तमाम मोमिनीन, तमाम इंसानों की तरफ़ से बोल रहे हैं जो अल्लाह के सामने झुकते हैं।',
                },
              ],
            },
            tajweedTips: {
              rules: [
                {
                  rule: { en: 'Sukun on ع', ur: 'ع پر سکون', hi: 'ع पर सुकून' },
                  explanation: { en: 'Stop briefly on ع before بُ', ur: 'بُ سے پہلے ع پر مختصر توقف', hi: 'बु से पहले ع पर मुख़्तसर तवक़्क़ुफ़' },
                },
                {
                  rule: { en: 'Damma on د', ur: 'د پر پیش', hi: 'द پر पेش' },
                  explanation: { en: 'End with clear "du" sound', ur: '"دُ" کی واضح آواز سے ختم', hi: '"दु" की वाज़ेह आवाज़ से ख़त्म' },
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'نَعْبُدُ = نَ (we) + عَبَدَ (worship) = We worship continuously', ur: 'نَعْبُدُ = نَ (ہم) + عَبَدَ (عبادت) = ہم مسلسل عبادت کرتے ہیں', hi: 'नअबुदु = نَ (हम) + عَبَدَ (इबादत) = हम मुसलसल इबादत करते हैं' },
                { en: 'Prophet ﷺ was called عَبْدُهُ (His slave) - highest title!', ur: 'نبی ﷺ کو عَبْدُهُ (اس کا بندہ) کہا گیا - سب سے اعلیٰ لقب!', hi: 'नबी ﷺ को अब्दुहू (उसका बंदा) कहा गया - सबसे आला लक़ब!' },
              ],
              mnemonic: { en: 'N-A-B-U-D = Now And Beyond, Unconditional Devotion', ur: 'ن ع ب د = نیت عظیم بندگی دائم', hi: 'न अ ब द = नीयत अज़ीम बंदगी दाइम' },
            },
            scholarTranslations: [
              { scholar: 'Pickthall', translation: 'we worship' },
              { scholar: 'Yusuf Ali', translation: 'we worship' },
              { scholar: 'Sahih Intl', translation: 'we worship' },
              { scholar: 'جالندھری', translation: 'ہم عبادت کرتے ہیں' },
              { scholar: 'مودودی', translation: 'ہم بندگی کرتے ہیں' },
            ],
            similarPatterns: [
              { surah: 109, ayah: 2, text: 'لَا أَعْبُدُ مَا تَعْبُدُونَ', note: { en: 'I do not worship what you worship', ur: 'میں وہ نہیں پوجتا جو تم پوجتے ہو', hi: 'मैं वो नहीं पूजता जो तुम पूजते हो' } },
              { surah: 12, ayah: 40, text: 'مَا تَعْبُدُونَ مِن دُونِهِ', note: { en: 'What you worship besides Him', ur: 'جو تم اس کے سوا پوجتے ہو', hi: 'जो तुम उसके सिवा पूजते हो' } },
            ],
          },
          {
            id: 3,
            arabic: 'وَإِيَّاكَ',
            transliteration: 'wa-iyyāka',
            translations: {
              en: 'and You alone',
              ur: 'اور صرف تجھ سے',
              hi: 'और केवल तुझ से',
              bn: 'এবং শুধুমাত্র তোমারই কাছে',
              tr: 've ancak senden',
              id: 'dan hanya kepada-Mu',
            },
            pos: ['CONJ', 'PRON'],
            posLabel: 'CONJ+PRON',
            root: null,
            lemma: 'إِيَّا',
            pattern: null,
            case: 'acc',
            features: {
              en: { type: 'Conjunction + Pronoun', conjunction: 'وَ (and)', emphasis: 'Repeated for emphasis' },
              ur: { type: 'حرف عطف + ضمیر', conjunction: 'وَ (اور)', emphasis: 'تکرار برائے تاکید' },
              hi: { type: 'संयोजक + सर्वनाम', conjunction: 'وَ (और)', emphasis: 'ज़ोर के लिए दोहराव' },
            },
            grammarRole: 'obj',
            grammarExplanations: {
              en: 'Second fronted object - repetition of إِيَّاكَ emphasizes exclusivity: ONLY from You do we seek help, no one else.',
              ur: 'دوسرا مقدم مفعول - إِيَّاكَ کی تکرار انحصار پر زور دیتی ہے: صرف تجھ سے مدد مانگتے ہیں، کسی اور سے نہیں۔',
              hi: 'दूसरा आगे रखा कर्म - إِيَّاكَ का दोहराव विशिष्टता पर ज़ोर देता है: केवल तुझ से मदद माँगते हैं, किसी और से नहीं।',
            },
            dependsOn: 4,
            dependencyTypes: {
              en: 'Fronted object (مفعول به مقدم)',
              ur: 'مفعول بہ مقدم',
              hi: 'आगे रखा कर्म',
            },
          },
          {
            id: 4,
            arabic: 'نَسْتَعِينُ',
            transliteration: 'nastaʿīnu',
            translations: {
              en: 'we ask for help',
              ur: 'ہم مدد مانگتے ہیں',
              hi: 'हम मदद माँगते हैं',
              bn: 'আমরা সাহায্য চাই',
              tr: 'yardım dileriz',
              id: 'kami memohon pertolongan',
            },
            pos: ['V'],
            posLabel: 'V',
            root: 'ع و ن',
            lemma: 'اِسْتَعَانَ',
            pattern: 'اِسْتَفْعَلَ',
            case: null,
            features: {
              en: { type: 'Imperfect verb (Form X)', person: '1st person plural', form: 'استفعل - seeking/requesting', tense: 'Present/habitual' },
              ur: { type: 'فعل مضارع (باب استفعال)', person: 'جمع متکلم', form: 'استفعل - طلب کرنا', tense: 'حال/عادت' },
              hi: { type: 'वर्तमान क्रिया (बाब इस्तिफ़आल)', person: 'बहुवचन प्रथम', form: 'इस्तफ़अल - माँगना', tense: 'वर्तमान/आदत' },
            },
            grammarRole: 'verb',
            grammarExplanations: {
              en: 'Form X verb (اِسْتَفْعَلَ) - indicates seeking or requesting. نَسْتَعِينُ means "we seek help". This form adds the meaning of actively seeking.',
              ur: 'باب استفعال کا فعل - طلب کرنا۔ نَسْتَعِينُ یعنی "ہم مدد طلب کرتے ہیں"۔ یہ باب فعال طلب کا معنی دیتا ہے۔',
              hi: 'बाब इस्तिफ़आल की क्रिया - माँगना। نَسْتَعِينُ यानी "हम मदद माँगते हैं"। यह बाब सक्रिय रूप से माँगने का अर्थ देता है।',
            },
            dependsOn: null,
            dependencyType: null,
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'ع و ن',
              meaning: { en: 'To help, assist, aid', ur: 'مدد کرنا، معاونت', hi: 'मदद करना, मुआवनत' },
              words: [
                { arabic: 'عَوْن', meaning: { en: 'Help/Aid', ur: 'مدد', hi: 'मदद' }, count: 3 },
                { arabic: 'اِسْتَعَانَ', meaning: { en: 'To seek help', ur: 'مدد مانگنا', hi: 'मदद माँगना' }, count: 4 },
                { arabic: 'أَعَانَ', meaning: { en: 'He helped', ur: 'اس نے مدد کی', hi: 'उसने मदद की' }, count: 6 },
                { arabic: 'تَعَاوَنُوا', meaning: { en: 'Help each other', ur: 'ایک دوسرے کی مدد کرو', hi: 'एक दूसरे की मदद करो' }, count: 2 },
                { arabic: 'مُعِين', meaning: { en: 'Helper', ur: 'مددگار', hi: 'मददगार' }, count: 1 },
              ],
            },
            frequency: {
              word: 'نَسْتَعِينُ',
              total: 2,
              note: {
                en: 'نَسْتَعِينُ appears only 2 times in Quran - both in Al-Fatiha! One in this ayah. Shows the unique importance of seeking ONLY Allah\'s help.',
                ur: 'نَسْتَعِينُ صرف 2 بار قرآن میں ہے - دونوں الفاتحہ میں! ایک اسی آیت میں۔ صرف اللہ سے مدد مانگنے کی منفرد اہمیت ظاہر کرتا ہے۔',
                hi: 'नस्तईनु सिर्फ़ 2 बार क़ुरआन में है - दोनों अल्फ़ातिहा में! एक इसी आयत में। सिर्फ़ अल्लाह से मदद माँगने की मुन्फ़रिद अहमियत ज़ाहिर करता है।'
              },
            },
            irabReason: {
              case: 'مرفوع',
              reason: {
                en: 'نَسْتَعِينُ is مرفوع (indicative) as it\'s a standard فعل مضارع without any جازم or ناصب particle. The damma on ن is the sign of رفع.',
                ur: 'نَسْتَعِينُ مرفوع ہے کیونکہ یہ معیاری فعل مضارع ہے بغیر کسی جازم یا ناصب کے۔ ن پر پیش رفع کی علامت ہے۔',
                hi: 'नस्तईनु मर्फ़ू है क्योंकि यह मेयारी फ़ेल मुज़ारे है बग़ैर किसी जाज़िम या नासिब के। ن पर पेश रफ़अ की अलामत है।',
              },
              rule: { en: 'Imperfect verb = مرفوع by default', ur: 'فعل مضارع = بنیادی طور پر مرفوع', hi: 'फ़ेल मुज़ारे = बुनियादी तौर पर मर्फ़ू' },
            },
            balagha: {
              title: { en: 'Form X - Active Seeking', ur: 'باب استفعال - فعال طلب', hi: 'बाब इस्तिफ़आल - फ़ाइल तलब' },
              explanation: {
                en: 'اِسْتَفْعَلَ (Form X) adds the meaning of SEEKING or REQUESTING the root action. عَوْن = help, اِسْتَعَانَ = to SEEK help. It\'s not passive waiting - it\'s actively reaching out to Allah! Also implies acknowledging our weakness and Allah\'s absolute power. We NEED His help, we SEEK it, we cannot do without it.',
                ur: 'اِسْتَفْعَلَ (باب استفعال) مادے کے فعل کی طلب کا معنی دیتا ہے۔ عَوْن = مدد، اِسْتَعَانَ = مدد طلب کرنا۔ یہ غیر فعال انتظار نہیں - اللہ کی طرف فعال رسائی ہے! ہماری کمزوری اور اللہ کی مطلق طاقت کا اقرار بھی ہے۔ ہمیں اس کی مدد چاہیے، ہم اسے ڈھونڈتے ہیں، اس کے بغیر نہیں ہو سکتے۔',
                hi: 'इस्तफ़अला (बाब इस्तिफ़आल) मादे के फ़ेल की तलब का मायना देता है। अव्न = मदद, इस्तआना = मदद तलब करना। यह ग़ैर-फ़ाइल इंतिज़ार नहीं - अल्लाह की तरफ़ फ़ाइल रसाई है! हमारी कमज़ोरी और अल्लाह की मुतलक़ ताक़त का इक़रार भी है।',
              },
            },
            linguisticMiracle: {
              title: { en: 'Why After Worship?', ur: 'عبادت کے بعد کیوں؟', hi: 'इबादत के बाद क्यों?' },
              points: [
                {
                  en: 'First we dedicate worship (إِيَّاكَ نَعْبُدُ), THEN we seek help (وَإِيَّاكَ نَسْتَعِينُ). Worship comes first because it\'s our duty. Help comes after because it\'s Allah\'s favor.',
                  ur: 'پہلے عبادت کا عہد (إِيَّاكَ نَعْبُدُ)، پھر مدد کی طلب (وَإِيَّاكَ نَسْتَعِينُ)۔ عبادت پہلے کیونکہ یہ ہمارا فرض ہے۔ مدد بعد میں کیونکہ یہ اللہ کا فضل ہے۔',
                  hi: 'पहले इबादत का अहद (इय्याका नअबुदु), फिर मदद की तलब (व इय्याका नस्तईन)। इबादत पहले क्योंकि यह हमारा फ़र्ज़ है। मदद बाद में क्योंकि यह अल्लाह का फ़ज़्ल है।',
                },
                {
                  en: 'We need Allah\'s help TO worship properly! Without His توفیق (enabling), even our worship is impossible.',
                  ur: 'ہمیں درست عبادت کے لیے اللہ کی مدد چاہیے! اس کی توفیق کے بغیر ہماری عبادت بھی ناممکن ہے۔',
                  hi: 'हमें दुरुस्त इबादत के लिए अल्लाह की मदद चाहिए! उसकी तौफ़ीक़ के बग़ैर हमारी इबादत भी नामुम्किन है।',
                },
              ],
            },
            tajweedTips: {
              rules: [
                {
                  rule: { en: 'Madd on ع', ur: 'ع پر مد', hi: 'ع पर मद्द' },
                  explanation: { en: 'The ي after ع is a madd letter (2 counts)', ur: 'ع کے بعد ی مد کا حرف ہے (دو حرکات)', hi: 'ع के बाद ی मद्द का हर्फ़ है (दो हरकات)' },
                },
                {
                  rule: { en: 'Clear ن at end', ur: 'آخر میں واضح ن', hi: 'आख़िर में वाज़ेह ن' },
                  explanation: { en: 'End with clear "nu" sound, don\'t swallow', ur: '"نُ" کی واضح آواز سے ختم کریں', hi: '"नु" की वाज़ेह आवाज़ से ख़त्म करें' },
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'نَسْتَعِينُ = نَـ (we) + اِسْتَ (seek) + عِينُ (help) = We seek help', ur: 'نَسْتَعِينُ = نَـ (ہم) + اِسْتَ (طلب) + عِينُ (مدد) = ہم مدد طلب کرتے ہیں', hi: 'नस्तईनु = نَـ (हम) + اِسْتَ (तलब) + عِينُ (मदद) = हम मदद तलब करते हैं' },
                { en: 'Form X (اِسْتَفْعَلَ) = "I seek to..." - active requesting', ur: 'باب استفعال = "میں چاہتا ہوں کہ..." - فعال درخواست', hi: 'बाब इस्तिफ़आल = "मैं चाहता हूँ कि..." - फ़ाइल दरख़्वास्त' },
              ],
              mnemonic: { en: 'N-A-S-T-A-I-N = Now Actively Seeking The Almighty\'s Invaluable Nurturing', ur: 'ن س ت ع ی ن = نیاز سے توکل عظیم یقینی نصرت', hi: 'न स त अ ई न = नियाज़ से तवक्कुल अज़ीम यक़ीनी नुस्रत' },
            },
            scholarTranslations: [
              { scholar: 'Pickthall', translation: 'we seek for help' },
              { scholar: 'Yusuf Ali', translation: 'we seek aid' },
              { scholar: 'Sahih Intl', translation: 'we ask for help' },
              { scholar: 'جالندھری', translation: 'ہم مدد مانگتے ہیں' },
              { scholar: 'مودودی', translation: 'تجھ سے مدد چاہتے ہیں' },
            ],
            similarPatterns: [
              { surah: 2, ayah: 45, text: 'وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ', note: { en: 'Seek help through patience and prayer', ur: 'صبر اور نماز سے مدد مانگو', hi: 'सब्र और नमाज़ से मदद माँगो' } },
              { surah: 7, ayah: 128, text: 'اسْتَعِينُوا بِاللَّهِ وَاصْبِرُوا', note: { en: 'Seek help from Allah and be patient', ur: 'اللہ سے مدد مانگو اور صبر کرو', hi: 'अल्लाह से मदद माँगो और सब्र करो' } },
            ],
          },
        ],
        structure: {
          type: {
            en: 'Parallel verbal clauses',
            ur: 'متوازی فعلی جملے',
            hi: 'समानांतर क्रियात्मक वाक्य',
          },
          explanations: {
            en: 'Two parallel clauses with identical structure: Object (إِيَّاكَ) + Verb. The fronting of the object creates restriction (حصر) - "ONLY You we worship, ONLY You we ask". This is the core of Tawheed (monotheism) - dedicating all worship and seeking help exclusively from Allah.',
            ur: 'دو متوازی جملے ایک جیسی ترکیب کے ساتھ: مفعول (إِيَّاكَ) + فعل۔ مفعول کی تقدیم حصر پیدا کرتی ہے - "صرف تیری عبادت، صرف تجھ سے مدد"۔ یہ توحید کی بنیاد ہے - عبادت اور استعانت صرف اللہ سے۔',
            hi: 'दो समानांतर वाक्य एक जैसी रचना के साथ: कर्म (إِيَّاكَ) + क्रिया। कर्म को आगे रखना हस्र पैदा करता है - "केवल तेरी इबादत, केवल तुझ से मदद"। यह तौहीद की बुनियाद है - इबादत और मदद सिर्फ़ अल्लाह से।',
          },
          diagram: [
            { from: 1, to: 2, label: 'مفعول به' },
            { from: 3, to: 4, label: 'مفعول به' },
            { from: 4, to: 2, label: 'عطف' },
          ],
        },
      },

      // Ayah 6: اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ
      6: {
        text: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        translations: {
          en: 'Guide us to the straight path',
          ur: 'ہمیں سیدھا راستہ دکھا',
          hi: 'हमें सीधा रास्ता दिखा',
          bn: 'আমাদের সরল পথ দেখাও',
          tr: 'Bizi doğru yola ilet',
          id: 'Tunjukilah kami jalan yang lurus',
        },
        words: [
          {
            id: 1,
            arabic: 'اهْدِنَا',
            transliteration: 'ihdinā',
            translations: {
              en: 'Guide us',
              ur: 'ہمیں ہدایت دے',
              hi: 'हमें हिदायत दे',
              bn: 'আমাদের পথ দেখাও',
              tr: 'Bizi ilet',
              id: 'Tunjukilah kami',
            },
            pos: ['V', 'PRON'],
            posLabel: 'V+PRON',
            root: 'ه د ي',
            lemma: 'هَدَى',
            pattern: 'فَعَلَ',
            case: null,
            features: {
              en: { type: 'Imperative verb + attached pronoun', person: '2nd person (command) + 1st plural (us)', mood: 'Imperative (أمر)' },
              ur: { type: 'فعل امر + ضمیر متصل', person: 'واحد حاضر (حکم) + جمع متکلم (ہم)', mood: 'امر' },
              hi: { type: 'आदेशात्मक क्रिया + जुड़ा सर्वनाम', person: 'एकवचन (आदेश) + बहुवचन (हम)', mood: 'अम्र' },
            },
            grammarRole: 'verb',
            grammarExplanations: {
              en: 'Command verb with attached pronoun "نا" (us) as the first object. This is the main supplication - asking Allah for guidance.',
              ur: 'فعل امر جس میں ضمیر "نا" (ہمیں) پہلا مفعول ہے۔ یہ اصل دعا ہے - اللہ سے ہدایت کی درخواست۔',
              hi: 'आदेशात्मक क्रिया जिसमें सर्वनाम "نا" (हमें) पहला कर्म है। यह मुख्य दुआ है - अल्लाह से हिदायत की दरख्वास्त।',
            },
            dependsOn: null,
            dependencyType: null,
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'ه د ي',
              meaning: { en: 'To guide, lead, direct', ur: 'ہدایت دینا، راہ دکھانا', hi: 'हिदायत देना, राह दिखाना' },
              words: [
                { arabic: 'هَدَى', meaning: { en: 'He guided', ur: 'اس نے ہدایت دی', hi: 'उसने हिदायत दी' }, count: 80 },
                { arabic: 'هُدًى', meaning: { en: 'Guidance', ur: 'ہدایت', hi: 'हिदायत' }, count: 79 },
                { arabic: 'هَادِي', meaning: { en: 'Guide', ur: 'ہدایت دینے والا', hi: 'हिदायत देने वाला' }, count: 3 },
                { arabic: 'مَهْدِي', meaning: { en: 'Guided one', ur: 'ہدایت یافتہ', hi: 'हिदायत याफ़्ता' }, count: 1 },
                { arabic: 'اِهْتَدَى', meaning: { en: 'He found guidance', ur: 'اس نے ہدایت پائی', hi: 'उसने हिदायत पाई' }, count: 22 },
              ],
            },
            frequency: {
              word: 'اهْدِ',
              total: 5,
              note: {
                en: 'The root ه د ي appears 316 times in Quran! Guidance is the central theme. This is THE dua - asking for guidance every prayer, 17+ times daily!',
                ur: 'مادہ ه د ي قرآن میں 316 بار آیا! ہدایت مرکزی موضوع ہے۔ یہی اصل دعا ہے - ہر نماز میں، روزانہ 17+ بار!',
                hi: 'मादा ه د ي क़ुरआन में 316 बार आया! हिदायत मरकज़ी मौज़ू है। यही असल दुआ है - हर नमाज़ में, रोज़ाना 17+ बार!'
              },
            },
            irabReason: {
              case: 'مبني',
              reason: {
                en: 'اهْدِ is a command verb (فعل أمر) built on sukun. The نَا is an attached pronoun as the first object (مفعول به أول). Command verbs don\'t have case endings.',
                ur: 'اهْدِ فعل امر ہے جو سکون پر مبنی ہے۔ نَا ضمیر متصل ہے جو پہلا مفعول بہ ہے۔ فعل امر کے اعراب نہیں ہوتے۔',
                hi: 'इहदि फ़ेल अम्र है जो सुकून पर मबनी है। نَا ज़मीर मुत्तसिल है जो पहला मफ़ऊल बिही है।',
              },
              rule: { en: 'Imperative verbs are مبني (indeclinable)', ur: 'فعل امر مبنی ہوتا ہے', hi: 'फ़ेल अम्र मबनी होता है' },
            },
            balagha: {
              title: { en: 'The Core Supplication', ur: 'اصل دعا', hi: 'असल दुआ' },
              explanation: {
                en: 'This is THE request of Al-Fatiha! After praising Allah (1-4) and declaring exclusive worship (5), we finally ask - "Guide us". Not wealth, not health, but GUIDANCE. This shows the most valuable thing a human can ask for. We say this 17+ times daily in prayers - the most repeated dua in Islam!',
                ur: 'یہی الفاتحہ کی اصل درخواست ہے! اللہ کی حمد (1-4) اور خالص عبادت کا اعلان (5) کے بعد، آخر میں مانگتے ہیں - "ہدایت دے"۔ نہ دولت، نہ صحت، بلکہ ہدایت۔ یہ ظاہر کرتا ہے کہ انسان کی سب سے قیمتی درخواست کیا ہے۔ روزانہ 17+ بار کہتے ہیں - اسلام کی سب سے زیادہ دہرائی جانے والی دعا!',
                hi: 'यही अल्फ़ातिहा की असल दरख़्वास्त है! अल्लाह की हम्द (1-4) और ख़ालिस इबादत का एलान (5) के बाद, आख़िर में माँगते हैं - "हिदायत दे"। न दौलत, न सेहत, बल्कि हिदायत।',
              },
            },
            linguisticMiracle: {
              title: { en: 'Why "اهْدِنَا" not "أَرِنَا"?', ur: '"اهْدِنَا" کیوں نہ "أَرِنَا"?', hi: '"इहदिना" क्यों न "अरिना"?' },
              points: [
                {
                  en: 'هدى means to guide TO the destination AND along the path. أرى (show) would just mean pointing. We need Allah to guide us all the way, not just show the direction!',
                  ur: 'هدى کا مطلب منزل تک لے جانا اور راستے میں ساتھ دینا۔ أرى (دکھانا) صرف اشارہ کرنا ہوتا۔ ہمیں اللہ کی رہنمائی چاہیے پوری راہ میں، صرف سمت نہیں!',
                  hi: 'هدى का मतलब मंज़िल तक ले जाना और रास्ते में साथ देना। أرى (दिखाना) सिर्फ़ इशारा करना होता। हमें अल्लाह की रहनुमाई चाहिए पूरी राह में!',
                },
                {
                  en: 'The attached pronoun نَا (us) - not "me" alone. We pray for ALL believers, showing Islamic brotherhood.',
                  ur: 'ضمیر نَا (ہمیں) - صرف "مجھے" نہیں۔ ہم تمام مومنین کے لیے دعا کرتے ہیں، اسلامی اخوت ظاہر کرتے ہوئے۔',
                  hi: 'ज़मीर نَا (हमें) - सिर्फ़ "मुझे" नहीं। हम तमाम मोमिनीन के लिए दुआ करते हैं, इस्लामी भाईचारा ज़ाहिर करते हुए।',
                },
              ],
            },
            tajweedTips: {
              rules: [
                {
                  rule: { en: 'Hamza start', ur: 'ہمزہ کی ابتدا', hi: 'हम्ज़ा की इब्तिदा' },
                  explanation: { en: 'Start with clear hamza (إ) sound, not just "i"', ur: 'واضح ہمزہ (إ) سے شروع، صرف "اِ" نہیں', hi: 'वाज़ेह हम्ज़ा (إ) से शुरू' },
                },
                {
                  rule: { en: 'Madd on ا in نَا', ur: 'نَا میں ا پر مد', hi: 'نَا में ا पर मद्द' },
                  explanation: { en: 'Natural madd (2 counts) on the alif', ur: 'الف پر طبیعی مد (دو حرکات)', hi: 'अलिफ़ पर तबई मद्द (दो हरकात)' },
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'اهْدِنَا = "IH-DI-NA" = "In His Direction Now Always"', ur: 'اهْدِنَا = ہدایت + ہمیں = ہمیشہ راستے پر رکھ', hi: 'इहदिना = हिदायत + हमें = हमेशा रास्ते पर रख' },
                { en: '17+ times daily! Most repeated dua in the world!', ur: 'روزانہ 17+ بار! دنیا کی سب سے زیادہ دہرائی جانے والی دعا!', hi: 'रोज़ाना 17+ बार! दुनिया की सबसे ज़्यादा दोहराई जाने वाली दुआ!' },
              ],
              mnemonic: { en: 'I-H-D-I-N-A = I Humbly Desire In-depth Navigation Always', ur: 'ا ه د ن ا = اے ہادی دے نیک امنگ', hi: 'इ ह द न ा = ऐ हादी दे नेक उमंग' },
            },
          },
          {
            id: 2,
            arabic: 'الصِّرَاطَ',
            transliteration: 'aṣ-ṣirāṭa',
            translations: {
              en: 'the path',
              ur: 'راستہ',
              hi: 'रास्ता',
              bn: 'পথ',
              tr: 'yolu',
              id: 'jalan',
            },
            pos: ['N'],
            posLabel: 'N',
            root: 'ص ر ط',
            lemma: 'صِرَاط',
            pattern: 'فِعَال',
            case: 'acc',
            features: {
              en: { type: 'Noun', definiteness: 'Definite', case: 'Accusative (second object)' },
              ur: { type: 'اسم', definiteness: 'معرفہ', case: 'منصوب (دوسرا مفعول)' },
              hi: { type: 'संज्ञा', definiteness: 'परिभाषित', case: 'मन्सूब (दूसरा कर्म)' },
            },
            grammarRole: 'obj',
            grammarExplanations: {
              en: 'Second object of "guide" - the verb هدى can take two objects: guide [someone] to [something]. الصِّرَاطَ (the path) is what we ask to be guided to.',
              ur: 'فعل "اھد" کا دوسرا مفعول - یہ فعل دو مفعول لیتا ہے: کسی کو کسی چیز کی طرف ہدایت دینا۔ الصِّرَاطَ وہ ہے جس کی طرف ہدایت مانگتے ہیں۔',
              hi: '"اھد" का दूसरा कर्म - यह क्रिया दो कर्म लेती है: किसी को किसी चीज़ की तरफ़ हिदायत देना। الصِّرَاطَ वह है जिसकी तरफ़ हिदायत माँगते हैं।',
            },
            dependsOn: 1,
            dependencyTypes: {
              en: 'Second object (مفعول به ثان)',
              ur: 'مفعول بہ ثانی',
              hi: 'दूसरा कर्म',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'ص ر ط',
              meaning: { en: 'Path, road, way', ur: 'راستہ، سڑک', hi: 'रास्ता, सड़क' },
              words: [
                { arabic: 'صِرَاط', meaning: { en: 'Path/Road', ur: 'راستہ/سڑک', hi: 'रास्ता/सड़क' }, count: 45 },
              ],
            },
            frequency: {
              word: 'صِرَاط',
              total: 45,
              note: {
                en: 'صِرَاط appears 45 times - always about the path of guidance. Originally from Latin "strata" (paved road), showing Arabic\'s rich history of borrowing and adapting words!',
                ur: 'صِرَاط 45 بار آیا - ہمیشہ ہدایت کے راستے کے بارے میں۔ اصل میں لاطینی "strata" (پکی سڑک) سے آیا، عربی کی لفظ اخذ کرنے کی تاریخ ظاہر کرتا ہے!',
                hi: 'सिरात 45 बार आया - हमेशा हिदायत के रास्ते के बारे में। असल में लातीनी "strata" (पक्की सड़क) से आया!'
              },
            },
            balagha: {
              title: { en: 'Why صِرَاط not طَرِيق?', ur: 'صِرَاط کیوں نہ طَرِيق؟', hi: 'सिरात क्यों न तरीक़?' },
              explanation: {
                en: 'صِرَاط implies a WIDE, CLEAR, MAIN road - not a small path. طَرِيق could be any path. صِرَاط is like a highway - broad, well-lit, unmistakable. Islam is not a narrow, hidden path but a clear, wide road for all humanity!',
                ur: 'صِرَاط ایک چوڑی، واضح، مرکزی سڑک ہے - چھوٹا راستہ نہیں۔ طَرِيق کوئی بھی راستہ ہو سکتا ہے۔ صِرَاط ہائی وے جیسا ہے - کشادہ، روشن، واضح۔ اسلام تنگ، چھپی ہوئی راہ نہیں بلکہ تمام انسانیت کے لیے کھلی سڑک ہے!',
                hi: 'सिरात एक चौड़ी, वाज़ेह, मरकज़ी सड़क है - छोटा रास्ता नहीं। तरीक़ कोई भी रास्ता हो सकता है। सिरात हाईवे जैसा है - कुशादा, रौशन, वाज़ेह!',
              },
            },
            linguisticMiracle: {
              title: { en: 'The ص Sound', ur: 'ص کی آواز', hi: 'ص की आवाज़' },
              points: [
                {
                  en: 'صِرَاط uses ص (emphatic S) instead of س. This heavy sound conveys importance and firmness - this is not just any road, it\'s THE road!',
                  ur: 'صِرَاط میں ص (موکد س) استعمال ہوا، س نہیں۔ یہ بھاری آواز اہمیت اور مضبوطی ظاہر کرتی ہے - یہ کوئی عام راستہ نہیں، یہی راستہ ہے!',
                  hi: 'सिरात में ص (मुअक्कद स) इस्तेमाल हुआ, س नहीं। यह भारी आवाज़ अहमियत और मज़बूती ज़ाहिर करती है!',
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'صِرَاط = STRAIGHT path (sounds similar!)', ur: 'صِرَاط = سیدھا راستہ (آواز ملتی جلتی!)', hi: 'सिरात = सीधा रास्ता (आवाज़ मिलती जुलती!)' },
                { en: 'The "bridge" over Hell on Judgment Day is also called صِرَاط', ur: 'قیامت کے دن جہنم پر پل کو بھی صِرَاط کہتے ہیں', hi: 'क़यामत के दिन जहन्नम पर पुल को भी सिरात कहते हैं' },
              ],
            },
          },
          {
            id: 3,
            arabic: 'الْمُسْتَقِيمَ',
            transliteration: 'al-mustaqīma',
            translations: {
              en: 'the straight',
              ur: 'سیدھا',
              hi: 'सीधा',
              bn: 'সরল',
              tr: 'doğru',
              id: 'yang lurus',
            },
            pos: ['ADJ'],
            posLabel: 'ADJ',
            root: 'ق و م',
            lemma: 'مُسْتَقِيم',
            pattern: 'مُسْتَفْعِل',
            case: 'acc',
            features: {
              en: { type: 'Active participle (Form X)', definiteness: 'Definite', form: 'مستفعل - achieving straightness' },
              ur: { type: 'اسم فاعل (باب استفعال)', definiteness: 'معرفہ', form: 'مستفعل - سیدھا ہونا' },
              hi: { type: 'कर्तृवाचक (बाब इस्तिफ़आल)', definiteness: 'परिभाषित', form: 'मुस्तफ़इल - सीधा होना' },
            },
            grammarRole: 'sifah',
            grammarExplanations: {
              en: 'Adjective describing "path" - agrees in definiteness and case. الْمُسْتَقِيمَ means perfectly straight, without deviation - the path of Islam.',
              ur: 'صِراط کی صفت - معرفہ اور اعراب میں مطابقت۔ الْمُسْتَقِيمَ یعنی بالکل سیدھا، بغیر کسی انحراف کے - اسلام کا راستہ۔',
              hi: 'सिरात का विशेषण - परिभाषित और एराब में मेल। الْمُسْتَقِيمَ यानी बिल्कुल सीधा, बिना किसी विचलन के - इस्लाम का रास्ता।',
            },
            dependsOn: 2,
            dependencyTypes: {
              en: 'Adjective (صفة)',
              ur: 'صفت',
              hi: 'विशेषण (सिफ़त)',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'ق و م',
              meaning: { en: 'To stand, rise, establish', ur: 'کھڑا ہونا، قائم کرنا', hi: 'खड़ा होना, क़ायम करना' },
              words: [
                { arabic: 'قَامَ', meaning: { en: 'He stood', ur: 'وہ کھڑا ہوا', hi: 'वो खड़ा हुआ' }, count: 42 },
                { arabic: 'قَوْم', meaning: { en: 'People/Nation', ur: 'قوم', hi: 'क़ौम' }, count: 383 },
                { arabic: 'قِيَامَة', meaning: { en: 'Resurrection', ur: 'قیامت', hi: 'क़यामत' }, count: 70 },
                { arabic: 'مُسْتَقِيم', meaning: { en: 'Straight', ur: 'سیدھا', hi: 'सीधा' }, count: 37 },
                { arabic: 'قَائِم', meaning: { en: 'Standing/Established', ur: 'کھڑا/قائم', hi: 'खड़ा/क़ायम' }, count: 9 },
                { arabic: 'أَقَامَ', meaning: { en: 'He established', ur: 'اس نے قائم کیا', hi: 'उसने क़ायम किया' }, count: 27 },
                { arabic: 'إِقَامَة', meaning: { en: 'Establishment', ur: 'قیام', hi: 'क़याम' }, count: 5 },
              ],
            },
            frequency: {
              word: 'الْمُسْتَقِيم',
              total: 37,
              note: {
                en: 'مُسْتَقِيم appears 37 times, always with صِرَاط (path) - "الصِّرَاطَ الْمُسْتَقِيمَ" is a fixed phrase in Quran! The root ق و م gives us قِيَامَة (Resurrection) and قَوْم (nation).',
                ur: 'مُسْتَقِيم 37 بار آیا، ہمیشہ صِرَاط کے ساتھ - "الصِّرَاطَ الْمُسْتَقِيمَ" قرآن میں ایک مقررہ جملہ ہے! مادہ ق و م سے قِيَامَة (قیامت) اور قَوْم (قوم) بنتے ہیں۔',
                hi: 'मुस्तक़ीम 37 बार आया, हमेशा सिरात के साथ - "अस्सिरातल मुस्तक़ीम" क़ुरआन में एक मुक़र्रर जुम्ला है!'
              },
            },
            balagha: {
              title: { en: 'Form X = Self-Achieving', ur: 'باب استفعال = خود حاصل کرنا', hi: 'बाब इस्तिफ़आल = ख़ुद हासिल करना' },
              explanation: {
                en: 'مُسْتَقِيم is Form X (اِسْتَفْعَلَ) from ق و م. Form X means "seeking to achieve" the root meaning. So مُسْتَقِيم = "that which has achieved and maintains straightness" - not just straight, but ACTIVELY staying straight, self-correcting, never deviating!',
                ur: 'مُسْتَقِيم باب استفعال سے ہے مادہ ق و م سے۔ باب استفعال کا مطلب "حاصل کرنے کی کوشش"۔ تو مُسْتَقِيم = "جس نے سیدھاپن حاصل کیا اور برقرار رکھا" - صرف سیدھا نہیں، بلکہ فعال طور پر سیدھا رہنے والا، خود کو درست کرنے والا!',
                hi: 'मुस्तक़ीम बाब इस्तिफ़आल से है मादा ق و م से। बाब इस्तिफ़आल का मतलब "हासिल करने की कोशिश"। तो मुस्तक़ीम = "जिसने सीधापन हासिल किया और बरक़रार रखा"!',
              },
            },
            linguisticMiracle: {
              title: { en: 'Why Not Just قَائِم or مُقِيم?', ur: 'صرف قَائِم یا مُقِيم کیوں نہیں؟', hi: 'सिर्फ़ क़ाइम या मुक़ीम क्यों नहीं?' },
              points: [
                {
                  en: 'قَائِم (standing) is static. مُسْتَقِيم (Form X) implies continuous effort to STAY straight. Islam is not a static state but an active, ongoing commitment!',
                  ur: 'قَائِم (کھڑا) ساکن ہے۔ مُسْتَقِيم (باب استفعال) سیدھا رہنے کی مسلسل کوشش ظاہر کرتا ہے۔ اسلام کوئی ساکن حالت نہیں بلکہ فعال، جاری عہد ہے!',
                  hi: 'क़ाइम (खड़ा) साकिन है। मुस्तक़ीम (बाब इस्तिफ़आल) सीधा रहने की मुसलसल कोशिश ज़ाहिर करता है!',
                },
                {
                  en: 'The path doesn\'t just exist - it actively MAINTAINS its straightness for travelers. Perfect description of Islam!',
                  ur: 'راستہ صرف موجود نہیں - وہ مسافروں کے لیے اپنا سیدھاپن فعال طور پر برقرار رکھتا ہے۔ اسلام کی کامل تعریف!',
                  hi: 'रास्ता सिर्फ़ मौजूद नहीं - वो मुसाफ़िरों के लिए अपना सीधापन फ़ाइल तौर पर बरक़रार रखता है!',
                },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'مُسْتَقِيم sounds like "must-a-keem" = MUST keep straight!', ur: 'مُسْتَقِيم = سیدھا رہنا ضروری!', hi: 'मुस्तक़ीम = सीधा रहना ज़रूरी!' },
                { en: 'Same root as قِيَامَة - on Judgment Day, this is THE path to cross!', ur: 'قِيَامَة سے ایک مادہ - قیامت کے دن یہی راستہ پار کرنا ہے!', hi: 'क़यामत से एक मादा - क़यामत के दिन यही रास्ता पार करना है!' },
              ],
            },
          },
        ],
        structure: {
          type: {
            en: 'Verbal sentence (command)',
            ur: 'جملہ فعلیہ (امر)',
            hi: 'क्रियात्मक वाक्य (आदेश)',
          },
          explanations: {
            en: 'An imperative sentence. The verb هدى takes two objects: (1) نا "us" attached to the verb, (2) الصراط "the path". المستقيم is an adjective describing the path as straight and true.',
            ur: 'فعل امر کا جملہ۔ فعل هدى دو مفعول لیتا ہے: (۱) "نا" فعل سے جڑا ہوا، (۲) "الصراط"۔ المستقيم صفت ہے جو راستے کو سیدھا بتاتی ہے۔',
            hi: 'आदेशात्मक वाक्य। क्रिया هدى दो कर्म लेती है: (1) "نا" क्रिया से जुड़ा, (2) "الصراط"। المستقيم विशेषण है जो रास्ते को सीधा बताता है।',
          },
          diagram: [
            { from: 2, to: 1, label: 'مفعول به ٢' },
            { from: 3, to: 2, label: 'صفة' },
          ],
        },
      },

      // Ayah 7: صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ
      7: {
        text: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        translations: {
          en: 'The path of those upon whom You have bestowed favor, not of those who have earned anger nor of those who are astray',
          ur: 'ان لوگوں کا راستہ جن پر تو نے انعام کیا نہ ان کا جن پر غضب ہوا اور نہ گمراہوں کا',
          hi: 'उन लोगों का रास्ता जिन पर तूने इनआम किया न उनका जिन पर ग़ज़ब हुआ और न गुमराहों का',
          bn: 'তাদের পথ যাদের প্রতি তুমি অনুগ্রহ করেছ, তাদের পথ নয় যাদের প্রতি ক্রোধ আপতিত হয়েছে এবং যারা পথভ্রষ্ট',
          tr: 'Kendilerine nimet verdiklerinin yoluna; gazaba uğramışların ve sapıkların yoluna değil',
          id: 'Yaitu jalan orang-orang yang telah Engkau beri nikmat, bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat',
        },
        words: [
          {
            id: 1,
            arabic: 'صِرَاطَ',
            transliteration: 'ṣirāṭa',
            translations: {
              en: 'The path',
              ur: 'راستہ',
              hi: 'रास्ता',
              bn: 'পথ',
              tr: 'yolu',
              id: 'jalan',
            },
            pos: ['N'],
            posLabel: 'N',
            root: 'ص ر ط',
            lemma: 'صِرَاط',
            pattern: 'فِعَال',
            case: 'acc',
            features: {
              en: { type: 'Noun', state: 'Construct (مضاف)', case: 'Accusative (بدل)' },
              ur: { type: 'اسم', state: 'مضاف', case: 'منصوب (بدل)' },
              hi: { type: 'संज्ञा', state: 'मुज़ाफ़', case: 'मन्सूब (बदल)' },
            },
            grammarRole: 'badal',
            grammarExplanations: {
              en: 'Substitute/clarification of "الصراط المستقيم" from previous ayah - this explains WHAT the straight path is.',
              ur: 'پچھلی آیت کے "الصراط المستقيم" کا بدل - یہ بتاتا ہے کہ سیدھا راستہ کیا ہے۔',
              hi: 'पिछली आयत के "الصراط المستقيم" का बदल - यह बताता है कि सीधा रास्ता क्या है।',
            },
            dependsOn: null,
            dependencyTypes: {
              en: 'Apposition from 1:6',
              ur: 'آیت ۶ سے بدل',
              hi: 'आयत 6 से बदल',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'ص ر ط',
              meaning: { en: 'Path, road, way', ur: 'راستہ، سڑک، راہ', hi: 'रास्ता, सड़क, राह' },
              words: [
                { arabic: 'صِرَاط', meaning: { en: 'Path/Road', ur: 'راستہ/سڑک', hi: 'रास्ता/सड़क' }, count: 45 },
              ],
            },
            frequency: {
              word: 'صِرَاطَ',
              total: 45,
              note: {
                en: 'This is the 2nd occurrence in Al-Fatiha! Here it clarifies WHOSE path - those blessed by Allah.',
                ur: 'الفاتحہ میں یہ دوسری بار آیا! یہاں بتاتا ہے کہ کن کا راستہ - اللہ کے انعام یافتہ۔',
                hi: 'अल-फातिहा में यह दूसरी बार आया! यहाँ बताता है किनका रास्ता - अल्लाह के इनआम वाले।'
              },
            },
            balagha: {
              title: { en: 'Why repeat صِرَاط?', ur: 'صِرَاط دوبارہ کیوں؟', hi: 'सिरात दोबारा क्यों?' },
              explanation: {
                en: 'The repetition is deliberate! First (Ayah 6): "Guide us to the straight path" - the REQUEST. Second (Ayah 7): "The path of those blessed" - the CLARIFICATION. This creates emphasis and removes any doubt about which path.',
                ur: 'دہرانا جان بوجھ کر ہے! پہلے (آیت ۶): "سیدھے راستے کی ہدایت دے" - درخواست۔ دوسری بار (آیت ۷): "انعام یافتوں کا راستہ" - وضاحت۔ یہ تاکید پیدا کرتا ہے۔',
                hi: 'दोहराना जानबूझ कर है! पहले (आयत 6): "सीधे रास्ते की हिदायत दे" - दरख्वास्त। दूसरी बार (आयत 7): "इनआम वालों का रास्ता" - वज़ाहत।',
              },
            },
            linguisticMiracle: {
              title: { en: 'Badal (Substitution) Technique', ur: 'بدل کی تکنیک', hi: 'बदल की तकनीक' },
              points: [
                {
                  en: 'This صِرَاطَ is بدل (apposition) - it substitutes and clarifies the previous "الصِّرَاطَ الْمُسْتَقِيمَ". Arabic grammar allows restating something for clarification!',
                  ur: 'یہ صِرَاطَ بدل ہے - پچھلے "الصِّرَاطَ الْمُسْتَقِيمَ" کی جگہ وضاحت کرتا ہے۔ عربی گرامر میں وضاحت کے لیے دوبارہ بیان جائز ہے!',
                  hi: 'यह सिरात बदल है - पिछले "الصِّرَاطَ الْمُسْتَقِيمَ" की जगह वज़ाहत करता है।',
                },
              ],
            },
            tajweedTips: {
              rules: [
                { en: 'ص is emphatic (مفخم) - keep tongue heavy', ur: 'ص مفخم ہے - زبان بھاری رکھیں', hi: 'ص मुफ़ख़्ख़म है - ज़बान भारी रखें' },
                { en: 'Stretch ا after ر for 2 counts (مد طبيعي)', ur: 'ر کے بعد ا دو حرکت لمبا (مد طبیعی)', hi: 'र के बाद ا दो हरकत लंबा' },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'صِرَاطَ الَّذِينَ = "The path of THOSE WHO..." - connects to blessed people', ur: 'صِرَاطَ الَّذِينَ = "ان لوگوں کا راستہ جو..." - انعام یافتوں سے جڑا', hi: 'सिरात अल्लज़ीन = "उन लोगों का रास्ता जो..." - इनआम वालों से जुड़ा' },
              ],
            },
            // Morpheme breakdown for highlighting
            morphemes: {
              prefix: null,
              root: { letters: 'صرط', indices: [0, 1, 2, 3, 4] },
              suffix: { text: 'َ', meaning: { en: 'Accusative case', ur: 'حالت نصب', hi: 'मन्सूब' } },
            },
          },
          {
            id: 2,
            arabic: 'الَّذِينَ',
            transliteration: 'alladhīna',
            translations: {
              en: 'of those who',
              ur: 'ان لوگوں کا جو',
              hi: 'उन लोगों का जो',
              bn: 'তাদের যাদের',
              tr: 'kendilerine',
              id: 'orang-orang yang',
            },
            pos: ['REL'],
            posLabel: 'REL',
            root: null,
            lemma: 'الَّذِي',
            pattern: null,
            case: 'gen',
            features: {
              en: { type: 'Relative pronoun', number: 'Plural masculine' },
              ur: { type: 'اسم موصول', number: 'جمع مذکر' },
              hi: { type: 'संबंधवाचक सर्वनाम', number: 'पुल्लिंग बहुवचन' },
            },
            grammarRole: 'mudhafIlayh',
            grammarExplanations: {
              en: 'Relative pronoun introducing those whose path we seek - the blessed ones: prophets, righteous, martyrs, and the truthful.',
              ur: 'اسم موصول جو بتاتا ہے کہ ہم کن کا راستہ مانگتے ہیں - انعام یافتہ: انبیاء، صالحین، شہداء اور صدیقین۔',
              hi: 'संबंधवाचक सर्वनाम जो बताता है कि हम किनका रास्ता माँगते हैं - नेअमत वाले: अंबिया, सालिहीन, शुहदा और सिद्दीक़ीन।',
            },
            dependsOn: 1,
            dependencyTypes: {
              en: 'Genitive construction (إضافة)',
              ur: 'ترکیب اضافی',
              hi: 'इज़ाफ़त रचना',
            },
          },
          {
            id: 3,
            arabic: 'أَنْعَمْتَ',
            transliteration: 'anʿamta',
            translations: {
              en: 'You have bestowed favor',
              ur: 'تو نے انعام کیا',
              hi: 'तूने इनआम किया',
              bn: 'তুমি অনুগ্রহ করেছ',
              tr: 'nimet verdiğin',
              id: 'Engkau beri nikmat',
            },
            pos: ['V'],
            posLabel: 'V',
            root: 'ن ع م',
            lemma: 'أَنْعَمَ',
            pattern: 'أَفْعَلَ',
            case: null,
            features: {
              en: { type: 'Perfect verb (Form IV)', person: '2nd person singular', form: 'أفعل - causative/transitive' },
              ur: { type: 'فعل ماضی (باب افعال)', person: 'واحد مخاطب', form: 'أفعل - متعدی' },
              hi: { type: 'भूतकालिक क्रिया (बाब इफ़आल)', person: 'एकवचन संबोधित', form: 'अफ़अल - सकर्मक' },
            },
            grammarRole: 'silah',
            grammarExplanations: {
              en: 'Verb in the relative clause - describes "those who". أَنْعَمَ (Form IV) means to bestow blessings/favors upon someone.',
              ur: 'صلۂ موصول کا فعل - "الَّذِينَ" کی وضاحت۔ أَنْعَمَ (باب افعال) کا مطلب کسی پر نعمت دینا۔',
              hi: 'सिला-ए-मौसूल की क्रिया - "الَّذِينَ" की व्याख्या। أَنْعَمَ (बाब इफ़आल) का मतलब किसी पर नेअमत देना।',
            },
            dependsOn: 2,
            dependencyTypes: {
              en: 'Relative clause (صلة)',
              ur: 'صلۂ موصول',
              hi: 'सिला-ए-मौसूल',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'ن ع م',
              meaning: { en: 'Blessing, favor, comfort', ur: 'نعمت، احسان، آرام', hi: 'नेअमत, एहसान, आराम' },
              words: [
                { arabic: 'نِعْمَة', meaning: { en: 'Blessing/Favor', ur: 'نعمت', hi: 'नेअमत' }, count: 34 },
                { arabic: 'أَنْعَمَ', meaning: { en: 'He bestowed favor', ur: 'اس نے انعام کیا', hi: 'उसने इनआम किया' }, count: 23 },
                { arabic: 'نَعِيم', meaning: { en: 'Bliss/Delight', ur: 'نعیم/آرام', hi: 'नईम/आराम' }, count: 16 },
                { arabic: 'أَنْعَام', meaning: { en: 'Cattle/Livestock', ur: 'مویشی', hi: 'मवेशी' }, count: 32 },
                { arabic: 'مُنْعِم', meaning: { en: 'Bestower', ur: 'انعام دینے والا', hi: 'इनआम देने वाला' }, count: 1 },
              ],
            },
            frequency: {
              word: 'أَنْعَمْتَ',
              total: 6,
              spikedSurahs: [
                { surah: 1, name: 'Al-Fatiha', count: 1 },
                { surah: 5, name: 'Al-Ma\'idah', count: 1 },
                { surah: 19, name: 'Maryam', count: 2 },
                { surah: 33, name: 'Al-Ahzab', count: 1 },
                { surah: 43, name: 'Az-Zukhruf', count: 1 },
              ],
              note: {
                en: 'This exact form (You bestowed) appears only 6 times - always addressing Allah directly. In Fatiha, it defines whose path we seek!',
                ur: 'یہ صیغہ (تو نے انعام کیا) صرف 6 بار آیا - ہمیشہ اللہ سے براہ راست مخاطب۔ فاتحہ میں بتاتا ہے کہ ہم کن کا راستہ چاہتے ہیں!',
                hi: 'यह सीग़ा (तूने इनआम किया) सिर्फ 6 बार आया - हमेशा अल्लाह से सीधे मुख़ातिब।'
              },
            },
            irabReason: {
              case: 'فعل ماضی',
              reason: {
                en: 'Past tense verb does not have i\'rab (case endings). The فتحة on ت is a person marker, not case.',
                ur: 'فعل ماضی پر اعراب نہیں ہوتا۔ ت پر فتحہ شخص کی علامت ہے، اعراب نہیں۔',
                hi: 'फ़ेअल माज़ी पर एराब नहीं होता। ت पर फ़तहा शख्स की अलामत है, एराब नहीं।',
              },
              rule: {
                en: 'Verbs are مبني (indeclinable) - their endings show person/number, not grammatical case.',
                ur: 'افعال مبنی ہیں - ان کے اختتامات شخص/عدد دکھاتے ہیں، اعراب نہیں۔',
                hi: 'अफ़आल मब्नी हैं - उनके अंत शख्स/अदद दिखाते हैं, एराब नहीं।',
              },
            },
            balagha: {
              title: { en: 'Why Form IV أَنْعَمَ?', ur: 'باب افعال کیوں؟', hi: 'बाब इफ़आल क्यों?' },
              explanation: {
                en: 'Form IV (أَفْعَلَ) makes verbs causative/transitive. نَعِمَ = "to be blessed" → أَنْعَمَ = "to BESTOW blessing". Allah doesn\'t just have blessings - He GIVES them to others!',
                ur: 'باب افعال (أَفْعَلَ) فعل کو متعدی بناتا ہے۔ نَعِمَ = "نعمت پانا" → أَنْعَمَ = "نعمت دینا"۔ اللہ صرف نعمتیں نہیں رکھتا - دوسروں کو دیتا ہے!',
                hi: 'बाब इफ़आल (أَفْعَلَ) फ़ेअल को मुतअद्दी बनाता है। نَعِمَ = "नेअमत पाना" → أَنْعَمَ = "नेअमत देना"। अल्लाह सिर्फ नेअमतें नहीं रखता - दूसरों को देता है!',
              },
            },
            linguisticMiracle: {
              title: { en: 'Direct Address to Allah', ur: 'اللہ سے براہ راست مخاطب', hi: 'अल्लाह से सीधे मुख़ातिब' },
              points: [
                {
                  en: 'The تَ ending (2nd person singular) means we speak directly to Allah - not about Him. This personal connection makes dua powerful!',
                  ur: 'تَ کا اختتام (واحد مخاطب) یعنی ہم اللہ سے براہ راست بات کرتے ہیں - اس کے بارے میں نہیں۔ یہ ذاتی تعلق دعا کو طاقتور بناتا ہے!',
                  hi: 'تَ का अंत (वाहिद मुख़ातब) यानी हम अल्लाह से सीधे बात करते हैं - उसके बारे में नहीं।',
                },
              ],
            },
            tajweedTips: {
              rules: [
                { en: 'Hamza with fatha (أَ) - clear hamza sound', ur: 'ہمزہ مع فتحہ (أَ) - واضح ہمزہ کی آواز', hi: 'हम्ज़ा मअ फ़तहा (أَ) - वाज़ेह हम्ज़ा की आवाज़' },
                { en: 'ع is from deep throat - distinct guttural', ur: 'ع گلے کی گہرائی سے - واضح حلقی', hi: 'ع गले की गहराई से' },
                { en: 'Sukun on م before ت - clear stop', ur: 'م پر سکون، ت سے پہلے - واضح وقفہ', hi: 'م पर सुकून, ت से पहले - वाज़ेह वक़्फ़ा' },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'أَنْعَمْتَ = "You blessed" - the أَ at start is Form IV marker!', ur: 'أَنْعَمْتَ = "تو نے نعمت دی" - شروع میں أَ باب افعال کی علامت!', hi: 'अनअमता = "तूने नेअमत दी" - शुरू में أَ बाब इफ़आल की अलामत!' },
                { en: 'Remember: نِعْمَة (blessing) → أَنْعَمَ (to bestow blessing)', ur: 'یاد رکھیں: نِعْمَة (نعمت) → أَنْعَمَ (نعمت دینا)', hi: 'याद रखें: نِعْمَة (नेअमत) → أَنْعَمَ (नेअमत देना)' },
              ],
              mnemonic: {
                en: 'AN-AAM-TA = "A Nice Amount To All" (Allah gives blessings to all!)',
                ur: 'انعمت = "اللہ نے نعمت دی"',
                hi: 'अनअमता = "अल्लाह ने नेअमत दी"',
              },
            },
            scholarTranslations: [
              { scholar: 'Sahih International', text: 'You have bestowed favor' },
              { scholar: 'Pickthall', text: 'Thou hast favoured' },
              { scholar: 'Yusuf Ali', text: 'Thou didst bestow Thy Grace' },
              { scholar: 'Dr. Mustafa Khattab', text: 'You have blessed' },
              { scholar: 'Fateh Muhammad Jalandhri', text: 'جن پر تو نے انعام کیا' },
            ],
            similarPatterns: [
              { surah: 5, ayah: 23, text: 'أَنْعَمَ اللَّهُ عَلَيْهِمَا', context: { en: 'Allah blessed them both', ur: 'اللہ نے ان دونوں پر انعام کیا', hi: 'अल्लाह ने दोनों पर इनआम किया' } },
              { surah: 19, ayah: 58, text: 'أَنْعَمَ اللَّهُ عَلَيْهِم', context: { en: 'Allah blessed them', ur: 'اللہ نے ان پر انعام کیا', hi: 'अल्लाह ने उन पर इनआम किया' } },
            ],
            // Verb conjugation table
            verbConjugation: {
              root: 'ن ع م',
              form: 'IV (أَفْعَلَ)',
              meaning: { en: 'To bestow favor/blessing', ur: 'نعمت دینا/انعام کرنا', hi: 'नेअमत देना/इनआम करना' },
              table: {
                past: {
                  label: { en: 'Past (ماضی)', ur: 'ماضی', hi: 'माज़ी' },
                  هو: 'أَنْعَمَ',
                  هي: 'أَنْعَمَتْ',
                  هم: 'أَنْعَمُوا',
                  أنتَ: 'أَنْعَمْتَ',
                  أنتِ: 'أَنْعَمْتِ',
                  أنا: 'أَنْعَمْتُ',
                  نحن: 'أَنْعَمْنَا',
                },
                present: {
                  label: { en: 'Present (مضارع)', ur: 'مضارع', hi: 'मुज़ारे' },
                  هو: 'يُنْعِمُ',
                  هي: 'تُنْعِمُ',
                  هم: 'يُنْعِمُونَ',
                  أنتَ: 'تُنْعِمُ',
                  أنتِ: 'تُنْعِمِينَ',
                  أنا: 'أُنْعِمُ',
                  نحن: 'نُنْعِمُ',
                },
                imperative: {
                  label: { en: 'Command (أمر)', ur: 'امر', hi: 'अम्र' },
                  أنتَ: 'أَنْعِمْ',
                  أنتِ: 'أَنْعِمِي',
                  أنتم: 'أَنْعِمُوا',
                },
              },
            },
            // Morpheme breakdown
            morphemes: {
              prefix: { text: 'أَ', meaning: { en: 'Form IV marker', ur: 'باب افعال کی علامت', hi: 'बाब इफ़आल की अलामत' } },
              root: { letters: 'نعم', indices: [1, 2, 3] },
              suffix: { text: 'تَ', meaning: { en: '2nd person singular (You)', ur: 'واحد مخاطب (تو)', hi: 'वाहिद मुख़ातब (तू)' } },
            },
          },
          {
            id: 4,
            arabic: 'عَلَيْهِمْ',
            transliteration: 'ʿalayhim',
            translations: {
              en: 'upon them',
              ur: 'ان پر',
              hi: 'उन पर',
              bn: 'তাদের প্রতি',
              tr: 'kendilerine',
              id: 'kepada mereka',
            },
            pos: ['P', 'PRON'],
            posLabel: 'P+PRON',
            root: null,
            lemma: 'عَلَى',
            pattern: null,
            case: 'gen',
            features: {
              en: { type: 'Preposition + Pronoun', person: '3rd plural masculine' },
              ur: { type: 'حرف جار + ضمیر', person: 'جمع غائب مذکر' },
              hi: { type: 'संबंधसूचक + सर्वनाम', person: 'बहुवचन अन्य पुरुष पुल्लिंग' },
            },
            grammarRole: 'jarr',
            grammarExplanations: {
              en: 'Prepositional phrase completing the verb "bestowed favor upon them".',
              ur: 'جار ومجرور جو فعل کو مکمل کرتا ہے "ان پر انعام کیا"۔',
              hi: 'जार व मजरूर जो क्रिया को पूरा करता है "उन पर इनआम किया"।',
            },
            dependsOn: 3,
            dependencyTypes: {
              en: 'Prepositional phrase',
              ur: 'جار ومجرور',
              hi: 'जार व मजरूर',
            },
          },
          {
            id: 5,
            arabic: 'غَيْرِ',
            transliteration: 'ghayri',
            translations: {
              en: 'not',
              ur: 'نہ',
              hi: 'न',
              bn: 'নয়',
              tr: 'değil',
              id: 'bukan',
            },
            pos: ['N'],
            posLabel: 'N',
            root: 'غ ي ر',
            lemma: 'غَيْر',
            pattern: 'فَعْل',
            case: 'gen',
            features: {
              en: { type: 'Noun (used for exception)', state: 'Construct (مضاف)' },
              ur: { type: 'اسم (استثناء)', state: 'مضاف' },
              hi: { type: 'संज्ञा (अपवाद)', state: 'मुज़ाफ़' },
            },
            grammarRole: 'badal',
            grammarExplanations: {
              en: 'Substitute describing who is NOT meant - "other than" or "not the path of". Introduces the two groups to avoid.',
              ur: 'بدل جو بتاتا ہے کہ کون مراد نہیں - "نہ کہ"۔ دو گروہوں کا تعارف جن سے بچنا ہے۔',
              hi: 'बदल जो बताता है कि कौन मुराद नहीं - "न कि"। दो गिरोहों का परिचय जिनसे बचना है।',
            },
            dependsOn: 2,
            dependencyTypes: {
              en: 'Exception/exclusion',
              ur: 'استثناء',
              hi: 'अपवाद',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'غ ي ر',
              meaning: { en: 'Other, change, different', ur: 'دوسرا، بدلنا، مختلف', hi: 'दूसरा, बदलना, मुख़्तलिफ़' },
              words: [
                { arabic: 'غَيْر', meaning: { en: 'Other than/Not', ur: 'سوائے/نہ', hi: 'सिवाय/न' }, count: 163 },
                { arabic: 'غَيَّرَ', meaning: { en: 'He changed', ur: 'اس نے بدلا', hi: 'उसने बदला' }, count: 10 },
                { arabic: 'تَغْيِير', meaning: { en: 'Change', ur: 'تبدیلی', hi: 'तब्दीली' }, count: 4 },
                { arabic: 'يُغَيِّرُ', meaning: { en: 'He changes', ur: 'وہ بدلتا ہے', hi: 'वो बदलता है' }, count: 5 },
              ],
            },
            frequency: {
              word: 'غَيْر',
              total: 163,
              note: {
                en: 'غَيْر appears 163 times - one of the most common words! It always excludes or contrasts. Here it contrasts blessed vs. condemned paths.',
                ur: 'غَيْر 163 بار آیا - سب سے عام الفاظ میں سے! ہمیشہ الگ کرتا یا فرق بتاتا ہے۔ یہاں انعام یافتہ اور ملعون راستوں کا فرق۔',
                hi: 'ग़ैर 163 बार आया - सबसे आम अल्फ़ाज़ में से! हमेशा अलग करता है।'
              },
            },
            balagha: {
              title: { en: 'Why غَيْرِ not لَا?', ur: 'غَيْرِ کیوں نہ لَا؟', hi: 'ग़ैर क्यों न لَا?' },
              explanation: {
                en: 'غَيْرِ is stronger than simple negation لَا. It means "OTHER than" - actively excluding. It\'s like saying "definitely NOT these people" rather than just "not them".',
                ur: 'غَيْرِ سادہ نفی لَا سے زیادہ قوی ہے۔ اس کا مطلب "ان کے علاوہ" - فعال طور پر الگ کرنا۔ جیسے کہنا "یقیناً یہ لوگ نہیں" نہ صرف "یہ نہیں"۔',
                hi: 'ग़ैर साधारण नफ़ी لَا से ज़्यादा क़वी है। इसका मतलब "इनके अलावा" - फ़ाइल तौर पर अलग करना।',
              },
            },
            linguisticMiracle: {
              title: { en: 'Precise Exclusion', ur: 'درست استثناء', hi: 'सही इस्तिस्ना' },
              points: [
                {
                  en: 'غَيْرِ here creates a بدل (substitution/clarification). It clarifies the "straight path" by explaining whose path it is NOT.',
                  ur: 'غَيْرِ یہاں بدل بناتا ہے۔ یہ "صراط مستقیم" کی وضاحت کرتا ہے کہ کن کا راستہ نہیں ہے۔',
                  hi: 'ग़ैर यहाँ बदल बनाता है। यह "सिरात मुस्तक़ीम" की वज़ाहत करता है।',
                },
              ],
            },
            tajweedTips: {
              rules: [
                { en: 'غ is from deep throat (غين) - gargling sound', ur: 'غ گلے کی گہرائی سے (غین) - غرغرے جیسی آواز', hi: 'غ गले की गहराई से (ग़ैन) - गरारे जैसी आवाज़' },
                { en: 'Kasra at end (ـِ) shows genitive case', ur: 'آخر میں زیر (ـِ) حالت جر ظاہر کرتی ہے', hi: 'आख़िर में ज़ेर (ـِ) हालत जर ज़ाहिर करती है' },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'غَيْر sounds like "GHAIR" = "NOT these guys!"', ur: 'غَيْر کی آواز "غیر" = "یہ لوگ نہیں!"', hi: 'ग़ैर की आवाज़ "ग़ैर" = "ये लोग नहीं!"' },
                { en: 'غَيْرِ الْمَغْضُوبِ = "NOT the anger-receivers"', ur: 'غَيْرِ الْمَغْضُوبِ = "غضب والے نہیں"', hi: 'ग़ैरिल मग़्ज़ूब = "ग़ज़ब वाले नहीं"' },
              ],
            },
            morphemes: {
              prefix: null,
              root: { letters: 'غير', indices: [0, 1, 2] },
              suffix: { text: 'ِ', meaning: { en: 'Genitive case (Kasra)', ur: 'حالت جر (زیر)', hi: 'हालत जर (ज़ेर)' } },
            },
          },
          {
            id: 6,
            arabic: 'الْمَغْضُوبِ',
            transliteration: 'al-maghḍūbi',
            translations: {
              en: 'those who earned anger',
              ur: 'غضب والے',
              hi: 'ग़ज़ब वाले',
              bn: 'যাদের প্রতি ক্রোধ',
              tr: 'gazaba uğramışlar',
              id: 'yang dimurkai',
            },
            pos: ['N'],
            posLabel: 'N',
            root: 'غ ض ب',
            lemma: 'مَغْضُوب',
            pattern: 'مَفْعُول',
            case: 'gen',
            features: {
              en: { type: 'Passive participle', definiteness: 'Definite', form: 'مفعول - one upon whom action falls' },
              ur: { type: 'اسم مفعول', definiteness: 'معرفہ', form: 'مفعول - جس پر فعل واقع ہو' },
              hi: { type: 'कर्मवाचक', definiteness: 'परिभाषित', form: 'मफ़ऊल - जिस पर क्रिया हो' },
            },
            grammarRole: 'mudhafIlayh',
            grammarExplanations: {
              en: 'Those who have anger upon them - passive participle meaning "those upon whom anger has fallen". Those who knew the truth but rejected it.',
              ur: 'جن پر غضب ہوا - اسم مفعول یعنی "جن پر غضب نازل ہوا"۔ وہ جنہوں نے حق جان کر رد کیا۔',
              hi: 'जिन पर ग़ज़ब हुआ - इस्म मफ़ऊल यानी "जिन पर ग़ज़ब उतरा"। वो जिन्होंने हक़ जान कर रद किया।',
            },
            dependsOn: 5,
            dependencyTypes: {
              en: 'Genitive construction (إضافة)',
              ur: 'ترکیب اضافی',
              hi: 'इज़ाफ़त रचना',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'غ ض ب',
              meaning: { en: 'Anger, wrath, rage', ur: 'غصہ، غضب، قہر', hi: 'ग़ुस्सा, ग़ज़ब, क़हर' },
              words: [
                { arabic: 'غَضِبَ', meaning: { en: 'He became angry', ur: 'وہ ناراض ہوا', hi: 'वो नाराज़ हुआ' }, count: 8 },
                { arabic: 'غَضَب', meaning: { en: 'Anger/Wrath', ur: 'غضب/غصہ', hi: 'ग़ज़ब/ग़ुस्सा' }, count: 14 },
                { arabic: 'مَغْضُوب', meaning: { en: 'One angered upon', ur: 'غضب شدہ', hi: 'ग़ज़ब किया हुआ' }, count: 1 },
                { arabic: 'غَضْبَان', meaning: { en: 'Angry (adjective)', ur: 'غصے والا', hi: 'ग़ुस्से वाला' }, count: 3 },
                { arabic: 'يَغْضَبُ', meaning: { en: 'He gets angry', ur: 'وہ ناراض ہوتا ہے', hi: 'वो नाराज़ होता है' }, count: 2 },
              ],
            },
            frequency: {
              word: 'الْمَغْضُوبِ',
              total: 1,
              note: {
                en: 'This exact form appears ONLY HERE in entire Quran! Allah uses this unique word only in Fatiha to describe those whose path to avoid.',
                ur: 'یہ صیغہ پورے قرآن میں صرف یہیں آیا! اللہ نے یہ منفرد لفظ صرف فاتحہ میں استعمال کیا۔',
                hi: 'यह सीग़ा पूरे क़ुरआन में सिर्फ यहीं आया! अल्लाह ने यह मुनफ़रिद लफ़्ज़ सिर्फ फातिहा में इस्तेमाल किया।'
              },
            },
            irabReason: {
              case: 'مجرور',
              reason: {
                en: 'Genitive because it\'s مضاف إليه (possessed) in the construction غَيْرِ الْمَغْضُوبِ (other than the angered-upon).',
                ur: 'مجرور کیونکہ یہ غَيْرِ الْمَغْضُوبِ (غضب شدہ کے علاوہ) میں مضاف الیہ ہے۔',
                hi: 'मजरूर क्योंकि यह غَيْرِ الْمَغْضُوبِ (ग़ज़ब वालों के अलावा) में मुज़ाफ़ इलैह है।',
              },
              rule: {
                en: 'مضاف إليه is always مجرور (genitive case).',
                ur: 'مضاف الیہ ہمیشہ مجرور ہوتا ہے۔',
                hi: 'मुज़ाफ़ इलैह हमेशा मजरूर होता है।',
              },
            },
            balagha: {
              title: { en: 'Passive not Active', ur: 'مفعول نہ فاعل', hi: 'मफ़ऊल न फ़ाइल' },
              explanation: {
                en: 'الْمَغْضُوبِ is PASSIVE (those angered upon), not غَاضِبِينَ (angry ones). This emphasizes they RECEIVED Allah\'s anger - they are objects of wrath, not just angry people. The passive form shows divine judgment fell upon them!',
                ur: 'الْمَغْضُوبِ مفعول ہے (جن پر غضب ہوا)، نہ کہ غَاضِبِينَ (ناراض لوگ)۔ یہ زور دیتا ہے کہ انہوں نے اللہ کا غضب پایا - وہ قہر کا ہدف ہیں، صرف غصیلے لوگ نہیں!',
                hi: 'अल-मग़ज़ूब मफ़ऊल है (जिन पर ग़ज़ब हुआ), न कि ग़ाज़िबीन (नाराज़ लोग)। यह ज़ोर देता है कि उन्होंने अल्लाह का ग़ज़ब पाया!',
              },
            },
            linguisticMiracle: {
              title: { en: 'Hidden Subject', ur: 'پوشیدہ فاعل', hi: 'छुपा हुआ फ़ाइल' },
              points: [
                {
                  en: 'WHO is angry at them? The passive form doesn\'t say - but context makes clear it\'s Allah. This respectful omission avoids directly saying "Allah is angry" while conveying the meaning.',
                  ur: 'کون ان پر ناراض ہے؟ مفعول کا صیغہ نہیں بتاتا - لیکن سیاق واضح کرتا ہے کہ اللہ۔ یہ احترام سے براہ راست "اللہ ناراض ہے" کہنے سے بچاتا ہے۔',
                  hi: 'कौन उन पर नाराज़ है? मफ़ऊल का सीग़ा नहीं बताता - लेकिन सियाक़ वाज़ेह करता है कि अल्लाह।',
                },
                {
                  en: 'This group knew the truth but rejected it - worse than ignorance. Scholars say this refers to those who had knowledge but deliberately went astray.',
                  ur: 'اس گروہ نے سچ جان کر رد کیا - جہالت سے بدتر۔ علماء کہتے ہیں یہ ان کا حوالہ ہے جن کے پاس علم تھا لیکن جان بوجھ کر گمراہ ہوئے۔',
                  hi: 'इस गिरोह ने सच जान कर रद किया - जहालत से बदतर।',
                },
              ],
            },
            tajweedTips: {
              rules: [
                { en: 'الْ before غ - pronounce ال clearly (not assimilated)', ur: 'غ سے پہلے الْ - واضح ال پڑھیں (ادغام نہیں)', hi: 'غ से पहले الْ - वाज़ेह अल पढ़ें (इदग़ाम नहीं)' },
                { en: 'غ and ض are both deep throat letters - keep them distinct', ur: 'غ اور ض دونوں حلقی ہیں - الگ رکھیں', hi: 'غ और ض दोनों हल्क़ी हैं - अलग रखें' },
                { en: 'Stretch after مَ for full pronunciation', ur: 'مَ کے بعد مکمل تلفظ کے لیے کھینچیں', hi: 'मَ के बाद मुकम्मल तलफ़्फ़ुज़ के लिए खींचें' },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'مَغْضُوب = "MAD-zoob" = those who made God MAD!', ur: 'مَغْضُوب = "مغضوب" = جن پر اللہ کا غضب ہوا!', hi: 'मग़ज़ूब = "मग़ज़ूब" = जिन पर अल्लाह का ग़ज़ब हुआ!' },
                { en: 'Pattern مَفْعُول = one upon whom action happens (passive)', ur: 'وزن مَفْعُول = جس پر فعل واقع ہو (مفعول)', hi: 'वज़न मफ़ऊल = जिस पर फ़ेअल वाक़े हो (मफ़ऊल)' },
              ],
              mnemonic: {
                en: 'مَغْ-ضُوب = "Magically Zoomed past guidance" (they had knowledge but ignored it!)',
                ur: 'مغضوب = غضب شدہ',
                hi: 'मग़ज़ूब = ग़ज़ब किया हुआ',
              },
            },
            scholarTranslations: [
              { scholar: 'Sahih International', text: 'those who have evoked [Your] anger' },
              { scholar: 'Pickthall', text: 'those who earn Thine anger' },
              { scholar: 'Yusuf Ali', text: 'those whose (portion) is wrath' },
              { scholar: 'Dr. Mustafa Khattab', text: 'those who have earned Your anger' },
              { scholar: 'Fateh Muhammad Jalandhri', text: 'جن پر غضب ہوا' },
            ],
            similarPatterns: [
              { surah: 2, ayah: 61, text: 'وَبَاءُوا بِغَضَبٍ مِنَ اللَّهِ', context: { en: 'They returned with anger from Allah', ur: 'وہ اللہ کے غضب کے ساتھ لوٹے', hi: 'वो अल्लाह के ग़ज़ब के साथ लौटे' } },
              { surah: 3, ayah: 112, text: 'بِغَضَبٍ مِنَ اللَّهِ', context: { en: 'With anger from Allah', ur: 'اللہ کے غضب کے ساتھ', hi: 'अल्लाह के ग़ज़ब के साथ' } },
            ],
            morphemes: {
              prefix: { text: 'الْ', meaning: { en: 'Definite article (The)', ur: 'حرف تعریف (الـ)', hi: 'हर्फ़ तारीफ़ (अल)' } },
              root: { letters: 'غضب', indices: [2, 3, 4, 5] },
              suffix: { text: 'ِ', meaning: { en: 'Genitive case', ur: 'حالت جر', hi: 'हालत जर' } },
            },
          },
          {
            id: 7,
            arabic: 'عَلَيْهِمْ',
            transliteration: 'ʿalayhim',
            translations: {
              en: 'upon them',
              ur: 'ان پر',
              hi: 'उन पर',
              bn: 'তাদের উপর',
              tr: 'onlara',
              id: 'atas mereka',
            },
            pos: ['P', 'PRON'],
            posLabel: 'P+PRON',
            root: null,
            lemma: 'عَلَى',
            pattern: null,
            case: 'gen',
            features: {
              en: { type: 'Preposition + Pronoun', person: '3rd plural masculine' },
              ur: { type: 'حرف جار + ضمیر', person: 'جمع غائب مذکر' },
              hi: { type: 'संबंधसूचक + सर्वनाम', person: 'बहुवचन अन्य पुरुष पुल्लिंग' },
            },
            grammarRole: 'jarr',
            grammarExplanations: {
              en: 'Prepositional phrase - anger is "upon them".',
              ur: 'جار ومجرور - غضب "ان پر" ہے۔',
              hi: 'जार व मजरूर - ग़ज़ब "उन पर" है।',
            },
            dependsOn: 6,
            dependencyTypes: {
              en: 'Prepositional phrase',
              ur: 'جار ومجرور',
              hi: 'जार व मजरूर',
            },
          },
          {
            id: 8,
            arabic: 'وَلَا',
            transliteration: 'wa-lā',
            translations: {
              en: 'and not',
              ur: 'اور نہ',
              hi: 'और न',
              bn: 'এবং নয়',
              tr: 've değil',
              id: 'dan bukan',
            },
            pos: ['CONJ', 'NEG'],
            posLabel: 'CONJ+NEG',
            root: null,
            lemma: 'لَا',
            pattern: null,
            case: null,
            features: {
              en: { type: 'Conjunction + Negative particle' },
              ur: { type: 'حرف عطف + حرف نفی' },
              hi: { type: 'संयोजक + नकारात्मक' },
            },
            grammarRole: 'atf',
            grammarExplanations: {
              en: 'Conjunction adding another excluded group with emphasis. The لَا adds extra negation for emphasis.',
              ur: 'حرف عطف جو دوسرے گروہ کو تاکید سے جوڑتا ہے۔ لَا اضافی نفی کے لیے۔',
              hi: 'संयोजक जो दूसरे गिरोह को ज़ोर से जोड़ता है। لَا अतिरिक्त नकार के लिए।',
            },
            dependsOn: 5,
            dependencyTypes: {
              en: 'Conjunction (عطف)',
              ur: 'عطف',
              hi: 'अत्फ़',
            },
          },
          {
            id: 9,
            arabic: 'الضَّالِّينَ',
            transliteration: 'aḍ-ḍāllīna',
            translations: {
              en: 'those who are astray',
              ur: 'گمراہوں کا',
              hi: 'गुमराहों का',
              bn: 'যারা পথভ্রষ্ট',
              tr: 'sapıkların',
              id: 'yang sesat',
            },
            pos: ['N'],
            posLabel: 'N',
            root: 'ض ل ل',
            lemma: 'ضَالّ',
            pattern: 'فَاعِل',
            case: 'gen',
            features: {
              en: { type: 'Active participle (plural)', definiteness: 'Definite', form: 'فاعل - doer of action' },
              ur: { type: 'اسم فاعل (جمع)', definiteness: 'معرفہ', form: 'فاعل - کرنے والا' },
              hi: { type: 'कर्तृवाचक (बहुवचन)', definiteness: 'परिभाषित', form: 'फ़ाइल - करने वाला' },
            },
            grammarRole: 'atf',
            grammarExplanations: {
              en: 'Conjoined to المغضوب - the second excluded group. Those who went astray out of ignorance, lacking knowledge of truth.',
              ur: 'المغضوب سے معطوف - دوسرا گروہ جس سے بچنا ہے۔ وہ جو جہالت سے گمراہ ہوئے، حق کا علم نہ تھا۔',
              hi: 'المغضوب से जुड़ा - दूसरा गिरोह जिससे बचना है। वो जो जहालत से गुमराह हुए, हक़ का इल्म न था।',
            },
            dependsOn: 6,
            dependencyTypes: {
              en: 'Conjunction (معطوف)',
              ur: 'معطوف',
              hi: 'मातूफ़',
            },
            // === ADVANCED FEATURES ===
            rootFamily: {
              root: 'ض ل ل',
              meaning: { en: 'To stray, be lost, go astray', ur: 'گمراہ ہونا، کھو جانا، بھٹکنا', hi: 'गुमराह होना, खो जाना, भटकना' },
              words: [
                { arabic: 'ضَلَّ', meaning: { en: 'He went astray', ur: 'وہ گمراہ ہوا', hi: 'वो गुमराह हुआ' }, count: 32 },
                { arabic: 'ضَلَال', meaning: { en: 'Misguidance', ur: 'گمراہی', hi: 'गुमराही' }, count: 17 },
                { arabic: 'ضَالّ', meaning: { en: 'One astray', ur: 'گمراہ', hi: 'गुमराह' }, count: 5 },
                { arabic: 'أَضَلَّ', meaning: { en: 'He misled', ur: 'اس نے گمراہ کیا', hi: 'उसने गुमराह किया' }, count: 27 },
                { arabic: 'مُضِلّ', meaning: { en: 'One who misleads', ur: 'گمراہ کرنے والا', hi: 'गुमराह करने वाला' }, count: 3 },
                { arabic: 'ضَلَالَة', meaning: { en: 'Straying/Error', ur: 'گمراہی/غلطی', hi: 'गुमराही/ग़लती' }, count: 5 },
              ],
            },
            frequency: {
              word: 'الضَّالِّينَ',
              total: 5,
              spikedSurahs: [
                { surah: 1, name: 'Al-Fatiha', count: 1 },
                { surah: 26, name: 'Ash-Shu\'ara', count: 2 },
                { surah: 37, name: 'As-Saffat', count: 1 },
                { surah: 56, name: 'Al-Waqi\'ah', count: 1 },
              ],
              note: {
                en: 'This plural form "the astray ones" appears only 5 times. In Fatiha, it concludes the surah by identifying the second group to avoid.',
                ur: 'یہ جمع صیغہ "گمراہ لوگ" صرف 5 بار آیا۔ فاتحہ میں دوسرے گروہ کی نشاندہی کرتا ہے جن سے بچنا ہے۔',
                hi: 'यह जमा सीग़ा "गुमराह लोग" सिर्फ 5 बार आया। फातिहा में दूसरे गिरोह की निशानदेही करता है।'
              },
            },
            irabReason: {
              case: 'مجرور',
              reason: {
                en: 'Genitive because it\'s معطوف على المغضوب (conjoined to المغضوب) which is genitive. Conjoined words take the same case.',
                ur: 'مجرور کیونکہ یہ المغضوب پر معطوف ہے جو مجرور ہے۔ معطوف معطوف علیہ کا اعراب لیتا ہے۔',
                hi: 'मजरूर क्योंकि यह المغضوب पर मातूफ़ है जो मजरूर है। मातूफ़ मातूफ़ अलैह का एराब लेता है।',
              },
              rule: {
                en: 'معطوف (conjoined element) follows the case of معطوف عليه (what it\'s joined to).',
                ur: 'معطوف، معطوف علیہ کا اعراب لیتا ہے۔',
                hi: 'मातूफ़, मातूफ़ अलैह का एराब लेता है।',
              },
            },
            balagha: {
              title: { en: 'Active vs Passive Contrast', ur: 'فاعل بمقابلہ مفعول', hi: 'फ़ाइल बमुक़ाबला मफ़ऊल' },
              explanation: {
                en: 'الضَّالِّينَ is ACTIVE (فاعل - those who strayed), while الْمَغْضُوبِ is PASSIVE (مفعول - those angered upon). This contrast shows: Group 1 had anger DONE TO them (they earned it). Group 2 ACTIVELY strayed themselves. Both are bad, but the reasons differ!',
                ur: 'الضَّالِّينَ فاعل ہے (جو گمراہ ہوئے)، جبکہ الْمَغْضُوبِ مفعول ہے (جن پر غضب ہوا)۔ یہ فرق دکھاتا ہے: گروہ ۱ پر غضب ہوا (انہوں نے کمایا)۔ گروہ ۲ خود گمراہ ہوئے۔ دونوں برے ہیں، لیکن وجوہات مختلف!',
                hi: 'अज़-ज़ाल्लीन फ़ाइल है (जो गुमराह हुए), जबकि अल-मग़ज़ूब मफ़ऊल है (जिन पर ग़ज़ब हुआ)। यह फ़र्क़ दिखाता है कि दोनों बुरे हैं, लेकिन वजूहात मुख़्तलिफ़!',
              },
            },
            linguisticMiracle: {
              title: { en: 'Knowledge vs Ignorance', ur: 'علم بمقابلہ جہالت', hi: 'इल्म बमुक़ाबला जहालत' },
              points: [
                {
                  en: 'المغضوب = knew truth, rejected it = ACTIVE rebellion = earned anger. الضالين = didn\'t know truth = PASSIVE ignorance = went astray. The Quran distinguishes between willful rejection and honest ignorance!',
                  ur: 'المغضوب = حق جانتے تھے، رد کیا = فعال بغاوت = غضب کمایا۔ الضالين = حق نہیں جانتے تھے = غیر فعال جہالت = گمراہ ہوئے۔ قرآن جان بوجھ کر انکار اور ایماندارانہ جہالت میں فرق کرتا ہے!',
                  hi: 'अल-मग़ज़ूब = हक़ जानते थे, रद किया = फ़ाइल बग़ावत = ग़ज़ब कमाया। अज़-ज़ाल्लीन = हक़ नहीं जानते थे = ग़ैर-फ़ाइल जहालत = गुमराह हुए।',
                },
                {
                  en: 'The surah ends asking protection from BOTH paths - those who knew better AND those who were simply lost.',
                  ur: 'سورہ دونوں راستوں سے پناہ مانگتے ہوئے ختم ہوتی ہے - جو جانتے تھے اور جو صرف کھوئے ہوئے تھے۔',
                  hi: 'सूरा दोनों रास्तों से पनाह माँगते हुए ख़त्म होती है।',
                },
              ],
            },
            tajweedTips: {
              rules: [
                { en: 'ض is emphatic (مفخم) - heavy with tongue pressed up', ur: 'ض مفخم ہے - زبان اوپر دبی ہوئی بھاری', hi: 'ض मुफ़ख़्ख़म है - ज़बान ऊपर दबी हुई भारी' },
                { en: 'الـ assimilates to ض (shamsiyya letter) - read as "اضْضَالِّينَ"', ur: 'الـ ض میں ادغام (حروف شمسیہ) - "اضْضَالِّينَ" پڑھیں', hi: 'अल ض में इदग़ाम (हुरूफ़ शम्सिय्या) - "अज़्ज़ाल्लीन" पढ़ें' },
                { en: 'Shadda on ل - double the L sound clearly', ur: 'ل پر تشدید - واضح طور پر ل دوگنا', hi: 'ل पर तश्दीद - वाज़ेह तौर पर ل दोगना' },
                { en: 'Madd lazim (6 counts) - stretch before نَ', ur: 'مد لازم (۶ حرکات) - نَ سے پہلے کھینچیں', hi: 'मद्द लाज़िम (6 हरकात) - نَ से पहले खींचें' },
              ],
            },
            memoryHook: {
              tips: [
                { en: 'ضَالّ sounds like "DOLL" - like a lost doll that strayed away!', ur: 'ضَالّ کی آواز "ضال" - جیسے کھویا ہوا بچہ جو بھٹک گیا!', hi: 'ज़ाल की आवाज़ - जैसे खोया हुआ बच्चा जो भटक गया!' },
                { en: 'الضَّالِّينَ = "The LOST ones" - they wandered off the path', ur: 'الضَّالِّينَ = "گمشدہ لوگ" - وہ راستے سے بھٹک گئے', hi: 'अज़-ज़ाल्लीन = "गुमशुदा लोग" - वो रास्ते से भटक गए' },
              ],
              mnemonic: {
                en: 'Ḍ-ALL-een = "DULL" minds that couldn\'t find the way (not intentional, just lost)',
                ur: 'ضالین = گمراہ = جو راستہ نہ پا سکے',
                hi: 'ज़ाल्लीन = गुमराह = जो रास्ता न पा सके',
              },
            },
            scholarTranslations: [
              { scholar: 'Sahih International', text: 'those who are astray' },
              { scholar: 'Pickthall', text: 'those who go astray' },
              { scholar: 'Yusuf Ali', text: 'those who go astray' },
              { scholar: 'Dr. Mustafa Khattab', text: 'those who have gone astray' },
              { scholar: 'Fateh Muhammad Jalandhri', text: 'گمراہوں کا' },
            ],
            similarPatterns: [
              { surah: 7, ayah: 30, text: 'فَرِيقًا هَدَىٰ وَفَرِيقًا حَقَّ عَلَيْهِمُ الضَّلَالَةُ', context: { en: 'A party He guided and a party deserved misguidance', ur: 'ایک گروہ کو ہدایت دی اور ایک گروہ پر گمراہی ثابت ہوئی', hi: 'एक गिरोह को हिदायत दी और एक गिरोह पर गुमराही साबित हुई' } },
              { surah: 36, ayah: 62, text: 'وَلَقَدْ أَضَلَّ مِنكُمْ جِبِلًّا كَثِيرًا', context: { en: 'And he misled many of you', ur: 'اور اس نے تم میں سے بہت سی جماعت کو گمراہ کیا', hi: 'और उसने तुम में से बहुत सी जमात को गुमराह किया' } },
            ],
            morphemes: {
              prefix: { text: 'الـ', meaning: { en: 'Definite article (assimilated)', ur: 'حرف تعریف (مدغم)', hi: 'हर्फ़ तारीफ़ (मुदग़म)' } },
              root: { letters: 'ضلل', indices: [1, 2, 3, 4] },
              suffix: { text: 'ينَ', meaning: { en: 'Masculine plural', ur: 'جمع مذکر', hi: 'जमा मुज़क्कर' } },
            },
          },
        ],
        structure: {
          type: {
            en: 'Complex relative clause with exclusions',
            ur: 'مرکب صلۂ موصول مع استثناء',
            hi: 'जटिल संबंध उपवाक्य अपवादों के साथ',
          },
          explanations: {
            en: 'This ayah clarifies the "straight path" by describing whose path it is (those blessed by Allah) and whose path to avoid: (1) those who earned anger by rejecting truth knowingly, (2) those who went astray through ignorance. The surah ends with "Ameen" (آمین) when recited.',
            ur: 'یہ آیت "صراط مستقیم" کی وضاحت کرتی ہے: کن کا راستہ ہے (اللہ کے انعام یافتہ) اور کن سے بچنا ہے: (۱) جنہوں نے جان کر حق رد کیا، (۲) جو جہالت سے گمراہ ہوئے۔ تلاوت کے بعد "آمین" کہا جاتا ہے۔',
            hi: 'यह आयत "सिरात मुस्तक़ीम" की व्याख्या करती है: किनका रास्ता है (अल्लाह के इनआम वाले) और किनसे बचना है: (1) जिन्होंने जान कर हक़ रद किया, (2) जो जहालत से गुमराह हुए। तिलावत के बाद "आमीन" कहा जाता है।',
          },
          diagram: [
            { from: 2, to: 1, label: 'مضاف إليه' },
            { from: 3, to: 2, label: 'صلة' },
            { from: 4, to: 3, label: 'جار ومجرور' },
            { from: 5, to: 2, label: 'بدل' },
            { from: 6, to: 5, label: 'مضاف إليه' },
            { from: 7, to: 6, label: 'جار ومجرور' },
            { from: 8, to: 5, label: 'عطف' },
            { from: 9, to: 6, label: 'معطوف' },
          ],
        },
      },
    },
  },
};

/**
 * Quranic Ontology - Structured Knowledge Map of Concepts
 * Provides semantic relationships, concept categories, and cross-references
 */
export const QURAN_ONTOLOGY = {
  1: { // Surah Al-Fatiha
    name: { en: 'Al-Fatiha Ontology', ur: 'الفاتحہ کا علمی نقشہ', ar: 'أنطولوجيا الفاتحة', hi: 'अल-फातिहा का ज्ञान मानचित्र' },
    description: {
      en: 'The Opening - A complete worldview in 7 verses: Who is Allah, Who are we, What do we need',
      ur: 'افتتاحیہ - 7 آیات میں مکمل عالمی نظریہ: اللہ کون ہے، ہم کون ہیں، ہمیں کیا چاہیے',
      hi: 'आरंभ - 7 आयतों में संपूर्ण विश्वदृष्टि: अल्लाह कौन है, हम कौन हैं, हमें क्या चाहिए',
    },

    // Concept Categories
    categories: {
      divineNames: {
        id: 'divine-names',
        label: { en: 'Divine Names', ur: 'اسماء اللہ', ar: 'أسماء الله', hi: 'अल्लाह के नाम' },
        color: '#F59E0B',
        icon: 'Star',
        description: {
          en: 'Names of Allah mentioned in Al-Fatiha - each reveals a unique aspect of the Divine',
          ur: 'الفاتحہ میں اللہ کے نام - ہر ایک ذات الٰہی کا ایک منفرد پہلو ظاہر کرتا ہے',
          hi: 'अल-फातिहा में अल्लाह के नाम - हर एक ईश्वरीय सत्ता का एक अनूठा पहलू प्रकट करता है',
        },
        concepts: [
          {
            id: 'allah',
            arabic: 'اللہ',
            transliteration: 'Allah',
            meaning: { en: 'The One True God', ur: 'واحد سچا معبود', hi: 'एक सच्चा भगवान' },
            ayah: 1,
            category: 'essential',
            details: {
              en: 'The proper name of God - unique, not shared with any creation. Combines all attributes of perfection.',
              ur: 'اللہ کا ذاتی نام - منفرد، کسی مخلوق کے ساتھ مشترک نہیں۔ کمال کی تمام صفات کا جامع۔',
              hi: 'अल्लाह का व्यक्तिगत नाम - अद्वितीय, किसी सृष्टि के साथ साझा नहीं।',
            },
            frequency: 2699,
          },
          {
            id: 'ar-rahman',
            arabic: 'الرَّحْمَٰن',
            transliteration: 'Ar-Rahman',
            meaning: { en: 'The Most Merciful', ur: 'بے حد مہربان', hi: 'अत्यंत दयालु' },
            ayah: 1,
            category: 'mercy',
            details: {
              en: 'Intensive mercy - encompasses ALL creation. Even disbelievers receive Rahman\'s mercy (rain, life, provision).',
              ur: 'وسیع رحمت - تمام مخلوقات کو شامل ہے۔ کافر بھی رحمان کی رحمت پاتے ہیں (بارش، زندگی، رزق)۔',
              hi: 'व्यापक दया - सभी सृष्टि को शामिल। काफिर भी रहमान की रहमत पाते हैं।',
            },
            frequency: 57,
            relatedTo: ['ar-raheem'],
          },
          {
            id: 'ar-raheem',
            arabic: 'الرَّحِيم',
            transliteration: 'Ar-Raheem',
            meaning: { en: 'The Especially Merciful', ur: 'نہایت رحم والا', hi: 'विशेष रूप से दयालु' },
            ayah: 1,
            category: 'mercy',
            details: {
              en: 'Specific mercy - reserved for believers in the Hereafter. The mercy that saves from Hell and grants Paradise.',
              ur: 'خاص رحمت - آخرت میں مومنین کے لیے مخصوص۔ وہ رحمت جو جہنم سے بچاتی اور جنت عطا کرتی ہے۔',
              hi: 'विशेष दया - आख़िरत में मोमिनीन के लिए। वो रहमत जो जहन्नम से बचाती और जन्नत देती है।',
            },
            frequency: 115,
            relatedTo: ['ar-rahman'],
          },
          {
            id: 'rabb',
            arabic: 'رَبّ',
            transliteration: 'Rabb',
            meaning: { en: 'Lord / Sustainer / Nurturer', ur: 'پروردگار / پالنے والا', hi: 'पालनहार / पोषणकर्ता' },
            ayah: 2,
            category: 'lordship',
            details: {
              en: 'The One who creates, sustains, nurtures, and guides to perfection. From تَرْبِيَة (nurturing).',
              ur: 'جو پیدا کرتا، رزق دیتا، پرورش کرتا، اور کمال تک پہنچاتا ہے۔ تَرْبِيَة (پرورش) سے۔',
              hi: 'जो पैदा करता, रिज़्क़ देता, परवरिश करता, और कमाल तक पहुँचाता है।',
            },
            frequency: 980,
          },
          {
            id: 'malik',
            arabic: 'مَالِك',
            transliteration: 'Malik',
            meaning: { en: 'Master / Owner / King', ur: 'مالک / بادشاہ', hi: 'मालिक / बादशाह' },
            ayah: 4,
            category: 'sovereignty',
            details: {
              en: 'Absolute Owner of the Day of Judgment. All sovereignty returns to Him when worldly powers end.',
              ur: 'یوم الدین کا مطلق مالک۔ جب دنیاوی طاقتیں ختم ہوں تو تمام حاکمیت اسی کی طرف لوٹتی ہے۔',
              hi: 'यौम-उद-दीन का मुतलक़ मालिक। जब दुनियावी ताक़तें ख़त्म हों तो सब हाकिमियत उसी की।',
            },
            frequency: 5,
          },
        ],
      },

      divineAttributes: {
        id: 'divine-attributes',
        label: { en: 'Divine Attributes', ur: 'صفات الٰہیہ', ar: 'الصفات الإلهية', hi: 'ईश्वरीय गुण' },
        color: '#8B5CF6',
        icon: 'Sparkles',
        description: {
          en: 'Attributes of Allah derived from His names in Al-Fatiha',
          ur: 'الفاتحہ میں اللہ کے ناموں سے اخذ کردہ صفات',
          hi: 'अल-फातिहा में अल्लाह के नामों से प्राप्त गुण',
        },
        concepts: [
          {
            id: 'rahmah',
            arabic: 'رَحْمَة',
            transliteration: 'Rahmah',
            meaning: { en: 'Mercy', ur: 'رحمت', hi: 'रहमत' },
            derivedFrom: ['ar-rahman', 'ar-raheem'],
            details: {
              en: 'From root ر ح م (womb). Divine mercy is like a mother\'s love - unconditional, nurturing, protecting.',
              ur: 'مادہ ر ح م (رحم) سے۔ الٰہی رحمت ماں کی محبت جیسی - بے شرط، پرورش کرنے والی، حفاظت کرنے والی۔',
              hi: 'मादा ر ح م (गर्भ) से। इलाही रहमत माँ की मुहब्बत जैसी।',
            },
          },
          {
            id: 'rububiyyah',
            arabic: 'رُبُوبِيَّة',
            transliteration: 'Rububiyyah',
            meaning: { en: 'Lordship', ur: 'ربوبیت', hi: 'रबूबियत' },
            derivedFrom: ['rabb'],
            details: {
              en: 'Allah\'s role as Creator, Sustainer, and Manager of all affairs. Every moment depends on His Rububiyyah.',
              ur: 'خالق، رازق، اور تمام معاملات کے منتظم کے طور پر اللہ کا کردار۔ ہر لمحہ اس کی ربوبیت پر منحصر ہے۔',
              hi: 'ख़ालिक़, राज़िक़, और तमाम मामलात के मुंतज़िम के तौर पर अल्लाह का किरदार।',
            },
          },
          {
            id: 'mulk',
            arabic: 'مُلْك',
            transliteration: 'Mulk',
            meaning: { en: 'Sovereignty / Dominion', ur: 'بادشاہی / حاکمیت', hi: 'बादशाहत / हाकिमियत' },
            derivedFrom: ['malik'],
            details: {
              en: 'Complete ownership and authority. On Judgment Day, no one else has any power - "Whose is the Kingdom today?"',
              ur: 'مکمل ملکیت اور اختیار۔ قیامت کے دن کسی اور کے پاس کوئی طاقت نہیں - "آج کس کی بادشاہی ہے؟"',
              hi: 'मुकम्मल मिल्कियत और इख़्तियार। क़यामत के दिन किसी और के पास कोई ताक़त नहीं।',
            },
          },
        ],
      },

      humanActions: {
        id: 'human-actions',
        label: { en: 'Human Actions', ur: 'انسانی اعمال', ar: 'أعمال الإنسان', hi: 'मानवीय कर्म' },
        color: '#10B981',
        icon: 'Heart',
        description: {
          en: 'What humans do in relation to Allah - worship, seek help, seek guidance',
          ur: 'اللہ کے سلسلے میں انسان کیا کرتا ہے - عبادت، مدد مانگنا، ہدایت مانگنا',
          hi: 'अल्लाह के सिलसिले में इंसान क्या करता है - इबादत, मदद माँगना, हिदायत माँगना',
        },
        concepts: [
          {
            id: 'ibadah',
            arabic: 'عِبَادَة',
            transliteration: 'Ibadah',
            meaning: { en: 'Worship', ur: 'عبادت', hi: 'इबादत' },
            verb: 'نَعْبُدُ',
            ayah: 5,
            root: 'ع ب د',
            details: {
              en: 'Complete submission and devotion. From عَبْد (slave). True worship means being Allah\'s willing servant in everything.',
              ur: 'مکمل تسلیم اور عقیدت۔ عَبْد (غلام) سے۔ حقیقی عبادت یعنی ہر چیز میں اللہ کا رضامند بندہ ہونا۔',
              hi: 'मुकम्मल तस्लीम और अक़ीदत। अब्द (ग़ुलाम) से। हक़ीक़ी इबादत यानी हर चीज़ में अल्लाह का राज़ामंद बंदा होना।',
            },
          },
          {
            id: 'istianah',
            arabic: 'اِسْتِعَانَة',
            transliteration: 'Isti\'anah',
            meaning: { en: 'Seeking Help', ur: 'مدد مانگنا', hi: 'मदद माँगना' },
            verb: 'نَسْتَعِينُ',
            ayah: 5,
            root: 'ع و ن',
            details: {
              en: 'Seeking assistance only from Allah. Form X (استفعال) = seeking intensely. We cannot even worship without His help!',
              ur: 'صرف اللہ سے مدد مانگنا۔ باب استفعال = شدت سے مانگنا۔ ہم اس کی مدد کے بغیر عبادت بھی نہیں کر سکتے!',
              hi: 'सिर्फ अल्लाह से मदद माँगना। बाब इस्तिफ़आल = शिद्दत से माँगना।',
            },
          },
          {
            id: 'hidayah-seeking',
            arabic: 'طَلَبُ الْهِدَايَة',
            transliteration: 'Talab al-Hidayah',
            meaning: { en: 'Seeking Guidance', ur: 'ہدایت مانگنا', hi: 'हिदायत माँगना' },
            verb: 'اِهْدِنَا',
            ayah: 6,
            root: 'ه د ي',
            details: {
              en: 'The central request of Al-Fatiha. We ask 17+ times daily! Shows humans always need divine guidance.',
              ur: 'الفاتحہ کی مرکزی درخواست۔ ہم روزانہ 17+ بار مانگتے ہیں! ظاہر کرتا ہے کہ انسان کو ہمیشہ الٰہی رہنمائی چاہیے۔',
              hi: 'अल-फातिहा की मरकज़ी दरख़्वास्त। हम रोज़ाना 17+ बार माँगते हैं!',
            },
          },
        ],
      },

      paths: {
        id: 'paths',
        label: { en: 'The Paths', ur: 'راستے', ar: 'الصراط', hi: 'रास्ते' },
        color: '#3B82F6',
        icon: 'Route',
        description: {
          en: 'Three paths mentioned in Al-Fatiha - one to follow, two to avoid',
          ur: 'الفاتحہ میں تین راستے - ایک اختیار کرنا ہے، دو سے بچنا ہے',
          hi: 'अल-फातिहा में तीन रास्ते - एक अपनाना है, दो से बचना है',
        },
        concepts: [
          {
            id: 'sirat-mustaqeem',
            arabic: 'الصِّرَاطَ الْمُسْتَقِيمَ',
            transliteration: 'As-Sirat al-Mustaqeem',
            meaning: { en: 'The Straight Path', ur: 'سیدھا راستہ', hi: 'सीधा रास्ता' },
            ayah: 6,
            type: 'correct',
            color: '#22C55E',
            details: {
              en: 'The path of Islam - clear, wide, well-lit like a highway. No crookedness, no detours. Leads directly to Allah\'s pleasure and Paradise.',
              ur: 'اسلام کا راستہ - واضح، کشادہ، روشن جیسے شاہراہ۔ کوئی ٹیڑھ نہیں، کوئی چکر نہیں۔ براہ راست اللہ کی رضا اور جنت کی طرف۔',
              hi: 'इस्लाम का रास्ता - वाज़ेह, कुशादा, रौशन जैसे शाहराह।',
            },
          },
          {
            id: 'sirat-munameen',
            arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ',
            transliteration: 'Sirat alladhina an\'amta alayhim',
            meaning: { en: 'Path of Those Blessed', ur: 'انعام یافتہ لوگوں کا راستہ', hi: 'इनआम वालों का रास्ता' },
            ayah: 7,
            type: 'correct',
            color: '#22C55E',
            details: {
              en: 'Defined in Quran 4:69 - Prophets, Truthful ones, Martyrs, Righteous. These are our role models!',
              ur: 'قرآن 4:69 میں تعریف - انبیاء، صدیقین، شہداء، صالحین۔ یہ ہمارے نمونے ہیں!',
              hi: 'क़ुरआन 4:69 में तारीफ़ - अंबिया, सिद्दीक़ीन, शुहदा, सालिहीन।',
            },
            whoAreThey: {
              en: ['Prophets (أنبياء)', 'Truthful (صديقين)', 'Martyrs (شهداء)', 'Righteous (صالحين)'],
              ur: ['انبیاء', 'صدیقین', 'شہداء', 'صالحین'],
              hi: ['अंबिया', 'सिद्दीक़ीन', 'शुहदा', 'सालिहीन'],
            },
          },
          {
            id: 'sirat-maghdoob',
            arabic: 'الْمَغْضُوبِ عَلَيْهِمْ',
            transliteration: 'Al-Maghdubi alayhim',
            meaning: { en: 'Those Who Earned Anger', ur: 'غضب والے', hi: 'ग़ज़ब वाले' },
            ayah: 7,
            type: 'wrong',
            color: '#EF4444',
            details: {
              en: 'Those who KNEW the truth but deliberately rejected it. Knowledge + Rejection = Earned Allah\'s anger.',
              ur: 'جنہوں نے حق جانا لیکن جان بوجھ کر رد کیا۔ علم + انکار = اللہ کا غضب کمایا۔',
              hi: 'जिन्होंने हक़ जाना लेकिन जानबूझ कर रद किया।',
            },
            characteristic: { en: 'Knowledge without action', ur: 'علم بغیر عمل', hi: 'इल्म बग़ैर अमल' },
          },
          {
            id: 'sirat-dalleen',
            arabic: 'الضَّالِّينَ',
            transliteration: 'Ad-Dalleen',
            meaning: { en: 'Those Who Went Astray', ur: 'گمراہ لوگ', hi: 'गुमराह लोग' },
            ayah: 7,
            type: 'wrong',
            color: '#EF4444',
            details: {
              en: 'Those who went astray through IGNORANCE - they didn\'t know the truth. Sincere but misguided.',
              ur: 'جو جہالت سے گمراہ ہوئے - انہیں حق کا علم نہیں تھا۔ مخلص مگر گمراہ۔',
              hi: 'जो जहालत से गुमराह हुए - उन्हें हक़ का इल्म नहीं था।',
            },
            characteristic: { en: 'Action without knowledge', ur: 'عمل بغیر علم', hi: 'अमल बग़ैर इल्म' },
          },
        ],
      },

      timeframes: {
        id: 'timeframes',
        label: { en: 'Timeframes', ur: 'اوقات', ar: 'الأزمنة', hi: 'समय' },
        color: '#EC4899',
        icon: 'Clock',
        description: {
          en: 'Al-Fatiha covers all time - past praise, present worship, future judgment',
          ur: 'الفاتحہ تمام وقت کا احاطہ کرتی ہے - ماضی کی حمد، حال کی عبادت، مستقبل کا فیصلہ',
          hi: 'अल-फातिहा सारे वक़्त को शामिल करती है',
        },
        concepts: [
          {
            id: 'dunya',
            arabic: 'الدُّنْيَا',
            meaning: { en: 'This World', ur: 'دنیا', hi: 'दुनिया' },
            relevantAyahs: [1, 2, 3, 5, 6],
            details: { en: 'Allah\'s mercy, lordship, and our worship happen NOW', ur: 'اللہ کی رحمت، ربوبیت، اور ہماری عبادت ابھی ہوتی ہے', hi: 'अल्लाह की रहमत, रबूबियत, और हमारी इबादत अभी होती है' },
          },
          {
            id: 'yawm-ad-deen',
            arabic: 'يَوْمِ الدِّينِ',
            meaning: { en: 'Day of Judgment', ur: 'یوم الدین / قیامت', hi: 'यौम-उद-दीन / क़यामत' },
            ayah: 4,
            details: { en: 'The day when all accounts are settled and true ownership is revealed', ur: 'وہ دن جب تمام حساب ہوگا اور حقیقی مالکیت ظاہر ہوگی', hi: 'वो दिन जब तमाम हिसाब होगा और हक़ीक़ी मालिकियत ज़ाहिर होगी' },
          },
        ],
      },
    },

    // Semantic Relationships between concepts
    relationships: [
      {
        from: { en: 'Ar-Rahman', ur: 'الرَّحْمٰن', ar: 'الرَّحْمٰن', hi: 'अर-रहमान' },
        to: { en: 'Ar-Raheem', ur: 'الرَّحِيم', ar: 'الرَّحِيم', hi: 'अर-रहीम' },
        type: 'semantic-pair',
        label: { en: 'Same Root', ur: 'ایک مادہ', hi: 'एक मादा' },
        description: {
          en: 'Both from root ر ح م (mercy). Rahman = intensity (how much), Raheem = continuity (how long).',
          ur: 'دونوں مادہ ر ح م (رحمت) سے۔ رحمان = شدت (کتنی)، رحیم = تسلسل (کتنی دیر)۔',
          hi: 'दोनों मादा ر ح م (रहमत) से। रहमान = शिद्दत, रहीम = तसलसुल।',
        },
      },
      {
        from: { en: 'Ibadah', ur: 'عِبَادَة', ar: 'عِبَادَة', hi: 'इबादत' },
        to: { en: 'Isti\'anah', ur: 'اِسْتِعَانَة', ar: 'اِسْتِعَانَة', hi: 'इस्तिआनह' },
        type: 'sequential',
        label: { en: 'Leads To', ur: 'کی طرف لے جاتا ہے', hi: 'की तरफ़ ले जाता है' },
        description: {
          en: 'We worship THEN seek help. Or: We need help TO worship. Both are connected!',
          ur: 'ہم عبادت کرتے ہیں پھر مدد مانگتے ہیں۔ یا: ہمیں عبادت کے لیے مدد چاہیے۔ دونوں جڑے ہیں!',
          hi: 'हम इबादत करते हैं फिर मदद माँगते हैं।',
        },
      },
      {
        from: { en: 'Path of Maghdoob', ur: 'مَغْضُوب', ar: 'مَغْضُوب', hi: 'मग़्ज़ूब' },
        to: { en: 'Path of Dalleen', ur: 'ضَالِّين', ar: 'ضَالِّين', hi: 'ज़ाल्लीन' },
        type: 'contrast',
        label: { en: 'Contrast', ur: 'تضاد', hi: 'तज़ाद' },
        description: {
          en: 'Knowledge without action VS Action without knowledge. Both wrong, but different causes.',
          ur: 'علم بغیر عمل بمقابلہ عمل بغیر علم۔ دونوں غلط، لیکن مختلف وجوہات۔',
          hi: 'इल्म बग़ैर अमल बमुक़ाबला अमल बग़ैर इल्म।',
        },
      },
      {
        from: { en: 'Rabb', ur: 'رَبّ', ar: 'رَبّ', hi: 'रब' },
        to: { en: 'Ibadah', ur: 'عِبَادَة', ar: 'عِبَادَة', hi: 'इबादत' },
        type: 'implies',
        label: { en: 'Implies', ur: 'تقاضا کرتا ہے', hi: 'तक़ाज़ा करता है' },
        description: {
          en: 'If He is Rabb (Lord), we must be Abd (servants). Lordship demands worship.',
          ur: 'اگر وہ رب ہے، تو ہم عبد ہیں۔ ربوبیت عبادت کا تقاضا کرتی ہے۔',
          hi: 'अगर वो रब है, तो हम अब्द हैं।',
        },
      },
      {
        from: { en: 'Malik', ur: 'مَالِك', ar: 'مَالِك', hi: 'मालिक' },
        to: { en: 'Yawm ad-Deen', ur: 'يَوْمِ الدِّين', ar: 'يَوْمِ الدِّين', hi: 'यौम-उद-दीन' },
        type: 'context',
        label: { en: 'Context', ur: 'سیاق', hi: 'सियाक़' },
        description: {
          en: 'مالك is specifically linked to Day of Judgment - when all false kingships end.',
          ur: 'مالک خاص طور پر یوم الدین سے جڑا ہے - جب تمام جھوٹی بادشاہتیں ختم ہوں۔',
          hi: 'मालिक ख़ास तौर पर यौम-उद-दीन से जुड़ा है।',
        },
      },
    ],

    // Thematic Flow of the Surah
    thematicFlow: {
      label: { en: 'Thematic Flow of Al-Fatiha', ur: 'الفاتحہ کا موضوعاتی بہاؤ', hi: 'अल-फातिहा का विषयगत प्रवाह' },
      stages: [
        {
          ayahs: [1],
          theme: { en: 'Beginning with Allah\'s Name', ur: 'اللہ کے نام سے آغاز', hi: 'अल्लाह के नाम से आग़ाज़' },
          description: { en: 'Every action starts by invoking Allah\'s mercy', ur: 'ہر عمل اللہ کی رحمت کا نام لے کر شروع', hi: 'हर अमल अल्लाह की रहमत का नाम ले कर शुरू' },
        },
        {
          ayahs: [2, 3, 4],
          theme: { en: 'Praising Allah', ur: 'اللہ کی حمد', hi: 'अल्लाह की हम्द' },
          description: { en: 'Acknowledging who Allah is - Lord, Merciful, King', ur: 'اللہ کی پہچان - رب، رحمان، مالک', hi: 'अल्लाह की पहचान - रब, रहमान, मालिक' },
        },
        {
          ayahs: [5],
          theme: { en: 'Declaration of Worship', ur: 'عبادت کا اعلان', hi: 'इबादत का एलान' },
          description: { en: 'Declaring exclusive worship and dependence on Allah', ur: 'اللہ کی خالص عبادت اور انحصار کا اعلان', hi: 'अल्लाह की ख़ालिस इबादत और इन्हिसार का एलान' },
        },
        {
          ayahs: [6, 7],
          theme: { en: 'The Request', ur: 'درخواست', hi: 'दरख़्वास्त' },
          description: { en: 'Asking for guidance to the right path, away from wrong paths', ur: 'صحیح راستے کی ہدایت مانگنا، غلط راستوں سے بچنا', hi: 'सही रास्ते की हिदायत माँगना, ग़लत रास्तों से बचना' },
        },
      ],
    },

    // Cross-references to other Surahs
    crossReferences: [
      {
        concept: 'sirat-munameen',
        reference: { surah: 4, ayah: 69 },
        text: 'وَمَن يُطِعِ اللَّهَ وَالرَّسُولَ فَأُولَٰئِكَ مَعَ الَّذِينَ أَنْعَمَ اللَّهُ عَلَيْهِم',
        explanation: {
          en: 'Defines who are "those blessed" - Prophets, Truthful, Martyrs, Righteous',
          ur: '"انعام یافتہ" کون ہیں - انبیاء، صدیقین، شہداء، صالحین',
          hi: '"इनआम वाले" कौन हैं - अंबिया, सिद्दीक़ीन, शुहदा, सालिहीन',
        },
      },
      {
        concept: 'ar-rahman',
        reference: { surah: 55, ayah: 1 },
        text: 'الرَّحْمَٰنُ',
        explanation: {
          en: 'Entire Surah 55 is named Ar-Rahman, elaborating this attribute',
          ur: 'پوری سورہ 55 الرحمٰن نام ہے، اس صفت کی تفصیل',
          hi: 'पूरी सूरा 55 अर-रहमान नाम है, इस सिफ़त की तफ़सील',
        },
      },
      {
        concept: 'yawm-ad-deen',
        reference: { surah: 82, ayah: 17 },
        text: 'وَمَا أَدْرَاكَ مَا يَوْمُ الدِّينِ',
        explanation: {
          en: 'Surah Al-Infitar emphasizes the gravity of Day of Judgment',
          ur: 'سورہ الانفطار یوم الدین کی سنگینی پر زور دیتی ہے',
          hi: 'सूरा अल-इन्फ़ितार यौम-उद-दीन की संगीनी पर ज़ोर देती है',
        },
      },
    ],
  },
};

/**
 * Get ontology for a specific surah
 */
export const getSurahOntology = (surahId, lang = 'en') => {
  const ontology = QURAN_ONTOLOGY[surahId];
  if (!ontology) return null;
  return ontology;
};

/**
 * Check if ontology is available for a surah
 */
export const hasOntology = (surahId) => {
  return QURAN_ONTOLOGY.hasOwnProperty(surahId);
};

/**
 * Check if treebank data is available for a surah
 */
export const hasTreebankData = (surahId) => {
  return TREEBANK_DATA.hasOwnProperty(surahId);
};

/**
 * Get treebank data for a specific ayah with language support
 */
export const getAyahTreebank = (surahId, ayahNum, lang = 'en') => {
  if (!TREEBANK_DATA[surahId]) return null;
  const ayah = TREEBANK_DATA[surahId].ayahs[ayahNum];
  if (!ayah) return null;

  // Return data with text helper for the language
  return {
    ...ayah,
    // Resolve translation based on language
    translation: getText(ayah.translations, lang),
    // Words with resolved translations
    words: ayah.words.map(word => ({
      ...word,
      translation: getText(word.translations, lang),
      grammarExplanation: getText(word.grammarExplanations, lang),
      dependencyType: word.dependencyTypes ? getText(word.dependencyTypes, lang) : word.dependencyType,
      // Resolve features if they have language variants
      features: word.features?.[lang] || word.features?.en || word.features || {},
    })),
    // Structure with resolved explanations
    structure: {
      ...ayah.structure,
      type: getText(ayah.structure.type, lang),
      explanation: getText(ayah.structure.explanations, lang),
    },
  };
};

/**
 * Check if user can access treebank (premium feature)
 * Free: Surah Al-Fatiha (1)
 * Premium: All other surahs
 */
export const canAccessTreebank = (surahId, isPremium) => {
  if (surahId === 1) return true; // Always free for Fatiha
  return isPremium;
};

export default TREEBANK_DATA;
