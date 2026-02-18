/**
 * Surah Yunus (10) - Treebank Data (Ayahs 1-10)
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  10: {
    text: 'دَعْوَاهُمْ فِيهَا سُبْحَانَكَ اللَّهُمَّ وَتَحِيَّتُهُمْ فِيهَا سَلَامٌ وَآخِرُ دَعْوَاهُمْ أَنِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    translation: {
      en: 'Their call therein will be, "Exalted are You, O Allah," and their greeting therein will be, "Peace." And the last of their call will be, "Praise to Allah, Lord of the worlds!"',
      ur: 'اس میں ان کی دعا ہوگی "پاک ہے تو اے اللہ" اور اس میں ان کا سلام "سلام" ہوگا۔ اور ان کی آخری دعا ہوگی "تمام تعریف اللہ کے لیے ہے جو تمام جہانوں کا رب ہے۔"'
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
  }
};

export const TREEBANK_DATA = SURAH_10_TREEBANK;
export default SURAH_10_TREEBANK;
