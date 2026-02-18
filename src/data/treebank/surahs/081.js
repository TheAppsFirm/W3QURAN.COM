/**
 * Surah At-Takwir (81) - Quranic Arabic Treebank
 * The Folding / The Overthrowing
 * Total Ayahs: 29
 * Theme: Day of Judgment signs, honoring the Messenger, Quran's authority
 */

export const TREEBANK_DATA = {
  surahId: 81,
  surahName: "At-Takwir",
  surahNameArabic: "التكوير",
  totalAyahs: 29,
  revelationType: "Makki",
  theme: "Cosmic upheaval, infant girl's question, Quran brought by Jibreel",

  1: {
    ayahNumber: 1,
    arabic: "إِذَا الشَّمْسُ كُوِّرَتْ",
    words: [
      { position: 1, arabic: "إِذَا", transliteration: "idhā", meaning: { en: "When", ur: "جب", ar: "حينَ" }, pos: "COND", posLabel: "COND", grammarRole: "conditional" },
      { position: 2, arabic: "الشَّمْسُ", transliteration: "al-shamsu", root: "ش م س", meaning: { en: "the sun", ur: "سورج", ar: "الشَّمس" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "كُوِّرَتْ", transliteration: "kuwwirat", root: "ك و ر", meaning: { en: "is wrapped up", ur: "لپیٹ دیا جائے", ar: "لُفَّت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II", voice: "passive" }, advanced: { rootFamily: ["كَور", "كُرَة", "تكوير"], linguisticMiracle: "Takwir = folding like a turban wraps. Sun's light extinguished" } }
    ]
  },

  2: {
    ayahNumber: 2,
    arabic: "وَإِذَا النُّجُومُ انكَدَرَتْ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "النُّجُومُ", transliteration: "al-nujūmu", root: "ن ج م", meaning: { en: "the stars", ur: "ستارے", ar: "الكَواكِب" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "انكَدَرَتْ", transliteration: "inkadarat", root: "ك د ر", meaning: { en: "fall/lose luster", ur: "گر جائیں", ar: "تَساقَطَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "VII" }, advanced: { linguisticMiracle: "Stars fall and become dark - dual meaning" } }
    ]
  },

  3: {
    ayahNumber: 3,
    arabic: "وَإِذَا الْجِبَالُ سُيِّرَتْ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "الْجِبَالُ", transliteration: "al-jibālu", root: "ج ب ل", meaning: { en: "the mountains", ur: "پہاڑ", ar: "الجِبال" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "سُيِّرَتْ", transliteration: "suyyirat", root: "س ي ر", meaning: { en: "are moved", ur: "چلائے جائیں", ar: "حُرِّكَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II", voice: "passive" } }
    ]
  },

  4: {
    ayahNumber: 4,
    arabic: "وَإِذَا الْعِشَارُ عُطِّلَتْ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "الْعِشَارُ", transliteration: "al-ʿishāru", root: "ع ش ر", meaning: { en: "pregnant camels", ur: "اونٹنیاں", ar: "النوق الحَوامِل" }, pos: "N", posLabel: "N", grammarRole: "subject", advanced: { linguisticMiracle: "Most prized possession of Arabs - 10-month pregnant camel" } },
      { position: 3, arabic: "عُطِّلَتْ", transliteration: "ʿuṭṭilat", root: "ع ط ل", meaning: { en: "are neglected", ur: "چھوڑ دی جائیں", ar: "أُهمِلَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II", voice: "passive" } }
    ]
  },

  5: {
    ayahNumber: 5,
    arabic: "وَإِذَا الْوُحُوشُ حُشِرَتْ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "الْوُحُوشُ", transliteration: "al-wuḥūshu", root: "و ح ش", meaning: { en: "wild beasts", ur: "جنگلی جانور", ar: "الحَيوانات البَرِّيَّة" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "حُشِرَتْ", transliteration: "ḥushirat", root: "ح ش ر", meaning: { en: "are gathered", ur: "اکٹھے کیے جائیں", ar: "جُمِعَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" } }
    ]
  },

  6: {
    ayahNumber: 6,
    arabic: "وَإِذَا الْبِحَارُ سُجِّرَتْ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "الْبِحَارُ", transliteration: "al-biḥāru", root: "ب ح ر", meaning: { en: "the seas", ur: "سمندر", ar: "البُحور" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "سُجِّرَتْ", transliteration: "sujjirat", root: "س ج ر", meaning: { en: "are set ablaze", ur: "بھڑکائے جائیں", ar: "أُوقِدَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II", voice: "passive" }, advanced: { linguisticMiracle: "Seas ignited or overflowed - both possible" } }
    ]
  },

  7: {
    ayahNumber: 7,
    arabic: "وَإِذَا النُّفُوسُ زُوِّجَتْ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "النُّفُوسُ", transliteration: "al-nufūsu", root: "ن ف س", meaning: { en: "souls", ur: "جانیں", ar: "الأَرواح" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "زُوِّجَتْ", transliteration: "zuwwijat", root: "ز و ج", meaning: { en: "are paired", ur: "جوڑی جائیں", ar: "قُرِنَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II", voice: "passive" }, advanced: { linguisticMiracle: "Souls reunited with bodies, or grouped with similar types" } }
    ]
  },

  8: {
    ayahNumber: 8,
    arabic: "وَإِذَا الْمَوْءُودَةُ سُئِلَتْ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "الْمَوْءُودَةُ", transliteration: "al-maw'ūdatu", root: "و أ د", meaning: { en: "the buried infant girl", ur: "زندہ گاڑی ہوئی لڑکی", ar: "البِنت المَدفونَة حَيَّة" }, pos: "N", posLabel: "N", grammarRole: "subject", features: { pattern: "مَفْعُولَة" }, advanced: { rootFamily: ["وَأَد", "موءودة"], linguisticMiracle: "Girl buried alive - pre-Islamic infanticide condemned" } },
      { position: 3, arabic: "سُئِلَتْ", transliteration: "su'ilat", root: "س أ ل", meaning: { en: "is asked", ur: "پوچھا جائے", ar: "سُئِلَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" } }
    ]
  },

  9: {
    ayahNumber: 9,
    arabic: "بِأَيِّ ذَنبٍ قُتِلَتْ",
    words: [
      { position: 1, arabic: "بِأَيِّ", transliteration: "bi-ayyi", meaning: { en: "For what", ur: "کس", ar: "لِأَيِّ" }, pos: "PREP+INT", posLabel: "PREP+INT", grammarRole: "interrogative" },
      { position: 2, arabic: "ذَنبٍ", transliteration: "dhanbin", root: "ذ ن ب", meaning: { en: "sin", ur: "گناہ سے", ar: "جُرم" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 3, arabic: "قُتِلَتْ", transliteration: "qutilat", root: "ق ت ل", meaning: { en: "was she killed", ur: "وہ ماری گئی", ar: "قُتِلَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" }, advanced: { linguisticMiracle: "Rhetorical - she committed no sin. Murderers questioned" } }
    ]
  },

  10: {
    ayahNumber: 10,
    arabic: "وَإِذَا الصُّحُفُ نُشِرَتْ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "الصُّحُفُ", transliteration: "al-ṣuḥufu", root: "ص ح ف", meaning: { en: "the records", ur: "نامے", ar: "السِّجِلّات" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "نُشِرَتْ", transliteration: "nushirat", root: "ن ش ر", meaning: { en: "are spread open", ur: "کھولے جائیں", ar: "فُتِحَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" } }
    ]
  },

  11: {
    ayahNumber: 11,
    arabic: "وَإِذَا السَّمَاءُ كُشِطَتْ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "السَّمَاءُ", transliteration: "al-samā'u", meaning: { en: "the sky", ur: "آسمان", ar: "السَّماء" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "كُشِطَتْ", transliteration: "kushiṭat", root: "ك ش ط", meaning: { en: "is stripped away", ur: "کھینچ لیا جائے", ar: "أُزيلَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { voice: "passive" }, advanced: { linguisticMiracle: "Like skin peeled off - sky removed completely" } }
    ]
  },

  12: {
    ayahNumber: 12,
    arabic: "وَإِذَا الْجَحِيمُ سُعِّرَتْ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "الْجَحِيمُ", transliteration: "al-jaḥīmu", root: "ج ح م", meaning: { en: "Hellfire", ur: "دوزخ", ar: "النار" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "سُعِّرَتْ", transliteration: "suʿʿirat", root: "س ع ر", meaning: { en: "is set ablaze", ur: "بھڑکائی جائے", ar: "أُوقِدَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "II", voice: "passive" } }
    ]
  },

  13: {
    ayahNumber: 13,
    arabic: "وَإِذَا الْجَنَّةُ أُزْلِفَتْ",
    words: [
      { position: 1, arabic: "وَإِذَا", transliteration: "wa-idhā", meaning: { en: "And when", ur: "اور جب", ar: "وَحينَ" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammarRole: "conditional" },
      { position: 2, arabic: "الْجَنَّةُ", transliteration: "al-jannatu", root: "ج ن ن", meaning: { en: "Paradise", ur: "جنت", ar: "الفِردَوس" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "أُزْلِفَتْ", transliteration: "uzlifat", root: "ز ل ف", meaning: { en: "is brought near", ur: "قریب لائی جائے", ar: "قُرِّبَت" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV", voice: "passive" }, advanced: { linguisticMiracle: "Paradise approaches its people - divine welcome" } }
    ]
  },

  14: {
    ayahNumber: 14,
    arabic: "عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ",
    words: [
      { position: 1, arabic: "عَلِمَتْ", transliteration: "ʿalimat", root: "ع ل م", meaning: { en: "Will know", ur: "جان لے گی", ar: "أَدرَكَت" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 2, arabic: "نَفْسٌ", transliteration: "nafsun", meaning: { en: "a soul", ur: "ہر جان", ar: "كُلُّ نَفس" }, pos: "N", posLabel: "N", grammarRole: "subject" },
      { position: 3, arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "جو کچھ", ar: "ما" }, pos: "REL", posLabel: "REL", grammarRole: "object" },
      { position: 4, arabic: "أَحْضَرَتْ", transliteration: "aḥḍarat", root: "ح ض ر", meaning: { en: "it has brought", ur: "لائی ہے", ar: "أَتَت بِهِ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "IV" }, advanced: { linguisticMiracle: "Answer to all 12 'when' clauses - soul sees its deeds" } }
    ]
  },

  15: {
    ayahNumber: 15,
    arabic: "فَلَا أُقْسِمُ بِالْخُنَّسِ",
    words: [
      { position: 1, arabic: "فَلَا", transliteration: "falā", meaning: { en: "So I swear", ur: "پس قسم ہے", ar: "فَأُقسِمُ" }, pos: "CONJ+EMPH", posLabel: "CONJ+EMPH", grammarRole: "emphatic oath" },
      { position: 2, arabic: "أُقْسِمُ", transliteration: "uqsimu", root: "ق س م", meaning: { en: "I swear", ur: "میں قسم کھاتا ہوں", ar: "أَحلِفُ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "بِالْخُنَّسِ", transliteration: "bil-khunnasi", root: "خ ن س", meaning: { en: "by the retreating stars", ur: "پیچھے ہٹنے والوں کی", ar: "بالكَواكِب الراجِعَة" }, pos: "N", posLabel: "N", grammarRole: "oath", advanced: { rootFamily: ["خَنَس", "خُنّاس", "خُنَّس"], linguisticMiracle: "Stars that disappear by day or planets in retrograde" } }
    ]
  },

  16: {
    ayahNumber: 16,
    arabic: "الْجَوَارِ الْكُنَّسِ",
    words: [
      { position: 1, arabic: "الْجَوَارِ", transliteration: "al-jawāri", root: "ج ر ي", meaning: { en: "The ones that run", ur: "چلنے والے", ar: "السَّيّارات" }, pos: "N", posLabel: "N", grammarRole: "apposition" },
      { position: 2, arabic: "الْكُنَّسِ", transliteration: "al-kunnasi", root: "ك ن س", meaning: { en: "that disappear", ur: "چھپنے والے", ar: "المُختَفِيَة" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", advanced: { linguisticMiracle: "Planets that move and hide - retrograde motion" } }
    ]
  },

  17: {
    ayahNumber: 17,
    arabic: "وَاللَّيْلِ إِذَا عَسْعَسَ",
    words: [
      { position: 1, arabic: "وَاللَّيْلِ", transliteration: "wal-layli", root: "ل ي ل", meaning: { en: "And the night", ur: "اور رات کی قسم", ar: "والليل" }, pos: "N", posLabel: "N", grammarRole: "oath" },
      { position: 2, arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب", ar: "حينَ" }, pos: "COND", posLabel: "COND", grammarRole: "temporal" },
      { position: 3, arabic: "عَسْعَسَ", transliteration: "ʿasʿasa", root: "ع س ع س", meaning: { en: "departs/arrives", ur: "پلٹے", ar: "أَدبَرَ أَو أَقبَلَ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { linguisticMiracle: "Rare word - night's coming or going, both meanings" } }
    ]
  },

  18: {
    ayahNumber: 18,
    arabic: "وَالصُّبْحِ إِذَا تَنَفَّسَ",
    words: [
      { position: 1, arabic: "وَالصُّبْحِ", transliteration: "wal-ṣubḥi", root: "ص ب ح", meaning: { en: "And the dawn", ur: "اور صبح کی", ar: "والفَجر" }, pos: "N", posLabel: "N", grammarRole: "oath" },
      { position: 2, arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب", ar: "حينَ" }, pos: "COND", posLabel: "COND", grammarRole: "temporal" },
      { position: 3, arabic: "تَنَفَّسَ", transliteration: "tanaffasa", root: "ن ف س", meaning: { en: "it breathes", ur: "روشن ہو", ar: "انتَشَرَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "V" }, advanced: { linguisticMiracle: "Dawn 'breathes' light into darkness - beautiful metaphor" } }
    ]
  },

  19: {
    ayahNumber: 19,
    arabic: "إِنَّهُ لَقَوْلُ رَسُولٍ كَرِيمٍ",
    words: [
      { position: 1, arabic: "إِنَّهُ", transliteration: "innahu", meaning: { en: "Indeed it", ur: "بے شک یہ", ar: "إِنَّهُ" }, pos: "ACC+PRON", posLabel: "ACC+PRON", grammarRole: "emphasis" },
      { position: 2, arabic: "لَقَوْلُ", transliteration: "laqawlu", root: "ق و ل", meaning: { en: "is surely a word", ur: "یقیناً کلام ہے", ar: "لَكَلامُ" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 3, arabic: "رَسُولٍ", transliteration: "rasūlin", root: "ر س ل", meaning: { en: "of a messenger", ur: "رسول کا", ar: "مَبعوث" }, pos: "N", posLabel: "N", grammarRole: "possessive", advanced: { linguisticMiracle: "Jibreel brings revelation - noble messenger" } },
      { position: 4, arabic: "كَرِيمٍ", transliteration: "karīmin", root: "ك ر م", meaning: { en: "noble", ur: "معزز", ar: "شَريف" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ]
  },

  20: {
    ayahNumber: 20,
    arabic: "ذِي قُوَّةٍ عِندَ ذِي الْعَرْشِ مَكِينٍ",
    words: [
      { position: 1, arabic: "ذِي", transliteration: "dhī", meaning: { en: "Possessor of", ur: "والا", ar: "صاحِب" }, pos: "N", posLabel: "N", grammarRole: "attribute" },
      { position: 2, arabic: "قُوَّةٍ", transliteration: "quwwatin", root: "ق و ي", meaning: { en: "power", ur: "طاقت", ar: "قُدرَة" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 3, arabic: "عِندَ", transliteration: "ʿinda", meaning: { en: "with", ur: "کے پاس", ar: "لَدى" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "ذِي", transliteration: "dhī", meaning: { en: "Owner of", ur: "والے", ar: "صاحِب" }, pos: "N", posLabel: "N", grammarRole: "attribute" },
      { position: 5, arabic: "الْعَرْشِ", transliteration: "al-ʿarshi", root: "ع ر ش", meaning: { en: "the Throne", ur: "عرش", ar: "الكُرسِيّ" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 6, arabic: "مَكِينٍ", transliteration: "makīnin", root: "م ك ن", meaning: { en: "established", ur: "عزت والا", ar: "مُتَمَكِّن" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", advanced: { linguisticMiracle: "Jibreel has high rank near Allah's Throne" } }
    ]
  },

  21: {
    ayahNumber: 21,
    arabic: "مُّطَاعٍ ثَمَّ أَمِينٍ",
    words: [
      { position: 1, arabic: "مُّطَاعٍ", transliteration: "muṭāʿin", root: "ط و ع", meaning: { en: "Obeyed", ur: "مانا جانے والا", ar: "مَتبوع" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", features: { pattern: "مُفَعَل" }, advanced: { linguisticMiracle: "Angels obey Jibreel - his authority in heaven" } },
      { position: 2, arabic: "ثَمَّ", transliteration: "thamma", meaning: { en: "there", ur: "وہاں", ar: "هُناكَ" }, pos: "ADV", posLabel: "ADV", grammarRole: "adverb" },
      { position: 3, arabic: "أَمِينٍ", transliteration: "amīnin", root: "أ م ن", meaning: { en: "trustworthy", ur: "امانتدار", ar: "مَوثوق" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ]
  },

  22: {
    ayahNumber: 22,
    arabic: "وَمَا صَاحِبُكُم بِمَجْنُونٍ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں ہے", ar: "ولَيسَ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "صَاحِبُكُم", transliteration: "ṣāḥibukum", root: "ص ح ب", meaning: { en: "your companion", ur: "تمہارا ساتھی", ar: "رَفيقُكُم" }, pos: "N+PRON", posLabel: "N+PRON", grammarRole: "subject", advanced: { linguisticMiracle: "Prophet ﷺ called their companion - he's one of them" } },
      { position: 3, arabic: "بِمَجْنُونٍ", transliteration: "bi-majnūnin", root: "ج ن ن", meaning: { en: "possessed/mad", ur: "دیوانہ", ar: "مَسحور" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate" }
    ]
  },

  23: {
    ayahNumber: 23,
    arabic: "وَلَقَدْ رَآهُ بِالْأُفُقِ الْمُبِينِ",
    words: [
      { position: 1, arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور یقیناً", ar: "وَلَقَد" }, pos: "CONJ+CERT", posLabel: "CONJ+CERT", grammarRole: "emphasis" },
      { position: 2, arabic: "رَآهُ", transliteration: "ra'āhu", root: "ر أ ي", meaning: { en: "he saw him", ur: "اس نے اسے دیکھا", ar: "شاهَدَهُ" }, pos: "V+PRON", posLabel: "V+PRON", grammarRole: "verb + object" },
      { position: 3, arabic: "بِالْأُفُقِ", transliteration: "bil-ufuqi", root: "أ ف ق", meaning: { en: "on the horizon", ur: "افق پر", ar: "في الأُفق" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "الْمُبِينِ", transliteration: "al-mubīni", root: "ب ي ن", meaning: { en: "clear", ur: "روشن", ar: "الواضِح" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute", advanced: { linguisticMiracle: "Prophet saw Jibreel in true form on clear horizon" } }
    ]
  },

  24: {
    ayahNumber: 24,
    arabic: "وَمَا هُوَ عَلَى الْغَيْبِ بِضَنِينٍ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں ہے", ar: "ولَيسَ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "هُوَ", transliteration: "huwa", meaning: { en: "he", ur: "وہ", ar: "هُوَ" }, pos: "PRON", posLabel: "PRON", grammarRole: "subject" },
      { position: 3, arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "of", ur: "پر", ar: "على" }, pos: "PREP", posLabel: "PREP", grammarRole: "preposition" },
      { position: 4, arabic: "الْغَيْبِ", transliteration: "al-ghaybi", root: "غ ي ب", meaning: { en: "the unseen", ur: "غیب", ar: "الخَفِيّ" }, pos: "N", posLabel: "N", grammarRole: "prepositional phrase" },
      { position: 5, arabic: "بِضَنِينٍ", transliteration: "bi-ḍanīnin", root: "ض ن ن", meaning: { en: "stingy/withholding", ur: "بخیل", ar: "بَخيل" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "predicate", advanced: { linguisticMiracle: "Prophet doesn't hide revelation - shares everything" } }
    ]
  },

  25: {
    ayahNumber: 25,
    arabic: "وَمَا هُوَ بِقَوْلِ شَيْطَانٍ رَّجِيمٍ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں ہے", ar: "ولَيسَ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "هُوَ", transliteration: "huwa", meaning: { en: "it", ur: "یہ", ar: "هُوَ" }, pos: "PRON", posLabel: "PRON", grammarRole: "subject" },
      { position: 3, arabic: "بِقَوْلِ", transliteration: "bi-qawli", meaning: { en: "word of", ur: "کلام", ar: "بِكَلام" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "شَيْطَانٍ", transliteration: "shayṭānin", meaning: { en: "Satan", ur: "شیطان کا", ar: "إبليس" }, pos: "N", posLabel: "N", grammarRole: "possessive" },
      { position: 5, arabic: "رَّجِيمٍ", transliteration: "rajīmin", root: "ر ج م", meaning: { en: "accursed", ur: "مردود", ar: "مَلعون" }, pos: "ADJ", posLabel: "ADJ", grammarRole: "attribute" }
    ]
  },

  26: {
    ayahNumber: 26,
    arabic: "فَأَيْنَ تَذْهَبُونَ",
    words: [
      { position: 1, arabic: "فَأَيْنَ", transliteration: "fa-ayna", meaning: { en: "So where", ur: "پس کہاں", ar: "فَإلى أَينَ" }, pos: "CONJ+INT", posLabel: "CONJ+INT", grammarRole: "interrogative" },
      { position: 2, arabic: "تَذْهَبُونَ", transliteration: "tadh'habūna", root: "ذ ه ب", meaning: { en: "are you going", ur: "تم جا رہے ہو", ar: "تَتَّجِهونَ" }, pos: "V", posLabel: "V", grammarRole: "verb", advanced: { linguisticMiracle: "Rhetorical - where can you go from truth?" } }
    ]
  },

  27: {
    ayahNumber: 27,
    arabic: "إِنْ هُوَ إِلَّا ذِكْرٌ لِّلْعَالَمِينَ",
    words: [
      { position: 1, arabic: "إِنْ", transliteration: "in", meaning: { en: "Not", ur: "نہیں ہے", ar: "ما" }, pos: "NEG", posLabel: "NEG", grammarRole: "negation" },
      { position: 2, arabic: "هُوَ", transliteration: "huwa", meaning: { en: "it", ur: "یہ", ar: "هُوَ" }, pos: "PRON", posLabel: "PRON", grammarRole: "subject" },
      { position: 3, arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے", ar: "سِوى" }, pos: "EXCEPT", posLabel: "EXCEPT", grammarRole: "exception" },
      { position: 4, arabic: "ذِكْرٌ", transliteration: "dhikrun", root: "ذ ك ر", meaning: { en: "a reminder", ur: "نصیحت", ar: "مَوعِظَة" }, pos: "N", posLabel: "N", grammarRole: "predicate" },
      { position: 5, arabic: "لِّلْعَالَمِينَ", transliteration: "lil-ʿālamīna", meaning: { en: "for all worlds", ur: "جہانوں کے لیے", ar: "لِلخَلق أَجمَعينَ" }, pos: "PREP+N", posLabel: "PREP+N", grammarRole: "prepositional phrase" }
    ]
  },

  28: {
    ayahNumber: 28,
    arabic: "لِمَن شَاءَ مِنكُمْ أَن يَسْتَقِيمَ",
    words: [
      { position: 1, arabic: "لِمَن", transliteration: "liman", meaning: { en: "For whoever", ur: "جو چاہے", ar: "لِمَن" }, pos: "PREP+REL", posLabel: "PREP+REL", grammarRole: "prepositional phrase" },
      { position: 2, arabic: "شَاءَ", transliteration: "shā'a", root: "ش ي أ", meaning: { en: "wills", ur: "چاہے", ar: "أَرادَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "مِنكُمْ", transliteration: "minkum", meaning: { en: "among you", ur: "تم میں سے", ar: "مِنكُم" }, pos: "PREP+PRON", posLabel: "PREP+PRON", grammarRole: "prepositional phrase" },
      { position: 4, arabic: "أَن", transliteration: "an", meaning: { en: "to", ur: "کہ", ar: "أَن" }, pos: "SUB", posLabel: "SUB", grammarRole: "subordinating" },
      { position: 5, arabic: "يَسْتَقِيمَ", transliteration: "yastaqīma", root: "ق و م", meaning: { en: "go straight", ur: "سیدھا چلے", ar: "يَستَوِيَ" }, pos: "V", posLabel: "V", grammarRole: "verb", features: { form: "X", mood: "subjunctive" }, advanced: { linguisticMiracle: "Form X - seeking to be straight, ongoing effort" } }
    ]
  },

  29: {
    ayahNumber: 29,
    arabic: "وَمَا تَشَاءُونَ إِلَّا أَن يَشَاءَ اللَّهُ رَبُّ الْعَالَمِينَ",
    words: [
      { position: 1, arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں", ar: "ولَن" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammarRole: "negation" },
      { position: 2, arabic: "تَشَاءُونَ", transliteration: "tashā'ūna", meaning: { en: "you will", ur: "تم چاہ سکتے", ar: "تُريدونَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 3, arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "مگر", ar: "سِوى" }, pos: "EXCEPT", posLabel: "EXCEPT", grammarRole: "exception" },
      { position: 4, arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ", ar: "أَن" }, pos: "SUB", posLabel: "SUB", grammarRole: "subordinating" },
      { position: 5, arabic: "يَشَاءَ", transliteration: "yashā'a", meaning: { en: "wills", ur: "چاہے", ar: "يُريدَ" }, pos: "V", posLabel: "V", grammarRole: "verb" },
      { position: 6, arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ", ar: "الله" }, pos: "PN", posLabel: "PN", grammarRole: "subject" },
      { position: 7, arabic: "رَبُّ", transliteration: "rabbu", meaning: { en: "Lord", ur: "رب", ar: "مالِك" }, pos: "N", posLabel: "N", grammarRole: "apposition" },
      { position: 8, arabic: "الْعَالَمِينَ", transliteration: "al-ʿālamīna", meaning: { en: "of all worlds", ur: "جہانوں کا", ar: "الكَون" }, pos: "N", posLabel: "N", grammarRole: "possessive", advanced: { linguisticMiracle: "Human will operates within Allah's will - not determinism, but divine sovereignty" } }
    ]
  }
};

export default TREEBANK_DATA;
