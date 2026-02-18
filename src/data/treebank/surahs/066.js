/**
 * Surah At-Tahrim (66) - The Prohibition
 * Quranic Arabic Treebank Data
 * 12 ayahs - Madani surah
 */

export const TREEBANK_DATA = {
  surahId: 66,
  surahName: "At-Tahrim",
  surahNameArabic: "التحريم",
  totalAyahs: 12,

  1: {
    ayahNumber: 1,
    text: "يَا أَيُّهَا النَّبِيُّ لِمَ تُحَرِّمُ مَا أَحَلَّ اللَّهُ لَكَ ۖ تَبْتَغِي مَرْضَاتَ أَزْوَاجِكَ ۚ وَاللَّهُ غَفُورٌ رَّحِيمٌ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "O", ur: "اے", ar: "أيها" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "النَّبِيُّ", transliteration: "an-nabiyy", root: "ن ب أ", meaning: { en: "Prophet", ur: "نبی", ar: "النبي" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true } },
      { arabic: "لِمَ", transliteration: "lima", meaning: { en: "why", ur: "کیوں", ar: "لم" }, pos: "INTERROG", posLabel: "INTERROG", grammar: { role: "interrogative" } },
      { arabic: "تُحَرِّمُ", transliteration: "tuḥarrimu", root: "ح ر م", meaning: { en: "do you prohibit", ur: "حرام کرتا ہے", ar: "تحرم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "indicative", form: "II" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "object" } },
      { arabic: "أَحَلَّ", transliteration: "aḥalla", root: "ح ل ل", meaning: { en: "has made lawful", ur: "حلال کیا ہے", ar: "أحل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "اللَّهُ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ نے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "لَكَ", transliteration: "laka", meaning: { en: "for you", ur: "تیرے لیے", ar: "لك" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "تَبْتَغِي", transliteration: "tabtaghī", root: "ب غ ي", meaning: { en: "seeking", ur: "چاہتے ہوئے", ar: "تبتغي" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "indicative", form: "VIII" } },
      { arabic: "مَرْضَاتَ", transliteration: "marḍāt", root: "ر ض ي", meaning: { en: "pleasure", ur: "خوشنودی", ar: "مرضاة" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "أَزْوَاجِكَ", transliteration: "azwājika", root: "ز و ج", meaning: { en: "of your wives", ur: "اپنی بیویوں کی", ar: "أزواجك" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-Allāh", meaning: { en: "and Allah", ur: "اور اللہ", ar: "والله" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "غَفُورٌ", transliteration: "ghafūr", root: "غ ف ر", meaning: { en: "is Forgiving", ur: "بخشنے والا ہے", ar: "غفور" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", case: "nominative" } },
      { arabic: "رَّحِيمٌ", transliteration: "raḥīm", root: "ر ح م", meaning: { en: "Merciful", ur: "مہربان", ar: "رحيم" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", case: "nominative" } }
    ]
  },

  2: {
    ayahNumber: 2,
    text: "قَدْ فَرَضَ اللَّهُ لَكُمْ تَحِلَّةَ أَيْمَانِكُمْ ۚ وَاللَّهُ مَوْلَاكُمْ ۖ وَهُوَ الْعَلِيمُ الْحَكِيمُ",
    words: [
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "Certainly", ur: "بے شک", ar: "قد" }, pos: "CERT", posLabel: "CERT", grammar: { role: "emphasis" } },
      { arabic: "فَرَضَ", transliteration: "faraḍa", root: "ف ر ض", meaning: { en: "has ordained", ur: "مقرر کیا ہے", ar: "فرض" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "اللَّهُ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ نے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہارے لیے", ar: "لكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "تَحِلَّةَ", transliteration: "taḥillata", root: "ح ل ل", meaning: { en: "the dissolution", ur: "حل کرنا", ar: "تحلة" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "أَيْمَانِكُمْ", transliteration: "aymānikum", root: "ي م ن", meaning: { en: "of your oaths", ur: "اپنی قسموں کا", ar: "أيمانكم" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "وَاللَّهُ", transliteration: "wa-Allāh", meaning: { en: "and Allah", ur: "اور اللہ", ar: "والله" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "مَوْلَاكُمْ", transliteration: "mawlākum", root: "و ل ي", meaning: { en: "is your Protector", ur: "تمہارا کارساز ہے", ar: "مولاكم" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" } },
      { arabic: "وَهُوَ", transliteration: "wa-huwa", meaning: { en: "and He", ur: "اور وہ", ar: "وهو" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { role: "conjunction" } },
      { arabic: "الْعَلِيمُ", transliteration: "al-ʿalīm", root: "ع ل م", meaning: { en: "the Knowing", ur: "جاننے والا ہے", ar: "العليم" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative", definite: true } },
      { arabic: "الْحَكِيمُ", transliteration: "al-ḥakīm", root: "ح ك م", meaning: { en: "the Wise", ur: "حکمت والا", ar: "الحكيم" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative", definite: true } }
    ]
  },

  3: {
    ayahNumber: 3,
    text: "وَإِذْ أَسَرَّ النَّبِيُّ إِلَىٰ بَعْضِ أَزْوَاجِهِ حَدِيثًا فَلَمَّا نَبَّأَتْ بِهِ وَأَظْهَرَهُ اللَّهُ عَلَيْهِ عَرَّفَ بَعْضَهُ وَأَعْرَضَ عَن بَعْضٍ ۖ فَلَمَّا نَبَّأَهَا بِهِ قَالَتْ مَنْ أَنبَأَكَ هَٰذَا ۖ قَالَ نَبَّأَنِيَ الْعَلِيمُ الْخَبِيرُ",
    words: [
      { arabic: "وَإِذْ", transliteration: "wa-idh", meaning: { en: "And when", ur: "اور جب", ar: "وإذ" }, pos: "CONJ+ADV", posLabel: "CONJ+ADV", grammar: { role: "temporal" } },
      { arabic: "أَسَرَّ", transliteration: "asarra", root: "س ر ر", meaning: { en: "confided", ur: "راز کی بات کہی", ar: "أسر" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "النَّبِيُّ", transliteration: "an-nabiyy", root: "ن ب أ", meaning: { en: "the Prophet", ur: "نبی نے", ar: "النبي" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعْضِ", transliteration: "baʿḍi", meaning: { en: "one", ur: "ایک", ar: "بعض" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "أَزْوَاجِهِ", transliteration: "azwājihi", root: "ز و ج", meaning: { en: "of his wives", ur: "بیویوں میں سے", ar: "أزواجه" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "حَدِيثًا", transliteration: "ḥadīthan", root: "ح د ث", meaning: { en: "a statement", ur: "ایک بات", ar: "حديثاً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "فَلَمَّا", transliteration: "fa-lammā", meaning: { en: "and when", ur: "پھر جب", ar: "فلما" }, pos: "CONJ+ADV", posLabel: "CONJ+ADV", grammar: { role: "temporal" } },
      { arabic: "نَبَّأَتْ", transliteration: "nabbaʾat", root: "ن ب أ", meaning: { en: "she informed", ur: "اس نے بتایا", ar: "نبأت" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", tense: "perfect", form: "II" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "about it", ur: "اس کے بارے", ar: "به" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "وَأَظْهَرَهُ", transliteration: "wa-aẓharahu", root: "ظ ه ر", meaning: { en: "and Allah revealed it", ur: "اور ظاہر کر دیا اللہ نے", ar: "وأظهره" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "اللَّهُ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ نے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "to him", ur: "اسے", ar: "عليه" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "عَرَّفَ", transliteration: "ʿarrafa", root: "ع ر ف", meaning: { en: "he mentioned", ur: "بتایا", ar: "عرف" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "II" } },
      { arabic: "بَعْضَهُ", transliteration: "baʿḍahu", meaning: { en: "part of it", ur: "کچھ", ar: "بعضه" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "وَأَعْرَضَ", transliteration: "wa-aʿraḍa", root: "ع ر ض", meaning: { en: "and overlooked", ur: "اور ٹال گیا", ar: "وأعرض" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے", ar: "عن" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعْضٍ", transliteration: "baʿḍ", meaning: { en: "part", ur: "کچھ", ar: "بعض" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "فَلَمَّا", transliteration: "fa-lammā", meaning: { en: "then when", ur: "پھر جب", ar: "فلما" }, pos: "CONJ+ADV", posLabel: "CONJ+ADV", grammar: { role: "temporal" } },
      { arabic: "نَبَّأَهَا", transliteration: "nabbaʾahā", root: "ن ب أ", meaning: { en: "he informed her", ur: "اس نے بتایا اسے", ar: "نبأها" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "II" } },
      { arabic: "بِهِ", transliteration: "bihi", meaning: { en: "about it", ur: "اس کے بارے", ar: "به" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "قَالَتْ", transliteration: "qālat", root: "ق و ل", meaning: { en: "she said", ur: "اس نے کہا", ar: "قالت" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "مَنْ", transliteration: "man", meaning: { en: "who", ur: "کس نے", ar: "من" }, pos: "INTERROG", posLabel: "INTERROG", grammar: { role: "interrogative" } },
      { arabic: "أَنبَأَكَ", transliteration: "anbaʾaka", root: "ن ب أ", meaning: { en: "informed you", ur: "تجھے بتایا", ar: "أنبأك" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "هَٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "یہ", ar: "هذا" }, pos: "DEM", posLabel: "DEM", grammar: { role: "object" } },
      { arabic: "قَالَ", transliteration: "qāla", root: "ق و ل", meaning: { en: "He said", ur: "اس نے کہا", ar: "قال" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "نَبَّأَنِيَ", transliteration: "nabbaʾaniya", root: "ن ب أ", meaning: { en: "informed me", ur: "مجھے بتایا", ar: "نبأني" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "II" } },
      { arabic: "الْعَلِيمُ", transliteration: "al-ʿalīm", root: "ع ل م", meaning: { en: "the Knowing", ur: "جاننے والے نے", ar: "العليم" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true } },
      { arabic: "الْخَبِيرُ", transliteration: "al-khabīr", root: "خ ب ر", meaning: { en: "the Aware", ur: "باخبر نے", ar: "الخبير" }, pos: "N", posLabel: "N", grammar: { role: "apposition", case: "nominative", definite: true } }
    ]
  },

  4: {
    ayahNumber: 4,
    text: "إِن تَتُوبَا إِلَى اللَّهِ فَقَدْ صَغَتْ قُلُوبُكُمَا ۖ وَإِن تَظَاهَرَا عَلَيْهِ فَإِنَّ اللَّهَ هُوَ مَوْلَاهُ وَجِبْرِيلُ وَصَالِحُ الْمُؤْمِنِينَ ۖ وَالْمَلَائِكَةُ بَعْدَ ذَٰلِكَ ظَهِيرٌ",
    words: [
      { arabic: "إِن", transliteration: "in", meaning: { en: "If", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "تَتُوبَا", transliteration: "tatūbā", root: "ت و ب", meaning: { en: "you two repent", ur: "تم دونوں توبہ کرو", ar: "تتوبا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "f", number: "dual", mood: "jussive", form: "I" } },
      { arabic: "إِلَى", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف", ar: "إلى" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "اللَّهِ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "فَقَدْ", transliteration: "fa-qad", meaning: { en: "then certainly", ur: "تو یقیناً", ar: "فقد" }, pos: "CONJ+CERT", posLabel: "CONJ+CERT", grammar: { role: "emphasis" } },
      { arabic: "صَغَتْ", transliteration: "ṣaghat", root: "ص غ و", meaning: { en: "have inclined", ur: "جھک گئے", ar: "صغت" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "قُلُوبُكُمَا", transliteration: "qulūbukumā", root: "ق ل ب", meaning: { en: "your hearts", ur: "تمہارے دل", ar: "قلوبكما" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", number: "dual" } },
      { arabic: "وَإِن", transliteration: "wa-in", meaning: { en: "and if", ur: "اور اگر", ar: "وإن" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { role: "conditional" } },
      { arabic: "تَظَاهَرَا", transliteration: "taẓāharā", root: "ظ ه ر", meaning: { en: "you cooperate", ur: "تم مل جاؤ", ar: "تظاهرا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "f", number: "dual", mood: "jussive", form: "VI" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "against him", ur: "اس کے خلاف", ar: "عليه" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "فَإِنَّ", transliteration: "fa-inna", meaning: { en: "then indeed", ur: "تو بے شک", ar: "فإن" }, pos: "CONJ+EMPH", posLabel: "CONJ+EMPH", grammar: { role: "emphasis" } },
      { arabic: "اللَّهَ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject_inna", case: "accusative" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہ", ar: "هو" }, pos: "PRON", posLabel: "PRON", grammar: { person: 3, gender: "m" } },
      { arabic: "مَوْلَاهُ", transliteration: "mawlāhu", root: "و ل ي", meaning: { en: "is his Protector", ur: "اس کا کارساز ہے", ar: "مولاه" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" } },
      { arabic: "وَجِبْرِيلُ", transliteration: "wa-Jibrīl", meaning: { en: "and Gabriel", ur: "اور جبرائیل", ar: "وجبريل" }, pos: "N", posLabel: "N", grammar: { role: "conjunction", case: "nominative" } },
      { arabic: "وَصَالِحُ", transliteration: "wa-ṣāliḥu", root: "ص ل ح", meaning: { en: "and righteous", ur: "اور نیک", ar: "وصالح" }, pos: "N", posLabel: "N", grammar: { role: "conjunction", case: "nominative" }, features: { participle: "active" } },
      { arabic: "الْمُؤْمِنِينَ", transliteration: "al-muʾminīn", root: "أ م ن", meaning: { en: "of believers", ur: "مومنین", ar: "المؤمنين" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive", definite: true }, features: { participle: "active", form: "IV" } },
      { arabic: "وَالْمَلَائِكَةُ", transliteration: "wal-malāʾikah", root: "م ل ك", meaning: { en: "and the angels", ur: "اور فرشتے", ar: "والملائكة" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true } },
      { arabic: "بَعْدَ", transliteration: "baʿda", meaning: { en: "after", ur: "اس کے بعد", ar: "بعد" }, pos: "ADV", posLabel: "ADV", grammar: { role: "adverbial", case: "accusative" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "اس کے", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "ظَهِيرٌ", transliteration: "ẓahīr", root: "ظ ه ر", meaning: { en: "are supporters", ur: "مددگار ہیں", ar: "ظهير" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" } }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "عَسَىٰ رَبُّهُ إِن طَلَّقَكُنَّ أَن يُبْدِلَهُ أَزْوَاجًا خَيْرًا مِّنكُنَّ مُسْلِمَاتٍ مُّؤْمِنَاتٍ قَانِتَاتٍ تَائِبَاتٍ عَابِدَاتٍ سَائِحَاتٍ ثَيِّبَاتٍ وَأَبْكَارًا",
    words: [
      { arabic: "عَسَىٰ", transliteration: "ʿasā", meaning: { en: "Perhaps", ur: "شاید", ar: "عسى" }, pos: "V", posLabel: "V", grammar: { role: "hope" } },
      { arabic: "رَبُّهُ", transliteration: "rabbuhu", root: "ر ب ب", meaning: { en: "his Lord", ur: "اس کا رب", ar: "ربه" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر", ar: "إن" }, pos: "COND", posLabel: "COND", grammar: { role: "conditional" } },
      { arabic: "طَلَّقَكُنَّ", transliteration: "ṭallaqakunna", root: "ط ل ق", meaning: { en: "he divorces you", ur: "وہ طلاق دے تمہیں", ar: "طلقكن" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "II" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "to", ur: "کہ", ar: "أن" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "يُبْدِلَهُ", transliteration: "yubdilahu", root: "ب د ل", meaning: { en: "substitute for him", ur: "اسے بدلے میں دے", ar: "يبدله" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "subjunctive", form: "IV" } },
      { arabic: "أَزْوَاجًا", transliteration: "azwājan", root: "ز و ج", meaning: { en: "wives", ur: "بیویاں", ar: "أزواجاً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "خَيْرًا", transliteration: "khayran", root: "خ ي ر", meaning: { en: "better", ur: "بہتر", ar: "خيراً" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "accusative" } },
      { arabic: "مِّنكُنَّ", transliteration: "minkunna", meaning: { en: "than you", ur: "تم سے", ar: "منكن" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "comparison" } },
      { arabic: "مُسْلِمَاتٍ", transliteration: "muslimāt", root: "س ل م", meaning: { en: "Muslim women", ur: "مسلمان", ar: "مسلمات" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "genitive" }, features: { participle: "active", form: "IV" } },
      { arabic: "مُّؤْمِنَاتٍ", transliteration: "muʾmināt", root: "أ م ن", meaning: { en: "believing", ur: "ایمان والیاں", ar: "مؤمنات" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "genitive" }, features: { participle: "active", form: "IV" } },
      { arabic: "قَانِتَاتٍ", transliteration: "qānitāt", root: "ق ن ت", meaning: { en: "devoutly obedient", ur: "فرمانبردار", ar: "قانتات" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "genitive" }, features: { participle: "active" } },
      { arabic: "تَائِبَاتٍ", transliteration: "tāʾibāt", root: "ت و ب", meaning: { en: "repentant", ur: "توبہ کرنے والیاں", ar: "تائبات" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "genitive" }, features: { participle: "active" } },
      { arabic: "عَابِدَاتٍ", transliteration: "ʿābidāt", root: "ع ب د", meaning: { en: "worshipping", ur: "عبادت گزار", ar: "عابدات" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "genitive" }, features: { participle: "active" } },
      { arabic: "سَائِحَاتٍ", transliteration: "sāʾiḥāt", root: "س ي ح", meaning: { en: "fasting", ur: "روزہ دار", ar: "سائحات" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "genitive" }, features: { participle: "active" } },
      { arabic: "ثَيِّبَاتٍ", transliteration: "thayyibāt", root: "ث ي ب", meaning: { en: "previously married", ur: "بیوہ", ar: "ثيبات" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "genitive" } },
      { arabic: "وَأَبْكَارًا", transliteration: "wa-abkāran", root: "ب ك ر", meaning: { en: "and virgins", ur: "اور کنواریاں", ar: "وأبكاراً" }, pos: "N", posLabel: "N", grammar: { role: "conjunction", case: "accusative" } }
    ]
  },

  6: {
    ayahNumber: 6,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا وَقُودُهَا النَّاسُ وَالْحِجَارَةُ عَلَيْهَا مَلَائِكَةٌ غِلَاظٌ شِدَادٌ لَّا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ وَيَفْعَلُونَ مَا يُؤْمَرُونَ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "O", ur: "اے", ar: "أيها" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "you who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "subject" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", root: "أ م ن", meaning: { en: "have believed", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "IV" } },
      { arabic: "قُوا", transliteration: "qū", root: "و ق ي", meaning: { en: "protect", ur: "بچاؤ", ar: "قوا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "I" } },
      { arabic: "أَنفُسَكُمْ", transliteration: "anfusakum", root: "ن ف س", meaning: { en: "yourselves", ur: "اپنے آپ کو", ar: "أنفسكم" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "وَأَهْلِيكُمْ", transliteration: "wa-ahlīkum", root: "أ ه ل", meaning: { en: "and your families", ur: "اور اپنے گھر والوں کو", ar: "وأهليكم" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "نَارًا", transliteration: "nāran", root: "ن و ر", meaning: { en: "from a Fire", ur: "آگ سے", ar: "ناراً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "وَقُودُهَا", transliteration: "waqūduhā", root: "و ق د", meaning: { en: "whose fuel is", ur: "جس کا ایندھن ہے", ar: "وقودها" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "النَّاسُ", transliteration: "an-nās", meaning: { en: "people", ur: "انسان", ar: "الناس" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative", definite: true } },
      { arabic: "وَالْحِجَارَةُ", transliteration: "wal-ḥijārah", root: "ح ج ر", meaning: { en: "and stones", ur: "اور پتھر", ar: "والحجارة" }, pos: "N", posLabel: "N", grammar: { role: "conjunction", case: "nominative", definite: true } },
      { arabic: "عَلَيْهَا", transliteration: "ʿalayhā", meaning: { en: "over it", ur: "اس پر", ar: "عليها" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "مَلَائِكَةٌ", transliteration: "malāʾikah", root: "م ل ك", meaning: { en: "are angels", ur: "فرشتے ہیں", ar: "ملائكة" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "غِلَاظٌ", transliteration: "ghilāẓ", root: "غ ل ظ", meaning: { en: "harsh", ur: "سخت", ar: "غلاظ" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "nominative" } },
      { arabic: "شِدَادٌ", transliteration: "shidād", root: "ش د د", meaning: { en: "severe", ur: "سخت", ar: "شداد" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "nominative" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "not", ur: "نہیں", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "يَعْصُونَ", transliteration: "yaʿṣūn", root: "ع ص ي", meaning: { en: "they disobey", ur: "نافرمانی کرتے", ar: "يعصون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "I" } },
      { arabic: "اللَّهَ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ کی", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "in what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "object" } },
      { arabic: "أَمَرَهُمْ", transliteration: "amarahum", root: "أ م ر", meaning: { en: "He commands them", ur: "حکم دیتا ہے انہیں", ar: "أمرهم" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "وَيَفْعَلُونَ", transliteration: "wa-yafʿalūn", root: "ف ع ل", meaning: { en: "and they do", ur: "اور کرتے ہیں", ar: "ويفعلون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "I" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "object" } },
      { arabic: "يُؤْمَرُونَ", transliteration: "yuʾmarūn", root: "أ م ر", meaning: { en: "they are commanded", ur: "انہیں حکم دیا جاتا ہے", ar: "يؤمرون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", voice: "passive", form: "I" } }
    ]
  },

  7: {
    ayahNumber: 7,
    text: "يَا أَيُّهَا الَّذِينَ كَفَرُوا لَا تَعْتَذِرُوا الْيَوْمَ ۖ إِنَّمَا تُجْزَوْنَ مَا كُنتُمْ تَعْمَلُونَ",
    words: [
      { arabic: "يَا", transliteration: "yā", meaning: { en: "O", ur: "اے", ar: "يا" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "أَيُّهَا", transliteration: "ayyuhā", meaning: { en: "O", ur: "اے", ar: "أيها" }, pos: "VOC", posLabel: "VOC", grammar: { role: "vocative" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "you who", ur: "جو لوگ", ar: "الذين" }, pos: "REL", posLabel: "REL", grammar: { role: "subject" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", root: "ك ف ر", meaning: { en: "disbelieved", ur: "کافر ہوئے", ar: "كفروا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "do not", ur: "مت", ar: "لا" }, pos: "NEG", posLabel: "NEG", grammar: { role: "prohibition" } },
      { arabic: "تَعْتَذِرُوا", transliteration: "taʿtadhirū", root: "ع ذ ر", meaning: { en: "make excuses", ur: "عذر پیش کرو", ar: "تعتذروا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "jussive", form: "VIII" } },
      { arabic: "الْيَوْمَ", transliteration: "al-yawm", root: "ي و م", meaning: { en: "today", ur: "آج", ar: "اليوم" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", case: "accusative", definite: true } },
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "you are only", ur: "بس", ar: "إنما" }, pos: "RESTRICT", posLabel: "RESTRICT", grammar: { role: "restriction" } },
      { arabic: "تُجْزَوْنَ", transliteration: "tujzawna", root: "ج ز ي", meaning: { en: "being recompensed", ur: "بدلہ دیا جائے گا تمہیں", ar: "تجزون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", voice: "passive", form: "I" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "for what", ur: "جو", ar: "ما" }, pos: "REL", posLabel: "REL", grammar: { role: "object" } },
      { arabic: "كُنتُمْ", transliteration: "kuntum", root: "ك و ن", meaning: { en: "you used to", ur: "تم تھے", ar: "كنتم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", tense: "perfect" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūn", root: "ع م ل", meaning: { en: "do", ur: "کرتے", ar: "تعملون" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "indicative", form: "I" } }
    ]
  },

  8: {
    ayahNumber: 8,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَّصُوحًا عَسَىٰ رَبُّكُمْ أَن يُكَفِّرَ عَنكُمْ سَيِّئَاتِكُمْ وَيُدْخِلَكُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ يَوْمَ لَا يُخْزِي اللَّهُ النَّبِيَّ وَالَّذِينَ آمَنُوا مَعَهُ ۖ نُورُهُمْ يَسْعَىٰ بَيْنَ أَيْدِيهِمْ وَبِأَيْمَانِهِمْ يَقُولُونَ رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا ۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    words: [
      { arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا", transliteration: "yā ayyuhā alladhīna āmanū", meaning: { en: "O you who believe", ur: "اے ایمان والو", ar: "يا أيها الذين آمنوا" }, pos: "VOC+REL+V", posLabel: "VOC+REL+V", grammar: { role: "vocative" } },
      { arabic: "تُوبُوا", transliteration: "tūbū", root: "ت و ب", meaning: { en: "repent", ur: "توبہ کرو", ar: "توبوا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "I" } },
      { arabic: "إِلَى اللَّهِ", transliteration: "ilā Allāh", meaning: { en: "to Allah", ur: "اللہ کی طرف", ar: "إلى الله" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "preposition" } },
      { arabic: "تَوْبَةً", transliteration: "tawbatan", root: "ت و ب", meaning: { en: "a repentance", ur: "توبہ", ar: "توبة" }, pos: "N", posLabel: "N", grammar: { role: "cognate_accusative", case: "accusative" } },
      { arabic: "نَّصُوحًا", transliteration: "naṣūḥan", root: "ن ص ح", meaning: { en: "sincere", ur: "سچی", ar: "نصوحاً" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective", case: "accusative" } },
      { arabic: "عَسَىٰ", transliteration: "ʿasā", meaning: { en: "perhaps", ur: "شاید", ar: "عسى" }, pos: "V", posLabel: "V", grammar: { role: "hope" } },
      { arabic: "رَبُّكُمْ", transliteration: "rabbukum", root: "ر ب ب", meaning: { en: "your Lord", ur: "تمہارا رب", ar: "ربكم" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "أَن يُكَفِّرَ", transliteration: "an yukaffira", root: "ك ف ر", meaning: { en: "will remove", ur: "مٹا دے", ar: "أن يكفر" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "subjunctive", form: "II" } },
      { arabic: "عَنكُمْ", transliteration: "ʿankum", meaning: { en: "from you", ur: "تم سے", ar: "عنكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "سَيِّئَاتِكُمْ", transliteration: "sayyiʾātikum", root: "س و أ", meaning: { en: "your misdeeds", ur: "تمہاری برائیاں", ar: "سيئاتكم" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "وَيُدْخِلَكُمْ", transliteration: "wa-yudkhilakum", root: "د خ ل", meaning: { en: "and admit you", ur: "اور داخل کرے تمہیں", ar: "ويدخلكم" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "subjunctive", form: "IV" } },
      { arabic: "جَنَّاتٍ", transliteration: "jannāt", root: "ج ن ن", meaning: { en: "gardens", ur: "جنتوں میں", ar: "جنات" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ", transliteration: "tajrī min taḥtihā al-anhār", meaning: { en: "rivers flow beneath", ur: "جن کے نیچے نہریں بہتی ہیں", ar: "تجري من تحتها الأنهار" }, pos: "V+PREP+N", posLabel: "V+PREP+N", grammar: { role: "description" } },
      { arabic: "يَوْمَ", transliteration: "yawma", root: "ي و م", meaning: { en: "on the Day", ur: "جس دن", ar: "يوم" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", case: "accusative" } },
      { arabic: "لَا يُخْزِي اللَّهُ النَّبِيَّ", transliteration: "lā yukhzī Allāh an-nabiyy", meaning: { en: "Allah will not disgrace the Prophet", ur: "اللہ رسوا نہیں کرے گا نبی کو", ar: "لا يخزي الله النبي" }, pos: "V+N", posLabel: "V+N", grammar: { role: "clause" } },
      { arabic: "وَالَّذِينَ آمَنُوا مَعَهُ", transliteration: "walladhīna āmanū maʿahu", meaning: { en: "and those who believed with him", ur: "اور ان کو جو ایمان لائے اس کے ساتھ", ar: "والذين آمنوا معه" }, pos: "REL+V", posLabel: "REL+V", grammar: { role: "conjunction" } },
      { arabic: "نُورُهُمْ", transliteration: "nūruhum", root: "ن و ر", meaning: { en: "their light", ur: "ان کا نور", ar: "نورهم" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "يَسْعَىٰ", transliteration: "yasʿā", root: "س ع ي", meaning: { en: "will proceed", ur: "دوڑے گا", ar: "يسعى" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "بَيْنَ أَيْدِيهِمْ", transliteration: "bayna aydīhim", meaning: { en: "before them", ur: "ان کے آگے", ar: "بين أيديهم" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "preposition" } },
      { arabic: "وَبِأَيْمَانِهِمْ", transliteration: "wa-bi-aymānihim", root: "ي م ن", meaning: { en: "and on their right", ur: "اور ان کے دائیں", ar: "وبأيمانهم" }, pos: "N", posLabel: "N", grammar: { role: "conjunction", case: "genitive" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūn", root: "ق و ل", meaning: { en: "they say", ur: "کہیں گے", ar: "يقولون" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", mood: "indicative", form: "I" } },
      { arabic: "رَبَّنَا", transliteration: "rabbanā", root: "ر ب ب", meaning: { en: "Our Lord", ur: "اے ہمارے رب", ar: "ربنا" }, pos: "N", posLabel: "N", grammar: { role: "vocative", case: "accusative" } },
      { arabic: "أَتْمِمْ", transliteration: "atmim", root: "ت م م", meaning: { en: "perfect", ur: "پورا کر دے", ar: "أتمم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "IV" } },
      { arabic: "لَنَا", transliteration: "lanā", meaning: { en: "for us", ur: "ہمارے لیے", ar: "لنا" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "نُورَنَا", transliteration: "nūranā", root: "ن و ر", meaning: { en: "our light", ur: "ہمارا نور", ar: "نورنا" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "وَاغْفِرْ", transliteration: "wa-ghfir", root: "غ ف ر", meaning: { en: "and forgive", ur: "اور معاف کر دے", ar: "واغفر" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "لَنَا", transliteration: "lanā", meaning: { en: "us", ur: "ہمیں", ar: "لنا" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "إِنَّكَ", transliteration: "innaka", meaning: { en: "indeed You", ur: "بے شک تو", ar: "إنك" }, pos: "EMPH+PRON", posLabel: "EMPH+PRON", grammar: { role: "emphasis" } },
      { arabic: "عَلَىٰ كُلِّ شَيْءٍ", transliteration: "ʿalā kulli shayʾ", meaning: { en: "over all things", ur: "ہر چیز پر", ar: "على كل شيء" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "preposition" } },
      { arabic: "قَدِيرٌ", transliteration: "qadīr", root: "ق د ر", meaning: { en: "Able", ur: "قادر ہے", ar: "قدير" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", case: "nominative" } }
    ]
  },

  9: {
    ayahNumber: 9,
    text: "يَا أَيُّهَا النَّبِيُّ جَاهِدِ الْكُفَّارَ وَالْمُنَافِقِينَ وَاغْلُظْ عَلَيْهِمْ ۚ وَمَأْوَاهُمْ جَهَنَّمُ ۖ وَبِئْسَ الْمَصِيرُ",
    words: [
      { arabic: "يَا أَيُّهَا النَّبِيُّ", transliteration: "yā ayyuhā an-nabiyy", meaning: { en: "O Prophet", ur: "اے نبی", ar: "يا أيها النبي" }, pos: "VOC+N", posLabel: "VOC+N", grammar: { role: "vocative" } },
      { arabic: "جَاهِدِ", transliteration: "jāhid", root: "ج ه د", meaning: { en: "strive against", ur: "جہاد کرو", ar: "جاهد" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "III" } },
      { arabic: "الْكُفَّارَ", transliteration: "al-kuffār", root: "ك ف ر", meaning: { en: "the disbelievers", ur: "کافروں سے", ar: "الكفار" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "وَالْمُنَافِقِينَ", transliteration: "wal-munāfiqīn", root: "ن ف ق", meaning: { en: "and hypocrites", ur: "اور منافقوں سے", ar: "والمنافقين" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true }, features: { participle: "active", form: "III" } },
      { arabic: "وَاغْلُظْ", transliteration: "wa-ghluẓ", root: "غ ل ظ", meaning: { en: "and be harsh", ur: "اور سختی کرو", ar: "واغلظ" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "with them", ur: "ان پر", ar: "عليهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "وَمَأْوَاهُمْ", transliteration: "wa-maʾwāhum", root: "أ و ي", meaning: { en: "and their refuge", ur: "اور ان کا ٹھکانا", ar: "ومأواهم" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "جَهَنَّمُ", transliteration: "jahannam", meaning: { en: "is Hell", ur: "جہنم ہے", ar: "جهنم" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" } },
      { arabic: "وَبِئْسَ", transliteration: "wa-biʾsa", root: "ب أ س", meaning: { en: "and wretched", ur: "اور برا ہے", ar: "وبئس" }, pos: "V", posLabel: "V", grammar: { role: "exclamation" } },
      { arabic: "الْمَصِيرُ", transliteration: "al-maṣīr", root: "ص ي ر", meaning: { en: "is the destination", ur: "ٹھکانا", ar: "المصير" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true } }
    ]
  },

  10: {
    ayahNumber: 10,
    text: "ضَرَبَ اللَّهُ مَثَلًا لِّلَّذِينَ كَفَرُوا امْرَأَتَ نُوحٍ وَامْرَأَتَ لُوطٍ ۖ كَانَتَا تَحْتَ عَبْدَيْنِ مِنْ عِبَادِنَا صَالِحَيْنِ فَخَانَتَاهُمَا فَلَمْ يُغْنِيَا عَنْهُمَا مِنَ اللَّهِ شَيْئًا وَقِيلَ ادْخُلَا النَّارَ مَعَ الدَّاخِلِينَ",
    words: [
      { arabic: "ضَرَبَ", transliteration: "ḍaraba", root: "ض ر ب", meaning: { en: "presents", ur: "بیان کرتا ہے", ar: "ضرب" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "اللَّهُ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "مَثَلًا", transliteration: "mathalan", root: "م ث ل", meaning: { en: "an example", ur: "مثال", ar: "مثلاً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "لِّلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "of those who", ur: "ان کی جو", ar: "للذين" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "preposition" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", root: "ك ف ر", meaning: { en: "disbelieved", ur: "کافر ہوئے", ar: "كفروا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "امْرَأَتَ", transliteration: "imraʾat", root: "م ر أ", meaning: { en: "wife", ur: "بیوی", ar: "امرأة" }, pos: "N", posLabel: "N", grammar: { role: "apposition", case: "accusative" } },
      { arabic: "نُوحٍ", transliteration: "Nūḥ", meaning: { en: "of Noah", ur: "نوح کی", ar: "نوح" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "وَامْرَأَتَ", transliteration: "wa-mraʾat", root: "م ر أ", meaning: { en: "and wife", ur: "اور بیوی", ar: "وامرأة" }, pos: "N", posLabel: "N", grammar: { role: "conjunction", case: "accusative" } },
      { arabic: "لُوطٍ", transliteration: "Lūṭ", meaning: { en: "of Lot", ur: "لوط کی", ar: "لوط" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "كَانَتَا", transliteration: "kānatā", root: "ك و ن", meaning: { en: "they were", ur: "وہ دونوں تھیں", ar: "كانتا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "dual", tense: "perfect" } },
      { arabic: "تَحْتَ", transliteration: "taḥta", meaning: { en: "under", ur: "میں", ar: "تحت" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عَبْدَيْنِ", transliteration: "ʿabdayni", root: "ع ب د", meaning: { en: "two servants", ur: "دو بندوں کے", ar: "عبدين" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", number: "dual" } },
      { arabic: "مِنْ عِبَادِنَا", transliteration: "min ʿibādinā", meaning: { en: "among Our servants", ur: "ہمارے بندوں میں سے", ar: "من عبادنا" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "preposition" } },
      { arabic: "صَالِحَيْنِ", transliteration: "ṣāliḥayni", root: "ص ل ح", meaning: { en: "righteous", ur: "نیک", ar: "صالحين" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "genitive", number: "dual" }, features: { participle: "active" } },
      { arabic: "فَخَانَتَاهُمَا", transliteration: "fa-khānatāhumā", root: "خ و ن", meaning: { en: "but they betrayed them", ur: "تو انہوں نے خیانت کی ان سے", ar: "فخانتاهما" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "dual", tense: "perfect", form: "I" } },
      { arabic: "فَلَمْ يُغْنِيَا", transliteration: "fa-lam yughniyā", root: "غ ن ي", meaning: { en: "so they did not avail them", ur: "تو کام نہ آئے ان کے", ar: "فلم يغنيا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "dual", mood: "jussive", form: "IV" } },
      { arabic: "عَنْهُمَا", transliteration: "ʿanhumā", meaning: { en: "for them", ur: "ان کو", ar: "عنهما" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "مِنَ اللَّهِ شَيْئًا", transliteration: "min Allāh shayʾan", meaning: { en: "from Allah at all", ur: "اللہ کی طرف سے کچھ بھی", ar: "من الله شيئاً" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "preposition" } },
      { arabic: "وَقِيلَ", transliteration: "wa-qīla", root: "ق و ل", meaning: { en: "and it was said", ur: "اور کہا گیا", ar: "وقيل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", voice: "passive", form: "I" } },
      { arabic: "ادْخُلَا", transliteration: "udkhulā", root: "د خ ل", meaning: { en: "enter", ur: "داخل ہو جاؤ", ar: "ادخلا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "f", number: "dual", mood: "imperative", form: "I" } },
      { arabic: "النَّارَ", transliteration: "an-nār", root: "ن و ر", meaning: { en: "the Fire", ur: "آگ میں", ar: "النار" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "مَعَ", transliteration: "maʿa", meaning: { en: "with", ur: "ساتھ", ar: "مع" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الدَّاخِلِينَ", transliteration: "ad-dākhilīn", root: "د خ ل", meaning: { en: "those who enter", ur: "داخل ہونے والوں کے", ar: "الداخلين" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true }, features: { participle: "active" } }
    ]
  },

  11: {
    ayahNumber: 11,
    text: "وَضَرَبَ اللَّهُ مَثَلًا لِّلَّذِينَ آمَنُوا امْرَأَتَ فِرْعَوْنَ إِذْ قَالَتْ رَبِّ ابْنِ لِي عِندَكَ بَيْتًا فِي الْجَنَّةِ وَنَجِّنِي مِن فِرْعَوْنَ وَعَمَلِهِ وَنَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ",
    words: [
      { arabic: "وَضَرَبَ", transliteration: "wa-ḍaraba", root: "ض ر ب", meaning: { en: "And Allah presents", ur: "اور بیان کرتا ہے", ar: "وضرب" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "اللَّهُ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "مَثَلًا", transliteration: "mathalan", root: "م ث ل", meaning: { en: "an example", ur: "مثال", ar: "مثلاً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "لِّلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "for those who", ur: "ان کی جو", ar: "للذين" }, pos: "PREP+REL", posLabel: "PREP+REL", grammar: { role: "preposition" } },
      { arabic: "آمَنُوا", transliteration: "āmanū", root: "أ م ن", meaning: { en: "believed", ur: "ایمان لائے", ar: "آمنوا" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "pl", tense: "perfect", form: "IV" } },
      { arabic: "امْرَأَتَ", transliteration: "imraʾat", root: "م ر أ", meaning: { en: "the wife", ur: "بیوی", ar: "امرأة" }, pos: "N", posLabel: "N", grammar: { role: "apposition", case: "accusative" } },
      { arabic: "فِرْعَوْنَ", transliteration: "Firʿawn", meaning: { en: "of Pharaoh", ur: "فرعون کی", ar: "فرعون" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "جب", ar: "إذ" }, pos: "ADV", posLabel: "ADV", grammar: { role: "temporal" } },
      { arabic: "قَالَتْ", transliteration: "qālat", root: "ق و ل", meaning: { en: "she said", ur: "اس نے کہا", ar: "قالت" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "رَبِّ", transliteration: "rabbi", root: "ر ب ب", meaning: { en: "My Lord", ur: "اے میرے رب", ar: "رب" }, pos: "N", posLabel: "N", grammar: { role: "vocative", case: "genitive" } },
      { arabic: "ابْنِ", transliteration: "ibni", root: "ب ن ي", meaning: { en: "build", ur: "بنا دے", ar: "ابن" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "I" } },
      { arabic: "لِي", transliteration: "lī", meaning: { en: "for me", ur: "میرے لیے", ar: "لي" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "عِندَكَ", transliteration: "ʿindaka", meaning: { en: "near You", ur: "اپنے پاس", ar: "عندك" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "بَيْتًا", transliteration: "baytan", root: "ب ي ت", meaning: { en: "a house", ur: "گھر", ar: "بيتاً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "فِي الْجَنَّةِ", transliteration: "fil-jannah", meaning: { en: "in Paradise", ur: "جنت میں", ar: "في الجنة" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "preposition" } },
      { arabic: "وَنَجِّنِي", transliteration: "wa-najjinī", root: "ن ج و", meaning: { en: "and save me", ur: "اور بچا لے مجھے", ar: "ونجني" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "II" } },
      { arabic: "مِن فِرْعَوْنَ", transliteration: "min Firʿawn", meaning: { en: "from Pharaoh", ur: "فرعون سے", ar: "من فرعون" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "preposition" } },
      { arabic: "وَعَمَلِهِ", transliteration: "wa-ʿamalihi", root: "ع م ل", meaning: { en: "and his deeds", ur: "اور اس کے عمل سے", ar: "وعمله" }, pos: "N", posLabel: "N", grammar: { role: "conjunction", case: "genitive" } },
      { arabic: "وَنَجِّنِي", transliteration: "wa-najjinī", root: "ن ج و", meaning: { en: "and save me", ur: "اور بچا لے مجھے", ar: "ونجني" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "imperative", form: "II" } },
      { arabic: "مِنَ الْقَوْمِ", transliteration: "min al-qawm", meaning: { en: "from the people", ur: "قوم سے", ar: "من القوم" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "preposition" } },
      { arabic: "الظَّالِمِينَ", transliteration: "aẓ-ẓālimīn", root: "ظ ل م", meaning: { en: "the wrongdoing", ur: "ظالم", ar: "الظالمين" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "genitive", definite: true }, features: { participle: "active" } }
    ]
  },

  12: {
    ayahNumber: 12,
    text: "وَمَرْيَمَ ابْنَتَ عِمْرَانَ الَّتِي أَحْصَنَتْ فَرْجَهَا فَنَفَخْنَا فِيهِ مِن رُّوحِنَا وَصَدَّقَتْ بِكَلِمَاتِ رَبِّهَا وَكُتُبِهِ وَكَانَتْ مِنَ الْقَانِتِينَ",
    words: [
      { arabic: "وَمَرْيَمَ", transliteration: "wa-Maryam", meaning: { en: "And Maryam", ur: "اور مریم", ar: "ومريم" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "ابْنَتَ", transliteration: "ibnat", root: "ب ن ي", meaning: { en: "daughter", ur: "بیٹی", ar: "ابنة" }, pos: "N", posLabel: "N", grammar: { role: "apposition", case: "accusative" } },
      { arabic: "عِمْرَانَ", transliteration: "ʿImrān", meaning: { en: "of Imran", ur: "عمران کی", ar: "عمران" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "الَّتِي", transliteration: "allatī", meaning: { en: "who", ur: "جس نے", ar: "التي" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "أَحْصَنَتْ", transliteration: "aḥṣanat", root: "ح ص ن", meaning: { en: "guarded", ur: "حفاظت کی", ar: "أحصنت" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "فَرْجَهَا", transliteration: "farjahā", root: "ف ر ج", meaning: { en: "her chastity", ur: "اپنی عصمت کی", ar: "فرجها" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "فَنَفَخْنَا", transliteration: "fa-nafakhnā", root: "ن ف خ", meaning: { en: "so We breathed", ur: "تو ہم نے پھونکا", ar: "فنفخنا" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "perfect", form: "I" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "into it", ur: "اس میں", ar: "فيه" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رُّوحِنَا", transliteration: "rūḥinā", root: "ر و ح", meaning: { en: "Our spirit", ur: "اپنی روح", ar: "روحنا" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "وَصَدَّقَتْ", transliteration: "wa-ṣaddaqat", root: "ص د ق", meaning: { en: "and she believed", ur: "اور تصدیق کی اس نے", ar: "وصدقت" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", tense: "perfect", form: "II" } },
      { arabic: "بِكَلِمَاتِ", transliteration: "bi-kalimāt", root: "ك ل م", meaning: { en: "in the words", ur: "کلام کی", ar: "بكلمات" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "رَبِّهَا", transliteration: "rabbihā", root: "ر ب ب", meaning: { en: "of her Lord", ur: "اپنے رب کے", ar: "ربها" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "وَكُتُبِهِ", transliteration: "wa-kutubihi", root: "ك ت ب", meaning: { en: "and His scriptures", ur: "اور اس کی کتابوں کی", ar: "وكتبه" }, pos: "N", posLabel: "N", grammar: { role: "conjunction", case: "genitive" } },
      { arabic: "وَكَانَتْ", transliteration: "wa-kānat", root: "ك و ن", meaning: { en: "and she was", ur: "اور تھی", ar: "وكانت" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", tense: "perfect" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "میں سے", ar: "من" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "الْقَانِتِينَ", transliteration: "al-qānitīn", root: "ق ن ت", meaning: { en: "the devoutly obedient", ur: "فرمانبرداروں", ar: "القانتين" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true }, features: { participle: "active" } }
    ]
  }
};

export default TREEBANK_DATA;
