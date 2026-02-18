/**
 * Surah Al-Ghashiyah (88) - Quranic Arabic Treebank Data
 * The Overwhelming Event
 * Total Ayahs: 26
 * Revelation: Makki
 */

export const TREEBANK_DATA = {
  surahId: 88,
  surahName: "Al-Ghashiyah",
  surahNameArabic: "الغاشية",
  totalAyahs: 26,
  revelationType: "Makki",
  theme: "The Overwhelming Day of Judgment - contrasting fates of disbelievers and believers, signs in creation, and the Prophet's role as reminder",

  1: {
    ayahNumber: 1,
    arabic: "هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ",
    words: [
      { position: 1, arabic: "هَلْ أَتَاكَ", transliteration: "hal ataaka", meaning: { en: "Has there reached you", ur: "کیا تمہیں پہنچی", ar: "هَلْ بَلَغَكَ" } },
      { position: 2, arabic: "حَدِيثُ", transliteration: "hadeethu", root: "ح د ث", meaning: { en: "the news/story", ur: "خبر", ar: "قِصَّة" } },
      { position: 3, arabic: "الْغَاشِيَةِ", transliteration: "al-ghaashiyah", root: "غ ش ي", meaning: { en: "the Overwhelming", ur: "چھا جانے والی", ar: "الْقِيَامَة" },
        advanced: { rootFamily: ["غشي (to cover)", "غشاء (covering)", "غاشية (overwhelming)"], linguisticMiracle: "Day that 'overwhelms' everything - covers all in its terror" } }
    ]
  },

  2: {
    ayahNumber: 2,
    arabic: "وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ",
    words: [
      { position: 1, arabic: "وُجُوهٌ يَوْمَئِذٍ", transliteration: "wujoohun yawma'idhin", meaning: { en: "Faces that Day", ur: "کچھ چہرے اس دن", ar: "وُجُوه فِي ذَلِكَ الْيَوْم" } },
      { position: 2, arabic: "خَاشِعَةٌ", transliteration: "khaashi'ah", root: "خ ش ع", meaning: { en: "humbled/downcast", ur: "عاجز", ar: "ذَلِيلَة" },
        advanced: { rootFamily: ["خشوع (humility)", "خاشع (humble)", "خشع (to be humble)"], linguisticMiracle: "Khushu' - inner humility now forced on those who refused it in life" } }
    ]
  },

  3: { ayahNumber: 3, arabic: "عَامِلَةٌ نَّاصِبَةٌ", words: [
    { position: 1, arabic: "عَامِلَةٌ", transliteration: "'aamilah", meaning: { en: "working (hard)", ur: "محنت کرنے والے", ar: "تَعْمَل" } },
    { position: 2, arabic: "نَّاصِبَةٌ", transliteration: "naasibah", root: "ن ص ب", meaning: { en: "exhausted", ur: "تھکے ہوئے", ar: "مُتْعَبَة" },
      advanced: { linguisticMiracle: "Nasab = exhaustion. Worked hard in dunya on wrong path, now exhausted in punishment" } }
  ] },

  4: { ayahNumber: 4, arabic: "تَصْلَىٰ نَارًا حَامِيَةً", words: [
    { position: 1, arabic: "تَصْلَىٰ", transliteration: "taslaa", root: "ص ل ي", meaning: { en: "will burn in", ur: "داخل ہوں گے", ar: "تَدْخُل" } },
    { position: 2, arabic: "نَارًا حَامِيَةً", transliteration: "naaran haamiyah", meaning: { en: "a hot Fire", ur: "تپتی آگ", ar: "نَار شَدِيدَة الْحَرَارَة" } }
  ] },

  5: { ayahNumber: 5, arabic: "تُسْقَىٰ مِنْ عَيْنٍ آنِيَةٍ", words: [
    { position: 1, arabic: "تُسْقَىٰ", transliteration: "tusqaa", meaning: { en: "given to drink", ur: "پلائے جائیں گے", ar: "يُسْقَوْن" } },
    { position: 2, arabic: "مِنْ عَيْنٍ آنِيَةٍ", transliteration: "min 'aynin aaniyah", meaning: { en: "from a boiling spring", ur: "کھولتے چشمے سے", ar: "مِنْ يَنْبُوع حَار" },
      advanced: { linguisticMiracle: "Aaniyah = reached extreme heat. Spring at maximum boiling point" } }
  ] },

  6: { ayahNumber: 6, arabic: "لَّيْسَ لَهُمْ طَعَامٌ إِلَّا مِن ضَرِيعٍ", words: [
    { position: 1, arabic: "لَّيْسَ لَهُمْ طَعَامٌ", transliteration: "laysa lahum ta'aam", meaning: { en: "No food for them", ur: "ان کے لیے کھانا نہیں", ar: "لَا طَعَام لَهُم" } },
    { position: 2, arabic: "إِلَّا مِن ضَرِيعٍ", transliteration: "illaa min daree'", meaning: { en: "except from dari' (thorny plant)", ur: "سوائے ضریع", ar: "إِلَّا الشَّوْك" },
      advanced: { rootFamily: ["ضرع (udder - opposite of nourishing)", "ضريع (bitter thorny plant)"], linguisticMiracle: "Dari' - thorny, poisonous plant that provides no nourishment" } }
  ] },

  7: { ayahNumber: 7, arabic: "لَّا يُسْمِنُ وَلَا يُغْنِي مِن جُوعٍ", words: [
    { position: 1, arabic: "لَّا يُسْمِنُ", transliteration: "laa yusminu", meaning: { en: "doesn't fatten", ur: "موٹا نہیں کرتا", ar: "لَا يُغَذِّي" } },
    { position: 2, arabic: "وَلَا يُغْنِي مِن جُوعٍ", transliteration: "wa laa yughnee min joo'", meaning: { en: "nor satisfies hunger", ur: "نہ بھوک مٹاتا", ar: "لَا يُشْبِع" } }
  ] },

  8: { ayahNumber: 8, arabic: "وُجُوهٌ يَوْمَئِذٍ نَّاعِمَةٌ", words: [
    { position: 1, arabic: "وُجُوهٌ يَوْمَئِذٍ", transliteration: "wujoohun yawma'idhin", meaning: { en: "Faces that Day", ur: "کچھ چہرے اس دن", ar: "وُجُوه فِي ذَلِكَ الْيَوْم" } },
    { position: 2, arabic: "نَّاعِمَةٌ", transliteration: "naa'imah", root: "ن ع م", meaning: { en: "radiant/joyful", ur: "نرم/خوش", ar: "مُسْتَبْشِرَة" },
      advanced: { rootFamily: ["نعمة (blessing)", "نعيم (bliss)", "منعم (blessed)"], linguisticMiracle: "Faces showing na'eem (bliss) - softness, radiance, comfort" } }
  ] },

  9: { ayahNumber: 9, arabic: "لِّسَعْيِهَا رَاضِيَةٌ", words: [
    { position: 1, arabic: "لِّسَعْيِهَا رَاضِيَةٌ", transliteration: "li-sa'yihaa raadiyah", meaning: { en: "pleased with their effort", ur: "اپنی کوشش سے راضی", ar: "مَسْرُورَة بِعَمَلِهَا" },
      advanced: { linguisticMiracle: "Sa'y (effort) paid off - their striving in dunya now brings satisfaction" } }
  ] },

  10: { ayahNumber: 10, arabic: "فِي جَنَّةٍ عَالِيَةٍ", words: [
    { position: 1, arabic: "فِي جَنَّةٍ عَالِيَةٍ", transliteration: "fee jannatin 'aaliyah", meaning: { en: "in an elevated Garden", ur: "بلند جنت میں", ar: "فِي فِرْدَوْس رَفِيع" } }
  ] },

  11: { ayahNumber: 11, arabic: "لَّا تَسْمَعُ فِيهَا لَاغِيَةً", words: [
    { position: 1, arabic: "لَّا تَسْمَعُ فِيهَا لَاغِيَةً", transliteration: "laa tasma'u feehaa laaghiyah", meaning: { en: "no idle talk heard there", ur: "اس میں بے ہودہ بات نہیں سنو گے", ar: "لَا كَلَام بَاطِل" },
      advanced: { rootFamily: ["لغو (vain talk)", "لغا (to speak idly)", "لاغية (idle speech)"], linguisticMiracle: "Paradise is free from laghw - all speech is meaningful, beautiful" } }
  ] },

  12: { ayahNumber: 12, arabic: "فِيهَا عَيْنٌ جَارِيَةٌ", words: [
    { position: 1, arabic: "فِيهَا عَيْنٌ جَارِيَةٌ", transliteration: "feehaa 'aynun jaariyah", meaning: { en: "a flowing spring therein", ur: "اس میں بہتا چشمہ", ar: "يَنْبُوع جَار" } }
  ] },

  13: { ayahNumber: 13, arabic: "فِيهَا سُرُرٌ مَّرْفُوعَةٌ", words: [
    { position: 1, arabic: "فِيهَا سُرُرٌ مَّرْفُوعَةٌ", transliteration: "feehaa sururun marfoo'ah", meaning: { en: "elevated couches therein", ur: "اس میں بلند تخت", ar: "أَسِرَّة عَالِيَة" } }
  ] },

  14: { ayahNumber: 14, arabic: "وَأَكْوَابٌ مَّوْضُوعَةٌ", words: [
    { position: 1, arabic: "وَأَكْوَابٌ مَّوْضُوعَةٌ", transliteration: "wa-akwaabun mawdoo'ah", meaning: { en: "and cups placed ready", ur: "اور رکھے ہوئے پیالے", ar: "كُؤُوس مُهَيَّأَة" } }
  ] },

  15: { ayahNumber: 15, arabic: "وَنَمَارِقُ مَصْفُوفَةٌ", words: [
    { position: 1, arabic: "وَنَمَارِقُ مَصْفُوفَةٌ", transliteration: "wa-namaariq masfoofah", meaning: { en: "and cushions lined up", ur: "اور صف بندھی مسندیں", ar: "وَسَائِد مُرَتَّبَة" } }
  ] },

  16: { ayahNumber: 16, arabic: "وَزَرَابِيُّ مَبْثُوثَةٌ", words: [
    { position: 1, arabic: "وَزَرَابِيُّ مَبْثُوثَةٌ", transliteration: "wa-zaraabiyyu mabthooth", meaning: { en: "and carpets spread", ur: "اور بچھے ہوئے قالین", ar: "سَجَاجِيد مَنْشُورَة" } }
  ] },

  17: { ayahNumber: 17, arabic: "أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ", words: [
    { position: 1, arabic: "أَفَلَا يَنظُرُونَ", transliteration: "a-fa-laa yandhurun", meaning: { en: "Do they not look", ur: "کیا وہ نہیں دیکھتے", ar: "أَلَا يَتَأَمَّلُون" } },
    { position: 2, arabic: "إِلَى الْإِبِلِ", transliteration: "ilal-ibil", meaning: { en: "at the camels", ur: "اونٹوں کو", ar: "الْجِمَال" } },
    { position: 3, arabic: "كَيْفَ خُلِقَتْ", transliteration: "kayfa khuliqat", meaning: { en: "how they were created", ur: "کیسے بنائے گئے", ar: "كَيْفَ صُنِعَت" },
      advanced: { linguisticMiracle: "Arabs knew camels well - engineering marvels of desert survival" } }
  ] },

  18: { ayahNumber: 18, arabic: "وَإِلَى السَّمَاءِ كَيْفَ رُفِعَتْ", words: [
    { position: 1, arabic: "وَإِلَى السَّمَاءِ كَيْفَ رُفِعَتْ", transliteration: "wa-ilas-samaa'i kayfa rufi'at", meaning: { en: "and at the sky how it was raised", ur: "اور آسمان کو کیسے بلند کیا گیا", ar: "كَيْفَ رُفِعَت السَّمَاء" } }
  ] },

  19: { ayahNumber: 19, arabic: "وَإِلَى الْجِبَالِ كَيْفَ نُصِبَتْ", words: [
    { position: 1, arabic: "وَإِلَى الْجِبَالِ كَيْفَ نُصِبَتْ", transliteration: "wa-ilal-jibaali kayfa nusibat", meaning: { en: "and at the mountains how they were fixed", ur: "اور پہاڑوں کو کیسے کھڑے کیے گئے", ar: "كَيْفَ أُقِيمَت الْجِبَال" } }
  ] },

  20: { ayahNumber: 20, arabic: "وَإِلَى الْأَرْضِ كَيْفَ سُطِحَتْ", words: [
    { position: 1, arabic: "وَإِلَى الْأَرْضِ كَيْفَ سُطِحَتْ", transliteration: "wa-ilal-ardi kayfa sutihat", meaning: { en: "and at the earth how it was spread", ur: "اور زمین کو کیسے بچھایا گیا", ar: "كَيْفَ مُدَّت الْأَرْض" } }
  ] },

  21: { ayahNumber: 21, arabic: "فَذَكِّرْ إِنَّمَا أَنتَ مُذَكِّرٌ", words: [
    { position: 1, arabic: "فَذَكِّرْ", transliteration: "fa-dhakkir", meaning: { en: "So remind", ur: "پس یاد دہانی کراؤ", ar: "عِظْ" } },
    { position: 2, arabic: "إِنَّمَا أَنتَ مُذَكِّرٌ", transliteration: "innamaa anta mudhakkir", meaning: { en: "you are only a reminder", ur: "تم صرف یاد دلانے والے ہو", ar: "أَنْتَ فَقَط وَاعِظ" },
      advanced: { linguisticMiracle: "Prophet's role defined: mudhakkir - one who reminds, not forces" } }
  ] },

  22: { ayahNumber: 22, arabic: "لَّسْتَ عَلَيْهِم بِمُصَيْطِرٍ", words: [
    { position: 1, arabic: "لَّسْتَ عَلَيْهِم بِمُصَيْطِرٍ", transliteration: "lasta 'alayhim bi-musaytir", meaning: { en: "you are not over them a controller", ur: "تم ان پر داروغہ نہیں ہو", ar: "لَسْتَ مُسَيْطِرًا عَلَيْهِم" },
      advanced: { rootFamily: ["سيطرة (control)", "مسيطر (controller)"], linguisticMiracle: "Musaytir = tyrant/controller. Prophet doesn't force - only reminds" } }
  ] },

  23: { ayahNumber: 23, arabic: "إِلَّا مَن تَوَلَّىٰ وَكَفَرَ", words: [
    { position: 1, arabic: "إِلَّا مَن تَوَلَّىٰ وَكَفَرَ", transliteration: "illaa man tawallaa wa kafar", meaning: { en: "except who turns away and disbelieves", ur: "مگر جو منہ پھیرے اور کفر کرے", ar: "إِلَّا مَنْ أَعْرَضَ وَكَفَرَ" } }
  ] },

  24: { ayahNumber: 24, arabic: "فَيُعَذِّبُهُ اللَّهُ الْعَذَابَ الْأَكْبَرَ", words: [
    { position: 1, arabic: "فَيُعَذِّبُهُ اللَّهُ", transliteration: "fa-yu'adhdhibuhullaah", meaning: { en: "then Allah will punish him", ur: "پس اللہ اسے عذاب دے گا", ar: "يُعَاقِبُهُ اللّٰه" } },
    { position: 2, arabic: "الْعَذَابَ الْأَكْبَرَ", transliteration: "al-'adhaabal-akbar", meaning: { en: "the greatest punishment", ur: "بڑا عذاب", ar: "أَشَدّ الْعَذَاب" } }
  ] },

  25: { ayahNumber: 25, arabic: "إِنَّ إِلَيْنَا إِيَابَهُمْ", words: [
    { position: 1, arabic: "إِنَّ إِلَيْنَا إِيَابَهُمْ", transliteration: "inna ilaynaa iyaabahum", meaning: { en: "Indeed to Us is their return", ur: "بیشک ہماری طرف ان کا لوٹنا ہے", ar: "إِلَيْنَا مَرْجِعُهُم" } }
  ] },

  26: { ayahNumber: 26, arabic: "ثُمَّ إِنَّ عَلَيْنَا حِسَابَهُمْ", words: [
    { position: 1, arabic: "ثُمَّ إِنَّ عَلَيْنَا حِسَابَهُمْ", transliteration: "thumma inna 'alaynaa hisaabahum", meaning: { en: "Then upon Us is their account", ur: "پھر ان کا حساب ہم پر ہے", ar: "ثُمَّ عَلَيْنَا مُحَاسَبَتُهُم" },
      advanced: { linguisticMiracle: "Two 'inna' for emphasis: return to Allah is certain, accounting is His responsibility" } }
  ] }
};

export default TREEBANK_DATA;
