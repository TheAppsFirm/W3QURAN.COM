/**
 * Surah Al-Haqqah (69) - Quranic Arabic Treebank
 * The Inevitable Reality
 * 52 Ayahs - Makki
 * Theme: Day of Judgment certainty, destroyed nations, record books, Quran is truth
 */

export const TREEBANK_DATA = {
  surahId: 69,
  surahName: "Al-Haqqah",
  surahNameArabic: "الحاقة",
  totalAyahs: 52,

  1: {
    ayahNumber: 1,
    text: "الْحَاقَّةُ",
    words: [
      { arabic: "الْحَاقَّةُ", transliteration: "al-ḥāqqatu", root: "ح ق ق", meaning: { en: "The Inevitable Reality", ur: "واقع ہونے والی", ar: "الحاقة" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true }, features: { participle: "active" } }
    ]
  },

  2: {
    ayahNumber: 2,
    text: "مَا الْحَاقَّةُ",
    words: [
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "What is", ur: "کیا ہے", ar: "ما" }, pos: "INTER", posLabel: "INTER", grammar: { role: "interrogative" } },
      { arabic: "الْحَاقَّةُ", transliteration: "al-ḥāqqatu", root: "ح ق ق", meaning: { en: "the Inevitable Reality", ur: "واقع ہونے والی", ar: "الحاقة" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } }
    ]
  },

  3: {
    ayahNumber: 3,
    text: "وَمَا أَدْرَاكَ مَا الْحَاقَّةُ",
    words: [
      { arabic: "وَمَا", transliteration: "wa-mā", root: null, meaning: { en: "And what", ur: "اور کیا", ar: "وما" }, pos: "INTER", posLabel: "INTER", grammar: { role: "interrogative" } },
      { arabic: "أَدْرَاكَ", transliteration: "adrāka", root: "د ر ي", meaning: { en: "can make you know", ur: "تمہیں بتائے", ar: "أدراك" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "what is", ur: "کیا ہے", ar: "ما" }, pos: "INTER", posLabel: "INTER", grammar: { role: "interrogative" } },
      { arabic: "الْحَاقَّةُ", transliteration: "al-ḥāqqatu", root: "ح ق ق", meaning: { en: "the Inevitable Reality", ur: "واقع ہونے والی", ar: "الحاقة" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } }
    ]
  },

  4: {
    ayahNumber: 4,
    text: "كَذَّبَتْ ثَمُودُ وَعَادٌ بِالْقَارِعَةِ",
    words: [
      { arabic: "كَذَّبَتْ", transliteration: "kadhdhabat", root: "ك ذ ب", meaning: { en: "Denied", ur: "جھٹلایا", ar: "كذبت" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "II" } },
      { arabic: "ثَمُودُ", transliteration: "thamūdu", root: null, meaning: { en: "Thamud", ur: "ثمود نے", ar: "ثمود" }, pos: "N", posLabel: "N", grammar: { role: "subject", proper_noun: true } },
      { arabic: "وَعَادٌ", transliteration: "wa-ʿādun", root: null, meaning: { en: "and 'Ad", ur: "اور عاد نے", ar: "وعاد" }, pos: "N", posLabel: "N", grammar: { role: "subject", proper_noun: true } },
      { arabic: "بِالْقَارِعَةِ", transliteration: "bi-al-qāriʿati", root: "ق ر ع", meaning: { en: "the Striking Calamity", ur: "قیامت کو", ar: "بالقارعة" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "فَأَمَّا ثَمُودُ فَأُهْلِكُوا بِالطَّاغِيَةِ",
    words: [
      { arabic: "فَأَمَّا", transliteration: "fa-ammā", root: null, meaning: { en: "So as for", ur: "پس رہے", ar: "فأما" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conditional" } },
      { arabic: "ثَمُودُ", transliteration: "thamūdu", root: null, meaning: { en: "Thamud", ur: "ثمود", ar: "ثمود" }, pos: "N", posLabel: "N", grammar: { role: "subject", proper_noun: true } },
      { arabic: "فَأُهْلِكُوا", transliteration: "fa-uhlikū", root: "ه ل ك", meaning: { en: "they were destroyed", ur: "وہ ہلاک کیے گئے", ar: "فأهلكوا" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "بِالطَّاغِيَةِ", transliteration: "bi-al-ṭāghiyati", root: "ط غ ي", meaning: { en: "by the overwhelming", ur: "حد سے بڑھنے والی آواز سے", ar: "بالطاغية" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase", definite: true } }
    ]
  },

  6: {
    ayahNumber: 6,
    text: "وَأَمَّا عَادٌ فَأُهْلِكُوا بِرِيحٍ صَرْصَرٍ عَاتِيَةٍ",
    words: [
      { arabic: "وَأَمَّا", transliteration: "wa-ammā", root: null, meaning: { en: "And as for", ur: "اور رہے", ar: "وأما" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conditional" } },
      { arabic: "عَادٌ", transliteration: "ʿādun", root: null, meaning: { en: "'Ad", ur: "عاد", ar: "عاد" }, pos: "N", posLabel: "N", grammar: { role: "subject", proper_noun: true } },
      { arabic: "فَأُهْلِكُوا", transliteration: "fa-uhlikū", root: "ه ل ك", meaning: { en: "they were destroyed", ur: "وہ ہلاک کیے گئے", ar: "فأهلكوا" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "بِرِيحٍ", transliteration: "bi-rīḥin", root: "ر و ح", meaning: { en: "by a wind", ur: "ہوا سے", ar: "بريح" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "صَرْصَرٍ", transliteration: "ṣarṣarin", root: "ص ر ر", meaning: { en: "screaming", ur: "سخت سرد", ar: "صرصر" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "عَاتِيَةٍ", transliteration: "ʿātiyatin", root: "ع ت و", meaning: { en: "violent", ur: "تباہ کن", ar: "عاتية" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ]
  },

  7: {
    ayahNumber: 7,
    text: "سَخَّرَهَا عَلَيْهِمْ سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ حُسُومًا فَتَرَى الْقَوْمَ فِيهَا صَرْعَىٰ كَأَنَّهُمْ أَعْجَازُ نَخْلٍ خَاوِيَةٍ",
    words: [
      { arabic: "سَخَّرَهَا", transliteration: "sakhkharahā", root: "س خ ر", meaning: { en: "He imposed it", ur: "مسلط کیا", ar: "سخرها" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "II" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", root: null, meaning: { en: "upon them", ur: "ان پر", ar: "عليهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "سَبْعَ", transliteration: "sabʿa", root: "س ب ع", meaning: { en: "seven", ur: "سات", ar: "سبع" }, pos: "NUM", posLabel: "NUM", grammar: { role: "adverbial" } },
      { arabic: "لَيَالٍ", transliteration: "layālin", root: "ل ي ل", meaning: { en: "nights", ur: "راتیں", ar: "ليال" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "وَثَمَانِيَةَ", transliteration: "wa-thamāniyata", root: "ث م ن", meaning: { en: "and eight", ur: "اور آٹھ", ar: "وثمانية" }, pos: "NUM", posLabel: "NUM", grammar: { role: "adverbial" } },
      { arabic: "أَيَّامٍ", transliteration: "ayyāmin", root: "ي و م", meaning: { en: "days", ur: "دن", ar: "أيام" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "حُسُومًا", transliteration: "ḥusūman", root: "ح س م", meaning: { en: "consecutively", ur: "لگاتار", ar: "حسوماً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "ḥāl" } },
      { arabic: "فَتَرَى", transliteration: "fa-tarā", root: "ر أ ي", meaning: { en: "and you would see", ur: "تو تو دیکھے", ar: "فترى" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "الْقَوْمَ", transliteration: "al-qawma", root: "ق و م", meaning: { en: "the people", ur: "قوم کو", ar: "القوم" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } },
      { arabic: "فِيهَا", transliteration: "fīhā", root: null, meaning: { en: "therein", ur: "اس میں", ar: "فيها" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "صَرْعَىٰ", transliteration: "ṣarʿā", root: "ص ر ع", meaning: { en: "fallen", ur: "گرے پڑے", ar: "صرعى" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "ḥāl" } },
      { arabic: "كَأَنَّهُمْ", transliteration: "kaʾannahum", root: null, meaning: { en: "as if they were", ur: "گویا وہ", ar: "كأنهم" }, pos: "PART", posLabel: "PART", grammar: { role: "simile" } },
      { arabic: "أَعْجَازُ", transliteration: "aʿjāzu", root: "ع ج ز", meaning: { en: "trunks", ur: "تنے", ar: "أعجاز" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } },
      { arabic: "نَخْلٍ", transliteration: "nakhlin", root: "ن خ ل", meaning: { en: "of palm trees", ur: "کھجور کے", ar: "نخل" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "خَاوِيَةٍ", transliteration: "khāwiyatin", root: "خ و ي", meaning: { en: "hollow", ur: "کھوکھلے", ar: "خاوية" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ]
  },

  8: {
    ayahNumber: 8,
    text: "فَهَلْ تَرَىٰ لَهُم مِّن بَاقِيَةٍ",
    words: [
      { arabic: "فَهَلْ", transliteration: "fa-hal", root: null, meaning: { en: "Then do you see", ur: "تو کیا تو دیکھتا ہے", ar: "فهل" }, pos: "INTER", posLabel: "INTER", grammar: { role: "interrogative" } },
      { arabic: "تَرَىٰ", transliteration: "tarā", root: "ر أ ي", meaning: { en: "you see", ur: "تو دیکھے", ar: "ترى" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "لَهُم", transliteration: "lahum", root: null, meaning: { en: "of them", ur: "ان میں سے", ar: "لهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مِّن", transliteration: "min", root: null, meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَاقِيَةٍ", transliteration: "bāqiyatin", root: "ب ق ي", meaning: { en: "remains", ur: "باقی بچا", ar: "باقية" }, pos: "N", posLabel: "N", grammar: { role: "object" } }
    ]
  },

  9: {
    ayahNumber: 9,
    text: "وَجَاءَ فِرْعَوْنُ وَمَن قَبْلَهُ وَالْمُؤْتَفِكَاتُ بِالْخَاطِئَةِ",
    words: [
      { arabic: "وَجَاءَ", transliteration: "wa-jāʾa", root: "ج ي أ", meaning: { en: "And came", ur: "اور آئے", ar: "وجاء" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "فِرْعَوْنُ", transliteration: "firʿawnu", root: null, meaning: { en: "Pharaoh", ur: "فرعون", ar: "فرعون" }, pos: "N", posLabel: "N", grammar: { role: "subject", proper_noun: true } },
      { arabic: "وَمَن", transliteration: "wa-man", root: null, meaning: { en: "and those", ur: "اور جو", ar: "ومن" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "قَبْلَهُ", transliteration: "qablahu", root: "ق ب ل", meaning: { en: "before him", ur: "اس سے پہلے تھے", ar: "قبله" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "وَالْمُؤْتَفِكَاتُ", transliteration: "wa-al-muʾtafikātu", root: "أ ف ك", meaning: { en: "and overturned cities", ur: "اور الٹی ہوئی بستیاں", ar: "والمؤتفكات" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true }, features: { form: "VIII participle" } },
      { arabic: "بِالْخَاطِئَةِ", transliteration: "bi-al-khāṭiʾati", root: "خ ط أ", meaning: { en: "with sin", ur: "گناہ کے ساتھ", ar: "بالخاطئة" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase", definite: true } }
    ]
  },

  10: {
    ayahNumber: 10,
    text: "فَعَصَوْا رَسُولَ رَبِّهِمْ فَأَخَذَهُمْ أَخْذَةً رَّابِيَةً",
    words: [
      { arabic: "فَعَصَوْا", transliteration: "fa-ʿaṣaw", root: "ع ص ي", meaning: { en: "And they disobeyed", ur: "تو انہوں نے نافرمانی کی", ar: "فعصوا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "رَسُولَ", transliteration: "rasūla", root: "ر س ل", meaning: { en: "the Messenger", ur: "رسول کی", ar: "رسول" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "رَبِّهِمْ", transliteration: "rabbihim", root: "ر ب ب", meaning: { en: "of their Lord", ur: "اپنے رب کے", ar: "ربهم" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "فَأَخَذَهُمْ", transliteration: "fa-akhadhahum", root: "أ خ ذ", meaning: { en: "so He seized them", ur: "تو اس نے انہیں پکڑا", ar: "فأخذهم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "أَخْذَةً", transliteration: "akhdhatan", root: "أ خ ذ", meaning: { en: "with a seizure", ur: "پکڑ", ar: "أخذة" }, pos: "N", posLabel: "N", grammar: { role: "cognate accusative" } },
      { arabic: "رَّابِيَةً", transliteration: "rābiyatan", root: "ر ب و", meaning: { en: "exceeding", ur: "بڑھی ہوئی", ar: "رابية" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ]
  },

  11: {
    ayahNumber: 11,
    text: "إِنَّا لَمَّا طَغَى الْمَاءُ حَمَلْنَاكُمْ فِي الْجَارِيَةِ",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", root: null, meaning: { en: "Indeed We", ur: "بیشک ہم نے", ar: "إنا" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "لَمَّا", transliteration: "lammā", root: null, meaning: { en: "when", ur: "جب", ar: "لما" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "temporal" } },
      { arabic: "طَغَى", transliteration: "ṭaghā", root: "ط غ ي", meaning: { en: "overflowed", ur: "طوفان آیا", ar: "طغى" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "الْمَاءُ", transliteration: "al-māʾu", root: "م و ه", meaning: { en: "the water", ur: "پانی", ar: "الماء" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "حَمَلْنَاكُمْ", transliteration: "ḥamalnākum", root: "ح م ل", meaning: { en: "We carried you", ur: "تمہیں سوار کیا", ar: "حملناكم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "فِي", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْجَارِيَةِ", transliteration: "al-jāriyati", root: "ج ر ي", meaning: { en: "the sailing ship", ur: "بہتی ہوئی کشتی", ar: "الجارية" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } }
    ]
  },

  12: {
    ayahNumber: 12,
    text: "لِنَجْعَلَهَا لَكُمْ تَذْكِرَةً وَتَعِيَهَا أُذُنٌ وَاعِيَةٌ",
    words: [
      { arabic: "لِنَجْعَلَهَا", transliteration: "li-najʿalahā", root: "ج ع ل", meaning: { en: "That We might make it", ur: "تاکہ ہم بنائیں", ar: "لنجعلها" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" } },
      { arabic: "لَكُمْ", transliteration: "lakum", root: null, meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "تَذْكِرَةً", transliteration: "tadhkiratan", root: "ذ ك ر", meaning: { en: "a reminder", ur: "نصیحت", ar: "تذكرة" }, pos: "N", posLabel: "N", grammar: { role: "predicate" }, features: { form: "II verbal noun" } },
      { arabic: "وَتَعِيَهَا", transliteration: "wa-taʿiyahā", root: "و ع ي", meaning: { en: "and would remember it", ur: "اور یاد رکھے", ar: "وتعيها" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "subjunctive" } },
      { arabic: "أُذُنٌ", transliteration: "udhunun", root: "أ ذ ن", meaning: { en: "an ear", ur: "کان", ar: "أذن" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "وَاعِيَةٌ", transliteration: "wāʿiyatun", root: "و ع ي", meaning: { en: "conscious", ur: "یاد رکھنے والا", ar: "واعية" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ]
  },

  13: {
    ayahNumber: 13,
    text: "فَإِذَا نُفِخَ فِي الصُّورِ نَفْخَةٌ وَاحِدَةٌ",
    words: [
      { arabic: "فَإِذَا", transliteration: "fa-idhā", root: null, meaning: { en: "Then when", ur: "پس جب", ar: "فإذا" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "نُفِخَ", transliteration: "nufikha", root: "ن ف خ", meaning: { en: "is blown", ur: "پھونکا جائے", ar: "نفخ" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "perfect" } },
      { arabic: "فِي", transliteration: "fī", root: null, meaning: { en: "into", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الصُّورِ", transliteration: "al-ṣūri", root: "ص و ر", meaning: { en: "the Horn", ur: "صور", ar: "الصور" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "نَفْخَةٌ", transliteration: "nafkhatun", root: "ن ف خ", meaning: { en: "a blast", ur: "ایک پھونک", ar: "نفخة" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "وَاحِدَةٌ", transliteration: "wāḥidatun", root: "و ح د", meaning: { en: "one", ur: "ایک", ar: "واحدة" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ]
  },

  14: {
    ayahNumber: 14,
    text: "وَحُمِلَتِ الْأَرْضُ وَالْجِبَالُ فَدُكَّتَا دَكَّةً وَاحِدَةً",
    words: [
      { arabic: "وَحُمِلَتِ", transliteration: "wa-ḥumilati", root: "ح م ل", meaning: { en: "And are lifted", ur: "اور اٹھائی جائیں", ar: "وحملت" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "perfect" } },
      { arabic: "الْأَرْضُ", transliteration: "al-arḍu", root: "أ ر ض", meaning: { en: "the earth", ur: "زمین", ar: "الأرض" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "وَالْجِبَالُ", transliteration: "wa-al-jibālu", root: "ج ب ل", meaning: { en: "and mountains", ur: "اور پہاڑ", ar: "والجبال" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "فَدُكَّتَا", transliteration: "fa-dukkatā", root: "د ك ك", meaning: { en: "and crushed", ur: "تو کوٹ ڈالے جائیں", ar: "فدكتا" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "perfect" } },
      { arabic: "دَكَّةً", transliteration: "dakkatan", root: "د ك ك", meaning: { en: "with a crushing", ur: "کوٹنا", ar: "دكة" }, pos: "N", posLabel: "N", grammar: { role: "cognate accusative" } },
      { arabic: "وَاحِدَةً", transliteration: "wāḥidatan", root: "و ح د", meaning: { en: "single", ur: "ایک ہی", ar: "واحدة" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ]
  },

  15: {
    ayahNumber: 15,
    text: "فَيَوْمَئِذٍ وَقَعَتِ الْوَاقِعَةُ",
    words: [
      { arabic: "فَيَوْمَئِذٍ", transliteration: "fa-yawmaʾidhin", root: "ي و م", meaning: { en: "Then on that Day", ur: "تو اس دن", ar: "فيومئذ" }, pos: "N", posLabel: "N", grammar: { role: "adverbial" } },
      { arabic: "وَقَعَتِ", transliteration: "waqaʿati", root: "و ق ع", meaning: { en: "will occur", ur: "واقع ہو جائے گی", ar: "وقعت" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "الْوَاقِعَةُ", transliteration: "al-wāqiʿatu", root: "و ق ع", meaning: { en: "the Occurrence", ur: "قیامت", ar: "الواقعة" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } }
    ]
  },

  16: {
    ayahNumber: 16,
    text: "وَانشَقَّتِ السَّمَاءُ فَهِيَ يَوْمَئِذٍ وَاهِيَةٌ",
    words: [
      { arabic: "وَانشَقَّتِ", transliteration: "wa-nshaqqati", root: "ش ق ق", meaning: { en: "And will split", ur: "اور پھٹ جائے گا", ar: "وانشقت" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "VII" } },
      { arabic: "السَّمَاءُ", transliteration: "al-samāʾu", root: "س م و", meaning: { en: "the heaven", ur: "آسمان", ar: "السماء" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "فَهِيَ", transliteration: "fa-hiya", root: null, meaning: { en: "for it", ur: "تو وہ", ar: "فهي" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "يَوْمَئِذٍ", transliteration: "yawmaʾidhin", root: "ي و م", meaning: { en: "that Day", ur: "اس دن", ar: "يومئذ" }, pos: "N", posLabel: "N", grammar: { role: "adverbial" } },
      { arabic: "وَاهِيَةٌ", transliteration: "wāhiyatun", root: "و ه ي", meaning: { en: "fragile", ur: "کمزور", ar: "واهية" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" } }
    ]
  },

  17: {
    ayahNumber: 17,
    text: "وَالْمَلَكُ عَلَىٰ أَرْجَائِهَا ۚ وَيَحْمِلُ عَرْشَ رَبِّكَ فَوْقَهُمْ يَوْمَئِذٍ ثَمَانِيَةٌ",
    words: [
      { arabic: "وَالْمَلَكُ", transliteration: "wa-al-malaku", root: "م ل ك", meaning: { en: "And the angels", ur: "اور فرشتے", ar: "والملك" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "on", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَرْجَائِهَا", transliteration: "arjāʾihā", root: "ر ج و", meaning: { en: "its edges", ur: "اس کے کناروں", ar: "أرجائها" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "وَيَحْمِلُ", transliteration: "wa-yaḥmilu", root: "ح م ل", meaning: { en: "and will bear", ur: "اور اٹھائیں گے", ar: "ويحمل" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "عَرْشَ", transliteration: "ʿarsha", root: "ع ر ش", meaning: { en: "the Throne", ur: "عرش", ar: "عرش" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "of your Lord", ur: "تیرے رب کا", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "فَوْقَهُمْ", transliteration: "fawqahum", root: "ف و ق", meaning: { en: "above them", ur: "ان کے اوپر", ar: "فوقهم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "يَوْمَئِذٍ", transliteration: "yawmaʾidhin", root: "ي و م", meaning: { en: "that Day", ur: "اس دن", ar: "يومئذ" }, pos: "N", posLabel: "N", grammar: { role: "adverbial" } },
      { arabic: "ثَمَانِيَةٌ", transliteration: "thamāniyatun", root: "ث م ن", meaning: { en: "eight", ur: "آٹھ", ar: "ثمانية" }, pos: "NUM", posLabel: "NUM", grammar: { role: "subject" } }
    ]
  },

  18: {
    ayahNumber: 18,
    text: "يَوْمَئِذٍ تُعْرَضُونَ لَا تَخْفَىٰ مِنكُمْ خَافِيَةٌ",
    words: [
      { arabic: "يَوْمَئِذٍ", transliteration: "yawmaʾidhin", root: "ي و م", meaning: { en: "That Day", ur: "اس دن", ar: "يومئذ" }, pos: "N", posLabel: "N", grammar: { role: "adverbial" } },
      { arabic: "تُعْرَضُونَ", transliteration: "tuʿraḍūna", root: "ع ر ض", meaning: { en: "you will be exhibited", ur: "تم پیش کیے جاؤ گے", ar: "تعرضون" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "imperfect" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تَخْفَىٰ", transliteration: "takhfā", root: "خ ف ي", meaning: { en: "hidden", ur: "چھپی رہے", ar: "تخفى" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "مِنكُمْ", transliteration: "minkum", root: null, meaning: { en: "of you", ur: "تم میں سے", ar: "منكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "خَافِيَةٌ", transliteration: "khāfiyatun", root: "خ ف ي", meaning: { en: "any secret", ur: "کوئی چھپی چیز", ar: "خافية" }, pos: "N", posLabel: "N", grammar: { role: "subject" } }
    ]
  },

  19: {
    ayahNumber: 19,
    text: "فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ فَيَقُولُ هَاؤُمُ اقْرَءُوا كِتَابِيَهْ",
    words: [
      { arabic: "فَأَمَّا", transliteration: "fa-ammā", root: null, meaning: { en: "Then as for", ur: "پس جو", ar: "فأما" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conditional" } },
      { arabic: "مَنْ", transliteration: "man", root: null, meaning: { en: "he who", ur: "جسے", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "أُوتِيَ", transliteration: "ūtiya", root: "أ ت ي", meaning: { en: "is given", ur: "دیا جائے", ar: "أوتي" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "كِتَابَهُ", transliteration: "kitābahu", root: "ك ت ب", meaning: { en: "his record", ur: "اس کا نامہ اعمال", ar: "كتابه" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "بِيَمِينِهِ", transliteration: "bi-yamīnihi", root: "ي م ن", meaning: { en: "in his right hand", ur: "اس کے دائیں ہاتھ میں", ar: "بيمينه" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "فَيَقُولُ", transliteration: "fa-yaqūlu", root: "ق و ل", meaning: { en: "he will say", ur: "تو وہ کہے گا", ar: "فيقول" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "هَاؤُمُ", transliteration: "hāʾumu", root: null, meaning: { en: "Here", ur: "لو", ar: "هاؤم" }, pos: "PART", posLabel: "PART", grammar: { role: "interjection" } },
      { arabic: "اقْرَءُوا", transliteration: "iqraʾū", root: "ق ر أ", meaning: { en: "read", ur: "پڑھو", ar: "اقرءوا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "كِتَابِيَهْ", transliteration: "kitābiyah", root: "ك ت ب", meaning: { en: "my record", ur: "میرا نامہ", ar: "كتابيه" }, pos: "N", posLabel: "N", grammar: { role: "object" } }
    ]
  },

  20: {
    ayahNumber: 20,
    text: "إِنِّي ظَنَنتُ أَنِّي مُلَاقٍ حِسَابِيَهْ",
    words: [
      { arabic: "إِنِّي", transliteration: "innī", root: null, meaning: { en: "Indeed I", ur: "بیشک میں", ar: "إني" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "ظَنَنتُ", transliteration: "ẓanantu", root: "ظ ن ن", meaning: { en: "was certain", ur: "یقین رکھتا تھا", ar: "ظننت" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "أَنِّي", transliteration: "annī", root: null, meaning: { en: "that I", ur: "کہ میں", ar: "أني" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "مُلَاقٍ", transliteration: "mulāqin", root: "ل ق ي", meaning: { en: "would meet", ur: "ملنے والا ہوں", ar: "ملاق" }, pos: "N", posLabel: "N", grammar: { role: "predicate" }, features: { form: "III participle" } },
      { arabic: "حِسَابِيَهْ", transliteration: "ḥisābiyah", root: "ح س ب", meaning: { en: "my account", ur: "اپنا حساب", ar: "حسابيه" }, pos: "N", posLabel: "N", grammar: { role: "object" } }
    ]
  },

  21: {
    ayahNumber: 21,
    text: "فَهُوَ فِي عِيشَةٍ رَّاضِيَةٍ",
    words: [
      { arabic: "فَهُوَ", transliteration: "fa-huwa", root: null, meaning: { en: "So he", ur: "پس وہ", ar: "فهو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "فِي", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عِيشَةٍ", transliteration: "ʿīshatin", root: "ع ي ش", meaning: { en: "a life", ur: "زندگی", ar: "عيشة" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "رَّاضِيَةٍ", transliteration: "rāḍiyatin", root: "ر ض ي", meaning: { en: "pleasant", ur: "پسندیدہ", ar: "راضية" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ]
  },

  22: {
    ayahNumber: 22,
    text: "فِي جَنَّةٍ عَالِيَةٍ",
    words: [
      { arabic: "فِي", transliteration: "fī", root: null, meaning: { en: "In", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "جَنَّةٍ", transliteration: "jannatin", root: "ج ن ن", meaning: { en: "a Garden", ur: "جنت", ar: "جنة" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "عَالِيَةٍ", transliteration: "ʿāliyatin", root: "ع ل و", meaning: { en: "elevated", ur: "بلند", ar: "عالية" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ]
  },

  23: {
    ayahNumber: 23,
    text: "قُطُوفُهَا دَانِيَةٌ",
    words: [
      { arabic: "قُطُوفُهَا", transliteration: "quṭūfuhā", root: "ق ط ف", meaning: { en: "Its fruits", ur: "اس کے پھل", ar: "قطوفها" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "دَانِيَةٌ", transliteration: "dāniyatun", root: "د ن و", meaning: { en: "near", ur: "قریب", ar: "دانية" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate" } }
    ]
  },

  24: {
    ayahNumber: 24,
    text: "كُلُوا وَاشْرَبُوا هَنِيئًا بِمَا أَسْلَفْتُمْ فِي الْأَيَّامِ الْخَالِيَةِ",
    words: [
      { arabic: "كُلُوا", transliteration: "kulū", root: "أ ك ل", meaning: { en: "Eat", ur: "کھاؤ", ar: "كلوا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "وَاشْرَبُوا", transliteration: "wa-shrabū", root: "ش ر ب", meaning: { en: "and drink", ur: "اور پیو", ar: "واشربوا" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "هَنِيئًا", transliteration: "hanīʾan", root: "ه ن أ", meaning: { en: "in satisfaction", ur: "خوش ہو کر", ar: "هنيئاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adverbial" } },
      { arabic: "بِمَا", transliteration: "bi-mā", root: null, meaning: { en: "for what", ur: "اس کے بدلے جو", ar: "بما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "أَسْلَفْتُمْ", transliteration: "aslaftum", root: "س ل ف", meaning: { en: "you put forth", ur: "تم نے آگے بھیجا", ar: "أسلفتم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "فِي", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْأَيَّامِ", transliteration: "al-ayyāmi", root: "ي و م", meaning: { en: "the days", ur: "دنوں", ar: "الأيام" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } },
      { arabic: "الْخَالِيَةِ", transliteration: "al-khāliyati", root: "خ ل و", meaning: { en: "past", ur: "گزرے ہوئے", ar: "الخالية" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", definite: true } }
    ]
  },

  25: {
    ayahNumber: 25,
    text: "وَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِشِمَالِهِ فَيَقُولُ يَا لَيْتَنِي لَمْ أُوتَ كِتَابِيَهْ",
    words: [
      { arabic: "وَأَمَّا", transliteration: "wa-ammā", root: null, meaning: { en: "But as for", ur: "اور جو", ar: "وأما" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conditional" } },
      { arabic: "مَنْ", transliteration: "man", root: null, meaning: { en: "he who", ur: "جسے", ar: "من" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "أُوتِيَ", transliteration: "ūtiya", root: "أ ت ي", meaning: { en: "is given", ur: "دیا جائے", ar: "أوتي" }, pos: "V", posLabel: "V", grammar: { role: "passive", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "كِتَابَهُ", transliteration: "kitābahu", root: "ك ت ب", meaning: { en: "his record", ur: "اس کا نامہ", ar: "كتابه" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "بِشِمَالِهِ", transliteration: "bi-shimālihi", root: "ش م ل", meaning: { en: "in his left hand", ur: "بائیں ہاتھ میں", ar: "بشماله" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "فَيَقُولُ", transliteration: "fa-yaqūlu", root: "ق و ل", meaning: { en: "he will say", ur: "تو وہ کہے گا", ar: "فيقول" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "يَا", transliteration: "yā", root: null, meaning: { en: "Oh", ur: "اے کاش", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "لَيْتَنِي", transliteration: "laytanī", root: null, meaning: { en: "I wish", ur: "کاش میں", ar: "ليتني" }, pos: "PART", posLabel: "PART", grammar: { role: "optative" } },
      { arabic: "لَمْ", transliteration: "lam", root: null, meaning: { en: "not", ur: "نہیں", ar: "لم" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "أُوتَ", transliteration: "ūta", root: "أ ت ي", meaning: { en: "had been given", ur: "دیا جاتا", ar: "أوت" }, pos: "V", posLabel: "V", grammar: { role: "passive", mood: "jussive" }, features: { form: "IV" } },
      { arabic: "كِتَابِيَهْ", transliteration: "kitābiyah", root: "ك ت ب", meaning: { en: "my record", ur: "میرا نامہ", ar: "كتابيه" }, pos: "N", posLabel: "N", grammar: { role: "object" } }
    ]
  },

  26: {
    ayahNumber: 26,
    text: "وَلَمْ أَدْرِ مَا حِسَابِيَهْ",
    words: [
      { arabic: "وَلَمْ", transliteration: "wa-lam", root: null, meaning: { en: "And not", ur: "اور نہ", ar: "ولم" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "أَدْرِ", transliteration: "adri", root: "د ر ي", meaning: { en: "I had known", ur: "جانتا", ar: "أدر" }, pos: "V", posLabel: "V", grammar: { role: "verb", mood: "jussive" } },
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "what", ur: "کیا ہے", ar: "ما" }, pos: "INTER", posLabel: "INTER", grammar: { role: "interrogative" } },
      { arabic: "حِسَابِيَهْ", transliteration: "ḥisābiyah", root: "ح س ب", meaning: { en: "my account", ur: "میرا حساب", ar: "حسابيه" }, pos: "N", posLabel: "N", grammar: { role: "subject" } }
    ]
  },

  27: {
    ayahNumber: 27,
    text: "يَا لَيْتَهَا كَانَتِ الْقَاضِيَةَ",
    words: [
      { arabic: "يَا", transliteration: "yā", root: null, meaning: { en: "Oh", ur: "اے کاش", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "لَيْتَهَا", transliteration: "laytahā", root: null, meaning: { en: "I wish it", ur: "کاش یہ", ar: "ليتها" }, pos: "PART", posLabel: "PART", grammar: { role: "optative" } },
      { arabic: "كَانَتِ", transliteration: "kānati", root: "ك و ن", meaning: { en: "had been", ur: "ہوتی", ar: "كانت" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "الْقَاضِيَةَ", transliteration: "al-qāḍiyata", root: "ق ض ي", meaning: { en: "the end", ur: "فیصلہ کن موت", ar: "القاضية" }, pos: "N", posLabel: "N", grammar: { role: "predicate", definite: true } }
    ]
  },

  28: {
    ayahNumber: 28,
    text: "مَا أَغْنَىٰ عَنِّي مَالِيَهْ",
    words: [
      { arabic: "مَا", transliteration: "mā", root: null, meaning: { en: "Not", ur: "نہیں", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "أَغْنَىٰ", transliteration: "aghnā", root: "غ ن ي", meaning: { en: "availed", ur: "کام آیا", ar: "أغنى" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "IV" } },
      { arabic: "عَنِّي", transliteration: "ʿannī", root: null, meaning: { en: "me", ur: "میرے", ar: "عني" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مَالِيَهْ", transliteration: "māliyah", root: "م و ل", meaning: { en: "my wealth", ur: "میرا مال", ar: "ماليه" }, pos: "N", posLabel: "N", grammar: { role: "subject" } }
    ]
  },

  29: {
    ayahNumber: 29,
    text: "هَلَكَ عَنِّي سُلْطَانِيَهْ",
    words: [
      { arabic: "هَلَكَ", transliteration: "halaka", root: "ه ل ك", meaning: { en: "Gone from me", ur: "ختم ہو گیا", ar: "هلك" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "عَنِّي", transliteration: "ʿannī", root: null, meaning: { en: "me", ur: "مجھ سے", ar: "عني" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "سُلْطَانِيَهْ", transliteration: "sulṭāniyah", root: "س ل ط", meaning: { en: "my authority", ur: "میرا اختیار", ar: "سلطانيه" }, pos: "N", posLabel: "N", grammar: { role: "subject" } }
    ]
  },

  30: {
    ayahNumber: 30,
    text: "خُذُوهُ فَغُلُّوهُ",
    words: [
      { arabic: "خُذُوهُ", transliteration: "khudhūhu", root: "أ خ ذ", meaning: { en: "Seize him", ur: "اسے پکڑو", ar: "خذوه" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } },
      { arabic: "فَغُلُّوهُ", transliteration: "fa-ghullūhu", root: "غ ل ل", meaning: { en: "and shackle him", ur: "پھر اسے طوق ڈالو", ar: "فغلوه" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } }
    ]
  },

  31: {
    ayahNumber: 31,
    text: "ثُمَّ الْجَحِيمَ صَلُّوهُ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", root: null, meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "sequential" } },
      { arabic: "الْجَحِيمَ", transliteration: "al-jaḥīma", root: "ج ح م", meaning: { en: "the Hellfire", ur: "جہنم", ar: "الجحيم" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } },
      { arabic: "صَلُّوهُ", transliteration: "ṣallūhu", root: "ص ل ي", meaning: { en: "burn him", ur: "اسے ڈالو", ar: "صلوه" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } }
    ]
  },

  32: {
    ayahNumber: 32,
    text: "ثُمَّ فِي سِلْسِلَةٍ ذَرْعُهَا سَبْعُونَ ذِرَاعًا فَاسْلُكُوهُ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", root: null, meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "sequential" } },
      { arabic: "فِي", transliteration: "fī", root: null, meaning: { en: "in", ur: "میں", ar: "في" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سِلْسِلَةٍ", transliteration: "silsilatin", root: "س ل س ل", meaning: { en: "a chain", ur: "زنجیر", ar: "سلسلة" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "ذَرْعُهَا", transliteration: "dharʿuhā", root: "ذ ر ع", meaning: { en: "its length", ur: "اس کی لمبائی", ar: "ذرعها" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "سَبْعُونَ", transliteration: "sabʿūna", root: "س ب ع", meaning: { en: "seventy", ur: "ستر", ar: "سبعون" }, pos: "NUM", posLabel: "NUM", grammar: { role: "predicate" } },
      { arabic: "ذِرَاعًا", transliteration: "dhirāʿan", root: "ذ ر ع", meaning: { en: "cubits", ur: "ہاتھ", ar: "ذراعاً" }, pos: "N", posLabel: "N", grammar: { role: "specification" } },
      { arabic: "فَاسْلُكُوهُ", transliteration: "fa-slukūhu", root: "س ل ك", meaning: { en: "then insert him", ur: "پھر داخل کرو", ar: "فاسلكوه" }, pos: "V", posLabel: "V", grammar: { role: "imperative" } }
    ]
  },

  33: {
    ayahNumber: 33,
    text: "إِنَّهُ كَانَ لَا يُؤْمِنُ بِاللَّهِ الْعَظِيمِ",
    words: [
      { arabic: "إِنَّهُ", transliteration: "innahu", root: null, meaning: { en: "Indeed he", ur: "بیشک وہ", ar: "إنه" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "كَانَ", transliteration: "kāna", root: "ك و ن", meaning: { en: "used", ur: "تھا", ar: "كان" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يُؤْمِنُ", transliteration: "yuʾminu", root: "أ م ن", meaning: { en: "to believe", ur: "ایمان لاتا", ar: "يؤمن" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "IV" } },
      { arabic: "بِاللَّهِ", transliteration: "bi-Allāhi", root: "أ ل ه", meaning: { en: "in Allah", ur: "اللہ پر", ar: "بالله" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "الْعَظِيمِ", transliteration: "al-ʿaẓīmi", root: "ع ظ م", meaning: { en: "the Magnificent", ur: "عظمت والے", ar: "العظيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", definite: true } }
    ]
  },

  34: {
    ayahNumber: 34,
    text: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ",
    words: [
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَحُضُّ", transliteration: "yaḥuḍḍu", root: "ح ض ض", meaning: { en: "encourage", ur: "اکساتا تھا", ar: "يحض" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, meaning: { en: "the", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "طَعَامِ", transliteration: "ṭaʿāmi", root: "ط ع م", meaning: { en: "feeding", ur: "کھلانے", ar: "طعام" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "الْمِسْكِينِ", transliteration: "al-miskīni", root: "س ك ن", meaning: { en: "the poor", ur: "مسکین کو", ar: "المسكين" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } }
    ]
  },

  35: {
    ayahNumber: 35,
    text: "فَلَيْسَ لَهُ الْيَوْمَ هَاهُنَا حَمِيمٌ",
    words: [
      { arabic: "فَلَيْسَ", transliteration: "fa-laysa", root: "ل ي س", meaning: { en: "So there is not", ur: "تو نہیں ہے", ar: "فليس" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَهُ", transliteration: "lahu", root: null, meaning: { en: "for him", ur: "اس کے لیے", ar: "له" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "الْيَوْمَ", transliteration: "al-yawma", root: "ي و م", meaning: { en: "today", ur: "آج", ar: "اليوم" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", definite: true } },
      { arabic: "هَاهُنَا", transliteration: "hāhunā", root: null, meaning: { en: "here", ur: "یہاں", ar: "هاهنا" }, pos: "ADV", posLabel: "ADV", grammar: { role: "adverb" } },
      { arabic: "حَمِيمٌ", transliteration: "ḥamīmun", root: "ح م م", meaning: { en: "a devoted friend", ur: "کوئی ہمدرد", ar: "حميم" }, pos: "N", posLabel: "N", grammar: { role: "subject" } }
    ]
  },

  36: {
    ayahNumber: 36,
    text: "وَلَا طَعَامٌ إِلَّا مِنْ غِسْلِينٍ",
    words: [
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "Nor", ur: "اور نہ", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "طَعَامٌ", transliteration: "ṭaʿāmun", root: "ط ع م", meaning: { en: "food", ur: "کھانا", ar: "طعام" }, pos: "N", posLabel: "N", grammar: { role: "subject" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { role: "exception" } },
      { arabic: "مِنْ", transliteration: "min", root: null, meaning: { en: "from", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "غِسْلِينٍ", transliteration: "ghislīnin", root: "غ س ل", meaning: { en: "foul pus", ur: "پیپ", ar: "غسلين" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } }
    ]
  },

  37: {
    ayahNumber: 37,
    text: "لَّا يَأْكُلُهُ إِلَّا الْخَاطِئُونَ",
    words: [
      { arabic: "لَّا", transliteration: "lā", root: null, meaning: { en: "Not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَأْكُلُهُ", transliteration: "yaʾkuluhu", root: "أ ك ل", meaning: { en: "will eat it", ur: "اسے کھائیں گے", ar: "يأكله" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "إِلَّا", transliteration: "illā", root: null, meaning: { en: "except", ur: "سوائے", ar: "إلا" }, pos: "EXC", posLabel: "EXC", grammar: { role: "exception" } },
      { arabic: "الْخَاطِئُونَ", transliteration: "al-khāṭiʾūna", root: "خ ط أ", meaning: { en: "the sinners", ur: "گناہگاروں کے", ar: "الخاطئون" }, pos: "N", posLabel: "N", grammar: { role: "subject", definite: true } }
    ]
  },

  38: {
    ayahNumber: 38,
    text: "فَلَا أُقْسِمُ بِمَا تُبْصِرُونَ",
    words: [
      { arabic: "فَلَا", transliteration: "fa-lā", root: null, meaning: { en: "So I swear", ur: "پس میں قسم کھاتا ہوں", ar: "فلا" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic oath" } },
      { arabic: "أُقْسِمُ", transliteration: "uqsimu", root: "ق س م", meaning: { en: "I swear", ur: "قسم کھاتا ہوں", ar: "أقسم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "IV" } },
      { arabic: "بِمَا", transliteration: "bi-mā", root: null, meaning: { en: "by what", ur: "اس چیز کی جو", ar: "بما" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "تُبْصِرُونَ", transliteration: "tubṣirūna", root: "ب ص ر", meaning: { en: "you see", ur: "تم دیکھتے ہو", ar: "تبصرون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "IV" } }
    ]
  },

  39: {
    ayahNumber: 39,
    text: "وَمَا لَا تُبْصِرُونَ",
    words: [
      { arabic: "وَمَا", transliteration: "wa-mā", root: null, meaning: { en: "And what", ur: "اور جو", ar: "وما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "لَا", transliteration: "lā", root: null, meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تُبْصِرُونَ", transliteration: "tubṣirūna", root: "ب ص ر", meaning: { en: "you see", ur: "تم دیکھتے ہو", ar: "تبصرون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "IV" } }
    ]
  },

  40: {
    ayahNumber: 40,
    text: "إِنَّهُ لَقَوْلُ رَسُولٍ كَرِيمٍ",
    words: [
      { arabic: "إِنَّهُ", transliteration: "innahu", root: null, meaning: { en: "Indeed it is", ur: "بیشک یہ", ar: "إنه" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "لَقَوْلُ", transliteration: "la-qawlu", root: "ق و ل", meaning: { en: "the word", ur: "کلام ہے", ar: "لقول" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } },
      { arabic: "رَسُولٍ", transliteration: "rasūlin", root: "ر س ل", meaning: { en: "of a noble Messenger", ur: "عزت والے رسول کا", ar: "رسول" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "كَرِيمٍ", transliteration: "karīmin", root: "ك ر م", meaning: { en: "noble", ur: "عزت والے", ar: "كريم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ]
  },

  41: {
    ayahNumber: 41,
    text: "وَمَا هُوَ بِقَوْلِ شَاعِرٍ ۚ قَلِيلًا مَّا تُؤْمِنُونَ",
    words: [
      { arabic: "وَمَا", transliteration: "wa-mā", root: null, meaning: { en: "And not", ur: "اور نہیں", ar: "وما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "هُوَ", transliteration: "huwa", root: null, meaning: { en: "it is", ur: "یہ", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "بِقَوْلِ", transliteration: "bi-qawli", root: "ق و ل", meaning: { en: "the word", ur: "کلام", ar: "بقول" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } },
      { arabic: "شَاعِرٍ", transliteration: "shāʿirin", root: "ش ع ر", meaning: { en: "of a poet", ur: "شاعر کا", ar: "شاعر" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "قَلِيلًا", transliteration: "qalīlan", root: "ق ل ل", meaning: { en: "little", ur: "کم", ar: "قليلاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adverbial" } },
      { arabic: "مَّا", transliteration: "mā", root: null, meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "تُؤْمِنُونَ", transliteration: "tuʾminūna", root: "أ م ن", meaning: { en: "you believe", ur: "تم ایمان لاتے ہو", ar: "تؤمنون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "IV" } }
    ]
  },

  42: {
    ayahNumber: 42,
    text: "وَلَا بِقَوْلِ كَاهِنٍ ۚ قَلِيلًا مَّا تَذَكَّرُونَ",
    words: [
      { arabic: "وَلَا", transliteration: "wa-lā", root: null, meaning: { en: "Nor", ur: "اور نہ", ar: "ولا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "بِقَوْلِ", transliteration: "bi-qawli", root: "ق و ل", meaning: { en: "the word", ur: "کلام", ar: "بقول" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } },
      { arabic: "كَاهِنٍ", transliteration: "kāhinin", root: "ك ه ن", meaning: { en: "of a soothsayer", ur: "کاہن کا", ar: "كاهن" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "قَلِيلًا", transliteration: "qalīlan", root: "ق ل ل", meaning: { en: "little", ur: "کم", ar: "قليلاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adverbial" } },
      { arabic: "مَّا", transliteration: "mā", root: null, meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "تَذَكَّرُونَ", transliteration: "tadhakkarūna", root: "ذ ك ر", meaning: { en: "you remember", ur: "تم نصیحت پکڑتے ہو", ar: "تذكرون" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" }, features: { form: "V" } }
    ]
  },

  43: {
    ayahNumber: 43,
    text: "تَنزِيلٌ مِّن رَّبِّ الْعَالَمِينَ",
    words: [
      { arabic: "تَنزِيلٌ", transliteration: "tanzīlun", root: "ن ز ل", meaning: { en: "A revelation", ur: "اتارا ہوا", ar: "تنزيل" }, pos: "N", posLabel: "N", grammar: { role: "predicate" }, features: { form: "II verbal noun" } },
      { arabic: "مِّن", transliteration: "min", root: null, meaning: { en: "from", ur: "کی طرف سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رَّبِّ", transliteration: "rabbi", root: "ر ب ب", meaning: { en: "the Lord", ur: "رب", ar: "رب" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "الْعَالَمِينَ", transliteration: "al-ʿālamīna", root: "ع ل م", meaning: { en: "of the worlds", ur: "جہانوں کے", ar: "العالمين" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } }
    ]
  },

  44: {
    ayahNumber: 44,
    text: "وَلَوْ تَقَوَّلَ عَلَيْنَا بَعْضَ الْأَقَاوِيلِ",
    words: [
      { arabic: "وَلَوْ", transliteration: "wa-law", root: null, meaning: { en: "And if", ur: "اور اگر", ar: "ولو" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "تَقَوَّلَ", transliteration: "taqawwala", root: "ق و ل", meaning: { en: "he had fabricated", ur: "گھڑ لیتا", ar: "تقول" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" }, features: { form: "V" } },
      { arabic: "عَلَيْنَا", transliteration: "ʿalaynā", root: null, meaning: { en: "against Us", ur: "ہم پر", ar: "علينا" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "بَعْضَ", transliteration: "baʿḍa", root: "ب ع ض", meaning: { en: "some", ur: "کوئی", ar: "بعض" }, pos: "N", posLabel: "N", grammar: { role: "object" } },
      { arabic: "الْأَقَاوِيلِ", transliteration: "al-aqāwīli", root: "ق و ل", meaning: { en: "sayings", ur: "بات", ar: "الأقاويل" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } }
    ]
  },

  45: {
    ayahNumber: 45,
    text: "لَأَخَذْنَا مِنْهُ بِالْيَمِينِ",
    words: [
      { arabic: "لَأَخَذْنَا", transliteration: "la-akhadhnā", root: "أ خ ذ", meaning: { en: "We would have seized", ur: "ہم پکڑ لیتے", ar: "لأخذنا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "مِنْهُ", transliteration: "minhu", root: null, meaning: { en: "him", ur: "اسے", ar: "منه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "بِالْيَمِينِ", transliteration: "bi-al-yamīni", root: "ي م ن", meaning: { en: "by the right hand", ur: "دائیں ہاتھ سے", ar: "باليمين" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase", definite: true } }
    ]
  },

  46: {
    ayahNumber: 46,
    text: "ثُمَّ لَقَطَعْنَا مِنْهُ الْوَتِينَ",
    words: [
      { arabic: "ثُمَّ", transliteration: "thumma", root: null, meaning: { en: "Then", ur: "پھر", ar: "ثم" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "sequential" } },
      { arabic: "لَقَطَعْنَا", transliteration: "la-qaṭaʿnā", root: "ق ط ع", meaning: { en: "We would have cut", ur: "ہم کاٹ دیتے", ar: "لقطعنا" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "perfect" } },
      { arabic: "مِنْهُ", transliteration: "minhu", root: null, meaning: { en: "from him", ur: "اس کی", ar: "منه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "الْوَتِينَ", transliteration: "al-watīna", root: "و ت ن", meaning: { en: "the aorta", ur: "شہ رگ", ar: "الوتين" }, pos: "N", posLabel: "N", grammar: { role: "object", definite: true } }
    ]
  },

  47: {
    ayahNumber: 47,
    text: "فَمَا مِنكُم مِّنْ أَحَدٍ عَنْهُ حَاجِزِينَ",
    words: [
      { arabic: "فَمَا", transliteration: "fa-mā", root: null, meaning: { en: "And not", ur: "تو نہیں ہے", ar: "فما" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "مِنكُم", transliteration: "minkum", root: null, meaning: { en: "of you", ur: "تم میں سے", ar: "منكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مِّنْ", transliteration: "min", root: null, meaning: { en: "any", ur: "کوئی", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَحَدٍ", transliteration: "aḥadin", root: "أ ح د", meaning: { en: "one", ur: "ایک بھی", ar: "أحد" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "عَنْهُ", transliteration: "ʿanhu", root: null, meaning: { en: "from him", ur: "اس سے", ar: "عنه" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "حَاجِزِينَ", transliteration: "ḥājizīna", root: "ح ج ز", meaning: { en: "could prevent", ur: "روکنے والے", ar: "حاجزين" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } }
    ]
  },

  48: {
    ayahNumber: 48,
    text: "وَإِنَّهُ لَتَذْكِرَةٌ لِّلْمُتَّقِينَ",
    words: [
      { arabic: "وَإِنَّهُ", transliteration: "wa-innahu", root: null, meaning: { en: "And indeed it is", ur: "اور بیشک یہ", ar: "وإنه" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "لَتَذْكِرَةٌ", transliteration: "la-tadhkiratun", root: "ذ ك ر", meaning: { en: "a reminder", ur: "نصیحت ہے", ar: "لتذكرة" }, pos: "N", posLabel: "N", grammar: { role: "predicate" }, features: { form: "II verbal noun" } },
      { arabic: "لِّلْمُتَّقِينَ", transliteration: "li-al-muttaqīna", root: "و ق ي", meaning: { en: "for the righteous", ur: "پرہیزگاروں کے لیے", ar: "للمتقين" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase", definite: true }, features: { form: "VIII participle" } }
    ]
  },

  49: {
    ayahNumber: 49,
    text: "وَإِنَّا لَنَعْلَمُ أَنَّ مِنكُم مُّكَذِّبِينَ",
    words: [
      { arabic: "وَإِنَّا", transliteration: "wa-innā", root: null, meaning: { en: "And indeed We", ur: "اور بیشک ہم", ar: "وإنا" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "لَنَعْلَمُ", transliteration: "la-naʿlamu", root: "ع ل م", meaning: { en: "know", ur: "جانتے ہیں", ar: "لنعلم" }, pos: "V", posLabel: "V", grammar: { role: "verb", tense: "imperfect" } },
      { arabic: "أَنَّ", transliteration: "anna", root: null, meaning: { en: "that", ur: "کہ", ar: "أن" }, pos: "PART", posLabel: "PART", grammar: { role: "conjunction" } },
      { arabic: "مِنكُم", transliteration: "minkum", root: null, meaning: { en: "among you", ur: "تم میں", ar: "منكم" }, pos: "PREP", posLabel: "PREP", grammar: { role: "prepositional phrase" } },
      { arabic: "مُّكَذِّبِينَ", transliteration: "mukadhdhibīna", root: "ك ذ ب", meaning: { en: "are deniers", ur: "جھٹلانے والے ہیں", ar: "مكذبين" }, pos: "N", posLabel: "N", grammar: { role: "predicate" }, features: { form: "II participle" } }
    ]
  },

  50: {
    ayahNumber: 50,
    text: "وَإِنَّهُ لَحَسْرَةٌ عَلَى الْكَافِرِينَ",
    words: [
      { arabic: "وَإِنَّهُ", transliteration: "wa-innahu", root: null, meaning: { en: "And indeed it is", ur: "اور بیشک یہ", ar: "وإنه" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "لَحَسْرَةٌ", transliteration: "la-ḥasratun", root: "ح س ر", meaning: { en: "a regret", ur: "حسرت ہے", ar: "لحسرة" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } },
      { arabic: "عَلَى", transliteration: "ʿalā", root: null, meaning: { en: "for", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْكَافِرِينَ", transliteration: "al-kāfirīna", root: "ك ف ر", meaning: { en: "the disbelievers", ur: "کافروں", ar: "الكافرين" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } }
    ]
  },

  51: {
    ayahNumber: 51,
    text: "وَإِنَّهُ لَحَقُّ الْيَقِينِ",
    words: [
      { arabic: "وَإِنَّهُ", transliteration: "wa-innahu", root: null, meaning: { en: "And indeed it is", ur: "اور بیشک یہ", ar: "وإنه" }, pos: "PART", posLabel: "PART", grammar: { role: "emphatic" } },
      { arabic: "لَحَقُّ", transliteration: "la-ḥaqqu", root: "ح ق ق", meaning: { en: "the truth", ur: "سچائی ہے", ar: "لحق" }, pos: "N", posLabel: "N", grammar: { role: "predicate" } },
      { arabic: "الْيَقِينِ", transliteration: "al-yaqīni", root: "ي ق ن", meaning: { en: "of certainty", ur: "یقین کی", ar: "اليقين" }, pos: "N", posLabel: "N", grammar: { role: "genitive", definite: true } }
    ]
  },

  52: {
    ayahNumber: 52,
    text: "فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيمِ",
    words: [
      { arabic: "فَسَبِّحْ", transliteration: "fa-sabbiḥ", root: "س ب ح", meaning: { en: "So exalt", ur: "پس پاکی بیان کر", ar: "فسبح" }, pos: "V", posLabel: "V", grammar: { role: "imperative" }, features: { form: "II" } },
      { arabic: "بِاسْمِ", transliteration: "bi-ismi", root: "س م و", meaning: { en: "the name", ur: "نام کی", ar: "باسم" }, pos: "N", posLabel: "N", grammar: { role: "prepositional phrase" } },
      { arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر ب ب", meaning: { en: "of your Lord", ur: "اپنے رب کے", ar: "ربك" }, pos: "N", posLabel: "N", grammar: { role: "genitive" } },
      { arabic: "الْعَظِيمِ", transliteration: "al-ʿaẓīmi", root: "ع ظ م", meaning: { en: "the Magnificent", ur: "عظمت والے", ar: "العظيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", definite: true } }
    ]
  }
};

export default TREEBANK_DATA;
