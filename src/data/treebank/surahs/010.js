/**
 * Surah Yunus (10) - Complete Treebank Data (Ayahs 1-109)
 * Jonah - 109 Ayahs total
 *
 * Theme: Quran as guidance, stories of prophets, resurrection, divine decree
 * Revelation: Makki
 */

const SURAH_10_TREEBANK = {
  1: {
    text: 'الر تِلْكَ آيَاتُ الْكِتَابِ الْحَكِيمِ',
    translation: {
      en: 'Alif, Lam, Ra. These are the verses of the wise Book.',
      ur: 'الف، لام، را۔ یہ حکمت والی کتاب کی آیات ہیں۔'
    },
    words: [
      { id: '10:1:1', arabic: 'الر', transliteration: 'Alif-Lam-Ra', pos: ['INIT'], posLabel: 'INIT', root: null, meaning: { en: 'Alif Lam Ra', ur: 'الف لام را' } },
      { id: '10:1:2', arabic: 'تِلْكَ', transliteration: 'tilka', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'These are', ur: 'یہ ہیں' } },
      { id: '10:1:3', arabic: 'آيَاتُ', transliteration: 'ayatu', pos: ['N'], posLabel: 'N', root: 'أ ي ي', meaning: { en: 'the verses of', ur: 'آیات' } },
      { id: '10:1:4', arabic: 'الْكِتَابِ', transliteration: 'al-kitabi', pos: ['N'], posLabel: 'N', root: 'ك ت ب', meaning: { en: 'the Book', ur: 'کتاب کی' } },
      { id: '10:1:5', arabic: 'الْحَكِيمِ', transliteration: 'al-hakim', pos: ['ADJ'], posLabel: 'ADJ', root: 'ح ك م', meaning: { en: 'the wise', ur: 'حکمت والی' } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
  },
  2: {
    text: 'أَكَانَ لِلنَّاسِ عَجَبًا أَنْ أَوْحَيْنَا إِلَىٰ رَجُلٍ مِّنْهُمْ أَنْ أَنذِرِ النَّاسَ وَبَشِّرِ الَّذِينَ آمَنُوا أَنَّ لَهُمْ قَدَمَ صِدْقٍ عِندَ رَبِّهِمْ قَالَ الْكَافِرُونَ إِنَّ هَٰذَا لَسَاحِرٌ مُّبِينٌ',
    translation: {
      en: 'Is it a wonder for people that We have revealed to a man from among them to warn mankind and to give good tidings to those who believe that they will have a [firm] precedence of honor with their Lord? The disbelievers say, "Indeed, this is an obvious magician."',
      ur: 'کیا لوگوں کے لیے عجیب بات ہے کہ ہم نے انہی میں سے ایک آدمی کو وحی کی کہ لوگوں کو ڈراؤ اور ایمان والوں کو بشارت دو کہ ان کے لیے ان کے رب کے پاس سچائی کا بلند درجہ ہے۔ کافروں نے کہا یہ تو کھلا جادوگر ہے۔'
    },
    words: [
      { id: '10:2:1', arabic: 'أَكَانَ', transliteration: 'a-kana', pos: ['INTG', 'V'], posLabel: 'INTG+V', root: 'ك و ن', meaning: { en: 'Is it', ur: 'کیا ہے' } },
      { id: '10:2:2', arabic: 'لِلنَّاسِ', transliteration: 'lin-nasi', pos: ['P', 'N'], posLabel: 'P+N', root: 'ن و س', meaning: { en: 'for people', ur: 'لوگوں کے لیے' } },
      { id: '10:2:3', arabic: 'عَجَبًا', transliteration: '\'ajaban', pos: ['N'], posLabel: 'N', root: 'ع ج ب', meaning: { en: 'a wonder', ur: 'عجیب' } },
      { id: '10:2:4', arabic: 'أَنْ', transliteration: 'an', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '10:2:5', arabic: 'أَوْحَيْنَا', transliteration: 'awhayna', pos: ['V'], posLabel: 'V', root: 'و ح ي', meaning: { en: 'We have revealed', ur: 'ہم نے وحی کی' } },
      { id: '10:2:6', arabic: 'إِلَىٰ', transliteration: 'ila', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کی طرف' } },
      { id: '10:2:7', arabic: 'رَجُلٍ', transliteration: 'rajulin', pos: ['N'], posLabel: 'N', root: 'ر ج ل', meaning: { en: 'a man', ur: 'ایک آدمی' } },
      { id: '10:2:8', arabic: 'مِّنْهُمْ', transliteration: 'minhum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'from among them', ur: 'انہی میں سے' } },
      { id: '10:2:9', arabic: 'أَنْ', transliteration: 'an', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '10:2:10', arabic: 'أَنذِرِ', transliteration: 'andhir', pos: ['V'], posLabel: 'V', root: 'ن ذ ر', meaning: { en: 'warn', ur: 'ڈراؤ' } },
      { id: '10:2:11', arabic: 'النَّاسَ', transliteration: 'an-nasa', pos: ['N'], posLabel: 'N', root: 'ن و س', meaning: { en: 'mankind', ur: 'لوگوں کو' } },
      { id: '10:2:12', arabic: 'وَبَشِّرِ', transliteration: 'wa-bashshir', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ب ش ر', meaning: { en: 'and give good tidings', ur: 'اور بشارت دو' } },
      { id: '10:2:13', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'to those who', ur: 'جنہوں نے' } },
      { id: '10:2:14', arabic: 'آمَنُوا', transliteration: 'amanu', pos: ['V'], posLabel: 'V', root: 'أ م ن', meaning: { en: 'believe', ur: 'ایمان لائے' } },
      { id: '10:2:15', arabic: 'أَنَّ', transliteration: 'anna', pos: ['ACC'], posLabel: 'ACC', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '10:2:16', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'for them', ur: 'ان کے لیے' } },
      { id: '10:2:17', arabic: 'قَدَمَ', transliteration: 'qadama', pos: ['N'], posLabel: 'N', root: 'ق د م', meaning: { en: 'a precedence of', ur: 'درجہ' } },
      { id: '10:2:18', arabic: 'صِدْقٍ', transliteration: 'sidqin', pos: ['N'], posLabel: 'N', root: 'ص د ق', meaning: { en: 'honor/truth', ur: 'سچائی کا' } },
      { id: '10:2:19', arabic: 'عِندَ', transliteration: '\'inda', pos: ['N'], posLabel: 'N', root: 'ع ن د', meaning: { en: 'with', ur: 'پاس' } },
      { id: '10:2:20', arabic: 'رَبِّهِمْ', transliteration: 'rabbihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'their Lord', ur: 'ان کے رب کے' } },
      { id: '10:2:21', arabic: 'قَالَ', transliteration: 'qala', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'say', ur: 'کہا' } },
      { id: '10:2:22', arabic: 'الْكَافِرُونَ', transliteration: 'al-kafirun', pos: ['N'], posLabel: 'N', root: 'ك ف ر', meaning: { en: 'The disbelievers', ur: 'کافروں نے' } },
      { id: '10:2:23', arabic: 'إِنَّ', transliteration: 'inna', pos: ['ACC'], posLabel: 'ACC', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '10:2:24', arabic: 'هَٰذَا', transliteration: 'hadha', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'this', ur: 'یہ' } },
      { id: '10:2:25', arabic: 'لَسَاحِرٌ', transliteration: 'la-sahirun', pos: ['EMPH', 'N'], posLabel: 'EMPH+N', root: 'س ح ر', meaning: { en: 'is a magician', ur: 'جادوگر ہے' } },
      { id: '10:2:26', arabic: 'مُّبِينٌ', transliteration: 'mubinun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ب ي ن', meaning: { en: 'obvious', ur: 'کھلا' } }
    ],
    structure: {
      relationships: [
        { from: 13, to: 14, label: 'موصول + صلة' },
      ],
    },
  },
  3: {
    text: 'إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ يُدَبِّرُ الْأَمْرَ مَا مِن شَفِيعٍ إِلَّا مِن بَعْدِ إِذْنِهِ ذَٰلِكُمُ اللَّهُ رَبُّكُمْ فَاعْبُدُوهُ أَفَلَا تَذَكَّرُونَ',
    translation: {
      en: 'Indeed, your Lord is Allah, who created the heavens and the earth in six days and then established Himself above the Throne, arranging the matter. There is no intercessor except after His permission. That is Allah, your Lord, so worship Him. Then will you not remember?',
      ur: 'بےشک تمہارا رب اللہ ہے جس نے آسمانوں اور زمین کو چھ دنوں میں پیدا کیا، پھر عرش پر قائم ہوا، ہر کام کی تدبیر کرتا ہے۔ کوئی سفارشی نہیں مگر اس کی اجازت کے بعد۔ یہی اللہ تمہارا رب ہے، پس اس کی عبادت کرو۔ کیا تم نصیحت نہیں پکڑتے؟'
    },
    words: [
      { id: '10:3:1', arabic: 'إِنَّ', transliteration: 'inna', pos: ['ACC'], posLabel: 'ACC', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '10:3:2', arabic: 'رَبَّكُمُ', transliteration: 'rabbakumu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'your Lord', ur: 'تمہارا رب' } },
      { id: '10:3:3', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'is Allah', ur: 'اللہ ہے' } },
      { id: '10:3:4', arabic: 'الَّذِي', transliteration: 'alladhi', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'Who', ur: 'جس نے' } },
      { id: '10:3:5', arabic: 'خَلَقَ', transliteration: 'khalaqa', pos: ['V'], posLabel: 'V', root: 'خ ل ق', meaning: { en: 'created', ur: 'پیدا کیا' } },
      { id: '10:3:6', arabic: 'السَّمَاوَاتِ', transliteration: 'as-samawati', pos: ['N'], posLabel: 'N', root: 'س م و', meaning: { en: 'the heavens', ur: 'آسمانوں کو' } },
      { id: '10:3:7', arabic: 'وَالْأَرْضَ', transliteration: 'wal-arda', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'أ ر ض', meaning: { en: 'and the earth', ur: 'اور زمین کو' } },
      { id: '10:3:8', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '10:3:9', arabic: 'سِتَّةِ', transliteration: 'sittati', pos: ['N'], posLabel: 'N', root: 'س ت ت', meaning: { en: 'six', ur: 'چھ' } },
      { id: '10:3:10', arabic: 'أَيَّامٍ', transliteration: 'ayyamin', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: 'days', ur: 'دنوں' } },
      { id: '10:3:11', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '10:3:12', arabic: 'اسْتَوَىٰ', transliteration: 'istawa', pos: ['V'], posLabel: 'V', root: 'س و ي', meaning: { en: 'established Himself', ur: 'قائم ہوا' } },
      { id: '10:3:13', arabic: 'عَلَى', transliteration: '\'ala', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'above', ur: 'پر' } },
      { id: '10:3:14', arabic: 'الْعَرْشِ', transliteration: 'al-\'arshi', pos: ['N'], posLabel: 'N', root: 'ع ر ش', meaning: { en: 'the Throne', ur: 'عرش' } },
      { id: '10:3:15', arabic: 'يُدَبِّرُ', transliteration: 'yudabbiru', pos: ['V'], posLabel: 'V', root: 'د ب ر', meaning: { en: 'arranging', ur: 'تدبیر کرتا ہے' } },
      { id: '10:3:16', arabic: 'الْأَمْرَ', transliteration: 'al-amra', pos: ['N'], posLabel: 'N', root: 'أ م ر', meaning: { en: 'the matter', ur: 'ہر کام کی' } },
      { id: '10:3:17', arabic: 'مَا', transliteration: 'ma', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '10:3:18', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'any', ur: 'کوئی' } },
      { id: '10:3:19', arabic: 'شَفِيعٍ', transliteration: 'shafi\'in', pos: ['N'], posLabel: 'N', root: 'ش ف ع', meaning: { en: 'intercessor', ur: 'سفارشی' } },
      { id: '10:3:20', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except', ur: 'مگر' } },
      { id: '10:3:21', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'after', ur: 'کے بعد' } },
      { id: '10:3:22', arabic: 'بَعْدِ', transliteration: 'ba\'di', pos: ['N'], posLabel: 'N', root: 'ب ع د', meaning: { en: 'after', ur: 'بعد' } },
      { id: '10:3:23', arabic: 'إِذْنِهِ', transliteration: 'idhnihi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'أ ذ ن', meaning: { en: 'His permission', ur: 'اس کی اجازت' } },
      { id: '10:3:24', arabic: 'ذَٰلِكُمُ', transliteration: 'dhalikum', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'That is', ur: 'یہی' } },
      { id: '10:3:25', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ ہے' } },
      { id: '10:3:26', arabic: 'رَبُّكُمْ', transliteration: 'rabbukum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'your Lord', ur: 'تمہارا رب' } },
      { id: '10:3:27', arabic: 'فَاعْبُدُوهُ', transliteration: 'fa-\'buduhu', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ع ب د', meaning: { en: 'so worship Him', ur: 'پس اس کی عبادت کرو' } },
      { id: '10:3:28', arabic: 'أَفَلَا', transliteration: 'a-fa-la', pos: ['INTG', 'CONJ', 'NEG'], posLabel: 'INTG+CONJ+NEG', root: null, meaning: { en: 'Then will you not', ur: 'کیا تم نہیں' } },
      { id: '10:3:29', arabic: 'تَذَكَّرُونَ', transliteration: 'tadhakkarun', pos: ['V'], posLabel: 'V', root: 'ذ ك ر', meaning: { en: 'remember', ur: 'نصیحت پکڑتے' } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
      ],
    },
  },
  4: {
    text: 'إِلَيْهِ مَرْجِعُكُمْ جَمِيعًا وَعْدَ اللَّهِ حَقًّا إِنَّهُ يَبْدَأُ الْخَلْقَ ثُمَّ يُعِيدُهُ لِيَجْزِيَ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ بِالْقِسْطِ وَالَّذِينَ كَفَرُوا لَهُمْ شَرَابٌ مِّنْ حَمِيمٍ وَعَذَابٌ أَلِيمٌ بِمَا كَانُوا يَكْفُرُونَ',
    translation: {
      en: 'To Him is your return all together. [It is] the promise of Allah [which is] truth. Indeed, He begins creation and then repeats it that He may reward those who have believed and done righteous deeds in justice. But those who disbelieved will have a drink of scalding water and a painful punishment for what they used to deny.',
      ur: 'اسی کی طرف تم سب کو لوٹنا ہے۔ اللہ کا وعدہ سچا ہے۔ بےشک وہ پہلی بار پیدا کرتا ہے پھر دوبارہ پیدا کرے گا تاکہ ایمان لانے والوں اور نیک عمل کرنے والوں کو انصاف سے بدلہ دے۔ اور جنہوں نے کفر کیا ان کے لیے کھولتا پانی ہے اور دردناک عذاب، اس وجہ سے جو وہ انکار کرتے تھے۔'
    },
    words: [
      { id: '10:4:1', arabic: 'إِلَيْهِ', transliteration: 'ilayhi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'To Him', ur: 'اسی کی طرف' } },
      { id: '10:4:2', arabic: 'مَرْجِعُكُمْ', transliteration: 'marji\'ukum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ج ع', meaning: { en: 'is your return', ur: 'تمہارا لوٹنا ہے' } },
      { id: '10:4:3', arabic: 'جَمِيعًا', transliteration: 'jami\'an', pos: ['N'], posLabel: 'N', root: 'ج م ع', meaning: { en: 'all together', ur: 'سب' } },
      { id: '10:4:4', arabic: 'وَعْدَ', transliteration: 'wa\'da', pos: ['N'], posLabel: 'N', root: 'و ع د', meaning: { en: 'the promise of', ur: 'وعدہ' } },
      { id: '10:4:5', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کا' } },
      { id: '10:4:6', arabic: 'حَقًّا', transliteration: 'haqqan', pos: ['N'], posLabel: 'N', root: 'ح ق ق', meaning: { en: 'in truth', ur: 'سچا' } },
      { id: '10:4:7', arabic: 'إِنَّهُ', transliteration: 'innahu', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'Indeed He', ur: 'بےشک وہ' } },
      { id: '10:4:8', arabic: 'يَبْدَأُ', transliteration: 'yabda\'u', pos: ['V'], posLabel: 'V', root: 'ب د أ', meaning: { en: 'begins', ur: 'شروع کرتا ہے' } },
      { id: '10:4:9', arabic: 'الْخَلْقَ', transliteration: 'al-khalqa', pos: ['N'], posLabel: 'N', root: 'خ ل ق', meaning: { en: 'the creation', ur: 'تخلیق' } },
      { id: '10:4:10', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '10:4:11', arabic: 'يُعِيدُهُ', transliteration: 'yu\'iduhu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ع و د', meaning: { en: 'repeats it', ur: 'اسے دوبارہ کرتا ہے' } },
      { id: '10:4:12', arabic: 'لِيَجْزِيَ', transliteration: 'li-yajziya', pos: ['P', 'V'], posLabel: 'P+V', root: 'ج ز ي', meaning: { en: 'that He may reward', ur: 'تاکہ بدلہ دے' } },
      { id: '10:4:13', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جنہوں نے' } },
      { id: '10:4:14', arabic: 'آمَنُوا', transliteration: 'amanu', pos: ['V'], posLabel: 'V', root: 'أ م ن', meaning: { en: 'believe', ur: 'ایمان لائے' } },
      { id: '10:4:15', arabic: 'وَعَمِلُوا', transliteration: 'wa-\'amilu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ع م ل', meaning: { en: 'and did', ur: 'اور کیے' } },
      { id: '10:4:16', arabic: 'الصَّالِحَاتِ', transliteration: 'as-salihati', pos: ['N'], posLabel: 'N', root: 'ص ل ح', meaning: { en: 'righteous deeds', ur: 'نیک عمل' } },
      { id: '10:4:17', arabic: 'بِالْقِسْطِ', transliteration: 'bil-qisti', pos: ['P', 'N'], posLabel: 'P+N', root: 'ق س ط', meaning: { en: 'in justice', ur: 'انصاف سے' } },
      { id: '10:4:18', arabic: 'وَالَّذِينَ', transliteration: 'walladhina', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'But those who', ur: 'اور جنہوں نے' } },
      { id: '10:4:19', arabic: 'كَفَرُوا', transliteration: 'kafaru', pos: ['V'], posLabel: 'V', root: 'ك ف ر', meaning: { en: 'disbelieved', ur: 'کفر کیا' } },
      { id: '10:4:20', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'for them', ur: 'ان کے لیے' } },
      { id: '10:4:21', arabic: 'شَرَابٌ', transliteration: 'sharabun', pos: ['N'], posLabel: 'N', root: 'ش ر ب', meaning: { en: 'a drink', ur: 'پانی' } },
      { id: '10:4:22', arabic: 'مِّنْ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'سے' } },
      { id: '10:4:23', arabic: 'حَمِيمٍ', transliteration: 'hamimin', pos: ['N'], posLabel: 'N', root: 'ح م م', meaning: { en: 'scalding water', ur: 'کھولتا' } },
      { id: '10:4:24', arabic: 'وَعَذَابٌ', transliteration: 'wa-\'adhabun', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ع ذ ب', meaning: { en: 'and a punishment', ur: 'اور عذاب' } },
      { id: '10:4:25', arabic: 'أَلِيمٌ', transliteration: 'alimun', pos: ['ADJ'], posLabel: 'ADJ', root: 'أ ل م', meaning: { en: 'painful', ur: 'دردناک' } },
      { id: '10:4:26', arabic: 'بِمَا', transliteration: 'bi-ma', pos: ['P', 'REL'], posLabel: 'P+REL', root: null, meaning: { en: 'for what', ur: 'اس وجہ سے' } },
      { id: '10:4:27', arabic: 'كَانُوا', transliteration: 'kanu', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'they used to', ur: 'وہ تھے' } },
      { id: '10:4:28', arabic: 'يَكْفُرُونَ', transliteration: 'yakfurun', pos: ['V'], posLabel: 'V', root: 'ك ف ر', meaning: { en: 'deny', ur: 'انکار کرتے' } }
    ],
    structure: {
      relationships: [
        { from: 13, to: 14, label: 'موصول + صلة' },
        { from: 18, to: 19, label: 'موصول + صلة' },
        { from: 26, to: 27, label: 'موصول + صلة' },
      ],
    },
  },
  5: {
    text: 'هُوَ الَّذِي جَعَلَ الشَّمْسَ ضِيَاءً وَالْقَمَرَ نُورًا وَقَدَّرَهُ مَنَازِلَ لِتَعْلَمُوا عَدَدَ السِّنِينَ وَالْحِسَابَ مَا خَلَقَ اللَّهُ ذَٰلِكَ إِلَّا بِالْحَقِّ يُفَصِّلُ الْآيَاتِ لِقَوْمٍ يَعْلَمُونَ',
    translation: {
      en: 'It is He who made the sun a shining light and the moon a derived light and determined for it phases - that you may know the number of years and the calculation. Allah has not created this except in truth. He details the signs for a people who know.',
      ur: 'وہی ہے جس نے سورج کو روشن بنایا اور چاند کو چمکدار اور اس کی منزلیں مقرر کیں تاکہ تم سالوں کی گنتی اور حساب جانو۔ اللہ نے یہ سب حق کے ساتھ پیدا کیا ہے۔ وہ نشانیاں کھول کر بیان کرتا ہے ان لوگوں کے لیے جو جانتے ہیں۔'
    },
    words: [
      { id: '10:5:1', arabic: 'هُوَ', transliteration: 'huwa', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'He', ur: 'وہی' } },
      { id: '10:5:2', arabic: 'الَّذِي', transliteration: 'alladhi', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'Who', ur: 'جس نے' } },
      { id: '10:5:3', arabic: 'جَعَلَ', transliteration: 'ja\'ala', pos: ['V'], posLabel: 'V', root: 'ج ع ل', meaning: { en: 'made', ur: 'بنایا' } },
      { id: '10:5:4', arabic: 'الشَّمْسَ', transliteration: 'ash-shamsa', pos: ['N'], posLabel: 'N', root: 'ش م س', meaning: { en: 'the sun', ur: 'سورج کو' } },
      { id: '10:5:5', arabic: 'ضِيَاءً', transliteration: 'diya\'an', pos: ['N'], posLabel: 'N', root: 'ض و أ', meaning: { en: 'a shining light', ur: 'روشن' } },
      { id: '10:5:6', arabic: 'وَالْقَمَرَ', transliteration: 'wal-qamara', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ق م ر', meaning: { en: 'and the moon', ur: 'اور چاند کو' } },
      { id: '10:5:7', arabic: 'نُورًا', transliteration: 'nuran', pos: ['N'], posLabel: 'N', root: 'ن و ر', meaning: { en: 'a derived light', ur: 'چمکدار' } },
      { id: '10:5:8', arabic: 'وَقَدَّرَهُ', transliteration: 'wa-qaddarahu', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ق د ر', meaning: { en: 'and determined for it', ur: 'اور اس کی مقرر کی' } },
      { id: '10:5:9', arabic: 'مَنَازِلَ', transliteration: 'manazila', pos: ['N'], posLabel: 'N', root: 'ن ز ل', meaning: { en: 'phases', ur: 'منزلیں' } },
      { id: '10:5:10', arabic: 'لِتَعْلَمُوا', transliteration: 'li-ta\'lamu', pos: ['P', 'V'], posLabel: 'P+V', root: 'ع ل م', meaning: { en: 'that you may know', ur: 'تاکہ تم جانو' } },
      { id: '10:5:11', arabic: 'عَدَدَ', transliteration: '\'adada', pos: ['N'], posLabel: 'N', root: 'ع د د', meaning: { en: 'the number of', ur: 'گنتی' } },
      { id: '10:5:12', arabic: 'السِّنِينَ', transliteration: 'as-sinin', pos: ['N'], posLabel: 'N', root: 'س ن و', meaning: { en: 'the years', ur: 'سالوں کی' } },
      { id: '10:5:13', arabic: 'وَالْحِسَابَ', transliteration: 'wal-hisaba', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ح س ب', meaning: { en: 'and the calculation', ur: 'اور حساب' } },
      { id: '10:5:14', arabic: 'مَا', transliteration: 'ma', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '10:5:15', arabic: 'خَلَقَ', transliteration: 'khalaqa', pos: ['V'], posLabel: 'V', root: 'خ ل ق', meaning: { en: 'created', ur: 'پیدا کیا' } },
      { id: '10:5:16', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ نے' } },
      { id: '10:5:17', arabic: 'ذَٰلِكَ', transliteration: 'dhalika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'this', ur: 'یہ سب' } },
      { id: '10:5:18', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except', ur: 'مگر' } },
      { id: '10:5:19', arabic: 'بِالْحَقِّ', transliteration: 'bil-haqqi', pos: ['P', 'N'], posLabel: 'P+N', root: 'ح ق ق', meaning: { en: 'in truth', ur: 'حق کے ساتھ' } },
      { id: '10:5:20', arabic: 'يُفَصِّلُ', transliteration: 'yufassilu', pos: ['V'], posLabel: 'V', root: 'ف ص ل', meaning: { en: 'He details', ur: 'وہ کھول کر بیان کرتا ہے' } },
      { id: '10:5:21', arabic: 'الْآيَاتِ', transliteration: 'al-ayati', pos: ['N'], posLabel: 'N', root: 'أ ي ي', meaning: { en: 'the signs', ur: 'نشانیاں' } },
      { id: '10:5:22', arabic: 'لِقَوْمٍ', transliteration: 'li-qawmin', pos: ['P', 'N'], posLabel: 'P+N', root: 'ق و م', meaning: { en: 'for a people', ur: 'ان لوگوں کے لیے' } },
      { id: '10:5:23', arabic: 'يَعْلَمُونَ', transliteration: 'ya\'lamun', pos: ['V'], posLabel: 'V', root: 'ع ل م', meaning: { en: 'who know', ur: 'جو جانتے ہیں' } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
      ],
    },
  },
  6: {
    text: 'إِنَّ فِي اخْتِلَافِ اللَّيْلِ وَالنَّهَارِ وَمَا خَلَقَ اللَّهُ فِي السَّمَاوَاتِ وَالْأَرْضِ لَآيَاتٍ لِّقَوْمٍ يَتَّقُونَ',
    translation: {
      en: 'Indeed, in the alternation of the night and the day and what Allah has created in the heavens and the earth are signs for a people who fear Allah.',
      ur: 'بےشک رات اور دن کی تبدیلی میں اور جو کچھ اللہ نے آسمانوں اور زمین میں پیدا کیا ہے، اس میں ان لوگوں کے لیے نشانیاں ہیں جو تقویٰ اختیار کرتے ہیں۔'
    },
    words: [
      { id: '10:6:1', arabic: 'إِنَّ', transliteration: 'inna', pos: ['ACC'], posLabel: 'ACC', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '10:6:2', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '10:6:3', arabic: 'اخْتِلَافِ', transliteration: 'ikhtilafi', pos: ['N'], posLabel: 'N', root: 'خ ل ف', meaning: { en: 'the alternation of', ur: 'تبدیلی' } },
      { id: '10:6:4', arabic: 'اللَّيْلِ', transliteration: 'al-layli', pos: ['N'], posLabel: 'N', root: 'ل ي ل', meaning: { en: 'the night', ur: 'رات کی' } },
      { id: '10:6:5', arabic: 'وَالنَّهَارِ', transliteration: 'wan-nahari', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ن ه ر', meaning: { en: 'and the day', ur: 'اور دن کی' } },
      { id: '10:6:6', arabic: 'وَمَا', transliteration: 'wa-ma', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'and what', ur: 'اور جو کچھ' } },
      { id: '10:6:7', arabic: 'خَلَقَ', transliteration: 'khalaqa', pos: ['V'], posLabel: 'V', root: 'خ ل ق', meaning: { en: 'has created', ur: 'پیدا کیا' } },
      { id: '10:6:8', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ نے' } },
      { id: '10:6:9', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '10:6:10', arabic: 'السَّمَاوَاتِ', transliteration: 'as-samawati', pos: ['N'], posLabel: 'N', root: 'س م و', meaning: { en: 'the heavens', ur: 'آسمانوں' } },
      { id: '10:6:11', arabic: 'وَالْأَرْضِ', transliteration: 'wal-ardi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'أ ر ض', meaning: { en: 'and the earth', ur: 'اور زمین' } },
      { id: '10:6:12', arabic: 'لَآيَاتٍ', transliteration: 'la-ayatin', pos: ['EMPH', 'N'], posLabel: 'EMPH+N', root: 'أ ي ي', meaning: { en: 'are signs', ur: 'نشانیاں ہیں' } },
      { id: '10:6:13', arabic: 'لِّقَوْمٍ', transliteration: 'li-qawmin', pos: ['P', 'N'], posLabel: 'P+N', root: 'ق و م', meaning: { en: 'for a people', ur: 'ان لوگوں کے لیے' } },
      { id: '10:6:14', arabic: 'يَتَّقُونَ', transliteration: 'yattaqun', pos: ['V'], posLabel: 'V', root: 'و ق ي', meaning: { en: 'who fear Allah', ur: 'جو تقویٰ اختیار کرتے ہیں' } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'موصول + صلة' },
      ],
    },
  },
  7: {
    text: 'إِنَّ الَّذِينَ لَا يَرْجُونَ لِقَاءَنَا وَرَضُوا بِالْحَيَاةِ الدُّنْيَا وَاطْمَأَنُّوا بِهَا وَالَّذِينَ هُمْ عَنْ آيَاتِنَا غَافِلُونَ',
    translation: {
      en: 'Indeed, those who do not expect the meeting with Us and are satisfied with the life of this world and feel secure therein and those who are heedless of Our signs -',
      ur: 'بےشک جو لوگ ہم سے ملنے کی امید نہیں رکھتے اور دنیا کی زندگی پر راضی ہو گئے اور اس سے مطمئن ہو گئے اور جو ہماری نشانیوں سے غافل ہیں -'
    },
    words: [
      { id: '10:7:1', arabic: 'إِنَّ', transliteration: 'inna', pos: ['ACC'], posLabel: 'ACC', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '10:7:2', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '10:7:3', arabic: 'لَا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'do not', ur: 'نہیں' } },
      { id: '10:7:4', arabic: 'يَرْجُونَ', transliteration: 'yarjun', pos: ['V'], posLabel: 'V', root: 'ر ج و', meaning: { en: 'expect', ur: 'امید رکھتے' } },
      { id: '10:7:5', arabic: 'لِقَاءَنَا', transliteration: 'liqa\'ana', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ل ق ي', meaning: { en: 'the meeting with Us', ur: 'ہم سے ملنے کی' } },
      { id: '10:7:6', arabic: 'وَرَضُوا', transliteration: 'wa-radu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ر ض و', meaning: { en: 'and are satisfied', ur: 'اور راضی ہو گئے' } },
      { id: '10:7:7', arabic: 'بِالْحَيَاةِ', transliteration: 'bil-hayati', pos: ['P', 'N'], posLabel: 'P+N', root: 'ح ي ي', meaning: { en: 'with the life of', ur: 'زندگی سے' } },
      { id: '10:7:8', arabic: 'الدُّنْيَا', transliteration: 'ad-dunya', pos: ['N'], posLabel: 'N', root: 'د ن و', meaning: { en: 'this world', ur: 'دنیا کی' } },
      { id: '10:7:9', arabic: 'وَاطْمَأَنُّوا', transliteration: 'wat-ma\'annu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ط م أ ن', meaning: { en: 'and feel secure', ur: 'اور مطمئن ہو گئے' } },
      { id: '10:7:10', arabic: 'بِهَا', transliteration: 'biha', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'therein', ur: 'اس سے' } },
      { id: '10:7:11', arabic: 'وَالَّذِينَ', transliteration: 'walladhina', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'and those who', ur: 'اور جو' } },
      { id: '10:7:12', arabic: 'هُمْ', transliteration: 'hum', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'they', ur: 'وہ' } },
      { id: '10:7:13', arabic: 'عَنْ', transliteration: '\'an', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'سے' } },
      { id: '10:7:14', arabic: 'آيَاتِنَا', transliteration: 'ayatina', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'أ ي ي', meaning: { en: 'Our signs', ur: 'ہماری نشانیوں' } },
      { id: '10:7:15', arabic: 'غَافِلُونَ', transliteration: 'ghafilun', pos: ['N'], posLabel: 'N', root: 'غ ف ل', meaning: { en: 'are heedless', ur: 'غافل ہیں' } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'نفی + فعل' },
      { from: 4, to: 6, label: 'عطف' },
      { from: 6, to: 9, label: 'عطف' },
      { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  8: {
    text: 'أُولَٰئِكَ مَأْوَاهُمُ النَّارُ بِمَا كَانُوا يَكْسِبُونَ',
    translation: {
      en: 'Those - their refuge will be the Fire because of what they used to earn.',
      ur: 'یہی لوگ ہیں جن کا ٹھکانا آگ ہے، ان اعمال کی وجہ سے جو وہ کرتے تھے۔'
    },
    words: [
      { id: '10:8:1', arabic: 'أُولَٰئِكَ', transliteration: 'ula\'ika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'Those', ur: 'یہی لوگ' } },
      { id: '10:8:2', arabic: 'مَأْوَاهُمُ', transliteration: 'ma\'wahumu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'أ و ي', meaning: { en: 'their refuge', ur: 'ان کا ٹھکانا' } },
      { id: '10:8:3', arabic: 'النَّارُ', transliteration: 'an-naru', pos: ['N'], posLabel: 'N', root: 'ن و ر', meaning: { en: 'will be the Fire', ur: 'آگ ہے' } },
      { id: '10:8:4', arabic: 'بِمَا', transliteration: 'bi-ma', pos: ['P', 'REL'], posLabel: 'P+REL', root: null, meaning: { en: 'because of what', ur: 'اس وجہ سے جو' } },
      { id: '10:8:5', arabic: 'كَانُوا', transliteration: 'kanu', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'they used to', ur: 'وہ تھے' } },
      { id: '10:8:6', arabic: 'يَكْسِبُونَ', transliteration: 'yaksibun', pos: ['V'], posLabel: 'V', root: 'ك س ب', meaning: { en: 'earn', ur: 'کرتے' } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
      ],
    },
  },
  9: {
    text: 'إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ يَهْدِيهِمْ رَبُّهُم بِإِيمَانِهِمْ تَجْرِي مِن تَحْتِهِمُ الْأَنْهَارُ فِي جَنَّاتِ النَّعِيمِ',
    translation: {
      en: 'Indeed, those who have believed and done righteous deeds - their Lord will guide them because of their faith. Beneath them rivers will flow in the Gardens of Pleasure.',
      ur: 'بےشک جو لوگ ایمان لائے اور نیک عمل کیے، ان کا رب ان کے ایمان کی وجہ سے انہیں ہدایت دے گا۔ نعمت والی جنتوں میں ان کے نیچے نہریں بہیں گی۔'
    },
    words: [
      { id: '10:9:1', arabic: 'إِنَّ', transliteration: 'inna', pos: ['ACC'], posLabel: 'ACC', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '10:9:2', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '10:9:3', arabic: 'آمَنُوا', transliteration: 'amanu', pos: ['V'], posLabel: 'V', root: 'أ م ن', meaning: { en: 'have believed', ur: 'ایمان لائے' } },
      { id: '10:9:4', arabic: 'وَعَمِلُوا', transliteration: 'wa-\'amilu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ع م ل', meaning: { en: 'and done', ur: 'اور کیے' } },
      { id: '10:9:5', arabic: 'الصَّالِحَاتِ', transliteration: 'as-salihati', pos: ['N'], posLabel: 'N', root: 'ص ل ح', meaning: { en: 'righteous deeds', ur: 'نیک عمل' } },
      { id: '10:9:6', arabic: 'يَهْدِيهِمْ', transliteration: 'yahdihim', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ه د ي', meaning: { en: 'will guide them', ur: 'انہیں ہدایت دے گا' } },
      { id: '10:9:7', arabic: 'رَبُّهُم', transliteration: 'rabbuhum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'their Lord', ur: 'ان کا رب' } },
      { id: '10:9:8', arabic: 'بِإِيمَانِهِمْ', transliteration: 'bi-imanihim', pos: ['P', 'N', 'PRON'], posLabel: 'P+N+PRON', root: 'أ م ن', meaning: { en: 'because of their faith', ur: 'ان کے ایمان کی وجہ سے' } },
      { id: '10:9:9', arabic: 'تَجْرِي', transliteration: 'tajri', pos: ['V'], posLabel: 'V', root: 'ج ر ي', meaning: { en: 'will flow', ur: 'بہیں گی' } },
      { id: '10:9:10', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '10:9:11', arabic: 'تَحْتِهِمُ', transliteration: 'tahtihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ت ح ت', meaning: { en: 'beneath them', ur: 'ان کے نیچے' } },
      { id: '10:9:12', arabic: 'الْأَنْهَارُ', transliteration: 'al-anharu', pos: ['N'], posLabel: 'N', root: 'ن ه ر', meaning: { en: 'the rivers', ur: 'نہریں' } },
      { id: '10:9:13', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '10:9:14', arabic: 'جَنَّاتِ', transliteration: 'jannati', pos: ['N'], posLabel: 'N', root: 'ج ن ن', meaning: { en: 'the Gardens of', ur: 'جنتوں' } },
      { id: '10:9:15', arabic: 'النَّعِيمِ', transliteration: 'an-na\'im', pos: ['N'], posLabel: 'N', root: 'ن ع م', meaning: { en: 'Pleasure', ur: 'نعمت والی' } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
      ],
    },
  },
  10: {
    text: 'دَعْوَاهُمْ فِيهَا سُبْحَانَكَ اللَّهُمَّ وَتَحِيَّتُهُمْ فِيهَا سَلَامٌ وَآخِرُ دَعْوَاهُمْ أَنِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    translation: {
      en: 'Their call therein will be, "Exalted are You, O Allah," and their greeting therein will be, "Peace." And the last of their call will be, "Praise to Allah, Lord of the worlds!"',
      ur: 'اس میں ان کی دعا ہوگی "پاک ہے تو اے اللہ" اور اس میں ان کا سلام "سلام" ہوگا۔ اور ان کی آخری دعا ہوگی "تمام تعریف اللہ کے لیے ہے جو تمام جہانوں کا رب ہے۔"',
    structure: {
      relationships: [],
    },
    },
    words: [
      { id: '10:10:1', arabic: 'دَعْوَاهُمْ', transliteration: 'da\'wahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'د ع و', meaning: { en: 'Their call', ur: 'ان کی دعا' } },
      { id: '10:10:2', arabic: 'فِيهَا', transliteration: 'fiha', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'therein', ur: 'اس میں' } },
      { id: '10:10:3', arabic: 'سُبْحَانَكَ', transliteration: 'subhanaka', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'س ب ح', meaning: { en: 'Exalted are You', ur: 'پاک ہے تو' } },
      { id: '10:10:4', arabic: 'اللَّهُمَّ', transliteration: 'Allahumma', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'O Allah', ur: 'اے اللہ' } },
      { id: '10:10:5', arabic: 'وَتَحِيَّتُهُمْ', transliteration: 'wa-tahiyyatuhum', pos: ['CONJ', 'N', 'PRON'], posLabel: 'CONJ+N+PRON', root: 'ح ي ي', meaning: { en: 'and their greeting', ur: 'اور ان کا سلام' } },
      { id: '10:10:6', arabic: 'فِيهَا', transliteration: 'fiha', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'therein', ur: 'اس میں' } },
      { id: '10:10:7', arabic: 'سَلَامٌ', transliteration: 'salamun', pos: ['N'], posLabel: 'N', root: 'س ل م', meaning: { en: 'is Peace', ur: 'سلام ہے' } },
      { id: '10:10:8', arabic: 'وَآخِرُ', transliteration: 'wa-akhiru', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'أ خ ر', meaning: { en: 'And the last of', ur: 'اور آخری' } },
      { id: '10:10:9', arabic: 'دَعْوَاهُمْ', transliteration: 'da\'wahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'د ع و', meaning: { en: 'their call', ur: 'ان کی دعا' } },
      { id: '10:10:10', arabic: 'أَنِ', transliteration: 'an', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'will be', ur: 'ہوگی' } },
      { id: '10:10:11', arabic: 'الْحَمْدُ', transliteration: 'al-hamdu', pos: ['N'], posLabel: 'N', root: 'ح م د', meaning: { en: 'Praise', ur: 'تعریف' } },
      { id: '10:10:12', arabic: 'لِلَّهِ', transliteration: 'lillahi', pos: ['P', 'PN'], posLabel: 'P+PN', root: 'أ ل ه', meaning: { en: 'to Allah', ur: 'اللہ کے لیے' } },
      { id: '10:10:13', arabic: 'رَبِّ', transliteration: 'rabbi', pos: ['N'], posLabel: 'N', root: 'ر ب ب', meaning: { en: 'Lord of', ur: 'رب' } },
      { id: '10:10:14', arabic: 'الْعَالَمِينَ', transliteration: 'al-\'alamin', pos: ['N'], posLabel: 'N', root: 'ع ل م', meaning: { en: 'the worlds', ur: 'تمام جہانوں کا' } }
    ]
  },
  11: {
    text: 'وَلَوْ يُعَجِّلُ اللَّهُ لِلنَّاسِ الشَّرَّ اسْتِعْجَالَهُم بِالْخَيْرِ لَقُضِيَ إِلَيْهِمْ أَجَلُهُمْ فَنَذَرُ الَّذِينَ لَا يَرْجُونَ لِقَاءَنَا فِي طُغْيَانِهِمْ يَعْمَهُونَ',
    translation: {
      en: 'And if Allah was to hasten for people the evil as He hastens for them the good, their term would have been ended. But We leave those who do not expect the meeting with Us, in their transgression, wandering blindly.',
      ur: 'اور اگر اللہ لوگوں کو بُرائی میں ویسی ہی جلدی کرتا جیسے وہ بھلائی میں جلدی چاہتے ہیں تو ان کی مدت پوری ہو چکی ہوتی۔ لیکن ہم ان لوگوں کو جو ہم سے ملنے کی توقع نہیں رکھتے ان کی سرکشی میں بھٹکتا چھوڑ دیتے ہیں۔'
    },
    words: [
      { id: '10:11:1', arabic: 'وَلَوْ', transliteration: 'wa-law', pos: ['CONJ', 'PART'], posLabel: 'CONJ+PART', root: null, meaning: { en: 'And if', ur: 'اور اگر' } },
      { id: '10:11:2', arabic: 'يُعَجِّلُ', transliteration: 'yuajjilu', pos: ['V'], posLabel: 'V', root: 'ع ج ل', meaning: { en: 'was to hasten', ur: 'جلدی کرتا' } },
      { id: '10:11:3', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '10:11:4', arabic: 'لِلنَّاسِ', transliteration: 'lin-nasi', pos: ['P', 'N'], posLabel: 'P+N', root: 'ن و س', meaning: { en: 'for people', ur: 'لوگوں کو' } },
      { id: '10:11:5', arabic: 'الشَّرَّ', transliteration: 'ash-sharra', pos: ['N'], posLabel: 'N', root: 'ش ر ر', meaning: { en: 'the evil', ur: 'بُرائی' } },
      { id: '10:11:6', arabic: 'اسْتِعْجَالَهُم', transliteration: 'istijaalahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ع ج ل', meaning: { en: 'their hastening', ur: 'ان کی جلدی' } },
      { id: '10:11:7', arabic: 'بِالْخَيْرِ', transliteration: 'bil-khayri', pos: ['P', 'N'], posLabel: 'P+N', root: 'خ ي ر', meaning: { en: 'for the good', ur: 'بھلائی میں' } },
      { id: '10:11:8', arabic: 'لَقُضِيَ', transliteration: 'la-qudiya', pos: ['EMPH', 'V'], posLabel: 'EMPH+V', root: 'ق ض ي', meaning: { en: 'would have been ended', ur: 'پوری ہو چکی ہوتی' } },
      { id: '10:11:9', arabic: 'إِلَيْهِمْ', transliteration: 'ilayhim', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'for them', ur: 'ان کے لیے' } },
      { id: '10:11:10', arabic: 'أَجَلُهُمْ', transliteration: 'ajaluhum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'أ ج ل', meaning: { en: 'their term', ur: 'ان کی مدت' } },
      { id: '10:11:11', arabic: 'فَنَذَرُ', transliteration: 'fa-nadharu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'و ذ ر', meaning: { en: 'But We leave', ur: 'لیکن ہم چھوڑ دیتے ہیں' } },
      { id: '10:11:12', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '10:11:13', arabic: 'لَا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'do not', ur: 'نہیں' } },
      { id: '10:11:14', arabic: 'يَرْجُونَ', transliteration: 'yarjuna', pos: ['V'], posLabel: 'V', root: 'ر ج و', meaning: { en: 'expect', ur: 'توقع رکھتے' } },
      { id: '10:11:15', arabic: 'لِقَاءَنَا', transliteration: 'liqaana', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ل ق ي', meaning: { en: 'the meeting with Us', ur: 'ہم سے ملنے کی' } },
      { id: '10:11:16', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '10:11:17', arabic: 'طُغْيَانِهِمْ', transliteration: 'tughyanihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ط غ ي', meaning: { en: 'their transgression', ur: 'سرکشی' } },
      { id: '10:11:18', arabic: 'يَعْمَهُونَ', transliteration: 'yamahun', pos: ['V'], posLabel: 'V', root: 'ع م ه', meaning: { en: 'wandering blindly', ur: 'بھٹکتے ہیں' } }
    ],
    structure: {
      relationships: [
        { from: 12, to: 14, label: 'موصول + صلة' }
      ],
    },
  },
  12: {
    text: 'وَإِذَا مَسَّ الْإِنسَانَ الضُّرُّ دَعَانَا لِجَنبِهِ أَوْ قَاعِدًا أَوْ قَائِمًا فَلَمَّا كَشَفْنَا عَنْهُ ضُرَّهُ مَرَّ كَأَن لَّمْ يَدْعُنَا إِلَىٰ ضُرٍّ مَّسَّهُ كَذَٰلِكَ زُيِّنَ لِلْمُسْرِفِينَ مَا كَانُوا يَعْمَلُونَ',
    translation: {
      en: 'And when affliction touches man, he calls upon Us lying on his side or sitting or standing; but when We remove his affliction, he continues as if he never called upon Us. Thus is made pleasing to the transgressors what they used to do.',
      ur: 'اور جب انسان کو تکلیف پہنچتی ہے تو ہمیں پکارتا ہے لیٹے یا بیٹھے یا کھڑے پھر جب ہم اس سے تکلیف دور کر دیتے ہیں تو ایسے چل دیتا ہے جیسے ہمیں کبھی پکارا ہی نہیں۔ حد سے گزرنے والوں کو ان کے اعمال اسی طرح مزین کر دیے گئے۔'
    },
    words: [
      { id: '10:12:1', arabic: 'وَإِذَا', transliteration: 'wa-idha', pos: ['CONJ', 'PART'], posLabel: 'CONJ+PART', root: null, meaning: { en: 'And when', ur: 'اور جب' } },
      { id: '10:12:2', arabic: 'مَسَّ', transliteration: 'massa', pos: ['V'], posLabel: 'V', root: 'م س س', meaning: { en: 'touches', ur: 'پہنچتی ہے' } },
      { id: '10:12:3', arabic: 'الْإِنسَانَ', transliteration: 'al-insana', pos: ['N'], posLabel: 'N', root: 'أ ن س', meaning: { en: 'man', ur: 'انسان کو' } },
      { id: '10:12:4', arabic: 'الضُّرُّ', transliteration: 'ad-durru', pos: ['N'], posLabel: 'N', root: 'ض ر ر', meaning: { en: 'affliction', ur: 'تکلیف' } },
      { id: '10:12:5', arabic: 'دَعَانَا', transliteration: 'daana', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'د ع و', meaning: { en: 'he calls Us', ur: 'ہمیں پکارتا ہے' } },
      { id: '10:12:6', arabic: 'لِجَنبِهِ', transliteration: 'li-janbihi', pos: ['P', 'N', 'PRON'], posLabel: 'P+N+PRON', root: 'ج ن ب', meaning: { en: 'on his side', ur: 'لیٹے ہوئے' } },
      { id: '10:12:7', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '10:12:8', arabic: 'قَاعِدًا', transliteration: 'qaidan', pos: ['N'], posLabel: 'N', root: 'ق ع د', meaning: { en: 'sitting', ur: 'بیٹھے' } },
      { id: '10:12:9', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '10:12:10', arabic: 'قَائِمًا', transliteration: 'qaiman', pos: ['N'], posLabel: 'N', root: 'ق و م', meaning: { en: 'standing', ur: 'کھڑے' } },
      { id: '10:12:11', arabic: 'فَلَمَّا', transliteration: 'fa-lamma', pos: ['CONJ', 'PART'], posLabel: 'CONJ+PART', root: null, meaning: { en: 'but when', ur: 'پھر جب' } },
      { id: '10:12:12', arabic: 'كَشَفْنَا', transliteration: 'kashafna', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ك ش ف', meaning: { en: 'We remove', ur: 'ہم دور کر دیتے ہیں' } },
      { id: '10:12:13', arabic: 'عَنْهُ', transliteration: 'anhu', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'from him', ur: 'اس سے' } },
      { id: '10:12:14', arabic: 'ضُرَّهُ', transliteration: 'durrahu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ض ر ر', meaning: { en: 'his affliction', ur: 'اس کی تکلیف' } },
      { id: '10:12:15', arabic: 'مَرَّ', transliteration: 'marra', pos: ['V'], posLabel: 'V', root: 'م ر ر', meaning: { en: 'he continues', ur: 'چل دیتا ہے' } },
      { id: '10:12:16', arabic: 'كَأَن', transliteration: 'ka-an', pos: ['P', 'PART'], posLabel: 'P+PART', root: null, meaning: { en: 'as if', ur: 'جیسے' } },
      { id: '10:12:17', arabic: 'لَّمْ', transliteration: 'lam', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'never', ur: 'کبھی نہیں' } },
      { id: '10:12:18', arabic: 'يَدْعُنَا', transliteration: 'yaduna', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'د ع و', meaning: { en: 'he called Us', ur: 'پکارا' } },
      { id: '10:12:19', arabic: 'إِلَىٰ', transliteration: 'ila', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'for', ur: 'کے لیے' } },
      { id: '10:12:20', arabic: 'ضُرٍّ', transliteration: 'durrin', pos: ['N'], posLabel: 'N', root: 'ض ر ر', meaning: { en: 'an affliction', ur: 'تکلیف' } },
      { id: '10:12:21', arabic: 'مَّسَّهُ', transliteration: 'massahu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'م س س', meaning: { en: 'that touched him', ur: 'جو اسے پہنچی' } },
      { id: '10:12:22', arabic: 'كَذَٰلِكَ', transliteration: 'kadhalika', pos: ['P', 'DEM'], posLabel: 'P+DEM', root: null, meaning: { en: 'Thus', ur: 'اسی طرح' } },
      { id: '10:12:23', arabic: 'زُيِّنَ', transliteration: 'zuyyina', pos: ['V'], posLabel: 'V', root: 'ز ي ن', meaning: { en: 'is made pleasing', ur: 'مزین کیا گیا' } },
      { id: '10:12:24', arabic: 'لِلْمُسْرِفِينَ', transliteration: 'lil-musrifina', pos: ['P', 'N'], posLabel: 'P+N', root: 'س ر ف', meaning: { en: 'for the transgressors', ur: 'حد سے گزرنے والوں کو' } },
      { id: '10:12:25', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '10:12:26', arabic: 'كَانُوا', transliteration: 'kanu', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'they used to', ur: 'وہ تھے' } },
      { id: '10:12:27', arabic: 'يَعْمَلُونَ', transliteration: 'yamalun', pos: ['V'], posLabel: 'V', root: 'ع م ل', meaning: { en: 'do', ur: 'کرتے' } }
    ],
    structure: {
      relationships: [
        { from: 25, to: 26, label: 'موصول + صلة' }
      ],
    },
  },
  13: {
    text: 'وَلَقَدْ أَهْلَكْنَا الْقُرُونَ مِن قَبْلِكُمْ لَمَّا ظَلَمُوا وَجَاءَتْهُمْ رُسُلُهُم بِالْبَيِّنَاتِ وَمَا كَانُوا لِيُؤْمِنُوا كَذَٰلِكَ نَجْزِي الْقَوْمَ الْمُجْرِمِينَ',
    translation: {
      en: 'And We had already destroyed generations before you when they wronged, and their messengers came with clear proofs, but they would not believe. Thus do We recompense the criminal people.',
      ur: 'اور ہم نے تم سے پہلے کئی قوموں کو ہلاک کیا جب انہوں نے ظلم کیا اور ان کے رسول کھلی نشانیاں لائے مگر وہ ایمان لانے والے نہ تھے۔ اسی طرح ہم مجرموں کو سزا دیتے ہیں۔'
    },
    words: [
      { id: '10:13:1', arabic: 'وَلَقَدْ', transliteration: 'wa-laqad', pos: ['CONJ', 'EMPH', 'PART'], posLabel: 'CONJ+EMPH+PART', root: null, meaning: { en: 'And certainly', ur: 'اور بےشک' } },
      { id: '10:13:2', arabic: 'أَهْلَكْنَا', transliteration: 'ahlakna', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ه ل ك', meaning: { en: 'We destroyed', ur: 'ہم نے ہلاک کیا' } },
      { id: '10:13:3', arabic: 'الْقُرُونَ', transliteration: 'al-quruna', pos: ['N'], posLabel: 'N', root: 'ق ر ن', meaning: { en: 'generations', ur: 'قوموں کو' } },
      { id: '10:13:4', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'before', ur: 'سے پہلے' } },
      { id: '10:13:5', arabic: 'قَبْلِكُمْ', transliteration: 'qablikum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق ب ل', meaning: { en: 'you', ur: 'تم' } },
      { id: '10:13:6', arabic: 'لَمَّا', transliteration: 'lamma', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '10:13:7', arabic: 'ظَلَمُوا', transliteration: 'zalamu', pos: ['V'], posLabel: 'V', root: 'ظ ل م', meaning: { en: 'they wronged', ur: 'ظلم کیا' } },
      { id: '10:13:8', arabic: 'وَجَاءَتْهُمْ', transliteration: 'wa-jaathum', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ج ي أ', meaning: { en: 'and came to them', ur: 'اور ان کے پاس آئے' } },
      { id: '10:13:9', arabic: 'رُسُلُهُم', transliteration: 'rusuluhum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر س ل', meaning: { en: 'their messengers', ur: 'ان کے رسول' } },
      { id: '10:13:10', arabic: 'بِالْبَيِّنَاتِ', transliteration: 'bil-bayyinati', pos: ['P', 'N'], posLabel: 'P+N', root: 'ب ي ن', meaning: { en: 'with clear proofs', ur: 'کھلی نشانیوں کے ساتھ' } },
      { id: '10:13:11', arabic: 'وَمَا', transliteration: 'wa-ma', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'but not', ur: 'مگر نہیں' } },
      { id: '10:13:12', arabic: 'كَانُوا', transliteration: 'kanu', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'they were', ur: 'وہ تھے' } },
      { id: '10:13:13', arabic: 'لِيُؤْمِنُوا', transliteration: 'li-yuminu', pos: ['P', 'V'], posLabel: 'P+V', root: 'أ م ن', meaning: { en: 'to believe', ur: 'ایمان لانے والے' } },
      { id: '10:13:14', arabic: 'كَذَٰلِكَ', transliteration: 'kadhalika', pos: ['P', 'DEM'], posLabel: 'P+DEM', root: null, meaning: { en: 'Thus', ur: 'اسی طرح' } },
      { id: '10:13:15', arabic: 'نَجْزِي', transliteration: 'najzi', pos: ['V'], posLabel: 'V', root: 'ج ز ي', meaning: { en: 'We recompense', ur: 'ہم سزا دیتے ہیں' } },
      { id: '10:13:16', arabic: 'الْقَوْمَ', transliteration: 'al-qawma', pos: ['N'], posLabel: 'N', root: 'ق و م', meaning: { en: 'the people', ur: 'قوم کو' } },
      { id: '10:13:17', arabic: 'الْمُجْرِمِينَ', transliteration: 'al-mujrimina', pos: ['ADJ'], posLabel: 'ADJ', root: 'ج ر م', meaning: { en: 'criminal', ur: 'مجرم' } }
    ],
    structure: {
      relationships: [
        { from: 16, to: 17, label: 'موصوف + صفت' }
      ],
    },
  },
  14: {
    text: 'ثُمَّ جَعَلْنَاكُمْ خَلَائِفَ فِي الْأَرْضِ مِن بَعْدِهِمْ لِنَنظُرَ كَيْفَ تَعْمَلُونَ',
    translation: {
      en: 'Then We made you successors in the land after them so that We may observe how you will do.',
      ur: 'پھر ہم نے ان کے بعد تمہیں زمین میں جانشین بنایا تاکہ دیکھیں تم کیسے عمل کرتے ہو۔'
    },
    words: [
      { id: '10:14:1', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'Then', ur: 'پھر' } },
      { id: '10:14:2', arabic: 'جَعَلْنَاكُمْ', transliteration: 'jaalnakum', pos: ['V', 'PRON', 'PRON'], posLabel: 'V+PRON+PRON', root: 'ج ع ل', meaning: { en: 'We made you', ur: 'ہم نے تمہیں بنایا' } },
      { id: '10:14:3', arabic: 'خَلَائِفَ', transliteration: 'khalaifa', pos: ['N'], posLabel: 'N', root: 'خ ل ف', meaning: { en: 'successors', ur: 'جانشین' } },
      { id: '10:14:4', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '10:14:5', arabic: 'الْأَرْضِ', transliteration: 'al-ardi', pos: ['N'], posLabel: 'N', root: 'أ ر ض', meaning: { en: 'the land', ur: 'زمین' } },
      { id: '10:14:6', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'after', ur: 'کے بعد' } },
      { id: '10:14:7', arabic: 'بَعْدِهِمْ', transliteration: 'badihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ب ع د', meaning: { en: 'them', ur: 'ان' } },
      { id: '10:14:8', arabic: 'لِنَنظُرَ', transliteration: 'li-nanzura', pos: ['P', 'V'], posLabel: 'P+V', root: 'ن ظ ر', meaning: { en: 'so that We may observe', ur: 'تاکہ ہم دیکھیں' } },
      { id: '10:14:9', arabic: 'كَيْفَ', transliteration: 'kayfa', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'how', ur: 'کیسے' } },
      { id: '10:14:10', arabic: 'تَعْمَلُونَ', transliteration: 'tamalun', pos: ['V'], posLabel: 'V', root: 'ع م ل', meaning: { en: 'you will do', ur: 'عمل کرتے ہو' } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  15: {
    text: 'وَإِذَا تُتْلَىٰ عَلَيْهِمْ آيَاتُنَا بَيِّنَاتٍ قَالَ الَّذِينَ لَا يَرْجُونَ لِقَاءَنَا ائْتِ بِقُرْآنٍ غَيْرِ هَٰذَا أَوْ بَدِّلْهُ قُلْ مَا يَكُونُ لِي أَنْ أُبَدِّلَهُ مِن تِلْقَاءِ نَفْسِي إِنْ أَتَّبِعُ إِلَّا مَا يُوحَىٰ إِلَيَّ إِنِّي أَخَافُ إِنْ عَصَيْتُ رَبِّي عَذَابَ يَوْمٍ عَظِيمٍ',
    translation: {
      en: 'And when Our clear verses are recited to them, those who do not expect the meeting with Us say, "Bring a Quran other than this or change it." Say, "It is not for me to change it on my own. I only follow what is revealed to me. I fear, if I disobey my Lord, the punishment of a tremendous Day."',
      ur: 'اور جب ان پر ہماری واضح آیات پڑھی جاتی ہیں تو جو لوگ ہم سے ملنے کی امید نہیں رکھتے کہتے ہیں اس کے سوا کوئی اور قرآن لاؤ یا اسے بدل دو۔ کہو مجھے حق نہیں کہ اسے اپنی طرف سے بدلوں۔ میں صرف وحی کی پیروی کرتا ہوں۔ اگر میں نے اپنے رب کی نافرمانی کی تو مجھے بڑے دن کے عذاب کا ڈر ہے۔'
    },
    words: [
      { id: '10:15:1', arabic: 'وَإِذَا', transliteration: 'wa-idha', pos: ['CONJ', 'PART'], posLabel: 'CONJ+PART', root: null, meaning: { en: 'And when', ur: 'اور جب' } },
      { id: '10:15:2', arabic: 'تُتْلَىٰ', transliteration: 'tutla', pos: ['V'], posLabel: 'V', root: 'ت ل و', meaning: { en: 'are recited', ur: 'پڑھی جاتی ہیں' } },
      { id: '10:15:3', arabic: 'عَلَيْهِمْ', transliteration: 'alayhim', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to them', ur: 'ان پر' } },
      { id: '10:15:4', arabic: 'آيَاتُنَا', transliteration: 'ayatuna', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'أ ي ي', meaning: { en: 'Our verses', ur: 'ہماری آیات' } },
      { id: '10:15:5', arabic: 'بَيِّنَاتٍ', transliteration: 'bayyinatin', pos: ['ADJ'], posLabel: 'ADJ', root: 'ب ي ن', meaning: { en: 'clear', ur: 'واضح' } },
      { id: '10:15:6', arabic: 'قَالَ', transliteration: 'qala', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'say', ur: 'کہتے ہیں' } },
      { id: '10:15:7', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '10:15:8', arabic: 'لَا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '10:15:9', arabic: 'يَرْجُونَ', transliteration: 'yarjuna', pos: ['V'], posLabel: 'V', root: 'ر ج و', meaning: { en: 'expect', ur: 'امید رکھتے' } },
      { id: '10:15:10', arabic: 'لِقَاءَنَا', transliteration: 'liqaana', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ل ق ي', meaning: { en: 'the meeting with Us', ur: 'ہم سے ملنے کی' } },
      { id: '10:15:11', arabic: 'ائْتِ', transliteration: 'iti', pos: ['V'], posLabel: 'V', root: 'أ ت ي', meaning: { en: 'Bring', ur: 'لاؤ' } },
      { id: '10:15:12', arabic: 'بِقُرْآنٍ', transliteration: 'bi-quranin', pos: ['P', 'N'], posLabel: 'P+N', root: 'ق ر أ', meaning: { en: 'a Quran', ur: 'قرآن' } },
      { id: '10:15:13', arabic: 'غَيْرِ', transliteration: 'ghayri', pos: ['N'], posLabel: 'N', root: 'غ ي ر', meaning: { en: 'other than', ur: 'کے سوا' } },
      { id: '10:15:14', arabic: 'هَٰذَا', transliteration: 'hadha', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'this', ur: 'اس' } },
      { id: '10:15:15', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '10:15:16', arabic: 'بَدِّلْهُ', transliteration: 'baddilhu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ب د ل', meaning: { en: 'change it', ur: 'بدل دو' } },
      { id: '10:15:17', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '10:15:18', arabic: 'مَا', transliteration: 'ma', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '10:15:19', arabic: 'يَكُونُ', transliteration: 'yakunu', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'it is', ur: 'ہے' } },
      { id: '10:15:20', arabic: 'لِي', transliteration: 'li', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'for me', ur: 'مجھے' } },
      { id: '10:15:21', arabic: 'أَنْ', transliteration: 'an', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'to', ur: 'کہ' } },
      { id: '10:15:22', arabic: 'أُبَدِّلَهُ', transliteration: 'ubaddilahu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ب د ل', meaning: { en: 'change it', ur: 'بدلوں' } },
      { id: '10:15:23', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'سے' } },
      { id: '10:15:24', arabic: 'تِلْقَاءِ', transliteration: 'tilqai', pos: ['N'], posLabel: 'N', root: 'ل ق ي', meaning: { en: 'accord', ur: 'طرف' } },
      { id: '10:15:25', arabic: 'نَفْسِي', transliteration: 'nafsi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ن ف س', meaning: { en: 'myself', ur: 'اپنی' } },
      { id: '10:15:26', arabic: 'إِنْ', transliteration: 'in', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'only', ur: 'صرف' } },
      { id: '10:15:27', arabic: 'أَتَّبِعُ', transliteration: 'attabiu', pos: ['V'], posLabel: 'V', root: 'ت ب ع', meaning: { en: 'I follow', ur: 'پیروی کرتا ہوں' } },
      { id: '10:15:28', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except', ur: 'مگر' } },
      { id: '10:15:29', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '10:15:30', arabic: 'يُوحَىٰ', transliteration: 'yuha', pos: ['V'], posLabel: 'V', root: 'و ح ي', meaning: { en: 'is revealed', ur: 'وحی کی جاتی ہے' } },
      { id: '10:15:31', arabic: 'إِلَيَّ', transliteration: 'ilayya', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to me', ur: 'میری طرف' } },
      { id: '10:15:32', arabic: 'إِنِّي', transliteration: 'inni', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'Indeed I', ur: 'مجھے' } },
      { id: '10:15:33', arabic: 'أَخَافُ', transliteration: 'akhafu', pos: ['V'], posLabel: 'V', root: 'خ و ف', meaning: { en: 'fear', ur: 'ڈر ہے' } },
      { id: '10:15:34', arabic: 'إِنْ', transliteration: 'in', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'if', ur: 'اگر' } },
      { id: '10:15:35', arabic: 'عَصَيْتُ', transliteration: 'asaytu', pos: ['V'], posLabel: 'V', root: 'ع ص ي', meaning: { en: 'I disobey', ur: 'نافرمانی کی' } },
      { id: '10:15:36', arabic: 'رَبِّي', transliteration: 'rabbi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'my Lord', ur: 'اپنے رب کی' } },
      { id: '10:15:37', arabic: 'عَذَابَ', transliteration: 'adhaba', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: 'punishment of', ur: 'عذاب' } },
      { id: '10:15:38', arabic: 'يَوْمٍ', transliteration: 'yawmin', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: 'a Day', ur: 'دن کے' } },
      { id: '10:15:39', arabic: 'عَظِيمٍ', transliteration: 'azimin', pos: ['ADJ'], posLabel: 'ADJ', root: 'ع ظ م', meaning: { en: 'tremendous', ur: 'بڑے' } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 9, label: 'موصول + صلة' },
        { from: 37, to: 38, label: 'مضاف + مضاف إليه' },
        { from: 38, to: 39, label: 'موصوف + صفت' }
      ],
    },
  },

  16: {
    text: "قُل لَّوْ شَآءَ ٱللَّهُ مَا تَلَوْتُهُۥ عَلَيْكُمْ وَلَآ أَدْرَىٰكُم بِهِۦ ۖ فَقَدْ لَبِثْتُ فِيكُمْ عُمُرًۭا مِّن قَبْلِهِۦٓ ۚ أَفَلَا تَعْقِلُونَ",
    translation: {
      en: "",
      ur: "(یہ بھی) کہہ دو کہ اگر خدا چاہتا تو (نہ تو) میں ہی یہ (کتاب) تم کو پڑھ کر سناتا اور نہ وہی تمہیں اس سے واقف کرتا۔ میں اس سے پہلے تم میں ایک عمر رہا ہوں (اور کبھی ایک کلمہ بھی اس طرح کا نہیں کہا) بھلا تم سمجھتے نہیں",
    },
    words: [
      { id: '10:16:1', arabic: "قُل", transliteration: "qul", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '10:16:2', arabic: "لَّوْ", transliteration: "law", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '10:16:3', arabic: "شَآءَ", transliteration: "shāa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(had) willed", ur: "(had) willed" } },
      { id: '10:16:4', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:16:5', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '10:16:6', arabic: "تَلَوْتُهُۥ", transliteration: "talawtuhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I (would) have recited it", ur: "میں (would) have recited it" } },
      { id: '10:16:7', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '10:16:8', arabic: "وَلَآ", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:16:9', arabic: "أَدْرَىٰكُم", transliteration: "adrākum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He (would) have made it known to you", ur: "وہ (would) have made it known کو تم" } },
      { id: '10:16:10', arabic: "بِهِۦ ۖ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "He (would) have made it known to you", ur: "وہ (would) have made it known کو تم" } },
      { id: '10:16:11', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '10:16:12', arabic: "لَبِثْتُ", transliteration: "labith'tu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I have stayed", ur: "میں have stayed" } },
      { id: '10:16:13', arabic: "فِيكُمْ", transliteration: "fīkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '10:16:14', arabic: "عُمُرًۭا", transliteration: "ʿumuran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a lifetime", ur: "a lifetime" } },
      { id: '10:16:15', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before it", ur: "پہلے it" } },
      { id: '10:16:16', arabic: "قَبْلِهِۦٓ ۚ", transliteration: "qablihi", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before it", ur: "پہلے it" } },
      { id: '10:16:17', arabic: "أَفَلَا", transliteration: "afalā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Then will not", ur: "پھر will نہیں" } },
      { id: '10:16:18', arabic: "تَعْقِلُونَ", transliteration: "taʿqilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you use reason", ur: "تم use reason" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'نفی + فعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  17: {
    text: "فَمَنْ أَظْلَمُ مِمَّنِ ٱفْتَرَىٰ عَلَى ٱللَّهِ كَذِبًا أَوْ كَذَّبَ بِـَٔايَـٰتِهِۦٓ ۚ إِنَّهُۥ لَا يُفْلِحُ ٱلْمُجْرِمُونَ",
    translation: {
      en: "",
      ur: "تو اس سے بڑھ کر ظالم کون جو خدا پر جھوٹ افترا کرے اور اس کی آیتوں کو جھٹلائے۔ بےشک گنہگار فلاح نہیں پائیں گے",
    },
    words: [
      { id: '10:17:1', arabic: "فَمَنْ", transliteration: "faman", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So who", ur: "So جو" } },
      { id: '10:17:2', arabic: "أَظْلَمُ", transliteration: "aẓlamu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) more wrong", ur: "(is) more wrong" } },
      { id: '10:17:3', arabic: "مِمَّنِ", transliteration: "mimmani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than he who", ur: "than وہ جو" } },
      { id: '10:17:4', arabic: "ٱفْتَرَىٰ", transliteration: "if'tarā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "invents", ur: "invents" } },
      { id: '10:17:5', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '10:17:6', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:17:7', arabic: "كَذِبًا", transliteration: "kadhiban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a lie", ur: "a lie" } },
      { id: '10:17:8', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '10:17:9', arabic: "كَذَّبَ", transliteration: "kadhaba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "denies", ur: "denies" } },
      { id: '10:17:10', arabic: "بِـَٔايَـٰتِهِۦٓ ۚ", transliteration: "biāyātihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "His Signs", ur: "His نشانیاں" } },
      { id: '10:17:11', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '10:17:12', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '10:17:13', arabic: "يُفْلِحُ", transliteration: "yuf'liḥu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will succeed", ur: "will succeed" } },
      { id: '10:17:14', arabic: "ٱلْمُجْرِمُونَ", transliteration: "l-muj'rimūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the criminals", ur: "the criminals" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'نفی + فعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  18: {
    text: "وَيَعْبُدُونَ مِن دُونِ ٱللَّهِ مَا لَا يَضُرُّهُمْ وَلَا يَنفَعُهُمْ وَيَقُولُونَ هَـٰٓؤُلَآءِ شُفَعَـٰٓؤُنَا عِندَ ٱللَّهِ ۚ قُلْ أَتُنَبِّـُٔونَ ٱللَّهَ بِمَا لَا يَعْلَمُ فِى ٱلسَّمَـٰوَٰتِ وَلَا فِى ٱلْأَرْضِ ۚ سُبْحَـٰنَهُۥ وَتَعَـٰلَىٰ عَمَّا يُشْرِكُونَ",
    translation: {
      en: "",
      ur: "اور یہ (لوگ) خدا کے سوا ایسی چیزوں کی پرستش کرتے ہیں جو نہ ان کا کچھ بگاڑ ہی سکتی ہیں اور نہ کچھ بھلا ہی کر سکتی ہیں اور کہتے ہیں کہ یہ خدا کے پاس ہماری سفارش کرنے والے ہیں۔ کہہ دو کہ کیا تم خدا کو ایسی چیز بتاتے ہو جس کا وجود اسے نہ آسمانوں میں معلوم ہوتا ہے اور نہ زمین میں۔ وہ پاک ہے اور (اس کی شان) ان کے شرک کرنے سے بہت بلند ہے",
    },
    words: [
      { id: '10:18:1', arabic: "وَيَعْبُدُونَ", transliteration: "wayaʿbudūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they worship", ur: "اور وہ لوگ عبادت" } },
      { id: '10:18:2', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:18:3', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "other than", ur: "other than" } },
      { id: '10:18:4', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:18:5', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "that (which)", ur: "وہ (جو)" } },
      { id: '10:18:6', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '10:18:7', arabic: "يَضُرُّهُمْ", transliteration: "yaḍurruhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "harm them", ur: "harm them" } },
      { id: '10:18:8', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:18:9', arabic: "يَنفَعُهُمْ", transliteration: "yanfaʿuhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "benefit them", ur: "benefit them" } },
      { id: '10:18:10', arabic: "وَيَقُولُونَ", transliteration: "wayaqūlūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and they say", ur: "اور وہ لوگ کہو" } },
      { id: '10:18:11', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "These", ur: "These" } },
      { id: '10:18:12', arabic: "شُفَعَـٰٓؤُنَا", transliteration: "shufaʿāunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) our intercessors", ur: "(are) our intercessors" } },
      { id: '10:18:13', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '10:18:14', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:18:15', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '10:18:16', arabic: "أَتُنَبِّـُٔونَ", transliteration: "atunabbiūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you inform", ur: "Do تم inform" } },
      { id: '10:18:17', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:18:18', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '10:18:19', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '10:18:20', arabic: "يَعْلَمُ", transliteration: "yaʿlamu", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "he knows", ur: "وہ knows" } },
      { id: '10:18:21', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:18:22', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '10:18:23', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:18:24', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:18:25', arabic: "ٱلْأَرْضِ ۚ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '10:18:26', arabic: "سُبْحَـٰنَهُۥ", transliteration: "sub'ḥānahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Glorified is He", ur: "Glorified is وہ" } },
      { id: '10:18:27', arabic: "وَتَعَـٰلَىٰ", transliteration: "wataʿālā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Exalted", ur: "اور Exalted" } },
      { id: '10:18:28', arabic: "عَمَّا", transliteration: "ʿammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "above what", ur: "above کیا" } },
      { id: '10:18:29', arabic: "يُشْرِكُونَ", transliteration: "yush'rikūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they associate (with Him)", ur: "وہ لوگ associate (ساتھ Him)" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'نفی + فعل' },
        { from: 21, to: 22, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'جار + مجرور' }
      ],
    },
  },
  19: {
    text: "وَمَا كَانَ ٱلنَّاسُ إِلَّآ أُمَّةًۭ وَٰحِدَةًۭ فَٱخْتَلَفُوا۟ ۚ وَلَوْلَا كَلِمَةٌۭ سَبَقَتْ مِن رَّبِّكَ لَقُضِىَ بَيْنَهُمْ فِيمَا فِيهِ يَخْتَلِفُونَ",
    translation: {
      en: "",
      ur: "اور (سب) لوگ (پہلے) ایک ہی اُمت (یعنی ایک ہی ملت پر) تھے۔ پھر جدا جدا ہوگئے۔ اور اگر ایک بات جو تمہارے پروردگار کی طرف سے پہلے ہوچکی ہے نہ ہوتی تو جن باتوں میں وہ اختلاف کرتے ہیں ان میں فیصلہ کر دیا جاتا",
    },
    words: [
      { id: '10:19:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '10:19:2', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '10:19:3', arabic: "ٱلنَّاسُ", transliteration: "l-nāsu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mankind", ur: "the mankind" } },
      { id: '10:19:4', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '10:19:5', arabic: "أُمَّةًۭ", transliteration: "ummatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a community", ur: "a community" } },
      { id: '10:19:6', arabic: "وَٰحِدَةًۭ", transliteration: "wāḥidatan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "one", ur: "one" } },
      { id: '10:19:7', arabic: "فَٱخْتَلَفُوا۟ ۚ", transliteration: "fa-ikh'talafū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then they differed", ur: "پھر وہ لوگ differed" } },
      { id: '10:19:8', arabic: "وَلَوْلَا", transliteration: "walawlā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And had (it) not been", ur: "اور had (it) نہیں been" } },
      { id: '10:19:9', arabic: "كَلِمَةٌۭ", transliteration: "kalimatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a word", ur: "a word" } },
      { id: '10:19:10', arabic: "سَبَقَتْ", transliteration: "sabaqat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(that) preceded", ur: "(وہ) preceded" } },
      { id: '10:19:11', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:19:12', arabic: "رَّبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '10:19:13', arabic: "لَقُضِىَ", transliteration: "laquḍiya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely, it (would) have been judged", ur: "یقیناً, it (would) have been judged" } },
      { id: '10:19:14', arabic: "بَيْنَهُمْ", transliteration: "baynahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between them", ur: "درمیان them" } },
      { id: '10:19:15', arabic: "فِيمَا", transliteration: "fīmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "concerning what", ur: "concerning کیا" } },
      { id: '10:19:16', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[therein]", ur: "[اس میں]" } },
      { id: '10:19:17', arabic: "يَخْتَلِفُونَ", transliteration: "yakhtalifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they differ", ur: "وہ لوگ differ" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  20: {
    text: "وَيَقُولُونَ لَوْلَآ أُنزِلَ عَلَيْهِ ءَايَةٌۭ مِّن رَّبِّهِۦ ۖ فَقُلْ إِنَّمَا ٱلْغَيْبُ لِلَّهِ فَٱنتَظِرُوٓا۟ إِنِّى مَعَكُم مِّنَ ٱلْمُنتَظِرِينَ",
    translation: {
      en: "",
      ur: "اور کہتے ہیں کہ اس پر اس کے پروردگار کی طرف سے کوئی نشانی کیوں نازل نہیں ہوئی۔ کہہ دو کہ غیب (کا علم) تو خدا کو ہے سو تم انتظار کرو۔ میں بھی تمہارے ساتھ انتظار کرتا ہوں",
    },
    words: [
      { id: '10:20:1', arabic: "وَيَقُولُونَ", transliteration: "wayaqūlūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" } },
      { id: '10:20:2', arabic: "لَوْلَآ", transliteration: "lawlā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Why not", ur: "Why نہیں" } },
      { id: '10:20:3', arabic: "أُنزِلَ", transliteration: "unzila", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is sent down", ur: "is sent down" } },
      { id: '10:20:4', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to him", ur: "کو him" } },
      { id: '10:20:5', arabic: "ءَايَةٌۭ", transliteration: "āyatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Sign", ur: "a نشانی" } },
      { id: '10:20:6', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:20:7', arabic: "رَّبِّهِۦ ۖ", transliteration: "rabbihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his Lord", ur: "his رب" } },
      { id: '10:20:8', arabic: "فَقُلْ", transliteration: "faqul", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ق و ل", meaning: { en: "So say", ur: "So کہو" } },
      { id: '10:20:9', arabic: "إِنَّمَا", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '10:20:10', arabic: "ٱلْغَيْبُ", transliteration: "l-ghaybu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the unseen", ur: "the unseen" } },
      { id: '10:20:11', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) for Allah", ur: "(is) for اللہ" } },
      { id: '10:20:12', arabic: "فَٱنتَظِرُوٓا۟", transliteration: "fa-intaẓirū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so wait", ur: "so wait" } },
      { id: '10:20:13', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed, I am", ur: "بیشک, میں am" } },
      { id: '10:20:14', arabic: "مَعَكُم", transliteration: "maʿakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with you", ur: "ساتھ تم" } },
      { id: '10:20:15', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '10:20:16', arabic: "ٱلْمُنتَظِرِينَ", transliteration: "l-muntaẓirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who wait", ur: "the ones جو wait" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  21: {
    text: "وَإِذَآ أَذَقْنَا ٱلنَّاسَ رَحْمَةًۭ مِّنۢ بَعْدِ ضَرَّآءَ مَسَّتْهُمْ إِذَا لَهُم مَّكْرٌۭ فِىٓ ءَايَاتِنَا ۚ قُلِ ٱللَّهُ أَسْرَعُ مَكْرًا ۚ إِنَّ رُسُلَنَا يَكْتُبُونَ مَا تَمْكُرُونَ",
    translation: {
      en: "",
      ur: "اور جب ہم لوگوں کو تکلیف پہنچنے کے بعد (اپنی) رحمت (سے آسائش) کا مزہ چکھاتے ہیں تو وہ ہماری آیتوں میں حیلے کرنے لگتے ہیں۔ کہہ دو کہ خدا بہت جلد حیلہ کرنے والا ہے۔ اور جو حیلے تم کرتے ہو ہمارے فرشتے ان کو لکھتے جاتے ہیں",
    },
    words: [
      { id: '10:21:1', arabic: "وَإِذَآ", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '10:21:2', arabic: "أَذَقْنَا", transliteration: "adhaqnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We let [the] mankind taste", ur: "ہم let [the] mankind taste" } },
      { id: '10:21:3', arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We let [the] mankind taste", ur: "ہم let [the] mankind taste" } },
      { id: '10:21:4', arabic: "رَحْمَةًۭ", transliteration: "raḥmatan", pos: ['N'], posLabel: 'N', root: "ر ح م", meaning: { en: "mercy", ur: "رحمت" } },
      { id: '10:21:5', arabic: "مِّنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "after", ur: "بعد" } },
      { id: '10:21:6', arabic: "بَعْدِ", transliteration: "baʿdi", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '10:21:7', arabic: "ضَرَّآءَ", transliteration: "ḍarrāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "adversity", ur: "adversity" } },
      { id: '10:21:8', arabic: "مَسَّتْهُمْ", transliteration: "massathum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has touched them", ur: "has touched them" } },
      { id: '10:21:9', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "behold", ur: "behold" } },
      { id: '10:21:10', arabic: "لَهُم", transliteration: "lahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They have", ur: "وہ لوگ have" } },
      { id: '10:21:11', arabic: "مَّكْرٌۭ", transliteration: "makrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a plot", ur: "a plot" } },
      { id: '10:21:12', arabic: "فِىٓ", transliteration: "fī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against", ur: "against" } },
      { id: '10:21:13', arabic: "ءَايَاتِنَا ۚ", transliteration: "āyātinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Verses", ur: "Our Verses" } },
      { id: '10:21:14', arabic: "قُلِ", transliteration: "quli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '10:21:15', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:21:16', arabic: "أَسْرَعُ", transliteration: "asraʿu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) more swift", ur: "(is) more swift" } },
      { id: '10:21:17', arabic: "مَكْرًا ۚ", transliteration: "makran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(in) planning", ur: "(میں) planning" } },
      { id: '10:21:18', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '10:21:19', arabic: "رُسُلَنَا", transliteration: "rusulanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Messengers", ur: "Our Messengers" } },
      { id: '10:21:20', arabic: "يَكْتُبُونَ", transliteration: "yaktubūna", pos: ['V'], posLabel: 'V', root: "ك ت ب", meaning: { en: "write down", ur: "write down" } },
      { id: '10:21:21', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '10:21:22', arabic: "تَمْكُرُونَ", transliteration: "tamkurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you plot", ur: "تم plot" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'موصول + صلة' }
      ],
    },
  },
  22: {
    text: "هُوَ ٱلَّذِى يُسَيِّرُكُمْ فِى ٱلْبَرِّ وَٱلْبَحْرِ ۖ حَتَّىٰٓ إِذَا كُنتُمْ فِى ٱلْفُلْكِ وَجَرَيْنَ بِهِم بِرِيحٍۢ طَيِّبَةٍۢ وَفَرِحُوا۟ بِهَا جَآءَتْهَا رِيحٌ عَاصِفٌۭ وَجَآءَهُمُ ٱلْمَوْجُ مِن كُلِّ مَكَانٍۢ وَظَنُّوٓا۟ أَنَّهُمْ أُحِيطَ بِهِمْ ۙ دَعَوُا۟ ٱللَّهَ مُخْلِصِينَ لَهُ ٱلدِّينَ لَئِنْ أَنجَيْتَنَا مِنْ هَـٰذِهِۦ لَنَكُونَنَّ مِنَ ٱلشَّـٰكِرِينَ",
    translation: {
      en: "",
      ur: "وہی تو ہے جو تم کو جنگل اور دریا میں چلنے پھرنے اور سیر کرنے کی توفیق دیتا ہے۔ یہاں تک کہ جب تم کشتیوں میں (سوار) ہوتے اور کشتیاں پاکیزہ ہوا (کے نرم نرم جھونکوں) سے سواروں کو لے کر چلنے لگتی ہیں اور وہ ان سے خوش ہوتے ہیں تو ناگہاں زناٹے کی ہوا چل پڑتی ہے اور لہریں ہر طرف سے ان پر (جوش مارتی ہوئی) آنے لگتی ہیں اور وہ خیال کرتے ہیں کہ (اب تو) لہروں میں گھر گئے تو اس وقت خالص خدا ہی کی عبادت کرکے اس سے دعا مانگنے لگتے ہیں کہ (اے خدا) اگر تو ہم کو اس سے نجات بخشے تو ہم (تیرے) بہت ہی شکر گزار ہوں",
    },
    words: [
      { id: '10:22:1', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '10:22:2', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '10:22:3', arabic: "يُسَيِّرُكُمْ", transliteration: "yusayyirukum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "enables you to travel", ur: "enables تم کو travel" } },
      { id: '10:22:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:22:5', arabic: "ٱلْبَرِّ", transliteration: "l-bari", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the land", ur: "the land" } },
      { id: '10:22:6', arabic: "وَٱلْبَحْرِ ۖ", transliteration: "wal-baḥri", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the sea", ur: "اور the sea" } },
      { id: '10:22:7', arabic: "حَتَّىٰٓ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '10:22:8', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '10:22:9', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '10:22:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:22:11', arabic: "ٱلْفُلْكِ", transliteration: "l-ful'ki", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ships", ur: "the ships" } },
      { id: '10:22:12', arabic: "وَجَرَيْنَ", transliteration: "wajarayna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they sail", ur: "اور وہ لوگ sail" } },
      { id: '10:22:13', arabic: "بِهِم", transliteration: "bihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '10:22:14', arabic: "بِرِيحٍۢ", transliteration: "birīḥin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with a wind", ur: "ساتھ a wind" } },
      { id: '10:22:15', arabic: "طَيِّبَةٍۢ", transliteration: "ṭayyibatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good", ur: "اچھا" } },
      { id: '10:22:16', arabic: "وَفَرِحُوا۟", transliteration: "wafariḥū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they rejoice", ur: "اور وہ لوگ rejoice" } },
      { id: '10:22:17', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '10:22:18', arabic: "جَآءَتْهَا", transliteration: "jāathā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "comes to it", ur: "comes کو it" } },
      { id: '10:22:19', arabic: "رِيحٌ", transliteration: "rīḥun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a wind", ur: "a wind" } },
      { id: '10:22:20', arabic: "عَاصِفٌۭ", transliteration: "ʿāṣifun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "stormy", ur: "stormy" } },
      { id: '10:22:21', arabic: "وَجَآءَهُمُ", transliteration: "wajāahumu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and comes to them", ur: "اور comes کو them" } },
      { id: '10:22:22', arabic: "ٱلْمَوْجُ", transliteration: "l-mawju", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the waves", ur: "the waves" } },
      { id: '10:22:23', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:22:24', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '10:22:25', arabic: "مَكَانٍۢ", transliteration: "makānin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "place", ur: "place" } },
      { id: '10:22:26', arabic: "وَظَنُّوٓا۟", transliteration: "waẓannū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they assume", ur: "اور وہ لوگ assume" } },
      { id: '10:22:27', arabic: "أَنَّهُمْ", transliteration: "annahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that they", ur: "وہ وہ لوگ" } },
      { id: '10:22:28', arabic: "أُحِيطَ", transliteration: "uḥīṭa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are surrounded", ur: "are surrounded" } },
      { id: '10:22:29', arabic: "بِهِمْ ۙ", transliteration: "bihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '10:22:30', arabic: "دَعَوُا۟", transliteration: "daʿawū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They call", ur: "وہ لوگ call" } },
      { id: '10:22:31', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:22:32', arabic: "مُخْلِصِينَ", transliteration: "mukh'liṣīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sincerely", ur: "sincerely" } },
      { id: '10:22:33', arabic: "لَهُ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to Him", ur: "کو Him" } },
      { id: '10:22:34', arabic: "ٱلدِّينَ", transliteration: "l-dīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) the religion", ur: "(میں) the religion" } },
      { id: '10:22:35', arabic: "لَئِنْ", transliteration: "la-in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(saying), \"If", ur: "(saying), \"If" } },
      { id: '10:22:36', arabic: "أَنجَيْتَنَا", transliteration: "anjaytanā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You save us", ur: "تم save us" } },
      { id: '10:22:37', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:22:38', arabic: "هَـٰذِهِۦ", transliteration: "hādhihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '10:22:39', arabic: "لَنَكُونَنَّ", transliteration: "lanakūnanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely we will be", ur: "یقیناً ہم will be" } },
      { id: '10:22:40', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '10:22:41', arabic: "ٱلشَّـٰكِرِينَ", transliteration: "l-shākirīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the thankful", ur: "the thankful" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'جار + مجرور' },
        { from: 23, to: 24, label: 'جار + مجرور' },
        { from: 30, to: 31, label: 'فعل + فاعل' },
        { from: 33, to: 34, label: 'مضاف + مضاف إليه' },
        { from: 37, to: 38, label: 'جار + مجرور' },
        { from: 39, to: 40, label: 'فعل + فاعل' },
        { from: 40, to: 41, label: 'موصوف + صفت' }
      ],
    },
  },
  23: {
    text: "فَلَمَّآ أَنجَىٰهُمْ إِذَا هُمْ يَبْغُونَ فِى ٱلْأَرْضِ بِغَيْرِ ٱلْحَقِّ ۗ يَـٰٓأَيُّهَا ٱلنَّاسُ إِنَّمَا بَغْيُكُمْ عَلَىٰٓ أَنفُسِكُم ۖ مَّتَـٰعَ ٱلْحَيَوٰةِ ٱلدُّنْيَا ۖ ثُمَّ إِلَيْنَا مَرْجِعُكُمْ فَنُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ",
    translation: {
      en: "",
      ur: "لیکن جب وہ ان کو نجات دے دیتا ہے تو ملک میں ناحق شرارت کرنے لگتے ہیں۔ لوگو! تمہاری شرارت کا وبال تمہاری ہی جانوں پر ہوگا تم دنیا کی زندگی کے فائدے اُٹھا لو۔ پھر تم کو ہمارے پاس لوٹ کر آنا ہے۔ اس وقت ہم تم کو بتائیں گے جو کچھ تم کیا کرتے تھے",
    },
    words: [
      { id: '10:23:1', arabic: "فَلَمَّآ", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But when", ur: "لیکن when" } },
      { id: '10:23:2', arabic: "أَنجَىٰهُمْ", transliteration: "anjāhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He saved them", ur: "وہ saved them" } },
      { id: '10:23:3', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "behold", ur: "behold" } },
      { id: '10:23:4', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "They", ur: "وہ لوگ" } },
      { id: '10:23:5', arabic: "يَبْغُونَ", transliteration: "yabghūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "rebel", ur: "rebel" } },
      { id: '10:23:6', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:23:7', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '10:23:8', arabic: "بِغَيْرِ", transliteration: "bighayri", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "without", ur: "without" } },
      { id: '10:23:9', arabic: "ٱلْحَقِّ ۗ", transliteration: "l-ḥaqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] right", ur: "[the] right" } },
      { id: '10:23:10', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O mankind", ur: "اے mankind" } },
      { id: '10:23:11', arabic: "ٱلنَّاسُ", transliteration: "l-nāsu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O mankind", ur: "اے mankind" } },
      { id: '10:23:12', arabic: "إِنَّمَا", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '10:23:13', arabic: "بَغْيُكُمْ", transliteration: "baghyukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your rebellion", ur: "your rebellion" } },
      { id: '10:23:14', arabic: "عَلَىٰٓ", transliteration: "ʿalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) against", ur: "(is) against" } },
      { id: '10:23:15', arabic: "أَنفُسِكُم ۖ", transliteration: "anfusikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "yourselves", ur: "yourselves" } },
      { id: '10:23:16', arabic: "مَّتَـٰعَ", transliteration: "matāʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) enjoyment", ur: "(the) enjoyment" } },
      { id: '10:23:17', arabic: "ٱلْحَيَوٰةِ", transliteration: "l-ḥayati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the life", ur: "(of) the زندگی" } },
      { id: '10:23:18', arabic: "ٱلدُّنْيَا ۖ", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the world", ur: "(of) the دنیا" } },
      { id: '10:23:19', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '10:23:20', arabic: "إِلَيْنَا", transliteration: "ilaynā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to Us", ur: "کو Us" } },
      { id: '10:23:21', arabic: "مَرْجِعُكُمْ", transliteration: "marjiʿukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) your return", ur: "(is) your return" } },
      { id: '10:23:22', arabic: "فَنُنَبِّئُكُم", transliteration: "fanunabbi-ukum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and We will inform you", ur: "اور ہم will inform تم" } },
      { id: '10:23:23', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '10:23:24', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you used (to)", ur: "تم used (کو)" } },
      { id: '10:23:25', arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "do", ur: "do" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  24: {
    text: "إِنَّمَا مَثَلُ ٱلْحَيَوٰةِ ٱلدُّنْيَا كَمَآءٍ أَنزَلْنَـٰهُ مِنَ ٱلسَّمَآءِ فَٱخْتَلَطَ بِهِۦ نَبَاتُ ٱلْأَرْضِ مِمَّا يَأْكُلُ ٱلنَّاسُ وَٱلْأَنْعَـٰمُ حَتَّىٰٓ إِذَآ أَخَذَتِ ٱلْأَرْضُ زُخْرُفَهَا وَٱزَّيَّنَتْ وَظَنَّ أَهْلُهَآ أَنَّهُمْ قَـٰدِرُونَ عَلَيْهَآ أَتَىٰهَآ أَمْرُنَا لَيْلًا أَوْ نَهَارًۭا فَجَعَلْنَـٰهَا حَصِيدًۭا كَأَن لَّمْ تَغْنَ بِٱلْأَمْسِ ۚ كَذَٰلِكَ نُفَصِّلُ ٱلْـَٔايَـٰتِ لِقَوْمٍۢ يَتَفَكَّرُونَ",
    translation: {
      en: "",
      ur: "دنیا کی زندگی کی مثال مینھہ کی سی ہے کہ ہم نے اس کو آسمان سے برسایا۔ پھر اس کے ساتھ سبزہ جسے آدمی اور جانور کھاتے ہیں مل کر نکلا یہاں تک کہ زمین سبزے سے خوشنما اور آراستہ ہوگئی اور زمین والوں نے خیال کیا کہ وہ اس پر پوری دسترس رکھتے ہیں ناگہاں رات کو یا دن کو ہمارا حکم (عذاب) آپہنچا تو ہم نے اس کو کاٹ (کر ایسا کر) ڈالا کہ گویا کل وہاں کچھ تھا ہی نہیں۔ جو لوگ غور کرنے والے ہیں۔ ان کے لیے ہم (اپنی قدرت کی) نشانیاں اسی طرح کھول کھول کر بیان کرتے ہیں",
    },
    words: [
      { id: '10:24:1', arabic: "إِنَّمَا", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '10:24:2', arabic: "مَثَلُ", transliteration: "mathalu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) example", ur: "(the) example" } },
      { id: '10:24:3', arabic: "ٱلْحَيَوٰةِ", transliteration: "l-ḥayati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the life", ur: "(of) the زندگی" } },
      { id: '10:24:4', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the world", ur: "(of) the دنیا" } },
      { id: '10:24:5', arabic: "كَمَآءٍ", transliteration: "kamāin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) like (the) water", ur: "(is) like (the) پانی" } },
      { id: '10:24:6', arabic: "أَنزَلْنَـٰهُ", transliteration: "anzalnāhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which We sent down", ur: "جو ہم sent down" } },
      { id: '10:24:7', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:24:8', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sky", ur: "the sky" } },
      { id: '10:24:9', arabic: "فَٱخْتَلَطَ", transliteration: "fa-ikh'talaṭa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so absorbs", ur: "so absorbs" } },
      { id: '10:24:10', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[with] it", ur: "[ساتھ] it" } },
      { id: '10:24:11', arabic: "نَبَاتُ", transliteration: "nabātu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(the) plants", ur: "(the) plants" } },
      { id: '10:24:12', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "(of) the earth", ur: "(of) زمین" } },
      { id: '10:24:13', arabic: "مِمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from which", ur: "سے جو" } },
      { id: '10:24:14', arabic: "يَأْكُلُ", transliteration: "yakulu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "eat", ur: "eat" } },
      { id: '10:24:15', arabic: "ٱلنَّاسُ", transliteration: "l-nāsu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the men", ur: "the men" } },
      { id: '10:24:16', arabic: "وَٱلْأَنْعَـٰمُ", transliteration: "wal-anʿāmu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the cattle", ur: "اور the cattle" } },
      { id: '10:24:17', arabic: "حَتَّىٰٓ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '10:24:18', arabic: "إِذَآ", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '10:24:19', arabic: "أَخَذَتِ", transliteration: "akhadhati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "takes", ur: "takes" } },
      { id: '10:24:20', arabic: "ٱلْأَرْضُ", transliteration: "l-arḍu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the earth", ur: "زمین" } },
      { id: '10:24:21', arabic: "زُخْرُفَهَا", transliteration: "zukh'rufahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its adornment", ur: "its adornment" } },
      { id: '10:24:22', arabic: "وَٱزَّيَّنَتْ", transliteration: "wa-izzayyanat", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and is beautified", ur: "اور is beautified" } },
      { id: '10:24:23', arabic: "وَظَنَّ", transliteration: "waẓanna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and think", ur: "اور think" } },
      { id: '10:24:24', arabic: "أَهْلُهَآ", transliteration: "ahluhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its people", ur: "its لوگ" } },
      { id: '10:24:25', arabic: "أَنَّهُمْ", transliteration: "annahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that they", ur: "وہ وہ لوگ" } },
      { id: '10:24:26', arabic: "قَـٰدِرُونَ", transliteration: "qādirūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "have the power", ur: "have the power" } },
      { id: '10:24:27', arabic: "عَلَيْهَآ", transliteration: "ʿalayhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over it", ur: "اوپر it" } },
      { id: '10:24:28', arabic: "أَتَىٰهَآ", transliteration: "atāhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "comes (to) it", ur: "comes (کو) it" } },
      { id: '10:24:29', arabic: "أَمْرُنَا", transliteration: "amrunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our command", ur: "Our command" } },
      { id: '10:24:30', arabic: "لَيْلًا", transliteration: "laylan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) night", ur: "(by) رات" } },
      { id: '10:24:31', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '10:24:32', arabic: "نَهَارًۭا", transliteration: "nahāran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(by) day", ur: "(by) دن" } },
      { id: '10:24:33', arabic: "فَجَعَلْنَـٰهَا", transliteration: "fajaʿalnāhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and We make it", ur: "اور ہم make it" } },
      { id: '10:24:34', arabic: "حَصِيدًۭا", transliteration: "ḥaṣīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a harvest clean-mown", ur: "a harvest clean-mown" } },
      { id: '10:24:35', arabic: "كَأَن", transliteration: "ka-an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "as if", ur: "as if" } },
      { id: '10:24:36', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '10:24:37', arabic: "تَغْنَ", transliteration: "taghna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "it had flourished", ur: "it had flourished" } },
      { id: '10:24:38', arabic: "بِٱلْأَمْسِ ۚ", transliteration: "bil-amsi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "yesterday", ur: "yesterday" } },
      { id: '10:24:39', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '10:24:40', arabic: "نُفَصِّلُ", transliteration: "nufaṣṣilu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We explain", ur: "ہم explain" } },
      { id: '10:24:41', arabic: "ٱلْـَٔايَـٰتِ", transliteration: "l-āyāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Signs", ur: "the نشانیاں" } },
      { id: '10:24:42', arabic: "لِقَوْمٍۢ", transliteration: "liqawmin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for a people", ur: "for a لوگ" } },
      { id: '10:24:43', arabic: "يَتَفَكَّرُونَ", transliteration: "yatafakkarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "who reflect", ur: "جو reflect" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'مضاف + مضاف إليه' },
        { from: 25, to: 26, label: 'مضاف + مضاف إليه' },
        { from: 38, to: 39, label: 'جار + مجرور' },
        { from: 40, to: 41, label: 'فعل + فاعل' }
      ],
    },
  },
  25: {
    text: "وَٱللَّهُ يَدْعُوٓا۟ إِلَىٰ دَارِ ٱلسَّلَـٰمِ وَيَهْدِى مَن يَشَآءُ إِلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ",
    translation: {
      en: "",
      ur: "اور خدا سلامتی کے گھر کی طرف بلاتا ہے۔ اور جس کو چاہتا ہے سیدھا راستہ دکھاتا ہے",
    },
    words: [
      { id: '10:25:1', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '10:25:2', arabic: "يَدْعُوٓا۟", transliteration: "yadʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "calls", ur: "calls" } },
      { id: '10:25:3', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '10:25:4', arabic: "دَارِ", transliteration: "dāri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Home", ur: "(the) Home" } },
      { id: '10:25:5', arabic: "ٱلسَّلَـٰمِ", transliteration: "l-salāmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Peace", ur: "(of) the Peace" } },
      { id: '10:25:6', arabic: "وَيَهْدِى", transliteration: "wayahdī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and guides", ur: "اور guides" } },
      { id: '10:25:7', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '10:25:8', arabic: "يَشَآءُ", transliteration: "yashāu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He wills", ur: "وہ wills" } },
      { id: '10:25:9', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '10:25:10', arabic: "صِرَٰطٍۢ", transliteration: "ṣirāṭin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) straight path", ur: "(the) سیدھا راستہ" } },
      { id: '10:25:11', arabic: "مُّسْتَقِيمٍۢ", transliteration: "mus'taqīmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) straight path", ur: "(the) سیدھا راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'موصول + صلة' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
  26: {
    text: "۞ لِّلَّذِينَ أَحْسَنُوا۟ ٱلْحُسْنَىٰ وَزِيَادَةٌۭ ۖ وَلَا يَرْهَقُ وُجُوهَهُمْ قَتَرٌۭ وَلَا ذِلَّةٌ ۚ أُو۟لَـٰٓئِكَ أَصْحَـٰبُ ٱلْجَنَّةِ ۖ هُمْ فِيهَا خَـٰلِدُونَ",
    translation: {
      en: "",
      ur: "جن لوگوں نے نیکو کاری کی ان کے لیے بھلائی ہے اور (مزید برآں) اور بھی اور ان کے مونہوں پر نہ تو سیاہی چھائے گی اور نہ رسوائی۔ یہی جنتی ہیں کہ اس میں ہمیشہ رہیں گے",
    },
    words: [
      { id: '10:26:1', arabic: "۞ لِّلَّذِينَ", transliteration: "lilladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For those who", ur: "For جو لوگ" } },
      { id: '10:26:2', arabic: "أَحْسَنُوا۟", transliteration: "aḥsanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "do good", ur: "do اچھا" } },
      { id: '10:26:3', arabic: "ٱلْحُسْنَىٰ", transliteration: "l-ḥus'nā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the best", ur: "(is) the best" } },
      { id: '10:26:4', arabic: "وَزِيَادَةٌۭ ۖ", transliteration: "waziyādatun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and more", ur: "اور more" } },
      { id: '10:26:5', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '10:26:6', arabic: "يَرْهَقُ", transliteration: "yarhaqu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will) cover", ur: "(will) cover" } },
      { id: '10:26:7', arabic: "وُجُوهَهُمْ", transliteration: "wujūhahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their faces", ur: "their faces" } },
      { id: '10:26:8', arabic: "قَتَرٌۭ", transliteration: "qatarun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "dust", ur: "dust" } },
      { id: '10:26:9', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:26:10', arabic: "ذِلَّةٌ ۚ", transliteration: "dhillatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "humiliation", ur: "humiliation" } },
      { id: '10:26:11', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those", ur: "Those" } },
      { id: '10:26:12', arabic: "أَصْحَـٰبُ", transliteration: "aṣḥābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are the) companions", ur: "(are the) companions" } },
      { id: '10:26:13', arabic: "ٱلْجَنَّةِ ۖ", transliteration: "l-janati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Paradise", ur: "(of) جنت" } },
      { id: '10:26:14', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '10:26:15', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '10:26:16', arabic: "خَـٰلِدُونَ", transliteration: "khālidūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(will) abide forever", ur: "(will) abide forever" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  27: {
    text: "وَٱلَّذِينَ كَسَبُوا۟ ٱلسَّيِّـَٔاتِ جَزَآءُ سَيِّئَةٍۭ بِمِثْلِهَا وَتَرْهَقُهُمْ ذِلَّةٌۭ ۖ مَّا لَهُم مِّنَ ٱللَّهِ مِنْ عَاصِمٍۢ ۖ كَأَنَّمَآ أُغْشِيَتْ وُجُوهُهُمْ قِطَعًۭا مِّنَ ٱلَّيْلِ مُظْلِمًا ۚ أُو۟لَـٰٓئِكَ أَصْحَـٰبُ ٱلنَّارِ ۖ هُمْ فِيهَا خَـٰلِدُونَ",
    translation: {
      en: "",
      ur: "اور جنہوں نے برے کام کئے تو برائی کا بدلہ ویسا ہی ہوگا۔ اور ان کے مونہوں پر ذلت چھا جائے گی۔ اور کوئی ان کو خدا سے بچانے والا نہ ہوگا۔ ان کے مونہوں (کی سیاہی کا یہ عالم ہوگا کہ ان) پر گویا اندھیری رات کے ٹکڑے اُڑھا دیئے گئے ہیں۔ یہی دوزخی ہیں کہ ہمیشہ اس میں رہیں گے",
    },
    words: [
      { id: '10:27:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '10:27:2', arabic: "كَسَبُوا۟", transliteration: "kasabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "earned", ur: "earned" } },
      { id: '10:27:3', arabic: "ٱلسَّيِّـَٔاتِ", transliteration: "l-sayiāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the evil deeds", ur: "the برا deeds" } },
      { id: '10:27:4', arabic: "جَزَآءُ", transliteration: "jazāu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) recompense", ur: "(the) recompense" } },
      { id: '10:27:5', arabic: "سَيِّئَةٍۭ", transliteration: "sayyi-atin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(of) an evil deed", ur: "(of) an برا deed" } },
      { id: '10:27:6', arabic: "بِمِثْلِهَا", transliteration: "bimith'lihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) like it", ur: "(is) like it" } },
      { id: '10:27:7', arabic: "وَتَرْهَقُهُمْ", transliteration: "watarhaquhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (will) cover them", ur: "اور (will) cover them" } },
      { id: '10:27:8', arabic: "ذِلَّةٌۭ ۖ", transliteration: "dhillatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "humiliation", ur: "humiliation" } },
      { id: '10:27:9', arabic: "مَّا", transliteration: "mā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They will not have", ur: "وہ لوگ will نہیں have" } },
      { id: '10:27:10', arabic: "لَهُم", transliteration: "lahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They will not have", ur: "وہ لوگ will نہیں have" } },
      { id: '10:27:11', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:27:12', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:27:13', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '10:27:14', arabic: "عَاصِمٍۢ ۖ", transliteration: "ʿāṣimin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "defender", ur: "defender" } },
      { id: '10:27:15', arabic: "كَأَنَّمَآ", transliteration: "ka-annamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "As if", ur: "As if" } },
      { id: '10:27:16', arabic: "أُغْشِيَتْ", transliteration: "ugh'shiyat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "had been covered", ur: "had been covered" } },
      { id: '10:27:17', arabic: "وُجُوهُهُمْ", transliteration: "wujūhuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their faces", ur: "their faces" } },
      { id: '10:27:18', arabic: "قِطَعًۭا", transliteration: "qiṭaʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) pieces", ur: "(ساتھ) pieces" } },
      { id: '10:27:19', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:27:20', arabic: "ٱلَّيْلِ", transliteration: "al-layli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the darkness (of) night", ur: "the darkness (of) رات" } },
      { id: '10:27:21', arabic: "مُظْلِمًا ۚ", transliteration: "muẓ'liman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the darkness (of) night", ur: "the darkness (of) رات" } },
      { id: '10:27:22', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those", ur: "Those" } },
      { id: '10:27:23', arabic: "أَصْحَـٰبُ", transliteration: "aṣḥābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are the) companions", ur: "(are the) companions" } },
      { id: '10:27:24', arabic: "ٱلنَّارِ ۖ", transliteration: "l-nāri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Fire", ur: "(of) the آگ" } },
      { id: '10:27:25', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '10:27:26', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '10:27:27', arabic: "خَـٰلِدُونَ", transliteration: "khālidūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(will) abide forever", ur: "(will) abide forever" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'مضاف + مضاف إليه' },
        { from: 20, to: 21, label: 'مضاف + مضاف إليه' },
        { from: 23, to: 24, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  28: {
    text: "وَيَوْمَ نَحْشُرُهُمْ جَمِيعًۭا ثُمَّ نَقُولُ لِلَّذِينَ أَشْرَكُوا۟ مَكَانَكُمْ أَنتُمْ وَشُرَكَآؤُكُمْ ۚ فَزَيَّلْنَا بَيْنَهُمْ ۖ وَقَالَ شُرَكَآؤُهُم مَّا كُنتُمْ إِيَّانَا تَعْبُدُونَ",
    translation: {
      en: "",
      ur: "اور جس دن ہم ان سب کو جمع کریں گے پھر مشرکوں سے کہیں گے کہ تم اور تمہارے شریک اپنی اپنی جگہ ٹھہرے رہو۔ تو ہم ان میں تفرقہ ڈال دیں گے اور ان کے شریک (ان سے) کہیں گے کہ تم ہم کو نہیں پوجا کرتے تھے",
    },
    words: [
      { id: '10:28:1', arabic: "وَيَوْمَ", transliteration: "wayawma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ي و م", meaning: { en: "And (the) Day", ur: "اور (the) دن" } },
      { id: '10:28:2', arabic: "نَحْشُرُهُمْ", transliteration: "naḥshuruhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will gather them", ur: "ہم will gather them" } },
      { id: '10:28:3', arabic: "جَمِيعًۭا", transliteration: "jamīʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all together", ur: "سب together" } },
      { id: '10:28:4', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '10:28:5', arabic: "نَقُولُ", transliteration: "naqūlu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will say", ur: "ہم will کہو" } },
      { id: '10:28:6', arabic: "لِلَّذِينَ", transliteration: "lilladhīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to those who", ur: "کو جو لوگ" } },
      { id: '10:28:7', arabic: "أَشْرَكُوا۟", transliteration: "ashrakū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "associate partners (with Allah)", ur: "associate partners (ساتھ اللہ)" } },
      { id: '10:28:8', arabic: "مَكَانَكُمْ", transliteration: "makānakum", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "(Remain in) your place", ur: "(Remain میں) your place" } },
      { id: '10:28:9', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '10:28:10', arabic: "وَشُرَكَآؤُكُمْ ۚ", transliteration: "washurakāukum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your partners", ur: "اور your partners" } },
      { id: '10:28:11', arabic: "فَزَيَّلْنَا", transliteration: "fazayyalnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then We will separate", ur: "پھر ہم will separate" } },
      { id: '10:28:12', arabic: "بَيْنَهُمْ ۖ", transliteration: "baynahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[between] them", ur: "[درمیان] them" } },
      { id: '10:28:13', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and (will) say", ur: "اور (will) کہو" } },
      { id: '10:28:14', arabic: "شُرَكَآؤُهُم", transliteration: "shurakāuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their partners", ur: "their partners" } },
      { id: '10:28:15', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '10:28:16', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you used (to)", ur: "تم used (کو)" } },
      { id: '10:28:17', arabic: "إِيَّانَا", transliteration: "iyyānā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "worship us", ur: "عبادت us" } },
      { id: '10:28:18', arabic: "تَعْبُدُونَ", transliteration: "taʿbudūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "worship us", ur: "عبادت us" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'فعل + فاعل' }
      ],
    },
  },
  29: {
    text: "فَكَفَىٰ بِٱللَّهِ شَهِيدًۢا بَيْنَنَا وَبَيْنَكُمْ إِن كُنَّا عَنْ عِبَادَتِكُمْ لَغَـٰفِلِينَ",
    translation: {
      en: "",
      ur: "ہمارے اور تمہارے درمیان خدا ہی گواہ کافی ہے۔ ہم تمہاری پرستش سے بالکل بےخبر تھے",
    },
    words: [
      { id: '10:29:1', arabic: "فَكَفَىٰ", transliteration: "fakafā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So sufficient", ur: "So sufficient" } },
      { id: '10:29:2', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) Allah", ur: "(is) اللہ" } },
      { id: '10:29:3', arabic: "شَهِيدًۢا", transliteration: "shahīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a witness", ur: "(as) a witness" } },
      { id: '10:29:4', arabic: "بَيْنَنَا", transliteration: "baynanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between us", ur: "درمیان us" } },
      { id: '10:29:5', arabic: "وَبَيْنَكُمْ", transliteration: "wabaynakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and between you", ur: "اور درمیان تم" } },
      { id: '10:29:6', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '10:29:7', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we were", ur: "ہم were" } },
      { id: '10:29:8', arabic: "عَنْ", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:29:9', arabic: "عِبَادَتِكُمْ", transliteration: "ʿibādatikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your worship", ur: "your عبادت" } },
      { id: '10:29:10', arabic: "لَغَـٰفِلِينَ", transliteration: "laghāfilīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "certainly unaware", ur: "certainly unaware" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  30: {
    text: "هُنَالِكَ تَبْلُوا۟ كُلُّ نَفْسٍۢ مَّآ أَسْلَفَتْ ۚ وَرُدُّوٓا۟ إِلَى ٱللَّهِ مَوْلَىٰهُمُ ٱلْحَقِّ ۖ وَضَلَّ عَنْهُم مَّا كَانُوا۟ يَفْتَرُونَ",
    translation: {
      en: "",
      ur: "وہاں ہر شخص (اپنے اعمال کی) جو اس نے آگے بھیجے ہوں گے آزمائش کرلے گا اور وہ اپنے سچے مالک کی طرف لوٹائے جائیں گے اور جو کچھ وہ بہتان باندھا کرتے تھے سب ان سے جاتا رہے گا",
    },
    words: [
      { id: '10:30:1', arabic: "هُنَالِكَ", transliteration: "hunālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "There", ur: "There" } },
      { id: '10:30:2', arabic: "تَبْلُوا۟", transliteration: "tablū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be put to trial", ur: "will be put کو trial" } },
      { id: '10:30:3', arabic: "كُلُّ", transliteration: "kullu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '10:30:4', arabic: "نَفْسٍۢ", transliteration: "nafsin", pos: ['V'], posLabel: 'V', root: "ن ف س", meaning: { en: "soul", ur: "روح" } },
      { id: '10:30:5', arabic: "مَّآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for) what", ur: "(for) کیا" } },
      { id: '10:30:6', arabic: "أَسْلَفَتْ ۚ", transliteration: "aslafat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it did previously", ur: "it did previously" } },
      { id: '10:30:7', arabic: "وَرُدُّوٓا۟", transliteration: "waruddū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they will be returned", ur: "اور وہ لوگ will be returned" } },
      { id: '10:30:8', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '10:30:9', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:30:10', arabic: "مَوْلَىٰهُمُ", transliteration: "mawlāhumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their Lord", ur: "their رب" } },
      { id: '10:30:11', arabic: "ٱلْحَقِّ ۖ", transliteration: "l-ḥaqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the true", ur: "the true" } },
      { id: '10:30:12', arabic: "وَضَلَّ", transliteration: "waḍalla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and will be lost", ur: "اور will be lost" } },
      { id: '10:30:13', arabic: "عَنْهُم", transliteration: "ʿanhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '10:30:14', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '10:30:15', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used (to)", ur: "وہ لوگ used (کو)" } },
      { id: '10:30:16', arabic: "يَفْتَرُونَ", transliteration: "yaftarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "invent", ur: "invent" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  31: {
    text: "قُلْ مَن يَرْزُقُكُم مِّنَ ٱلسَّمَآءِ وَٱلْأَرْضِ أَمَّن يَمْلِكُ ٱلسَّمْعَ وَٱلْأَبْصَـٰرَ وَمَن يُخْرِجُ ٱلْحَىَّ مِنَ ٱلْمَيِّتِ وَيُخْرِجُ ٱلْمَيِّتَ مِنَ ٱلْحَىِّ وَمَن يُدَبِّرُ ٱلْأَمْرَ ۚ فَسَيَقُولُونَ ٱللَّهُ ۚ فَقُلْ أَفَلَا تَتَّقُونَ",
    translation: {
      en: "",
      ur: "(ان سے) پوچھو کہ تم کو آسمان اور زمین میں رزق کون دیتا ہے یا (تمہارے) کانوں اور آنکھوں کا مالک کون ہے اور بےجان سے جاندار کون پیدا کرتا ہے اور دنیا کے کاموں کا انتظام کون کرتا ہے۔ جھٹ کہہ دیں گے کہ خدا۔ تو کہو کہ پھر تم (خدا سے) ڈرتے کیوں نہیں؟",
    },
    words: [
      { id: '10:31:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '10:31:2', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "Who", ur: "جو" } },
      { id: '10:31:3', arabic: "يَرْزُقُكُم", transliteration: "yarzuqukum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "provides for you", ur: "provides for تم" } },
      { id: '10:31:4', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:31:5', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sky", ur: "the sky" } },
      { id: '10:31:6', arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '10:31:7', arabic: "أَمَّن", transliteration: "amman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Or who", ur: "یا جو" } },
      { id: '10:31:8', arabic: "يَمْلِكُ", transliteration: "yamliku", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "controls", ur: "controls" } },
      { id: '10:31:9', arabic: "ٱلسَّمْعَ", transliteration: "l-samʿa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the hearing", ur: "the hearing" } },
      { id: '10:31:10', arabic: "وَٱلْأَبْصَـٰرَ", transliteration: "wal-abṣāra", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the sight", ur: "اور the sight" } },
      { id: '10:31:11', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And who", ur: "اور جو" } },
      { id: '10:31:12', arabic: "يُخْرِجُ", transliteration: "yukh'riju", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "brings out", ur: "brings out" } },
      { id: '10:31:13', arabic: "ٱلْحَىَّ", transliteration: "l-ḥaya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the living", ur: "the living" } },
      { id: '10:31:14', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:31:15', arabic: "ٱلْمَيِّتِ", transliteration: "l-mayiti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the dead", ur: "the dead" } },
      { id: '10:31:16', arabic: "وَيُخْرِجُ", transliteration: "wayukh'riju", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and brings forth", ur: "اور brings forth" } },
      { id: '10:31:17', arabic: "ٱلْمَيِّتَ", transliteration: "l-mayita", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the dead", ur: "the dead" } },
      { id: '10:31:18', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:31:19', arabic: "ٱلْحَىِّ", transliteration: "l-ḥayi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the living", ur: "the living" } },
      { id: '10:31:20', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And who", ur: "اور جو" } },
      { id: '10:31:21', arabic: "يُدَبِّرُ", transliteration: "yudabbiru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "disposes", ur: "disposes" } },
      { id: '10:31:22', arabic: "ٱلْأَمْرَ ۚ", transliteration: "l-amra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the affairs", ur: "the affairs" } },
      { id: '10:31:23', arabic: "فَسَيَقُولُونَ", transliteration: "fasayaqūlūna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ق و ل", meaning: { en: "Then they will say", ur: "پھر وہ لوگ will کہو" } },
      { id: '10:31:24', arabic: "ٱللَّهُ ۚ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:31:25', arabic: "فَقُلْ", transliteration: "faqul", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ق و ل", meaning: { en: "Then say", ur: "پھر کہو" } },
      { id: '10:31:26', arabic: "أَفَلَا", transliteration: "afalā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Then will not", ur: "پھر will نہیں" } },
      { id: '10:31:27', arabic: "تَتَّقُونَ", transliteration: "tattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you fear (Him)", ur: "تم ڈرنا (Him)" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
        { from: 21, to: 22, label: 'فعل + فاعل' }
      ],
    },
  },
  32: {
    text: "فَذَٰلِكُمُ ٱللَّهُ رَبُّكُمُ ٱلْحَقُّ ۖ فَمَاذَا بَعْدَ ٱلْحَقِّ إِلَّا ٱلضَّلَـٰلُ ۖ فَأَنَّىٰ تُصْرَفُونَ",
    translation: {
      en: "",
      ur: "یہی خدا تو تمہارا پروردگار برحق ہے۔ اور حق بات کے ظاہر ہونے کے بعد گمراہی کے سوا ہے ہی کیا؟ تو تم کہاں پھرے جاتے ہو",
    },
    words: [
      { id: '10:32:1', arabic: "فَذَٰلِكُمُ", transliteration: "fadhālikumu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "For that", ur: "For وہ" } },
      { id: '10:32:2', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Allah", ur: "(is) اللہ" } },
      { id: '10:32:3', arabic: "رَبُّكُمُ", transliteration: "rabbukumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '10:32:4', arabic: "ٱلْحَقُّ ۖ", transliteration: "l-ḥaqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the true", ur: "the true" } },
      { id: '10:32:5', arabic: "فَمَاذَا", transliteration: "famādhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So what (can be)", ur: "So کیا (can be)" } },
      { id: '10:32:6', arabic: "بَعْدَ", transliteration: "baʿda", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '10:32:7', arabic: "ٱلْحَقِّ", transliteration: "l-ḥaqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '10:32:8', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '10:32:9', arabic: "ٱلضَّلَـٰلُ ۖ", transliteration: "l-ḍalālu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the error", ur: "the error" } },
      { id: '10:32:10', arabic: "فَأَنَّىٰ", transliteration: "fa-annā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So how", ur: "So how" } },
      { id: '10:32:11', arabic: "تُصْرَفُونَ", transliteration: "tuṣ'rafūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) you turned away", ur: "(are) تم turned away" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  33: {
    text: "كَذَٰلِكَ حَقَّتْ كَلِمَتُ رَبِّكَ عَلَى ٱلَّذِينَ فَسَقُوٓا۟ أَنَّهُمْ لَا يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "اسی طرح خدا کا ارشاد ان نافرمانوں کے حق میں ثابت ہو کر رہا کہ یہ ایمان نہیں لائیں گے",
    },
    words: [
      { id: '10:33:1', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '10:33:2', arabic: "حَقَّتْ", transliteration: "ḥaqqat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) proved true", ur: "(is) proved true" } },
      { id: '10:33:3', arabic: "كَلِمَتُ", transliteration: "kalimatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Word", ur: "(the) Word" } },
      { id: '10:33:4', arabic: "رَبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) your Lord", ur: "(of) your رب" } },
      { id: '10:33:5', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "upon", ur: "پر" } },
      { id: '10:33:6', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '10:33:7', arabic: "فَسَقُوٓا۟", transliteration: "fasaqū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "defiantly disobeyed", ur: "defiantly disobeyed" } },
      { id: '10:33:8', arabic: "أَنَّهُمْ", transliteration: "annahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that they", ur: "وہ وہ لوگ" } },
      { id: '10:33:9', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(will) not", ur: "(will) نہیں" } },
      { id: '10:33:10', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "believe", ur: "ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'نفی + فعل' }
      ],
    },
  },
  34: {
    text: "قُلْ هَلْ مِن شُرَكَآئِكُم مَّن يَبْدَؤُا۟ ٱلْخَلْقَ ثُمَّ يُعِيدُهُۥ ۚ قُلِ ٱللَّهُ يَبْدَؤُا۟ ٱلْخَلْقَ ثُمَّ يُعِيدُهُۥ ۖ فَأَنَّىٰ تُؤْفَكُونَ",
    translation: {
      en: "",
      ur: "(ان سے) پوچھو کہ بھلا تمھارے شریکوں میں سے کوئی ایسا ہے کہ مخلوق کو ابتداً پیدا کرے (اور) پھر اس کو دوبارہ بنائے؟ کہہ دو کہ خدا ہی پہلی بار پیدا کرتا ہے پھر وہی اس کو دوبارہ پیدا کرے گا تو تم کہاں اُکسے جارہے ہو",
    },
    words: [
      { id: '10:34:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '10:34:2', arabic: "هَلْ", transliteration: "hal", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Is (there)", ur: "Is (there)" } },
      { id: '10:34:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:34:4', arabic: "شُرَكَآئِكُم", transliteration: "shurakāikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your partners", ur: "your partners" } },
      { id: '10:34:5', arabic: "مَّن", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(any) who", ur: "(any) جو" } },
      { id: '10:34:6', arabic: "يَبْدَؤُا۟", transliteration: "yabda-u", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "originates", ur: "originates" } },
      { id: '10:34:7', arabic: "ٱلْخَلْقَ", transliteration: "l-khalqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the creation", ur: "the تخلیق" } },
      { id: '10:34:8', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '10:34:9', arabic: "يُعِيدُهُۥ ۚ", transliteration: "yuʿīduhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "repeats it", ur: "repeats it" } },
      { id: '10:34:10', arabic: "قُلِ", transliteration: "quli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '10:34:11', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:34:12', arabic: "يَبْدَؤُا۟", transliteration: "yabda-u", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "originates", ur: "originates" } },
      { id: '10:34:13', arabic: "ٱلْخَلْقَ", transliteration: "l-khalqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the creation", ur: "the تخلیق" } },
      { id: '10:34:14', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '10:34:15', arabic: "يُعِيدُهُۥ ۖ", transliteration: "yuʿīduhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "repeats it", ur: "repeats it" } },
      { id: '10:34:16', arabic: "فَأَنَّىٰ", transliteration: "fa-annā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So how", ur: "So how" } },
      { id: '10:34:17', arabic: "تُؤْفَكُونَ", transliteration: "tu'fakūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are deluded", ur: "تم are deluded" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  35: {
    text: "قُلْ هَلْ مِن شُرَكَآئِكُم مَّن يَهْدِىٓ إِلَى ٱلْحَقِّ ۚ قُلِ ٱللَّهُ يَهْدِى لِلْحَقِّ ۗ أَفَمَن يَهْدِىٓ إِلَى ٱلْحَقِّ أَحَقُّ أَن يُتَّبَعَ أَمَّن لَّا يَهِدِّىٓ إِلَّآ أَن يُهْدَىٰ ۖ فَمَا لَكُمْ كَيْفَ تَحْكُمُونَ",
    translation: {
      en: "",
      ur: "پوچھو کہ بھلا تمہارے شریکوں میں کون ایسا ہے کہ حق کا رستہ دکھائے۔ کہہ دو کہ خدا ہی حق کا رستہ دکھاتا ہے۔ بھلا جو حق کا رستہ دکھائے وہ اس قابل ہے کہ اُس کی پیروی کی جائے یا وہ کہ جب تک کوئی اسے رستہ نہ بتائے رستہ نہ پائے۔ تو تم کو کیا ہوا ہے کیسا انصاف کرتے ہو؟",
    },
    words: [
      { id: '10:35:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '10:35:2', arabic: "هَلْ", transliteration: "hal", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Is (there)", ur: "Is (there)" } },
      { id: '10:35:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:35:4', arabic: "شُرَكَآئِكُم", transliteration: "shurakāikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your partners", ur: "your partners" } },
      { id: '10:35:5', arabic: "مَّن", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(any) who", ur: "(any) جو" } },
      { id: '10:35:6', arabic: "يَهْدِىٓ", transliteration: "yahdī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "guides", ur: "guides" } },
      { id: '10:35:7', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '10:35:8', arabic: "ٱلْحَقِّ ۚ", transliteration: "l-ḥaqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '10:35:9', arabic: "قُلِ", transliteration: "quli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '10:35:10', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:35:11', arabic: "يَهْدِى", transliteration: "yahdī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "guides", ur: "guides" } },
      { id: '10:35:12', arabic: "لِلْحَقِّ ۗ", transliteration: "lil'ḥaqqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the truth", ur: "کو the سچ" } },
      { id: '10:35:13', arabic: "أَفَمَن", transliteration: "afaman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is then (he) who", ur: "Is پھر (وہ) جو" } },
      { id: '10:35:14', arabic: "يَهْدِىٓ", transliteration: "yahdī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "guides", ur: "guides" } },
      { id: '10:35:15', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '10:35:16', arabic: "ٱلْحَقِّ", transliteration: "l-ḥaqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '10:35:17', arabic: "أَحَقُّ", transliteration: "aḥaqqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "more worthy", ur: "more worthy" } },
      { id: '10:35:18', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '10:35:19', arabic: "يُتَّبَعَ", transliteration: "yuttabaʿa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he should be followed", ur: "وہ should be followed" } },
      { id: '10:35:20', arabic: "أَمَّن", transliteration: "amman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "or (he) who", ur: "یا (وہ) جو" } },
      { id: '10:35:21', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '10:35:22', arabic: "يَهِدِّىٓ", transliteration: "yahiddī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "guide", ur: "guide" } },
      { id: '10:35:23', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "unless", ur: "unless" } },
      { id: '10:35:24', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '10:35:25', arabic: "يُهْدَىٰ ۖ", transliteration: "yuh'dā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he is guided", ur: "وہ is guided" } },
      { id: '10:35:26', arabic: "فَمَا", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then what", ur: "پھر کیا" } },
      { id: '10:35:27', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) for you", ur: "(is) for تم" } },
      { id: '10:35:28', arabic: "كَيْفَ", transliteration: "kayfa", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "how", ur: "how" } },
      { id: '10:35:29', arabic: "تَحْكُمُونَ", transliteration: "taḥkumūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you judge", ur: "تم judge" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'فعل + فاعل' }
      ],
    },
  },
  36: {
    text: "وَمَا يَتَّبِعُ أَكْثَرُهُمْ إِلَّا ظَنًّا ۚ إِنَّ ٱلظَّنَّ لَا يُغْنِى مِنَ ٱلْحَقِّ شَيْـًٔا ۚ إِنَّ ٱللَّهَ عَلِيمٌۢ بِمَا يَفْعَلُونَ",
    translation: {
      en: "",
      ur: "اور ان میں سے اکثر صرف ظن کی پیروی کرتے ہیں۔ اور کچھ شک نہیں کہ ظن حق کے مقابلے میں کچھ بھی کارآمد نہیں ہوسکتا۔ بےشک خدا تمہارے (سب) افعال سے واقف ہے",
    },
    words: [
      { id: '10:36:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '10:36:2', arabic: "يَتَّبِعُ", transliteration: "yattabiʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "follow", ur: "follow" } },
      { id: '10:36:3', arabic: "أَكْثَرُهُمْ", transliteration: "aktharuhum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '10:36:4', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '10:36:5', arabic: "ظَنًّا ۚ", transliteration: "ẓannan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "assumption", ur: "assumption" } },
      { id: '10:36:6', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '10:36:7', arabic: "ٱلظَّنَّ", transliteration: "l-ẓana", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the assumption", ur: "the assumption" } },
      { id: '10:36:8', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '10:36:9', arabic: "يُغْنِى", transliteration: "yugh'nī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "avail", ur: "avail" } },
      { id: '10:36:10', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against", ur: "against" } },
      { id: '10:36:11', arabic: "ٱلْحَقِّ", transliteration: "l-ḥaqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '10:36:12', arabic: "شَيْـًٔا ۚ", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } },
      { id: '10:36:13', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '10:36:14', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:36:15', arabic: "عَلِيمٌۢ", transliteration: "ʿalīmun", pos: ['ADJ'], posLabel: 'ADJ', root: "ع ل م", meaning: { en: "(is) All-Knower", ur: "(is) سب-Knower" } },
      { id: '10:36:16', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '10:36:17', arabic: "يَفْعَلُونَ", transliteration: "yafʿalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they do", ur: "وہ لوگ do" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'نفی + فعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'موصوف + صفت' }
      ],
    },
  },
  37: {
    text: "وَمَا كَانَ هَـٰذَا ٱلْقُرْءَانُ أَن يُفْتَرَىٰ مِن دُونِ ٱللَّهِ وَلَـٰكِن تَصْدِيقَ ٱلَّذِى بَيْنَ يَدَيْهِ وَتَفْصِيلَ ٱلْكِتَـٰبِ لَا رَيْبَ فِيهِ مِن رَّبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "اور یہ قرآن ایسا نہیں کہ خدا کے سوا کوئی اس کو اپنی طرف سے بنا لائے۔ ہاں (ہاں یہ خدا کا کلام ہے) جو (کتابیں) اس سے پہلے (کی) ہیں۔ ان کی تصدیق کرتا ہے اور ان ہی کتابوں کی (اس میں) تفصیل ہے اس میں کچھ شک نہیں (کہ) یہ رب العالمین کی طرف سے (نازل ہوا) ہے",
    },
    words: [
      { id: '10:37:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '10:37:2', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '10:37:3', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '10:37:4', arabic: "ٱلْقُرْءَانُ", transliteration: "l-qur'ānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Quran", ur: "the Quran" } },
      { id: '10:37:5', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '10:37:6', arabic: "يُفْتَرَىٰ", transliteration: "yuf'tarā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(it could be) produced", ur: "(it could be) produced" } },
      { id: '10:37:7', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "by", ur: "by" } },
      { id: '10:37:8', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "other than Allah", ur: "other than اللہ" } },
      { id: '10:37:9', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than Allah", ur: "other than اللہ" } },
      { id: '10:37:10', arabic: "وَلَـٰكِن", transliteration: "walākin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '10:37:11', arabic: "تَصْدِيقَ", transliteration: "taṣdīqa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(it is) a confirmation", ur: "(it is) a confirmation" } },
      { id: '10:37:12', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of that) which", ur: "(of وہ) جو" } },
      { id: '10:37:13', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) before it", ur: "(was) پہلے it" } },
      { id: '10:37:14', arabic: "يَدَيْهِ", transliteration: "yadayhi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(was) before it", ur: "(was) پہلے it" } },
      { id: '10:37:15', arabic: "وَتَفْصِيلَ", transliteration: "watafṣīla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a detailed explanation", ur: "اور a detailed explanation" } },
      { id: '10:37:16', arabic: "ٱلْكِتَـٰبِ", transliteration: "l-kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Book", ur: "(of) the کتاب" } },
      { id: '10:37:17', arabic: "لَا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(there is) no", ur: "(there is) نہیں" } },
      { id: '10:37:18', arabic: "رَيْبَ", transliteration: "rayba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "doubt", ur: "doubt" } },
      { id: '10:37:19', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '10:37:20', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:37:21', arabic: "رَّبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Lord", ur: "(the) رب" } },
      { id: '10:37:22', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  38: {
    text: "أَمْ يَقُولُونَ ٱفْتَرَىٰهُ ۖ قُلْ فَأْتُوا۟ بِسُورَةٍۢ مِّثْلِهِۦ وَٱدْعُوا۟ مَنِ ٱسْتَطَعْتُم مِّن دُونِ ٱللَّهِ إِن كُنتُمْ صَـٰدِقِينَ",
    translation: {
      en: "",
      ur: "کیا یہ لوگ کہتے ہیں کہ پیغمبر نے اس کو اپنی طرف سے بنا لیا ہے کہہ دو کہ اگر سچے ہو تو تم بھی اس طرح کی ایک سورت بنا لاؤ اور خدا کے سوا جن کو تم بلا سکو بلا بھی لو",
    },
    words: [
      { id: '10:38:1', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Or", ur: "یا" } },
      { id: '10:38:2', arabic: "يَقُولُونَ", transliteration: "yaqūlūna", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "(do) they say", ur: "(do) وہ لوگ کہو" } },
      { id: '10:38:3', arabic: "ٱفْتَرَىٰهُ ۖ", transliteration: "if'tarāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He has invented it", ur: "وہ has invented it" } },
      { id: '10:38:4', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '10:38:5', arabic: "فَأْتُوا۟", transliteration: "fatū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then bring", ur: "پھر bring" } },
      { id: '10:38:6', arabic: "بِسُورَةٍۢ", transliteration: "bisūratin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "a Surah", ur: "a Surah" } },
      { id: '10:38:7', arabic: "مِّثْلِهِۦ", transliteration: "mith'lihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like it", ur: "like it" } },
      { id: '10:38:8', arabic: "وَٱدْعُوا۟", transliteration: "wa-id'ʿū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and call", ur: "اور call" } },
      { id: '10:38:9', arabic: "مَنِ", transliteration: "mani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "whoever", ur: "whoever" } },
      { id: '10:38:10', arabic: "ٱسْتَطَعْتُم", transliteration: "is'taṭaʿtum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you can", ur: "تم can" } },
      { id: '10:38:11', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '10:38:12', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '10:38:13', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '10:38:14', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '10:38:15', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '10:38:16', arabic: "صَـٰدِقِينَ", transliteration: "ṣādiqīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "truthful", ur: "truthful" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  39: {
    text: "بَلْ كَذَّبُوا۟ بِمَا لَمْ يُحِيطُوا۟ بِعِلْمِهِۦ وَلَمَّا يَأْتِهِمْ تَأْوِيلُهُۥ ۚ كَذَٰلِكَ كَذَّبَ ٱلَّذِينَ مِن قَبْلِهِمْ ۖ فَٱنظُرْ كَيْفَ كَانَ عَـٰقِبَةُ ٱلظَّـٰلِمِينَ",
    translation: {
      en: "",
      ur: "حقیقت یہ ہے کہ جس چیز کے علم پر یہ قابو نہیں پاسکے اس کو (نادانی سے) جھٹلا دیا اور ابھی اس کی حقیقت ان پر کھلی ہی نہیں۔ اسی طرح جو لوگ ان سے پہلے تھے انہوں نے تکذیب کی تھی سو دیکھ لو ظالموں کا انجام کیسا ہوا",
    },
    words: [
      { id: '10:39:1', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '10:39:2', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they denied", ur: "وہ لوگ denied" } },
      { id: '10:39:3', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '10:39:4', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '10:39:5', arabic: "يُحِيطُوا۟", transliteration: "yuḥīṭū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they could encompass", ur: "وہ لوگ could encompass" } },
      { id: '10:39:6', arabic: "بِعِلْمِهِۦ", transliteration: "biʿil'mihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(of) its knowledge", ur: "(of) its knowledge" } },
      { id: '10:39:7', arabic: "وَلَمَّا", transliteration: "walammā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:39:8', arabic: "يَأْتِهِمْ", transliteration: "yatihim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has come (to) them", ur: "has come (کو) them" } },
      { id: '10:39:9', arabic: "تَأْوِيلُهُۥ ۚ", transliteration: "tawīluhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "its interpretation", ur: "its interpretation" } },
      { id: '10:39:10', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '10:39:11', arabic: "كَذَّبَ", transliteration: "kadhaba", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '10:39:12', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those", ur: "those" } },
      { id: '10:39:13', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "before them", ur: "پہلے them" } },
      { id: '10:39:14', arabic: "قَبْلِهِمْ ۖ", transliteration: "qablihim", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before them", ur: "پہلے them" } },
      { id: '10:39:15', arabic: "فَٱنظُرْ", transliteration: "fa-unẓur", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then see", ur: "پھر دیکھنا" } },
      { id: '10:39:16', arabic: "كَيْفَ", transliteration: "kayfa", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "how", ur: "how" } },
      { id: '10:39:17', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '10:39:18', arabic: "عَـٰقِبَةُ", transliteration: "ʿāqibatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) end", ur: "(the) end" } },
      { id: '10:39:19', arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the wrongdoers", ur: "(of) the wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  40: {
    text: "وَمِنْهُم مَّن يُؤْمِنُ بِهِۦ وَمِنْهُم مَّن لَّا يُؤْمِنُ بِهِۦ ۚ وَرَبُّكَ أَعْلَمُ بِٱلْمُفْسِدِينَ",
    translation: {
      en: "",
      ur: "اور ان میں سے کچھ تو ایسے ہیں کہ اس پر ایمان لے آتے ہیں اور کچھ ایسے ہیں کہ ایمان نہیں لاتے۔ اور تمھارا پروردگار شریروں سے خوب واقف ہے",
    },
    words: [
      { id: '10:40:1', arabic: "وَمِنْهُم", transliteration: "wamin'hum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And of them", ur: "اور of them" } },
      { id: '10:40:2', arabic: "مَّن", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is one) who", ur: "(is one) جو" } },
      { id: '10:40:3', arabic: "يُؤْمِنُ", transliteration: "yu'minu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believes", ur: "believes" } },
      { id: '10:40:4', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '10:40:5', arabic: "وَمِنْهُم", transliteration: "wamin'hum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and of them", ur: "اور of them" } },
      { id: '10:40:6', arabic: "مَّن", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is one) who", ur: "(is one) جو" } },
      { id: '10:40:7', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '10:40:8', arabic: "يُؤْمِنُ", transliteration: "yu'minu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '10:40:9', arabic: "بِهِۦ ۚ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '10:40:10', arabic: "وَرَبُّكَ", transliteration: "warabbuka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And your Lord", ur: "اور your رب" } },
      { id: '10:40:11', arabic: "أَعْلَمُ", transliteration: "aʿlamu", pos: ['ADJ'], posLabel: 'ADJ', root: "ع ل م", meaning: { en: "(is) All-Knower", ur: "(is) سب-Knower" } },
      { id: '10:40:12', arabic: "بِٱلْمُفْسِدِينَ", transliteration: "bil-muf'sidīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of the corrupters", ur: "of the corrupters" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  41: {
    text: "وَإِن كَذَّبُوكَ فَقُل لِّى عَمَلِى وَلَكُمْ عَمَلُكُمْ ۖ أَنتُم بَرِيٓـُٔونَ مِمَّآ أَعْمَلُ وَأَنَا۠ بَرِىٓءٌۭ مِّمَّا تَعْمَلُونَ",
    translation: {
      en: "",
      ur: "اور اگر یہ تمہاری تکذیب کریں تو کہہ دو کہ مجھ کو میرے اعمال (کا بدلہ ملے گا) اور تم کو تمہارے اعمال (کا) تم میرے عملوں کا جواب دہ نہیں ہو اور میں تمہارے عملوں کا جوابدہ نہیں ہوں",
    },
    words: [
      { id: '10:41:1', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '10:41:2', arabic: "كَذَّبُوكَ", transliteration: "kadhabūka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they deny you", ur: "وہ لوگ deny تم" } },
      { id: '10:41:3', arabic: "فَقُل", transliteration: "faqul", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then say", ur: "پھر کہو" } },
      { id: '10:41:4', arabic: "لِّى", transliteration: "lī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For me", ur: "For me" } },
      { id: '10:41:5', arabic: "عَمَلِى", transliteration: "ʿamalī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) my deeds", ur: "(are) my deeds" } },
      { id: '10:41:6', arabic: "وَلَكُمْ", transliteration: "walakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and for you", ur: "اور for تم" } },
      { id: '10:41:7', arabic: "عَمَلُكُمْ ۖ", transliteration: "ʿamalukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) your deeds", ur: "(are) your deeds" } },
      { id: '10:41:8', arabic: "أَنتُم", transliteration: "antum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "You", ur: "تم" } },
      { id: '10:41:9', arabic: "بَرِيٓـُٔونَ", transliteration: "barīūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) disassociated", ur: "(are) disassociated" } },
      { id: '10:41:10', arabic: "مِمَّآ", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from what", ur: "سے کیا" } },
      { id: '10:41:11', arabic: "أَعْمَلُ", transliteration: "aʿmalu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I do", ur: "میں do" } },
      { id: '10:41:12', arabic: "وَأَنَا۠", transliteration: "wa-anā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and I am", ur: "اور میں am" } },
      { id: '10:41:13', arabic: "بَرِىٓءٌۭ", transliteration: "barīon", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "disassociated", ur: "disassociated" } },
      { id: '10:41:14', arabic: "مِّمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from what", ur: "سے کیا" } },
      { id: '10:41:15', arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you do", ur: "تم do" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  42: {
    text: "وَمِنْهُم مَّن يَسْتَمِعُونَ إِلَيْكَ ۚ أَفَأَنتَ تُسْمِعُ ٱلصُّمَّ وَلَوْ كَانُوا۟ لَا يَعْقِلُونَ",
    translation: {
      en: "",
      ur: "اور ان میں سے بعض ایسے ہیں کہ تمہاری طرف کان لگاتے ہیں تو کیا تم بہروں کو سناؤ گے اگرچہ کچھ بھی (سنتے) سمجھتے نہ ہوں",
    },
    words: [
      { id: '10:42:1', arabic: "وَمِنْهُم", transliteration: "wamin'hum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And among them", ur: "اور among them" } },
      { id: '10:42:2', arabic: "مَّن", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are some) who", ur: "(are some) جو" } },
      { id: '10:42:3', arabic: "يَسْتَمِعُونَ", transliteration: "yastamiʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "listen", ur: "listen" } },
      { id: '10:42:4', arabic: "إِلَيْكَ ۚ", transliteration: "ilayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '10:42:5', arabic: "أَفَأَنتَ", transliteration: "afa-anta", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "But (can) you", ur: "لیکن (can) تم" } },
      { id: '10:42:6', arabic: "تُسْمِعُ", transliteration: "tus'miʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "cause the deaf to hear", ur: "cause the deaf کو سننا" } },
      { id: '10:42:7', arabic: "ٱلصُّمَّ", transliteration: "l-ṣuma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "cause the deaf to hear", ur: "cause the deaf کو سننا" } },
      { id: '10:42:8', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "even though", ur: "even though" } },
      { id: '10:42:9', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they [were]", ur: "وہ لوگ [were]" } },
      { id: '10:42:10', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '10:42:11', arabic: "يَعْقِلُونَ", transliteration: "yaʿqilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "use reason", ur: "use reason" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'نفی + فعل' }
      ],
    },
  },
  43: {
    text: "وَمِنْهُم مَّن يَنظُرُ إِلَيْكَ ۚ أَفَأَنتَ تَهْدِى ٱلْعُمْىَ وَلَوْ كَانُوا۟ لَا يُبْصِرُونَ",
    translation: {
      en: "",
      ur: "اور بعض ایسے ہیں کہ تمھاری طرف دیکھتے ہیں۔ تو کیا تم اندھوں کو راستہ دکھاؤ گے اگرچہ کچھ بھی دیکھتے (بھالتے) نہ ہوں",
    },
    words: [
      { id: '10:43:1', arabic: "وَمِنْهُم", transliteration: "wamin'hum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And among them", ur: "اور among them" } },
      { id: '10:43:2', arabic: "مَّن", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are some) who", ur: "(are some) جو" } },
      { id: '10:43:3', arabic: "يَنظُرُ", transliteration: "yanẓuru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "look", ur: "look" } },
      { id: '10:43:4', arabic: "إِلَيْكَ ۚ", transliteration: "ilayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "at you", ur: "at تم" } },
      { id: '10:43:5', arabic: "أَفَأَنتَ", transliteration: "afa-anta", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "But (can) you", ur: "لیکن (can) تم" } },
      { id: '10:43:6', arabic: "تَهْدِى", transliteration: "tahdī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "guide", ur: "guide" } },
      { id: '10:43:7', arabic: "ٱلْعُمْىَ", transliteration: "l-ʿum'ya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the blind", ur: "the blind" } },
      { id: '10:43:8', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "even though", ur: "even though" } },
      { id: '10:43:9', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they [were]", ur: "وہ لوگ [were]" } },
      { id: '10:43:10', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '10:43:11', arabic: "يُبْصِرُونَ", transliteration: "yub'ṣirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "see", ur: "دیکھنا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'نفی + فعل' }
      ],
    },
  },
  44: {
    text: "إِنَّ ٱللَّهَ لَا يَظْلِمُ ٱلنَّاسَ شَيْـًۭٔا وَلَـٰكِنَّ ٱلنَّاسَ أَنفُسَهُمْ يَظْلِمُونَ",
    translation: {
      en: "",
      ur: "خدا تو لوگوں پر کچھ ظلم نہیں کرتا لیکن لوگ ہی اپنے آپ پر ظلم کرتے ہیں",
    },
    words: [
      { id: '10:44:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '10:44:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:44:3', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '10:44:4', arabic: "يَظْلِمُ", transliteration: "yaẓlimu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "wrong", ur: "wrong" } },
      { id: '10:44:5', arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '10:44:6', arabic: "شَيْـًۭٔا", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(in) anything", ur: "(میں) anything" } },
      { id: '10:44:7', arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '10:44:8', arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '10:44:9', arabic: "أَنفُسَهُمْ", transliteration: "anfusahum", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "wrong themselves", ur: "wrong themselves" } },
      { id: '10:44:10', arabic: "يَظْلِمُونَ", transliteration: "yaẓlimūna", pos: ['V'], posLabel: 'V', root: "ظ ل م", meaning: { en: "wrong themselves", ur: "wrong themselves" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  45: {
    text: "وَيَوْمَ يَحْشُرُهُمْ كَأَن لَّمْ يَلْبَثُوٓا۟ إِلَّا سَاعَةًۭ مِّنَ ٱلنَّهَارِ يَتَعَارَفُونَ بَيْنَهُمْ ۚ قَدْ خَسِرَ ٱلَّذِينَ كَذَّبُوا۟ بِلِقَآءِ ٱللَّهِ وَمَا كَانُوا۟ مُهْتَدِينَ",
    translation: {
      en: "",
      ur: "اور جس دن خدا ان کو جمع کرے گا (تو وہ دنیا کی نسبت ایسا خیال کریں گے کہ) گویا (وہاں) گھڑی بھر دن سے زیادہ رہے ہی نہیں تھے (اور) آپس میں ایک دوسرے کو شناخت بھی کریں گے۔ جن لوگوں نے خدا کے روبرو حاضر ہونے کو جھٹلایا وہ خسارے میں پڑ گئے اور راہ یاب نہ ہوئے",
    },
    words: [
      { id: '10:45:1', arabic: "وَيَوْمَ", transliteration: "wayawma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ي و م", meaning: { en: "And the Day", ur: "اور the دن" } },
      { id: '10:45:2', arabic: "يَحْشُرُهُمْ", transliteration: "yaḥshuruhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He will gather them", ur: "وہ will gather them" } },
      { id: '10:45:3', arabic: "كَأَن", transliteration: "ka-an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "as if", ur: "as if" } },
      { id: '10:45:4', arabic: "لَّمْ", transliteration: "lam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they had not remained", ur: "وہ لوگ had نہیں remained" } },
      { id: '10:45:5', arabic: "يَلْبَثُوٓا۟", transliteration: "yalbathū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they had not remained", ur: "وہ لوگ had نہیں remained" } },
      { id: '10:45:6', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '10:45:7', arabic: "سَاعَةًۭ", transliteration: "sāʿatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an hour", ur: "an hour" } },
      { id: '10:45:8', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:45:9', arabic: "ٱلنَّهَارِ", transliteration: "l-nahāri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the day", ur: "the دن" } },
      { id: '10:45:10', arabic: "يَتَعَارَفُونَ", transliteration: "yataʿārafūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will recognize each other", ur: "وہ لوگ will recognize ہر other" } },
      { id: '10:45:11', arabic: "بَيْنَهُمْ ۚ", transliteration: "baynahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between them", ur: "درمیان them" } },
      { id: '10:45:12', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Certainly", ur: "Certainly" } },
      { id: '10:45:13', arabic: "خَسِرَ", transliteration: "khasira", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will have) lost", ur: "(will have) lost" } },
      { id: '10:45:14', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '10:45:15', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '10:45:16', arabic: "بِلِقَآءِ", transliteration: "biliqāi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "the meeting", ur: "the meeting" } },
      { id: '10:45:17', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) Allah", ur: "(ساتھ) اللہ" } },
      { id: '10:45:18', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:45:19', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they were", ur: "وہ لوگ were" } },
      { id: '10:45:20', arabic: "مُهْتَدِينَ", transliteration: "muh'tadīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the guided ones", ur: "the guided ones" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'فعل + فاعل' }
      ],
    },
  },
  46: {
    text: "وَإِمَّا نُرِيَنَّكَ بَعْضَ ٱلَّذِى نَعِدُهُمْ أَوْ نَتَوَفَّيَنَّكَ فَإِلَيْنَا مَرْجِعُهُمْ ثُمَّ ٱللَّهُ شَهِيدٌ عَلَىٰ مَا يَفْعَلُونَ",
    translation: {
      en: "",
      ur: "اور اگر ہم کوئی عذاب جس کا ان لوگوں سے وعدہ کرتے ہیں تمہاری آنکھوں کے سامنے (نازل) کریں یا (اس وقت جب) تمہاری مدت حیات پوری کردیں تو ان کو ہمارے ہی پاس لوٹ کر آنا ہے پھر جو کچھ یہ کر رہے ہیں خدا اس کو دیکھ رہا ہے",
    },
    words: [
      { id: '10:46:1', arabic: "وَإِمَّا", transliteration: "wa-immā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whether", ur: "اور whether" } },
      { id: '10:46:2', arabic: "نُرِيَنَّكَ", transliteration: "nuriyannaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We show you", ur: "ہم show تم" } },
      { id: '10:46:3', arabic: "بَعْضَ", transliteration: "baʿḍa", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "some", ur: "some" } },
      { id: '10:46:4', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) that which", ur: "(of) وہ جو" } },
      { id: '10:46:5', arabic: "نَعِدُهُمْ", transliteration: "naʿiduhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We promised them", ur: "ہم promised them" } },
      { id: '10:46:6', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '10:46:7', arabic: "نَتَوَفَّيَنَّكَ", transliteration: "natawaffayannaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We cause you to die", ur: "ہم cause تم کو die" } },
      { id: '10:46:8', arabic: "فَإِلَيْنَا", transliteration: "fa-ilaynā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then to Us", ur: "پھر کو Us" } },
      { id: '10:46:9', arabic: "مَرْجِعُهُمْ", transliteration: "marjiʿuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) their return", ur: "(is) their return" } },
      { id: '10:46:10', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '10:46:11', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:46:12', arabic: "شَهِيدٌ", transliteration: "shahīdun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a Witness", ur: "(is) a Witness" } },
      { id: '10:46:13', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '10:46:14', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '10:46:15', arabic: "يَفْعَلُونَ", transliteration: "yafʿalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they do", ur: "وہ لوگ do" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'موصول + صلة' }
      ],
    },
  },
  47: {
    text: "وَلِكُلِّ أُمَّةٍۢ رَّسُولٌۭ ۖ فَإِذَا جَآءَ رَسُولُهُمْ قُضِىَ بَيْنَهُم بِٱلْقِسْطِ وَهُمْ لَا يُظْلَمُونَ",
    translation: {
      en: "",
      ur: "اور ہر ایک اُمت کی طرف سے پیغمبر بھیجا گیا۔ جب ان کا پیغمبر آتا ہے تو اُن میں انصاف کے ساتھ فیصلہ کر دیا جاتا ہے اور ان پر کچھ ظلم نہیں کیا جاتا",
    },
    words: [
      { id: '10:47:1', arabic: "وَلِكُلِّ", transliteration: "walikulli", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for every", ur: "اور for ہر" } },
      { id: '10:47:2', arabic: "أُمَّةٍۢ", transliteration: "ummatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "nation", ur: "nation" } },
      { id: '10:47:3', arabic: "رَّسُولٌۭ ۖ", transliteration: "rasūlun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a Messenger", ur: "(is) a رسول" } },
      { id: '10:47:4', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So when", ur: "So when" } },
      { id: '10:47:5', arabic: "جَآءَ", transliteration: "jāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "comes", ur: "comes" } },
      { id: '10:47:6', arabic: "رَسُولُهُمْ", transliteration: "rasūluhum", pos: ['N'], posLabel: 'N', root: "ر س ل", meaning: { en: "their Messenger", ur: "their رسول" } },
      { id: '10:47:7', arabic: "قُضِىَ", transliteration: "quḍiya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "it will be judged", ur: "it will be judged" } },
      { id: '10:47:8', arabic: "بَيْنَهُم", transliteration: "baynahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between them", ur: "درمیان them" } },
      { id: '10:47:9', arabic: "بِٱلْقِسْطِ", transliteration: "bil-qis'ṭi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in justice", ur: "میں justice" } },
      { id: '10:47:10', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '10:47:11', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(will) not", ur: "(will) نہیں" } },
      { id: '10:47:12', arabic: "يُظْلَمُونَ", transliteration: "yuẓ'lamūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be wronged", ur: "be wronged" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'نفی + فعل' }
      ],
    },
  },
  48: {
    text: "وَيَقُولُونَ مَتَىٰ هَـٰذَا ٱلْوَعْدُ إِن كُنتُمْ صَـٰدِقِينَ",
    translation: {
      en: "",
      ur: "اور یہ کہتے ہیں کہ اگر تم سچے ہو تو (جس عذاب کا) یہ وعدہ (ہے وہ آئے گا) کب؟",
    },
    words: [
      { id: '10:48:1', arabic: "وَيَقُولُونَ", transliteration: "wayaqūlūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" } },
      { id: '10:48:2', arabic: "مَتَىٰ", transliteration: "matā", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "When", ur: "When" } },
      { id: '10:48:3', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(will) this", ur: "(will) this" } },
      { id: '10:48:4', arabic: "ٱلْوَعْدُ", transliteration: "l-waʿdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the promise (be fulfilled)", ur: "the promise (be fulfilled)" } },
      { id: '10:48:5', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '10:48:6', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '10:48:7', arabic: "صَـٰدِقِينَ", transliteration: "ṣādiqīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "truthful", ur: "truthful" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  49: {
    text: "قُل لَّآ أَمْلِكُ لِنَفْسِى ضَرًّۭا وَلَا نَفْعًا إِلَّا مَا شَآءَ ٱللَّهُ ۗ لِكُلِّ أُمَّةٍ أَجَلٌ ۚ إِذَا جَآءَ أَجَلُهُمْ فَلَا يَسْتَـْٔخِرُونَ سَاعَةًۭ ۖ وَلَا يَسْتَقْدِمُونَ",
    translation: {
      en: "",
      ur: "کہہ دو کہ میں اپنے نقصان اور فائدے کا بھی کچھ اختیار نہیں رکھتا۔ مگر جو خدا چاہے۔ ہر ایک امت کے لیے (موت کا) ایک وقت مقرر ہے۔ جب وہ وقت آجاتا ہے تو ایک گھڑی بھی دیر نہیں کرسکتے اور نہ جلدی کرسکتے ہیں",
    },
    words: [
      { id: '10:49:1', arabic: "قُل", transliteration: "qul", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '10:49:2', arabic: "لَّآ", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '10:49:3', arabic: "أَمْلِكُ", transliteration: "amliku", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I have power", ur: "میں have power" } },
      { id: '10:49:4', arabic: "لِنَفْسِى", transliteration: "linafsī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for myself", ur: "for myself" } },
      { id: '10:49:5', arabic: "ضَرًّۭا", transliteration: "ḍarran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for) any harm", ur: "(for) any harm" } },
      { id: '10:49:6', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:49:7', arabic: "نَفْعًا", transliteration: "nafʿan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(for) any profit", ur: "(for) any profit" } },
      { id: '10:49:8', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '10:49:9', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '10:49:10', arabic: "شَآءَ", transliteration: "shāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah wills", ur: "اللہ wills" } },
      { id: '10:49:11', arabic: "ٱللَّهُ ۗ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah wills", ur: "اللہ wills" } },
      { id: '10:49:12', arabic: "لِكُلِّ", transliteration: "likulli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "For every", ur: "For ہر" } },
      { id: '10:49:13', arabic: "أُمَّةٍ", transliteration: "ummatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "nation", ur: "nation" } },
      { id: '10:49:14', arabic: "أَجَلٌ ۚ", transliteration: "ajalun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a term", ur: "(is) a term" } },
      { id: '10:49:15', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '10:49:16', arabic: "جَآءَ", transliteration: "jāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "comes", ur: "comes" } },
      { id: '10:49:17', arabic: "أَجَلُهُمْ", transliteration: "ajaluhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their term", ur: "their term" } },
      { id: '10:49:18', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then not", ur: "پھر نہیں" } },
      { id: '10:49:19', arabic: "يَسْتَـْٔخِرُونَ", transliteration: "yastakhirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they remain behind", ur: "وہ لوگ remain behind" } },
      { id: '10:49:20', arabic: "سَاعَةًۭ ۖ", transliteration: "sāʿatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an hour", ur: "an hour" } },
      { id: '10:49:21', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:49:22', arabic: "يَسْتَقْدِمُونَ", transliteration: "yastaqdimūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they can precede (it)", ur: "وہ لوگ can precede (it)" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'فعل + فاعل' }
      ],
    },
  },
  50: {
    text: "قُلْ أَرَءَيْتُمْ إِنْ أَتَىٰكُمْ عَذَابُهُۥ بَيَـٰتًا أَوْ نَهَارًۭا مَّاذَا يَسْتَعْجِلُ مِنْهُ ٱلْمُجْرِمُونَ",
    translation: {
      en: "",
      ur: "کہہ دو کہ بھلا دیکھو تو اگر اس کا عذاب تم پر (ناگہاں) آجائے رات کو یا دن کو تو پھر گنہگار کس بات کی جلدی کریں گے",
    },
    words: [
      { id: '10:50:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '10:50:2', arabic: "أَرَءَيْتُمْ", transliteration: "ara-aytum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you see", ur: "Do تم دیکھنا" } },
      { id: '10:50:3', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '10:50:4', arabic: "أَتَىٰكُمْ", transliteration: "atākum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "comes to you", ur: "comes کو تم" } },
      { id: '10:50:5', arabic: "عَذَابُهُۥ", transliteration: "ʿadhābuhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His punishment", ur: "His عذاب" } },
      { id: '10:50:6', arabic: "بَيَـٰتًا", transliteration: "bayātan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) night", ur: "(by) رات" } },
      { id: '10:50:7', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '10:50:8', arabic: "نَهَارًۭا", transliteration: "nahāran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(by) day", ur: "(by) دن" } },
      { id: '10:50:9', arabic: "مَّاذَا", transliteration: "mādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what (portion)", ur: "کیا (portion)" } },
      { id: '10:50:10', arabic: "يَسْتَعْجِلُ", transliteration: "yastaʿjilu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "of it would (wish to) hasten", ur: "of it would (wish کو) hasten" } },
      { id: '10:50:11', arabic: "مِنْهُ", transliteration: "min'hu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "of it would (wish to) hasten", ur: "of it would (wish کو) hasten" } },
      { id: '10:50:12', arabic: "ٱلْمُجْرِمُونَ", transliteration: "l-muj'rimūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the criminals", ur: "the criminals" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  51: {
    text: "أَثُمَّ إِذَا مَا وَقَعَ ءَامَنتُم بِهِۦٓ ۚ ءَآلْـَٔـٰنَ وَقَدْ كُنتُم بِهِۦ تَسْتَعْجِلُونَ",
    translation: {
      en: "",
      ur: "کیا جب وہ آ واقع ہوگا تب اس پر ایمان لاؤ گے (اس وقت کہا جائے گا کہ) اور اب (ایمان لائے؟) اس کے لیے تو تم جلدی مچایا کرتے تھے",
    },
    words: [
      { id: '10:51:1', arabic: "أَثُمَّ", transliteration: "athumma", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is (it) then", ur: "Is (it) پھر" } },
      { id: '10:51:2', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '10:51:3', arabic: "مَا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '10:51:4', arabic: "وَقَعَ", transliteration: "waqaʿa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(it had) occurred", ur: "(it had) occurred" } },
      { id: '10:51:5', arabic: "ءَامَنتُم", transliteration: "āmantum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you (will) believe", ur: "تم (will) ایمان لانا" } },
      { id: '10:51:6', arabic: "بِهِۦٓ ۚ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '10:51:7', arabic: "ءَآلْـَٔـٰنَ", transliteration: "āl'āna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Now", ur: "Now" } },
      { id: '10:51:8', arabic: "وَقَدْ", transliteration: "waqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And certainly", ur: "اور certainly" } },
      { id: '10:51:9', arabic: "كُنتُم", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you were", ur: "تم were" } },
      { id: '10:51:10', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "seeking to hasten it", ur: "seeking کو hasten it" } },
      { id: '10:51:11', arabic: "تَسْتَعْجِلُونَ", transliteration: "tastaʿjilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "seeking to hasten it", ur: "seeking کو hasten it" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  52: {
    text: "ثُمَّ قِيلَ لِلَّذِينَ ظَلَمُوا۟ ذُوقُوا۟ عَذَابَ ٱلْخُلْدِ هَلْ تُجْزَوْنَ إِلَّا بِمَا كُنتُمْ تَكْسِبُونَ",
    translation: {
      en: "",
      ur: "پھر ظالم لوگوں سے کہا جائے گا کہ عذاب دائمی کا مزہ چکھو۔ (اب) تم انہیں (اعمال) کا بدلہ پاؤ گے جو (دنیا میں) کرتے رہے",
    },
    words: [
      { id: '10:52:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '10:52:2', arabic: "قِيلَ", transliteration: "qīla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "it will be said", ur: "it will be کہا" } },
      { id: '10:52:3', arabic: "لِلَّذِينَ", transliteration: "lilladhīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to those who", ur: "کو جو لوگ" } },
      { id: '10:52:4', arabic: "ظَلَمُوا۟", transliteration: "ẓalamū", pos: ['V'], posLabel: 'V', root: "ظ ل م", meaning: { en: "wronged", ur: "wronged" } },
      { id: '10:52:5', arabic: "ذُوقُوا۟", transliteration: "dhūqū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Taste", ur: "Taste" } },
      { id: '10:52:6', arabic: "عَذَابَ", transliteration: "ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "punishment", ur: "عذاب" } },
      { id: '10:52:7', arabic: "ٱلْخُلْدِ", transliteration: "l-khul'di", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the everlasting", ur: "the everlasting" } },
      { id: '10:52:8', arabic: "هَلْ", transliteration: "hal", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Are you (being) recompensed", ur: "Are تم (being) recompensed" } },
      { id: '10:52:9', arabic: "تُجْزَوْنَ", transliteration: "tuj'zawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Are you (being) recompensed", ur: "Are تم (being) recompensed" } },
      { id: '10:52:10', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '10:52:11', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '10:52:12', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you used (to)", ur: "تم used (کو)" } },
      { id: '10:52:13', arabic: "تَكْسِبُونَ", transliteration: "taksibūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "earn", ur: "earn" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  53: {
    text: "۞ وَيَسْتَنۢبِـُٔونَكَ أَحَقٌّ هُوَ ۖ قُلْ إِى وَرَبِّىٓ إِنَّهُۥ لَحَقٌّۭ ۖ وَمَآ أَنتُم بِمُعْجِزِينَ",
    translation: {
      en: "",
      ur: "اور تم سے دریافت کرتے ہیں کہ آیا یہ سچ ہے۔ کہہ دو ہاں خدا کی قسم سچ ہے اور تم (بھاگ کر خدا کو) عاجز نہیں کرسکو گے",
    },
    words: [
      { id: '10:53:1', arabic: "۞ وَيَسْتَنۢبِـُٔونَكَ", transliteration: "wayastanbiūnaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And they ask you to inform", ur: "اور وہ لوگ ask تم کو inform" } },
      { id: '10:53:2', arabic: "أَحَقٌّ", transliteration: "aḥaqqun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is it true", ur: "Is it true" } },
      { id: '10:53:3', arabic: "هُوَ ۖ", transliteration: "huwa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is it true", ur: "Is it true" } },
      { id: '10:53:4', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '10:53:5', arabic: "إِى", transliteration: "ī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Yes", ur: "Yes" } },
      { id: '10:53:6', arabic: "وَرَبِّىٓ", transliteration: "warabbī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "by my Lord", ur: "by my رب" } },
      { id: '10:53:7', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, it", ur: "بیشک, it" } },
      { id: '10:53:8', arabic: "لَحَقٌّۭ ۖ", transliteration: "laḥaqqun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) surely the truth", ur: "(is) یقیناً the سچ" } },
      { id: '10:53:9', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:53:10', arabic: "أَنتُم", transliteration: "antum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '10:53:11', arabic: "بِمُعْجِزِينَ", transliteration: "bimuʿ'jizīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(can) escape (it)", ur: "(can) escape (it)" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  54: {
    text: "وَلَوْ أَنَّ لِكُلِّ نَفْسٍۢ ظَلَمَتْ مَا فِى ٱلْأَرْضِ لَٱفْتَدَتْ بِهِۦ ۗ وَأَسَرُّوا۟ ٱلنَّدَامَةَ لَمَّا رَأَوُا۟ ٱلْعَذَابَ ۖ وَقُضِىَ بَيْنَهُم بِٱلْقِسْطِ ۚ وَهُمْ لَا يُظْلَمُونَ",
    translation: {
      en: "",
      ur: "اور اگر ہر ایک نافرمان شخص کے پاس روئے زمین کی تمام چیزیں ہوں تو (عذاب سے بچنے کے) بدلے میں (سب) دے ڈالے اور جب وہ عذاب کو دیکھیں گے تو (پچھتائیں گے اور) ندامت کو چھپائیں گے۔ اور ان میں انصاف کے ساتھ فیصلہ کر دیا جائے گا اور (کسی طرح کا) ان پر ظلم نہیں ہوگا",
    },
    words: [
      { id: '10:54:1', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '10:54:2', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '10:54:3', arabic: "لِكُلِّ", transliteration: "likulli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for every", ur: "for ہر" } },
      { id: '10:54:4', arabic: "نَفْسٍۢ", transliteration: "nafsin", pos: ['V'], posLabel: 'V', root: "ن ف س", meaning: { en: "soul", ur: "روح" } },
      { id: '10:54:5', arabic: "ظَلَمَتْ", transliteration: "ẓalamat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(that) wronged", ur: "(وہ) wronged" } },
      { id: '10:54:6', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whatever", ur: "whatever" } },
      { id: '10:54:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '10:54:8', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '10:54:9', arabic: "لَٱفْتَدَتْ", transliteration: "la-if'tadat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it (would) seek to ransom", ur: "it (would) seek کو ransom" } },
      { id: '10:54:10', arabic: "بِهِۦ ۗ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '10:54:11', arabic: "وَأَسَرُّوا۟", transliteration: "wa-asarrū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they (will) confide", ur: "اور وہ لوگ (will) confide" } },
      { id: '10:54:12', arabic: "ٱلنَّدَامَةَ", transliteration: "l-nadāmata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the regret", ur: "the regret" } },
      { id: '10:54:13', arabic: "لَمَّا", transliteration: "lammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '10:54:14', arabic: "رَأَوُا۟", transliteration: "ra-awū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they see", ur: "وہ لوگ دیکھنا" } },
      { id: '10:54:15', arabic: "ٱلْعَذَابَ ۖ", transliteration: "l-ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '10:54:16', arabic: "وَقُضِىَ", transliteration: "waquḍiya", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But will be judged", ur: "لیکن will be judged" } },
      { id: '10:54:17', arabic: "بَيْنَهُم", transliteration: "baynahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between them", ur: "درمیان them" } },
      { id: '10:54:18', arabic: "بِٱلْقِسْطِ ۚ", transliteration: "bil-qis'ṭi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in justice", ur: "میں justice" } },
      { id: '10:54:19', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '10:54:20', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(will) not", ur: "(will) نہیں" } },
      { id: '10:54:21', arabic: "يُظْلَمُونَ", transliteration: "yuẓ'lamūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(be) wronged", ur: "(be) wronged" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'نفی + فعل' }
      ],
    },
  },
  55: {
    text: "أَلَآ إِنَّ لِلَّهِ مَا فِى ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۗ أَلَآ إِنَّ وَعْدَ ٱللَّهِ حَقٌّۭ وَلَـٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ",
    translation: {
      en: "",
      ur: "سن رکھو جو کچھ آسمانوں اور زمینوں میں ہے سب خدا ہی کا ہے۔ اور یہ بھی سن رکھو کہ خدا کا وعدہ سچا ہے لیکن اکثر لوگ نہیں جانتے",
    },
    words: [
      { id: '10:55:1', arabic: "أَلَآ", transliteration: "alā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "No doubt", ur: "نہیں doubt" } },
      { id: '10:55:2', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "indeed", ur: "بیشک" } },
      { id: '10:55:3', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for Allah", ur: "for اللہ" } },
      { id: '10:55:4', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(is) whatever", ur: "(is) whatever" } },
      { id: '10:55:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '10:55:6', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '10:55:7', arabic: "وَٱلْأَرْضِ ۗ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '10:55:8', arabic: "أَلَآ", transliteration: "alā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "No doubt", ur: "نہیں doubt" } },
      { id: '10:55:9', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "indeed", ur: "بیشک" } },
      { id: '10:55:10', arabic: "وَعْدَ", transliteration: "waʿda", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(the) Promise of Allah", ur: "(the) Promise of اللہ" } },
      { id: '10:55:11', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Promise of Allah", ur: "(the) Promise of اللہ" } },
      { id: '10:55:12', arabic: "حَقٌّۭ", transliteration: "ḥaqqun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) true", ur: "(is) true" } },
      { id: '10:55:13', arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But", ur: "لیکن" } },
      { id: '10:55:14', arabic: "أَكْثَرَهُمْ", transliteration: "aktharahum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '10:55:15', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '10:55:16', arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "know", ur: "جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'نفی + فعل' }
      ],
    },
  },
  56: {
    text: "هُوَ يُحْىِۦ وَيُمِيتُ وَإِلَيْهِ تُرْجَعُونَ",
    translation: {
      en: "",
      ur: "وہی جان بخشتا اور (وہی) موت دیتا ہے اور تم لوگ اسی کی طرف لوٹ کر جاؤ گے",
    },
    words: [
      { id: '10:56:1', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '10:56:2', arabic: "يُحْىِۦ", transliteration: "yuḥ'yī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "gives life", ur: "gives زندگی" } },
      { id: '10:56:3', arabic: "وَيُمِيتُ", transliteration: "wayumītu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and causes death", ur: "اور causes موت" } },
      { id: '10:56:4', arabic: "وَإِلَيْهِ", transliteration: "wa-ilayhi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and to Him", ur: "اور کو Him" } },
      { id: '10:56:5', arabic: "تُرْجَعُونَ", transliteration: "tur'jaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you will be returned", ur: "تم will be returned" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  57: {
    text: "يَـٰٓأَيُّهَا ٱلنَّاسُ قَدْ جَآءَتْكُم مَّوْعِظَةٌۭ مِّن رَّبِّكُمْ وَشِفَآءٌۭ لِّمَا فِى ٱلصُّدُورِ وَهُدًۭى وَرَحْمَةٌۭ لِّلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "لوگو تمہارے پروردگار کی طرف سے نصیحت اور دلوں کی بیماریوں کی شفا۔ اور مومنوں کے لیے ہدایت اور رحمت آپہنچی ہے",
    },
    words: [
      { id: '10:57:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O mankind", ur: "اے mankind" } },
      { id: '10:57:2', arabic: "ٱلنَّاسُ", transliteration: "l-nāsu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O mankind", ur: "اے mankind" } },
      { id: '10:57:3', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '10:57:4', arabic: "جَآءَتْكُم", transliteration: "jāatkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has come to you", ur: "has come کو تم" } },
      { id: '10:57:5', arabic: "مَّوْعِظَةٌۭ", transliteration: "mawʿiẓatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an instruction", ur: "an instruction" } },
      { id: '10:57:6', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:57:7', arabic: "رَّبِّكُمْ", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '10:57:8', arabic: "وَشِفَآءٌۭ", transliteration: "washifāon", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a healing", ur: "اور a healing" } },
      { id: '10:57:9', arabic: "لِّمَا", transliteration: "limā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '10:57:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '10:57:11', arabic: "ٱلصُّدُورِ", transliteration: "l-ṣudūri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your breasts", ur: "your breasts" } },
      { id: '10:57:12', arabic: "وَهُدًۭى", transliteration: "wahudan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and guidance", ur: "اور guidance" } },
      { id: '10:57:13', arabic: "وَرَحْمَةٌۭ", transliteration: "waraḥmatun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and mercy", ur: "اور رحمت" } },
      { id: '10:57:14', arabic: "لِّلْمُؤْمِنِينَ", transliteration: "lil'mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for the believers", ur: "for the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  58: {
    text: "قُلْ بِفَضْلِ ٱللَّهِ وَبِرَحْمَتِهِۦ فَبِذَٰلِكَ فَلْيَفْرَحُوا۟ هُوَ خَيْرٌۭ مِّمَّا يَجْمَعُونَ",
    translation: {
      en: "",
      ur: "کہہ دو کہ (یہ کتاب) خدا کے فضل اور اس کی مہربانی سے (نازل ہوئی ہے) تو چاہیئے کہ لوگ اس سے خوش ہوں۔ یہ اس سے کہیں بہتر ہے جو وہ جمع کرتے ہیں",
    },
    words: [
      { id: '10:58:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '10:58:2', arabic: "بِفَضْلِ", transliteration: "bifaḍli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "In the Bounty", ur: "میں the Bounty" } },
      { id: '10:58:3', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '10:58:4', arabic: "وَبِرَحْمَتِهِۦ", transliteration: "wabiraḥmatihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ر ح م", meaning: { en: "and in His Mercy", ur: "اور میں His رحمت" } },
      { id: '10:58:5', arabic: "فَبِذَٰلِكَ", transliteration: "fabidhālika", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so in that", ur: "so میں وہ" } },
      { id: '10:58:6', arabic: "فَلْيَفْرَحُوا۟", transliteration: "falyafraḥū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "let them rejoice", ur: "let them rejoice" } },
      { id: '10:58:7', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "It", ur: "It" } },
      { id: '10:58:8', arabic: "خَيْرٌۭ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) better", ur: "(is) better" } },
      { id: '10:58:9', arabic: "مِّمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than what", ur: "than کیا" } },
      { id: '10:58:10', arabic: "يَجْمَعُونَ", transliteration: "yajmaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they accumulate", ur: "وہ لوگ accumulate" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  59: {
    text: "قُلْ أَرَءَيْتُم مَّآ أَنزَلَ ٱللَّهُ لَكُم مِّن رِّزْقٍۢ فَجَعَلْتُم مِّنْهُ حَرَامًۭا وَحَلَـٰلًۭا قُلْ ءَآللَّهُ أَذِنَ لَكُمْ ۖ أَمْ عَلَى ٱللَّهِ تَفْتَرُونَ",
    translation: {
      en: "",
      ur: "کہو کہ بھلا دیکھو تو خدا نے تمھارے لئے جو رزق نازل فرمایا تو تم نے اس میں سے (بعض کو) حرام ٹھہرایا اور (بعض کو) حلال (ان سے) پوچھو کیا خدا نے تم کو اس کا حکم دیا ہے یا تم خدا پر افتراء کرتے ہو",
    },
    words: [
      { id: '10:59:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '10:59:2', arabic: "أَرَءَيْتُم", transliteration: "ara-aytum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Have you seen", ur: "Have تم seen" } },
      { id: '10:59:3', arabic: "مَّآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '10:59:4', arabic: "أَنزَلَ", transliteration: "anzala", pos: ['N'], posLabel: 'N', root: "ن ز ل", meaning: { en: "(has been) sent down", ur: "(has been) sent down" } },
      { id: '10:59:5', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '10:59:6', arabic: "لَكُم", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '10:59:7', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:59:8', arabic: "رِّزْقٍۢ", transliteration: "riz'qin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) provision", ur: "(the) provision" } },
      { id: '10:59:9', arabic: "فَجَعَلْتُم", transliteration: "fajaʿaltum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and you have made", ur: "اور تم have made" } },
      { id: '10:59:10', arabic: "مِّنْهُ", transliteration: "min'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '10:59:11', arabic: "حَرَامًۭا", transliteration: "ḥarāman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "unlawful", ur: "unlawful" } },
      { id: '10:59:12', arabic: "وَحَلَـٰلًۭا", transliteration: "waḥalālan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and lawful", ur: "اور lawful" } },
      { id: '10:59:13', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '10:59:14', arabic: "ءَآللَّهُ", transliteration: "āllahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Has Allah", ur: "Has اللہ" } },
      { id: '10:59:15', arabic: "أَذِنَ", transliteration: "adhina", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "permitted", ur: "permitted" } },
      { id: '10:59:16', arabic: "لَكُمْ ۖ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[to] you", ur: "[کو] تم" } },
      { id: '10:59:17', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '10:59:18', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "about", ur: "about" } },
      { id: '10:59:19', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:59:20', arabic: "تَفْتَرُونَ", transliteration: "taftarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you invent (lies)", ur: "تم invent (lies)" } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'موصوف + صفت' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'جار + مجرور' }
      ],
    },
  },
  60: {
    text: "وَمَا ظَنُّ ٱلَّذِينَ يَفْتَرُونَ عَلَى ٱللَّهِ ٱلْكَذِبَ يَوْمَ ٱلْقِيَـٰمَةِ ۗ إِنَّ ٱللَّهَ لَذُو فَضْلٍ عَلَى ٱلنَّاسِ وَلَـٰكِنَّ أَكْثَرَهُمْ لَا يَشْكُرُونَ",
    translation: {
      en: "",
      ur: "اور جو لوگ خدا پر افتراء کرتے ہیں وہ قیامت کے دن کی نسبت کیا خیال رکھتے ہیں؟ بےشک خدا لوگوں پر مہربان ہے لیکن اکثر لوگ شکر نہیں کرتے",
    },
    words: [
      { id: '10:60:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And what", ur: "اور کیا" } },
      { id: '10:60:2', arabic: "ظَنُّ", transliteration: "ẓannu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be the) assumption", ur: "(will be the) assumption" } },
      { id: '10:60:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those who", ur: "(of) جو لوگ" } },
      { id: '10:60:4', arabic: "يَفْتَرُونَ", transliteration: "yaftarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "invent", ur: "invent" } },
      { id: '10:60:5', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '10:60:6', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:60:7', arabic: "ٱلْكَذِبَ", transliteration: "l-kadhiba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the lie", ur: "the lie" } },
      { id: '10:60:8', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on) the Day", ur: "(پر) the دن" } },
      { id: '10:60:9', arabic: "ٱلْقِيَـٰمَةِ ۗ", transliteration: "l-qiyāmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Judgment", ur: "(of) the Judgment" } },
      { id: '10:60:10', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '10:60:11', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:60:12', arabic: "لَذُو", transliteration: "ladhū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) surely Full (of) Bounty", ur: "(is) یقیناً Full (of) Bounty" } },
      { id: '10:60:13', arabic: "فَضْلٍ", transliteration: "faḍlin", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(is) surely Full (of) Bounty", ur: "(is) یقیناً Full (of) Bounty" } },
      { id: '10:60:14', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '10:60:15', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mankind", ur: "the mankind" } },
      { id: '10:60:16', arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '10:60:17', arabic: "أَكْثَرَهُمْ", transliteration: "aktharahum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '10:60:18', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(are) not", ur: "(are) نہیں" } },
      { id: '10:60:19', arabic: "يَشْكُرُونَ", transliteration: "yashkurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "grateful", ur: "grateful" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'نفی + فعل' }
      ],
    },
  },
  61: {
    text: "وَمَا تَكُونُ فِى شَأْنٍۢ وَمَا تَتْلُوا۟ مِنْهُ مِن قُرْءَانٍۢ وَلَا تَعْمَلُونَ مِنْ عَمَلٍ إِلَّا كُنَّا عَلَيْكُمْ شُهُودًا إِذْ تُفِيضُونَ فِيهِ ۚ وَمَا يَعْزُبُ عَن رَّبِّكَ مِن مِّثْقَالِ ذَرَّةٍۢ فِى ٱلْأَرْضِ وَلَا فِى ٱلسَّمَآءِ وَلَآ أَصْغَرَ مِن ذَٰلِكَ وَلَآ أَكْبَرَ إِلَّا فِى كِتَـٰبٍۢ مُّبِينٍ",
    translation: {
      en: "",
      ur: "اور تم جس حال میں ہوتے ہو یا قرآن میں کچھ پڑھتے ہو یا تم لوگ کوئی (اور) کام کرتے ہو جب اس میں مصروف ہوتے ہو ہم تمہارے سامنے ہوتے ہیں اور تمہارے پروردگار سے ذرہ برابر بھی کوئی چیز پوشیدہ نہیں ہے نہ زمین میں نہ آسمان میں اور نہ کوئی چیز اس سے چھوٹی ہے یا بڑی مگر کتاب روشن میں (لکھی ہوئی) ہے",
    },
    words: [
      { id: '10:61:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '10:61:2', arabic: "تَكُونُ", transliteration: "takūnu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '10:61:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[in]", ur: "[میں]" } },
      { id: '10:61:4', arabic: "شَأْنٍۢ", transliteration: "shanin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any situation", ur: "any situation" } },
      { id: '10:61:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:61:6', arabic: "تَتْلُوا۟", transliteration: "tatlū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you recite", ur: "تم recite" } },
      { id: '10:61:7', arabic: "مِنْهُ", transliteration: "min'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '10:61:8', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:61:9', arabic: "قُرْءَانٍۢ", transliteration: "qur'ānin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Quran", ur: "(the) Quran" } },
      { id: '10:61:10', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:61:11', arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you do", ur: "تم do" } },
      { id: '10:61:12', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '10:61:13', arabic: "عَمَلٍ", transliteration: "ʿamalin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "deed", ur: "deed" } },
      { id: '10:61:14', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '10:61:15', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We are", ur: "ہم are" } },
      { id: '10:61:16', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over you", ur: "اوپر تم" } },
      { id: '10:61:17', arabic: "شُهُودًا", transliteration: "shuhūdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "witnesses", ur: "witnesses" } },
      { id: '10:61:18', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '10:61:19', arabic: "تُفِيضُونَ", transliteration: "tufīḍūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are engaged", ur: "تم are engaged" } },
      { id: '10:61:20', arabic: "فِيهِ ۚ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '10:61:21', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '10:61:22', arabic: "يَعْزُبُ", transliteration: "yaʿzubu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "escapes", ur: "escapes" } },
      { id: '10:61:23', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:61:24', arabic: "رَّبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '10:61:25', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:61:26', arabic: "مِّثْقَالِ", transliteration: "mith'qāli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) weight", ur: "(the) weight" } },
      { id: '10:61:27', arabic: "ذَرَّةٍۢ", transliteration: "dharratin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) an atom", ur: "(of) an atom" } },
      { id: '10:61:28', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:61:29', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '10:61:30', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:61:31', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:61:32', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '10:61:33', arabic: "وَلَآ", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:61:34', arabic: "أَصْغَرَ", transliteration: "aṣghara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "smaller", ur: "smaller" } },
      { id: '10:61:35', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "than", ur: "than" } },
      { id: '10:61:36', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '10:61:37', arabic: "وَلَآ", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:61:38', arabic: "أَكْبَرَ", transliteration: "akbara", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "greater", ur: "greater" } },
      { id: '10:61:39', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '10:61:40', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '10:61:41', arabic: "كِتَـٰبٍۢ", transliteration: "kitābin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Record", ur: "a Record" } },
      { id: '10:61:42', arabic: "مُّبِينٍ", transliteration: "mubīnin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'جار + مجرور' },
        { from: 25, to: 26, label: 'جار + مجرور' },
        { from: 28, to: 29, label: 'جار + مجرور' },
        { from: 31, to: 32, label: 'جار + مجرور' },
        { from: 40, to: 41, label: 'جار + مجرور' },
        { from: 41, to: 42, label: 'موصوف + صفت' }
      ],
    },
  },
  62: {
    text: "أَلَآ إِنَّ أَوْلِيَآءَ ٱللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    translation: {
      en: "",
      ur: "سن رکھو کہ جو خدا کے دوست ہیں ان کو نہ کچھ خوف ہوگا اور نہ وہ غمناک ہوں گے",
    },
    words: [
      { id: '10:62:1', arabic: "أَلَآ", transliteration: "alā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "No doubt", ur: "نہیں doubt" } },
      { id: '10:62:2', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '10:62:3', arabic: "أَوْلِيَآءَ", transliteration: "awliyāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) friends", ur: "(the) friends" } },
      { id: '10:62:4', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '10:62:5', arabic: "لَا", transliteration: "lā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(there will be) no", ur: "(there will be) نہیں" } },
      { id: '10:62:6', arabic: "خَوْفٌ", transliteration: "khawfun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fear", ur: "ڈرنا" } },
      { id: '10:62:7', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon then", ur: "پر پھر" } },
      { id: '10:62:8', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:62:9', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '10:62:10', arabic: "يَحْزَنُونَ", transliteration: "yaḥzanūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will grieve", ur: "will grieve" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  63: {
    text: "ٱلَّذِينَ ءَامَنُوا۟ وَكَانُوا۟ يَتَّقُونَ",
    translation: {
      en: "",
      ur: "(یعنی) جو لوگ ایمان لائے اور پرہیزگار رہے",
    },
    words: [
      { id: '10:63:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '10:63:2', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '10:63:3', arabic: "وَكَانُوا۟", transliteration: "wakānū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and are", ur: "اور are" } },
      { id: '10:63:4', arabic: "يَتَّقُونَ", transliteration: "yattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "conscious (of Allah)", ur: "conscious (of اللہ)" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  64: {
    text: "لَهُمُ ٱلْبُشْرَىٰ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا وَفِى ٱلْـَٔاخِرَةِ ۚ لَا تَبْدِيلَ لِكَلِمَـٰتِ ٱللَّهِ ۚ ذَٰلِكَ هُوَ ٱلْفَوْزُ ٱلْعَظِيمُ",
    translation: {
      en: "",
      ur: "ان کے لیے دنیا کی زندگی میں بھی بشارت ہے اور آخرت میں بھی۔ خدا کی باتیں بدلتی نہیں۔ یہی تو بڑی کامیابی ہے",
    },
    words: [
      { id: '10:64:1', arabic: "لَهُمُ", transliteration: "lahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For them", ur: "For them" } },
      { id: '10:64:2', arabic: "ٱلْبُشْرَىٰ", transliteration: "l-bush'rā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) the glad tidings", ur: "(are) the glad tidings" } },
      { id: '10:64:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:64:4', arabic: "ٱلْحَيَوٰةِ", transliteration: "l-ḥayati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the life", ur: "the زندگی" } },
      { id: '10:64:5', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the world", ur: "(of) the دنیا" } },
      { id: '10:64:6', arabic: "وَفِى", transliteration: "wafī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and in", ur: "اور میں" } },
      { id: '10:64:7', arabic: "ٱلْـَٔاخِرَةِ ۚ", transliteration: "l-ākhirati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Hereafter", ur: "the آخرت" } },
      { id: '10:64:8', arabic: "لَا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "No", ur: "نہیں" } },
      { id: '10:64:9', arabic: "تَبْدِيلَ", transliteration: "tabdīla", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "change", ur: "change" } },
      { id: '10:64:10', arabic: "لِكَلِمَـٰتِ", transliteration: "likalimāti", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is there) in the Words", ur: "(is there) میں the Words" } },
      { id: '10:64:11', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '10:64:12', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '10:64:13', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "is", ur: "is" } },
      { id: '10:64:14', arabic: "ٱلْفَوْزُ", transliteration: "l-fawzu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the success", ur: "the success" } },
      { id: '10:64:15', arabic: "ٱلْعَظِيمُ", transliteration: "l-ʿaẓīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the great", ur: "the great" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'موصوف + صفت' }
      ],
    },
  },
  65: {
    text: "وَلَا يَحْزُنكَ قَوْلُهُمْ ۘ إِنَّ ٱلْعِزَّةَ لِلَّهِ جَمِيعًا ۚ هُوَ ٱلسَّمِيعُ ٱلْعَلِيمُ",
    translation: {
      en: "",
      ur: "اور (اے پیغمبر) ان لوگوں کی باتوں سے آزردہ نہ ہونا (کیونکہ) عزت سب خدا ہی کی ہے وہ (سب کچھ) سنتا (اور) جانتا ہے",
    },
    words: [
      { id: '10:65:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (let) not", ur: "اور (let) نہیں" } },
      { id: '10:65:2', arabic: "يَحْزُنكَ", transliteration: "yaḥzunka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "grieve you", ur: "grieve تم" } },
      { id: '10:65:3', arabic: "قَوْلُهُمْ ۘ", transliteration: "qawluhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their speech", ur: "their speech" } },
      { id: '10:65:4', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '10:65:5', arabic: "ٱلْعِزَّةَ", transliteration: "l-ʿizata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the honor", ur: "the honor" } },
      { id: '10:65:6', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(belongs) to Allah", ur: "(belongs) کو اللہ" } },
      { id: '10:65:7', arabic: "جَمِيعًا ۚ", transliteration: "jamīʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } },
      { id: '10:65:8', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '10:65:9', arabic: "ٱلسَّمِيعُ", transliteration: "l-samīʿu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) the All-Hearer", ur: "(is) the سب-Hearer" } },
      { id: '10:65:10', arabic: "ٱلْعَلِيمُ", transliteration: "l-ʿalīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the All-Knower", ur: "the سب-Knower" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  66: {
    text: "أَلَآ إِنَّ لِلَّهِ مَن فِى ٱلسَّمَـٰوَٰتِ وَمَن فِى ٱلْأَرْضِ ۗ وَمَا يَتَّبِعُ ٱلَّذِينَ يَدْعُونَ مِن دُونِ ٱللَّهِ شُرَكَآءَ ۚ إِن يَتَّبِعُونَ إِلَّا ٱلظَّنَّ وَإِنْ هُمْ إِلَّا يَخْرُصُونَ",
    translation: {
      en: "",
      ur: "سن رکھو کہ جو مخلوق آسمانوں میں ہے اور جو زمین میں ہے سب خدا کے (بندے اور اس کے مملوک) ہیں۔ اور یہ جو خدا کے سوا (اپنے بنائے ہوئے) شریکوں کو پکارتے ہیں۔ وہ (کسی اور چیز کے) پیچھے نہیں چلتے۔ صرف ظن کے پیچھے چلتے ہیں اور محض اٹکلیں دوڑا رہے ہیں",
    },
    words: [
      { id: '10:66:1', arabic: "أَلَآ", transliteration: "alā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "No doubt", ur: "نہیں doubt" } },
      { id: '10:66:2', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '10:66:3', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Allah (belongs)", ur: "کو اللہ (belongs)" } },
      { id: '10:66:4', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whoever", ur: "whoever" } },
      { id: '10:66:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '10:66:6', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '10:66:7', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '10:66:8', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '10:66:9', arabic: "ٱلْأَرْضِ ۗ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '10:66:10', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '10:66:11', arabic: "يَتَّبِعُ", transliteration: "yattabiʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "follow", ur: "follow" } },
      { id: '10:66:12', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '10:66:13', arabic: "يَدْعُونَ", transliteration: "yadʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "invoke", ur: "invoke" } },
      { id: '10:66:14', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "other than Allah", ur: "other than اللہ" } },
      { id: '10:66:15', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "other than Allah", ur: "other than اللہ" } },
      { id: '10:66:16', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than Allah", ur: "other than اللہ" } },
      { id: '10:66:17', arabic: "شُرَكَآءَ ۚ", transliteration: "shurakāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "partners", ur: "partners" } },
      { id: '10:66:18', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '10:66:19', arabic: "يَتَّبِعُونَ", transliteration: "yattabiʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they follow", ur: "وہ لوگ follow" } },
      { id: '10:66:20', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '10:66:21', arabic: "ٱلظَّنَّ", transliteration: "l-ẓana", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the assumption", ur: "the assumption" } },
      { id: '10:66:22', arabic: "وَإِنْ", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:66:23', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '10:66:24', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '10:66:25', arabic: "يَخْرُصُونَ", transliteration: "yakhruṣūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "guess", ur: "guess" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  67: {
    text: "هُوَ ٱلَّذِى جَعَلَ لَكُمُ ٱلَّيْلَ لِتَسْكُنُوا۟ فِيهِ وَٱلنَّهَارَ مُبْصِرًا ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ لِّقَوْمٍۢ يَسْمَعُونَ",
    translation: {
      en: "",
      ur: "وہی تو ہے جس نے تمہارے لیے رات بنائی تاکہ اس میں آرام کرو اور روز روشن بنایا ( تاکہ اس میں کام کرو) جو لوگ (مادہٴ) سماعت رکھتے ہیں ان کے لیے ان میں نشانیاں ہیں",
    },
    words: [
      { id: '10:67:1', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '10:67:2', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '10:67:3', arabic: "جَعَلَ", transliteration: "jaʿala", pos: ['N'], posLabel: 'N', root: "ج ع ل", meaning: { en: "made", ur: "made" } },
      { id: '10:67:4', arabic: "لَكُمُ", transliteration: "lakumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '10:67:5', arabic: "ٱلَّيْلَ", transliteration: "al-layla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the night", ur: "the رات" } },
      { id: '10:67:6', arabic: "لِتَسْكُنُوا۟", transliteration: "litaskunū", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that you may rest", ur: "وہ تم may rest" } },
      { id: '10:67:7', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '10:67:8', arabic: "وَٱلنَّهَارَ", transliteration: "wal-nahāra", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the day", ur: "اور the دن" } },
      { id: '10:67:9', arabic: "مُبْصِرًا ۚ", transliteration: "mub'ṣiran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "giving visibility", ur: "giving visibility" } },
      { id: '10:67:10', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '10:67:11', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:67:12', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '10:67:13', arabic: "لَـَٔايَـٰتٍۢ", transliteration: "laāyātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely (are) Signs", ur: "یقیناً (are) نشانیاں" } },
      { id: '10:67:14', arabic: "لِّقَوْمٍۢ", transliteration: "liqawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for a people", ur: "for a لوگ" } },
      { id: '10:67:15', arabic: "يَسْمَعُونَ", transliteration: "yasmaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(who) listen", ur: "(جو) listen" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  68: {
    text: "قَالُوا۟ ٱتَّخَذَ ٱللَّهُ وَلَدًۭا ۗ سُبْحَـٰنَهُۥ ۖ هُوَ ٱلْغَنِىُّ ۖ لَهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۚ إِنْ عِندَكُم مِّن سُلْطَـٰنٍۭ بِهَـٰذَآ ۚ أَتَقُولُونَ عَلَى ٱللَّهِ مَا لَا تَعْلَمُونَ",
    translation: {
      en: "",
      ur: "(بعض لوگ) کہتے ہیں کہ خدا نے بیٹا بنا لیا ہے۔ اس کی ذات (اولاد سے) پاک ہے (اور) وہ بےنیاز ہے۔ جو کچھ آسمانوں میں ہے اور جو کچھ زمین میں ہے وہ سب اسی کا ہے (اے افتراء پردازو) تمہارے پاس اس (قول باطل) کی کوئی دلیل نہیں ہے۔ تم خدا کی نسبت ایسی بات کیوں کہتے ہو جو جانتے نہیں",
    },
    words: [
      { id: '10:68:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They say", ur: "وہ لوگ کہو" } },
      { id: '10:68:2', arabic: "ٱتَّخَذَ", transliteration: "ittakhadha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah has taken", ur: "اللہ has taken" } },
      { id: '10:68:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah has taken", ur: "اللہ has taken" } },
      { id: '10:68:4', arabic: "وَلَدًۭا ۗ", transliteration: "waladan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "a son", ur: "a بیٹا" } },
      { id: '10:68:5', arabic: "سُبْحَـٰنَهُۥ ۖ", transliteration: "sub'ḥānahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Glory be to Him", ur: "Glory be کو Him" } },
      { id: '10:68:6', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '10:68:7', arabic: "ٱلْغَنِىُّ ۖ", transliteration: "l-ghaniyu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the Self-sufficient", ur: "(is) the Self-sufficient" } },
      { id: '10:68:8', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "To Him (belongs)", ur: "کو Him (belongs)" } },
      { id: '10:68:9', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whatever", ur: "whatever" } },
      { id: '10:68:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '10:68:11', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '10:68:12', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whatever", ur: "اور whatever" } },
      { id: '10:68:13', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '10:68:14', arabic: "ٱلْأَرْضِ ۚ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '10:68:15', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '10:68:16', arabic: "عِندَكُم", transliteration: "ʿindakum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have", ur: "تم have" } },
      { id: '10:68:17', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any", ur: "any" } },
      { id: '10:68:18', arabic: "سُلْطَـٰنٍۭ", transliteration: "sul'ṭānin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "authority", ur: "authority" } },
      { id: '10:68:19', arabic: "بِهَـٰذَآ ۚ", transliteration: "bihādhā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for this", ur: "for this" } },
      { id: '10:68:20', arabic: "أَتَقُولُونَ", transliteration: "ataqūlūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you say", ur: "Do تم کہو" } },
      { id: '10:68:21', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "about", ur: "about" } },
      { id: '10:68:22', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:68:23', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '10:68:24', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '10:68:25', arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "you know", ur: "تم جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'نفی + فعل' }
      ],
    },
  },
  69: {
    text: "قُلْ إِنَّ ٱلَّذِينَ يَفْتَرُونَ عَلَى ٱللَّهِ ٱلْكَذِبَ لَا يُفْلِحُونَ",
    translation: {
      en: "",
      ur: "کہہ دو جو لوگ خدا پر جھوٹ بہتان باندھتے ہیں فلاح نہیں پائیں گے",
    },
    words: [
      { id: '10:69:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '10:69:2', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '10:69:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '10:69:4', arabic: "يَفْتَرُونَ", transliteration: "yaftarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "invent", ur: "invent" } },
      { id: '10:69:5', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '10:69:6', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:69:7', arabic: "ٱلْكَذِبَ", transliteration: "l-kadhiba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the lie", ur: "the lie" } },
      { id: '10:69:8', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "they will not succeed", ur: "وہ لوگ will نہیں succeed" } },
      { id: '10:69:9', arabic: "يُفْلِحُونَ", transliteration: "yuf'liḥūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will not succeed", ur: "وہ لوگ will نہیں succeed" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'نفی + فعل' }
      ],
    },
  },
  70: {
    text: "مَتَـٰعٌۭ فِى ٱلدُّنْيَا ثُمَّ إِلَيْنَا مَرْجِعُهُمْ ثُمَّ نُذِيقُهُمُ ٱلْعَذَابَ ٱلشَّدِيدَ بِمَا كَانُوا۟ يَكْفُرُونَ",
    translation: {
      en: "",
      ur: "(ان کے لیے جو) فائدے ہیں دنیا میں (ہیں) پھر ان کو ہماری ہی طرف لوٹ کر آنا ہے۔ اس وقت ہم ان کو شدید عذاب (کے مزے) چکھائیں گے کیونکہ کفر (کی باتیں) کیا کرتے تھے",
    },
    words: [
      { id: '10:70:1', arabic: "مَتَـٰعٌۭ", transliteration: "matāʿun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "An enjoyment", ur: "An enjoyment" } },
      { id: '10:70:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:70:3', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the world", ur: "the دنیا" } },
      { id: '10:70:4', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '10:70:5', arabic: "إِلَيْنَا", transliteration: "ilaynā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to Us", ur: "کو Us" } },
      { id: '10:70:6', arabic: "مَرْجِعُهُمْ", transliteration: "marjiʿuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) their return", ur: "(is) their return" } },
      { id: '10:70:7', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '10:70:8', arabic: "نُذِيقُهُمُ", transliteration: "nudhīquhumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will make them taste", ur: "ہم will make them taste" } },
      { id: '10:70:9', arabic: "ٱلْعَذَابَ", transliteration: "l-ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '10:70:10', arabic: "ٱلشَّدِيدَ", transliteration: "l-shadīda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the severe", ur: "the severe" } },
      { id: '10:70:11', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because", ur: "because" } },
      { id: '10:70:12', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used to", ur: "وہ لوگ used کو" } },
      { id: '10:70:13', arabic: "يَكْفُرُونَ", transliteration: "yakfurūna", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  71: {
    text: "۞ وَٱتْلُ عَلَيْهِمْ نَبَأَ نُوحٍ إِذْ قَالَ لِقَوْمِهِۦ يَـٰقَوْمِ إِن كَانَ كَبُرَ عَلَيْكُم مَّقَامِى وَتَذْكِيرِى بِـَٔايَـٰتِ ٱللَّهِ فَعَلَى ٱللَّهِ تَوَكَّلْتُ فَأَجْمِعُوٓا۟ أَمْرَكُمْ وَشُرَكَآءَكُمْ ثُمَّ لَا يَكُنْ أَمْرُكُمْ عَلَيْكُمْ غُمَّةًۭ ثُمَّ ٱقْضُوٓا۟ إِلَىَّ وَلَا تُنظِرُونِ",
    translation: {
      en: "",
      ur: "اور ان کو نوح کا قصہ پڑھ کر سنادو۔ جب انہوں نے اپنی قوم سے کہا کہ اے قوم! اگر تم کو میرا تم میں رہنا اور خدا کی آیتوں سے نصیحت کرنا ناگوار ہو تو میں خدا پر بھروسہ رکھتا ہوں۔ تم اپنے شریکوں کے ساتھ مل کر ایک کام (جو میرے بارے میں کرنا چاہو) مقرر کرلو اور وہ تمہاری تمام جماعت (کو معلوم ہوجائے اور کسی) سے پوشیدہ نہ رہے اور پھر وہ کام میرے حق میں کر گزرو اور مجھے مہلت نہ دو",
    },
    words: [
      { id: '10:71:1', arabic: "۞ وَٱتْلُ", transliteration: "wa-ut'lu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And recite", ur: "اور recite" } },
      { id: '10:71:2', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '10:71:3', arabic: "نَبَأَ", transliteration: "naba-a", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the news", ur: "the news" } },
      { id: '10:71:4', arabic: "نُوحٍ", transliteration: "nūḥin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Nuh", ur: "(of) Nuh" } },
      { id: '10:71:5', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '10:71:6', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '10:71:7', arabic: "لِقَوْمِهِۦ", transliteration: "liqawmihi", pos: ['P+N'], posLabel: 'P+N', root: "ق و م", meaning: { en: "to his people", ur: "کو his لوگ" } },
      { id: '10:71:8', arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ" } },
      { id: '10:71:9', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '10:71:10', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '10:71:11', arabic: "كَبُرَ", transliteration: "kabura", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "hard", ur: "hard" } },
      { id: '10:71:12', arabic: "عَلَيْكُم", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on you", ur: "پر تم" } },
      { id: '10:71:13', arabic: "مَّقَامِى", transliteration: "maqāmī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my stay", ur: "my stay" } },
      { id: '10:71:14', arabic: "وَتَذْكِيرِى", transliteration: "watadhkīrī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and my reminding", ur: "اور my reminding" } },
      { id: '10:71:15', arabic: "بِـَٔايَـٰتِ", transliteration: "biāyāti", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "the Signs of Allah", ur: "the نشانیاں of اللہ" } },
      { id: '10:71:16', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Signs of Allah", ur: "the نشانیاں of اللہ" } },
      { id: '10:71:17', arabic: "فَعَلَى", transliteration: "faʿalā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then on", ur: "پھر پر" } },
      { id: '10:71:18', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:71:19', arabic: "تَوَكَّلْتُ", transliteration: "tawakkaltu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I put my trust", ur: "میں put my trust" } },
      { id: '10:71:20', arabic: "فَأَجْمِعُوٓا۟", transliteration: "fa-ajmiʿū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So you all resolve", ur: "So تم سب resolve" } },
      { id: '10:71:21', arabic: "أَمْرَكُمْ", transliteration: "amrakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your plan", ur: "your plan" } },
      { id: '10:71:22', arabic: "وَشُرَكَآءَكُمْ", transliteration: "washurakāakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your partners", ur: "اور your partners" } },
      { id: '10:71:23', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '10:71:24', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "let not be", ur: "let نہیں be" } },
      { id: '10:71:25', arabic: "يَكُنْ", transliteration: "yakun", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "let not be", ur: "let نہیں be" } },
      { id: '10:71:26', arabic: "أَمْرُكُمْ", transliteration: "amrukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) your plan", ur: "(میں) your plan" } },
      { id: '10:71:27', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '10:71:28', arabic: "غُمَّةًۭ", transliteration: "ghummatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any doubt", ur: "any doubt" } },
      { id: '10:71:29', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '10:71:30', arabic: "ٱقْضُوٓا۟", transliteration: "iq'ḍū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "carry (it out)", ur: "carry (it out)" } },
      { id: '10:71:31', arabic: "إِلَىَّ", transliteration: "ilayya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon me", ur: "پر me" } },
      { id: '10:71:32', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '10:71:33', arabic: "تُنظِرُونِ", transliteration: "tunẓirūni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "give me respite", ur: "give me respite" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'نفی + فعل' },
        { from: 25, to: 26, label: 'فعل + فاعل' }
      ],
    },
  },
  72: {
    text: "فَإِن تَوَلَّيْتُمْ فَمَا سَأَلْتُكُم مِّنْ أَجْرٍ ۖ إِنْ أَجْرِىَ إِلَّا عَلَى ٱللَّهِ ۖ وَأُمِرْتُ أَنْ أَكُونَ مِنَ ٱلْمُسْلِمِينَ",
    translation: {
      en: "",
      ur: "اور اگر تم نے منہ پھیر لیا تو (تم جانتے ہو کہ) میں نے تم سے کچھ معاوضہ نہیں مانگا۔ میرا معاوضہ تو خدا کے ذمے ہے۔ اور مجھے حکم ہوا ہے کہ میں فرمانبرداروں میں رہوں",
    },
    words: [
      { id: '10:72:1', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '10:72:2', arabic: "تَوَلَّيْتُمْ", transliteration: "tawallaytum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you turn away", ur: "تم turn away" } },
      { id: '10:72:3', arabic: "فَمَا", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then not", ur: "پھر نہیں" } },
      { id: '10:72:4', arabic: "سَأَلْتُكُم", transliteration: "sa-altukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I have asked you", ur: "میں have asked تم" } },
      { id: '10:72:5', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any", ur: "any" } },
      { id: '10:72:6', arabic: "أَجْرٍ ۖ", transliteration: "ajrin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "reward", ur: "ثواب" } },
      { id: '10:72:7', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '10:72:8', arabic: "أَجْرِىَ", transliteration: "ajriya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) my reward", ur: "(is) my ثواب" } },
      { id: '10:72:9', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '10:72:10', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '10:72:11', arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:72:12', arabic: "وَأُمِرْتُ", transliteration: "wa-umir'tu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and I have been commanded", ur: "اور میں have been commanded" } },
      { id: '10:72:13', arabic: "أَنْ", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '10:72:14', arabic: "أَكُونَ", transliteration: "akūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I be", ur: "میں be" } },
      { id: '10:72:15', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:72:16', arabic: "ٱلْمُسْلِمِينَ", transliteration: "l-mus'limīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Muslims", ur: "the Muslims" } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  73: {
    text: "فَكَذَّبُوهُ فَنَجَّيْنَـٰهُ وَمَن مَّعَهُۥ فِى ٱلْفُلْكِ وَجَعَلْنَـٰهُمْ خَلَـٰٓئِفَ وَأَغْرَقْنَا ٱلَّذِينَ كَذَّبُوا۟ بِـَٔايَـٰتِنَا ۖ فَٱنظُرْ كَيْفَ كَانَ عَـٰقِبَةُ ٱلْمُنذَرِينَ",
    translation: {
      en: "",
      ur: "لیکن ان لوگوں نے ان کی تکذیب کی تو ہم نے ان کو اور جو لوگ ان کے ساتھ کشتی میں سوار تھے سب کو (طوفان سے) بچا لیا اور انہیں (زمین میں) خلیفہ بنادیا اور جن لوگوں نے ہماری آیتوں کو جھٹلایا ان کو غرق کر دیا تو دیکھ لو کہ جو لوگ ڈرائے گئے تھے ان کا کیا انجام ہوا",
    },
    words: [
      { id: '10:73:1', arabic: "فَكَذَّبُوهُ", transliteration: "fakadhabūhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But they denied him", ur: "لیکن وہ لوگ denied him" } },
      { id: '10:73:2', arabic: "فَنَجَّيْنَـٰهُ", transliteration: "fanajjaynāhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so We saved him", ur: "so ہم saved him" } },
      { id: '10:73:3', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (those) who", ur: "اور (those) جو" } },
      { id: '10:73:4', arabic: "مَّعَهُۥ", transliteration: "maʿahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(were) with him", ur: "(were) ساتھ him" } },
      { id: '10:73:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:73:6', arabic: "ٱلْفُلْكِ", transliteration: "l-ful'ki", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ship", ur: "the ship" } },
      { id: '10:73:7', arabic: "وَجَعَلْنَـٰهُمْ", transliteration: "wajaʿalnāhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We made them", ur: "اور ہم made them" } },
      { id: '10:73:8', arabic: "خَلَـٰٓئِفَ", transliteration: "khalāifa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "successors", ur: "successors" } },
      { id: '10:73:9', arabic: "وَأَغْرَقْنَا", transliteration: "wa-aghraqnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We drowned", ur: "اور ہم drowned" } },
      { id: '10:73:10', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '10:73:11', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '10:73:12', arabic: "بِـَٔايَـٰتِنَا ۖ", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Our Signs", ur: "Our نشانیاں" } },
      { id: '10:73:13', arabic: "فَٱنظُرْ", transliteration: "fa-unẓur", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then see", ur: "پھر دیکھنا" } },
      { id: '10:73:14', arabic: "كَيْفَ", transliteration: "kayfa", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "how", ur: "how" } },
      { id: '10:73:15', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '10:73:16', arabic: "عَـٰقِبَةُ", transliteration: "ʿāqibatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) end", ur: "(the) end" } },
      { id: '10:73:17', arabic: "ٱلْمُنذَرِينَ", transliteration: "l-mundharīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(of) those who were warned", ur: "(of) جو لوگ were warned" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  74: {
    text: "ثُمَّ بَعَثْنَا مِنۢ بَعْدِهِۦ رُسُلًا إِلَىٰ قَوْمِهِمْ فَجَآءُوهُم بِٱلْبَيِّنَـٰتِ فَمَا كَانُوا۟ لِيُؤْمِنُوا۟ بِمَا كَذَّبُوا۟ بِهِۦ مِن قَبْلُ ۚ كَذَٰلِكَ نَطْبَعُ عَلَىٰ قُلُوبِ ٱلْمُعْتَدِينَ",
    translation: {
      en: "",
      ur: "پھر نوح کے بعد ہم نے اور پیغمبر اپنی اپنی قوم کی طرف بھیجے۔ تو وہ ان کے پاس کھلی نشانیاں لے کر آئے۔ مگر وہ لوگ ایسے نہ تھے کہ جس چیز کی پہلے تکذیب کرچکے تھے اس پر ایمان لے آتے۔ اسی طرح ہم زیادتی کرنے والوں کے دلوں پر مہر لگا دیتے ہیں",
    },
    words: [
      { id: '10:74:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '10:74:2', arabic: "بَعَثْنَا", transliteration: "baʿathnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We sent", ur: "ہم sent" } },
      { id: '10:74:3', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "after him", ur: "بعد him" } },
      { id: '10:74:4', arabic: "بَعْدِهِۦ", transliteration: "baʿdihi", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after him", ur: "بعد him" } },
      { id: '10:74:5', arabic: "رُسُلًا", transliteration: "rusulan", pos: ['N'], posLabel: 'N', root: "ر س ل", meaning: { en: "Messengers", ur: "Messengers" } },
      { id: '10:74:6', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '10:74:7', arabic: "قَوْمِهِمْ", transliteration: "qawmihim", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "their people", ur: "their لوگ" } },
      { id: '10:74:8', arabic: "فَجَآءُوهُم", transliteration: "fajāūhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and they came to them", ur: "اور وہ لوگ came کو them" } },
      { id: '10:74:9', arabic: "بِٱلْبَيِّنَـٰتِ", transliteration: "bil-bayināti", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with clear proofs", ur: "ساتھ clear proofs" } },
      { id: '10:74:10', arabic: "فَمَا", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But not", ur: "لیکن نہیں" } },
      { id: '10:74:11', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they were", ur: "وہ لوگ were" } },
      { id: '10:74:12', arabic: "لِيُؤْمِنُوا۟", transliteration: "liyu'minū", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to believe", ur: "کو ایمان لانا" } },
      { id: '10:74:13', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '10:74:14', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they had denied", ur: "وہ لوگ had denied" } },
      { id: '10:74:15', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[it]", ur: "[it]" } },
      { id: '10:74:16', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '10:74:17', arabic: "قَبْلُ ۚ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '10:74:18', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '10:74:19', arabic: "نَطْبَعُ", transliteration: "naṭbaʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We seal", ur: "ہم seal" } },
      { id: '10:74:20', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[on]", ur: "[پر]" } },
      { id: '10:74:21', arabic: "قُلُوبِ", transliteration: "qulūbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the hearts", ur: "the hearts" } },
      { id: '10:74:22', arabic: "ٱلْمُعْتَدِينَ", transliteration: "l-muʿ'tadīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the transgressors", ur: "(of) the transgressors" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 20, to: 21, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  75: {
    text: "ثُمَّ بَعَثْنَا مِنۢ بَعْدِهِم مُّوسَىٰ وَهَـٰرُونَ إِلَىٰ فِرْعَوْنَ وَمَلَإِي۟هِۦ بِـَٔايَـٰتِنَا فَٱسْتَكْبَرُوا۟ وَكَانُوا۟ قَوْمًۭا مُّجْرِمِينَ",
    translation: {
      en: "",
      ur: "پھر ان کے بعد ہم نے موسیٰ اور ہارون کو اپنی نشانیاں دے کر فرعون اور اس کے سرداروں کے پاس بھیجا تو انہوں نے تکبر کیا اور وہ گنہگار لوگ تھے",
    },
    words: [
      { id: '10:75:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '10:75:2', arabic: "بَعَثْنَا", transliteration: "baʿathnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We sent", ur: "ہم sent" } },
      { id: '10:75:3', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "after them", ur: "بعد them" } },
      { id: '10:75:4', arabic: "بَعْدِهِم", transliteration: "baʿdihim", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after them", ur: "بعد them" } },
      { id: '10:75:5', arabic: "مُّوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Musa", ur: "Musa" } },
      { id: '10:75:6', arabic: "وَهَـٰرُونَ", transliteration: "wahārūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Harun", ur: "اور Harun" } },
      { id: '10:75:7', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '10:75:8', arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Firaun", ur: "Firaun" } },
      { id: '10:75:9', arabic: "وَمَلَإِي۟هِۦ", transliteration: "wamala-ihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and his chiefs", ur: "اور his chiefs" } },
      { id: '10:75:10', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Our Signs", ur: "ساتھ Our نشانیاں" } },
      { id: '10:75:11', arabic: "فَٱسْتَكْبَرُوا۟", transliteration: "fa-is'takbarū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "but they were arrogant", ur: "لیکن وہ لوگ were arrogant" } },
      { id: '10:75:12', arabic: "وَكَانُوا۟", transliteration: "wakānū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and were", ur: "اور were" } },
      { id: '10:75:13', arabic: "قَوْمًۭا", transliteration: "qawman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a people", ur: "a لوگ" } },
      { id: '10:75:14', arabic: "مُّجْرِمِينَ", transliteration: "muj'rimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "criminal", ur: "criminal" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  76: {
    text: "فَلَمَّا جَآءَهُمُ ٱلْحَقُّ مِنْ عِندِنَا قَالُوٓا۟ إِنَّ هَـٰذَا لَسِحْرٌۭ مُّبِينٌۭ",
    translation: {
      en: "",
      ur: "تو جب ان کے پاس ہمارے ہاں سے حق آیا تو کہنے لگے کہ یہ تو صریح جادو ہے",
    },
    words: [
      { id: '10:76:1', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So when", ur: "So when" } },
      { id: '10:76:2', arabic: "جَآءَهُمُ", transliteration: "jāahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came to them", ur: "came کو them" } },
      { id: '10:76:3', arabic: "ٱلْحَقُّ", transliteration: "l-ḥaqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '10:76:4', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from Us", ur: "سے Us" } },
      { id: '10:76:5', arabic: "عِندِنَا", transliteration: "ʿindinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from Us", ur: "سے Us" } },
      { id: '10:76:6', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they said", ur: "وہ لوگ کہا" } },
      { id: '10:76:7', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '10:76:8', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '10:76:9', arabic: "لَسِحْرٌۭ", transliteration: "lasiḥ'run", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) surely, a magic", ur: "(is) یقیناً, a magic" } },
      { id: '10:76:10', arabic: "مُّبِينٌۭ", transliteration: "mubīnun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ],
    },
  },
  77: {
    text: "قَالَ مُوسَىٰٓ أَتَقُولُونَ لِلْحَقِّ لَمَّا جَآءَكُمْ ۖ أَسِحْرٌ هَـٰذَا وَلَا يُفْلِحُ ٱلسَّـٰحِرُونَ",
    translation: {
      en: "",
      ur: "موسیٰ نے کہا کیا تم حق کے بارے میں جب وہ تمہارے پاس آیا یہ کہتے ہو کہ یہ جادو ہے۔ حالانکہ جادوگر فلاح نہیں پانے کے",
    },
    words: [
      { id: '10:77:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Musa said", ur: "Musa کہا" } },
      { id: '10:77:2', arabic: "مُوسَىٰٓ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa said", ur: "Musa کہا" } },
      { id: '10:77:3', arabic: "أَتَقُولُونَ", transliteration: "ataqūlūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you say", ur: "Do تم کہو" } },
      { id: '10:77:4', arabic: "لِلْحَقِّ", transliteration: "lil'ḥaqqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "about the truth", ur: "about the سچ" } },
      { id: '10:77:5', arabic: "لَمَّا", transliteration: "lammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '10:77:6', arabic: "جَآءَكُمْ ۖ", transliteration: "jāakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it has come to you", ur: "it has come کو تم" } },
      { id: '10:77:7', arabic: "أَسِحْرٌ", transliteration: "asiḥ'run", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is this magic", ur: "Is this magic" } },
      { id: '10:77:8', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is this magic", ur: "Is this magic" } },
      { id: '10:77:9', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But (will) not", ur: "لیکن (will) نہیں" } },
      { id: '10:77:10', arabic: "يُفْلِحُ", transliteration: "yuf'liḥu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "succeed", ur: "succeed" } },
      { id: '10:77:11', arabic: "ٱلسَّـٰحِرُونَ", transliteration: "l-sāḥirūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the magicians", ur: "the magicians" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  78: {
    text: "قَالُوٓا۟ أَجِئْتَنَا لِتَلْفِتَنَا عَمَّا وَجَدْنَا عَلَيْهِ ءَابَآءَنَا وَتَكُونَ لَكُمَا ٱلْكِبْرِيَآءُ فِى ٱلْأَرْضِ وَمَا نَحْنُ لَكُمَا بِمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "وہ بولے کیا تم ہمارے پاس اس لئے آئے ہو کہ جس (راہ) پر ہم اپنے باپ دادا کو پاتے رہے ہیں اس سے ہم کو پھیردو۔ اور (اس) ملک میں تم دونوں کی ہی سرداری ہوجائے اور ہم تم پر ایمان لانے والے نہیں ہیں",
    },
    words: [
      { id: '10:78:1', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '10:78:2', arabic: "أَجِئْتَنَا", transliteration: "aji'tanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Have you come to us", ur: "Have تم come کو us" } },
      { id: '10:78:3', arabic: "لِتَلْفِتَنَا", transliteration: "litalfitanā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to turn us away", ur: "کو turn us away" } },
      { id: '10:78:4', arabic: "عَمَّا", transliteration: "ʿammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from that", ur: "سے وہ" } },
      { id: '10:78:5', arabic: "وَجَدْنَا", transliteration: "wajadnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "we found", ur: "ہم found" } },
      { id: '10:78:6', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on it", ur: "پر it" } },
      { id: '10:78:7', arabic: "ءَابَآءَنَا", transliteration: "ābāanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our forefathers", ur: "our forefathers" } },
      { id: '10:78:8', arabic: "وَتَكُونَ", transliteration: "watakūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and you two (may) have", ur: "اور تم two (may) have" } },
      { id: '10:78:9', arabic: "لَكُمَا", transliteration: "lakumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "and you two (may) have", ur: "اور تم two (may) have" } },
      { id: '10:78:10', arabic: "ٱلْكِبْرِيَآءُ", transliteration: "l-kib'riyāu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the greatness", ur: "the greatness" } },
      { id: '10:78:11', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:78:12', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the land", ur: "the land" } },
      { id: '10:78:13', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And we (are) not", ur: "اور ہم (are) نہیں" } },
      { id: '10:78:14', arabic: "نَحْنُ", transliteration: "naḥnu", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "And we (are) not", ur: "اور ہم (are) نہیں" } },
      { id: '10:78:15', arabic: "لَكُمَا", transliteration: "lakumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) you two", ur: "(میں) تم two" } },
      { id: '10:78:16', arabic: "بِمُؤْمِنِينَ", transliteration: "bimu'minīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "believers", ur: "مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصوف + صفت' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  79: {
    text: "وَقَالَ فِرْعَوْنُ ٱئْتُونِى بِكُلِّ سَـٰحِرٍ عَلِيمٍۢ",
    translation: {
      en: "",
      ur: "اور فرعون نے حکم دیا کہ سب کامل فن جادوگروں کو ہمارے پاس لے آؤ",
    },
    words: [
      { id: '10:79:1', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And Firaun said", ur: "اور Firaun کہا" } },
      { id: '10:79:2', arabic: "فِرْعَوْنُ", transliteration: "fir'ʿawnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And Firaun said", ur: "اور Firaun کہا" } },
      { id: '10:79:3', arabic: "ٱئْتُونِى", transliteration: "i'tūnī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Bring to me", ur: "Bring کو me" } },
      { id: '10:79:4', arabic: "بِكُلِّ", transliteration: "bikulli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '10:79:5', arabic: "سَـٰحِرٍ", transliteration: "sāḥirin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "magician", ur: "magician" } },
      { id: '10:79:6', arabic: "عَلِيمٍۢ", transliteration: "ʿalīmin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "learned", ur: "learned" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  80: {
    text: "فَلَمَّا جَآءَ ٱلسَّحَرَةُ قَالَ لَهُم مُّوسَىٰٓ أَلْقُوا۟ مَآ أَنتُم مُّلْقُونَ",
    translation: {
      en: "",
      ur: "جب جادوگر آئے تو موسیٰ نے ان سے کہا تم کو جو ڈالنا ہے ڈالو",
    },
    words: [
      { id: '10:80:1', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So when", ur: "So when" } },
      { id: '10:80:2', arabic: "جَآءَ", transliteration: "jāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came", ur: "came" } },
      { id: '10:80:3', arabic: "ٱلسَّحَرَةُ", transliteration: "l-saḥaratu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the magicians", ur: "the magicians" } },
      { id: '10:80:4', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "said", ur: "کہا" } },
      { id: '10:80:5', arabic: "لَهُم", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '10:80:6', arabic: "مُّوسَىٰٓ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Musa", ur: "Musa" } },
      { id: '10:80:7', arabic: "أَلْقُوا۟", transliteration: "alqū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Throw", ur: "Throw" } },
      { id: '10:80:8', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "whatever", ur: "whatever" } },
      { id: '10:80:9', arabic: "أَنتُم", transliteration: "antum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '10:80:10', arabic: "مُّلْقُونَ", transliteration: "mul'qūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(wish to) throw", ur: "(wish کو) throw" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  81: {
    text: "فَلَمَّآ أَلْقَوْا۟ قَالَ مُوسَىٰ مَا جِئْتُم بِهِ ٱلسِّحْرُ ۖ إِنَّ ٱللَّهَ سَيُبْطِلُهُۥٓ ۖ إِنَّ ٱللَّهَ لَا يُصْلِحُ عَمَلَ ٱلْمُفْسِدِينَ",
    translation: {
      en: "",
      ur: "جب انہوں نے (اپنی رسیوں اور لاٹھیوں کو) ڈالا تو موسیٰ نے کہا کہ جو چیزیں تم (بنا کر) لائے ہو جادو ہے خدا اس کو بھی نیست ونابود کردے گا۔ خدا شریروں کے کام سنوارا نہیں کرتا",
    },
    words: [
      { id: '10:81:1', arabic: "فَلَمَّآ", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then when", ur: "پھر when" } },
      { id: '10:81:2', arabic: "أَلْقَوْا۟", transliteration: "alqaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they (had) thrown", ur: "وہ لوگ (had) thrown" } },
      { id: '10:81:3', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Musa said", ur: "Musa کہا" } },
      { id: '10:81:4', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa said", ur: "Musa کہا" } },
      { id: '10:81:5', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "What", ur: "کیا" } },
      { id: '10:81:6', arabic: "جِئْتُم", transliteration: "ji'tum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have brought", ur: "تم have brought" } },
      { id: '10:81:7', arabic: "بِهِ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[it]", ur: "[it]" } },
      { id: '10:81:8', arabic: "ٱلسِّحْرُ ۖ", transliteration: "l-siḥ'ru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the magic", ur: "(is) the magic" } },
      { id: '10:81:9', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '10:81:10', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:81:11', arabic: "سَيُبْطِلُهُۥٓ ۖ", transliteration: "sayub'ṭiluhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will nullify it", ur: "will nullify it" } },
      { id: '10:81:12', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '10:81:13', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:81:14', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '10:81:15', arabic: "يُصْلِحُ", transliteration: "yuṣ'liḥu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "amend", ur: "amend" } },
      { id: '10:81:16', arabic: "عَمَلَ", transliteration: "ʿamala", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the work", ur: "the work" } },
      { id: '10:81:17', arabic: "ٱلْمُفْسِدِينَ", transliteration: "l-muf'sidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the corrupters", ur: "(of) the corrupters" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'نفی + فعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  82: {
    text: "وَيُحِقُّ ٱللَّهُ ٱلْحَقَّ بِكَلِمَـٰتِهِۦ وَلَوْ كَرِهَ ٱلْمُجْرِمُونَ",
    translation: {
      en: "",
      ur: "اور خدا اپنے حکم سے سچ کو سچ ہی کردے گا اگرچہ گنہگار برا ہی مانیں",
    },
    words: [
      { id: '10:82:1', arabic: "وَيُحِقُّ", transliteration: "wayuḥiqqu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah will establish", ur: "اور اللہ will establish" } },
      { id: '10:82:2', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "And Allah will establish", ur: "اور اللہ will establish" } },
      { id: '10:82:3', arabic: "ٱلْحَقَّ", transliteration: "l-ḥaqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '10:82:4', arabic: "بِكَلِمَـٰتِهِۦ", transliteration: "bikalimātihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by His words", ur: "by His words" } },
      { id: '10:82:5', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "even if", ur: "even if" } },
      { id: '10:82:6', arabic: "كَرِهَ", transliteration: "kariha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "dislike it", ur: "dislike it" } },
      { id: '10:82:7', arabic: "ٱلْمُجْرِمُونَ", transliteration: "l-muj'rimūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the criminals", ur: "the criminals" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  83: {
    text: "فَمَآ ءَامَنَ لِمُوسَىٰٓ إِلَّا ذُرِّيَّةٌۭ مِّن قَوْمِهِۦ عَلَىٰ خَوْفٍۢ مِّن فِرْعَوْنَ وَمَلَإِي۟هِمْ أَن يَفْتِنَهُمْ ۚ وَإِنَّ فِرْعَوْنَ لَعَالٍۢ فِى ٱلْأَرْضِ وَإِنَّهُۥ لَمِنَ ٱلْمُسْرِفِينَ",
    translation: {
      en: "",
      ur: "تو موسیٰ پر کوئی ایمان نہ لایا۔ مگر اس کی قوم میں سے چند لڑکے (اور وہ بھی) فرعون اور اس کے اہل دربار سے ڈرتے ڈرتے کہ کہیں وہ ان کو آفت میں نہ پھنسا دے۔ اور فرعون ملک میں متکبر ومتغلب اور (کبر وکفر) میں حد سے بڑھا ہوا تھا",
    },
    words: [
      { id: '10:83:1', arabic: "فَمَآ", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But none", ur: "لیکن none" } },
      { id: '10:83:2', arabic: "ءَامَنَ", transliteration: "āmana", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '10:83:3', arabic: "لِمُوسَىٰٓ", transliteration: "limūsā", pos: ['P+N'], posLabel: 'P+N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '10:83:4', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '10:83:5', arabic: "ذُرِّيَّةٌۭ", transliteration: "dhurriyyatun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(the) offspring", ur: "(the) offspring" } },
      { id: '10:83:6', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '10:83:7', arabic: "قَوْمِهِۦ", transliteration: "qawmihi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "his people", ur: "his لوگ" } },
      { id: '10:83:8', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '10:83:9', arabic: "خَوْفٍۢ", transliteration: "khawfin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fear", ur: "ڈرنا" } },
      { id: '10:83:10', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:83:11', arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Firaun", ur: "Firaun" } },
      { id: '10:83:12', arabic: "وَمَلَإِي۟هِمْ", transliteration: "wamala-ihim", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and their chiefs", ur: "اور their chiefs" } },
      { id: '10:83:13', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "lest", ur: "lest" } },
      { id: '10:83:14', arabic: "يَفْتِنَهُمْ ۚ", transliteration: "yaftinahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they persecute them", ur: "وہ لوگ persecute them" } },
      { id: '10:83:15', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '10:83:16', arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Firaun", ur: "Firaun" } },
      { id: '10:83:17', arabic: "لَعَالٍۢ", transliteration: "laʿālin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) a tyrant", ur: "(was) a tyrant" } },
      { id: '10:83:18', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:83:19', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '10:83:20', arabic: "وَإِنَّهُۥ", transliteration: "wa-innahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and indeed, he", ur: "اور بیشک, وہ" } },
      { id: '10:83:21', arabic: "لَمِنَ", transliteration: "lamina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) of", ur: "(was) of" } },
      { id: '10:83:22', arabic: "ٱلْمُسْرِفِينَ", transliteration: "l-mus'rifīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who commit excesses", ur: "the ones جو commit excesses" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  84: {
    text: "وَقَالَ مُوسَىٰ يَـٰقَوْمِ إِن كُنتُمْ ءَامَنتُم بِٱللَّهِ فَعَلَيْهِ تَوَكَّلُوٓا۟ إِن كُنتُم مُّسْلِمِينَ",
    translation: {
      en: "",
      ur: "اور موسیٰ نے کہا کہ بھائیو! اگر تم خدا پر ایمان لائے ہو تو اگر (دل سے) فرمانبردار ہو تو اسی پر بھروسہ رکھو",
    },
    words: [
      { id: '10:84:1', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And Musa said", ur: "اور Musa کہا" } },
      { id: '10:84:2', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "And Musa said", ur: "اور Musa کہا" } },
      { id: '10:84:3', arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ" } },
      { id: '10:84:4', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '10:84:5', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have", ur: "تم have" } },
      { id: '10:84:6', arabic: "ءَامَنتُم", transliteration: "āmantum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '10:84:7', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Allah", ur: "میں اللہ" } },
      { id: '10:84:8', arabic: "فَعَلَيْهِ", transliteration: "faʿalayhi", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then on Him", ur: "پھر پر Him" } },
      { id: '10:84:9', arabic: "تَوَكَّلُوٓا۟", transliteration: "tawakkalū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "put your trust", ur: "put your trust" } },
      { id: '10:84:10', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '10:84:11', arabic: "كُنتُم", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '10:84:12', arabic: "مُّسْلِمِينَ", transliteration: "mus'limīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Muslims", ur: "Muslims" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  85: {
    text: "فَقَالُوا۟ عَلَى ٱللَّهِ تَوَكَّلْنَا رَبَّنَا لَا تَجْعَلْنَا فِتْنَةًۭ لِّلْقَوْمِ ٱلظَّـٰلِمِينَ",
    translation: {
      en: "",
      ur: "تو وہ بولے کہ ہم خدا ہی پر بھروسہ رکھتے ہیں۔ اے ہمارے پروردگار ہم کو ظالم لوگوں کے ہاتھ سے آزمائش میں نہ ڈال",
    },
    words: [
      { id: '10:85:1', arabic: "فَقَالُوا۟", transliteration: "faqālū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ق و ل", meaning: { en: "Then they said", ur: "پھر وہ لوگ کہا" } },
      { id: '10:85:2', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "Upon", ur: "پر" } },
      { id: '10:85:3', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:85:4', arabic: "تَوَكَّلْنَا", transliteration: "tawakkalnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we put our trust", ur: "ہم put our trust" } },
      { id: '10:85:5', arabic: "رَبَّنَا", transliteration: "rabbanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Lord", ur: "Our رب" } },
      { id: '10:85:6', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(Do) not", ur: "(Do) نہیں" } },
      { id: '10:85:7', arabic: "تَجْعَلْنَا", transliteration: "tajʿalnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "make us", ur: "make us" } },
      { id: '10:85:8', arabic: "فِتْنَةًۭ", transliteration: "fit'natan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a trial", ur: "a trial" } },
      { id: '10:85:9', arabic: "لِّلْقَوْمِ", transliteration: "lil'qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "for the people ", ur: "for the لوگ " } },
      { id: '10:85:10', arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoers", ur: "the wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  86: {
    text: "وَنَجِّنَا بِرَحْمَتِكَ مِنَ ٱلْقَوْمِ ٱلْكَـٰفِرِينَ",
    translation: {
      en: "",
      ur: "اور اپنی رحمت سے قوم کفار سے نجات بخش",
    },
    words: [
      { id: '10:86:1', arabic: "وَنَجِّنَا", transliteration: "wanajjinā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And save us", ur: "اور save us" } },
      { id: '10:86:2', arabic: "بِرَحْمَتِكَ", transliteration: "biraḥmatika", pos: ['P+N'], posLabel: 'P+N', root: "ر ح م", meaning: { en: "by Your Mercy", ur: "by Your رحمت" } },
      { id: '10:86:3', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:86:4', arabic: "ٱلْقَوْمِ", transliteration: "l-qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "the people ", ur: "the لوگ " } },
      { id: '10:86:5', arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the disbelievers", ur: "the کافر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  87: {
    text: "وَأَوْحَيْنَآ إِلَىٰ مُوسَىٰ وَأَخِيهِ أَن تَبَوَّءَا لِقَوْمِكُمَا بِمِصْرَ بُيُوتًۭا وَٱجْعَلُوا۟ بُيُوتَكُمْ قِبْلَةًۭ وَأَقِيمُوا۟ ٱلصَّلَوٰةَ ۗ وَبَشِّرِ ٱلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے موسیٰ اور اس کے بھائی کی طرف وحی بھیجی کہ اپنے لوگوں کے لیے مصر میں گھر بناؤ اور اپنے گھروں کو قبلہ (یعنی مسجدیں) ٹھہراؤ اور نماز پڑھو۔ اور مومنوں کو خوشخبری سنادو",
    },
    words: [
      { id: '10:87:1', arabic: "وَأَوْحَيْنَآ", transliteration: "wa-awḥaynā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We inspired", ur: "اور ہم inspired" } },
      { id: '10:87:2', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '10:87:3', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '10:87:4', arabic: "وَأَخِيهِ", transliteration: "wa-akhīhi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and his brother", ur: "اور his brother" } },
      { id: '10:87:5', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '10:87:6', arabic: "تَبَوَّءَا", transliteration: "tabawwaā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Settle", ur: "Settle" } },
      { id: '10:87:7', arabic: "لِقَوْمِكُمَا", transliteration: "liqawmikumā", pos: ['P+N'], posLabel: 'P+N', root: "ق و م", meaning: { en: "your people", ur: "your لوگ" } },
      { id: '10:87:8', arabic: "بِمِصْرَ", transliteration: "bimiṣ'ra", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Egypt", ur: "میں Egypt" } },
      { id: '10:87:9', arabic: "بُيُوتًۭا", transliteration: "buyūtan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) houses", ur: "(میں) houses" } },
      { id: '10:87:10', arabic: "وَٱجْعَلُوا۟", transliteration: "wa-ij'ʿalū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and make", ur: "اور make" } },
      { id: '10:87:11', arabic: "بُيُوتَكُمْ", transliteration: "buyūtakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your houses", ur: "your houses" } },
      { id: '10:87:12', arabic: "قِبْلَةًۭ", transliteration: "qib'latan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) places of worship", ur: "(as) places of عبادت" } },
      { id: '10:87:13', arabic: "وَأَقِيمُوا۟", transliteration: "wa-aqīmū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and establish", ur: "اور establish" } },
      { id: '10:87:14', arabic: "ٱلصَّلَوٰةَ ۗ", transliteration: "l-ṣalata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the prayer", ur: "the نماز" } },
      { id: '10:87:15', arabic: "وَبَشِّرِ", transliteration: "wabashiri", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And give glad tidings", ur: "اور give glad tidings" } },
      { id: '10:87:16', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) the believers", ur: "(کو) the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  88: {
    text: "وَقَالَ مُوسَىٰ رَبَّنَآ إِنَّكَ ءَاتَيْتَ فِرْعَوْنَ وَمَلَأَهُۥ زِينَةًۭ وَأَمْوَٰلًۭا فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا رَبَّنَا لِيُضِلُّوا۟ عَن سَبِيلِكَ ۖ رَبَّنَا ٱطْمِسْ عَلَىٰٓ أَمْوَٰلِهِمْ وَٱشْدُدْ عَلَىٰ قُلُوبِهِمْ فَلَا يُؤْمِنُوا۟ حَتَّىٰ يَرَوُا۟ ٱلْعَذَابَ ٱلْأَلِيمَ",
    translation: {
      en: "",
      ur: "اور موسیٰ نے کہا اے ہمارے پروردگار تو نے فرعون اور اس کے سرداروں کو دنیا کی زندگی میں (بہت سا) سازو برگ اور مال وزر دے رکھا ہے۔ اے پروردگار ان کا مال یہ ہے کہ تیرے رستے سے گمراہ کردیں۔ اے پروردگار ان کے مال کو برباد کردے اور ان کے دلوں کو سخت کردے کہ ایمان نہ لائیں جب تک عذاب الیم نہ دیکھ لیں",
    },
    words: [
      { id: '10:88:1', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And Musa said", ur: "اور Musa کہا" } },
      { id: '10:88:2', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "And Musa said", ur: "اور Musa کہا" } },
      { id: '10:88:3', arabic: "رَبَّنَآ", transliteration: "rabbanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Lord", ur: "Our رب" } },
      { id: '10:88:4', arabic: "إِنَّكَ", transliteration: "innaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, You", ur: "بیشک, تم" } },
      { id: '10:88:5', arabic: "ءَاتَيْتَ", transliteration: "ātayta", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "have given", ur: "have given" } },
      { id: '10:88:6', arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Firaun", ur: "Firaun" } },
      { id: '10:88:7', arabic: "وَمَلَأَهُۥ", transliteration: "wamala-ahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and his chiefs", ur: "اور his chiefs" } },
      { id: '10:88:8', arabic: "زِينَةًۭ", transliteration: "zīnatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "splendor", ur: "splendor" } },
      { id: '10:88:9', arabic: "وَأَمْوَٰلًۭا", transliteration: "wa-amwālan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and wealth", ur: "اور wealth" } },
      { id: '10:88:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:88:11', arabic: "ٱلْحَيَوٰةِ", transliteration: "l-ḥayati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the life", ur: "the زندگی" } },
      { id: '10:88:12', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the world", ur: "(of) the دنیا" } },
      { id: '10:88:13', arabic: "رَبَّنَا", transliteration: "rabbanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Lord", ur: "Our رب" } },
      { id: '10:88:14', arabic: "لِيُضِلُّوا۟", transliteration: "liyuḍillū", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "That they may lead astray", ur: "وہ وہ لوگ may lead astray" } },
      { id: '10:88:15', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:88:16', arabic: "سَبِيلِكَ ۖ", transliteration: "sabīlika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Your way", ur: "Your راستہ" } },
      { id: '10:88:17', arabic: "رَبَّنَا", transliteration: "rabbanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Lord", ur: "Our رب" } },
      { id: '10:88:18', arabic: "ٱطْمِسْ", transliteration: "iṭ'mis", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Destroy", ur: "Destroy" } },
      { id: '10:88:19', arabic: "عَلَىٰٓ", transliteration: "ʿalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[on]", ur: "[پر]" } },
      { id: '10:88:20', arabic: "أَمْوَٰلِهِمْ", transliteration: "amwālihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their wealth", ur: "their wealth" } },
      { id: '10:88:21', arabic: "وَٱشْدُدْ", transliteration: "wa-ush'dud", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and harden", ur: "اور harden" } },
      { id: '10:88:22', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[on]", ur: "[پر]" } },
      { id: '10:88:23', arabic: "قُلُوبِهِمْ", transliteration: "qulūbihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their hearts", ur: "their hearts" } },
      { id: '10:88:24', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so (that) not", ur: "so (وہ) نہیں" } },
      { id: '10:88:25', arabic: "يُؤْمِنُوا۟", transliteration: "yu'minū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they believe", ur: "وہ لوگ ایمان لانا" } },
      { id: '10:88:26', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '10:88:27', arabic: "يَرَوُا۟", transliteration: "yarawū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they see", ur: "وہ لوگ دیکھنا" } },
      { id: '10:88:28', arabic: "ٱلْعَذَابَ", transliteration: "l-ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment ", ur: "the عذاب " } },
      { id: '10:88:29', arabic: "ٱلْأَلِيمَ", transliteration: "l-alīma", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the painful", ur: "the painful" } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 25, to: 26, label: 'فعل + فاعل' },
        { from: 27, to: 28, label: 'فعل + فاعل' },
        { from: 28, to: 29, label: 'موصوف + صفت' }
      ],
    },
  },
  89: {
    text: "قَالَ قَدْ أُجِيبَت دَّعْوَتُكُمَا فَٱسْتَقِيمَا وَلَا تَتَّبِعَآنِّ سَبِيلَ ٱلَّذِينَ لَا يَعْلَمُونَ",
    translation: {
      en: "",
      ur: "خدا نے فرمایا کہ تمہاری دعا قبول کرلی گئی تو تم ثابت قدم رہنا اور بےعقلوں کے رستے نہ چلنا",
    },
    words: [
      { id: '10:89:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '10:89:2', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '10:89:3', arabic: "أُجِيبَت", transliteration: "ujībat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has been answered", ur: "has been answered" } },
      { id: '10:89:4', arabic: "دَّعْوَتُكُمَا", transliteration: "daʿwatukumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) invocation of both of you", ur: "(the) invocation of both of تم" } },
      { id: '10:89:5', arabic: "فَٱسْتَقِيمَا", transliteration: "fa-is'taqīmā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So you two (keep to the) straight way", ur: "So تم two (keep کو the) سیدھا راستہ" } },
      { id: '10:89:6', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '10:89:7', arabic: "تَتَّبِعَآنِّ", transliteration: "tattabiʿānni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "follow", ur: "follow" } },
      { id: '10:89:8', arabic: "سَبِيلَ", transliteration: "sabīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '10:89:9', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those who", ur: "(of) جو لوگ" } },
      { id: '10:89:10', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '10:89:11', arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "know", ur: "جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'نفی + فعل' }
      ],
    },
  },
  90: {
    text: "۞ وَجَـٰوَزْنَا بِبَنِىٓ إِسْرَٰٓءِيلَ ٱلْبَحْرَ فَأَتْبَعَهُمْ فِرْعَوْنُ وَجُنُودُهُۥ بَغْيًۭا وَعَدْوًا ۖ حَتَّىٰٓ إِذَآ أَدْرَكَهُ ٱلْغَرَقُ قَالَ ءَامَنتُ أَنَّهُۥ لَآ إِلَـٰهَ إِلَّا ٱلَّذِىٓ ءَامَنَتْ بِهِۦ بَنُوٓا۟ إِسْرَٰٓءِيلَ وَأَنَا۠ مِنَ ٱلْمُسْلِمِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے بنی اسرائیل کو دریا سے پار کردیا تو فرعون اور اس کے لشکر نے سرکشی اور تعدی سے ان کا تعاقب کیا۔ یہاں تک کہ جب اس کو غرق (کے عذاب) نے آپکڑا تو کہنے لگا کہ میں ایمان لایا کہ جس (خدا) پر بنی اسرائیل ایمان لائے ہیں اس کے سوا کوئی معبود نہیں اور میں فرمانبرداروں میں ہوں",
    },
    words: [
      { id: '10:90:1', arabic: "۞ وَجَـٰوَزْنَا", transliteration: "wajāwaznā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And We took across", ur: "اور ہم took across" } },
      { id: '10:90:2', arabic: "بِبَنِىٓ", transliteration: "bibanī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(the) Children", ur: "(the) اولاد" } },
      { id: '10:90:3', arabic: "إِسْرَٰٓءِيلَ", transliteration: "is'rāīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Israel ", ur: "(of) Israel " } },
      { id: '10:90:4', arabic: "ٱلْبَحْرَ", transliteration: "l-baḥra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sea", ur: "the sea" } },
      { id: '10:90:5', arabic: "فَأَتْبَعَهُمْ", transliteration: "fa-atbaʿahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and followed them", ur: "اور followed them" } },
      { id: '10:90:6', arabic: "فِرْعَوْنُ", transliteration: "fir'ʿawnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Firaun", ur: "Firaun" } },
      { id: '10:90:7', arabic: "وَجُنُودُهُۥ", transliteration: "wajunūduhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and his hosts", ur: "اور his hosts" } },
      { id: '10:90:8', arabic: "بَغْيًۭا", transliteration: "baghyan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) rebellion", ur: "(میں) rebellion" } },
      { id: '10:90:9', arabic: "وَعَدْوًا ۖ", transliteration: "waʿadwan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and enmity", ur: "اور enmity" } },
      { id: '10:90:10', arabic: "حَتَّىٰٓ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '10:90:11', arabic: "إِذَآ", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '10:90:12', arabic: "أَدْرَكَهُ", transliteration: "adrakahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "overtook him", ur: "overtook him" } },
      { id: '10:90:13', arabic: "ٱلْغَرَقُ", transliteration: "l-gharaqu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the drowning", ur: "the drowning" } },
      { id: '10:90:14', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '10:90:15', arabic: "ءَامَنتُ", transliteration: "āmantu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I believe", ur: "میں ایمان لانا" } },
      { id: '10:90:16', arabic: "أَنَّهُۥ", transliteration: "annahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '10:90:17', arabic: "لَآ", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(there is) no", ur: "(there is) نہیں" } },
      { id: '10:90:18', arabic: "إِلَـٰهَ", transliteration: "ilāha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "god", ur: "اللہ" } },
      { id: '10:90:19', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '10:90:20', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the One", ur: "the One" } },
      { id: '10:90:21', arabic: "ءَامَنَتْ", transliteration: "āmanat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in Whom believe", ur: "میں Whom ایمان لانا" } },
      { id: '10:90:22', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Whom believe", ur: "میں Whom ایمان لانا" } },
      { id: '10:90:23', arabic: "بَنُوٓا۟", transliteration: "banū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Children of Israel", ur: "the اولاد of Israel" } },
      { id: '10:90:24', arabic: "إِسْرَٰٓءِيلَ", transliteration: "is'rāīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Children of Israel", ur: "the اولاد of Israel" } },
      { id: '10:90:25', arabic: "وَأَنَا۠", transliteration: "wa-anā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and I am", ur: "اور میں am" } },
      { id: '10:90:26', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:90:27', arabic: "ٱلْمُسْلِمِينَ", transliteration: "l-mus'limīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Muslims", ur: "the Muslims" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'مضاف + مضاف إليه' },
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 23, to: 24, label: 'مضاف + مضاف إليه' },
        { from: 26, to: 27, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  91: {
    text: "ءَآلْـَٔـٰنَ وَقَدْ عَصَيْتَ قَبْلُ وَكُنتَ مِنَ ٱلْمُفْسِدِينَ",
    translation: {
      en: "",
      ur: "(جواب ملا کہ) اب (ایمان لاتا ہے) حالانکہ تو پہلے نافرمانی کرتا رہا اور مفسد بنا رہا",
    },
    words: [
      { id: '10:91:1', arabic: "ءَآلْـَٔـٰنَ", transliteration: "āl'āna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Now", ur: "Now" } },
      { id: '10:91:2', arabic: "وَقَدْ", transliteration: "waqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And verily", ur: "اور بیشک" } },
      { id: '10:91:3', arabic: "عَصَيْتَ", transliteration: "ʿaṣayta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you (had) disobeyed", ur: "تم (had) disobeyed" } },
      { id: '10:91:4', arabic: "قَبْلُ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '10:91:5', arabic: "وَكُنتَ", transliteration: "wakunta", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and you were", ur: "اور تم were" } },
      { id: '10:91:6', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:91:7', arabic: "ٱلْمُفْسِدِينَ", transliteration: "l-muf'sidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the corrupters", ur: "the corrupters" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  92: {
    text: "فَٱلْيَوْمَ نُنَجِّيكَ بِبَدَنِكَ لِتَكُونَ لِمَنْ خَلْفَكَ ءَايَةًۭ ۚ وَإِنَّ كَثِيرًۭا مِّنَ ٱلنَّاسِ عَنْ ءَايَـٰتِنَا لَغَـٰفِلُونَ",
    translation: {
      en: "",
      ur: "تو آج ہم تیرے بدن کو (دریا سے) نکال لیں گے تاکہ تو پچھلوں کے لئے عبرت ہو۔ اور بہت سے لوگ ہماری نشانیوں سے بےخبر ہیں",
    },
    words: [
      { id: '10:92:1', arabic: "فَٱلْيَوْمَ", transliteration: "fal-yawma", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ي و م", meaning: { en: "So today", ur: "So today" } },
      { id: '10:92:2', arabic: "نُنَجِّيكَ", transliteration: "nunajjīka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will save you", ur: "ہم will save تم" } },
      { id: '10:92:3', arabic: "بِبَدَنِكَ", transliteration: "bibadanika", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in your body", ur: "میں your body" } },
      { id: '10:92:4', arabic: "لِتَكُونَ", transliteration: "litakūna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that you may be", ur: "وہ تم may be" } },
      { id: '10:92:5', arabic: "لِمَنْ", transliteration: "liman", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for (those) who", ur: "for (those) جو" } },
      { id: '10:92:6', arabic: "خَلْفَكَ", transliteration: "khalfaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "succeed you", ur: "succeed تم" } },
      { id: '10:92:7', arabic: "ءَايَةًۭ ۚ", transliteration: "āyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a sign", ur: "a نشانی" } },
      { id: '10:92:8', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '10:92:9', arabic: "كَثِيرًۭا", transliteration: "kathīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "many", ur: "many" } },
      { id: '10:92:10', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '10:92:11', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mankind", ur: "the mankind" } },
      { id: '10:92:12', arabic: "عَنْ", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:92:13', arabic: "ءَايَـٰتِنَا", transliteration: "āyātinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Signs", ur: "Our نشانیاں" } },
      { id: '10:92:14', arabic: "لَغَـٰفِلُونَ", transliteration: "laghāfilūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) surely heedless", ur: "(are) یقیناً heedless" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  93: {
    text: "وَلَقَدْ بَوَّأْنَا بَنِىٓ إِسْرَٰٓءِيلَ مُبَوَّأَ صِدْقٍۢ وَرَزَقْنَـٰهُم مِّنَ ٱلطَّيِّبَـٰتِ فَمَا ٱخْتَلَفُوا۟ حَتَّىٰ جَآءَهُمُ ٱلْعِلْمُ ۚ إِنَّ رَبَّكَ يَقْضِى بَيْنَهُمْ يَوْمَ ٱلْقِيَـٰمَةِ فِيمَا كَانُوا۟ فِيهِ يَخْتَلِفُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے بنی اسرائیل کو رہنے کو عمدہ جگہ دی اور کھانے کو پاکیزہ چیزیں عطا کیں لیکن وہ باوجود علم ہونے کے اختلاف کرتے رہے۔ بےشک جن باتوں میں وہ اختلاف کرتے رہے ہیں تمہارا پروردگار قیامت کے دن ان میں ان باتوں کا فیصلہ کردے گا",
    },
    words: [
      { id: '10:93:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And verily", ur: "اور بیشک" } },
      { id: '10:93:2', arabic: "بَوَّأْنَا", transliteration: "bawwanā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We settled", ur: "ہم settled" } },
      { id: '10:93:3', arabic: "بَنِىٓ", transliteration: "banī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Children", ur: "(the) اولاد" } },
      { id: '10:93:4', arabic: "إِسْرَٰٓءِيلَ", transliteration: "is'rāīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Israel", ur: "(of) Israel" } },
      { id: '10:93:5', arabic: "مُبَوَّأَ", transliteration: "mubawwa-a", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) a settlement", ur: "(میں) a settlement" } },
      { id: '10:93:6', arabic: "صِدْقٍۢ", transliteration: "ṣid'qin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "honorable", ur: "honorable" } },
      { id: '10:93:7', arabic: "وَرَزَقْنَـٰهُم", transliteration: "warazaqnāhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We provided them", ur: "اور ہم provided them" } },
      { id: '10:93:8', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '10:93:9', arabic: "ٱلطَّيِّبَـٰتِ", transliteration: "l-ṭayibāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the good things", ur: "the اچھا things" } },
      { id: '10:93:10', arabic: "فَمَا", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:93:11', arabic: "ٱخْتَلَفُوا۟", transliteration: "ikh'talafū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they differ", ur: "وہ لوگ differ" } },
      { id: '10:93:12', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '10:93:13', arabic: "جَآءَهُمُ", transliteration: "jāahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came to them", ur: "came کو them" } },
      { id: '10:93:14', arabic: "ٱلْعِلْمُ ۚ", transliteration: "l-ʿil'mu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the knowledge", ur: "the knowledge" } },
      { id: '10:93:15', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '10:93:16', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '10:93:17', arabic: "يَقْضِى", transliteration: "yaqḍī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will judge", ur: "will judge" } },
      { id: '10:93:18', arabic: "بَيْنَهُمْ", transliteration: "baynahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between them", ur: "درمیان them" } },
      { id: '10:93:19', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on) the Day", ur: "(پر) the دن" } },
      { id: '10:93:20', arabic: "ٱلْقِيَـٰمَةِ", transliteration: "l-qiyāmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Resurrection", ur: "(of) the Resurrection" } },
      { id: '10:93:21', arabic: "فِيمَا", transliteration: "fīmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "concerning what", ur: "concerning کیا" } },
      { id: '10:93:22', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used (to)", ur: "وہ لوگ used (کو)" } },
      { id: '10:93:23', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[in it]", ur: "[میں it]" } },
      { id: '10:93:24', arabic: "يَخْتَلِفُونَ", transliteration: "yakhtalifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "differ", ur: "differ" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'موصوف + صفت' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'فعل + فاعل' }
      ],
    },
  },
  94: {
    text: "فَإِن كُنتَ فِى شَكٍّۢ مِّمَّآ أَنزَلْنَآ إِلَيْكَ فَسْـَٔلِ ٱلَّذِينَ يَقْرَءُونَ ٱلْكِتَـٰبَ مِن قَبْلِكَ ۚ لَقَدْ جَآءَكَ ٱلْحَقُّ مِن رَّبِّكَ فَلَا تَكُونَنَّ مِنَ ٱلْمُمْتَرِينَ",
    translation: {
      en: "",
      ur: "اگر تم کو اس (کتاب کے) بارے میں جو ہم نے تم پر نازل کی ہے کچھ شک ہو تو جو لوگ تم سے پہلے کی (اُتری ہوئی) کتابیں پڑھتے ہیں ان سے پوچھ لو۔ تمہارے پروردگار کی طرف سے تمہارے پاس حق آچکا ہے تو تم ہرگز شک کرنے والوں میں نہ ہونا",
    },
    words: [
      { id: '10:94:1', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So if", ur: "So if" } },
      { id: '10:94:2', arabic: "كُنتَ", transliteration: "kunta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '10:94:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:94:4', arabic: "شَكٍّۢ", transliteration: "shakkin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "doubt", ur: "doubt" } },
      { id: '10:94:5', arabic: "مِّمَّآ", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '10:94:6', arabic: "أَنزَلْنَآ", transliteration: "anzalnā", pos: ['V'], posLabel: 'V', root: "ن ز ل", meaning: { en: "We have revealed", ur: "ہم have revealed" } },
      { id: '10:94:7', arabic: "إِلَيْكَ", transliteration: "ilayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '10:94:8', arabic: "فَسْـَٔلِ", transliteration: "fasali", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then ask", ur: "پھر ask" } },
      { id: '10:94:9', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '10:94:10', arabic: "يَقْرَءُونَ", transliteration: "yaqraūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(have been) reading", ur: "(have been) reading" } },
      { id: '10:94:11', arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '10:94:12', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "before you", ur: "پہلے تم" } },
      { id: '10:94:13', arabic: "قَبْلِكَ ۚ", transliteration: "qablika", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before you", ur: "پہلے تم" } },
      { id: '10:94:14', arabic: "لَقَدْ", transliteration: "laqad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '10:94:15', arabic: "جَآءَكَ", transliteration: "jāaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has come to you", ur: "has come کو تم" } },
      { id: '10:94:16', arabic: "ٱلْحَقُّ", transliteration: "l-ḥaqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '10:94:17', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:94:18', arabic: "رَّبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '10:94:19', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so (do) not", ur: "so (do) نہیں" } },
      { id: '10:94:20', arabic: "تَكُونَنَّ", transliteration: "takūnanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be", ur: "be" } },
      { id: '10:94:21', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '10:94:22', arabic: "ٱلْمُمْتَرِينَ", transliteration: "l-mum'tarīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the doubters", ur: "the doubters" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'جار + مجرور' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  95: {
    text: "وَلَا تَكُونَنَّ مِنَ ٱلَّذِينَ كَذَّبُوا۟ بِـَٔايَـٰتِ ٱللَّهِ فَتَكُونَ مِنَ ٱلْخَـٰسِرِينَ",
    translation: {
      en: "",
      ur: "اور نہ ان لوگوں میں ہونا جو خدا کی آیتوں کی تکذیب کرتے ہیں نہیں تو نقصان اٹھاؤ گے",
    },
    words: [
      { id: '10:95:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '10:95:2', arabic: "تَكُونَنَّ", transliteration: "takūnanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be", ur: "be" } },
      { id: '10:95:3', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:95:4', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '10:95:5', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "deny", ur: "deny" } },
      { id: '10:95:6', arabic: "بِـَٔايَـٰتِ", transliteration: "biāyāti", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(the) Signs of Allah", ur: "(the) نشانیاں of اللہ" } },
      { id: '10:95:7', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Signs of Allah", ur: "(the) نشانیاں of اللہ" } },
      { id: '10:95:8', arabic: "فَتَكُونَ", transliteration: "fatakūna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then you will be", ur: "پھر تم will be" } },
      { id: '10:95:9', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '10:95:10', arabic: "ٱلْخَـٰسِرِينَ", transliteration: "l-khāsirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the losers", ur: "the losers" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  96: {
    text: "إِنَّ ٱلَّذِينَ حَقَّتْ عَلَيْهِمْ كَلِمَتُ رَبِّكَ لَا يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "جن لوگوں کے بارے میں خدا کا حکم (عذاب) قرار پاچکا ہے وہ ایمان نہیں لانے کے",
    },
    words: [
      { id: '10:96:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '10:96:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those [whom]", ur: "those [whom]" } },
      { id: '10:96:3', arabic: "حَقَّتْ", transliteration: "ḥaqqat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has become due", ur: "has become due" } },
      { id: '10:96:4', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on them", ur: "پر them" } },
      { id: '10:96:5', arabic: "كَلِمَتُ", transliteration: "kalimatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Word", ur: "(the) Word" } },
      { id: '10:96:6', arabic: "رَبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) your Lord", ur: "(of) your رب" } },
      { id: '10:96:7', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "will not", ur: "will نہیں" } },
      { id: '10:96:8', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "believe", ur: "ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'نفی + فعل' }
      ],
    },
  },
  97: {
    text: "وَلَوْ جَآءَتْهُمْ كُلُّ ءَايَةٍ حَتَّىٰ يَرَوُا۟ ٱلْعَذَابَ ٱلْأَلِيمَ",
    translation: {
      en: "",
      ur: "جب تک کہ عذاب الیم نہ دیکھ لیں خواہ ان کے پاس ہر (طرح کی) نشانی آجائے",
    },
    words: [
      { id: '10:97:1', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "Even if", ur: "Even if" } },
      { id: '10:97:2', arabic: "جَآءَتْهُمْ", transliteration: "jāathum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "comes to them", ur: "comes کو them" } },
      { id: '10:97:3', arabic: "كُلُّ", transliteration: "kullu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '10:97:4', arabic: "ءَايَةٍ", transliteration: "āyatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Sign", ur: "نشانی" } },
      { id: '10:97:5', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '10:97:6', arabic: "يَرَوُا۟", transliteration: "yarawū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they see", ur: "وہ لوگ دیکھنا" } },
      { id: '10:97:7', arabic: "ٱلْعَذَابَ", transliteration: "l-ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment ", ur: "the عذاب " } },
      { id: '10:97:8', arabic: "ٱلْأَلِيمَ", transliteration: "l-alīma", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the painful", ur: "the painful" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
  },
  98: {
    text: "فَلَوْلَا كَانَتْ قَرْيَةٌ ءَامَنَتْ فَنَفَعَهَآ إِيمَـٰنُهَآ إِلَّا قَوْمَ يُونُسَ لَمَّآ ءَامَنُوا۟ كَشَفْنَا عَنْهُمْ عَذَابَ ٱلْخِزْىِ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا وَمَتَّعْنَـٰهُمْ إِلَىٰ حِينٍۢ",
    translation: {
      en: "",
      ur: "تو کوئی بستی ایسی کیوں نہ ہوئی کہ ایمان لاتی تو اس کا ایمان اسے نفع دیتا ہاں یونس کی قوم۔ جب ایمان لائی تو ہم نے دنیا کی زندگی میں ان سے ذلت کا عذاب دور کردیا اور ایک مدت تک (فوائد دنیاوی سے) ان کو بہرہ مند رکھا",
    },
    words: [
      { id: '10:98:1', arabic: "فَلَوْلَا", transliteration: "falawlā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So why not", ur: "So why نہیں" } },
      { id: '10:98:2', arabic: "كَانَتْ", transliteration: "kānat", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '10:98:3', arabic: "قَرْيَةٌ", transliteration: "qaryatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any town", ur: "any town" } },
      { id: '10:98:4', arabic: "ءَامَنَتْ", transliteration: "āmanat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "that believed", ur: "وہ ایمان لائے" } },
      { id: '10:98:5', arabic: "فَنَفَعَهَآ", transliteration: "fanafaʿahā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and benefited it", ur: "اور benefited it" } },
      { id: '10:98:6', arabic: "إِيمَـٰنُهَآ", transliteration: "īmānuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its faith", ur: "its faith" } },
      { id: '10:98:7', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '10:98:8', arabic: "قَوْمَ", transliteration: "qawma", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "the people", ur: "the لوگ" } },
      { id: '10:98:9', arabic: "يُونُسَ", transliteration: "yūnusa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Yunus", ur: "(of) Yunus" } },
      { id: '10:98:10', arabic: "لَمَّآ", transliteration: "lammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '10:98:11', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they believed", ur: "وہ لوگ ایمان لائے" } },
      { id: '10:98:12', arabic: "كَشَفْنَا", transliteration: "kashafnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We removed", ur: "ہم removed" } },
      { id: '10:98:13', arabic: "عَنْهُمْ", transliteration: "ʿanhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '10:98:14', arabic: "عَذَابَ", transliteration: "ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) punishment", ur: "(the) عذاب" } },
      { id: '10:98:15', arabic: "ٱلْخِزْىِ", transliteration: "l-khiz'yi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the disgrace", ur: "(of) the disgrace" } },
      { id: '10:98:16', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:98:17', arabic: "ٱلْحَيَوٰةِ", transliteration: "l-ḥayati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the life", ur: "the زندگی" } },
      { id: '10:98:18', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of the world", ur: "of the دنیا" } },
      { id: '10:98:19', arabic: "وَمَتَّعْنَـٰهُمْ", transliteration: "wamattaʿnāhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We granted them enjoyment", ur: "اور ہم granted them enjoyment" } },
      { id: '10:98:20', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '10:98:21', arabic: "حِينٍۢ", transliteration: "ḥīnin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a time", ur: "a وقت" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'مضاف + مضاف إليه' },
        { from: 20, to: 21, label: 'جار + مجرور' }
      ],
    },
  },
  99: {
    text: "وَلَوْ شَآءَ رَبُّكَ لَـَٔامَنَ مَن فِى ٱلْأَرْضِ كُلُّهُمْ جَمِيعًا ۚ أَفَأَنتَ تُكْرِهُ ٱلنَّاسَ حَتَّىٰ يَكُونُوا۟ مُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "اور اگر تمہارا پروردگار چاہتا تو جتنے لوگ زمین پر ہیں سب کے سب ایمان لے آتے۔ تو کیا تم لوگوں پر زبردستی کرنا چاہتے ہو کہ وہ مومن ہوجائیں",
    },
    words: [
      { id: '10:99:1', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '10:99:2', arabic: "شَآءَ", transliteration: "shāa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(had) willed", ur: "(had) willed" } },
      { id: '10:99:3', arabic: "رَبُّكَ", transliteration: "rabbuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '10:99:4', arabic: "لَـَٔامَنَ", transliteration: "laāmana", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely, (would) have believed", ur: "یقیناً, (would) have ایمان لائے" } },
      { id: '10:99:5', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '10:99:6', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(are) in", ur: "(are) میں" } },
      { id: '10:99:7', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '10:99:8', arabic: "كُلُّهُمْ", transliteration: "kulluhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all of them", ur: "سب of them" } },
      { id: '10:99:9', arabic: "جَمِيعًا ۚ", transliteration: "jamīʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "together", ur: "together" } },
      { id: '10:99:10', arabic: "أَفَأَنتَ", transliteration: "afa-anta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Then, will you", ur: "پھر, will تم" } },
      { id: '10:99:11', arabic: "تُكْرِهُ", transliteration: "tuk'rihu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "compel", ur: "compel" } },
      { id: '10:99:12', arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mankind", ur: "the mankind" } },
      { id: '10:99:13', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '10:99:14', arabic: "يَكُونُوا۟", transliteration: "yakūnū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they become", ur: "وہ لوگ become" } },
      { id: '10:99:15', arabic: "مُؤْمِنِينَ", transliteration: "mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believers", ur: "مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  100: {
    text: "وَمَا كَانَ لِنَفْسٍ أَن تُؤْمِنَ إِلَّا بِإِذْنِ ٱللَّهِ ۚ وَيَجْعَلُ ٱلرِّجْسَ عَلَى ٱلَّذِينَ لَا يَعْقِلُونَ",
    translation: {
      en: "",
      ur: "حالانکہ کسی شخص کو قدرت نہیں ہے کہ خدا کے حکم کے بغیر ایمان لائے۔ اور جو لوگ بےعقل ہیں ان پر وہ (کفر وذلت کی) نجاست ڈالتا ہے",
    },
    words: [
      { id: '10:100:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '10:100:2', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '10:100:3', arabic: "لِنَفْسٍ", transliteration: "linafsin", pos: ['P+N'], posLabel: 'P+N', root: "ن ف س", meaning: { en: "for a soul", ur: "for a روح" } },
      { id: '10:100:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '10:100:5', arabic: "تُؤْمِنَ", transliteration: "tu'mina", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '10:100:6', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '10:100:7', arabic: "بِإِذْنِ", transliteration: "bi-idh'ni", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by (the) permission", ur: "by (the) permission" } },
      { id: '10:100:8', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '10:100:9', arabic: "وَيَجْعَلُ", transliteration: "wayajʿalu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He will place", ur: "اور وہ will place" } },
      { id: '10:100:10', arabic: "ٱلرِّجْسَ", transliteration: "l-rij'sa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrath", ur: "the wrath" } },
      { id: '10:100:11', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '10:100:12', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '10:100:13', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '10:100:14', arabic: "يَعْقِلُونَ", transliteration: "yaʿqilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "use reason", ur: "use reason" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'نفی + فعل' }
      ],
    },
  },
  101: {
    text: "قُلِ ٱنظُرُوا۟ مَاذَا فِى ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۚ وَمَا تُغْنِى ٱلْـَٔايَـٰتُ وَٱلنُّذُرُ عَن قَوْمٍۢ لَّا يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "(ان کفار سے) کہو دیکھو تو زمین اور آسمانوں میں کیا کچھ ہے۔ مگر جو لوگ ایمان نہیں رکھتے ان کی نشانیاں اور ڈرواے کچھ کام نہیں آتے",
    },
    words: [
      { id: '10:101:1', arabic: "قُلِ", transliteration: "quli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '10:101:2', arabic: "ٱنظُرُوا۟", transliteration: "unẓurū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "See", ur: "دیکھنا" } },
      { id: '10:101:3', arabic: "مَاذَا", transliteration: "mādhā", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '10:101:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '10:101:5', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '10:101:6', arabic: "وَٱلْأَرْضِ ۚ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '10:101:7', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But not", ur: "لیکن نہیں" } },
      { id: '10:101:8', arabic: "تُغْنِى", transliteration: "tugh'nī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will avail", ur: "will avail" } },
      { id: '10:101:9', arabic: "ٱلْـَٔايَـٰتُ", transliteration: "l-āyātu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Signs", ur: "the نشانیاں" } },
      { id: '10:101:10', arabic: "وَٱلنُّذُرُ", transliteration: "wal-nudhuru", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the warners", ur: "اور the warners" } },
      { id: '10:101:11', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '10:101:12', arabic: "قَوْمٍۢ", transliteration: "qawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a people", ur: "a لوگ" } },
      { id: '10:101:13', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(who do) not", ur: "(جو do) نہیں" } },
      { id: '10:101:14', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "believe", ur: "ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  102: {
    text: "فَهَلْ يَنتَظِرُونَ إِلَّا مِثْلَ أَيَّامِ ٱلَّذِينَ خَلَوْا۟ مِن قَبْلِهِمْ ۚ قُلْ فَٱنتَظِرُوٓا۟ إِنِّى مَعَكُم مِّنَ ٱلْمُنتَظِرِينَ",
    translation: {
      en: "",
      ur: "سو جیسے (برے) دن ان سے پہلے لوگوں پر گزر چکے ہیں اسی طرح کے (دنوں کے) یہ منتظر ہیں۔ کہہ دو کہ تم بھی انتظار کرو۔ میں بھی تمہارے ساتھ انتظار کرتا ہوں",
    },
    words: [
      { id: '10:102:1', arabic: "فَهَلْ", transliteration: "fahal", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then do", ur: "پھر do" } },
      { id: '10:102:2', arabic: "يَنتَظِرُونَ", transliteration: "yantaẓirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they wait", ur: "وہ لوگ wait" } },
      { id: '10:102:3', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '10:102:4', arabic: "مِثْلَ", transliteration: "mith'la", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like", ur: "like" } },
      { id: '10:102:5', arabic: "أَيَّامِ", transliteration: "ayyāmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the days", ur: "the days" } },
      { id: '10:102:6', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those who", ur: "(of) جو لوگ" } },
      { id: '10:102:7', arabic: "خَلَوْا۟", transliteration: "khalaw", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "passed away", ur: "passed away" } },
      { id: '10:102:8', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "before them", ur: "پہلے them" } },
      { id: '10:102:9', arabic: "قَبْلِهِمْ ۚ", transliteration: "qablihim", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before them", ur: "پہلے them" } },
      { id: '10:102:10', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '10:102:11', arabic: "فَٱنتَظِرُوٓا۟", transliteration: "fa-intaẓirū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then wait", ur: "پھر wait" } },
      { id: '10:102:12', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed, I (am)", ur: "بیشک, میں (am)" } },
      { id: '10:102:13', arabic: "مَعَكُم", transliteration: "maʿakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with you", ur: "ساتھ تم" } },
      { id: '10:102:14', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '10:102:15', arabic: "ٱلْمُنتَظِرِينَ", transliteration: "l-muntaẓirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who wait", ur: "the ones جو wait" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  103: {
    text: "ثُمَّ نُنَجِّى رُسُلَنَا وَٱلَّذِينَ ءَامَنُوا۟ ۚ كَذَٰلِكَ حَقًّا عَلَيْنَا نُنجِ ٱلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "اور ہم اپنے پیغمبروں کو اور مومنوں کو نجات دیتے رہے ہیں۔ اسی طرح ہمارا ذمہ ہے کہ مسلمانوں کو نجات دیں",
    },
    words: [
      { id: '10:103:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '10:103:2', arabic: "نُنَجِّى", transliteration: "nunajjī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will save", ur: "ہم will save" } },
      { id: '10:103:3', arabic: "رُسُلَنَا", transliteration: "rusulanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Messengers", ur: "Our Messengers" } },
      { id: '10:103:4', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those who", ur: "اور جو لوگ" } },
      { id: '10:103:5', arabic: "ءَامَنُوا۟ ۚ", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '10:103:6', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '10:103:7', arabic: "حَقًّا", transliteration: "ḥaqqan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(it is) an obligation", ur: "(it is) an obligation" } },
      { id: '10:103:8', arabic: "عَلَيْنَا", transliteration: "ʿalaynā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon Us", ur: "پر Us" } },
      { id: '10:103:9', arabic: "نُنجِ", transliteration: "nunji", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(that) We save", ur: "(وہ) ہم save" } },
      { id: '10:103:10', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  104: {
    text: "قُلْ يَـٰٓأَيُّهَا ٱلنَّاسُ إِن كُنتُمْ فِى شَكٍّۢ مِّن دِينِى فَلَآ أَعْبُدُ ٱلَّذِينَ تَعْبُدُونَ مِن دُونِ ٱللَّهِ وَلَـٰكِنْ أَعْبُدُ ٱللَّهَ ٱلَّذِى يَتَوَفَّىٰكُمْ ۖ وَأُمِرْتُ أَنْ أَكُونَ مِنَ ٱلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "(اے پیغمبر) کہہ دو کہ لوگو اگر تم کو میرے دین میں کسی طرح کا شک ہو تو (سن رکھو کہ) جن لوگوں کی تم خدا کے سوا عبادت کرتے ہو میں ان کی عبادت نہیں کرتا۔ بلکہ میں خدا کی عبادت کرتا ہوں جو تمھاری روحیں قبض کرلیتا ہے اور مجھ کو یہی حکم ہوا ہے کہ ایمان لانے والوں میں ہوں",
    },
    words: [
      { id: '10:104:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '10:104:2', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O mankind", ur: "اے mankind" } },
      { id: '10:104:3', arabic: "ٱلنَّاسُ", transliteration: "l-nāsu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O mankind", ur: "اے mankind" } },
      { id: '10:104:4', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '10:104:5', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '10:104:6', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '10:104:7', arabic: "شَكٍّۢ", transliteration: "shakkin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "doubt", ur: "doubt" } },
      { id: '10:104:8', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:104:9', arabic: "دِينِى", transliteration: "dīnī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my religion", ur: "my religion" } },
      { id: '10:104:10', arabic: "فَلَآ", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then not", ur: "پھر نہیں" } },
      { id: '10:104:11', arabic: "أَعْبُدُ", transliteration: "aʿbudu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I worship", ur: "میں عبادت" } },
      { id: '10:104:12', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those whom", ur: "those whom" } },
      { id: '10:104:13', arabic: "تَعْبُدُونَ", transliteration: "taʿbudūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you worship", ur: "تم عبادت" } },
      { id: '10:104:14', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '10:104:15', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '10:104:16', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '10:104:17', arabic: "وَلَـٰكِنْ", transliteration: "walākin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '10:104:18', arabic: "أَعْبُدُ", transliteration: "aʿbudu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I worship", ur: "میں عبادت" } },
      { id: '10:104:19', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '10:104:20', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the One Who", ur: "the One جو" } },
      { id: '10:104:21', arabic: "يَتَوَفَّىٰكُمْ ۖ", transliteration: "yatawaffākum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "causes you to die", ur: "causes تم کو die" } },
      { id: '10:104:22', arabic: "وَأُمِرْتُ", transliteration: "wa-umir'tu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And I am commanded", ur: "اور میں am commanded" } },
      { id: '10:104:23', arabic: "أَنْ", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '10:104:24', arabic: "أَكُونَ", transliteration: "akūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I be", ur: "میں be" } },
      { id: '10:104:25', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:104:26', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'مضاف + مضاف إليه' },
        { from: 25, to: 26, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  105: {
    text: "وَأَنْ أَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًۭا وَلَا تَكُونَنَّ مِنَ ٱلْمُشْرِكِينَ",
    translation: {
      en: "",
      ur: "اور یہ کہ (اے محمد سب سے) یکسو ہو کر دین (اسلام) کی پیروی کئے جاؤ۔ اور مشرکوں میں ہرگز نہ ہونا",
    },
    words: [
      { id: '10:105:1', arabic: "وَأَنْ", transliteration: "wa-an", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And that", ur: "اور وہ" } },
      { id: '10:105:2', arabic: "أَقِمْ", transliteration: "aqim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Direct", ur: "Direct" } },
      { id: '10:105:3', arabic: "وَجْهَكَ", transliteration: "wajhaka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "your face", ur: "your face" } },
      { id: '10:105:4', arabic: "لِلدِّينِ", transliteration: "lilddīni", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the religion", ur: "کو the religion" } },
      { id: '10:105:5', arabic: "حَنِيفًۭا", transliteration: "ḥanīfan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upright", ur: "upright" } },
      { id: '10:105:6', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '10:105:7', arabic: "تَكُونَنَّ", transliteration: "takūnanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be", ur: "be" } },
      { id: '10:105:8', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:105:9', arabic: "ٱلْمُشْرِكِينَ", transliteration: "l-mush'rikīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the polytheists", ur: "the polytheists" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  106: {
    text: "وَلَا تَدْعُ مِن دُونِ ٱللَّهِ مَا لَا يَنفَعُكَ وَلَا يَضُرُّكَ ۖ فَإِن فَعَلْتَ فَإِنَّكَ إِذًۭا مِّنَ ٱلظَّـٰلِمِينَ",
    translation: {
      en: "",
      ur: "اور خدا کو چھوڑ کر ایسی چیز کو نہ پکارنا جو نہ تمہارا کچھ بھلا کرسکے اور نہ کچھ بگاڑ سکے۔ اگر ایسا کرو گے تو ظالموں میں ہوجاؤ گے",
    },
    words: [
      { id: '10:106:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '10:106:2', arabic: "تَدْعُ", transliteration: "tadʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "invoke", ur: "invoke" } },
      { id: '10:106:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '10:106:4', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '10:106:5', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '10:106:6', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '10:106:7', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(will) not", ur: "(will) نہیں" } },
      { id: '10:106:8', arabic: "يَنفَعُكَ", transliteration: "yanfaʿuka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "benefit you", ur: "benefit تم" } },
      { id: '10:106:9', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '10:106:10', arabic: "يَضُرُّكَ ۖ", transliteration: "yaḍurruka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "harm you", ur: "harm تم" } },
      { id: '10:106:11', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '10:106:12', arabic: "فَعَلْتَ", transliteration: "faʿalta", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "you did so", ur: "تم did so" } },
      { id: '10:106:13', arabic: "فَإِنَّكَ", transliteration: "fa-innaka", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "indeed, you", ur: "بیشک, تم" } },
      { id: '10:106:14', arabic: "إِذًۭا", transliteration: "idhan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "then (will be)", ur: "پھر (will be)" } },
      { id: '10:106:15', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:106:16', arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoers", ur: "the wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'نفی + فعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  107: {
    text: "وَإِن يَمْسَسْكَ ٱللَّهُ بِضُرٍّۢ فَلَا كَاشِفَ لَهُۥٓ إِلَّا هُوَ ۖ وَإِن يُرِدْكَ بِخَيْرٍۢ فَلَا رَآدَّ لِفَضْلِهِۦ ۚ يُصِيبُ بِهِۦ مَن يَشَآءُ مِنْ عِبَادِهِۦ ۚ وَهُوَ ٱلْغَفُورُ ٱلرَّحِيمُ",
    translation: {
      en: "",
      ur: "اور اگر خدا تم کو کوئی تکلیف پہنچائے تو اس کے سوا اس کا کوئی دور کرنے والا نہیں اور اگر تم سے بھلائی کرنی چاہے تو اس کے فضل کو کوئی روکنے والا نہیں۔ وہ اپنے بندوں میں سے جسے چاہتا ہے فائدہ پہنچاتا ہے اور وہ بخشنے والا مہربان ہے",
    },
    words: [
      { id: '10:107:1', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '10:107:2', arabic: "يَمْسَسْكَ", transliteration: "yamsaska", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Allah touches you", ur: "اللہ touches تم" } },
      { id: '10:107:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah touches you", ur: "اللہ touches تم" } },
      { id: '10:107:4', arabic: "بِضُرٍّۢ", transliteration: "biḍurrin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with adversity", ur: "ساتھ adversity" } },
      { id: '10:107:5', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(there is) no", ur: "(there is) نہیں" } },
      { id: '10:107:6', arabic: "كَاشِفَ", transliteration: "kāshifa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "remover", ur: "remover" } },
      { id: '10:107:7', arabic: "لَهُۥٓ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '10:107:8', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '10:107:9', arabic: "هُوَ ۖ", transliteration: "huwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Him", ur: "Him" } },
      { id: '10:107:10', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and if", ur: "اور if" } },
      { id: '10:107:11', arabic: "يُرِدْكَ", transliteration: "yurid'ka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He intends for you", ur: "وہ intends for تم" } },
      { id: '10:107:12', arabic: "بِخَيْرٍۢ", transliteration: "bikhayrin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "any good", ur: "any اچھا" } },
      { id: '10:107:13', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then (there is) no", ur: "پھر (there is) نہیں" } },
      { id: '10:107:14', arabic: "رَآدَّ", transliteration: "rādda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "repeller", ur: "repeller" } },
      { id: '10:107:15', arabic: "لِفَضْلِهِۦ ۚ", transliteration: "lifaḍlihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(of) His Bounty", ur: "(of) His Bounty" } },
      { id: '10:107:16', arabic: "يُصِيبُ", transliteration: "yuṣību", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He causes it to reach", ur: "وہ causes it کو reach" } },
      { id: '10:107:17', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "He causes it to reach", ur: "وہ causes it کو reach" } },
      { id: '10:107:18', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '10:107:19', arabic: "يَشَآءُ", transliteration: "yashāu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He wills", ur: "وہ wills" } },
      { id: '10:107:20', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '10:107:21', arabic: "عِبَادِهِۦ ۚ", transliteration: "ʿibādihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His slaves", ur: "His slaves" } },
      { id: '10:107:22', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '10:107:23', arabic: "ٱلْغَفُورُ", transliteration: "l-ghafūru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) the Oft-Forgiving", ur: "(is) the Oft-Forgiving" } },
      { id: '10:107:24', arabic: "ٱلرَّحِيمُ", transliteration: "l-raḥīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Merciful", ur: "the بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 18, to: 19, label: 'موصول + صلة' },
        { from: 20, to: 21, label: 'جار + مجرور' }
      ],
    },
  },
  108: {
    text: "قُلْ يَـٰٓأَيُّهَا ٱلنَّاسُ قَدْ جَآءَكُمُ ٱلْحَقُّ مِن رَّبِّكُمْ ۖ فَمَنِ ٱهْتَدَىٰ فَإِنَّمَا يَهْتَدِى لِنَفْسِهِۦ ۖ وَمَن ضَلَّ فَإِنَّمَا يَضِلُّ عَلَيْهَا ۖ وَمَآ أَنَا۠ عَلَيْكُم بِوَكِيلٍۢ",
    translation: {
      en: "",
      ur: "کہہ دو کہ لوگو تمہارے پروردگار کے ہاں سے تمہارے پاس حق آچکا ہے تو جو کوئی ہدایت حاصل کرتا ہے تو ہدایت سے اپنے ہی حق میں بھلائی کرتا ہے۔ اور جو گمراہی اختیار کرتا ہے تو گمراہی سے اپنا ہی نقصان کرتا ہے۔ اور میں تمہارا وکیل نہیں ہوں",
    },
    words: [
      { id: '10:108:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '10:108:2', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O mankind", ur: "اے mankind" } },
      { id: '10:108:3', arabic: "ٱلنَّاسُ", transliteration: "l-nāsu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O mankind", ur: "اے mankind" } },
      { id: '10:108:4', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '10:108:5', arabic: "جَآءَكُمُ", transliteration: "jāakumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has come to you", ur: "has come کو تم" } },
      { id: '10:108:6', arabic: "ٱلْحَقُّ", transliteration: "l-ḥaqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '10:108:7', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '10:108:8', arabic: "رَّبِّكُمْ ۖ", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '10:108:9', arabic: "فَمَنِ", transliteration: "famani", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So whoever", ur: "So whoever" } },
      { id: '10:108:10', arabic: "ٱهْتَدَىٰ", transliteration: "ih'tadā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) guided", ur: "(is) guided" } },
      { id: '10:108:11', arabic: "فَإِنَّمَا", transliteration: "fa-innamā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then only", ur: "پھر صرف" } },
      { id: '10:108:12', arabic: "يَهْتَدِى", transliteration: "yahtadī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(he is) guided", ur: "(وہ is) guided" } },
      { id: '10:108:13', arabic: "لِنَفْسِهِۦ ۖ", transliteration: "linafsihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for his soul", ur: "for his روح" } },
      { id: '10:108:14', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '10:108:15', arabic: "ضَلَّ", transliteration: "ḍalla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "goes astray", ur: "goes astray" } },
      { id: '10:108:16', arabic: "فَإِنَّمَا", transliteration: "fa-innamā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then only", ur: "پھر صرف" } },
      { id: '10:108:17', arabic: "يَضِلُّ", transliteration: "yaḍillu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he strays", ur: "وہ strays" } },
      { id: '10:108:18', arabic: "عَلَيْهَا ۖ", transliteration: "ʿalayhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against it", ur: "against it" } },
      { id: '10:108:19', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And I am not", ur: "اور میں am نہیں" } },
      { id: '10:108:20', arabic: "أَنَا۠", transliteration: "anā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And I am not", ur: "اور میں am نہیں" } },
      { id: '10:108:21', arabic: "عَلَيْكُم", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over you", ur: "اوپر تم" } },
      { id: '10:108:22', arabic: "بِوَكِيلٍۢ", transliteration: "biwakīlin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "a guardian", ur: "a guardian" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'فعل + فاعل' }
      ],
    },
  },
  109: {
    text: "وَٱتَّبِعْ مَا يُوحَىٰٓ إِلَيْكَ وَٱصْبِرْ حَتَّىٰ يَحْكُمَ ٱللَّهُ ۚ وَهُوَ خَيْرُ ٱلْحَـٰكِمِينَ",
    translation: {
      en: "",
      ur: "اور (اے پیغمبر) تم کو جو حکم بھیجا جاتا ہے اس کی پیروی کئے جاؤ اور (تکلیفوں پر) صبر کرو یہاں تک کہ خدا فیصلہ کردے۔ اور وہ سب سے بہتر فیصلہ کرنے والا ہے",
    },
    words: [
      { id: '10:109:1', arabic: "وَٱتَّبِعْ", transliteration: "wa-ittabiʿ", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And follow", ur: "اور follow" } },
      { id: '10:109:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '10:109:3', arabic: "يُوحَىٰٓ", transliteration: "yūḥā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is revealed", ur: "is revealed" } },
      { id: '10:109:4', arabic: "إِلَيْكَ", transliteration: "ilayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '10:109:5', arabic: "وَٱصْبِرْ", transliteration: "wa-iṣ'bir", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and be patient", ur: "اور be patient" } },
      { id: '10:109:6', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '10:109:7', arabic: "يَحْكُمَ", transliteration: "yaḥkuma", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Allah gives judgment", ur: "اللہ gives judgment" } },
      { id: '10:109:8', arabic: "ٱللَّهُ ۚ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah gives judgment", ur: "اللہ gives judgment" } },
      { id: '10:109:9', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '10:109:10', arabic: "خَيْرُ", transliteration: "khayru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the Best", ur: "(is) the Best" } },
      { id: '10:109:11', arabic: "ٱلْحَـٰكِمِينَ", transliteration: "l-ḥākimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Judges", ur: "(of) the Judges" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
};

export const TREEBANK_DATA = SURAH_10_TREEBANK;
export default SURAH_10_TREEBANK;
