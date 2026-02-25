/**
 * Surah Ghafir (40) - The Forgiver
 * Quranic Arabic Treebank Data
 * First 10 ayahs - Makki surah (85 total ayahs)
 * Theme: Allah's forgiveness, warning to disbelievers, stories of past nations
 */

export const TREEBANK_DATA = {
  surahId: 40,
  surahName: "Ghafir",
  surahNameArabic: "غافر",
  totalAyahs: 85,

  1: {
    ayahNumber: 1,
    text: "حم",
    words: [
      {
        id: '40:1:1',
        arabic: 'حم',
        transliteration: 'Ḥā Mīm',
        pos: ['LETTER'],
        posLabel: 'LETTER',
        root: null,
        meaning: { en: 'Ha Mim', ur: 'حا میم' },
        grammarRole: 'huruf_muqatta\'at',
        grammarExplanations: { en: 'Disconnected letters (حروف مقطعة) - their meaning known only to Allah.', ur: 'حروف مقطعات - ان کا معنی صرف اللہ جانتا ہے۔' }
      }
    ],
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    text: "تَنزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْعَلِيمِ",
    words: [
      {
        id: '40:2:1',
        arabic: 'تَنزِيلُ',
        transliteration: 'tanzīlu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ز ل',
        meaning: { en: 'The revelation', ur: 'نازل کرنا' },
        grammarRole: 'mubtada',
        grammarExplanations: { en: 'Subject (مبتدأ) - verbal noun Form II, nominative.', ur: 'مبتدأ - مصدر باب تفعیل، مرفوع۔' }
      },
      {
        id: '40:2:2',
        arabic: 'الْكِتَابِ',
        transliteration: 'al-kitābi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ت ب',
        meaning: { en: 'of the Book', ur: 'کتاب کا' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive (مضاف إليه) - the Quran.', ur: 'مضاف إليه - قرآن۔' }
      },
      {
        id: '40:2:3',
        arabic: 'مِنَ',
        transliteration: 'mina',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'from', ur: 'کی طرف سے' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition indicating source.', ur: 'حرف جر ماخذ کی طرف اشارہ۔' }
      },
      {
        id: '40:2:4',
        arabic: 'اللَّهِ',
        transliteration: 'Allāhi',
        pos: ['PN'],
        posLabel: 'PN',
        root: 'أ ل ه',
        meaning: { en: 'Allah', ur: 'اللہ' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive proper noun.', ur: 'اسم معرفہ مجرور۔' }
      },
      {
        id: '40:2:5',
        arabic: 'الْعَزِيزِ',
        transliteration: 'al-ʿazīzi',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ع ز ز',
        meaning: { en: 'the Mighty', ur: 'غالب' },
        grammarRole: 'sifa',
        grammarExplanations: { en: 'Adjective for اللَّهِ - genitive.', ur: 'صفت اللَّهِ کی - مجرور۔' }
      },
      {
        id: '40:2:6',
        arabic: 'الْعَلِيمِ',
        transliteration: 'al-ʿalīmi',
        pos: ['ADJ'],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
        posLabel: 'ADJ',
        root: 'ع ل م',
        meaning: { en: 'the Knowing', ur: 'جاننے والا' },
        grammarRole: 'sifa',
        grammarExplanations: { en: 'Second adjective for اللَّهِ - genitive.', ur: 'دوسری صفت اللَّهِ کی - مجرور۔' }
      }
    ]
  },

  3: {
    ayahNumber: 3,
    text: "غَافِرِ الذَّنبِ وَقَابِلِ التَّوْبِ شَدِيدِ الْعِقَابِ ذِي الطَّوْلِ",
    words: [
      {
        id: '40:3:1',
        arabic: 'غَافِرِ',
        transliteration: 'ghāfiri',
        pos: ['N'],
        posLabel: 'N',
        root: 'غ ف ر',
        meaning: { en: 'Forgiver', ur: 'معاف کرنے والا' },
        grammarRole: 'sifa',
        grammarExplanations: { en: 'Active participle as adjective for اللَّهِ - genitive in idafa.', ur: 'اسم فاعل بطور صفت اللَّهِ کی - مجرور اضافت میں۔' }
      },
      {
        id: '40:3:2',
        arabic: 'الذَّنبِ',
        transliteration: 'adh-dhanbi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ذ ن ب',
        meaning: { en: 'of sin', ur: 'گناہ کا' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive in idafa with غَافِرِ.', ur: 'مضاف إليه غَافِرِ کی اضافت میں۔' }
      },
      {
        id: '40:3:3',
        arabic: 'وَقَابِلِ',
        transliteration: 'wa-qābili',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ق ب ل',
        meaning: { en: 'and Acceptor', ur: 'اور قبول کرنے والا' },
        grammarRole: 'sifa',
        grammarExplanations: { en: 'Conjunction + active participle - another attribute.', ur: 'حرف عطف + اسم فاعل - ایک اور صفت۔' }
      },
      {
        id: '40:3:4',
        arabic: 'التَّوْبِ',
        transliteration: 'at-tawbi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ت و ب',
        meaning: { en: 'of repentance', ur: 'توبہ کا' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive - shortened form of التَّوْبَة.', ur: 'مضاف إليه - التَّوْبَة کی مختصر شکل۔' }
      },
      {
        id: '40:3:5',
        arabic: 'شَدِيدِ',
        transliteration: 'shadīdi',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ش د د',
        meaning: { en: 'severe', ur: 'سخت' },
        grammarRole: 'sifa',
        grammarExplanations: { en: 'Adjective - another attribute of Allah.', ur: 'صفت - اللہ کی ایک اور صفت۔' }
      },
      {
        id: '40:3:6',
        arabic: 'الْعِقَابِ',
        transliteration: 'al-ʿiqābi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ق ب',
        meaning: { en: 'of punishment', ur: 'سزا میں' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive in idafa.', ur: 'مضاف إليه۔' }
      },
      {
        id: '40:3:7',
        arabic: 'ذِي',
        transliteration: 'dhī',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: { en: 'Owner of', ur: 'والا' },
        grammarRole: 'sifa',
        grammarExplanations: { en: 'One of five nouns (أسماء خمسة) - genitive form.', ur: 'اسماء خمسہ سے - مجرور۔' }
      },
      {
        id: '40:3:8',
        arabic: 'الطَّوْلِ',
        transliteration: 'aṭ-ṭawli',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' },
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'موصوف + صفت' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'موصوف + صفت' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
        posLabel: 'N',
        root: 'ط و ل',
        meaning: { en: 'bounty', ur: 'فضل' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive - bounty/favor/power.', ur: 'مضاف إليه - فضل/طاقت۔' }
      }
    ]
  },

  4: {
    ayahNumber: 4,
    text: "مَا يُجَادِلُ فِي آيَاتِ اللَّهِ إِلَّا الَّذِينَ كَفَرُوا فَلَا يَغْرُرْكَ تَقَلُّبُهُمْ فِي الْبِلَادِ",
    words: [
      {
        id: '40:4:1',
        arabic: 'مَا',
        transliteration: 'mā',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: { en: 'Not', ur: 'نہیں' },
        grammarRole: 'harf_nafy',
        grammarExplanations: { en: 'Negative particle.', ur: 'حرف نفی۔' }
      },
      {
        id: '40:4:2',
        arabic: 'يُجَادِلُ',
        transliteration: 'yujādilu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ج د ل',
        meaning: { en: 'disputes', ur: 'جھگڑا کرتا ہے' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Imperfect verb Form III - mutual action "to argue".', ur: 'فعل مضارع باب مفاعلہ - "بحث کرنا"۔' }
      },
      {
        id: '40:4:3',
        arabic: 'فِي',
        transliteration: 'fī',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'concerning', ur: 'کے بارے میں' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition - arguing about.', ur: 'حرف جر - بارے میں بحث۔' }
      },
      {
        id: '40:4:4',
        arabic: 'آيَاتِ',
        transliteration: 'āyāti',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ي ي',
        meaning: { en: 'the verses', ur: 'آیات' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive plural.', ur: 'جمع مجرور۔' }
      },
      {
        id: '40:4:5',
        arabic: 'اللَّهِ',
        transliteration: 'Allāhi',
        pos: ['PN'],
        posLabel: 'PN',
        root: 'أ ل ه',
        meaning: { en: 'of Allah', ur: 'اللہ کی' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive in idafa.', ur: 'مضاف إليه۔' }
      },
      {
        id: '40:4:6',
        arabic: 'إِلَّا',
        transliteration: 'illā',
        pos: ['EXCEPT'],
        posLabel: 'EXCEPT',
        root: null,
        meaning: { en: 'except', ur: 'سوائے' },
        grammarRole: 'adat_hasr',
        grammarExplanations: { en: 'Exception particle - مَا...إِلَّا = only.', ur: 'ادات استثناء - مَا...إِلَّا = صرف۔' }
      },
      {
        id: '40:4:7',
        arabic: 'الَّذِينَ',
        transliteration: 'alladhīna',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: { en: 'those who', ur: 'وہ لوگ جو' },
        grammarRole: 'faa\'il',
        grammarExplanations: { en: 'Subject (فاعل) - relative pronoun.', ur: 'فاعل - اسم موصول۔' }
      },
      {
        id: '40:4:8',
        arabic: 'كَفَرُوا',
        transliteration: 'kafarū',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك ف ر',
        meaning: { en: 'disbelieve', ur: 'کفر کیا' },
        grammarRole: 'sila',
        grammarExplanations: { en: 'Perfect verb - relative clause.', ur: 'فعل ماضی - صلہ موصول۔' }
      },
      {
        id: '40:4:9',
        arabic: 'فَلَا',
        transliteration: 'fa-lā',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: { en: 'so let not', ur: 'تو نہ' },
        grammarRole: 'nahy',
        grammarExplanations: { en: 'Result فَ + prohibitive لَا.', ur: 'فَ نتیجہ + لَا ناہیہ۔' }
      },
      {
        id: '40:4:10',
        arabic: 'يَغْرُرْكَ',
        transliteration: 'yaghrurkka',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'غ ر ر',
        meaning: { en: 'deceive you', ur: 'تجھے دھوکہ دے' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Jussive verb + object pronoun كَ (you).', ur: 'فعل مضارع مجزوم + ضمیر مفعول كَ۔' }
      },
      {
        id: '40:4:11',
        arabic: 'تَقَلُّبُهُمْ',
        transliteration: 'taqallubuhum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ق ل ب',
        meaning: { en: 'their movement', ur: 'ان کا چلنا پھرنا' },
        grammarRole: 'faa\'il',
        grammarExplanations: { en: 'Subject of يَغْرُرْ - verbal noun Form V + pronoun.', ur: 'فاعل يَغْرُرْ کا - مصدر باب تفعّل + ضمیر۔' }
      },
      {
        id: '40:4:12',
        arabic: 'فِي',
        transliteration: 'fī',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'throughout', ur: 'میں' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' }
      },
      {
        id: '40:4:13',
        arabic: 'الْبِلَادِ',
        transliteration: 'al-bilādi',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'موصول + صلة' },
        { from: 9, to: 10, label: 'نفی + فعل' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
        posLabel: 'N',
        root: 'ب ل د',
        meaning: { en: 'the lands', ur: 'شہروں' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive plural.', ur: 'جمع مجرور۔' }
      }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ وَالْأَحْزَابُ مِن بَعْدِهِمْ",
    words: [
      {
        id: '40:5:1',
        arabic: 'كَذَّبَتْ',
        transliteration: 'kadhdhabat',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك ذ ب',
        meaning: { en: 'Denied', ur: 'جھٹلایا' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Perfect verb Form II - feminine for قَوْمُ.', ur: 'فعل ماضی باب تفعیل - قَوْمُ کے لیے مؤنث۔' }
      },
      {
        id: '40:5:2',
        arabic: 'قَبْلَهُمْ',
        transliteration: 'qablahum',
        pos: ['ADV', 'PRON'],
        posLabel: 'ADV+PRON',
        root: 'ق ب ل',
        meaning: { en: 'before them', ur: 'ان سے پہلے' },
        grammarRole: 'zarf_zaman',
        grammarExplanations: { en: 'Adverb of time + pronoun.', ur: 'ظرف زمان + ضمیر۔' }
      },
      {
        id: '40:5:3',
        arabic: 'قَوْمُ',
        transliteration: 'qawmu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و م',
        meaning: { en: 'the people', ur: 'قوم' },
        grammarRole: 'faa\'il',
        grammarExplanations: { en: 'Subject - nominative.', ur: 'فاعل - مرفوع۔' }
      },
      {
        id: '40:5:4',
        arabic: 'نُوحٍ',
        transliteration: 'Nūḥin',
        pos: ['PN'],
        posLabel: 'PN',
        root: null,
        meaning: { en: 'of Noah', ur: 'نوح کی' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive proper noun in idafa.', ur: 'علم مجرور اضافت میں۔' }
      },
      {
        id: '40:5:5',
        arabic: 'وَالْأَحْزَابُ',
        transliteration: 'wal-aḥzābu',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ح ز ب',
        meaning: { en: 'and the factions', ur: 'اور گروہ' },
        grammarRole: 'matoof',
        grammarExplanations: { en: 'Conjoined subject - nominative.', ur: 'معطوف فاعل - مرفوع۔' }
      },
      {
        id: '40:5:6',
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'after', ur: 'بعد' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition - from after them.', ur: 'حرف جر - ان کے بعد سے۔' }
      },
      {
        id: '40:5:7',
        arabic: 'بَعْدِهِمْ',
        transliteration: 'baʿdihim',
        pos: ['ADV', 'PRON'],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 6, label: 'عطف' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
        posLabel: 'ADV+PRON',
        root: 'ب ع د',
        meaning: { en: 'them', ur: 'ان کے' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Adverb of time as genitive + pronoun.', ur: 'ظرف زمان مجرور + ضمیر۔' }
      }
    ]
  },

  6: {
    ayahNumber: 6,
    text: "وَكَذَٰلِكَ حَقَّتْ كَلِمَتُ رَبِّكَ عَلَى الَّذِينَ كَفَرُوا أَنَّهُمْ أَصْحَابُ النَّارِ",
    words: [
      {
        id: '40:6:1',
        arabic: 'وَكَذَٰلِكَ',
        transliteration: 'wa-kadhālika',
        pos: ['CONJ', 'DEM'],
        posLabel: 'CONJ+DEM',
        root: null,
        meaning: { en: 'And thus', ur: 'اور اسی طرح' },
        grammarRole: 'jarr_majroor',
        grammarExplanations: { en: 'Conjunction + demonstrative - "and like that".', ur: 'حرف عطف + اسم اشارہ - "اور اسی طرح"۔' }
      },
      {
        id: '40:6:2',
        arabic: 'حَقَّتْ',
        transliteration: 'ḥaqqat',
        pos: ['V'],
        posLabel: 'V',
        root: 'ح ق ق',
        meaning: { en: 'has been justified', ur: 'ثابت ہو گئی' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Perfect verb - feminine for كَلِمَتُ.', ur: 'فعل ماضی - مؤنث كَلِمَتُ کے لیے۔' }
      },
      {
        id: '40:6:3',
        arabic: 'كَلِمَتُ',
        transliteration: 'kalimatu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ل م',
        meaning: { en: 'the word', ur: 'بات' },
        grammarRole: 'faa\'il',
        grammarExplanations: { en: 'Subject - nominative.', ur: 'فاعل - مرفوع۔' }
      },
      {
        id: '40:6:4',
        arabic: 'رَبِّكَ',
        transliteration: 'rabbika',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: { en: 'of your Lord', ur: 'تیرے رب کی' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive + possessive pronoun.', ur: 'مضاف إليه + ضمیر ملکیت۔' }
      },
      {
        id: '40:6:5',
        arabic: 'عَلَى',
        transliteration: 'ʿalā',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'against', ur: 'پر' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition - decree against.', ur: 'حرف جر - فیصلہ خلاف۔' }
      },
      {
        id: '40:6:6',
        arabic: 'الَّذِينَ',
        transliteration: 'alladhīna',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: { en: 'those who', ur: 'جو لوگ' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Relative pronoun - genitive.', ur: 'اسم موصول - مجرور۔' }
      },
      {
        id: '40:6:7',
        arabic: 'كَفَرُوا',
        transliteration: 'kafarū',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك ف ر',
        meaning: { en: 'disbelieved', ur: 'کفر کیا' },
        grammarRole: 'sila',
        grammarExplanations: { en: 'Relative clause verb.', ur: 'صلہ موصول۔' }
      },
      {
        id: '40:6:8',
        arabic: 'أَنَّهُمْ',
        transliteration: 'annahum',
        pos: ['CONJ', 'PRON'],
        posLabel: 'CONJ+PRON',
        root: null,
        meaning: { en: 'that they', ur: 'کہ وہ' },
        grammarRole: 'masdar_muawwal',
        grammarExplanations: { en: 'أَنَّ + pronoun - interpreted infinitive explaining كَلِمَتُ.', ur: 'أَنَّ + ضمیر - مصدر مؤول كَلِمَتُ کی وضاحت۔' }
      },
      {
        id: '40:6:9',
        arabic: 'أَصْحَابُ',
        transliteration: 'aṣḥābu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ص ح ب',
        meaning: { en: 'companions', ur: 'والے' },
        grammarRole: 'khabar_anna',
        grammarExplanations: { en: 'Predicate of أَنَّ - nominative.', ur: 'خبر أَنَّ - مرفوع۔' }
      },
      {
        id: '40:6:10',
        arabic: 'النَّارِ',
        transliteration: 'an-nāri',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'موصول + صلة' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
        posLabel: 'N',
        root: 'ن و ر',
        meaning: { en: 'of the Fire', ur: 'آگ کے' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive in idafa.', ur: 'مضاف إليه۔' }
      }
    ]
  },

  7: {
    ayahNumber: 7,
    text: "الَّذِينَ يَحْمِلُونَ الْعَرْشَ وَمَنْ حَوْلَهُ يُسَبِّحُونَ بِحَمْدِ رَبِّهِمْ وَيُؤْمِنُونَ بِهِ",
    words: [
      {
        id: '40:7:1',
        arabic: 'الَّذِينَ',
        transliteration: 'alladhīna',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: { en: 'Those who', ur: 'جو' },
        grammarRole: 'mubtada',
        grammarExplanations: { en: 'Relative pronoun as subject.', ur: 'اسم موصول بطور مبتدأ۔' }
      },
      {
        id: '40:7:2',
        arabic: 'يَحْمِلُونَ',
        transliteration: 'yaḥmilūna',
        pos: ['V'],
        posLabel: 'V',
        root: 'ح م ل',
        meaning: { en: 'bear', ur: 'اٹھاتے ہیں' },
        grammarRole: 'sila',
        grammarExplanations: { en: 'Imperfect verb - relative clause.', ur: 'فعل مضارع - صلہ موصول۔' }
      },
      {
        id: '40:7:3',
        arabic: 'الْعَرْشَ',
        transliteration: 'al-ʿarsha',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ر ش',
        meaning: { en: 'the Throne', ur: 'عرش' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object - accusative.', ur: 'مفعول بہ - منصوب۔' }
      },
      {
        id: '40:7:4',
        arabic: 'وَمَنْ',
        transliteration: 'wa-man',
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        root: null,
        meaning: { en: 'and those', ur: 'اور جو' },
        grammarRole: 'matoof',
        grammarExplanations: { en: 'Conjunction + relative pronoun.', ur: 'حرف عطف + اسم موصول۔' }
      },
      {
        id: '40:7:5',
        arabic: 'حَوْلَهُ',
        transliteration: 'ḥawlahu',
        pos: ['ADV', 'PRON'],
        posLabel: 'ADV+PRON',
        root: 'ح و ل',
        meaning: { en: 'around it', ur: 'اس کے گرد' },
        grammarRole: 'sila',
        grammarExplanations: { en: 'Adverb of place + pronoun - relative clause.', ur: 'ظرف مکان + ضمیر - صلہ۔' }
      },
      {
        id: '40:7:6',
        arabic: 'يُسَبِّحُونَ',
        transliteration: 'yusabbiḥūna',
        pos: ['V'],
        posLabel: 'V',
        root: 'س ب ح',
        meaning: { en: 'glorify', ur: 'تسبیح کرتے ہیں' },
        grammarRole: 'khabar',
        grammarExplanations: { en: 'Predicate - imperfect verb Form II.', ur: 'خبر - فعل مضارع باب تفعیل۔' }
      },
      {
        id: '40:7:7',
        arabic: 'بِحَمْدِ',
        transliteration: 'bi-ḥamdi',
        pos: ['PREP', 'N'],
        posLabel: 'PREP+N',
        root: 'ح م د',
        meaning: { en: 'with praise', ur: 'حمد کے ساتھ' },
        grammarRole: 'jarr_majroor',
        grammarExplanations: { en: 'Preposition + genitive noun.', ur: 'حرف جر + اسم مجرور۔' }
      },
      {
        id: '40:7:8',
        arabic: 'رَبِّهِمْ',
        transliteration: 'rabbihim',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: { en: 'of their Lord', ur: 'اپنے رب کی' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive + possessive pronoun.', ur: 'مضاف إليه + ضمیر ملکیت۔' }
      },
      {
        id: '40:7:9',
        arabic: 'وَيُؤْمِنُونَ',
        transliteration: 'wa-yu\'minūna',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'أ م ن',
        meaning: { en: 'and believe', ur: 'اور ایمان رکھتے ہیں' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Conjunction + imperfect verb Form IV.', ur: 'حرف عطف + فعل مضارع باب إفعال۔' }
      },
      {
        id: '40:7:10',
        arabic: 'بِهِ',
        transliteration: 'bihi',
        pos: ['PREP', 'PRON'],
    structure: {
      relationships: [
        { from: 1, to: 6, label: 'مبتدأ + خبر' },
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 5, label: 'عطف' },
        { from: 5, to: 6, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 9, label: 'عطف' }
      ],
    },
        posLabel: 'PREP+PRON',
        root: null,
        meaning: { en: 'in Him', ur: 'اس پر' },
        grammarRole: 'jarr_majroor',
        grammarExplanations: { en: 'Preposition + pronoun - in Allah.', ur: 'حرف جر + ضمیر - اللہ پر۔' }
      }
    ]
  },

  8: {
    ayahNumber: 8,
    text: "رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَّحْمَةً وَعِلْمًا فَاغْفِرْ لِلَّذِينَ تَابُوا وَاتَّبَعُوا سَبِيلَكَ",
    words: [
      {
        id: '40:8:1',
        arabic: 'رَبَّنَا',
        transliteration: 'rabbanā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: { en: 'Our Lord', ur: 'اے ہمارے رب' },
        grammarRole: 'munada',
        grammarExplanations: { en: 'Vocative (منادی) - accusative + possessive pronoun.', ur: 'منادی - منصوب + ضمیر ملکیت۔' }
      },
      {
        id: '40:8:2',
        arabic: 'وَسِعْتَ',
        transliteration: 'wasiʿta',
        pos: ['V'],
        posLabel: 'V',
        root: 'و س ع',
        meaning: { en: 'You encompass', ur: 'تو نے گھیر لیا' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Perfect verb - 2nd masculine singular.', ur: 'فعل ماضی - مخاطب مذکر واحد۔' }
      },
      {
        id: '40:8:3',
        arabic: 'كُلَّ',
        transliteration: 'kulla',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ل ل',
        meaning: { en: 'all', ur: 'ہر' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object - accusative.', ur: 'مفعول بہ - منصوب۔' }
      },
      {
        id: '40:8:4',
        arabic: 'شَيْءٍ',
        transliteration: 'shay\'in',
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ي أ',
        meaning: { en: 'thing', ur: 'چیز' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive in idafa.', ur: 'مضاف إليه۔' }
      },
      {
        id: '40:8:5',
        arabic: 'رَّحْمَةً',
        transliteration: 'raḥmatan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ح م',
        meaning: { en: 'in mercy', ur: 'رحمت میں' },
        grammarRole: 'tamyeez',
        grammarExplanations: { en: 'Specification (تمييز) - accusative.', ur: 'تمییز - منصوب۔' }
      },
      {
        id: '40:8:6',
        arabic: 'وَعِلْمًا',
        transliteration: 'wa-ʿilman',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ع ل م',
        meaning: { en: 'and knowledge', ur: 'اور علم میں' },
        grammarRole: 'tamyeez',
        grammarExplanations: { en: 'Conjoined specification.', ur: 'تمییز معطوف۔' }
      },
      {
        id: '40:8:7',
        arabic: 'فَاغْفِرْ',
        transliteration: 'fa-ghfir',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'غ ف ر',
        meaning: { en: 'so forgive', ur: 'پس بخش دے' },
        grammarRole: 'verb_amr',
        grammarExplanations: { en: 'Result فَ + imperative verb.', ur: 'فَ نتیجہ + فعل امر۔' }
      },
      {
        id: '40:8:8',
        arabic: 'لِلَّذِينَ',
        transliteration: 'lilladhīna',
        pos: ['PREP', 'REL'],
        posLabel: 'PREP+REL',
        root: null,
        meaning: { en: 'for those who', ur: 'ان کے لیے جنہوں نے' },
        grammarRole: 'jarr_majroor',
        grammarExplanations: { en: 'Preposition + relative - indirect object.', ur: 'حرف جر + موصول - مفعول ثانی۔' }
      },
      {
        id: '40:8:9',
        arabic: 'تَابُوا',
        transliteration: 'tābū',
        pos: ['V'],
        posLabel: 'V',
        root: 'ت و ب',
        meaning: { en: 'repent', ur: 'توبہ کی' },
        grammarRole: 'sila',
        grammarExplanations: { en: 'Perfect verb - relative clause.', ur: 'فعل ماضی - صلہ موصول۔' }
      },
      {
        id: '40:8:10',
        arabic: 'وَاتَّبَعُوا',
        transliteration: 'wa-ttabaʿū',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ت ب ع',
        meaning: { en: 'and follow', ur: 'اور پیروی کی' },
        grammarRole: 'sila',
        grammarExplanations: { en: 'Conjunction + perfect verb Form VIII.', ur: 'حرف عطف + فعل ماضی باب افتعال۔' }
      },
      {
        id: '40:8:11',
        arabic: 'سَبِيلَكَ',
        transliteration: 'sabīlaka',
        pos: ['N', 'PRON'],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 7, label: 'عطف' },
        { from: 9, to: 11, label: 'فعل + مفعول به' },
        { from: 9, to: 10, label: 'موصول + صلة' },
        { from: 9, to: 10, label: 'عطف' },
        { from: 10, to: 11, label: 'فعل + مفعول به' }
      ],
    },
        posLabel: 'N+PRON',
        root: 'س ب ل',
        meaning: { en: 'Your way', ur: 'تیرا راستہ' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object + possessive pronoun.', ur: 'مفعول بہ + ضمیر ملکیت۔' }
      }
    ]
  },

  9: {
    ayahNumber: 9,
    text: "وَقِهِمُ السَّيِّئَاتِ ۚ وَمَن تَقِ السَّيِّئَاتِ يَوْمَئِذٍ فَقَدْ رَحِمْتَهُ",
    words: [
      {
        id: '40:9:1',
        arabic: 'وَقِهِمُ',
        transliteration: 'wa-qihimu',
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        root: 'و ق ي',
        meaning: { en: 'and protect them', ur: 'اور انہیں بچا' },
        grammarRole: 'verb_amr',
        grammarExplanations: { en: 'Conjunction + imperative + object pronoun هِمْ.', ur: 'حرف عطف + فعل امر + ضمیر مفعول هِمْ۔' }
      },
      {
        id: '40:9:2',
        arabic: 'السَّيِّئَاتِ',
        transliteration: 'as-sayyi\'āti',
        pos: ['N'],
        posLabel: 'N',
        root: 'س و أ',
        meaning: { en: 'evil deeds', ur: 'برائیوں سے' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Second object - accusative.', ur: 'مفعول ثانی - منصوب۔' }
      },
      {
        id: '40:9:3',
        arabic: 'وَمَن',
        transliteration: 'wa-man',
        pos: ['CONJ', 'COND'],
        posLabel: 'CONJ+COND',
        root: null,
        meaning: { en: 'and whoever', ur: 'اور جسے' },
        grammarRole: 'shart',
        grammarExplanations: { en: 'Conjunction + conditional مَن (whoever).', ur: 'حرف عطف + مَن شرطیہ (جو بھی)۔' }
      },
      {
        id: '40:9:4',
        arabic: 'تَقِ',
        transliteration: 'taqi',
        pos: ['V'],
        posLabel: 'V',
        root: 'و ق ي',
        meaning: { en: 'You protect', ur: 'تو بچائے' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Jussive verb - shortened due to condition.', ur: 'فعل مضارع مجزوم - شرط کی وجہ سے مختصر۔' }
      },
      {
        id: '40:9:5',
        arabic: 'السَّيِّئَاتِ',
        transliteration: 'as-sayyi\'āti',
        pos: ['N'],
        posLabel: 'N',
        root: 'س و أ',
        meaning: { en: 'evil deeds', ur: 'برائیوں سے' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object.', ur: 'مفعول بہ۔' }
      },
      {
        id: '40:9:6',
        arabic: 'يَوْمَئِذٍ',
        transliteration: 'yawma\'idhin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ي و م',
        meaning: { en: 'that Day', ur: 'اس دن' },
        grammarRole: 'zarf_zaman',
        grammarExplanations: { en: 'Adverb of time - Day of Judgment.', ur: 'ظرف زمان - قیامت کا دن۔' }
      },
      {
        id: '40:9:7',
        arabic: 'فَقَدْ',
        transliteration: 'fa-qad',
        pos: ['CONJ', 'CERT'],
        posLabel: 'CONJ+CERT',
        root: null,
        meaning: { en: 'then indeed', ur: 'تو یقیناً' },
        grammarRole: 'jawab_shart',
        grammarExplanations: { en: 'Result فَ + certainty particle قَدْ.', ur: 'فَ جواب + حرف تحقیق قَدْ۔' }
      },
      {
        id: '40:9:8',
        arabic: 'رَحِمْتَهُ',
        transliteration: 'raḥimtahu',
        pos: ['V', 'PRON'],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'شرط + فعل' },
        { from: 4, to: 5, label: 'فعل + مفعول به' }
      ],
    },
        posLabel: 'V+PRON',
        root: 'ر ح م',
        meaning: { en: 'You have shown him mercy', ur: 'تو نے اس پر رحم کیا' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Perfect verb + object pronoun.', ur: 'فعل ماضی + ضمیر مفعول۔' }
      }
    ]
  },

  10: {
    ayahNumber: 10,
    text: "إِنَّ الَّذِينَ كَفَرُوا يُنَادَوْنَ لَمَقْتُ اللَّهِ أَكْبَرُ مِن مَّقْتِكُمْ أَنفُسَكُمْ",
    words: [
      {
        id: '40:10:1',
        arabic: 'إِنَّ',
        transliteration: 'inna',
        pos: ['EMPH'],
        posLabel: 'EMPH',
        root: null,
        meaning: { en: 'Indeed', ur: 'بے شک' },
        grammarRole: 'harf_tawkeed',
        grammarExplanations: { en: 'Emphatic particle.', ur: 'حرف توکید۔' }
      },
      {
        id: '40:10:2',
        arabic: 'الَّذِينَ',
        transliteration: 'alladhīna',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: { en: 'those who', ur: 'جو لوگ' },
        grammarRole: 'ism_inna',
        grammarExplanations: { en: 'Subject of إِنَّ - relative pronoun.', ur: 'اسم إن - اسم موصول۔' }
      },
      {
        id: '40:10:3',
        arabic: 'كَفَرُوا',
        transliteration: 'kafarū',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك ف ر',
        meaning: { en: 'disbelieved', ur: 'کفر کیا' },
        grammarRole: 'sila',
        grammarExplanations: { en: 'Perfect verb - relative clause.', ur: 'فعل ماضی - صلہ موصول۔' }
      },
      {
        id: '40:10:4',
        arabic: 'يُنَادَوْنَ',
        transliteration: 'yunādawna',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن د و',
        meaning: { en: 'will be called', ur: 'پکارے جائیں گے' },
        grammarRole: 'khabar_inna',
        grammarExplanations: { en: 'Predicate of إِنَّ - passive imperfect Form III.', ur: 'خبر إن - فعل مضارع مجہول باب مفاعلہ۔' }
      },
      {
        id: '40:10:5',
        arabic: 'لَمَقْتُ',
        transliteration: 'la-maqtu',
        pos: ['EMPH', 'N'],
        posLabel: 'EMPH+N',
        root: 'م ق ت',
        meaning: { en: 'surely the hatred', ur: 'یقیناً غصہ' },
        grammarRole: 'mubtada',
        grammarExplanations: { en: 'Emphatic لَ + subject of quoted speech.', ur: 'تاکیدی لَ + مبتدأ مقولہ قول۔' }
      },
      {
        id: '40:10:6',
        arabic: 'اللَّهِ',
        transliteration: 'Allāhi',
        pos: ['PN'],
        posLabel: 'PN',
        root: 'أ ل ه',
        meaning: { en: 'of Allah', ur: 'اللہ کا' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive in idafa.', ur: 'مضاف إليه۔' }
      },
      {
        id: '40:10:7',
        arabic: 'أَكْبَرُ',
        transliteration: 'akbaru',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ك ب ر',
        meaning: { en: 'is greater', ur: 'بڑا ہے' },
        grammarRole: 'khabar',
        grammarExplanations: { en: 'Predicate - comparative form (أَفْعَل).', ur: 'خبر - اسم تفضیل (أَفْعَل)۔' }
      },
      {
        id: '40:10:8',
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'than', ur: 'سے' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Comparative preposition.', ur: 'حرف جر تفضیلی۔' }
      },
      {
        id: '40:10:9',
        arabic: 'مَّقْتِكُمْ',
        transliteration: 'maqtikum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'م ق ت',
        meaning: { en: 'your hatred', ur: 'تمہارا غصہ' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive noun + possessive pronoun.', ur: 'اسم مجرور + ضمیر ملکیت۔' }
      },
      {
        id: '40:10:10',
        arabic: 'أَنفُسَكُمْ',
        transliteration: 'anfusakum',
        pos: ['N', 'PRON'],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'توکید' },
        { from: 2, to: 4, label: 'مبتدأ + خبر' },
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 7, label: 'مبتدأ + خبر' },
        { from: 6, to: 7, label: 'موصوف + صفت' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
        posLabel: 'N+PRON',
        root: 'ن ف س',
        meaning: { en: 'yourselves', ur: 'خود سے' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Object of مَّقْتِكُمْ + possessive pronoun.', ur: 'مفعول مَّقْتِكُمْ کا + ضمیر ملکیت۔' }
      }
    ]
  },

  11: {
    ayahNumber: 11,
    text: "قَالُوا۟ رَبَّنَآ أَمَتَّنَا ٱثْنَتَيْنِ وَأَحْيَيْتَنَا ٱثْنَتَيْنِ فَٱعْتَرَفْنَا بِذُنُوبِنَا فَهَلْ إِلَىٰ خُرُوجٍۢ مِّن سَبِيلٍۢ",
    words: [
      { arabic: "قَالُوا۟", transliteration: "qālū", meaning: { en: "They (will) say", ur: "وہ لوگ (will) کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبَّنَآ", transliteration: "rabbanā", meaning: { en: "Our Lord", ur: "Our رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَمَتَّنَا", transliteration: "amattanā", meaning: { en: "You gave us death", ur: "تم gave us موت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱثْنَتَيْنِ", transliteration: "ith'natayni", meaning: { en: "twice", ur: "twice" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَحْيَيْتَنَا", transliteration: "wa-aḥyaytanā", meaning: { en: "and You gave us life", ur: "اور تم gave us زندگی" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱثْنَتَيْنِ", transliteration: "ith'natayni", meaning: { en: "twice", ur: "twice" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱعْتَرَفْنَا", transliteration: "fa-iʿ'tarafnā", meaning: { en: "and we confess", ur: "اور ہم confess" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "بِذُنُوبِنَا", transliteration: "bidhunūbinā", meaning: { en: "our sins", ur: "our sins" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "فَهَلْ", transliteration: "fahal", meaning: { en: "So is (there)", ur: "So is (there)" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "خُرُوجٍۢ", transliteration: "khurūjin", meaning: { en: "get out", ur: "get out" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَبِيلٍۢ", transliteration: "sabīlin", meaning: { en: "way", ur: "راستہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  12: {
    ayahNumber: 12,
    text: "ذَٰلِكُم بِأَنَّهُۥٓ إِذَا دُعِىَ ٱللَّهُ وَحْدَهُۥ كَفَرْتُمْ ۖ وَإِن يُشْرَكْ بِهِۦ تُؤْمِنُوا۟ ۚ فَٱلْحُكْمُ لِلَّهِ ٱلْعَلِىِّ ٱلْكَبِيرِ",
    words: [
      { arabic: "ذَٰلِكُم", transliteration: "dhālikum", meaning: { en: "That", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِأَنَّهُۥٓ", transliteration: "bi-annahu", meaning: { en: "(is) because", ur: "(is) because" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "دُعِىَ", transliteration: "duʿiya", meaning: { en: "Allah was invoked", ur: "اللہ was invoked" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "Allah was invoked", ur: "اللہ was invoked" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَحْدَهُۥ", transliteration: "waḥdahu", meaning: { en: "Alone", ur: "Alone" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كَفَرْتُمْ ۖ", transliteration: "kafartum", meaning: { en: "you disbelieved", ur: "تم disbelieved" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "but if", ur: "لیکن if" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يُشْرَكْ", transliteration: "yush'rak", meaning: { en: "(others) were associated", ur: "(others) were associated" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "with Him", ur: "ساتھ Him" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "تُؤْمِنُوا۟ ۚ", transliteration: "tu'minū", meaning: { en: "you believed", ur: "تم ایمان لائے" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَٱلْحُكْمُ", transliteration: "fal-ḥuk'mu", meaning: { en: "So the judgment", ur: "So the judgment" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "لِلَّهِ", transliteration: "lillahi", meaning: { en: "(is) with Allah", ur: "(is) ساتھ اللہ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱلْعَلِىِّ", transliteration: "l-ʿaliyi", meaning: { en: "the Most High", ur: "the Most High" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "ٱلْكَبِيرِ", transliteration: "l-kabīri", meaning: { en: "the Most Great", ur: "the Most Great" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  13: {
    ayahNumber: 13,
    text: "هُوَ ٱلَّذِى يُرِيكُمْ ءَايَـٰتِهِۦ وَيُنَزِّلُ لَكُم مِّنَ ٱلسَّمَآءِ رِزْقًۭا ۚ وَمَا يَتَذَكَّرُ إِلَّا مَن يُنِيبُ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "(is) the One Who", ur: "(is) the One جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُرِيكُمْ", transliteration: "yurīkum", meaning: { en: "shows you", ur: "shows تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَايَـٰتِهِۦ", transliteration: "āyātihi", meaning: { en: "His Signs", ur: "His نشانیاں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيُنَزِّلُ", transliteration: "wayunazzilu", meaning: { en: "and sends down", ur: "اور sends down" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "for تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", meaning: { en: "the sky", ur: "the sky" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رِزْقًۭا ۚ", transliteration: "riz'qan", meaning: { en: "provision", ur: "provision" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "But (does) not", ur: "لیکن (does) نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَتَذَكَّرُ", transliteration: "yatadhakkaru", meaning: { en: "take heed", ur: "take heed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "(one) who", ur: "(one) جو" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يُنِيبُ", transliteration: "yunību", meaning: { en: "turns", ur: "turns" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'موصول + صلة' }
      ],
    },
  },
  14: {
    ayahNumber: 14,
    text: "فَٱدْعُوا۟ ٱللَّهَ مُخْلِصِينَ لَهُ ٱلدِّينَ وَلَوْ كَرِهَ ٱلْكَـٰفِرُونَ",
    words: [
      { arabic: "فَٱدْعُوا۟", transliteration: "fa-id'ʿū", meaning: { en: "So invoke", ur: "So invoke" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُخْلِصِينَ", transliteration: "mukh'liṣīna", meaning: { en: "(being) sincere", ur: "(being) sincere" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "to Him", ur: "کو Him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدِّينَ", transliteration: "l-dīna", meaning: { en: "(in) the religion", ur: "(میں) the religion" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "even though", ur: "even though" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كَرِهَ", transliteration: "kariha", meaning: { en: "dislike (it)", ur: "dislike (it)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْكَـٰفِرُونَ", transliteration: "l-kāfirūna", meaning: { en: "the disbelievers", ur: "the کافر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  15: {
    ayahNumber: 15,
    text: "رَفِيعُ ٱلدَّرَجَـٰتِ ذُو ٱلْعَرْشِ يُلْقِى ٱلرُّوحَ مِنْ أَمْرِهِۦ عَلَىٰ مَن يَشَآءُ مِنْ عِبَادِهِۦ لِيُنذِرَ يَوْمَ ٱلتَّلَاقِ",
    words: [
      { arabic: "رَفِيعُ", transliteration: "rafīʿu", meaning: { en: "Possessor of the Highest Ranks", ur: "Possessor of the Highest Ranks" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدَّرَجَـٰتِ", transliteration: "l-darajāti", meaning: { en: "Possessor of the Highest Ranks", ur: "Possessor of the Highest Ranks" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذُو", transliteration: "dhū", meaning: { en: "Owner (of) the Throne", ur: "Owner (of) the Throne" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَرْشِ", transliteration: "l-ʿarshi", meaning: { en: "Owner (of) the Throne", ur: "Owner (of) the Throne" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُلْقِى", transliteration: "yul'qī", meaning: { en: "He places", ur: "وہ places" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلرُّوحَ", transliteration: "l-rūḥa", meaning: { en: "the inspiration", ur: "the inspiration" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَمْرِهِۦ", transliteration: "amrihi", meaning: { en: "His Command", ur: "His Command" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "whom", ur: "whom" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَشَآءُ", transliteration: "yashāu", meaning: { en: "He wills", ur: "وہ wills" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عِبَادِهِۦ", transliteration: "ʿibādihi", meaning: { en: "His slaves", ur: "His slaves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِيُنذِرَ", transliteration: "liyundhira", meaning: { en: "to warn", ur: "کو warn" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "(of the) Day", ur: "(of the) دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلتَّلَاقِ", transliteration: "l-talāqi", meaning: { en: "(of) the Meeting", ur: "(of) the Meeting" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'موصول + صلة' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  16: {
    ayahNumber: 16,
    text: "يَوْمَ هُم بَـٰرِزُونَ ۖ لَا يَخْفَىٰ عَلَى ٱللَّهِ مِنْهُمْ شَىْءٌۭ ۚ لِّمَنِ ٱلْمُلْكُ ٱلْيَوْمَ ۖ لِلَّهِ ٱلْوَٰحِدِ ٱلْقَهَّارِ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "(The) Day", ur: "(The) دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هُم", transliteration: "hum", meaning: { en: "they", ur: "وہ لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَـٰرِزُونَ ۖ", transliteration: "bārizūna", meaning: { en: "come forth", ur: "come forth" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَخْفَىٰ", transliteration: "yakhfā", meaning: { en: "is hidden", ur: "is hidden" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْهُمْ", transliteration: "min'hum", meaning: { en: "about them", ur: "about them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَىْءٌۭ ۚ", transliteration: "shayon", meaning: { en: "anything", ur: "anything" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِّمَنِ", transliteration: "limani", meaning: { en: "For whom", ur: "For whom" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُلْكُ", transliteration: "l-mul'ku", meaning: { en: "(is) the Dominion", ur: "(is) the Dominion" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْيَوْمَ ۖ", transliteration: "l-yawma", meaning: { en: "this Day", ur: "this دن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلَّهِ", transliteration: "lillahi", meaning: { en: "For Allah", ur: "For اللہ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱلْوَٰحِدِ", transliteration: "l-wāḥidi", meaning: { en: "the One", ur: "the One" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْقَهَّارِ", transliteration: "l-qahāri", meaning: { en: "the Irresistible", ur: "the Irresistible" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  17: {
    ayahNumber: 17,
    text: "ٱلْيَوْمَ تُجْزَىٰ كُلُّ نَفْسٍۭ بِمَا كَسَبَتْ ۚ لَا ظُلْمَ ٱلْيَوْمَ ۚ إِنَّ ٱللَّهَ سَرِيعُ ٱلْحِسَابِ",
    words: [
      { arabic: "ٱلْيَوْمَ", transliteration: "al-yawma", meaning: { en: "This Day", ur: "This دن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُجْزَىٰ", transliteration: "tuj'zā", meaning: { en: "will be recompensed", ur: "will be recompensed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كُلُّ", transliteration: "kullu", meaning: { en: "every", ur: "ہر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَفْسٍۭ", transliteration: "nafsin", meaning: { en: "soul", ur: "روح" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "for what", ur: "for کیا" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "كَسَبَتْ ۚ", transliteration: "kasabat", meaning: { en: "it earned", ur: "it earned" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "No", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظُلْمَ", transliteration: "ẓul'ma", meaning: { en: "injustice", ur: "injustice" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْيَوْمَ ۚ", transliteration: "l-yawma", meaning: { en: "today", ur: "today" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَرِيعُ", transliteration: "sarīʿu", meaning: { en: "(is) Swift", ur: "(is) Swift" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْحِسَابِ", transliteration: "l-ḥisābi", meaning: { en: "(in) Account", ur: "(میں) Account" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  18: {
    ayahNumber: 18,
    text: "وَأَنذِرْهُمْ يَوْمَ ٱلْـَٔازِفَةِ إِذِ ٱلْقُلُوبُ لَدَى ٱلْحَنَاجِرِ كَـٰظِمِينَ ۚ مَا لِلظَّـٰلِمِينَ مِنْ حَمِيمٍۢ وَلَا شَفِيعٍۢ يُطَاعُ",
    words: [
      { arabic: "وَأَنذِرْهُمْ", transliteration: "wa-andhir'hum", meaning: { en: "And warn them", ur: "اور warn them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "(of the) Day", ur: "(of the) دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْـَٔازِفَةِ", transliteration: "l-āzifati", meaning: { en: "the Approaching", ur: "the Approaching" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِذِ", transliteration: "idhi", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْقُلُوبُ", transliteration: "l-qulūbu", meaning: { en: "the hearts", ur: "the hearts" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَدَى", transliteration: "ladā", meaning: { en: "(are) at", ur: "(are) at" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْحَنَاجِرِ", transliteration: "l-ḥanājiri", meaning: { en: "the throats", ur: "the throats" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَـٰظِمِينَ ۚ", transliteration: "kāẓimīna", meaning: { en: "choked", ur: "choked" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "لِلظَّـٰلِمِينَ", transliteration: "lilẓẓālimīna", meaning: { en: "for the wrongdoers", ur: "for the wrongdoers" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "حَمِيمٍۢ", transliteration: "ḥamīmin", meaning: { en: "intimate friend", ur: "intimate friend" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and no", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "شَفِيعٍۢ", transliteration: "shafīʿin", meaning: { en: "intercessor", ur: "intercessor" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُطَاعُ", transliteration: "yuṭāʿu", meaning: { en: "(who) is obeyed", ur: "(جو) is obeyed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  19: {
    ayahNumber: 19,
    text: "يَعْلَمُ خَآئِنَةَ ٱلْأَعْيُنِ وَمَا تُخْفِى ٱلصُّدُورُ",
    words: [
      { arabic: "يَعْلَمُ", transliteration: "yaʿlamu", meaning: { en: "He knows", ur: "وہ knows" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "خَآئِنَةَ", transliteration: "khāinata", meaning: { en: "(the) stealthy glance", ur: "(the) stealthy glance" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَعْيُنِ", transliteration: "l-aʿyuni", meaning: { en: "(the) stealthy glance", ur: "(the) stealthy glance" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what", ur: "اور کیا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تُخْفِى", transliteration: "tukh'fī", meaning: { en: "conceal", ur: "conceal" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلصُّدُورُ", transliteration: "l-ṣudūru", meaning: { en: "the breasts", ur: "the breasts" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  20: {
    ayahNumber: 20,
    text: "وَٱللَّهُ يَقْضِى بِٱلْحَقِّ ۖ وَٱلَّذِينَ يَدْعُونَ مِن دُونِهِۦ لَا يَقْضُونَ بِشَىْءٍ ۗ إِنَّ ٱللَّهَ هُوَ ٱلسَّمِيعُ ٱلْبَصِيرُ",
    words: [
      { arabic: "وَٱللَّهُ", transliteration: "wal-lahu", meaning: { en: "And Allah", ur: "اور اللہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَقْضِى", transliteration: "yaqḍī", meaning: { en: "judges", ur: "judges" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِٱلْحَقِّ ۖ", transliteration: "bil-ḥaqi", meaning: { en: "in truth", ur: "میں سچ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", meaning: { en: "while those (whom)", ur: "while those (whom)" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَدْعُونَ", transliteration: "yadʿūna", meaning: { en: "they invoke", ur: "وہ لوگ invoke" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "besides Him", ur: "besides Him" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِهِۦ", transliteration: "dūnihi", meaning: { en: "besides Him", ur: "besides Him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَقْضُونَ", transliteration: "yaqḍūna", meaning: { en: "they judge", ur: "وہ لوگ judge" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِشَىْءٍ ۗ", transliteration: "bishayin", meaning: { en: "with anything", ur: "ساتھ anything" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", meaning: { en: "Allah ", ur: "اللہ " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "ٱلسَّمِيعُ", transliteration: "l-samīʿu", meaning: { en: "(is) the All-Hearer", ur: "(is) the سب-Hearer" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "ٱلْبَصِيرُ", transliteration: "l-baṣīru", meaning: { en: "the All-Seer", ur: "the سب-Seer" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'نفی + فعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  21: {
    ayahNumber: 21,
    text: "۞ أَوَلَمْ يَسِيرُوا۟ فِى ٱلْأَرْضِ فَيَنظُرُوا۟ كَيْفَ كَانَ عَـٰقِبَةُ ٱلَّذِينَ كَانُوا۟ مِن قَبْلِهِمْ ۚ كَانُوا۟ هُمْ أَشَدَّ مِنْهُمْ قُوَّةًۭ وَءَاثَارًۭا فِى ٱلْأَرْضِ فَأَخَذَهُمُ ٱللَّهُ بِذُنُوبِهِمْ وَمَا كَانَ لَهُم مِّنَ ٱللَّهِ مِن وَاقٍۢ",
    words: [
      { arabic: "۞ أَوَلَمْ", transliteration: "awalam", meaning: { en: "Do not", ur: "Do نہیں" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَسِيرُوا۟", transliteration: "yasīrū", meaning: { en: "they travel", ur: "وہ لوگ travel" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "the earth", ur: "زمین" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَيَنظُرُوا۟", transliteration: "fayanẓurū", meaning: { en: "and see", ur: "اور دیکھنا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "كَيْفَ", transliteration: "kayfa", meaning: { en: "how", ur: "how" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "was", ur: "was" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَـٰقِبَةُ", transliteration: "ʿāqibatu", meaning: { en: "(the) end", ur: "(the) end" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "(of) those who", ur: "(of) جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "were", ur: "were" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before them", ur: "پہلے them" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلِهِمْ ۚ", transliteration: "qablihim", meaning: { en: "before them", ur: "پہلے them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "They were", ur: "وہ لوگ were" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "[they]", ur: "[وہ لوگ]" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "أَشَدَّ", transliteration: "ashadda", meaning: { en: "superior", ur: "superior" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْهُمْ", transliteration: "min'hum", meaning: { en: "to them", ur: "کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قُوَّةًۭ", transliteration: "quwwatan", meaning: { en: "(in) strength", ur: "(میں) strength" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَءَاثَارًۭا", transliteration: "waāthāran", meaning: { en: "and (in) impressions", ur: "اور (میں) impressions" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "the land", ur: "the land" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَخَذَهُمُ", transliteration: "fa-akhadhahumu", meaning: { en: "but Allah seized them", ur: "لیکن اللہ seized them" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "but Allah seized them", ur: "لیکن اللہ seized them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِذُنُوبِهِمْ", transliteration: "bidhunūbihim", meaning: { en: "for their sins", ur: "for their sins" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "was", ur: "was" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُم", transliteration: "lahum", meaning: { en: "for them", ur: "for them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "against", ur: "against" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "وَاقٍۢ", transliteration: "wāqin", meaning: { en: "protector", ur: "protector" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  22: {
    ayahNumber: 22,
    text: "ذَٰلِكَ بِأَنَّهُمْ كَانَت تَّأْتِيهِمْ رُسُلُهُم بِٱلْبَيِّنَـٰتِ فَكَفَرُوا۟ فَأَخَذَهُمُ ٱللَّهُ ۚ إِنَّهُۥ قَوِىٌّۭ شَدِيدُ ٱلْعِقَابِ",
    words: [
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "وہ" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "بِأَنَّهُمْ", transliteration: "bi-annahum", meaning: { en: "(was) because [they]", ur: "(was) because [وہ لوگ]" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "كَانَت", transliteration: "kānat", meaning: { en: "used to come to them", ur: "used کو come کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَّأْتِيهِمْ", transliteration: "tatīhim", meaning: { en: "used to come to them", ur: "used کو come کو them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رُسُلُهُم", transliteration: "rusuluhum", meaning: { en: "their Messengers", ur: "their Messengers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْبَيِّنَـٰتِ", transliteration: "bil-bayināti", meaning: { en: "with clear proofs", ur: "ساتھ clear proofs" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "فَكَفَرُوا۟", transliteration: "fakafarū", meaning: { en: "but they disbelieved", ur: "لیکن وہ لوگ disbelieved" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "فَأَخَذَهُمُ", transliteration: "fa-akhadhahumu", meaning: { en: "So Allah seized them", ur: "So اللہ seized them" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱللَّهُ ۚ", transliteration: "l-lahu", meaning: { en: "So Allah seized them", ur: "So اللہ seized them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", meaning: { en: "Indeed, He", ur: "بیشک, وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَوِىٌّۭ", transliteration: "qawiyyun", meaning: { en: "(is) All-Strong", ur: "(is) سب-Strong" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "شَدِيدُ", transliteration: "shadīdu", meaning: { en: "severe", ur: "severe" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعِقَابِ", transliteration: "l-ʿiqābi", meaning: { en: "(in) punishment", ur: "(میں) عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  23: {
    ayahNumber: 23,
    text: "وَلَقَدْ أَرْسَلْنَا مُوسَىٰ بِـَٔايَـٰتِنَا وَسُلْطَـٰنٍۢ مُّبِينٍ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور certainly" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", meaning: { en: "We sent", ur: "ہم sent" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مُوسَىٰ", transliteration: "mūsā", meaning: { en: "Musa", ur: "Musa" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", meaning: { en: "with Our Signs", ur: "ساتھ Our نشانیاں" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَسُلْطَـٰنٍۢ", transliteration: "wasul'ṭānin", meaning: { en: "and an authority", ur: "اور an authority" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مُّبِينٍ", transliteration: "mubīnin", meaning: { en: "clear", ur: "clear" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  24: {
    ayahNumber: 24,
    text: "إِلَىٰ فِرْعَوْنَ وَهَـٰمَـٰنَ وَقَـٰرُونَ فَقَالُوا۟ سَـٰحِرٌۭ كَذَّابٌۭ",
    words: [
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "To", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", meaning: { en: "Firaun", ur: "Firaun" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهَـٰمَـٰنَ", transliteration: "wahāmāna", meaning: { en: "Haman", ur: "Haman" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَقَـٰرُونَ", transliteration: "waqārūna", meaning: { en: "and Qarun", ur: "اور Qarun" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فَقَالُوا۟", transliteration: "faqālū", meaning: { en: "but they said", ur: "لیکن وہ لوگ کہا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "سَـٰحِرٌۭ", transliteration: "sāḥirun", meaning: { en: "A magician", ur: "A magician" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَذَّابٌۭ", transliteration: "kadhābun", meaning: { en: "a liar", ur: "a liar" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' }
      ],
    },
  },
  25: {
    ayahNumber: 25,
    text: "فَلَمَّا جَآءَهُم بِٱلْحَقِّ مِنْ عِندِنَا قَالُوا۟ ٱقْتُلُوٓا۟ أَبْنَآءَ ٱلَّذِينَ ءَامَنُوا۟ مَعَهُۥ وَٱسْتَحْيُوا۟ نِسَآءَهُمْ ۚ وَمَا كَيْدُ ٱلْكَـٰفِرِينَ إِلَّا فِى ضَلَـٰلٍۢ",
    words: [
      { arabic: "فَلَمَّا", transliteration: "falammā", meaning: { en: "Then when", ur: "پھر when" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "جَآءَهُم", transliteration: "jāahum", meaning: { en: "he brought to them", ur: "وہ brought کو them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", meaning: { en: "the truth", ur: "the سچ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عِندِنَا", transliteration: "ʿindinā", meaning: { en: "Us", ur: "Us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالُوا۟", transliteration: "qālū", meaning: { en: "they said", ur: "وہ لوگ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱقْتُلُوٓا۟", transliteration: "uq'tulū", meaning: { en: "Kill", ur: "Kill" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَبْنَآءَ", transliteration: "abnāa", meaning: { en: "(the) sons", ur: "(the) sons" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "(of) those who", ur: "(of) جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامَنُوا۟", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لانا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَعَهُۥ", transliteration: "maʿahu", meaning: { en: "with him", ur: "ساتھ him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱسْتَحْيُوا۟", transliteration: "wa-is'taḥyū", meaning: { en: "and let live", ur: "اور let live" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "نِسَآءَهُمْ ۚ", transliteration: "nisāahum", meaning: { en: "their women", ur: "their women" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كَيْدُ", transliteration: "kaydu", meaning: { en: "(is the) plot", ur: "(is the) plot" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", meaning: { en: "(of) the disbelievers", ur: "(of) the کافر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "لیکن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ضَلَـٰلٍۢ", transliteration: "ḍalālin", meaning: { en: "error", ur: "error" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
        { from: 18, to: 19, label: 'جار + مجرور' }
      ],
    },
  },
  26: {
    ayahNumber: 26,
    text: "وَقَالَ فِرْعَوْنُ ذَرُونِىٓ أَقْتُلْ مُوسَىٰ وَلْيَدْعُ رَبَّهُۥٓ ۖ إِنِّىٓ أَخَافُ أَن يُبَدِّلَ دِينَكُمْ أَوْ أَن يُظْهِرَ فِى ٱلْأَرْضِ ٱلْفَسَادَ",
    words: [
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "And said", ur: "اور کہا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِرْعَوْنُ", transliteration: "fir'ʿawnu", meaning: { en: "Firaun", ur: "Firaun" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَرُونِىٓ", transliteration: "dharūnī", meaning: { en: "Leave me", ur: "Leave me" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَقْتُلْ", transliteration: "aqtul", meaning: { en: "(so that) I kill", ur: "(so وہ) میں kill" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُوسَىٰ", transliteration: "mūsā", meaning: { en: "Musa", ur: "Musa" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلْيَدْعُ", transliteration: "walyadʿu", meaning: { en: "and let him call", ur: "اور let him call" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "رَبَّهُۥٓ ۖ", transliteration: "rabbahu", meaning: { en: "his Lord", ur: "his رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنِّىٓ", transliteration: "innī", meaning: { en: "Indeed, I", ur: "بیشک, میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَخَافُ", transliteration: "akhāfu", meaning: { en: "[I] fear", ur: "[میں] ڈرنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُبَدِّلَ", transliteration: "yubaddila", meaning: { en: "he will change", ur: "وہ will change" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "دِينَكُمْ", transliteration: "dīnakum", meaning: { en: "your religion", ur: "your religion" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُظْهِرَ", transliteration: "yuẓ'hira", meaning: { en: "he may cause to appear", ur: "وہ may cause کو appear" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "the land", ur: "the land" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْفَسَادَ", transliteration: "l-fasāda", meaning: { en: "the corruption", ur: "the corruption" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  27: {
    ayahNumber: 27,
    text: "وَقَالَ مُوسَىٰٓ إِنِّى عُذْتُ بِرَبِّى وَرَبِّكُم مِّن كُلِّ مُتَكَبِّرٍۢ لَّا يُؤْمِنُ بِيَوْمِ ٱلْحِسَابِ",
    words: [
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "And said", ur: "اور کہا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مُوسَىٰٓ", transliteration: "mūsā", meaning: { en: "Musa", ur: "Musa" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنِّى", transliteration: "innī", meaning: { en: "Indeed, I", ur: "بیشک, میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عُذْتُ", transliteration: "ʿudh'tu", meaning: { en: "[I] seek refuge", ur: "[میں] seek refuge" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِرَبِّى", transliteration: "birabbī", meaning: { en: "in my Lord", ur: "میں my رب" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَرَبِّكُم", transliteration: "warabbikum", meaning: { en: "and your Lord", ur: "اور your رب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every", ur: "ہر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُتَكَبِّرٍۢ", transliteration: "mutakabbirin", meaning: { en: "arrogant one", ur: "arrogant one" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُؤْمِنُ", transliteration: "yu'minu", meaning: { en: "who believes", ur: "جو believes" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِيَوْمِ", transliteration: "biyawmi", meaning: { en: "(in the) Day", ur: "(میں the) دن" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱلْحِسَابِ", transliteration: "l-ḥisābi", meaning: { en: "(of) the Account", ur: "(of) the Account" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  28: {
    ayahNumber: 28,
    text: "وَقَالَ رَجُلٌۭ مُّؤْمِنٌۭ مِّنْ ءَالِ فِرْعَوْنَ يَكْتُمُ إِيمَـٰنَهُۥٓ أَتَقْتُلُونَ رَجُلًا أَن يَقُولَ رَبِّىَ ٱللَّهُ وَقَدْ جَآءَكُم بِٱلْبَيِّنَـٰتِ مِن رَّبِّكُمْ ۖ وَإِن يَكُ كَـٰذِبًۭا فَعَلَيْهِ كَذِبُهُۥ ۖ وَإِن يَكُ صَادِقًۭا يُصِبْكُم بَعْضُ ٱلَّذِى يَعِدُكُمْ ۖ إِنَّ ٱللَّهَ لَا يَهْدِى مَنْ هُوَ مُسْرِفٌۭ كَذَّابٌۭ",
    words: [
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "And said", ur: "اور کہا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "رَجُلٌۭ", transliteration: "rajulun", meaning: { en: "a man", ur: "a man" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّؤْمِنٌۭ", transliteration: "mu'minun", meaning: { en: "believing", ur: "believing" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَالِ", transliteration: "āli", meaning: { en: "(the) family", ur: "(the) family" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", meaning: { en: "(of) Firaun", ur: "(of) Firaun" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَكْتُمُ", transliteration: "yaktumu", meaning: { en: "who conceal(ed)", ur: "جو conceal(ed)" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِيمَـٰنَهُۥٓ", transliteration: "īmānahu", meaning: { en: "his faith", ur: "his faith" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَتَقْتُلُونَ", transliteration: "ataqtulūna", meaning: { en: "Will you kill", ur: "Will تم kill" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَجُلًا", transliteration: "rajulan", meaning: { en: "a man", ur: "a man" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "because", ur: "because" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَقُولَ", transliteration: "yaqūla", meaning: { en: "he says", ur: "وہ کہتا ہے" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبِّىَ", transliteration: "rabbiya", meaning: { en: "My Lord", ur: "My رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "(is) Allah", ur: "(is) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَقَدْ", transliteration: "waqad", meaning: { en: "and indeed", ur: "اور بیشک" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "جَآءَكُم", transliteration: "jāakum", meaning: { en: "he has brought you", ur: "وہ has brought تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِٱلْبَيِّنَـٰتِ", transliteration: "bil-bayināti", meaning: { en: "clear proofs", ur: "clear proofs" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَّبِّكُمْ ۖ", transliteration: "rabbikum", meaning: { en: "your Lord", ur: "your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "And if", ur: "اور if" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَكُ", transliteration: "yaku", meaning: { en: "he is", ur: "وہ is" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَـٰذِبًۭا", transliteration: "kādhiban", meaning: { en: "a liar", ur: "a liar" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَعَلَيْهِ", transliteration: "faʿalayhi", meaning: { en: "then upon him", ur: "پھر پر him" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "كَذِبُهُۥ ۖ", transliteration: "kadhibuhu", meaning: { en: "(is) his lie", ur: "(is) his lie" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "and if", ur: "اور if" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَكُ", transliteration: "yaku", meaning: { en: "he is", ur: "وہ is" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "صَادِقًۭا", transliteration: "ṣādiqan", meaning: { en: "truthful", ur: "truthful" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "يُصِبْكُم", transliteration: "yuṣib'kum", meaning: { en: "(there) will strike you", ur: "(there) will strike تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَعْضُ", transliteration: "baʿḍu", meaning: { en: "some (of)", ur: "some (of)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "(that) which", ur: "(وہ) جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَعِدُكُمْ ۖ", transliteration: "yaʿidukum", meaning: { en: "he threatens you", ur: "وہ threatens تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(does) not", ur: "(does) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَهْدِى", transliteration: "yahdī", meaning: { en: "guide", ur: "guide" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "(one) who", ur: "(one) جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "[he]", ur: "[وہ]" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "مُسْرِفٌۭ", transliteration: "mus'rifun", meaning: { en: "(is) a transgressor", ur: "(is) a transgressor" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَذَّابٌۭ", transliteration: "kadhābun", meaning: { en: "a liar", ur: "a liar" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 28, to: 29, label: 'فعل + فاعل' },
        { from: 32, to: 33, label: 'فعل + فاعل' },
        { from: 34, to: 35, label: 'نفی + فعل' },
        { from: 35, to: 36, label: 'فعل + فاعل' }
      ],
    },
  },
  29: {
    ayahNumber: 29,
    text: "يَـٰقَوْمِ لَكُمُ ٱلْمُلْكُ ٱلْيَوْمَ ظَـٰهِرِينَ فِى ٱلْأَرْضِ فَمَن يَنصُرُنَا مِنۢ بَأْسِ ٱللَّهِ إِن جَآءَنَا ۚ قَالَ فِرْعَوْنُ مَآ أُرِيكُمْ إِلَّا مَآ أَرَىٰ وَمَآ أَهْدِيكُمْ إِلَّا سَبِيلَ ٱلرَّشَادِ",
    words: [
      { arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", meaning: { en: "O my people", ur: "اے my لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَكُمُ", transliteration: "lakumu", meaning: { en: "For you", ur: "For تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُلْكُ", transliteration: "l-mul'ku", meaning: { en: "(is) the kingdom", ur: "(is) the kingdom" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْيَوْمَ", transliteration: "l-yawma", meaning: { en: "today", ur: "today" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظَـٰهِرِينَ", transliteration: "ẓāhirīna", meaning: { en: "dominant", ur: "dominant" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "the land", ur: "the land" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَمَن", transliteration: "faman", meaning: { en: "but who", ur: "لیکن جو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "يَنصُرُنَا", transliteration: "yanṣurunā", meaning: { en: "will help us", ur: "will help us" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنۢ", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَأْسِ", transliteration: "basi", meaning: { en: "(the) punishment", ur: "(the) عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "(of) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "if" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَآءَنَا ۚ", transliteration: "jāanā", meaning: { en: "it came to us", ur: "it came کو us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "Said", ur: "کہا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِرْعَوْنُ", transliteration: "fir'ʿawnu", meaning: { en: "Firaun", ur: "Firaun" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَآ", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُرِيكُمْ", transliteration: "urīkum", meaning: { en: "I show you", ur: "میں show تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَآ", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَرَىٰ", transliteration: "arā", meaning: { en: "I see", ur: "میں دیکھنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَآ", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَهْدِيكُمْ", transliteration: "ahdīkum", meaning: { en: "I guide you", ur: "میں guide تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَبِيلَ", transliteration: "sabīla", meaning: { en: "(to the) path", ur: "(کو the) راستہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلرَّشَادِ", transliteration: "l-rashādi", meaning: { en: "the right", ur: "the right" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 25, to: 26, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  30: {
    ayahNumber: 30,
    text: "وَقَالَ ٱلَّذِىٓ ءَامَنَ يَـٰقَوْمِ إِنِّىٓ أَخَافُ عَلَيْكُم مِّثْلَ يَوْمِ ٱلْأَحْزَابِ",
    words: [
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "And said", ur: "اور کہا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلَّذِىٓ", transliteration: "alladhī", meaning: { en: "(he) who", ur: "(وہ) جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامَنَ", transliteration: "āmana", meaning: { en: "believed", ur: "ایمان لائے" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", meaning: { en: "O my people", ur: "اے my لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنِّىٓ", transliteration: "innī", meaning: { en: "Indeed I", ur: "بیشک میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَخَافُ", transliteration: "akhāfu", meaning: { en: "[I] fear", ur: "[میں] ڈرنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْكُم", transliteration: "ʿalaykum", meaning: { en: "for you", ur: "for تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّثْلَ", transliteration: "mith'la", meaning: { en: "like", ur: "like" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَوْمِ", transliteration: "yawmi", meaning: { en: "(the) day", ur: "(the) دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْأَحْزَابِ", transliteration: "l-aḥzābi", meaning: { en: "(of) the companies", ur: "(of) the companies" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  31: {
    ayahNumber: 31,
    text: "مِثْلَ دَأْبِ قَوْمِ نُوحٍۢ وَعَادٍۢ وَثَمُودَ وَٱلَّذِينَ مِنۢ بَعْدِهِمْ ۚ وَمَا ٱللَّهُ يُرِيدُ ظُلْمًۭا لِّلْعِبَادِ",
    words: [
      { arabic: "مِثْلَ", transliteration: "mith'la", meaning: { en: "Like", ur: "Like" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "دَأْبِ", transliteration: "dabi", meaning: { en: "(the) plight", ur: "(the) plight" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَوْمِ", transliteration: "qawmi", meaning: { en: "(of the) people", ur: "(of the) لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نُوحٍۢ", transliteration: "nūḥin", meaning: { en: "(of) Nuh", ur: "(of) Nuh" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعَادٍۢ", transliteration: "waʿādin", meaning: { en: "and Aad", ur: "اور Aad" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَثَمُودَ", transliteration: "wathamūda", meaning: { en: "and Thamud", ur: "اور Thamud" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", meaning: { en: "and those", ur: "اور those" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِنۢ", transliteration: "min", meaning: { en: "after them", ur: "بعد them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْدِهِمْ ۚ", transliteration: "baʿdihim", meaning: { en: "after them", ur: "بعد them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And Allah (does) not", ur: "اور اللہ (does) نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "And Allah (does) not", ur: "اور اللہ (does) نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُرِيدُ", transliteration: "yurīdu", meaning: { en: "want", ur: "want" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ظُلْمًۭا", transliteration: "ẓul'man", meaning: { en: "injustice", ur: "injustice" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّلْعِبَادِ", transliteration: "lil'ʿibādi", meaning: { en: "for (His) slaves", ur: "for (His) slaves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  32: {
    ayahNumber: 32,
    text: "وَيَـٰقَوْمِ إِنِّىٓ أَخَافُ عَلَيْكُمْ يَوْمَ ٱلتَّنَادِ",
    words: [
      { arabic: "وَيَـٰقَوْمِ", transliteration: "wayāqawmi", meaning: { en: "And O my people", ur: "اور اے my لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "إِنِّىٓ", transliteration: "innī", meaning: { en: "Indeed, I", ur: "بیشک, میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَخَافُ", transliteration: "akhāfu", meaning: { en: "[I] fear", ur: "[میں] ڈرنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", meaning: { en: "for you", ur: "for تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "(the) Day", ur: "(the) دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلتَّنَادِ", transliteration: "l-tanādi", meaning: { en: "(of) Calling", ur: "(of) Calling" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  33: {
    ayahNumber: 33,
    text: "يَوْمَ تُوَلُّونَ مُدْبِرِينَ مَا لَكُم مِّنَ ٱللَّهِ مِنْ عَاصِمٍۢ ۗ وَمَن يُضْلِلِ ٱللَّهُ فَمَا لَهُۥ مِنْ هَادٍۢ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "A Day", ur: "A دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تُوَلُّونَ", transliteration: "tuwallūna", meaning: { en: "you will turn back", ur: "تم will turn back" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مُدْبِرِينَ", transliteration: "mud'birīna", meaning: { en: "fleeing", ur: "fleeing" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "for تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَاصِمٍۢ ۗ", transliteration: "ʿāṣimin", meaning: { en: "protector", ur: "protector" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَن", transliteration: "waman", meaning: { en: "And whoever", ur: "اور whoever" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يُضْلِلِ", transliteration: "yuḍ'lili", meaning: { en: "Allah lets go astray", ur: "اللہ lets go astray" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "Allah lets go astray", ur: "اللہ lets go astray" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "then not", ur: "پھر نہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "for him", ur: "for him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "هَادٍۢ", transliteration: "hādin", meaning: { en: "guide", ur: "guide" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'جار + مجرور' }
      ],
    },
  },
  34: {
    ayahNumber: 34,
    text: "وَلَقَدْ جَآءَكُمْ يُوسُفُ مِن قَبْلُ بِٱلْبَيِّنَـٰتِ فَمَا زِلْتُمْ فِى شَكٍّۢ مِّمَّا جَآءَكُم بِهِۦ ۖ حَتَّىٰٓ إِذَا هَلَكَ قُلْتُمْ لَن يَبْعَثَ ٱللَّهُ مِنۢ بَعْدِهِۦ رَسُولًۭا ۚ كَذَٰلِكَ يُضِلُّ ٱللَّهُ مَنْ هُوَ مُسْرِفٌۭ مُّرْتَابٌ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And indeed", ur: "اور بیشک" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "جَآءَكُمْ", transliteration: "jāakum", meaning: { en: "came to you", ur: "came کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُوسُفُ", transliteration: "yūsufu", meaning: { en: "Yusuf", ur: "Yusuf" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before", ur: "پہلے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلُ", transliteration: "qablu", meaning: { en: "before", ur: "پہلے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْبَيِّنَـٰتِ", transliteration: "bil-bayināti", meaning: { en: "with clear proofs", ur: "ساتھ clear proofs" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "but not", ur: "لیکن نہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "زِلْتُمْ", transliteration: "zil'tum", meaning: { en: "you ceased", ur: "تم ceased" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شَكٍّۢ", transliteration: "shakkin", meaning: { en: "doubt", ur: "doubt" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", meaning: { en: "about what", ur: "about کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَآءَكُم", transliteration: "jāakum", meaning: { en: "he brought to you", ur: "وہ brought کو تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ ۖ", transliteration: "bihi", meaning: { en: "[with it]", ur: "[ساتھ it]" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "حَتَّىٰٓ", transliteration: "ḥattā", meaning: { en: "until", ur: "until" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَلَكَ", transliteration: "halaka", meaning: { en: "he died", ur: "وہ died" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "قُلْتُمْ", transliteration: "qul'tum", meaning: { en: "you said", ur: "تم کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَن", transliteration: "lan", meaning: { en: "Never", ur: "Never" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَبْعَثَ", transliteration: "yabʿatha", meaning: { en: "will Allah raise", ur: "will اللہ raise" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "will Allah raise", ur: "will اللہ raise" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنۢ", transliteration: "min", meaning: { en: "after him", ur: "بعد him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْدِهِۦ", transliteration: "baʿdihi", meaning: { en: "after him", ur: "بعد him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَسُولًۭا ۚ", transliteration: "rasūlan", meaning: { en: "a Messenger", ur: "a رسول" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "Thus", ur: "Thus" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُضِلُّ", transliteration: "yuḍillu", meaning: { en: "Allah lets go astray", ur: "اللہ lets go astray" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "Allah lets go astray", ur: "اللہ lets go astray" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "who", ur: "جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "[he]", ur: "[وہ]" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "مُسْرِفٌۭ", transliteration: "mus'rifun", meaning: { en: "(is) a transgressor", ur: "(is) a transgressor" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّرْتَابٌ", transliteration: "mur'tābun", meaning: { en: "a doubter", ur: "a doubter" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 25, to: 26, label: 'فعل + فاعل' }
      ],
    },
  },
  35: {
    ayahNumber: 35,
    text: "ٱلَّذِينَ يُجَـٰدِلُونَ فِىٓ ءَايَـٰتِ ٱللَّهِ بِغَيْرِ سُلْطَـٰنٍ أَتَىٰهُمْ ۖ كَبُرَ مَقْتًا عِندَ ٱللَّهِ وَعِندَ ٱلَّذِينَ ءَامَنُوا۟ ۚ كَذَٰلِكَ يَطْبَعُ ٱللَّهُ عَلَىٰ كُلِّ قَلْبِ مُتَكَبِّرٍۢ جَبَّارٍۢ",
    words: [
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "Those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُجَـٰدِلُونَ", transliteration: "yujādilūna", meaning: { en: "dispute", ur: "dispute" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِىٓ", transliteration: "fī", meaning: { en: "concerning", ur: "concerning" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَايَـٰتِ", transliteration: "āyāti", meaning: { en: "(the) Signs", ur: "(the) نشانیاں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "(of) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِغَيْرِ", transliteration: "bighayri", meaning: { en: "without", ur: "without" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "سُلْطَـٰنٍ", transliteration: "sul'ṭānin", meaning: { en: "any authority", ur: "any authority" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَتَىٰهُمْ ۖ", transliteration: "atāhum", meaning: { en: "(having) come to them", ur: "(having) come کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَبُرَ", transliteration: "kabura", meaning: { en: "(it) is greatly", ur: "(it) is greatly" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "مَقْتًا", transliteration: "maqtan", meaning: { en: "hateful", ur: "hateful" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "near Allah", ur: "near اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "near Allah", ur: "near اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعِندَ", transliteration: "waʿinda", meaning: { en: "and near", ur: "اور near" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those", ur: "those" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامَنُوا۟ ۚ", transliteration: "āmanū", meaning: { en: "who believe", ur: "جو ایمان لانا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "Thus", ur: "Thus" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَطْبَعُ", transliteration: "yaṭbaʿu", meaning: { en: "Allah sets a seal", ur: "اللہ sets a seal" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "Allah sets a seal", ur: "اللہ sets a seal" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "اوپر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every", ur: "ہر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَلْبِ", transliteration: "qalbi", meaning: { en: "heart", ur: "دل" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُتَكَبِّرٍۢ", transliteration: "mutakabbirin", meaning: { en: "(of) an arrogant", ur: "(of) an arrogant" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَبَّارٍۢ", transliteration: "jabbārin", meaning: { en: "tyrant", ur: "tyrant" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصوف + صفت' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  36: {
    ayahNumber: 36,
    text: "وَقَالَ فِرْعَوْنُ يَـٰهَـٰمَـٰنُ ٱبْنِ لِى صَرْحًۭا لَّعَلِّىٓ أَبْلُغُ ٱلْأَسْبَـٰبَ",
    words: [
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "And said", ur: "اور کہا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِرْعَوْنُ", transliteration: "fir'ʿawnu", meaning: { en: "Firaun", ur: "Firaun" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَـٰهَـٰمَـٰنُ", transliteration: "yāhāmānu", meaning: { en: "O Haman", ur: "اے Haman" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱبْنِ", transliteration: "ib'ni", meaning: { en: "Construct", ur: "Construct" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِى", transliteration: "lī", meaning: { en: "for me", ur: "for me" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "صَرْحًۭا", transliteration: "ṣarḥan", meaning: { en: "a tower", ur: "a tower" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّعَلِّىٓ", transliteration: "laʿallī", meaning: { en: "that I may", ur: "وہ میں may" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَبْلُغُ", transliteration: "ablughu", meaning: { en: "reach", ur: "reach" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَسْبَـٰبَ", transliteration: "l-asbāba", meaning: { en: "the ways", ur: "the ways" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  37: {
    ayahNumber: 37,
    text: "أَسْبَـٰبَ ٱلسَّمَـٰوَٰتِ فَأَطَّلِعَ إِلَىٰٓ إِلَـٰهِ مُوسَىٰ وَإِنِّى لَأَظُنُّهُۥ كَـٰذِبًۭا ۚ وَكَذَٰلِكَ زُيِّنَ لِفِرْعَوْنَ سُوٓءُ عَمَلِهِۦ وَصُدَّ عَنِ ٱلسَّبِيلِ ۚ وَمَا كَيْدُ فِرْعَوْنَ إِلَّا فِى تَبَابٍۢ",
    words: [
      { arabic: "أَسْبَـٰبَ", transliteration: "asbāba", meaning: { en: "(The) ways", ur: "(The) ways" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", meaning: { en: "(to) the heavens", ur: "(کو) the آسمان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَطَّلِعَ", transliteration: "fa-aṭṭaliʿa", meaning: { en: "so I may look", ur: "so میں may look" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "إِلَىٰٓ", transliteration: "ilā", meaning: { en: "at", ur: "at" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَـٰهِ", transliteration: "ilāhi", meaning: { en: "(the) God", ur: "(the) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُوسَىٰ", transliteration: "mūsā", meaning: { en: "(of) Musa", ur: "(of) Musa" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِنِّى", transliteration: "wa-innī", meaning: { en: "and indeed, I", ur: "اور بیشک, میں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَأَظُنُّهُۥ", transliteration: "la-aẓunnuhu", meaning: { en: "[I] surely think him", ur: "[میں] یقیناً think him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَـٰذِبًۭا ۚ", transliteration: "kādhiban", meaning: { en: "(to be) a liar", ur: "(کو be) a liar" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", meaning: { en: "And thus", ur: "اور thus" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "زُيِّنَ", transliteration: "zuyyina", meaning: { en: "was made fair-seeming", ur: "was made fair-seeming" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِفِرْعَوْنَ", transliteration: "lifir'ʿawna", meaning: { en: "to Firaun", ur: "کو Firaun" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "سُوٓءُ", transliteration: "sūu", meaning: { en: "(the) evil", ur: "(the) برا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَمَلِهِۦ", transliteration: "ʿamalihi", meaning: { en: "(of) his deed", ur: "(of) his deed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَصُدَّ", transliteration: "waṣudda", meaning: { en: "and he was averted", ur: "اور وہ was averted" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلسَّبِيلِ ۚ", transliteration: "l-sabīli", meaning: { en: "the way", ur: "the راستہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كَيْدُ", transliteration: "kaydu", meaning: { en: "(was the) plot", ur: "(was the) plot" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", meaning: { en: "(of) Firaun", ur: "(of) Firaun" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "تَبَابٍۢ", transliteration: "tabābin", meaning: { en: "ruin", ur: "ruin" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'جار + مجرور' }
      ],
    },
  },
  38: {
    ayahNumber: 38,
    text: "وَقَالَ ٱلَّذِىٓ ءَامَنَ يَـٰقَوْمِ ٱتَّبِعُونِ أَهْدِكُمْ سَبِيلَ ٱلرَّشَادِ",
    words: [
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "And said", ur: "اور کہا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلَّذِىٓ", transliteration: "alladhī", meaning: { en: "the one who", ur: "the one جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامَنَ", transliteration: "āmana", meaning: { en: "believed", ur: "ایمان لائے" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", meaning: { en: "O my people", ur: "اے my لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱتَّبِعُونِ", transliteration: "ittabiʿūni", meaning: { en: "Follow me", ur: "Follow me" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَهْدِكُمْ", transliteration: "ahdikum", meaning: { en: "I will guide you", ur: "میں will guide تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "سَبِيلَ", transliteration: "sabīla", meaning: { en: "(to the) way", ur: "(کو the) راستہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلرَّشَادِ", transliteration: "l-rashādi", meaning: { en: "the right", ur: "the right" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  39: {
    ayahNumber: 39,
    text: "يَـٰقَوْمِ إِنَّمَا هَـٰذِهِ ٱلْحَيَوٰةُ ٱلدُّنْيَا مَتَـٰعٌۭ وَإِنَّ ٱلْـَٔاخِرَةَ هِىَ دَارُ ٱلْقَرَارِ",
    words: [
      { arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", meaning: { en: "O my people", ur: "اے my لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Only", ur: "صرف" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَـٰذِهِ", transliteration: "hādhihi", meaning: { en: "this", ur: "this" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْحَيَوٰةُ", transliteration: "l-ḥayatu", meaning: { en: "the life", ur: "the زندگی" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", meaning: { en: "(of) the world", ur: "(of) the دنیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَتَـٰعٌۭ", transliteration: "matāʿun", meaning: { en: "(is) enjoyment", ur: "(is) enjoyment" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِنَّ", transliteration: "wa-inna", meaning: { en: "and indeed", ur: "اور بیشک" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْـَٔاخِرَةَ", transliteration: "l-ākhirata", meaning: { en: "the Hereafter ", ur: "the آخرت " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هِىَ", transliteration: "hiya", meaning: { en: "it", ur: "it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "دَارُ", transliteration: "dāru", meaning: { en: "(is the) home", ur: "(is the) home" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْقَرَارِ", transliteration: "l-qarāri", meaning: { en: "(of) settlement", ur: "(of) settlement" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  40: {
    ayahNumber: 40,
    text: "مَنْ عَمِلَ سَيِّئَةًۭ فَلَا يُجْزَىٰٓ إِلَّا مِثْلَهَا ۖ وَمَنْ عَمِلَ صَـٰلِحًۭا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌۭ فَأُو۟لَـٰٓئِكَ يَدْخُلُونَ ٱلْجَنَّةَ يُرْزَقُونَ فِيهَا بِغَيْرِ حِسَابٍۢ",
    words: [
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "Whoever", ur: "Whoever" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَمِلَ", transliteration: "ʿamila", meaning: { en: "does", ur: "does" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَيِّئَةًۭ", transliteration: "sayyi-atan", meaning: { en: "an evil", ur: "an برا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَلَا", transliteration: "falā", meaning: { en: "then not", ur: "پھر نہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "يُجْزَىٰٓ", transliteration: "yuj'zā", meaning: { en: "he will be recompensed", ur: "وہ will be recompensed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "لیکن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِثْلَهَا ۖ", transliteration: "mith'lahā", meaning: { en: "(the) like thereof", ur: "(the) like اس سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَنْ", transliteration: "waman", meaning: { en: "and whoever", ur: "اور whoever" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَمِلَ", transliteration: "ʿamila", meaning: { en: "does", ur: "does" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "صَـٰلِحًۭا", transliteration: "ṣāliḥan", meaning: { en: "righteous (deeds)", ur: "نیک (deeds)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَكَرٍ", transliteration: "dhakarin", meaning: { en: "male", ur: "male" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "أُنثَىٰ", transliteration: "unthā", meaning: { en: "female", ur: "female" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "while he", ur: "while وہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مُؤْمِنٌۭ", transliteration: "mu'minun", meaning: { en: "(is) a believer", ur: "(is) a believer" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأُو۟لَـٰٓئِكَ", transliteration: "fa-ulāika", meaning: { en: "then those", ur: "پھر those" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "يَدْخُلُونَ", transliteration: "yadkhulūna", meaning: { en: "will enter", ur: "will enter" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْجَنَّةَ", transliteration: "l-janata", meaning: { en: "Paradise", ur: "جنت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُرْزَقُونَ", transliteration: "yur'zaqūna", meaning: { en: "they will be given provision", ur: "وہ لوگ will be given provision" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "in it", ur: "میں it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِغَيْرِ", transliteration: "bighayri", meaning: { en: "without", ur: "without" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "حِسَابٍۢ", transliteration: "ḥisābin", meaning: { en: "account", ur: "account" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'جار + مجرور' }
      ],
    },
  },
  41: {
    ayahNumber: 41,
    text: "۞ وَيَـٰقَوْمِ مَا لِىٓ أَدْعُوكُمْ إِلَى ٱلنَّجَوٰةِ وَتَدْعُونَنِىٓ إِلَى ٱلنَّارِ",
    words: [
      { arabic: "۞ وَيَـٰقَوْمِ", transliteration: "wayāqawmi", meaning: { en: "And O my people", ur: "اور اے my لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "What (is)", ur: "کیا (is)" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "لِىٓ", transliteration: "lī", meaning: { en: "for me", ur: "for me" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "أَدْعُوكُمْ", transliteration: "adʿūkum", meaning: { en: "(that) I call you", ur: "(وہ) میں call تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلنَّجَوٰةِ", transliteration: "l-najati", meaning: { en: "the salvation", ur: "the salvation" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَتَدْعُونَنِىٓ", transliteration: "watadʿūnanī", meaning: { en: "while you call me", ur: "while تم call me" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلنَّارِ", transliteration: "l-nāri", meaning: { en: "the Fire", ur: "the آگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  42: {
    ayahNumber: 42,
    text: "تَدْعُونَنِى لِأَكْفُرَ بِٱللَّهِ وَأُشْرِكَ بِهِۦ مَا لَيْسَ لِى بِهِۦ عِلْمٌۭ وَأَنَا۠ أَدْعُوكُمْ إِلَى ٱلْعَزِيزِ ٱلْغَفَّـٰرِ",
    words: [
      { arabic: "تَدْعُونَنِى", transliteration: "tadʿūnanī", meaning: { en: "You call me", ur: "تم call me" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِأَكْفُرَ", transliteration: "li-akfura", meaning: { en: "that I disbelieve", ur: "وہ میں disbelieve" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "بِٱللَّهِ", transliteration: "bil-lahi", meaning: { en: "in Allah", ur: "میں اللہ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَأُشْرِكَ", transliteration: "wa-ush'rika", meaning: { en: "and (to) associate", ur: "اور (کو) associate" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "with Him", ur: "ساتھ Him" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "لَيْسَ", transliteration: "laysa", meaning: { en: "not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِى", transliteration: "lī", meaning: { en: "for me", ur: "for me" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "of it", ur: "of it" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "عِلْمٌۭ", transliteration: "ʿil'mun", meaning: { en: "any knowledge", ur: "any knowledge" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَنَا۠", transliteration: "wa-anā", meaning: { en: "and I", ur: "اور میں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَدْعُوكُمْ", transliteration: "adʿūkum", meaning: { en: "call you", ur: "call تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْعَزِيزِ", transliteration: "l-ʿazīzi", meaning: { en: "the All-Mighty", ur: "the سب-Mighty" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "ٱلْغَفَّـٰرِ", transliteration: "l-ghafāri", meaning: { en: "the Oft-Forgiving", ur: "the Oft-Forgiving" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
  43: {
    ayahNumber: 43,
    text: "لَا جَرَمَ أَنَّمَا تَدْعُونَنِىٓ إِلَيْهِ لَيْسَ لَهُۥ دَعْوَةٌۭ فِى ٱلدُّنْيَا وَلَا فِى ٱلْـَٔاخِرَةِ وَأَنَّ مَرَدَّنَآ إِلَى ٱللَّهِ وَأَنَّ ٱلْمُسْرِفِينَ هُمْ أَصْحَـٰبُ ٱلنَّارِ",
    words: [
      { arabic: "لَا", transliteration: "lā", meaning: { en: "No", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَرَمَ", transliteration: "jarama", meaning: { en: "doubt", ur: "doubt" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَّمَا", transliteration: "annamā", meaning: { en: "that what", ur: "وہ کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَدْعُونَنِىٓ", transliteration: "tadʿūnanī", meaning: { en: "you call me", ur: "تم call me" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَيْهِ", transliteration: "ilayhi", meaning: { en: "to it", ur: "کو it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَيْسَ", transliteration: "laysa", meaning: { en: "not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "for it", ur: "for it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "دَعْوَةٌۭ", transliteration: "daʿwatun", meaning: { en: "a claim", ur: "a claim" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", meaning: { en: "the world", ur: "the دنیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْـَٔاخِرَةِ", transliteration: "l-ākhirati", meaning: { en: "the Hereafter", ur: "the آخرت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَنَّ", transliteration: "wa-anna", meaning: { en: "and that", ur: "اور وہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَرَدَّنَآ", transliteration: "maraddanā", meaning: { en: "our return", ur: "our return" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "(is) to", ur: "(is) کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَنَّ", transliteration: "wa-anna", meaning: { en: "and that", ur: "اور وہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْمُسْرِفِينَ", transliteration: "l-mus'rifīna", meaning: { en: "the transgressors ", ur: "the transgressors " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ لوگ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "أَصْحَـٰبُ", transliteration: "aṣḥābu", meaning: { en: "(will be the) companions", ur: "(will be the) companions" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلنَّارِ", transliteration: "l-nāri", meaning: { en: "(of) the Fire", ur: "(of) the آگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'فعل + فاعل' }
      ],
    },
  },
  44: {
    ayahNumber: 44,
    text: "فَسَتَذْكُرُونَ مَآ أَقُولُ لَكُمْ ۚ وَأُفَوِّضُ أَمْرِىٓ إِلَى ٱللَّهِ ۚ إِنَّ ٱللَّهَ بَصِيرٌۢ بِٱلْعِبَادِ",
    words: [
      { arabic: "فَسَتَذْكُرُونَ", transliteration: "fasatadhkurūna", meaning: { en: "And you will remember", ur: "اور تم will remember" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "مَآ", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَقُولُ", transliteration: "aqūlu", meaning: { en: "I say", ur: "میں کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَكُمْ ۚ", transliteration: "lakum", meaning: { en: "to you", ur: "کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأُفَوِّضُ", transliteration: "wa-ufawwiḍu", meaning: { en: "and I entrust", ur: "اور میں entrust" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَمْرِىٓ", transliteration: "amrī", meaning: { en: "my affair", ur: "my affair" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَصِيرٌۢ", transliteration: "baṣīrun", meaning: { en: "(is) All-Seer", ur: "(is) سب-Seer" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "بِٱلْعِبَادِ", transliteration: "bil-ʿibādi", meaning: { en: "of (His) slaves", ur: "of (His) slaves" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  45: {
    ayahNumber: 45,
    text: "فَوَقَىٰهُ ٱللَّهُ سَيِّـَٔاتِ مَا مَكَرُوا۟ ۖ وَحَاقَ بِـَٔالِ فِرْعَوْنَ سُوٓءُ ٱلْعَذَابِ",
    words: [
      { arabic: "فَوَقَىٰهُ", transliteration: "fawaqāhu", meaning: { en: "So Allah protected him", ur: "So اللہ protected him" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "So Allah protected him", ur: "So اللہ protected him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَيِّـَٔاتِ", transliteration: "sayyiāti", meaning: { en: "(from the) evils", ur: "(سے the) evils" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "that", ur: "وہ" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "مَكَرُوا۟ ۖ", transliteration: "makarū", meaning: { en: "they plotted", ur: "وہ لوگ plotted" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَحَاقَ", transliteration: "waḥāqa", meaning: { en: "and enveloped", ur: "اور enveloped" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِـَٔالِ", transliteration: "biāli", meaning: { en: "(the) people", ur: "(the) لوگ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", meaning: { en: "(of) Firaun", ur: "(of) Firaun" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سُوٓءُ", transliteration: "sūu", meaning: { en: "(the) worst", ur: "(the) worst" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَذَابِ", transliteration: "l-ʿadhābi", meaning: { en: "punishment", ur: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  46: {
    ayahNumber: 46,
    text: "ٱلنَّارُ يُعْرَضُونَ عَلَيْهَا غُدُوًّۭا وَعَشِيًّۭا ۖ وَيَوْمَ تَقُومُ ٱلسَّاعَةُ أَدْخِلُوٓا۟ ءَالَ فِرْعَوْنَ أَشَدَّ ٱلْعَذَابِ",
    words: [
      { arabic: "ٱلنَّارُ", transliteration: "al-nāru", meaning: { en: "The Fire", ur: "The آگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُعْرَضُونَ", transliteration: "yuʿ'raḍūna", meaning: { en: "they are exposed", ur: "وہ لوگ are exposed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْهَا", transliteration: "ʿalayhā", meaning: { en: "to it", ur: "کو it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "غُدُوًّۭا", transliteration: "ghuduwwan", meaning: { en: "morning", ur: "morning" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَعَشِيًّۭا ۖ", transliteration: "waʿashiyyan", meaning: { en: "and evening", ur: "اور evening" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَيَوْمَ", transliteration: "wayawma", meaning: { en: "And (the) Day", ur: "اور (the) دن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَقُومُ", transliteration: "taqūmu", meaning: { en: "(will be) established", ur: "(will be) established" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلسَّاعَةُ", transliteration: "l-sāʿatu", meaning: { en: "the Hour", ur: "the Hour" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَدْخِلُوٓا۟", transliteration: "adkhilū", meaning: { en: "Cause to enter", ur: "Cause کو enter" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَالَ", transliteration: "āla", meaning: { en: "(the) people", ur: "(the) لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", meaning: { en: "(of) Firaun", ur: "(of) Firaun" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَشَدَّ", transliteration: "ashadda", meaning: { en: "(in the) severest", ur: "(میں the) severest" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَذَابِ", transliteration: "l-ʿadhābi", meaning: { en: "punishment", ur: "عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  47: {
    ayahNumber: 47,
    text: "وَإِذْ يَتَحَآجُّونَ فِى ٱلنَّارِ فَيَقُولُ ٱلضُّعَفَـٰٓؤُا۟ لِلَّذِينَ ٱسْتَكْبَرُوٓا۟ إِنَّا كُنَّا لَكُمْ تَبَعًۭا فَهَلْ أَنتُم مُّغْنُونَ عَنَّا نَصِيبًۭا مِّنَ ٱلنَّارِ",
    words: [
      { arabic: "وَإِذْ", transliteration: "wa-idh", meaning: { en: "And when", ur: "اور when" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَتَحَآجُّونَ", transliteration: "yataḥājjūna", meaning: { en: "they will dispute", ur: "وہ لوگ will dispute" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلنَّارِ", transliteration: "l-nāri", meaning: { en: "the Fire", ur: "the آگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَيَقُولُ", transliteration: "fayaqūlu", meaning: { en: "then will say", ur: "پھر will کہو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱلضُّعَفَـٰٓؤُا۟", transliteration: "l-ḍuʿafāu", meaning: { en: "the weak", ur: "the weak" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those who", ur: "کو جو لوگ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱسْتَكْبَرُوٓا۟", transliteration: "is'takbarū", meaning: { en: "were arrogant", ur: "were arrogant" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, we", ur: "بیشک, ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُنَّا", transliteration: "kunnā", meaning: { en: "[we] were", ur: "[ہم] were" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "for تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَبَعًۭا", transliteration: "tabaʿan", meaning: { en: "followers", ur: "followers" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَهَلْ", transliteration: "fahal", meaning: { en: "so can", ur: "so can" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "أَنتُم", transliteration: "antum", meaning: { en: "you", ur: "تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّغْنُونَ", transliteration: "mugh'nūna", meaning: { en: "avert", ur: "avert" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَنَّا", transliteration: "ʿannā", meaning: { en: "from us", ur: "سے us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَصِيبًۭا", transliteration: "naṣīban", meaning: { en: "a portion", ur: "a portion" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّارِ", transliteration: "l-nāri", meaning: { en: "the Fire", ur: "the آگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  48: {
    ayahNumber: 48,
    text: "قَالَ ٱلَّذِينَ ٱسْتَكْبَرُوٓا۟ إِنَّا كُلٌّۭ فِيهَآ إِنَّ ٱللَّهَ قَدْ حَكَمَ بَيْنَ ٱلْعِبَادِ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "Will say", ur: "Will کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱسْتَكْبَرُوٓا۟", transliteration: "is'takbarū", meaning: { en: "(were) arrogant", ur: "(were) arrogant" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, we", ur: "بیشک, ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُلٌّۭ", transliteration: "kullun", meaning: { en: "all", ur: "سب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهَآ", transliteration: "fīhā", meaning: { en: "(are) in it", ur: "(are) میں it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "certainly", ur: "certainly" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَكَمَ", transliteration: "ḥakama", meaning: { en: "has judged", ur: "has judged" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَيْنَ", transliteration: "bayna", meaning: { en: "between", ur: "درمیان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعِبَادِ", transliteration: "l-ʿibādi", meaning: { en: "(His) slaves", ur: "(His) slaves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  49: {
    ayahNumber: 49,
    text: "وَقَالَ ٱلَّذِينَ فِى ٱلنَّارِ لِخَزَنَةِ جَهَنَّمَ ٱدْعُوا۟ رَبَّكُمْ يُخَفِّفْ عَنَّا يَوْمًۭا مِّنَ ٱلْعَذَابِ",
    words: [
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "And will say", ur: "اور will کہو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those", ur: "those" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلنَّارِ", transliteration: "l-nāri", meaning: { en: "the Fire", ur: "the آگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِخَزَنَةِ", transliteration: "likhazanati", meaning: { en: "to (the) keepers", ur: "کو (the) keepers" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "جَهَنَّمَ", transliteration: "jahannama", meaning: { en: "(of) Hell", ur: "(of) جہنم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱدْعُوا۟", transliteration: "id'ʿū", meaning: { en: "Call", ur: "Call" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبَّكُمْ", transliteration: "rabbakum", meaning: { en: "your Lord", ur: "your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُخَفِّفْ", transliteration: "yukhaffif", meaning: { en: "(to) lighten", ur: "(کو) lighten" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَنَّا", transliteration: "ʿannā", meaning: { en: "for us", ur: "for us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَوْمًۭا", transliteration: "yawman", meaning: { en: "a day", ur: "a دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَذَابِ", transliteration: "l-ʿadhābi", meaning: { en: "the punishment", ur: "the عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  50: {
    ayahNumber: 50,
    text: "قَالُوٓا۟ أَوَلَمْ تَكُ تَأْتِيكُمْ رُسُلُكُم بِٱلْبَيِّنَـٰتِ ۖ قَالُوا۟ بَلَىٰ ۚ قَالُوا۟ فَٱدْعُوا۟ ۗ وَمَا دُعَـٰٓؤُا۟ ٱلْكَـٰفِرِينَ إِلَّا فِى ضَلَـٰلٍ",
    words: [
      { arabic: "قَالُوٓا۟", transliteration: "qālū", meaning: { en: "They (will) say", ur: "وہ لوگ (will) کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَوَلَمْ", transliteration: "awalam", meaning: { en: "Did there not", ur: "Did there نہیں" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَكُ", transliteration: "taku", meaning: { en: "Did there not", ur: "Did there نہیں" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَأْتِيكُمْ", transliteration: "tatīkum", meaning: { en: "come to you", ur: "come کو تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رُسُلُكُم", transliteration: "rusulukum", meaning: { en: "your Messengers", ur: "your Messengers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْبَيِّنَـٰتِ ۖ", transliteration: "bil-bayināti", meaning: { en: "with clear proofs", ur: "ساتھ clear proofs" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "قَالُوا۟", transliteration: "qālū", meaning: { en: "They (will) say", ur: "وہ لوگ (will) کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَلَىٰ ۚ", transliteration: "balā", meaning: { en: "Yes", ur: "Yes" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالُوا۟", transliteration: "qālū", meaning: { en: "They (will) say", ur: "وہ لوگ (will) کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَٱدْعُوا۟ ۗ", transliteration: "fa-id'ʿū", meaning: { en: "Then call", ur: "پھر call" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "but not", ur: "لیکن نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "دُعَـٰٓؤُا۟", transliteration: "duʿāu", meaning: { en: "(is the) call", ur: "(is the) call" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", meaning: { en: "(of) the disbelievers", ur: "(of) the کافر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ضَلَـٰلٍ", transliteration: "ḍalālin", meaning: { en: "error", ur: "error" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'جار + مجرور' }
      ],
    },
  },
  51: {
    ayahNumber: 51,
    text: "إِنَّا لَنَنصُرُ رُسُلَنَا وَٱلَّذِينَ ءَامَنُوا۟ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا وَيَوْمَ يَقُومُ ٱلْأَشْهَـٰدُ",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed We", ur: "بیشک ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَنَنصُرُ", transliteration: "lananṣuru", meaning: { en: "We will surely help", ur: "ہم will یقیناً help" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رُسُلَنَا", transliteration: "rusulanā", meaning: { en: "Our Messengers", ur: "Our Messengers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", meaning: { en: "and those who", ur: "اور جو لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ءَامَنُوا۟", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لانا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْحَيَوٰةِ", transliteration: "l-ḥayati", meaning: { en: "the life", ur: "the زندگی" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", meaning: { en: "(of) the world", ur: "(of) the دنیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيَوْمَ", transliteration: "wayawma", meaning: { en: "and (on the) Day", ur: "اور (پر the) دن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَقُومُ", transliteration: "yaqūmu", meaning: { en: "(when) will stand", ur: "(when) will stand" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْأَشْهَـٰدُ", transliteration: "l-ashhādu", meaning: { en: "the witnesses", ur: "the witnesses" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  52: {
    ayahNumber: 52,
    text: "يَوْمَ لَا يَنفَعُ ٱلظَّـٰلِمِينَ مَعْذِرَتُهُمْ ۖ وَلَهُمُ ٱللَّعْنَةُ وَلَهُمْ سُوٓءُ ٱلدَّارِ",
    words: [
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "(The) Day", ur: "(The) دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَنفَعُ", transliteration: "yanfaʿu", meaning: { en: "will benefit", ur: "will benefit" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", meaning: { en: "the wrongdoers", ur: "the wrongdoers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَعْذِرَتُهُمْ ۖ", transliteration: "maʿdhiratuhum", meaning: { en: "their excuse", ur: "their excuse" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَهُمُ", transliteration: "walahumu", meaning: { en: "and for them", ur: "اور for them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱللَّعْنَةُ", transliteration: "l-laʿnatu", meaning: { en: "(is) the curse", ur: "(is) the curse" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَهُمْ", transliteration: "walahum", meaning: { en: "and for them", ur: "اور for them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "سُوٓءُ", transliteration: "sūu", meaning: { en: "(is the) worst", ur: "(is the) worst" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدَّارِ", transliteration: "l-dāri", meaning: { en: "home", ur: "home" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  53: {
    ayahNumber: 53,
    text: "وَلَقَدْ ءَاتَيْنَا مُوسَى ٱلْهُدَىٰ وَأَوْرَثْنَا بَنِىٓ إِسْرَٰٓءِيلَ ٱلْكِتَـٰبَ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور certainly" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ءَاتَيْنَا", transliteration: "ātaynā", meaning: { en: "We gave", ur: "ہم gave" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مُوسَى", transliteration: "mūsā", meaning: { en: "Musa", ur: "Musa" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْهُدَىٰ", transliteration: "l-hudā", meaning: { en: "the guidance", ur: "the guidance" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَوْرَثْنَا", transliteration: "wa-awrathnā", meaning: { en: "and We caused to inherit", ur: "اور ہم caused کو inherit" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بَنِىٓ", transliteration: "banī", meaning: { en: "(the) Children of Israel", ur: "(the) اولاد of Israel" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِسْرَٰٓءِيلَ", transliteration: "is'rāīla", meaning: { en: "(the) Children of Israel", ur: "(the) اولاد of Israel" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", meaning: { en: "the Book", ur: "the کتاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  54: {
    ayahNumber: 54,
    text: "هُدًۭى وَذِكْرَىٰ لِأُو۟لِى ٱلْأَلْبَـٰبِ",
    words: [
      { arabic: "هُدًۭى", transliteration: "hudan", meaning: { en: "A guide", ur: "A guide" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَذِكْرَىٰ", transliteration: "wadhik'rā", meaning: { en: "and a reminder", ur: "اور a reminder" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لِأُو۟لِى", transliteration: "li-ulī", meaning: { en: "for those", ur: "for those" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱلْأَلْبَـٰبِ", transliteration: "l-albābi", meaning: { en: "(of) understanding", ur: "(of) understanding" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  55: {
    ayahNumber: 55,
    text: "فَٱصْبِرْ إِنَّ وَعْدَ ٱللَّهِ حَقٌّۭ وَٱسْتَغْفِرْ لِذَنۢبِكَ وَسَبِّحْ بِحَمْدِ رَبِّكَ بِٱلْعَشِىِّ وَٱلْإِبْكَـٰرِ",
    words: [
      { arabic: "فَٱصْبِرْ", transliteration: "fa-iṣ'bir", meaning: { en: "So be patient", ur: "So be patient" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَعْدَ", transliteration: "waʿda", meaning: { en: "(the) Promise of Allah", ur: "(the) Promise of اللہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "(the) Promise of Allah", ur: "(the) Promise of اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَقٌّۭ", transliteration: "ḥaqqun", meaning: { en: "(is) true", ur: "(is) true" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱسْتَغْفِرْ", transliteration: "wa-is'taghfir", meaning: { en: "And ask forgiveness", ur: "اور ask مغفرت" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لِذَنۢبِكَ", transliteration: "lidhanbika", meaning: { en: "for your sin", ur: "for your sin" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَسَبِّحْ", transliteration: "wasabbiḥ", meaning: { en: "and glorify", ur: "اور glorify" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِحَمْدِ", transliteration: "biḥamdi", meaning: { en: "(the) praise", ur: "(the) praise" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", meaning: { en: "(of) your Lord", ur: "(of) your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْعَشِىِّ", transliteration: "bil-ʿashiyi", meaning: { en: "in the evening", ur: "میں the evening" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَٱلْإِبْكَـٰرِ", transliteration: "wal-ib'kāri", meaning: { en: "and the morning", ur: "اور the morning" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
  56: {
    ayahNumber: 56,
    text: "إِنَّ ٱلَّذِينَ يُجَـٰدِلُونَ فِىٓ ءَايَـٰتِ ٱللَّهِ بِغَيْرِ سُلْطَـٰنٍ أَتَىٰهُمْ ۙ إِن فِى صُدُورِهِمْ إِلَّا كِبْرٌۭ مَّا هُم بِبَـٰلِغِيهِ ۚ فَٱسْتَعِذْ بِٱللَّهِ ۖ إِنَّهُۥ هُوَ ٱلسَّمِيعُ ٱلْبَصِيرُ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُجَـٰدِلُونَ", transliteration: "yujādilūna", meaning: { en: "dispute", ur: "dispute" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِىٓ", transliteration: "fī", meaning: { en: "concerning", ur: "concerning" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَايَـٰتِ", transliteration: "āyāti", meaning: { en: "(the) Signs", ur: "(the) نشانیاں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "(of) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِغَيْرِ", transliteration: "bighayri", meaning: { en: "without", ur: "without" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "سُلْطَـٰنٍ", transliteration: "sul'ṭānin", meaning: { en: "any authority", ur: "any authority" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَتَىٰهُمْ ۙ", transliteration: "atāhum", meaning: { en: "(which) came to them", ur: "(جو) came کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "(is) in", ur: "(is) میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "صُدُورِهِمْ", transliteration: "ṣudūrihim", meaning: { en: "their breasts", ur: "their breasts" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "لیکن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كِبْرٌۭ", transliteration: "kib'run", meaning: { en: "greatness", ur: "greatness" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُم", transliteration: "hum", meaning: { en: "they", ur: "وہ لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِبَـٰلِغِيهِ ۚ", transliteration: "bibālighīhi", meaning: { en: "(can) reach it", ur: "(can) reach it" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "فَٱسْتَعِذْ", transliteration: "fa-is'taʿidh", meaning: { en: "So seek refuge", ur: "So seek refuge" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "بِٱللَّهِ ۖ", transliteration: "bil-lahi", meaning: { en: "in Allah", ur: "میں اللہ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", meaning: { en: "Indeed He", ur: "بیشک وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "ٱلسَّمِيعُ", transliteration: "l-samīʿu", meaning: { en: "(is) the All-Hearer", ur: "(is) the سب-Hearer" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "ٱلْبَصِيرُ", transliteration: "l-baṣīru", meaning: { en: "the All-Seer", ur: "the سب-Seer" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'موصوف + صفت' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  57: {
    ayahNumber: 57,
    text: "لَخَلْقُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ أَكْبَرُ مِنْ خَلْقِ ٱلنَّاسِ وَلَـٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَعْلَمُونَ",
    words: [
      { arabic: "لَخَلْقُ", transliteration: "lakhalqu", meaning: { en: "Surely, (the) creation", ur: "یقیناً, (the) تخلیق" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", meaning: { en: "(of) the heavens", ur: "(of) the آسمان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَكْبَرُ", transliteration: "akbaru", meaning: { en: "(is) greater", ur: "(is) greater" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "than", ur: "than" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "خَلْقِ", transliteration: "khalqi", meaning: { en: "(the) creation", ur: "(the) تخلیق" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", meaning: { en: "(of) the mankind", ur: "(of) the mankind" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", meaning: { en: "but", ur: "لیکن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَكْثَرَ", transliteration: "akthara", meaning: { en: "most", ur: "most" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", meaning: { en: "(of) the people", ur: "(of) the لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "(do) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "know", ur: "جاننا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'نفی + فعل' }
      ],
    },
  },
  58: {
    ayahNumber: 58,
    text: "وَمَا يَسْتَوِى ٱلْأَعْمَىٰ وَٱلْبَصِيرُ وَٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ وَلَا ٱلْمُسِىٓءُ ۚ قَلِيلًۭا مَّا تَتَذَكَّرُونَ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَسْتَوِى", transliteration: "yastawī", meaning: { en: "(are) equal", ur: "(are) equal" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْأَعْمَىٰ", transliteration: "l-aʿmā", meaning: { en: "the blind", ur: "the blind" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْبَصِيرُ", transliteration: "wal-baṣīru", meaning: { en: "and the seeing", ur: "اور the seeing" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", meaning: { en: "and those who", ur: "اور جو لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ءَامَنُوا۟", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لانا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", meaning: { en: "and do", ur: "اور do" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", meaning: { en: "righteous deeds", ur: "نیک deeds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْمُسِىٓءُ ۚ", transliteration: "l-musīu", meaning: { en: "the evildoer", ur: "the evildoer" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَلِيلًۭا", transliteration: "qalīlan", meaning: { en: "Little", ur: "Little" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "(is) what", ur: "(is) کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَتَذَكَّرُونَ", transliteration: "tatadhakkarūna", meaning: { en: "you take heed", ur: "تم take heed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  59: {
    ayahNumber: 59,
    text: "إِنَّ ٱلسَّاعَةَ لَـَٔاتِيَةٌۭ لَّا رَيْبَ فِيهَا وَلَـٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يُؤْمِنُونَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلسَّاعَةَ", transliteration: "l-sāʿata", meaning: { en: "the Hour", ur: "the Hour" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَـَٔاتِيَةٌۭ", transliteration: "laātiyatun", meaning: { en: "(is) surely coming", ur: "(is) یقیناً coming" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "no", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَيْبَ", transliteration: "rayba", meaning: { en: "doubt", ur: "doubt" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "in it", ur: "میں it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", meaning: { en: "but", ur: "لیکن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَكْثَرَ", transliteration: "akthara", meaning: { en: "most", ur: "most" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", meaning: { en: "(of) the people", ur: "(of) the لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "(do) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", meaning: { en: "believe", ur: "ایمان لانا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'نفی + فعل' }
      ],
    },
  },
  60: {
    ayahNumber: 60,
    text: "وَقَالَ رَبُّكُمُ ٱدْعُونِىٓ أَسْتَجِبْ لَكُمْ ۚ إِنَّ ٱلَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِى سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ",
    words: [
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "And said", ur: "اور کہا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "رَبُّكُمُ", transliteration: "rabbukumu", meaning: { en: "your Lord", ur: "your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱدْعُونِىٓ", transliteration: "id'ʿūnī", meaning: { en: "Call upon Me", ur: "Call پر Me" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَسْتَجِبْ", transliteration: "astajib", meaning: { en: "I will respond", ur: "میں will respond" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَكُمْ ۚ", transliteration: "lakum", meaning: { en: "to you", ur: "کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَسْتَكْبِرُونَ", transliteration: "yastakbirūna", meaning: { en: "(are) proud", ur: "(are) proud" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَنْ", transliteration: "ʿan", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عِبَادَتِى", transliteration: "ʿibādatī", meaning: { en: "worship Me", ur: "عبادت Me" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَيَدْخُلُونَ", transliteration: "sayadkhulūna", meaning: { en: "will enter", ur: "will enter" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "جَهَنَّمَ", transliteration: "jahannama", meaning: { en: "Hell", ur: "جہنم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "دَاخِرِينَ", transliteration: "dākhirīna", meaning: { en: "(in) humiliation", ur: "(میں) humiliation" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  61: {
    ayahNumber: 61,
    text: "ٱللَّهُ ٱلَّذِى جَعَلَ لَكُمُ ٱلَّيْلَ لِتَسْكُنُوا۟ فِيهِ وَٱلنَّهَارَ مُبْصِرًا ۚ إِنَّ ٱللَّهَ لَذُو فَضْلٍ عَلَى ٱلنَّاسِ وَلَـٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَشْكُرُونَ",
    words: [
      { arabic: "ٱللَّهُ", transliteration: "al-lahu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "(is) the One Who", ur: "(is) the One جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَعَلَ", transliteration: "jaʿala", meaning: { en: "made", ur: "made" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَكُمُ", transliteration: "lakumu", meaning: { en: "for you", ur: "for تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّيْلَ", transliteration: "al-layla", meaning: { en: "the night", ur: "the رات" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِتَسْكُنُوا۟", transliteration: "litaskunū", meaning: { en: "that you may rest", ur: "وہ تم may rest" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "in it", ur: "میں it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلنَّهَارَ", transliteration: "wal-nahāra", meaning: { en: "and the day", ur: "اور the دن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مُبْصِرًا ۚ", transliteration: "mub'ṣiran", meaning: { en: "giving visibility", ur: "giving visibility" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهَ", transliteration: "l-laha", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَذُو", transliteration: "ladhū", meaning: { en: "(is) Full (of) Bounty", ur: "(is) Full (of) Bounty" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَضْلٍ", transliteration: "faḍlin", meaning: { en: "(is) Full (of) Bounty", ur: "(is) Full (of) Bounty" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", meaning: { en: "the people", ur: "the لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", meaning: { en: "but", ur: "لیکن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَكْثَرَ", transliteration: "akthara", meaning: { en: "most", ur: "most" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", meaning: { en: "(of) the people", ur: "(of) the لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "(do) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَشْكُرُونَ", transliteration: "yashkurūna", meaning: { en: "give thanks", ur: "give thanks" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'مضاف + مضاف إليه' },
        { from: 19, to: 20, label: 'نفی + فعل' }
      ],
    },
  },
  62: {
    ayahNumber: 62,
    text: "ذَٰلِكُمُ ٱللَّهُ رَبُّكُمْ خَـٰلِقُ كُلِّ شَىْءٍۢ لَّآ إِلَـٰهَ إِلَّا هُوَ ۖ فَأَنَّىٰ تُؤْفَكُونَ",
    words: [
      { arabic: "ذَٰلِكُمُ", transliteration: "dhālikumu", meaning: { en: "That", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "(is) Allah", ur: "(is) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبُّكُمْ", transliteration: "rabbukum", meaning: { en: "your Lord", ur: "your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَـٰلِقُ", transliteration: "khāliqu", meaning: { en: "(the) Creator", ur: "(the) Creator" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "(of) all", ur: "(of) سب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَىْءٍۢ", transliteration: "shayin", meaning: { en: "things", ur: "things" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّآ", transliteration: "lā", meaning: { en: "(there is) no", ur: "(there is) نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَـٰهَ", transliteration: "ilāha", meaning: { en: "god", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ ۖ", transliteration: "huwa", meaning: { en: "Him", ur: "Him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَنَّىٰ", transliteration: "fa-annā", meaning: { en: "So how", ur: "So how" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "تُؤْفَكُونَ", transliteration: "tu'fakūna", meaning: { en: "are you deluded", ur: "are تم deluded" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  63: {
    ayahNumber: 63,
    text: "كَذَٰلِكَ يُؤْفَكُ ٱلَّذِينَ كَانُوا۟ بِـَٔايَـٰتِ ٱللَّهِ يَجْحَدُونَ",
    words: [
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "Thus", ur: "Thus" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُؤْفَكُ", transliteration: "yu'faku", meaning: { en: "were deluded", ur: "were deluded" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "were ", ur: "were " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِـَٔايَـٰتِ", transliteration: "biāyāti", meaning: { en: "(the) Signs", ur: "(the) نشانیاں" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "(of) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَجْحَدُونَ", transliteration: "yajḥadūna", meaning: { en: "rejecting", ur: "rejecting" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  64: {
    ayahNumber: 64,
    text: "ٱللَّهُ ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ قَرَارًۭا وَٱلسَّمَآءَ بِنَآءًۭ وَصَوَّرَكُمْ فَأَحْسَنَ صُوَرَكُمْ وَرَزَقَكُم مِّنَ ٱلطَّيِّبَـٰتِ ۚ ذَٰلِكُمُ ٱللَّهُ رَبُّكُمْ ۖ فَتَبَارَكَ ٱللَّهُ رَبُّ ٱلْعَـٰلَمِينَ",
    words: [
      { arabic: "ٱللَّهُ", transliteration: "al-lahu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "(is) the One Who", ur: "(is) the One جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَعَلَ", transliteration: "jaʿala", meaning: { en: "made", ur: "made" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَكُمُ", transliteration: "lakumu", meaning: { en: "for you", ur: "for تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَرْضَ", transliteration: "l-arḍa", meaning: { en: "the earth", ur: "زمین" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَرَارًۭا", transliteration: "qarāran", meaning: { en: "a place of settlement", ur: "a place of settlement" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلسَّمَآءَ", transliteration: "wal-samāa", meaning: { en: "and the sky", ur: "اور the sky" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِنَآءًۭ", transliteration: "bināan", meaning: { en: "a canopy", ur: "a canopy" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَصَوَّرَكُمْ", transliteration: "waṣawwarakum", meaning: { en: "and He formed you", ur: "اور وہ formed تم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فَأَحْسَنَ", transliteration: "fa-aḥsana", meaning: { en: "and perfected", ur: "اور perfected" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "صُوَرَكُمْ", transliteration: "ṣuwarakum", meaning: { en: "your forms", ur: "your forms" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرَزَقَكُم", transliteration: "warazaqakum", meaning: { en: "and provided you", ur: "اور provided تم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلطَّيِّبَـٰتِ ۚ", transliteration: "l-ṭayibāti", meaning: { en: "the good things", ur: "the اچھا things" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَٰلِكُمُ", transliteration: "dhālikumu", meaning: { en: "That", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "(is) Allah", ur: "(is) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبُّكُمْ ۖ", transliteration: "rabbukum", meaning: { en: "your Lord", ur: "your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَتَبَارَكَ", transliteration: "fatabāraka", meaning: { en: "Then blessed (is)", ur: "پھر blessed (is)" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبُّ", transliteration: "rabbu", meaning: { en: "(the) Lord", ur: "(the) رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", meaning: { en: "(of) the worlds", ur: "(of) the worlds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' },
        { from: 20, to: 21, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  65: {
    ayahNumber: 65,
    text: "هُوَ ٱلْحَىُّ لَآ إِلَـٰهَ إِلَّا هُوَ فَٱدْعُوهُ مُخْلِصِينَ لَهُ ٱلدِّينَ ۗ ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "ٱلْحَىُّ", transliteration: "l-ḥayu", meaning: { en: "(is) the Ever-Living", ur: "(is) the Ever-Living" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَآ", transliteration: "lā", meaning: { en: "(there is) no", ur: "(there is) نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَـٰهَ", transliteration: "ilāha", meaning: { en: "god", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "لیکن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "فَٱدْعُوهُ", transliteration: "fa-id'ʿūhu", meaning: { en: "so call Him", ur: "so call Him" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "مُخْلِصِينَ", transliteration: "mukh'liṣīna", meaning: { en: "(being) sincere", ur: "(being) sincere" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "to Him", ur: "کو Him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدِّينَ ۗ", transliteration: "l-dīna", meaning: { en: "(in) the religion", ur: "(میں) the religion" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْحَمْدُ", transliteration: "l-ḥamdu", meaning: { en: "All praise (be)", ur: "سب praise (be)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلَّهِ", transliteration: "lillahi", meaning: { en: "to Allah", ur: "کو اللہ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "رَبِّ", transliteration: "rabbi", meaning: { en: "(the) Lord", ur: "(the) رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", meaning: { en: "(of) the worlds", ur: "(of) the worlds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  66: {
    ayahNumber: 66,
    text: "۞ قُلْ إِنِّى نُهِيتُ أَنْ أَعْبُدَ ٱلَّذِينَ تَدْعُونَ مِن دُونِ ٱللَّهِ لَمَّا جَآءَنِىَ ٱلْبَيِّنَـٰتُ مِن رَّبِّى وَأُمِرْتُ أَنْ أُسْلِمَ لِرَبِّ ٱلْعَـٰلَمِينَ",
    words: [
      { arabic: "۞ قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنِّى", transliteration: "innī", meaning: { en: "Indeed, I", ur: "بیشک, میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نُهِيتُ", transliteration: "nuhītu", meaning: { en: "[I] have been forbidden", ur: "[میں] have been forbidden" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَنْ", transliteration: "an", meaning: { en: "to", ur: "کو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَعْبُدَ", transliteration: "aʿbuda", meaning: { en: "worship", ur: "عبادت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those whom", ur: "those whom" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَدْعُونَ", transliteration: "tadʿūna", meaning: { en: "you call", ur: "تم call" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "besides", ur: "besides" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِ", transliteration: "dūni", meaning: { en: "besides", ur: "besides" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَمَّا", transliteration: "lammā", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَآءَنِىَ", transliteration: "jāaniya", meaning: { en: "have come to me", ur: "have come کو me" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْبَيِّنَـٰتُ", transliteration: "l-bayinātu", meaning: { en: "the clear proofs", ur: "the clear proofs" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَّبِّى", transliteration: "rabbī", meaning: { en: "my Lord", ur: "my رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأُمِرْتُ", transliteration: "wa-umir'tu", meaning: { en: "and I am commanded", ur: "اور میں am commanded" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَنْ", transliteration: "an", meaning: { en: "to", ur: "کو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُسْلِمَ", transliteration: "us'lima", meaning: { en: "submit", ur: "submit" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِرَبِّ", transliteration: "lirabbi", meaning: { en: "to (the) Lord", ur: "کو (the) رب" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", meaning: { en: "(of) the worlds", ur: "(of) the worlds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'موصوف + صفت' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  67: {
    ayahNumber: 67,
    text: "هُوَ ٱلَّذِى خَلَقَكُم مِّن تُرَابٍۢ ثُمَّ مِن نُّطْفَةٍۢ ثُمَّ مِنْ عَلَقَةٍۢ ثُمَّ يُخْرِجُكُمْ طِفْلًۭا ثُمَّ لِتَبْلُغُوٓا۟ أَشُدَّكُمْ ثُمَّ لِتَكُونُوا۟ شُيُوخًۭا ۚ وَمِنكُم مَّن يُتَوَفَّىٰ مِن قَبْلُ ۖ وَلِتَبْلُغُوٓا۟ أَجَلًۭا مُّسَمًّۭى وَلَعَلَّكُمْ تَعْقِلُونَ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "(is) the One Who", ur: "(is) the One جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَلَقَكُم", transliteration: "khalaqakum", meaning: { en: "created you", ur: "پیدا کیا تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُرَابٍۢ", transliteration: "turābin", meaning: { en: "dust", ur: "dust" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "نُّطْفَةٍۢ", transliteration: "nuṭ'fatin", meaning: { en: "a semen-drop", ur: "a semen-drop" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَلَقَةٍۢ", transliteration: "ʿalaqatin", meaning: { en: "a clinging substance", ur: "a clinging substance" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُخْرِجُكُمْ", transliteration: "yukh'rijukum", meaning: { en: "He brings you out", ur: "وہ brings تم out" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "طِفْلًۭا", transliteration: "ṭif'lan", meaning: { en: "(as) a child", ur: "(as) a child" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِتَبْلُغُوٓا۟", transliteration: "litablughū", meaning: { en: "lets you reach", ur: "lets تم reach" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "أَشُدَّكُمْ", transliteration: "ashuddakum", meaning: { en: "your maturity", ur: "your maturity" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِتَكُونُوا۟", transliteration: "litakūnū", meaning: { en: "lets you become", ur: "lets تم become" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "شُيُوخًۭا ۚ", transliteration: "shuyūkhan", meaning: { en: "old ", ur: "old " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمِنكُم", transliteration: "waminkum", meaning: { en: "and among you", ur: "اور among تم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَّن", transliteration: "man", meaning: { en: "(is he) who", ur: "(is وہ) جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُتَوَفَّىٰ", transliteration: "yutawaffā", meaning: { en: "dies", ur: "dies" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before ", ur: "پہلے " }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلُ ۖ", transliteration: "qablu", meaning: { en: "before ", ur: "پہلے " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلِتَبْلُغُوٓا۟", transliteration: "walitablughū", meaning: { en: "and lets you reach", ur: "اور lets تم reach" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَجَلًۭا", transliteration: "ajalan", meaning: { en: "a term", ur: "a term" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّسَمًّۭى", transliteration: "musamman", meaning: { en: "specified", ur: "specified" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَعَلَّكُمْ", transliteration: "walaʿallakum", meaning: { en: "and that you may", ur: "اور وہ تم may" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَعْقِلُونَ", transliteration: "taʿqilūna", meaning: { en: "use reason", ur: "use reason" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'جار + مجرور' }
      ],
    },
  },
  68: {
    ayahNumber: 68,
    text: "هُوَ ٱلَّذِى يُحْىِۦ وَيُمِيتُ ۖ فَإِذَا قَضَىٰٓ أَمْرًۭا فَإِنَّمَا يَقُولُ لَهُۥ كُن فَيَكُونُ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "(is) the One Who", ur: "(is) the One جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُحْىِۦ", transliteration: "yuḥ'yī", meaning: { en: "gives life", ur: "gives زندگی" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَيُمِيتُ ۖ", transliteration: "wayumītu", meaning: { en: "and causes death", ur: "اور causes موت" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "And when", ur: "اور when" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "قَضَىٰٓ", transliteration: "qaḍā", meaning: { en: "He decrees", ur: "وہ decrees" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَمْرًۭا", transliteration: "amran", meaning: { en: "a matter", ur: "a matter" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَإِنَّمَا", transliteration: "fa-innamā", meaning: { en: "then only", ur: "پھر صرف" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "يَقُولُ", transliteration: "yaqūlu", meaning: { en: "He says", ur: "وہ کہتا ہے" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "to it", ur: "کو it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُن", transliteration: "kun", meaning: { en: "Be", ur: "Be" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَيَكُونُ", transliteration: "fayakūnu", meaning: { en: "and it is", ur: "اور it is" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  69: {
    ayahNumber: 69,
    text: "أَلَمْ تَرَ إِلَى ٱلَّذِينَ يُجَـٰدِلُونَ فِىٓ ءَايَـٰتِ ٱللَّهِ أَنَّىٰ يُصْرَفُونَ",
    words: [
      { arabic: "أَلَمْ", transliteration: "alam", meaning: { en: "Do not", ur: "Do نہیں" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَرَ", transliteration: "tara", meaning: { en: "you see", ur: "تم دیکھنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "[to]", ur: "[کو]" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُجَـٰدِلُونَ", transliteration: "yujādilūna", meaning: { en: "dispute", ur: "dispute" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِىٓ", transliteration: "fī", meaning: { en: "concerning", ur: "concerning" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَايَـٰتِ", transliteration: "āyāti", meaning: { en: "(the) Signs", ur: "(the) نشانیاں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "(of) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَّىٰ", transliteration: "annā", meaning: { en: "How", ur: "How" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُصْرَفُونَ", transliteration: "yuṣ'rafūna", meaning: { en: "they are turned away", ur: "وہ لوگ are turned away" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  70: {
    ayahNumber: 70,
    text: "ٱلَّذِينَ كَذَّبُوا۟ بِٱلْكِتَـٰبِ وَبِمَآ أَرْسَلْنَا بِهِۦ رُسُلَنَا ۖ فَسَوْفَ يَعْلَمُونَ",
    words: [
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "Those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَذَّبُوا۟", transliteration: "kadhabū", meaning: { en: "deny", ur: "deny" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْكِتَـٰبِ", transliteration: "bil-kitābi", meaning: { en: "the Book", ur: "the کتاب" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَبِمَآ", transliteration: "wabimā", meaning: { en: "and with what", ur: "اور ساتھ کیا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", meaning: { en: "We sent", ur: "ہم sent" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "with it", ur: "ساتھ it" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "رُسُلَنَا ۖ", transliteration: "rusulanā", meaning: { en: "Our Messengers", ur: "Our Messengers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَسَوْفَ", transliteration: "fasawfa", meaning: { en: "but soon", ur: "لیکن soon" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "they will know", ur: "وہ لوگ will جاننا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  71: {
    ayahNumber: 71,
    text: "إِذِ ٱلْأَغْلَـٰلُ فِىٓ أَعْنَـٰقِهِمْ وَٱلسَّلَـٰسِلُ يُسْحَبُونَ",
    words: [
      { arabic: "إِذِ", transliteration: "idhi", meaning: { en: "When", ur: "When" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَغْلَـٰلُ", transliteration: "l-aghlālu", meaning: { en: "the iron collars", ur: "the iron collars" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِىٓ", transliteration: "fī", meaning: { en: "(will be) around", ur: "(will be) around" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَعْنَـٰقِهِمْ", transliteration: "aʿnāqihim", meaning: { en: "their necks", ur: "their necks" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلسَّلَـٰسِلُ", transliteration: "wal-salāsilu", meaning: { en: "and the chains", ur: "اور the chains" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يُسْحَبُونَ", transliteration: "yus'ḥabūna", meaning: { en: "they will be dragged", ur: "وہ لوگ will be dragged" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  72: {
    ayahNumber: 72,
    text: "فِى ٱلْحَمِيمِ ثُمَّ فِى ٱلنَّارِ يُسْجَرُونَ",
    words: [
      { arabic: "فِى", transliteration: "fī", meaning: { en: "In", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْحَمِيمِ", transliteration: "l-ḥamīmi", meaning: { en: "the boiling water", ur: "the boiling پانی" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلنَّارِ", transliteration: "l-nāri", meaning: { en: "the Fire", ur: "the آگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُسْجَرُونَ", transliteration: "yus'jarūna", meaning: { en: "they will be burned", ur: "وہ لوگ will be burned" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  73: {
    ayahNumber: 73,
    text: "ثُمَّ قِيلَ لَهُمْ أَيْنَ مَا كُنتُمْ تُشْرِكُونَ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "Then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قِيلَ", transliteration: "qīla", meaning: { en: "it will be said", ur: "it will be کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "to them", ur: "کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَيْنَ", transliteration: "ayna", meaning: { en: "Where", ur: "Where" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "(is) that which", ur: "(is) وہ جو" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you used to", ur: "تم used کو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تُشْرِكُونَ", transliteration: "tush'rikūna", meaning: { en: "associate", ur: "associate" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'موصول + صلة' }
      ],
    },
  },
  74: {
    ayahNumber: 74,
    text: "مِن دُونِ ٱللَّهِ ۖ قَالُوا۟ ضَلُّوا۟ عَنَّا بَل لَّمْ نَكُن نَّدْعُوا۟ مِن قَبْلُ شَيْـًۭٔا ۚ كَذَٰلِكَ يُضِلُّ ٱللَّهُ ٱلْكَـٰفِرِينَ",
    words: [
      { arabic: "مِن", transliteration: "min", meaning: { en: "Other than", ur: "Other than" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِ", transliteration: "dūni", meaning: { en: "Other than", ur: "Other than" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالُوا۟", transliteration: "qālū", meaning: { en: "They will say", ur: "وہ لوگ will کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ضَلُّوا۟", transliteration: "ḍallū", meaning: { en: "They have departed", ur: "وہ لوگ have departed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَنَّا", transliteration: "ʿannā", meaning: { en: "from us", ur: "سے us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَل", transliteration: "bal", meaning: { en: "Nay", ur: "Nay" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّمْ", transliteration: "lam", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَكُن", transliteration: "nakun", meaning: { en: "we used to", ur: "ہم used کو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَّدْعُوا۟", transliteration: "nadʿū", meaning: { en: "[we] call", ur: "[ہم] call" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before", ur: "پہلے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلُ", transliteration: "qablu", meaning: { en: "before", ur: "پہلے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَيْـًۭٔا ۚ", transliteration: "shayan", meaning: { en: "anything", ur: "anything" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "Thus", ur: "Thus" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُضِلُّ", transliteration: "yuḍillu", meaning: { en: "Allah lets go astray", ur: "اللہ lets go astray" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "Allah lets go astray", ur: "اللہ lets go astray" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", meaning: { en: "the disbelievers", ur: "the کافر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  75: {
    ayahNumber: 75,
    text: "ذَٰلِكُم بِمَا كُنتُمْ تَفْرَحُونَ فِى ٱلْأَرْضِ بِغَيْرِ ٱلْحَقِّ وَبِمَا كُنتُمْ تَمْرَحُونَ",
    words: [
      { arabic: "ذَٰلِكُم", transliteration: "dhālikum", meaning: { en: "That was", ur: "وہ was" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "because", ur: "because" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you used to", ur: "تم used کو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَفْرَحُونَ", transliteration: "tafraḥūna", meaning: { en: "rejoice", ur: "rejoice" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "the earth", ur: "زمین" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِغَيْرِ", transliteration: "bighayri", meaning: { en: "without", ur: "without" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱلْحَقِّ", transliteration: "l-ḥaqi", meaning: { en: "right", ur: "right" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَبِمَا", transliteration: "wabimā", meaning: { en: "and because", ur: "اور because" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you used to", ur: "تم used کو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَمْرَحُونَ", transliteration: "tamraḥūna", meaning: { en: "be insolent", ur: "be insolent" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  76: {
    ayahNumber: 76,
    text: "ٱدْخُلُوٓا۟ أَبْوَٰبَ جَهَنَّمَ خَـٰلِدِينَ فِيهَا ۖ فَبِئْسَ مَثْوَى ٱلْمُتَكَبِّرِينَ",
    words: [
      { arabic: "ٱدْخُلُوٓا۟", transliteration: "ud'khulū", meaning: { en: "Enter", ur: "Enter" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَبْوَٰبَ", transliteration: "abwāba", meaning: { en: "(the) gates", ur: "(the) gates" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَهَنَّمَ", transliteration: "jahannama", meaning: { en: "(of) Hell", ur: "(of) جہنم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَـٰلِدِينَ", transliteration: "khālidīna", meaning: { en: "(to) abide forever", ur: "(کو) abide forever" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهَا ۖ", transliteration: "fīhā", meaning: { en: "in it", ur: "میں it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَبِئْسَ", transliteration: "fabi'sa", meaning: { en: "and wretched is", ur: "اور wretched is" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "مَثْوَى", transliteration: "mathwā", meaning: { en: "(the) abode", ur: "(the) abode" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُتَكَبِّرِينَ", transliteration: "l-mutakabirīna", meaning: { en: "(of) the arrogant", ur: "(of) the arrogant" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  77: {
    ayahNumber: 77,
    text: "فَٱصْبِرْ إِنَّ وَعْدَ ٱللَّهِ حَقٌّۭ ۚ فَإِمَّا نُرِيَنَّكَ بَعْضَ ٱلَّذِى نَعِدُهُمْ أَوْ نَتَوَفَّيَنَّكَ فَإِلَيْنَا يُرْجَعُونَ",
    words: [
      { arabic: "فَٱصْبِرْ", transliteration: "fa-iṣ'bir", meaning: { en: "So be patient", ur: "So be patient" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَعْدَ", transliteration: "waʿda", meaning: { en: "(the) Promise", ur: "(the) Promise" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "(of) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَقٌّۭ ۚ", transliteration: "ḥaqqun", meaning: { en: "(is) true", ur: "(is) true" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَإِمَّا", transliteration: "fa-immā", meaning: { en: "And whether", ur: "اور whether" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "نُرِيَنَّكَ", transliteration: "nuriyannaka", meaning: { en: "We show you", ur: "ہم show تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَعْضَ", transliteration: "baʿḍa", meaning: { en: "some", ur: "some" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "(of) what", ur: "(of) کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَعِدُهُمْ", transliteration: "naʿiduhum", meaning: { en: "We have promised them", ur: "ہم have promised them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "نَتَوَفَّيَنَّكَ", transliteration: "natawaffayannaka", meaning: { en: "We cause you to die", ur: "ہم cause تم کو die" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَإِلَيْنَا", transliteration: "fa-ilaynā", meaning: { en: "then to Us", ur: "پھر کو Us" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "يُرْجَعُونَ", transliteration: "yur'jaʿūna", meaning: { en: "they will be returned", ur: "وہ لوگ will be returned" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  78: {
    ayahNumber: 78,
    text: "وَلَقَدْ أَرْسَلْنَا رُسُلًۭا مِّن قَبْلِكَ مِنْهُم مَّن قَصَصْنَا عَلَيْكَ وَمِنْهُم مَّن لَّمْ نَقْصُصْ عَلَيْكَ ۗ وَمَا كَانَ لِرَسُولٍ أَن يَأْتِىَ بِـَٔايَةٍ إِلَّا بِإِذْنِ ٱللَّهِ ۚ فَإِذَا جَآءَ أَمْرُ ٱللَّهِ قُضِىَ بِٱلْحَقِّ وَخَسِرَ هُنَالِكَ ٱلْمُبْطِلُونَ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور certainly" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", meaning: { en: "We have sent", ur: "ہم have sent" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رُسُلًۭا", transliteration: "rusulan", meaning: { en: "Messengers", ur: "Messengers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "before you", ur: "پہلے تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَبْلِكَ", transliteration: "qablika", meaning: { en: "before you", ur: "پہلے تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْهُم", transliteration: "min'hum", meaning: { en: "Among them", ur: "Among them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّن", transliteration: "man", meaning: { en: "(are) who ", ur: "(are) جو " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَصَصْنَا", transliteration: "qaṣaṣnā", meaning: { en: "We have related", ur: "ہم have related" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْكَ", transliteration: "ʿalayka", meaning: { en: "to you", ur: "کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمِنْهُم", transliteration: "wamin'hum", meaning: { en: "and among them", ur: "اور among them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَّن", transliteration: "man", meaning: { en: "(are) who ", ur: "(are) جو " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّمْ", transliteration: "lam", meaning: { en: "not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَقْصُصْ", transliteration: "naqṣuṣ", meaning: { en: "We have related", ur: "ہم have related" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْكَ ۗ", transliteration: "ʿalayka", meaning: { en: "to you", ur: "کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "is", ur: "is" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِرَسُولٍ", transliteration: "lirasūlin", meaning: { en: "for any Messenger", ur: "for any رسول" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَأْتِىَ", transliteration: "yatiya", meaning: { en: "he brings", ur: "وہ brings" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِـَٔايَةٍ", transliteration: "biāyatin", meaning: { en: "a Sign", ur: "a نشانی" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِإِذْنِ", transliteration: "bi-idh'ni", meaning: { en: "by (the) permission", ur: "by (the) permission" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "(of) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "So when", ur: "So when" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "جَآءَ", transliteration: "jāa", meaning: { en: "comes", ur: "comes" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَمْرُ", transliteration: "amru", meaning: { en: "(the) Command", ur: "(the) Command" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "(of) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قُضِىَ", transliteration: "quḍiya", meaning: { en: "it will be decided", ur: "it will be decided" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", meaning: { en: "in truth", ur: "میں سچ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَخَسِرَ", transliteration: "wakhasira", meaning: { en: "and will lose", ur: "اور will lose" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "هُنَالِكَ", transliteration: "hunālika", meaning: { en: "there", ur: "there" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُبْطِلُونَ", transliteration: "l-mub'ṭilūna", meaning: { en: "the falsifiers", ur: "the falsifiers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'جار + مجرور' },
        { from: 20, to: 21, label: 'جار + مجرور' },
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 31, to: 32, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  79: {
    ayahNumber: 79,
    text: "ٱللَّهُ ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَنْعَـٰمَ لِتَرْكَبُوا۟ مِنْهَا وَمِنْهَا تَأْكُلُونَ",
    words: [
      { arabic: "ٱللَّهُ", transliteration: "al-lahu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "(is) the One Who", ur: "(is) the One جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَعَلَ", transliteration: "jaʿala", meaning: { en: "made", ur: "made" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَكُمُ", transliteration: "lakumu", meaning: { en: "for you", ur: "for تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَنْعَـٰمَ", transliteration: "l-anʿāma", meaning: { en: "the cattle", ur: "the cattle" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِتَرْكَبُوا۟", transliteration: "litarkabū", meaning: { en: "that you may ride", ur: "وہ تم may ride" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مِنْهَا", transliteration: "min'hā", meaning: { en: "some of them", ur: "some of them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمِنْهَا", transliteration: "wamin'hā", meaning: { en: "and some of them", ur: "اور some of them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَأْكُلُونَ", transliteration: "takulūna", meaning: { en: "you eat", ur: "تم eat" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  80: {
    ayahNumber: 80,
    text: "وَلَكُمْ فِيهَا مَنَـٰفِعُ وَلِتَبْلُغُوا۟ عَلَيْهَا حَاجَةًۭ فِى صُدُورِكُمْ وَعَلَيْهَا وَعَلَى ٱلْفُلْكِ تُحْمَلُونَ",
    words: [
      { arabic: "وَلَكُمْ", transliteration: "walakum", meaning: { en: "And for you", ur: "اور for تم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "in them", ur: "میں them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَنَـٰفِعُ", transliteration: "manāfiʿu", meaning: { en: "(are) benefits", ur: "(are) benefits" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلِتَبْلُغُوا۟", transliteration: "walitablughū", meaning: { en: "and that you may reach", ur: "اور وہ تم may reach" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَلَيْهَا", transliteration: "ʿalayhā", meaning: { en: "through them", ur: "through them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَاجَةًۭ", transliteration: "ḥājatan", meaning: { en: "a need", ur: "a need" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "(that is) in", ur: "(وہ is) میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "صُدُورِكُمْ", transliteration: "ṣudūrikum", meaning: { en: "your breasts", ur: "your breasts" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعَلَيْهَا", transliteration: "waʿalayhā", meaning: { en: "and upon them", ur: "اور پر them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَعَلَى", transliteration: "waʿalā", meaning: { en: "and upon", ur: "اور پر" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْفُلْكِ", transliteration: "l-ful'ki", meaning: { en: "the ships", ur: "the ships" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُحْمَلُونَ", transliteration: "tuḥ'malūna", meaning: { en: "you are carried", ur: "تم are carried" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  81: {
    ayahNumber: 81,
    text: "وَيُرِيكُمْ ءَايَـٰتِهِۦ فَأَىَّ ءَايَـٰتِ ٱللَّهِ تُنكِرُونَ",
    words: [
      { arabic: "وَيُرِيكُمْ", transliteration: "wayurīkum", meaning: { en: "And He shows you", ur: "اور وہ shows تم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ءَايَـٰتِهِۦ", transliteration: "āyātihi", meaning: { en: "His Signs", ur: "His نشانیاں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَىَّ", transliteration: "fa-ayya", meaning: { en: "Then which", ur: "پھر جو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ءَايَـٰتِ", transliteration: "āyāti", meaning: { en: "(of the) Signs", ur: "(of the) نشانیاں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "(of) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُنكِرُونَ", transliteration: "tunkirūna", meaning: { en: "will you deny", ur: "will تم deny" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  82: {
    ayahNumber: 82,
    text: "أَفَلَمْ يَسِيرُوا۟ فِى ٱلْأَرْضِ فَيَنظُرُوا۟ كَيْفَ كَانَ عَـٰقِبَةُ ٱلَّذِينَ مِن قَبْلِهِمْ ۚ كَانُوٓا۟ أَكْثَرَ مِنْهُمْ وَأَشَدَّ قُوَّةًۭ وَءَاثَارًۭا فِى ٱلْأَرْضِ فَمَآ أَغْنَىٰ عَنْهُم مَّا كَانُوا۟ يَكْسِبُونَ",
    words: [
      { arabic: "أَفَلَمْ", transliteration: "afalam", meaning: { en: "Do they not", ur: "Do وہ لوگ نہیں" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَسِيرُوا۟", transliteration: "yasīrū", meaning: { en: "travel", ur: "travel" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "through", ur: "through" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "the land", ur: "the land" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَيَنظُرُوا۟", transliteration: "fayanẓurū", meaning: { en: "and see", ur: "اور دیکھنا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "كَيْفَ", transliteration: "kayfa", meaning: { en: "how", ur: "how" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "was", ur: "was" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَـٰقِبَةُ", transliteration: "ʿāqibatu", meaning: { en: "(the) end", ur: "(the) end" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "(of) those who", ur: "(of) جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "(were) before them", ur: "(were) پہلے them" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلِهِمْ ۚ", transliteration: "qablihim", meaning: { en: "(were) before them", ur: "(were) پہلے them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوٓا۟", transliteration: "kānū", meaning: { en: "They were", ur: "وہ لوگ were" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَكْثَرَ", transliteration: "akthara", meaning: { en: "more numerous", ur: "more numerous" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "مِنْهُمْ", transliteration: "min'hum", meaning: { en: "than them", ur: "than them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَشَدَّ", transliteration: "wa-ashadda", meaning: { en: "and mightier", ur: "اور mightier" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "قُوَّةًۭ", transliteration: "quwwatan", meaning: { en: "(in) strength", ur: "(میں) strength" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَءَاثَارًۭا", transliteration: "waāthāran", meaning: { en: "and impressions", ur: "اور impressions" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "the land", ur: "the land" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَمَآ", transliteration: "famā", meaning: { en: "but not", ur: "لیکن نہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "أَغْنَىٰ", transliteration: "aghnā", meaning: { en: "availed", ur: "availed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَنْهُم", transliteration: "ʿanhum", meaning: { en: "them", ur: "them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they used to", ur: "وہ لوگ used کو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَكْسِبُونَ", transliteration: "yaksibūna", meaning: { en: "earn", ur: "earn" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'فعل + فاعل' }
      ],
    },
  },
  83: {
    ayahNumber: 83,
    text: "فَلَمَّا جَآءَتْهُمْ رُسُلُهُم بِٱلْبَيِّنَـٰتِ فَرِحُوا۟ بِمَا عِندَهُم مِّنَ ٱلْعِلْمِ وَحَاقَ بِهِم مَّا كَانُوا۟ بِهِۦ يَسْتَهْزِءُونَ",
    words: [
      { arabic: "فَلَمَّا", transliteration: "falammā", meaning: { en: "Then when", ur: "پھر when" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "جَآءَتْهُمْ", transliteration: "jāathum", meaning: { en: "came to them", ur: "came کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رُسُلُهُم", transliteration: "rusuluhum", meaning: { en: "their Messengers", ur: "their Messengers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْبَيِّنَـٰتِ", transliteration: "bil-bayināti", meaning: { en: "with clear proofs", ur: "ساتھ clear proofs" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "فَرِحُوا۟", transliteration: "fariḥū", meaning: { en: "they rejoiced", ur: "وہ لوگ rejoiced" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "in what", ur: "میں کیا" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "عِندَهُم", transliteration: "ʿindahum", meaning: { en: "they had", ur: "وہ لوگ had" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعِلْمِ", transliteration: "l-ʿil'mi", meaning: { en: "the knowledge", ur: "the knowledge" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَحَاقَ", transliteration: "waḥāqa", meaning: { en: "and enveloped", ur: "اور enveloped" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِهِم", transliteration: "bihim", meaning: { en: "them", ur: "them" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they used to", ur: "وہ لوگ used کو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "[at it]", ur: "[at it]" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "يَسْتَهْزِءُونَ", transliteration: "yastahziūna", meaning: { en: "mock", ur: "mock" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  84: {
    ayahNumber: 84,
    text: "فَلَمَّا رَأَوْا۟ بَأْسَنَا قَالُوٓا۟ ءَامَنَّا بِٱللَّهِ وَحْدَهُۥ وَكَفَرْنَا بِمَا كُنَّا بِهِۦ مُشْرِكِينَ",
    words: [
      { arabic: "فَلَمَّا", transliteration: "falammā", meaning: { en: "So when", ur: "So when" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "رَأَوْا۟", transliteration: "ra-aw", meaning: { en: "they saw", ur: "وہ لوگ saw" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَأْسَنَا", transliteration: "basanā", meaning: { en: "Our punishment", ur: "Our عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالُوٓا۟", transliteration: "qālū", meaning: { en: "they said", ur: "وہ لوگ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَامَنَّا", transliteration: "āmannā", meaning: { en: "We believe", ur: "ہم ایمان لانا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِٱللَّهِ", transliteration: "bil-lahi", meaning: { en: "in Allah", ur: "میں اللہ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَحْدَهُۥ", transliteration: "waḥdahu", meaning: { en: "Alone", ur: "Alone" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَكَفَرْنَا", transliteration: "wakafarnā", meaning: { en: "and we disbelieve", ur: "اور ہم disbelieve" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "in what", ur: "میں کیا" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "كُنَّا", transliteration: "kunnā", meaning: { en: "we used to", ur: "ہم used کو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "with Him", ur: "ساتھ Him" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مُشْرِكِينَ", transliteration: "mush'rikīna", meaning: { en: "associate", ur: "associate" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  85: {
    ayahNumber: 85,
    text: "فَلَمْ يَكُ يَنفَعُهُمْ إِيمَـٰنُهُمْ لَمَّا رَأَوْا۟ بَأْسَنَا ۖ سُنَّتَ ٱللَّهِ ٱلَّتِى قَدْ خَلَتْ فِى عِبَادِهِۦ ۖ وَخَسِرَ هُنَالِكَ ٱلْكَـٰفِرُونَ",
    words: [
      { arabic: "فَلَمْ", transliteration: "falam", meaning: { en: "But did not", ur: "لیکن did نہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "يَكُ", transliteration: "yaku", meaning: { en: "But did not", ur: "لیکن did نہیں" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَنفَعُهُمْ", transliteration: "yanfaʿuhum", meaning: { en: "benefit them", ur: "benefit them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِيمَـٰنُهُمْ", transliteration: "īmānuhum", meaning: { en: "their faith", ur: "their faith" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَمَّا", transliteration: "lammā", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَأَوْا۟", transliteration: "ra-aw", meaning: { en: "they saw", ur: "وہ لوگ saw" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَأْسَنَا ۖ", transliteration: "basanā", meaning: { en: "Our punishment", ur: "Our عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سُنَّتَ", transliteration: "sunnata", meaning: { en: "(Such is the) Way", ur: "(Such is the) راستہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "(of) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّتِى", transliteration: "allatī", meaning: { en: "which", ur: "جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "(has) indeed", ur: "(has) بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "خَلَتْ", transliteration: "khalat", meaning: { en: "preceded", ur: "preceded" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "among", ur: "among" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عِبَادِهِۦ ۖ", transliteration: "ʿibādihi", meaning: { en: "His slaves", ur: "His slaves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَخَسِرَ", transliteration: "wakhasira", meaning: { en: "And are lost", ur: "اور are lost" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "هُنَالِكَ", transliteration: "hunālika", meaning: { en: "there", ur: "there" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْكَـٰفِرُونَ", transliteration: "l-kāfirūna", meaning: { en: "the disbelievers", ur: "the کافر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
};

export default TREEBANK_DATA;
