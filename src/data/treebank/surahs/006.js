/**
 * Surah Al-An'am (6) - Treebank Data (Ayahs 1-165)
 * The Cattle - 165 Ayahs total
 *
 * Theme: Tawheed, refutation of polytheism, Allah's creation
 * Revelation: Makki
 */

const SURAH_6_TREEBANK = {
  1: {
    text: 'الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَجَعَلَ الظُّلُمَاتِ وَالنُّورَ ثُمَّ الَّذِينَ كَفَرُوا بِرَبِّهِمْ يَعْدِلُونَ',
    translation: {
      en: 'All praise is due to Allah, who created the heavens and the earth and made the darkness and the light. Yet those who disbelieve equate others with their Lord.',
      ur: 'تمام تعریفیں اللہ کے لیے ہیں جس نے آسمانوں اور زمین کو پیدا کیا اور اندھیرے اور روشنی بنائی۔ پھر بھی کافر اپنے رب کے ساتھ دوسروں کو برابر کرتے ہیں۔'
    },
    words: [
      { id: '6:1:1', arabic: 'الْحَمْدُ', transliteration: 'al-hamdu', pos: ['N'], posLabel: 'N', root: 'ح م د', meaning: { en: 'All praise', ur: 'تمام تعریف' } },
      { id: '6:1:2', arabic: 'لِلَّهِ', transliteration: 'lillahi', pos: ['P', 'PN'], posLabel: 'P+PN', root: 'أ ل ه', meaning: { en: 'is for Allah', ur: 'اللہ کے لیے' } },
      { id: '6:1:3', arabic: 'الَّذِي', transliteration: 'alladhi', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'Who', ur: 'جس نے' } },
      { id: '6:1:4', arabic: 'خَلَقَ', transliteration: 'khalaqa', pos: ['V'], posLabel: 'V', root: 'خ ل ق', meaning: { en: 'created', ur: 'پیدا کیا' } },
      { id: '6:1:5', arabic: 'السَّمَاوَاتِ', transliteration: 'as-samawati', pos: ['N'], posLabel: 'N', root: 'س م و', meaning: { en: 'the heavens', ur: 'آسمانوں کو' } },
      { id: '6:1:6', arabic: 'وَالْأَرْضَ', transliteration: 'wal-arda', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'أ ر ض', meaning: { en: 'and the earth', ur: 'اور زمین کو' } },
      { id: '6:1:7', arabic: 'وَجَعَلَ', transliteration: 'wa-ja\'ala', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ج ع ل', meaning: { en: 'and made', ur: 'اور بنایا' } },
      { id: '6:1:8', arabic: 'الظُّلُمَاتِ', transliteration: 'az-zulumati', pos: ['N'], posLabel: 'N', root: 'ظ ل م', meaning: { en: 'the darkness', ur: 'اندھیروں کو' } },
      { id: '6:1:9', arabic: 'وَالنُّورَ', transliteration: 'wan-nura', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ن و ر', meaning: { en: 'and the light', ur: 'اور نور کو' } },
      { id: '6:1:10', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'Yet', ur: 'پھر بھی' } },
      { id: '6:1:11', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '6:1:12', arabic: 'كَفَرُوا', transliteration: 'kafaru', pos: ['V'], posLabel: 'V', root: 'ك ف ر', meaning: { en: 'disbelieve', ur: 'کفر کیا' } },
      { id: '6:1:13', arabic: 'بِرَبِّهِمْ', transliteration: 'bi-rabbihim', pos: ['P', 'N', 'PRON'], posLabel: 'P+N+PRON', root: 'ر ب ب', meaning: { en: 'with their Lord', ur: 'اپنے رب کے ساتھ' } },
      { id: '6:1:14', arabic: 'يَعْدِلُونَ', transliteration: 'ya\'dilun', pos: ['V'], posLabel: 'V', root: 'ع د ل', meaning: { en: 'equate (others)', ur: 'برابر کرتے ہیں' } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 11, to: 12, label: 'موصول + صلة' },
      ],
    },
  },
  2: {
    text: 'هُوَ الَّذِي خَلَقَكُم مِّن طِينٍ ثُمَّ قَضَىٰ أَجَلًا وَأَجَلٌ مُّسَمًّى عِندَهُ ثُمَّ أَنتُمْ تَمْتَرُونَ',
    translation: {
      en: 'It is He who created you from clay and then decreed a term and a specified time known to Him; yet you are in doubt.',
      ur: 'وہی ہے جس نے تمہیں مٹی سے پیدا کیا، پھر ایک وقت مقرر کیا اور ایک وقت معین اس کے پاس ہے۔ پھر بھی تم شک میں ہو۔'
    },
    words: [
      { id: '6:2:1', arabic: 'هُوَ', transliteration: 'huwa', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'He', ur: 'وہ' } },
      { id: '6:2:2', arabic: 'الَّذِي', transliteration: 'alladhi', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'Who', ur: 'جس نے' } },
      { id: '6:2:3', arabic: 'خَلَقَكُم', transliteration: 'khalaqakum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'خ ل ق', meaning: { en: 'created you', ur: 'تمہیں پیدا کیا' } },
      { id: '6:2:4', arabic: 'مِّن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:2:5', arabic: 'طِينٍ', transliteration: 'tinin', pos: ['N'], posLabel: 'N', root: 'ط ي ن', meaning: { en: 'clay', ur: 'مٹی' } },
      { id: '6:2:6', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '6:2:7', arabic: 'قَضَىٰ', transliteration: 'qada', pos: ['V'], posLabel: 'V', root: 'ق ض ي', meaning: { en: 'decreed', ur: 'مقرر کیا' } },
      { id: '6:2:8', arabic: 'أَجَلًا', transliteration: 'ajalan', pos: ['N'], posLabel: 'N', root: 'أ ج ل', meaning: { en: 'a term', ur: 'ایک وقت' } },
      { id: '6:2:9', arabic: 'وَأَجَلٌ', transliteration: 'wa-ajalun', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'أ ج ل', meaning: { en: 'and a term', ur: 'اور ایک وقت' } },
      { id: '6:2:10', arabic: 'مُّسَمًّى', transliteration: 'musamman', pos: ['ADJ'], posLabel: 'ADJ', root: 'س م و', meaning: { en: 'specified', ur: 'معین' } },
      { id: '6:2:11', arabic: 'عِندَهُ', transliteration: '\'indahu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ع ن د', meaning: { en: 'with Him', ur: 'اس کے پاس' } },
      { id: '6:2:12', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'yet', ur: 'پھر بھی' } },
      { id: '6:2:13', arabic: 'أَنتُمْ', transliteration: 'antum', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'you', ur: 'تم' } },
      { id: '6:2:14', arabic: 'تَمْتَرُونَ', transliteration: 'tamtarun', pos: ['V'], posLabel: 'V', root: 'م ر ي', meaning: { en: 'are in doubt', ur: 'شک میں ہو' } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
      ],
    },
  },
  3: {
    text: 'وَهُوَ اللَّهُ فِي السَّمَاوَاتِ وَفِي الْأَرْضِ يَعْلَمُ سِرَّكُمْ وَجَهْرَكُمْ وَيَعْلَمُ مَا تَكْسِبُونَ',
    translation: {
      en: 'And He is Allah in the heavens and on the earth. He knows your secret and what you make public, and He knows what you earn.',
      ur: 'اور وہی اللہ ہے آسمانوں اور زمین میں۔ وہ تمہاری پوشیدہ اور ظاہر باتیں جانتا ہے اور جو کچھ تم کماتے ہو وہ جانتا ہے۔'
    },
    words: [
      { id: '6:3:1', arabic: 'وَهُوَ', transliteration: 'wa-huwa', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'And He', ur: 'اور وہ' } },
      { id: '6:3:2', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'is Allah', ur: 'اللہ ہے' } },
      { id: '6:3:3', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '6:3:4', arabic: 'السَّمَاوَاتِ', transliteration: 'as-samawati', pos: ['N'], posLabel: 'N', root: 'س م و', meaning: { en: 'the heavens', ur: 'آسمانوں' } },
      { id: '6:3:5', arabic: 'وَفِي', transliteration: 'wa-fi', pos: ['CONJ', 'P'], posLabel: 'CONJ+P', root: null, meaning: { en: 'and in', ur: 'اور میں' } },
      { id: '6:3:6', arabic: 'الْأَرْضِ', transliteration: 'al-ardi', pos: ['N'], posLabel: 'N', root: 'أ ر ض', meaning: { en: 'the earth', ur: 'زمین' } },
      { id: '6:3:7', arabic: 'يَعْلَمُ', transliteration: 'ya\'lamu', pos: ['V'], posLabel: 'V', root: 'ع ل م', meaning: { en: 'He knows', ur: 'وہ جانتا ہے' } },
      { id: '6:3:8', arabic: 'سِرَّكُمْ', transliteration: 'sirrakum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'س ر ر', meaning: { en: 'your secret', ur: 'تمہارا راز' } },
      { id: '6:3:9', arabic: 'وَجَهْرَكُمْ', transliteration: 'wa-jahrakum', pos: ['CONJ', 'N', 'PRON'], posLabel: 'CONJ+N+PRON', root: 'ج ه ر', meaning: { en: 'and your public (speech)', ur: 'اور تمہارا ظاہر' } },
      { id: '6:3:10', arabic: 'وَيَعْلَمُ', transliteration: 'wa-ya\'lamu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ع ل م', meaning: { en: 'and He knows', ur: 'اور جانتا ہے' } },
      { id: '6:3:11', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '6:3:12', arabic: 'تَكْسِبُونَ', transliteration: 'taksibun', pos: ['V'], posLabel: 'V', root: 'ك س ب', meaning: { en: 'you earn', ur: 'تم کماتے ہو' } }
    ],
    structure: {
      relationships: [
        { from: 11, to: 12, label: 'موصول + صلة' },
      ],
    },
  },
  4: {
    text: 'وَمَا تَأْتِيهِم مِّنْ آيَةٍ مِّنْ آيَاتِ رَبِّهِمْ إِلَّا كَانُوا عَنْهَا مُعْرِضِينَ',
    translation: {
      en: 'And no sign comes to them from the signs of their Lord except that they turn away from it.',
      ur: 'اور ان کے پاس ان کے رب کی نشانیوں میں سے کوئی نشانی نہیں آتی مگر وہ اس سے منہ موڑ لیتے ہیں۔'
    },
    words: [
      { id: '6:4:1', arabic: 'وَمَا', transliteration: 'wa-ma', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '6:4:2', arabic: 'تَأْتِيهِم', transliteration: 'ta\'tihim', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'أ ت ي', meaning: { en: 'comes to them', ur: 'ان کے پاس آتی' } },
      { id: '6:4:3', arabic: 'مِّنْ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:4:4', arabic: 'آيَةٍ', transliteration: 'ayatin', pos: ['N'], posLabel: 'N', root: 'أ ي ي', meaning: { en: 'a sign', ur: 'کوئی نشانی' } },
      { id: '6:4:5', arabic: 'مِّنْ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'میں سے' } },
      { id: '6:4:6', arabic: 'آيَاتِ', transliteration: 'ayati', pos: ['N'], posLabel: 'N', root: 'أ ي ي', meaning: { en: 'the signs of', ur: 'نشانیوں' } },
      { id: '6:4:7', arabic: 'رَبِّهِمْ', transliteration: 'rabbihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'their Lord', ur: 'ان کے رب کی' } },
      { id: '6:4:8', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except', ur: 'مگر' } },
      { id: '6:4:9', arabic: 'كَانُوا', transliteration: 'kanu', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'they were', ur: 'وہ تھے' } },
      { id: '6:4:10', arabic: 'عَنْهَا', transliteration: '\'anha', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'from it', ur: 'اس سے' } },
      { id: '6:4:11', arabic: 'مُعْرِضِينَ', transliteration: 'mu\'ridin', pos: ['N'], posLabel: 'N', root: 'ع ر ض', meaning: { en: 'turning away', ur: 'منہ موڑنے والے' } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  5: {
    text: 'فَقَدْ كَذَّبُوا بِالْحَقِّ لَمَّا جَاءَهُمْ فَسَوْفَ يَأْتِيهِمْ أَنبَاءُ مَا كَانُوا بِهِ يَسْتَهْزِئُونَ',
    translation: {
      en: 'For they had denied the truth when it came to them, but there will come to them the news of what they used to ridicule.',
      ur: 'پس انہوں نے حق کو جھٹلایا جب وہ ان کے پاس آیا۔ تو جلد ان کے پاس اس چیز کی خبریں آئیں گی جس کا وہ مذاق اڑاتے تھے۔'
    },
    words: [
      { id: '6:5:1', arabic: 'فَقَدْ', transliteration: 'fa-qad', pos: ['CONJ', 'CERT'], posLabel: 'CONJ+CERT', root: null, meaning: { en: 'For indeed', ur: 'پس بےشک' } },
      { id: '6:5:2', arabic: 'كَذَّبُوا', transliteration: 'kadhdhabu', pos: ['V'], posLabel: 'V', root: 'ك ذ ب', meaning: { en: 'they denied', ur: 'انہوں نے جھٹلایا' } },
      { id: '6:5:3', arabic: 'بِالْحَقِّ', transliteration: 'bil-haqqi', pos: ['P', 'N'], posLabel: 'P+N', root: 'ح ق ق', meaning: { en: 'the truth', ur: 'حق کو' } },
      { id: '6:5:4', arabic: 'لَمَّا', transliteration: 'lamma', pos: ['T'], posLabel: 'T', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '6:5:5', arabic: 'جَاءَهُمْ', transliteration: 'ja\'ahum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج ي أ', meaning: { en: 'it came to them', ur: 'ان کے پاس آیا' } },
      { id: '6:5:6', arabic: 'فَسَوْفَ', transliteration: 'fa-sawfa', pos: ['CONJ', 'FUT'], posLabel: 'CONJ+FUT', root: null, meaning: { en: 'but soon will', ur: 'تو جلد' } },
      { id: '6:5:7', arabic: 'يَأْتِيهِمْ', transliteration: 'ya\'tihim', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'أ ت ي', meaning: { en: 'come to them', ur: 'ان کے پاس آئے گی' } },
      { id: '6:5:8', arabic: 'أَنبَاءُ', transliteration: 'anba\'u', pos: ['N'], posLabel: 'N', root: 'ن ب أ', meaning: { en: 'the news of', ur: 'خبریں' } },
      { id: '6:5:9', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جس کا' } },
      { id: '6:5:10', arabic: 'كَانُوا', transliteration: 'kanu', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'they used to', ur: 'وہ تھے' } },
      { id: '6:5:11', arabic: 'بِهِ', transliteration: 'bihi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'at it', ur: 'اس کا' } },
      { id: '6:5:12', arabic: 'يَسْتَهْزِئُونَ', transliteration: 'yastahzi\'un', pos: ['V'], posLabel: 'V', root: 'ه ز أ', meaning: { en: 'ridicule', ur: 'مذاق اڑاتے تھے' } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'موصول + صلة' },
      ],
    },
  },
  6: {
    text: 'أَلَمْ يَرَوْا كَمْ أَهْلَكْنَا مِن قَبْلِهِم مِّن قَرْنٍ مَّكَّنَّاهُمْ فِي الْأَرْضِ مَا لَمْ نُمَكِّن لَّكُمْ وَأَرْسَلْنَا السَّمَاءَ عَلَيْهِم مِّدْرَارًا وَجَعَلْنَا الْأَنْهَارَ تَجْرِي مِن تَحْتِهِمْ فَأَهْلَكْنَاهُم بِذُنُوبِهِمْ وَأَنشَأْنَا مِن بَعْدِهِمْ قَرْنًا آخَرِينَ',
    translation: {
      en: 'Have they not seen how many generations We destroyed before them which We had established upon the earth as We have not established you? And We sent rain from the sky upon them in showers and made rivers flow beneath them; then We destroyed them for their sins and brought forth after them a generation of others.',
      ur: 'کیا انہوں نے نہیں دیکھا کہ ان سے پہلے ہم نے کتنی قوموں کو ہلاک کر دیا جنہیں ہم نے زمین میں ایسا اختیار دیا تھا جو تمہیں نہیں دیا۔ اور ہم نے ان پر آسمان سے خوب بارش برسائی اور ان کے نیچے نہریں بہائیں۔ پھر ان کے گناہوں کی وجہ سے انہیں ہلاک کر دیا اور ان کے بعد دوسری قومیں پیدا کیں۔'
    },
    words: [
      { id: '6:6:1', arabic: 'أَلَمْ', transliteration: 'a-lam', pos: ['INTG', 'NEG'], posLabel: 'INTG+NEG', root: null, meaning: { en: 'Have not', ur: 'کیا نہیں' } },
      { id: '6:6:2', arabic: 'يَرَوْا', transliteration: 'yaraw', pos: ['V'], posLabel: 'V', root: 'ر أ ي', meaning: { en: 'they seen', ur: 'انہوں نے دیکھا' } },
      { id: '6:6:3', arabic: 'كَمْ', transliteration: 'kam', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'how many', ur: 'کتنی' } },
      { id: '6:6:4', arabic: 'أَهْلَكْنَا', transliteration: 'ahlakna', pos: ['V'], posLabel: 'V', root: 'ه ل ك', meaning: { en: 'We destroyed', ur: 'ہم نے ہلاک کیا' } },
      { id: '6:6:5', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:6:6', arabic: 'قَبْلِهِم', transliteration: 'qablihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق ب ل', meaning: { en: 'before them', ur: 'ان سے پہلے' } },
      { id: '6:6:7', arabic: 'مِّن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'میں سے' } },
      { id: '6:6:8', arabic: 'قَرْنٍ', transliteration: 'qarnin', pos: ['N'], posLabel: 'N', root: 'ق ر ن', meaning: { en: 'generation', ur: 'قوم' } },
      { id: '6:6:9', arabic: 'مَّكَّنَّاهُمْ', transliteration: 'makkannahum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'م ك ن', meaning: { en: 'We established them', ur: 'ہم نے انہیں قائم کیا' } },
      { id: '6:6:10', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '6:6:11', arabic: 'الْأَرْضِ', transliteration: 'al-ardi', pos: ['N'], posLabel: 'N', root: 'أ ر ض', meaning: { en: 'the earth', ur: 'زمین' } },
      { id: '6:6:12', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '6:6:13', arabic: 'لَمْ', transliteration: 'lam', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '6:6:14', arabic: 'نُمَكِّن', transliteration: 'numakkin', pos: ['V'], posLabel: 'V', root: 'م ك ن', meaning: { en: 'We establish', ur: 'ہم قائم کریں' } },
      { id: '6:6:15', arabic: 'لَّكُمْ', transliteration: 'lakum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'for you', ur: 'تمہارے لیے' } },
      { id: '6:6:16', arabic: 'وَأَرْسَلْنَا', transliteration: 'wa-arsalna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ر س ل', meaning: { en: 'and We sent', ur: 'اور ہم نے بھیجی' } },
      { id: '6:6:17', arabic: 'السَّمَاءَ', transliteration: 'as-sama\'a', pos: ['N'], posLabel: 'N', root: 'س م و', meaning: { en: 'the sky (rain)', ur: 'آسمان (بارش)' } },
      { id: '6:6:18', arabic: 'عَلَيْهِم', transliteration: '\'alayhim', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'upon them', ur: 'ان پر' } },
      { id: '6:6:19', arabic: 'مِّدْرَارًا', transliteration: 'midraran', pos: ['N'], posLabel: 'N', root: 'د ر ر', meaning: { en: 'in showers', ur: 'خوب بارش' } },
      { id: '6:6:20', arabic: 'وَجَعَلْنَا', transliteration: 'wa-ja\'alna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ج ع ل', meaning: { en: 'and We made', ur: 'اور ہم نے بنائیں' } },
      { id: '6:6:21', arabic: 'الْأَنْهَارَ', transliteration: 'al-anhara', pos: ['N'], posLabel: 'N', root: 'ن ه ر', meaning: { en: 'the rivers', ur: 'نہریں' } },
      { id: '6:6:22', arabic: 'تَجْرِي', transliteration: 'tajri', pos: ['V'], posLabel: 'V', root: 'ج ر ي', meaning: { en: 'flow', ur: 'بہتی ہیں' } },
      { id: '6:6:23', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:6:24', arabic: 'تَحْتِهِمْ', transliteration: 'tahtihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ت ح ت', meaning: { en: 'beneath them', ur: 'ان کے نیچے' } },
      { id: '6:6:25', arabic: 'فَأَهْلَكْنَاهُم', transliteration: 'fa-ahlaknahum', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ه ل ك', meaning: { en: 'then We destroyed them', ur: 'پھر ہم نے انہیں ہلاک کیا' } },
      { id: '6:6:26', arabic: 'بِذُنُوبِهِمْ', transliteration: 'bi-dhunubihim', pos: ['P', 'N', 'PRON'], posLabel: 'P+N+PRON', root: 'ذ ن ب', meaning: { en: 'for their sins', ur: 'ان کے گناہوں کی وجہ سے' } },
      { id: '6:6:27', arabic: 'وَأَنشَأْنَا', transliteration: 'wa-ansha\'na', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ن ش أ', meaning: { en: 'and We brought forth', ur: 'اور ہم نے پیدا کیا' } },
      { id: '6:6:28', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:6:29', arabic: 'بَعْدِهِمْ', transliteration: 'ba\'dihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ب ع د', meaning: { en: 'after them', ur: 'ان کے بعد' } },
      { id: '6:6:30', arabic: 'قَرْنًا', transliteration: 'qarnan', pos: ['N'], posLabel: 'N', root: 'ق ر ن', meaning: { en: 'a generation', ur: 'قوم' } },
      { id: '6:6:31', arabic: 'آخَرِينَ', transliteration: 'akharin', pos: ['ADJ'], posLabel: 'ADJ', root: 'أ خ ر', meaning: { en: 'of others', ur: 'دوسروں کی' } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 5, to: 6, label: 'جار + مجرور' },
      { from: 7, to: 8, label: 'جار + مجرور' },
      { from: 10, to: 11, label: 'جار + مجرور' },
      { from: 13, to: 14, label: 'نفی + فعل' },
      { from: 14, to: 16, label: 'عطف' },
      { from: 16, to: 20, label: 'عطف' },
      { from: 23, to: 24, label: 'جار + مجرور' },
      { from: 22, to: 25, label: 'عطف' },
      { from: 25, to: 27, label: 'عطف' },
      { from: 28, to: 29, label: 'جار + مجرور' },
      { from: 30, to: 31, label: 'موصوف + صفت' }
      ],
    },
  },
  7: {
    text: 'وَلَوْ نَزَّلْنَا عَلَيْكَ كِتَابًا فِي قِرْطَاسٍ فَلَمَسُوهُ بِأَيْدِيهِمْ لَقَالَ الَّذِينَ كَفَرُوا إِنْ هَٰذَا إِلَّا سِحْرٌ مُّبِينٌ',
    translation: {
      en: 'And even if We had sent down to you a written scripture on a page and they touched it with their hands, the disbelievers would say, "This is not but obvious magic."',
      ur: 'اور اگر ہم تم پر کاغذ میں لکھی ہوئی کتاب بھی اتارتے اور وہ اسے اپنے ہاتھوں سے چھو لیتے، تب بھی کافر یہی کہتے کہ یہ تو صریح جادو ہے۔'
    },
    words: [
      { id: '6:7:1', arabic: 'وَلَوْ', transliteration: 'wa-law', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'And even if', ur: 'اور اگر' } },
      { id: '6:7:2', arabic: 'نَزَّلْنَا', transliteration: 'nazzalna', pos: ['V'], posLabel: 'V', root: 'ن ز ل', meaning: { en: 'We had sent down', ur: 'ہم اتارتے' } },
      { id: '6:7:3', arabic: 'عَلَيْكَ', transliteration: '\'alayka', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to you', ur: 'تم پر' } },
      { id: '6:7:4', arabic: 'كِتَابًا', transliteration: 'kitaban', pos: ['N'], posLabel: 'N', root: 'ك ت ب', meaning: { en: 'a scripture', ur: 'کتاب' } },
      { id: '6:7:5', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'on', ur: 'میں' } },
      { id: '6:7:6', arabic: 'قِرْطَاسٍ', transliteration: 'qirtasin', pos: ['N'], posLabel: 'N', root: 'ق ر ط س', meaning: { en: 'a page/paper', ur: 'کاغذ' } },
      { id: '6:7:7', arabic: 'فَلَمَسُوهُ', transliteration: 'fa-lamasuhu', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ل م س', meaning: { en: 'and they touched it', ur: 'اور وہ اسے چھوتے' } },
      { id: '6:7:8', arabic: 'بِأَيْدِيهِمْ', transliteration: 'bi-aydihim', pos: ['P', 'N', 'PRON'], posLabel: 'P+N+PRON', root: 'ي د ي', meaning: { en: 'with their hands', ur: 'اپنے ہاتھوں سے' } },
      { id: '6:7:9', arabic: 'لَقَالَ', transliteration: 'la-qala', pos: ['EMPH', 'V'], posLabel: 'EMPH+V', root: 'ق و ل', meaning: { en: 'surely would say', ur: 'ضرور کہتے' } },
      { id: '6:7:10', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '6:7:11', arabic: 'كَفَرُوا', transliteration: 'kafaru', pos: ['V'], posLabel: 'V', root: 'ك ف ر', meaning: { en: 'disbelieve', ur: 'کفر کیا' } },
      { id: '6:7:12', arabic: 'إِنْ', transliteration: 'in', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '6:7:13', arabic: 'هَٰذَا', transliteration: 'hadha', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'this', ur: 'یہ' } },
      { id: '6:7:14', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'but', ur: 'مگر' } },
      { id: '6:7:15', arabic: 'سِحْرٌ', transliteration: 'sihrun', pos: ['N'], posLabel: 'N', root: 'س ح ر', meaning: { en: 'magic', ur: 'جادو' } },
      { id: '6:7:16', arabic: 'مُّبِينٌ', transliteration: 'mubinun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ب ي ن', meaning: { en: 'obvious', ur: 'صریح' } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'موصول + صلة' },
      ],
    },
  },
  8: {
    text: 'وَقَالُوا لَوْلَا أُنزِلَ عَلَيْهِ مَلَكٌ وَلَوْ أَنزَلْنَا مَلَكًا لَّقُضِيَ الْأَمْرُ ثُمَّ لَا يُنظَرُونَ',
    translation: {
      en: 'And they say, "Why was there not sent down to him an angel?" But if We had sent down an angel, the matter would have been decided; then they would not be reprieved.',
      ur: 'اور وہ کہتے ہیں کہ اس پر کوئی فرشتہ کیوں نہیں اتارا گیا؟ اگر ہم فرشتہ اتارتے تو معاملہ طے ہو جاتا، پھر انہیں مہلت نہ دی جاتی۔'
    },
    words: [
      { id: '6:8:1', arabic: 'وَقَالُوا', transliteration: 'wa-qalu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ق و ل', meaning: { en: 'And they say', ur: 'اور وہ کہتے ہیں' } },
      { id: '6:8:2', arabic: 'لَوْلَا', transliteration: 'lawla', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'Why not', ur: 'کیوں نہیں' } },
      { id: '6:8:3', arabic: 'أُنزِلَ', transliteration: 'unzila', pos: ['V'], posLabel: 'V', root: 'ن ز ل', meaning: { en: 'was sent down', ur: 'اتارا گیا' } },
      { id: '6:8:4', arabic: 'عَلَيْهِ', transliteration: '\'alayhi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to him', ur: 'اس پر' } },
      { id: '6:8:5', arabic: 'مَلَكٌ', transliteration: 'malakun', pos: ['N'], posLabel: 'N', root: 'م ل ك', meaning: { en: 'an angel', ur: 'فرشتہ' } },
      { id: '6:8:6', arabic: 'وَلَوْ', transliteration: 'wa-law', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'And if', ur: 'اور اگر' } },
      { id: '6:8:7', arabic: 'أَنزَلْنَا', transliteration: 'anzalna', pos: ['V'], posLabel: 'V', root: 'ن ز ل', meaning: { en: 'We had sent down', ur: 'ہم اتارتے' } },
      { id: '6:8:8', arabic: 'مَلَكًا', transliteration: 'malakan', pos: ['N'], posLabel: 'N', root: 'م ل ك', meaning: { en: 'an angel', ur: 'فرشتہ' } },
      { id: '6:8:9', arabic: 'لَّقُضِيَ', transliteration: 'la-qudiya', pos: ['EMPH', 'V'], posLabel: 'EMPH+V', root: 'ق ض ي', meaning: { en: 'surely would be decided', ur: 'ضرور فیصلہ ہو جاتا' } },
      { id: '6:8:10', arabic: 'الْأَمْرُ', transliteration: 'al-amru', pos: ['N'], posLabel: 'N', root: 'أ م ر', meaning: { en: 'the matter', ur: 'معاملہ' } },
      { id: '6:8:11', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '6:8:12', arabic: 'لَا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '6:8:13', arabic: 'يُنظَرُونَ', transliteration: 'yunzarun', pos: ['V'], posLabel: 'V', root: 'ن ظ ر', meaning: { en: 'they would be reprieved', ur: 'انہیں مہلت دی جاتی' } }
    ],
    structure: {
      relationships: [
      { from: 6, to: 7, label: 'شرط + فعل' },
      { from: 12, to: 13, label: 'نفی + فعل' }
      ],
    },
  },
  9: {
    text: 'وَلَوْ جَعَلْنَاهُ مَلَكًا لَّجَعَلْنَاهُ رَجُلًا وَلَلَبَسْنَا عَلَيْهِم مَّا يَلْبِسُونَ',
    translation: {
      en: 'And if We had made him an angel, We would have made him [appear as] a man, and We would have covered them with that in which they cover themselves.',
      ur: 'اور اگر ہم فرشتے کو (رسول) بناتے تو اسے مرد کی شکل میں بناتے اور انہیں اسی شبہ میں ڈال دیتے جس میں وہ اب پڑے ہیں۔'
    },
    words: [
      { id: '6:9:1', arabic: 'وَلَوْ', transliteration: 'wa-law', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'And if', ur: 'اور اگر' } },
      { id: '6:9:2', arabic: 'جَعَلْنَاهُ', transliteration: 'ja\'alnahu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج ع ل', meaning: { en: 'We had made him', ur: 'ہم اسے بناتے' } },
      { id: '6:9:3', arabic: 'مَلَكًا', transliteration: 'malakan', pos: ['N'], posLabel: 'N', root: 'م ل ك', meaning: { en: 'an angel', ur: 'فرشتہ' } },
      { id: '6:9:4', arabic: 'لَّجَعَلْنَاهُ', transliteration: 'la-ja\'alnahu', pos: ['EMPH', 'V', 'PRON'], posLabel: 'EMPH+V+PRON', root: 'ج ع ل', meaning: { en: 'We would have made him', ur: 'ہم اسے بناتے' } },
      { id: '6:9:5', arabic: 'رَجُلًا', transliteration: 'rajulan', pos: ['N'], posLabel: 'N', root: 'ر ج ل', meaning: { en: 'a man', ur: 'آدمی' } },
      { id: '6:9:6', arabic: 'وَلَلَبَسْنَا', transliteration: 'wa-la-labasna', pos: ['CONJ', 'EMPH', 'V'], posLabel: 'CONJ+EMPH+V', root: 'ل ب س', meaning: { en: 'and We would have covered', ur: 'اور ہم ملبوس کرتے' } },
      { id: '6:9:7', arabic: 'عَلَيْهِم', transliteration: '\'alayhim', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'upon them', ur: 'ان پر' } },
      { id: '6:9:8', arabic: 'مَّا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '6:9:9', arabic: 'يَلْبِسُونَ', transliteration: 'yalbisun', pos: ['V'], posLabel: 'V', root: 'ل ب س', meaning: { en: 'they cover themselves', ur: 'وہ ملبوس کرتے ہیں' } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'موصول + صلة' },
      ],
    },
  },
  10: {
    text: 'وَلَقَدِ اسْتُهْزِئَ بِرُسُلٍ مِّن قَبْلِكَ فَحَاقَ بِالَّذِينَ سَخِرُوا مِنْهُم مَّا كَانُوا بِهِ يَسْتَهْزِئُونَ',
    translation: {
      en: 'And already were messengers ridiculed before you, but those who mocked them were enveloped by that which they used to ridicule.',
      ur: 'اور تم سے پہلے بھی رسولوں کا مذاق اڑایا گیا، پھر جو لوگ ان کا مذاق اڑاتے تھے انہیں اسی چیز نے گھیر لیا جس کا وہ مذاق اڑاتے تھے۔'
    },
    words: [
      { id: '6:10:1', arabic: 'وَلَقَدِ', transliteration: 'wa-laqadi', pos: ['CONJ', 'CERT'], posLabel: 'CONJ+CERT', root: null, meaning: { en: 'And certainly', ur: 'اور بےشک' } },
      { id: '6:10:2', arabic: 'اسْتُهْزِئَ', transliteration: 'ustuhzi\'a', pos: ['V'], posLabel: 'V', root: 'ه ز أ', meaning: { en: 'were ridiculed', ur: 'مذاق اڑایا گیا' } },
      { id: '6:10:3', arabic: 'بِرُسُلٍ', transliteration: 'bi-rusulin', pos: ['P', 'N'], posLabel: 'P+N', root: 'ر س ل', meaning: { en: 'messengers', ur: 'رسولوں کا' } },
      { id: '6:10:4', arabic: 'مِّن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:10:5', arabic: 'قَبْلِكَ', transliteration: 'qablika', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق ب ل', meaning: { en: 'before you', ur: 'تم سے پہلے' } },
      { id: '6:10:6', arabic: 'فَحَاقَ', transliteration: 'fa-haqa', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ح ي ق', meaning: { en: 'then enveloped', ur: 'پھر گھیر لیا' } },
      { id: '6:10:7', arabic: 'بِالَّذِينَ', transliteration: 'bi-lladhina', pos: ['P', 'REL'], posLabel: 'P+REL', root: null, meaning: { en: 'those who', ur: 'جن لوگوں نے' } },
      { id: '6:10:8', arabic: 'سَخِرُوا', transliteration: 'sakhiru', pos: ['V'], posLabel: 'V', root: 'س خ ر', meaning: { en: 'mocked', ur: 'مذاق اڑایا' } },
      { id: '6:10:9', arabic: 'مِنْهُم', transliteration: 'minhum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'of them', ur: 'ان میں سے' } },
      { id: '6:10:10', arabic: 'مَّا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '6:10:11', arabic: 'كَانُوا', transliteration: 'kanu', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'they used to', ur: 'وہ تھے' } },
      { id: '6:10:12', arabic: 'بِهِ', transliteration: 'bihi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'at it', ur: 'اس کا' } },
      { id: '6:10:13', arabic: 'يَسْتَهْزِئُونَ', transliteration: 'yastahzi\'un', pos: ['V'], posLabel: 'V', root: 'ه ز أ', meaning: { en: 'they ridiculed', ur: 'مذاق اڑاتے تھے' } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'موصول + صلة' },
        { from: 10, to: 11, label: 'موصول + صلة' },
      ],
    },
  },
  11: {
    text: 'قُلْ سِيرُوا فِي الْأَرْضِ ثُمَّ انظُرُوا كَيْفَ كَانَ عَاقِبَةُ الْمُكَذِّبِينَ',
    translation: {
      en: 'Say, "Travel through the earth; then observe how was the end of the deniers."',
      ur: 'کہو زمین میں چلو پھرو پھر دیکھو جھٹلانے والوں کا انجام کیسا ہوا۔'
    },
    words: [
      { id: '6:11:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:11:2', arabic: 'سِيرُوا', transliteration: 'siru', pos: ['V'], posLabel: 'V', root: 'س ي ر', meaning: { en: 'Travel', ur: 'چلو پھرو' } },
      { id: '6:11:3', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'through', ur: 'میں' } },
      { id: '6:11:4', arabic: 'الْأَرْضِ', transliteration: 'al-ardi', pos: ['N'], posLabel: 'N', root: 'أ ر ض', meaning: { en: 'the earth', ur: 'زمین' } },
      { id: '6:11:5', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '6:11:6', arabic: 'انظُرُوا', transliteration: 'unzuru', pos: ['V'], posLabel: 'V', root: 'ن ظ ر', meaning: { en: 'observe', ur: 'دیکھو' } },
      { id: '6:11:7', arabic: 'كَيْفَ', transliteration: 'kayfa', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'how', ur: 'کیسا' } },
      { id: '6:11:8', arabic: 'كَانَ', transliteration: 'kana', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'was', ur: 'تھا' } },
      { id: '6:11:9', arabic: 'عَاقِبَةُ', transliteration: '\'aqibatu', pos: ['N'], posLabel: 'N', root: 'ع ق ب', meaning: { en: 'the end of', ur: 'انجام' } },
      { id: '6:11:10', arabic: 'الْمُكَذِّبِينَ', transliteration: 'al-mukadhdhibin', pos: ['N'], posLabel: 'N', root: 'ك ذ ب', meaning: { en: 'the deniers', ur: 'جھٹلانے والوں کا' } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف الیہ' }
      ],
    },
  },
  12: {
    text: 'قُل لِّمَن مَّا فِي السَّمَاوَاتِ وَالْأَرْضِ قُل لِّلَّهِ كَتَبَ عَلَىٰ نَفْسِهِ الرَّحْمَةَ لَيَجْمَعَنَّكُمْ إِلَىٰ يَوْمِ الْقِيَامَةِ لَا رَيْبَ فِيهِ الَّذِينَ خَسِرُوا أَنفُسَهُمْ فَهُمْ لَا يُؤْمِنُونَ',
    translation: {
      en: 'Say, "To whom belongs whatever is in the heavens and earth?" Say, "To Allah." He has decreed upon Himself mercy. He will surely assemble you for the Day of Resurrection, about which there is no doubt. Those who will lose themselves do not believe.',
      ur: 'کہو آسمانوں اور زمین میں جو کچھ ہے کس کا ہے؟ کہو اللہ کا ہے۔ اس نے اپنے اوپر رحمت لازم کر لی ہے۔ وہ تمہیں قیامت کے دن ضرور جمع کرے گا جس میں کوئی شک نہیں۔ جنہوں نے اپنے آپ کو نقصان میں ڈالا وہ ایمان نہیں لاتے۔'
    },
    words: [
      { id: '6:12:1', arabic: 'قُل', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:12:2', arabic: 'لِّمَن', transliteration: 'li-man', pos: ['P', 'INTG'], posLabel: 'P+INTG', root: null, meaning: { en: 'To whom', ur: 'کس کا' } },
      { id: '6:12:3', arabic: 'مَّا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'whatever', ur: 'جو کچھ' } },
      { id: '6:12:4', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '6:12:5', arabic: 'السَّمَاوَاتِ', transliteration: 'as-samawati', pos: ['N'], posLabel: 'N', root: 'س م و', meaning: { en: 'the heavens', ur: 'آسمانوں' } },
      { id: '6:12:6', arabic: 'وَالْأَرْضِ', transliteration: 'wal-ardi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'أ ر ض', meaning: { en: 'and the earth', ur: 'اور زمین' } },
      { id: '6:12:7', arabic: 'قُل', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:12:8', arabic: 'لِّلَّهِ', transliteration: 'lillahi', pos: ['P', 'PN'], posLabel: 'P+PN', root: 'أ ل ه', meaning: { en: 'To Allah', ur: 'اللہ کا' } },
      { id: '6:12:9', arabic: 'كَتَبَ', transliteration: 'kataba', pos: ['V'], posLabel: 'V', root: 'ك ت ب', meaning: { en: 'He has decreed', ur: 'لکھ لی' } },
      { id: '6:12:10', arabic: 'عَلَىٰ', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'upon', ur: 'اوپر' } },
      { id: '6:12:11', arabic: 'نَفْسِهِ', transliteration: 'nafsihi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ن ف س', meaning: { en: 'Himself', ur: 'اپنے' } },
      { id: '6:12:12', arabic: 'الرَّحْمَةَ', transliteration: 'ar-rahmata', pos: ['N'], posLabel: 'N', root: 'ر ح م', meaning: { en: 'mercy', ur: 'رحمت' } },
      { id: '6:12:13', arabic: 'لَيَجْمَعَنَّكُمْ', transliteration: 'la-yajma\'annakum', pos: ['EMPH', 'V', 'PRON'], posLabel: 'EMPH+V+PRON', root: 'ج م ع', meaning: { en: 'He will surely assemble you', ur: 'ضرور تمہیں جمع کرے گا' } },
      { id: '6:12:14', arabic: 'إِلَىٰ', transliteration: 'ila', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'for', ur: 'تک' } },
      { id: '6:12:15', arabic: 'يَوْمِ', transliteration: 'yawmi', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: 'the Day of', ur: 'دن' } },
      { id: '6:12:16', arabic: 'الْقِيَامَةِ', transliteration: 'al-qiyamati', pos: ['N'], posLabel: 'N', root: 'ق و م', meaning: { en: 'Resurrection', ur: 'قیامت' } },
      { id: '6:12:17', arabic: 'لَا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'no', ur: 'نہیں' } },
      { id: '6:12:18', arabic: 'رَيْبَ', transliteration: 'rayba', pos: ['N'], posLabel: 'N', root: 'ر ي ب', meaning: { en: 'doubt', ur: 'شک' } },
      { id: '6:12:19', arabic: 'فِيهِ', transliteration: 'fihi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'about it', ur: 'اس میں' } },
      { id: '6:12:20', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'Those who', ur: 'جنہوں نے' } },
      { id: '6:12:21', arabic: 'خَسِرُوا', transliteration: 'khasiru', pos: ['V'], posLabel: 'V', root: 'خ س ر', meaning: { en: 'will lose', ur: 'نقصان اٹھایا' } },
      { id: '6:12:22', arabic: 'أَنفُسَهُمْ', transliteration: 'anfusahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ن ف س', meaning: { en: 'themselves', ur: 'اپنے آپ کو' } },
      { id: '6:12:23', arabic: 'فَهُمْ', transliteration: 'fa-hum', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'so they', ur: 'تو وہ' } },
      { id: '6:12:24', arabic: 'لَا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'do not', ur: 'نہیں' } },
      { id: '6:12:25', arabic: 'يُؤْمِنُونَ', transliteration: 'yu\'minun', pos: ['V'], posLabel: 'V', root: 'أ م ن', meaning: { en: 'believe', ur: 'ایمان لاتے' } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'مضاف + مضاف الیہ' },
        { from: 20, to: 21, label: 'موصول + صلة' }
      ],
    },
  },
  13: {
    text: 'وَلَهُ مَا سَكَنَ فِي اللَّيْلِ وَالنَّهَارِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    translation: {
      en: 'And to Him belongs whatever dwells in the night and the day, and He is the Hearing, the Knowing.',
      ur: 'اور رات اور دن میں بسنے والی ہر چیز اسی کی ہے اور وہ سننے والا جاننے والا ہے۔'
    },
    words: [
      { id: '6:13:1', arabic: 'وَلَهُ', transliteration: 'wa-lahu', pos: ['CONJ', 'P', 'PRON'], posLabel: 'CONJ+P+PRON', root: null, meaning: { en: 'And to Him belongs', ur: 'اور اسی کا ہے' } },
      { id: '6:13:2', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'whatever', ur: 'جو کچھ' } },
      { id: '6:13:3', arabic: 'سَكَنَ', transliteration: 'sakana', pos: ['V'], posLabel: 'V', root: 'س ك ن', meaning: { en: 'dwells', ur: 'بسا' } },
      { id: '6:13:4', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '6:13:5', arabic: 'اللَّيْلِ', transliteration: 'al-layli', pos: ['N'], posLabel: 'N', root: 'ل ي ل', meaning: { en: 'the night', ur: 'رات' } },
      { id: '6:13:6', arabic: 'وَالنَّهَارِ', transliteration: 'wan-nahari', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ن ه ر', meaning: { en: 'and the day', ur: 'اور دن' } },
      { id: '6:13:7', arabic: 'وَهُوَ', transliteration: 'wa-huwa', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'and He', ur: 'اور وہ' } },
      { id: '6:13:8', arabic: 'السَّمِيعُ', transliteration: 'as-sami\'u', pos: ['ADJ'], posLabel: 'ADJ', root: 'س م ع', meaning: { en: 'the Hearing', ur: 'سننے والا' } },
      { id: '6:13:9', arabic: 'الْعَلِيمُ', transliteration: 'al-\'alimu', pos: ['ADJ'], posLabel: 'ADJ', root: 'ع ل م', meaning: { en: 'the Knowing', ur: 'جاننے والا' } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  14: {
    text: 'قُلْ أَغَيْرَ اللَّهِ أَتَّخِذُ وَلِيًّا فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ وَهُوَ يُطْعِمُ وَلَا يُطْعَمُ قُلْ إِنِّي أُمِرْتُ أَنْ أَكُونَ أَوَّلَ مَنْ أَسْلَمَ وَلَا تَكُونَنَّ مِنَ الْمُشْرِكِينَ',
    translation: {
      en: 'Say, "Is it other than Allah I should take as a protector, Creator of the heavens and the earth, while it is He who feeds and is not fed?" Say, "Indeed, I have been commanded to be the first who submits and do not ever be of the polytheists."',
      ur: 'کہو کیا میں اللہ کے سوا کسی اور کو کارساز بناؤں جو آسمانوں اور زمین کا بنانے والا ہے اور وہ کھلاتا ہے اور کھاتا نہیں۔ کہو مجھے حکم دیا گیا ہے کہ سب سے پہلے اسلام لاؤں اور مشرکوں میں سے ہرگز نہ ہونا۔'
    },
    words: [
      { id: '6:14:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:14:2', arabic: 'أَغَيْرَ', transliteration: 'a-ghayra', pos: ['INTG', 'N'], posLabel: 'INTG+N', root: 'غ ي ر', meaning: { en: 'Is it other than', ur: 'کیا غیر' } },
      { id: '6:14:3', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کے' } },
      { id: '6:14:4', arabic: 'أَتَّخِذُ', transliteration: 'attakhidhu', pos: ['V'], posLabel: 'V', root: 'أ خ ذ', meaning: { en: 'I should take', ur: 'میں بناؤں' } },
      { id: '6:14:5', arabic: 'وَلِيًّا', transliteration: 'waliyyan', pos: ['N'], posLabel: 'N', root: 'و ل ي', meaning: { en: 'a protector', ur: 'کارساز' } },
      { id: '6:14:6', arabic: 'فَاطِرِ', transliteration: 'fatiri', pos: ['N'], posLabel: 'N', root: 'ف ط ر', meaning: { en: 'Creator of', ur: 'بنانے والا' } },
      { id: '6:14:7', arabic: 'السَّمَاوَاتِ', transliteration: 'as-samawati', pos: ['N'], posLabel: 'N', root: 'س م و', meaning: { en: 'the heavens', ur: 'آسمانوں' } },
      { id: '6:14:8', arabic: 'وَالْأَرْضِ', transliteration: 'wal-ardi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'أ ر ض', meaning: { en: 'and the earth', ur: 'اور زمین' } },
      { id: '6:14:9', arabic: 'وَهُوَ', transliteration: 'wa-huwa', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'while He', ur: 'اور وہ' } },
      { id: '6:14:10', arabic: 'يُطْعِمُ', transliteration: 'yut\'imu', pos: ['V'], posLabel: 'V', root: 'ط ع م', meaning: { en: 'feeds', ur: 'کھلاتا ہے' } },
      { id: '6:14:11', arabic: 'وَلَا', transliteration: 'wa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '6:14:12', arabic: 'يُطْعَمُ', transliteration: 'yut\'amu', pos: ['V'], posLabel: 'V', root: 'ط ع م', meaning: { en: 'is fed', ur: 'کھاتا' } },
      { id: '6:14:13', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:14:14', arabic: 'إِنِّي', transliteration: 'inni', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'Indeed I', ur: 'مجھے' } },
      { id: '6:14:15', arabic: 'أُمِرْتُ', transliteration: 'umirtu', pos: ['V'], posLabel: 'V', root: 'أ م ر', meaning: { en: 'have been commanded', ur: 'حکم دیا گیا' } },
      { id: '6:14:16', arabic: 'أَنْ', transliteration: 'an', pos: ['SUB'], posLabel: 'SUB', root: null, meaning: { en: 'to', ur: 'کہ' } },
      { id: '6:14:17', arabic: 'أَكُونَ', transliteration: 'akuna', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'I be', ur: 'میں ہوں' } },
      { id: '6:14:18', arabic: 'أَوَّلَ', transliteration: 'awwala', pos: ['N'], posLabel: 'N', root: 'أ و ل', meaning: { en: 'the first', ur: 'سب سے پہلے' } },
      { id: '6:14:19', arabic: 'مَنْ', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'who', ur: 'جو' } },
      { id: '6:14:20', arabic: 'أَسْلَمَ', transliteration: 'aslama', pos: ['V'], posLabel: 'V', root: 'س ل م', meaning: { en: 'submits', ur: 'اسلام لائے' } },
      { id: '6:14:21', arabic: 'وَلَا', transliteration: 'wa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and do not', ur: 'اور مت' } },
      { id: '6:14:22', arabic: 'تَكُونَنَّ', transliteration: 'takunanna', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'ever be', ur: 'ہونا' } },
      { id: '6:14:23', arabic: 'مِنَ', transliteration: 'mina', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'میں سے' } },
      { id: '6:14:24', arabic: 'الْمُشْرِكِينَ', transliteration: 'al-mushrikin', pos: ['N'], posLabel: 'N', root: 'ش ر ك', meaning: { en: 'the polytheists', ur: 'مشرکوں' } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'مضاف + مضاف الیہ' },
        { from: 19, to: 20, label: 'موصول + صلة' },
        { from: 23, to: 24, label: 'جار + مجرور' }
      ],
    },
  },
  15: {
    text: 'قُلْ إِنِّي أَخَافُ إِنْ عَصَيْتُ رَبِّي عَذَابَ يَوْمٍ عَظِيمٍ',
    translation: {
      en: 'Say, "Indeed I fear, if I should disobey my Lord, the punishment of a tremendous Day."',
      ur: 'کہو میں ڈرتا ہوں اگر میں نے اپنے رب کی نافرمانی کی تو ایک بڑے دن کے عذاب سے۔'
    },
    words: [
      { id: '6:15:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:15:2', arabic: 'إِنِّي', transliteration: 'inni', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'Indeed I', ur: 'بےشک میں' } },
      { id: '6:15:3', arabic: 'أَخَافُ', transliteration: 'akhafu', pos: ['V'], posLabel: 'V', root: 'خ و ف', meaning: { en: 'fear', ur: 'ڈرتا ہوں' } },
      { id: '6:15:4', arabic: 'إِنْ', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'if', ur: 'اگر' } },
      { id: '6:15:5', arabic: 'عَصَيْتُ', transliteration: '\'asaytu', pos: ['V'], posLabel: 'V', root: 'ع ص ي', meaning: { en: 'I should disobey', ur: 'میں نافرمانی کروں' } },
      { id: '6:15:6', arabic: 'رَبِّي', transliteration: 'rabbi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'my Lord', ur: 'اپنے رب کی' } },
      { id: '6:15:7', arabic: 'عَذَابَ', transliteration: '\'adhaba', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: 'the punishment of', ur: 'عذاب' } },
      { id: '6:15:8', arabic: 'يَوْمٍ', transliteration: 'yawmin', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: 'a Day', ur: 'دن کے' } },
      { id: '6:15:9', arabic: 'عَظِيمٍ', transliteration: '\'azimin', pos: ['ADJ'], posLabel: 'ADJ', root: 'ع ظ م', meaning: { en: 'tremendous', ur: 'بڑے' } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'مضاف + مضاف الیہ' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ],
    },
  },
  16: {
    text: 'مَّن يُصْرَفْ عَنْهُ يَوْمَئِذٍ فَقَدْ رَحِمَهُ وَذَٰلِكَ الْفَوْزُ الْمُبِينُ',
    translation: {
      en: 'He from whom it is averted that Day - He has shown him mercy. And that is the clear attainment.',
      ur: 'جس سے اس دن عذاب ٹال دیا گیا تو اس پر اللہ نے رحم فرمایا اور یہی کھلی کامیابی ہے۔'
    },
    words: [
      { id: '6:16:1', arabic: 'مَّن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'He from whom', ur: 'جس سے' } },
      { id: '6:16:2', arabic: 'يُصْرَفْ', transliteration: 'yusraf', pos: ['V'], posLabel: 'V', root: 'ص ر ف', meaning: { en: 'is averted', ur: 'ٹال دیا جائے' } },
      { id: '6:16:3', arabic: 'عَنْهُ', transliteration: '\'anhu', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'from him', ur: 'اس سے' } },
      { id: '6:16:4', arabic: 'يَوْمَئِذٍ', transliteration: 'yawma\'idhin', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: 'that Day', ur: 'اس دن' } },
      { id: '6:16:5', arabic: 'فَقَدْ', transliteration: 'fa-qad', pos: ['CONJ', 'CERT'], posLabel: 'CONJ+CERT', root: null, meaning: { en: 'then indeed', ur: 'تو بے شک' } },
      { id: '6:16:6', arabic: 'رَحِمَهُ', transliteration: 'rahimahu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ر ح م', meaning: { en: 'He has shown him mercy', ur: 'اس پر رحم فرمایا' } },
      { id: '6:16:7', arabic: 'وَذَٰلِكَ', transliteration: 'wa-dhalika', pos: ['CONJ', 'DEM'], posLabel: 'CONJ+DEM', root: null, meaning: { en: 'And that', ur: 'اور یہ' } },
      { id: '6:16:8', arabic: 'الْفَوْزُ', transliteration: 'al-fawzu', pos: ['N'], posLabel: 'N', root: 'ف و ز', meaning: { en: 'the attainment', ur: 'کامیابی' } },
      { id: '6:16:9', arabic: 'الْمُبِينُ', transliteration: 'al-mubinu', pos: ['ADJ'], posLabel: 'ADJ', root: 'ب ي ن', meaning: { en: 'the clear', ur: 'کھلی' } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ],
    },
  },
  17: {
    text: 'وَإِن يَمْسَسْكَ اللَّهُ بِضُرٍّ فَلَا كَاشِفَ لَهُ إِلَّا هُوَ وَإِن يَمْسَسْكَ بِخَيْرٍ فَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    translation: {
      en: 'And if Allah should touch you with adversity, there is no remover of it except Him. And if He touches you with good - then He is over all things competent.',
      ur: 'اور اگر اللہ تمہیں کسی تکلیف میں ڈالے تو اس کے سوا کوئی اسے دور کرنے والا نہیں اور اگر تمہیں خیر پہنچائے تو وہ ہر چیز پر قادر ہے۔'
    },
    words: [
      { id: '6:17:1', arabic: 'وَإِن', transliteration: 'wa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'And if', ur: 'اور اگر' } },
      { id: '6:17:2', arabic: 'يَمْسَسْكَ', transliteration: 'yamsaska', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'م س س', meaning: { en: 'touches you', ur: 'تمہیں چھوئے' } },
      { id: '6:17:3', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '6:17:4', arabic: 'بِضُرٍّ', transliteration: 'bi-durrin', pos: ['P', 'N'], posLabel: 'P+N', root: 'ض ر ر', meaning: { en: 'with adversity', ur: 'تکلیف سے' } },
      { id: '6:17:5', arabic: 'فَلَا', transliteration: 'fa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'then no', ur: 'تو نہیں' } },
      { id: '6:17:6', arabic: 'كَاشِفَ', transliteration: 'kashifa', pos: ['N'], posLabel: 'N', root: 'ك ش ف', meaning: { en: 'remover', ur: 'دور کرنے والا' } },
      { id: '6:17:7', arabic: 'لَهُ', transliteration: 'lahu', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'of it', ur: 'اس کا' } },
      { id: '6:17:8', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '6:17:9', arabic: 'هُوَ', transliteration: 'huwa', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'Him', ur: 'اس کے' } },
      { id: '6:17:10', arabic: 'وَإِن', transliteration: 'wa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'And if', ur: 'اور اگر' } },
      { id: '6:17:11', arabic: 'يَمْسَسْكَ', transliteration: 'yamsaska', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'م س س', meaning: { en: 'He touches you', ur: 'تمہیں چھوئے' } },
      { id: '6:17:12', arabic: 'بِخَيْرٍ', transliteration: 'bi-khayrin', pos: ['P', 'N'], posLabel: 'P+N', root: 'خ ي ر', meaning: { en: 'with good', ur: 'خیر سے' } },
      { id: '6:17:13', arabic: 'فَهُوَ', transliteration: 'fa-huwa', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'then He', ur: 'تو وہ' } },
      { id: '6:17:14', arabic: 'عَلَىٰ', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'over', ur: 'پر' } },
      { id: '6:17:15', arabic: 'كُلِّ', transliteration: 'kulli', pos: ['N'], posLabel: 'N', root: 'ك ل ل', meaning: { en: 'all', ur: 'ہر' } },
      { id: '6:17:16', arabic: 'شَيْءٍ', transliteration: 'shay\'in', pos: ['N'], posLabel: 'N', root: 'ش ي أ', meaning: { en: 'things', ur: 'چیز' } },
      { id: '6:17:17', arabic: 'قَدِيرٌ', transliteration: 'qadirun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ق د ر', meaning: { en: 'competent', ur: 'قادر' } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'شرط + فعل' },
        { from: 10, to: 11, label: 'شرط + فعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف الیہ' }
      ],
    },
  },
  18: {
    text: 'وَهُوَ الْقَاهِرُ فَوْقَ عِبَادِهِ وَهُوَ الْحَكِيمُ الْخَبِيرُ',
    translation: {
      en: 'And He is the subjugator over His servants. And He is the Wise, the Acquainted.',
      ur: 'اور وہ اپنے بندوں پر غالب ہے اور وہ حکمت والا باخبر ہے۔'
    },
    words: [
      { id: '6:18:1', arabic: 'وَهُوَ', transliteration: 'wa-huwa', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'And He', ur: 'اور وہ' } },
      { id: '6:18:2', arabic: 'الْقَاهِرُ', transliteration: 'al-qahiru', pos: ['N'], posLabel: 'N', root: 'ق ه ر', meaning: { en: 'the subjugator', ur: 'غالب' } },
      { id: '6:18:3', arabic: 'فَوْقَ', transliteration: 'fawqa', pos: ['N'], posLabel: 'N', root: 'ف و ق', meaning: { en: 'over', ur: 'اوپر' } },
      { id: '6:18:4', arabic: 'عِبَادِهِ', transliteration: '\'ibadihi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ع ب د', meaning: { en: 'His servants', ur: 'اپنے بندوں' } },
      { id: '6:18:5', arabic: 'وَهُوَ', transliteration: 'wa-huwa', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'and He', ur: 'اور وہ' } },
      { id: '6:18:6', arabic: 'الْحَكِيمُ', transliteration: 'al-hakimu', pos: ['ADJ'], posLabel: 'ADJ', root: 'ح ك م', meaning: { en: 'the Wise', ur: 'حکمت والا' } },
      { id: '6:18:7', arabic: 'الْخَبِيرُ', transliteration: 'al-khabiru', pos: ['ADJ'], posLabel: 'ADJ', root: 'خ ب ر', meaning: { en: 'the Acquainted', ur: 'باخبر' } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف الیہ' }
      ],
    },
  },
  19: {
    text: 'قُلْ أَيُّ شَيْءٍ أَكْبَرُ شَهَادَةً قُلِ اللَّهُ شَهِيدٌ بَيْنِي وَبَيْنَكُمْ وَأُوحِيَ إِلَيَّ هَٰذَا الْقُرْآنُ لِأُنذِرَكُم بِهِ وَمَن بَلَغَ أَئِنَّكُمْ لَتَشْهَدُونَ أَنَّ مَعَ اللَّهِ آلِهَةً أُخْرَىٰ قُل لَّا أَشْهَدُ قُلْ إِنَّمَا هُوَ إِلَٰهٌ وَاحِدٌ وَإِنَّنِي بَرِيءٌ مِّمَّا تُشْرِكُونَ',
    translation: {
      en: 'Say, "What thing is greatest in testimony?" Say, "Allah is witness between me and you. And this Quran was revealed to me that I may warn you thereby and whomever it reaches. Do you testify that with Allah there are other deities?" Say, "I will not testify." Say, "Indeed, He is but one God, and indeed, I am free of what you associate."',
      ur: 'کہو گواہی میں سب سے بڑی چیز کیا ہے؟ کہو اللہ میرے اور تمہارے درمیان گواہ ہے اور میری طرف یہ قرآن وحی کیا گیا ہے تاکہ اس کے ذریعے تمہیں اور جس تک پہنچے اسے ڈراؤں۔ کیا تم گواہی دیتے ہو کہ اللہ کے ساتھ اور بھی معبود ہیں؟ کہو میں ایسی گواہی نہیں دیتا۔ کہو وہ تو بس ایک معبود ہے اور میں تمہارے شرک سے بری ہوں۔'
    },
    words: [
      { id: '6:19:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:19:2', arabic: 'أَيُّ', transliteration: 'ayyu', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'What', ur: 'کون سی' } },
      { id: '6:19:3', arabic: 'شَيْءٍ', transliteration: 'shay\'in', pos: ['N'], posLabel: 'N', root: 'ش ي أ', meaning: { en: 'thing', ur: 'چیز' } },
      { id: '6:19:4', arabic: 'أَكْبَرُ', transliteration: 'akbaru', pos: ['ADJ'], posLabel: 'ADJ', root: 'ك ب ر', meaning: { en: 'greatest', ur: 'سب سے بڑی' } },
      { id: '6:19:5', arabic: 'شَهَادَةً', transliteration: 'shahadatan', pos: ['N'], posLabel: 'N', root: 'ش ه د', meaning: { en: 'in testimony', ur: 'گواہی میں' } },
      { id: '6:19:6', arabic: 'قُلِ', transliteration: 'quli', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:19:7', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '6:19:8', arabic: 'شَهِيدٌ', transliteration: 'shahidun', pos: ['N'], posLabel: 'N', root: 'ش ه د', meaning: { en: 'is witness', ur: 'گواہ ہے' } },
      { id: '6:19:9', arabic: 'بَيْنِي', transliteration: 'bayni', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ب ي ن', meaning: { en: 'between me', ur: 'میرے درمیان' } },
      { id: '6:19:10', arabic: 'وَبَيْنَكُمْ', transliteration: 'wa-baynakum', pos: ['CONJ', 'N', 'PRON'], posLabel: 'CONJ+N+PRON', root: 'ب ي ن', meaning: { en: 'and you', ur: 'اور تمہارے' } },
      { id: '6:19:11', arabic: 'وَأُوحِيَ', transliteration: 'wa-uhiya', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'و ح ي', meaning: { en: 'And was revealed', ur: 'اور وحی کیا گیا' } },
      { id: '6:19:12', arabic: 'إِلَيَّ', transliteration: 'ilayya', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to me', ur: 'میری طرف' } },
      { id: '6:19:13', arabic: 'هَٰذَا', transliteration: 'hadha', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'this', ur: 'یہ' } },
      { id: '6:19:14', arabic: 'الْقُرْآنُ', transliteration: 'al-qur\'anu', pos: ['N'], posLabel: 'N', root: 'ق ر أ', meaning: { en: 'Quran', ur: 'قرآن' } },
      { id: '6:19:15', arabic: 'لِأُنذِرَكُم', transliteration: 'li-undhirakum', pos: ['P', 'V', 'PRON'], posLabel: 'P+V+PRON', root: 'ن ذ ر', meaning: { en: 'that I may warn you', ur: 'تاکہ تمہیں ڈراؤں' } },
      { id: '6:19:16', arabic: 'بِهِ', transliteration: 'bihi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'thereby', ur: 'اس سے' } },
      { id: '6:19:17', arabic: 'وَمَن', transliteration: 'wa-man', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'and whomever', ur: 'اور جس تک' } },
      { id: '6:19:18', arabic: 'بَلَغَ', transliteration: 'balagha', pos: ['V'], posLabel: 'V', root: 'ب ل غ', meaning: { en: 'it reaches', ur: 'پہنچے' } },
      { id: '6:19:19', arabic: 'أَئِنَّكُمْ', transliteration: 'a-innakum', pos: ['INTG', 'ACC', 'PRON'], posLabel: 'INTG+ACC+PRON', root: null, meaning: { en: 'Do you indeed', ur: 'کیا تم' } },
      { id: '6:19:20', arabic: 'لَتَشْهَدُونَ', transliteration: 'la-tashhadun', pos: ['EMPH', 'V'], posLabel: 'EMPH+V', root: 'ش ه د', meaning: { en: 'testify', ur: 'گواہی دیتے ہو' } },
      { id: '6:19:21', arabic: 'أَنَّ', transliteration: 'anna', pos: ['ACC'], posLabel: 'ACC', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '6:19:22', arabic: 'مَعَ', transliteration: 'ma\'a', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'with', ur: 'ساتھ' } },
      { id: '6:19:23', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کے' } },
      { id: '6:19:24', arabic: 'آلِهَةً', transliteration: 'alihatan', pos: ['N'], posLabel: 'N', root: 'أ ل ه', meaning: { en: 'deities', ur: 'معبود' } },
      { id: '6:19:25', arabic: 'أُخْرَىٰ', transliteration: 'ukhra', pos: ['ADJ'], posLabel: 'ADJ', root: 'أ خ ر', meaning: { en: 'other', ur: 'اور' } },
      { id: '6:19:26', arabic: 'قُل', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:19:27', arabic: 'لَّا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'I will not', ur: 'نہیں' } },
      { id: '6:19:28', arabic: 'أَشْهَدُ', transliteration: 'ashhadu', pos: ['V'], posLabel: 'V', root: 'ش ه د', meaning: { en: 'testify', ur: 'گواہی دیتا' } },
      { id: '6:19:29', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:19:30', arabic: 'إِنَّمَا', transliteration: 'innama', pos: ['ACC', 'REL'], posLabel: 'ACC+REL', root: null, meaning: { en: 'Indeed only', ur: 'بس' } },
      { id: '6:19:31', arabic: 'هُوَ', transliteration: 'huwa', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'He is', ur: 'وہ' } },
      { id: '6:19:32', arabic: 'إِلَٰهٌ', transliteration: 'ilahun', pos: ['N'], posLabel: 'N', root: 'أ ل ه', meaning: { en: 'God', ur: 'معبود' } },
      { id: '6:19:33', arabic: 'وَاحِدٌ', transliteration: 'wahidun', pos: ['ADJ'], posLabel: 'ADJ', root: 'و ح د', meaning: { en: 'one', ur: 'ایک' } },
      { id: '6:19:34', arabic: 'وَإِنَّنِي', transliteration: 'wa-innani', pos: ['CONJ', 'ACC', 'PRON'], posLabel: 'CONJ+ACC+PRON', root: null, meaning: { en: 'and indeed I am', ur: 'اور بے شک میں' } },
      { id: '6:19:35', arabic: 'بَرِيءٌ', transliteration: 'bari\'un', pos: ['ADJ'], posLabel: 'ADJ', root: 'ب ر أ', meaning: { en: 'free/innocent', ur: 'بری ہوں' } },
      { id: '6:19:36', arabic: 'مِّمَّا', transliteration: 'mimma', pos: ['P', 'REL'], posLabel: 'P+REL', root: null, meaning: { en: 'of what', ur: 'اس سے جو' } },
      { id: '6:19:37', arabic: 'تُشْرِكُونَ', transliteration: 'tushrikun', pos: ['V'], posLabel: 'V', root: 'ش ر ك', meaning: { en: 'you associate', ur: 'تم شرک کرتے ہو' } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف الیہ' },
        { from: 17, to: 18, label: 'موصول + صلة' },
        { from: 32, to: 33, label: 'موصوف + صفت' },
        { from: 36, to: 37, label: 'موصول + صلة' }
      ],
    },
  },
  20: {
    text: 'الَّذِينَ آتَيْنَاهُمُ الْكِتَابَ يَعْرِفُونَهُ كَمَا يَعْرِفُونَ أَبْنَاءَهُمُ الَّذِينَ خَسِرُوا أَنفُسَهُمْ فَهُمْ لَا يُؤْمِنُونَ',
    translation: {
      en: 'Those to whom We have given the Scripture recognize it as they recognize their sons. Those who will lose themselves do not believe.',
      ur: 'جن لوگوں کو ہم نے کتاب دی ہے وہ اسے ایسے پہچانتے ہیں جیسے اپنے بیٹوں کو پہچانتے ہیں۔ جنہوں نے اپنے آپ کو نقصان میں ڈالا وہ ایمان نہیں لاتے۔'
    },
    words: [
      { id: '6:20:1', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'Those whom', ur: 'جن کو' } },
      { id: '6:20:2', arabic: 'آتَيْنَاهُمُ', transliteration: 'ataynahumu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'أ ت ي', meaning: { en: 'We have given them', ur: 'ہم نے دی' } },
      { id: '6:20:3', arabic: 'الْكِتَابَ', transliteration: 'al-kitaba', pos: ['N'], posLabel: 'N', root: 'ك ت ب', meaning: { en: 'the Scripture', ur: 'کتاب' } },
      { id: '6:20:4', arabic: 'يَعْرِفُونَهُ', transliteration: 'ya\'rifunahu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ع ر ف', meaning: { en: 'recognize it', ur: 'پہچانتے ہیں' } },
      { id: '6:20:5', arabic: 'كَمَا', transliteration: 'kama', pos: ['P', 'REL'], posLabel: 'P+REL', root: null, meaning: { en: 'as', ur: 'جیسے' } },
      { id: '6:20:6', arabic: 'يَعْرِفُونَ', transliteration: 'ya\'rifun', pos: ['V'], posLabel: 'V', root: 'ع ر ف', meaning: { en: 'they recognize', ur: 'پہچانتے ہیں' } },
      { id: '6:20:7', arabic: 'أَبْنَاءَهُمُ', transliteration: 'abna\'ahumu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ب ن ي', meaning: { en: 'their sons', ur: 'اپنے بیٹوں کو' } },
      { id: '6:20:8', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'Those who', ur: 'جنہوں نے' } },
      { id: '6:20:9', arabic: 'خَسِرُوا', transliteration: 'khasiru', pos: ['V'], posLabel: 'V', root: 'خ س ر', meaning: { en: 'will lose', ur: 'نقصان اٹھایا' } },
      { id: '6:20:10', arabic: 'أَنفُسَهُمْ', transliteration: 'anfusahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ن ف س', meaning: { en: 'themselves', ur: 'اپنے آپ کو' } },
      { id: '6:20:11', arabic: 'فَهُمْ', transliteration: 'fa-hum', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'so they', ur: 'تو وہ' } },
      { id: '6:20:12', arabic: 'لَا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'do not', ur: 'نہیں' } },
      { id: '6:20:13', arabic: 'يُؤْمِنُونَ', transliteration: 'yu\'minun', pos: ['V'], posLabel: 'V', root: 'أ م ن', meaning: { en: 'believe', ur: 'ایمان لاتے' } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'موصول + صلة' },
        { from: 12, to: 13, label: 'نفی + فعل' }
      ],
    },
  },
  21: {
    text: 'وَمَنْ أَظْلَمُ مِمَّنِ افْتَرَىٰ عَلَى اللَّهِ كَذِبًا أَوْ كَذَّبَ بِآيَاتِهِ إِنَّهُ لَا يُفْلِحُ الظَّالِمُونَ',
    translation: {
      en: 'And who is more unjust than one who invents about Allah a lie or denies His verses? Indeed, the wrongdoers will not succeed.',
      ur: 'اور اس سے بڑا ظالم کون ہے جو اللہ پر جھوٹ باندھے یا اس کی آیات کو جھٹلائے۔ بے شک ظالم کامیاب نہیں ہوں گے۔'
    },
    words: [
      { id: '6:21:1', arabic: 'وَمَنْ', transliteration: 'wa-man', pos: ['CONJ', 'INTG'], posLabel: 'CONJ+INTG', root: null, meaning: { en: 'And who', ur: 'اور کون' } },
      { id: '6:21:2', arabic: 'أَظْلَمُ', transliteration: 'azlamu', pos: ['ADJ'], posLabel: 'ADJ', root: 'ظ ل م', meaning: { en: 'is more unjust', ur: 'بڑا ظالم' } },
      { id: '6:21:3', arabic: 'مِمَّنِ', transliteration: 'mimman', pos: ['P', 'REL'], posLabel: 'P+REL', root: null, meaning: { en: 'than one who', ur: 'اس سے جو' } },
      { id: '6:21:4', arabic: 'افْتَرَىٰ', transliteration: 'iftara', pos: ['V'], posLabel: 'V', root: 'ف ر ي', meaning: { en: 'invents', ur: 'باندھے' } },
      { id: '6:21:5', arabic: 'عَلَى', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'about', ur: 'پر' } },
      { id: '6:21:6', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '6:21:7', arabic: 'كَذِبًا', transliteration: 'kadhiban', pos: ['N'], posLabel: 'N', root: 'ك ذ ب', meaning: { en: 'a lie', ur: 'جھوٹ' } },
      { id: '6:21:8', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '6:21:9', arabic: 'كَذَّبَ', transliteration: 'kadhdhaba', pos: ['V'], posLabel: 'V', root: 'ك ذ ب', meaning: { en: 'denies', ur: 'جھٹلائے' } },
      { id: '6:21:10', arabic: 'بِآيَاتِهِ', transliteration: 'bi-ayatihi', pos: ['P', 'N', 'PRON'], posLabel: 'P+N+PRON', root: 'أ ي ي', meaning: { en: 'His verses', ur: 'اس کی آیات کو' } },
      { id: '6:21:11', arabic: 'إِنَّهُ', transliteration: 'innahu', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'Indeed', ur: 'بے شک' } },
      { id: '6:21:12', arabic: 'لَا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '6:21:13', arabic: 'يُفْلِحُ', transliteration: 'yuflihu', pos: ['V'], posLabel: 'V', root: 'ف ل ح', meaning: { en: 'will succeed', ur: 'کامیاب ہوں گے' } },
      { id: '6:21:14', arabic: 'الظَّالِمُونَ', transliteration: 'az-zalimun', pos: ['N'], posLabel: 'N', root: 'ظ ل م', meaning: { en: 'the wrongdoers', ur: 'ظالم' } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'نفی + فعل' }
      ],
    },
  },
  22: {
    text: 'وَيَوْمَ نَحْشُرُهُمْ جَمِيعًا ثُمَّ نَقُولُ لِلَّذِينَ أَشْرَكُوا أَيْنَ شُرَكَاؤُكُمُ الَّذِينَ كُنتُمْ تَزْعُمُونَ',
    translation: {
      en: 'And on the Day We will gather them all together; then We will say to those who associated others with Allah, "Where are your partners that you used to claim?"',
      ur: 'اور جس دن ہم ان سب کو جمع کریں گے پھر مشرکوں سے کہیں گے کہ تمہارے وہ شریک کہاں ہیں جن کا تم دعویٰ کرتے تھے۔'
    },
    words: [
      { id: '6:22:1', arabic: 'وَيَوْمَ', transliteration: 'wa-yawma', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ي و م', meaning: { en: 'And on the Day', ur: 'اور جس دن' } },
      { id: '6:22:2', arabic: 'نَحْشُرُهُمْ', transliteration: 'nahshuruhum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ح ش ر', meaning: { en: 'We will gather them', ur: 'ہم جمع کریں گے' } },
      { id: '6:22:3', arabic: 'جَمِيعًا', transliteration: 'jami\'an', pos: ['N'], posLabel: 'N', root: 'ج م ع', meaning: { en: 'all together', ur: 'سب کو' } },
      { id: '6:22:4', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '6:22:5', arabic: 'نَقُولُ', transliteration: 'naqulu', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'We will say', ur: 'کہیں گے' } },
      { id: '6:22:6', arabic: 'لِلَّذِينَ', transliteration: 'lilladhina', pos: ['P', 'REL'], posLabel: 'P+REL', root: null, meaning: { en: 'to those who', ur: 'ان سے جنہوں نے' } },
      { id: '6:22:7', arabic: 'أَشْرَكُوا', transliteration: 'ashraku', pos: ['V'], posLabel: 'V', root: 'ش ر ك', meaning: { en: 'associated (others)', ur: 'شرک کیا' } },
      { id: '6:22:8', arabic: 'أَيْنَ', transliteration: 'ayna', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'Where are', ur: 'کہاں ہیں' } },
      { id: '6:22:9', arabic: 'شُرَكَاؤُكُمُ', transliteration: 'shuraka\'ukumu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ش ر ك', meaning: { en: 'your partners', ur: 'تمہارے شریک' } },
      { id: '6:22:10', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'that', ur: 'جن کا' } },
      { id: '6:22:11', arabic: 'كُنتُمْ', transliteration: 'kuntum', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'you used to', ur: 'تم تھے' } },
      { id: '6:22:12', arabic: 'تَزْعُمُونَ', transliteration: 'taz\'umun', pos: ['V'], posLabel: 'V', root: 'ز ع م', meaning: { en: 'claim', ur: 'دعویٰ کرتے' } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'موصول + صلة' },
        { from: 10, to: 11, label: 'موصول + صلة' }
      ],
    },
  },
  23: {
    text: 'ثُمَّ لَمْ تَكُن فِتْنَتُهُمْ إِلَّا أَن قَالُوا وَاللَّهِ رَبِّنَا مَا كُنَّا مُشْرِكِينَ',
    translation: {
      en: 'Then there will be no excuse for them except that they will say, "By Allah, our Lord, we were not those who associated."',
      ur: 'پھر ان کی کوئی چارہ نہیں ہوگا سوائے اس کے کہ کہیں اللہ کی قسم ہمارے رب کی ہم مشرک نہیں تھے۔'
    },
    words: [
      { id: '6:23:1', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'Then', ur: 'پھر' } },
      { id: '6:23:2', arabic: 'لَمْ', transliteration: 'lam', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '6:23:3', arabic: 'تَكُن', transliteration: 'takun', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'will be', ur: 'تھی' } },
      { id: '6:23:4', arabic: 'فِتْنَتُهُمْ', transliteration: 'fitnatuhum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ف ت ن', meaning: { en: 'their excuse', ur: 'ان کا فتنہ' } },
      { id: '6:23:5', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '6:23:6', arabic: 'أَن', transliteration: 'an', pos: ['SUB'], posLabel: 'SUB', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '6:23:7', arabic: 'قَالُوا', transliteration: 'qalu', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'they will say', ur: 'کہیں' } },
      { id: '6:23:8', arabic: 'وَاللَّهِ', transliteration: 'wa-Allahi', pos: ['CONJ', 'PN'], posLabel: 'CONJ+PN', root: 'أ ل ه', meaning: { en: 'By Allah', ur: 'اللہ کی قسم' } },
      { id: '6:23:9', arabic: 'رَبِّنَا', transliteration: 'rabbina', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'our Lord', ur: 'ہمارے رب' } },
      { id: '6:23:10', arabic: 'مَا', transliteration: 'ma', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '6:23:11', arabic: 'كُنَّا', transliteration: 'kunna', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'we were', ur: 'ہم تھے' } },
      { id: '6:23:12', arabic: 'مُشْرِكِينَ', transliteration: 'mushrikin', pos: ['N'], posLabel: 'N', root: 'ش ر ك', meaning: { en: 'those who associated', ur: 'مشرک' } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 10, to: 11, label: 'نفی + فعل' }
      ],
    },
  },
  24: {
    text: 'انظُرْ كَيْفَ كَذَبُوا عَلَىٰ أَنفُسِهِمْ وَضَلَّ عَنْهُم مَّا كَانُوا يَفْتَرُونَ',
    translation: {
      en: 'See how they will lie about themselves. And lost from them will be what they used to invent.',
      ur: 'دیکھو انہوں نے اپنے اوپر کیسا جھوٹ بولا اور وہ سب کھو گیا جو یہ گھڑتے تھے۔'
    },
    words: [
      { id: '6:24:1', arabic: 'انظُرْ', transliteration: 'unzur', pos: ['V'], posLabel: 'V', root: 'ن ظ ر', meaning: { en: 'See', ur: 'دیکھو' } },
      { id: '6:24:2', arabic: 'كَيْفَ', transliteration: 'kayfa', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'how', ur: 'کیسے' } },
      { id: '6:24:3', arabic: 'كَذَبُوا', transliteration: 'kadhabu', pos: ['V'], posLabel: 'V', root: 'ك ذ ب', meaning: { en: 'they will lie', ur: 'انہوں نے جھوٹ بولا' } },
      { id: '6:24:4', arabic: 'عَلَىٰ', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'about', ur: 'اوپر' } },
      { id: '6:24:5', arabic: 'أَنفُسِهِمْ', transliteration: 'anfusihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ن ف س', meaning: { en: 'themselves', ur: 'اپنے آپ' } },
      { id: '6:24:6', arabic: 'وَضَلَّ', transliteration: 'wa-dalla', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ض ل ل', meaning: { en: 'and lost', ur: 'اور کھو گیا' } },
      { id: '6:24:7', arabic: 'عَنْهُم', transliteration: '\'anhum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'from them', ur: 'ان سے' } },
      { id: '6:24:8', arabic: 'مَّا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '6:24:9', arabic: 'كَانُوا', transliteration: 'kanu', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'they used to', ur: 'وہ تھے' } },
      { id: '6:24:10', arabic: 'يَفْتَرُونَ', transliteration: 'yaftarun', pos: ['V'], posLabel: 'V', root: 'ف ر ي', meaning: { en: 'invent', ur: 'گھڑتے تھے' } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصول + صلة' }
      ],
    },
  },
  25: {
    text: 'وَمِنْهُم مَّن يَسْتَمِعُ إِلَيْكَ وَجَعَلْنَا عَلَىٰ قُلُوبِهِمْ أَكِنَّةً أَن يَفْقَهُوهُ وَفِي آذَانِهِمْ وَقْرًا وَإِن يَرَوْا كُلَّ آيَةٍ لَّا يُؤْمِنُوا بِهَا حَتَّىٰ إِذَا جَاءُوكَ يُجَادِلُونَكَ يَقُولُ الَّذِينَ كَفَرُوا إِنْ هَٰذَا إِلَّا أَسَاطِيرُ الْأَوَّلِينَ',
    translation: {
      en: 'And among them are those who listen to you, but We have placed over their hearts coverings, lest they understand it, and in their ears deafness. And if they should see every sign, they will not believe in it. Even when they come to you arguing with you, those who disbelieve say, "This is not but legends of the former peoples."',
      ur: 'اور ان میں سے کچھ لوگ تمہاری طرف کان لگاتے ہیں اور ہم نے ان کے دلوں پر پردے ڈال دیے ہیں کہ اسے نہ سمجھیں اور ان کے کانوں میں بہرا پن ہے۔ اور اگر وہ ہر نشانی دیکھ لیں تب بھی ایمان نہ لائیں۔ یہاں تک کہ جب تمہارے پاس آ کر جھگڑتے ہیں تو کافر کہتے ہیں یہ تو پرانے لوگوں کی کہانیاں ہیں۔'
    },
    words: [
      { id: '6:25:1', arabic: 'وَمِنْهُم', transliteration: 'wa-minhum', pos: ['CONJ', 'P', 'PRON'], posLabel: 'CONJ+P+PRON', root: null, meaning: { en: 'And among them', ur: 'اور ان میں سے' } },
      { id: '6:25:2', arabic: 'مَّن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '6:25:3', arabic: 'يَسْتَمِعُ', transliteration: 'yastami\'u', pos: ['V'], posLabel: 'V', root: 'س م ع', meaning: { en: 'listen', ur: 'کان لگاتے ہیں' } },
      { id: '6:25:4', arabic: 'إِلَيْكَ', transliteration: 'ilayka', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to you', ur: 'تمہاری طرف' } },
      { id: '6:25:5', arabic: 'وَجَعَلْنَا', transliteration: 'wa-ja\'alna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ج ع ل', meaning: { en: 'and We have placed', ur: 'اور ہم نے رکھے' } },
      { id: '6:25:6', arabic: 'عَلَىٰ', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'over', ur: 'پر' } },
      { id: '6:25:7', arabic: 'قُلُوبِهِمْ', transliteration: 'qulubihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق ل ب', meaning: { en: 'their hearts', ur: 'ان کے دلوں' } },
      { id: '6:25:8', arabic: 'أَكِنَّةً', transliteration: 'akinnatan', pos: ['N'], posLabel: 'N', root: 'ك ن ن', meaning: { en: 'coverings', ur: 'پردے' } },
      { id: '6:25:9', arabic: 'أَن', transliteration: 'an', pos: ['SUB'], posLabel: 'SUB', root: null, meaning: { en: 'lest', ur: 'تاکہ نہ' } },
      { id: '6:25:10', arabic: 'يَفْقَهُوهُ', transliteration: 'yafqahuhu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ف ق ه', meaning: { en: 'they understand it', ur: 'سمجھیں' } },
      { id: '6:25:11', arabic: 'وَفِي', transliteration: 'wa-fi', pos: ['CONJ', 'P'], posLabel: 'CONJ+P', root: null, meaning: { en: 'and in', ur: 'اور میں' } },
      { id: '6:25:12', arabic: 'آذَانِهِمْ', transliteration: 'adhanihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'أ ذ ن', meaning: { en: 'their ears', ur: 'ان کے کانوں' } },
      { id: '6:25:13', arabic: 'وَقْرًا', transliteration: 'waqran', pos: ['N'], posLabel: 'N', root: 'و ق ر', meaning: { en: 'deafness', ur: 'بہرا پن' } },
      { id: '6:25:14', arabic: 'وَإِن', transliteration: 'wa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'And if', ur: 'اور اگر' } },
      { id: '6:25:15', arabic: 'يَرَوْا', transliteration: 'yaraw', pos: ['V'], posLabel: 'V', root: 'ر أ ي', meaning: { en: 'they should see', ur: 'دیکھ لیں' } },
      { id: '6:25:16', arabic: 'كُلَّ', transliteration: 'kulla', pos: ['N'], posLabel: 'N', root: 'ك ل ل', meaning: { en: 'every', ur: 'ہر' } },
      { id: '6:25:17', arabic: 'آيَةٍ', transliteration: 'ayatin', pos: ['N'], posLabel: 'N', root: 'أ ي ي', meaning: { en: 'sign', ur: 'نشانی' } },
      { id: '6:25:18', arabic: 'لَّا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '6:25:19', arabic: 'يُؤْمِنُوا', transliteration: 'yu\'minu', pos: ['V'], posLabel: 'V', root: 'أ م ن', meaning: { en: 'believe', ur: 'ایمان لائیں' } },
      { id: '6:25:20', arabic: 'بِهَا', transliteration: 'biha', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'in it', ur: 'اس پر' } },
      { id: '6:25:21', arabic: 'حَتَّىٰ', transliteration: 'hatta', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'Even when', ur: 'یہاں تک کہ' } },
      { id: '6:25:22', arabic: 'إِذَا', transliteration: 'idha', pos: ['T'], posLabel: 'T', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '6:25:23', arabic: 'جَاءُوكَ', transliteration: 'ja\'uka', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج ي أ', meaning: { en: 'they come to you', ur: 'تمہارے پاس آئیں' } },
      { id: '6:25:24', arabic: 'يُجَادِلُونَكَ', transliteration: 'yujadilunaka', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج د ل', meaning: { en: 'arguing with you', ur: 'تم سے جھگڑتے ہیں' } },
      { id: '6:25:25', arabic: 'يَقُولُ', transliteration: 'yaqulu', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'say', ur: 'کہتے ہیں' } },
      { id: '6:25:26', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '6:25:27', arabic: 'كَفَرُوا', transliteration: 'kafaru', pos: ['V'], posLabel: 'V', root: 'ك ف ر', meaning: { en: 'disbelieve', ur: 'کفر کیا' } },
      { id: '6:25:28', arabic: 'إِنْ', transliteration: 'in', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '6:25:29', arabic: 'هَٰذَا', transliteration: 'hadha', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'this', ur: 'یہ' } },
      { id: '6:25:30', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'but', ur: 'مگر' } },
      { id: '6:25:31', arabic: 'أَسَاطِيرُ', transliteration: 'asatiru', pos: ['N'], posLabel: 'N', root: 'س ط ر', meaning: { en: 'legends of', ur: 'کہانیاں' } },
      { id: '6:25:32', arabic: 'الْأَوَّلِينَ', transliteration: 'al-awwalin', pos: ['N'], posLabel: 'N', root: 'أ و ل', meaning: { en: 'the former peoples', ur: 'پہلے لوگوں کی' } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'مضاف + مضاف الیہ' },
        { from: 26, to: 27, label: 'موصول + صلة' },
        { from: 31, to: 32, label: 'مضاف + مضاف الیہ' }
      ],
    },
  },
  26: {
    text: 'وَهُمْ يَنْهَوْنَ عَنْهُ وَيَنْأَوْنَ عَنْهُ وَإِن يُهْلِكُونَ إِلَّا أَنفُسَهُمْ وَمَا يَشْعُرُونَ',
    translation: {
      en: 'And they prevent others from him and are themselves remote from him. And they do not destroy except themselves, but they perceive it not.',
      ur: 'اور وہ لوگوں کو اس سے روکتے ہیں اور خود بھی اس سے دور رہتے ہیں اور وہ صرف اپنے آپ کو ہلاک کرتے ہیں اور انہیں خبر نہیں۔'
    },
    words: [
      { id: '6:26:1', arabic: 'وَهُمْ', transliteration: 'wa-hum', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'And they', ur: 'اور وہ' } },
      { id: '6:26:2', arabic: 'يَنْهَوْنَ', transliteration: 'yanhawna', pos: ['V'], posLabel: 'V', root: 'ن ه ي', meaning: { en: 'prevent (others)', ur: 'روکتے ہیں' } },
      { id: '6:26:3', arabic: 'عَنْهُ', transliteration: '\'anhu', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'from him', ur: 'اس سے' } },
      { id: '6:26:4', arabic: 'وَيَنْأَوْنَ', transliteration: 'wa-yan\'awna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ن أ ي', meaning: { en: 'and are remote', ur: 'اور دور رہتے ہیں' } },
      { id: '6:26:5', arabic: 'عَنْهُ', transliteration: '\'anhu', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'from him', ur: 'اس سے' } },
      { id: '6:26:6', arabic: 'وَإِن', transliteration: 'wa-in', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '6:26:7', arabic: 'يُهْلِكُونَ', transliteration: 'yuhlikun', pos: ['V'], posLabel: 'V', root: 'ه ل ك', meaning: { en: 'they destroy', ur: 'ہلاک کرتے' } },
      { id: '6:26:8', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '6:26:9', arabic: 'أَنفُسَهُمْ', transliteration: 'anfusahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ن ف س', meaning: { en: 'themselves', ur: 'اپنے آپ کو' } },
      { id: '6:26:10', arabic: 'وَمَا', transliteration: 'wa-ma', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'but not', ur: 'اور نہیں' } },
      { id: '6:26:11', arabic: 'يَشْعُرُونَ', transliteration: 'yash\'urun', pos: ['V'], posLabel: 'V', root: 'ش ع ر', meaning: { en: 'they perceive', ur: 'انہیں خبر ہے' } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 10, to: 11, label: 'نفی + فعل' }
      ],
    },
  },
  27: {
    text: 'وَلَوْ تَرَىٰ إِذْ وُقِفُوا عَلَى النَّارِ فَقَالُوا يَا لَيْتَنَا نُرَدُّ وَلَا نُكَذِّبَ بِآيَاتِ رَبِّنَا وَنَكُونَ مِنَ الْمُؤْمِنِينَ',
    translation: {
      en: 'If you could but see when they are made to stand before the Fire and will say, "Oh, would that we could be returned and not deny the signs of our Lord and be among the believers."',
      ur: 'اور کاش تم دیکھو جب وہ آگ پر کھڑے کیے جائیں گے تو کہیں گے اے کاش ہم واپس بھیجے جائیں اور اپنے رب کی آیات نہ جھٹلائیں اور ایمان والوں میں ہو جائیں۔'
    },
    words: [
      { id: '6:27:1', arabic: 'وَلَوْ', transliteration: 'wa-law', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'If', ur: 'اور کاش' } },
      { id: '6:27:2', arabic: 'تَرَىٰ', transliteration: 'tara', pos: ['V'], posLabel: 'V', root: 'ر أ ي', meaning: { en: 'you could see', ur: 'تم دیکھو' } },
      { id: '6:27:3', arabic: 'إِذْ', transliteration: 'idh', pos: ['T'], posLabel: 'T', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '6:27:4', arabic: 'وُقِفُوا', transliteration: 'wuqifu', pos: ['V'], posLabel: 'V', root: 'و ق ف', meaning: { en: 'they are made to stand', ur: 'کھڑے کیے جائیں' } },
      { id: '6:27:5', arabic: 'عَلَى', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'before', ur: 'پر' } },
      { id: '6:27:6', arabic: 'النَّارِ', transliteration: 'an-nari', pos: ['N'], posLabel: 'N', root: 'ن و ر', meaning: { en: 'the Fire', ur: 'آگ' } },
      { id: '6:27:7', arabic: 'فَقَالُوا', transliteration: 'fa-qalu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ق و ل', meaning: { en: 'and will say', ur: 'تو کہیں گے' } },
      { id: '6:27:8', arabic: 'يَا', transliteration: 'ya', pos: ['VOC'], posLabel: 'VOC', root: null, meaning: { en: 'Oh', ur: 'اے' } },
      { id: '6:27:9', arabic: 'لَيْتَنَا', transliteration: 'laytana', pos: ['WISH', 'PRON'], posLabel: 'WISH+PRON', root: null, meaning: { en: 'would that we', ur: 'کاش ہم' } },
      { id: '6:27:10', arabic: 'نُرَدُّ', transliteration: 'nuraddu', pos: ['V'], posLabel: 'V', root: 'ر د د', meaning: { en: 'could be returned', ur: 'واپس بھیجے جائیں' } },
      { id: '6:27:11', arabic: 'وَلَا', transliteration: 'wa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہ' } },
      { id: '6:27:12', arabic: 'نُكَذِّبَ', transliteration: 'nukadhddhiba', pos: ['V'], posLabel: 'V', root: 'ك ذ ب', meaning: { en: 'deny', ur: 'جھٹلائیں' } },
      { id: '6:27:13', arabic: 'بِآيَاتِ', transliteration: 'bi-ayati', pos: ['P', 'N'], posLabel: 'P+N', root: 'أ ي ي', meaning: { en: 'the signs of', ur: 'آیات کو' } },
      { id: '6:27:14', arabic: 'رَبِّنَا', transliteration: 'rabbina', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'our Lord', ur: 'ہمارے رب کی' } },
      { id: '6:27:15', arabic: 'وَنَكُونَ', transliteration: 'wa-nakuna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ك و ن', meaning: { en: 'and be', ur: 'اور ہوں' } },
      { id: '6:27:16', arabic: 'مِنَ', transliteration: 'mina', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'among', ur: 'میں سے' } },
      { id: '6:27:17', arabic: 'الْمُؤْمِنِينَ', transliteration: 'al-mu\'minin', pos: ['N'], posLabel: 'N', root: 'أ م ن', meaning: { en: 'the believers', ur: 'ایمان والوں' } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'مضاف + مضاف الیہ' },
        { from: 16, to: 17, label: 'جار + مجرور' }
      ],
    },
  },
  28: {
    text: 'بَلْ بَدَا لَهُم مَّا كَانُوا يُخْفُونَ مِن قَبْلُ وَلَوْ رُدُّوا لَعَادُوا لِمَا نُهُوا عَنْهُ وَإِنَّهُمْ لَكَاذِبُونَ',
    translation: {
      en: 'But what they concealed before has now appeared to them. And even if they were returned, they would return to that which they were forbidden; and indeed, they are liars.',
      ur: 'بلکہ جو وہ پہلے چھپاتے تھے اب ان پر ظاہر ہو گیا۔ اور اگر وہ واپس بھیجے جائیں تب بھی وہی کریں جس سے منع کیا گیا تھا اور بے شک وہ جھوٹے ہیں۔'
    },
    words: [
      { id: '6:28:1', arabic: 'بَلْ', transliteration: 'bal', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'But', ur: 'بلکہ' } },
      { id: '6:28:2', arabic: 'بَدَا', transliteration: 'bada', pos: ['V'], posLabel: 'V', root: 'ب د و', meaning: { en: 'has appeared', ur: 'ظاہر ہو گیا' } },
      { id: '6:28:3', arabic: 'لَهُم', transliteration: 'lahum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to them', ur: 'ان پر' } },
      { id: '6:28:4', arabic: 'مَّا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '6:28:5', arabic: 'كَانُوا', transliteration: 'kanu', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'they used to', ur: 'وہ تھے' } },
      { id: '6:28:6', arabic: 'يُخْفُونَ', transliteration: 'yukhfun', pos: ['V'], posLabel: 'V', root: 'خ ف ي', meaning: { en: 'conceal', ur: 'چھپاتے' } },
      { id: '6:28:7', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:28:8', arabic: 'قَبْلُ', transliteration: 'qablu', pos: ['N'], posLabel: 'N', root: 'ق ب ل', meaning: { en: 'before', ur: 'پہلے' } },
      { id: '6:28:9', arabic: 'وَلَوْ', transliteration: 'wa-law', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'And even if', ur: 'اور اگر' } },
      { id: '6:28:10', arabic: 'رُدُّوا', transliteration: 'ruddu', pos: ['V'], posLabel: 'V', root: 'ر د د', meaning: { en: 'they were returned', ur: 'واپس بھیجے جائیں' } },
      { id: '6:28:11', arabic: 'لَعَادُوا', transliteration: 'la-\'adu', pos: ['EMPH', 'V'], posLabel: 'EMPH+V', root: 'ع و د', meaning: { en: 'they would return', ur: 'ضرور لوٹتے' } },
      { id: '6:28:12', arabic: 'لِمَا', transliteration: 'li-ma', pos: ['P', 'REL'], posLabel: 'P+REL', root: null, meaning: { en: 'to that which', ur: 'اس کی طرف جو' } },
      { id: '6:28:13', arabic: 'نُهُوا', transliteration: 'nuhu', pos: ['V'], posLabel: 'V', root: 'ن ه ي', meaning: { en: 'they were forbidden', ur: 'منع کیا گیا' } },
      { id: '6:28:14', arabic: 'عَنْهُ', transliteration: '\'anhu', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'from it', ur: 'اس سے' } },
      { id: '6:28:15', arabic: 'وَإِنَّهُمْ', transliteration: 'wa-innahum', pos: ['CONJ', 'ACC', 'PRON'], posLabel: 'CONJ+ACC+PRON', root: null, meaning: { en: 'and indeed they', ur: 'اور بے شک وہ' } },
      { id: '6:28:16', arabic: 'لَكَاذِبُونَ', transliteration: 'la-kadhibun', pos: ['EMPH', 'N'], posLabel: 'EMPH+N', root: 'ك ذ ب', meaning: { en: 'are liars', ur: 'جھوٹے ہیں' } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 9, to: 10, label: 'شرط + فعل' },
        { from: 12, to: 13, label: 'موصول + صلة' }
      ],
    },
  },
  29: {
    text: 'وَقَالُوا إِنْ هِيَ إِلَّا حَيَاتُنَا الدُّنْيَا وَمَا نَحْنُ بِمَبْعُوثِينَ',
    translation: {
      en: 'And they say, "There is nothing but our worldly life, and we will not be resurrected."',
      ur: 'اور وہ کہتے ہیں کہ ہماری دنیا کی زندگی کے سوا کچھ نہیں اور ہم دوبارہ اٹھائے نہیں جائیں گے۔'
    },
    words: [
      { id: '6:29:1', arabic: 'وَقَالُوا', transliteration: 'wa-qalu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ق و ل', meaning: { en: 'And they say', ur: 'اور کہتے ہیں' } },
      { id: '6:29:2', arabic: 'إِنْ', transliteration: 'in', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '6:29:3', arabic: 'هِيَ', transliteration: 'hiya', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'it is', ur: 'یہ' } },
      { id: '6:29:4', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'but', ur: 'مگر' } },
      { id: '6:29:5', arabic: 'حَيَاتُنَا', transliteration: 'hayatuna', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ح ي ي', meaning: { en: 'our life', ur: 'ہماری زندگی' } },
      { id: '6:29:6', arabic: 'الدُّنْيَا', transliteration: 'ad-dunya', pos: ['ADJ'], posLabel: 'ADJ', root: 'د ن و', meaning: { en: 'worldly', ur: 'دنیا کی' } },
      { id: '6:29:7', arabic: 'وَمَا', transliteration: 'wa-ma', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '6:29:8', arabic: 'نَحْنُ', transliteration: 'nahnu', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'we', ur: 'ہم' } },
      { id: '6:29:9', arabic: 'بِمَبْعُوثِينَ', transliteration: 'bi-mab\'uthin', pos: ['P', 'N'], posLabel: 'P+N', root: 'ب ع ث', meaning: { en: 'will be resurrected', ur: 'اٹھائے جائیں گے' } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },
  30: {
    text: 'وَلَوْ تَرَىٰ إِذْ وُقِفُوا عَلَىٰ رَبِّهِمْ قَالَ أَلَيْسَ هَٰذَا بِالْحَقِّ قَالُوا بَلَىٰ وَرَبِّنَا قَالَ فَذُوقُوا الْعَذَابَ بِمَا كُنتُمْ تَكْفُرُونَ',
    translation: {
      en: 'If you could but see when they will be made to stand before their Lord. He will say, "Is this not the truth?" They will say, "Yes, by our Lord." He will say, "Then taste the punishment because you used to disbelieve."',
      ur: 'اور کاش تم دیکھو جب وہ اپنے رب کے سامنے کھڑے کیے جائیں گے۔ وہ فرمائے گا کیا یہ حق نہیں ہے؟ کہیں گے ہاں ہمارے رب کی قسم۔ فرمائے گا پس عذاب چکھو اس لیے کہ تم کفر کرتے تھے۔'
    },
    words: [
      { id: '6:30:1', arabic: 'وَلَوْ', transliteration: 'wa-law', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'If', ur: 'اور کاش' } },
      { id: '6:30:2', arabic: 'تَرَىٰ', transliteration: 'tara', pos: ['V'], posLabel: 'V', root: 'ر أ ي', meaning: { en: 'you could see', ur: 'تم دیکھو' } },
      { id: '6:30:3', arabic: 'إِذْ', transliteration: 'idh', pos: ['T'], posLabel: 'T', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '6:30:4', arabic: 'وُقِفُوا', transliteration: 'wuqifu', pos: ['V'], posLabel: 'V', root: 'و ق ف', meaning: { en: 'they will be made to stand', ur: 'کھڑے کیے جائیں' } },
      { id: '6:30:5', arabic: 'عَلَىٰ', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'before', ur: 'سامنے' } },
      { id: '6:30:6', arabic: 'رَبِّهِمْ', transliteration: 'rabbihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'their Lord', ur: 'اپنے رب کے' } },
      { id: '6:30:7', arabic: 'قَالَ', transliteration: 'qala', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'He will say', ur: 'فرمائے گا' } },
      { id: '6:30:8', arabic: 'أَلَيْسَ', transliteration: 'a-laysa', pos: ['INTG', 'V'], posLabel: 'INTG+V', root: 'ل ي س', meaning: { en: 'Is not', ur: 'کیا نہیں' } },
      { id: '6:30:9', arabic: 'هَٰذَا', transliteration: 'hadha', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'this', ur: 'یہ' } },
      { id: '6:30:10', arabic: 'بِالْحَقِّ', transliteration: 'bil-haqqi', pos: ['P', 'N'], posLabel: 'P+N', root: 'ح ق ق', meaning: { en: 'the truth', ur: 'حق' } },
      { id: '6:30:11', arabic: 'قَالُوا', transliteration: 'qalu', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'They will say', ur: 'کہیں گے' } },
      { id: '6:30:12', arabic: 'بَلَىٰ', transliteration: 'bala', pos: ['ANS'], posLabel: 'ANS', root: null, meaning: { en: 'Yes', ur: 'ہاں' } },
      { id: '6:30:13', arabic: 'وَرَبِّنَا', transliteration: 'wa-rabbina', pos: ['CONJ', 'N', 'PRON'], posLabel: 'CONJ+N+PRON', root: 'ر ب ب', meaning: { en: 'by our Lord', ur: 'ہمارے رب کی قسم' } },
      { id: '6:30:14', arabic: 'قَالَ', transliteration: 'qala', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'He will say', ur: 'فرمائے گا' } },
      { id: '6:30:15', arabic: 'فَذُوقُوا', transliteration: 'fa-dhuqu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ذ و ق', meaning: { en: 'Then taste', ur: 'تو چکھو' } },
      { id: '6:30:16', arabic: 'الْعَذَابَ', transliteration: 'al-\'adhaba', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: 'the punishment', ur: 'عذاب' } },
      { id: '6:30:17', arabic: 'بِمَا', transliteration: 'bi-ma', pos: ['P', 'REL'], posLabel: 'P+REL', root: null, meaning: { en: 'because', ur: 'اس لیے' } },
      { id: '6:30:18', arabic: 'كُنتُمْ', transliteration: 'kuntum', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'you used to', ur: 'تم تھے' } },
      { id: '6:30:19', arabic: 'تَكْفُرُونَ', transliteration: 'takfurun', pos: ['V'], posLabel: 'V', root: 'ك ف ر', meaning: { en: 'disbelieve', ur: 'کفر کرتے' } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'موصول + صلة' }
      ],
    },
  },
  31: {
    text: 'قَدْ خَسِرَ الَّذِينَ كَذَّبُوا بِلِقَاءِ اللَّهِ حَتَّىٰ إِذَا جَاءَتْهُمُ السَّاعَةُ بَغْتَةً قَالُوا يَا حَسْرَتَنَا عَلَىٰ مَا فَرَّطْنَا فِيهَا وَهُمْ يَحْمِلُونَ أَوْزَارَهُمْ عَلَىٰ ظُهُورِهِمْ أَلَا سَاءَ مَا يَزِرُونَ',
    translation: {
      en: 'Those who deny the meeting with Allah have lost until, when the Hour comes upon them unexpectedly, they will say, "How great is our regret over what we neglected." And they will bear their burdens on their backs. Unquestionably, evil is that which they bear.',
      ur: 'بے شک وہ لوگ خسارے میں رہے جنہوں نے اللہ سے ملاقات کو جھٹلایا۔ یہاں تک کہ جب اچانک قیامت آ جائے گی تو کہیں گے افسوس ہم نے اس میں کوتاہی کی۔ اور وہ اپنے بوجھ اپنی پیٹھوں پر اٹھائے ہوں گے۔ کیا ہی برا ہے جو وہ اٹھاتے ہیں۔'
    },
    words: [
      { id: '6:31:1', arabic: 'قَدْ', transliteration: 'qad', pos: ['CERT'], posLabel: 'CERT', root: null, meaning: { en: 'Certainly', ur: 'بے شک' } },
      { id: '6:31:2', arabic: 'خَسِرَ', transliteration: 'khasira', pos: ['V'], posLabel: 'V', root: 'خ س ر', meaning: { en: 'have lost', ur: 'خسارے میں رہے' } },
      { id: '6:31:3', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جنہوں نے' } },
      { id: '6:31:4', arabic: 'كَذَّبُوا', transliteration: 'kadhdhabu', pos: ['V'], posLabel: 'V', root: 'ك ذ ب', meaning: { en: 'deny', ur: 'جھٹلایا' } },
      { id: '6:31:5', arabic: 'بِلِقَاءِ', transliteration: 'bi-liqa\'i', pos: ['P', 'N'], posLabel: 'P+N', root: 'ل ق ي', meaning: { en: 'the meeting with', ur: 'ملاقات کو' } },
      { id: '6:31:6', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ سے' } },
      { id: '6:31:7', arabic: 'حَتَّىٰ', transliteration: 'hatta', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'until', ur: 'یہاں تک کہ' } },
      { id: '6:31:8', arabic: 'إِذَا', transliteration: 'idha', pos: ['T'], posLabel: 'T', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '6:31:9', arabic: 'جَاءَتْهُمُ', transliteration: 'ja\'athumu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج ي أ', meaning: { en: 'comes upon them', ur: 'آ جائے' } },
      { id: '6:31:10', arabic: 'السَّاعَةُ', transliteration: 'as-sa\'atu', pos: ['N'], posLabel: 'N', root: 'س و ع', meaning: { en: 'the Hour', ur: 'قیامت' } },
      { id: '6:31:11', arabic: 'بَغْتَةً', transliteration: 'baghtatan', pos: ['N'], posLabel: 'N', root: 'ب غ ت', meaning: { en: 'unexpectedly', ur: 'اچانک' } },
      { id: '6:31:12', arabic: 'قَالُوا', transliteration: 'qalu', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'they will say', ur: 'کہیں گے' } },
      { id: '6:31:13', arabic: 'يَا', transliteration: 'ya', pos: ['VOC'], posLabel: 'VOC', root: null, meaning: { en: 'Oh', ur: 'اے' } },
      { id: '6:31:14', arabic: 'حَسْرَتَنَا', transliteration: 'hasratana', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ح س ر', meaning: { en: 'our regret', ur: 'افسوس ہمارا' } },
      { id: '6:31:15', arabic: 'عَلَىٰ', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'over', ur: 'پر' } },
      { id: '6:31:16', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '6:31:17', arabic: 'فَرَّطْنَا', transliteration: 'farratna', pos: ['V'], posLabel: 'V', root: 'ف ر ط', meaning: { en: 'we neglected', ur: 'کوتاہی کی' } },
      { id: '6:31:18', arabic: 'فِيهَا', transliteration: 'fiha', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'concerning it', ur: 'اس میں' } },
      { id: '6:31:19', arabic: 'وَهُمْ', transliteration: 'wa-hum', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'And they', ur: 'اور وہ' } },
      { id: '6:31:20', arabic: 'يَحْمِلُونَ', transliteration: 'yahmilun', pos: ['V'], posLabel: 'V', root: 'ح م ل', meaning: { en: 'will bear', ur: 'اٹھائیں گے' } },
      { id: '6:31:21', arabic: 'أَوْزَارَهُمْ', transliteration: 'awzarahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'و ز ر', meaning: { en: 'their burdens', ur: 'اپنے بوجھ' } },
      { id: '6:31:22', arabic: 'عَلَىٰ', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'on', ur: 'پر' } },
      { id: '6:31:23', arabic: 'ظُهُورِهِمْ', transliteration: 'zuhurihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ظ ه ر', meaning: { en: 'their backs', ur: 'اپنی پیٹھوں' } },
      { id: '6:31:24', arabic: 'أَلَا', transliteration: 'a-la', pos: ['INTG', 'NEG'], posLabel: 'INTG+NEG', root: null, meaning: { en: 'Unquestionably', ur: 'خبردار' } },
      { id: '6:31:25', arabic: 'سَاءَ', transliteration: 'sa\'a', pos: ['V'], posLabel: 'V', root: 'س و أ', meaning: { en: 'evil is', ur: 'برا ہے' } },
      { id: '6:31:26', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '6:31:27', arabic: 'يَزِرُونَ', transliteration: 'yazirun', pos: ['V'], posLabel: 'V', root: 'و ز ر', meaning: { en: 'they bear', ur: 'وہ اٹھاتے ہیں' } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'مضاف + مضاف الیہ' },
        { from: 16, to: 17, label: 'موصول + صلة' },
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 26, to: 27, label: 'موصول + صلة' }
      ],
    },
  },
  32: {
    text: 'وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا لَعِبٌ وَلَهْوٌ وَلَلدَّارُ الْآخِرَةُ خَيْرٌ لِّلَّذِينَ يَتَّقُونَ أَفَلَا تَعْقِلُونَ',
    translation: {
      en: 'And the worldly life is not but amusement and diversion; but the home of the Hereafter is best for those who fear Allah. Then will you not reason?',
      ur: 'اور دنیا کی زندگی کھیل تماشے کے سوا کچھ نہیں اور آخرت کا گھر ان لوگوں کے لیے بہتر ہے جو تقویٰ اختیار کرتے ہیں۔ کیا تم عقل نہیں رکھتے؟'
    },
    words: [
      { id: '6:32:1', arabic: 'وَمَا', transliteration: 'wa-ma', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '6:32:2', arabic: 'الْحَيَاةُ', transliteration: 'al-hayatu', pos: ['N'], posLabel: 'N', root: 'ح ي ي', meaning: { en: 'the life', ur: 'زندگی' } },
      { id: '6:32:3', arabic: 'الدُّنْيَا', transliteration: 'ad-dunya', pos: ['ADJ'], posLabel: 'ADJ', root: 'د ن و', meaning: { en: 'worldly', ur: 'دنیا کی' } },
      { id: '6:32:4', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'but', ur: 'سوائے' } },
      { id: '6:32:5', arabic: 'لَعِبٌ', transliteration: 'la\'ibun', pos: ['N'], posLabel: 'N', root: 'ل ع ب', meaning: { en: 'amusement', ur: 'کھیل' } },
      { id: '6:32:6', arabic: 'وَلَهْوٌ', transliteration: 'wa-lahwun', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ل ه و', meaning: { en: 'and diversion', ur: 'اور تماشا' } },
      { id: '6:32:7', arabic: 'وَلَلدَّارُ', transliteration: 'wa-la-d-daru', pos: ['CONJ', 'EMPH', 'N'], posLabel: 'CONJ+EMPH+N', root: 'د و ر', meaning: { en: 'but the home', ur: 'اور گھر' } },
      { id: '6:32:8', arabic: 'الْآخِرَةُ', transliteration: 'al-akhiratu', pos: ['ADJ'], posLabel: 'ADJ', root: 'أ خ ر', meaning: { en: 'of the Hereafter', ur: 'آخرت کا' } },
      { id: '6:32:9', arabic: 'خَيْرٌ', transliteration: 'khayrun', pos: ['N'], posLabel: 'N', root: 'خ ي ر', meaning: { en: 'is best', ur: 'بہتر ہے' } },
      { id: '6:32:10', arabic: 'لِّلَّذِينَ', transliteration: 'lilladhina', pos: ['P', 'REL'], posLabel: 'P+REL', root: null, meaning: { en: 'for those who', ur: 'ان لوگوں کے لیے جو' } },
      { id: '6:32:11', arabic: 'يَتَّقُونَ', transliteration: 'yattaqun', pos: ['V'], posLabel: 'V', root: 'و ق ي', meaning: { en: 'fear (Allah)', ur: 'تقویٰ اختیار کریں' } },
      { id: '6:32:12', arabic: 'أَفَلَا', transliteration: 'a-fa-la', pos: ['INTG', 'CONJ', 'NEG'], posLabel: 'INTG+CONJ+NEG', root: null, meaning: { en: 'Then will you not', ur: 'کیا تم نہیں' } },
      { id: '6:32:13', arabic: 'تَعْقِلُونَ', transliteration: 'ta\'qilun', pos: ['V'], posLabel: 'V', root: 'ع ق ل', meaning: { en: 'reason', ur: 'عقل رکھتے' } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' },
        { from: 7, to: 8, label: 'موصوف + صفت' },
        { from: 10, to: 11, label: 'موصول + صلة' },
        { from: 12, to: 13, label: 'نفی + فعل' }
      ],
    },
  },
  33: {
    text: 'قَدْ نَعْلَمُ إِنَّهُ لَيَحْزُنُكَ الَّذِي يَقُولُونَ فَإِنَّهُمْ لَا يُكَذِّبُونَكَ وَلَٰكِنَّ الظَّالِمِينَ بِآيَاتِ اللَّهِ يَجْحَدُونَ',
    translation: {
      en: 'We know that you are grieved by what they say. And indeed, they do not call you untruthful, but it is the verses of Allah that the wrongdoers reject.',
      ur: 'ہم جانتے ہیں کہ ان کی باتیں تمہیں غمگین کرتی ہیں۔ وہ تمہیں نہیں جھٹلاتے بلکہ ظالم اللہ کی آیات کا انکار کرتے ہیں۔'
    },
    words: [
      { id: '6:33:1', arabic: 'قَدْ', transliteration: 'qad', pos: ['CERT'], posLabel: 'CERT', root: null, meaning: { en: 'Indeed', ur: 'بے شک' } },
      { id: '6:33:2', arabic: 'نَعْلَمُ', transliteration: 'na\'lamu', pos: ['V'], posLabel: 'V', root: 'ع ل م', meaning: { en: 'We know', ur: 'ہم جانتے ہیں' } },
      { id: '6:33:3', arabic: 'إِنَّهُ', transliteration: 'innahu', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'that it', ur: 'بے شک' } },
      { id: '6:33:4', arabic: 'لَيَحْزُنُكَ', transliteration: 'la-yahzunuka', pos: ['EMPH', 'V', 'PRON'], posLabel: 'EMPH+V+PRON', root: 'ح ز ن', meaning: { en: 'surely grieves you', ur: 'تمہیں غمگین کرتا ہے' } },
      { id: '6:33:5', arabic: 'الَّذِي', transliteration: 'alladhi', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '6:33:6', arabic: 'يَقُولُونَ', transliteration: 'yaqulun', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'they say', ur: 'وہ کہتے ہیں' } },
      { id: '6:33:7', arabic: 'فَإِنَّهُمْ', transliteration: 'fa-innahum', pos: ['CONJ', 'ACC', 'PRON'], posLabel: 'CONJ+ACC+PRON', root: null, meaning: { en: 'Indeed they', ur: 'بے شک وہ' } },
      { id: '6:33:8', arabic: 'لَا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'do not', ur: 'نہیں' } },
      { id: '6:33:9', arabic: 'يُكَذِّبُونَكَ', transliteration: 'yukadhdhibunaka', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ك ذ ب', meaning: { en: 'call you untruthful', ur: 'تمہیں جھٹلاتے' } },
      { id: '6:33:10', arabic: 'وَلَٰكِنَّ', transliteration: 'wa-lakinna', pos: ['CONJ', 'ACC'], posLabel: 'CONJ+ACC', root: null, meaning: { en: 'but', ur: 'بلکہ' } },
      { id: '6:33:11', arabic: 'الظَّالِمِينَ', transliteration: 'az-zalimin', pos: ['N'], posLabel: 'N', root: 'ظ ل م', meaning: { en: 'the wrongdoers', ur: 'ظالم' } },
      { id: '6:33:12', arabic: 'بِآيَاتِ', transliteration: 'bi-ayati', pos: ['P', 'N'], posLabel: 'P+N', root: 'أ ي ي', meaning: { en: 'the verses of', ur: 'آیات کا' } },
      { id: '6:33:13', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کی' } },
      { id: '6:33:14', arabic: 'يَجْحَدُونَ', transliteration: 'yajhadun', pos: ['V'], posLabel: 'V', root: 'ج ح د', meaning: { en: 'reject', ur: 'انکار کرتے ہیں' } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'نفی + فعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف الیہ' }
      ],
    },
  },
  34: {
    text: 'وَلَقَدْ كُذِّبَتْ رُسُلٌ مِّن قَبْلِكَ فَصَبَرُوا عَلَىٰ مَا كُذِّبُوا وَأُوذُوا حَتَّىٰ أَتَاهُمْ نَصْرُنَا وَلَا مُبَدِّلَ لِكَلِمَاتِ اللَّهِ وَلَقَدْ جَاءَكَ مِن نَّبَإِ الْمُرْسَلِينَ',
    translation: {
      en: 'And certainly were messengers denied before you, but they were patient over the denial, and they were harmed until Our victory came to them. And none can alter the words of Allah. And there has certainly come to you some of the news of the messengers.',
      ur: 'اور تم سے پہلے بھی رسولوں کو جھٹلایا گیا تو انہوں نے جھٹلانے اور ایذا پر صبر کیا یہاں تک کہ ہماری مدد آ پہنچی۔ اللہ کی باتوں کو کوئی بدلنے والا نہیں۔ اور تمہارے پاس رسولوں کی خبریں پہنچ چکی ہیں۔'
    },
    words: [
      { id: '6:34:1', arabic: 'وَلَقَدْ', transliteration: 'wa-laqad', pos: ['CONJ', 'CERT'], posLabel: 'CONJ+CERT', root: null, meaning: { en: 'And certainly', ur: 'اور بے شک' } },
      { id: '6:34:2', arabic: 'كُذِّبَتْ', transliteration: 'kudhdhibat', pos: ['V'], posLabel: 'V', root: 'ك ذ ب', meaning: { en: 'were denied', ur: 'جھٹلایا گیا' } },
      { id: '6:34:3', arabic: 'رُسُلٌ', transliteration: 'rusulun', pos: ['N'], posLabel: 'N', root: 'ر س ل', meaning: { en: 'messengers', ur: 'رسولوں کو' } },
      { id: '6:34:4', arabic: 'مِّن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:34:5', arabic: 'قَبْلِكَ', transliteration: 'qablika', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق ب ل', meaning: { en: 'before you', ur: 'تم سے پہلے' } },
      { id: '6:34:6', arabic: 'فَصَبَرُوا', transliteration: 'fa-sabaru', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ص ب ر', meaning: { en: 'but they were patient', ur: 'تو صبر کیا' } },
      { id: '6:34:7', arabic: 'عَلَىٰ', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'over', ur: 'پر' } },
      { id: '6:34:8', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '6:34:9', arabic: 'كُذِّبُوا', transliteration: 'kudhdhibu', pos: ['V'], posLabel: 'V', root: 'ك ذ ب', meaning: { en: 'they were denied', ur: 'جھٹلایا گیا' } },
      { id: '6:34:10', arabic: 'وَأُوذُوا', transliteration: 'wa-udhu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'أ ذ ي', meaning: { en: 'and were harmed', ur: 'اور ایذا دی گئی' } },
      { id: '6:34:11', arabic: 'حَتَّىٰ', transliteration: 'hatta', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'until', ur: 'یہاں تک کہ' } },
      { id: '6:34:12', arabic: 'أَتَاهُمْ', transliteration: 'atahum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'أ ت ي', meaning: { en: 'came to them', ur: 'ان کے پاس آئی' } },
      { id: '6:34:13', arabic: 'نَصْرُنَا', transliteration: 'nasruna', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ن ص ر', meaning: { en: 'Our victory', ur: 'ہماری مدد' } },
      { id: '6:34:14', arabic: 'وَلَا', transliteration: 'wa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And none', ur: 'اور نہیں' } },
      { id: '6:34:15', arabic: 'مُبَدِّلَ', transliteration: 'mubaddila', pos: ['N'], posLabel: 'N', root: 'ب د ل', meaning: { en: 'can alter', ur: 'بدلنے والا' } },
      { id: '6:34:16', arabic: 'لِكَلِمَاتِ', transliteration: 'li-kalimati', pos: ['P', 'N'], posLabel: 'P+N', root: 'ك ل م', meaning: { en: 'the words of', ur: 'باتوں کو' } },
      { id: '6:34:17', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کی' } },
      { id: '6:34:18', arabic: 'وَلَقَدْ', transliteration: 'wa-laqad', pos: ['CONJ', 'CERT'], posLabel: 'CONJ+CERT', root: null, meaning: { en: 'And certainly', ur: 'اور بے شک' } },
      { id: '6:34:19', arabic: 'جَاءَكَ', transliteration: 'ja\'aka', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج ي أ', meaning: { en: 'has come to you', ur: 'تمہارے پاس آئی' } },
      { id: '6:34:20', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'some of', ur: 'سے' } },
      { id: '6:34:21', arabic: 'نَّبَإِ', transliteration: 'naba\'i', pos: ['N'], posLabel: 'N', root: 'ن ب أ', meaning: { en: 'the news of', ur: 'خبریں' } },
      { id: '6:34:22', arabic: 'الْمُرْسَلِينَ', transliteration: 'al-mursalin', pos: ['N'], posLabel: 'N', root: 'ر س ل', meaning: { en: 'the messengers', ur: 'رسولوں کی' } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصول + صلة' },
        { from: 16, to: 17, label: 'مضاف + مضاف الیہ' },
        { from: 21, to: 22, label: 'مضاف + مضاف الیہ' }
      ],
    },
  },
  35: {
    text: 'وَإِن كَانَ كَبُرَ عَلَيْكَ إِعْرَاضُهُمْ فَإِنِ اسْتَطَعْتَ أَن تَبْتَغِيَ نَفَقًا فِي الْأَرْضِ أَوْ سُلَّمًا فِي السَّمَاءِ فَتَأْتِيَهُم بِآيَةٍ وَلَوْ شَاءَ اللَّهُ لَجَمَعَهُمْ عَلَى الْهُدَىٰ فَلَا تَكُونَنَّ مِنَ الْجَاهِلِينَ',
    translation: {
      en: 'And if their evasion is difficult for you, then if you are able to seek a tunnel into the earth or a stairway into the sky to bring them a sign, [then do so]. But if Allah had willed, He would have united them upon guidance. So never be of the ignorant.',
      ur: 'اور اگر ان کا منہ موڑنا تم پر بھاری ہے تو اگر تم سے ہو سکے کہ زمین میں سرنگ ڈھونڈو یا آسمان میں سیڑھی تاکہ ان کے لیے کوئی نشانی لاؤ۔ اور اگر اللہ چاہتا تو سب کو ہدایت پر جمع کر دیتا۔ تو نادانوں میں سے نہ ہونا۔'
    },
    words: [
      { id: '6:35:1', arabic: 'وَإِن', transliteration: 'wa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'And if', ur: 'اور اگر' } },
      { id: '6:35:2', arabic: 'كَانَ', transliteration: 'kana', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'is', ur: 'ہے' } },
      { id: '6:35:3', arabic: 'كَبُرَ', transliteration: 'kabura', pos: ['V'], posLabel: 'V', root: 'ك ب ر', meaning: { en: 'is difficult', ur: 'بھاری ہے' } },
      { id: '6:35:4', arabic: 'عَلَيْكَ', transliteration: '\'alayka', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'for you', ur: 'تم پر' } },
      { id: '6:35:5', arabic: 'إِعْرَاضُهُمْ', transliteration: 'i\'raduhum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ع ر ض', meaning: { en: 'their evasion', ur: 'ان کا منہ موڑنا' } },
      { id: '6:35:6', arabic: 'فَإِنِ', transliteration: 'fa-ini', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'then if', ur: 'تو اگر' } },
      { id: '6:35:7', arabic: 'اسْتَطَعْتَ', transliteration: 'istata\'ta', pos: ['V'], posLabel: 'V', root: 'ط و ع', meaning: { en: 'you are able', ur: 'تم سے ہو سکے' } },
      { id: '6:35:8', arabic: 'أَن', transliteration: 'an', pos: ['SUB'], posLabel: 'SUB', root: null, meaning: { en: 'to', ur: 'کہ' } },
      { id: '6:35:9', arabic: 'تَبْتَغِيَ', transliteration: 'tabtaghiya', pos: ['V'], posLabel: 'V', root: 'ب غ ي', meaning: { en: 'seek', ur: 'ڈھونڈو' } },
      { id: '6:35:10', arabic: 'نَفَقًا', transliteration: 'nafaqan', pos: ['N'], posLabel: 'N', root: 'ن ف ق', meaning: { en: 'a tunnel', ur: 'سرنگ' } },
      { id: '6:35:11', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'into', ur: 'میں' } },
      { id: '6:35:12', arabic: 'الْأَرْضِ', transliteration: 'al-ardi', pos: ['N'], posLabel: 'N', root: 'أ ر ض', meaning: { en: 'the earth', ur: 'زمین' } },
      { id: '6:35:13', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '6:35:14', arabic: 'سُلَّمًا', transliteration: 'sullaman', pos: ['N'], posLabel: 'N', root: 'س ل م', meaning: { en: 'a stairway', ur: 'سیڑھی' } },
      { id: '6:35:15', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'into', ur: 'میں' } },
      { id: '6:35:16', arabic: 'السَّمَاءِ', transliteration: 'as-sama\'i', pos: ['N'], posLabel: 'N', root: 'س م و', meaning: { en: 'the sky', ur: 'آسمان' } },
      { id: '6:35:17', arabic: 'فَتَأْتِيَهُم', transliteration: 'fa-ta\'tiyahum', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'أ ت ي', meaning: { en: 'to bring them', ur: 'تو لاؤ ان کے لیے' } },
      { id: '6:35:18', arabic: 'بِآيَةٍ', transliteration: 'bi-ayatin', pos: ['P', 'N'], posLabel: 'P+N', root: 'أ ي ي', meaning: { en: 'a sign', ur: 'نشانی' } },
      { id: '6:35:19', arabic: 'وَلَوْ', transliteration: 'wa-law', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'But if', ur: 'اور اگر' } },
      { id: '6:35:20', arabic: 'شَاءَ', transliteration: 'sha\'a', pos: ['V'], posLabel: 'V', root: 'ش ي أ', meaning: { en: 'had willed', ur: 'چاہتا' } },
      { id: '6:35:21', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '6:35:22', arabic: 'لَجَمَعَهُمْ', transliteration: 'la-jama\'ahum', pos: ['EMPH', 'V', 'PRON'], posLabel: 'EMPH+V+PRON', root: 'ج م ع', meaning: { en: 'He would have united them', ur: 'سب کو جمع کر دیتا' } },
      { id: '6:35:23', arabic: 'عَلَى', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'upon', ur: 'پر' } },
      { id: '6:35:24', arabic: 'الْهُدَىٰ', transliteration: 'al-huda', pos: ['N'], posLabel: 'N', root: 'ه د ي', meaning: { en: 'guidance', ur: 'ہدایت' } },
      { id: '6:35:25', arabic: 'فَلَا', transliteration: 'fa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'So never', ur: 'تو ہرگز نہ' } },
      { id: '6:35:26', arabic: 'تَكُونَنَّ', transliteration: 'takunanna', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'be', ur: 'ہونا' } },
      { id: '6:35:27', arabic: 'مِنَ', transliteration: 'mina', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'میں سے' } },
      { id: '6:35:28', arabic: 'الْجَاهِلِينَ', transliteration: 'al-jahilin', pos: ['N'], posLabel: 'N', root: 'ج ه ل', meaning: { en: 'the ignorant', ur: 'نادانوں' } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'شرط + فعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 23, to: 24, label: 'جار + مجرور' },
        { from: 27, to: 28, label: 'جار + مجرور' }
      ],
    },
  },
  36: {
    text: 'إِنَّمَا يَسْتَجِيبُ الَّذِينَ يَسْمَعُونَ وَالْمَوْتَىٰ يَبْعَثُهُمُ اللَّهُ ثُمَّ إِلَيْهِ يُرْجَعُونَ',
    translation: {
      en: 'Only those who hear will respond. But the dead - Allah will resurrect them; then to Him they will be returned.',
      ur: 'صرف وہی قبول کرتے ہیں جو سنتے ہیں اور مردوں کو اللہ اٹھائے گا پھر اسی کی طرف لوٹائے جائیں گے۔'
    },
    words: [
      { id: '6:36:1', arabic: 'إِنَّمَا', transliteration: 'innama', pos: ['ACC', 'REL'], posLabel: 'ACC+REL', root: null, meaning: { en: 'Only', ur: 'صرف' } },
      { id: '6:36:2', arabic: 'يَسْتَجِيبُ', transliteration: 'yastajibu', pos: ['V'], posLabel: 'V', root: 'ج و ب', meaning: { en: 'will respond', ur: 'قبول کرتے ہیں' } },
      { id: '6:36:3', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '6:36:4', arabic: 'يَسْمَعُونَ', transliteration: 'yasma\'un', pos: ['V'], posLabel: 'V', root: 'س م ع', meaning: { en: 'hear', ur: 'سنتے ہیں' } },
      { id: '6:36:5', arabic: 'وَالْمَوْتَىٰ', transliteration: 'wal-mawta', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'م و ت', meaning: { en: 'But the dead', ur: 'اور مردے' } },
      { id: '6:36:6', arabic: 'يَبْعَثُهُمُ', transliteration: 'yab\'athuhumu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ب ع ث', meaning: { en: 'will resurrect them', ur: 'اٹھائے گا انہیں' } },
      { id: '6:36:7', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '6:36:8', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '6:36:9', arabic: 'إِلَيْهِ', transliteration: 'ilayhi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to Him', ur: 'اسی کی طرف' } },
      { id: '6:36:10', arabic: 'يُرْجَعُونَ', transliteration: 'yurja\'un', pos: ['V'], posLabel: 'V', root: 'ر ج ع', meaning: { en: 'they will be returned', ur: 'لوٹائے جائیں گے' } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' }
      ],
    },
  },
  37: {
    text: 'وَقَالُوا لَوْلَا نُزِّلَ عَلَيْهِ آيَةٌ مِّن رَّبِّهِ قُلْ إِنَّ اللَّهَ قَادِرٌ عَلَىٰ أَن يُنَزِّلَ آيَةً وَلَٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ',
    translation: {
      en: 'And they say, "Why has a sign not been sent down to him from his Lord?" Say, "Indeed, Allah is able to send down a sign, but most of them do not know."',
      ur: 'اور کہتے ہیں اس پر اس کے رب کی طرف سے کوئی نشانی کیوں نہیں اتاری گئی۔ کہو اللہ نشانی اتارنے پر قادر ہے لیکن ان میں سے اکثر نہیں جانتے۔'
    },
    words: [
      { id: '6:37:1', arabic: 'وَقَالُوا', transliteration: 'wa-qalu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ق و ل', meaning: { en: 'And they say', ur: 'اور کہتے ہیں' } },
      { id: '6:37:2', arabic: 'لَوْلَا', transliteration: 'lawla', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'Why not', ur: 'کیوں نہیں' } },
      { id: '6:37:3', arabic: 'نُزِّلَ', transliteration: 'nuzzila', pos: ['V'], posLabel: 'V', root: 'ن ز ل', meaning: { en: 'has been sent down', ur: 'اتاری گئی' } },
      { id: '6:37:4', arabic: 'عَلَيْهِ', transliteration: '\'alayhi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to him', ur: 'اس پر' } },
      { id: '6:37:5', arabic: 'آيَةٌ', transliteration: 'ayatun', pos: ['N'], posLabel: 'N', root: 'أ ي ي', meaning: { en: 'a sign', ur: 'نشانی' } },
      { id: '6:37:6', arabic: 'مِّن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:37:7', arabic: 'رَّبِّهِ', transliteration: 'rabbihi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'his Lord', ur: 'اس کے رب' } },
      { id: '6:37:8', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:37:9', arabic: 'إِنَّ', transliteration: 'inna', pos: ['ACC'], posLabel: 'ACC', root: null, meaning: { en: 'Indeed', ur: 'بے شک' } },
      { id: '6:37:10', arabic: 'اللَّهَ', transliteration: 'Allaha', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '6:37:11', arabic: 'قَادِرٌ', transliteration: 'qadirun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ق د ر', meaning: { en: 'is able', ur: 'قادر ہے' } },
      { id: '6:37:12', arabic: 'عَلَىٰ', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'پر' } },
      { id: '6:37:13', arabic: 'أَن', transliteration: 'an', pos: ['SUB'], posLabel: 'SUB', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '6:37:14', arabic: 'يُنَزِّلَ', transliteration: 'yunazzila', pos: ['V'], posLabel: 'V', root: 'ن ز ل', meaning: { en: 'send down', ur: 'اتارے' } },
      { id: '6:37:15', arabic: 'آيَةً', transliteration: 'ayatan', pos: ['N'], posLabel: 'N', root: 'أ ي ي', meaning: { en: 'a sign', ur: 'نشانی' } },
      { id: '6:37:16', arabic: 'وَلَٰكِنَّ', transliteration: 'wa-lakinna', pos: ['CONJ', 'ACC'], posLabel: 'CONJ+ACC', root: null, meaning: { en: 'but', ur: 'لیکن' } },
      { id: '6:37:17', arabic: 'أَكْثَرَهُمْ', transliteration: 'aktharahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ك ث ر', meaning: { en: 'most of them', ur: 'ان میں اکثر' } },
      { id: '6:37:18', arabic: 'لَا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'do not', ur: 'نہیں' } },
      { id: '6:37:19', arabic: 'يَعْلَمُونَ', transliteration: 'ya\'lamun', pos: ['V'], posLabel: 'V', root: 'ع ل م', meaning: { en: 'know', ur: 'جانتے' } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'نفی + فعل' }
      ],
    },
  },
  38: {
    text: 'وَمَا مِن دَابَّةٍ فِي الْأَرْضِ وَلَا طَائِرٍ يَطِيرُ بِجَنَاحَيْهِ إِلَّا أُمَمٌ أَمْثَالُكُم مَّا فَرَّطْنَا فِي الْكِتَابِ مِن شَيْءٍ ثُمَّ إِلَىٰ رَبِّهِمْ يُحْشَرُونَ',
    translation: {
      en: 'And there is no creature on earth or bird that flies with its wings except that they are communities like you. We have not neglected in the Register a thing. Then unto their Lord they will be gathered.',
      ur: 'اور زمین میں کوئی چلنے والا جانور نہیں اور نہ کوئی پرندہ جو اپنے پروں سے اڑتا ہو مگر یہ سب تمہاری طرح کی جماعتیں ہیں۔ ہم نے کتاب میں کوئی چیز نہیں چھوڑی۔ پھر اپنے رب کی طرف سب جمع کیے جائیں گے۔'
    },
    words: [
      { id: '6:38:1', arabic: 'وَمَا', transliteration: 'wa-ma', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And there is no', ur: 'اور نہیں' } },
      { id: '6:38:2', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: '(any)', ur: 'کوئی' } },
      { id: '6:38:3', arabic: 'دَابَّةٍ', transliteration: 'dabbatin', pos: ['N'], posLabel: 'N', root: 'د ب ب', meaning: { en: 'creature', ur: 'چلنے والا' } },
      { id: '6:38:4', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'on', ur: 'میں' } },
      { id: '6:38:5', arabic: 'الْأَرْضِ', transliteration: 'al-ardi', pos: ['N'], posLabel: 'N', root: 'أ ر ض', meaning: { en: 'the earth', ur: 'زمین' } },
      { id: '6:38:6', arabic: 'وَلَا', transliteration: 'wa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and no', ur: 'اور نہ' } },
      { id: '6:38:7', arabic: 'طَائِرٍ', transliteration: 'ta\'irin', pos: ['N'], posLabel: 'N', root: 'ط ي ر', meaning: { en: 'bird', ur: 'پرندہ' } },
      { id: '6:38:8', arabic: 'يَطِيرُ', transliteration: 'yatiru', pos: ['V'], posLabel: 'V', root: 'ط ي ر', meaning: { en: 'that flies', ur: 'اڑتا ہے' } },
      { id: '6:38:9', arabic: 'بِجَنَاحَيْهِ', transliteration: 'bi-janahayhi', pos: ['P', 'N', 'PRON'], posLabel: 'P+N+PRON', root: 'ج ن ح', meaning: { en: 'with its wings', ur: 'اپنے پروں سے' } },
      { id: '6:38:10', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except', ur: 'مگر' } },
      { id: '6:38:11', arabic: 'أُمَمٌ', transliteration: 'umamun', pos: ['N'], posLabel: 'N', root: 'أ م م', meaning: { en: 'communities', ur: 'جماعتیں' } },
      { id: '6:38:12', arabic: 'أَمْثَالُكُم', transliteration: 'amthalukum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'م ث ل', meaning: { en: 'like you', ur: 'تمہاری طرح' } },
      { id: '6:38:13', arabic: 'مَّا', transliteration: 'ma', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '6:38:14', arabic: 'فَرَّطْنَا', transliteration: 'farratna', pos: ['V'], posLabel: 'V', root: 'ف ر ط', meaning: { en: 'We have neglected', ur: 'ہم نے چھوڑی' } },
      { id: '6:38:15', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '6:38:16', arabic: 'الْكِتَابِ', transliteration: 'al-kitabi', pos: ['N'], posLabel: 'N', root: 'ك ت ب', meaning: { en: 'the Register', ur: 'کتاب' } },
      { id: '6:38:17', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: '(any)', ur: 'سے' } },
      { id: '6:38:18', arabic: 'شَيْءٍ', transliteration: 'shay\'in', pos: ['N'], posLabel: 'N', root: 'ش ي أ', meaning: { en: 'thing', ur: 'کوئی چیز' } },
      { id: '6:38:19', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'Then', ur: 'پھر' } },
      { id: '6:38:20', arabic: 'إِلَىٰ', transliteration: 'ila', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'unto', ur: 'طرف' } },
      { id: '6:38:21', arabic: 'رَبِّهِمْ', transliteration: 'rabbihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'their Lord', ur: 'اپنے رب کی' } },
      { id: '6:38:22', arabic: 'يُحْشَرُونَ', transliteration: 'yuhsharun', pos: ['V'], posLabel: 'V', root: 'ح ش ر', meaning: { en: 'they will be gathered', ur: 'جمع کیے جائیں گے' } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'نفی + فعل' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 20, to: 21, label: 'جار + مجرور' }
      ],
    },
  },
  39: {
    text: 'وَالَّذِينَ كَذَّبُوا بِآيَاتِنَا صُمٌّ وَبُكْمٌ فِي الظُّلُمَاتِ مَن يَشَإِ اللَّهُ يُضْلِلْهُ وَمَن يَشَأْ يَجْعَلْهُ عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ',
    translation: {
      en: 'But those who deny Our verses are deaf and dumb within darknesses. Whomever Allah wills - He leaves astray; and whomever He wills - He puts him on a straight path.',
      ur: 'اور جنہوں نے ہماری آیات کو جھٹلایا وہ بہرے اور گونگے ہیں اندھیروں میں۔ اللہ جسے چاہے گمراہ کرے اور جسے چاہے سیدھے راستے پر چلائے۔'
    },
    words: [
      { id: '6:39:1', arabic: 'وَالَّذِينَ', transliteration: 'wa-lladhina', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'But those who', ur: 'اور جنہوں نے' } },
      { id: '6:39:2', arabic: 'كَذَّبُوا', transliteration: 'kadhdhabu', pos: ['V'], posLabel: 'V', root: 'ك ذ ب', meaning: { en: 'deny', ur: 'جھٹلایا' } },
      { id: '6:39:3', arabic: 'بِآيَاتِنَا', transliteration: 'bi-ayatina', pos: ['P', 'N', 'PRON'], posLabel: 'P+N+PRON', root: 'أ ي ي', meaning: { en: 'Our verses', ur: 'ہماری آیات کو' } },
      { id: '6:39:4', arabic: 'صُمٌّ', transliteration: 'summun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ص م م', meaning: { en: 'are deaf', ur: 'بہرے' } },
      { id: '6:39:5', arabic: 'وَبُكْمٌ', transliteration: 'wa-bukmun', pos: ['CONJ', 'ADJ'], posLabel: 'CONJ+ADJ', root: 'ب ك م', meaning: { en: 'and dumb', ur: 'اور گونگے' } },
      { id: '6:39:6', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'within', ur: 'میں' } },
      { id: '6:39:7', arabic: 'الظُّلُمَاتِ', transliteration: 'az-zulumati', pos: ['N'], posLabel: 'N', root: 'ظ ل م', meaning: { en: 'darknesses', ur: 'اندھیروں' } },
      { id: '6:39:8', arabic: 'مَن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'Whomever', ur: 'جسے' } },
      { id: '6:39:9', arabic: 'يَشَإِ', transliteration: 'yasha\'i', pos: ['V'], posLabel: 'V', root: 'ش ي أ', meaning: { en: 'wills', ur: 'چاہے' } },
      { id: '6:39:10', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '6:39:11', arabic: 'يُضْلِلْهُ', transliteration: 'yudlilhu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ض ل ل', meaning: { en: 'He leaves astray', ur: 'گمراہ کرے' } },
      { id: '6:39:12', arabic: 'وَمَن', transliteration: 'wa-man', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'and whomever', ur: 'اور جسے' } },
      { id: '6:39:13', arabic: 'يَشَأْ', transliteration: 'yasha\'', pos: ['V'], posLabel: 'V', root: 'ش ي أ', meaning: { en: 'He wills', ur: 'چاہے' } },
      { id: '6:39:14', arabic: 'يَجْعَلْهُ', transliteration: 'yaj\'alhu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج ع ل', meaning: { en: 'He puts him', ur: 'اسے رکھے' } },
      { id: '6:39:15', arabic: 'عَلَىٰ', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'on', ur: 'پر' } },
      { id: '6:39:16', arabic: 'صِرَاطٍ', transliteration: 'siratin', pos: ['N'], posLabel: 'N', root: 'ص ر ط', meaning: { en: 'a path', ur: 'راستے' } },
      { id: '6:39:17', arabic: 'مُّسْتَقِيمٍ', transliteration: 'mustaqimin', pos: ['ADJ'], posLabel: 'ADJ', root: 'ق و م', meaning: { en: 'straight', ur: 'سیدھے' } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'موصوف + صفت' }
      ],
    },
  },
  40: {
    text: 'قُلْ أَرَأَيْتَكُمْ إِنْ أَتَاكُمْ عَذَابُ اللَّهِ أَوْ أَتَتْكُمُ السَّاعَةُ أَغَيْرَ اللَّهِ تَدْعُونَ إِن كُنتُمْ صَادِقِينَ',
    translation: {
      en: 'Say, "Have you considered: if there came to you the punishment of Allah or there came to you the Hour - is it other than Allah you would invoke, if you should be truthful?"',
      ur: 'کہو بھلا بتاؤ اگر تم پر اللہ کا عذاب آ جائے یا قیامت آ جائے تو کیا اللہ کے سوا کسی اور کو پکارو گے اگر تم سچے ہو؟'
    },
    words: [
      { id: '6:40:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:40:2', arabic: 'أَرَأَيْتَكُمْ', transliteration: 'a-ra\'aytakum', pos: ['INTG', 'V', 'PRON'], posLabel: 'INTG+V+PRON', root: 'ر أ ي', meaning: { en: 'Have you considered', ur: 'بتاؤ' } },
      { id: '6:40:3', arabic: 'إِنْ', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'if', ur: 'اگر' } },
      { id: '6:40:4', arabic: 'أَتَاكُمْ', transliteration: 'atakum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'أ ت ي', meaning: { en: 'came to you', ur: 'آ جائے تم پر' } },
      { id: '6:40:5', arabic: 'عَذَابُ', transliteration: '\'adhabu', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: 'the punishment of', ur: 'عذاب' } },
      { id: '6:40:6', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کا' } },
      { id: '6:40:7', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '6:40:8', arabic: 'أَتَتْكُمُ', transliteration: 'atatkumu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'أ ت ي', meaning: { en: 'came to you', ur: 'آ جائے' } },
      { id: '6:40:9', arabic: 'السَّاعَةُ', transliteration: 'as-sa\'atu', pos: ['N'], posLabel: 'N', root: 'س و ع', meaning: { en: 'the Hour', ur: 'قیامت' } },
      { id: '6:40:10', arabic: 'أَغَيْرَ', transliteration: 'a-ghayra', pos: ['INTG', 'N'], posLabel: 'INTG+N', root: 'غ ي ر', meaning: { en: 'is it other than', ur: 'کیا غیر' } },
      { id: '6:40:11', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کے' } },
      { id: '6:40:12', arabic: 'تَدْعُونَ', transliteration: 'tad\'un', pos: ['V'], posLabel: 'V', root: 'د ع و', meaning: { en: 'you would invoke', ur: 'پکارو گے' } },
      { id: '6:40:13', arabic: 'إِن', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'if', ur: 'اگر' } },
      { id: '6:40:14', arabic: 'كُنتُمْ', transliteration: 'kuntum', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'you should be', ur: 'تم ہو' } },
      { id: '6:40:15', arabic: 'صَادِقِينَ', transliteration: 'sadiqin', pos: ['N'], posLabel: 'N', root: 'ص د ق', meaning: { en: 'truthful', ur: 'سچے' } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'شرط + فعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف الیہ' }
      ],
    },
  },
  41: {
    text: 'بَلْ إِيَّاهُ تَدْعُونَ فَيَكْشِفُ مَا تَدْعُونَ إِلَيْهِ إِن شَاءَ وَتَنسَوْنَ مَا تُشْرِكُونَ',
    translation: {
      en: 'No, it is Him alone you invoke, and He removes that for which you invoked Him, if He wills, and you forget what you associate.',
      ur: 'بلکہ تم صرف اسی کو پکارتے ہو تو وہ اگر چاہے اسے دور کر دے جس کے لیے تم اسے پکارتے ہو اور تم اپنے شریکوں کو بھول جاتے ہو۔'
    },
    words: [
      { id: '6:41:1', arabic: 'بَلْ', transliteration: 'bal', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'No, rather', ur: 'بلکہ' } },
      { id: '6:41:2', arabic: 'إِيَّاهُ', transliteration: 'iyyahu', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'Him alone', ur: 'صرف اسی کو' } },
      { id: '6:41:3', arabic: 'تَدْعُونَ', transliteration: 'tad\'un', pos: ['V'], posLabel: 'V', root: 'د ع و', meaning: { en: 'you invoke', ur: 'پکارتے ہو' } },
      { id: '6:41:4', arabic: 'فَيَكْشِفُ', transliteration: 'fa-yakshifu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ك ش ف', meaning: { en: 'and He removes', ur: 'تو دور کر دے' } },
      { id: '6:41:5', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'that which', ur: 'جو' } },
      { id: '6:41:6', arabic: 'تَدْعُونَ', transliteration: 'tad\'un', pos: ['V'], posLabel: 'V', root: 'د ع و', meaning: { en: 'you invoke', ur: 'پکارتے ہو' } },
      { id: '6:41:7', arabic: 'إِلَيْهِ', transliteration: 'ilayhi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to Him', ur: 'اس سے' } },
      { id: '6:41:8', arabic: 'إِن', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'if', ur: 'اگر' } },
      { id: '6:41:9', arabic: 'شَاءَ', transliteration: 'sha\'a', pos: ['V'], posLabel: 'V', root: 'ش ي أ', meaning: { en: 'He wills', ur: 'چاہے' } },
      { id: '6:41:10', arabic: 'وَتَنسَوْنَ', transliteration: 'wa-tansawna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ن س ي', meaning: { en: 'and you forget', ur: 'اور بھول جاتے ہو' } },
      { id: '6:41:11', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '6:41:12', arabic: 'تُشْرِكُونَ', transliteration: 'tushrikun', pos: ['V'], posLabel: 'V', root: 'ش ر ك', meaning: { en: 'you associate', ur: 'تم شرک کرتے ہو' } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'شرط + فعل' },
        { from: 11, to: 12, label: 'موصول + صلة' }
      ],
    },
  },
  42: {
    text: 'وَلَقَدْ أَرْسَلْنَا إِلَىٰ أُمَمٍ مِّن قَبْلِكَ فَأَخَذْنَاهُم بِالْبَأْسَاءِ وَالضَّرَّاءِ لَعَلَّهُمْ يَتَضَرَّعُونَ',
    translation: {
      en: 'And We have already sent to nations before you; then We seized them with poverty and hardship that perhaps they might humble themselves.',
      ur: 'اور ہم نے تم سے پہلے امتوں کی طرف رسول بھیجے پھر انہیں تنگی اور مصیبت میں پکڑا تاکہ وہ عاجزی کریں۔'
    },
    words: [
      { id: '6:42:1', arabic: 'وَلَقَدْ', transliteration: 'wa-laqad', pos: ['CONJ', 'CERT'], posLabel: 'CONJ+CERT', root: null, meaning: { en: 'And certainly', ur: 'اور بے شک' } },
      { id: '6:42:2', arabic: 'أَرْسَلْنَا', transliteration: 'arsalna', pos: ['V'], posLabel: 'V', root: 'ر س ل', meaning: { en: 'We sent', ur: 'ہم نے بھیجا' } },
      { id: '6:42:3', arabic: 'إِلَىٰ', transliteration: 'ila', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'طرف' } },
      { id: '6:42:4', arabic: 'أُمَمٍ', transliteration: 'umamin', pos: ['N'], posLabel: 'N', root: 'أ م م', meaning: { en: 'nations', ur: 'امتوں' } },
      { id: '6:42:5', arabic: 'مِّن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:42:6', arabic: 'قَبْلِكَ', transliteration: 'qablika', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق ب ل', meaning: { en: 'before you', ur: 'تم سے پہلے' } },
      { id: '6:42:7', arabic: 'فَأَخَذْنَاهُم', transliteration: 'fa-akhadhnahum', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'أ خ ذ', meaning: { en: 'then We seized them', ur: 'پھر پکڑا انہیں' } },
      { id: '6:42:8', arabic: 'بِالْبَأْسَاءِ', transliteration: 'bil-ba\'sa\'i', pos: ['P', 'N'], posLabel: 'P+N', root: 'ب أ س', meaning: { en: 'with poverty', ur: 'تنگی سے' } },
      { id: '6:42:9', arabic: 'وَالضَّرَّاءِ', transliteration: 'wad-darra\'i', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ض ر ر', meaning: { en: 'and hardship', ur: 'اور مصیبت' } },
      { id: '6:42:10', arabic: 'لَعَلَّهُمْ', transliteration: 'la\'allahum', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'that perhaps they', ur: 'تاکہ وہ' } },
      { id: '6:42:11', arabic: 'يَتَضَرَّعُونَ', transliteration: 'yatadarr\'un', pos: ['V'], posLabel: 'V', root: 'ض ر ع', meaning: { en: 'might humble themselves', ur: 'عاجزی کریں' } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  43: {
    text: 'فَلَوْلَا إِذْ جَاءَهُم بَأْسُنَا تَضَرَّعُوا وَلَٰكِن قَسَتْ قُلُوبُهُمْ وَزَيَّنَ لَهُمُ الشَّيْطَانُ مَا كَانُوا يَعْمَلُونَ',
    translation: {
      en: 'Then why, when Our punishment came to them, did they not humble themselves? But their hearts became hardened, and Satan made attractive to them that which they were doing.',
      ur: 'تو جب ہمارا عذاب آیا تو انہوں نے عاجزی کیوں نہ کی؟ بلکہ ان کے دل سخت ہو گئے اور شیطان نے ان کے اعمال ان کے لیے خوشنما بنا دیے۔'
    },
    words: [
      { id: '6:43:1', arabic: 'فَلَوْلَا', transliteration: 'fa-lawla', pos: ['CONJ', 'INTG'], posLabel: 'CONJ+INTG', root: null, meaning: { en: 'Then why not', ur: 'تو کیوں نہ' } },
      { id: '6:43:2', arabic: 'إِذْ', transliteration: 'idh', pos: ['T'], posLabel: 'T', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '6:43:3', arabic: 'جَاءَهُم', transliteration: 'ja\'ahum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج ي أ', meaning: { en: 'came to them', ur: 'آیا ان کے پاس' } },
      { id: '6:43:4', arabic: 'بَأْسُنَا', transliteration: 'ba\'suna', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ب أ س', meaning: { en: 'Our punishment', ur: 'ہمارا عذاب' } },
      { id: '6:43:5', arabic: 'تَضَرَّعُوا', transliteration: 'tadarr\'u', pos: ['V'], posLabel: 'V', root: 'ض ر ع', meaning: { en: 'they humble themselves', ur: 'عاجزی کی' } },
      { id: '6:43:6', arabic: 'وَلَٰكِن', transliteration: 'wa-lakin', pos: ['CONJ', 'ACC'], posLabel: 'CONJ+ACC', root: null, meaning: { en: 'But', ur: 'لیکن' } },
      { id: '6:43:7', arabic: 'قَسَتْ', transliteration: 'qasat', pos: ['V'], posLabel: 'V', root: 'ق س و', meaning: { en: 'became hardened', ur: 'سخت ہو گئے' } },
      { id: '6:43:8', arabic: 'قُلُوبُهُمْ', transliteration: 'qulubuhum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق ل ب', meaning: { en: 'their hearts', ur: 'ان کے دل' } },
      { id: '6:43:9', arabic: 'وَزَيَّنَ', transliteration: 'wa-zayyana', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ز ي ن', meaning: { en: 'and made attractive', ur: 'اور خوشنما بنایا' } },
      { id: '6:43:10', arabic: 'لَهُمُ', transliteration: 'lahumu', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to them', ur: 'ان کے لیے' } },
      { id: '6:43:11', arabic: 'الشَّيْطَانُ', transliteration: 'ash-shaytanu', pos: ['N'], posLabel: 'N', root: 'ش ط ن', meaning: { en: 'Satan', ur: 'شیطان نے' } },
      { id: '6:43:12', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '6:43:13', arabic: 'كَانُوا', transliteration: 'kanu', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'they were', ur: 'وہ تھے' } },
      { id: '6:43:14', arabic: 'يَعْمَلُونَ', transliteration: 'ya\'malun', pos: ['V'], posLabel: 'V', root: 'ع م ل', meaning: { en: 'doing', ur: 'کرتے' } }
    ],
    structure: {
      relationships: [
        { from: 12, to: 13, label: 'موصول + صلة' }
      ],
    },
  },
  44: {
    text: 'فَلَمَّا نَسُوا مَا ذُكِّرُوا بِهِ فَتَحْنَا عَلَيْهِمْ أَبْوَابَ كُلِّ شَيْءٍ حَتَّىٰ إِذَا فَرِحُوا بِمَا أُوتُوا أَخَذْنَاهُم بَغْتَةً فَإِذَا هُم مُّبْلِسُونَ',
    translation: {
      en: 'So when they forgot that by which they had been reminded, We opened to them the doors of every thing until, when they rejoiced in that which they were given, We seized them suddenly, and they were in despair.',
      ur: 'پھر جب انہوں نے وہ نصیحت بھلا دی جو انہیں کی گئی تھی تو ہم نے ہر چیز کے دروازے ان پر کھول دیے یہاں تک کہ جب وہ اس پر خوش ہو گئے جو انہیں دیا گیا تو ہم نے اچانک انہیں پکڑ لیا اور وہ مایوس ہو گئے۔'
    },
    words: [
      { id: '6:44:1', arabic: 'فَلَمَّا', transliteration: 'fa-lamma', pos: ['CONJ', 'T'], posLabel: 'CONJ+T', root: null, meaning: { en: 'So when', ur: 'پھر جب' } },
      { id: '6:44:2', arabic: 'نَسُوا', transliteration: 'nasu', pos: ['V'], posLabel: 'V', root: 'ن س ي', meaning: { en: 'they forgot', ur: 'بھلا دیا' } },
      { id: '6:44:3', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'that which', ur: 'جو' } },
      { id: '6:44:4', arabic: 'ذُكِّرُوا', transliteration: 'dhukkiru', pos: ['V'], posLabel: 'V', root: 'ذ ك ر', meaning: { en: 'they were reminded', ur: 'نصیحت کی گئی' } },
      { id: '6:44:5', arabic: 'بِهِ', transliteration: 'bihi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'of it', ur: 'اس سے' } },
      { id: '6:44:6', arabic: 'فَتَحْنَا', transliteration: 'fatahna', pos: ['V'], posLabel: 'V', root: 'ف ت ح', meaning: { en: 'We opened', ur: 'ہم نے کھول دیے' } },
      { id: '6:44:7', arabic: 'عَلَيْهِمْ', transliteration: '\'alayhim', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to them', ur: 'ان پر' } },
      { id: '6:44:8', arabic: 'أَبْوَابَ', transliteration: 'abwaba', pos: ['N'], posLabel: 'N', root: 'ب و ب', meaning: { en: 'the doors of', ur: 'دروازے' } },
      { id: '6:44:9', arabic: 'كُلِّ', transliteration: 'kulli', pos: ['N'], posLabel: 'N', root: 'ك ل ل', meaning: { en: 'every', ur: 'ہر' } },
      { id: '6:44:10', arabic: 'شَيْءٍ', transliteration: 'shay\'in', pos: ['N'], posLabel: 'N', root: 'ش ي أ', meaning: { en: 'thing', ur: 'چیز' } },
      { id: '6:44:11', arabic: 'حَتَّىٰ', transliteration: 'hatta', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'until', ur: 'یہاں تک' } },
      { id: '6:44:12', arabic: 'إِذَا', transliteration: 'idha', pos: ['T'], posLabel: 'T', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '6:44:13', arabic: 'فَرِحُوا', transliteration: 'farihu', pos: ['V'], posLabel: 'V', root: 'ف ر ح', meaning: { en: 'they rejoiced', ur: 'خوش ہو گئے' } },
      { id: '6:44:14', arabic: 'بِمَا', transliteration: 'bi-ma', pos: ['P', 'REL'], posLabel: 'P+REL', root: null, meaning: { en: 'in that which', ur: 'اس پر جو' } },
      { id: '6:44:15', arabic: 'أُوتُوا', transliteration: 'utu', pos: ['V'], posLabel: 'V', root: 'أ ت ي', meaning: { en: 'they were given', ur: 'دیا گیا' } },
      { id: '6:44:16', arabic: 'أَخَذْنَاهُم', transliteration: 'akhadhnahum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'أ خ ذ', meaning: { en: 'We seized them', ur: 'ہم نے پکڑا' } },
      { id: '6:44:17', arabic: 'بَغْتَةً', transliteration: 'baghtatan', pos: ['N'], posLabel: 'N', root: 'ب غ ت', meaning: { en: 'suddenly', ur: 'اچانک' } },
      { id: '6:44:18', arabic: 'فَإِذَا', transliteration: 'fa-idha', pos: ['CONJ', 'T'], posLabel: 'CONJ+T', root: null, meaning: { en: 'and then', ur: 'تو' } },
      { id: '6:44:19', arabic: 'هُم', transliteration: 'hum', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'they', ur: 'وہ' } },
      { id: '6:44:20', arabic: 'مُّبْلِسُونَ', transliteration: 'mublisun', pos: ['N'], posLabel: 'N', root: 'ب ل س', meaning: { en: 'in despair', ur: 'مایوس' } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'مضاف + مضاف الیہ' },
        { from: 9, to: 10, label: 'مضاف + مضاف الیہ' },
        { from: 14, to: 15, label: 'موصول + صلة' }
      ],
    },
  },
  45: {
    text: 'فَقُطِعَ دَابِرُ الْقَوْمِ الَّذِينَ ظَلَمُوا وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    translation: {
      en: 'So the people that committed wrong were eliminated. And praise to Allah, Lord of the worlds.',
      ur: 'تو ظالم قوم کی جڑ کاٹ دی گئی اور تمام تعریف اللہ کے لیے ہے جو تمام جہانوں کا رب ہے۔'
    },
    words: [
      { id: '6:45:1', arabic: 'فَقُطِعَ', transliteration: 'fa-quti\'a', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ق ط ع', meaning: { en: 'So was eliminated', ur: 'تو کاٹ دی گئی' } },
      { id: '6:45:2', arabic: 'دَابِرُ', transliteration: 'dabiru', pos: ['N'], posLabel: 'N', root: 'د ب ر', meaning: { en: 'the root of', ur: 'جڑ' } },
      { id: '6:45:3', arabic: 'الْقَوْمِ', transliteration: 'al-qawmi', pos: ['N'], posLabel: 'N', root: 'ق و م', meaning: { en: 'the people', ur: 'قوم' } },
      { id: '6:45:4', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'who', ur: 'جنہوں نے' } },
      { id: '6:45:5', arabic: 'ظَلَمُوا', transliteration: 'zalamu', pos: ['V'], posLabel: 'V', root: 'ظ ل م', meaning: { en: 'committed wrong', ur: 'ظلم کیا' } },
      { id: '6:45:6', arabic: 'وَالْحَمْدُ', transliteration: 'wal-hamdu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ح م د', meaning: { en: 'And praise', ur: 'اور تعریف' } },
      { id: '6:45:7', arabic: 'لِلَّهِ', transliteration: 'lillahi', pos: ['P', 'PN'], posLabel: 'P+PN', root: 'أ ل ه', meaning: { en: 'to Allah', ur: 'اللہ کے لیے' } },
      { id: '6:45:8', arabic: 'رَبِّ', transliteration: 'rabbi', pos: ['N'], posLabel: 'N', root: 'ر ب ب', meaning: { en: 'Lord of', ur: 'رب' } },
      { id: '6:45:9', arabic: 'الْعَالَمِينَ', transliteration: 'al-\'alamin', pos: ['N'], posLabel: 'N', root: 'ع ل م', meaning: { en: 'the worlds', ur: 'جہانوں کا' } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف الیہ' },
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'مضاف + مضاف الیہ' }
      ],
    },
  },
  46: {
    text: 'قُلْ أَرَأَيْتُمْ إِنْ أَخَذَ اللَّهُ سَمْعَكُمْ وَأَبْصَارَكُمْ وَخَتَمَ عَلَىٰ قُلُوبِكُم مَّنْ إِلَٰهٌ غَيْرُ اللَّهِ يَأْتِيكُم بِهِ انظُرْ كَيْفَ نُصَرِّفُ الْآيَاتِ ثُمَّ هُمْ يَصْدِفُونَ',
    translation: {
      en: 'Say, "Have you considered: if Allah should take away your hearing and your sight and set a seal upon your hearts, which deity other than Allah could bring them back to you?" Look how We diversify the verses; then they turn away.',
      ur: 'کہو بتاؤ اگر اللہ تمہاری سماعت اور بصارت چھین لے اور تمہارے دلوں پر مہر لگا دے تو اللہ کے سوا کون معبود ہے جو یہ تمہیں واپس دے۔ دیکھو ہم کس طرح آیات بیان کرتے ہیں پھر بھی وہ منہ موڑ لیتے ہیں۔'
    },
    words: [
      { id: '6:46:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:46:2', arabic: 'أَرَأَيْتُمْ', transliteration: 'a-ra\'aytum', pos: ['INTG', 'V'], posLabel: 'INTG+V', root: 'ر أ ي', meaning: { en: 'Have you considered', ur: 'بتاؤ' } },
      { id: '6:46:3', arabic: 'إِنْ', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'if', ur: 'اگر' } },
      { id: '6:46:4', arabic: 'أَخَذَ', transliteration: 'akhadha', pos: ['V'], posLabel: 'V', root: 'أ خ ذ', meaning: { en: 'should take away', ur: 'لے لے' } },
      { id: '6:46:5', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '6:46:6', arabic: 'سَمْعَكُمْ', transliteration: 'sam\'akum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'س م ع', meaning: { en: 'your hearing', ur: 'تمہاری سماعت' } },
      { id: '6:46:7', arabic: 'وَأَبْصَارَكُمْ', transliteration: 'wa-absarakum', pos: ['CONJ', 'N', 'PRON'], posLabel: 'CONJ+N+PRON', root: 'ب ص ر', meaning: { en: 'and your sight', ur: 'اور بصارت' } },
      { id: '6:46:8', arabic: 'وَخَتَمَ', transliteration: 'wa-khatama', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'خ ت م', meaning: { en: 'and set a seal', ur: 'اور مہر لگا دے' } },
      { id: '6:46:9', arabic: 'عَلَىٰ', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'upon', ur: 'پر' } },
      { id: '6:46:10', arabic: 'قُلُوبِكُم', transliteration: 'qulubikum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق ل ب', meaning: { en: 'your hearts', ur: 'تمہارے دلوں' } },
      { id: '6:46:11', arabic: 'مَّنْ', transliteration: 'man', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'which', ur: 'کون' } },
      { id: '6:46:12', arabic: 'إِلَٰهٌ', transliteration: 'ilahun', pos: ['N'], posLabel: 'N', root: 'أ ل ه', meaning: { en: 'deity', ur: 'معبود' } },
      { id: '6:46:13', arabic: 'غَيْرُ', transliteration: 'ghayru', pos: ['N'], posLabel: 'N', root: 'غ ي ر', meaning: { en: 'other than', ur: 'سوا' } },
      { id: '6:46:14', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کے' } },
      { id: '6:46:15', arabic: 'يَأْتِيكُم', transliteration: 'ya\'tikum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'أ ت ي', meaning: { en: 'could bring to you', ur: 'تمہیں دے' } },
      { id: '6:46:16', arabic: 'بِهِ', transliteration: 'bihi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'them', ur: 'اسے' } },
      { id: '6:46:17', arabic: 'انظُرْ', transliteration: 'unzur', pos: ['V'], posLabel: 'V', root: 'ن ظ ر', meaning: { en: 'Look', ur: 'دیکھو' } },
      { id: '6:46:18', arabic: 'كَيْفَ', transliteration: 'kayfa', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'how', ur: 'کیسے' } },
      { id: '6:46:19', arabic: 'نُصَرِّفُ', transliteration: 'nusarrifu', pos: ['V'], posLabel: 'V', root: 'ص ر ف', meaning: { en: 'We diversify', ur: 'ہم بیان کرتے ہیں' } },
      { id: '6:46:20', arabic: 'الْآيَاتِ', transliteration: 'al-ayati', pos: ['N'], posLabel: 'N', root: 'أ ي ي', meaning: { en: 'the verses', ur: 'آیات' } },
      { id: '6:46:21', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'then', ur: 'پھر بھی' } },
      { id: '6:46:22', arabic: 'هُمْ', transliteration: 'hum', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'they', ur: 'وہ' } },
      { id: '6:46:23', arabic: 'يَصْدِفُونَ', transliteration: 'yasdifun', pos: ['V'], posLabel: 'V', root: 'ص د ف', meaning: { en: 'turn away', ur: 'منہ موڑتے ہیں' } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'شرط + فعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'مضاف + مضاف الیہ' }
      ],
    },
  },
  47: {
    text: 'قُلْ أَرَأَيْتَكُمْ إِنْ أَتَاكُمْ عَذَابُ اللَّهِ بَغْتَةً أَوْ جَهْرَةً هَلْ يُهْلَكُ إِلَّا الْقَوْمُ الظَّالِمُونَ',
    translation: {
      en: 'Say, "Have you considered: if the punishment of Allah should come to you unexpectedly or manifestly, will any be destroyed but the wrongdoing people?"',
      ur: 'کہو بتاؤ اگر تم پر اللہ کا عذاب اچانک یا کھلم کھلا آ جائے تو کیا ظالم قوم کے سوا کوئی ہلاک ہوگا؟'
    },
    words: [
      { id: '6:47:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:47:2', arabic: 'أَرَأَيْتَكُمْ', transliteration: 'a-ra\'aytakum', pos: ['INTG', 'V', 'PRON'], posLabel: 'INTG+V+PRON', root: 'ر أ ي', meaning: { en: 'Have you considered', ur: 'بتاؤ' } },
      { id: '6:47:3', arabic: 'إِنْ', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'if', ur: 'اگر' } },
      { id: '6:47:4', arabic: 'أَتَاكُمْ', transliteration: 'atakum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'أ ت ي', meaning: { en: 'came to you', ur: 'آ جائے' } },
      { id: '6:47:5', arabic: 'عَذَابُ', transliteration: '\'adhabu', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: 'the punishment of', ur: 'عذاب' } },
      { id: '6:47:6', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کا' } },
      { id: '6:47:7', arabic: 'بَغْتَةً', transliteration: 'baghtatan', pos: ['N'], posLabel: 'N', root: 'ب غ ت', meaning: { en: 'unexpectedly', ur: 'اچانک' } },
      { id: '6:47:8', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '6:47:9', arabic: 'جَهْرَةً', transliteration: 'jahratan', pos: ['N'], posLabel: 'N', root: 'ج ه ر', meaning: { en: 'manifestly', ur: 'کھلم کھلا' } },
      { id: '6:47:10', arabic: 'هَلْ', transliteration: 'hal', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'will', ur: 'کیا' } },
      { id: '6:47:11', arabic: 'يُهْلَكُ', transliteration: 'yuhlaku', pos: ['V'], posLabel: 'V', root: 'ه ل ك', meaning: { en: 'be destroyed', ur: 'ہلاک ہوگا' } },
      { id: '6:47:12', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'but', ur: 'سوائے' } },
      { id: '6:47:13', arabic: 'الْقَوْمُ', transliteration: 'al-qawmu', pos: ['N'], posLabel: 'N', root: 'ق و م', meaning: { en: 'the people', ur: 'قوم' } },
      { id: '6:47:14', arabic: 'الظَّالِمُونَ', transliteration: 'az-zalimun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ظ ل م', meaning: { en: 'wrongdoing', ur: 'ظالم' } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'شرط + فعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف الیہ' },
        { from: 13, to: 14, label: 'موصوف + صفت' }
      ],
    },
  },
  48: {
    text: 'وَمَا نُرْسِلُ الْمُرْسَلِينَ إِلَّا مُبَشِّرِينَ وَمُنذِرِينَ فَمَنْ آمَنَ وَأَصْلَحَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ',
    translation: {
      en: 'And We send not the messengers except as bringers of good tidings and warners. So whoever believes and reforms - there will be no fear concerning them, nor will they grieve.',
      ur: 'اور ہم رسولوں کو صرف خوشخبری دینے والے اور ڈرانے والے بنا کر بھیجتے ہیں۔ تو جو ایمان لائے اور اصلاح کرے ان پر نہ کوئی خوف ہے اور نہ وہ غمگین ہوں گے۔'
    },
    words: [
      { id: '6:48:1', arabic: 'وَمَا', transliteration: 'wa-ma', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '6:48:2', arabic: 'نُرْسِلُ', transliteration: 'nursilu', pos: ['V'], posLabel: 'V', root: 'ر س ل', meaning: { en: 'We send', ur: 'ہم بھیجتے' } },
      { id: '6:48:3', arabic: 'الْمُرْسَلِينَ', transliteration: 'al-mursalin', pos: ['N'], posLabel: 'N', root: 'ر س ل', meaning: { en: 'the messengers', ur: 'رسولوں کو' } },
      { id: '6:48:4', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '6:48:5', arabic: 'مُبَشِّرِينَ', transliteration: 'mubashshirin', pos: ['N'], posLabel: 'N', root: 'ب ش ر', meaning: { en: 'as bringers of good tidings', ur: 'خوشخبری دینے والے' } },
      { id: '6:48:6', arabic: 'وَمُنذِرِينَ', transliteration: 'wa-mundhirin', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ن ذ ر', meaning: { en: 'and warners', ur: 'اور ڈرانے والے' } },
      { id: '6:48:7', arabic: 'فَمَنْ', transliteration: 'fa-man', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'So whoever', ur: 'تو جو' } },
      { id: '6:48:8', arabic: 'آمَنَ', transliteration: 'amana', pos: ['V'], posLabel: 'V', root: 'أ م ن', meaning: { en: 'believes', ur: 'ایمان لائے' } },
      { id: '6:48:9', arabic: 'وَأَصْلَحَ', transliteration: 'wa-aslaha', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ص ل ح', meaning: { en: 'and reforms', ur: 'اور اصلاح کرے' } },
      { id: '6:48:10', arabic: 'فَلَا', transliteration: 'fa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'then no', ur: 'تو نہ' } },
      { id: '6:48:11', arabic: 'خَوْفٌ', transliteration: 'khawfun', pos: ['N'], posLabel: 'N', root: 'خ و ف', meaning: { en: 'fear', ur: 'خوف' } },
      { id: '6:48:12', arabic: 'عَلَيْهِمْ', transliteration: '\'alayhim', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'upon them', ur: 'ان پر' } },
      { id: '6:48:13', arabic: 'وَلَا', transliteration: 'wa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'nor', ur: 'اور نہ' } },
      { id: '6:48:14', arabic: 'هُمْ', transliteration: 'hum', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'they', ur: 'وہ' } },
      { id: '6:48:15', arabic: 'يَحْزَنُونَ', transliteration: 'yahzanun', pos: ['V'], posLabel: 'V', root: 'ح ز ن', meaning: { en: 'will grieve', ur: 'غمگین ہوں گے' } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'موصول + صلة' },
        { from: 13, to: 15, label: 'نفی + فعل' }
      ],
    },
  },
  49: {
    text: 'وَالَّذِينَ كَذَّبُوا بِآيَاتِنَا يَمَسُّهُمُ الْعَذَابُ بِمَا كَانُوا يَفْسُقُونَ',
    translation: {
      en: 'But those who deny Our verses - the punishment will touch them for their defiant disobedience.',
      ur: 'اور جنہوں نے ہماری آیات کو جھٹلایا انہیں عذاب چھوئے گا اس لیے کہ وہ نافرمانی کرتے تھے۔'
    },
    words: [
      { id: '6:49:1', arabic: 'وَالَّذِينَ', transliteration: 'wa-lladhina', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'But those who', ur: 'اور جنہوں نے' } },
      { id: '6:49:2', arabic: 'كَذَّبُوا', transliteration: 'kadhdhabu', pos: ['V'], posLabel: 'V', root: 'ك ذ ب', meaning: { en: 'deny', ur: 'جھٹلایا' } },
      { id: '6:49:3', arabic: 'بِآيَاتِنَا', transliteration: 'bi-ayatina', pos: ['P', 'N', 'PRON'], posLabel: 'P+N+PRON', root: 'أ ي ي', meaning: { en: 'Our verses', ur: 'ہماری آیات کو' } },
      { id: '6:49:4', arabic: 'يَمَسُّهُمُ', transliteration: 'yamassuhumu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'م س س', meaning: { en: 'will touch them', ur: 'انہیں چھوئے گا' } },
      { id: '6:49:5', arabic: 'الْعَذَابُ', transliteration: 'al-\'adhabu', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: 'the punishment', ur: 'عذاب' } },
      { id: '6:49:6', arabic: 'بِمَا', transliteration: 'bi-ma', pos: ['P', 'REL'], posLabel: 'P+REL', root: null, meaning: { en: 'for what', ur: 'اس وجہ سے' } },
      { id: '6:49:7', arabic: 'كَانُوا', transliteration: 'kanu', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'they used to', ur: 'وہ تھے' } },
      { id: '6:49:8', arabic: 'يَفْسُقُونَ', transliteration: 'yafsiqun', pos: ['V'], posLabel: 'V', root: 'ف س ق', meaning: { en: 'defiantly disobey', ur: 'نافرمانی کرتے' } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'موصول + صلة' }
      ],
    },
  },
  50: {
    text: 'قُل لَّا أَقُولُ لَكُمْ عِندِي خَزَائِنُ اللَّهِ وَلَا أَعْلَمُ الْغَيْبَ وَلَا أَقُولُ لَكُمْ إِنِّي مَلَكٌ إِنْ أَتَّبِعُ إِلَّا مَا يُوحَىٰ إِلَيَّ قُلْ هَلْ يَسْتَوِي الْأَعْمَىٰ وَالْبَصِيرُ أَفَلَا تَتَفَكَّرُونَ',
    translation: {
      en: 'Say, "I do not tell you that I have the treasuries of Allah or that I know the unseen, nor do I tell you that I am an angel. I only follow what is revealed to me." Say, "Is the blind equivalent to the seeing? Then will you not give thought?"',
      ur: 'کہو میں تم سے نہیں کہتا کہ میرے پاس اللہ کے خزانے ہیں اور نہ میں غیب جانتا ہوں اور نہ کہتا ہوں کہ میں فرشتہ ہوں۔ میں صرف اس کی پیروی کرتا ہوں جو میری طرف وحی کیا جاتا ہے۔ کہو کیا اندھا اور آنکھوں والا برابر ہو سکتے ہیں؟ کیا تم غور نہیں کرتے؟'
    },
    words: [
      { id: '6:50:1', arabic: 'قُل', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:50:2', arabic: 'لَّا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '6:50:3', arabic: 'أَقُولُ', transliteration: 'aqulu', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'I say', ur: 'کہتا' } },
      { id: '6:50:4', arabic: 'لَكُمْ', transliteration: 'lakum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to you', ur: 'تم سے' } },
      { id: '6:50:5', arabic: 'عِندِي', transliteration: '\'indi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ع ن د', meaning: { en: 'with me (I have)', ur: 'میرے پاس' } },
      { id: '6:50:6', arabic: 'خَزَائِنُ', transliteration: 'khaza\'inu', pos: ['N'], posLabel: 'N', root: 'خ ز ن', meaning: { en: 'the treasures of', ur: 'خزانے' } },
      { id: '6:50:7', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کے' } },
      { id: '6:50:8', arabic: 'وَلَا', transliteration: 'wa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'nor', ur: 'اور نہ' } },
      { id: '6:50:9', arabic: 'أَعْلَمُ', transliteration: 'a\'lamu', pos: ['V'], posLabel: 'V', root: 'ع ل م', meaning: { en: 'I know', ur: 'میں جانتا ہوں' } },
      { id: '6:50:10', arabic: 'الْغَيْبَ', transliteration: 'al-ghayba', pos: ['N'], posLabel: 'N', root: 'غ ي ب', meaning: { en: 'the unseen', ur: 'غیب' } },
      { id: '6:50:11', arabic: 'وَلَا', transliteration: 'wa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'nor', ur: 'اور نہ' } },
      { id: '6:50:12', arabic: 'أَقُولُ', transliteration: 'aqulu', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'I say', ur: 'کہتا' } },
      { id: '6:50:13', arabic: 'لَكُمْ', transliteration: 'lakum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to you', ur: 'تم سے' } },
      { id: '6:50:14', arabic: 'إِنِّي', transliteration: 'inni', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'that I am', ur: 'کہ میں' } },
      { id: '6:50:15', arabic: 'مَلَكٌ', transliteration: 'malakun', pos: ['N'], posLabel: 'N', root: 'م ل ك', meaning: { en: 'an angel', ur: 'فرشتہ' } },
      { id: '6:50:16', arabic: 'إِنْ', transliteration: 'in', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '6:50:17', arabic: 'أَتَّبِعُ', transliteration: 'attabi\'u', pos: ['V'], posLabel: 'V', root: 'ت ب ع', meaning: { en: 'I follow', ur: 'پیروی کرتا' } },
      { id: '6:50:18', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '6:50:19', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '6:50:20', arabic: 'يُوحَىٰ', transliteration: 'yuha', pos: ['V'], posLabel: 'V', root: 'و ح ي', meaning: { en: 'is revealed', ur: 'وحی کیا جاتا ہے' } },
      { id: '6:50:21', arabic: 'إِلَيَّ', transliteration: 'ilayya', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to me', ur: 'میری طرف' } },
      { id: '6:50:22', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:50:23', arabic: 'هَلْ', transliteration: 'hal', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'Is', ur: 'کیا' } },
      { id: '6:50:24', arabic: 'يَسْتَوِي', transliteration: 'yastawi', pos: ['V'], posLabel: 'V', root: 'س و ي', meaning: { en: 'equivalent', ur: 'برابر ہیں' } },
      { id: '6:50:25', arabic: 'الْأَعْمَىٰ', transliteration: 'al-a\'ma', pos: ['N'], posLabel: 'N', root: 'ع م ي', meaning: { en: 'the blind', ur: 'اندھا' } },
      { id: '6:50:26', arabic: 'وَالْبَصِيرُ', transliteration: 'wal-basiru', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ب ص ر', meaning: { en: 'and the seeing', ur: 'اور آنکھوں والا' } },
      { id: '6:50:27', arabic: 'أَفَلَا', transliteration: 'a-fa-la', pos: ['INTG', 'CONJ', 'NEG'], posLabel: 'INTG+CONJ+NEG', root: null, meaning: { en: 'Then will you not', ur: 'کیا تم نہیں' } },
      { id: '6:50:28', arabic: 'تَتَفَكَّرُونَ', transliteration: 'tatafakkarun', pos: ['V'], posLabel: 'V', root: 'ف ك ر', meaning: { en: 'give thought', ur: 'غور کرتے' } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف الیہ' },
        { from: 19, to: 20, label: 'موصول + صلة' },
        { from: 27, to: 28, label: 'نفی + فعل' }
      ],
    },
  },
  51: {
    text: 'وَأَنذِرْ بِهِ الَّذِينَ يَخَافُونَ أَن يُحْشَرُوا إِلَىٰ رَبِّهِمْ لَيْسَ لَهُم مِّن دُونِهِ وَلِيٌّ وَلَا شَفِيعٌ لَّعَلَّهُمْ يَتَّقُونَ',
    translation: {
      en: 'And warn by it those who fear that they will be gathered before their Lord - for them besides Him will be no protector and no intercessor - that they might become righteous.',
      ur: 'اور اس کے ذریعے ان لوگوں کو ڈراؤ جو ڈرتے ہیں کہ اپنے رب کے سامنے جمع کیے جائیں گے۔ ان کا اس کے سوا نہ کوئی حامی ہے نہ سفارشی تاکہ وہ پرہیزگار بنیں۔'
    },
    words: [
      { id: '6:51:1', arabic: 'وَأَنذِرْ', transliteration: 'wa-andhir', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ن ذ ر', meaning: { en: 'And warn', ur: 'اور ڈراؤ' } },
      { id: '6:51:2', arabic: 'بِهِ', transliteration: 'bihi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'by it', ur: 'اس سے' } },
      { id: '6:51:3', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '6:51:4', arabic: 'يَخَافُونَ', transliteration: 'yakhafun', pos: ['V'], posLabel: 'V', root: 'خ و ف', meaning: { en: 'fear', ur: 'ڈرتے ہیں' } },
      { id: '6:51:5', arabic: 'أَن', transliteration: 'an', pos: ['SUB'], posLabel: 'SUB', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '6:51:6', arabic: 'يُحْشَرُوا', transliteration: 'yuhsharu', pos: ['V'], posLabel: 'V', root: 'ح ش ر', meaning: { en: 'they will be gathered', ur: 'جمع کیے جائیں' } },
      { id: '6:51:7', arabic: 'إِلَىٰ', transliteration: 'ila', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'before', ur: 'سامنے' } },
      { id: '6:51:8', arabic: 'رَبِّهِمْ', transliteration: 'rabbihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'their Lord', ur: 'اپنے رب کے' } },
      { id: '6:51:9', arabic: 'لَيْسَ', transliteration: 'laysa', pos: ['V'], posLabel: 'V', root: 'ل ي س', meaning: { en: 'there is not', ur: 'نہیں ہے' } },
      { id: '6:51:10', arabic: 'لَهُم', transliteration: 'lahum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'for them', ur: 'ان کا' } },
      { id: '6:51:11', arabic: 'مِّن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:51:12', arabic: 'دُونِهِ', transliteration: 'dunihi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'د و ن', meaning: { en: 'besides Him', ur: 'اس کے سوا' } },
      { id: '6:51:13', arabic: 'وَلِيٌّ', transliteration: 'waliyyun', pos: ['N'], posLabel: 'N', root: 'و ل ي', meaning: { en: 'protector', ur: 'حامی' } },
      { id: '6:51:14', arabic: 'وَلَا', transliteration: 'wa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and no', ur: 'اور نہ' } },
      { id: '6:51:15', arabic: 'شَفِيعٌ', transliteration: 'shafi\'un', pos: ['N'], posLabel: 'N', root: 'ش ف ع', meaning: { en: 'intercessor', ur: 'سفارشی' } },
      { id: '6:51:16', arabic: 'لَّعَلَّهُمْ', transliteration: 'la\'allahum', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'that they might', ur: 'تاکہ وہ' } },
      { id: '6:51:17', arabic: 'يَتَّقُونَ', transliteration: 'yattaqun', pos: ['V'], posLabel: 'V', root: 'و ق ي', meaning: { en: 'become righteous', ur: 'پرہیزگار بنیں' } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  52: {
    text: 'وَلَا تَطْرُدِ الَّذِينَ يَدْعُونَ رَبَّهُم بِالْغَدَاةِ وَالْعَشِيِّ يُرِيدُونَ وَجْهَهُ مَا عَلَيْكَ مِنْ حِسَابِهِم مِّن شَيْءٍ وَمَا مِنْ حِسَابِكَ عَلَيْهِم مِّن شَيْءٍ فَتَطْرُدَهُمْ فَتَكُونَ مِنَ الظَّالِمِينَ',
    translation: {
      en: 'And do not send away those who call upon their Lord morning and afternoon, seeking His face. Not upon you is anything of their account and not upon them is anything of your account. So were you to send them away, you would be of the wrongdoers.',
      ur: 'اور ان لوگوں کو مت بھگاؤ جو صبح و شام اپنے رب کو پکارتے ہیں اس کی رضا چاہتے ہیں۔ تم پر ان کے حساب کی ذمہ داری نہیں اور تمہارے حساب کی ذمہ داری ان پر نہیں۔ اگر تم انہیں بھگاؤ تو ظالموں میں سے ہو جاؤ گے۔'
    },
    words: [
      { id: '6:52:1', arabic: 'وَلَا', transliteration: 'wa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And do not', ur: 'اور مت' } },
      { id: '6:52:2', arabic: 'تَطْرُدِ', transliteration: 'tatrudi', pos: ['V'], posLabel: 'V', root: 'ط ر د', meaning: { en: 'send away', ur: 'بھگاؤ' } },
      { id: '6:52:3', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '6:52:4', arabic: 'يَدْعُونَ', transliteration: 'yad\'un', pos: ['V'], posLabel: 'V', root: 'د ع و', meaning: { en: 'call upon', ur: 'پکارتے ہیں' } },
      { id: '6:52:5', arabic: 'رَبَّهُم', transliteration: 'rabbahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'their Lord', ur: 'اپنے رب کو' } },
      { id: '6:52:6', arabic: 'بِالْغَدَاةِ', transliteration: 'bil-ghadati', pos: ['P', 'N'], posLabel: 'P+N', root: 'غ د و', meaning: { en: 'morning', ur: 'صبح' } },
      { id: '6:52:7', arabic: 'وَالْعَشِيِّ', transliteration: 'wal-\'ashiyyi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ع ش و', meaning: { en: 'and afternoon', ur: 'اور شام' } },
      { id: '6:52:8', arabic: 'يُرِيدُونَ', transliteration: 'yuridun', pos: ['V'], posLabel: 'V', root: 'ر و د', meaning: { en: 'seeking', ur: 'چاہتے ہیں' } },
      { id: '6:52:9', arabic: 'وَجْهَهُ', transliteration: 'wajhahu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'و ج ه', meaning: { en: 'His face', ur: 'اس کی رضا' } },
      { id: '6:52:10', arabic: 'مَا', transliteration: 'ma', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'Not', ur: 'نہیں' } },
      { id: '6:52:11', arabic: 'عَلَيْكَ', transliteration: '\'alayka', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'upon you', ur: 'تم پر' } },
      { id: '6:52:12', arabic: 'مِنْ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'سے' } },
      { id: '6:52:13', arabic: 'حِسَابِهِم', transliteration: 'hisabihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ح س ب', meaning: { en: 'their account', ur: 'ان کے حساب' } },
      { id: '6:52:14', arabic: 'مِّن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'any', ur: 'کچھ' } },
      { id: '6:52:15', arabic: 'شَيْءٍ', transliteration: 'shay\'in', pos: ['N'], posLabel: 'N', root: 'ش ي أ', meaning: { en: 'thing', ur: 'چیز' } },
      { id: '6:52:16', arabic: 'وَمَا', transliteration: 'wa-ma', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '6:52:17', arabic: 'مِنْ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'سے' } },
      { id: '6:52:18', arabic: 'حِسَابِكَ', transliteration: 'hisabika', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ح س ب', meaning: { en: 'your account', ur: 'تمہارے حساب' } },
      { id: '6:52:19', arabic: 'عَلَيْهِم', transliteration: '\'alayhim', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'upon them', ur: 'ان پر' } },
      { id: '6:52:20', arabic: 'مِّن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'any', ur: 'کچھ' } },
      { id: '6:52:21', arabic: 'شَيْءٍ', transliteration: 'shay\'in', pos: ['N'], posLabel: 'N', root: 'ش ي أ', meaning: { en: 'thing', ur: 'چیز' } },
      { id: '6:52:22', arabic: 'فَتَطْرُدَهُمْ', transliteration: 'fa-tatrudahum', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ط ر د', meaning: { en: 'so send them away', ur: 'پس انہیں بھگاؤ' } },
      { id: '6:52:23', arabic: 'فَتَكُونَ', transliteration: 'fa-takuna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ك و ن', meaning: { en: 'then you would be', ur: 'تو ہو جاؤ' } },
      { id: '6:52:24', arabic: 'مِنَ', transliteration: 'mina', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'میں سے' } },
      { id: '6:52:25', arabic: 'الظَّالِمِينَ', transliteration: 'az-zalimin', pos: ['N'], posLabel: 'N', root: 'ظ ل م', meaning: { en: 'the wrongdoers', ur: 'ظالموں' } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 24, to: 25, label: 'جار + مجرور' }
      ],
    },
  },
  53: {
    text: 'وَكَذَٰلِكَ فَتَنَّا بَعْضَهُم بِبَعْضٍ لِّيَقُولُوا أَهَٰؤُلَاءِ مَنَّ اللَّهُ عَلَيْهِم مِّن بَيْنِنَا أَلَيْسَ اللَّهُ بِأَعْلَمَ بِالشَّاكِرِينَ',
    translation: {
      en: 'And thus We have tried some of them through others that they might say, "Is it these whom Allah has favored among us?" Is not Allah most knowing of those who are grateful?',
      ur: 'اور اسی طرح ہم نے ان میں سے بعض کو بعض سے آزمایا تاکہ کہیں کیا یہ ہیں جن پر اللہ نے ہم میں سے احسان کیا۔ کیا اللہ شکر گزاروں کو زیادہ نہیں جانتا؟'
    },
    words: [
      { id: '6:53:1', arabic: 'وَكَذَٰلِكَ', transliteration: 'wa-kadhalika', pos: ['CONJ', 'DEM'], posLabel: 'CONJ+DEM', root: null, meaning: { en: 'And thus', ur: 'اور اسی طرح' } },
      { id: '6:53:2', arabic: 'فَتَنَّا', transliteration: 'fatanna', pos: ['V'], posLabel: 'V', root: 'ف ت ن', meaning: { en: 'We have tried', ur: 'ہم نے آزمایا' } },
      { id: '6:53:3', arabic: 'بَعْضَهُم', transliteration: 'ba\'dahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ب ع ض', meaning: { en: 'some of them', ur: 'بعض کو' } },
      { id: '6:53:4', arabic: 'بِبَعْضٍ', transliteration: 'bi-ba\'din', pos: ['P', 'N'], posLabel: 'P+N', root: 'ب ع ض', meaning: { en: 'through others', ur: 'بعض سے' } },
      { id: '6:53:5', arabic: 'لِّيَقُولُوا', transliteration: 'li-yaqulu', pos: ['P', 'V'], posLabel: 'P+V', root: 'ق و ل', meaning: { en: 'that they might say', ur: 'تاکہ کہیں' } },
      { id: '6:53:6', arabic: 'أَهَٰؤُلَاءِ', transliteration: 'a-ha\'ula\'i', pos: ['INTG', 'DEM'], posLabel: 'INTG+DEM', root: null, meaning: { en: 'Is it these', ur: 'کیا یہ ہیں' } },
      { id: '6:53:7', arabic: 'مَنَّ', transliteration: 'manna', pos: ['V'], posLabel: 'V', root: 'م ن ن', meaning: { en: 'has favored', ur: 'احسان کیا' } },
      { id: '6:53:8', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ نے' } },
      { id: '6:53:9', arabic: 'عَلَيْهِم', transliteration: '\'alayhim', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'upon them', ur: 'ان پر' } },
      { id: '6:53:10', arabic: 'مِّن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:53:11', arabic: 'بَيْنِنَا', transliteration: 'baynina', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ب ي ن', meaning: { en: 'among us', ur: 'ہم میں' } },
      { id: '6:53:12', arabic: 'أَلَيْسَ', transliteration: 'a-laysa', pos: ['INTG', 'V'], posLabel: 'INTG+V', root: 'ل ي س', meaning: { en: 'Is not', ur: 'کیا نہیں' } },
      { id: '6:53:13', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '6:53:14', arabic: 'بِأَعْلَمَ', transliteration: 'bi-a\'lama', pos: ['P', 'ADJ'], posLabel: 'P+ADJ', root: 'ع ل م', meaning: { en: 'most knowing', ur: 'زیادہ جاننے والا' } },
      { id: '6:53:15', arabic: 'بِالشَّاكِرِينَ', transliteration: 'bish-shakirin', pos: ['P', 'N'], posLabel: 'P+N', root: 'ش ك ر', meaning: { en: 'of those who are grateful', ur: 'شکر گزاروں کا' } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  54: {
    text: 'وَإِذَا جَاءَكَ الَّذِينَ يُؤْمِنُونَ بِآيَاتِنَا فَقُلْ سَلَامٌ عَلَيْكُمْ كَتَبَ رَبُّكُمْ عَلَىٰ نَفْسِهِ الرَّحْمَةَ أَنَّهُ مَنْ عَمِلَ مِنكُمْ سُوءًا بِجَهَالَةٍ ثُمَّ تَابَ مِن بَعْدِهِ وَأَصْلَحَ فَأَنَّهُ غَفُورٌ رَّحِيمٌ',
    translation: {
      en: 'And when those who believe in Our verses come to you, say, "Peace be upon you. Your Lord has decreed upon Himself mercy: that any of you who does wrong out of ignorance and then repents after that and corrects himself - indeed, He is Forgiving and Merciful."',
      ur: 'اور جب تمہارے پاس وہ لوگ آئیں جو ہماری آیات پر ایمان رکھتے ہیں تو کہو تم پر سلامتی ہو۔ تمہارے رب نے اپنے اوپر رحمت لازم کر لی ہے کہ تم میں سے جو نادانی سے برائی کرے پھر توبہ کرے اور اصلاح کرے تو بے شک وہ بخشنے والا مہربان ہے۔'
    },
    words: [
      { id: '6:54:1', arabic: 'وَإِذَا', transliteration: 'wa-idha', pos: ['CONJ', 'T'], posLabel: 'CONJ+T', root: null, meaning: { en: 'And when', ur: 'اور جب' } },
      { id: '6:54:2', arabic: 'جَاءَكَ', transliteration: 'ja\'aka', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج ي أ', meaning: { en: 'come to you', ur: 'تمہارے پاس آئیں' } },
      { id: '6:54:3', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '6:54:4', arabic: 'يُؤْمِنُونَ', transliteration: 'yu\'minun', pos: ['V'], posLabel: 'V', root: 'أ م ن', meaning: { en: 'believe', ur: 'ایمان رکھتے ہیں' } },
      { id: '6:54:5', arabic: 'بِآيَاتِنَا', transliteration: 'bi-ayatina', pos: ['P', 'N', 'PRON'], posLabel: 'P+N+PRON', root: 'أ ي ي', meaning: { en: 'in Our verses', ur: 'ہماری آیات پر' } },
      { id: '6:54:6', arabic: 'فَقُلْ', transliteration: 'fa-qul', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ق و ل', meaning: { en: 'then say', ur: 'تو کہو' } },
      { id: '6:54:7', arabic: 'سَلَامٌ', transliteration: 'salamun', pos: ['N'], posLabel: 'N', root: 'س ل م', meaning: { en: 'Peace', ur: 'سلامتی' } },
      { id: '6:54:8', arabic: 'عَلَيْكُمْ', transliteration: '\'alaykum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'be upon you', ur: 'تم پر' } },
      { id: '6:54:9', arabic: 'كَتَبَ', transliteration: 'kataba', pos: ['V'], posLabel: 'V', root: 'ك ت ب', meaning: { en: 'has decreed', ur: 'لکھ لی' } },
      { id: '6:54:10', arabic: 'رَبُّكُمْ', transliteration: 'rabbukum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'Your Lord', ur: 'تمہارے رب نے' } },
      { id: '6:54:11', arabic: 'عَلَىٰ', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'upon', ur: 'اوپر' } },
      { id: '6:54:12', arabic: 'نَفْسِهِ', transliteration: 'nafsihi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ن ف س', meaning: { en: 'Himself', ur: 'اپنے' } },
      { id: '6:54:13', arabic: 'الرَّحْمَةَ', transliteration: 'ar-rahmata', pos: ['N'], posLabel: 'N', root: 'ر ح م', meaning: { en: 'mercy', ur: 'رحمت' } },
      { id: '6:54:14', arabic: 'أَنَّهُ', transliteration: 'annahu', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '6:54:15', arabic: 'مَنْ', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'whoever', ur: 'جو' } },
      { id: '6:54:16', arabic: 'عَمِلَ', transliteration: '\'amila', pos: ['V'], posLabel: 'V', root: 'ع م ل', meaning: { en: 'does', ur: 'کرے' } },
      { id: '6:54:17', arabic: 'مِنكُمْ', transliteration: 'minkum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'of you', ur: 'تم میں سے' } },
      { id: '6:54:18', arabic: 'سُوءًا', transliteration: 'su\'an', pos: ['N'], posLabel: 'N', root: 'س و أ', meaning: { en: 'wrong', ur: 'برائی' } },
      { id: '6:54:19', arabic: 'بِجَهَالَةٍ', transliteration: 'bi-jahalatin', pos: ['P', 'N'], posLabel: 'P+N', root: 'ج ه ل', meaning: { en: 'out of ignorance', ur: 'نادانی سے' } },
      { id: '6:54:20', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '6:54:21', arabic: 'تَابَ', transliteration: 'taba', pos: ['V'], posLabel: 'V', root: 'ت و ب', meaning: { en: 'repents', ur: 'توبہ کرے' } },
      { id: '6:54:22', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'after', ur: 'بعد' } },
      { id: '6:54:23', arabic: 'بَعْدِهِ', transliteration: 'ba\'dihi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ب ع د', meaning: { en: 'that', ur: 'اس کے' } },
      { id: '6:54:24', arabic: 'وَأَصْلَحَ', transliteration: 'wa-aslaha', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ص ل ح', meaning: { en: 'and corrects himself', ur: 'اور اصلاح کرے' } },
      { id: '6:54:25', arabic: 'فَأَنَّهُ', transliteration: 'fa-annahu', pos: ['CONJ', 'ACC', 'PRON'], posLabel: 'CONJ+ACC+PRON', root: null, meaning: { en: 'then indeed He', ur: 'تو بے شک وہ' } },
      { id: '6:54:26', arabic: 'غَفُورٌ', transliteration: 'ghafurun', pos: ['ADJ'], posLabel: 'ADJ', root: 'غ ف ر', meaning: { en: 'is Forgiving', ur: 'بخشنے والا' } },
      { id: '6:54:27', arabic: 'رَّحِيمٌ', transliteration: 'rahimun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ر ح م', meaning: { en: 'Merciful', ur: 'مہربان' } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'موصول + صلة' },
        { from: 22, to: 23, label: 'جار + مجرور' }
      ],
    },
  },
  55: {
    text: 'وَكَذَٰلِكَ نُفَصِّلُ الْآيَاتِ وَلِتَسْتَبِينَ سَبِيلُ الْمُجْرِمِينَ',
    translation: {
      en: 'And thus do We detail the verses, and thus the way of the criminals will become evident.',
      ur: 'اور اسی طرح ہم آیات کی تفصیل بیان کرتے ہیں اور تاکہ مجرموں کا راستہ واضح ہو جائے۔'
    },
    words: [
      { id: '6:55:1', arabic: 'وَكَذَٰلِكَ', transliteration: 'wa-kadhalika', pos: ['CONJ', 'DEM'], posLabel: 'CONJ+DEM', root: null, meaning: { en: 'And thus', ur: 'اور اسی طرح' } },
      { id: '6:55:2', arabic: 'نُفَصِّلُ', transliteration: 'nufassilu', pos: ['V'], posLabel: 'V', root: 'ف ص ل', meaning: { en: 'We detail', ur: 'ہم بیان کرتے ہیں' } },
      { id: '6:55:3', arabic: 'الْآيَاتِ', transliteration: 'al-ayati', pos: ['N'], posLabel: 'N', root: 'أ ي ي', meaning: { en: 'the verses', ur: 'آیات' } },
      { id: '6:55:4', arabic: 'وَلِتَسْتَبِينَ', transliteration: 'wa-li-tastabina', pos: ['CONJ', 'P', 'V'], posLabel: 'CONJ+P+V', root: 'ب ي ن', meaning: { en: 'and that may become evident', ur: 'اور تاکہ واضح ہو' } },
      { id: '6:55:5', arabic: 'سَبِيلُ', transliteration: 'sabilu', pos: ['N'], posLabel: 'N', root: 'س ب ل', meaning: { en: 'the way of', ur: 'راستہ' } },
      { id: '6:55:6', arabic: 'الْمُجْرِمِينَ', transliteration: 'al-mujrimin', pos: ['N'], posLabel: 'N', root: 'ج ر م', meaning: { en: 'the criminals', ur: 'مجرموں کا' } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف الیہ' }
      ],
    },
  },
  56: {
    text: 'قُلْ إِنِّي نُهِيتُ أَنْ أَعْبُدَ الَّذِينَ تَدْعُونَ مِن دُونِ اللَّهِ قُل لَّا أَتَّبِعُ أَهْوَاءَكُمْ قَدْ ضَلَلْتُ إِذًا وَمَا أَنَا مِنَ الْمُهْتَدِينَ',
    translation: {
      en: 'Say, "Indeed, I have been forbidden to worship those you invoke besides Allah." Say, "I will not follow your desires, for I would then have gone astray, and I would not be of the guided."',
      ur: 'کہو مجھے منع کیا گیا ہے کہ ان کی عبادت کروں جنہیں تم اللہ کے سوا پکارتے ہو۔ کہو میں تمہاری خواہشات کی پیروی نہیں کروں گا ورنہ میں گمراہ ہو جاؤں گا اور ہدایت یافتہ نہیں رہوں گا۔'
    },
    words: [
      { id: '6:56:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:56:2', arabic: 'إِنِّي', transliteration: 'inni', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'Indeed I', ur: 'بے شک مجھے' } },
      { id: '6:56:3', arabic: 'نُهِيتُ', transliteration: 'nuhitu', pos: ['V'], posLabel: 'V', root: 'ن ه ي', meaning: { en: 'have been forbidden', ur: 'منع کیا گیا' } },
      { id: '6:56:4', arabic: 'أَنْ', transliteration: 'an', pos: ['SUB'], posLabel: 'SUB', root: null, meaning: { en: 'to', ur: 'کہ' } },
      { id: '6:56:5', arabic: 'أَعْبُدَ', transliteration: 'a\'buda', pos: ['V'], posLabel: 'V', root: 'ع ب د', meaning: { en: 'worship', ur: 'عبادت کروں' } },
      { id: '6:56:6', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those whom', ur: 'جنہیں' } },
      { id: '6:56:7', arabic: 'تَدْعُونَ', transliteration: 'tad\'un', pos: ['V'], posLabel: 'V', root: 'د ع و', meaning: { en: 'you invoke', ur: 'تم پکارتے ہو' } },
      { id: '6:56:8', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'besides', ur: 'سوا' } },
      { id: '6:56:9', arabic: 'دُونِ', transliteration: 'duni', pos: ['N'], posLabel: 'N', root: 'د و ن', meaning: { en: 'other than', ur: 'غیر' } },
      { id: '6:56:10', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کے' } },
      { id: '6:56:11', arabic: 'قُل', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:56:12', arabic: 'لَّا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '6:56:13', arabic: 'أَتَّبِعُ', transliteration: 'attabi\'u', pos: ['V'], posLabel: 'V', root: 'ت ب ع', meaning: { en: 'I follow', ur: 'پیروی کرتا' } },
      { id: '6:56:14', arabic: 'أَهْوَاءَكُمْ', transliteration: 'ahwa\'akum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ه و ي', meaning: { en: 'your desires', ur: 'تمہاری خواہشات' } },
      { id: '6:56:15', arabic: 'قَدْ', transliteration: 'qad', pos: ['CERT'], posLabel: 'CERT', root: null, meaning: { en: 'then', ur: 'تب' } },
      { id: '6:56:16', arabic: 'ضَلَلْتُ', transliteration: 'dalaltu', pos: ['V'], posLabel: 'V', root: 'ض ل ل', meaning: { en: 'I would have gone astray', ur: 'گمراہ ہو جاتا' } },
      { id: '6:56:17', arabic: 'إِذًا', transliteration: 'idhan', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'in that case', ur: 'تب' } },
      { id: '6:56:18', arabic: 'وَمَا', transliteration: 'wa-ma', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '6:56:19', arabic: 'أَنَا', transliteration: 'ana', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'I', ur: 'میں' } },
      { id: '6:56:20', arabic: 'مِنَ', transliteration: 'mina', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'میں سے' } },
      { id: '6:56:21', arabic: 'الْمُهْتَدِينَ', transliteration: 'al-muhtadin', pos: ['N'], posLabel: 'N', root: 'ه د ي', meaning: { en: 'the guided', ur: 'ہدایت یافتہ' } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'موصول + صلة' },
        { from: 9, to: 10, label: 'مضاف + مضاف الیہ' },
        { from: 12, to: 13, label: 'نفی + فعل' },
        { from: 20, to: 21, label: 'جار + مجرور' }
      ],
    },
  },
  57: {
    text: 'قُلْ إِنِّي عَلَىٰ بَيِّنَةٍ مِّن رَّبِّي وَكَذَّبْتُم بِهِ مَا عِندِي مَا تَسْتَعْجِلُونَ بِهِ إِنِ الْحُكْمُ إِلَّا لِلَّهِ يَقُصُّ الْحَقَّ وَهُوَ خَيْرُ الْفَاصِلِينَ',
    translation: {
      en: 'Say, "Indeed, I am on clear evidence from my Lord, and you have denied it. I do not have that for which you are impatient. The decision is only for Allah. He relates the truth, and He is the best of deciders."',
      ur: 'کہو میں اپنے رب کی طرف سے واضح دلیل پر ہوں اور تم نے اسے جھٹلایا۔ جس چیز کی تم جلدی کرتے ہو وہ میرے بس میں نہیں۔ حکم صرف اللہ کا ہے۔ وہ حق بیان فرماتا ہے اور وہ بہترین فیصلہ کرنے والا ہے۔'
    },
    words: [
      { id: '6:57:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:57:2', arabic: 'إِنِّي', transliteration: 'inni', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'Indeed I am', ur: 'بے شک میں' } },
      { id: '6:57:3', arabic: 'عَلَىٰ', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'on', ur: 'پر' } },
      { id: '6:57:4', arabic: 'بَيِّنَةٍ', transliteration: 'bayyinatin', pos: ['N'], posLabel: 'N', root: 'ب ي ن', meaning: { en: 'clear evidence', ur: 'واضح دلیل' } },
      { id: '6:57:5', arabic: 'مِّن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:57:6', arabic: 'رَّبِّي', transliteration: 'rabbi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'my Lord', ur: 'اپنے رب' } },
      { id: '6:57:7', arabic: 'وَكَذَّبْتُم', transliteration: 'wa-kadhdhabtum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ك ذ ب', meaning: { en: 'and you have denied', ur: 'اور تم نے جھٹلایا' } },
      { id: '6:57:8', arabic: 'بِهِ', transliteration: 'bihi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'it', ur: 'اسے' } },
      { id: '6:57:9', arabic: 'مَا', transliteration: 'ma', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '6:57:10', arabic: 'عِندِي', transliteration: '\'indi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ع ن د', meaning: { en: 'with me', ur: 'میرے پاس' } },
      { id: '6:57:11', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'that which', ur: 'جو' } },
      { id: '6:57:12', arabic: 'تَسْتَعْجِلُونَ', transliteration: 'tasta\'jilun', pos: ['V'], posLabel: 'V', root: 'ع ج ل', meaning: { en: 'you are impatient for', ur: 'جلدی کرتے ہو' } },
      { id: '6:57:13', arabic: 'بِهِ', transliteration: 'bihi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'for it', ur: 'اس کے لیے' } },
      { id: '6:57:14', arabic: 'إِنِ', transliteration: 'ini', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '6:57:15', arabic: 'الْحُكْمُ', transliteration: 'al-hukmu', pos: ['N'], posLabel: 'N', root: 'ح ك م', meaning: { en: 'The decision', ur: 'حکم' } },
      { id: '6:57:16', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '6:57:17', arabic: 'لِلَّهِ', transliteration: 'lillahi', pos: ['P', 'PN'], posLabel: 'P+PN', root: 'أ ل ه', meaning: { en: 'for Allah', ur: 'اللہ کے لیے' } },
      { id: '6:57:18', arabic: 'يَقُصُّ', transliteration: 'yaqussu', pos: ['V'], posLabel: 'V', root: 'ق ص ص', meaning: { en: 'He relates', ur: 'بیان فرماتا ہے' } },
      { id: '6:57:19', arabic: 'الْحَقَّ', transliteration: 'al-haqqa', pos: ['N'], posLabel: 'N', root: 'ح ق ق', meaning: { en: 'the truth', ur: 'حق' } },
      { id: '6:57:20', arabic: 'وَهُوَ', transliteration: 'wa-huwa', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'and He is', ur: 'اور وہ' } },
      { id: '6:57:21', arabic: 'خَيْرُ', transliteration: 'khayru', pos: ['N'], posLabel: 'N', root: 'خ ي ر', meaning: { en: 'the best of', ur: 'بہترین' } },
      { id: '6:57:22', arabic: 'الْفَاصِلِينَ', transliteration: 'al-fasilin', pos: ['N'], posLabel: 'N', root: 'ف ص ل', meaning: { en: 'deciders', ur: 'فیصلہ کرنے والوں میں' } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'موصول + صلة' },
        { from: 21, to: 22, label: 'مضاف + مضاف الیہ' }
      ],
    },
  },
  58: {
    text: 'قُل لَّوْ أَنَّ عِندِي مَا تَسْتَعْجِلُونَ بِهِ لَقُضِيَ الْأَمْرُ بَيْنِي وَبَيْنَكُمْ وَاللَّهُ أَعْلَمُ بِالظَّالِمِينَ',
    translation: {
      en: 'Say, "If I had that for which you are impatient, the matter would have been decided between me and you. And Allah is most knowing of the wrongdoers."',
      ur: 'کہو اگر جس چیز کی تم جلدی مچاتے ہو وہ میرے بس میں ہوتی تو میرے اور تمہارے درمیان فیصلہ ہو چکا ہوتا۔ اور اللہ ظالموں کو خوب جانتا ہے۔'
    },
    words: [
      { id: '6:58:1', arabic: 'قُل', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:58:2', arabic: 'لَّوْ', transliteration: 'law', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'If', ur: 'اگر' } },
      { id: '6:58:3', arabic: 'أَنَّ', transliteration: 'anna', pos: ['ACC'], posLabel: 'ACC', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '6:58:4', arabic: 'عِندِي', transliteration: '\'indi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ع ن د', meaning: { en: 'with me', ur: 'میرے بس میں' } },
      { id: '6:58:5', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'that which', ur: 'جو' } },
      { id: '6:58:6', arabic: 'تَسْتَعْجِلُونَ', transliteration: 'tasta\'jilun', pos: ['V'], posLabel: 'V', root: 'ع ج ل', meaning: { en: 'you are impatient for', ur: 'جلدی مچاتے ہو' } },
      { id: '6:58:7', arabic: 'بِهِ', transliteration: 'bihi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'for it', ur: 'اس کی' } },
      { id: '6:58:8', arabic: 'لَقُضِيَ', transliteration: 'la-qudiya', pos: ['EMPH', 'V'], posLabel: 'EMPH+V', root: 'ق ض ي', meaning: { en: 'would have been decided', ur: 'فیصلہ ہو چکا ہوتا' } },
      { id: '6:58:9', arabic: 'الْأَمْرُ', transliteration: 'al-amru', pos: ['N'], posLabel: 'N', root: 'أ م ر', meaning: { en: 'the matter', ur: 'معاملہ' } },
      { id: '6:58:10', arabic: 'بَيْنِي', transliteration: 'bayni', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ب ي ن', meaning: { en: 'between me', ur: 'میرے' } },
      { id: '6:58:11', arabic: 'وَبَيْنَكُمْ', transliteration: 'wa-baynakum', pos: ['CONJ', 'N', 'PRON'], posLabel: 'CONJ+N+PRON', root: 'ب ي ن', meaning: { en: 'and you', ur: 'اور تمہارے درمیان' } },
      { id: '6:58:12', arabic: 'وَاللَّهُ', transliteration: 'wa-Allahu', pos: ['CONJ', 'PN'], posLabel: 'CONJ+PN', root: 'أ ل ه', meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '6:58:13', arabic: 'أَعْلَمُ', transliteration: 'a\'lamu', pos: ['ADJ'], posLabel: 'ADJ', root: 'ع ل م', meaning: { en: 'is most knowing', ur: 'خوب جانتا ہے' } },
      { id: '6:58:14', arabic: 'بِالظَّالِمِينَ', transliteration: 'biz-zalimin', pos: ['P', 'N'], posLabel: 'P+N', root: 'ظ ل م', meaning: { en: 'of the wrongdoers', ur: 'ظالموں کو' } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'موصول + صلة' }
      ],
    },
  },
  59: {
    text: 'وَعِندَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ وَيَعْلَمُ مَا فِي الْبَرِّ وَالْبَحْرِ وَمَا تَسْقُطُ مِن وَرَقَةٍ إِلَّا يَعْلَمُهَا وَلَا حَبَّةٍ فِي ظُلُمَاتِ الْأَرْضِ وَلَا رَطْبٍ وَلَا يَابِسٍ إِلَّا فِي كِتَابٍ مُّبِينٍ',
    translation: {
      en: 'And with Him are the keys of the unseen; none knows them except Him. And He knows what is on the land and in the sea. Not a leaf falls but that He knows it. And no grain is there within the darknesses of the earth and no moist or dry thing but that it is in a clear record.',
      ur: 'اور غیب کی کنجیاں اس کے پاس ہیں انہیں اس کے سوا کوئی نہیں جانتا۔ اور وہ جانتا ہے جو خشکی اور سمندر میں ہے۔ کوئی پتا نہیں گرتا مگر وہ اسے جانتا ہے اور نہ زمین کے اندھیروں میں کوئی دانہ اور نہ کوئی تر اور نہ خشک چیز مگر واضح کتاب میں ہے۔'
    },
    words: [
      { id: '6:59:1', arabic: 'وَعِندَهُ', transliteration: 'wa-\'indahu', pos: ['CONJ', 'N', 'PRON'], posLabel: 'CONJ+N+PRON', root: 'ع ن د', meaning: { en: 'And with Him', ur: 'اور اس کے پاس' } },
      { id: '6:59:2', arabic: 'مَفَاتِحُ', transliteration: 'mafatihu', pos: ['N'], posLabel: 'N', root: 'ف ت ح', meaning: { en: 'the keys of', ur: 'کنجیاں' } },
      { id: '6:59:3', arabic: 'الْغَيْبِ', transliteration: 'al-ghaybi', pos: ['N'], posLabel: 'N', root: 'غ ي ب', meaning: { en: 'the unseen', ur: 'غیب کی' } },
      { id: '6:59:4', arabic: 'لَا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'none', ur: 'نہیں' } },
      { id: '6:59:5', arabic: 'يَعْلَمُهَا', transliteration: 'ya\'lamuha', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ع ل م', meaning: { en: 'knows them', ur: 'جانتا انہیں' } },
      { id: '6:59:6', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '6:59:7', arabic: 'هُوَ', transliteration: 'huwa', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'Him', ur: 'اس کے' } },
      { id: '6:59:8', arabic: 'وَيَعْلَمُ', transliteration: 'wa-ya\'lamu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ع ل م', meaning: { en: 'And He knows', ur: 'اور جانتا ہے' } },
      { id: '6:59:9', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '6:59:10', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'on', ur: 'میں' } },
      { id: '6:59:11', arabic: 'الْبَرِّ', transliteration: 'al-barri', pos: ['N'], posLabel: 'N', root: 'ب ر ر', meaning: { en: 'the land', ur: 'خشکی' } },
      { id: '6:59:12', arabic: 'وَالْبَحْرِ', transliteration: 'wal-bahri', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ب ح ر', meaning: { en: 'and the sea', ur: 'اور سمندر' } },
      { id: '6:59:13', arabic: 'وَمَا', transliteration: 'wa-ma', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '6:59:14', arabic: 'تَسْقُطُ', transliteration: 'tasqutu', pos: ['V'], posLabel: 'V', root: 'س ق ط', meaning: { en: 'falls', ur: 'گرتا' } },
      { id: '6:59:15', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: '(any)', ur: 'کوئی' } },
      { id: '6:59:16', arabic: 'وَرَقَةٍ', transliteration: 'waraqatin', pos: ['N'], posLabel: 'N', root: 'و ر ق', meaning: { en: 'leaf', ur: 'پتا' } },
      { id: '6:59:17', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'but', ur: 'مگر' } },
      { id: '6:59:18', arabic: 'يَعْلَمُهَا', transliteration: 'ya\'lamuha', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ع ل م', meaning: { en: 'He knows it', ur: 'وہ جانتا ہے' } },
      { id: '6:59:19', arabic: 'وَلَا', transliteration: 'wa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and no', ur: 'اور نہ' } },
      { id: '6:59:20', arabic: 'حَبَّةٍ', transliteration: 'habbatin', pos: ['N'], posLabel: 'N', root: 'ح ب ب', meaning: { en: 'grain', ur: 'دانہ' } },
      { id: '6:59:21', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'within', ur: 'میں' } },
      { id: '6:59:22', arabic: 'ظُلُمَاتِ', transliteration: 'zulumati', pos: ['N'], posLabel: 'N', root: 'ظ ل م', meaning: { en: 'the darknesses of', ur: 'اندھیروں' } },
      { id: '6:59:23', arabic: 'الْأَرْضِ', transliteration: 'al-ardi', pos: ['N'], posLabel: 'N', root: 'أ ر ض', meaning: { en: 'the earth', ur: 'زمین کے' } },
      { id: '6:59:24', arabic: 'وَلَا', transliteration: 'wa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and no', ur: 'اور نہ' } },
      { id: '6:59:25', arabic: 'رَطْبٍ', transliteration: 'ratbin', pos: ['ADJ'], posLabel: 'ADJ', root: 'ر ط ب', meaning: { en: 'moist', ur: 'تر' } },
      { id: '6:59:26', arabic: 'وَلَا', transliteration: 'wa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and no', ur: 'اور نہ' } },
      { id: '6:59:27', arabic: 'يَابِسٍ', transliteration: 'yabisin', pos: ['ADJ'], posLabel: 'ADJ', root: 'ي ب س', meaning: { en: 'dry', ur: 'خشک' } },
      { id: '6:59:28', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except', ur: 'مگر' } },
      { id: '6:59:29', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '6:59:30', arabic: 'كِتَابٍ', transliteration: 'kitabin', pos: ['N'], posLabel: 'N', root: 'ك ت ب', meaning: { en: 'a record', ur: 'کتاب' } },
      { id: '6:59:31', arabic: 'مُّبِينٍ', transliteration: 'mubinin', pos: ['ADJ'], posLabel: 'ADJ', root: 'ب ي ن', meaning: { en: 'clear', ur: 'واضح' } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف الیہ' },
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 22, to: 23, label: 'مضاف + مضاف الیہ' },
        { from: 30, to: 31, label: 'موصوف + صفت' }
      ],
    },
  },
  60: {
    text: 'وَهُوَ الَّذِي يَتَوَفَّاكُم بِاللَّيْلِ وَيَعْلَمُ مَا جَرَحْتُم بِالنَّهَارِ ثُمَّ يَبْعَثُكُمْ فِيهِ لِيُقْضَىٰ أَجَلٌ مُّسَمًّى ثُمَّ إِلَيْهِ مَرْجِعُكُمْ ثُمَّ يُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ',
    translation: {
      en: 'And it is He who takes your souls by night and knows what you have committed by day. Then He revives you therein that a specified term may be fulfilled. Then to Him will be your return; then He will inform you about what you used to do.',
      ur: 'اور وہی ہے جو رات کو تمہاری روحیں قبض کرتا ہے اور جانتا ہے جو تم نے دن میں کیا۔ پھر دن کو تمہیں اٹھاتا ہے تاکہ مقررہ مدت پوری ہو۔ پھر اسی کی طرف تمہیں لوٹنا ہے پھر جو تم کرتے تھے بتائے گا۔'
    },
    words: [
      { id: '6:60:1', arabic: 'وَهُوَ', transliteration: 'wa-huwa', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'And He', ur: 'اور وہ' } },
      { id: '6:60:2', arabic: 'الَّذِي', transliteration: 'alladhi', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'is He who', ur: 'جو' } },
      { id: '6:60:3', arabic: 'يَتَوَفَّاكُم', transliteration: 'yatawaffakum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'و ف ي', meaning: { en: 'takes your souls', ur: 'تمہاری روحیں قبض کرتا ہے' } },
      { id: '6:60:4', arabic: 'بِاللَّيْلِ', transliteration: 'bil-layli', pos: ['P', 'N'], posLabel: 'P+N', root: 'ل ي ل', meaning: { en: 'by night', ur: 'رات کو' } },
      { id: '6:60:5', arabic: 'وَيَعْلَمُ', transliteration: 'wa-ya\'lamu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ع ل م', meaning: { en: 'and knows', ur: 'اور جانتا ہے' } },
      { id: '6:60:6', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '6:60:7', arabic: 'جَرَحْتُم', transliteration: 'jarahtum', pos: ['V'], posLabel: 'V', root: 'ج ر ح', meaning: { en: 'you committed', ur: 'تم نے کیا' } },
      { id: '6:60:8', arabic: 'بِالنَّهَارِ', transliteration: 'bin-nahari', pos: ['P', 'N'], posLabel: 'P+N', root: 'ن ه ر', meaning: { en: 'by day', ur: 'دن میں' } },
      { id: '6:60:9', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'Then', ur: 'پھر' } },
      { id: '6:60:10', arabic: 'يَبْعَثُكُمْ', transliteration: 'yab\'athukum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ب ع ث', meaning: { en: 'He revives you', ur: 'تمہیں اٹھاتا ہے' } },
      { id: '6:60:11', arabic: 'فِيهِ', transliteration: 'fihi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'therein', ur: 'اس میں' } },
      { id: '6:60:12', arabic: 'لِيُقْضَىٰ', transliteration: 'li-yuqda', pos: ['P', 'V'], posLabel: 'P+V', root: 'ق ض ي', meaning: { en: 'that may be fulfilled', ur: 'تاکہ پوری ہو' } },
      { id: '6:60:13', arabic: 'أَجَلٌ', transliteration: 'ajalun', pos: ['N'], posLabel: 'N', root: 'أ ج ل', meaning: { en: 'a term', ur: 'مدت' } },
      { id: '6:60:14', arabic: 'مُّسَمًّى', transliteration: 'musamman', pos: ['ADJ'], posLabel: 'ADJ', root: 'س م و', meaning: { en: 'specified', ur: 'مقررہ' } },
      { id: '6:60:15', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'Then', ur: 'پھر' } },
      { id: '6:60:16', arabic: 'إِلَيْهِ', transliteration: 'ilayhi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to Him', ur: 'اسی کی طرف' } },
      { id: '6:60:17', arabic: 'مَرْجِعُكُمْ', transliteration: 'marji\'ukum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ج ع', meaning: { en: 'your return', ur: 'تمہارا لوٹنا' } },
      { id: '6:60:18', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '6:60:19', arabic: 'يُنَبِّئُكُم', transliteration: 'yunabbi\'ukum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ن ب أ', meaning: { en: 'He will inform you', ur: 'بتائے گا تمہیں' } },
      { id: '6:60:20', arabic: 'بِمَا', transliteration: 'bi-ma', pos: ['P', 'REL'], posLabel: 'P+REL', root: null, meaning: { en: 'about what', ur: 'جو کچھ' } },
      { id: '6:60:21', arabic: 'كُنتُمْ', transliteration: 'kuntum', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'you used to', ur: 'تم تھے' } },
      { id: '6:60:22', arabic: 'تَعْمَلُونَ', transliteration: 'ta\'malun', pos: ['V'], posLabel: 'V', root: 'ع م ل', meaning: { en: 'do', ur: 'کرتے' } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'موصول + صلة' },
        { from: 13, to: 14, label: 'موصوف + صفت' },
        { from: 20, to: 21, label: 'موصول + صلة' }
      ],
    },
  },
  61: {
    text: 'وَهُوَ الْقَاهِرُ فَوْقَ عِبَادِهِ وَيُرْسِلُ عَلَيْكُمْ حَفَظَةً حَتَّىٰ إِذَا جَاءَ أَحَدَكُمُ الْمَوْتُ تَوَفَّتْهُ رُسُلُنَا وَهُمْ لَا يُفَرِّطُونَ',
    translation: {
      en: 'And He is the subjugator over His servants, and He sends over you guardian-angels until, when death comes to one of you, Our messengers take him, and they do not fail.',
      ur: 'اور وہ اپنے بندوں پر غالب ہے اور تم پر نگہبان فرشتے بھیجتا ہے یہاں تک کہ جب تم میں سے کسی کو موت آتی ہے تو ہمارے فرشتے اس کی روح قبض کر لیتے ہیں اور وہ کوتاہی نہیں کرتے۔'
    },
    words: [
      { id: '6:61:1', arabic: 'وَهُوَ', transliteration: 'wa-huwa', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'And He', ur: 'اور وہ' } },
      { id: '6:61:2', arabic: 'الْقَاهِرُ', transliteration: 'al-qahiru', pos: ['N'], posLabel: 'N', root: 'ق ه ر', meaning: { en: 'the subjugator', ur: 'غالب' } },
      { id: '6:61:3', arabic: 'فَوْقَ', transliteration: 'fawqa', pos: ['N'], posLabel: 'N', root: 'ف و ق', meaning: { en: 'over', ur: 'اوپر' } },
      { id: '6:61:4', arabic: 'عِبَادِهِ', transliteration: '\'ibadihi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ع ب د', meaning: { en: 'His servants', ur: 'اپنے بندوں' } },
      { id: '6:61:5', arabic: 'وَيُرْسِلُ', transliteration: 'wa-yursilu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ر س ل', meaning: { en: 'and He sends', ur: 'اور بھیجتا ہے' } },
      { id: '6:61:6', arabic: 'عَلَيْكُمْ', transliteration: '\'alaykum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'over you', ur: 'تم پر' } },
      { id: '6:61:7', arabic: 'حَفَظَةً', transliteration: 'hafazatan', pos: ['N'], posLabel: 'N', root: 'ح ف ظ', meaning: { en: 'guardian-angels', ur: 'نگہبان' } },
      { id: '6:61:8', arabic: 'حَتَّىٰ', transliteration: 'hatta', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'until', ur: 'یہاں تک کہ' } },
      { id: '6:61:9', arabic: 'إِذَا', transliteration: 'idha', pos: ['T'], posLabel: 'T', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '6:61:10', arabic: 'جَاءَ', transliteration: 'ja\'a', pos: ['V'], posLabel: 'V', root: 'ج ي أ', meaning: { en: 'comes', ur: 'آتی ہے' } },
      { id: '6:61:11', arabic: 'أَحَدَكُمُ', transliteration: 'ahadakumu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'أ ح د', meaning: { en: 'one of you', ur: 'تم میں سے کسی کو' } },
      { id: '6:61:12', arabic: 'الْمَوْتُ', transliteration: 'al-mawtu', pos: ['N'], posLabel: 'N', root: 'م و ت', meaning: { en: 'death', ur: 'موت' } },
      { id: '6:61:13', arabic: 'تَوَفَّتْهُ', transliteration: 'tawaffathu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'و ف ي', meaning: { en: 'take him', ur: 'قبض کرتے ہیں' } },
      { id: '6:61:14', arabic: 'رُسُلُنَا', transliteration: 'rusuluna', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر س ل', meaning: { en: 'Our messengers', ur: 'ہمارے فرشتے' } },
      { id: '6:61:15', arabic: 'وَهُمْ', transliteration: 'wa-hum', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'and they', ur: 'اور وہ' } },
      { id: '6:61:16', arabic: 'لَا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'do not', ur: 'نہیں' } },
      { id: '6:61:17', arabic: 'يُفَرِّطُونَ', transliteration: 'yufarritun', pos: ['V'], posLabel: 'V', root: 'ف ر ط', meaning: { en: 'fail', ur: 'کوتاہی کرتے' } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف الیہ' },
        { from: 16, to: 17, label: 'نفی + فعل' }
      ],
    },
  },
  62: {
    text: 'ثُمَّ رُدُّوا إِلَى اللَّهِ مَوْلَاهُمُ الْحَقِّ أَلَا لَهُ الْحُكْمُ وَهُوَ أَسْرَعُ الْحَاسِبِينَ',
    translation: {
      en: 'Then they are returned to Allah, their true Lord. Unquestionably, His is the judgement, and He is the swiftest of accountants.',
      ur: 'پھر انہیں اللہ کی طرف لوٹایا جاتا ہے جو ان کا سچا مالک ہے۔ خبردار حکم اسی کا ہے اور وہ سب سے تیز حساب لینے والا ہے۔'
    },
    words: [
      { id: '6:62:1', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'Then', ur: 'پھر' } },
      { id: '6:62:2', arabic: 'رُدُّوا', transliteration: 'ruddu', pos: ['V'], posLabel: 'V', root: 'ر د د', meaning: { en: 'they are returned', ur: 'لوٹائے جاتے ہیں' } },
      { id: '6:62:3', arabic: 'إِلَى', transliteration: 'ila', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'طرف' } },
      { id: '6:62:4', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کی' } },
      { id: '6:62:5', arabic: 'مَوْلَاهُمُ', transliteration: 'mawlahumu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'و ل ي', meaning: { en: 'their true Lord', ur: 'ان کے مالک' } },
      { id: '6:62:6', arabic: 'الْحَقِّ', transliteration: 'al-haqqi', pos: ['ADJ'], posLabel: 'ADJ', root: 'ح ق ق', meaning: { en: 'the true', ur: 'سچے' } },
      { id: '6:62:7', arabic: 'أَلَا', transliteration: 'a-la', pos: ['INTG', 'NEG'], posLabel: 'INTG+NEG', root: null, meaning: { en: 'Unquestionably', ur: 'خبردار' } },
      { id: '6:62:8', arabic: 'لَهُ', transliteration: 'lahu', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'His is', ur: 'اسی کا ہے' } },
      { id: '6:62:9', arabic: 'الْحُكْمُ', transliteration: 'al-hukmu', pos: ['N'], posLabel: 'N', root: 'ح ك م', meaning: { en: 'the judgement', ur: 'حکم' } },
      { id: '6:62:10', arabic: 'وَهُوَ', transliteration: 'wa-huwa', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'and He', ur: 'اور وہ' } },
      { id: '6:62:11', arabic: 'أَسْرَعُ', transliteration: 'asra\'u', pos: ['ADJ'], posLabel: 'ADJ', root: 'س ر ع', meaning: { en: 'the swiftest of', ur: 'سب سے تیز' } },
      { id: '6:62:12', arabic: 'الْحَاسِبِينَ', transliteration: 'al-hasibin', pos: ['N'], posLabel: 'N', root: 'ح س ب', meaning: { en: 'accountants', ur: 'حساب لینے والا' } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'مضاف + مضاف الیہ' }
      ],
    },
  },
  63: {
    text: 'قُلْ مَن يُنَجِّيكُم مِّن ظُلُمَاتِ الْبَرِّ وَالْبَحْرِ تَدْعُونَهُ تَضَرُّعًا وَخُفْيَةً لَّئِنْ أَنجَانَا مِنْ هَٰذِهِ لَنَكُونَنَّ مِنَ الشَّاكِرِينَ',
    translation: {
      en: 'Say, "Who rescues you from the darknesses of the land and sea when you call upon Him imploring and privately, \'If He should save us from this, we will surely be among the grateful?\'"',
      ur: 'کہو خشکی اور سمندر کے اندھیروں سے کون بچاتا ہے؟ تم اسے گڑگڑا کر اور چپکے چپکے پکارتے ہو کہ اگر اس نے ہمیں اس سے بچا لیا تو ہم ضرور شکر گزاروں میں سے ہوں گے۔'
    },
    words: [
      { id: '6:63:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:63:2', arabic: 'مَن', transliteration: 'man', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'Who', ur: 'کون' } },
      { id: '6:63:3', arabic: 'يُنَجِّيكُم', transliteration: 'yunajjikum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ن ج و', meaning: { en: 'rescues you', ur: 'تمہیں بچاتا ہے' } },
      { id: '6:63:4', arabic: 'مِّن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:63:5', arabic: 'ظُلُمَاتِ', transliteration: 'zulumati', pos: ['N'], posLabel: 'N', root: 'ظ ل م', meaning: { en: 'the darknesses of', ur: 'اندھیروں' } },
      { id: '6:63:6', arabic: 'الْبَرِّ', transliteration: 'al-barri', pos: ['N'], posLabel: 'N', root: 'ب ر ر', meaning: { en: 'the land', ur: 'خشکی' } },
      { id: '6:63:7', arabic: 'وَالْبَحْرِ', transliteration: 'wal-bahri', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ب ح ر', meaning: { en: 'and the sea', ur: 'اور سمندر' } },
      { id: '6:63:8', arabic: 'تَدْعُونَهُ', transliteration: 'tad\'unahu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'د ع و', meaning: { en: 'you call upon Him', ur: 'تم اسے پکارتے ہو' } },
      { id: '6:63:9', arabic: 'تَضَرُّعًا', transliteration: 'tadarru\'an', pos: ['N'], posLabel: 'N', root: 'ض ر ع', meaning: { en: 'imploring', ur: 'گڑگڑا کر' } },
      { id: '6:63:10', arabic: 'وَخُفْيَةً', transliteration: 'wa-khufyatan', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'خ ف ي', meaning: { en: 'and privately', ur: 'اور چپکے چپکے' } },
      { id: '6:63:11', arabic: 'لَّئِنْ', transliteration: 'la-in', pos: ['EMPH', 'COND'], posLabel: 'EMPH+COND', root: null, meaning: { en: 'If surely', ur: 'اگر ضرور' } },
      { id: '6:63:12', arabic: 'أَنجَانَا', transliteration: 'anjana', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ن ج و', meaning: { en: 'He saves us', ur: 'بچا لے' } },
      { id: '6:63:13', arabic: 'مِنْ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:63:14', arabic: 'هَٰذِهِ', transliteration: 'hadhihi', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'this', ur: 'اس' } },
      { id: '6:63:15', arabic: 'لَنَكُونَنَّ', transliteration: 'la-nakunanna', pos: ['EMPH', 'V'], posLabel: 'EMPH+V', root: 'ك و ن', meaning: { en: 'we will surely be', ur: 'ضرور ہوں گے' } },
      { id: '6:63:16', arabic: 'مِنَ', transliteration: 'mina', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'among', ur: 'میں سے' } },
      { id: '6:63:17', arabic: 'الشَّاكِرِينَ', transliteration: 'ash-shakirin', pos: ['N'], posLabel: 'N', root: 'ش ك ر', meaning: { en: 'the grateful', ur: 'شکر گزاروں' } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف الیہ' },
        { from: 16, to: 17, label: 'جار + مجرور' }
      ],
    },
  },
  64: {
    text: 'قُلِ اللَّهُ يُنَجِّيكُم مِّنْهَا وَمِن كُلِّ كَرْبٍ ثُمَّ أَنتُمْ تُشْرِكُونَ',
    translation: {
      en: 'Say, "It is Allah who saves you from it and from every distress; then you associate others with Him."',
      ur: 'کہو اللہ تمہیں اس سے اور ہر مصیبت سے بچاتا ہے پھر بھی تم شرک کرتے ہو۔'
    },
    words: [
      { id: '6:64:1', arabic: 'قُلِ', transliteration: 'quli', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:64:2', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '6:64:3', arabic: 'يُنَجِّيكُم', transliteration: 'yunajjikum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ن ج و', meaning: { en: 'saves you', ur: 'تمہیں بچاتا ہے' } },
      { id: '6:64:4', arabic: 'مِّنْهَا', transliteration: 'minha', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'from it', ur: 'اس سے' } },
      { id: '6:64:5', arabic: 'وَمِن', transliteration: 'wa-min', pos: ['CONJ', 'P'], posLabel: 'CONJ+P', root: null, meaning: { en: 'and from', ur: 'اور سے' } },
      { id: '6:64:6', arabic: 'كُلِّ', transliteration: 'kulli', pos: ['N'], posLabel: 'N', root: 'ك ل ل', meaning: { en: 'every', ur: 'ہر' } },
      { id: '6:64:7', arabic: 'كَرْبٍ', transliteration: 'karbin', pos: ['N'], posLabel: 'N', root: 'ك ر ب', meaning: { en: 'distress', ur: 'مصیبت' } },
      { id: '6:64:8', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'then', ur: 'پھر بھی' } },
      { id: '6:64:9', arabic: 'أَنتُمْ', transliteration: 'antum', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'you', ur: 'تم' } },
      { id: '6:64:10', arabic: 'تُشْرِكُونَ', transliteration: 'tushrikun', pos: ['V'], posLabel: 'V', root: 'ش ر ك', meaning: { en: 'associate (others)', ur: 'شرک کرتے ہو' } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'مضاف + مضاف الیہ' }
      ],
    },
  },
  65: {
    text: 'قُلْ هُوَ الْقَادِرُ عَلَىٰ أَن يَبْعَثَ عَلَيْكُمْ عَذَابًا مِّن فَوْقِكُمْ أَوْ مِن تَحْتِ أَرْجُلِكُمْ أَوْ يَلْبِسَكُمْ شِيَعًا وَيُذِيقَ بَعْضَكُم بَأْسَ بَعْضٍ انظُرْ كَيْفَ نُصَرِّفُ الْآيَاتِ لَعَلَّهُمْ يَفْقَهُونَ',
    translation: {
      en: 'Say, "He is the one able to send upon you affliction from above you or from beneath your feet or to confuse you into sects and make you taste the violence of one another." Look how We diversify the verses that they might understand.',
      ur: 'کہو وہ قادر ہے کہ تم پر اوپر سے یا تمہارے پاؤں کے نیچے سے عذاب بھیجے یا تمہیں فرقوں میں بانٹ دے اور ایک دوسرے کا مزہ چکھائے۔ دیکھو ہم کس طرح آیات بیان کرتے ہیں تاکہ وہ سمجھیں۔'
    },
    words: [
      { id: '6:65:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '6:65:2', arabic: 'هُوَ', transliteration: 'huwa', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'He is', ur: 'وہ' } },
      { id: '6:65:3', arabic: 'الْقَادِرُ', transliteration: 'al-qadiru', pos: ['N'], posLabel: 'N', root: 'ق د ر', meaning: { en: 'the One able', ur: 'قادر' } },
      { id: '6:65:4', arabic: 'عَلَىٰ', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'پر' } },
      { id: '6:65:5', arabic: 'أَن', transliteration: 'an', pos: ['SUB'], posLabel: 'SUB', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '6:65:6', arabic: 'يَبْعَثَ', transliteration: 'yab\'atha', pos: ['V'], posLabel: 'V', root: 'ب ع ث', meaning: { en: 'send', ur: 'بھیجے' } },
      { id: '6:65:7', arabic: 'عَلَيْكُمْ', transliteration: '\'alaykum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'upon you', ur: 'تم پر' } },
      { id: '6:65:8', arabic: 'عَذَابًا', transliteration: '\'adhaban', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: 'affliction', ur: 'عذاب' } },
      { id: '6:65:9', arabic: 'مِّن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:65:10', arabic: 'فَوْقِكُمْ', transliteration: 'fawqikum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ف و ق', meaning: { en: 'above you', ur: 'تمہارے اوپر' } },
      { id: '6:65:11', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '6:65:12', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '6:65:13', arabic: 'تَحْتِ', transliteration: 'tahti', pos: ['N'], posLabel: 'N', root: 'ت ح ت', meaning: { en: 'beneath', ur: 'نیچے' } },
      { id: '6:65:14', arabic: 'أَرْجُلِكُمْ', transliteration: 'arjulikum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ج ل', meaning: { en: 'your feet', ur: 'تمہارے پاؤں' } },
      { id: '6:65:15', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '6:65:16', arabic: 'يَلْبِسَكُمْ', transliteration: 'yalbisakum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ل ب س', meaning: { en: 'confuse you', ur: 'تمہیں ملا دے' } },
      { id: '6:65:17', arabic: 'شِيَعًا', transliteration: 'shiya\'an', pos: ['N'], posLabel: 'N', root: 'ش ي ع', meaning: { en: 'into sects', ur: 'فرقوں میں' } },
      { id: '6:65:18', arabic: 'وَيُذِيقَ', transliteration: 'wa-yudhiqa', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ذ و ق', meaning: { en: 'and make taste', ur: 'اور چکھائے' } },
      { id: '6:65:19', arabic: 'بَعْضَكُم', transliteration: 'ba\'dakum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ب ع ض', meaning: { en: 'some of you', ur: 'تمہارے بعض کو' } },
      { id: '6:65:20', arabic: 'بَأْسَ', transliteration: 'ba\'sa', pos: ['N'], posLabel: 'N', root: 'ب أ س', meaning: { en: 'the violence of', ur: 'لڑائی' } },
      { id: '6:65:21', arabic: 'بَعْضٍ', transliteration: 'ba\'din', pos: ['N'], posLabel: 'N', root: 'ب ع ض', meaning: { en: 'one another', ur: 'ایک دوسرے کی' } },
      { id: '6:65:22', arabic: 'انظُرْ', transliteration: 'unzur', pos: ['V'], posLabel: 'V', root: 'ن ظ ر', meaning: { en: 'Look', ur: 'دیکھو' } },
      { id: '6:65:23', arabic: 'كَيْفَ', transliteration: 'kayfa', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'how', ur: 'کیسے' } },
      { id: '6:65:24', arabic: 'نُصَرِّفُ', transliteration: 'nusarrifu', pos: ['V'], posLabel: 'V', root: 'ص ر ف', meaning: { en: 'We diversify', ur: 'ہم بیان کرتے ہیں' } },
      { id: '6:65:25', arabic: 'الْآيَاتِ', transliteration: 'al-ayati', pos: ['N'], posLabel: 'N', root: 'أ ي ي', meaning: { en: 'the verses', ur: 'آیات' } },
      { id: '6:65:26', arabic: 'لَعَلَّهُمْ', transliteration: 'la\'allahum', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'that they might', ur: 'تاکہ وہ' } },
      { id: '6:65:27', arabic: 'يَفْقَهُونَ', transliteration: 'yafqahun', pos: ['V'], posLabel: 'V', root: 'ف ق ه', meaning: { en: 'understand', ur: 'سمجھیں' } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'مضاف + مضاف الیہ' },
        { from: 20, to: 21, label: 'مضاف + مضاف الیہ' }
      ],
    },
  },

  66: {
    text: "وَكَذَّبَ بِهِۦ قَوْمُكَ وَهُوَ ٱلْحَقُّ ۚ قُل لَّسْتُ عَلَيْكُم بِوَكِيلٍۢ",
    translation: {
      en: "",
      ur: "اور اس (قرآن) کو تمہاری قوم نے جھٹلایا حالانکہ وہ سراسر حق ہے۔ کہہ دو کہ میں تمہارا داروغہ نہیں ہوں",
    },
    words: [
      { id: '6:66:1', arabic: "وَكَذَّبَ", transliteration: "wakadhaba", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But denied", ur: "لیکن denied" } },
      { id: '6:66:2', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "it ", ur: "it " } },
      { id: '6:66:3', arabic: "قَوْمُكَ", transliteration: "qawmuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your people", ur: "your لوگ" } },
      { id: '6:66:4', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while it", ur: "while it" } },
      { id: '6:66:5', arabic: "ٱلْحَقُّ ۚ", transliteration: "l-ḥaqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the truth", ur: "(is) the سچ" } },
      { id: '6:66:6', arabic: "قُل", transliteration: "qul", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '6:66:7', arabic: "لَّسْتُ", transliteration: "lastu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I am not", ur: "میں am نہیں" } },
      { id: '6:66:8', arabic: "عَلَيْكُم", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over you", ur: "اوپر تم" } },
      { id: '6:66:9', arabic: "بِوَكِيلٍۢ", transliteration: "biwakīlin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "a manager", ur: "a manager" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  67: {
    text: "لِّكُلِّ نَبَإٍۢ مُّسْتَقَرٌّۭ ۚ وَسَوْفَ تَعْلَمُونَ",
    translation: {
      en: "",
      ur: "ہر خبر کے لئے ایک وقت مقرر ہے اور تم کو عنقریب معلوم ہوجائے گا",
    },
    words: [
      { id: '6:67:1', arabic: "لِّكُلِّ", transliteration: "likulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For every", ur: "For ہر" } },
      { id: '6:67:2', arabic: "نَبَإٍۢ", transliteration: "naba-in", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "news", ur: "news" } },
      { id: '6:67:3', arabic: "مُّسْتَقَرٌّۭ ۚ", transliteration: "mus'taqarrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a fixed time", ur: "(is) a fixed وقت" } },
      { id: '6:67:4', arabic: "وَسَوْفَ", transliteration: "wasawfa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and soon", ur: "اور soon" } },
      { id: '6:67:5', arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "you will know", ur: "تم will جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  68: {
    text: "وَإِذَا رَأَيْتَ ٱلَّذِينَ يَخُوضُونَ فِىٓ ءَايَـٰتِنَا فَأَعْرِضْ عَنْهُمْ حَتَّىٰ يَخُوضُوا۟ فِى حَدِيثٍ غَيْرِهِۦ ۚ وَإِمَّا يُنسِيَنَّكَ ٱلشَّيْطَـٰنُ فَلَا تَقْعُدْ بَعْدَ ٱلذِّكْرَىٰ مَعَ ٱلْقَوْمِ ٱلظَّـٰلِمِينَ",
    translation: {
      en: "",
      ur: "اور جب تم ایسے لوگوں کو دیکھو جو ہماری آیتوں کے بارے میں بیہودہ بکواس کر رہے ہوں تو ان سے الگ ہوجاؤ یہاں تک کہ اور باتوں میں مصروف ہوجائیں۔ اور اگر (یہ بات) شیطان تمہیں بھلا دے تو یاد آنے پر ظالم لوگوں کے ساتھ نہ بیٹھو",
    },
    words: [
      { id: '6:68:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '6:68:2', arabic: "رَأَيْتَ", transliteration: "ra-ayta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you see", ur: "تم دیکھنا" } },
      { id: '6:68:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '6:68:4', arabic: "يَخُوضُونَ", transliteration: "yakhūḍūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "engage (in vain talks)", ur: "engage (میں vain talks)" } },
      { id: '6:68:5', arabic: "فِىٓ", transliteration: "fī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "about", ur: "about" } },
      { id: '6:68:6', arabic: "ءَايَـٰتِنَا", transliteration: "āyātinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Verses", ur: "Our Verses" } },
      { id: '6:68:7', arabic: "فَأَعْرِضْ", transliteration: "fa-aʿriḍ", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then turn away", ur: "پھر turn away" } },
      { id: '6:68:8', arabic: "عَنْهُمْ", transliteration: "ʿanhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '6:68:9', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '6:68:10', arabic: "يَخُوضُوا۟", transliteration: "yakhūḍū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they engage", ur: "وہ لوگ engage" } },
      { id: '6:68:11', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '6:68:12', arabic: "حَدِيثٍ", transliteration: "ḥadīthin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a talk", ur: "a talk" } },
      { id: '6:68:13', arabic: "غَيْرِهِۦ ۚ", transliteration: "ghayrihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than it", ur: "other than it" } },
      { id: '6:68:14', arabic: "وَإِمَّا", transliteration: "wa-immā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '6:68:15', arabic: "يُنسِيَنَّكَ", transliteration: "yunsiyannaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "causes you to forget", ur: "causes تم کو forget" } },
      { id: '6:68:16', arabic: "ٱلشَّيْطَـٰنُ", transliteration: "l-shayṭānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan", ur: "the Shaitaan" } },
      { id: '6:68:17', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then (do) not", ur: "پھر (do) نہیں" } },
      { id: '6:68:18', arabic: "تَقْعُدْ", transliteration: "taqʿud", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "sit", ur: "sit" } },
      { id: '6:68:19', arabic: "بَعْدَ", transliteration: "baʿda", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '6:68:20', arabic: "ٱلذِّكْرَىٰ", transliteration: "l-dhik'rā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the reminder", ur: "the reminder" } },
      { id: '6:68:21', arabic: "مَعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '6:68:22', arabic: "ٱلْقَوْمِ", transliteration: "l-qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "the people ", ur: "the لوگ " } },
      { id: '6:68:23', arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoers", ur: "the wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'مضاف + مضاف إليه' },
        { from: 21, to: 22, label: 'مضاف + مضاف إليه' },
        { from: 22, to: 23, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  69: {
    text: "وَمَا عَلَى ٱلَّذِينَ يَتَّقُونَ مِنْ حِسَابِهِم مِّن شَىْءٍۢ وَلَـٰكِن ذِكْرَىٰ لَعَلَّهُمْ يَتَّقُونَ",
    translation: {
      en: "",
      ur: "اور پرہیزگاروں پر ان لوگوں کے حساب کی کچھ بھی جواب دہی نہیں ہاں نصیحت تاکہ وہ بھی پرہیزگار ہوں",
    },
    words: [
      { id: '6:69:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '6:69:2', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) on", ur: "(is) پر" } },
      { id: '6:69:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '6:69:4', arabic: "يَتَّقُونَ", transliteration: "yattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "fear (Allah)", ur: "ڈرنا (اللہ)" } },
      { id: '6:69:5', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '6:69:6', arabic: "حِسَابِهِم", transliteration: "ḥisābihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their account", ur: "their account" } },
      { id: '6:69:7', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[of]", ur: "[of]" } },
      { id: '6:69:8', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } },
      { id: '6:69:9', arabic: "وَلَـٰكِن", transliteration: "walākin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '6:69:10', arabic: "ذِكْرَىٰ", transliteration: "dhik'rā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for) reminder", ur: "(for) reminder" } },
      { id: '6:69:11', arabic: "لَعَلَّهُمْ", transliteration: "laʿallahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that they may", ur: "so وہ وہ لوگ may" } },
      { id: '6:69:12', arabic: "يَتَّقُونَ", transliteration: "yattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "fear (Allah)", ur: "ڈرنا (اللہ)" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  70: {
    text: "وَذَرِ ٱلَّذِينَ ٱتَّخَذُوا۟ دِينَهُمْ لَعِبًۭا وَلَهْوًۭا وَغَرَّتْهُمُ ٱلْحَيَوٰةُ ٱلدُّنْيَا ۚ وَذَكِّرْ بِهِۦٓ أَن تُبْسَلَ نَفْسٌۢ بِمَا كَسَبَتْ لَيْسَ لَهَا مِن دُونِ ٱللَّهِ وَلِىٌّۭ وَلَا شَفِيعٌۭ وَإِن تَعْدِلْ كُلَّ عَدْلٍۢ لَّا يُؤْخَذْ مِنْهَآ ۗ أُو۟لَـٰٓئِكَ ٱلَّذِينَ أُبْسِلُوا۟ بِمَا كَسَبُوا۟ ۖ لَهُمْ شَرَابٌۭ مِّنْ حَمِيمٍۢ وَعَذَابٌ أَلِيمٌۢ بِمَا كَانُوا۟ يَكْفُرُونَ",
    translation: {
      en: "",
      ur: "اور جن لوگوں نے اپنےدین کو کھیل اور تماشا بنا رکھا ہے اور دنیا کی زندگی نے ان کو دھوکے میں ڈال رکھا ہے ان سے کچھ کام نہ رکھو ہاں اس (قرآن) کے ذریعے سے نصیحت کرتے رہو تاکہ (قیامت کے دن) کوئی اپنے اعمال کی سزا میں ہلاکت میں نہ ڈالا جائے (اس روز) خدا کےسوا نہ تو کوئی اس کا دوست ہوگا اور نہ سفارش کرنے والا۔ اور اگر وہ ہر چیز (جو روئے زمین پر ہے بطور) معاوضہ دینا چاہے تو وہ اس سے قبول نہ ہو یہی لوگ ہیں کہ اپنے اعمال کے وبال میں ہلاکت میں ڈالے گئے ان کے لئے پینے کو کھولتا ہوا پانی اور دکھ دینے والا عذاب ہے اس لئے کہ کفر کرتے تھے",
    },
    words: [
      { id: '6:70:1', arabic: "وَذَرِ", transliteration: "wadhari", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And leave", ur: "اور leave" } },
      { id: '6:70:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '6:70:3', arabic: "ٱتَّخَذُوا۟", transliteration: "ittakhadhū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "take", ur: "take" } },
      { id: '6:70:4', arabic: "دِينَهُمْ", transliteration: "dīnahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their religion", ur: "their religion" } },
      { id: '6:70:5', arabic: "لَعِبًۭا", transliteration: "laʿiban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a play", ur: "(as) a play" } },
      { id: '6:70:6', arabic: "وَلَهْوًۭا", transliteration: "walahwan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and amusement", ur: "اور amusement" } },
      { id: '6:70:7', arabic: "وَغَرَّتْهُمُ", transliteration: "wagharrathumu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and deluded them", ur: "اور deluded them" } },
      { id: '6:70:8', arabic: "ٱلْحَيَوٰةُ", transliteration: "l-ḥayatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the life", ur: "the زندگی" } },
      { id: '6:70:9', arabic: "ٱلدُّنْيَا ۚ", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the world", ur: "(of) the دنیا" } },
      { id: '6:70:10', arabic: "وَذَكِّرْ", transliteration: "wadhakkir", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But remind", ur: "لیکن remind" } },
      { id: '6:70:11', arabic: "بِهِۦٓ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '6:70:12', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "lest", ur: "lest" } },
      { id: '6:70:13', arabic: "تُبْسَلَ", transliteration: "tub'sala", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is given up to destruction", ur: "is given up کو destruction" } },
      { id: '6:70:14', arabic: "نَفْسٌۢ", transliteration: "nafsun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a soul", ur: "a روح" } },
      { id: '6:70:15', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '6:70:16', arabic: "كَسَبَتْ", transliteration: "kasabat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "it (has) earned", ur: "it (has) earned" } },
      { id: '6:70:17', arabic: "لَيْسَ", transliteration: "laysa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:70:18', arabic: "لَهَا", transliteration: "lahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) for it", ur: "(is) for it" } },
      { id: '6:70:19', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:70:20', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides", ur: "besides" } },
      { id: '6:70:21', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:70:22', arabic: "وَلِىٌّۭ", transliteration: "waliyyun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "any protector", ur: "any protector" } },
      { id: '6:70:23', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '6:70:24', arabic: "شَفِيعٌۭ", transliteration: "shafīʿun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any intercessor", ur: "any intercessor" } },
      { id: '6:70:25', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '6:70:26', arabic: "تَعْدِلْ", transliteration: "taʿdil", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "it offers ransom ", ur: "it offers ransom " } },
      { id: '6:70:27', arabic: "كُلَّ", transliteration: "kulla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '6:70:28', arabic: "عَدْلٍۢ", transliteration: "ʿadlin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "ransom", ur: "ransom" } },
      { id: '6:70:29', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:70:30', arabic: "يُؤْخَذْ", transliteration: "yu'khadh", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will it be taken", ur: "will it be taken" } },
      { id: '6:70:31', arabic: "مِنْهَآ ۗ", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '6:70:32', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those", ur: "Those" } },
      { id: '6:70:33', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) ones who", ur: "(are) ones جو" } },
      { id: '6:70:34', arabic: "أُبْسِلُوا۟", transliteration: "ub'silū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are given to destruction", ur: "are given کو destruction" } },
      { id: '6:70:35', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '6:70:36', arabic: "كَسَبُوا۟ ۖ", transliteration: "kasabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they earned", ur: "وہ لوگ earned" } },
      { id: '6:70:37', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For them", ur: "For them" } },
      { id: '6:70:38', arabic: "شَرَابٌۭ", transliteration: "sharābun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) a drink", ur: "(will be) a drink" } },
      { id: '6:70:39', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '6:70:40', arabic: "حَمِيمٍۢ", transliteration: "ḥamīmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "boiling water", ur: "boiling پانی" } },
      { id: '6:70:41', arabic: "وَعَذَابٌ", transliteration: "waʿadhābun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع ذ ب", meaning: { en: "and a punishment", ur: "اور a عذاب" } },
      { id: '6:70:42', arabic: "أَلِيمٌۢ", transliteration: "alīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "painful", ur: "painful" } },
      { id: '6:70:43', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because", ur: "because" } },
      { id: '6:70:44', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '6:70:45', arabic: "يَكْفُرُونَ", transliteration: "yakfurūna", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'جار + مجرور' },
        { from: 26, to: 27, label: 'فعل + فاعل' },
        { from: 30, to: 31, label: 'فعل + فاعل' },
        { from: 36, to: 37, label: 'فعل + فاعل' },
        { from: 38, to: 39, label: 'فعل + فاعل' }
      ],
    },
  },
  71: {
    text: "قُلْ أَنَدْعُوا۟ مِن دُونِ ٱللَّهِ مَا لَا يَنفَعُنَا وَلَا يَضُرُّنَا وَنُرَدُّ عَلَىٰٓ أَعْقَابِنَا بَعْدَ إِذْ هَدَىٰنَا ٱللَّهُ كَٱلَّذِى ٱسْتَهْوَتْهُ ٱلشَّيَـٰطِينُ فِى ٱلْأَرْضِ حَيْرَانَ لَهُۥٓ أَصْحَـٰبٌۭ يَدْعُونَهُۥٓ إِلَى ٱلْهُدَى ٱئْتِنَا ۗ قُلْ إِنَّ هُدَى ٱللَّهِ هُوَ ٱلْهُدَىٰ ۖ وَأُمِرْنَا لِنُسْلِمَ لِرَبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "کہو۔ کیا ہم خدا کے سوا ایسی چیز کو پکاریں جو نہ ہمارا بھلا کرسکے نہ برا۔ اور جب ہم کو خدا نے سیدھا رستہ دکھا دیا تو (کیا) ہم الٹے پاؤں پھر جائیں؟ (پھر ہماری ایسی مثال ہو) جیسے کسی کو جنات نے جنگل میں بھلا دیا ہو (اور وہ) حیران (ہو رہا ہو) اور اس کے کچھ رفیق ہوں جو اس کو رستے کی طرف بلائیں کہ ہمارے پاس چلا آ۔ کہہ دو کہ رستہ تو وہی ہے جو خدا نے بتایا ہے۔ اور ہمیں تو یہ حکم ملا ہے کہ ہم خدائے رب العالمین کے فرمانبردار ہوں",
    },
    words: [
      { id: '6:71:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '6:71:2', arabic: "أَنَدْعُوا۟", transliteration: "anadʿū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Shall we call", ur: "Shall ہم call" } },
      { id: '6:71:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:71:4', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides", ur: "besides" } },
      { id: '6:71:5', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:71:6', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:71:7', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:71:8', arabic: "يَنفَعُنَا", transliteration: "yanfaʿunā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "benefits us", ur: "benefits us" } },
      { id: '6:71:9', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '6:71:10', arabic: "يَضُرُّنَا", transliteration: "yaḍurrunā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "harms us", ur: "harms us" } },
      { id: '6:71:11', arabic: "وَنُرَدُّ", transliteration: "wanuraddu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and we turn back", ur: "اور ہم turn back" } },
      { id: '6:71:12', arabic: "عَلَىٰٓ", transliteration: "ʿalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '6:71:13', arabic: "أَعْقَابِنَا", transliteration: "aʿqābinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our heels", ur: "our heels" } },
      { id: '6:71:14', arabic: "بَعْدَ", transliteration: "baʿda", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '6:71:15', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[when]", ur: "[when]" } },
      { id: '6:71:16', arabic: "هَدَىٰنَا", transliteration: "hadānā", pos: ['N'], posLabel: 'N', root: "ه د ي", meaning: { en: "(has) guided us", ur: "(has) guided us" } },
      { id: '6:71:17', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:71:18', arabic: "كَٱلَّذِى", transliteration: "ka-alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Like the one", ur: "Like the one" } },
      { id: '6:71:19', arabic: "ٱسْتَهْوَتْهُ", transliteration: "is'tahwathu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "whom (has been) enticed", ur: "whom (has been) enticed" } },
      { id: '6:71:20', arabic: "ٱلشَّيَـٰطِينُ", transliteration: "l-shayāṭīnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) the Shaitaan", ur: "(by) the Shaitaan" } },
      { id: '6:71:21', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '6:71:22', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '6:71:23', arabic: "حَيْرَانَ", transliteration: "ḥayrāna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "confused", ur: "confused" } },
      { id: '6:71:24', arabic: "لَهُۥٓ", transliteration: "lahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he has", ur: "وہ has" } },
      { id: '6:71:25', arabic: "أَصْحَـٰبٌۭ", transliteration: "aṣḥābun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "companions", ur: "companions" } },
      { id: '6:71:26', arabic: "يَدْعُونَهُۥٓ", transliteration: "yadʿūnahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "who call him", ur: "جو call him" } },
      { id: '6:71:27', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "towards", ur: "towards" } },
      { id: '6:71:28', arabic: "ٱلْهُدَى", transliteration: "l-hudā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the guidance", ur: "the guidance" } },
      { id: '6:71:29', arabic: "ٱئْتِنَا ۗ", transliteration: "i'tinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "'Come to us.'", ur: "'Come کو us.'" } },
      { id: '6:71:30', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '6:71:31', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '6:71:32', arabic: "هُدَى", transliteration: "hudā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Guidance", ur: "(the) Guidance" } },
      { id: '6:71:33', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '6:71:34', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "it", ur: "it" } },
      { id: '6:71:35', arabic: "ٱلْهُدَىٰ ۖ", transliteration: "l-hudā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the Guidance", ur: "(is) the Guidance" } },
      { id: '6:71:36', arabic: "وَأُمِرْنَا", transliteration: "wa-umir'nā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and we have been commanded", ur: "اور ہم have been commanded" } },
      { id: '6:71:37', arabic: "لِنُسْلِمَ", transliteration: "linus'lima", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that we submit", ur: "وہ ہم submit" } },
      { id: '6:71:38', arabic: "لِرَبِّ", transliteration: "lirabbi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to (the) Lord", ur: "کو (the) رب" } },
      { id: '6:71:39', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'نفی + فعل' },
        { from: 17, to: 18, label: 'مضاف + مضاف إليه' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'فعل + فاعل' },
        { from: 27, to: 28, label: 'جار + مجرور' },
        { from: 31, to: 32, label: 'فعل + فاعل' },
        { from: 38, to: 39, label: 'جار + مجرور' }
      ],
    },
  },
  72: {
    text: "وَأَنْ أَقِيمُوا۟ ٱلصَّلَوٰةَ وَٱتَّقُوهُ ۚ وَهُوَ ٱلَّذِىٓ إِلَيْهِ تُحْشَرُونَ",
    translation: {
      en: "",
      ur: "اور یہ (بھی) کہ نماز پڑھتے رہو اور اس سے ڈرتے رہو۔ اور وہی تو ہے جس کے پاس تم جمع کئے جاؤ گے",
    },
    words: [
      { id: '6:72:1', arabic: "وَأَنْ", transliteration: "wa-an", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And to", ur: "اور کو" } },
      { id: '6:72:2', arabic: "أَقِيمُوا۟", transliteration: "aqīmū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "establish", ur: "establish" } },
      { id: '6:72:3', arabic: "ٱلصَّلَوٰةَ", transliteration: "l-ṣalata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the prayer", ur: "the نماز" } },
      { id: '6:72:4', arabic: "وَٱتَّقُوهُ ۚ", transliteration: "wa-ittaqūhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and fear Him", ur: "اور ڈرنا Him" } },
      { id: '6:72:5', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '6:72:6', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One", ur: "(is) the One" } },
      { id: '6:72:7', arabic: "إِلَيْهِ", transliteration: "ilayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to Him", ur: "کو Him" } },
      { id: '6:72:8', arabic: "تُحْشَرُونَ", transliteration: "tuḥ'sharūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you will be gathered", ur: "تم will be gathered" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  73: {
    text: "وَهُوَ ٱلَّذِى خَلَقَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ بِٱلْحَقِّ ۖ وَيَوْمَ يَقُولُ كُن فَيَكُونُ ۚ قَوْلُهُ ٱلْحَقُّ ۚ وَلَهُ ٱلْمُلْكُ يَوْمَ يُنفَخُ فِى ٱلصُّورِ ۚ عَـٰلِمُ ٱلْغَيْبِ وَٱلشَّهَـٰدَةِ ۚ وَهُوَ ٱلْحَكِيمُ ٱلْخَبِيرُ",
    translation: {
      en: "",
      ur: "اور وہی تو ہے جس نے آسمانوں اور زمین کو تدبیر سے پیدا کیا ہے۔ اور جس دن وہ فرمائے گا کہ ہو جا تو (حشر برپا) ہوجائے گا ۔ اس کا ارشاد برحق ہے۔ اور جس دن صور پھونکا جائے گا (اس دن) اسی کی بادشاہت ہوگی۔ وہی پوشیدہ اور ظاہر (سب) کا جاننے والا ہے اور وہی دانا اور خبردار ہے",
    },
    words: [
      { id: '6:73:1', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (it is) He", ur: "اور (it is) وہ" } },
      { id: '6:73:2', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Who", ur: "جو" } },
      { id: '6:73:3', arabic: "خَلَقَ", transliteration: "khalaqa", pos: ['V'], posLabel: 'V', root: "خ ل ق", meaning: { en: "created", ur: "پیدا کیا" } },
      { id: '6:73:4', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '6:73:5', arabic: "وَٱلْأَرْضَ", transliteration: "wal-arḍa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '6:73:6', arabic: "بِٱلْحَقِّ ۖ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in truth", ur: "میں سچ" } },
      { id: '6:73:7', arabic: "وَيَوْمَ", transliteration: "wayawma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ي و م", meaning: { en: "And (the) Day", ur: "اور (the) دن" } },
      { id: '6:73:8', arabic: "يَقُولُ", transliteration: "yaqūlu", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He says", ur: "وہ کہتا ہے" } },
      { id: '6:73:9', arabic: "كُن", transliteration: "kun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Be", ur: "Be" } },
      { id: '6:73:10', arabic: "فَيَكُونُ ۚ", transliteration: "fayakūnu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ك و ن", meaning: { en: "and it is", ur: "اور it is" } },
      { id: '6:73:11', arabic: "قَوْلُهُ", transliteration: "qawluhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His word", ur: "His word" } },
      { id: '6:73:12', arabic: "ٱلْحَقُّ ۚ", transliteration: "l-ḥaqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the truth", ur: "(is) the سچ" } },
      { id: '6:73:13', arabic: "وَلَهُ", transliteration: "walahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for Him", ur: "اور for Him" } },
      { id: '6:73:14', arabic: "ٱلْمُلْكُ", transliteration: "l-mul'ku", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the Dominion", ur: "(is) the Dominion" } },
      { id: '6:73:15', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on the) Day", ur: "(پر the) دن" } },
      { id: '6:73:16', arabic: "يُنفَخُ", transliteration: "yunfakhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be blown", ur: "will be blown" } },
      { id: '6:73:17', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '6:73:18', arabic: "ٱلصُّورِ ۚ", transliteration: "l-ṣūri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the trumpet", ur: "the trumpet" } },
      { id: '6:73:19', arabic: "عَـٰلِمُ", transliteration: "ʿālimu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(He is) All-Knower", ur: "(وہ is) سب-Knower" } },
      { id: '6:73:20', arabic: "ٱلْغَيْبِ", transliteration: "l-ghaybi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the unseen", ur: "(of) the unseen" } },
      { id: '6:73:21', arabic: "وَٱلشَّهَـٰدَةِ ۚ", transliteration: "wal-shahādati", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the seen", ur: "اور the seen" } },
      { id: '6:73:22', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '6:73:23', arabic: "ٱلْحَكِيمُ", transliteration: "l-ḥakīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) the All-Wise", ur: "(is) the حکمت والا" } },
      { id: '6:73:24', arabic: "ٱلْخَبِيرُ", transliteration: "l-khabīru", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the All-Aware", ur: "the سب-Aware" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'موصوف + صفت' }
      ],
    },
  },
  74: {
    text: "۞ وَإِذْ قَالَ إِبْرَٰهِيمُ لِأَبِيهِ ءَازَرَ أَتَتَّخِذُ أَصْنَامًا ءَالِهَةً ۖ إِنِّىٓ أَرَىٰكَ وَقَوْمَكَ فِى ضَلَـٰلٍۢ مُّبِينٍۢ",
    translation: {
      en: "",
      ur: "اور (وہ وقت بھی یاد کرنے کے لائق ہے) جب ابراہیم نے اپنے باپ آزر سے کہا کہ تم بتوں کو کیا معبود بناتے ہو۔ میں دیکھتا ہوں کہ تم اور تمہاری قوم صریح گمراہی میں ہو",
    },
    words: [
      { id: '6:74:1', arabic: "۞ وَإِذْ", transliteration: "wa-idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '6:74:2', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "said", ur: "کہا" } },
      { id: '6:74:3', arabic: "إِبْرَٰهِيمُ", transliteration: "ib'rāhīmu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Ibrahim", ur: "Ibrahim" } },
      { id: '6:74:4', arabic: "لِأَبِيهِ", transliteration: "li-abīhi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to his father", ur: "کو his باپ" } },
      { id: '6:74:5', arabic: "ءَازَرَ", transliteration: "āzara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Azar", ur: "Azar" } },
      { id: '6:74:6', arabic: "أَتَتَّخِذُ", transliteration: "atattakhidhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you take", ur: "Do تم take" } },
      { id: '6:74:7', arabic: "أَصْنَامًا", transliteration: "aṣnāman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "idols", ur: "idols" } },
      { id: '6:74:8', arabic: "ءَالِهَةً ۖ", transliteration: "ālihatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) gods", ur: "(as) gods" } },
      { id: '6:74:9', arabic: "إِنِّىٓ", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I", ur: "بیشک, میں" } },
      { id: '6:74:10', arabic: "أَرَىٰكَ", transliteration: "arāka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[I] see you", ur: "[میں] دیکھنا تم" } },
      { id: '6:74:11', arabic: "وَقَوْمَكَ", transliteration: "waqawmaka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و م", meaning: { en: "and your people", ur: "اور your لوگ" } },
      { id: '6:74:12', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '6:74:13', arabic: "ضَلَـٰلٍۢ", transliteration: "ḍalālin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "error", ur: "error" } },
      { id: '6:74:14', arabic: "مُّبِينٍۢ", transliteration: "mubīnin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "manifest", ur: "manifest" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  75: {
    text: "وَكَذَٰلِكَ نُرِىٓ إِبْرَٰهِيمَ مَلَكُوتَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ وَلِيَكُونَ مِنَ ٱلْمُوقِنِينَ",
    translation: {
      en: "",
      ur: "اور ہم اس طرح ابراہیم کو آسمانوں اور زمین کے عجائبات دکھانے لگے تاکہ وہ خوب یقین کرنے والوں میں ہوجائیں",
    },
    words: [
      { id: '6:75:1', arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And thus", ur: "اور thus" } },
      { id: '6:75:2', arabic: "نُرِىٓ", transliteration: "nurī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We show(ed)", ur: "ہم show(ed)" } },
      { id: '6:75:3', arabic: "إِبْرَٰهِيمَ", transliteration: "ib'rāhīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Ibrahim", ur: "Ibrahim" } },
      { id: '6:75:4', arabic: "مَلَكُوتَ", transliteration: "malakūta", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the kingdom", ur: "the kingdom" } },
      { id: '6:75:5', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the heavens", ur: "(of) the آسمان" } },
      { id: '6:75:6', arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '6:75:7', arabic: "وَلِيَكُونَ", transliteration: "waliyakūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "so that he would be", ur: "so وہ وہ would be" } },
      { id: '6:75:8', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '6:75:9', arabic: "ٱلْمُوقِنِينَ", transliteration: "l-mūqinīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who are certain", ur: "the ones جو are certain" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  76: {
    text: "فَلَمَّا جَنَّ عَلَيْهِ ٱلَّيْلُ رَءَا كَوْكَبًۭا ۖ قَالَ هَـٰذَا رَبِّى ۖ فَلَمَّآ أَفَلَ قَالَ لَآ أُحِبُّ ٱلْـَٔافِلِينَ",
    translation: {
      en: "",
      ur: "(یعنی) جب رات نے ان کو (پردہٴ تاریکی سے) ڈھانپ لیا (تو آسمان میں) ایک ستارا نظر پڑا۔ کہنے لگے یہ میرا پروردگار ہے۔ جب وہ غائب ہوگیا تو کہنے لگے کہ مجھے غائب ہوجانے والے پسند نہیں",
    },
    words: [
      { id: '6:76:1', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So when", ur: "So when" } },
      { id: '6:76:2', arabic: "جَنَّ", transliteration: "janna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "covered", ur: "covered" } },
      { id: '6:76:3', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over him", ur: "اوپر him" } },
      { id: '6:76:4', arabic: "ٱلَّيْلُ", transliteration: "al-laylu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the night", ur: "the رات" } },
      { id: '6:76:5', arabic: "رَءَا", transliteration: "raā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he saw", ur: "وہ saw" } },
      { id: '6:76:6', arabic: "كَوْكَبًۭا ۖ", transliteration: "kawkaban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a star", ur: "a star" } },
      { id: '6:76:7', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '6:76:8', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "This", ur: "This" } },
      { id: '6:76:9', arabic: "رَبِّى ۖ", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) my Lord", ur: "(is) my رب" } },
      { id: '6:76:10', arabic: "فَلَمَّآ", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But when", ur: "لیکن when" } },
      { id: '6:76:11', arabic: "أَفَلَ", transliteration: "afala", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it set", ur: "it set" } },
      { id: '6:76:12', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '6:76:13', arabic: "لَآ", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '6:76:14', arabic: "أُحِبُّ", transliteration: "uḥibbu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(do) I like", ur: "(do) میں like" } },
      { id: '6:76:15', arabic: "ٱلْـَٔافِلِينَ", transliteration: "l-āfilīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones that set", ur: "the ones وہ set" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  77: {
    text: "فَلَمَّا رَءَا ٱلْقَمَرَ بَازِغًۭا قَالَ هَـٰذَا رَبِّى ۖ فَلَمَّآ أَفَلَ قَالَ لَئِن لَّمْ يَهْدِنِى رَبِّى لَأَكُونَنَّ مِنَ ٱلْقَوْمِ ٱلضَّآلِّينَ",
    translation: {
      en: "",
      ur: "پھر جب چاند کو دیکھا کہ چمک رہا ہے تو کہنے لگے یہ میرا پروردگار ہے۔ لیکن جب وہ بھی چھپ گیا تو بول اٹھے کہ میرا پروردگار مجھے سیدھا رستہ نہیں دکھائے گا تو میں ان لوگوں میں ہوجاؤں گا جو بھٹک رہے ہیں",
    },
    words: [
      { id: '6:77:1', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "When", ur: "When" } },
      { id: '6:77:2', arabic: "رَءَا", transliteration: "raā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he saw", ur: "وہ saw" } },
      { id: '6:77:3', arabic: "ٱلْقَمَرَ", transliteration: "l-qamara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the moon", ur: "the moon" } },
      { id: '6:77:4', arabic: "بَازِغًۭا", transliteration: "bāzighan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "rising", ur: "rising" } },
      { id: '6:77:5', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '6:77:6', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "This", ur: "This" } },
      { id: '6:77:7', arabic: "رَبِّى ۖ", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) my Lord", ur: "(is) my رب" } },
      { id: '6:77:8', arabic: "فَلَمَّآ", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But when", ur: "لیکن when" } },
      { id: '6:77:9', arabic: "أَفَلَ", transliteration: "afala", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it set", ur: "it set" } },
      { id: '6:77:10', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '6:77:11', arabic: "لَئِن", transliteration: "la-in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '6:77:12', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '6:77:13', arabic: "يَهْدِنِى", transliteration: "yahdinī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "guide me", ur: "guide me" } },
      { id: '6:77:14', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my Lord", ur: "my رب" } },
      { id: '6:77:15', arabic: "لَأَكُونَنَّ", transliteration: "la-akūnanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will surely be", ur: "میں will یقیناً be" } },
      { id: '6:77:16', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '6:77:17', arabic: "ٱلْقَوْمِ", transliteration: "l-qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "the people", ur: "the لوگ" } },
      { id: '6:77:18', arabic: "ٱلضَّآلِّينَ", transliteration: "l-ḍālīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who went astray", ur: "جو went astray" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  78: {
    text: "فَلَمَّا رَءَا ٱلشَّمْسَ بَازِغَةًۭ قَالَ هَـٰذَا رَبِّى هَـٰذَآ أَكْبَرُ ۖ فَلَمَّآ أَفَلَتْ قَالَ يَـٰقَوْمِ إِنِّى بَرِىٓءٌۭ مِّمَّا تُشْرِكُونَ",
    translation: {
      en: "",
      ur: "پھر جب سورج کو دیکھا کہ جگمگا رہا ہے تو کہنے لگے میرا پروردگار یہ ہے یہ سب سے بڑا ہے۔ مگر جب وہ بھی غروب ہوگیا تو کہنے لگے لوگو! جن چیزوں کو تم (خدا کا) شریک بناتے ہو میں ان سے بیزار ہوں",
    },
    words: [
      { id: '6:78:1', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "When", ur: "When" } },
      { id: '6:78:2', arabic: "رَءَا", transliteration: "raā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he saw", ur: "وہ saw" } },
      { id: '6:78:3', arabic: "ٱلشَّمْسَ", transliteration: "l-shamsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sun", ur: "the sun" } },
      { id: '6:78:4', arabic: "بَازِغَةًۭ", transliteration: "bāzighatan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "rising", ur: "rising" } },
      { id: '6:78:5', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '6:78:6', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "This (is)", ur: "This (is)" } },
      { id: '6:78:7', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my Lord", ur: "my رب" } },
      { id: '6:78:8', arabic: "هَـٰذَآ", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this (is)", ur: "this (is)" } },
      { id: '6:78:9', arabic: "أَكْبَرُ ۖ", transliteration: "akbaru", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "greater", ur: "greater" } },
      { id: '6:78:10', arabic: "فَلَمَّآ", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But when", ur: "لیکن when" } },
      { id: '6:78:11', arabic: "أَفَلَتْ", transliteration: "afalat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it set", ur: "it set" } },
      { id: '6:78:12', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '6:78:13', arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ" } },
      { id: '6:78:14', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I am", ur: "بیشک, میں am" } },
      { id: '6:78:15', arabic: "بَرِىٓءٌۭ", transliteration: "barīon", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "free", ur: "free" } },
      { id: '6:78:16', arabic: "مِّمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '6:78:17', arabic: "تُشْرِكُونَ", transliteration: "tush'rikūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you associate (with Allah)", ur: "تم associate (ساتھ اللہ)" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'موصوف + صفت' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  79: {
    text: "إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ حَنِيفًۭا ۖ وَمَآ أَنَا۠ مِنَ ٱلْمُشْرِكِينَ",
    translation: {
      en: "",
      ur: "میں نے سب سے یکسو ہو کر اپنے تئیں اسی ذات کی طرف متوجہ کیا جس نے آسمانوں اور زمین کو پیدا کیا ہے اور میں مشرکوں میں سے نہیں ہوں",
    },
    words: [
      { id: '6:79:1', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I", ur: "بیشک, میں" } },
      { id: '6:79:2', arabic: "وَجَّهْتُ", transliteration: "wajjahtu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "[I] have turned", ur: "[میں] have turned" } },
      { id: '6:79:3', arabic: "وَجْهِىَ", transliteration: "wajhiya", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "my face", ur: "my face" } },
      { id: '6:79:4', arabic: "لِلَّذِى", transliteration: "lilladhī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the One Who", ur: "کو the One جو" } },
      { id: '6:79:5', arabic: "فَطَرَ", transliteration: "faṭara", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "created", ur: "پیدا کیا" } },
      { id: '6:79:6', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '6:79:7', arabic: "وَٱلْأَرْضَ", transliteration: "wal-arḍa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '6:79:8', arabic: "حَنِيفًۭا ۖ", transliteration: "ḥanīfan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a true monotheist", ur: "(as) a true monotheist" } },
      { id: '6:79:9', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '6:79:10', arabic: "أَنَا۠", transliteration: "anā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I (am)", ur: "میں (am)" } },
      { id: '6:79:11', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '6:79:12', arabic: "ٱلْمُشْرِكِينَ", transliteration: "l-mush'rikīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the polytheists", ur: "the polytheists" } }
    ],
    structure: {
      relationships: [
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  80: {
    text: "وَحَآجَّهُۥ قَوْمُهُۥ ۚ قَالَ أَتُحَـٰٓجُّوٓنِّى فِى ٱللَّهِ وَقَدْ هَدَىٰنِ ۚ وَلَآ أَخَافُ مَا تُشْرِكُونَ بِهِۦٓ إِلَّآ أَن يَشَآءَ رَبِّى شَيْـًۭٔا ۗ وَسِعَ رَبِّى كُلَّ شَىْءٍ عِلْمًا ۗ أَفَلَا تَتَذَكَّرُونَ",
    translation: {
      en: "",
      ur: "اور ان کی قوم ان سے بحث کرنے لگی تو انہوں نے کہا کہ تم مجھ سے خدا کے بارےمیں (کیا) بحث کرتے ہو اس نے تو مجھے سیدھا رستہ دکھا دیا ہے۔ اور جن چیزوں کو تم اس کا شریک بناتے ہو میں ان سے نہیں ڈرتا۔ ہاں جو میرا پروردگار چاہے۔ میرا پروردگار اپنے علم سے ہر چیز پر احاطہ کئے ہوئے ہے۔ کیا تم خیال نہیں کرتے۔",
    },
    words: [
      { id: '6:80:1', arabic: "وَحَآجَّهُۥ", transliteration: "waḥājjahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And argued with him", ur: "اور argued ساتھ him" } },
      { id: '6:80:2', arabic: "قَوْمُهُۥ ۚ", transliteration: "qawmuhu", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "his people", ur: "his لوگ" } },
      { id: '6:80:3', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '6:80:4', arabic: "أَتُحَـٰٓجُّوٓنِّى", transliteration: "atuḥājjūnnī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you argue with me", ur: "Do تم argue ساتھ me" } },
      { id: '6:80:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "concerning", ur: "concerning" } },
      { id: '6:80:6', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:80:7', arabic: "وَقَدْ", transliteration: "waqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while certainly", ur: "while certainly" } },
      { id: '6:80:8', arabic: "هَدَىٰنِ ۚ", transliteration: "hadāni", pos: ['V'], posLabel: 'V', root: "ه د ي", meaning: { en: "He has guided me", ur: "وہ has guided me" } },
      { id: '6:80:9', arabic: "وَلَآ", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '6:80:10', arabic: "أَخَافُ", transliteration: "akhāfu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(do) I fear", ur: "(do) میں ڈرنا" } },
      { id: '6:80:11', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:80:12', arabic: "تُشْرِكُونَ", transliteration: "tush'rikūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you associate", ur: "تم associate" } },
      { id: '6:80:13', arabic: "بِهِۦٓ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Him", ur: "ساتھ Him" } },
      { id: '6:80:14', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "unless", ur: "unless" } },
      { id: '6:80:15', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '6:80:16', arabic: "يَشَآءَ", transliteration: "yashāa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "wills", ur: "wills" } },
      { id: '6:80:17', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my Lord", ur: "my رب" } },
      { id: '6:80:18', arabic: "شَيْـًۭٔا ۗ", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } },
      { id: '6:80:19', arabic: "وَسِعَ", transliteration: "wasiʿa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "Encompasses", ur: "Encompasses" } },
      { id: '6:80:20', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my Lord", ur: "my رب" } },
      { id: '6:80:21', arabic: "كُلَّ", transliteration: "kulla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '6:80:22', arabic: "شَىْءٍ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '6:80:23', arabic: "عِلْمًا ۗ", transliteration: "ʿil'man", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "(in) knowledge", ur: "(میں) knowledge" } },
      { id: '6:80:24', arabic: "أَفَلَا", transliteration: "afalā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Then will not", ur: "پھر will نہیں" } },
      { id: '6:80:25', arabic: "تَتَذَكَّرُونَ", transliteration: "tatadhakkarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you take heed", ur: "تم take heed" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'موصول + صلة' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'فعل + فاعل' }
      ],
    },
  },
  81: {
    text: "وَكَيْفَ أَخَافُ مَآ أَشْرَكْتُمْ وَلَا تَخَافُونَ أَنَّكُمْ أَشْرَكْتُم بِٱللَّهِ مَا لَمْ يُنَزِّلْ بِهِۦ عَلَيْكُمْ سُلْطَـٰنًۭا ۚ فَأَىُّ ٱلْفَرِيقَيْنِ أَحَقُّ بِٱلْأَمْنِ ۖ إِن كُنتُمْ تَعْلَمُونَ",
    translation: {
      en: "",
      ur: "بھلا میں ان چیزوں سے جن کو تم (خدا کا) شریک بناتے ہو کیونکرڈروں جب کہ تم اس سے نہیں ڈرتے کہ خدا کے ساتھ شریک بناتے ہو جس کی اس نے کوئی سند نازل نہیں کی۔ اب دونوں فریق میں سے کون سا فریق امن (اور جمعیت خاطر) کا مستحق ہے۔ اگر سمجھ رکھتے ہو (تو بتاؤ)",
    },
    words: [
      { id: '6:81:1', arabic: "وَكَيْفَ", transliteration: "wakayfa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And how", ur: "اور how" } },
      { id: '6:81:2', arabic: "أَخَافُ", transliteration: "akhāfu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "could I fear", ur: "could میں ڈرنا" } },
      { id: '6:81:3', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:81:4', arabic: "أَشْرَكْتُمْ", transliteration: "ashraktum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you associate (with Allah)", ur: "تم associate (ساتھ اللہ)" } },
      { id: '6:81:5', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while not", ur: "while نہیں" } },
      { id: '6:81:6', arabic: "تَخَافُونَ", transliteration: "takhāfūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you fear", ur: "تم ڈرنا" } },
      { id: '6:81:7', arabic: "أَنَّكُمْ", transliteration: "annakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that you", ur: "وہ تم" } },
      { id: '6:81:8', arabic: "أَشْرَكْتُم", transliteration: "ashraktum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "have associated", ur: "have associated" } },
      { id: '6:81:9', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Allah", ur: "ساتھ اللہ" } },
      { id: '6:81:10', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:81:11', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:81:12', arabic: "يُنَزِّلْ", transliteration: "yunazzil", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "did He send down", ur: "did وہ send down" } },
      { id: '6:81:13', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for it", ur: "for it" } },
      { id: '6:81:14', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '6:81:15', arabic: "سُلْطَـٰنًۭا ۚ", transliteration: "sul'ṭānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any authority", ur: "any authority" } },
      { id: '6:81:16', arabic: "فَأَىُّ", transliteration: "fa-ayyu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So which", ur: "So جو" } },
      { id: '6:81:17', arabic: "ٱلْفَرِيقَيْنِ", transliteration: "l-farīqayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the two parties", ur: "(of) the two parties" } },
      { id: '6:81:18', arabic: "أَحَقُّ", transliteration: "aḥaqqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has more right", ur: "has more right" } },
      { id: '6:81:19', arabic: "بِٱلْأَمْنِ ۖ", transliteration: "bil-amni", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to security", ur: "کو security" } },
      { id: '6:81:20', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '6:81:21', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '6:81:22', arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "know", ur: "جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'نفی + فعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  82: {
    text: "ٱلَّذِينَ ءَامَنُوا۟ وَلَمْ يَلْبِسُوٓا۟ إِيمَـٰنَهُم بِظُلْمٍ أُو۟لَـٰٓئِكَ لَهُمُ ٱلْأَمْنُ وَهُم مُّهْتَدُونَ",
    translation: {
      en: "",
      ur: "جو لوگ ایمان لائے اور اپنے ایمان کو (شرک کے) ظلم سے مخلوط نہیں کیا ان کے امن (اور جمعیت خاطر) ہے اور وہی ہدایت پانے والے ہیں",
    },
    words: [
      { id: '6:82:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '6:82:2', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '6:82:3', arabic: "وَلَمْ", transliteration: "walam", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (did) not", ur: "اور (did) نہیں" } },
      { id: '6:82:4', arabic: "يَلْبِسُوٓا۟", transliteration: "yalbisū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "mix", ur: "mix" } },
      { id: '6:82:5', arabic: "إِيمَـٰنَهُم", transliteration: "īmānahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their belief", ur: "their belief" } },
      { id: '6:82:6', arabic: "بِظُلْمٍ", transliteration: "biẓul'min", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with wrong", ur: "ساتھ wrong" } },
      { id: '6:82:7', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those", ur: "those" } },
      { id: '6:82:8', arabic: "لَهُمُ", transliteration: "lahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '6:82:9', arabic: "ٱلْأَمْنُ", transliteration: "l-amnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the security", ur: "(is) the security" } },
      { id: '6:82:10', arabic: "وَهُم", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '6:82:11', arabic: "مُّهْتَدُونَ", transliteration: "muh'tadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) rightly guided", ur: "(are) rightly guided" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  83: {
    text: "وَتِلْكَ حُجَّتُنَآ ءَاتَيْنَـٰهَآ إِبْرَٰهِيمَ عَلَىٰ قَوْمِهِۦ ۚ نَرْفَعُ دَرَجَـٰتٍۢ مَّن نَّشَآءُ ۗ إِنَّ رَبَّكَ حَكِيمٌ عَلِيمٌۭ",
    translation: {
      en: "",
      ur: "اور یہ ہماری دلیل تھی جو ہم نے ابراہیم کو ان کی قوم کے مقابلے میں عطا کی تھی۔ ہم جس کے چاہتے ہیں درجے بلند کردیتے ہیں۔ بےشک تمہارا پروردگار دانا اور خبردار ہے",
    },
    words: [
      { id: '6:83:1', arabic: "وَتِلْكَ", transliteration: "watil'ka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And this", ur: "اور this" } },
      { id: '6:83:2', arabic: "حُجَّتُنَآ", transliteration: "ḥujjatunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Our argument", ur: "(is) Our argument" } },
      { id: '6:83:3', arabic: "ءَاتَيْنَـٰهَآ", transliteration: "ātaynāhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We gave it", ur: "ہم gave it" } },
      { id: '6:83:4', arabic: "إِبْرَٰهِيمَ", transliteration: "ib'rāhīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) Ibrahim", ur: "(کو) Ibrahim" } },
      { id: '6:83:5', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '6:83:6', arabic: "قَوْمِهِۦ ۚ", transliteration: "qawmihi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "his people", ur: "his لوگ" } },
      { id: '6:83:7', arabic: "نَرْفَعُ", transliteration: "narfaʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We raise", ur: "ہم raise" } },
      { id: '6:83:8', arabic: "دَرَجَـٰتٍۢ", transliteration: "darajātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) degrees", ur: "(by) degrees" } },
      { id: '6:83:9', arabic: "مَّن", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '6:83:10', arabic: "نَّشَآءُ ۗ", transliteration: "nashāu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will", ur: "ہم will" } },
      { id: '6:83:11', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '6:83:12', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '6:83:13', arabic: "حَكِيمٌ", transliteration: "ḥakīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) All-Wise", ur: "(is) حکمت والا" } },
      { id: '6:83:14', arabic: "عَلِيمٌۭ", transliteration: "ʿalīmun", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "All-Knowing", ur: "سب جاننے والا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'موصوف + صفت' }
      ],
    },
  },
  84: {
    text: "وَوَهَبْنَا لَهُۥٓ إِسْحَـٰقَ وَيَعْقُوبَ ۚ كُلًّا هَدَيْنَا ۚ وَنُوحًا هَدَيْنَا مِن قَبْلُ ۖ وَمِن ذُرِّيَّتِهِۦ دَاوُۥدَ وَسُلَيْمَـٰنَ وَأَيُّوبَ وَيُوسُفَ وَمُوسَىٰ وَهَـٰرُونَ ۚ وَكَذَٰلِكَ نَجْزِى ٱلْمُحْسِنِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے ان کو اسحاق اور یعقوب بخشے۔ (اور) سب کو ہدایت دی۔ اور پہلے نوح کو بھی ہدایت دی تھی اور ان کی اولاد میں سے داؤد اور سلیمان اور ایوب اور یوسف اور موسیٰ اور ہارون کو بھی۔ اور ہم نیک لوگوں کو ایسا ہی بدلا دیا کرتے ہیں",
    },
    words: [
      { id: '6:84:1', arabic: "وَوَهَبْنَا", transliteration: "wawahabnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We bestowed", ur: "اور ہم bestowed" } },
      { id: '6:84:2', arabic: "لَهُۥٓ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to him", ur: "کو him" } },
      { id: '6:84:3', arabic: "إِسْحَـٰقَ", transliteration: "is'ḥāqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Isaac", ur: "Isaac" } },
      { id: '6:84:4', arabic: "وَيَعْقُوبَ ۚ", transliteration: "wayaʿqūba", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Yaqub", ur: "اور Yaqub" } },
      { id: '6:84:5', arabic: "كُلًّا", transliteration: "kullan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } },
      { id: '6:84:6', arabic: "هَدَيْنَا ۚ", transliteration: "hadaynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We guided", ur: "ہم guided" } },
      { id: '6:84:7', arabic: "وَنُوحًا", transliteration: "wanūḥan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Nuh", ur: "اور Nuh" } },
      { id: '6:84:8', arabic: "هَدَيْنَا", transliteration: "hadaynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We guided", ur: "ہم guided" } },
      { id: '6:84:9', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:84:10', arabic: "قَبْلُ ۖ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '6:84:11', arabic: "وَمِن", transliteration: "wamin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and of", ur: "اور of" } },
      { id: '6:84:12', arabic: "ذُرِّيَّتِهِۦ", transliteration: "dhurriyyatihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his descendents", ur: "his descendents" } },
      { id: '6:84:13', arabic: "دَاوُۥدَ", transliteration: "dāwūda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Dawood", ur: "Dawood" } },
      { id: '6:84:14', arabic: "وَسُلَيْمَـٰنَ", transliteration: "wasulaymāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Sulaiman", ur: "اور Sulaiman" } },
      { id: '6:84:15', arabic: "وَأَيُّوبَ", transliteration: "wa-ayyūba", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Ayyub", ur: "اور Ayyub" } },
      { id: '6:84:16', arabic: "وَيُوسُفَ", transliteration: "wayūsufa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Yusuf", ur: "اور Yusuf" } },
      { id: '6:84:17', arabic: "وَمُوسَىٰ", transliteration: "wamūsā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "م و س", meaning: { en: "and Musa", ur: "اور Musa" } },
      { id: '6:84:18', arabic: "وَهَـٰرُونَ ۚ", transliteration: "wahārūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Harun", ur: "اور Harun" } },
      { id: '6:84:19', arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And thus", ur: "اور thus" } },
      { id: '6:84:20', arabic: "نَجْزِى", transliteration: "najzī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We reward", ur: "ہم ثواب" } },
      { id: '6:84:21', arabic: "ٱلْمُحْسِنِينَ", transliteration: "l-muḥ'sinīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the good-doers", ur: "the اچھا-doers" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 20, to: 21, label: 'فعل + فاعل' }
      ],
    },
  },
  85: {
    text: "وَزَكَرِيَّا وَيَحْيَىٰ وَعِيسَىٰ وَإِلْيَاسَ ۖ كُلٌّۭ مِّنَ ٱلصَّـٰلِحِينَ",
    translation: {
      en: "",
      ur: "اور زکریا اور یحییٰ اور عیسیٰ اور الیاس کو بھی۔ یہ سب نیکوکار تھے",
    },
    words: [
      { id: '6:85:1', arabic: "وَزَكَرِيَّا", transliteration: "wazakariyyā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Zakariya", ur: "اور Zakariya" } },
      { id: '6:85:2', arabic: "وَيَحْيَىٰ", transliteration: "wayaḥyā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Yahya", ur: "اور Yahya" } },
      { id: '6:85:3', arabic: "وَعِيسَىٰ", transliteration: "waʿīsā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع ي س", meaning: { en: "and Isa", ur: "اور Isa" } },
      { id: '6:85:4', arabic: "وَإِلْيَاسَ ۖ", transliteration: "wa-il'yāsa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Elijah ", ur: "اور Elijah " } },
      { id: '6:85:5', arabic: "كُلٌّۭ", transliteration: "kullun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all (were)", ur: "سب (were)" } },
      { id: '6:85:6', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '6:85:7', arabic: "ٱلصَّـٰلِحِينَ", transliteration: "l-ṣāliḥīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the righteous", ur: "the نیک" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },
  86: {
    text: "وَإِسْمَـٰعِيلَ وَٱلْيَسَعَ وَيُونُسَ وَلُوطًۭا ۚ وَكُلًّۭا فَضَّلْنَا عَلَى ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "اور اسمٰعیل اور الیسع اور یونس اور لوط کو بھی۔ اور ان سب کو جہان کے لوگوں پر فضلیت بخشی تھی",
    },
    words: [
      { id: '6:86:1', arabic: "وَإِسْمَـٰعِيلَ", transliteration: "wa-is'māʿīla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Ishmael", ur: "اور Ishmael" } },
      { id: '6:86:2', arabic: "وَٱلْيَسَعَ", transliteration: "wal-yasaʿa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Elisha", ur: "اور Elisha" } },
      { id: '6:86:3', arabic: "وَيُونُسَ", transliteration: "wayūnusa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Yunus", ur: "اور Yunus" } },
      { id: '6:86:4', arabic: "وَلُوطًۭا ۚ", transliteration: "walūṭan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Lut", ur: "اور Lut" } },
      { id: '6:86:5', arabic: "وَكُلًّۭا", transliteration: "wakullan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and all", ur: "اور سب" } },
      { id: '6:86:6', arabic: "فَضَّلْنَا", transliteration: "faḍḍalnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "We preferred", ur: "ہم preferred" } },
      { id: '6:86:7', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '6:86:8', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the worlds", ur: "the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  87: {
    text: "وَمِنْ ءَابَآئِهِمْ وَذُرِّيَّـٰتِهِمْ وَإِخْوَٰنِهِمْ ۖ وَٱجْتَبَيْنَـٰهُمْ وَهَدَيْنَـٰهُمْ إِلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ",
    translation: {
      en: "",
      ur: "اور بعض بعض کو ان کے باپ دادا اور اولاد اور بھائیوں میں سے بھی۔ اور ان کو برگزیدہ بھی کیا تھا اور سیدھا رستہ بھی دکھایا تھا",
    },
    words: [
      { id: '6:87:1', arabic: "وَمِنْ", transliteration: "wamin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And from", ur: "اور سے" } },
      { id: '6:87:2', arabic: "ءَابَآئِهِمْ", transliteration: "ābāihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their fathers", ur: "their fathers" } },
      { id: '6:87:3', arabic: "وَذُرِّيَّـٰتِهِمْ", transliteration: "wadhurriyyātihim", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and their descendents", ur: "اور their descendents" } },
      { id: '6:87:4', arabic: "وَإِخْوَٰنِهِمْ ۖ", transliteration: "wa-ikh'wānihim", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and their brothers ", ur: "اور their brothers " } },
      { id: '6:87:5', arabic: "وَٱجْتَبَيْنَـٰهُمْ", transliteration: "wa-ij'tabaynāhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We chose them", ur: "اور ہم chose them" } },
      { id: '6:87:6', arabic: "وَهَدَيْنَـٰهُمْ", transliteration: "wahadaynāhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We guided them", ur: "اور ہم guided them" } },
      { id: '6:87:7', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '6:87:8', arabic: "صِرَٰطٍۢ", transliteration: "ṣirāṭin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a path", ur: "a راستہ" } },
      { id: '6:87:9', arabic: "مُّسْتَقِيمٍۢ", transliteration: "mus'taqīmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "straight", ur: "سیدھا" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  88: {
    text: "ذَٰلِكَ هُدَى ٱللَّهِ يَهْدِى بِهِۦ مَن يَشَآءُ مِنْ عِبَادِهِۦ ۚ وَلَوْ أَشْرَكُوا۟ لَحَبِطَ عَنْهُم مَّا كَانُوا۟ يَعْمَلُونَ",
    translation: {
      en: "",
      ur: "یہ خدا کی ہدایت ہے اس پر اپنے بندوں میں سے جسے چاہے چلائے۔ اور اگر وہ لوگ شرک کرتے تو جو عمل وہ کرتے تھے سب ضائع ہوجاتے",
    },
    words: [
      { id: '6:88:1', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '6:88:2', arabic: "هُدَى", transliteration: "hudā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is the) Guidance", ur: "(is the) Guidance" } },
      { id: '6:88:3', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '6:88:4', arabic: "يَهْدِى", transliteration: "yahdī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He guides", ur: "وہ guides" } },
      { id: '6:88:5', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '6:88:6', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '6:88:7', arabic: "يَشَآءُ", transliteration: "yashāu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He wills", ur: "وہ wills" } },
      { id: '6:88:8', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '6:88:9', arabic: "عِبَادِهِۦ ۚ", transliteration: "ʿibādihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His slaves", ur: "His slaves" } },
      { id: '6:88:10', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '6:88:11', arabic: "أَشْرَكُوا۟", transliteration: "ashrakū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they (had) associated partners (with Allah)", ur: "وہ لوگ (had) associated partners (ساتھ اللہ)" } },
      { id: '6:88:12', arabic: "لَحَبِطَ", transliteration: "laḥabiṭa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely (would be) worthless", ur: "یقیناً (would be) worthless" } },
      { id: '6:88:13', arabic: "عَنْهُم", transliteration: "ʿanhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '6:88:14', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:88:15', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '6:88:16', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "do", ur: "do" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  89: {
    text: "أُو۟لَـٰٓئِكَ ٱلَّذِينَ ءَاتَيْنَـٰهُمُ ٱلْكِتَـٰبَ وَٱلْحُكْمَ وَٱلنُّبُوَّةَ ۚ فَإِن يَكْفُرْ بِهَا هَـٰٓؤُلَآءِ فَقَدْ وَكَّلْنَا بِهَا قَوْمًۭا لَّيْسُوا۟ بِهَا بِكَـٰفِرِينَ",
    translation: {
      en: "",
      ur: "یہ وہ لوگ تھے جن کو ہم نے کتاب اور حکم (شریعت) اور نبوت عطا فرمائی تھی۔ اگر یہ (کفار) ان باتوں سے انکار کریں تو ہم نے ان پر (ایمان لانے کے لئے) ایسے لوگ مقرر کردیئے ہیں کہ وہ ان سے کبھی انکار کرنے والے نہیں",
    },
    words: [
      { id: '6:89:1', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those ", ur: "Those " } },
      { id: '6:89:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) ones whom", ur: "(are) ones whom" } },
      { id: '6:89:3', arabic: "ءَاتَيْنَـٰهُمُ", transliteration: "ātaynāhumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We gave them", ur: "ہم gave them" } },
      { id: '6:89:4', arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '6:89:5', arabic: "وَٱلْحُكْمَ", transliteration: "wal-ḥuk'ma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the judgment", ur: "اور the judgment" } },
      { id: '6:89:6', arabic: "وَٱلنُّبُوَّةَ ۚ", transliteration: "wal-nubuwata", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Prophethood", ur: "اور the Prophethood" } },
      { id: '6:89:7', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '6:89:8', arabic: "يَكْفُرْ", transliteration: "yakfur", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '6:89:9', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '6:89:10', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "these", ur: "these" } },
      { id: '6:89:11', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed", ur: "پھر بیشک" } },
      { id: '6:89:12', arabic: "وَكَّلْنَا", transliteration: "wakkalnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "We have entrusted", ur: "ہم have entrusted" } },
      { id: '6:89:13', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "it", ur: "it" } },
      { id: '6:89:14', arabic: "قَوْمًۭا", transliteration: "qawman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) a people", ur: "(کو) a لوگ" } },
      { id: '6:89:15', arabic: "لَّيْسُوا۟", transliteration: "laysū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who are not", ur: "جو are نہیں" } },
      { id: '6:89:16', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '6:89:17', arabic: "بِكَـٰفِرِينَ", transliteration: "bikāfirīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "disbelievers", ur: "کافر" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  90: {
    text: "أُو۟لَـٰٓئِكَ ٱلَّذِينَ هَدَى ٱللَّهُ ۖ فَبِهُدَىٰهُمُ ٱقْتَدِهْ ۗ قُل لَّآ أَسْـَٔلُكُمْ عَلَيْهِ أَجْرًا ۖ إِنْ هُوَ إِلَّا ذِكْرَىٰ لِلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "یہ وہ لوگ ہیں جن کو خدا نے ہدایت دی تھی تو تم انہیں کی ہدایت کی پیروی کرو۔ کہہ دو کہ میں تم سے اس (قرآن) کا صلہ نہیں مانگتا۔ یہ تو جہان کے لوگوں کے لئےمحض نصیحت ہے",
    },
    words: [
      { id: '6:90:1', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those", ur: "Those" } },
      { id: '6:90:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) ones whom", ur: "(are) ones whom" } },
      { id: '6:90:3', arabic: "هَدَى", transliteration: "hadā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(have been) guided", ur: "(have been) guided" } },
      { id: '6:90:4', arabic: "ٱللَّهُ ۖ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '6:90:5', arabic: "فَبِهُدَىٰهُمُ", transliteration: "fabihudāhumu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so of their guidance", ur: "so of their guidance" } },
      { id: '6:90:6', arabic: "ٱقْتَدِهْ ۗ", transliteration: "iq'tadih", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you follow", ur: "تم follow" } },
      { id: '6:90:7', arabic: "قُل", transliteration: "qul", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '6:90:8', arabic: "لَّآ", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '6:90:9', arabic: "أَسْـَٔلُكُمْ", transliteration: "asalukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I ask you", ur: "میں ask تم" } },
      { id: '6:90:10', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for it", ur: "for it" } },
      { id: '6:90:11', arabic: "أَجْرًا ۖ", transliteration: "ajran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any reward", ur: "any ثواب" } },
      { id: '6:90:12', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '6:90:13', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "(is) it", ur: "(is) it" } },
      { id: '6:90:14', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '6:90:15', arabic: "ذِكْرَىٰ", transliteration: "dhik'rā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a reminder", ur: "a reminder" } },
      { id: '6:90:16', arabic: "لِلْعَـٰلَمِينَ", transliteration: "lil'ʿālamīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the worlds", ur: "for the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  91: {
    text: "وَمَا قَدَرُوا۟ ٱللَّهَ حَقَّ قَدْرِهِۦٓ إِذْ قَالُوا۟ مَآ أَنزَلَ ٱللَّهُ عَلَىٰ بَشَرٍۢ مِّن شَىْءٍۢ ۗ قُلْ مَنْ أَنزَلَ ٱلْكِتَـٰبَ ٱلَّذِى جَآءَ بِهِۦ مُوسَىٰ نُورًۭا وَهُدًۭى لِّلنَّاسِ ۖ تَجْعَلُونَهُۥ قَرَاطِيسَ تُبْدُونَهَا وَتُخْفُونَ كَثِيرًۭا ۖ وَعُلِّمْتُم مَّا لَمْ تَعْلَمُوٓا۟ أَنتُمْ وَلَآ ءَابَآؤُكُمْ ۖ قُلِ ٱللَّهُ ۖ ثُمَّ ذَرْهُمْ فِى خَوْضِهِمْ يَلْعَبُونَ",
    translation: {
      en: "",
      ur: "اور ان لوگوں نے خدا کی قدر جیسی جاننی چاہیئے تھی نہ جانی۔ جب انہوں نے کہا کہ خدا نے انسان پر (وحی اور کتاب وغیرہ) کچھ بھی نازل نہیں کیا۔ کہو جو کتاب موسیٰ لے کر آئے تھے اسے کس نے نازل کیا تھا جو لوگوں کے لئے نور اور ہدایت تھی اور جسے تم نے علیحدہ علیحدہ اوراق (پر نقل) کر رکھا ہے ان (کے کچھ حصے) کو تو ظاہر کرتے ہو اور اکثر کو چھپاتے ہو۔ اور تم کو وہ باتیں سکھائی گئیں جن کو نہ تم جانتے تھے اور نہ تمہارے باپ دادا۔ کہہ دو (اس کتاب کو) خدا ہی نے (نازل کیا تھا) پھر ان کو چھوڑ دیا کہ اپنی بیہودہ بکواس میں کھیلتے رہیں",
    },
    words: [
      { id: '6:91:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '6:91:2', arabic: "قَدَرُوا۟", transliteration: "qadarū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they appraised", ur: "وہ لوگ appraised" } },
      { id: '6:91:3', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:91:4', arabic: "حَقَّ", transliteration: "ḥaqqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) true", ur: "(ساتھ) true" } },
      { id: '6:91:5', arabic: "قَدْرِهِۦٓ", transliteration: "qadrihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[of his] appraisal", ur: "[of his] appraisal" } },
      { id: '6:91:6', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '6:91:7', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they said", ur: "وہ لوگ کہا" } },
      { id: '6:91:8', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '6:91:9', arabic: "أَنزَلَ", transliteration: "anzala", pos: ['V'], posLabel: 'V', root: "ن ز ل", meaning: { en: "revealed", ur: "revealed" } },
      { id: '6:91:10', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '6:91:11', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '6:91:12', arabic: "بَشَرٍۢ", transliteration: "basharin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a human being", ur: "a human being" } },
      { id: '6:91:13', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[of]", ur: "[of]" } },
      { id: '6:91:14', arabic: "شَىْءٍۢ ۗ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } },
      { id: '6:91:15', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '6:91:16', arabic: "مَنْ", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Who", ur: "جو" } },
      { id: '6:91:17', arabic: "أَنزَلَ", transliteration: "anzala", pos: ['V'], posLabel: 'V', root: "ن ز ل", meaning: { en: "revealed", ur: "revealed" } },
      { id: '6:91:18', arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '6:91:19', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '6:91:20', arabic: "جَآءَ", transliteration: "jāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "brought", ur: "brought" } },
      { id: '6:91:21', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[it]", ur: "[it]" } },
      { id: '6:91:22', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '6:91:23', arabic: "نُورًۭا", transliteration: "nūran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a light", ur: "(as) a light" } },
      { id: '6:91:24', arabic: "وَهُدًۭى", transliteration: "wahudan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and guidance", ur: "اور guidance" } },
      { id: '6:91:25', arabic: "لِّلنَّاسِ ۖ", transliteration: "lilnnāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for the people", ur: "for the لوگ" } },
      { id: '6:91:26', arabic: "تَجْعَلُونَهُۥ", transliteration: "tajʿalūnahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You make it", ur: "تم make it" } },
      { id: '6:91:27', arabic: "قَرَاطِيسَ", transliteration: "qarāṭīsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(into) parchments", ur: "(into) parchments" } },
      { id: '6:91:28', arabic: "تُبْدُونَهَا", transliteration: "tub'dūnahā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you disclose (some of) it", ur: "تم disclose (some of) it" } },
      { id: '6:91:29', arabic: "وَتُخْفُونَ", transliteration: "watukh'fūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and you conceal", ur: "اور تم conceal" } },
      { id: '6:91:30', arabic: "كَثِيرًۭا ۖ", transliteration: "kathīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "much (of it)", ur: "much (of it)" } },
      { id: '6:91:31', arabic: "وَعُلِّمْتُم", transliteration: "waʿullim'tum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And you were taught", ur: "اور تم were taught" } },
      { id: '6:91:32', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:91:33', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:91:34', arabic: "تَعْلَمُوٓا۟", transliteration: "taʿlamū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "knew", ur: "knew" } },
      { id: '6:91:35', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '6:91:36', arabic: "وَلَآ", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '6:91:37', arabic: "ءَابَآؤُكُمْ ۖ", transliteration: "ābāukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your forefathers", ur: "your forefathers" } },
      { id: '6:91:38', arabic: "قُلِ", transliteration: "quli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '6:91:39', arabic: "ٱللَّهُ ۖ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah (revealed it)", ur: "اللہ (revealed it)" } },
      { id: '6:91:40', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '6:91:41', arabic: "ذَرْهُمْ", transliteration: "dharhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "leave them", ur: "leave them" } },
      { id: '6:91:42', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '6:91:43', arabic: "خَوْضِهِمْ", transliteration: "khawḍihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their discourse ", ur: "their discourse " } },
      { id: '6:91:44', arabic: "يَلْعَبُونَ", transliteration: "yalʿabūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "playing", ur: "playing" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'جار + مجرور' },
        { from: 26, to: 27, label: 'فعل + فاعل' },
        { from: 33, to: 34, label: 'نفی + فعل' },
        { from: 42, to: 43, label: 'جار + مجرور' }
      ],
    },
  },
  92: {
    text: "وَهَـٰذَا كِتَـٰبٌ أَنزَلْنَـٰهُ مُبَارَكٌۭ مُّصَدِّقُ ٱلَّذِى بَيْنَ يَدَيْهِ وَلِتُنذِرَ أُمَّ ٱلْقُرَىٰ وَمَنْ حَوْلَهَا ۚ وَٱلَّذِينَ يُؤْمِنُونَ بِٱلْـَٔاخِرَةِ يُؤْمِنُونَ بِهِۦ ۖ وَهُمْ عَلَىٰ صَلَاتِهِمْ يُحَافِظُونَ",
    translation: {
      en: "",
      ur: "اور (ویسی ہی) یہ کتاب ہے جسے ہم نے نازل کیا ہے بابرکت جو اپنے سے پہلی (کتابوں) کی تصدیق کرتی ہے اور (جو) اس لئے (نازل کی گئی ہے) کہ تم مکے اور اس کے آس پاس کے لوگوں کو آگاہ کردو۔ اور جو لوگ آخرت پر ایمان رکھتے ہیں وہ اس کتاب پر بھی ایمان رکھتے ہیں اور وہ اپنی نمازوں کی پوری خبر رکھتے ہیں",
    },
    words: [
      { id: '6:92:1', arabic: "وَهَـٰذَا", transliteration: "wahādhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And this", ur: "اور this" } },
      { id: '6:92:2', arabic: "كِتَـٰبٌ", transliteration: "kitābun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a Book", ur: "(is) a کتاب" } },
      { id: '6:92:3', arabic: "أَنزَلْنَـٰهُ", transliteration: "anzalnāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have revealed it", ur: "ہم have revealed it" } },
      { id: '6:92:4', arabic: "مُبَارَكٌۭ", transliteration: "mubārakun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "blessed", ur: "blessed" } },
      { id: '6:92:5', arabic: "مُّصَدِّقُ", transliteration: "muṣaddiqu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "confirming", ur: "confirming" } },
      { id: '6:92:6', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '6:92:7', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(came) before", ur: "(came) پہلے" } },
      { id: '6:92:8', arabic: "يَدَيْهِ", transliteration: "yadayhi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "its hands", ur: "its hands" } },
      { id: '6:92:9', arabic: "وَلِتُنذِرَ", transliteration: "walitundhira", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "so that you may warn", ur: "so وہ تم may warn" } },
      { id: '6:92:10', arabic: "أُمَّ", transliteration: "umma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) mother", ur: "(the) ماں" } },
      { id: '6:92:11', arabic: "ٱلْقُرَىٰ", transliteration: "l-qurā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the cities", ur: "(of) the cities" } },
      { id: '6:92:12', arabic: "وَمَنْ", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and who", ur: "اور جو" } },
      { id: '6:92:13', arabic: "حَوْلَهَا ۚ", transliteration: "ḥawlahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) around it", ur: "(are) around it" } },
      { id: '6:92:14', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '6:92:15', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '6:92:16', arabic: "بِٱلْـَٔاخِرَةِ", transliteration: "bil-ākhirati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in the Hereafter", ur: "میں the آخرت" } },
      { id: '6:92:17', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "they believe", ur: "وہ لوگ ایمان لانا" } },
      { id: '6:92:18', arabic: "بِهِۦ ۖ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '6:92:19', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '6:92:20', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '6:92:21', arabic: "صَلَاتِهِمْ", transliteration: "ṣalātihim", pos: ['N'], posLabel: 'N', root: "ص ل و", meaning: { en: "their prayers", ur: "their prayers" } },
      { id: '6:92:22', arabic: "يُحَافِظُونَ", transliteration: "yuḥāfiẓūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) guarding", ur: "(are) guarding" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 20, to: 21, label: 'جار + مجرور' }
      ],
    },
  },
  93: {
    text: "وَمَنْ أَظْلَمُ مِمَّنِ ٱفْتَرَىٰ عَلَى ٱللَّهِ كَذِبًا أَوْ قَالَ أُوحِىَ إِلَىَّ وَلَمْ يُوحَ إِلَيْهِ شَىْءٌۭ وَمَن قَالَ سَأُنزِلُ مِثْلَ مَآ أَنزَلَ ٱللَّهُ ۗ وَلَوْ تَرَىٰٓ إِذِ ٱلظَّـٰلِمُونَ فِى غَمَرَٰتِ ٱلْمَوْتِ وَٱلْمَلَـٰٓئِكَةُ بَاسِطُوٓا۟ أَيْدِيهِمْ أَخْرِجُوٓا۟ أَنفُسَكُمُ ۖ ٱلْيَوْمَ تُجْزَوْنَ عَذَابَ ٱلْهُونِ بِمَا كُنتُمْ تَقُولُونَ عَلَى ٱللَّهِ غَيْرَ ٱلْحَقِّ وَكُنتُمْ عَنْ ءَايَـٰتِهِۦ تَسْتَكْبِرُونَ",
    translation: {
      en: "",
      ur: "اور اس سے بڑھ کر ظالم کون ہوگا جو خدا پر جھوٹ افتراء کرے۔ یا یہ کہے کہ مجھ پر وحی آئی ہے حالانکہ اس پر کچھ بھی وحی نہ آئی ہو اور جو یہ کہے کہ جس طرح کی کتاب خدا نے نازل کی ہے اس طرح کی میں بھی بنا لیتا ہوں۔ اور کاش تم ان ظالم (یعنی مشرک) لوگوں کو اس وقت دیکھو جب موت کی سختیوں میں (مبتلا) ہوں اور فرشتے (ان کی طرف عذاب کے لئے) ہاتھ بڑھا رہے ہوں کہ نکالو اپنی جانیں۔ آج تم کو ذلت کے عذاب کی سزا دی جائے گی اس لئے کہ تم خدا پر جھوٹ بولا کرتے تھے اور اس کی آیتوں سے سرکشی کرتے تھے",
    },
    words: [
      { id: '6:93:1', arabic: "وَمَنْ", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And who", ur: "اور جو" } },
      { id: '6:93:2', arabic: "أَظْلَمُ", transliteration: "aẓlamu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) more unjust", ur: "(is) more unjust" } },
      { id: '6:93:3', arabic: "مِمَّنِ", transliteration: "mimmani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than (one) who", ur: "than (one) جو" } },
      { id: '6:93:4', arabic: "ٱفْتَرَىٰ", transliteration: "if'tarā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "invents", ur: "invents" } },
      { id: '6:93:5', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "about", ur: "about" } },
      { id: '6:93:6', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:93:7', arabic: "كَذِبًا", transliteration: "kadhiban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a lie", ur: "a lie" } },
      { id: '6:93:8', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '6:93:9', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "said", ur: "کہا" } },
      { id: '6:93:10', arabic: "أُوحِىَ", transliteration: "ūḥiya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "It has been inspired", ur: "It has been inspired" } },
      { id: '6:93:11', arabic: "إِلَىَّ", transliteration: "ilayya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to me", ur: "کو me" } },
      { id: '6:93:12', arabic: "وَلَمْ", transliteration: "walam", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while not", ur: "while نہیں" } },
      { id: '6:93:13', arabic: "يُوحَ", transliteration: "yūḥa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "it was inspired", ur: "it was inspired" } },
      { id: '6:93:14', arabic: "إِلَيْهِ", transliteration: "ilayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to him", ur: "کو him" } },
      { id: '6:93:15', arabic: "شَىْءٌۭ", transliteration: "shayon", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } },
      { id: '6:93:16', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (one) who", ur: "اور (one) جو" } },
      { id: '6:93:17', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "said", ur: "کہا" } },
      { id: '6:93:18', arabic: "سَأُنزِلُ", transliteration: "sa-unzilu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will reveal", ur: "میں will reveal" } },
      { id: '6:93:19', arabic: "مِثْلَ", transliteration: "mith'la", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like", ur: "like" } },
      { id: '6:93:20', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:93:21', arabic: "أَنزَلَ", transliteration: "anzala", pos: ['V'], posLabel: 'V', root: "ن ز ل", meaning: { en: "(has been) revealed", ur: "(has been) revealed" } },
      { id: '6:93:22', arabic: "ٱللَّهُ ۗ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '6:93:23', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '6:93:24', arabic: "تَرَىٰٓ", transliteration: "tarā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you (could) see", ur: "تم (could) دیکھنا" } },
      { id: '6:93:25', arabic: "إِذِ", transliteration: "idhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '6:93:26', arabic: "ٱلظَّـٰلِمُونَ", transliteration: "l-ẓālimūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoers", ur: "the wrongdoers" } },
      { id: '6:93:27', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(are) in", ur: "(are) میں" } },
      { id: '6:93:28', arabic: "غَمَرَٰتِ", transliteration: "ghamarāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "agonies", ur: "agonies" } },
      { id: '6:93:29', arabic: "ٱلْمَوْتِ", transliteration: "l-mawti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) [the] death", ur: "(of) [the] موت" } },
      { id: '6:93:30', arabic: "وَٱلْمَلَـٰٓئِكَةُ", transliteration: "wal-malāikatu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while the Angels", ur: "while the Angels" } },
      { id: '6:93:31', arabic: "بَاسِطُوٓا۟", transliteration: "bāsiṭū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) stretching out", ur: "(are) stretching out" } },
      { id: '6:93:32', arabic: "أَيْدِيهِمْ", transliteration: "aydīhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their hands (saying)", ur: "their hands (saying)" } },
      { id: '6:93:33', arabic: "أَخْرِجُوٓا۟", transliteration: "akhrijū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Discharge", ur: "Discharge" } },
      { id: '6:93:34', arabic: "أَنفُسَكُمُ ۖ", transliteration: "anfusakumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your souls", ur: "your souls" } },
      { id: '6:93:35', arabic: "ٱلْيَوْمَ", transliteration: "l-yawma", pos: ['N'], posLabel: 'N', root: "ي و م", meaning: { en: "Today", ur: "Today" } },
      { id: '6:93:36', arabic: "تُجْزَوْنَ", transliteration: "tuj'zawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you will be recompensed", ur: "تم will be recompensed" } },
      { id: '6:93:37', arabic: "عَذَابَ", transliteration: "ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) punishment", ur: "(ساتھ) عذاب" } },
      { id: '6:93:38', arabic: "ٱلْهُونِ", transliteration: "l-hūni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "humiliating", ur: "humiliating" } },
      { id: '6:93:39', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because", ur: "because" } },
      { id: '6:93:40', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you used to", ur: "تم used کو" } },
      { id: '6:93:41', arabic: "تَقُولُونَ", transliteration: "taqūlūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "say", ur: "کہو" } },
      { id: '6:93:42', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '6:93:43', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:93:44', arabic: "غَيْرَ", transliteration: "ghayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than", ur: "other than" } },
      { id: '6:93:45', arabic: "ٱلْحَقِّ", transliteration: "l-ḥaqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '6:93:46', arabic: "وَكُنتُمْ", transliteration: "wakuntum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and you were", ur: "اور تم were" } },
      { id: '6:93:47', arabic: "عَنْ", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "towards", ur: "towards" } },
      { id: '6:93:48', arabic: "ءَايَـٰتِهِۦ", transliteration: "āyātihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His Verses", ur: "His Verses" } },
      { id: '6:93:49', arabic: "تَسْتَكْبِرُونَ", transliteration: "tastakbirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "being arrogant", ur: "being arrogant" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'فعل + فاعل' },
        { from: 25, to: 26, label: 'مضاف + مضاف إليه' },
        { from: 27, to: 28, label: 'جار + مجرور' },
        { from: 36, to: 37, label: 'فعل + فاعل' },
        { from: 42, to: 43, label: 'جار + مجرور' },
        { from: 44, to: 45, label: 'مضاف + مضاف إليه' },
        { from: 47, to: 48, label: 'جار + مجرور' }
      ],
    },
  },
  94: {
    text: "وَلَقَدْ جِئْتُمُونَا فُرَٰدَىٰ كَمَا خَلَقْنَـٰكُمْ أَوَّلَ مَرَّةٍۢ وَتَرَكْتُم مَّا خَوَّلْنَـٰكُمْ وَرَآءَ ظُهُورِكُمْ ۖ وَمَا نَرَىٰ مَعَكُمْ شُفَعَآءَكُمُ ٱلَّذِينَ زَعَمْتُمْ أَنَّهُمْ فِيكُمْ شُرَكَـٰٓؤُا۟ ۚ لَقَد تَّقَطَّعَ بَيْنَكُمْ وَضَلَّ عَنكُم مَّا كُنتُمْ تَزْعُمُونَ",
    translation: {
      en: "",
      ur: "اور جیسا ہم نے تم کو پہلی دفعہ پیدا کیا تھا ایسا ہی آج اکیلے اکیلے ہمارے پاس آئے اور جو (مال ومتاع) ہم نے تمہیں عطا فرمایا تھا وہ سب اپنی پیٹھ پیچھے چھوڑ آئے اور ہم تمہارے ساتھ تمہارے سفارشیوں کو بھی نہیں دیکھتے جن کی نسبت تم خیال کرتے تھے کہ وہ تمہارے (شفیع اور ہمارے) شریک ہیں۔ (آج) تمہارے آپس کے سب تعلقات منقطع ہوگئے اور جو دعوے تم کیا کرتے تھے سب جاتے رہے",
    },
    words: [
      { id: '6:94:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And certainly", ur: "اور certainly" } },
      { id: '6:94:2', arabic: "جِئْتُمُونَا", transliteration: "ji'tumūnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have come to Us", ur: "تم have come کو Us" } },
      { id: '6:94:3', arabic: "فُرَٰدَىٰ", transliteration: "furādā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "alone", ur: "alone" } },
      { id: '6:94:4', arabic: "كَمَا", transliteration: "kamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "as", ur: "as" } },
      { id: '6:94:5', arabic: "خَلَقْنَـٰكُمْ", transliteration: "khalaqnākum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We created you", ur: "ہم پیدا کیا تم" } },
      { id: '6:94:6', arabic: "أَوَّلَ", transliteration: "awwala", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) first", ur: "(the) first" } },
      { id: '6:94:7', arabic: "مَرَّةٍۢ", transliteration: "marratin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "time", ur: "وقت" } },
      { id: '6:94:8', arabic: "وَتَرَكْتُم", transliteration: "wataraktum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and you have left", ur: "اور تم have left" } },
      { id: '6:94:9', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "whatever", ur: "whatever" } },
      { id: '6:94:10', arabic: "خَوَّلْنَـٰكُمْ", transliteration: "khawwalnākum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We bestowed (on) you", ur: "ہم bestowed (پر) تم" } },
      { id: '6:94:11', arabic: "وَرَآءَ", transliteration: "warāa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "behind", ur: "behind" } },
      { id: '6:94:12', arabic: "ظُهُورِكُمْ ۖ", transliteration: "ẓuhūrikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your backs", ur: "your backs" } },
      { id: '6:94:13', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '6:94:14', arabic: "نَرَىٰ", transliteration: "narā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We see", ur: "ہم دیکھنا" } },
      { id: '6:94:15', arabic: "مَعَكُمْ", transliteration: "maʿakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with you", ur: "ساتھ تم" } },
      { id: '6:94:16', arabic: "شُفَعَآءَكُمُ", transliteration: "shufaʿāakumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your intercessors", ur: "your intercessors" } },
      { id: '6:94:17', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those whom", ur: "those whom" } },
      { id: '6:94:18', arabic: "زَعَمْتُمْ", transliteration: "zaʿamtum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you claimed", ur: "تم claimed" } },
      { id: '6:94:19', arabic: "أَنَّهُمْ", transliteration: "annahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that they (were)", ur: "وہ وہ لوگ (were)" } },
      { id: '6:94:20', arabic: "فِيكُمْ", transliteration: "fīkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in your (matters)", ur: "میں your (matters)" } },
      { id: '6:94:21', arabic: "شُرَكَـٰٓؤُا۟ ۚ", transliteration: "shurakāu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "partners (with Allah)", ur: "partners (ساتھ اللہ)" } },
      { id: '6:94:22', arabic: "لَقَد", transliteration: "laqad", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '6:94:23', arabic: "تَّقَطَّعَ", transliteration: "taqaṭṭaʿa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "have been severed (bonds)", ur: "have been severed (bonds)" } },
      { id: '6:94:24', arabic: "بَيْنَكُمْ", transliteration: "baynakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between you", ur: "درمیان تم" } },
      { id: '6:94:25', arabic: "وَضَلَّ", transliteration: "waḍalla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and is lost", ur: "اور is lost" } },
      { id: '6:94:26', arabic: "عَنكُم", transliteration: "ʿankum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from you", ur: "سے تم" } },
      { id: '6:94:27', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:94:28', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you used to", ur: "تم used کو" } },
      { id: '6:94:29', arabic: "تَزْعُمُونَ", transliteration: "tazʿumūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "claim", ur: "claim" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'فعل + فاعل' }
      ],
    },
  },
  95: {
    text: "۞ إِنَّ ٱللَّهَ فَالِقُ ٱلْحَبِّ وَٱلنَّوَىٰ ۖ يُخْرِجُ ٱلْحَىَّ مِنَ ٱلْمَيِّتِ وَمُخْرِجُ ٱلْمَيِّتِ مِنَ ٱلْحَىِّ ۚ ذَٰلِكُمُ ٱللَّهُ ۖ فَأَنَّىٰ تُؤْفَكُونَ",
    translation: {
      en: "",
      ur: "بے شک خدا ہی دانے اور گٹھلی کو پھاڑ کر (ان سے درخت وغیرہ) اگاتا ہے وہی جاندار کو بے جان سے نکالتا ہے اور وہی بےجان کا جاندار سے نکالنے والا ہے۔ یہی تو خدا ہے۔ پھر تم کہاں بہکے پھرتے ہو",
    },
    words: [
      { id: '6:95:1', arabic: "۞ إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '6:95:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:95:3', arabic: "فَالِقُ", transliteration: "fāliqu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(is the) Cleaver", ur: "(is the) Cleaver" } },
      { id: '6:95:4', arabic: "ٱلْحَبِّ", transliteration: "l-ḥabi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the grain", ur: "(of) the grain" } },
      { id: '6:95:5', arabic: "وَٱلنَّوَىٰ ۖ", transliteration: "wal-nawā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the date-seed", ur: "اور the date-seed" } },
      { id: '6:95:6', arabic: "يُخْرِجُ", transliteration: "yukh'riju", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He brings forth", ur: "وہ brings forth" } },
      { id: '6:95:7', arabic: "ٱلْحَىَّ", transliteration: "l-ḥaya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the living", ur: "the living" } },
      { id: '6:95:8', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:95:9', arabic: "ٱلْمَيِّتِ", transliteration: "l-mayiti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the dead", ur: "the dead" } },
      { id: '6:95:10', arabic: "وَمُخْرِجُ", transliteration: "wamukh'riju", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and brings forth", ur: "اور brings forth" } },
      { id: '6:95:11', arabic: "ٱلْمَيِّتِ", transliteration: "l-mayiti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the dead", ur: "the dead" } },
      { id: '6:95:12', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:95:13', arabic: "ٱلْحَىِّ ۚ", transliteration: "l-ḥayi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the living", ur: "the living" } },
      { id: '6:95:14', arabic: "ذَٰلِكُمُ", transliteration: "dhālikumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '6:95:15', arabic: "ٱللَّهُ ۖ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Allah", ur: "(is) اللہ" } },
      { id: '6:95:16', arabic: "فَأَنَّىٰ", transliteration: "fa-annā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so how", ur: "so how" } },
      { id: '6:95:17', arabic: "تُؤْفَكُونَ", transliteration: "tu'fakūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are you deluded", ur: "are تم deluded" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  96: {
    text: "فَالِقُ ٱلْإِصْبَاحِ وَجَعَلَ ٱلَّيْلَ سَكَنًۭا وَٱلشَّمْسَ وَٱلْقَمَرَ حُسْبَانًۭا ۚ ذَٰلِكَ تَقْدِيرُ ٱلْعَزِيزِ ٱلْعَلِيمِ",
    translation: {
      en: "",
      ur: "وہی (رات کے اندھیرے سے) صبح کی روشنی پھاڑ نکالتا ہے اور اسی نے رات کو (موجب) آرام (ٹھہرایا) اور سورج اور چاند کو (ذرائع) شمار بنایا ہے۔ یہ خدا کے (مقرر کئے ہوئے) اندازے ہیں جو غالب (اور) علم والا ہے",
    },
    words: [
      { id: '6:96:1', arabic: "فَالِقُ", transliteration: "fāliqu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(He is the) Cleaver", ur: "(وہ is the) Cleaver" } },
      { id: '6:96:2', arabic: "ٱلْإِصْبَاحِ", transliteration: "l-iṣ'bāḥi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the daybreak", ur: "(of) the daybreak" } },
      { id: '6:96:3', arabic: "وَجَعَلَ", transliteration: "wajaʿala", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "and He has made", ur: "اور وہ has made" } },
      { id: '6:96:4', arabic: "ٱلَّيْلَ", transliteration: "al-layla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the night", ur: "the رات" } },
      { id: '6:96:5', arabic: "سَكَنًۭا", transliteration: "sakanan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for) rest", ur: "(for) rest" } },
      { id: '6:96:6', arabic: "وَٱلشَّمْسَ", transliteration: "wal-shamsa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the sun", ur: "اور the sun" } },
      { id: '6:96:7', arabic: "وَٱلْقَمَرَ", transliteration: "wal-qamara", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the moon", ur: "اور the moon" } },
      { id: '6:96:8', arabic: "حُسْبَانًۭا ۚ", transliteration: "ḥus'bānan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(for) reckoning", ur: "(for) reckoning" } },
      { id: '6:96:9', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '6:96:10', arabic: "تَقْدِيرُ", transliteration: "taqdīru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is the) ordaining", ur: "(is the) ordaining" } },
      { id: '6:96:11', arabic: "ٱلْعَزِيزِ", transliteration: "l-ʿazīzi", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(of) the All-Mighty", ur: "(of) the سب-Mighty" } },
      { id: '6:96:12', arabic: "ٱلْعَلِيمِ", transliteration: "l-ʿalīmi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the All-Knowing", ur: "the سب جاننے والا" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  97: {
    text: "وَهُوَ ٱلَّذِى جَعَلَ لَكُمُ ٱلنُّجُومَ لِتَهْتَدُوا۟ بِهَا فِى ظُلُمَـٰتِ ٱلْبَرِّ وَٱلْبَحْرِ ۗ قَدْ فَصَّلْنَا ٱلْـَٔايَـٰتِ لِقَوْمٍۢ يَعْلَمُونَ",
    translation: {
      en: "",
      ur: "اور وہی تو ہے جس نے تمہارے لئے ستارے بنائے تاکہ جنگلوں اور دریاؤں کے اندھیروں میں ان سے رستے معلوم کرو۔ عقل والوں کے لئے ہم نے اپنی آیتیں کھول کھول کر بیان کردی ہیں",
    },
    words: [
      { id: '6:97:1', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '6:97:2', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '6:97:3', arabic: "جَعَلَ", transliteration: "jaʿala", pos: ['N'], posLabel: 'N', root: "ج ع ل", meaning: { en: "made", ur: "made" } },
      { id: '6:97:4', arabic: "لَكُمُ", transliteration: "lakumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '6:97:5', arabic: "ٱلنُّجُومَ", transliteration: "l-nujūma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the stars", ur: "the stars" } },
      { id: '6:97:6', arabic: "لِتَهْتَدُوا۟", transliteration: "litahtadū", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that you may guide yourselves", ur: "وہ تم may guide yourselves" } },
      { id: '6:97:7', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '6:97:8', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '6:97:9', arabic: "ظُلُمَـٰتِ", transliteration: "ẓulumāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the darkness[es]", ur: "the darkness[es]" } },
      { id: '6:97:10', arabic: "ٱلْبَرِّ", transliteration: "l-bari", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the land", ur: "(of) the land" } },
      { id: '6:97:11', arabic: "وَٱلْبَحْرِ ۗ", transliteration: "wal-baḥri", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the sea", ur: "اور the sea" } },
      { id: '6:97:12', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Certainly", ur: "Certainly" } },
      { id: '6:97:13', arabic: "فَصَّلْنَا", transliteration: "faṣṣalnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "We have made clear", ur: "ہم have made clear" } },
      { id: '6:97:14', arabic: "ٱلْـَٔايَـٰتِ", transliteration: "l-āyāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Signs", ur: "the نشانیاں" } },
      { id: '6:97:15', arabic: "لِقَوْمٍۢ", transliteration: "liqawmin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for a people", ur: "for a لوگ" } },
      { id: '6:97:16', arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "(who) know", ur: "(جو) جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  98: {
    text: "وَهُوَ ٱلَّذِىٓ أَنشَأَكُم مِّن نَّفْسٍۢ وَٰحِدَةٍۢ فَمُسْتَقَرٌّۭ وَمُسْتَوْدَعٌۭ ۗ قَدْ فَصَّلْنَا ٱلْـَٔايَـٰتِ لِقَوْمٍۢ يَفْقَهُونَ",
    translation: {
      en: "",
      ur: "اور وہی تو ہے جس نے تم کو ایک شخص سے پیدا کیا۔ پھر (تمہارے لئے) ایک ٹھہرنے کی جگہ ہے اور ایک سپرد ہونے کی سمجھنے والوں کے لئے ہم نے (اپنی) آیتیں کھول کھول کر بیان کردی ہیں",
    },
    words: [
      { id: '6:98:1', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '6:98:2', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '6:98:3', arabic: "أَنشَأَكُم", transliteration: "ansha-akum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(has) produced you", ur: "(has) produced تم" } },
      { id: '6:98:4', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:98:5', arabic: "نَّفْسٍۢ", transliteration: "nafsin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a soul", ur: "a روح" } },
      { id: '6:98:6', arabic: "وَٰحِدَةٍۢ", transliteration: "wāḥidatin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "single", ur: "single" } },
      { id: '6:98:7', arabic: "فَمُسْتَقَرٌّۭ", transliteration: "famus'taqarrun", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so (there is) a place of dwelling", ur: "so (there is) a place of dwelling" } },
      { id: '6:98:8', arabic: "وَمُسْتَوْدَعٌۭ ۗ", transliteration: "wamus'tawdaʿun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a resting place", ur: "اور a resting place" } },
      { id: '6:98:9', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Certainly", ur: "Certainly" } },
      { id: '6:98:10', arabic: "فَصَّلْنَا", transliteration: "faṣṣalnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "We have made clear", ur: "ہم have made clear" } },
      { id: '6:98:11', arabic: "ٱلْـَٔايَـٰتِ", transliteration: "l-āyāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Signs", ur: "the نشانیاں" } },
      { id: '6:98:12', arabic: "لِقَوْمٍۢ", transliteration: "liqawmin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for a people", ur: "for a لوگ" } },
      { id: '6:98:13', arabic: "يَفْقَهُونَ", transliteration: "yafqahūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(who) understand", ur: "(جو) understand" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  99: {
    text: "وَهُوَ ٱلَّذِىٓ أَنزَلَ مِنَ ٱلسَّمَآءِ مَآءًۭ فَأَخْرَجْنَا بِهِۦ نَبَاتَ كُلِّ شَىْءٍۢ فَأَخْرَجْنَا مِنْهُ خَضِرًۭا نُّخْرِجُ مِنْهُ حَبًّۭا مُّتَرَاكِبًۭا وَمِنَ ٱلنَّخْلِ مِن طَلْعِهَا قِنْوَانٌۭ دَانِيَةٌۭ وَجَنَّـٰتٍۢ مِّنْ أَعْنَابٍۢ وَٱلزَّيْتُونَ وَٱلرُّمَّانَ مُشْتَبِهًۭا وَغَيْرَ مُتَشَـٰبِهٍ ۗ ٱنظُرُوٓا۟ إِلَىٰ ثَمَرِهِۦٓ إِذَآ أَثْمَرَ وَيَنْعِهِۦٓ ۚ إِنَّ فِى ذَٰلِكُمْ لَـَٔايَـٰتٍۢ لِّقَوْمٍۢ يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "اور وہی تو ہے جو آسمان سے مینھ برساتا ہے۔ پھر ہم ہی (جو مینھ برساتے ہیں) اس سے ہر طرح کی روئیدگی اگاتے ہیں۔ پھر اس میں سے سبز سبز کونپلیں نکالتے ہیں۔ اور ان کونپلوں میں سے ایک دوسرے کے ساتھ جڑے ہوئے دانے نکالتے ہیں اور کھجور کے گابھے میں سے لٹکتے ہوئے گچھے اور انگوروں کے باغ اور زیتون اور انار جو ایک دوسرے سے ملتے جلتے بھی ہیں۔ اور نہیں بھی ملتے۔ یہ چیزیں جب پھلتی ہیں تو ان کے پھلوں پر اور (جب پکتی ہیں تو) ان کے پکنے پر نظر کرو۔ ان میں ان لوگوں کے لئے جو ایمان لاتے ہیں (قدرت خدا کی بہت سی) نشانیاں ہیں",
    },
    words: [
      { id: '6:99:1', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '6:99:2', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '6:99:3', arabic: "أَنزَلَ", transliteration: "anzala", pos: ['N'], posLabel: 'N', root: "ن ز ل", meaning: { en: "sends down", ur: "sends down" } },
      { id: '6:99:4', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:99:5', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sky", ur: "the sky" } },
      { id: '6:99:6', arabic: "مَآءًۭ", transliteration: "māan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "water", ur: "پانی" } },
      { id: '6:99:7', arabic: "فَأَخْرَجْنَا", transliteration: "fa-akhrajnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then We bring forth", ur: "پھر ہم bring forth" } },
      { id: '6:99:8', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '6:99:9', arabic: "نَبَاتَ", transliteration: "nabāta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "vegetation", ur: "vegetation" } },
      { id: '6:99:10', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) every", ur: "(of) ہر" } },
      { id: '6:99:11', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '6:99:12', arabic: "فَأَخْرَجْنَا", transliteration: "fa-akhrajnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then We bring forth", ur: "پھر ہم bring forth" } },
      { id: '6:99:13', arabic: "مِنْهُ", transliteration: "min'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '6:99:14', arabic: "خَضِرًۭا", transliteration: "khaḍiran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "green plant", ur: "green plant" } },
      { id: '6:99:15', arabic: "نُّخْرِجُ", transliteration: "nukh'riju", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We bring forth", ur: "ہم bring forth" } },
      { id: '6:99:16', arabic: "مِنْهُ", transliteration: "min'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '6:99:17', arabic: "حَبًّۭا", transliteration: "ḥabban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "grain ", ur: "grain " } },
      { id: '6:99:18', arabic: "مُّتَرَاكِبًۭا", transliteration: "mutarākiban", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thick clustered", ur: "thick clustered" } },
      { id: '6:99:19', arabic: "وَمِنَ", transliteration: "wamina", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And from", ur: "اور سے" } },
      { id: '6:99:20', arabic: "ٱلنَّخْلِ", transliteration: "l-nakhli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the date-palm", ur: "the date-palm" } },
      { id: '6:99:21', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:99:22', arabic: "طَلْعِهَا", transliteration: "ṭalʿihā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its spathe", ur: "its spathe" } },
      { id: '6:99:23', arabic: "قِنْوَانٌۭ", transliteration: "qin'wānun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "clusters of dates", ur: "clusters of dates" } },
      { id: '6:99:24', arabic: "دَانِيَةٌۭ", transliteration: "dāniyatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "hanging low", ur: "hanging low" } },
      { id: '6:99:25', arabic: "وَجَنَّـٰتٍۢ", transliteration: "wajannātin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And gardens", ur: "اور باغات" } },
      { id: '6:99:26', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '6:99:27', arabic: "أَعْنَابٍۢ", transliteration: "aʿnābin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "grapes", ur: "grapes" } },
      { id: '6:99:28', arabic: "وَٱلزَّيْتُونَ", transliteration: "wal-zaytūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the olives", ur: "اور the olives" } },
      { id: '6:99:29', arabic: "وَٱلرُّمَّانَ", transliteration: "wal-rumāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the pomegranates", ur: "اور the pomegranates" } },
      { id: '6:99:30', arabic: "مُشْتَبِهًۭا", transliteration: "mush'tabihan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "resembling", ur: "resembling" } },
      { id: '6:99:31', arabic: "وَغَيْرَ", transliteration: "waghayra", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '6:99:32', arabic: "مُتَشَـٰبِهٍ ۗ", transliteration: "mutashābihin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "resembling", ur: "resembling" } },
      { id: '6:99:33', arabic: "ٱنظُرُوٓا۟", transliteration: "unẓurū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Look", ur: "Look" } },
      { id: '6:99:34', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "at", ur: "at" } },
      { id: '6:99:35', arabic: "ثَمَرِهِۦٓ", transliteration: "thamarihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its fruit", ur: "its fruit" } },
      { id: '6:99:36', arabic: "إِذَآ", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '6:99:37', arabic: "أَثْمَرَ", transliteration: "athmara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it bears fruit", ur: "it bears fruit" } },
      { id: '6:99:38', arabic: "وَيَنْعِهِۦٓ ۚ", transliteration: "wayanʿihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and its ripening", ur: "اور its ripening" } },
      { id: '6:99:39', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '6:99:40', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '6:99:41', arabic: "ذَٰلِكُمْ", transliteration: "dhālikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '6:99:42', arabic: "لَـَٔايَـٰتٍۢ", transliteration: "laāyātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) signs", ur: "(are) نشانیاں" } },
      { id: '6:99:43', arabic: "لِّقَوْمٍۢ", transliteration: "liqawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for a people", ur: "for a لوگ" } },
      { id: '6:99:44', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "(who) believe", ur: "(جو) ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'جار + مجرور' },
        { from: 22, to: 23, label: 'مضاف + مضاف إليه' },
        { from: 32, to: 33, label: 'فعل + فاعل' },
        { from: 34, to: 35, label: 'جار + مجرور' },
        { from: 40, to: 41, label: 'جار + مجرور' }
      ],
    },
  },
  100: {
    text: "وَجَعَلُوا۟ لِلَّهِ شُرَكَآءَ ٱلْجِنَّ وَخَلَقَهُمْ ۖ وَخَرَقُوا۟ لَهُۥ بَنِينَ وَبَنَـٰتٍۭ بِغَيْرِ عِلْمٍۢ ۚ سُبْحَـٰنَهُۥ وَتَعَـٰلَىٰ عَمَّا يَصِفُونَ",
    translation: {
      en: "",
      ur: "اور ان لوگوں نے جنوں کو خدا کا شریک ٹھہرایا۔ حالانکہ ان کو اسی نے پیدا کیا اور بےسمجھے (جھوٹ بہتان) اس کے لئے بیٹے اور بیٹیاں بنا کھڑی کیں وہ ان باتوں سے جو اس کی نسبت بیان کرتے ہیں پاک ہے اور (اس کی شان ان سے) بلند ہے",
    },
    words: [
      { id: '6:100:1', arabic: "وَجَعَلُوا۟", transliteration: "wajaʿalū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they make", ur: "اور وہ لوگ make" } },
      { id: '6:100:2', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Allah", ur: "ساتھ اللہ" } },
      { id: '6:100:3', arabic: "شُرَكَآءَ", transliteration: "shurakāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "partners ", ur: "partners " } },
      { id: '6:100:4', arabic: "ٱلْجِنَّ", transliteration: "l-jina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "jinn", ur: "jinn" } },
      { id: '6:100:5', arabic: "وَخَلَقَهُمْ ۖ", transliteration: "wakhalaqahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "خ ل ق", meaning: { en: "though He has created them", ur: "though وہ has پیدا کیا them" } },
      { id: '6:100:6', arabic: "وَخَرَقُوا۟", transliteration: "wakharaqū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they falsely attribute", ur: "اور وہ لوگ falsely attribute" } },
      { id: '6:100:7', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to Him", ur: "کو Him" } },
      { id: '6:100:8', arabic: "بَنِينَ", transliteration: "banīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sons", ur: "sons" } },
      { id: '6:100:9', arabic: "وَبَنَـٰتٍۭ", transliteration: "wabanātin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and daughters", ur: "اور daughters" } },
      { id: '6:100:10', arabic: "بِغَيْرِ", transliteration: "bighayri", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "without", ur: "without" } },
      { id: '6:100:11', arabic: "عِلْمٍۢ ۚ", transliteration: "ʿil'min", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "knowledge", ur: "knowledge" } },
      { id: '6:100:12', arabic: "سُبْحَـٰنَهُۥ", transliteration: "sub'ḥānahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Glorified is He", ur: "Glorified is وہ" } },
      { id: '6:100:13', arabic: "وَتَعَـٰلَىٰ", transliteration: "wataʿālā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Exalted", ur: "اور Exalted" } },
      { id: '6:100:14', arabic: "عَمَّا", transliteration: "ʿammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "above what", ur: "above کیا" } },
      { id: '6:100:15', arabic: "يَصِفُونَ", transliteration: "yaṣifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they attribute", ur: "وہ لوگ attribute" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  101: {
    text: "بَدِيعُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۖ أَنَّىٰ يَكُونُ لَهُۥ وَلَدٌۭ وَلَمْ تَكُن لَّهُۥ صَـٰحِبَةٌۭ ۖ وَخَلَقَ كُلَّ شَىْءٍۢ ۖ وَهُوَ بِكُلِّ شَىْءٍ عَلِيمٌۭ",
    translation: {
      en: "",
      ur: "(وہی) آسمانوں اور زمین کا پیدا کرنے والا (ہے)۔ اس کے اولاد کہاں سے ہو جب کہ اس کی بیوی ہی نہیں۔ اور اس نے ہر چیز کو پیدا کیا ہے۔ اور وہ ہر چیز سے باخبر ہے",
    },
    words: [
      { id: '6:101:1', arabic: "بَدِيعُ", transliteration: "badīʿu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Originator", ur: "Originator" } },
      { id: '6:101:2', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the heavens", ur: "(of) the آسمان" } },
      { id: '6:101:3', arabic: "وَٱلْأَرْضِ ۖ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '6:101:4', arabic: "أَنَّىٰ", transliteration: "annā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "How", ur: "How" } },
      { id: '6:101:5', arabic: "يَكُونُ", transliteration: "yakūnu", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "can be", ur: "can be" } },
      { id: '6:101:6', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for Him", ur: "for Him" } },
      { id: '6:101:7', arabic: "وَلَدٌۭ", transliteration: "waladun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "a son", ur: "a بیٹا" } },
      { id: '6:101:8', arabic: "وَلَمْ", transliteration: "walam", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while not", ur: "while نہیں" } },
      { id: '6:101:9', arabic: "تَكُن", transliteration: "takun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(there) is", ur: "(there) is" } },
      { id: '6:101:10', arabic: "لَّهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for Him", ur: "for Him" } },
      { id: '6:101:11', arabic: "صَـٰحِبَةٌۭ ۖ", transliteration: "ṣāḥibatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a companion", ur: "a companion" } },
      { id: '6:101:12', arabic: "وَخَلَقَ", transliteration: "wakhalaqa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "خ ل ق", meaning: { en: "and He created", ur: "اور وہ پیدا کیا" } },
      { id: '6:101:13', arabic: "كُلَّ", transliteration: "kulla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '6:101:14', arabic: "شَىْءٍۢ ۖ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '6:101:15', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '6:101:16', arabic: "بِكُلِّ", transliteration: "bikulli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) of every", ur: "(is) of ہر" } },
      { id: '6:101:17', arabic: "شَىْءٍ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '6:101:18', arabic: "عَلِيمٌۭ", transliteration: "ʿalīmun", pos: ['ADJ'], posLabel: 'ADJ', root: "ع ل م", meaning: { en: "All-Knower", ur: "سب-Knower" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  102: {
    text: "ذَٰلِكُمُ ٱللَّهُ رَبُّكُمْ ۖ لَآ إِلَـٰهَ إِلَّا هُوَ ۖ خَـٰلِقُ كُلِّ شَىْءٍۢ فَٱعْبُدُوهُ ۚ وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ وَكِيلٌۭ",
    translation: {
      en: "",
      ur: "یہی (اوصاف رکھنے والا) خدا تمہارا پروردگار ہے۔ اس کے سوا کوئی معبود نہیں۔ (وہی) ہر چیز کا پیداکرنے والا (ہے) تو اسی کی عبادت کرو۔ اور وہ ہر چیز کا نگراں ہے",
    },
    words: [
      { id: '6:102:1', arabic: "ذَٰلِكُمُ", transliteration: "dhālikumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '6:102:2', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Allah", ur: "(is) اللہ" } },
      { id: '6:102:3', arabic: "رَبُّكُمْ ۖ", transliteration: "rabbukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '6:102:4', arabic: "لَآ", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(there is) no", ur: "(there is) نہیں" } },
      { id: '6:102:5', arabic: "إِلَـٰهَ", transliteration: "ilāha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "god", ur: "اللہ" } },
      { id: '6:102:6', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:102:7', arabic: "هُوَ ۖ", transliteration: "huwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Him", ur: "Him" } },
      { id: '6:102:8', arabic: "خَـٰلِقُ", transliteration: "khāliqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Creator", ur: "(the) Creator" } },
      { id: '6:102:9', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) every", ur: "(of) ہر" } },
      { id: '6:102:10', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '6:102:11', arabic: "فَٱعْبُدُوهُ ۚ", transliteration: "fa-uʿ'budūhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so worship Him", ur: "so عبادت Him" } },
      { id: '6:102:12', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '6:102:13', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) on", ur: "(is) پر" } },
      { id: '6:102:14', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '6:102:15', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '6:102:16', arabic: "وَكِيلٌۭ", transliteration: "wakīlun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "a Guardian", ur: "a Guardian" } }
    ],
    structure: {
      relationships: [
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  103: {
    text: "لَّا تُدْرِكُهُ ٱلْأَبْصَـٰرُ وَهُوَ يُدْرِكُ ٱلْأَبْصَـٰرَ ۖ وَهُوَ ٱللَّطِيفُ ٱلْخَبِيرُ",
    translation: {
      en: "",
      ur: "(وہ ایسا ہے کہ) نگاہیں اس کا ادراک نہیں کرسکتیں اور وہ نگاہوں کا ادراک کرسکتا ہے اور وہ بھید جاننے والا خبردار ہے",
    },
    words: [
      { id: '6:103:1', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not (can)", ur: "نہیں (can)" } },
      { id: '6:103:2', arabic: "تُدْرِكُهُ", transliteration: "tud'rikuhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "grasp Him", ur: "grasp Him" } },
      { id: '6:103:3', arabic: "ٱلْأَبْصَـٰرُ", transliteration: "l-abṣāru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the visions", ur: "the visions" } },
      { id: '6:103:4', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but He", ur: "لیکن وہ" } },
      { id: '6:103:5', arabic: "يُدْرِكُ", transliteration: "yud'riku", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(can) grasp", ur: "(can) grasp" } },
      { id: '6:103:6', arabic: "ٱلْأَبْصَـٰرَ ۖ", transliteration: "l-abṣāra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(all) the vision", ur: "(سب) the vision" } },
      { id: '6:103:7', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and He (is)", ur: "اور وہ (is)" } },
      { id: '6:103:8', arabic: "ٱللَّطِيفُ", transliteration: "l-laṭīfu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the All-Subtle", ur: "the سب-Subtle" } },
      { id: '6:103:9', arabic: "ٱلْخَبِيرُ", transliteration: "l-khabīru", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the All-Aware", ur: "the سب-Aware" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  104: {
    text: "قَدْ جَآءَكُم بَصَآئِرُ مِن رَّبِّكُمْ ۖ فَمَنْ أَبْصَرَ فَلِنَفْسِهِۦ ۖ وَمَنْ عَمِىَ فَعَلَيْهَا ۚ وَمَآ أَنَا۠ عَلَيْكُم بِحَفِيظٍۢ",
    translation: {
      en: "",
      ur: "(اے محمدﷺ! ان سے کہہ دو کہ) تمہارے (پاس) پروردگار کی طرف سے (روشن) دلیلیں پہنچ چکی ہیں تو جس نے (ان کو آنکھ کھول کر) دیکھا اس نے اپنا بھلا کیا اور جو اندھا بنا رہا اس نے اپنے حق میں برا کیا۔ اور میں تمہارا نگہبان نہیں ہوں",
    },
    words: [
      { id: '6:104:1', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '6:104:2', arabic: "جَآءَكُم", transliteration: "jāakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has come to you", ur: "has come کو تم" } },
      { id: '6:104:3', arabic: "بَصَآئِرُ", transliteration: "baṣāiru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "enlightenment", ur: "enlightenment" } },
      { id: '6:104:4', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:104:5', arabic: "رَّبِّكُمْ ۖ", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '6:104:6', arabic: "فَمَنْ", transliteration: "faman", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then whoever", ur: "پھر whoever" } },
      { id: '6:104:7', arabic: "أَبْصَرَ", transliteration: "abṣara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sees", ur: "sees" } },
      { id: '6:104:8', arabic: "فَلِنَفْسِهِۦ ۖ", transliteration: "falinafsihi", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then (it is) for his soul", ur: "پھر (it is) for his روح" } },
      { id: '6:104:9', arabic: "وَمَنْ", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '6:104:10', arabic: "عَمِىَ", transliteration: "ʿamiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) blind", ur: "(is) blind" } },
      { id: '6:104:11', arabic: "فَعَلَيْهَا ۚ", transliteration: "faʿalayhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then (it is) against himself", ur: "پھر (it is) against himself" } },
      { id: '6:104:12', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '6:104:13', arabic: "أَنَا۠", transliteration: "anā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(am) I", ur: "(am) میں" } },
      { id: '6:104:14', arabic: "عَلَيْكُم", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over you", ur: "اوپر تم" } },
      { id: '6:104:15', arabic: "بِحَفِيظٍۢ", transliteration: "biḥafīẓin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "a guardian", ur: "a guardian" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  105: {
    text: "وَكَذَٰلِكَ نُصَرِّفُ ٱلْـَٔايَـٰتِ وَلِيَقُولُوا۟ دَرَسْتَ وَلِنُبَيِّنَهُۥ لِقَوْمٍۢ يَعْلَمُونَ",
    translation: {
      en: "",
      ur: "اور ہم اسی طرح اپنی آیتیں پھیر پھیر کر بیان کرتے ہیں تاکہ کافر یہ نہ کہیں کہ تم (یہ باتیں اہل کتاب سے) سیکھے ہوئے ہو اور تاکہ سمجھنے والے لوگوں کے لئے تشریح کردیں",
    },
    words: [
      { id: '6:105:1', arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And thus", ur: "اور thus" } },
      { id: '6:105:2', arabic: "نُصَرِّفُ", transliteration: "nuṣarrifu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We explain", ur: "ہم explain" } },
      { id: '6:105:3', arabic: "ٱلْـَٔايَـٰتِ", transliteration: "l-āyāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Signs", ur: "the نشانیاں" } },
      { id: '6:105:4', arabic: "وَلِيَقُولُوا۟", transliteration: "waliyaqūlū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "that they (may) say", ur: "وہ وہ لوگ (may) کہو" } },
      { id: '6:105:5', arabic: "دَرَسْتَ", transliteration: "darasta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You have studied", ur: "تم have studied" } },
      { id: '6:105:6', arabic: "وَلِنُبَيِّنَهُۥ", transliteration: "walinubayyinahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and that We (may) make it clear", ur: "اور وہ ہم (may) make it clear" } },
      { id: '6:105:7', arabic: "لِقَوْمٍۢ", transliteration: "liqawmin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for a people", ur: "for a لوگ" } },
      { id: '6:105:8', arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "who know", ur: "جو جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  106: {
    text: "ٱتَّبِعْ مَآ أُوحِىَ إِلَيْكَ مِن رَّبِّكَ ۖ لَآ إِلَـٰهَ إِلَّا هُوَ ۖ وَأَعْرِضْ عَنِ ٱلْمُشْرِكِينَ",
    translation: {
      en: "",
      ur: "اور جو حکم تمہارے پروردگار کی طرف سے تمہارے پاس آتا ہے اسی کی پیروی کرو۔ اس (پروردگار) کے سوا کوئی معبود نہیں۔ اور مشرکوں سے کنارہ کرلو",
    },
    words: [
      { id: '6:106:1', arabic: "ٱتَّبِعْ", transliteration: "ittabiʿ", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Follow", ur: "Follow" } },
      { id: '6:106:2', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:106:3', arabic: "أُوحِىَ", transliteration: "ūḥiya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has been inspired", ur: "has been inspired" } },
      { id: '6:106:4', arabic: "إِلَيْكَ", transliteration: "ilayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '6:106:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:106:6', arabic: "رَّبِّكَ ۖ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '6:106:7', arabic: "لَآ", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(there is) no", ur: "(there is) نہیں" } },
      { id: '6:106:8', arabic: "إِلَـٰهَ", transliteration: "ilāha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "god", ur: "اللہ" } },
      { id: '6:106:9', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:106:10', arabic: "هُوَ ۖ", transliteration: "huwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Him", ur: "Him" } },
      { id: '6:106:11', arabic: "وَأَعْرِضْ", transliteration: "wa-aʿriḍ", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and turn away", ur: "اور turn away" } },
      { id: '6:106:12', arabic: "عَنِ", transliteration: "ʿani", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:106:13', arabic: "ٱلْمُشْرِكِينَ", transliteration: "l-mush'rikīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the polytheists", ur: "the polytheists" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  107: {
    text: "وَلَوْ شَآءَ ٱللَّهُ مَآ أَشْرَكُوا۟ ۗ وَمَا جَعَلْنَـٰكَ عَلَيْهِمْ حَفِيظًۭا ۖ وَمَآ أَنتَ عَلَيْهِم بِوَكِيلٍۢ",
    translation: {
      en: "",
      ur: "اور اگر خدا چاہتا تو یہ لوگ شرک نہ کرتے۔ اور (اے پیغمبر!) ہم نے تم کو ان پر نگہبان مقرر نہیں کیا۔ اور نہ تم ان کے داروغہ ہو",
    },
    words: [
      { id: '6:107:1', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '6:107:2', arabic: "شَآءَ", transliteration: "shāa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(had) willed", ur: "(had) willed" } },
      { id: '6:107:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:107:4', arabic: "مَآ", transliteration: "mā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "not (they would have)", ur: "نہیں (وہ لوگ would have)" } },
      { id: '6:107:5', arabic: "أَشْرَكُوا۟ ۗ", transliteration: "ashrakū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "associated partners (with Him)", ur: "associated partners (ساتھ Him)" } },
      { id: '6:107:6', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '6:107:7', arabic: "جَعَلْنَـٰكَ", transliteration: "jaʿalnāka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have made you", ur: "ہم have made تم" } },
      { id: '6:107:8', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over them", ur: "اوپر them" } },
      { id: '6:107:9', arabic: "حَفِيظًۭا ۖ", transliteration: "ḥafīẓan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a guardian", ur: "a guardian" } },
      { id: '6:107:10', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '6:107:11', arabic: "أَنتَ", transliteration: "anta", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '6:107:12', arabic: "عَلَيْهِم", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) over them", ur: "(are) اوپر them" } },
      { id: '6:107:13', arabic: "بِوَكِيلٍۢ", transliteration: "biwakīlin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "a manager", ur: "a manager" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  108: {
    text: "وَلَا تَسُبُّوا۟ ٱلَّذِينَ يَدْعُونَ مِن دُونِ ٱللَّهِ فَيَسُبُّوا۟ ٱللَّهَ عَدْوًۢا بِغَيْرِ عِلْمٍۢ ۗ كَذَٰلِكَ زَيَّنَّا لِكُلِّ أُمَّةٍ عَمَلَهُمْ ثُمَّ إِلَىٰ رَبِّهِم مَّرْجِعُهُمْ فَيُنَبِّئُهُم بِمَا كَانُوا۟ يَعْمَلُونَ",
    translation: {
      en: "",
      ur: "اور جن لوگوں کو یہ مشرک خدا کے سوا پکارتے ہیں ان کو برا نہ کہنا کہ یہ بھی کہیں خدا کو بےادبی سے بے سمجھے برا (نہ) کہہ بیٹھیں۔ اس طرح ہم نے ہر ایک فرقے کے اعمال (ان کی نظروں میں) اچھے کر دکھائے ہیں۔ پھر ان کو اپنے پروردگار ک طرف لوٹ کر جانا ہے تب وہ ان کو بتائے گا کہ وہ کیا کیا کرتے تھے",
    },
    words: [
      { id: '6:108:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '6:108:2', arabic: "تَسُبُّوا۟", transliteration: "tasubbū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "insult", ur: "insult" } },
      { id: '6:108:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those whom", ur: "those whom" } },
      { id: '6:108:4', arabic: "يَدْعُونَ", transliteration: "yadʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they invoke", ur: "وہ لوگ invoke" } },
      { id: '6:108:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:108:6', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "other than", ur: "other than" } },
      { id: '6:108:7', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:108:8', arabic: "فَيَسُبُّوا۟", transliteration: "fayasubbū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "lest they insult", ur: "lest وہ لوگ insult" } },
      { id: '6:108:9', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:108:10', arabic: "عَدْوًۢا", transliteration: "ʿadwan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) enmity", ur: "(میں) enmity" } },
      { id: '6:108:11', arabic: "بِغَيْرِ", transliteration: "bighayri", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "without", ur: "without" } },
      { id: '6:108:12', arabic: "عِلْمٍۢ ۗ", transliteration: "ʿil'min", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "knowledge", ur: "knowledge" } },
      { id: '6:108:13', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '6:108:14', arabic: "زَيَّنَّا", transliteration: "zayyannā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have made fair-seeming", ur: "ہم have made fair-seeming" } },
      { id: '6:108:15', arabic: "لِكُلِّ", transliteration: "likulli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to every", ur: "کو ہر" } },
      { id: '6:108:16', arabic: "أُمَّةٍ", transliteration: "ummatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "community", ur: "community" } },
      { id: '6:108:17', arabic: "عَمَلَهُمْ", transliteration: "ʿamalahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "their deed", ur: "their deed" } },
      { id: '6:108:18', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '6:108:19', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '6:108:20', arabic: "رَبِّهِم", transliteration: "rabbihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their Lord", ur: "their رب" } },
      { id: '6:108:21', arabic: "مَّرْجِعُهُمْ", transliteration: "marjiʿuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) their return", ur: "(is) their return" } },
      { id: '6:108:22', arabic: "فَيُنَبِّئُهُم", transliteration: "fayunabbi-uhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then He will inform them", ur: "پھر وہ will inform them" } },
      { id: '6:108:23', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "about what", ur: "about کیا" } },
      { id: '6:108:24', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '6:108:25', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "do", ur: "do" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  109: {
    text: "وَأَقْسَمُوا۟ بِٱللَّهِ جَهْدَ أَيْمَـٰنِهِمْ لَئِن جَآءَتْهُمْ ءَايَةٌۭ لَّيُؤْمِنُنَّ بِهَا ۚ قُلْ إِنَّمَا ٱلْـَٔايَـٰتُ عِندَ ٱللَّهِ ۖ وَمَا يُشْعِرُكُمْ أَنَّهَآ إِذَا جَآءَتْ لَا يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "اور یہ لوگ خدا کی سخت سخت قسمیں کھاتے ہیں کہ اگر ان کے پاس کوئی نشانی آئے تو وہ اس پر ضروری ایمان لے آئیں۔ کہہ دو کہ نشانیاں تو سب خدا ہی کے پاس ہیں۔ اور (مومنو!) تمہیں کیا معلوم ہے (یہ تو ایسے بدبخت ہیں کہ ان کے پاس) نشانیاں آ بھی جائیں تب بھی ایمان نہ لائیں",
    },
    words: [
      { id: '6:109:1', arabic: "وَأَقْسَمُوا۟", transliteration: "wa-aqsamū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they swear", ur: "اور وہ لوگ swear" } },
      { id: '6:109:2', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by Allah", ur: "by اللہ" } },
      { id: '6:109:3', arabic: "جَهْدَ", transliteration: "jahda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "strongest", ur: "strongest" } },
      { id: '6:109:4', arabic: "أَيْمَـٰنِهِمْ", transliteration: "aymānihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) their oaths", ur: "(of) their oaths" } },
      { id: '6:109:5', arabic: "لَئِن", transliteration: "la-in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that if", ur: "وہ if" } },
      { id: '6:109:6', arabic: "جَآءَتْهُمْ", transliteration: "jāathum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came to them", ur: "came کو them" } },
      { id: '6:109:7', arabic: "ءَايَةٌۭ", transliteration: "āyatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a sign", ur: "a نشانی" } },
      { id: '6:109:8', arabic: "لَّيُؤْمِنُنَّ", transliteration: "layu'minunna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they would surely believe", ur: "وہ لوگ would یقیناً ایمان لانا" } },
      { id: '6:109:9', arabic: "بِهَا ۚ", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '6:109:10', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '6:109:11', arabic: "إِنَّمَا", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '6:109:12', arabic: "ٱلْـَٔايَـٰتُ", transliteration: "l-āyātu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the signs", ur: "the نشانیاں" } },
      { id: '6:109:13', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) with", ur: "(are) ساتھ" } },
      { id: '6:109:14', arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:109:15', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And what", ur: "اور کیا" } },
      { id: '6:109:16', arabic: "يُشْعِرُكُمْ", transliteration: "yush'ʿirukum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will make you perceive", ur: "will make تم perceive" } },
      { id: '6:109:17', arabic: "أَنَّهَآ", transliteration: "annahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that [it]", ur: "وہ [it]" } },
      { id: '6:109:18', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '6:109:19', arabic: "جَآءَتْ", transliteration: "jāat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it comes", ur: "it comes" } },
      { id: '6:109:20', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:109:21', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "they will believe", ur: "وہ لوگ will ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'نفی + فعل' }
      ],
    },
  },
  110: {
    text: "وَنُقَلِّبُ أَفْـِٔدَتَهُمْ وَأَبْصَـٰرَهُمْ كَمَا لَمْ يُؤْمِنُوا۟ بِهِۦٓ أَوَّلَ مَرَّةٍۢ وَنَذَرُهُمْ فِى طُغْيَـٰنِهِمْ يَعْمَهُونَ",
    translation: {
      en: "",
      ur: "اور ہم ان کے دلوں اور آنکھوں کو الٹ دیں گے (تو) جیسے یہ اس (قرآن) پر پہلی دفعہ ایمان نہیں لائے (ویسے پھر نہ لائیں گے) اور ان کو چھوڑ دیں گے کہ اپنی سرکشی میں بہکتے رہیں",
    },
    words: [
      { id: '6:110:1', arabic: "وَنُقَلِّبُ", transliteration: "wanuqallibu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We will turn", ur: "اور ہم will turn" } },
      { id: '6:110:2', arabic: "أَفْـِٔدَتَهُمْ", transliteration: "afidatahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their hearts", ur: "their hearts" } },
      { id: '6:110:3', arabic: "وَأَبْصَـٰرَهُمْ", transliteration: "wa-abṣārahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and their sights", ur: "اور their sights" } },
      { id: '6:110:4', arabic: "كَمَا", transliteration: "kamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(just) as", ur: "(just) as" } },
      { id: '6:110:5', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:110:6', arabic: "يُؤْمِنُوا۟", transliteration: "yu'minū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they believe", ur: "وہ لوگ ایمان لانا" } },
      { id: '6:110:7', arabic: "بِهِۦٓ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '6:110:8', arabic: "أَوَّلَ", transliteration: "awwala", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) first", ur: "(the) first" } },
      { id: '6:110:9', arabic: "مَرَّةٍۢ", transliteration: "marratin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "time", ur: "وقت" } },
      { id: '6:110:10', arabic: "وَنَذَرُهُمْ", transliteration: "wanadharuhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We will leave them", ur: "اور ہم will leave them" } },
      { id: '6:110:11', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '6:110:12', arabic: "طُغْيَـٰنِهِمْ", transliteration: "ṭugh'yānihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their transgression", ur: "their transgression" } },
      { id: '6:110:13', arabic: "يَعْمَهُونَ", transliteration: "yaʿmahūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "wandering blindly", ur: "wandering blindly" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  111: {
    text: "۞ وَلَوْ أَنَّنَا نَزَّلْنَآ إِلَيْهِمُ ٱلْمَلَـٰٓئِكَةَ وَكَلَّمَهُمُ ٱلْمَوْتَىٰ وَحَشَرْنَا عَلَيْهِمْ كُلَّ شَىْءٍۢ قُبُلًۭا مَّا كَانُوا۟ لِيُؤْمِنُوٓا۟ إِلَّآ أَن يَشَآءَ ٱللَّهُ وَلَـٰكِنَّ أَكْثَرَهُمْ يَجْهَلُونَ",
    translation: {
      en: "",
      ur: "اور اگر ہم ان پر فرشتے بھی اتار دیتے اور مردے بھی ان سے گفتگو کرنے لگتے اور ہم سب چیزوں کو ان کے سامنے لا موجود بھی کر دیتے تو بھی یہ ایمان لانے والے نہ تھے اِلّا ماشائالله بات یہ ہے کہ یہ اکثر نادان ہیں",
    },
    words: [
      { id: '6:111:1', arabic: "۞ وَلَوْ", transliteration: "walaw", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And (even) if", ur: "اور (even) if" } },
      { id: '6:111:2', arabic: "أَنَّنَا", transliteration: "annanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that] We (had)", ur: "[وہ] ہم (had)" } },
      { id: '6:111:3', arabic: "نَزَّلْنَآ", transliteration: "nazzalnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "[We] sent down", ur: "[ہم] sent down" } },
      { id: '6:111:4', arabic: "إِلَيْهِمُ", transliteration: "ilayhimu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '6:111:5', arabic: "ٱلْمَلَـٰٓئِكَةَ", transliteration: "l-malāikata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Angels", ur: "the Angels" } },
      { id: '6:111:6', arabic: "وَكَلَّمَهُمُ", transliteration: "wakallamahumu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and spoken to them", ur: "اور spoken کو them" } },
      { id: '6:111:7', arabic: "ٱلْمَوْتَىٰ", transliteration: "l-mawtā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the dead", ur: "the dead" } },
      { id: '6:111:8', arabic: "وَحَشَرْنَا", transliteration: "waḥasharnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We gathered", ur: "اور ہم gathered" } },
      { id: '6:111:9', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before them", ur: "پہلے them" } },
      { id: '6:111:10', arabic: "كُلَّ", transliteration: "kulla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '6:111:11', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '6:111:12', arabic: "قُبُلًۭا", transliteration: "qubulan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "face to face", ur: "face کو face" } },
      { id: '6:111:13', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:111:14', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they were", ur: "وہ لوگ were" } },
      { id: '6:111:15', arabic: "لِيُؤْمِنُوٓا۟", transliteration: "liyu'minū", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to believe", ur: "کو ایمان لانا" } },
      { id: '6:111:16', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "unless", ur: "unless" } },
      { id: '6:111:17', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '6:111:18', arabic: "يَشَآءَ", transliteration: "yashāa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "wills", ur: "wills" } },
      { id: '6:111:19', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:111:20', arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But", ur: "لیکن" } },
      { id: '6:111:21', arabic: "أَكْثَرَهُمْ", transliteration: "aktharahum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '6:111:22', arabic: "يَجْهَلُونَ", transliteration: "yajhalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) ignorant", ur: "(are) ignorant" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'فعل + فاعل' }
      ],
    },
  },
  112: {
    text: "وَكَذَٰلِكَ جَعَلْنَا لِكُلِّ نَبِىٍّ عَدُوًّۭا شَيَـٰطِينَ ٱلْإِنسِ وَٱلْجِنِّ يُوحِى بَعْضُهُمْ إِلَىٰ بَعْضٍۢ زُخْرُفَ ٱلْقَوْلِ غُرُورًۭا ۚ وَلَوْ شَآءَ رَبُّكَ مَا فَعَلُوهُ ۖ فَذَرْهُمْ وَمَا يَفْتَرُونَ",
    translation: {
      en: "",
      ur: "اور اسی طرح ہم نے شیطان (سیرت) انسانوں اور جنوں کو ہر پیغمبر کا دشمن بنا دیا تھا وہ دھوکا دینے کے لیے ایک دوسرے کے دل میں ملمع کی باتیں ڈالتے رہتے تھے اور اگر تمہارا پروردگار چاہتا تو وہ ایسا نہ کرتے تو ان کو اور جو کچھ یہ افتراء کرتے ہیں اسے چھوڑ دو",
    },
    words: [
      { id: '6:112:1', arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And thus", ur: "اور thus" } },
      { id: '6:112:2', arabic: "جَعَلْنَا", transliteration: "jaʿalnā", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "We made", ur: "ہم made" } },
      { id: '6:112:3', arabic: "لِكُلِّ", transliteration: "likulli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for every", ur: "for ہر" } },
      { id: '6:112:4', arabic: "نَبِىٍّ", transliteration: "nabiyyin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Prophet", ur: "نبی" } },
      { id: '6:112:5', arabic: "عَدُوًّۭا", transliteration: "ʿaduwwan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an enemy ", ur: "an enemy " } },
      { id: '6:112:6', arabic: "شَيَـٰطِينَ", transliteration: "shayāṭīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "devils", ur: "devils" } },
      { id: '6:112:7', arabic: "ٱلْإِنسِ", transliteration: "l-insi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(from) the mankind", ur: "(سے) the mankind" } },
      { id: '6:112:8', arabic: "وَٱلْجِنِّ", transliteration: "wal-jini", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the jinn", ur: "اور the jinn" } },
      { id: '6:112:9', arabic: "يُوحِى", transliteration: "yūḥī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "inspiring", ur: "inspiring" } },
      { id: '6:112:10', arabic: "بَعْضُهُمْ", transliteration: "baʿḍuhum", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "some of them", ur: "some of them" } },
      { id: '6:112:11', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '6:112:12', arabic: "بَعْضٍۢ", transliteration: "baʿḍin", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "others", ur: "others" } },
      { id: '6:112:13', arabic: "زُخْرُفَ", transliteration: "zukh'rufa", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(with) decorative", ur: "(ساتھ) decorative" } },
      { id: '6:112:14', arabic: "ٱلْقَوْلِ", transliteration: "l-qawli", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "[the] speech", ur: "[the] speech" } },
      { id: '6:112:15', arabic: "غُرُورًۭا ۚ", transliteration: "ghurūran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) deception", ur: "(میں) deception" } },
      { id: '6:112:16', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '6:112:17', arabic: "شَآءَ", transliteration: "shāa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(had) willed", ur: "(had) willed" } },
      { id: '6:112:18', arabic: "رَبُّكَ", transliteration: "rabbuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '6:112:19', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:112:20', arabic: "فَعَلُوهُ ۖ", transliteration: "faʿalūhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "they (would) have done it", ur: "وہ لوگ (would) have done it" } },
      { id: '6:112:21', arabic: "فَذَرْهُمْ", transliteration: "fadharhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so leave them", ur: "so leave them" } },
      { id: '6:112:22', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '6:112:23', arabic: "يَفْتَرُونَ", transliteration: "yaftarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they invent", ur: "وہ لوگ invent" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'موصوف + صفت' },
        { from: 17, to: 18, label: 'فعل + فاعل' }
      ],
    },
  },
  113: {
    text: "وَلِتَصْغَىٰٓ إِلَيْهِ أَفْـِٔدَةُ ٱلَّذِينَ لَا يُؤْمِنُونَ بِٱلْـَٔاخِرَةِ وَلِيَرْضَوْهُ وَلِيَقْتَرِفُوا۟ مَا هُم مُّقْتَرِفُونَ",
    translation: {
      en: "",
      ur: "اور (وہ ایسے کام) اس لیے بھی (کرتے تھے) کہ جو لوگ آخرت پر ایمان نہیں رکھتے ان کے دل ان کی باتوں پر مائل ہوں اور وہ انہیں پسند کریں اور جو کام وہ کرتے تھے وہ ہی کرنے لگیں",
    },
    words: [
      { id: '6:113:1', arabic: "وَلِتَصْغَىٰٓ", transliteration: "walitaṣghā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And so that incline", ur: "اور so وہ incline" } },
      { id: '6:113:2', arabic: "إِلَيْهِ", transliteration: "ilayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to it", ur: "کو it" } },
      { id: '6:113:3', arabic: "أَفْـِٔدَةُ", transliteration: "afidatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "hearts", ur: "hearts" } },
      { id: '6:113:4', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those who", ur: "(of) جو لوگ" } },
      { id: '6:113:5', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '6:113:6', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '6:113:7', arabic: "بِٱلْـَٔاخِرَةِ", transliteration: "bil-ākhirati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in the Hereafter", ur: "میں the آخرت" } },
      { id: '6:113:8', arabic: "وَلِيَرْضَوْهُ", transliteration: "waliyarḍawhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and so that they may be pleased with it", ur: "اور so وہ وہ لوگ may be pleased ساتھ it" } },
      { id: '6:113:9', arabic: "وَلِيَقْتَرِفُوا۟", transliteration: "waliyaqtarifū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and so that they may commit", ur: "اور so وہ وہ لوگ may commit" } },
      { id: '6:113:10', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:113:11', arabic: "هُم", transliteration: "hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '6:113:12', arabic: "مُّقْتَرِفُونَ", transliteration: "muq'tarifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) committing", ur: "(are) committing" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'نفی + فعل' }
      ],
    },
  },
  114: {
    text: "أَفَغَيْرَ ٱللَّهِ أَبْتَغِى حَكَمًۭا وَهُوَ ٱلَّذِىٓ أَنزَلَ إِلَيْكُمُ ٱلْكِتَـٰبَ مُفَصَّلًۭا ۚ وَٱلَّذِينَ ءَاتَيْنَـٰهُمُ ٱلْكِتَـٰبَ يَعْلَمُونَ أَنَّهُۥ مُنَزَّلٌۭ مِّن رَّبِّكَ بِٱلْحَقِّ ۖ فَلَا تَكُونَنَّ مِنَ ٱلْمُمْتَرِينَ",
    translation: {
      en: "",
      ur: "(کہو) کیا میں خدا کے سوا اور منصف تلاش کروں حالانکہ اس نے تمہاری طرف واضع المطالب کتاب بھیجی ہے اور جن لوگوں کو ہم نے کتاب (تورات) دی ہے وہ جانتے ہیں کہ وہ تمہارے پروردگار کی طرف سے برحق نازل ہوئی ہے تو تم ہرگز شک کرنے والوں میں نہ ہونا",
    },
    words: [
      { id: '6:114:1', arabic: "أَفَغَيْرَ", transliteration: "afaghayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then is (it) other than", ur: "پھر is (it) other than" } },
      { id: '6:114:2', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:114:3', arabic: "أَبْتَغِى", transliteration: "abtaghī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I seek", ur: "میں seek" } },
      { id: '6:114:4', arabic: "حَكَمًۭا", transliteration: "ḥakaman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) judge", ur: "(as) judge" } },
      { id: '6:114:5', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while He", ur: "while وہ" } },
      { id: '6:114:6', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '6:114:7', arabic: "أَنزَلَ", transliteration: "anzala", pos: ['V'], posLabel: 'V', root: "ن ز ل", meaning: { en: "has revealed", ur: "has revealed" } },
      { id: '6:114:8', arabic: "إِلَيْكُمُ", transliteration: "ilaykumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '6:114:9', arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '6:114:10', arabic: "مُفَصَّلًۭا ۚ", transliteration: "mufaṣṣalan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "explained in detail", ur: "explained میں detail" } },
      { id: '6:114:11', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those (to) whom", ur: "اور those (کو) whom" } },
      { id: '6:114:12', arabic: "ءَاتَيْنَـٰهُمُ", transliteration: "ātaynāhumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We gave them", ur: "ہم gave them" } },
      { id: '6:114:13', arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '6:114:14', arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "they know", ur: "وہ لوگ جاننا" } },
      { id: '6:114:15', arabic: "أَنَّهُۥ", transliteration: "annahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that it", ur: "وہ it" } },
      { id: '6:114:16', arabic: "مُنَزَّلٌۭ", transliteration: "munazzalun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) sent down", ur: "(is) sent down" } },
      { id: '6:114:17', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:114:18', arabic: "رَّبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '6:114:19', arabic: "بِٱلْحَقِّ ۖ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in truth", ur: "میں سچ" } },
      { id: '6:114:20', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so (do) not", ur: "so (do) نہیں" } },
      { id: '6:114:21', arabic: "تَكُونَنَّ", transliteration: "takūnanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be", ur: "be" } },
      { id: '6:114:22', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '6:114:23', arabic: "ٱلْمُمْتَرِينَ", transliteration: "l-mum'tarīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who doubt", ur: "the ones جو doubt" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  115: {
    text: "وَتَمَّتْ كَلِمَتُ رَبِّكَ صِدْقًۭا وَعَدْلًۭا ۚ لَّا مُبَدِّلَ لِكَلِمَـٰتِهِۦ ۚ وَهُوَ ٱلسَّمِيعُ ٱلْعَلِيمُ",
    translation: {
      en: "",
      ur: "اور تمہارے پروردگار کی باتیں سچائی اور انصاف میں پوری ہیں اس کی باتوں کو کوئی بدلنے والا نہیں اور وہ سنتا جانتا ہے",
    },
    words: [
      { id: '6:115:1', arabic: "وَتَمَّتْ", transliteration: "watammat", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (has been) fulfilled", ur: "اور (has been) fulfilled" } },
      { id: '6:115:2', arabic: "كَلِمَتُ", transliteration: "kalimatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) word", ur: "(the) word" } },
      { id: '6:115:3', arabic: "رَبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) your Lord", ur: "(of) your رب" } },
      { id: '6:115:4', arabic: "صِدْقًۭا", transliteration: "ṣid'qan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) truth", ur: "(میں) سچ" } },
      { id: '6:115:5', arabic: "وَعَدْلًۭا ۚ", transliteration: "waʿadlan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and justice", ur: "اور justice" } },
      { id: '6:115:6', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "No", ur: "نہیں" } },
      { id: '6:115:7', arabic: "مُبَدِّلَ", transliteration: "mubaddila", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "one can change", ur: "one can change" } },
      { id: '6:115:8', arabic: "لِكَلِمَـٰتِهِۦ ۚ", transliteration: "likalimātihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "His words", ur: "His words" } },
      { id: '6:115:9', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and He", ur: "اور وہ" } },
      { id: '6:115:10', arabic: "ٱلسَّمِيعُ", transliteration: "l-samīʿu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) the All-Hearer", ur: "(is) the سب-Hearer" } },
      { id: '6:115:11', arabic: "ٱلْعَلِيمُ", transliteration: "l-ʿalīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the All-Knower", ur: "the سب-Knower" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  116: {
    text: "وَإِن تُطِعْ أَكْثَرَ مَن فِى ٱلْأَرْضِ يُضِلُّوكَ عَن سَبِيلِ ٱللَّهِ ۚ إِن يَتَّبِعُونَ إِلَّا ٱلظَّنَّ وَإِنْ هُمْ إِلَّا يَخْرُصُونَ",
    translation: {
      en: "",
      ur: "اور اکثر لوگ جو زمین پر آباد ہیں (گمراہ ہیں) اگر تم ان کا کہا مان لو گے تو وہ تمہیں خدا کا رستہ بھلا دیں گے یہ محض خیال کے پیچھے چلتے اور نرے اٹکل کے تیر چلاتے ہیں",
    },
    words: [
      { id: '6:116:1', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '6:116:2', arabic: "تُطِعْ", transliteration: "tuṭiʿ", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you obey", ur: "تم obey" } },
      { id: '6:116:3', arabic: "أَكْثَرَ", transliteration: "akthara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "most", ur: "most" } },
      { id: '6:116:4', arabic: "مَن", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '6:116:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(those) in", ur: "(those) میں" } },
      { id: '6:116:6', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '6:116:7', arabic: "يُضِلُّوكَ", transliteration: "yuḍillūka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will mislead you", ur: "وہ لوگ will mislead تم" } },
      { id: '6:116:8', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:116:9', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '6:116:10', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '6:116:11', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '6:116:12', arabic: "يَتَّبِعُونَ", transliteration: "yattabiʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they follow", ur: "وہ لوگ follow" } },
      { id: '6:116:13', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:116:14', arabic: "ٱلظَّنَّ", transliteration: "l-ẓana", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] assumption", ur: "[the] assumption" } },
      { id: '6:116:15', arabic: "وَإِنْ", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '6:116:16', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they (do)", ur: "وہ لوگ (do)" } },
      { id: '6:116:17', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:116:18', arabic: "يَخْرُصُونَ", transliteration: "yakhruṣūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "guess", ur: "guess" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  117: {
    text: "إِنَّ رَبَّكَ هُوَ أَعْلَمُ مَن يَضِلُّ عَن سَبِيلِهِۦ ۖ وَهُوَ أَعْلَمُ بِٱلْمُهْتَدِينَ",
    translation: {
      en: "",
      ur: "تمہارا پروردگار ان لوگوں کو خوب جانتا ہے جو اس کے رستے سے بھٹکے ہوئے ہیں اور ان سے بھی خوب واقف ہے جو رستے پر چل رہے ہیں",
    },
    words: [
      { id: '6:117:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '6:117:2', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '6:117:3', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '6:117:4', arabic: "أَعْلَمُ", transliteration: "aʿlamu", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "knows best", ur: "knows best" } },
      { id: '6:117:5', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '6:117:6', arabic: "يَضِلُّ", transliteration: "yaḍillu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "strays", ur: "strays" } },
      { id: '6:117:7', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:117:8', arabic: "سَبِيلِهِۦ ۖ", transliteration: "sabīlihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His way", ur: "His راستہ" } },
      { id: '6:117:9', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and He", ur: "اور وہ" } },
      { id: '6:117:10', arabic: "أَعْلَمُ", transliteration: "aʿlamu", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "(is) most knowing", ur: "(is) most knowing" } },
      { id: '6:117:11', arabic: "بِٱلْمُهْتَدِينَ", transliteration: "bil-muh'tadīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of the guided-ones", ur: "of the guided-ones" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  118: {
    text: "فَكُلُوا۟ مِمَّا ذُكِرَ ٱسْمُ ٱللَّهِ عَلَيْهِ إِن كُنتُم بِـَٔايَـٰتِهِۦ مُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "تو جس چیز پر (ذبح کے وقت) خدا کا نام لیا جائے اگر تم اس کی آیتوں پر ایمان رکھتے ہو تو اسے کھا لیا کرو",
    },
    words: [
      { id: '6:118:1', arabic: "فَكُلُوا۟", transliteration: "fakulū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So eat", ur: "So eat" } },
      { id: '6:118:2', arabic: "مِمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '6:118:3', arabic: "ذُكِرَ", transliteration: "dhukira", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) mentioned", ur: "(is) mentioned" } },
      { id: '6:118:4', arabic: "ٱسْمُ", transliteration: "us'mu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) name", ur: "(the) name" } },
      { id: '6:118:5', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '6:118:6', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on it", ur: "پر it" } },
      { id: '6:118:7', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '6:118:8', arabic: "كُنتُم", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '6:118:9', arabic: "بِـَٔايَـٰتِهِۦ", transliteration: "biāyātihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in His Verses ", ur: "میں His Verses " } },
      { id: '6:118:10', arabic: "مُؤْمِنِينَ", transliteration: "mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believers", ur: "مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
  119: {
    text: "وَمَا لَكُمْ أَلَّا تَأْكُلُوا۟ مِمَّا ذُكِرَ ٱسْمُ ٱللَّهِ عَلَيْهِ وَقَدْ فَصَّلَ لَكُم مَّا حَرَّمَ عَلَيْكُمْ إِلَّا مَا ٱضْطُرِرْتُمْ إِلَيْهِ ۗ وَإِنَّ كَثِيرًۭا لَّيُضِلُّونَ بِأَهْوَآئِهِم بِغَيْرِ عِلْمٍ ۗ إِنَّ رَبَّكَ هُوَ أَعْلَمُ بِٱلْمُعْتَدِينَ",
    translation: {
      en: "",
      ur: "اور سبب کیا ہے کہ جس چیز پر خدا کا نام لیا جائے تم اسے نہ کھاؤ حالانکہ جو چیزیں اس نے تمہارے لیے حرام ٹھیرا دی ہیں وہ ایک ایک کر کے بیان کر دی ہیں (بے شک ان کو نہیں کھانا چاہیے) مگر اس صورت میں کہ ان کے (کھانے کے) لیے ناچار ہو جاؤ اور بہت سے لوگ بےسمجھے بوجھے اپنے نفس کی خواہشوں سے لوگوں کو بہکا رہے ہیں کچھ شک نہیں کہ ایسے لوگوں کو جو (خدا کی مقرر کی ہوئی) حد سے باہر نکل جاتے ہیں تمہارا پروردگار خوب جانتا ہے",
    },
    words: [
      { id: '6:119:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And what", ur: "اور کیا" } },
      { id: '6:119:2', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '6:119:3', arabic: "أَلَّا", transliteration: "allā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that not", ur: "وہ نہیں" } },
      { id: '6:119:4', arabic: "تَأْكُلُوا۟", transliteration: "takulū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you eat", ur: "تم eat" } },
      { id: '6:119:5', arabic: "مِمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '6:119:6', arabic: "ذُكِرَ", transliteration: "dhukira", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has been mentioned", ur: "has been mentioned" } },
      { id: '6:119:7', arabic: "ٱسْمُ", transliteration: "us'mu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) name", ur: "(the) name" } },
      { id: '6:119:8', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '6:119:9', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on it", ur: "پر it" } },
      { id: '6:119:10', arabic: "وَقَدْ", transliteration: "waqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "when indeed", ur: "when بیشک" } },
      { id: '6:119:11', arabic: "فَصَّلَ", transliteration: "faṣṣala", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "He (has) explained in detail", ur: "وہ (has) explained میں detail" } },
      { id: '6:119:12', arabic: "لَكُم", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '6:119:13', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:119:14', arabic: "حَرَّمَ", transliteration: "ḥarrama", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He (has) forbidden", ur: "وہ (has) forbidden" } },
      { id: '6:119:15', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '6:119:16', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:119:17', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:119:18', arabic: "ٱضْطُرِرْتُمْ", transliteration: "uḍ'ṭurir'tum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are compelled", ur: "تم are compelled" } },
      { id: '6:119:19', arabic: "إِلَيْهِ ۗ", transliteration: "ilayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to it", ur: "کو it" } },
      { id: '6:119:20', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '6:119:21', arabic: "كَثِيرًۭا", transliteration: "kathīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "many", ur: "many" } },
      { id: '6:119:22', arabic: "لَّيُضِلُّونَ", transliteration: "layuḍillūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely lead astray", ur: "یقیناً lead astray" } },
      { id: '6:119:23', arabic: "بِأَهْوَآئِهِم", transliteration: "bi-ahwāihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by their (vain) desires", ur: "by their (vain) desires" } },
      { id: '6:119:24', arabic: "بِغَيْرِ", transliteration: "bighayri", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "without", ur: "without" } },
      { id: '6:119:25', arabic: "عِلْمٍ ۗ", transliteration: "ʿil'min", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "knowledge", ur: "knowledge" } },
      { id: '6:119:26', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '6:119:27', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '6:119:28', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '6:119:29', arabic: "أَعْلَمُ", transliteration: "aʿlamu", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "(is) most knowing", ur: "(is) most knowing" } },
      { id: '6:119:30', arabic: "بِٱلْمُعْتَدِينَ", transliteration: "bil-muʿ'tadīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of the transgressors", ur: "of the transgressors" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'موصول + صلة' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'جار + مجرور' },
        { from: 26, to: 27, label: 'فعل + فاعل' }
      ],
    },
  },
  120: {
    text: "وَذَرُوا۟ ظَـٰهِرَ ٱلْإِثْمِ وَبَاطِنَهُۥٓ ۚ إِنَّ ٱلَّذِينَ يَكْسِبُونَ ٱلْإِثْمَ سَيُجْزَوْنَ بِمَا كَانُوا۟ يَقْتَرِفُونَ",
    translation: {
      en: "",
      ur: "اور ظاہری اور پوشیدہ (ہر طرح کا) گناہ ترک کر دو جو لوگ گناہ کرتے ہیں وہ عنقریب اپنے کئے کی سزا پائیں گے",
    },
    words: [
      { id: '6:120:1', arabic: "وَذَرُوا۟", transliteration: "wadharū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "Forsake", ur: "Forsake" } },
      { id: '6:120:2', arabic: "ظَـٰهِرَ", transliteration: "ẓāhira", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "open", ur: "open" } },
      { id: '6:120:3', arabic: "ٱلْإِثْمِ", transliteration: "l-ith'mi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] sins", ur: "[the] sins" } },
      { id: '6:120:4', arabic: "وَبَاطِنَهُۥٓ ۚ", transliteration: "wabāṭinahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the secret", ur: "اور the secret" } },
      { id: '6:120:5', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '6:120:6', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '6:120:7', arabic: "يَكْسِبُونَ", transliteration: "yaksibūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "earn", ur: "earn" } },
      { id: '6:120:8', arabic: "ٱلْإِثْمَ", transliteration: "l-ith'ma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] sin", ur: "[the] sin" } },
      { id: '6:120:9', arabic: "سَيُجْزَوْنَ", transliteration: "sayuj'zawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will be recompensed", ur: "وہ لوگ will be recompensed" } },
      { id: '6:120:10', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '6:120:11', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '6:120:12', arabic: "يَقْتَرِفُونَ", transliteration: "yaqtarifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "commit", ur: "commit" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  121: {
    text: "وَلَا تَأْكُلُوا۟ مِمَّا لَمْ يُذْكَرِ ٱسْمُ ٱللَّهِ عَلَيْهِ وَإِنَّهُۥ لَفِسْقٌۭ ۗ وَإِنَّ ٱلشَّيَـٰطِينَ لَيُوحُونَ إِلَىٰٓ أَوْلِيَآئِهِمْ لِيُجَـٰدِلُوكُمْ ۖ وَإِنْ أَطَعْتُمُوهُمْ إِنَّكُمْ لَمُشْرِكُونَ",
    translation: {
      en: "",
      ur: "اور جس چیز پر خدا کا نام نہ لیا جائے اسے مت کھاؤ کہ اس کا کھانا گناہ ہے اور شیطان (لوگ) اپنے رفیقوں کے دلوں میں یہ بات ڈالتے ہیں کہ تم سے جھگڑا کریں اور اگر تم لوگ ان کے کہے پر چلے تو بےشک تم بھی مشرک ہوئے",
    },
    words: [
      { id: '6:121:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '6:121:2', arabic: "تَأْكُلُوا۟", transliteration: "takulū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "eat", ur: "eat" } },
      { id: '6:121:3', arabic: "مِمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of that", ur: "of وہ" } },
      { id: '6:121:4', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:121:5', arabic: "يُذْكَرِ", transliteration: "yudh'kari", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has been mentioned", ur: "has been mentioned" } },
      { id: '6:121:6', arabic: "ٱسْمُ", transliteration: "us'mu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) name", ur: "(the) name" } },
      { id: '6:121:7', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '6:121:8', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on it", ur: "پر it" } },
      { id: '6:121:9', arabic: "وَإِنَّهُۥ", transliteration: "wa-innahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and indeed, it (is)", ur: "اور بیشک, it (is)" } },
      { id: '6:121:10', arabic: "لَفِسْقٌۭ ۗ", transliteration: "lafis'qun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "grave disobedience", ur: "grave disobedience" } },
      { id: '6:121:11', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '6:121:12', arabic: "ٱلشَّيَـٰطِينَ", transliteration: "l-shayāṭīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the devils", ur: "the devils" } },
      { id: '6:121:13', arabic: "لَيُوحُونَ", transliteration: "layūḥūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "inspire", ur: "inspire" } },
      { id: '6:121:14', arabic: "إِلَىٰٓ", transliteration: "ilā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '6:121:15', arabic: "أَوْلِيَآئِهِمْ", transliteration: "awliyāihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their friends", ur: "their friends" } },
      { id: '6:121:16', arabic: "لِيُجَـٰدِلُوكُمْ ۖ", transliteration: "liyujādilūkum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "so that they dispute with you", ur: "so وہ وہ لوگ dispute ساتھ تم" } },
      { id: '6:121:17', arabic: "وَإِنْ", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and if", ur: "اور if" } },
      { id: '6:121:18', arabic: "أَطَعْتُمُوهُمْ", transliteration: "aṭaʿtumūhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you obey them", ur: "تم obey them" } },
      { id: '6:121:19', arabic: "إِنَّكُمْ", transliteration: "innakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed, you", ur: "بیشک, تم" } },
      { id: '6:121:20', arabic: "لَمُشْرِكُونَ", transliteration: "lamush'rikūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(would) be the polytheists", ur: "(would) be the polytheists" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  122: {
    text: "أَوَمَن كَانَ مَيْتًۭا فَأَحْيَيْنَـٰهُ وَجَعَلْنَا لَهُۥ نُورًۭا يَمْشِى بِهِۦ فِى ٱلنَّاسِ كَمَن مَّثَلُهُۥ فِى ٱلظُّلُمَـٰتِ لَيْسَ بِخَارِجٍۢ مِّنْهَا ۚ كَذَٰلِكَ زُيِّنَ لِلْكَـٰفِرِينَ مَا كَانُوا۟ يَعْمَلُونَ",
    translation: {
      en: "",
      ur: "بھلا جو پہلے مردہ تھا پھر ہم نے اس کو زندہ کیا اور اس کے لیے روشنی کر دی جس کے ذریعے سے وہ لوگوں میں چلتا پھرتا ہے کہیں اس شخص جیسا ہو سکتا ہے جو اندھیرے میں پڑا ہوا ہو اور اس سے نکل ہی نہ سکے اسی طرح کافر جو عمل کر رہے ہیں وہ انہیں اچھے معلوم ہوتے ہیں",
    },
    words: [
      { id: '6:122:1', arabic: "أَوَمَن", transliteration: "awaman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is (one) who", ur: "Is (one) جو" } },
      { id: '6:122:2', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '6:122:3', arabic: "مَيْتًۭا", transliteration: "maytan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "dead", ur: "dead" } },
      { id: '6:122:4', arabic: "فَأَحْيَيْنَـٰهُ", transliteration: "fa-aḥyaynāhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and We gave him life", ur: "اور ہم gave him زندگی" } },
      { id: '6:122:5', arabic: "وَجَعَلْنَا", transliteration: "wajaʿalnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "and We made", ur: "اور ہم made" } },
      { id: '6:122:6', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '6:122:7', arabic: "نُورًۭا", transliteration: "nūran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "light", ur: "light" } },
      { id: '6:122:8', arabic: "يَمْشِى", transliteration: "yamshī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he walks", ur: "وہ walks" } },
      { id: '6:122:9', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "whereby", ur: "whereby" } },
      { id: '6:122:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "among", ur: "among" } },
      { id: '6:122:11', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '6:122:12', arabic: "كَمَن", transliteration: "kaman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like (one) who", ur: "like (one) جو" } },
      { id: '6:122:13', arabic: "مَّثَلُهُۥ", transliteration: "mathaluhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[similar to him]", ur: "[similar کو him]" } },
      { id: '6:122:14', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '6:122:15', arabic: "ٱلظُّلُمَـٰتِ", transliteration: "l-ẓulumāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the darknesses", ur: "the darknesses" } },
      { id: '6:122:16', arabic: "لَيْسَ", transliteration: "laysa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:122:17', arabic: "بِخَارِجٍۢ", transliteration: "bikhārijin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "he comes out", ur: "وہ comes out" } },
      { id: '6:122:18', arabic: "مِّنْهَا ۚ", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '6:122:19', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '6:122:20', arabic: "زُيِّنَ", transliteration: "zuyyina", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is made fair-seeming", ur: "is made fair-seeming" } },
      { id: '6:122:21', arabic: "لِلْكَـٰفِرِينَ", transliteration: "lil'kāfirīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the disbelievers", ur: "کو the کافر" } },
      { id: '6:122:22', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:122:23', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they were", ur: "وہ لوگ were" } },
      { id: '6:122:24', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "doing", ur: "doing" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'جار + مجرور' },
        { from: 22, to: 23, label: 'موصول + صلة' }
      ],
    },
  },
  123: {
    text: "وَكَذَٰلِكَ جَعَلْنَا فِى كُلِّ قَرْيَةٍ أَكَـٰبِرَ مُجْرِمِيهَا لِيَمْكُرُوا۟ فِيهَا ۖ وَمَا يَمْكُرُونَ إِلَّا بِأَنفُسِهِمْ وَمَا يَشْعُرُونَ",
    translation: {
      en: "",
      ur: "اور اسی طرح ہم نے ہر بستی میں بڑے بڑے مجرم پیدا کئے کہ ان میں مکاریاں کرتے رہیں اور جو مکاریاں یہ کرتے ہیں ان کا نقصان انہیں کو ہے اور (اس سے) بےخبر ہیں",
    },
    words: [
      { id: '6:123:1', arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And thus", ur: "اور thus" } },
      { id: '6:123:2', arabic: "جَعَلْنَا", transliteration: "jaʿalnā", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "We placed", ur: "ہم placed" } },
      { id: '6:123:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '6:123:4', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '6:123:5', arabic: "قَرْيَةٍ", transliteration: "qaryatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "city", ur: "city" } },
      { id: '6:123:6', arabic: "أَكَـٰبِرَ", transliteration: "akābira", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "greatest", ur: "greatest" } },
      { id: '6:123:7', arabic: "مُجْرِمِيهَا", transliteration: "muj'rimīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) its criminals", ur: "(of) its criminals" } },
      { id: '6:123:8', arabic: "لِيَمْكُرُوا۟", transliteration: "liyamkurū", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "so that they plot", ur: "so وہ وہ لوگ plot" } },
      { id: '6:123:9', arabic: "فِيهَا ۖ", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '6:123:10', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '6:123:11', arabic: "يَمْكُرُونَ", transliteration: "yamkurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they plot", ur: "وہ لوگ plot" } },
      { id: '6:123:12', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:123:13', arabic: "بِأَنفُسِهِمْ", transliteration: "bi-anfusihim", pos: ['P+N'], posLabel: 'P+N', root: "ن ف س", meaning: { en: "against themselves", ur: "against themselves" } },
      { id: '6:123:14', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '6:123:15', arabic: "يَشْعُرُونَ", transliteration: "yashʿurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they perceive", ur: "وہ لوگ perceive" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'موصوف + صفت' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  124: {
    text: "وَإِذَا جَآءَتْهُمْ ءَايَةٌۭ قَالُوا۟ لَن نُّؤْمِنَ حَتَّىٰ نُؤْتَىٰ مِثْلَ مَآ أُوتِىَ رُسُلُ ٱللَّهِ ۘ ٱللَّهُ أَعْلَمُ حَيْثُ يَجْعَلُ رِسَالَتَهُۥ ۗ سَيُصِيبُ ٱلَّذِينَ أَجْرَمُوا۟ صَغَارٌ عِندَ ٱللَّهِ وَعَذَابٌۭ شَدِيدٌۢ بِمَا كَانُوا۟ يَمْكُرُونَ",
    translation: {
      en: "",
      ur: "اور جب ان کے پاس کوئی آیت آتی ہے تو کہتے ہیں کہ جس طرح کی رسالت خدا کے پیغمبروں کو ملی ہے جب تک اسی طرح کی رسالت ہم کو نہ ملے ہم ہرگز ایمان نہیں لائیں گے اس کو خدا ہی خوب جانتا ہے کہ (رسالت کا کون سا محل ہے اور) وہ اپنی پیغمبری کسے عنایت فرمائے جو لوگ جرم کرتے ہیں ان کو خدا کے ہاں ذلّت اور عذابِ شدید ہوگا اس لیے کہ مکّاریاں کرتے تھے",
    },
    words: [
      { id: '6:124:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '6:124:2', arabic: "جَآءَتْهُمْ", transliteration: "jāathum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "comes to them", ur: "comes کو them" } },
      { id: '6:124:3', arabic: "ءَايَةٌۭ", transliteration: "āyatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Sign", ur: "a نشانی" } },
      { id: '6:124:4', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they say", ur: "وہ لوگ کہو" } },
      { id: '6:124:5', arabic: "لَن", transliteration: "lan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Never", ur: "Never" } },
      { id: '6:124:6', arabic: "نُّؤْمِنَ", transliteration: "nu'mina", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we will believe", ur: "ہم will ایمان لانا" } },
      { id: '6:124:7', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '6:124:8', arabic: "نُؤْتَىٰ", transliteration: "nu'tā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we are given", ur: "ہم are given" } },
      { id: '6:124:9', arabic: "مِثْلَ", transliteration: "mith'la", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like", ur: "like" } },
      { id: '6:124:10', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:124:11', arabic: "أُوتِىَ", transliteration: "ūtiya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "was given", ur: "was given" } },
      { id: '6:124:12', arabic: "رُسُلُ", transliteration: "rusulu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to the) Messengers", ur: "(کو the) Messengers" } },
      { id: '6:124:13', arabic: "ٱللَّهِ ۘ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '6:124:14', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:124:15', arabic: "أَعْلَمُ", transliteration: "aʿlamu", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "knows best", ur: "knows best" } },
      { id: '6:124:16', arabic: "حَيْثُ", transliteration: "ḥaythu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "where", ur: "where" } },
      { id: '6:124:17', arabic: "يَجْعَلُ", transliteration: "yajʿalu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He places", ur: "وہ places" } },
      { id: '6:124:18', arabic: "رِسَالَتَهُۥ ۗ", transliteration: "risālatahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His Message", ur: "His Message" } },
      { id: '6:124:19', arabic: "سَيُصِيبُ", transliteration: "sayuṣību", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Will afflict", ur: "Will afflict" } },
      { id: '6:124:20', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '6:124:21', arabic: "أَجْرَمُوا۟", transliteration: "ajramū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "committed crimes", ur: "committed crimes" } },
      { id: '6:124:22', arabic: "صَغَارٌ", transliteration: "ṣaghārun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a humiliation", ur: "a humiliation" } },
      { id: '6:124:23', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:124:24', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:124:25', arabic: "وَعَذَابٌۭ", transliteration: "waʿadhābun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع ذ ب", meaning: { en: "and a punishment", ur: "اور a عذاب" } },
      { id: '6:124:26', arabic: "شَدِيدٌۢ", transliteration: "shadīdun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "severe", ur: "severe" } },
      { id: '6:124:27', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '6:124:28', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '6:124:29', arabic: "يَمْكُرُونَ", transliteration: "yamkurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "plot", ur: "plot" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' }
      ],
    },
  },
  125: {
    text: "فَمَن يُرِدِ ٱللَّهُ أَن يَهْدِيَهُۥ يَشْرَحْ صَدْرَهُۥ لِلْإِسْلَـٰمِ ۖ وَمَن يُرِدْ أَن يُضِلَّهُۥ يَجْعَلْ صَدْرَهُۥ ضَيِّقًا حَرَجًۭا كَأَنَّمَا يَصَّعَّدُ فِى ٱلسَّمَآءِ ۚ كَذَٰلِكَ يَجْعَلُ ٱللَّهُ ٱلرِّجْسَ عَلَى ٱلَّذِينَ لَا يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "تو جس شخص کو خدا چاہتا ہے کہ ہدایت بخشے اس کا سینہ اسلام کے لیے کھول دیتا ہے اور جسے چاہتا ہے کہ گمراہ کرے اس کا سینہ تنگ اور گھٹا ہوا کر دیتا ہے گویا وہ آسمان پر چڑھ رہا ہے اس طرح خدا ان لوگوں پر جو ایمان نہیں لاتے عذاب بھیجتا ہے",
    },
    words: [
      { id: '6:125:1', arabic: "فَمَن", transliteration: "faman", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So whoever", ur: "So whoever" } },
      { id: '6:125:2', arabic: "يُرِدِ", transliteration: "yuridi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "wants", ur: "wants" } },
      { id: '6:125:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:125:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '6:125:5', arabic: "يَهْدِيَهُۥ", transliteration: "yahdiyahu", pos: ['V'], posLabel: 'V', root: "ه د ي", meaning: { en: "He guides him ", ur: "وہ guides him " } },
      { id: '6:125:6', arabic: "يَشْرَحْ", transliteration: "yashraḥ", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He expands", ur: "وہ expands" } },
      { id: '6:125:7', arabic: "صَدْرَهُۥ", transliteration: "ṣadrahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his breast", ur: "his breast" } },
      { id: '6:125:8', arabic: "لِلْإِسْلَـٰمِ ۖ", transliteration: "lil'is'lāmi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Islam", ur: "کو Islam" } },
      { id: '6:125:9', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '6:125:10', arabic: "يُرِدْ", transliteration: "yurid", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He wants", ur: "وہ wants" } },
      { id: '6:125:11', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '6:125:12', arabic: "يُضِلَّهُۥ", transliteration: "yuḍillahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He lets him go astray", ur: "وہ lets him go astray" } },
      { id: '6:125:13', arabic: "يَجْعَلْ", transliteration: "yajʿal", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He makes", ur: "وہ makes" } },
      { id: '6:125:14', arabic: "صَدْرَهُۥ", transliteration: "ṣadrahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his breast", ur: "his breast" } },
      { id: '6:125:15', arabic: "ضَيِّقًا", transliteration: "ḍayyiqan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "tight", ur: "tight" } },
      { id: '6:125:16', arabic: "حَرَجًۭا", transliteration: "ḥarajan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "and constricted", ur: "اور constricted" } },
      { id: '6:125:17', arabic: "كَأَنَّمَا", transliteration: "ka-annamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "as though", ur: "as though" } },
      { id: '6:125:18', arabic: "يَصَّعَّدُ", transliteration: "yaṣṣaʿʿadu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he (were) climbing", ur: "وہ (were) climbing" } },
      { id: '6:125:19', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "into", ur: "into" } },
      { id: '6:125:20', arabic: "ٱلسَّمَآءِ ۚ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sky", ur: "the sky" } },
      { id: '6:125:21', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '6:125:22', arabic: "يَجْعَلُ", transliteration: "yajʿalu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "places", ur: "places" } },
      { id: '6:125:23', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:125:24', arabic: "ٱلرِّجْسَ", transliteration: "l-rij'sa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the filth", ur: "the filth" } },
      { id: '6:125:25', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '6:125:26', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '6:125:27', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '6:125:28', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "believe", ur: "ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'جار + مجرور' },
        { from: 22, to: 23, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'مضاف + مضاف إليه' },
        { from: 25, to: 26, label: 'جار + مجرور' },
        { from: 27, to: 28, label: 'نفی + فعل' }
      ],
    },
  },
  126: {
    text: "وَهَـٰذَا صِرَٰطُ رَبِّكَ مُسْتَقِيمًۭا ۗ قَدْ فَصَّلْنَا ٱلْـَٔايَـٰتِ لِقَوْمٍۢ يَذَّكَّرُونَ",
    translation: {
      en: "",
      ur: "اور یہی تمہارے پروردگار کا سیدھا رستہ ہے جو لوگ غور کرنے والے ہیں ان کے لیے ہم نے اپنی آیتیں کھول کھول کر بیان کر دی ہیں",
    },
    words: [
      { id: '6:126:1', arabic: "وَهَـٰذَا", transliteration: "wahādhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And this", ur: "اور this" } },
      { id: '6:126:2', arabic: "صِرَٰطُ", transliteration: "ṣirāṭu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is the) way", ur: "(is the) راستہ" } },
      { id: '6:126:3', arabic: "رَبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) your Lord ", ur: "(of) your رب " } },
      { id: '6:126:4', arabic: "مُسْتَقِيمًۭا ۗ", transliteration: "mus'taqīman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "straight", ur: "سیدھا" } },
      { id: '6:126:5', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Certainly", ur: "Certainly" } },
      { id: '6:126:6', arabic: "فَصَّلْنَا", transliteration: "faṣṣalnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "We have detailed", ur: "ہم have detailed" } },
      { id: '6:126:7', arabic: "ٱلْـَٔايَـٰتِ", transliteration: "l-āyāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Verses", ur: "the Verses" } },
      { id: '6:126:8', arabic: "لِقَوْمٍۢ", transliteration: "liqawmin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for a people", ur: "for a لوگ" } },
      { id: '6:126:9', arabic: "يَذَّكَّرُونَ", transliteration: "yadhakkarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "who take heed", ur: "جو take heed" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  127: {
    text: "۞ لَهُمْ دَارُ ٱلسَّلَـٰمِ عِندَ رَبِّهِمْ ۖ وَهُوَ وَلِيُّهُم بِمَا كَانُوا۟ يَعْمَلُونَ",
    translation: {
      en: "",
      ur: "ان کے لیے ان کے اعمال کے صلے میں پروردگار کے ہاں سلامتی کا گھر ہے اور وہی ان کا دوستدار ہے",
    },
    words: [
      { id: '6:127:1', arabic: "۞ لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For them", ur: "For them" } },
      { id: '6:127:2', arabic: "دَارُ", transliteration: "dāru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) home", ur: "(will be) home" } },
      { id: '6:127:3', arabic: "ٱلسَّلَـٰمِ", transliteration: "l-salāmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) [the] peace", ur: "(of) [the] peace" } },
      { id: '6:127:4', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '6:127:5', arabic: "رَبِّهِمْ ۖ", transliteration: "rabbihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their Lord", ur: "their رب" } },
      { id: '6:127:6', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '6:127:7', arabic: "وَلِيُّهُم", transliteration: "waliyyuhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(will be) their protecting friend", ur: "(will be) their protecting friend" } },
      { id: '6:127:8', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because", ur: "because" } },
      { id: '6:127:9', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "(of what) they used to", ur: "(of کیا) وہ لوگ used کو" } },
      { id: '6:127:10', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "do", ur: "do" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  128: {
    text: "وَيَوْمَ يَحْشُرُهُمْ جَمِيعًۭا يَـٰمَعْشَرَ ٱلْجِنِّ قَدِ ٱسْتَكْثَرْتُم مِّنَ ٱلْإِنسِ ۖ وَقَالَ أَوْلِيَآؤُهُم مِّنَ ٱلْإِنسِ رَبَّنَا ٱسْتَمْتَعَ بَعْضُنَا بِبَعْضٍۢ وَبَلَغْنَآ أَجَلَنَا ٱلَّذِىٓ أَجَّلْتَ لَنَا ۚ قَالَ ٱلنَّارُ مَثْوَىٰكُمْ خَـٰلِدِينَ فِيهَآ إِلَّا مَا شَآءَ ٱللَّهُ ۗ إِنَّ رَبَّكَ حَكِيمٌ عَلِيمٌۭ",
    translation: {
      en: "",
      ur: "اور جس دن وہ سب (جنّ وانس) کو جمع کرے گا (اور فرمائے گا کہ) اے گروہ جنّات تم نے انسانوں سے بہت (فائدے) حاصل کئے تو جو انسانوں میں ان کے دوستدار ہوں گے وہ کہیں گے کہ پروردگار ہم ایک دوسرے سے فائدہ اٹھاتے رہے اور (آخر) اس وقت کو پہنچ گئے جو تو نے ہمارے لیے مقرر کیا تھا خدا فرمائے گا (اب) تمہارا ٹھکانہ دوزخ ہے ہمیشہ اس میں (جلتے) رہو گے مگر جو خدا چاہے بےشک تمہارا پروردگار دانا اور خبردار ہے",
    },
    words: [
      { id: '6:128:1', arabic: "وَيَوْمَ", transliteration: "wayawma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ي و م", meaning: { en: "And (the) Day", ur: "اور (the) دن" } },
      { id: '6:128:2', arabic: "يَحْشُرُهُمْ", transliteration: "yaḥshuruhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He will gather them", ur: "وہ will gather them" } },
      { id: '6:128:3', arabic: "جَمِيعًۭا", transliteration: "jamīʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } },
      { id: '6:128:4', arabic: "يَـٰمَعْشَرَ", transliteration: "yāmaʿshara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(and will say), \"O assembly", ur: "(اور will کہو), \"اے assembly" } },
      { id: '6:128:5', arabic: "ٱلْجِنِّ", transliteration: "l-jini", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) [the] jinn", ur: "(of) [the] jinn" } },
      { id: '6:128:6', arabic: "قَدِ", transliteration: "qadi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Certainly", ur: "Certainly" } },
      { id: '6:128:7', arabic: "ٱسْتَكْثَرْتُم", transliteration: "is'takthartum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have (misled) many", ur: "تم have (misled) many" } },
      { id: '6:128:8', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '6:128:9', arabic: "ٱلْإِنسِ ۖ", transliteration: "l-insi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mankind", ur: "the mankind" } },
      { id: '6:128:10', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And will say", ur: "اور will کہو" } },
      { id: '6:128:11', arabic: "أَوْلِيَآؤُهُم", transliteration: "awliyāuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their friends", ur: "their friends" } },
      { id: '6:128:12', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '6:128:13', arabic: "ٱلْإِنسِ", transliteration: "l-insi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the men", ur: "the men" } },
      { id: '6:128:14', arabic: "رَبَّنَا", transliteration: "rabbanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Lord", ur: "Our رب" } },
      { id: '6:128:15', arabic: "ٱسْتَمْتَعَ", transliteration: "is'tamtaʿa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "profited", ur: "profited" } },
      { id: '6:128:16', arabic: "بَعْضُنَا", transliteration: "baʿḍunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "some of us", ur: "some of us" } },
      { id: '6:128:17', arabic: "بِبَعْضٍۢ", transliteration: "bibaʿḍin", pos: ['P+N'], posLabel: 'P+N', root: "ب ع ض", meaning: { en: "by others", ur: "by others" } },
      { id: '6:128:18', arabic: "وَبَلَغْنَآ", transliteration: "wabalaghnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and we have reached", ur: "اور ہم have reached" } },
      { id: '6:128:19', arabic: "أَجَلَنَا", transliteration: "ajalanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our term", ur: "our term" } },
      { id: '6:128:20', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '6:128:21', arabic: "أَجَّلْتَ", transliteration: "ajjalta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You appointed", ur: "تم appointed" } },
      { id: '6:128:22', arabic: "لَنَا ۚ", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for us", ur: "for us" } },
      { id: '6:128:23', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He will say", ur: "وہ will کہو" } },
      { id: '6:128:24', arabic: "ٱلنَّارُ", transliteration: "l-nāru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "The Fire", ur: "The آگ" } },
      { id: '6:128:25', arabic: "مَثْوَىٰكُمْ", transliteration: "mathwākum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) your abode", ur: "(is) your abode" } },
      { id: '6:128:26', arabic: "خَـٰلِدِينَ", transliteration: "khālidīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will abide forever", ur: "will abide forever" } },
      { id: '6:128:27', arabic: "فِيهَآ", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '6:128:28', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:128:29', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(for) what", ur: "(for) کیا" } },
      { id: '6:128:30', arabic: "شَآءَ", transliteration: "shāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wills", ur: "wills" } },
      { id: '6:128:31', arabic: "ٱللَّهُ ۗ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:128:32', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '6:128:33', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '6:128:34', arabic: "حَكِيمٌ", transliteration: "ḥakīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) All-Wise", ur: "(is) حکمت والا" } },
      { id: '6:128:35', arabic: "عَلِيمٌۭ", transliteration: "ʿalīmun", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "All-Knowing", ur: "سب جاننے والا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'فعل + فاعل' },
        { from: 26, to: 27, label: 'فعل + فاعل' },
        { from: 32, to: 33, label: 'فعل + فاعل' },
        { from: 33, to: 34, label: 'موصوف + صفت' }
      ],
    },
  },
  129: {
    text: "وَكَذَٰلِكَ نُوَلِّى بَعْضَ ٱلظَّـٰلِمِينَ بَعْضًۢا بِمَا كَانُوا۟ يَكْسِبُونَ",
    translation: {
      en: "",
      ur: "اور اسی طرح ہم ظالموں کو ان کے اعمال کے سبب جو وہ کرتے تھے ایک دوسرے پر مسلط کر دیتے ہیں",
    },
    words: [
      { id: '6:129:1', arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And thus", ur: "اور thus" } },
      { id: '6:129:2', arabic: "نُوَلِّى", transliteration: "nuwallī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We make friends", ur: "ہم make friends" } },
      { id: '6:129:3', arabic: "بَعْضَ", transliteration: "baʿḍa", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "some (of)", ur: "some (of)" } },
      { id: '6:129:4', arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoers", ur: "the wrongdoers" } },
      { id: '6:129:5', arabic: "بَعْضًۢا", transliteration: "baʿḍan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) others", ur: "(کو) others" } },
      { id: '6:129:6', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '6:129:7', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '6:129:8', arabic: "يَكْسِبُونَ", transliteration: "yaksibūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "earn", ur: "earn" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  130: {
    text: "يَـٰمَعْشَرَ ٱلْجِنِّ وَٱلْإِنسِ أَلَمْ يَأْتِكُمْ رُسُلٌۭ مِّنكُمْ يَقُصُّونَ عَلَيْكُمْ ءَايَـٰتِى وَيُنذِرُونَكُمْ لِقَآءَ يَوْمِكُمْ هَـٰذَا ۚ قَالُوا۟ شَهِدْنَا عَلَىٰٓ أَنفُسِنَا ۖ وَغَرَّتْهُمُ ٱلْحَيَوٰةُ ٱلدُّنْيَا وَشَهِدُوا۟ عَلَىٰٓ أَنفُسِهِمْ أَنَّهُمْ كَانُوا۟ كَـٰفِرِينَ",
    translation: {
      en: "",
      ur: "اے جنّوں اور انسانوں کی جماعت کیا تمہارے پاس تم ہی میں سے پیغمبر نہیں آتے رہے جو میری آیتیں تم کو پڑھ پڑھ کر سناتے اور اس دن کے سامنے آموجود ہونے سے ڈراتے تھے وہ کہیں گے کہ (پروردگار) ہمیں اپنے گناہوں کا اقرار ہے ان لوگوں کو دنیاکی زندگی نے دھوکے میں ڈال رکھا تھا اور (اب) خود اپنے اوپر گواہی دی کہ کفر کرتے تھے",
    },
    words: [
      { id: '6:130:1', arabic: "يَـٰمَعْشَرَ", transliteration: "yāmaʿshara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O assembly", ur: "اے assembly" } },
      { id: '6:130:2', arabic: "ٱلْجِنِّ", transliteration: "l-jini", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) [the] jinn", ur: "(of) [the] jinn" } },
      { id: '6:130:3', arabic: "وَٱلْإِنسِ", transliteration: "wal-insi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and [the] men", ur: "اور [the] men" } },
      { id: '6:130:4', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Did (there) not", ur: "Did (there) نہیں" } },
      { id: '6:130:5', arabic: "يَأْتِكُمْ", transliteration: "yatikum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "come to you", ur: "come کو تم" } },
      { id: '6:130:6', arabic: "رُسُلٌۭ", transliteration: "rusulun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Messengers", ur: "Messengers" } },
      { id: '6:130:7', arabic: "مِّنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from (among) you", ur: "سے (among) تم" } },
      { id: '6:130:8', arabic: "يَقُصُّونَ", transliteration: "yaquṣṣūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "relating", ur: "relating" } },
      { id: '6:130:9', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '6:130:10', arabic: "ءَايَـٰتِى", transliteration: "āyātī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My Verses", ur: "My Verses" } },
      { id: '6:130:11', arabic: "وَيُنذِرُونَكُمْ", transliteration: "wayundhirūnakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and warning you", ur: "اور warning تم" } },
      { id: '6:130:12', arabic: "لِقَآءَ", transliteration: "liqāa", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(of the) meeting", ur: "(of the) meeting" } },
      { id: '6:130:13', arabic: "يَوْمِكُمْ", transliteration: "yawmikum", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(of) your day", ur: "(of) your دن" } },
      { id: '6:130:14', arabic: "هَـٰذَا ۚ", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '6:130:15', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They will say", ur: "وہ لوگ will کہو" } },
      { id: '6:130:16', arabic: "شَهِدْنَا", transliteration: "shahid'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We bear witness", ur: "ہم bear witness" } },
      { id: '6:130:17', arabic: "عَلَىٰٓ", transliteration: "ʿalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against", ur: "against" } },
      { id: '6:130:18', arabic: "أَنفُسِنَا ۖ", transliteration: "anfusinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "ourselves", ur: "ourselves" } },
      { id: '6:130:19', arabic: "وَغَرَّتْهُمُ", transliteration: "wagharrathumu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And deluded them", ur: "اور deluded them" } },
      { id: '6:130:20', arabic: "ٱلْحَيَوٰةُ", transliteration: "l-ḥayatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the life", ur: "the زندگی" } },
      { id: '6:130:21', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the world", ur: "(of) the دنیا" } },
      { id: '6:130:22', arabic: "وَشَهِدُوا۟", transliteration: "washahidū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they will bear witness", ur: "اور وہ لوگ will bear witness" } },
      { id: '6:130:23', arabic: "عَلَىٰٓ", transliteration: "ʿalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against", ur: "against" } },
      { id: '6:130:24', arabic: "أَنفُسِهِمْ", transliteration: "anfusihim", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "themselves", ur: "themselves" } },
      { id: '6:130:25', arabic: "أَنَّهُمْ", transliteration: "annahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that they", ur: "وہ وہ لوگ" } },
      { id: '6:130:26', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "were", ur: "were" } },
      { id: '6:130:27', arabic: "كَـٰفِرِينَ", transliteration: "kāfirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "disbelievers", ur: "کافر" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  131: {
    text: "ذَٰلِكَ أَن لَّمْ يَكُن رَّبُّكَ مُهْلِكَ ٱلْقُرَىٰ بِظُلْمٍۢ وَأَهْلُهَا غَـٰفِلُونَ",
    translation: {
      en: "",
      ur: "(اے محمدﷺ!) یہ (جو پیغمبر آتے رہے اور کتابیں نازل ہوتی رہیں تو) اس لیے کہ تمہارا پروردگار ایسا نہیں کہ بستیوں کو ظلم سے ہلاک کر دے اور وہاں کے رہنے والوں کو (کچھ بھی) خبر نہ ہو",
    },
    words: [
      { id: '6:131:1', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That (is because)", ur: "وہ (is because)" } },
      { id: '6:131:2', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '6:131:3', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:131:4', arabic: "يَكُن", transliteration: "yakun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is", ur: "is" } },
      { id: '6:131:5', arabic: "رَّبُّكَ", transliteration: "rabbuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '6:131:6', arabic: "مُهْلِكَ", transliteration: "muh'lika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "one who destroys", ur: "one جو destroys" } },
      { id: '6:131:7', arabic: "ٱلْقُرَىٰ", transliteration: "l-qurā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the cities", ur: "the cities" } },
      { id: '6:131:8', arabic: "بِظُلْمٍۢ", transliteration: "biẓul'min", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for (their) wrongdoing", ur: "for (their) wrongdoing" } },
      { id: '6:131:9', arabic: "وَأَهْلُهَا", transliteration: "wa-ahluhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while their people", ur: "while their لوگ" } },
      { id: '6:131:10', arabic: "غَـٰفِلُونَ", transliteration: "ghāfilūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) unaware", ur: "(are) unaware" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  132: {
    text: "وَلِكُلٍّۢ دَرَجَـٰتٌۭ مِّمَّا عَمِلُوا۟ ۚ وَمَا رَبُّكَ بِغَـٰفِلٍ عَمَّا يَعْمَلُونَ",
    translation: {
      en: "",
      ur: "اور سب لوگوں کے بلحاظ اعمال درجے (مقرر) ہیں اور جو کام یہ لوگ کرتے ہیں خدا ان سے بے خبر نہیں",
    },
    words: [
      { id: '6:132:1', arabic: "وَلِكُلٍّۢ", transliteration: "walikullin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for all", ur: "اور for سب" } },
      { id: '6:132:2', arabic: "دَرَجَـٰتٌۭ", transliteration: "darajātun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) degrees", ur: "(will be) degrees" } },
      { id: '6:132:3', arabic: "مِّمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '6:132:4', arabic: "عَمِلُوا۟ ۚ", transliteration: "ʿamilū", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "they did", ur: "وہ لوگ did" } },
      { id: '6:132:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '6:132:6', arabic: "رَبُّكَ", transliteration: "rabbuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) your Lord", ur: "(is) your رب" } },
      { id: '6:132:7', arabic: "بِغَـٰفِلٍ", transliteration: "bighāfilin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "unaware", ur: "unaware" } },
      { id: '6:132:8', arabic: "عَمَّا", transliteration: "ʿammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "about what", ur: "about کیا" } },
      { id: '6:132:9', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "they do", ur: "وہ لوگ do" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  133: {
    text: "وَرَبُّكَ ٱلْغَنِىُّ ذُو ٱلرَّحْمَةِ ۚ إِن يَشَأْ يُذْهِبْكُمْ وَيَسْتَخْلِفْ مِنۢ بَعْدِكُم مَّا يَشَآءُ كَمَآ أَنشَأَكُم مِّن ذُرِّيَّةِ قَوْمٍ ءَاخَرِينَ",
    translation: {
      en: "",
      ur: "اور تمہارا پروردگار بےپروا (اور) صاحب رحمت ہے اگر چاہے (تو اے بندوں) تمہیں نابود کر دے اور تمہارے بعد جن لوگوں کو چاہے تمہارا جانشین بنا دے جیسا تم کو بھی دوسرے لوگوں کی نسل سے پیدا کیا ہے",
    },
    words: [
      { id: '6:133:1', arabic: "وَرَبُّكَ", transliteration: "warabbuka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And your Lord", ur: "اور your رب" } },
      { id: '6:133:2', arabic: "ٱلْغَنِىُّ", transliteration: "l-ghaniyu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the Self-Sufficient", ur: "(is) the Self-Sufficient" } },
      { id: '6:133:3', arabic: "ذُو", transliteration: "dhū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Possessor", ur: "(the) Possessor" } },
      { id: '6:133:4', arabic: "ٱلرَّحْمَةِ ۚ", transliteration: "l-raḥmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) mercy", ur: "(of) رحمت" } },
      { id: '6:133:5', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '6:133:6', arabic: "يَشَأْ", transliteration: "yasha", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He wills", ur: "وہ wills" } },
      { id: '6:133:7', arabic: "يُذْهِبْكُمْ", transliteration: "yudh'hib'kum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He can take you away", ur: "وہ can take تم away" } },
      { id: '6:133:8', arabic: "وَيَسْتَخْلِفْ", transliteration: "wayastakhlif", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and grant succession", ur: "اور grant succession" } },
      { id: '6:133:9', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:133:10', arabic: "بَعْدِكُم", transliteration: "baʿdikum", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after you", ur: "بعد تم" } },
      { id: '6:133:11', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) whom", ur: "(کو) whom" } },
      { id: '6:133:12', arabic: "يَشَآءُ", transliteration: "yashāu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He wills", ur: "وہ wills" } },
      { id: '6:133:13', arabic: "كَمَآ", transliteration: "kamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "as", ur: "as" } },
      { id: '6:133:14', arabic: "أَنشَأَكُم", transliteration: "ansha-akum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He raised you", ur: "وہ raised تم" } },
      { id: '6:133:15', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:133:16', arabic: "ذُرِّيَّةِ", transliteration: "dhurriyyati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the descendants", ur: "the descendants" } },
      { id: '6:133:17', arabic: "قَوْمٍ", transliteration: "qawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) people", ur: "(of) لوگ" } },
      { id: '6:133:18', arabic: "ءَاخَرِينَ", transliteration: "ākharīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other", ur: "other" } }
    ],
    structure: {
      relationships: [
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  134: {
    text: "إِنَّ مَا تُوعَدُونَ لَـَٔاتٍۢ ۖ وَمَآ أَنتُم بِمُعْجِزِينَ",
    translation: {
      en: "",
      ur: "کچھ شک نہیں کہ جو وعدہ تم سے کیا جاتا ہے وہ (وقوع میں) آنے والا ہے اور تم (خدا کو) مغلوب نہیں کر سکتے",
    },
    words: [
      { id: '6:134:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '6:134:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:134:3', arabic: "تُوعَدُونَ", transliteration: "tūʿadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are promised", ur: "تم are promised" } },
      { id: '6:134:4', arabic: "لَـَٔاتٍۢ ۖ", transliteration: "laātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) sure to come", ur: "(is) sure کو come" } },
      { id: '6:134:5', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '6:134:6', arabic: "أَنتُم", transliteration: "antum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(can) you", ur: "(can) تم" } },
      { id: '6:134:7', arabic: "بِمُعْجِزِينَ", transliteration: "bimuʿ'jizīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "escape (it)", ur: "escape (it)" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  135: {
    text: "قُلْ يَـٰقَوْمِ ٱعْمَلُوا۟ عَلَىٰ مَكَانَتِكُمْ إِنِّى عَامِلٌۭ ۖ فَسَوْفَ تَعْلَمُونَ مَن تَكُونُ لَهُۥ عَـٰقِبَةُ ٱلدَّارِ ۗ إِنَّهُۥ لَا يُفْلِحُ ٱلظَّـٰلِمُونَ",
    translation: {
      en: "",
      ur: "کہہ دو کہ لوگو تم اپنی جگہ عمل کئے جاؤ میں (اپنی جگہ) عمل کئے جاتا ہوں عنقریب تم کو معلوم ہو جائے گا کہ آخرت میں (بہشت) کس کا گھر ہوگا کچھ شک نہیں کہ مشرک نجات نہیں پانے کے",
    },
    words: [
      { id: '6:135:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '6:135:2', arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ" } },
      { id: '6:135:3', arabic: "ٱعْمَلُوا۟", transliteration: "iʿ'malū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Work", ur: "Work" } },
      { id: '6:135:4', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '6:135:5', arabic: "مَكَانَتِكُمْ", transliteration: "makānatikum", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "your position", ur: "your position" } },
      { id: '6:135:6', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I am", ur: "بیشک, میں am" } },
      { id: '6:135:7', arabic: "عَامِلٌۭ ۖ", transliteration: "ʿāmilun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a worker", ur: "a worker" } },
      { id: '6:135:8', arabic: "فَسَوْفَ", transliteration: "fasawfa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And soon", ur: "اور soon" } },
      { id: '6:135:9', arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "you will know", ur: "تم will جاننا" } },
      { id: '6:135:10', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '6:135:11', arabic: "تَكُونُ", transliteration: "takūnu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will have", ur: "will have" } },
      { id: '6:135:12', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for himself", ur: "for himself" } },
      { id: '6:135:13', arabic: "عَـٰقِبَةُ", transliteration: "ʿāqibatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) the end", ur: "(میں) the end" } },
      { id: '6:135:14', arabic: "ٱلدَّارِ ۗ", transliteration: "l-dāri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(a good) home", ur: "(a اچھا) home" } },
      { id: '6:135:15', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed [he]", ur: "بیشک [وہ]" } },
      { id: '6:135:16', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(will) not", ur: "(will) نہیں" } },
      { id: '6:135:17', arabic: "يُفْلِحُ", transliteration: "yuf'liḥu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "succeed", ur: "succeed" } },
      { id: '6:135:18', arabic: "ٱلظَّـٰلِمُونَ", transliteration: "l-ẓālimūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoers", ur: "the wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'موصول + صلة' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'نفی + فعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' }
      ],
    },
  },
  136: {
    text: "وَجَعَلُوا۟ لِلَّهِ مِمَّا ذَرَأَ مِنَ ٱلْحَرْثِ وَٱلْأَنْعَـٰمِ نَصِيبًۭا فَقَالُوا۟ هَـٰذَا لِلَّهِ بِزَعْمِهِمْ وَهَـٰذَا لِشُرَكَآئِنَا ۖ فَمَا كَانَ لِشُرَكَآئِهِمْ فَلَا يَصِلُ إِلَى ٱللَّهِ ۖ وَمَا كَانَ لِلَّهِ فَهُوَ يَصِلُ إِلَىٰ شُرَكَآئِهِمْ ۗ سَآءَ مَا يَحْكُمُونَ",
    translation: {
      en: "",
      ur: "اور (یہ لوگ) خدا ہی کی پیدا کی ہوئی چیزوں یعنی کھیتی اور چوپایوں میں خدا کا بھی ایک حصہ مقرر کرتے ہیں اور اپنے خیال (باطل) سے کہتے ہیں کہ یہ (حصہ) تو خدا کا اور یہ ہمارے شریکوں (یعنی بتوں) کا تو جو حصہ ان کے شریکوں کا ہوتا ہے وہ تو خدا کی طرف نہیں جا سکتا اور جو حصہ خدا کا ہوتا ہے وہ ان کے شریکوں کی طرف جا سکتا ہے یہ کیسا برا انصاف ہے",
    },
    words: [
      { id: '6:136:1', arabic: "وَجَعَلُوا۟", transliteration: "wajaʿalū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they assign", ur: "اور وہ لوگ assign" } },
      { id: '6:136:2', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Allah", ur: "کو اللہ" } },
      { id: '6:136:3', arabic: "مِمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "out of what", ur: "out of کیا" } },
      { id: '6:136:4', arabic: "ذَرَأَ", transliteration: "dhara-a", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He produced", ur: "وہ produced" } },
      { id: '6:136:5', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '6:136:6', arabic: "ٱلْحَرْثِ", transliteration: "l-ḥarthi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the crops", ur: "the crops" } },
      { id: '6:136:7', arabic: "وَٱلْأَنْعَـٰمِ", transliteration: "wal-anʿāmi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the cattle", ur: "اور the cattle" } },
      { id: '6:136:8', arabic: "نَصِيبًۭا", transliteration: "naṣīban", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a share", ur: "a share" } },
      { id: '6:136:9', arabic: "فَقَالُوا۟", transliteration: "faqālū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ق و ل", meaning: { en: "and they say", ur: "اور وہ لوگ کہو" } },
      { id: '6:136:10', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "This", ur: "This" } },
      { id: '6:136:11', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) for Allah", ur: "(is) for اللہ" } },
      { id: '6:136:12', arabic: "بِزَعْمِهِمْ", transliteration: "bizaʿmihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by their claim", ur: "by their claim" } },
      { id: '6:136:13', arabic: "وَهَـٰذَا", transliteration: "wahādhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And this", ur: "اور this" } },
      { id: '6:136:14', arabic: "لِشُرَكَآئِنَا ۖ", transliteration: "lishurakāinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) for our partners", ur: "(is) for our partners" } },
      { id: '6:136:15', arabic: "فَمَا", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But what", ur: "لیکن کیا" } },
      { id: '6:136:16', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '6:136:17', arabic: "لِشُرَكَآئِهِمْ", transliteration: "lishurakāihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for their partners", ur: "for their partners" } },
      { id: '6:136:18', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '6:136:19', arabic: "يَصِلُ", transliteration: "yaṣilu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "reach", ur: "reach" } },
      { id: '6:136:20', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[to]", ur: "[کو]" } },
      { id: '6:136:21', arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:136:22', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while what", ur: "while کیا" } },
      { id: '6:136:23', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '6:136:24', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for Allah", ur: "for اللہ" } },
      { id: '6:136:25', arabic: "فَهُوَ", transliteration: "fahuwa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then it", ur: "پھر it" } },
      { id: '6:136:26', arabic: "يَصِلُ", transliteration: "yaṣilu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "reaches", ur: "reaches" } },
      { id: '6:136:27', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[to]", ur: "[کو]" } },
      { id: '6:136:28', arabic: "شُرَكَآئِهِمْ ۗ", transliteration: "shurakāihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their partners", ur: "their partners" } },
      { id: '6:136:29', arabic: "سَآءَ", transliteration: "sāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Evil", ur: "برا" } },
      { id: '6:136:30', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(is) what", ur: "(is) کیا" } },
      { id: '6:136:31', arabic: "يَحْكُمُونَ", transliteration: "yaḥkumūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they judge", ur: "وہ لوگ judge" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 20, to: 21, label: 'جار + مجرور' },
        { from: 27, to: 28, label: 'جار + مجرور' },
        { from: 30, to: 31, label: 'موصول + صلة' }
      ],
    },
  },
  137: {
    text: "وَكَذَٰلِكَ زَيَّنَ لِكَثِيرٍۢ مِّنَ ٱلْمُشْرِكِينَ قَتْلَ أَوْلَـٰدِهِمْ شُرَكَآؤُهُمْ لِيُرْدُوهُمْ وَلِيَلْبِسُوا۟ عَلَيْهِمْ دِينَهُمْ ۖ وَلَوْ شَآءَ ٱللَّهُ مَا فَعَلُوهُ ۖ فَذَرْهُمْ وَمَا يَفْتَرُونَ",
    translation: {
      en: "",
      ur: "اسی طرح بہت سے مشرکوں کو ان کے شریکوں نے ان کے بچوں کو جان سے مار ڈالنا اچھا کر دکھایا ہے تاکہ انہیں ہلاکت میں ڈال دیں اور ان کے دین کو ان پر خلط ملط کر دیں اور اگر خدا چاہتا تو وہ ایسا نہ کرتے تو ان کو چھوڑ دو کہ وہ جانیں اور ان کا جھوٹ",
    },
    words: [
      { id: '6:137:1', arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And likewise", ur: "اور likewise" } },
      { id: '6:137:2', arabic: "زَيَّنَ", transliteration: "zayyana", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "made pleasing", ur: "made pleasing" } },
      { id: '6:137:3', arabic: "لِكَثِيرٍۢ", transliteration: "likathīrin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to many", ur: "کو many" } },
      { id: '6:137:4', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '6:137:5', arabic: "ٱلْمُشْرِكِينَ", transliteration: "l-mush'rikīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the polytheists ", ur: "the polytheists " } },
      { id: '6:137:6', arabic: "قَتْلَ", transliteration: "qatla", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(the) killing", ur: "(the) killing" } },
      { id: '6:137:7', arabic: "أَوْلَـٰدِهِمْ", transliteration: "awlādihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) their children ", ur: "(of) their اولاد " } },
      { id: '6:137:8', arabic: "شُرَكَآؤُهُمْ", transliteration: "shurakāuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their partners ", ur: "their partners " } },
      { id: '6:137:9', arabic: "لِيُرْدُوهُمْ", transliteration: "liyur'dūhum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "so that they may ruin them", ur: "so وہ وہ لوگ may ruin them" } },
      { id: '6:137:10', arabic: "وَلِيَلْبِسُوا۟", transliteration: "waliyalbisū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and that they make confusing", ur: "اور وہ وہ لوگ make confusing" } },
      { id: '6:137:11', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '6:137:12', arabic: "دِينَهُمْ ۖ", transliteration: "dīnahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their religion", ur: "their religion" } },
      { id: '6:137:13', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '6:137:14', arabic: "شَآءَ", transliteration: "shāa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(had) willed", ur: "(had) willed" } },
      { id: '6:137:15', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:137:16', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:137:17', arabic: "فَعَلُوهُ ۖ", transliteration: "faʿalūhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(would) they have done so", ur: "(would) وہ لوگ have done so" } },
      { id: '6:137:18', arabic: "فَذَرْهُمْ", transliteration: "fadharhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So leave them", ur: "So leave them" } },
      { id: '6:137:19', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '6:137:20', arabic: "يَفْتَرُونَ", transliteration: "yaftarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they invent", ur: "وہ لوگ invent" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  138: {
    text: "وَقَالُوا۟ هَـٰذِهِۦٓ أَنْعَـٰمٌۭ وَحَرْثٌ حِجْرٌۭ لَّا يَطْعَمُهَآ إِلَّا مَن نَّشَآءُ بِزَعْمِهِمْ وَأَنْعَـٰمٌ حُرِّمَتْ ظُهُورُهَا وَأَنْعَـٰمٌۭ لَّا يَذْكُرُونَ ٱسْمَ ٱللَّهِ عَلَيْهَا ٱفْتِرَآءً عَلَيْهِ ۚ سَيَجْزِيهِم بِمَا كَانُوا۟ يَفْتَرُونَ",
    translation: {
      en: "",
      ur: "اور اپنے خیال سے یہ بھی کہتے ہیں کہ یہ چارپائے اور کھیتی منع ہے اسے اس شخص کے سوا جسے ہم چاہیں کوئی نہ کھائے اور (بعض) چارپائے ایسے ہیں کہ ان کی پیٹ پر چڑھنا منع کر دیا گیا ہے اور بعض مویشی ایسے ہیں جن پر (ذبح کرتے وقت) خدا کا نام نہیں لیتے سب خدا پر جھوٹ ہے وہ عنقریب ان کو ان کے جھوٹ کا بدلہ دے گا",
    },
    words: [
      { id: '6:138:1', arabic: "وَقَالُوا۟", transliteration: "waqālū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" } },
      { id: '6:138:2', arabic: "هَـٰذِهِۦٓ", transliteration: "hādhihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "These", ur: "These" } },
      { id: '6:138:3', arabic: "أَنْعَـٰمٌۭ", transliteration: "anʿāmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) cattle", ur: "(are) cattle" } },
      { id: '6:138:4', arabic: "وَحَرْثٌ", transliteration: "waḥarthun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and crops", ur: "اور crops" } },
      { id: '6:138:5', arabic: "حِجْرٌۭ", transliteration: "ḥij'run", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "forbidden", ur: "forbidden" } },
      { id: '6:138:6', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "no (one)", ur: "نہیں (one)" } },
      { id: '6:138:7', arabic: "يَطْعَمُهَآ", transliteration: "yaṭʿamuhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "can eat them", ur: "can eat them" } },
      { id: '6:138:8', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:138:9', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '6:138:10', arabic: "نَّشَآءُ", transliteration: "nashāu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we will", ur: "ہم will" } },
      { id: '6:138:11', arabic: "بِزَعْمِهِمْ", transliteration: "bizaʿmihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by their claim", ur: "by their claim" } },
      { id: '6:138:12', arabic: "وَأَنْعَـٰمٌ", transliteration: "wa-anʿāmun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And cattle", ur: "اور cattle" } },
      { id: '6:138:13', arabic: "حُرِّمَتْ", transliteration: "ḥurrimat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "forbidden", ur: "forbidden" } },
      { id: '6:138:14', arabic: "ظُهُورُهَا", transliteration: "ẓuhūruhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) their backs", ur: "(are) their backs" } },
      { id: '6:138:15', arabic: "وَأَنْعَـٰمٌۭ", transliteration: "wa-anʿāmun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and cattle", ur: "اور cattle" } },
      { id: '6:138:16', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:138:17', arabic: "يَذْكُرُونَ", transliteration: "yadhkurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they mention", ur: "وہ لوگ mention" } },
      { id: '6:138:18', arabic: "ٱسْمَ", transliteration: "is'ma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) name", ur: "(the) name" } },
      { id: '6:138:19', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '6:138:20', arabic: "عَلَيْهَا", transliteration: "ʿalayhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on it", ur: "پر it" } },
      { id: '6:138:21', arabic: "ٱفْتِرَآءً", transliteration: "if'tirāan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) an invention", ur: "(as) an invention" } },
      { id: '6:138:22', arabic: "عَلَيْهِ ۚ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against Him", ur: "against Him" } },
      { id: '6:138:23', arabic: "سَيَجْزِيهِم", transliteration: "sayajzīhim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He will recompense them", ur: "وہ will recompense them" } },
      { id: '6:138:24', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '6:138:25', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '6:138:26', arabic: "يَفْتَرُونَ", transliteration: "yaftarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "invent", ur: "invent" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'موصول + صلة' },
        { from: 17, to: 18, label: 'فعل + فاعل' }
      ],
    },
  },
  139: {
    text: "وَقَالُوا۟ مَا فِى بُطُونِ هَـٰذِهِ ٱلْأَنْعَـٰمِ خَالِصَةٌۭ لِّذُكُورِنَا وَمُحَرَّمٌ عَلَىٰٓ أَزْوَٰجِنَا ۖ وَإِن يَكُن مَّيْتَةًۭ فَهُمْ فِيهِ شُرَكَآءُ ۚ سَيَجْزِيهِمْ وَصْفَهُمْ ۚ إِنَّهُۥ حَكِيمٌ عَلِيمٌۭ",
    translation: {
      en: "",
      ur: "اور یہ بھی کہتے ہیں کہ جو بچہ ان چارپایوں کے پیٹ میں ہے وہ خاص ہمارے مردوں کے لئے ہے اور ہماری عورتوں کو (اس کا کھانا) حرام ہے اور اگر وہ بچہ مرا ہوا ہو تو سب اس میں شریک ہیں (یعنی اسے مرد اور عورتیں سب کھائیں) عنقریب خدا ان کو ان کے ڈھکوسلوں کی سزا دے گا بےشک وہ حکمت والا خبردار ہے",
    },
    words: [
      { id: '6:139:1', arabic: "وَقَالُوا۟", transliteration: "waqālū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" } },
      { id: '6:139:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "What", ur: "کیا" } },
      { id: '6:139:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '6:139:4', arabic: "بُطُونِ", transliteration: "buṭūni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) wombs", ur: "(the) wombs" } },
      { id: '6:139:5', arabic: "هَـٰذِهِ", transliteration: "hādhihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) these", ur: "(of) these" } },
      { id: '6:139:6', arabic: "ٱلْأَنْعَـٰمِ", transliteration: "l-anʿāmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "cattle", ur: "cattle" } },
      { id: '6:139:7', arabic: "خَالِصَةٌۭ", transliteration: "khāliṣatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) exclusively", ur: "(is) exclusively" } },
      { id: '6:139:8', arabic: "لِّذُكُورِنَا", transliteration: "lidhukūrinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for our males", ur: "for our males" } },
      { id: '6:139:9', arabic: "وَمُحَرَّمٌ", transliteration: "wamuḥarramun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and forbidden", ur: "اور forbidden" } },
      { id: '6:139:10', arabic: "عَلَىٰٓ", transliteration: "ʿalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '6:139:11', arabic: "أَزْوَٰجِنَا ۖ", transliteration: "azwājinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our spouses", ur: "our spouses" } },
      { id: '6:139:12', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '6:139:13', arabic: "يَكُن", transliteration: "yakun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is", ur: "is" } },
      { id: '6:139:14', arabic: "مَّيْتَةًۭ", transliteration: "maytatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(born) dead", ur: "(born) dead" } },
      { id: '6:139:15', arabic: "فَهُمْ", transliteration: "fahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then they (all)", ur: "پھر وہ لوگ (سب)" } },
      { id: '6:139:16', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '6:139:17', arabic: "شُرَكَآءُ ۚ", transliteration: "shurakāu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) partners", ur: "(are) partners" } },
      { id: '6:139:18', arabic: "سَيَجْزِيهِمْ", transliteration: "sayajzīhim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He will recompense them", ur: "وہ will recompense them" } },
      { id: '6:139:19', arabic: "وَصْفَهُمْ ۚ", transliteration: "waṣfahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(for) their attribution", ur: "(for) their attribution" } },
      { id: '6:139:20', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, He", ur: "بیشک, وہ" } },
      { id: '6:139:21', arabic: "حَكِيمٌ", transliteration: "ḥakīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) All-Wise", ur: "(is) حکمت والا" } },
      { id: '6:139:22', arabic: "عَلِيمٌۭ", transliteration: "ʿalīmun", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "All-Knowing", ur: "سب جاننے والا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'موصوف + صفت' }
      ],
    },
  },
  140: {
    text: "قَدْ خَسِرَ ٱلَّذِينَ قَتَلُوٓا۟ أَوْلَـٰدَهُمْ سَفَهًۢا بِغَيْرِ عِلْمٍۢ وَحَرَّمُوا۟ مَا رَزَقَهُمُ ٱللَّهُ ٱفْتِرَآءً عَلَى ٱللَّهِ ۚ قَدْ ضَلُّوا۟ وَمَا كَانُوا۟ مُهْتَدِينَ",
    translation: {
      en: "",
      ur: "جن لوگوں نے اپنی اولاد کو بیوقوفی سے بے سمجھی سے قتل کیا اور خدا پر افترا کر کے اس کی عطا فرمائی کی ہوئی روزی کو حرام ٹہرایا وہ گھاٹے میں پڑ گئے وہ بےشبہ گمراہ ہیں اور ہدایت یافتہ نہیں ہیں",
    },
    words: [
      { id: '6:140:1', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Certainly", ur: "Certainly" } },
      { id: '6:140:2', arabic: "خَسِرَ", transliteration: "khasira", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) lost", ur: "(are) lost" } },
      { id: '6:140:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '6:140:4', arabic: "قَتَلُوٓا۟", transliteration: "qatalū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "killed", ur: "killed" } },
      { id: '6:140:5', arabic: "أَوْلَـٰدَهُمْ", transliteration: "awlādahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their children", ur: "their اولاد" } },
      { id: '6:140:6', arabic: "سَفَهًۢا", transliteration: "safahan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) foolishness", ur: "(میں) foolishness" } },
      { id: '6:140:7', arabic: "بِغَيْرِ", transliteration: "bighayri", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "without", ur: "without" } },
      { id: '6:140:8', arabic: "عِلْمٍۢ", transliteration: "ʿil'min", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "knowledge", ur: "knowledge" } },
      { id: '6:140:9', arabic: "وَحَرَّمُوا۟", transliteration: "waḥarramū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and forbid", ur: "اور forbid" } },
      { id: '6:140:10', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:140:11', arabic: "رَزَقَهُمُ", transliteration: "razaqahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(bas been) provided (to) them", ur: "(bas been) provided (کو) them" } },
      { id: '6:140:12', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah ", ur: "(by) اللہ " } },
      { id: '6:140:13', arabic: "ٱفْتِرَآءً", transliteration: "if'tirāan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "inventing (lies)", ur: "inventing (lies)" } },
      { id: '6:140:14', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '6:140:15', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:140:16', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Certainly", ur: "Certainly" } },
      { id: '6:140:17', arabic: "ضَلُّوا۟", transliteration: "ḍallū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they have gone astray", ur: "وہ لوگ have gone astray" } },
      { id: '6:140:18', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '6:140:19', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they are", ur: "وہ لوگ are" } },
      { id: '6:140:20', arabic: "مُهْتَدِينَ", transliteration: "muh'tadīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "guided-ones", ur: "guided-ones" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'فعل + فاعل' }
      ],
    },
  },
  141: {
    text: "۞ وَهُوَ ٱلَّذِىٓ أَنشَأَ جَنَّـٰتٍۢ مَّعْرُوشَـٰتٍۢ وَغَيْرَ مَعْرُوشَـٰتٍۢ وَٱلنَّخْلَ وَٱلزَّرْعَ مُخْتَلِفًا أُكُلُهُۥ وَٱلزَّيْتُونَ وَٱلرُّمَّانَ مُتَشَـٰبِهًۭا وَغَيْرَ مُتَشَـٰبِهٍۢ ۚ كُلُوا۟ مِن ثَمَرِهِۦٓ إِذَآ أَثْمَرَ وَءَاتُوا۟ حَقَّهُۥ يَوْمَ حَصَادِهِۦ ۖ وَلَا تُسْرِفُوٓا۟ ۚ إِنَّهُۥ لَا يُحِبُّ ٱلْمُسْرِفِينَ",
    translation: {
      en: "",
      ur: "اور خدا ہی تو ہے جس نے باغ پیدا کئے چھتریوں پر چڑھائے ہوئے بھی اور جو چھتریوں پر نہیں چڑھائے ہوئے وہ بھی اور کھجور اور کھیتی جن کے طرح طرح کے پھل ہوتے ہیں اور زیتون اور انار جو (بعض باتوں میں) ایک دوسرے سے ملتے ہیں جب یہ چیزیں پھلیں تو ان کے پھل کھاؤ اور جس دن (پھل توڑو اور کھیتی) کاٹو تو خدا کا حق بھی اس میں سے ادا کرو اور بےجا نہ اڑاؤ کہ خدا بیجا اڑانے والوں کو دوست نہیں رکھتا",
    },
    words: [
      { id: '6:141:1', arabic: "۞ وَهُوَ", transliteration: "wahuwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '6:141:2', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '6:141:3', arabic: "أَنشَأَ", transliteration: "ansha-a", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "produced", ur: "produced" } },
      { id: '6:141:4', arabic: "جَنَّـٰتٍۢ", transliteration: "jannātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gardens", ur: "باغات" } },
      { id: '6:141:5', arabic: "مَّعْرُوشَـٰتٍۢ", transliteration: "maʿrūshātin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "trellised", ur: "trellised" } },
      { id: '6:141:6', arabic: "وَغَيْرَ", transliteration: "waghayra", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and other than", ur: "اور other than" } },
      { id: '6:141:7', arabic: "مَعْرُوشَـٰتٍۢ", transliteration: "maʿrūshātin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "trellised", ur: "trellised" } },
      { id: '6:141:8', arabic: "وَٱلنَّخْلَ", transliteration: "wal-nakhla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the date-palm", ur: "اور the date-palm" } },
      { id: '6:141:9', arabic: "وَٱلزَّرْعَ", transliteration: "wal-zarʿa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the crops", ur: "اور the crops" } },
      { id: '6:141:10', arabic: "مُخْتَلِفًا", transliteration: "mukh'talifan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "diverse", ur: "diverse" } },
      { id: '6:141:11', arabic: "أُكُلُهُۥ", transliteration: "ukuluhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) its taste", ur: "(are) its taste" } },
      { id: '6:141:12', arabic: "وَٱلزَّيْتُونَ", transliteration: "wal-zaytūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the olives", ur: "اور the olives" } },
      { id: '6:141:13', arabic: "وَٱلرُّمَّانَ", transliteration: "wal-rumāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the pomegranates", ur: "اور the pomegranates" } },
      { id: '6:141:14', arabic: "مُتَشَـٰبِهًۭا", transliteration: "mutashābihan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "similar", ur: "similar" } },
      { id: '6:141:15', arabic: "وَغَيْرَ", transliteration: "waghayra", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and other than", ur: "اور other than" } },
      { id: '6:141:16', arabic: "مُتَشَـٰبِهٍۢ ۚ", transliteration: "mutashābihin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "similar", ur: "similar" } },
      { id: '6:141:17', arabic: "كُلُوا۟", transliteration: "kulū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Eat", ur: "Eat" } },
      { id: '6:141:18', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '6:141:19', arabic: "ثَمَرِهِۦٓ", transliteration: "thamarihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its fruit", ur: "its fruit" } },
      { id: '6:141:20', arabic: "إِذَآ", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '6:141:21', arabic: "أَثْمَرَ", transliteration: "athmara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it bears fruit", ur: "it bears fruit" } },
      { id: '6:141:22', arabic: "وَءَاتُوا۟", transliteration: "waātū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and give", ur: "اور give" } },
      { id: '6:141:23', arabic: "حَقَّهُۥ", transliteration: "ḥaqqahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its due", ur: "its due" } },
      { id: '6:141:24', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on the) day", ur: "(پر the) دن" } },
      { id: '6:141:25', arabic: "حَصَادِهِۦ ۖ", transliteration: "ḥaṣādihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) its harvest", ur: "(of) its harvest" } },
      { id: '6:141:26', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '6:141:27', arabic: "تُسْرِفُوٓا۟ ۚ", transliteration: "tus'rifū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(be) extravagant", ur: "(be) extravagant" } },
      { id: '6:141:28', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, He", ur: "بیشک, وہ" } },
      { id: '6:141:29', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '6:141:30', arabic: "يُحِبُّ", transliteration: "yuḥibbu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "love", ur: "love" } },
      { id: '6:141:31', arabic: "ٱلْمُسْرِفِينَ", transliteration: "l-mus'rifīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who are extravagant", ur: "the ones جو are extravagant" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'فعل + فاعل' },
        { from: 27, to: 28, label: 'فعل + فاعل' },
        { from: 29, to: 30, label: 'نفی + فعل' },
        { from: 30, to: 31, label: 'فعل + فاعل' }
      ],
    },
  },
  142: {
    text: "وَمِنَ ٱلْأَنْعَـٰمِ حَمُولَةًۭ وَفَرْشًۭا ۚ كُلُوا۟ مِمَّا رَزَقَكُمُ ٱللَّهُ وَلَا تَتَّبِعُوا۟ خُطُوَٰتِ ٱلشَّيْطَـٰنِ ۚ إِنَّهُۥ لَكُمْ عَدُوٌّۭ مُّبِينٌۭ",
    translation: {
      en: "",
      ur: "اور چارپایوں میں بوجھ اٹھانے والے (یعنی بڑے بڑے) بھی پیدا کئے اور زمین سے لگے ہوئے (یعنی چھوٹے چھوٹے) بھی (پس) خدا کا دیا ہوا رزق کھاؤ اور شیطان کے قدموں پر نہ چلو وہ تمہارا صریح دشمن ہے",
    },
    words: [
      { id: '6:142:1', arabic: "وَمِنَ", transliteration: "wamina", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And of", ur: "اور of" } },
      { id: '6:142:2', arabic: "ٱلْأَنْعَـٰمِ", transliteration: "l-anʿāmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the cattle", ur: "the cattle" } },
      { id: '6:142:3', arabic: "حَمُولَةًۭ", transliteration: "ḥamūlatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are some for) burden", ur: "(are some for) burden" } },
      { id: '6:142:4', arabic: "وَفَرْشًۭا ۚ", transliteration: "wafarshan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (some for) meat", ur: "اور (some for) meat" } },
      { id: '6:142:5', arabic: "كُلُوا۟", transliteration: "kulū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Eat", ur: "Eat" } },
      { id: '6:142:6', arabic: "مِمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '6:142:7', arabic: "رَزَقَكُمُ", transliteration: "razaqakumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(has been) provided (to) you", ur: "(has been) provided (کو) تم" } },
      { id: '6:142:8', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '6:142:9', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '6:142:10', arabic: "تَتَّبِعُوا۟", transliteration: "tattabiʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "follow", ur: "follow" } },
      { id: '6:142:11', arabic: "خُطُوَٰتِ", transliteration: "khuṭuwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) footsteps", ur: "(the) footsteps" } },
      { id: '6:142:12', arabic: "ٱلشَّيْطَـٰنِ ۚ", transliteration: "l-shayṭāni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Shaitaan", ur: "(of) Shaitaan" } },
      { id: '6:142:13', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, he", ur: "بیشک, وہ" } },
      { id: '6:142:14', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) to you", ur: "(is) کو تم" } },
      { id: '6:142:15', arabic: "عَدُوٌّۭ", transliteration: "ʿaduwwun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an enemy", ur: "an enemy" } },
      { id: '6:142:16', arabic: "مُّبِينٌۭ", transliteration: "mubīnun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "open", ur: "open" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  143: {
    text: "ثَمَـٰنِيَةَ أَزْوَٰجٍۢ ۖ مِّنَ ٱلضَّأْنِ ٱثْنَيْنِ وَمِنَ ٱلْمَعْزِ ٱثْنَيْنِ ۗ قُلْ ءَآلذَّكَرَيْنِ حَرَّمَ أَمِ ٱلْأُنثَيَيْنِ أَمَّا ٱشْتَمَلَتْ عَلَيْهِ أَرْحَامُ ٱلْأُنثَيَيْنِ ۖ نَبِّـُٔونِى بِعِلْمٍ إِن كُنتُمْ صَـٰدِقِينَ",
    translation: {
      en: "",
      ur: "(یہ بڑے چھوٹے چارپائے) آٹھ قسم کے (ہیں) دو (دو) بھیڑوں میں سے اور دو (دو) بکریوں میں سے (یعنی ایک ایک نر اور اور ایک ایک مادہ) (اے پیغمبر ان سے) پوچھو کہ (خدا نے) دونوں (کے) نروں کو حرام کیا ہے یا دونوں (کی) مادنیوں کو یا جو بچہ مادنیوں کے پیٹ میں لپٹ رہا ہو اسے اگر سچے ہو تو مجھے سند سے بتاؤ",
    },
    words: [
      { id: '6:143:1', arabic: "ثَمَـٰنِيَةَ", transliteration: "thamāniyata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Eight", ur: "Eight" } },
      { id: '6:143:2', arabic: "أَزْوَٰجٍۢ ۖ", transliteration: "azwājin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "pairs ", ur: "pairs " } },
      { id: '6:143:3', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '6:143:4', arabic: "ٱلضَّأْنِ", transliteration: "l-ḍani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sheep", ur: "the sheep" } },
      { id: '6:143:5', arabic: "ٱثْنَيْنِ", transliteration: "ith'nayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "two", ur: "two" } },
      { id: '6:143:6', arabic: "وَمِنَ", transliteration: "wamina", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and of", ur: "اور of" } },
      { id: '6:143:7', arabic: "ٱلْمَعْزِ", transliteration: "l-maʿzi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the goats", ur: "the goats" } },
      { id: '6:143:8', arabic: "ٱثْنَيْنِ ۗ", transliteration: "ith'nayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "two", ur: "two" } },
      { id: '6:143:9', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '6:143:10', arabic: "ءَآلذَّكَرَيْنِ", transliteration: "āldhakarayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(Are) the two males", ur: "(Are) the two males" } },
      { id: '6:143:11', arabic: "حَرَّمَ", transliteration: "ḥarrama", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He has forbidden", ur: "وہ has forbidden" } },
      { id: '6:143:12', arabic: "أَمِ", transliteration: "ami", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '6:143:13', arabic: "ٱلْأُنثَيَيْنِ", transliteration: "l-unthayayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the two females", ur: "the two females" } },
      { id: '6:143:14', arabic: "أَمَّا", transliteration: "ammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "or what", ur: "یا کیا" } },
      { id: '6:143:15', arabic: "ٱشْتَمَلَتْ", transliteration: "ish'tamalat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "contains", ur: "contains" } },
      { id: '6:143:16', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[in it]", ur: "[میں it]" } },
      { id: '6:143:17', arabic: "أَرْحَامُ", transliteration: "arḥāmu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) wombs", ur: "(the) wombs" } },
      { id: '6:143:18', arabic: "ٱلْأُنثَيَيْنِ ۖ", transliteration: "l-unthayayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the two females", ur: "(of) the two females" } },
      { id: '6:143:19', arabic: "نَبِّـُٔونِى", transliteration: "nabbiūnī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Inform me", ur: "Inform me" } },
      { id: '6:143:20', arabic: "بِعِلْمٍ", transliteration: "biʿil'min", pos: ['P+N'], posLabel: 'P+N', root: "ع ل م", meaning: { en: "with knowledge", ur: "ساتھ knowledge" } },
      { id: '6:143:21', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '6:143:22', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '6:143:23', arabic: "صَـٰدِقِينَ", transliteration: "ṣādiqīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "truthful", ur: "truthful" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'مضاف + مضاف إليه' },
        { from: 20, to: 21, label: 'جار + مجرور' }
      ],
    },
  },
  144: {
    text: "وَمِنَ ٱلْإِبِلِ ٱثْنَيْنِ وَمِنَ ٱلْبَقَرِ ٱثْنَيْنِ ۗ قُلْ ءَآلذَّكَرَيْنِ حَرَّمَ أَمِ ٱلْأُنثَيَيْنِ أَمَّا ٱشْتَمَلَتْ عَلَيْهِ أَرْحَامُ ٱلْأُنثَيَيْنِ ۖ أَمْ كُنتُمْ شُهَدَآءَ إِذْ وَصَّىٰكُمُ ٱللَّهُ بِهَـٰذَا ۚ فَمَنْ أَظْلَمُ مِمَّنِ ٱفْتَرَىٰ عَلَى ٱللَّهِ كَذِبًۭا لِّيُضِلَّ ٱلنَّاسَ بِغَيْرِ عِلْمٍ ۗ إِنَّ ٱللَّهَ لَا يَهْدِى ٱلْقَوْمَ ٱلظَّـٰلِمِينَ",
    translation: {
      en: "",
      ur: "اور دو (دو) اونٹوں میں سے اور دو (دو) گایوں میں سے (ان کے بارے میں بھی ان سے) پوچھو کہ (خدا نے) دونوں (کے) نروں کو حرام کیا ہے یا دونوں (کی) مادنیوں کو یا جو بچہ مادنیوں کے پیٹ میں لپٹ رہا ہو اس کو بھلا جس وقت خدا نے تم کو اس کا حکم دیا تھا تم اس وقت موجود تھے؟ تو اس شخص سے زیادہ کون ظالم ہے جو خدا پر جھوٹ افتراء کرے تاکہ اِز راہ بے دانشی لوگوں کو گمراہ کرے کچھ شک نہیں کہ خدا ظالم لوگوں کو ہدایت نہیں دیتا",
    },
    words: [
      { id: '6:144:1', arabic: "وَمِنَ", transliteration: "wamina", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And of", ur: "اور of" } },
      { id: '6:144:2', arabic: "ٱلْإِبِلِ", transliteration: "l-ibili", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the camels", ur: "the camels" } },
      { id: '6:144:3', arabic: "ٱثْنَيْنِ", transliteration: "ith'nayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "two", ur: "two" } },
      { id: '6:144:4', arabic: "وَمِنَ", transliteration: "wamina", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and of", ur: "اور of" } },
      { id: '6:144:5', arabic: "ٱلْبَقَرِ", transliteration: "l-baqari", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the cows", ur: "the cows" } },
      { id: '6:144:6', arabic: "ٱثْنَيْنِ ۗ", transliteration: "ith'nayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "two", ur: "two" } },
      { id: '6:144:7', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '6:144:8', arabic: "ءَآلذَّكَرَيْنِ", transliteration: "āldhakarayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(Is it) the two males", ur: "(Is it) the two males" } },
      { id: '6:144:9', arabic: "حَرَّمَ", transliteration: "ḥarrama", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He (has) forbidden", ur: "وہ (has) forbidden" } },
      { id: '6:144:10', arabic: "أَمِ", transliteration: "ami", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '6:144:11', arabic: "ٱلْأُنثَيَيْنِ", transliteration: "l-unthayayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the two females", ur: "the two females" } },
      { id: '6:144:12', arabic: "أَمَّا", transliteration: "ammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "or what", ur: "یا کیا" } },
      { id: '6:144:13', arabic: "ٱشْتَمَلَتْ", transliteration: "ish'tamalat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "contains", ur: "contains" } },
      { id: '6:144:14', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[in it]", ur: "[میں it]" } },
      { id: '6:144:15', arabic: "أَرْحَامُ", transliteration: "arḥāmu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) wombs", ur: "(the) wombs" } },
      { id: '6:144:16', arabic: "ٱلْأُنثَيَيْنِ ۖ", transliteration: "l-unthayayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the two females", ur: "(of) the two females" } },
      { id: '6:144:17', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Or", ur: "یا" } },
      { id: '6:144:18', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "were you", ur: "were تم" } },
      { id: '6:144:19', arabic: "شُهَدَآءَ", transliteration: "shuhadāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "witnesses", ur: "witnesses" } },
      { id: '6:144:20', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '6:144:21', arabic: "وَصَّىٰكُمُ", transliteration: "waṣṣākumu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "enjoined you", ur: "enjoined تم" } },
      { id: '6:144:22', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:144:23', arabic: "بِهَـٰذَا ۚ", transliteration: "bihādhā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with this", ur: "ساتھ this" } },
      { id: '6:144:24', arabic: "فَمَنْ", transliteration: "faman", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then who", ur: "پھر جو" } },
      { id: '6:144:25', arabic: "أَظْلَمُ", transliteration: "aẓlamu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) more unjust", ur: "(is) more unjust" } },
      { id: '6:144:26', arabic: "مِمَّنِ", transliteration: "mimmani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than (one) who", ur: "than (one) جو" } },
      { id: '6:144:27', arabic: "ٱفْتَرَىٰ", transliteration: "if'tarā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "invents", ur: "invents" } },
      { id: '6:144:28', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '6:144:29', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:144:30', arabic: "كَذِبًۭا", transliteration: "kadhiban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a lie", ur: "a lie" } },
      { id: '6:144:31', arabic: "لِّيُضِلَّ", transliteration: "liyuḍilla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to mislead", ur: "کو mislead" } },
      { id: '6:144:32', arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '6:144:33', arabic: "بِغَيْرِ", transliteration: "bighayri", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "without", ur: "without" } },
      { id: '6:144:34', arabic: "عِلْمٍ ۗ", transliteration: "ʿil'min", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "knowledge", ur: "knowledge" } },
      { id: '6:144:35', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '6:144:36', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:144:37', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '6:144:38', arabic: "يَهْدِى", transliteration: "yahdī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "guide", ur: "guide" } },
      { id: '6:144:39', arabic: "ٱلْقَوْمَ", transliteration: "l-qawma", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "the people", ur: "the لوگ" } },
      { id: '6:144:40', arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the wrongdoing", ur: "the wrongdoing" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
        { from: 28, to: 29, label: 'جار + مجرور' },
        { from: 31, to: 32, label: 'مضاف + مضاف إليه' },
        { from: 33, to: 34, label: 'جار + مجرور' },
        { from: 35, to: 36, label: 'فعل + فاعل' },
        { from: 37, to: 38, label: 'نفی + فعل' },
        { from: 38, to: 39, label: 'فعل + فاعل' }
      ],
    },
  },
  145: {
    text: "قُل لَّآ أَجِدُ فِى مَآ أُوحِىَ إِلَىَّ مُحَرَّمًا عَلَىٰ طَاعِمٍۢ يَطْعَمُهُۥٓ إِلَّآ أَن يَكُونَ مَيْتَةً أَوْ دَمًۭا مَّسْفُوحًا أَوْ لَحْمَ خِنزِيرٍۢ فَإِنَّهُۥ رِجْسٌ أَوْ فِسْقًا أُهِلَّ لِغَيْرِ ٱللَّهِ بِهِۦ ۚ فَمَنِ ٱضْطُرَّ غَيْرَ بَاغٍۢ وَلَا عَادٍۢ فَإِنَّ رَبَّكَ غَفُورٌۭ رَّحِيمٌۭ",
    translation: {
      en: "",
      ur: "کہو کہ جو احکام مجھ پر نازل ہوئے ہیں ان میں کوئی چیز جسے کھانے والا کھائے حرام نہیں پاتا بجز اس کے کہ وہ مرا ہوا جانور یا بہتا لہو یا سور کا گوشت کہ یہ سب ناپاک ہیں یا کوئی گناہ کی چیز ہو کہ اس پر خدا کے سوا کسی اور کا نام لیا گیا ہو اور اگر کوئی مجبور ہو جائے لیکن نہ تو نافرمانی کرے اور نہ حد سے باہر نکل جائے تو تمہارا پروردگار بخشنے والا مہربان ہے",
    },
    words: [
      { id: '6:145:1', arabic: "قُل", transliteration: "qul", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '6:145:2', arabic: "لَّآ", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '6:145:3', arabic: "أَجِدُ", transliteration: "ajidu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(do) I find", ur: "(do) میں find" } },
      { id: '6:145:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '6:145:5', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:145:6', arabic: "أُوحِىَ", transliteration: "ūḥiya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has been revealed", ur: "has been revealed" } },
      { id: '6:145:7', arabic: "إِلَىَّ", transliteration: "ilayya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to me", ur: "کو me" } },
      { id: '6:145:8', arabic: "مُحَرَّمًا", transliteration: "muḥarraman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(anything) forbidden", ur: "(anything) forbidden" } },
      { id: '6:145:9', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '6:145:10', arabic: "طَاعِمٍۢ", transliteration: "ṭāʿimin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an eater", ur: "an eater" } },
      { id: '6:145:11', arabic: "يَطْعَمُهُۥٓ", transliteration: "yaṭʿamuhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "who eats it", ur: "جو eats it" } },
      { id: '6:145:12', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:145:13', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '6:145:14', arabic: "يَكُونَ", transliteration: "yakūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "it be", ur: "it be" } },
      { id: '6:145:15', arabic: "مَيْتَةً", transliteration: "maytatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "dead", ur: "dead" } },
      { id: '6:145:16', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '6:145:17', arabic: "دَمًۭا", transliteration: "daman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "blood", ur: "blood" } },
      { id: '6:145:18', arabic: "مَّسْفُوحًا", transliteration: "masfūḥan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "poured forth", ur: "poured forth" } },
      { id: '6:145:19', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '6:145:20', arabic: "لَحْمَ", transliteration: "laḥma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) flesh", ur: "(the) flesh" } },
      { id: '6:145:21', arabic: "خِنزِيرٍۢ", transliteration: "khinzīrin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) swine ", ur: "(of) swine " } },
      { id: '6:145:22', arabic: "فَإِنَّهُۥ", transliteration: "fa-innahu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "for indeed, it", ur: "for بیشک, it" } },
      { id: '6:145:23', arabic: "رِجْسٌ", transliteration: "rij'sun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) filth ", ur: "(is) filth " } },
      { id: '6:145:24', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '6:145:25', arabic: "فِسْقًا", transliteration: "fis'qan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(it be) disobedience", ur: "(it be) disobedience" } },
      { id: '6:145:26', arabic: "أُهِلَّ", transliteration: "uhilla", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "[is] dedicated", ur: "[is] dedicated" } },
      { id: '6:145:27', arabic: "لِغَيْرِ", transliteration: "lighayri", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to other than", ur: "کو other than" } },
      { id: '6:145:28', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:145:29', arabic: "بِهِۦ ۚ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[on it]", ur: "[پر it]" } },
      { id: '6:145:30', arabic: "فَمَنِ", transliteration: "famani", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But whoever", ur: "لیکن whoever" } },
      { id: '6:145:31', arabic: "ٱضْطُرَّ", transliteration: "uḍ'ṭurra", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) compelled", ur: "(is) compelled" } },
      { id: '6:145:32', arabic: "غَيْرَ", transliteration: "ghayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:145:33', arabic: "بَاغٍۢ", transliteration: "bāghin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "desiring", ur: "desiring" } },
      { id: '6:145:34', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '6:145:35', arabic: "عَادٍۢ", transliteration: "ʿādin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "transgressing", ur: "transgressing" } },
      { id: '6:145:36', arabic: "فَإِنَّ", transliteration: "fa-inna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed", ur: "پھر بیشک" } },
      { id: '6:145:37', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '6:145:38', arabic: "غَفُورٌۭ", transliteration: "ghafūrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) Oft-Forgiving", ur: "(is) Oft-Forgiving" } },
      { id: '6:145:39', arabic: "رَّحِيمٌۭ", transliteration: "raḥīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 27, to: 28, label: 'جار + مجرور' },
        { from: 31, to: 32, label: 'فعل + فاعل' }
      ],
    },
  },
  146: {
    text: "وَعَلَى ٱلَّذِينَ هَادُوا۟ حَرَّمْنَا كُلَّ ذِى ظُفُرٍۢ ۖ وَمِنَ ٱلْبَقَرِ وَٱلْغَنَمِ حَرَّمْنَا عَلَيْهِمْ شُحُومَهُمَآ إِلَّا مَا حَمَلَتْ ظُهُورُهُمَآ أَوِ ٱلْحَوَايَآ أَوْ مَا ٱخْتَلَطَ بِعَظْمٍۢ ۚ ذَٰلِكَ جَزَيْنَـٰهُم بِبَغْيِهِمْ ۖ وَإِنَّا لَصَـٰدِقُونَ",
    translation: {
      en: "",
      ur: "اور یہودیوں پر ہم نے سب ناخن والے جانور حرام کر دئیے تھے اور گایوں اور بکریوں سے ان کی چربی حرام کر دی تھی سوا اس کے جو ان کی پیٹھ پر لگی ہو یا اوجھڑی میں ہو یا ہڈی میں ملی ہو یہ سزا ہم نے ان کو ان کی شرارت کے سبب دی تھی اور ہم تو سچ کہنے والے ہیں",
    },
    words: [
      { id: '6:146:1', arabic: "وَعَلَى", transliteration: "waʿalā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And to", ur: "اور کو" } },
      { id: '6:146:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '6:146:3', arabic: "هَادُوا۟", transliteration: "hādū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are Jews", ur: "are Jews" } },
      { id: '6:146:4', arabic: "حَرَّمْنَا", transliteration: "ḥarramnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We forbade", ur: "ہم forbade" } },
      { id: '6:146:5', arabic: "كُلَّ", transliteration: "kulla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '6:146:6', arabic: "ذِى", transliteration: "dhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(animal) with", ur: "(animal) ساتھ" } },
      { id: '6:146:7', arabic: "ظُفُرٍۢ ۖ", transliteration: "ẓufurin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "claws", ur: "claws" } },
      { id: '6:146:8', arabic: "وَمِنَ", transliteration: "wamina", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and of", ur: "اور of" } },
      { id: '6:146:9', arabic: "ٱلْبَقَرِ", transliteration: "l-baqari", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the cows", ur: "the cows" } },
      { id: '6:146:10', arabic: "وَٱلْغَنَمِ", transliteration: "wal-ghanami", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the sheep", ur: "اور the sheep" } },
      { id: '6:146:11', arabic: "حَرَّمْنَا", transliteration: "ḥarramnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We forbade", ur: "ہم forbade" } },
      { id: '6:146:12', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '6:146:13', arabic: "شُحُومَهُمَآ", transliteration: "shuḥūmahumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their fat", ur: "their fat" } },
      { id: '6:146:14', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:146:15', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:146:16', arabic: "حَمَلَتْ", transliteration: "ḥamalat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "carried", ur: "carried" } },
      { id: '6:146:17', arabic: "ظُهُورُهُمَآ", transliteration: "ẓuhūruhumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their backs", ur: "their backs" } },
      { id: '6:146:18', arabic: "أَوِ", transliteration: "awi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '6:146:19', arabic: "ٱلْحَوَايَآ", transliteration: "l-ḥawāyā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the entrails", ur: "the entrails" } },
      { id: '6:146:20', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '6:146:21', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:146:22', arabic: "ٱخْتَلَطَ", transliteration: "ikh'talaṭa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) joined", ur: "(is) joined" } },
      { id: '6:146:23', arabic: "بِعَظْمٍۢ ۚ", transliteration: "biʿaẓmin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with the bone", ur: "ساتھ the bone" } },
      { id: '6:146:24', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '6:146:25', arabic: "جَزَيْنَـٰهُم", transliteration: "jazaynāhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) their recompense", ur: "(is) their recompense" } },
      { id: '6:146:26', arabic: "بِبَغْيِهِمْ ۖ", transliteration: "bibaghyihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for their rebellion", ur: "for their rebellion" } },
      { id: '6:146:27', arabic: "وَإِنَّا", transliteration: "wa-innā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed, We", ur: "اور بیشک, ہم" } },
      { id: '6:146:28', arabic: "لَصَـٰدِقُونَ", transliteration: "laṣādiqūna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "[surely] are truthful", ur: "[یقیناً] are truthful" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'موصول + صلة' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'مضاف + مضاف إليه' },
        { from: 21, to: 22, label: 'موصول + صلة' }
      ],
    },
  },
  147: {
    text: "فَإِن كَذَّبُوكَ فَقُل رَّبُّكُمْ ذُو رَحْمَةٍۢ وَٰسِعَةٍۢ وَلَا يُرَدُّ بَأْسُهُۥ عَنِ ٱلْقَوْمِ ٱلْمُجْرِمِينَ",
    translation: {
      en: "",
      ur: "اور اگر یوں لوگ تمہاری تکذیب کریں تو کہہ دو تمہارا پروردگار صاحب رحمت وسیع ہے مگر اس کا عذاب گنہ گاروں لوگوں سے نہیں ٹلے گا",
    },
    words: [
      { id: '6:147:1', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '6:147:2', arabic: "كَذَّبُوكَ", transliteration: "kadhabūka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they deny you", ur: "وہ لوگ deny تم" } },
      { id: '6:147:3', arabic: "فَقُل", transliteration: "faqul", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then say", ur: "پھر کہو" } },
      { id: '6:147:4', arabic: "رَّبُّكُمْ", transliteration: "rabbukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Your Lord", ur: "Your رب" } },
      { id: '6:147:5', arabic: "ذُو", transliteration: "dhū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is the) Possessor", ur: "(is the) Possessor" } },
      { id: '6:147:6', arabic: "رَحْمَةٍۢ", transliteration: "raḥmatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Mercy", ur: "(of) رحمت" } },
      { id: '6:147:7', arabic: "وَٰسِعَةٍۢ", transliteration: "wāsiʿatin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "Vast", ur: "Vast" } },
      { id: '6:147:8', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but not", ur: "لیکن نہیں" } },
      { id: '6:147:9', arabic: "يُرَدُّ", transliteration: "yuraddu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be turned back", ur: "will be turned back" } },
      { id: '6:147:10', arabic: "بَأْسُهُۥ", transliteration: "basuhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His wrath", ur: "His wrath" } },
      { id: '6:147:11', arabic: "عَنِ", transliteration: "ʿani", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:147:12', arabic: "ٱلْقَوْمِ", transliteration: "l-qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "the people", ur: "the لوگ" } },
      { id: '6:147:13', arabic: "ٱلْمُجْرِمِينَ", transliteration: "l-muj'rimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(who are) criminals", ur: "(جو are) criminals" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  148: {
    text: "سَيَقُولُ ٱلَّذِينَ أَشْرَكُوا۟ لَوْ شَآءَ ٱللَّهُ مَآ أَشْرَكْنَا وَلَآ ءَابَآؤُنَا وَلَا حَرَّمْنَا مِن شَىْءٍۢ ۚ كَذَٰلِكَ كَذَّبَ ٱلَّذِينَ مِن قَبْلِهِمْ حَتَّىٰ ذَاقُوا۟ بَأْسَنَا ۗ قُلْ هَلْ عِندَكُم مِّنْ عِلْمٍۢ فَتُخْرِجُوهُ لَنَآ ۖ إِن تَتَّبِعُونَ إِلَّا ٱلظَّنَّ وَإِنْ أَنتُمْ إِلَّا تَخْرُصُونَ",
    translation: {
      en: "",
      ur: "جو لوگ شرک کرتے ہیں وہ کہیں گے کہ اگر خدا چاہتا تو ہم شرک نہ کرتے اور نہ ہمارے باپ دادا (شرک کرتے) اور نہ ہم کسی چیز کو حرام ٹھہراتے اسی طرح ان لوگوں نے تکذیب کی تھی جو ان سے پہلے تھے یہاں تک کہ ہمارے عذاب کا مزہ چکھ کر رہے کہہ دو کیا تمہارے پاس کوئی سند ہے (اگر ہے) تو اسے ہمارے سامنے نکالو تم محض خیال کے پیچھے چلتے اور اٹکل کی تیر چلاتے ہو",
    },
    words: [
      { id: '6:148:1', arabic: "سَيَقُولُ", transliteration: "sayaqūlu", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "Will say", ur: "Will کہو" } },
      { id: '6:148:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '6:148:3', arabic: "أَشْرَكُوا۟", transliteration: "ashrakū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "associate partners (with Allah)", ur: "associate partners (ساتھ اللہ)" } },
      { id: '6:148:4', arabic: "لَوْ", transliteration: "law", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '6:148:5', arabic: "شَآءَ", transliteration: "shāa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Had willed", ur: "Had willed" } },
      { id: '6:148:6', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:148:7', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:148:8', arabic: "أَشْرَكْنَا", transliteration: "ashraknā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we (would) have associated partners (with Allah)", ur: "ہم (would) have associated partners (ساتھ اللہ)" } },
      { id: '6:148:9', arabic: "وَلَآ", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '6:148:10', arabic: "ءَابَآؤُنَا", transliteration: "ābāunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our forefathers", ur: "our forefathers" } },
      { id: '6:148:11', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '6:148:12', arabic: "حَرَّمْنَا", transliteration: "ḥarramnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we (would) have forbidden", ur: "ہم (would) have forbidden" } },
      { id: '6:148:13', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[of]", ur: "[of]" } },
      { id: '6:148:14', arabic: "شَىْءٍۢ ۚ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } },
      { id: '6:148:15', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Likewise", ur: "Likewise" } },
      { id: '6:148:16', arabic: "كَذَّبَ", transliteration: "kadhaba", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '6:148:17', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '6:148:18', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(were from)", ur: "(were سے)" } },
      { id: '6:148:19', arabic: "قَبْلِهِمْ", transliteration: "qablihim", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before them", ur: "پہلے them" } },
      { id: '6:148:20', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '6:148:21', arabic: "ذَاقُوا۟", transliteration: "dhāqū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they tasted", ur: "وہ لوگ tasted" } },
      { id: '6:148:22', arabic: "بَأْسَنَا ۗ", transliteration: "basanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our wrath", ur: "Our wrath" } },
      { id: '6:148:23', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '6:148:24', arabic: "هَلْ", transliteration: "hal", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Is", ur: "Is" } },
      { id: '6:148:25', arabic: "عِندَكُم", transliteration: "ʿindakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with you", ur: "ساتھ تم" } },
      { id: '6:148:26', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[of]", ur: "[of]" } },
      { id: '6:148:27', arabic: "عِلْمٍۢ", transliteration: "ʿil'min", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "any knowledge", ur: "any knowledge" } },
      { id: '6:148:28', arabic: "فَتُخْرِجُوهُ", transliteration: "fatukh'rijūhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then produce it", ur: "پھر produce it" } },
      { id: '6:148:29', arabic: "لَنَآ ۖ", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for us", ur: "for us" } },
      { id: '6:148:30', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '6:148:31', arabic: "تَتَّبِعُونَ", transliteration: "tattabiʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you follow", ur: "تم follow" } },
      { id: '6:148:32', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:148:33', arabic: "ٱلظَّنَّ", transliteration: "l-ẓana", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the assumption", ur: "the assumption" } },
      { id: '6:148:34', arabic: "وَإِنْ", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '6:148:35', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you (do)", ur: "تم (do)" } },
      { id: '6:148:36', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '6:148:37', arabic: "تَخْرُصُونَ", transliteration: "takhruṣūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "guess", ur: "guess" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 31, to: 32, label: 'فعل + فاعل' },
        { from: 32, to: 33, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  149: {
    text: "قُلْ فَلِلَّهِ ٱلْحُجَّةُ ٱلْبَـٰلِغَةُ ۖ فَلَوْ شَآءَ لَهَدَىٰكُمْ أَجْمَعِينَ",
    translation: {
      en: "",
      ur: "کہہ دو کہ خدا ہی کی حجت غالب ہے اگر وہ چاہتا تو تم سب کو ہدایت دے دیتا",
    },
    words: [
      { id: '6:149:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '6:149:2', arabic: "فَلِلَّهِ", transliteration: "falillahi", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "With Allah", ur: "ساتھ اللہ" } },
      { id: '6:149:3', arabic: "ٱلْحُجَّةُ", transliteration: "l-ḥujatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the argument ", ur: "(is) the argument " } },
      { id: '6:149:4', arabic: "ٱلْبَـٰلِغَةُ ۖ", transliteration: "l-bālighatu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the conclusive", ur: "the conclusive" } },
      { id: '6:149:5', arabic: "فَلَوْ", transliteration: "falaw", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '6:149:6', arabic: "شَآءَ", transliteration: "shāa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He (had) willed", ur: "وہ (had) willed" } },
      { id: '6:149:7', arabic: "لَهَدَىٰكُمْ", transliteration: "lahadākum", pos: ['N'], posLabel: 'N', root: "ه د ي", meaning: { en: "surely He (would) have guided you", ur: "یقیناً وہ (would) have guided تم" } },
      { id: '6:149:8', arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  150: {
    text: "قُلْ هَلُمَّ شُهَدَآءَكُمُ ٱلَّذِينَ يَشْهَدُونَ أَنَّ ٱللَّهَ حَرَّمَ هَـٰذَا ۖ فَإِن شَهِدُوا۟ فَلَا تَشْهَدْ مَعَهُمْ ۚ وَلَا تَتَّبِعْ أَهْوَآءَ ٱلَّذِينَ كَذَّبُوا۟ بِـَٔايَـٰتِنَا وَٱلَّذِينَ لَا يُؤْمِنُونَ بِٱلْـَٔاخِرَةِ وَهُم بِرَبِّهِمْ يَعْدِلُونَ",
    translation: {
      en: "",
      ur: "کہو کہ اپنے گواہوں کو لاؤ جو بتائیں کہ خدا نے یہ چیزیں حرام کی ہیں پھر اگر وہ (آ کر) گواہی دیں تو تم ان کے ساتھ گواہی نہ دینا اور نہ ان لوگوں کی خواہشوں کی پیروی کرنا جو ہماری آیتوں کو جھٹلاتے ہیں اور آخرت پر ایمان نہیں لاتے اور (بتوں کو) اپنے پروردگار کے برابر ٹھہراتے ہیں",
    },
    words: [
      { id: '6:150:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '6:150:2', arabic: "هَلُمَّ", transliteration: "halumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Bring forward", ur: "Bring forward" } },
      { id: '6:150:3', arabic: "شُهَدَآءَكُمُ", transliteration: "shuhadāakumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your witnesses", ur: "your witnesses" } },
      { id: '6:150:4', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '6:150:5', arabic: "يَشْهَدُونَ", transliteration: "yashhadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "testify", ur: "testify" } },
      { id: '6:150:6', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '6:150:7', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:150:8', arabic: "حَرَّمَ", transliteration: "ḥarrama", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "prohibited", ur: "prohibited" } },
      { id: '6:150:9', arabic: "هَـٰذَا ۖ", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '6:150:10', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then if", ur: "پھر if" } },
      { id: '6:150:11', arabic: "شَهِدُوا۟", transliteration: "shahidū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they testify", ur: "وہ لوگ testify" } },
      { id: '6:150:12', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then (do) not", ur: "پھر (do) نہیں" } },
      { id: '6:150:13', arabic: "تَشْهَدْ", transliteration: "tashhad", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "testify", ur: "testify" } },
      { id: '6:150:14', arabic: "مَعَهُمْ ۚ", transliteration: "maʿahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '6:150:15', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '6:150:16', arabic: "تَتَّبِعْ", transliteration: "tattabiʿ", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "follow", ur: "follow" } },
      { id: '6:150:17', arabic: "أَهْوَآءَ", transliteration: "ahwāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) desires", ur: "(the) desires" } },
      { id: '6:150:18', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those who", ur: "(of) جو لوگ" } },
      { id: '6:150:19', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '6:150:20', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Our Signs", ur: "Our نشانیاں" } },
      { id: '6:150:21', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those who", ur: "اور جو لوگ" } },
      { id: '6:150:22', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '6:150:23', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '6:150:24', arabic: "بِٱلْـَٔاخِرَةِ", transliteration: "bil-ākhirati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in the Hereafter", ur: "میں the آخرت" } },
      { id: '6:150:25', arabic: "وَهُم", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while they", ur: "while وہ لوگ" } },
      { id: '6:150:26', arabic: "بِرَبِّهِمْ", transliteration: "birabbihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with their Lord", ur: "ساتھ their رب" } },
      { id: '6:150:27', arabic: "يَعْدِلُونَ", transliteration: "yaʿdilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "set up equals", ur: "set up equals" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'نفی + فعل' }
      ],
    },
  },
  151: {
    text: "۞ قُلْ تَعَالَوْا۟ أَتْلُ مَا حَرَّمَ رَبُّكُمْ عَلَيْكُمْ ۖ أَلَّا تُشْرِكُوا۟ بِهِۦ شَيْـًۭٔا ۖ وَبِٱلْوَٰلِدَيْنِ إِحْسَـٰنًۭا ۖ وَلَا تَقْتُلُوٓا۟ أَوْلَـٰدَكُم مِّنْ إِمْلَـٰقٍۢ ۖ نَّحْنُ نَرْزُقُكُمْ وَإِيَّاهُمْ ۖ وَلَا تَقْرَبُوا۟ ٱلْفَوَٰحِشَ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ ۖ وَلَا تَقْتُلُوا۟ ٱلنَّفْسَ ٱلَّتِى حَرَّمَ ٱللَّهُ إِلَّا بِٱلْحَقِّ ۚ ذَٰلِكُمْ وَصَّىٰكُم بِهِۦ لَعَلَّكُمْ تَعْقِلُونَ",
    translation: {
      en: "",
      ur: "کہہ کہ (لوگو) آؤ میں تمہیں وہ چیزیں پڑھ کر سناؤں جو تمہارے پروردگار نے تم پر حرام کر دی ہیں (ان کی نسبت اس نے اس طرح ارشاد فرمایا ہے) کہ کسی چیز کو خدا کا شریک نہ بنانا اور ماں باپ (سے بدسلوکی نہ کرنا بلکہ) سلوک کرتے رہنا اور ناداری (کے اندیشے) سے اپنی اولاد کو قتل نہ کرنا کیونکہ تم کو اور ان کو ہم ہی رزق دیتے ہیں اور بےحیائی کے کام ظاہر ہوں یا پوشیدہ ان کے پاس نہ پھٹکنا اور کسی جان (والے) کو جس کے قتل کو خدا نے حرام کر دیا ہے قتل نہ کرنا مگر جائز طور پر (یعنی جس کا شریعت حکم دے) ان باتوں کا وہ تمہیں ارشاد فرماتا ہے تاکہ تم سمجھو",
    },
    words: [
      { id: '6:151:1', arabic: "۞ قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '6:151:2', arabic: "تَعَالَوْا۟", transliteration: "taʿālaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Come", ur: "Come" } },
      { id: '6:151:3', arabic: "أَتْلُ", transliteration: "atlu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will recite", ur: "میں will recite" } },
      { id: '6:151:4', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:151:5', arabic: "حَرَّمَ", transliteration: "ḥarrama", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has prohibited", ur: "has prohibited" } },
      { id: '6:151:6', arabic: "رَبُّكُمْ", transliteration: "rabbukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '6:151:7', arabic: "عَلَيْكُمْ ۖ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '6:151:8', arabic: "أَلَّا", transliteration: "allā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That (do) not", ur: "وہ (do) نہیں" } },
      { id: '6:151:9', arabic: "تُشْرِكُوا۟", transliteration: "tush'rikū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "associate", ur: "associate" } },
      { id: '6:151:10', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Him", ur: "ساتھ Him" } },
      { id: '6:151:11', arabic: "شَيْـًۭٔا ۖ", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } },
      { id: '6:151:12', arabic: "وَبِٱلْوَٰلِدَيْنِ", transliteration: "wabil-wālidayni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and with the parents", ur: "اور ساتھ the parents" } },
      { id: '6:151:13', arabic: "إِحْسَـٰنًۭا ۖ", transliteration: "iḥ'sānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(be) good", ur: "(be) اچھا" } },
      { id: '6:151:14', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '6:151:15', arabic: "تَقْتُلُوٓا۟", transliteration: "taqtulū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "kill", ur: "kill" } },
      { id: '6:151:16', arabic: "أَوْلَـٰدَكُم", transliteration: "awlādakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your children", ur: "your اولاد" } },
      { id: '6:151:17', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(out) of", ur: "(out) of" } },
      { id: '6:151:18', arabic: "إِمْلَـٰقٍۢ ۖ", transliteration: "im'lāqin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "poverty", ur: "poverty" } },
      { id: '6:151:19', arabic: "نَّحْنُ", transliteration: "naḥnu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We", ur: "ہم" } },
      { id: '6:151:20', arabic: "نَرْزُقُكُمْ", transliteration: "narzuqukum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "provide for you", ur: "provide for تم" } },
      { id: '6:151:21', arabic: "وَإِيَّاهُمْ ۖ", transliteration: "wa-iyyāhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and for them", ur: "اور for them" } },
      { id: '6:151:22', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '6:151:23', arabic: "تَقْرَبُوا۟", transliteration: "taqrabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "go near", ur: "go near" } },
      { id: '6:151:24', arabic: "ٱلْفَوَٰحِشَ", transliteration: "l-fawāḥisha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] immoralities", ur: "[the] immoralities" } },
      { id: '6:151:25', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:151:26', arabic: "ظَهَرَ", transliteration: "ẓahara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) apparent", ur: "(is) apparent" } },
      { id: '6:151:27', arabic: "مِنْهَا", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of them", ur: "of them" } },
      { id: '6:151:28', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '6:151:29', arabic: "بَطَنَ ۖ", transliteration: "baṭana", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) concealed", ur: "(is) concealed" } },
      { id: '6:151:30', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '6:151:31', arabic: "تَقْتُلُوا۟", transliteration: "taqtulū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "kill", ur: "kill" } },
      { id: '6:151:32', arabic: "ٱلنَّفْسَ", transliteration: "l-nafsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the soul", ur: "the روح" } },
      { id: '6:151:33', arabic: "ٱلَّتِى", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '6:151:34', arabic: "حَرَّمَ", transliteration: "ḥarrama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has (been) forbidden", ur: "has (been) forbidden" } },
      { id: '6:151:35', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '6:151:36', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:151:37', arabic: "بِٱلْحَقِّ ۚ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by (legal) right", ur: "by (legal) right" } },
      { id: '6:151:38', arabic: "ذَٰلِكُمْ", transliteration: "dhālikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '6:151:39', arabic: "وَصَّىٰكُم", transliteration: "waṣṣākum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(He) has enjoined on you", ur: "(وہ) has enjoined پر تم" } },
      { id: '6:151:40', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '6:151:41', arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that you may", ur: "so وہ تم may" } },
      { id: '6:151:42', arabic: "تَعْقِلُونَ", transliteration: "taʿqilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "use reason", ur: "use reason" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'فعل + فاعل' },
        { from: 26, to: 27, label: 'مضاف + مضاف إليه' },
        { from: 31, to: 32, label: 'فعل + فاعل' },
        { from: 37, to: 38, label: 'جار + مجرور' },
        { from: 40, to: 41, label: 'جار + مجرور' }
      ],
    },
  },
  152: {
    text: "وَلَا تَقْرَبُوا۟ مَالَ ٱلْيَتِيمِ إِلَّا بِٱلَّتِى هِىَ أَحْسَنُ حَتَّىٰ يَبْلُغَ أَشُدَّهُۥ ۖ وَأَوْفُوا۟ ٱلْكَيْلَ وَٱلْمِيزَانَ بِٱلْقِسْطِ ۖ لَا نُكَلِّفُ نَفْسًا إِلَّا وُسْعَهَا ۖ وَإِذَا قُلْتُمْ فَٱعْدِلُوا۟ وَلَوْ كَانَ ذَا قُرْبَىٰ ۖ وَبِعَهْدِ ٱللَّهِ أَوْفُوا۟ ۚ ذَٰلِكُمْ وَصَّىٰكُم بِهِۦ لَعَلَّكُمْ تَذَكَّرُونَ",
    translation: {
      en: "",
      ur: "اور یتیم کے مال کے پاس بھی نہ جانا مگر ایسے طریق سے کہ بہت ہی پسندیدہ ہو یہاں تک کہ وہ جوانی کو پہنچ جائے اور ناپ تول انصاف کے ساتھ پوری پوری کیا کرو ہم کسی کو تکلیف نہیں دیتے مگر اس کی طاقت کے مطابق اور جب (کسی کی نسبت) کوئی بات کہو تو انصاف سے کہو گو وہ (تمہارا) رشتہ دار ہی ہو اور خدا کے عہد کو پورا کرو ان باتوں کا خدا تمہیں حکم دیتا ہے تاکہ تم نصحیت کرو",
    },
    words: [
      { id: '6:152:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '6:152:2', arabic: "تَقْرَبُوا۟", transliteration: "taqrabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "go near", ur: "go near" } },
      { id: '6:152:3', arabic: "مَالَ", transliteration: "māla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wealth", ur: "wealth" } },
      { id: '6:152:4', arabic: "ٱلْيَتِيمِ", transliteration: "l-yatīmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the orphans", ur: "(of) the orphans" } },
      { id: '6:152:5', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:152:6', arabic: "بِٱلَّتِى", transliteration: "bi-allatī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with that", ur: "ساتھ وہ" } },
      { id: '6:152:7', arabic: "هِىَ", transliteration: "hiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '6:152:8', arabic: "أَحْسَنُ", transliteration: "aḥsanu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) best", ur: "(is) best" } },
      { id: '6:152:9', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '6:152:10', arabic: "يَبْلُغَ", transliteration: "yablugha", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he reaches", ur: "وہ reaches" } },
      { id: '6:152:11', arabic: "أَشُدَّهُۥ ۖ", transliteration: "ashuddahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his maturity", ur: "his maturity" } },
      { id: '6:152:12', arabic: "وَأَوْفُوا۟", transliteration: "wa-awfū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And give full", ur: "اور give full" } },
      { id: '6:152:13', arabic: "ٱلْكَيْلَ", transliteration: "l-kayla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] measure", ur: "[the] measure" } },
      { id: '6:152:14', arabic: "وَٱلْمِيزَانَ", transliteration: "wal-mīzāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the weight", ur: "اور the weight" } },
      { id: '6:152:15', arabic: "بِٱلْقِسْطِ ۖ", transliteration: "bil-qis'ṭi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with justice", ur: "ساتھ justice" } },
      { id: '6:152:16', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '6:152:17', arabic: "نُكَلِّفُ", transliteration: "nukallifu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We burden", ur: "ہم burden" } },
      { id: '6:152:18', arabic: "نَفْسًا", transliteration: "nafsan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "any soul", ur: "any روح" } },
      { id: '6:152:19', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:152:20', arabic: "وُسْعَهَا ۖ", transliteration: "wus'ʿahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) its capacity", ur: "(کو) its capacity" } },
      { id: '6:152:21', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '6:152:22', arabic: "قُلْتُمْ", transliteration: "qul'tum", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "you speak", ur: "تم speak" } },
      { id: '6:152:23', arabic: "فَٱعْدِلُوا۟", transliteration: "fa-iʿ'dilū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then be just", ur: "پھر be just" } },
      { id: '6:152:24', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "even if", ur: "even if" } },
      { id: '6:152:25', arabic: "كَانَ", transliteration: "kāna", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "he is", ur: "وہ is" } },
      { id: '6:152:26', arabic: "ذَا", transliteration: "dhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(one of)", ur: "(one of)" } },
      { id: '6:152:27', arabic: "قُرْبَىٰ ۖ", transliteration: "qur'bā", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "a near relative", ur: "a near relative" } },
      { id: '6:152:28', arabic: "وَبِعَهْدِ", transliteration: "wabiʿahdi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (the) Covenant", ur: "اور (the) Covenant" } },
      { id: '6:152:29', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '6:152:30', arabic: "أَوْفُوا۟ ۚ", transliteration: "awfū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fulfil", ur: "fulfil" } },
      { id: '6:152:31', arabic: "ذَٰلِكُمْ", transliteration: "dhālikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '6:152:32', arabic: "وَصَّىٰكُم", transliteration: "waṣṣākum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(He) has enjoined on you", ur: "(وہ) has enjoined پر تم" } },
      { id: '6:152:33', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '6:152:34', arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that you may", ur: "so وہ تم may" } },
      { id: '6:152:35', arabic: "تَذَكَّرُونَ", transliteration: "tadhakkarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "remember", ur: "remember" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'نفی + فعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 25, to: 26, label: 'فعل + فاعل' },
        { from: 26, to: 27, label: 'موصوف + صفت' },
        { from: 33, to: 34, label: 'جار + مجرور' }
      ],
    },
  },
  153: {
    text: "وَأَنَّ هَـٰذَا صِرَٰطِى مُسْتَقِيمًۭا فَٱتَّبِعُوهُ ۖ وَلَا تَتَّبِعُوا۟ ٱلسُّبُلَ فَتَفَرَّقَ بِكُمْ عَن سَبِيلِهِۦ ۚ ذَٰلِكُمْ وَصَّىٰكُم بِهِۦ لَعَلَّكُمْ تَتَّقُونَ",
    translation: {
      en: "",
      ur: "اور یہ کہ میرا سیدھا رستہ یہی ہے تو تم اسی پر چلنا اور اور رستوں پر نہ چلنا کہ (ان پر چل کر) خدا کے رستے سے الگ ہو جاؤ گے ان باتوں کا خدا تمہیں حکم دیتا ہے تاکہ تم پرہیزگار بنو",
    },
    words: [
      { id: '6:153:1', arabic: "وَأَنَّ", transliteration: "wa-anna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And that", ur: "اور وہ" } },
      { id: '6:153:2', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '6:153:3', arabic: "صِرَٰطِى", transliteration: "ṣirāṭī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) My path", ur: "(is) My راستہ" } },
      { id: '6:153:4', arabic: "مُسْتَقِيمًۭا", transliteration: "mus'taqīman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "straight", ur: "سیدھا" } },
      { id: '6:153:5', arabic: "فَٱتَّبِعُوهُ ۖ", transliteration: "fa-ittabiʿūhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so follow it", ur: "so follow it" } },
      { id: '6:153:6', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '6:153:7', arabic: "تَتَّبِعُوا۟", transliteration: "tattabiʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "follow", ur: "follow" } },
      { id: '6:153:8', arabic: "ٱلسُّبُلَ", transliteration: "l-subula", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the (other) paths", ur: "the (other) paths" } },
      { id: '6:153:9', arabic: "فَتَفَرَّقَ", transliteration: "fatafarraqa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then they will separate", ur: "پھر وہ لوگ will separate" } },
      { id: '6:153:10', arabic: "بِكُمْ", transliteration: "bikum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '6:153:11', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:153:12', arabic: "سَبِيلِهِۦ ۚ", transliteration: "sabīlihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His path", ur: "His راستہ" } },
      { id: '6:153:13', arabic: "ذَٰلِكُمْ", transliteration: "dhālikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '6:153:14', arabic: "وَصَّىٰكُم", transliteration: "waṣṣākum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(He) has enjoined on you", ur: "(وہ) has enjoined پر تم" } },
      { id: '6:153:15', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[with it]", ur: "[ساتھ it]" } },
      { id: '6:153:16', arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that you may", ur: "so وہ تم may" } },
      { id: '6:153:17', arabic: "تَتَّقُونَ", transliteration: "tattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "become righteous", ur: "become نیک" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'جار + مجرور' }
      ],
    },
  },
  154: {
    text: "ثُمَّ ءَاتَيْنَا مُوسَى ٱلْكِتَـٰبَ تَمَامًا عَلَى ٱلَّذِىٓ أَحْسَنَ وَتَفْصِيلًۭا لِّكُلِّ شَىْءٍۢ وَهُدًۭى وَرَحْمَةًۭ لَّعَلَّهُم بِلِقَآءِ رَبِّهِمْ يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "(ہاں) پھر (سن لو کہ) ہم نے موسیؑ کو کتاب عنایت کی تھی تاکہ ان لوگوں پر جو نیکوکار ہیں نعمت پوری کر دیں اور (اس میں) ہر چیز کا بیان (ہے) اور ہدایت (ہے) اور رحمت ہے تاکہ (ان کی امت کے) لوگ اپنے پروردگار کے رُوبرو حاضر ہونے کا یقین کریں",
    },
    words: [
      { id: '6:154:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Moreover", ur: "Moreover" } },
      { id: '6:154:2', arabic: "ءَاتَيْنَا", transliteration: "ātaynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We gave", ur: "ہم gave" } },
      { id: '6:154:3', arabic: "مُوسَى", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '6:154:4', arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '6:154:5', arabic: "تَمَامًا", transliteration: "tamāman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "completing (Our Favor)", ur: "completing (Our Favor)" } },
      { id: '6:154:6', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '6:154:7', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the one who", ur: "the one جو" } },
      { id: '6:154:8', arabic: "أَحْسَنَ", transliteration: "aḥsana", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "did good", ur: "did اچھا" } },
      { id: '6:154:9', arabic: "وَتَفْصِيلًۭا", transliteration: "watafṣīlan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and an explanation", ur: "اور an explanation" } },
      { id: '6:154:10', arabic: "لِّكُلِّ", transliteration: "likulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of every", ur: "of ہر" } },
      { id: '6:154:11', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '6:154:12', arabic: "وَهُدًۭى", transliteration: "wahudan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a guidance", ur: "اور a guidance" } },
      { id: '6:154:13', arabic: "وَرَحْمَةًۭ", transliteration: "waraḥmatan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ر ح م", meaning: { en: "and mercy", ur: "اور رحمت" } },
      { id: '6:154:14', arabic: "لَّعَلَّهُم", transliteration: "laʿallahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that they may", ur: "so وہ وہ لوگ may" } },
      { id: '6:154:15', arabic: "بِلِقَآءِ", transliteration: "biliqāi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in (the) meeting", ur: "میں (the) meeting" } },
      { id: '6:154:16', arabic: "رَبِّهِمْ", transliteration: "rabbihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) their Lord", ur: "(ساتھ) their رب" } },
      { id: '6:154:17', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "believe", ur: "ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'جار + مجرور' }
      ],
    },
  },
  155: {
    text: "وَهَـٰذَا كِتَـٰبٌ أَنزَلْنَـٰهُ مُبَارَكٌۭ فَٱتَّبِعُوهُ وَٱتَّقُوا۟ لَعَلَّكُمْ تُرْحَمُونَ",
    translation: {
      en: "",
      ur: "اور (اے کفر کرنے والوں) یہ کتاب بھی ہمیں نے اتاری ہے برکت والی تو اس کی پیروی کرو اور (خدا سے) ڈرو تاکہ تم پر مہربانی کی جائے",
    },
    words: [
      { id: '6:155:1', arabic: "وَهَـٰذَا", transliteration: "wahādhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And this", ur: "اور this" } },
      { id: '6:155:2', arabic: "كِتَـٰبٌ", transliteration: "kitābun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a Book", ur: "(is) a کتاب" } },
      { id: '6:155:3', arabic: "أَنزَلْنَـٰهُ", transliteration: "anzalnāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have revealed it ", ur: "ہم have revealed it " } },
      { id: '6:155:4', arabic: "مُبَارَكٌۭ", transliteration: "mubārakun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "blessed", ur: "blessed" } },
      { id: '6:155:5', arabic: "فَٱتَّبِعُوهُ", transliteration: "fa-ittabiʿūhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so follow it", ur: "so follow it" } },
      { id: '6:155:6', arabic: "وَٱتَّقُوا۟", transliteration: "wa-ittaqū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and fear (Allah)", ur: "اور ڈرنا (اللہ)" } },
      { id: '6:155:7', arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that you may", ur: "so وہ تم may" } },
      { id: '6:155:8', arabic: "تُرْحَمُونَ", transliteration: "tur'ḥamūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "receive mercy", ur: "receive رحمت" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  156: {
    text: "أَن تَقُولُوٓا۟ إِنَّمَآ أُنزِلَ ٱلْكِتَـٰبُ عَلَىٰ طَآئِفَتَيْنِ مِن قَبْلِنَا وَإِن كُنَّا عَن دِرَاسَتِهِمْ لَغَـٰفِلِينَ",
    translation: {
      en: "",
      ur: "(اور اس لیے اتاری ہے) کہ (تم یوں نہ) کہو کہ ہم سے پہلے دو ہی گروہوں پر کتابیں اتری تھیں اور ہم ان کے پڑھنے سے (معذور اور) بےخبر تھے",
    },
    words: [
      { id: '6:156:1', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Lest", ur: "Lest" } },
      { id: '6:156:2', arabic: "تَقُولُوٓا۟", transliteration: "taqūlū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you say", ur: "تم کہو" } },
      { id: '6:156:3', arabic: "إِنَّمَآ", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '6:156:4', arabic: "أُنزِلَ", transliteration: "unzila", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "was revealed", ur: "was revealed" } },
      { id: '6:156:5', arabic: "ٱلْكِتَـٰبُ", transliteration: "l-kitābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '6:156:6', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '6:156:7', arabic: "طَآئِفَتَيْنِ", transliteration: "ṭāifatayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the two groups", ur: "the two groups" } },
      { id: '6:156:8', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:156:9', arabic: "قَبْلِنَا", transliteration: "qablinā", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before us", ur: "پہلے us" } },
      { id: '6:156:10', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and indeed", ur: "اور بیشک" } },
      { id: '6:156:11', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we were", ur: "ہم were" } },
      { id: '6:156:12', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "about", ur: "about" } },
      { id: '6:156:13', arabic: "دِرَاسَتِهِمْ", transliteration: "dirāsatihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their study", ur: "their study" } },
      { id: '6:156:14', arabic: "لَغَـٰفِلِينَ", transliteration: "laghāfilīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "certainly unaware", ur: "certainly unaware" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  157: {
    text: "أَوْ تَقُولُوا۟ لَوْ أَنَّآ أُنزِلَ عَلَيْنَا ٱلْكِتَـٰبُ لَكُنَّآ أَهْدَىٰ مِنْهُمْ ۚ فَقَدْ جَآءَكُم بَيِّنَةٌۭ مِّن رَّبِّكُمْ وَهُدًۭى وَرَحْمَةٌۭ ۚ فَمَنْ أَظْلَمُ مِمَّن كَذَّبَ بِـَٔايَـٰتِ ٱللَّهِ وَصَدَفَ عَنْهَا ۗ سَنَجْزِى ٱلَّذِينَ يَصْدِفُونَ عَنْ ءَايَـٰتِنَا سُوٓءَ ٱلْعَذَابِ بِمَا كَانُوا۟ يَصْدِفُونَ",
    translation: {
      en: "",
      ur: "یا (یہ نہ) کہو کہ اگر ہم پر بھی کتاب نازل ہوتی تو ہم ان لوگوں کی نسبت کہیں سیدھے رستے پر ہوتے سو تمہارے پاس تمہارے پروردگار کی طرف سے دلیل اور ہدایت اور رحمت آ گئی ہے تو اس سے بڑھ کر ظالم کون ہوگا جو خدا کی آیتوں کی تکذیب کرے اور ان سے (لوگوں کو) پھیرے جو لوگ ہماری آیتوں سے پھیرتے ہیں اس پھیرنے کے سبب ہم ان کو برے عذاب کی سزا دیں گے",
    },
    words: [
      { id: '6:157:1', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Or", ur: "یا" } },
      { id: '6:157:2', arabic: "تَقُولُوا۟", transliteration: "taqūlū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you say", ur: "تم کہو" } },
      { id: '6:157:3', arabic: "لَوْ", transliteration: "law", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '6:157:4', arabic: "أَنَّآ", transliteration: "annā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '6:157:5', arabic: "أُنزِلَ", transliteration: "unzila", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "was revealed", ur: "was revealed" } },
      { id: '6:157:6', arabic: "عَلَيْنَا", transliteration: "ʿalaynā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to us", ur: "کو us" } },
      { id: '6:157:7', arabic: "ٱلْكِتَـٰبُ", transliteration: "l-kitābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '6:157:8', arabic: "لَكُنَّآ", transliteration: "lakunnā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely we (would) have been", ur: "یقیناً ہم (would) have been" } },
      { id: '6:157:9', arabic: "أَهْدَىٰ", transliteration: "ahdā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "better guided", ur: "better guided" } },
      { id: '6:157:10', arabic: "مِنْهُمْ ۚ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than them", ur: "than them" } },
      { id: '6:157:11', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So verily", ur: "So بیشک" } },
      { id: '6:157:12', arabic: "جَآءَكُم", transliteration: "jāakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has come to you", ur: "has come کو تم" } },
      { id: '6:157:13', arabic: "بَيِّنَةٌۭ", transliteration: "bayyinatun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear proofs", ur: "clear proofs" } },
      { id: '6:157:14', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:157:15', arabic: "رَّبِّكُمْ", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '6:157:16', arabic: "وَهُدًۭى", transliteration: "wahudan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a Guidance", ur: "اور a Guidance" } },
      { id: '6:157:17', arabic: "وَرَحْمَةٌۭ ۚ", transliteration: "waraḥmatun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a Mercy", ur: "اور a رحمت" } },
      { id: '6:157:18', arabic: "فَمَنْ", transliteration: "faman", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then who", ur: "پھر جو" } },
      { id: '6:157:19', arabic: "أَظْلَمُ", transliteration: "aẓlamu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) more unjust", ur: "(is) more unjust" } },
      { id: '6:157:20', arabic: "مِمَّن", transliteration: "mimman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than (he) who", ur: "than (وہ) جو" } },
      { id: '6:157:21', arabic: "كَذَّبَ", transliteration: "kadhaba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "denies", ur: "denies" } },
      { id: '6:157:22', arabic: "بِـَٔايَـٰتِ", transliteration: "biāyāti", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[with] (the) Verses", ur: "[ساتھ] (the) Verses" } },
      { id: '6:157:23', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '6:157:24', arabic: "وَصَدَفَ", transliteration: "waṣadafa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and turns away", ur: "اور turns away" } },
      { id: '6:157:25', arabic: "عَنْهَا ۗ", transliteration: "ʿanhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '6:157:26', arabic: "سَنَجْزِى", transliteration: "sanajzī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will recompense", ur: "ہم will recompense" } },
      { id: '6:157:27', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '6:157:28', arabic: "يَصْدِفُونَ", transliteration: "yaṣdifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "turn away", ur: "turn away" } },
      { id: '6:157:29', arabic: "عَنْ", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:157:30', arabic: "ءَايَـٰتِنَا", transliteration: "āyātinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Signs", ur: "Our نشانیاں" } },
      { id: '6:157:31', arabic: "سُوٓءَ", transliteration: "sūa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) an evil", ur: "(ساتھ) an برا" } },
      { id: '6:157:32', arabic: "ٱلْعَذَابِ", transliteration: "l-ʿadhābi", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "punishment", ur: "عذاب" } },
      { id: '6:157:33', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because", ur: "because" } },
      { id: '6:157:34', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '6:157:35', arabic: "يَصْدِفُونَ", transliteration: "yaṣdifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "turn away", ur: "turn away" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'موصوف + صفت' },
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 26, to: 27, label: 'فعل + فاعل' },
        { from: 29, to: 30, label: 'جار + مجرور' }
      ],
    },
  },
  158: {
    text: "هَلْ يَنظُرُونَ إِلَّآ أَن تَأْتِيَهُمُ ٱلْمَلَـٰٓئِكَةُ أَوْ يَأْتِىَ رَبُّكَ أَوْ يَأْتِىَ بَعْضُ ءَايَـٰتِ رَبِّكَ ۗ يَوْمَ يَأْتِى بَعْضُ ءَايَـٰتِ رَبِّكَ لَا يَنفَعُ نَفْسًا إِيمَـٰنُهَا لَمْ تَكُنْ ءَامَنَتْ مِن قَبْلُ أَوْ كَسَبَتْ فِىٓ إِيمَـٰنِهَا خَيْرًۭا ۗ قُلِ ٱنتَظِرُوٓا۟ إِنَّا مُنتَظِرُونَ",
    translation: {
      en: "",
      ur: "یہ اس کے سوا اور کس بات کے منتظر ہیں کہ ان کے پاس فرشتے آئیں یا خود تمہارا پروردگار آئے یا تمہارے پروردگار کی کچھ نشانیاں آئیں (مگر) جس روز تمہارے پروردگار کی کچھ نشانیاں آ جائیں گی تو جو شخص پہلے ایمان نہیں لایا ہوگا اس وقت اسے ایمان لانا کچھ فائدہ نہیں دے گا یا اپنے ایمان (کی حالت) میں نیک عمل نہیں کئے ہوں گے (تو گناہوں سے توبہ کرنا مفید نہ ہوگا اے پیغمبر ان سے) کہہ دو کہ تم بھی انتظار کرو ہم بھی انتظار کرتے ہیں",
    },
    words: [
      { id: '6:158:1', arabic: "هَلْ", transliteration: "hal", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Are", ur: "Are" } },
      { id: '6:158:2', arabic: "يَنظُرُونَ", transliteration: "yanẓurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they waiting", ur: "وہ لوگ waiting" } },
      { id: '6:158:3', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:158:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '6:158:5', arabic: "تَأْتِيَهُمُ", transliteration: "tatiyahumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "comes to them", ur: "comes کو them" } },
      { id: '6:158:6', arabic: "ٱلْمَلَـٰٓئِكَةُ", transliteration: "l-malāikatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Angels", ur: "the Angels" } },
      { id: '6:158:7', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '6:158:8', arabic: "يَأْتِىَ", transliteration: "yatiya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "comes", ur: "comes" } },
      { id: '6:158:9', arabic: "رَبُّكَ", transliteration: "rabbuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '6:158:10', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '6:158:11', arabic: "يَأْتِىَ", transliteration: "yatiya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "comes", ur: "comes" } },
      { id: '6:158:12', arabic: "بَعْضُ", transliteration: "baʿḍu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "some (of)", ur: "some (of)" } },
      { id: '6:158:13', arabic: "ءَايَـٰتِ", transliteration: "āyāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Signs", ur: "(the) نشانیاں" } },
      { id: '6:158:14', arabic: "رَبِّكَ ۗ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) your Lord", ur: "(of) your رب" } },
      { id: '6:158:15', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(The) Day", ur: "(The) دن" } },
      { id: '6:158:16', arabic: "يَأْتِى", transliteration: "yatī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(when) comes", ur: "(when) comes" } },
      { id: '6:158:17', arabic: "بَعْضُ", transliteration: "baʿḍu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "some (of)", ur: "some (of)" } },
      { id: '6:158:18', arabic: "ءَايَـٰتِ", transliteration: "āyāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Signs", ur: "(the) نشانیاں" } },
      { id: '6:158:19', arabic: "رَبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) your Lord", ur: "(of) your رب" } },
      { id: '6:158:20', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:158:21', arabic: "يَنفَعُ", transliteration: "yanfaʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will benefit", ur: "will benefit" } },
      { id: '6:158:22', arabic: "نَفْسًا", transliteration: "nafsan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a soul", ur: "a روح" } },
      { id: '6:158:23', arabic: "إِيمَـٰنُهَا", transliteration: "īmānuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its faith", ur: "its faith" } },
      { id: '6:158:24', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '6:158:25', arabic: "تَكُنْ", transliteration: "takun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(if) it had", ur: "(if) it had" } },
      { id: '6:158:26', arabic: "ءَامَنَتْ", transliteration: "āmanat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '6:158:27', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:158:28', arabic: "قَبْلُ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '6:158:29', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '6:158:30', arabic: "كَسَبَتْ", transliteration: "kasabat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "earned", ur: "earned" } },
      { id: '6:158:31', arabic: "فِىٓ", transliteration: "fī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "through", ur: "through" } },
      { id: '6:158:32', arabic: "إِيمَـٰنِهَا", transliteration: "īmānihā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its faith", ur: "its faith" } },
      { id: '6:158:33', arabic: "خَيْرًۭا ۗ", transliteration: "khayran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any good", ur: "any اچھا" } },
      { id: '6:158:34', arabic: "قُلِ", transliteration: "quli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '6:158:35', arabic: "ٱنتَظِرُوٓا۟", transliteration: "intaẓirū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Wait", ur: "Wait" } },
      { id: '6:158:36', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, we", ur: "بیشک, ہم" } },
      { id: '6:158:37', arabic: "مُنتَظِرُونَ", transliteration: "muntaẓirūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) those who wait", ur: "(are) جو لوگ wait" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'نفی + فعل' },
        { from: 22, to: 23, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'نفی + فعل' },
        { from: 27, to: 28, label: 'جار + مجرور' },
        { from: 30, to: 31, label: 'فعل + فاعل' }
      ],
    },
  },
  159: {
    text: "إِنَّ ٱلَّذِينَ فَرَّقُوا۟ دِينَهُمْ وَكَانُوا۟ شِيَعًۭا لَّسْتَ مِنْهُمْ فِى شَىْءٍ ۚ إِنَّمَآ أَمْرُهُمْ إِلَى ٱللَّهِ ثُمَّ يُنَبِّئُهُم بِمَا كَانُوا۟ يَفْعَلُونَ",
    translation: {
      en: "",
      ur: "جن لوگوں نے اپنے دین میں (بہت سے) رستے نکالے اور کئی کئی فرقے ہو گئے ان سے تم کو کچھ کام نہیں ان کا کام خدا کے حوالے پھر جو کچھ وہ کرتے رہے ہیں وہ ان کو (سب) بتائے گا",
    },
    words: [
      { id: '6:159:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '6:159:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '6:159:3', arabic: "فَرَّقُوا۟", transliteration: "farraqū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "divide", ur: "divide" } },
      { id: '6:159:4', arabic: "دِينَهُمْ", transliteration: "dīnahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their religion", ur: "their religion" } },
      { id: '6:159:5', arabic: "وَكَانُوا۟", transliteration: "wakānū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and become", ur: "اور become" } },
      { id: '6:159:6', arabic: "شِيَعًۭا", transliteration: "shiyaʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sects", ur: "sects" } },
      { id: '6:159:7', arabic: "لَّسْتَ", transliteration: "lasta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are not", ur: "تم are نہیں" } },
      { id: '6:159:8', arabic: "مِنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '6:159:9', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '6:159:10', arabic: "شَىْءٍ ۚ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } },
      { id: '6:159:11', arabic: "إِنَّمَآ", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '6:159:12', arabic: "أَمْرُهُمْ", transliteration: "amruhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their affair", ur: "their affair" } },
      { id: '6:159:13', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) with", ur: "(is) ساتھ" } },
      { id: '6:159:14', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:159:15', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '6:159:16', arabic: "يُنَبِّئُهُم", transliteration: "yunabbi-uhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He will inform them", ur: "وہ will inform them" } },
      { id: '6:159:17', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '6:159:18', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '6:159:19', arabic: "يَفْعَلُونَ", transliteration: "yafʿalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "do", ur: "do" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  160: {
    text: "مَن جَآءَ بِٱلْحَسَنَةِ فَلَهُۥ عَشْرُ أَمْثَالِهَا ۖ وَمَن جَآءَ بِٱلسَّيِّئَةِ فَلَا يُجْزَىٰٓ إِلَّا مِثْلَهَا وَهُمْ لَا يُظْلَمُونَ",
    translation: {
      en: "",
      ur: "اور جو کوئی (خدا کے حضور) نیکی لے کر آئے گا اس کو ویسی دس نیکیاں ملیں گی اور جو برائی لائے گا اسے سزا ویسے ہی ملے گی اور ان پر ظلم نہیں کیا جائے گا",
    },
    words: [
      { id: '6:160:1', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "Whoever", ur: "Whoever" } },
      { id: '6:160:2', arabic: "جَآءَ", transliteration: "jāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came", ur: "came" } },
      { id: '6:160:3', arabic: "بِٱلْحَسَنَةِ", transliteration: "bil-ḥasanati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with a good deed", ur: "ساتھ a اچھا deed" } },
      { id: '6:160:4', arabic: "فَلَهُۥ", transliteration: "falahu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then for him", ur: "پھر for him" } },
      { id: '6:160:5', arabic: "عَشْرُ", transliteration: "ʿashru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) ten (times)", ur: "(is) ten (times)" } },
      { id: '6:160:6', arabic: "أَمْثَالِهَا ۖ", transliteration: "amthālihā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the like of it", ur: "the like of it" } },
      { id: '6:160:7', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '6:160:8', arabic: "جَآءَ", transliteration: "jāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came", ur: "came" } },
      { id: '6:160:9', arabic: "بِٱلسَّيِّئَةِ", transliteration: "bil-sayi-ati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with an evil deed", ur: "ساتھ an برا deed" } },
      { id: '6:160:10', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then not", ur: "پھر نہیں" } },
      { id: '6:160:11', arabic: "يُجْزَىٰٓ", transliteration: "yuj'zā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he will be recompensed", ur: "وہ will be recompensed" } },
      { id: '6:160:12', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:160:13', arabic: "مِثْلَهَا", transliteration: "mith'lahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the like of it", ur: "the like of it" } },
      { id: '6:160:14', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '6:160:15', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "will not", ur: "will نہیں" } },
      { id: '6:160:16', arabic: "يُظْلَمُونَ", transliteration: "yuẓ'lamūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(be) wronged", ur: "(be) wronged" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'نفی + فعل' }
      ],
    },
  },
  161: {
    text: "قُلْ إِنَّنِى هَدَىٰنِى رَبِّىٓ إِلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ دِينًۭا قِيَمًۭا مِّلَّةَ إِبْرَٰهِيمَ حَنِيفًۭا ۚ وَمَا كَانَ مِنَ ٱلْمُشْرِكِينَ",
    translation: {
      en: "",
      ur: "کہہ دو کہ مجھے میرے پروردگار نے سیدھا رستہ دکھا دیا ہے (یعنی دین صحیح) مذہب ابراہیم کا جو ایک (خدا) ہی کی طرف کے تھے اور مشرکوں میں سے نہ تھے",
    },
    words: [
      { id: '6:161:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '6:161:2', arabic: "إِنَّنِى", transliteration: "innanī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed (as for) me", ur: "بیشک (as for) me" } },
      { id: '6:161:3', arabic: "هَدَىٰنِى", transliteration: "hadānī", pos: ['N'], posLabel: 'N', root: "ه د ي", meaning: { en: "has guided me", ur: "has guided me" } },
      { id: '6:161:4', arabic: "رَبِّىٓ", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my Lord", ur: "my رب" } },
      { id: '6:161:5', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '6:161:6', arabic: "صِرَٰطٍۢ", transliteration: "ṣirāṭin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a path", ur: "a راستہ" } },
      { id: '6:161:7', arabic: "مُّسْتَقِيمٍۢ", transliteration: "mus'taqīmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "straight ", ur: "سیدھا " } },
      { id: '6:161:8', arabic: "دِينًۭا", transliteration: "dīnan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a religion", ur: "a religion" } },
      { id: '6:161:9', arabic: "قِيَمًۭا", transliteration: "qiyaman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "right", ur: "right" } },
      { id: '6:161:10', arabic: "مِّلَّةَ", transliteration: "millata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "religion", ur: "religion" } },
      { id: '6:161:11', arabic: "إِبْرَٰهِيمَ", transliteration: "ib'rāhīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Ibrahim ", ur: "(of) Ibrahim " } },
      { id: '6:161:12', arabic: "حَنِيفًۭا ۚ", transliteration: "ḥanīfan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a true monotheist", ur: "a true monotheist" } },
      { id: '6:161:13', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '6:161:14', arabic: "كَانَ", transliteration: "kāna", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "he was", ur: "وہ was" } },
      { id: '6:161:15', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '6:161:16', arabic: "ٱلْمُشْرِكِينَ", transliteration: "l-mush'rikīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the polytheists", ur: "the polytheists" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  162: {
    text: "قُلْ إِنَّ صَلَاتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "(یہ بھی) کہہ دو کہ میری نماز اور میری عبادت اور میرا جینا اور میرا مرنا سب خدائے رب العالمین ہی کے لیے ہے",
    },
    words: [
      { id: '6:162:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '6:162:2', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '6:162:3', arabic: "صَلَاتِى", transliteration: "ṣalātī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my prayer", ur: "my نماز" } },
      { id: '6:162:4', arabic: "وَنُسُكِى", transliteration: "wanusukī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and my rites of sacrifice", ur: "اور my rites of sacrifice" } },
      { id: '6:162:5', arabic: "وَمَحْيَاىَ", transliteration: "wamaḥyāya", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and my living", ur: "اور my living" } },
      { id: '6:162:6', arabic: "وَمَمَاتِى", transliteration: "wamamātī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and my dying", ur: "اور my dying" } },
      { id: '6:162:7', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(are) for Allah", ur: "(are) for اللہ" } },
      { id: '6:162:8', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Lord", ur: "رب" } },
      { id: '6:162:9', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  163: {
    text: "لَا شَرِيكَ لَهُۥ ۖ وَبِذَٰلِكَ أُمِرْتُ وَأَنَا۠ أَوَّلُ ٱلْمُسْلِمِينَ",
    translation: {
      en: "",
      ur: "جس کا کوئی شریک نہیں اور مجھ کو اسی بات کا حکم ملا ہے اور میں سب سے اول فرمانبردار ہوں",
    },
    words: [
      { id: '6:163:1', arabic: "لَا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "No", ur: "نہیں" } },
      { id: '6:163:2', arabic: "شَرِيكَ", transliteration: "sharīka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "partners", ur: "partners" } },
      { id: '6:163:3', arabic: "لَهُۥ ۖ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for Him", ur: "for Him" } },
      { id: '6:163:4', arabic: "وَبِذَٰلِكَ", transliteration: "wabidhālika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and with that", ur: "اور ساتھ وہ" } },
      { id: '6:163:5', arabic: "أُمِرْتُ", transliteration: "umir'tu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I have been commanded", ur: "میں have been commanded" } },
      { id: '6:163:6', arabic: "وَأَنَا۠", transliteration: "wa-anā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And I am", ur: "اور میں am" } },
      { id: '6:163:7', arabic: "أَوَّلُ", transliteration: "awwalu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) first", ur: "(the) first" } },
      { id: '6:163:8', arabic: "ٱلْمُسْلِمِينَ", transliteration: "l-mus'limīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the ones who surrender (to Him)", ur: "(of) the ones جو surrender (کو Him)" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  164: {
    text: "قُلْ أَغَيْرَ ٱللَّهِ أَبْغِى رَبًّۭا وَهُوَ رَبُّ كُلِّ شَىْءٍۢ ۚ وَلَا تَكْسِبُ كُلُّ نَفْسٍ إِلَّا عَلَيْهَا ۚ وَلَا تَزِرُ وَازِرَةٌۭ وِزْرَ أُخْرَىٰ ۚ ثُمَّ إِلَىٰ رَبِّكُم مَّرْجِعُكُمْ فَيُنَبِّئُكُم بِمَا كُنتُمْ فِيهِ تَخْتَلِفُونَ",
    translation: {
      en: "",
      ur: "کہو کیا میں خدا کے سوا اور پروردگار تلاش کروں اور وہی تو ہر چیز کا مالک ہے اور جو کوئی (برا) کام کرتا ہے تو اس کا ضرر اسی کو ہوتا ہے اور کوئی شخص کسی (کے گناہ) کا بوجھ نہیں اٹھائے گا پھر تم سب کو اپنے پروردگار کی طرف لوٹ کا جانا ہے تو جن جن باتوں میں تم اختلاف کیا کرتے تھے وہ تم کو بتائے گا",
    },
    words: [
      { id: '6:164:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '6:164:2', arabic: "أَغَيْرَ", transliteration: "aghayra", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is (it) other than", ur: "Is (it) other than" } },
      { id: '6:164:3', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '6:164:4', arabic: "أَبْغِى", transliteration: "abghī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I (should) seek", ur: "میں (should) seek" } },
      { id: '6:164:5', arabic: "رَبًّۭا", transliteration: "rabban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a Lord", ur: "(as) a رب" } },
      { id: '6:164:6', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while He", ur: "while وہ" } },
      { id: '6:164:7', arabic: "رَبُّ", transliteration: "rabbu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the Lord", ur: "(is) the رب" } },
      { id: '6:164:8', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) every", ur: "(of) ہر" } },
      { id: '6:164:9', arabic: "شَىْءٍۢ ۚ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '6:164:10', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '6:164:11', arabic: "تَكْسِبُ", transliteration: "taksibu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "earns", ur: "earns" } },
      { id: '6:164:12', arabic: "كُلُّ", transliteration: "kullu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '6:164:13', arabic: "نَفْسٍ", transliteration: "nafsin", pos: ['V'], posLabel: 'V', root: "ن ف س", meaning: { en: "soul", ur: "روح" } },
      { id: '6:164:14', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '6:164:15', arabic: "عَلَيْهَا ۚ", transliteration: "ʿalayhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against itself", ur: "against itself" } },
      { id: '6:164:16', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '6:164:17', arabic: "تَزِرُ", transliteration: "taziru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "bears", ur: "bears" } },
      { id: '6:164:18', arabic: "وَازِرَةٌۭ", transliteration: "wāziratun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "any bearer of burden", ur: "any bearer of burden" } },
      { id: '6:164:19', arabic: "وِزْرَ", transliteration: "wiz'ra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "burden", ur: "burden" } },
      { id: '6:164:20', arabic: "أُخْرَىٰ ۚ", transliteration: "ukh'rā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) another", ur: "(of) another" } },
      { id: '6:164:21', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '6:164:22', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '6:164:23', arabic: "رَبِّكُم", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '6:164:24', arabic: "مَّرْجِعُكُمْ", transliteration: "marjiʿukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) your return", ur: "(is) your return" } },
      { id: '6:164:25', arabic: "فَيُنَبِّئُكُم", transliteration: "fayunabbi-ukum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then He will inform you", ur: "پھر وہ will inform تم" } },
      { id: '6:164:26', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "about what", ur: "about کیا" } },
      { id: '6:164:27', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you were", ur: "تم were" } },
      { id: '6:164:28', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "concerning it", ur: "concerning it" } },
      { id: '6:164:29', arabic: "تَخْتَلِفُونَ", transliteration: "takhtalifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "differing", ur: "differing" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 27, to: 28, label: 'فعل + فاعل' }
      ],
    },
  },
  165: {
    text: "وَهُوَ ٱلَّذِى جَعَلَكُمْ خَلَـٰٓئِفَ ٱلْأَرْضِ وَرَفَعَ بَعْضَكُمْ فَوْقَ بَعْضٍۢ دَرَجَـٰتٍۢ لِّيَبْلُوَكُمْ فِى مَآ ءَاتَىٰكُمْ ۗ إِنَّ رَبَّكَ سَرِيعُ ٱلْعِقَابِ وَإِنَّهُۥ لَغَفُورٌۭ رَّحِيمٌۢ",
    translation: {
      en: "",
      ur: "اور وہی تو ہے جس نے زمین میں تم کو اپنا نائب بنایا اور ایک کے دوسرے پر درجے بلند کئے تاکہ جو کچھ اس نے تمہیں بخشا ہے اس میں تمہاری آزمائش ہے بےشک تمہارا پروردگار جلد عذاب دینے والا ہے اور بےشک وہ بخشنے والا مہربان بھی ہے",
    },
    words: [
      { id: '6:165:1', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '6:165:2', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '6:165:3', arabic: "جَعَلَكُمْ", transliteration: "jaʿalakum", pos: ['N'], posLabel: 'N', root: "ج ع ل", meaning: { en: "(has) made you", ur: "(has) made تم" } },
      { id: '6:165:4', arabic: "خَلَـٰٓئِفَ", transliteration: "khalāifa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "successors", ur: "successors" } },
      { id: '6:165:5', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "(of) the earth", ur: "(of) زمین" } },
      { id: '6:165:6', arabic: "وَرَفَعَ", transliteration: "warafaʿa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and raised", ur: "اور raised" } },
      { id: '6:165:7', arabic: "بَعْضَكُمْ", transliteration: "baʿḍakum", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "some of you", ur: "some of تم" } },
      { id: '6:165:8', arabic: "فَوْقَ", transliteration: "fawqa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "above", ur: "above" } },
      { id: '6:165:9', arabic: "بَعْضٍۢ", transliteration: "baʿḍin", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "others", ur: "others" } },
      { id: '6:165:10', arabic: "دَرَجَـٰتٍۢ", transliteration: "darajātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) ranks", ur: "(میں) ranks" } },
      { id: '6:165:11', arabic: "لِّيَبْلُوَكُمْ", transliteration: "liyabluwakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that He may test you", ur: "so وہ وہ may test تم" } },
      { id: '6:165:12', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '6:165:13', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '6:165:14', arabic: "ءَاتَىٰكُمْ ۗ", transliteration: "ātākum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He has given you", ur: "وہ has given تم" } },
      { id: '6:165:15', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '6:165:16', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '6:165:17', arabic: "سَرِيعُ", transliteration: "sarīʿu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) swift", ur: "(is) swift" } },
      { id: '6:165:18', arabic: "ٱلْعِقَابِ", transliteration: "l-ʿiqābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) the punishment", ur: "(میں) the عذاب" } },
      { id: '6:165:19', arabic: "وَإِنَّهُۥ", transliteration: "wa-innahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and indeed, He (is)", ur: "اور بیشک, وہ (is)" } },
      { id: '6:165:20', arabic: "لَغَفُورٌۭ", transliteration: "laghafūrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "[certainly], Oft-Forgiving", ur: "[certainly], Oft-Forgiving" } },
      { id: '6:165:21', arabic: "رَّحِيمٌۢ", transliteration: "raḥīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
};

export const TREEBANK_DATA = SURAH_6_TREEBANK;
export default SURAH_6_TREEBANK;
