/**
 * Surah Al-Ahqaf (The Sand Dunes) - Surah 46
 * Quranic Arabic Treebank Data
 * First 10 Ayahs
 */

export const TREEBANK_DATA = {
  surahId: 46,
  surahName: "Al-Ahqaf",
  surahNameArabic: "الأحقاف",
  totalAyahs: 35,
  revelationType: "Meccan",

  1: {
    ayahNumber: 1,
    text: "حم",
    words: [
      { arabic: "حم", transliteration: "ḥā mīm", meaning: { en: "Ha Meem", ur: "حا میم" }, pos: "INIT", posLabel: "INIT", grammar: { type: "muqattaʿat", note: "disconnected letters" } }
    ],
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    text: "تَنزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْحَكِيمِ",
    words: [
      { arabic: "تَنزِيلُ", transliteration: "tanzīlu", meaning: { en: "The revelation", ur: "اتارنا" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ن-ز-ل" } },
      { arabic: "الْكِتَابِ", transliteration: "al-kitābi", meaning: { en: "of the Book", ur: "کتاب کا" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "کی طرف سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "الْعَزِيزِ", transliteration: "al-ʿazīzi", meaning: { en: "the Almighty", ur: "غالب" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive" } },
      { arabic: "الْحَكِيمِ", transliteration: "al-ḥakīmi", meaning: { en: "the Wise", ur: "حکمت والے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'موصوف + صفت' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "مَا خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا إِلَّا بِالْحَقِّ وَأَجَلٍ مُّسَمًّى",
    words: [
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "خَلَقْنَا", transliteration: "khalaqnā", meaning: { en: "We created", ur: "ہم نے پیدا کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق", person: "1st", number: "plural" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں کو" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَالْأَرْضَ", transliteration: "wal-arḍa", meaning: { en: "and the earth", ur: "اور زمین کو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what", ur: "اور جو" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "بَيْنَهُمَا", transliteration: "baynahumā", meaning: { en: "is between them", ur: "ان کے درمیان ہے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "locative" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "بِالْحَقِّ", transliteration: "bil-ḥaqqi", meaning: { en: "with truth", ur: "حق کے ساتھ" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَأَجَلٍ", transliteration: "wa-ajalin", meaning: { en: "and a term", ur: "اور ایک مدت" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive", root: "أ-ج-ل" } },
      { arabic: "مُّسَمًّى", transliteration: "musamman", meaning: { en: "appointed", ur: "مقرر" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "س-م-و" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'عطف' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "وَالَّذِينَ كَفَرُوا عَمَّا أُنذِرُوا مُعْرِضُونَ",
    words: [
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "And those who", ur: "اور جو لوگ" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "عَمَّا", transliteration: "ʿammā", meaning: { en: "from what", ur: "جس چیز سے" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "أُنذِرُوا", transliteration: "undhirū", meaning: { en: "they were warned", ur: "وہ ڈرائے گئے" }, pos: "V", posLabel: "V", grammar: { form: "IV", voice: "passive", root: "ن-ذ-ر" } },
      { arabic: "مُعْرِضُونَ", transliteration: "muʿriḍūna", meaning: { en: "are turning away", ur: "منہ پھیرنے والے ہیں" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "ع-ر-ض" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "قُلْ أَرَأَيْتُم مَّا تَدْعُونَ مِن دُونِ اللَّهِ أَرُونِي مَاذَا خَلَقُوا مِنَ الْأَرْضِ أَمْ لَهُمْ شِرْكٌ فِي السَّمَاوَاتِ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہہ دیجیے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل", mood: "imperative" } },
      { arabic: "أَرَأَيْتُم", transliteration: "araʾaytum", meaning: { en: "Have you considered", ur: "بھلا بتاؤ" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-أ-ي", type: "interrogative" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "جن کو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "تَدْعُونَ", transliteration: "tadʿūna", meaning: { en: "you invoke", ur: "تم پکارتے ہو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "د-ع-و" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "کے" }, pos: "P", posLabel: "P", grammar: { role: "exclusion" } },
      { arabic: "دُونِ", transliteration: "dūni", meaning: { en: "besides", ur: "سوا" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أَرُونِي", transliteration: "arūnī", meaning: { en: "show me", ur: "مجھے دکھاؤ" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "ر-أ-ي", mood: "imperative" } },
      { arabic: "مَاذَا", transliteration: "mādhā", meaning: { en: "what", ur: "کیا" }, pos: "INTG", posLabel: "INTG", grammar: { type: "interrogative" } },
      { arabic: "خَلَقُوا", transliteration: "khalaqū", meaning: { en: "they have created", ur: "انہوں نے پیدا کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "میں سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", meaning: { en: "the earth", ur: "زمین" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کا" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "possession" } },
      { arabic: "شِرْكٌ", transliteration: "shirkun", meaning: { en: "partnership", ur: "شراکت" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ش-ر-ك" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'جار + مجرور' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "وَإِذَا حُشِرَ النَّاسُ كَانُوا لَهُمْ أَعْدَاءً وَكَانُوا بِعِبَادَتِهِمْ كَافِرِينَ",
    words: [
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "temporal" } },
      { arabic: "حُشِرَ", transliteration: "ḥushira", meaning: { en: "are gathered", ur: "جمع کیے جائیں گے" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ح-ش-ر" } },
      { arabic: "النَّاسُ", transliteration: "al-nāsu", meaning: { en: "the people", ur: "لوگ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "they will be", ur: "یہ ہوں گے" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "to them", ur: "ان کے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } },
      { arabic: "أَعْدَاءً", transliteration: "aʿdāʾan", meaning: { en: "enemies", ur: "دشمن" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "ع-د-و" } },
      { arabic: "وَكَانُوا", transliteration: "wakānū", meaning: { en: "and they will be", ur: "اور ہوں گے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "kāna" } },
      { arabic: "بِعِبَادَتِهِمْ", transliteration: "biʿibādatihim", meaning: { en: "of their worship", ur: "ان کی عبادت سے" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "ع-ب-د" } },
      { arabic: "كَافِرِينَ", transliteration: "kāfirīna", meaning: { en: "disbelievers", ur: "انکار کرنے والے" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ك-ف-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 7, label: 'عطف' },
        { from: 7, to: 9, label: 'حال' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "وَإِذَا تُتْلَىٰ عَلَيْهِمْ آيَاتُنَا بَيِّنَاتٍ قَالَ الَّذِينَ كَفَرُوا لِلْحَقِّ لَمَّا جَاءَهُمْ هَٰذَا سِحْرٌ مُّبِينٌ",
    words: [
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "temporal" } },
      { arabic: "تُتْلَىٰ", transliteration: "tutlā", meaning: { en: "are recited", ur: "پڑھی جاتی ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ت-ل-و" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "to them", ur: "ان کو" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } },
      { arabic: "آيَاتُنَا", transliteration: "āyātunā", meaning: { en: "Our verses", ur: "ہماری آیات" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", number: "plural" } },
      { arabic: "بَيِّنَاتٍ", transliteration: "bayyinātin", meaning: { en: "clear", ur: "واضح" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", number: "plural" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "say", ur: "کہتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "لِلْحَقِّ", transliteration: "lil-ḥaqqi", meaning: { en: "of the truth", ur: "حق کے بارے میں" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "لَمَّا", transliteration: "lammā", meaning: { en: "when", ur: "جب" }, pos: "COND", posLabel: "COND", grammar: { type: "temporal" } },
      { arabic: "جَاءَهُمْ", transliteration: "jāʾahum", meaning: { en: "it came to them", ur: "ان کے پاس آیا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ج-ي-أ" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "This is", ur: "یہ" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "سِحْرٌ", transliteration: "siḥrun", meaning: { en: "magic", ur: "جادو ہے" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "مُّبِينٌ", transliteration: "mubīnun", meaning: { en: "clear", ur: "صریح" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ب-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'موصول + صلة' },
        { from: 12, to: 13, label: 'مبتدأ + خبر' },
        { from: 13, to: 14, label: 'موصوف + صفت' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "أَمْ يَقُولُونَ افْتَرَاهُ قُلْ إِنِ افْتَرَيْتُهُ فَلَا تَمْلِكُونَ لِي مِنَ اللَّهِ شَيْئًا",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunctive" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "do they say", ur: "یہ کہتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "افْتَرَاهُ", transliteration: "iftarāhu", meaning: { en: "he has fabricated it", ur: "اس نے گھڑ لیا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "VIII", root: "ف-ر-ي" } },
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہہ دیجیے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل", mood: "imperative" } },
      { arabic: "إِنِ", transliteration: "ini", meaning: { en: "If", ur: "اگر" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "افْتَرَيْتُهُ", transliteration: "iftaraytuhu", meaning: { en: "I have fabricated it", ur: "میں نے گھڑا ہے" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "VIII", root: "ف-ر-ي" } },
      { arabic: "فَلَا", transliteration: "falā", meaning: { en: "then not", ur: "تو نہیں" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "تَمْلِكُونَ", transliteration: "tamlikūna", meaning: { en: "you have power", ur: "تم کچھ اختیار رکھتے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "م-ل-ك" } },
      { arabic: "لِي", transliteration: "lī", meaning: { en: "for me", ur: "میرے لیے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "benefactive" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "against", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "شَيْئًا", transliteration: "shayʾan", meaning: { en: "anything", ur: "کچھ بھی" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'نفی + فعل' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "قُلْ مَا كُنتُ بِدْعًا مِّنَ الرُّسُلِ وَمَا أَدْرِي مَا يُفْعَلُ بِي وَلَا بِكُمْ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہہ دیجیے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل", mood: "imperative" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "كُنتُ", transliteration: "kuntu", meaning: { en: "I am", ur: "میں ہوں" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "بِدْعًا", transliteration: "bidʿan", meaning: { en: "something new", ur: "نرالا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ب-د-ع" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "among", ur: "میں سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الرُّسُلِ", transliteration: "al-rusuli", meaning: { en: "the messengers", ur: "رسولوں" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "أَدْرِي", transliteration: "adrī", meaning: { en: "I know", ur: "میں جانتا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "د-ر-ي" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "INTG", posLabel: "INTG", grammar: { type: "interrogative" } },
      { arabic: "يُفْعَلُ", transliteration: "yufʿalu", meaning: { en: "will be done", ur: "کیا جائے گا" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ف-ع-ل" } },
      { arabic: "بِي", transliteration: "bī", meaning: { en: "with me", ur: "میرے ساتھ" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "object" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "nor", ur: "اور نہ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "بِكُمْ", transliteration: "bikum", meaning: { en: "with you", ur: "تمہارے ساتھ" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "object" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'نفی + فعل' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "قُلْ أَرَأَيْتُمْ إِن كَانَ مِنْ عِندِ اللَّهِ وَكَفَرْتُم بِهِ وَشَهِدَ شَاهِدٌ مِّن بَنِي إِسْرَائِيلَ عَلَىٰ مِثْلِهِ فَآمَنَ وَاسْتَكْبَرْتُمْ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہہ دیجیے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل", mood: "imperative" } },
      { arabic: "أَرَأَيْتُمْ", transliteration: "araʾaytum", meaning: { en: "Have you considered", ur: "بھلا بتاؤ" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-أ-ي", type: "interrogative" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "it is", ur: "یہ ہو" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "from", ur: "کی طرف سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "عِندِ", transliteration: "ʿindi", meaning: { en: "with", ur: "پاس" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَكَفَرْتُم", transliteration: "wakafartum", meaning: { en: "and you disbelieved", ur: "اور تم نے کفر کیا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "in it", ur: "اس سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "object" } },
      { arabic: "وَشَهِدَ", transliteration: "washahida", meaning: { en: "and testifies", ur: "اور گواہی دی" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ش-ه-د" } },
      { arabic: "شَاهِدٌ", transliteration: "shāhidun", meaning: { en: "a witness", ur: "ایک گواہ نے" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ش-ه-د" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "میں سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "بَنِي", transliteration: "banī", meaning: { en: "Children", ur: "بنی" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "إِسْرَائِيلَ", transliteration: "isrāʾīla", meaning: { en: "of Israel", ur: "اسرائیل" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "to", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "مِثْلِهِ", transliteration: "mithlihi", meaning: { en: "the like of it", ur: "اس جیسے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "فَآمَنَ", transliteration: "faʾāmana", meaning: { en: "and believed", ur: "تو ایمان لایا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "وَاسْتَكْبَرْتُمْ", transliteration: "wastakbartum", meaning: { en: "but you were arrogant", ur: "اور تم نے تکبر کیا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "X", root: "ك-ب-ر" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 8, label: 'عطف' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 8, to: 10, label: 'عطف' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'عطف' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "وَقَالَ الَّذِينَ كَفَرُوا لِلَّذِينَ آمَنُوا لَوْ كَانَ خَيْرًا مَّا سَبَقُونَا إِلَيْهِ",
    words: [
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "And said", ur: "اور کہا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "about those who", ur: "ان لوگوں کے بارے میں جو" }, pos: "P+REL", posLabel: "P+REL", grammar: { role: "dative" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", meaning: { en: "believed", ur: "ایمان لائے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن" } },
      { arabic: "لَوْ", transliteration: "law", meaning: { en: "If", ur: "اگر" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "it had been", ur: "ہوتا" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "خَيْرًا", transliteration: "khayran", meaning: { en: "good", ur: "بھلائی" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "خ-ي-ر" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "سَبَقُونَا", transliteration: "sabaqūnā", meaning: { en: "they would have preceded us", ur: "وہ ہم سے آگے بڑھتے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-ب-ق" } },
      { arabic: "إِلَيْهِ", transliteration: "ilayhi", meaning: { en: "to it", ur: "اس کی طرف" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "directional" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'شرط' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "وَإِذْ لَمْ يَهْتَدُوا بِهِ فَسَيَقُولُونَ هَٰذَا إِفْكٌ قَدِيمٌ",
    words: [
      { arabic: "وَإِذْ", transliteration: "wa-idh", meaning: { en: "And when", ur: "اور جب" }, pos: "CONJ+T", posLabel: "CONJ+T", grammar: { type: "temporal" } },
      { arabic: "لَمْ", transliteration: "lam", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يَهْتَدُوا", transliteration: "yahtadū", meaning: { en: "they are guided", ur: "ہدایت پائی" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ه-د-ي" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "by it", ur: "اس سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "instrument" } },
      { arabic: "فَسَيَقُولُونَ", transliteration: "fasayaqūlūna", meaning: { en: "they will say", ur: "تو کہیں گے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "This is", ur: "یہ ہے" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "إِفْكٌ", transliteration: "ifkun", meaning: { en: "an ancient fabrication", ur: "پرانا جھوٹ" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "أ-ف-ك" } },
      { arabic: "قَدِيمٌ", transliteration: "qadīmun", meaning: { en: "ancient", ur: "پرانا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ق-د-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "وَمِن قَبْلِهِ كِتَابُ مُوسَىٰ إِمَامًا وَرَحْمَةً وَهَٰذَا كِتَابٌ مُّصَدِّقٌ لِّسَانًا عَرَبِيًّا لِّيُنذِرَ الَّذِينَ ظَلَمُوا وَبُشْرَىٰ لِلْمُحْسِنِينَ",
    words: [
      { arabic: "وَمِن", transliteration: "wamin", meaning: { en: "And before", ur: "اور اس سے پہلے" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "temporal" } },
      { arabic: "قَبْلِهِ", transliteration: "qablihi", meaning: { en: "it", ur: "اس کے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "كِتَابُ", transliteration: "kitābu", meaning: { en: "was the Book", ur: "کتاب تھی" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ك-ت-ب" } },
      { arabic: "مُوسَىٰ", transliteration: "Mūsā", meaning: { en: "of Moses", ur: "موسیٰ کی" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "إِمَامًا", transliteration: "imāman", meaning: { en: "as a guide", ur: "پیشوا" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-م-م" } },
      { arabic: "وَرَحْمَةً", transliteration: "waraḥmatan", meaning: { en: "and a mercy", ur: "اور رحمت" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ر-ح-م" } },
      { arabic: "وَهَٰذَا", transliteration: "wahādhā", meaning: { en: "And this", ur: "اور یہ" }, pos: "CONJ+DEM", posLabel: "CONJ+DEM", grammar: { type: "demonstrative" } },
      { arabic: "كِتَابٌ", transliteration: "kitābun", meaning: { en: "is a Book", ur: "کتاب ہے" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ك-ت-ب" } },
      { arabic: "مُّصَدِّقٌ", transliteration: "muṣaddiqun", meaning: { en: "confirming", ur: "تصدیق کرنے والی" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", root: "ص-د-ق" } },
      { arabic: "لِّسَانًا", transliteration: "lisānan", meaning: { en: "in a language", ur: "زبان میں" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "عَرَبِيًّا", transliteration: "ʿarabiyyan", meaning: { en: "Arabic", ur: "عربی" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "لِّيُنذِرَ", transliteration: "liyundhira", meaning: { en: "to warn", ur: "تاکہ ڈرائے" }, pos: "P+V", posLabel: "P+V", grammar: { form: "IV", root: "ن-ذ-ر", mood: "subjunctive" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جنہوں نے" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "ظَلَمُوا", transliteration: "ẓalamū", meaning: { en: "wronged", ur: "ظلم کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ظ-ل-م" } },
      { arabic: "وَبُشْرَىٰ", transliteration: "wabushrā", meaning: { en: "and good tidings", ur: "اور خوشخبری" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { root: "ب-ش-ر" } },
      { arabic: "لِلْمُحْسِنِينَ", transliteration: "lilmuḥsinīna", meaning: { en: "for the doers of good", ur: "نیکی کرنے والوں کے لیے" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", root: "ح-س-ن" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'مبتدأ + خبر' },
        { from: 8, to: 9, label: 'موصوف + صفت' },
        { from: 10, to: 11, label: 'موصوف + صفت' },
        { from: 13, to: 14, label: 'موصول + صلة' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "ACC", posLabel: "ACC", grammar: { type: "accusative particle" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "said", ur: "کہا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "رَبُّنَا", transliteration: "rabbunā", meaning: { en: "Our Lord", ur: "ہمارا رب" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "ر-ب-ب" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "is Allah", ur: "اللہ ہے" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "sequential" } },
      { arabic: "اسْتَقَامُوا", transliteration: "istaqāmū", meaning: { en: "remained steadfast", ur: "ثابت قدم رہے" }, pos: "V", posLabel: "V", grammar: { form: "X", root: "ق-و-م" } },
      { arabic: "فَلَا", transliteration: "falā", meaning: { en: "then no", ur: "تو نہ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "خَوْفٌ", transliteration: "khawfun", meaning: { en: "fear", ur: "خوف" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "خ-و-ف" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "upon them", ur: "ان پر" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "nor", ur: "اور نہ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "هُمْ", transliteration: "hum", meaning: { en: "they", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { number: "plural" } },
      { arabic: "يَحْزَنُونَ", transliteration: "yaḥzanūna", meaning: { en: "will grieve", ur: "غمگین ہوں گے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ح-ز-ن" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'مبتدأ + خبر' },
        { from: 3, to: 7, label: 'عطف' },
        { from: 12, to: 13, label: 'مبتدأ + خبر' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "أُولَٰئِكَ أَصْحَابُ الْجَنَّةِ خَالِدِينَ فِيهَا جَزَاءً بِمَا كَانُوا يَعْمَلُونَ",
    words: [
      { arabic: "أُولَٰئِكَ", transliteration: "ulāʾika", meaning: { en: "Those", ur: "یہ لوگ" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "أَصْحَابُ", transliteration: "aṣḥābu", meaning: { en: "are companions", ur: "ساتھی ہیں" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ص-ح-ب" } },
      { arabic: "الْجَنَّةِ", transliteration: "al-jannati", meaning: { en: "of Paradise", ur: "جنت کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ج-ن-ن" } },
      { arabic: "خَالِدِينَ", transliteration: "khālidīna", meaning: { en: "abiding eternally", ur: "ہمیشہ رہنے والے" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "خ-ل-د" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "locative" } },
      { arabic: "جَزَاءً", transliteration: "jazāʾan", meaning: { en: "as reward", ur: "بدلے میں" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ج-ز-ي" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "for what", ur: "اس کا جو" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "they used to", ur: "وہ کرتے تھے" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", meaning: { en: "do", ur: "عمل" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-م-ل" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'موصول + صلة' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ إِحْسَانًا حَمَلَتْهُ أُمُّهُ كُرْهًا وَوَضَعَتْهُ كُرْهًا وَحَمْلُهُ وَفِصَالُهُ ثَلَاثُونَ شَهْرًا",
    words: [
      { arabic: "وَوَصَّيْنَا", transliteration: "wawaṣṣaynā", meaning: { en: "And We have enjoined", ur: "اور ہم نے نصیحت کی" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "و-ص-ي" } },
      { arabic: "الْإِنسَانَ", transliteration: "al-insāna", meaning: { en: "upon man", ur: "انسان کو" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ن-س" } },
      { arabic: "بِوَالِدَيْهِ", transliteration: "biwālidayhi", meaning: { en: "regarding his parents", ur: "اپنے والدین کے بارے میں" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "و-ل-د" } },
      { arabic: "إِحْسَانًا", transliteration: "iḥsānan", meaning: { en: "goodness", ur: "احسان" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ح-س-ن" } },
      { arabic: "حَمَلَتْهُ", transliteration: "ḥamalathu", meaning: { en: "carried him", ur: "اسے اٹھایا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ح-م-ل" } },
      { arabic: "أُمُّهُ", transliteration: "ummuhu", meaning: { en: "his mother", ur: "اس کی ماں نے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "أ-م-م" } },
      { arabic: "كُرْهًا", transliteration: "kurhan", meaning: { en: "with hardship", ur: "مشقت سے" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ك-ر-ه" } },
      { arabic: "وَوَضَعَتْهُ", transliteration: "wawaḍaʿathu", meaning: { en: "and gave birth to him", ur: "اور جنا اسے" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "و-ض-ع" } },
      { arabic: "كُرْهًا", transliteration: "kurhan", meaning: { en: "with hardship", ur: "مشقت سے" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ك-ر-ه" } },
      { arabic: "وَحَمْلُهُ", transliteration: "waḥamluhu", meaning: { en: "And his gestation", ur: "اور اس کا حمل" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "nominative", root: "ح-م-ل" } },
      { arabic: "وَفِصَالُهُ", transliteration: "wafiṣāluhu", meaning: { en: "and his weaning", ur: "اور اس کا دودھ چھڑانا" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "nominative", root: "ف-ص-ل" } },
      { arabic: "ثَلَاثُونَ", transliteration: "thalāthūna", meaning: { en: "is thirty", ur: "تیس" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "شَهْرًا", transliteration: "shahran", meaning: { en: "months", ur: "مہینے" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 5, to: 8, label: 'عطف' },
        { from: 10, to: 11, label: 'عطف' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "وَالَّذِي قَالَ لِوَالِدَيْهِ أُفٍّ لَّكُمَا أَتَعِدَانِنِي أَنْ أُخْرَجَ وَقَدْ خَلَتِ الْقُرُونُ مِن قَبْلِي",
    words: [
      { arabic: "وَالَّذِي", transliteration: "walladhī", meaning: { en: "But one who", ur: "اور جس نے" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "says", ur: "کہا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "لِوَالِدَيْهِ", transliteration: "liwālidayhi", meaning: { en: "to his parents", ur: "اپنے والدین سے" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", root: "و-ل-د" } },
      { arabic: "أُفٍّ", transliteration: "uffin", meaning: { en: "Uff! (expression of disgust)", ur: "اف" }, pos: "INTJ", posLabel: "INTJ", grammar: { type: "interjection" } },
      { arabic: "لَّكُمَا", transliteration: "lakumā", meaning: { en: "to you both", ur: "تم دونوں کو" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { number: "dual" } },
      { arabic: "أَتَعِدَانِنِي", transliteration: "ataʿidāninī", meaning: { en: "Do you promise me", ur: "کیا تم مجھ سے وعدہ کرتے ہو" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "و-ع-د" } },
      { arabic: "أَنْ", transliteration: "an", meaning: { en: "that", ur: "کہ" }, pos: "PART", posLabel: "PART", grammar: { type: "subjunctive" } },
      { arabic: "أُخْرَجَ", transliteration: "ukhraja", meaning: { en: "I will be brought forth", ur: "میں نکالا جاؤں گا" }, pos: "V", posLabel: "V", grammar: { form: "IV", voice: "passive", root: "خ-ر-ج" } },
      { arabic: "وَقَدْ", transliteration: "waqad", meaning: { en: "while already", ur: "حالانکہ" }, pos: "CONJ+EMPH", posLabel: "CONJ+EMPH", grammar: { type: "emphasis" } },
      { arabic: "خَلَتِ", transliteration: "khalati", meaning: { en: "have passed", ur: "گزر چکیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-و" } },
      { arabic: "الْقُرُونُ", transliteration: "al-qurūnu", meaning: { en: "the generations", ur: "قومیں" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before", ur: "سے پہلے" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "قَبْلِي", transliteration: "qablī", meaning: { en: "me", ur: "مجھ" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "أُولَٰئِكَ الَّذِينَ حَقَّ عَلَيْهِمُ الْقَوْلُ فِي أُمَمٍ قَدْ خَلَتْ مِن قَبْلِهِم مِّنَ الْجِنِّ وَالْإِنسِ إِنَّهُمْ كَانُوا خَاسِرِينَ",
    words: [
      { arabic: "أُولَٰئِكَ", transliteration: "ulāʾika", meaning: { en: "Those", ur: "یہ وہ لوگ ہیں" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "are the ones upon whom", ur: "جن پر" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "حَقَّ", transliteration: "ḥaqqa", meaning: { en: "has come due", ur: "ثابت ہو گیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ح-ق-ق" } },
      { arabic: "عَلَيْهِمُ", transliteration: "ʿalayhimu", meaning: { en: "upon them", ur: "ان پر" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "الْقَوْلُ", transliteration: "al-qawlu", meaning: { en: "the word (of punishment)", ur: "بات (عذاب کی)" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ق-و-ل" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "among", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "أُمَمٍ", transliteration: "umamin", meaning: { en: "nations", ur: "قوموں" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "already", ur: "بیشک" }, pos: "EMPH", posLabel: "EMPH", grammar: { type: "emphasis" } },
      { arabic: "خَلَتْ", transliteration: "khalat", meaning: { en: "passed on", ur: "گزر چکیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-و" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before", ur: "سے پہلے" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "قَبْلِهِم", transliteration: "qablihim", meaning: { en: "them", ur: "ان" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "میں سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْجِنِّ", transliteration: "al-jinni", meaning: { en: "the jinn", ur: "جنوں" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَالْإِنسِ", transliteration: "wal-insi", meaning: { en: "and mankind", ur: "اور انسانوں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "Indeed they", ur: "بیشک وہ" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "كَانُوا", transliteration: "kānū", meaning: { en: "were", ur: "تھے" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "خَاسِرِينَ", transliteration: "khāsirīna", meaning: { en: "losers", ur: "نقصان اٹھانے والے" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "خ-س-ر" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'عطف' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "وَلِكُلٍّ دَرَجَاتٌ مِّمَّا عَمِلُوا وَلِيُوَفِّيَهُمْ أَعْمَالَهُمْ وَهُمْ لَا يُظْلَمُونَ",
    words: [
      { arabic: "وَلِكُلٍّ", transliteration: "walikullin", meaning: { en: "And for all", ur: "اور ہر ایک کے لیے" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { case: "genitive" } },
      { arabic: "دَرَجَاتٌ", transliteration: "darajātun", meaning: { en: "are degrees", ur: "درجے ہیں" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural", root: "د-ر-ج" } },
      { arabic: "مِّمَّا", transliteration: "mimmā", meaning: { en: "for what", ur: "اس کے مطابق جو" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "عَمِلُوا", transliteration: "ʿamilū", meaning: { en: "they did", ur: "انہوں نے کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-م-ل" } },
      { arabic: "وَلِيُوَفِّيَهُمْ", transliteration: "waliyuwaffiyahum", meaning: { en: "and so He may fully compensate them", ur: "اور تاکہ انہیں پورا بدلہ دے" }, pos: "CONJ+P+V+PRON", posLabel: "CONJ+P+V+PRON", grammar: { form: "II", root: "و-ف-ي" } },
      { arabic: "أَعْمَالَهُمْ", transliteration: "aʿmālahum", meaning: { en: "their deeds", ur: "ان کے اعمال کا" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ع-م-ل" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "and they", ur: "اور ان پر" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { number: "plural" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "will not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يُظْلَمُونَ", transliteration: "yuẓlamūna", meaning: { en: "be wronged", ur: "ظلم کیا جائے گا" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ظ-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'نفی + فعل' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "وَيَوْمَ يُعْرَضُ الَّذِينَ كَفَرُوا عَلَى النَّارِ أَذْهَبْتُمْ طَيِّبَاتِكُمْ فِي حَيَاتِكُمُ الدُّنْيَا وَاسْتَمْتَعْتُم بِهَا",
    words: [
      { arabic: "وَيَوْمَ", transliteration: "wayawma", meaning: { en: "And the Day", ur: "اور جس دن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "يُعْرَضُ", transliteration: "yuʿraḍu", meaning: { en: "are exposed", ur: "پیش کیے جائیں گے" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ع-ر-ض" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "before", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "النَّارِ", transliteration: "al-nāri", meaning: { en: "the Fire", ur: "آگ" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ن-و-ر" } },
      { arabic: "أَذْهَبْتُمْ", transliteration: "adhhabtum", meaning: { en: "You exhausted", ur: "تم نے ختم کر لیں" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ذ-ه-ب" } },
      { arabic: "طَيِّبَاتِكُمْ", transliteration: "ṭayyibātikum", meaning: { en: "your pleasures", ur: "اپنی اچھی چیزیں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "ط-ي-ب" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "حَيَاتِكُمُ", transliteration: "ḥayātikumu", meaning: { en: "your life", ur: "تمہاری زندگی" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ح-ي-ي" } },
      { arabic: "الدُّنْيَا", transliteration: "al-dunyā", meaning: { en: "of this world", ur: "دنیا کی" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive" } },
      { arabic: "وَاسْتَمْتَعْتُم", transliteration: "wastamtaʿtum", meaning: { en: "and you enjoyed", ur: "اور لطف اٹھایا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "X", root: "م-ت-ع" } },
      { arabic: "بِهَا", transliteration: "bihā", meaning: { en: "with them", ur: "ان سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "instrument" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    text: "وَاذْكُرْ أَخَا عَادٍ إِذْ أَنذَرَ قَوْمَهُ بِالْأَحْقَافِ وَقَدْ خَلَتِ النُّذُرُ مِن بَيْنِ يَدَيْهِ وَمِنْ خَلْفِهِ أَلَّا تَعْبُدُوا إِلَّا اللَّهَ",
    words: [
      { arabic: "وَاذْكُرْ", transliteration: "wadhkur", meaning: { en: "And mention", ur: "اور ذکر کرو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ذ-ك-ر", mood: "imperative" } },
      { arabic: "أَخَا", transliteration: "akhā", meaning: { en: "the brother", ur: "بھائی کو" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-خ-و" } },
      { arabic: "عَادٍ", transliteration: "ʿādin", meaning: { en: "of Aad", ur: "عاد کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "جب" }, pos: "T", posLabel: "T", grammar: { type: "temporal" } },
      { arabic: "أَنذَرَ", transliteration: "andhara", meaning: { en: "he warned", ur: "اس نے ڈرایا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ن-ذ-ر" } },
      { arabic: "قَوْمَهُ", transliteration: "qawmahu", meaning: { en: "his people", ur: "اپنی قوم کو" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } },
      { arabic: "بِالْأَحْقَافِ", transliteration: "bil-aḥqāfi", meaning: { en: "at Al-Ahqaf (sand dunes)", ur: "احقاف میں" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَقَدْ", transliteration: "waqad", meaning: { en: "and already", ur: "اور بیشک" }, pos: "CONJ+EMPH", posLabel: "CONJ+EMPH", grammar: { type: "emphasis" } },
      { arabic: "خَلَتِ", transliteration: "khalati", meaning: { en: "had passed", ur: "گزر چکے تھے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-و" } },
      { arabic: "النُّذُرُ", transliteration: "al-nudhuru", meaning: { en: "the warners", ur: "ڈرانے والے" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "بَيْنِ", transliteration: "bayni", meaning: { en: "before", ur: "آگے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "يَدَيْهِ", transliteration: "yadayhi", meaning: { en: "him", ur: "اس کے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "وَمِنْ", transliteration: "wamin", meaning: { en: "and after", ur: "اور بعد" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "temporal" } },
      { arabic: "خَلْفِهِ", transliteration: "khalfihi", meaning: { en: "him", ur: "اس کے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "أَلَّا", transliteration: "allā", meaning: { en: "that not", ur: "کہ نہیں" }, pos: "PART+NEG", posLabel: "PART+NEG", grammar: { type: "subjunctive" } },
      { arabic: "تَعْبُدُوا", transliteration: "taʿbudū", meaning: { en: "you worship", ur: "تم عبادت کرو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ب-د" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کے" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    text: "قَالُوا أَجِئْتَنَا لِتَأْفِكَنَا عَنْ آلِهَتِنَا فَأْتِنَا بِمَا تَعِدُنَا إِن كُنتَ مِنَ الصَّادِقِينَ",
    words: [
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "They said", ur: "انہوں نے کہا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "أَجِئْتَنَا", transliteration: "ajiʾtanā", meaning: { en: "Have you come to us", ur: "کیا تو ہمارے پاس آیا ہے" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ج-ي-أ", type: "interrogative" } },
      { arabic: "لِتَأْفِكَنَا", transliteration: "litaʾfikanā", meaning: { en: "to divert us", ur: "تاکہ ہمیں پھیرے" }, pos: "P+V+PRON", posLabel: "P+V+PRON", grammar: { form: "I", root: "أ-ف-ك" } },
      { arabic: "عَنْ", transliteration: "ʿan", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "separation" } },
      { arabic: "آلِهَتِنَا", transliteration: "ālihatinā", meaning: { en: "our gods", ur: "ہمارے معبودوں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "أ-ل-ه" } },
      { arabic: "فَأْتِنَا", transliteration: "faʾtinā", meaning: { en: "Then bring us", ur: "تو لے آ ہمارے لیے" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "أ-ت-ي", mood: "imperative" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "what", ur: "جو" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "تَعِدُنَا", transliteration: "taʿidunā", meaning: { en: "you promise us", ur: "تو ہم سے وعدہ کرتا ہے" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "و-ع-د" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "كُنتَ", transliteration: "kunta", meaning: { en: "you are", ur: "تو ہو" }, pos: "V", posLabel: "V", grammar: { type: "kāna" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "میں سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الصَّادِقِينَ", transliteration: "al-ṣādiqīna", meaning: { en: "the truthful", ur: "سچوں" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", root: "ص-د-ق" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'موصول + صلة' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    text: "قَالَ إِنَّمَا الْعِلْمُ عِندَ اللَّهِ وَأُبَلِّغُكُم مَّا أُرْسِلْتُ بِهِ وَلَٰكِنِّي أَرَاكُمْ قَوْمًا تَجْهَلُونَ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "He said", ur: "اس نے کہا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "Only", ur: "بس" }, pos: "PART", posLabel: "PART", grammar: { type: "restriction" } },
      { arabic: "الْعِلْمُ", transliteration: "al-ʿilmu", meaning: { en: "the knowledge", ur: "علم" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ع-ل-م" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "is with", ur: "پاس ہے" }, pos: "N", posLabel: "N", grammar: { role: "locative" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَأُبَلِّغُكُم", transliteration: "wa-uballighukum", meaning: { en: "and I convey to you", ur: "اور میں تمہیں پہنچاتا ہوں" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "II", root: "ب-ل-غ" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "أُرْسِلْتُ", transliteration: "ursiltu", meaning: { en: "I have been sent", ur: "مجھے بھیجا گیا ہے" }, pos: "V", posLabel: "V", grammar: { form: "IV", voice: "passive", root: "ر-س-ل" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "with", ur: "کے ساتھ" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "instrument" } },
      { arabic: "وَلَٰكِنِّي", transliteration: "walākinnī", meaning: { en: "but I", ur: "لیکن میں" }, pos: "CONJ+PART+PRON", posLabel: "CONJ+PART+PRON", grammar: { type: "adversative" } },
      { arabic: "أَرَاكُمْ", transliteration: "arākum", meaning: { en: "see you", ur: "دیکھتا ہوں تمہیں" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ر-أ-ي" } },
      { arabic: "قَوْمًا", transliteration: "qawman", meaning: { en: "a people", ur: "ایسی قوم" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "تَجْهَلُونَ", transliteration: "tajhalūna", meaning: { en: "who are ignorant", ur: "جاہل ہو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ه-ل" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'موصول + صلة' }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    text: "فَلَمَّا رَأَوْهُ عَارِضًا مُّسْتَقْبِلَ أَوْدِيَتِهِمْ قَالُوا هَٰذَا عَارِضٌ مُّمْطِرُنَا بَلْ هُوَ مَا اسْتَعْجَلْتُم بِهِ رِيحٌ فِيهَا عَذَابٌ أَلِيمٌ",
    words: [
      { arabic: "فَلَمَّا", transliteration: "falammā", meaning: { en: "So when", ur: "پھر جب" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "temporal" } },
      { arabic: "رَأَوْهُ", transliteration: "raʾawhu", meaning: { en: "they saw it", ur: "انہوں نے اسے دیکھا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ر-أ-ي" } },
      { arabic: "عَارِضًا", transliteration: "ʿāriḍan", meaning: { en: "as a cloud formation", ur: "بادل" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ع-ر-ض" } },
      { arabic: "مُّسْتَقْبِلَ", transliteration: "mustaqbila", meaning: { en: "approaching", ur: "سامنے آتا ہوا" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ق-ب-ل" } },
      { arabic: "أَوْدِيَتِهِمْ", transliteration: "awdiyatihim", meaning: { en: "their valleys", ur: "ان کی وادیوں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "they said", ur: "انہوں نے کہا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "This is", ur: "یہ" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "عَارِضٌ", transliteration: "ʿāriḍun", meaning: { en: "a cloud", ur: "بادل ہے" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ع-ر-ض" } },
      { arabic: "مُّمْطِرُنَا", transliteration: "mumṭirunā", meaning: { en: "bringing us rain", ur: "ہم پر بارش برسائے گا" }, pos: "AP+PRON", posLabel: "AP+PRON", grammar: { root: "م-ط-ر" } },
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Rather", ur: "بلکہ" }, pos: "PART", posLabel: "PART", grammar: { type: "adversative" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "it is", ur: "یہ" }, pos: "PRON", posLabel: "PRON", grammar: { type: "personal" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جس کی" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "اسْتَعْجَلْتُم", transliteration: "istaʿjaltum", meaning: { en: "you were impatient for", ur: "تم نے جلدی مچائی" }, pos: "V", posLabel: "V", grammar: { form: "X", root: "ع-ج-ل" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "for it", ur: "اس کی" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "object" } },
      { arabic: "رِيحٌ", transliteration: "rīḥun", meaning: { en: "a wind", ur: "ایک ہوا" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ر-و-ح" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "in which", ur: "جس میں ہے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "locative" } },
      { arabic: "عَذَابٌ", transliteration: "ʿadhābun", meaning: { en: "is a punishment", ur: "عذاب" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "ع-ذ-ب" } },
      { arabic: "أَلِيمٌ", transliteration: "alīmun", meaning: { en: "painful", ur: "دردناک" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "أ-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'مبتدأ + خبر' },
        { from: 12, to: 13, label: 'موصول + صلة' },
        { from: 17, to: 18, label: 'موصوف + صفت' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    text: "تُدَمِّرُ كُلَّ شَيْءٍ بِأَمْرِ رَبِّهَا فَأَصْبَحُوا لَا يُرَىٰ إِلَّا مَسَاكِنُهُمْ كَذَٰلِكَ نَجْزِي الْقَوْمَ الْمُجْرِمِينَ",
    words: [
      { arabic: "تُدَمِّرُ", transliteration: "tudammiru", meaning: { en: "Destroying", ur: "تباہ کر دے" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "د-م-ر" } },
      { arabic: "كُلَّ", transliteration: "kulla", meaning: { en: "every", ur: "ہر" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "thing", ur: "چیز" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "بِأَمْرِ", transliteration: "biʾamri", meaning: { en: "by the command", ur: "حکم سے" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "أ-م-ر" } },
      { arabic: "رَبِّهَا", transliteration: "rabbihā", meaning: { en: "of its Lord", ur: "اپنے رب کے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } },
      { arabic: "فَأَصْبَحُوا", transliteration: "faʾaṣbaḥū", meaning: { en: "And they became", ur: "پھر ان کا حال یہ ہوا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ص-ب-ح" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يُرَىٰ", transliteration: "yurā", meaning: { en: "could be seen", ur: "نظر آتا" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ر-أ-ي" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "PART", posLabel: "PART", grammar: { type: "exception" } },
      { arabic: "مَسَاكِنُهُمْ", transliteration: "masākinuhum", meaning: { en: "their dwellings", ur: "ان کے مکانات" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", root: "س-ك-ن" } },
      { arabic: "كَذَٰلِكَ", transliteration: "kadhālika", meaning: { en: "Thus", ur: "اسی طرح" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "نَجْزِي", transliteration: "najzī", meaning: { en: "We recompense", ur: "ہم سزا دیتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ز-ي" } },
      { arabic: "الْقَوْمَ", transliteration: "al-qawma", meaning: { en: "the people", ur: "قوم کو" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "الْمُجْرِمِينَ", transliteration: "al-mujrimīna", meaning: { en: "who are criminals", ur: "مجرم" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ج-ر-م" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'نفی + فعل' },
        { from: 13, to: 14, label: 'موصوف + صفت' }
      ]
    }
  },

  26: {
    ayahNumber: 26,
    text: "وَلَقَدْ مَكَّنَّاهُمْ فِيمَا إِن مَّكَّنَّاكُمْ فِيهِ وَجَعَلْنَا لَهُمْ سَمْعًا وَأَبْصَارًا وَأَفْئِدَةً",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And We had certainly", ur: "اور بیشک" }, pos: "CONJ+EMPH", posLabel: "CONJ+EMPH", grammar: { type: "emphasis" } },
      { arabic: "مَكَّنَّاهُمْ", transliteration: "makkannāhum", meaning: { en: "established them", ur: "ہم نے انہیں قوت دی" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "II", root: "م-ك-ن" } },
      { arabic: "فِيمَا", transliteration: "fīmā", meaning: { en: "in that which", ur: "اس چیز میں جو" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "مَّكَّنَّاكُمْ", transliteration: "makkannākum", meaning: { en: "We established you", ur: "ہم نے تمہیں دیا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "II", root: "م-ك-ن" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "therein", ur: "اس میں" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "locative" } },
      { arabic: "وَجَعَلْنَا", transliteration: "wajaʿalnā", meaning: { en: "and We made", ur: "اور ہم نے بنائے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } },
      { arabic: "سَمْعًا", transliteration: "samʿan", meaning: { en: "hearing", ur: "کان" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "س-م-ع" } },
      { arabic: "وَأَبْصَارًا", transliteration: "wa-abṣāran", meaning: { en: "and vision", ur: "اور آنکھیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ب-ص-ر" } },
      { arabic: "وَأَفْئِدَةً", transliteration: "wa-afʾidatan", meaning: { en: "and hearts", ur: "اور دل" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ف-أ-د" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 5, label: 'موصول + صلة' },
        { from: 9, to: 10, label: 'عطف' },
        { from: 10, to: 11, label: 'عطف' }
      ]
    }
  },

  27: { ayahNumber: 27, text: "وَلَقَدْ أَهْلَكْنَا مَا حَوْلَكُم مِّنَ الْقُرَىٰ وَصَرَّفْنَا الْآيَاتِ لَعَلَّهُمْ يَرْجِعُونَ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And We have already", ur: "اور بیشک" }, pos: "CONJ+EMPH", posLabel: "CONJ+EMPH", grammar: { type: "emphasis" } },
      { arabic: "أَهْلَكْنَا", transliteration: "ahlaknā", meaning: { en: "destroyed", ur: "ہم نے ہلاک کیا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ه-ل-ك" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what was", ur: "جو کچھ" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "حَوْلَكُم", transliteration: "ḥawlakum", meaning: { en: "around you", ur: "تمہارے آس پاس" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "locative" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "میں سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْقُرَىٰ", transliteration: "al-qurā", meaning: { en: "the cities", ur: "بستیاں" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَصَرَّفْنَا", transliteration: "waṣarrafnā", meaning: { en: "and diversified", ur: "اور طرح طرح سے بیان کیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ص-ر-ف" } },
      { arabic: "الْآيَاتِ", transliteration: "al-āyāti", meaning: { en: "the signs", ur: "نشانیاں" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "لَعَلَّهُمْ", transliteration: "laʿallahum", meaning: { en: "that they might", ur: "تاکہ وہ" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "expectation" } },
      { arabic: "يَرْجِعُونَ", transliteration: "yarjiʿūna", meaning: { en: "return", ur: "لوٹ آئیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-ج-ع" } }
    ],
    structure: { relationships: [{ from: 5, to: 6, label: 'جار + مجرور' }, { from: 7, to: 8, label: 'فعل + مفعول به' }] }
  },

  28: { ayahNumber: 28, text: "فَلَوْلَا نَصَرَهُمُ الَّذِينَ اتَّخَذُوا مِن دُونِ اللَّهِ قُرْبَانًا آلِهَةً بَلْ ضَلُّوا عَنْهُمْ",
    words: [
      { arabic: "فَلَوْلَا", transliteration: "falawlā", meaning: { en: "Then why did not", ur: "پھر کیوں نہیں" }, pos: "CONJ+PART", posLabel: "CONJ+PART", grammar: { type: "interrogative" } },
      { arabic: "نَصَرَهُمُ", transliteration: "naṣarahumu", meaning: { en: "help them", ur: "ان کی مدد کی" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ن-ص-ر" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those whom", ur: "جنہیں" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "اتَّخَذُوا", transliteration: "ittakhadhū", meaning: { en: "they had taken", ur: "انہوں نے بنایا" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "أ-خ-ذ" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "besides", ur: "کے سوا" }, pos: "P", posLabel: "P", grammar: { role: "exclusion" } },
      { arabic: "دُونِ", transliteration: "dūni", meaning: { en: "besides", ur: "علاوہ" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "قُرْبَانًا", transliteration: "qurbānan", meaning: { en: "as means of nearness", ur: "تقرب کا ذریعہ" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ق-ر-ب" } },
      { arabic: "آلِهَةً", transliteration: "ālihatan", meaning: { en: "as gods", ur: "معبود" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-ل-ه" } },
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "But", ur: "بلکہ" }, pos: "PART", posLabel: "PART", grammar: { type: "adversative" } },
      { arabic: "ضَلُّوا", transliteration: "ḍallū", meaning: { en: "they strayed", ur: "وہ گم ہو گئے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ض-ل-ل" } },
      { arabic: "عَنْهُمْ", transliteration: "ʿanhum", meaning: { en: "from them", ur: "ان سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "separation" } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'موصول + صلة' }, { from: 5, to: 6, label: 'جار + مجرور' }, { from: 6, to: 7, label: 'مضاف + مضاف إليه' }] }
  },

  29: { ayahNumber: 29, text: "وَإِذْ صَرَفْنَا إِلَيْكَ نَفَرًا مِّنَ الْجِنِّ يَسْتَمِعُونَ الْقُرْآنَ",
    words: [
      { arabic: "وَإِذْ", transliteration: "wa-idh", meaning: { en: "And when", ur: "اور جب" }, pos: "CONJ+T", posLabel: "CONJ+T", grammar: { type: "temporal" } },
      { arabic: "صَرَفْنَا", transliteration: "ṣarafnā", meaning: { en: "We directed", ur: "ہم نے بھیجا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ص-ر-ف" } },
      { arabic: "إِلَيْكَ", transliteration: "ilayka", meaning: { en: "to you", ur: "تیری طرف" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "directional" } },
      { arabic: "نَفَرًا", transliteration: "nafaran", meaning: { en: "a group", ur: "ایک ٹولی" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "میں سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْجِنِّ", transliteration: "al-jinni", meaning: { en: "the jinn", ur: "جنوں" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "يَسْتَمِعُونَ", transliteration: "yastamiʿūna", meaning: { en: "listening to", ur: "سنتے ہوئے" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "س-م-ع" } },
      { arabic: "الْقُرْآنَ", transliteration: "al-qurʾāna", meaning: { en: "the Quran", ur: "قرآن" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } }
    ],
    structure: { relationships: [{ from: 5, to: 6, label: 'جار + مجرور' }, { from: 7, to: 8, label: 'فعل + مفعول به' }] }
  },

  30: { ayahNumber: 30, text: "قَالُوا يَا قَوْمَنَا إِنَّا سَمِعْنَا كِتَابًا أُنزِلَ مِن بَعْدِ مُوسَىٰ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ يَهْدِي إِلَى الْحَقِّ وَإِلَىٰ طَرِيقٍ مُّسْتَقِيمٍ",
    words: [
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "They said", ur: "انہوں نے کہا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے" }, pos: "VOC", posLabel: "VOC", grammar: { type: "vocative" } },
      { arabic: "قَوْمَنَا", transliteration: "qawmanā", meaning: { en: "our people", ur: "ہماری قوم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed we", ur: "بیشک ہم نے" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "سَمِعْنَا", transliteration: "samiʿnā", meaning: { en: "have heard", ur: "سنا ہے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "س-م-ع" } },
      { arabic: "كِتَابًا", transliteration: "kitāban", meaning: { en: "a Book", ur: "ایک کتاب" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ك-ت-ب" } },
      { arabic: "أُنزِلَ", transliteration: "unzila", meaning: { en: "revealed", ur: "نازل ہوئی" }, pos: "V", posLabel: "V", grammar: { form: "IV", voice: "passive", root: "ن-ز-ل" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "after", ur: "بعد" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", meaning: { en: "after", ur: "کے بعد" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مُوسَىٰ", transliteration: "Mūsā", meaning: { en: "Moses", ur: "موسیٰ" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مُصَدِّقًا", transliteration: "muṣaddiqan", meaning: { en: "confirming", ur: "تصدیق کرنے والی" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ص-د-ق" } },
      { arabic: "لِّمَا", transliteration: "limā", meaning: { en: "what was", ur: "اس کی جو" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "بَيْنَ", transliteration: "bayna", meaning: { en: "before", ur: "پہلے" }, pos: "N", posLabel: "N", grammar: { role: "locative" } },
      { arabic: "يَدَيْهِ", transliteration: "yadayhi", meaning: { en: "it", ur: "اس کے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "يَهْدِي", transliteration: "yahdī", meaning: { en: "it guides", ur: "رہنمائی کرتی ہے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ه-د-ي" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف" }, pos: "P", posLabel: "P", grammar: { role: "directional" } },
      { arabic: "الْحَقِّ", transliteration: "al-ḥaqqi", meaning: { en: "the truth", ur: "حق" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ح-ق-ق" } },
      { arabic: "وَإِلَىٰ", transliteration: "wa-ilā", meaning: { en: "and to", ur: "اور طرف" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "directional" } },
      { arabic: "طَرِيقٍ", transliteration: "ṭarīqin", meaning: { en: "a path", ur: "راہ" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مُّسْتَقِيمٍ", transliteration: "mustaqīmin", meaning: { en: "straight", ur: "سیدھی" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "ق-و-م" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'نداء' }, { from: 8, to: 9, label: 'جار + مجرور' }, { from: 9, to: 10, label: 'مضاف + مضاف إليه' }, { from: 16, to: 17, label: 'جار + مجرور' }, { from: 19, to: 20, label: 'موصوف + صفت' }] }
  },

  31: { ayahNumber: 31, text: "يَا قَوْمَنَا أَجِيبُوا دَاعِيَ اللَّهِ وَآمِنُوا بِهِ يَغْفِرْ لَكُم مِّن ذُنُوبِكُمْ وَيُجِرْكُم مِّنْ عَذَابٍ أَلِيمٍ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے" }, pos: "VOC", posLabel: "VOC", grammar: { type: "vocative" } },
      { arabic: "قَوْمَنَا", transliteration: "qawmanā", meaning: { en: "our people", ur: "ہماری قوم" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } },
      { arabic: "أَجِيبُوا", transliteration: "ajībū", meaning: { en: "respond to", ur: "قبول کرو" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ج-و-ب", mood: "imperative" } },
      { arabic: "دَاعِيَ", transliteration: "dāʿiya", meaning: { en: "the caller", ur: "بلانے والے کی" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "د-ع-و" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَآمِنُوا", transliteration: "wa-āminū", meaning: { en: "and believe", ur: "اور ایمان لاؤ" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "أ-م-ن", mood: "imperative" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "in Him", ur: "اس پر" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "object" } },
      { arabic: "يَغْفِرْ", transliteration: "yaghfir", meaning: { en: "He will forgive", ur: "معاف کرے گا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "غ-ف-ر", mood: "jussive" } },
      { arabic: "لَكُم", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "benefactive" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "ذُنُوبِكُمْ", transliteration: "dhunūbikum", meaning: { en: "your sins", ur: "تمہارے گناہ" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", root: "ذ-ن-ب" } },
      { arabic: "وَيُجِرْكُم", transliteration: "wayujirkum", meaning: { en: "and protect you", ur: "اور تمہیں بچائے" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "IV", root: "ج-و-ر" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "عَذَابٍ", transliteration: "ʿadhābin", meaning: { en: "a punishment", ur: "عذاب" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ع-ذ-ب" } },
      { arabic: "أَلِيمٍ", transliteration: "alīmin", meaning: { en: "painful", ur: "دردناک" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive", root: "أ-ل-م" } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'نداء' }, { from: 4, to: 5, label: 'مضاف + مضاف إليه' }, { from: 10, to: 11, label: 'جار + مجرور' }, { from: 13, to: 14, label: 'جار + مجرور' }, { from: 14, to: 15, label: 'موصوف + صفت' }] }
  },

  32: { ayahNumber: 32, text: "وَمَن لَّا يُجِبْ دَاعِيَ اللَّهِ فَلَيْسَ بِمُعْجِزٍ فِي الْأَرْضِ وَلَيْسَ لَهُ مِن دُونِهِ أَوْلِيَاءُ",
    words: [
      { arabic: "وَمَن", transliteration: "waman", meaning: { en: "And whoever", ur: "اور جو" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "conditional" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "does not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يُجِبْ", transliteration: "yujib", meaning: { en: "respond to", ur: "قبول کرے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ج-و-ب", mood: "jussive" } },
      { arabic: "دَاعِيَ", transliteration: "dāʿiya", meaning: { en: "the caller", ur: "بلانے والے کی بات" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "د-ع-و" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "فَلَيْسَ", transliteration: "falaysa", meaning: { en: "he is not", ur: "تو وہ نہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "negation" } },
      { arabic: "بِمُعْجِزٍ", transliteration: "bimuʿjizin", meaning: { en: "one to escape", ur: "بھاگ سکنے والا" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", root: "ع-ج-ز" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "upon", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "الْأَرْضِ", transliteration: "al-arḍi", meaning: { en: "the earth", ur: "زمین" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَلَيْسَ", transliteration: "walaysa", meaning: { en: "and he has not", ur: "اور نہیں ہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "negation" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "for him", ur: "اس کے لیے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "besides", ur: "سوا" }, pos: "P", posLabel: "P", grammar: { role: "exclusion" } },
      { arabic: "دُونِهِ", transliteration: "dūnihi", meaning: { en: "Him", ur: "اس کے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "أَوْلِيَاءُ", transliteration: "awliyāʾu", meaning: { en: "protectors", ur: "مددگار" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "و-ل-ي" } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'نفی + فعل' }, { from: 4, to: 5, label: 'مضاف + مضاف إليه' }, { from: 8, to: 9, label: 'جار + مجرور' }, { from: 12, to: 13, label: 'جار + مجرور' }] }
  },

  33: { ayahNumber: 33, text: "أَوَلَمْ يَرَوْا أَنَّ اللَّهَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَلَمْ يَعْيَ بِخَلْقِهِنَّ بِقَادِرٍ عَلَىٰ أَن يُحْيِيَ الْمَوْتَىٰ بَلَىٰ إِنَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    words: [
      { arabic: "أَوَلَمْ", transliteration: "awalam", meaning: { en: "Do they not", ur: "کیا نہیں" }, pos: "INTG+NEG", posLabel: "INTG+NEG", grammar: { type: "interrogative" } },
      { arabic: "يَرَوْا", transliteration: "yaraw", meaning: { en: "see", ur: "دیکھتے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-أ-ي" } },
      { arabic: "أَنَّ", transliteration: "anna", meaning: { en: "that", ur: "کہ" }, pos: "ACC", posLabel: "ACC", grammar: { type: "accusative particle" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "who", ur: "جس نے" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "خَلَقَ", transliteration: "khalaqa", meaning: { en: "created", ur: "بنایا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-ق" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "the heavens", ur: "آسمانوں" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَالْأَرْضَ", transliteration: "wal-arḍa", meaning: { en: "and the earth", ur: "اور زمین" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "وَلَمْ", transliteration: "walam", meaning: { en: "and was not", ur: "اور نہیں" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "يَعْيَ", transliteration: "yaʿya", meaning: { en: "wearied", ur: "تھکا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-ي-ي" } },
      { arabic: "بِخَلْقِهِنَّ", transliteration: "bikhalqihinna", meaning: { en: "by their creation", ur: "ان کی تخلیق سے" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { root: "خ-ل-ق" } },
      { arabic: "بِقَادِرٍ", transliteration: "biqādirin", meaning: { en: "able", ur: "قادر ہے" }, pos: "P+AP", posLabel: "P+AP", grammar: { root: "ق-د-ر" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "to", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ" }, pos: "PART", posLabel: "PART", grammar: { type: "subjunctive" } },
      { arabic: "يُحْيِيَ", transliteration: "yuḥyiya", meaning: { en: "He gives life", ur: "زندہ کرے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ح-ي-ي" } },
      { arabic: "الْمَوْتَىٰ", transliteration: "al-mawtā", meaning: { en: "to the dead", ur: "مردوں کو" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "م-و-ت" } },
      { arabic: "بَلَىٰ", transliteration: "balā", meaning: { en: "Yes", ur: "ہاں" }, pos: "PART", posLabel: "PART", grammar: { type: "affirmative" } },
      { arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "Indeed He", ur: "بیشک وہ" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammar: { type: "accusative particle" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every", ur: "ہر" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "thing", ur: "چیز" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "قَدِيرٌ", transliteration: "qadīrun", meaning: { en: "is Able", ur: "قدرت رکھنے والا ہے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", root: "ق-د-ر" } }
    ],
    structure: { relationships: [{ from: 5, to: 6, label: 'موصول + صلة' }, { from: 7, to: 8, label: 'عطف' }, { from: 9, to: 10, label: 'نفی + فعل' }, { from: 20, to: 21, label: 'مضاف + مضاف إليه' }] }
  },

  34: { ayahNumber: 34, text: "وَيَوْمَ يُعْرَضُ الَّذِينَ كَفَرُوا عَلَى النَّارِ أَلَيْسَ هَٰذَا بِالْحَقِّ قَالُوا بَلَىٰ وَرَبِّنَا",
    words: [
      { arabic: "وَيَوْمَ", transliteration: "wayawma", meaning: { en: "And the Day", ur: "اور جس دن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative" } },
      { arabic: "يُعْرَضُ", transliteration: "yuʿraḍu", meaning: { en: "are exposed", ur: "پیش کیے جائیں گے" }, pos: "V", posLabel: "V", grammar: { form: "I", voice: "passive", root: "ع-ر-ض" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "before", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "النَّارِ", transliteration: "al-nāri", meaning: { en: "the Fire", ur: "آگ" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أَلَيْسَ", transliteration: "alaysa", meaning: { en: "Is not", ur: "کیا نہیں" }, pos: "INTG+V", posLabel: "INTG+V", grammar: { type: "interrogative" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "یہ" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "بِالْحَقِّ", transliteration: "bil-ḥaqqi", meaning: { en: "the truth", ur: "حق" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ح-ق-ق" } },
      { arabic: "قَالُوا", transliteration: "qālū", meaning: { en: "They will say", ur: "وہ کہیں گے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "بَلَىٰ", transliteration: "balā", meaning: { en: "Yes", ur: "ہاں" }, pos: "PART", posLabel: "PART", grammar: { type: "affirmative" } },
      { arabic: "وَرَبِّنَا", transliteration: "warabbinā", meaning: { en: "by our Lord", ur: "ہمارے رب کی قسم" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "genitive", root: "ر-ب-ب" } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'موصول + صلة' }, { from: 5, to: 6, label: 'جار + مجرور' }] }
  },

  35: { ayahNumber: 35, text: "فَاصْبِرْ كَمَا صَبَرَ أُولُو الْعَزْمِ مِنَ الرُّسُلِ وَلَا تَسْتَعْجِل لَّهُمْ",
    words: [
      { arabic: "فَاصْبِرْ", transliteration: "faṣbir", meaning: { en: "So be patient", ur: "پس صبر کرو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ص-ب-ر", mood: "imperative" } },
      { arabic: "كَمَا", transliteration: "kamā", meaning: { en: "as", ur: "جیسے" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "comparative" } },
      { arabic: "صَبَرَ", transliteration: "ṣabara", meaning: { en: "were patient", ur: "صبر کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ص-ب-ر" } },
      { arabic: "أُولُو", transliteration: "ulū", meaning: { en: "those of", ur: "والے" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "الْعَزْمِ", transliteration: "al-ʿazmi", meaning: { en: "determination", ur: "عزم" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ع-ز-م" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "among", ur: "میں سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الرُّسُلِ", transliteration: "al-rusuli", meaning: { en: "the messengers", ur: "رسولوں" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and do not", ur: "اور نہ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "prohibitive" } },
      { arabic: "تَسْتَعْجِل", transliteration: "tastaʿjil", meaning: { en: "be impatient", ur: "جلدی مچاؤ" }, pos: "V", posLabel: "V", grammar: { form: "X", root: "ع-ج-ل" } },
      { arabic: "لَّهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "dative" } }
    ],
    structure: { relationships: [{ from: 4, to: 5, label: 'مضاف + مضاف إليه' }, { from: 6, to: 7, label: 'جار + مجرور' }, { from: 8, to: 9, label: 'نهی' }] }
  }
};

export default TREEBANK_DATA;
