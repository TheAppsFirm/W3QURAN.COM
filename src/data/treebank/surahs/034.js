/**
 * Surah Saba (34) - Sheba
 * Quranic Arabic Treebank Data
 * First 10 ayahs - Makki surah
 */

export const TREEBANK_DATA = {
  surahId: 34,
  surahName: "Saba",
  surahNameArabic: "سبأ",
  totalAyahs: 54,

  1: {
    ayahNumber: 1,
    text: "الْحَمْدُ لِلَّهِ الَّذِي لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ وَلَهُ الْحَمْدُ فِي الْآخِرَةِ ۚ وَهُوَ الْحَكِيمُ الْخَبِيرُ",
    translation: { en: "All praise is due to Allah, to whom belongs whatever is in the heavens and whatever is in the earth, and to Him belongs all praise in the Hereafter. And He is the Wise, the Aware.", ur: "سب تعریف اللہ کے لیے ہے جس کا ہے جو کچھ آسمانوں میں ہے اور جو زمین میں ہے اور آخرت میں بھی اسی کی تعریف ہے، اور وہ حکمت والا خبردار ہے" },
    words: [
      { id: "34:1:1", position: 1, arabic: "الْحَمْدُ", transliteration: "al-ḥamdu", root: "ح م د", meaning: { en: "All praise", ur: "سب تعریف" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative", definite: true }, grammarExplanations: { en: "Subject (مبتدأ) of nominal sentence", ur: "مبتدأ" } },
      { id: "34:1:2", position: 2, arabic: "لِلَّهِ", transliteration: "lillāhi", root: "أ ل ه", meaning: { en: "is due to Allah", ur: "اللہ کے لیے" }, pos: ["PREP", "PN"], posLabel: "PREP+PN", grammarRole: "predicate", features: { case: "genitive" }, grammarExplanations: { en: "Predicate (خبر) - prepositional phrase", ur: "خبر - جار مجرور" } },
      { id: "34:1:3", position: 3, arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "to whom", ur: "جس کا" }, pos: ["REL"], posLabel: "REL", grammarRole: "relative", grammarExplanations: { en: "Relative pronoun describing Allah", ur: "اسم موصول" } },
      { id: "34:1:4", position: 4, arabic: "لَهُ", transliteration: "lahu", meaning: { en: "belongs to Him", ur: "اس کا ہے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "predicate", grammarExplanations: { en: "Predicate of relative clause", ur: "خبر مقدم" } },
      { id: "34:1:5", position: 5, arabic: "مَا", transliteration: "mā", meaning: { en: "whatever", ur: "جو کچھ" }, pos: ["REL"], posLabel: "REL", grammarRole: "subject", grammarExplanations: { en: "Relative pronoun - subject", ur: "موصول - مبتدأ مؤخر" } },
      { id: "34:1:6", position: 6, arabic: "فِي", transliteration: "fī", meaning: { en: "is in", ur: "میں" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition of location", ur: "حرف جار مکانی" } },
      { id: "34:1:7", position: 7, arabic: "السَّمَاوَاتِ", transliteration: "as-samāwāti", root: "س م و", meaning: { en: "the heavens", ur: "آسمانوں" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive", number: "plural", definite: true }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:1:8", position: 8, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "and whatever", ur: "اور جو کچھ" }, pos: ["CONJ", "REL"], posLabel: "CONJ+REL", grammarRole: "subject", grammarExplanations: { en: "Conjunction + relative pronoun", ur: "عطف + موصول" } },
      { id: "34:1:9", position: 9, arabic: "فِي", transliteration: "fī", meaning: { en: "is in", ur: "میں" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جار" } },
      { id: "34:1:10", position: 10, arabic: "الْأَرْضِ", transliteration: "al-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive", definite: true }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:1:11", position: 11, arabic: "وَلَهُ", transliteration: "wa-lahu", meaning: { en: "and to Him belongs", ur: "اور اس کا ہے" }, pos: ["CONJ", "PREP", "PRON"], posLabel: "CONJ+PREP+PRON", grammarRole: "predicate", grammarExplanations: { en: "Conjunction + predicate", ur: "عطف + خبر مقدم" } },
      { id: "34:1:12", position: 12, arabic: "الْحَمْدُ", transliteration: "al-ḥamdu", root: "ح م د", meaning: { en: "all praise", ur: "تعریف" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative", definite: true }, grammarExplanations: { en: "Subject", ur: "مبتدأ مؤخر" } },
      { id: "34:1:13", position: 13, arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جار" } },
      { id: "34:1:14", position: 14, arabic: "الْآخِرَةِ", transliteration: "al-ākhirati", root: "أ خ ر", meaning: { en: "the Hereafter", ur: "آخرت" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive", definite: true }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:1:15", position: 15, arabic: "وَهُوَ", transliteration: "wa-huwa", meaning: { en: "And He", ur: "اور وہ" }, pos: ["CONJ", "PRON"], posLabel: "CONJ+PRON", grammarRole: "subject", grammarExplanations: { en: "Conjunction + pronoun subject", ur: "عطف + ضمیر مبتدأ" } },
      { id: "34:1:16", position: 16, arabic: "الْحَكِيمُ", transliteration: "al-ḥakīmu", root: "ح ك م", meaning: { en: "the Wise", ur: "حکمت والا" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "predicate", features: { case: "nominative", definite: true, pattern: "فَعِيل" }, grammarExplanations: { en: "First predicate", ur: "خبر اول" } },
      { id: "34:1:17", position: 17, arabic: "الْخَبِيرُ", transliteration: "al-khabīru", root: "خ ب ر", meaning: { en: "the Aware", ur: "خبردار" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "predicate", features: { case: "nominative", definite: true, pattern: "فَعِيل" }, grammarExplanations: { en: "Second predicate", ur: "خبر ثانی" } }
    ],
    structure: { diagram: ["NOM-SENT", "REL-CLAUSE", "NOM-SENT", "NOM-SENT"], explanation: "Praise to Allah + description of His dominion + divine attributes" ,
       relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 5, to: 11, label: 'مبتدأ + خبر' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 11, label: 'مبتدأ + خبر' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 12, to: 16, label: 'مبتدأ + خبر' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'مبتدأ + خبر' }
      ],
    }
  },

  2: {
    ayahNumber: 2,
    text: "يَعْلَمُ مَا يَلِجُ فِي الْأَرْضِ وَمَا يَخْرُجُ مِنْهَا وَمَا يَنزِلُ مِنَ السَّمَاءِ وَمَا يَعْرُجُ فِيهَا ۚ وَهُوَ الرَّحِيمُ الْغَفُورُ",
    translation: { en: "He knows what penetrates into the earth and what emerges from it and what descends from the heaven and what ascends therein. And He is the Merciful, the Forgiving.", ur: "وہ جانتا ہے جو زمین میں داخل ہوتا ہے اور جو اس سے نکلتا ہے اور جو آسمان سے اترتا ہے اور جو اس میں چڑھتا ہے، اور وہ رحم کرنے والا بخشنے والا ہے" },
    words: [
      { id: "34:2:1", position: 1, arabic: "يَعْلَمُ", transliteration: "yaʿlamu", root: "ع ل م", meaning: { en: "He knows", ur: "وہ جانتا ہے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect", person: "3rd", gender: "masculine" }, grammarExplanations: { en: "Imperfect verb - habitual action", ur: "فعل مضارع - استمرار" } },
      { id: "34:2:2", position: 2, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو" }, pos: ["REL"], posLabel: "REL", grammarRole: "object", grammarExplanations: { en: "Relative pronoun - object", ur: "موصول - مفعول" } },
      { id: "34:2:3", position: 3, arabic: "يَلِجُ", transliteration: "yaliju", root: "و ل ج", meaning: { en: "penetrates", ur: "داخل ہوتا ہے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect verb in relative clause", ur: "فعل مضارع - صلہ موصول" } },
      { id: "34:2:4", position: 4, arabic: "فِي", transliteration: "fī", meaning: { en: "into", ur: "میں" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جار" } },
      { id: "34:2:5", position: 5, arabic: "الْأَرْضِ", transliteration: "al-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive", definite: true }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:2:6", position: 6, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "and what", ur: "اور جو" }, pos: ["CONJ", "REL"], posLabel: "CONJ+REL", grammarRole: "object", grammarExplanations: { en: "Conjunction + relative", ur: "عطف + موصول" } },
      { id: "34:2:7", position: 7, arabic: "يَخْرُجُ", transliteration: "yakhruju", root: "خ ر ج", meaning: { en: "emerges", ur: "نکلتا ہے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect verb", ur: "فعل مضارع" } },
      { id: "34:2:8", position: 8, arabic: "مِنْهَا", transliteration: "minhā", meaning: { en: "from it", ur: "اس سے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "34:2:9", position: 9, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "and what", ur: "اور جو" }, pos: ["CONJ", "REL"], posLabel: "CONJ+REL", grammarRole: "object", grammarExplanations: { en: "Conjunction + relative", ur: "عطف + موصول" } },
      { id: "34:2:10", position: 10, arabic: "يَنزِلُ", transliteration: "yanzilu", root: "ن ز ل", meaning: { en: "descends", ur: "اترتا ہے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect verb", ur: "فعل مضارع" } },
      { id: "34:2:11", position: 11, arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جار" } },
      { id: "34:2:12", position: 12, arabic: "السَّمَاءِ", transliteration: "as-samāʾi", root: "س م و", meaning: { en: "the heaven", ur: "آسمان" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive", definite: true }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:2:13", position: 13, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "and what", ur: "اور جو" }, pos: ["CONJ", "REL"], posLabel: "CONJ+REL", grammarRole: "object", grammarExplanations: { en: "Conjunction + relative", ur: "عطف + موصول" } },
      { id: "34:2:14", position: 14, arabic: "يَعْرُجُ", transliteration: "yaʿruju", root: "ع ر ج", meaning: { en: "ascends", ur: "چڑھتا ہے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect verb", ur: "فعل مضارع" } },
      { id: "34:2:15", position: 15, arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "34:2:16", position: 16, arabic: "وَهُوَ", transliteration: "wa-huwa", meaning: { en: "And He", ur: "اور وہ" }, pos: ["CONJ", "PRON"], posLabel: "CONJ+PRON", grammarRole: "subject", grammarExplanations: { en: "Conjunction + pronoun", ur: "عطف + ضمیر" } },
      { id: "34:2:17", position: 17, arabic: "الرَّحِيمُ", transliteration: "ar-raḥīmu", root: "ر ح م", meaning: { en: "the Merciful", ur: "رحم کرنے والا" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "predicate", features: { case: "nominative", definite: true, pattern: "فَعِيل" }, grammarExplanations: { en: "First predicate", ur: "خبر اول" } },
      { id: "34:2:18", position: 18, arabic: "الْغَفُورُ", transliteration: "al-ghafūru", root: "غ ف ر", meaning: { en: "the Forgiving", ur: "بخشنے والا" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "predicate", features: { case: "nominative", definite: true, pattern: "فَعُول" }, grammarExplanations: { en: "Second predicate", ur: "خبر ثانی" } }
    ],
    structure: { diagram: ["V", "REL-CLAUSE", "REL-CLAUSE", "REL-CLAUSE", "REL-CLAUSE", "NOM-SENT"], explanation: "Allah's complete knowledge of all movements + divine attributes" ,
       relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 6, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 9, label: 'فعل + مفعول به' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 10, to: 13, label: 'فعل + مفعول به' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 14, to: 16, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'مبتدأ + خبر' }
      ],
    }
  },

  3: {
    ayahNumber: 3,
    text: "وَقَالَ الَّذِينَ كَفَرُوا لَا تَأْتِينَا السَّاعَةُ ۖ قُلْ بَلَىٰ وَرَبِّي لَتَأْتِيَنَّكُمْ عَالِمِ الْغَيْبِ ۖ لَا يَعْزُبُ عَنْهُ مِثْقَالُ ذَرَّةٍ فِي السَّمَاوَاتِ وَلَا فِي الْأَرْضِ وَلَا أَصْغَرُ مِن ذَٰلِكَ وَلَا أَكْبَرُ إِلَّا فِي كِتَابٍ مُّبِينٍ",
    translation: { en: "Those who disbelieve say: 'The Hour will not come to us.' Say: 'Yes, by my Lord, it will surely come to you, [the] Knower of the unseen.' Not absent from Him is an atom's weight in the heavens or in the earth, nor smaller than that nor greater, except that it is in a clear register.", ur: "اور کافر کہتے ہیں کہ ہم پر قیامت نہیں آئے گی، کہہ دو ہاں میرے رب کی قسم ضرور آئے گی، وہ غیب کا جاننے والا ہے، اس سے ذرہ برابر بھی نہیں چھپتی آسمانوں میں اور نہ زمین میں، اور نہ اس سے چھوٹی اور نہ بڑی مگر واضح کتاب میں ہے" },
    words: [
      { id: "34:3:1", position: 1, arabic: "وَقَالَ", transliteration: "wa-qāla", root: "ق و ل", meaning: { en: "And say", ur: "اور کہتے ہیں" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Conjunction + perfect verb", ur: "عطف + فعل ماضی" } },
      { id: "34:3:2", position: 2, arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: ["REL"], posLabel: "REL", grammarRole: "subject", grammarExplanations: { en: "Relative pronoun - subject", ur: "موصول - فاعل" } },
      { id: "34:3:3", position: 3, arabic: "كَفَرُوا", transliteration: "kafarū", root: "ك ف ر", meaning: { en: "disbelieve", ur: "کافر ہوئے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect", number: "plural" }, grammarExplanations: { en: "Perfect verb - relative clause", ur: "فعل ماضی - صلہ" } },
      { id: "34:3:4", position: 4, arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative particle", ur: "حرف نفی" } },
      { id: "34:3:5", position: 5, arabic: "تَأْتِينَا", transliteration: "taʾtīnā", root: "أ ت ي", meaning: { en: "will come to us", ur: "ہم پر آئے گی" }, pos: ["V", "PRON"], posLabel: "V+PRON", grammarRole: "verb", features: { aspect: "imperfect", gender: "feminine" }, grammarExplanations: { en: "Imperfect verb + object pronoun", ur: "فعل مضارع + ضمیر" } },
      { id: "34:3:6", position: 6, arabic: "السَّاعَةُ", transliteration: "as-sāʿatu", root: "س و ع", meaning: { en: "the Hour", ur: "قیامت" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative", definite: true }, grammarExplanations: { en: "Subject of تأتي", ur: "فاعل" } },
      { id: "34:3:7", position: 7, arabic: "قُلْ", transliteration: "qul", root: "ق و ل", meaning: { en: "Say", ur: "کہہ دو" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperative" }, grammarExplanations: { en: "Imperative verb", ur: "فعل امر" } },
      { id: "34:3:8", position: 8, arabic: "بَلَىٰ", transliteration: "balā", meaning: { en: "Yes", ur: "ہاں" }, pos: ["INTJ"], posLabel: "INTJ", grammarRole: "affirmation", grammarExplanations: { en: "Particle of affirmation after negation", ur: "حرف جواب بعد نفی" } },
      { id: "34:3:9", position: 9, arabic: "وَرَبِّي", transliteration: "wa-rabbī", root: "ر ب ب", meaning: { en: "by my Lord", ur: "میرے رب کی قسم" }, pos: ["CONJ", "N", "PRON"], posLabel: "CONJ+N+PRON", grammarRole: "oath", features: { case: "genitive" }, grammarExplanations: { en: "Oath formula", ur: "قسم" } },
      { id: "34:3:10", position: 10, arabic: "لَتَأْتِيَنَّكُمْ", transliteration: "la-taʾtiyannakum", root: "أ ت ي", meaning: { en: "it will surely come to you", ur: "ضرور تم پر آئے گی" }, pos: ["V", "PRON"], posLabel: "V+PRON", grammarRole: "verb", features: { aspect: "imperfect", emphasis: "nun_thaqila" }, grammarExplanations: { en: "Emphatic imperfect with لام القسم and نون التوكيد", ur: "فعل مضارع مؤکد بلام قسم و نون ثقیلہ" } },
      { id: "34:3:11", position: 11, arabic: "عَالِمِ", transliteration: "ʿālimi", root: "ع ل م", meaning: { en: "[the] Knower of", ur: "جاننے والا" }, pos: ["N"], posLabel: "N", grammarRole: "apposition", features: { case: "genitive", type: "active_participle" }, grammarExplanations: { en: "Apposition to ربي - active participle", ur: "بدل من ربی - اسم فاعل" } },
      { id: "34:3:12", position: 12, arabic: "الْغَيْبِ", transliteration: "al-ghaybi", root: "غ ي ب", meaning: { en: "the unseen", ur: "غیب" }, pos: ["N"], posLabel: "N", grammarRole: "mudaf_ilayh", features: { case: "genitive", definite: true }, grammarExplanations: { en: "Genitive in idafa", ur: "مضاف الیہ" } },
      { id: "34:3:13", position: 13, arabic: "لَا", transliteration: "lā", meaning: { en: "Not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative particle", ur: "حرف نفی" } },
      { id: "34:3:14", position: 14, arabic: "يَعْزُبُ", transliteration: "yaʿzubu", root: "ع ز ب", meaning: { en: "is absent", ur: "چھپتی" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect" }, grammarExplanations: { en: "Imperfect verb - to be hidden", ur: "فعل مضارع" } },
      { id: "34:3:15", position: 15, arabic: "عَنْهُ", transliteration: "ʿanhu", meaning: { en: "from Him", ur: "اس سے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "34:3:16", position: 16, arabic: "مِثْقَالُ", transliteration: "mithqālu", root: "ث ق ل", meaning: { en: "weight of", ur: "برابر بھی" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject of يعزب", ur: "فاعل" } },
      { id: "34:3:17", position: 17, arabic: "ذَرَّةٍ", transliteration: "dharratin", root: "ذ ر ر", meaning: { en: "an atom", ur: "ذرہ" }, pos: ["N"], posLabel: "N", grammarRole: "mudaf_ilayh", features: { case: "genitive" }, grammarExplanations: { en: "Genitive in idafa", ur: "مضاف الیہ" } },
      { id: "34:3:18", position: 18, arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جار" } },
      { id: "34:3:19", position: 19, arabic: "السَّمَاوَاتِ", transliteration: "as-samāwāti", root: "س م و", meaning: { en: "the heavens", ur: "آسمانوں" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive", number: "plural" }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:3:20", position: 20, arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "nor", ur: "اور نہ" }, pos: ["CONJ", "NEG"], posLabel: "CONJ+NEG", grammarRole: "negation", grammarExplanations: { en: "Conjunction + negation", ur: "عطف + نفی" } },
      { id: "34:3:21", position: 21, arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جار" } },
      { id: "34:3:22", position: 22, arabic: "الْأَرْضِ", transliteration: "al-arḍi", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:3:23", position: 23, arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "nor", ur: "اور نہ" }, pos: ["CONJ", "NEG"], posLabel: "CONJ+NEG", grammarRole: "negation", grammarExplanations: { en: "Conjunction + negation", ur: "عطف + نفی" } },
      { id: "34:3:24", position: 24, arabic: "أَصْغَرُ", transliteration: "aṣgharu", root: "ص غ ر", meaning: { en: "smaller", ur: "چھوٹی" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "subject", features: { degree: "comparative" }, grammarExplanations: { en: "Comparative adjective", ur: "صفت تفضیل" } },
      { id: "34:3:25", position: 25, arabic: "مِن", transliteration: "min", meaning: { en: "than", ur: "سے" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "comparison", grammarExplanations: { en: "Preposition of comparison", ur: "حرف مقارنہ" } },
      { id: "34:3:26", position: 26, arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "اس" }, pos: ["DEM"], posLabel: "DEM", grammarRole: "genitive", grammarExplanations: { en: "Demonstrative - object of comparison", ur: "اشارہ - مقارن" } },
      { id: "34:3:27", position: 27, arabic: "وَلَا", transliteration: "wa-lā", meaning: { en: "nor", ur: "اور نہ" }, pos: ["CONJ", "NEG"], posLabel: "CONJ+NEG", grammarRole: "negation", grammarExplanations: { en: "Conjunction + negation", ur: "عطف + نفی" } },
      { id: "34:3:28", position: 28, arabic: "أَكْبَرُ", transliteration: "akbaru", root: "ك ب ر", meaning: { en: "greater", ur: "بڑی" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "subject", features: { degree: "comparative" }, grammarExplanations: { en: "Comparative adjective", ur: "صفت تفضیل" } },
      { id: "34:3:29", position: 29, arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر" }, pos: ["EXCEPT"], posLabel: "EXCEPT", grammarRole: "exception", grammarExplanations: { en: "Exception particle", ur: "حرف استثناء" } },
      { id: "34:3:30", position: 30, arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جار" } },
      { id: "34:3:31", position: 31, arabic: "كِتَابٍ", transliteration: "kitābin", root: "ك ت ب", meaning: { en: "a register", ur: "کتاب" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:3:32", position: 32, arabic: "مُّبِينٍ", transliteration: "mubīnin", root: "ب ي ن", meaning: { en: "clear", ur: "واضح" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "adjective", features: { case: "genitive", type: "active_participle" }, grammarExplanations: { en: "Adjective - active participle Form IV", ur: "صفت - اسم فاعل باب افعال" } }
    ],
    structure: { diagram: ["V-CLAUSE", "QUOTE", "IMPERATIVE", "OATH", "NEG-CLAUSE", "EXCEPT"], explanation: "Disbelievers' denial + divine oath + Allah's complete knowledge" ,
       relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 6, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'بدل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'نفی + فعل' },
        { from: 14, to: 16, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'جار + مجرور' },
        { from: 25, to: 26, label: 'جار + مجرور' },
        { from: 30, to: 31, label: 'جار + مجرور' },
        { from: 31, to: 32, label: 'موصوف + صفت' }
      ],
    }
  },

  4: {
    ayahNumber: 4,
    text: "لِّيَجْزِيَ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ ۚ أُولَٰئِكَ لَهُم مَّغْفِرَةٌ وَرِزْقٌ كَرِيمٌ",
    translation: { en: "That He may reward those who believe and do righteous deeds. Those will have forgiveness and noble provision.", ur: "تاکہ ایمان والوں اور نیک عمل کرنے والوں کو جزا دے، انہی کے لیے مغفرت اور عزت کا رزق ہے" },
    words: [
      { id: "34:4:1", position: 1, arabic: "لِّيَجْزِيَ", transliteration: "li-yajziya", root: "ج ز ي", meaning: { en: "That He may reward", ur: "تاکہ جزا دے" }, pos: ["PREP", "V"], posLabel: "PREP+V", grammarRole: "purpose", features: { aspect: "imperfect", mood: "subjunctive" }, grammarExplanations: { en: "Lam of purpose + subjunctive verb", ur: "لام تعلیل + فعل مضارع منصوب" } },
      { id: "34:4:2", position: 2, arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: ["REL"], posLabel: "REL", grammarRole: "object", grammarExplanations: { en: "Relative pronoun - object", ur: "موصول - مفعول" } },
      { id: "34:4:3", position: 3, arabic: "آمَنُوا", transliteration: "āmanū", root: "أ م ن", meaning: { en: "believe", ur: "ایمان لائے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect", form: "IV" }, grammarExplanations: { en: "Perfect verb Form IV", ur: "فعل ماضی باب افعال" } },
      { id: "34:4:4", position: 4, arabic: "وَعَمِلُوا", transliteration: "wa-ʿamilū", root: "ع م ل", meaning: { en: "and do", ur: "اور عمل کیے" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Conjunction + perfect verb", ur: "عطف + فعل ماضی" } },
      { id: "34:4:5", position: 5, arabic: "الصَّالِحَاتِ", transliteration: "aṣ-ṣāliḥāti", root: "ص ل ح", meaning: { en: "righteous deeds", ur: "نیک اعمال" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative", number: "plural", definite: true }, grammarExplanations: { en: "Direct object - feminine plural", ur: "مفعول به - جمع مؤنث" } },
      { id: "34:4:6", position: 6, arabic: "أُولَٰئِكَ", transliteration: "ulāʾika", meaning: { en: "Those", ur: "یہی لوگ" }, pos: ["DEM"], posLabel: "DEM", grammarRole: "subject", grammarExplanations: { en: "Demonstrative pronoun - subject", ur: "اشارہ بعید - مبتدأ" } },
      { id: "34:4:7", position: 7, arabic: "لَهُم", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "predicate", grammarExplanations: { en: "Predicate - prepositional phrase", ur: "خبر مقدم" } },
      { id: "34:4:8", position: 8, arabic: "مَّغْفِرَةٌ", transliteration: "maghfiratun", root: "غ ف ر", meaning: { en: "forgiveness", ur: "مغفرت" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject (delayed)", ur: "مبتدأ مؤخر" } },
      { id: "34:4:9", position: 9, arabic: "وَرِزْقٌ", transliteration: "wa-rizqun", root: "ر ز ق", meaning: { en: "and provision", ur: "اور رزق" }, pos: ["CONJ", "N"], posLabel: "CONJ+N", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Conjoined subject", ur: "معطوف مبتدأ" } },
      { id: "34:4:10", position: 10, arabic: "كَرِيمٌ", transliteration: "karīmun", root: "ك ر م", meaning: { en: "noble", ur: "عزت کا" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "adjective", features: { case: "nominative", pattern: "فَعِيل" }, grammarExplanations: { en: "Adjective describing رزق", ur: "صفت" } }
    ],
    structure: { diagram: ["PURPOSE", "REL-CLAUSE", "NOM-SENT"], explanation: "Purpose of divine knowledge - to reward believers" ,
       relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 5, label: 'فعل + مفعول به' },
        { from: 3, to: 6, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'عطف' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ],
    }
  },

  5: {
    ayahNumber: 5,
    text: "وَالَّذِينَ سَعَوْا فِي آيَاتِنَا مُعَاجِزِينَ أُولَٰئِكَ لَهُمْ عَذَابٌ مِّن رِّجْزٍ أَلِيمٌ",
    translation: { en: "But those who strive against Our verses to cause failure - for them will be a painful punishment of foul nature.", ur: "اور جنہوں نے ہماری آیتوں میں عاجز کرنے کی کوشش کی، ان کے لیے برے درد کا عذاب ہے" },
    words: [
      { id: "34:5:1", position: 1, arabic: "وَالَّذِينَ", transliteration: "wa-alladhīna", meaning: { en: "But those who", ur: "اور جو لوگ" }, pos: ["CONJ", "REL"], posLabel: "CONJ+REL", grammarRole: "subject", grammarExplanations: { en: "Conjunction + relative pronoun", ur: "عطف + موصول" } },
      { id: "34:5:2", position: 2, arabic: "سَعَوْا", transliteration: "saʿaw", root: "س ع ي", meaning: { en: "strive", ur: "کوشش کی" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect", number: "plural" }, grammarExplanations: { en: "Perfect verb", ur: "فعل ماضی" } },
      { id: "34:5:3", position: 3, arabic: "فِي", transliteration: "fī", meaning: { en: "against", ur: "میں" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جار" } },
      { id: "34:5:4", position: 4, arabic: "آيَاتِنَا", transliteration: "āyātinā", root: "أ ي ي", meaning: { en: "Our verses", ur: "ہماری آیتوں" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "genitive", features: { case: "genitive", number: "plural" }, grammarExplanations: { en: "Object of preposition + pronoun", ur: "مجرور + ضمیر" } },
      { id: "34:5:5", position: 5, arabic: "مُعَاجِزِينَ", transliteration: "muʿājizīna", root: "ع ج ز", meaning: { en: "to cause failure", ur: "عاجز کرنے والے" }, pos: ["N"], posLabel: "N", grammarRole: "hal", features: { case: "accusative", number: "plural", type: "active_participle", form: "III" }, grammarExplanations: { en: "Hal - state of the subject", ur: "حال - اسم فاعل باب مفاعلہ" } },
      { id: "34:5:6", position: 6, arabic: "أُولَٰئِكَ", transliteration: "ulāʾika", meaning: { en: "for them", ur: "یہی لوگ" }, pos: ["DEM"], posLabel: "DEM", grammarRole: "subject", grammarExplanations: { en: "Demonstrative - subject", ur: "اشارہ - مبتدأ" } },
      { id: "34:5:7", position: 7, arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "predicate", grammarExplanations: { en: "Predicate", ur: "خبر مقدم" } },
      { id: "34:5:8", position: 8, arabic: "عَذَابٌ", transliteration: "ʿadhābun", root: "ع ذ ب", meaning: { en: "a punishment", ur: "عذاب" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject (delayed)", ur: "مبتدأ مؤخر" } },
      { id: "34:5:9", position: 9, arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "کا" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition - explanatory", ur: "حرف جار بیانیہ" } },
      { id: "34:5:10", position: 10, arabic: "رِّجْزٍ", transliteration: "rijzin", root: "ر ج ز", meaning: { en: "foul nature", ur: "برے درد" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:5:11", position: 11, arabic: "أَلِيمٌ", transliteration: "alīmun", root: "أ ل م", meaning: { en: "painful", ur: "دردناک" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "adjective", features: { case: "nominative", pattern: "فَعِيل" }, grammarExplanations: { en: "Adjective describing عذاب", ur: "صفت" } }
    ],
    structure: { diagram: ["REL-CLAUSE", "HAL", "NOM-SENT"], explanation: "Contrast - punishment for those who oppose Allah's signs" ,
       relationships: [
        { from: 1, to: 7, label: 'مبتدأ + خبر' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 2, to: 5, label: 'حال' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    }
  },

  6: {
    ayahNumber: 6,
    text: "وَيَرَى الَّذِينَ أُوتُوا الْعِلْمَ الَّذِي أُنزِلَ إِلَيْكَ مِن رَّبِّكَ هُوَ الْحَقَّ وَيَهْدِي إِلَىٰ صِرَاطِ الْعَزِيزِ الْحَمِيدِ",
    translation: { en: "And those who have been given knowledge see that what is revealed to you from your Lord is the truth, and it guides to the path of the Exalted in Might, the Praiseworthy.", ur: "اور علم والے دیکھتے ہیں کہ جو تیرے رب کی طرف سے نازل ہوا وہ حق ہے اور غالب قابل تعریف کی راہ کی طرف رہنمائی کرتا ہے" },
    words: [
      { id: "34:6:1", position: 1, arabic: "وَيَرَى", transliteration: "wa-yarā", root: "ر أ ي", meaning: { en: "And see", ur: "اور دیکھتے ہیں" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { aspect: "imperfect" }, grammarExplanations: { en: "Conjunction + imperfect verb", ur: "عطف + فعل مضارع" } },
      { id: "34:6:2", position: 2, arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: ["REL"], posLabel: "REL", grammarRole: "subject", grammarExplanations: { en: "Relative pronoun - subject", ur: "موصول - فاعل" } },
      { id: "34:6:3", position: 3, arabic: "أُوتُوا", transliteration: "ūtū", root: "أ ت ي", meaning: { en: "have been given", ur: "دیے گئے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect", voice: "passive" }, grammarExplanations: { en: "Passive perfect verb", ur: "فعل ماضی مجہول" } },
      { id: "34:6:4", position: 4, arabic: "الْعِلْمَ", transliteration: "al-ʿilma", root: "ع ل م", meaning: { en: "knowledge", ur: "علم" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative", definite: true }, grammarExplanations: { en: "Second object of أوتوا", ur: "مفعول ثانی" } },
      { id: "34:6:5", position: 5, arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "that which", ur: "جو" }, pos: ["REL"], posLabel: "REL", grammarRole: "object", grammarExplanations: { en: "Relative pronoun - object of يرى", ur: "موصول - مفعول یرى" } },
      { id: "34:6:6", position: 6, arabic: "أُنزِلَ", transliteration: "unzila", root: "ن ز ل", meaning: { en: "is revealed", ur: "نازل ہوا" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect", voice: "passive", form: "IV" }, grammarExplanations: { en: "Passive perfect Form IV", ur: "فعل ماضی مجہول باب افعال" } },
      { id: "34:6:7", position: 7, arabic: "إِلَيْكَ", transliteration: "ilayka", meaning: { en: "to you", ur: "تیری طرف" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "34:6:8", position: 8, arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جار" } },
      { id: "34:6:9", position: 9, arabic: "رَّبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "your Lord", ur: "تیرے رب" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Object of preposition + pronoun", ur: "مجرور + ضمیر" } },
      { id: "34:6:10", position: 10, arabic: "هُوَ", transliteration: "huwa", meaning: { en: "it", ur: "وہ" }, pos: ["PRON"], posLabel: "PRON", grammarRole: "pronoun_emphasis", grammarExplanations: { en: "Pronoun of separation for emphasis", ur: "ضمیر فصل للتوکید" } },
      { id: "34:6:11", position: 11, arabic: "الْحَقَّ", transliteration: "al-ḥaqqa", root: "ح ق ق", meaning: { en: "the truth", ur: "حق" }, pos: ["N"], posLabel: "N", grammarRole: "object2", features: { case: "accusative", definite: true }, grammarExplanations: { en: "Second object of يرى", ur: "مفعول ثانی لیرى" } },
      { id: "34:6:12", position: 12, arabic: "وَيَهْدِي", transliteration: "wa-yahdī", root: "ه د ي", meaning: { en: "and guides", ur: "اور رہنمائی کرتا ہے" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { aspect: "imperfect" }, grammarExplanations: { en: "Conjunction + imperfect verb", ur: "عطف + فعل مضارع" } },
      { id: "34:6:13", position: 13, arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جار" } },
      { id: "34:6:14", position: 14, arabic: "صِرَاطِ", transliteration: "ṣirāṭi", root: "ص ر ط", meaning: { en: "the path", ur: "راہ" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:6:15", position: 15, arabic: "الْعَزِيزِ", transliteration: "al-ʿazīzi", root: "ع ز ز", meaning: { en: "the Exalted in Might", ur: "غالب" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "mudaf_ilayh", features: { case: "genitive", definite: true, pattern: "فَعِيل" }, grammarExplanations: { en: "Genitive in idafa - divine attribute", ur: "مضاف الیہ - صفت الٰہی" } },
      { id: "34:6:16", position: 16, arabic: "الْحَمِيدِ", transliteration: "al-ḥamīdi", root: "ح م د", meaning: { en: "the Praiseworthy", ur: "قابل تعریف" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "apposition", features: { case: "genitive", definite: true, pattern: "فَعِيل" }, grammarExplanations: { en: "Apposition - second divine attribute", ur: "بدل - صفت الٰہی ثانی" } }
    ],
    structure: { diagram: ["V", "REL-CLAUSE", "REL-CLAUSE", "V-PREP"], explanation: "People of knowledge recognize truth + guidance to Allah's path" ,
       relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 3, to: 5, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 6, to: 12, label: 'عطف' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'موصوف + صفت' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'بدل' }
      ],
    }
  },

  7: {
    ayahNumber: 7,
    text: "وَقَالَ الَّذِينَ كَفَرُوا هَلْ نَدُلُّكُمْ عَلَىٰ رَجُلٍ يُنَبِّئُكُمْ إِذَا مُزِّقْتُمْ كُلَّ مُمَزَّقٍ إِنَّكُمْ لَفِي خَلْقٍ جَدِيدٍ",
    translation: { en: "And those who disbelieve say: 'Shall we direct you to a man who will inform you that when you have disintegrated completely, you will indeed be in a new creation?'", ur: "اور کافر کہتے ہیں کیا ہم تمہیں ایک ایسے شخص کی خبر دیں جو تمہیں بتاتا ہے کہ جب تم بالکل ریزہ ریزہ ہو جاؤ گے تو پھر نئے سرے سے پیدا ہو گے" },
    words: [
      { id: "34:7:1", position: 1, arabic: "وَقَالَ", transliteration: "wa-qāla", root: "ق و ل", meaning: { en: "And say", ur: "اور کہتے ہیں" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { aspect: "perfect" }, grammarExplanations: { en: "Conjunction + perfect verb", ur: "عطف + فعل ماضی" } },
      { id: "34:7:2", position: 2, arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: ["REL"], posLabel: "REL", grammarRole: "subject", grammarExplanations: { en: "Relative pronoun - subject", ur: "موصول - فاعل" } },
      { id: "34:7:3", position: 3, arabic: "كَفَرُوا", transliteration: "kafarū", root: "ك ف ر", meaning: { en: "disbelieve", ur: "کافر ہوئے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect", number: "plural" }, grammarExplanations: { en: "Perfect verb", ur: "فعل ماضی" } },
      { id: "34:7:4", position: 4, arabic: "هَلْ", transliteration: "hal", meaning: { en: "Shall", ur: "کیا" }, pos: ["INTERROG"], posLabel: "INTERROG", grammarRole: "interrogative", grammarExplanations: { en: "Interrogative particle", ur: "حرف استفہام" } },
      { id: "34:7:5", position: 5, arabic: "نَدُلُّكُمْ", transliteration: "nadullukum", root: "د ل ل", meaning: { en: "we direct you", ur: "ہم تمہیں بتائیں" }, pos: ["V", "PRON"], posLabel: "V+PRON", grammarRole: "verb", features: { aspect: "imperfect", person: "1st", number: "plural" }, grammarExplanations: { en: "Imperfect verb + object pronoun", ur: "فعل مضارع + ضمیر" } },
      { id: "34:7:6", position: 6, arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "to", ur: "کی طرف" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جار" } },
      { id: "34:7:7", position: 7, arabic: "رَجُلٍ", transliteration: "rajulin", root: "ر ج ل", meaning: { en: "a man", ur: "ایک شخص" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:7:8", position: 8, arabic: "يُنَبِّئُكُمْ", transliteration: "yunabbiʾukum", root: "ن ب أ", meaning: { en: "who will inform you", ur: "جو تمہیں بتاتا ہے" }, pos: ["V", "PRON"], posLabel: "V+PRON", grammarRole: "verb", features: { aspect: "imperfect", form: "II" }, grammarExplanations: { en: "Imperfect verb Form II - adjective clause", ur: "فعل مضارع باب تفعیل - صفت" } },
      { id: "34:7:9", position: 9, arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب" }, pos: ["COND"], posLabel: "COND", grammarRole: "conditional", grammarExplanations: { en: "Conditional particle", ur: "حرف شرط" } },
      { id: "34:7:10", position: 10, arabic: "مُزِّقْتُمْ", transliteration: "muzziqtum", root: "م ز ق", meaning: { en: "you have disintegrated", ur: "تم ریزہ ریزہ ہو جاؤ" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect", voice: "passive", form: "II" }, grammarExplanations: { en: "Passive perfect Form II", ur: "فعل ماضی مجہول باب تفعیل" } },
      { id: "34:7:11", position: 11, arabic: "كُلَّ", transliteration: "kulla", meaning: { en: "completely", ur: "بالکل" }, pos: ["N"], posLabel: "N", grammarRole: "adverbial", features: { case: "accusative" }, grammarExplanations: { en: "Adverbial accusative", ur: "مفعول مطلق" } },
      { id: "34:7:12", position: 12, arabic: "مُمَزَّقٍ", transliteration: "mumazzaqin", root: "م ز ق", meaning: { en: "disintegration", ur: "ٹکڑے ٹکڑے" }, pos: ["N"], posLabel: "N", grammarRole: "mudaf_ilayh", features: { case: "genitive", type: "passive_participle", form: "II" }, grammarExplanations: { en: "Genitive - passive participle Form II", ur: "مضاف الیہ - اسم مفعول باب تفعیل" } },
      { id: "34:7:13", position: 13, arabic: "إِنَّكُمْ", transliteration: "innakum", meaning: { en: "that you", ur: "کہ تم" }, pos: ["EMPH", "PRON"], posLabel: "EMPH+PRON", grammarRole: "emphasis", grammarExplanations: { en: "Emphatic particle + pronoun", ur: "حرف توکید + ضمیر" } },
      { id: "34:7:14", position: 14, arabic: "لَفِي", transliteration: "la-fī", meaning: { en: "will indeed be in", ur: "ضرور ہو گے" }, pos: ["EMPH", "PREP"], posLabel: "EMPH+PREP", grammarRole: "predicate", grammarExplanations: { en: "Lam of emphasis + preposition", ur: "لام توکید + حرف جار" } },
      { id: "34:7:15", position: 15, arabic: "خَلْقٍ", transliteration: "khalqin", root: "خ ل ق", meaning: { en: "a creation", ur: "پیدائش" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:7:16", position: 16, arabic: "جَدِيدٍ", transliteration: "jadīdin", root: "ج د د", meaning: { en: "new", ur: "نئی" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "adjective", features: { case: "genitive", pattern: "فَعِيل" }, grammarExplanations: { en: "Adjective describing خلق", ur: "صفت" } }
    ],
    structure: { diagram: ["V-CLAUSE", "QUOTE", "INTERROG", "COND-CLAUSE", "EMPH-CLAUSE"], explanation: "Disbelievers mock resurrection - quoting their denial" ,
       relationships: [
        { from: 2, to: 14, label: 'مبتدأ + خبر' },
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'شرط + فعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'موصوف + صفت' }
      ],
    }
  },

  8: {
    ayahNumber: 8,
    text: "أَفْتَرَىٰ عَلَى اللَّهِ كَذِبًا أَم بِهِ جِنَّةٌ ۗ بَلِ الَّذِينَ لَا يُؤْمِنُونَ بِالْآخِرَةِ فِي الْعَذَابِ وَالضَّلَالِ الْبَعِيدِ",
    translation: { en: "'Has he invented a lie about Allah or is there in him madness?' Rather, those who do not believe in the Hereafter will be in the punishment and extreme error.", ur: "کیا اس نے اللہ پر جھوٹ باندھا یا اسے جنون ہے؟ بلکہ جو آخرت پر ایمان نہیں رکھتے وہ عذاب اور دور کی گمراہی میں ہیں" },
    words: [
      { id: "34:8:1", position: 1, arabic: "أَفْتَرَىٰ", transliteration: "a-ftarā", root: "ف ر ي", meaning: { en: "Has he invented", ur: "کیا اس نے باندھا" }, pos: ["INTERROG", "V"], posLabel: "INTERROG+V", grammarRole: "verb", features: { aspect: "perfect", form: "VIII" }, grammarExplanations: { en: "Interrogative + perfect verb Form VIII", ur: "استفہام + فعل ماضی باب افتعال" } },
      { id: "34:8:2", position: 2, arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "about", ur: "پر" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جار" } },
      { id: "34:8:3", position: 3, arabic: "اللَّهِ", transliteration: "Allāhi", root: "أ ل ه", meaning: { en: "Allah", ur: "اللہ" }, pos: ["PN"], posLabel: "PN", grammarRole: "genitive", features: { case: "genitive" }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:8:4", position: 4, arabic: "كَذِبًا", transliteration: "kadhibān", root: "ك ذ ب", meaning: { en: "a lie", ur: "جھوٹ" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } },
      { id: "34:8:5", position: 5, arabic: "أَم", transliteration: "am", meaning: { en: "or", ur: "یا" }, pos: ["CONJ"], posLabel: "CONJ", grammarRole: "disjunction", grammarExplanations: { en: "Disjunctive particle", ur: "حرف عطف منفصل" } },
      { id: "34:8:6", position: 6, arabic: "بِهِ", transliteration: "bihi", meaning: { en: "in him", ur: "اسے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "predicate", grammarExplanations: { en: "Predicate - prepositional phrase", ur: "خبر مقدم" } },
      { id: "34:8:7", position: 7, arabic: "جِنَّةٌ", transliteration: "jinnatun", root: "ج ن ن", meaning: { en: "madness", ur: "جنون" }, pos: ["N"], posLabel: "N", grammarRole: "subject", features: { case: "nominative" }, grammarExplanations: { en: "Subject (delayed)", ur: "مبتدأ مؤخر" } },
      { id: "34:8:8", position: 8, arabic: "بَلِ", transliteration: "bal", meaning: { en: "Rather", ur: "بلکہ" }, pos: ["CONJ"], posLabel: "CONJ", grammarRole: "correction", grammarExplanations: { en: "Particle of correction/emphasis", ur: "حرف اضراب" } },
      { id: "34:8:9", position: 9, arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: ["REL"], posLabel: "REL", grammarRole: "subject", grammarExplanations: { en: "Relative pronoun - subject", ur: "موصول - مبتدأ" } },
      { id: "34:8:10", position: 10, arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "نہیں" }, pos: ["NEG"], posLabel: "NEG", grammarRole: "negation", grammarExplanations: { en: "Negative particle", ur: "حرف نفی" } },
      { id: "34:8:11", position: 11, arabic: "يُؤْمِنُونَ", transliteration: "yuʾminūna", root: "أ م ن", meaning: { en: "believe", ur: "ایمان رکھتے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect", form: "IV", number: "plural" }, grammarExplanations: { en: "Imperfect verb Form IV", ur: "فعل مضارع باب افعال" } },
      { id: "34:8:12", position: 12, arabic: "بِالْآخِرَةِ", transliteration: "bil-ākhirati", root: "أ خ ر", meaning: { en: "in the Hereafter", ur: "آخرت پر" }, pos: ["PREP", "N"], posLabel: "PREP+N", grammarRole: "preposition", features: { case: "genitive", definite: true }, grammarExplanations: { en: "Preposition + object", ur: "جار مجرور" } },
      { id: "34:8:13", position: 13, arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "predicate", grammarExplanations: { en: "Predicate - prepositional phrase", ur: "خبر" } },
      { id: "34:8:14", position: 14, arabic: "الْعَذَابِ", transliteration: "al-ʿadhābi", root: "ع ذ ب", meaning: { en: "the punishment", ur: "عذاب" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive", definite: true }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:8:15", position: 15, arabic: "وَالضَّلَالِ", transliteration: "waḍ-ḍalāli", root: "ض ل ل", meaning: { en: "and error", ur: "اور گمراہی" }, pos: ["CONJ", "N"], posLabel: "CONJ+N", grammarRole: "genitive", features: { case: "genitive", definite: true }, grammarExplanations: { en: "Conjoined object", ur: "معطوف مجرور" } },
      { id: "34:8:16", position: 16, arabic: "الْبَعِيدِ", transliteration: "al-baʿīdi", root: "ب ع د", meaning: { en: "extreme", ur: "دور" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "adjective", features: { case: "genitive", definite: true, pattern: "فَعِيل" }, grammarExplanations: { en: "Adjective describing ضلال", ur: "صفت" } }
    ],
    structure: { diagram: ["INTERROG", "DISJUNCT", "NOM-SENT", "CORRECTION", "REL-CLAUSE", "PRED"], explanation: "Their mockery turned against them - they are in error" ,
       relationships: [
        { from: 1, to: 4, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 7, to: 13, label: 'مبتدأ + خبر' },
        { from: 9, to: 13, label: 'مبتدأ + خبر' },
        { from: 10, to: 11, label: 'نفی + فعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'موصوف + صفت' }
      ],
    }
  },

  9: {
    ayahNumber: 9,
    text: "أَفَلَمْ يَرَوْا إِلَىٰ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُم مِّنَ السَّمَاءِ وَالْأَرْضِ ۚ إِن نَّشَأْ نَخْسِفْ بِهِمُ الْأَرْضَ أَوْ نُسْقِطْ عَلَيْهِمْ كِسَفًا مِّنَ السَّمَاءِ ۚ إِنَّ فِي ذَٰلِكَ لَآيَةً لِّكُلِّ عَبْدٍ مُّنِيبٍ",
    translation: { en: "Do they not see what is before them and what is behind them of the heaven and earth? If We willed, We could cause the earth to swallow them or let fall upon them fragments from the sky. Indeed in that is a sign for every servant turning back [to Allah].", ur: "کیا انہوں نے نہیں دیکھا جو ان کے آگے اور پیچھے آسمان اور زمین ہے؟ اگر ہم چاہیں تو زمین میں دھنسا دیں یا آسمان کا ٹکڑا ان پر گرا دیں، بے شک اس میں ہر رجوع کرنے والے بندے کے لیے نشانی ہے" },
    words: [
      { id: "34:9:1", position: 1, arabic: "أَفَلَمْ", transliteration: "a-fa-lam", meaning: { en: "Do they not", ur: "کیا نہیں" }, pos: ["INTERROG", "CONJ", "NEG"], posLabel: "INTERROG+CONJ+NEG", grammarRole: "interrogative", grammarExplanations: { en: "Interrogative + conjunction + negative", ur: "استفہام + فاء + نفی" } },
      { id: "34:9:2", position: 2, arabic: "يَرَوْا", transliteration: "yaraw", root: "ر أ ي", meaning: { en: "they see", ur: "وہ دیکھتے" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect", mood: "jussive", number: "plural" }, grammarExplanations: { en: "Jussive verb", ur: "فعل مضارع مجزوم" } },
      { id: "34:9:3", position: 3, arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "at", ur: "کی طرف" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جار" } },
      { id: "34:9:4", position: 4, arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو" }, pos: ["REL"], posLabel: "REL", grammarRole: "object", grammarExplanations: { en: "Relative pronoun", ur: "موصول" } },
      { id: "34:9:5", position: 5, arabic: "بَيْنَ", transliteration: "bayna", meaning: { en: "before", ur: "درمیان" }, pos: ["N"], posLabel: "N", grammarRole: "adverb", features: { case: "accusative" }, grammarExplanations: { en: "Adverb of place", ur: "ظرف مکان" } },
      { id: "34:9:6", position: 6, arabic: "أَيْدِيهِمْ", transliteration: "aydīhim", root: "ي د ي", meaning: { en: "them", ur: "ان کے ہاتھوں" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "mudaf_ilayh", features: { case: "genitive", number: "plural" }, grammarExplanations: { en: "Genitive + pronoun", ur: "مضاف الیہ + ضمیر" } },
      { id: "34:9:7", position: 7, arabic: "وَمَا", transliteration: "wa-mā", meaning: { en: "and what", ur: "اور جو" }, pos: ["CONJ", "REL"], posLabel: "CONJ+REL", grammarRole: "object", grammarExplanations: { en: "Conjunction + relative", ur: "عطف + موصول" } },
      { id: "34:9:8", position: 8, arabic: "خَلْفَهُم", transliteration: "khalfahum", meaning: { en: "behind them", ur: "ان کے پیچھے" }, pos: ["N", "PRON"], posLabel: "N+PRON", grammarRole: "adverb", features: { case: "accusative" }, grammarExplanations: { en: "Adverb of place + pronoun", ur: "ظرف مکان + ضمیر" } },
      { id: "34:9:9", position: 9, arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "میں سے" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition - explanatory", ur: "حرف جار بیانیہ" } },
      { id: "34:9:10", position: 10, arabic: "السَّمَاءِ", transliteration: "as-samāʾi", root: "س م و", meaning: { en: "the heaven", ur: "آسمان" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive", definite: true }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:9:11", position: 11, arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" }, pos: ["CONJ", "N"], posLabel: "CONJ+N", grammarRole: "genitive", features: { case: "genitive", definite: true }, grammarExplanations: { en: "Conjoined object", ur: "معطوف مجرور" } },
      { id: "34:9:12", position: 12, arabic: "إِن", transliteration: "in", meaning: { en: "If", ur: "اگر" }, pos: ["COND"], posLabel: "COND", grammarRole: "conditional", grammarExplanations: { en: "Conditional particle", ur: "حرف شرط" } },
      { id: "34:9:13", position: 13, arabic: "نَّشَأْ", transliteration: "nashaʾ", root: "ش ي أ", meaning: { en: "We willed", ur: "ہم چاہیں" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect", mood: "jussive", person: "1st" }, grammarExplanations: { en: "Jussive verb - condition", ur: "فعل مضارع مجزوم - شرط" } },
      { id: "34:9:14", position: 14, arabic: "نَخْسِفْ", transliteration: "nakhsif", root: "خ س ف", meaning: { en: "We could cause to swallow", ur: "ہم دھنسا دیں" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect", mood: "jussive", person: "1st" }, grammarExplanations: { en: "Jussive verb - result", ur: "فعل مضارع مجزوم - جواب" } },
      { id: "34:9:15", position: 15, arabic: "بِهِمُ", transliteration: "bihimu", meaning: { en: "them", ur: "انہیں" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "34:9:16", position: 16, arabic: "الْأَرْضَ", transliteration: "al-arḍa", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative", definite: true }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } },
      { id: "34:9:17", position: 17, arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا" }, pos: ["CONJ"], posLabel: "CONJ", grammarRole: "disjunction", grammarExplanations: { en: "Disjunctive", ur: "حرف عطف" } },
      { id: "34:9:18", position: 18, arabic: "نُسْقِطْ", transliteration: "nusqiṭ", root: "س ق ط", meaning: { en: "let fall", ur: "گرا دیں" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperfect", mood: "jussive", form: "IV" }, grammarExplanations: { en: "Jussive verb Form IV", ur: "فعل مضارع مجزوم باب افعال" } },
      { id: "34:9:19", position: 19, arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "upon them", ur: "ان پر" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "preposition", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "34:9:20", position: 20, arabic: "كِسَفًا", transliteration: "kisafan", root: "ك س ف", meaning: { en: "fragments", ur: "ٹکڑے" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative", number: "plural" }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } },
      { id: "34:9:21", position: 21, arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "preposition", grammarExplanations: { en: "Preposition", ur: "حرف جار" } },
      { id: "34:9:22", position: 22, arabic: "السَّمَاءِ", transliteration: "as-samāʾi", root: "س م و", meaning: { en: "the sky", ur: "آسمان" }, pos: ["N"], posLabel: "N", grammarRole: "genitive", features: { case: "genitive", definite: true }, grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:9:23", position: 23, arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک" }, pos: ["EMPH"], posLabel: "EMPH", grammarRole: "emphasis", grammarExplanations: { en: "Emphatic particle", ur: "حرف توکید" } },
      { id: "34:9:24", position: 24, arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: ["PREP"], posLabel: "PREP", grammarRole: "predicate", grammarExplanations: { en: "Predicate of إن (advanced)", ur: "خبر إن مقدم" } },
      { id: "34:9:25", position: 25, arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "اس" }, pos: ["DEM"], posLabel: "DEM", grammarRole: "genitive", grammarExplanations: { en: "Object of preposition", ur: "مجرور" } },
      { id: "34:9:26", position: 26, arabic: "لَآيَةً", transliteration: "la-āyatan", root: "أ ي ي", meaning: { en: "surely a sign", ur: "ضرور نشانی" }, pos: ["EMPH", "N"], posLabel: "EMPH+N", grammarRole: "ism_inna", features: { case: "accusative" }, grammarExplanations: { en: "Subject of إن with لام of emphasis", ur: "اسم إن مع لام توکید" } },
      { id: "34:9:27", position: 27, arabic: "لِّكُلِّ", transliteration: "li-kulli", meaning: { en: "for every", ur: "ہر ایک کے لیے" }, pos: ["PREP", "N"], posLabel: "PREP+N", grammarRole: "beneficiary", grammarExplanations: { en: "Preposition + كل", ur: "جار + کل" } },
      { id: "34:9:28", position: 28, arabic: "عَبْدٍ", transliteration: "ʿabdin", root: "ع ب د", meaning: { en: "servant", ur: "بندے" }, pos: ["N"], posLabel: "N", grammarRole: "mudaf_ilayh", features: { case: "genitive" }, grammarExplanations: { en: "Genitive in idafa", ur: "مضاف الیہ" } },
      { id: "34:9:29", position: 29, arabic: "مُّنِيبٍ", transliteration: "munībin", root: "ن و ب", meaning: { en: "turning back", ur: "رجوع کرنے والے" }, pos: ["ADJ"], posLabel: "ADJ", grammarRole: "adjective", features: { case: "genitive", type: "active_participle", form: "IV" }, grammarExplanations: { en: "Adjective - active participle Form IV", ur: "صفت - اسم فاعل باب افعال" } }
    ],
    structure: { diagram: ["INTERROG", "REL-CLAUSE", "COND-CLAUSE", "EMPH-CLAUSE"], explanation: "Rhetorical question about surroundings + divine power + sign for repentant" ,
       relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 4, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 5, to: 7, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'شرط + فعل' },
        { from: 13, to: 16, label: 'فعل + مفعول به' },
        { from: 14, to: 16, label: 'فعل + مفعول به' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 18, to: 20, label: 'فعل + مفعول به' },
        { from: 19, to: 20, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'جار + مجرور' },
        { from: 28, to: 29, label: 'موصوف + صفت' },
        { from: 27, to: 28, label: 'مضاف + مضاف إليه' }
      ],
    }
  },

  10: {
    ayahNumber: 10,
    text: "وَلَقَدْ آتَيْنَا دَاوُودَ مِنَّا فَضْلًا ۖ يَا جِبَالُ أَوِّبِي مَعَهُ وَالطَّيْرَ ۖ وَأَلَنَّا لَهُ الْحَدِيدَ",
    translation: { en: "And We certainly gave David from Us bounty. [We said]: 'O mountains, repeat [Our] praises with him, and the birds [as well].' And We made pliable for him iron.", ur: "اور ہم نے داؤد کو اپنی طرف سے فضل دیا، اے پہاڑو! اس کے ساتھ تسبیح کرو اور پرندو بھی، اور ہم نے اس کے لیے لوہا نرم کر دیا" },
    words: [
      { id: "34:10:1", position: 1, arabic: "وَلَقَدْ", transliteration: "wa-laqad", meaning: { en: "And certainly", ur: "اور یقیناً" }, pos: ["CONJ", "CERT"], posLabel: "CONJ+CERT", grammarRole: "emphasis", grammarExplanations: { en: "Conjunction + emphatic particle", ur: "عطف + حرف تحقیق" } },
      { id: "34:10:2", position: 2, arabic: "آتَيْنَا", transliteration: "ātaynā", root: "أ ت ي", meaning: { en: "We gave", ur: "ہم نے دیا" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "perfect", form: "IV", person: "1st", number: "plural" }, grammarExplanations: { en: "Perfect verb Form IV - royal We", ur: "فعل ماضی باب افعال - نون عظمت" } },
      { id: "34:10:3", position: 3, arabic: "دَاوُودَ", transliteration: "Dāwūda", meaning: { en: "David", ur: "داؤد کو" }, pos: ["PN"], posLabel: "PN", grammarRole: "object", features: { case: "accusative" }, grammarExplanations: { en: "Direct object - proper noun", ur: "مفعول به - علم" } },
      { id: "34:10:4", position: 4, arabic: "مِنَّا", transliteration: "minnā", meaning: { en: "from Us", ur: "ہماری طرف سے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "source", grammarExplanations: { en: "Preposition + pronoun", ur: "جار + ضمیر" } },
      { id: "34:10:5", position: 5, arabic: "فَضْلًا", transliteration: "faḍlan", root: "ف ض ل", meaning: { en: "bounty", ur: "فضل" }, pos: ["N"], posLabel: "N", grammarRole: "object2", features: { case: "accusative" }, grammarExplanations: { en: "Second object", ur: "مفعول ثانی" } },
      { id: "34:10:6", position: 6, arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے" }, pos: ["VOC"], posLabel: "VOC", grammarRole: "vocative", grammarExplanations: { en: "Vocative particle", ur: "حرف نداء" } },
      { id: "34:10:7", position: 7, arabic: "جِبَالُ", transliteration: "jibālu", root: "ج ب ل", meaning: { en: "mountains", ur: "پہاڑو" }, pos: ["N"], posLabel: "N", grammarRole: "munada", features: { case: "nominative", number: "plural" }, grammarExplanations: { en: "Vocative noun - called upon", ur: "منادی" } },
      { id: "34:10:8", position: 8, arabic: "أَوِّبِي", transliteration: "awwibī", root: "أ و ب", meaning: { en: "repeat praises", ur: "تسبیح کرو" }, pos: ["V"], posLabel: "V", grammarRole: "verb", features: { aspect: "imperative", form: "II", gender: "feminine" }, grammarExplanations: { en: "Imperative verb Form II - feminine for جبال", ur: "فعل امر باب تفعیل - مؤنث" } },
      { id: "34:10:9", position: 9, arabic: "مَعَهُ", transliteration: "maʿahu", meaning: { en: "with him", ur: "اس کے ساتھ" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "accompaniment", grammarExplanations: { en: "Preposition of accompaniment + pronoun", ur: "حرف معیت + ضمیر" } },
      { id: "34:10:10", position: 10, arabic: "وَالطَّيْرَ", transliteration: "waṭ-ṭayra", root: "ط ي ر", meaning: { en: "and the birds", ur: "اور پرندوں کو" }, pos: ["CONJ", "N"], posLabel: "CONJ+N", grammarRole: "object", features: { case: "accusative", definite: true }, grammarExplanations: { en: "Conjoined object (or vocative)", ur: "معطوف منصوب" } },
      { id: "34:10:11", position: 11, arabic: "وَأَلَنَّا", transliteration: "wa-alannā", root: "ل ي ن", meaning: { en: "And We made pliable", ur: "اور ہم نے نرم کیا" }, pos: ["CONJ", "V"], posLabel: "CONJ+V", grammarRole: "verb", features: { aspect: "perfect", form: "IV", person: "1st", number: "plural" }, grammarExplanations: { en: "Conjunction + perfect verb Form IV", ur: "عطف + فعل ماضی باب افعال" } },
      { id: "34:10:12", position: 12, arabic: "لَهُ", transliteration: "lahu", meaning: { en: "for him", ur: "اس کے لیے" }, pos: ["PREP", "PRON"], posLabel: "PREP+PRON", grammarRole: "beneficiary", grammarExplanations: { en: "Preposition + pronoun - beneficiary", ur: "جار + ضمیر" } },
      { id: "34:10:13", position: 13, arabic: "الْحَدِيدَ", transliteration: "al-ḥadīda", root: "ح د د", meaning: { en: "iron", ur: "لوہا" }, pos: ["N"], posLabel: "N", grammarRole: "object", features: { case: "accusative", definite: true }, grammarExplanations: { en: "Direct object", ur: "مفعول به" } }
    ],
    structure: { diagram: ["EMPH-V", "OBJ", "VOC", "IMPERATIVE", "V-OBJ"], explanation: "Story of David - divine gifts, mountains and birds glorifying, softening of iron" ,
       relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'نداء' },
        { from: 8, to: 10, label: 'فعل + مفعول به' },
        { from: 8, to: 11, label: 'عطف' }
      ],
    }
  },

  11: {
    ayahNumber: 11,
    text: "أَنِ ٱعْمَلْ سَـٰبِغَـٰتٍۢ وَقَدِّرْ فِى ٱلسَّرْدِ ۖ وَٱعْمَلُوا۟ صَـٰلِحًا ۖ إِنِّى بِمَا تَعْمَلُونَ بَصِيرٌۭ",
    words: [
      { arabic: "أَنِ", transliteration: "ani", meaning: { en: "That", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱعْمَلْ", transliteration: "iʿ'mal", meaning: { en: "make", ur: "make" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَـٰبِغَـٰتٍۢ", transliteration: "sābighātin", meaning: { en: "full coats of mail", ur: "full coats of mail" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَقَدِّرْ", transliteration: "waqaddir", meaning: { en: "and measure precisely", ur: "اور measure precisely" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "[of]", ur: "[of]" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلسَّرْدِ ۖ", transliteration: "l-sardi", meaning: { en: "the links (of armor)", ur: "the links (of armor)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱعْمَلُوا۟", transliteration: "wa-iʿ'malū", meaning: { en: "and work", ur: "اور work" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "صَـٰلِحًا ۖ", transliteration: "ṣāliḥan", meaning: { en: "righteousness", ur: "righteousness" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنِّى", transliteration: "innī", meaning: { en: "Indeed, I Am", ur: "بیشک, میں Am" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "of what", ur: "of کیا" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "you do", ur: "تم do" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَصِيرٌۭ", transliteration: "baṣīrun", meaning: { en: "All-Seer", ur: "سب-Seer" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  12: {
    ayahNumber: 12,
    text: "وَلِسُلَيْمَـٰنَ ٱلرِّيحَ غُدُوُّهَا شَهْرٌۭ وَرَوَاحُهَا شَهْرٌۭ ۖ وَأَسَلْنَا لَهُۥ عَيْنَ ٱلْقِطْرِ ۖ وَمِنَ ٱلْجِنِّ مَن يَعْمَلُ بَيْنَ يَدَيْهِ بِإِذْنِ رَبِّهِۦ ۖ وَمَن يَزِغْ مِنْهُمْ عَنْ أَمْرِنَا نُذِقْهُ مِنْ عَذَابِ ٱلسَّعِيرِ",
    words: [
      { arabic: "وَلِسُلَيْمَـٰنَ", transliteration: "walisulaymāna", meaning: { en: "And to Sulaiman", ur: "اور کو Sulaiman" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلرِّيحَ", transliteration: "l-rīḥa", meaning: { en: "the wind ", ur: "the wind " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "غُدُوُّهَا", transliteration: "ghuduwwuhā", meaning: { en: "its morning course", ur: "its morning course" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَهْرٌۭ", transliteration: "shahrun", meaning: { en: "(was) a month", ur: "(was) a month" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرَوَاحُهَا", transliteration: "warawāḥuhā", meaning: { en: "and its afternoon course", ur: "اور its afternoon course" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "شَهْرٌۭ ۖ", transliteration: "shahrun", meaning: { en: "(was) a month", ur: "(was) a month" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَسَلْنَا", transliteration: "wa-asalnā", meaning: { en: "and We caused to flow", ur: "اور ہم caused کو flow" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "for him", ur: "for him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَيْنَ", transliteration: "ʿayna", meaning: { en: "a spring", ur: "a spring" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْقِطْرِ ۖ", transliteration: "l-qiṭ'ri", meaning: { en: "(of) molten copper", ur: "(of) molten copper" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمِنَ", transliteration: "wamina", meaning: { en: "And [of]", ur: "اور [of]" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْجِنِّ", transliteration: "l-jini", meaning: { en: "the jinn", ur: "the jinn" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "who", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَعْمَلُ", transliteration: "yaʿmalu", meaning: { en: "worked", ur: "worked" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَيْنَ", transliteration: "bayna", meaning: { en: "before him", ur: "پہلے him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَدَيْهِ", transliteration: "yadayhi", meaning: { en: "before him", ur: "پہلے him" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِإِذْنِ", transliteration: "bi-idh'ni", meaning: { en: "by the permission", ur: "by the permission" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "رَبِّهِۦ ۖ", transliteration: "rabbihi", meaning: { en: "(of) his Lord", ur: "(of) his رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَن", transliteration: "waman", meaning: { en: "And whoever", ur: "اور whoever" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَزِغْ", transliteration: "yazigh", meaning: { en: "deviated", ur: "deviated" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْهُمْ", transliteration: "min'hum", meaning: { en: "among them", ur: "among them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَنْ", transliteration: "ʿan", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَمْرِنَا", transliteration: "amrinā", meaning: { en: "Our Command", ur: "Our Command" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نُذِقْهُ", transliteration: "nudhiq'hu", meaning: { en: "We will make him taste", ur: "ہم will make him taste" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَذَابِ", transliteration: "ʿadhābi", meaning: { en: "(the) punishment", ur: "(the) عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّعِيرِ", transliteration: "l-saʿīri", meaning: { en: "(of) the Blaze", ur: "(of) the Blaze" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'موصول + صلة' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'جار + مجرور' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 25, to: 26, label: 'جار + مجرور' },
        { from: 26, to: 27, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  13: {
    ayahNumber: 13,
    text: "يَعْمَلُونَ لَهُۥ مَا يَشَآءُ مِن مَّحَـٰرِيبَ وَتَمَـٰثِيلَ وَجِفَانٍۢ كَٱلْجَوَابِ وَقُدُورٍۢ رَّاسِيَـٰتٍ ۚ ٱعْمَلُوٓا۟ ءَالَ دَاوُۥدَ شُكْرًۭا ۚ وَقَلِيلٌۭ مِّنْ عِبَادِىَ ٱلشَّكُورُ",
    words: [
      { arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", meaning: { en: "They worked", ur: "وہ لوگ worked" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "for him", ur: "for him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَشَآءُ", transliteration: "yashāu", meaning: { en: "he willed", ur: "وہ willed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَّحَـٰرِيبَ", transliteration: "maḥārība", meaning: { en: "elevated chambers", ur: "elevated chambers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَتَمَـٰثِيلَ", transliteration: "watamāthīla", meaning: { en: "and statues", ur: "اور statues" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَجِفَانٍۢ", transliteration: "wajifānin", meaning: { en: "and bowls", ur: "اور bowls" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كَٱلْجَوَابِ", transliteration: "kal-jawābi", meaning: { en: "like reservoirs", ur: "like reservoirs" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَقُدُورٍۢ", transliteration: "waqudūrin", meaning: { en: "and cooking-pots", ur: "اور cooking-pots" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "رَّاسِيَـٰتٍ ۚ", transliteration: "rāsiyātin", meaning: { en: "fixed", ur: "fixed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱعْمَلُوٓا۟", transliteration: "iʿ'malū", meaning: { en: "Work", ur: "Work" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَالَ", transliteration: "āla", meaning: { en: "O family", ur: "اے family" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "دَاوُۥدَ", transliteration: "dāwūda", meaning: { en: "(of) Dawood", ur: "(of) Dawood" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شُكْرًۭا ۚ", transliteration: "shuk'ran", meaning: { en: "(in) gratitude", ur: "(میں) gratitude" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَقَلِيلٌۭ", transliteration: "waqalīlun", meaning: { en: "But few", ur: "لیکن few" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عِبَادِىَ", transliteration: "ʿibādiya", meaning: { en: "My slaves", ur: "My slaves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلشَّكُورُ", transliteration: "l-shakūru", meaning: { en: "(are) grateful", ur: "(are) grateful" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'موصوف + صفت' }
      ],
    },
  },
  14: {
    ayahNumber: 14,
    text: "فَلَمَّا قَضَيْنَا عَلَيْهِ ٱلْمَوْتَ مَا دَلَّهُمْ عَلَىٰ مَوْتِهِۦٓ إِلَّا دَآبَّةُ ٱلْأَرْضِ تَأْكُلُ مِنسَأَتَهُۥ ۖ فَلَمَّا خَرَّ تَبَيَّنَتِ ٱلْجِنُّ أَن لَّوْ كَانُوا۟ يَعْلَمُونَ ٱلْغَيْبَ مَا لَبِثُوا۟ فِى ٱلْعَذَابِ ٱلْمُهِينِ",
    words: [
      { arabic: "فَلَمَّا", transliteration: "falammā", meaning: { en: "Then when", ur: "پھر when" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "قَضَيْنَا", transliteration: "qaḍaynā", meaning: { en: "We decreed", ur: "ہم decreed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "for him", ur: "for him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمَوْتَ", transliteration: "l-mawta", meaning: { en: "the death", ur: "the موت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "دَلَّهُمْ", transliteration: "dallahum", meaning: { en: "indicated to them", ur: "indicated کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "[on]", ur: "[پر]" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَوْتِهِۦٓ", transliteration: "mawtihi", meaning: { en: "his death", ur: "his موت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "دَآبَّةُ", transliteration: "dābbatu", meaning: { en: "a creature", ur: "a creature" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "(of) the earth", ur: "(of) زمین" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَأْكُلُ", transliteration: "takulu", meaning: { en: "eating", ur: "eating" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنسَأَتَهُۥ ۖ", transliteration: "minsa-atahu", meaning: { en: "his staff", ur: "his staff" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَلَمَّا", transliteration: "falammā", meaning: { en: "But when", ur: "لیکن when" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "خَرَّ", transliteration: "kharra", meaning: { en: "he fell down", ur: "وہ fell down" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تَبَيَّنَتِ", transliteration: "tabayyanati", meaning: { en: "became clear", ur: "became clear" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْجِنُّ", transliteration: "l-jinu", meaning: { en: "(to) the jinn", ur: "(کو) the jinn" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّوْ", transliteration: "law", meaning: { en: "if", ur: "if" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they had", ur: "وہ لوگ had" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "known", ur: "known" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْغَيْبَ", transliteration: "l-ghayba", meaning: { en: "the unseen", ur: "the unseen" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "لَبِثُوا۟", transliteration: "labithū", meaning: { en: "they (would have) remained", ur: "وہ لوگ (would have) remained" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْعَذَابِ", transliteration: "l-ʿadhābi", meaning: { en: "the punishment", ur: "the عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُهِينِ", transliteration: "l-muhīni", meaning: { en: "humiliating", ur: "humiliating" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'نفی + فعل' },
        { from: 25, to: 26, label: 'جار + مجرور' }
      ],
    },
  },
  15: {
    ayahNumber: 15,
    text: "لَقَدْ كَانَ لِسَبَإٍۢ فِى مَسْكَنِهِمْ ءَايَةٌۭ ۖ جَنَّتَانِ عَن يَمِينٍۢ وَشِمَالٍۢ ۖ كُلُوا۟ مِن رِّزْقِ رَبِّكُمْ وَٱشْكُرُوا۟ لَهُۥ ۚ بَلْدَةٌۭ طَيِّبَةٌۭ وَرَبٌّ غَفُورٌۭ",
    words: [
      { arabic: "لَقَدْ", transliteration: "laqad", meaning: { en: "Certainly", ur: "Certainly" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "(there) was", ur: "(there) was" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِسَبَإٍۢ", transliteration: "lisaba-in", meaning: { en: "for Saba", ur: "for Saba" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَسْكَنِهِمْ", transliteration: "maskanihim", meaning: { en: "their dwelling place", ur: "their dwelling place" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَايَةٌۭ ۖ", transliteration: "āyatun", meaning: { en: "a sign:", ur: "a نشانی:" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَنَّتَانِ", transliteration: "jannatāni", meaning: { en: "Two gardens", ur: "Two باغات" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "on", ur: "پر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَمِينٍۢ", transliteration: "yamīnin", meaning: { en: "(the) right", ur: "(the) right" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَشِمَالٍۢ ۖ", transliteration: "washimālin", meaning: { en: "and (on the) left", ur: "اور (پر the) left" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كُلُوا۟", transliteration: "kulū", meaning: { en: "Eat", ur: "Eat" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رِّزْقِ", transliteration: "riz'qi", meaning: { en: "(the) provision", ur: "(the) provision" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبِّكُمْ", transliteration: "rabbikum", meaning: { en: "(of) your Lord", ur: "(of) your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱشْكُرُوا۟", transliteration: "wa-ush'kurū", meaning: { en: "and be grateful", ur: "اور be grateful" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَهُۥ ۚ", transliteration: "lahu", meaning: { en: "to Him", ur: "کو Him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَلْدَةٌۭ", transliteration: "baldatun", meaning: { en: "A land", ur: "A land" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "طَيِّبَةٌۭ", transliteration: "ṭayyibatun", meaning: { en: "good", ur: "اچھا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرَبٌّ", transliteration: "warabbun", meaning: { en: "and a Lord", ur: "اور a رب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "غَفُورٌۭ", transliteration: "ghafūrun", meaning: { en: "Oft-Forgiving", ur: "Oft-Forgiving" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  16: {
    ayahNumber: 16,
    text: "فَأَعْرَضُوا۟ فَأَرْسَلْنَا عَلَيْهِمْ سَيْلَ ٱلْعَرِمِ وَبَدَّلْنَـٰهُم بِجَنَّتَيْهِمْ جَنَّتَيْنِ ذَوَاتَىْ أُكُلٍ خَمْطٍۢ وَأَثْلٍۢ وَشَىْءٍۢ مِّن سِدْرٍۢ قَلِيلٍۢ",
    words: [
      { arabic: "فَأَعْرَضُوا۟", transliteration: "fa-aʿraḍū", meaning: { en: "But they turned away", ur: "لیکن وہ لوگ turned away" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "فَأَرْسَلْنَا", transliteration: "fa-arsalnā", meaning: { en: "so We sent", ur: "so ہم sent" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "upon them", ur: "پر them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَيْلَ", transliteration: "sayla", meaning: { en: "(the) flood", ur: "(the) flood" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَرِمِ", transliteration: "l-ʿarimi", meaning: { en: "(of) the dam", ur: "(of) the dam" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَبَدَّلْنَـٰهُم", transliteration: "wabaddalnāhum", meaning: { en: "and We changed for them", ur: "اور ہم changed for them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِجَنَّتَيْهِمْ", transliteration: "bijannatayhim", meaning: { en: "their two gardens", ur: "their two باغات" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "جَنَّتَيْنِ", transliteration: "jannatayni", meaning: { en: "(with) two gardens", ur: "(ساتھ) two باغات" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَوَاتَىْ", transliteration: "dhawātay", meaning: { en: "producing fruit", ur: "producing fruit" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُكُلٍ", transliteration: "ukulin", meaning: { en: "producing fruit", ur: "producing fruit" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَمْطٍۢ", transliteration: "khamṭin", meaning: { en: "bitter", ur: "bitter" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَثْلٍۢ", transliteration: "wa-athlin", meaning: { en: "and tamarisks", ur: "اور tamarisks" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَشَىْءٍۢ", transliteration: "washayin", meaning: { en: "and (some)thing", ur: "اور (some)thing" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سِدْرٍۢ", transliteration: "sid'rin", meaning: { en: "lote trees", ur: "lote trees" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَلِيلٍۢ", transliteration: "qalīlin", meaning: { en: "few", ur: "few" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  17: {
    ayahNumber: 17,
    text: "ذَٰلِكَ جَزَيْنَـٰهُم بِمَا كَفَرُوا۟ ۖ وَهَلْ نُجَـٰزِىٓ إِلَّا ٱلْكَفُورَ",
    words: [
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "وہ" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "جَزَيْنَـٰهُم", transliteration: "jazaynāhum", meaning: { en: "We recompensed them", ur: "ہم recompensed them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "because", ur: "because" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "كَفَرُوا۟ ۖ", transliteration: "kafarū", meaning: { en: "they disbelieved", ur: "وہ لوگ disbelieved" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَهَلْ", transliteration: "wahal", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "نُجَـٰزِىٓ", transliteration: "nujāzī", meaning: { en: "We recompense", ur: "ہم recompense" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْكَفُورَ", transliteration: "l-kafūra", meaning: { en: "the ungrateful", ur: "the ungrateful" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
  },
  18: {
    ayahNumber: 18,
    text: "وَجَعَلْنَا بَيْنَهُمْ وَبَيْنَ ٱلْقُرَى ٱلَّتِى بَـٰرَكْنَا فِيهَا قُرًۭى ظَـٰهِرَةًۭ وَقَدَّرْنَا فِيهَا ٱلسَّيْرَ ۖ سِيرُوا۟ فِيهَا لَيَالِىَ وَأَيَّامًا ءَامِنِينَ",
    words: [
      { arabic: "وَجَعَلْنَا", transliteration: "wajaʿalnā", meaning: { en: "And We made", ur: "اور ہم made" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بَيْنَهُمْ", transliteration: "baynahum", meaning: { en: "between them", ur: "درمیان them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَبَيْنَ", transliteration: "wabayna", meaning: { en: "and between", ur: "اور درمیان" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْقُرَى", transliteration: "l-qurā", meaning: { en: "the towns", ur: "the towns" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّتِى", transliteration: "allatī", meaning: { en: "which", ur: "جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَـٰرَكْنَا", transliteration: "bāraknā", meaning: { en: "We had blessed", ur: "ہم had blessed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "in it", ur: "میں it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قُرًۭى", transliteration: "quran", meaning: { en: "towns", ur: "towns" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظَـٰهِرَةًۭ", transliteration: "ẓāhiratan", meaning: { en: "visible", ur: "visible" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَقَدَّرْنَا", transliteration: "waqaddarnā", meaning: { en: "And We determined", ur: "اور ہم determined" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "between them", ur: "درمیان them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّيْرَ ۖ", transliteration: "l-sayra", meaning: { en: "the journey", ur: "the journey" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سِيرُوا۟", transliteration: "sīrū", meaning: { en: "Travel", ur: "Travel" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "between them", ur: "درمیان them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَيَالِىَ", transliteration: "layāliya", meaning: { en: "(by) night", ur: "(by) رات" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَيَّامًا", transliteration: "wa-ayyāman", meaning: { en: "and (by) day", ur: "اور (by) دن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ءَامِنِينَ", transliteration: "āminīna", meaning: { en: "safely", ur: "safely" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  19: {
    ayahNumber: 19,
    text: "فَقَالُوا۟ رَبَّنَا بَـٰعِدْ بَيْنَ أَسْفَارِنَا وَظَلَمُوٓا۟ أَنفُسَهُمْ فَجَعَلْنَـٰهُمْ أَحَادِيثَ وَمَزَّقْنَـٰهُمْ كُلَّ مُمَزَّقٍ ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ لِّكُلِّ صَبَّارٍۢ شَكُورٍۢ",
    words: [
      { arabic: "فَقَالُوا۟", transliteration: "faqālū", meaning: { en: "But they said", ur: "لیکن وہ لوگ کہا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "رَبَّنَا", transliteration: "rabbanā", meaning: { en: "Our Lord", ur: "Our رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَـٰعِدْ", transliteration: "bāʿid", meaning: { en: "lengthen (the distance)", ur: "lengthen (the distance)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَيْنَ", transliteration: "bayna", meaning: { en: "between", ur: "درمیان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَسْفَارِنَا", transliteration: "asfārinā", meaning: { en: "our journeys", ur: "our journeys" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَظَلَمُوٓا۟", transliteration: "waẓalamū", meaning: { en: "And they wronged", ur: "اور وہ لوگ wronged" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَنفُسَهُمْ", transliteration: "anfusahum", meaning: { en: "themselves", ur: "themselves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَجَعَلْنَـٰهُمْ", transliteration: "fajaʿalnāhum", meaning: { en: "so We made them", ur: "so ہم made them" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "أَحَادِيثَ", transliteration: "aḥādītha", meaning: { en: "narrations", ur: "narrations" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَزَّقْنَـٰهُمْ", transliteration: "wamazzaqnāhum", meaning: { en: "and We dispersed them", ur: "اور ہم dispersed them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كُلَّ", transliteration: "kulla", meaning: { en: "(in) a total", ur: "(میں) a total" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُمَزَّقٍ ۚ", transliteration: "mumazzaqin", meaning: { en: "dispersion", ur: "dispersion" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "وہ" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "لَـَٔايَـٰتٍۢ", transliteration: "laāyātin", meaning: { en: "surely (are) Signs", ur: "یقیناً (are) نشانیاں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّكُلِّ", transliteration: "likulli", meaning: { en: "for everyone", ur: "for everyone" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "صَبَّارٍۢ", transliteration: "ṣabbārin", meaning: { en: "patient", ur: "patient" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَكُورٍۢ", transliteration: "shakūrin", meaning: { en: "(and) grateful", ur: "(اور) grateful" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 18, to: 19, label: 'موصوف + صفت' }
      ],
    },
  },
  20: {
    ayahNumber: 20,
    text: "وَلَقَدْ صَدَّقَ عَلَيْهِمْ إِبْلِيسُ ظَنَّهُۥ فَٱتَّبَعُوهُ إِلَّا فَرِيقًۭا مِّنَ ٱلْمُؤْمِنِينَ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور certainly" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "صَدَّقَ", transliteration: "ṣaddaqa", meaning: { en: "found true", ur: "found true" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "about them", ur: "about them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِبْلِيسُ", transliteration: "ib'līsu", meaning: { en: "Iblis", ur: "Iblis" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظَنَّهُۥ", transliteration: "ẓannahu", meaning: { en: "his assumption", ur: "his assumption" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱتَّبَعُوهُ", transliteration: "fa-ittabaʿūhu", meaning: { en: "so they followed him", ur: "so وہ لوگ followed him" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَرِيقًۭا", transliteration: "farīqan", meaning: { en: "a group", ur: "a group" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", meaning: { en: "the believers", ur: "the مومنین" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  21: {
    ayahNumber: 21,
    text: "وَمَا كَانَ لَهُۥ عَلَيْهِم مِّن سُلْطَـٰنٍ إِلَّا لِنَعْلَمَ مَن يُؤْمِنُ بِٱلْـَٔاخِرَةِ مِمَّنْ هُوَ مِنْهَا فِى شَكٍّۢ ۗ وَرَبُّكَ عَلَىٰ كُلِّ شَىْءٍ حَفِيظٌۭ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "was", ur: "was" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "for him", ur: "for him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْهِم", transliteration: "ʿalayhim", meaning: { en: "over them", ur: "اوپر them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سُلْطَـٰنٍ", transliteration: "sul'ṭānin", meaning: { en: "authority", ur: "authority" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِنَعْلَمَ", transliteration: "linaʿlama", meaning: { en: "that We (might) make evident", ur: "وہ ہم (might) make evident" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "who", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يُؤْمِنُ", transliteration: "yu'minu", meaning: { en: "believes", ur: "believes" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِٱلْـَٔاخِرَةِ", transliteration: "bil-ākhirati", meaning: { en: "in the Hereafter", ur: "میں the آخرت" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مِمَّنْ", transliteration: "mimman", meaning: { en: "from (one) who", ur: "سے (one) جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "[he]", ur: "[وہ]" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "مِنْهَا", transliteration: "min'hā", meaning: { en: "about it", ur: "about it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "(is) in", ur: "(is) میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شَكٍّۢ ۗ", transliteration: "shakkin", meaning: { en: "doubt", ur: "doubt" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَرَبُّكَ", transliteration: "warabbuka", meaning: { en: "And your Lord", ur: "اور your رب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "اوپر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "all", ur: "سب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَىْءٍ", transliteration: "shayin", meaning: { en: "things", ur: "things" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَفِيظٌۭ", transliteration: "ḥafīẓun", meaning: { en: "(is) a Guardian", ur: "(is) a Guardian" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'موصول + صلة' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'جار + مجرور' }
      ],
    },
  },
  22: {
    ayahNumber: 22,
    text: "قُلِ ٱدْعُوا۟ ٱلَّذِينَ زَعَمْتُم مِّن دُونِ ٱللَّهِ ۖ لَا يَمْلِكُونَ مِثْقَالَ ذَرَّةٍۢ فِى ٱلسَّمَـٰوَٰتِ وَلَا فِى ٱلْأَرْضِ وَمَا لَهُمْ فِيهِمَا مِن شِرْكٍۢ وَمَا لَهُۥ مِنْهُم مِّن ظَهِيرٍۢ",
    words: [
      { arabic: "قُلِ", transliteration: "quli", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱدْعُوا۟", transliteration: "id'ʿū", meaning: { en: "Call upon", ur: "Call پر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those whom", ur: "those whom" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "زَعَمْتُم", transliteration: "zaʿamtum", meaning: { en: "you claim", ur: "تم claim" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "besides", ur: "besides" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "دُونِ", transliteration: "dūni", meaning: { en: "besides", ur: "besides" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "Not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَمْلِكُونَ", transliteration: "yamlikūna", meaning: { en: "they possess", ur: "وہ لوگ possess" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِثْقَالَ", transliteration: "mith'qāla", meaning: { en: "(the) weight", ur: "(the) weight" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَرَّةٍۢ", transliteration: "dharratin", meaning: { en: "(of) an atom", ur: "(of) an atom" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", meaning: { en: "the heavens", ur: "the آسمان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "the earth", ur: "زمین" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "for them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِيهِمَا", transliteration: "fīhimā", meaning: { en: "in both of them", ur: "میں both of them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شِرْكٍۢ", transliteration: "shir'kin", meaning: { en: "partnership", ur: "partnership" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "for Him", ur: "for Him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْهُم", transliteration: "min'hum", meaning: { en: "from them", ur: "سے them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظَهِيرٍۢ", transliteration: "ẓahīrin", meaning: { en: "supporter", ur: "supporter" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'نفی + فعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'مضاف + مضاف إليه' },
        { from: 20, to: 21, label: 'جار + مجرور' }
      ],
    },
  },
  23: {
    ayahNumber: 23,
    text: "وَلَا تَنفَعُ ٱلشَّفَـٰعَةُ عِندَهُۥٓ إِلَّا لِمَنْ أَذِنَ لَهُۥ ۚ حَتَّىٰٓ إِذَا فُزِّعَ عَن قُلُوبِهِمْ قَالُوا۟ مَاذَا قَالَ رَبُّكُمْ ۖ قَالُوا۟ ٱلْحَقَّ ۖ وَهُوَ ٱلْعَلِىُّ ٱلْكَبِيرُ",
    words: [
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَنفَعُ", transliteration: "tanfaʿu", meaning: { en: "benefits", ur: "benefits" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلشَّفَـٰعَةُ", transliteration: "l-shafāʿatu", meaning: { en: "the intercession", ur: "the intercession" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عِندَهُۥٓ", transliteration: "ʿindahu", meaning: { en: "with Him", ur: "ساتھ Him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِمَنْ", transliteration: "liman", meaning: { en: "for (one) whom", ur: "for (one) whom" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "أَذِنَ", transliteration: "adhina", meaning: { en: "He permits", ur: "وہ permits" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُۥ ۚ", transliteration: "lahu", meaning: { en: "for him", ur: "for him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَتَّىٰٓ", transliteration: "ḥattā", meaning: { en: "Until", ur: "Until" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فُزِّعَ", transliteration: "fuzziʿa", meaning: { en: "fear is removed", ur: "ڈرنا is removed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "on", ur: "پر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قُلُوبِهِمْ", transliteration: "qulūbihim", meaning: { en: "their hearts", ur: "their hearts" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالُوا۟", transliteration: "qālū", meaning: { en: "they will say", ur: "وہ لوگ will کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَاذَا", transliteration: "mādhā", meaning: { en: "What is that ", ur: "کیا is وہ " }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "your Lord has said", ur: "your رب has کہا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبُّكُمْ ۖ", transliteration: "rabbukum", meaning: { en: "your Lord has said", ur: "your رب has کہا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالُوا۟", transliteration: "qālū", meaning: { en: "They will say", ur: "وہ لوگ will کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْحَقَّ ۖ", transliteration: "l-ḥaqa", meaning: { en: "The truth", ur: "The سچ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "And He", ur: "اور وہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْعَلِىُّ", transliteration: "l-ʿaliyu", meaning: { en: "(is) the Most High", ur: "(is) the Most High" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "ٱلْكَبِيرُ", transliteration: "l-kabīru", meaning: { en: "the Most Great", ur: "the Most Great" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'فعل + فاعل' }
      ],
    },
  },
  24: {
    ayahNumber: 24,
    text: "۞ قُلْ مَن يَرْزُقُكُم مِّنَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۖ قُلِ ٱللَّهُ ۖ وَإِنَّآ أَوْ إِيَّاكُمْ لَعَلَىٰ هُدًى أَوْ فِى ضَلَـٰلٍۢ مُّبِينٍۢ",
    words: [
      { arabic: "۞ قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "Who", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَرْزُقُكُم", transliteration: "yarzuqukum", meaning: { en: "provides (for) you", ur: "provides (for) تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", meaning: { en: "the heavens", ur: "the آسمان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَرْضِ ۖ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "قُلِ", transliteration: "quli", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهُ ۖ", transliteration: "l-lahu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِنَّآ", transliteration: "wa-innā", meaning: { en: "And indeed, we", ur: "اور بیشک, ہم" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "إِيَّاكُمْ", transliteration: "iyyākum", meaning: { en: "you", ur: "تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَعَلَىٰ", transliteration: "laʿalā", meaning: { en: "(are) surely upon", ur: "(are) یقیناً پر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُدًى", transliteration: "hudan", meaning: { en: "guidance", ur: "guidance" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ضَلَـٰلٍۢ", transliteration: "ḍalālin", meaning: { en: "error", ur: "error" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّبِينٍۢ", transliteration: "mubīnin", meaning: { en: "clear", ur: "clear" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'موصوف + صفت' }
      ],
    },
  },
  25: {
    ayahNumber: 25,
    text: "قُل لَّا تُسْـَٔلُونَ عَمَّآ أَجْرَمْنَا وَلَا نُسْـَٔلُ عَمَّا تَعْمَلُونَ",
    words: [
      { arabic: "قُل", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تُسْـَٔلُونَ", transliteration: "tus'alūna", meaning: { en: "you will be asked", ur: "تم will be asked" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَمَّآ", transliteration: "ʿammā", meaning: { en: "about what", ur: "about کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَجْرَمْنَا", transliteration: "ajramnā", meaning: { en: "sins we committed", ur: "sins ہم committed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "نُسْـَٔلُ", transliteration: "nus'alu", meaning: { en: "we will be asked", ur: "ہم will be asked" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَمَّا", transliteration: "ʿammā", meaning: { en: "about what", ur: "about کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "you do", ur: "تم do" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  26: {
    ayahNumber: 26,
    text: "قُلْ يَجْمَعُ بَيْنَنَا رَبُّنَا ثُمَّ يَفْتَحُ بَيْنَنَا بِٱلْحَقِّ وَهُوَ ٱلْفَتَّاحُ ٱلْعَلِيمُ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَجْمَعُ", transliteration: "yajmaʿu", meaning: { en: "Will gather", ur: "Will gather" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَيْنَنَا", transliteration: "baynanā", meaning: { en: "us together", ur: "us together" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبُّنَا", transliteration: "rabbunā", meaning: { en: "our Lord", ur: "our رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَفْتَحُ", transliteration: "yaftaḥu", meaning: { en: "He will judge", ur: "وہ will judge" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَيْنَنَا", transliteration: "baynanā", meaning: { en: "between us", ur: "درمیان us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", meaning: { en: "in truth", ur: "میں سچ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "And He", ur: "اور وہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْفَتَّاحُ", transliteration: "l-fatāḥu", meaning: { en: "(is) the Judge", ur: "(is) the Judge" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَلِيمُ", transliteration: "l-ʿalīmu", meaning: { en: "the All-Knowing", ur: "the سب جاننے والا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  27: {
    ayahNumber: 27,
    text: "قُلْ أَرُونِىَ ٱلَّذِينَ أَلْحَقْتُم بِهِۦ شُرَكَآءَ ۖ كَلَّا ۚ بَلْ هُوَ ٱللَّهُ ٱلْعَزِيزُ ٱلْحَكِيمُ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَرُونِىَ", transliteration: "arūniya", meaning: { en: "Show me", ur: "Show me" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those whom", ur: "those whom" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَلْحَقْتُم", transliteration: "alḥaqtum", meaning: { en: "you have joined", ur: "تم have joined" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "with Him", ur: "ساتھ Him" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "شُرَكَآءَ ۖ", transliteration: "shurakāa", meaning: { en: "(as) partners", ur: "(as) partners" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَلَّا ۚ", transliteration: "kallā", meaning: { en: "By no means", ur: "By نہیں means" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Nay", ur: "Nay" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "(is) Allah", ur: "(is) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَزِيزُ", transliteration: "l-ʿazīzu", meaning: { en: "the All-Mighty", ur: "the سب-Mighty" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "ٱلْحَكِيمُ", transliteration: "l-ḥakīmu", meaning: { en: "the All-Wise", ur: "the حکمت والا" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  28: {
    ayahNumber: 28,
    text: "وَمَآ أَرْسَلْنَـٰكَ إِلَّا كَآفَّةًۭ لِّلنَّاسِ بَشِيرًۭا وَنَذِيرًۭا وَلَـٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَعْلَمُونَ",
    words: [
      { arabic: "وَمَآ", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَرْسَلْنَـٰكَ", transliteration: "arsalnāka", meaning: { en: "We have sent you", ur: "ہم have sent تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَآفَّةًۭ", transliteration: "kāffatan", meaning: { en: "comprehensively", ur: "comprehensively" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّلنَّاسِ", transliteration: "lilnnāsi", meaning: { en: "to mankind", ur: "کو mankind" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَشِيرًۭا", transliteration: "bashīran", meaning: { en: "(as) a giver of glad tidings", ur: "(as) a giver of glad tidings" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَنَذِيرًۭا", transliteration: "wanadhīran", meaning: { en: "and (as) a warner", ur: "اور (as) a warner" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", meaning: { en: "But", ur: "لیکن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَكْثَرَ", transliteration: "akthara", meaning: { en: "most", ur: "most" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", meaning: { en: "[the] people", ur: "[the] لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "(do) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "know", ur: "جاننا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'نفی + فعل' }
      ],
    },
  },
  29: {
    ayahNumber: 29,
    text: "وَيَقُولُونَ مَتَىٰ هَـٰذَا ٱلْوَعْدُ إِن كُنتُمْ صَـٰدِقِينَ",
    words: [
      { arabic: "وَيَقُولُونَ", transliteration: "wayaqūlūna", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَتَىٰ", transliteration: "matā", meaning: { en: "When", ur: "When" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "(is) this", ur: "(is) this" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
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
  30: {
    ayahNumber: 30,
    text: "قُل لَّكُم مِّيعَادُ يَوْمٍۢ لَّا تَسْتَـْٔخِرُونَ عَنْهُ سَاعَةًۭ وَلَا تَسْتَقْدِمُونَ",
    words: [
      { arabic: "قُل", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّكُم", transliteration: "lakum", meaning: { en: "For you", ur: "For تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّيعَادُ", transliteration: "mīʿādu", meaning: { en: "(is the) appointment", ur: "(is the) appointment" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَوْمٍۢ", transliteration: "yawmin", meaning: { en: "(of) a Day", ur: "(of) a دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَسْتَـْٔخِرُونَ", transliteration: "tastakhirūna", meaning: { en: "you can postpone", ur: "تم can postpone" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَنْهُ", transliteration: "ʿanhu", meaning: { en: "[of] it", ur: "[of] it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَاعَةًۭ", transliteration: "sāʿatan", meaning: { en: "(for) an hour", ur: "(for) an hour" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَسْتَقْدِمُونَ", transliteration: "tastaqdimūna", meaning: { en: "(can) you precede (it)", ur: "(can) تم precede (it)" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  31: {
    ayahNumber: 31,
    text: "وَقَالَ ٱلَّذِينَ كَفَرُوا۟ لَن نُّؤْمِنَ بِهَـٰذَا ٱلْقُرْءَانِ وَلَا بِٱلَّذِى بَيْنَ يَدَيْهِ ۗ وَلَوْ تَرَىٰٓ إِذِ ٱلظَّـٰلِمُونَ مَوْقُوفُونَ عِندَ رَبِّهِمْ يَرْجِعُ بَعْضُهُمْ إِلَىٰ بَعْضٍ ٱلْقَوْلَ يَقُولُ ٱلَّذِينَ ٱسْتُضْعِفُوا۟ لِلَّذِينَ ٱسْتَكْبَرُوا۟ لَوْلَآ أَنتُمْ لَكُنَّا مُؤْمِنِينَ",
    words: [
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "And say", ur: "اور کہو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَفَرُوا۟", transliteration: "kafarū", meaning: { en: "disbelieve", ur: "disbelieve" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَن", transliteration: "lan", meaning: { en: "Never will", ur: "Never will" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نُّؤْمِنَ", transliteration: "nu'mina", meaning: { en: "we believe", ur: "ہم ایمان لانا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهَـٰذَا", transliteration: "bihādhā", meaning: { en: "in this", ur: "میں this" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱلْقُرْءَانِ", transliteration: "l-qur'āni", meaning: { en: "Quran", ur: "Quran" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِٱلَّذِى", transliteration: "bi-alladhī", meaning: { en: "in (that) which", ur: "میں (وہ) جو" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "بَيْنَ", transliteration: "bayna", meaning: { en: "(was) before it", ur: "(was) پہلے it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَدَيْهِ ۗ", transliteration: "yadayhi", meaning: { en: "(was) before it", ur: "(was) پہلے it" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "But if", ur: "لیکن if" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَرَىٰٓ", transliteration: "tarā", meaning: { en: "you (could) see", ur: "تم (could) دیکھنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِذِ", transliteration: "idhi", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلظَّـٰلِمُونَ", transliteration: "l-ẓālimūna", meaning: { en: "the wrongdoers", ur: "the wrongdoers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَوْقُوفُونَ", transliteration: "mawqūfūna", meaning: { en: "will be made to stand", ur: "will be made کو stand" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "before", ur: "پہلے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", meaning: { en: "their Lord", ur: "their رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَرْجِعُ", transliteration: "yarjiʿu", meaning: { en: "will throw back", ur: "will throw back" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَعْضُهُمْ", transliteration: "baʿḍuhum", meaning: { en: "some of them", ur: "some of them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعْضٍ", transliteration: "baʿḍin", meaning: { en: "others", ur: "others" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْقَوْلَ", transliteration: "l-qawla", meaning: { en: "the word", ur: "the word" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَقُولُ", transliteration: "yaqūlu", meaning: { en: "Will say", ur: "Will کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱسْتُضْعِفُوا۟", transliteration: "us'tuḍ'ʿifū", meaning: { en: "were oppressed", ur: "were oppressed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those who", ur: "کو جو لوگ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱسْتَكْبَرُوا۟", transliteration: "is'takbarū", meaning: { en: "were arrogant", ur: "were arrogant" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَوْلَآ", transliteration: "lawlā", meaning: { en: "If not", ur: "If نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنتُمْ", transliteration: "antum", meaning: { en: "(for) you", ur: "(for) تم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "لَكُنَّا", transliteration: "lakunnā", meaning: { en: "certainly we (would) have been", ur: "certainly ہم (would) have been" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُؤْمِنِينَ", transliteration: "mu'minīna", meaning: { en: "believers", ur: "مومنین" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'جار + مجرور' },
        { from: 22, to: 23, label: 'مضاف + مضاف إليه' },
        { from: 24, to: 25, label: 'فعل + فاعل' },
        { from: 27, to: 28, label: 'جار + مجرور' }
      ],
    },
  },
  32: {
    ayahNumber: 32,
    text: "قَالَ ٱلَّذِينَ ٱسْتَكْبَرُوا۟ لِلَّذِينَ ٱسْتُضْعِفُوٓا۟ أَنَحْنُ صَدَدْنَـٰكُمْ عَنِ ٱلْهُدَىٰ بَعْدَ إِذْ جَآءَكُم ۖ بَلْ كُنتُم مُّجْرِمِينَ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "Will say", ur: "Will کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱسْتَكْبَرُوا۟", transliteration: "is'takbarū", meaning: { en: "were arrogant", ur: "were arrogant" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those", ur: "کو those" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱسْتُضْعِفُوٓا۟", transliteration: "us'tuḍ'ʿifū", meaning: { en: "who were oppressed", ur: "جو were oppressed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَنَحْنُ", transliteration: "anaḥnu", meaning: { en: "Did we", ur: "Did ہم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "صَدَدْنَـٰكُمْ", transliteration: "ṣadadnākum", meaning: { en: "avert you", ur: "avert تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْهُدَىٰ", transliteration: "l-hudā", meaning: { en: "the guidance", ur: "the guidance" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْدَ", transliteration: "baʿda", meaning: { en: "after", ur: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَآءَكُم ۖ", transliteration: "jāakum", meaning: { en: "it had come to you", ur: "it had come کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Nay", ur: "Nay" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "كُنتُم", transliteration: "kuntum", meaning: { en: "you were", ur: "تم were" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مُّجْرِمِينَ", transliteration: "muj'rimīna", meaning: { en: "criminals", ur: "criminals" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  33: {
    ayahNumber: 33,
    text: "وَقَالَ ٱلَّذِينَ ٱسْتُضْعِفُوا۟ لِلَّذِينَ ٱسْتَكْبَرُوا۟ بَلْ مَكْرُ ٱلَّيْلِ وَٱلنَّهَارِ إِذْ تَأْمُرُونَنَآ أَن نَّكْفُرَ بِٱللَّهِ وَنَجْعَلَ لَهُۥٓ أَندَادًۭا ۚ وَأَسَرُّوا۟ ٱلنَّدَامَةَ لَمَّا رَأَوُا۟ ٱلْعَذَابَ وَجَعَلْنَا ٱلْأَغْلَـٰلَ فِىٓ أَعْنَاقِ ٱلَّذِينَ كَفَرُوا۟ ۚ هَلْ يُجْزَوْنَ إِلَّا مَا كَانُوا۟ يَعْمَلُونَ",
    words: [
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "And will say", ur: "اور will کہو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱسْتُضْعِفُوا۟", transliteration: "us'tuḍ'ʿifū", meaning: { en: "were oppressed", ur: "were oppressed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those who", ur: "کو جو لوگ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱسْتَكْبَرُوا۟", transliteration: "is'takbarū", meaning: { en: "were arrogant", ur: "were arrogant" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Nay", ur: "Nay" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "مَكْرُ", transliteration: "makru", meaning: { en: "(it was) a plot", ur: "(it was) a plot" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّيْلِ", transliteration: "al-layli", meaning: { en: "(by) night", ur: "(by) رات" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلنَّهَارِ", transliteration: "wal-nahāri", meaning: { en: "and (by) day", ur: "اور (by) دن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَأْمُرُونَنَآ", transliteration: "tamurūnanā", meaning: { en: "you were ordering us", ur: "تم were ordering us" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَّكْفُرَ", transliteration: "nakfura", meaning: { en: "we disbelieve", ur: "ہم disbelieve" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِٱللَّهِ", transliteration: "bil-lahi", meaning: { en: "in Allah", ur: "میں اللہ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَنَجْعَلَ", transliteration: "wanajʿala", meaning: { en: "and we set up", ur: "اور ہم set up" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَهُۥٓ", transliteration: "lahu", meaning: { en: "for Him", ur: "for Him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَندَادًۭا ۚ", transliteration: "andādan", meaning: { en: "equals", ur: "equals" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَسَرُّوا۟", transliteration: "wa-asarrū", meaning: { en: "But they will conceal", ur: "لیکن وہ لوگ will conceal" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلنَّدَامَةَ", transliteration: "l-nadāmata", meaning: { en: "the regret", ur: "the regret" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَمَّا", transliteration: "lammā", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَأَوُا۟", transliteration: "ra-awū", meaning: { en: "they see", ur: "وہ لوگ دیکھنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْعَذَابَ", transliteration: "l-ʿadhāba", meaning: { en: "the punishment", ur: "the عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَجَعَلْنَا", transliteration: "wajaʿalnā", meaning: { en: "And We will put", ur: "اور ہم will put" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْأَغْلَـٰلَ", transliteration: "l-aghlāla", meaning: { en: "shackles", ur: "shackles" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِىٓ", transliteration: "fī", meaning: { en: "on", ur: "پر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَعْنَاقِ", transliteration: "aʿnāqi", meaning: { en: "(the) necks", ur: "(the) necks" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "(of) those who", ur: "(of) جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَفَرُوا۟ ۚ", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "disbelieved" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هَلْ", transliteration: "hal", meaning: { en: "Will", ur: "Will" }, pos: "INTG", posLabel: "INTG", grammar: { role: "interrogative" } },
      { arabic: "يُجْزَوْنَ", transliteration: "yuj'zawna", meaning: { en: "they be recompensed", ur: "وہ لوگ be recompensed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "(for) what", ur: "(for) کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they used to", ur: "وہ لوگ used کو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", meaning: { en: "do", ur: "do" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 30, to: 31, label: 'فعل + فاعل' },
        { from: 32, to: 33, label: 'موصول + صلة' }
      ],
    },
  },
  34: {
    ayahNumber: 34,
    text: "وَمَآ أَرْسَلْنَا فِى قَرْيَةٍۢ مِّن نَّذِيرٍ إِلَّا قَالَ مُتْرَفُوهَآ إِنَّا بِمَآ أُرْسِلْتُم بِهِۦ كَـٰفِرُونَ",
    words: [
      { arabic: "وَمَآ", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَرْسَلْنَا", transliteration: "arsalnā", meaning: { en: "We sent", ur: "ہم sent" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَرْيَةٍۢ", transliteration: "qaryatin", meaning: { en: "a town", ur: "a town" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَّذِيرٍ", transliteration: "nadhīrin", meaning: { en: "warner", ur: "warner" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "لیکن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "said", ur: "کہا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُتْرَفُوهَآ", transliteration: "mut'rafūhā", meaning: { en: "its wealthy ones", ur: "its wealthy ones" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed we", ur: "بیشک ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَآ", transliteration: "bimā", meaning: { en: "in what", ur: "میں کیا" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "أُرْسِلْتُم", transliteration: "ur'sil'tum", meaning: { en: "you have been sent", ur: "تم have been sent" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "with", ur: "ساتھ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "كَـٰفِرُونَ", transliteration: "kāfirūna", meaning: { en: "(are) disbelievers", ur: "(are) کافر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  35: {
    ayahNumber: 35,
    text: "وَقَالُوا۟ نَحْنُ أَكْثَرُ أَمْوَٰلًۭا وَأَوْلَـٰدًۭا وَمَا نَحْنُ بِمُعَذَّبِينَ",
    words: [
      { arabic: "وَقَالُوا۟", transliteration: "waqālū", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "We", ur: "ہم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "أَكْثَرُ", transliteration: "aktharu", meaning: { en: "(have) more", ur: "(have) more" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَمْوَٰلًۭا", transliteration: "amwālan", meaning: { en: "wealth", ur: "wealth" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَوْلَـٰدًۭا", transliteration: "wa-awlādan", meaning: { en: "and children", ur: "اور اولاد" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "نَحْنُ", transliteration: "naḥnu", meaning: { en: "we", ur: "ہم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "بِمُعَذَّبِينَ", transliteration: "bimuʿadhabīna", meaning: { en: "will be punished", ur: "will be punished" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  36: {
    ayahNumber: 36,
    text: "قُلْ إِنَّ رَبِّى يَبْسُطُ ٱلرِّزْقَ لِمَن يَشَآءُ وَيَقْدِرُ وَلَـٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَعْلَمُونَ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبِّى", transliteration: "rabbī", meaning: { en: "my Lord", ur: "my رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَبْسُطُ", transliteration: "yabsuṭu", meaning: { en: "extends", ur: "extends" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلرِّزْقَ", transliteration: "l-riz'qa", meaning: { en: "the provision", ur: "the provision" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِمَن", transliteration: "liman", meaning: { en: "for whom", ur: "for whom" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "يَشَآءُ", transliteration: "yashāu", meaning: { en: "He wills", ur: "وہ wills" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَيَقْدِرُ", transliteration: "wayaqdiru", meaning: { en: "and restricts", ur: "اور restricts" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", meaning: { en: "but", ur: "لیکن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَكْثَرَ", transliteration: "akthara", meaning: { en: "most", ur: "most" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", meaning: { en: "[the] people", ur: "[the] لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(do) not", ur: "(do) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", meaning: { en: "know", ur: "جاننا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'نفی + فعل' }
      ],
    },
  },
  37: {
    ayahNumber: 37,
    text: "وَمَآ أَمْوَٰلُكُمْ وَلَآ أَوْلَـٰدُكُم بِٱلَّتِى تُقَرِّبُكُمْ عِندَنَا زُلْفَىٰٓ إِلَّا مَنْ ءَامَنَ وَعَمِلَ صَـٰلِحًۭا فَأُو۟لَـٰٓئِكَ لَهُمْ جَزَآءُ ٱلضِّعْفِ بِمَا عَمِلُوا۟ وَهُمْ فِى ٱلْغُرُفَـٰتِ ءَامِنُونَ",
    words: [
      { arabic: "وَمَآ", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَمْوَٰلُكُمْ", transliteration: "amwālukum", meaning: { en: "your wealth", ur: "your wealth" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَآ", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَوْلَـٰدُكُم", transliteration: "awlādukum", meaning: { en: "your children", ur: "your اولاد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلَّتِى", transliteration: "bi-allatī", meaning: { en: "[that]", ur: "[وہ]" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "تُقَرِّبُكُمْ", transliteration: "tuqarribukum", meaning: { en: "will bring you close", ur: "will bring تم close" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عِندَنَا", transliteration: "ʿindanā", meaning: { en: "to Us", ur: "کو Us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "زُلْفَىٰٓ", transliteration: "zul'fā", meaning: { en: "(in) position", ur: "(میں) position" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "لیکن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "whoever", ur: "whoever" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامَنَ", transliteration: "āmana", meaning: { en: "believes", ur: "believes" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعَمِلَ", transliteration: "waʿamila", meaning: { en: "and does", ur: "اور does" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "صَـٰلِحًۭا", transliteration: "ṣāliḥan", meaning: { en: "righteousness", ur: "righteousness" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأُو۟لَـٰٓئِكَ", transliteration: "fa-ulāika", meaning: { en: "then those", ur: "پھر those" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "for them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَزَآءُ", transliteration: "jazāu", meaning: { en: "(will be) reward", ur: "(will be) ثواب" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلضِّعْفِ", transliteration: "l-ḍiʿ'fi", meaning: { en: "two-fold", ur: "two-fold" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "for what", ur: "for کیا" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "عَمِلُوا۟", transliteration: "ʿamilū", meaning: { en: "they did", ur: "وہ لوگ did" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَهُمْ", transliteration: "wahum", meaning: { en: "and they", ur: "اور وہ لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "(will be) in", ur: "(will be) میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْغُرُفَـٰتِ", transliteration: "l-ghurufāti", meaning: { en: "the high dwellings", ur: "the high dwellings" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامِنُونَ", transliteration: "āminūna", meaning: { en: "secure", ur: "secure" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'جار + مجرور' }
      ],
    },
  },
  38: {
    ayahNumber: 38,
    text: "وَٱلَّذِينَ يَسْعَوْنَ فِىٓ ءَايَـٰتِنَا مُعَـٰجِزِينَ أُو۟لَـٰٓئِكَ فِى ٱلْعَذَابِ مُحْضَرُونَ",
    words: [
      { arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", meaning: { en: "And those who", ur: "اور جو لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَسْعَوْنَ", transliteration: "yasʿawna", meaning: { en: "strive", ur: "strive" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِىٓ", transliteration: "fī", meaning: { en: "against", ur: "against" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَايَـٰتِنَا", transliteration: "āyātinā", meaning: { en: "Our Verses", ur: "Our Verses" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُعَـٰجِزِينَ", transliteration: "muʿājizīna", meaning: { en: "(to) cause failure", ur: "(کو) cause failure" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", meaning: { en: "those", ur: "those" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "into", ur: "into" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْعَذَابِ", transliteration: "l-ʿadhābi", meaning: { en: "the punishment", ur: "the عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُحْضَرُونَ", transliteration: "muḥ'ḍarūna", meaning: { en: "(will be) brought", ur: "(will be) brought" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  39: {
    ayahNumber: 39,
    text: "قُلْ إِنَّ رَبِّى يَبْسُطُ ٱلرِّزْقَ لِمَن يَشَآءُ مِنْ عِبَادِهِۦ وَيَقْدِرُ لَهُۥ ۚ وَمَآ أَنفَقْتُم مِّن شَىْءٍۢ فَهُوَ يُخْلِفُهُۥ ۖ وَهُوَ خَيْرُ ٱلرَّٰزِقِينَ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبِّى", transliteration: "rabbī", meaning: { en: "my Lord", ur: "my رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَبْسُطُ", transliteration: "yabsuṭu", meaning: { en: "extends", ur: "extends" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلرِّزْقَ", transliteration: "l-riz'qa", meaning: { en: "the provision", ur: "the provision" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِمَن", transliteration: "liman", meaning: { en: "for whom", ur: "for whom" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "يَشَآءُ", transliteration: "yashāu", meaning: { en: "He wills", ur: "وہ wills" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عِبَادِهِۦ", transliteration: "ʿibādihi", meaning: { en: "His slaves", ur: "His slaves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيَقْدِرُ", transliteration: "wayaqdiru", meaning: { en: "and restricts", ur: "اور restricts" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَهُۥ ۚ", transliteration: "lahu", meaning: { en: "for him", ur: "for him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَآ", transliteration: "wamā", meaning: { en: "But what", ur: "لیکن کیا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَنفَقْتُم", transliteration: "anfaqtum", meaning: { en: "you spend", ur: "تم spend" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَىْءٍۢ", transliteration: "shayin", meaning: { en: "anything", ur: "anything" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَهُوَ", transliteration: "fahuwa", meaning: { en: "then He", ur: "پھر وہ" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "يُخْلِفُهُۥ ۖ", transliteration: "yukh'lifuhu", meaning: { en: "will compensate it", ur: "will compensate it" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "and He", ur: "اور وہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "خَيْرُ", transliteration: "khayru", meaning: { en: "(is the) Best", ur: "(is the) Best" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلرَّٰزِقِينَ", transliteration: "l-rāziqīna", meaning: { en: "(of) the Providers", ur: "(of) the Providers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  40: {
    ayahNumber: 40,
    text: "وَيَوْمَ يَحْشُرُهُمْ جَمِيعًۭا ثُمَّ يَقُولُ لِلْمَلَـٰٓئِكَةِ أَهَـٰٓؤُلَآءِ إِيَّاكُمْ كَانُوا۟ يَعْبُدُونَ",
    words: [
      { arabic: "وَيَوْمَ", transliteration: "wayawma", meaning: { en: "And (the) Day", ur: "اور (the) دن" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَحْشُرُهُمْ", transliteration: "yaḥshuruhum", meaning: { en: "He will gather them", ur: "وہ will gather them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "جَمِيعًۭا", transliteration: "jamīʿan", meaning: { en: "all", ur: "سب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَقُولُ", transliteration: "yaqūlu", meaning: { en: "He will say", ur: "وہ will کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِلْمَلَـٰٓئِكَةِ", transliteration: "lil'malāikati", meaning: { en: "to the Angels", ur: "کو the Angels" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "أَهَـٰٓؤُلَآءِ", transliteration: "ahāulāi", meaning: { en: "Were these you", ur: "Were these تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِيَّاكُمْ", transliteration: "iyyākum", meaning: { en: "Were these you", ur: "Were these تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they were", ur: "وہ لوگ were" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَعْبُدُونَ", transliteration: "yaʿbudūna", meaning: { en: "worshipping", ur: "worshipping" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  41: {
    ayahNumber: 41,
    text: "قَالُوا۟ سُبْحَـٰنَكَ أَنتَ وَلِيُّنَا مِن دُونِهِم ۖ بَلْ كَانُوا۟ يَعْبُدُونَ ٱلْجِنَّ ۖ أَكْثَرُهُم بِهِم مُّؤْمِنُونَ",
    words: [
      { arabic: "قَالُوا۟", transliteration: "qālū", meaning: { en: "They will say", ur: "وہ لوگ will کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "سُبْحَـٰنَكَ", transliteration: "sub'ḥānaka", meaning: { en: "Glory be to You", ur: "Glory be کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنتَ", transliteration: "anta", meaning: { en: "You", ur: "تم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "وَلِيُّنَا", transliteration: "waliyyunā", meaning: { en: "(are) our Protector", ur: "(are) our Protector" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "not them", ur: "نہیں them" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دُونِهِم ۖ", transliteration: "dūnihim", meaning: { en: "not them", ur: "نہیں them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Nay", ur: "Nay" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "they used", ur: "وہ لوگ used" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَعْبُدُونَ", transliteration: "yaʿbudūna", meaning: { en: "(to) worship", ur: "(کو) عبادت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْجِنَّ ۖ", transliteration: "l-jina", meaning: { en: "the jinn", ur: "the jinn" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَكْثَرُهُم", transliteration: "aktharuhum", meaning: { en: "most of them", ur: "most of them" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "بِهِم", transliteration: "bihim", meaning: { en: "in them", ur: "میں them" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مُّؤْمِنُونَ", transliteration: "mu'minūna", meaning: { en: "(were) believers", ur: "(were) مومنین" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'موصوف + صفت' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  42: {
    ayahNumber: 42,
    text: "فَٱلْيَوْمَ لَا يَمْلِكُ بَعْضُكُمْ لِبَعْضٍۢ نَّفْعًۭا وَلَا ضَرًّۭا وَنَقُولُ لِلَّذِينَ ظَلَمُوا۟ ذُوقُوا۟ عَذَابَ ٱلنَّارِ ٱلَّتِى كُنتُم بِهَا تُكَذِّبُونَ",
    words: [
      { arabic: "فَٱلْيَوْمَ", transliteration: "fal-yawma", meaning: { en: "But today", ur: "لیکن today" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَمْلِكُ", transliteration: "yamliku", meaning: { en: "possess power", ur: "possess power" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَعْضُكُمْ", transliteration: "baʿḍukum", meaning: { en: "some of you", ur: "some of تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِبَعْضٍۢ", transliteration: "libaʿḍin", meaning: { en: "on others", ur: "پر others" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "نَّفْعًۭا", transliteration: "nafʿan", meaning: { en: "to benefit", ur: "کو benefit" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ضَرًّۭا", transliteration: "ḍarran", meaning: { en: "to harm", ur: "کو harm" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَنَقُولُ", transliteration: "wanaqūlu", meaning: { en: "and We will say", ur: "اور ہم will کہو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لِلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those", ur: "کو those" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ظَلَمُوا۟", transliteration: "ẓalamū", meaning: { en: "who wronged", ur: "جو wronged" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ذُوقُوا۟", transliteration: "dhūqū", meaning: { en: "Taste", ur: "Taste" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَذَابَ", transliteration: "ʿadhāba", meaning: { en: "(the) punishment", ur: "(the) عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّارِ", transliteration: "l-nāri", meaning: { en: "(of) the Fire", ur: "(of) the آگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّتِى", transliteration: "allatī", meaning: { en: "which", ur: "جو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُنتُم", transliteration: "kuntum", meaning: { en: "you used", ur: "تم used" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهَا", transliteration: "bihā", meaning: { en: "to [it]", ur: "کو [it]" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "تُكَذِّبُونَ", transliteration: "tukadhibūna", meaning: { en: "deny", ur: "deny" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  43: {
    ayahNumber: 43,
    text: "وَإِذَا تُتْلَىٰ عَلَيْهِمْ ءَايَـٰتُنَا بَيِّنَـٰتٍۢ قَالُوا۟ مَا هَـٰذَآ إِلَّا رَجُلٌۭ يُرِيدُ أَن يَصُدَّكُمْ عَمَّا كَانَ يَعْبُدُ ءَابَآؤُكُمْ وَقَالُوا۟ مَا هَـٰذَآ إِلَّآ إِفْكٌۭ مُّفْتَرًۭى ۚ وَقَالَ ٱلَّذِينَ كَفَرُوا۟ لِلْحَقِّ لَمَّا جَآءَهُمْ إِنْ هَـٰذَآ إِلَّا سِحْرٌۭ مُّبِينٌۭ",
    words: [
      { arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور when" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تُتْلَىٰ", transliteration: "tut'lā", meaning: { en: "are recited", ur: "are recited" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "to them", ur: "کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَايَـٰتُنَا", transliteration: "āyātunā", meaning: { en: "Our Verses", ur: "Our Verses" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَيِّنَـٰتٍۢ", transliteration: "bayyinātin", meaning: { en: "clear", ur: "clear" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "قَالُوا۟", transliteration: "qālū", meaning: { en: "they say", ur: "وہ لوگ کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "هَـٰذَآ", transliteration: "hādhā", meaning: { en: "(is) this", ur: "(is) this" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "لیکن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَجُلٌۭ", transliteration: "rajulun", meaning: { en: "a man", ur: "a man" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُرِيدُ", transliteration: "yurīdu", meaning: { en: "who wishes", ur: "جو wishes" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "to", ur: "کو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَصُدَّكُمْ", transliteration: "yaṣuddakum", meaning: { en: "hinder you", ur: "hinder تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَمَّا", transliteration: "ʿammā", meaning: { en: "from what", ur: "سے کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "used", ur: "used" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَعْبُدُ", transliteration: "yaʿbudu", meaning: { en: "(to) worship", ur: "(کو) عبادت" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ءَابَآؤُكُمْ", transliteration: "ābāukum", meaning: { en: "your forefathers", ur: "your forefathers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَقَالُوا۟", transliteration: "waqālū", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "هَـٰذَآ", transliteration: "hādhā", meaning: { en: "(is) this", ur: "(is) this" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّآ", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِفْكٌۭ", transliteration: "if'kun", meaning: { en: "a lie", ur: "a lie" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّفْتَرًۭى ۚ", transliteration: "muf'taran", meaning: { en: "invented", ur: "invented" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَقَالَ", transliteration: "waqāla", meaning: { en: "And said", ur: "اور کہا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَفَرُوا۟", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "disbelieved" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِلْحَقِّ", transliteration: "lil'ḥaqqi", meaning: { en: "about the truth", ur: "about the سچ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "لَمَّا", transliteration: "lammā", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَآءَهُمْ", transliteration: "jāahum", meaning: { en: "it came to them", ur: "it came کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَـٰذَآ", transliteration: "hādhā", meaning: { en: "(is) this", ur: "(is) this" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سِحْرٌۭ", transliteration: "siḥ'run", meaning: { en: "a magic", ur: "a magic" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّبِينٌۭ", transliteration: "mubīnun", meaning: { en: "obvious", ur: "obvious" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'موصوف + صفت' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 27, to: 28, label: 'جار + مجرور' },
        { from: 33, to: 34, label: 'موصوف + صفت' }
      ],
    },
  },
  44: {
    ayahNumber: 44,
    text: "وَمَآ ءَاتَيْنَـٰهُم مِّن كُتُبٍۢ يَدْرُسُونَهَا ۖ وَمَآ أَرْسَلْنَآ إِلَيْهِمْ قَبْلَكَ مِن نَّذِيرٍۢ",
    words: [
      { arabic: "وَمَآ", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ءَاتَيْنَـٰهُم", transliteration: "ātaynāhum", meaning: { en: "We (had) given them", ur: "ہم (had) given them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُتُبٍۢ", transliteration: "kutubin", meaning: { en: "Scriptures", ur: "Scriptures" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَدْرُسُونَهَا ۖ", transliteration: "yadrusūnahā", meaning: { en: "which they could study", ur: "جو وہ لوگ could study" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَمَآ", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَرْسَلْنَآ", transliteration: "arsalnā", meaning: { en: "We sent", ur: "ہم sent" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَيْهِمْ", transliteration: "ilayhim", meaning: { en: "to them", ur: "کو them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَبْلَكَ", transliteration: "qablaka", meaning: { en: "before you", ur: "پہلے تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "نَّذِيرٍۢ", transliteration: "nadhīrin", meaning: { en: "warner", ur: "warner" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  45: {
    ayahNumber: 45,
    text: "وَكَذَّبَ ٱلَّذِينَ مِن قَبْلِهِمْ وَمَا بَلَغُوا۟ مِعْشَارَ مَآ ءَاتَيْنَـٰهُمْ فَكَذَّبُوا۟ رُسُلِى ۖ فَكَيْفَ كَانَ نَكِيرِ",
    words: [
      { arabic: "وَكَذَّبَ", transliteration: "wakadhaba", meaning: { en: "And denied", ur: "اور denied" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "(were) before them", ur: "(were) پہلے them" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلِهِمْ", transliteration: "qablihim", meaning: { en: "(were) before them", ur: "(were) پہلے them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بَلَغُوا۟", transliteration: "balaghū", meaning: { en: "they have attained", ur: "وہ لوگ have attained" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِعْشَارَ", transliteration: "miʿ'shāra", meaning: { en: "a tenth", ur: "a tenth" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَآ", transliteration: "mā", meaning: { en: "(of) what", ur: "(of) کیا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَاتَيْنَـٰهُمْ", transliteration: "ātaynāhum", meaning: { en: "We (had) given them", ur: "ہم (had) given them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَكَذَّبُوا۟", transliteration: "fakadhabū", meaning: { en: "But they denied", ur: "لیکن وہ لوگ denied" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "رُسُلِى ۖ", transliteration: "rusulī", meaning: { en: "My Messengers", ur: "My Messengers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَكَيْفَ", transliteration: "fakayfa", meaning: { en: "so how", ur: "so how" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "was", ur: "was" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَكِيرِ", transliteration: "nakīri", meaning: { en: "My rejection", ur: "My rejection" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  46: {
    ayahNumber: 46,
    text: "۞ قُلْ إِنَّمَآ أَعِظُكُم بِوَٰحِدَةٍ ۖ أَن تَقُومُوا۟ لِلَّهِ مَثْنَىٰ وَفُرَٰدَىٰ ثُمَّ تَتَفَكَّرُوا۟ ۚ مَا بِصَاحِبِكُم مِّن جِنَّةٍ ۚ إِنْ هُوَ إِلَّا نَذِيرٌۭ لَّكُم بَيْنَ يَدَىْ عَذَابٍۢ شَدِيدٍۢ",
    words: [
      { arabic: "۞ قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّمَآ", transliteration: "innamā", meaning: { en: "Only", ur: "صرف" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَعِظُكُم", transliteration: "aʿiẓukum", meaning: { en: "I advise you", ur: "میں advise تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِوَٰحِدَةٍ ۖ", transliteration: "biwāḥidatin", meaning: { en: "for one (thing)", ur: "for one (thing)" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَقُومُوا۟", transliteration: "taqūmū", meaning: { en: "you stand", ur: "تم stand" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِلَّهِ", transliteration: "lillahi", meaning: { en: "for Allah", ur: "for اللہ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مَثْنَىٰ", transliteration: "mathnā", meaning: { en: "(in) pairs", ur: "(میں) pairs" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَفُرَٰدَىٰ", transliteration: "wafurādā", meaning: { en: "and (as) individuals", ur: "اور (as) individuals" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَتَفَكَّرُوا۟ ۚ", transliteration: "tatafakkarū", meaning: { en: "reflect", ur: "reflect" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "بِصَاحِبِكُم", transliteration: "biṣāḥibikum", meaning: { en: "(is in) your companion", ur: "(is میں) your companion" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جِنَّةٍ ۚ", transliteration: "jinnatin", meaning: { en: "madness", ur: "madness" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "he", ur: "وہ" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "(is) except", ur: "(is) سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَذِيرٌۭ", transliteration: "nadhīrun", meaning: { en: "a warner", ur: "a warner" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَّكُم", transliteration: "lakum", meaning: { en: "for you", ur: "for تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَيْنَ", transliteration: "bayna", meaning: { en: "before", ur: "پہلے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَدَىْ", transliteration: "yaday", meaning: { en: "before", ur: "پہلے" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَذَابٍۢ", transliteration: "ʿadhābin", meaning: { en: "a punishment", ur: "a عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَدِيدٍۢ", transliteration: "shadīdin", meaning: { en: "severe", ur: "severe" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'فعل + فاعل' }
      ],
    },
  },
  47: {
    ayahNumber: 47,
    text: "قُلْ مَا سَأَلْتُكُم مِّنْ أَجْرٍۢ فَهُوَ لَكُمْ ۖ إِنْ أَجْرِىَ إِلَّا عَلَى ٱللَّهِ ۖ وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ شَهِيدٌۭ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "سَأَلْتُكُم", transliteration: "sa-altukum", meaning: { en: "I ask you", ur: "میں ask تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْ", transliteration: "min", meaning: { en: "for", ur: "for" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَجْرٍۢ", transliteration: "ajrin", meaning: { en: "any payment", ur: "any payment" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَهُوَ", transliteration: "fahuwa", meaning: { en: "but it (is)", ur: "لیکن it (is)" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "لَكُمْ ۖ", transliteration: "lakum", meaning: { en: "for you", ur: "for تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَجْرِىَ", transliteration: "ajriya", meaning: { en: "(is) my payment", ur: "(is) my payment" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "لیکن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "And He", ur: "اور وہ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "(is) over", ur: "(is) اوپر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "all", ur: "سب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَىْءٍۢ", transliteration: "shayin", meaning: { en: "things", ur: "things" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَهِيدٌۭ", transliteration: "shahīdun", meaning: { en: "a Witness", ur: "a Witness" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'جار + مجرور' }
      ],
    },
  },
  48: {
    ayahNumber: 48,
    text: "قُلْ إِنَّ رَبِّى يَقْذِفُ بِٱلْحَقِّ عَلَّـٰمُ ٱلْغُيُوبِ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبِّى", transliteration: "rabbī", meaning: { en: "my Lord", ur: "my رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَقْذِفُ", transliteration: "yaqdhifu", meaning: { en: "projects", ur: "projects" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", meaning: { en: "the truth", ur: "the سچ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "عَلَّـٰمُ", transliteration: "ʿallāmu", meaning: { en: "(the) All-Knower", ur: "(the) سب-Knower" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "ٱلْغُيُوبِ", transliteration: "l-ghuyūbi", meaning: { en: "(of) the unseen", ur: "(of) the unseen" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  49: {
    ayahNumber: 49,
    text: "قُلْ جَآءَ ٱلْحَقُّ وَمَا يُبْدِئُ ٱلْبَـٰطِلُ وَمَا يُعِيدُ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَآءَ", transliteration: "jāa", meaning: { en: "Has come", ur: "Has come" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْحَقُّ", transliteration: "l-ḥaqu", meaning: { en: "the truth", ur: "the سچ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يُبْدِئُ", transliteration: "yub'di-u", meaning: { en: "(can) originate", ur: "(can) originate" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْبَـٰطِلُ", transliteration: "l-bāṭilu", meaning: { en: "the falsehood", ur: "the falsehood" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يُعِيدُ", transliteration: "yuʿīdu", meaning: { en: "repeat", ur: "repeat" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  50: {
    ayahNumber: 50,
    text: "قُلْ إِن ضَلَلْتُ فَإِنَّمَآ أَضِلُّ عَلَىٰ نَفْسِى ۖ وَإِنِ ٱهْتَدَيْتُ فَبِمَا يُوحِىٓ إِلَىَّ رَبِّىٓ ۚ إِنَّهُۥ سَمِيعٌۭ قَرِيبٌۭ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "If", ur: "If" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ضَلَلْتُ", transliteration: "ḍalaltu", meaning: { en: "I err", ur: "میں err" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَإِنَّمَآ", transliteration: "fa-innamā", meaning: { en: "then only", ur: "پھر صرف" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "أَضِلُّ", transliteration: "aḍillu", meaning: { en: "I will err", ur: "میں will err" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "against", ur: "against" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "نَفْسِى ۖ", transliteration: "nafsī", meaning: { en: "myself", ur: "myself" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَإِنِ", transliteration: "wa-ini", meaning: { en: "But if", ur: "لیکن if" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱهْتَدَيْتُ", transliteration: "ih'tadaytu", meaning: { en: "I am guided", ur: "میں am guided" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَبِمَا", transliteration: "fabimā", meaning: { en: "then it is by what", ur: "پھر it is by کیا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "يُوحِىٓ", transliteration: "yūḥī", meaning: { en: "reveals", ur: "reveals" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَىَّ", transliteration: "ilayya", meaning: { en: "to me", ur: "کو me" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبِّىٓ ۚ", transliteration: "rabbī", meaning: { en: "my Lord", ur: "my رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّهُۥ", transliteration: "innahu", meaning: { en: "Indeed, He", ur: "بیشک, وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَمِيعٌۭ", transliteration: "samīʿun", meaning: { en: "(is) All-Hearer", ur: "(is) سب-Hearer" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "قَرِيبٌۭ", transliteration: "qarībun", meaning: { en: "Ever-Near", ur: "Ever-Near" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 14, to: 15, label: 'موصوف + صفت' }
      ],
    },
  },
  51: {
    ayahNumber: 51,
    text: "وَلَوْ تَرَىٰٓ إِذْ فَزِعُوا۟ فَلَا فَوْتَ وَأُخِذُوا۟ مِن مَّكَانٍۢ قَرِيبٍۢ",
    words: [
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "And if", ur: "اور if" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَرَىٰٓ", transliteration: "tarā", meaning: { en: "you (could) see", ur: "تم (could) دیکھنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَزِعُوا۟", transliteration: "faziʿū", meaning: { en: "they will be terrified", ur: "وہ لوگ will be terrified" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "فَلَا", transliteration: "falā", meaning: { en: "but (there will be) no", ur: "لیکن (there will be) نہیں" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "فَوْتَ", transliteration: "fawta", meaning: { en: "escape", ur: "escape" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "وَأُخِذُوا۟", transliteration: "wa-ukhidhū", meaning: { en: "and they will be seized", ur: "اور وہ لوگ will be seized" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَّكَانٍۢ", transliteration: "makānin", meaning: { en: "a place", ur: "a place" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَرِيبٍۢ", transliteration: "qarībin", meaning: { en: "near", ur: "near" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  52: {
    ayahNumber: 52,
    text: "وَقَالُوٓا۟ ءَامَنَّا بِهِۦ وَأَنَّىٰ لَهُمُ ٱلتَّنَاوُشُ مِن مَّكَانٍۭ بَعِيدٍۢ",
    words: [
      { arabic: "وَقَالُوٓا۟", transliteration: "waqālū", meaning: { en: "And they will say", ur: "اور وہ لوگ will کہو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ءَامَنَّا", transliteration: "āmannā", meaning: { en: "We believe", ur: "ہم ایمان لانا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "in it", ur: "میں it" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَأَنَّىٰ", transliteration: "wa-annā", meaning: { en: "But how", ur: "لیکن how" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَهُمُ", transliteration: "lahumu", meaning: { en: "for them", ur: "for them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلتَّنَاوُشُ", transliteration: "l-tanāwushu", meaning: { en: "(will be) the receiving", ur: "(will be) the receiving" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَّكَانٍۭ", transliteration: "makānin", meaning: { en: "a place", ur: "a place" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعِيدٍۢ", transliteration: "baʿīdin", meaning: { en: "far off", ur: "far off" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  53: {
    ayahNumber: 53,
    text: "وَقَدْ كَفَرُوا۟ بِهِۦ مِن قَبْلُ ۖ وَيَقْذِفُونَ بِٱلْغَيْبِ مِن مَّكَانٍۭ بَعِيدٍۢ",
    words: [
      { arabic: "وَقَدْ", transliteration: "waqad", meaning: { en: "And certainly", ur: "اور certainly" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كَفَرُوا۟", transliteration: "kafarū", meaning: { en: "they disbelieved", ur: "وہ لوگ disbelieved" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِهِۦ", transliteration: "bihi", meaning: { en: "in it", ur: "میں it" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "before", ur: "پہلے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "قَبْلُ ۖ", transliteration: "qablu", meaning: { en: "before", ur: "پہلے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَيَقْذِفُونَ", transliteration: "wayaqdhifūna", meaning: { en: "And they utter conjectures", ur: "اور وہ لوگ utter conjectures" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِٱلْغَيْبِ", transliteration: "bil-ghaybi", meaning: { en: "about the unseen", ur: "about the unseen" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَّكَانٍۭ", transliteration: "makānin", meaning: { en: "a place", ur: "a place" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعِيدٍۢ", transliteration: "baʿīdin", meaning: { en: "far off", ur: "far off" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  54: {
    ayahNumber: 54,
    text: "وَحِيلَ بَيْنَهُمْ وَبَيْنَ مَا يَشْتَهُونَ كَمَا فُعِلَ بِأَشْيَاعِهِم مِّن قَبْلُ ۚ إِنَّهُمْ كَانُوا۟ فِى شَكٍّۢ مُّرِيبٍۭ",
    words: [
      { arabic: "وَحِيلَ", transliteration: "waḥīla", meaning: { en: "And a barrier will be placed", ur: "اور a barrier will be placed" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بَيْنَهُمْ", transliteration: "baynahum", meaning: { en: "between them", ur: "درمیان them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَبَيْنَ", transliteration: "wabayna", meaning: { en: "and between", ur: "اور درمیان" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَشْتَهُونَ", transliteration: "yashtahūna", meaning: { en: "they desire", ur: "وہ لوگ desire" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كَمَا", transliteration: "kamā", meaning: { en: "as", ur: "as" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فُعِلَ", transliteration: "fuʿila", meaning: { en: "was done", ur: "was done" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِأَشْيَاعِهِم", transliteration: "bi-ashyāʿihim", meaning: { en: "with their kind", ur: "ساتھ their kind" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "before", ur: "پہلے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَبْلُ ۚ", transliteration: "qablu", meaning: { en: "before", ur: "پہلے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "Indeed, they", ur: "بیشک, وہ لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَانُوا۟", transliteration: "kānū", meaning: { en: "were", ur: "were" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شَكٍّۢ", transliteration: "shakkin", meaning: { en: "doubt", ur: "doubt" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّرِيبٍۭ", transliteration: "murībin", meaning: { en: "disquieting", ur: "disquieting" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
};

export default TREEBANK_DATA;
