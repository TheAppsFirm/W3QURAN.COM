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
    ]
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
        posLabel: 'N+PRON',
        root: 'ن ف س',
        meaning: { en: 'yourselves', ur: 'خود سے' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Object of مَّقْتِكُمْ + possessive pronoun.', ur: 'مفعول مَّقْتِكُمْ کا + ضمیر ملکیت۔' }
      }
    ]
  }
};

export default TREEBANK_DATA;
