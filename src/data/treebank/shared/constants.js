/**
 * Shared Treebank Constants
 * POS Tags, Grammar Roles, Cases, Harakat, UI Labels
 * Multi-language Support: en, ur, hi, bn, tr, id, ar
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
    names: { en: 'Shadda', ar: 'شَدَّة', ur: 'تشدید', hi: 'शद्दा', bn: 'শাদ্দা', tr: 'Şedde', id: 'Syaddah' },
    sound: '(double)',
    descriptions: {
      en: 'Doubles the consonant - hold the sound longer',
      ur: 'حرف کو دوگنا کرتا ہے - آواز کو لمبا کریں',
      hi: 'व्यंजन को दोगुना करता है',
      bn: 'ব্যঞ্জন দ্বিগুণ করে',
    },
    color: '#8B5CF6',
  },
  tanweenFatha: {
    symbol: 'ـً',
    unicode: '\u064B',
    names: { en: 'Tanween Fatha', ar: 'تنوين فتح', ur: 'دو زبر', hi: 'तनवीन फ़तहा', bn: 'তানবীন ফাতহা', tr: 'Tenvin Fetha', id: 'Tanwin Fathah' },
    sound: 'an',
    descriptions: {
      en: '"an" sound at end of word (indefinite)',
      ur: 'لفظ کے آخر میں "اً" کی آواز (نکرہ)',
      hi: 'शब्द के अंत में "अन" की आवाज़',
      bn: 'শব্দের শেষে "আন" ধ্বনি',
    },
    color: '#EF4444',
  },
  tanweenKasra: {
    symbol: 'ـٍ',
    unicode: '\u064D',
    names: { en: 'Tanween Kasra', ar: 'تنوين كسر', ur: 'دو زیر', hi: 'तनवीन कसरा', bn: 'তানবীন কাসরা', tr: 'Tenvin Kesre', id: 'Tanwin Kasrah' },
    sound: 'in',
    descriptions: {
      en: '"in" sound at end of word (indefinite)',
      ur: 'لفظ کے آخر میں "اِن" کی آواز (نکرہ)',
      hi: 'शब्द के अंत में "इन" की आवाज़',
      bn: 'শব্দের শেষে "ইন" ধ্বনি',
    },
    color: '#22C55E',
  },
  tanweenDamma: {
    symbol: 'ـٌ',
    unicode: '\u064C',
    names: { en: 'Tanween Damma', ar: 'تنوين ضم', ur: 'دو پیش', hi: 'तनवीन ज़म्मा', bn: 'তানবীন দাম্মা', tr: 'Tenvin Ötre', id: 'Tanwin Dhammah' },
    sound: 'un',
    descriptions: {
      en: '"un" sound at end of word (indefinite)',
      ur: 'لفظ کے آخر میں "اُن" کی آواز (نکرہ)',
      hi: 'शब्द के अंत में "उन" की आवाज़',
      bn: 'শব্দের শেষে "উন" ধ্বনি',
    },
    color: '#3B82F6',
  },
};

// Grammatical Cases with multi-language support
export const CASES = {
  marfoo: {
    labels: { en: 'Nominative (Marfoo)', ar: 'مرفوع', ur: 'مرفوع (پیش)', hi: 'मरफ़ू', bn: 'মারফু', tr: 'Merfu', id: 'Marfu' },
    marker: 'ـُ / ـٌ',
    color: '#3B82F6',
  },
  mansoob: {
    labels: { en: 'Accusative (Mansoob)', ar: 'منصوب', ur: 'منصوب (زبر)', hi: 'मन्सूब', bn: 'মানসুব', tr: 'Mansub', id: 'Manshub' },
    marker: 'ـَ / ـً',
    color: '#EF4444',
  },
  majroor: {
    labels: { en: 'Genitive (Majroor)', ar: 'مجرور', ur: 'مجرور (زیر)', hi: 'मज्रूर', bn: 'মাজরুর', tr: 'Mecrur', id: 'Majrur' },
    marker: 'ـِ / ـٍ',
    color: '#22C55E',
  },
  majzoom: {
    labels: { en: 'Jussive (Majzoom)', ar: 'مجزوم', ur: 'مجزوم (سکون)', hi: 'मज्ज़ूम', bn: 'মাজযুম', tr: 'Meczum', id: 'Majzum' },
    marker: 'ـْ',
    color: '#64748B',
  },
};

// UI Labels for all supported languages
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
    tafseer: 'Tafseer',
    translation: 'Translation',
    selectTranslation: 'Select Translation',
    selectTafseer: 'Select Tafseer',
    grammarTab: 'Grammar',
    tafseerTab: 'Tafseer',
    loading: 'Loading...',
    explore: 'Explore Ayah',
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
    harakatHelp: 'Harakat are vowel marks that show how to pronounce each letter. Fatha (a), Kasra (i), Damma (u) are short vowels. Shadda doubles a letter.',
    dependencyHelp: 'This diagram shows how words relate to each other. Lines connect related words, and labels show the relationship type (e.g., صفة means adjective describing a noun).',
    grammarBenefit: 'Understanding grammar helps you comprehend the deeper meaning of Quranic verses and improves your Arabic reading.',
    tapWordHelp: 'Tap any word above to see its detailed breakdown',
    howToRead: 'How to Read',
    whyLearn: 'Why Learn This?',
    rootFamily: 'Root Word Family',
    rootFamilyHelp: 'All words in Quran derived from this root. Learn one root, understand many words!',
    wordFrequency: 'Word in Quran',
    appearsIn: 'Appears in',
    times: 'times',
    surahs: 'surahs',
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
    tafseer: 'تفسیر',
    translation: 'ترجمہ',
    selectTranslation: 'ترجمہ منتخب کریں',
    selectTafseer: 'تفسیر منتخب کریں',
    grammarTab: 'قواعد',
    tafseerTab: 'تفسیر',
    loading: 'لوڈ ہو رہا ہے...',
    explore: 'آیت دریافت کریں',
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
    harakatHelp: 'حرکات وہ علامات ہیں جو ہر حرف کا تلفظ بتاتی ہیں۔ زَبَر (اَ)، زیر (اِ)، پیش (اُ) چھوٹی آوازیں ہیں۔ تشدید حرف کو دوگنا کرتی ہے۔',
    dependencyHelp: 'یہ تصویر دکھاتی ہے کہ الفاظ آپس میں کیسے جڑے ہیں۔ لکیریں متعلقہ الفاظ کو جوڑتی ہیں، اور لیبل رشتے کی قسم دکھاتے ہیں (مثلاً صفت کا مطلب ہے اسم کی صفت)۔',
    grammarBenefit: 'قواعد سمجھنے سے قرآنی آیات کا گہرا مفہوم سمجھنے میں مدد ملتی ہے اور عربی پڑھنے میں بہتری آتی ہے۔',
    tapWordHelp: 'تفصیلی تجزیے کے لیے اوپر کسی بھی لفظ پر ٹیپ کریں',
    howToRead: 'کیسے پڑھیں',
    whyLearn: 'کیوں سیکھیں؟',
    rootFamily: 'مادے کا خاندان',
    rootFamilyHelp: 'قرآن میں اس مادے سے بنے تمام الفاظ۔ ایک مادہ سیکھیں، بہت سے الفاظ سمجھیں!',
    wordFrequency: 'قرآن میں لفظ',
    appearsIn: 'آیا ہے',
    times: 'بار',
    surahs: 'سورتوں میں',
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
  return item.en || item.label || '';
};

// Helper to get feature key
export const getFeatureKey = (key, lang = 'en') => {
  const featureKeys = {
    gender: { en: 'Gender', ur: 'جنس', hi: 'लिंग', bn: 'লিঙ্গ', tr: 'Cinsiyet', id: 'Jenis Kelamin' },
    number: { en: 'Number', ur: 'عدد', hi: 'वचन', bn: 'বচন', tr: 'Sayı', id: 'Jumlah' },
    person: { en: 'Person', ur: 'شخص', hi: 'पुरुष', bn: 'পুরুষ', tr: 'Kişi', id: 'Orang' },
    case: { en: 'Case', ur: 'اعراب', hi: 'कारक', bn: 'কারক', tr: 'Durum', id: 'Kasus' },
    mood: { en: 'Mood', ur: 'صیغہ', hi: 'भाव', bn: 'ভাব', tr: 'Kip', id: 'Modus' },
    voice: { en: 'Voice', ur: 'معلوم/مجہول', hi: 'वाच्य', bn: 'বাচ্য', tr: 'Çatı', id: 'Diatesis' },
    state: { en: 'State', ur: 'حالت', hi: 'अवस्था', bn: 'অবস্থা', tr: 'Durum', id: 'Keadaan' },
    aspect: { en: 'Aspect', ur: 'پہلو', hi: 'पक्ष', bn: 'পক্ষ', tr: 'Görünüş', id: 'Aspek' },
    derivation: { en: 'Derivation', ur: 'اشتقاق', hi: 'व्युत्पत्ति', bn: 'উৎপত্তি', tr: 'Türetme', id: 'Derivasi' },
  };
  return featureKeys[key]?.[lang] || featureKeys[key]?.en || key;
};

// Helper to detect haraka in a character
export const detectHaraka = (char) => {
  const harakaMap = {
    '\u064E': 'fatha',
    '\u0650': 'kasra',
    '\u064F': 'damma',
    '\u0652': 'sukun',
    '\u0651': 'shadda',
    '\u064B': 'tanweenFatha',
    '\u064D': 'tanweenKasra',
    '\u064C': 'tanweenDamma',
    '\u0653': 'maddah',
    '\u0670': 'alifKhanjariya',
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
