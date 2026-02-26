/**
 * Surah Al-Fath (The Victory) - Surah 48
 * Quranic Arabic Treebank Data
 * First 10 Ayahs
 */

export const TREEBANK_DATA = {
  surahId: 48,
  surahName: "Al-Fath",
  surahNameArabic: "الفتح",
  totalAyahs: 29,
  revelationType: "Medinan",

  1: {
    ayahNumber: 1,
    text: "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بیشک ہم نے" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphatic" } },
      { arabic: "فَتَحْنَا", transliteration: "fataḥnā", meaning: { en: "have granted you a victory", ur: "فتح دی" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ف-ت-ح", person: "1st", number: "plural" } },
      { arabic: "لَكَ", transliteration: "laka", meaning: { en: "for you", ur: "تمہیں" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "benefactive" } },
      { arabic: "فَتْحًا", transliteration: "fatḥan", meaning: { en: "a victory", ur: "فتح" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ف-ت-ح" } },
      { arabic: "مُّبِينًا", transliteration: "mubīnan", meaning: { en: "clear", ur: "صریح" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "ب-ي-ن" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ]
    }
  },

  2: {
    ayahNumber: 2,
    text: "لِّيَغْفِرَ لَكَ اللَّهُ مَا تَقَدَّمَ مِن ذَنبِكَ وَمَا تَأَخَّرَ وَيُتِمَّ نِعْمَتَهُ عَلَيْكَ وَيَهْدِيَكَ صِرَاطًا مُّسْتَقِيمًا",
    words: [
      { arabic: "لِّيَغْفِرَ", transliteration: "liyaghfira", meaning: { en: "That may forgive", ur: "تاکہ بخش دے" }, pos: "P+V", posLabel: "P+V", grammar: { form: "I", root: "غ-ف-ر", mood: "subjunctive" } },
      { arabic: "لَكَ", transliteration: "laka", meaning: { en: "for you", ur: "تمہارے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "benefactive" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "تَقَدَّمَ", transliteration: "taqaddama", meaning: { en: "preceded", ur: "آگے ہوا" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "ق-د-م" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "میں سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "ذَنبِكَ", transliteration: "dhanbika", meaning: { en: "your sin", ur: "تمہارے گناہ" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and what", ur: "اور جو" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "relative" } },
      { arabic: "تَأَخَّرَ", transliteration: "taʾakhkhara", meaning: { en: "will follow", ur: "پیچھے رہا" }, pos: "V", posLabel: "V", grammar: { form: "V", root: "أ-خ-ر" } },
      { arabic: "وَيُتِمَّ", transliteration: "wayutimma", meaning: { en: "and complete", ur: "اور پوری کرے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ت-م-م", mood: "subjunctive" } },
      { arabic: "نِعْمَتَهُ", transliteration: "niʿmatahu", meaning: { en: "His favor", ur: "اپنی نعمت" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } },
      { arabic: "عَلَيْكَ", transliteration: "ʿalayka", meaning: { en: "upon you", ur: "تم پر" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "recipient" } },
      { arabic: "وَيَهْدِيَكَ", transliteration: "wayahdiyaka", meaning: { en: "and guide you", ur: "اور تمہیں چلائے" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "ه-د-ي", mood: "subjunctive" } },
      { arabic: "صِرَاطًا", transliteration: "ṣirāṭan", meaning: { en: "to a path", ur: "ایک راستے پر" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مُّسْتَقِيمًا", transliteration: "mustaqīman", meaning: { en: "straight", ur: "سیدھے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "ق-و-م" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصول + صلة' },
        { from: 10, to: 11, label: 'فعل + مفعول به' },
        { from: 9, to: 10, label: 'عطف' },
        { from: 14, to: 15, label: 'موصوف + صفت' }
      ]
    }
  },

  3: {
    ayahNumber: 3,
    text: "وَيَنصُرَكَ اللَّهُ نَصْرًا عَزِيزًا",
    words: [
      { arabic: "وَيَنصُرَكَ", transliteration: "wayanṣuraka", meaning: { en: "And help you", ur: "اور تمہاری مدد کرے" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "ن-ص-ر", mood: "subjunctive" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "نَصْرًا", transliteration: "naṣran", meaning: { en: "a help", ur: "مدد" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ن-ص-ر" } },
      { arabic: "عَزِيزًا", transliteration: "ʿazīzan", meaning: { en: "mighty", ur: "زبردست" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ]
    }
  },

  4: {
    ayahNumber: 4,
    text: "هُوَ الَّذِي أَنزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ لِيَزْدَادُوا إِيمَانًا مَّعَ إِيمَانِهِمْ",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He", ur: "وہی ہے" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "Who", ur: "جس نے" }, pos: "REL", posLabel: "REL", grammar: { gender: "masculine" } },
      { arabic: "أَنزَلَ", transliteration: "anzala", meaning: { en: "sent down", ur: "اتارا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ن-ز-ل" } },
      { arabic: "السَّكِينَةَ", transliteration: "al-sakīnata", meaning: { en: "tranquility", ur: "اطمینان" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "س-ك-ن" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "into", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "قُلُوبِ", transliteration: "qulūbi", meaning: { en: "the hearts", ur: "دلوں" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "الْمُؤْمِنِينَ", transliteration: "al-muʾminīna", meaning: { en: "of the believers", ur: "مومنوں کے" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", number: "plural" } },
      { arabic: "لِيَزْدَادُوا", transliteration: "liyazdādū", meaning: { en: "that they may increase", ur: "تاکہ بڑھیں" }, pos: "P+V", posLabel: "P+V", grammar: { form: "VIII", root: "ز-ي-د", mood: "subjunctive" } },
      { arabic: "إِيمَانًا", transliteration: "īmānan", meaning: { en: "in faith", ur: "ایمان میں" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "أ-م-ن" } },
      { arabic: "مَّعَ", transliteration: "maʿa", meaning: { en: "with", ur: "ساتھ" }, pos: "P", posLabel: "P", grammar: { role: "accompaniment" } },
      { arabic: "إِيمَانِهِمْ", transliteration: "īmānihim", meaning: { en: "their faith", ur: "ان کے ایمان کے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ]
    }
  },

  5: {
    ayahNumber: 5,
    text: "لِّيُدْخِلَ الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا",
    words: [
      { arabic: "لِّيُدْخِلَ", transliteration: "liyudkhila", meaning: { en: "That He may admit", ur: "تاکہ داخل کرے" }, pos: "P+V", posLabel: "P+V", grammar: { form: "IV", root: "د-خ-ل", mood: "subjunctive" } },
      { arabic: "الْمُؤْمِنِينَ", transliteration: "al-muʾminīna", meaning: { en: "the believing men", ur: "مومن مردوں کو" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَالْمُؤْمِنَاتِ", transliteration: "wal-muʾmināti", meaning: { en: "and believing women", ur: "اور مومن عورتوں کو" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "accusative", gender: "feminine" } },
      { arabic: "جَنَّاتٍ", transliteration: "jannātin", meaning: { en: "Gardens", ur: "جنتوں میں" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "تَجْرِي", transliteration: "tajrī", meaning: { en: "flow", ur: "بہتی ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ر-ي" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "تَحْتِهَا", transliteration: "taḥtihā", meaning: { en: "beneath them", ur: "ان کے نیچے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "locative" } },
      { arabic: "الْأَنْهَارُ", transliteration: "al-anhāru", meaning: { en: "the rivers", ur: "نہریں" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "خَالِدِينَ", transliteration: "khālidīna", meaning: { en: "abiding", ur: "ہمیشہ رہیں گے" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "خ-ل-د" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "ان میں" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "locative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'عطف' },
        { from: 5, to: 8, label: 'فعل + فاعل' }
      ]
    }
  },

  6: {
    ayahNumber: 6,
    text: "وَيُعَذِّبَ الْمُنَافِقِينَ وَالْمُنَافِقَاتِ وَالْمُشْرِكِينَ وَالْمُشْرِكَاتِ الظَّانِّينَ بِاللَّهِ ظَنَّ السَّوْءِ",
    words: [
      { arabic: "وَيُعَذِّبَ", transliteration: "wayuʿadhdhiba", meaning: { en: "And punish", ur: "اور عذاب دے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ع-ذ-ب", mood: "subjunctive" } },
      { arabic: "الْمُنَافِقِينَ", transliteration: "al-munāfiqīna", meaning: { en: "the hypocrite men", ur: "منافق مردوں کو" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَالْمُنَافِقَاتِ", transliteration: "wal-munāfiqāti", meaning: { en: "and hypocrite women", ur: "اور منافق عورتوں کو" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "accusative", gender: "feminine" } },
      { arabic: "وَالْمُشْرِكِينَ", transliteration: "wal-mushrikīna", meaning: { en: "and polytheist men", ur: "اور مشرک مردوں کو" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَالْمُشْرِكَاتِ", transliteration: "wal-mushrikāti", meaning: { en: "and polytheist women", ur: "اور مشرک عورتوں کو" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "accusative", gender: "feminine" } },
      { arabic: "الظَّانِّينَ", transliteration: "al-ẓānnīna", meaning: { en: "those who think", ur: "جو گمان رکھتے ہیں" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ظ-ن-ن" } },
      { arabic: "بِاللَّهِ", transliteration: "billāhi", meaning: { en: "about Allah", ur: "اللہ کے بارے میں" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "ظَنَّ", transliteration: "ẓanna", meaning: { en: "an assumption", ur: "گمان" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ظ-ن-ن" } },
      { arabic: "السَّوْءِ", transliteration: "al-sawʾi", meaning: { en: "of evil", ur: "برا" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 1, to: 2, label: 'حال' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  7: {
    ayahNumber: 7,
    text: "وَلِلَّهِ جُنُودُ السَّمَاوَاتِ وَالْأَرْضِ وَكَانَ اللَّهُ عَزِيزًا حَكِيمًا",
    words: [
      { arabic: "وَلِلَّهِ", transliteration: "walillāhi", meaning: { en: "And to Allah belong", ur: "اور اللہ کی ہیں" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { case: "genitive" } },
      { arabic: "جُنُودُ", transliteration: "junūdu", meaning: { en: "the hosts", ur: "فوجیں" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "of the heavens", ur: "آسمانوں" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین کی" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "وَكَانَ", transliteration: "wakāna", meaning: { en: "And is", ur: "اور ہے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "kāna" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "عَزِيزًا", transliteration: "ʿazīzan", meaning: { en: "Almighty", ur: "غالب" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "حَكِيمًا", transliteration: "ḥakīman", meaning: { en: "Wise", ur: "حکمت والا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'عطف' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 5, to: 7, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ]
    }
  },

  8: {
    ayahNumber: 8,
    text: "إِنَّا أَرْسَلْنَاكَ شَاهِدًا وَمُبَشِّرًا وَنَذِيرًا",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بیشک ہم نے" }, pos: "PART+PRON", posLabel: "PART+PRON", grammar: { type: "emphatic" } },
      { arabic: "أَرْسَلْنَاكَ", transliteration: "arsalnāka", meaning: { en: "have sent you", ur: "تمہیں بھیجا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "ر-س-ل" } },
      { arabic: "شَاهِدًا", transliteration: "shāhidan", meaning: { en: "as a witness", ur: "گواہ بنا کر" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ش-ه-د" } },
      { arabic: "وَمُبَشِّرًا", transliteration: "wamubashshiran", meaning: { en: "and bringer of good tidings", ur: "اور خوشخبری دینے والا" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "accusative", root: "ب-ش-ر" } },
      { arabic: "وَنَذِيرًا", transliteration: "wanadhīran", meaning: { en: "and warner", ur: "اور ڈرانے والا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ن-ذ-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 5, label: 'عطف' }
      ]
    }
  },

  9: {
    ayahNumber: 9,
    text: "لِّتُؤْمِنُوا بِاللَّهِ وَرَسُولِهِ وَتُعَزِّرُوهُ وَتُوَقِّرُوهُ وَتُسَبِّحُوهُ بُكْرَةً وَأَصِيلًا",
    words: [
      { arabic: "لِّتُؤْمِنُوا", transliteration: "lituʾminū", meaning: { en: "That you may believe", ur: "تاکہ تم ایمان لاؤ" }, pos: "P+V", posLabel: "P+V", grammar: { form: "IV", root: "أ-م-ن", mood: "subjunctive" } },
      { arabic: "بِاللَّهِ", transliteration: "billāhi", meaning: { en: "in Allah", ur: "اللہ پر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَرَسُولِهِ", transliteration: "warasūlihi", meaning: { en: "and His Messenger", ur: "اور اس کے رسول پر" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "genitive" } },
      { arabic: "وَتُعَزِّرُوهُ", transliteration: "watuʿazzirūhu", meaning: { en: "and assist him", ur: "اور اس کی مدد کرو" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "II", root: "ع-ز-ر" } },
      { arabic: "وَتُوَقِّرُوهُ", transliteration: "watuwaqqirūhu", meaning: { en: "and honor him", ur: "اور اس کی تعظیم کرو" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "II", root: "و-ق-ر" } },
      { arabic: "وَتُسَبِّحُوهُ", transliteration: "watusabbiḥūhu", meaning: { en: "and exalt Him", ur: "اور اس کی تسبیح کرو" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "II", root: "س-ب-ح" } },
      { arabic: "بُكْرَةً", transliteration: "bukratan", meaning: { en: "morning", ur: "صبح" }, pos: "N", posLabel: "N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "وَأَصِيلًا", transliteration: "waʾaṣīlan", meaning: { en: "and evening", ur: "اور شام" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", role: "temporal" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'عطف' }
      ]
    }
  },

  10: {
    ayahNumber: 10,
    text: "إِنَّ الَّذِينَ يُبَايِعُونَكَ إِنَّمَا يُبَايِعُونَ اللَّهَ يَدُ اللَّهِ فَوْقَ أَيْدِيهِمْ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "PART", posLabel: "PART", grammar: { type: "emphatic" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "يُبَايِعُونَكَ", transliteration: "yubāyiʿūnaka", meaning: { en: "give pledge to you", ur: "تم سے بیعت کرتے ہیں" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "III", root: "ب-ي-ع" } },
      { arabic: "إِنَّمَا", transliteration: "innamā", meaning: { en: "only", ur: "وہ تو" }, pos: "PART", posLabel: "PART", grammar: { type: "restrictive" } },
      { arabic: "يُبَايِعُونَ", transliteration: "yubāyiʿūna", meaning: { en: "give pledge", ur: "بیعت کرتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "III", root: "ب-ي-ع" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "to Allah", ur: "اللہ سے" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "يَدُ", transliteration: "yadu", meaning: { en: "The Hand", ur: "ہاتھ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کا" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "فَوْقَ", transliteration: "fawqa", meaning: { en: "is over", ur: "اوپر ہے" }, pos: "N", posLabel: "N", grammar: { role: "preposition" } },
      { arabic: "أَيْدِيهِمْ", transliteration: "aydīhim", meaning: { en: "their hands", ur: "ان کے ہاتھوں کے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  11: {
    ayahNumber: 11,
    text: "سَيَقُولُ لَكَ الْمُخَلَّفُونَ مِنَ الْأَعْرَابِ شَغَلَتْنَا أَمْوَالُنَا وَأَهْلُونَا فَاسْتَغْفِرْ لَنَا يَقُولُونَ بِأَلْسِنَتِهِم مَّا لَيْسَ فِي قُلُوبِهِمْ",
    words: [
      { arabic: "سَيَقُولُ", transliteration: "sayaqūlu", meaning: { en: "Will say", ur: "عنقریب کہیں گے" }, pos: "PART+V", posLabel: "PART+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "لَكَ", transliteration: "laka", meaning: { en: "to you", ur: "تم سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "recipient" } },
      { arabic: "الْمُخَلَّفُونَ", transliteration: "al-mukhallafūna", meaning: { en: "those who remained behind", ur: "پیچھے رہ جانے والے" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "خ-ل-ف" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "میں سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْأَعْرَابِ", transliteration: "al-aʿrābi", meaning: { en: "the bedouins", ur: "دیہاتی عربوں" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "شَغَلَتْنَا", transliteration: "shaghalatnā", meaning: { en: "Occupied us", ur: "ہمیں مصروف رکھا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ش-غ-ل" } },
      { arabic: "أَمْوَالُنَا", transliteration: "amwālunā", meaning: { en: "our properties", ur: "ہمارے مال نے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "nominative", number: "plural" } },
      { arabic: "وَأَهْلُونَا", transliteration: "waʾahlūnā", meaning: { en: "and our families", ur: "اور ہمارے گھر والوں نے" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "nominative", number: "plural" } },
      { arabic: "فَاسْتَغْفِرْ", transliteration: "fastaghfir", meaning: { en: "so ask forgiveness", ur: "تو معافی مانگو" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "X", root: "غ-ف-ر", mood: "imperative" } },
      { arabic: "لَنَا", transliteration: "lanā", meaning: { en: "for us", ur: "ہمارے لیے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "benefactive" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "They say", ur: "یہ کہتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "بِأَلْسِنَتِهِم", transliteration: "biʾalsinatihim", meaning: { en: "with their tongues", ur: "اپنی زبانوں سے" }, pos: "P+N+PRON", posLabel: "P+N+PRON", grammar: { case: "genitive", number: "plural" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "what", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "لَيْسَ", transliteration: "laysa", meaning: { en: "is not", ur: "نہیں ہے" }, pos: "V", posLabel: "V", grammar: { type: "negative verb" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "قُلُوبِهِمْ", transliteration: "qulūbihim", meaning: { en: "their hearts", ur: "ان کے دلوں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'عطف' },
        { from: 15, to: 16, label: 'جار + مجرور' }
      ]
    }
  },

  12: {
    ayahNumber: 12,
    text: "بَلْ ظَنَنتُمْ أَن لَّن يَنقَلِبَ الرَّسُولُ وَالْمُؤْمِنُونَ إِلَىٰ أَهْلِيهِمْ أَبَدًا وَزُيِّنَ ذَٰلِكَ فِي قُلُوبِكُمْ وَظَنَنتُمْ ظَنَّ السَّوْءِ وَكُنتُمْ قَوْمًا بُورًا",
    words: [
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Rather", ur: "بلکہ" }, pos: "PART", posLabel: "PART", grammar: { type: "correction" } },
      { arabic: "ظَنَنتُمْ", transliteration: "ẓanantum", meaning: { en: "you thought", ur: "تم نے گمان کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ظ-ن-ن" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "کہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "لَّن", transliteration: "lan", meaning: { en: "never", ur: "ہرگز نہ" }, pos: "NEG", posLabel: "NEG", grammar: { type: "emphatic future negation" } },
      { arabic: "يَنقَلِبَ", transliteration: "yanqaliba", meaning: { en: "would return", ur: "واپس آئیں گے" }, pos: "V", posLabel: "V", grammar: { form: "VII", root: "ق-ل-ب", mood: "subjunctive" } },
      { arabic: "الرَّسُولُ", transliteration: "al-rasūlu", meaning: { en: "the Messenger", ur: "رسول" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "وَالْمُؤْمِنُونَ", transliteration: "wal-muʾminūna", meaning: { en: "and the believers", ur: "اور مومنین" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "nominative", number: "plural" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "أَهْلِيهِمْ", transliteration: "ahlīhim", meaning: { en: "their families", ur: "اپنے گھر والوں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "plural" } },
      { arabic: "أَبَدًا", transliteration: "abadan", meaning: { en: "ever", ur: "کبھی بھی" }, pos: "N", posLabel: "N", grammar: { case: "accusative", role: "temporal" } },
      { arabic: "وَزُيِّنَ", transliteration: "wazuyyina", meaning: { en: "and that was made appealing", ur: "اور سجا دیا گیا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ز-ي-ن", voice: "passive" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "یہ بات" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "قُلُوبِكُمْ", transliteration: "qulūbikum", meaning: { en: "your hearts", ur: "تمہارے دلوں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَظَنَنتُمْ", transliteration: "waẓanantum", meaning: { en: "and you thought", ur: "اور تم نے سوچا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ظ-ن-ن" } },
      { arabic: "ظَنَّ", transliteration: "ẓanna", meaning: { en: "an assumption", ur: "بدگمانی" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ظ-ن-ن" } },
      { arabic: "السَّوْءِ", transliteration: "al-sawʾi", meaning: { en: "of evil", ur: "بری" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَكُنتُمْ", transliteration: "wakuntum", meaning: { en: "and you were", ur: "اور تم تھے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "kāna" } },
      { arabic: "قَوْمًا", transliteration: "qawman", meaning: { en: "a people", ur: "ایسے لوگ" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "بُورًا", transliteration: "būran", meaning: { en: "ruined", ur: "ہلاک ہونے والے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'عطف' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' },
        { from: 19, to: 20, label: 'موصوف + صفت' }
      ]
    }
  },

  13: {
    ayahNumber: 13,
    text: "وَمَن لَّمْ يُؤْمِن بِاللَّهِ وَرَسُولِهِ فَإِنَّا أَعْتَدْنَا لِلْكَافِرِينَ سَعِيرًا",
    words: [
      { arabic: "وَمَن", transliteration: "waman", meaning: { en: "And whoever", ur: "اور جو" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "conditional" } },
      { arabic: "لَّمْ", transliteration: "lam", meaning: { en: "does not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "jussive negation" } },
      { arabic: "يُؤْمِن", transliteration: "yuʾmin", meaning: { en: "believe", ur: "ایمان لائے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "أ-م-ن", mood: "jussive" } },
      { arabic: "بِاللَّهِ", transliteration: "billāhi", meaning: { en: "in Allah", ur: "اللہ پر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "وَرَسُولِهِ", transliteration: "warasūlihi", meaning: { en: "and His Messenger", ur: "اور اس کے رسول پر" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "genitive" } },
      { arabic: "فَإِنَّا", transliteration: "faʾinnā", meaning: { en: "then indeed, We", ur: "تو بیشک ہم نے" }, pos: "CONJ+PART+PRON", posLabel: "CONJ+PART+PRON", grammar: { type: "emphatic" } },
      { arabic: "أَعْتَدْنَا", transliteration: "aʿtadnā", meaning: { en: "have prepared", ur: "تیار کر رکھی ہے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ع-ت-د" } },
      { arabic: "لِلْكَافِرِينَ", transliteration: "lil-kāfirīna", meaning: { en: "for the disbelievers", ur: "کافروں کے لیے" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", number: "plural" } },
      { arabic: "سَعِيرًا", transliteration: "saʿīran", meaning: { en: "a Blaze", ur: "بھڑکتی آگ" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "س-ع-ر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'عطف' },
        { from: 7, to: 9, label: 'فعل + مفعول به' }
      ]
    }
  },

  14: {
    ayahNumber: 14,
    text: "وَلِلَّهِ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ يَغْفِرُ لِمَن يَشَاءُ وَيُعَذِّبُ مَن يَشَاءُ وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا",
    words: [
      { arabic: "وَلِلَّهِ", transliteration: "walillāhi", meaning: { en: "And to Allah belongs", ur: "اور اللہ ہی کی ہے" }, pos: "CONJ+P+N", posLabel: "CONJ+P+N", grammar: { case: "genitive" } },
      { arabic: "مُلْكُ", transliteration: "mulku", meaning: { en: "the dominion", ur: "بادشاہی" }, pos: "N", posLabel: "N", grammar: { case: "nominative", root: "م-ل-ك" } },
      { arabic: "السَّمَاوَاتِ", transliteration: "al-samāwāti", meaning: { en: "of the heavens", ur: "آسمانوں" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَالْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین کی" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "يَغْفِرُ", transliteration: "yaghfiru", meaning: { en: "He forgives", ur: "وہ بخشتا ہے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "غ-ف-ر" } },
      { arabic: "لِمَن", transliteration: "liman", meaning: { en: "whom", ur: "جسے" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "يَشَاءُ", transliteration: "yashāʾu", meaning: { en: "He wills", ur: "چاہے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "وَيُعَذِّبُ", transliteration: "wayuʿadhdhibu", meaning: { en: "and punishes", ur: "اور سزا دیتا ہے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ع-ذ-ب" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "whom", ur: "جسے" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "يَشَاءُ", transliteration: "yashāʾu", meaning: { en: "He wills", ur: "چاہے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "وَكَانَ", transliteration: "wakāna", meaning: { en: "And is", ur: "اور ہے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "kāna" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "غَفُورًا", transliteration: "ghafūran", meaning: { en: "Forgiving", ur: "بخشنے والا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "رَّحِيمًا", transliteration: "raḥīman", meaning: { en: "Merciful", ur: "مہربان" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'عطف' },
        { from: 6, to: 7, label: 'موصول + صلة' },
        { from: 9, to: 10, label: 'موصول + صلة' },
        { from: 13, to: 14, label: 'موصوف + صفت' }
      ]
    }
  },

  15: {
    ayahNumber: 15,
    text: "سَيَقُولُ الْمُخَلَّفُونَ إِذَا انطَلَقْتُمْ إِلَىٰ مَغَانِمَ لِتَأْخُذُوهَا ذَرُونَا نَتَّبِعْكُمْ يُرِيدُونَ أَن يُبَدِّلُوا كَلَامَ اللَّهِ",
    words: [
      { arabic: "سَيَقُولُ", transliteration: "sayaqūlu", meaning: { en: "Will say", ur: "عنقریب کہیں گے" }, pos: "PART+V", posLabel: "PART+V", grammar: { form: "I", root: "ق-و-ل" } },
      { arabic: "الْمُخَلَّفُونَ", transliteration: "al-mukhallafūna", meaning: { en: "those who remained behind", ur: "پیچھے رہ جانے والے" }, pos: "AP", posLabel: "AP", grammar: { case: "nominative", number: "plural", root: "خ-ل-ف" } },
      { arabic: "إِذَا", transliteration: "idhā", meaning: { en: "when", ur: "جب" }, pos: "COND", posLabel: "COND", grammar: { type: "temporal" } },
      { arabic: "انطَلَقْتُمْ", transliteration: "inṭalaqtum", meaning: { en: "you set out", ur: "تم چلو" }, pos: "V", posLabel: "V", grammar: { form: "VII", root: "ط-ل-ق" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کی طرف" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "مَغَانِمَ", transliteration: "maghānima", meaning: { en: "war gains", ur: "مالِ غنیمت" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "غ-ن-م" } },
      { arabic: "لِتَأْخُذُوهَا", transliteration: "litaʾkhudhūhā", meaning: { en: "to take them", ur: "اسے لینے کے لیے" }, pos: "P+V+PRON", posLabel: "P+V+PRON", grammar: { form: "I", root: "أ-خ-ذ", mood: "subjunctive" } },
      { arabic: "ذَرُونَا", transliteration: "dharūnā", meaning: { en: "Let us", ur: "ہمیں چھوڑو" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "و-ذ-ر", mood: "imperative" } },
      { arabic: "نَتَّبِعْكُمْ", transliteration: "nattabiʿkum", meaning: { en: "follow you", ur: "ہم تمہارے پیچھے چلیں" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "VIII", root: "ت-ب-ع", mood: "jussive" } },
      { arabic: "يُرِيدُونَ", transliteration: "yurīdūna", meaning: { en: "They wish", ur: "یہ چاہتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-و-د" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "to", ur: "کہ" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "يُبَدِّلُوا", transliteration: "yubaddilū", meaning: { en: "change", ur: "بدل ڈالیں" }, pos: "V", posLabel: "V", grammar: { form: "II", root: "ب-د-ل", mood: "subjunctive" } },
      { arabic: "كَلَامَ", transliteration: "kalāma", meaning: { en: "the Words", ur: "کلام" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کا" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + مفعول به' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  16: {
    ayahNumber: 16,
    text: "قُل لِّلْمُخَلَّفِينَ مِنَ الْأَعْرَابِ سَتُدْعَوْنَ إِلَىٰ قَوْمٍ أُولِي بَأْسٍ شَدِيدٍ تُقَاتِلُونَهُمْ أَوْ يُسْلِمُونَ",
    words: [
      { arabic: "قُل", transliteration: "qul", meaning: { en: "Say", ur: "کہہ دو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-و-ل", mood: "imperative" } },
      { arabic: "لِّلْمُخَلَّفِينَ", transliteration: "lil-mukhallafīna", meaning: { en: "to those who remained behind", ur: "پیچھے رہ جانے والوں سے" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", number: "plural", root: "خ-ل-ف" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "میں سے" }, pos: "P", posLabel: "P", grammar: { role: "partitive" } },
      { arabic: "الْأَعْرَابِ", transliteration: "al-aʿrābi", meaning: { en: "the bedouins", ur: "دیہاتی عربوں" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural" } },
      { arabic: "سَتُدْعَوْنَ", transliteration: "satudʿawna", meaning: { en: "You will be called", ur: "عنقریب تم بلائے جاؤ گے" }, pos: "PART+V", posLabel: "PART+V", grammar: { form: "I", root: "د-ع-و", voice: "passive" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to fight", ur: "کی طرف" }, pos: "P", posLabel: "P", grammar: { role: "direction" } },
      { arabic: "قَوْمٍ", transliteration: "qawmin", meaning: { en: "a people", ur: "ایک قوم" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أُولِي", transliteration: "ulī", meaning: { en: "possessing", ur: "والے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "بَأْسٍ", transliteration: "baʾsin", meaning: { en: "great military might", ur: "زبردست لڑائی" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "شَدِيدٍ", transliteration: "shadīdin", meaning: { en: "great", ur: "سخت" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive" } },
      { arabic: "تُقَاتِلُونَهُمْ", transliteration: "tuqātilūnahum", meaning: { en: "you will fight them", ur: "تم ان سے لڑو گے" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "III", root: "ق-ت-ل" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "disjunction" } },
      { arabic: "يُسْلِمُونَ", transliteration: "yuslimūna", meaning: { en: "they will submit", ur: "وہ اسلام لے آئیں" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "س-ل-م" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ]
    }
  },

  17: {
    ayahNumber: 17,
    text: "لَّيْسَ عَلَى الْأَعْمَىٰ حَرَجٌ وَلَا عَلَى الْأَعْرَجِ حَرَجٌ وَلَا عَلَى الْمَرِيضِ حَرَجٌ وَمَن يُطِعِ اللَّهَ وَرَسُولَهُ يُدْخِلْهُ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ",
    words: [
      { arabic: "لَّيْسَ", transliteration: "laysa", meaning: { en: "There is not", ur: "نہیں ہے" }, pos: "V", posLabel: "V", grammar: { type: "negative verb" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْأَعْمَىٰ", transliteration: "al-aʿmā", meaning: { en: "the blind", ur: "اندھے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive" } },
      { arabic: "حَرَجٌ", transliteration: "ḥarajun", meaning: { en: "blame", ur: "کوئی حرج" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْأَعْرَجِ", transliteration: "al-aʿraji", meaning: { en: "the lame", ur: "لنگڑے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive" } },
      { arabic: "حَرَجٌ", transliteration: "ḥarajun", meaning: { en: "blame", ur: "کوئی حرج" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and not", ur: "اور نہ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْمَرِيضِ", transliteration: "al-marīḍi", meaning: { en: "the ill", ur: "بیمار" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive" } },
      { arabic: "حَرَجٌ", transliteration: "ḥarajun", meaning: { en: "blame", ur: "کوئی حرج" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "وَمَن", transliteration: "waman", meaning: { en: "And whoever", ur: "اور جو" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { type: "conditional" } },
      { arabic: "يُطِعِ", transliteration: "yuṭiʿi", meaning: { en: "obeys", ur: "اطاعت کرے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ط-و-ع", mood: "jussive" } },
      { arabic: "اللَّهَ", transliteration: "Allāha", meaning: { en: "Allah", ur: "اللہ کی" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "وَرَسُولَهُ", transliteration: "warasūlahu", meaning: { en: "and His Messenger", ur: "اور اس کے رسول کی" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "accusative" } },
      { arabic: "يُدْخِلْهُ", transliteration: "yudkhilhu", meaning: { en: "He will admit him", ur: "اسے داخل کرے گا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "د-خ-ل", mood: "jussive" } },
      { arabic: "جَنَّاتٍ", transliteration: "jannātin", meaning: { en: "Gardens", ur: "جنتوں میں" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "تَجْرِي", transliteration: "tajrī", meaning: { en: "flow", ur: "بہتی ہیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ر-ي" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "تَحْتِهَا", transliteration: "taḥtihā", meaning: { en: "beneath them", ur: "نیچے" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "locative" } },
      { arabic: "الْأَنْهَارُ", transliteration: "al-anhāru", meaning: { en: "the rivers", ur: "نہریں" }, pos: "N", posLabel: "N", grammar: { case: "nominative", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'فعل + مفعول به' },
        { from: 15, to: 16, label: 'عطف' },
        { from: 19, to: 22, label: 'فعل + فاعل' }
      ]
    }
  },

  18: {
    ayahNumber: 18,
    text: "لَّقَدْ رَضِيَ اللَّهُ عَنِ الْمُؤْمِنِينَ إِذْ يُبَايِعُونَكَ تَحْتَ الشَّجَرَةِ فَعَلِمَ مَا فِي قُلُوبِهِمْ فَأَنزَلَ السَّكِينَةَ عَلَيْهِمْ وَأَثَابَهُمْ فَتْحًا قَرِيبًا",
    words: [
      { arabic: "لَّقَدْ", transliteration: "laqad", meaning: { en: "Certainly", ur: "یقیناً" }, pos: "PART", posLabel: "PART", grammar: { type: "emphatic" } },
      { arabic: "رَضِيَ", transliteration: "raḍiya", meaning: { en: "was pleased", ur: "راضی ہوا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ر-ض-ي" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "with", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْمُؤْمِنِينَ", transliteration: "al-muʾminīna", meaning: { en: "the believers", ur: "مومنوں" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", number: "plural" } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "جب" }, pos: "COND", posLabel: "COND", grammar: { type: "temporal" } },
      { arabic: "يُبَايِعُونَكَ", transliteration: "yubāyiʿūnaka", meaning: { en: "they pledged allegiance to you", ur: "وہ تم سے بیعت کر رہے تھے" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "III", root: "ب-ي-ع" } },
      { arabic: "تَحْتَ", transliteration: "taḥta", meaning: { en: "under", ur: "نیچے" }, pos: "N", posLabel: "N", grammar: { role: "locative" } },
      { arabic: "الشَّجَرَةِ", transliteration: "al-shajarati", meaning: { en: "the tree", ur: "درخت کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "فَعَلِمَ", transliteration: "faʿalima", meaning: { en: "and He knew", ur: "تو اس نے جانا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ع-ل-م" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { type: "relative" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "was in", ur: "میں تھا" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "قُلُوبِهِمْ", transliteration: "qulūbihim", meaning: { en: "their hearts", ur: "ان کے دلوں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "plural" } },
      { arabic: "فَأَنزَلَ", transliteration: "faʾanzala", meaning: { en: "so He sent down", ur: "تو اتارا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ن-ز-ل" } },
      { arabic: "السَّكِينَةَ", transliteration: "al-sakīnata", meaning: { en: "tranquility", ur: "اطمینان" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "س-ك-ن" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "upon them", ur: "ان پر" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "recipient" } },
      { arabic: "وَأَثَابَهُمْ", transliteration: "waʾathābahum", meaning: { en: "and rewarded them", ur: "اور انہیں ثواب دیا" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "IV", root: "ث-و-ب" } },
      { arabic: "فَتْحًا", transliteration: "fatḥan", meaning: { en: "a victory", ur: "فتح" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ف-ت-ح" } },
      { arabic: "قَرِيبًا", transliteration: "qarīban", meaning: { en: "near", ur: "قریب" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'فعل + مفعول به' },
        { from: 18, to: 19, label: 'موصوف + صفت' }
      ]
    }
  },

  19: {
    ayahNumber: 19,
    text: "وَمَغَانِمَ كَثِيرَةً يَأْخُذُونَهَا وَكَانَ اللَّهُ عَزِيزًا حَكِيمًا",
    words: [
      { arabic: "وَمَغَانِمَ", transliteration: "wamaghānima", meaning: { en: "And much war booty", ur: "اور بہت سا مالِ غنیمت" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", number: "plural", root: "غ-ن-م" } },
      { arabic: "كَثِيرَةً", transliteration: "kathīratan", meaning: { en: "much", ur: "بہت" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "يَأْخُذُونَهَا", transliteration: "yaʾkhudhūnahā", meaning: { en: "they will take", ur: "وہ لیں گے" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "أ-خ-ذ" } },
      { arabic: "وَكَانَ", transliteration: "wakāna", meaning: { en: "And is", ur: "اور ہے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "kāna" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "عَزِيزًا", transliteration: "ʿazīzan", meaning: { en: "Almighty", ur: "غالب" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "حَكِيمًا", transliteration: "ḥakīman", meaning: { en: "Wise", ur: "حکمت والا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفت' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ]
    }
  },

  20: {
    ayahNumber: 20,
    text: "وَعَدَكُمُ اللَّهُ مَغَانِمَ كَثِيرَةً تَأْخُذُونَهَا فَعَجَّلَ لَكُمْ هَٰذِهِ وَكَفَّ أَيْدِيَ النَّاسِ عَنكُمْ وَلِتَكُونَ آيَةً لِّلْمُؤْمِنِينَ وَيَهْدِيَكُمْ صِرَاطًا مُّسْتَقِيمًا",
    words: [
      { arabic: "وَعَدَكُمُ", transliteration: "waʿadakumu", meaning: { en: "Has promised you", ur: "تم سے وعدہ کیا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "و-ع-د" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ نے" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "مَغَانِمَ", transliteration: "maghānima", meaning: { en: "war booty", ur: "مالِ غنیمت" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural", root: "غ-ن-م" } },
      { arabic: "كَثِيرَةً", transliteration: "kathīratan", meaning: { en: "much", ur: "بہت" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "تَأْخُذُونَهَا", transliteration: "taʾkhudhūnahā", meaning: { en: "you will take", ur: "تم لو گے" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "أ-خ-ذ" } },
      { arabic: "فَعَجَّلَ", transliteration: "faʿajjala", meaning: { en: "so He hastened", ur: "تو جلدی دے دی" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "II", root: "ع-ج-ل" } },
      { arabic: "لَكُمْ", transliteration: "lakum", meaning: { en: "for you", ur: "تمہیں" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "benefactive" } },
      { arabic: "هَٰذِهِ", transliteration: "hādhihi", meaning: { en: "this", ur: "یہ" }, pos: "DEM", posLabel: "DEM", grammar: { type: "demonstrative", gender: "feminine" } },
      { arabic: "وَكَفَّ", transliteration: "wakaffa", meaning: { en: "and withheld", ur: "اور روک لیے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ك-ف-ف" } },
      { arabic: "أَيْدِيَ", transliteration: "aydiya", meaning: { en: "the hands", ur: "ہاتھ" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "النَّاسِ", transliteration: "al-nāsi", meaning: { en: "of people", ur: "لوگوں کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "عَنكُمْ", transliteration: "ʿankum", meaning: { en: "from you", ur: "تم سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "source" } },
      { arabic: "وَلِتَكُونَ", transliteration: "walitakūna", meaning: { en: "and that it may be", ur: "اور تاکہ ہو" }, pos: "CONJ+P+V", posLabel: "CONJ+P+V", grammar: { root: "ك-و-ن", mood: "subjunctive" } },
      { arabic: "آيَةً", transliteration: "āyatan", meaning: { en: "a sign", ur: "نشانی" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "لِّلْمُؤْمِنِينَ", transliteration: "lil-muʾminīna", meaning: { en: "for the believers", ur: "مومنوں کے لیے" }, pos: "P+AP", posLabel: "P+AP", grammar: { case: "genitive", number: "plural" } },
      { arabic: "وَيَهْدِيَكُمْ", transliteration: "wayahdiyakum", meaning: { en: "and guide you", ur: "اور تمہیں چلائے" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "ه-د-ي", mood: "subjunctive" } },
      { arabic: "صِرَاطًا", transliteration: "ṣirāṭan", meaning: { en: "to a path", ur: "سیدھے راستے پر" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "مُّسْتَقِيمًا", transliteration: "mustaqīman", meaning: { en: "straight", ur: "سیدھے" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative", root: "ق-و-م" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'موصوف + صفت' },
        { from: 9, to: 10, label: 'فعل + مفعول به' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'موصوف + صفت' }
      ]
    }
  },

  21: {
    ayahNumber: 21,
    text: "وَأُخْرَىٰ لَمْ تَقْدِرُوا عَلَيْهَا قَدْ أَحَاطَ اللَّهُ بِهَا وَكَانَ اللَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرًا",
    words: [
      { arabic: "وَأُخْرَىٰ", transliteration: "waukhrā", meaning: { en: "And other gains", ur: "اور دوسری" }, pos: "CONJ+ADJ", posLabel: "CONJ+ADJ", grammar: { case: "nominative", gender: "feminine" } },
      { arabic: "لَمْ", transliteration: "lam", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { type: "jussive negation" } },
      { arabic: "تَقْدِرُوا", transliteration: "taqdirū", meaning: { en: "you had power", ur: "تم قابو پا سکے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ق-د-ر", mood: "jussive" } },
      { arabic: "عَلَيْهَا", transliteration: "ʿalayhā", meaning: { en: "over it", ur: "اس پر" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "already", ur: "بیشک" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "أَحَاطَ", transliteration: "aḥāṭa", meaning: { en: "has encompassed", ur: "گھیرے میں لے لیا ہے" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ح-و-ط" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ نے" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "بِهَا", transliteration: "bihā", meaning: { en: "it", ur: "اسے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "وَكَانَ", transliteration: "wakāna", meaning: { en: "And is", ur: "اور ہے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "kāna" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "كُلِّ", transliteration: "kulli", meaning: { en: "every", ur: "ہر" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "شَيْءٍ", transliteration: "shayʾin", meaning: { en: "thing", ur: "چیز" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "قَدِيرًا", transliteration: "qadīran", meaning: { en: "Competent", ur: "قدرت رکھنے والا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  22: {
    ayahNumber: 22,
    text: "وَلَوْ قَاتَلَكُمُ الَّذِينَ كَفَرُوا لَوَلَّوُا الْأَدْبَارَ ثُمَّ لَا يَجِدُونَ وَلِيًّا وَلَا نَصِيرًا",
    words: [
      { arabic: "وَلَوْ", transliteration: "walaw", meaning: { en: "And if", ur: "اور اگر" }, pos: "CONJ+COND", posLabel: "CONJ+COND", grammar: { type: "hypothetical" } },
      { arabic: "قَاتَلَكُمُ", transliteration: "qātalakumu", meaning: { en: "had fought you", ur: "تم سے لڑتے" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "III", root: "ق-ت-ل" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کافر ہوئے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "لَوَلَّوُا", transliteration: "lawallawu", meaning: { en: "they would have turned", ur: "تو ضرور پیٹھ پھیر جاتے" }, pos: "PART+V", posLabel: "PART+V", grammar: { form: "II", root: "و-ل-ي" } },
      { arabic: "الْأَدْبَارَ", transliteration: "al-adbāra", meaning: { en: "their backs", ur: "پیٹھ دکھا کر" }, pos: "N", posLabel: "N", grammar: { case: "accusative", number: "plural" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "sequential" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہ" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "يَجِدُونَ", transliteration: "yajidūna", meaning: { en: "they would find", ur: "پاتے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "و-ج-د" } },
      { arabic: "وَلِيًّا", transliteration: "waliyyan", meaning: { en: "a protector", ur: "کوئی حمایتی" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "و-ل-ي" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "or", ur: "اور نہ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "negative" } },
      { arabic: "نَصِيرًا", transliteration: "naṣīran", meaning: { en: "a helper", ur: "مددگار" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ن-ص-ر" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 8, to: 9, label: 'نفی + فعل' },
        { from: 10, to: 12, label: 'عطف' }
      ]
    }
  },

  23: {
    ayahNumber: 23,
    text: "سُنَّةَ اللَّهِ الَّتِي قَدْ خَلَتْ مِن قَبْلُ وَلَن تَجِدَ لِسُنَّةِ اللَّهِ تَبْدِيلًا",
    words: [
      { arabic: "سُنَّةَ", transliteration: "sunnata", meaning: { en: "The established way", ur: "سنت" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "س-ن-ن" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کی" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "الَّتِي", transliteration: "allatī", meaning: { en: "which", ur: "جو" }, pos: "REL", posLabel: "REL", grammar: { gender: "feminine" } },
      { arabic: "قَدْ", transliteration: "qad", meaning: { en: "indeed", ur: "بیشک" }, pos: "PART", posLabel: "PART", grammar: { type: "emphasis" } },
      { arabic: "خَلَتْ", transliteration: "khalat", meaning: { en: "has passed", ur: "پہلے سے چلی آ رہی ہے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-ل-و" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "قَبْلُ", transliteration: "qablu", meaning: { en: "before", ur: "پہلے" }, pos: "N", posLabel: "N", grammar: { role: "temporal" } },
      { arabic: "وَلَن", transliteration: "walan", meaning: { en: "and never", ur: "اور ہرگز نہ" }, pos: "CONJ+NEG", posLabel: "CONJ+NEG", grammar: { type: "emphatic future negation" } },
      { arabic: "تَجِدَ", transliteration: "tajida", meaning: { en: "you will find", ur: "تم پاؤ گے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "و-ج-د", mood: "subjunctive" } },
      { arabic: "لِسُنَّةِ", transliteration: "lisunnati", meaning: { en: "in the way", ur: "سنت میں" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "س-ن-ن" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کی" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "تَبْدِيلًا", transliteration: "tabdīlan", meaning: { en: "any change", ur: "کوئی تبدیلی" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ب-د-ل" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 5, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'نفی + فعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ]
    }
  },

  24: {
    ayahNumber: 24,
    text: "وَهُوَ الَّذِي كَفَّ أَيْدِيَهُمْ عَنكُمْ وَأَيْدِيَكُمْ عَنْهُم بِبَطْنِ مَكَّةَ مِن بَعْدِ أَنْ أَظْفَرَكُمْ عَلَيْهِمْ وَكَانَ اللَّهُ بِمَا تَعْمَلُونَ بَصِيرًا",
    words: [
      { arabic: "وَهُوَ", transliteration: "wahuwa", meaning: { en: "And He is", ur: "اور وہی ہے" }, pos: "CONJ+PRON", posLabel: "CONJ+PRON", grammar: { person: "3rd" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "the One who", ur: "جس نے" }, pos: "REL", posLabel: "REL", grammar: { gender: "masculine" } },
      { arabic: "كَفَّ", transliteration: "kaffa", meaning: { en: "withheld", ur: "روکا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ف" } },
      { arabic: "أَيْدِيَهُمْ", transliteration: "aydiyahum", meaning: { en: "their hands", ur: "ان کے ہاتھ" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } },
      { arabic: "عَنكُمْ", transliteration: "ʿankum", meaning: { en: "from you", ur: "تم سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "source" } },
      { arabic: "وَأَيْدِيَكُمْ", transliteration: "waʾaydiyakum", meaning: { en: "and your hands", ur: "اور تمہارے ہاتھ" }, pos: "CONJ+N+PRON", posLabel: "CONJ+N+PRON", grammar: { case: "accusative", number: "plural" } },
      { arabic: "عَنْهُم", transliteration: "ʿanhum", meaning: { en: "from them", ur: "ان سے" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "source" } },
      { arabic: "بِبَطْنِ", transliteration: "bibaṭni", meaning: { en: "within", ur: "کے اندر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "مَكَّةَ", transliteration: "makkata", meaning: { en: "Makkah", ur: "مکہ" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "after", ur: "بعد" }, pos: "P", posLabel: "P", grammar: { role: "temporal" } },
      { arabic: "بَعْدِ", transliteration: "baʿdi", meaning: { en: "after", ur: "کے بعد" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "أَنْ", transliteration: "an", meaning: { en: "that", ur: "جب" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "أَظْفَرَكُمْ", transliteration: "aẓfarakum", meaning: { en: "He gave you victory", ur: "تمہیں غلبہ دیا" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "IV", root: "ظ-ف-ر" } },
      { arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", meaning: { en: "over them", ur: "ان پر" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "preposition" } },
      { arabic: "وَكَانَ", transliteration: "wakāna", meaning: { en: "And is", ur: "اور ہے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { type: "kāna" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "of what", ur: "جو" }, pos: "P+REL", posLabel: "P+REL", grammar: { type: "relative" } },
      { arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", meaning: { en: "you do", ur: "تم کرتے ہو" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ع-م-ل" } },
      { arabic: "بَصِيرًا", transliteration: "baṣīran", meaning: { en: "All-Seeing", ur: "خوب دیکھنے والا" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 4, to: 6, label: 'عطف' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'موصول + صلة' }
      ]
    }
  },

  25: {
    ayahNumber: 25,
    text: "هُمُ الَّذِينَ كَفَرُوا وَصَدُّوكُمْ عَنِ الْمَسْجِدِ الْحَرَامِ وَالْهَدْيَ مَعْكُوفًا أَن يَبْلُغَ مَحِلَّهُ",
    words: [
      { arabic: "هُمُ", transliteration: "humu", meaning: { en: "They are", ur: "یہ وہ ہیں" }, pos: "PRON", posLabel: "PRON", grammar: { type: "personal", number: "plural" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جنہوں نے" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "وَصَدُّوكُمْ", transliteration: "waṣaddūkum", meaning: { en: "and obstructed you", ur: "اور تمہیں روکا" }, pos: "CONJ+V+PRON", posLabel: "CONJ+V+PRON", grammar: { form: "I", root: "ص-د-د" } },
      { arabic: "عَنِ", transliteration: "ʿani", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "الْمَسْجِدِ", transliteration: "al-masjidi", meaning: { en: "al-Masjid", ur: "مسجد" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "س-ج-د" } },
      { arabic: "الْحَرَامِ", transliteration: "al-ḥarāmi", meaning: { en: "al-Haram", ur: "الحرام" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "genitive" } },
      { arabic: "وَالْهَدْيَ", transliteration: "wal-hadya", meaning: { en: "and the sacrificial animals", ur: "اور قربانی کے جانوروں کو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ه-د-ي" } },
      { arabic: "مَعْكُوفًا", transliteration: "maʿkūfan", meaning: { en: "detained", ur: "روکے ہوئے" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", root: "ع-ك-ف" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "from", ur: "سے" }, pos: "CONJ", posLabel: "CONJ", grammar: { type: "subordinating" } },
      { arabic: "يَبْلُغَ", transliteration: "yablugha", meaning: { en: "reaching", ur: "پہنچیں" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ب-ل-غ", mood: "subjunctive" } },
      { arabic: "مَحِلَّهُ", transliteration: "maḥillahu", meaning: { en: "its place", ur: "اپنی جگہ" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'موصوف + صفت' },
        { from: 11, to: 12, label: 'فعل + مفعول به' }
      ]
    }
  },

  26: {
    ayahNumber: 26,
    text: "إِذْ جَعَلَ الَّذِينَ كَفَرُوا فِي قُلُوبِهِمُ الْحَمِيَّةَ حَمِيَّةَ الْجَاهِلِيَّةِ فَأَنزَلَ اللَّهُ سَكِينَتَهُ عَلَىٰ رَسُولِهِ وَعَلَى الْمُؤْمِنِينَ",
    words: [
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "When", ur: "جب" }, pos: "COND", posLabel: "COND", grammar: { type: "temporal" } },
      { arabic: "جَعَلَ", transliteration: "jaʿala", meaning: { en: "put", ur: "ڈالی" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ج-ع-ل" } },
      { arabic: "الَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جنہوں نے" }, pos: "REL", posLabel: "REL", grammar: { number: "plural" } },
      { arabic: "كَفَرُوا", transliteration: "kafarū", meaning: { en: "disbelieved", ur: "کفر کیا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ك-ف-ر" } },
      { arabic: "فِي", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "P", posLabel: "P", grammar: { role: "locative" } },
      { arabic: "قُلُوبِهِمُ", transliteration: "qulūbihimu", meaning: { en: "their hearts", ur: "اپنے دلوں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", number: "plural" } },
      { arabic: "الْحَمِيَّةَ", transliteration: "al-ḥamiyyata", meaning: { en: "the zealotry", ur: "جاہلی حمیت" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ح-م-ي" } },
      { arabic: "حَمِيَّةَ", transliteration: "ḥamiyyata", meaning: { en: "the zealotry", ur: "حمیت" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ح-م-ي" } },
      { arabic: "الْجَاهِلِيَّةِ", transliteration: "al-jāhiliyyati", meaning: { en: "of ignorance", ur: "جاہلیت کی" }, pos: "N", posLabel: "N", grammar: { case: "genitive", root: "ج-ه-ل" } },
      { arabic: "فَأَنزَلَ", transliteration: "faʾanzala", meaning: { en: "then sent down", ur: "تو اتارا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "IV", root: "ن-ز-ل" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ نے" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "سَكِينَتَهُ", transliteration: "sakīnatahu", meaning: { en: "His tranquility", ur: "اپنا اطمینان" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", root: "س-ك-ن" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "recipient" } },
      { arabic: "رَسُولِهِ", transliteration: "rasūlihi", meaning: { en: "His Messenger", ur: "اپنے رسول" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive" } },
      { arabic: "وَعَلَى", transliteration: "waʿalā", meaning: { en: "and upon", ur: "اور پر" }, pos: "CONJ+P", posLabel: "CONJ+P", grammar: { role: "recipient" } },
      { arabic: "الْمُؤْمِنِينَ", transliteration: "al-muʾminīna", meaning: { en: "the believers", ur: "مومنوں" }, pos: "AP", posLabel: "AP", grammar: { case: "genitive", number: "plural" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 10, to: 12, label: 'فعل + مفعول به' }
      ]
    }
  },

  27: {
    ayahNumber: 27,
    text: "لَّقَدْ صَدَقَ اللَّهُ رَسُولَهُ الرُّؤْيَا بِالْحَقِّ لَتَدْخُلُنَّ الْمَسْجِدَ الْحَرَامَ إِن شَاءَ اللَّهُ آمِنِينَ مُحَلِّقِينَ رُءُوسَكُمْ وَمُقَصِّرِينَ لَا تَخَافُونَ",
    words: [
      { arabic: "لَّقَدْ", transliteration: "laqad", meaning: { en: "Certainly", ur: "بیشک" }, pos: "PART", posLabel: "PART", grammar: { type: "emphatic" } },
      { arabic: "صَدَقَ", transliteration: "ṣadaqa", meaning: { en: "fulfilled", ur: "سچا کر دکھایا" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ص-د-ق" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ نے" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "رَسُولَهُ", transliteration: "rasūlahu", meaning: { en: "His Messenger", ur: "اپنے رسول کو" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } },
      { arabic: "الرُّؤْيَا", transliteration: "al-ruʾyā", meaning: { en: "the vision", ur: "خواب" }, pos: "N", posLabel: "N", grammar: { case: "accusative" } },
      { arabic: "بِالْحَقِّ", transliteration: "bil-ḥaqqi", meaning: { en: "in truth", ur: "سچا" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "لَتَدْخُلُنَّ", transliteration: "latadkhulunna", meaning: { en: "You will surely enter", ur: "تم ضرور داخل ہو گے" }, pos: "PART+V", posLabel: "PART+V", grammar: { form: "I", root: "د-خ-ل", mood: "emphatic" } },
      { arabic: "الْمَسْجِدَ", transliteration: "al-masjida", meaning: { en: "al-Masjid", ur: "مسجد" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "س-ج-د" } },
      { arabic: "الْحَرَامَ", transliteration: "al-ḥarāma", meaning: { en: "al-Haram", ur: "الحرام میں" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "accusative" } },
      { arabic: "إِن", transliteration: "in", meaning: { en: "if", ur: "اگر" }, pos: "COND", posLabel: "COND", grammar: { type: "conditional" } },
      { arabic: "شَاءَ", transliteration: "shāʾa", meaning: { en: "wills", ur: "چاہے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "ش-ي-أ" } },
      { arabic: "اللَّهُ", transliteration: "Allāhu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "آمِنِينَ", transliteration: "āminīna", meaning: { en: "in safety", ur: "امن میں" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "أ-م-ن" } },
      { arabic: "مُحَلِّقِينَ", transliteration: "muḥalliqīna", meaning: { en: "having shaved", ur: "سر منڈائے ہوئے" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ح-ل-ق" } },
      { arabic: "رُءُوسَكُمْ", transliteration: "ruʾūsakum", meaning: { en: "your heads", ur: "اپنے سر" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative", number: "plural" } },
      { arabic: "وَمُقَصِّرِينَ", transliteration: "wamuqaṣṣirīna", meaning: { en: "and having shortened", ur: "اور بال کترائے ہوئے" }, pos: "CONJ+AP", posLabel: "CONJ+AP", grammar: { case: "accusative", number: "plural", root: "ق-ص-ر" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہ" }, pos: "NEG", posLabel: "NEG", grammar: { type: "negative" } },
      { arabic: "تَخَافُونَ", transliteration: "takhāfūna", meaning: { en: "fearing", ur: "ڈرتے ہوئے" }, pos: "V", posLabel: "V", grammar: { form: "I", root: "خ-و-ف" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'موصوف + صفت' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 14, to: 16, label: 'عطف' },
        { from: 17, to: 18, label: 'نفی + فعل' }
      ]
    }
  },

  28: {
    ayahNumber: 28,
    text: "هُوَ الَّذِي أَرْسَلَ رَسُولَهُ بِالْهُدَىٰ وَدِينِ الْحَقِّ لِيُظْهِرَهُ عَلَى الدِّينِ كُلِّهِ وَكَفَىٰ بِاللَّهِ شَهِيدًا",
    words: [
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "He is", ur: "وہی ہے" }, pos: "PRON", posLabel: "PRON", grammar: { person: "3rd" } },
      { arabic: "الَّذِي", transliteration: "alladhī", meaning: { en: "the One Who", ur: "جس نے" }, pos: "REL", posLabel: "REL", grammar: { gender: "masculine" } },
      { arabic: "أَرْسَلَ", transliteration: "arsala", meaning: { en: "sent", ur: "بھیجا" }, pos: "V", posLabel: "V", grammar: { form: "IV", root: "ر-س-ل" } },
      { arabic: "رَسُولَهُ", transliteration: "rasūlahu", meaning: { en: "His Messenger", ur: "اپنے رسول کو" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "accusative" } },
      { arabic: "بِالْهُدَىٰ", transliteration: "bil-hudā", meaning: { en: "with guidance", ur: "ہدایت دے کر" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive", root: "ه-د-ي" } },
      { arabic: "وَدِينِ", transliteration: "wadīni", meaning: { en: "and the religion", ur: "اور دین" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "genitive" } },
      { arabic: "الْحَقِّ", transliteration: "al-ḥaqqi", meaning: { en: "of truth", ur: "حق" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "لِيُظْهِرَهُ", transliteration: "liyuẓhirahu", meaning: { en: "to make it prevail", ur: "تاکہ اسے غالب کرے" }, pos: "P+V+PRON", posLabel: "P+V+PRON", grammar: { form: "IV", root: "ظ-ه-ر", mood: "subjunctive" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "over", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الدِّينِ", transliteration: "al-dīni", meaning: { en: "the religions", ur: "تمام دین" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "كُلِّهِ", transliteration: "kullihi", meaning: { en: "all of it", ur: "سب پر" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { case: "genitive", type: "emphasis" } },
      { arabic: "وَكَفَىٰ", transliteration: "wakafā", meaning: { en: "And sufficient is", ur: "اور کافی ہے" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { form: "I", root: "ك-ف-ي" } },
      { arabic: "بِاللَّهِ", transliteration: "billāhi", meaning: { en: "Allah", ur: "اللہ" }, pos: "P+N", posLabel: "P+N", grammar: { case: "genitive" } },
      { arabic: "شَهِيدًا", transliteration: "shahīdan", meaning: { en: "as Witness", ur: "بطور گواہ" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ش-ه-د" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'توکید' }
      ]
    }
  },

  29: {
    ayahNumber: 29,
    text: "مُّحَمَّدٌ رَّسُولُ اللَّهِ وَالَّذِينَ مَعَهُ أَشِدَّاءُ عَلَى الْكُفَّارِ رُحَمَاءُ بَيْنَهُمْ تَرَاهُمْ رُكَّعًا سُجَّدًا يَبْتَغُونَ فَضْلًا مِّنَ اللَّهِ وَرِضْوَانًا",
    words: [
      { arabic: "مُّحَمَّدٌ", transliteration: "muḥammadun", meaning: { en: "Muhammad", ur: "محمد" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "رَّسُولُ", transliteration: "rasūlu", meaning: { en: "the Messenger", ur: "رسول ہیں" }, pos: "N", posLabel: "N", grammar: { case: "nominative" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "of Allah", ur: "اللہ کے" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَالَّذِينَ", transliteration: "walladhīna", meaning: { en: "and those who", ur: "اور جو لوگ" }, pos: "CONJ+REL", posLabel: "CONJ+REL", grammar: { number: "plural" } },
      { arabic: "مَعَهُ", transliteration: "maʿahu", meaning: { en: "are with him", ur: "ان کے ساتھ ہیں" }, pos: "P+PRON", posLabel: "P+PRON", grammar: { role: "accompaniment" } },
      { arabic: "أَشِدَّاءُ", transliteration: "ashiddāʾu", meaning: { en: "firm", ur: "سخت ہیں" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", number: "plural" } },
      { arabic: "عَلَى", transliteration: "ʿalā", meaning: { en: "against", ur: "پر" }, pos: "P", posLabel: "P", grammar: { role: "preposition" } },
      { arabic: "الْكُفَّارِ", transliteration: "al-kuffāri", meaning: { en: "the disbelievers", ur: "کافروں" }, pos: "N", posLabel: "N", grammar: { case: "genitive", number: "plural", root: "ك-ف-ر" } },
      { arabic: "رُحَمَاءُ", transliteration: "ruḥamāʾu", meaning: { en: "merciful", ur: "رحم دل ہیں" }, pos: "ADJ", posLabel: "ADJ", grammar: { case: "nominative", number: "plural", root: "ر-ح-م" } },
      { arabic: "بَيْنَهُمْ", transliteration: "baynahum", meaning: { en: "among themselves", ur: "آپس میں" }, pos: "N+PRON", posLabel: "N+PRON", grammar: { role: "locative" } },
      { arabic: "تَرَاهُمْ", transliteration: "tarāhum", meaning: { en: "You see them", ur: "تو دیکھے گا انہیں" }, pos: "V+PRON", posLabel: "V+PRON", grammar: { form: "I", root: "ر-أ-ي" } },
      { arabic: "رُكَّعًا", transliteration: "rukkaʿan", meaning: { en: "bowing", ur: "رکوع کرتے" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "ر-ك-ع" } },
      { arabic: "سُجَّدًا", transliteration: "sujjadan", meaning: { en: "prostrating", ur: "سجدے کرتے" }, pos: "AP", posLabel: "AP", grammar: { case: "accusative", number: "plural", root: "س-ج-د" } },
      { arabic: "يَبْتَغُونَ", transliteration: "yabtaghūna", meaning: { en: "seeking", ur: "طلب کرتے ہیں" }, pos: "V", posLabel: "V", grammar: { form: "VIII", root: "ب-غ-ي" } },
      { arabic: "فَضْلًا", transliteration: "faḍlan", meaning: { en: "bounty", ur: "فضل" }, pos: "N", posLabel: "N", grammar: { case: "accusative", root: "ف-ض-ل" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "from", ur: "سے" }, pos: "P", posLabel: "P", grammar: { role: "source" } },
      { arabic: "اللَّهِ", transliteration: "Allāhi", meaning: { en: "Allah", ur: "اللہ کا" }, pos: "N", posLabel: "N", grammar: { case: "genitive" } },
      { arabic: "وَرِضْوَانًا", transliteration: "wariḍwānan", meaning: { en: "and pleasure", ur: "اور رضامندی" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { case: "accusative", root: "ر-ض-و" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'فعل + مفعول به' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 15, to: 18, label: 'عطف' }
      ]
    }
  }
};

export default TREEBANK_DATA;
