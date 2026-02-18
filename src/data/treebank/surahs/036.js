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
    structure: { diagram: ["MUQATTA'AT"], explanation: "Mysterious letters opening the surah - creates reverence and captures attention" }
  },

  2: {
    ayahNumber: 2,
    text: "وَالْقُرْآنِ الْحَكِيمِ",
    translation: { en: "By the wise Quran.", ur: "قسم ہے حکمت والے قرآن کی" },
    words: [
      { id: "36:2:1", position: 1, arabic: "وَالْقُرْآنِ", transliteration: "wal-Qurʾāni", root: "ق ر أ", meaning: { en: "By the Quran", ur: "قرآن کی قسم" }, pos: ["CONJ", "N"], posLabel: "CONJ+N", grammarRole: "oath", features: { case: "genitive", definite: true }, grammarExplanations: { en: "Oath - واو القسم + object of oath in genitive", ur: "قسم - واو القسم + مقسم به مجرور" } },
      { id: "36:2:2", position: 2, arabic: "الْحَكِيمِ", transliteration: "al-ḥakīmi", root: "ح ك م", meaning: { en: "the wise", ur: "حکمت والے" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "adjective", features: { case: "genitive", definite: true, pattern: "فَعِيل" }, grammarExplanations: { en: "Adjective describing القرآن - 'full of wisdom' or 'decisive'", ur: "صفت - حکمت سے بھرا ہوا یا فیصلہ کن" } }
    ],
    structure: { diagram: ["OATH"], explanation: "Divine oath by the Quran - emphasizing its wisdom and authority" }
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
    structure: { diagram: ["EMPH-CLAUSE"], explanation: "The answer to the oath - confirming Muhammad's prophethood with double emphasis" }
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
    structure: { diagram: ["PREP-PHRASE"], explanation: "Continuation - the Prophet is on the straight path (connected to previous ayah)" }
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
    structure: { diagram: ["N-MUDAF-ILAYH"], explanation: "Description of the Quran's source - from the Almighty and Merciful" }
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
    structure: { diagram: ["PURPOSE", "REL-CLAUSE", "RESULT"], explanation: "Purpose of revelation - to warn those whose ancestors were not warned" }
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
    structure: { diagram: ["EMPH-V-CLAUSE", "RESULT"], explanation: "Divine decree fulfilled - most will not believe" }
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
    structure: { diagram: ["EMPH-V-CLAUSE", "RESULT", "RESULT"], explanation: "Metaphor of spiritual bondage - unable to look down (at truth)" }
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
    structure: { diagram: ["V-CLAUSE", "V-CLAUSE", "RESULT"], explanation: "Complete spiritual blindness - barriers in all directions + covering their sight" }
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
    structure: { diagram: ["NOM-SENT", "DISJUNCT", "RESULT"], explanation: "Futility of warning the obstinate - whether warned or not, they refuse" }
  }
};

export default TREEBANK_DATA;
