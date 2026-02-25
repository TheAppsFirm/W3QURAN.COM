/**
 * Surah Al-A'raf (7) - Treebank Data (Ayahs 1-10)
 * The Heights - 206 Ayahs total
 *
 * Theme: Stories of prophets, consequences of rejection, heights between Paradise and Hell
 * Revelation: Makki
 */

const SURAH_7_TREEBANK = {
  1: {
    text: 'المص',
    translation: {
      en: 'Alif, Lam, Meem, Sad.',
      ur: 'الف، لام، میم، صاد۔',
    structure: {
      relationships: [],
    },
    },
    words: [
      { id: '7:1:1', arabic: 'المص', transliteration: 'Alif-Lam-Mim-Sad', pos: ['INIT'], posLabel: 'INIT', root: null, meaning: { en: 'Alif Lam Mim Sad', ur: 'الف لام میم صاد' } }
    ]
  },
  2: {
    text: 'كِتَابٌ أُنزِلَ إِلَيْكَ فَلَا يَكُن فِي صَدْرِكَ حَرَجٌ مِّنْهُ لِتُنذِرَ بِهِ وَذِكْرَىٰ لِلْمُؤْمِنِينَ',
    translation: {
      en: '[This is] a Book revealed to you - so let there not be in your breast distress therefrom - that you may warn thereby and as a reminder to the believers.',
      ur: 'یہ کتاب تمہاری طرف اتاری گئی ہے۔ پس اس کی وجہ سے تمہارے سینے میں تنگی نہ ہو۔ تاکہ تم اس سے ڈراؤ اور یہ مومنوں کے لیے نصیحت ہے۔'
    },
    words: [
      { id: '7:2:1', arabic: 'كِتَابٌ', transliteration: 'kitabun', pos: ['N'], posLabel: 'N', root: 'ك ت ب', meaning: { en: 'A Book', ur: 'ایک کتاب' } },
      { id: '7:2:2', arabic: 'أُنزِلَ', transliteration: 'unzila', pos: ['V'], posLabel: 'V', root: 'ن ز ل', meaning: { en: 'revealed', ur: 'اتاری گئی' } },
      { id: '7:2:3', arabic: 'إِلَيْكَ', transliteration: 'ilayka', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to you', ur: 'تمہاری طرف' } },
      { id: '7:2:4', arabic: 'فَلَا', transliteration: 'fa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'so let there not', ur: 'پس نہیں' } },
      { id: '7:2:5', arabic: 'يَكُن', transliteration: 'yakun', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'be', ur: 'ہو' } },
      { id: '7:2:6', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '7:2:7', arabic: 'صَدْرِكَ', transliteration: 'sadrika', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ص د ر', meaning: { en: 'your breast', ur: 'تمہارے سینے' } },
      { id: '7:2:8', arabic: 'حَرَجٌ', transliteration: 'harajun', pos: ['N'], posLabel: 'N', root: 'ح ر ج', meaning: { en: 'distress', ur: 'تنگی' } },
      { id: '7:2:9', arabic: 'مِّنْهُ', transliteration: 'minhu', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'therefrom', ur: 'اس سے' } },
      { id: '7:2:10', arabic: 'لِتُنذِرَ', transliteration: 'li-tundhira', pos: ['P', 'V'], posLabel: 'P+V', root: 'ن ذ ر', meaning: { en: 'that you may warn', ur: 'تاکہ تم ڈراؤ' } },
      { id: '7:2:11', arabic: 'بِهِ', transliteration: 'bihi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'thereby', ur: 'اس سے' } },
      { id: '7:2:12', arabic: 'وَذِكْرَىٰ', transliteration: 'wa-dhikra', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ذ ك ر', meaning: { en: 'and a reminder', ur: 'اور نصیحت' } },
      { id: '7:2:13', arabic: 'لِلْمُؤْمِنِينَ', transliteration: 'lil-mu\'minin', pos: ['P', 'N'], posLabel: 'P+N', root: 'أ م ن', meaning: { en: 'to the believers', ur: 'مومنوں کے لیے' } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'نفی + فعل' },
      { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  3: {
    text: 'اتَّبِعُوا مَا أُنزِلَ إِلَيْكُم مِّن رَّبِّكُمْ وَلَا تَتَّبِعُوا مِن دُونِهِ أَوْلِيَاءَ قَلِيلًا مَّا تَذَكَّرُونَ',
    translation: {
      en: 'Follow what has been revealed to you from your Lord and do not follow other than Him any allies. Little do you remember.',
      ur: 'جو کچھ تمہارے رب کی طرف سے تم پر اتارا گیا ہے اس کی پیروی کرو اور اس کے سوا دوسرے سرپرستوں کی پیروی نہ کرو۔ تم بہت کم نصیحت پکڑتے ہو۔'
    },
    words: [
      { id: '7:3:1', arabic: 'اتَّبِعُوا', transliteration: 'ittabi\'u', pos: ['V'], posLabel: 'V', root: 'ت ب ع', meaning: { en: 'Follow', ur: 'پیروی کرو' } },
      { id: '7:3:2', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو کچھ' } },
      { id: '7:3:3', arabic: 'أُنزِلَ', transliteration: 'unzila', pos: ['V'], posLabel: 'V', root: 'ن ز ل', meaning: { en: 'has been revealed', ur: 'اتارا گیا' } },
      { id: '7:3:4', arabic: 'إِلَيْكُم', transliteration: 'ilaykum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to you', ur: 'تمہاری طرف' } },
      { id: '7:3:5', arabic: 'مِّن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '7:3:6', arabic: 'رَّبِّكُمْ', transliteration: 'rabbikum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'your Lord', ur: 'تمہارے رب' } },
      { id: '7:3:7', arabic: 'وَلَا', transliteration: 'wa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and do not', ur: 'اور نہ' } },
      { id: '7:3:8', arabic: 'تَتَّبِعُوا', transliteration: 'tattabi\'u', pos: ['V'], posLabel: 'V', root: 'ت ب ع', meaning: { en: 'follow', ur: 'پیروی کرو' } },
      { id: '7:3:9', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '7:3:10', arabic: 'دُونِهِ', transliteration: 'dunihi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'د و ن', meaning: { en: 'other than Him', ur: 'اس کے سوا' } },
      { id: '7:3:11', arabic: 'أَوْلِيَاءَ', transliteration: 'awliya\'a', pos: ['N'], posLabel: 'N', root: 'و ل ي', meaning: { en: 'allies', ur: 'سرپرست' } },
      { id: '7:3:12', arabic: 'قَلِيلًا', transliteration: 'qalilan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ق ل ل', meaning: { en: 'Little', ur: 'بہت کم' } },
      { id: '7:3:13', arabic: 'مَّا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '7:3:14', arabic: 'تَذَكَّرُونَ', transliteration: 'tadhakkarun', pos: ['V'], posLabel: 'V', root: 'ذ ك ر', meaning: { en: 'you remember', ur: 'تم یاد کرتے ہو' } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 13, to: 14, label: 'موصول + صلة' },
      ],
    },
  },
  4: {
    text: 'وَكَم مِّن قَرْيَةٍ أَهْلَكْنَاهَا فَجَاءَهَا بَأْسُنَا بَيَاتًا أَوْ هُمْ قَائِلُونَ',
    translation: {
      en: 'And how many cities have We destroyed, and Our punishment came to them at night or while they were sleeping at noon.',
      ur: 'اور کتنی بستیاں ہیں جنہیں ہم نے ہلاک کر دیا۔ ہمارا عذاب ان پر رات کو آیا یا جب وہ دوپہر کو سو رہے تھے۔'
    },
    words: [
      { id: '7:4:1', arabic: 'وَكَم', transliteration: 'wa-kam', pos: ['CONJ', 'INTG'], posLabel: 'CONJ+INTG', root: null, meaning: { en: 'And how many', ur: 'اور کتنی' } },
      { id: '7:4:2', arabic: 'مِّن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'سے' } },
      { id: '7:4:3', arabic: 'قَرْيَةٍ', transliteration: 'qaryatin', pos: ['N'], posLabel: 'N', root: 'ق ر ي', meaning: { en: 'a city', ur: 'بستی' } },
      { id: '7:4:4', arabic: 'أَهْلَكْنَاهَا', transliteration: 'ahlaknaha', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ه ل ك', meaning: { en: 'We destroyed it', ur: 'ہم نے اسے ہلاک کیا' } },
      { id: '7:4:5', arabic: 'فَجَاءَهَا', transliteration: 'fa-ja\'aha', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ج ي أ', meaning: { en: 'and came to it', ur: 'پس اس پر آیا' } },
      { id: '7:4:6', arabic: 'بَأْسُنَا', transliteration: 'ba\'suna', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ب أ س', meaning: { en: 'Our punishment', ur: 'ہمارا عذاب' } },
      { id: '7:4:7', arabic: 'بَيَاتًا', transliteration: 'bayatan', pos: ['N'], posLabel: 'N', root: 'ب ي ت', meaning: { en: 'at night', ur: 'رات کو' } },
      { id: '7:4:8', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '7:4:9', arabic: 'هُمْ', transliteration: 'hum', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'they', ur: 'وہ' } },
      { id: '7:4:10', arabic: 'قَائِلُونَ', transliteration: 'qa\'ilun', pos: ['N'], posLabel: 'N', root: 'ق ي ل', meaning: { en: 'sleeping at noon', ur: 'دوپہر کو سونے والے' } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 4, to: 5, label: 'عطف' }
      ],
    },
  },
  5: {
    text: 'فَمَا كَانَ دَعْوَاهُمْ إِذْ جَاءَهُم بَأْسُنَا إِلَّا أَن قَالُوا إِنَّا كُنَّا ظَالِمِينَ',
    translation: {
      en: 'And their cry when Our punishment came to them was only that they said, "Indeed, we were wrongdoers!"',
      ur: 'پھر جب ہمارا عذاب ان پر آیا تو ان کی پکار بس یہی تھی کہ "بےشک ہم ظالم تھے!"'
    },
    words: [
      { id: '7:5:1', arabic: 'فَمَا', transliteration: 'fa-ma', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And not', ur: 'پس نہیں' } },
      { id: '7:5:2', arabic: 'كَانَ', transliteration: 'kana', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'was', ur: 'تھی' } },
      { id: '7:5:3', arabic: 'دَعْوَاهُمْ', transliteration: 'da\'wahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'د ع و', meaning: { en: 'their cry', ur: 'ان کی پکار' } },
      { id: '7:5:4', arabic: 'إِذْ', transliteration: 'idh', pos: ['T'], posLabel: 'T', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '7:5:5', arabic: 'جَاءَهُم', transliteration: 'ja\'ahum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج ي أ', meaning: { en: 'came to them', ur: 'ان پر آیا' } },
      { id: '7:5:6', arabic: 'بَأْسُنَا', transliteration: 'ba\'suna', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ب أ س', meaning: { en: 'Our punishment', ur: 'ہمارا عذاب' } },
      { id: '7:5:7', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '7:5:8', arabic: 'أَن', transliteration: 'an', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '7:5:9', arabic: 'قَالُوا', transliteration: 'qalu', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'they said', ur: 'انہوں نے کہا' } },
      { id: '7:5:10', arabic: 'إِنَّا', transliteration: 'inna', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'Indeed we', ur: 'بےشک ہم' } },
      { id: '7:5:11', arabic: 'كُنَّا', transliteration: 'kunna', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'were', ur: 'تھے' } },
      { id: '7:5:12', arabic: 'ظَالِمِينَ', transliteration: 'zalimin', pos: ['N'], posLabel: 'N', root: 'ظ ل م', meaning: { en: 'wrongdoers', ur: 'ظالم' } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' }
      ],
    },
  },
  6: {
    text: 'فَلَنَسْأَلَنَّ الَّذِينَ أُرْسِلَ إِلَيْهِمْ وَلَنَسْأَلَنَّ الْمُرْسَلِينَ',
    translation: {
      en: 'Then We will surely question those to whom [a message] was sent, and We will surely question the messengers.',
      ur: 'پھر ہم ضرور ان سے پوچھیں گے جن کی طرف رسول بھیجے گئے اور ہم رسولوں سے بھی ضرور پوچھیں گے۔'
    },
    words: [
      { id: '7:6:1', arabic: 'فَلَنَسْأَلَنَّ', transliteration: 'fa-la-nas\'alanna', pos: ['CONJ', 'EMPH', 'V'], posLabel: 'CONJ+EMPH+V', root: 'س أ ل', meaning: { en: 'Then surely We will question', ur: 'پس ضرور ہم پوچھیں گے' } },
      { id: '7:6:2', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those to whom', ur: 'جن کی طرف' } },
      { id: '7:6:3', arabic: 'أُرْسِلَ', transliteration: 'ursila', pos: ['V'], posLabel: 'V', root: 'ر س ل', meaning: { en: 'was sent', ur: 'بھیجے گئے' } },
      { id: '7:6:4', arabic: 'إِلَيْهِمْ', transliteration: 'ilayhim', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to them', ur: 'ان کی طرف' } },
      { id: '7:6:5', arabic: 'وَلَنَسْأَلَنَّ', transliteration: 'wa-la-nas\'alanna', pos: ['CONJ', 'EMPH', 'V'], posLabel: 'CONJ+EMPH+V', root: 'س أ ل', meaning: { en: 'and surely We will question', ur: 'اور ضرور ہم پوچھیں گے' } },
      { id: '7:6:6', arabic: 'الْمُرْسَلِينَ', transliteration: 'al-mursalin', pos: ['N'], posLabel: 'N', root: 'ر س ل', meaning: { en: 'the messengers', ur: 'رسولوں سے' } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
      ],
    },
  },
  7: {
    text: 'فَلَنَقُصَّنَّ عَلَيْهِم بِعِلْمٍ وَمَا كُنَّا غَائِبِينَ',
    translation: {
      en: 'Then We will surely relate [their deeds] to them with knowledge, and We were not absent.',
      ur: 'پھر ہم انہیں علم کے ساتھ بتائیں گے اور ہم غائب نہیں تھے۔'
    },
    words: [
      { id: '7:7:1', arabic: 'فَلَنَقُصَّنَّ', transliteration: 'fa-la-naqussanna', pos: ['CONJ', 'EMPH', 'V'], posLabel: 'CONJ+EMPH+V', root: 'ق ص ص', meaning: { en: 'Then surely We will relate', ur: 'پھر ضرور ہم بیان کریں گے' } },
      { id: '7:7:2', arabic: 'عَلَيْهِم', transliteration: '\'alayhim', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to them', ur: 'ان کو' } },
      { id: '7:7:3', arabic: 'بِعِلْمٍ', transliteration: 'bi-\'ilmin', pos: ['P', 'N'], posLabel: 'P+N', root: 'ع ل م', meaning: { en: 'with knowledge', ur: 'علم کے ساتھ' } },
      { id: '7:7:4', arabic: 'وَمَا', transliteration: 'wa-ma', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '7:7:5', arabic: 'كُنَّا', transliteration: 'kunna', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'We were', ur: 'ہم تھے' } },
      { id: '7:7:6', arabic: 'غَائِبِينَ', transliteration: 'gha\'ibin', pos: ['N'], posLabel: 'N', root: 'غ ي ب', meaning: { en: 'absent', ur: 'غائب' } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'نفی + فعل' }
      ],
    },
  },
  8: {
    text: 'وَالْوَزْنُ يَوْمَئِذٍ الْحَقُّ فَمَن ثَقُلَتْ مَوَازِينُهُ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ',
    translation: {
      en: 'And the weighing [of deeds] that Day will be the truth. So those whose scales are heavy - it is they who will be the successful.',
      ur: 'اور اس دن وزن حق ہوگا۔ پھر جن کے پلڑے بھاری ہوں گے وہی کامیاب ہوں گے۔'
    },
    words: [
      { id: '7:8:1', arabic: 'وَالْوَزْنُ', transliteration: 'wal-waznu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'و ز ن', meaning: { en: 'And the weighing', ur: 'اور وزن' } },
      { id: '7:8:2', arabic: 'يَوْمَئِذٍ', transliteration: 'yawma\'idhin', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: 'that Day', ur: 'اس دن' } },
      { id: '7:8:3', arabic: 'الْحَقُّ', transliteration: 'al-haqqu', pos: ['N'], posLabel: 'N', root: 'ح ق ق', meaning: { en: 'the truth', ur: 'حق' } },
      { id: '7:8:4', arabic: 'فَمَن', transliteration: 'fa-man', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'So whoever', ur: 'پس جس کے' } },
      { id: '7:8:5', arabic: 'ثَقُلَتْ', transliteration: 'thaqulat', pos: ['V'], posLabel: 'V', root: 'ث ق ل', meaning: { en: 'are heavy', ur: 'بھاری ہوں' } },
      { id: '7:8:6', arabic: 'مَوَازِينُهُ', transliteration: 'mawazinuhu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'و ز ن', meaning: { en: 'his scales', ur: 'اس کے پلڑے' } },
      { id: '7:8:7', arabic: 'فَأُولَٰئِكَ', transliteration: 'fa-ula\'ika', pos: ['CONJ', 'DEM'], posLabel: 'CONJ+DEM', root: null, meaning: { en: 'then those', ur: 'پس وہی' } },
      { id: '7:8:8', arabic: 'هُمُ', transliteration: 'humu', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'they', ur: 'وہ' } },
      { id: '7:8:9', arabic: 'الْمُفْلِحُونَ', transliteration: 'al-muflihun', pos: ['N'], posLabel: 'N', root: 'ف ل ح', meaning: { en: 'the successful', ur: 'کامیاب' } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
      ],
    },
  },
  9: {
    text: 'وَمَنْ خَفَّتْ مَوَازِينُهُ فَأُولَٰئِكَ الَّذِينَ خَسِرُوا أَنفُسَهُم بِمَا كَانُوا بِآيَاتِنَا يَظْلِمُونَ',
    translation: {
      en: 'And those whose scales are light - they are the ones who will lose themselves for what injustice they were doing toward Our verses.',
      ur: 'اور جن کے پلڑے ہلکے ہوں گے وہی لوگ ہیں جنہوں نے اپنے آپ کو نقصان میں ڈالا کیونکہ وہ ہماری آیات پر ظلم کرتے تھے۔'
    },
    words: [
      { id: '7:9:1', arabic: 'وَمَنْ', transliteration: 'wa-man', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'And whoever', ur: 'اور جس کے' } },
      { id: '7:9:2', arabic: 'خَفَّتْ', transliteration: 'khaffat', pos: ['V'], posLabel: 'V', root: 'خ ف ف', meaning: { en: 'are light', ur: 'ہلکے ہوں' } },
      { id: '7:9:3', arabic: 'مَوَازِينُهُ', transliteration: 'mawazinuhu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'و ز ن', meaning: { en: 'his scales', ur: 'اس کے پلڑے' } },
      { id: '7:9:4', arabic: 'فَأُولَٰئِكَ', transliteration: 'fa-ula\'ika', pos: ['CONJ', 'DEM'], posLabel: 'CONJ+DEM', root: null, meaning: { en: 'then those', ur: 'پس وہی' } },
      { id: '7:9:5', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'are those who', ur: 'وہ جنہوں نے' } },
      { id: '7:9:6', arabic: 'خَسِرُوا', transliteration: 'khasiru', pos: ['V'], posLabel: 'V', root: 'خ س ر', meaning: { en: 'have lost', ur: 'نقصان اٹھایا' } },
      { id: '7:9:7', arabic: 'أَنفُسَهُم', transliteration: 'anfusahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ن ف س', meaning: { en: 'themselves', ur: 'اپنے آپ کو' } },
      { id: '7:9:8', arabic: 'بِمَا', transliteration: 'bi-ma', pos: ['P', 'REL'], posLabel: 'P+REL', root: null, meaning: { en: 'because', ur: 'اس وجہ سے' } },
      { id: '7:9:9', arabic: 'كَانُوا', transliteration: 'kanu', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'they used to', ur: 'وہ تھے' } },
      { id: '7:9:10', arabic: 'بِآيَاتِنَا', transliteration: 'bi-ayatina', pos: ['P', 'N', 'PRON'], posLabel: 'P+N+PRON', root: 'أ ي ي', meaning: { en: 'toward Our verses', ur: 'ہماری آیات پر' } },
      { id: '7:9:11', arabic: 'يَظْلِمُونَ', transliteration: 'yazlimun', pos: ['V'], posLabel: 'V', root: 'ظ ل م', meaning: { en: 'doing injustice', ur: 'ظلم کرتے تھے' } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'موصول + صلة' },
      ],
    },
  },
  10: {
    text: 'وَلَقَدْ مَكَّنَّاكُمْ فِي الْأَرْضِ وَجَعَلْنَا لَكُمْ فِيهَا مَعَايِشَ قَلِيلًا مَّا تَشْكُرُونَ',
    translation: {
      en: 'And We have certainly established you upon the earth and made for you therein ways of livelihood. Little are you grateful.',
      ur: 'اور ہم نے تمہیں زمین میں اختیار دیا اور تمہارے لیے اس میں روزی کے سامان رکھے۔ تم بہت کم شکر ادا کرتے ہو۔'
    },
    words: [
      { id: '7:10:1', arabic: 'وَلَقَدْ', transliteration: 'wa-laqad', pos: ['CONJ', 'CERT'], posLabel: 'CONJ+CERT', root: null, meaning: { en: 'And certainly', ur: 'اور بےشک' } },
      { id: '7:10:2', arabic: 'مَكَّنَّاكُمْ', transliteration: 'makkannakum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'م ك ن', meaning: { en: 'We established you', ur: 'ہم نے تمہیں قائم کیا' } },
      { id: '7:10:3', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '7:10:4', arabic: 'الْأَرْضِ', transliteration: 'al-ardi', pos: ['N'], posLabel: 'N', root: 'أ ر ض', meaning: { en: 'the earth', ur: 'زمین' } },
      { id: '7:10:5', arabic: 'وَجَعَلْنَا', transliteration: 'wa-ja\'alna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ج ع ل', meaning: { en: 'and We made', ur: 'اور ہم نے بنائے' } },
      { id: '7:10:6', arabic: 'لَكُمْ', transliteration: 'lakum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'for you', ur: 'تمہارے لیے' } },
      { id: '7:10:7', arabic: 'فِيهَا', transliteration: 'fiha', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'therein', ur: 'اس میں' } },
      { id: '7:10:8', arabic: 'مَعَايِشَ', transliteration: 'ma\'ayisha', pos: ['N'], posLabel: 'N', root: 'ع ي ش', meaning: { en: 'ways of livelihood', ur: 'روزی کے سامان' } },
      { id: '7:10:9', arabic: 'قَلِيلًا', transliteration: 'qalilan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ق ل ل', meaning: { en: 'Little', ur: 'بہت کم' } },
      { id: '7:10:10', arabic: 'مَّا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '7:10:11', arabic: 'تَشْكُرُونَ', transliteration: 'tashkurun', pos: ['V'], posLabel: 'V', root: 'ش ك ر', meaning: { en: 'you are grateful', ur: 'تم شکر ادا کرتے ہو' } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'موصول + صلة' },
      ],
    },
  },

  11: {
    text: "وَلَقَدْ خَلَقْنَـٰكُمْ ثُمَّ صَوَّرْنَـٰكُمْ ثُمَّ قُلْنَا لِلْمَلَـٰٓئِكَةِ ٱسْجُدُوا۟ لِـَٔادَمَ فَسَجَدُوٓا۟ إِلَّآ إِبْلِيسَ لَمْ يَكُن مِّنَ ٱلسَّـٰجِدِينَ",
    translation: {
      en: "",
      ur: "اور ہم ہی نے تم کو (ابتدا میں مٹی سے) پیدا کیا پھر تمہاری صورت شکل بنائی پھر فرشتوں کو حکم دیا آدم کے آگے سجدہ کرو تو (سب نے) سجدہ کیا لیکن ابلیس کہ وہ سجدہ کرنے والوں میں (شامل) نہ ہوا",
    },
    words: [
      { id: '7:11:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And certainly", ur: "اور certainly" } },
      { id: '7:11:2', arabic: "خَلَقْنَـٰكُمْ", transliteration: "khalaqnākum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We created you", ur: "ہم پیدا کیا تم" } },
      { id: '7:11:3', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '7:11:4', arabic: "صَوَّرْنَـٰكُمْ", transliteration: "ṣawwarnākum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We fashioned you", ur: "ہم fashioned تم" } },
      { id: '7:11:5', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '7:11:6', arabic: "قُلْنَا", transliteration: "qul'nā", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "We said", ur: "ہم کہا" } },
      { id: '7:11:7', arabic: "لِلْمَلَـٰٓئِكَةِ", transliteration: "lil'malāikati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the Angels", ur: "کو the Angels" } },
      { id: '7:11:8', arabic: "ٱسْجُدُوا۟", transliteration: "us'judū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Prostrate", ur: "Prostrate" } },
      { id: '7:11:9', arabic: "لِـَٔادَمَ", transliteration: "liādama", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Adam", ur: "کو Adam" } },
      { id: '7:11:10', arabic: "فَسَجَدُوٓا۟", transliteration: "fasajadū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So they prostrated", ur: "So وہ لوگ prostrated" } },
      { id: '7:11:11', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:11:12', arabic: "إِبْلِيسَ", transliteration: "ib'līsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Iblis", ur: "Iblis" } },
      { id: '7:11:13', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '7:11:14', arabic: "يَكُن", transliteration: "yakun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he was", ur: "وہ was" } },
      { id: '7:11:15', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:11:16', arabic: "ٱلسَّـٰجِدِينَ", transliteration: "l-sājidīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "those who prostrated", ur: "جو لوگ prostrated" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'نفی + فعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  12: {
    text: "قَالَ مَا مَنَعَكَ أَلَّا تَسْجُدَ إِذْ أَمَرْتُكَ ۖ قَالَ أَنَا۠ خَيْرٌۭ مِّنْهُ خَلَقْتَنِى مِن نَّارٍۢ وَخَلَقْتَهُۥ مِن طِينٍۢ",
    translation: {
      en: "",
      ur: "(خدا نے) فرمایا جب میں نے تجھ کو حکم دیا تو کس چیز نے تجھے سجدہ کرنے سے باز رکھا۔ اس نے کہا کہ میں اس سے افضل ہوں۔ مجھے تو نے آگ سے پیدا کیا ہے اور اسے مٹی سے بنایا ہے",
    },
    words: [
      { id: '7:12:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "(Allah) said", ur: "(اللہ) کہا" } },
      { id: '7:12:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "What", ur: "کیا" } },
      { id: '7:12:3', arabic: "مَنَعَكَ", transliteration: "manaʿaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "prevented you", ur: "prevented تم" } },
      { id: '7:12:4', arabic: "أَلَّا", transliteration: "allā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that not", ur: "وہ نہیں" } },
      { id: '7:12:5', arabic: "تَسْجُدَ", transliteration: "tasjuda", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you prostrate", ur: "تم prostrate" } },
      { id: '7:12:6', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '7:12:7', arabic: "أَمَرْتُكَ ۖ", transliteration: "amartuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I commanded you", ur: "میں commanded تم" } },
      { id: '7:12:8', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "(Shaitaan) said", ur: "(Shaitaan) کہا" } },
      { id: '7:12:9', arabic: "أَنَا۠", transliteration: "anā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I am", ur: "میں am" } },
      { id: '7:12:10', arabic: "خَيْرٌۭ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "better", ur: "better" } },
      { id: '7:12:11', arabic: "مِّنْهُ", transliteration: "min'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than him", ur: "than him" } },
      { id: '7:12:12', arabic: "خَلَقْتَنِى", transliteration: "khalaqtanī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You created me", ur: "تم پیدا کیا me" } },
      { id: '7:12:13', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:12:14', arabic: "نَّارٍۢ", transliteration: "nārin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fire", ur: "آگ" } },
      { id: '7:12:15', arabic: "وَخَلَقْتَهُۥ", transliteration: "wakhalaqtahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and You created him", ur: "اور تم پیدا کیا him" } },
      { id: '7:12:16', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:12:17', arabic: "طِينٍۢ", transliteration: "ṭīnin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "clay", ur: "clay" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'جار + مجرور' }
      ],
    },
  },
  13: {
    text: "قَالَ فَٱهْبِطْ مِنْهَا فَمَا يَكُونُ لَكَ أَن تَتَكَبَّرَ فِيهَا فَٱخْرُجْ إِنَّكَ مِنَ ٱلصَّـٰغِرِينَ",
    translation: {
      en: "",
      ur: "فرمایا تو (بہشت سے) اتر جا تجھے شایاں نہیں کہ یہاں غرور کرے پس نکل جا۔ تو ذلیل ہے",
    },
    words: [
      { id: '7:13:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "(Allah) said", ur: "(اللہ) کہا" } },
      { id: '7:13:2', arabic: "فَٱهْبِطْ", transliteration: "fa-ih'biṭ", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then go down", ur: "پھر go down" } },
      { id: '7:13:3', arabic: "مِنْهَا", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '7:13:4', arabic: "فَمَا", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "for not", ur: "for نہیں" } },
      { id: '7:13:5', arabic: "يَكُونُ", transliteration: "yakūnu", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "it is", ur: "it is" } },
      { id: '7:13:6', arabic: "لَكَ", transliteration: "laka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '7:13:7', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:13:8', arabic: "تَتَكَبَّرَ", transliteration: "tatakabbara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you be arrogant", ur: "تم be arrogant" } },
      { id: '7:13:9', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '7:13:10', arabic: "فَٱخْرُجْ", transliteration: "fa-ukh'ruj", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So get out", ur: "So get out" } },
      { id: '7:13:11', arabic: "إِنَّكَ", transliteration: "innaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed, you", ur: "بیشک, تم" } },
      { id: '7:13:12', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) of", ur: "(are) of" } },
      { id: '7:13:13', arabic: "ٱلصَّـٰغِرِينَ", transliteration: "l-ṣāghirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the disgraced ones", ur: "the disgraced ones" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  14: {
    text: "قَالَ أَنظِرْنِىٓ إِلَىٰ يَوْمِ يُبْعَثُونَ",
    translation: {
      en: "",
      ur: "اس نے کہا کہ مجھے اس دن تک مہلت عطا فرما جس دن لوگ (قبروں سے) اٹھائے جائیں گے",
    },
    words: [
      { id: '7:14:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "(Shaitaan) said", ur: "(Shaitaan) کہا" } },
      { id: '7:14:2', arabic: "أَنظِرْنِىٓ", transliteration: "anẓir'nī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Give me respite", ur: "Give me respite" } },
      { id: '7:14:3', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "till", ur: "till" } },
      { id: '7:14:4', arabic: "يَوْمِ", transliteration: "yawmi", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(the) Day", ur: "(the) دن" } },
      { id: '7:14:5', arabic: "يُبْعَثُونَ", transliteration: "yub'ʿathūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are raised up", ur: "وہ لوگ are raised up" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  15: {
    text: "قَالَ إِنَّكَ مِنَ ٱلْمُنظَرِينَ",
    translation: {
      en: "",
      ur: "فرمایا (اچھا) تجھ کو مہلت دی جاتی ہے",
    },
    words: [
      { id: '7:15:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "(Allah) said", ur: "(اللہ) کہا" } },
      { id: '7:15:2', arabic: "إِنَّكَ", transliteration: "innaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, you", ur: "بیشک, تم" } },
      { id: '7:15:3', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) of", ur: "(are) of" } },
      { id: '7:15:4', arabic: "ٱلْمُنظَرِينَ", transliteration: "l-munẓarīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones given respite", ur: "the ones given respite" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  16: {
    text: "قَالَ فَبِمَآ أَغْوَيْتَنِى لَأَقْعُدَنَّ لَهُمْ صِرَٰطَكَ ٱلْمُسْتَقِيمَ",
    translation: {
      en: "",
      ur: "(پھر) شیطان نے کہا مجھے تو تُو نے ملعون کیا ہی ہے میں بھی تیرے سیدھے رستے پر ان (کو گمراہ کرنے) کے لیے بیٹھوں گا",
    },
    words: [
      { id: '7:16:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "(Shaitaan) said", ur: "(Shaitaan) کہا" } },
      { id: '7:16:2', arabic: "فَبِمَآ", transliteration: "fabimā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Because", ur: "Because" } },
      { id: '7:16:3', arabic: "أَغْوَيْتَنِى", transliteration: "aghwaytanī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You have sent me astray", ur: "تم have sent me astray" } },
      { id: '7:16:4', arabic: "لَأَقْعُدَنَّ", transliteration: "la-aqʿudanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely I will sit", ur: "یقیناً میں will sit" } },
      { id: '7:16:5', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '7:16:6', arabic: "صِرَٰطَكَ", transliteration: "ṣirāṭaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(on) Your path", ur: "(پر) Your راستہ" } },
      { id: '7:16:7', arabic: "ٱلْمُسْتَقِيمَ", transliteration: "l-mus'taqīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the straight", ur: "the سیدھا" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  17: {
    text: "ثُمَّ لَـَٔاتِيَنَّهُم مِّنۢ بَيْنِ أَيْدِيهِمْ وَمِنْ خَلْفِهِمْ وَعَنْ أَيْمَـٰنِهِمْ وَعَن شَمَآئِلِهِمْ ۖ وَلَا تَجِدُ أَكْثَرَهُمْ شَـٰكِرِينَ",
    translation: {
      en: "",
      ur: "پھر ان کے آگے سے اور پیچھے سے دائیں سے اور بائیں سے (غرض ہر طرف سے) آؤں گا (اور ان کی راہ ماروں گا) اور تو ان میں اکثر کو شکر گزار نہیں پائے گا",
    },
    words: [
      { id: '7:17:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '7:17:2', arabic: "لَـَٔاتِيَنَّهُم", transliteration: "laātiyannahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely, I will come to them", ur: "یقیناً, میں will come کو them" } },
      { id: '7:17:3', arabic: "مِّنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:17:4', arabic: "بَيْنِ", transliteration: "bayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '7:17:5', arabic: "أَيْدِيهِمْ", transliteration: "aydīhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "them", ur: "them" } },
      { id: '7:17:6', arabic: "وَمِنْ", transliteration: "wamin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and from", ur: "اور سے" } },
      { id: '7:17:7', arabic: "خَلْفِهِمْ", transliteration: "khalfihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "behind them", ur: "behind them" } },
      { id: '7:17:8', arabic: "وَعَنْ", transliteration: "waʿan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and from", ur: "اور سے" } },
      { id: '7:17:9', arabic: "أَيْمَـٰنِهِمْ", transliteration: "aymānihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their right", ur: "their right" } },
      { id: '7:17:10', arabic: "وَعَن", transliteration: "waʿan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and from", ur: "اور سے" } },
      { id: '7:17:11', arabic: "شَمَآئِلِهِمْ ۖ", transliteration: "shamāilihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their left", ur: "their left" } },
      { id: '7:17:12', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '7:17:13', arabic: "تَجِدُ", transliteration: "tajidu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You (will) find", ur: "تم (will) find" } },
      { id: '7:17:14', arabic: "أَكْثَرَهُمْ", transliteration: "aktharahum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '7:17:15', arabic: "شَـٰكِرِينَ", transliteration: "shākirīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "grateful", ur: "grateful" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  18: {
    text: "قَالَ ٱخْرُجْ مِنْهَا مَذْءُومًۭا مَّدْحُورًۭا ۖ لَّمَن تَبِعَكَ مِنْهُمْ لَأَمْلَأَنَّ جَهَنَّمَ مِنكُمْ أَجْمَعِينَ",
    translation: {
      en: "",
      ur: "(خدا نے) فرمایا، نکل جا۔ یہاں سے پاجی۔ مردود جو لوگ ان میں سے تیری پیروی کریں گے میں (ان کو اور تجھ کو جہنم میں ڈال کر) تم سب سے جہنم کو بھر دوں گا",
    },
    words: [
      { id: '7:18:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "(Allah) said", ur: "(اللہ) کہا" } },
      { id: '7:18:2', arabic: "ٱخْرُجْ", transliteration: "ukh'ruj", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Get out", ur: "Get out" } },
      { id: '7:18:3', arabic: "مِنْهَا", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '7:18:4', arabic: "مَذْءُومًۭا", transliteration: "madhūman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "disgraced", ur: "disgraced" } },
      { id: '7:18:5', arabic: "مَّدْحُورًۭا ۖ", transliteration: "madḥūran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "and expelled", ur: "اور expelled" } },
      { id: '7:18:6', arabic: "لَّمَن", transliteration: "laman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Certainly, whoever", ur: "Certainly, whoever" } },
      { id: '7:18:7', arabic: "تَبِعَكَ", transliteration: "tabiʿaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "follows you", ur: "follows تم" } },
      { id: '7:18:8', arabic: "مِنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among them", ur: "among them" } },
      { id: '7:18:9', arabic: "لَأَمْلَأَنَّ", transliteration: "la-amla-anna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely, I will fill", ur: "یقیناً, میں will fill" } },
      { id: '7:18:10', arabic: "جَهَنَّمَ", transliteration: "jahannama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Hell", ur: "جہنم" } },
      { id: '7:18:11', arabic: "مِنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with you", ur: "ساتھ تم" } },
      { id: '7:18:12', arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  19: {
    text: "وَيَـٰٓـَٔادَمُ ٱسْكُنْ أَنتَ وَزَوْجُكَ ٱلْجَنَّةَ فَكُلَا مِنْ حَيْثُ شِئْتُمَا وَلَا تَقْرَبَا هَـٰذِهِ ٱلشَّجَرَةَ فَتَكُونَا مِنَ ٱلظَّـٰلِمِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے آدم (سے کہا کہ) تم اور تمہاری بیوی بہشت میں رہو سہو اور جہاں سے چاہو (اور جو چاہو) نوش جان کرو مگر اس درخت کے پاس نہ جاؤ ورنہ گنہگار ہو جاؤ گے",
    },
    words: [
      { id: '7:19:1', arabic: "وَيَـٰٓـَٔادَمُ", transliteration: "wayāādamu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And O Adam", ur: "اور اے Adam" } },
      { id: '7:19:2', arabic: "ٱسْكُنْ", transliteration: "us'kun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Dwell", ur: "Dwell" } },
      { id: '7:19:3', arabic: "أَنتَ", transliteration: "anta", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '7:19:4', arabic: "وَزَوْجُكَ", transliteration: "wazawjuka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your wife", ur: "اور your wife" } },
      { id: '7:19:5', arabic: "ٱلْجَنَّةَ", transliteration: "l-janata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) the Garden", ur: "(میں) the Garden" } },
      { id: '7:19:6', arabic: "فَكُلَا", transliteration: "fakulā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and you both eat", ur: "اور تم both eat" } },
      { id: '7:19:7', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:19:8', arabic: "حَيْثُ", transliteration: "ḥaythu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wherever", ur: "wherever" } },
      { id: '7:19:9', arabic: "شِئْتُمَا", transliteration: "shi'tumā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you both wish", ur: "تم both wish" } },
      { id: '7:19:10', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but (do) not", ur: "لیکن (do) نہیں" } },
      { id: '7:19:11', arabic: "تَقْرَبَا", transliteration: "taqrabā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "approach [both of you]", ur: "approach [both of تم]" } },
      { id: '7:19:12', arabic: "هَـٰذِهِ", transliteration: "hādhihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '7:19:13', arabic: "ٱلشَّجَرَةَ", transliteration: "l-shajarata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] tree", ur: "[the] tree" } },
      { id: '7:19:14', arabic: "فَتَكُونَا", transliteration: "fatakūnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "lest you both be", ur: "lest تم both be" } },
      { id: '7:19:15', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '7:19:16', arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoers", ur: "the wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  20: {
    text: "فَوَسْوَسَ لَهُمَا ٱلشَّيْطَـٰنُ لِيُبْدِىَ لَهُمَا مَا وُۥرِىَ عَنْهُمَا مِن سَوْءَٰتِهِمَا وَقَالَ مَا نَهَىٰكُمَا رَبُّكُمَا عَنْ هَـٰذِهِ ٱلشَّجَرَةِ إِلَّآ أَن تَكُونَا مَلَكَيْنِ أَوْ تَكُونَا مِنَ ٱلْخَـٰلِدِينَ",
    translation: {
      en: "",
      ur: "تو شیطان دونوں کو بہکانے لگا تاکہ ان کی ستر کی چیزیں جو ان سے پوشیدہ تھیں کھول دے اور کہنے لگا کہ تم کو تمہارے پروردگار نے اس درخت سے صرف اس لیے منع کیا ہے کہ کہ تم فرشتے نہ بن جاؤ یا ہمیشہ جیتے نہ رہو",
    },
    words: [
      { id: '7:20:1', arabic: "فَوَسْوَسَ", transliteration: "fawaswasa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then whispered", ur: "پھر whispered" } },
      { id: '7:20:2', arabic: "لَهُمَا", transliteration: "lahumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to both of them", ur: "کو both of them" } },
      { id: '7:20:3', arabic: "ٱلشَّيْطَـٰنُ", transliteration: "l-shayṭānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan", ur: "the Shaitaan" } },
      { id: '7:20:4', arabic: "لِيُبْدِىَ", transliteration: "liyub'diya", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to make apparent", ur: "کو make apparent" } },
      { id: '7:20:5', arabic: "لَهُمَا", transliteration: "lahumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to both of them", ur: "کو both of them" } },
      { id: '7:20:6', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:20:7', arabic: "وُۥرِىَ", transliteration: "wūriya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "was concealed", ur: "was concealed" } },
      { id: '7:20:8', arabic: "عَنْهُمَا", transliteration: "ʿanhumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from both of them", ur: "سے both of them" } },
      { id: '7:20:9', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:20:10', arabic: "سَوْءَٰتِهِمَا", transliteration: "sawātihimā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their shame", ur: "their shame" } },
      { id: '7:20:11', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And he said", ur: "اور وہ کہا" } },
      { id: '7:20:12', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(Did) not", ur: "(Did) نہیں" } },
      { id: '7:20:13', arabic: "نَهَىٰكُمَا", transliteration: "nahākumā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "forbid you both", ur: "forbid تم both" } },
      { id: '7:20:14', arabic: "رَبُّكُمَا", transliteration: "rabbukumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:20:15', arabic: "عَنْ", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:20:16', arabic: "هَـٰذِهِ", transliteration: "hādhihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '7:20:17', arabic: "ٱلشَّجَرَةِ", transliteration: "l-shajarati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] tree", ur: "[the] tree" } },
      { id: '7:20:18', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:20:19', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:20:20', arabic: "تَكُونَا", transliteration: "takūnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you two become", ur: "تم two become" } },
      { id: '7:20:21', arabic: "مَلَكَيْنِ", transliteration: "malakayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Angels", ur: "Angels" } },
      { id: '7:20:22', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '7:20:23', arabic: "تَكُونَا", transliteration: "takūnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you two become", ur: "تم two become" } },
      { id: '7:20:24', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:20:25', arabic: "ٱلْخَـٰلِدِينَ", transliteration: "l-khālidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the immortals", ur: "the immortals" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'نفی + فعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  21: {
    text: "وَقَاسَمَهُمَآ إِنِّى لَكُمَا لَمِنَ ٱلنَّـٰصِحِينَ",
    translation: {
      en: "",
      ur: "اور ان سے قسم کھا کر کہا میں تو تمہارا خیر خواہ ہوں",
    },
    words: [
      { id: '7:21:1', arabic: "وَقَاسَمَهُمَآ", transliteration: "waqāsamahumā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And he swore (to) both of them", ur: "اور وہ swore (کو) both of them" } },
      { id: '7:21:2', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I am", ur: "بیشک, میں am" } },
      { id: '7:21:3', arabic: "لَكُمَا", transliteration: "lakumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to both of you", ur: "کو both of تم" } },
      { id: '7:21:4', arabic: "لَمِنَ", transliteration: "lamina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '7:21:5', arabic: "ٱلنَّـٰصِحِينَ", transliteration: "l-nāṣiḥīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sincere advisors", ur: "the sincere advisors" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  22: {
    text: "فَدَلَّىٰهُمَا بِغُرُورٍۢ ۚ فَلَمَّا ذَاقَا ٱلشَّجَرَةَ بَدَتْ لَهُمَا سَوْءَٰتُهُمَا وَطَفِقَا يَخْصِفَانِ عَلَيْهِمَا مِن وَرَقِ ٱلْجَنَّةِ ۖ وَنَادَىٰهُمَا رَبُّهُمَآ أَلَمْ أَنْهَكُمَا عَن تِلْكُمَا ٱلشَّجَرَةِ وَأَقُل لَّكُمَآ إِنَّ ٱلشَّيْطَـٰنَ لَكُمَا عَدُوٌّۭ مُّبِينٌۭ",
    translation: {
      en: "",
      ur: "غرض (مردود نے) دھوکہ دے کر ان کو (معصیت کی طرف) کھینچ ہی لیا جب انہوں نے اس درخت (کے پھل) کو کھا لیا تو ان کی ستر کی چیزیں کھل گئیں اور وہ بہشت کے (درختوں کے) پتے توڑ توڑ کر اپنے اوپر چپکانے لگے اور (ستر چھپانے لگے) تب ان کے پروردگار نے ان کو پکارا کہ کیا میں نے تم کو اس درخت (کے پاس جانے) سے منع نہیں کیا تھا اور جتا نہیں دیا تھا کہ شیطان تمہارا کھلم کھلا دشمن ہے",
    },
    words: [
      { id: '7:22:1', arabic: "فَدَلَّىٰهُمَا", transliteration: "fadallāhumā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So he made both of them fall", ur: "So وہ made both of them fall" } },
      { id: '7:22:2', arabic: "بِغُرُورٍۢ ۚ", transliteration: "bighurūrin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by deception", ur: "by deception" } },
      { id: '7:22:3', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then when", ur: "پھر when" } },
      { id: '7:22:4', arabic: "ذَاقَا", transliteration: "dhāqā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they both tasted", ur: "وہ لوگ both tasted" } },
      { id: '7:22:5', arabic: "ٱلشَّجَرَةَ", transliteration: "l-shajarata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the tree", ur: "the tree" } },
      { id: '7:22:6', arabic: "بَدَتْ", transliteration: "badat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "became apparent", ur: "became apparent" } },
      { id: '7:22:7', arabic: "لَهُمَا", transliteration: "lahumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to both of them", ur: "کو both of them" } },
      { id: '7:22:8', arabic: "سَوْءَٰتُهُمَا", transliteration: "sawātuhumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their shame", ur: "their shame" } },
      { id: '7:22:9', arabic: "وَطَفِقَا", transliteration: "waṭafiqā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they began", ur: "اور وہ لوگ began" } },
      { id: '7:22:10', arabic: "يَخْصِفَانِ", transliteration: "yakhṣifāni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) fasten", ur: "(کو) fasten" } },
      { id: '7:22:11', arabic: "عَلَيْهِمَا", transliteration: "ʿalayhimā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over themselves", ur: "اوپر themselves" } },
      { id: '7:22:12', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:22:13', arabic: "وَرَقِ", transliteration: "waraqi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(the) leaves", ur: "(the) leaves" } },
      { id: '7:22:14', arabic: "ٱلْجَنَّةِ ۖ", transliteration: "l-janati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Garden", ur: "(of) the Garden" } },
      { id: '7:22:15', arabic: "وَنَادَىٰهُمَا", transliteration: "wanādāhumā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And called them both", ur: "اور called them both" } },
      { id: '7:22:16', arabic: "رَبُّهُمَآ", transliteration: "rabbuhumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their Lord", ur: "their رب" } },
      { id: '7:22:17', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Did not", ur: "Did نہیں" } },
      { id: '7:22:18', arabic: "أَنْهَكُمَا", transliteration: "anhakumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I forbid you both", ur: "میں forbid تم both" } },
      { id: '7:22:19', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:22:20', arabic: "تِلْكُمَا", transliteration: "til'kumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '7:22:21', arabic: "ٱلشَّجَرَةِ", transliteration: "l-shajarati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] tree", ur: "[the] tree" } },
      { id: '7:22:22', arabic: "وَأَقُل", transliteration: "wa-aqul", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and [I] say", ur: "اور [میں] کہو" } },
      { id: '7:22:23', arabic: "لَّكُمَآ", transliteration: "lakumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to both of you", ur: "کو both of تم" } },
      { id: '7:22:24', arabic: "إِنَّ", transliteration: "inna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:22:25', arabic: "ٱلشَّيْطَـٰنَ", transliteration: "l-shayṭāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] Shaitaan", ur: "[the] Shaitaan" } },
      { id: '7:22:26', arabic: "لَكُمَا", transliteration: "lakumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to both of you", ur: "کو both of تم" } },
      { id: '7:22:27', arabic: "عَدُوٌّۭ", transliteration: "ʿaduwwun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) an enemy", ur: "(is) an enemy" } },
      { id: '7:22:28', arabic: "مُّبِينٌۭ", transliteration: "mubīnun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "open", ur: "open" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'جار + مجرور' },
        { from: 25, to: 26, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  23: {
    text: "قَالَا رَبَّنَا ظَلَمْنَآ أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ ٱلْخَـٰسِرِينَ",
    translation: {
      en: "",
      ur: "دونوں عرض کرنے لگے کہ پروردگار ہم نے اپنی جانوں پر ظلم کیا اور اگر تو ہمیں نہیں بخشے گا اور ہم پر رحم نہیں کرے گا تو ہم تباہ ہو جائیں گے",
    },
    words: [
      { id: '7:23:1', arabic: "قَالَا", transliteration: "qālā", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Both of them said", ur: "Both of them کہا" } },
      { id: '7:23:2', arabic: "رَبَّنَا", transliteration: "rabbanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Lord", ur: "Our رب" } },
      { id: '7:23:3', arabic: "ظَلَمْنَآ", transliteration: "ẓalamnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we have wronged", ur: "ہم have wronged" } },
      { id: '7:23:4', arabic: "أَنفُسَنَا", transliteration: "anfusanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "ourselves", ur: "ourselves" } },
      { id: '7:23:5', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and if", ur: "اور if" } },
      { id: '7:23:6', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:23:7', arabic: "تَغْفِرْ", transliteration: "taghfir", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You forgive", ur: "تم forgive" } },
      { id: '7:23:8', arabic: "لَنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[for] us", ur: "[for] us" } },
      { id: '7:23:9', arabic: "وَتَرْحَمْنَا", transliteration: "watarḥamnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and have mercy (on) us", ur: "اور have رحمت (پر) us" } },
      { id: '7:23:10', arabic: "لَنَكُونَنَّ", transliteration: "lanakūnanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely, we will be", ur: "یقیناً, ہم will be" } },
      { id: '7:23:11', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '7:23:12', arabic: "ٱلْخَـٰسِرِينَ", transliteration: "l-khāsirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the losers", ur: "the losers" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  24: {
    text: "قَالَ ٱهْبِطُوا۟ بَعْضُكُمْ لِبَعْضٍ عَدُوٌّۭ ۖ وَلَكُمْ فِى ٱلْأَرْضِ مُسْتَقَرٌّۭ وَمَتَـٰعٌ إِلَىٰ حِينٍۢ",
    translation: {
      en: "",
      ur: "(خدا نے) فرمایا (تم سب بہشت سے) اتر جاؤ (اب سے) تم ایک دوسرے کے دشمن ہو اور تمہارے لیے ایک وقت (خاص) تک زمین پر ٹھکانہ اور (زندگی کا) سامان (کر دیا گیا) ہے",
    },
    words: [
      { id: '7:24:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "(Allah) said", ur: "(اللہ) کہا" } },
      { id: '7:24:2', arabic: "ٱهْبِطُوا۟", transliteration: "ih'biṭū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Get down", ur: "Get down" } },
      { id: '7:24:3', arabic: "بَعْضُكُمْ", transliteration: "baʿḍukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "some of you", ur: "some of تم" } },
      { id: '7:24:4', arabic: "لِبَعْضٍ", transliteration: "libaʿḍin", pos: ['P+N'], posLabel: 'P+N', root: "ب ع ض", meaning: { en: "to some others", ur: "کو some others" } },
      { id: '7:24:5', arabic: "عَدُوٌّۭ ۖ", transliteration: "ʿaduwwun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) enemy", ur: "(as) enemy" } },
      { id: '7:24:6', arabic: "وَلَكُمْ", transliteration: "walakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for you", ur: "اور for تم" } },
      { id: '7:24:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:24:8', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '7:24:9', arabic: "مُسْتَقَرٌّۭ", transliteration: "mus'taqarrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a dwelling place", ur: "(is) a dwelling place" } },
      { id: '7:24:10', arabic: "وَمَتَـٰعٌ", transliteration: "wamatāʿun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and livelihood", ur: "اور livelihood" } },
      { id: '7:24:11', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '7:24:12', arabic: "حِينٍۢ", transliteration: "ḥīnin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a time", ur: "a وقت" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  25: {
    text: "قَالَ فِيهَا تَحْيَوْنَ وَفِيهَا تَمُوتُونَ وَمِنْهَا تُخْرَجُونَ",
    translation: {
      en: "",
      ur: "(یعنی) فرمایا کہ اسی میں تمہارا جینا ہوگا اور اسی میں مرنا اور اسی میں سے (قیامت کو زندہ کر کے) نکالے جاؤ گے",
    },
    words: [
      { id: '7:25:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:25:2', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "In it", ur: "میں it" } },
      { id: '7:25:3', arabic: "تَحْيَوْنَ", transliteration: "taḥyawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you will live", ur: "تم will live" } },
      { id: '7:25:4', arabic: "وَفِيهَا", transliteration: "wafīhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and in it", ur: "اور میں it" } },
      { id: '7:25:5', arabic: "تَمُوتُونَ", transliteration: "tamūtūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you will die", ur: "تم will die" } },
      { id: '7:25:6', arabic: "وَمِنْهَا", transliteration: "wamin'hā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and from it", ur: "اور سے it" } },
      { id: '7:25:7', arabic: "تُخْرَجُونَ", transliteration: "tukh'rajūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you will be brought forth", ur: "تم will be brought forth" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  26: {
    text: "يَـٰبَنِىٓ ءَادَمَ قَدْ أَنزَلْنَا عَلَيْكُمْ لِبَاسًۭا يُوَٰرِى سَوْءَٰتِكُمْ وَرِيشًۭا ۖ وَلِبَاسُ ٱلتَّقْوَىٰ ذَٰلِكَ خَيْرٌۭ ۚ ذَٰلِكَ مِنْ ءَايَـٰتِ ٱللَّهِ لَعَلَّهُمْ يَذَّكَّرُونَ",
    translation: {
      en: "",
      ur: "اے نبی آدم ہم نے تم پر پوشاک اتاری کہ تمہارا ستر ڈھانکے اور (تمہارے بدن کو) زینت (دے) اور (جو) پرہیزگاری کا لباس (ہے) وہ سب سے اچھا ہے۔ یہ خدا کی نشانیاں ہیں تاکہ لوگ نصحیت پکڑ یں",
    },
    words: [
      { id: '7:26:1', arabic: "يَـٰبَنِىٓ", transliteration: "yābanī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O Children", ur: "اے اولاد" } },
      { id: '7:26:2', arabic: "ءَادَمَ", transliteration: "ādama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Adam", ur: "(of) Adam" } },
      { id: '7:26:3', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '7:26:4', arabic: "أَنزَلْنَا", transliteration: "anzalnā", pos: ['V'], posLabel: 'V', root: "ن ز ل", meaning: { en: "We have sent down", ur: "ہم have sent down" } },
      { id: '7:26:5', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '7:26:6', arabic: "لِبَاسًۭا", transliteration: "libāsan", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "clothing", ur: "clothing" } },
      { id: '7:26:7', arabic: "يُوَٰرِى", transliteration: "yuwārī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "it covers", ur: "it covers" } },
      { id: '7:26:8', arabic: "سَوْءَٰتِكُمْ", transliteration: "sawātikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your shame", ur: "your shame" } },
      { id: '7:26:9', arabic: "وَرِيشًۭا ۖ", transliteration: "warīshan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (as) an adornment", ur: "اور (as) an adornment" } },
      { id: '7:26:10', arabic: "وَلِبَاسُ", transliteration: "walibāsu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But the clothing", ur: "لیکن the clothing" } },
      { id: '7:26:11', arabic: "ٱلتَّقْوَىٰ", transliteration: "l-taqwā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) [the] righteousness ", ur: "(of) [the] righteousness " } },
      { id: '7:26:12', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:26:13', arabic: "خَيْرٌۭ ۚ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) best", ur: "(is) best" } },
      { id: '7:26:14', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '7:26:15', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) from", ur: "(is) سے" } },
      { id: '7:26:16', arabic: "ءَايَـٰتِ", transliteration: "āyāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Signs", ur: "(the) نشانیاں" } },
      { id: '7:26:17', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '7:26:18', arabic: "لَعَلَّهُمْ", transliteration: "laʿallahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that they may", ur: "so وہ وہ لوگ may" } },
      { id: '7:26:19', arabic: "يَذَّكَّرُونَ", transliteration: "yadhakkarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "remember", ur: "remember" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'جار + مجرور' }
      ],
    },
  },
  27: {
    text: "يَـٰبَنِىٓ ءَادَمَ لَا يَفْتِنَنَّكُمُ ٱلشَّيْطَـٰنُ كَمَآ أَخْرَجَ أَبَوَيْكُم مِّنَ ٱلْجَنَّةِ يَنزِعُ عَنْهُمَا لِبَاسَهُمَا لِيُرِيَهُمَا سَوْءَٰتِهِمَآ ۗ إِنَّهُۥ يَرَىٰكُمْ هُوَ وَقَبِيلُهُۥ مِنْ حَيْثُ لَا تَرَوْنَهُمْ ۗ إِنَّا جَعَلْنَا ٱلشَّيَـٰطِينَ أَوْلِيَآءَ لِلَّذِينَ لَا يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "اے نبی آدم (دیکھنا کہیں) شیطان تمہیں بہکا نہ دے جس طرح تمہارے ماں باپ کو (بہکا کر) بہشت سے نکلوا دیا اور ان سے ان کے کپڑے اتروا دیئے تاکہ ان کے ستر ان کو کھول کر دکھا دے۔ وہ اور اس کے بھائی تم کو ایسی جگہ سے دیکھتے رہے ہیں جہاں سے تم ان کو نہیں دیکھ سکتے ہم نے شیطانوں کو انہیں لوگوں کا رفیق کار بنایا ہے جو ایمان نہیں رکھتے",
    },
    words: [
      { id: '7:27:1', arabic: "يَـٰبَنِىٓ", transliteration: "yābanī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O Children", ur: "اے اولاد" } },
      { id: '7:27:2', arabic: "ءَادَمَ", transliteration: "ādama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Adam", ur: "(of) Adam" } },
      { id: '7:27:3', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(Let) not", ur: "(Let) نہیں" } },
      { id: '7:27:4', arabic: "يَفْتِنَنَّكُمُ", transliteration: "yaftinannakumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "tempt you", ur: "tempt تم" } },
      { id: '7:27:5', arabic: "ٱلشَّيْطَـٰنُ", transliteration: "l-shayṭānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] Shaitaan", ur: "[the] Shaitaan" } },
      { id: '7:27:6', arabic: "كَمَآ", transliteration: "kamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "as", ur: "as" } },
      { id: '7:27:7', arabic: "أَخْرَجَ", transliteration: "akhraja", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he drove out", ur: "وہ drove out" } },
      { id: '7:27:8', arabic: "أَبَوَيْكُم", transliteration: "abawaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your parents", ur: "your parents" } },
      { id: '7:27:9', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:27:10', arabic: "ٱلْجَنَّةِ", transliteration: "l-janati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Paradise", ur: "جنت" } },
      { id: '7:27:11', arabic: "يَنزِعُ", transliteration: "yanziʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "stripping", ur: "stripping" } },
      { id: '7:27:12', arabic: "عَنْهُمَا", transliteration: "ʿanhumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from both of them", ur: "سے both of them" } },
      { id: '7:27:13', arabic: "لِبَاسَهُمَا", transliteration: "libāsahumā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "their clothing", ur: "their clothing" } },
      { id: '7:27:14', arabic: "لِيُرِيَهُمَا", transliteration: "liyuriyahumā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to show both of them", ur: "کو show both of them" } },
      { id: '7:27:15', arabic: "سَوْءَٰتِهِمَآ ۗ", transliteration: "sawātihimā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their shame", ur: "their shame" } },
      { id: '7:27:16', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, he", ur: "بیشک, وہ" } },
      { id: '7:27:17', arabic: "يَرَىٰكُمْ", transliteration: "yarākum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "sees you ", ur: "sees تم " } },
      { id: '7:27:18', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "he", ur: "وہ" } },
      { id: '7:27:19', arabic: "وَقَبِيلُهُۥ", transliteration: "waqabīluhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and his tribe", ur: "اور his tribe" } },
      { id: '7:27:20', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:27:21', arabic: "حَيْثُ", transliteration: "ḥaythu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "where", ur: "where" } },
      { id: '7:27:22', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:27:23', arabic: "تَرَوْنَهُمْ ۗ", transliteration: "tarawnahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you see them", ur: "تم دیکھنا them" } },
      { id: '7:27:24', arabic: "إِنَّا", transliteration: "innā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:27:25', arabic: "جَعَلْنَا", transliteration: "jaʿalnā", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "We have made", ur: "ہم have made" } },
      { id: '7:27:26', arabic: "ٱلشَّيَـٰطِينَ", transliteration: "l-shayāṭīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the devils", ur: "the devils" } },
      { id: '7:27:27', arabic: "أَوْلِيَآءَ", transliteration: "awliyāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "friends", ur: "friends" } },
      { id: '7:27:28', arabic: "لِلَّذِينَ", transliteration: "lilladhīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of those who", ur: "of جو لوگ" } },
      { id: '7:27:29', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '7:27:30', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "believe", ur: "ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 20, to: 21, label: 'جار + مجرور' },
        { from: 22, to: 23, label: 'نفی + فعل' },
        { from: 25, to: 26, label: 'فعل + فاعل' },
        { from: 29, to: 30, label: 'نفی + فعل' }
      ],
    },
  },
  28: {
    text: "وَإِذَا فَعَلُوا۟ فَـٰحِشَةًۭ قَالُوا۟ وَجَدْنَا عَلَيْهَآ ءَابَآءَنَا وَٱللَّهُ أَمَرَنَا بِهَا ۗ قُلْ إِنَّ ٱللَّهَ لَا يَأْمُرُ بِٱلْفَحْشَآءِ ۖ أَتَقُولُونَ عَلَى ٱللَّهِ مَا لَا تَعْلَمُونَ",
    translation: {
      en: "",
      ur: "اور جب کوئی بے حیائی کا کام کرتے ہیں تو کہتے ہیں کہ ہم نے اپنے بزرگوں کو اسی طرح کرتے دیکھا ہے اور خدا نے بھی ہم کو یہی حکم دیا ہے۔ کہہ دو خدا بےحیائی کے کام کرنے کا ہرگز حکم نہیں دیتا۔ بھلا تم خدا کی نسبت ایسی بات کیوں کہتے ہو جس کا تمہیں علم نہیں",
    },
    words: [
      { id: '7:28:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:28:2', arabic: "فَعَلُوا۟", transliteration: "faʿalū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "they do", ur: "وہ لوگ do" } },
      { id: '7:28:3', arabic: "فَـٰحِشَةًۭ", transliteration: "fāḥishatan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "immorality", ur: "immorality" } },
      { id: '7:28:4', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they say", ur: "وہ لوگ کہو" } },
      { id: '7:28:5', arabic: "وَجَدْنَا", transliteration: "wajadnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "We found", ur: "ہم found" } },
      { id: '7:28:6', arabic: "عَلَيْهَآ", transliteration: "ʿalayhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on it", ur: "پر it" } },
      { id: '7:28:7', arabic: "ءَابَآءَنَا", transliteration: "ābāanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our forefathers", ur: "our forefathers" } },
      { id: '7:28:8', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Allah", ur: "اور اللہ" } },
      { id: '7:28:9', arabic: "أَمَرَنَا", transliteration: "amaranā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(has) ordered us", ur: "(has) ordered us" } },
      { id: '7:28:10', arabic: "بِهَا ۗ", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '7:28:11', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '7:28:12', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:28:13', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:28:14', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '7:28:15', arabic: "يَأْمُرُ", transliteration: "yamuru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "order", ur: "order" } },
      { id: '7:28:16', arabic: "بِٱلْفَحْشَآءِ ۖ", transliteration: "bil-faḥshāi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "immorality", ur: "immorality" } },
      { id: '7:28:17', arabic: "أَتَقُولُونَ", transliteration: "ataqūlūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you say", ur: "Do تم کہو" } },
      { id: '7:28:18', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "about", ur: "about" } },
      { id: '7:28:19', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:28:20', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:28:21', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:28:22', arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "you know", ur: "تم جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'نفی + فعل' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'نفی + فعل' }
      ],
    },
  },
  29: {
    text: "قُلْ أَمَرَ رَبِّى بِٱلْقِسْطِ ۖ وَأَقِيمُوا۟ وُجُوهَكُمْ عِندَ كُلِّ مَسْجِدٍۢ وَٱدْعُوهُ مُخْلِصِينَ لَهُ ٱلدِّينَ ۚ كَمَا بَدَأَكُمْ تَعُودُونَ",
    translation: {
      en: "",
      ur: "کہہ دو کہ میرے پروردگار نے تو انصاف کرنے کا حکم دیا ہے۔ اور یہ کہ ہر نماز کے وقت سیدھا (قبلے کی طرف) رخ کیا کرو اور خاص اسی کی عبادت کرو اور اسی کو پکارو۔ اس نے جس طرح تم کو ابتداء میں پیدا کیا تھا اسی طرح تم پھر پیدا ہوگے",
    },
    words: [
      { id: '7:29:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '7:29:2', arabic: "أَمَرَ", transliteration: "amara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(Has been) ordered", ur: "(Has been) ordered" } },
      { id: '7:29:3', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) my Lord", ur: "(by) my رب" } },
      { id: '7:29:4', arabic: "بِٱلْقِسْطِ ۖ", transliteration: "bil-qis'ṭi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "justice", ur: "justice" } },
      { id: '7:29:5', arabic: "وَأَقِيمُوا۟", transliteration: "wa-aqīmū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and set", ur: "اور set" } },
      { id: '7:29:6', arabic: "وُجُوهَكُمْ", transliteration: "wujūhakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your faces", ur: "your faces" } },
      { id: '7:29:7', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "at", ur: "at" } },
      { id: '7:29:8', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '7:29:9', arabic: "مَسْجِدٍۢ", transliteration: "masjidin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "masjid", ur: "masjid" } },
      { id: '7:29:10', arabic: "وَٱدْعُوهُ", transliteration: "wa-id'ʿūhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and invoke Him", ur: "اور invoke Him" } },
      { id: '7:29:11', arabic: "مُخْلِصِينَ", transliteration: "mukh'liṣīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(being) sincere", ur: "(being) sincere" } },
      { id: '7:29:12', arabic: "لَهُ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to Him", ur: "کو Him" } },
      { id: '7:29:13', arabic: "ٱلدِّينَ ۚ", transliteration: "l-dīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) the religion", ur: "(میں) the religion" } },
      { id: '7:29:14', arabic: "كَمَا", transliteration: "kamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "As", ur: "As" } },
      { id: '7:29:15', arabic: "بَدَأَكُمْ", transliteration: "bada-akum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He originated you", ur: "وہ originated تم" } },
      { id: '7:29:16', arabic: "تَعُودُونَ", transliteration: "taʿūdūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(so) will you return", ur: "(so) will تم return" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  30: {
    text: "فَرِيقًا هَدَىٰ وَفَرِيقًا حَقَّ عَلَيْهِمُ ٱلضَّلَـٰلَةُ ۗ إِنَّهُمُ ٱتَّخَذُوا۟ ٱلشَّيَـٰطِينَ أَوْلِيَآءَ مِن دُونِ ٱللَّهِ وَيَحْسَبُونَ أَنَّهُم مُّهْتَدُونَ",
    translation: {
      en: "",
      ur: "ایک فریق کو تو اس نے ہدایت دی اور ایک فریق پر گمراہی ثابت ہوچکی۔ ان لوگوں نے خدا کو چھوڑ کر شیطانوں کو رفیق بنا لیا اور سمجھتے (یہ) ہیں کہ ہدایت یاب ہیں",
    },
    words: [
      { id: '7:30:1', arabic: "فَرِيقًا", transliteration: "farīqan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "A group", ur: "A group" } },
      { id: '7:30:2', arabic: "هَدَىٰ", transliteration: "hadā", pos: ['V'], posLabel: 'V', root: "ه د ي", meaning: { en: "He guided", ur: "وہ guided" } },
      { id: '7:30:3', arabic: "وَفَرِيقًا", transliteration: "wafarīqan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a group", ur: "اور a group" } },
      { id: '7:30:4', arabic: "حَقَّ", transliteration: "ḥaqqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "deserved ", ur: "deserved " } },
      { id: '7:30:5', arabic: "عَلَيْهِمُ", transliteration: "ʿalayhimu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[on] they", ur: "[پر] وہ لوگ" } },
      { id: '7:30:6', arabic: "ٱلضَّلَـٰلَةُ ۗ", transliteration: "l-ḍalālatu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the astraying", ur: "the astraying" } },
      { id: '7:30:7', arabic: "إِنَّهُمُ", transliteration: "innahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, they", ur: "بیشک, وہ لوگ" } },
      { id: '7:30:8', arabic: "ٱتَّخَذُوا۟", transliteration: "ittakhadhū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "take", ur: "take" } },
      { id: '7:30:9', arabic: "ٱلشَّيَـٰطِينَ", transliteration: "l-shayāṭīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the devils", ur: "the devils" } },
      { id: '7:30:10', arabic: "أَوْلِيَآءَ", transliteration: "awliyāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) allies", ur: "(as) allies" } },
      { id: '7:30:11', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:30:12', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides", ur: "besides" } },
      { id: '7:30:13', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:30:14', arabic: "وَيَحْسَبُونَ", transliteration: "wayaḥsabūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while they think", ur: "while وہ لوگ think" } },
      { id: '7:30:15', arabic: "أَنَّهُم", transliteration: "annahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that they", ur: "وہ وہ لوگ" } },
      { id: '7:30:16', arabic: "مُّهْتَدُونَ", transliteration: "muh'tadūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are the) guided-ones", ur: "(are the) guided-ones" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  31: {
    text: "۞ يَـٰبَنِىٓ ءَادَمَ خُذُوا۟ زِينَتَكُمْ عِندَ كُلِّ مَسْجِدٍۢ وَكُلُوا۟ وَٱشْرَبُوا۟ وَلَا تُسْرِفُوٓا۟ ۚ إِنَّهُۥ لَا يُحِبُّ ٱلْمُسْرِفِينَ",
    translation: {
      en: "",
      ur: "اے نبی آدم! ہر نماز کے وقت اپنے تئیں مزّین کیا کرو اور کھاؤ اور پیؤ اور بےجا نہ اڑاؤ کہ خدا بےجا اڑانے والوں کو دوست نہیں رکھتا",
    },
    words: [
      { id: '7:31:1', arabic: "۞ يَـٰبَنِىٓ", transliteration: "yābanī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O Children", ur: "اے اولاد" } },
      { id: '7:31:2', arabic: "ءَادَمَ", transliteration: "ādama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Adam", ur: "(of) Adam" } },
      { id: '7:31:3', arabic: "خُذُوا۟", transliteration: "khudhū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Take", ur: "Take" } },
      { id: '7:31:4', arabic: "زِينَتَكُمْ", transliteration: "zīnatakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your adornment", ur: "your adornment" } },
      { id: '7:31:5', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "at", ur: "at" } },
      { id: '7:31:6', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '7:31:7', arabic: "مَسْجِدٍۢ", transliteration: "masjidin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "masjid", ur: "masjid" } },
      { id: '7:31:8', arabic: "وَكُلُوا۟", transliteration: "wakulū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and eat", ur: "اور eat" } },
      { id: '7:31:9', arabic: "وَٱشْرَبُوا۟", transliteration: "wa-ish'rabū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and drink", ur: "اور drink" } },
      { id: '7:31:10', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but (do) not", ur: "لیکن (do) نہیں" } },
      { id: '7:31:11', arabic: "تُسْرِفُوٓا۟ ۚ", transliteration: "tus'rifū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be extravagant", ur: "be extravagant" } },
      { id: '7:31:12', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, He", ur: "بیشک, وہ" } },
      { id: '7:31:13', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '7:31:14', arabic: "يُحِبُّ", transliteration: "yuḥibbu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "love", ur: "love" } },
      { id: '7:31:15', arabic: "ٱلْمُسْرِفِينَ", transliteration: "l-mus'rifīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the extravagant ones", ur: "the extravagant ones" } }
    ],
    structure: {
      relationships: [
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'نفی + فعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  32: {
    text: "قُلْ مَنْ حَرَّمَ زِينَةَ ٱللَّهِ ٱلَّتِىٓ أَخْرَجَ لِعِبَادِهِۦ وَٱلطَّيِّبَـٰتِ مِنَ ٱلرِّزْقِ ۚ قُلْ هِىَ لِلَّذِينَ ءَامَنُوا۟ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا خَالِصَةًۭ يَوْمَ ٱلْقِيَـٰمَةِ ۗ كَذَٰلِكَ نُفَصِّلُ ٱلْـَٔايَـٰتِ لِقَوْمٍۢ يَعْلَمُونَ",
    translation: {
      en: "",
      ur: "پوچھو تو کہ جو زینت (وآرائش) اور کھانے (پینے) کی پاکیزہ چیزیں خدا نے اپنے بندوں کے لیے پیدا کی ہیں ان کو حرام کس نے کیا ہے؟ کہہ دو کہ یہ چیزیں دنیا کی زندگی میں ایمان والوں کے لیے ہیں اور قیامت کے دن خاص ان ہی کا حصہ ہوں گی۔ اسی طرح خدا اپنی آیتیں سمجھنے والوں کے لیے کھول کھول کر بیان فرماتا ہے",
    },
    words: [
      { id: '7:32:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '7:32:2', arabic: "مَنْ", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Who", ur: "جو" } },
      { id: '7:32:3', arabic: "حَرَّمَ", transliteration: "ḥarrama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has forbidden", ur: "has forbidden" } },
      { id: '7:32:4', arabic: "زِينَةَ", transliteration: "zīnata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) adornment", ur: "(the) adornment" } },
      { id: '7:32:5', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(from) Allah", ur: "(سے) اللہ" } },
      { id: '7:32:6', arabic: "ٱلَّتِىٓ", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '7:32:7', arabic: "أَخْرَجَ", transliteration: "akhraja", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He has brought forth", ur: "وہ has brought forth" } },
      { id: '7:32:8', arabic: "لِعِبَادِهِۦ", transliteration: "liʿibādihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for His slaves", ur: "for His slaves" } },
      { id: '7:32:9', arabic: "وَٱلطَّيِّبَـٰتِ", transliteration: "wal-ṭayibāti", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the pure things", ur: "اور the pure things" } },
      { id: '7:32:10', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:32:11', arabic: "ٱلرِّزْقِ ۚ", transliteration: "l-riz'qi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sustenance", ur: "sustenance" } },
      { id: '7:32:12', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '7:32:13', arabic: "هِىَ", transliteration: "hiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "They", ur: "وہ لوگ" } },
      { id: '7:32:14', arabic: "لِلَّذِينَ", transliteration: "lilladhīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(are) for those who", ur: "(are) for جو لوگ" } },
      { id: '7:32:15', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '7:32:16', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "during", ur: "during" } },
      { id: '7:32:17', arabic: "ٱلْحَيَوٰةِ", transliteration: "l-ḥayati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the life", ur: "the زندگی" } },
      { id: '7:32:18', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the world", ur: "(of) the دنیا" } },
      { id: '7:32:19', arabic: "خَالِصَةًۭ", transliteration: "khāliṣatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "exclusively (for them)", ur: "exclusively (for them)" } },
      { id: '7:32:20', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on the) Day", ur: "(پر the) دن" } },
      { id: '7:32:21', arabic: "ٱلْقِيَـٰمَةِ ۗ", transliteration: "l-qiyāmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Resurrection", ur: "(of) Resurrection" } },
      { id: '7:32:22', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '7:32:23', arabic: "نُفَصِّلُ", transliteration: "nufaṣṣilu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We explain", ur: "ہم explain" } },
      { id: '7:32:24', arabic: "ٱلْـَٔايَـٰتِ", transliteration: "l-āyāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Signs", ur: "the نشانیاں" } },
      { id: '7:32:25', arabic: "لِقَوْمٍۢ", transliteration: "liqawmin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for (the) people", ur: "for (the) لوگ" } },
      { id: '7:32:26', arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "who know", ur: "جو جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'مضاف + مضاف إليه' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'فعل + فاعل' }
      ],
    },
  },
  33: {
    text: "قُلْ إِنَّمَا حَرَّمَ رَبِّىَ ٱلْفَوَٰحِشَ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ وَٱلْإِثْمَ وَٱلْبَغْىَ بِغَيْرِ ٱلْحَقِّ وَأَن تُشْرِكُوا۟ بِٱللَّهِ مَا لَمْ يُنَزِّلْ بِهِۦ سُلْطَـٰنًۭا وَأَن تَقُولُوا۟ عَلَى ٱللَّهِ مَا لَا تَعْلَمُونَ",
    translation: {
      en: "",
      ur: "کہہ دو کہ میرے پروردگار نے تو بےحیائی کی باتوں کو ظاہر ہوں یا پوشیدہ اور گناہ کو اور ناحق زیادتی کرنے کو حرام کیا ہے۔ اور اس کو بھی کہ تم کسی کو خدا کا شریک بناؤ جس کی اس نے کوئی سند نازل نہیں کی اور اس کو بھی کہ خدا کے بارے میں ایسی باتیں کہو جن کا تمہیں کچھ علم نہیں",
    },
    words: [
      { id: '7:33:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '7:33:2', arabic: "إِنَّمَا", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '7:33:3', arabic: "حَرَّمَ", transliteration: "ḥarrama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(had) forbidden", ur: "(had) forbidden" } },
      { id: '7:33:4', arabic: "رَبِّىَ", transliteration: "rabbiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my Lord", ur: "my رب" } },
      { id: '7:33:5', arabic: "ٱلْفَوَٰحِشَ", transliteration: "l-fawāḥisha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the shameful deeds", ur: "the shameful deeds" } },
      { id: '7:33:6', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:33:7', arabic: "ظَهَرَ", transliteration: "ẓahara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) apparent", ur: "(is) apparent" } },
      { id: '7:33:8', arabic: "مِنْهَا", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '7:33:9', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '7:33:10', arabic: "بَطَنَ", transliteration: "baṭana", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is concealed", ur: "is concealed" } },
      { id: '7:33:11', arabic: "وَٱلْإِثْمَ", transliteration: "wal-ith'ma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the sin", ur: "اور the sin" } },
      { id: '7:33:12', arabic: "وَٱلْبَغْىَ", transliteration: "wal-baghya", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the oppression", ur: "اور the oppression" } },
      { id: '7:33:13', arabic: "بِغَيْرِ", transliteration: "bighayri", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "without", ur: "without" } },
      { id: '7:33:14', arabic: "ٱلْحَقِّ", transliteration: "l-ḥaqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] right", ur: "[the] right" } },
      { id: '7:33:15', arabic: "وَأَن", transliteration: "wa-an", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and that", ur: "اور وہ" } },
      { id: '7:33:16', arabic: "تُشْرِكُوا۟", transliteration: "tush'rikū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you associate (others)", ur: "تم associate (others)" } },
      { id: '7:33:17', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Allah", ur: "ساتھ اللہ" } },
      { id: '7:33:18', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:33:19', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:33:20', arabic: "يُنَزِّلْ", transliteration: "yunazzil", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He (has) sent down", ur: "وہ (has) sent down" } },
      { id: '7:33:21', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '7:33:22', arabic: "سُلْطَـٰنًۭا", transliteration: "sul'ṭānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any authority", ur: "any authority" } },
      { id: '7:33:23', arabic: "وَأَن", transliteration: "wa-an", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and that", ur: "اور وہ" } },
      { id: '7:33:24', arabic: "تَقُولُوا۟", transliteration: "taqūlū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you say", ur: "تم کہو" } },
      { id: '7:33:25', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "about", ur: "about" } },
      { id: '7:33:26', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:33:27', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:33:28', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:33:29', arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "you know", ur: "تم جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'نفی + فعل' },
        { from: 21, to: 22, label: 'جار + مجرور' },
        { from: 25, to: 26, label: 'جار + مجرور' },
        { from: 28, to: 29, label: 'نفی + فعل' }
      ],
    },
  },
  34: {
    text: "وَلِكُلِّ أُمَّةٍ أَجَلٌۭ ۖ فَإِذَا جَآءَ أَجَلُهُمْ لَا يَسْتَأْخِرُونَ سَاعَةًۭ ۖ وَلَا يَسْتَقْدِمُونَ",
    translation: {
      en: "",
      ur: "اور ہر ایک فرقے کے لیے (موت کا) ایک وقت مقرر ہے۔ جب وہ آ جاتا ہے تو نہ تو ایک گھڑی دیر کرسکتے ہیں نہ جلدی",
    },
    words: [
      { id: '7:34:1', arabic: "وَلِكُلِّ", transliteration: "walikulli", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for every", ur: "اور for ہر" } },
      { id: '7:34:2', arabic: "أُمَّةٍ", transliteration: "ummatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "nation", ur: "nation" } },
      { id: '7:34:3', arabic: "أَجَلٌۭ ۖ", transliteration: "ajalun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is a fixed) term", ur: "(is a fixed) term" } },
      { id: '7:34:4', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So when", ur: "So when" } },
      { id: '7:34:5', arabic: "جَآءَ", transliteration: "jāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "comes", ur: "comes" } },
      { id: '7:34:6', arabic: "أَجَلُهُمْ", transliteration: "ajaluhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their term", ur: "their term" } },
      { id: '7:34:7', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(they can) not", ur: "(وہ لوگ can) نہیں" } },
      { id: '7:34:8', arabic: "يَسْتَأْخِرُونَ", transliteration: "yastakhirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "seek to delay", ur: "seek کو delay" } },
      { id: '7:34:9', arabic: "سَاعَةًۭ ۖ", transliteration: "sāʿatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an hour", ur: "an hour" } },
      { id: '7:34:10', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '7:34:11', arabic: "يَسْتَقْدِمُونَ", transliteration: "yastaqdimūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "seek to advance (it)", ur: "seek کو advance (it)" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'نفی + فعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  35: {
    text: "يَـٰبَنِىٓ ءَادَمَ إِمَّا يَأْتِيَنَّكُمْ رُسُلٌۭ مِّنكُمْ يَقُصُّونَ عَلَيْكُمْ ءَايَـٰتِى ۙ فَمَنِ ٱتَّقَىٰ وَأَصْلَحَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    translation: {
      en: "",
      ur: "اے نبی آدم! (ہم تم کو یہ نصیحت ہمیشہ کرتے رہے ہیں کہ) جب ہمارے پیغمبر تمہارے پاس آیا کریں اور ہماری آیتیں تم کو سنایا کریں (تو ان پر ایمان لایا کرو) کہ جو شخص (ان پر ایمان لا کر خدا سے) ڈرتا رہے گا اور اپنی حالت درست رکھے گا تو ایسے لوگوں کو نہ کچھ خوف ہوگا اور نہ وہ غمناک ہوں گے",
    },
    words: [
      { id: '7:35:1', arabic: "يَـٰبَنِىٓ", transliteration: "yābanī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O Children", ur: "اے اولاد" } },
      { id: '7:35:2', arabic: "ءَادَمَ", transliteration: "ādama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Adam", ur: "(of) Adam" } },
      { id: '7:35:3', arabic: "إِمَّا", transliteration: "immā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '7:35:4', arabic: "يَأْتِيَنَّكُمْ", transliteration: "yatiyannakum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "come to you", ur: "come کو تم" } },
      { id: '7:35:5', arabic: "رُسُلٌۭ", transliteration: "rusulun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Messengers", ur: "Messengers" } },
      { id: '7:35:6', arabic: "مِّنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from you", ur: "سے تم" } },
      { id: '7:35:7', arabic: "يَقُصُّونَ", transliteration: "yaquṣṣūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "relating", ur: "relating" } },
      { id: '7:35:8', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '7:35:9', arabic: "ءَايَـٰتِى ۙ", transliteration: "āyātī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My Verses", ur: "My Verses" } },
      { id: '7:35:10', arabic: "فَمَنِ", transliteration: "famani", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then whoever", ur: "پھر whoever" } },
      { id: '7:35:11', arabic: "ٱتَّقَىٰ", transliteration: "ittaqā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fears Allah", ur: "fears اللہ" } },
      { id: '7:35:12', arabic: "وَأَصْلَحَ", transliteration: "wa-aṣlaḥa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and reforms", ur: "اور reforms" } },
      { id: '7:35:13', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then no", ur: "پھر نہیں" } },
      { id: '7:35:14', arabic: "خَوْفٌ", transliteration: "khawfun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fear", ur: "ڈرنا" } },
      { id: '7:35:15', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on them", ur: "پر them" } },
      { id: '7:35:16', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '7:35:17', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '7:35:18', arabic: "يَحْزَنُونَ", transliteration: "yaḥzanūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will grieve", ur: "will grieve" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  36: {
    text: "وَٱلَّذِينَ كَذَّبُوا۟ بِـَٔايَـٰتِنَا وَٱسْتَكْبَرُوا۟ عَنْهَآ أُو۟لَـٰٓئِكَ أَصْحَـٰبُ ٱلنَّارِ ۖ هُمْ فِيهَا خَـٰلِدُونَ",
    translation: {
      en: "",
      ur: "اور جنہوں نے ہماری آیتوں کو جھٹلایا اور ان سے سرتابی کی وہی دوزخی ہیں کہ ہمیشہ اس میں (جلتے) رہیں گے",
    },
    words: [
      { id: '7:36:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But those who", ur: "لیکن جو لوگ" } },
      { id: '7:36:2', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "deny", ur: "deny" } },
      { id: '7:36:3', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Our Verses", ur: "Our Verses" } },
      { id: '7:36:4', arabic: "وَٱسْتَكْبَرُوا۟", transliteration: "wa-is'takbarū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (are) arrogant", ur: "اور (are) arrogant" } },
      { id: '7:36:5', arabic: "عَنْهَآ", transliteration: "ʿanhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "towards them", ur: "towards them" } },
      { id: '7:36:6', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those", ur: "those" } },
      { id: '7:36:7', arabic: "أَصْحَـٰبُ", transliteration: "aṣḥābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are the) companions", ur: "(are the) companions" } },
      { id: '7:36:8', arabic: "ٱلنَّارِ ۖ", transliteration: "l-nāri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Fire", ur: "(of) the آگ" } },
      { id: '7:36:9', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '7:36:10', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '7:36:11', arabic: "خَـٰلِدُونَ", transliteration: "khālidūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will abide forever", ur: "will abide forever" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  37: {
    text: "فَمَنْ أَظْلَمُ مِمَّنِ ٱفْتَرَىٰ عَلَى ٱللَّهِ كَذِبًا أَوْ كَذَّبَ بِـَٔايَـٰتِهِۦٓ ۚ أُو۟لَـٰٓئِكَ يَنَالُهُمْ نَصِيبُهُم مِّنَ ٱلْكِتَـٰبِ ۖ حَتَّىٰٓ إِذَا جَآءَتْهُمْ رُسُلُنَا يَتَوَفَّوْنَهُمْ قَالُوٓا۟ أَيْنَ مَا كُنتُمْ تَدْعُونَ مِن دُونِ ٱللَّهِ ۖ قَالُوا۟ ضَلُّوا۟ عَنَّا وَشَهِدُوا۟ عَلَىٰٓ أَنفُسِهِمْ أَنَّهُمْ كَانُوا۟ كَـٰفِرِينَ",
    translation: {
      en: "",
      ur: "تو اس سے زیادہ ظالم کون ہے جو خدا پر جھوٹ باندھے یا اس کی آیتوں کو جھٹلائے۔ ان کو ان کے نصیب کا لکھا ملتا ہی رہے گا یہاں تک کہ جب ان کے پاس ہمارے بھیجے ہوئے (فرشتے) جان نکالنے آئیں گے تو کہیں گے کہ جن کو تم خدا کے سوا پکارا کرتے تھے وہ (اب) کہاں ہیں؟ وہ کہیں گے (معلوم نہیں) کہ وہ ہم سے (کہاں) غائب ہوگئے اور اقرار کریں گے کہ بےشک وہ کافر تھے",
    },
    words: [
      { id: '7:37:1', arabic: "فَمَنْ", transliteration: "faman", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then who", ur: "پھر جو" } },
      { id: '7:37:2', arabic: "أَظْلَمُ", transliteration: "aẓlamu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) more unjust", ur: "(is) more unjust" } },
      { id: '7:37:3', arabic: "مِمَّنِ", transliteration: "mimmani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than (one) who", ur: "than (one) جو" } },
      { id: '7:37:4', arabic: "ٱفْتَرَىٰ", transliteration: "if'tarā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "invented", ur: "invented" } },
      { id: '7:37:5', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '7:37:6', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:37:7', arabic: "كَذِبًا", transliteration: "kadhiban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a lie", ur: "a lie" } },
      { id: '7:37:8', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '7:37:9', arabic: "كَذَّبَ", transliteration: "kadhaba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "denies", ur: "denies" } },
      { id: '7:37:10', arabic: "بِـَٔايَـٰتِهِۦٓ ۚ", transliteration: "biāyātihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "His Verses", ur: "His Verses" } },
      { id: '7:37:11', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those ", ur: "Those " } },
      { id: '7:37:12', arabic: "يَنَالُهُمْ", transliteration: "yanāluhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will reach them", ur: "will reach them" } },
      { id: '7:37:13', arabic: "نَصِيبُهُم", transliteration: "naṣībuhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "their portion", ur: "their portion" } },
      { id: '7:37:14', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:37:15', arabic: "ٱلْكِتَـٰبِ ۖ", transliteration: "l-kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '7:37:16', arabic: "حَتَّىٰٓ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '7:37:17', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '7:37:18', arabic: "جَآءَتْهُمْ", transliteration: "jāathum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "comes to them", ur: "comes کو them" } },
      { id: '7:37:19', arabic: "رُسُلُنَا", transliteration: "rusulunā", pos: ['N'], posLabel: 'N', root: "ر س ل", meaning: { en: "Our messengers (Angels)", ur: "Our messengers (Angels)" } },
      { id: '7:37:20', arabic: "يَتَوَفَّوْنَهُمْ", transliteration: "yatawaffawnahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) take them in death", ur: "(کو) take them میں موت" } },
      { id: '7:37:21', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they say", ur: "وہ لوگ کہو" } },
      { id: '7:37:22', arabic: "أَيْنَ", transliteration: "ayna", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Where are", ur: "Where are" } },
      { id: '7:37:23', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "those (whom)", ur: "those (whom)" } },
      { id: '7:37:24', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you used to", ur: "تم used کو" } },
      { id: '7:37:25', arabic: "تَدْعُونَ", transliteration: "tadʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "invoke", ur: "invoke" } },
      { id: '7:37:26', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:37:27', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides", ur: "besides" } },
      { id: '7:37:28', arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:37:29', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They say", ur: "وہ لوگ کہو" } },
      { id: '7:37:30', arabic: "ضَلُّوا۟", transliteration: "ḍallū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They strayed", ur: "وہ لوگ strayed" } },
      { id: '7:37:31', arabic: "عَنَّا", transliteration: "ʿannā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from us", ur: "سے us" } },
      { id: '7:37:32', arabic: "وَشَهِدُوا۟", transliteration: "washahidū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they (will) testify", ur: "اور وہ لوگ (will) testify" } },
      { id: '7:37:33', arabic: "عَلَىٰٓ", transliteration: "ʿalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against", ur: "against" } },
      { id: '7:37:34', arabic: "أَنفُسِهِمْ", transliteration: "anfusihim", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "themselves", ur: "themselves" } },
      { id: '7:37:35', arabic: "أَنَّهُمْ", transliteration: "annahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that they", ur: "وہ وہ لوگ" } },
      { id: '7:37:36', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "were", ur: "were" } },
      { id: '7:37:37', arabic: "كَـٰفِرِينَ", transliteration: "kāfirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "disbelievers", ur: "کافر" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
        { from: 23, to: 24, label: 'موصول + صلة' },
        { from: 26, to: 27, label: 'جار + مجرور' },
        { from: 30, to: 31, label: 'فعل + فاعل' }
      ],
    },
  },
  38: {
    text: "قَالَ ٱدْخُلُوا۟ فِىٓ أُمَمٍۢ قَدْ خَلَتْ مِن قَبْلِكُم مِّنَ ٱلْجِنِّ وَٱلْإِنسِ فِى ٱلنَّارِ ۖ كُلَّمَا دَخَلَتْ أُمَّةٌۭ لَّعَنَتْ أُخْتَهَا ۖ حَتَّىٰٓ إِذَا ٱدَّارَكُوا۟ فِيهَا جَمِيعًۭا قَالَتْ أُخْرَىٰهُمْ لِأُولَىٰهُمْ رَبَّنَا هَـٰٓؤُلَآءِ أَضَلُّونَا فَـَٔاتِهِمْ عَذَابًۭا ضِعْفًۭا مِّنَ ٱلنَّارِ ۖ قَالَ لِكُلٍّۢ ضِعْفٌۭ وَلَـٰكِن لَّا تَعْلَمُونَ",
    translation: {
      en: "",
      ur: "تو خدا فرمائے گا کہ جنّوں اور انسانوں کی جو جماعتیں تم سے پہلے ہو گزری ہیں ان کے ساتھ تم بھی داخل جہنم ہو جاؤ۔ جب ایک جماعت (وہاں) جا داخل ہو گئی تو اپنی (مذہبی) بہن (یعنی اپنے جیسی دوسری جماعت) پر لعنت کرے گی۔ یہاں تک کہ جب سب اس میں داخل ہو جائیں گے تو پچھلی جماعت پہلی کی نسبت کہے گی کہ اے پروردگار! ان ہی لوگوں نے ہم کو گمراہ کیا تھا تو ان کو آتش جہنم کا دگنا عذاب دے۔ خدا فرمائے گا کہ (تم) سب کو دگنا (عذاب دیا جائے گا) مگر تم نہیں جانتے",
    },
    words: [
      { id: '7:38:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He (will) say", ur: "وہ (will) کہو" } },
      { id: '7:38:2', arabic: "ٱدْخُلُوا۟", transliteration: "ud'khulū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Enter", ur: "Enter" } },
      { id: '7:38:3', arabic: "فِىٓ", transliteration: "fī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '7:38:4', arabic: "أُمَمٍۢ", transliteration: "umamin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) nations", ur: "(the) nations" } },
      { id: '7:38:5', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(who)", ur: "(جو)" } },
      { id: '7:38:6', arabic: "خَلَتْ", transliteration: "khalat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "passed away", ur: "passed away" } },
      { id: '7:38:7', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:38:8', arabic: "قَبْلِكُم", transliteration: "qablikum", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before you", ur: "پہلے تم" } },
      { id: '7:38:9', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:38:10', arabic: "ٱلْجِنِّ", transliteration: "l-jini", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the jinn", ur: "the jinn" } },
      { id: '7:38:11', arabic: "وَٱلْإِنسِ", transliteration: "wal-insi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the men", ur: "اور the men" } },
      { id: '7:38:12', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:38:13', arabic: "ٱلنَّارِ ۖ", transliteration: "l-nāri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Fire", ur: "the آگ" } },
      { id: '7:38:14', arabic: "كُلَّمَا", transliteration: "kullamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Every time", ur: "ہر وقت" } },
      { id: '7:38:15', arabic: "دَخَلَتْ", transliteration: "dakhalat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "entered", ur: "entered" } },
      { id: '7:38:16', arabic: "أُمَّةٌۭ", transliteration: "ummatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a nation", ur: "a nation" } },
      { id: '7:38:17', arabic: "لَّعَنَتْ", transliteration: "laʿanat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "it cursed", ur: "it cursed" } },
      { id: '7:38:18', arabic: "أُخْتَهَا ۖ", transliteration: "ukh'tahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its sister (nation)", ur: "its sister (nation)" } },
      { id: '7:38:19', arabic: "حَتَّىٰٓ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '7:38:20', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '7:38:21', arabic: "ٱدَّارَكُوا۟", transliteration: "iddārakū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they had overtaken one another", ur: "وہ لوگ had overtaken one another" } },
      { id: '7:38:22', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '7:38:23', arabic: "جَمِيعًۭا", transliteration: "jamīʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } },
      { id: '7:38:24', arabic: "قَالَتْ", transliteration: "qālat", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "(will) say", ur: "(will) کہو" } },
      { id: '7:38:25', arabic: "أُخْرَىٰهُمْ", transliteration: "ukh'rāhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) last of them", ur: "(the) last of them" } },
      { id: '7:38:26', arabic: "لِأُولَىٰهُمْ", transliteration: "liūlāhum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "about the first of them", ur: "about the first of them" } },
      { id: '7:38:27', arabic: "رَبَّنَا", transliteration: "rabbanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Lord", ur: "Our رب" } },
      { id: '7:38:28', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "these", ur: "these" } },
      { id: '7:38:29', arabic: "أَضَلُّونَا", transliteration: "aḍallūnā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "misled us", ur: "misled us" } },
      { id: '7:38:30', arabic: "فَـَٔاتِهِمْ", transliteration: "faātihim", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so give them", ur: "so give them" } },
      { id: '7:38:31', arabic: "عَذَابًۭا", transliteration: "ʿadhāban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "punishment", ur: "عذاب" } },
      { id: '7:38:32', arabic: "ضِعْفًۭا", transliteration: "ḍiʿ'fan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "double", ur: "double" } },
      { id: '7:38:33', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:38:34', arabic: "ٱلنَّارِ ۖ", transliteration: "l-nāri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Fire", ur: "the آگ" } },
      { id: '7:38:35', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He (will) say", ur: "وہ (will) کہو" } },
      { id: '7:38:36', arabic: "لِكُلٍّۢ", transliteration: "likullin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "For each", ur: "For ہر" } },
      { id: '7:38:37', arabic: "ضِعْفٌۭ", transliteration: "ḍiʿ'fun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a double", ur: "(is) a double" } },
      { id: '7:38:38', arabic: "وَلَـٰكِن", transliteration: "walākin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "[and] but", ur: "[اور] لیکن" } },
      { id: '7:38:39', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:38:40', arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "you know", ur: "تم جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'مضاف + مضاف إليه' },
        { from: 26, to: 27, label: 'جار + مجرور' },
        { from: 33, to: 34, label: 'مضاف + مضاف إليه' },
        { from: 36, to: 37, label: 'جار + مجرور' }
      ],
    },
  },
  39: {
    text: "وَقَالَتْ أُولَىٰهُمْ لِأُخْرَىٰهُمْ فَمَا كَانَ لَكُمْ عَلَيْنَا مِن فَضْلٍۢ فَذُوقُوا۟ ٱلْعَذَابَ بِمَا كُنتُمْ تَكْسِبُونَ",
    translation: {
      en: "",
      ur: "اور پہلی جماعت پچھلی جماعت سے کہے گی کہ تم کو ہم پر کچھ بھی فضیلت نہ ہوئی تو جو (عمل) تم کیا کرتے تھے اس کے بدلے میں عذاب کے مزے چکھو",
    },
    words: [
      { id: '7:39:1', arabic: "وَقَالَتْ", transliteration: "waqālat", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And (will) say", ur: "اور (will) کہو" } },
      { id: '7:39:2', arabic: "أُولَىٰهُمْ", transliteration: "ūlāhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) first of them", ur: "(the) first of them" } },
      { id: '7:39:3', arabic: "لِأُخْرَىٰهُمْ", transliteration: "li-ukh'rāhum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to (the) last of them", ur: "کو (the) last of them" } },
      { id: '7:39:4', arabic: "فَمَا", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then not", ur: "پھر نہیں" } },
      { id: '7:39:5', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '7:39:6', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '7:39:7', arabic: "عَلَيْنَا", transliteration: "ʿalaynā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon us", ur: "پر us" } },
      { id: '7:39:8', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '7:39:9', arabic: "فَضْلٍۢ", transliteration: "faḍlin", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "superiority", ur: "superiority" } },
      { id: '7:39:10', arabic: "فَذُوقُوا۟", transliteration: "fadhūqū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so taste", ur: "so taste" } },
      { id: '7:39:11', arabic: "ٱلْعَذَابَ", transliteration: "l-ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '7:39:12', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '7:39:13', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you used to", ur: "تم used کو" } },
      { id: '7:39:14', arabic: "تَكْسِبُونَ", transliteration: "taksibūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "earn", ur: "earn" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  40: {
    text: "إِنَّ ٱلَّذِينَ كَذَّبُوا۟ بِـَٔايَـٰتِنَا وَٱسْتَكْبَرُوا۟ عَنْهَا لَا تُفَتَّحُ لَهُمْ أَبْوَٰبُ ٱلسَّمَآءِ وَلَا يَدْخُلُونَ ٱلْجَنَّةَ حَتَّىٰ يَلِجَ ٱلْجَمَلُ فِى سَمِّ ٱلْخِيَاطِ ۚ وَكَذَٰلِكَ نَجْزِى ٱلْمُجْرِمِينَ",
    translation: {
      en: "",
      ur: "جن لوگوں نے ہماری آیتوں کو جھٹلایا اور ان سے سرتابی کی۔ ان کے لیے نہ آسمان کے دروازے کھولے جائیں گے اور نہ وہ بہشت میں داخل ہوں گے۔ یہاں تک کہ اونٹ سوئی کے ناکے میں سے نہ نکل جائے اور گنہگاروں کو ہم ایسی ہی سزا دیا کرتے ہیں",
    },
    words: [
      { id: '7:40:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:40:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '7:40:3', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '7:40:4', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Our Verses", ur: "Our Verses" } },
      { id: '7:40:5', arabic: "وَٱسْتَكْبَرُوا۟", transliteration: "wa-is'takbarū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (were) arrogant", ur: "اور (were) arrogant" } },
      { id: '7:40:6', arabic: "عَنْهَا", transliteration: "ʿanhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "towards them", ur: "towards them" } },
      { id: '7:40:7', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(will) not", ur: "(will) نہیں" } },
      { id: '7:40:8', arabic: "تُفَتَّحُ", transliteration: "tufattaḥu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be opened", ur: "be opened" } },
      { id: '7:40:9', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '7:40:10', arabic: "أَبْوَٰبُ", transliteration: "abwābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) doors", ur: "(the) doors" } },
      { id: '7:40:11', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the heaven", ur: "(of) the آسمان" } },
      { id: '7:40:12', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '7:40:13', arabic: "يَدْخُلُونَ", transliteration: "yadkhulūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will enter", ur: "وہ لوگ will enter" } },
      { id: '7:40:14', arabic: "ٱلْجَنَّةَ", transliteration: "l-janata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Paradise", ur: "جنت" } },
      { id: '7:40:15', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '7:40:16', arabic: "يَلِجَ", transliteration: "yalija", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "passes", ur: "passes" } },
      { id: '7:40:17', arabic: "ٱلْجَمَلُ", transliteration: "l-jamalu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the camel", ur: "the camel" } },
      { id: '7:40:18', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "through", ur: "through" } },
      { id: '7:40:19', arabic: "سَمِّ", transliteration: "sammi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) eye", ur: "(the) eye" } },
      { id: '7:40:20', arabic: "ٱلْخِيَاطِ ۚ", transliteration: "l-khiyāṭi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the needle", ur: "(of) the needle" } },
      { id: '7:40:21', arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And thus", ur: "اور thus" } },
      { id: '7:40:22', arabic: "نَجْزِى", transliteration: "najzī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We recompense", ur: "ہم recompense" } },
      { id: '7:40:23', arabic: "ٱلْمُجْرِمِينَ", transliteration: "l-muj'rimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the criminals", ur: "the criminals" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'نفی + فعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'مضاف + مضاف إليه' },
        { from: 22, to: 23, label: 'فعل + فاعل' }
      ],
    },
  },
  41: {
    text: "لَهُم مِّن جَهَنَّمَ مِهَادٌۭ وَمِن فَوْقِهِمْ غَوَاشٍۢ ۚ وَكَذَٰلِكَ نَجْزِى ٱلظَّـٰلِمِينَ",
    translation: {
      en: "",
      ur: "ایسے لوگوں کے لیے (نیچے) بچھونا بھی (آتش) جہنم کا ہوگا اور اوپر سے اوڑھنا بھی (اسی کا) اور ظالموں کو ہم ایسی ہی سزا دیا کرتے ہیں",
    },
    words: [
      { id: '7:41:1', arabic: "لَهُم", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For them", ur: "For them" } },
      { id: '7:41:2', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:41:3', arabic: "جَهَنَّمَ", transliteration: "jahannama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Hell", ur: "(the) جہنم" } },
      { id: '7:41:4', arabic: "مِهَادٌۭ", transliteration: "mihādun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) a bed", ur: "(is) a bed" } },
      { id: '7:41:5', arabic: "وَمِن", transliteration: "wamin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and from", ur: "اور سے" } },
      { id: '7:41:6', arabic: "فَوْقِهِمْ", transliteration: "fawqihim", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "over them", ur: "اوپر them" } },
      { id: '7:41:7', arabic: "غَوَاشٍۢ ۚ", transliteration: "ghawāshin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "coverings", ur: "coverings" } },
      { id: '7:41:8', arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And thus", ur: "اور thus" } },
      { id: '7:41:9', arabic: "نَجْزِى", transliteration: "najzī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We recompense", ur: "ہم recompense" } },
      { id: '7:41:10', arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoers", ur: "the wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  42: {
    text: "وَٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ لَا نُكَلِّفُ نَفْسًا إِلَّا وُسْعَهَآ أُو۟لَـٰٓئِكَ أَصْحَـٰبُ ٱلْجَنَّةِ ۖ هُمْ فِيهَا خَـٰلِدُونَ",
    translation: {
      en: "",
      ur: "اور جو لوگ ایمان لائے اور عمل نیک کرتے رہے اور ہم (عملوں کے لیے) کسی شخص کو اس کی طاقت سے زیادہ تکلیف نہیں دیتے۔ ایسے ہی لوگ اہل بہشت ہیں (کہ) اس میں ہمیشہ رہیں گے",
    },
    words: [
      { id: '7:42:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But those who", ur: "لیکن جو لوگ" } },
      { id: '7:42:2', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '7:42:3', arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع م ل", meaning: { en: "and do", ur: "اور do" } },
      { id: '7:42:4', arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] righteous deeds", ur: "[the] نیک deeds" } },
      { id: '7:42:5', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:42:6', arabic: "نُكَلِّفُ", transliteration: "nukallifu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We burden", ur: "ہم burden" } },
      { id: '7:42:7', arabic: "نَفْسًا", transliteration: "nafsan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "any soul", ur: "any روح" } },
      { id: '7:42:8', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:42:9', arabic: "وُسْعَهَآ", transliteration: "wus'ʿahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) its capacity", ur: "(کو) its capacity" } },
      { id: '7:42:10', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those", ur: "Those" } },
      { id: '7:42:11', arabic: "أَصْحَـٰبُ", transliteration: "aṣḥābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are the) companions", ur: "(are the) companions" } },
      { id: '7:42:12', arabic: "ٱلْجَنَّةِ ۖ", transliteration: "l-janati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Paradise", ur: "(of) جنت" } },
      { id: '7:42:13', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '7:42:14', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '7:42:15', arabic: "خَـٰلِدُونَ", transliteration: "khālidūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(will) abide forever", ur: "(will) abide forever" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  43: {
    text: "وَنَزَعْنَا مَا فِى صُدُورِهِم مِّنْ غِلٍّۢ تَجْرِى مِن تَحْتِهِمُ ٱلْأَنْهَـٰرُ ۖ وَقَالُوا۟ ٱلْحَمْدُ لِلَّهِ ٱلَّذِى هَدَىٰنَا لِهَـٰذَا وَمَا كُنَّا لِنَهْتَدِىَ لَوْلَآ أَنْ هَدَىٰنَا ٱللَّهُ ۖ لَقَدْ جَآءَتْ رُسُلُ رَبِّنَا بِٱلْحَقِّ ۖ وَنُودُوٓا۟ أَن تِلْكُمُ ٱلْجَنَّةُ أُورِثْتُمُوهَا بِمَا كُنتُمْ تَعْمَلُونَ",
    translation: {
      en: "",
      ur: "اور جو کینے ان کے دلوں میں ہوں گے ہم سب نکال ڈالیں گے۔ ان کے محلوں کے نیچے نہریں بہہ رہی ہوں گی اور کہیں گے کہ خدا کا شکر ہے جس نے ہم کو یہاں کا راستہ دکھایا اور اگر خدا ہم کو رستہ نہ دکھاتا تو ہم رستہ نہ پا سکتے۔ بےشک ہمارا پروردگار کے رسول حق بات لے کر آئے تھے اور (اس روز) منادی کر دی جائے گی کہ تم ان اعمال کے صلے میں جو دنیا میں کرتے تھے اس بہشت کے وارث بنا دیئے گئے ہو",
    },
    words: [
      { id: '7:43:1', arabic: "وَنَزَعْنَا", transliteration: "wanazaʿnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We will remove", ur: "اور ہم will remove" } },
      { id: '7:43:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whatever", ur: "whatever" } },
      { id: '7:43:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '7:43:4', arabic: "صُدُورِهِم", transliteration: "ṣudūrihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their breasts", ur: "their breasts" } },
      { id: '7:43:5', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:43:6', arabic: "غِلٍّۢ", transliteration: "ghillin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "malice", ur: "malice" } },
      { id: '7:43:7', arabic: "تَجْرِى", transliteration: "tajrī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Flows", ur: "Flows" } },
      { id: '7:43:8', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:43:9', arabic: "تَحْتِهِمُ", transliteration: "taḥtihimu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "underneath them", ur: "underneath them" } },
      { id: '7:43:10', arabic: "ٱلْأَنْهَـٰرُ ۖ", transliteration: "l-anhāru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the rivers", ur: "the rivers" } },
      { id: '7:43:11', arabic: "وَقَالُوا۟", transliteration: "waqālū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And they will say", ur: "اور وہ لوگ will کہو" } },
      { id: '7:43:12', arabic: "ٱلْحَمْدُ", transliteration: "l-ḥamdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "All the praise", ur: "سب the praise" } },
      { id: '7:43:13', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) for Allah", ur: "(is) for اللہ" } },
      { id: '7:43:14', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the One Who", ur: "the One جو" } },
      { id: '7:43:15', arabic: "هَدَىٰنَا", transliteration: "hadānā", pos: ['N'], posLabel: 'N', root: "ه د ي", meaning: { en: "guided us", ur: "guided us" } },
      { id: '7:43:16', arabic: "لِهَـٰذَا", transliteration: "lihādhā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to this", ur: "کو this" } },
      { id: '7:43:17', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '7:43:18', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we were", ur: "ہم were" } },
      { id: '7:43:19', arabic: "لِنَهْتَدِىَ", transliteration: "linahtadiya", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to receive guidance", ur: "کو receive guidance" } },
      { id: '7:43:20', arabic: "لَوْلَآ", transliteration: "lawlā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if not", ur: "if نہیں" } },
      { id: '7:43:21', arabic: "أَنْ", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '7:43:22', arabic: "هَدَىٰنَا", transliteration: "hadānā", pos: ['N'], posLabel: 'N', root: "ه د ي", meaning: { en: "(had) guided us", ur: "(had) guided us" } },
      { id: '7:43:23', arabic: "ٱللَّهُ ۖ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:43:24', arabic: "لَقَدْ", transliteration: "laqad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Certainly", ur: "Certainly" } },
      { id: '7:43:25', arabic: "جَآءَتْ", transliteration: "jāat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came", ur: "came" } },
      { id: '7:43:26', arabic: "رُسُلُ", transliteration: "rusulu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Messengers", ur: "Messengers" } },
      { id: '7:43:27', arabic: "رَبِّنَا", transliteration: "rabbinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) our Lord", ur: "(of) our رب" } },
      { id: '7:43:28', arabic: "بِٱلْحَقِّ ۖ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with the truth", ur: "ساتھ the سچ" } },
      { id: '7:43:29', arabic: "وَنُودُوٓا۟", transliteration: "wanūdū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they will be addressed", ur: "اور وہ لوگ will be addressed" } },
      { id: '7:43:30', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '7:43:31', arabic: "تِلْكُمُ", transliteration: "til'kumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "This", ur: "This" } },
      { id: '7:43:32', arabic: "ٱلْجَنَّةُ", transliteration: "l-janatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Paradise", ur: "(is) جنت" } },
      { id: '7:43:33', arabic: "أُورِثْتُمُوهَا", transliteration: "ūrith'tumūhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have been made to inherit it", ur: "تم have been made کو inherit it" } },
      { id: '7:43:34', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '7:43:35', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you used to", ur: "تم used کو" } },
      { id: '7:43:36', arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "do", ur: "do" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  44: {
    text: "وَنَادَىٰٓ أَصْحَـٰبُ ٱلْجَنَّةِ أَصْحَـٰبَ ٱلنَّارِ أَن قَدْ وَجَدْنَا مَا وَعَدَنَا رَبُّنَا حَقًّۭا فَهَلْ وَجَدتُّم مَّا وَعَدَ رَبُّكُمْ حَقًّۭا ۖ قَالُوا۟ نَعَمْ ۚ فَأَذَّنَ مُؤَذِّنٌۢ بَيْنَهُمْ أَن لَّعْنَةُ ٱللَّهِ عَلَى ٱلظَّـٰلِمِينَ",
    translation: {
      en: "",
      ur: "اور اہل بہشت دوزخیوں سے پکار کر کہیں گے کہ جو وعدہ ہمارے پروردگار نے ہم سے کیا تھا ہم نے تو اسے سچا پالیا۔ بھلا جو وعدہ تمہارے پروردگار نے تم سے کیا تھا تم نے بھی اسے سچا پایا؟ وہ کہیں گے ہاں تو (اس وقت) ان میں ایک پکارنے والا پکارے گا کہ بےانصافوں پر خدا کی لعنت",
    },
    words: [
      { id: '7:44:1', arabic: "وَنَادَىٰٓ", transliteration: "wanādā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And will call out", ur: "اور will call out" } },
      { id: '7:44:2', arabic: "أَصْحَـٰبُ", transliteration: "aṣḥābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) companions", ur: "(the) companions" } },
      { id: '7:44:3', arabic: "ٱلْجَنَّةِ", transliteration: "l-janati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Paradise", ur: "(of) جنت" } },
      { id: '7:44:4', arabic: "أَصْحَـٰبَ", transliteration: "aṣḥāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to the) companions", ur: "(کو the) companions" } },
      { id: '7:44:5', arabic: "ٱلنَّارِ", transliteration: "l-nāri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Fire", ur: "(of) the آگ" } },
      { id: '7:44:6', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:44:7', arabic: "قَدْ", transliteration: "qad", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:44:8', arabic: "وَجَدْنَا", transliteration: "wajadnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "we found", ur: "ہم found" } },
      { id: '7:44:9', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:44:10', arabic: "وَعَدَنَا", transliteration: "waʿadanā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(had) promised us", ur: "(had) promised us" } },
      { id: '7:44:11', arabic: "رَبُّنَا", transliteration: "rabbunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our Lord", ur: "our رب" } },
      { id: '7:44:12', arabic: "حَقًّۭا", transliteration: "ḥaqqan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "true", ur: "true" } },
      { id: '7:44:13', arabic: "فَهَلْ", transliteration: "fahal", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So have", ur: "So have" } },
      { id: '7:44:14', arabic: "وَجَدتُّم", transliteration: "wajadttum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "you found", ur: "تم found" } },
      { id: '7:44:15', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:44:16', arabic: "وَعَدَ", transliteration: "waʿada", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(was) promised", ur: "(was) promised" } },
      { id: '7:44:17', arabic: "رَبُّكُمْ", transliteration: "rabbukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) your Lord", ur: "(by) your رب" } },
      { id: '7:44:18', arabic: "حَقًّۭا ۖ", transliteration: "ḥaqqan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to be) true", ur: "(کو be) true" } },
      { id: '7:44:19', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They will say", ur: "وہ لوگ will کہو" } },
      { id: '7:44:20', arabic: "نَعَمْ ۚ", transliteration: "naʿam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Yes", ur: "Yes" } },
      { id: '7:44:21', arabic: "فَأَذَّنَ", transliteration: "fa-adhana", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then will announce", ur: "پھر will announce" } },
      { id: '7:44:22', arabic: "مُؤَذِّنٌۢ", transliteration: "mu-adhinun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an announcer", ur: "an announcer" } },
      { id: '7:44:23', arabic: "بَيْنَهُمْ", transliteration: "baynahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among them", ur: "among them" } },
      { id: '7:44:24', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '7:44:25', arabic: "لَّعْنَةُ", transliteration: "laʿnatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(The) curse", ur: "(The) curse" } },
      { id: '7:44:26', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '7:44:27', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) on", ur: "(is) پر" } },
      { id: '7:44:28', arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoers", ur: "the wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 27, to: 28, label: 'جار + مجرور' }
      ],
    },
  },
  45: {
    text: "ٱلَّذِينَ يَصُدُّونَ عَن سَبِيلِ ٱللَّهِ وَيَبْغُونَهَا عِوَجًۭا وَهُم بِٱلْـَٔاخِرَةِ كَـٰفِرُونَ",
    translation: {
      en: "",
      ur: "جو خدا کی راہ سے روکتے اور اس میں کجی ڈھونڈتے اور آخرت سے انکار کرتے تھے",
    },
    words: [
      { id: '7:45:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '7:45:2', arabic: "يَصُدُّونَ", transliteration: "yaṣuddūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "hinder", ur: "hinder" } },
      { id: '7:45:3', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:45:4', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '7:45:5', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '7:45:6', arabic: "وَيَبْغُونَهَا", transliteration: "wayabghūnahā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and seek in it", ur: "اور seek میں it" } },
      { id: '7:45:7', arabic: "عِوَجًۭا", transliteration: "ʿiwajan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "crookedness", ur: "crookedness" } },
      { id: '7:45:8', arabic: "وَهُم", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while they (are)", ur: "while وہ لوگ (are)" } },
      { id: '7:45:9', arabic: "بِٱلْـَٔاخِرَةِ", transliteration: "bil-ākhirati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "concerning the Hereafter", ur: "concerning the آخرت" } },
      { id: '7:45:10', arabic: "كَـٰفِرُونَ", transliteration: "kāfirūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "disbelievers", ur: "کافر" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
  46: {
    text: "وَبَيْنَهُمَا حِجَابٌۭ ۚ وَعَلَى ٱلْأَعْرَافِ رِجَالٌۭ يَعْرِفُونَ كُلًّۢا بِسِيمَىٰهُمْ ۚ وَنَادَوْا۟ أَصْحَـٰبَ ٱلْجَنَّةِ أَن سَلَـٰمٌ عَلَيْكُمْ ۚ لَمْ يَدْخُلُوهَا وَهُمْ يَطْمَعُونَ",
    translation: {
      en: "",
      ur: "ان دونوں (یعنی بہشت اور دوزخ) کے درمیان (اعراف نام) ایک دیوار ہو گی اور اعراف پر کچھ آدمی ہوں گے جو سب کو ان کی صورتوں سے پہچان لیں گے۔ تو وہ اہل بہشت کو پکار کر کہیں گے کہ تم پر سلامتی ہو۔ یہ لوگ بھی بہشت میں داخل تو نہیں ہوں گے مگر امید رکھتے ہوں گے",
    },
    words: [
      { id: '7:46:1', arabic: "وَبَيْنَهُمَا", transliteration: "wabaynahumā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And between them", ur: "اور درمیان them" } },
      { id: '7:46:2', arabic: "حِجَابٌۭ ۚ", transliteration: "ḥijābun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) a partition", ur: "(will be) a partition" } },
      { id: '7:46:3', arabic: "وَعَلَى", transliteration: "waʿalā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and on", ur: "اور پر" } },
      { id: '7:46:4', arabic: "ٱلْأَعْرَافِ", transliteration: "l-aʿrāfi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heights", ur: "the heights" } },
      { id: '7:46:5', arabic: "رِجَالٌۭ", transliteration: "rijālun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) men", ur: "(will be) men" } },
      { id: '7:46:6', arabic: "يَعْرِفُونَ", transliteration: "yaʿrifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "recognizing", ur: "recognizing" } },
      { id: '7:46:7', arabic: "كُلًّۢا", transliteration: "kullan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } },
      { id: '7:46:8', arabic: "بِسِيمَىٰهُمْ ۚ", transliteration: "bisīmāhum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by their marks", ur: "by their marks" } },
      { id: '7:46:9', arabic: "وَنَادَوْا۟", transliteration: "wanādaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they will call out", ur: "اور وہ لوگ will call out" } },
      { id: '7:46:10', arabic: "أَصْحَـٰبَ", transliteration: "aṣḥāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to the) companions", ur: "(کو the) companions" } },
      { id: '7:46:11', arabic: "ٱلْجَنَّةِ", transliteration: "l-janati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Paradise", ur: "(of) جنت" } },
      { id: '7:46:12', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:46:13', arabic: "سَلَـٰمٌ", transliteration: "salāmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Peace", ur: "Peace" } },
      { id: '7:46:14', arabic: "عَلَيْكُمْ ۚ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(be) upon you", ur: "(be) پر تم" } },
      { id: '7:46:15', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '7:46:16', arabic: "يَدْخُلُوهَا", transliteration: "yadkhulūhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they have entered it", ur: "وہ لوگ have entered it" } },
      { id: '7:46:17', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but they", ur: "لیکن وہ لوگ" } },
      { id: '7:46:18', arabic: "يَطْمَعُونَ", transliteration: "yaṭmaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "hope", ur: "hope" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'نفی + فعل' }
      ],
    },
  },
  47: {
    text: "۞ وَإِذَا صُرِفَتْ أَبْصَـٰرُهُمْ تِلْقَآءَ أَصْحَـٰبِ ٱلنَّارِ قَالُوا۟ رَبَّنَا لَا تَجْعَلْنَا مَعَ ٱلْقَوْمِ ٱلظَّـٰلِمِينَ",
    translation: {
      en: "",
      ur: "اور جب ان کی نگاہیں پلٹ کر اہل دوزخ کی طرف جائیں گی تو عرض کریں گے کہ اے ہمارے پروردگار ہم کو ظالم لوگوں کے ساتھ شامل نہ کیجیو",
    },
    words: [
      { id: '7:47:1', arabic: "۞ وَإِذَا", transliteration: "wa-idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:47:2', arabic: "صُرِفَتْ", transliteration: "ṣurifat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are turned", ur: "are turned" } },
      { id: '7:47:3', arabic: "أَبْصَـٰرُهُمْ", transliteration: "abṣāruhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their eyes", ur: "their eyes" } },
      { id: '7:47:4', arabic: "تِلْقَآءَ", transliteration: "til'qāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "towards", ur: "towards" } },
      { id: '7:47:5', arabic: "أَصْحَـٰبِ", transliteration: "aṣḥābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) companions", ur: "(the) companions" } },
      { id: '7:47:6', arabic: "ٱلنَّارِ", transliteration: "l-nāri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Fire", ur: "(of) the آگ" } },
      { id: '7:47:7', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they (will) say", ur: "وہ لوگ (will) کہو" } },
      { id: '7:47:8', arabic: "رَبَّنَا", transliteration: "rabbanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Lord", ur: "Our رب" } },
      { id: '7:47:9', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(Do) not", ur: "(Do) نہیں" } },
      { id: '7:47:10', arabic: "تَجْعَلْنَا", transliteration: "tajʿalnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "place us", ur: "place us" } },
      { id: '7:47:11', arabic: "مَعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '7:47:12', arabic: "ٱلْقَوْمِ", transliteration: "l-qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "the people ", ur: "the لوگ " } },
      { id: '7:47:13', arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoers", ur: "the wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'نفی + فعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  48: {
    text: "وَنَادَىٰٓ أَصْحَـٰبُ ٱلْأَعْرَافِ رِجَالًۭا يَعْرِفُونَهُم بِسِيمَىٰهُمْ قَالُوا۟ مَآ أَغْنَىٰ عَنكُمْ جَمْعُكُمْ وَمَا كُنتُمْ تَسْتَكْبِرُونَ",
    translation: {
      en: "",
      ur: "اور اہل اعراف (کافر) لوگوں کو جنہیں ان کی صورتوں سے شناخت کرتے ہوں گے پکاریں گے اور کہیں گے (کہ آج) نہ تو تمہاری جماعت ہی تمہارے کچھ کام آئی اور نہ تمہارا تکبّر (ہی سودمند ہوا)",
    },
    words: [
      { id: '7:48:1', arabic: "وَنَادَىٰٓ", transliteration: "wanādā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (will) call out", ur: "اور (will) call out" } },
      { id: '7:48:2', arabic: "أَصْحَـٰبُ", transliteration: "aṣḥābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) companions", ur: "(the) companions" } },
      { id: '7:48:3', arabic: "ٱلْأَعْرَافِ", transliteration: "l-aʿrāfi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the heights", ur: "(of) the heights" } },
      { id: '7:48:4', arabic: "رِجَالًۭا", transliteration: "rijālan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) men", ur: "(کو) men" } },
      { id: '7:48:5', arabic: "يَعْرِفُونَهُم", transliteration: "yaʿrifūnahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "whom they recognize", ur: "whom وہ لوگ recognize" } },
      { id: '7:48:6', arabic: "بِسِيمَىٰهُمْ", transliteration: "bisīmāhum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by their marks", ur: "by their marks" } },
      { id: '7:48:7', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "saying", ur: "saying" } },
      { id: '7:48:8', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '7:48:9', arabic: "أَغْنَىٰ", transliteration: "aghnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(has) availed", ur: "(has) availed" } },
      { id: '7:48:10', arabic: "عَنكُمْ", transliteration: "ʿankum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[to] you", ur: "[کو] تم" } },
      { id: '7:48:11', arabic: "جَمْعُكُمْ", transliteration: "jamʿukum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "your gathering", ur: "your gathering" } },
      { id: '7:48:12', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '7:48:13', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you were", ur: "تم were" } },
      { id: '7:48:14', arabic: "تَسْتَكْبِرُونَ", transliteration: "tastakbirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "arrogant (about)", ur: "arrogant (about)" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  49: {
    text: "أَهَـٰٓؤُلَآءِ ٱلَّذِينَ أَقْسَمْتُمْ لَا يَنَالُهُمُ ٱللَّهُ بِرَحْمَةٍ ۚ ٱدْخُلُوا۟ ٱلْجَنَّةَ لَا خَوْفٌ عَلَيْكُمْ وَلَآ أَنتُمْ تَحْزَنُونَ",
    translation: {
      en: "",
      ur: "(پھر مومنوں کی طرف اشارہ کر کے کہیں گے) کیا یہ وہی لوگ ہیں جن کے بارے میں تم قسمیں کھایا کرتے تھے کہ خدا اپنی رحمت سے ان کی دستگیری نہیں کرے گا (تو مومنو) تم بہشت میں داخل ہو جاؤ تمہیں کچھ خوف نہیں اور نہ تم کو کچھ رنج واندوہ ہوگا",
    },
    words: [
      { id: '7:49:1', arabic: "أَهَـٰٓؤُلَآءِ", transliteration: "ahāulāi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Are these", ur: "Are these" } },
      { id: '7:49:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones whom", ur: "the ones whom" } },
      { id: '7:49:3', arabic: "أَقْسَمْتُمْ", transliteration: "aqsamtum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you had sworn", ur: "تم had sworn" } },
      { id: '7:49:4', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(that) not", ur: "(وہ) نہیں" } },
      { id: '7:49:5', arabic: "يَنَالُهُمُ", transliteration: "yanāluhumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will) grant them", ur: "(will) grant them" } },
      { id: '7:49:6', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:49:7', arabic: "بِرَحْمَةٍ ۚ", transliteration: "biraḥmatin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Mercy", ur: "رحمت" } },
      { id: '7:49:8', arabic: "ٱدْخُلُوا۟", transliteration: "ud'khulū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Enter", ur: "Enter" } },
      { id: '7:49:9', arabic: "ٱلْجَنَّةَ", transliteration: "l-janata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Paradise", ur: "جنت" } },
      { id: '7:49:10', arabic: "لَا", transliteration: "lā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(There will be) no", ur: "(There will be) نہیں" } },
      { id: '7:49:11', arabic: "خَوْفٌ", transliteration: "khawfun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fear", ur: "ڈرنا" } },
      { id: '7:49:12', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon you", ur: "پر تم" } },
      { id: '7:49:13', arabic: "وَلَآ", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '7:49:14', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '7:49:15', arabic: "تَحْزَنُونَ", transliteration: "taḥzanūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will grieve", ur: "will grieve" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  50: {
    text: "وَنَادَىٰٓ أَصْحَـٰبُ ٱلنَّارِ أَصْحَـٰبَ ٱلْجَنَّةِ أَنْ أَفِيضُوا۟ عَلَيْنَا مِنَ ٱلْمَآءِ أَوْ مِمَّا رَزَقَكُمُ ٱللَّهُ ۚ قَالُوٓا۟ إِنَّ ٱللَّهَ حَرَّمَهُمَا عَلَى ٱلْكَـٰفِرِينَ",
    translation: {
      en: "",
      ur: "اور وہ دوزخی بہشتیوں سے (گڑگڑا کر) کہیں گے کہ کسی قدر ہم پر پانی بہاؤ یا جو رزق خدا نے تمہیں عنایت فرمایا ہے ان میں سے (کچھ ہمیں بھی دو) وہ جواب دیں گے کہ خدا نے بہشت کا پانی اور رزق کافروں پر حرام کر دیا ہے",
    },
    words: [
      { id: '7:50:1', arabic: "وَنَادَىٰٓ", transliteration: "wanādā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (will) call out", ur: "اور (will) call out" } },
      { id: '7:50:2', arabic: "أَصْحَـٰبُ", transliteration: "aṣḥābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) companions", ur: "(the) companions" } },
      { id: '7:50:3', arabic: "ٱلنَّارِ", transliteration: "l-nāri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Fire", ur: "(of) the آگ" } },
      { id: '7:50:4', arabic: "أَصْحَـٰبَ", transliteration: "aṣḥāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to the) companions", ur: "(کو the) companions" } },
      { id: '7:50:5', arabic: "ٱلْجَنَّةِ", transliteration: "l-janati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Paradise", ur: "(of) جنت" } },
      { id: '7:50:6', arabic: "أَنْ", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '7:50:7', arabic: "أَفِيضُوا۟", transliteration: "afīḍū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Pour", ur: "Pour" } },
      { id: '7:50:8', arabic: "عَلَيْنَا", transliteration: "ʿalaynā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon us", ur: "پر us" } },
      { id: '7:50:9', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[of]", ur: "[of]" } },
      { id: '7:50:10', arabic: "ٱلْمَآءِ", transliteration: "l-māi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(some) water", ur: "(some) پانی" } },
      { id: '7:50:11', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '7:50:12', arabic: "مِمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '7:50:13', arabic: "رَزَقَكُمُ", transliteration: "razaqakumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(has been) provided (to) you", ur: "(has been) provided (کو) تم" } },
      { id: '7:50:14', arabic: "ٱللَّهُ ۚ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '7:50:15', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They (will) say", ur: "وہ لوگ (will) کہو" } },
      { id: '7:50:16', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:50:17', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:50:18', arabic: "حَرَّمَهُمَا", transliteration: "ḥarramahumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has forbidden both", ur: "has forbidden both" } },
      { id: '7:50:19', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '7:50:20', arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the disbelievers", ur: "the کافر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  51: {
    text: "ٱلَّذِينَ ٱتَّخَذُوا۟ دِينَهُمْ لَهْوًۭا وَلَعِبًۭا وَغَرَّتْهُمُ ٱلْحَيَوٰةُ ٱلدُّنْيَا ۚ فَٱلْيَوْمَ نَنسَىٰهُمْ كَمَا نَسُوا۟ لِقَآءَ يَوْمِهِمْ هَـٰذَا وَمَا كَانُوا۟ بِـَٔايَـٰتِنَا يَجْحَدُونَ",
    translation: {
      en: "",
      ur: "جنہوں نے اپنے دین کو تماشا اور کھیل بنا رکھا تھا اور دنیا کی زندگی نے ان کو دھوکے میں ڈال رکھا تھا۔ تو جس طرح یہ لوگ اس دن کے آنے کو بھولے ہوئے اور ہماری آیتوں سے منکر ہو رہے تھے۔ اسی طرح آج ہم بھی انہیں بھلا دیں گے",
    },
    words: [
      { id: '7:51:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '7:51:2', arabic: "ٱتَّخَذُوا۟", transliteration: "ittakhadhū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "took", ur: "took" } },
      { id: '7:51:3', arabic: "دِينَهُمْ", transliteration: "dīnahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their religion", ur: "their religion" } },
      { id: '7:51:4', arabic: "لَهْوًۭا", transliteration: "lahwan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) an amusement", ur: "(as) an amusement" } },
      { id: '7:51:5', arabic: "وَلَعِبًۭا", transliteration: "walaʿiban", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and play", ur: "اور play" } },
      { id: '7:51:6', arabic: "وَغَرَّتْهُمُ", transliteration: "wagharrathumu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and deluded them", ur: "اور deluded them" } },
      { id: '7:51:7', arabic: "ٱلْحَيَوٰةُ", transliteration: "l-ḥayatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the life", ur: "the زندگی" } },
      { id: '7:51:8', arabic: "ٱلدُّنْيَا ۚ", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the world", ur: "(of) the دنیا" } },
      { id: '7:51:9', arabic: "فَٱلْيَوْمَ", transliteration: "fal-yawma", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ي و م", meaning: { en: "So today", ur: "So today" } },
      { id: '7:51:10', arabic: "نَنسَىٰهُمْ", transliteration: "nansāhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We forget them", ur: "ہم forget them" } },
      { id: '7:51:11', arabic: "كَمَا", transliteration: "kamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "as", ur: "as" } },
      { id: '7:51:12', arabic: "نَسُوا۟", transliteration: "nasū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they forgot", ur: "وہ لوگ forgot" } },
      { id: '7:51:13', arabic: "لِقَآءَ", transliteration: "liqāa", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(the) meeting", ur: "(the) meeting" } },
      { id: '7:51:14', arabic: "يَوْمِهِمْ", transliteration: "yawmihim", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(of) their day", ur: "(of) their دن" } },
      { id: '7:51:15', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '7:51:16', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and [what]", ur: "اور [کیا]" } },
      { id: '7:51:17', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "(as) they used to", ur: "(as) وہ لوگ used کو" } },
      { id: '7:51:18', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Our Verses", ur: "ساتھ Our Verses" } },
      { id: '7:51:19', arabic: "يَجْحَدُونَ", transliteration: "yajḥadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they reject", ur: "وہ لوگ reject" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  52: {
    text: "وَلَقَدْ جِئْنَـٰهُم بِكِتَـٰبٍۢ فَصَّلْنَـٰهُ عَلَىٰ عِلْمٍ هُدًۭى وَرَحْمَةًۭ لِّقَوْمٍۢ يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے ان کے پاس کتاب پہنچا دی ہے جس کو علم ودانش کے ساتھ کھول کھول کر بیان کر دیا ہے (اور) وہ مومن لوگوں کے لیے ہدایت اور رحمت ہے",
    },
    words: [
      { id: '7:52:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And certainly", ur: "اور certainly" } },
      { id: '7:52:2', arabic: "جِئْنَـٰهُم", transliteration: "ji'nāhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We had brought them", ur: "ہم had brought them" } },
      { id: '7:52:3', arabic: "بِكِتَـٰبٍۢ", transliteration: "bikitābin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "a Book", ur: "a کتاب" } },
      { id: '7:52:4', arabic: "فَصَّلْنَـٰهُ", transliteration: "faṣṣalnāhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "which We have explained", ur: "جو ہم have explained" } },
      { id: '7:52:5', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '7:52:6', arabic: "عِلْمٍ", transliteration: "ʿil'min", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "knowledge ", ur: "knowledge " } },
      { id: '7:52:7', arabic: "هُدًۭى", transliteration: "hudan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "as guidance", ur: "as guidance" } },
      { id: '7:52:8', arabic: "وَرَحْمَةًۭ", transliteration: "waraḥmatan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ر ح م", meaning: { en: "and mercy", ur: "اور رحمت" } },
      { id: '7:52:9', arabic: "لِّقَوْمٍۢ", transliteration: "liqawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for a people", ur: "for a لوگ" } },
      { id: '7:52:10', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "who believe", ur: "جو ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  53: {
    text: "هَلْ يَنظُرُونَ إِلَّا تَأْوِيلَهُۥ ۚ يَوْمَ يَأْتِى تَأْوِيلُهُۥ يَقُولُ ٱلَّذِينَ نَسُوهُ مِن قَبْلُ قَدْ جَآءَتْ رُسُلُ رَبِّنَا بِٱلْحَقِّ فَهَل لَّنَا مِن شُفَعَآءَ فَيَشْفَعُوا۟ لَنَآ أَوْ نُرَدُّ فَنَعْمَلَ غَيْرَ ٱلَّذِى كُنَّا نَعْمَلُ ۚ قَدْ خَسِرُوٓا۟ أَنفُسَهُمْ وَضَلَّ عَنْهُم مَّا كَانُوا۟ يَفْتَرُونَ",
    translation: {
      en: "",
      ur: "کیا یہ لوگ اس کے وعدہٴ عذاب کے منتظر ہیں۔ جس دن وہ وعدہ آجائے گا تو جو لوگ اس کو پہلے سے بھولے ہوئے ہوں گے وہ بول اٹھیں گے کہ بےشک ہمارے پروردگار کے رسول حق لے کر آئے تھے۔ بھلا (آج) ہمارا کوئی سفارشی ہیں کہ ہماری سفارش کریں یا ہم (دنیا میں) پھر لوٹا دیئے جائیں کہ جو عمل (بد) ہم (پہلے) کرتے تھے (وہ نہ کریں بلکہ) ان کے سوا اور (نیک) عمل کریں۔ بےشک ان لوگوں نے اپنا نقصان کیا اور جو کچھ یہ افتراء کیا کرتے تھے ان سے سب جاتا رہا",
    },
    words: [
      { id: '7:53:1', arabic: "هَلْ", transliteration: "hal", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Do", ur: "Do" } },
      { id: '7:53:2', arabic: "يَنظُرُونَ", transliteration: "yanẓurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they wait", ur: "وہ لوگ wait" } },
      { id: '7:53:3', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:53:4', arabic: "تَأْوِيلَهُۥ ۚ", transliteration: "tawīlahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(for) its fulfillment", ur: "(for) its fulfillment" } },
      { id: '7:53:5', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(The) Day", ur: "(The) دن" } },
      { id: '7:53:6', arabic: "يَأْتِى", transliteration: "yatī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will) come", ur: "(will) come" } },
      { id: '7:53:7', arabic: "تَأْوِيلُهُۥ", transliteration: "tawīluhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "its fulfillment", ur: "its fulfillment" } },
      { id: '7:53:8', arabic: "يَقُولُ", transliteration: "yaqūlu", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "will say", ur: "will کہو" } },
      { id: '7:53:9', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '7:53:10', arabic: "نَسُوهُ", transliteration: "nasūhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "had forgotten it", ur: "had forgotten it" } },
      { id: '7:53:11', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:53:12', arabic: "قَبْلُ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '7:53:13', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '7:53:14', arabic: "جَآءَتْ", transliteration: "jāat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "had come", ur: "had come" } },
      { id: '7:53:15', arabic: "رُسُلُ", transliteration: "rusulu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Messengers", ur: "(the) Messengers" } },
      { id: '7:53:16', arabic: "رَبِّنَا", transliteration: "rabbinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) our Lord", ur: "(of) our رب" } },
      { id: '7:53:17', arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with the truth", ur: "ساتھ the سچ" } },
      { id: '7:53:18', arabic: "فَهَل", transliteration: "fahal", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so are (there)", ur: "so are (there)" } },
      { id: '7:53:19', arabic: "لَّنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for us", ur: "for us" } },
      { id: '7:53:20', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '7:53:21', arabic: "شُفَعَآءَ", transliteration: "shufaʿāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "intercessors", ur: "intercessors" } },
      { id: '7:53:22', arabic: "فَيَشْفَعُوا۟", transliteration: "fayashfaʿū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so (that) they intercede", ur: "so (وہ) وہ لوگ intercede" } },
      { id: '7:53:23', arabic: "لَنَآ", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for us", ur: "for us" } },
      { id: '7:53:24', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '7:53:25', arabic: "نُرَدُّ", transliteration: "nuraddu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we are sent back", ur: "ہم are sent back" } },
      { id: '7:53:26', arabic: "فَنَعْمَلَ", transliteration: "fanaʿmala", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so (that) we do (deeds)", ur: "so (وہ) ہم do (deeds)" } },
      { id: '7:53:27', arabic: "غَيْرَ", transliteration: "ghayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than", ur: "other than" } },
      { id: '7:53:28', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that which", ur: "وہ جو" } },
      { id: '7:53:29', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we used to", ur: "ہم used کو" } },
      { id: '7:53:30', arabic: "نَعْمَلُ ۚ", transliteration: "naʿmalu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "do", ur: "do" } },
      { id: '7:53:31', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '7:53:32', arabic: "خَسِرُوٓا۟", transliteration: "khasirū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they lost", ur: "وہ لوگ lost" } },
      { id: '7:53:33', arabic: "أَنفُسَهُمْ", transliteration: "anfusahum", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "themselves", ur: "themselves" } },
      { id: '7:53:34', arabic: "وَضَلَّ", transliteration: "waḍalla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and strayed", ur: "اور strayed" } },
      { id: '7:53:35', arabic: "عَنْهُم", transliteration: "ʿanhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '7:53:36', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:53:37', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '7:53:38', arabic: "يَفْتَرُونَ", transliteration: "yaftarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "invent", ur: "invent" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 20, to: 21, label: 'جار + مجرور' },
        { from: 30, to: 31, label: 'فعل + فاعل' },
        { from: 32, to: 33, label: 'فعل + فاعل' }
      ],
    },
  },
  54: {
    text: "إِنَّ رَبَّكُمُ ٱللَّهُ ٱلَّذِى خَلَقَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ فِى سِتَّةِ أَيَّامٍۢ ثُمَّ ٱسْتَوَىٰ عَلَى ٱلْعَرْشِ يُغْشِى ٱلَّيْلَ ٱلنَّهَارَ يَطْلُبُهُۥ حَثِيثًۭا وَٱلشَّمْسَ وَٱلْقَمَرَ وَٱلنُّجُومَ مُسَخَّرَٰتٍۭ بِأَمْرِهِۦٓ ۗ أَلَا لَهُ ٱلْخَلْقُ وَٱلْأَمْرُ ۗ تَبَارَكَ ٱللَّهُ رَبُّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "کچھ شک نہیں کہ تمہارا پروردگار خدا ہی ہے جس نے آسمانوں اور زمین کو چھ دن میں پیدا کیا پھر عرش پر جا ٹھہرا۔ وہی رات کو دن کا لباس پہناتا ہے کہ وہ اس کے پیچھے دوڑتا چلا آتا ہے۔ اور اسی نے سورج اور چاند ستاروں کو پیدا کیا سب اس کے حکم کے مطابق کام میں لگے ہوئے ہیں۔ دیکھو سب مخلوق بھی اسی کی ہے اور حکم بھی (اسی کا ہے)۔ یہ خدا رب العالمین بڑی برکت والا ہے",
    },
    words: [
      { id: '7:54:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:54:2', arabic: "رَبَّكُمُ", transliteration: "rabbakumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:54:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Allah", ur: "(is) اللہ" } },
      { id: '7:54:4', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the One Who", ur: "the One جو" } },
      { id: '7:54:5', arabic: "خَلَقَ", transliteration: "khalaqa", pos: ['V'], posLabel: 'V', root: "خ ل ق", meaning: { en: "created", ur: "پیدا کیا" } },
      { id: '7:54:6', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '7:54:7', arabic: "وَٱلْأَرْضَ", transliteration: "wal-arḍa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '7:54:8', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:54:9', arabic: "سِتَّةِ", transliteration: "sittati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "six", ur: "six" } },
      { id: '7:54:10', arabic: "أَيَّامٍۢ", transliteration: "ayyāmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "epochs", ur: "epochs" } },
      { id: '7:54:11', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '7:54:12', arabic: "ٱسْتَوَىٰ", transliteration: "is'tawā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He ascended", ur: "وہ ascended" } },
      { id: '7:54:13', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '7:54:14', arabic: "ٱلْعَرْشِ", transliteration: "l-ʿarshi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Throne", ur: "the Throne" } },
      { id: '7:54:15', arabic: "يُغْشِى", transliteration: "yugh'shī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He covers", ur: "وہ covers" } },
      { id: '7:54:16', arabic: "ٱلَّيْلَ", transliteration: "al-layla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the night", ur: "the رات" } },
      { id: '7:54:17', arabic: "ٱلنَّهَارَ", transliteration: "l-nahāra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) the day", ur: "(ساتھ) the دن" } },
      { id: '7:54:18', arabic: "يَطْلُبُهُۥ", transliteration: "yaṭlubuhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "seeking it", ur: "seeking it" } },
      { id: '7:54:19', arabic: "حَثِيثًۭا", transliteration: "ḥathīthan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "rapidly", ur: "rapidly" } },
      { id: '7:54:20', arabic: "وَٱلشَّمْسَ", transliteration: "wal-shamsa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the sun", ur: "اور the sun" } },
      { id: '7:54:21', arabic: "وَٱلْقَمَرَ", transliteration: "wal-qamara", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the moon", ur: "اور the moon" } },
      { id: '7:54:22', arabic: "وَٱلنُّجُومَ", transliteration: "wal-nujūma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the stars ", ur: "اور the stars " } },
      { id: '7:54:23', arabic: "مُسَخَّرَٰتٍۭ", transliteration: "musakharātin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "subjected", ur: "subjected" } },
      { id: '7:54:24', arabic: "بِأَمْرِهِۦٓ ۗ", transliteration: "bi-amrihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by His command", ur: "by His command" } },
      { id: '7:54:25', arabic: "أَلَا", transliteration: "alā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Unquestionably", ur: "Unquestionably" } },
      { id: '7:54:26', arabic: "لَهُ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for Him", ur: "for Him" } },
      { id: '7:54:27', arabic: "ٱلْخَلْقُ", transliteration: "l-khalqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the creation", ur: "(is) the تخلیق" } },
      { id: '7:54:28', arabic: "وَٱلْأَمْرُ ۗ", transliteration: "wal-amru", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the command", ur: "اور the command" } },
      { id: '7:54:29', arabic: "تَبَارَكَ", transliteration: "tabāraka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "blessed", ur: "blessed" } },
      { id: '7:54:30', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Allah", ur: "(is) اللہ" } },
      { id: '7:54:31', arabic: "رَبُّ", transliteration: "rabbu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Lord", ur: "رب" } },
      { id: '7:54:32', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'جار + مجرور' },
        { from: 26, to: 27, label: 'مضاف + مضاف إليه' },
        { from: 29, to: 30, label: 'فعل + فاعل' },
        { from: 31, to: 32, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  55: {
    text: "ٱدْعُوا۟ رَبَّكُمْ تَضَرُّعًۭا وَخُفْيَةً ۚ إِنَّهُۥ لَا يُحِبُّ ٱلْمُعْتَدِينَ",
    translation: {
      en: "",
      ur: "(لوگو) اپنے پروردگار سے عاجزی سے اور چپکے چپکے دعائیں مانگا کرو۔ وہ حد سے بڑھنے والوں کو دوست نہیں رکھتا",
    },
    words: [
      { id: '7:55:1', arabic: "ٱدْعُوا۟", transliteration: "id'ʿū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Call upon", ur: "Call پر" } },
      { id: '7:55:2', arabic: "رَبَّكُمْ", transliteration: "rabbakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:55:3', arabic: "تَضَرُّعًۭا", transliteration: "taḍarruʿan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "humbly", ur: "humbly" } },
      { id: '7:55:4', arabic: "وَخُفْيَةً ۚ", transliteration: "wakhuf'yatan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and privately", ur: "اور privately" } },
      { id: '7:55:5', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, He", ur: "بیشک, وہ" } },
      { id: '7:55:6', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '7:55:7', arabic: "يُحِبُّ", transliteration: "yuḥibbu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "love", ur: "love" } },
      { id: '7:55:8', arabic: "ٱلْمُعْتَدِينَ", transliteration: "l-muʿ'tadīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the transgressors", ur: "the transgressors" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  56: {
    text: "وَلَا تُفْسِدُوا۟ فِى ٱلْأَرْضِ بَعْدَ إِصْلَـٰحِهَا وَٱدْعُوهُ خَوْفًۭا وَطَمَعًا ۚ إِنَّ رَحْمَتَ ٱللَّهِ قَرِيبٌۭ مِّنَ ٱلْمُحْسِنِينَ",
    translation: {
      en: "",
      ur: "اور ملک میں اصلاح کے بعد خرابی نہ کرنا اور خدا سے خوف کرتے ہوئے اور امید رکھ کر دعائیں مانگتے رہنا۔ کچھ شک نہیں کہ خدا کی رحمت نیکی کرنے والوں سے قریب ہے",
    },
    words: [
      { id: '7:56:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '7:56:2', arabic: "تُفْسِدُوا۟", transliteration: "tuf'sidū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "cause corruption", ur: "cause corruption" } },
      { id: '7:56:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:56:4', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '7:56:5', arabic: "بَعْدَ", transliteration: "baʿda", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '7:56:6', arabic: "إِصْلَـٰحِهَا", transliteration: "iṣ'lāḥihā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its reformation", ur: "its reformation" } },
      { id: '7:56:7', arabic: "وَٱدْعُوهُ", transliteration: "wa-id'ʿūhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And call Him", ur: "اور call Him" } },
      { id: '7:56:8', arabic: "خَوْفًۭا", transliteration: "khawfan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) fear", ur: "(میں) ڈرنا" } },
      { id: '7:56:9', arabic: "وَطَمَعًا ۚ", transliteration: "waṭamaʿan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and hope", ur: "اور hope" } },
      { id: '7:56:10', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:56:11', arabic: "رَحْمَتَ", transliteration: "raḥmata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Mercy", ur: "(the) رحمت" } },
      { id: '7:56:12', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '7:56:13', arabic: "قَرِيبٌۭ", transliteration: "qarībun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) near", ur: "(is) near" } },
      { id: '7:56:14', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for", ur: "for" } },
      { id: '7:56:15', arabic: "ٱلْمُحْسِنِينَ", transliteration: "l-muḥ'sinīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the good-doers", ur: "the اچھا-doers" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  57: {
    text: "وَهُوَ ٱلَّذِى يُرْسِلُ ٱلرِّيَـٰحَ بُشْرًۢا بَيْنَ يَدَىْ رَحْمَتِهِۦ ۖ حَتَّىٰٓ إِذَآ أَقَلَّتْ سَحَابًۭا ثِقَالًۭا سُقْنَـٰهُ لِبَلَدٍۢ مَّيِّتٍۢ فَأَنزَلْنَا بِهِ ٱلْمَآءَ فَأَخْرَجْنَا بِهِۦ مِن كُلِّ ٱلثَّمَرَٰتِ ۚ كَذَٰلِكَ نُخْرِجُ ٱلْمَوْتَىٰ لَعَلَّكُمْ تَذَكَّرُونَ",
    translation: {
      en: "",
      ur: "اور وہی تو ہے جو اپنی رحمت (یعنی مینھ) سے پہلے ہواؤں کو خوشخبری (بنا کر) بھیجتا ہے۔ یہاں تک کہ جب وہ بھاری بھاری بادلوں کو اٹھا لاتی ہے تو ہم اس کو ایک مری ہوئی بستی کی طرف ہانک دیتے ہیں۔ پھر بادل سے مینھ برساتے ہیں۔ پھر مینھ سے ہر طرح کے پھل پیدا کرتے ہیں۔ اسی طرح ہم مردوں کو (زمین سے) زندہ کرکے باہر نکال لیں گے۔ (یہ آیات اس لیے بیان کی جاتی ہیں) تاکہ تم نصیحت پکڑو",
    },
    words: [
      { id: '7:57:1', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '7:57:2', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '7:57:3', arabic: "يُرْسِلُ", transliteration: "yur'silu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "sends", ur: "sends" } },
      { id: '7:57:4', arabic: "ٱلرِّيَـٰحَ", transliteration: "l-riyāḥa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the winds", ur: "the winds" } },
      { id: '7:57:5', arabic: "بُشْرًۢا", transliteration: "bush'ran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) glad tidings", ur: "(as) glad tidings" } },
      { id: '7:57:6', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:57:7', arabic: "يَدَىْ", transliteration: "yaday", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '7:57:8', arabic: "رَحْمَتِهِۦ ۖ", transliteration: "raḥmatihi", pos: ['N'], posLabel: 'N', root: "ر ح م", meaning: { en: "His Mercy", ur: "His رحمت" } },
      { id: '7:57:9', arabic: "حَتَّىٰٓ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '7:57:10', arabic: "إِذَآ", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '7:57:11', arabic: "أَقَلَّتْ", transliteration: "aqallat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they have carried", ur: "وہ لوگ have carried" } },
      { id: '7:57:12', arabic: "سَحَابًۭا", transliteration: "saḥāban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "clouds ", ur: "clouds " } },
      { id: '7:57:13', arabic: "ثِقَالًۭا", transliteration: "thiqālan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "heavy", ur: "heavy" } },
      { id: '7:57:14', arabic: "سُقْنَـٰهُ", transliteration: "suq'nāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We drive them", ur: "ہم drive them" } },
      { id: '7:57:15', arabic: "لِبَلَدٍۢ", transliteration: "libaladin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to a land", ur: "کو a land" } },
      { id: '7:57:16', arabic: "مَّيِّتٍۢ", transliteration: "mayyitin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "dead", ur: "dead" } },
      { id: '7:57:17', arabic: "فَأَنزَلْنَا", transliteration: "fa-anzalnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ن ز ل", meaning: { en: "then We send down", ur: "پھر ہم send down" } },
      { id: '7:57:18', arabic: "بِهِ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '7:57:19', arabic: "ٱلْمَآءَ", transliteration: "l-māa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the water", ur: "the پانی" } },
      { id: '7:57:20', arabic: "فَأَخْرَجْنَا", transliteration: "fa-akhrajnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then We bring forth", ur: "پھر ہم bring forth" } },
      { id: '7:57:21', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '7:57:22', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(of)", ur: "(of)" } },
      { id: '7:57:23', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all (kinds)", ur: "سب (kinds)" } },
      { id: '7:57:24', arabic: "ٱلثَّمَرَٰتِ ۚ", transliteration: "l-thamarāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) fruits", ur: "(of) fruits" } },
      { id: '7:57:25', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '7:57:26', arabic: "نُخْرِجُ", transliteration: "nukh'riju", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will bring forth", ur: "ہم will bring forth" } },
      { id: '7:57:27', arabic: "ٱلْمَوْتَىٰ", transliteration: "l-mawtā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the dead", ur: "the dead" } },
      { id: '7:57:28', arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that you may", ur: "so وہ تم may" } },
      { id: '7:57:29', arabic: "تَذَكَّرُونَ", transliteration: "tadhakkarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "take heed", ur: "take heed" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 26, to: 27, label: 'فعل + فاعل' }
      ],
    },
  },
  58: {
    text: "وَٱلْبَلَدُ ٱلطَّيِّبُ يَخْرُجُ نَبَاتُهُۥ بِإِذْنِ رَبِّهِۦ ۖ وَٱلَّذِى خَبُثَ لَا يَخْرُجُ إِلَّا نَكِدًۭا ۚ كَذَٰلِكَ نُصَرِّفُ ٱلْـَٔايَـٰتِ لِقَوْمٍۢ يَشْكُرُونَ",
    translation: {
      en: "",
      ur: "جو زمین پاکیزہ (ہے) اس میں سے سبزہ بھی پروردگار کے حکم سے (نفیس ہی) نکلتا ہے اور جو خراب ہے اس میں جو کچھ ہے ناقص ہوتا ہے۔ اسی طرح ہم آیتوں کو شکرگزار لوگوں کے لئے پھیر پھیر کر بیان کرتے ہیں",
    },
    words: [
      { id: '7:58:1', arabic: "وَٱلْبَلَدُ", transliteration: "wal-baladu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And the land ", ur: "اور the land " } },
      { id: '7:58:2', arabic: "ٱلطَّيِّبُ", transliteration: "l-ṭayibu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] pure", ur: "[the] pure" } },
      { id: '7:58:3', arabic: "يَخْرُجُ", transliteration: "yakhruju", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "comes forth", ur: "comes forth" } },
      { id: '7:58:4', arabic: "نَبَاتُهُۥ", transliteration: "nabātuhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "its vegetation", ur: "its vegetation" } },
      { id: '7:58:5', arabic: "بِإِذْنِ", transliteration: "bi-idh'ni", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by (the) permission", ur: "by (the) permission" } },
      { id: '7:58:6', arabic: "رَبِّهِۦ ۖ", transliteration: "rabbihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) its Lord", ur: "(of) its رب" } },
      { id: '7:58:7', arabic: "وَٱلَّذِى", transliteration: "wa-alladhī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but which", ur: "لیکن جو" } },
      { id: '7:58:8', arabic: "خَبُثَ", transliteration: "khabutha", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is bad ", ur: "is bad " } },
      { id: '7:58:9', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '7:58:10', arabic: "يَخْرُجُ", transliteration: "yakhruju", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "come forth", ur: "come forth" } },
      { id: '7:58:11', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:58:12', arabic: "نَكِدًۭا ۚ", transliteration: "nakidan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(with) difficulty", ur: "(ساتھ) difficulty" } },
      { id: '7:58:13', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '7:58:14', arabic: "نُصَرِّفُ", transliteration: "nuṣarrifu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We explain", ur: "ہم explain" } },
      { id: '7:58:15', arabic: "ٱلْـَٔايَـٰتِ", transliteration: "l-āyāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Signs", ur: "the نشانیاں" } },
      { id: '7:58:16', arabic: "لِقَوْمٍۢ", transliteration: "liqawmin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for a people", ur: "for a لوگ" } },
      { id: '7:58:17', arabic: "يَشْكُرُونَ", transliteration: "yashkurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "who are grateful", ur: "جو are grateful" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'نفی + فعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  59: {
    text: "لَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِۦ فَقَالَ يَـٰقَوْمِ ٱعْبُدُوا۟ ٱللَّهَ مَا لَكُم مِّنْ إِلَـٰهٍ غَيْرُهُۥٓ إِنِّىٓ أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيمٍۢ",
    translation: {
      en: "",
      ur: "ہم نے نوح کو ان کی قوم کی طرف بھیجا تو انہوں نے (ان سے کہا) اے میری برادری کے لوگو خدا کی عبادت کرو اس کے سوا تمہارا کوئی معبود نہیں۔ مجھے تمہارے بارے میں بڑے دن کے عذاب کا (بہت ہی) ڈر ہے",
    },
    words: [
      { id: '7:59:1', arabic: "لَقَدْ", transliteration: "laqad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Certainly", ur: "Certainly" } },
      { id: '7:59:2', arabic: "أَرْسَلْنَا", transliteration: "arsalnā", pos: ['V'], posLabel: 'V', root: "ر س ل", meaning: { en: "We sent", ur: "ہم sent" } },
      { id: '7:59:3', arabic: "نُوحًا", transliteration: "nūḥan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Nuh", ur: "Nuh" } },
      { id: '7:59:4', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '7:59:5', arabic: "قَوْمِهِۦ", transliteration: "qawmihi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "his people", ur: "his لوگ" } },
      { id: '7:59:6', arabic: "فَقَالَ", transliteration: "faqāla", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ق و ل", meaning: { en: "and he said", ur: "اور وہ کہا" } },
      { id: '7:59:7', arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ" } },
      { id: '7:59:8', arabic: "ٱعْبُدُوا۟", transliteration: "uʿ'budū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Worship", ur: "عبادت" } },
      { id: '7:59:9', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:59:10', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:59:11', arabic: "لَكُم", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '7:59:12', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any", ur: "any" } },
      { id: '7:59:13', arabic: "إِلَـٰهٍ", transliteration: "ilāhin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "god", ur: "اللہ" } },
      { id: '7:59:14', arabic: "غَيْرُهُۥٓ", transliteration: "ghayruhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than Him", ur: "other than Him" } },
      { id: '7:59:15', arabic: "إِنِّىٓ", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I", ur: "بیشک, میں" } },
      { id: '7:59:16', arabic: "أَخَافُ", transliteration: "akhāfu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[I] fear", ur: "[میں] ڈرنا" } },
      { id: '7:59:17', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '7:59:18', arabic: "عَذَابَ", transliteration: "ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "punishment", ur: "عذاب" } },
      { id: '7:59:19', arabic: "يَوْمٍ", transliteration: "yawmin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(of the) Day", ur: "(of the) دن" } },
      { id: '7:59:20', arabic: "عَظِيمٍۢ", transliteration: "ʿaẓīmin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Great", ur: "Great" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  60: {
    text: "قَالَ ٱلْمَلَأُ مِن قَوْمِهِۦٓ إِنَّا لَنَرَىٰكَ فِى ضَلَـٰلٍۢ مُّبِينٍۢ",
    translation: {
      en: "",
      ur: "تو جو ان کی قوم میں سردار تھے وہ کہنے لگے کہ ہم تمہیں صریح گمراہی میں (مبتلا) دیکھتے ہیں",
    },
    words: [
      { id: '7:60:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Said", ur: "کہا" } },
      { id: '7:60:2', arabic: "ٱلْمَلَأُ", transliteration: "l-mala-u", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the chiefs", ur: "the chiefs" } },
      { id: '7:60:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:60:4', arabic: "قَوْمِهِۦٓ", transliteration: "qawmihi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "his people", ur: "his لوگ" } },
      { id: '7:60:5', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, we", ur: "بیشک, ہم" } },
      { id: '7:60:6', arabic: "لَنَرَىٰكَ", transliteration: "lanarāka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely see you", ur: "یقیناً دیکھنا تم" } },
      { id: '7:60:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:60:8', arabic: "ضَلَـٰلٍۢ", transliteration: "ḍalālin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "error", ur: "error" } },
      { id: '7:60:9', arabic: "مُّبِينٍۢ", transliteration: "mubīnin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ],
    },
  },
  61: {
    text: "قَالَ يَـٰقَوْمِ لَيْسَ بِى ضَلَـٰلَةٌۭ وَلَـٰكِنِّى رَسُولٌۭ مِّن رَّبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "انہوں نے کہا اے قوم مجھ میں کسی طرح کی گمراہی نہیں ہے بلکہ میں پروردگار عالم کا پیغمبر ہوں",
    },
    words: [
      { id: '7:61:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:61:2', arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ" } },
      { id: '7:61:3', arabic: "لَيْسَ", transliteration: "laysa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "There is not", ur: "There is نہیں" } },
      { id: '7:61:4', arabic: "بِى", transliteration: "bī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in me", ur: "میں me" } },
      { id: '7:61:5', arabic: "ضَلَـٰلَةٌۭ", transliteration: "ḍalālatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "error", ur: "error" } },
      { id: '7:61:6', arabic: "وَلَـٰكِنِّى", transliteration: "walākinnī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but I am", ur: "لیکن میں am" } },
      { id: '7:61:7', arabic: "رَسُولٌۭ", transliteration: "rasūlun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Messenger", ur: "a رسول" } },
      { id: '7:61:8', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:61:9', arabic: "رَّبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Lord", ur: "(the) رب" } },
      { id: '7:61:10', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  62: {
    text: "أُبَلِّغُكُمْ رِسَـٰلَـٰتِ رَبِّى وَأَنصَحُ لَكُمْ وَأَعْلَمُ مِنَ ٱللَّهِ مَا لَا تَعْلَمُونَ",
    translation: {
      en: "",
      ur: "تمہیں اپنے پروردگار کے پیغام پہنچاتا ہوں اور تمہاری خیرخواہی کرتا ہوں اور مجھ کو خدا کی طرف سے ایسی باتیں معلوم ہیں جن سے تم بےخبر ہو",
    },
    words: [
      { id: '7:62:1', arabic: "أُبَلِّغُكُمْ", transliteration: "uballighukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I convey to you", ur: "میں convey کو تم" } },
      { id: '7:62:2', arabic: "رِسَـٰلَـٰتِ", transliteration: "risālāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messages", ur: "the Messages" } },
      { id: '7:62:3', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) my Lord", ur: "(of) my رب" } },
      { id: '7:62:4', arabic: "وَأَنصَحُ", transliteration: "wa-anṣaḥu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and [I] advise", ur: "اور [میں] advise" } },
      { id: '7:62:5', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[to] you", ur: "[کو] تم" } },
      { id: '7:62:6', arabic: "وَأَعْلَمُ", transliteration: "wa-aʿlamu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع ل م", meaning: { en: "and I know", ur: "اور میں جاننا" } },
      { id: '7:62:7', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:62:8', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:62:9', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:62:10', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:62:11', arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "you know", ur: "تم جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'نفی + فعل' }
      ],
    },
  },
  63: {
    text: "أَوَعَجِبْتُمْ أَن جَآءَكُمْ ذِكْرٌۭ مِّن رَّبِّكُمْ عَلَىٰ رَجُلٍۢ مِّنكُمْ لِيُنذِرَكُمْ وَلِتَتَّقُوا۟ وَلَعَلَّكُمْ تُرْحَمُونَ",
    translation: {
      en: "",
      ur: "کیا تم کو اس بات سے تعجب ہوا ہے کہ تم میں سے ایک شخص کے ہاتھ تمہارے پروردگار کی طرف سے تمہارے پاس نصیحت آئی تاکہ وہ تم کو ڈرائے اور تاکہ تم پرہیزگار بنو اور تاکہ تم پر رحم کیا جائے",
    },
    words: [
      { id: '7:63:1', arabic: "أَوَعَجِبْتُمْ", transliteration: "awaʿajib'tum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you wonder", ur: "Do تم wonder" } },
      { id: '7:63:2', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:63:3', arabic: "جَآءَكُمْ", transliteration: "jāakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has come to you", ur: "has come کو تم" } },
      { id: '7:63:4', arabic: "ذِكْرٌۭ", transliteration: "dhik'run", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a reminder", ur: "a reminder" } },
      { id: '7:63:5', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:63:6', arabic: "رَّبِّكُمْ", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:63:7', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '7:63:8', arabic: "رَجُلٍۢ", transliteration: "rajulin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a man", ur: "a man" } },
      { id: '7:63:9', arabic: "مِّنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '7:63:10', arabic: "لِيُنذِرَكُمْ", transliteration: "liyundhirakum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that he may warn you", ur: "وہ وہ may warn تم" } },
      { id: '7:63:11', arabic: "وَلِتَتَّقُوا۟", transliteration: "walitattaqū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and that you may fear", ur: "اور وہ تم may ڈرنا" } },
      { id: '7:63:12', arabic: "وَلَعَلَّكُمْ", transliteration: "walaʿallakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and so that you may", ur: "اور so وہ تم may" } },
      { id: '7:63:13', arabic: "تُرْحَمُونَ", transliteration: "tur'ḥamūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "receive mercy", ur: "receive رحمت" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  64: {
    text: "فَكَذَّبُوهُ فَأَنجَيْنَـٰهُ وَٱلَّذِينَ مَعَهُۥ فِى ٱلْفُلْكِ وَأَغْرَقْنَا ٱلَّذِينَ كَذَّبُوا۟ بِـَٔايَـٰتِنَآ ۚ إِنَّهُمْ كَانُوا۟ قَوْمًا عَمِينَ",
    translation: {
      en: "",
      ur: "مگر ان لوگوں نے ان کی تکذیب کی۔ تو ہم نے نوح کو اور جو ان کے ساتھ کشتی میں سوار تھے ان کو تو بچا لیا اور جن لوگوں نے ہماری آیتوں کو جھٹلایا تھا انہیں غرق کر دیا۔ کچھ شک نہیں کہ وہ اندھے لوگ تھے",
    },
    words: [
      { id: '7:64:1', arabic: "فَكَذَّبُوهُ", transliteration: "fakadhabūhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But they denied him", ur: "لیکن وہ لوگ denied him" } },
      { id: '7:64:2', arabic: "فَأَنجَيْنَـٰهُ", transliteration: "fa-anjaynāhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so We saved him", ur: "so ہم saved him" } },
      { id: '7:64:3', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those who", ur: "اور جو لوگ" } },
      { id: '7:64:4', arabic: "مَعَهُۥ", transliteration: "maʿahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(were) with him", ur: "(were) ساتھ him" } },
      { id: '7:64:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:64:6', arabic: "ٱلْفُلْكِ", transliteration: "l-ful'ki", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ship", ur: "the ship" } },
      { id: '7:64:7', arabic: "وَأَغْرَقْنَا", transliteration: "wa-aghraqnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We drowned", ur: "اور ہم drowned" } },
      { id: '7:64:8', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '7:64:9', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '7:64:10', arabic: "بِـَٔايَـٰتِنَآ ۚ", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Our Verses", ur: "Our Verses" } },
      { id: '7:64:11', arabic: "إِنَّهُمْ", transliteration: "innahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, they", ur: "بیشک, وہ لوگ" } },
      { id: '7:64:12', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "were", ur: "were" } },
      { id: '7:64:13', arabic: "قَوْمًا", transliteration: "qawman", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "a people", ur: "a لوگ" } },
      { id: '7:64:14', arabic: "عَمِينَ", transliteration: "ʿamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "blind", ur: "blind" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  65: {
    text: "۞ وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًۭا ۗ قَالَ يَـٰقَوْمِ ٱعْبُدُوا۟ ٱللَّهَ مَا لَكُم مِّنْ إِلَـٰهٍ غَيْرُهُۥٓ ۚ أَفَلَا تَتَّقُونَ",
    translation: {
      en: "",
      ur: "اور (اسی طرح) قوم عاد کی طرف ان کے بھائی ہود کو بھیجا۔ انہوں نے کہا کہ بھائیو خدا ہی کی عبادت کرو۔ اس کے سوا تمہارا کوئی معبود نہیں۔ کیا تم ڈرتے نہیں؟",
    },
    words: [
      { id: '7:65:1', arabic: "۞ وَإِلَىٰ", transliteration: "wa-ilā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And to", ur: "اور کو" } },
      { id: '7:65:2', arabic: "عَادٍ", transliteration: "ʿādin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Aad", ur: "Aad" } },
      { id: '7:65:3', arabic: "أَخَاهُمْ", transliteration: "akhāhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(We sent) their brother", ur: "(ہم sent) their brother" } },
      { id: '7:65:4', arabic: "هُودًۭا ۗ", transliteration: "hūdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Hud", ur: "Hud" } },
      { id: '7:65:5', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:65:6', arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ" } },
      { id: '7:65:7', arabic: "ٱعْبُدُوا۟", transliteration: "uʿ'budū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Worship", ur: "عبادت" } },
      { id: '7:65:8', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:65:9', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:65:10', arabic: "لَكُم", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '7:65:11', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any", ur: "any" } },
      { id: '7:65:12', arabic: "إِلَـٰهٍ", transliteration: "ilāhin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "god", ur: "اللہ" } },
      { id: '7:65:13', arabic: "غَيْرُهُۥٓ ۚ", transliteration: "ghayruhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than Him", ur: "other than Him" } },
      { id: '7:65:14', arabic: "أَفَلَا", transliteration: "afalā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Then will not", ur: "پھر will نہیں" } },
      { id: '7:65:15', arabic: "تَتَّقُونَ", transliteration: "tattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you fear (Allah)", ur: "تم ڈرنا (اللہ)" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  66: {
    text: "قَالَ ٱلْمَلَأُ ٱلَّذِينَ كَفَرُوا۟ مِن قَوْمِهِۦٓ إِنَّا لَنَرَىٰكَ فِى سَفَاهَةٍۢ وَإِنَّا لَنَظُنُّكَ مِنَ ٱلْكَـٰذِبِينَ",
    translation: {
      en: "",
      ur: "تو ان کی قوم کے سردار جو کافر تھے کہنے لگے کہ تم ہمیں احمق نظر آتے ہو اور ہم تمہیں جھوٹا خیال کرتے ہیں",
    },
    words: [
      { id: '7:66:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Said", ur: "کہا" } },
      { id: '7:66:2', arabic: "ٱلْمَلَأُ", transliteration: "l-mala-u", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the chiefs", ur: "the chiefs" } },
      { id: '7:66:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those who", ur: "(of) جو لوگ" } },
      { id: '7:66:4', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '7:66:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:66:6', arabic: "قَوْمِهِۦٓ", transliteration: "qawmihi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "his people", ur: "his لوگ" } },
      { id: '7:66:7', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, we", ur: "بیشک, ہم" } },
      { id: '7:66:8', arabic: "لَنَرَىٰكَ", transliteration: "lanarāka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, see you", ur: "یقیناً, دیکھنا تم" } },
      { id: '7:66:9', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:66:10', arabic: "سَفَاهَةٍۢ", transliteration: "safāhatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "foolishness", ur: "foolishness" } },
      { id: '7:66:11', arabic: "وَإِنَّا", transliteration: "wa-innā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and indeed, we", ur: "اور بیشک, ہم" } },
      { id: '7:66:12', arabic: "لَنَظُنُّكَ", transliteration: "lanaẓunnuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[we] think you", ur: "[ہم] think تم" } },
      { id: '7:66:13', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) of", ur: "(are) of" } },
      { id: '7:66:14', arabic: "ٱلْكَـٰذِبِينَ", transliteration: "l-kādhibīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the liars", ur: "the liars" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  67: {
    text: "قَالَ يَـٰقَوْمِ لَيْسَ بِى سَفَاهَةٌۭ وَلَـٰكِنِّى رَسُولٌۭ مِّن رَّبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "انہوں نے کہا کہ بھائیو مجھ میں حماقت کی کوئی بات نہیں ہے بلکہ میں رب العالمین کا پیغمبر ہوں",
    },
    words: [
      { id: '7:67:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:67:2', arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ" } },
      { id: '7:67:3', arabic: "لَيْسَ", transliteration: "laysa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "There is not", ur: "There is نہیں" } },
      { id: '7:67:4', arabic: "بِى", transliteration: "bī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in me", ur: "میں me" } },
      { id: '7:67:5', arabic: "سَفَاهَةٌۭ", transliteration: "safāhatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "foolishness", ur: "foolishness" } },
      { id: '7:67:6', arabic: "وَلَـٰكِنِّى", transliteration: "walākinnī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but I am", ur: "لیکن میں am" } },
      { id: '7:67:7', arabic: "رَسُولٌۭ", transliteration: "rasūlun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Messenger", ur: "a رسول" } },
      { id: '7:67:8', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:67:9', arabic: "رَّبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Lord", ur: "(the) رب" } },
      { id: '7:67:10', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  68: {
    text: "أُبَلِّغُكُمْ رِسَـٰلَـٰتِ رَبِّى وَأَنَا۠ لَكُمْ نَاصِحٌ أَمِينٌ",
    translation: {
      en: "",
      ur: "میں تمہیں خدا کے پیغام پہنچاتا ہوں اور تمہارا امانت دار خیرخواہ ہوں",
    },
    words: [
      { id: '7:68:1', arabic: "أُبَلِّغُكُمْ", transliteration: "uballighukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I convey to you", ur: "میں convey کو تم" } },
      { id: '7:68:2', arabic: "رِسَـٰلَـٰتِ", transliteration: "risālāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Messages", ur: "Messages" } },
      { id: '7:68:3', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) my Lord", ur: "(of) my رب" } },
      { id: '7:68:4', arabic: "وَأَنَا۠", transliteration: "wa-anā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and I am", ur: "اور میں am" } },
      { id: '7:68:5', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '7:68:6', arabic: "نَاصِحٌ", transliteration: "nāṣiḥun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an adviser ", ur: "an adviser " } },
      { id: '7:68:7', arabic: "أَمِينٌ", transliteration: "amīnun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "trustworthy", ur: "trustworthy" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  69: {
    text: "أَوَعَجِبْتُمْ أَن جَآءَكُمْ ذِكْرٌۭ مِّن رَّبِّكُمْ عَلَىٰ رَجُلٍۢ مِّنكُمْ لِيُنذِرَكُمْ ۚ وَٱذْكُرُوٓا۟ إِذْ جَعَلَكُمْ خُلَفَآءَ مِنۢ بَعْدِ قَوْمِ نُوحٍۢ وَزَادَكُمْ فِى ٱلْخَلْقِ بَصْۜطَةًۭ ۖ فَٱذْكُرُوٓا۟ ءَالَآءَ ٱللَّهِ لَعَلَّكُمْ تُفْلِحُونَ",
    translation: {
      en: "",
      ur: "کیا تم کو اس بات سے تعجب ہوا ہے کہ تم میں سے ایک شخص کے ہاتھ تمہارے پروردگار کی طرف سے تمہارے پاس نصیحت آئی تاکہ وہ تمہیں ڈرائے اور یاد کرو تو کرو جب اس نے تم کو قوم نوح کے بعد سردار بنایا۔ اور تم کو پھیلاؤ زیادہ دیا۔ پس خدا کی نعمتوں کو یاد کرو۔ تاکہ نجات حاصل کرو",
    },
    words: [
      { id: '7:69:1', arabic: "أَوَعَجِبْتُمْ", transliteration: "awaʿajib'tum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you wonder", ur: "Do تم wonder" } },
      { id: '7:69:2', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:69:3', arabic: "جَآءَكُمْ", transliteration: "jāakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has come to you", ur: "has come کو تم" } },
      { id: '7:69:4', arabic: "ذِكْرٌۭ", transliteration: "dhik'run", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a reminder", ur: "a reminder" } },
      { id: '7:69:5', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:69:6', arabic: "رَّبِّكُمْ", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:69:7', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '7:69:8', arabic: "رَجُلٍۢ", transliteration: "rajulin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a man", ur: "a man" } },
      { id: '7:69:9', arabic: "مِّنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '7:69:10', arabic: "لِيُنذِرَكُمْ ۚ", transliteration: "liyundhirakum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that he may warn you", ur: "وہ وہ may warn تم" } },
      { id: '7:69:11', arabic: "وَٱذْكُرُوٓا۟", transliteration: "wa-udh'kurū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And remember", ur: "اور remember" } },
      { id: '7:69:12', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '7:69:13', arabic: "جَعَلَكُمْ", transliteration: "jaʿalakum", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "He made you", ur: "وہ made تم" } },
      { id: '7:69:14', arabic: "خُلَفَآءَ", transliteration: "khulafāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "successors", ur: "successors" } },
      { id: '7:69:15', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:69:16', arabic: "بَعْدِ", transliteration: "baʿdi", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '7:69:17', arabic: "قَوْمِ", transliteration: "qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "(the) people", ur: "(the) لوگ" } },
      { id: '7:69:18', arabic: "نُوحٍۢ", transliteration: "nūḥin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Nuh", ur: "(of) Nuh" } },
      { id: '7:69:19', arabic: "وَزَادَكُمْ", transliteration: "wazādakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and increased you", ur: "اور increased تم" } },
      { id: '7:69:20', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:69:21', arabic: "ٱلْخَلْقِ", transliteration: "l-khalqi", pos: ['N'], posLabel: 'N', root: "خ ل ق", meaning: { en: "the stature", ur: "the stature" } },
      { id: '7:69:22', arabic: "بَصْۜطَةًۭ ۖ", transliteration: "baṣ'ṭatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "extensively", ur: "extensively" } },
      { id: '7:69:23', arabic: "فَٱذْكُرُوٓا۟", transliteration: "fa-udh'kurū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So remember", ur: "So remember" } },
      { id: '7:69:24', arabic: "ءَالَآءَ", transliteration: "ālāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Bounties", ur: "(the) Bounties" } },
      { id: '7:69:25', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '7:69:26', arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that you may", ur: "so وہ تم may" } },
      { id: '7:69:27', arabic: "تُفْلِحُونَ", transliteration: "tuf'liḥūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "succeed", ur: "succeed" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'جار + مجرور' }
      ],
    },
  },
  70: {
    text: "قَالُوٓا۟ أَجِئْتَنَا لِنَعْبُدَ ٱللَّهَ وَحْدَهُۥ وَنَذَرَ مَا كَانَ يَعْبُدُ ءَابَآؤُنَا ۖ فَأْتِنَا بِمَا تَعِدُنَآ إِن كُنتَ مِنَ ٱلصَّـٰدِقِينَ",
    translation: {
      en: "",
      ur: "وہ کہنے لگے کہ تم ہمارے پاس اس لیے آئے ہو کہ ہم اکیلے خدا ہی کی عبادت کریں۔ اور جن کو ہمارے باپ دادا پوجتے چلے آئے ہیں ان کو چھوڑ دیں؟ تو اگر سچے ہو تو جس چیز سے ہمیں ڈراتے ہو اسے لے آؤ",
    },
    words: [
      { id: '7:70:1', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '7:70:2', arabic: "أَجِئْتَنَا", transliteration: "aji'tanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Have you come to us", ur: "Have تم come کو us" } },
      { id: '7:70:3', arabic: "لِنَعْبُدَ", transliteration: "linaʿbuda", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that we (should) worship", ur: "وہ ہم (should) عبادت" } },
      { id: '7:70:4', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:70:5', arabic: "وَحْدَهُۥ", transliteration: "waḥdahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "Alone", ur: "Alone" } },
      { id: '7:70:6', arabic: "وَنَذَرَ", transliteration: "wanadhara", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and we forsake", ur: "اور ہم forsake" } },
      { id: '7:70:7', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:70:8', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "used to", ur: "used کو" } },
      { id: '7:70:9', arabic: "يَعْبُدُ", transliteration: "yaʿbudu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "worship", ur: "عبادت" } },
      { id: '7:70:10', arabic: "ءَابَآؤُنَا ۖ", transliteration: "ābāunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our forefathers", ur: "our forefathers" } },
      { id: '7:70:11', arabic: "فَأْتِنَا", transliteration: "fatinā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then bring us", ur: "پھر bring us" } },
      { id: '7:70:12', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '7:70:13', arabic: "تَعِدُنَآ", transliteration: "taʿidunā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you promise us", ur: "تم promise us" } },
      { id: '7:70:14', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '7:70:15', arabic: "كُنتَ", transliteration: "kunta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '7:70:16', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:70:17', arabic: "ٱلصَّـٰدِقِينَ", transliteration: "l-ṣādiqīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the truthful", ur: "the truthful" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'موصوف + صفت' }
      ],
    },
  },
  71: {
    text: "قَالَ قَدْ وَقَعَ عَلَيْكُم مِّن رَّبِّكُمْ رِجْسٌۭ وَغَضَبٌ ۖ أَتُجَـٰدِلُونَنِى فِىٓ أَسْمَآءٍۢ سَمَّيْتُمُوهَآ أَنتُمْ وَءَابَآؤُكُم مَّا نَزَّلَ ٱللَّهُ بِهَا مِن سُلْطَـٰنٍۢ ۚ فَٱنتَظِرُوٓا۟ إِنِّى مَعَكُم مِّنَ ٱلْمُنتَظِرِينَ",
    translation: {
      en: "",
      ur: "ہود نے کہا تمہارے پروردگار کی طرف سے تم پر عذاب اور غضب کا (نازل ہونا) مقرر ہو چکا ہے۔ کیا تم مجھ سے ایسے ناموں کے بارے میں جھگڑتے ہو جو تم نے اور تمہارے باپ دادا نے (اپنی طرف سے) رکھ لئے ہیں۔ جن کی خدا نے کوئی سند نازل نہیں کی۔ تو تم بھی انتظار کرو میں بھی تمہارے ساتھ انتظار کرتا ہوں",
    },
    words: [
      { id: '7:71:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:71:2', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '7:71:3', arabic: "وَقَعَ", transliteration: "waqaʿa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "has fallen", ur: "has fallen" } },
      { id: '7:71:4', arabic: "عَلَيْكُم", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon you", ur: "پر تم" } },
      { id: '7:71:5', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:71:6', arabic: "رَّبِّكُمْ", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:71:7', arabic: "رِجْسٌۭ", transliteration: "rij'sun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "punishment", ur: "عذاب" } },
      { id: '7:71:8', arabic: "وَغَضَبٌ ۖ", transliteration: "waghaḍabun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and anger", ur: "اور anger" } },
      { id: '7:71:9', arabic: "أَتُجَـٰدِلُونَنِى", transliteration: "atujādilūnanī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you dispute with me", ur: "Do تم dispute ساتھ me" } },
      { id: '7:71:10', arabic: "فِىٓ", transliteration: "fī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "concerning", ur: "concerning" } },
      { id: '7:71:11', arabic: "أَسْمَآءٍۢ", transliteration: "asmāin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "names", ur: "names" } },
      { id: '7:71:12', arabic: "سَمَّيْتُمُوهَآ", transliteration: "sammaytumūhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have named them ", ur: "تم have named them " } },
      { id: '7:71:13', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '7:71:14', arabic: "وَءَابَآؤُكُم", transliteration: "waābāukum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your forefathers", ur: "اور your forefathers" } },
      { id: '7:71:15', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '7:71:16', arabic: "نَزَّلَ", transliteration: "nazzala", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(has been) sent down", ur: "(has been) sent down" } },
      { id: '7:71:17', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '7:71:18', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for it", ur: "for it" } },
      { id: '7:71:19', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '7:71:20', arabic: "سُلْطَـٰنٍۢ ۚ", transliteration: "sul'ṭānin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "authority", ur: "authority" } },
      { id: '7:71:21', arabic: "فَٱنتَظِرُوٓا۟", transliteration: "fa-intaẓirū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then wait", ur: "پھر wait" } },
      { id: '7:71:22', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed, I am", ur: "بیشک, میں am" } },
      { id: '7:71:23', arabic: "مَعَكُم", transliteration: "maʿakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with you", ur: "ساتھ تم" } },
      { id: '7:71:24', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:71:25', arabic: "ٱلْمُنتَظِرِينَ", transliteration: "l-muntaẓirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who wait", ur: "the ones جو wait" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  72: {
    text: "فَأَنجَيْنَـٰهُ وَٱلَّذِينَ مَعَهُۥ بِرَحْمَةٍۢ مِّنَّا وَقَطَعْنَا دَابِرَ ٱلَّذِينَ كَذَّبُوا۟ بِـَٔايَـٰتِنَا ۖ وَمَا كَانُوا۟ مُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "پھر ہم نے ہود کو اور جو لوگ ان کے ساتھ تھے ان کو نجات بخشی اور جنہوں نے ہماری آیتوں کو جھٹلایا تھا ان کی جڑ کاٹ دی اور وہ ایمان لانے والے تھے ہی نہیں",
    },
    words: [
      { id: '7:72:1', arabic: "فَأَنجَيْنَـٰهُ", transliteration: "fa-anjaynāhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So We saved him", ur: "So ہم saved him" } },
      { id: '7:72:2', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those", ur: "اور those" } },
      { id: '7:72:3', arabic: "مَعَهُۥ", transliteration: "maʿahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with him", ur: "ساتھ him" } },
      { id: '7:72:4', arabic: "بِرَحْمَةٍۢ", transliteration: "biraḥmatin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by Mercy", ur: "by رحمت" } },
      { id: '7:72:5', arabic: "مِّنَّا", transliteration: "minnā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from Us", ur: "سے Us" } },
      { id: '7:72:6', arabic: "وَقَطَعْنَا", transliteration: "waqaṭaʿnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We cut off", ur: "اور ہم cut off" } },
      { id: '7:72:7', arabic: "دَابِرَ", transliteration: "dābira", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the roots", ur: "the roots" } },
      { id: '7:72:8', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those who", ur: "(of) جو لوگ" } },
      { id: '7:72:9', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '7:72:10', arabic: "بِـَٔايَـٰتِنَا ۖ", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Our Signs", ur: "Our نشانیاں" } },
      { id: '7:72:11', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '7:72:12', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they were", ur: "وہ لوگ were" } },
      { id: '7:72:13', arabic: "مُؤْمِنِينَ", transliteration: "mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believers", ur: "مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  73: {
    text: "وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَـٰلِحًۭا ۗ قَالَ يَـٰقَوْمِ ٱعْبُدُوا۟ ٱللَّهَ مَا لَكُم مِّنْ إِلَـٰهٍ غَيْرُهُۥ ۖ قَدْ جَآءَتْكُم بَيِّنَةٌۭ مِّن رَّبِّكُمْ ۖ هَـٰذِهِۦ نَاقَةُ ٱللَّهِ لَكُمْ ءَايَةًۭ ۖ فَذَرُوهَا تَأْكُلْ فِىٓ أَرْضِ ٱللَّهِ ۖ وَلَا تَمَسُّوهَا بِسُوٓءٍۢ فَيَأْخُذَكُمْ عَذَابٌ أَلِيمٌۭ",
    translation: {
      en: "",
      ur: "اور قوم ثمود کی طرف ان کے بھائی صالح کو بھیجا۔ (تو) صالح نے کہا کہ اے قوم! خدا ہی کی عبادت کرو اس کے سوا تمہارا کوئی معبود نہیں۔ تمہارے پاس تمہارے پروردگار کی طرف سے ایک معجزہ آ چکا ہے۔ (یعنی) یہی خدا کی اونٹنی تمہارے لیے معجزہ ہے۔ تو اسے (آزاد) چھوڑ دو کہ خدا کی زمین میں چرتی پھرے اور تم اسے بری نیت سے ہاتھ بھی نہ لگانا۔ ورنہ عذابِ الیم میں تمہیں پکڑ لے گا",
    },
    words: [
      { id: '7:73:1', arabic: "وَإِلَىٰ", transliteration: "wa-ilā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And to", ur: "اور کو" } },
      { id: '7:73:2', arabic: "ثَمُودَ", transliteration: "thamūda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thamud", ur: "Thamud" } },
      { id: '7:73:3', arabic: "أَخَاهُمْ", transliteration: "akhāhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(We sent) their brother", ur: "(ہم sent) their brother" } },
      { id: '7:73:4', arabic: "صَـٰلِحًۭا ۗ", transliteration: "ṣāliḥan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Salih", ur: "Salih" } },
      { id: '7:73:5', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:73:6', arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ" } },
      { id: '7:73:7', arabic: "ٱعْبُدُوا۟", transliteration: "uʿ'budū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Worship", ur: "عبادت" } },
      { id: '7:73:8', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:73:9', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:73:10', arabic: "لَكُم", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '7:73:11', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any", ur: "any" } },
      { id: '7:73:12', arabic: "إِلَـٰهٍ", transliteration: "ilāhin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "god", ur: "اللہ" } },
      { id: '7:73:13', arabic: "غَيْرُهُۥ ۖ", transliteration: "ghayruhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than Him", ur: "other than Him" } },
      { id: '7:73:14', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '7:73:15', arabic: "جَآءَتْكُم", transliteration: "jāatkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has come to you", ur: "has come کو تم" } },
      { id: '7:73:16', arabic: "بَيِّنَةٌۭ", transliteration: "bayyinatun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "a clear proof", ur: "a clear proof" } },
      { id: '7:73:17', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:73:18', arabic: "رَّبِّكُمْ ۖ", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:73:19', arabic: "هَـٰذِهِۦ", transliteration: "hādhihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "This", ur: "This" } },
      { id: '7:73:20', arabic: "نَاقَةُ", transliteration: "nāqatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a she-camel", ur: "(is) a she-camel" } },
      { id: '7:73:21', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '7:73:22', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(it is) for you", ur: "(it is) for تم" } },
      { id: '7:73:23', arabic: "ءَايَةًۭ ۖ", transliteration: "āyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Sign", ur: "a نشانی" } },
      { id: '7:73:24', arabic: "فَذَرُوهَا", transliteration: "fadharūhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So you leave her", ur: "So تم leave her" } },
      { id: '7:73:25', arabic: "تَأْكُلْ", transliteration: "takul", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) eat", ur: "(کو) eat" } },
      { id: '7:73:26', arabic: "فِىٓ", transliteration: "fī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '7:73:27', arabic: "أَرْضِ", transliteration: "arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "(the) earth", ur: "(the) زمین" } },
      { id: '7:73:28', arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '7:73:29', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '7:73:30', arabic: "تَمَسُّوهَا", transliteration: "tamassūhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "touch her", ur: "touch her" } },
      { id: '7:73:31', arabic: "بِسُوٓءٍۢ", transliteration: "bisūin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with harm", ur: "ساتھ harm" } },
      { id: '7:73:32', arabic: "فَيَأْخُذَكُمْ", transliteration: "fayakhudhakum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "lest seizes you", ur: "lest seizes تم" } },
      { id: '7:73:33', arabic: "عَذَابٌ", transliteration: "ʿadhābun", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "a punishment", ur: "a عذاب" } },
      { id: '7:73:34', arabic: "أَلِيمٌۭ", transliteration: "alīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "painful", ur: "painful" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'موصوف + صفت' },
        { from: 25, to: 26, label: 'فعل + فاعل' },
        { from: 33, to: 34, label: 'موصوف + صفت' }
      ],
    },
  },
  74: {
    text: "وَٱذْكُرُوٓا۟ إِذْ جَعَلَكُمْ خُلَفَآءَ مِنۢ بَعْدِ عَادٍۢ وَبَوَّأَكُمْ فِى ٱلْأَرْضِ تَتَّخِذُونَ مِن سُهُولِهَا قُصُورًۭا وَتَنْحِتُونَ ٱلْجِبَالَ بُيُوتًۭا ۖ فَٱذْكُرُوٓا۟ ءَالَآءَ ٱللَّهِ وَلَا تَعْثَوْا۟ فِى ٱلْأَرْضِ مُفْسِدِينَ",
    translation: {
      en: "",
      ur: "اور یاد تو کرو جب اس نے تم کو قوم عاد کے بعد سردار بنایا اور زمین پر آباد کیا کہ نرم زمین سے (مٹی لے لے کر) محل تعمیر کرتے ہو اور پہاڑوں کو تراش تراش کر گھر بناتے ہو۔ پس خدا کی نعمتوں کو یاد کرو اور زمین میں فساد نہ کرتے پھرو",
    },
    words: [
      { id: '7:74:1', arabic: "وَٱذْكُرُوٓا۟", transliteration: "wa-udh'kurū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And remember", ur: "اور remember" } },
      { id: '7:74:2', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '7:74:3', arabic: "جَعَلَكُمْ", transliteration: "jaʿalakum", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "He made you", ur: "وہ made تم" } },
      { id: '7:74:4', arabic: "خُلَفَآءَ", transliteration: "khulafāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "successors", ur: "successors" } },
      { id: '7:74:5', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:74:6', arabic: "بَعْدِ", transliteration: "baʿdi", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '7:74:7', arabic: "عَادٍۢ", transliteration: "ʿādin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Aad", ur: "Aad" } },
      { id: '7:74:8', arabic: "وَبَوَّأَكُمْ", transliteration: "wabawwa-akum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and settled you", ur: "اور settled تم" } },
      { id: '7:74:9', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:74:10', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '7:74:11', arabic: "تَتَّخِذُونَ", transliteration: "tattakhidhūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You take", ur: "تم take" } },
      { id: '7:74:12', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:74:13', arabic: "سُهُولِهَا", transliteration: "suhūlihā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its plains", ur: "its plains" } },
      { id: '7:74:14', arabic: "قُصُورًۭا", transliteration: "quṣūran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "palaces", ur: "palaces" } },
      { id: '7:74:15', arabic: "وَتَنْحِتُونَ", transliteration: "watanḥitūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and you carve out", ur: "اور تم carve out" } },
      { id: '7:74:16', arabic: "ٱلْجِبَالَ", transliteration: "l-jibāla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mountains", ur: "the mountains" } },
      { id: '7:74:17', arabic: "بُيُوتًۭا ۖ", transliteration: "buyūtan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) homes", ur: "(as) homes" } },
      { id: '7:74:18', arabic: "فَٱذْكُرُوٓا۟", transliteration: "fa-udh'kurū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So remember", ur: "So remember" } },
      { id: '7:74:19', arabic: "ءَالَآءَ", transliteration: "ālāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Bounties", ur: "(the) Bounties" } },
      { id: '7:74:20', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '7:74:21', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '7:74:22', arabic: "تَعْثَوْا۟", transliteration: "taʿthaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "act wickedly", ur: "act wickedly" } },
      { id: '7:74:23', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:74:24', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "(the) earth", ur: "(the) زمین" } },
      { id: '7:74:25', arabic: "مُفْسِدِينَ", transliteration: "muf'sidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "spreading corruption", ur: "spreading corruption" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 23, to: 24, label: 'جار + مجرور' }
      ],
    },
  },
  75: {
    text: "قَالَ ٱلْمَلَأُ ٱلَّذِينَ ٱسْتَكْبَرُوا۟ مِن قَوْمِهِۦ لِلَّذِينَ ٱسْتُضْعِفُوا۟ لِمَنْ ءَامَنَ مِنْهُمْ أَتَعْلَمُونَ أَنَّ صَـٰلِحًۭا مُّرْسَلٌۭ مِّن رَّبِّهِۦ ۚ قَالُوٓا۟ إِنَّا بِمَآ أُرْسِلَ بِهِۦ مُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "تو ان کی قوم میں سردار لوگ جو غرور رکھتے تھے غریب لوگوں سے جو ان میں سے ایمان لے آئے تھے کہنے لگے بھلا تم یقین کرتے ہو کہ صالح اپنے پروردگار کی طرف بھیجے گئے ہیں؟ انہوں نے کہا ہاں جو چیز دے کر وہ بھیجے گئے ہیں ہم اس پر بلاشبہ ایمان رکھتے ہیں",
    },
    words: [
      { id: '7:75:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Said", ur: "کہا" } },
      { id: '7:75:2', arabic: "ٱلْمَلَأُ", transliteration: "l-mala-u", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the chiefs", ur: "the chiefs" } },
      { id: '7:75:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: " those", ur: " those" } },
      { id: '7:75:4', arabic: "ٱسْتَكْبَرُوا۟", transliteration: "is'takbarū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(who) were arrogant", ur: "(جو) were arrogant" } },
      { id: '7:75:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "among", ur: "among" } },
      { id: '7:75:6', arabic: "قَوْمِهِۦ", transliteration: "qawmihi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "his people", ur: "his لوگ" } },
      { id: '7:75:7', arabic: "لِلَّذِينَ", transliteration: "lilladhīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to those who", ur: "کو جو لوگ" } },
      { id: '7:75:8', arabic: "ٱسْتُضْعِفُوا۟", transliteration: "us'tuḍ'ʿifū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "were oppressed ", ur: "were oppressed " } },
      { id: '7:75:9', arabic: "لِمَنْ", transliteration: "liman", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[to] those who", ur: "[کو] جو لوگ" } },
      { id: '7:75:10', arabic: "ءَامَنَ", transliteration: "āmana", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '7:75:11', arabic: "مِنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among them", ur: "among them" } },
      { id: '7:75:12', arabic: "أَتَعْلَمُونَ", transliteration: "ataʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "Do you know", ur: "Do تم جاننا" } },
      { id: '7:75:13', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:75:14', arabic: "صَـٰلِحًۭا", transliteration: "ṣāliḥan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Salih", ur: "Salih" } },
      { id: '7:75:15', arabic: "مُّرْسَلٌۭ", transliteration: "mur'salun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is the) one sent", ur: "(is the) one sent" } },
      { id: '7:75:16', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:75:17', arabic: "رَّبِّهِۦ ۚ", transliteration: "rabbihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his Lord", ur: "his رب" } },
      { id: '7:75:18', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '7:75:19', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, we", ur: "بیشک, ہم" } },
      { id: '7:75:20', arabic: "بِمَآ", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in what", ur: "میں کیا" } },
      { id: '7:75:21', arabic: "أُرْسِلَ", transliteration: "ur'sila", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he has been sent", ur: "وہ has been sent" } },
      { id: '7:75:22', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with [it]", ur: "ساتھ [it]" } },
      { id: '7:75:23', arabic: "مُؤْمِنُونَ", transliteration: "mu'minūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) believers", ur: "(are) مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'جار + مجرور' }
      ],
    },
  },
  76: {
    text: "قَالَ ٱلَّذِينَ ٱسْتَكْبَرُوٓا۟ إِنَّا بِٱلَّذِىٓ ءَامَنتُم بِهِۦ كَـٰفِرُونَ",
    translation: {
      en: "",
      ur: "تو (سرداران) مغرور کہنے لگے کہ جس چیز پر تم ایمان لائے ہو ہم تو اس کو نہیں مانتے",
    },
    words: [
      { id: '7:76:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Said", ur: "کہا" } },
      { id: '7:76:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '7:76:3', arabic: "ٱسْتَكْبَرُوٓا۟", transliteration: "is'takbarū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "were arrogant", ur: "were arrogant" } },
      { id: '7:76:4', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed we", ur: "بیشک ہم" } },
      { id: '7:76:5', arabic: "بِٱلَّذِىٓ", transliteration: "bi-alladhī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in that which", ur: "میں وہ جو" } },
      { id: '7:76:6', arabic: "ءَامَنتُم", transliteration: "āmantum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you believe", ur: "تم ایمان لانا" } },
      { id: '7:76:7', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '7:76:8', arabic: "كَـٰفِرُونَ", transliteration: "kāfirūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) disbelievers", ur: "(are) کافر" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  77: {
    text: "فَعَقَرُوا۟ ٱلنَّاقَةَ وَعَتَوْا۟ عَنْ أَمْرِ رَبِّهِمْ وَقَالُوا۟ يَـٰصَـٰلِحُ ٱئْتِنَا بِمَا تَعِدُنَآ إِن كُنتَ مِنَ ٱلْمُرْسَلِينَ",
    translation: {
      en: "",
      ur: "آخر انہوں نے اونٹی (کی کونچوں) کو کاٹ ڈالا اور اپنے پروردگار کے حکم سے سرکشی کی اور کہنے لگے کہ صالح! جس چیز سے تم ہمیں ڈراتے تھے اگر تم (خدا کے) پیغمبر ہو تو اسے ہم پر لے آؤ",
    },
    words: [
      { id: '7:77:1', arabic: "فَعَقَرُوا۟", transliteration: "faʿaqarū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then they hamstrung", ur: "پھر وہ لوگ hamstrung" } },
      { id: '7:77:2', arabic: "ٱلنَّاقَةَ", transliteration: "l-nāqata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the she-camel", ur: "the she-camel" } },
      { id: '7:77:3', arabic: "وَعَتَوْا۟", transliteration: "waʿataw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (were) insolent", ur: "اور (were) insolent" } },
      { id: '7:77:4', arabic: "عَنْ", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "towards", ur: "towards" } },
      { id: '7:77:5', arabic: "أَمْرِ", transliteration: "amri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) command", ur: "(the) command" } },
      { id: '7:77:6', arabic: "رَبِّهِمْ", transliteration: "rabbihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) their Lord", ur: "(of) their رب" } },
      { id: '7:77:7', arabic: "وَقَالُوا۟", transliteration: "waqālū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and they said", ur: "اور وہ لوگ کہا" } },
      { id: '7:77:8', arabic: "يَـٰصَـٰلِحُ", transliteration: "yāṣāliḥu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O Salih", ur: "اے Salih" } },
      { id: '7:77:9', arabic: "ٱئْتِنَا", transliteration: "i'tinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Bring us", ur: "Bring us" } },
      { id: '7:77:10', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:77:11', arabic: "تَعِدُنَآ", transliteration: "taʿidunā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you promise us", ur: "تم promise us" } },
      { id: '7:77:12', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '7:77:13', arabic: "كُنتَ", transliteration: "kunta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '7:77:14', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:77:15', arabic: "ٱلْمُرْسَلِينَ", transliteration: "l-mur'salīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messengers", ur: "the Messengers" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  78: {
    text: "فَأَخَذَتْهُمُ ٱلرَّجْفَةُ فَأَصْبَحُوا۟ فِى دَارِهِمْ جَـٰثِمِينَ",
    translation: {
      en: "",
      ur: "تو ان کو بھونچال نے آ پکڑا اور وہ اپنے گھروں میں اوندھے پڑے رہ گئے",
    },
    words: [
      { id: '7:78:1', arabic: "فَأَخَذَتْهُمُ", transliteration: "fa-akhadhathumu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So seized them", ur: "So seized them" } },
      { id: '7:78:2', arabic: "ٱلرَّجْفَةُ", transliteration: "l-rajfatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the earthquake", ur: "the earthquake" } },
      { id: '7:78:3', arabic: "فَأَصْبَحُوا۟", transliteration: "fa-aṣbaḥū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then they became", ur: "پھر وہ لوگ became" } },
      { id: '7:78:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:78:5', arabic: "دَارِهِمْ", transliteration: "dārihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their homes", ur: "their homes" } },
      { id: '7:78:6', arabic: "جَـٰثِمِينَ", transliteration: "jāthimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fallen prone", ur: "fallen prone" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  79: {
    text: "فَتَوَلَّىٰ عَنْهُمْ وَقَالَ يَـٰقَوْمِ لَقَدْ أَبْلَغْتُكُمْ رِسَالَةَ رَبِّى وَنَصَحْتُ لَكُمْ وَلَـٰكِن لَّا تُحِبُّونَ ٱلنَّـٰصِحِينَ",
    translation: {
      en: "",
      ur: "پھر صالح ان سے (ناامید ہو کر) پھرے اور کہا کہ میری قوم! میں نے تم کو خدا کا پیغام پہنچا دیا اور تمہاری خیر خواہی کی مگر تم (ایسے ہو کہ) خیر خواہوں کو دوست ہی نہیں رکھتے",
    },
    words: [
      { id: '7:79:1', arabic: "فَتَوَلَّىٰ", transliteration: "fatawallā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So he turned away", ur: "So وہ turned away" } },
      { id: '7:79:2', arabic: "عَنْهُمْ", transliteration: "ʿanhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '7:79:3', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and he said", ur: "اور وہ کہا" } },
      { id: '7:79:4', arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ" } },
      { id: '7:79:5', arabic: "لَقَدْ", transliteration: "laqad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '7:79:6', arabic: "أَبْلَغْتُكُمْ", transliteration: "ablaghtukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I have conveyed to you", ur: "میں have conveyed کو تم" } },
      { id: '7:79:7', arabic: "رِسَالَةَ", transliteration: "risālata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Message", ur: "(the) Message" } },
      { id: '7:79:8', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) my Lord", ur: "(of) my رب" } },
      { id: '7:79:9', arabic: "وَنَصَحْتُ", transliteration: "wanaṣaḥtu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and [I] advised", ur: "اور [میں] advised" } },
      { id: '7:79:10', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[to] you", ur: "[کو] تم" } },
      { id: '7:79:11', arabic: "وَلَـٰكِن", transliteration: "walākin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '7:79:12', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:79:13', arabic: "تُحِبُّونَ", transliteration: "tuḥibbūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you like", ur: "تم like" } },
      { id: '7:79:14', arabic: "ٱلنَّـٰصِحِينَ", transliteration: "l-nāṣiḥīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the advisers", ur: "the advisers" } }
    ],
    structure: {
      relationships: [
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  80: {
    text: "وَلُوطًا إِذْ قَالَ لِقَوْمِهِۦٓ أَتَأْتُونَ ٱلْفَـٰحِشَةَ مَا سَبَقَكُم بِهَا مِنْ أَحَدٍۢ مِّنَ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "اور اسی طرح جب ہم نے لوط کو (پیغمبر بنا کر بھیجا تو) اس وقت انہوں نے اپنی قوم سے کہا کہ تم ایسی بےحیائی کا کام کیوں کرتے ہو کہ تم سے اہل عالم میں سے کسی نے اس طرح کا کام نہیں کیا",
    },
    words: [
      { id: '7:80:1', arabic: "وَلُوطًا", transliteration: "walūṭan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Lut", ur: "اور Lut" } },
      { id: '7:80:2', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '7:80:3', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '7:80:4', arabic: "لِقَوْمِهِۦٓ", transliteration: "liqawmihi", pos: ['P+N'], posLabel: 'P+N', root: "ق و م", meaning: { en: "to his people", ur: "کو his لوگ" } },
      { id: '7:80:5', arabic: "أَتَأْتُونَ", transliteration: "atatūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you commit", ur: "Do تم commit" } },
      { id: '7:80:6', arabic: "ٱلْفَـٰحِشَةَ", transliteration: "l-fāḥishata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(such) immorality", ur: "(such) immorality" } },
      { id: '7:80:7', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:80:8', arabic: "سَبَقَكُم", transliteration: "sabaqakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has preceded you", ur: "has preceded تم" } },
      { id: '7:80:9', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '7:80:10', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '7:80:11', arabic: "أَحَدٍۢ", transliteration: "aḥadin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "one", ur: "one" } },
      { id: '7:80:12', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:80:13', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the worlds", ur: "the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  81: {
    text: "إِنَّكُمْ لَتَأْتُونَ ٱلرِّجَالَ شَهْوَةًۭ مِّن دُونِ ٱلنِّسَآءِ ۚ بَلْ أَنتُمْ قَوْمٌۭ مُّسْرِفُونَ",
    translation: {
      en: "",
      ur: "یعنی خواہش نفسانی پورا کرنے کے لیے عورتوں کو چھوڑ کر لونڈوں پر گرتے ہو۔ حقیقت یہ ہے کہ تم لوگ حد سے نکل جانے والے ہو",
    },
    words: [
      { id: '7:81:1', arabic: "إِنَّكُمْ", transliteration: "innakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, you", ur: "بیشک, تم" } },
      { id: '7:81:2', arabic: "لَتَأْتُونَ", transliteration: "latatūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you approach", ur: "تم approach" } },
      { id: '7:81:3', arabic: "ٱلرِّجَالَ", transliteration: "l-rijāla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the men", ur: "the men" } },
      { id: '7:81:4', arabic: "شَهْوَةًۭ", transliteration: "shahwatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "lustfully", ur: "lustfully" } },
      { id: '7:81:5', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:81:6', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "instead of", ur: "instead of" } },
      { id: '7:81:7', arabic: "ٱلنِّسَآءِ ۚ", transliteration: "l-nisāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the women", ur: "the women" } },
      { id: '7:81:8', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '7:81:9', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '7:81:10', arabic: "قَوْمٌۭ", transliteration: "qawmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) a people", ur: "(are) a لوگ" } },
      { id: '7:81:11', arabic: "مُّسْرِفُونَ", transliteration: "mus'rifūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(who) commit excesses", ur: "(جو) commit excesses" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  82: {
    text: "وَمَا كَانَ جَوَابَ قَوْمِهِۦٓ إِلَّآ أَن قَالُوٓا۟ أَخْرِجُوهُم مِّن قَرْيَتِكُمْ ۖ إِنَّهُمْ أُنَاسٌۭ يَتَطَهَّرُونَ",
    translation: {
      en: "",
      ur: "تو ان سے اس کا جواب کچھ نہ بن پڑا اور بولے تو یہ بولے کہ ان لوگوں (یعنی لوط اور اس کے گھر والوں) کو اپنے گاؤں سے نکال دو (کہ) یہ لوگ پاک بننا چاہتے ہیں",
    },
    words: [
      { id: '7:82:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '7:82:2', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '7:82:3', arabic: "جَوَابَ", transliteration: "jawāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) answer", ur: "(the) answer" } },
      { id: '7:82:4', arabic: "قَوْمِهِۦٓ", transliteration: "qawmihi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "(of) his people", ur: "(of) his لوگ" } },
      { id: '7:82:5', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:82:6', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:82:7', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they said", ur: "وہ لوگ کہا" } },
      { id: '7:82:8', arabic: "أَخْرِجُوهُم", transliteration: "akhrijūhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Drive them out", ur: "Drive them out" } },
      { id: '7:82:9', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:82:10', arabic: "قَرْيَتِكُمْ ۖ", transliteration: "qaryatikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your town", ur: "your town" } },
      { id: '7:82:11', arabic: "إِنَّهُمْ", transliteration: "innahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, they", ur: "بیشک, وہ لوگ" } },
      { id: '7:82:12', arabic: "أُنَاسٌۭ", transliteration: "unāsun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) people", ur: "(are) لوگ" } },
      { id: '7:82:13', arabic: "يَتَطَهَّرُونَ", transliteration: "yataṭahharūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "who keep themselves pure", ur: "جو keep themselves pure" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  83: {
    text: "فَأَنجَيْنَـٰهُ وَأَهْلَهُۥٓ إِلَّا ٱمْرَأَتَهُۥ كَانَتْ مِنَ ٱلْغَـٰبِرِينَ",
    translation: {
      en: "",
      ur: "تو ہم نے ان کو اور ان کے گھر والوں کو بچا لیا مگر ان کی بی بی (نہ بچی) کہ وہ پیچھے رہنے والوں میں تھی",
    },
    words: [
      { id: '7:83:1', arabic: "فَأَنجَيْنَـٰهُ", transliteration: "fa-anjaynāhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So We saved him", ur: "So ہم saved him" } },
      { id: '7:83:2', arabic: "وَأَهْلَهُۥٓ", transliteration: "wa-ahlahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ه ل", meaning: { en: "and his family", ur: "اور his family" } },
      { id: '7:83:3', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:83:4', arabic: "ٱمْرَأَتَهُۥ", transliteration: "im'ra-atahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his wife", ur: "his wife" } },
      { id: '7:83:5', arabic: "كَانَتْ", transliteration: "kānat", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "she was", ur: "she was" } },
      { id: '7:83:6', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:83:7', arabic: "ٱلْغَـٰبِرِينَ", transliteration: "l-ghābirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who stayed behind", ur: "جو لوگ stayed behind" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  84: {
    text: "وَأَمْطَرْنَا عَلَيْهِم مَّطَرًۭا ۖ فَٱنظُرْ كَيْفَ كَانَ عَـٰقِبَةُ ٱلْمُجْرِمِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے ان پر (پتھروں کا) مینھ برسایا۔ سو دیکھ لو کہ گنہگاروں کا کیسا انجام ہوا",
    },
    words: [
      { id: '7:84:1', arabic: "وَأَمْطَرْنَا", transliteration: "wa-amṭarnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We showered", ur: "اور ہم showered" } },
      { id: '7:84:2', arabic: "عَلَيْهِم", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon them", ur: "پر them" } },
      { id: '7:84:3', arabic: "مَّطَرًۭا ۖ", transliteration: "maṭaran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a rain", ur: "a rain" } },
      { id: '7:84:4', arabic: "فَٱنظُرْ", transliteration: "fa-unẓur", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So see", ur: "So دیکھنا" } },
      { id: '7:84:5', arabic: "كَيْفَ", transliteration: "kayfa", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "how", ur: "how" } },
      { id: '7:84:6', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '7:84:7', arabic: "عَـٰقِبَةُ", transliteration: "ʿāqibatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) end", ur: "(the) end" } },
      { id: '7:84:8', arabic: "ٱلْمُجْرِمِينَ", transliteration: "l-muj'rimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the criminals", ur: "(of) the criminals" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  85: {
    text: "وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًۭا ۗ قَالَ يَـٰقَوْمِ ٱعْبُدُوا۟ ٱللَّهَ مَا لَكُم مِّنْ إِلَـٰهٍ غَيْرُهُۥ ۖ قَدْ جَآءَتْكُم بَيِّنَةٌۭ مِّن رَّبِّكُمْ ۖ فَأَوْفُوا۟ ٱلْكَيْلَ وَٱلْمِيزَانَ وَلَا تَبْخَسُوا۟ ٱلنَّاسَ أَشْيَآءَهُمْ وَلَا تُفْسِدُوا۟ فِى ٱلْأَرْضِ بَعْدَ إِصْلَـٰحِهَا ۚ ذَٰلِكُمْ خَيْرٌۭ لَّكُمْ إِن كُنتُم مُّؤْمِنِينَ",
    translation: {
      en: "",
      ur: "اور مَدین کی طرف ان کے بھائی شعیب کو بھیجا۔ (تو) انہوں نے کہا کہ قوم! خدا ہی کی عبادت کرو اس کے سوا تمہارا کوئی معبود نہیں۔ تمہارے پاس تمہارے پروردگار کی طرف سے نشانی آچکی ہے تو تم ناپ تول پوری کیا کرو اور لوگوں کو چیزیں کم نہ دیا کرو۔ اور زمین میں اصلاح کے بعد خرابی نہ کرو۔ اگر تم صاحب ایمان ہو تو سمجھ لو کہ یہ بات تمہارے حق میں بہتر ہے",
    },
    words: [
      { id: '7:85:1', arabic: "وَإِلَىٰ", transliteration: "wa-ilā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And to", ur: "اور کو" } },
      { id: '7:85:2', arabic: "مَدْيَنَ", transliteration: "madyana", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Madyan", ur: "Madyan" } },
      { id: '7:85:3', arabic: "أَخَاهُمْ", transliteration: "akhāhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his brother", ur: "his brother" } },
      { id: '7:85:4', arabic: "شُعَيْبًۭا ۗ", transliteration: "shuʿayban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Shuaib", ur: "Shuaib" } },
      { id: '7:85:5', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:85:6', arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ" } },
      { id: '7:85:7', arabic: "ٱعْبُدُوا۟", transliteration: "uʿ'budū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Worship", ur: "عبادت" } },
      { id: '7:85:8', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:85:9', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:85:10', arabic: "لَكُم", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '7:85:11', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any", ur: "any" } },
      { id: '7:85:12', arabic: "إِلَـٰهٍ", transliteration: "ilāhin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "god", ur: "اللہ" } },
      { id: '7:85:13', arabic: "غَيْرُهُۥ ۖ", transliteration: "ghayruhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than Him", ur: "other than Him" } },
      { id: '7:85:14', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '7:85:15', arabic: "جَآءَتْكُم", transliteration: "jāatkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has came to you", ur: "has came کو تم" } },
      { id: '7:85:16', arabic: "بَيِّنَةٌۭ", transliteration: "bayyinatun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "a clear proof", ur: "a clear proof" } },
      { id: '7:85:17', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:85:18', arabic: "رَّبِّكُمْ ۖ", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:85:19', arabic: "فَأَوْفُوا۟", transliteration: "fa-awfū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So give full", ur: "So give full" } },
      { id: '7:85:20', arabic: "ٱلْكَيْلَ", transliteration: "l-kayla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] measure", ur: "[the] measure" } },
      { id: '7:85:21', arabic: "وَٱلْمِيزَانَ", transliteration: "wal-mīzāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the weight", ur: "اور the weight" } },
      { id: '7:85:22', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '7:85:23', arabic: "تَبْخَسُوا۟", transliteration: "tabkhasū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "deprive", ur: "deprive" } },
      { id: '7:85:24', arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] people", ur: "[the] لوگ" } },
      { id: '7:85:25', arabic: "أَشْيَآءَهُمْ", transliteration: "ashyāahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in their things", ur: "میں their things" } },
      { id: '7:85:26', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '7:85:27', arabic: "تُفْسِدُوا۟", transliteration: "tuf'sidū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "cause corruption", ur: "cause corruption" } },
      { id: '7:85:28', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:85:29', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '7:85:30', arabic: "بَعْدَ", transliteration: "baʿda", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '7:85:31', arabic: "إِصْلَـٰحِهَا ۚ", transliteration: "iṣ'lāḥihā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its reformation", ur: "its reformation" } },
      { id: '7:85:32', arabic: "ذَٰلِكُمْ", transliteration: "dhālikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '7:85:33', arabic: "خَيْرٌۭ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) better", ur: "(is) better" } },
      { id: '7:85:34', arabic: "لَّكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '7:85:35', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '7:85:36', arabic: "كُنتُم", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '7:85:37', arabic: "مُّؤْمِنِينَ", transliteration: "mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believers", ur: "مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'موصوف + صفت' },
        { from: 23, to: 24, label: 'فعل + فاعل' },
        { from: 28, to: 29, label: 'جار + مجرور' },
        { from: 36, to: 37, label: 'فعل + فاعل' }
      ],
    },
  },
  86: {
    text: "وَلَا تَقْعُدُوا۟ بِكُلِّ صِرَٰطٍۢ تُوعِدُونَ وَتَصُدُّونَ عَن سَبِيلِ ٱللَّهِ مَنْ ءَامَنَ بِهِۦ وَتَبْغُونَهَا عِوَجًۭا ۚ وَٱذْكُرُوٓا۟ إِذْ كُنتُمْ قَلِيلًۭا فَكَثَّرَكُمْ ۖ وَٱنظُرُوا۟ كَيْفَ كَانَ عَـٰقِبَةُ ٱلْمُفْسِدِينَ",
    translation: {
      en: "",
      ur: "اور ہر رستے پر مت بیٹھا کرو کہ جو شخص خدا پر ایمان نہیں لاتا ہے اسے تم ڈراتے اور راہ خدا سے روکتے اور اس میں کجی ڈھونڈتے ہو اور (اس وقت کو) یاد کرو جب تم تھوڑے سے تھے تو خدا نے تم کو جماعت کثیر کر دیا اور دیکھ لو کہ خرابی کرنے والوں کا انجام کیسا ہوا",
    },
    words: [
      { id: '7:86:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '7:86:2', arabic: "تَقْعُدُوا۟", transliteration: "taqʿudū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "sit", ur: "sit" } },
      { id: '7:86:3', arabic: "بِكُلِّ", transliteration: "bikulli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "on every", ur: "پر ہر" } },
      { id: '7:86:4', arabic: "صِرَٰطٍۢ", transliteration: "ṣirāṭin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "path", ur: "راستہ" } },
      { id: '7:86:5', arabic: "تُوعِدُونَ", transliteration: "tūʿidūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "threatening", ur: "threatening" } },
      { id: '7:86:6', arabic: "وَتَصُدُّونَ", transliteration: "wataṣuddūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and hindering", ur: "اور hindering" } },
      { id: '7:86:7', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:86:8', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '7:86:9', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '7:86:10', arabic: "مَنْ", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(those) who", ur: "(those) جو" } },
      { id: '7:86:11', arabic: "ءَامَنَ", transliteration: "āmana", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '7:86:12', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Him", ur: "میں Him" } },
      { id: '7:86:13', arabic: "وَتَبْغُونَهَا", transliteration: "watabghūnahā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and seeking (to make) it", ur: "اور seeking (کو make) it" } },
      { id: '7:86:14', arabic: "عِوَجًۭا ۚ", transliteration: "ʿiwajan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "crooked", ur: "crooked" } },
      { id: '7:86:15', arabic: "وَٱذْكُرُوٓا۟", transliteration: "wa-udh'kurū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And remember", ur: "اور remember" } },
      { id: '7:86:16', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '7:86:17', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you were", ur: "تم were" } },
      { id: '7:86:18', arabic: "قَلِيلًۭا", transliteration: "qalīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "few", ur: "few" } },
      { id: '7:86:19', arabic: "فَكَثَّرَكُمْ ۖ", transliteration: "fakatharakum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and He increased you", ur: "اور وہ increased تم" } },
      { id: '7:86:20', arabic: "وَٱنظُرُوا۟", transliteration: "wa-unẓurū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And see", ur: "اور دیکھنا" } },
      { id: '7:86:21', arabic: "كَيْفَ", transliteration: "kayfa", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "how", ur: "how" } },
      { id: '7:86:22', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '7:86:23', arabic: "عَـٰقِبَةُ", transliteration: "ʿāqibatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) end", ur: "(the) end" } },
      { id: '7:86:24', arabic: "ٱلْمُفْسِدِينَ", transliteration: "l-muf'sidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the corrupters", ur: "(of) the corrupters" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  87: {
    text: "وَإِن كَانَ طَآئِفَةٌۭ مِّنكُمْ ءَامَنُوا۟ بِٱلَّذِىٓ أُرْسِلْتُ بِهِۦ وَطَآئِفَةٌۭ لَّمْ يُؤْمِنُوا۟ فَٱصْبِرُوا۟ حَتَّىٰ يَحْكُمَ ٱللَّهُ بَيْنَنَا ۚ وَهُوَ خَيْرُ ٱلْحَـٰكِمِينَ",
    translation: {
      en: "",
      ur: "اور اگر تم میں سے ایک جماعت میری رسالت پر ایمان لے آئی ہے اور ایک جماعت ایمان نہیں لائی ہے۔ اور ایک جماعت ایمان نہیں لائی۔ تو صبر کیے رہو یہاں تک کہ خدا ہمارے تمہارے درمیان فیصلہ کر دے اور وہ سب سے بہتر فیصلہ کرنے والا ہے",
    },
    words: [
      { id: '7:87:1', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '7:87:2', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "(there) is", ur: "(there) is" } },
      { id: '7:87:3', arabic: "طَآئِفَةٌۭ", transliteration: "ṭāifatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a group", ur: "a group" } },
      { id: '7:87:4', arabic: "مِّنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '7:87:5', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(who has) believed", ur: "(جو has) ایمان لائے" } },
      { id: '7:87:6', arabic: "بِٱلَّذِىٓ", transliteration: "bi-alladhī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in that which", ur: "میں وہ جو" } },
      { id: '7:87:7', arabic: "أُرْسِلْتُ", transliteration: "ur'sil'tu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I have been sent", ur: "میں have been sent" } },
      { id: '7:87:8', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with [it]", ur: "ساتھ [it]" } },
      { id: '7:87:9', arabic: "وَطَآئِفَةٌۭ", transliteration: "waṭāifatun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a group", ur: "اور a group" } },
      { id: '7:87:10', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:87:11', arabic: "يُؤْمِنُوا۟", transliteration: "yu'minū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they believe", ur: "وہ لوگ ایمان لانا" } },
      { id: '7:87:12', arabic: "فَٱصْبِرُوا۟", transliteration: "fa-iṣ'birū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then be patient", ur: "پھر be patient" } },
      { id: '7:87:13', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '7:87:14', arabic: "يَحْكُمَ", transliteration: "yaḥkuma", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "judges", ur: "judges" } },
      { id: '7:87:15', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:87:16', arabic: "بَيْنَنَا ۚ", transliteration: "baynanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between us", ur: "درمیان us" } },
      { id: '7:87:17', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '7:87:18', arabic: "خَيْرُ", transliteration: "khayru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is the) Best", ur: "(is the) Best" } },
      { id: '7:87:19', arabic: "ٱلْحَـٰكِمِينَ", transliteration: "l-ḥākimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) [the] Judges", ur: "(of) [the] Judges" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  88: {
    text: "۞ قَالَ ٱلْمَلَأُ ٱلَّذِينَ ٱسْتَكْبَرُوا۟ مِن قَوْمِهِۦ لَنُخْرِجَنَّكَ يَـٰشُعَيْبُ وَٱلَّذِينَ ءَامَنُوا۟ مَعَكَ مِن قَرْيَتِنَآ أَوْ لَتَعُودُنَّ فِى مِلَّتِنَا ۚ قَالَ أَوَلَوْ كُنَّا كَـٰرِهِينَ",
    translation: {
      en: "",
      ur: "(تو) ان کی قوم میں جو لوگ سردار اور بڑے آدمی تھے، وہ کہنے لگے کہ شعیب! (یا تو) ہم تم کو اور جو لوگ تمہارے ساتھ ایمان لائے ہیں، ان کو اپنے شہر سے نکال دیں گے۔ یا تم ہمارے مذہب میں آجاؤ۔ انہوں نے کہا خواہ ہم (تمہارے دین سے) بیزار ہی ہوں (تو بھی؟)",
    },
    words: [
      { id: '7:88:1', arabic: "۞ قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Said", ur: "کہا" } },
      { id: '7:88:2', arabic: "ٱلْمَلَأُ", transliteration: "l-mala-u", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the chiefs", ur: "the chiefs" } },
      { id: '7:88:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those who", ur: "(of) جو لوگ" } },
      { id: '7:88:4', arabic: "ٱسْتَكْبَرُوا۟", transliteration: "is'takbarū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "were arrogant", ur: "were arrogant" } },
      { id: '7:88:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "among", ur: "among" } },
      { id: '7:88:6', arabic: "قَوْمِهِۦ", transliteration: "qawmihi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "his people", ur: "his لوگ" } },
      { id: '7:88:7', arabic: "لَنُخْرِجَنَّكَ", transliteration: "lanukh'rijannaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will surely drive you out", ur: "ہم will یقیناً drive تم out" } },
      { id: '7:88:8', arabic: "يَـٰشُعَيْبُ", transliteration: "yāshuʿaybu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O Shuaib", ur: "اے Shuaib" } },
      { id: '7:88:9', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '7:88:10', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(have) believed", ur: "(have) ایمان لائے" } },
      { id: '7:88:11', arabic: "مَعَكَ", transliteration: "maʿaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with you", ur: "ساتھ تم" } },
      { id: '7:88:12', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:88:13', arabic: "قَرْيَتِنَآ", transliteration: "qaryatinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our city", ur: "our city" } },
      { id: '7:88:14', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '7:88:15', arabic: "لَتَعُودُنَّ", transliteration: "lataʿūdunna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you must return", ur: "تم must return" } },
      { id: '7:88:16', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '7:88:17', arabic: "مِلَّتِنَا ۚ", transliteration: "millatinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our religion", ur: "our religion" } },
      { id: '7:88:18', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:88:19', arabic: "أَوَلَوْ", transliteration: "awalaw", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Even if", ur: "Even if" } },
      { id: '7:88:20', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we are", ur: "ہم are" } },
      { id: '7:88:21', arabic: "كَـٰرِهِينَ", transliteration: "kārihīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) ones who hate (it)", ur: "(the) ones جو hate (it)" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'فعل + فاعل' }
      ],
    },
  },
  89: {
    text: "قَدِ ٱفْتَرَيْنَا عَلَى ٱللَّهِ كَذِبًا إِنْ عُدْنَا فِى مِلَّتِكُم بَعْدَ إِذْ نَجَّىٰنَا ٱللَّهُ مِنْهَا ۚ وَمَا يَكُونُ لَنَآ أَن نَّعُودَ فِيهَآ إِلَّآ أَن يَشَآءَ ٱللَّهُ رَبُّنَا ۚ وَسِعَ رَبُّنَا كُلَّ شَىْءٍ عِلْمًا ۚ عَلَى ٱللَّهِ تَوَكَّلْنَا ۚ رَبَّنَا ٱفْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِٱلْحَقِّ وَأَنتَ خَيْرُ ٱلْفَـٰتِحِينَ",
    translation: {
      en: "",
      ur: "اگر ہم اس کے بعد کہ خدا ہمیں اس سے نجات بخش چکا ہے تمہارے مذہب میں لوٹ جائیں تو بےشک ہم نے خدا پر جھوٹ افتراء باندھا۔ اور ہمیں شایاں نہیں کہ ہم اس میں لوٹ جائیں ہاں خدا جو ہمارا پروردگار ہے وہ چاہے تو (ہم مجبور ہیں)۔ ہمارے پروردگار کا علم ہر چیز پر احاطہ کیے ہوئے ہے۔ ہمارا خدا ہی پر بھروسہ ہے۔ اے پروردگار ہم میں اور ہماری قوم میں انصاف کے ساتھ فیصلہ کردے اور تو سب سے بہتر فیصلہ کرنے والا ہے",
    },
    words: [
      { id: '7:89:1', arabic: "قَدِ", transliteration: "qadi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '7:89:2', arabic: "ٱفْتَرَيْنَا", transliteration: "if'taraynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we would have fabricated", ur: "ہم would have fabricated" } },
      { id: '7:89:3', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '7:89:4', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:89:5', arabic: "كَذِبًا", transliteration: "kadhiban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a lie", ur: "a lie" } },
      { id: '7:89:6', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '7:89:7', arabic: "عُدْنَا", transliteration: "ʿud'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we returned", ur: "ہم returned" } },
      { id: '7:89:8', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:89:9', arabic: "مِلَّتِكُم", transliteration: "millatikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your religion", ur: "your religion" } },
      { id: '7:89:10', arabic: "بَعْدَ", transliteration: "baʿda", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '7:89:11', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[when]", ur: "[when]" } },
      { id: '7:89:12', arabic: "نَجَّىٰنَا", transliteration: "najjānā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "saved us", ur: "saved us" } },
      { id: '7:89:13', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:89:14', arabic: "مِنْهَا ۚ", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '7:89:15', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '7:89:16', arabic: "يَكُونُ", transliteration: "yakūnu", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "it is", ur: "it is" } },
      { id: '7:89:17', arabic: "لَنَآ", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for us", ur: "for us" } },
      { id: '7:89:18', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:89:19', arabic: "نَّعُودَ", transliteration: "naʿūda", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we return", ur: "ہم return" } },
      { id: '7:89:20', arabic: "فِيهَآ", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '7:89:21', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:89:22', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:89:23', arabic: "يَشَآءَ", transliteration: "yashāa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "wills", ur: "wills" } },
      { id: '7:89:24', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah ", ur: "اللہ " } },
      { id: '7:89:25', arabic: "رَبُّنَا ۚ", transliteration: "rabbunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our Lord", ur: "our رب" } },
      { id: '7:89:26', arabic: "وَسِعَ", transliteration: "wasiʿa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "Encompasses", ur: "Encompasses" } },
      { id: '7:89:27', arabic: "رَبُّنَا", transliteration: "rabbunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Our Lord", ur: "(by) Our رب" } },
      { id: '7:89:28', arabic: "كُلَّ", transliteration: "kulla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '7:89:29', arabic: "شَىْءٍ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '7:89:30', arabic: "عِلْمًا ۚ", transliteration: "ʿil'man", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "(in) knowledge", ur: "(میں) knowledge" } },
      { id: '7:89:31', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "Upon", ur: "پر" } },
      { id: '7:89:32', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:89:33', arabic: "تَوَكَّلْنَا ۚ", transliteration: "tawakkalnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we put our trust", ur: "ہم put our trust" } },
      { id: '7:89:34', arabic: "رَبَّنَا", transliteration: "rabbanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Lord", ur: "Our رب" } },
      { id: '7:89:35', arabic: "ٱفْتَحْ", transliteration: "if'taḥ", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Decide", ur: "Decide" } },
      { id: '7:89:36', arabic: "بَيْنَنَا", transliteration: "baynanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between us", ur: "درمیان us" } },
      { id: '7:89:37', arabic: "وَبَيْنَ", transliteration: "wabayna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and between", ur: "اور درمیان" } },
      { id: '7:89:38', arabic: "قَوْمِنَا", transliteration: "qawminā", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "our people", ur: "our لوگ" } },
      { id: '7:89:39', arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in truth", ur: "میں سچ" } },
      { id: '7:89:40', arabic: "وَأَنتَ", transliteration: "wa-anta", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and You", ur: "اور تم" } },
      { id: '7:89:41', arabic: "خَيْرُ", transliteration: "khayru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are the) Best", ur: "(are the) Best" } },
      { id: '7:89:42', arabic: "ٱلْفَـٰتِحِينَ", transliteration: "l-fātiḥīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those who Decide", ur: "(of) جو لوگ Decide" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'فعل + فاعل' },
        { from: 29, to: 30, label: 'فعل + فاعل' },
        { from: 31, to: 32, label: 'جار + مجرور' },
        { from: 33, to: 34, label: 'فعل + فاعل' }
      ],
    },
  },
  90: {
    text: "وَقَالَ ٱلْمَلَأُ ٱلَّذِينَ كَفَرُوا۟ مِن قَوْمِهِۦ لَئِنِ ٱتَّبَعْتُمْ شُعَيْبًا إِنَّكُمْ إِذًۭا لَّخَـٰسِرُونَ",
    translation: {
      en: "",
      ur: "اور ان کی قوم میں سے سردار لوگ جو کافر تھے، کہنے لگے (بھائیو) اگر تم نے شعیب کی پیروی کی تو بےشک تم خسارے میں پڑگئے",
    },
    words: [
      { id: '7:90:1', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And said", ur: "اور کہا" } },
      { id: '7:90:2', arabic: "ٱلْمَلَأُ", transliteration: "l-mala-u", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the chiefs", ur: "the chiefs" } },
      { id: '7:90:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those who", ur: "(of) جو لوگ" } },
      { id: '7:90:4', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '7:90:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "among", ur: "among" } },
      { id: '7:90:6', arabic: "قَوْمِهِۦ", transliteration: "qawmihi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "his people", ur: "his لوگ" } },
      { id: '7:90:7', arabic: "لَئِنِ", transliteration: "la-ini", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '7:90:8', arabic: "ٱتَّبَعْتُمْ", transliteration: "ittabaʿtum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you follow", ur: "تم follow" } },
      { id: '7:90:9', arabic: "شُعَيْبًا", transliteration: "shuʿayban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Shuaib", ur: "Shuaib" } },
      { id: '7:90:10', arabic: "إِنَّكُمْ", transliteration: "innakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed, you", ur: "بیشک, تم" } },
      { id: '7:90:11', arabic: "إِذًۭا", transliteration: "idhan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '7:90:12', arabic: "لَّخَـٰسِرُونَ", transliteration: "lakhāsirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) certainly losers", ur: "(will be) certainly losers" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  91: {
    text: "فَأَخَذَتْهُمُ ٱلرَّجْفَةُ فَأَصْبَحُوا۟ فِى دَارِهِمْ جَـٰثِمِينَ",
    translation: {
      en: "",
      ur: "تو ان کو بھونچال نے آپکڑا اور وہ اپنے گھروں میں اوندھے پڑے رہ گئے",
    },
    words: [
      { id: '7:91:1', arabic: "فَأَخَذَتْهُمُ", transliteration: "fa-akhadhathumu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then seized them", ur: "پھر seized them" } },
      { id: '7:91:2', arabic: "ٱلرَّجْفَةُ", transliteration: "l-rajfatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the earthquake", ur: "the earthquake" } },
      { id: '7:91:3', arabic: "فَأَصْبَحُوا۟", transliteration: "fa-aṣbaḥū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then they became", ur: "پھر وہ لوگ became" } },
      { id: '7:91:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:91:5', arabic: "دَارِهِمْ", transliteration: "dārihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their home(s)", ur: "their home(s)" } },
      { id: '7:91:6', arabic: "جَـٰثِمِينَ", transliteration: "jāthimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fallen prone", ur: "fallen prone" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  92: {
    text: "ٱلَّذِينَ كَذَّبُوا۟ شُعَيْبًۭا كَأَن لَّمْ يَغْنَوْا۟ فِيهَا ۚ ٱلَّذِينَ كَذَّبُوا۟ شُعَيْبًۭا كَانُوا۟ هُمُ ٱلْخَـٰسِرِينَ",
    translation: {
      en: "",
      ur: "(یہ لوگ) جنہوں نے شعیب کی تکذیب کی تھی ایسے برباد ہوئے تھے کہ گویا وہ ان میں کبھی آباد ہی نہیں ہوئے تھے (غرض) جنہوں نے شعیب کو جھٹلایا وہ خسارے میں پڑگئے",
    },
    words: [
      { id: '7:92:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '7:92:2', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '7:92:3', arabic: "شُعَيْبًۭا", transliteration: "shuʿayban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Shuaib", ur: "Shuaib" } },
      { id: '7:92:4', arabic: "كَأَن", transliteration: "ka-an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(became) as if", ur: "(became) as if" } },
      { id: '7:92:5', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:92:6', arabic: "يَغْنَوْا۟", transliteration: "yaghnaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they (had) lived", ur: "وہ لوگ (had) lived" } },
      { id: '7:92:7', arabic: "فِيهَا ۚ", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '7:92:8', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '7:92:9', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '7:92:10', arabic: "شُعَيْبًۭا", transliteration: "shuʿayban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Shuaib", ur: "Shuaib" } },
      { id: '7:92:11', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they were", ur: "وہ لوگ were" } },
      { id: '7:92:12', arabic: "هُمُ", transliteration: "humu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "them", ur: "them" } },
      { id: '7:92:13', arabic: "ٱلْخَـٰسِرِينَ", transliteration: "l-khāsirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the losers", ur: "the losers" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  93: {
    text: "فَتَوَلَّىٰ عَنْهُمْ وَقَالَ يَـٰقَوْمِ لَقَدْ أَبْلَغْتُكُمْ رِسَـٰلَـٰتِ رَبِّى وَنَصَحْتُ لَكُمْ ۖ فَكَيْفَ ءَاسَىٰ عَلَىٰ قَوْمٍۢ كَـٰفِرِينَ",
    translation: {
      en: "",
      ur: "تو شعیب ان میں سے نکل آئے اور کہا کہ بھائیو میں نے تم کو اپنے پروردگار کے پیغام پہنچا دیئے ہیں اور تمہاری خیرخواہی کی تھی۔ تو میں کافروں پر (عذاب نازل ہونے سے) رنج وغم کیوں کروں",
    },
    words: [
      { id: '7:93:1', arabic: "فَتَوَلَّىٰ", transliteration: "fatawallā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So he turned away", ur: "So وہ turned away" } },
      { id: '7:93:2', arabic: "عَنْهُمْ", transliteration: "ʿanhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '7:93:3', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and said", ur: "اور کہا" } },
      { id: '7:93:4', arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ" } },
      { id: '7:93:5', arabic: "لَقَدْ", transliteration: "laqad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '7:93:6', arabic: "أَبْلَغْتُكُمْ", transliteration: "ablaghtukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I (have) conveyed to you", ur: "میں (have) conveyed کو تم" } },
      { id: '7:93:7', arabic: "رِسَـٰلَـٰتِ", transliteration: "risālāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Messages", ur: "(the) Messages" } },
      { id: '7:93:8', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) my Lord", ur: "(of) my رب" } },
      { id: '7:93:9', arabic: "وَنَصَحْتُ", transliteration: "wanaṣaḥtu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and advised", ur: "اور advised" } },
      { id: '7:93:10', arabic: "لَكُمْ ۖ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[to] you", ur: "[کو] تم" } },
      { id: '7:93:11', arabic: "فَكَيْفَ", transliteration: "fakayfa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So how could", ur: "So how could" } },
      { id: '7:93:12', arabic: "ءَاسَىٰ", transliteration: "āsā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I grieve", ur: "میں grieve" } },
      { id: '7:93:13', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '7:93:14', arabic: "قَوْمٍۢ", transliteration: "qawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a people", ur: "a لوگ" } },
      { id: '7:93:15', arabic: "كَـٰفِرِينَ", transliteration: "kāfirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(who are) disbelievers", ur: "(جو are) کافر" } }
    ],
    structure: {
      relationships: [
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  94: {
    text: "وَمَآ أَرْسَلْنَا فِى قَرْيَةٍۢ مِّن نَّبِىٍّ إِلَّآ أَخَذْنَآ أَهْلَهَا بِٱلْبَأْسَآءِ وَٱلضَّرَّآءِ لَعَلَّهُمْ يَضَّرَّعُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے کسی شہر میں کوئی پیغمبر نہیں بھیجا مگر وہاں کے رہنے والوں کو (جو ایمان نہ لائے) دکھوں اور مصیبتوں میں مبتلا کیا تاکہ وہ عاجزی اور زاری کریں",
    },
    words: [
      { id: '7:94:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '7:94:2', arabic: "أَرْسَلْنَا", transliteration: "arsalnā", pos: ['V'], posLabel: 'V', root: "ر س ل", meaning: { en: "We sent", ur: "ہم sent" } },
      { id: '7:94:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:94:4', arabic: "قَرْيَةٍۢ", transliteration: "qaryatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a city", ur: "a city" } },
      { id: '7:94:5', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any", ur: "any" } },
      { id: '7:94:6', arabic: "نَّبِىٍّ", transliteration: "nabiyyin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Prophet", ur: "نبی" } },
      { id: '7:94:7', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:94:8', arabic: "أَخَذْنَآ", transliteration: "akhadhnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We seized", ur: "ہم seized" } },
      { id: '7:94:9', arabic: "أَهْلَهَا", transliteration: "ahlahā", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "its people", ur: "its لوگ" } },
      { id: '7:94:10', arabic: "بِٱلْبَأْسَآءِ", transliteration: "bil-basāi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with adversity", ur: "ساتھ adversity" } },
      { id: '7:94:11', arabic: "وَٱلضَّرَّآءِ", transliteration: "wal-ḍarāi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and hardship", ur: "اور hardship" } },
      { id: '7:94:12', arabic: "لَعَلَّهُمْ", transliteration: "laʿallahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that they may", ur: "so وہ وہ لوگ may" } },
      { id: '7:94:13', arabic: "يَضَّرَّعُونَ", transliteration: "yaḍḍarraʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(become) humble", ur: "(become) humble" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  95: {
    text: "ثُمَّ بَدَّلْنَا مَكَانَ ٱلسَّيِّئَةِ ٱلْحَسَنَةَ حَتَّىٰ عَفَوا۟ وَّقَالُوا۟ قَدْ مَسَّ ءَابَآءَنَا ٱلضَّرَّآءُ وَٱلسَّرَّآءُ فَأَخَذْنَـٰهُم بَغْتَةًۭ وَهُمْ لَا يَشْعُرُونَ",
    translation: {
      en: "",
      ur: "پھر ہم نے تکلیف کو آسودگی سے بدل دیا یہاں تک کہ (مال واولاد میں) زیادہ ہوگئے تو کہنے لگے کہ اس طرح کا رنج وراحت ہمارے بڑوں کو بھی پہنچتا رہا ہے تو ہم نے ان کو ناگہاں پکڑلیا اور وہ (اپنے حال میں) بےخبر تھے",
    },
    words: [
      { id: '7:95:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '7:95:2', arabic: "بَدَّلْنَا", transliteration: "baddalnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We changed", ur: "ہم changed" } },
      { id: '7:95:3', arabic: "مَكَانَ", transliteration: "makāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "(in) place", ur: "(میں) place" } },
      { id: '7:95:4', arabic: "ٱلسَّيِّئَةِ", transliteration: "l-sayi-ati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the bad", ur: "(of) the bad" } },
      { id: '7:95:5', arabic: "ٱلْحَسَنَةَ", transliteration: "l-ḥasanata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the good", ur: "the اچھا" } },
      { id: '7:95:6', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '7:95:7', arabic: "عَفَوا۟", transliteration: "ʿafaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they increased", ur: "وہ لوگ increased" } },
      { id: '7:95:8', arabic: "وَّقَالُوا۟", transliteration: "waqālū", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "and said", ur: "اور کہا" } },
      { id: '7:95:9', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '7:95:10', arabic: "مَسَّ", transliteration: "massa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(had) touched", ur: "(had) touched" } },
      { id: '7:95:11', arabic: "ءَابَآءَنَا", transliteration: "ābāanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our forefathers", ur: "our forefathers" } },
      { id: '7:95:12', arabic: "ٱلضَّرَّآءُ", transliteration: "l-ḍarāu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the adversity", ur: "the adversity" } },
      { id: '7:95:13', arabic: "وَٱلسَّرَّآءُ", transliteration: "wal-sarāu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the ease", ur: "اور the ease" } },
      { id: '7:95:14', arabic: "فَأَخَذْنَـٰهُم", transliteration: "fa-akhadhnāhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So We seized them", ur: "So ہم seized them" } },
      { id: '7:95:15', arabic: "بَغْتَةًۭ", transliteration: "baghtatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "suddenly", ur: "suddenly" } },
      { id: '7:95:16', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while they", ur: "while وہ لوگ" } },
      { id: '7:95:17', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(did) not", ur: "(did) نہیں" } },
      { id: '7:95:18', arabic: "يَشْعُرُونَ", transliteration: "yashʿurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "perceive", ur: "perceive" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'نفی + فعل' }
      ],
    },
  },
  96: {
    text: "وَلَوْ أَنَّ أَهْلَ ٱلْقُرَىٰٓ ءَامَنُوا۟ وَٱتَّقَوْا۟ لَفَتَحْنَا عَلَيْهِم بَرَكَـٰتٍۢ مِّنَ ٱلسَّمَآءِ وَٱلْأَرْضِ وَلَـٰكِن كَذَّبُوا۟ فَأَخَذْنَـٰهُم بِمَا كَانُوا۟ يَكْسِبُونَ",
    translation: {
      en: "",
      ur: "اگر ان بستیوں کے لوگ ایمان لے آتے اور پرہیزگار ہوجاتے۔ تو ہم ان پر آسمان اور زمین کی برکات (کے دروازے) کھول دیتے مگر انہوں نے تو تکذیب کی۔ سو ان کے اعمال کی سزا میں ہم نے ان کو پکڑ لیا",
    },
    words: [
      { id: '7:96:1', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '7:96:2', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '7:96:3', arabic: "أَهْلَ", transliteration: "ahla", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "people", ur: "لوگ" } },
      { id: '7:96:4', arabic: "ٱلْقُرَىٰٓ", transliteration: "l-qurā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the cities", ur: "(of) the cities" } },
      { id: '7:96:5', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(had) believed", ur: "(had) ایمان لائے" } },
      { id: '7:96:6', arabic: "وَٱتَّقَوْا۟", transliteration: "wa-ittaqaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and feared Allah", ur: "اور feared اللہ" } },
      { id: '7:96:7', arabic: "لَفَتَحْنَا", transliteration: "lafataḥnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely We (would have) opened", ur: "یقیناً ہم (would have) opened" } },
      { id: '7:96:8', arabic: "عَلَيْهِم", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon them", ur: "پر them" } },
      { id: '7:96:9', arabic: "بَرَكَـٰتٍۢ", transliteration: "barakātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "blessings", ur: "blessings" } },
      { id: '7:96:10', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:96:11', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heaven", ur: "the آسمان" } },
      { id: '7:96:12', arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '7:96:13', arabic: "وَلَـٰكِن", transliteration: "walākin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '7:96:14', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they denied", ur: "وہ لوگ denied" } },
      { id: '7:96:15', arabic: "فَأَخَذْنَـٰهُم", transliteration: "fa-akhadhnāhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So We seized them", ur: "So ہم seized them" } },
      { id: '7:96:16', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '7:96:17', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '7:96:18', arabic: "يَكْسِبُونَ", transliteration: "yaksibūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "earn", ur: "earn" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  97: {
    text: "أَفَأَمِنَ أَهْلُ ٱلْقُرَىٰٓ أَن يَأْتِيَهُم بَأْسُنَا بَيَـٰتًۭا وَهُمْ نَآئِمُونَ",
    translation: {
      en: "",
      ur: "کیا بستیوں کے رہنے والے اس سے بےخوف ہیں کہ ان پر ہمارا عذاب رات کو واقع ہو اور وہ (بےخبر) سو رہے ہوں",
    },
    words: [
      { id: '7:97:1', arabic: "أَفَأَمِنَ", transliteration: "afa-amina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then did feel secure", ur: "پھر did feel secure" } },
      { id: '7:97:2', arabic: "أَهْلُ", transliteration: "ahlu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) people", ur: "(the) لوگ" } },
      { id: '7:97:3', arabic: "ٱلْقُرَىٰٓ", transliteration: "l-qurā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the cities", ur: "(of) the cities" } },
      { id: '7:97:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:97:5', arabic: "يَأْتِيَهُم", transliteration: "yatiyahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "comes to them", ur: "comes کو them" } },
      { id: '7:97:6', arabic: "بَأْسُنَا", transliteration: "basunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our punishment", ur: "Our عذاب" } },
      { id: '7:97:7', arabic: "بَيَـٰتًۭا", transliteration: "bayātan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(at) night", ur: "(at) رات" } },
      { id: '7:97:8', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while they", ur: "while وہ لوگ" } },
      { id: '7:97:9', arabic: "نَآئِمُونَ", transliteration: "nāimūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(were) asleep", ur: "(were) asleep" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  98: {
    text: "أَوَأَمِنَ أَهْلُ ٱلْقُرَىٰٓ أَن يَأْتِيَهُم بَأْسُنَا ضُحًۭى وَهُمْ يَلْعَبُونَ",
    translation: {
      en: "",
      ur: "اور کیا اہلِ شہر اس سے نڈر ہیں کہ ان پر ہمارا عذاب دن چڑھے آ نازل ہو اور وہ کھیل رہے ہوں",
    },
    words: [
      { id: '7:98:1', arabic: "أَوَأَمِنَ", transliteration: "awa-amina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Or felt secure", ur: "یا felt secure" } },
      { id: '7:98:2', arabic: "أَهْلُ", transliteration: "ahlu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) people", ur: "(the) لوگ" } },
      { id: '7:98:3', arabic: "ٱلْقُرَىٰٓ", transliteration: "l-qurā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the cities", ur: "(of) the cities" } },
      { id: '7:98:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:98:5', arabic: "يَأْتِيَهُم", transliteration: "yatiyahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "comes to them", ur: "comes کو them" } },
      { id: '7:98:6', arabic: "بَأْسُنَا", transliteration: "basunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our punishment", ur: "Our عذاب" } },
      { id: '7:98:7', arabic: "ضُحًۭى", transliteration: "ḍuḥan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) daylight", ur: "(میں) daylight" } },
      { id: '7:98:8', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while they", ur: "while وہ لوگ" } },
      { id: '7:98:9', arabic: "يَلْعَبُونَ", transliteration: "yalʿabūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(were) playing", ur: "(were) playing" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  99: {
    text: "أَفَأَمِنُوا۟ مَكْرَ ٱللَّهِ ۚ فَلَا يَأْمَنُ مَكْرَ ٱللَّهِ إِلَّا ٱلْقَوْمُ ٱلْخَـٰسِرُونَ",
    translation: {
      en: "",
      ur: "کیا یہ لوگ خدا کے داؤ کا ڈر نہیں رکھتے (سن لو کہ) خدا کے داؤ سے وہی لوگ نڈر ہوتے ہیں جو خسارہ پانے والے ہیں",
    },
    words: [
      { id: '7:99:1', arabic: "أَفَأَمِنُوا۟", transliteration: "afa-aminū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then did they feel secure", ur: "پھر did وہ لوگ feel secure" } },
      { id: '7:99:2', arabic: "مَكْرَ", transliteration: "makra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(from the) plan", ur: "(سے the) plan" } },
      { id: '7:99:3', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '7:99:4', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But not", ur: "لیکن نہیں" } },
      { id: '7:99:5', arabic: "يَأْمَنُ", transliteration: "yamanu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "feel secure", ur: "feel secure" } },
      { id: '7:99:6', arabic: "مَكْرَ", transliteration: "makra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(from the) plan", ur: "(سے the) plan" } },
      { id: '7:99:7', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '7:99:8', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:99:9', arabic: "ٱلْقَوْمُ", transliteration: "l-qawmu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '7:99:10', arabic: "ٱلْخَـٰسِرُونَ", transliteration: "l-khāsirūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(who are) the losers", ur: "(جو are) the losers" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  100: {
    text: "أَوَلَمْ يَهْدِ لِلَّذِينَ يَرِثُونَ ٱلْأَرْضَ مِنۢ بَعْدِ أَهْلِهَآ أَن لَّوْ نَشَآءُ أَصَبْنَـٰهُم بِذُنُوبِهِمْ ۚ وَنَطْبَعُ عَلَىٰ قُلُوبِهِمْ فَهُمْ لَا يَسْمَعُونَ",
    translation: {
      en: "",
      ur: "کیا ان لوگوں کو جو اہلِ زمین کے (مرجانے کے) بعد زمین کے مالک ہوتے ہیں، یہ امر موجب ہدایت نہیں ہوا کہ اگر ہم چاہیں تو ان کے گناہوں کے سبب ان پر مصیبت ڈال دیں۔ اور ان کے دلوں پر مہر لگادیں کہ کچھ سن ہی نہ سکیں",
    },
    words: [
      { id: '7:100:1', arabic: "أَوَلَمْ", transliteration: "awalam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Would it not", ur: "Would it نہیں" } },
      { id: '7:100:2', arabic: "يَهْدِ", transliteration: "yahdi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "guide", ur: "guide" } },
      { id: '7:100:3', arabic: "لِلَّذِينَ", transliteration: "lilladhīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[for] those who", ur: "[for] جو لوگ" } },
      { id: '7:100:4', arabic: "يَرِثُونَ", transliteration: "yarithūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "inherit", ur: "inherit" } },
      { id: '7:100:5', arabic: "ٱلْأَرْضَ", transliteration: "l-arḍa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the land", ur: "the land" } },
      { id: '7:100:6', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:100:7', arabic: "بَعْدِ", transliteration: "baʿdi", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '7:100:8', arabic: "أَهْلِهَآ", transliteration: "ahlihā", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "its people", ur: "its لوگ" } },
      { id: '7:100:9', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:100:10', arabic: "لَّوْ", transliteration: "law", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '7:100:11', arabic: "نَشَآءُ", transliteration: "nashāu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We willed", ur: "ہم willed" } },
      { id: '7:100:12', arabic: "أَصَبْنَـٰهُم", transliteration: "aṣabnāhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We (could) afflict them", ur: "ہم (could) afflict them" } },
      { id: '7:100:13', arabic: "بِذُنُوبِهِمْ ۚ", transliteration: "bidhunūbihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for their sins", ur: "for their sins" } },
      { id: '7:100:14', arabic: "وَنَطْبَعُ", transliteration: "wanaṭbaʿu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We put a seal", ur: "اور ہم put a seal" } },
      { id: '7:100:15', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '7:100:16', arabic: "قُلُوبِهِمْ", transliteration: "qulūbihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their hearts", ur: "their hearts" } },
      { id: '7:100:17', arabic: "فَهُمْ", transliteration: "fahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so they", ur: "so وہ لوگ" } },
      { id: '7:100:18', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '7:100:19', arabic: "يَسْمَعُونَ", transliteration: "yasmaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "hear", ur: "سننا" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'نفی + فعل' }
      ],
    },
  },
  101: {
    text: "تِلْكَ ٱلْقُرَىٰ نَقُصُّ عَلَيْكَ مِنْ أَنۢبَآئِهَا ۚ وَلَقَدْ جَآءَتْهُمْ رُسُلُهُم بِٱلْبَيِّنَـٰتِ فَمَا كَانُوا۟ لِيُؤْمِنُوا۟ بِمَا كَذَّبُوا۟ مِن قَبْلُ ۚ كَذَٰلِكَ يَطْبَعُ ٱللَّهُ عَلَىٰ قُلُوبِ ٱلْكَـٰفِرِينَ",
    translation: {
      en: "",
      ur: "یہ بستیاں ہیں جن کے کچھ حالات ہم تم کو سناتے ہیں۔ اور ان کے پاس ان کے پیغمبر نشانیاں لے کر آئے۔ مگر وہ ایسے نہیں تھے کہ جس چیز کو پہلے جھٹلا چکے ہوں اسے مان لیں اسی طرح خدا کافروں کے دلوں پر مہر لگا دیتا ہے",
    },
    words: [
      { id: '7:101:1', arabic: "تِلْكَ", transliteration: "til'ka", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "These", ur: "These" } },
      { id: '7:101:2', arabic: "ٱلْقُرَىٰ", transliteration: "l-qurā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(were) the cities ", ur: "(were) the cities " } },
      { id: '7:101:3', arabic: "نَقُصُّ", transliteration: "naquṣṣu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We relate", ur: "ہم relate" } },
      { id: '7:101:4', arabic: "عَلَيْكَ", transliteration: "ʿalayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '7:101:5', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:101:6', arabic: "أَنۢبَآئِهَا ۚ", transliteration: "anbāihā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their news", ur: "their news" } },
      { id: '7:101:7', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And certainly", ur: "اور certainly" } },
      { id: '7:101:8', arabic: "جَآءَتْهُمْ", transliteration: "jāathum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came to them", ur: "came کو them" } },
      { id: '7:101:9', arabic: "رُسُلُهُم", transliteration: "rusuluhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their Messengers", ur: "their Messengers" } },
      { id: '7:101:10', arabic: "بِٱلْبَيِّنَـٰتِ", transliteration: "bil-bayināti", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with clear proofs", ur: "ساتھ clear proofs" } },
      { id: '7:101:11', arabic: "فَمَا", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "but not", ur: "لیکن نہیں" } },
      { id: '7:101:12', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they were", ur: "وہ لوگ were" } },
      { id: '7:101:13', arabic: "لِيُؤْمِنُوا۟", transliteration: "liyu'minū", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to believe", ur: "کو ایمان لانا" } },
      { id: '7:101:14', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in what", ur: "میں کیا" } },
      { id: '7:101:15', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they (had) denied", ur: "وہ لوگ (had) denied" } },
      { id: '7:101:16', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:101:17', arabic: "قَبْلُ ۚ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '7:101:18', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '7:101:19', arabic: "يَطْبَعُ", transliteration: "yaṭbaʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(has been) put a seal", ur: "(has been) put a seal" } },
      { id: '7:101:20', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '7:101:21', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '7:101:22', arabic: "قُلُوبِ", transliteration: "qulūbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) hearts", ur: "(the) hearts" } },
      { id: '7:101:23', arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the disbelievers", ur: "(of) the کافر" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'جار + مجرور' },
        { from: 22, to: 23, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  102: {
    text: "وَمَا وَجَدْنَا لِأَكْثَرِهِم مِّنْ عَهْدٍۢ ۖ وَإِن وَجَدْنَآ أَكْثَرَهُمْ لَفَـٰسِقِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے ان میں سے اکثروں میں (عہد کا نباہ) نہیں دیکھا۔ اور ان میں اکثروں کو (دیکھا تو) بدکار ہی دیکھا",
    },
    words: [
      { id: '7:102:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '7:102:2', arabic: "وَجَدْنَا", transliteration: "wajadnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "We found", ur: "ہم found" } },
      { id: '7:102:3', arabic: "لِأَكْثَرِهِم", transliteration: "li-aktharihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for most of them", ur: "for most of them" } },
      { id: '7:102:4', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any", ur: "any" } },
      { id: '7:102:5', arabic: "عَهْدٍۢ ۖ", transliteration: "ʿahdin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "covenant", ur: "covenant" } },
      { id: '7:102:6', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But", ur: "لیکن" } },
      { id: '7:102:7', arabic: "وَجَدْنَآ", transliteration: "wajadnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "We found", ur: "ہم found" } },
      { id: '7:102:8', arabic: "أَكْثَرَهُمْ", transliteration: "aktharahum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '7:102:9', arabic: "لَفَـٰسِقِينَ", transliteration: "lafāsiqīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "certainly, defiantly disobedient", ur: "certainly, defiantly disobedient" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  103: {
    text: "ثُمَّ بَعَثْنَا مِنۢ بَعْدِهِم مُّوسَىٰ بِـَٔايَـٰتِنَآ إِلَىٰ فِرْعَوْنَ وَمَلَإِي۟هِۦ فَظَلَمُوا۟ بِهَا ۖ فَٱنظُرْ كَيْفَ كَانَ عَـٰقِبَةُ ٱلْمُفْسِدِينَ",
    translation: {
      en: "",
      ur: "پھر ان (پیغمبروں) کے بعد ہم نے موسیٰ کو نشانیاں دے کر فرعون اور اس کے اعیانِ سلطنت کے پاس بھیجا تو انہوں نے ان کے ساتھ کفر کیا۔ سو دیکھ لو کہ خرابی کرنے والوں کا انجام کیا ہوا",
    },
    words: [
      { id: '7:103:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '7:103:2', arabic: "بَعَثْنَا", transliteration: "baʿathnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We sent", ur: "ہم sent" } },
      { id: '7:103:3', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:103:4', arabic: "بَعْدِهِم", transliteration: "baʿdihim", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after them", ur: "بعد them" } },
      { id: '7:103:5', arabic: "مُّوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Musa", ur: "Musa" } },
      { id: '7:103:6', arabic: "بِـَٔايَـٰتِنَآ", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Our Signs", ur: "ساتھ Our نشانیاں" } },
      { id: '7:103:7', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '7:103:8', arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Firaun", ur: "Firaun" } },
      { id: '7:103:9', arabic: "وَمَلَإِي۟هِۦ", transliteration: "wamala-ihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and his chiefs", ur: "اور his chiefs" } },
      { id: '7:103:10', arabic: "فَظَلَمُوا۟", transliteration: "faẓalamū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ظ ل م", meaning: { en: "But they were unjust", ur: "لیکن وہ لوگ were unjust" } },
      { id: '7:103:11', arabic: "بِهَا ۖ", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '7:103:12', arabic: "فَٱنظُرْ", transliteration: "fa-unẓur", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So see", ur: "So دیکھنا" } },
      { id: '7:103:13', arabic: "كَيْفَ", transliteration: "kayfa", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "how", ur: "how" } },
      { id: '7:103:14', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '7:103:15', arabic: "عَـٰقِبَةُ", transliteration: "ʿāqibatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) end", ur: "(the) end" } },
      { id: '7:103:16', arabic: "ٱلْمُفْسِدِينَ", transliteration: "l-muf'sidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the corrupters", ur: "(of) the corrupters" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  104: {
    text: "وَقَالَ مُوسَىٰ يَـٰفِرْعَوْنُ إِنِّى رَسُولٌۭ مِّن رَّبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "اور موسیٰ نے کہا کہ اے فرعون میں رب العالمین کا پیغمبر ہوں",
    },
    words: [
      { id: '7:104:1', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And said", ur: "اور کہا" } },
      { id: '7:104:2', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '7:104:3', arabic: "يَـٰفِرْعَوْنُ", transliteration: "yāfir'ʿawnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O Firaun", ur: "اے Firaun" } },
      { id: '7:104:4', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I am", ur: "بیشک, میں am" } },
      { id: '7:104:5', arabic: "رَسُولٌۭ", transliteration: "rasūlun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Messenger", ur: "a رسول" } },
      { id: '7:104:6', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:104:7', arabic: "رَّبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Lord", ur: "(the) رب" } },
      { id: '7:104:8', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  105: {
    text: "حَقِيقٌ عَلَىٰٓ أَن لَّآ أَقُولَ عَلَى ٱللَّهِ إِلَّا ٱلْحَقَّ ۚ قَدْ جِئْتُكُم بِبَيِّنَةٍۢ مِّن رَّبِّكُمْ فَأَرْسِلْ مَعِىَ بَنِىٓ إِسْرَٰٓءِيلَ",
    translation: {
      en: "",
      ur: "مجھ پر واجب ہے کہ خدا کی طرف سے جو کچھ کہوں سچ ہی کہوں۔ میں تمہارے پاس تمہارے پروردگار کی طرف سے نشانی لے کر آیا ہوں۔ سو بنی اسرائیل کو میرے ساتھ جانے کی رخصت دے دیجیے",
    },
    words: [
      { id: '7:105:1', arabic: "حَقِيقٌ", transliteration: "ḥaqīqun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Obligated", ur: "Obligated" } },
      { id: '7:105:2', arabic: "عَلَىٰٓ", transliteration: "ʿalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '7:105:3', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:105:4', arabic: "لَّآ", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:105:5', arabic: "أَقُولَ", transliteration: "aqūla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I say", ur: "میں کہو" } },
      { id: '7:105:6', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "about", ur: "about" } },
      { id: '7:105:7', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:105:8', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:105:9', arabic: "ٱلْحَقَّ ۚ", transliteration: "l-ḥaqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '7:105:10', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '7:105:11', arabic: "جِئْتُكُم", transliteration: "ji'tukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I (have) come to you", ur: "میں (have) come کو تم" } },
      { id: '7:105:12', arabic: "بِبَيِّنَةٍۢ", transliteration: "bibayyinatin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with a clear Sign", ur: "ساتھ a clear نشانی" } },
      { id: '7:105:13', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:105:14', arabic: "رَّبِّكُمْ", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:105:15', arabic: "فَأَرْسِلْ", transliteration: "fa-arsil", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so send", ur: "so send" } },
      { id: '7:105:16', arabic: "مَعِىَ", transliteration: "maʿiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with me", ur: "ساتھ me" } },
      { id: '7:105:17', arabic: "بَنِىٓ", transliteration: "banī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Children", ur: "(the) اولاد" } },
      { id: '7:105:18', arabic: "إِسْرَٰٓءِيلَ", transliteration: "is'rāīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Israel", ur: "(of) Israel" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  106: {
    text: "قَالَ إِن كُنتَ جِئْتَ بِـَٔايَةٍۢ فَأْتِ بِهَآ إِن كُنتَ مِنَ ٱلصَّـٰدِقِينَ",
    translation: {
      en: "",
      ur: "فرعون نے کہا اگر تم نشانی لے کر آئے ہو تو اگر سچے ہو تو لاؤ (دکھاؤ)",
    },
    words: [
      { id: '7:106:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:106:2', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '7:106:3', arabic: "كُنتَ", transliteration: "kunta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have", ur: "تم have" } },
      { id: '7:106:4', arabic: "جِئْتَ", transliteration: "ji'ta", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "come", ur: "come" } },
      { id: '7:106:5', arabic: "بِـَٔايَةٍۢ", transliteration: "biāyatin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with a Sign", ur: "ساتھ a نشانی" } },
      { id: '7:106:6', arabic: "فَأْتِ", transliteration: "fati", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then bring", ur: "پھر bring" } },
      { id: '7:106:7', arabic: "بِهَآ", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "it", ur: "it" } },
      { id: '7:106:8', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '7:106:9', arabic: "كُنتَ", transliteration: "kunta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '7:106:10', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:106:11', arabic: "ٱلصَّـٰدِقِينَ", transliteration: "l-ṣādiqīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the truthful", ur: "the truthful" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  107: {
    text: "فَأَلْقَىٰ عَصَاهُ فَإِذَا هِىَ ثُعْبَانٌۭ مُّبِينٌۭ",
    translation: {
      en: "",
      ur: "موسیٰ نے اپنی لاٹھی (زمین پر) ڈال دی تو وہ اسی وقت صریح اژدھا (ہوگیا)",
    },
    words: [
      { id: '7:107:1', arabic: "فَأَلْقَىٰ", transliteration: "fa-alqā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So he threw", ur: "So وہ threw" } },
      { id: '7:107:2', arabic: "عَصَاهُ", transliteration: "ʿaṣāhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his staff", ur: "his staff" } },
      { id: '7:107:3', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and suddenly", ur: "اور suddenly" } },
      { id: '7:107:4', arabic: "هِىَ", transliteration: "hiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it", ur: "it" } },
      { id: '7:107:5', arabic: "ثُعْبَانٌۭ", transliteration: "thuʿ'bānun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) a serpent", ur: "(was) a serpent" } },
      { id: '7:107:6', arabic: "مُّبِينٌۭ", transliteration: "mubīnun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "manifest", ur: "manifest" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  108: {
    text: "وَنَزَعَ يَدَهُۥ فَإِذَا هِىَ بَيْضَآءُ لِلنَّـٰظِرِينَ",
    translation: {
      en: "",
      ur: "اور اپنا ہاتھ باہر نکالا تو اسی دم دیکھنے والوں کی نگاہوں میں سفید براق (تھا)",
    },
    words: [
      { id: '7:108:1', arabic: "وَنَزَعَ", transliteration: "wanazaʿa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And he drew out", ur: "اور وہ drew out" } },
      { id: '7:108:2', arabic: "يَدَهُۥ", transliteration: "yadahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "his hand", ur: "his hand" } },
      { id: '7:108:3', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and suddenly", ur: "اور suddenly" } },
      { id: '7:108:4', arabic: "هِىَ", transliteration: "hiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it", ur: "it" } },
      { id: '7:108:5', arabic: "بَيْضَآءُ", transliteration: "bayḍāu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) white", ur: "(was) white" } },
      { id: '7:108:6', arabic: "لِلنَّـٰظِرِينَ", transliteration: "lilnnāẓirīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the observers", ur: "for the observers" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  109: {
    text: "قَالَ ٱلْمَلَأُ مِن قَوْمِ فِرْعَوْنَ إِنَّ هَـٰذَا لَسَـٰحِرٌ عَلِيمٌۭ",
    translation: {
      en: "",
      ur: "تو قوم فرعون میں جو سردار تھے وہ کہنے لگے کہ یہ بڑا علامہ جادوگر ہے",
    },
    words: [
      { id: '7:109:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Said", ur: "کہا" } },
      { id: '7:109:2', arabic: "ٱلْمَلَأُ", transliteration: "l-mala-u", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the chiefs", ur: "the chiefs" } },
      { id: '7:109:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:109:4', arabic: "قَوْمِ", transliteration: "qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "(the) people", ur: "(the) لوگ" } },
      { id: '7:109:5', arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Firaun", ur: "(of) Firaun" } },
      { id: '7:109:6', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:109:7', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '7:109:8', arabic: "لَسَـٰحِرٌ", transliteration: "lasāḥirun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) surely a magician ", ur: "(is) یقیناً a magician " } },
      { id: '7:109:9', arabic: "عَلِيمٌۭ", transliteration: "ʿalīmun", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "learned", ur: "learned" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  110: {
    text: "يُرِيدُ أَن يُخْرِجَكُم مِّنْ أَرْضِكُمْ ۖ فَمَاذَا تَأْمُرُونَ",
    translation: {
      en: "",
      ur: "اس کا ارادہ یہ ہے کہ تم کو تمہارے ملک سے نکال دے۔ بھلا تمہاری کیا صلاح ہے؟",
    },
    words: [
      { id: '7:110:1', arabic: "يُرِيدُ", transliteration: "yurīdu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He wants", ur: "وہ wants" } },
      { id: '7:110:2', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '7:110:3', arabic: "يُخْرِجَكُم", transliteration: "yukh'rijakum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "drive you out", ur: "drive تم out" } },
      { id: '7:110:4', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:110:5', arabic: "أَرْضِكُمْ ۖ", transliteration: "arḍikum", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "your land", ur: "your land" } },
      { id: '7:110:6', arabic: "فَمَاذَا", transliteration: "famādhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so what", ur: "so کیا" } },
      { id: '7:110:7', arabic: "تَأْمُرُونَ", transliteration: "tamurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(do) you instruct", ur: "(do) تم instruct" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  111: {
    text: "قَالُوٓا۟ أَرْجِهْ وَأَخَاهُ وَأَرْسِلْ فِى ٱلْمَدَآئِنِ حَـٰشِرِينَ",
    translation: {
      en: "",
      ur: "انہوں نے (فرعون سے) کہا کہ فی الحال موسیٰ اور اس کے بھائی کے معاملے کو معاف رکھیے اور شہروں میں نقیب روانہ کر دیجیے",
    },
    words: [
      { id: '7:111:1', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '7:111:2', arabic: "أَرْجِهْ", transliteration: "arjih", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Postpone him", ur: "Postpone him" } },
      { id: '7:111:3', arabic: "وَأَخَاهُ", transliteration: "wa-akhāhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and his brother", ur: "اور his brother" } },
      { id: '7:111:4', arabic: "وَأَرْسِلْ", transliteration: "wa-arsil", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and send", ur: "اور send" } },
      { id: '7:111:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:111:6', arabic: "ٱلْمَدَآئِنِ", transliteration: "l-madāini", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the cities", ur: "the cities" } },
      { id: '7:111:7', arabic: "حَـٰشِرِينَ", transliteration: "ḥāshirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gatherers", ur: "gatherers" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  112: {
    text: "يَأْتُوكَ بِكُلِّ سَـٰحِرٍ عَلِيمٍۢ",
    translation: {
      en: "",
      ur: "کہ تمام ماہر جادوگروں کو آپ کے پاس لے آئیں",
    },
    words: [
      { id: '7:112:1', arabic: "يَأْتُوكَ", transliteration: "yatūka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They (will) bring to you", ur: "وہ لوگ (will) bring کو تم" } },
      { id: '7:112:2', arabic: "بِكُلِّ", transliteration: "bikulli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[with] every", ur: "[ساتھ] ہر" } },
      { id: '7:112:3', arabic: "سَـٰحِرٍ", transliteration: "sāḥirin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "magician", ur: "magician" } },
      { id: '7:112:4', arabic: "عَلِيمٍۢ", transliteration: "ʿalīmin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "learned", ur: "learned" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  113: {
    text: "وَجَآءَ ٱلسَّحَرَةُ فِرْعَوْنَ قَالُوٓا۟ إِنَّ لَنَا لَأَجْرًا إِن كُنَّا نَحْنُ ٱلْغَـٰلِبِينَ",
    translation: {
      en: "",
      ur: "(چنانچہ ایسا ہی کیا گیا) اور جادوگر فرعون کے پاس آپہنچے اور کہنے لگے کہ اگر ہم جیت گئے تو ہمیں صلہ عطا کیا جائے",
    },
    words: [
      { id: '7:113:1', arabic: "وَجَآءَ", transliteration: "wajāa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "So came", ur: "So came" } },
      { id: '7:113:2', arabic: "ٱلسَّحَرَةُ", transliteration: "l-saḥaratu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the magicians", ur: "the magicians" } },
      { id: '7:113:3', arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) Firaun", ur: "(کو) Firaun" } },
      { id: '7:113:4', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '7:113:5', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:113:6', arabic: "لَنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for us", ur: "for us" } },
      { id: '7:113:7', arabic: "لَأَجْرًا", transliteration: "la-ajran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely (will be) a reward", ur: "یقیناً (will be) a ثواب" } },
      { id: '7:113:8', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '7:113:9', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we are", ur: "ہم are" } },
      { id: '7:113:10', arabic: "نَحْنُ", transliteration: "naḥnu", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "[we]", ur: "[ہم]" } },
      { id: '7:113:11', arabic: "ٱلْغَـٰلِبِينَ", transliteration: "l-ghālibīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the victors", ur: "the victors" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  114: {
    text: "قَالَ نَعَمْ وَإِنَّكُمْ لَمِنَ ٱلْمُقَرَّبِينَ",
    translation: {
      en: "",
      ur: "(فرعون نے) کہا ہاں (ضرور) اور (اس کے علاوہ) تم مقربوں میں داخل کرلیے جاؤ گے",
    },
    words: [
      { id: '7:114:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:114:2', arabic: "نَعَمْ", transliteration: "naʿam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Yes", ur: "Yes" } },
      { id: '7:114:3', arabic: "وَإِنَّكُمْ", transliteration: "wa-innakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and indeed you", ur: "اور بیشک تم" } },
      { id: '7:114:4', arabic: "لَمِنَ", transliteration: "lamina", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely (will be) of", ur: "یقیناً (will be) of" } },
      { id: '7:114:5', arabic: "ٱلْمُقَرَّبِينَ", transliteration: "l-muqarabīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who are near", ur: "the ones جو are near" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  115: {
    text: "قَالُوا۟ يَـٰمُوسَىٰٓ إِمَّآ أَن تُلْقِىَ وَإِمَّآ أَن نَّكُونَ نَحْنُ ٱلْمُلْقِينَ",
    translation: {
      en: "",
      ur: "(جب فریقین روزِ مقررہ پر جمع ہوئے تو) جادوگروں نے کہا کہ موسیٰ یا تو تم (جادو کی چیز) ڈالو یا ہم ڈالتے ہیں",
    },
    words: [
      { id: '7:115:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '7:115:2', arabic: "يَـٰمُوسَىٰٓ", transliteration: "yāmūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "O Musa", ur: "اے Musa" } },
      { id: '7:115:3', arabic: "إِمَّآ", transliteration: "immā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Whether", ur: "Whether" } },
      { id: '7:115:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '7:115:5', arabic: "تُلْقِىَ", transliteration: "tul'qiya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you throw", ur: "تم throw" } },
      { id: '7:115:6', arabic: "وَإِمَّآ", transliteration: "wa-immā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "or Whether", ur: "یا Whether" } },
      { id: '7:115:7', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '7:115:8', arabic: "نَّكُونَ", transliteration: "nakūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we will be", ur: "ہم will be" } },
      { id: '7:115:9', arabic: "نَحْنُ", transliteration: "naḥnu", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "[we]", ur: "[ہم]" } },
      { id: '7:115:10', arabic: "ٱلْمُلْقِينَ", transliteration: "l-mul'qīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones to throw", ur: "the ones کو throw" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  116: {
    text: "قَالَ أَلْقُوا۟ ۖ فَلَمَّآ أَلْقَوْا۟ سَحَرُوٓا۟ أَعْيُنَ ٱلنَّاسِ وَٱسْتَرْهَبُوهُمْ وَجَآءُو بِسِحْرٍ عَظِيمٍۢ",
    translation: {
      en: "",
      ur: "(موسیٰ نے) کہا تم ہی ڈالو۔ جب انہوں نے (جادو کی چیزیں) ڈالیں تو لوگوں کی آنکھوں پر جادو کردیا (یعنی نظربندی کردی) اور (لاٹھیوں اور رسیوں کے سانپ بنا بنا کر) انہیں ڈرا دیا اور بہت بڑا جادو دکھایا",
    },
    words: [
      { id: '7:116:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:116:2', arabic: "أَلْقُوا۟ ۖ", transliteration: "alqū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Throw", ur: "Throw" } },
      { id: '7:116:3', arabic: "فَلَمَّآ", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then when", ur: "پھر when" } },
      { id: '7:116:4', arabic: "أَلْقَوْا۟", transliteration: "alqaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they threw", ur: "وہ لوگ threw" } },
      { id: '7:116:5', arabic: "سَحَرُوٓا۟", transliteration: "saḥarū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they bewitched", ur: "وہ لوگ bewitched" } },
      { id: '7:116:6', arabic: "أَعْيُنَ", transliteration: "aʿyuna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) eyes", ur: "(the) eyes" } },
      { id: '7:116:7', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the people", ur: "(of) the لوگ" } },
      { id: '7:116:8', arabic: "وَٱسْتَرْهَبُوهُمْ", transliteration: "wa-is'tarhabūhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and terrified them", ur: "اور terrified them" } },
      { id: '7:116:9', arabic: "وَجَآءُو", transliteration: "wajāū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and came (up)", ur: "اور came (up)" } },
      { id: '7:116:10', arabic: "بِسِحْرٍ", transliteration: "bisiḥ'rin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with a magic", ur: "ساتھ a magic" } },
      { id: '7:116:11', arabic: "عَظِيمٍۢ", transliteration: "ʿaẓīmin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  117: {
    text: "۞ وَأَوْحَيْنَآ إِلَىٰ مُوسَىٰٓ أَنْ أَلْقِ عَصَاكَ ۖ فَإِذَا هِىَ تَلْقَفُ مَا يَأْفِكُونَ",
    translation: {
      en: "",
      ur: "(اس وقت) ہم نے موسیٰ کی طرف وحی بھیجی کہ تم بھی اپنی لاٹھی ڈال دو۔ وہ فوراً (سانپ بن کر) جادوگروں کے بنائے ہوئے سانپوں کو (ایک ایک کرکے) نگل جائے گی",
    },
    words: [
      { id: '7:117:1', arabic: "۞ وَأَوْحَيْنَآ", transliteration: "wa-awḥaynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "And We inspired", ur: "اور ہم inspired" } },
      { id: '7:117:2', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '7:117:3', arabic: "مُوسَىٰٓ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '7:117:4', arabic: "أَنْ", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:117:5', arabic: "أَلْقِ", transliteration: "alqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Throw", ur: "Throw" } },
      { id: '7:117:6', arabic: "عَصَاكَ ۖ", transliteration: "ʿaṣāka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your staff", ur: "your staff" } },
      { id: '7:117:7', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and suddenly", ur: "اور suddenly" } },
      { id: '7:117:8', arabic: "هِىَ", transliteration: "hiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it", ur: "it" } },
      { id: '7:117:9', arabic: "تَلْقَفُ", transliteration: "talqafu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "swallow(ed)", ur: "swallow(ed)" } },
      { id: '7:117:10', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:117:11', arabic: "يَأْفِكُونَ", transliteration: "yafikūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they (were) falsifying", ur: "وہ لوگ (were) falsifying" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'موصول + صلة' }
      ],
    },
  },
  118: {
    text: "فَوَقَعَ ٱلْحَقُّ وَبَطَلَ مَا كَانُوا۟ يَعْمَلُونَ",
    translation: {
      en: "",
      ur: "(پھر) تو حق ثابت ہوگیا اور جو کچھ فرعونی کرتے تھے، باطل ہوگیا",
    },
    words: [
      { id: '7:118:1', arabic: "فَوَقَعَ", transliteration: "fawaqaʿa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So was established", ur: "So was established" } },
      { id: '7:118:2', arabic: "ٱلْحَقُّ", transliteration: "l-ḥaqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '7:118:3', arabic: "وَبَطَلَ", transliteration: "wabaṭala", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and became futile", ur: "اور became futile" } },
      { id: '7:118:4', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:118:5', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '7:118:6', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "do", ur: "do" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' }
      ],
    },
  },
  119: {
    text: "فَغُلِبُوا۟ هُنَالِكَ وَٱنقَلَبُوا۟ صَـٰغِرِينَ",
    translation: {
      en: "",
      ur: "اور وہ مغلوب ہوگئے اور ذلیل ہوکر رہ گئے",
    },
    words: [
      { id: '7:119:1', arabic: "فَغُلِبُوا۟", transliteration: "faghulibū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So they were defeated", ur: "So وہ لوگ were defeated" } },
      { id: '7:119:2', arabic: "هُنَالِكَ", transliteration: "hunālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "there", ur: "there" } },
      { id: '7:119:3', arabic: "وَٱنقَلَبُوا۟", transliteration: "wa-inqalabū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and returned", ur: "اور returned" } },
      { id: '7:119:4', arabic: "صَـٰغِرِينَ", transliteration: "ṣāghirīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "humiliated", ur: "humiliated" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  120: {
    text: "وَأُلْقِىَ ٱلسَّحَرَةُ سَـٰجِدِينَ",
    translation: {
      en: "",
      ur: "(یہ کیفیت دیکھ کر) جادوگر سجدے میں گر پڑے",
    },
    words: [
      { id: '7:120:1', arabic: "وَأُلْقِىَ", transliteration: "wa-ul'qiya", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And fell down", ur: "اور fell down" } },
      { id: '7:120:2', arabic: "ٱلسَّحَرَةُ", transliteration: "l-saḥaratu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the magicians", ur: "the magicians" } },
      { id: '7:120:3', arabic: "سَـٰجِدِينَ", transliteration: "sājidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "prostrate", ur: "prostrate" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  121: {
    text: "قَالُوٓا۟ ءَامَنَّا بِرَبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "اور کہنے لگے کہ ہم جہان کے پروردگار پر ایمان لائے",
    },
    words: [
      { id: '7:121:1', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '7:121:2', arabic: "ءَامَنَّا", transliteration: "āmannā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We believe", ur: "ہم ایمان لانا" } },
      { id: '7:121:3', arabic: "بِرَبِّ", transliteration: "birabbi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in (the) Lord", ur: "میں (the) رب" } },
      { id: '7:121:4', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  122: {
    text: "رَبِّ مُوسَىٰ وَهَـٰرُونَ",
    translation: {
      en: "",
      ur: "یعنی موسیٰ اور ہارون کے پروردگار پر",
    },
    words: [
      { id: '7:122:1', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Lord", ur: "رب" } },
      { id: '7:122:2', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "(of) Musa", ur: "(of) Musa" } },
      { id: '7:122:3', arabic: "وَهَـٰرُونَ", transliteration: "wahārūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Harun", ur: "اور Harun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  123: {
    text: "قَالَ فِرْعَوْنُ ءَامَنتُم بِهِۦ قَبْلَ أَنْ ءَاذَنَ لَكُمْ ۖ إِنَّ هَـٰذَا لَمَكْرٌۭ مَّكَرْتُمُوهُ فِى ٱلْمَدِينَةِ لِتُخْرِجُوا۟ مِنْهَآ أَهْلَهَا ۖ فَسَوْفَ تَعْلَمُونَ",
    translation: {
      en: "",
      ur: "فرعون نے کہا کہ پیشتر اس کے کہ میں تمہیں اجازت دوں تم اس پر ایمان لے آئے؟ بےشک یہ فریب ہے جو تم نے مل کر شہر میں کیا ہے تاکہ اہلِ شہر کو یہاں سے نکال دو۔ سو عنقریب (اس کا نتیجہ) معلوم کرلو گے",
    },
    words: [
      { id: '7:123:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Said", ur: "کہا" } },
      { id: '7:123:2', arabic: "فِرْعَوْنُ", transliteration: "fir'ʿawnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Firaun", ur: "Firaun" } },
      { id: '7:123:3', arabic: "ءَامَنتُم", transliteration: "āmantum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You believed", ur: "تم ایمان لائے" } },
      { id: '7:123:4', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in him", ur: "میں him" } },
      { id: '7:123:5', arabic: "قَبْلَ", transliteration: "qabla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '7:123:6', arabic: "أَنْ", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '7:123:7', arabic: "ءَاذَنَ", transliteration: "ādhana", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I give permission", ur: "میں give permission" } },
      { id: '7:123:8', arabic: "لَكُمْ ۖ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '7:123:9', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:123:10', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '7:123:11', arabic: "لَمَكْرٌۭ", transliteration: "lamakrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) surely a plot", ur: "(is) یقیناً a plot" } },
      { id: '7:123:12', arabic: "مَّكَرْتُمُوهُ", transliteration: "makartumūhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have plotted it", ur: "تم have plotted it" } },
      { id: '7:123:13', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:123:14', arabic: "ٱلْمَدِينَةِ", transliteration: "l-madīnati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the city", ur: "the city" } },
      { id: '7:123:15', arabic: "لِتُخْرِجُوا۟", transliteration: "litukh'rijū", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "so that you may drive out", ur: "so وہ تم may drive out" } },
      { id: '7:123:16', arabic: "مِنْهَآ", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '7:123:17', arabic: "أَهْلَهَا ۖ", transliteration: "ahlahā", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "its people", ur: "its لوگ" } },
      { id: '7:123:18', arabic: "فَسَوْفَ", transliteration: "fasawfa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But soon", ur: "لیکن soon" } },
      { id: '7:123:19', arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "you will know", ur: "تم will جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'جار + مجرور' }
      ],
    },
  },
  124: {
    text: "لَأُقَطِّعَنَّ أَيْدِيَكُمْ وَأَرْجُلَكُم مِّنْ خِلَـٰفٍۢ ثُمَّ لَأُصَلِّبَنَّكُمْ أَجْمَعِينَ",
    translation: {
      en: "",
      ur: "میں (پہلے تو) تمہارے ایک طرف کے ہاتھ اور دوسری طرف کے پاؤں کٹوا دوں گا پھر تم سب کو سولی چڑھوا دوں گا",
    },
    words: [
      { id: '7:124:1', arabic: "لَأُقَطِّعَنَّ", transliteration: "la-uqaṭṭiʿanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will surely cut off", ur: "میں will یقیناً cut off" } },
      { id: '7:124:2', arabic: "أَيْدِيَكُمْ", transliteration: "aydiyakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your hands", ur: "your hands" } },
      { id: '7:124:3', arabic: "وَأَرْجُلَكُم", transliteration: "wa-arjulakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your feet", ur: "اور your feet" } },
      { id: '7:124:4', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:124:5', arabic: "خِلَـٰفٍۢ", transliteration: "khilāfin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "opposite (sides)", ur: "opposite (sides)" } },
      { id: '7:124:6', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '7:124:7', arabic: "لَأُصَلِّبَنَّكُمْ", transliteration: "la-uṣallibannakum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will surely crucify you", ur: "میں will یقیناً crucify تم" } },
      { id: '7:124:8', arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  125: {
    text: "قَالُوٓا۟ إِنَّآ إِلَىٰ رَبِّنَا مُنقَلِبُونَ",
    translation: {
      en: "",
      ur: "وہ بولے کہ ہم تو اپنے پروردگار کی طرف لوٹ کر جانے والے ہیں",
    },
    words: [
      { id: '7:125:1', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '7:125:2', arabic: "إِنَّآ", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, we", ur: "بیشک, ہم" } },
      { id: '7:125:3', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '7:125:4', arabic: "رَبِّنَا", transliteration: "rabbinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our Lord", ur: "our رب" } },
      { id: '7:125:5', arabic: "مُنقَلِبُونَ", transliteration: "munqalibūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(will) return", ur: "(will) return" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  126: {
    text: "وَمَا تَنقِمُ مِنَّآ إِلَّآ أَنْ ءَامَنَّا بِـَٔايَـٰتِ رَبِّنَا لَمَّا جَآءَتْنَا ۚ رَبَّنَآ أَفْرِغْ عَلَيْنَا صَبْرًۭا وَتَوَفَّنَا مُسْلِمِينَ",
    translation: {
      en: "",
      ur: "اور اس کے سوا تجھ کو ہماری کون سی بات بری لگی ہے کہ جب ہمارے پروردگار کی نشانیاں ہمارے پاس آگئیں تو ہم ان پر ایمان لے آئے۔ اے پروردگار ہم پر صبرواستقامت کے دہانے کھول دے اور ہمیں (ماریو تو) مسلمان ہی ماریو",
    },
    words: [
      { id: '7:126:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '7:126:2', arabic: "تَنقِمُ", transliteration: "tanqimu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you take revenge", ur: "تم take revenge" } },
      { id: '7:126:3', arabic: "مِنَّآ", transliteration: "minnā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from us", ur: "سے us" } },
      { id: '7:126:4', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:126:5', arabic: "أَنْ", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:126:6', arabic: "ءَامَنَّا", transliteration: "āmannā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we believed", ur: "ہم ایمان لائے" } },
      { id: '7:126:7', arabic: "بِـَٔايَـٰتِ", transliteration: "biāyāti", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in (the) Signs", ur: "میں (the) نشانیاں" } },
      { id: '7:126:8', arabic: "رَبِّنَا", transliteration: "rabbinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) our Lord", ur: "(of) our رب" } },
      { id: '7:126:9', arabic: "لَمَّا", transliteration: "lammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '7:126:10', arabic: "جَآءَتْنَا ۚ", transliteration: "jāatnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they came to us", ur: "وہ لوگ came کو us" } },
      { id: '7:126:11', arabic: "رَبَّنَآ", transliteration: "rabbanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Lord", ur: "Our رب" } },
      { id: '7:126:12', arabic: "أَفْرِغْ", transliteration: "afrigh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Pour", ur: "Pour" } },
      { id: '7:126:13', arabic: "عَلَيْنَا", transliteration: "ʿalaynā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon us", ur: "پر us" } },
      { id: '7:126:14', arabic: "صَبْرًۭا", transliteration: "ṣabran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "patience", ur: "patience" } },
      { id: '7:126:15', arabic: "وَتَوَفَّنَا", transliteration: "watawaffanā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and cause us to die", ur: "اور cause us کو die" } },
      { id: '7:126:16', arabic: "مُسْلِمِينَ", transliteration: "mus'limīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) Muslims", ur: "(as) Muslims" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  127: {
    text: "وَقَالَ ٱلْمَلَأُ مِن قَوْمِ فِرْعَوْنَ أَتَذَرُ مُوسَىٰ وَقَوْمَهُۥ لِيُفْسِدُوا۟ فِى ٱلْأَرْضِ وَيَذَرَكَ وَءَالِهَتَكَ ۚ قَالَ سَنُقَتِّلُ أَبْنَآءَهُمْ وَنَسْتَحْىِۦ نِسَآءَهُمْ وَإِنَّا فَوْقَهُمْ قَـٰهِرُونَ",
    translation: {
      en: "",
      ur: "اور قومِ فرعون میں جو سردار تھے کہنے لگے کہ کیا آپ موسیٰ اور اس کی قوم کو چھوڑ دیجیے گا کہ ملک میں خرابی کریں اور آپ سے اور آپ کے معبودوں سے دست کش ہوجائیں۔ وہ بولے کہ ہم ان کے لڑکوں کو قتل کرڈالیں گے اور لڑکیوں کو زندہ رہنے دیں گے اور بےشک ہم ان پر غالب ہیں",
    },
    words: [
      { id: '7:127:1', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And said", ur: "اور کہا" } },
      { id: '7:127:2', arabic: "ٱلْمَلَأُ", transliteration: "l-mala-u", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the chiefs", ur: "the chiefs" } },
      { id: '7:127:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:127:4', arabic: "قَوْمِ", transliteration: "qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "(the) people", ur: "(the) لوگ" } },
      { id: '7:127:5', arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Firaun", ur: "(of) Firaun" } },
      { id: '7:127:6', arabic: "أَتَذَرُ", transliteration: "atadharu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Will you leave", ur: "Will تم leave" } },
      { id: '7:127:7', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '7:127:8', arabic: "وَقَوْمَهُۥ", transliteration: "waqawmahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و م", meaning: { en: "and his people", ur: "اور his لوگ" } },
      { id: '7:127:9', arabic: "لِيُفْسِدُوا۟", transliteration: "liyuf'sidū", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "so that they cause corruption", ur: "so وہ وہ لوگ cause corruption" } },
      { id: '7:127:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:127:11', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '7:127:12', arabic: "وَيَذَرَكَ", transliteration: "wayadharaka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and forsake you", ur: "اور forsake تم" } },
      { id: '7:127:13', arabic: "وَءَالِهَتَكَ ۚ", transliteration: "waālihataka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your gods", ur: "اور your gods" } },
      { id: '7:127:14', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:127:15', arabic: "سَنُقَتِّلُ", transliteration: "sanuqattilu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will kill", ur: "ہم will kill" } },
      { id: '7:127:16', arabic: "أَبْنَآءَهُمْ", transliteration: "abnāahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their sons", ur: "their sons" } },
      { id: '7:127:17', arabic: "وَنَسْتَحْىِۦ", transliteration: "wanastaḥyī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and we will let live", ur: "اور ہم will let live" } },
      { id: '7:127:18', arabic: "نِسَآءَهُمْ", transliteration: "nisāahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their women", ur: "their women" } },
      { id: '7:127:19', arabic: "وَإِنَّا", transliteration: "wa-innā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and indeed, we", ur: "اور بیشک, ہم" } },
      { id: '7:127:20', arabic: "فَوْقَهُمْ", transliteration: "fawqahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "over them", ur: "اوپر them" } },
      { id: '7:127:21', arabic: "قَـٰهِرُونَ", transliteration: "qāhirūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) subjugators", ur: "(are) subjugators" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'فعل + فاعل' }
      ],
    },
  },
  128: {
    text: "قَالَ مُوسَىٰ لِقَوْمِهِ ٱسْتَعِينُوا۟ بِٱللَّهِ وَٱصْبِرُوٓا۟ ۖ إِنَّ ٱلْأَرْضَ لِلَّهِ يُورِثُهَا مَن يَشَآءُ مِنْ عِبَادِهِۦ ۖ وَٱلْعَـٰقِبَةُ لِلْمُتَّقِينَ",
    translation: {
      en: "",
      ur: "موسیٰ نے اپنی قوم سے کہا کہ خدا سے مدد مانگو اور ثابت قدم رہو۔ زمین تو خدا کی ہے۔ وہ اپنے بندوں میں سے جسے چاہتا ہے اس کا مالک بناتا ہے۔ اور آخر بھلا تو ڈرنے والوں کا ہے",
    },
    words: [
      { id: '7:128:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Said", ur: "کہا" } },
      { id: '7:128:2', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '7:128:3', arabic: "لِقَوْمِهِ", transliteration: "liqawmihi", pos: ['P+N'], posLabel: 'P+N', root: "ق و م", meaning: { en: "to his people", ur: "کو his لوگ" } },
      { id: '7:128:4', arabic: "ٱسْتَعِينُوا۟", transliteration: "is'taʿīnū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Seek help", ur: "Seek help" } },
      { id: '7:128:5', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "from Allah", ur: "سے اللہ" } },
      { id: '7:128:6', arabic: "وَٱصْبِرُوٓا۟ ۖ", transliteration: "wa-iṣ'birū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and be patient", ur: "اور be patient" } },
      { id: '7:128:7', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:128:8', arabic: "ٱلْأَرْضَ", transliteration: "l-arḍa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the earth", ur: "زمین" } },
      { id: '7:128:9', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(belongs) to Allah", ur: "(belongs) کو اللہ" } },
      { id: '7:128:10', arabic: "يُورِثُهَا", transliteration: "yūrithuhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He causes to inherit it", ur: "وہ causes کو inherit it" } },
      { id: '7:128:11', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '7:128:12', arabic: "يَشَآءُ", transliteration: "yashāu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He wills", ur: "وہ wills" } },
      { id: '7:128:13', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:128:14', arabic: "عِبَادِهِۦ ۖ", transliteration: "ʿibādihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His servants", ur: "His بندے" } },
      { id: '7:128:15', arabic: "وَٱلْعَـٰقِبَةُ", transliteration: "wal-ʿāqibatu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And the end", ur: "اور the end" } },
      { id: '7:128:16', arabic: "لِلْمُتَّقِينَ", transliteration: "lil'muttaqīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) for the righteous", ur: "(is) for the نیک" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'موصول + صلة' },
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  129: {
    text: "قَالُوٓا۟ أُوذِينَا مِن قَبْلِ أَن تَأْتِيَنَا وَمِنۢ بَعْدِ مَا جِئْتَنَا ۚ قَالَ عَسَىٰ رَبُّكُمْ أَن يُهْلِكَ عَدُوَّكُمْ وَيَسْتَخْلِفَكُمْ فِى ٱلْأَرْضِ فَيَنظُرَ كَيْفَ تَعْمَلُونَ",
    translation: {
      en: "",
      ur: "وہ بولے کہ تمہارے آنے سے پہلے بھی ہم کو اذیتیں پہنچتی رہیں اور آنے کے بعد بھی۔ موسیٰ نے کہا کہ قریب ہے کہ تمہارا پروردگار تمہارے دشمن کو ہلاک کردے اور اس کی جگہ تمہیں زمین میں خلیفہ بنائے پھر دیکھے کہ تم کیسے عمل کرتے ہو",
    },
    words: [
      { id: '7:129:1', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '7:129:2', arabic: "أُوذِينَا", transliteration: "ūdhīnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have been harmed", ur: "ہم have been harmed" } },
      { id: '7:129:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:129:4', arabic: "قَبْلِ", transliteration: "qabli", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before", ur: "پہلے" } },
      { id: '7:129:5', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '7:129:6', arabic: "تَأْتِيَنَا", transliteration: "tatiyanā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you came to us", ur: "تم came کو us" } },
      { id: '7:129:7', arabic: "وَمِنۢ", transliteration: "wamin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:129:8', arabic: "بَعْدِ", transliteration: "baʿdi", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "and after", ur: "اور بعد" } },
      { id: '7:129:9', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "[what]", ur: "[کیا]" } },
      { id: '7:129:10', arabic: "جِئْتَنَا ۚ", transliteration: "ji'tanā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have come to us", ur: "تم have come کو us" } },
      { id: '7:129:11', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:129:12', arabic: "عَسَىٰ", transliteration: "ʿasā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Perhaps", ur: "Perhaps" } },
      { id: '7:129:13', arabic: "رَبُّكُمْ", transliteration: "rabbukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:129:14', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '7:129:15', arabic: "يُهْلِكَ", transliteration: "yuh'lika", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will destroy", ur: "will destroy" } },
      { id: '7:129:16', arabic: "عَدُوَّكُمْ", transliteration: "ʿaduwwakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your enemy", ur: "your enemy" } },
      { id: '7:129:17', arabic: "وَيَسْتَخْلِفَكُمْ", transliteration: "wayastakhlifakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and make you successors", ur: "اور make تم successors" } },
      { id: '7:129:18', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:129:19', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '7:129:20', arabic: "فَيَنظُرَ", transliteration: "fayanẓura", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then see", ur: "پھر دیکھنا" } },
      { id: '7:129:21', arabic: "كَيْفَ", transliteration: "kayfa", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "how", ur: "how" } },
      { id: '7:129:22', arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you will do", ur: "تم will do" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصول + صلة' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'جار + مجرور' }
      ],
    },
  },
  130: {
    text: "وَلَقَدْ أَخَذْنَآ ءَالَ فِرْعَوْنَ بِٱلسِّنِينَ وَنَقْصٍۢ مِّنَ ٱلثَّمَرَٰتِ لَعَلَّهُمْ يَذَّكَّرُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے فرعونیوں کو قحطوں اور میووں کے نقصان میں پکڑا تاکہ نصیحت حاصل کریں",
    },
    words: [
      { id: '7:130:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And certainly", ur: "اور certainly" } },
      { id: '7:130:2', arabic: "أَخَذْنَآ", transliteration: "akhadhnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We seized", ur: "ہم seized" } },
      { id: '7:130:3', arabic: "ءَالَ", transliteration: "āla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) people", ur: "(the) لوگ" } },
      { id: '7:130:4', arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Firaun", ur: "(of) Firaun" } },
      { id: '7:130:5', arabic: "بِٱلسِّنِينَ", transliteration: "bil-sinīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with years (of famine)", ur: "ساتھ years (of famine)" } },
      { id: '7:130:6', arabic: "وَنَقْصٍۢ", transliteration: "wanaqṣin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a deficit", ur: "اور a deficit" } },
      { id: '7:130:7', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:130:8', arabic: "ٱلثَّمَرَٰتِ", transliteration: "l-thamarāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] fruits", ur: "[the] fruits" } },
      { id: '7:130:9', arabic: "لَعَلَّهُمْ", transliteration: "laʿallahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that they may", ur: "so وہ وہ لوگ may" } },
      { id: '7:130:10', arabic: "يَذَّكَّرُونَ", transliteration: "yadhakkarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "receive admonition", ur: "receive admonition" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  131: {
    text: "فَإِذَا جَآءَتْهُمُ ٱلْحَسَنَةُ قَالُوا۟ لَنَا هَـٰذِهِۦ ۖ وَإِن تُصِبْهُمْ سَيِّئَةٌۭ يَطَّيَّرُوا۟ بِمُوسَىٰ وَمَن مَّعَهُۥٓ ۗ أَلَآ إِنَّمَا طَـٰٓئِرُهُمْ عِندَ ٱللَّهِ وَلَـٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ",
    translation: {
      en: "",
      ur: "تو جب ان کو آسائش حاصل ہوتی تو کہتے کہ ہم اس کے مستحق ہیں۔ اور اگر سختی پہنچتی تو موسیٰ اور ان کے رفیقوں کی بدشگونی بتاتے۔ دیکھو ان کی بدشگونی خدا کے ہاں مقرر ہے لیکن ان میں اکثر نہیں جانتے",
    },
    words: [
      { id: '7:131:1', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But when", ur: "لیکن when" } },
      { id: '7:131:2', arabic: "جَآءَتْهُمُ", transliteration: "jāathumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came to them", ur: "came کو them" } },
      { id: '7:131:3', arabic: "ٱلْحَسَنَةُ", transliteration: "l-ḥasanatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the good", ur: "the اچھا" } },
      { id: '7:131:4', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they said", ur: "وہ لوگ کہا" } },
      { id: '7:131:5', arabic: "لَنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For us", ur: "For us" } },
      { id: '7:131:6', arabic: "هَـٰذِهِۦ ۖ", transliteration: "hādhihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) this", ur: "(is) this" } },
      { id: '7:131:7', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '7:131:8', arabic: "تُصِبْهُمْ", transliteration: "tuṣib'hum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "afflicts them", ur: "afflicts them" } },
      { id: '7:131:9', arabic: "سَيِّئَةٌۭ", transliteration: "sayyi-atun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "bad", ur: "bad" } },
      { id: '7:131:10', arabic: "يَطَّيَّرُوا۟", transliteration: "yaṭṭayyarū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they ascribe evil omens", ur: "وہ لوگ ascribe برا omens" } },
      { id: '7:131:11', arabic: "بِمُوسَىٰ", transliteration: "bimūsā", pos: ['P+N'], posLabel: 'P+N', root: "م و س", meaning: { en: "to Musa", ur: "کو Musa" } },
      { id: '7:131:12', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and who", ur: "اور جو" } },
      { id: '7:131:13', arabic: "مَّعَهُۥٓ ۗ", transliteration: "maʿahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(were) with him", ur: "(were) ساتھ him" } },
      { id: '7:131:14', arabic: "أَلَآ", transliteration: "alā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Behold", ur: "Behold" } },
      { id: '7:131:15', arabic: "إِنَّمَا", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '7:131:16', arabic: "طَـٰٓئِرُهُمْ", transliteration: "ṭāiruhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their evil omens", ur: "their برا omens" } },
      { id: '7:131:17', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) with", ur: "(are) ساتھ" } },
      { id: '7:131:18', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:131:19', arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '7:131:20', arabic: "أَكْثَرَهُمْ", transliteration: "aktharahum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '7:131:21', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '7:131:22', arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "know", ur: "جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'نفی + فعل' }
      ],
    },
  },
  132: {
    text: "وَقَالُوا۟ مَهْمَا تَأْتِنَا بِهِۦ مِنْ ءَايَةٍۢ لِّتَسْحَرَنَا بِهَا فَمَا نَحْنُ لَكَ بِمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "اور کہنے لگے کہ تم ہمارے پاس (خواہ) کوئی ہی نشانی لاؤ تاکہ اس سے ہم پر جادو کرو۔ مگر ہم تم پر ایمان لانے والے نہیں ہیں",
    },
    words: [
      { id: '7:132:1', arabic: "وَقَالُوا۟", transliteration: "waqālū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And they said", ur: "اور وہ لوگ کہا" } },
      { id: '7:132:2', arabic: "مَهْمَا", transliteration: "mahmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Whatever", ur: "Whatever" } },
      { id: '7:132:3', arabic: "تَأْتِنَا", transliteration: "tatinā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you bring us", ur: "تم bring us" } },
      { id: '7:132:4', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "therewith", ur: "therewith" } },
      { id: '7:132:5', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:132:6', arabic: "ءَايَةٍۢ", transliteration: "āyatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) sign", ur: "(the) نشانی" } },
      { id: '7:132:7', arabic: "لِّتَسْحَرَنَا", transliteration: "litasḥaranā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that you bewitch us", ur: "so وہ تم bewitch us" } },
      { id: '7:132:8', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '7:132:9', arabic: "فَمَا", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then not", ur: "پھر نہیں" } },
      { id: '7:132:10', arabic: "نَحْنُ", transliteration: "naḥnu", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "we", ur: "ہم" } },
      { id: '7:132:11', arabic: "لَكَ", transliteration: "laka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) in you", ur: "(will be) میں تم" } },
      { id: '7:132:12', arabic: "بِمُؤْمِنِينَ", transliteration: "bimu'minīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "believers", ur: "مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  133: {
    text: "فَأَرْسَلْنَا عَلَيْهِمُ ٱلطُّوفَانَ وَٱلْجَرَادَ وَٱلْقُمَّلَ وَٱلضَّفَادِعَ وَٱلدَّمَ ءَايَـٰتٍۢ مُّفَصَّلَـٰتٍۢ فَٱسْتَكْبَرُوا۟ وَكَانُوا۟ قَوْمًۭا مُّجْرِمِينَ",
    translation: {
      en: "",
      ur: "تو ہم نے ان پر طوفان اور ٹڈیاں اور جوئیں اور مینڈک اور خون کتنی کھلی ہوئی نشانیاں بھیجیں۔ مگر وہ تکبر ہی کرتے رہے اور وہ لوگ تھے ہی گنہگار",
    },
    words: [
      { id: '7:133:1', arabic: "فَأَرْسَلْنَا", transliteration: "fa-arsalnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ر س ل", meaning: { en: "So We sent", ur: "So ہم sent" } },
      { id: '7:133:2', arabic: "عَلَيْهِمُ", transliteration: "ʿalayhimu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on them", ur: "پر them" } },
      { id: '7:133:3', arabic: "ٱلطُّوفَانَ", transliteration: "l-ṭūfāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the flood", ur: "the flood" } },
      { id: '7:133:4', arabic: "وَٱلْجَرَادَ", transliteration: "wal-jarāda", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the locusts", ur: "اور the locusts" } },
      { id: '7:133:5', arabic: "وَٱلْقُمَّلَ", transliteration: "wal-qumala", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the lice", ur: "اور the lice" } },
      { id: '7:133:6', arabic: "وَٱلضَّفَادِعَ", transliteration: "wal-ḍafādiʿa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the frogs", ur: "اور the frogs" } },
      { id: '7:133:7', arabic: "وَٱلدَّمَ", transliteration: "wal-dama", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the blood", ur: "اور the blood" } },
      { id: '7:133:8', arabic: "ءَايَـٰتٍۢ", transliteration: "āyātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) signs", ur: "(as) نشانیاں" } },
      { id: '7:133:9', arabic: "مُّفَصَّلَـٰتٍۢ", transliteration: "mufaṣṣalātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "manifest", ur: "manifest" } },
      { id: '7:133:10', arabic: "فَٱسْتَكْبَرُوا۟", transliteration: "fa-is'takbarū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "but they showed arrogance", ur: "لیکن وہ لوگ showed arrogance" } },
      { id: '7:133:11', arabic: "وَكَانُوا۟", transliteration: "wakānū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and they were", ur: "اور وہ لوگ were" } },
      { id: '7:133:12', arabic: "قَوْمًۭا", transliteration: "qawman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a people", ur: "a لوگ" } },
      { id: '7:133:13', arabic: "مُّجْرِمِينَ", transliteration: "muj'rimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "criminal", ur: "criminal" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  134: {
    text: "وَلَمَّا وَقَعَ عَلَيْهِمُ ٱلرِّجْزُ قَالُوا۟ يَـٰمُوسَى ٱدْعُ لَنَا رَبَّكَ بِمَا عَهِدَ عِندَكَ ۖ لَئِن كَشَفْتَ عَنَّا ٱلرِّجْزَ لَنُؤْمِنَنَّ لَكَ وَلَنُرْسِلَنَّ مَعَكَ بَنِىٓ إِسْرَٰٓءِيلَ",
    translation: {
      en: "",
      ur: "اور جب ان پر عذاب واقع ہوتا تو کہتے کہ موسیٰ ہمارے لیے اپنے پروردگار سے دعا کرو۔ جیسا اس نے تم سے عہد کر رکھا ہے۔ اگر تم ہم سے عذاب کو ٹال دو گے تو ہم تم پر ایمان بھی لے آئیں گے اور بنی اسرائیل کو بھی تمہارے ساتھ جانے (کی اجازت) دیں گے",
    },
    words: [
      { id: '7:134:1', arabic: "وَلَمَّا", transliteration: "walammā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:134:2', arabic: "وَقَعَ", transliteration: "waqaʿa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "fell", ur: "fell" } },
      { id: '7:134:3', arabic: "عَلَيْهِمُ", transliteration: "ʿalayhimu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on them", ur: "پر them" } },
      { id: '7:134:4', arabic: "ٱلرِّجْزُ", transliteration: "l-rij'zu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '7:134:5', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they said", ur: "وہ لوگ کہا" } },
      { id: '7:134:6', arabic: "يَـٰمُوسَى", transliteration: "yāmūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "O Musa", ur: "اے Musa" } },
      { id: '7:134:7', arabic: "ٱدْعُ", transliteration: "ud'ʿu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Invoke", ur: "Invoke" } },
      { id: '7:134:8', arabic: "لَنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for us", ur: "for us" } },
      { id: '7:134:9', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:134:10', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by what", ur: "by کیا" } },
      { id: '7:134:11', arabic: "عَهِدَ", transliteration: "ʿahida", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He has promised", ur: "وہ has promised" } },
      { id: '7:134:12', arabic: "عِندَكَ ۖ", transliteration: "ʿindaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '7:134:13', arabic: "لَئِن", transliteration: "la-in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '7:134:14', arabic: "كَشَفْتَ", transliteration: "kashafta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you remove", ur: "تم remove" } },
      { id: '7:134:15', arabic: "عَنَّا", transliteration: "ʿannā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from us", ur: "سے us" } },
      { id: '7:134:16', arabic: "ٱلرِّجْزَ", transliteration: "l-rij'za", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '7:134:17', arabic: "لَنُؤْمِنَنَّ", transliteration: "lanu'minanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely, we will believe", ur: "یقیناً, ہم will ایمان لانا" } },
      { id: '7:134:18', arabic: "لَكَ", transliteration: "laka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[for] you", ur: "[for] تم" } },
      { id: '7:134:19', arabic: "وَلَنُرْسِلَنَّ", transliteration: "walanur'silanna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and surely, we will send", ur: "اور یقیناً, ہم will send" } },
      { id: '7:134:20', arabic: "مَعَكَ", transliteration: "maʿaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with you", ur: "ساتھ تم" } },
      { id: '7:134:21', arabic: "بَنِىٓ", transliteration: "banī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Children", ur: "(the) اولاد" } },
      { id: '7:134:22', arabic: "إِسْرَٰٓءِيلَ", transliteration: "is'rāīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Israel", ur: "(of) Israel" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'فعل + فاعل' }
      ],
    },
  },
  135: {
    text: "فَلَمَّا كَشَفْنَا عَنْهُمُ ٱلرِّجْزَ إِلَىٰٓ أَجَلٍ هُم بَـٰلِغُوهُ إِذَا هُمْ يَنكُثُونَ",
    translation: {
      en: "",
      ur: "پھر جب ہم ایک مدت کے لیے جس تک ان کو پہنچنا تھا ان سے عذاب دور کردیتے تو وہ عہد کو توڑ ڈالتے",
    },
    words: [
      { id: '7:135:1', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But when", ur: "لیکن when" } },
      { id: '7:135:2', arabic: "كَشَفْنَا", transliteration: "kashafnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We removed", ur: "ہم removed" } },
      { id: '7:135:3', arabic: "عَنْهُمُ", transliteration: "ʿanhumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '7:135:4', arabic: "ٱلرِّجْزَ", transliteration: "l-rij'za", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '7:135:5', arabic: "إِلَىٰٓ", transliteration: "ilā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "till", ur: "till" } },
      { id: '7:135:6', arabic: "أَجَلٍ", transliteration: "ajalin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a (fixed) term", ur: "a (fixed) term" } },
      { id: '7:135:7', arabic: "هُم", transliteration: "hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(which) they", ur: "(جو) وہ لوگ" } },
      { id: '7:135:8', arabic: "بَـٰلِغُوهُ", transliteration: "bālighūhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "were to reach [it]", ur: "were کو reach [it]" } },
      { id: '7:135:9', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '7:135:10', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '7:135:11', arabic: "يَنكُثُونَ", transliteration: "yankuthūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "broke (the word)", ur: "broke (the word)" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  136: {
    text: "فَٱنتَقَمْنَا مِنْهُمْ فَأَغْرَقْنَـٰهُمْ فِى ٱلْيَمِّ بِأَنَّهُمْ كَذَّبُوا۟ بِـَٔايَـٰتِنَا وَكَانُوا۟ عَنْهَا غَـٰفِلِينَ",
    translation: {
      en: "",
      ur: "تو ہم نے ان سے بدلہ لے کر ہی چھوڑا کہ ان کو دریا میں ڈبو دیا اس لیے کہ وہ ہماری آیتوں کو جھٹلاتے اور ان سے بےپروائی کرتے تھے",
    },
    words: [
      { id: '7:136:1', arabic: "فَٱنتَقَمْنَا", transliteration: "fa-intaqamnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So We took retribution", ur: "So ہم took retribution" } },
      { id: '7:136:2', arabic: "مِنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '7:136:3', arabic: "فَأَغْرَقْنَـٰهُمْ", transliteration: "fa-aghraqnāhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and We drowned them", ur: "اور ہم drowned them" } },
      { id: '7:136:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:136:5', arabic: "ٱلْيَمِّ", transliteration: "l-yami", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sea", ur: "the sea" } },
      { id: '7:136:6', arabic: "بِأَنَّهُمْ", transliteration: "bi-annahum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because they", ur: "because وہ لوگ" } },
      { id: '7:136:7', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '7:136:8', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Our Signs", ur: "Our نشانیاں" } },
      { id: '7:136:9', arabic: "وَكَانُوا۟", transliteration: "wakānū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and they were", ur: "اور وہ لوگ were" } },
      { id: '7:136:10', arabic: "عَنْهَا", transliteration: "ʿanhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '7:136:11', arabic: "غَـٰفِلِينَ", transliteration: "ghāfilīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "heedless", ur: "heedless" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  137: {
    text: "وَأَوْرَثْنَا ٱلْقَوْمَ ٱلَّذِينَ كَانُوا۟ يُسْتَضْعَفُونَ مَشَـٰرِقَ ٱلْأَرْضِ وَمَغَـٰرِبَهَا ٱلَّتِى بَـٰرَكْنَا فِيهَا ۖ وَتَمَّتْ كَلِمَتُ رَبِّكَ ٱلْحُسْنَىٰ عَلَىٰ بَنِىٓ إِسْرَٰٓءِيلَ بِمَا صَبَرُوا۟ ۖ وَدَمَّرْنَا مَا كَانَ يَصْنَعُ فِرْعَوْنُ وَقَوْمُهُۥ وَمَا كَانُوا۟ يَعْرِشُونَ",
    translation: {
      en: "",
      ur: "اور جو لوگ کمزور سمجھے جاتے تھے ان کو زمین (شام) کے مشرق ومغرب کا جس میں ہم نے برکت دی تھی وارث کردیا اور بنی اسرائیل کے بارے میں ان کے صبر کی وجہ سے تمہارے پروردگار کا وعدہٴ نیک پورا ہوا اور فرعون اور قوم فرعون جو (محل) بناتے اور (انگور کے باغ) جو چھتریوں پر چڑھاتے تھے سب کو ہم نے تباہ کردیا",
    },
    words: [
      { id: '7:137:1', arabic: "وَأَوْرَثْنَا", transliteration: "wa-awrathnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We made inheritors", ur: "اور ہم made inheritors" } },
      { id: '7:137:2', arabic: "ٱلْقَوْمَ", transliteration: "l-qawma", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "the people", ur: "the لوگ" } },
      { id: '7:137:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '7:137:4', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "were", ur: "were" } },
      { id: '7:137:5', arabic: "يُسْتَضْعَفُونَ", transliteration: "yus'taḍʿafūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "considered weak ", ur: "considered weak " } },
      { id: '7:137:6', arabic: "مَشَـٰرِقَ", transliteration: "mashāriqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) eastern (parts)", ur: "(the) eastern (parts)" } },
      { id: '7:137:7', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "(of) the land", ur: "(of) the land" } },
      { id: '7:137:8', arabic: "وَمَغَـٰرِبَهَا", transliteration: "wamaghāribahā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the western (parts) of it", ur: "اور the western (parts) of it" } },
      { id: '7:137:9', arabic: "ٱلَّتِى", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '7:137:10', arabic: "بَـٰرَكْنَا", transliteration: "bāraknā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We blessed", ur: "ہم blessed" } },
      { id: '7:137:11', arabic: "فِيهَا ۖ", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[in it]", ur: "[میں it]" } },
      { id: '7:137:12', arabic: "وَتَمَّتْ", transliteration: "watammat", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And was fulfilled", ur: "اور was fulfilled" } },
      { id: '7:137:13', arabic: "كَلِمَتُ", transliteration: "kalimatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) word", ur: "(the) word" } },
      { id: '7:137:14', arabic: "رَبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) your Lord ", ur: "(of) your رب " } },
      { id: '7:137:15', arabic: "ٱلْحُسْنَىٰ", transliteration: "l-ḥus'nā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the best", ur: "the best" } },
      { id: '7:137:16', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '7:137:17', arabic: "بَنِىٓ", transliteration: "banī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Children", ur: "(the) اولاد" } },
      { id: '7:137:18', arabic: "إِسْرَٰٓءِيلَ", transliteration: "is'rāīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Israel", ur: "(of) Israel" } },
      { id: '7:137:19', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because", ur: "because" } },
      { id: '7:137:20', arabic: "صَبَرُوا۟ ۖ", transliteration: "ṣabarū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they were patient", ur: "وہ لوگ were patient" } },
      { id: '7:137:21', arabic: "وَدَمَّرْنَا", transliteration: "wadammarnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We destroyed", ur: "اور ہم destroyed" } },
      { id: '7:137:22', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:137:23', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "used to", ur: "used کو" } },
      { id: '7:137:24', arabic: "يَصْنَعُ", transliteration: "yaṣnaʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "make", ur: "make" } },
      { id: '7:137:25', arabic: "فِرْعَوْنُ", transliteration: "fir'ʿawnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Firaun", ur: "Firaun" } },
      { id: '7:137:26', arabic: "وَقَوْمُهُۥ", transliteration: "waqawmuhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و م", meaning: { en: "and his people", ur: "اور his لوگ" } },
      { id: '7:137:27', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '7:137:28', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '7:137:29', arabic: "يَعْرِشُونَ", transliteration: "yaʿrishūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "erect", ur: "erect" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'فعل + فاعل' }
      ],
    },
  },
  138: {
    text: "وَجَـٰوَزْنَا بِبَنِىٓ إِسْرَٰٓءِيلَ ٱلْبَحْرَ فَأَتَوْا۟ عَلَىٰ قَوْمٍۢ يَعْكُفُونَ عَلَىٰٓ أَصْنَامٍۢ لَّهُمْ ۚ قَالُوا۟ يَـٰمُوسَى ٱجْعَل لَّنَآ إِلَـٰهًۭا كَمَا لَهُمْ ءَالِهَةٌۭ ۚ قَالَ إِنَّكُمْ قَوْمٌۭ تَجْهَلُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے بنی اسرائیل کو دریا کے پار اتارا تو وہ ایسے لوگوں کے پاس جا پہنچے جو اپنے بتوں (کی عبادت) کے لیے بیٹھے رہتے تھے۔ (بنی اسرائیل) کہنے لگے کہ موسیٰ جیسے ان لوگوں کے معبود ہیں۔ ہمارے لیے بھی ایک معبود بنا دو۔ موسیٰ نے کہا کہ تم بڑے ہی جاہل لوگ ہو",
    },
    words: [
      { id: '7:138:1', arabic: "وَجَـٰوَزْنَا", transliteration: "wajāwaznā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We led across", ur: "اور ہم led across" } },
      { id: '7:138:2', arabic: "بِبَنِىٓ", transliteration: "bibanī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(the) Children", ur: "(the) اولاد" } },
      { id: '7:138:3', arabic: "إِسْرَٰٓءِيلَ", transliteration: "is'rāīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Israel", ur: "(of) Israel" } },
      { id: '7:138:4', arabic: "ٱلْبَحْرَ", transliteration: "l-baḥra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sea", ur: "the sea" } },
      { id: '7:138:5', arabic: "فَأَتَوْا۟", transliteration: "fa-ataw", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then they came", ur: "پھر وہ لوگ came" } },
      { id: '7:138:6', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "upon", ur: "پر" } },
      { id: '7:138:7', arabic: "قَوْمٍۢ", transliteration: "qawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a people", ur: "a لوگ" } },
      { id: '7:138:8', arabic: "يَعْكُفُونَ", transliteration: "yaʿkufūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "devoted", ur: "devoted" } },
      { id: '7:138:9', arabic: "عَلَىٰٓ", transliteration: "ʿalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '7:138:10', arabic: "أَصْنَامٍۢ", transliteration: "aṣnāmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "idols", ur: "idols" } },
      { id: '7:138:11', arabic: "لَّهُمْ ۚ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of theirs", ur: "of theirs" } },
      { id: '7:138:12', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '7:138:13', arabic: "يَـٰمُوسَى", transliteration: "yāmūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "O Musa", ur: "اے Musa" } },
      { id: '7:138:14', arabic: "ٱجْعَل", transliteration: "ij'ʿal", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Make", ur: "Make" } },
      { id: '7:138:15', arabic: "لَّنَآ", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for us", ur: "for us" } },
      { id: '7:138:16', arabic: "إِلَـٰهًۭا", transliteration: "ilāhan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a god", ur: "a اللہ" } },
      { id: '7:138:17', arabic: "كَمَا", transliteration: "kamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like what", ur: "like کیا" } },
      { id: '7:138:18', arabic: "لَهُمْ", transliteration: "lahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they have", ur: "وہ لوگ have" } },
      { id: '7:138:19', arabic: "ءَالِهَةٌۭ ۚ", transliteration: "ālihatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gods", ur: "gods" } },
      { id: '7:138:20', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:138:21', arabic: "إِنَّكُمْ", transliteration: "innakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, you", ur: "بیشک, تم" } },
      { id: '7:138:22', arabic: "قَوْمٌۭ", transliteration: "qawmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) a people", ur: "(are) a لوگ" } },
      { id: '7:138:23', arabic: "تَجْهَلُونَ", transliteration: "tajhalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "ignorant", ur: "ignorant" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'فعل + فاعل' }
      ],
    },
  },
  139: {
    text: "إِنَّ هَـٰٓؤُلَآءِ مُتَبَّرٌۭ مَّا هُمْ فِيهِ وَبَـٰطِلٌۭ مَّا كَانُوا۟ يَعْمَلُونَ",
    translation: {
      en: "",
      ur: "یہ لوگ جس (شغل) میں (پھنسے ہوئے) ہیں وہ برباد ہونے والا ہے اور جو کام یہ کرتے ہیں سب بیہودہ ہیں",
    },
    words: [
      { id: '7:139:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:139:2', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "these", ur: "these" } },
      { id: '7:139:3', arabic: "مُتَبَّرٌۭ", transliteration: "mutabbarun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "destroyed", ur: "destroyed" } },
      { id: '7:139:4', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) what", ur: "(is) کیا" } },
      { id: '7:139:5', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '7:139:6', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) in it", ur: "(are) میں it" } },
      { id: '7:139:7', arabic: "وَبَـٰطِلٌۭ", transliteration: "wabāṭilun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and vain", ur: "اور vain" } },
      { id: '7:139:8', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) what", ur: "(is) کیا" } },
      { id: '7:139:9', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '7:139:10', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "do", ur: "do" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  140: {
    text: "قَالَ أَغَيْرَ ٱللَّهِ أَبْغِيكُمْ إِلَـٰهًۭا وَهُوَ فَضَّلَكُمْ عَلَى ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "(اور یہ بھی) کہا کہ بھلا میں خدا کے سوا تمہارے لیے کوئی اور معبود تلاش کروں حالانکہ اس نے تم کو تمام اہل عالم پر فضیلت بخشی ہے",
    },
    words: [
      { id: '7:140:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:140:2', arabic: "أَغَيْرَ", transliteration: "aghayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Should other than", ur: "Should other than" } },
      { id: '7:140:3', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:140:4', arabic: "أَبْغِيكُمْ", transliteration: "abghīkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I seek for you", ur: "میں seek for تم" } },
      { id: '7:140:5', arabic: "إِلَـٰهًۭا", transliteration: "ilāhan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a god", ur: "a اللہ" } },
      { id: '7:140:6', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while He", ur: "while وہ" } },
      { id: '7:140:7', arabic: "فَضَّلَكُمْ", transliteration: "faḍḍalakum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "has preferred you", ur: "has preferred تم" } },
      { id: '7:140:8', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '7:140:9', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the worlds", ur: "the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  141: {
    text: "وَإِذْ أَنجَيْنَـٰكُم مِّنْ ءَالِ فِرْعَوْنَ يَسُومُونَكُمْ سُوٓءَ ٱلْعَذَابِ ۖ يُقَتِّلُونَ أَبْنَآءَكُمْ وَيَسْتَحْيُونَ نِسَآءَكُمْ ۚ وَفِى ذَٰلِكُم بَلَآءٌۭ مِّن رَّبِّكُمْ عَظِيمٌۭ",
    translation: {
      en: "",
      ur: "(اور ہمارے ان احسانوں کو یاد کرو) جب ہم نے تم کو فرعونیوں (کے ہاتھ) سے نجات بخشی وہ لوگ تم کو بڑا دکھ دیتے تھے۔ تمہارے بیٹوں کو قتل کر ڈالتے تھے اور بیٹیوں کو زندہ رہنے دیتے تھے۔ اور اس میں تمہارے پروردگار کی طرف سے سخت آزمائش تھی",
    },
    words: [
      { id: '7:141:1', arabic: "وَإِذْ", transliteration: "wa-idh", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:141:2', arabic: "أَنجَيْنَـٰكُم", transliteration: "anjaynākum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We saved you", ur: "ہم saved تم" } },
      { id: '7:141:3', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:141:4', arabic: "ءَالِ", transliteration: "āli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) people", ur: "(the) لوگ" } },
      { id: '7:141:5', arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Firaun", ur: "(of) Firaun" } },
      { id: '7:141:6', arabic: "يَسُومُونَكُمْ", transliteration: "yasūmūnakum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "who were afflicting you", ur: "جو were afflicting تم" } },
      { id: '7:141:7', arabic: "سُوٓءَ", transliteration: "sūa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) worst", ur: "(ساتھ) worst" } },
      { id: '7:141:8', arabic: "ٱلْعَذَابِ ۖ", transliteration: "l-ʿadhābi", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "(of) torment", ur: "(of) torment" } },
      { id: '7:141:9', arabic: "يُقَتِّلُونَ", transliteration: "yuqattilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they were killing", ur: "وہ لوگ were killing" } },
      { id: '7:141:10', arabic: "أَبْنَآءَكُمْ", transliteration: "abnāakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your sons", ur: "your sons" } },
      { id: '7:141:11', arabic: "وَيَسْتَحْيُونَ", transliteration: "wayastaḥyūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and letting live", ur: "اور letting live" } },
      { id: '7:141:12', arabic: "نِسَآءَكُمْ ۚ", transliteration: "nisāakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your women", ur: "your women" } },
      { id: '7:141:13', arabic: "وَفِى", transliteration: "wafī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And in", ur: "اور میں" } },
      { id: '7:141:14', arabic: "ذَٰلِكُم", transliteration: "dhālikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:141:15', arabic: "بَلَآءٌۭ", transliteration: "balāon", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) a trial", ur: "(was) a trial" } },
      { id: '7:141:16', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:141:17', arabic: "رَّبِّكُمْ", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:141:18', arabic: "عَظِيمٌۭ", transliteration: "ʿaẓīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'موصوف + صفت' }
      ],
    },
  },
  142: {
    text: "۞ وَوَٰعَدْنَا مُوسَىٰ ثَلَـٰثِينَ لَيْلَةًۭ وَأَتْمَمْنَـٰهَا بِعَشْرٍۢ فَتَمَّ مِيقَـٰتُ رَبِّهِۦٓ أَرْبَعِينَ لَيْلَةًۭ ۚ وَقَالَ مُوسَىٰ لِأَخِيهِ هَـٰرُونَ ٱخْلُفْنِى فِى قَوْمِى وَأَصْلِحْ وَلَا تَتَّبِعْ سَبِيلَ ٱلْمُفْسِدِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے موسیٰ سے تیس رات کی میعاد مقرر کی۔ اور اس دس (راتیں) اور ملا کر اسے پورا (چلّہ) کردیا تو اس کے پروردگار کی چالیس رات کی میعاد پوری ہوگئی۔ اور موسیٰ نے اپنے بھائی ہارون سے کہا کہ میرے (کوہِٰ طور پر جانے کے) بعد تم میری قوم میں میرے جانشین ہو (ان کی) اصلاح کرتے رہنا ٹھیک اور شریروں کے رستے نہ چلنا",
    },
    words: [
      { id: '7:142:1', arabic: "۞ وَوَٰعَدْنَا", transliteration: "wawāʿadnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "And We appointed", ur: "اور ہم appointed" } },
      { id: '7:142:2', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "(for) Musa", ur: "(for) Musa" } },
      { id: '7:142:3', arabic: "ثَلَـٰثِينَ", transliteration: "thalāthīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "thirty", ur: "thirty" } },
      { id: '7:142:4', arabic: "لَيْلَةًۭ", transliteration: "laylatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "nights", ur: "nights" } },
      { id: '7:142:5', arabic: "وَأَتْمَمْنَـٰهَا", transliteration: "wa-atmamnāhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We completed them", ur: "اور ہم completed them" } },
      { id: '7:142:6', arabic: "بِعَشْرٍۢ", transliteration: "biʿashrin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with ten (more)", ur: "ساتھ ten (more)" } },
      { id: '7:142:7', arabic: "فَتَمَّ", transliteration: "fatamma", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so was completed", ur: "so was completed" } },
      { id: '7:142:8', arabic: "مِيقَـٰتُ", transliteration: "mīqātu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) set term", ur: "(the) set term" } },
      { id: '7:142:9', arabic: "رَبِّهِۦٓ", transliteration: "rabbihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) his Lord", ur: "(of) his رب" } },
      { id: '7:142:10', arabic: "أَرْبَعِينَ", transliteration: "arbaʿīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) forty", ur: "(of) forty" } },
      { id: '7:142:11', arabic: "لَيْلَةًۭ ۚ", transliteration: "laylatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "night(s)", ur: "رات(s)" } },
      { id: '7:142:12', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And said", ur: "اور کہا" } },
      { id: '7:142:13', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '7:142:14', arabic: "لِأَخِيهِ", transliteration: "li-akhīhi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to his brother", ur: "کو his brother" } },
      { id: '7:142:15', arabic: "هَـٰرُونَ", transliteration: "hārūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Harun", ur: "Harun" } },
      { id: '7:142:16', arabic: "ٱخْلُفْنِى", transliteration: "ukh'luf'nī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Take my place", ur: "Take my place" } },
      { id: '7:142:17', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:142:18', arabic: "قَوْمِى", transliteration: "qawmī", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "my people", ur: "my لوگ" } },
      { id: '7:142:19', arabic: "وَأَصْلِحْ", transliteration: "wa-aṣliḥ", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and do right", ur: "اور do right" } },
      { id: '7:142:20', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '7:142:21', arabic: "تَتَّبِعْ", transliteration: "tattabiʿ", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "follow", ur: "follow" } },
      { id: '7:142:22', arabic: "سَبِيلَ", transliteration: "sabīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '7:142:23', arabic: "ٱلْمُفْسِدِينَ", transliteration: "l-muf'sidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the corrupters", ur: "(of) the corrupters" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  143: {
    text: "وَلَمَّا جَآءَ مُوسَىٰ لِمِيقَـٰتِنَا وَكَلَّمَهُۥ رَبُّهُۥ قَالَ رَبِّ أَرِنِىٓ أَنظُرْ إِلَيْكَ ۚ قَالَ لَن تَرَىٰنِى وَلَـٰكِنِ ٱنظُرْ إِلَى ٱلْجَبَلِ فَإِنِ ٱسْتَقَرَّ مَكَانَهُۥ فَسَوْفَ تَرَىٰنِى ۚ فَلَمَّا تَجَلَّىٰ رَبُّهُۥ لِلْجَبَلِ جَعَلَهُۥ دَكًّۭا وَخَرَّ مُوسَىٰ صَعِقًۭا ۚ فَلَمَّآ أَفَاقَ قَالَ سُبْحَـٰنَكَ تُبْتُ إِلَيْكَ وَأَنَا۠ أَوَّلُ ٱلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "اور جب موسیٰ ہمارے مقرر کیے ہوئے وقت پر (کوہ طور) پر پہنچے اور ان کے پروردگار نے ان سے کلام کیا تو کہنے لگے کہ اے پروردگار مجھے (جلوہ) دکھا کہ میں تیرا دیدار (بھی) دیکھوں۔ پروردگار نے کہا کہ تم مجھے ہرگز نہ دیکھ سکو گے۔ ہاں پہاڑ کی طرف دیکھتے رہو اگر یہ اپنی جگہ قائم رہا تو تم مجھے دیکھ سکو گے۔ جب ان کا پروردگار پہاڑ پر نمودار ہوا تو (تجلی انوارِ ربانی) نے اس کو ریزہ ریزہ کردیا اور موسیٰ بےہوش ہو کر گر پڑے۔ جب ہوش میں آئے تو کہنے لگے کہ تیری ذات پاک ہے اور میں تیرے حضور توبہ کرتا ہوں اور جو ایمان لانے والے ہیں ان میں سب سے اول ہوں",
    },
    words: [
      { id: '7:143:1', arabic: "وَلَمَّا", transliteration: "walammā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:143:2', arabic: "جَآءَ", transliteration: "jāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came", ur: "came" } },
      { id: '7:143:3', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '7:143:4', arabic: "لِمِيقَـٰتِنَا", transliteration: "limīqātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Our appointed place", ur: "کو Our appointed place" } },
      { id: '7:143:5', arabic: "وَكَلَّمَهُۥ", transliteration: "wakallamahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and spoke to him", ur: "اور spoke کو him" } },
      { id: '7:143:6', arabic: "رَبُّهُۥ", transliteration: "rabbuhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his Lord", ur: "his رب" } },
      { id: '7:143:7', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '7:143:8', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O my Lord", ur: "اے my رب" } },
      { id: '7:143:9', arabic: "أَرِنِىٓ", transliteration: "arinī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Show me", ur: "Show me" } },
      { id: '7:143:10', arabic: "أَنظُرْ", transliteration: "anẓur", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(that) I may look", ur: "(وہ) میں may look" } },
      { id: '7:143:11', arabic: "إِلَيْكَ ۚ", transliteration: "ilayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "at You", ur: "at تم" } },
      { id: '7:143:12', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:143:13', arabic: "لَن", transliteration: "lan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Never", ur: "Never" } },
      { id: '7:143:14', arabic: "تَرَىٰنِى", transliteration: "tarānī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you (can) see Me", ur: "تم (can) دیکھنا Me" } },
      { id: '7:143:15', arabic: "وَلَـٰكِنِ", transliteration: "walākini", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '7:143:16', arabic: "ٱنظُرْ", transliteration: "unẓur", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "look", ur: "look" } },
      { id: '7:143:17', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "at", ur: "at" } },
      { id: '7:143:18', arabic: "ٱلْجَبَلِ", transliteration: "l-jabali", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mountain", ur: "the mountain" } },
      { id: '7:143:19', arabic: "فَإِنِ", transliteration: "fa-ini", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "[then] if", ur: "[پھر] if" } },
      { id: '7:143:20', arabic: "ٱسْتَقَرَّ", transliteration: "is'taqarra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it remains", ur: "it remains" } },
      { id: '7:143:21', arabic: "مَكَانَهُۥ", transliteration: "makānahu", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "in its place", ur: "میں its place" } },
      { id: '7:143:22', arabic: "فَسَوْفَ", transliteration: "fasawfa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '7:143:23', arabic: "تَرَىٰنِى ۚ", transliteration: "tarānī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you (will) see Me", ur: "تم (will) دیکھنا Me" } },
      { id: '7:143:24', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But when", ur: "لیکن when" } },
      { id: '7:143:25', arabic: "تَجَلَّىٰ", transliteration: "tajallā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "revealed (His) Glory", ur: "revealed (His) Glory" } },
      { id: '7:143:26', arabic: "رَبُّهُۥ", transliteration: "rabbuhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his Lord", ur: "his رب" } },
      { id: '7:143:27', arabic: "لِلْجَبَلِ", transliteration: "lil'jabali", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the mountain", ur: "کو the mountain" } },
      { id: '7:143:28', arabic: "جَعَلَهُۥ", transliteration: "jaʿalahu", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "He made it", ur: "وہ made it" } },
      { id: '7:143:29', arabic: "دَكًّۭا", transliteration: "dakkan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "crumbled to dust", ur: "crumbled کو dust" } },
      { id: '7:143:30', arabic: "وَخَرَّ", transliteration: "wakharra", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and fell down", ur: "اور fell down" } },
      { id: '7:143:31', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '7:143:32', arabic: "صَعِقًۭا ۚ", transliteration: "ṣaʿiqan", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "unconscious", ur: "unconscious" } },
      { id: '7:143:33', arabic: "فَلَمَّآ", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:143:34', arabic: "أَفَاقَ", transliteration: "afāqa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he recovered", ur: "وہ recovered" } },
      { id: '7:143:35', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '7:143:36', arabic: "سُبْحَـٰنَكَ", transliteration: "sub'ḥānaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Glory be to You", ur: "Glory be کو تم" } },
      { id: '7:143:37', arabic: "تُبْتُ", transliteration: "tub'tu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I turn (in repentance)", ur: "میں turn (میں repentance)" } },
      { id: '7:143:38', arabic: "إِلَيْكَ", transliteration: "ilayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '7:143:39', arabic: "وَأَنَا۠", transliteration: "wa-anā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and I am", ur: "اور میں am" } },
      { id: '7:143:40', arabic: "أَوَّلُ", transliteration: "awwalu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) first", ur: "(the) first" } },
      { id: '7:143:41', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the believers", ur: "(of) the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'جار + مجرور' },
        { from: 25, to: 26, label: 'فعل + فاعل' },
        { from: 28, to: 29, label: 'فعل + فاعل' },
        { from: 31, to: 32, label: 'موصوف + صفت' },
        { from: 35, to: 36, label: 'فعل + فاعل' },
        { from: 37, to: 38, label: 'فعل + فاعل' },
        { from: 40, to: 41, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  144: {
    text: "قَالَ يَـٰمُوسَىٰٓ إِنِّى ٱصْطَفَيْتُكَ عَلَى ٱلنَّاسِ بِرِسَـٰلَـٰتِى وَبِكَلَـٰمِى فَخُذْ مَآ ءَاتَيْتُكَ وَكُن مِّنَ ٱلشَّـٰكِرِينَ",
    translation: {
      en: "",
      ur: "(خدا نے) فرمایا موسیٰ میں نے تم کو اپنے پیغام اور اپنے کلام سے لوگوں سے ممتاز کیا ہے۔ تو جو میں نے تم کو عطا کیا ہے اسے پکڑ رکھو اور (میرا) شکر بجالاؤ",
    },
    words: [
      { id: '7:144:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:144:2', arabic: "يَـٰمُوسَىٰٓ", transliteration: "yāmūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "O Musa", ur: "اے Musa" } },
      { id: '7:144:3', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I", ur: "بیشک, میں" } },
      { id: '7:144:4', arabic: "ٱصْطَفَيْتُكَ", transliteration: "iṣ'ṭafaytuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "have chosen you", ur: "have chosen تم" } },
      { id: '7:144:5', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '7:144:6', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '7:144:7', arabic: "بِرِسَـٰلَـٰتِى", transliteration: "birisālātī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with My Messages", ur: "ساتھ My Messages" } },
      { id: '7:144:8', arabic: "وَبِكَلَـٰمِى", transliteration: "wabikalāmī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and with My words", ur: "اور ساتھ My words" } },
      { id: '7:144:9', arabic: "فَخُذْ", transliteration: "fakhudh", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So take", ur: "So take" } },
      { id: '7:144:10', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:144:11', arabic: "ءَاتَيْتُكَ", transliteration: "ātaytuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I have given you", ur: "میں have given تم" } },
      { id: '7:144:12', arabic: "وَكُن", transliteration: "wakun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and be", ur: "اور be" } },
      { id: '7:144:13', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '7:144:14', arabic: "ٱلشَّـٰكِرِينَ", transliteration: "l-shākirīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the grateful", ur: "the grateful" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'موصوف + صفت' }
      ],
    },
  },
  145: {
    text: "وَكَتَبْنَا لَهُۥ فِى ٱلْأَلْوَاحِ مِن كُلِّ شَىْءٍۢ مَّوْعِظَةًۭ وَتَفْصِيلًۭا لِّكُلِّ شَىْءٍۢ فَخُذْهَا بِقُوَّةٍۢ وَأْمُرْ قَوْمَكَ يَأْخُذُوا۟ بِأَحْسَنِهَا ۚ سَأُو۟رِيكُمْ دَارَ ٱلْفَـٰسِقِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے (تورات) کی تختیوں میں ان کے لیے ہر قسم کی نصیحت اور ہر چیز کی تفصیل لکھ دی پھر (ارشاد فرمایا کہ) اسے زور سے پکڑے رہو اور اپنی قوم سے بھی کہہ دو کہ ان باتوں کو جو اس میں (مندرج ہیں اور) بہت بہتر ہیں پکڑے رہیں۔ میں عنقریب تم کو نافرمان لوگوں کا گھر دکھاؤں گا",
    },
    words: [
      { id: '7:145:1', arabic: "وَكَتَبْنَا", transliteration: "wakatabnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We ordained (laws)", ur: "اور ہم ordained (laws)" } },
      { id: '7:145:2', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '7:145:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:145:4', arabic: "ٱلْأَلْوَاحِ", transliteration: "l-alwāḥi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the tablets ", ur: "the tablets " } },
      { id: '7:145:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:145:6', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '7:145:7', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '7:145:8', arabic: "مَّوْعِظَةًۭ", transliteration: "mawʿiẓatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an instruction", ur: "an instruction" } },
      { id: '7:145:9', arabic: "وَتَفْصِيلًۭا", transliteration: "watafṣīlan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and explanation", ur: "اور explanation" } },
      { id: '7:145:10', arabic: "لِّكُلِّ", transliteration: "likulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for every", ur: "for ہر" } },
      { id: '7:145:11', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '7:145:12', arabic: "فَخُذْهَا", transliteration: "fakhudh'hā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So take them", ur: "So take them" } },
      { id: '7:145:13', arabic: "بِقُوَّةٍۢ", transliteration: "biquwwatin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with firmness", ur: "ساتھ firmness" } },
      { id: '7:145:14', arabic: "وَأْمُرْ", transliteration: "wamur", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and order", ur: "اور order" } },
      { id: '7:145:15', arabic: "قَوْمَكَ", transliteration: "qawmaka", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "your people", ur: "your لوگ" } },
      { id: '7:145:16', arabic: "يَأْخُذُوا۟", transliteration: "yakhudhū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) take", ur: "(کو) take" } },
      { id: '7:145:17', arabic: "بِأَحْسَنِهَا ۚ", transliteration: "bi-aḥsanihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(the) best of it", ur: "(the) best of it" } },
      { id: '7:145:18', arabic: "سَأُو۟رِيكُمْ", transliteration: "sa-urīkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will show you", ur: "میں will show تم" } },
      { id: '7:145:19', arabic: "دَارَ", transliteration: "dāra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) home", ur: "(the) home" } },
      { id: '7:145:20', arabic: "ٱلْفَـٰسِقِينَ", transliteration: "l-fāsiqīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the defiantly disobedient", ur: "(of) the defiantly disobedient" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  146: {
    text: "سَأَصْرِفُ عَنْ ءَايَـٰتِىَ ٱلَّذِينَ يَتَكَبَّرُونَ فِى ٱلْأَرْضِ بِغَيْرِ ٱلْحَقِّ وَإِن يَرَوْا۟ كُلَّ ءَايَةٍۢ لَّا يُؤْمِنُوا۟ بِهَا وَإِن يَرَوْا۟ سَبِيلَ ٱلرُّشْدِ لَا يَتَّخِذُوهُ سَبِيلًۭا وَإِن يَرَوْا۟ سَبِيلَ ٱلْغَىِّ يَتَّخِذُوهُ سَبِيلًۭا ۚ ذَٰلِكَ بِأَنَّهُمْ كَذَّبُوا۟ بِـَٔايَـٰتِنَا وَكَانُوا۟ عَنْهَا غَـٰفِلِينَ",
    translation: {
      en: "",
      ur: "جو لوگ زمین میں ناحق غرور کرتے ہیں ان کو اپنی آیتوں سے پھیر دوں گا۔ اگر یہ سب نشانیاں بھی دیکھ لیں تب بھی ان پر ایمان نہ لائیں اور اگر راستی کا رستہ دیکھیں تو اسے (اپنا) رستہ نہ بنائیں۔ اور اگر گمراہی کی راہ دیکھیں تو اسے رستہ بنالیں۔ یہ اس لیے کہ انہوں نے ہماری آیات کو جھٹلایا اور ان سے غفلت کرتے رہے",
    },
    words: [
      { id: '7:146:1', arabic: "سَأَصْرِفُ", transliteration: "sa-aṣrifu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will turn away", ur: "میں will turn away" } },
      { id: '7:146:2', arabic: "عَنْ", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:146:3', arabic: "ءَايَـٰتِىَ", transliteration: "āyātiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My Signs", ur: "My نشانیاں" } },
      { id: '7:146:4', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '7:146:5', arabic: "يَتَكَبَّرُونَ", transliteration: "yatakabbarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are arrogant", ur: "are arrogant" } },
      { id: '7:146:6', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:146:7', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '7:146:8', arabic: "بِغَيْرِ", transliteration: "bighayri", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "without", ur: "without" } },
      { id: '7:146:9', arabic: "ٱلْحَقِّ", transliteration: "l-ḥaqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] right", ur: "[the] right" } },
      { id: '7:146:10', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and if", ur: "اور if" } },
      { id: '7:146:11', arabic: "يَرَوْا۟", transliteration: "yaraw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they see", ur: "وہ لوگ دیکھنا" } },
      { id: '7:146:12', arabic: "كُلَّ", transliteration: "kulla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '7:146:13', arabic: "ءَايَةٍۢ", transliteration: "āyatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sign", ur: "نشانی" } },
      { id: '7:146:14', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:146:15', arabic: "يُؤْمِنُوا۟", transliteration: "yu'minū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will) they believe", ur: "(will) وہ لوگ ایمان لانا" } },
      { id: '7:146:16', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '7:146:17', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '7:146:18', arabic: "يَرَوْا۟", transliteration: "yaraw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they see", ur: "وہ لوگ دیکھنا" } },
      { id: '7:146:19', arabic: "سَبِيلَ", transliteration: "sabīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '7:146:20', arabic: "ٱلرُّشْدِ", transliteration: "l-rush'di", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the righteousness", ur: "(of) the righteousness" } },
      { id: '7:146:21', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:146:22', arabic: "يَتَّخِذُوهُ", transliteration: "yattakhidhūhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will) they take it", ur: "(will) وہ لوگ take it" } },
      { id: '7:146:23', arabic: "سَبِيلًۭا", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a way", ur: "(as) a راستہ" } },
      { id: '7:146:24', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but if", ur: "لیکن if" } },
      { id: '7:146:25', arabic: "يَرَوْا۟", transliteration: "yaraw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they see", ur: "وہ لوگ دیکھنا" } },
      { id: '7:146:26', arabic: "سَبِيلَ", transliteration: "sabīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '7:146:27', arabic: "ٱلْغَىِّ", transliteration: "l-ghayi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) [the] error", ur: "(of) [the] error" } },
      { id: '7:146:28', arabic: "يَتَّخِذُوهُ", transliteration: "yattakhidhūhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will take it", ur: "وہ لوگ will take it" } },
      { id: '7:146:29', arabic: "سَبِيلًۭا ۚ", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a way", ur: "(as) a راستہ" } },
      { id: '7:146:30', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '7:146:31', arabic: "بِأَنَّهُمْ", transliteration: "bi-annahum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) because they", ur: "(is) because وہ لوگ" } },
      { id: '7:146:32', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '7:146:33', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Our Signs", ur: "Our نشانیاں" } },
      { id: '7:146:34', arabic: "وَكَانُوا۟", transliteration: "wakānū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and they were", ur: "اور وہ لوگ were" } },
      { id: '7:146:35', arabic: "عَنْهَا", transliteration: "ʿanhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of them", ur: "of them" } },
      { id: '7:146:36', arabic: "غَـٰفِلِينَ", transliteration: "ghāfilīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "heedless", ur: "heedless" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'مضاف + مضاف إليه' },
        { from: 21, to: 22, label: 'نفی + فعل' },
        { from: 22, to: 23, label: 'فعل + فاعل' },
        { from: 25, to: 26, label: 'فعل + فاعل' },
        { from: 28, to: 29, label: 'فعل + فاعل' }
      ],
    },
  },
  147: {
    text: "وَٱلَّذِينَ كَذَّبُوا۟ بِـَٔايَـٰتِنَا وَلِقَآءِ ٱلْـَٔاخِرَةِ حَبِطَتْ أَعْمَـٰلُهُمْ ۚ هَلْ يُجْزَوْنَ إِلَّا مَا كَانُوا۟ يَعْمَلُونَ",
    translation: {
      en: "",
      ur: "اور جن لوگوں نے ہماری آیتوں اور آخرت کے آنے کو جھٹلایا ان کے اعمال ضائع ہوجائیں گے۔ یہ جیسے عمل کرتے ہیں ویسا ہی ان کو بدلہ ملے گا",
    },
    words: [
      { id: '7:147:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '7:147:2', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '7:147:3', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Our Signs", ur: "Our نشانیاں" } },
      { id: '7:147:4', arabic: "وَلِقَآءِ", transliteration: "waliqāi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (the) meeting", ur: "اور (the) meeting" } },
      { id: '7:147:5', arabic: "ٱلْـَٔاخِرَةِ", transliteration: "l-ākhirati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Hereafter ", ur: "(of) the آخرت " } },
      { id: '7:147:6', arabic: "حَبِطَتْ", transliteration: "ḥabiṭat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "worthless", ur: "worthless" } },
      { id: '7:147:7', arabic: "أَعْمَـٰلُهُمْ ۚ", transliteration: "aʿmāluhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) their deeds", ur: "(are) their deeds" } },
      { id: '7:147:8', arabic: "هَلْ", transliteration: "hal", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Will", ur: "Will" } },
      { id: '7:147:9', arabic: "يُجْزَوْنَ", transliteration: "yuj'zawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they be recompensed", ur: "وہ لوگ be recompensed" } },
      { id: '7:147:10', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:147:11', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(for) what", ur: "(for) کیا" } },
      { id: '7:147:12', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '7:147:13', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "do", ur: "do" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'موصول + صلة' }
      ],
    },
  },
  148: {
    text: "وَٱتَّخَذَ قَوْمُ مُوسَىٰ مِنۢ بَعْدِهِۦ مِنْ حُلِيِّهِمْ عِجْلًۭا جَسَدًۭا لَّهُۥ خُوَارٌ ۚ أَلَمْ يَرَوْا۟ أَنَّهُۥ لَا يُكَلِّمُهُمْ وَلَا يَهْدِيهِمْ سَبِيلًا ۘ ٱتَّخَذُوهُ وَكَانُوا۟ ظَـٰلِمِينَ",
    translation: {
      en: "",
      ur: "اور قوم موسیٰ نے موسیٰ کے بعد اپنے زیور کا ایک بچھڑا بنا لیا (وہ) ایک جسم (تھا) جس میں سے بیل کی آواز نکلتی تھی۔ ان لوگوں نے یہ نہ دیکھا کہ وہ نہ ان سے بات کرسکتا ہے اور نہ ان کو راستہ دکھا سکتا ہے۔ اس کو انہوں نے (معبود) بنالیا اور (اپنے حق میں) ظلم کیا",
    },
    words: [
      { id: '7:148:1', arabic: "وَٱتَّخَذَ", transliteration: "wa-ittakhadha", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And took", ur: "اور took" } },
      { id: '7:148:2', arabic: "قَوْمُ", transliteration: "qawmu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) people", ur: "(the) لوگ" } },
      { id: '7:148:3', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "(of) Musa", ur: "(of) Musa" } },
      { id: '7:148:4', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:148:5', arabic: "بَعْدِهِۦ", transliteration: "baʿdihi", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after him", ur: "بعد him" } },
      { id: '7:148:6', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:148:7', arabic: "حُلِيِّهِمْ", transliteration: "ḥuliyyihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their ornaments", ur: "their ornaments" } },
      { id: '7:148:8', arabic: "عِجْلًۭا", transliteration: "ʿij'lan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a calf ", ur: "a calf " } },
      { id: '7:148:9', arabic: "جَسَدًۭا", transliteration: "jasadan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an image", ur: "an image" } },
      { id: '7:148:10', arabic: "لَّهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[for] it", ur: "[for] it" } },
      { id: '7:148:11', arabic: "خُوَارٌ ۚ", transliteration: "khuwārun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(had) a lowing sound", ur: "(had) a lowing sound" } },
      { id: '7:148:12', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Did not", ur: "Did نہیں" } },
      { id: '7:148:13', arabic: "يَرَوْا۟", transliteration: "yaraw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they see", ur: "وہ لوگ دیکھنا" } },
      { id: '7:148:14', arabic: "أَنَّهُۥ", transliteration: "annahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that it", ur: "وہ it" } },
      { id: '7:148:15', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(could) not", ur: "(could) نہیں" } },
      { id: '7:148:16', arabic: "يُكَلِّمُهُمْ", transliteration: "yukallimuhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "speak to them", ur: "speak کو them" } },
      { id: '7:148:17', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '7:148:18', arabic: "يَهْدِيهِمْ", transliteration: "yahdīhim", pos: ['V'], posLabel: 'V', root: "ه د ي", meaning: { en: "guide them", ur: "guide them" } },
      { id: '7:148:19', arabic: "سَبِيلًا ۘ", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) a way", ur: "(کو) a راستہ" } },
      { id: '7:148:20', arabic: "ٱتَّخَذُوهُ", transliteration: "ittakhadhūhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They took it (for worship)", ur: "وہ لوگ took it (for عبادت)" } },
      { id: '7:148:21', arabic: "وَكَانُوا۟", transliteration: "wakānū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and they were", ur: "اور وہ لوگ were" } },
      { id: '7:148:22', arabic: "ظَـٰلِمِينَ", transliteration: "ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wrongdoers", ur: "wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'نفی + فعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' }
      ],
    },
  },
  149: {
    text: "وَلَمَّا سُقِطَ فِىٓ أَيْدِيهِمْ وَرَأَوْا۟ أَنَّهُمْ قَدْ ضَلُّوا۟ قَالُوا۟ لَئِن لَّمْ يَرْحَمْنَا رَبُّنَا وَيَغْفِرْ لَنَا لَنَكُونَنَّ مِنَ ٱلْخَـٰسِرِينَ",
    translation: {
      en: "",
      ur: "اور جب وہ نادم ہوئے اور دیکھا کہ گمراہ ہوگئے ہیں تو کہنے لگے کہ اگر ہمارا پروردگار ہم پر رحم نہیں کرے گا اور ہم کو معاف نہیں فرمائے گا تو ہم برباد ہوجائیں گے",
    },
    words: [
      { id: '7:149:1', arabic: "وَلَمَّا", transliteration: "walammā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:149:2', arabic: "سُقِطَ", transliteration: "suqiṭa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(it was made to) fall", ur: "(it was made کو) fall" } },
      { id: '7:149:3', arabic: "فِىٓ", transliteration: "fī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "into", ur: "into" } },
      { id: '7:149:4', arabic: "أَيْدِيهِمْ", transliteration: "aydīhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their hands", ur: "their hands" } },
      { id: '7:149:5', arabic: "وَرَأَوْا۟", transliteration: "wara-aw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they saw", ur: "اور وہ لوگ saw" } },
      { id: '7:149:6', arabic: "أَنَّهُمْ", transliteration: "annahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that they", ur: "وہ وہ لوگ" } },
      { id: '7:149:7', arabic: "قَدْ", transliteration: "qad", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(had) indeed", ur: "(had) بیشک" } },
      { id: '7:149:8', arabic: "ضَلُّوا۟", transliteration: "ḍallū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gone astray", ur: "gone astray" } },
      { id: '7:149:9', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they said", ur: "وہ لوگ کہا" } },
      { id: '7:149:10', arabic: "لَئِن", transliteration: "la-in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '7:149:11', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:149:12', arabic: "يَرْحَمْنَا", transliteration: "yarḥamnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has Mercy on us", ur: "has رحمت پر us" } },
      { id: '7:149:13', arabic: "رَبُّنَا", transliteration: "rabbunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Lord", ur: "Our رب" } },
      { id: '7:149:14', arabic: "وَيَغْفِرْ", transliteration: "wayaghfir", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and forgive", ur: "اور forgive" } },
      { id: '7:149:15', arabic: "لَنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[for] us", ur: "[for] us" } },
      { id: '7:149:16', arabic: "لَنَكُونَنَّ", transliteration: "lanakūnanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we will surely be", ur: "ہم will یقیناً be" } },
      { id: '7:149:17', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '7:149:18', arabic: "ٱلْخَـٰسِرِينَ", transliteration: "l-khāsirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the losers", ur: "the losers" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  150: {
    text: "وَلَمَّا رَجَعَ مُوسَىٰٓ إِلَىٰ قَوْمِهِۦ غَضْبَـٰنَ أَسِفًۭا قَالَ بِئْسَمَا خَلَفْتُمُونِى مِنۢ بَعْدِىٓ ۖ أَعَجِلْتُمْ أَمْرَ رَبِّكُمْ ۖ وَأَلْقَى ٱلْأَلْوَاحَ وَأَخَذَ بِرَأْسِ أَخِيهِ يَجُرُّهُۥٓ إِلَيْهِ ۚ قَالَ ٱبْنَ أُمَّ إِنَّ ٱلْقَوْمَ ٱسْتَضْعَفُونِى وَكَادُوا۟ يَقْتُلُونَنِى فَلَا تُشْمِتْ بِىَ ٱلْأَعْدَآءَ وَلَا تَجْعَلْنِى مَعَ ٱلْقَوْمِ ٱلظَّـٰلِمِينَ",
    translation: {
      en: "",
      ur: "اور جب موسیٰ اپنی قوم میں نہایت غصے اور افسوس کی حالت میں واپس آئے۔ تو کہنے لگے کہ تم نے میرے بعد بہت ہی بداطواری کی۔ کیا تم نے اپنے پروردگار کا حکم (یعنی میرا اپنے پاس آنا) جلد چاہا (یہ کہا) اور (شدت غضب سے تورات کی) تختیاں ڈال دیں اور اپنے بھائی کے سر (کے بالوں) کو پکڑ کر اپنی طرف کھینچنے لگے۔ انہوں نے کہا کہ بھائی جان لوگ تو مجھے کمزور سمجھتے تھے اور قریب تھا کہ قتل کردیں۔ تو ایسا کام نہ کیجیے کہ دشمن مجھ پر ہنسیں اور مجھے ظالم لوگوں میں مت ملایئے",
    },
    words: [
      { id: '7:150:1', arabic: "وَلَمَّا", transliteration: "walammā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:150:2', arabic: "رَجَعَ", transliteration: "rajaʿa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "returned", ur: "returned" } },
      { id: '7:150:3', arabic: "مُوسَىٰٓ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '7:150:4', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '7:150:5', arabic: "قَوْمِهِۦ", transliteration: "qawmihi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "his people ", ur: "his لوگ " } },
      { id: '7:150:6', arabic: "غَضْبَـٰنَ", transliteration: "ghaḍbāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "angry", ur: "angry" } },
      { id: '7:150:7', arabic: "أَسِفًۭا", transliteration: "asifan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "and grieved", ur: "اور grieved" } },
      { id: '7:150:8', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '7:150:9', arabic: "بِئْسَمَا", transliteration: "bi'samā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Evil is what", ur: "برا is کیا" } },
      { id: '7:150:10', arabic: "خَلَفْتُمُونِى", transliteration: "khalaftumūnī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have done in my place", ur: "تم have done میں my place" } },
      { id: '7:150:11', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:150:12', arabic: "بَعْدِىٓ ۖ", transliteration: "baʿdī", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after me", ur: "بعد me" } },
      { id: '7:150:13', arabic: "أَعَجِلْتُمْ", transliteration: "aʿajil'tum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Were you impatient", ur: "Were تم impatient" } },
      { id: '7:150:14', arabic: "أَمْرَ", transliteration: "amra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(over the) matter", ur: "(اوپر the) matter" } },
      { id: '7:150:15', arabic: "رَبِّكُمْ ۖ", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) your Lord", ur: "(of) your رب" } },
      { id: '7:150:16', arabic: "وَأَلْقَى", transliteration: "wa-alqā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And he cast down", ur: "اور وہ cast down" } },
      { id: '7:150:17', arabic: "ٱلْأَلْوَاحَ", transliteration: "l-alwāḥa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the tablets", ur: "the tablets" } },
      { id: '7:150:18', arabic: "وَأَخَذَ", transliteration: "wa-akhadha", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and seized", ur: "اور seized" } },
      { id: '7:150:19', arabic: "بِرَأْسِ", transliteration: "birasi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by head", ur: "by head" } },
      { id: '7:150:20', arabic: "أَخِيهِ", transliteration: "akhīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his brother", ur: "his brother" } },
      { id: '7:150:21', arabic: "يَجُرُّهُۥٓ", transliteration: "yajurruhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "dragging him", ur: "dragging him" } },
      { id: '7:150:22', arabic: "إِلَيْهِ ۚ", transliteration: "ilayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to himself", ur: "کو himself" } },
      { id: '7:150:23', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:150:24', arabic: "ٱبْنَ", transliteration: "ib'na", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O son", ur: "اے بیٹا" } },
      { id: '7:150:25', arabic: "أُمَّ", transliteration: "umma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) my mother", ur: "(of) my ماں" } },
      { id: '7:150:26', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:150:27', arabic: "ٱلْقَوْمَ", transliteration: "l-qawma", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "the people", ur: "the لوگ" } },
      { id: '7:150:28', arabic: "ٱسْتَضْعَفُونِى", transliteration: "is'taḍʿafūnī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "considered me weak", ur: "considered me weak" } },
      { id: '7:150:29', arabic: "وَكَادُوا۟", transliteration: "wakādū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and were about to", ur: "اور were about کو" } },
      { id: '7:150:30', arabic: "يَقْتُلُونَنِى", transliteration: "yaqtulūnanī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "kill me", ur: "kill me" } },
      { id: '7:150:31', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So (let) not", ur: "So (let) نہیں" } },
      { id: '7:150:32', arabic: "تُشْمِتْ", transliteration: "tush'mit", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "rejoice", ur: "rejoice" } },
      { id: '7:150:33', arabic: "بِىَ", transliteration: "biya", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "over me", ur: "اوپر me" } },
      { id: '7:150:34', arabic: "ٱلْأَعْدَآءَ", transliteration: "l-aʿdāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the enemies", ur: "the enemies" } },
      { id: '7:150:35', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '7:150:36', arabic: "تَجْعَلْنِى", transliteration: "tajʿalnī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "place me", ur: "place me" } },
      { id: '7:150:37', arabic: "مَعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '7:150:38', arabic: "ٱلْقَوْمِ", transliteration: "l-qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "the people", ur: "the لوگ" } },
      { id: '7:150:39', arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(who are) wrongdoing", ur: "(جو are) wrongdoing" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'فعل + فاعل' },
        { from: 26, to: 27, label: 'فعل + فاعل' },
        { from: 33, to: 34, label: 'جار + مجرور' },
        { from: 36, to: 37, label: 'فعل + فاعل' },
        { from: 37, to: 38, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  151: {
    text: "قَالَ رَبِّ ٱغْفِرْ لِى وَلِأَخِى وَأَدْخِلْنَا فِى رَحْمَتِكَ ۖ وَأَنتَ أَرْحَمُ ٱلرَّٰحِمِينَ",
    translation: {
      en: "",
      ur: "تب انہوں نے دعا کی کہ اے میرے پروردگار مجھے اور میرے بھائی کو معاف فرما اور ہمیں اپنی رحمت میں داخل کر تو سب سے بڑھ کر رحم کرنے والا ہے",
    },
    words: [
      { id: '7:151:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:151:2', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O my Lord", ur: "اے my رب" } },
      { id: '7:151:3', arabic: "ٱغْفِرْ", transliteration: "igh'fir", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Forgive", ur: "Forgive" } },
      { id: '7:151:4', arabic: "لِى", transliteration: "lī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "me", ur: "me" } },
      { id: '7:151:5', arabic: "وَلِأَخِى", transliteration: "wali-akhī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and my brother", ur: "اور my brother" } },
      { id: '7:151:6', arabic: "وَأَدْخِلْنَا", transliteration: "wa-adkhil'nā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and admit us", ur: "اور admit us" } },
      { id: '7:151:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "into", ur: "into" } },
      { id: '7:151:8', arabic: "رَحْمَتِكَ ۖ", transliteration: "raḥmatika", pos: ['N'], posLabel: 'N', root: "ر ح م", meaning: { en: "Your Mercy", ur: "Your رحمت" } },
      { id: '7:151:9', arabic: "وَأَنتَ", transliteration: "wa-anta", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "for You", ur: "for تم" } },
      { id: '7:151:10', arabic: "أَرْحَمُ", transliteration: "arḥamu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(are) the Most Merciful", ur: "(are) the بہت مہربان" } },
      { id: '7:151:11', arabic: "ٱلرَّٰحِمِينَ", transliteration: "l-rāḥimīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(of) the merciful", ur: "(of) the merciful" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'موصوف + صفت' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  152: {
    text: "إِنَّ ٱلَّذِينَ ٱتَّخَذُوا۟ ٱلْعِجْلَ سَيَنَالُهُمْ غَضَبٌۭ مِّن رَّبِّهِمْ وَذِلَّةٌۭ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا ۚ وَكَذَٰلِكَ نَجْزِى ٱلْمُفْتَرِينَ",
    translation: {
      en: "",
      ur: "(خدا نے فرمایا کہ) جن لوگوں نے بچھڑے کو (معبود) بنا لیا تھا ان پر پروردگار کا غضب واقع ہوگا اور دنیا کی زندگی میں ذلت (نصیب ہوگی) اور ہم افتراء پردازوں کو ایسا ہی بدلہ دیا کرتے ہیں",
    },
    words: [
      { id: '7:152:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:152:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '7:152:3', arabic: "ٱتَّخَذُوا۟", transliteration: "ittakhadhū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "took", ur: "took" } },
      { id: '7:152:4', arabic: "ٱلْعِجْلَ", transliteration: "l-ʿij'la", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the calf", ur: "the calf" } },
      { id: '7:152:5', arabic: "سَيَنَالُهُمْ", transliteration: "sayanāluhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will reach them", ur: "will reach them" } },
      { id: '7:152:6', arabic: "غَضَبٌۭ", transliteration: "ghaḍabun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wrath", ur: "wrath" } },
      { id: '7:152:7', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:152:8', arabic: "رَّبِّهِمْ", transliteration: "rabbihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their Lord", ur: "their رب" } },
      { id: '7:152:9', arabic: "وَذِلَّةٌۭ", transliteration: "wadhillatun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and humiliation", ur: "اور humiliation" } },
      { id: '7:152:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:152:11', arabic: "ٱلْحَيَوٰةِ", transliteration: "l-ḥayati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the life", ur: "the زندگی" } },
      { id: '7:152:12', arabic: "ٱلدُّنْيَا ۚ", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the world", ur: "(of) the دنیا" } },
      { id: '7:152:13', arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And thus", ur: "اور thus" } },
      { id: '7:152:14', arabic: "نَجْزِى", transliteration: "najzī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We recompense", ur: "ہم recompense" } },
      { id: '7:152:15', arabic: "ٱلْمُفْتَرِينَ", transliteration: "l-muf'tarīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who invent (falsehood)", ur: "the ones جو invent (falsehood)" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  153: {
    text: "وَٱلَّذِينَ عَمِلُوا۟ ٱلسَّيِّـَٔاتِ ثُمَّ تَابُوا۟ مِنۢ بَعْدِهَا وَءَامَنُوٓا۟ إِنَّ رَبَّكَ مِنۢ بَعْدِهَا لَغَفُورٌۭ رَّحِيمٌۭ",
    translation: {
      en: "",
      ur: "اور جنہوں نے برے کام کیے پھر اس کے بعد توبہ کرلی اور ایمان لے آئے تو کچھ شک نہیں کہ تمہارا پروردگار اس کے بعد (بخش دے گا کہ وہ) بخشنے والا مہربان ہے",
    },
    words: [
      { id: '7:153:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '7:153:2', arabic: "عَمِلُوا۟", transliteration: "ʿamilū", pos: ['N'], posLabel: 'N', root: "ع م ل", meaning: { en: "do", ur: "do" } },
      { id: '7:153:3', arabic: "ٱلسَّيِّـَٔاتِ", transliteration: "l-sayiāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the evil deeds", ur: "the برا deeds" } },
      { id: '7:153:4', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '7:153:5', arabic: "تَابُوا۟", transliteration: "tābū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "repented", ur: "repented" } },
      { id: '7:153:6', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:153:7', arabic: "بَعْدِهَا", transliteration: "baʿdihā", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after that", ur: "بعد وہ" } },
      { id: '7:153:8', arabic: "وَءَامَنُوٓا۟", transliteration: "waāmanū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and believed", ur: "اور ایمان لائے" } },
      { id: '7:153:9', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "indeed", ur: "بیشک" } },
      { id: '7:153:10', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:153:11', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:153:12', arabic: "بَعْدِهَا", transliteration: "baʿdihā", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after that", ur: "بعد وہ" } },
      { id: '7:153:13', arabic: "لَغَفُورٌۭ", transliteration: "laghafūrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) surely Oft-Forgiving", ur: "(is) یقیناً Oft-Forgiving" } },
      { id: '7:153:14', arabic: "رَّحِيمٌۭ", transliteration: "raḥīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  154: {
    text: "وَلَمَّا سَكَتَ عَن مُّوسَى ٱلْغَضَبُ أَخَذَ ٱلْأَلْوَاحَ ۖ وَفِى نُسْخَتِهَا هُدًۭى وَرَحْمَةٌۭ لِّلَّذِينَ هُمْ لِرَبِّهِمْ يَرْهَبُونَ",
    translation: {
      en: "",
      ur: "اور جب موسیٰ کا غصہ فرو ہوا تو (تورات) کی تختیاں اٹھالیں اور جو کچھ ان میں لکھا تھا وہ ان لوگوں کے لیے جو اپنے پروردگار سے ڈرتے ہیں۔ ہدایت اور رحمت تھی",
    },
    words: [
      { id: '7:154:1', arabic: "وَلَمَّا", transliteration: "walammā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:154:2', arabic: "سَكَتَ", transliteration: "sakata", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "was calmed", ur: "was calmed" } },
      { id: '7:154:3', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:154:4', arabic: "مُّوسَى", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Musa", ur: "Musa" } },
      { id: '7:154:5', arabic: "ٱلْغَضَبُ", transliteration: "l-ghaḍabu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the anger", ur: "the anger" } },
      { id: '7:154:6', arabic: "أَخَذَ", transliteration: "akhadha", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he took (up)", ur: "وہ took (up)" } },
      { id: '7:154:7', arabic: "ٱلْأَلْوَاحَ ۖ", transliteration: "l-alwāḥa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the tablets", ur: "the tablets" } },
      { id: '7:154:8', arabic: "وَفِى", transliteration: "wafī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and in", ur: "اور میں" } },
      { id: '7:154:9', arabic: "نُسْخَتِهَا", transliteration: "nus'khatihā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "their inscription", ur: "their inscription" } },
      { id: '7:154:10', arabic: "هُدًۭى", transliteration: "hudan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) guidance", ur: "(was) guidance" } },
      { id: '7:154:11', arabic: "وَرَحْمَةٌۭ", transliteration: "waraḥmatun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and mercy", ur: "اور رحمت" } },
      { id: '7:154:12', arabic: "لِّلَّذِينَ", transliteration: "lilladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for those who", ur: "for جو لوگ" } },
      { id: '7:154:13', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "[they]", ur: "[وہ لوگ]" } },
      { id: '7:154:14', arabic: "لِرَبِّهِمْ", transliteration: "lirabbihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of their Lord", ur: "of their رب" } },
      { id: '7:154:15', arabic: "يَرْهَبُونَ", transliteration: "yarhabūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) fearful", ur: "(are) fearful" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  155: {
    text: "وَٱخْتَارَ مُوسَىٰ قَوْمَهُۥ سَبْعِينَ رَجُلًۭا لِّمِيقَـٰتِنَا ۖ فَلَمَّآ أَخَذَتْهُمُ ٱلرَّجْفَةُ قَالَ رَبِّ لَوْ شِئْتَ أَهْلَكْتَهُم مِّن قَبْلُ وَإِيَّـٰىَ ۖ أَتُهْلِكُنَا بِمَا فَعَلَ ٱلسُّفَهَآءُ مِنَّآ ۖ إِنْ هِىَ إِلَّا فِتْنَتُكَ تُضِلُّ بِهَا مَن تَشَآءُ وَتَهْدِى مَن تَشَآءُ ۖ أَنتَ وَلِيُّنَا فَٱغْفِرْ لَنَا وَٱرْحَمْنَا ۖ وَأَنتَ خَيْرُ ٱلْغَـٰفِرِينَ",
    translation: {
      en: "",
      ur: "اور موسیٰ نے اس میعاد پر جو ہم نے مقرر کی تھی اپنی قوم کے ستر آدمی منتخب (کرکے کوہ طور پر حاضر) ٹل کیے۔ جب ان کو زلزلے نے پکڑا تو موسیٰ نے کہا کہ اے پروردگار تو چاہتا تو ان کو اور مجھ کو پہلے ہی سے ہلاک کر دیتا۔ کیا تو اس فعل کی سزا میں جو ہم میں سے بےعقل لوگوں نے کیا ہے ہمیں ہلاک کردے گا۔ یہ تو تیری آزمائش ہے۔ اس سے تو جس کو چاہے گمراہ کرے اور جس کو چاہے ہدایت بخشے۔ تو ہی ہمارا کارساز ہے تو ہمیں (ہمارے گناہ) بخش دے اور ہم پر رحم فرما اور تو سب سے بہتر بخشنے والا ہے",
    },
    words: [
      { id: '7:155:1', arabic: "وَٱخْتَارَ", transliteration: "wa-ikh'tāra", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And chose", ur: "اور chose" } },
      { id: '7:155:2', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '7:155:3', arabic: "قَوْمَهُۥ", transliteration: "qawmahu", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "(from) his people", ur: "(سے) his لوگ" } },
      { id: '7:155:4', arabic: "سَبْعِينَ", transliteration: "sabʿīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "seventy", ur: "seventy" } },
      { id: '7:155:5', arabic: "رَجُلًۭا", transliteration: "rajulan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "men", ur: "men" } },
      { id: '7:155:6', arabic: "لِّمِيقَـٰتِنَا ۖ", transliteration: "limīqātinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for Our appointment", ur: "for Our appointment" } },
      { id: '7:155:7', arabic: "فَلَمَّآ", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then when", ur: "پھر when" } },
      { id: '7:155:8', arabic: "أَخَذَتْهُمُ", transliteration: "akhadhathumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "seized them", ur: "seized them" } },
      { id: '7:155:9', arabic: "ٱلرَّجْفَةُ", transliteration: "l-rajfatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the earthquake", ur: "the earthquake" } },
      { id: '7:155:10', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '7:155:11', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O my Lord", ur: "اے my رب" } },
      { id: '7:155:12', arabic: "لَوْ", transliteration: "law", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '7:155:13', arabic: "شِئْتَ", transliteration: "shi'ta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you (had) willed", ur: "تم (had) willed" } },
      { id: '7:155:14', arabic: "أَهْلَكْتَهُم", transliteration: "ahlaktahum", pos: ['V'], posLabel: 'V', root: "أ ه ل", meaning: { en: "You (could) have destroyed them", ur: "تم (could) have destroyed them" } },
      { id: '7:155:15', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:155:16', arabic: "قَبْلُ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '7:155:17', arabic: "وَإِيَّـٰىَ ۖ", transliteration: "wa-iyyāya", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and me", ur: "اور me" } },
      { id: '7:155:18', arabic: "أَتُهْلِكُنَا", transliteration: "atuh'likunā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Would You destroy us", ur: "Would تم destroy us" } },
      { id: '7:155:19', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '7:155:20', arabic: "فَعَلَ", transliteration: "faʿala", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "did", ur: "did" } },
      { id: '7:155:21', arabic: "ٱلسُّفَهَآءُ", transliteration: "l-sufahāu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the foolish", ur: "the foolish" } },
      { id: '7:155:22', arabic: "مِنَّآ ۖ", transliteration: "minnā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among us", ur: "among us" } },
      { id: '7:155:23', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '7:155:24', arabic: "هِىَ", transliteration: "hiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it (was)", ur: "it (was)" } },
      { id: '7:155:25', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '7:155:26', arabic: "فِتْنَتُكَ", transliteration: "fit'natuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Your trial", ur: "Your trial" } },
      { id: '7:155:27', arabic: "تُضِلُّ", transliteration: "tuḍillu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You let go astray", ur: "تم let go astray" } },
      { id: '7:155:28', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by it", ur: "by it" } },
      { id: '7:155:29', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '7:155:30', arabic: "تَشَآءُ", transliteration: "tashāu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You will", ur: "تم will" } },
      { id: '7:155:31', arabic: "وَتَهْدِى", transliteration: "watahdī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and You guide", ur: "اور تم guide" } },
      { id: '7:155:32', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '7:155:33', arabic: "تَشَآءُ ۖ", transliteration: "tashāu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You will", ur: "تم will" } },
      { id: '7:155:34', arabic: "أَنتَ", transliteration: "anta", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "You", ur: "تم" } },
      { id: '7:155:35', arabic: "وَلِيُّنَا", transliteration: "waliyyunā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(are) our Protector", ur: "(are) our Protector" } },
      { id: '7:155:36', arabic: "فَٱغْفِرْ", transliteration: "fa-igh'fir", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so forgive", ur: "so forgive" } },
      { id: '7:155:37', arabic: "لَنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "us", ur: "us" } },
      { id: '7:155:38', arabic: "وَٱرْحَمْنَا ۖ", transliteration: "wa-ir'ḥamnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and have mercy upon us", ur: "اور have رحمت پر us" } },
      { id: '7:155:39', arabic: "وَأَنتَ", transliteration: "wa-anta", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and You", ur: "اور تم" } },
      { id: '7:155:40', arabic: "خَيْرُ", transliteration: "khayru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) Best", ur: "(are) Best" } },
      { id: '7:155:41', arabic: "ٱلْغَـٰفِرِينَ", transliteration: "l-ghāfirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Forgivers", ur: "(of) Forgivers" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 29, to: 30, label: 'موصول + صلة' },
        { from: 32, to: 33, label: 'موصول + صلة' }
      ],
    },
  },
  156: {
    text: "۞ وَٱكْتُبْ لَنَا فِى هَـٰذِهِ ٱلدُّنْيَا حَسَنَةًۭ وَفِى ٱلْـَٔاخِرَةِ إِنَّا هُدْنَآ إِلَيْكَ ۚ قَالَ عَذَابِىٓ أُصِيبُ بِهِۦ مَنْ أَشَآءُ ۖ وَرَحْمَتِى وَسِعَتْ كُلَّ شَىْءٍۢ ۚ فَسَأَكْتُبُهَا لِلَّذِينَ يَتَّقُونَ وَيُؤْتُونَ ٱلزَّكَوٰةَ وَٱلَّذِينَ هُم بِـَٔايَـٰتِنَا يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "اور ہمارے لیے اس دنیا میں بھی بھلائی لکھ دے اور آخرت میں بھی۔ ہم تیری طرف رجوع ہوچکے۔ فرمایا کہ جو میرا عذاب ہے اسے تو جس پر چاہتا ہوں نازل کرتا ہوں اور جو میری رحمت ہے وہ ہر چیز کو شامل ہے۔ میں اس کو ان لوگوں کے لیے لکھ دوں گا جو پرہیزگاری کرتے اور زکوٰة دیتے اور ہماری آیتوں پر ایمان رکھتے ہیں",
    },
    words: [
      { id: '7:156:1', arabic: "۞ وَٱكْتُبْ", transliteration: "wa-uk'tub", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And ordain", ur: "اور ordain" } },
      { id: '7:156:2', arabic: "لَنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for us", ur: "for us" } },
      { id: '7:156:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:156:4', arabic: "هَـٰذِهِ", transliteration: "hādhihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '7:156:5', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] world", ur: "[the] دنیا" } },
      { id: '7:156:6', arabic: "حَسَنَةًۭ", transliteration: "ḥasanatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good", ur: "اچھا" } },
      { id: '7:156:7', arabic: "وَفِى", transliteration: "wafī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and in", ur: "اور میں" } },
      { id: '7:156:8', arabic: "ٱلْـَٔاخِرَةِ", transliteration: "l-ākhirati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Hereafter", ur: "the آخرت" } },
      { id: '7:156:9', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, we", ur: "بیشک, ہم" } },
      { id: '7:156:10', arabic: "هُدْنَآ", transliteration: "hud'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we have turned", ur: "ہم have turned" } },
      { id: '7:156:11', arabic: "إِلَيْكَ ۚ", transliteration: "ilayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to You", ur: "کو تم" } },
      { id: '7:156:12', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '7:156:13', arabic: "عَذَابِىٓ", transliteration: "ʿadhābī", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "My punishment ", ur: "My عذاب " } },
      { id: '7:156:14', arabic: "أُصِيبُ", transliteration: "uṣību", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I afflict", ur: "میں afflict" } },
      { id: '7:156:15', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '7:156:16', arabic: "مَنْ", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '7:156:17', arabic: "أَشَآءُ ۖ", transliteration: "ashāu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I will", ur: "میں will" } },
      { id: '7:156:18', arabic: "وَرَحْمَتِى", transliteration: "waraḥmatī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ر ح م", meaning: { en: "but My Mercy", ur: "لیکن My رحمت" } },
      { id: '7:156:19', arabic: "وَسِعَتْ", transliteration: "wasiʿat", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "encompasses", ur: "encompasses" } },
      { id: '7:156:20', arabic: "كُلَّ", transliteration: "kulla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '7:156:21', arabic: "شَىْءٍۢ ۚ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '7:156:22', arabic: "فَسَأَكْتُبُهَا", transliteration: "fasa-aktubuhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So I will ordain it", ur: "So میں will ordain it" } },
      { id: '7:156:23', arabic: "لِلَّذِينَ", transliteration: "lilladhīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for those who", ur: "for جو لوگ" } },
      { id: '7:156:24', arabic: "يَتَّقُونَ", transliteration: "yattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) righteous", ur: "(are) نیک" } },
      { id: '7:156:25', arabic: "وَيُؤْتُونَ", transliteration: "wayu'tūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and give", ur: "اور give" } },
      { id: '7:156:26', arabic: "ٱلزَّكَوٰةَ", transliteration: "l-zakata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "zakah", ur: "zakah" } },
      { id: '7:156:27', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those who", ur: "اور جو لوگ" } },
      { id: '7:156:28', arabic: "هُم", transliteration: "hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[they]", ur: "[وہ لوگ]" } },
      { id: '7:156:29', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Our Verses", ur: "میں Our Verses" } },
      { id: '7:156:30', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "they believe", ur: "وہ لوگ ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'جار + مجرور' }
      ],
    },
  },
  157: {
    text: "ٱلَّذِينَ يَتَّبِعُونَ ٱلرَّسُولَ ٱلنَّبِىَّ ٱلْأُمِّىَّ ٱلَّذِى يَجِدُونَهُۥ مَكْتُوبًا عِندَهُمْ فِى ٱلتَّوْرَىٰةِ وَٱلْإِنجِيلِ يَأْمُرُهُم بِٱلْمَعْرُوفِ وَيَنْهَىٰهُمْ عَنِ ٱلْمُنكَرِ وَيُحِلُّ لَهُمُ ٱلطَّيِّبَـٰتِ وَيُحَرِّمُ عَلَيْهِمُ ٱلْخَبَـٰٓئِثَ وَيَضَعُ عَنْهُمْ إِصْرَهُمْ وَٱلْأَغْلَـٰلَ ٱلَّتِى كَانَتْ عَلَيْهِمْ ۚ فَٱلَّذِينَ ءَامَنُوا۟ بِهِۦ وَعَزَّرُوهُ وَنَصَرُوهُ وَٱتَّبَعُوا۟ ٱلنُّورَ ٱلَّذِىٓ أُنزِلَ مَعَهُۥٓ ۙ أُو۟لَـٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ",
    translation: {
      en: "",
      ur: "وہ جو (محمدﷺ) رسول (الله) کی جو نبی اُمی ہیں پیروی کرتے ہیں جن (کے اوصاف) کو وہ اپنے ہاں تورات اور انجیل میں لکھا ہوا پاتے ہیں۔ وہ انہیں نیک کام کا حکم دیتے ہیں اور برے کام سے روکتے ہیں۔ اور پاک چیزوں کو ان کے لیے حلال کرتے ہیں اور ناپاک چیزوں کو ان پر حرام ٹہراتے ہیں اور ان پر سے بوجھ اور طوق جو ان (کے سر) پر (اور گلے میں) تھے اتارتے ہیں۔ تو جو لوگ ان پر ایمان لائے اور ان کی رفاقت کی اور انہیں مدد دی۔ اور جو نور ان کے ساتھ نازل ہوا ہے اس کی پیروی کی۔ وہی مراد پانے والے ہیں",
    },
    words: [
      { id: '7:157:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '7:157:2', arabic: "يَتَّبِعُونَ", transliteration: "yattabiʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "follow", ur: "follow" } },
      { id: '7:157:3', arabic: "ٱلرَّسُولَ", transliteration: "l-rasūla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messenger", ur: "the رسول" } },
      { id: '7:157:4', arabic: "ٱلنَّبِىَّ", transliteration: "l-nabiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Prophet", ur: "the نبی" } },
      { id: '7:157:5', arabic: "ٱلْأُمِّىَّ", transliteration: "l-umiya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the unlettered", ur: "the unlettered" } },
      { id: '7:157:6', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '7:157:7', arabic: "يَجِدُونَهُۥ", transliteration: "yajidūnahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they find him", ur: "وہ لوگ find him" } },
      { id: '7:157:8', arabic: "مَكْتُوبًا", transliteration: "maktūban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "written", ur: "written" } },
      { id: '7:157:9', arabic: "عِندَهُمْ", transliteration: "ʿindahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '7:157:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:157:11', arabic: "ٱلتَّوْرَىٰةِ", transliteration: "l-tawrāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Taurat", ur: "the Taurat" } },
      { id: '7:157:12', arabic: "وَٱلْإِنجِيلِ", transliteration: "wal-injīli", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Injeel", ur: "اور the Injeel" } },
      { id: '7:157:13', arabic: "يَأْمُرُهُم", transliteration: "yamuruhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He commands them", ur: "وہ commands them" } },
      { id: '7:157:14', arabic: "بِٱلْمَعْرُوفِ", transliteration: "bil-maʿrūfi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the right", ur: "کو the right" } },
      { id: '7:157:15', arabic: "وَيَنْهَىٰهُمْ", transliteration: "wayanhāhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and forbids them", ur: "اور forbids them" } },
      { id: '7:157:16', arabic: "عَنِ", transliteration: "ʿani", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:157:17', arabic: "ٱلْمُنكَرِ", transliteration: "l-munkari", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrong", ur: "the wrong" } },
      { id: '7:157:18', arabic: "وَيُحِلُّ", transliteration: "wayuḥillu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and he makes lawful", ur: "اور وہ makes lawful" } },
      { id: '7:157:19', arabic: "لَهُمُ", transliteration: "lahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '7:157:20', arabic: "ٱلطَّيِّبَـٰتِ", transliteration: "l-ṭayibāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the pure things", ur: "the pure things" } },
      { id: '7:157:21', arabic: "وَيُحَرِّمُ", transliteration: "wayuḥarrimu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and makes unlawful", ur: "اور makes unlawful" } },
      { id: '7:157:22', arabic: "عَلَيْهِمُ", transliteration: "ʿalayhimu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '7:157:23', arabic: "ٱلْخَبَـٰٓئِثَ", transliteration: "l-khabāitha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the impure things", ur: "the impure things" } },
      { id: '7:157:24', arabic: "وَيَضَعُ", transliteration: "wayaḍaʿu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and he relieves", ur: "اور وہ relieves" } },
      { id: '7:157:25', arabic: "عَنْهُمْ", transliteration: "ʿanhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '7:157:26', arabic: "إِصْرَهُمْ", transliteration: "iṣ'rahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their burden", ur: "their burden" } },
      { id: '7:157:27', arabic: "وَٱلْأَغْلَـٰلَ", transliteration: "wal-aghlāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the fetters", ur: "اور the fetters" } },
      { id: '7:157:28', arabic: "ٱلَّتِى", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '7:157:29', arabic: "كَانَتْ", transliteration: "kānat", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "were", ur: "were" } },
      { id: '7:157:30', arabic: "عَلَيْهِمْ ۚ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon them", ur: "پر them" } },
      { id: '7:157:31', arabic: "فَٱلَّذِينَ", transliteration: "fa-alladhīna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So those who", ur: "So جو لوگ" } },
      { id: '7:157:32', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '7:157:33', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in him", ur: "میں him" } },
      { id: '7:157:34', arabic: "وَعَزَّرُوهُ", transliteration: "waʿazzarūhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and honor him", ur: "اور honor him" } },
      { id: '7:157:35', arabic: "وَنَصَرُوهُ", transliteration: "wanaṣarūhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and help him", ur: "اور help him" } },
      { id: '7:157:36', arabic: "وَٱتَّبَعُوا۟", transliteration: "wa-ittabaʿū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and follow", ur: "اور follow" } },
      { id: '7:157:37', arabic: "ٱلنُّورَ", transliteration: "l-nūra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the light", ur: "the light" } },
      { id: '7:157:38', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '7:157:39', arabic: "أُنزِلَ", transliteration: "unzila", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has been sent down", ur: "has been sent down" } },
      { id: '7:157:40', arabic: "مَعَهُۥٓ ۙ", transliteration: "maʿahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with him ", ur: "ساتھ him " } },
      { id: '7:157:41', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those (are)", ur: "Those (are)" } },
      { id: '7:157:42', arabic: "هُمُ", transliteration: "humu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[they]", ur: "[وہ لوگ]" } },
      { id: '7:157:43', arabic: "ٱلْمُفْلِحُونَ", transliteration: "l-muf'liḥūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the successful ones", ur: "the successful ones" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'مضاف + مضاف إليه' },
        { from: 22, to: 23, label: 'مضاف + مضاف إليه' },
        { from: 42, to: 43, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  158: {
    text: "قُلْ يَـٰٓأَيُّهَا ٱلنَّاسُ إِنِّى رَسُولُ ٱللَّهِ إِلَيْكُمْ جَمِيعًا ٱلَّذِى لَهُۥ مُلْكُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۖ لَآ إِلَـٰهَ إِلَّا هُوَ يُحْىِۦ وَيُمِيتُ ۖ فَـَٔامِنُوا۟ بِٱللَّهِ وَرَسُولِهِ ٱلنَّبِىِّ ٱلْأُمِّىِّ ٱلَّذِى يُؤْمِنُ بِٱللَّهِ وَكَلِمَـٰتِهِۦ وَٱتَّبِعُوهُ لَعَلَّكُمْ تَهْتَدُونَ",
    translation: {
      en: "",
      ur: "(اے محمدﷺ) کہہ دو کہ لوگو میں تم سب کی طرف خدا کا بھیجا ہوا (یعنی اس کا رسول) ہوں۔ (وہ) جو آسمانوں اور زمین کا بادشاہ ہے۔ اس کے سوا کوئی معبود نہیں وہی زندگانی بخشتا ہے اور وہی موت دیتا ہے۔ تو خدا پر اور اس کے رسول پیغمبر اُمی پر جو خدا پر اور اس کے تمام کلام پر ایمان رکھتے ہیں ایمان لاؤ اور ان کی پیروی کرو تاکہ ہدایت پاؤ",
    },
    words: [
      { id: '7:158:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '7:158:2', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O", ur: "اے" } },
      { id: '7:158:3', arabic: "ٱلنَّاسُ", transliteration: "l-nāsu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "mankind", ur: "mankind" } },
      { id: '7:158:4', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed I am", ur: "بیشک میں am" } },
      { id: '7:158:5', arabic: "رَسُولُ", transliteration: "rasūlu", pos: ['N'], posLabel: 'N', root: "ر س ل", meaning: { en: "(the) Messenger", ur: "(the) رسول" } },
      { id: '7:158:6', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '7:158:7', arabic: "إِلَيْكُمْ", transliteration: "ilaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '7:158:8', arabic: "جَمِيعًا", transliteration: "jamīʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } },
      { id: '7:158:9', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the One", ur: "the One" } },
      { id: '7:158:10', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for Whom", ur: "for Whom" } },
      { id: '7:158:11', arabic: "مُلْكُ", transliteration: "mul'ku", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is the) dominion", ur: "(is the) dominion" } },
      { id: '7:158:12', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the heavens", ur: "(of) the آسمان" } },
      { id: '7:158:13', arabic: "وَٱلْأَرْضِ ۖ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '7:158:14', arabic: "لَآ", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(There is) no", ur: "(There is) نہیں" } },
      { id: '7:158:15', arabic: "إِلَـٰهَ", transliteration: "ilāha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "god", ur: "اللہ" } },
      { id: '7:158:16', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:158:17', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "Him", ur: "Him" } },
      { id: '7:158:18', arabic: "يُحْىِۦ", transliteration: "yuḥ'yī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He gives life", ur: "وہ gives زندگی" } },
      { id: '7:158:19', arabic: "وَيُمِيتُ ۖ", transliteration: "wayumītu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and causes death", ur: "اور causes موت" } },
      { id: '7:158:20', arabic: "فَـَٔامِنُوا۟", transliteration: "faāminū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So believe", ur: "So ایمان لانا" } },
      { id: '7:158:21', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Allah", ur: "میں اللہ" } },
      { id: '7:158:22', arabic: "وَرَسُولِهِ", transliteration: "warasūlihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and His Messenger", ur: "اور His رسول" } },
      { id: '7:158:23', arabic: "ٱلنَّبِىِّ", transliteration: "l-nabiyi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Prophet", ur: "the نبی" } },
      { id: '7:158:24', arabic: "ٱلْأُمِّىِّ", transliteration: "l-umiyi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the unlettered", ur: "the unlettered" } },
      { id: '7:158:25', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the one who", ur: "the one جو" } },
      { id: '7:158:26', arabic: "يُؤْمِنُ", transliteration: "yu'minu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believes", ur: "believes" } },
      { id: '7:158:27', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Allah", ur: "میں اللہ" } },
      { id: '7:158:28', arabic: "وَكَلِمَـٰتِهِۦ", transliteration: "wakalimātihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and His Words", ur: "اور His Words" } },
      { id: '7:158:29', arabic: "وَٱتَّبِعُوهُ", transliteration: "wa-ittabiʿūhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and follow him", ur: "اور follow him" } },
      { id: '7:158:30', arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that you may", ur: "so وہ تم may" } },
      { id: '7:158:31', arabic: "تَهْتَدُونَ", transliteration: "tahtadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(be) guided", ur: "(be) guided" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 24, to: 25, label: 'فعل + فاعل' }
      ],
    },
  },
  159: {
    text: "وَمِن قَوْمِ مُوسَىٰٓ أُمَّةٌۭ يَهْدُونَ بِٱلْحَقِّ وَبِهِۦ يَعْدِلُونَ",
    translation: {
      en: "",
      ur: "اور قوم موسیٰ میں کچھ لوگ ایسے بھی ہیں جو حق کا راستہ بتاتے اور اسی کے ساتھ انصاف کرتے ہیں",
    },
    words: [
      { id: '7:159:1', arabic: "وَمِن", transliteration: "wamin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And among", ur: "اور among" } },
      { id: '7:159:2', arabic: "قَوْمِ", transliteration: "qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "(the) people", ur: "(the) لوگ" } },
      { id: '7:159:3', arabic: "مُوسَىٰٓ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "(of) Musa", ur: "(of) Musa" } },
      { id: '7:159:4', arabic: "أُمَّةٌۭ", transliteration: "ummatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a community", ur: "(is) a community" } },
      { id: '7:159:5', arabic: "يَهْدُونَ", transliteration: "yahdūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(which) guides", ur: "(جو) guides" } },
      { id: '7:159:6', arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with truth", ur: "ساتھ سچ" } },
      { id: '7:159:7', arabic: "وَبِهِۦ", transliteration: "wabihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and by it", ur: "اور by it" } },
      { id: '7:159:8', arabic: "يَعْدِلُونَ", transliteration: "yaʿdilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "establishes justice", ur: "establishes justice" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  160: {
    text: "وَقَطَّعْنَـٰهُمُ ٱثْنَتَىْ عَشْرَةَ أَسْبَاطًا أُمَمًۭا ۚ وَأَوْحَيْنَآ إِلَىٰ مُوسَىٰٓ إِذِ ٱسْتَسْقَىٰهُ قَوْمُهُۥٓ أَنِ ٱضْرِب بِّعَصَاكَ ٱلْحَجَرَ ۖ فَٱنۢبَجَسَتْ مِنْهُ ٱثْنَتَا عَشْرَةَ عَيْنًۭا ۖ قَدْ عَلِمَ كُلُّ أُنَاسٍۢ مَّشْرَبَهُمْ ۚ وَظَلَّلْنَا عَلَيْهِمُ ٱلْغَمَـٰمَ وَأَنزَلْنَا عَلَيْهِمُ ٱلْمَنَّ وَٱلسَّلْوَىٰ ۖ كُلُوا۟ مِن طَيِّبَـٰتِ مَا رَزَقْنَـٰكُمْ ۚ وَمَا ظَلَمُونَا وَلَـٰكِن كَانُوٓا۟ أَنفُسَهُمْ يَظْلِمُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے ان کو (یعنی بنی اسرائیل کو) الگ الگ کرکے بارہ قبیلے (اور) بڑی بڑی جماعتیں بنا دیا۔ اور جب موسیٰ سے ان کی قوم نے پانی طلب کیا تو ہم نے ان کی طرف وحی بھیجی کہ اپنی لاٹھی پتھر پر مار دو۔ تو اس میں سے بارہ چشمے پھوٹ نکلے۔ اور سب لوگوں نے اپنا اپنا گھاٹ معلوم کرلیا۔ اور ہم نے ان (کے سروں) پر بادل کو سائبان بنائے رکھا اور ان پر من وسلویٰ اتارتے رہے۔ اور (ان سے کہا کہ) جو پاکیزہ چیزیں ہم تمہیں دیتے ہیں انہیں کھاؤ۔ اور ان لوگوں نے ہمارا کچھ نقصان نہیں کیا بلکہ (جو) نقصان کیا اپنا ہی کیا",
    },
    words: [
      { id: '7:160:1', arabic: "وَقَطَّعْنَـٰهُمُ", transliteration: "waqaṭṭaʿnāhumu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We divided them", ur: "اور ہم divided them" } },
      { id: '7:160:2', arabic: "ٱثْنَتَىْ", transliteration: "ith'natay", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(into) two", ur: "(into) two" } },
      { id: '7:160:3', arabic: "عَشْرَةَ", transliteration: "ʿashrata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(and) ten [i.e. twelve]", ur: "(اور) ten [میں.e. twelve]" } },
      { id: '7:160:4', arabic: "أَسْبَاطًا", transliteration: "asbāṭan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "tribes", ur: "tribes" } },
      { id: '7:160:5', arabic: "أُمَمًۭا ۚ", transliteration: "umaman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) communities", ur: "(as) communities" } },
      { id: '7:160:6', arabic: "وَأَوْحَيْنَآ", transliteration: "wa-awḥaynā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We inspired", ur: "اور ہم inspired" } },
      { id: '7:160:7', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '7:160:8', arabic: "مُوسَىٰٓ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '7:160:9', arabic: "إِذِ", transliteration: "idhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '7:160:10', arabic: "ٱسْتَسْقَىٰهُ", transliteration: "is'tasqāhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "asked him for water", ur: "asked him for پانی" } },
      { id: '7:160:11', arabic: "قَوْمُهُۥٓ", transliteration: "qawmuhu", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "his people", ur: "his لوگ" } },
      { id: '7:160:12', arabic: "أَنِ", transliteration: "ani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '7:160:13', arabic: "ٱضْرِب", transliteration: "iḍ'rib", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Strike", ur: "Strike" } },
      { id: '7:160:14', arabic: "بِّعَصَاكَ", transliteration: "biʿaṣāka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with your staff", ur: "ساتھ your staff" } },
      { id: '7:160:15', arabic: "ٱلْحَجَرَ ۖ", transliteration: "l-ḥajara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the stone", ur: "the stone" } },
      { id: '7:160:16', arabic: "فَٱنۢبَجَسَتْ", transliteration: "fa-inbajasat", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then gushed forth", ur: "پھر gushed forth" } },
      { id: '7:160:17', arabic: "مِنْهُ", transliteration: "min'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '7:160:18', arabic: "ٱثْنَتَا", transliteration: "ith'natā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "two", ur: "two" } },
      { id: '7:160:19', arabic: "عَشْرَةَ", transliteration: "ʿashrata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(and) ten [i.e. twelve]", ur: "(اور) ten [میں.e. twelve]" } },
      { id: '7:160:20', arabic: "عَيْنًۭا ۖ", transliteration: "ʿaynan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "springs", ur: "springs" } },
      { id: '7:160:21', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Certainly", ur: "Certainly" } },
      { id: '7:160:22', arabic: "عَلِمَ", transliteration: "ʿalima", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "knew", ur: "knew" } },
      { id: '7:160:23', arabic: "كُلُّ", transliteration: "kullu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "each", ur: "ہر" } },
      { id: '7:160:24', arabic: "أُنَاسٍۢ", transliteration: "unāsin", pos: ['N'], posLabel: 'N', root: "ن و س", meaning: { en: "people", ur: "لوگ" } },
      { id: '7:160:25', arabic: "مَّشْرَبَهُمْ ۚ", transliteration: "mashrabahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their drinking place", ur: "their drinking place" } },
      { id: '7:160:26', arabic: "وَظَلَّلْنَا", transliteration: "waẓallalnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We shaded", ur: "اور ہم shaded" } },
      { id: '7:160:27', arabic: "عَلَيْهِمُ", transliteration: "ʿalayhimu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[on] them", ur: "[پر] them" } },
      { id: '7:160:28', arabic: "ٱلْغَمَـٰمَ", transliteration: "l-ghamāma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) the clouds", ur: "(ساتھ) the clouds" } },
      { id: '7:160:29', arabic: "وَأَنزَلْنَا", transliteration: "wa-anzalnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ن ز ل", meaning: { en: "and We sent down", ur: "اور ہم sent down" } },
      { id: '7:160:30', arabic: "عَلَيْهِمُ", transliteration: "ʿalayhimu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon them", ur: "پر them" } },
      { id: '7:160:31', arabic: "ٱلْمَنَّ", transliteration: "l-mana", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the manna", ur: "the manna" } },
      { id: '7:160:32', arabic: "وَٱلسَّلْوَىٰ ۖ", transliteration: "wal-salwā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the quails", ur: "اور the quails" } },
      { id: '7:160:33', arabic: "كُلُوا۟", transliteration: "kulū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Eat", ur: "Eat" } },
      { id: '7:160:34', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:160:35', arabic: "طَيِّبَـٰتِ", transliteration: "ṭayyibāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) good things", ur: "(the) اچھا things" } },
      { id: '7:160:36', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '7:160:37', arabic: "رَزَقْنَـٰكُمْ ۚ", transliteration: "razaqnākum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have provided you", ur: "ہم have provided تم" } },
      { id: '7:160:38', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '7:160:39', arabic: "ظَلَمُونَا", transliteration: "ẓalamūnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they wronged Us", ur: "وہ لوگ wronged Us" } },
      { id: '7:160:40', arabic: "وَلَـٰكِن", transliteration: "walākin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '7:160:41', arabic: "كَانُوٓا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they were", ur: "وہ لوگ were" } },
      { id: '7:160:42', arabic: "أَنفُسَهُمْ", transliteration: "anfusahum", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "(to) themselves", ur: "(کو) themselves" } },
      { id: '7:160:43', arabic: "يَظْلِمُونَ", transliteration: "yaẓlimūna", pos: ['V'], posLabel: 'V', root: "ظ ل م", meaning: { en: "doing wrong", ur: "doing wrong" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
        { from: 27, to: 28, label: 'مضاف + مضاف إليه' },
        { from: 30, to: 31, label: 'مضاف + مضاف إليه' },
        { from: 34, to: 35, label: 'جار + مجرور' },
        { from: 36, to: 37, label: 'موصول + صلة' },
        { from: 41, to: 42, label: 'فعل + فاعل' }
      ],
    },
  },
  161: {
    text: "وَإِذْ قِيلَ لَهُمُ ٱسْكُنُوا۟ هَـٰذِهِ ٱلْقَرْيَةَ وَكُلُوا۟ مِنْهَا حَيْثُ شِئْتُمْ وَقُولُوا۟ حِطَّةٌۭ وَٱدْخُلُوا۟ ٱلْبَابَ سُجَّدًۭا نَّغْفِرْ لَكُمْ خَطِيٓـَٔـٰتِكُمْ ۚ سَنَزِيدُ ٱلْمُحْسِنِينَ",
    translation: {
      en: "",
      ur: "اور (یاد کرو) جب ان سے کہا گیا کہ اس شہر میں سکونت اختیار کرلو اور اس میں جہاں سے جی چاہے کھانا (پینا) اور (ہاں شہر میں جانا تو) حِطّتہٌ کہنا اور دروازے میں داخل ہونا تو سجدہ کرنا۔ ہم تمہارے گناہ معاف کردیں گے۔ اور نیکی کرنے والوں کو اور زیادہ دیں گے",
    },
    words: [
      { id: '7:161:1', arabic: "وَإِذْ", transliteration: "wa-idh", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:161:2', arabic: "قِيلَ", transliteration: "qīla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "it was said", ur: "it was کہا" } },
      { id: '7:161:3', arabic: "لَهُمُ", transliteration: "lahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '7:161:4', arabic: "ٱسْكُنُوا۟", transliteration: "us'kunū", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Live", ur: "Live" } },
      { id: '7:161:5', arabic: "هَـٰذِهِ", transliteration: "hādhihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) this", ur: "(میں) this" } },
      { id: '7:161:6', arabic: "ٱلْقَرْيَةَ", transliteration: "l-qaryata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "city", ur: "city" } },
      { id: '7:161:7', arabic: "وَكُلُوا۟", transliteration: "wakulū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and eat", ur: "اور eat" } },
      { id: '7:161:8', arabic: "مِنْهَا", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '7:161:9', arabic: "حَيْثُ", transliteration: "ḥaythu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wherever", ur: "wherever" } },
      { id: '7:161:10', arabic: "شِئْتُمْ", transliteration: "shi'tum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you wish", ur: "تم wish" } },
      { id: '7:161:11', arabic: "وَقُولُوا۟", transliteration: "waqūlū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and say", ur: "اور کہو" } },
      { id: '7:161:12', arabic: "حِطَّةٌۭ", transliteration: "ḥiṭṭatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Repentance", ur: "Repentance" } },
      { id: '7:161:13', arabic: "وَٱدْخُلُوا۟", transliteration: "wa-ud'khulū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and enter", ur: "اور enter" } },
      { id: '7:161:14', arabic: "ٱلْبَابَ", transliteration: "l-bāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the gate", ur: "the gate" } },
      { id: '7:161:15', arabic: "سُجَّدًۭا", transliteration: "sujjadan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "prostrating", ur: "prostrating" } },
      { id: '7:161:16', arabic: "نَّغْفِرْ", transliteration: "naghfir", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will forgive", ur: "ہم will forgive" } },
      { id: '7:161:17', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '7:161:18', arabic: "خَطِيٓـَٔـٰتِكُمْ ۚ", transliteration: "khaṭīātikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your sins", ur: "your sins" } },
      { id: '7:161:19', arabic: "سَنَزِيدُ", transliteration: "sanazīdu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will increase (reward)", ur: "ہم will increase (ثواب)" } },
      { id: '7:161:20', arabic: "ٱلْمُحْسِنِينَ", transliteration: "l-muḥ'sinīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the good-doers", ur: "(of) the اچھا-doers" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' }
      ],
    },
  },
  162: {
    text: "فَبَدَّلَ ٱلَّذِينَ ظَلَمُوا۟ مِنْهُمْ قَوْلًا غَيْرَ ٱلَّذِى قِيلَ لَهُمْ فَأَرْسَلْنَا عَلَيْهِمْ رِجْزًۭا مِّنَ ٱلسَّمَآءِ بِمَا كَانُوا۟ يَظْلِمُونَ",
    translation: {
      en: "",
      ur: "مگر جو ان میں ظالم تھے انہوں نے اس لفظ کو جس کا ان کو حکم دیا گیا تھا بدل کر اس کی جگہ اور لفظ کہنا شروع کیا تو ہم نے ان پر آسمان سے عذاب بھیجا اس لیے کہ ظلم کرتے تھے",
    },
    words: [
      { id: '7:162:1', arabic: "فَبَدَّلَ", transliteration: "fabaddala", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But changed", ur: "لیکن changed" } },
      { id: '7:162:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '7:162:3', arabic: "ظَلَمُوا۟", transliteration: "ẓalamū", pos: ['V'], posLabel: 'V', root: "ظ ل م", meaning: { en: "wronged", ur: "wronged" } },
      { id: '7:162:4', arabic: "مِنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among them", ur: "among them" } },
      { id: '7:162:5', arabic: "قَوْلًا", transliteration: "qawlan", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "word", ur: "word" } },
      { id: '7:162:6', arabic: "غَيْرَ", transliteration: "ghayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than", ur: "other than" } },
      { id: '7:162:7', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(that) which", ur: "(وہ) جو" } },
      { id: '7:162:8', arabic: "قِيلَ", transliteration: "qīla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "was said", ur: "was کہا" } },
      { id: '7:162:9', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '7:162:10', arabic: "فَأَرْسَلْنَا", transliteration: "fa-arsalnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ر س ل", meaning: { en: "So We sent", ur: "So ہم sent" } },
      { id: '7:162:11', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon them", ur: "پر them" } },
      { id: '7:162:12', arabic: "رِجْزًۭا", transliteration: "rij'zan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "torment", ur: "torment" } },
      { id: '7:162:13', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:162:14', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sky", ur: "the sky" } },
      { id: '7:162:15', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because", ur: "because" } },
      { id: '7:162:16', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they were", ur: "وہ لوگ were" } },
      { id: '7:162:17', arabic: "يَظْلِمُونَ", transliteration: "yaẓlimūna", pos: ['V'], posLabel: 'V', root: "ظ ل م", meaning: { en: "doing wrong", ur: "doing wrong" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  163: {
    text: "وَسْـَٔلْهُمْ عَنِ ٱلْقَرْيَةِ ٱلَّتِى كَانَتْ حَاضِرَةَ ٱلْبَحْرِ إِذْ يَعْدُونَ فِى ٱلسَّبْتِ إِذْ تَأْتِيهِمْ حِيتَانُهُمْ يَوْمَ سَبْتِهِمْ شُرَّعًۭا وَيَوْمَ لَا يَسْبِتُونَ ۙ لَا تَأْتِيهِمْ ۚ كَذَٰلِكَ نَبْلُوهُم بِمَا كَانُوا۟ يَفْسُقُونَ",
    translation: {
      en: "",
      ur: "اور ان سے اس گاؤں کا حال تو پوچھو جب لب دریا واقع تھا۔ جب یہ لوگ ہفتے کے دن کے بارے میں حد سے تجاوز کرنے لگے (یعنی) اس وقت کہ ان کے ہفتے کے دن مچھلیاں ان کے سامنے پانی کے اوپر آتیں اور جب ہفتے کا دن نہ ہوتا تو نہ آتیں۔ اسی طرح ہم ان لوگوں کو ان کی نافرمانیوں کے سبب آزمائش میں ڈالنے لگے",
    },
    words: [
      { id: '7:163:1', arabic: "وَسْـَٔلْهُمْ", transliteration: "wasalhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And ask them", ur: "اور ask them" } },
      { id: '7:163:2', arabic: "عَنِ", transliteration: "ʿani", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "about", ur: "about" } },
      { id: '7:163:3', arabic: "ٱلْقَرْيَةِ", transliteration: "l-qaryati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the town", ur: "the town" } },
      { id: '7:163:4', arabic: "ٱلَّتِى", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '7:163:5', arabic: "كَانَتْ", transliteration: "kānat", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '7:163:6', arabic: "حَاضِرَةَ", transliteration: "ḥāḍirata", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "situated", ur: "situated" } },
      { id: '7:163:7', arabic: "ٱلْبَحْرِ", transliteration: "l-baḥri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) the sea", ur: "(by) the sea" } },
      { id: '7:163:8', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '7:163:9', arabic: "يَعْدُونَ", transliteration: "yaʿdūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they transgressed", ur: "وہ لوگ transgressed" } },
      { id: '7:163:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:163:11', arabic: "ٱلسَّبْتِ", transliteration: "l-sabti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the (matter of) Sabbath", ur: "the (matter of) Sabbath" } },
      { id: '7:163:12', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '7:163:13', arabic: "تَأْتِيهِمْ", transliteration: "tatīhim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "came to them", ur: "came کو them" } },
      { id: '7:163:14', arabic: "حِيتَانُهُمْ", transliteration: "ḥītānuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their fish", ur: "their fish" } },
      { id: '7:163:15', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on the) day", ur: "(پر the) دن" } },
      { id: '7:163:16', arabic: "سَبْتِهِمْ", transliteration: "sabtihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) their Sabbath", ur: "(of) their Sabbath" } },
      { id: '7:163:17', arabic: "شُرَّعًۭا", transliteration: "shurraʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "visibly", ur: "visibly" } },
      { id: '7:163:18', arabic: "وَيَوْمَ", transliteration: "wayawma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ي و م", meaning: { en: "and (on the) day", ur: "اور (پر the) دن" } },
      { id: '7:163:19', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:163:20', arabic: "يَسْبِتُونَ ۙ", transliteration: "yasbitūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they had Sabbath", ur: "وہ لوگ had Sabbath" } },
      { id: '7:163:21', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(they did) not", ur: "(وہ لوگ did) نہیں" } },
      { id: '7:163:22', arabic: "تَأْتِيهِمْ ۚ", transliteration: "tatīhim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "come to them", ur: "come کو them" } },
      { id: '7:163:23', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '7:163:24', arabic: "نَبْلُوهُم", transliteration: "nablūhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We test them", ur: "ہم test them" } },
      { id: '7:163:25', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because", ur: "because" } },
      { id: '7:163:26', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they were", ur: "وہ لوگ were" } },
      { id: '7:163:27', arabic: "يَفْسُقُونَ", transliteration: "yafsuqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "defiantly disobeying", ur: "defiantly disobeying" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'نفی + فعل' },
        { from: 21, to: 22, label: 'نفی + فعل' },
        { from: 22, to: 23, label: 'فعل + فاعل' }
      ],
    },
  },
  164: {
    text: "وَإِذْ قَالَتْ أُمَّةٌۭ مِّنْهُمْ لِمَ تَعِظُونَ قَوْمًا ۙ ٱللَّهُ مُهْلِكُهُمْ أَوْ مُعَذِّبُهُمْ عَذَابًۭا شَدِيدًۭا ۖ قَالُوا۟ مَعْذِرَةً إِلَىٰ رَبِّكُمْ وَلَعَلَّهُمْ يَتَّقُونَ",
    translation: {
      en: "",
      ur: "اور جب ان میں سے ایک جماعت نے کہا کہ تم ایسے لوگوں کو کیوں نصیحت کرتے ہو جن کو الله ہلاک کرنے والا یا سخت عذاب دینے والا ہے تو انہوں نے کہا اس لیے کہ تمہارے پروردگار کے سامنے معذرت کرسکیں اور عجب نہیں کہ وہ پرہیزگاری اختیار کریں",
    },
    words: [
      { id: '7:164:1', arabic: "وَإِذْ", transliteration: "wa-idh", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:164:2', arabic: "قَالَتْ", transliteration: "qālat", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "said", ur: "کہا" } },
      { id: '7:164:3', arabic: "أُمَّةٌۭ", transliteration: "ummatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a community", ur: "a community" } },
      { id: '7:164:4', arabic: "مِّنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among them", ur: "among them" } },
      { id: '7:164:5', arabic: "لِمَ", transliteration: "lima", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Why", ur: "Why" } },
      { id: '7:164:6', arabic: "تَعِظُونَ", transliteration: "taʿiẓūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(do) you preach", ur: "(do) تم preach" } },
      { id: '7:164:7', arabic: "قَوْمًا ۙ", transliteration: "qawman", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "a people", ur: "a لوگ" } },
      { id: '7:164:8', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(whom) Allah", ur: "(whom) اللہ" } },
      { id: '7:164:9', arabic: "مُهْلِكُهُمْ", transliteration: "muh'likuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is going to) destroy them", ur: "(is going کو) destroy them" } },
      { id: '7:164:10', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '7:164:11', arabic: "مُعَذِّبُهُمْ", transliteration: "muʿadhibuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "punish them", ur: "punish them" } },
      { id: '7:164:12', arabic: "عَذَابًۭا", transliteration: "ʿadhāban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) a punishment", ur: "(ساتھ) a عذاب" } },
      { id: '7:164:13', arabic: "شَدِيدًۭا ۖ", transliteration: "shadīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "severe", ur: "severe" } },
      { id: '7:164:14', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '7:164:15', arabic: "مَعْذِرَةً", transliteration: "maʿdhiratan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "To be absolved", ur: "کو be absolved" } },
      { id: '7:164:16', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '7:164:17', arabic: "رَبِّكُمْ", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:164:18', arabic: "وَلَعَلَّهُمْ", transliteration: "walaʿallahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and that they may", ur: "اور وہ وہ لوگ may" } },
      { id: '7:164:19', arabic: "يَتَّقُونَ", transliteration: "yattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "become righteous", ur: "become نیک" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'جار + مجرور' }
      ],
    },
  },
  165: {
    text: "فَلَمَّا نَسُوا۟ مَا ذُكِّرُوا۟ بِهِۦٓ أَنجَيْنَا ٱلَّذِينَ يَنْهَوْنَ عَنِ ٱلسُّوٓءِ وَأَخَذْنَا ٱلَّذِينَ ظَلَمُوا۟ بِعَذَابٍۭ بَـِٔيسٍۭ بِمَا كَانُوا۟ يَفْسُقُونَ",
    translation: {
      en: "",
      ur: "جب انہوں نے ان باتوں کو فراموش کردیا جن کی ان کو نصیحت کی گئی تھی تو جو لوگ برائی سے منع کرتے تھے ان کو ہم نے نجات دی اور جو ظلم کرتے تھے ان کو برے عذاب میں پکڑ لیا کہ نافرمانی کئے جاتے تھے",
    },
    words: [
      { id: '7:165:1', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So when", ur: "So when" } },
      { id: '7:165:2', arabic: "نَسُوا۟", transliteration: "nasū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they forgot", ur: "وہ لوگ forgot" } },
      { id: '7:165:3', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:165:4', arabic: "ذُكِّرُوا۟", transliteration: "dhukkirū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they had been reminded", ur: "وہ لوگ had been reminded" } },
      { id: '7:165:5', arabic: "بِهِۦٓ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with [it]", ur: "ساتھ [it]" } },
      { id: '7:165:6', arabic: "أَنجَيْنَا", transliteration: "anjaynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We saved", ur: "ہم saved" } },
      { id: '7:165:7', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '7:165:8', arabic: "يَنْهَوْنَ", transliteration: "yanhawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "forbade", ur: "forbade" } },
      { id: '7:165:9', arabic: "عَنِ", transliteration: "ʿani", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[from]", ur: "[سے]" } },
      { id: '7:165:10', arabic: "ٱلسُّوٓءِ", transliteration: "l-sūi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the evil", ur: "the برا" } },
      { id: '7:165:11', arabic: "وَأَخَذْنَا", transliteration: "wa-akhadhnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We seized", ur: "اور ہم seized" } },
      { id: '7:165:12', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '7:165:13', arabic: "ظَلَمُوا۟", transliteration: "ẓalamū", pos: ['V'], posLabel: 'V', root: "ظ ل م", meaning: { en: "wronged", ur: "wronged" } },
      { id: '7:165:14', arabic: "بِعَذَابٍۭ", transliteration: "biʿadhābin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with a punishment", ur: "ساتھ a عذاب" } },
      { id: '7:165:15', arabic: "بَـِٔيسٍۭ", transliteration: "baīsin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "wretched", ur: "wretched" } },
      { id: '7:165:16', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because", ur: "because" } },
      { id: '7:165:17', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they were", ur: "وہ لوگ were" } },
      { id: '7:165:18', arabic: "يَفْسُقُونَ", transliteration: "yafsuqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "defiantly disobeying", ur: "defiantly disobeying" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
  166: {
    text: "فَلَمَّا عَتَوْا۟ عَن مَّا نُهُوا۟ عَنْهُ قُلْنَا لَهُمْ كُونُوا۟ قِرَدَةً خَـٰسِـِٔينَ",
    translation: {
      en: "",
      ur: "غرض جن اعمال (بد) سے ان کو منع کیا گیا تھا جب وہ ان (پراصرار اور ہمارے حکم سے) گردن کشی کرنے لگے تو ہم نے ان کو حکم دیا کہ ذلیل بندر ہوجاؤ",
    },
    words: [
      { id: '7:166:1', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So when", ur: "So when" } },
      { id: '7:166:2', arabic: "عَتَوْا۟", transliteration: "ʿataw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they exceeded all bounds", ur: "وہ لوگ exceeded سب bounds" } },
      { id: '7:166:3', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "about", ur: "about" } },
      { id: '7:166:4', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:166:5', arabic: "نُهُوا۟", transliteration: "nuhū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they were forbidden", ur: "وہ لوگ were forbidden" } },
      { id: '7:166:6', arabic: "عَنْهُ", transliteration: "ʿanhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '7:166:7', arabic: "قُلْنَا", transliteration: "qul'nā", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "We said", ur: "ہم کہا" } },
      { id: '7:166:8', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '7:166:9', arabic: "كُونُوا۟", transliteration: "kūnū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Be", ur: "Be" } },
      { id: '7:166:10', arabic: "قِرَدَةً", transliteration: "qiradatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "apes", ur: "apes" } },
      { id: '7:166:11', arabic: "خَـٰسِـِٔينَ", transliteration: "khāsiīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "despised", ur: "despised" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  167: {
    text: "وَإِذْ تَأَذَّنَ رَبُّكَ لَيَبْعَثَنَّ عَلَيْهِمْ إِلَىٰ يَوْمِ ٱلْقِيَـٰمَةِ مَن يَسُومُهُمْ سُوٓءَ ٱلْعَذَابِ ۗ إِنَّ رَبَّكَ لَسَرِيعُ ٱلْعِقَابِ ۖ وَإِنَّهُۥ لَغَفُورٌۭ رَّحِيمٌۭ",
    translation: {
      en: "",
      ur: "(اور اس وقت کو یاد کرو) جب تمہارے پروردگار نے (یہود کو) آگاہ کردیا تھا کہ وہ ان پر قیامت تک ایسے شخص کو مسلط رکھے گا جو انہیں بری بری تکلیفیں دیتا رہے۔ بےشک تمہارا پروردگار جلد عذاب کرنے والا ہے اور وہ بخشنے والا مہربان بھی ہے",
    },
    words: [
      { id: '7:167:1', arabic: "وَإِذْ", transliteration: "wa-idh", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:167:2', arabic: "تَأَذَّنَ", transliteration: "ta-adhana", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "declared", ur: "declared" } },
      { id: '7:167:3', arabic: "رَبُّكَ", transliteration: "rabbuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:167:4', arabic: "لَيَبْعَثَنَّ", transliteration: "layabʿathanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "that He would surely send", ur: "وہ وہ would یقیناً send" } },
      { id: '7:167:5', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon them", ur: "پر them" } },
      { id: '7:167:6', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "till", ur: "till" } },
      { id: '7:167:7', arabic: "يَوْمِ", transliteration: "yawmi", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(the) Day", ur: "(the) دن" } },
      { id: '7:167:8', arabic: "ٱلْقِيَـٰمَةِ", transliteration: "l-qiyāmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Resurrection", ur: "(of) the Resurrection" } },
      { id: '7:167:9', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(those) who", ur: "(those) جو" } },
      { id: '7:167:10', arabic: "يَسُومُهُمْ", transliteration: "yasūmuhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "would afflict them", ur: "would afflict them" } },
      { id: '7:167:11', arabic: "سُوٓءَ", transliteration: "sūa", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(with) a grievous", ur: "(ساتھ) a grievous" } },
      { id: '7:167:12', arabic: "ٱلْعَذَابِ ۗ", transliteration: "l-ʿadhābi", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "[the] punishment", ur: "[the] عذاب" } },
      { id: '7:167:13', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:167:14', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:167:15', arabic: "لَسَرِيعُ", transliteration: "lasarīʿu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) surely swift", ur: "(is) یقیناً swift" } },
      { id: '7:167:16', arabic: "ٱلْعِقَابِ ۖ", transliteration: "l-ʿiqābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) the retribution", ur: "(میں) the retribution" } },
      { id: '7:167:17', arabic: "وَإِنَّهُۥ", transliteration: "wa-innahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but indeed, He", ur: "لیکن بیشک, وہ" } },
      { id: '7:167:18', arabic: "لَغَفُورٌۭ", transliteration: "laghafūrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) surely Oft-Forgiving", ur: "(is) یقیناً Oft-Forgiving" } },
      { id: '7:167:19', arabic: "رَّحِيمٌۭ", transliteration: "raḥīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'موصول + صلة' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  168: {
    text: "وَقَطَّعْنَـٰهُمْ فِى ٱلْأَرْضِ أُمَمًۭا ۖ مِّنْهُمُ ٱلصَّـٰلِحُونَ وَمِنْهُمْ دُونَ ذَٰلِكَ ۖ وَبَلَوْنَـٰهُم بِٱلْحَسَنَـٰتِ وَٱلسَّيِّـَٔاتِ لَعَلَّهُمْ يَرْجِعُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے ان کو جماعت جماعت کرکے ملک میں منتشر کر دیا۔ بعض ان میں سے نیکوکار ہیں اور بعض اور طرح کے (یعنی بدکار) اور ہم آسائشوں، تکلیفوں (دونوں) سے ان کی آزمائش کرتے رہے تاکہ (ہماری طرف) رجوع کریں",
    },
    words: [
      { id: '7:168:1', arabic: "وَقَطَّعْنَـٰهُمْ", transliteration: "waqaṭṭaʿnāhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We divided them", ur: "اور ہم divided them" } },
      { id: '7:168:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:168:3', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '7:168:4', arabic: "أُمَمًۭا ۖ", transliteration: "umaman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) nations", ur: "(as) nations" } },
      { id: '7:168:5', arabic: "مِّنْهُمُ", transliteration: "min'humu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Among them", ur: "Among them" } },
      { id: '7:168:6', arabic: "ٱلصَّـٰلِحُونَ", transliteration: "l-ṣāliḥūna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(are) the righteous", ur: "(are) the نیک" } },
      { id: '7:168:7', arabic: "وَمِنْهُمْ", transliteration: "wamin'hum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and among them", ur: "اور among them" } },
      { id: '7:168:8', arabic: "دُونَ", transliteration: "dūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) other than", ur: "(are) other than" } },
      { id: '7:168:9', arabic: "ذَٰلِكَ ۖ", transliteration: "dhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:168:10', arabic: "وَبَلَوْنَـٰهُم", transliteration: "wabalawnāhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We tested them", ur: "اور ہم tested them" } },
      { id: '7:168:11', arabic: "بِٱلْحَسَنَـٰتِ", transliteration: "bil-ḥasanāti", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with the good", ur: "ساتھ the اچھا" } },
      { id: '7:168:12', arabic: "وَٱلسَّيِّـَٔاتِ", transliteration: "wal-sayiāti", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the bad", ur: "اور the bad" } },
      { id: '7:168:13', arabic: "لَعَلَّهُمْ", transliteration: "laʿallahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that they may", ur: "so وہ وہ لوگ may" } },
      { id: '7:168:14', arabic: "يَرْجِعُونَ", transliteration: "yarjiʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "return", ur: "return" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },
  169: {
    text: "فَخَلَفَ مِنۢ بَعْدِهِمْ خَلْفٌۭ وَرِثُوا۟ ٱلْكِتَـٰبَ يَأْخُذُونَ عَرَضَ هَـٰذَا ٱلْأَدْنَىٰ وَيَقُولُونَ سَيُغْفَرُ لَنَا وَإِن يَأْتِهِمْ عَرَضٌۭ مِّثْلُهُۥ يَأْخُذُوهُ ۚ أَلَمْ يُؤْخَذْ عَلَيْهِم مِّيثَـٰقُ ٱلْكِتَـٰبِ أَن لَّا يَقُولُوا۟ عَلَى ٱللَّهِ إِلَّا ٱلْحَقَّ وَدَرَسُوا۟ مَا فِيهِ ۗ وَٱلدَّارُ ٱلْـَٔاخِرَةُ خَيْرٌۭ لِّلَّذِينَ يَتَّقُونَ ۗ أَفَلَا تَعْقِلُونَ",
    translation: {
      en: "",
      ur: "پھر ان کے بعد ناخلف ان کے قائم مقام ہوئے جو کتاب کے وارث بنے۔ یہ (بےتامل) اس دنیائے دنی کا مال ومتاع لے لیتے ہیں اور کہتے ہیں کہ ہم بخش دیئے جائیں گے۔ اور (لوگ ایسوں پر طعن کرتے ہیں) اگر ان کے سامنے بھی ویسا ہی مال آجاتا ہے تو وہ بھی اسے لے لیتے ہیں۔ کیا ان سے کتاب کی نسبت عہد نہیں لیا گیا کہ خدا پر سچ کے سوا اور کچھ نہیں کہیں گے۔ اور جو کچھ اس (کتاب) میں ہے اس کو انہوں نے پڑھ بھی لیا ہے۔ اور آخرت کا گھر پرہیزگاروں کے لیے بہتر ہے کیا تم سمجھتے نہیں",
    },
    words: [
      { id: '7:169:1', arabic: "فَخَلَفَ", transliteration: "fakhalafa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then succeeded", ur: "پھر succeeded" } },
      { id: '7:169:2', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:169:3', arabic: "بَعْدِهِمْ", transliteration: "baʿdihim", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after them", ur: "بعد them" } },
      { id: '7:169:4', arabic: "خَلْفٌۭ", transliteration: "khalfun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "successors", ur: "successors" } },
      { id: '7:169:5', arabic: "وَرِثُوا۟", transliteration: "warithū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(who) inherited", ur: "(جو) inherited" } },
      { id: '7:169:6', arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '7:169:7', arabic: "يَأْخُذُونَ", transliteration: "yakhudhūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "taking", ur: "taking" } },
      { id: '7:169:8', arabic: "عَرَضَ", transliteration: "ʿaraḍa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "goods", ur: "goods" } },
      { id: '7:169:9', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) this", ur: "(of) this" } },
      { id: '7:169:10', arabic: "ٱلْأَدْنَىٰ", transliteration: "l-adnā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the lower (life)", ur: "the lower (زندگی)" } },
      { id: '7:169:11', arabic: "وَيَقُولُونَ", transliteration: "wayaqūlūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and they say", ur: "اور وہ لوگ کہو" } },
      { id: '7:169:12', arabic: "سَيُغْفَرُ", transliteration: "sayugh'faru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "It will be forgiven", ur: "It will be forgiven" } },
      { id: '7:169:13', arabic: "لَنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for us", ur: "for us" } },
      { id: '7:169:14', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '7:169:15', arabic: "يَأْتِهِمْ", transliteration: "yatihim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "comes to them", ur: "comes کو them" } },
      { id: '7:169:16', arabic: "عَرَضٌۭ", transliteration: "ʿaraḍun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "goods", ur: "goods" } },
      { id: '7:169:17', arabic: "مِّثْلُهُۥ", transliteration: "mith'luhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "similar to it", ur: "similar کو it" } },
      { id: '7:169:18', arabic: "يَأْخُذُوهُ ۚ", transliteration: "yakhudhūhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will take it", ur: "وہ لوگ will take it" } },
      { id: '7:169:19', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Was not", ur: "Was نہیں" } },
      { id: '7:169:20', arabic: "يُؤْخَذْ", transliteration: "yu'khadh", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "taken", ur: "taken" } },
      { id: '7:169:21', arabic: "عَلَيْهِم", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on them", ur: "پر them" } },
      { id: '7:169:22', arabic: "مِّيثَـٰقُ", transliteration: "mīthāqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Covenant", ur: "Covenant" } },
      { id: '7:169:23', arabic: "ٱلْكِتَـٰبِ", transliteration: "l-kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Book", ur: "(of) the کتاب" } },
      { id: '7:169:24', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '7:169:25', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:169:26', arabic: "يَقُولُوا۟", transliteration: "yaqūlū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they will say", ur: "وہ لوگ will کہو" } },
      { id: '7:169:27', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "about", ur: "about" } },
      { id: '7:169:28', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:169:29', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:169:30', arabic: "ٱلْحَقَّ", transliteration: "l-ḥaqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '7:169:31', arabic: "وَدَرَسُوا۟", transliteration: "wadarasū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while they studied", ur: "while وہ لوگ studied" } },
      { id: '7:169:32', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:169:33', arabic: "فِيهِ ۗ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) in it", ur: "(is) میں it" } },
      { id: '7:169:34', arabic: "وَٱلدَّارُ", transliteration: "wal-dāru", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And the home", ur: "اور the home" } },
      { id: '7:169:35', arabic: "ٱلْـَٔاخِرَةُ", transliteration: "l-ākhiratu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Hereafter", ur: "(of) the آخرت" } },
      { id: '7:169:36', arabic: "خَيْرٌۭ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) better", ur: "(is) better" } },
      { id: '7:169:37', arabic: "لِّلَّذِينَ", transliteration: "lilladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for those who", ur: "for جو لوگ" } },
      { id: '7:169:38', arabic: "يَتَّقُونَ ۗ", transliteration: "yattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "fear Allah", ur: "ڈرنا اللہ" } },
      { id: '7:169:39', arabic: "أَفَلَا", transliteration: "afalā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "So will not", ur: "So will نہیں" } },
      { id: '7:169:40', arabic: "تَعْقِلُونَ", transliteration: "taʿqilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you use intellect", ur: "تم use intellect" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'مضاف + مضاف إليه' },
        { from: 27, to: 28, label: 'جار + مجرور' },
        { from: 29, to: 30, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  170: {
    text: "وَٱلَّذِينَ يُمَسِّكُونَ بِٱلْكِتَـٰبِ وَأَقَامُوا۟ ٱلصَّلَوٰةَ إِنَّا لَا نُضِيعُ أَجْرَ ٱلْمُصْلِحِينَ",
    translation: {
      en: "",
      ur: "اور جو لوگ کتاب کو مضبوط پکڑے ہوئے ہیں اور نماز کا التزام رکھتے ہیں (ان کو ہم اجر دیں گے کہ) ہم نیکوکاروں کا اجر ضائع نہیں کرتے",
    },
    words: [
      { id: '7:170:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '7:170:2', arabic: "يُمَسِّكُونَ", transliteration: "yumassikūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "hold fast", ur: "hold fast" } },
      { id: '7:170:3', arabic: "بِٱلْكِتَـٰبِ", transliteration: "bil-kitābi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the Book", ur: "کو the کتاب" } },
      { id: '7:170:4', arabic: "وَأَقَامُوا۟", transliteration: "wa-aqāmū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and establish", ur: "اور establish" } },
      { id: '7:170:5', arabic: "ٱلصَّلَوٰةَ", transliteration: "l-ṣalata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the prayer", ur: "the نماز" } },
      { id: '7:170:6', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed, We", ur: "بیشک, ہم" } },
      { id: '7:170:7', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(will) not", ur: "(will) نہیں" } },
      { id: '7:170:8', arabic: "نُضِيعُ", transliteration: "nuḍīʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "[We] let go waste", ur: "[ہم] let go waste" } },
      { id: '7:170:9', arabic: "أَجْرَ", transliteration: "ajra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) reward", ur: "(the) ثواب" } },
      { id: '7:170:10', arabic: "ٱلْمُصْلِحِينَ", transliteration: "l-muṣ'liḥīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the reformers", ur: "(of) the reformers" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'نفی + فعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  171: {
    text: "۞ وَإِذْ نَتَقْنَا ٱلْجَبَلَ فَوْقَهُمْ كَأَنَّهُۥ ظُلَّةٌۭ وَظَنُّوٓا۟ أَنَّهُۥ وَاقِعٌۢ بِهِمْ خُذُوا۟ مَآ ءَاتَيْنَـٰكُم بِقُوَّةٍۢ وَٱذْكُرُوا۟ مَا فِيهِ لَعَلَّكُمْ تَتَّقُونَ",
    translation: {
      en: "",
      ur: "اور جب ہم نے ان (کے سروں) پر پہاڑ اٹھا کھڑا کیا گویا وہ سائبان تھا اور انہوں نے خیال کیا کہ وہ ان پر گرتا ہے تو (ہم نے کہا کہ) جو ہم نے تمہیں دیا ہے اسے زور سے پکڑے رہو۔ اور جو اس میں لکھا ہے اس پر عمل کرو تاکہ بچ جاؤ",
    },
    words: [
      { id: '7:171:1', arabic: "۞ وَإِذْ", transliteration: "wa-idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:171:2', arabic: "نَتَقْنَا", transliteration: "nataqnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We raised", ur: "ہم raised" } },
      { id: '7:171:3', arabic: "ٱلْجَبَلَ", transliteration: "l-jabala", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mountain", ur: "the mountain" } },
      { id: '7:171:4', arabic: "فَوْقَهُمْ", transliteration: "fawqahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "above them", ur: "above them" } },
      { id: '7:171:5', arabic: "كَأَنَّهُۥ", transliteration: "ka-annahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "as if it was", ur: "as if it was" } },
      { id: '7:171:6', arabic: "ظُلَّةٌۭ", transliteration: "ẓullatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a canopy", ur: "a canopy" } },
      { id: '7:171:7', arabic: "وَظَنُّوٓا۟", transliteration: "waẓannū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they thought", ur: "اور وہ لوگ thought" } },
      { id: '7:171:8', arabic: "أَنَّهُۥ", transliteration: "annahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that it", ur: "وہ it" } },
      { id: '7:171:9', arabic: "وَاقِعٌۢ", transliteration: "wāqiʿun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(would) fall", ur: "(would) fall" } },
      { id: '7:171:10', arabic: "بِهِمْ", transliteration: "bihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "upon them", ur: "پر them" } },
      { id: '7:171:11', arabic: "خُذُوا۟", transliteration: "khudhū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(We said), \"Take", ur: "(ہم کہا), \"Take" } },
      { id: '7:171:12', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:171:13', arabic: "ءَاتَيْنَـٰكُم", transliteration: "ātaynākum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have given you", ur: "ہم have given تم" } },
      { id: '7:171:14', arabic: "بِقُوَّةٍۢ", transliteration: "biquwwatin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with strength", ur: "ساتھ strength" } },
      { id: '7:171:15', arabic: "وَٱذْكُرُوا۟", transliteration: "wa-udh'kurū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and remember", ur: "اور remember" } },
      { id: '7:171:16', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:171:17', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) in it", ur: "(is) میں it" } },
      { id: '7:171:18', arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that you may", ur: "so وہ تم may" } },
      { id: '7:171:19', arabic: "تَتَّقُونَ", transliteration: "tattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "fear Allah", ur: "ڈرنا اللہ" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  172: {
    text: "وَإِذْ أَخَذَ رَبُّكَ مِنۢ بَنِىٓ ءَادَمَ مِن ظُهُورِهِمْ ذُرِّيَّتَهُمْ وَأَشْهَدَهُمْ عَلَىٰٓ أَنفُسِهِمْ أَلَسْتُ بِرَبِّكُمْ ۖ قَالُوا۟ بَلَىٰ ۛ شَهِدْنَآ ۛ أَن تَقُولُوا۟ يَوْمَ ٱلْقِيَـٰمَةِ إِنَّا كُنَّا عَنْ هَـٰذَا غَـٰفِلِينَ",
    translation: {
      en: "",
      ur: "اور جب تمہارے پروردگار نے بنی آدم سے یعنی ان کی پیٹھوں سے ان کی اولاد نکالی تو ان سے خود ان کے مقابلے میں اقرار کرا لیا (یعنی ان سے پوچھا کہ) کیا تمہارا پروردگار نہیں ہوں۔ وہ کہنے لگے کیوں نہیں ہم گواہ ہیں (کہ تو ہمارا پروردگار ہے)۔ یہ اقرار اس لیے کرایا تھا کہ قیامت کے دن (کہیں یوں نہ) کہنے لگو کہ ہم کو تو اس کی خبر ہی نہ تھی",
    },
    words: [
      { id: '7:172:1', arabic: "وَإِذْ", transliteration: "wa-idh", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:172:2', arabic: "أَخَذَ", transliteration: "akhadha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) taken", ur: "(was) taken" } },
      { id: '7:172:3', arabic: "رَبُّكَ", transliteration: "rabbuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) your Lord", ur: "(by) your رب" } },
      { id: '7:172:4', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:172:5', arabic: "بَنِىٓ", transliteration: "banī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Children", ur: "(the) اولاد" } },
      { id: '7:172:6', arabic: "ءَادَمَ", transliteration: "ādama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Adam ", ur: "(of) Adam " } },
      { id: '7:172:7', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:172:8', arabic: "ظُهُورِهِمْ", transliteration: "ẓuhūrihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their loins ", ur: "their loins " } },
      { id: '7:172:9', arabic: "ذُرِّيَّتَهُمْ", transliteration: "dhurriyyatahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their descendants", ur: "their descendants" } },
      { id: '7:172:10', arabic: "وَأَشْهَدَهُمْ", transliteration: "wa-ashhadahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and made them testify", ur: "اور made them testify" } },
      { id: '7:172:11', arabic: "عَلَىٰٓ", transliteration: "ʿalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '7:172:12', arabic: "أَنفُسِهِمْ", transliteration: "anfusihim", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "themselves", ur: "themselves" } },
      { id: '7:172:13', arabic: "أَلَسْتُ", transliteration: "alastu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Am I not", ur: "Am میں نہیں" } },
      { id: '7:172:14', arabic: "بِرَبِّكُمْ ۖ", transliteration: "birabbikum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:172:15', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '7:172:16', arabic: "بَلَىٰ ۛ", transliteration: "balā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Yes", ur: "Yes" } },
      { id: '7:172:17', arabic: "شَهِدْنَآ ۛ", transliteration: "shahid'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we have testified", ur: "ہم have testified" } },
      { id: '7:172:18', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Lest", ur: "Lest" } },
      { id: '7:172:19', arabic: "تَقُولُوا۟", transliteration: "taqūlū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you say", ur: "تم کہو" } },
      { id: '7:172:20', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on the) Day", ur: "(پر the) دن" } },
      { id: '7:172:21', arabic: "ٱلْقِيَـٰمَةِ", transliteration: "l-qiyāmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Resurrection", ur: "(of) the Resurrection" } },
      { id: '7:172:22', arabic: "إِنَّا", transliteration: "innā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:172:23', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we were", ur: "ہم were" } },
      { id: '7:172:24', arabic: "عَنْ", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "about", ur: "about" } },
      { id: '7:172:25', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '7:172:26', arabic: "غَـٰفِلِينَ", transliteration: "ghāfilīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "unaware", ur: "unaware" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'جار + مجرور' }
      ],
    },
  },
  173: {
    text: "أَوْ تَقُولُوٓا۟ إِنَّمَآ أَشْرَكَ ءَابَآؤُنَا مِن قَبْلُ وَكُنَّا ذُرِّيَّةًۭ مِّنۢ بَعْدِهِمْ ۖ أَفَتُهْلِكُنَا بِمَا فَعَلَ ٱلْمُبْطِلُونَ",
    translation: {
      en: "",
      ur: "یا یہ (نہ) کہو کہ شرک تو پہلے ہمارے بڑوں نے کیا تھا۔ اور ہم تو ان کی اولاد تھے (جو) ان کے بعد (پیدا ہوئے)۔ تو کیا جو کام اہل باطل کرتے رہے اس کے بدلے تو ہمیں ہلاک کرتا ہے",
    },
    words: [
      { id: '7:173:1', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Or", ur: "یا" } },
      { id: '7:173:2', arabic: "تَقُولُوٓا۟", transliteration: "taqūlū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you say", ur: "تم کہو" } },
      { id: '7:173:3', arabic: "إِنَّمَآ", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '7:173:4', arabic: "أَشْرَكَ", transliteration: "ashraka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "partners (were) associated (with Allah)", ur: "partners (were) associated (ساتھ اللہ)" } },
      { id: '7:173:5', arabic: "ءَابَآؤُنَا", transliteration: "ābāunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) our forefathers", ur: "(by) our forefathers" } },
      { id: '7:173:6', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:173:7', arabic: "قَبْلُ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before (us)", ur: "پہلے (us)" } },
      { id: '7:173:8', arabic: "وَكُنَّا", transliteration: "wakunnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and we are", ur: "اور ہم are" } },
      { id: '7:173:9', arabic: "ذُرِّيَّةًۭ", transliteration: "dhurriyyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "descendants", ur: "descendants" } },
      { id: '7:173:10', arabic: "مِّنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:173:11', arabic: "بَعْدِهِمْ ۖ", transliteration: "baʿdihim", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after them", ur: "بعد them" } },
      { id: '7:173:12', arabic: "أَفَتُهْلِكُنَا", transliteration: "afatuh'likunā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "So will You destroy us", ur: "So will تم destroy us" } },
      { id: '7:173:13', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '7:173:14', arabic: "فَعَلَ", transliteration: "faʿala", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "did", ur: "did" } },
      { id: '7:173:15', arabic: "ٱلْمُبْطِلُونَ", transliteration: "l-mub'ṭilūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the falsifiers", ur: "the falsifiers" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  174: {
    text: "وَكَذَٰلِكَ نُفَصِّلُ ٱلْـَٔايَـٰتِ وَلَعَلَّهُمْ يَرْجِعُونَ",
    translation: {
      en: "",
      ur: "اور اسی طرح ہم (اپنی) آیتیں کھول کھول کر بیان کرتے ہیں تاکہ یہ رجوع کریں",
    },
    words: [
      { id: '7:174:1', arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And thus", ur: "اور thus" } },
      { id: '7:174:2', arabic: "نُفَصِّلُ", transliteration: "nufaṣṣilu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We explain", ur: "ہم explain" } },
      { id: '7:174:3', arabic: "ٱلْـَٔايَـٰتِ", transliteration: "l-āyāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Verses", ur: "the Verses" } },
      { id: '7:174:4', arabic: "وَلَعَلَّهُمْ", transliteration: "walaʿallahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "so that they may", ur: "so وہ وہ لوگ may" } },
      { id: '7:174:5', arabic: "يَرْجِعُونَ", transliteration: "yarjiʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "return", ur: "return" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  175: {
    text: "وَٱتْلُ عَلَيْهِمْ نَبَأَ ٱلَّذِىٓ ءَاتَيْنَـٰهُ ءَايَـٰتِنَا فَٱنسَلَخَ مِنْهَا فَأَتْبَعَهُ ٱلشَّيْطَـٰنُ فَكَانَ مِنَ ٱلْغَاوِينَ",
    translation: {
      en: "",
      ur: "اور ان کو اس شخص کا حال پڑھ کر سنا دو جس کو ہم نے اپنی آیتیں عطا فرمائیں (اور ہفت پارچہٴ علم شرائع سے مزین کیا) تو اس نے ان کو اتار دیا پھر شیطان اس کے پیچھے لگا تو وہ گمراہوں میں ہوگیا",
    },
    words: [
      { id: '7:175:1', arabic: "وَٱتْلُ", transliteration: "wa-ut'lu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And recite", ur: "اور recite" } },
      { id: '7:175:2', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '7:175:3', arabic: "نَبَأَ", transliteration: "naba-a", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(the) story", ur: "(the) story" } },
      { id: '7:175:4', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of the) one whom", ur: "(of the) one whom" } },
      { id: '7:175:5', arabic: "ءَاتَيْنَـٰهُ", transliteration: "ātaynāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We gave [him]", ur: "ہم gave [him]" } },
      { id: '7:175:6', arabic: "ءَايَـٰتِنَا", transliteration: "āyātinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Verses", ur: "Our Verses" } },
      { id: '7:175:7', arabic: "فَٱنسَلَخَ", transliteration: "fa-insalakha", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "but he detached", ur: "لیکن وہ detached" } },
      { id: '7:175:8', arabic: "مِنْهَا", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[from] them", ur: "[سے] them" } },
      { id: '7:175:9', arabic: "فَأَتْبَعَهُ", transliteration: "fa-atbaʿahu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so followed him", ur: "so followed him" } },
      { id: '7:175:10', arabic: "ٱلشَّيْطَـٰنُ", transliteration: "l-shayṭānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan", ur: "the Shaitaan" } },
      { id: '7:175:11', arabic: "فَكَانَ", transliteration: "fakāna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ك و ن", meaning: { en: "and he became", ur: "اور وہ became" } },
      { id: '7:175:12', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:175:13', arabic: "ٱلْغَاوِينَ", transliteration: "l-ghāwīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those gone astray", ur: "those gone astray" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  176: {
    text: "وَلَوْ شِئْنَا لَرَفَعْنَـٰهُ بِهَا وَلَـٰكِنَّهُۥٓ أَخْلَدَ إِلَى ٱلْأَرْضِ وَٱتَّبَعَ هَوَىٰهُ ۚ فَمَثَلُهُۥ كَمَثَلِ ٱلْكَلْبِ إِن تَحْمِلْ عَلَيْهِ يَلْهَثْ أَوْ تَتْرُكْهُ يَلْهَث ۚ ذَّٰلِكَ مَثَلُ ٱلْقَوْمِ ٱلَّذِينَ كَذَّبُوا۟ بِـَٔايَـٰتِنَا ۚ فَٱقْصُصِ ٱلْقَصَصَ لَعَلَّهُمْ يَتَفَكَّرُونَ",
    translation: {
      en: "",
      ur: "اور اگر ہم چاہتے تو ان آیتوں سے اس (کے درجے) کو بلند کر دیتے مگر وہ تو پستی کی طرف مائل ہوگیا اور اپنی خواہش کے پیچھے چل پڑا۔ تو اس کی مثال کتے کی سی ہوگئی کہ اگر سختی کرو تو زبان نکالے رہے اور یونہی چھوڑ دو تو بھی زبان نکالے رہے۔ یہی مثال ان لوگوں کی ہے جنہوں نے ہماری آیتوں کو جھٹلایا تو ان سے یہ قصہ بیان کردو۔ تاکہ وہ فکر کریں",
    },
    words: [
      { id: '7:176:1', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '7:176:2', arabic: "شِئْنَا", transliteration: "shi'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We willed", ur: "ہم willed" } },
      { id: '7:176:3', arabic: "لَرَفَعْنَـٰهُ", transliteration: "larafaʿnāhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, We (could) have raised him", ur: "یقیناً, ہم (could) have raised him" } },
      { id: '7:176:4', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with these", ur: "ساتھ these" } },
      { id: '7:176:5', arabic: "وَلَـٰكِنَّهُۥٓ", transliteration: "walākinnahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "[and] but he", ur: "[اور] لیکن وہ" } },
      { id: '7:176:6', arabic: "أَخْلَدَ", transliteration: "akhlada", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "adhered", ur: "adhered" } },
      { id: '7:176:7', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '7:176:8', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '7:176:9', arabic: "وَٱتَّبَعَ", transliteration: "wa-ittabaʿa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and followed", ur: "اور followed" } },
      { id: '7:176:10', arabic: "هَوَىٰهُ ۚ", transliteration: "hawāhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his (vain) desires", ur: "his (vain) desires" } },
      { id: '7:176:11', arabic: "فَمَثَلُهُۥ", transliteration: "famathaluhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So his example", ur: "So his example" } },
      { id: '7:176:12', arabic: "كَمَثَلِ", transliteration: "kamathali", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) like (the) example", ur: "(is) like (the) example" } },
      { id: '7:176:13', arabic: "ٱلْكَلْبِ", transliteration: "l-kalbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the dog", ur: "(of) the dog" } },
      { id: '7:176:14', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '7:176:15', arabic: "تَحْمِلْ", transliteration: "taḥmil", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you attack", ur: "تم attack" } },
      { id: '7:176:16', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[on] him", ur: "[پر] him" } },
      { id: '7:176:17', arabic: "يَلْهَثْ", transliteration: "yalhath", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he lolls out his tongue", ur: "وہ lolls out his tongue" } },
      { id: '7:176:18', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '7:176:19', arabic: "تَتْرُكْهُ", transliteration: "tatruk'hu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "if you leave him", ur: "if تم leave him" } },
      { id: '7:176:20', arabic: "يَلْهَث ۚ", transliteration: "yalhath", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he lolls out his tongue", ur: "وہ lolls out his tongue" } },
      { id: '7:176:21', arabic: "ذَّٰلِكَ", transliteration: "dhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '7:176:22', arabic: "مَثَلُ", transliteration: "mathalu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is the) example", ur: "(is the) example" } },
      { id: '7:176:23', arabic: "ٱلْقَوْمِ", transliteration: "l-qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "(of) the people", ur: "(of) the لوگ" } },
      { id: '7:176:24', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '7:176:25', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '7:176:26', arabic: "بِـَٔايَـٰتِنَا ۚ", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[in] Our Signs", ur: "[میں] Our نشانیاں" } },
      { id: '7:176:27', arabic: "فَٱقْصُصِ", transliteration: "fa-uq'ṣuṣi", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So relate", ur: "So relate" } },
      { id: '7:176:28', arabic: "ٱلْقَصَصَ", transliteration: "l-qaṣaṣa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the story", ur: "the story" } },
      { id: '7:176:29', arabic: "لَعَلَّهُمْ", transliteration: "laʿallahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that they may", ur: "so وہ وہ لوگ may" } },
      { id: '7:176:30', arabic: "يَتَفَكَّرُونَ", transliteration: "yatafakkarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "reflect", ur: "reflect" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  177: {
    text: "سَآءَ مَثَلًا ٱلْقَوْمُ ٱلَّذِينَ كَذَّبُوا۟ بِـَٔايَـٰتِنَا وَأَنفُسَهُمْ كَانُوا۟ يَظْلِمُونَ",
    translation: {
      en: "",
      ur: "جن لوگوں نے ہماری آیتوں کی تکذیب کی ان کی مثال بری ہے اور انہوں نے نقصان (کیا تو) اپنا ہی کیا",
    },
    words: [
      { id: '7:177:1', arabic: "سَآءَ", transliteration: "sāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Evil", ur: "برا" } },
      { id: '7:177:2', arabic: "مَثَلًا", transliteration: "mathalan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) an example", ur: "(as) an example" } },
      { id: '7:177:3', arabic: "ٱلْقَوْمُ", transliteration: "l-qawmu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) the people", ur: "(are) the لوگ" } },
      { id: '7:177:4', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '7:177:5', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '7:177:6', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Our Signs", ur: "Our نشانیاں" } },
      { id: '7:177:7', arabic: "وَأَنفُسَهُمْ", transliteration: "wa-anfusahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ن ف س", meaning: { en: "and themselves", ur: "اور themselves" } },
      { id: '7:177:8', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '7:177:9', arabic: "يَظْلِمُونَ", transliteration: "yaẓlimūna", pos: ['V'], posLabel: 'V', root: "ظ ل م", meaning: { en: "wrong", ur: "wrong" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  178: {
    text: "مَن يَهْدِ ٱللَّهُ فَهُوَ ٱلْمُهْتَدِى ۖ وَمَن يُضْلِلْ فَأُو۟لَـٰٓئِكَ هُمُ ٱلْخَـٰسِرُونَ",
    translation: {
      en: "",
      ur: "جس کو خدا ہدایت دے وہی راہ یاب ہے اور جس کو گمراہ کرے تو ایسے ہی لوگ نقصان اٹھانے والے ہیں",
    },
    words: [
      { id: '7:178:1', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "Whoever", ur: "Whoever" } },
      { id: '7:178:2', arabic: "يَهْدِ", transliteration: "yahdi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) guided", ur: "(is) guided" } },
      { id: '7:178:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '7:178:4', arabic: "فَهُوَ", transliteration: "fahuwa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then he", ur: "پھر وہ" } },
      { id: '7:178:5', arabic: "ٱلْمُهْتَدِى ۖ", transliteration: "l-muh'tadī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the guided one", ur: "(is) the guided one" } },
      { id: '7:178:6', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while whoever", ur: "while whoever" } },
      { id: '7:178:7', arabic: "يُضْلِلْ", transliteration: "yuḍ'lil", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He lets go astray", ur: "وہ lets go astray" } },
      { id: '7:178:8', arabic: "فَأُو۟لَـٰٓئِكَ", transliteration: "fa-ulāika", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then those", ur: "پھر those" } },
      { id: '7:178:9', arabic: "هُمُ", transliteration: "humu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[they]", ur: "[وہ لوگ]" } },
      { id: '7:178:10', arabic: "ٱلْخَـٰسِرُونَ", transliteration: "l-khāsirūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) the losers", ur: "(are) the losers" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  179: {
    text: "وَلَقَدْ ذَرَأْنَا لِجَهَنَّمَ كَثِيرًۭا مِّنَ ٱلْجِنِّ وَٱلْإِنسِ ۖ لَهُمْ قُلُوبٌۭ لَّا يَفْقَهُونَ بِهَا وَلَهُمْ أَعْيُنٌۭ لَّا يُبْصِرُونَ بِهَا وَلَهُمْ ءَاذَانٌۭ لَّا يَسْمَعُونَ بِهَآ ۚ أُو۟لَـٰٓئِكَ كَٱلْأَنْعَـٰمِ بَلْ هُمْ أَضَلُّ ۚ أُو۟لَـٰٓئِكَ هُمُ ٱلْغَـٰفِلُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے بہت سے جن اور انسان دوزخ کے لیے پیدا کیے ہیں۔ ان کے دل ہیں لیکن ان سے سمجھتے نہیں اور ان کی آنکھیں ہیں مگر ان سے دیکھتے نہیں اور ان کے کان ہیں پر ان سے سنتے نہیں۔ یہ لوگ بالکل چارپایوں کی طرح ہیں بلکہ ان سے بھی بھٹکے ہوئے۔ یہی وہ ہیں جو غفلت میں پڑے ہوئے ہیں",
    },
    words: [
      { id: '7:179:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And certainly", ur: "اور certainly" } },
      { id: '7:179:2', arabic: "ذَرَأْنَا", transliteration: "dharanā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have created", ur: "ہم have پیدا کیا" } },
      { id: '7:179:3', arabic: "لِجَهَنَّمَ", transliteration: "lijahannama", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for Hell", ur: "for جہنم" } },
      { id: '7:179:4', arabic: "كَثِيرًۭا", transliteration: "kathīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "many", ur: "many" } },
      { id: '7:179:5', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:179:6', arabic: "ٱلْجِنِّ", transliteration: "l-jini", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the jinn", ur: "the jinn" } },
      { id: '7:179:7', arabic: "وَٱلْإِنسِ ۖ", transliteration: "wal-insi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and men", ur: "اور men" } },
      { id: '7:179:8', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For them", ur: "For them" } },
      { id: '7:179:9', arabic: "قُلُوبٌۭ", transliteration: "qulūbun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) hearts", ur: "(are) hearts" } },
      { id: '7:179:10', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(but) not", ur: "(لیکن) نہیں" } },
      { id: '7:179:11', arabic: "يَفْقَهُونَ", transliteration: "yafqahūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they understand", ur: "وہ لوگ understand" } },
      { id: '7:179:12', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '7:179:13', arabic: "وَلَهُمْ", transliteration: "walahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and for them", ur: "اور for them" } },
      { id: '7:179:14', arabic: "أَعْيُنٌۭ", transliteration: "aʿyunun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) eyes", ur: "(are) eyes" } },
      { id: '7:179:15', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(but) not", ur: "(لیکن) نہیں" } },
      { id: '7:179:16', arabic: "يُبْصِرُونَ", transliteration: "yub'ṣirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they see", ur: "وہ لوگ دیکھنا" } },
      { id: '7:179:17', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '7:179:18', arabic: "وَلَهُمْ", transliteration: "walahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and for them", ur: "اور for them" } },
      { id: '7:179:19', arabic: "ءَاذَانٌۭ", transliteration: "ādhānun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) ears", ur: "(are) ears" } },
      { id: '7:179:20', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(but) not", ur: "(لیکن) نہیں" } },
      { id: '7:179:21', arabic: "يَسْمَعُونَ", transliteration: "yasmaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they hear", ur: "وہ لوگ سننا" } },
      { id: '7:179:22', arabic: "بِهَآ ۚ", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '7:179:23', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those", ur: "Those" } },
      { id: '7:179:24', arabic: "كَٱلْأَنْعَـٰمِ", transliteration: "kal-anʿāmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) like cattle", ur: "(are) like cattle" } },
      { id: '7:179:25', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "nay", ur: "nay" } },
      { id: '7:179:26', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '7:179:27', arabic: "أَضَلُّ ۚ", transliteration: "aḍallu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) more astray", ur: "(are) more astray" } },
      { id: '7:179:28', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those ", ur: "Those " } },
      { id: '7:179:29', arabic: "هُمُ", transliteration: "humu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '7:179:30', arabic: "ٱلْغَـٰفِلُونَ", transliteration: "l-ghāfilūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) the heedless", ur: "(are) the heedless" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 29, to: 30, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  180: {
    text: "وَلِلَّهِ ٱلْأَسْمَآءُ ٱلْحُسْنَىٰ فَٱدْعُوهُ بِهَا ۖ وَذَرُوا۟ ٱلَّذِينَ يُلْحِدُونَ فِىٓ أَسْمَـٰٓئِهِۦ ۚ سَيُجْزَوْنَ مَا كَانُوا۟ يَعْمَلُونَ",
    translation: {
      en: "",
      ur: "اور خدا کے سب نام اچھے ہی اچھے ہیں۔ تو اس کو اس کے ناموں سے پکارا کرو اور جو لوگ اس کے ناموں میں کجی اختیار کرتے ہیں ان کو چھوڑ دو۔ وہ جو کچھ کر رہے ہیں عنقریب اس کی سزا پائیں گے",
    },
    words: [
      { id: '7:180:1', arabic: "وَلِلَّهِ", transliteration: "walillahi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for Allah", ur: "اور for اللہ" } },
      { id: '7:180:2', arabic: "ٱلْأَسْمَآءُ", transliteration: "l-asmāu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) the names ", ur: "(are) the names " } },
      { id: '7:180:3', arabic: "ٱلْحُسْنَىٰ", transliteration: "l-ḥus'nā", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the most beautiful", ur: "the most beautiful" } },
      { id: '7:180:4', arabic: "فَٱدْعُوهُ", transliteration: "fa-id'ʿūhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so invoke Him", ur: "so invoke Him" } },
      { id: '7:180:5', arabic: "بِهَا ۖ", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by them", ur: "by them" } },
      { id: '7:180:6', arabic: "وَذَرُوا۟", transliteration: "wadharū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And leave", ur: "اور leave" } },
      { id: '7:180:7', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '7:180:8', arabic: "يُلْحِدُونَ", transliteration: "yul'ḥidūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "deviate", ur: "deviate" } },
      { id: '7:180:9', arabic: "فِىٓ", transliteration: "fī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "concerning", ur: "concerning" } },
      { id: '7:180:10', arabic: "أَسْمَـٰٓئِهِۦ ۚ", transliteration: "asmāihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His names", ur: "His names" } },
      { id: '7:180:11', arabic: "سَيُجْزَوْنَ", transliteration: "sayuj'zawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They will be recompensed", ur: "وہ لوگ will be recompensed" } },
      { id: '7:180:12', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '7:180:13', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '7:180:14', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "do", ur: "do" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'موصول + صلة' }
      ],
    },
  },
  181: {
    text: "وَمِمَّنْ خَلَقْنَآ أُمَّةٌۭ يَهْدُونَ بِٱلْحَقِّ وَبِهِۦ يَعْدِلُونَ",
    translation: {
      en: "",
      ur: "اور ہماری مخلوقات میں سے ایک وہ لوگ ہیں جو حق کا رستہ بتاتے ہیں اور اسی کے ساتھ انصاف کرتے ہیں",
    },
    words: [
      { id: '7:181:1', arabic: "وَمِمَّنْ", transliteration: "wamimman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And of (those) whom", ur: "اور of (those) whom" } },
      { id: '7:181:2', arabic: "خَلَقْنَآ", transliteration: "khalaqnā", pos: ['V'], posLabel: 'V', root: "خ ل ق", meaning: { en: "We have created", ur: "ہم have پیدا کیا" } },
      { id: '7:181:3', arabic: "أُمَّةٌۭ", transliteration: "ummatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a nation", ur: "(is) a nation" } },
      { id: '7:181:4', arabic: "يَهْدُونَ", transliteration: "yahdūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "who guides", ur: "جو guides" } },
      { id: '7:181:5', arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with the truth", ur: "ساتھ the سچ" } },
      { id: '7:181:6', arabic: "وَبِهِۦ", transliteration: "wabihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and thereby", ur: "اور thereby" } },
      { id: '7:181:7', arabic: "يَعْدِلُونَ", transliteration: "yaʿdilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they establish justice", ur: "وہ لوگ establish justice" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  182: {
    text: "وَٱلَّذِينَ كَذَّبُوا۟ بِـَٔايَـٰتِنَا سَنَسْتَدْرِجُهُم مِّنْ حَيْثُ لَا يَعْلَمُونَ",
    translation: {
      en: "",
      ur: "اور جن لوگوں نے ہماری آیتوں کو جھٹلایا ان کو بتدریج اس طریق سے پکڑیں گے کہ ان کو معلوم ہی نہ ہوگا",
    },
    words: [
      { id: '7:182:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But those who", ur: "لیکن جو لوگ" } },
      { id: '7:182:2', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '7:182:3', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Our Signs", ur: "Our نشانیاں" } },
      { id: '7:182:4', arabic: "سَنَسْتَدْرِجُهُم", transliteration: "sanastadrijuhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will gradually lead them", ur: "ہم will gradually lead them" } },
      { id: '7:182:5', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:182:6', arabic: "حَيْثُ", transliteration: "ḥaythu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "where", ur: "where" } },
      { id: '7:182:7', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:182:8', arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "they know", ur: "وہ لوگ جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'نفی + فعل' }
      ],
    },
  },
  183: {
    text: "وَأُمْلِى لَهُمْ ۚ إِنَّ كَيْدِى مَتِينٌ",
    translation: {
      en: "",
      ur: "اور میں ان کو مہلت دیئے جاتا ہوں میری تدبیر (بڑی) مضبوط ہے",
    },
    words: [
      { id: '7:183:1', arabic: "وَأُمْلِى", transliteration: "wa-um'lī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And I will give respite", ur: "اور میں will give respite" } },
      { id: '7:183:2', arabic: "لَهُمْ ۚ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '7:183:3', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:183:4', arabic: "كَيْدِى", transliteration: "kaydī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My plan", ur: "My plan" } },
      { id: '7:183:5', arabic: "مَتِينٌ", transliteration: "matīnun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) firm", ur: "(is) firm" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  184: {
    text: "أَوَلَمْ يَتَفَكَّرُوا۟ ۗ مَا بِصَاحِبِهِم مِّن جِنَّةٍ ۚ إِنْ هُوَ إِلَّا نَذِيرٌۭ مُّبِينٌ",
    translation: {
      en: "",
      ur: "کیا انہوں نے غور نہیں کیا کہ ان کے رفیق محمد (ﷺ) کو (کسی طرح کا بھی) جنون نہیں ہے۔ وہ تو ظاہر ظہور ڈر سنانے والے ہیں",
    },
    words: [
      { id: '7:184:1', arabic: "أَوَلَمْ", transliteration: "awalam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do not", ur: "Do نہیں" } },
      { id: '7:184:2', arabic: "يَتَفَكَّرُوا۟ ۗ", transliteration: "yatafakkarū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they reflect", ur: "وہ لوگ reflect" } },
      { id: '7:184:3', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '7:184:4', arabic: "بِصَاحِبِهِم", transliteration: "biṣāḥibihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in their companion", ur: "میں their companion" } },
      { id: '7:184:5', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[of]", ur: "[of]" } },
      { id: '7:184:6', arabic: "جِنَّةٍ ۚ", transliteration: "jinnatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) any madness", ur: "(is) any madness" } },
      { id: '7:184:7', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '7:184:8', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "he", ur: "وہ" } },
      { id: '7:184:9', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) but", ur: "(is) لیکن" } },
      { id: '7:184:10', arabic: "نَذِيرٌۭ", transliteration: "nadhīrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a warner", ur: "a warner" } },
      { id: '7:184:11', arabic: "مُّبِينٌ", transliteration: "mubīnun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  185: {
    text: "أَوَلَمْ يَنظُرُوا۟ فِى مَلَكُوتِ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ وَمَا خَلَقَ ٱللَّهُ مِن شَىْءٍۢ وَأَنْ عَسَىٰٓ أَن يَكُونَ قَدِ ٱقْتَرَبَ أَجَلُهُمْ ۖ فَبِأَىِّ حَدِيثٍۭ بَعْدَهُۥ يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "کیا انہوں نے آسمان اور زمین کی بادشاہت میں جو چیزیں خدا نے پیدا کی ہیں ان پر نظر نہیں کی اور اس بات پر (خیال نہیں کیا) کہ عجب نہیں ان (کی موت) کا وقت نزدیک پہنچ گیا ہو۔ تو اس کے بعد وہ اور کس بات پر ایمان لائیں گے",
    },
    words: [
      { id: '7:185:1', arabic: "أَوَلَمْ", transliteration: "awalam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do not", ur: "Do نہیں" } },
      { id: '7:185:2', arabic: "يَنظُرُوا۟", transliteration: "yanẓurū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they look", ur: "وہ لوگ look" } },
      { id: '7:185:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:185:4', arabic: "مَلَكُوتِ", transliteration: "malakūti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) dominion", ur: "(the) dominion" } },
      { id: '7:185:5', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the heavens", ur: "(of) the آسمان" } },
      { id: '7:185:6', arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '7:185:7', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '7:185:8', arabic: "خَلَقَ", transliteration: "khalaqa", pos: ['V'], posLabel: 'V', root: "خ ل ق", meaning: { en: "has (been) created", ur: "has (been) پیدا کیا" } },
      { id: '7:185:9', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '7:185:10', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:185:11', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(every)thing", ur: "(ہر)thing" } },
      { id: '7:185:12', arabic: "وَأَنْ", transliteration: "wa-an", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and that", ur: "اور وہ" } },
      { id: '7:185:13', arabic: "عَسَىٰٓ", transliteration: "ʿasā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "perhaps", ur: "perhaps" } },
      { id: '7:185:14', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '7:185:15', arabic: "يَكُونَ", transliteration: "yakūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has", ur: "has" } },
      { id: '7:185:16', arabic: "قَدِ", transliteration: "qadi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "verily", ur: "بیشک" } },
      { id: '7:185:17', arabic: "ٱقْتَرَبَ", transliteration: "iq'taraba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "come near ", ur: "come near " } },
      { id: '7:185:18', arabic: "أَجَلُهُمْ ۖ", transliteration: "ajaluhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their term", ur: "their term" } },
      { id: '7:185:19', arabic: "فَبِأَىِّ", transliteration: "fabi-ayyi", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So in what", ur: "So میں کیا" } },
      { id: '7:185:20', arabic: "حَدِيثٍۭ", transliteration: "ḥadīthin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "statement", ur: "statement" } },
      { id: '7:185:21', arabic: "بَعْدَهُۥ", transliteration: "baʿdahu", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after this", ur: "بعد this" } },
      { id: '7:185:22', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "will they believe", ur: "will وہ لوگ ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' }
      ],
    },
  },
  186: {
    text: "مَن يُضْلِلِ ٱللَّهُ فَلَا هَادِىَ لَهُۥ ۚ وَيَذَرُهُمْ فِى طُغْيَـٰنِهِمْ يَعْمَهُونَ",
    translation: {
      en: "",
      ur: "جس شخص کو خدا گمراہ کرے اس کو کوئی ہدایت دینے والا نہیں اور وہ ان (گمراہوں) کو چھوڑے رکھتا ہے کہ اپنی سرکشی میں پڑے بہکتے رہیں",
    },
    words: [
      { id: '7:186:1', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "Whoever", ur: "Whoever" } },
      { id: '7:186:2', arabic: "يُضْلِلِ", transliteration: "yuḍ'lili", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) let go astray", ur: "(is) let go astray" } },
      { id: '7:186:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '7:186:4', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then (there is) no", ur: "پھر (there is) نہیں" } },
      { id: '7:186:5', arabic: "هَادِىَ", transliteration: "hādiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "guide", ur: "guide" } },
      { id: '7:186:6', arabic: "لَهُۥ ۚ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '7:186:7', arabic: "وَيَذَرُهُمْ", transliteration: "wayadharuhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He leaves them", ur: "اور وہ leaves them" } },
      { id: '7:186:8', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:186:9', arabic: "طُغْيَـٰنِهِمْ", transliteration: "ṭugh'yānihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their transgression", ur: "their transgression" } },
      { id: '7:186:10', arabic: "يَعْمَهُونَ", transliteration: "yaʿmahūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "wandering blindly", ur: "wandering blindly" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  187: {
    text: "يَسْـَٔلُونَكَ عَنِ ٱلسَّاعَةِ أَيَّانَ مُرْسَىٰهَا ۖ قُلْ إِنَّمَا عِلْمُهَا عِندَ رَبِّى ۖ لَا يُجَلِّيهَا لِوَقْتِهَآ إِلَّا هُوَ ۚ ثَقُلَتْ فِى ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۚ لَا تَأْتِيكُمْ إِلَّا بَغْتَةًۭ ۗ يَسْـَٔلُونَكَ كَأَنَّكَ حَفِىٌّ عَنْهَا ۖ قُلْ إِنَّمَا عِلْمُهَا عِندَ ٱللَّهِ وَلَـٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يَعْلَمُونَ",
    translation: {
      en: "",
      ur: "(یہ لوگ) تم سے قیامت کے بارے میں پوچھتے ہیں کہ اس کے واقع ہونے کا وقت کب ہے۔ کہہ دو کہ اس کا علم تو میرے پروردگار ہی کو ہے۔ وہی اسے اس کے وقت پر ظاہر کردےگا۔ وہ آسمان وزمین میں ایک بھاری بات ہوگی اور ناگہاں تم پر آجائے گی۔ یہ تم سے اس طرح دریافت کرتے ہیں کہ گویا تم اس سے بخوبی واقف ہو۔ کہو کہ اس کا علم تو خدا ہی کو ہے لیکن اکثر لوگ یہ نہیں جانتے",
    },
    words: [
      { id: '7:187:1', arabic: "يَسْـَٔلُونَكَ", transliteration: "yasalūnaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They ask you", ur: "وہ لوگ ask تم" } },
      { id: '7:187:2', arabic: "عَنِ", transliteration: "ʿani", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "about", ur: "about" } },
      { id: '7:187:3', arabic: "ٱلسَّاعَةِ", transliteration: "l-sāʿati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Hour", ur: "the Hour" } },
      { id: '7:187:4', arabic: "أَيَّانَ", transliteration: "ayyāna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "when will be", ur: "when will be" } },
      { id: '7:187:5', arabic: "مُرْسَىٰهَا ۖ", transliteration: "mur'sāhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its appointed time", ur: "its appointed وقت" } },
      { id: '7:187:6', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '7:187:7', arabic: "إِنَّمَا", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '7:187:8', arabic: "عِلْمُهَا", transliteration: "ʿil'muhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its knowledge", ur: "its knowledge" } },
      { id: '7:187:9', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) with", ur: "(is) ساتھ" } },
      { id: '7:187:10', arabic: "رَبِّى ۖ", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my Lord", ur: "my رب" } },
      { id: '7:187:11', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "no (one)", ur: "نہیں (one)" } },
      { id: '7:187:12', arabic: "يُجَلِّيهَا", transliteration: "yujallīhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "can reveal [it]", ur: "can reveal [it]" } },
      { id: '7:187:13', arabic: "لِوَقْتِهَآ", transliteration: "liwaqtihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "its time", ur: "its وقت" } },
      { id: '7:187:14', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:187:15', arabic: "هُوَ ۚ", transliteration: "huwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Him", ur: "Him" } },
      { id: '7:187:16', arabic: "ثَقُلَتْ", transliteration: "thaqulat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "It lays heavily", ur: "It lays heavily" } },
      { id: '7:187:17', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:187:18', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '7:187:19', arabic: "وَٱلْأَرْضِ ۚ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '7:187:20', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '7:187:21', arabic: "تَأْتِيكُمْ", transliteration: "tatīkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will it come to you", ur: "will it come کو تم" } },
      { id: '7:187:22', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '7:187:23', arabic: "بَغْتَةًۭ ۗ", transliteration: "baghtatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "suddenly", ur: "suddenly" } },
      { id: '7:187:24', arabic: "يَسْـَٔلُونَكَ", transliteration: "yasalūnaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They ask you", ur: "وہ لوگ ask تم" } },
      { id: '7:187:25', arabic: "كَأَنَّكَ", transliteration: "ka-annaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "as if you", ur: "as if تم" } },
      { id: '7:187:26', arabic: "حَفِىٌّ", transliteration: "ḥafiyyun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(were) well informed", ur: "(were) well informed" } },
      { id: '7:187:27', arabic: "عَنْهَا ۖ", transliteration: "ʿanhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "about it", ur: "about it" } },
      { id: '7:187:28', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '7:187:29', arabic: "إِنَّمَا", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '7:187:30', arabic: "عِلْمُهَا", transliteration: "ʿil'muhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its knowledge", ur: "its knowledge" } },
      { id: '7:187:31', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) with", ur: "(is) ساتھ" } },
      { id: '7:187:32', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:187:33', arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '7:187:34', arabic: "أَكْثَرَ", transliteration: "akthara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "most", ur: "most" } },
      { id: '7:187:35', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the people", ur: "(of) the لوگ" } },
      { id: '7:187:36', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '7:187:37', arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "know", ur: "جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'نفی + فعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'جار + مجرور' },
        { from: 20, to: 21, label: 'نفی + فعل' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'فعل + فاعل' },
        { from: 26, to: 27, label: 'فعل + فاعل' },
        { from: 34, to: 35, label: 'مضاف + مضاف إليه' },
        { from: 36, to: 37, label: 'نفی + فعل' }
      ],
    },
  },
  188: {
    text: "قُل لَّآ أَمْلِكُ لِنَفْسِى نَفْعًۭا وَلَا ضَرًّا إِلَّا مَا شَآءَ ٱللَّهُ ۚ وَلَوْ كُنتُ أَعْلَمُ ٱلْغَيْبَ لَٱسْتَكْثَرْتُ مِنَ ٱلْخَيْرِ وَمَا مَسَّنِىَ ٱلسُّوٓءُ ۚ إِنْ أَنَا۠ إِلَّا نَذِيرٌۭ وَبَشِيرٌۭ لِّقَوْمٍۢ يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "کہہ دو کہ میں اپنے فائدے اور نقصان کا کچھ بھی اختیار نہیں رکھتا مگر جو الله چاہے اور اگر میں غیب کی باتیں جانتا ہوتا تو بہت سے فائدے جمع کرلیتا اور مجھ کو کوئی تکلیف نہ پہنچتی۔ میں تو مومنوں کو ڈر اور خوشخبری سنانے والا ہوں",
    },
    words: [
      { id: '7:188:1', arabic: "قُل", transliteration: "qul", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '7:188:2', arabic: "لَّآ", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '7:188:3', arabic: "أَمْلِكُ", transliteration: "amliku", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I have power", ur: "میں have power" } },
      { id: '7:188:4', arabic: "لِنَفْسِى", transliteration: "linafsī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for myself", ur: "for myself" } },
      { id: '7:188:5', arabic: "نَفْعًۭا", transliteration: "nafʿan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) benefit", ur: "(کو) benefit" } },
      { id: '7:188:6', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and no", ur: "اور نہیں" } },
      { id: '7:188:7', arabic: "ضَرًّا", transliteration: "ḍarran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(power to) harm", ur: "(power کو) harm" } },
      { id: '7:188:8', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:188:9', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:188:10', arabic: "شَآءَ", transliteration: "shāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wills", ur: "wills" } },
      { id: '7:188:11', arabic: "ٱللَّهُ ۚ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:188:12', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '7:188:13', arabic: "كُنتُ", transliteration: "kuntu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I would", ur: "میں would" } },
      { id: '7:188:14', arabic: "أَعْلَمُ", transliteration: "aʿlamu", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "know", ur: "جاننا" } },
      { id: '7:188:15', arabic: "ٱلْغَيْبَ", transliteration: "l-ghayba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the unseen", ur: "(of) the unseen" } },
      { id: '7:188:16', arabic: "لَٱسْتَكْثَرْتُ", transliteration: "la-is'takthartu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely I could have multiplied", ur: "یقیناً میں could have multiplied" } },
      { id: '7:188:17', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:188:18', arabic: "ٱلْخَيْرِ", transliteration: "l-khayri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the good", ur: "the اچھا" } },
      { id: '7:188:19', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '7:188:20', arabic: "مَسَّنِىَ", transliteration: "massaniya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(could) have touched me", ur: "(could) have touched me" } },
      { id: '7:188:21', arabic: "ٱلسُّوٓءُ ۚ", transliteration: "l-sūu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the evil", ur: "the برا" } },
      { id: '7:188:22', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '7:188:23', arabic: "أَنَا۠", transliteration: "anā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(am) I", ur: "(am) میں" } },
      { id: '7:188:24', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '7:188:25', arabic: "نَذِيرٌۭ", transliteration: "nadhīrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a warner", ur: "a warner" } },
      { id: '7:188:26', arabic: "وَبَشِيرٌۭ", transliteration: "wabashīrun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a bearer of good tidings", ur: "اور a bearer of اچھا tidings" } },
      { id: '7:188:27', arabic: "لِّقَوْمٍۢ", transliteration: "liqawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to a people", ur: "کو a لوگ" } },
      { id: '7:188:28', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "who believe", ur: "جو ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'مضاف + مضاف إليه' },
        { from: 20, to: 21, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  189: {
    text: "۞ هُوَ ٱلَّذِى خَلَقَكُم مِّن نَّفْسٍۢ وَٰحِدَةٍۢ وَجَعَلَ مِنْهَا زَوْجَهَا لِيَسْكُنَ إِلَيْهَا ۖ فَلَمَّا تَغَشَّىٰهَا حَمَلَتْ حَمْلًا خَفِيفًۭا فَمَرَّتْ بِهِۦ ۖ فَلَمَّآ أَثْقَلَت دَّعَوَا ٱللَّهَ رَبَّهُمَا لَئِنْ ءَاتَيْتَنَا صَـٰلِحًۭا لَّنَكُونَنَّ مِنَ ٱلشَّـٰكِرِينَ",
    translation: {
      en: "",
      ur: "وہ خدا ہی تو ہے جس نے تم کو ایک شخص سے پیدا کیا اور اس سے اس کا جوڑا بنایا تاکہ اس سے راحت حاصل کرے۔ سو جب وہ اس کے پاس جاتا ہے تو اسے ہلکا سا حمل رہ جاتا ہے اور وہ اس کے ساتھ چلتی پھرتی ہے۔ پھر جب کچھ بوجھ معلوم کرتی یعنی بچہ پیٹ میں بڑا ہوتا ہے تو دونوں میاں بیوی اپنے پروردگار خدائے عزوجل سے التجا کرتے ہیں کہ اگر تو ہمیں صحیح وسالم (بچہ) دے گا تو ہم تیرے شکر گذار ہوں گے",
    },
    words: [
      { id: '7:189:1', arabic: "۞ هُوَ", transliteration: "huwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '7:189:2', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '7:189:3', arabic: "خَلَقَكُم", transliteration: "khalaqakum", pos: ['N'], posLabel: 'N', root: "خ ل ق", meaning: { en: "created you", ur: "پیدا کیا تم" } },
      { id: '7:189:4', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:189:5', arabic: "نَّفْسٍۢ", transliteration: "nafsin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a soul", ur: "a روح" } },
      { id: '7:189:6', arabic: "وَٰحِدَةٍۢ", transliteration: "wāḥidatin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "single", ur: "single" } },
      { id: '7:189:7', arabic: "وَجَعَلَ", transliteration: "wajaʿala", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "and made", ur: "اور made" } },
      { id: '7:189:8', arabic: "مِنْهَا", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '7:189:9', arabic: "زَوْجَهَا", transliteration: "zawjahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its mate", ur: "its mate" } },
      { id: '7:189:10', arabic: "لِيَسْكُنَ", transliteration: "liyaskuna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that he might live", ur: "وہ وہ might live" } },
      { id: '7:189:11', arabic: "إِلَيْهَا ۖ", transliteration: "ilayhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with her", ur: "ساتھ her" } },
      { id: '7:189:12', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:189:13', arabic: "تَغَشَّىٰهَا", transliteration: "taghashāhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he covers her", ur: "وہ covers her" } },
      { id: '7:189:14', arabic: "حَمَلَتْ", transliteration: "ḥamalat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "she carries", ur: "she carries" } },
      { id: '7:189:15', arabic: "حَمْلًا", transliteration: "ḥamlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a burden", ur: "a burden" } },
      { id: '7:189:16', arabic: "خَفِيفًۭا", transliteration: "khafīfan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "light", ur: "light" } },
      { id: '7:189:17', arabic: "فَمَرَّتْ", transliteration: "famarrat", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and continues", ur: "اور continues" } },
      { id: '7:189:18', arabic: "بِهِۦ ۖ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '7:189:19', arabic: "فَلَمَّآ", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But when", ur: "لیکن when" } },
      { id: '7:189:20', arabic: "أَثْقَلَت", transliteration: "athqalat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "she grows heavy", ur: "she grows heavy" } },
      { id: '7:189:21', arabic: "دَّعَوَا", transliteration: "daʿawā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they both invoke", ur: "وہ لوگ both invoke" } },
      { id: '7:189:22', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:189:23', arabic: "رَبَّهُمَا", transliteration: "rabbahumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their Lord", ur: "their رب" } },
      { id: '7:189:24', arabic: "لَئِنْ", transliteration: "la-in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '7:189:25', arabic: "ءَاتَيْتَنَا", transliteration: "ātaytanā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You give us", ur: "تم give us" } },
      { id: '7:189:26', arabic: "صَـٰلِحًۭا", transliteration: "ṣāliḥan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a righteous (child)", ur: "a نیک (child)" } },
      { id: '7:189:27', arabic: "لَّنَكُونَنَّ", transliteration: "lanakūnanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely we will be", ur: "یقیناً ہم will be" } },
      { id: '7:189:28', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '7:189:29', arabic: "ٱلشَّـٰكِرِينَ", transliteration: "l-shākirīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the thankful", ur: "the thankful" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 25, to: 26, label: 'فعل + فاعل' },
        { from: 27, to: 28, label: 'فعل + فاعل' },
        { from: 28, to: 29, label: 'موصوف + صفت' }
      ],
    },
  },
  190: {
    text: "فَلَمَّآ ءَاتَىٰهُمَا صَـٰلِحًۭا جَعَلَا لَهُۥ شُرَكَآءَ فِيمَآ ءَاتَىٰهُمَا ۚ فَتَعَـٰلَى ٱللَّهُ عَمَّا يُشْرِكُونَ",
    translation: {
      en: "",
      ur: "جب وہ ان کو صحیح و سالم (بچہ) دیتا ہے تو اس (بچے) میں جو وہ ان کو دیتا ہے اس کا شریک مقرر کرتے ہیں۔ جو وہ شرک کرتے ہیں (خدا کا رتبہ) اس سے بلند ہے",
    },
    words: [
      { id: '7:190:1', arabic: "فَلَمَّآ", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But when", ur: "لیکن when" } },
      { id: '7:190:2', arabic: "ءَاتَىٰهُمَا", transliteration: "ātāhumā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He gives them", ur: "وہ gives them" } },
      { id: '7:190:3', arabic: "صَـٰلِحًۭا", transliteration: "ṣāliḥan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a good, (child)", ur: "a اچھا, (child)" } },
      { id: '7:190:4', arabic: "جَعَلَا", transliteration: "jaʿalā", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "they make", ur: "وہ لوگ make" } },
      { id: '7:190:5', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for Him", ur: "for Him" } },
      { id: '7:190:6', arabic: "شُرَكَآءَ", transliteration: "shurakāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "partners", ur: "partners" } },
      { id: '7:190:7', arabic: "فِيمَآ", transliteration: "fīmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in what", ur: "میں کیا" } },
      { id: '7:190:8', arabic: "ءَاتَىٰهُمَا ۚ", transliteration: "ātāhumā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He has given them", ur: "وہ has given them" } },
      { id: '7:190:9', arabic: "فَتَعَـٰلَى", transliteration: "fataʿālā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But exalted", ur: "لیکن exalted" } },
      { id: '7:190:10', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Allah", ur: "(is) اللہ" } },
      { id: '7:190:11', arabic: "عَمَّا", transliteration: "ʿammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "above what", ur: "above کیا" } },
      { id: '7:190:12', arabic: "يُشْرِكُونَ", transliteration: "yush'rikūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they associate (with Him)", ur: "وہ لوگ associate (ساتھ Him)" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  191: {
    text: "أَيُشْرِكُونَ مَا لَا يَخْلُقُ شَيْـًۭٔا وَهُمْ يُخْلَقُونَ",
    translation: {
      en: "",
      ur: "کیا وہ ایسوں کو شریک بناتے ہیں جو کچھ بھی پیدا نہیں کرسکتے اور خود پیدا کیے جاتے ہیں",
    },
    words: [
      { id: '7:191:1', arabic: "أَيُشْرِكُونَ", transliteration: "ayush'rikūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do they associate", ur: "Do وہ لوگ associate" } },
      { id: '7:191:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:191:3', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(can) not", ur: "(can) نہیں" } },
      { id: '7:191:4', arabic: "يَخْلُقُ", transliteration: "yakhluqu", pos: ['V'], posLabel: 'V', root: "خ ل ق", meaning: { en: "create", ur: "پیدا کرنا" } },
      { id: '7:191:5', arabic: "شَيْـًۭٔا", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } },
      { id: '7:191:6', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '7:191:7', arabic: "يُخْلَقُونَ", transliteration: "yukh'laqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are created", ur: "are پیدا کیا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' }
      ],
    },
  },
  192: {
    text: "وَلَا يَسْتَطِيعُونَ لَهُمْ نَصْرًۭا وَلَآ أَنفُسَهُمْ يَنصُرُونَ",
    translation: {
      en: "",
      ur: "اور نہ ان کی مدد کی طاقت رکھتے ہیں اور نہ اپنی ہی مدد کرسکتے ہیں",
    },
    words: [
      { id: '7:192:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '7:192:2', arabic: "يَسْتَطِيعُونَ", transliteration: "yastaṭīʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are able", ur: "وہ لوگ are able" } },
      { id: '7:192:3', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to (give) them", ur: "کو (give) them" } },
      { id: '7:192:4', arabic: "نَصْرًۭا", transliteration: "naṣran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "any help", ur: "any help" } },
      { id: '7:192:5', arabic: "وَلَآ", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '7:192:6', arabic: "أَنفُسَهُمْ", transliteration: "anfusahum", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "themselves", ur: "themselves" } },
      { id: '7:192:7', arabic: "يَنصُرُونَ", transliteration: "yanṣurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "can they help", ur: "can وہ لوگ help" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  193: {
    text: "وَإِن تَدْعُوهُمْ إِلَى ٱلْهُدَىٰ لَا يَتَّبِعُوكُمْ ۚ سَوَآءٌ عَلَيْكُمْ أَدَعَوْتُمُوهُمْ أَمْ أَنتُمْ صَـٰمِتُونَ",
    translation: {
      en: "",
      ur: "اگر تم ان کو سیدھے رستے کی طرف بلاؤ تو تمہارا کہا نہ مانیں۔ تمہارے لیے برابر ہے کہ تم ان کو بلاؤ یا چپکے ہو رہو",
    },
    words: [
      { id: '7:193:1', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '7:193:2', arabic: "تَدْعُوهُمْ", transliteration: "tadʿūhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you call them", ur: "تم call them" } },
      { id: '7:193:3', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '7:193:4', arabic: "ٱلْهُدَىٰ", transliteration: "l-hudā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the guidance", ur: "the guidance" } },
      { id: '7:193:5', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:193:6', arabic: "يَتَّبِعُوكُمْ ۚ", transliteration: "yattabiʿūkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will they follow you", ur: "will وہ لوگ follow تم" } },
      { id: '7:193:7', arabic: "سَوَآءٌ", transliteration: "sawāon", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(It is) same", ur: "(It is) same" } },
      { id: '7:193:8', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '7:193:9', arabic: "أَدَعَوْتُمُوهُمْ", transliteration: "adaʿawtumūhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "whether you call them", ur: "whether تم call them" } },
      { id: '7:193:10', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '7:193:11', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '7:193:12', arabic: "صَـٰمِتُونَ", transliteration: "ṣāmitūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "remain silent", ur: "remain silent" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'نفی + فعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  194: {
    text: "إِنَّ ٱلَّذِينَ تَدْعُونَ مِن دُونِ ٱللَّهِ عِبَادٌ أَمْثَالُكُمْ ۖ فَٱدْعُوهُمْ فَلْيَسْتَجِيبُوا۟ لَكُمْ إِن كُنتُمْ صَـٰدِقِينَ",
    translation: {
      en: "",
      ur: "(مشرکو) جن کو تم خدا کے سوا پکارتے ہو وہ تمہاری طرح کے بندے ہی ہیں (اچھا) تم ان کو پکارو اگر سچے ہو تو چاہیئے کہ وہ تم کو جواب بھی دیں",
    },
    words: [
      { id: '7:194:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:194:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those whom", ur: "those whom" } },
      { id: '7:194:3', arabic: "تَدْعُونَ", transliteration: "tadʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you call", ur: "تم call" } },
      { id: '7:194:4', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:194:5', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides", ur: "besides" } },
      { id: '7:194:6', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '7:194:7', arabic: "عِبَادٌ", transliteration: "ʿibādun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) slaves", ur: "(are) slaves" } },
      { id: '7:194:8', arabic: "أَمْثَالُكُمْ ۖ", transliteration: "amthālukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like you", ur: "like تم" } },
      { id: '7:194:9', arabic: "فَٱدْعُوهُمْ", transliteration: "fa-id'ʿūhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So invoke them", ur: "So invoke them" } },
      { id: '7:194:10', arabic: "فَلْيَسْتَجِيبُوا۟", transliteration: "falyastajībū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and let them respond", ur: "اور let them respond" } },
      { id: '7:194:11', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '7:194:12', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '7:194:13', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '7:194:14', arabic: "صَـٰدِقِينَ", transliteration: "ṣādiqīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "truthful", ur: "truthful" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  195: {
    text: "أَلَهُمْ أَرْجُلٌۭ يَمْشُونَ بِهَآ ۖ أَمْ لَهُمْ أَيْدٍۢ يَبْطِشُونَ بِهَآ ۖ أَمْ لَهُمْ أَعْيُنٌۭ يُبْصِرُونَ بِهَآ ۖ أَمْ لَهُمْ ءَاذَانٌۭ يَسْمَعُونَ بِهَا ۗ قُلِ ٱدْعُوا۟ شُرَكَآءَكُمْ ثُمَّ كِيدُونِ فَلَا تُنظِرُونِ",
    translation: {
      en: "",
      ur: "بھلا ان کے پاؤں ہیں جن سے چلیں یا ہاتھ ہیں جن سے پکڑیں یا آنکھیں ہیں جن سے دیکھیں یا کان ہیں جن سے سنیں؟ کہہ دو کہ اپنے شریکوں کو بلالو اور میرے بارے میں (جو) تدبیر (کرنی ہو) کرلو اور مجھے کچھ مہلت بھی نہ دو (پھر دیکھو کہ وہ میرا کیا کرسکتے ہیں)",
    },
    words: [
      { id: '7:195:1', arabic: "أَلَهُمْ", transliteration: "alahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Are for them", ur: "Are for them" } },
      { id: '7:195:2', arabic: "أَرْجُلٌۭ", transliteration: "arjulun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "feet", ur: "feet" } },
      { id: '7:195:3', arabic: "يَمْشُونَ", transliteration: "yamshūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) walk", ur: "(کو) walk" } },
      { id: '7:195:4', arabic: "بِهَآ ۖ", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with [it]", ur: "ساتھ [it]" } },
      { id: '7:195:5', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '7:195:6', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '7:195:7', arabic: "أَيْدٍۢ", transliteration: "aydin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "hands", ur: "hands" } },
      { id: '7:195:8', arabic: "يَبْطِشُونَ", transliteration: "yabṭishūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) hold", ur: "(کو) hold" } },
      { id: '7:195:9', arabic: "بِهَآ ۖ", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with [it]", ur: "ساتھ [it]" } },
      { id: '7:195:10', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '7:195:11', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '7:195:12', arabic: "أَعْيُنٌۭ", transliteration: "aʿyunun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "eyes", ur: "eyes" } },
      { id: '7:195:13', arabic: "يُبْصِرُونَ", transliteration: "yub'ṣirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) see", ur: "(کو) دیکھنا" } },
      { id: '7:195:14', arabic: "بِهَآ ۖ", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with [it]", ur: "ساتھ [it]" } },
      { id: '7:195:15', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '7:195:16', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '7:195:17', arabic: "ءَاذَانٌۭ", transliteration: "ādhānun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "ears", ur: "ears" } },
      { id: '7:195:18', arabic: "يَسْمَعُونَ", transliteration: "yasmaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) hear", ur: "(کو) سننا" } },
      { id: '7:195:19', arabic: "بِهَا ۗ", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with [it]", ur: "ساتھ [it]" } },
      { id: '7:195:20', arabic: "قُلِ", transliteration: "quli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '7:195:21', arabic: "ٱدْعُوا۟", transliteration: "id'ʿū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Call", ur: "Call" } },
      { id: '7:195:22', arabic: "شُرَكَآءَكُمْ", transliteration: "shurakāakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your partners", ur: "your partners" } },
      { id: '7:195:23', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '7:195:24', arabic: "كِيدُونِ", transliteration: "kīdūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "scheme against me", ur: "scheme against me" } },
      { id: '7:195:25', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '7:195:26', arabic: "تُنظِرُونِ", transliteration: "tunẓirūni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "give me respite", ur: "give me respite" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  196: {
    text: "إِنَّ وَلِـِّۧىَ ٱللَّهُ ٱلَّذِى نَزَّلَ ٱلْكِتَـٰبَ ۖ وَهُوَ يَتَوَلَّى ٱلصَّـٰلِحِينَ",
    translation: {
      en: "",
      ur: "میرا مددگار تو خدا ہی ہے جس نے کتاب (برحق) نازل کی۔ اور نیک لوگوں کا وہی دوستدار ہے",
    },
    words: [
      { id: '7:196:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:196:2', arabic: "وَلِـِّۧىَ", transliteration: "waliyyiya", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "my protector", ur: "my protector" } },
      { id: '7:196:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Allah", ur: "(is) اللہ" } },
      { id: '7:196:4', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the One Who", ur: "the One جو" } },
      { id: '7:196:5', arabic: "نَزَّلَ", transliteration: "nazzala", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "revealed", ur: "revealed" } },
      { id: '7:196:6', arabic: "ٱلْكِتَـٰبَ ۖ", transliteration: "l-kitāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '7:196:7', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '7:196:8', arabic: "يَتَوَلَّى", transliteration: "yatawallā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "protects", ur: "protects" } },
      { id: '7:196:9', arabic: "ٱلصَّـٰلِحِينَ", transliteration: "l-ṣāliḥīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the righteous", ur: "the نیک" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  197: {
    text: "وَٱلَّذِينَ تَدْعُونَ مِن دُونِهِۦ لَا يَسْتَطِيعُونَ نَصْرَكُمْ وَلَآ أَنفُسَهُمْ يَنصُرُونَ",
    translation: {
      en: "",
      ur: "اور جن کو تم خدا کے سوا پکارتے ہو وہ نہ تمہاری ہی مدد کی طاقت رکھتے ہیں اور نہ خود ہی اپنی مدد کرسکتے ہیں",
    },
    words: [
      { id: '7:197:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those whom", ur: "اور those whom" } },
      { id: '7:197:2', arabic: "تَدْعُونَ", transliteration: "tadʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you invoke", ur: "تم invoke" } },
      { id: '7:197:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:197:4', arabic: "دُونِهِۦ", transliteration: "dūnihi", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides Him", ur: "besides Him" } },
      { id: '7:197:5', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:197:6', arabic: "يَسْتَطِيعُونَ", transliteration: "yastaṭīʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are able", ur: "وہ لوگ are able" } },
      { id: '7:197:7', arabic: "نَصْرَكُمْ", transliteration: "naṣrakum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) help you", ur: "(کو) help تم" } },
      { id: '7:197:8', arabic: "وَلَآ", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '7:197:9', arabic: "أَنفُسَهُمْ", transliteration: "anfusahum", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "themselves", ur: "themselves" } },
      { id: '7:197:10', arabic: "يَنصُرُونَ", transliteration: "yanṣurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "can they help", ur: "can وہ لوگ help" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'نفی + فعل' }
      ],
    },
  },
  198: {
    text: "وَإِن تَدْعُوهُمْ إِلَى ٱلْهُدَىٰ لَا يَسْمَعُوا۟ ۖ وَتَرَىٰهُمْ يَنظُرُونَ إِلَيْكَ وَهُمْ لَا يُبْصِرُونَ",
    translation: {
      en: "",
      ur: "اور اگر تم ان کو سیدھے رستے کی طرف بلاؤ تو سن نہ سکیں اور تم انہیں دیکھتے ہو کہ (بہ ظاہر) آنکھیں کھولے تمہاری طرف دیکھ رہے ہیں مگر (فی الواقع) کچھ نہیں دیکھتے",
    },
    words: [
      { id: '7:198:1', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '7:198:2', arabic: "تَدْعُوهُمْ", transliteration: "tadʿūhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you call them", ur: "تم call them" } },
      { id: '7:198:3', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '7:198:4', arabic: "ٱلْهُدَىٰ", transliteration: "l-hudā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the guidance", ur: "the guidance" } },
      { id: '7:198:5', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:198:6', arabic: "يَسْمَعُوا۟ ۖ", transliteration: "yasmaʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "do they not", ur: "do وہ لوگ نہیں" } },
      { id: '7:198:7', arabic: "وَتَرَىٰهُمْ", transliteration: "watarāhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And you see them", ur: "اور تم دیکھنا them" } },
      { id: '7:198:8', arabic: "يَنظُرُونَ", transliteration: "yanẓurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "looking", ur: "looking" } },
      { id: '7:198:9', arabic: "إِلَيْكَ", transliteration: "ilayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "at you", ur: "at تم" } },
      { id: '7:198:10', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but they ", ur: "لیکن وہ لوگ " } },
      { id: '7:198:11', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:198:12', arabic: "يُبْصِرُونَ", transliteration: "yub'ṣirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(do) they see", ur: "(do) وہ لوگ دیکھنا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'نفی + فعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'نفی + فعل' }
      ],
    },
  },
  199: {
    text: "خُذِ ٱلْعَفْوَ وَأْمُرْ بِٱلْعُرْفِ وَأَعْرِضْ عَنِ ٱلْجَـٰهِلِينَ",
    translation: {
      en: "",
      ur: "(اے محمدﷺ) عفو اختیار کرو اور نیک کام کرنے کا حکم دو اور جاہلوں سے کنارہ کرلو",
    },
    words: [
      { id: '7:199:1', arabic: "خُذِ", transliteration: "khudhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Hold", ur: "Hold" } },
      { id: '7:199:2', arabic: "ٱلْعَفْوَ", transliteration: "l-ʿafwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) forgiveness", ur: "(کو) مغفرت" } },
      { id: '7:199:3', arabic: "وَأْمُرْ", transliteration: "wamur", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and enjoin", ur: "اور enjoin" } },
      { id: '7:199:4', arabic: "بِٱلْعُرْفِ", transliteration: "bil-ʿur'fi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "the good", ur: "the اچھا" } },
      { id: '7:199:5', arabic: "وَأَعْرِضْ", transliteration: "wa-aʿriḍ", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and turn away", ur: "اور turn away" } },
      { id: '7:199:6', arabic: "عَنِ", transliteration: "ʿani", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:199:7', arabic: "ٱلْجَـٰهِلِينَ", transliteration: "l-jāhilīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ignorant", ur: "the ignorant" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  200: {
    text: "وَإِمَّا يَنزَغَنَّكَ مِنَ ٱلشَّيْطَـٰنِ نَزْغٌۭ فَٱسْتَعِذْ بِٱللَّهِ ۚ إِنَّهُۥ سَمِيعٌ عَلِيمٌ",
    translation: {
      en: "",
      ur: "اور اگر شیطان کی طرف سے تمہارے دل میں کسی طرح کا وسوسہ پیدا ہو تو خدا سے پناہ مانگو۔ بےشک وہ سننے والا (اور) سب کچھ جاننے والا ہے",
    },
    words: [
      { id: '7:200:1', arabic: "وَإِمَّا", transliteration: "wa-immā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '7:200:2', arabic: "يَنزَغَنَّكَ", transliteration: "yanzaghannaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "an evil suggestion comes to you", ur: "an برا suggestion comes کو تم" } },
      { id: '7:200:3', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:200:4', arabic: "ٱلشَّيْطَـٰنِ", transliteration: "l-shayṭāni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] Shaitaan", ur: "[the] Shaitaan" } },
      { id: '7:200:5', arabic: "نَزْغٌۭ", transliteration: "nazghun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "[an evil suggestion]", ur: "[an برا suggestion]" } },
      { id: '7:200:6', arabic: "فَٱسْتَعِذْ", transliteration: "fa-is'taʿidh", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then seek refuge", ur: "پھر seek refuge" } },
      { id: '7:200:7', arabic: "بِٱللَّهِ ۚ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Allah", ur: "میں اللہ" } },
      { id: '7:200:8', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, He", ur: "بیشک, وہ" } },
      { id: '7:200:9', arabic: "سَمِيعٌ", transliteration: "samīʿun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) All-Hearing", ur: "(is) سب سننے والا" } },
      { id: '7:200:10', arabic: "عَلِيمٌ", transliteration: "ʿalīmun", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "All-Knowing", ur: "سب جاننے والا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  201: {
    text: "إِنَّ ٱلَّذِينَ ٱتَّقَوْا۟ إِذَا مَسَّهُمْ طَـٰٓئِفٌۭ مِّنَ ٱلشَّيْطَـٰنِ تَذَكَّرُوا۟ فَإِذَا هُم مُّبْصِرُونَ",
    translation: {
      en: "",
      ur: "جو لوگ پرہیزگار ہیں جب ان کو شیطان کی طرف سے کوئی وسوسہ پیدا ہوتا ہے تو چونک پڑتے ہیں اور (دل کی آنکھیں کھول کر) دیکھنے لگتے ہیں",
    },
    words: [
      { id: '7:201:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:201:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '7:201:3', arabic: "ٱتَّقَوْا۟", transliteration: "ittaqaw", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fear (Allah)", ur: "ڈرنا (اللہ)" } },
      { id: '7:201:4', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '7:201:5', arabic: "مَسَّهُمْ", transliteration: "massahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "touches them", ur: "touches them" } },
      { id: '7:201:6', arabic: "طَـٰٓئِفٌۭ", transliteration: "ṭāifun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an evil thought", ur: "an برا thought" } },
      { id: '7:201:7', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:201:8', arabic: "ٱلشَّيْطَـٰنِ", transliteration: "l-shayṭāni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan", ur: "the Shaitaan" } },
      { id: '7:201:9', arabic: "تَذَكَّرُوا۟", transliteration: "tadhakkarū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they remember (Allah)", ur: "وہ لوگ remember (اللہ)" } },
      { id: '7:201:10', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and then", ur: "اور پھر" } },
      { id: '7:201:11', arabic: "هُم", transliteration: "hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '7:201:12', arabic: "مُّبْصِرُونَ", transliteration: "mub'ṣirūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) those who see (aright)", ur: "(are) جو لوگ دیکھنا (aright)" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  202: {
    text: "وَإِخْوَٰنُهُمْ يَمُدُّونَهُمْ فِى ٱلْغَىِّ ثُمَّ لَا يُقْصِرُونَ",
    translation: {
      en: "",
      ur: "اور ان (کفار) کے بھائی انہیں گمراہی میں کھینچے جاتے ہیں پھر (اس میں کسی طرح کی) کوتاہی نہیں کرتے",
    },
    words: [
      { id: '7:202:1', arabic: "وَإِخْوَٰنُهُمْ", transliteration: "wa-ikh'wānuhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But their brothers", ur: "لیکن their brothers" } },
      { id: '7:202:2', arabic: "يَمُدُّونَهُمْ", transliteration: "yamuddūnahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they plunge them", ur: "وہ لوگ plunge them" } },
      { id: '7:202:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:202:4', arabic: "ٱلْغَىِّ", transliteration: "l-ghayi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the error", ur: "the error" } },
      { id: '7:202:5', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '7:202:6', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:202:7', arabic: "يُقْصِرُونَ", transliteration: "yuq'ṣirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they cease", ur: "وہ لوگ cease" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'نفی + فعل' }
      ],
    },
  },
  203: {
    text: "وَإِذَا لَمْ تَأْتِهِم بِـَٔايَةٍۢ قَالُوا۟ لَوْلَا ٱجْتَبَيْتَهَا ۚ قُلْ إِنَّمَآ أَتَّبِعُ مَا يُوحَىٰٓ إِلَىَّ مِن رَّبِّى ۚ هَـٰذَا بَصَآئِرُ مِن رَّبِّكُمْ وَهُدًۭى وَرَحْمَةٌۭ لِّقَوْمٍۢ يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "اور جب تم ان کے پاس (کچھ دنوں تک) کوئی آیت نہیں لاتے تو کہتے ہیں کہ تم نے (اپنی طرف سے) کیوں نہیں بنالی۔ کہہ دو کہ میں تو اسی کی پیروی کرتا ہوں جو میرے پروردگار کی طرف سے میرے پاس آتا ہے۔ یہ قرآن تمہارے پروردگار کی جانب سے دانش وبصیرت اور مومنوں کے لیے ہدایت اور رحمت ہے",
    },
    words: [
      { id: '7:203:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:203:2', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:203:3', arabic: "تَأْتِهِم", transliteration: "tatihim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you bring them", ur: "تم bring them" } },
      { id: '7:203:4', arabic: "بِـَٔايَةٍۢ", transliteration: "biāyatin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "a Sign", ur: "a نشانی" } },
      { id: '7:203:5', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they say", ur: "وہ لوگ کہو" } },
      { id: '7:203:6', arabic: "لَوْلَا", transliteration: "lawlā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Why (have) not", ur: "Why (have) نہیں" } },
      { id: '7:203:7', arabic: "ٱجْتَبَيْتَهَا ۚ", transliteration: "ij'tabaytahā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you devised it", ur: "تم devised it" } },
      { id: '7:203:8', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '7:203:9', arabic: "إِنَّمَآ", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '7:203:10', arabic: "أَتَّبِعُ", transliteration: "attabiʿu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I follow", ur: "میں follow" } },
      { id: '7:203:11', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '7:203:12', arabic: "يُوحَىٰٓ", transliteration: "yūḥā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is revealed", ur: "is revealed" } },
      { id: '7:203:13', arabic: "إِلَىَّ", transliteration: "ilayya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to me", ur: "کو me" } },
      { id: '7:203:14', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:203:15', arabic: "رَّبِّى ۚ", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my Lord", ur: "my رب" } },
      { id: '7:203:16', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "This (is)", ur: "This (is)" } },
      { id: '7:203:17', arabic: "بَصَآئِرُ", transliteration: "baṣāiru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "enlightenment", ur: "enlightenment" } },
      { id: '7:203:18', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:203:19', arabic: "رَّبِّكُمْ", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:203:20', arabic: "وَهُدًۭى", transliteration: "wahudan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and guidance", ur: "اور guidance" } },
      { id: '7:203:21', arabic: "وَرَحْمَةٌۭ", transliteration: "waraḥmatun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and mercy", ur: "اور رحمت" } },
      { id: '7:203:22', arabic: "لِّقَوْمٍۢ", transliteration: "liqawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for a people", ur: "for a لوگ" } },
      { id: '7:203:23', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "who believe", ur: "جو ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'موصول + صلة' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'جار + مجرور' }
      ],
    },
  },
  204: {
    text: "وَإِذَا قُرِئَ ٱلْقُرْءَانُ فَٱسْتَمِعُوا۟ لَهُۥ وَأَنصِتُوا۟ لَعَلَّكُمْ تُرْحَمُونَ",
    translation: {
      en: "",
      ur: "اور جب قرآن پڑھا جائے تو توجہ سے سنا کرو اور خاموش رہا کرو تاکہ تم پر رحم کیا جائے",
    },
    words: [
      { id: '7:204:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '7:204:2', arabic: "قُرِئَ", transliteration: "quri-a", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is recited", ur: "is recited" } },
      { id: '7:204:3', arabic: "ٱلْقُرْءَانُ", transliteration: "l-qur'ānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Quran", ur: "the Quran" } },
      { id: '7:204:4', arabic: "فَٱسْتَمِعُوا۟", transliteration: "fa-is'tamiʿū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then listen", ur: "پھر listen" } },
      { id: '7:204:5', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to it", ur: "کو it" } },
      { id: '7:204:6', arabic: "وَأَنصِتُوا۟", transliteration: "wa-anṣitū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and pay attention", ur: "اور pay attention" } },
      { id: '7:204:7', arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that you may", ur: "so وہ تم may" } },
      { id: '7:204:8', arabic: "تُرْحَمُونَ", transliteration: "tur'ḥamūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "receive mercy", ur: "receive رحمت" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  205: {
    text: "وَٱذْكُر رَّبَّكَ فِى نَفْسِكَ تَضَرُّعًۭا وَخِيفَةًۭ وَدُونَ ٱلْجَهْرِ مِنَ ٱلْقَوْلِ بِٱلْغُدُوِّ وَٱلْـَٔاصَالِ وَلَا تَكُن مِّنَ ٱلْغَـٰفِلِينَ",
    translation: {
      en: "",
      ur: "اور اپنے پروردگار کو دل ہی دل میں عاجزی اور خوف سے اور پست آواز سے صبح وشام یاد کرتے رہو اور (دیکھنا) غافل نہ ہونا",
    },
    words: [
      { id: '7:205:1', arabic: "وَٱذْكُر", transliteration: "wa-udh'kur", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And remember", ur: "اور remember" } },
      { id: '7:205:2', arabic: "رَّبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:205:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '7:205:4', arabic: "نَفْسِكَ", transliteration: "nafsika", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "yourself", ur: "yourself" } },
      { id: '7:205:5', arabic: "تَضَرُّعًۭا", transliteration: "taḍarruʿan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "humbly", ur: "humbly" } },
      { id: '7:205:6', arabic: "وَخِيفَةًۭ", transliteration: "wakhīfatan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (in) fear", ur: "اور (میں) ڈرنا" } },
      { id: '7:205:7', arabic: "وَدُونَ", transliteration: "wadūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and without", ur: "اور without" } },
      { id: '7:205:8', arabic: "ٱلْجَهْرِ", transliteration: "l-jahri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the loudness", ur: "the loudness" } },
      { id: '7:205:9', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '7:205:10', arabic: "ٱلْقَوْلِ", transliteration: "l-qawli", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "[the] words", ur: "[the] words" } },
      { id: '7:205:11', arabic: "بِٱلْغُدُوِّ", transliteration: "bil-ghuduwi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in the mornings", ur: "میں the mornings" } },
      { id: '7:205:12', arabic: "وَٱلْـَٔاصَالِ", transliteration: "wal-āṣāli", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (in) the evenings", ur: "اور (میں) the evenings" } },
      { id: '7:205:13', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '7:205:14', arabic: "تَكُن", transliteration: "takun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be", ur: "be" } },
      { id: '7:205:15', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '7:205:16', arabic: "ٱلْغَـٰفِلِينَ", transliteration: "l-ghāfilīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heedless", ur: "the heedless" } }
    ],
    structure: {
      relationships: [
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  206: {
    text: "إِنَّ ٱلَّذِينَ عِندَ رَبِّكَ لَا يَسْتَكْبِرُونَ عَنْ عِبَادَتِهِۦ وَيُسَبِّحُونَهُۥ وَلَهُۥ يَسْجُدُونَ ۩",
    translation: {
      en: "",
      ur: "جو لوگ تمہارے پروردگار کے پاس ہیں وہ اس کی عبادت سے گردن کشی نہیں کرتے اور اس پاک ذات کو یاد کرتے اور اس کے آگے سجدے کرتے رہتے ہیں",
    },
    words: [
      { id: '7:206:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '7:206:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '7:206:3', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) near", ur: "(are) near" } },
      { id: '7:206:4', arabic: "رَبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '7:206:5', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '7:206:6', arabic: "يَسْتَكْبِرُونَ", transliteration: "yastakbirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(do) they turn away in pride", ur: "(do) وہ لوگ turn away میں pride" } },
      { id: '7:206:7', arabic: "عَنْ", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '7:206:8', arabic: "عِبَادَتِهِۦ", transliteration: "ʿibādatihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His worship", ur: "His عبادت" } },
      { id: '7:206:9', arabic: "وَيُسَبِّحُونَهُۥ", transliteration: "wayusabbiḥūnahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they glorify Him", ur: "اور وہ لوگ glorify Him" } },
      { id: '7:206:10', arabic: "وَلَهُۥ", transliteration: "walahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and to Him", ur: "اور کو Him" } },
      { id: '7:206:11', arabic: "يَسْجُدُونَ ۩", transliteration: "yasjudūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they prostrate", ur: "وہ لوگ prostrate" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
};

export const TREEBANK_DATA = SURAH_7_TREEBANK;
export default SURAH_7_TREEBANK;
