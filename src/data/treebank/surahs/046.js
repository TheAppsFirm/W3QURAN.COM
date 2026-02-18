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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
};

export default TREEBANK_DATA;
