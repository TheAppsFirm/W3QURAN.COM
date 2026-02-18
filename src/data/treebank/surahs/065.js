/**
 * Surah At-Talaq (65) - The Divorce
 * Quranic Arabic Treebank Data
 * 12 ayahs - Madani surah
 */

export const TREEBANK_DATA = {
  surahId: 65,
  surahName: "At-Talaq",
  surahNameArabic: "الطلاق",
  totalAyahs: 12,

  1: {
    ayahNumber: 1,
    text: "يَا أَيُّهَا النَّبِيُّ إِذَا طَلَّقْتُمُ النِّسَاءَ فَطَلِّقُوهُنَّ لِعِدَّتِهِنَّ وَأَحْصُوا الْعِدَّةَ ۖ وَاتَّقُوا اللَّهَ رَبَّكُمْ ۖ لَا تُخْرِجُوهُنَّ مِن بُيُوتِهِنَّ وَلَا يَخْرُجْنَ إِلَّا أَن يَأْتِينَ بِفَاحِشَةٍ مُّبَيِّنَةٍ ۚ وَتِلْكَ حُدُودُ اللَّهِ ۚ وَمَن يَتَعَدَّ حُدُودَ اللَّهِ فَقَدْ ظَلَمَ نَفْسَهُ ۚ لَا تَدْرِي لَعَلَّ اللَّهَ يُحْدِثُ بَعْدَ ذَٰلِكَ أَمْرًا",
    words: [
      { arabic: "يَا أَيُّهَا النَّبِيُّ", transliteration: "yā ayyuhā an-nabiyy", meaning: { en: "O Prophet", ur: "اے نبی", ar: "يا أيها النبي" }, pos: "VOC+N", posLabel: "VOC+N", grammar: { role: "vocative" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب", ar: "إذا" }, pos: "COND", posLabel: "COND", grammar: { role: "temporal" } },
      { arabic: "طَلَّقْتُمُ", transliteration: "ṭallaqtum", root: "ط ل ق", meaning: { en: "you divorce", ur: "تم طلاق دو", ar: "طلقتم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", tense: "perfect", form: "II" } },
      { arabic: "النِّسَاءَ", transliteration: "an-nisāʾ", root: "ن س و", meaning: { en: "women", ur: "عورتوں کو", ar: "النساء" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "فَطَلِّقُوهُنَّ", transliteration: "fa-ṭalliqūhunna", root: "ط ل ق", meaning: { en: "then divorce them", ur: "تو طلاق دو انہیں", ar: "فطلقوهن" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "II" } },
      { arabic: "لِعِدَّتِهِنَّ", transliteration: "li-ʿiddatihinna", root: "ع د د", meaning: { en: "for their waiting period", ur: "ان کی عدت کے لیے", ar: "لعدتهن" }, pos: "N", posLabel: "N", grammar: { role: "purpose", case: "genitive" } },
      { arabic: "وَأَحْصُوا", transliteration: "wa-aḥṣū", root: "ح ص ي", meaning: { en: "and count", ur: "اور گنو", ar: "وأحصوا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "IV" } },
      { arabic: "الْعِدَّةَ", transliteration: "al-ʿiddah", root: "ع د د", meaning: { en: "the period", ur: "عدت کو", ar: "العدة" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "وَاتَّقُوا", transliteration: "wa-ttaqū", root: "و ق ي", meaning: { en: "and fear", ur: "اور ڈرو", ar: "واتقوا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "VIII" } },
      { arabic: "اللَّهَ رَبَّكُمْ", transliteration: "Allāh rabbakum", meaning: { en: "Allah your Lord", ur: "اللہ سے جو تمہارا رب ہے", ar: "الله ربكم" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "لَا تُخْرِجُوهُنَّ", transliteration: "lā tukhrijūhunna", root: "خ ر ج", meaning: { en: "do not expel them", ur: "مت نکالو انہیں", ar: "لا تخرجوهن" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "jussive", form: "IV" } },
      { arabic: "مِن بُيُوتِهِنَّ", transliteration: "min buyūtihinna", root: "ب ي ت", meaning: { en: "from their houses", ur: "ان کے گھروں سے", ar: "من بيوتهن" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "وَلَا يَخْرُجْنَ", transliteration: "wa-lā yakhrujn", root: "خ ر ج", meaning: { en: "nor should they leave", ur: "اور نہ وہ نکلیں", ar: "ولا يخرجن" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "pl", mood: "jussive", form: "I" } },
      { arabic: "إِلَّا أَن يَأْتِينَ", transliteration: "illā an yaʾtīna", meaning: { en: "unless they commit", ur: "مگر یہ کہ وہ کریں", ar: "إلا أن يأتين" }, pos: "V", posLabel: "V", grammar: { role: "exception" } },
      { arabic: "بِفَاحِشَةٍ مُّبَيِّنَةٍ", transliteration: "bi-fāḥishatin mubayyinah", root: "ف ح ش", meaning: { en: "clear immorality", ur: "کھلی بے حیائی", ar: "بفاحشة مبينة" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "وَتِلْكَ حُدُودُ اللَّهِ", transliteration: "wa-tilka ḥudūd Allāh", meaning: { en: "these are limits of Allah", ur: "یہ اللہ کی حدیں ہیں", ar: "وتلك حدود الله" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "وَمَن يَتَعَدَّ حُدُودَ اللَّهِ", transliteration: "wa-man yataʿadda ḥudūd Allāh", meaning: { en: "whoever transgresses limits of Allah", ur: "جو اللہ کی حدوں سے تجاوز کرے", ar: "ومن يتعد حدود الله" }, pos: "V", posLabel: "V", grammar: { form: "V", mood: "jussive" } },
      { arabic: "فَقَدْ ظَلَمَ نَفْسَهُ", transliteration: "fa-qad ẓalama nafsahu", root: "ظ ل م", meaning: { en: "has wronged himself", ur: "اس نے اپنے آپ پر ظلم کیا", ar: "فقد ظلم نفسه" }, pos: "V", posLabel: "V", grammar: { tense: "perfect", form: "I" } },
      { arabic: "لَا تَدْرِي", transliteration: "lā tadrī", root: "د ر ي", meaning: { en: "you know not", ur: "تو نہیں جانتا", ar: "لا تدري" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "لَعَلَّ اللَّهَ", transliteration: "laʿalla Allāh", meaning: { en: "perhaps Allah", ur: "شاید اللہ", ar: "لعل الله" }, pos: "HOPE", posLabel: "HOPE", grammar: { role: "hope" } },
      { arabic: "يُحْدِثُ", transliteration: "yuḥdithu", root: "ح د ث", meaning: { en: "will bring about", ur: "پیدا کر دے", ar: "يحدث" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "IV" } },
      { arabic: "بَعْدَ ذَٰلِكَ", transliteration: "baʿda dhālika", meaning: { en: "after that", ur: "اس کے بعد", ar: "بعد ذلك" }, pos: "ADV", posLabel: "ADV", grammar: { role: "adverbial" } },
      { arabic: "أَمْرًا", transliteration: "amran", root: "أ م ر", meaning: { en: "a matter", ur: "کوئی بات", ar: "أمراً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ]
  },

  2: {
    ayahNumber: 2,
    text: "فَإِذَا بَلَغْنَ أَجَلَهُنَّ فَأَمْسِكُوهُنَّ بِمَعْرُوفٍ أَوْ فَارِقُوهُنَّ بِمَعْرُوفٍ وَأَشْهِدُوا ذَوَيْ عَدْلٍ مِّنكُمْ وَأَقِيمُوا الشَّهَادَةَ لِلَّهِ ۚ ذَٰلِكُمْ يُوعَظُ بِهِ مَن كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ ۚ وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
    words: [
      { arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "And when", ur: "پھر جب", ar: "فإذا" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { role: "temporal" } },
      { arabic: "بَلَغْنَ", transliteration: "balaghna", root: "ب ل غ", meaning: { en: "they reach", ur: "وہ پہنچ جائیں", ar: "بلغن" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "أَجَلَهُنَّ", transliteration: "ajalahunna", root: "أ ج ل", meaning: { en: "their term", ur: "ان کی مدت کو", ar: "أجلهن" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "فَأَمْسِكُوهُنَّ", transliteration: "fa-amsikūhunna", root: "م س ك", meaning: { en: "then retain them", ur: "تو انہیں روکے رکھو", ar: "فأمسكوهن" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "IV" } },
      { arabic: "بِمَعْرُوفٍ", transliteration: "bi-maʿrūf", root: "ع ر ف", meaning: { en: "in kindness", ur: "بھلائی سے", ar: "بمعروف" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", case: "genitive" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا", ar: "أو" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "disjunction" } },
      { arabic: "فَارِقُوهُنَّ", transliteration: "fāriqūhunna", root: "ف ر ق", meaning: { en: "part with them", ur: "جدا ہو جاؤ ان سے", ar: "فارقوهن" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "III" } },
      { arabic: "بِمَعْرُوفٍ", transliteration: "bi-maʿrūf", root: "ع ر ف", meaning: { en: "in kindness", ur: "بھلائی سے", ar: "بمعروف" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", case: "genitive" } },
      { arabic: "وَأَشْهِدُوا", transliteration: "wa-ashhidū", root: "ش ه د", meaning: { en: "and bring to witness", ur: "اور گواہ بناؤ", ar: "وأشهدوا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "IV" } },
      { arabic: "ذَوَيْ", transliteration: "dhaway", meaning: { en: "two persons", ur: "دو", ar: "ذوي" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", number: "dual" } },
      { arabic: "عَدْلٍ", transliteration: "ʿadl", root: "ع د ل", meaning: { en: "of justice", ur: "عادل", ar: "عدل" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "مِّنكُمْ", transliteration: "minkum", meaning: { en: "from among you", ur: "تم میں سے", ar: "منكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "وَأَقِيمُوا", transliteration: "wa-aqīmū", root: "ق و م", meaning: { en: "and establish", ur: "اور قائم کرو", ar: "وأقيموا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "IV" } },
      { arabic: "الشَّهَادَةَ", transliteration: "ash-shahādah", root: "ش ه د", meaning: { en: "the testimony", ur: "گواہی", ar: "الشهادة" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative", definite: true } },
      { arabic: "لِلَّهِ", transliteration: "lillāh", meaning: { en: "for Allah", ur: "اللہ کے لیے", ar: "لله" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "beneficiary" } },
      { arabic: "ذَٰلِكُمْ يُوعَظُ بِهِ", transliteration: "dhālikum yūʿaẓu bihi", meaning: { en: "that is instructed to", ur: "یہ نصیحت کی جاتی ہے", ar: "ذلكم يوعظ به" }, pos: "V", posLabel: "V", grammar: { voice: "passive", form: "I" } },
      { arabic: "مَن كَانَ يُؤْمِنُ", transliteration: "man kāna yuʾminu", meaning: { en: "whoever believes", ur: "جو ایمان رکھتا ہے", ar: "من كان يؤمن" }, pos: "V", posLabel: "V", grammar: { form: "IV" } },
      { arabic: "بِاللَّهِ وَالْيَوْمِ الْآخِرِ", transliteration: "bi-Allāh wal-yawm al-ākhir", meaning: { en: "in Allah and Last Day", ur: "اللہ پر اور آخرت کے دن پر", ar: "بالله واليوم الآخر" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "وَمَن يَتَّقِ اللَّهَ", transliteration: "wa-man yattaq Allāh", root: "و ق ي", meaning: { en: "and whoever fears Allah", ur: "اور جو اللہ سے ڈرے", ar: "ومن يتق الله" }, pos: "V", posLabel: "V", grammar: { form: "VIII", mood: "jussive" } },
      { arabic: "يَجْعَل لَّهُ", transliteration: "yajʿal lahu", root: "ج ع ل", meaning: { en: "He will make for him", ur: "اسے دے گا", ar: "يجعل له" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "jussive", form: "I" } },
      { arabic: "مَخْرَجًا", transliteration: "makhrajan", root: "خ ر ج", meaning: { en: "a way out", ur: "نکلنے کا راستہ", ar: "مخرجاً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ]
  },

  3: {
    ayahNumber: 3,
    text: "وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ ۚ وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ ۚ قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا",
    words: [
      { arabic: "وَيَرْزُقْهُ", transliteration: "wa-yarzuqhu", root: "ر ز ق", meaning: { en: "and will provide for him", ur: "اور اسے رزق دے گا", ar: "ويرزقه" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "jussive", form: "I" } },
      { arabic: "مِنْ حَيْثُ", transliteration: "min ḥaythu", meaning: { en: "from where", ur: "جہاں سے", ar: "من حيث" }, pos: "PREP+ADV", posLabel: "PREP+ADV", grammar: { role: "preposition" } },
      { arabic: "لَا يَحْتَسِبُ", transliteration: "lā yaḥtasibu", root: "ح س ب", meaning: { en: "he does not expect", ur: "وہ گمان نہیں کرتا", ar: "لا يحتسب" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "VIII" } },
      { arabic: "وَمَن يَتَوَكَّلْ", transliteration: "wa-man yatawakkal", root: "و ك ل", meaning: { en: "and whoever relies", ur: "اور جو بھروسہ کرے", ar: "ومن يتوكل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "jussive", form: "V" } },
      { arabic: "عَلَى اللَّهِ", transliteration: "ʿalā Allāh", meaning: { en: "upon Allah", ur: "اللہ پر", ar: "على الله" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "preposition" } },
      { arabic: "فَهُوَ حَسْبُهُ", transliteration: "fa-huwa ḥasbuhu", root: "ح س ب", meaning: { en: "then He is sufficient for him", ur: "تو وہ اس کے لیے کافی ہے", ar: "فهو حسبه" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بے شک", ar: "إن" }, pos: "EMPH", posLabel: "EMPH", grammar: { role: "emphasis" } },
      { arabic: "اللَّهَ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject_inna", case: "accusative" } },
      { arabic: "بَالِغُ", transliteration: "bālighu", root: "ب ل غ", meaning: { en: "will accomplish", ur: "پورا کرنے والا ہے", ar: "بالغ" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" }, features: { participle: "active" } },
      { arabic: "أَمْرِهِ", transliteration: "amrihi", root: "أ م ر", meaning: { en: "His purpose", ur: "اپنا کام", ar: "أمره" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "certainly", ur: "یقیناً", ar: "قد" }, pos: "CERT", posLabel: "CERT", grammar: { role: "emphasis" } },
      { arabic: "جَعَلَ اللَّهُ", transliteration: "jaʿala Allāh", root: "ج ع ل", meaning: { en: "Allah has set", ur: "اللہ نے بنایا ہے", ar: "جعل الله" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "لِكُلِّ شَيْءٍ", transliteration: "li-kulli shayʾ", meaning: { en: "for everything", ur: "ہر چیز کے لیے", ar: "لكل شيء" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "beneficiary" } },
      { arabic: "قَدْرًا", transliteration: "qadran", root: "ق د ر", meaning: { en: "a measure", ur: "ایک اندازہ", ar: "قدراً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ]
  },

  4: {
    ayahNumber: 4,
    text: "وَاللَّائِي يَئِسْنَ مِنَ الْمَحِيضِ مِن نِّسَائِكُمْ إِنِ ارْتَبْتُمْ فَعِدَّتُهُنَّ ثَلَاثَةُ أَشْهُرٍ وَاللَّائِي لَمْ يَحِضْنَ ۚ وَأُولَاتُ الْأَحْمَالِ أَجَلُهُنَّ أَن يَضَعْنَ حَمْلَهُنَّ ۚ وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مِنْ أَمْرِهِ يُسْرًا",
    words: [
      { arabic: "وَاللَّائِي", transliteration: "wa-llāʾī", meaning: { en: "And those who", ur: "اور جو عورتیں", ar: "واللائي" }, pos: "REL", posLabel: "REL", grammar: { role: "subject" } },
      { arabic: "يَئِسْنَ", transliteration: "yaʾisna", root: "ي أ س", meaning: { en: "have despaired", ur: "مایوس ہو چکی ہیں", ar: "يئسن" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "pl", tense: "perfect", form: "I" } },
      { arabic: "مِنَ الْمَحِيضِ", transliteration: "min al-maḥīḍ", root: "ح ي ض", meaning: { en: "of menstruation", ur: "حیض سے", ar: "من المحيض" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive", definite: true } },
      { arabic: "مِن نِّسَائِكُمْ", transliteration: "min nisāʾikum", root: "ن س و", meaning: { en: "among your women", ur: "تمہاری عورتوں میں سے", ar: "من نسائكم" }, pos: "N", posLabel: "N", grammar: { role: "preposition", case: "genitive" } },
      { arabic: "إِنِ ارْتَبْتُمْ", transliteration: "in irtabtum", root: "ر ي ب", meaning: { en: "if you doubt", ur: "اگر شک ہو", ar: "إن ارتبتم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", tense: "perfect", form: "VIII" } },
      { arabic: "فَعِدَّتُهُنَّ", transliteration: "fa-ʿiddatuhunna", root: "ع د د", meaning: { en: "then their period", ur: "تو ان کی عدت", ar: "فعدتهن" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "ثَلَاثَةُ أَشْهُرٍ", transliteration: "thalāthatu ashhur", root: "ش ه ر", meaning: { en: "three months", ur: "تین مہینے ہے", ar: "ثلاثة أشهر" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" } },
      { arabic: "وَاللَّائِي لَمْ يَحِضْنَ", transliteration: "wa-llāʾī lam yaḥiḍna", root: "ح ي ض", meaning: { en: "and those who have not menstruated", ur: "اور جنہیں ابھی حیض نہیں آیا", ar: "واللائي لم يحضن" }, pos: "V", posLabel: "V", grammar: { role: "conjunction" } },
      { arabic: "وَأُولَاتُ", transliteration: "wa-ulāt", meaning: { en: "and those who", ur: "اور جو", ar: "وأولات" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "الْأَحْمَالِ", transliteration: "al-aḥmāl", root: "ح م ل", meaning: { en: "are pregnant", ur: "حاملہ ہیں", ar: "الأحمال" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive", definite: true } },
      { arabic: "أَجَلُهُنَّ", transliteration: "ajaluhunna", root: "أ ج ل", meaning: { en: "their term", ur: "ان کی مدت", ar: "أجلهن" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "أَن يَضَعْنَ", transliteration: "an yaḍaʿna", root: "و ض ع", meaning: { en: "that they deliver", ur: "جب وہ جنم دیں", ar: "أن يضعن" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "pl", mood: "subjunctive", form: "I" } },
      { arabic: "حَمْلَهُنَّ", transliteration: "ḥamlahunna", root: "ح م ل", meaning: { en: "their burden", ur: "اپنا بچہ", ar: "حملهن" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "وَمَن يَتَّقِ اللَّهَ", transliteration: "wa-man yattaq Allāh", root: "و ق ي", meaning: { en: "and whoever fears Allah", ur: "اور جو اللہ سے ڈرے", ar: "ومن يتق الله" }, pos: "V", posLabel: "V", grammar: { form: "VIII", mood: "jussive" } },
      { arabic: "يَجْعَل لَّهُ", transliteration: "yajʿal lahu", root: "ج ع ل", meaning: { en: "He will make for him", ur: "اللہ اس کے لیے بنا دے گا", ar: "يجعل له" }, pos: "V", posLabel: "V", grammar: { mood: "jussive", form: "I" } },
      { arabic: "مِنْ أَمْرِهِ", transliteration: "min amrihi", root: "أ م ر", meaning: { en: "of his matter", ur: "اس کے معاملے میں", ar: "من أمره" }, pos: "N", posLabel: "N", grammar: { role: "preposition", case: "genitive" } },
      { arabic: "يُسْرًا", transliteration: "yusran", root: "ي س ر", meaning: { en: "ease", ur: "آسانی", ar: "يسراً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "ذَٰلِكَ أَمْرُ اللَّهِ أَنزَلَهُ إِلَيْكُمْ ۚ وَمَن يَتَّقِ اللَّهَ يُكَفِّرْ عَنْهُ سَيِّئَاتِهِ وَيُعْظِمْ لَهُ أَجْرًا",
    words: [
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That is", ur: "یہ ہے", ar: "ذلك" }, pos: "DEM", posLabel: "DEM", grammar: { role: "subject" } },
      { arabic: "أَمْرُ", transliteration: "amr", root: "أ م ر", meaning: { en: "command", ur: "حکم", ar: "أمر" }, pos: "N", posLabel: "N", grammar: { role: "predicate", case: "nominative" } },
      { arabic: "اللَّهِ", transliteration: "Allāh", meaning: { en: "of Allah", ur: "اللہ کا", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "أَنزَلَهُ", transliteration: "anzalahu", root: "ن ز ل", meaning: { en: "He has sent down", ur: "اتارا ہے اسے", ar: "أنزله" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "إِلَيْكُمْ", transliteration: "ilaykum", meaning: { en: "to you", ur: "تمہاری طرف", ar: "إليكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "وَمَن يَتَّقِ اللَّهَ", transliteration: "wa-man yattaq Allāh", root: "و ق ي", meaning: { en: "and whoever fears Allah", ur: "اور جو اللہ سے ڈرے", ar: "ومن يتق الله" }, pos: "V", posLabel: "V", grammar: { form: "VIII", mood: "jussive" } },
      { arabic: "يُكَفِّرْ", transliteration: "yukaffir", root: "ك ف ر", meaning: { en: "He will remove", ur: "مٹا دے گا", ar: "يكفر" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "jussive", form: "II" } },
      { arabic: "عَنْهُ", transliteration: "ʿanhu", meaning: { en: "from him", ur: "اس سے", ar: "عنه" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "سَيِّئَاتِهِ", transliteration: "sayyiʾātihi", root: "س و أ", meaning: { en: "his misdeeds", ur: "اس کی برائیاں", ar: "سيئاته" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "وَيُعْظِمْ", transliteration: "wa-yuʿẓim", root: "ع ظ م", meaning: { en: "and will make great", ur: "اور بڑا کرے گا", ar: "ويعظم" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "jussive", form: "IV" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "for him", ur: "اس کے لیے", ar: "له" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "أَجْرًا", transliteration: "ajran", root: "أ ج ر", meaning: { en: "reward", ur: "اجر", ar: "أجراً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ]
  },

  6: {
    ayahNumber: 6,
    text: "أَسْكِنُوهُنَّ مِنْ حَيْثُ سَكَنتُم مِّن وُجْدِكُمْ وَلَا تُضَارُّوهُنَّ لِتُضَيِّقُوا عَلَيْهِنَّ ۚ وَإِن كُنَّ أُولَاتِ حَمْلٍ فَأَنفِقُوا عَلَيْهِنَّ حَتَّىٰ يَضَعْنَ حَمْلَهُنَّ ۚ فَإِنْ أَرْضَعْنَ لَكُمْ فَآتُوهُنَّ أُجُورَهُنَّ ۖ وَأْتَمِرُوا بَيْنَكُم بِمَعْرُوفٍ ۖ وَإِن تَعَاسَرْتُمْ فَسَتُرْضِعُ لَهُ أُخْرَىٰ",
    words: [
      { arabic: "أَسْكِنُوهُنَّ", transliteration: "askinūhunna", root: "س ك ن", meaning: { en: "Let them live", ur: "رکھو انہیں", ar: "أسكنوهن" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "IV" } },
      { arabic: "مِنْ حَيْثُ سَكَنتُم", transliteration: "min ḥaythu sakantum", meaning: { en: "where you dwell", ur: "جہاں تم رہتے ہو", ar: "من حيث سكنتم" }, pos: "V", posLabel: "V", grammar: { role: "adverbial" } },
      { arabic: "مِّن وُجْدِكُمْ", transliteration: "min wujdikum", root: "و ج د", meaning: { en: "according to your means", ur: "اپنی حیثیت کے مطابق", ar: "من وجدكم" }, pos: "N", posLabel: "N", grammar: { role: "preposition", case: "genitive" } },
      { arabic: "وَلَا تُضَارُّوهُنَّ", transliteration: "wa-lā tuḍārrūhunna", root: "ض ر ر", meaning: { en: "and do not harm them", ur: "اور انہیں نقصان مت پہنچاؤ", ar: "ولا تضاروهن" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "jussive", form: "III" } },
      { arabic: "لِتُضَيِّقُوا", transliteration: "li-tuḍayyiqū", root: "ض ي ق", meaning: { en: "to make difficulty", ur: "تاکہ تنگ کرو", ar: "لتضيقوا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "subjunctive", form: "II" } },
      { arabic: "عَلَيْهِنَّ", transliteration: "ʿalayhinna", meaning: { en: "for them", ur: "ان پر", ar: "عليهن" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "وَإِن كُنَّ أُولَاتِ حَمْلٍ", transliteration: "wa-in kunna ulāti ḥaml", meaning: { en: "and if they are pregnant", ur: "اور اگر وہ حاملہ ہوں", ar: "وإن كن أولات حمل" }, pos: "V+N", posLabel: "V+N", grammar: { role: "conditional" } },
      { arabic: "فَأَنفِقُوا عَلَيْهِنَّ", transliteration: "fa-anfiqū ʿalayhinna", root: "ن ف ق", meaning: { en: "then spend on them", ur: "تو خرچ کرو ان پر", ar: "فأنفقوا عليهن" }, pos: "V", posLabel: "V", grammar: { mood: "imperative", form: "IV" } },
      { arabic: "حَتَّىٰ يَضَعْنَ حَمْلَهُنَّ", transliteration: "ḥattā yaḍaʿna ḥamlahunna", meaning: { en: "until they give birth", ur: "یہاں تک کہ بچہ جنیں", ar: "حتى يضعن حملهن" }, pos: "V", posLabel: "V", grammar: { mood: "subjunctive", form: "I" } },
      { arabic: "فَإِنْ أَرْضَعْنَ لَكُمْ", transliteration: "fa-in arḍaʿna lakum", root: "ر ض ع", meaning: { en: "and if they breastfeed for you", ur: "پھر اگر دودھ پلائیں تمہارے لیے", ar: "فإن أرضعن لكم" }, pos: "V", posLabel: "V", grammar: { tense: "perfect", form: "IV" } },
      { arabic: "فَآتُوهُنَّ أُجُورَهُنَّ", transliteration: "fa-ātūhunna ujūrahunna", root: "أ ج ر", meaning: { en: "then give them their due", ur: "تو ان کی اجرت دو", ar: "فآتوهن أجورهن" }, pos: "V+N", posLabel: "V+N", grammar: { mood: "imperative", form: "IV" } },
      { arabic: "وَأْتَمِرُوا", transliteration: "wa-ʾtamirū", root: "أ م ر", meaning: { en: "and consult", ur: "اور مشورہ کرو", ar: "وأتمروا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "VIII" } },
      { arabic: "بَيْنَكُم", transliteration: "baynakum", meaning: { en: "among yourselves", ur: "آپس میں", ar: "بينكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "بِمَعْرُوفٍ", transliteration: "bi-maʿrūf", root: "ع ر ف", meaning: { en: "in kindness", ur: "بھلائی سے", ar: "بمعروف" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", case: "genitive" } },
      { arabic: "وَإِن تَعَاسَرْتُمْ", transliteration: "wa-in taʿāsartum", root: "ع س ر", meaning: { en: "and if you disagree", ur: "اور اگر تنگی ہو", ar: "وإن تعاسرتم" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", tense: "perfect", form: "VI" } },
      { arabic: "فَسَتُرْضِعُ", transliteration: "fa-sa-turḍiʿu", root: "ر ض ع", meaning: { en: "then will breastfeed", ur: "تو دودھ پلائے گی", ar: "فسترضع" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", tense: "future", form: "IV" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "for him", ur: "اس کے لیے", ar: "له" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "أُخْرَىٰ", transliteration: "ukhrā", meaning: { en: "another", ur: "کوئی دوسری", ar: "أخرى" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "subject", case: "nominative" } }
    ]
  },

  7: {
    ayahNumber: 7,
    text: "لِيُنفِقْ ذُو سَعَةٍ مِّن سَعَتِهِ ۖ وَمَن قُدِرَ عَلَيْهِ رِزْقُهُ فَلْيُنفِقْ مِمَّا آتَاهُ اللَّهُ ۚ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا مَا آتَاهَا ۚ سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا",
    words: [
      { arabic: "لِيُنفِقْ", transliteration: "li-yunfiq", root: "ن ف ق", meaning: { en: "Let spend", ur: "خرچ کرے", ar: "لينفق" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "jussive", form: "IV" } },
      { arabic: "ذُو سَعَةٍ", transliteration: "dhū saʿah", root: "و س ع", meaning: { en: "one of ample means", ur: "فراخی والا", ar: "ذو سعة" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "مِّن سَعَتِهِ", transliteration: "min saʿatihi", root: "و س ع", meaning: { en: "from his means", ur: "اپنی فراخی سے", ar: "من سعته" }, pos: "N", posLabel: "N", grammar: { role: "preposition", case: "genitive" } },
      { arabic: "وَمَن قُدِرَ", transliteration: "wa-man qudira", root: "ق د ر", meaning: { en: "and he whose provision is restricted", ur: "اور جس پر تنگ کیا گیا", ar: "ومن قدر" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", voice: "passive", form: "I" } },
      { arabic: "عَلَيْهِ رِزْقُهُ", transliteration: "ʿalayhi rizquhu", root: "ر ز ق", meaning: { en: "upon him his provision", ur: "اس پر اس کا رزق", ar: "عليه رزقه" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "فَلْيُنفِقْ", transliteration: "fa-l-yunfiq", root: "ن ف ق", meaning: { en: "let him spend", ur: "تو خرچ کرے", ar: "فلينفق" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "jussive", form: "IV" } },
      { arabic: "مِمَّا آتَاهُ اللَّهُ", transliteration: "mimmā ātāhu Allāh", meaning: { en: "from what Allah has given him", ur: "اللہ نے جو دیا ہے اس میں سے", ar: "مما آتاه الله" }, pos: "V", posLabel: "V", grammar: { tense: "perfect", form: "IV" } },
      { arabic: "لَا يُكَلِّفُ", transliteration: "lā yukallifu", root: "ك ل ف", meaning: { en: "does not charge", ur: "نہیں بوجھ ڈالتا", ar: "لا يكلف" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "II" } },
      { arabic: "اللَّهُ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "نَفْسًا", transliteration: "nafsan", root: "ن ف س", meaning: { en: "a soul", ur: "کسی کو", ar: "نفساً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "إِلَّا مَا آتَاهَا", transliteration: "illā mā ātāhā", meaning: { en: "except what He gave it", ur: "مگر جو اسے دیا ہے", ar: "إلا ما آتاها" }, pos: "V", posLabel: "V", grammar: { tense: "perfect", form: "IV" } },
      { arabic: "سَيَجْعَلُ", transliteration: "sa-yajʿalu", root: "ج ع ل", meaning: { en: "will make", ur: "بنا دے گا", ar: "سيجعل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "future", form: "I" } },
      { arabic: "اللَّهُ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "بَعْدَ عُسْرٍ", transliteration: "baʿda ʿusr", root: "ع س ر", meaning: { en: "after hardship", ur: "تنگی کے بعد", ar: "بعد عسر" }, pos: "N", posLabel: "N", grammar: { role: "adverbial", case: "genitive" } },
      { arabic: "يُسْرًا", transliteration: "yusran", root: "ي س ر", meaning: { en: "ease", ur: "آسانی", ar: "يسراً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ]
  },

  8: {
    ayahNumber: 8,
    text: "وَكَأَيِّن مِّن قَرْيَةٍ عَتَتْ عَنْ أَمْرِ رَبِّهَا وَرُسُلِهِ فَحَاسَبْنَاهَا حِسَابًا شَدِيدًا وَعَذَّبْنَاهَا عَذَابًا نُّكْرًا",
    words: [
      { arabic: "وَكَأَيِّن", transliteration: "wa-kaʾayyin", meaning: { en: "And how many", ur: "اور کتنی", ar: "وكأين" }, pos: "INTERROG", posLabel: "INTERROG", grammar: { role: "interrogative" } },
      { arabic: "مِّن قَرْيَةٍ", transliteration: "min qaryah", root: "ق ر ي", meaning: { en: "a city", ur: "بستیاں", ar: "من قرية" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "genitive" } },
      { arabic: "عَتَتْ", transliteration: "ʿatat", root: "ع ت و", meaning: { en: "insolently disobeyed", ur: "سرکشی کی", ar: "عتت" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "عَنْ أَمْرِ", transliteration: "ʿan amr", root: "أ م ر", meaning: { en: "against command", ur: "حکم سے", ar: "عن أمر" }, pos: "N", posLabel: "N", grammar: { role: "object_preposition", case: "genitive" } },
      { arabic: "رَبِّهَا", transliteration: "rabbihā", root: "ر ب ب", meaning: { en: "of its Lord", ur: "اپنے رب کے", ar: "ربها" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "وَرُسُلِهِ", transliteration: "wa-rusulihi", root: "ر س ل", meaning: { en: "and His messengers", ur: "اور اس کے رسولوں کے", ar: "ورسله" }, pos: "N", posLabel: "N", grammar: { role: "conjunction", case: "genitive" } },
      { arabic: "فَحَاسَبْنَاهَا", transliteration: "fa-ḥāsabnāhā", root: "ح س ب", meaning: { en: "so We took it to account", ur: "تو ہم نے حساب لیا اس کا", ar: "فحاسبناها" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "perfect", form: "III" } },
      { arabic: "حِسَابًا شَدِيدًا", transliteration: "ḥisāban shadīdan", root: "ش د د", meaning: { en: "a severe account", ur: "سخت حساب", ar: "حساباً شديداً" }, pos: "N", posLabel: "N", grammar: { role: "cognate_accusative", case: "accusative" } },
      { arabic: "وَعَذَّبْنَاهَا", transliteration: "wa-ʿadhdhabnāhā", root: "ع ذ ب", meaning: { en: "and punished it", ur: "اور عذاب دیا اسے", ar: "وعذبناها" }, pos: "V", posLabel: "V", grammar: { person: 1, number: "pl", tense: "perfect", form: "II" } },
      { arabic: "عَذَابًا نُّكْرًا", transliteration: "ʿadhāban nukran", root: "ن ك ر", meaning: { en: "a terrible punishment", ur: "منکر عذاب", ar: "عذاباً نكراً" }, pos: "N", posLabel: "N", grammar: { role: "cognate_accusative", case: "accusative" } }
    ]
  },

  9: {
    ayahNumber: 9,
    text: "فَذَاقَتْ وَبَالَ أَمْرِهَا وَكَانَ عَاقِبَةُ أَمْرِهَا خُسْرًا",
    words: [
      { arabic: "فَذَاقَتْ", transliteration: "fa-dhāqat", root: "ذ و ق", meaning: { en: "So it tasted", ur: "تو اس نے چکھا", ar: "فذاقت" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "f", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "وَبَالَ", transliteration: "wabāla", root: "و ب ل", meaning: { en: "evil result", ur: "برا انجام", ar: "وبال" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "أَمْرِهَا", transliteration: "amrihā", root: "أ م ر", meaning: { en: "of its affair", ur: "اپنے معاملے کا", ar: "أمرها" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "وَكَانَ", transliteration: "wa-kāna", root: "ك و ن", meaning: { en: "and was", ur: "اور تھا", ar: "وكان" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect" } },
      { arabic: "عَاقِبَةُ", transliteration: "ʿāqibah", root: "ع ق ب", meaning: { en: "the outcome", ur: "انجام", ar: "عاقبة" }, pos: "N", posLabel: "N", grammar: { role: "subject_kana", case: "nominative" } },
      { arabic: "أَمْرِهَا", transliteration: "amrihā", root: "أ م ر", meaning: { en: "of its affair", ur: "اس کے معاملے کا", ar: "أمرها" }, pos: "N", posLabel: "N", grammar: { role: "mudaf_ilayh", case: "genitive" } },
      { arabic: "خُسْرًا", transliteration: "khusran", root: "خ س ر", meaning: { en: "loss", ur: "نقصان", ar: "خسراً" }, pos: "N", posLabel: "N", grammar: { role: "predicate_kana", case: "accusative" } }
    ]
  },

  10: {
    ayahNumber: 10,
    text: "أَعَدَّ اللَّهُ لَهُمْ عَذَابًا شَدِيدًا ۖ فَاتَّقُوا اللَّهَ يَا أُولِي الْأَلْبَابِ الَّذِينَ آمَنُوا ۚ قَدْ أَنزَلَ اللَّهُ إِلَيْكُمْ ذِكْرًا",
    words: [
      { arabic: "أَعَدَّ", transliteration: "aʿadda", root: "ع د د", meaning: { en: "has prepared", ur: "تیار کیا ہے", ar: "أعد" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "اللَّهُ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ نے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "ان کے لیے", ar: "لهم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "عَذَابًا شَدِيدًا", transliteration: "ʿadhāban shadīdan", root: "ش د د", meaning: { en: "severe punishment", ur: "سخت عذاب", ar: "عذاباً شديداً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "فَاتَّقُوا", transliteration: "fa-ttaqū", root: "و ق ي", meaning: { en: "so fear", ur: "تو ڈرو", ar: "فاتقوا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "imperative", form: "VIII" } },
      { arabic: "اللَّهَ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ سے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "يَا أُولِي الْأَلْبَابِ", transliteration: "yā ulī al-albāb", meaning: { en: "O people of understanding", ur: "اے عقل والو", ar: "يا أولي الألباب" }, pos: "VOC+N", posLabel: "VOC+N", grammar: { role: "vocative" } },
      { arabic: "الَّذِينَ آمَنُوا", transliteration: "alladhīna āmanū", meaning: { en: "you who believe", ur: "جو ایمان لائے", ar: "الذين آمنوا" }, pos: "REL+V", posLabel: "REL+V", grammar: { role: "apposition" } },
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "certainly", ur: "یقیناً", ar: "قد" }, pos: "CERT", posLabel: "CERT", grammar: { role: "emphasis" } },
      { arabic: "أَنزَلَ", transliteration: "anzala", root: "ن ز ل", meaning: { en: "has sent down", ur: "اتارا ہے", ar: "أنزل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "اللَّهُ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ نے", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "إِلَيْكُمْ", transliteration: "ilaykum", meaning: { en: "to you", ur: "تمہاری طرف", ar: "إليكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "ذِكْرًا", transliteration: "dhikran", root: "ذ ك ر", meaning: { en: "a reminder", ur: "نصیحت", ar: "ذكراً" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } }
    ]
  },

  11: {
    ayahNumber: 11,
    text: "رَّسُولًا يَتْلُو عَلَيْكُمْ آيَاتِ اللَّهِ مُبَيِّنَاتٍ لِّيُخْرِجَ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ مِنَ الظُّلُمَاتِ إِلَى النُّورِ ۚ وَمَن يُؤْمِن بِاللَّهِ وَيَعْمَلْ صَالِحًا يُدْخِلْهُ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا ۖ قَدْ أَحْسَنَ اللَّهُ لَهُ رِزْقًا",
    words: [
      { arabic: "رَّسُولًا", transliteration: "rasūlan", root: "ر س ل", meaning: { en: "a Messenger", ur: "ایک رسول", ar: "رسولاً" }, pos: "N", posLabel: "N", grammar: { role: "apposition", case: "accusative" } },
      { arabic: "يَتْلُو", transliteration: "yatlū", root: "ت ل و", meaning: { en: "reciting", ur: "پڑھتا ہے", ar: "يتلو" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "I" } },
      { arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", meaning: { en: "to you", ur: "تمہیں", ar: "عليكم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "آيَاتِ اللَّهِ", transliteration: "āyāt Allāh", meaning: { en: "verses of Allah", ur: "اللہ کی آیات", ar: "آيات الله" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "مُبَيِّنَاتٍ", transliteration: "mubayyināt", root: "ب ي ن", meaning: { en: "making clear", ur: "کھولنے والی", ar: "مبينات" }, pos: "N", posLabel: "N", grammar: { role: "adjective", case: "accusative" }, features: { participle: "active", form: "II" } },
      { arabic: "لِّيُخْرِجَ", transliteration: "li-yukhrija", root: "خ ر ج", meaning: { en: "to bring out", ur: "تاکہ نکالے", ar: "ليخرج" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "subjunctive", form: "IV" } },
      { arabic: "الَّذِينَ آمَنُوا", transliteration: "alladhīna āmanū", meaning: { en: "those who believe", ur: "جو ایمان لائے", ar: "الذين آمنوا" }, pos: "REL+V", posLabel: "REL+V", grammar: { role: "object" } },
      { arabic: "وَعَمِلُوا الصَّالِحَاتِ", transliteration: "wa-ʿamilū aṣ-ṣāliḥāt", meaning: { en: "and do righteous deeds", ur: "اور نیک عمل کیے", ar: "وعملوا الصالحات" }, pos: "V+N", posLabel: "V+N", grammar: { role: "conjunction" } },
      { arabic: "مِنَ الظُّلُمَاتِ", transliteration: "min aẓ-ẓulumāt", root: "ظ ل م", meaning: { en: "from darkness", ur: "اندھیروں سے", ar: "من الظلمات" }, pos: "N", posLabel: "N", grammar: { role: "preposition", case: "genitive" } },
      { arabic: "إِلَى النُّورِ", transliteration: "ilā an-nūr", root: "ن و ر", meaning: { en: "into light", ur: "روشنی کی طرف", ar: "إلى النور" }, pos: "N", posLabel: "N", grammar: { role: "preposition", case: "genitive" } },
      { arabic: "وَمَن يُؤْمِن بِاللَّهِ", transliteration: "wa-man yuʾmin billāh", meaning: { en: "and whoever believes in Allah", ur: "اور جو ایمان لائے اللہ پر", ar: "ومن يؤمن بالله" }, pos: "V", posLabel: "V", grammar: { form: "IV", mood: "jussive" } },
      { arabic: "وَيَعْمَلْ صَالِحًا", transliteration: "wa-yaʿmal ṣāliḥan", root: "ع م ل", meaning: { en: "and does righteousness", ur: "اور نیک عمل کرے", ar: "ويعمل صالحاً" }, pos: "V", posLabel: "V", grammar: { mood: "jussive", form: "I" } },
      { arabic: "يُدْخِلْهُ جَنَّاتٍ", transliteration: "yudkhilhu jannāt", meaning: { en: "He will admit him to gardens", ur: "اسے داخل کرے گا جنتوں میں", ar: "يدخله جنات" }, pos: "V+N", posLabel: "V+N", grammar: { form: "IV", mood: "jussive" } },
      { arabic: "تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ", transliteration: "tajrī min taḥtihā al-anhār", meaning: { en: "rivers flow beneath", ur: "جن کے نیچے نہریں بہتی ہیں", ar: "تجري من تحتها الأنهار" }, pos: "V+N", posLabel: "V+N", grammar: { role: "description" } },
      { arabic: "خَالِدِينَ فِيهَا أَبَدًا", transliteration: "khālidīna fīhā abadan", meaning: { en: "abiding therein forever", ur: "ہمیشہ رہنے والے", ar: "خالدين فيها أبداً" }, pos: "N+ADV", posLabel: "N+ADV", grammar: { role: "hal" } },
      { arabic: "قَدْ أَحْسَنَ اللَّهُ لَهُ رِزْقًا", transliteration: "qad aḥsana Allāh lahu rizqan", meaning: { en: "Allah has made good for him provision", ur: "اللہ نے اچھا کیا اس کے لیے رزق", ar: "قد أحسن الله له رزقاً" }, pos: "V+N", posLabel: "V+N", grammar: { tense: "perfect", form: "IV" } }
    ]
  },

  12: {
    ayahNumber: 12,
    text: "اللَّهُ الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ وَمِنَ الْأَرْضِ مِثْلَهُنَّ يَتَنَزَّلُ الْأَمْرُ بَيْنَهُنَّ لِتَعْلَمُوا أَنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا",
    words: [
      { arabic: "اللَّهُ", transliteration: "Allāh", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "is He who", ur: "وہ جس نے", ar: "الذي" }, pos: "REL", posLabel: "REL", grammar: { role: "predicate" } },
      { arabic: "خَلَقَ", transliteration: "khalaqa", root: "خ ل ق", meaning: { en: "created", ur: "پیدا کیا", ar: "خلق" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "I" } },
      { arabic: "سَبْعَ سَمَاوَاتٍ", transliteration: "sabʿa samāwāt", meaning: { en: "seven heavens", ur: "سات آسمان", ar: "سبع سماوات" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "وَمِنَ الْأَرْضِ", transliteration: "wa-min al-arḍ", meaning: { en: "and of earth", ur: "اور زمین میں سے", ar: "ومن الأرض" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "preposition" } },
      { arabic: "مِثْلَهُنَّ", transliteration: "mithlahunna", root: "م ث ل", meaning: { en: "the like of them", ur: "ان جیسی", ar: "مثلهن" }, pos: "N", posLabel: "N", grammar: { role: "object", case: "accusative" } },
      { arabic: "يَتَنَزَّلُ", transliteration: "yatanazzalu", root: "ن ز ل", meaning: { en: "descends", ur: "اترتا ہے", ar: "يتنزل" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", mood: "indicative", form: "V" } },
      { arabic: "الْأَمْرُ", transliteration: "al-amr", root: "أ م ر", meaning: { en: "the command", ur: "حکم", ar: "الأمر" }, pos: "N", posLabel: "N", grammar: { role: "subject", case: "nominative", definite: true } },
      { arabic: "بَيْنَهُنَّ", transliteration: "baynahunna", meaning: { en: "between them", ur: "ان کے درمیان", ar: "بينهن" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammar: { role: "preposition" } },
      { arabic: "لِتَعْلَمُوا", transliteration: "li-taʿlamū", root: "ع ل م", meaning: { en: "so you may know", ur: "تاکہ تم جان لو", ar: "لتعلموا" }, pos: "V", posLabel: "V", grammar: { person: 2, gender: "m", number: "pl", mood: "subjunctive", form: "I" } },
      { arabic: "أَنَّ اللَّهَ", transliteration: "anna Allāh", meaning: { en: "that Allah", ur: "کہ اللہ", ar: "أن الله" }, pos: "EMPH+N", posLabel: "EMPH+N", grammar: { role: "subject_anna" } },
      { arabic: "عَلَىٰ كُلِّ شَيْءٍ", transliteration: "ʿalā kulli shayʾ", meaning: { en: "over all things", ur: "ہر چیز پر", ar: "على كل شيء" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "preposition" } },
      { arabic: "قَدِيرٌ", transliteration: "qadīr", root: "ق د ر", meaning: { en: "is competent", ur: "قادر ہے", ar: "قدير" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "predicate", case: "nominative" } },
      { arabic: "وَأَنَّ اللَّهَ", transliteration: "wa-anna Allāh", meaning: { en: "and that Allah", ur: "اور اللہ", ar: "وأن الله" }, pos: "CONJ+EMPH+N", posLabel: "CONJ+EMPH+N", grammar: { role: "subject_anna" } },
      { arabic: "قَدْ أَحَاطَ", transliteration: "qad aḥāṭa", root: "ح و ط", meaning: { en: "has encompassed", ur: "گھیر لیا ہے", ar: "قد أحاط" }, pos: "V", posLabel: "V", grammar: { person: 3, gender: "m", number: "sg", tense: "perfect", form: "IV" } },
      { arabic: "بِكُلِّ شَيْءٍ", transliteration: "bi-kulli shayʾ", meaning: { en: "all things", ur: "ہر چیز کو", ar: "بكل شيء" }, pos: "PREP+N", posLabel: "PREP+N", grammar: { role: "object_preposition" } },
      { arabic: "عِلْمًا", transliteration: "ʿilman", root: "ع ل م", meaning: { en: "in knowledge", ur: "علم سے", ar: "علماً" }, pos: "N", posLabel: "N", grammar: { role: "tamyiz", case: "accusative" } }
    ]
  }
};

export default TREEBANK_DATA;
