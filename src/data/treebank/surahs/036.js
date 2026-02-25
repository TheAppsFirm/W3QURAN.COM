/**
 * Surah Ya-Sin (36) - Ya-Sin
 * Quranic Arabic Treebank Data
 * First 10 ayahs - Makki surah
 *
 * Known as the "Heart of the Quran" - one of the most important surahs
 * The Prophet (PBUH) said: "Everything has a heart, and the heart of the Quran is Ya-Sin"
 */

export const TREEBANK_DATA = {
  surahId: 36,
  surahName: "Ya-Sin",
  surahNameArabic: "يس",
  totalAyahs: 83,
  virtue: "Heart of the Quran",

  1: {
    ayahNumber: 1,
    text: "يس",
    translation: { en: "Ya, Sin.", ur: "یٰسٓ" },
    words: [
      { id: "36:1:1", position: 1, arabic: "يس", transliteration: "Yā-Sīn", meaning: { en: "Ya Sin", ur: "یٰسٓ" }, pos: ["LETTER"], posLabel: "LETTER", grammarRole: "muqatta'at", features: { type: "mysterious_letters" }, grammarExplanations: { en: "Mysterious letters (حروف مقطعات) - their meaning known only to Allah. Some scholars say it means 'O Human' (يا إنسان)", ur: "حروف مقطعات - ان کا معنی صرف اللہ کو معلوم ہے۔ بعض علماء کہتے ہیں اس کا مطلب 'اے انسان' ہے" } }
    ],
    structure: { diagram: ["MUQATTA'AT"], explanation: "Mysterious letters opening the surah - creates reverence and captures attention" },
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    text: "وَالْقُرْآنِ الْحَكِيمِ",
    translation: { en: "By the wise Quran.", ur: "قسم ہے حکمت والے قرآن کی" },
    words: [
      { id: "36:2:1", position: 1, arabic: "وَالْقُرْآنِ", transliteration: "wal-Qurʾāni", root: "ق ر أ", meaning: { en: "By the Quran", ur: "قرآن کی قسم" }, pos: ["CONJ", "N"], posLabel: "CONJ+N", grammarRole: "oath", features: { case: "genitive", definite: true }, grammarExplanations: { en: "Oath - واو القسم + object of oath in genitive", ur: "قسم - واو القسم + مقسم به مجرور" } },
      { id: "36:2:2", position: 2, arabic: "الْحَكِيمِ", transliteration: "al-ḥakīmi", root: "ح ك م", meaning: { en: "the wise", ur: "حکمت والے" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "adjective", features: { case: "genitive", definite: true, pattern: "فَعِيل" }, grammarExplanations: { en: "Adjective describing القرآن - 'full of wisdom' or 'decisive'", ur: "صفت - حکمت سے بھرا ہوا یا فیصلہ کن" } }
    ],
    structure: { diagram: ["OATH"], explanation: "Divine oath by the Quran - emphasizing its wisdom and authority" ,
       relationships: [
        { from: 1, to: 2, label: 'موصوف + صفت' }
      ],
    }
  },

  3: {
    ayahNumber: 3,
    text: "إِنَّكَ لَمِنَ الْمُرْسَلِينَ",
    translation: { en: "Indeed you are among the messengers,", ur: "بے شک تم رسولوں میں سے ہو" },
    words: [
      { id: "36:3:1", position: 1, arabic: "إِنَّكَ", transliteration: "innaka", meaning: { en: "Indeed you", ur: "بے شک تم" }, pos: ["EMPH", "PRON"], posLabel: "EMPH+PRON", grammarRole: "emphasis", grammarExplanations: { en: "Emphatic particle + attached pronoun (2nd person)", ur: "حرف توکید + ضمیر مخاطب" } },
      { id: "36:3:2", position: 2, arabic: "لَمِنَ", transliteration: "la-mina", meaning: { en: "are surely among", ur: "ضرور میں سے" }, pos: ["EMPH", "PREP"], posLabel: "EMPH+PREP", grammarRole: "predicate", grammarExplanations: { en: "Lam of emphasis + preposition - predicate of إن", ur: "لام توکید + حرف جار - خبر إن" } },
      { id: "36:3:3", position: 3, arabic: "الْمُرْسَلِينَ", transliteration: "al-mursalīna", root: "ر س ل", meaning: { en: "the messengers", ur: "رسولوں" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive", number: "plural", definite: true, type: "passive_participle", form: "IV" }, grammarExplanations: { en: "Object of preposition - passive participle Form IV 'those who are sent'", ur: "مجرور - اسم مفعول باب افعال 'بھیجے گئے'" } }
    ],
    structure: { diagram: ["EMPH-CLAUSE"], explanation: "The answer to the oath - confirming Muhammad's prophethood with double emphasis" },
    structure: {
      relationships: [],
    },
  },

  4: {
    ayahNumber: 4,
    text: "عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
    translation: { en: "On a straight path.", ur: "سیدھی راہ پر" },
    words: [
      { id: "36:4:1", position: 1, arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "On", ur: "پر" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition indicating position/state", ur: "حرف جار - حالت کی نشاندہی" } },
      { id: "36:4:2", position: 2, arabic: "صِرَاطٍ", transliteration: "ṣirāṭin", root: "ص ر ط", meaning: { en: "a path", ur: "راہ" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "36:4:3", position: 3, arabic: "مُّسْتَقِيمٍ", transliteration: "mustaqīmin", root: "ق و م", meaning: { en: "straight", ur: "سیدھی" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "adjective", features: { case: "genitive", type: "active_participle", form: "X" }, grammarExplanations: { en: "Adjective - active participle Form X 'upright, straight'", ur: "صفت - اسم فاعل باب استفعال 'سیدھا'" } }
    ],
    structure: { diagram: ["PREP-PHRASE"], explanation: "Continuation - the Prophet is on the straight path (connected to previous ayah)" ,
       relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    }
  },

  5: {
    ayahNumber: 5,
    text: "تَنزِيلَ الْعَزِيزِ الرَّحِيمِ",
    translation: { en: "[This is] a revelation of the Exalted in Might, the Merciful,", ur: "اس کا اتارا ہوا جو غالب مہربان ہے" },
    words: [
      { id: "36:5:1", position: 1, arabic: "تَنزِيلَ", transliteration: "tanzīla", root: "ن ز ل", meaning: { en: "A revelation", ur: "اتارا ہوا" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative", pattern: "تَفْعِيل", form: "II" }, grammarExplanations: { en: "Accusative - either مفعول مطلق or object of implied verb, Form II verbal noun", ur: "منصوب - مفعول مطلق یا مفعول فعل محذوف، مصدر باب تفعیل" } },
      { id: "36:5:2", position: 2, arabic: "الْعَزِيزِ", transliteration: "al-ʿazīzi", root: "ع ز ز", meaning: { en: "of the Exalted in Might", ur: "غالب" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "mudaf_ilayh", features: { case: "genitive", definite: true, pattern: "فَعِيل" }, grammarExplanations: { en: "Genitive in idafa - divine attribute 'the Almighty'", ur: "مضاف الیہ - صفت الٰہی 'غالب'" } },
      { id: "36:5:3", position: 3, arabic: "الرَّحِيمِ", transliteration: "ar-raḥīmi", root: "ر ح م", meaning: { en: "the Merciful", ur: "مہربان" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "apposition", features: { case: "genitive", definite: true, pattern: "فَعِيل" }, grammarExplanations: { en: "Apposition - second divine attribute 'the Most Merciful'", ur: "بدل - صفت الٰہی ثانی 'مہربان'" } }
    ],
    structure: { diagram: ["N-MUDAF-ILAYH"], explanation: "Description of the Quran's source - from the Almighty and Merciful" ,
       relationships: [
        { from: 1, to: 2, label: 'موصوف + صفت' },
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 3, label: 'بدل' }
      ],
    }
  },

  6: {
    ayahNumber: 6,
    text: "لِتُنذِرَ قَوْمًا مَّا أُنذِرَ آبَاؤُهُمْ فَهُمْ غَافِلُونَ",
    translation: { en: "That you may warn a people whose forefathers were not warned, so they are unaware.", ur: "تاکہ تم ایسی قوم کو ڈراؤ جن کے باپ دادا نہیں ڈرائے گئے پس وہ غافل ہیں" },
    words: [
      { id: "36:6:1", position: 1, arabic: "لِتُنذِرَ", transliteration: "li-tundhira", root: "ن ذ ر", meaning: { en: "That you may warn", ur: "تاکہ تم ڈراؤ" }, pos: ["PREP", "V"], posLabel: "PREP+V", grammarRole: "purpose", features: { aspect: "imperfect", mood: "subjunctive", form: "IV" }, grammarExplanations: { en: "Lam of purpose + subjunctive verb Form IV 'to warn'", ur: "لام تعلیل + فعل مضارع منصوب باب افعال 'ڈرانا'" } },
      { id: "36:6:2", position: 2, arabic: "قَوْمًا", transliteration: "qawman", root: "ق و م", meaning: { en: "a people", ur: "قوم کو" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } },
      { id: "36:6:3", position: 3, arabic: "مَّا", transliteration: "mā", meaning: { en: "not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative particle - negating past action", ur: "حرف نفی - ماضی کی نفی" } },
      { id: "36:6:4", position: 4, arabic: "أُنذِرَ", transliteration: "undhira", root: "ن ذ ر", meaning: { en: "were warned", ur: "ڈرائے گئے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect", voice: "passive", form: "IV" }, grammarExplanations: { en: "Passive perfect Form IV", ur: "فعل ماضی مجہول باب افعال" } },
      { id: "36:6:5", position: 5, arabic: "آبَاؤُهُمْ", transliteration: "ābāʾuhum", root: "أ ب و", meaning: { en: "their forefathers", ur: "ان کے باپ دادا" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "subject", features: { case: "nominative", number: "plural" }, grammarExplanations: { en: "Subject of passive verb (نائب فاعل)", ur: "نائب فاعل" } },
      { id: "36:6:6", position: 6, arabic: "فَهُمْ", transliteration: "fa-hum", meaning: { en: "so they", ur: "پس وہ" }, pos: ["CONJ", "PRON"], posLabel: "CONJ+PRON", grammarRole: "subject", grammarExplanations: { en: "Result conjunction + pronoun subject", ur: "فاء + ضمیر مبتدأ" } },
      { id: "36:6:7", position: 7, arabic: "غَافِلُونَ", transliteration: "ghāfilūna", root: "غ ف ل", meaning: { en: "are unaware", ur: "غافل ہیں" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "predicate", features: { case: "nominative", number: "plural", type: "active_participle" }, grammarExplanations: { en: "Predicate - active participle 'heedless ones'", ur: "خبر - اسم فاعل 'غافل'" } }
    ],
    structure: { diagram: ["PURPOSE", "REL-CLAUSE", "RESULT"], explanation: "Purpose of revelation - to warn those whose ancestors were not warned" ,
       relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 4, to: 6, label: 'فعل + فاعل' },
        { from: 5, to: 7, label: 'مبتدأ + خبر' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' }
      ],
    }
  },

  7: {
    ayahNumber: 7,
    text: "لَقَدْ حَقَّ الْقَوْلُ عَلَىٰ أَكْثَرِهِمْ فَهُمْ لَا يُؤْمِنُونَ",
    translation: { en: "Already the word has come into effect upon most of them, so they do not believe.", ur: "یقیناً ان میں سے اکثر پر بات ثابت ہو چکی ہے پس وہ ایمان نہیں لاتے" },
    words: [
      { id: "36:7:1", position: 1, arabic: "لَقَدْ", transliteration: "laqad", meaning: { en: "Already", ur: "یقیناً" }, pos: ["EMPH", "CERT"], posLabel: "EMPH+CERT", grammarRole: "emphasis", grammarExplanations: { en: "Lam of oath + قد for emphasis - 'indeed certainly'", ur: "لام قسم + قد تحقیقیہ - 'یقیناً'" } },
      { id: "36:7:2", position: 2, arabic: "حَقَّ", transliteration: "ḥaqqa", root: "ح ق ق", meaning: { en: "has come into effect", ur: "ثابت ہو چکی" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect verb - 'has become true/binding'", ur: "فعل ماضی - 'ثابت ہونا'" } },
      { id: "36:7:3", position: 3, arabic: "الْقَوْلُ", transliteration: "al-qawlu", root: "ق و ل", meaning: { en: "the word", ur: "بات" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative", definite: true }, grammarExplanations: { en: "Subject of حقّ - refers to Allah's decree", ur: "فاعل - اللہ کا فیصلہ" } },
      { id: "36:7:4", position: 4, arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition indicating against/upon", ur: "حرف جار" } },
      { id: "36:7:5", position: 5, arabic: "أَكْثَرِهِمْ", transliteration: "aktharihim", root: "ك ث ر", meaning: { en: "most of them", ur: "ان میں سے اکثر" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "genitive", features: { case: "genitive", degree: "comparative" }, grammarExplanations: { en: "Object of preposition + pronoun - elative 'most'", ur: "مجرور + ضمیر - صفت تفضیل 'اکثر'" } },
      { id: "36:7:6", position: 6, arabic: "فَهُمْ", transliteration: "fa-hum", meaning: { en: "so they", ur: "پس وہ" }, pos: ["CONJ", "PRON"], posLabel: "CONJ+PRON", grammarRole: "subject", grammarExplanations: { en: "Result + pronoun subject", ur: "فاء + ضمیر مبتدأ" } },
      { id: "36:7:7", position: 7, arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative particle", ur: "حرف نفی" } },
      { id: "36:7:8", position: 8, arabic: "يُؤْمِنُونَ", transliteration: "yuʾminūna", root: "أ م ن", meaning: { en: "believe", ur: "ایمان لاتے" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "imperfect", form: "IV", number: "plural" }, grammarExplanations: { en: "Imperfect verb Form IV - predicate", ur: "فعل مضارع باب افعال - خبر" } }
    ],
    structure: { diagram: ["EMPH-V-CLAUSE", "RESULT"], explanation: "Divine decree fulfilled - most will not believe" ,
       relationships: [
        { from: 1, to: 3, label: 'توکید' },
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 8, label: 'مبتدأ + خبر' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 8, label: 'مبتدأ + خبر' },
        { from: 7, to: 8, label: 'نفی + فعل' }
      ],
    }
  },

  8: {
    ayahNumber: 8,
    text: "إِنَّا جَعَلْنَا فِي أَعْنَاقِهِمْ أَغْلَالًا فَهِيَ إِلَى الْأَذْقَانِ فَهُم مُّقْمَحُونَ",
    translation: { en: "Indeed, We have put shackles on their necks, and they are to their chins, so they are with heads kept aloft.", ur: "ہم نے ان کی گردنوں میں طوق ڈال دیے جو ٹھوڑیوں تک ہیں پس وہ سر اٹھائے ہوئے ہیں" },
    words: [
      { id: "36:8:1", position: 1, arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بے شک ہم نے" }, pos: ["EMPH", "PRON"], posLabel: "EMPH+PRON", grammarRole: "emphasis", grammarExplanations: { en: "Emphatic particle + 'We' (royal plural)", ur: "حرف توکید + نون عظمت" } },
      { id: "36:8:2", position: 2, arabic: "جَعَلْنَا", transliteration: "jaʿalnā", root: "ج ع ل", meaning: { en: "have put", ur: "ڈال دیے" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "perfect", person: "1st", number: "plural" }, grammarExplanations: { en: "Perfect verb - predicate of إنا", ur: "فعل ماضی - خبر إنا" } },
      { id: "36:8:3", position: 3, arabic: "فِي", transliteration: "fī", meaning: { en: "on", ur: "میں" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition of place", ur: "حرف جار مکانی" } },
      { id: "36:8:4", position: 4, arabic: "أَعْنَاقِهِمْ", transliteration: "aʿnāqihim", root: "ع ن ق", meaning: { en: "their necks", ur: "ان کی گردنوں" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "genitive", features: { case: "genitive", number: "plural" }, grammarExplanations: { en: "Object of preposition + pronoun", ur: "مجرور + ضمیر" } },
      { id: "36:8:5", position: 5, arabic: "أَغْلَالًا", transliteration: "aghlālan", root: "غ ل ل", meaning: { en: "shackles", ur: "طوق" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative", number: "plural" }, grammarExplanations: { en: "Direct object - plural of غُلّ", ur: "مفعول به - جمع غُلّ" } },
      { id: "36:8:6", position: 6, arabic: "فَهِيَ", transliteration: "fa-hiya", meaning: { en: "and they", ur: "پس وہ" }, pos: ["CONJ", "PRON"], posLabel: "CONJ+PRON", grammarRole: "subject", grammarExplanations: { en: "Result + pronoun (referring to shackles)", ur: "فاء + ضمیر (طوق کی طرف راجع)" } },
      { id: "36:8:7", position: 7, arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "تک" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "predicate", grammarExplanations: { en: "Preposition - predicate", ur: "حرف جار - خبر" } },
      { id: "36:8:8", position: 8, arabic: "الْأَذْقَانِ", transliteration: "al-adhqāni", root: "ذ ق ن", meaning: { en: "the chins", ur: "ٹھوڑیوں" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive", number: "dual/plural", definite: true }, grammarExplanations: { en: "Object of preposition - جمع ذَقَن", ur: "مجرور - جمع ذَقَن" } },
      { id: "36:8:9", position: 9, arabic: "فَهُم", transliteration: "fa-hum", meaning: { en: "so they", ur: "پس وہ" }, pos: ["CONJ", "PRON"], posLabel: "CONJ+PRON", grammarRole: "subject", grammarExplanations: { en: "Result + pronoun subject", ur: "فاء + ضمیر مبتدأ" } },
      { id: "36:8:10", position: 10, arabic: "مُّقْمَحُونَ", transliteration: "muqmaḥūna", root: "ق م ح", meaning: { en: "with heads kept aloft", ur: "سر اٹھائے ہوئے" }, pos: ["N"], posLabel: "N", grammarRole: "predicate", features: { case: "nominative", number: "plural", type: "passive_participle", form: "IV" }, grammarExplanations: { en: "Predicate - passive participle Form IV 'with heads raised up'", ur: "خبر - اسم مفعول باب افعال 'سر اٹھائے'" } }
    ],
    structure: { diagram: ["EMPH-V-CLAUSE", "RESULT", "RESULT"], explanation: "Metaphor of spiritual bondage - unable to look down (at truth)" ,
       relationships: [
        { from: 2, to: 5, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مبتدأ + خبر' }
      ],
    }
  },

  9: {
    ayahNumber: 9,
    text: "وَجَعَلْنَا مِن بَيْنِ أَيْدِيهِمْ سَدًّا وَمِنْ خَلْفِهِمْ سَدًّا فَأَغْشَيْنَاهُمْ فَهُمْ لَا يُبْصِرُونَ",
    translation: { en: "And We have put before them a barrier and behind them a barrier and covered them, so they do not see.", ur: "اور ہم نے ان کے آگے ایک روک اور پیچھے ایک روک بنا دی پھر ہم نے ان کو ڈھانپ دیا پس وہ دیکھتے نہیں" },
    words: [
      { id: "36:9:1", position: 1, arabic: "وَجَعَلْنَا", transliteration: "wa-jaʿalnā", root: "ج ع ل", meaning: { en: "And We have put", ur: "اور ہم نے بنایا" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { aspect: "perfect", person: "1st", number: "plural" }, grammarExplanations: { en: "Conjunction + perfect verb", ur: "عطف + فعل ماضی" } },
      { id: "36:9:2", position: 2, arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition indicating direction", ur: "حرف جار" } },
      { id: "36:9:3", position: 3, arabic: "بَيْنِ", transliteration: "bayni", meaning: { en: "before", ur: "آگے" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Adverb of place in genitive", ur: "ظرف مکان مجرور" } },
      { id: "36:9:4", position: 4, arabic: "أَيْدِيهِمْ", transliteration: "aydīhim", root: "ي د ي", meaning: { en: "them", ur: "ان کے ہاتھوں" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "mudaf_ilayh", features: { case: "genitive", number: "plural" }, grammarExplanations: { en: "Genitive in idafa + pronoun (lit. 'their hands')", ur: "مضاف الیہ + ضمیر" } },
      { id: "36:9:5", position: 5, arabic: "سَدًّا", transliteration: "saddan", root: "س د د", meaning: { en: "a barrier", ur: "ایک روک" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } },
      { id: "36:9:6", position: 6, arabic: "وَمِنْ", transliteration: "wa-min", meaning: { en: "and from", ur: "اور سے" }, pos: ["CONJ", "PREP"], posLabel: "CONJ+PREP", grammarRole: "preposition", grammarExplanations: { en: "Conjunction + preposition", ur: "عطف + حرف جار" } },
      { id: "36:9:7", position: 7, arabic: "خَلْفِهِمْ", transliteration: "khalfihim", meaning: { en: "behind them", ur: "ان کے پیچھے" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Object of preposition + pronoun", ur: "مجرور + ضمیر" } },
      { id: "36:9:8", position: 8, arabic: "سَدًّا", transliteration: "saddan", root: "س د د", meaning: { en: "a barrier", ur: "ایک روک" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Direct object (repeated for emphasis)", ur: "مفعول به (تکرار برائے تاکید)" } },
      { id: "36:9:9", position: 9, arabic: "فَأَغْشَيْنَاهُمْ", transliteration: "fa-aghshaynāhum", root: "غ ش ي", meaning: { en: "and covered them", ur: "پھر ہم نے انہیں ڈھانپ دیا" }, pos: ["CONJ", "V", "PRON"], posLabel: "CONJ+V+PRON", grammarRole: "verb", features: { aspect: "perfect", form: "IV" }, grammarExplanations: { en: "Conjunction + perfect Form IV + object pronoun", ur: "فاء + فعل ماضی باب افعال + ضمیر مفعول" } },
      { id: "36:9:10", position: 10, arabic: "فَهُمْ", transliteration: "fa-hum", meaning: { en: "so they", ur: "پس وہ" }, pos: ["CONJ", "PRON"], posLabel: "CONJ+PRON", grammarRole: "subject", grammarExplanations: { en: "Result + pronoun subject", ur: "فاء + ضمیر مبتدأ" } },
      { id: "36:9:11", position: 11, arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative particle", ur: "حرف نفی" } },
      { id: "36:9:12", position: 12, arabic: "يُبْصِرُونَ", transliteration: "yubṣirūna", root: "ب ص ر", meaning: { en: "see", ur: "دیکھتے" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "imperfect", form: "IV", number: "plural" }, grammarExplanations: { en: "Imperfect verb Form IV - predicate", ur: "فعل مضارع باب افعال - خبر" } }
    ],
    structure: { diagram: ["V-CLAUSE", "V-CLAUSE", "RESULT"], explanation: "Complete spiritual blindness - barriers in all directions + covering their sight" ,
       relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 1, to: 9, label: 'عطف' },
        { from: 10, to: 12, label: 'مبتدأ + خبر' },
        { from: 11, to: 12, label: 'نفی + فعل' }
      ],
    }
  },

  10: {
    ayahNumber: 10,
    text: "وَسَوَاءٌ عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ",
    translation: { en: "And it is all the same for them whether you warn them or do not warn them - they will not believe.", ur: "اور ان پر برابر ہے چاہے تم انہیں ڈراؤ یا نہ ڈراؤ وہ ایمان نہیں لائیں گے" },
    words: [
      { id: "36:10:1", position: 1, arabic: "وَسَوَاءٌ", transliteration: "wa-sawāʾun", root: "س و ي", meaning: { en: "And it is all the same", ur: "اور برابر ہے" }, pos: ["CONJ", "N"], posLabel: "CONJ+N", grammarRole: "predicate", features: { case: "nominative" }, grammarExplanations: { en: "Conjunction + predicate (fronted)", ur: "عطف + خبر مقدم" } },
      { id: "36:10:2", position: 2, arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "for them", ur: "ان پر" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:10:3", position: 3, arabic: "أَأَنذَرْتَهُمْ", transliteration: "a-andhartahum", root: "ن ذ ر", meaning: { en: "whether you warn them", ur: "چاہے تم انہیں ڈراؤ" }, pos: ["INTERROG", "V", "PRON"], posLabel: "INTERROG+V+PRON", grammarRole: "subject", features: { aspect: "perfect", form: "IV" }, grammarExplanations: { en: "Interrogative + perfect Form IV + object - subject of سواء", ur: "استفہام + فعل ماضی باب افعال + ضمیر - مبتدأ" } },
      { id: "36:10:4", position: 4, arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا" }, pos: ["CONJ"], posLabel: "CONJ", grammarRole: "disjunction", grammarExplanations: { en: "Disjunctive particle (المعادِلة)", ur: "حرف عطف (معادلہ)" } },
      { id: "36:10:5", position: 5, arabic: "لَمْ", transliteration: "lam", meaning: { en: "do not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative jussive particle", ur: "حرف جزم و نفی" } },
      { id: "36:10:6", position: 6, arabic: "تُنذِرْهُمْ", transliteration: "tundhirhum", root: "ن ذ ر", meaning: { en: "warn them", ur: "ڈراؤ" }, pos: ["V", "PRON"], posLabel: "V+PRON", grammarRole: "verb", features: { aspect: "imperfect", mood: "jussive", form: "IV" }, grammarExplanations: { en: "Jussive verb Form IV + object", ur: "فعل مضارع مجزوم باب افعال + ضمیر" } },
      { id: "36:10:7", position: 7, arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative particle", ur: "حرف نفی" } },
      { id: "36:10:8", position: 8, arabic: "يُؤْمِنُونَ", transliteration: "yuʾminūna", root: "أ م ن", meaning: { en: "they will believe", ur: "وہ ایمان لائیں گے" }, pos: ["V"], posLabel: "V", grammarRole: "clause", features: { aspect: "imperfect", form: "IV", number: "plural" }, grammarExplanations: { en: "Imperfect verb Form IV - result clause", ur: "فعل مضارع باب افعال - جواب" } }
    ],
    structure: { diagram: ["NOM-SENT", "DISJUNCT", "RESULT"], explanation: "Futility of warning the obstinate - whether warned or not, they refuse" ,
       relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'نفی + فعل' }
      ],
    }
  },

  11: {
    ayahNumber: 11,
    text: "إِنَّمَا تُنذِرُ مَنِ اتَّبَعَ الذِّكْرَ وَخَشِيَ الرَّحْمَٰنَ بِالْغَيْبِ",
    translation: { en: "You can only warn one who follows the message and fears the Most Merciful unseen.", ur: "تو صرف اسے ڈراتا ہے جو نصیحت کی پیروی کرے اور بن دیکھے رحمٰن سے ڈرے" },
    words: [
      { id: "36:11:1", position: 1, arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "You can only", ur: "بس تو صرف" }, pos: ["PART"], posLabel: "PART", grammarRole: "restriction", grammarExplanations: { en: "Restriction particle - limits the action", ur: "ادات حصر" } },
      { id: "36:11:2", position: 2, arabic: "تُنذِرُ", transliteration: "tundhiru", root: "ن ذ ر", meaning: { en: "warn", ur: "ڈراتا ہے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect", form: "IV" }, grammarExplanations: { en: "Imperfect verb Form IV", ur: "فعل مضارع باب افعال" } },
      { id: "36:11:3", position: 3, arabic: "مَنِ", transliteration: "mani", meaning: { en: "one who", ur: "جو شخص" }, pos: ["REL"], posLabel: "REL", grammarRole: "object", grammarExplanations: { en: "Relative pronoun - object of تنذر", ur: "اسم موصول - مفعول" } },
      { id: "36:11:4", position: 4, arabic: "اتَّبَعَ", transliteration: "ittabaʿa", root: "ت ب ع", meaning: { en: "follows", ur: "پیروی کرے" }, pos: ["V"], posLabel: "V", grammarRole: "sila", features: { aspect: "perfect", form: "VIII" }, grammarExplanations: { en: "Perfect verb Form VIII - relative clause", ur: "فعل ماضی باب افتعال - صلہ موصول" } },
      { id: "36:11:5", position: 5, arabic: "الذِّكْرَ", transliteration: "adh-dhikra", root: "ذ ك ر", meaning: { en: "the message", ur: "نصیحت" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative", definite: true }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } },
      { id: "36:11:6", position: 6, arabic: "وَخَشِيَ", transliteration: "wa-khashiya", root: "خ ش ي", meaning: { en: "and fears", ur: "اور ڈرے" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Conjunction + perfect verb", ur: "عطف + فعل ماضی" } },
      { id: "36:11:7", position: 7, arabic: "الرَّحْمَٰنَ", transliteration: "ar-raḥmāna", root: "ر ح م", meaning: { en: "the Most Merciful", ur: "رحمٰن سے" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative", definite: true }, grammarExplanations: { en: "Direct object - divine name", ur: "مفعول به - اسم الٰہی" } },
      { id: "36:11:8", position: 8, arabic: "بِالْغَيْبِ", transliteration: "bil-ghaybi", root: "غ ي ب", meaning: { en: "unseen", ur: "بن دیکھے" }, pos: ["PREP", "N"], posLabel: "PREP+N", grammarRole: "adverbial", features: { case: "genitive" }, grammarExplanations: { en: "Prepositional phrase - 'in the unseen'", ur: "جار مجرور - حالیہ" } }
    ],
    structure: { diagram: ["RESTRICTION", "REL-CLAUSE"], explanation: "Only those who follow guidance and fear Allah benefit from warning",
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'فعل + مفعول به' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "إِنَّا نَحْنُ نُحْيِي الْمَوْتَىٰ وَنَكْتُبُ مَا قَدَّمُوا وَآثَارَهُمْ",
    translation: { en: "Indeed, it is We who bring the dead to life and record what they have put forth and their footprints.", ur: "بے شک ہم ہی مردوں کو زندہ کریں گے اور جو انہوں نے آگے بھیجا اور جو نشانیاں چھوڑیں سب لکھ لیتے ہیں" },
    words: [
      { id: "36:12:1", position: 1, arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بے شک ہم" }, pos: ["EMPH", "PRON"], posLabel: "EMPH+PRON", grammarRole: "emphasis", grammarExplanations: { en: "Emphatic particle + We", ur: "حرف توکید + نون عظمت" } },
      { id: "36:12:2", position: 2, arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "We", ur: "ہم ہی" }, pos: ["PRON"], posLabel: "PRON", grammarRole: "emphasis", grammarExplanations: { en: "Pronoun of separation for emphasis", ur: "ضمیر فصل تاکید کے لیے" } },
      { id: "36:12:3", position: 3, arabic: "نُحْيِي", transliteration: "nuḥyī", root: "ح ي ي", meaning: { en: "bring to life", ur: "زندہ کریں گے" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "imperfect", form: "IV" }, grammarExplanations: { en: "Imperfect Form IV - predicate of إنّ", ur: "فعل مضارع باب افعال - خبر إن" } },
      { id: "36:12:4", position: 4, arabic: "الْمَوْتَىٰ", transliteration: "al-mawtā", root: "م و ت", meaning: { en: "the dead", ur: "مردوں کو" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative", definite: true }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } },
      { id: "36:12:5", position: 5, arabic: "وَنَكْتُبُ", transliteration: "wa-naktubu", root: "ك ت ب", meaning: { en: "and record", ur: "اور لکھتے ہیں" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { aspect: "imperfect" }, grammarExplanations: { en: "Conjunction + imperfect verb", ur: "عطف + فعل مضارع" } },
      { id: "36:12:6", position: 6, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو" }, pos: ["REL"], posLabel: "REL", grammarRole: "object", grammarExplanations: { en: "Relative pronoun - object of نكتب", ur: "اسم موصول - مفعول" } },
      { id: "36:12:7", position: 7, arabic: "قَدَّمُوا", transliteration: "qaddamū", root: "ق د م", meaning: { en: "they put forth", ur: "انہوں نے آگے بھیجا" }, pos: ["V"], posLabel: "V", grammarRole: "sila", features: { aspect: "perfect", form: "II" }, grammarExplanations: { en: "Perfect verb Form II - relative clause", ur: "فعل ماضی باب تفعیل - صلہ" } },
      { id: "36:12:8", position: 8, arabic: "وَآثَارَهُمْ", transliteration: "wa-āthārahum", root: "أ ث ر", meaning: { en: "and their footprints", ur: "اور ان کے نشانات" }, pos: ["CONJ", "N", "PRON"], posLabel: "CONJ+N+PRON", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Conjoined object + possessive pronoun", ur: "مفعول معطوف + ضمیر" } }
    ],
    structure: { diagram: ["EMPH-V-CLAUSE"], explanation: "Allah records all deeds and their traces",
      relationships: [
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'موصول + صلة' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "وَاضْرِبْ لَهُم مَّثَلًا أَصْحَابَ الْقَرْيَةِ إِذْ جَاءَهَا الْمُرْسَلُونَ",
    translation: { en: "And present to them an example: the people of the city, when the messengers came to it.", ur: "اور ان کے سامنے اس بستی والوں کی مثال بیان کرو جب اس میں رسول آئے" },
    words: [
      { id: "36:13:1", position: 1, arabic: "وَاضْرِبْ", transliteration: "wa-ḍrib", root: "ض ر ب", meaning: { en: "And present", ur: "اور بیان کرو" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { mood: "imperative" }, grammarExplanations: { en: "Conjunction + imperative verb", ur: "عطف + فعل امر" } },
      { id: "36:13:2", position: 2, arabic: "لَهُم", transliteration: "lahum", meaning: { en: "to them", ur: "ان کے لیے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:13:3", position: 3, arabic: "مَّثَلًا", transliteration: "mathalan", root: "م ث ل", meaning: { en: "an example", ur: "مثال" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } },
      { id: "36:13:4", position: 4, arabic: "أَصْحَابَ", transliteration: "aṣḥāba", root: "ص ح ب", meaning: { en: "the people of", ur: "والوں کی" }, pos: ["N"], posLabel: "N", grammarRole: "apposition", features: { case: "accusative" }, grammarExplanations: { en: "Apposition to مثلا or second object", ur: "بدل یا مفعول ثانی" } },
      { id: "36:13:5", position: 5, arabic: "الْقَرْيَةِ", transliteration: "al-qaryati", root: "ق ر ي", meaning: { en: "the city", ur: "بستی" }, pos: ["N"], posLabel: "N", grammarRole: "mudaf_ilayh", features: { case: "genitive", definite: true }, grammarExplanations: { en: "Genitive in idafa", ur: "مضاف إليه" } },
      { id: "36:13:6", position: 6, arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "جب" }, pos: ["ADV"], posLabel: "ADV", grammarRole: "adverb", grammarExplanations: { en: "Adverb of time", ur: "ظرف زمان" } },
      { id: "36:13:7", position: 7, arabic: "جَاءَهَا", transliteration: "jāʾahā", root: "ج ي أ", meaning: { en: "came to it", ur: "اس میں آئے" }, pos: ["V", "PRON"], posLabel: "V+PRON", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect verb + object pronoun", ur: "فعل ماضی + ضمیر مفعول" } },
      { id: "36:13:8", position: 8, arabic: "الْمُرْسَلُونَ", transliteration: "al-mursalūna", root: "ر س ل", meaning: { en: "the messengers", ur: "رسول" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative", number: "plural", type: "passive_participle", form: "IV" }, grammarExplanations: { en: "Subject - passive participle Form IV", ur: "فاعل - اسم مفعول باب افعال" } }
    ],
    structure: { diagram: ["IMPERATIVE", "NARRATIVE"], explanation: "Beginning of the parable of the city (Antioch)",
      relationships: [
        { from: 1, to: 3, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "إِذْ أَرْسَلْنَا إِلَيْهِمُ اثْنَيْنِ فَكَذَّبُوهُمَا فَعَزَّزْنَا بِثَالِثٍ",
    translation: { en: "When We sent to them two but they denied them, so We strengthened them with a third.", ur: "جب ہم نے ان کی طرف دو بھیجے تو انہوں نے جھٹلایا پھر تیسرے سے تقویت دی" },
    words: [
      { id: "36:14:1", position: 1, arabic: "إِذْ", transliteration: "idh", meaning: { en: "When", ur: "جب" }, pos: ["ADV"], posLabel: "ADV", grammarRole: "adverb", grammarExplanations: { en: "Adverb of time", ur: "ظرف زمان" } },
      { id: "36:14:2", position: 2, arabic: "أَرْسَلْنَا", transliteration: "arsalnā", root: "ر س ل", meaning: { en: "We sent", ur: "ہم نے بھیجے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect", form: "IV" }, grammarExplanations: { en: "Perfect verb Form IV", ur: "فعل ماضی باب افعال" } },
      { id: "36:14:3", position: 3, arabic: "إِلَيْهِمُ", transliteration: "ilayhimu", meaning: { en: "to them", ur: "ان کی طرف" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:14:4", position: 4, arabic: "اثْنَيْنِ", transliteration: "ithnayni", meaning: { en: "two", ur: "دو" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative", number: "dual" }, grammarExplanations: { en: "Direct object - dual", ur: "مفعول به - مثنی" } },
      { id: "36:14:5", position: 5, arabic: "فَكَذَّبُوهُمَا", transliteration: "fa-kadhdhabūhumā", root: "ك ذ ب", meaning: { en: "but they denied them", ur: "تو جھٹلایا" }, pos: ["CONJ", "V", "PRON"], posLabel: "CONJ+V+PRON", grammarRole: "verb", features: { aspect: "perfect", form: "II" }, grammarExplanations: { en: "Result + perfect Form II + dual object", ur: "فاء + فعل ماضی باب تفعیل + ضمیر مثنی" } },
      { id: "36:14:6", position: 6, arabic: "فَعَزَّزْنَا", transliteration: "fa-ʿazzaznā", root: "ع ز ز", meaning: { en: "so We strengthened", ur: "پھر تقویت دی" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { aspect: "perfect", form: "II" }, grammarExplanations: { en: "Result + perfect Form II", ur: "فاء + فعل ماضی باب تفعیل" } },
      { id: "36:14:7", position: 7, arabic: "بِثَالِثٍ", transliteration: "bi-thālithin", meaning: { en: "with a third", ur: "تیسرے سے" }, pos: ["PREP", "N"], posLabel: "PREP+N", grammarRole: "preposition", features: { case: "genitive" }, grammarExplanations: { en: "Preposition + ordinal number", ur: "جار + عدد ترتیبی" } }
    ],
    structure: { diagram: ["TIME-CLAUSE", "RESULT", "RESULT"], explanation: "Sequence: sent two, denied, reinforced with third",
      relationships: [
        { from: 2, to: 4, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'فعل + جار مجرور' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "فَقَالُوا إِنَّا إِلَيْكُم مُّرْسَلُونَ",
    translation: { en: "They said, 'Indeed, we are messengers to you.'", ur: "انہوں نے کہا ہم تمہاری طرف بھیجے گئے ہیں" },
    words: [
      { id: "36:15:1", position: 1, arabic: "فَقَالُوا", transliteration: "fa-qālū", root: "ق و ل", meaning: { en: "They said", ur: "انہوں نے کہا" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Conjunction + perfect verb", ur: "فاء + فعل ماضی" } },
      { id: "36:15:2", position: 2, arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, we", ur: "بے شک ہم" }, pos: ["EMPH", "PRON"], posLabel: "EMPH+PRON", grammarRole: "emphasis", grammarExplanations: { en: "Emphatic + pronoun", ur: "حرف توکید + ضمیر" } },
      { id: "36:15:3", position: 3, arabic: "إِلَيْكُم", transliteration: "ilaykum", meaning: { en: "to you", ur: "تمہاری طرف" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:15:4", position: 4, arabic: "مُّرْسَلُونَ", transliteration: "mursalūna", root: "ر س ل", meaning: { en: "messengers", ur: "بھیجے گئے ہیں" }, pos: ["N"], posLabel: "N", grammarRole: "predicate", features: { case: "nominative", type: "passive_participle", form: "IV" }, grammarExplanations: { en: "Predicate of إنّ", ur: "خبر إن" } }
    ],
    structure: { diagram: ["SPEECH"], explanation: "Messengers declare their mission",
      relationships: [{ from: 2, to: 4, label: 'مبتدأ + خبر' }]
    }
  },

  16: {
    ayahNumber: 16,
    text: "قَالُوا مَا أَنتُمْ إِلَّا بَشَرٌ مِّثْلُنَا وَمَا أَنزَلَ الرَّحْمَٰنُ مِن شَيْءٍ إِنْ أَنتُمْ إِلَّا تَكْذِبُونَ",
    translation: { en: "They said, 'You are not but human beings like us, and the Most Merciful has not revealed anything. You are only telling lies.'", ur: "انہوں نے کہا تم تو بس ہمارے جیسے انسان ہو اور رحمٰن نے کچھ نہیں اتارا تم صرف جھوٹ بولتے ہو" },
    words: [
      { id: "36:16:1", position: 1, arabic: "قَالُوا", transliteration: "qālū", root: "ق و ل", meaning: { en: "They said", ur: "انہوں نے کہا" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect verb", ur: "فعل ماضی" } },
      { id: "36:16:2", position: 2, arabic: "مَا", transliteration: "mā", meaning: { en: "not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative particle", ur: "حرف نفی" } },
      { id: "36:16:3", position: 3, arabic: "أَنتُمْ", transliteration: "antum", meaning: { en: "you are", ur: "تم" }, pos: ["PRON"], posLabel: "PRON", grammarRole: "subject", grammarExplanations: { en: "Pronoun subject", ur: "ضمیر مبتدأ" } },
      { id: "36:16:4", position: 4, arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "سوائے" }, pos: ["EXCEPT"], posLabel: "EXCEPT", grammarRole: "exception", grammarExplanations: { en: "Exception - ما...إلا = only", ur: "استثناء" } },
      { id: "36:16:5", position: 5, arabic: "بَشَرٌ", transliteration: "basharun", root: "ب ش ر", meaning: { en: "human beings", ur: "انسان" }, pos: ["N"], posLabel: "N", grammarRole: "predicate", features: { case: "nominative" }, grammarExplanations: { en: "Predicate", ur: "خبر" } },
      { id: "36:16:6", position: 6, arabic: "مِّثْلُنَا", transliteration: "mithlunā", root: "م ث ل", meaning: { en: "like us", ur: "ہمارے جیسے" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "adjective", features: { case: "nominative" }, grammarExplanations: { en: "Adjective for بشر", ur: "صفت بشر کی" } },
      { id: "36:16:7", position: 7, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "and not", ur: "اور نہیں" }, pos: ["CONJ", "NEG"], posLabel: "CONJ+NEG", grammarRole: "negation", grammarExplanations: { en: "Conjunction + negation", ur: "عطف + نفی" } },
      { id: "36:16:8", position: 8, arabic: "أَنزَلَ", transliteration: "anzala", root: "ن ز ل", meaning: { en: "has revealed", ur: "اتارا" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect", form: "IV" }, grammarExplanations: { en: "Perfect Form IV", ur: "فعل ماضی باب افعال" } },
      { id: "36:16:9", position: 9, arabic: "الرَّحْمَٰنُ", transliteration: "ar-raḥmānu", root: "ر ح م", meaning: { en: "the Most Merciful", ur: "رحمٰن نے" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject", ur: "فاعل" } },
      { id: "36:16:10", position: 10, arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Extra preposition for emphasis", ur: "من زائدہ تاکید" } },
      { id: "36:16:11", position: 11, arabic: "شَيْءٍ", transliteration: "shayʾin", root: "ش ي أ", meaning: { en: "thing", ur: "چیز" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "genitive" }, grammarExplanations: { en: "Object in genitive (due to من)", ur: "مفعول مجرور بمن" } },
      { id: "36:16:12", position: 12, arabic: "إِنْ", transliteration: "in", meaning: { en: "not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative (= ما)", ur: "حرف نفی (= ما)" } },
      { id: "36:16:13", position: 13, arabic: "أَنتُمْ", transliteration: "antum", meaning: { en: "you", ur: "تم" }, pos: ["PRON"], posLabel: "PRON", grammarRole: "subject", grammarExplanations: { en: "Pronoun subject", ur: "ضمیر مبتدأ" } },
      { id: "36:16:14", position: 14, arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "سوائے" }, pos: ["EXCEPT"], posLabel: "EXCEPT", grammarRole: "exception", grammarExplanations: { en: "Exception particle", ur: "ادات استثناء" } },
      { id: "36:16:15", position: 15, arabic: "تَكْذِبُونَ", transliteration: "takdhibūna", root: "ك ذ ب", meaning: { en: "telling lies", ur: "جھوٹ بولتے ہو" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect verb - predicate", ur: "فعل مضارع - خبر" } }
    ],
    structure: { diagram: ["SPEECH", "NEGATION", "NEGATION"], explanation: "Disbelievers reject: you're just humans, nothing was revealed",
      relationships: [
        { from: 2, to: 5, label: 'نفی + خبر' },
        { from: 7, to: 8, label: 'نفی + فعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "قَالُوا رَبُّنَا يَعْلَمُ إِنَّا إِلَيْكُمْ لَمُرْسَلُونَ",
    translation: { en: "They said, 'Our Lord knows that we are messengers to you.'", ur: "انہوں نے کہا ہمارا رب جانتا ہے کہ ہم تمہاری طرف بھیجے گئے ہیں" },
    words: [
      { id: "36:17:1", position: 1, arabic: "قَالُوا", transliteration: "qālū", root: "ق و ل", meaning: { en: "They said", ur: "انہوں نے کہا" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect verb", ur: "فعل ماضی" } },
      { id: "36:17:2", position: 2, arabic: "رَبُّنَا", transliteration: "rabbunā", root: "ر ب ب", meaning: { en: "Our Lord", ur: "ہمارا رب" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject + possessive", ur: "مبتدأ + ضمیر" } },
      { id: "36:17:3", position: 3, arabic: "يَعْلَمُ", transliteration: "yaʿlamu", root: "ع ل م", meaning: { en: "knows", ur: "جانتا ہے" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect verb - predicate", ur: "فعل مضارع - خبر" } },
      { id: "36:17:4", position: 4, arabic: "إِنَّا", transliteration: "innā", meaning: { en: "that we are", ur: "بے شک ہم" }, pos: ["EMPH", "PRON"], posLabel: "EMPH+PRON", grammarRole: "emphasis", grammarExplanations: { en: "Emphatic + pronoun (quoted speech)", ur: "حرف توکید + ضمیر (مقولہ)" } },
      { id: "36:17:5", position: 5, arabic: "إِلَيْكُمْ", transliteration: "ilaykum", meaning: { en: "to you", ur: "تمہاری طرف" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:17:6", position: 6, arabic: "لَمُرْسَلُونَ", transliteration: "la-mursalūna", root: "ر س ل", meaning: { en: "surely messengers", ur: "یقیناً بھیجے گئے ہیں" }, pos: ["EMPH", "N"], posLabel: "EMPH+N", grammarRole: "predicate", features: { case: "nominative", type: "passive_participle", form: "IV" }, grammarExplanations: { en: "Emphatic لَ + predicate of إنّ", ur: "لام توکید + خبر إن" } }
    ],
    structure: { diagram: ["SPEECH", "EMPH-CLAUSE"], explanation: "Messengers invoke Allah as witness to their truthfulness",
      relationships: [
        { from: 2, to: 3, label: 'مبتدأ + خبر' },
        { from: 4, to: 6, label: 'مبتدأ + خبر' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "قَالُوا إِنَّا تَطَيَّرْنَا بِكُمْ ۖ لَئِن لَّمْ تَنتَهُوا لَنَرْجُمَنَّكُمْ وَلَيَمَسَّنَّكُم مِّنَّا عَذَابٌ أَلِيمٌ",
    translation: { en: "They said, 'Indeed, we consider you a bad omen. If you do not desist, we will surely stone you, and there will touch you a painful punishment from us.'", ur: "کہا ہم تمہیں منحوس سمجھتے ہیں اگر باز نہ آئے تو پتھر مار مار کر مار ڈالیں گے اور ہماری طرف سے دردناک عذاب پہنچے گا" },
    words: [
      { id: "36:18:1", position: 1, arabic: "قَالُوا", transliteration: "qālū", root: "ق و ل", meaning: { en: "They said", ur: "انہوں نے کہا" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect verb", ur: "فعل ماضی" } },
      { id: "36:18:2", position: 2, arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, we", ur: "بے شک ہم" }, pos: ["EMPH", "PRON"], posLabel: "EMPH+PRON", grammarRole: "emphasis", grammarExplanations: { en: "Emphatic + pronoun", ur: "حرف توکید + ضمیر" } },
      { id: "36:18:3", position: 3, arabic: "تَطَيَّرْنَا", transliteration: "taṭayyarnā", root: "ط ي ر", meaning: { en: "consider you a bad omen", ur: "منحوس سمجھتے ہیں" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "perfect", form: "V" }, grammarExplanations: { en: "Perfect Form V - predicate of إن", ur: "فعل ماضی باب تفعّل - خبر إن" } },
      { id: "36:18:4", position: 4, arabic: "بِكُمْ", transliteration: "bikum", meaning: { en: "of you", ur: "تم سے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:18:5", position: 5, arabic: "لَئِن", transliteration: "la-in", meaning: { en: "If indeed", ur: "اگر واقعی" }, pos: ["EMPH", "COND"], posLabel: "EMPH+COND", grammarRole: "conditional", grammarExplanations: { en: "Emphatic لَ + conditional", ur: "لام قسم + شرط" } },
      { id: "36:18:6", position: 6, arabic: "لَّمْ", transliteration: "lam", meaning: { en: "not", ur: "نہ" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Jussive particle", ur: "حرف جزم ونفی" } },
      { id: "36:18:7", position: 7, arabic: "تَنتَهُوا", transliteration: "tantahū", root: "ن ه ي", meaning: { en: "you desist", ur: "باز آؤ" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect", mood: "jussive", form: "VIII" }, grammarExplanations: { en: "Jussive Form VIII", ur: "فعل مضارع مجزوم باب افتعال" } },
      { id: "36:18:8", position: 8, arabic: "لَنَرْجُمَنَّكُمْ", transliteration: "la-narjumannakum", root: "ر ج م", meaning: { en: "we will surely stone you", ur: "یقیناً تمہیں سنگسار کریں گے" }, pos: ["EMPH", "V", "PRON"], posLabel: "EMPH+V+PRON", grammarRole: "jawab_shart", features: { form: "I" }, grammarExplanations: { en: "Emphatic لَ + energetic verb + object", ur: "لام توکید + فعل مؤکد + ضمیر" } },
      { id: "36:18:9", position: 9, arabic: "وَلَيَمَسَّنَّكُم", transliteration: "wa-la-yamassannakum", root: "م س س", meaning: { en: "and will surely touch you", ur: "اور ضرور تمہیں پہنچے گا" }, pos: ["CONJ", "EMPH", "V", "PRON"], posLabel: "CONJ+EMPH+V+PRON", grammarRole: "verb", grammarExplanations: { en: "Conjunction + emphatic + energetic verb", ur: "عطف + لام + فعل مؤکد" } },
      { id: "36:18:10", position: 10, arabic: "مِّنَّا", transliteration: "minnā", meaning: { en: "from us", ur: "ہماری طرف سے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:18:11", position: 11, arabic: "عَذَابٌ", transliteration: "ʿadhābun", root: "ع ذ ب", meaning: { en: "a punishment", ur: "عذاب" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject of يمسّ", ur: "فاعل یمسّ" } },
      { id: "36:18:12", position: 12, arabic: "أَلِيمٌ", transliteration: "alīmun", root: "أ ل م", meaning: { en: "painful", ur: "دردناک" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "adjective", features: { case: "nominative", pattern: "فَعِيل" }, grammarExplanations: { en: "Adjective describing عذاب", ur: "صفت عذاب کی" } }
    ],
    structure: { diagram: ["SPEECH", "COND-THREAT"], explanation: "People threaten messengers with stoning",
      relationships: [
        { from: 5, to: 7, label: 'شرط + فعل' },
        { from: 9, to: 11, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'موصوف + صفت' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "قَالُوا طَائِرُكُم مَّعَكُمْ ۚ أَئِن ذُكِّرْتُم ۚ بَلْ أَنتُمْ قَوْمٌ مُّسْرِفُونَ",
    translation: { en: "They said, 'Your omen is with yourselves. Is it because you were reminded? Rather, you are a transgressing people.'", ur: "انہوں نے کہا تمہاری نحوست تمہارے ساتھ ہے کیا اس لیے کہ تمہیں نصیحت کی گئی بلکہ تم حد سے گزرنے والے لوگ ہو" },
    words: [
      { id: "36:19:1", position: 1, arabic: "قَالُوا", transliteration: "qālū", root: "ق و ل", meaning: { en: "They said", ur: "انہوں نے کہا" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect verb", ur: "فعل ماضی" } },
      { id: "36:19:2", position: 2, arabic: "طَائِرُكُم", transliteration: "ṭāʾirukum", root: "ط ي ر", meaning: { en: "Your omen", ur: "تمہاری نحوست" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject + possessive pronoun", ur: "مبتدأ + ضمیر" } },
      { id: "36:19:3", position: 3, arabic: "مَّعَكُمْ", transliteration: "maʿakum", meaning: { en: "is with you", ur: "تمہارے ساتھ ہے" }, pos: ["ADV", "PRON"], posLabel: "ADV+PRON", grammarRole: "predicate", grammarExplanations: { en: "Adverb as predicate", ur: "ظرف بطور خبر" } },
      { id: "36:19:4", position: 4, arabic: "أَئِن", transliteration: "a-in", meaning: { en: "Is it because", ur: "کیا اس لیے کہ" }, pos: ["INTERROG", "COND"], posLabel: "INTERROG+COND", grammarRole: "question", grammarExplanations: { en: "Interrogative + conditional", ur: "استفہام + شرطیہ" } },
      { id: "36:19:5", position: 5, arabic: "ذُكِّرْتُم", transliteration: "dhukkirtum", root: "ذ ك ر", meaning: { en: "you were reminded", ur: "تمہیں نصیحت کی گئی" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect", voice: "passive", form: "II" }, grammarExplanations: { en: "Passive perfect Form II", ur: "فعل ماضی مجہول باب تفعیل" } },
      { id: "36:19:6", position: 6, arabic: "بَلْ", transliteration: "bal", meaning: { en: "Rather", ur: "بلکہ" }, pos: ["PART"], posLabel: "PART", grammarRole: "retraction", grammarExplanations: { en: "Retraction particle", ur: "حرف اضراب" } },
      { id: "36:19:7", position: 7, arabic: "أَنتُمْ", transliteration: "antum", meaning: { en: "you are", ur: "تم" }, pos: ["PRON"], posLabel: "PRON", grammarRole: "subject", grammarExplanations: { en: "Pronoun subject", ur: "ضمیر مبتدأ" } },
      { id: "36:19:8", position: 8, arabic: "قَوْمٌ", transliteration: "qawmun", root: "ق و م", meaning: { en: "a people", ur: "لوگ" }, pos: ["N"], posLabel: "N", grammarRole: "predicate", features: { case: "nominative" }, grammarExplanations: { en: "Predicate", ur: "خبر" } },
      { id: "36:19:9", position: 9, arabic: "مُّسْرِفُونَ", transliteration: "musrifūna", root: "س ر ف", meaning: { en: "transgressing", ur: "حد سے گزرنے والے" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "adjective", features: { case: "nominative", type: "active_participle", form: "IV" }, grammarExplanations: { en: "Adjective - active participle Form IV", ur: "صفت - اسم فاعل باب افعال" } }
    ],
    structure: { diagram: ["SPEECH", "RETRACTION"], explanation: "Messengers reject bad omen claim - you are transgressors",
      relationships: [
        { from: 2, to: 3, label: 'مبتدأ + خبر' },
        { from: 7, to: 8, label: 'مبتدأ + خبر' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "وَجَاءَ مِنْ أَقْصَا الْمَدِينَةِ رَجُلٌ يَسْعَىٰ قَالَ يَا قَوْمِ اتَّبِعُوا الْمُرْسَلِينَ",
    translation: { en: "And there came from the farthest end of the city a man, running. He said, 'O my people, follow the messengers.'", ur: "اور شہر کے کنارے سے ایک شخص دوڑتا ہوا آیا کہنے لگا اے میری قوم رسولوں کی پیروی کرو" },
    words: [
      { id: "36:20:1", position: 1, arabic: "وَجَاءَ", transliteration: "wa-jāʾa", root: "ج ي أ", meaning: { en: "And there came", ur: "اور آیا" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Conjunction + perfect verb", ur: "عطف + فعل ماضی" } },
      { id: "36:20:2", position: 2, arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition of source", ur: "حرف جر" } },
      { id: "36:20:3", position: 3, arabic: "أَقْصَا", transliteration: "aqṣā", root: "ق ص و", meaning: { en: "the farthest end", ur: "کنارے" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive", degree: "superlative" }, grammarExplanations: { en: "Elative form - genitive", ur: "اسم تفضیل - مجرور" } },
      { id: "36:20:4", position: 4, arabic: "الْمَدِينَةِ", transliteration: "al-madīnati", root: "م د ن", meaning: { en: "of the city", ur: "شہر کے" }, pos: ["N"], posLabel: "N", grammarRole: "mudaf_ilayh", features: { case: "genitive", definite: true }, grammarExplanations: { en: "Genitive in idafa", ur: "مضاف إليه" } },
      { id: "36:20:5", position: 5, arabic: "رَجُلٌ", transliteration: "rajulun", meaning: { en: "a man", ur: "ایک شخص" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject of جاء", ur: "فاعل جاء" } },
      { id: "36:20:6", position: 6, arabic: "يَسْعَىٰ", transliteration: "yasʿā", root: "س ع ي", meaning: { en: "running", ur: "دوڑتا ہوا" }, pos: ["V"], posLabel: "V", grammarRole: "hal", features: { aspect: "imperfect" }, grammarExplanations: { en: "Circumstantial clause (حال)", ur: "جملہ حالیہ" } },
      { id: "36:20:7", position: 7, arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "اس نے کہا" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect verb", ur: "فعل ماضی" } },
      { id: "36:20:8", position: 8, arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے" }, pos: ["VOC"], posLabel: "VOC", grammarRole: "vocative", grammarExplanations: { en: "Vocative particle", ur: "حرف ندا" } },
      { id: "36:20:9", position: 9, arabic: "قَوْمِ", transliteration: "qawmi", root: "ق و م", meaning: { en: "my people", ur: "میری قوم" }, pos: ["N"], posLabel: "N", grammarRole: "munada", features: { case: "genitive" }, grammarExplanations: { en: "Vocative noun (منادی مضاف)", ur: "منادی مضاف" } },
      { id: "36:20:10", position: 10, arabic: "اتَّبِعُوا", transliteration: "ittabiʿū", root: "ت ب ع", meaning: { en: "follow", ur: "پیروی کرو" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { mood: "imperative", form: "VIII" }, grammarExplanations: { en: "Imperative Form VIII", ur: "فعل امر باب افتعال" } },
      { id: "36:20:11", position: 11, arabic: "الْمُرْسَلِينَ", transliteration: "al-mursalīna", root: "ر س ل", meaning: { en: "the messengers", ur: "رسولوں کی" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative", type: "passive_participle", form: "IV" }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } }
    ],
    structure: { diagram: ["NARRATIVE", "SPEECH"], explanation: "The believing man (Habib) rushes to support the messengers",
      relationships: [
        { from: 1, to: 5, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'نداء + منادی' },
        { from: 10, to: 11, label: 'فعل + مفعول به' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    text: "اتَّبِعُوا مَن لَّا يَسْأَلُكُمْ أَجْرًا وَهُم مُّهْتَدُونَ",
    translation: { en: "Follow those who do not ask of you any payment, and they are rightly guided.", ur: "ان لوگوں کی پیروی کرو جو تم سے کوئی اجرت نہیں مانگتے اور وہ ہدایت یافتہ ہیں" },
    words: [
      { id: "36:21:1", position: 1, arabic: "اتَّبِعُوا", transliteration: "ittabiʿū", root: "ت ب ع", meaning: { en: "Follow", ur: "پیروی کرو" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { mood: "imperative", form: "VIII" }, grammarExplanations: { en: "Imperative Form VIII", ur: "فعل امر باب افتعال" } },
      { id: "36:21:2", position: 2, arabic: "مَن", transliteration: "man", meaning: { en: "those who", ur: "جو" }, pos: ["REL"], posLabel: "REL", grammarRole: "object", grammarExplanations: { en: "Relative pronoun - object", ur: "اسم موصول - مفعول" } },
      { id: "36:21:3", position: 3, arabic: "لَّا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative particle", ur: "حرف نفی" } },
      { id: "36:21:4", position: 4, arabic: "يَسْأَلُكُمْ", transliteration: "yasʾalukum", root: "س أ ل", meaning: { en: "ask of you", ur: "تم سے مانگتے" }, pos: ["V", "PRON"], posLabel: "V+PRON", grammarRole: "sila", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect + object pronoun - relative clause", ur: "فعل مضارع + ضمیر مفعول - صلہ" } },
      { id: "36:21:5", position: 5, arabic: "أَجْرًا", transliteration: "ajran", root: "أ ج ر", meaning: { en: "any payment", ur: "کوئی اجرت" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Second object", ur: "مفعول ثانی" } },
      { id: "36:21:6", position: 6, arabic: "وَهُم", transliteration: "wa-hum", meaning: { en: "and they", ur: "اور وہ" }, pos: ["CONJ", "PRON"], posLabel: "CONJ+PRON", grammarRole: "subject", grammarExplanations: { en: "Conjunction + pronoun subject", ur: "عطف + ضمیر مبتدأ" } },
      { id: "36:21:7", position: 7, arabic: "مُّهْتَدُونَ", transliteration: "muhtadūna", root: "ه د ي", meaning: { en: "rightly guided", ur: "ہدایت یافتہ" }, pos: ["N"], posLabel: "N", grammarRole: "predicate", features: { case: "nominative", type: "passive_participle", form: "VIII" }, grammarExplanations: { en: "Predicate - passive participle Form VIII", ur: "خبر - اسم مفعول باب افتعال" } }
    ],
    structure: { diagram: ["IMPERATIVE", "REL-CLAUSE"], explanation: "The believer urges: follow those who seek no reward",
      relationships: [{ from: 1, to: 2, label: 'فعل + مفعول به' }, { from: 3, to: 4, label: 'نفی + فعل' }, { from: 6, to: 7, label: 'مبتدأ + خبر' }]
    }
  },

  22: {
    ayahNumber: 22,
    text: "وَمَا لِيَ لَا أَعْبُدُ الَّذِي فَطَرَنِي وَإِلَيْهِ تُرْجَعُونَ",
    translation: { en: "And why should I not worship He who created me and to whom you will be returned?", ur: "اور مجھے کیا ہوا کہ اس کی عبادت نہ کروں جس نے مجھے پیدا کیا اور اسی کی طرف تم لوٹائے جاؤ گے" },
    words: [
      { id: "36:22:1", position: 1, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "And why", ur: "اور کیا" }, pos: ["CONJ", "INTERROG"], posLabel: "CONJ+INTERROG", grammarRole: "question", grammarExplanations: { en: "Rhetorical question", ur: "استفہام انکاری" } },
      { id: "36:22:2", position: 2, arabic: "لِيَ", transliteration: "liya", meaning: { en: "should I", ur: "مجھے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:22:3", position: 3, arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہ" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative particle", ur: "حرف نفی" } },
      { id: "36:22:4", position: 4, arabic: "أَعْبُدُ", transliteration: "aʿbudu", root: "ع ب د", meaning: { en: "worship", ur: "عبادت کروں" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect verb", ur: "فعل مضارع" } },
      { id: "36:22:5", position: 5, arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "He who", ur: "جس نے" }, pos: ["REL"], posLabel: "REL", grammarRole: "object", grammarExplanations: { en: "Relative pronoun - object", ur: "اسم موصول - مفعول" } },
      { id: "36:22:6", position: 6, arabic: "فَطَرَنِي", transliteration: "faṭaranī", root: "ف ط ر", meaning: { en: "created me", ur: "مجھے پیدا کیا" }, pos: ["V", "PRON"], posLabel: "V+PRON", grammarRole: "sila", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect verb + object pronoun - relative clause", ur: "فعل ماضی + ضمیر - صلہ" } },
      { id: "36:22:7", position: 7, arabic: "وَإِلَيْهِ", transliteration: "wa-ilayhi", meaning: { en: "and to whom", ur: "اور اسی کی طرف" }, pos: ["CONJ", "PREP", "PRON"], posLabel: "CONJ+PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Conjunction + preposition + pronoun (fronted)", ur: "عطف + جار مجرور مقدم" } },
      { id: "36:22:8", position: 8, arabic: "تُرْجَعُونَ", transliteration: "turjaʿūna", root: "ر ج ع", meaning: { en: "you will be returned", ur: "لوٹائے جاؤ گے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect", voice: "passive" }, grammarExplanations: { en: "Passive imperfect", ur: "فعل مضارع مجہول" } }
    ],
    structure: { diagram: ["RHETORICAL-Q"], explanation: "The believer's reasoning: why not worship the Creator?",
      relationships: [{ from: 3, to: 4, label: 'نفی + فعل' }, { from: 4, to: 5, label: 'فعل + مفعول به' }, { from: 5, to: 6, label: 'موصول + صلة' }]
    }
  },

  23: {
    ayahNumber: 23,
    text: "أَأَتَّخِذُ مِن دُونِهِ آلِهَةً إِن يُرِدْنِ الرَّحْمَٰنُ بِضُرٍّ لَّا تُغْنِ عَنِّي شَفَاعَتُهُمْ شَيْئًا وَلَا يُنقِذُونِ",
    translation: { en: "Should I take other than Him gods? If the Most Merciful intends for me harm, their intercession will not avail me at all, nor can they save me.", ur: "کیا میں اس کے سوا معبود بناؤں اگر رحمٰن مجھے تکلیف پہنچانا چاہے تو ان کی سفارش کچھ کام نہ آئے اور نہ وہ مجھے بچا سکیں" },
    words: [
      { id: "36:23:1", position: 1, arabic: "أَأَتَّخِذُ", transliteration: "a-attakhidhu", root: "أ خ ذ", meaning: { en: "Should I take", ur: "کیا میں بناؤں" }, pos: ["INTERROG", "V"], posLabel: "INTERROG+V", grammarRole: "verb", features: { aspect: "imperfect", form: "VIII" }, grammarExplanations: { en: "Interrogative + imperfect Form VIII", ur: "ہمزہ استفہام + فعل مضارع" } },
      { id: "36:23:2", position: 2, arabic: "مِن", transliteration: "min", meaning: { en: "other than", ur: "علاوہ" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جر" } },
      { id: "36:23:3", position: 3, arabic: "دُونِهِ", transliteration: "dūnihi", meaning: { en: "Him", ur: "اس کے" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "genitive", grammarExplanations: { en: "Genitive + pronoun", ur: "مجرور + ضمیر" } },
      { id: "36:23:4", position: 4, arabic: "آلِهَةً", transliteration: "ālihatan", root: "أ ل ه", meaning: { en: "gods", ur: "معبود" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } },
      { id: "36:23:5", position: 5, arabic: "إِن", transliteration: "in", meaning: { en: "If", ur: "اگر" }, pos: ["COND"], posLabel: "COND", grammarRole: "conditional", grammarExplanations: { en: "Conditional particle", ur: "حرف شرط" } },
      { id: "36:23:6", position: 6, arabic: "يُرِدْنِ", transliteration: "yuridni", root: "ر و د", meaning: { en: "intends for me", ur: "چاہے مجھے" }, pos: ["V", "PRON"], posLabel: "V+PRON", grammarRole: "verb", features: { aspect: "imperfect", mood: "jussive", form: "IV" }, grammarExplanations: { en: "Jussive Form IV + object pronoun", ur: "فعل مضارع مجزوم + ضمیر" } },
      { id: "36:23:7", position: 7, arabic: "الرَّحْمَٰنُ", transliteration: "ar-raḥmānu", root: "ر ح م", meaning: { en: "the Most Merciful", ur: "رحمٰن" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject", ur: "فاعل" } },
      { id: "36:23:8", position: 8, arabic: "بِضُرٍّ", transliteration: "bi-ḍurrin", root: "ض ر ر", meaning: { en: "harm", ur: "تکلیف" }, pos: ["PREP", "N"], posLabel: "PREP+N", grammarRole: "preposition", features: { case: "genitive" }, grammarExplanations: { en: "Preposition + genitive", ur: "جار + مجرور" } },
      { id: "36:23:9", position: 9, arabic: "لَّا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative particle", ur: "حرف نفی" } },
      { id: "36:23:10", position: 10, arabic: "تُغْنِ", transliteration: "tughni", root: "غ ن ي", meaning: { en: "will avail", ur: "کام آئے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect", form: "IV" }, grammarExplanations: { en: "Imperfect Form IV", ur: "فعل مضارع باب افعال" } },
      { id: "36:23:11", position: 11, arabic: "عَنِّي", transliteration: "ʿannī", meaning: { en: "for me", ur: "مجھ سے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:23:12", position: 12, arabic: "شَفَاعَتُهُمْ", transliteration: "shafāʿatuhum", root: "ش ف ع", meaning: { en: "their intercession", ur: "ان کی سفارش" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject + possessive", ur: "فاعل + ضمیر" } },
      { id: "36:23:13", position: 13, arabic: "شَيْئًا", transliteration: "shayʾan", root: "ش ي أ", meaning: { en: "at all", ur: "کچھ بھی" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Adverbial accusative", ur: "مفعول مطلق" } },
      { id: "36:23:14", position: 14, arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "nor", ur: "اور نہ" }, pos: ["CONJ", "NEG"], posLabel: "CONJ+NEG", grammarRole: "negation", grammarExplanations: { en: "Conjunction + negation", ur: "عطف + نفی" } },
      { id: "36:23:15", position: 15, arabic: "يُنقِذُونِ", transliteration: "yunqidhūni", root: "ن ق ذ", meaning: { en: "save me", ur: "مجھے بچا سکیں" }, pos: ["V", "PRON"], posLabel: "V+PRON", grammarRole: "verb", features: { aspect: "imperfect", form: "IV" }, grammarExplanations: { en: "Imperfect Form IV + object", ur: "فعل مضارع باب افعال + ضمیر" } }
    ],
    structure: { diagram: ["RHETORICAL-Q", "CONDITIONAL"], explanation: "The believer's argument against polytheism",
      relationships: [{ from: 1, to: 4, label: 'فعل + مفعول به' }, { from: 5, to: 6, label: 'شرط + فعل' }, { from: 6, to: 7, label: 'فعل + فاعل' }, { from: 9, to: 10, label: 'نفی + فعل' }, { from: 10, to: 12, label: 'فعل + فاعل' }]
    }
  },

  24: {
    ayahNumber: 24,
    text: "إِنِّي إِذًا لَّفِي ضَلَالٍ مُّبِينٍ",
    translation: { en: "Indeed, I would then be in clear error.", ur: "تب تو میں کھلی گمراہی میں ہوں" },
    words: [
      { id: "36:24:1", position: 1, arabic: "إِنِّي", transliteration: "innī", meaning: { en: "Indeed, I", ur: "بے شک میں" }, pos: ["EMPH", "PRON"], posLabel: "EMPH+PRON", grammarRole: "emphasis", grammarExplanations: { en: "Emphatic + pronoun", ur: "حرف توکید + ضمیر" } },
      { id: "36:24:2", position: 2, arabic: "إِذًا", transliteration: "idhan", meaning: { en: "then", ur: "تب" }, pos: ["PART"], posLabel: "PART", grammarRole: "adverb", grammarExplanations: { en: "Particle of result", ur: "حرف جواب" } },
      { id: "36:24:3", position: 3, arabic: "لَّفِي", transliteration: "la-fī", meaning: { en: "surely in", ur: "یقیناً میں" }, pos: ["EMPH", "PREP"], posLabel: "EMPH+PREP", grammarRole: "predicate", grammarExplanations: { en: "Emphatic لَ + preposition - predicate of إن", ur: "لام + حرف جر - خبر إن" } },
      { id: "36:24:4", position: 4, arabic: "ضَلَالٍ", transliteration: "ḍalālin", root: "ض ل ل", meaning: { en: "error", ur: "گمراہی" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Genitive", ur: "مجرور" } },
      { id: "36:24:5", position: 5, arabic: "مُّبِينٍ", transliteration: "mubīnin", root: "ب ي ن", meaning: { en: "clear", ur: "کھلی" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "adjective", features: { case: "genitive", type: "active_participle", form: "IV" }, grammarExplanations: { en: "Adjective - active participle Form IV", ur: "صفت - اسم فاعل باب افعال" } }
    ],
    structure: { diagram: ["EMPH-CLAUSE"], explanation: "If I worship others, I'd be in clear error",
      relationships: [{ from: 3, to: 4, label: 'جار + مجرور' }, { from: 4, to: 5, label: 'موصوف + صفت' }]
    }
  },

  25: {
    ayahNumber: 25,
    text: "إِنِّي آمَنتُ بِرَبِّكُمْ فَاسْمَعُونِ",
    translation: { en: "Indeed, I have believed in your Lord, so listen to me.", ur: "بے شک میں تمہارے رب پر ایمان لایا پس میری بات سنو" },
    words: [
      { id: "36:25:1", position: 1, arabic: "إِنِّي", transliteration: "innī", meaning: { en: "Indeed, I", ur: "بے شک میں" }, pos: ["EMPH", "PRON"], posLabel: "EMPH+PRON", grammarRole: "emphasis", grammarExplanations: { en: "Emphatic + pronoun", ur: "حرف توکید + ضمیر" } },
      { id: "36:25:2", position: 2, arabic: "آمَنتُ", transliteration: "āmantu", root: "أ م ن", meaning: { en: "have believed", ur: "ایمان لایا" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "perfect", form: "IV" }, grammarExplanations: { en: "Perfect Form IV - predicate of إن", ur: "فعل ماضی باب افعال - خبر إن" } },
      { id: "36:25:3", position: 3, arabic: "بِرَبِّكُمْ", transliteration: "bi-rabbikum", root: "ر ب ب", meaning: { en: "in your Lord", ur: "تمہارے رب پر" }, pos: ["PREP", "N", "PRON"], posLabel: "PREP+N+PRON", grammarRole: "preposition", features: { case: "genitive" }, grammarExplanations: { en: "Preposition + noun + possessive", ur: "جار + مجرور + ضمیر" } },
      { id: "36:25:4", position: 4, arabic: "فَاسْمَعُونِ", transliteration: "fa-smaʿūni", root: "س م ع", meaning: { en: "so listen to me", ur: "پس سنو میری بات" }, pos: ["CONJ", "V", "PRON"], posLabel: "CONJ+V+PRON", grammarRole: "verb", features: { mood: "imperative" }, grammarExplanations: { en: "Result + imperative + object", ur: "فاء + فعل امر + ضمیر" } }
    ],
    structure: { diagram: ["EMPH-CLAUSE", "IMPERATIVE"], explanation: "Declaration of faith by the believing man before his martyrdom",
      relationships: [{ from: 2, to: 3, label: 'فعل + جار مجرور' }]
    }
  },

  26: {
    ayahNumber: 26,
    text: "قِيلَ ادْخُلِ الْجَنَّةَ ۖ قَالَ يَا لَيْتَ قَوْمِي يَعْلَمُونَ",
    translation: { en: "It was said, 'Enter Paradise.' He said, 'I wish my people could know.'", ur: "کہا گیا جنت میں داخل ہو جا اس نے کہا کاش میری قوم جانتی" },
    words: [
      { id: "36:26:1", position: 1, arabic: "قِيلَ", transliteration: "qīla", root: "ق و ل", meaning: { en: "It was said", ur: "کہا گیا" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect", voice: "passive" }, grammarExplanations: { en: "Passive perfect", ur: "فعل ماضی مجہول" } },
      { id: "36:26:2", position: 2, arabic: "ادْخُلِ", transliteration: "udkhuli", root: "د خ ل", meaning: { en: "Enter", ur: "داخل ہو جا" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { mood: "imperative" }, grammarExplanations: { en: "Imperative verb", ur: "فعل امر" } },
      { id: "36:26:3", position: 3, arabic: "الْجَنَّةَ", transliteration: "al-jannata", root: "ج ن ن", meaning: { en: "Paradise", ur: "جنت میں" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative", definite: true }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } },
      { id: "36:26:4", position: 4, arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "اس نے کہا" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect verb", ur: "فعل ماضی" } },
      { id: "36:26:5", position: 5, arabic: "يَا", transliteration: "yā", meaning: { en: "Oh", ur: "اے" }, pos: ["VOC"], posLabel: "VOC", grammarRole: "vocative", grammarExplanations: { en: "Vocative of wish", ur: "حرف ندا" } },
      { id: "36:26:6", position: 6, arabic: "لَيْتَ", transliteration: "layta", meaning: { en: "I wish", ur: "کاش" }, pos: ["PART"], posLabel: "PART", grammarRole: "wish", grammarExplanations: { en: "Wish particle (from sisters of إنّ)", ur: "حرف تمنّی (اخوات إن)" } },
      { id: "36:26:7", position: 7, arabic: "قَوْمِي", transliteration: "qawmī", root: "ق و م", meaning: { en: "my people", ur: "میری قوم" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "ism_layta", features: { case: "accusative" }, grammarExplanations: { en: "Subject of ليت - accusative", ur: "اسم ليت - منصوب" } },
      { id: "36:26:8", position: 8, arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", root: "ع ل م", meaning: { en: "could know", ur: "جانتے" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect - predicate of ليت", ur: "فعل مضارع - خبر ليت" } }
    ],
    structure: { diagram: ["PASSIVE-SPEECH", "WISH"], explanation: "The believer enters Paradise and wishes his people knew",
      relationships: [{ from: 2, to: 3, label: 'فعل + مفعول به' }, { from: 6, to: 7, label: 'ليت + اسم' }, { from: 7, to: 8, label: 'اسم + خبر' }]
    }
  },

  27: {
    ayahNumber: 27,
    text: "بِمَا غَفَرَ لِي رَبِّي وَجَعَلَنِي مِنَ الْمُكْرَمِينَ",
    translation: { en: "Of how my Lord has forgiven me and placed me among the honored.", ur: "کہ میرے رب نے مجھے بخش دیا اور مجھے عزت والوں میں سے کر دیا" },
    words: [
      { id: "36:27:1", position: 1, arabic: "بِمَا", transliteration: "bi-mā", meaning: { en: "Of how", ur: "اس بات پر کہ" }, pos: ["PREP", "REL"], posLabel: "PREP+REL", grammarRole: "preposition", grammarExplanations: { en: "Preposition + relative/masdariyya", ur: "جار + مصدریہ" } },
      { id: "36:27:2", position: 2, arabic: "غَفَرَ", transliteration: "ghafara", root: "غ ف ر", meaning: { en: "has forgiven", ur: "بخش دیا" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect verb", ur: "فعل ماضی" } },
      { id: "36:27:3", position: 3, arabic: "لِي", transliteration: "lī", meaning: { en: "me", ur: "مجھے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:27:4", position: 4, arabic: "رَبِّي", transliteration: "rabbī", root: "ر ب ب", meaning: { en: "my Lord", ur: "میرے رب نے" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject + possessive", ur: "فاعل + ضمیر" } },
      { id: "36:27:5", position: 5, arabic: "وَجَعَلَنِي", transliteration: "wa-jaʿalanī", root: "ج ع ل", meaning: { en: "and placed me", ur: "اور مجھے بنایا" }, pos: ["CONJ", "V", "PRON"], posLabel: "CONJ+V+PRON", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Conjunction + perfect + object", ur: "عطف + فعل ماضی + ضمیر" } },
      { id: "36:27:6", position: 6, arabic: "مِنَ", transliteration: "mina", meaning: { en: "among", ur: "میں سے" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جر" } },
      { id: "36:27:7", position: 7, arabic: "الْمُكْرَمِينَ", transliteration: "al-mukramīna", root: "ك ر م", meaning: { en: "the honored", ur: "عزت والوں" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive", type: "passive_participle", form: "IV" }, grammarExplanations: { en: "Genitive - passive participle Form IV", ur: "مجرور - اسم مفعول باب افعال" } }
    ],
    structure: { diagram: ["CAUSAL"], explanation: "Reason for his wish - Allah's forgiveness and honor",
      relationships: [{ from: 2, to: 4, label: 'فعل + فاعل' }, { from: 6, to: 7, label: 'جار + مجرور' }]
    }
  },

  28: {
    ayahNumber: 28,
    text: "وَمَا أَنزَلْنَا عَلَىٰ قَوْمِهِ مِن بَعْدِهِ مِن جُندٍ مِّنَ السَّمَاءِ وَمَا كُنَّا مُنزِلِينَ",
    translation: { en: "And We did not send down upon his people after him any soldiers from the heaven, nor would We have done so.", ur: "اور ہم نے اس کے بعد اس کی قوم پر آسمان سے کوئی لشکر نہیں اتارا اور نہ ہم اتارنے والے تھے" },
    words: [
      { id: "36:28:1", position: 1, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "And not", ur: "اور نہیں" }, pos: ["CONJ", "NEG"], posLabel: "CONJ+NEG", grammarRole: "negation", grammarExplanations: { en: "Conjunction + negation", ur: "عطف + نفی" } },
      { id: "36:28:2", position: 2, arabic: "أَنزَلْنَا", transliteration: "anzalnā", root: "ن ز ل", meaning: { en: "did We send down", ur: "ہم نے اتارا" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect", form: "IV" }, grammarExplanations: { en: "Perfect Form IV", ur: "فعل ماضی باب افعال" } },
      { id: "36:28:3", position: 3, arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جر" } },
      { id: "36:28:4", position: 4, arabic: "قَوْمِهِ", transliteration: "qawmihi", root: "ق و م", meaning: { en: "his people", ur: "اس کی قوم" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Genitive + possessive", ur: "مجرور + ضمیر" } },
      { id: "36:28:5", position: 5, arabic: "مِن", transliteration: "min", meaning: { en: "after", ur: "بعد" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جر" } },
      { id: "36:28:6", position: 6, arabic: "بَعْدِهِ", transliteration: "baʿdihi", root: "ب ع د", meaning: { en: "him", ur: "اس کے" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Genitive + pronoun", ur: "مجرور + ضمیر" } },
      { id: "36:28:7", position: 7, arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "کوئی" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Extra preposition", ur: "من زائدہ" } },
      { id: "36:28:8", position: 8, arabic: "جُندٍ", transliteration: "jundin", root: "ج ن د", meaning: { en: "soldiers", ur: "لشکر" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "genitive" }, grammarExplanations: { en: "Object (genitive due to من)", ur: "مفعول (مجرور بمن)" } },
      { id: "36:28:9", position: 9, arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition of source", ur: "حرف جر" } },
      { id: "36:28:10", position: 10, arabic: "السَّمَاءِ", transliteration: "as-samāʾi", root: "س م و", meaning: { en: "the heaven", ur: "آسمان" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Genitive", ur: "مجرور" } },
      { id: "36:28:11", position: 11, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "nor would", ur: "اور نہ" }, pos: ["CONJ", "NEG"], posLabel: "CONJ+NEG", grammarRole: "negation", grammarExplanations: { en: "Conjunction + negation", ur: "عطف + نفی" } },
      { id: "36:28:12", position: 12, arabic: "كُنَّا", transliteration: "kunnā", root: "ك و ن", meaning: { en: "We have been", ur: "ہم تھے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect verb كان", ur: "فعل ماضی ناقص" } },
      { id: "36:28:13", position: 13, arabic: "مُنزِلِينَ", transliteration: "munzilīna", root: "ن ز ل", meaning: { en: "ones to send down", ur: "اتارنے والے" }, pos: ["N"], posLabel: "N", grammarRole: "predicate", features: { case: "accusative", type: "active_participle", form: "IV" }, grammarExplanations: { en: "Predicate of كان - active participle Form IV", ur: "خبر كان - اسم فاعل باب افعال" } }
    ],
    structure: { diagram: ["NEG-CLAUSE", "NEG-CLAUSE"], explanation: "No army needed to destroy the city - just a single blast",
      relationships: [{ from: 1, to: 2, label: 'نفی + فعل' }, { from: 3, to: 4, label: 'جار + مجرور' }, { from: 5, to: 6, label: 'جار + مجرور' }, { from: 9, to: 10, label: 'جار + مجرور' }]
    }
  },

  29: {
    ayahNumber: 29,
    text: "إِن كَانَتْ إِلَّا صَيْحَةً وَاحِدَةً فَإِذَا هُمْ خَامِدُونَ",
    translation: { en: "It was not but one shout, and immediately they were extinguished.", ur: "بس ایک چنگھاڑ تھی کہ سب بجھ گئے" },
    words: [
      { id: "36:29:1", position: 1, arabic: "إِن", transliteration: "in", meaning: { en: "Not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative (= ما)", ur: "حرف نفی" } },
      { id: "36:29:2", position: 2, arabic: "كَانَتْ", transliteration: "kānat", root: "ك و ن", meaning: { en: "it was", ur: "تھی" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect verb كان", ur: "فعل ماضی ناقص" } },
      { id: "36:29:3", position: 3, arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "سوائے" }, pos: ["EXCEPT"], posLabel: "EXCEPT", grammarRole: "exception", grammarExplanations: { en: "Exception particle", ur: "ادات استثناء" } },
      { id: "36:29:4", position: 4, arabic: "صَيْحَةً", transliteration: "ṣayḥatan", root: "ص ي ح", meaning: { en: "one shout", ur: "ایک چنگھاڑ" }, pos: ["N"], posLabel: "N", grammarRole: "predicate", features: { case: "accusative" }, grammarExplanations: { en: "Predicate of كان - accusative", ur: "خبر كان - منصوب" } },
      { id: "36:29:5", position: 5, arabic: "وَاحِدَةً", transliteration: "wāḥidatan", meaning: { en: "one", ur: "ایک" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "adjective", features: { case: "accusative" }, grammarExplanations: { en: "Adjective for صيحة", ur: "صفت صيحة" } },
      { id: "36:29:6", position: 6, arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "and immediately", ur: "اچانک" }, pos: ["CONJ", "PART"], posLabel: "CONJ+PART", grammarRole: "surprise", grammarExplanations: { en: "فَ result + إذا sudden/surprise", ur: "فاء + إذا فجائیہ" } },
      { id: "36:29:7", position: 7, arabic: "هُمْ", transliteration: "hum", meaning: { en: "they were", ur: "وہ" }, pos: ["PRON"], posLabel: "PRON", grammarRole: "subject", grammarExplanations: { en: "Pronoun subject", ur: "ضمیر مبتدأ" } },
      { id: "36:29:8", position: 8, arabic: "خَامِدُونَ", transliteration: "khāmidūna", root: "خ م د", meaning: { en: "extinguished", ur: "بجھ گئے" }, pos: ["N"], posLabel: "N", grammarRole: "predicate", features: { case: "nominative", type: "active_participle" }, grammarExplanations: { en: "Predicate - active participle 'extinguished'", ur: "خبر - اسم فاعل 'بجھے ہوئے'" } }
    ],
    structure: { diagram: ["NEG-EXCEPT", "RESULT"], explanation: "Swift destruction - a single cry extinguished them all",
      relationships: [{ from: 4, to: 5, label: 'موصوف + صفت' }, { from: 7, to: 8, label: 'مبتدأ + خبر' }]
    }
  },

  30: {
    ayahNumber: 30,
    text: "يَا حَسْرَةً عَلَى الْعِبَادِ ۚ مَا يَأْتِيهِم مِّن رَّسُولٍ إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ",
    translation: { en: "How regretful for the servants. There did not come to them any messenger except that they used to ridicule him.", ur: "افسوس ہے بندوں پر ان کے پاس کوئی رسول نہیں آتا مگر وہ اس کا مذاق اڑاتے ہیں" },
    words: [
      { id: "36:30:1", position: 1, arabic: "يَا", transliteration: "yā", meaning: { en: "Oh", ur: "اے" }, pos: ["VOC"], posLabel: "VOC", grammarRole: "vocative", grammarExplanations: { en: "Exclamatory vocative", ur: "حرف ندا تعجبی" } },
      { id: "36:30:2", position: 2, arabic: "حَسْرَةً", transliteration: "ḥasratan", root: "ح س ر", meaning: { en: "regret", ur: "حسرت" }, pos: ["N"], posLabel: "N", grammarRole: "munada", features: { case: "accusative" }, grammarExplanations: { en: "Exclamation of grief", ur: "منادی - تعجب و افسوس" } },
      { id: "36:30:3", position: 3, arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "for", ur: "پر" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جر" } },
      { id: "36:30:4", position: 4, arabic: "الْعِبَادِ", transliteration: "al-ʿibādi", root: "ع ب د", meaning: { en: "the servants", ur: "بندوں" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive", definite: true }, grammarExplanations: { en: "Genitive", ur: "مجرور" } },
      { id: "36:30:5", position: 5, arabic: "مَا", transliteration: "mā", meaning: { en: "not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative particle", ur: "حرف نفی" } },
      { id: "36:30:6", position: 6, arabic: "يَأْتِيهِم", transliteration: "yaʾtīhim", root: "أ ت ي", meaning: { en: "comes to them", ur: "آتا ان کے پاس" }, pos: ["V", "PRON"], posLabel: "V+PRON", grammarRole: "verb", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect + object pronoun", ur: "فعل مضارع + ضمیر" } },
      { id: "36:30:7", position: 7, arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "کوئی" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Extra preposition", ur: "من زائدہ" } },
      { id: "36:30:8", position: 8, arabic: "رَّسُولٍ", transliteration: "rasūlin", root: "ر س ل", meaning: { en: "messenger", ur: "رسول" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "genitive" }, grammarExplanations: { en: "Subject (genitive due to من)", ur: "فاعل (مجرور بمن)" } },
      { id: "36:30:9", position: 9, arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر" }, pos: ["EXCEPT"], posLabel: "EXCEPT", grammarRole: "exception", grammarExplanations: { en: "Exception", ur: "استثناء" } },
      { id: "36:30:10", position: 10, arabic: "كَانُوا", transliteration: "kānū", root: "ك و ن", meaning: { en: "they used to", ur: "وہ ہوتے تھے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect كان - habitual", ur: "فعل ماضی ناقص - عادت" } },
      { id: "36:30:11", position: 11, arabic: "بِهِ", transliteration: "bihi", meaning: { en: "him", ur: "اس کا" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:30:12", position: 12, arabic: "يَسْتَهْزِئُونَ", transliteration: "yastahziʾūna", root: "ه ز أ", meaning: { en: "ridicule", ur: "مذاق اڑاتے ہیں" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "imperfect", form: "X" }, grammarExplanations: { en: "Imperfect Form X - predicate of كان", ur: "فعل مضارع باب استفعال - خبر كان" } }
    ],
    structure: { diagram: ["EXCLAMATION", "NEG-EXCEPT"], explanation: "Divine sorrow - every messenger was mocked",
      relationships: [{ from: 1, to: 2, label: 'نداء + منادی' }, { from: 3, to: 4, label: 'جار + مجرور' }, { from: 5, to: 6, label: 'نفی + فعل' }]
    }
  },

  31: { ayahNumber: 31, text: "أَلَمْ يَرَوْا كَمْ أَهْلَكْنَا قَبْلَهُم مِّنَ الْقُرُونِ أَنَّهُمْ إِلَيْهِمْ لَا يَرْجِعُونَ", translation: { en: "Have they not considered how many generations We destroyed before them - that they to them will not return?", ur: "کیا انہوں نے نہیں دیکھا کہ ہم نے ان سے پہلے کتنی امتوں کو ہلاک کیا کہ وہ ان کی طرف نہیں لوٹتے" },
    words: [
      { id: "36:31:1", position: 1, arabic: "أَلَمْ", transliteration: "a-lam", meaning: { en: "Have not", ur: "کیا نہیں" }, pos: ["INTERROG", "NEG"], posLabel: "INTERROG+NEG", grammarRole: "question", grammarExplanations: { en: "Rhetorical question + jussive negation", ur: "استفہام انکاری + نفی" } },
      { id: "36:31:2", position: 2, arabic: "يَرَوْا", transliteration: "yaraw", root: "ر أ ي", meaning: { en: "they considered", ur: "انہوں نے دیکھا" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect", mood: "jussive" }, grammarExplanations: { en: "Jussive imperfect", ur: "فعل مضارع مجزوم" } },
      { id: "36:31:3", position: 3, arabic: "كَمْ", transliteration: "kam", meaning: { en: "how many", ur: "کتنی" }, pos: ["INTERROG"], posLabel: "INTERROG", grammarRole: "object", grammarExplanations: { en: "Exclamatory كم", ur: "کم خبریہ" } },
      { id: "36:31:4", position: 4, arabic: "أَهْلَكْنَا", transliteration: "ahlaknā", root: "ه ل ك", meaning: { en: "We destroyed", ur: "ہم نے ہلاک کیا" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect", form: "IV" }, grammarExplanations: { en: "Perfect Form IV", ur: "فعل ماضی باب افعال" } },
      { id: "36:31:5", position: 5, arabic: "قَبْلَهُم", transliteration: "qablahum", root: "ق ب ل", meaning: { en: "before them", ur: "ان سے پہلے" }, pos: ["ADV", "PRON"], posLabel: "ADV+PRON", grammarRole: "adverb", grammarExplanations: { en: "Adverb of time + pronoun", ur: "ظرف زمان + ضمیر" } },
      { id: "36:31:6", position: 6, arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "سے" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جر" } },
      { id: "36:31:7", position: 7, arabic: "الْقُرُونِ", transliteration: "al-qurūni", root: "ق ر ن", meaning: { en: "the generations", ur: "نسلوں" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Genitive", ur: "مجرور" } },
      { id: "36:31:8", position: 8, arabic: "أَنَّهُمْ", transliteration: "annahum", meaning: { en: "that they", ur: "کہ وہ" }, pos: ["CONJ", "PRON"], posLabel: "CONJ+PRON", grammarRole: "masdar_muawwal", grammarExplanations: { en: "أنّ + pronoun - interpreted infinitive", ur: "أنّ + ضمیر - مصدر مؤول" } },
      { id: "36:31:9", position: 9, arabic: "إِلَيْهِمْ", transliteration: "ilayhim", meaning: { en: "to them", ur: "ان کی طرف" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:31:10", position: 10, arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative particle", ur: "حرف نفی" } },
      { id: "36:31:11", position: 11, arabic: "يَرْجِعُونَ", transliteration: "yarjiʿūna", root: "ر ج ع", meaning: { en: "return", ur: "لوٹتے" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect verb - predicate of أنّ", ur: "فعل مضارع - خبر أنّ" } }
    ],
    structure: { diagram: ["RHETORICAL-Q"], explanation: "Warning through history - destroyed nations never return",
      relationships: [{ from: 1, to: 2, label: 'نفی + فعل' }, { from: 6, to: 7, label: 'جار + مجرور' }, { from: 10, to: 11, label: 'نفی + فعل' }]
    }
  },

  32: { ayahNumber: 32, text: "وَإِن كُلٌّ لَّمَّا جَمِيعٌ لَّدَيْنَا مُحْضَرُونَ", translation: { en: "And indeed, all of them will yet be brought present before Us.", ur: "اور سب کے سب ہمارے سامنے حاضر کیے جائیں گے" },
    words: [
      { id: "36:32:1", position: 1, arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "And indeed", ur: "اور" }, pos: ["CONJ", "EMPH"], posLabel: "CONJ+EMPH", grammarRole: "emphasis", grammarExplanations: { en: "Conjunction + emphatic إن (= ما النافية عند بعض / مخففة)", ur: "عطف + إن مخففہ" } },
      { id: "36:32:2", position: 2, arabic: "كُلٌّ", transliteration: "kullun", meaning: { en: "all of them", ur: "سب" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject", ur: "مبتدأ" } },
      { id: "36:32:3", position: 3, arabic: "لَّمَّا", transliteration: "lammā", meaning: { en: "surely", ur: "یقیناً" }, pos: ["EMPH"], posLabel: "EMPH", grammarRole: "emphasis", grammarExplanations: { en: "Emphatic particle (= إلا)", ur: "ادات توکید (= إلا)" } },
      { id: "36:32:4", position: 4, arabic: "جَمِيعٌ", transliteration: "jamīʿun", meaning: { en: "all together", ur: "سب کے سب" }, pos: ["N"], posLabel: "N", grammarRole: "emphasis", features: { case: "nominative" }, grammarExplanations: { en: "Emphasis/apposition", ur: "توکید" } },
      { id: "36:32:5", position: 5, arabic: "لَّدَيْنَا", transliteration: "ladaynā", meaning: { en: "before Us", ur: "ہمارے سامنے" }, pos: ["ADV", "PRON"], posLabel: "ADV+PRON", grammarRole: "adverb", grammarExplanations: { en: "Adverb of place + pronoun", ur: "ظرف مکان + ضمیر" } },
      { id: "36:32:6", position: 6, arabic: "مُحْضَرُونَ", transliteration: "muḥḍarūna", root: "ح ض ر", meaning: { en: "brought present", ur: "حاضر کیے جائیں گے" }, pos: ["N"], posLabel: "N", grammarRole: "predicate", features: { case: "nominative", type: "passive_participle", form: "IV" }, grammarExplanations: { en: "Predicate - passive participle Form IV", ur: "خبر - اسم مفعول باب افعال" } }
    ],
    structure: { diagram: ["EMPH-NOM"], explanation: "All will be gathered before Allah",
      relationships: [{ from: 2, to: 6, label: 'مبتدأ + خبر' }]
    }
  },

  33: { ayahNumber: 33, text: "وَآيَةٌ لَّهُمُ الْأَرْضُ الْمَيْتَةُ أَحْيَيْنَاهَا وَأَخْرَجْنَا مِنْهَا حَبًّا فَمِنْهُ يَأْكُلُونَ", translation: { en: "And a sign for them is the dead earth. We have brought it to life and brought forth from it grain, and from it they eat.", ur: "اور ان کے لیے مردہ زمین ایک نشانی ہے ہم نے اسے زندہ کیا اور اس سے اناج نکالا جس سے وہ کھاتے ہیں" },
    words: [
      { id: "36:33:1", position: 1, arabic: "وَآيَةٌ", transliteration: "wa-āyatun", root: "أ ي ي", meaning: { en: "And a sign", ur: "اور ایک نشانی" }, pos: ["CONJ", "N"], posLabel: "CONJ+N", grammarRole: "predicate", features: { case: "nominative" }, grammarExplanations: { en: "Fronted predicate", ur: "خبر مقدم" } },
      { id: "36:33:2", position: 2, arabic: "لَّهُمُ", transliteration: "lahumu", meaning: { en: "for them", ur: "ان کے لیے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:33:3", position: 3, arabic: "الْأَرْضُ", transliteration: "al-arḍu", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative", definite: true }, grammarExplanations: { en: "Subject (delayed)", ur: "مبتدأ مؤخر" } },
      { id: "36:33:4", position: 4, arabic: "الْمَيْتَةُ", transliteration: "al-maytatu", root: "م و ت", meaning: { en: "the dead", ur: "مردہ" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "adjective", features: { case: "nominative" }, grammarExplanations: { en: "Adjective for الأرض", ur: "صفت الأرض کی" } },
      { id: "36:33:5", position: 5, arabic: "أَحْيَيْنَاهَا", transliteration: "aḥyaynāhā", root: "ح ي ي", meaning: { en: "We brought it to life", ur: "ہم نے اسے زندہ کیا" }, pos: ["V", "PRON"], posLabel: "V+PRON", grammarRole: "verb", features: { aspect: "perfect", form: "IV" }, grammarExplanations: { en: "Perfect Form IV + object", ur: "فعل ماضی باب افعال + ضمیر" } },
      { id: "36:33:6", position: 6, arabic: "وَأَخْرَجْنَا", transliteration: "wa-akhrajnā", root: "خ ر ج", meaning: { en: "and brought forth", ur: "اور نکالا" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { aspect: "perfect", form: "IV" }, grammarExplanations: { en: "Conjunction + perfect Form IV", ur: "عطف + فعل ماضی باب افعال" } },
      { id: "36:33:7", position: 7, arabic: "مِنْهَا", transliteration: "minhā", meaning: { en: "from it", ur: "اس سے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:33:8", position: 8, arabic: "حَبًّا", transliteration: "ḥabban", root: "ح ب ب", meaning: { en: "grain", ur: "اناج" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } },
      { id: "36:33:9", position: 9, arabic: "فَمِنْهُ", transliteration: "fa-minhu", meaning: { en: "and from it", ur: "جس سے" }, pos: ["CONJ", "PREP", "PRON"], posLabel: "CONJ+PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Conjunction + preposition + pronoun", ur: "فاء + جار + ضمیر" } },
      { id: "36:33:10", position: 10, arabic: "يَأْكُلُونَ", transliteration: "yaʾkulūna", root: "أ ك ل", meaning: { en: "they eat", ur: "وہ کھاتے ہیں" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect verb", ur: "فعل مضارع" } }
    ],
    structure: { diagram: ["SIGN", "V-CLAUSE"], explanation: "Sign of resurrection - dead earth brought to life",
      relationships: [{ from: 3, to: 4, label: 'موصوف + صفت' }, { from: 6, to: 8, label: 'فعل + مفعول به' }]
    }
  },

  34: { ayahNumber: 34, text: "وَجَعَلْنَا فِيهَا جَنَّاتٍ مِّن نَّخِيلٍ وَأَعْنَابٍ وَفَجَّرْنَا فِيهَا مِنَ الْعُيُونِ", translation: { en: "And We placed therein gardens of palm trees and grapevines and caused to burst forth springs.", ur: "اور ہم نے اس میں کھجوروں اور انگوروں کے باغ بنائے اور چشمے جاری کیے" },
    words: [
      { id: "36:34:1", position: 1, arabic: "وَجَعَلْنَا", transliteration: "wa-jaʿalnā", root: "ج ع ل", meaning: { en: "And We placed", ur: "اور ہم نے بنائے" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Conjunction + perfect verb", ur: "عطف + فعل ماضی" } },
      { id: "36:34:2", position: 2, arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:34:3", position: 3, arabic: "جَنَّاتٍ", transliteration: "jannātin", root: "ج ن ن", meaning: { en: "gardens", ur: "باغات" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } },
      { id: "36:34:4", position: 4, arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جر" } },
      { id: "36:34:5", position: 5, arabic: "نَّخِيلٍ", transliteration: "nakhīlin", root: "ن خ ل", meaning: { en: "palm trees", ur: "کھجور" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Genitive", ur: "مجرور" } },
      { id: "36:34:6", position: 6, arabic: "وَأَعْنَابٍ", transliteration: "wa-aʿnābin", root: "ع ن ب", meaning: { en: "and grapevines", ur: "اور انگور" }, pos: ["CONJ", "N"], posLabel: "CONJ+N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Conjoined genitive", ur: "معطوف مجرور" } },
      { id: "36:34:7", position: 7, arabic: "وَفَجَّرْنَا", transliteration: "wa-fajjarnā", root: "ف ج ر", meaning: { en: "and caused to burst forth", ur: "اور جاری کیے" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { aspect: "perfect", form: "II" }, grammarExplanations: { en: "Conjunction + perfect Form II", ur: "عطف + فعل ماضی باب تفعیل" } },
      { id: "36:34:8", position: 8, arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:34:9", position: 9, arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "سے" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جر" } },
      { id: "36:34:10", position: 10, arabic: "الْعُيُونِ", transliteration: "al-ʿuyūni", root: "ع ي ن", meaning: { en: "the springs", ur: "چشمے" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Genitive", ur: "مجرور" } }
    ],
    structure: { diagram: ["V-CLAUSE", "V-CLAUSE"], explanation: "Gardens and springs as signs of Allah's creative power",
      relationships: [{ from: 1, to: 3, label: 'فعل + مفعول به' }, { from: 4, to: 5, label: 'جار + مجرور' }, { from: 5, to: 6, label: 'عطف' }, { from: 9, to: 10, label: 'جار + مجرور' }]
    }
  },

  35: { ayahNumber: 35, text: "لِيَأْكُلُوا مِن ثَمَرِهِ وَمَا عَمِلَتْهُ أَيْدِيهِمْ ۖ أَفَلَا يَشْكُرُونَ", translation: { en: "That they may eat of His fruit. And their hands have not produced it, so will they not be grateful?", ur: "تاکہ اس کے پھل کھائیں حالانکہ ان کے ہاتھوں نے یہ نہیں بنایا کیا پھر بھی شکر نہیں کرتے" },
    words: [
      { id: "36:35:1", position: 1, arabic: "لِيَأْكُلُوا", transliteration: "li-yaʾkulū", root: "أ ك ل", meaning: { en: "That they may eat", ur: "تاکہ کھائیں" }, pos: ["PREP", "V"], posLabel: "PREP+V", grammarRole: "purpose", features: { mood: "subjunctive" }, grammarExplanations: { en: "Lam of purpose + subjunctive", ur: "لام تعلیل + فعل مضارع منصوب" } },
      { id: "36:35:2", position: 2, arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "سے" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جر" } },
      { id: "36:35:3", position: 3, arabic: "ثَمَرِهِ", transliteration: "thamarihi", root: "ث م ر", meaning: { en: "its fruit", ur: "اس کے پھل" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Genitive + pronoun", ur: "مجرور + ضمیر" } },
      { id: "36:35:4", position: 4, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "and not", ur: "حالانکہ نہیں" }, pos: ["CONJ", "NEG"], posLabel: "CONJ+NEG", grammarRole: "negation", grammarExplanations: { en: "Conjunction + negation", ur: "واو حالیہ + نفی" } },
      { id: "36:35:5", position: 5, arabic: "عَمِلَتْهُ", transliteration: "ʿamilathu", root: "ع م ل", meaning: { en: "produced it", ur: "اسے بنایا" }, pos: ["V", "PRON"], posLabel: "V+PRON", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect verb + object", ur: "فعل ماضی + ضمیر مفعول" } },
      { id: "36:35:6", position: 6, arabic: "أَيْدِيهِمْ", transliteration: "aydīhim", root: "ي د ي", meaning: { en: "their hands", ur: "ان کے ہاتھوں نے" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject + possessive", ur: "فاعل + ضمیر" } },
      { id: "36:35:7", position: 7, arabic: "أَفَلَا", transliteration: "a-fa-lā", meaning: { en: "So will not", ur: "کیا نہیں" }, pos: ["INTERROG", "CONJ", "NEG"], posLabel: "INTERROG+CONJ+NEG", grammarRole: "question", grammarExplanations: { en: "Interrogative + result + negation", ur: "استفہام + فاء + نفی" } },
      { id: "36:35:8", position: 8, arabic: "يَشْكُرُونَ", transliteration: "yashkurūna", root: "ش ك ر", meaning: { en: "they be grateful", ur: "شکر کرتے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect verb", ur: "فعل مضارع" } }
    ],
    structure: { diagram: ["PURPOSE", "RHETORICAL-Q"], explanation: "Allah provides food - why not be grateful?",
      relationships: [{ from: 2, to: 3, label: 'جار + مجرور' }, { from: 4, to: 5, label: 'نفی + فعل' }, { from: 5, to: 6, label: 'فعل + فاعل' }, { from: 7, to: 8, label: 'نفی + فعل' }]
    }
  },

  36: { ayahNumber: 36, text: "سُبْحَانَ الَّذِي خَلَقَ الْأَزْوَاجَ كُلَّهَا مِمَّا تُنبِتُ الْأَرْضُ وَمِنْ أَنفُسِهِمْ وَمِمَّا لَا يَعْلَمُونَ", translation: { en: "Exalted is He who created all pairs - from what the earth grows and from themselves and from that which they do not know.", ur: "پاک ہے وہ جس نے سب جوڑے بنائے زمین کی پیداوار سے بھی اور خود ان سے بھی اور ان چیزوں سے بھی جنہیں یہ نہیں جانتے" },
    words: [
      { id: "36:36:1", position: 1, arabic: "سُبْحَانَ", transliteration: "subḥāna", root: "س ب ح", meaning: { en: "Exalted is", ur: "پاک ہے" }, pos: ["N"], posLabel: "N", grammarRole: "mafool_mutlaq", features: { case: "accusative" }, grammarExplanations: { en: "Absolute object of glorification", ur: "مفعول مطلق" } },
      { id: "36:36:2", position: 2, arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "He who", ur: "وہ جس نے" }, pos: ["REL"], posLabel: "REL", grammarRole: "mudaf_ilayh", grammarExplanations: { en: "Relative pronoun", ur: "اسم موصول" } },
      { id: "36:36:3", position: 3, arabic: "خَلَقَ", transliteration: "khalaqa", root: "خ ل ق", meaning: { en: "created", ur: "پیدا کیا" }, pos: ["V"], posLabel: "V", grammarRole: "sila", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect verb - relative clause", ur: "فعل ماضی - صلہ" } },
      { id: "36:36:4", position: 4, arabic: "الْأَزْوَاجَ", transliteration: "al-azwāja", root: "ز و ج", meaning: { en: "the pairs", ur: "جوڑے" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } },
      { id: "36:36:5", position: 5, arabic: "كُلَّهَا", transliteration: "kullahā", meaning: { en: "all of them", ur: "سب" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "emphasis", features: { case: "accusative" }, grammarExplanations: { en: "Emphasis (توکید)", ur: "توکید" } },
      { id: "36:36:6", position: 6, arabic: "مِمَّا", transliteration: "mimmā", meaning: { en: "from what", ur: "اس سے جو" }, pos: ["PREP", "REL"], posLabel: "PREP+REL", grammarRole: "preposition", grammarExplanations: { en: "Preposition + relative", ur: "من + ما" } },
      { id: "36:36:7", position: 7, arabic: "تُنبِتُ", transliteration: "tunbitu", root: "ن ب ت", meaning: { en: "grows", ur: "اگاتی ہے" }, pos: ["V"], posLabel: "V", grammarRole: "sila", features: { aspect: "imperfect", form: "IV" }, grammarExplanations: { en: "Imperfect Form IV - relative clause", ur: "فعل مضارع باب افعال - صلہ" } },
      { id: "36:36:8", position: 8, arabic: "الْأَرْضُ", transliteration: "al-arḍu", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject", ur: "فاعل" } },
      { id: "36:36:9", position: 9, arabic: "وَمِنْ", transliteration: "wa-min", meaning: { en: "and from", ur: "اور سے" }, pos: ["CONJ", "PREP"], posLabel: "CONJ+PREP", grammarRole: "preposition", grammarExplanations: { en: "Conjunction + preposition", ur: "عطف + حرف جر" } },
      { id: "36:36:10", position: 10, arabic: "أَنفُسِهِمْ", transliteration: "anfusihim", root: "ن ف س", meaning: { en: "themselves", ur: "ان کی ذات" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Genitive + possessive", ur: "مجرور + ضمیر" } },
      { id: "36:36:11", position: 11, arabic: "وَمِمَّا", transliteration: "wa-mimmā", meaning: { en: "and from that which", ur: "اور اس سے جو" }, pos: ["CONJ", "PREP", "REL"], posLabel: "CONJ+PREP+REL", grammarRole: "preposition", grammarExplanations: { en: "Conjunction + preposition + relative", ur: "عطف + من + ما" } },
      { id: "36:36:12", position: 12, arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative particle", ur: "حرف نفی" } },
      { id: "36:36:13", position: 13, arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", root: "ع ل م", meaning: { en: "they know", ur: "جانتے" }, pos: ["V"], posLabel: "V", grammarRole: "sila", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect - relative clause", ur: "فعل مضارع - صلہ" } }
    ],
    structure: { diagram: ["GLORIFICATION"], explanation: "Allah created all pairs - in plants, humans, and the unknown",
      relationships: [{ from: 1, to: 2, label: 'مضاف + مضاف إليه' }, { from: 3, to: 4, label: 'فعل + مفعول به' }, { from: 7, to: 8, label: 'فعل + فاعل' }, { from: 12, to: 13, label: 'نفی + فعل' }]
    }
  },

  37: { ayahNumber: 37, text: "وَآيَةٌ لَّهُمُ اللَّيْلُ نَسْلَخُ مِنْهُ النَّهَارَ فَإِذَا هُم مُّظْلِمُونَ", translation: { en: "And a sign for them is the night. We remove from it daylight, so they are in darkness.", ur: "اور ان کے لیے ایک نشانی رات ہے ہم اس سے دن نکال لیتے ہیں تو وہ اندھیرے میں رہ جاتے ہیں" },
    words: [
      { id: "36:37:1", position: 1, arabic: "وَآيَةٌ", transliteration: "wa-āyatun", root: "أ ي ي", meaning: { en: "And a sign", ur: "اور ایک نشانی" }, pos: ["CONJ", "N"], posLabel: "CONJ+N", grammarRole: "predicate", features: { case: "nominative" }, grammarExplanations: { en: "Fronted predicate", ur: "خبر مقدم" } },
      { id: "36:37:2", position: 2, arabic: "لَّهُمُ", transliteration: "lahumu", meaning: { en: "for them", ur: "ان کے لیے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:37:3", position: 3, arabic: "اللَّيْلُ", transliteration: "al-laylu", root: "ل ي ل", meaning: { en: "the night", ur: "رات" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Delayed subject", ur: "مبتدأ مؤخر" } },
      { id: "36:37:4", position: 4, arabic: "نَسْلَخُ", transliteration: "naslakhu", root: "س ل خ", meaning: { en: "We remove", ur: "ہم نکالتے ہیں" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect verb", ur: "فعل مضارع" } },
      { id: "36:37:5", position: 5, arabic: "مِنْهُ", transliteration: "minhu", meaning: { en: "from it", ur: "اس سے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:37:6", position: 6, arabic: "النَّهَارَ", transliteration: "an-nahāra", root: "ن ه ر", meaning: { en: "daylight", ur: "دن" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } },
      { id: "36:37:7", position: 7, arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "and then", ur: "تو اچانک" }, pos: ["CONJ", "PART"], posLabel: "CONJ+PART", grammarRole: "surprise", grammarExplanations: { en: "Result + sudden", ur: "فاء + إذا فجائیہ" } },
      { id: "36:37:8", position: 8, arabic: "هُم", transliteration: "hum", meaning: { en: "they", ur: "وہ" }, pos: ["PRON"], posLabel: "PRON", grammarRole: "subject", grammarExplanations: { en: "Pronoun subject", ur: "ضمیر مبتدأ" } },
      { id: "36:37:9", position: 9, arabic: "مُّظْلِمُونَ", transliteration: "muẓlimūna", root: "ظ ل م", meaning: { en: "in darkness", ur: "اندھیرے میں" }, pos: ["N"], posLabel: "N", grammarRole: "predicate", features: { case: "nominative", type: "active_participle", form: "IV" }, grammarExplanations: { en: "Predicate - active participle Form IV 'in darkness'", ur: "خبر - اسم فاعل باب افعال" } }
    ],
    structure: { diagram: ["SIGN", "RESULT"], explanation: "Night as a sign - daylight peeled away leaving darkness",
      relationships: [{ from: 4, to: 6, label: 'فعل + مفعول به' }, { from: 8, to: 9, label: 'مبتدأ + خبر' }]
    }
  },

  38: { ayahNumber: 38, text: "وَالشَّمْسُ تَجْرِي لِمُسْتَقَرٍّ لَّهَا ۚ ذَٰلِكَ تَقْدِيرُ الْعَزِيزِ الْعَلِيمِ", translation: { en: "And the sun runs to a resting place for it. That is the decree of the Exalted in Might, the Knowing.", ur: "اور سورج اپنے ٹھکانے کی طرف چلتا ہے یہ غالب جاننے والے کا اندازہ ہے" },
    words: [
      { id: "36:38:1", position: 1, arabic: "وَالشَّمْسُ", transliteration: "wash-shamsu", root: "ش م س", meaning: { en: "And the sun", ur: "اور سورج" }, pos: ["CONJ", "N"], posLabel: "CONJ+N", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Conjunction + subject", ur: "عطف + مبتدأ" } },
      { id: "36:38:2", position: 2, arabic: "تَجْرِي", transliteration: "tajrī", root: "ج ر ي", meaning: { en: "runs", ur: "چلتا ہے" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect verb - predicate", ur: "فعل مضارع - خبر" } },
      { id: "36:38:3", position: 3, arabic: "لِمُسْتَقَرٍّ", transliteration: "li-mustaqarrin", root: "ق ر ر", meaning: { en: "to a resting place", ur: "ٹھکانے کی طرف" }, pos: ["PREP", "N"], posLabel: "PREP+N", grammarRole: "preposition", features: { case: "genitive", type: "noun_of_place", form: "X" }, grammarExplanations: { en: "Preposition + noun of place Form X", ur: "حرف جر + اسم مکان" } },
      { id: "36:38:4", position: 4, arabic: "لَّهَا", transliteration: "lahā", meaning: { en: "for it", ur: "اس کے لیے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:38:5", position: 5, arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That is", ur: "یہ ہے" }, pos: ["DEM"], posLabel: "DEM", grammarRole: "subject", grammarExplanations: { en: "Demonstrative pronoun - subject", ur: "اسم اشارہ - مبتدأ" } },
      { id: "36:38:6", position: 6, arabic: "تَقْدِيرُ", transliteration: "taqdīru", root: "ق د ر", meaning: { en: "the decree", ur: "اندازہ" }, pos: ["N"], posLabel: "N", grammarRole: "predicate", features: { case: "nominative", pattern: "تَفْعِيل", form: "II" }, grammarExplanations: { en: "Predicate - verbal noun Form II", ur: "خبر - مصدر باب تفعیل" } },
      { id: "36:38:7", position: 7, arabic: "الْعَزِيزِ", transliteration: "al-ʿazīzi", root: "ع ز ز", meaning: { en: "of the Exalted", ur: "غالب" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "mudaf_ilayh", features: { case: "genitive" }, grammarExplanations: { en: "Genitive in idafa", ur: "مضاف إليه" } },
      { id: "36:38:8", position: 8, arabic: "الْعَلِيمِ", transliteration: "al-ʿalīmi", root: "ع ل م", meaning: { en: "the Knowing", ur: "جاننے والے" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "apposition", features: { case: "genitive" }, grammarExplanations: { en: "Apposition - second divine attribute", ur: "بدل" } }
    ],
    structure: { diagram: ["SIGN", "NOM-SENT"], explanation: "The sun's orbit is by divine decree",
      relationships: [{ from: 1, to: 2, label: 'مبتدأ + خبر' }, { from: 5, to: 6, label: 'مبتدأ + خبر' }, { from: 6, to: 7, label: 'مضاف + مضاف إليه' }, { from: 7, to: 8, label: 'بدل' }]
    }
  },

  39: { ayahNumber: 39, text: "وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ حَتَّىٰ عَادَ كَالْعُرْجُونِ الْقَدِيمِ", translation: { en: "And the moon - We have determined for it phases, until it returns like the old date stalk.", ur: "اور چاند کی ہم نے منزلیں مقرر کیں یہاں تک کہ وہ پرانی کھجور کی شاخ کی طرح ہو جاتا ہے" },
    words: [
      { id: "36:39:1", position: 1, arabic: "وَالْقَمَرَ", transliteration: "wal-qamara", root: "ق م ر", meaning: { en: "And the moon", ur: "اور چاند" }, pos: ["CONJ", "N"], posLabel: "CONJ+N", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Accusative (fronted object)", ur: "مفعول مقدم" } },
      { id: "36:39:2", position: 2, arabic: "قَدَّرْنَاهُ", transliteration: "qaddarnāhu", root: "ق د ر", meaning: { en: "We have determined for it", ur: "ہم نے مقرر کیں" }, pos: ["V", "PRON"], posLabel: "V+PRON", grammarRole: "verb", features: { aspect: "perfect", form: "II" }, grammarExplanations: { en: "Perfect Form II + object", ur: "فعل ماضی باب تفعیل + ضمیر" } },
      { id: "36:39:3", position: 3, arabic: "مَنَازِلَ", transliteration: "manāzila", root: "ن ز ل", meaning: { en: "phases", ur: "منزلیں" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Second object or adverbial", ur: "مفعول ثانی یا ظرف" } },
      { id: "36:39:4", position: 4, arabic: "حَتَّىٰ", transliteration: "ḥattā", meaning: { en: "until", ur: "یہاں تک" }, pos: ["PART"], posLabel: "PART", grammarRole: "purpose", grammarExplanations: { en: "Particle of finality", ur: "حرف غایت" } },
      { id: "36:39:5", position: 5, arabic: "عَادَ", transliteration: "ʿāda", root: "ع و د", meaning: { en: "it returns", ur: "لوٹ جاتا ہے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect verb", ur: "فعل ماضی" } },
      { id: "36:39:6", position: 6, arabic: "كَالْعُرْجُونِ", transliteration: "kal-ʿurjūni", root: "ع ر ج", meaning: { en: "like the date stalk", ur: "کھجور کی شاخ جیسا" }, pos: ["PREP", "N"], posLabel: "PREP+N", grammarRole: "predicate", features: { case: "genitive" }, grammarExplanations: { en: "Simile - preposition + noun", ur: "تشبیہ - کاف + اسم" } },
      { id: "36:39:7", position: 7, arabic: "الْقَدِيمِ", transliteration: "al-qadīmi", root: "ق د م", meaning: { en: "the old", ur: "پرانی" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "adjective", features: { case: "genitive" }, grammarExplanations: { en: "Adjective", ur: "صفت" } }
    ],
    structure: { diagram: ["SIGN"], explanation: "Moon's phases as sign - returns to crescent like old date stalk",
      relationships: [{ from: 6, to: 7, label: 'موصوف + صفت' }]
    }
  },

  40: { ayahNumber: 40, text: "لَا الشَّمْسُ يَنبَغِي لَهَا أَن تُدْرِكَ الْقَمَرَ وَلَا اللَّيْلُ سَابِقُ النَّهَارِ ۚ وَكُلٌّ فِي فَلَكٍ يَسْبَحُونَ", translation: { en: "It is not allowable for the sun to reach the moon, nor does the night overtake the day, but each in an orbit is swimming.", ur: "نہ سورج کے بس میں ہے کہ چاند کو پکڑ لے اور نہ رات دن سے آگے نکل سکتی ہے اور ہر ایک اپنے مدار میں تیر رہا ہے" },
    words: [
      { id: "36:40:1", position: 1, arabic: "لَا", transliteration: "lā", meaning: { en: "Not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative particle", ur: "حرف نفی" } },
      { id: "36:40:2", position: 2, arabic: "الشَّمْسُ", transliteration: "ash-shamsu", root: "ش م س", meaning: { en: "the sun", ur: "سورج" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject", ur: "مبتدأ" } },
      { id: "36:40:3", position: 3, arabic: "يَنبَغِي", transliteration: "yanbaghī", root: "ب غ ي", meaning: { en: "is allowed", ur: "ممکن ہے" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "imperfect", form: "VII" }, grammarExplanations: { en: "Imperfect Form VII", ur: "فعل مضارع باب انفعال" } },
      { id: "36:40:4", position: 4, arabic: "لَهَا", transliteration: "lahā", meaning: { en: "for it", ur: "اس کے لیے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:40:5", position: 5, arabic: "أَن", transliteration: "an", meaning: { en: "to", ur: "کہ" }, pos: ["PART"], posLabel: "PART", grammarRole: "masdariyya", grammarExplanations: { en: "Subjunctive particle", ur: "حرف مصدری" } },
      { id: "36:40:6", position: 6, arabic: "تُدْرِكَ", transliteration: "tudrika", root: "د ر ك", meaning: { en: "reach", ur: "پکڑ لے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect", mood: "subjunctive", form: "IV" }, grammarExplanations: { en: "Subjunctive Form IV", ur: "فعل مضارع منصوب باب افعال" } },
      { id: "36:40:7", position: 7, arabic: "الْقَمَرَ", transliteration: "al-qamara", root: "ق م ر", meaning: { en: "the moon", ur: "چاند کو" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } },
      { id: "36:40:8", position: 8, arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "nor", ur: "اور نہ" }, pos: ["CONJ", "NEG"], posLabel: "CONJ+NEG", grammarRole: "negation", grammarExplanations: { en: "Conjunction + negation", ur: "عطف + نفی" } },
      { id: "36:40:9", position: 9, arabic: "اللَّيْلُ", transliteration: "al-laylu", root: "ل ي ل", meaning: { en: "the night", ur: "رات" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject", ur: "مبتدأ" } },
      { id: "36:40:10", position: 10, arabic: "سَابِقُ", transliteration: "sābiqu", root: "س ب ق", meaning: { en: "overtakes", ur: "آگے نکل سکتی" }, pos: ["N"], posLabel: "N", grammarRole: "predicate", features: { case: "nominative", type: "active_participle" }, grammarExplanations: { en: "Predicate - active participle", ur: "خبر - اسم فاعل" } },
      { id: "36:40:11", position: 11, arabic: "النَّهَارِ", transliteration: "an-nahāri", root: "ن ه ر", meaning: { en: "the day", ur: "دن سے" }, pos: ["N"], posLabel: "N", grammarRole: "mudaf_ilayh", features: { case: "genitive" }, grammarExplanations: { en: "Genitive in idafa", ur: "مضاف إليه" } },
      { id: "36:40:12", position: 12, arabic: "وَكُلٌّ", transliteration: "wa-kullun", meaning: { en: "and each", ur: "اور سب" }, pos: ["CONJ", "N"], posLabel: "CONJ+N", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Conjunction + subject", ur: "عطف + مبتدأ" } },
      { id: "36:40:13", position: 13, arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جر" } },
      { id: "36:40:14", position: 14, arabic: "فَلَكٍ", transliteration: "falakin", root: "ف ل ك", meaning: { en: "an orbit", ur: "مدار" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Genitive", ur: "مجرور" } },
      { id: "36:40:15", position: 15, arabic: "يَسْبَحُونَ", transliteration: "yasbaḥūna", root: "س ب ح", meaning: { en: "are swimming", ur: "تیر رہے ہیں" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect verb - predicate", ur: "فعل مضارع - خبر" } }
    ],
    structure: { diagram: ["NEG-CLAUSE", "NEG-CLAUSE", "NOM-SENT"], explanation: "Cosmic order - sun, moon, night, day all in precise orbits",
      relationships: [{ from: 1, to: 3, label: 'نفی + فعل' }, { from: 6, to: 7, label: 'فعل + مفعول به' }, { from: 9, to: 10, label: 'مبتدأ + خبر' }, { from: 10, to: 11, label: 'مضاف + مضاف إليه' }, { from: 12, to: 15, label: 'مبتدأ + خبر' }, { from: 13, to: 14, label: 'جار + مجرور' }]
    }
  },

  41: { ayahNumber: 41, text: "وَآيَةٌ لَّهُمْ أَنَّا حَمَلْنَا ذُرِّيَّتَهُمْ فِي الْفُلْكِ الْمَشْحُونِ", translation: { en: "And a sign for them is that We carried their forefathers in a laden ship.", ur: "اور ان کے لیے ایک نشانی ہے کہ ہم نے ان کی نسل کو بھری ہوئی کشتی میں سوار کیا" },
    words: [
      { id: "36:41:1", position: 1, arabic: "وَآيَةٌ", transliteration: "wa-āyatun", root: "أ ي ي", meaning: { en: "And a sign", ur: "اور ایک نشانی" }, pos: ["CONJ", "N"], posLabel: "CONJ+N", grammarRole: "predicate", features: { case: "nominative" }, grammarExplanations: { en: "Fronted predicate", ur: "خبر مقدم" } },
      { id: "36:41:2", position: 2, arabic: "لَّهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:41:3", position: 3, arabic: "أَنَّا", transliteration: "annā", meaning: { en: "that We", ur: "کہ ہم نے" }, pos: ["CONJ", "PRON"], posLabel: "CONJ+PRON", grammarRole: "subject", grammarExplanations: { en: "أنّ + pronoun - delayed subject", ur: "أنّ + ضمیر - مبتدأ مؤخر" } },
      { id: "36:41:4", position: 4, arabic: "حَمَلْنَا", transliteration: "ḥamalnā", root: "ح م ل", meaning: { en: "carried", ur: "سوار کیا" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect verb - predicate of أنّ", ur: "فعل ماضی - خبر أنّ" } },
      { id: "36:41:5", position: 5, arabic: "ذُرِّيَّتَهُمْ", transliteration: "dhurriyyatahum", root: "ذ ر ر", meaning: { en: "their forefathers", ur: "ان کی نسل" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Direct object + possessive", ur: "مفعول به + ضمیر" } },
      { id: "36:41:6", position: 6, arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جر" } },
      { id: "36:41:7", position: 7, arabic: "الْفُلْكِ", transliteration: "al-fulki", root: "ف ل ك", meaning: { en: "the ship", ur: "کشتی" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Genitive", ur: "مجرور" } },
      { id: "36:41:8", position: 8, arabic: "الْمَشْحُونِ", transliteration: "al-mashḥūni", root: "ش ح ن", meaning: { en: "the laden", ur: "بھری ہوئی" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "adjective", features: { case: "genitive", type: "passive_participle" }, grammarExplanations: { en: "Adjective - passive participle", ur: "صفت - اسم مفعول" } }
    ],
    structure: { diagram: ["SIGN"], explanation: "Noah's Ark as a sign - Allah saved their ancestors",
      relationships: [{ from: 4, to: 5, label: 'فعل + مفعول به' }, { from: 6, to: 7, label: 'جار + مجرور' }, { from: 7, to: 8, label: 'موصوف + صفت' }]
    }
  },

  42: { ayahNumber: 42, text: "وَخَلَقْنَا لَهُم مِّن مِّثْلِهِ مَا يَرْكَبُونَ", translation: { en: "And We created for them from the likes of it that which they ride.", ur: "اور ان کے لیے ویسی ہی سواریاں بنائیں جن پر سوار ہوتے ہیں" },
    words: [
      { id: "36:42:1", position: 1, arabic: "وَخَلَقْنَا", transliteration: "wa-khalaqnā", root: "خ ل ق", meaning: { en: "And We created", ur: "اور ہم نے بنایا" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Conjunction + perfect", ur: "عطف + فعل ماضی" } },
      { id: "36:42:2", position: 2, arabic: "لَهُم", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:42:3", position: 3, arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جر" } },
      { id: "36:42:4", position: 4, arabic: "مِّثْلِهِ", transliteration: "mithlihi", root: "م ث ل", meaning: { en: "the likes of it", ur: "ایسی ہی" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Genitive + pronoun", ur: "مجرور + ضمیر" } },
      { id: "36:42:5", position: 5, arabic: "مَا", transliteration: "mā", meaning: { en: "that which", ur: "جو" }, pos: ["REL"], posLabel: "REL", grammarRole: "object", grammarExplanations: { en: "Relative pronoun - object", ur: "اسم موصول - مفعول" } },
      { id: "36:42:6", position: 6, arabic: "يَرْكَبُونَ", transliteration: "yarkabūna", root: "ر ك ب", meaning: { en: "they ride", ur: "سوار ہوتے ہیں" }, pos: ["V"], posLabel: "V", grammarRole: "sila", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect - relative clause", ur: "فعل مضارع - صلہ" } }
    ],
    structure: { diagram: ["V-CLAUSE"], explanation: "Other modes of transport created as extensions of the ship",
      relationships: [{ from: 3, to: 4, label: 'جار + مجرور' }, { from: 5, to: 6, label: 'موصول + صلة' }]
    }
  },

  43: { ayahNumber: 43, text: "وَإِن نَّشَأْ نُغْرِقْهُمْ فَلَا صَرِيخَ لَهُمْ وَلَا هُمْ يُنقَذُونَ", translation: { en: "And if We should will, We could drown them; then no one responding to a cry would there be for them, nor would they be saved.", ur: "اور اگر ہم چاہیں تو انہیں ڈبو دیں نہ کوئی فریاد رس ہو اور نہ وہ بچائے جائیں" },
    words: [
      { id: "36:43:1", position: 1, arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "And if", ur: "اور اگر" }, pos: ["CONJ", "COND"], posLabel: "CONJ+COND", grammarRole: "conditional", grammarExplanations: { en: "Conjunction + conditional", ur: "عطف + شرطیہ" } },
      { id: "36:43:2", position: 2, arabic: "نَّشَأْ", transliteration: "nashaʾ", root: "ش ي أ", meaning: { en: "We should will", ur: "ہم چاہیں" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect", mood: "jussive" }, grammarExplanations: { en: "Jussive - conditional verb", ur: "فعل مضارع مجزوم - شرط" } },
      { id: "36:43:3", position: 3, arabic: "نُغْرِقْهُمْ", transliteration: "nughriqhum", root: "غ ر ق", meaning: { en: "We drown them", ur: "ڈبو دیں" }, pos: ["V", "PRON"], posLabel: "V+PRON", grammarRole: "jawab_shart", features: { aspect: "imperfect", mood: "jussive", form: "IV" }, grammarExplanations: { en: "Jussive Form IV - answer to condition", ur: "فعل مجزوم باب افعال - جواب شرط" } },
      { id: "36:43:4", position: 4, arabic: "فَلَا", transliteration: "fa-lā", meaning: { en: "then no", ur: "نہ" }, pos: ["CONJ", "NEG"], posLabel: "CONJ+NEG", grammarRole: "negation", grammarExplanations: { en: "Result + negation", ur: "فاء + نفی" } },
      { id: "36:43:5", position: 5, arabic: "صَرِيخَ", transliteration: "ṣarīkha", root: "ص ر خ", meaning: { en: "one responding to a cry", ur: "فریاد رس" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "accusative" }, grammarExplanations: { en: "Subject of لا النافية للجنس", ur: "اسم لا نافیہ" } },
      { id: "36:43:6", position: 6, arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "predicate", grammarExplanations: { en: "Preposition + pronoun - predicate", ur: "جار + ضمیر - خبر" } },
      { id: "36:43:7", position: 7, arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "nor", ur: "اور نہ" }, pos: ["CONJ", "NEG"], posLabel: "CONJ+NEG", grammarRole: "negation", grammarExplanations: { en: "Conjunction + negation", ur: "عطف + نفی" } },
      { id: "36:43:8", position: 8, arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ" }, pos: ["PRON"], posLabel: "PRON", grammarRole: "subject", grammarExplanations: { en: "Pronoun subject", ur: "ضمیر مبتدأ" } },
      { id: "36:43:9", position: 9, arabic: "يُنقَذُونَ", transliteration: "yunqadhūna", root: "ن ق ذ", meaning: { en: "be saved", ur: "بچائے جائیں" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "imperfect", voice: "passive" }, grammarExplanations: { en: "Passive imperfect - predicate", ur: "فعل مضارع مجہول - خبر" } }
    ],
    structure: { diagram: ["CONDITIONAL", "RESULT"], explanation: "Allah's power - could drown all with no rescue",
      relationships: [{ from: 1, to: 2, label: 'شرط + فعل' }, { from: 8, to: 9, label: 'مبتدأ + خبر' }]
    }
  },

  44: { ayahNumber: 44, text: "إِلَّا رَحْمَةً مِّنَّا وَمَتَاعًا إِلَىٰ حِينٍ", translation: { en: "Except as a mercy from Us and provision for a time.", ur: "مگر ہماری رحمت سے اور ایک وقت تک فائدہ اٹھانے کو" },
    words: [
      { id: "36:44:1", position: 1, arabic: "إِلَّا", transliteration: "illā", meaning: { en: "Except", ur: "مگر" }, pos: ["EXCEPT"], posLabel: "EXCEPT", grammarRole: "exception", grammarExplanations: { en: "Exception particle", ur: "ادات استثناء" } },
      { id: "36:44:2", position: 2, arabic: "رَحْمَةً", transliteration: "raḥmatan", root: "ر ح م", meaning: { en: "as a mercy", ur: "رحمت" }, pos: ["N"], posLabel: "N", grammarRole: "adverbial", features: { case: "accusative" }, grammarExplanations: { en: "Accusative of reason (مفعول لأجله)", ur: "مفعول لأجلہ" } },
      { id: "36:44:3", position: 3, arabic: "مِّنَّا", transliteration: "minnā", meaning: { en: "from Us", ur: "ہماری طرف سے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:44:4", position: 4, arabic: "وَمَتَاعًا", transliteration: "wa-matāʿan", root: "م ت ع", meaning: { en: "and provision", ur: "اور فائدہ" }, pos: ["CONJ", "N"], posLabel: "CONJ+N", grammarRole: "adverbial", features: { case: "accusative" }, grammarExplanations: { en: "Conjoined accusative of reason", ur: "معطوف مفعول لأجلہ" } },
      { id: "36:44:5", position: 5, arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "for", ur: "تک" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition of time limit", ur: "حرف جر غایت" } },
      { id: "36:44:6", position: 6, arabic: "حِينٍ", transliteration: "ḥīnin", root: "ح ي ن", meaning: { en: "a time", ur: "ایک وقت" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Genitive", ur: "مجرور" } }
    ],
    structure: { diagram: ["EXCEPTION"], explanation: "Survival is only by Allah's mercy for a limited time",
      relationships: [{ from: 5, to: 6, label: 'جار + مجرور' }]
    }
  },

  45: { ayahNumber: 45, text: "وَإِذَا قِيلَ لَهُمُ اتَّقُوا مَا بَيْنَ أَيْدِيكُمْ وَمَا خَلْفَكُمْ لَعَلَّكُمْ تُرْحَمُونَ", translation: { en: "And when it is said to them, 'Beware of what is before you and what is behind you; perhaps you will receive mercy.'", ur: "اور جب ان سے کہا جائے کہ اپنے آگے اور پیچھے سے ڈرو تاکہ تم پر رحم کیا جائے" },
    words: [
      { id: "36:45:1", position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب" }, pos: ["CONJ", "COND"], posLabel: "CONJ+COND", grammarRole: "conditional", grammarExplanations: { en: "Conjunction + temporal condition", ur: "عطف + ظرفیہ شرطیہ" } },
      { id: "36:45:2", position: 2, arabic: "قِيلَ", transliteration: "qīla", root: "ق و ل", meaning: { en: "it is said", ur: "کہا جائے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect", voice: "passive" }, grammarExplanations: { en: "Passive perfect", ur: "فعل ماضی مجہول" } },
      { id: "36:45:3", position: 3, arabic: "لَهُمُ", transliteration: "lahumu", meaning: { en: "to them", ur: "ان سے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:45:4", position: 4, arabic: "اتَّقُوا", transliteration: "ittaqū", root: "و ق ي", meaning: { en: "Beware of", ur: "ڈرو" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { mood: "imperative", form: "VIII" }, grammarExplanations: { en: "Imperative Form VIII", ur: "فعل امر باب افتعال" } },
      { id: "36:45:5", position: 5, arabic: "مَا", transliteration: "mā", meaning: { en: "what is", ur: "جو" }, pos: ["REL"], posLabel: "REL", grammarRole: "object", grammarExplanations: { en: "Relative pronoun", ur: "اسم موصول" } },
      { id: "36:45:6", position: 6, arabic: "بَيْنَ", transliteration: "bayna", meaning: { en: "before", ur: "سامنے" }, pos: ["ADV"], posLabel: "ADV", grammarRole: "adverb", grammarExplanations: { en: "Adverb of place", ur: "ظرف مکان" } },
      { id: "36:45:7", position: 7, arabic: "أَيْدِيكُمْ", transliteration: "aydīkum", root: "ي د ي", meaning: { en: "you", ur: "تمہارے" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "mudaf_ilayh", features: { case: "genitive" }, grammarExplanations: { en: "Genitive + possessive", ur: "مضاف إليه + ضمیر" } },
      { id: "36:45:8", position: 8, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "and what is", ur: "اور جو" }, pos: ["CONJ", "REL"], posLabel: "CONJ+REL", grammarRole: "object", grammarExplanations: { en: "Conjunction + relative", ur: "عطف + موصول" } },
      { id: "36:45:9", position: 9, arabic: "خَلْفَكُمْ", transliteration: "khalfakum", meaning: { en: "behind you", ur: "پیچھے" }, pos: ["ADV", "PRON"], posLabel: "ADV+PRON", grammarRole: "adverb", grammarExplanations: { en: "Adverb + pronoun", ur: "ظرف + ضمیر" } },
      { id: "36:45:10", position: 10, arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", meaning: { en: "perhaps you", ur: "تاکہ تم" }, pos: ["PART", "PRON"], posLabel: "PART+PRON", grammarRole: "hope", grammarExplanations: { en: "Particle of hope + pronoun", ur: "حرف ترجی + ضمیر" } },
      { id: "36:45:11", position: 11, arabic: "تُرْحَمُونَ", transliteration: "turḥamūna", root: "ر ح م", meaning: { en: "will receive mercy", ur: "رحم کیا جائے" }, pos: ["V"], posLabel: "V", grammarRole: "predicate", features: { aspect: "imperfect", voice: "passive" }, grammarExplanations: { en: "Passive imperfect - predicate of لعلّ", ur: "فعل مضارع مجہول - خبر لعلّ" } }
    ],
    structure: { diagram: ["COND-CLAUSE", "SPEECH"], explanation: "Warning ignored - told to fear past and future consequences",
      relationships: [{ from: 4, to: 5, label: 'فعل + مفعول به' }, { from: 6, to: 7, label: 'مضاف + مضاف إليه' }, { from: 10, to: 11, label: 'لعلّ + خبر' }]
    }
  },

  46: { ayahNumber: 46, text: "وَمَا تَأْتِيهِم مِّنْ آيَةٍ مِّنْ آيَاتِ رَبِّهِمْ إِلَّا كَانُوا عَنْهَا مُعْرِضِينَ", translation: { en: "And no sign comes to them from the signs of their Lord except that they are from it turning away.", ur: "اور ان کے رب کی آیات میں سے کوئی آیت ان کے پاس نہیں آتی مگر وہ اس سے منہ موڑ لیتے ہیں" },
    words: [
      { id: "36:46:1", position: 1, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "And not", ur: "اور نہیں" }, pos: ["CONJ", "NEG"], posLabel: "CONJ+NEG", grammarRole: "negation", grammarExplanations: { en: "Conjunction + negation", ur: "عطف + نفی" } },
      { id: "36:46:2", position: 2, arabic: "تَأْتِيهِم", transliteration: "taʾtīhim", root: "أ ت ي", meaning: { en: "comes to them", ur: "آتی" }, pos: ["V", "PRON"], posLabel: "V+PRON", grammarRole: "verb", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect + object pronoun", ur: "فعل مضارع + ضمیر" } },
      { id: "36:46:3", position: 3, arabic: "مِّنْ", transliteration: "min", meaning: { en: "any", ur: "کوئی" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Extra preposition", ur: "من زائدہ" } },
      { id: "36:46:4", position: 4, arabic: "آيَةٍ", transliteration: "āyatin", root: "أ ي ي", meaning: { en: "sign", ur: "آیت" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "genitive" }, grammarExplanations: { en: "Subject (genitive by من)", ur: "فاعل (مجرور بمن)" } },
      { id: "36:46:5", position: 5, arabic: "مِّنْ", transliteration: "min", meaning: { en: "from", ur: "میں سے" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Partitive preposition", ur: "من تبعیضیہ" } },
      { id: "36:46:6", position: 6, arabic: "آيَاتِ", transliteration: "āyāti", root: "أ ي ي", meaning: { en: "the signs", ur: "آیات" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Genitive", ur: "مجرور" } },
      { id: "36:46:7", position: 7, arabic: "رَبِّهِمْ", transliteration: "rabbihim", root: "ر ب ب", meaning: { en: "of their Lord", ur: "ان کے رب کی" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "mudaf_ilayh", features: { case: "genitive" }, grammarExplanations: { en: "Genitive + possessive", ur: "مضاف إليه + ضمیر" } },
      { id: "36:46:8", position: 8, arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر" }, pos: ["EXCEPT"], posLabel: "EXCEPT", grammarRole: "exception", grammarExplanations: { en: "Exception particle", ur: "ادات استثناء" } },
      { id: "36:46:9", position: 9, arabic: "كَانُوا", transliteration: "kānū", root: "ك و ن", meaning: { en: "they are", ur: "وہ ہوتے تھے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Perfect كان", ur: "فعل ماضی ناقص" } },
      { id: "36:46:10", position: 10, arabic: "عَنْهَا", transliteration: "ʿanhā", meaning: { en: "from it", ur: "اس سے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "36:46:11", position: 11, arabic: "مُعْرِضِينَ", transliteration: "muʿriḍīna", root: "ع ر ض", meaning: { en: "turning away", ur: "منہ موڑنے والے" }, pos: ["N"], posLabel: "N", grammarRole: "predicate", features: { case: "accusative", type: "active_participle", form: "IV" }, grammarExplanations: { en: "Predicate of كان - active participle Form IV", ur: "خبر كان - اسم فاعل باب افعال" } }
    ],
    structure: { diagram: ["NEG-EXCEPT"], explanation: "Every sign met with rejection",
      relationships: [{ from: 1, to: 2, label: 'نفی + فعل' }, { from: 5, to: 6, label: 'جار + مجرور' }, { from: 6, to: 7, label: 'مضاف + مضاف إليه' }]
    }
  },

  47: {
    ayahNumber: 47,
    text: "وَإِذَا قِيلَ لَهُمْ أَنفِقُوا۟ مِمَّا رَزَقَكُمُ ٱللَّهُ قَالَ ٱلَّذِينَ كَفَرُوا۟ لِلَّذِينَ ءَامَنُوٓا۟ أَنُطْعِمُ مَن لَّوْ يَشَآءُ ٱللَّهُ أَطْعَمَهُۥٓ إِنْ أَنتُمْ إِلَّا فِى ضَلَـٰلٍۢ مُّبِينٍۢ",
    words: [
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور when" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "قِيلَ", transliteration: "qīla", meaning: { en: "it is said", ur: "it is کہا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "to them", ur: "کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنفِقُوا۟", transliteration: "anfiqū", meaning: { en: "Spend", ur: "Spend" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِمَّا", transliteration: "mimmā", meaning: { en: "from what", ur: "سے کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَزَقَكُمُ", transliteration: "razaqakumu", meaning: { en: "(has) provided you", ur: "(has) provided تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "Said", ur: "کہا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَفَرُوا۟", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "disbelieved" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those who", ur: "کو جو لوگ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ءَامَنُوٓا۟", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَنُطْعِمُ", transliteration: "anuṭ'ʿimu", meaning: { en: "Should we feed", ur: "Should ہم feed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "whom", ur: "whom" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "لَّوْ", transliteration: "law", meaning: { en: "if", ur: "if" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَشَآءُ", transliteration: "yashāu", meaning: { en: "Allah willed ", ur: "اللہ willed " }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "Allah willed ", ur: "اللہ willed " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَطْعَمَهُۥٓ", transliteration: "aṭʿamahu", meaning: { en: "He would have fed him", ur: "وہ would have fed him" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنتُمْ", transliteration: "antum", meaning: { en: "(are) you", ur: "(are) تم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ضَلَـٰلٍۢ", transliteration: "ḍalālin", meaning: { en: "an error", ur: "an error" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّبِينٍۢ", transliteration: "mubīnin", meaning: { en: "clear", ur: "clear" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 23, to: 24, label: 'موصوف + صفت' }
      ],
    },
  },
  48: {
    ayahNumber: 48,
    text: "وَيَقُولُونَ مَتَىٰ هَـٰذَا ٱلْوَعْدُ إِن كُنتُمْ صَـٰدِقِينَ",
    words: [
      { arabic: "وَيَقُولُونَ", transliteration: "wayaqūlūna", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَتَىٰ", transliteration: "matā", meaning: { en: "When (is)", ur: "When (is)" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "this" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْوَعْدُ", transliteration: "l-waʿdu", meaning: { en: "promise", ur: "promise" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "if" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you are", ur: "تم are" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "صَـٰدِقِينَ", transliteration: "ṣādiqīna", meaning: { en: "truthful", ur: "truthful" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  49: {
    ayahNumber: 49,
    text: "مَا يَنظُرُونَ إِلَّا صَيْحَةًۭ وَٰحِدَةًۭ تَأْخُذُهُمْ وَهُمْ يَخِصِّمُونَ",
    words: [
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَنظُرُونَ", transliteration: "yanẓurūna", meaning: { en: "they await", ur: "وہ لوگ await" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "صَيْحَةًۭ", transliteration: "ṣayḥatan", meaning: { en: "a shout", ur: "a shout" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٰحِدَةًۭ", transliteration: "wāḥidatan", meaning: { en: "one", ur: "one" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَأْخُذُهُمْ", transliteration: "takhudhuhum", meaning: { en: "it will seize them", ur: "it will seize them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "while they", ur: "while وہ لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَخِصِّمُونَ", transliteration: "yakhiṣṣimūna", meaning: { en: "are disputing", ur: "are disputing" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  50: {
    ayahNumber: 50,
    text: "فَلَا يَسْتَطِيعُونَ تَوْصِيَةًۭ وَلَآ إِلَىٰٓ أَهْلِهِمْ يَرْجِعُونَ",
    words: [
      { arabic: "فَلَا", transliteration: "falā", meaning: { en: "Then not", ur: "پھر نہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "يَسْتَطِيعُونَ", transliteration: "yastaṭīʿūna", meaning: { en: "they will be able", ur: "وہ لوگ will be able" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَوْصِيَةًۭ", transliteration: "tawṣiyatan", meaning: { en: "(to) make a will", ur: "(کو) make a will" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَآ", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "إِلَىٰٓ", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَهْلِهِمْ", transliteration: "ahlihim", meaning: { en: "their people", ur: "their لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَرْجِعُونَ", transliteration: "yarjiʿūna", meaning: { en: "they (can) return", ur: "وہ لوگ (can) return" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  51: {
    ayahNumber: 51,
    text: "وَنُفِخَ فِى ٱلصُّورِ فَإِذَا هُم مِّنَ ٱلْأَجْدَاثِ إِلَىٰ رَبِّهِمْ يَنسِلُونَ",
    words: [
      { arabic: "وَنُفِخَ", transliteration: "wanufikha", meaning: { en: "And will be blown", ur: "اور will be blown" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "[in]", ur: "[میں]" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلصُّورِ", transliteration: "l-ṣūri", meaning: { en: "the trumpet", ur: "the trumpet" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "and behold", ur: "اور behold" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "هُم", transliteration: "hum", meaning: { en: "They", ur: "وہ لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَجْدَاثِ", transliteration: "l-ajdāthi", meaning: { en: "the graves", ur: "the graves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", meaning: { en: "their Lord", ur: "their رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَنسِلُونَ", transliteration: "yansilūna", meaning: { en: "[they] will hasten", ur: "[وہ لوگ] will hasten" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  52: {
    ayahNumber: 52,
    text: "قَالُوا۟ يَـٰوَيْلَنَا مَنۢ بَعَثَنَا مِن مَّرْقَدِنَا ۜ ۗ هَـٰذَا مَا وَعَدَ ٱلرَّحْمَـٰنُ وَصَدَقَ ٱلْمُرْسَلُونَ",
    words: [
      { arabic: "قَالُوا۟", transliteration: "qālū", meaning: { en: "They [will] say", ur: "وہ لوگ [will] کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰوَيْلَنَا", transliteration: "yāwaylanā", meaning: { en: "O woe to us", ur: "اے woe کو us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَنۢ", transliteration: "man", meaning: { en: "Who", ur: "جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعَثَنَا", transliteration: "baʿathanā", meaning: { en: "has raised us", ur: "has raised us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَّرْقَدِنَا ۜ ۗ", transliteration: "marqadinā", meaning: { en: "our sleeping place", ur: "our sleeping place" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This (is)", ur: "This (is)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "What", ur: "کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "وَعَدَ", transliteration: "waʿada", meaning: { en: "(had) promised", ur: "(had) promised" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلرَّحْمَـٰنُ", transliteration: "l-raḥmānu", meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "وَصَدَقَ", transliteration: "waṣadaqa", meaning: { en: "and told (the) truth", ur: "اور told (the) سچ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْمُرْسَلُونَ", transliteration: "l-mur'salūna", meaning: { en: "the Messengers", ur: "the Messengers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  53: {
    ayahNumber: 53,
    text: "إِن كَانَتْ إِلَّا صَيْحَةًۭ وَٰحِدَةًۭ فَإِذَا هُمْ جَمِيعٌۭ لَّدَيْنَا مُحْضَرُونَ",
    words: [
      { arabic: "إِن", transliteration: "in", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانَتْ", transliteration: "kānat", meaning: { en: "it will be", ur: "it will be" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "لیکن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "صَيْحَةًۭ", transliteration: "ṣayḥatan", meaning: { en: "a shout", ur: "a shout" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٰحِدَةًۭ", transliteration: "wāḥidatan", meaning: { en: "single", ur: "single" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "so behold", ur: "so behold" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "They", ur: "وہ لوگ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "جَمِيعٌۭ", transliteration: "jamīʿun", meaning: { en: "all", ur: "سب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّدَيْنَا", transliteration: "ladaynā", meaning: { en: "before Us", ur: "پہلے Us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُحْضَرُونَ", transliteration: "muḥ'ḍarūna", meaning: { en: "(will be) brought", ur: "(will be) brought" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  54: {
    ayahNumber: 54,
    text: "فَٱلْيَوْمَ لَا تُظْلَمُ نَفْسٌۭ شَيْـًۭٔا وَلَا تُجْزَوْنَ إِلَّا مَا كُنتُمْ تَعْمَلُونَ",
    words: [
      { arabic: "فَٱلْيَوْمَ", transliteration: "fal-yawma", meaning: { en: "So this Day", ur: "So this دن" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تُظْلَمُ", transliteration: "tuẓ'lamu", meaning: { en: "will be wronged", ur: "will be wronged" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَفْسٌۭ", transliteration: "nafsun", meaning: { en: "a soul", ur: "a روح" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "شَيْـًۭٔا", transliteration: "shayan", meaning: { en: "(in) anything", ur: "(میں) anything" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تُجْزَوْنَ", transliteration: "tuj'zawna", meaning: { en: "you will be recompensed", ur: "تم will be recompensed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "(for) what", ur: "(for) کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you used (to)", ur: "تم used (کو)" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "do", ur: "do" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'موصول + صلة' }
      ],
    },
  },
  55: {
    ayahNumber: 55,
    text: "إِنَّ أَصْحَـٰبَ ٱلْجَنَّةِ ٱلْيَوْمَ فِى شُغُلٍۢ فَـٰكِهُونَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَصْحَـٰبَ", transliteration: "aṣḥāba", meaning: { en: "(the) companions", ur: "(the) companions" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْجَنَّةِ", transliteration: "l-janati", meaning: { en: "(of) Paradise", ur: "(of) جنت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْيَوْمَ", transliteration: "l-yawma", meaning: { en: "this Day", ur: "this دن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "[in]", ur: "[میں]" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شُغُلٍۢ", transliteration: "shughulin", meaning: { en: "will be occupied", ur: "will be occupied" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَـٰكِهُونَ", transliteration: "fākihūna", meaning: { en: "(in) amusement", ur: "(میں) amusement" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  56: {
    ayahNumber: 56,
    text: "هُمْ وَأَزْوَٰجُهُمْ فِى ظِلَـٰلٍ عَلَى ٱلْأَرَآئِكِ مُتَّكِـُٔونَ",
    words: [
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "They", ur: "وہ لوگ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "وَأَزْوَٰجُهُمْ", transliteration: "wa-azwājuhum", meaning: { en: "and their spouses", ur: "اور their spouses" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ظِلَـٰلٍ", transliteration: "ẓilālin", meaning: { en: "shades", ur: "shades" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "on", ur: "پر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرَآئِكِ", transliteration: "l-arāiki", meaning: { en: "[the] couches", ur: "[the] couches" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُتَّكِـُٔونَ", transliteration: "muttakiūna", meaning: { en: "reclining", ur: "reclining" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  57: {
    ayahNumber: 57,
    text: "لَهُمْ فِيهَا فَـٰكِهَةٌۭ وَلَهُم مَّا يَدَّعُونَ",
    words: [
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "For them", ur: "For them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَـٰكِهَةٌۭ", transliteration: "fākihatun", meaning: { en: "(are) fruits", ur: "(are) fruits" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "وَلَهُم", transliteration: "walahum", meaning: { en: "and for them", ur: "اور for them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "(is) whatever", ur: "(is) whatever" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَدَّعُونَ", transliteration: "yaddaʿūna", meaning: { en: "they call for", ur: "وہ لوگ call for" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  58: {
    ayahNumber: 58,
    text: "سَلَـٰمٌۭ قَوْلًۭا مِّن رَّبٍّۢ رَّحِيمٍۢ",
    words: [
      { arabic: "سَلَـٰمٌۭ", transliteration: "salāmun", meaning: { en: "Peace", ur: "Peace" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَوْلًۭا", transliteration: "qawlan", meaning: { en: "A word", ur: "A word" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَّبٍّۢ", transliteration: "rabbin", meaning: { en: "a Lord", ur: "a رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَّحِيمٍۢ", transliteration: "raḥīmin", meaning: { en: "Most Merciful", ur: "بہت مہربان" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
  },
  59: {
    ayahNumber: 59,
    text: "وَٱمْتَـٰزُوا۟ ٱلْيَوْمَ أَيُّهَا ٱلْمُجْرِمُونَ",
    words: [
      { arabic: "وَٱمْتَـٰزُوا۟", transliteration: "wa-im'tāzū", meaning: { en: "But stand apart", ur: "لیکن stand apart" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْيَوْمَ", transliteration: "l-yawma", meaning: { en: "today", ur: "today" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "O criminals", ur: "اے criminals" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُجْرِمُونَ", transliteration: "l-muj'rimūna", meaning: { en: "O criminals", ur: "اے criminals" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  60: {
    ayahNumber: 60,
    text: "۞ أَلَمْ أَعْهَدْ إِلَيْكُمْ يَـٰبَنِىٓ ءَادَمَ أَن لَّا تَعْبُدُوا۟ ٱلشَّيْطَـٰنَ ۖ إِنَّهُۥ لَكُمْ عَدُوٌّۭ مُّبِينٌۭ",
    words: [
      { arabic: "۞ أَلَمْ", transliteration: "alam", meaning: { en: "Did not", ur: "Did نہیں" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَعْهَدْ", transliteration: "aʿhad", meaning: { en: "I enjoin", ur: "میں enjoin" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَيْكُمْ", transliteration: "ilaykum", meaning: { en: "upon you", ur: "پر تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَـٰبَنِىٓ", transliteration: "yābanī", meaning: { en: "O Children of Adam", ur: "اے اولاد of Adam" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَادَمَ", transliteration: "ādama", meaning: { en: "O Children of Adam", ur: "اے اولاد of Adam" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "That", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "(do) not", ur: "(do) نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَعْبُدُوا۟", transliteration: "taʿbudū", meaning: { en: "worship", ur: "عبادت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلشَّيْطَـٰنَ ۖ", transliteration: "l-shayṭāna", meaning: { en: "the Shaitaan", ur: "the Shaitaan" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", meaning: { en: "indeed, he", ur: "بیشک, وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "(is) for you", ur: "(is) for تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَدُوٌّۭ", transliteration: "ʿaduwwun", meaning: { en: "an enemy", ur: "an enemy" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّبِينٌۭ", transliteration: "mubīnun", meaning: { en: "clear", ur: "clear" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'موصوف + صفت' }
      ],
    },
  },
  61: {
    ayahNumber: 61,
    text: "وَأَنِ ٱعْبُدُونِى ۚ هَـٰذَا صِرَٰطٌۭ مُّسْتَقِيمٌۭ",
    words: [
      { arabic: "وَأَنِ", transliteration: "wa-ani", meaning: { en: "And that", ur: "اور وہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱعْبُدُونِى ۚ", transliteration: "uʿ'budūnī", meaning: { en: "you worship Me", ur: "تم عبادت Me" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This", ur: "This" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "صِرَٰطٌۭ", transliteration: "ṣirāṭun", meaning: { en: "(is) a Path", ur: "(is) a راستہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّسْتَقِيمٌۭ", transliteration: "mus'taqīmun", meaning: { en: "Straight", ur: "سیدھا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  62: {
    ayahNumber: 62,
    text: "وَلَقَدْ أَضَلَّ مِنكُمْ جِبِلًّۭا كَثِيرًا ۖ أَفَلَمْ تَكُونُوا۟ تَعْقِلُونَ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And indeed", ur: "اور بیشک" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَضَلَّ", transliteration: "aḍalla", meaning: { en: "he led astray", ur: "وہ led astray" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنكُمْ", transliteration: "minkum", meaning: { en: "from you", ur: "سے تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جِبِلًّۭا", transliteration: "jibillan", meaning: { en: "a multitude", ur: "a multitude" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَثِيرًا ۖ", transliteration: "kathīran", meaning: { en: "great", ur: "great" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "أَفَلَمْ", transliteration: "afalam", meaning: { en: "Then did not", ur: "پھر did نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَكُونُوا۟", transliteration: "takūnū", meaning: { en: "you", ur: "تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَعْقِلُونَ", transliteration: "taʿqilūna", meaning: { en: "use reason", ur: "use reason" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
  },
  63: {
    ayahNumber: 63,
    text: "هَـٰذِهِۦ جَهَنَّمُ ٱلَّتِى كُنتُمْ تُوعَدُونَ",
    words: [
      { arabic: "هَـٰذِهِۦ", transliteration: "hādhihi", meaning: { en: "This (is)", ur: "This (is)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَهَنَّمُ", transliteration: "jahannamu", meaning: { en: "(the) Hell", ur: "(the) جہنم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّتِى", transliteration: "allatī", meaning: { en: "which", ur: "جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you were", ur: "تم were" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تُوعَدُونَ", transliteration: "tūʿadūna", meaning: { en: "promised", ur: "promised" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  64: {
    ayahNumber: 64,
    text: "ٱصْلَوْهَا ٱلْيَوْمَ بِمَا كُنتُمْ تَكْفُرُونَ",
    words: [
      { arabic: "ٱصْلَوْهَا", transliteration: "iṣ'lawhā", meaning: { en: "Burn therein", ur: "Burn اس میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْيَوْمَ", transliteration: "l-yawma", meaning: { en: "today", ur: "today" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "because", ur: "because" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", meaning: { en: "you used to", ur: "تم used کو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَكْفُرُونَ", transliteration: "takfurūna", meaning: { en: "disbelieve", ur: "disbelieve" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  65: {
    ayahNumber: 65,
    text: "ٱلْيَوْمَ نَخْتِمُ عَلَىٰٓ أَفْوَٰهِهِمْ وَتُكَلِّمُنَآ أَيْدِيهِمْ وَتَشْهَدُ أَرْجُلُهُم بِمَا كَانُوا۟ يَكْسِبُونَ",
    words: [
      { arabic: "ٱلْيَوْمَ", transliteration: "al-yawma", meaning: { en: "This Day", ur: "This دن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَخْتِمُ", transliteration: "nakhtimu", meaning: { en: "We will seal", ur: "ہم will seal" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَىٰٓ", transliteration: "ʿalā", meaning: { en: "[on]", ur: "[پر]" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَفْوَٰهِهِمْ", transliteration: "afwāhihim", meaning: { en: "their mouths", ur: "their mouths" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَتُكَلِّمُنَآ", transliteration: "watukallimunā", meaning: { en: "and will speak to Us", ur: "اور will speak کو Us" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَيْدِيهِمْ", transliteration: "aydīhim", meaning: { en: "their hands", ur: "their hands" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَتَشْهَدُ", transliteration: "watashhadu", meaning: { en: "and will bear witness", ur: "اور will bear witness" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَرْجُلُهُم", transliteration: "arjuluhum", meaning: { en: "their feet", ur: "their feet" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "about what", ur: "about کیا" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they used to", ur: "وہ لوگ used کو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَكْسِبُونَ", transliteration: "yaksibūna", meaning: { en: "earn", ur: "earn" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  66: {
    ayahNumber: 66,
    text: "وَلَوْ نَشَآءُ لَطَمَسْنَا عَلَىٰٓ أَعْيُنِهِمْ فَٱسْتَبَقُوا۟ ٱلصِّرَٰطَ فَأَنَّىٰ يُبْصِرُونَ",
    words: [
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "And if", ur: "اور if" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "نَشَآءُ", transliteration: "nashāu", meaning: { en: "We willed", ur: "ہم willed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَطَمَسْنَا", transliteration: "laṭamasnā", meaning: { en: "We (would have) surely obliterated", ur: "ہم (would have) یقیناً obliterated" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَىٰٓ", transliteration: "ʿalā", meaning: { en: "[over]", ur: "[اوپر]" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَعْيُنِهِمْ", transliteration: "aʿyunihim", meaning: { en: "their eyes", ur: "their eyes" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱسْتَبَقُوا۟", transliteration: "fa-is'tabaqū", meaning: { en: "then they (would) race", ur: "پھر وہ لوگ (would) race" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱلصِّرَٰطَ", transliteration: "l-ṣirāṭa", meaning: { en: "(to find) the path", ur: "(کو find) the راستہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَنَّىٰ", transliteration: "fa-annā", meaning: { en: "then how", ur: "پھر how" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "يُبْصِرُونَ", transliteration: "yub'ṣirūna", meaning: { en: "(could) they see", ur: "(could) وہ لوگ دیکھنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  67: {
    ayahNumber: 67,
    text: "وَلَوْ نَشَآءُ لَمَسَخْنَـٰهُمْ عَلَىٰ مَكَانَتِهِمْ فَمَا ٱسْتَطَـٰعُوا۟ مُضِيًّۭا وَلَا يَرْجِعُونَ",
    words: [
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "And if", ur: "اور if" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "نَشَآءُ", transliteration: "nashāu", meaning: { en: "We willed", ur: "ہم willed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَمَسَخْنَـٰهُمْ", transliteration: "lamasakhnāhum", meaning: { en: "surely, We (would have) transformed them", ur: "یقیناً, ہم (would have) transformed them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَكَانَتِهِمْ", transliteration: "makānatihim", meaning: { en: "their places", ur: "their places" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَمَا", transliteration: "famā", meaning: { en: "then not", ur: "پھر نہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱسْتَطَـٰعُوا۟", transliteration: "is'taṭāʿū", meaning: { en: "they would have been able", ur: "وہ لوگ would have been able" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مُضِيًّۭا", transliteration: "muḍiyyan", meaning: { en: "to proceed", ur: "کو proceed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَرْجِعُونَ", transliteration: "yarjiʿūna", meaning: { en: "return", ur: "return" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  68: {
    ayahNumber: 68,
    text: "وَمَن نُّعَمِّرْهُ نُنَكِّسْهُ فِى ٱلْخَلْقِ ۖ أَفَلَا يَعْقِلُونَ",
    words: [
      { arabic: "وَمَن", transliteration: "waman", meaning: { en: "And (he) whom", ur: "اور (وہ) whom" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "نُّعَمِّرْهُ", transliteration: "nuʿammir'hu", meaning: { en: "We grant him long life", ur: "ہم grant him long زندگی" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نُنَكِّسْهُ", transliteration: "nunakkis'hu", meaning: { en: "We reverse him", ur: "ہم reverse him" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْخَلْقِ ۖ", transliteration: "l-khalqi", meaning: { en: "the creation", ur: "the تخلیق" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَفَلَا", transliteration: "afalā", meaning: { en: "Then will not", ur: "پھر will نہیں" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَعْقِلُونَ", transliteration: "yaʿqilūna", meaning: { en: "they use intellect", ur: "وہ لوگ use intellect" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  69: {
    ayahNumber: 69,
    text: "وَمَا عَلَّمْنَـٰهُ ٱلشِّعْرَ وَمَا يَنۢبَغِى لَهُۥٓ ۚ إِنْ هُوَ إِلَّا ذِكْرٌۭ وَقُرْءَانٌۭ مُّبِينٌۭ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَلَّمْنَـٰهُ", transliteration: "ʿallamnāhu", meaning: { en: "We taught him", ur: "ہم taught him" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلشِّعْرَ", transliteration: "l-shiʿ'ra", meaning: { en: "[the] poetry", ur: "[the] poetry" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَنۢبَغِى", transliteration: "yanbaghī", meaning: { en: "it is befitting", ur: "it is befitting" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُۥٓ ۚ", transliteration: "lahu", meaning: { en: "for him", ur: "for him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "it", ur: "it" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "(is) except", ur: "(is) سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذِكْرٌۭ", transliteration: "dhik'run", meaning: { en: "a Reminder", ur: "a Reminder" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَقُرْءَانٌۭ", transliteration: "waqur'ānun", meaning: { en: "and a Quran", ur: "اور a Quran" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مُّبِينٌۭ", transliteration: "mubīnun", meaning: { en: "clear", ur: "clear" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  70: {
    ayahNumber: 70,
    text: "لِّيُنذِرَ مَن كَانَ حَيًّۭا وَيَحِقَّ ٱلْقَوْلُ عَلَى ٱلْكَـٰفِرِينَ",
    words: [
      { arabic: "لِّيُنذِرَ", transliteration: "liyundhira", meaning: { en: "To warn", ur: "کو warn" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "(him) who", ur: "(him) جو" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "is", ur: "is" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَيًّۭا", transliteration: "ḥayyan", meaning: { en: "alive", ur: "alive" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "وَيَحِقَّ", transliteration: "wayaḥiqqa", meaning: { en: "and may be proved true", ur: "اور may be proved true" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْقَوْلُ", transliteration: "l-qawlu", meaning: { en: "the Word", ur: "the Word" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "against", ur: "against" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", meaning: { en: "the disbelievers", ur: "the کافر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  71: {
    ayahNumber: 71,
    text: "أَوَلَمْ يَرَوْا۟ أَنَّا خَلَقْنَا لَهُم مِّمَّا عَمِلَتْ أَيْدِينَآ أَنْعَـٰمًۭا فَهُمْ لَهَا مَـٰلِكُونَ",
    words: [
      { arabic: "أَوَلَمْ", transliteration: "awalam", meaning: { en: "Do not", ur: "Do نہیں" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَرَوْا۟", transliteration: "yaraw", meaning: { en: "they see", ur: "وہ لوگ دیکھنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَنَّا", transliteration: "annā", meaning: { en: "that We", ur: "وہ ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَلَقْنَا", transliteration: "khalaqnā", meaning: { en: "[We] created", ur: "[ہم] پیدا کیا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُم", transliteration: "lahum", meaning: { en: "for them", ur: "for them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", meaning: { en: "from what", ur: "سے کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَمِلَتْ", transliteration: "ʿamilat", meaning: { en: "have made", ur: "have made" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَيْدِينَآ", transliteration: "aydīnā", meaning: { en: "Our hands", ur: "Our hands" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنْعَـٰمًۭا", transliteration: "anʿāman", meaning: { en: "cattle", ur: "cattle" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَهُمْ", transliteration: "fahum", meaning: { en: "then they", ur: "پھر وہ لوگ" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "لَهَا", transliteration: "lahā", meaning: { en: "[for them]", ur: "[for them]" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَـٰلِكُونَ", transliteration: "mālikūna", meaning: { en: "(are the) owners", ur: "(are the) owners" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  72: {
    ayahNumber: 72,
    text: "وَذَلَّلْنَـٰهَا لَهُمْ فَمِنْهَا رَكُوبُهُمْ وَمِنْهَا يَأْكُلُونَ",
    words: [
      { arabic: "وَذَلَّلْنَـٰهَا", transliteration: "wadhallalnāhā", meaning: { en: "And We have tamed them", ur: "اور ہم have tamed them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "for them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَمِنْهَا", transliteration: "famin'hā", meaning: { en: "so some of them ", ur: "so some of them " }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "رَكُوبُهُمْ", transliteration: "rakūbuhum", meaning: { en: "they ride them", ur: "وہ لوگ ride them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمِنْهَا", transliteration: "wamin'hā", meaning: { en: "and some of them", ur: "اور some of them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَأْكُلُونَ", transliteration: "yakulūna", meaning: { en: "they eat", ur: "وہ لوگ eat" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  73: {
    ayahNumber: 73,
    text: "وَلَهُمْ فِيهَا مَنَـٰفِعُ وَمَشَارِبُ ۖ أَفَلَا يَشْكُرُونَ",
    words: [
      { arabic: "وَلَهُمْ", transliteration: "walahum", meaning: { en: "And for them", ur: "اور for them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَنَـٰفِعُ", transliteration: "manāfiʿu", meaning: { en: "(are) benefits", ur: "(are) benefits" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَشَارِبُ ۖ", transliteration: "wamashāribu", meaning: { en: "and drinks", ur: "اور drinks" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَفَلَا", transliteration: "afalā", meaning: { en: "so (will) not", ur: "so (will) نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَشْكُرُونَ", transliteration: "yashkurūna", meaning: { en: "they give thanks", ur: "وہ لوگ give thanks" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  74: {
    ayahNumber: 74,
    text: "وَٱتَّخَذُوا۟ مِن دُونِ ٱللَّهِ ءَالِهَةًۭ لَّعَلَّهُمْ يُنصَرُونَ",
    words: [
      { arabic: "وَٱتَّخَذُوا۟", transliteration: "wa-ittakhadhū", meaning: { en: "But they have taken", ur: "لیکن وہ لوگ have taken" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "besides", ur: "besides" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِ", transliteration: "dūni", meaning: { en: "besides", ur: "besides" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَالِهَةًۭ", transliteration: "ālihatan", meaning: { en: "gods", ur: "gods" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّعَلَّهُمْ", transliteration: "laʿallahum", meaning: { en: "that they may", ur: "وہ وہ لوگ may" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُنصَرُونَ", transliteration: "yunṣarūna", meaning: { en: "be helped", ur: "be helped" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  75: {
    ayahNumber: 75,
    text: "لَا يَسْتَطِيعُونَ نَصْرَهُمْ وَهُمْ لَهُمْ جُندٌۭ مُّحْضَرُونَ",
    words: [
      { arabic: "لَا", transliteration: "lā", meaning: { en: "Not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَسْتَطِيعُونَ", transliteration: "yastaṭīʿūna", meaning: { en: "they are able", ur: "وہ لوگ are able" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَصْرَهُمْ", transliteration: "naṣrahum", meaning: { en: "to help them", ur: "کو help them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "but they ", ur: "لیکن وہ لوگ " }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "for them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جُندٌۭ", transliteration: "jundun", meaning: { en: "(are) hosts", ur: "(are) hosts" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّحْضَرُونَ", transliteration: "muḥ'ḍarūna", meaning: { en: "(who will) be brought", ur: "(جو will) be brought" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' }
      ],
    },
  },
  76: {
    ayahNumber: 76,
    text: "فَلَا يَحْزُنكَ قَوْلُهُمْ ۘ إِنَّا نَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ",
    words: [
      { arabic: "فَلَا", transliteration: "falā", meaning: { en: "So (let) not", ur: "So (let) نہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "يَحْزُنكَ", transliteration: "yaḥzunka", meaning: { en: "grieve you", ur: "grieve تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "قَوْلُهُمْ ۘ", transliteration: "qawluhum", meaning: { en: "their speech", ur: "their speech" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بیشک, ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَعْلَمُ", transliteration: "naʿlamu", meaning: { en: "[We] know", ur: "[ہم] جاننا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يُسِرُّونَ", transliteration: "yusirrūna", meaning: { en: "they conceal", ur: "وہ لوگ conceal" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what", ur: "اور کیا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يُعْلِنُونَ", transliteration: "yuʿ'linūna", meaning: { en: "they declare", ur: "وہ لوگ declare" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'موصول + صلة' }
      ],
    },
  },
  77: {
    ayahNumber: 77,
    text: "أَوَلَمْ يَرَ ٱلْإِنسَـٰنُ أَنَّا خَلَقْنَـٰهُ مِن نُّطْفَةٍۢ فَإِذَا هُوَ خَصِيمٌۭ مُّبِينٌۭ",
    words: [
      { arabic: "أَوَلَمْ", transliteration: "awalam", meaning: { en: "Does not", ur: "Does نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَرَ", transliteration: "yara", meaning: { en: "see", ur: "دیکھنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْإِنسَـٰنُ", transliteration: "l-insānu", meaning: { en: "[the] man", ur: "[the] man" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَّا", transliteration: "annā", meaning: { en: "that We", ur: "وہ ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَلَقْنَـٰهُ", transliteration: "khalaqnāhu", meaning: { en: "[We] created him", ur: "[ہم] پیدا کیا him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "نُّطْفَةٍۢ", transliteration: "nuṭ'fatin", meaning: { en: "a semen-drop", ur: "a semen-drop" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "Then behold", ur: "پھر behold" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "خَصِيمٌۭ", transliteration: "khaṣīmun", meaning: { en: "(is) an opponent", ur: "(is) an opponent" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّبِينٌۭ", transliteration: "mubīnun", meaning: { en: "clear", ur: "clear" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  78: {
    ayahNumber: 78,
    text: "وَضَرَبَ لَنَا مَثَلًۭا وَنَسِىَ خَلْقَهُۥ ۖ قَالَ مَن يُحْىِ ٱلْعِظَـٰمَ وَهِىَ رَمِيمٌۭ",
    words: [
      { arabic: "وَضَرَبَ", transliteration: "waḍaraba", meaning: { en: "And he sets forth", ur: "اور وہ sets forth" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَنَا", transliteration: "lanā", meaning: { en: "for Us", ur: "for Us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَثَلًۭا", transliteration: "mathalan", meaning: { en: "an example", ur: "an example" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَنَسِىَ", transliteration: "wanasiya", meaning: { en: "and forgets", ur: "اور forgets" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "خَلْقَهُۥ ۖ", transliteration: "khalqahu", meaning: { en: "his (own) creation", ur: "his (own) تخلیق" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "He says", ur: "وہ کہتا ہے" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "Who", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يُحْىِ", transliteration: "yuḥ'yī", meaning: { en: "will give life", ur: "will give زندگی" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْعِظَـٰمَ", transliteration: "l-ʿiẓāma", meaning: { en: "(to) the bones", ur: "(کو) the bones" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهِىَ", transliteration: "wahiya", meaning: { en: "while they", ur: "while وہ لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "رَمِيمٌۭ", transliteration: "ramīmun", meaning: { en: "(are) decomposed", ur: "(are) decomposed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  79: {
    ayahNumber: 79,
    text: "قُلْ يُحْيِيهَا ٱلَّذِىٓ أَنشَأَهَآ أَوَّلَ مَرَّةٍۢ ۖ وَهُوَ بِكُلِّ خَلْقٍ عَلِيمٌ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُحْيِيهَا", transliteration: "yuḥ'yīhā", meaning: { en: "He will give them life", ur: "وہ will give them زندگی" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِىٓ", transliteration: "alladhī", meaning: { en: "Who", ur: "جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنشَأَهَآ", transliteration: "ansha-ahā", meaning: { en: "produced them", ur: "produced them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوَّلَ", transliteration: "awwala", meaning: { en: "(the) first", ur: "(the) first" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَرَّةٍۢ ۖ", transliteration: "marratin", meaning: { en: "time", ur: "وقت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He", ur: "اور وہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِكُلِّ", transliteration: "bikulli", meaning: { en: "(is) of every", ur: "(is) of ہر" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "خَلْقٍ", transliteration: "khalqin", meaning: { en: "creation", ur: "تخلیق" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلِيمٌ", transliteration: "ʿalīmun", meaning: { en: "All-Knower", ur: "سب-Knower" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ],
    },
  },
  80: {
    ayahNumber: 80,
    text: "ٱلَّذِى جَعَلَ لَكُم مِّنَ ٱلشَّجَرِ ٱلْأَخْضَرِ نَارًۭا فَإِذَآ أَنتُم مِّنْهُ تُوقِدُونَ",
    words: [
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "The One Who", ur: "The One جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَعَلَ", transliteration: "jaʿala", meaning: { en: "made", ur: "made" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "for تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلشَّجَرِ", transliteration: "l-shajari", meaning: { en: "the tree", ur: "the tree" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَخْضَرِ", transliteration: "l-akhḍari", meaning: { en: "[the] green ", ur: "[the] green " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَارًۭا", transliteration: "nāran", meaning: { en: "fire", ur: "آگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَإِذَآ", transliteration: "fa-idhā", meaning: { en: "and behold", ur: "اور behold" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "أَنتُم", transliteration: "antum", meaning: { en: "You", ur: "تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْهُ", transliteration: "min'hu", meaning: { en: "from it", ur: "سے it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُوقِدُونَ", transliteration: "tūqidūna", meaning: { en: "ignite", ur: "ignite" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  81: {
    ayahNumber: 81,
    text: "أَوَلَيْسَ ٱلَّذِى خَلَقَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ بِقَـٰدِرٍ عَلَىٰٓ أَن يَخْلُقَ مِثْلَهُم ۚ بَلَىٰ وَهُوَ ٱلْخَلَّـٰقُ ٱلْعَلِيمُ",
    words: [
      { arabic: "أَوَلَيْسَ", transliteration: "awalaysa", meaning: { en: "Is it not", ur: "Is it نہیں" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "(He) Who", ur: "(وہ) جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَلَقَ", transliteration: "khalaqa", meaning: { en: "created", ur: "پیدا کیا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", meaning: { en: "the heavens", ur: "the آسمان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَرْضَ", transliteration: "wal-arḍa", meaning: { en: "and the earth", ur: "اور زمین" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِقَـٰدِرٍ", transliteration: "biqādirin", meaning: { en: "Able", ur: "Able" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "عَلَىٰٓ", transliteration: "ʿalā", meaning: { en: "to", ur: "کو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "[that]", ur: "[وہ]" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَخْلُقَ", transliteration: "yakhluqa", meaning: { en: "create", ur: "پیدا کرنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِثْلَهُم ۚ", transliteration: "mith'lahum", meaning: { en: "(the) like of them", ur: "(the) like of them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَلَىٰ", transliteration: "balā", meaning: { en: "Yes, indeed", ur: "Yes, بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He", ur: "اور وہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْخَلَّـٰقُ", transliteration: "l-khalāqu", meaning: { en: "(is) the Supreme Creator", ur: "(is) the Supreme Creator" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَلِيمُ", transliteration: "l-ʿalīmu", meaning: { en: "the All-Knower", ur: "the سب-Knower" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'موصوف + صفت' }
      ],
    },
  },
  82: {
    ayahNumber: 82,
    text: "إِنَّمَآ أَمْرُهُۥٓ إِذَآ أَرَادَ شَيْـًٔا أَن يَقُولَ لَهُۥ كُن فَيَكُونُ",
    words: [
      { arabic: "إِنَّمَآ", transliteration: "innamā", meaning: { en: "Only", ur: "صرف" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَمْرُهُۥٓ", transliteration: "amruhu", meaning: { en: "His Command", ur: "His Command" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِذَآ", transliteration: "idhā", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَرَادَ", transliteration: "arāda", meaning: { en: "He intends", ur: "وہ intends" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "شَيْـًٔا", transliteration: "shayan", meaning: { en: "a thing", ur: "a thing" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَقُولَ", transliteration: "yaqūla", meaning: { en: "He says", ur: "وہ کہتا ہے" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "to it", ur: "کو it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُن", transliteration: "kun", meaning: { en: "Be", ur: "Be" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَيَكُونُ", transliteration: "fayakūnu", meaning: { en: "and it is", ur: "اور it is" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  83: {
    ayahNumber: 83,
    text: "فَسُبْحَـٰنَ ٱلَّذِى بِيَدِهِۦ مَلَكُوتُ كُلِّ شَىْءٍۢ وَإِلَيْهِ تُرْجَعُونَ",
    words: [
      { arabic: "فَسُبْحَـٰنَ", transliteration: "fasub'ḥāna", meaning: { en: "So glory be", ur: "So glory be" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱلَّذِى", transliteration: "alladhī", meaning: { en: "(to) the One who", ur: "(کو) the One جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِيَدِهِۦ", transliteration: "biyadihi", meaning: { en: "in Whose hand", ur: "میں Whose hand" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مَلَكُوتُ", transliteration: "malakūtu", meaning: { en: "is (the) dominion", ur: "is (the) dominion" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "(of) all", ur: "(of) سب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَىْءٍۢ", transliteration: "shayin", meaning: { en: "things", ur: "things" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِلَيْهِ", transliteration: "wa-ilayhi", meaning: { en: "and to Him", ur: "اور کو Him" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تُرْجَعُونَ", transliteration: "tur'jaʿūna", meaning: { en: "you will be returned", ur: "تم will be returned" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
};

export default TREEBANK_DATA;
